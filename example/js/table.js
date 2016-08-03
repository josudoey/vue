//ref     
var Vue = require("vue");
var VueTables = require('vue-tables');
var template = require("./table/template.html");
Vue.use(VueTables.client, {
  //compileTemplates: true,
  //highlightMatches: true,
  pagination: {
    //dropdown: true
    // chunk:5
    // 
  },
  filterByColumn: true,
  texts: {
    filter: "Search:"
  },

  //datepickerOptions: {
  //  showDropdowns: true
  //}
  //skin: ''


});

var vue = new Vue({
  el: "#main",
  template: template,
  data: {
    columns: ['id', 'name', 'age'],
    tableData: [{
      id: 1,
      name: "John",
      age: "20"
    }, {
      id: 2,
      name: "Jane",
      age: "24"
    }, {
      id: 3,
      name: "Susan",
      age: "16"
    }, {
      id: 4,
      name: "Chris",
      age: "55"
    }, {
      id: 5,
      name: "Dan",
      age: "40"
    }],
    options: {
      // see the options API
      perPage: 3
    }
  }
});

