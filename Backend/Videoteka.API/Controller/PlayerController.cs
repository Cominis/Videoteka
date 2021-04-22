using System.IO;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Videoteka.API.Data.Request;
using Videoteka.API.Service.Contracts;
using System;
using Microsoft.AspNetCore.Http;

namespace Videoteka.API.Controller
{
    [ApiController]
    [Route("")]
    public class PlayerController : ControllerBase
    {
        private const int BufferSize = 1000;
        
        private readonly IFileService _fileService;

        public PlayerController(IFileService fileService)
        {
            _fileService = fileService;
        }

        [HttpGet("playback")]
        [ProducesResponseType(StatusCodes.Status206PartialContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Play([FromQuery] PlayerRequest playerRequest)
        {
            var filePath = await _fileService.GetFilePath(playerRequest.Id);
            if (filePath == null)
            {
                return NotFound();
            }
            var memory = new MemoryStream();

            var buffer = new byte[BufferSize];
            
            await using var fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read, FileShare.Read);
            var totalSize = (int) fileStream.Length;
            
            while (totalSize > 0)
            {
                var count = totalSize > BufferSize ? BufferSize : totalSize;
                var sizeBufferRead = fileStream.Read(buffer, 0, count);
                await memory.WriteAsync(buffer.AsMemory(0, sizeBufferRead)); 
                totalSize -= sizeBufferRead;
            }

            return File(memory, new MediaTypeHeaderValue(playerRequest.Mime).MediaType, true);
        }
    }
}
