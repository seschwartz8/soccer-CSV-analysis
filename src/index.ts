import { CsvFileReader } from './CsvFileReader';
import { SoccerMatchReader } from './SoccerMatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './Analyzers/WinsAnalysis';
import { AnalysisSummary } from './AnalysisSummary';

// Create an object that satisfies the "DataReader" interface (this allows flexibility for reading from different sources, like APIs, CSV etc.)
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying the "DataReader" interface
const soccerMatchReaderLongWay = new SoccerMatchReader(csvFileReader);

// OR you can combine those two steps by using the static method on SoccerMatchReader to create a default one that reads from CSV
const soccerMatchReader = SoccerMatchReader.fromCsv('football.csv');

// Read/parse data from source
soccerMatchReader.load();
const matches = soccerMatchReader.matches;

// Conduct desired analysis (e.g. count wins by given team name) and print report in desired way (e.g. console log)
const summaryConsole = new AnalysisSummary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);
summaryConsole.buildAndPrintReport(matches);

// Shorthand version, if you use our premade static method on the AnalysisSummary class for a precongifured win analysis with HTML report
const preconfig = AnalysisSummary.winsHtmlReport('Man United');
preconfig.buildAndPrintReport(matches);
