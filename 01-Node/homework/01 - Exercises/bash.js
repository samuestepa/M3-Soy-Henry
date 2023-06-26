const process = require('process');
const { Z_ASCII } = require('zlib');
const commands = require('./commands/index.js');

const bash = () => {
   process.stdout.write('prompt >');
   process.stdin.on('data', (data) => {
      let args = toString(data);
      let palabra = args.split(' ');
      let cmd = palabra[0];
      for(element of commands){
         if(element === cmd){
            print('command not fount: cmd')
         } else {
            commands[cmd](print, args);
         }
      }
   });
}

const print = (output) => {
   process.stdout.write(output);
   process.stdout.write('\nprompt >');
}

bash();
module.exports = {
   print,
   bash,
};
