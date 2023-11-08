<script lang="ts">
	export let name: string;
	export let position: string;
	export let img: string;
</script>

<div class="relative group">
	<div class="overflow-hidden h-[20rem] w-full min-w-[8rem] bg-brand">
		<img class="h-full w-full object-cover" src={img} alt="a man handshaking" />
	</div>

	<div class="absolute h-full w-full bg-black/60 hidden group-hover:block top-0 right-0" />

	<div class="absolute bottom-5 text-center w-full p-2 text-white space-y-2">
		<p class="text-sm font-bold">{name}</p>
		<p class="text-xs font-light">{position}</p>
	</div>
</div>
