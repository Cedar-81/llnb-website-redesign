<script>
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.about',
				toggleActions: 'restart pause none pause'
			}
		});
		tl.from('.about-section-title', { duration: 0.7, opacity: 0.2 })
			.from('.about-title', {
				duration: 0.8,
				opacity: 0,
				top: -50,
				stagger: 1
			})
			.from('.about-div', {
				duration: 0.6,
				height: 0
			});
	});
</script>

<section class="lg:flex space-y-6 lg:space-y-0 about">
	<div class="space-y-5">
		<h3 class="font-medium text-brand about-section-title">ABOUT US</h3>
		<h4 class="text-xl font-semibold about-title">
			We aim to provide legal services that meet international standards, as well as represent local
			peculiarities.
		</h4>
	</div>

	<div class=" w-[95%] about-div overflow-hidden">
		<p class="capitalize font-light about-info">
			LLnB Associates is a distinguished Nigerian commercial law firm renowned for its profound
			legal expertise across corporate law, civil and criminal litigation, and property law
			consultancy. With over a decade of experience serving private individuals and corporate
			organizations, our team of dedicated attorneys works tirelessly to provide top-notch legal
			solutions. We pride ourselves on our professionalism, dedication, and unwavering commitment to
			quality client service, successfully representing clients in a wide spectrum of disputes
			within our practice areas.

			<br />
			<br />

			Our mission is to exceed our clients expectations while adhering to legal standards, meeting
			deadlines, and offering competitive rates. Led by Principal and Managing Partner Arthur Nzube
			Nwankwo (LL.B, BL.), LLnB Associates is committed to navigating the complexities of the legal
			landscape and delivering exceptional legal services to our valued clients.
		</p>
	</div>
</section>
