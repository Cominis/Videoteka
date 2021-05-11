using System.Collections.Generic;

namespace Videoteka.API.Data.Entity
{
    public class UserEntity
    {
        public int Id { get; set; }

        public virtual ICollection<VideoEntity> Videos { get; set; }

        public UserEntity()
        {
            Videos = new List<VideoEntity>();
        }
    }
}
