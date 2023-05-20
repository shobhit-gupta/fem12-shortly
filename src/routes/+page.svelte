<script lang="ts">
	import HamburgerButton from '$lib/UI/HamburgerButton.svelte';

	let isMenuOpen = false;

	const toggleMenu = (event: CustomEvent<boolean>) => {
		isMenuOpen = event.detail;
		console.log(isMenuOpen);
	};
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

<header
	class="
		fixed
		left-1/2
		z-10
		flex
		w-full
		max-w-6xl
		-translate-x-1/2
		flex-wrap
		items-center
		justify-between
		gap-6
		px-6
		pt-10
		md:flex-nowrap
		md:gap-11
		md:pt-12
	"
>
	<img src="/images/logo.svg" alt="" />
	<div class="flex justify-end md:hidden">
		<HamburgerButton on:toggleMenu={toggleMenu} />
	</div>
	<nav
		class="
			w-full
			flex-col
			divide-y-2
			divide-grayishViolet
			divide-opacity-25
			rounded-lg
			bg-darkViolet
			px-6
			py-10
			text-center
			font-bold
			text-white
			md:flex
			md:flex-row
			md:items-center
			md:justify-between
			md:divide-y-0
			md:bg-transparent
			md:p-0
			md:text-[15px]
			md:leading-normal
			md:text-grayishViolet
		"
		class:flex={isMenuOpen}
		class:hidden={!isMenuOpen}
	>
		<div class="flex flex-col gap-7 pb-7 md:flex-row md:pb-0">
			<a href="/">Features</a>
			<a href="/">Pricing</a>
			<a href="/">Resources</a>
		</div>
		<div class="flex flex-col gap-6 pt-7 md:flex-row md:items-center md:gap-9 md:pt-0">
			<a href="/">Login</a>
			<a href="/" class="btn--primary">Sign Up</a>
		</div>
	</nav>
</header>

<!-- <div class="bg-cyan-100 flex h-screen items-center justify-center text-5xl font-extralight">
	Shortly URL Shortening API Challenge
</div> -->

<!-- Pricing -->
<!-- Resources -->

<!-- Login -->
<!-- Sign Up -->

<!-- More than just shorter links -->

<!-- Build your brand’s recognition and get detailed insights  -->
<!-- on how your links are performing. -->

<!-- Get Started -->

<!-- Shorten a link here... -->

<!-- Shorten It! -->

<!-- Advanced Statistics -->

<!-- Track how your links are performing across the web with our  -->
<!-- advanced statistics dashboard. -->

<!-- Brand Recognition -->

<!-- Boost your brand recognition with each click. Generic links don’t  -->
<!-- mean a thing. Branded links help instil confidence in your content. -->

<!-- Detailed Records -->

<!-- Gain insights into who is clicking your links. Knowing when and where  -->
<!-- people engage with your content helps inform better decisions. -->

<!-- Fully Customizable -->

<!-- Improve brand awareness and content discoverability through customizable  -->
<!-- links, supercharging audience engagement. -->

<!-- Boost your links today -->

<!-- Get Started -->

<!-- Features -->

<!-- Link Shortening -->
<!-- Branded Links -->
<!-- Analytics -->

<!-- Resources -->

<!-- Blog -->
<!-- Developers -->
<!-- Support -->

<!-- Company -->

<!-- About -->
<!-- Our Team -->
<!-- Careers -->
<!-- Contact -->

<style lang="postcss">
	.btn--primary {
		@apply rounded-full bg-cyan px-6 py-2.5 text-center font-bold text-white md:py-2;
	}
</style>
