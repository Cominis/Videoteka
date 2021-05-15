namespace Videoteka.API.Middleware.Logger
{
    public interface IUserRequestLogger
    {
        public void Log(UserRequestLogRecord userRequestLogRecord);
    }
}
