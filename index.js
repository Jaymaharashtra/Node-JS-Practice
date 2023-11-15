const express = require("express");
const app = express();
require("./dbConfig");
const Insta = require("./Insta");


app.use(express.json());

app.post("/create", async (req, res) => {
  let data = new Insta(req.body);
  let result = await data.save();
  console.log(result);
  res.send(result);
});

app.get("/read/:key", async (req, res) => {
  let data = await Insta.find({
    "$or":[
      {'c_name':{$regex:req.params.key}}, //This uses for search using parameters...
      {'content':{$regex:req.params.key}}
    ]
  });
  console.log(data);
  res.send(data);
});

app.put("/update", async (req, res) => {
  let query = await Insta.updateOne({ c_name: "Untold" }, { $set: req.body });
  res.send(query);
});

app.delete("/delete/:_id",async (req, res) => {
  console.log(req.params);
  let query =await Insta.deleteOne(req.params);
  res.send(query);
});

app.listen(4800);
