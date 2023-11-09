const connectDb = require('./databaseConfig');

// connectDb().then((item)=>{
//     item.find().toArray().then((data)=>{
//         console.log(data);
//     })
// })

const get =async () =>{
    let con = await connectDb();
    let result =await con.find().toArray();
    console.log(result);
}

get();
