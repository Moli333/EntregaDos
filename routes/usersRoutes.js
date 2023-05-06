import express from "express";
const router = express.Router();

import { 
    agregar, listar, 
    eliminar, editar, 
    listarUno 
} from "../controllers/userController.js";

router.post("/", agregar);
router.get("/", listar);
router.get("/:id", listarUno);
router.put("/:id", editar);
router.delete("/:id", eliminar);

export default router;