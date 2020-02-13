import { OutputTarget } from '../AnalysisSummary';

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
