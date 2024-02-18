<script setup lang="ts">
import { CSSProperties } from 'vue';

interface IProps {
    colorScheme: "light" | "dark"
    width?: string,
    height?: string
    text?: string,
    fontSize?: number,
    fontWeight?: 300 | 400 | 500 | 600 | 700 | 800 | 900
    lineHeight?: number,
    margin?: string
}

const props = defineProps<IProps>()

const style: CSSProperties = {
    fontSize: `${props.fontSize}px`,
    fontWeight: props.fontWeight,
    lineHeight: `${props.lineHeight}px`,
    margin: props.margin,
    width: props.width,
    height: props.height
}

</script>

<template>
    <button :style="style" :class="`button ${props.colorScheme}`">
         <slot/>
    </button>
</template>

<style scoped>
    .button{    
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    .light{
        color: #FFFFFF;
    }

    .dark{
        color: #303030;
    }
</style>
