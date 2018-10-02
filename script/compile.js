const { exec } = require('child_process');

exec('tsc -d --declarationDir types');
