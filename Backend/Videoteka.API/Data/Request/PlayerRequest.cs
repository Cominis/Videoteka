using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace Videoteka.API.Data.Request
{
    public class PlayerRequest
    {
        [Required]
        [FromQuery]
        [DisplayName("id")]
        public string Id { get; set; }
        
        [Required]
        [FromQuery]
        [DisplayName("mime")]
        public string Mime { get; set; }
    }
}
