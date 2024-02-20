<script setup lang="ts">
import VectorIcon from "assets/svg/vector.vue";
import { CSSProperties } from 'vue';
import { ref } from "vue";

interface IProps {
  width?: string
  type?: 'text' | 'number' | 'email',
  pattern?: string
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  margin?: string;
  isActiveDropdwon?: boolean;
  errorMessage?: string;
}

const props = defineProps<IProps>();

const cssStyle: CSSProperties = {
  margin: props.margin,
  width: props.width ? '100%' : undefined,
  maxWidth: props.width
}

const isOpenDropdown = ref(false);
</script>

<template>
  <div class="wrap" :style="cssStyle">
    <div v-if="errorMessage" class="error-message">
      {{ props.errorMessage }}
    </div>
    <div :class="`wrapper ${props.errorMessage && 'error'}`">
      <input
        :pattern="props.pattern"
        :type="props.type"
        @input="(e: any) => props.onChange(e.target.value)"
        :placeholder="props.placeholder"
        :value="props.value"
        class="input"
      />
      <VectorIcon
        v-if="props.isActiveDropdwon"
        @click="() => (isOpenDropdown = !isOpenDropdown)"
        :class="`vector ${isOpenDropdown && 'open-vector'}`"
      />
    </div>

    <div
      @click="() => isOpenDropdown = false"
      :class="`dropdown ${
        isOpenDropdown && 'open-dropdown'
      }`"
      v-if="props.isActiveDropdwon"
    >
      <div class="dropdown-inner">
        <slot/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./style.scss";

.wrap{
  position: relative;
}

.error-message{
  top: -15px;
  position: absolute;
}

.dropdown {
  position: absolute;
  z-index: -1;
  opacity: 0;
  margin-top: 5px;
  width: 100%;
  background-color: #ffffff;

  border: 1px solid #a3a3a3;
  border-radius: 5px;
  padding: 15px 20px;
  transition: 0.2s;

  .dropdown-inner {
    overflow-x: auto;
    max-height: 224px;
  }
}

.dropdown-inner::-webkit-scrollbar-track {
  background-color: #a3a3a333;
}
.dropdown-inner::-webkit-scrollbar {
  width: 3px;
}
.dropdown-inner::-webkit-scrollbar-thumb {
  background-color: #a3a3a3;
  border-radius: 3px;
}

.open-dropdown {
  opacity: 1;
  z-index: 1;
}

.vector {
  cursor: pointer;
  width: 24px;
  height: 24px;
  margin: 8px 10px 8px 0;
  transform: rotate(0deg);

  transition: 0.2s;
}

.open-vector {
  transform: rotate(180deg);
}
</style>
