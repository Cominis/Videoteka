using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Videoteka.API.Repository.Contracts
{
    public interface IVideoRepository
    {
        Task<int> Create(IFormFile video);
    }
}
