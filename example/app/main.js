var Vue = require("vue");
Vue.component('hello', require("./hello"))

var app = new Vue({
  el: '#main',
  data: {
    currentView: 'hello'
  }
});
app.currentView = 'hello';

