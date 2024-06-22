<template>
    <header class="header">
        <div class="logo-container mx-2">
            <img src="@/assets/logo.png" alt="App Logo" class="app-logo" />
        </div>
        <div class="bar">
            <div class="app-name">Job Circle</div>
            <div class="language-buttons">
                <button class="lang-button" @click="setLocale('en')">En</button>
                <button class="lang-button" @click="setLocale('ar')">ع</button>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { locale } = useI18n()
const setLocale = (lang: string) => {
    locale.value = lang
}
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
}

.app-logo {
    width: 36px;
    height: 36px;
}

.bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    background-color: var(--jc-theme-creme);
    padding: 10px;
    border-top-right-radius: 15px;
    /* Top right corner */
    border-bottom-right-radius: 15px;
    /* Bottom right corner */
}

.app-name {
    color: var(--jc-theme-blue);
    font-size: 18px;
    font-weight: bold;
}

.language-buttons {
    display: flex;
    gap: 10px;
}

.lang-button {
    background-color: white;
    color: green;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}

.lang-button:hover {
    background-color: lightgray;
}
</style>