using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Videoteka.API.Data.Entity;
using Videoteka.API.Repository.Contracts;

namespace Videoteka.API.CQS.Video
{
    public class GetUntrashedUserVideosQueryHandler : IRequestHandler<GetUntrashedUserVideosQuery, IList<VideoEntity>>
    {
        private readonly IVideoRepository _videoRepository;

        public GetUntrashedUserVideosQueryHandler(IVideoRepository videoRepository)
        {
            _videoRepository = videoRepository;
        }

        public async Task<IList<VideoEntity>> Handle(GetUntrashedUserVideosQuery request, CancellationToken cancellationToken)
        {
            var untrashedUserVideos = await _videoRepository.GetUntrashedUserVideos(request.UserId);
            return untrashedUserVideos;
        }
    }
}
