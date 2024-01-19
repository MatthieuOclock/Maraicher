import express from "express"
import * as controllers from "./controllers.js";

const router = express.Router();

router.get('/about', controllers.about);

export default router;