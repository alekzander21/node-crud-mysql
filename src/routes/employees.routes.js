import { deleteEmployess, getEmployess, postEmployess, updateEmployess,getEmployessID } from "../controllers/employees.controller.js";
import { Router } from "express";

const router = Router();
router.get("/employees", getEmployess);
router.get("/employees/:id", getEmployessID);
router.post("/employees",postEmployess);
router.put("/employees/:id",updateEmployess);
router.delete("/employees/:id",deleteEmployess);

export default router;
