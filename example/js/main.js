var Vue = require("vue");
var hello = require("./hello");

var vue = new Vue({
  el: '#main',
  components: {
    "hello": hello
  },
  template: '<span>{{msg}}</span> <br /> <hello v-ref:joey>joey</hello> <br /> <hello v-ref:joey2>test</hello><br />',
  data: {
    msg: "this is example"
  },
  ready: function () {
    var self = this;
    this.$refs.joey.text = "joey";
    setTimeout(function () {
      self.$refs.joey2.text = "joey2";
    }, 3000);
  },
  methods: {}
});
window.vue = vue;

