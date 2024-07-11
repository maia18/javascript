const fs = require('fs').promises;

// const pathArchive = path.resolve(__dirname, '..','test.txt');

module.exports = (path, datas) => {
    fs.writeFile(path, datas, { flag: 'w' });

};

// fs.writeFile(pathArchive, 'Phrase 1 \n', { flag: 'a' });