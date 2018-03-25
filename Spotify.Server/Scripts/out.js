define("Interfaces/Song", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("DataService", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DataService = (function () {
        function DataService() {
        }
        DataService.get = function (url) {
            return fetch(url).then(function (resp) { return resp.json(); });
        };
        DataService.post = function (url, data) {
            return fetch(url, {
                body: JSON.stringify(data),
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'content-type': 'application/json'
                },
                method: 'POST',
                mode: 'cors',
                redirect: 'follow',
                referrer: 'no-referrer',
            }).then(function (resp) { return resp.json(); });
        };
        DataService.Vote = function (id, vote) {
            var url = DataService.url + '/vote';
            return DataService.post(url, { TrackId: id, Vote: vote });
        };
        DataService.GetSong = function () {
            var url = DataService.url + "/GetSong";
            return DataService.get(url);
        };
        DataService.url = "http://localhost:50406/api/spotify";
        return DataService;
    }());
    exports.DataService = DataService;
});
define("main", ["require", "exports", "DataService"], function (require, exports, DataService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    $("#tinderslide").jTinder({
        onDislike: function (item) {
            DataService_1.DataService.OnVoteNo();
        },
        onLike: function (item) {
            DataService_1.DataService.OnVoteYes();
        },
        animationRevertSpeed: 200,
        animationSpeed: 400,
        threshold: 1,
        likeSelector: '.like',
        dislikeSelector: '.dislike'
    });
    $('.actions .like, .actions .dislike').click(function (e) {
        e.preventDefault();
        $("#tinderslide").jTinder($(e.currentTarget).attr('class'));
    });
});
define("ViewModel", ["require", "exports", "DataService"], function (require, exports, DataService_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ViewModel = (function () {
        function ViewModel() {
            var _this = this;
            this.currentSongId = ko.observable('');
            this.previewTrackUrl = ko.observable('');
            DataService_2.DataService.OnVoteNo = function () { _this.VoteNo(); };
            DataService_2.DataService.OnVoteYes = function () { _this.VoteYes(); };
            this.widgetUrl = ko.computed(function () {
                var id = "";
                if (_this.currentSongId)
                    id = _this.currentSongId();
                var res = "https://embed.spotify.com/?uri=spotify:track:" + id + "&amp;theme=white";
                return res;
            });
            this.widgetAudioUrl = ko.computed(function () {
                var previewUrl = _this.previewTrackUrl();
                return previewUrl;
            });
            this.getSong();
        }
        ViewModel.prototype.getSong = function () {
            var _this = this;
            DataService_2.DataService.GetSong()
                .then(function (x) {
                _this.currentSongId(x.id);
                _this.previewTrackUrl(x.preview_url);
                console.log('url: ' + x.preview_url);
            })
                .catch(function (x) { alert('error in fetching song'); });
        };
        ViewModel.prototype.VoteYes = function () {
            this.Vote(this.currentSongId(), true);
        };
        ViewModel.prototype.VoteNo = function () {
            this.Vote(this.currentSongId(), false);
        };
        ViewModel.prototype.Vote = function (id, voting) {
            var _this = this;
            DataService_2.DataService.Vote(id, voting).then(function (x) {
                _this.currentSongId(x.id);
                _this.previewTrackUrl(x.preview_url);
                $('#card').attr("style", "");
            });
        };
        return ViewModel;
    }());
    exports.ViewModel = ViewModel;
});
//# sourceMappingURL=out.js.map