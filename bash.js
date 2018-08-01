const pwd = require('./pwd').pwd;
const ls = require('./ls').ls;
const cat = require('./cat').cat;

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ')[0];
  const args = data.toString().trim().split(' ').slice(1)
  console.log(args); //file names read also read in the endline

  if (cmd === 'pwd') {
    pwd();
  }
  else if (cmd === 'ls') {
    ls();
  }
  else if (cmd === 'cat') {
    cat(args);
  }
  else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('prompt > ');
  }
});
