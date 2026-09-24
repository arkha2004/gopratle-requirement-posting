export default function Step1EventBasics({ formData, setFormData, errors }) {
	return (
		<div className="w-full max-w-2xl mx-auto space-y-5">
			<h2 className="text-2xl font-semibold text-gray-800">
				Step 1 - Event Basics
			</h2>

			{/* Event Name */}
			<div className="space-y-2">
				<label className="block text-sm font-medium text-gray-700">
					Event Name
				</label>

				<input
					placeholder="Event Name"
					value={formData.eventName}
					onChange={(e) => {
						setFormData({
							...formData,
							eventName: e.target.value,
						});
					}}
					className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
				/>

				{errors.eventName && (
					<p className="text-sm text-red-500">{errors.eventName}</p>
				)}
			</div>

			{/* Event Type */}
			<div className="space-y-2">
				<label className="block text-sm font-medium text-gray-700">
					Event Type
				</label>

				<select
					value={formData.eventType}
					onChange={(e) => {
						setFormData({
							...formData,
							eventType: e.target.value,
						});
						console.log(e.target.value);
					}}
					className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
				>
					{/* I have Dummied the Option and Values as of now, later I can change it with actual Event Names. */}
					<option value="" disabled>
						Select Event Type
					</option>
					<option value="Birthday">Birthday</option>
					<option value="Wedding">Wedding</option>
					<option value="Anniversary">Anniversary</option>
					<option value="Concert">Concert</option>
					<option value="Corporate Event">Corporate Event</option>
				</select>

				{errors.eventType && (
					<p className="text-sm text-red-500">{errors.eventType}</p>
				)}
			</div>

			{/* Dates */}
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{/* Start Date */}
				<div className="space-y-2">
					<label className="block text-sm font-medium text-gray-700">
						Start Date
					</label>

					<input
						type="date"
						value={formData.startDate}
						onChange={(e) => {
							setFormData({
								...formData,
								startDate: e.target.value,
							});
						}}
						className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
					/>

					{errors.startDate && (
						<p className="text-sm text-red-500">{errors.startDate}</p>
					)}
				</div>

				{/* End Date */}
				<div className="space-y-2">
					<label className="block text-sm font-medium text-gray-700">
						End Date
					</label>

					<input
						type="date"
						value={formData.endDate}
						onChange={(e) => {
							setFormData({
								...formData,
								endDate: e.target.value,
							});
						}}
						className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
					/>

					{errors.endDate && (
						<p className="text-sm text-red-500">{errors.endDate}</p>
					)}
				</div>
			</div>

			{/* Location */}
			<div className="space-y-2">
				<label className="block text-sm font-medium text-gray-700">
					Event Location
				</label>

				<input
					type="text"
					placeholder="Event Location"
					value={formData.location}
					onChange={(e) => {
						setFormData({
							...formData,
							location: e.target.value,
						});
					}}
					className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
				/>

				{errors.location && (
					<p className="text-sm text-red-500">{errors.location}</p>
				)}
			</div>

			{/* Venue */}
			<div className="space-y-2">
				<label className="block text-sm font-medium text-gray-700">
					Venue
				</label>

				<input
					type="text"
					placeholder="Enter Venue"
					value={formData.venue}
					onChange={(e) => {
						setFormData({
							...formData,
							venue: e.target.value,
						});
					}}
					className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
				/>
				{errors.venue && (
					<p className="text-sm text-red-500">{errors.venue}</p>
				)}
			</div>

			{/* Category */}
			<div className="space-y-2">
				<label className="block text-sm font-medium text-gray-700">
					Category
				</label>

				<select
					value={formData.category}
					onChange={(e) => {
						setFormData({
							...formData,
							category: e.target.value,
						});
					}}
					className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
				>
					<option value="">Select Category</option>
					<option value="Event Planner">Event Planner</option>
					<option value="Performer">Performer</option>
					<option value="Crew">Crew</option>
				</select>

				{errors.category && (
					<p className="text-sm text-red-500">{errors.category}</p>
				)}
			</div>
		</div>
	);
}
