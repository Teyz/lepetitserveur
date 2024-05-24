<div class="presentation-container" id="presentation">
    <iframe width="700" height="400" src="https://www.youtube.com/embed/aB_2ZRn9F_k?si=IpM4_PqwjPo1aRAA&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
    <div class="flex flex-col gap-4 items-center justify-center max-w-2xl">
        <span>presentation</span>
        <h1>RPG D'ACTION ET DE SURVIE DE VAMPIRE</h1>
        <h2 class="text-center">CONSTRUISEZ VOTRE CHÂTEAU - CHASSE AU SANG - <strong>MONTÉE EN PUISSANCE</strong></h2>
        <p>Réveillé après des siècles, érigez un château, asservissez des humains, pillez des villages et buvez le sang de vos ennemis pour devenir le prédateur ultime. Oserez-vous défier le trône de Dracula ?</p>
    </div>
</div>

<style lang="postcss">
    .presentation-container {
        @apply flex flex-col md:flex-row items-center justify-center gap-11 py-64 px-8 md:px-0;
    }

    iframe {
        @apply border-opacity-20 border-4 border-white w-full md:max-w-2xl;
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
</style>