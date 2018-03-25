define("DataService", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DataService = (function () {
        function DataService() {
        }
        DataService.get = function (url) {
            return fetch(url);
        };
        DataService.url = "http://localhost:50406/api/spotify";
        return DataService;
    }());
    exports.DataService = DataService;
});
define("main", ["require", "exports", "DataService"], function (require, exports, DataService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    DataService_1.DataService.get(DataService_1.DataService.url).then(function (x) { console.log(x); });
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
});
//# sourceMappingURL=out.js.map