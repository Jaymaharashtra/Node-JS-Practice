const connectDb = require('./databaseConfig');

// const update = async () =>{
//     let dataupdate =await connectDb();
//     let query =await dataupdate.updateOne({'c_name':'prathyusha'},{$set:{'followers':'900k'}});
//     console.log(query); 
// }
// update();

connectDb().then((item)=>{
  item.updateOne({'c_name':'prathyusha'},{$set:{'followers':'990k'}}).then((date)=>{

      console.log(date);
  })
})

