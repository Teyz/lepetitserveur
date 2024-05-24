<script>

	import Countdown from "./Countdown.svelte";

</script>
<div class="hero-container" id="serveur">
    <img src="/image/hero-bg.png" alt="">
    <div class="hero-content">
        <div class="flex flex-col gap-4 items-center justify-center max-w-3xl">
            <span>ÉVENEMENT</span>
            <h1>une aventure <br> vampirique</h1>
            <h2 class="text-center">7 jours pour explorer toutes les nouveautés <br>
                <strong>de la v1.0 de VRising</strong></h2>
            <p>Suivez nos histoires à travers les différentes équipes, entre PvP et PvE. C'est à vous de choisir ! Au fond, c'est juste un serveur entre potes.</p>
        </div>
        <div class="countdown-container">
            <Countdown endDate="2024-05-24T20:00:00" />
        </div>
    </div>
</div>

<style lang="postcss">
    .hero-container {
        @apply flex items-center justify-start pt-64 pb-24 md:py-24 px-8 md:px-36;
    }

    img {
        @apply absolute md:right-0 top-0 -z-[1];

        scale: 5;
        @media screen and (min-width: 1024px) {
            scale: 1;
        }
    }

    .hero-content {
        @apply flex flex-col gap-6 justify-center items-center;
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

    .countdown-container {
        display: flex;
        padding: 16px 24px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-right: 3px solid var(--Linear-Stroke, #FFF);
        border-left: 3px solid var(--Linear-Stroke, #FFF);
        background: linear-gradient(180deg, #383840 0%, #1A1A1F 100%);
    }
</style>