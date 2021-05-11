using Microsoft.EntityFrameworkCore;
using Videoteka.API.Data.Entity;

namespace Videoteka.API.Data
{
    public class VideotekaDbContext : DbContext
    {
        public VideotekaDbContext(DbContextOptions<VideotekaDbContext> options) : base(options) { }
        
        public DbSet<VideoEntity> Videos { get; set; }
        public DbSet<UserEntity> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<UserEntity>().HasKey(e => e.Id);
            
            modelBuilder.Entity<VideoEntity>().HasKey(e => e.Id);
            modelBuilder.Entity<VideoEntity>()
                .HasOne(e => e.User)
                .WithMany(e => e.Videos)
                .HasForeignKey(e => e.UserId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
