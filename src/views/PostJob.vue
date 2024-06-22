<template>
  <TopBar :txtKey="'post_job'" class="mb-4" />
  <SelectCategory />
  <Card class="m-2">
    <input/>
  </Card>
  <div class="button-div">
    <button class="link">{{ $t("post") }}</button>
  </div>
</template>

<script setup lang="ts">
import SelectCategory from "@/components/PostJob/SelectCategory.vue"
import TopBar from "./TopBar.vue";
import Card from "@/components/common/Card.vue";
</script>

<style scoped lang="scss">
@import '../assets/main.scss';

.link {
  @extend .jc-button;
  font-weight: 700;
  width: 200px;
  font-size: 24px;
}

.button-div {
  display: flex;
  justify-content: center;
  /* Centers the button horizontally */
  align-items: center;
}
</style>