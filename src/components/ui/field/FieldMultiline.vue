<script setup lang="ts">
import { CSSProperties } from 'vue/dist/vue.js';
interface IProps {
  value?: string
  placeholder?: string;
  margin?: string
  height?: number;
  onChange: (value: string) => void;
}

const props = defineProps<IProps>();

const style: CSSProperties = {
    margin: props.margin,
    height: `${props.height}px`
}
</script>

<template>
  <div :style="style" class="wrapper">
    <textarea
      :value="props.value"
      :placeholder="props.placeholder"
      @input="(e: any) => props.onChange(e.target.value)"
      class="input textarea"
    />
  </div>
</template>

<style scoped>
@import "./style.scss";

.textarea {
  resize: none;
}
</style>
