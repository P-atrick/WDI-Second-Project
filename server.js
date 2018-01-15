const bodyParser = require('body-parser');
const express        = require('express');
const expressLayouts = require('express-ejs-layouts');
const flash = require('express-flash');
const morgan         = require('morgan');
const session = require('express-session');
const mongoose       = require('mongoose');
mongoose.Promise     = require('bluebird');
const methodOverride = require('method-override');
const routes         = require('./config/routes');
const authentication = require('./lib/authentication');

const app = express();
const { port, env, dbURI, sessionSecret } = require('./config/environment');

mongoose.connect(dbURI);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
if(env === 'development') app.use(morgan('dev'));

app.use(session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride(function (req) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(authentication);
app.use(routes);

app.listen(port, () => console.log(`Express is listening on port ${port}`));
