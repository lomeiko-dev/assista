<script setup lang="ts">
import AddIcon from "assets/svg/add.vue";
import PenIcon from 'assets/svg/pen.vue'
import FilledButton from "ui/FilledButton.vue";
import {ref} from 'vue'

interface IProps{
  defaultImage?: string,
  onClickNext: (image: string) => void
}

const props = defineProps<IProps>()

const inputRef = ref<HTMLInputElement | null>(null)
const urlImage = ref(props.defaultImage || '')

const showFilePickerHandle = () => {
    inputRef.value?.click()
}

const changeImageHandle = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const file = input.files && input.files[0];
    if(file){
      urlImage.value = URL.createObjectURL(file)
      props.onClickNext(urlImage.value); 
    } 
}

</script>

<template>
  
  <div class="wrap">
    <input @change="changeImageHandle" ref="inputRef" class="hide" type="file">
    <div class="wrap-avatar">
      <img @click="showFilePickerHandle" :src="urlImage" class="avatar" />
      <AddIcon v-if="urlImage === ''" width="43px" height="43px" class="add-icon" />
      <div v-else @click="showFilePickerHandle" class="wrap-pen">
        <PenIcon/>
      </div>
    </div>
    <FilledButton margin="40px 0 0 0">Далее</FilledButton>
  </div>
</template>

<style scoped lang="scss">
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hide{
    display: none;
    opacity: 0;
}
.wrap-avatar {
  position: relative;
  width: 229px;
  height: 229px;

  .avatar {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #d9d9d9;
    border-radius: 50%;
    cursor: pointer;

    transition: .2s;
  }

  .avatar:hover{
    background-color: #a0a0a0;
  }

  .add-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  .wrap-pen{
    position: absolute;
    width: 34px;
    height: 34px;
    background-color: #d9d9d9;
    border-radius: 50%;
    padding: 2px;
    right: 20px;
    top: 13px;
    cursor: pointer;
  }
}
</style>
