<script lang="ts">
	import { browser } from "$app/environment";
	import { onMount } from "svelte";
	import PrimeCard from "./PrimeCard.svelte";
    import Carousel from "svelte-carousel";

    export let primes: any[] = [];
    let carousel: any;
    $: particlesToShow = 4;

    const updateParticlesToShow = () => {
        console.log("coucou");
        
        const width = window.innerWidth;
        if (width < 600) {
        particlesToShow = 1;
        } else if (width < 900) {
        particlesToShow = 2;
        } else {
        particlesToShow = 4;
        }
    };

    onMount(() => {
        updateParticlesToShow();
        window.addEventListener('resize', updateParticlesToShow);
        return () => {
            window.removeEventListener('resize', updateParticlesToShow);
        };
    });
</script>

<div class="prime-container px-8 md:px-0">
    <div class="prime-content">
        <div class="flex flex-col gap-4 items-center justify-center max-w-3xl px-8 md:px-0">
            <span>PRIME</span>
            <h1>Mettez des primes sur vos ennemis</h1>
            <h2>Ne laissez personne dominer votre équipe</h2>
            <p>Restez discret vis-à-vis de vos ennemis en plaçant une prime anonymement ! Ne créez pas de nouveaux ennemis inutilement.</p>
        </div>
        <img src="/image/prime.png" alt="" class="avatar">
    </div>
    {#if primes}
        <div class="prime-list-container">
            {#if browser && primes.length > 0}
                <Carousel
                    bind:this={carousel}
                    particlesToShow={particlesToShow}
                    particlesToScroll={1}
                    infinite={false}
                    swiping={true}
                    >
                    {#each primes as prime (prime.fields.name)}
                        <div class="item">
                            <PrimeCard name={prime.fields.name} rewards={prime.fields.rewards} isFinished={prime.fields.isFinished}/>
                        </div>
                    {/each}
                </Carousel>
            {/if}
        </div>
    {/if}
</div>

<style lang="postcss">
    .prime-container {
        @apply flex flex-col gap-11 mt-36;
    } 
    .prime-content {
        @apply flex flex-col md:flex-row items-center justify-center gap-11;
    }

    img {
        @apply border-opacity-20 border-4 border-white w-full max-w-2xl object-contain;
    }

    span {
        @apply text-primary text-base font-semibold uppercase;
        line-height: 24px;
        letter-spacing: 3.2px;
    }

    h1 {
        @apply text-2xl md:text-5xl font-normal uppercase text-center;
        line-height: 52px; /* 108.333% */
        letter-spacing: 12px;
        background: linear-gradient(180deg, #FFF 6.77%, #93B3CA 89.84%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    h2 {
        @apply text-lg font-bold uppercase;
        line-height: 28px;
        letter-spacing: 3.6px;
        background: linear-gradient(180deg, #FFF 6.77%, #93B3CA 89.84%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    p {
        @apply text-white text-opacity-70 text-lg font-normal text-center;
        font-family: Volkhov;
        line-height: 28px;
    } 

    .item {
        @apply flex items-center justify-center;
    }

    .prime-list-container {
        @apply flex items-center justify-center max-w-5xl m-auto w-full;
    }
</style>
