const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require('./Node-cr/models/blog');

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
// because my views folder is not int the immediate directory
//but in a specific folder,
//hence the need to specify
app.set("views", "./Node-cr/views");

// middleware and static files
app.use(express.static("Node-cr/public"));
app.use(morgan("dev"));

// mongoose and mongo sandbox routes 
app.get('/add=blog', (req, res)=> { 
const blog = new Blog({
  title: "new blog", 
  snippet:"about my new blog", 
  body:" more aboutmy new blog"
})
blog.save().then((result) => { 
  res.send(result)
}).catch((err) => { 
  console.log(err);
})
})

//routes
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
