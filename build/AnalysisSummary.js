"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Delegates specific analysis requested to an Analyzer
// Takes an OutputTarget to know how to print the results (console log vs. HTML etc.)
// Builds and prints the final report
var AnalysisSummary = /** @class */ (function () {
    function AnalysisSummary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    AnalysisSummary.prototype.buildAndPrintReport = function (matches) {
        var report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    };
    return AnalysisSummary;
}());
exports.AnalysisSummary = AnalysisSummary;
