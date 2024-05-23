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

<Navbar />
<Hero />
<Presentation />
<Team />
<Participants />
<Prime primes={data.primes}/>
<Banner />
<Footer />