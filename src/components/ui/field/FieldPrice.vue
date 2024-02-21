<script setup lang="ts">
import InputNumber from "primevue/inputnumber";
import { ref, watch } from "vue";

interface IProps {
  currency: string;
  onChange: (value: number) => void;
  placeholder?: string;
  margin?: string;
  errorMessage?: string;
}

const props = defineProps<IProps>();

const valuePrice = ref(0);

watch(valuePrice, () => {
  props.onChange(valuePrice.value);
});
</script>

<template>
  <div class="wrap" :style="`margin: ${props.margin}`">
    <div v-if="errorMessage" class="error-message">
      {{ props.errorMessage }}
    </div>
      <InputNumber
        :placeholder="props.placeholder"
        v-model="valuePrice"
        :min="0"
        :max="999999999"
      />

      <div class="currency">
        {{ props.currency }}
      </div>
  </div>
</template>

<style scoped lang="scss">
@import "./style.scss";

.wrap{
  position: relative;
}

#basic{
  height: 40px;
}

.p-inputtext{
  padding: 10px 20px;
}

.currency {
  position: absolute;
  top: 7.5px;
  right: 7.5px;
  background-color: #fff;
  padding: 0 5px;
  font-size: 16px;
  font-family: 400;
}
</style>
