using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Videoteka.API.Data.Entity;
using Videoteka.API.Extensions;
using Videoteka.API.Repository.Contracts;

namespace Videoteka.API.Repository
{
    public class VideoRepository : IVideoRepository
    {
        private readonly string _connectionString;

        public VideoRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("VideotekaDbConnection");
        }

        public async Task<IList<VideoEntity>> GetUserVideos(int userId)
        {
            await using var dbConnection = new SqlConnection(_connectionString);
            
            const string query = @"SELECT * FROM [VideotekaDb].[dbo].[Videos]
                                   WHERE @UserId = UserId";
            
            var result = await dbConnection.QueryAsync<VideoEntity>(query, new
            {
                UserId = userId
            });

            return result.ToList();
        }

        public async Task<VideoEntity> GetAsync(int videoId)
        {
            await using var dbConnection = new SqlConnection(_connectionString);
            
            const string query = @"SELECT * FROM [VideotekaDb].[dbo].[Videos]
                                   WHERE Id = @VideoId";
            
            var result =  await dbConnection.QuerySingleAsync<VideoEntity>(query, new
            {
                VideoId = videoId
            });

            return result;
        }

        public async Task DeleteAsync(int videoId)
        {
            await using var dbConnection = new SqlConnection(_connectionString);
            
            const string query = @"DELETE FROM [VideotekaDb].[dbo].[Videos]
                                   WHERE Id = @VideoId";
            
            var result = await  dbConnection.ExecuteAsync(query, new
            {
                VideoId = videoId
            });
        }

        public async Task<int> Create(IFormFile video)
        {
            await using var dbConnection = new SqlConnection(_connectionString);
            
            const string query = @"INSERT INTO [VideotekaDb].[dbo].[Videos]
                                   (Title, ContentType, DateUploaded, SizeInBytes, UserId)
                                   OUTPUT INSERTED.Id
                                   VALUES (@Title, @ContentType, @DateUploaded, @SizeInBytes, @UserId)";

            return await dbConnection.ExecuteScalarAsync<int>(query, new
            {
                Title = video.FileName.RemoveFileExtension(),
                ContentType = video.ContentType,
                DateUploaded = DateTime.UtcNow,
                SizeInBytes = video.Length,
                UserId = 1
            });
        }

        public async Task<IList<VideoEntity>> GetUserTrashedVideosAsync(int userId)
        {
            await using var dbConnection = new SqlConnection(_connectionString);
                                               
            const string query = @"SELECT * FROM [VideotekaDb].[dbo].[Videos]
                                   WHERE UserId = @UserId AND IsTrashed = @IsInTrash";
               
            var result =  await dbConnection.QueryAsync<VideoEntity>(query, new
            {
                UserId = userId,
                IsInTrash = true
            });

            return result.ToList();
        }

        public async Task<IList<VideoEntity>> GetUntrashedUserVideos(int userId)
        {
            await using var dbConnection = new SqlConnection(_connectionString);
                                               
            const string query = @"SELECT * FROM [VideotekaDb].[dbo].[Videos]
                                   WHERE UserId = @UserId AND IsTrashed = @IsInTrash";
               
            var result =  await dbConnection.QueryAsync<VideoEntity>(query, new
            {
                UserId = userId,
                IsInTrash = false
            });

            return result.ToList();
        }

        public async Task TrashVideoAsync(VideoEntity video)
        {
            await using var dbConnection = new SqlConnection(_connectionString);
            
            const string query = @"UPDATE [VideotekaDb].[dbo].[Videos]
                                   SET 
                                      TrashedDateTime = @TrashedDateTime,
                                      IsTrashed = @IsTrashed
                                   WHERE Id = @Id AND UserId = @UserId";

            var result =  await dbConnection.ExecuteAsync(query, new
            {
                Id = video.Id,
                UserId = video.UserId,
                TrashedDateTime = video.TrashedDateTime,
                IsTrashed = video.IsTrashed,
            });
        }
    }
}
