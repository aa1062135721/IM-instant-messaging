!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.dayjs_plugin_minMax=e()}(this,function(){"use strict";return function(n,e,t){var i=function(n,e){if(!e||!e.length||!e[0]||1===e.length&&!e[0].length)return null;var t;1===e.length&&e[0].length>0&&(e=e[0]),t=e[0];for(var i=1;i<e.length;i+=1)e[i].isValid()&&!e[i][n](t)||(t=e[i]);return t};t.max=function(){var n=[].slice.call(arguments,0);return i("isAfter",n)},t.min=function(){var n=[].slice.call(arguments,0);return i("isBefore",n)}}});
