//import file contact di file app.js
const contact = require('./contact');

const yargs = require('yargs');

//fungsi untuk input
yargs.command ({
      command: 'add',
      describe: 'add new contact',
      builder: {
          nama: {
              describe: 'Contact Nama',
              demandOption: true,
              type:'string',
          },
          tlp : {
              describe: 'contact Telepon',
              demandOption: true,
              type: 'string',
          },
          email: {
              describe: 'contact Email',
              demandOption: false,
              type: 'string',
          },
      },
      handler(argv) {
          contact.answer(argv.nama, argv.tlp, argv.email);
      },
  });
  
  //tujuannya untuk menjalankan kode di yargs.command
  yargs.parse();