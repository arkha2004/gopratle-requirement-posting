"use client";

import { useState } from "react";
import Step1EventBasics from "./Step1EventBasics.js";
import Step2 from "./Step2.js";
import Step3 from "./Step3.js";
import Step4 from "./Step4.js"

export default function requirements() {
	const [formData, setFormData] = useState({
		eventName: "",
		eventType: "",
		startDate: "",
		endDate: "",
		location: "",
		venue: "",
		category: "",

		// Event Planner
		guestCount: "",
		budget: "",
		planningRequirements: "",

		// Performer
		performanceType: "",
		performerCount: "",
		performanceDuration: "",
		technicalRequirements: "",

		// Crew
		crewRole: "",
		crewCount: "",
		experienceRequired: "",
		shiftRequirements: "",

		// Common
		additionalNotes: "",
	});

	const [currentStep, setCurrentStep] = useState(1);

	const [errors,setErrors]= useState({})

    async function handleSubmit() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/submit`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

		console.log("FULL BACKEND ERROR:", result.error);

        console.log(result);

    } catch (error) {
        console.error("Error submitting requirement:", error);
    }
	}

	function validateCurrentStep() {
    const newError = {};

    if (currentStep === 1) {

        if (!formData.eventName.trim()) {
            newError.eventName = "Event Name is required";
        }

        if (!formData.eventType) {
            newError.eventType = "Event Type is required";
        }

        if (!formData.startDate) {
            newError.startDate = "Start Date is required";
        }

        if (!formData.endDate) {
            newError.endDate = "End Date is required";
        }

        if (
            formData.startDate &&
            formData.endDate &&
            formData.endDate < formData.startDate
        ) {
            newError.endDate = "End Date cannot be before Start Date";
        }

        if (!formData.location.trim()) {
            newError.location = "Location is required";
        }

        // Venue is optional, so no validation here.

        if (!formData.category) {
            newError.category = "Category is required";
        }
    }


    if (currentStep === 2) {

        // Event Planner
        if (formData.category === "Event Planner") {

            if (!formData.guestCount) {
                newError.guestCount = "Guest Count is required";
            }

            if (!formData.budget) {
                newError.budget = "Budget is required";
            }
        }


        // Performer
        if (formData.category === "Performer") {

            if (!formData.performanceType.trim()) {
                newError.performanceType =
                    "Performance Type is required";
            }

            if (!formData.performerCount) {
                newError.performerCount =
                    "Number of Performers is required";
            }

            if (!formData.performanceDuration.trim()) {
                newError.performanceDuration =
                    "Performance Duration is required";
            }
        }


        // Crew
        if (formData.category === "Crew") {

            if (!formData.crewRole.trim()) {
                newError.crewRole = "Crew Role is required";
            }

            if (!formData.crewCount) {
                newError.crewCount =
                    "Number of Crew Members is required";
            }

            if (!formData.experienceRequired.trim()) {
                newError.experienceRequired =
                    "Experience Required is required";
            }
        }
    }

    setErrors(newError);

    return Object.keys(newError).length === 0;
}

	return (
		<>
			<h1>It is working !</h1>

			{currentStep === 1 && (
				<Step1EventBasics formData={formData} setFormData={setFormData} errors={errors} />
			)}

			{currentStep === 2 && (
				<Step2 formData={formData} setFormData={setFormData} errors={errors}/>
			)}

			{currentStep === 3 && <Step3 formData={formData} setFormData={setFormData}/>}

            {currentStep ===4 && (
                <Step4 formData={formData} handleSubmit={handleSubmit} />
            )}

            {currentStep < 4 && (
                <button onClick={() => {
					if(validateCurrentStep()){
						setCurrentStep(currentStep + 1)
					}
				}}>

					Next
				</button>
            )}

			{currentStep > 1 && (
				<button
					onClick={() => {
							setCurrentStep(currentStep - 1); 
					}}
				>
					Back
				</button>
			)}

			{/* <button
				onClick={() => {
					console.log(formData);
				}}
			>
				Print FormData
			</button> */}
		</>
	);
}
