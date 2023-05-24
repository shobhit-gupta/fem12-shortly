<script lang="ts">
	import Header from '$lib/UI/Header.svelte';
	import Hero from '$lib/UI/Hero.svelte';
	import Shorten from '$lib/UI/Shorten.svelte';
	import Features from '$lib/UI/Features.svelte';
	import Boost from '$lib/UI/Boost.svelte';
	import Footer from '$lib/UI/Footer.svelte';

	const shortnedLinks: shortenedLink[] = [
		{
			original: 'https://www.frontendmentor.io',
			shortened: 'https://rel.ink/k4lKyk'
		},
		{
			original: 'https://www.frontendmentor.io',
			shortened: 'https://rel.ink/k4lKyk'
		},
		{
			original: 'https://www.frontendmentor.io',
			shortened: 'https://rel.ink/k4lKyk'
		}
	];

	const features: feature[] = [
		{
			icon: '/images/icon-brand-recognition.svg',
			title: 'Brand Recognition',
			text: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
		},
		{
			icon: '/images/icon-detailed-records.svg',
			title: 'Detailed Records',
			text: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
		},
		{
			icon: '/images/icon-fully-customizable.svg',
			title: 'Fully Customizable',
			text: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
		}
	];
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap"
		rel="stylesheet"
	/>
	<title>Shortly URL shortening API Challenge</title>
</svelte:head>

<Header />
<Hero />
<Shorten {shortnedLinks} />
<Features {features} />
<Boost />
<Footer />
