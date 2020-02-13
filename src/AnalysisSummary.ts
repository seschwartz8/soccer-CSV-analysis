import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

// Delegates specific analysis requested to an Analyzer
// Takes an OutputTarget to know how to print the results (console log vs. HTML etc.)
// Builds and prints the final report
export class AnalysisSummary {
  static winsHtmlReport(team: string): AnalysisSummary {
    // Gives a preconfigured instance of AnalysisSummary
    return new AnalysisSummary(new WinsAnalysis(team), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
