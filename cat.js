const fs = require('fs');

module.exports.cat = (arg, prompt) => {
    fs.readFile(arg, (err, data) => {
        if (err) throw err;
        else {
            prompt(data.toString());
        }
    })
}
