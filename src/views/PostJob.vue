<template>
  <div>
    <TopBar :txtKey="'post_job'" class="mb-4" />
    <SelectCategory />
    <Card class="m-2">
      <div class="editor-container">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
      </div>
    </Card>
    <div class="button-div">
      <button class="link gKufiFont">{{ $t("post") }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import SelectCategory from "@/components/PostJob/SelectCategory.vue";
import TopBar from "./TopBar.vue";
import Card from "@/components/common/Card.vue";
import { useI18n } from 'vue-i18n';
import { ClassicEditor, Bold, Essentials, Italic, Paragraph, Undo } from 'ckeditor5';
import CKEditor from '@ckeditor/ckeditor5-vue';
import coreTranslations from 'ckeditor5/translations/ar.js';
import premiumFeaturesTranslations from 'ckeditor5-premium-features/translations/ar.js';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

const { locale, t } = useI18n();
const editor = ref(ClassicEditor);
const editorData = ref('');
const editorConfig = ref({
  placeholder: '\u00A0\u00A0\u00A0',
  plugins: [Bold, Essentials, Italic, Paragraph, Undo],
  toolbar: ['undo', 'redo', '|', 'bold', 'italic'],
  height: 300,
  language: "ar",
  translations: [
    coreTranslations,
    premiumFeaturesTranslations
  ]
});

watch(() => locale.value, (newLocale) => {
  // editorConfig.value.language = newLocale;
  editorConfig.value.language = newLocale;
  // if (editor.value) {
  //   const editorInstance = editor.value;
  //   editorInstance.locale.uiLanguage = newLocale;
  //   editorInstance.setData(editorInstance.getData());
  // }
});
</script>

<script lang="ts">
export default {
  name: 'app',
  components: {
    ckeditor: CKEditor.component
  }
}
</script>

<style scoped lang="scss">
@import '../assets/main.scss';

.link {
  @extend .jc-button;
  font-weight: 700;
  width: 200px;
  font-size: 24px;
  color: var(--jc-theme-yellow);
  margin-bottom: 1rem;
}

.button-div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.editor-container {
  width: 100%;
  /* Ensures the container takes the full width */
}

.ck-editor__editable {
  height: calc(1.5rem * 8);
  /* 8 lines at 1.5em line height */
  max-height: calc(1.5rem * 8);
  /* Prevents expanding beyond 8 lines */
  overflow-y: auto;
  /* Enables vertical scrolling */
  width: 100%;
  /* Ensures the editor takes full width */
}
</style>
