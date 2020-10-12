const args = process.argv.slice(2);

const handlebars = require('handlebars');
const fs = require('fs');
const monthRange = require('./functions/monthRange');
const data = require('./constants/data');
const buildWorkerAttendance = require('./functions/buildWorkerAttendance');

const file = fs.readFileSync('./templates/template.hbs', 'utf-8');
const template = handlebars.compile(file);

const month = +args[0];
const year = +args[1];

console.log(`month: ${month}, year: ${year}`);

const days = monthRange(month, year);
const workers = buildWorkerAttendance(data, days);

console.log('Days:');
console.log(days);
console.log('End of days');

workers.forEach(worker => {
    console.log(worker);
});

const html = template({ days: days, workers: workers });
// console.log(html);

fs.writeFileSync('./out/file.html', html, { encoding: 'utf-8', flag: 'w' });