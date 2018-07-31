const pwdModule = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const fullcmd = data.toString().split(' ');
  const cmd = fullcmd[0];
  const cmdarguments = fullcmd.slice(1);
  console.log(cmdarguments); //file names read also read in the endline

  if (cmd === 'pwd') {
    pwdModule.pwd();
  }
  else if (cmd === 'ls'){
      ls();
  }
  else if (cmd === 'cat'){
    cat.cat(cmdarguments);
  }
  else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});
