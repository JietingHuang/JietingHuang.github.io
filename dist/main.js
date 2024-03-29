'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/__webpack_require__.r = function (exports) {
    /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
    /******/Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/__webpack_require__.t = function (value, mode) {
    /******/if (mode & 1) value = __webpack_require__(value);
    /******/if (mode & 8) return value;
    /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value && value.__esModule) return value;
    /******/var ns = Object.create(null);
    /******/__webpack_require__.r(ns);
    /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    } /******/return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "./";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = "./source-src/main.js");
  /******/
})(
/************************************************************************/
/******/{

  /***/"./source-src/main.js":
  /*!****************************!*\
    !*** ./source-src/main.js ***!
    \****************************/
  /*! no exports provided */
  /***/function sourceSrcMainJs(module, __webpack_exports__, __webpack_require__) {

    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./main.scss */"./source-src/main.scss");
    /* harmony import */var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */var _trianglify_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./trianglify.min.js */"./source-src/trianglify.min.js");
    /* harmony import */var _trianglify_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_trianglify_min_js__WEBPACK_IMPORTED_MODULE_1__);

    //article page Topbar and title banckground
    function pattern() {
      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.innerWidth;

      return _trianglify_min_js__WEBPACK_IMPORTED_MODULE_1___default()({
        width: width,
        height: 230,
        variance: 0.56,
        cell_size: 46,
        x_colors: 'random',
        y_colors: 'match_x',
        palette: _trianglify_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.colorbrewer,
        color_space: 'lab',
        color_function: false,
        stroke_width: 1.2,
        seed: window.location.href
      });
    }

    var pageFirstChild = document.querySelector('.navbar-header');
    if (pageFirstChild) {
      document.body.insertBefore(pattern().canvas(), pageFirstChild);
      deletePatternPlaceholder();
      toggleHeaderNavBar();
    }

    window.addEventListener('resize', function () {
      var bodyFirstElement = document.body.firstElementChild;
      var firstElementTagName = bodyFirstElement.tagName;
      if (firstElementTagName === 'CANVAS') {
        document.body.removeChild(bodyFirstElement);
        document.body.insertBefore(pattern().canvas(), pageFirstChild);
      }
    });

    function deletePatternPlaceholder() {
      var patternPlaceholder = document.getElementById('pattern-placeholder');
      var parent = patternPlaceholder.parentElement;
      parent.removeChild(patternPlaceholder);
    }

    function toggleHeaderNavBar() {
      document.addEventListener('scroll', function () {
        var offset = window.pageYOffset;
        if (offset > 128) {
          pageFirstChild.classList.add('fixed-header');
        }
        if (offset <= 128) {
          pageFirstChild.classList.remove('fixed-header');
        }
      });
    }

    function hiddenSearchResultBox() {
      document.querySelector('.search-result-box').style.display = 'none';
    }

    // search
    var searchData;
    var search = document.getElementById('search');

    if (search) {
      search.addEventListener('input', function (e) {
        var key = this.value.trim();
        if (!key) {
          hiddenSearchResultBox();
          return;
        }

        var regExp = new RegExp(key.replace(/[ ]/g, '|'), 'gmi');

        loadData(function (data) {
          var result = data.filter(function (post) {
            return matcher(post, regExp);
          });

          render(result);

          keyDown();
        });

        e.preventDefault();
      });
    }

    function loadData(success) {

      if (!searchData) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/content.json', true);

        xhr.onload = function () {
          if (this.status >= 200 && this.status < 300) {
            var res = JSON.parse(this.response);
            searchData = res instanceof Array ? res : res.posts;
            success(searchData);
          } else {
            console.error(this.statusText);
          }
        };

        xhr.onerror = function () {
          console.error(this.statusText);
        };

        xhr.send();
      } else {
        success(searchData);
      }
    }

    function render(data) {
      var html = '';
      if (data.length > 0) {

        html = data.map(function (post, i) {
          if (i == 0) {
            return '<li><a href=' + window.location.origin + '/' + post.path + '>' + post.title + '</a><span class="search-enter"> 🚀 </span></li>';
          }
          return '<li><a href=' + window.location.origin + '/' + post.path + '>' + post.title + '</a></li>';
        });

        if (html) {
          document.querySelector('.search-result-box').style.display = 'block';
        }
        var result = document.getElementById('search-result');
        result.innerHTML = html.join('');
        return;
      }
      if (!data || data.length <= 0) {
        hiddenSearchResultBox();
      }
    }

    function keyDown() {
      document.addEventListener('keydown', function (event) {
        var keyCode = event.keyCode;
        var ENTER = 13;
        if (keyCode == ENTER) {
          var searchResult = document.getElementById('search-result');
          var firstLiTag = searchResult.firstChild;
          var firstATag = firstLiTag && firstLiTag.firstChild;
          var href = firstATag && firstATag.href;
          window.location.href = href;
        }
      });
    }

    function matcher(post, regExp) {
      return regtest(post.title, regExp);
    }

    function regtest(raw, regExp) {
      regExp.lastIndex = 0;
      return regExp.test(raw);
    }

    // 显示文章长时间未更新提醒
    var overdueRemindDom = document.querySelector('.overdue-remind');
    var overdueRemindText = overdueRemindDom && overdueRemindDom.textContent;
    var postUpdateDateDom = document.querySelector("time[itemprop='dateUpdated']");
    var postUpdateDate = postUpdateDateDom && postUpdateDateDom.textContent;
    if (overdueRemindText && overdueRemindDom) {
      var now = Date.parse(new Date());
      var postLastTime = Date.parse(postUpdateDate);
      var dayNum = parseInt((now - postLastTime) / (1000 * 60 * 60 * 24));
      overdueRemindDom.innerHTML = overdueRemindText.replace(/\$day/, '<span> ' + dayNum + ' </span>');
    }

    // var navMenu = document.getElementById('nav-menu');
    // var searchContainer = document.querySelector('.search');
    // navMenu.addEventListener('click', () => {
    //   var leftAside = document.querySelector('.left-aside');
    //   var rightAside = document.querySelector('.right-aside');
    //   var rightMain = document.querySelector('.right-main');
    //   if (leftAside) { leftAside.style.display = 'none'}
    //   if (rightAside) { rightAside.style.marginLeft = 'unset'}
    //   if (searchContainer) {searchContainer.style.right = '70px';}
    //   if (rightMain) {
    //     rightMain.style.float = 'unset';
    //     rightMain.style.margin = '65px auto';
    //     rightMain.style.width = '800px';
    //   };
    // });

    // var navSearch = document.getElementById('nav-search');
    // var searchBox = document.querySelector('.search-box');
    // navSearch.addEventListener('click', () => {
    //   navSearch.style.display = 'none';
    //   if (searchBox) { searchBox.style.display = 'block';}
    //   search.focus();
    // });

    // search.addEventListener('blur', (event) => {
    //   navSearch.style.display = 'block';
    //   if (searchBox) { searchBox.style.display = 'none';};
    //   search.value = '';
    //   hiddenSearchResultBox();
    // });


    /***/
  },

  /***/"./source-src/main.scss":
  /*!******************************!*\
    !*** ./source-src/main.scss ***!
    \******************************/
  /*! no static exports found */
  /***/function sourceSrcMainScss(module, exports) {

    // removed by extract-text-webpack-plugin

    /***/
  },

  /***/"./source-src/trianglify.min.js":
  /*!**************************************!*\
    !*** ./source-src/trianglify.min.js ***!
    \**************************************/
  /*! no static exports found */
  /***/function sourceSrcTrianglifyMinJs(module, exports, __webpack_require__) {

    var require;var require;(function (e) {
      if (true) module.exports = e();else {
        var f;
      }
    })(function () {
      var e,
          f = Math.max,
          d = Math.sqrt,
          a = Math.abs,
          n = Math.floor;return function d(c, e, n) {
        function f(i, o) {
          if (!e[i]) {
            if (!c[i]) {
              var r = "function" == typeof require && require;if (!o && r) return require(i, !0);if (t) return t(i, !0);var a = new Error("Cannot find module '" + i + "'");throw a.code = "MODULE_NOT_FOUND", a;
            }var s = e[i] = { exports: {} };c[i][0].call(s.exports, function (d) {
              var e = c[i][1][d];return f(e ? e : d);
            }, s, s.exports, d, c, e, n);
          }return e[i].exports;
        }for (var t = "function" == typeof require && require, a = 0; a < n.length; a++) {
          f(n[a]);
        }return f;
      }({ "./lib/trianglify.js": [function (e, f) {
          function d(e) {
            function f(e, f, d) {
              return (e - f[0]) * (d[1] - d[0]) / (f[1] - f[0]) + d[0];
            }function d(e) {
              return { x: (e[0][0] + e[1][0] + e[2][0]) / 3, y: (e[0][1] + e[1][1] + e[2][1]) / 3 };
            }function s() {
              if (e.palette instanceof Array) return e.palette[n(b() * e.palette.length)];var f = Object.keys(e.palette);return e.palette[f[n(b() * f.length)]];
            }var b;if (e = function (e, f) {
              var d = {};for (var a in e) {
                d[a] = e[a];
              }for (a in f) {
                if (e.hasOwnProperty(a)) d[a] = f[a];else throw new Error(a + " is not a configuration option for Trianglify. Check your spelling?");
              }return d;
            }(c, e), b = t(e.seed), "random" === e.x_colors && (e.x_colors = s()), "random" === e.y_colors && (e.y_colors = s()), "match_x" === e.y_colors && (e.y_colors = e.x_colors), !(0 < e.width && 0 < e.height)) throw new Error("Width and height must be numbers greater than 0");if (2 > e.cell_size) throw new Error("Cell size must be greater than 2.");var h;if (e.color_function) h = function h(f, d) {
              return o(e.color_function(f, d));
            };else {
              var u = o.scale(e.x_colors).mode(e.color_space),
                  g = o.scale(e.y_colors).mode(e.color_space);h = function h(f, d) {
                return o.interpolate(u(f), g(d), 0.5, e.color_space);
              };
            }for (var p = e.width, m = e.height, y = n((p + 4 * e.cell_size) / e.cell_size), x = n((m + 4 * e.cell_size) / e.cell_size), _ = (y * e.cell_size - p) / 2, k = (x * e.cell_size - m) / 2, w = e.cell_size * e.variance / 2, j = function j(e) {
              return f(e, [-_, p + _], [0, 1]);
            }, v = function v(e) {
              return f(e, [-k, m + k], [0, 1]);
            }, z = e.points || r(p, m, _, k, e.cell_size, w, b), B = new a(z).triangles, S = [], G = function G(e) {
              return z[e];
            }, P = 0; P < B.length; P += 3) {
              var i = [B[P], B[P + 1], B[P + 2]].map(G),
                  R = d(i),
                  A = h(j(R.x), v(R.y)).hex();S.push([A, i]);
            }return l(S, e);
          }var a = e("delaunator"),
              t = e("seedrandom"),
              o = e("chroma-js"),
              i = e("./colorbrewer"),
              r = e("./points"),
              l = e("./pattern"),
              c = { width: 600, height: 400, cell_size: 75, variance: 0.75, seed: null, x_colors: "random", y_colors: "match_x", palette: i, color_space: "lab", color_function: null, stroke_width: 1.51, points: void 0 };d.colorbrewer = i, d.defaults = c, f.exports = d;
        }, { "./colorbrewer": "/home/fmauneko/code/trianglify/lib/colorbrewer.js", "./pattern": "/home/fmauneko/code/trianglify/lib/pattern.js", "./points": "/home/fmauneko/code/trianglify/lib/points.js", "chroma-js": "/home/fmauneko/code/trianglify/node_modules/chroma-js/chroma.js", delaunator: "/home/fmauneko/code/trianglify/node_modules/delaunator/index.js", seedrandom: "/home/fmauneko/code/trianglify/node_modules/seedrandom/index.js" }], "/home/fmauneko/code/trianglify/lib/colorbrewer.js": [function (e, f) {
          f.exports = { YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"], YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"], GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"], BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"], PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"], PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"], BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"], RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"], PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"], OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"], YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"], YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"], Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"], Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"], Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"], Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"], Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"], Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"], PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"], BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"], PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"], PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"], RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"], RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"], RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"], Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"], RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"] };
        }, {}], "/home/fmauneko/code/trianglify/lib/pattern.js": [function (e, f) {
          (function (d) {
            var a = "undefined" == typeof document ? e("jsdom").jsdom("<html/>") : document;f.exports = function (f, n) {
              function t(t) {
                var o;if ("object" == (typeof d === 'undefined' ? 'undefined' : _typeof(d)) && "object" == _typeof(d.versions) && "undefined" != typeof d.versions.node) try {
                  e("canvas");
                } catch (f) {
                  throw Error("The optional node-canvas dependency is needed for Trianglify to render using canvas in node.");
                }return t || (t = a.createElement("canvas")), t.setAttribute("width", n.width), t.setAttribute("height", n.height), o = t.getContext("2d"), o.canvas.width = n.width, o.canvas.height = n.height, f.forEach(function (e) {
                  o.fillStyle = o.strokeStyle = e[0], o.lineWidth = n.stroke_width, o.beginPath(), o.moveTo.apply(o, e[1][0]), o.lineTo.apply(o, e[1][1]), o.lineTo.apply(o, e[1][2]), o.fill(), o.stroke();
                }), t;
              }return { polys: f, opts: n, svg: function svg(e) {
                  var d = a.createElementNS("http://www.w3.org/2000/svg", "svg");return d.setAttribute("width", n.width), d.setAttribute("height", n.height), e && e.includeNamespace && d.setAttribute("xmlns", "http://www.w3.org/2000/svg"), f.forEach(function (e) {
                    var f = a.createElementNS("http://www.w3.org/2000/svg", "path");f.setAttribute("d", "M" + e[1].join("L") + "Z"), f.setAttribute("fill", e[0]), f.setAttribute("stroke", e[0]), f.setAttribute("stroke-width", n.stroke_width), d.appendChild(f);
                  }), d;
                }, canvas: t, png: function png() {
                  return t().toDataURL("image/png");
                } };
            };
          }).call(this, e("_process"));
        }, { _process: "/home/fmauneko/code/trianglify/node_modules/process/browser.js", canvas: "/home/fmauneko/code/trianglify/node_modules/browser-resolve/empty.js", jsdom: "/home/fmauneko/code/trianglify/node_modules/browser-resolve/empty.js" }], "/home/fmauneko/code/trianglify/lib/points.js": [function (e, f) {
          f.exports = function (e, f, d, a, t, o, r) {
            for (var l = 0.5 * t, c = 2 * o, s = -o, b = [], h = -d; h < e + d; h += t) {
              for (var i = -a; i < f + a; i += t) {
                var u = h + l + (r() * c + s),
                    g = i + l + (r() * c + s);b.push([n(u), n(g)]);
              }
            }return b;
          };
        }, {}], "/home/fmauneko/code/trianglify/node_modules/browser-resolve/empty.js": [function () {}, {}], "/home/fmauneko/code/trianglify/node_modules/chroma-js/chroma.js": [function (t, o, i) {
          (function () {
            var t,
                r,
                l,
                c,
                s,
                h,
                u,
                _b,
                g,
                y,
                p,
                m,
                x,
                _,
                k,
                w,
                j,
                v,
                z,
                B,
                S,
                G,
                P,
                R,
                A,
                q,
                C,
                L,
                O,
                T,
                E,
                Y,
                N,
                X,
                D,
                U,
                K,
                M,
                W,
                V = Number.MAX_VALUE,
                F = Math.min,
                I = Math.cos,
                Z = Math.pow,
                Q = Math.PI,
                H = Number.NaN,
                $ = Math.round;y = function y(e, f, d, a) {
              return new t(e, f, d, a);
            }, "undefined" != typeof o && null !== o && null != o.exports && (o.exports = y), "function" == typeof e && e.amd ? e([], function () {
              return y;
            }) : (X = "undefined" != typeof i && null !== i ? i : this, X.chroma = y), y.color = function (e, f, d, a) {
              return new t(e, f, d, a);
            }, y.hsl = function (e, f, d, n) {
              return new t(e, f, d, n, "hsl");
            }, y.hsv = function (e, f, d, n) {
              return new t(e, f, d, n, "hsv");
            }, y.rgb = function (e, f, d, n) {
              return new t(e, f, d, n, "rgb");
            }, y.hex = function (e) {
              return new t(e);
            }, y.css = function (e) {
              return new t(e);
            }, y.lab = function (e, f, d) {
              return new t(e, f, d, "lab");
            }, y.lch = function (e, f, d) {
              return new t(e, f, d, "lch");
            }, y.hsi = function (e, f, d) {
              return new t(e, f, d, "hsi");
            }, y.gl = function (e, f, d, n) {
              return new t(255 * e, 255 * f, 255 * d, n, "gl");
            }, y.interpolate = function (e, d, a, f) {
              return null == e || null == d ? "#000" : ("string" === D(e) && (e = new t(e)), "string" === D(d) && (d = new t(d)), e.interpolate(a, d, f));
            }, y.mix = y.interpolate, y.contrast = function (e, f) {
              var d, a;return "string" === D(e) && (e = new t(e)), "string" === D(f) && (f = new t(f)), d = e.luminance(), a = f.luminance(), d > a ? (d + 0.05) / (a + 0.05) : (a + 0.05) / (d + 0.05);
            }, y.luminance = function (e) {
              return y(e).luminance();
            }, y._Color = t, t = function () {
              function e() {
                var e, f, d, a, n, t, o, i, r, l, c, s, b, h, u, g;for (n = this, d = [], (l = 0, c = arguments.length); l < c; l++) {
                  f = arguments[l], null != f && d.push(f);
                }if (0 === d.length) s = [255, 0, 255, 1, "rgb"], o = s[0], i = s[1], r = s[2], e = s[3], a = s[4];else if ("array" === D(d[0])) {
                  if (3 === d[0].length) b = d[0], o = b[0], i = b[1], r = b[2], e = 1;else if (4 === d[0].length) h = d[0], o = h[0], i = h[1], r = h[2], e = h[3];else throw "unknown input argument";a = null == (u = d[1]) ? "rgb" : u;
                } else "string" === D(d[0]) ? (o = d[0], a = "hex") : "object" === D(d[0]) ? (g = d[0]._rgb, o = g[0], i = g[1], r = g[2], e = g[3], a = "rgb") : 3 <= d.length && (o = d[0], i = d[1], r = d[2]);3 === d.length ? (a = "rgb", e = 1) : 4 === d.length ? "string" === D(d[3]) ? (a = d[3], e = 1) : "number" === D(d[3]) && (a = "rgb", e = d[3]) : 5 === d.length && (e = d[3], a = d[4]), null == e && (e = 1), "rgb" === a ? n._rgb = [o, i, r, e] : "gl" === a ? n._rgb = [255 * o, 255 * i, 255 * r, e] : "hsl" === a ? (n._rgb = j(o, i, r), n._rgb[3] = e) : "hsv" === a ? (n._rgb = v(o, i, r), n._rgb[3] = e) : "hex" === a ? n._rgb = k(o) : "lab" === a ? (n._rgb = B(o, i, r), n._rgb[3] = e) : "lch" === a ? (n._rgb = P(o, i, r), n._rgb[3] = e) : "hsi" === a && (n._rgb = w(o, i, r), n._rgb[3] = e), t = p(n._rgb);
              }return e.prototype.rgb = function () {
                return this._rgb.slice(0, 3);
              }, e.prototype.rgba = function () {
                return this._rgb;
              }, e.prototype.hex = function () {
                return C(this._rgb);
              }, e.prototype.toString = function () {
                return this.name();
              }, e.prototype.hsl = function () {
                return O(this._rgb);
              }, e.prototype.hsv = function () {
                return T(this._rgb);
              }, e.prototype.lab = function () {
                return E(this._rgb);
              }, e.prototype.lch = function () {
                return Y(this._rgb);
              }, e.prototype.hsi = function () {
                return L(this._rgb);
              }, e.prototype.gl = function () {
                return [this._rgb[0] / 255, this._rgb[1] / 255, this._rgb[2] / 255, this._rgb[3]];
              }, e.prototype.luminance = function (f, d) {
                var n, t, o, _i;return (null == d && (d = "rgb"), !arguments.length) ? A(this._rgb) : (0 === f && (this._rgb = [0, 0, 0, this._rgb[3]]), 1 === f && (this._rgb = [255, 255, 255, this._rgb[3]]), n = A(this._rgb), t = 1e-7, o = 20, _i = function i(e, n) {
                  var r, l;return l = e.interpolate(0.5, n, d), r = l.luminance(), a(f - r) < t || !o-- ? l : r > f ? _i(e, l) : _i(l, n);
                }, this._rgb = (n > f ? _i(new e("black"), this) : _i(this, new e("white"))).rgba(), this);
              }, e.prototype.name = function () {
                var e, f;for (f in e = this.hex(), y.colors) {
                  if (e === y.colors[f]) return f;
                }return e;
              }, e.prototype.alpha = function (e) {
                return arguments.length ? (this._rgb[3] = e, this) : this._rgb[3];
              }, e.prototype.css = function (e) {
                var f, d, a, n;return (null == e && (e = "rgb"), d = this, a = d._rgb, 3 === e.length && 1 > a[3] && (e += "a"), "rgb" === e) ? e + "(" + a.slice(0, 3).map(Math.round).join(",") + ")" : "rgba" === e ? e + "(" + a.slice(0, 3).map(Math.round).join(",") + "," + a[3] + ")" : "hsl" === e || "hsla" === e ? (f = d.hsl(), n = function n(e) {
                  return $(100 * e) / 100;
                }, f[0] = n(f[0]), f[1] = n(100 * f[1]) + "%", f[2] = n(100 * f[2]) + "%", 4 === e.length && (f[3] = a[3]), e + "(" + f.join(",") + ")") : void 0;
              }, e.prototype.interpolate = function (d, f, a) {
                var n, t, o, i, r, l, c, s, b, h, u, g, p, m;if (s = this, null == a && (a = "rgb"), "string" === D(f) && (f = new e(f)), "hsl" === a || "hsv" === a || "lch" === a || "hsi" === a) "hsl" === a ? (p = s.hsl(), m = f.hsl()) : "hsv" === a ? (p = s.hsv(), m = f.hsv()) : "hsi" === a ? (p = s.hsi(), m = f.hsi()) : "lch" === a && (p = s.lch(), m = f.lch()), "h" === a.substr(0, 1) ? (o = p[0], u = p[1], l = p[2], i = m[0], g = m[1], c = m[2]) : (l = p[0], u = p[1], o = p[2], c = m[0], g = m[1], i = m[2]), isNaN(o) || isNaN(i) ? isNaN(o) ? isNaN(i) ? t = H : (t = i, (1 === l || 0 === l) && "hsv" !== a && (h = g)) : (t = o, (1 === c || 0 === c) && "hsv" !== a && (h = u)) : (n = i > o && 180 < i - o ? i - (o + 360) : i < o && 180 < o - i ? i + 360 - o : i - o, t = o + d * n), null == h && (h = u + d * (g - u)), r = l + d * (c - l), b = "h" === a.substr(0, 1) ? new e(t, h, r, a) : new e(r, h, t, a);else if ("rgb" === a) p = s._rgb, m = f._rgb, b = new e(p[0] + d * (m[0] - p[0]), p[1] + d * (m[1] - p[1]), p[2] + d * (m[2] - p[2]), a);else if ("lab" === a) p = s.lab(), m = f.lab(), b = new e(p[0] + d * (m[0] - p[0]), p[1] + d * (m[1] - p[1]), p[2] + d * (m[2] - p[2]), a);else throw "color mode " + a + " is not supported";return b.alpha(s.alpha() + d * (f.alpha() - s.alpha())), b;
              }, e.prototype.premultiply = function () {
                var e, f;return f = this.rgb(), e = this.alpha(), y(f[0] * e, f[1] * e, f[2] * e, e);
              }, e.prototype.darken = function (e) {
                var f, d;return null == e && (e = 20), d = this, f = d.lch(), f[0] -= e, y.lch(f).alpha(d.alpha());
              }, e.prototype.darker = function (e) {
                return this.darken(e);
              }, e.prototype.brighten = function (e) {
                return null == e && (e = 20), this.darken(-e);
              }, e.prototype.brighter = function (e) {
                return this.brighten(e);
              }, e.prototype.saturate = function (e) {
                var f, d;return null == e && (e = 20), d = this, f = d.lch(), f[1] += e, y.lch(f).alpha(d.alpha());
              }, e.prototype.desaturate = function (e) {
                return null == e && (e = 20), this.saturate(-e);
              }, e;
            }(), p = function p(e) {
              for (var f in e) {
                3 > f ? (0 > e[f] && (e[f] = 0), 255 < e[f] && (e[f] = 255)) : 3 === f && (0 > e[f] && (e[f] = 0), 1 < e[f] && (e[f] = 1));
              }return e;
            }, _ = function _(e) {
              var f, d, a, n, t, o, i, r;if (e = e.toLowerCase(), null != y.colors && y.colors[e]) return k(y.colors[e]);if (a = e.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)) {
                for (n = a.slice(1, 4), d = t = 0; 2 >= t; d = ++t) {
                  n[d] = +n[d];
                }n[3] = 1;
              } else if (a = e.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/)) for (n = a.slice(1, 5), d = o = 0; 3 >= o; d = ++o) {
                n[d] = +n[d];
              } else if (a = e.match(/rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
                for (n = a.slice(1, 4), d = i = 0; 2 >= i; d = ++i) {
                  n[d] = $(2.55 * n[d]);
                }n[3] = 1;
              } else if (a = e.match(/rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
                for (n = a.slice(1, 5), d = r = 0; 2 >= r; d = ++r) {
                  n[d] = $(2.55 * n[d]);
                }n[3] = +n[3];
              } else (a = e.match(/hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) ? (f = a.slice(1, 4), f[1] *= 0.01, f[2] *= 0.01, n = j(f), n[3] = 1) : (a = e.match(/hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) && (f = a.slice(1, 4), f[1] *= 0.01, f[2] *= 0.01, n = j(f), n[3] = +a[4]);return n;
            }, k = function k(e) {
              var f, d, a, n, t, o;if (e.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) return (4 === e.length || 7 === e.length) && (e = e.substr(1)), 3 === e.length && (e = e.split(""), e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), o = parseInt(e, 16), n = o >> 16, a = 255 & o >> 8, d = 255 & o, [n, a, d, 1];if (e.match(/^#?([A-Fa-f0-9]{8})$/)) return 9 === e.length && (e = e.substr(1)), o = parseInt(e, 16), n = 255 & o >> 24, a = 255 & o >> 16, d = 255 & o >> 8, f = 255 & o, [n, a, d, f];if (t = _(e)) return t;throw "unknown color: " + e;
            }, w = function w(e, f, d) {
              var a, n, t, o;return o = U(arguments), e = o[0], f = o[1], d = o[2], e /= 360, e < 1 / 3 ? (a = (1 - f) / 3, t = (1 + f * x(c * e) / x(l - c * e)) / 3, n = 1 - (a + t)) : e < 2 / 3 ? (e -= 1 / 3, t = (1 - f) / 3, n = (1 + f * x(c * e) / x(l - c * e)) / 3, a = 1 - (t + n)) : (e -= 2 / 3, n = (1 - f) / 3, a = (1 + f * x(c * e) / x(l - c * e)) / 3, t = 1 - (n + a)), t = R(3 * (d * t)), n = R(3 * (d * n)), a = R(3 * (d * a)), [255 * t, 255 * n, 255 * a];
            }, j = function j() {
              var e, f, d, a, n, t, o, i, r, l, c, s, b, h;if (b = U(arguments), a = b[0], i = b[1], t = b[2], 0 === i) o = d = e = 255 * t;else {
                for (c = [0, 0, 0], f = [0, 0, 0], l = 0.5 > t ? t * (1 + i) : t + i - t * i, r = 2 * t - l, a /= 360, c[0] = a + 1 / 3, c[1] = a, c[2] = a - 1 / 3, n = s = 0; 2 >= s; n = ++s) {
                  0 > c[n] && (c[n] += 1), 1 < c[n] && (c[n] -= 1), f[n] = 1 > 6 * c[n] ? r + 6 * (l - r) * c[n] : 1 > 2 * c[n] ? l : 2 > 3 * c[n] ? r + 6 * ((l - r) * (2 / 3 - c[n])) : r;
                }h = [$(255 * f[0]), $(255 * f[1]), $(255 * f[2])], o = h[0], d = h[1], e = h[2];
              }return [o, d, e];
            }, v = function v() {
              var e, d, f, a, o, i, l, c, r, s, t, b, h, u, g, p, m, y;return b = U(arguments), a = b[0], r = b[1], t = b[2], t *= 255, 0 === r ? c = f = e = t : (360 === a && (a = 0), 360 < a && (a -= 360), 0 > a && (a += 360), a /= 60, o = n(a), d = a - o, i = t * (1 - r), l = t * (1 - r * d), s = t * (1 - r * (1 - d)), 0 === o ? (h = [t, s, i], c = h[0], f = h[1], e = h[2]) : 1 === o ? (u = [l, t, i], c = u[0], f = u[1], e = u[2]) : 2 === o ? (g = [i, t, s], c = g[0], f = g[1], e = g[2]) : 3 === o ? (p = [i, l, t], c = p[0], f = p[1], e = p[2]) : 4 === o ? (m = [s, i, t], c = m[0], f = m[1], e = m[2]) : 5 === o ? (y = [t, i, l], c = y[0], f = y[1], e = y[2]) : void 0), (c = $(c), f = $(f), e = $(e), [c, f, e]);
            }, r = 18, s = 0.95047, h = 1, u = 1.08883, z = function z() {
              var e, f, a, n, t, o;return o = U(arguments), t = o[0], e = o[1], f = o[2], a = d(e * e + f * f), n = 180 * (Math.atan2(f, e) / Q), [t, a, n];
            }, B = function B(e, f, d) {
              var a, n, t, o, i, r, l;return void 0 !== e && 3 === e.length && (r = e, e = r[0], f = r[1], d = r[2]), void 0 !== e && 3 === e.length && (l = e, e = l[0], f = l[1], d = l[2]), o = (e + 16) / 116, t = o + f / 500, i = o - d / 200, t = S(t) * s, o = S(o) * h, i = S(i) * u, n = M(3.2404542 * t - 1.5371385 * o - 0.4985314 * i), a = M(-0.969266 * t + 1.8760108 * o + 0.041556 * i), d = M(0.0556434 * t - 0.2040259 * o + 1.0572252 * i), [R(n, 0, 255), R(a, 0, 255), R(d, 0, 255), 1];
            }, S = function S(e) {
              return 0.206893034 < e ? e * e * e : (e - 4 / 29) / 7.787037;
            }, M = function M(e) {
              return $(255 * (0.00304 >= e ? 12.92 * e : 1.055 * Z(e, 1 / 2.4) - 0.055));
            }, G = function G() {
              var e, f, d, a;return a = U(arguments), d = a[0], e = a[1], f = a[2], f = f * Q / 180, [d, I(f) * e, Math.sin(f) * e];
            }, P = function P(e, f, d) {
              var n, t, a, o, i, r, l;return r = G(e, f, d), n = r[0], t = r[1], a = r[2], l = B(n, t, a), i = l[0], o = l[1], a = l[2], [R(i, 0, 255), R(o, 0, 255), R(a, 0, 255)];
            }, A = function A(e, f, d) {
              var a;return a = U(arguments), e = a[0], f = a[1], d = a[2], e = q(e), f = q(f), d = q(d), 0.2126 * e + 0.7152 * f + 0.0722 * d;
            }, q = function q(e) {
              return e /= 255, 0.03928 >= e ? e / 12.92 : Z((e + 0.055) / 1.055, 2.4);
            }, C = function C() {
              var e, f, d, a, n, t;return t = U(arguments), d = t[0], f = t[1], e = t[2], n = d << 16 | f << 8 | e, a = "000000" + n.toString(16), "#" + a.substr(a.length - 6);
            }, L = function L() {
              var e, f, a, n, t, o, i, r, l;return l = U(arguments), i = l[0], a = l[1], f = l[2], e = 2 * Q, i /= 255, a /= 255, f /= 255, o = F(i, a, f), t = (i + a + f) / 3, r = 1 - o / t, 0 === r ? n = 0 : (n = (i - a + (i - f)) / 2, n /= d((i - a) * (i - a) + (i - f) * (a - f)), n = Math.acos(n), f > a && (n = e - n), n /= e), [360 * n, r, t];
            }, O = function O(e, d, a) {
              var n, t, o, i, r, l;return void 0 !== e && 3 <= e.length && (l = e, e = l[0], d = l[1], a = l[2]), e /= 255, d /= 255, a /= 255, i = F(e, d, a), o = f(e, d, a), t = (o + i) / 2, o === i ? (r = 0, n = H) : r = 0.5 > t ? (o - i) / (o + i) : (o - i) / (2 - o - i), e === o ? n = (d - a) / (o - i) : d === o ? n = 2 + (a - e) / (o - i) : a === o && (n = 4 + (e - d) / (o - i)), n *= 60, 0 > n && (n += 360), [n, r, t];
            }, T = function T() {
              var e, d, a, n, t, o, i, r, l, c;return c = U(arguments), i = c[0], a = c[1], e = c[2], o = F(i, a, e), t = f(i, a, e), d = t - o, l = t / 255, 0 === t ? (n = H, r = 0) : (r = d / t, i === t && (n = (a - e) / d), a === t && (n = 2 + (e - i) / d), e === t && (n = 4 + (i - a) / d), n *= 60, 0 > n && (n += 360)), [n, r, l];
            }, E = function E() {
              var e, f, d, a, n, t, o;return o = U(arguments), d = o[0], f = o[1], e = o[2], d = N(d), f = N(f), e = N(e), a = K((0.4124564 * d + 0.3575761 * f + 0.1804375 * e) / s), n = K((0.2126729 * d + 0.7151522 * f + 0.072175 * e) / h), t = K((0.0193339 * d + 0.119192 * f + 0.9503041 * e) / u), [116 * n - 16, 500 * (a - n), 200 * (n - t)];
            }, N = function N(e) {
              return 0.04045 >= (e /= 255) ? e / 12.92 : Z((e + 0.055) / 1.055, 2.4);
            }, K = function K(e) {
              return 0.008856 < e ? Z(e, 1 / 3) : 7.787037 * e + 4 / 29;
            }, Y = function Y() {
              var e, f, d, a, n, t, o;return t = U(arguments), n = t[0], d = t[1], f = t[2], o = E(n, d, f), a = o[0], e = o[1], f = o[2], z(a, e, f);
            }, y.scale = function (e, d) {
              var t, o, r, i, l, c, s, b, h, u, g, m, p, x, _, k, w, j, z, v, B;return k = "rgb", w = y("#ccc"), B = 0, p = !1, m = [0, 1], u = [], z = !1, v = [], _ = 0, x = 1, g = !1, j = 0, h = {}, c = function c(e, f) {
                var d, a, n, t, o, i, r;if (null == e && (e = ["#ddd", "#222"]), null != e && "string" === D(e) && null != (null == (o = y.brewer) ? void 0 : o[e]) && (e = y.brewer[e]), "array" === D(e)) {
                  for (e = e.slice(0), d = n = 0, i = e.length - 1; 0 <= i ? n <= i : n >= i; d = 0 <= i ? ++n : --n) {
                    a = e[d], "string" === D(a) && (e[d] = y(a));
                  }if (null != f) v = f;else for (v = [], d = t = 0, r = e.length - 1; 0 <= r ? t <= r : t >= r; d = 0 <= r ? ++t : --t) {
                    v.push(d / (e.length - 1));
                  }
                }return l(), u = e;
              }, s = function s(e) {
                return null == e && (e = []), m = e, _ = e[0], x = e[e.length - 1], l(), j = 2 === e.length ? 0 : e.length - 1;
              }, r = function r(e) {
                var f, d;if (null != m) {
                  for (d = m.length - 1, f = 0; f < d && e >= m[f];) {
                    f++;
                  }return f - 1;
                }return 0;
              }, b = function b(e) {
                return e;
              }, t = function t(e) {
                var f, d, a, t, n;return n = e, 2 < m.length && (t = m.length - 1, f = r(e), a = m[0] + (m[1] - m[0]) * (0 + 0.5 * B), d = m[t - 1] + (m[t] - m[t - 1]) * (1 - 0.5 * B), n = _ + (m[f] + 0.5 * (m[f + 1] - m[f]) - a) / (d - a) * (x - _)), n;
              }, i = function i(e, d) {
                var a, o, l, c, i, s, g, t, p;if (null == d && (d = !1), isNaN(e)) return w;if (d ? g = e : 2 < m.length ? (a = r(e), g = a / (j - 1)) : (g = l = _ === x ? 0 : (e - _) / (x - _), g = l = (e - _) / (x - _), g = F(1, f(0, g))), d || (g = b(g)), i = n(1e4 * g), h[i]) o = h[i];else {
                  if ("array" === D(u)) for (c = t = 0, p = v.length - 1; 0 <= p ? t <= p : t >= p; c = 0 <= p ? ++t : --t) {
                    if (s = v[c], g <= s) {
                      o = u[c];break;
                    }if (g >= s && c === v.length - 1) {
                      o = u[c];break;
                    }if (g > s && g < v[c + 1]) {
                      g = (g - s) / (v[c + 1] - s), o = y.interpolate(u[c], u[c + 1], g, k);break;
                    }
                  } else "function" === D(u) && (o = u(g));h[i] = o;
                }return o;
              }, l = function l() {
                return h = {};
              }, c(e, d), o = function o(e) {
                var f;return f = i(e), z && f[z] ? f[z]() : f;
              }, o.domain = function (e, f, a, n) {
                var t;return (null == a && (a = "e"), !arguments.length) ? m : (null != f && (t = y.analyze(e, n), e = 0 === f ? [t.min, t.max] : y.limits(t, a, f)), s(e), o);
              }, o.mode = function (e) {
                return arguments.length ? (k = e, l(), o) : k;
              }, o.range = function (e, f) {
                return c(e, f), o;
              }, o.out = function (e) {
                return z = e, o;
              }, o.spread = function (e) {
                return arguments.length ? (B = e, o) : B;
              }, o.correctLightness = function (e) {
                return arguments.length ? (g = e, l(), b = g ? function (e) {
                  var f, d, n, t, o, r, l, c, s;for (f = i(0, !0).lab()[0], d = i(1, !0).lab()[0], l = f > d, n = i(e, !0).lab()[0], o = f + (d - f) * e, t = n - o, c = 0, s = 1, r = 20; 0.01 < a(t) && 0 < r--;) {
                    (function () {
                      return l && (t *= -1), 0 > t ? (c = e, e += 0.5 * (s - e)) : (s = e, e += 0.5 * (c - e)), n = i(e, !0).lab()[0], t = n - o;
                    })();
                  }return e;
                } : function (e) {
                  return e;
                }, o) : g;
              }, o.colors = function (f) {
                var d, a, n, t, i, r;if (null == f && (f = "hex"), e = [], a = [], 2 < m.length) for (d = n = 1, r = m.length; 1 <= r ? n < r : n > r; d = 1 <= r ? ++n : --n) {
                  a.push(0.5 * (m[d - 1] + m[d]));
                } else a = m;for (t = 0, i = a.length; t < i; t++) {
                  d = a[t], e.push(o(d)[f]());
                }return e;
              }, o;
            }, null == (W = y.scales) && (y.scales = {}), y.scales.cool = function () {
              return y.scale([y.hsl(180, 1, .9), y.hsl(250, .7, .4)]);
            }, y.scales.hot = function () {
              return y.scale(["#000", "#f00", "#ff0", "#fff"], [0, 0.25, 0.75, 1]).mode("rgb");
            }, y.analyze = function (e, f, d) {
              var a, n, t, o, i, r, l;if (t = { min: V, max: -1 * V, sum: 0, values: [], count: 0 }, null == d && (d = function d() {
                return !0;
              }), a = function a(e) {
                null == e || isNaN(e) || (t.values.push(e), t.sum += e, e < t.min && (t.min = e), e > t.max && (t.max = e), t.count += 1);
              }, i = function i(e, n) {
                if (d(e, n)) return null != f && "function" === D(f) ? a(f(e)) : null != f && "string" === D(f) || "number" === D(f) ? a(e[f]) : a(e);
              }, "array" === D(e)) for (r = 0, l = e.length; r < l; r++) {
                o = e[r], i(o);
              } else for (n in e) {
                o = e[n], i(o, n);
              }return t.domain = [t.min, t.max], t.limits = function (e, f) {
                return y.limits(t, e, f);
              }, t;
            }, y.limits = function (e, f, d) {
              var t,
                  o,
                  r,
                  l,
                  c,
                  s,
                  b,
                  i,
                  h,
                  u,
                  g,
                  m,
                  x,
                  _,
                  k,
                  w,
                  j,
                  v,
                  z,
                  p,
                  B,
                  S,
                  G,
                  P,
                  R,
                  A,
                  q,
                  C,
                  L,
                  O,
                  T,
                  E,
                  Y,
                  N,
                  X,
                  U,
                  K,
                  M,
                  W,
                  F,
                  I,
                  Q,
                  H,
                  $,
                  J,
                  ee,
                  fe,
                  de,
                  ae,
                  ne,
                  te,
                  oe,
                  ie,
                  re,
                  le,
                  ce,
                  se = Math.log,
                  be = Math.LOG10E;if (null == f && (f = "equal"), null == d && (d = 7), "array" === D(e) && (e = y.analyze(e)), x = e.min, g = e.max, G = e.sum, A = e.values.sort(function (e, f) {
                return e - f;
              }), u = [], "c" === f.substr(0, 1) && (u.push(x), u.push(g)), "e" === f.substr(0, 1)) {
                for (u.push(x), b = q = 1, K = d - 1; 1 <= K ? q <= K : q >= K; b = 1 <= K ? ++q : --q) {
                  u.push(x + b / d * (g - x));
                }u.push(g);
              } else if ("l" === f.substr(0, 1)) {
                if (0 >= x) throw "Logarithmic scales are only possible for values > 0";for (_ = be * se(x), m = be * se(g), u.push(x), (b = C = 1, $ = d - 1); 1 <= $ ? C <= $ : C >= $; b = 1 <= $ ? ++C : --C) {
                  u.push(Z(10, _ + b / d * (m - _)));
                }u.push(g);
              } else if ("q" === f.substr(0, 1)) {
                for (u.push(x), b = L = 1, J = d - 1; 1 <= J ? L <= J : L >= J; b = 1 <= J ? ++L : --L) {
                  z = A.length * b / d, p = n(z), p === z ? u.push(A[p]) : (B = z - p, u.push(A[p] * B + A[p + 1] * (1 - B)));
                }u.push(g);
              } else if ("k" === f.substr(0, 1)) {
                for (w = A.length, t = Array(w), c = Array(d), S = !0, j = 0, r = null, r = [], r.push(x), (b = O = 1, ee = d - 1); 1 <= ee ? O <= ee : O >= ee; b = 1 <= ee ? ++O : --O) {
                  r.push(x + b / d * (g - x));
                }for (r.push(g); S;) {
                  for (i = T = 0, fe = d - 1; 0 <= fe ? T <= fe : T >= fe; i = 0 <= fe ? ++T : --T) {
                    c[i] = 0;
                  }for (b = E = 0, de = w - 1; 0 <= de ? E <= de : E >= de; b = 0 <= de ? ++E : --E) {
                    for (R = A[b], k = V, (i = Y = 0, ae = d - 1); 0 <= ae ? Y <= ae : Y >= ae; i = 0 <= ae ? ++Y : --Y) {
                      s = a(r[i] - R), s < k && (k = s, o = i);
                    }c[o]++, t[b] = o;
                  }for (v = Array(d), i = N = 0, ne = d - 1; 0 <= ne ? N <= ne : N >= ne; i = 0 <= ne ? ++N : --N) {
                    v[i] = null;
                  }for (b = X = 0, te = w - 1; 0 <= te ? X <= te : X >= te; b = 0 <= te ? ++X : --X) {
                    l = t[b], null === v[l] ? v[l] = A[b] : v[l] += A[b];
                  }for (i = U = 0, M = d - 1; 0 <= M ? U <= M : U >= M; i = 0 <= M ? ++U : --U) {
                    v[i] *= 1 / c[i];
                  }for (S = !1, i = oe = 0, W = d - 1; 0 <= W ? oe <= W : oe >= W; i = 0 <= W ? ++oe : --oe) {
                    if (v[i] !== r[b]) {
                      S = !0;break;
                    }
                  }r = v, j++, 200 < j && (S = !1);
                }for (h = {}, i = ie = 0, F = d - 1; 0 <= F ? ie <= F : ie >= F; i = 0 <= F ? ++ie : --ie) {
                  h[i] = [];
                }for (b = re = 0, I = w - 1; 0 <= I ? re <= I : re >= I; b = 0 <= I ? ++re : --re) {
                  l = t[b], h[l].push(A[b]);
                }for (P = [], i = le = 0, Q = d - 1; 0 <= Q ? le <= Q : le >= Q; i = 0 <= Q ? ++le : --le) {
                  P.push(h[i][0]), P.push(h[i][h[i].length - 1]);
                }for (P = P.sort(function (e, f) {
                  return e - f;
                }), u.push(P[0]), (b = ce = 1, H = P.length - 1); ce <= H; b = ce += 2) {
                  isNaN(P[b]) || u.push(P[b]);
                }
              }return u;
            }, y.brewer = g = { OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"], PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"], BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"], Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"], BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"], YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"], YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"], Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"], RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"], Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"], YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"], Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"], GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"], Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"], YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"], PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"], Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"], PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"], Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"], RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"], RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"], PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"], PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"], RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"], BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"], RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"], PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"], Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"], Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"], Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"], Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"], Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"], Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"], Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"], Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"] }, y.colors = m = { indigo: "#4b0082", gold: "#ffd700", hotpink: "#ff69b4", firebrick: "#b22222", indianred: "#cd5c5c", yellow: "#ffff00", mistyrose: "#ffe4e1", darkolivegreen: "#556b2f", olive: "#808000", darkseagreen: "#8fbc8f", pink: "#ffc0cb", tomato: "#ff6347", lightcoral: "#f08080", orangered: "#ff4500", navajowhite: "#ffdead", lime: "#00ff00", palegreen: "#98fb98", darkslategrey: "#2f4f4f", greenyellow: "#adff2f", burlywood: "#deb887", seashell: "#fff5ee", mediumspringgreen: "#00fa9a", fuchsia: "#ff00ff", papayawhip: "#ffefd5", blanchedalmond: "#ffebcd", chartreuse: "#7fff00", dimgray: "#696969", black: "#000000", peachpuff: "#ffdab9", springgreen: "#00ff7f", aquamarine: "#7fffd4", white: "#ffffff", orange: "#ffa500", lightsalmon: "#ffa07a", darkslategray: "#2f4f4f", brown: "#a52a2a", ivory: "#fffff0", dodgerblue: "#1e90ff", peru: "#cd853f", lawngreen: "#7cfc00", chocolate: "#d2691e", crimson: "#dc143c", forestgreen: "#228b22", darkgrey: "#a9a9a9", lightseagreen: "#20b2aa", cyan: "#00ffff", mintcream: "#f5fffa", silver: "#c0c0c0", antiquewhite: "#faebd7", mediumorchid: "#ba55d3", skyblue: "#87ceeb", gray: "#808080", darkturquoise: "#00ced1", goldenrod: "#daa520", darkgreen: "#006400", floralwhite: "#fffaf0", darkviolet: "#9400d3", darkgray: "#a9a9a9", moccasin: "#ffe4b5", saddlebrown: "#8b4513", grey: "#808080", darkslateblue: "#483d8b", lightskyblue: "#87cefa", lightpink: "#ffb6c1", mediumvioletred: "#c71585", slategrey: "#708090", red: "#ff0000", deeppink: "#ff1493", limegreen: "#32cd32", darkmagenta: "#8b008b", palegoldenrod: "#eee8aa", plum: "#dda0dd", turquoise: "#40e0d0", lightgrey: "#d3d3d3", lightgoldenrodyellow: "#fafad2", darkgoldenrod: "#b8860b", lavender: "#e6e6fa", maroon: "#800000", yellowgreen: "#9acd32", sandybrown: "#f4a460", thistle: "#d8bfd8", violet: "#ee82ee", navy: "#000080", magenta: "#ff00ff", dimgrey: "#696969", tan: "#d2b48c", rosybrown: "#bc8f8f", olivedrab: "#6b8e23", blue: "#0000ff", lightblue: "#add8e6", ghostwhite: "#f8f8ff", honeydew: "#f0fff0", cornflowerblue: "#6495ed", slateblue: "#6a5acd", linen: "#faf0e6", darkblue: "#00008b", powderblue: "#b0e0e6", seagreen: "#2e8b57", darkkhaki: "#bdb76b", snow: "#fffafa", sienna: "#a0522d", mediumblue: "#0000cd", royalblue: "#4169e1", lightcyan: "#e0ffff", green: "#008000", mediumpurple: "#9370db", midnightblue: "#191970", cornsilk: "#fff8dc", paleturquoise: "#afeeee", bisque: "#ffe4c4", slategray: "#708090", darkcyan: "#008b8b", khaki: "#f0e68c", wheat: "#f5deb3", teal: "#008080", darkorchid: "#9932cc", deepskyblue: "#00bfff", salmon: "#fa8072", darkred: "#8b0000", steelblue: "#4682b4", palevioletred: "#db7093", lightslategray: "#778899", aliceblue: "#f0f8ff", lightslategrey: "#778899", lightgreen: "#90ee90", orchid: "#da70d6", gainsboro: "#dcdcdc", mediumseagreen: "#3cb371", lightgray: "#d3d3d3", mediumturquoise: "#48d1cc", lemonchiffon: "#fffacd", cadetblue: "#5f9ea0", lightyellow: "#ffffe0", lavenderblush: "#fff0f5", coral: "#ff7f50", purple: "#800080", aqua: "#00ffff", whitesmoke: "#f5f5f5", mediumslateblue: "#7b68ee", darkorange: "#ff8c00", mediumaquamarine: "#66cdaa", darksalmon: "#e9967a", beige: "#f5f5dc", blueviolet: "#8a2be2", azure: "#f0ffff", lightsteelblue: "#b0c4de", oldlace: "#fdf5e6" }, D = function () {
              var e, f, d, a, n;for (e = {}, n = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"], (d = 0, a = n.length); d < a; d++) {
                f = n[d], e["[object " + f + "]"] = f.toLowerCase();
              }return function (f) {
                var d;return d = Object.prototype.toString.call(f), e[d] || "object";
              };
            }(), R = function R(e, f, d) {
              return null == f && (f = 0), null == d && (d = 1), e < f && (e = f), e > d && (e = d), e;
            }, U = function U(e) {
              return 3 <= e.length ? e : e[0];
            }, c = 2 * Q, l = Q / 3, x = I, _b = function b(e) {
              var f, d, a, n, o, r, l, c, t, i, s;return e = function () {
                var f, d, a;for (a = [], f = 0, d = e.length; f < d; f++) {
                  n = e[f], a.push(y(n));
                }return a;
              }(), 2 === e.length ? (t = function () {
                var f, d, a;for (a = [], f = 0, d = e.length; f < d; f++) {
                  n = e[f], a.push(n.lab());
                }return a;
              }(), o = t[0], r = t[1], f = function f(e) {
                var f, d;return d = function () {
                  var d, a;for (a = [], f = d = 0; 2 >= d; f = ++d) {
                    a.push(o[f] + e * (r[f] - o[f]));
                  }return a;
                }(), y.lab.apply(y, d);
              }) : 3 === e.length ? (i = function () {
                var f, d, a;for (a = [], f = 0, d = e.length; f < d; f++) {
                  n = e[f], a.push(n.lab());
                }return a;
              }(), o = i[0], r = i[1], l = i[2], f = function f(e) {
                var f, d;return d = function () {
                  var d, a;for (a = [], f = d = 0; 2 >= d; f = ++d) {
                    a.push((1 - e) * (1 - e) * o[f] + 2 * (1 - e) * e * r[f] + e * e * l[f]);
                  }return a;
                }(), y.lab.apply(y, d);
              }) : 4 === e.length ? (s = function () {
                var f, d, a;for (a = [], f = 0, d = e.length; f < d; f++) {
                  n = e[f], a.push(n.lab());
                }return a;
              }(), o = s[0], r = s[1], l = s[2], c = s[3], f = function f(e) {
                var f, d;return d = function () {
                  var d, a;for (a = [], f = d = 0; 2 >= d; f = ++d) {
                    a.push((1 - e) * (1 - e) * (1 - e) * o[f] + 3 * (1 - e) * (1 - e) * e * r[f] + 3 * (1 - e) * e * e * l[f] + e * e * e * c[f]);
                  }return a;
                }(), y.lab.apply(y, d);
              }) : 5 === e.length && (d = _b(e.slice(0, 3)), a = _b(e.slice(2, 5)), f = function f(e) {
                return 0.5 > e ? d(2 * e) : a(2 * (e - 0.5));
              }), f;
            }, y.interpolate.bezier = _b;
          }).call(this);
        }, {}], "/home/fmauneko/code/trianglify/node_modules/delaunator/index.js": [function (e, f) {
          "use strict";
          function t(f, a, n) {
            a || (a = m), n || (n = _);for (var u = Infinity, g = Infinity, w = -Infinity, j = -Infinity, v = this.coords = [], z = this.ids = new Uint32Array(f.length), B = 0; B < f.length; B++) {
              var i = f[B],
                  p = a(i),
                  x = n(i);z[B] = B, v[2 * B] = p, v[2 * B + 1] = x, p < u && (u = p), x < g && (g = x), p > w && (w = p), x > j && (j = x);
            }var y,
                S,
                G,
                P = (u + w) / 2,
                R = (g + j) / 2,
                A = Infinity;for (B = 0; B < f.length; B++) {
              var C = o(P, R, v[2 * B], v[2 * B + 1]);C < A && (y = B, A = C);
            }for (A = Infinity, B = 0; B < f.length; B++) {
              B !== y && (C = o(v[2 * y], v[2 * y + 1], v[2 * B], v[2 * B + 1]), C < A && 0 < C && (S = B, A = C));
            }var L = Infinity;for (B = 0; B < f.length; B++) {
              if (B !== y && B !== S) {
                var O = c(v[2 * y], v[2 * y + 1], v[2 * S], v[2 * S + 1], v[2 * B], v[2 * B + 1]);O < L && (G = B, L = O);
              }
            }if (L === Infinity) throw new Error("No Delaunay triangulation exists for this input.");if (0 > l(v[2 * y], v[2 * y + 1], v[2 * S], v[2 * S + 1], v[2 * G], v[2 * G + 1])) {
              var T = S;S = G, G = T;
            }var E = v[2 * y],
                Y = v[2 * y + 1],
                N = v[2 * S],
                X = v[2 * S + 1],
                D = v[2 * G],
                U = v[2 * G + 1],
                K = s(E, Y, N, X, D, U);for (this._cx = K.x, this._cy = K.y, h(z, v, 0, z.length - 1, K.x, K.y), this._hashSize = Math.ceil(d(f.length)), this._hash = [], B = 0; B < this._hashSize; B++) {
              this._hash[B] = null;
            }var M = this.hull = b(v, y);this._hashEdge(M), M.t = 0, M = b(v, S, M), this._hashEdge(M), M.t = 1, M = b(v, G, M), this._hashEdge(M), M.t = 2;var e = 2 * f.length - 5,
                W = this.triangles = new Uint32Array(3 * e),
                V = this.halfedges = new Int32Array(3 * e);this.trianglesLen = 0, this._addTriangle(y, S, G, -1, -1, -1);for (var F, I, Z = 0; Z < z.length; Z++) {
              if (B = z[Z], p = v[2 * B], x = v[2 * B + 1], (p !== F || x !== I) && (F = p, I = x, (p !== E || x !== Y) && (p !== N || x !== X) && (p !== D || x !== U))) {
                var k,
                    Q = this._hashKey(p, x),
                    H = Q;do {
                  k = this._hash[H], H = (H + 1) % this._hashSize;
                } while ((!k || k.removed) && H !== Q);for (M = k; 0 <= l(p, x, M.x, M.y, M.next.x, M.next.y);) {
                  if (M = M.next, M === k) throw new Error("Something is wrong with the input points.");
                }var $ = M === k,
                    J = this._addTriangle(M.i, B, M.next.i, -1, -1, M.t);M.t = J, M = b(v, B, M), M.t = this._legalize(J + 2), M.prev.prev.t === V[J + 1] && (M.prev.prev.t = J + 2);for (var t = M.next; 0 > l(p, x, t.x, t.y, t.next.x, t.next.y);) {
                  J = this._addTriangle(t.i, B, t.next.i, t.prev.t, -1, t.t), t.prev.t = this._legalize(J + 2), this.hull = r(t), t = t.next;
                }if ($) for (t = M.prev; 0 > l(p, x, t.prev.x, t.prev.y, t.x, t.y);) {
                  J = this._addTriangle(t.prev.i, B, t.i, -1, t.t, t.prev.t), this._legalize(J + 2), t.prev.t = J, this.hull = r(t), t = t.prev;
                }this._hashEdge(M), this._hashEdge(M.prev);
              }
            }this.triangles = W.subarray(0, this.trianglesLen), this.halfedges = V.subarray(0, this.trianglesLen);
          }function o(e, f, d, a) {
            var n = e - d,
                t = f - a;return n * n + t * t;
          }function l(e, f, d, a, n, t) {
            return (a - f) * (n - d) - (d - e) * (t - a);
          }function i(e, f, d, a, n, t, o, i) {
            e -= o, f -= i, d -= o, a -= i, n -= o, t -= i;var r = e * e + f * f,
                l = d * d + a * a,
                c = n * n + t * t;return 0 > e * (a * c - l * t) - f * (d * c - l * n) + r * (d * t - a * n);
          }function c(e, f, a, n, t, o) {
            a -= e, n -= f, t -= e, o -= f;var i = a * a + n * n,
                r = t * t + o * o;if (0 == i || 0 == r) return Infinity;var l = a * o - n * t;if (0 == l) return Infinity;var d = 0.5 * (o * i - n * r) / l,
                c = 0.5 * (a * r - t * i) / l;return d * d + c * c;
          }function s(e, f, a, n, t, o) {
            a -= e, n -= f, t -= e, o -= f;var i = a * a + n * n,
                r = t * t + o * o,
                l = a * o - n * t,
                d = 0.5 * (o * i - n * r) / l,
                c = 0.5 * (a * r - t * i) / l;return { x: e + d, y: f + c };
          }function b(e, f, d) {
            var a = { i: f, x: e[2 * f], y: e[2 * f + 1], t: 0, prev: null, next: null, removed: !1 };return d ? (a.next = d.next, a.prev = d, d.next.prev = a, d.next = a) : (a.prev = a, a.next = a), a;
          }function r(e) {
            return e.prev.next = e.next, e.next.prev = e.prev, e.removed = !0, e.prev;
          }function h(e, f, d, a, n, t) {
            var o, i, r;if (20 >= a - d) for (o = d + 1; o <= a; o++) {
              for (r = e[o], i = o - 1; i >= d && 0 < u(f, e[i], r, n, t);) {
                e[i + 1] = e[i--];
              }e[i + 1] = r;
            } else {
              for (o = d + 1, i = a, g(e, d + a >> 1, o), 0 < u(f, e[d], e[a], n, t) && g(e, d, a), 0 < u(f, e[o], e[a], n, t) && g(e, o, a), 0 < u(f, e[d], e[o], n, t) && g(e, d, o), r = e[o];;) {
                do {
                  o++;
                } while (0 > u(f, e[o], r, n, t));do {
                  i--;
                } while (0 < u(f, e[i], r, n, t));if (i < o) break;g(e, o, i);
              }e[d + 1] = e[i], e[i] = r, a - o + 1 >= i - d ? (h(e, f, o, a, n, t), h(e, f, d, i - 1, n, t)) : (h(e, f, d, i - 1, n, t), h(e, f, o, a, n, t));
            }
          }function u(e, f, d, a, n) {
            var t = o(e[2 * f], e[2 * f + 1], a, n),
                i = o(e[2 * d], e[2 * d + 1], a, n);return t - i || e[2 * f] - e[2 * d] || e[2 * f + 1] - e[2 * d + 1];
          }function g(e, f, d) {
            var a = e[f];e[f] = e[d], e[d] = a;
          }function m(e) {
            return e[0];
          }function _(e) {
            return e[1];
          }f.exports = t, t.prototype = { _hashEdge: function _hashEdge(f) {
              this._hash[this._hashKey(f.x, f.y)] = f;
            }, _hashKey: function _hashKey(e, f) {
              var d = e - this._cx,
                  t = f - this._cy,
                  o = 1 - d / (a(d) + a(t));return n((2 + (0 > t ? -o : o)) / 4 * this._hashSize);
            }, _legalize: function _legalize(e) {
              var f = this.triangles,
                  d = this.coords,
                  a = this.halfedges,
                  n = a[e],
                  t = e - e % 3,
                  o = n - n % 3,
                  r = t + (e + 2) % 3,
                  l = o + (n + 2) % 3,
                  c = f[r],
                  s = f[e],
                  b = f[t + (e + 1) % 3],
                  h = f[l],
                  u = i(d[2 * c], d[2 * c + 1], d[2 * s], d[2 * s + 1], d[2 * b], d[2 * b + 1], d[2 * h], d[2 * h + 1]);return u ? (f[e] = h, f[n] = c, this._link(e, a[l]), this._link(n, a[r]), this._link(r, l), this._legalize(e), this._legalize(o + (n + 1) % 3)) : r;
            }, _link: function _link(e, f) {
              this.halfedges[e] = f, -1 !== f && (this.halfedges[f] = e);
            }, _addTriangle: function _addTriangle(e, f, d, n, a, o) {
              var i = this.trianglesLen;return this.triangles[i] = e, this.triangles[i + 1] = f, this.triangles[i + 2] = d, this._link(i, n), this._link(i + 1, a), this._link(i + 2, o), this.trianglesLen += 3, i;
            } };
        }, {}], "/home/fmauneko/code/trianglify/node_modules/process/browser.js": [function (e, f) {
          function d() {
            if (!o) {
              o = !0;for (var e, f = t.length; f;) {
                e = t, t = [];for (var d = -1; ++d < f;) {
                  e[d]();
                }f = t.length;
              }o = !1;
            }
          }function a() {}var n = f.exports = {},
              t = [],
              o = !1;n.nextTick = function (e) {
            t.push(e), o || setTimeout(d, 0);
          }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = a, n.addListener = a, n.once = a, n.off = a, n.removeListener = a, n.removeAllListeners = a, n.emit = a, n.binding = function () {
            throw new Error("process.binding is not supported");
          }, n.cwd = function () {
            return "/";
          }, n.chdir = function () {
            throw new Error("process.chdir is not supported");
          }, n.umask = function () {
            return 0;
          };
        }, {}], "/home/fmauneko/code/trianglify/node_modules/seedrandom/index.js": [function (e, f) {
          var d = e("./lib/alea"),
              a = e("./lib/xor128"),
              n = e("./lib/xorwow"),
              t = e("./lib/xorshift7"),
              o = e("./lib/xor4096"),
              i = e("./lib/tychei"),
              r = e("./seedrandom");r.alea = d, r.xor128 = a, r.xorwow = n, r.xorshift7 = t, r.xor4096 = o, r.tychei = i, f.exports = r;
        }, { "./lib/alea": "/home/fmauneko/code/trianglify/node_modules/seedrandom/lib/alea.js", "./lib/tychei": "/home/fmauneko/code/trianglify/node_modules/seedrandom/lib/tychei.js", "./lib/xor128": "/home/fmauneko/code/trianglify/node_modules/seedrandom/lib/xor128.js", "./lib/xor4096": "/home/fmauneko/code/trianglify/node_modules/seedrandom/lib/xor4096.js", "./lib/xorshift7": "/home/fmauneko/code/trianglify/node_modules/seedrandom/lib/xorshift7.js", "./lib/xorwow": "/home/fmauneko/code/trianglify/node_modules/seedrandom/lib/xorwow.js", "./seedrandom": "/home/fmauneko/code/trianglify/node_modules/seedrandom/seedrandom.js" }], "/home/fmauneko/code/trianglify/node_modules/seedrandom/lib/alea.js": [function (f, d) {
          (function (e, f, d) {
            function a(e) {
              var f = this,
                  d = o();f.next = function () {
                var e = 2091639 * f.s0 + 2.3283064365386963e-10 * f.c;return f.s0 = f.s1, f.s1 = f.s2, f.s2 = e - (f.c = 0 | e);
              }, f.c = 1, f.s0 = d(" "), f.s1 = d(" "), f.s2 = d(" "), f.s0 -= d(e), 0 > f.s0 && (f.s0 += 1), f.s1 -= d(e), 0 > f.s1 && (f.s1 += 1), f.s2 -= d(e), 0 > f.s2 && (f.s2 += 1), d = null;
            }function n(e, f) {
              return f.c = e.c, f.s0 = e.s0, f.s1 = e.s1, f.s2 = e.s2, f;
            }function t(e, f) {
              var d = new a(e),
                  t = f && f.state,
                  o = d.next;return o.int32 = function () {
                return 0 | 4294967296 * d.next();
              }, o.double = function () {
                return o() + 1.1102230246251565e-16 * (0 | 2097152 * o());
              }, o.quick = o, t && ("object" == (typeof t === 'undefined' ? 'undefined' : _typeof(t)) && n(t, d), o.state = function () {
                return n(d, {});
              }), o;
            }function o() {
              var e = 4022871197;return function (f) {
                f = f.toString();for (var d = 0; d < f.length; d++) {
                  e += f.charCodeAt(d);var a = 0.02519603282416938 * e;e = a >>> 0, a -= e, a *= e, e = a >>> 0, a -= e, e += 4294967296 * a;
                }return 2.3283064365386963e-10 * (e >>> 0);
              };
            }f && f.exports ? f.exports = t : d && d.amd ? d(function () {
              return t;
            }) : this.alea = t;
          })(this, "object" == (typeof d === 'undefined' ? 'undefined' : _typeof(d)) && d, "function" == typeof e && e);
        }, {}], "/home/fmauneko/code/trianglify/node_modules/seedrandom/lib/tychei.js": [function (f, d) {
          (function (e, f, d) {
            function a(e) {
              var f = this,
                  d = "";f.next = function () {
                var e = f.b,
                    n = f.c,
                    t = f.d,
                    d = f.a;return e = e << 25 ^ e >>> 7 ^ n, n = 0 | n - t, t = t << 24 ^ t >>> 8 ^ d, d = 0 | d - e, f.b = e = e << 20 ^ e >>> 12 ^ n, f.c = n = 0 | n - t, f.d = t << 16 ^ n >>> 16 ^ d, f.a = 0 | d - e;
              }, f.a = 0, f.b = 0, f.c = -1640531527, f.d = 1367130551, e === n(e) ? (f.a = 0 | e / 4294967296, f.b = 0 | e) : d += e;for (var a = 0; a < d.length + 20; a++) {
                f.b ^= 0 | d.charCodeAt(a), f.next();
              }
            }function t(e, f) {
              return f.a = e.a, f.b = e.b, f.c = e.c, f.d = e.d, f;
            }function o(e, f) {
              var d = new a(e),
                  n = f && f.state,
                  o = function o() {
                return (d.next() >>> 0) / 4294967296;
              };return o.double = function () {
                do {
                  var e = d.next() >>> 11,
                      f = (d.next() >>> 0) / 4294967296,
                      a = (e + f) / 2097152;
                } while (0 === a);return a;
              }, o.int32 = d.next, o.quick = o, n && ("object" == (typeof n === 'undefined' ? 'undefined' : _typeof(n)) && t(n, d), o.state = function () {
                return t(d, {});
              }), o;
            }f && f.exports ? f.exports = o : d && d.amd ? d(function () {
              return o;
            }) : this.tychei = o;
          })(this, "object" == (typeof d === 'undefined' ? 'undefined' : _typeof(d)) && d, "function" == typeof e && e);
        }, {}], "/home/fmauneko/code/trianglify/node_modules/seedrandom/lib/xor128.js": [function (f, d) {
          (function (e, f, d) {
            function a(e) {
              var f = this,
                  d = "";f.x = 0, f.y = 0, f.z = 0, f.w = 0, f.next = function () {
                var e = f.x ^ f.x << 11;return f.x = f.y, f.y = f.z, f.z = f.w, f.w ^= f.w >>> 19 ^ e ^ e >>> 8;
              }, e === (0 | e) ? f.x = e : d += e;for (var a = 0; a < d.length + 64; a++) {
                f.x ^= 0 | d.charCodeAt(a), f.next();
              }
            }function n(e, f) {
              return f.x = e.x, f.y = e.y, f.z = e.z, f.w = e.w, f;
            }function t(e, f) {
              var d = new a(e),
                  t = f && f.state,
                  o = function o() {
                return (d.next() >>> 0) / 4294967296;
              };return o.double = function () {
                do {
                  var e = d.next() >>> 11,
                      f = (d.next() >>> 0) / 4294967296,
                      a = (e + f) / 2097152;
                } while (0 === a);return a;
              }, o.int32 = d.next, o.quick = o, t && ("object" == (typeof t === 'undefined' ? 'undefined' : _typeof(t)) && n(t, d), o.state = function () {
                return n(d, {});
              }), o;
            }f && f.exports ? f.exports = t : d && d.amd ? d(function () {
              return t;
            }) : this.xor128 = t;
          })(this, "object" == (typeof d === 'undefined' ? 'undefined' : _typeof(d)) && d, "function" == typeof e && e);
        }, {}], "/home/fmauneko/code/trianglify/node_modules/seedrandom/lib/xor4096.js": [function (d, a) {
          (function (e, d, a) {
            function n(e) {
              var d = this;d.next = function () {
                var e,
                    f,
                    a = d.w,
                    n = d.X,
                    t = d.i;return d.w = a = 0 | a + 1640531527, f = n[127 & t + 34], e = n[t = 127 & t + 1], f ^= f << 13, e ^= e << 17, f ^= f >>> 15, e ^= e >>> 12, f = n[t] = f ^ e, d.i = t, 0 | f + (a ^ a >>> 16);
              }, function (e, d) {
                var a,
                    n,
                    t,
                    o,
                    i,
                    r = [],
                    l = 128;for (d === (0 | d) ? (n = d, d = null) : (d += "\0", n = 0, l = f(l, d.length)), t = 0, o = -32; o < l; ++o) {
                  d && (n ^= d.charCodeAt((o + 32) % d.length)), 0 === o && (i = n), n ^= n << 10, n ^= n >>> 15, n ^= n << 4, n ^= n >>> 13, 0 <= o && (i = 0 | i + 1640531527, a = r[127 & o] ^= n + i, t = 0 == a ? t + 1 : 0);
                }for (128 <= t && (r[127 & (d && d.length || 0)] = -1), t = 127, o = 512; 0 < o; --o) {
                  n = r[127 & t + 34], a = r[t = 127 & t + 1], n ^= n << 13, a ^= a << 17, n ^= n >>> 15, a ^= a >>> 12, r[t] = n ^ a;
                }e.w = i, e.X = r, e.i = t;
              }(d, e);
            }function t(e, f) {
              return f.i = e.i, f.w = e.w, f.X = e.X.slice(), f;
            }function o(e, f) {
              null == e && (e = +new Date());var d = new n(e),
                  a = f && f.state,
                  o = function o() {
                return (d.next() >>> 0) / 4294967296;
              };return o.double = function () {
                do {
                  var e = d.next() >>> 11,
                      f = (d.next() >>> 0) / 4294967296,
                      a = (e + f) / 2097152;
                } while (0 === a);return a;
              }, o.int32 = d.next, o.quick = o, a && (a.X && t(a, d), o.state = function () {
                return t(d, {});
              }), o;
            }d && d.exports ? d.exports = o : a && a.amd ? a(function () {
              return o;
            }) : this.xor4096 = o;
          })(this, "object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a)) && a, "function" == typeof e && e);
        }, {}], "/home/fmauneko/code/trianglify/node_modules/seedrandom/lib/xorshift7.js": [function (f, d) {
          (function (e, f, d) {
            function a(e) {
              var f = this;f.next = function () {
                var e,
                    d,
                    a = f.x,
                    n = f.i;return e = a[n], e ^= e >>> 7, d = e ^ e << 24, e = a[7 & n + 1], d ^= e ^ e >>> 10, e = a[7 & n + 3], d ^= e ^ e >>> 3, e = a[7 & n + 4], d ^= e ^ e << 7, e = a[7 & n + 7], e ^= e << 13, d ^= e ^ e << 9, a[n] = d, f.i = 7 & n + 1, d;
              }, function (e, f) {
                var d,
                    a,
                    n = [];if (f === (0 | f)) a = n[0] = f;else for (f = "" + f, d = 0; d < f.length; ++d) {
                  n[7 & d] = n[7 & d] << 15 ^ f.charCodeAt(d) + n[7 & d + 1] << 13;
                }for (; 8 > n.length;) {
                  n.push(0);
                }for (d = 0; 8 > d && 0 === n[d]; ++d) {}for (a = 8 == d ? n[7] = -1 : n[d], e.x = n, e.i = 0, d = 256; 0 < d; --d) {
                  e.next();
                }
              }(f, e);
            }function n(e, f) {
              return f.x = e.x.slice(), f.i = e.i, f;
            }function t(e, f) {
              null == e && (e = +new Date());var d = new a(e),
                  t = f && f.state,
                  o = function o() {
                return (d.next() >>> 0) / 4294967296;
              };return o.double = function () {
                do {
                  var e = d.next() >>> 11,
                      f = (d.next() >>> 0) / 4294967296,
                      a = (e + f) / 2097152;
                } while (0 === a);return a;
              }, o.int32 = d.next, o.quick = o, t && (t.x && n(t, d), o.state = function () {
                return n(d, {});
              }), o;
            }f && f.exports ? f.exports = t : d && d.amd ? d(function () {
              return t;
            }) : this.xorshift7 = t;
          })(this, "object" == (typeof d === 'undefined' ? 'undefined' : _typeof(d)) && d, "function" == typeof e && e);
        }, {}], "/home/fmauneko/code/trianglify/node_modules/seedrandom/lib/xorwow.js": [function (f, d) {
          (function (e, f, d) {
            function a(e) {
              var f = this,
                  d = "";f.next = function () {
                var e = f.x ^ f.x >>> 2;return f.x = f.y, f.y = f.z, f.z = f.w, f.w = f.v, 0 | (f.d = 0 | f.d + 362437) + (f.v = f.v ^ f.v << 4 ^ (e ^ e << 1));
              }, f.x = 0, f.y = 0, f.z = 0, f.w = 0, f.v = 0, e === (0 | e) ? f.x = e : d += e;for (var a = 0; a < d.length + 64; a++) {
                f.x ^= 0 | d.charCodeAt(a), a == d.length && (f.d = f.x << 10 ^ f.x >>> 4), f.next();
              }
            }function n(e, f) {
              return f.x = e.x, f.y = e.y, f.z = e.z, f.w = e.w, f.v = e.v, f.d = e.d, f;
            }function t(e, f) {
              var d = new a(e),
                  t = f && f.state,
                  o = function o() {
                return (d.next() >>> 0) / 4294967296;
              };return o.double = function () {
                do {
                  var e = d.next() >>> 11,
                      f = (d.next() >>> 0) / 4294967296,
                      a = (e + f) / 2097152;
                } while (0 === a);return a;
              }, o.int32 = d.next, o.quick = o, t && ("object" == (typeof t === 'undefined' ? 'undefined' : _typeof(t)) && n(t, d), o.state = function () {
                return n(d, {});
              }), o;
            }f && f.exports ? f.exports = t : d && d.amd ? d(function () {
              return t;
            }) : this.xorwow = t;
          })(this, "object" == (typeof d === 'undefined' ? 'undefined' : _typeof(d)) && d, "function" == typeof e && e);
        }, {}], "/home/fmauneko/code/trianglify/node_modules/seedrandom/seedrandom.js": [function (f, d) {
          (function (a, n) {
            function t(e, f, d) {
              var t = [];f = !0 == f ? { entropy: !0 } : f || {};var b = l(r(f.entropy ? [e, s(a)] : null == e ? c() : e, 3), t),
                  h = new o(t),
                  x = function x() {
                for (var e = h.g(g), f = m, d = 0; e < y;) {
                  e = (e + d) * u, f *= u, d = h.g(1);
                }for (; e >= _;) {
                  e /= 2, f /= 2, d >>>= 1;
                }return (e + d) / f;
              };return x.int32 = function () {
                return 0 | h.g(4);
              }, x.quick = function () {
                return h.g(4) / 4294967296;
              }, x.double = x, l(s(h.S), a), (f.pass || d || function (e, f, d, a) {
                return a && (a.S && i(a, h), e.state = function () {
                  return i(h, {});
                }), d ? (n[p] = e, f) : e;
              })(x, b, "global" in f ? f.global : this == n, f.state);
            }function o(e) {
              var f,
                  d = e.length,
                  a = this,
                  n = 0,
                  t = a.i = a.j = 0,
                  o = a.S = [];for (d || (e = [d++]); n < u;) {
                o[n] = n++;
              }for (n = 0; n < u; n++) {
                o[n] = o[t = x & t + e[n % d] + (f = o[n])], o[t] = f;
              }(a.g = function (e) {
                for (var f, d = 0, n = a.i, t = a.j, o = a.S; e--;) {
                  f = o[n = x & n + 1], d = d * u + o[x & (o[n] = o[t = x & t + f]) + (o[t] = f)];
                }return a.i = n, a.j = t, d;
              })(u);
            }function i(e, f) {
              return f.i = e.i, f.j = e.j, f.S = e.S.slice(), f;
            }function r(e, f) {
              var d,
                  a = [],
                  n = typeof e === 'undefined' ? 'undefined' : _typeof(e);if (f && "object" == n) for (d in e) {
                try {
                  a.push(r(e[d], f - 1));
                } catch (f) {}
              }return a.length ? a : "string" == n ? e : e + "\0";
            }function l(e, f) {
              for (var d, a = e + "", n = 0; n < a.length;) {
                f[x & n] = x & (d ^= 19 * f[x & n]) + a.charCodeAt(n++);
              }return s(f);
            }function c() {
              try {
                var e;return b && (e = b.randomBytes) ? e = e(u) : (e = new Uint8Array(u), (h.crypto || h.msCrypto).getRandomValues(e)), s(e);
              } catch (n) {
                var f = h.navigator,
                    d = f && f.plugins;return [+new Date(), h, d, h.screen, s(a)];
              }
            }function s(e) {
              return String.fromCharCode.apply(0, e);
            }var b,
                h = this,
                u = 256,
                g = 6,
                p = "random",
                m = n.pow(u, g),
                y = n.pow(2, 52),
                _ = 2 * y,
                x = u - 1;if (n["seed" + p] = t, l(n.random(), a), "object" == (typeof d === 'undefined' ? 'undefined' : _typeof(d)) && d.exports) {
              d.exports = t;try {
                b = f("crypto");
              } catch (e) {}
            } else "function" == typeof e && e.amd && e(function () {
              return t;
            });
          })([], Math);
        }, { crypto: !1 }] }, {}, ["./lib/trianglify.js"])("./lib/trianglify.js");
    });

    /***/
  }

  /******/
});