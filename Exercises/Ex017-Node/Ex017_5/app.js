const path = require('path');
const pathArchive = path.resolve(__dirname, 'test.json');
const write = require('./modules/write');
const read = require('./modules/read');
const { data } = require('browserslist');

// const peoples = [
//     { name: 'João' },
//     { name: 'Maria' },
//     { name: 'Eduardo' },
//     { name: 'Luiza' },
// ];
// const json = JSON.stringify(peoples, '', 2);
// write(pathArchive, json);

async function readArchive(path_) {
   const datas =  await read(path_);
  rendersData(datas);
}

function rendersData(datas) {
    // console.log(datas);
    datas = JSON.parse(datas);
    datas.forEach(val => console.log(val))
    datas.forEach(val => console.log(val.name))
}

readArchive(pathArchive);