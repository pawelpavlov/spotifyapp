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
define("test", ["require", "exports", "DataService"], function (require, exports, DataService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    DataService_1.DataService.get(DataService_1.DataService.url).then(function (x) { console.log(x); });
});
//# sourceMappingURL=out.js.map