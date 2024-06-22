<!-- ConfirmationPopup.vue -->
<template>
  <div
    v-show="show"
    class="popup"
    :style="{ top: top + 'px', left: left + 'px' }"
  >
    {{ title }}
    <hr>
    <div class="button-container">
      <button @click="confirm">{{ yesText }}</button>
      <button @click="cancel">{{ noText }}</button>
    </div>
  </div>
</template>
  
<script setup>
const props = defineProps({
  show: Boolean,
  title: String,
  yesText: String,
  noText: String,
  top: Number,
  left: Number,
});

const emit = defineEmits(["confirm", "cancel"]);

// Handle confirm and cancel
const confirm = () => {
  emit("confirm");
  props.show = false;
};

const cancel = () => {
  emit("cancel");
  props.show = false;
};
</script>
  
<style scoped>
.popup {
  position: absolute;
  background-color: #E15259;
  color:white;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  max-width: 400px; 
}

.popup h2 {
  margin: 0;
  margin-bottom: 10px;
}

.button-container {
  display: flex;
  justify-content: center; 
  gap: 10px; 
}

.button-container button {
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.button-container button:hover {
  background-color: #f2f2f2;
}
</style>