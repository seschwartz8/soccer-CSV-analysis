import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();

// Use an enum to create a reference for related values
enum MatchResult {
  HomeWine = 'H',
  AwayWin = 'A',
  Draw = 'D'
}
