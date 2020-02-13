"use strict";
// ONE VERSION OF REUSABLE CODE USING INTERFACES
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReaderInheritance_1 = require("./Alternative inheritance option/CsvFileReaderInheritance");
var utils_1 = require("./utils");
var SoccerMatchReader = /** @class */ (function (_super) {
    __extends(SoccerMatchReader, _super);
    function SoccerMatchReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SoccerMatchReader.prototype.mapRow = function (row) {
        // Convert each item in row of strings to more appropriate type
        return [
            utils_1.dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6]
        ];
    };
    return SoccerMatchReader;
}(CsvFileReaderInheritance_1.CsvFileReader));
exports.SoccerMatchReader = SoccerMatchReader;
