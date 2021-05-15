using System;
using System.Data;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Videoteka.API.Middleware.Logger;

namespace Videoteka.API.Middleware
{
    public class GlobalExceptionHandlerMiddleware
    {
        private const string LoggingConfigSectionName = "ApplyGlobalLogging";
        
        private readonly RequestDelegate _next;
        private readonly IUserRequestLogger _userRequestLogger;
        private readonly bool _isApplyGlobalLogging = false;
        private readonly bool _isDevelopmentEnv = true;

        public GlobalExceptionHandlerMiddleware(
            RequestDelegate next,
            IConfiguration configuration,
            IUserRequestLogger userRequestLogger)
        {
            _next = next ?? throw new ArgumentNullException(nameof(next));
            _userRequestLogger = userRequestLogger ?? throw new ArgumentNullException(nameof(userRequestLogger));
            configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
            _isApplyGlobalLogging = ShouldApplyGlobalLogging(configuration);
            _isDevelopmentEnv = IsDevelopmentEnvironment(configuration);
        }

        private bool IsDevelopmentEnvironment(IConfiguration configuration)
        {
            var environment = configuration.GetSection("Environment")?.Value?.ToLower();
            return environment is not null && environment.Equals(ApplicationEnvironment.Development.ToString().ToLower());
        }

        private bool ShouldApplyGlobalLogging(IConfiguration configuration)
        {
            var loggingConfigSection = configuration.GetSection(LoggingConfigSectionName)?.Value?.ToLower();
            var isLoggingConfigSet = bool.TryParse(loggingConfigSection, out var shouldApplyGlobalLogging);
            return isLoggingConfigSet && shouldApplyGlobalLogging;
        }

        private UserRequestLogRecord CreateUserRequestLog(HttpRequest request, Exception exception)
        {
            var userRecord = new UserRequestLogRecord
            {
                Endpoint = request.Path,
                ExceptionMessage = exception.Message,
                ExceptionType = exception.InnerException != null ?
                    exception.InnerException.GetType().ToString() :
                    exception.GetType().ToString() 
            };
            return userRecord;
        }
        
        private async Task HandleServerError(
            HttpContext context,
            string responseMessage,
            Exception exception)
        {
            if (context.Response.HasStarted) return;
            context.Response.StatusCode = (int) HttpStatusCode.InternalServerError;
            var errorMessage = new ErrorMessageRecord{ErrorMessage = responseMessage};
            if (_isDevelopmentEnv && !string.IsNullOrEmpty(exception.Message))
            {
                errorMessage.ErrorMessage = exception.Message;
            }
            await context.Response.WriteAsJsonAsync(errorMessage);
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                // Uncomment line below to try out
                // throw new ArithmeticException("2 * 2 != 5");
                await _next(context).ConfigureAwait(false);
            }
            catch (Exception e) when (e is DBConcurrencyException || e is DbUpdateConcurrencyException)
            {
                TryApplyExceptionLogging(context, e);
                await HandleServerError(context, e.Message, e);
            }
            catch (Exception e)
            {
                TryApplyExceptionLogging(context, e);
                await HandleServerError(context, "Internal server error", e);
            }
        }

        private void TryApplyExceptionLogging(HttpContext context, Exception e)
        {
            if (!_isApplyGlobalLogging) return;
            var userRecord = CreateUserRequestLog(context.Request, e);
            _userRequestLogger.Log(userRecord);
        }
    }
}
