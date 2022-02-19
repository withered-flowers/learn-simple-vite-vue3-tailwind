<script setup>
defineProps(["selectedExtData"]);
</script>

<template>
  <div>
    <input
      type="text"
      className="form-input"
      placeholder="Choose from below"
      v-bind:value="selectedExtData"
      disabled
    />
  </div>
</template>
