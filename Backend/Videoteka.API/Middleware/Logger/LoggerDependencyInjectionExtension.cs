using System;
using System.Linq;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Videoteka.API.Middleware.Logger
{
    public static class LoggerDependencyInjectionExtension
    {
        public static IServiceCollection AddUserRequestExceptionLogger(
            this IServiceCollection services,
            IConfiguration configuration, 
            string environmentSectionConfigurationName = "Environment")
        {
            services.AddSingleton<IUserRequestLogger>(sp =>
            {
                if (configuration is null)
                    throw new ArgumentNullException(nameof(configuration));
                if (environmentSectionConfigurationName is null)
                    throw new ArgumentNullException(nameof(environmentSectionConfigurationName));
                var logger = sp.GetRequiredService<ILoggerFactory>().CreateLogger(typeof(IUserRequestLogger));
                var developmentLogger = new DevelopmentUserRequestLogger(logger);
                var environmentConfigurationSection = configuration.GetSection(environmentSectionConfigurationName);
                if (!Enum.GetNames<ApplicationEnvironment>().Any(appEnvironment =>
                    appEnvironment.ToLower().Equals(environmentConfigurationSection.Value.ToLower())))
                {
                    throw new ArgumentException("Unrecognized Environment in configuration");
                }
                if (ApplicationEnvironment.Development.ToString().ToLower()
                    .Equals(environmentConfigurationSection.Value.ToLower()))
                {
                    return developmentLogger;
                }
                return new ProductionUserRequestLoggerDecorator(developmentLogger);
            });
            return services;
        }
    }
}
