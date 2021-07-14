import { createApp } from "vue";
import App from "./components/board/board.vue";
// styles
import "../sass/_reboot.scss";
// store
import list from "./store/board";
const app = createApp(App);
// vuex
app.use(list);
app.mount("#app");
