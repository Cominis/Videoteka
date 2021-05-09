using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Videoteka.API.Data.Entity;
using Videoteka.API.Repository.Contracts;

namespace Videoteka.API.CQS.Video
{
    public class GetVideoByVideoIdQueryHandler : IRequestHandler<GetVideoByVideoIdQuery, VideoEntity>
    {
        private readonly IVideoRepository _videoRepository;

        public GetVideoByVideoIdQueryHandler(IVideoRepository videoRepository)
        {
            _videoRepository = videoRepository;
        }

        public async Task<VideoEntity> Handle(GetVideoByVideoIdQuery request, CancellationToken cancellationToken)
        {
            var video = await _videoRepository.GetAsync(request.VideoId);
            return video;
        }
    }
}
