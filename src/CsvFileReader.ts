// Import fs module from node standard library for reading CSV files
import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];
  constructor(public filename: string) {}

  read(): void {
    // Tell readFileSync our CSV is encoded with utf-8. We expect to get a string back containing the contents of the whole file.
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      // Turn each line into an array
      .split('\n')
      // For each line, break sections into arrays on the comma
      .map((row: string): string[] => {
        return row.split(',');
      });
  }
}
