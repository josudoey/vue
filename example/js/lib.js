//ref     
var Vue = require("vue");
var VueTables = require('vue-tables');
Vue.use(VueTables.client, {
  compileTemplates: true,
  highlightMatches: true,
  pagination: {
    //dropdown: true
    // chunk:5
    // 
  },
  filterByColumn: false,
  texts: {
    filter: "Search:"
  },

  //datepickerOptions: {
  //  showDropdowns: true
  //}
  //skin: ''

});

window.Vue = Vue;

