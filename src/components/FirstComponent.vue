<script setup>
import { ref } from "vue";

// ref is for reactive value
const count = ref(0);

// method for set count state
function addCount() {
  count.value++;
}

// method for reset count state
function resetCount() {
  count.value = 0;
}
</script>

<template>
  <div>
    <h2 class="h2">First Component</h2>
    <h3>
      <!-- conditional rendering -->
      <span v-if="count === 0">Don't you dare to click me !</span>
      <span v-else-if="count >= 1">
        How dare you click me {{ count }} time{{ count > 1 ? "s" : "" }}
      </span>
    </h3>
    <p>
      <!-- bind event on click with addCount -->
      <button class="btn" v-on:click="addCount">Dare-to-click</button>
    </p>
    <p>
      <!-- bind event on click with resetCount -->
      <!-- @ is shorthand for v-on: -->
      <button class="btn" @click="resetCount">Forget-me-not</button>
    </p>
  </div>
</template>

<style></style>
