<template>
  <div class="ms-1 ms-sm-2 me-3">
    <div class="search-box">
      <input
          type="search"
          id="searchComp"
          class="search-input form-control rounded-pill"
          v-model="state.searchStr"
          :placeholder="$t(`MSG_SEARCH`)"
      />
      <i class="bi bi-search search-icon"></i>
    </div>
  </div>
</template>

<script setup>
import {reactive, watch} from "vue";
import {jcDebug, jcError} from "../../services/tools/logger";

const state = reactive({
  searchStr: null,
  ownerFilterFunc: null,
});

watch(
    () => state.searchStr,
    (newVal, oldVal) => {
      if (!state.ownerFilterFunc) {
        jcError("Please expose `filter()` function");
        return;
      }
      state.ownerFilterFunc(newVal);
    }
);

function setFilterFunc(passedFilterFunc) {
  state.ownerFilterFunc = passedFilterFunc;
}

function reset() {
  state.searchStr = null;
}

defineExpose({setFilterFunc, reset});
</script>

<style scoped>

.search-box {
  position: relative;
  width: 250px;
}

.search-input {
  padding-left: 40px;  /* space for the search icon */
  width: 100%;
  box-sizing: border-box;
}

.search-icon {
  position: absolute;
  left: 30px; /* adjust as necessary */
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
</style>