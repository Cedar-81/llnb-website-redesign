<script>
	import logo from '$lib/assets/logo.png';
	import Icon from '@iconify/svelte';

	let activeIndex = 0;
	let show_mobile_nav = false;
</script>

<nav class="w-full sticky top-0 bg-bg-lighter z-30 h-16 flex justify-between items-center">
	<div class="overflow-hidden h-10">
		<img class="h-full w-full object-cover" src={logo} alt="llnb logo" />
	</div>

	<button class="lg:hidden" on:click={() => (show_mobile_nav = !show_mobile_nav)}>
		<Icon icon="basil:menu-solid" class="lg:hidden h-10 w-10" />
	</button>

	<ul class="flex bg-bg-lighter top-0 items-center space-y-0 space-x-6">
		<button class=" font-medium" class:active={activeIndex == 0} on:click={() => (activeIndex = 0)}>
			<li>HOME</li>
		</button>
		<button class=" font-medium" class:active={activeIndex == 1} on:click={() => (activeIndex = 1)}>
			<li>OUR TEAM</li>
		</button>
		<button class=" font-medium" class:active={activeIndex == 2} on:click={() => (activeIndex = 2)}>
			<li>PRACTICE AREA</li>
		</button>
	</ul>

	<ul
		class:hidden={!show_mobile_nav}
		class="flex bg-bg-lighter text-lg fixed top-0 left-0 w-[90vw] h-[100vh] flex-col lg:flex-row items-start p-6 lg:items-center space-y-5 lg:space-y-0 lg:space-x-6"
	>
		<button
			class="py-3 px-4 lg:py-0 border-2 w-full text-left lg:w-max lg:text-center lg:px-0 font-medium"
			class:active={activeIndex == 0}
			on:click={() => (activeIndex = 0)}
		>
			<li>HOME</li>
		</button>
		<button
			class="py-3 px-4 lg:py-0 border-2 w-full text-left lg:w-max lg:text-center lg:px-0 font-medium"
			class:active={activeIndex == 1}
			on:click={() => (activeIndex = 1)}
		>
			<li>OUR TEAM</li>
		</button>
		<button
			class="py-3 px-4 lg:py-0 border-2 w-full text-left lg:w-max lg:text-center lg:px-0 font-medium"
			class:active={activeIndex == 2}
			on:click={() => (activeIndex = 2)}
		>
			<li>PRACTICE AREA</li>
		</button>
		<button class="px-4 py-2 bg-brand text-white">LETS TALK</button>
		<button
			class="px-4 py-2 border-brand border-2 absolute bottom-5 right-5"
			on:click={() => (show_mobile_nav = !show_mobile_nav)}>CLOSE</button
		>
	</ul>

	<button class="px-4 py-2 bg-brand text-white hidden lg:block">LETS TALK</button>
</nav>

<style>
	.active {
		color: #00b3ff;
		font-weight: bold;
	}
</style>
