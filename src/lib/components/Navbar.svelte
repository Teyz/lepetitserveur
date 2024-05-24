<script lang="ts">
    import { Hamburger } from 'svelte-hamburgers';
    let open: boolean = false;

    function handleClick() {
        open = !open;
    }
</script>

<div class="navbar-container pl-8 md:px-16 pr-4 z-20">
    <ul class="hidden md:flex items-center justify-center gap-4">
        <li>
            <a href="#serveur">Serveur</a>
        </li>
        <li>
            <div class="divider" />
        </li>
        <li>
            <a href="#presentation">Presentation</a>
        </li>
        <li>
            <img src="/image/logo.svg" alt="Le petit serveur - V Rising logo">
        </li>
        <li>
            <a href="#equipes">Equipes</a>
        </li>
        <li>
            <div class="divider" />
        </li>
        <li>
            <a href="#participants">Participants</a>
        </li>
    </ul>
    <div class="block md:hidden z-20">
        <Hamburger bind:open --color="#C52543" />
    </div>
    <div class="mobile-container z-[9] flex flex-col justify-between w-screen h-dvh bg-primary-dark px-8 pt-32 pb-8 {open ? "open" : ""}">
        <ul>
            <li>
                <a href="#serveur" on:click={handleClick}>Serveur</a>
            </li>
            <li>
                <div class="divider" />
            </li>
            <li>
                <a href="#presentation" on:click={handleClick}>Presentation</a>
            </li>
            <li>
                <img src="/image/logo.svg" alt="Le petit serveur - V Rising logo">
            </li>
            <li>
                <a href="#equipes" on:click={handleClick}>Equipes</a>
            </li>
            <li>
                <div class="divider" />
            </li>
            <li>
                <a href="#participants" on:click={handleClick}>Participants</a>
            </li>
        </ul>
    </div>
</div>


<style lang="postcss">
    .navbar-container {
		@apply py-3 flex justify-start md:justify-center items-center fixed md:relative w-full;
	}
    .mobile-container {
        @apply absolute top-0 right-0 transition-all duration-300 opacity-0 invisible;
        transform: translateX(100%);
        z-index: 1;
    }
    .mobile-container.open {
        @apply opacity-100 visible;
        transform: translateX(0);
    }
    .divider {
        @apply h-[2px] w-8 md:h-8 md:w-[2px] bg-white bg-opacity-30;
    }
    li {
        @apply text-sm font-semibold uppercase p-2;
        line-height: 20px;
        letter-spacing: 2.8px;
        background: linear-gradient(0deg, #FFF 0%, #93B3CA 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>