export default function Step2({ formData, setFormData, errors }) {
	return (
		<>
			<div className="w-full max-w-2xl mx-auto space-y-6">
				<h2 className="text-2xl font-semibold text-gray-800">
					Step 2 - Additional Details
				</h2>

				{/* Event Planner */}
				{formData.category === "Event Planner" && (
					<div className="space-y-5">
						<h3 className="text-lg font-medium text-gray-700">
							Event Planning Details
						</h3>

						{/* Guest Count */}
						<div className="space-y-2">
							<label className="block text-sm font-medium text-gray-700">
								Expected Guest Count
							</label>

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
								className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
							/>

							{errors.guestCount && (
								<p className="text-sm text-red-500">{errors.guestCount}</p>
							)}
						</div>

						{/* Budget */}
						<div className="space-y-2">
							<label className="block text-sm font-medium text-gray-700">
								Budget
							</label>

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
								className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
							/>

							{errors.budget && (
								<p className="text-sm text-red-500">{errors.budget}</p>
							)}
						</div>

						{/* Planning Requirements */}
						<div className="space-y-2">
							<label className="block text-sm font-medium text-gray-700">
								Planning Requirements <span className="text-gray-400">(Optional)</span>
							</label>

							<textarea
								placeholder="Planning Requirements"
								value={formData.planningRequirements}
								onChange={(e) => {
									setFormData({
										...formData,
										planningRequirements: e.target.value,
									});
								}}
								rows={4}
								className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
							/>
						</div>
					</div>
				)}

				{/* Performer */}
				{formData.category === "Performer" && (
					<div className="space-y-5">
						<h3 className="text-lg font-medium text-gray-700">
							Performance Details
						</h3>

						{/* Performance Type */}
						<div className="space-y-2">
							<label className="block text-sm font-medium text-gray-700">
								Performance Type
							</label>

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
								className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
							/>

							{errors.performanceType && (
								<p className="text-sm text-red-500">{errors.performanceType}</p>
							)}
						</div>

						{/* Performer Count */}
						<div className="space-y-2">
							<label className="block text-sm font-medium text-gray-700">
								Number of Performers
							</label>

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
								className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
							/>

							{errors.performerCount && (
								<p className="text-sm text-red-500">{errors.performerCount}</p>
							)}
						</div>

						{/* Performance Duration */}
						<div className="space-y-2">
							<label className="block text-sm font-medium text-gray-700">
								Performance Duration
							</label>

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
								className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
							/>

							{errors.performanceDuration && (
								<p className="text-sm text-red-500">
									{errors.performanceDuration}
								</p>
							)}
						</div>
					</div>
				)}

				{/* Crew */}
				{formData.category === "Crew" && (
					<div className="space-y-5">
						<h3 className="text-lg font-medium text-gray-700">Crew Details</h3>

						{/* Crew Role */}
						<div className="space-y-2">
							<label className="block text-sm font-medium text-gray-700">
								Crew Role
							</label>

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
								className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
							/>

							{errors.crewRole && (
								<p className="text-sm text-red-500">{errors.crewRole}</p>
							)}
						</div>

						{/* Crew Count */}
						<div className="space-y-2">
							<label className="block text-sm font-medium text-gray-700">
								Number of Crew Members
							</label>

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
								className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
							/>

							{errors.crewCount && (
								<p className="text-sm text-red-500">{errors.crewCount}</p>
							)}
						</div>

						{/* Experience */}
						<div className="space-y-2">
							<label className="block text-sm font-medium text-gray-700">
								Experience Required
							</label>

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
								className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
							/>

							{errors.experienceRequired && (
								<p className="text-sm text-red-500">
									{errors.experienceRequired}
								</p>
							)}
						</div>
					</div>
				)}
			</div>
		</>
	);
}
