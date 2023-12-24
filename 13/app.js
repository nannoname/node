const http = require('http');

http.createServer(function (request, response) {
    response.setHeader(
        'Content-Type',
        'text/html; charset=utf-8;'
    );
    if (request.url === '/') {
        response.statusCode = 302; // ��������� �������������
        // �� ����� localhost:3000/newpage
        response.setHeader('Location', '/newpage');
    } else if (request.url == '/newpage') {
        response.write('New address');
    } else if (request.url === '/home') {
        response.write('<h2>Home</h2>');
    } else if (request.url == '/about') {
        response.write('<h2>About</h2>');
    } else if (request.url == '/contact') {
        response.write('<h2>Contacts</h2>');
    } else {
        response.write('Not Found');
        response.statusCode = 404; // ����� �� ������
    }
    response.end();
}).listen(3000);