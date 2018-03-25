using System;
using System.Net.Http;
using System.Threading.Tasks;
using Flurl;
using Newtonsoft.Json;
using SpotifyAPI.Web.Enums;
using SpotifyAPI.Web.Models;
using SpotifyAPI.Web;
using SpotifyAPI.Web.Auth;
using System.Collections.Generic;
using System.Linq;

namespace Spotify.Client
{
    public class SpotifyApiClient
    {
        private const string ClientId = "996d0037680544c987287a9b0470fdbb";
        private const string ClientSecret = "5a3c92099a324b8f9e45d77e919fec13";
        protected const string BaseUrl = "https://api.spotify.com/";

        private SpotifyWebAPI spotify;

        public SpotifyApiClient()
        {
            var auth = new ClientCredentialsAuth()
            {
                //Your client Id
                ClientId = "996d0037680544c987287a9b0470fdbb",
                ClientSecret = "5a3c92099a324b8f9e45d77e919fec13",
                Scope = Scope.UserReadPrivate,
            };
            //With this token object, we now can make calls
            Token token = auth.DoAuth();

            this.spotify = new SpotifyWebAPI()
            {
                TokenType = token.TokenType,
                AccessToken = token.AccessToken,
                UseAuth = true
            };
        }

        public FullTrack GetSomeSong()
        {
            var genres = new List<string>() { "rock" };
            var res = this.spotify.GetRecommendations(null, genres);
            var track = res.Tracks.FirstOrDefault();

            var fulltrack = this.spotify.GetTrack(track.Id);
            return fulltrack;
        }
    }
}
