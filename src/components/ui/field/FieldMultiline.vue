<script setup lang="ts">
import { CSSProperties } from 'vue/dist/vue.js';
interface IProps {
  placeholder?: string;
  margin?: string
  height?: string;
  onChange: (value: string) => void;
}

const props = defineProps<IProps>();

const style: CSSProperties = {
    margin: props.margin,
    height: props.height
}
</script>

<template>
  <div :style="style" class="wrapper">
    <textarea
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
