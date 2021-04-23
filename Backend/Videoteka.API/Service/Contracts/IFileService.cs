using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Videoteka.API.Service.Contracts
{
    public interface IFileService
    {
        Task<bool> FileExists(IFormFile formFile);
        Task CreateFile(IFormFile formFile);
        Task<string> GetFilePath(string filename);
    }
}
