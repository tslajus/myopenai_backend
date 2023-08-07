import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ status: "Server is awake!" });
});

export default router;
