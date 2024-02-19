<script setup lang="ts">
import FieldDate from "ui/field/FieldDate.vue";
import FilledButton from "ui/FilledButton.vue";
import { ref } from "vue";

interface IProps {
  defaultDate?: string
  onClickNext: (date: string) => void;
}

const props = defineProps<IProps>();

const valueDate = ref(props.defaultDate || '');
</script>

<template>
  <FieldDate
    placeholder="Дата рождения"
    :value="valueDate"
    :on-change="(value) => (valueDate = value)"
  />
  <FilledButton @click="() => props.onClickNext(valueDate)" margin="40px 0 0 0"
    >Далее</FilledButton
  >
</template>

<style scoped></style>
