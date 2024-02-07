import express from 'express';
import optionRouter from './routes/optionsRoutes.js';
import questionRoutes from './routes/questionRoutes.js';


const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send("Hello developer..!")
});

server.use('/api/questions', questionRoutes)
server.use('/api/options', optionRouter)


export default server;