let currentDate = new Date();

global.date = currentDate;

module.exports.getMessage = function () {
    let hour = currentDate.getHours();
    if (hour > 16) return '������ �����, ' + global.name;
    else if (hour > 10) return '������ ����, ' + name;
    else return '������ ����, ' + name;
};