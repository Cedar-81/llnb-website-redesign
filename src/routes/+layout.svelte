<script>
	import '../app.css';
	import TopNav from '../components/TopNav.svelte';
</script>

<section class="px-5 lg:px-10 overflow-x-hidden">
	<TopNav />
	<slot />
</section>
