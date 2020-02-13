// ONE VERSION OF REUSABLE CODE USING INTERFACES

// Import fs module from node standard library for reading CSV files
import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  data: MatchData[] = [];
  constructor(public filename: string) {}

  read(): void {
    // Tell readFileSync our CSV is encoded with utf-8. We expect to get a string back containing the contents of the whole file.
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n') // Turn each line into an array
      .map((row: string): string[] => {
        // For each line, break sections into arrays on the comma
        return row.split(',');
      })
      .map(
        (row: string[]): MatchData => {
          // Convert each item in row of strings to more appropriate type
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
