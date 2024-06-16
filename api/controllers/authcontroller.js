import User from "../models/model.user.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPass = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password: hashedPass });
  try {
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    // We retrieve the user from the database, using errorhandler with middleware should user not be found
    const user = await User.findOne({ username });
    if (!user) return next(errorHandler(404, "User was not found"));
    // compare passwords
    const isValidPass = bcrypt.compareSync(password, user.password);
    if (!isValidPass) return next(errorHandler(401, "Invalid credentials!"));

    // extract out the password
    const { password: pass, ...rest } = user._doc;
    // Create a JWT for storage onto the client side
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie("access-cookie", token).status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const googleSignIn = async (req, res, next) => {
  try {
    const { username, email, photo } = req.body;

    // We should check if there already exists a user in the database with this username, if so, log them in.
    const user = await User.findOne({ email: email });

    // If such a user exists, grant them a jwt, register it as a cookie
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password, ...rest } = user._doc;
      res.cookie("access-cookie", token).status(200).json(rest);
    } else {
      // Create a new user password
      const generatedPass =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPass = bcrypt.hashSync(generatedPass, 10);
      const newUser = new User({
        username:
          username.split(" ").join("").toLowerCase() +
          Math.random().toString(36).slice(-8),
        email,
        password: hashedPass,
        photoAvatar: photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password, ...rest } = newUser._doc;
      res.cookie("access-cookie", token).status(201).json(rest);
    }
  } catch (error) {
    next(error);
  }
};
