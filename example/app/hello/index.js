var app = require("./index.vue");
var data = {
  msg: "hello world!!"
};
app.data = function () {
  setInterval(function () {
    data.msg = Date.now();
  }, 1000);
  return data;
};
module.exports = app;

