import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const chatCompletion = (model: string, messages: any[]) => {
  return axios.post(
    "https://api.openai.com/v1/chat/completions",
    { model, messages },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    }
  );
};
