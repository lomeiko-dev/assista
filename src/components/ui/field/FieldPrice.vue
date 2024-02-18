<script setup lang="ts">
interface IProps {
  value?: string;
  currency: string
  onChange: (value: string) => void;
  placeholder?: string;
  margin?: string;
  errorMessage?: string;
}

const props = defineProps<IProps>();
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
      <div class="currency">
        {{ props.currency }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./style.scss";

.currency{
  font-size: 16px;
  font-family: 400;
  margin: 8px 10px 8px 0;
}
</style>
