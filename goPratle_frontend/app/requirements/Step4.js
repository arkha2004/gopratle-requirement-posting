export default function Step4({formData,handleSubmit}){
    return (
        <>
            <h1>Your Response :</h1>
            <p>Event Name: {formData.eventName}</p>
            <p>Event Type: {formData.eventType}</p>
            <p>Start Date: {formData.startDate}</p>
            <p>End Data: {formData.endDate}</p>
            <p>Location: {formData.location}</p>
            <p>Venue: {formData.venue}</p>
            <p>Category: {formData.category}</p>

            <h3>Additional Details</h3>
            <pre>
                {JSON.stringify(formData, null, 2)}
            </pre>

            <button
                onClick={handleSubmit}
            >
                Submit
            </button>
        </>
    )
}