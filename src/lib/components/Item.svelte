<script lang="ts">
  export let name: string;
  export let avatar;
  export let twitch_url;
</script>

{#if twitch_url}
  <a href={twitch_url} class="item-container">
    <div class="diamond">
      <img src={avatar} alt="">
    </div>
    <span>{name}</span>
  </a>
{:else}
<a href={twitch_url} class="item-container">
  <div class="diamond">
    <img src="/image/pp/noStream.png" alt="">
  </div>
  <span>{name}</span>
</a>
{/if}

<style lang="postcss">
    .item-container {
        @apply flex flex-col items-center justify-center gap-3;
    }

    .diamond {
        @apply border-opacity-20 border-4 border-white;
        width: 100px;
        height: 100px;
        overflow: hidden;
        transform: rotate(45deg);
        position: relative;
    }

    .diamond img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        transform: scale(1.5) rotate(-45deg);
    }

    span {
      color: #FFF;
      font-family: Volkhov;
      text-align: center;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 150% */
      letter-spacing: 3.2px;
      text-transform: uppercase;
      padding-top: 24px;
    }
</style>