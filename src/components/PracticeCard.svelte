<script lang="ts">
	export let title: string;
	export let content: string;
	export let img: string;
</script>

<div class="h-[25rem] w-[18rem] bg-bg-darker/20 relative">
	<div class="overflow-hidden h-[12rem] w-full bg-brand">
		<img class="h-full w-full object-cover" src={img} alt="a man handshaking" />
	</div>

	<div class="p-4 space-y-2">
		<h4 class="text-lg">{title}</h4>
		<p class="font-light">{content}</p>
	</div>

	<button class="px-4 py-2 bg-brand text-white absolute right-0 bottom-0">Read more</button>
</div>
