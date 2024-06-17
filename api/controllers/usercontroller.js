import { db } from "../index.js";

export const test = (req, res) => {
  res.json({
    message: "API route is working",
  });
};

export const updateUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const result = await db.collection.updateUser();
  } catch (error) {
    next(error);
  }
};
