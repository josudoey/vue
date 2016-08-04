var vue = new Vue({
  el: "#table",
  props: {
    googleKey: {
      type: String

    },
    googleSheetId: {
      type: String
    }
  },
  data: {
    options: {
      headings: {
        0: 'Name',
        1: 'Url',
        action: "Action"
      },
      templates: {
        "action": "<a href='javascript:void(0);' @click='$parent.dump({index})'><i class='glyphicon glyphicon-expand'></i>{index} </a>",
      }
    },
    columns: ["0", "1", "action"],
    tableData: [],
    tableList: [],
    tableName: ""
  },
  watch: {
    tableName: function (val, old) {
      this.getTableData(val);
    }
  },
  methods: {
    show: function (name) {
      this.getTableData(name);
    },
    dump: function (index) {
      console.log(JSON.stringify(this.tableData[index]));
    },
    getTableData: function (name) {
      var uri = "https://sheets.googleapis.com/v4/spreadsheets/" + this.googleSheetId + "/values/" + name + "?key=" + this.googleKey;
      fetch(uri).then(function (resp) {
        if (resp.status === 200) {
          return resp.json();
        }
      }).then(function (obj) {
        console.log(obj);
        vue.tableData = obj.values.map(function (v, i) {
          var item = {};
          item.index = i;
          v.forEach(function (cv, i) {
            item[i] = cv;
          });
          return item;
        });
      });
    },
    getTableList: function () {
      var uri = "https://sheets.googleapis.com/v4/spreadsheets/" + this.googleSheetId + "/?key=" + this.googleKey;
      var self = this;
      fetch(uri).then(function (resp) {
        if (resp.status === 200) {
          return resp.json();
        }
      }).then(function (obj) {
        if (vue.tableList.length == 0 && obj.namedRanges.length) {
          var tableName = self.tableName = obj.namedRanges[0].name;
        }
        vue.tableList = obj.namedRanges;
      });
    }
  },
  created: function () {
    this.getTableList();
  }
});

