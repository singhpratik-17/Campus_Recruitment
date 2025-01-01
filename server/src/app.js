const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();


const authRouter = require('./routes/api/auth');
const companiesRouter = require('./routes/api/companies');
const studentsRouter = require('./routes/api/students');
const jobsRouter = require('./routes/api/jobs');
const profileRouter = require('./routes/api/profile');

// mongoose
//   .connect(process.env.MONGO_DB_URI)
//   .then(() => console.log('Connected to DB!'))
//   .catch(error => console.log(error));



mongoose
  .connect(process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to DB!'))
  .catch(error => console.log(error));

  // console.log('MONGO_DB_URI:', process.env.MONGO_DB_URI);
  // console.log('JWT_SECRET:', process.env.JWT_SECRET);
  // console.log('HOST:', process.env.HOST);
  // console.log('PORT:', process.env.PORT);
  

const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/user', authRouter);
app.use('/api/companies', companiesRouter);
app.use('/api/students', studentsRouter);
app.use('/api/jobs', jobsRouter);
app.use('/api/profile', profileRouter);

app.use((req, res) => res.status(404).send('404 - Not Found'));


module.exports = app;


