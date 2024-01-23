import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';
import blogRouter from './routes/blog-routes';

const app = express();
app.use(express.json());
app.use('/api/user', router);
app.use('/api/blog', blogRouter);

mongoose
    .connect(
        "mongodb+srv://admin:53q08HHaNeoxbSJ6@cluster0.zaml2mp.mongodb.net/?retryWrites=true&w=majority"
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