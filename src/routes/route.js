// import createRouter for using the vue-router
// import createWebHistory to use the history mode
import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import ThirdComponent from "../components/ThirdComponent.vue";

// declare the routes needed for the application
const routes = [
  // { path: "/", component: App },
  { path: "/third-component", component: ThirdComponent },
];

// declare the router to be used by Vue
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
