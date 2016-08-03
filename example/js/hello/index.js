var Vue = require("vue");
var hello = Vue.extend({
  template: '<a href="{{link}}">{{text}}</a>',
  props: {
    text: {
      type: String
    }
  },
  data: function() {
    return {
      link: "#",
    };
  }
});
module.exports = hello;

