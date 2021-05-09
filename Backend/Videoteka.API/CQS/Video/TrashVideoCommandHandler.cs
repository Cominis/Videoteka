using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Videoteka.API.Repository.Contracts;

namespace Videoteka.API.CQS.Video
{
    public class TrashVideoCommandHandler : IRequestHandler<TrashVideoCommand, Task>
    {
        private readonly IVideoRepository _videoRepository;

        public TrashVideoCommandHandler(IVideoRepository videoRepository)
        {
            _videoRepository = videoRepository;
        }

        public async Task<Task> Handle(TrashVideoCommand request, CancellationToken cancellationToken)
        {
            var video = request.Video;
            if (video.IsTrashed)
            {
                video.IsTrashed = false;
                video.TrashedDateTime = null;
            }
            else
            {
                video.IsTrashed = true;
                video.TrashedDateTime = DateTime.Now;
            }
            await _videoRepository.TrashVideoAsync(request.Video);
            return Task.CompletedTask;
        }
    }
}