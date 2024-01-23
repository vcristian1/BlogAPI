import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';
import blogRouter from './routes/blog-routes';
import dotenv from "dotenv/config";
const mongodbUri = process.env.MONGODB_URI;

const app = express();
app.use(express.json());
app.use('/api/user', router);
app.use('/api/blog', blogRouter);

mongoose
    .connect(
        `${mongodbUri}`
        )
        .then(() => app.listen(5000))
        .then(() => 
            console.log("Connected to Database and Listening to Local Host 5000")
        )
        .catch((error) => console.log(error)
    );


//Username and Password under Security Quickstart in MongoDB 
//admin
//53q08HHaNeoxbSJ6