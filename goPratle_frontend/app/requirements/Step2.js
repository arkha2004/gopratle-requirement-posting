export default function Step2({ formData, setFormData, errors}) {
	return (
		<>
			<h2>This is step 2 of the form.</h2>

			{formData.category === "Event Planner" && (
				<div>
					<h3>Event Planning Details</h3>

					<input
						type="number"
						placeholder="Expected Guest Count"
						value={formData.guestCount}
						onChange={(e) => {
							setFormData({
								...formData,
								guestCount: e.target.value,
							});
						}}
					/>
					{errors.guestCount && (
					<p>{errors.guestCount}</p>
				)}

					<input
						type="number"
						placeholder="Budget"
						value={formData.budget}
						onChange={(e) => {
							setFormData({
								...formData,
								budget: e.target.value,
							});
						}}
					/>
					{errors.budget && (
					<p>{errors.budget}</p>
				)}

					<textarea
						placeholder="Planning Requirements"
						value={formData.planningRequirements}
						onChange={(e) => {
							setFormData({
								...formData,
								planningRequirements: e.target.value,
							});
						}}
					/>
				</div>
			)} 

			{formData.category === "Performer" && (
				<div>
					<h3>Performance Details</h3>

					<input
						type="text"
						placeholder="Performance Type"
						value={formData.performanceType}
						onChange={(e) => {
							setFormData({
								...formData,
								performanceType: e.target.value,
							});
						}}
					/>
					{errors.performanceType && (
					<p>{errors.performanceType}</p>
				)}

					<input
						type="number"
						placeholder="Number of Performers"
						value={formData.performerCount}
						onChange={(e) => {
							setFormData({
								...formData,
								performerCount: e.target.value,
							});
						}}
					/>
					{errors.performerCount && (
					<p>{errors.performerCount}</p>
				)}

					<input
						type="text"
						placeholder="Performance Duration"
						value={formData.performanceDuration}
						onChange={(e) => {
							setFormData({
								...formData,
								performanceDuration: e.target.value,
							});
						}}
					/>
					{errors.performanceDuration && (
					<p>{errors.performanceDuration}</p>
				)}

				</div>
			)}

			{formData.category === "Crew" && (
				<div>
					<h3>Crew Details</h3>

					<input
						type="text"
						placeholder="Crew Role"
						value={formData.crewRole}
						onChange={(e) => {
							setFormData({
								...formData,
								crewRole: e.target.value,
							});
						}}
					/>
					{errors.crewRole && (
					<p>{errors.crewRole}</p>
				)}

					<input
						type="number"
						placeholder="Number of Crew Members"
						value={formData.crewCount}
						onChange={(e) => {
							setFormData({
								...formData,
								crewCount: e.target.value,
							});
						}}
					/>
					{errors.crewCount && (
					<p>{errors.crewCount}</p>
				)}

					<input
						type="text"
						placeholder="Experience Required"
						value={formData.experienceRequired}
						onChange={(e) => {
							setFormData({
								...formData,
								experienceRequired: e.target.value,
							});
						}}
					/>
					{errors.experienceRequired && (
					<p>{errors.experienceRequired}</p>
				)}
				</div>
			)}
		</>
	);
}
