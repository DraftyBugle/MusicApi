import { Router } from "express";
export const router = Router();
import {MusicCt} from "./musicCt.js";


router.get ("/",MusicCt.getAll);