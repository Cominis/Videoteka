using Microsoft.AspNetCore.Mvc;

namespace Videoteka.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HealthController : ControllerBase
    {
        [HttpGet]
        public string GetHealth()
        {
            return "healthy";
        }
    }
}
