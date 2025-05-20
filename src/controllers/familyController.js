// controller/familyController.js (Step 2 - Family Data)
import Family from "../models/Family.js";
import User from "../models/User.js";
import Carrier from "../models/Carrier.js";

export const createFamily = async (req, res) => {
  try {
    const { familyName, adminRelation, carrierId } = req.body;
    const adminId = req.user.id;

    const newFamily = await Family.create({
      familyName,
      adminId,
      adminRelation,
      carrierId,
      members: [adminId],
    });

    await User.findByIdAndUpdate(adminId, { familyId: newFamily._id });

    if (carrierId) {
      await Carrier.findByIdAndUpdate(carrierId, { familyId: newFamily._id });
    }

    res.status(201).json({ message: "Family created successfully", family: newFamily });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// controller/familyController.js (Add new endpoint for Step 3 - Create Group)

export const addFamilyMembers = async (req, res) => {
  try {
    const { familyId, memberIds } = req.body;
    const userId = req.user.id;

    const family = await Family.findById(familyId);
    if (!family) return res.status(404).json({ message: "Family not found" });

    if (family.adminId.toString() !== userId) {
      return res.status(403).json({ message: "Only the admin can add members" });
    }

    const updatedMembers = [...new Set([...family.members, ...memberIds])];
    family.members = updatedMembers;
    await family.save();

    await User.updateMany({ _id: { $in: memberIds } }, { familyId: family._id });

    res.status(200).json({ message: "Members added successfully", family });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
