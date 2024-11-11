import { Router } from "express";
import { createTask, deleteTask, getTaskById, getTasks, updateTask } from "../Controllers/taskController.js" 

const router = Router();

router.get('/task', getTasks);
router.get('/task/:id', getTaskById);
router.post('/task', createTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);

export default router;