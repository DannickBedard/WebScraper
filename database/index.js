const fs = require('fs');
const exec = require('child_process').exec;
const async = require('async');

const migrationsFolder = './migrations/';
const seedsFolder = './seeds/';

const migrationFiles = fs.readdirSync(migrationsFolder);
const seedFiles = fs.readdirSync(seedsFolder);

const migrationFuncs = migrationFiles.map(function(file) {
  return exec.bind(null, `node ${migrationsFolder}${file}`); // execute node command
});

const seedFuncs = seedFiles.map(function(file) {
  return exec.bind(null, `node ${seedsFolder}${file}`); // execute node command
});

function getResults(err, data) {
  if (err) {
    return console.log(err);
  }
  const results = data.map(function(lines){
    console.log('ici');
    return lines.join(''); // joining each script lines
  });
  console.log(results);
}

// to run your scipts in parallel use
// async.parallel(migrationFuncs, getResults);
// async.parallel(seedFuncs, getResults);

// to run your scipts in series use
async.series(migrationFuncs, getResults);
async.series(seedFuncs, getResults);