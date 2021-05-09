using System.Threading.Tasks;
using MediatR;

namespace Videoteka.API.CQS.Video
{
    public class DeleteVideoCommand : IRequest<Task>
    {
        public  int VideoId { get; init; }
    }
}