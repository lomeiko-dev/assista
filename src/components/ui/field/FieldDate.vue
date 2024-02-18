<script setup lang="ts">
import Calendar from "primevue/calendar";
import AddIcon from "assets/svg/add.vue";
import RemoveIcon from "assets/svg/remove.vue";
import { ref, watch } from "vue";

interface IProps {
  onChange: (value: string) => void;
  placeholder?: string;
  margin?: string;
  errorMessage?: string;
}

const props = defineProps<IProps>();

const isShowDate = ref(false);
const valueDate = ref<Date>(new Date());

const formatDate = (date: Date) => {
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};

watch(valueDate, () => {
  props.onChange(formatDate(valueDate.value));
  isShowDate.value = false;
});

const toggleShowDateHandle = () => {
  isShowDate.value = !isShowDate.value;
};
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
        :value="formatDate(valueDate)"
        class="input"
      />

      <AddIcon @click="toggleShowDateHandle" v-if="!isShowDate" class="icon" />
      <RemoveIcon @click="toggleShowDateHandle" v-else class="icon" />
    </div>
  </div>
  <Calendar
    class="calendar"
    v-if="isShowDate"
    v-model="valueDate"
    inline
    showWeek
  />
</template>

<style scoped>
@import "./style.scss";

.calendar {
  margin-top: 5px;
  width: 100%;
}

.icon {
  cursor: pointer;
  width: 24px;
  height: 24px;
  margin: 8px 10px 8px 0;
}
</style>
