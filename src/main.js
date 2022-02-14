import { createApp } from "vue";
import App from "./App.vue";
// import the router that we have created here
import router from "./routes/route";
// import the tailwind css here
import "./index.css";

const app = createApp(App);
// register the router to the app
app.use(router);
app.mount("#app");
