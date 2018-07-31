function pwd() {
  process.stdout.write(process.cwd() + '\n');
}

module.exports.pwd = pwd;
