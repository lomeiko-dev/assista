<script setup lang="ts">
import Field from "ui/field/Field.vue";
import FilledButton from "ui/FilledButton.vue";
import Text from "ui/Text.vue";
import Checkbox from "ui/Checkbox.vue";
import PopupItem from "ui/PopupItem.vue";
import { ref } from "vue";

const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];

export interface IFormSkillStack {
  languages?: ILanguage[];
  skills?: string;
}

interface IProps {
  defaultSkills?: string;
  defaultLanguages?: ILanguage[];
  onClickNext: (form: IFormSkillStack) => void;
}

const props = defineProps<IProps>();

export interface ILanguage {
  language: string;
  level: string;
}

const skills = [
  "коппирайтинг",
  "работа из дома",
  "готов к коммантировкам",
  "полная занятость",
  "быстрое решение проблем",
  "владение языками",
];

const languages: ILanguage[] = [
  { language: "Русский", level: "" },
  { language: "Английский", level: "" },
  { language: "Французский", level: "" },
  { language: "Испанский", level: "" },
  { language: "Китайский", level: "" },
];

const valueSkills = ref(props.defaultSkills || "");
const valueLanguages = ref<ILanguage[]>(props.defaultLanguages || []);

const toggleLanguage = (isChecked: boolean, language: ILanguage) => {
  if (!isChecked) {
    valueLanguages.value = valueLanguages.value.filter(
      (item) => item.language !== language.language
    );
  } else {
    valueLanguages.value.push(language);
  }
};

const changeLevelLanguageHandle = (lanugage: ILanguage, level: string) => {
  let item = valueLanguages.value.find(
    (item) => item.language === lanugage.language
  );

  if (item) item.level = level;
};

const clickSkillHandle = (skill: string) => {
  valueSkills.value += `${valueSkills.value.length !== 0 ? ", " : ""}${skill}`;
};

const clickNextHandle = () => {
  const form: IFormSkillStack = {
    languages: valueLanguages.value,
    skills: valueSkills.value,
  };

  props.onClickNext(form);
};
</script>

<template>
  <!-- https://primevue.org/multiselect/#chips -->
  <Field
    :value="valueSkills"
    is-active-dropdwon
    :on-change="(value) => (valueSkills = value)"
    placeholder="Ваши навыки"
  >
    <div class="dropdown">
      <PopupItem
        is-stop-propagation
        styled="bordered" 
        :on-click="() => clickSkillHandle(skill)"
        v-for="skill in skills"
        :key="skill"
      >
        {{ skill }}
      </PopupItem>
    </div>
  </Field>

  <Field
    margin="15px 0 0 0"
    :value="`${valueLanguages.map((item) => item.language)}`"
    is-active-dropdwon
    :on-change="() => null"
    placeholder="Добавьте язык"
  >
    <PopupItem
      width="215px"
      is-stop-propagation
      styled="outline"
      v-for="language in languages"
      :key="language.language"
    >
    <!-- https://primevue.org/checkbox/#group -->
      <Checkbox
        :label="language.language"
        :on-change="(isChecked) => toggleLanguage(isChecked, language)"
      />
    </PopupItem>
  </Field>

  <div v-if="valueLanguages.length !== 0" class="language-list">
    <div
      class="item"
      v-for="language in valueLanguages"
      :key="language.language"
    >
      <Text
        :font-size="16"
        :font-weight="400"
        color-scheme="dark"
        :value="language.language"
      />
      <Field
        width="150px"
        :value="language.level"
        :on-change="() => null"
        is-active-dropdwon
        placeholder="уровень"
      >
        <PopupItem
          styled="outline"
          v-for="level in levels"
          :key="level"
          :on-click="() => changeLevelLanguageHandle(language, level)"
        >{{ level }}</PopupItem>
      </Field>
    </div>
  </div>

  <FilledButton @click="clickNextHandle" margin="30px 0 0 0"
    >Далее</FilledButton
  >
</template>

<style scoped lang="scss">

.dropdown {
  display: flex;
  flex-wrap: wrap;
}

.language-list {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
