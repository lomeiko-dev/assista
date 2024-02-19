<script setup lang="ts">
import { ref } from "vue";
import EyeClosedIcon from "assets/svg/eye-closed.vue";
import EyeOpenIcon from "assets/svg/eye-open.vue";

interface IProps {
  value: string
  margin?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  errorMessage?: string;
}

const props = defineProps<IProps>();

const isShow = ref(false);

const toggleShowHandle = () => {
  isShow.value = !isShow.value;
};
</script>

<template>
  <div style="position: relative;" :style="`margin: ${props.margin}`">
    <div v-if="errorMessage" class="error-message">
      {{ props.errorMessage }}
    </div>
    <div :class="`wrapper ${props.errorMessage && 'error'}`">
      <input
        :type="isShow ? 'text' : 'password'"
        :placeholder="props.placeholder"
        @input="(e: any) => onChange(e.target.value)"
        :value="props.value"
        class="input"
      />
      <EyeOpenIcon @click="toggleShowHandle" v-if="isShow" class="eye" />
      <EyeClosedIcon @click="toggleShowHandle" v-else class="eye" />
    </div>
  </div>
</template>

<style scoped>
@import "./style.scss";

.error-message{
  top: -15px;
  position: absolute;
}

.eye {
  cursor: pointer;
  width: 24px;
  height: 24px;
  margin: 8px 10px 8px 0;
}
</style>
