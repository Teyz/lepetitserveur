<script lang="ts">
    export let name: string;
    export let rewards: string;
    export let isFinished: boolean;
</script>

<div class="prime-card-container">
    <h2 class="pt-3">Wanted</h2>
    <div class="relative">
        {#if isFinished}
            <img src="/image/prime-icon.svg" alt="" class="w-12 h-12 absolute left-1/2 top-16 -translate-x-1/2">
        {/if}
        <img src="/image/prime-card-avatar.png" alt="" class="{isFinished ? 'isFinished' : ''} pt-3">
    </div>
    <div class="flex flex-col gap-3 absolute left-1/2 bottom-3 -translate-x-1/2 w-full z-10">
        <h2>{name}</h2>
        <span>REWARD</span>
        <p>{rewards}</p>
    </div>
    <img src="/image/prime-brush.png" alt="" class="brush absolute left-0 bottom-0">
</div>

<style lang="postcss">
    .prime-card-container {
        @apply flex flex-col items-center justify-between border-opacity-75 border-white border-[5px] max-w-64 relative overflow-hidden;
        background: linear-gradient(27deg, rgba(0, 0, 0, 0.00) -0.62%, rgba(255, 255, 255, 0.10) 100%), #0B0C10;
        border-color: #131418;
    }

    .isFinished {
        opacity: 0.04;
    }

    h2 {
        text-align: center;
        font-family: "nocturne";
        font-size: 30px;
        font-style: normal;
        font-weight: 600;
        line-height: 32px;
        text-transform: uppercase;
        background: linear-gradient(180deg, #FFF 6.77%, #93B3CA 89.84%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    span {
        color: #C52543;
        text-align: center;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 16px;
        letter-spacing: 3.2px;
        text-transform: uppercase;
    }

    p {
        color: rgba(255, 255, 255, 0.70);
        text-align: center;
        font-family: Volkhov;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
    }

    .brush {
        transform: scale(10);
    }
</style>