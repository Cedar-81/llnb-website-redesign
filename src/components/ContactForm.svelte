<form class="flex flex-col justify-between space-y-8">
	<!-- <h3 class="text-lg font-medium">Leave us a mail.</h3> -->
	<div class="grid grid-cols-2 gap-6">
		<div class="flex flex-col">
			<label for="firstname"> Firstname </label>
			<input
				class=" appearance-none bg-transparent outline-none border-b-2 border-black/50 h-10"
				type="text"
				name="firstname"
			/>
		</div>
		<div class="flex flex-col">
			<label for="lastname"> Lastname </label>
			<input
				class=" appearance-none bg-transparent outline-none border-b-2 border-black/50 h-10"
				type="text"
				name="lastname"
			/>
		</div>
	</div>

	<div class="flex flex-col">
		<label for="email"> Email </label>
		<input
			class=" appearance-none bg-transparent outline-none border-b-2 border-black/50 h-10"
			type="email"
			name="email"
		/>
	</div>

	<div class="flex flex-col">
		<label for="subject"> Subject </label>
		<input
			class=" appearance-none bg-transparent outline-none border-b-2 border-black/50 h-10"
			type="text"
			name="subject"
		/>
	</div>

	<div class="flex flex-col">
		<label for="message"> Message </label>
		<textarea
			class="appearance-none bg-transparent outline-none border-b-2 border-black/50 h-32"
			name="message"
		/>
	</div>

	<button class="px-4 py-2 bg-brand text-white">Send</button>
</form>

<!-- <style>
    .home {
        color:  #f1f1f1;
    }
</style> -->
