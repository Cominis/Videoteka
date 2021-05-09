using MediatR;
using Videoteka.API.Data.Entity;

namespace Videoteka.API.CQS.Video
{
    public class GetVideoByVideoIdQuery : IRequest<VideoEntity>
    {
        public int VideoId { get; init; }
    }
}