//ref https://vuejs.org/examples/modal.html
var Vue = require("vue");
var vue = Vue.extend({
  template: require("./template.html"),
  props: {
    "width": {
      type: String
    },
    "height": {
      type: String
    },
    "show": {
      default: false
    }
  },
  watch: {
    width: function (val, old) {
      this.css.width = val;
    },
    height: function (val, old) {
      this.css.height = val;
    }
  },
  data: function () {
    return {
      header: {
        marginTop: 0,
        color: "#42b983"
      },
      mask: {
        position: "fixed",
        zIndex: 9998,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, .5)",
        display: "table",
        transition: "opacity.3s ease"
      },
      wrapper: {
        display: "table-cell",
        verticalAlign: "middle"
      },
      css: {
        width: "300px",
        margin: "0px auto",
        padding: "20px 30px",
        backgroundColor: "#fff",
        borderRadius: "2px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, .33)",
        transition: "all .3s ease",
        fontFamily: "Helvetica, Arial, sans-serif"
      }
    };
  },
  created: function () {
    if (this.width) {
      this.css.width = this.width;
    }
    if (this.height) {
      this.css.height = this.height;
    }
  }
});
module.exports = vue;

