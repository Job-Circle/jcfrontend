<template>
  <TopBar :txtKey="'jc'" class="mb-4" />
  <div class="button-container">
    <router-link to="/pj" class="link">
      <Transition name="fade">
        {{ $t('post_job') }}
      </Transition>
    </router-link>
    <router-link to="/vjs" class="link">
      <Transition name="fade">
        {{ $t('view_all_jobs') }}
      </Transition>
    </router-link>
    <router-link to="/vcjs" class="link">
      <Transition name="fade">
        {{ $t('view_category_jobs') }}
      </Transition>
    </router-link>
    <router-link to="/about" class="link">
      <Transition name="fade">
        {{ $t('about') }}
      </Transition>
    </router-link>
    <div class="disclaimer-bar">
      <p>{{ $t("disclaimer") }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopBar from './TopBar.vue';
</script>

<style scoped lang="scss">
.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Center buttons horizontally */
  gap: 10px;
  /* Space between buttons */
}

@import '../assets/main.scss';

.link {
  @extend .jc-button;
  font-weight: 700;
  width: 200px;
}

.disclaimer-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--jc-theme-blue-lightest);
  color: var(--jc-theme-yellow);
  text-align: center;
  padding: 10px 0;
  border-top-left-radius: 15px;
  /* Top left corner */
  border-top-right-radius: 15px;
  /* Top right corner */
}
</style>