const mongooes = require("mongoose");
const url = "mongodb://localhost:27017/insta";

 mongooes.connect(url);

let InstaSchema = new mongooes.Schema({
  c_name: String,
  content: String,
  followers: String,
});

const main = async () => {
  const InstaModel = mongooes.model("reels", InstaSchema);
  let data = new InstaModel({
    c_name: "Pratham",
    content: "Psychological",
    followers: "2M",
  });
  let result = await data.save();
  console.log(result);
};
main();
