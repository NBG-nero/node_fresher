const express = require("express");
const morgan = require("morgan");

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

// middleware and static files
app.use(express.static("Node-cr/public"));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  const blogs = [
    {
      title: " Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new Blog" });
});

//404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
