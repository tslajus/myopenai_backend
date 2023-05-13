import { Request, Response } from "express";
import { chatCompletion } from "../services/chatComletion.service";

export const chatCompletionController = async (req: Request, res: Response) => {
  const { model, messages } = req.body;

  try {
    const response = await chatCompletion(model, messages);
    res.json(response.data);
  } catch (error: any) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};
