using System;
using System.Collections;
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
        
        public async Task<int> Create(IFormFile video)
        {
            await using var dbConnection = new SqlConnection(_connectionString);
            
            const string query = @"INSERT INTO [VideotekaDb].[dbo].[Videos]
                                   (Title, ContentType, DateUploaded, SizeInBytes)
                                   OUTPUT INSERTED.Id
                                   VALUES (@Title, @ContentType, @DateUploaded, @SizeInBytes)";

            return await dbConnection.ExecuteScalarAsync<int>(query, new
            {
                Title = video.FileName.RemoveFileExtension(),
                ContentType = video.ContentType,
                DateUploaded = DateTime.UtcNow,
                SizeInBytes = video.Length,
            });
        }
    }
}
