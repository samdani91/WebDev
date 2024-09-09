const db = require("./db");

function isEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
}

function isExist(value, password, callback) {
    let sql =
        "SELECT EXISTS(SELECT 1 FROM INFORMATION WHERE Mobile = ?) AS exist";
    if (isEmail(value)) {
        sql = "SELECT EXISTS(SELECT 1 FROM INFORMATION WHERE Email = ?) AS exist";
    }
    db.query(sql, [value], (err, results) => {
        if (err) {
            return callback(err, null);
        }

        if (password != null) {
            sql =
                "SELECT EXISTS(SELECT 1 FROM INFORMATION WHERE Passwords = ?) AS exist";
            db.query(sql, [password], (err2, results2) => {
                if (err2) {
                    return callback(err2, null);
                }
                callback(null, results[0].exist === 1 && results2[0].exist === 1);
            });
        } else {
            // results[0].exist will be 1 if the user exists, otherwise 0
            callback(null, results[0].exist === 1);
        }
    });
}

module.exports = isExist;
