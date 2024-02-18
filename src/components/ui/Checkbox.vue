<script setup lang="ts">
interface IProps {
  label?: string;
  onChange: (value: boolean) => void;
  margin?: string;
}

const props = defineProps<IProps>();
</script>

<template>
  <div :style="`margin: ${props.margin}`" class="wrapper">
    <label class="custom-checkbox">
    <input
      @input="(e: any) => props.onChange(e.target.checked)"
      type="checkbox"
      id="myCheckbox"
    />
    <span class="checkmark"></span>
    <div class="title">{{ props.label }}</div>
  </label>
  </div>
</template>

<style scoped lang="scss">

.wrapper{
  height: 19px;
}
.custom-checkbox {
  position: relative;
  cursor: pointer;
  font-size: 16px;
}

.custom-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 19px;
  width: 19px;
  border: 1px solid #ededed;
  border-radius: 3px;
}

.custom-checkbox input:checked + .checkmark:after {
  content: "";
  position: absolute;
  display: block;
  left: 5px;
  top: -2px;
  width: 8px;
  height: 14px;
  border: solid #a3a3a3;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.custom-checkbox input:checked + .checkmark {
  background-color: transparent;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.title {
  position: absolute;
  left: 30px;
  font-size: 16px;
  font-weight: 400;
}

.custom-checkbox input:checked + .checkmark:after {
  display: block;
}
</style>
