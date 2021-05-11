using System.Collections.Generic;
using MediatR;
using Videoteka.API.Data.Entity;

namespace Videoteka.API.CQS.Video
{
    public class GetUserVideosQuery : IRequest<IList<VideoEntity>>
    {
        public int UserId { get; }

        public GetUserVideosQuery(int userId)
        {
            UserId = userId;
        }
    }
}
