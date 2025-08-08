import express from "express";
// import { getAllUsers, getUser, createUser } from "../controllers/userController.js";
import { purchase } from "../models/purchase.js";
import { signup,login,logout,purchased } from "../controllers/userController.js";//ALERT:: .js hmesa add krna hai
import userMiddleware from "../middlewares/user.mid.js";

const router = express.Router();

// GET /api/users




router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);

router.get("/purchased",userMiddleware,purchased);





// POST /api/users
router.post("/", async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: "Error creating user" });
  }
});

router.get("/purchased",async (req,res)=>{
  const userId = req.userId;

  try {
    const purchasedd = await purchase.find({ userId });

    let purchasedCourseId = [];

    for (let i = 0; i < purchasedd.length; i++) {
      purchasedCourseId.push(purchasedd[i].courseId);
    }
    const courseData = await Course.find({
      _id: { $in: purchasedCourseId },
    });

    res.status(200).json({ purchasedd, courseData });
  } catch (error) {
    res.status(500).json({ errors: "Error in purchases" });
    console.log("Error in purchase", error);
  }

}
)

export default router;
