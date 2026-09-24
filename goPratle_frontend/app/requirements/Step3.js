export default function Step3({ formData, setFormData }) {
    return (
        <>
            <h2>Step 3 - Additional Details</h2>

            {formData.category === "Event Planner" && (
                <div>
                    <h3>Planner Preferences</h3>

                    <textarea
                        placeholder="Additional planning preferences"
                        value={formData.additionalNotes}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                additionalNotes: e.target.value
                            })
                        }}
                    />
                </div>
            )}

            {formData.category === "Performer" && (
                <div>
                    <h3>Technical Requirements</h3>

                    <textarea
                        placeholder="Sound, lighting or other technical requirements"
                        value={formData.technicalRequirements}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                technicalRequirements: e.target.value
                            })
                        }}
                    />

                    <textarea
                        placeholder="Additional notes"
                        value={formData.additionalNotes}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                additionalNotes: e.target.value
                            })
                        }}
                    />
                </div>
            )}

            {formData.category === "Crew" && (
                <div>
                    <h3>Shift Requirements</h3>

                    <textarea
                        placeholder="Shift or timing requirements"
                        value={formData.shiftRequirements}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                shiftRequirements: e.target.value
                            })
                        }}
                    />

                    <textarea
                        placeholder="Additional notes"
                        value={formData.additionalNotes}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                additionalNotes: e.target.value
                            })
                        }}
                    />
                </div>
            )}
        </>
    )
}
