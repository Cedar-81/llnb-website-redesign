<script lang="ts">
	import frame1 from '$lib/assets/t_frame1.png';
	import frame2 from '$lib/assets/t_frame2.png';
	import frame3 from '$lib/assets/t_frame3.png';
	import frame4 from '$lib/assets/t_frame4.png';
	import frame5 from '$lib/assets/t_frame5.png';
	import frame6 from '$lib/assets/t_frame6.png';
	import TeamCard from './TeamCard.svelte';
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.team',
				toggleActions: 'restart none none none'
			}
		});
		tl.from('.team-section-title', { duration: 0.7, opacity: 0.2 })
			.from('.team-title', {
				duration: 0.8,
				opacity: 0,
				top: -50
			})
			.from('.team-card', {
				duration: 0.5,
				opacity: 0,
				xPercent: 70,
				stagger: 0.8
			});
	});

	const team_card_items = [
		{
			id: 0,
			name: 'ARTHUR NZUBE NWANKWO',
			position: 'PRINCIPAL/MANAGING PARTNER',
			img: frame1
		},
		{
			id: 1,
			name: 'CHINEDUM AGWARAMGBOE',
			position: 'HEAD OF CHAMBERS',
			img: frame2
		},
		{
			id: 2,
			name: 'OSCAR MBA',
			position: 'ASSOCIATE',
			img: frame3
		},
		{
			id: 3,
			name: 'EJIKE CHUKWUEBUKA, IPHIE',
			position: 'ASSOCIATE',
			img: frame4
		},
		{
			id: 4,
			name: 'DANIEL, NNAMANI',
			position: 'ASSOCIATE',
			img: frame5
		},
		{
			id: 5,
			name: 'CHINYERE ONAH',
			position: 'ADMINISTRATIVE SECRETARY',
			img: frame6
		}
	];
</script>

<section class="  space-y-20 team">
	<div class="space-y-5">
		<h3 class="font-medium text-brand team-section-title">OUR TEAM</h3>
		<h4 class="text-xl font-semibold team-title">Experts in position.</h4>
	</div>

	<div class="grid grid-cols-2 lg:grid-cols-6 border-2">
		{#each team_card_items as { name, position, img }}
			<TeamCard {name} {position} {img} />
		{/each}
	</div>
</section>
