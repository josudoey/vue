var Vue = require("vue");
var Plug = {};
Plug.install = function (Vue, opts) {
  opts = opts || {};
  var el = opts.el;
  var vue = $(el);
  if (vue.length === 0) {
    vue = $('<div style="position: absolute; right: 0; margin-bottom: 0;"></div>');
    vue.prependTo("body");
  }

  Vue.prototype.$alert = function (msg, ms) {
    ms = ms || 3000;
    var el = $('<div class="alert alert-info" style="display: none; padding: 3px 6px 3px 6px; margin-bottom: 3px;">' + msg + '</div>');
    vue.append(el);
    el.slideDown(function () {
      el.delay(ms).slideUp(function () {
        el.remove();
      });
    });
  };
};
module.exports = Plug;

