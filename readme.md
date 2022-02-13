# Vue Simple Apps with Tailwindcss

## Demo
https://simple-vue-tailwind.web.app/

## Short Documentation 

Disclaimer:
- This documentation is using `pnpm`
- This code is using Vue v3 with Composition API (not Options API)

## Initialize Apps
1. `pnpm create vite`
1. name your project
1. select Framework: `vue`, 
1. select a variant: `vue`
1. `cd path/to/project/folder`
1. `pnpm install`
1. delete `src/assets/`, `src/components/HelloWorld.vue`
1. `pnpm install -D tailwindcss postcss autoprefixer`
1. `pnpm exec tailwindcss init -p`
1. edit `tailwind.config.js`
    ```js
    module.exports = {
      content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,svelte,md,mdx}"],
      theme: {
        extend: {},
      },
      plugins: [],
    };
    ```
1. create file `src/index.css`
1. edit `index.css`
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .custom-container {
      @apply container p-4 min-w-full min-h-screen flex flex-col items-center justify-center text-center;
    }

    .custom-subcontainer {
      @apply flex flex-row justify-center items-center;
    }

    .h1 {
      @apply text-4xl font-medium mb-4;
    }

    .h2 {
      @apply text-2xl font-medium mb-4;
    }

    .btn {
      @apply px-4 py-2 my-2 bg-sky-300 hover:bg-sky-600 text-slate-700 hover:text-slate-300 font-bold rounded-3xl w-48;
    }

    .form-input {
      @apply px-4 py-2 my-2 bg-white border border-gray-300 rounded-3xl w-full;
    }

    table {
      @apply table-auto border border-collapse border-slate-500;
    }

    td,
    th {
      @apply border border-slate-500 p-2;
    }
    ```
1. edit `main.js`
    ```js
    import { createApp } from "vue";
    import App from "./App.vue";
    // import the tailwind css here
    import "./index.css";

    createApp(App).mount("#app");
    ```
1. edit `App.vue`
    ```html
    <script setup>
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    </script>

    <template>
      <div class="custom-container bg-slate-200">
        <p class="h1">Simple Vue Apps with Tailwind</p>
      </div>
    </template>

    <style></style>
    ```
1. run the app `pnpm run dev`

## FirstComponent
1. create file `src/components/FirstComponent.vue`
1. edit `FirstComponent.vue`
    ```html
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
    ```
1. edit `App.vue`
    ```html
    <script setup>
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

    // import the component here
    import FirstComponent from "./components/FirstComponent.vue";
    </script>

    <template>
      <div class="custom-container bg-slate-200">
        <p class="h1">Simple Vue Apps with Tailwind</p>
        <!-- Call the FirstComponent -->
        <FirstComponent />
      </div>
    </template>

    <style></style>
    ```

## SecondComponent
1. create file `src/components/SecondComponent.vue`
1. create file `src/components/SecondComponentSubContent.vue`
1. edit `SecondComponentSubContent.jsx`
    ```html
    <script setup>
    // get a props from parent component named 'textInput'
    // via defineProps
    defineProps(["textInput"]);
    </script>

    <template>
      <div>
        <pre v-if="textInput === ''">I have nothing to show</pre>
        <pre v-else>I write: {{ textInput }}</pre>
      </div>
    </template>

    <style></style>
    ```
1. edit `SecondComponent.vue`
    ```html
    <script setup>
    import { ref } from "vue";

    // We will create a child component to hold the content
    import SecondComponentSubContent from "./SecondComponentSubContent.vue";

    // state for the text
    const textInput = ref("");
    </script>

    <template>
      <div>
        <h2 className="h2">Second Component</h2>
        <div className="custom-subcontainer">
          <!-- Form Section -->
          <section className="mr-4">
            <form>
              <!-- Two way data binding automatically using v-model -->
              <input
                className="form-input"
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
    ```
1. edit `App.vue`
    ```html
    ```

## ThirdComponent
