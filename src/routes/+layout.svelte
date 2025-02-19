<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { init } from '@telegram-apps/sdk-svelte';

	let { children } = $props();
	
	onMount(() => {
		init();
	});
</script>

<div class="flex min-h-full flex-col">
	<main>
		{@render children()}
	</main>
	<footer>
		<nav>
			<ul class="flex gap-2">
				<li class="rounded-sm border-2 border-blue-900 bg-blue-50 px-1 py-0.5">
					<a href="/">Главная</a>
				</li>
				<li class="rounded-sm border-2 border-blue-900 bg-blue-50 px-1 py-0.5">
					<a href="/me">Мой персонаж</a>
				</li>
			</ul>
		</nav>
	</footer>
</div>
