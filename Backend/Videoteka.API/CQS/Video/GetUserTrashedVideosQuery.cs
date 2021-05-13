using System.Collections.Generic;
using MediatR;
using Videoteka.API.Data.Entity;

namespace Videoteka.API.CQS.Video
{
    public class GetUserTrashedVideosQuery : IRequest<IList<VideoEntity>>
    {
        public int UserId { get; init; }
    }
}
