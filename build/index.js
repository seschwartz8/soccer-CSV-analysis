"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var SoccerMatchReader_1 = require("./SoccerMatchReader");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var AnalysisSummary_1 = require("./AnalysisSummary");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
// Create an object that satisfies the "DataReader" interface (this allows flexibility for reading from different sources, like APIs, CSV etc.)
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying the "DataReader" interface
var soccerMatchReader = new SoccerMatchReader_1.SoccerMatchReader(csvFileReader);
// Read/parse data from source
soccerMatchReader.load();
var matches = soccerMatchReader.matches;
// Conduct analysis to count wins by given team name and print report in desired way (console log)
var summaryConsole = new AnalysisSummary_1.AnalysisSummary(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
summaryConsole.buildAndPrintReport(matches);
// Use AnalysisSummary to print report in a different desired way (HTML file) - could also conduct different analysis
var summaryHTML = new AnalysisSummary_1.AnalysisSummary(new WinsAnalysis_1.WinsAnalysis('Man United'), new HtmlReport_1.HtmlReport());
summaryHTML.buildAndPrintReport(matches);
