import express from "express"
import * as controllers from "./controllers.js";

const rooter = express.Router();

rooter.get("/" , controllers.list); 
rooter.get('/about', controllers.about);
rooter.get('/list', controllers.list);
rooter.get('/list-fruits', controllers.fruit);
rooter.get('/list-legumes', controllers.legume);
rooter.get('/product/:name', controllers.product);

export default rooter;