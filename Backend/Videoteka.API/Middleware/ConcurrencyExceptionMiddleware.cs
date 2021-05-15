using System.Data;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace Videoteka.API.Middleware
{
    namespace Videoteka.API.Middleware
    {
        public class ConcurrecnyExceptionMiddleware
        {
            private readonly RequestDelegate _next;

            public ConcurrecnyExceptionMiddleware(RequestDelegate next)
            {
                _next = next;
            }

            private async Task HandleConcurrencyException(HttpContext context, string responseMessage)
            {
                context.Response.StatusCode = (int) HttpStatusCode.Conflict;
                var errorMessage = new ErrorMessageRecord{ErrorMessage = responseMessage};
                await context.Response.WriteAsJsonAsync(errorMessage);
            }

            public async Task Invoke(HttpContext context)
            {
                try
                {
                    // Uncomment line below to try out
                    // throw new DBConcurrencyException();
                    await _next(context).ConfigureAwait(false);
                }
                catch (DBConcurrencyException dbConcurrencyException)
                {
                    await HandleConcurrencyException(context, "Concurrent access, please try again");
                    throw;
                }
                catch (DbUpdateConcurrencyException dbUpdateConcurrencyException)
                {
                    await HandleConcurrencyException(context, "Concurrent update, please try again");
                    throw;
                }
            }
        }
    }
}
