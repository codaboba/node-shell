const fs = require('fs');

module.exports.cat = (filenames) => {
    [...filenames].map(file => {
        const filePath = __dirname + `/${file}`

        fs.readFile(filePath, (err, data) => {
            if (err) throw err;
            else {
                process.stdout.write(data.toString());
                process.stdout.write('\nprompt > ');
            }
        });
    });
}
