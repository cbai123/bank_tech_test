const Bank = require('./bank')

describe('Bank class', () =>{
  
  jest
    .useFakeTimers()
    .setSystemTime(new Date('Sun Jan 22 2023 16:52:20 GMT+0000 (Greenwich Mean Time)'));

});