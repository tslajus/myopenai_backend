import { Router } from "express";
import { chatCompletionController } from "../controllers/chatCompletion.controller";

const router = Router();

router.post("/chat-completion", chatCompletionController);

export default router;
