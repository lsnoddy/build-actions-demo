import * as core from '@actions/core';

try {
  // getInput reads INPUT_WHO for you; required: true fails fast on an empty value.
  const who = core.getInput('who', { required: true });
  const greeting = `Hello, ${who}! (JavaScript action with the toolkit)`;
  core.info(greeting);

  // setOutput writes to GITHUB_OUTPUT safely, even for multiline values.
  core.setOutput('greeting', greeting);

  // The job summary is Markdown that appears on the run's summary page.
  await core.summary.addHeading('Greeting from the toolkit', 3).addRaw(greeting, true).write();
} catch (error) {
  // setFailed writes an error annotation and sets a failing exit code.
  core.setFailed(error.message);
}
