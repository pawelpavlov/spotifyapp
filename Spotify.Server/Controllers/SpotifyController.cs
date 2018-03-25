using Spotify.Client;
using Spotify.Server.Models;
using SpotifyAPI.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Spotify.Server.Controllers
{
    public class SpotifyController : ApiController
    {
        
        public SimpleTrack GetSong()
        {
            var client = new SpotifyApiClient();
            var res = client.GetSomeSong();
            return res;
        }
    }
}
