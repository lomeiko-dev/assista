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
  value: string;
}

const props = defineProps<IProps>();

const date = ref<Date>(new Date());

watch(date, () => {
  props.onChange(formatDate(date.value));
  toggleShowDateHandle()
});

const isShowDate = ref(false);

const formatDate = (date: Date) => {
  return `${date.getDate() < 10 ? '0' : ''}${date.getDate()}.${date.getMonth() < 10 ? '0' : ''}${date.getMonth() + 1}.${date.getFullYear()}`;
};

const toggleShowDateHandle = () => {
  isShowDate.value = !isShowDate.value;
};
</script>

<template>
  <div class="wrap" :style="`margin: ${props.margin}`">
    <div v-if="errorMessage" class="error-message">
      {{ props.errorMessage }}
    </div>
    <div :class="`wrapper ${props.errorMessage && 'error'}`">
      <input
        @click="isShowDate = true"
        @input="(e: any) => props.onChange(e.target.value)"
        :placeholder="props.placeholder"
        :value="props.value"
        class="input"
      />

      <AddIcon @click="toggleShowDateHandle" v-if="!isShowDate" class="icon" />
      <RemoveIcon @click="toggleShowDateHandle" v-else class="icon" />
    </div>
    <Calendar
      class="calendar"
      v-if="isShowDate"
      v-model="date"
      inline
      showWeek
    />
  </div>
</template>

<style scoped>
@import "./style.scss";

.wrap {
  position: relative;
}

.error-message{
  top: -15px;
  position: absolute;
}

.calendar {
  position: absolute;
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
