"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var SoccerMatchReader_1 = require("./SoccerMatchReader");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var WinsAnalysis_1 = require("./Analyzers/WinsAnalysis");
var AnalysisSummary_1 = require("./AnalysisSummary");
// Create an object that satisfies the "DataReader" interface (this allows flexibility for reading from different sources, like APIs, CSV etc.)
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying the "DataReader" interface
var soccerMatchReaderLongWay = new SoccerMatchReader_1.SoccerMatchReader(csvFileReader);
// OR you can combine those two steps by using the static method on SoccerMatchReader to create a default one that reads from CSV
var soccerMatchReader = SoccerMatchReader_1.SoccerMatchReader.fromCsv('football.csv');
// Read/parse data from source
soccerMatchReader.load();
var matches = soccerMatchReader.matches;
// Conduct desired analysis (e.g. count wins by given team name) and print report in desired way (e.g. console log)
var summaryConsole = new AnalysisSummary_1.AnalysisSummary(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
summaryConsole.buildAndPrintReport(matches);
// Shorthand version, if you use our premade static method on the AnalysisSummary class for a precongifured win analysis with HTML report
var preconfig = AnalysisSummary_1.AnalysisSummary.winsHtmlReport('Man United');
preconfig.buildAndPrintReport(matches);
