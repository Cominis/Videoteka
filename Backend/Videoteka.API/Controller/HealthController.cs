using Microsoft.AspNetCore.Mvc;

namespace Videoteka.API.Controller
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
