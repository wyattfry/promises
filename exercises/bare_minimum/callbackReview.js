/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

exports = module.exports = {};
// This function should retrieve the first line of the file at `filePath`
exports.pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(err, data.split('\n')[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
exports.getStatusCode = function (url, callback) {
  // TODO
  request(url, (err, resp, body) => {
    callback(err, resp && resp.statusCode);
  });
};

// Export these functions so we can test them and reuse them in later exercises
// module.exports = {
//   getStatusCode: getStatusCode,
//   pluckFirstLineFromFile: pluckFirstLineFromFile
// };
