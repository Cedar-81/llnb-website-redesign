<script lang="ts">
	import frame1 from '$lib/assets/t_frame1.png';
	import frame2 from '$lib/assets/t_frame2.png';
	import frame3 from '$lib/assets/t_frame3.png';
	import frame4 from '$lib/assets/t_frame4.png';
	import frame5 from '$lib/assets/t_frame5.png';
	import frame6 from '$lib/assets/t_frame6.png';
	import TeamCard from './TeamCard.svelte';

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

<section class="  space-y-20">
	<div class="space-y-5">
		<h3 class="font-medium text-brand">OUR TEAM</h3>
		<h4 class="text-xl font-semibold">Experts in position.</h4>
	</div>

	<div class="grid grid-cols-2 lg:grid-cols-6 border-2">
		{#each team_card_items as { name, position, img }}
			<TeamCard {name} {position} {img} />
		{/each}
	</div>
</section>
