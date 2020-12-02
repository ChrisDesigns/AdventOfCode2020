const util = require("util");
const fs = require("fs");
const path = require('path');
const readFile = util.promisify(fs.readFile);

const fetchData = async(DayNumber) => {
    try {
      const file = await readFile(path.resolve(`./Day${DayNumber}/`, 'data.txt'));
      return file.toString().split("\n");
    } catch (e) {
      console.error(e);
      return []
    }
};

exports.fetchData = fetchData;