<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

// import the component here
import FirstComponent from "./components/FirstComponent.vue";
// import the second component here
import SecondComponent from "./components/SecondComponent.vue";
</script>

<template>
  <div class="custom-container bg-slate-200">
    <p class="h1">Simple Vue Apps with Tailwind</p>
    <!-- Create new section to hold FirstComponent -->
    <FirstComponent />
    <!-- Create new section to hold FirstComponent -->
    <SecondComponent></SecondComponent>
  </div>
</template>

<style></style>
