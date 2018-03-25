

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
            //var cl = new Spotify.ApiClient.SpotifyApiClient();
            //var task = cl.SearchArtistsAsync("Michael Jackson");
            //task.Wait();
            //var tmp = task.Result;
            //var x = 45;
         
        var auth = new ClientCredentialsAuth()
            {
                //Your client Id
                ClientId = "996d0037680544c987287a9b0470fdbb",
                //Your client secret UNSECURE!!
                ClientSecret = "5a3c92099a324b8f9e45d77e919fec13",
                //How many permissions we need?
                Scope = Scope.UserReadPrivate,
            };
            //With this token object, we now can make calls
            Token token = auth.DoAuth();
            
            var spotify = new SpotifyWebAPI()
            {
                TokenType = token.TokenType,
                AccessToken = token.AccessToken,
                UseAuth = true
            };



            var x = spotify.SearchItems("behemoth", SearchType.All, 10);

            var fg = 34;

        }
    }
}
