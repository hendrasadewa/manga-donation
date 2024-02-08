<script lang="ts">
	export let title = '';
	export let isAvailable = false;

	const TWITTER_HOST = 'https://twitter.com';
	const TWEET_INTENT_PATH = 'intent/tweet';
	const USER = 'sadevva_';

	const template = `Hi kak @${USER}, Saya minat untuk ambil buku "${title}"`;

	let url = new URL(TWITTER_HOST);
	url.pathname = TWEET_INTENT_PATH;

	url.searchParams.append('text', template);
</script>

<div class="flex items-center justify-center rounded-br py-1 bg-zanah-600">
	{#if isAvailable}
		<a href={url.toString()}>
			<span class="text-xs text-white">
				Click here to ask @{USER}
			</span>
		</a>
	{:else}
		<span class="text-xs text-gray-500 italic">Taken</span>
	{/if}
</div>
