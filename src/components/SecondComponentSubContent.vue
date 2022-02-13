<script setup>
// get a props from parent component named 'textInput'
// via defineProps
defineProps(["textInput"]);
</script>

<template>
  <div>
    <pre v-if="textInput === ''">I have nothing to show</pre>
    <pre v-else>I write: {{ textInput }}</pre>
  </div>
</template>

<style></style>
