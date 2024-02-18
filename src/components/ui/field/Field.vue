<script setup lang="ts">
import VectorIcon from "../../../assets/svg/vector.vue";
import { ref } from "vue";

interface IProps {
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  margin?: string;
  isActiveDropdwon: boolean;
  classDropdown?: string;
  errorMessage?: string;
}

const props = defineProps<IProps>();

const isOpenDropdown = ref(false);
</script>

<template>
  <div :style="`margin: ${props.margin}`">
    <div v-if="errorMessage" class="error-message">
      {{ props.errorMessage }}
    </div>
    <div :class="`wrapper ${props.errorMessage && 'error'}`">
      <input
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
      :class="`dropdown ${props.classDropdown} ${
        isOpenDropdown && 'open-dropdown'
      }`"
      v-if="props.isActiveDropdwon"
    >
      <div class="dropdown-inner">
        <slot name="dropdownContent" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./style.scss";

.dropdown {
  position: relative;
  z-index: -1;
  opacity: 0;
  margin-top: 5px;
  width: calc(100% - 40px);
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
