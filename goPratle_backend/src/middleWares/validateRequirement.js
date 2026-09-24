import { apiError } from "../utils/apiError.js";

const validateRequirement = (req, res, next) => {
    const data = req.body;
    const errors = [];


    if (!data.eventName || !data.eventName.trim()) {
        errors.push({
            field: "eventName",
            message: "Event Name is required"
        });
    }

    if (!data.eventType || !data.eventType.trim()) {
        errors.push({
            field: "eventType",
            message: "Event Type is required"
        });
    }

    if (!data.startDate) {
        errors.push({
            field: "startDate",
            message: "Start Date is required"
        });
    } else if (isNaN(Date.parse(data.startDate))) {
        errors.push({
            field: "startDate",
            message: "Start Date is invalid"
        });
    }

    if (!data.endDate) {
        errors.push({
            field: "endDate",
            message: "End Date is required"
        });
    } else if (isNaN(Date.parse(data.endDate))) {
        errors.push({
            field: "endDate",
            message: "End Date is invalid"
        });
    }

    if (
        data.startDate &&
        data.endDate &&
        !isNaN(Date.parse(data.startDate)) &&
        !isNaN(Date.parse(data.endDate)) &&
        new Date(data.endDate) < new Date(data.startDate)
    ) {
        errors.push({
            field: "endDate",
            message: "End Date cannot be before Start Date"
        });
    }

    if (!data.location || !data.location.trim()) {
        errors.push({
            field: "location",
            message: "Location is required"
        });
    }

    if (!data.category) {
        errors.push({
            field: "category",
            message: "Category is required"
        });
    } else if (
        !["Event Planner", "Performer", "Crew"].includes(data.category)
    ) {
        errors.push({
            field: "category",
            message: "Invalid category"
        });
    }



    if (data.category === "Event Planner") {

        if (!data.guestCount) {
            errors.push({
                field: "guestCount",
                message: "Guest Count is required"
            });
        }

        if (!data.budget) {
            errors.push({
                field: "budget",
                message: "Budget is required"
            });
        }
    }


    if (data.category === "Performer") {

        if (!data.performanceType || !data.performanceType.trim()) {
            errors.push({
                field: "performanceType",
                message: "Performance Type is required"
            });
        }

        if (!data.performerCount) {
            errors.push({
                field: "performerCount",
                message: "Number of Performers is required"
            });
        }

        if (
            !data.performanceDuration ||
            !data.performanceDuration.trim()
        ) {
            errors.push({
                field: "performanceDuration",
                message: "Performance Duration is required"
            });
        }
    }


    if (data.category === "Crew") {

        if (!data.crewRole || !data.crewRole.trim()) {
            errors.push({
                field: "crewRole",
                message: "Crew Role is required"
            });
        }

        if (!data.crewCount) {
            errors.push({
                field: "crewCount",
                message: "Number of Crew Members is required"
            });
        }

        if (
            !data.experienceRequired ||
            !data.experienceRequired.trim()
        ) {
            errors.push({
                field: "experienceRequired",
                message: "Experience Required is required"
            });
        }
    }


    if (errors.length > 0) {
        throw new apiError(
            400,
            "Validation failed",
            "",
            errors
        );
    }

    next();
};

export { validateRequirement };