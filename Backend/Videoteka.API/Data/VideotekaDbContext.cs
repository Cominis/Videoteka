using Microsoft.EntityFrameworkCore;
using Videoteka.API.Data.Entity;

namespace Videoteka.API.Data
{
    public class VideotekaDbContext : DbContext
    {
        public VideotekaDbContext(DbContextOptions<VideotekaDbContext> options) : base(options) { }
        
        public DbSet<VideoEntity> Videos { get; set; }
    }
}
