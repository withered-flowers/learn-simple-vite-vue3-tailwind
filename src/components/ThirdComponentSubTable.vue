<script setup>
import ThirdComponentSubTableContent from "./ThirdComponentSubTableContent.vue";

defineProps(["extData"]);
</script>

<template>
  <table class="table-auto">
    <thead>
      <tr>
        <th>first_name</th>
        <th>last_name</th>
        <th>email</th>
        <th>avatar</th>
      </tr>
    </thead>
    <tbody>
      <!-- Create the loop for rendering the data  -->
      <!-- Loop the table rows and pass the item -->
      <ThirdComponentSubTableContent
        v-for="item in extData"
        v-bind:key="item.id"
        v-bind:item="item"
      />
    </tbody>
  </table>
</template>

<style></style>
