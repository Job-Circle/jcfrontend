<template>
  <button 
    class="push-button" 
    :class="{ pushed: isPushed }">
    {{ buttonText }}
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  isPushed: Boolean,
  buttonText: String
});
</script>

<style scoped>
.push-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
  box-shadow: 4px 4px #999; /* Shadow offset to the right (4px) and bottom (4px) */
  background-color: lightgray;
  transition: box-shadow 0.2s, transform 0.2s;
  outline: none;
}

.push-button:active, .push-button.pushed {
  box-shadow: 2px 2px #666; /* Smaller shadow offset for pushed state */
  transform: translateY(2px) translateX(2px); /* Button moves right and down */
  color: white;
  background-color: #e05cb9;
}
</style>





