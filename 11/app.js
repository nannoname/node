const fs = require('fs');

let writeableStream = fs.createWriteStream('hello.txt');
writeableStream.write('������ ���! \n');
writeableStream.write('����������� ������ \n');
writeableStream.end('���������� ������');
let readableStream = fs.createReadStream(
    'hello.txt',
    'utf8'
);

readableStream.on('data', function (chunk) {
    console.log(chunk);
});