/* default config of heroku */
//   const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000



//express()
// .use(express.static(path.join(__dirname, 'public')))
// .set('views', path.join(__dirname, 'views'))
// .set('view engine', 'ejs')
// .get('/', (req, res) => res.render('pages/index'))
// .listen(PORT, () => console.log(`Listening on ${ PORT }`))


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');


const todo = require('./routes/api/todo');

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

//connect to mongo db server

mongoose
  .connect(db)
  .then(() => console.log('mongo db is conencted'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello world with Express JS '));

//Passport middleware
app.use(passport.initialize());

//Passport Config
// require('./config/passport')(passport);

app.use('/api/todo', todo);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));