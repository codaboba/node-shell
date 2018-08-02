
const { pwd } = require('./pwd')
const { ls } = require('./ls')
const { cat } = require('./cat')

function prompt(data) {
  console.log(data);
  process.stdout.write('\nprompt > ')
}

const main = (data) => {
  const entry = data.toString().trim();
  const [command, arg] = entry.split(' ');

  switch (command) {
    case 'pwd':
      pwd(prompt)
      break
    case 'ls':
      ls(prompt)
      break
    case 'cat':
      cat(arg, prompt)
      break
    default:
      prompt('Not found')
  }
}

process.stdout.write('Welcome to Node Shell!\nprompt > ');
process.stdin.on('data', main)

// previous not-so good way:
// const pwd = require('./pwd').pwd;
// const ls = require('./ls').ls;
// const cat = require('./cat').cat;

// process.stdout.write('prompt > ');

// process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim().split(' ')[0];
//   const args = data.toString().trim().split(' ').slice(1)

//   if (cmd === 'pwd') {
//     pwd();
//   }
//   else if (cmd === 'ls') {
//     ls();
//   }
//   else if (cmd === 'cat') {
//     cat(args);
//   }
//   else {
//     process.stdout.write('You typed: ' + cmd);
//     process.stdout.write('prompt > ');
//   }
// });
