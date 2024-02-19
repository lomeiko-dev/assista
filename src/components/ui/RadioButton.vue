<script setup lang="ts">
import {ref} from 'vue'

interface IProps {
  label?: string;
  checked?: boolean,
  margin?: string;
  onTrigger: () => void;
}

const props = defineProps<IProps>();

const valueRadio = ref<boolean>(props.checked)

</script>

<template>
  <label :style="`margin: ${props.margin}`" class="custom-radio">
    <input
      @input="props.onTrigger"
      type="radio"
      name="custom-radio"
      :checked="valueRadio"
    />
    <span class="radio-btn"></span>
    <div>{{ props.label }}</div>
  </label>
</template>

<style scoped>
.custom-radio {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
}

.custom-radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.radio-btn {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: 1px solid #a3a3a3;
  border-radius: 50%;
}

.custom-radio input:checked ~ .radio-btn {
  background-color: #232323;
}

.custom-radio input:checked ~ .radio-btn:after {
  content: "";
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
}
</style>
