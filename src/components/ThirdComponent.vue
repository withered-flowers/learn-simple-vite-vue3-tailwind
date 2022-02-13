<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import ThirdComponentSubTable from "./ThirdComponentSubTable.vue";

const extData = ref([]);

const fetchData = async () => {
  // fetch data from external API
  const response = await fetch("https://reqres.in/api/users");
  const jsonData = await response.json();

  // set fetched data to state
  extData.value = jsonData.data.slice(0, 3);
};

// we will fetch the data from the external API
// using the methods that we have created
// the fetchExternalData method

// this is the same as componentDidMount on React
onMounted(() => {
  fetchData();
});

// this is the same as componentDidUnmount on React
onUnmounted(() => {});
</script>

<template>
  <div>
    <h2 class="h2">Third Component</h2>
    <ThirdComponentSubTable v-bind:extData="extData"></ThirdComponentSubTable>
  </div>
</template>

<style></style>
