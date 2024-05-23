<script lang="ts">
    export let name: string;
</script>

<div class="prime-card-container">
    <h2>Wanted</h2>
    <h2>{name}</h2>
    <span>REWARD</span>
    <p>2 Cailloux, 1 Bois et 1 Fer</p>
</div>

<style lang="postcss">
    .prime-card-container {
        @apply flex flex-col items-start justify-between border-opacity-75 border-white border-[5px];
        background: linear-gradient(27deg, rgba(0, 0, 0, 0.00) -0.62%, rgba(255, 255, 255, 0.10) 100%), #0B0C10;
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
</style>