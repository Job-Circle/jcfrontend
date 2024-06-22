<template>
  <div
    class="d-flex mx-3 me-3 mt-auto justify-content-end fw-bold"
    :style="textColor"
    id="jc_user_message"
  >
    <span v-html="state.msgText"></span>
  </div>
</template>

<script setup>
import { computed, watch, onMounted, reactive } from "vue";
import i18n from "../../i18n";
const { USER_MSG_CONSTS } = require("@/shared/constants_core");
import { jcDebug } from "../../services/tools/logger";

const props = defineProps({
  /**
   * Optional: { text, key, type }
   * type is one of `USER_MSG_CONSTS.USRMSG_xyz`
   */
  msgInfo: {
    type: Object,
  },
});

const state = reactive({
  msgText: "",
  msgKey: "",
  msgType: USER_MSG_CONSTS.USRMSG_SUCCESS,
});

onMounted(() => {
  if (props.msgInfo) {
    // Set before mounting the component, it sets state
    setMessage(props.msgInfo.text, props.msgInfo.key, props.msgInfo.type);
  }
});

watch(
  () => props.msgInfo,
  (newVal, oldVal) => {
    if (newVal) {
      setMessage(newVal.text, newVal.key, newVal.type);
    } else {
      setMessage(); // Reset
    }
  }
);

/**
 * Set/Reset User Message
 * Update `state` with values
 * @param {string} msgText
 * @param {string} messageType. optional
 */
function setMessage(msgText, msgKey, passedMsgType) {
  state.msgKey = msgKey;
  
  // Set `state.msgText`
  if (msgKey) state.msgText = i18n.global.t(msgKey);
  else if (msgText) state.msgText = i18n.global.t(msgText);
  else state.msgText = "";

  // Set `state.msgType`
  if (passedMsgType) {
    state.msgType = passedMsgType;
  } else {
    state.msgType = USER_MSG_CONSTS.USRMSG_SUCCESS;
  }
}

function setMessageKey(msgKey, msgType) {
  setMessage(
    "", // Text
    msgKey == "" ? "" : i18n.global.t(msgKey),
    msgType
  );
}

const textColor = computed(() => {
  switch (state.msgType) {
    case USER_MSG_CONSTS.USRMSG_ERROR:
      return "color: #e15259";
    case USER_MSG_CONSTS.USRMSG_SUCCESS:
      return "color: #2db754";
    default:
      return "";
  }
});

function refresh() {
  // Reload `msgKey`, e.g. with language change
  setMessage(state.msgText, state.msgKey, state.msgType);
}

defineExpose({
  setMessage,
  setMessageKey,
  refresh,
});
</script>