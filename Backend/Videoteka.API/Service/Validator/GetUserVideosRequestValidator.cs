using FluentValidation;
using Videoteka.API.Data.Request;

namespace Videoteka.API.Service.Validator
{
    public class GetUserVideosRequestValidator : AbstractValidator<GetUserVideosRequest>
    {
        public GetUserVideosRequestValidator()
        {
            RuleFor(x => x.UserId)
                .NotEmpty()
                .WithMessage("User id is required to get user videos");
        }
    }
}
