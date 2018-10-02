import chalk from 'chalk';
import boxConsole from '../dist';

let msg = chalk(`New ${chalk.yellow('patch')} version of ${chalk.red('box-console')} available! ${chalk.red('0.1.0')} -> ${'0.1.1'}`);
let tip = chalk(`Registry ${chalk.cyan('https://github.com/snayan/box-console')}`);
let install = chalk(`Run ${chalk.green('npm i ' + 'box-console')} to update`);

boxConsole([msg, tip, install]);
