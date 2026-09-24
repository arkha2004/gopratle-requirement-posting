import { apiResponse } from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import Requirement from "../models/requirement.models.js";


const createRequirement=asyncHandler(async (req,res)=>{
    const data=req.body

    const requirementData = {
    // common fields
    eventName: data.eventName,
    eventType: data.eventType,
    startDate: data.startDate,
    endDate: data.endDate,
    location: data.location,
    venue: data.venue,
    category: data.category
};

if (data.category === "Performer") {
    requirementData.performanceType = data.performanceType;
    requirementData.performerCount = data.performerCount;
    requirementData.performanceDuration = data.performanceDuration;
    requirementData.technicalRequirements = data.technicalRequirements;
}

if (data.category === "Crew") {
    requirementData.crewRole = data.crewRole;
    requirementData.crewCount = data.crewCount;
    requirementData.experienceRequired = data.experienceRequired;
    requirementData.shiftRequirements = data.shiftRequirements;
}

if (data.category === "Event Planner") {
    requirementData.guestCount = data.guestCount;
    requirementData.budget = data.budget;
    requirementData.planningRequirements = data.planningRequirements;
}

    const requirement = new Requirement(requirementData);

    await requirement.save();

    return res
    .status(201)
    .json(new apiResponse(200,requirement,"The data has been saved in the mongodb successfully"))
})


export{
    createRequirement,
}