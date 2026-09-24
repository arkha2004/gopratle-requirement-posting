import { Router } from "express";
import { createRequirement } from "../controllers/requirement.controller.js";

const router=Router()

router.route("/submit").post(createRequirement)

export default router