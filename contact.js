const fs = require('fs');
const validator = require('validator');

//membuat dan mengecek folder bernama data
if (!fs.existsSync('data')) {
  fs.mkdirSync('data');
}

//membuat dan mengecek file bernama contacts.json
if (!fs.existsSync('data/contacts.json')) {
  fs.writeFileSync ('data/contacts.json', '[]', 'utf-8');
}

//tujuannya untuk parsing data dari nama,tlp,email ke contacts.json
const answer = (nama,tlp,email) => {
  const contact = {nama,tlp,email};
  const file = fs.readFileSync('data/contacts.json', 'utf-8');
  const contacts = JSON.parse(file);

//tujuannya untuk mengecek duplikat 
const duplicate = contacts.find(contact => contact.nama === nama);
if(duplicate) {
    console.log("Nama duplikat");
    return false;
}

//untuk validasi email jika yang di inputkan bukan format email

const validasiEmail = validator.isEmail(contact.email);
if (validasiEmail == false) {
  console.log("email tidak valid");
  return false;
};

//untuk validasi notlp jika yang diinputkan bukan format id
const validasiTlp = validator.isMobilePhone(contact.tlp, 'id-ID');
if (validasiTlp == false) {
  console.log("Nomor Telepon tidak valid");
  return false;
}

//tujuannya untuk push ke contacts.json apa yang sudah diinputkan
contacts.push(contact);
fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
console.log('Terima kasih');

};

module.exports = {answer};