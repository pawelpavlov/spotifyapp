using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Spotify.Server.Models
{
    public class Voting
    {
        public string TrackId { get; set; }
        public bool Vote { get; set; }
    }
}