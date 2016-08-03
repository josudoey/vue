var Vue = require("vue");
var fullscreen = require("./fullscreen/vue");

var vue = new Vue({
  el: '#main',
  components: {
    "fullscreen": fullscreen
  },
  data: {
    msg: "this is example"
  },
  ready: function () {
    var self = this;
  },
  methods: {}
});
window.vue = vue;

