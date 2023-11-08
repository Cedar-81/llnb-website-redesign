<script>
	import frame1 from '$lib/assets/b_frame1.png';
	import frame2 from '$lib/assets/b_frame2.png';
	import frame3 from '$lib/assets/b_frame3.png';
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.banner',
				toggleActions: 'restart pause restart pause'
			}
		});
		tl.from('.cta', { duration: 0.7, opacity: 0 })
			.from('.cta-subtext', {
				duration: 0.8,
				opacity: 0,
				top: -50,
				stagger: 1
			})
			.from('.cta-btn', { duration: 0.6, opacity: 0, height: 0.5 })
			.from('.frame2', { duration: 0.6, opacity: 0, height: -10 })
			.from('.frame1', { duration: 0.6, opacity: 0, height: 0, y: 300 })
			.from('.frame3', { duration: 0.6, opacity: 0, height: 0, y: -300 });
	});
</script>

<section class="lg:flex relative lg:h-[78vh] items-center mt-6 space-y-20 lg:space-y-0 banner">
	<div class="lg:w-[60%] space-y-8">
		<div class="space-y-4">
			<h1 class="text-4xl lg:text-6xl cta overflow-hidden">
				We pride on being <span class="text-brand">Your Legal Compass</span>
			</h1>
			<h2 class="text-xl cta-subtext">Delivering legal excellence with decades of experience</h2>
		</div>
		<button class="px-6 py-4 bg-black text-brand text-lg cta-btn overflow-hidden"
			>Get in touch</button
		>
	</div>

	<div class="flex items-center lg:absolute right-0 w-full lg:w-max justify-center lg:block">
		<div class="w-max flex items-center gap-3 overflow-hidden">
			<div class="overflow-hidden h-[45vh] w-24 lg:h-[70vh] lg:w-40 bg-brand frame1">
				<img class="h-full w-full object-cover" src={frame1} alt="a man handshaking" />
			</div>
			<div class="overflow-hidden h-[50vh] w-24 lg:h-[78vh] lg:w-40 bg-brand frame2">
				<img class="h-full w-full object-cover" src={frame2} alt="the symbol of justice" />
			</div>
			<div class="overflow-hidden h-[45vh] w-24 lg:h-[70vh] lg:w-40 bg-brand frame3">
				<img class="h-full w-full object-cover" src={frame3} alt="a court mallet" />
			</div>
		</div>
	</div>
</section>
