using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Videoteka.API.Data.Entity;
using Videoteka.API.Repository.Contracts;

namespace Videoteka.API.CQS.Video
{
    public class GetUserTrashedVideosQueryHandler : IRequestHandler<GetUserTrashedVideosQuery, IList<VideoEntity>>
    {
        private readonly IVideoRepository _videoRepository;
        
        public GetUserTrashedVideosQueryHandler(IVideoRepository videoRepository)
        {
            _videoRepository = videoRepository;
        }

        public async Task<IList<VideoEntity>> Handle(GetUserTrashedVideosQuery request, CancellationToken cancellationToken)
        {
            var userTrashedVideos = await _videoRepository.GetUserTrashedVideosAsync(request.UserId);
            return userTrashedVideos;
        }
    }
}
