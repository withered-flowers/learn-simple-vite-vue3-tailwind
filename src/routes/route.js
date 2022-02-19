// import createRouter for using the vue-router
// import createWebHistory to use the history mode
import { createRouter, createWebHistory } from "vue-router";
import ThirdComponent from "../components/ThirdComponent.vue";
// import fourth component
import FourthComponent from "../components/FourthComponent.vue";

// declare the routes needed for the application
const routes = [
  { path: "/third-component", component: ThirdComponent },
  // declare FourthComponent
  {
    path: "/fourth-component",
    component: FourthComponent,
  },
];

// declare the router to be used by Vue
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
