//ref     
var Vue = require("vue");
var VueTables = require('vue-tables');
Vue.use(require('./alert'));
Vue.use(VueTables.client, {
  compileTemplates: true,
  highlightMatches: true,
  filterByColumn: false
});

window.Vue = Vue;

