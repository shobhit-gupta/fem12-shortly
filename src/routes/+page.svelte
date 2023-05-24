<script lang="ts">
	import HamburgerButton from '$lib/UI/HamburgerButton.svelte';
	import Navbar from '$lib/UI/Navbar.svelte';
	import Features from '$lib/UI/Features.svelte';
	import Boost from '$lib/UI/Boost.svelte';
	import Footer from '$lib/UI/Footer.svelte';

	let isMenuOpen = false;
	let header: HTMLElement;
	let scrollY: number;

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

	<div class="center-content-container">
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
						tracking-open
						text-grayishViolet
						md:mt-1.5
						md:text-2xl
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
	<section class="center-content-container section relative">
		<div
			class="
				absolute
				inset-x-6
				-translate-y-1/2
				rounded-[10px]
				bg-darkViolet
				bg-[url('/images/bg-shorten-mobile.svg')]
				bg-cover
				bg-[left_90px_top_-50px]
				bg-no-repeat
				p-6
				md:bg-[url('/images/bg-shorten-desktop.svg')]
				md:bg-left-top
				md:px-16
				md:py-[52px]
			"
		>
			<form class="flex flex-col justify-center gap-4 md:flex-row md:items-start md:gap-6">
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
							tracking-open
							placeholder-veryDarkBlue/50
							placeholder:font-medium
							invalid:border-[3px]
							invalid:border-red
							md:px-8
							md:py-3.5
							md:text-xl
							md:leading-easy
						"
						placeholder="Shorten a link here..."
					/>
					<p
						class="mt-1 hidden text-xs italic leading-normal tracking-open text-red md:mt-2 md:text-base"
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
	</section>
</div>

<Features {features} />
<Boost />
<Footer />

<style lang="postcss">
	.link {
		@apply text-base leading-none tracking-open md:text-xl md:leading-easy;
	}
</style>
