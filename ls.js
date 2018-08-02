const fs = require('fs')

module.exports.ls = (prompt) => {
    fs.readdir('./', 'utf-8', (err, files) => {
        if (err) throw err
        else {
            prompt(files.join('\n'))
        };
    })
}
