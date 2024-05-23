<script lang="ts">
	import { writable } from "svelte/store";
	import PrimeCard from "./PrimeCard.svelte";
    import LightCarousel from 'svelte-light-carousel';

    export let primes: any[] = [];

    const slides = primes.map((prime: any) => {
        return {
            name: prime.fields.name,
            rewards: prime.fields.rewards,
            isFinished: prime.fields.isFinished,
        }
    });

    const currentSlide = writable(0);

    function goToSlide(index: number) {
        currentSlide.set(index);
    }

    $: currentIndex = 0;

    currentSlide.subscribe(value => {
        currentIndex = value;
    });
</script>

<div class="prime-container">
    <div class="prime-content">
        <div class="flex flex-col gap-4 items-center justify-center max-w-3xl">
            <span>PRIME</span>
            <h1>Mettez des primes sur vos ennemis</h1>
            <h2>Ne laissez personne dominer votre équipe</h2>
            <p>Restez discret vis-à-vis de vos ennemis en plaçant une prime anonymement ! Ne créez pas de nouveaux ennemis inutilement.</p>
        </div>
        <img src="/image/prime.png" alt="" class="avatar">
    </div>
    <div class="prime-list-container">
        {#each primes as prime}
            <LightCarousel {slides} layout={{ xs: 4 }} autoHeight containerClass="flex items-center justify-center gap-8">
                <div slot="slide" let:slide let:index class="flex items-center justify-center gap-8">
                    <PrimeCard name={prime.fields.name} rewards={prime.fields.rewards} isFinished={prime.fields.isFinished}/>
                </div>
                <div
                    slot="dots"
                    let:dots
                    let:a11y
                    let:scrollTo
                    data-progress
                    class="absolute left-1/4 -bottom-10 w-1/2 gap-2 justify-center flex items-center z-10"
                    {...a11y}
                >
                    {#each Array(Math.ceil(slides.length / 4)) as _, i}
                        <button
                            {...a11y}
                            on:click={() => scrollTo(i)}
                            class={'rounded-full cursor-pointer aria-[selected="true"]:scale-125 transition-all w-3 h-3  aria-[selected="true"]:bg-white bg-secondary-dark'}
                        />
                    {/each}
                </div>
            </LightCarousel>
        {/each}
    </div>
</div>

<style lang="postcss">
    .prime-container {
        @apply flex flex-col gap-11 mt-36;
    } 
    .prime-content {
        @apply flex items-center justify-center gap-11;
    }

    img {
        @apply border-opacity-20 border-4 border-white max-w-2xl object-contain;
    }

    span {
        @apply text-primary text-base font-semibold uppercase;
        line-height: 24px;
        letter-spacing: 3.2px;
    }

    h1 {
        @apply text-5xl font-normal uppercase text-center;
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

    .prime-list-container {
        @apply flex items-center justify-center;
    }
</style>
