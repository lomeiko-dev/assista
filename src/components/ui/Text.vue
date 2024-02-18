<script setup lang="ts">
import { CSSProperties } from 'vue';

interface IProps {
    colorScheme: "light" | "dark"
    value: string,
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
}

</script>

<template>
    <div :style="style" :class="props.colorScheme">
        {{ props.value }}
    </div>
</template>

<style scoped>
    .light{
        color: #303030;
    }

    .dark{
        color: #FFFFFF;
    }
</style>
