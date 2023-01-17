import {addDays} from 'date-fns';


const date = new Date('2022-05-15T00:00:00.000Z');

const newDate = addDays(date, 5);

console.log(newDate); // 2022-05-20T00:00:00.000Z

// original not modified
console.log(date); // 2022-05-15T00:00:00.000Z %>