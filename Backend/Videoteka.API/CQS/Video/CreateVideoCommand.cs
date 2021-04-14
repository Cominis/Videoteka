using MediatR;
using Microsoft.AspNetCore.Http;

namespace Videoteka.API.CQS.Video
{
    public class CreateVideoCommand : IRequest<int>
    {
        public CreateVideoCommand(IFormFile video)
        {
            Video = video;
        }

        public IFormFile Video { get; }
    }
}
