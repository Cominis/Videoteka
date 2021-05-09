using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Videoteka.API.Data.Entity;

namespace Videoteka.API.Repository.Contracts
{
    public interface IVideoRepository
    {
        Task<int> Create(IFormFile video);
        Task<IList<VideoEntity>> GetUserVideos(int userId);
        Task<VideoEntity> GetAsync(int videoId);
        Task DeleteAsync(int videoId);
        Task<IList<VideoEntity>> GetUserTrashedVideosAsync(int userId);
        Task<IList<VideoEntity>> GetUntrashedUserVideos(int userId);
        Task TrashVideoAsync(VideoEntity video);
    }
}
