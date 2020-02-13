import { CsvFileReader } from './CsvFileReader';
import { SoccerMatchReader } from './SoccerMatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { AnalysisSummary } from './AnalysisSummary';
import { HtmlReport } from './reportTargets/HtmlReport';

// Create an object that satisfies the "DataReader" interface (this allows flexibility for reading from different sources, like APIs, CSV etc.)
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying the "DataReader" interface
const soccerMatchReader = new SoccerMatchReader(csvFileReader);

// Read/parse data from source
soccerMatchReader.load();
const matches = soccerMatchReader.matches;

// Conduct analysis to count wins by given team name and print report in desired way (console log)
const summaryConsole = new AnalysisSummary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);
summaryConsole.buildAndPrintReport(matches);

// Use AnalysisSummary to print report in a different desired way (HTML file) - could also conduct different analysis
const summaryHTML = new AnalysisSummary(
  new WinsAnalysis('Man United'),
  new HtmlReport()
);
summaryHTML.buildAndPrintReport(matches);
