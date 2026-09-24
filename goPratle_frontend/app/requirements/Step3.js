export default function Step3({ formData, setFormData }) {
	return (
		<div className="w-full max-w-2xl mx-auto space-y-6">
			<h2 className="text-2xl font-semibold text-gray-800">
				Step 3 - Additional Details
			</h2>

			{/* Event Planner */}
			{formData.category === "Event Planner" && (
				<div className="space-y-5">
					<h3 className="text-lg font-medium text-gray-700">
						Planner Preferences
					</h3>

					<div className="space-y-2">
						<label className="block text-sm font-medium text-gray-700">
							Additional Planning Preferences
						</label>

						<textarea
							placeholder="Additional planning preferences"
							value={formData.additionalNotes}
							onChange={(e) => {
								setFormData({
									...formData,
									additionalNotes: e.target.value,
								});
							}}
							rows={5}
							className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
						/>
					</div>
				</div>
			)}

			{/* Performer */}
			{formData.category === "Performer" && (
				<div className="space-y-5">
					<h3 className="text-lg font-medium text-gray-700">
						Technical Requirements
					</h3>

					<div className="space-y-2">
						<label className="block text-sm font-medium text-gray-700">
							Technical Requirements <span className="text-gray-400">(Optional)</span>
						</label>

						<textarea
							placeholder="Sound, lighting or other technical requirements"
							value={formData.technicalRequirements}
							onChange={(e) => {
								setFormData({
									...formData,
									technicalRequirements: e.target.value,
								});
							}}
							rows={5}
							className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
						/>
					</div>

					<div className="space-y-2">
						<label className="block text-sm font-medium text-gray-700">
							Additional Notes <span className="text-gray-400">(Optional)</span>
						</label>

						<textarea
							placeholder="Additional notes"
							value={formData.additionalNotes}
							onChange={(e) => {
								setFormData({
									...formData,
									additionalNotes: e.target.value,
								});
							}}
							rows={4}
							className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
						/>
					</div>
				</div>
			)}

			{/* Crew */}
			{formData.category === "Crew" && (
				<div className="space-y-5">
					<h3 className="text-lg font-medium text-gray-700">
						Shift Requirements 
					</h3>

					<div className="space-y-2">
						<label className="block text-sm font-medium text-gray-700">
							Shift Requirements <span className="text-gray-400">(Optional)</span>
						</label>

						<textarea
							placeholder="Shift or timing requirements"
							value={formData.shiftRequirements}
							onChange={(e) => {
								setFormData({
									...formData,
									shiftRequirements: e.target.value,
								});
							}}
							rows={5}
							className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
						/>
					</div>

					<div className="space-y-2">
						<label className="block text-sm font-medium text-gray-700">
							Additional Notes <span className="text-gray-400">(Optional)</span>
						</label>

						<textarea
							placeholder="Additional notes"
							value={formData.additionalNotes}
							onChange={(e) => {
								setFormData({
									...formData,
									additionalNotes: e.target.value,
								});
							}}
							rows={4}
							className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
						/>
					</div>
				</div>
			)}
		</div>
	);
}
