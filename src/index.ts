import stringWidth from 'string-width';
import chalk from 'chalk';

const boxConsole = function(messages: string[]): string {
  let tips = [];
  let maxLen = 0;
  let defaultSpace = 4;
  let spaceWidth = stringWidth(' ');
  let borderSpace = stringWidth('│');
  if (Array.isArray(messages)) {
    tips = Array.from(messages);
  } else {
    tips = [messages];
  }
  if (tips.length === 1 && tips[0] === '') {
    return '';
  }
  tips = [' ', ...tips, ' '];
  tips = tips.map((msg) => ({ val: msg, len: stringWidth(msg) }));
  maxLen = tips.reduce((maxLen, tip) => {
    maxLen = Math.max(maxLen, tip.len);
    return maxLen;
  }, maxLen);
  maxLen += spaceWidth * 2 * defaultSpace;
  tips = tips.map(({ val, len }) => {
    let i = 0;
    let j = 0;
    while (len + i * 2 * spaceWidth < maxLen) {
      i++;
    }
    j = i;
    while (j > 0 && len + i * spaceWidth + j * spaceWidth > maxLen) {
      j--;
    }
    return ' '.repeat(i) + val + ' '.repeat(j);
  });
  let line = chalk.yellow('─'.repeat(maxLen));
  let result = ['\n', chalk.yellow('┌') + line + chalk.yellow('┐')];
  for (let msg of tips) {
    result.push(chalk.yellow('│') + msg + chalk.yellow('│'));
  }
  result.push(chalk.yellow('└') + line + chalk.yellow('┘'));
  return result.join('\n');
};

export default boxConsole;
