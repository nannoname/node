const fs = require('fs');

let writeableStream = fs.createWriteStream('hello.txt');
writeableStream.write('��� ����� Node.js \n');
writeableStream.write('Node.js � ��� ����� ���������� JavaScript, ����������� �� ������ V8 Chrome. \n');
writeableStream.write('\n');

writeableStream.write('������ ������ � REPL \n');
writeableStream.write('����� ��������� REPL, ������� ������� `node` � ���������. ');
writeableStream.write('����� ����� �� ������� ������� � ��������� JavaScript - ���, � REPL ����� �������� ���������� ����������. \n');
writeableStream.write('\n');

writeableStream.write('������������� ������� ��� ��������� ������ \n');
writeableStream.write('������ ��������� ���������� ������������ ������� ������ ������ � �������� � ���� �� ���� �� ���������. ');
writeableStream.write('������ ����� ���� ������������ ��� ������ ������ �� �����, �������� ������ �� ����, ������ ��� ���������� ������ � �.�. \n');
writeableStream.write('\n');

writeableStream.write('�������� � Express.js  \n');
writeableStream.write('Express.js � ��� ��������������� � ������ ���-��������� ��� Node.js, ������� ��������� ��������� ���-������� � ������������� ���-����������.  \n');
writeableStream.write('\n');

writeableStream.write('����������� � ������ � ������ ������, ������ ��� MongoDB ��� MySQL \n');
writeableStream.write('��� ����������� � ���� ������ ������ ��������� ���������� � ��������� ��������������� �������, ����� ���� ����� ��������� �������� CRUD (Create, Read, Update, Delete) ��� ������ � �������. \n');
writeableStream.write('\n');

writeableStream.write('������������� ����������� ��� ������������, ����� ��� Mocha � Chai \n');
writeableStream.write('��� ����������� ��������� ������ � ��������� ��������� ���� ������, ����� ��� ��������� ����� (unit tests), �������������� �����, �������������� ����� � �.�.  \n');
writeableStream.write('\n');

writeableStream.write('�������� � ������������  \n');
writeableStream.write('�������������� ����������� � ��� ��������� ����������, � ������� ���������������� ����������� �� ���������, ����������� �������, ������� ����� ���� ���������� � �������������� ���������� ���� �� �����.  \n');
writeableStream.write('\n');

writeableStream.write('������������� ������� � EventEmitter � Node.js \n');
writeableStream.write('������ EventEmitter, ������� ��������� ��������� � ��������� ���������. ');
writeableStream.write('������� � Node.js ����� ���� ���������� � ���������������� ���� ��� �������������� �� ���������� �������.');
writeableStream.end('\n');
let readableStream = fs.createReadStream(
    'hello.txt',
    'UTF-8'
);
readableStream.on('data', function (chunk) {
    console.log(chunk);
});