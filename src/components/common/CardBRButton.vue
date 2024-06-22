<template>
  <div>
    <button :class="cardBRBtnCls" style="float: right" @click="emit('click')">
      <i
        v-if="props.icon"
        :class="'bi bi-' + props.icon"
        class="align-self-center"
        :style="props.is_icon_only ? '' : 'padding-right: 0.5rem'"
      ></i>
      <div class="align-self-center">
        <slot /><!-- Here goes the text and custom elements -->
      </div>
    </button>
  </div>
</template>

<script setup>
const { cardBRBtnCls } = require("@/assets/scss/smStyles");

const props = defineProps({
  icon: String,
  is_icon_only: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);
</script>

<style scoped>
</style>