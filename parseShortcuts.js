const fs = require('fs');
const transformData = require('./util/transformData');
const program = process.argv[2];

function parseShortcuts(fileName) {
  const pathString = `./shortcuts/${fileName}`;

  fs.readFile(pathString, function (err, data) {
    const shortcutData = transformData(JSON.parse(data.toString()));
    fs.writeFile(`./parsedShortcuts/${fileName}`, JSON.stringify(shortcutData), function (err) {
      if (err) throw err;
      console.log(`File ${fileName} updated in parsedShortcuts folder.`);
    });
  });
}

if (program) {
  console.log(`Parsing shortcuts for ${program}...`);
  parseShortcuts(`${program}.json`);
} else {
  fs.readdir('./shortcuts', function (err, data) {
    data.forEach(file => {
      parseShortcuts(file);
    })
  });
}

