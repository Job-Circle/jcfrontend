<template>
    <Card class="m-2">
        <p id="catsTitle" :dir="isRtl ? 'rtl' : 'ltr'" class="w-100">{{ $t("post_job_title") }}</p>
        <div :class="{ 'checkbox-container': true, 'rtl': locale === 'ar' }">
            <div v-for="(cat, index) in jobCats" :key="index" class="me-2 mt-1 cat-cb">
                <label>
                    <input type="checkbox" :value="cat" v-model="selectedCats" />
                    {{ locale === 'en' ? cat.nameEn : cat.nameAr }}
                </label>
            </div>
        </div>
    </Card>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { useI18n } from 'vue-i18n';
import type { IJobCat } from "./types";
import Card from "../common/Card.vue";

const { locale } = useI18n();
const isRtl = computed(() => locale.value === 'ar');
const selectedCats = ref([]);
const jobCats: IJobCat[] = [
    { id: 8, nameAr: "حسابات", nameEn: "Accounting" },
    { id: 3, nameAr: "مخازن", nameEn: "Warehousing" },
    { id: 4, nameAr: "أمن", nameEn: "Security" },
    { id: 6, nameAr: "سكرتارية", nameEn: "Secretarial" },
    { id: 14, nameAr: "سائق", nameEn: "Driver" },
    { id: 10, nameAr: "مبيعات", nameEn: "Sales" },
    { id: 11, nameAr: "كول سنتر", nameEn: "Call Center" },
    { id: 18, nameAr: "IT", nameEn: "IT" },
    { id: 12, nameAr: "مطعم", nameEn: "Restaurant" },
    { id: 13, nameAr: "كاشير", nameEn: "Cashier" },
    { id: 15, nameAr: "HR", nameEn: "HR" },
    { id: 9, nameAr: "عام شباب", nameEn: "General Youth" },
    { id: 19, nameAr: "فني", nameEn: "Technician" },
    { id: 7, nameAr: "تدريس", nameEn: "Teaching" },
    { id: 1, nameAr: "هندسة", nameEn: "Engineering" },
    { id: 2, nameAr: "صيدلة", nameEn: "Pharmacy" },
    { id: 5, nameAr: "نظافة", nameEn: "Cleaning" },
    { id: 17, nameAr: "برمجة", nameEn: "Programming" },
    { id: 16, nameAr: "جرافيك", nameEn: "Graphic Design" },
];
</script>

<style lang="scss" scoped>
.checkbox-container {
    display: flex;
    flex-wrap: wrap;
    /* Wraps the items if they don't fit in one line */
}

.cat-cb {
    margin-right: 10px;
    /* Spacing between checkboxes */
}

.checkbox-container.rtl {
    direction: rtl;
}

/* Style for odd items */
.cat-cb:nth-child(odd) label {
    color: #ffffff;
    /* Text color */
    background-color: #44838C;
    /* Background color */
    padding: 5px;
    border-radius: 5px;
}

/* Style for even items */
.cat-cb:nth-child(even) label {
    color: #ffffff;
    /* Text color */
    background-color: #66a3ad;
    /* Background color */
    padding: 5px;
    border-radius: 5px;
}

input[type="checkbox"]:checked {
    accent-color: var(--jc-theme-yellow);
}

#catsTitle {
    color: var(--jc-theme-blue);
    margin-bottom: .5rem;
}
</style>