function pwd() {
  process.stdout.write(process.cwd() + '\n');
  process.stdout.write('prompt > ');
}

module.exports.pwd = pwd;
