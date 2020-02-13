"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SoccerMatchReader_1 = require("./SoccerMatchReader");
var reader = new SoccerMatchReader_1.SoccerMatchReader('football.csv');
reader.read();
console.log(reader.data);
