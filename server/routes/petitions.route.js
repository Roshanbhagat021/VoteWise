const express = require("express");
const { auth } = require("../middleware/auth.middleware");
const { petitionModel } = require("../model/petition.model");

const petitionRouter = express.Router();

// Public route
petitionRouter.get("/", async (req, res) => {
  try {
    const petitions = await petitionModel.find();
    res.status(200).json({ petitions });
  } catch (error) {
    res.status(400).json({ error });
  }
});

petitionRouter.use(auth);

petitionRouter.post("/create", async (req, res) => {
  try {
    const petition = new petitionModel({
      ...req.body,
      userID: req.user.userID,
      name: req.user.user
    });
    await petition.save();
    res.status(200).json({ msg: "New petition created!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

petitionRouter.get("/my-petitions", async (req, res) => {
  try {
    const userID = req.user.userID;
    const userPetitions = await petitionModel.find({ userID });
    res.status(200).json({ petitions: userPetitions });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

petitionRouter.delete("/delete/:id", async (req, res) => {
  try {
    const petition = await petitionModel.findByIdAndDelete(req.params.id);
    if (!petition) {
      return res.status(404).json({ msg: "Petition not found!" });
    }
    res.status(200).json({ msg: "Petition deleted successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


petitionRouter.post("/sign/:id", async (req, res) => {
  try {
    const petition = await petitionModel.findById(req.params.id);

    if (!petition) {
      return res.status(404).json({ msg: "Petition not found!" });
    }

    const userId = req.user.userID;
    if (petition.signedBy.includes(userId)) {
      return res.status(400).json({ msg: "You’ve already signed this petition!" });
    }

    petition.signedBy.push(userId);
    petition.signatures += 1;

    await petition.save();

    res.status(200).json({ msg: "Petition signed successfully!", petition });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = { petitionRouter };
