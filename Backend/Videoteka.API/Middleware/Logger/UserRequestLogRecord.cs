using System;

namespace Videoteka.API.Middleware.Logger
{
    public record UserRequestLogRecord
    {
        public string Endpoint { get; init; }
        public DateTime CurrentDateTime { get; } = DateTime.Now;
        public string ExceptionType { get; init; }
        public string ExceptionMessage { get; init; }
        public string PersonalGDPRInformation { get; set; } = "SomeGDPRFromBodyOrRouteParams";
    }
}
