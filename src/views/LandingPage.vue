<template>
  <div class="d-flex">
    <div class="flex-grow-1">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
@media (max-width: 768px) {
  .content {
    margin-left: 0;
  }
}
</style>
