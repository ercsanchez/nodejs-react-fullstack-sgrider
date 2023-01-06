// CommonJS
// const express = require('express');

// ES2015/ ES6
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.listen(5000);