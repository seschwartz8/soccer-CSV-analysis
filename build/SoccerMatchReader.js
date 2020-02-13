"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ONE VERSION OF REUSABLE CODE USING INTERFACES
var utils_1 = require("./utils");
var SoccerMatchReader = /** @class */ (function () {
    function SoccerMatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    SoccerMatchReader.prototype.load = function () {
        // Get the 2D array of strings from whichever reader (CSV, API, whatever we want)
        this.reader.read();
        this.matches = this.reader.data.map(function (row) {
            // Convert each item in row of strings to more appropriate type for our specific soccer stats
            return [
                utils_1.dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    };
    return SoccerMatchReader;
}());
exports.SoccerMatchReader = SoccerMatchReader;
