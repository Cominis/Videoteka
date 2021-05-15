using System.Text.Json;
using Microsoft.Extensions.Logging;

namespace Videoteka.API.Middleware.Logger
{
    public class DevelopmentUserRequestLogger : IUserRequestLogger
    {
        private readonly ILogger _logger;
        
        public DevelopmentUserRequestLogger(ILogger logger)
        {
            _logger = logger;
        }
        
        public void Log(UserRequestLogRecord userRequestLogRecord)
        {
            var jsonString = JsonSerializer.Serialize(userRequestLogRecord);
            _logger.LogError(jsonString);
        }
    }
}
