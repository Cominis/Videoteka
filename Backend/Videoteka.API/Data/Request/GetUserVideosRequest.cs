
using System.Text.Json.Serialization;

namespace Videoteka.API.Data.Request
{
    public class GetUserVideosRequest
    {
        [JsonPropertyName("userId")]
        public int UserId { get; set; }
    }
}
