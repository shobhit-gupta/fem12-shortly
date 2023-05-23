<script lang="ts">
	import HamburgerButton from '$lib/UI/HamburgerButton.svelte';
	import Navbar from '$lib/UI/Navbar.svelte';

	let isMenuOpen = false;

	const toggleMenu = (event: CustomEvent<boolean>) => {
		isMenuOpen = event.detail;
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
<div class="full-width bg-white">
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
	</div>
</div>

<div class="w-full">
	<div class="center-content-container section relative">
		<div
			class="
				absolute
				inset-x-6
				-translate-y-1/2
				rounded-[10px]
				bg-darkViolet
				bg-[url('images/bg-shorten-mobile.svg')]
				bg-cover
				bg-[left_90px_top_-50px]
				bg-no-repeat
				p-6
				md:bg-[url('images/bg-shorten-desktop.svg')]
				md:bg-left-top
				md:px-16
				md:py-[52px]
			"
		>
			<form class="flex flex-col items-start justify-center gap-4 md:flex-row md:gap-6">
				<div class="grow">
					<input
						type="url"
						name=""
						id=""
						value=""
						class="
							w-full
							rounded-[10px]
							px-4
							pb-[11px]
							pt-3
							text-base
							leading-relaxed
							tracking-[0.12px]
							placeholder-veryDarkBlue/50
							placeholder:font-medium
							invalid:border-[3px]
							invalid:border-red
							md:px-8
							md:py-3.5
							md:text-xl
							md:tracking-[0.15px]
						"
						placeholder="Shorten a link here..."
					/>
					<p
						class="mt-1 hidden text-xs italic leading-[18px] tracking-[0.08px] text-red md:mt-2 md:text-base md:tracking-[0.11px]"
					>
						Please add a link
					</p>
				</div>
				<button class="btn-secondary--md md:btn-secondary--xl w-full md:w-auto md:grow-0"
					>Shorten It!</button
				>
			</form>
		</div>
		<ul class="flex flex-col gap-6 pt-28 md:gap-4">
			<li
				class="md:py- flex flex-col justify-between gap-2 divide-y-[1px] divide-grayishViolet/25 rounded-md bg-white md:flex-row md:items-center md:divide-y-0 md:py-4 md:pl-8 md:pr-6"
			>
				<p class="link p-4 text-veryDarkBlue md:p-0">https://www.frontendmentor.io</p>
				<div
					class="flex flex-col gap-[18px] p-4 md:m-0 md:flex-row md:items-center md:gap-6 md:p-0"
				>
					<p class="link text-cyan">https://rel.ink/k4lKyk</p>
					<button class="btn-theme btn-sm md:btn-xs rounded-md">Copy</button>
				</div>
			</li>
			<li
				class="md:py- flex flex-col justify-between gap-2 divide-y-[1px] divide-grayishViolet/25 rounded-md bg-white md:flex-row md:items-center md:divide-y-0 md:py-4 md:pl-8 md:pr-6"
			>
				<p class="link p-4 text-veryDarkBlue md:p-0">https://www.frontendmentor.io</p>
				<div
					class="flex flex-col gap-[18px] p-4 md:m-0 md:flex-row md:items-center md:gap-6 md:p-0"
				>
					<p class="link text-cyan">https://rel.ink/k4lKyk</p>
					<button class="btn-theme btn-sm md:btn-xs rounded-md">Copy</button>
				</div>
			</li>
			<li
				class="md:py- flex flex-col justify-between gap-2 divide-y-[1px] divide-grayishViolet/25 rounded-md bg-white md:flex-row md:items-center md:divide-y-0 md:py-4 md:pl-8 md:pr-6"
			>
				<p class="link p-4 text-veryDarkBlue md:p-0">https://www.frontendmentor.io</p>
				<div
					class="flex flex-col gap-[18px] p-4 md:m-0 md:flex-row md:items-center md:gap-6 md:p-0"
				>
					<p class="link text-cyan">https://rel.ink/k4lKyk</p>
					<button class="btn-theme btn-sm md:btn-xs rounded-md">Copy</button>
				</div>
			</li>
		</ul>
	</div>
</div>

<div class="full-width">
	<div class="center-content-container section">
		<div class="mx-auto max-w-[540px] text-center">
			<h2 class="section-title text-veryDarkBlue">Advanced Statistics</h2>
			<p class="mt-4 text-grayishViolet md:mt-[18px]">
				Track how your links are performing across the web with our advanced statistics
				dashboard.
			</p>
		</div>
	</div>
</div>

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
	.section {
		@apply px-6 pb-20 md:pb-32;
	}

	.section-title {
		@apply text-[28px] font-bold leading-[48px] md:text-[40px];
	}

	.link {
		@apply text-base leading-none tracking-[0.12px] md:text-xl md:leading-[1.8em] md:tracking-[0.15px];
	}
</style>
