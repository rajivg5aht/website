import { User } from "../models/index.js";

/**
 * Get all users for admin
 */
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "name", "email", "role", "createdAt"],
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json({ message: "Users fetched successfully", users });
  } catch (error) {
    console.error("Failed to fetch users", error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
};