import { CsvFileReader } from './CsvFileReader';
import { SoccerMatchReader } from './SoccerMatchReader';

// Create an object that satisfies the "DataReader" interface (this allows flexibility for reading from different sources, like APIs, CSV etc.)
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying the "DataReader" interface
const soccerMatchReader = new SoccerMatchReader(csvFileReader);

// Read/parse data from source
soccerMatchReader.load();
console.log(soccerMatchReader.matches);
