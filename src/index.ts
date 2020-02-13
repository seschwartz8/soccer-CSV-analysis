import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
import { SoccerMatchReader } from './SoccerMatchReader';

const reader = new SoccerMatchReader('football.csv');
reader.read();
console.log(reader.data);
