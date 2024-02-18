<script setup lang="ts">
import { ref, watch, computed } from "vue";

interface IProps {
  defaultValue?: number;
  minValue?: number;
  maxValue?: number;
  onChange: (value: number) => void;
}

const props = defineProps<IProps>();

const valueRange = ref(Number(props.defaultValue));

watch(valueRange, () => {
  props.onChange(valueRange.value);
});

const widthLine = computed(() => 
    valueRange.value / Number(props.maxValue) * 100
)
</script>

<template>
  <div class="range-slider">
    <input
      type="range"
      :min="props.minValue"
      :max="props.maxValue"
      v-model="valueRange"
      class="range-input"
    />
    <div :style="`width: ${widthLine}%`" class="line"></div>
  </div>
</template>

<style>
.range-slider{
    position: relative;
}
.range-input {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background: #A3A3A333;
  outline: none;
  margin: 0;
  padding: 0;
}

.range-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #A3A3A3;
  cursor: pointer;
}

.range-input::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
}

.range-output {
  display: block;
  margin-top: 10px;
  text-align: center;
  font-size: 20px;
}

.line{
    position: absolute;
    top: 14px;
    left: 0;
    height: 5px;
    border-radius: 3px;
    background: #A3A3A3;
}
</style>
