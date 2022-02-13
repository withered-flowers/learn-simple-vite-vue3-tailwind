<script setup>
import { ref } from "vue";

// We will create a child component to hold the content
import SecondComponentSubContent from "./SecondComponentSubContent.vue";

// state for the text
const textInput = ref("");
</script>

<template>
  <div>
    <h2 class="h2">Second Component</h2>
    <div class="custom-subcontainer">
      <!-- Form Section -->
      <section class="mr-4">
        <form>
          <!-- Two way data binding automatically using v-model -->
          <input
            class="form-input"
            type="text"
            placeholder="Write me pl0x"
            v-model="textInput"
          />
        </form>
      </section>
      <section>
        <!-- Content section  -->

        <!-- pass textInput to SecondComponentSubContent -->
        <SecondComponentSubContent v-bind:textInput="textInput" />
      </section>
    </div>
  </div>
</template>

<style></style>
