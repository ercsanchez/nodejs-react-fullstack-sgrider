// CommonJS Modules
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User'); // models must be loaded before passport
require('./services/passport'); // require executes ./services/passport file, w/c doesn't return anything

// connect to mongodb database/cluster
mongoose.connect(keys.mongoURI);

const app = express();

// require executes ./routes/authRoutes file, w/c returns a function
// then the function is executed, where app is passed as an arg
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
