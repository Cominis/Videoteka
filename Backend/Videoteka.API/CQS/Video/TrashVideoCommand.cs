using System.Threading.Tasks;
using MediatR;
using Videoteka.API.Data.Entity;

namespace Videoteka.API.CQS.Video
{
    public class TrashVideoCommand : IRequest<Task>
    {
        public VideoEntity Video { get; set; }
    }
}