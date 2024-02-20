<script setup lang="ts">
interface IProps {
  width?: string;
  isStopPropagation?: boolean
  onClick?: () => void;
  styled: "bordered" | "outline";
}

const props = defineProps<IProps>();

const clickHandle = (e: any) => {
    if(props.isStopPropagation)
        e.stopPropagation()
    props.onClick && props.onClick()
}

</script>

<template>
  <div @click="(e: any) => clickHandle(e)" :style="`width: ${width}`" :class="`item ${props.styled}`">
    <slot/>
  </div>
</template>

<style scoped>
.item {
  font-size: 16px;
  font-weight: 400;
  color: #232323;
  cursor: pointer;
}

.outline {
  border-bottom: 1px solid #ededed;
  padding: 8px 0;
  transition: .2s;
}

.line:hover {
  border-bottom: 1px solid #999999;
  padding: 8px 5px;
}

.bordered {
  border: 1px solid #232323;
  border-radius: 44px;
  padding: 6px 12px;
  margin: 8px;
  transition: 0.2s;
}

.border:hover {
  padding: 9px 15px;
  margin: 5px;
}
</style>
