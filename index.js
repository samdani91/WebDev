const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function fun(){
    let con;

    try{
        con=await oracledb.getConnection({
            user:"hr",
            password:"hr",
            connectString:"localhost/orcl"
        });

        const data = await con.execute(
            `SELECT * FROM DEPARTMENTS`,
        );
        console.log(data.rows);
    }catch(err){
        console.log(err);
    }
}

fun();