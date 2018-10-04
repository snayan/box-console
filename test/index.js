import test from 'ava';
import chalk from 'chalk';
import boxConsole from '../src';

const compare = (t, actual, expected) => t.is(actual.trim(), expected.trim());

test('empty string box console', (t) => {
  let msg = '';
  compare(t, boxConsole(msg), msg);
});

test('empty array string box console', (t) => {
  let msg = [''];
  compare(t, boxConsole(msg), '');
});

test('single string box console', (t) => {
  let msg = 'this is single string box console';
  let expected = `
${chalk.yellow('┌')}${chalk.yellow('─────────────────────────────────────────')}${chalk.yellow('┐')}
${chalk.yellow('│')}                                         ${chalk.yellow('│')}
${chalk.yellow('│')}    ${msg}    ${chalk.yellow('│')}
${chalk.yellow('│')}                                         ${chalk.yellow('│')}
${chalk.yellow('└')}${chalk.yellow('─────────────────────────────────────────')}${chalk.yellow('┘')}
`;
  compare(t, boxConsole(msg), expected);
});

test('color string box console', (t) => {
  let msg = `this is ${chalk.red('color')} single string box console`;
  let expected = `
${chalk.yellow('┌')}${chalk.yellow('───────────────────────────────────────────────')}${chalk.yellow('┐')}
${chalk.yellow('│')}                                               ${chalk.yellow('│')}
${chalk.yellow('│')}    ${msg}    ${chalk.yellow('│')}
${chalk.yellow('│')}                                               ${chalk.yellow('│')}
${chalk.yellow('└')}${chalk.yellow('───────────────────────────────────────────────')}${chalk.yellow('┘')}
  `;
  compare(t, boxConsole(msg), expected);
});

test('array string box console', (t) => {
  let msg = chalk(`New ${chalk.yellow('patch')} version of ${chalk.red('box-console')} available! ${chalk.red('0.1.0')} -> ${'0.1.1'}`);
  let tip = chalk(`Registry ${chalk.cyan('https://github.com/snayan/box-console')}`);
  let install = chalk(`Run ${chalk.green('npm i ' + 'box-console')} to update`);
  let expected = `
${chalk.yellow('┌')}${chalk.yellow('──────────────────────────────────────────────────────────────────')}${chalk.yellow('┐')}
${chalk.yellow('│')}                                                                  ${chalk.yellow('│')}
${chalk.yellow('│')}    ${msg}    ${chalk.yellow('│')}
${chalk.yellow('│')}          ${tip}          ${chalk.yellow('│')}
${chalk.yellow('│')}                  ${install}                 ${chalk.yellow('│')}
${chalk.yellow('│')}                                                                  ${chalk.yellow('│')}
${chalk.yellow('└')}${chalk.yellow('──────────────────────────────────────────────────────────────────')}${chalk.yellow('┘')}
  `;
  compare(t, boxConsole([msg, tip, install]), expected);
});
