const connectDb = require('./databaseConfig');

const insert = async () =>{
    let con = await connectDb();
    let query =await con.insertOne({'c_name':'yourVikas','content':'relationship Coach','followers':'689k'});
    console.log(query);
}
insert()