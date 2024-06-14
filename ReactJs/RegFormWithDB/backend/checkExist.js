const db = require('./db');

function isExist(mobile, callback) {
    const sql = 'SELECT EXISTS(SELECT 1 FROM INFORMATION WHERE mobile = ?) AS exist';
    db.query(sql, [mobile], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        // results[0].exist will be 1 if the user exists, otherwise 0
        callback(null, results[0].exist === 1);
    });
}

module.exports = isExist;
