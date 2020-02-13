"use strict";
// ONE VERSION OF REUSABLE CODE USING INHERITANCE
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import fs module from node standard library for reading CSV files
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        // Tell readFileSync our CSV is encoded with utf-8. We expect to get a string back containing the contents of the whole file.
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8'
        })
            .split('\n') // Turn each line into an array
            .map(function (row) {
            // For each line, break sections into arrays on the comma
            return row.split(',');
        })
            .map(this.mapRow);
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
