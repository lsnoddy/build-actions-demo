// A JavaScript action with no dependencies: it only uses what the runner provides.
const fs = require('fs');
const os = require('os');

// Each input arrives as an environment variable named INPUT_<NAME>.
const who = (process.env.INPUT_WHO || '').trim();

if (!who) {
  // A workflow command makes an error annotation; a non-zero exit code fails the step.
  console.log('::error title=Hello JavaScript::Input "who" is empty, so there is nobody to greet.');
  process.exit(1);
}

const greeting = `Hello, ${who}! (JavaScript action on Node ${process.versions.node})`;
console.log(greeting);

// Outputs are name=value lines appended to the file named by GITHUB_OUTPUT.
fs.appendFileSync(process.env.GITHUB_OUTPUT, `greeting=${greeting}${os.EOL}`);
