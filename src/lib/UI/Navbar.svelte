<script lang="ts">
	export let isMenuOpen: boolean;
</script>

<nav
	class:flex={isMenuOpen}
	class:hidden={!isMenuOpen}
	class="
        nav__divider
        nav__body
        nav__text
        w-full
        flex-col
        md:flex
        md:flex-row
        md:items-center
        md:justify-between
    "
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

<style lang="postcss">
	.nav__divider {
		@apply divide-y-2 divide-grayishViolet divide-opacity-25 md:divide-y-0;
	}
	.nav__body {
		@apply rounded-lg bg-darkViolet px-6 py-10 md:bg-transparent md:p-0;
	}
	.nav__text {
		@apply text-center font-bold text-white md:text-[15px] md:leading-normal md:text-grayishViolet;
	}
</style>
