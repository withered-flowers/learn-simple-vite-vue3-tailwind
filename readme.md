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
    import "./index.csse";

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
1. edit `SecondComponentSubContent.vue`
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
    ```
1. edit `App.vue`
    ```html
    <script setup>
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

    // import the component here
    import FirstComponent from "./components/FirstComponent.vue";
    // import the second component here
    import SecondComponent from "./components/SecondComponent.vue";
    </script>

    <template>
      <div class="custom-container bg-slate-200">
        <p class="h1">Simple Vue Apps with Tailwind</p>
        <!-- Create new section to hold FirstComponent -->
        <FirstComponent />
        <!-- Create new section to hold FirstComponent -->
        <SecondComponent />
      </div>
    </template>

    <style></style>
    ```

## ThirdComponent
1. create file `src/components/ThirdComponent.vue`
1. create file `src/components/ThirdComponentSubTable.vue`
1. create file `src/components/ThirdComponentSubTableContent.vue`
1. edit file `ThirdComponentSubTableContent.vue`
    ```html
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
    ```
1. edit file `ThirdComponentSubTable.vue`
    ```html
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
    ```
1. edit file `ThirdComponent.vue`
    ```html
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
    ```
1. edit file `App.vue`
    ```html
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
          <SecondComponent />
        </section>
        <!-- Create new section to hold ThirdComponent -->
        <section>
          <ThirdComponent />
        </section>
      </div>
    </template>

    <style></style>
    ```