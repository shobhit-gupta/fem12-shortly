<script lang="ts">

	import HamburgerButton from '$lib/UI/HamburgerButton.svelte';
	import Navbar from '$lib/UI/Navbar.svelte';
	import Hero from '$lib/UI/Hero.svelte';
	import Shorten from '$lib/UI/Shorten.svelte';
	import Features from '$lib/UI/Features.svelte';
	import Boost from '$lib/UI/Boost.svelte';
	import Footer from '$lib/UI/Footer.svelte';

	let isMenuOpen = false;
	let header: HTMLElement;
	let scrollY: number;

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

	const toggleMenu = (event: CustomEvent<boolean>) => {
		isMenuOpen = event.detail;
	};

	$: if (scrollY >= 400 && !header.classList.contains('shadow-lg')) {
		header.classList.add('shadow-lg');
		header.classList.remove('pt-6');
	} else if (scrollY < 150 && header.classList.contains('shadow-lg')) {
		header.classList.remove('shadow-lg');
		header.classList.add('pt-6');
	}
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

<svelte:window bind:scrollY />

<!-- Reference(s):
	- https://www.modusagency.com/blog/css-tricks-expanding-beyond-a-parent-div/
-->
<div class="full-width bg-white">
	<!-- fix: Specify width again because it is taken out of normal flow of the DOM because of it's fixed position. -->
	<header
		bind:this={header}
		class="
			fixed
			z-50
			mx-auto
			w-full
			bg-white
			pt-6
			transition
			duration-1000
		"
	>
		<div
			class="
				mx-auto
				flex
				max-w-6xl
				flex-wrap
				items-center
				justify-between
				gap-6
				px-6
				pb-2
				pt-4
				md:flex-nowrap
				md:gap-11
				md:pt-6
			"
		>
			<img src="/images/logo.svg" alt="" />
			<div class="flex justify-end md:hidden">
				<HamburgerButton on:toggleMenu={toggleMenu} />
			</div>
			<Navbar {isMenuOpen} />
		</div>
	</header>
</div>

<Hero />
<Shorten {shortnedLinks} />
<Features {features} />
<Boost />
<Footer />

<style lang="postcss">
</style>
