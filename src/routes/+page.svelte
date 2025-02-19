<script lang="ts">
	import { authService } from '$lib/api/duck_wars_backend/services/auth';
	import { charactersService } from '$lib/api/duck_wars_backend/services/characters';
	import { onMount } from 'svelte';

	onMount(async () => {
		await authService.loginViaTGInitData();
		const char = await charactersService.me();
		console.log(char);
	});
</script>

<div class="bg-neutral-900"></div>
