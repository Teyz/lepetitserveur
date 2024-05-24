<script>
	import Countdown from "./Countdown.svelte";

</script>
<div class="banner-container">
    <span>FIN DE L’EVENEMENT</span>
    <Countdown endDate="2024-05-24T20:00:00" classZ="big px-8 md:px-0"/>
</div>

<style lang="postcss">
    .banner-container {
        @apply flex flex-col gap-4 items-center justify-center pt-36 pb-24 px-8 md:px-0;
    }

    span {
        @apply text-primary text-base font-semibold uppercase;
        line-height: 24px;
        letter-spacing: 3.2px;
    }
</style>