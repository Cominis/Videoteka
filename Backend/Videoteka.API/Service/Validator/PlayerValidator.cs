using FluentValidation;
using Videoteka.API.Data.Request;

namespace Videoteka.API.Service.Validator
{
    public class PlayerValidator : AbstractValidator<PlayerRequest>
    {
        public PlayerValidator()
        {
            RuleFor(x => x.Mime)
                .Equal("video/mp4").WithMessage("Mime type not supported");
            RuleFor(x => x.Id)
                .NotEmpty().WithMessage("Id was not provided");
        }
    }
}
