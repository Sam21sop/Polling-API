import express from 'express';


const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send("Hello developer..!")
});


export default server;