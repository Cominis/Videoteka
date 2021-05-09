using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Videoteka.API.Repository.Contracts;

namespace Videoteka.API.CQS.Video
{
    public class DeleteVideoCommandHandler : IRequestHandler<DeleteVideoCommand, Task>
    {
        private readonly IVideoRepository _videoRepository;

        public DeleteVideoCommandHandler(IVideoRepository videoRepository)
        {
            _videoRepository = videoRepository;
        }

        public async Task<Task> Handle(DeleteVideoCommand request, CancellationToken cancellationToken)
        {
            await _videoRepository.DeleteAsync(request.VideoId);
            return Task.CompletedTask;
        }
    }
}
