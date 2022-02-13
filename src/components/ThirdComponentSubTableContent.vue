<script setup>
defineProps(["item"]);
</script>

<template>
  <tr v-bind:key="item.id">
    <td>{{ item.first_name }}</td>
    <td>{{ item.last_name }}</td>
    <td>{{ item.email }}</td>
    <td>
      <img v-bind:src="item.avatar" />
    </td>
  </tr>
</template>

<style></style>
