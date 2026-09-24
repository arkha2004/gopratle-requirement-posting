export default function Step4({ formData, handleSubmit }) {
    return (
        <>
            <div className="w-full max-w-2xl mx-auto space-y-6">

                <h2 className="text-2xl font-semibold text-gray-800">
                    Review Your Response
                </h2>

                {/* Basic Event Details */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-700">
                        Event Details
                    </h3>

                    <div className="space-y-2">
                        <p>
                            <span className="font-medium">Event Name:</span>{" "}
                            {formData.eventName}
                        </p>

                        <p>
                            <span className="font-medium">Event Type:</span>{" "}
                            {formData.eventType}
                        </p>

                        <p>
                            <span className="font-medium">Start Date:</span>{" "}
                            {formData.startDate}
                        </p>

                        <p>
                            <span className="font-medium">End Date:</span>{" "}
                            {formData.endDate}
                        </p>

                        <p>
                            <span className="font-medium">Location:</span>{" "}
                            {formData.location}
                        </p>

                        {/* Optional */}
                        {formData.venue && (
                            <p>
                                <span className="font-medium">Venue:</span>{" "}
                                {formData.venue}
                            </p>
                        )}

                        <p>
                            <span className="font-medium">Category:</span>{" "}
                            {formData.category}
                        </p>
                    </div>
                </div>


                {/* Event Planner */}
                {formData.category === "Event Planner" && (
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-700">
                            Event Planning Details
                        </h3>

                        <p>
                            <span className="font-medium">
                                Expected Guest Count:
                            </span>{" "}
                            {formData.guestCount}
                        </p>

                        <p>
                            <span className="font-medium">Budget:</span>{" "}
                            {formData.budget}
                        </p>

                        {/* Optional */}
                        {formData.planningRequirements && (
                            <p>
                                <span className="font-medium">
                                    Planning Requirements:
                                </span>{" "}
                                {formData.planningRequirements}
                            </p>
                        )}

                        {/* Optional */}
                        {formData.additionalNotes && (
                            <p>
                                <span className="font-medium">
                                    Additional Notes:
                                </span>{" "}
                                {formData.additionalNotes}
                            </p>
                        )}
                    </div>
                )}


                {/* Performer */}
                {formData.category === "Performer" && (
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-700">
                            Performance Details
                        </h3>

                        <p>
                            <span className="font-medium">
                                Performance Type:
                            </span>{" "}
                            {formData.performanceType}
                        </p>

                        <p>
                            <span className="font-medium">
                                Number of Performers:
                            </span>{" "}
                            {formData.performerCount}
                        </p>

                        <p>
                            <span className="font-medium">
                                Performance Duration:
                            </span>{" "}
                            {formData.performanceDuration}
                        </p>

                        {/* Optional */}
                        {formData.technicalRequirements && (
                            <p>
                                <span className="font-medium">
                                    Technical Requirements:
                                </span>{" "}
                                {formData.technicalRequirements}
                            </p>
                        )}

                        {/* Optional */}
                        {formData.additionalNotes && (
                            <p>
                                <span className="font-medium">
                                    Additional Notes:
                                </span>{" "}
                                {formData.additionalNotes}
                            </p>
                        )}
                    </div>
                )}


                {/* Crew */}
                {formData.category === "Crew" && (
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-700">
                            Crew Details
                        </h3>

                        <p>
                            <span className="font-medium">
                                Crew Role:
                            </span>{" "}
                            {formData.crewRole}
                        </p>

                        <p>
                            <span className="font-medium">
                                Number of Crew Members:
                            </span>{" "}
                            {formData.crewCount}
                        </p>

                        <p>
                            <span className="font-medium">
                                Experience Required:
                            </span>{" "}
                            {formData.experienceRequired}
                        </p>

                        {/* Optional */}
                        {formData.shiftRequirements && (
                            <p>
                                <span className="font-medium">
                                    Shift Requirements:
                                </span>{" "}
                                {formData.shiftRequirements}
                            </p>
                        )}

                        {/* Optional */}
                        {formData.additionalNotes && (
                            <p>
                                <span className="font-medium">
                                    Additional Notes:
                                </span>{" "}
                                {formData.additionalNotes}
                            </p>
                        )}
                    </div>
                )}


                {/* Submit */}
                <div className="flex justify-center pt-4">
                    <button
                        onClick={handleSubmit}
                        className="rounded-md bg-black px-6 py-2 text-white hover:bg-gray-800"
                    >
                        Submit Requirement
                    </button>
                </div>

            </div>
        </>
    )
}