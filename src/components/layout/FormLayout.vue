<script setup lang="ts">
import BackIcon from "assets/svg/back.vue";
import Text from "ui/Text.vue";
import Button from "ui/Button.vue";
interface IProps {
  title?: string;
  subTitle?: string;
  onSkip?: () => void;
  onBack?: () => void;
  onClickNext?: () => void;
}

const props = defineProps<IProps>();
</script>

<template>
  <div v-if="props.title || props.subTitle" class="head">
    <div class="title">
      <BackIcon class="back" v-if="props.onBack" @click="props.onBack" />
      <Text
        v-if="props.title"
        :font-size="28"
        :font-weight="700"
        color-scheme="dark"
        :value="props.title"
      />
    </div>
    <Text
      class="sub-title"
      v-if="props.subTitle"
      :font-size="18"
      :font-weight="400"
      color-scheme="dark"
      :value="props.subTitle"
    />
  </div>
  <slot />

  <div class="wrap-skip">
    <Button
    :font-size="16"
    :font-weight="400"
    color-scheme="dark"
    v-if="props.onSkip"
    @click="props.onSkip"
    >Пропусить</Button
  >
  </div>
</template>

<style scoped lang="scss">
.head {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  .back {
    position: absolute;
    top: 10px;
    left: 0;
    border-radius: 50%;
    cursor: pointer;

    transition: .2s;
  }

  .back:hover{
    border: 1px solid black;
    padding: 2px;
  }

  .title {
    position: relative;
    text-align: center;
    width: 100%;
  }
  .sub-title{
    margin-top: 10px;
    text-align: center;
    width: 100%;
    max-width: 237px;
    
  }
}

.wrap-skip{
    margin-top: 20px;
    display: flex;
    justify-content: center;
}
</style>
