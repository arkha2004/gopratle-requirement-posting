export default function Step1EventBasics({ formData, setFormData, errors }) {
	return (
		<>
			<h2>Step 1 - Form</h2>

			<input
				placeholder="Event Name"
				value={formData.eventName}
				onChange={(e) => {
					setFormData({
						...formData,
						eventName: e.target.value,
					});
				}}
			/>
			{errors.eventName && (
					<p>{errors.eventName}</p>
				)}

			<select
				value={formData.eventType}
				onChange={(e) => {
					setFormData({
						...formData,
						eventType: e.target.value,
					});
					console.log(e.target.value);
				}}
			>
				{/* I have Dummied the Option and Values as of now , later I can change it with actual Event Names. */}
				<option value="" disabled>Select Event Type</option>
				<option value="1">One</option>
				<option value="2">Two</option>
				<option value="3">Three</option>
				<option value="4">Four</option>
				<option value="5">Five</option>
			</select>
			
			{errors.eventType && (
				<p>{errors.eventType}</p>
			)}

			<input
				type="Date"
				value={formData.startDate}
				onChange={(e) => {
					setFormData({
						...formData,
						startDate: e.target.value,
					});
				}}
			/>
			{errors.startDate && (
					<p>{errors.startDate}</p>
				)}


			<input
				type="Date"
				value={formData.endDate}
				onChange={(e) => {
					setFormData({
						...formData,
						endDate: e.target.value,
					});
				}}
			/>
			{errors.endDate && (
					<p>{errors.endDate}</p>
				)}

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
			/>
			{errors.location && (
					<p>{errors.location}</p>
				)}

			<select
				value={formData.category}
				onChange={(e) => {
					setFormData({
						...formData,
						category: e.target.value,
					});
				}}
			>
				<option value="">Select Catagory</option>
				<option value="Event Planner">Event Planner</option>
				<option value="Performer">Performer</option>
				<option value="Crew">Crew</option>
			</select>
			{errors.category && (
					<p>{errors.category}</p>
				)}

			<input 
				type="text"
				placeholder="Enter Venue"
				value={formData.venue}
				onChange={(e)=>{
					setFormData({
						...formData,
						venue:e.target.value,
					})
				}}
			/>
		</>
	);
}
