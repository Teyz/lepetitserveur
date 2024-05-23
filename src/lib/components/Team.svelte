<script lang="ts">
	import { participants } from "$lib/participants";
	import Item from "./Item.svelte";

    let currentTeam: string = 'Maison Frey';

    const teams: string[] = Array.from(new Set(participants.map(participant => participant.team)));

    $: currentMembers = participants.filter(participant => participant.team === currentTeam);
</script>

<div class="team-container" id="equipes">
    <div class="team-header">
        <div class="divider" />
        <h2>Equipes</h2>
        <div class="divider" />
    </div>
    <h1>60 vampires repartient <br> en 15 Équipes</h1>
    <p>We welcome you and your community to the Court of Creators, the Official V Rising Creator</p>

    <div class="flex items-center justify-center gap-3">
        {#each teams as team}
            <button on:click={() => currentTeam = team} class={currentTeam === team ? 'active' : ''}>
                {team}
            </button>
        {/each}
    </div>

    <div class="flex items-center justify-center gap-32 p-8">
        {#each currentMembers as { name, avatar }}
            <Item {name} {avatar} />
        {/each}
    </div>
</div>

<style lang="postcss">
    .team-container {
        @apply flex flex-col items-center justify-center gap-11 px-8 md:px-36;

        @media screen and (min-width: 1920) {
            padding: 96px 250px !important;
        }
    }

    .team-header {
        @apply flex items-center justify-center gap-3 w-full;
    }

    .divider {
        @apply w-full h-[2px];
        opacity: 0.4;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.20) 25%, rgba(255, 255, 255, 0.75) 50%, rgba(255, 255, 255, 0.20) 75%, rgba(255, 255, 255, 0.00) 100%);
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
        @apply text-primary;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px; /* 150% */
        letter-spacing: 3.2px;
        text-transform: uppercase;
    }

    p {
        color: rgba(255, 255, 255, 0.70);
        text-align: center;
        font-family: Volkhov;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 155.556% */
    } 

    button {
        display: flex;
        font-family: Volkhov;
        padding: 16px 24px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background: linear-gradient(180deg, rgba(56, 56, 64, 0.25) 0%, rgba(26, 26, 31, 0.25) 100%);
        color: rgba(255, 255, 255, 0.10);
        text-align: right;
        leading-trim: both;
        text-edge: cap;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px; /* 142.857% */
        letter-spacing: 2.4px;
        text-transform: uppercase;
        transition: all 0.25s ease;
    }

    button:hover, button.active {
        color: #FFF;
        border-right: 3px solid var(--Linear-Stroke, #FFF);
        border-left: 3px solid var(--Linear-Stroke, #FFF);
        background: linear-gradient(180deg, #383840 0%, #1A1A1F 100%);
    }
</style>