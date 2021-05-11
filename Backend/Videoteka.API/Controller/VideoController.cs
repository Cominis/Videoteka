﻿using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Videoteka.API.CQS.Video;
using Videoteka.API.Data.Request;
using Videoteka.API.Data.Response;
using Videoteka.API.Extensions;
using Videoteka.API.Service.Contracts;

namespace Videoteka.API.Controller
{
    [ApiController]
    [Route("[controller]")]
    public class VideoController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly IFileService _fileService;

        public VideoController(IMediator mediator, IFileService fileService)
        {
            _mediator = mediator;
            _fileService = fileService;
        }

        /// <summary>
        /// Creates a new video
        /// </summary>
        /// <returns>unique identifier of the created entity</returns>
        [HttpPost, DisableRequestSizeLimit]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status409Conflict)]
        public async Task<IActionResult> UploadVideo(IFormFile formFile)
        {
            if (await _fileService.FileExists(formFile))
                return Conflict($"File with name '{formFile.FileName.RemoveFileExtension()}' already exists");
            var createdVideoId = await _mediator.Send(new CreateVideoCommand(formFile));
            var response = new UploadVideoResponse {CreatedVideoId = createdVideoId};
            return StatusCode(StatusCodes.Status201Created, response);
        }
        /// <summary>
        /// Gets videos of user
        /// </summary>
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<GetUserVideosResponse> GetUserVideos([FromQuery] GetUserVideosRequest request)
        {
            var userVideos = await _mediator.Send(new GetUserVideosQuery(request.UserId));
            return new GetUserVideosResponse {UserId = request.UserId, UserVideos = userVideos};
        }
    }
}
