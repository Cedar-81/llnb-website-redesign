<script lang="ts">
	import PracticeCard from './PracticeCard.svelte';
	import frame1 from '$lib/assets/p_frame1.png';
	import frame2 from '$lib/assets/p_frame2.png';
	import frame3 from '$lib/assets/p_frame3.png';
	import frame4 from '$lib/assets/p_frame4.png';
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.practice',
				toggleActions: 'restart none none none'
			}
		});
		tl.from('.practice-section-title', { duration: 0.7, opacity: 0.2 })
			.from('.practice-title', {
				duration: 0.8,
				opacity: 0,
				top: -50
			})
			.from('.card', {
				duration: 0.5,
				opacity: 0,
				yPercent: 70,
				stagger: 0.8
			});
	});

	const practice_card_items = [
		{
			id: 0,
			title: 'STATEMENT OF PRACTICE',
			content: 'Property Management and Consultancy, Human Rights and Public Policy, ...',
			img: frame1
		},
		{
			id: 1,
			title: 'PROPERTY LAW PRACTICE/CONSULTANCY',
			content: 'Property Law Practice is one of our firm’s most prominent areas of...',
			img: frame2
		},
		{
			id: 2,
			title: 'CIVIL AND CRIMINAL LITIGATION',
			content: 'Our firm believes that the most effective and efficient way to settle...',
			img: frame3
		},
		{
			id: 3,
			title: 'CORPORATE PRACTICE',
			content:
				'Our firm has extensive experience in modern corporate transactions. We offer advice on compliance with...',
			img: frame4
		}
	];
</script>

<section class=" space-y-20 practice">
	<div class="space-y-5 text-center">
		<h3 class="font-medium text-brand practice-section-title">OUR PRACTICE</h3>
		<h4 class="text-xl font-semibold practice-title">
			We pride ourselves with very talented attorneys and consultants in the following areas.
		</h4>
	</div>

	<div
		class="grid grid-cols-1 overflow-hidden lg:grid-cols-4 place-items-center space-y-8 lg:space-y-0 lg:space-x-3 cards"
	>
		{#each practice_card_items as { title, content, img }}
			<PracticeCard {title} {content} {img} />
		{/each}
	</div>
</section>
