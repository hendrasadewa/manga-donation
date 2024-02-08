<script lang="ts">
	import type { Book } from '$lib/types';
	import Card from './Card.svelte';

	export let books: Book[] = [];
</script>

<main class="grid grid-cols-1 gap-6 px-2 my-4">
	{#each books as book (book.id)}
		<Card {book} />
	{/each}
</main>
