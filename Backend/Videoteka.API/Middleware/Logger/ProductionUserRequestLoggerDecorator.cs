namespace Videoteka.API.Middleware.Logger
{
    public class ProductionUserRequestLoggerDecorator : IUserRequestLogger
    {
        private readonly IUserRequestLogger _userRequestLogger;
        
        public ProductionUserRequestLoggerDecorator(IUserRequestLogger userRequestLogger)
        {
            _userRequestLogger = userRequestLogger;
        }
        
        public void Log(UserRequestLogRecord userRequestLogRecord)
        {
            userRequestLogRecord.PersonalGDPRInformation = null;
            _userRequestLogger.Log(userRequestLogRecord);
        }
    }
}
