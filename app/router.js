import express from "express"
import * as controllers from "./controllers.js";

const router = express.Router();

router.get('/about', controllers.about);
router.get('/toto/titi', controllers.about);

export default router;