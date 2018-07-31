const fs = require('fs');

module.exports.cat = function(filenames){
    Array.from(filenames).map(function(fname){
        process.stdout.write(fs.readFile(__dirname.concat('/', fname), (err, data) => {
            if (err) throw err;
            else {
                process.stdout.write(data.toString());
            }
        }));
    });
}