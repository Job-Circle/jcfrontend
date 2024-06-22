<template>
  <div :class="divClass()" v-if="props.hidden == true ? false : true">
    <slot></slot>
  </div>
</template>

<script setup>
const divCommClass =
  " align-items-start bg-light border border-1 jc-rounded-1rem bg-white p-3 mt-1 me-xxl-3 mb-xl-1 flex-grow-1 flex-basis-0 width-50";
function divClass() {
  switch (props.layout) {
    case "compact":
      return "d-flex flex-column w-100 " + divCommClass;
    case "hbox":
    // 'd-flex flex-wrap h-100'
    case "vbox":
    // 'd-flex flex-column w-100'
    default:
      return "card " + divCommClass;
  }
}
const props = defineProps({
  layout: String,
  hidden: Boolean,
});
</script>

<style>
</style>