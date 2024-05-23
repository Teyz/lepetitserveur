<script lang="ts">
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    // TypeScript types
    type TimeLeft = {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
        expired: boolean;
    };

    // Props
    export let endDate: string;
    export let classZ: string = '';

    const timeLeft = writable<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: false });
    let intervalId: number | null = null;

    function calculateTimeDifference(targetDate: Date): TimeLeft {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        if (distance < 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                expired: true
            };
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds,
            expired: false
        };
    }

    function updateDisplay() {
        const targetDate = new Date(endDate);
        const time = calculateTimeDifference(targetDate);
        timeLeft.set(time);

        if (time.expired && intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    onMount(() => {
        updateDisplay();
        intervalId = setInterval(updateDisplay, 1000);

        return () => {
            if (intervalId !== null) {
                clearInterval(intervalId);
            }
        };
    });
</script>

<div class={classZ ? "big" : "countdown"}>
    <div>
        <span>{$timeLeft.days}d</span>
    </div>
    <div>
        <span>{$timeLeft.hours}h</span>
    </div>
    <div>
        <span>{$timeLeft.minutes}m</span>
    </div>
    <div>
        <span>{$timeLeft.seconds}s</span>
    </div>
</div>

<style lang="postcss">
    .countdown {
        @apply flex items-center justify-center gap-2;
        color: #FFF;
        text-align: right;
        leading-trim: both;
        text-edge: cap;
        font-family: Volkhov;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px; /* 142.857% */
        letter-spacing: 2.4px;
        text-transform: uppercase;
    }

    .big {
        @apply flex items-center justify-center gap-2;
        background: linear-gradient(180deg, #FFF 6.77%, #93B3CA 89.84%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        font-family: "nocturne";
        font-size: 48px;
        font-style: normal;
        font-weight: 400;
        line-height: 48px; /* 100% */
        letter-spacing: 12px;
        text-transform: uppercase;
    }  
</style>