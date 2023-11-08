<script>
	import frame1 from '$lib/assets/b_frame1.png';
	import frame2 from '$lib/assets/b_frame2.png';
	import frame3 from '$lib/assets/b_frame3.png';
</script>

<section class="lg:flex relative lg:h-[78vh] items-center mt-6 space-y-20 lg:space-y-0">
	<div class="lg:w-[60%] space-y-8">
		<div class="space-y-4">
			<h1 class="text-4xl lg:text-6xl">
				We pride on being <span class="text-brand">Your Legal Compass</span>
			</h1>
			<h2 class="text-xl">Delivering legal excellence with decades of experience</h2>
		</div>
		<button class="px-6 py-4 bg-black text-brand text-lg">Get in touch</button>
	</div>

	<div class="flex items-center lg:absolute right-0 w-full lg:w-max justify-center lg:block">
		<div class="w-max flex items-center gap-3">
			<div class="overflow-hidden h-[45vh] w-24 lg:h-[70vh] lg:w-40 bg-brand">
				<img class="h-full w-full object-cover" src={frame1} alt="a man handshaking" />
			</div>
			<div class="overflow-hidden h-[50vh] w-24 lg:h-[78vh] lg:w-40 bg-brand">
				<img class="h-full w-full object-cover" src={frame2} alt="the symbol of justice" />
			</div>
			<div class="overflow-hidden h-[45vh] w-24 lg:h-[70vh] lg:w-40 bg-brand">
				<img class="h-full w-full object-cover" src={frame3} alt="a court mallet" />
			</div>
		</div>
	</div>
</section>
