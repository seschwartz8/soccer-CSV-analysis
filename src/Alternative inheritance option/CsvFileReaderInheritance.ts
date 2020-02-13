// ONE VERSION OF REUSABLE CODE USING INHERITANCE

// Import fs module from node standard library for reading CSV files
import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] = [];
  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

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
      .map(this.mapRow);
  }
}
