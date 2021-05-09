using System.Collections.Generic;
using MediatR;
using Videoteka.API.Data.Entity;

namespace Videoteka.API.CQS.Video
{
    public class GetUntrashedUserVideosQuery : IRequest<IList<VideoEntity>>
    {
        public int UserId { get; set; }
    }
}