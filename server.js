const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const express        = require('express');
const expressLayouts = require('express-ejs-layouts');
const flash = require('express-flash');
const morgan         = require('morgan');
const sessions = require('express-session');
const mongoose       = require('mongoose');
mongoose.Promise     = require('bluebird');
const methodOverride = require('method-override');
const routes         = require('./config/routes');

const app = express();
const { port, env, dbURI } = require('./config/environment');

mongoose.connect(dbURI);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
if(env === 'development') app.use(morgan('dev'));

app.use(routes);

app.listen(port, () => console.log(`Express is listening on port ${port}`));
