require('dotenv').config();
require('./models/db.js');
const multer = require("multer");
const express = require('express');
const { connectDB } = require('./config/db.config.js');
const cors = require('cors');
const path = require("path");
const app = express();

const morgan = require('morgan');

//port
const PORT = process.env.PORT || 3000;
//routers
const usersRouter = require('./routes/users.routes.js');
const formsRouter = require('./routes/forms.routes.js');
const authRouter = require('./routes/auth.routes.js');


app.use(express.static(path.resolve(__dirname, "uploads/ComprobanteFactura")));
app.use(morgan('combined')); //logger middleware for api activity
app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({ limit: '200mb', extended: true }));
app.use(express.json());
app.use(cors({
    origin: 'http://192.168.1.104:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['*'], //all headers
    credentials: true
}));
//routes
app.use('/camionetas/users', usersRouter);
app.use('/camionetas/forms', formsRouter);
app.use('/camionetas', authRouter);

// connect to the database and start the server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        });
    }).catch((err) => {
    console.error('Failed to connect to the database:', err);
    process.exit(1); // exit if connection fails
    });


