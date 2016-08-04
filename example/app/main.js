var Vue = require("vue");
var fullscreen = require("./fullscreen");
var hello = require("./hello");

var vue = new Vue({
  el: '#main',
  components: {
    "hello": hello,
    "screen": fullscreen
  },
  template: '<span><span>{{msg}}</span> <br /> <hello v-ref:joey>joey</hello> <br /> <hello v-ref:joey2>test</hello><br /><button @click="$refs.screen.show = true">open</button><screen v-ref:screen> this is screen <button @click="$refs.screen.show = false">close</button></screen></span>',
  data: {
    msg: "this is example"
  },
  ready: function() {
    var self = this;
    this.$refs.joey.text = "joey";
    setTimeout(function() {
      self.$refs.joey2.text = "joey2";
    }, 3000);
  },
  methods: {}
});
window.vue = vue;

