import Vue from 'vue';
import App from './App';

new Vue({
  // el: '#app',
  render: h => h(App) // 'h' is convention shorthand for createElement
}).$mount('#app');    // $mount() equivalent to el:
