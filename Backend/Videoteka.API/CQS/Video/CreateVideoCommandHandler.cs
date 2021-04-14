using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Videoteka.API.Repository.Contracts;
using Videoteka.API.Service.Contracts;

namespace Videoteka.API.CQS.Video
{
    public class CreateVideoCommandHandler : IRequestHandler<CreateVideoCommand, int>
    {
        private readonly IFileService _fileService;
        private readonly IVideoRepository _videoRepository;
        
        public CreateVideoCommandHandler(IFileService fileService, IVideoRepository videoRepository)
        {
            _fileService = fileService;
            _videoRepository = videoRepository;
        }
        
        public async Task<int> Handle(CreateVideoCommand request, CancellationToken cancellationToken)
        {
            var createdVideoId = await _videoRepository.Create(request.Video);
            await _fileService.CreateFile(request.Video);
            return createdVideoId;
        }
    }
}