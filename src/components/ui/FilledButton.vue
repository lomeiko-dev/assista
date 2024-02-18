<script setup lang="ts">
    interface IProps {
        margin?: string,
    }

    const props = defineProps<IProps>()
</script>

<template>
    <button 
        class="button"
        :style="`margin: ${props.margin}`">
        <slot />
    </button>
</template>

<style scoped>
    .button{
        background-color: #B7AA8C;
        width: 100%;
        height: 54px;
        border-radius: 25px;

        color: #FFFFFF;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;

        outline: none;
        cursor: pointer;
        border: none;

        transition: .2s;
    }
    .button:hover{
        background-color: #988D73;
    }
</style>