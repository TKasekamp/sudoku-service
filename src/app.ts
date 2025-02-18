import express from 'express';
import compression from 'compression';  // compresses requests
// import session from "express-session";
import bodyParser from 'body-parser';
import path from 'path';
// import lusca from "lusca";
// import mongo from "connect-mongo";
// import flash from "express-flash";
// import mongoose from "mongoose";
// import bluebird from "bluebird";
// import { MONGODB_URI, SESSION_SECRET } from "./util/secrets";

// const MongoStore = mongo(session);

// Controllers (route handlers)
// import * as apiController from './controllers/api';
// for tsoa autogeneration
import './controllers/sudokuController';
import { RegisterRoutes } from './routes';

// Create Express server
const app = express();

// Connect to MongoDB
// const mongoUrl = MONGODB_URI;
// mongoose.Promise = bluebird;

// mongoose.connect(mongoUrl, { useNewUrlParser: true} ).then(
//     () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
// ).catch(err => {
//     console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
//     // process.exit();
// });

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

RegisterRoutes(app);
// app.use(session({
//     resave: true,
//     saveUninitialized: true,
//     secret: SESSION_SECRET,
//     store: new MongoStore({
//         url: mongoUrl,
//         autoReconnect: true
//     })
// }));
// app.use(flash());
// app.use(lusca.xframe("SAMEORIGIN"));
// app.use(lusca.xssProtection(true));

app.use(express.static(path.join(__dirname, '../public')));
app.use(function unmatchedRoutes (req, res) {
    console.log('asdasds');
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
export default app;
