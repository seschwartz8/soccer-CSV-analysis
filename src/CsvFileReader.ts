// ONE VERSION OF REUSABLE CODE USING INTERFACES

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
      .split('\n') // Turn each line into an array
      .map((row: string): string[] => {
        // For each line, break sections into arrays on the comma
        return row.split(',');
      });
  }
}
