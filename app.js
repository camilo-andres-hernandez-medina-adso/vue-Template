import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js'
import main from './main.js';
import myColLeft from './components/myColLeft.js';
import myColRight from './components/myColRight.js';
import myImg from "./components/myImg.js";


let app = createApp(main);
app.component(myColLeft.name, myColLeft);
app.component(myColRight.name, myColRight);
app.component(myImg.name, myImg);

app.mount("#app");