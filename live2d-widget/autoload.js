"use strict";

//注意：live2d_path参数应使用绝对路径
// const live2d_path = "https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/";
var live2d_path = "/live2d-widget/";
//const live2d_path = "/live2d-widget/";

//加载waifu.css
$("<link>").attr({ href: live2d_path + "waifu.css", rel: "stylesheet" }).appendTo("head");

//加载live2d.min.js
$.ajax({
  url: live2d_path + "live2d.min.js",
  dataType: "script",
  cache: true
});

//加载waifu-tips.js
$.ajax({
  url: live2d_path + "waifu-tips.js",
  dataType: "script",
  cache: true
});

//初始化看板娘，会自动加载指定目录下的waifu-tips.json
$(window).on("load", function () {
  initWidget(live2d_path + "waifu-tips.json", "https://live2d.fghrsh.net/api");
});
//initWidget第一个参数为waifu-tips.json的路径
//第二个参数为api地址（无需修改）
//api后端可自行搭建，参考https://github.com/fghrsh/live2d_api

console.log("\n  \u304F__,.\u30D8\u30FD.        /  ,\u30FC\uFF64 \u3009\n           \uFF3C ', !-\u2500\u2010-i  /  /\xB4\n           \uFF0F\uFF40\uFF70'       L/\uFF0F\uFF40\u30FD\uFF64\n         /   \uFF0F,   /|   ,   ,       ',\n       \uFF72   / /-\u2010/  \uFF49  L_ \uFF8A \u30FD!   i\n        \uFF9A \uFF8D 7\uFF72\uFF40\uFF84   \uFF9A'\uFF67-\uFF84\uFF64!\u30CF|   |\n          !,/7 '0'     \xB40i\u30BD|    |\n          |.\u4ECE\"    _     ,,,, / |./    |\n          \uFF9A'| i\uFF1E.\uFF64,,__  _,.\u30A4 /   .i   |\n            \uFF9A'| | / k_\uFF17_/\uFF9A'\u30FD,  \uFF8A.  |\n              | |/i \u3008|/   i  ,.\uFF8D |  i  |\n             .|/ /  \uFF49\uFF1A    \uFF8D!    \uFF3C  |\n              k\u30FD>\uFF64\uFF8A    _,.\uFF8D\uFF64    /\uFF64!\n              !'\u3008//\uFF40\uFF34\xB4', \uFF3C \uFF40'7'\uFF70r'\n              \uFF9A'\u30FDL__|___i,___,\u30F3\uFF9A|\u30CE\n                  \uFF84-,/  |___./\n                  '\uFF70'    !_,.:\n");

// console.log(`
//   く__,.ヘヽ.        /  ,ー､ 〉
//            ＼ ', !-─‐-i  /  /´
//            ／｀ｰ'       L/／｀ヽ､
//          /   ／,   /|   ,   ,       ',
//        ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
//         ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
//           !,/7 '0'     ´0iソ|    |
//           |.从"    _     ,,,, / |./    |
//           ﾚ'| i＞.､,,__  _,.イ /   .i   |
//             ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
//               | |/i 〈|/   i  ,.ﾍ |  i  |
//              .|/ /  ｉ：    ﾍ!    ＼  |
//               kヽ>､ﾊ    _,.ﾍ､    /､!
//               !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
//               ﾚ'ヽL__|___i,___,ンﾚ|ノ
//                   ﾄ-,/  |___./
//                   'ｰ'    !_,.:
// `);
