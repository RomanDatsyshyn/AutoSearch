require('dotenv').config();
const http = require('http');
const cors = require('cors');
const multer = require('multer');
const express = require('express');

const {
  errorHandler,
  unknownEndpoint,
} = require('./middlewares/requestMiddleware');

const app = express();
const db = require('./database');

db.connection();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './carImage/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

app.use(cors());
app.use(express.json());
app.use(upload.array('carImage'));
app.use(express.urlencoded({ extended: true }));
app.use('/carImage', express.static('carImage'));

global.appRoot = __dirname;

const { adminRouter, userRouter, authRouter, carRouter } = require('./routes');

app.use('/admin', adminRouter);
app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('/cars', carRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

const server = http.createServer(app);

server.listen(process.env.PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server listening on port ${process.env.PORT}...`);
});
