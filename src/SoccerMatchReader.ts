// ONE VERSION OF REUSABLE CODE USING INTERFACES
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

interface DataReader {
  read(): void;
  data: string[][];
}

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class SoccerMatchReader {
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  load(): void {
    // Get the 2D array of strings from whichever reader (CSV, API, whatever we want)
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        // Convert each item in row of strings to more appropriate type for our specific soccer stats
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6]
        ];
      }
    );
  }
}
