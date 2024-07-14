const { createPool } = require('mysql');

const pool = createPool({
    host: '127.0.0.1',
    user: "root",
    password: "system",
    database: "samdani",
    port: 3306,
    connectionLimit: 10
});

//1st query
// pool.query(`select course from REQUIRED`, function (err, requiredCourses, fields) {
//     if (err) {
//         return console.log(err);
//     }
//     // console.log(requiredCourses);
//     const courseList = requiredCourses.map(course => course.course);
//     // console.log(courseList);



//     pool.query(`select DISTINCT student from  TAKEN where Course IN (?)`,[courseList],function(err,result,fields){
//         if (err) {
//             return console.log(err);
//         }
//         console.log(result);

//         pool.end(function (err) {
//             if (err) {
//                 return console.log(err);
//             }
//         });

//     });


// });

pool.query('INSERT INTO FULL_NAME (FULL_NAMES) VALUES (?)', ['Samdani Mozumder'], (err, result) => {
    if (err) {
        return console.log(err);
    }

    pool.end(function (err) {
        if (err) {
            return console.log(err);
        }
    });
});

module.exports = pool;