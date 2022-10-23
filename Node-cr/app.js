const express = require("express");

///express app
const app = express();

// register view engine
app.set("view engine", "ejs");
// because my views folder is not int the immediate directory 
//but in a specific folder, 
//hence the need to specify
app.set("views", "./Node-cr/views");

//listen for requests
app.listen(3000);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get('/blogs/create', (req, res) => { 
res.render("create");
} );

//404 page
app.use((req, res) => {
  res.status(404).render("404");
});
