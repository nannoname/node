let currentDate = new Date();
module.exports.date = currentDate;

module.exports.getMessage = function (name) {
    let hour = currentDate.getHours();
    if (hour > 16) return '������ �����, ' + name;
    else if (hour > 10) return '������ ����, ' + name;
    else return '������ ����, ' + name;
};