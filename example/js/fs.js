window.Vue = require("vue");

var getFsAsync = window.getFsAsync = new Promise(function (resolve, reject) {
  navigator.webkitTemporaryStorage.requestQuota(10 * 1024 * 1024 * 1024, function (grantedBytes) {
    window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
    window.requestFileSystem(TEMPORARY, grantedBytes, function (fs) {
      window.fs = fs;
      resolve(fs);
    }, console.error);
  }, function (e) {
    reject(e);
    console.log('Error', e);
  });
})

var vue = new Vue({
  el: "#fs",
  data: function () {
    return {};
  },
  methods: {
    onDrop: function (e) {
      e.preventDefault();
      var length = e.dataTransfer.items.length;
      for (var i = 0; i < length; i++) {
        var entry = e.dataTransfer.items[i].webkitGetAsEntry();
        console.log(entry);
        if (entry.isFile) {
          entry.copyTo(fs.root);
        } else if (entry.isDirectory) {
          entry.copyTo(fs.root);
        }
      }
    },
    onDragover: function (e) {
      e.preventDefault();
    },
    onDragend: function (e) {
      e.preventDefault();
    }

  }
});

