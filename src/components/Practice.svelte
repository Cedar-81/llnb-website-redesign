<script lang="ts">
	import PracticeCard from './PracticeCard.svelte';
	import frame1 from '$lib/assets/p_frame1.png';
	import frame2 from '$lib/assets/p_frame2.png';
	import frame3 from '$lib/assets/p_frame3.png';

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
			title: 'Last item',
			content: 'Our firm believes that the most effective and efficient way to settle...',
			img: frame3
		}
	];
</script>

<section class=" space-y-20">
	<div class="space-y-5 text-center">
		<h3 class="font-medium text-brand">OUR PRACTICE</h3>
		<h4 class="text-xl font-semibold">
			We pride ourselves with very talented attorneys and consultants in the following areas.
		</h4>
	</div>

	<div
		class="grid grid-cols-1 lg:grid-cols-4 place-items-center space-y-8 lg:space-y-0 lg:space-x-3"
	>
		{#each practice_card_items as { title, content, img }}
			<PracticeCard {title} {content} {img} />
		{/each}
	</div>
</section>
