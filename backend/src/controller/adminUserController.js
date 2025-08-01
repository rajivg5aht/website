import { User } from "../models/index.js";

/**
 * Get all users for admin
 */
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "name", "email", "role", "isActive", "isAdmin", "firstName", "lastName", "phone", "createdAt", "lastLoginAt", "emailVerified"],
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json({ message: "Users fetched successfully", users });
  } catch (error) {
    console.error("Failed to fetch users", error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

/**
 * Update user status by ID for admin
 */
export const updateUserStatus = async (req, res) => {
  try {
    const { userId } = req.params;
    const { isActive } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    if (typeof isActive !== 'boolean') {
      return res.status(400).json({ message: "isActive must be a boolean value" });
    }

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Prevent deactivating admin users
    if ((user.role === 'admin' || user.isAdmin) && !isActive) {
      return res.status(403).json({ message: "Cannot deactivate admin users" });
    }

    user.isActive = isActive;
    await user.save();

    res.status(200).json({
      message: "User status updated successfully",
      user: {
        id: user.id,
        isActive: user.isActive
      }
    });
  } catch (error) {
    console.error("Failed to update user status", error);
    res.status(500).json({ message: "Failed to update user status" });
  }
};

/**
 * Delete user by ID for admin
 */
export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Prevent deletion of admin users
    if (user.role === 'admin' || user.isAdmin) {
      return res.status(403).json({ message: "Cannot delete admin users" });
    }

    await user.destroy();
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Failed to delete user", error);
    res.status(500).json({ message: "Failed to delete user" });
  }
};