<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import FourthComponentSubTable from "./FourthComponentSubTable.vue";
import FourthComponentSubInput from "./FourthComponentSubInput.vue";

// state for fetched external data
// initial value is an empty array
const extData = ref([]);

// state for selected row (we only fetch the email, so initial state will be string)
const selectedExtData = ref("");

// declare function to set the ext data
const setExtData = (data) => {
  extData.value = data;
};

// declare function to set the selected email
const setSelectedEmail = (email) => {
  selectedExtData.value = email;
};

const fetchData = async () => {
  // fetch data from external API
  const response = await fetch("https://reqres.in/api/users");
  const jsonData = await response.json();

  // set fetched data to state
  setExtData(jsonData.data.slice(3, 6));
};

// we will fetch the data when this FourthComponent is rendered
// using the onMounted hook to fetch the data
// this is the same as componentDidMount on React
onMounted(() => {
  fetchData();
});

// this is the same as componentDidUnmount on React
onUnmounted(() => {});
</script>

<template>
  <div>
    <h2 className="h2">Fourth Component</h2>
    <FourthComponentSubInput
      v-bind:selectedExtData="selectedExtData"
    ></FourthComponentSubInput>
    <!-- pass the setSelectedEmail function here -->
    <FourthComponentSubTable
      v-bind:extData="extData"
      v-on:setSelectedEmail="setSelectedEmail"
    ></FourthComponentSubTable>
  </div>
</template>
