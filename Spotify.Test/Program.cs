

using Spotify.Client;
using SpotifyAPI.Web;
using SpotifyAPI.Web.Auth;
using SpotifyAPI.Web.Enums;
using SpotifyAPI.Web.Models;

namespace Spotify.Test
{
    class Program
    {
        static void Main(string[] args)
        {
            var client = new SpotifyApiClient();
            client.GetSomeSong();
        }
    }
}
