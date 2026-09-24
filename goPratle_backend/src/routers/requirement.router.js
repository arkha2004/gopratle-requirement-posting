import { Router } from "express";
import { createRequirement } from "../controllers/requirement.controller.js";
import { validateRequirement } from "../middleWares/validateRequirement.js";

const router=Router()

router.route("/submit").post(validateRequirement,createRequirement)

export default router