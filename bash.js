// const path = require('path');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if (cmd === 'pwd'){
        // process.stdout.write(__dirname);
        // OR
        process.stdout.write(process.cwd() + '\n');
    }
    else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }
});