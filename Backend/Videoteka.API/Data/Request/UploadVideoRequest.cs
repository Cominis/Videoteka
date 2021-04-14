using Microsoft.AspNetCore.Http;

namespace Videoteka.API.Data.Request
{
    public class UploadVideoRequest
    {
        public IFormFile Video { get; set; }
    }
}