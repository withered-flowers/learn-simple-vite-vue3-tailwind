<script setup>
defineProps(["item"]);

// Receive the passed events setSelectedEmail to this component
const emit = defineEmits(["setSelectedEmail"]);

// define the function to use the emitted event from parent
const setSelectedEmail = (email) => {
  emit("setSelectedEmail", email);
};
</script>

<template>
  <tr>
    <td>{{ item.first_name }}</td>
    <td>{{ item.last_name }}</td>
    <td>{{ item.email }}</td>
    <td>
      <img v-bind:src="item.avatar" />
    </td>
    <td>
      <button className="btn" v-on:click="setSelectedEmail(item.email)">
        Choose Me pl0x
      </button>
    </td>
  </tr>
</template>
