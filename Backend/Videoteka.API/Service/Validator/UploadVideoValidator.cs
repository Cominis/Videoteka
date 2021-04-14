using FluentValidation;
using Videoteka.API.Data.Request;

namespace Videoteka.API.Service.Validator
{
    public class UploadVideoValidator : AbstractValidator<UploadVideoRequest>
    {
        private const long TenGigabytes = 10_737_418_240;
        private const int Zero = 0;
        
        public UploadVideoValidator()
        {
            RuleFor(x => x.Video)
                .NotNull().WithMessage("File was not provided in the request");
            RuleFor(x => x.Video.FileName)
                .NotEmpty().WithMessage("File name was not provided")
                .MaximumLength(60).WithMessage($"Maximum filename length is ${60}");
            RuleFor(x => x.Video.Length)
                .GreaterThan(Zero)
                .LessThanOrEqualTo(TenGigabytes)
                .WithMessage($"File size should be between {Zero} and {TenGigabytes}");
            RuleFor(x => x.Video.ContentType)
                .Equal("video/mp4").WithMessage($"File type should be 'video/mp4'");
        }
    }
}
