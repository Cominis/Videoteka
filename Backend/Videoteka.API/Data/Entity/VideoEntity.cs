using System;

namespace Videoteka.API.Data.Entity
{
    public class VideoEntity
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public long SizeInBytes { get; set; }
        public string ContentType { get; set; }
        public DateTime DateUploaded { get; set; }

        public int UserId { get; set; }
        public UserEntity User { get; set; }
    }
}
