<script setup lang="ts">
import { ref } from "vue";
import EyeClosedIcon from "assets/svg/eye-closed.vue";
import EyeOpenIcon from "assets/svg/eye-open.vue";

interface IProps {
  margin?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  errorMessage?: string;
}

const props = defineProps<IProps>();

const isShow = ref(false);
const valueInput = ref("");

const setValueInputHandle = (value: string) => {
  valueInput.value += value[value.length - 1];
  props.onChange(value[value.length - 1]);
};

const toggleShowHandle = () => {
  isShow.value = !isShow.value;
};
</script>

<template>
  <div :style="`margin: ${props.margin}`">
    <div v-if="errorMessage" class="error-message">
      {{ props.errorMessage }}
    </div>
    <div :class="`wrapper ${props.errorMessage && 'error'}`">
      <input
        :placeholder="props.placeholder"
        @input="(e: any) => setValueInputHandle(e.target.value)"
        :value="isShow ? valueInput : '*'.repeat(valueInput.length)"
        class="input"
      />
      <EyeOpenIcon @click="toggleShowHandle" v-if="isShow" class="eye" />
      <EyeClosedIcon @click="toggleShowHandle" v-else class="eye" />
    </div>
  </div>
</template>

<style scoped>
@import "./style.scss";

.eye {
  cursor: pointer;
  width: 24px;
  height: 24px;
  margin: 8px 10px 8px 0;
}
</style>
