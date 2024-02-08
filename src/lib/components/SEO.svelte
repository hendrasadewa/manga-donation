<script>
	import { basicInfo } from '$lib/basicInfo';

	export let title = basicInfo.title;
	export let description = basicInfo.descriptions;
	export let keywords = basicInfo.keywords;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta name="og:title" content={title} />
	<meta name="og:description" content={description} />
	<meta name="og:keywords" content={keywords} />
	<meta name="og:type" content="article" />
	<meta name="og:url" content="https://donate-manga.hendrasadewa.com" />
	<meta name="og:site_name" content={title} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content={basicInfo.twitter} />
	<meta name="twitter:site" content={basicInfo.twitter} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>
