<script setup>
import FourthComponentSubTableContent from "./FourthComponentSubTableContent.vue";

// Receive the passed props extData to this component
defineProps(["extData"]);

// Receive the passed events setSelectedEmail to this component
const emit = defineEmits(["setSelectedEmail"]);

// define the function to use the emitted event from parent
const setSelectedEmail = (email) => {
  emit("setSelectedEmail", email);
};
</script>

<template>
  <table className="table-auto">
    <thead>
      <tr>
        <th>first_name</th>
        <th>last_name</th>
        <th>email</th>
        <th>avatar</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      <!-- Create the loop for rendering the data  -->

      <!-- Loop the table rows and pass the item function from props -->
      <FourthComponentSubTableContent
        v-for="item in extData"
        v-bind:key="item.id"
        v-bind:item="item"
        v-on:setSelectedEmail="setSelectedEmail"
      />
    </tbody>
  </table>
</template>
