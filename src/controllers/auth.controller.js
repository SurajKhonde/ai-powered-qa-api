import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (userId,role) => {
  return jwt.sign({ id: userId ,role:role}, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

// REGISTER
export const register = async (req, res, next) => {
  try {
    const { email, password, role } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashed,
      role: role === "admin" ? "admin" : "user"
    });

    res.status(201).json({
      token: generateToken(user._id, user.role),
    });
  } catch (err) {
    next(err);
  }
};

// LOGIN
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      token: generateToken(user._id,user.role),
    });
  } catch (err) {
    next(err);
  }
};