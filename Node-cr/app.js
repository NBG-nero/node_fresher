const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

///express app
const app = express();

//mongoose fucker
mongoose.set("strictQuery", true);

//connect to mongodb
const dbURI =
  "mongodb+srv://NetNigga:test1234@node.1q6axec.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");
// because my views folder is not in the immediate directory
//but in a specific folder,
//hence the need to specify
app.set("views", "./Node-cr/views");

// middleware and static files
app.use(express.static("Node-cr/public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

//blog routes
app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", {
        title: " All Blog",
        blogs: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  Blog.findById(id)
    .then((result) => {
      res.render("details", {
        blog: result,
        title: "Blog Details",
      });
    })
    .then((err) => {
      console.log(err);
    });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new Blog" });
});

//404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
