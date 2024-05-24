<script lang="ts">
	import Banner from "$lib/components/Banner.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import Participants from "$lib/components/Participants.svelte";
	import Presentation from "$lib/components/Presentation.svelte";
	import Prime from "$lib/components/Prime.svelte";
	import Team from "$lib/components/Team.svelte";

	export let data;	
</script>

<svelte:head>
	<meta name="description" content="">
	<meta name="keywords" content="vrising, lepetitserveur, twitch">
	<meta name="title" content="LePetitServeur - V Rising">
	<link rel="canonical" href="https://www.lepetitserveur.fr/" /> 
	<title>LePetitServeur - V Rising</title>

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://www.lepetitserveur.fr/">
	<meta property="og:type" content="website">
	<meta property="og:title" content="LePetitServeur - V Rising">
	<meta property="og:description" content="">
	<meta property="og:image" content="/image/og.png">

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image">
	<meta property="twitter:domain" content="lepetitserveur.fr/">
	<meta property="twitter:url" content="https://www.lepetitserveur.fr/">
	<meta name="twitter:title" content="LePetitServeur - V Rising">
	<meta name="twitter:description" content="">
	<meta name="twitter:image" content="/image/og.png">
</svelte:head>

<Navbar />
<Hero />
<Presentation />
<Team />
<Participants />
<Prime primes={data.primes}/>
<!-- <Banner /> -->
<Footer />