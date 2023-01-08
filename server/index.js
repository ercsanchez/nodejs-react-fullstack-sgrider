// CommonJS Modules
const express = require('express');
require('./services/passport'); // require executes ./services/passport file, w/c doesn't return anything

const app = express();

// require executes ./routes/authRoutes file, w/c returns a function
// then the function is executed, where app is passed as an arg
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
