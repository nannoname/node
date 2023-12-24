const fs = require('fs');

let writeableStream = fs.createWriteStream('hello.txt');
writeableStream.write('Что такое Node.js \n');
writeableStream.write('Node.js – это среда выполнения JavaScript, построенная на движке V8 Chrome. \n');
writeableStream.write('\n');

writeableStream.write('Основы работы с REPL \n');
writeableStream.write('Чтобы запустить REPL, введите команду `node` в терминале. ');
writeableStream.write('После этого вы сможете вводить и выполнять JavaScript - код, а REPL будет выводить результаты немедленно. \n');
writeableStream.write('\n');

writeableStream.write('Использование потоков для обработки данных \n');
writeableStream.write('Потоки позволяют эффективно обрабатывать большие объемы данных и работать с ними по мере их получения. ');
writeableStream.write('Потоки могут быть использованы для чтения данных из файла, отправки данных по сети, сжатия или распаковки данных и т.д. \n');
writeableStream.write('\n');

writeableStream.write('Введение в Express.js  \n');
writeableStream.write('Express.js – это минималистичный и гибкий веб-фреймворк для Node.js, который позволяет создавать веб-сервера и разрабатывать веб-приложения.  \n');
writeableStream.write('\n');

writeableStream.write('Подключение и работа с базами данных, такими как MongoDB или MySQL \n');
writeableStream.write('Для подключения к базе данных обычно требуется установить и настроить соответствующий драйвер, после чего можно выполнять операции CRUD (Create, Read, Update, Delete) для работы с данными. \n');
writeableStream.write('\n');

writeableStream.write('Использование фреймворков для тестирования, таких как Mocha и Chai \n');
writeableStream.write('Эти инструменты позволяют писать и запускать различные типы тестов, такие как модульные тесты (unit tests), интеграционные тесты, функциональные тесты и т.д.  \n');
writeableStream.write('\n');

writeableStream.write('Введение в микросервисы  \n');
writeableStream.write('Микросервисная архитектура — это структура приложения, в которой функциональность разбивается на небольшие, независимые сервисы, которые могут быть развернуты и масштабированы независимо друг от друга.  \n');
writeableStream.write('\n');

writeableStream.write('Использование событий и EventEmitter в Node.js \n');
writeableStream.write('Модуль EventEmitter, который позволяет создавать и управлять событиями. ');
writeableStream.write('События в Node.js могут быть определены в пользовательском коде или использоваться из встроенных модулей.');
writeableStream.end('\n');
let readableStream = fs.createReadStream(
    'hello.txt',
    'UTF-8'
);
readableStream.on('data', function (chunk) {
    console.log(chunk);
});