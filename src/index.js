const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
// const Handlebars = require("express-handlebars");
const app = express();
const port = 2433;
const route = require("./routes");
const db = require("./config/db");

// connect db
db.connect();

app.use(express.static(path.join(__dirname, "public")));
app.use("/homepage/tasks/:slug", express.static(path.join(__dirname, "public")));
app.use("/homepage", express.static(path.join(__dirname, "public")))
app.use("/homepage/tasks/showCreate", express.static(path.join(__dirname, "public")))
app.use("/homepage/tests/:slug/showCreate", express.static(path.join(__dirname, "public")))
app.use("/homepage/users/:slug", express.static(path.join(__dirname, "public")))

// http logger
app.use(morgan("combined"));

// post method read body
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      // shortenDate(date) {return date.toLocaleString()},
    }
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
// console.log('PATH: ', path.join(__dirname, 'resources/views'))

//route init
route(app);

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
