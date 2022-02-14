<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

// import the component here
import FirstComponent from "./components/FirstComponent.vue";
// import the second component here
import SecondComponent from "./components/SecondComponent.vue";
// import the third component here
import ThirdComponent from "./components/ThirdComponent.vue";
</script>

<template>
  <div class="custom-container bg-slate-200">
    <p class="h1">Simple Vue Apps with Tailwind</p>
    <!-- Create new section to hold FirstComponent -->
    <section>
      <FirstComponent />
    </section>
    <!-- Create new section to hold SecondComponent -->
    <section>
      <SecondComponents />
    </section>
    <!-- Create new section to hold ThirdComponent -->
    <section>
      <!-- <ThirdComponent /> -->
      <nav>
        <!--  Declare the link in here (href)  -->
        <router-link class="link" to="/">Back</router-link>
        <router-link class="link" to="/third-component"
          >Third Component</router-link
        >
      </nav>
      <!-- create the router-view to hold the component -->
      <router-view></router-view>
    </section>
  </div>
</template>

<style></style>
