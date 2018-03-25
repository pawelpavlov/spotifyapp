define("DataService", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DataService = (function () {
        function DataService() {
        }
        DataService.get = function (url) {
            return fetch(url);
        };
        DataService.GetSong = function () {
            debugger;
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
    DataService_1.DataService.GetSong().then(function (x) { debugger; });
    $("#tinderslide").jTinder({
        onDislike: function (item) {
            $('#status').html('Dislike image ' + (item.index() + 1));
        },
        onLike: function (item) {
            $('#status').html('Like image ' + (item.index() + 1));
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
//# sourceMappingURL=out.js.map