<template>
  <TopBar class="mb-4"/>
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
</style>