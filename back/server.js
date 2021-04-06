require("./config");

const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const passport = require("passport");
const cors = require("cors");
const path = require("path");

const localStrategy = require("passport-local").Strategy;
const app = express();
const { User } = require("./models");
const routes = require("./routes");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "../front/public"));

app.use(cors());
app.use(morgan("dev"));

//PREGUNTAR QUE HACE EXACTAMENTE ESTO Y SI ES O NO NECESARIO
app.use(
  sessions({
    secret: "bootcamp",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },

    function (email, password, done) {
      User.findOne({ email: email })
        .then((user) => {
          if (!user) {
            return done(null, false);
          }

          return user
            .hash(password, user.salt)

            .then((hash) => {
              if (hash !== user.password) {
                return done(null, false);
              }

              return done(null, user);
            });
        })
        .catch(done);
    }
  )
);


passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function (id, done) {
  User.findOne({ _id: id })
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

app.use("/api", routes);

//preguntar que es y por que va este y el static de arriba
app.use("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "'../front/public'", "index.html"));
});

//hacer middleware de error
app.use((err, req, res, next) => {
  console.error(err);
  res.status(404).send(err);
});
//repreguntar bien el funcionamiento

app.listen(3001, () => console.log("listenning on port 3001"));
