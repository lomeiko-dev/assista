<script setup lang="ts">
interface IProps{
  width?: string,
  height?: string
}

const props = defineProps<IProps>()

</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="props.width ?? '23'"
    :height="props.height ?? '23px'"
    viewBox="0 0 23 23"
    fill="none"
  >
    <path
      d="M12.4863 12.5527V16.376H11.1855V12.5527H7.3623V11.252H11.1855V7.42871H12.4863V11.252H16.3096V12.5527H12.4863Z"
      fill="#303030"
    />
    <circle cx="11.5" cy="11.5" r="11" stroke="#303030" />
  </svg>
</template>
