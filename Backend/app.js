import express from 'express';
import cors from 'cors';
import e from 'express';


const app = express();

app.get('/' , (req , res ) => {
    res.send('API is running....');
})

export { app };

