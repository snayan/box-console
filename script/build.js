const rollup = require('rollup');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const inputOptions = {
  input: 'src/index.js',
  external: ['string-width', 'chalk'],
};

const outputOptions = {
  file: 'dist/index.js',
  dir: 'dist',
};

async function build(format) {
  let output = { ...outputOptions, format };
  if (format === 'esm') {
    output.file = output.file.replace('.js', '.mjs');
  }
  const bundle = await rollup.rollup(inputOptions);
  await bundle.write(output);
}

function clearLib() {
  let target = path.resolve(process.cwd(), outputOptions.dir);
  if (fs.existsSync(target)) {
    execSync('rm -rf ' + target);
  }
}

clearLib();

['cjs', 'esm'].forEach(build);
