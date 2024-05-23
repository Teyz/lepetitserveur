<script lang="ts">
  export let name: string;
  export let avatar: string;
</script>

<div class="item-container">
    <div class="diamond">
      <img src={avatar} alt="">
    </div>
    <span>{name}</span>
</div>

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
    }

    .diamond img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        transform: rotate(-45deg);
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