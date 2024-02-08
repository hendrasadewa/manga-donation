<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
	import type { BooksResponse } from '$lib/types';
	import List from './List.svelte';

	export let data: BooksResponse;

	let books = data.data || [];
</script>

<Seo />

<main class="max-w-96 m-auto">
	<header>
		<h1 class="text-xl text-center p-2">Manga to Adopt</h1>
		<hr />
	</header>
	<List books={books || []} />
</main>

<style>
	:global(html) {
		background-color: whitesmoke;
	}
</style>
