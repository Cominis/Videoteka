using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Videoteka.API.Data.Entity;
using Videoteka.API.Repository.Contracts;

namespace Videoteka.API.CQS.Video
{
    public class GetUserVideosQueryHandler : IRequestHandler<GetUserVideosQuery, IList<VideoEntity>>
    {
        private readonly IVideoRepository _videoRepository;

        public GetUserVideosQueryHandler(IVideoRepository videoRepository)
        {
            _videoRepository = videoRepository;
        }
        
        public async Task<IList<VideoEntity>> Handle(GetUserVideosQuery request, CancellationToken cancellationToken)
        {
            var userVideos = await _videoRepository.GetUserVideos(request.UserId);
            return userVideos;
        }
    }
}
