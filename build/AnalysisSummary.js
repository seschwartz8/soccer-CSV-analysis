"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
// Delegates specific analysis requested to an Analyzer
// Takes an OutputTarget to know how to print the results (console log vs. HTML etc.)
// Builds and prints the final report
var AnalysisSummary = /** @class */ (function () {
    function AnalysisSummary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    AnalysisSummary.winsHtmlReport = function (team) {
        // Gives a preconfigured instance of AnalysisSummary
        return new AnalysisSummary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());
    };
    AnalysisSummary.prototype.buildAndPrintReport = function (matches) {
        var report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    };
    return AnalysisSummary;
}());
exports.AnalysisSummary = AnalysisSummary;
