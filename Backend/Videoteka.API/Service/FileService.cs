using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Videoteka.API.Service.Contracts;

namespace Videoteka.API.Service
{
    public class FileService : IFileService
    {
        public async Task CreateFile(IFormFile formFile)
        {
            Directory.CreateDirectory(Config.FileUploadDirectory);
            var fullFilePath = Path.Combine(Config.FileUploadDirectory, formFile.FileName);
            if (File.Exists(fullFilePath)) return;
            await using var fileStream = new FileStream(fullFilePath, FileMode.Create, FileAccess.Write);
            await formFile.CopyToAsync(fileStream).ConfigureAwait(false);
            await fileStream.FlushAsync().ConfigureAwait(false);
        }

        public Task<bool> FileExists(IFormFile formFile)
        {
            Directory.CreateDirectory(Config.FileUploadDirectory);
            var fullFilePath = Path.Combine(Config.FileUploadDirectory, formFile.FileName);
            var isFileExists = File.Exists(fullFilePath);
            return Task.FromResult(isFileExists);
        }

        public Task<string> GetFilePath(string filename)
        {
            var path = Path.Combine(Config.FileUploadDirectory, filename);
            return Task.FromResult(File.Exists(path) ? path : null);
        }
    }
}
