<script lang="ts">
	import HamburgerButton from '$lib/UI/HamburgerButton.svelte';
	import Navbar from '$lib/UI/Navbar.svelte';

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
		center-x
		fixed
		z-10
		flex
		w-full
		max-w-6xl
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
	<Navbar {isMenuOpen} />
</header>

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
