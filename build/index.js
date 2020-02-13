"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var SoccerMatchReader_1 = require("./SoccerMatchReader");
// Create an object that satisfies the "DataReader" interface (this allows flexibility for reading from different sources, like APIs, CSV etc.)
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying the "DataReader" interface
var soccerMatchReader = new SoccerMatchReader_1.SoccerMatchReader(csvFileReader);
// Read/parse data from source
soccerMatchReader.load();
console.log(soccerMatchReader.matches);
