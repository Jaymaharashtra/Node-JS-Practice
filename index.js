const mongooes = require("mongoose");
const url = "mongodb://localhost:27017/insta";

mongooes.connect(url);

let InstaSchema = new mongooes.Schema({
  c_name: String,
  content: String,
  followers: String,
});

const saveInDB = async () => {
  const InstaModel = mongooes.model("reels", InstaSchema);
  let data = new InstaModel({
    c_name: "Pratham",
    content: "Psychological",
    followers: "2M",
  });
  let result = await data.save();
  console.log(result);
};
// saveInDB();

const updateInDB = async () => {
  const InstaUpdate = mongooes.model("reels", InstaSchema);
  const UpdateData =await InstaUpdate.updateOne(
    { c_name: "Pratham" },
    { $set: { c_name: "Prathamesh", Followers: "9M" } }
  );
  console.log(UpdateData);
};
// updateInDB();

const removeInDB = async () =>{
  const InstaRemove = mongooes.model('reels', InstaSchema);
  let removeData =await InstaRemove.deleteMany({c_name:'Pratham'});
  console.log(removeData);
}
removeInDB();

const readInDB = async () =>{
  const InstaRemove = mongooes.model('reels', InstaSchema);
  let removeData =await InstaRemove.find();
  console.log(removeData);
}
readInDB();

