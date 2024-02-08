<script lang="ts">
	import type { Book } from '$lib/types';
	import Availability from './Availability.svelte';
	import Descriptions from './Descriptions.svelte';
	import InfoCta from './InfoCTA.svelte';
	import TakeCta from './TakeCTA.svelte';

	export let book: Book;
</script>

<article class="bg-slate-50 rounded-lg flex shadow-md w-full">
	<img
		class="rounded-l-lg aspect-square w-28 h-28"
		alt={`${book.name} shot`}
		src={book.image_src}
	/>
	<div class="flex flex-col justify-between w-full">
		<div class="px-2 py-1">
			<h2>{book.name}</h2>
			<Descriptions description={book.description} />
		</div>

		<div class="px-2 flex items-center w-full gap-1">
			<Availability isAvailable={book.is_available} />
			<span>&#x2022;</span>
			<InfoCta url={book.mal_url} />
			<span>&#x2022;</span>
			<span class="text-xs text-gray-700">{book.quantity} Book(s)</span>
		</div>
		<TakeCta title={book.name} isAvailable={book.is_available} />
	</div>
</article>
