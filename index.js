import express from 'express';
import * as dotenv from 'dotenv';
import rooter from './app/rooter.js';

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views/');

app.use(express.static('./public'));

app.use(rooter);

app.listen(port, () => {
    console.log(`app sur http://localhost:${port}/`);
});