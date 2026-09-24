import mongoose from "mongoose";

const requirementSchema = new mongoose.Schema({
    
    // Common fields
    eventName: {
        type: String,
        required: true,
        trim: true
    },

    eventType: {
        type: String,
        required: true,
        trim: true
    },

    startDate: {
        type: Date,
        required: true
    },

    endDate: {
        type: Date,
        required: true
    },

    location: {
        type: String,
        required: true,
        trim: true
    },

    venue: {
        type: String,
        trim: true
    },

    category: {
        type: String,
        required: true,
        enum: ["Event Planner", "Performer", "Crew"]
    },


    // Event Planner fields
    guestCount: {
        type: Number
    },

    budget: {
        type: Number
    },

    planningRequirements: {
        type: String,
        trim: true
    },


    // Performer fields
    performanceType: {
        type: String,
        trim: true
    },

    performerCount: {
        type: Number
    },

    performanceDuration: {
        type: String,
        trim: true
    },

    technicalRequirements: {
        type: String,
        trim: true
    },


    // Crew fields
    crewRole: {
        type: String,
        trim: true
    },

    crewCount: {
        type: Number
    },

    experienceRequired: {
        type: String,
        trim: true
    },

    shiftRequirements: {
        type: String,
        trim: true
    },


    // Common
    additionalNotes: {
        type: String,
        trim: true
    }

}, { timestamps: true });


const Requirement = mongoose.model("Requirement", requirementSchema);

export default Requirement;