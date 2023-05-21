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

<!-- Reference(s):
	- https://www.modusagency.com/blog/css-tricks-expanding-beyond-a-parent-div/
-->
<div class="full-width">
	<div class="center-content-container">
		<!-- fix: Specify width again because it is taken out of normal flow of the DOM because of it's fixed position. -->
		<header
			class="
				fixed
				z-10
				mx-auto
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

		<section
			id="hero"
			class="
				mx-auto
				flex
				flex-col
				gap-9
				bg-green-400
				px-6
				pb-40
				pt-24
				md:flex-row-reverse
				md:py-40
				lg:gap-24
			"
		>
			<div class="-mr-[200%] w-[500%]">
				<img
					src="/images/illustration-working.svg"
					alt=""
					class="
						h-[337px]
						sm:h-[380px]
						md:h-[420px]
						lg:h-[482px]
					"
				/>
			</div>

			<div
				class="
					flex
					flex-col
					items-center
					justify-center
					text-center
					md:w-[450px]
					md:shrink-0
					md:items-start
					md:text-left
					lg:w-[565px]
				"
			>
				<h1
					class="
						text-[42px]
						font-bold
						leading-[1.14em]
						tracking-tight
						text-veryDarkBlue
						md:text-[56px]
						lg:text-[80px]
					"
				>
					More than just shorter links
				</h1>
				<p
					class="
						mt-4
						leading-relaxed
						tracking-[0.12px]
						text-grayishViolet
						md:mt-1.5
						md:text-[22px]
						md:tracking-[0.15px]
					"
				>
					Build your brand’s recognition and get detailed insights on how your links are
					performing.
				</p>
				<a href="/" class="btn-primary--lg mt-8 md:mt-9">Get Started</a>
			</div>
		</section>

		<div class="h-96 bg-black">
			<div class="mx-6 h-40 -translate-y-1/2 bg-violet-800" />
		</div>
	</div>
</div>

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
