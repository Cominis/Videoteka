using System.Collections;
using System.Collections.Generic;
using Videoteka.API.Data.Entity;

namespace Videoteka.API.Data.Response
{
    public class GetUserVideosResponse
    {
        public int UserId { get; set; }
        public IEnumerable<VideoEntity> UserVideos { get; set; }
    }
}
