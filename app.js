const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const backupDatabase = require('./lib/tasks/backupDatabase');

const indexRouter = require('./lib/config/routes/index');
const usersRouter = require('./lib/config/routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Init database backup
// backupDatabase.start();

module.exports = app;
