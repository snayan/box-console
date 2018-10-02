# box-console
> Terminal box message 

![console](/Users/yang.zhang/Documents/github/box-console/media/console.jpg)

## Install

```
$ npm install box-console
```

## Usage

```javascript
const chalk = require('chalk');
const boxConsole = require('box-console');

let msg = chalk(`New ${chalk.yellow('patch')} version of ${chalk.red('box-console')} available! ${chalk.red('0.1.0')} -> ${'0.1.1'}`);
let tip = chalk(`Registry ${chalk.cyan('https://github.com/snayan/box-console')}`);
let install = chalk(`Run ${chalk.green('npm i ' + 'box-console')} to update`);

boxConsole([msg, tip, install]);

```

or you can use for loading ESM modules.

```javascript
import boxConsole from 'box-console';
```

## API

### boxConsole(messages)

#### messages

Type：`string`|`string[]`

message be output.

## Related

* [boxen](https://github.com/sindresorhus/boxen) - Create boxes in the terminal

