const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const find_by_name = require("./db-connect");
const add_to_db = require("./db-connect");
const delete_from_db=require("./db-connect");

app.use(bodyParser.json());
app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.redirect("static/page.html");
});




app.post("/formsearch", async (req, res) => {
  const name = await find_by_name(req.body.names);
  res.send(name);
});

app.post("/formcreate", async (req, res)=>{
    await add_to_db(req.body);
})

app.post("/formdelete", async (req, res)=>{
    await delete_from_db(req.body);
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});