import { OutputTarget } from '../AnalysisSummary';
import fs from 'fs';

export class HtmlReport implements OutputTarget {
  constructor() {}

  print(report: string): void {
    const html = `
    <div>
      <h1>Analysis Output</h1>
      <div>${report}</div>
    </div>
    `;

    // Create HTML file with the report
    fs.writeFileSync('report.html', html);
  }
}
