(() => {
  // node_modules/@upsetjs/bundle/dist/index.js
  function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof(obj);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _slicedToArray(arr, i2) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _iterableToArrayLimit(arr, i2) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null)
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i2 && _arr.length === i2)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _unsupportedIterableToArray(o2, minLen) {
    if (!o2)
      return;
    if (typeof o2 === "string")
      return _arrayLikeToArray(o2, minLen);
    var n2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (n2 === "Object" && o2.constructor)
      n2 = o2.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o2);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray(o2, minLen);
  }
  function _arrayLikeToArray(arr, len2) {
    if (len2 == null || len2 > arr.length)
      len2 = arr.length;
    for (var i2 = 0, arr2 = new Array(len2); i2 < len2; i2++)
      arr2[i2] = arr[i2];
    return arr2;
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _createForOfIteratorHelper(o2, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o2[Symbol.iterator] || o2["@@iterator"];
    if (!it) {
      if (Array.isArray(o2) || (it = _unsupportedIterableToArray(o2)) || allowArrayLike && o2 && typeof o2.length === "number") {
        if (it)
          o2 = it;
        var i2 = 0;
        var F2 = function() {
        };
        return {
          s: F2,
          n: function() {
            if (i2 >= o2.length)
              return {
                done: true
              };
            return {
              done: false,
              value: o2[i2++]
            };
          },
          e: function(e2) {
            throw e2;
          },
          f: F2
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
      s: function() {
        it = it.call(o2);
      },
      n: function() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function(e2) {
        didErr = true;
        err = e2;
      },
      f: function() {
        try {
          if (!normalCompletion && it.return != null)
            it.return();
        } finally {
          if (didErr)
            throw err;
        }
      }
    };
  }
  var n;
  var l$1;
  var u$1;
  var t$1;
  var r$1;
  var o$1;
  var f$1;
  var e$1 = {};
  var c$1 = [];
  var s$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function a$1(n2, l2) {
    for (var u2 in l2) {
      n2[u2] = l2[u2];
    }
    return n2;
  }
  function h$1(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
  }
  function v$1(l2, u2, i2) {
    var t2, r2, o2, f2 = {};
    for (o2 in u2) {
      "key" == o2 ? t2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : f2[o2] = u2[o2];
    }
    if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
      for (o2 in l2.defaultProps) {
        void 0 === f2[o2] && (f2[o2] = l2.defaultProps[o2]);
      }
    return y$1(l2, f2, t2, r2, null);
  }
  function y$1(n2, i2, t2, r2, o2) {
    var f2 = {
      type: n2,
      props: i2,
      key: t2,
      ref: r2,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: null == o2 ? ++u$1 : o2
    };
    return null == o2 && null != l$1.vnode && l$1.vnode(f2), f2;
  }
  function p$1() {
    return {
      current: null
    };
  }
  function d$1(n2) {
    return n2.children;
  }
  function _$1(n2, l2) {
    this.props = n2, this.context = l2;
  }
  function k$2(n2, l2) {
    if (null == l2)
      return n2.__ ? k$2(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u2; l2 < n2.__k.length; l2++) {
      if (null != (u2 = n2.__k[l2]) && null != u2.__e)
        return u2.__e;
    }
    return "function" == typeof n2.type ? k$2(n2) : null;
  }
  function b$1(n2) {
    var l2, u2;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++) {
        if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
          n2.__e = n2.__c.base = u2.__e;
          break;
        }
      }
      return b$1(n2);
    }
  }
  function m$1(n2) {
    (!n2.__d && (n2.__d = true) && t$1.push(n2) && !g$2.__r++ || o$1 !== l$1.debounceRendering) && ((o$1 = l$1.debounceRendering) || r$1)(g$2);
  }
  function g$2() {
    for (var n2; g$2.__r = t$1.length; ) {
      n2 = t$1.sort(function(n3, l2) {
        return n3.__v.__b - l2.__v.__b;
      }), t$1 = [], n2.some(function(n3) {
        var l2, u2, i2, t2, r2, o2;
        n3.__d && (r2 = (t2 = (l2 = n3).__v).__e, (o2 = l2.__P) && (u2 = [], (i2 = a$1({}, t2)).__v = t2.__v + 1, j$2(o2, t2, i2, l2.__n, void 0 !== o2.ownerSVGElement, null != t2.__h ? [r2] : null, u2, null == r2 ? k$2(t2) : r2, t2.__h), z$1(u2, t2), t2.__e != r2 && b$1(t2)));
      });
    }
  }
  function w$2(n2, l2, u2, i2, t2, r2, o2, f2, s2, a2) {
    var h2, v2, p2, _2, b2, m2, g2, w2 = i2 && i2.__k || c$1, A2 = w2.length;
    for (u2.__k = [], h2 = 0; h2 < l2.length; h2++) {
      if (null != (_2 = u2.__k[h2] = null == (_2 = l2[h2]) || "boolean" == typeof _2 ? null : "string" == typeof _2 || "number" == typeof _2 || "bigint" == typeof _2 ? y$1(null, _2, null, null, _2) : Array.isArray(_2) ? y$1(d$1, {
        children: _2
      }, null, null, null) : _2.__b > 0 ? y$1(_2.type, _2.props, _2.key, null, _2.__v) : _2)) {
        if (_2.__ = u2, _2.__b = u2.__b + 1, null === (p2 = w2[h2]) || p2 && _2.key == p2.key && _2.type === p2.type)
          w2[h2] = void 0;
        else
          for (v2 = 0; v2 < A2; v2++) {
            if ((p2 = w2[v2]) && _2.key == p2.key && _2.type === p2.type) {
              w2[v2] = void 0;
              break;
            }
            p2 = null;
          }
        j$2(n2, _2, p2 = p2 || e$1, t2, r2, o2, f2, s2, a2), b2 = _2.__e, (v2 = _2.ref) && p2.ref != v2 && (g2 || (g2 = []), p2.ref && g2.push(p2.ref, null, _2), g2.push(v2, _2.__c || b2, _2)), null != b2 ? (null == m2 && (m2 = b2), "function" == typeof _2.type && _2.__k === p2.__k ? _2.__d = s2 = x$2(_2, s2, n2) : s2 = P$1(n2, _2, p2, w2, b2, s2), "function" == typeof u2.type && (u2.__d = s2)) : s2 && p2.__e == s2 && s2.parentNode != n2 && (s2 = k$2(p2));
      }
    }
    for (u2.__e = m2, h2 = A2; h2--; ) {
      null != w2[h2] && ("function" == typeof u2.type && null != w2[h2].__e && w2[h2].__e == u2.__d && (u2.__d = k$2(i2, h2 + 1)), N$1(w2[h2], w2[h2]));
    }
    if (g2)
      for (h2 = 0; h2 < g2.length; h2++) {
        M$1(g2[h2], g2[++h2], g2[++h2]);
      }
  }
  function x$2(n2, l2, u2) {
    for (var i2, t2 = n2.__k, r2 = 0; t2 && r2 < t2.length; r2++) {
      (i2 = t2[r2]) && (i2.__ = n2, l2 = "function" == typeof i2.type ? x$2(i2, l2, u2) : P$1(u2, i2, i2, t2, i2.__e, l2));
    }
    return l2;
  }
  function A$2(n2, l2) {
    return l2 = l2 || [], null == n2 || "boolean" == typeof n2 || (Array.isArray(n2) ? n2.some(function(n3) {
      A$2(n3, l2);
    }) : l2.push(n2)), l2;
  }
  function P$1(n2, l2, u2, i2, t2, r2) {
    var o2, f2, e2;
    if (void 0 !== l2.__d)
      o2 = l2.__d, l2.__d = void 0;
    else if (null == u2 || t2 != r2 || null == t2.parentNode)
      n:
        if (null == r2 || r2.parentNode !== n2)
          n2.appendChild(t2), o2 = null;
        else {
          for (f2 = r2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2) {
            if (f2 == t2)
              break n;
          }
          n2.insertBefore(t2, r2), o2 = r2;
        }
    return void 0 !== o2 ? o2 : t2.nextSibling;
  }
  function C$1(n2, l2, u2, i2, t2) {
    var r2;
    for (r2 in u2) {
      "children" === r2 || "key" === r2 || r2 in l2 || H$1(n2, r2, null, u2[r2], i2);
    }
    for (r2 in l2) {
      t2 && "function" != typeof l2[r2] || "children" === r2 || "key" === r2 || "value" === r2 || "checked" === r2 || u2[r2] === l2[r2] || H$1(n2, r2, l2[r2], u2[r2], i2);
    }
  }
  function $$1(n2, l2, u2) {
    "-" === l2[0] ? n2.setProperty(l2, u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || s$1.test(l2) ? u2 : u2 + "px";
  }
  function H$1(n2, l2, u2, i2, t2) {
    var r2;
    n:
      if ("style" === l2) {
        if ("string" == typeof u2)
          n2.style.cssText = u2;
        else {
          if ("string" == typeof i2 && (n2.style.cssText = i2 = ""), i2)
            for (l2 in i2) {
              u2 && l2 in u2 || $$1(n2.style, l2, "");
            }
          if (u2)
            for (l2 in u2) {
              i2 && u2[l2] === i2[l2] || $$1(n2.style, l2, u2[l2]);
            }
        }
      } else if ("o" === l2[0] && "n" === l2[1])
        r2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? i2 || n2.addEventListener(l2, r2 ? T$2 : I$1, r2) : n2.removeEventListener(l2, r2 ? T$2 : I$1, r2);
      else if ("dangerouslySetInnerHTML" !== l2) {
        if (t2)
          l2 = l2.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if ("href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && l2 in n2)
          try {
            n2[l2] = null == u2 ? "" : u2;
            break n;
          } catch (n3) {
          }
        "function" == typeof u2 || (null != u2 && (false !== u2 || "a" === l2[0] && "r" === l2[1]) ? n2.setAttribute(l2, u2) : n2.removeAttribute(l2));
      }
  }
  function I$1(n2) {
    this.l[n2.type + false](l$1.event ? l$1.event(n2) : n2);
  }
  function T$2(n2) {
    this.l[n2.type + true](l$1.event ? l$1.event(n2) : n2);
  }
  function j$2(n2, u2, i2, t2, r2, o2, f2, e2, c2) {
    var s2, h2, v2, y2, p2, k2, b2, m2, g2, x2, A2, P2 = u2.type;
    if (void 0 !== u2.constructor)
      return null;
    null != i2.__h && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, o2 = [e2]), (s2 = l$1.__b) && s2(u2);
    try {
      n:
        if ("function" == typeof P2) {
          if (m2 = u2.props, g2 = (s2 = P2.contextType) && t2[s2.__c], x2 = s2 ? g2 ? g2.props.value : s2.__ : t2, i2.__c ? b2 = (h2 = u2.__c = i2.__c).__ = h2.__E : ("prototype" in P2 && P2.prototype.render ? u2.__c = h2 = new P2(m2, x2) : (u2.__c = h2 = new _$1(m2, x2), h2.constructor = P2, h2.render = O$1), g2 && g2.sub(h2), h2.props = m2, h2.state || (h2.state = {}), h2.context = x2, h2.__n = t2, v2 = h2.__d = true, h2.__h = []), null == h2.__s && (h2.__s = h2.state), null != P2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = a$1({}, h2.__s)), a$1(h2.__s, P2.getDerivedStateFromProps(m2, h2.__s))), y2 = h2.props, p2 = h2.state, v2)
            null == P2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
          else {
            if (null == P2.getDerivedStateFromProps && m2 !== y2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(m2, x2), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(m2, h2.__s, x2) || u2.__v === i2.__v) {
              h2.props = m2, h2.state = h2.__s, u2.__v !== i2.__v && (h2.__d = false), h2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
                n3 && (n3.__ = u2);
              }), h2.__h.length && f2.push(h2);
              break n;
            }
            null != h2.componentWillUpdate && h2.componentWillUpdate(m2, h2.__s, x2), null != h2.componentDidUpdate && h2.__h.push(function() {
              h2.componentDidUpdate(y2, p2, k2);
            });
          }
          h2.context = x2, h2.props = m2, h2.state = h2.__s, (s2 = l$1.__r) && s2(u2), h2.__d = false, h2.__v = u2, h2.__P = n2, s2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s, null != h2.getChildContext && (t2 = a$1(a$1({}, t2), h2.getChildContext())), v2 || null == h2.getSnapshotBeforeUpdate || (k2 = h2.getSnapshotBeforeUpdate(y2, p2)), A2 = null != s2 && s2.type === d$1 && null == s2.key ? s2.props.children : s2, w$2(n2, Array.isArray(A2) ? A2 : [A2], u2, i2, t2, r2, o2, f2, e2, c2), h2.base = u2.__e, u2.__h = null, h2.__h.length && f2.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
        } else
          null == o2 && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = L$1(i2.__e, u2, i2, t2, r2, o2, f2, c2);
      (s2 = l$1.diffed) && s2(u2);
    } catch (n3) {
      u2.__v = null, (c2 || null != o2) && (u2.__e = e2, u2.__h = !!c2, o2[o2.indexOf(e2)] = null), l$1.__e(n3, u2, i2);
    }
  }
  function z$1(n2, u2) {
    l$1.__c && l$1.__c(u2, n2), n2.some(function(u3) {
      try {
        n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
          n3.call(u3);
        });
      } catch (n3) {
        l$1.__e(n3, u3.__v);
      }
    });
  }
  function L$1(l2, u2, i2, t2, r2, o2, f2, c2) {
    var s2, a2, v2, y2 = i2.props, p2 = u2.props, d2 = u2.type, _2 = 0;
    if ("svg" === d2 && (r2 = true), null != o2)
      for (; _2 < o2.length; _2++) {
        if ((s2 = o2[_2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : 3 === s2.nodeType)) {
          l2 = s2, o2[_2] = null;
          break;
        }
      }
    if (null == l2) {
      if (null === d2)
        return document.createTextNode(p2);
      l2 = r2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), o2 = null, c2 = false;
    }
    if (null === d2)
      y2 === p2 || c2 && l2.data === p2 || (l2.data = p2);
    else {
      if (o2 = o2 && n.call(l2.childNodes), a2 = (y2 = i2.props || e$1).dangerouslySetInnerHTML, v2 = p2.dangerouslySetInnerHTML, !c2) {
        if (null != o2)
          for (y2 = {}, _2 = 0; _2 < l2.attributes.length; _2++) {
            y2[l2.attributes[_2].name] = l2.attributes[_2].value;
          }
        (v2 || a2) && (v2 && (a2 && v2.__html == a2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
      }
      if (C$1(l2, p2, y2, r2, c2), v2)
        u2.__k = [];
      else if (_2 = u2.props.children, w$2(l2, Array.isArray(_2) ? _2 : [_2], u2, i2, t2, r2 && "foreignObject" !== d2, o2, f2, o2 ? o2[0] : i2.__k && k$2(i2, 0), c2), null != o2)
        for (_2 = o2.length; _2--; ) {
          null != o2[_2] && h$1(o2[_2]);
        }
      c2 || ("value" in p2 && void 0 !== (_2 = p2.value) && (_2 !== y2.value || _2 !== l2.value || "progress" === d2 && !_2) && H$1(l2, "value", _2, y2.value, false), "checked" in p2 && void 0 !== (_2 = p2.checked) && _2 !== l2.checked && H$1(l2, "checked", _2, y2.checked, false));
    }
    return l2;
  }
  function M$1(n2, u2, i2) {
    try {
      "function" == typeof n2 ? n2(u2) : n2.current = u2;
    } catch (n3) {
      l$1.__e(n3, i2);
    }
  }
  function N$1(n2, u2, i2) {
    var t2, r2;
    if (l$1.unmount && l$1.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M$1(t2, null, u2)), null != (t2 = n2.__c)) {
      if (t2.componentWillUnmount)
        try {
          t2.componentWillUnmount();
        } catch (n3) {
          l$1.__e(n3, u2);
        }
      t2.base = t2.__P = null;
    }
    if (t2 = n2.__k)
      for (r2 = 0; r2 < t2.length; r2++) {
        t2[r2] && N$1(t2[r2], u2, "function" != typeof n2.type);
      }
    i2 || null == n2.__e || h$1(n2.__e), n2.__e = n2.__d = void 0;
  }
  function O$1(n2, l2, u2) {
    return this.constructor(n2, u2);
  }
  function S$1(u2, i2, t2) {
    var r2, o2, f2;
    l$1.__ && l$1.__(u2, i2), o2 = (r2 = "function" == typeof t2) ? null : t2 && t2.__k || i2.__k, f2 = [], j$2(i2, u2 = (!r2 && t2 || i2).__k = v$1(d$1, null, [u2]), o2 || e$1, e$1, void 0 !== i2.ownerSVGElement, !r2 && t2 ? [t2] : o2 ? null : i2.firstChild ? n.call(i2.childNodes) : null, f2, !r2 && t2 ? t2 : o2 ? o2.__e : i2.firstChild, r2), z$1(f2, u2);
  }
  function q$1(n2, l2) {
    S$1(n2, l2, q$1);
  }
  function B$1(l2, u2, i2) {
    var t2, r2, o2, f2 = a$1({}, l2.props);
    for (o2 in u2) {
      "key" == o2 ? t2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : f2[o2] = u2[o2];
    }
    return arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i2), y$1(l2.type, f2, t2 || l2.key, r2 || l2.ref, null);
  }
  function D$1(n2, l2) {
    var u2 = {
      __c: l2 = "__cC" + f$1++,
      __: n2,
      Consumer: function Consumer(n3, l3) {
        return n3.children(l3);
      },
      Provider: function Provider(n3) {
        var u3, i2;
        return this.getChildContext || (u3 = [], (i2 = {})[l2] = this, this.getChildContext = function() {
          return i2;
        }, this.shouldComponentUpdate = function(n4) {
          this.props.value !== n4.value && u3.some(m$1);
        }, this.sub = function(n4) {
          u3.push(n4);
          var l3 = n4.componentWillUnmount;
          n4.componentWillUnmount = function() {
            u3.splice(u3.indexOf(n4), 1), l3 && l3.call(n4);
          };
        }), n3.children;
      }
    };
    return u2.Provider.__ = u2.Consumer.contextType = u2;
  }
  n = c$1.slice, l$1 = {
    __e: function __e(n2, l2) {
      for (var u2, i2, t2; l2 = l2.__; ) {
        if ((u2 = l2.__c) && !u2.__)
          try {
            if ((i2 = u2.constructor) && null != i2.getDerivedStateFromError && (u2.setState(i2.getDerivedStateFromError(n2)), t2 = u2.__d), null != u2.componentDidCatch && (u2.componentDidCatch(n2), t2 = u2.__d), t2)
              return u2.__E = u2;
          } catch (l3) {
            n2 = l3;
          }
      }
      throw n2;
    }
  }, u$1 = 0, _$1.prototype.setState = function(n2, l2) {
    var u2;
    u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = a$1({}, this.state), "function" == typeof n2 && (n2 = n2(a$1({}, u2), this.props)), n2 && a$1(u2, n2), null != n2 && this.__v && (l2 && this.__h.push(l2), m$1(this));
  }, _$1.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), m$1(this));
  }, _$1.prototype.render = d$1, t$1 = [], r$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g$2.__r = 0, f$1 = 0;
  var t;
  var u;
  var r;
  var o = 0;
  var i = [];
  var c = l$1.__b;
  var f = l$1.__r;
  var e = l$1.diffed;
  var a = l$1.__c;
  var v = l$1.unmount;
  function m(t2, r2) {
    l$1.__h && l$1.__h(u, t2, o || r2), o = 0;
    var i2 = u.__H || (u.__H = {
      __: [],
      __h: []
    });
    return t2 >= i2.__.length && i2.__.push({}), i2.__[t2];
  }
  function l(n2) {
    return o = 1, p(w$1, n2);
  }
  function p(n2, r2, o2) {
    var i2 = m(t++, 2);
    return i2.t = n2, i2.__c || (i2.__ = [o2 ? o2(r2) : w$1(void 0, r2), function(n3) {
      var t2 = i2.t(i2.__[0], n3);
      i2.__[0] !== t2 && (i2.__ = [t2, i2.__[1]], i2.__c.setState({}));
    }], i2.__c = u), i2.__;
  }
  function y(r2, o2) {
    var i2 = m(t++, 3);
    !l$1.__s && k$1(i2.__H, o2) && (i2.__ = r2, i2.__H = o2, u.__H.__h.push(i2));
  }
  function h(r2, o2) {
    var i2 = m(t++, 4);
    !l$1.__s && k$1(i2.__H, o2) && (i2.__ = r2, i2.__H = o2, u.__h.push(i2));
  }
  function s(n2) {
    return o = 5, d(function() {
      return {
        current: n2
      };
    }, []);
  }
  function _(n2, t2, u2) {
    o = 6, h(function() {
      "function" == typeof n2 ? n2(t2()) : n2 && (n2.current = t2());
    }, null == u2 ? u2 : u2.concat(n2));
  }
  function d(n2, u2) {
    var r2 = m(t++, 7);
    return k$1(r2.__H, u2) && (r2.__ = n2(), r2.__H = u2, r2.__h = n2), r2.__;
  }
  function A$1(n2, t2) {
    return o = 8, d(function() {
      return n2;
    }, t2);
  }
  function F$1(n2) {
    var r2 = u.context[n2.__c], o2 = m(t++, 9);
    return o2.c = n2, r2 ? (null == o2.__ && (o2.__ = true, r2.sub(u)), r2.props.value) : n2.__;
  }
  function T$1(t2, u2) {
    l$1.useDebugValue && l$1.useDebugValue(u2 ? u2(t2) : t2);
  }
  function x$1() {
    var t2;
    for (i.sort(function(n2, t3) {
      return n2.__v.__b - t3.__v.__b;
    }); t2 = i.pop(); ) {
      if (t2.__P)
        try {
          t2.__H.__h.forEach(g$1), t2.__H.__h.forEach(j$1), t2.__H.__h = [];
        } catch (u2) {
          t2.__H.__h = [], l$1.__e(u2, t2.__v);
        }
    }
  }
  l$1.__b = function(n2) {
    u = null, c && c(n2);
  }, l$1.__r = function(n2) {
    f && f(n2), t = 0;
    var r2 = (u = n2.__c).__H;
    r2 && (r2.__h.forEach(g$1), r2.__h.forEach(j$1), r2.__h = []);
  }, l$1.diffed = function(t2) {
    e && e(t2);
    var o2 = t2.__c;
    o2 && o2.__H && o2.__H.__h.length && (1 !== i.push(o2) && r === l$1.requestAnimationFrame || ((r = l$1.requestAnimationFrame) || function(n2) {
      var t3, u2 = function u3() {
        clearTimeout(r2), b && cancelAnimationFrame(t3), setTimeout(n2);
      }, r2 = setTimeout(u2, 100);
      b && (t3 = requestAnimationFrame(u2));
    })(x$1)), u = null;
  }, l$1.__c = function(t2, u2) {
    u2.some(function(t3) {
      try {
        t3.__h.forEach(g$1), t3.__h = t3.__h.filter(function(n2) {
          return !n2.__ || j$1(n2);
        });
      } catch (r2) {
        u2.some(function(n2) {
          n2.__h && (n2.__h = []);
        }), u2 = [], l$1.__e(r2, t3.__v);
      }
    }), a && a(t2, u2);
  }, l$1.unmount = function(t2) {
    v && v(t2);
    var u2, r2 = t2.__c;
    r2 && r2.__H && (r2.__H.__.forEach(function(n2) {
      try {
        g$1(n2);
      } catch (n3) {
        u2 = n3;
      }
    }), u2 && l$1.__e(u2, r2.__v));
  };
  var b = "function" == typeof requestAnimationFrame;
  function g$1(n2) {
    var t2 = u, r2 = n2.__c;
    "function" == typeof r2 && (n2.__c = void 0, r2()), u = t2;
  }
  function j$1(n2) {
    var t2 = u;
    n2.__c = n2.__(), u = t2;
  }
  function k$1(n2, t2) {
    return !n2 || n2.length !== t2.length || t2.some(function(t3, u2) {
      return t3 !== n2[u2];
    });
  }
  function w$1(n2, t2) {
    return "function" == typeof t2 ? t2(n2) : t2;
  }
  function S(n2, t2) {
    for (var e2 in t2) {
      n2[e2] = t2[e2];
    }
    return n2;
  }
  function C(n2, t2) {
    for (var e2 in n2) {
      if ("__source" !== e2 && !(e2 in t2))
        return true;
    }
    for (var r2 in t2) {
      if ("__source" !== r2 && n2[r2] !== t2[r2])
        return true;
    }
    return false;
  }
  function E(n2) {
    this.props = n2;
  }
  function g(n2, t2) {
    function e2(n3) {
      var e3 = this.props.ref, r3 = e3 == n3.ref;
      return !r3 && e3 && (e3.call ? e3(null) : e3.current = null), t2 ? !t2(this.props, n3) || !r3 : C(this.props, n3);
    }
    function r2(t3) {
      return this.shouldComponentUpdate = e2, v$1(n2, t3);
    }
    return r2.displayName = "Memo(" + (n2.displayName || n2.name) + ")", r2.prototype.isReactComponent = true, r2.__f = true, r2;
  }
  (E.prototype = new _$1()).isPureReactComponent = true, E.prototype.shouldComponentUpdate = function(n2, t2) {
    return C(this.props, n2) || C(this.state, t2);
  };
  var w = l$1.__b;
  l$1.__b = function(n2) {
    n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), w && w(n2);
  };
  var R = "undefined" != typeof Symbol && Symbol["for"] && Symbol["for"]("react.forward_ref") || 3911;
  function x(n2) {
    function t2(t3, e2) {
      var r2 = S({}, t3);
      return delete r2.ref, n2(r2, (e2 = t3.ref || e2) && ("object" != _typeof(e2) || "current" in e2) ? e2 : null);
    }
    return t2.$$typeof = R, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t2;
  }
  var N = function N2(n2, t2) {
    return null == n2 ? null : A$2(A$2(n2).map(t2));
  };
  var k = {
    map: N,
    forEach: N,
    count: function count(n2) {
      return n2 ? A$2(n2).length : 0;
    },
    only: function only(n2) {
      var t2 = A$2(n2);
      if (1 !== t2.length)
        throw "Children.only";
      return t2[0];
    },
    toArray: A$2
  };
  var A = l$1.__e;
  l$1.__e = function(n2, t2, e2) {
    if (n2.then)
      for (var r2, u2 = t2; u2 = u2.__; ) {
        if ((r2 = u2.__c) && r2.__c)
          return null == t2.__e && (t2.__e = e2.__e, t2.__k = e2.__k), r2.__c(n2, t2);
      }
    A(n2, t2, e2);
  };
  var O = l$1.unmount;
  function L() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function U(n2) {
    var t2 = n2.__.__c;
    return t2 && t2.__e && t2.__e(n2);
  }
  function F(n2) {
    var t2, e2, r2;
    function u2(u3) {
      if (t2 || (t2 = n2()).then(function(n3) {
        e2 = n3["default"] || n3;
      }, function(n3) {
        r2 = n3;
      }), r2)
        throw r2;
      if (!e2)
        throw t2;
      return v$1(e2, u3);
    }
    return u2.displayName = "Lazy", u2.__f = true, u2;
  }
  function M() {
    this.u = null, this.o = null;
  }
  l$1.unmount = function(n2) {
    var t2 = n2.__c;
    t2 && t2.__R && t2.__R(), t2 && true === n2.__h && (n2.type = null), O && O(n2);
  }, (L.prototype = new _$1()).__c = function(n2, t2) {
    var e2 = t2.__c, r2 = this;
    null == r2.t && (r2.t = []), r2.t.push(e2);
    var u2 = U(r2.__v), o2 = false, i2 = function i3() {
      o2 || (o2 = true, e2.__R = null, u2 ? u2(l2) : l2());
    };
    e2.__R = i2;
    var l2 = function l3() {
      if (!--r2.__u) {
        if (r2.state.__e) {
          var n3 = r2.state.__e;
          r2.__v.__k[0] = function n4(t4, e3, r3) {
            return t4 && (t4.__v = null, t4.__k = t4.__k && t4.__k.map(function(t5) {
              return n4(t5, e3, r3);
            }), t4.__c && t4.__c.__P === e3 && (t4.__e && r3.insertBefore(t4.__e, t4.__d), t4.__c.__e = true, t4.__c.__P = r3)), t4;
          }(n3, n3.__c.__P, n3.__c.__O);
        }
        var t3;
        for (r2.setState({
          __e: r2.__b = null
        }); t3 = r2.t.pop(); ) {
          t3.forceUpdate();
        }
      }
    }, c2 = true === t2.__h;
    r2.__u++ || c2 || r2.setState({
      __e: r2.__b = r2.__v.__k[0]
    }), n2.then(i2, i2);
  }, L.prototype.componentWillUnmount = function() {
    this.t = [];
  }, L.prototype.render = function(n2, t2) {
    if (this.__b) {
      if (this.__v.__k) {
        var e2 = document.createElement("div"), r2 = this.__v.__k[0].__c;
        this.__v.__k[0] = function n3(t3, e3, r3) {
          return t3 && (t3.__c && t3.__c.__H && (t3.__c.__H.__.forEach(function(n4) {
            "function" == typeof n4.__c && n4.__c();
          }), t3.__c.__H = null), null != (t3 = S({}, t3)).__c && (t3.__c.__P === r3 && (t3.__c.__P = e3), t3.__c = null), t3.__k = t3.__k && t3.__k.map(function(t4) {
            return n3(t4, e3, r3);
          })), t3;
        }(this.__b, e2, r2.__O = r2.__P);
      }
      this.__b = null;
    }
    var u2 = t2.__e && v$1(d$1, null, n2.fallback);
    return u2 && (u2.__h = null), [v$1(d$1, null, t2.__e ? null : n2.children), u2];
  };
  var T = function T2(n2, t2, e2) {
    if (++e2[1] === e2[0] && n2.o["delete"](t2), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
      for (e2 = n2.u; e2; ) {
        for (; e2.length > 3; ) {
          e2.pop()();
        }
        if (e2[1] < e2[0])
          break;
        n2.u = e2 = e2[2];
      }
  };
  function D(n2) {
    return this.getChildContext = function() {
      return n2.context;
    }, n2.children;
  }
  function I(n2) {
    var t2 = this, e2 = n2.i;
    t2.componentWillUnmount = function() {
      S$1(null, t2.l), t2.l = null, t2.i = null;
    }, t2.i && t2.i !== e2 && t2.componentWillUnmount(), n2.__v ? (t2.l || (t2.i = e2, t2.l = {
      nodeType: 1,
      parentNode: e2,
      childNodes: [],
      appendChild: function appendChild(n3) {
        this.childNodes.push(n3), t2.i.appendChild(n3);
      },
      insertBefore: function insertBefore(n3, e3) {
        this.childNodes.push(n3), t2.i.appendChild(n3);
      },
      removeChild: function removeChild(n3) {
        this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), t2.i.removeChild(n3);
      }
    }), S$1(v$1(D, {
      context: t2.context
    }, n2.__v), t2.l)) : t2.l && t2.componentWillUnmount();
  }
  function W(n2, t2) {
    return v$1(I, {
      __v: n2,
      i: t2
    });
  }
  (M.prototype = new _$1()).__e = function(n2) {
    var t2 = this, e2 = U(t2.__v), r2 = t2.o.get(n2);
    return r2[0]++, function(u2) {
      var o2 = function o3() {
        t2.props.revealOrder ? (r2.push(u2), T(t2, n2, r2)) : u2();
      };
      e2 ? e2(o2) : o2();
    };
  }, M.prototype.render = function(n2) {
    this.u = null, this.o = /* @__PURE__ */ new Map();
    var t2 = A$2(n2.children);
    n2.revealOrder && "b" === n2.revealOrder[0] && t2.reverse();
    for (var e2 = t2.length; e2--; ) {
      this.o.set(t2[e2], this.u = [1, 0, this.u]);
    }
    return n2.children;
  }, M.prototype.componentDidUpdate = M.prototype.componentDidMount = function() {
    var n2 = this;
    this.o.forEach(function(t2, e2) {
      T(n2, e2, t2);
    });
  };
  var j = "undefined" != typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
  var P = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var V = "undefined" != typeof document;
  var z = function z2(n2) {
    return ("undefined" != typeof Symbol && "symbol" == _typeof(Symbol()) ? /fil|che|rad/i : /fil|che|ra/i).test(n2);
  };
  function B(n2, t2, e2) {
    return null == t2.__k && (t2.textContent = ""), S$1(n2, t2), "function" == typeof e2 && e2(), n2 ? n2.__c : null;
  }
  function $(n2, t2, e2) {
    return q$1(n2, t2), "function" == typeof e2 && e2(), n2 ? n2.__c : null;
  }
  _$1.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(n2) {
    Object.defineProperty(_$1.prototype, n2, {
      configurable: true,
      get: function get2() {
        return this["UNSAFE_" + n2];
      },
      set: function set(t2) {
        Object.defineProperty(this, n2, {
          configurable: true,
          writable: true,
          value: t2
        });
      }
    });
  });
  var H = l$1.event;
  function Z() {
  }
  function Y() {
    return this.cancelBubble;
  }
  function q() {
    return this.defaultPrevented;
  }
  l$1.event = function(n2) {
    return H && (n2 = H(n2)), n2.persist = Z, n2.isPropagationStopped = Y, n2.isDefaultPrevented = q, n2.nativeEvent = n2;
  };
  var G;
  var J = {
    configurable: true,
    get: function get() {
      return this["class"];
    }
  };
  var K = l$1.vnode;
  l$1.vnode = function(n2) {
    var t2 = n2.type, e2 = n2.props, r2 = e2;
    if ("string" == typeof t2) {
      var u2 = -1 === t2.indexOf("-");
      for (var o2 in r2 = {}, e2) {
        var i2 = e2[o2];
        V && "children" === o2 && "noscript" === t2 || "value" === o2 && "defaultValue" in e2 && null == i2 || ("defaultValue" === o2 && "value" in e2 && null == e2.value ? o2 = "value" : "download" === o2 && true === i2 ? i2 = "" : /ondoubleclick/i.test(o2) ? o2 = "ondblclick" : /^onchange(textarea|input)/i.test(o2 + t2) && !z(e2.type) ? o2 = "oninput" : /^onfocus$/i.test(o2) ? o2 = "onfocusin" : /^onblur$/i.test(o2) ? o2 = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o2) ? o2 = o2.toLowerCase() : u2 && P.test(o2) ? o2 = o2.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === i2 && (i2 = void 0), r2[o2] = i2);
      }
      "select" == t2 && r2.multiple && Array.isArray(r2.value) && (r2.value = A$2(e2.children).forEach(function(n3) {
        n3.props.selected = -1 != r2.value.indexOf(n3.props.value);
      })), "select" == t2 && null != r2.defaultValue && (r2.value = A$2(e2.children).forEach(function(n3) {
        n3.props.selected = r2.multiple ? -1 != r2.defaultValue.indexOf(n3.props.value) : r2.defaultValue == n3.props.value;
      })), n2.props = r2, e2["class"] != e2.className && (J.enumerable = "className" in e2, null != e2.className && (r2["class"] = e2.className), Object.defineProperty(r2, "className", J));
    }
    n2.$$typeof = j, K && K(n2);
  };
  var Q = l$1.__r;
  l$1.__r = function(n2) {
    Q && Q(n2), G = n2.__c;
  };
  var X = {
    ReactCurrentDispatcher: {
      current: {
        readContext: function readContext(n2) {
          return G.__n[n2.__c].props.value;
        }
      }
    }
  };
  function tn(n2) {
    return v$1.bind(null, n2);
  }
  function en(n2) {
    return !!n2 && n2.$$typeof === j;
  }
  function rn(n2) {
    return en(n2) ? B$1.apply(null, arguments) : n2;
  }
  function un(n2) {
    return !!n2.__k && (S$1(null, n2), true);
  }
  function on(n2) {
    return n2 && (n2.base || 1 === n2.nodeType && n2) || null;
  }
  var ln = function ln2(n2, t2) {
    return n2(t2);
  };
  var cn = function cn2(n2, t2) {
    return n2(t2);
  };
  var React = {
    useState: l,
    useReducer: p,
    useEffect: y,
    useLayoutEffect: h,
    useRef: s,
    useImperativeHandle: _,
    useMemo: d,
    useCallback: A$1,
    useContext: F$1,
    useDebugValue: T$1,
    version: "17.0.2",
    Children: k,
    render: B,
    hydrate: $,
    unmountComponentAtNode: un,
    createPortal: W,
    createElement: v$1,
    createContext: D$1,
    createFactory: tn,
    cloneElement: rn,
    createRef: p$1,
    Fragment: d$1,
    isValidElement: en,
    findDOMNode: on,
    Component: _$1,
    PureComponent: E,
    memo: g,
    forwardRef: x,
    flushSync: cn,
    unstable_batchedUpdates: ln,
    StrictMode: d$1,
    Suspense: L,
    SuspenseList: M,
    lazy: F,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: X
  };
  function len(a2) {
    return a2 instanceof Set ? a2.size : a2.length;
  }
  function setOverlapFactory(a2, toElemKey) {
    var elems = !toElemKey ? a2 instanceof Set ? a2 : new Set(a2) : new Set((a2 instanceof Set ? Array.from(a2) : a2).map(toElemKey));
    var setA = elems.size;
    var same = {
      setA,
      setB: setA,
      union: setA,
      intersection: setA
    };
    return function(b2) {
      if (b2 === a2) {
        return same;
      }
      var intersection = 0;
      b2.forEach(function(e2) {
        if (toElemKey && elems.has(toElemKey(e2)) || !toElemKey && elems.has(e2)) {
          intersection++;
        }
      });
      var setB = len(b2);
      return {
        setA,
        setB,
        intersection,
        union: setA + setB - intersection
      };
    };
  }
  function setElemOverlapFactory(a2, toElemKey) {
    var elems = !toElemKey ? a2 instanceof Set ? a2 : new Set(a2) : new Set((a2 instanceof Set ? Array.from(a2) : a2).map(toElemKey));
    var setA = Array.isArray(a2) ? a2 : Array.from(a2);
    var same = {
      setA,
      setB: setA,
      union: setA,
      intersection: setA
    };
    return function(b2) {
      if (b2 === a2) {
        return same;
      }
      var intersection = [];
      var union = setA.slice();
      b2.forEach(function(e2) {
        if (toElemKey && elems.has(toElemKey(e2)) || !toElemKey && elems.has(e2)) {
          intersection.push(e2);
        } else {
          union.push(e2);
        }
      });
      return {
        setA,
        setB: Array.isArray(b2) ? b2 : Array.from(b2),
        intersection,
        union
      };
    };
  }
  function setElemIntersectionFactory(a2, toElemKey) {
    var arr = a2 instanceof Set ? Array.from(a2) : a2;
    var elems = !toElemKey ? a2 instanceof Set ? a2 : new Set(a2) : new Set(arr.map(toElemKey));
    return function(b2) {
      if (b2 === a2) {
        return arr;
      }
      var intersection = [];
      b2.forEach(function(e2) {
        if (toElemKey && elems.has(toElemKey(e2)) || !toElemKey && elems.has(e2)) {
          intersection.push(e2);
        }
      });
      return intersection;
    };
  }
  function isElemQuery(q2) {
    return Array.isArray(q2.elems);
  }
  function isCalcQuery(q2) {
    return typeof q2.overlap === "function";
  }
  function isSetQuery(q2) {
    return q2.set != null;
  }
  function queryOverlap(query, what, toElemKey) {
    if (isCalcQuery(query)) {
      return query.overlap;
    }
    if (isSetQuery(query) && query.set.overlap) {
      return query.set.overlap;
    }
    var f2 = setOverlapFactory(isElemQuery(query) ? query.elems : query.set.elems, toElemKey);
    return function(s2) {
      if (s2.overlap && isElemQuery(query) && Array.isArray(query.elems)) {
        return s2.overlap(query.elems);
      }
      if (s2.overlap && isSetQuery(query)) {
        return s2.overlap(query.set);
      }
      return f2(s2.elems)[what];
    };
  }
  function queryElemOverlap(query, what, toElemKey) {
    if (isCalcQuery(query)) {
      return function() {
        return null;
      };
    }
    if (what === "intersection") {
      var _f = setElemIntersectionFactory(isElemQuery(query) ? query.elems : query.set.elems, toElemKey);
      return function(s2) {
        return _f(s2.elems);
      };
    }
    var f2 = setElemOverlapFactory(isElemQuery(query) ? query.elems : query.set.elems, toElemKey);
    return function(s2) {
      return f2(s2.elems)[what];
    };
  }
  function isBaseSet(v2) {
    var vt = v2;
    return v2 != null && typeof vt.cardinality === "number" && typeof v2.name === "string" && Array.isArray(v2.elems);
  }
  function isSet(v2) {
    return isBaseSet(v2) && v2.type === "set";
  }
  function isSetCombination(v2) {
    var vt = v2;
    return isBaseSet(v2) && ["composite", "union", "intersection", "distinctIntersection"].includes(vt.type) && vt.sets instanceof Set && typeof vt.degree === "number";
  }
  function isSetLike$1(v2) {
    return isSet(v2) || isSetCombination(v2);
  }
  function isGenerateSetCombinationOptions(v2) {
    var vt = v2;
    return v2 != null && (vt.type == null || ["intersection", "union"].includes(vt.type));
  }
  function isUpSetQuery(v2) {
    var vt = v2;
    return v2 != null && typeof vt.name === "string" && typeof vt.color === "string" && (isElemQuery(vt) || isSetQuery(vt) || isCalcQuery(vt));
  }
  function byName(a2, b2) {
    return a2.name.localeCompare(b2.name);
  }
  function byCardinality(a2, b2) {
    return b2.cardinality - a2.cardinality;
  }
  function byDegree(a2, b2) {
    return a2.degree - b2.degree;
  }
  function byComposite(func) {
    return function(a2, b2) {
      return func.reduce(function(acc, f2) {
        return acc === 0 ? f2(a2, b2) : acc;
      }, 0);
    };
  }
  function negate(func) {
    return function(a2, b2) {
      return -func(a2, b2);
    };
  }
  function byGroup(sets2) {
    return function(a2, b2) {
      var fixNotFound = function fixNotFound2(v2) {
        return v2 < 0 ? Number.POSITIVE_INFINITY : v2;
      };
      var aIndex = fixNotFound(sets2.findIndex(function(s2) {
        return a2.sets.has(s2);
      }));
      var bIndex = fixNotFound(sets2.findIndex(function(s2) {
        return b2.sets.has(s2);
      }));
      return aIndex - bIndex;
    };
  }
  function toOrder$1(sets2, order) {
    if (!order) {
      return byName;
    }
    var arr = Array.isArray(order) ? order : [order];
    if (arr.length === 0) {
      return byName;
    }
    return byComposite(arr.map(function(o2) {
      switch (o2) {
        case "cardinality":
        case "cardinality:desc":
          return byCardinality;
        case "cardinality:asc":
          return negate(byCardinality);
        case "name:desc":
          return negate(byName);
        case "degree":
        case "degree:asc":
          return byDegree;
        case "degree:desc":
          return negate(byDegree);
        case "group":
        case "group:asc":
          return byGroup(sets2);
        case "group:desc":
          return negate(byGroup(sets2));
        default:
          return byName;
      }
    }));
  }
  function postprocessCombinations(sets2, combinations2) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var r2 = combinations2;
    if (options.order) {
      r2 = r2.sort(toOrder$1(sets2, options.order));
    }
    if (options.limit != null) {
      return r2.slice(0, options.limit);
    }
    return r2;
  }
  var SET_JOINERS = {
    distinctIntersection: " \u2229 ",
    intersection: " \u2229 ",
    union: " \u222A ",
    composite: ","
  };
  function parseColor(color) {
    if (!color) {
      return [255, 255, 255];
    }
    var hex = color.match(/#([\da-f]{2})([\da-f]{2})([\da-f]{2})/i);
    if (hex) {
      return [Number.parseInt(hex[1], 16), Number.parseInt(hex[2], 16), Number.parseInt(hex[3], 16)];
    }
    var rgb = color.match(/\(([\d]+)[, ]([\d]+)[, ]([\d]+)\)/i);
    if (rgb) {
      return [Number.parseInt(rgb[1], 10), Number.parseInt(rgb[2], 10), Number.parseInt(rgb[3], 10)];
    }
    return [255, 255, 255];
  }
  function mergeColors(colors) {
    if (colors.length === 1) {
      return colors[0];
    }
    if (colors.every(function(d2) {
      return d2 == null;
    })) {
      return void 0;
    }
    var rgb = colors.map(parseColor);
    var r2 = Math.floor(rgb.reduce(function(acc, v2) {
      return acc + v2[0];
    }, 0) / rgb.length);
    var g2 = Math.floor(rgb.reduce(function(acc, v2) {
      return acc + v2[1];
    }, 0) / rgb.length);
    var b2 = Math.floor(rgb.reduce(function(acc, v2) {
      return acc + v2[2];
    }, 0) / rgb.length);
    return "#".concat(r2.toString(16)).concat(g2.toString(16)).concat(b2.toString(16));
  }
  function generateName$1(combo, setIndex, joiner) {
    var sorted = Array.from(combo).sort(function(a2, b2) {
      return setIndex.get(a2) - setIndex.get(b2);
    });
    return sorted.length === 1 ? sorted[0].name : "(".concat(sorted.map(function(d2) {
      return d2.name;
    }).join(joiner), ")");
  }
  function generateSet(type, name, combo, elems, mergeColors2) {
    return {
      type: combo.size === 0 ? "composite" : type,
      elems,
      color: mergeColors2(Array.from(combo).map(function(s2) {
        return s2.color;
      })),
      sets: combo,
      name,
      cardinality: elems.length,
      degree: combo.size
    };
  }
  function mergeIntersection(a2, b2, lookup, toKey2, setIndex, type, mergeColors2) {
    var merged = new Set(a2.sets);
    b2.sets.forEach(function(s2) {
      return merged.add(s2);
    });
    var name = generateName$1(merged, setIndex, SET_JOINERS[type]);
    if (a2.cardinality === 0 || b2.cardinality === 0) {
      return generateSet(type, name, merged, [], mergeColors2);
    }
    var small = a2;
    var big = b2;
    if (a2.cardinality > b2.cardinality) {
      small = b2;
      big = a2;
    }
    var keySet = /* @__PURE__ */ new Set();
    var bigLookup = lookup.get(big);
    var elems = [];
    var l2 = small.elems.length;
    for (var i2 = 0; i2 < l2; i2++) {
      var e2 = small.elems[i2];
      var key = toKey2(e2);
      if (!bigLookup.has(key)) {
        continue;
      }
      keySet.add(key);
      elems.push(e2);
    }
    var r2 = generateSet(type, name, merged, elems, mergeColors2);
    lookup.set(r2, keySet);
    return r2;
  }
  function mergeUnion(a2, b2, lookup, toKey2, setIndex, type, mergeColors2) {
    var merged = new Set(a2.sets);
    b2.sets.forEach(function(s2) {
      return merged.add(s2);
    });
    var name = generateName$1(merged, setIndex, SET_JOINERS[type]);
    if (a2.cardinality === 0) {
      var _r = generateSet(type, name, merged, b2.elems, mergeColors2);
      lookup.set(_r, lookup.get(b2));
      return _r;
    }
    if (b2.cardinality === 0) {
      var _r2 = generateSet(type, name, merged, a2.elems, mergeColors2);
      lookup.set(_r2, lookup.get(a2));
      return _r2;
    }
    var small = a2;
    var big = b2;
    if (a2.cardinality > b2.cardinality) {
      small = b2;
      big = a2;
    }
    var keySet = new Set(lookup.get(big));
    var bigLookup = lookup.get(big);
    var elems = big.elems.slice();
    small.elems.forEach(function(e2) {
      var key = toKey2(e2);
      if (bigLookup.has(key)) {
        return;
      }
      keySet.add(key);
      elems.push(e2);
    });
    var r2 = generateSet(type, name, merged, elems, mergeColors2);
    lookup.set(r2, keySet);
    return r2;
  }
  function generateEmptySet(type, notPartOfAnySet, allElements, lookup, toKey2, mergeColors2) {
    if (typeof notPartOfAnySet === "number") {
      return {
        type: "composite",
        elems: [],
        color: mergeColors2 ? mergeColors2([]) : void 0,
        sets: /* @__PURE__ */ new Set(),
        name: "()",
        cardinality: notPartOfAnySet,
        overlap: function overlap(s2) {
          return s2 === this || isSetLike$1(s2) && s2.name === this.name && s2.cardinality === this.cardinality ? this.cardinality : 0;
        },
        degree: 0
      };
    }
    if (Array.isArray(notPartOfAnySet)) {
      return generateSet(type, "()", /* @__PURE__ */ new Set(), notPartOfAnySet, mergeColors2);
    }
    var lookupArr = Array.from(lookup.values());
    var elems = allElements.filter(function(e2) {
      var k2 = toKey2(e2);
      return lookupArr.every(function(s2) {
        return !s2.has(k2);
      });
    });
    return generateSet(type, "()", /* @__PURE__ */ new Set(), elems, mergeColors2);
  }
  function generateCombinations(sets2) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _options$type = options.type, type = _options$type === void 0 ? "intersection" : _options$type, _options$min = options.min, min = _options$min === void 0 ? 0 : _options$min, _options$max = options.max, max = _options$max === void 0 ? Number.POSITIVE_INFINITY : _options$max, _options$empty = options.empty, empty = _options$empty === void 0 ? false : _options$empty, _options$elems = options.elems, allElements = _options$elems === void 0 ? [] : _options$elems, notPartOfAnySet = options.notPartOfAnySet, toElemKey = options.toElemKey, _options$mergeColors = options.mergeColors, mergeColors$1 = _options$mergeColors === void 0 ? mergeColors : _options$mergeColors;
    var combinations2 = [];
    var setIndex = new Map(sets2.map(function(s2, i2) {
      return [s2, i2];
    }));
    var setElems = new Map(sets2.map(function(s2) {
      return [s2, toElemKey ? new Set(s2.elems.map(toElemKey)) : new Set(s2.elems)];
    }));
    var setDirectElems = toElemKey ? null : setElems;
    var setKeyElems = toElemKey ? setElems : null;
    var calc = type === "union" ? mergeUnion : mergeIntersection;
    function push(s2) {
      if (s2.degree < min || s2.degree > max || s2.cardinality === 0 && !empty) {
        return;
      }
      if (type !== "distinctIntersection") {
        combinations2.push(s2);
        return;
      }
      var others = sets2.filter(function(d2) {
        return !s2.sets.has(d2);
      });
      var elems = [];
      if (toElemKey) {
        var othersSets = others.map(function(o2) {
          return setKeyElems.get(o2);
        });
        elems = s2.elems.filter(function(e2) {
          var key = toElemKey(e2);
          return othersSets.every(function(o2) {
            return !o2.has(key);
          });
        });
      } else {
        var _othersSets = others.map(function(o2) {
          return setDirectElems.get(o2);
        });
        elems = s2.elems.filter(function(e2) {
          return _othersSets.every(function(o2) {
            return !o2.has(e2);
          });
        });
      }
      if (elems.length === s2.cardinality) {
        combinations2.push(s2);
        return;
      }
      var sDistinct = generateSet(type, s2.name, s2.sets, elems, mergeColors$1);
      if (sDistinct.cardinality === 0 && !empty) {
        return;
      }
      combinations2.push(sDistinct);
    }
    function generateLevel(arr, degree, lookup, toKey2) {
      if (degree > max) {
        return;
      }
      var l2 = arr.length;
      for (var i2 = 0; i2 < l2; i2++) {
        var a2 = arr[i2];
        var sub = [];
        for (var j2 = i2 + 1; j2 < l2; j2++) {
          var b2 = arr[j2];
          var ab = calc(a2, b2, lookup, toKey2, setIndex, type, mergeColors$1);
          push(ab);
          if (type === "union" || ab.cardinality > 0 || empty) {
            sub.push(ab);
          }
        }
        if (sub.length > 1) {
          generateLevel(sub, degree + 1, lookup, toKey2);
        }
      }
    }
    if (min <= 0) {
      if (toElemKey) {
        push(generateEmptySet(type, notPartOfAnySet, allElements, setKeyElems, toElemKey, mergeColors$1));
      } else {
        push(generateEmptySet(type, notPartOfAnySet, allElements, setDirectElems, function(v2) {
          return v2;
        }, mergeColors$1));
      }
    }
    var degree1 = sets2.map(function(s2) {
      var r2 = generateSet(type, s2.name, /* @__PURE__ */ new Set([s2]), s2.elems, mergeColors$1);
      setElems.set(r2, setElems.get(s2));
      push(r2);
      return r2;
    });
    if (toElemKey) {
      generateLevel(degree1, 2, setKeyElems, toElemKey);
    } else {
      generateLevel(degree1, 2, setDirectElems, function(v2) {
        return v2;
      });
    }
    return postprocessCombinations(sets2, combinations2, options);
  }
  function toKey(s2) {
    return "".concat(s2.name, ":").concat(s2.type, "#").concat(s2.cardinality);
  }
  function isUniverse(s2) {
    return s2.sets.size === 0;
  }
  function common(a2, b2) {
    var toKey$1 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : toKey;
    var r2 = {
      done: null,
      aKey: "",
      bKey: "",
      aIsSet: false,
      bIsSet: false,
      toKey: toKey$1
    };
    if (a2 === b2) {
      r2.done = a2.cardinality;
      return r2;
    }
    if (a2.cardinality === 0 || b2.cardinality === 0) {
      r2.done = 0;
      return r2;
    }
    r2.aKey = toKey$1(a2);
    r2.bKey = toKey$1(b2);
    if (r2.aKey === r2.bKey) {
      r2.done = a2.cardinality;
      return r2;
    }
    r2.aIsSet = isSet(a2);
    r2.bIsSet = isSet(b2);
    if (!r2.aIsSet && isUniverse(a2) || !r2.bIsSet && isUniverse(b2)) {
      r2.done = 0;
      return r2;
    }
    return r2;
  }
  function aInB(b2, r2) {
    if (r2.bIsSet || !r2.aIsSet) {
      return false;
    }
    return Array.from(b2.sets).map(r2.toKey).includes(r2.aKey);
  }
  function bInA(a2, r2) {
    if (!r2.bIsSet || r2.aIsSet) {
      return false;
    }
    return Array.from(a2.sets).map(r2.toKey).includes(r2.bKey);
  }
  function keyedCombinations(combinations2) {
    var toKey$1 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : toKey;
    return combinations2.map(function(c2) {
      var s2 = Array.from(c2.sets).map(toKey$1).sort();
      return {
        key: s2.join("&"),
        s: s2,
        sets: new Set(s2),
        degree: c2.degree,
        cardinality: c2.cardinality
      };
    });
  }
  function combinedKey(a2, b2, r2) {
    var sets2 = /* @__PURE__ */ new Set();
    if (r2.aIsSet) {
      sets2.add(r2.aKey);
    } else {
      for (var _i = 0, _Array$from = Array.from(a2.sets); _i < _Array$from.length; _i++) {
        var s2 = _Array$from[_i];
        sets2.add(r2.toKey(s2));
      }
    }
    if (r2.bIsSet) {
      sets2.add(r2.bKey);
    } else {
      for (var _i2 = 0, _Array$from2 = Array.from(b2.sets); _i2 < _Array$from2.length; _i2++) {
        var _s3 = _Array$from2[_i2];
        sets2.add(r2.toKey(_s3));
      }
    }
    return Array.from(sets2).sort().join("&");
  }
  function generateDistinctOverlapFunction(combinations2, fallback) {
    var toKey$1 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : toKey;
    var combinationsBySet = /* @__PURE__ */ new Map();
    var _iterator4 = _createForOfIteratorHelper(keyedCombinations(combinations2, toKey$1)), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        var c2 = _step4.value;
        var _iterator5 = _createForOfIteratorHelper(c2.s), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            var s2 = _step5.value;
            if (combinationsBySet.has(s2)) {
              combinationsBySet.get(s2).push(c2);
            } else {
              combinationsBySet.set(s2, [c2]);
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return function(a2, b2) {
      var r2 = common(a2, b2, toKey$1);
      if (r2.done != null) {
        return r2.done;
      }
      if (!r2.aIsSet && !r2.bIsSet) {
        return 0;
      }
      if (r2.aIsSet && !r2.bIsSet) {
        return aInB(b2, r2) ? b2.cardinality : 0;
      }
      if (!r2.aIsSet && r2.bIsSet) {
        return bInA(a2, r2) ? a2.cardinality : 0;
      }
      var hasA = combinationsBySet.get(r2.aKey);
      var hasB = combinationsBySet.get(r2.bKey);
      if (!hasA || !hasB) {
        return fallback(a2, b2);
      }
      if (hasA.length < hasB.length) {
        return hasA.reduce(function(acc, c3) {
          return acc + (c3.sets.has(r2.bKey) ? c3.cardinality : 0);
        }, 0);
      }
      return hasB.reduce(function(acc, c3) {
        return acc + (c3.sets.has(r2.aKey) ? c3.cardinality : 0);
      }, 0);
    };
  }
  function generateIntersectionOverlapFunction(combinations2, fallback) {
    var toKey$1 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : toKey;
    var combinationsByKey = new Map(keyedCombinations(combinations2, toKey$1).map(function(d2) {
      return [d2.key, d2.cardinality];
    }));
    return function(a2, b2) {
      var r2 = common(a2, b2, toKey$1);
      if (r2.done != null) {
        return r2.done;
      }
      if (r2.aIsSet && !r2.bIsSet && aInB(b2, r2)) {
        return b2.cardinality;
      }
      if (!r2.aIsSet && r2.bIsSet && bInA(a2, r2)) {
        return a2.cardinality;
      }
      var key = combinedKey(a2, b2, r2);
      if (!combinationsByKey.has(key)) {
        return fallback(a2, b2);
      }
      return combinationsByKey.get(key);
    };
  }
  function generateUnionOverlapFunction(combinations2, fallback) {
    var toKey$1 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : toKey;
    var combinationsByKey = new Map(keyedCombinations(combinations2, toKey$1).map(function(d2) {
      return [d2.key, d2.cardinality];
    }));
    return function(a2, b2) {
      var r2 = common(a2, b2, toKey$1);
      if (r2.done != null) {
        return r2.done;
      }
      if (r2.aIsSet && !r2.bIsSet && aInB(b2, r2)) {
        return a2.cardinality;
      }
      if (!r2.aIsSet && r2.bIsSet && bInA(a2, r2)) {
        return b2.cardinality;
      }
      var key = combinedKey(a2, b2, r2);
      if (!combinationsByKey.has(key)) {
        return fallback(a2, b2);
      }
      return a2.cardinality + b2.cardinality - combinationsByKey.get(key);
    };
  }
  function generateOverlapFunction(combinations2, fallback) {
    var toKey$1 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : toKey;
    if (combinations2.length === 0) {
      return fallback;
    }
    var firstType = combinations2[0].type;
    if (combinations2.some(function(s2) {
      return s2.type !== firstType;
    })) {
      return fallback;
    }
    switch (firstType) {
      case "union":
        return generateUnionOverlapFunction(combinations2, fallback, toKey$1);
      case "intersection":
        return generateIntersectionOverlapFunction(combinations2, fallback, toKey$1);
      case "distinctIntersection":
        return generateDistinctOverlapFunction(combinations2, fallback, toKey$1);
    }
    return fallback;
  }
  function compressLine(line) {
    if (line.length === 0) {
      return "";
    }
    var r2 = [];
    var start = line[0];
    var len2 = 1;
    for (var i2 = 1; i2 < line.length; i2++) {
      var v2 = line[i2];
      if (v2 === start) {
        len2++;
      } else {
        if (len2 > 1) {
          r2.push("".concat(start, "=").concat(len2 - 1));
        } else if (start === 0) {
          r2.push("");
        } else {
          r2.push(start.toString());
        }
        start = v2;
        len2 = 1;
      }
    }
    if (len2 > 1) {
      r2.push("".concat(start, "=").concat(len2));
    } else if (start === 0) {
      r2.push("");
    } else {
      r2.push(start.toString());
    }
    return r2.join(",");
  }
  function compressMatrix(matrix) {
    if (matrix.length === 0) {
      return "";
    }
    var rows = matrix.length;
    var flat = matrix.flat();
    return "".concat(rows, ";").concat(compressLine(flat));
  }
  function generateOverlapLookup(sets2, combinations2) {
    var _ref3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, toElemKey = _ref3.toElemKey, _ref3$what = _ref3.what, what = _ref3$what === void 0 ? "intersection" : _ref3$what, _ref3$compress = _ref3.compress, compress = _ref3$compress === void 0 ? "auto" : _ref3$compress;
    var data = sets2.concat(combinations2);
    function overlapF(set) {
      if (set.overlap) {
        return set.overlap;
      }
      var f2 = setOverlapFactory(set.elems, toElemKey);
      return function(v2) {
        if (v2.overlap) {
          return v2.overlap(set);
        }
        return f2(v2.elems)[what];
      };
    }
    var matrix = data.map(function(set, i2) {
      var overlap = overlapF(set);
      var r2 = [];
      for (var j2 = i2 + 1; j2 < data.length; j2++) {
        r2.push(overlap(data[j2]));
      }
      return r2;
    });
    matrix.pop();
    if (compress === "no") {
      return matrix;
    }
    var compressed = compressMatrix(matrix);
    if (compress === "yes") {
      return compressed;
    }
    var encodedLength = JSON.stringify(matrix).length;
    var compressedLength = compressed.length + 2;
    return compressedLength < encodedLength * 0.6 ? compressed : matrix;
  }
  var bandScale$1 = function bandScale(domain, size, padding) {
    var blocks = domain.length + padding;
    var step = size / Math.max(1, blocks);
    var start = size - step * domain.length;
    var lookup = new Map(domain.map(function(d2, i2) {
      return [d2, i2];
    }));
    var bandwidth = step / (1 + padding);
    var scale = function scale2(v2) {
      var index = lookup.get(v2);
      if (index == null) {
        return void 0;
      }
      return start + step * index;
    };
    scale.bandwidth = function() {
      return bandwidth;
    };
    return scale;
  };
  function hasOverlap(positions, heights) {
    var stride = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    for (var i2 = 0; i2 < positions.length - stride; i2 += stride) {
      var pos_i = positions[i2];
      var pos_n = positions[i2 + 1];
      if (pos_i < pos_n) {
        var right = pos_i + heights[i2] / 2;
        var left = pos_n - heights[i2 + 1] / 2;
        if (right > left) {
          return true;
        }
      } else {
        var _left = pos_i - heights[i2] / 2;
        var _right = pos_n + heights[i2 + 1] / 2;
        if (_right > _left) {
          return true;
        }
      }
    }
    return false;
  }
  function ensureLast(ticks, max, scale, heightPerTick, toStr2) {
    var last = ticks[ticks.length - 1];
    if (!last.label) {
      for (var j2 = ticks.length - 2; j2 > 0; --j2) {
        if (ticks[j2].label) {
          last = ticks[j2];
          break;
        }
      }
    }
    if (last.value < max) {
      var pos_l = scale(last.value);
      var pos_max = scale(max);
      if (pos_l < pos_max) {
        var right = pos_l + heightPerTick(last.value) / 2;
        var left = pos_max - heightPerTick(max) / 2;
        if (right < left) {
          ticks.push({
            value: max,
            label: toStr2(max)
          });
        }
      } else {
        var _left2 = pos_l - heightPerTick(last.value) / 2;
        var _right2 = pos_max + heightPerTick(max) / 2;
        if (_right2 < _left2) {
          ticks.push({
            value: max,
            label: toStr2(max)
          });
        }
      }
    }
    return ticks;
  }
  function genTicks(values) {
    var toStr2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : String;
    var stride = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    return values.map(function(v2, i2) {
      return {
        value: v2,
        label: stride === 1 || i2 % stride === 0 ? toStr2(v2) : void 0
      };
    });
  }
  function checkValues(values, scale, heightPerTick, max, toStr2) {
    var positions = values.map(function(v2) {
      return scale(v2);
    });
    var heights = values.map(function(v2) {
      return heightPerTick(v2);
    });
    if (!hasOverlap(positions, heights)) {
      return ensureLast(genTicks(values, toStr2), max, scale, heightPerTick, toStr2);
    }
    if (!hasOverlap(positions, heights, 2)) {
      return ensureLast(genTicks(values, toStr2), max, scale, heightPerTick, toStr2);
    }
    return null;
  }
  function toStr$1(v2) {
    return v2.toLocaleString();
  }
  function niceFactors(max) {
    var maxCount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 11;
    var digits = Math.max(0, Math.floor(Math.log10(max) - 0.5));
    var factor = Math.pow(10, digits);
    var factors = [1, 2, 5];
    var r2 = factors.map(function(f2) {
      return f2 * factor;
    });
    if (digits > 0) {
      r2.unshift(factors[factors.length - 1] * Math.pow(10, digits - 1));
    }
    r2.push(factors[0] * Math.pow(10, digits + 1));
    var lower = Math.ceil(max / maxCount);
    return r2.filter(function(d2) {
      return d2 >= lower && d2 <= max;
    });
  }
  function range$1(max) {
    var inc = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    var values = [];
    for (var v2 = 0; v2 <= max; v2 += inc) {
      values.push(v2);
    }
    return values;
  }
  function distributeTicks$1(max, maxCount, scale, heightPerTick) {
    if (maxCount <= 0) {
      return [];
    }
    var factors = niceFactors(max, maxCount);
    for (var i2 = 0; i2 < factors.length; i2++) {
      var values = range$1(max, factors[i2]);
      var r2 = checkValues(values, scale, heightPerTick, max, toStr$1);
      if (r2) {
        return r2;
      }
    }
    return genTicks([0, max], toStr$1);
  }
  var linearScale = function linearScale2(max, range2, options) {
    var size = range2[1] - range2[0];
    var domain = max;
    var scale = function scale2(v2) {
      var cv = Math.max(0, Math.min(v2, domain));
      var n2 = cv / domain;
      return range2[0] + n2 * size;
    };
    scale.ticks = function() {
      var count2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
      if (options.orientation === "vertical") {
        var heightPerTick = Math.ceil(options.fontSizeHint * 1.4);
        return distributeTicks$1(max, count2 + 1, scale, function() {
          return heightPerTick;
        });
      }
      var widthPerChar = options.fontSizeHint / 1.4;
      return distributeTicks$1(max, count2 + 1, scale, function(v2) {
        return Math.ceil(toStr$1(v2).length * widthPerChar);
      });
    };
    scale.tickFormat = function() {
      return toStr$1;
    };
    return scale;
  };
  function toStr(v2) {
    var orders = ["", "k", "M", "G"];
    var order = Math.max(0, Math.min(Math.floor(Math.log10(v2) / 3), orders.length - 1));
    var vi = Math.round(v2 / Math.pow(10, order * 3 - 1)) / 10;
    return "".concat(vi.toLocaleString()).concat(orders[order]);
  }
  function range(max, factor) {
    var values = [];
    var inc = Math.pow(10, factor);
    for (var v2 = 1; v2 <= max; v2 *= inc) {
      values.push(v2);
    }
    return values;
  }
  function generateInnerTicks(max, factor) {
    var values = [];
    var inc = 10;
    for (var v2 = 1, i2 = 0; v2 <= max; v2 *= inc, i2++) {
      values.push({
        value: v2,
        label: factor === 1 || i2 % factor === 0 ? toStr(v2) : void 0
      });
      for (var vv = v2 + v2; vv < v2 * inc && vv < max; vv += v2 * factor) {
        values.push({
          value: vv
        });
      }
    }
    return values;
  }
  function distributeTicks(max, maxCount, scale, heightPerTick) {
    if (maxCount <= 0) {
      return [];
    }
    for (var _i3 = 0, _arr = [1, 2, 5]; _i3 < _arr.length; _i3++) {
      var factor = _arr[_i3];
      var values = range(max, factor);
      var r2 = checkValues(values, scale, heightPerTick, max, toStr);
      if (r2) {
        return ensureLast(generateInnerTicks(max, factor), max, scale, heightPerTick, toStr);
      }
    }
    return genTicks([0, max], toStr);
  }
  var logScale = function logScale2(max, range2, options) {
    var size = range2[1] - range2[0];
    var domain = max < 1 ? 1 : Math.log10(max);
    var scale = function scale2(v2) {
      var cv = Math.max(0, Math.min(v2, domain));
      var n2 = cv <= 1 ? 0 : Math.log10(cv) / domain;
      return range2[0] + n2 * size;
    };
    scale.ticks = function() {
      var count2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
      if (options.orientation === "vertical") {
        var heightPerTick = Math.ceil(options.fontSizeHint * 1.4);
        return distributeTicks(max, count2 + 1, scale, function() {
          return heightPerTick;
        });
      }
      var widthPerChar = options.fontSizeHint / 1.4;
      return distributeTicks(max, count2 + 1, scale, function(v2) {
        return Math.ceil(toStr(v2).length * widthPerChar);
      });
    };
    scale.tickFormat = function() {
      return toStr;
    };
    return scale;
  };
  function compressIndicesArray(arr) {
    if (arr.length === 0) {
      return "";
    }
    var encoded = [];
    var startIndex = 0;
    var push = function push2(i3) {
      if (i3 === startIndex + 1) {
        encoded.push(arr[startIndex].toString());
      } else if (i3 === startIndex + 2 && i3 < 10) {
        encoded.push("".concat(arr[startIndex], ",").concat(arr[startIndex + 1]));
      } else {
        encoded.push("".concat(arr[startIndex], "+").concat(i3 - startIndex - 1));
      }
      return i3;
    };
    for (var i2 = 1; i2 < arr.length; i2++) {
      var expected = arr[i2 - 1] + 1;
      var v2 = arr[i2];
      if (v2 !== expected) {
        startIndex = push(i2);
        startIndex = i2;
      }
    }
    push(arr.length);
    return encoded.join(",");
  }
  function toIndicesArray(arr, toIndex) {
    var _ref4 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, sortAble = _ref4.sortAble, _ref4$compress = _ref4.compress, compress = _ref4$compress === void 0 ? "auto" : _ref4$compress;
    if (arr.length === 0) {
      return [];
    }
    var base = arr.map(function(v2) {
      return toIndex(v2);
    });
    if (compress === "no") {
      return base;
    }
    if (sortAble) {
      base.sort(function(a2, b2) {
        return a2 - b2;
      });
    }
    var encoded = compressIndicesArray(base);
    var baseLength = JSON.stringify(base).length;
    var encodedLength = encoded.length + 2;
    if (encodedLength < baseLength * 0.6 || baseLength - encodedLength > 50 || compress === "yes" && encodedLength < baseLength) {
      return encoded;
    }
    return base;
  }
  function withColor(v2, s2) {
    if (s2.color) {
      v2.color = s2.color;
    }
    return v2;
  }
  function toDump(data) {
    var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _a;
    var indicesOptions = Object.assign({
      sortAble: true
    }, config);
    var toKey$1 = (_a = config.toKey) !== null && _a !== void 0 ? _a : toKey;
    var bySetKey = new Map(data.sets.map(function(s2, i2) {
      return [toKey$1(s2), i2];
    }));
    var byCombinationKey = new Map(data.combinations.map(function(s2, i2) {
      return [toKey$1(s2), i2];
    }));
    var toSetRef = function toSetRef2(s2) {
      if (s2.type === "set") {
        return {
          type: s2.type,
          index: bySetKey.get(toKey$1(s2))
        };
      }
      var index = byCombinationKey.get(toKey$1(s2));
      if (index == null || index < 0) {
        return toIndicesArray(s2.elems, data.toElemIndex, indicesOptions);
      }
      return {
        type: s2.type,
        index
      };
    };
    var setLookup = data.sets.map(function(s2, i2) {
      return {
        key: toKey$1(s2),
        i: i2
      };
    });
    return {
      sets: data.sets.map(function(set) {
        return withColor({
          name: set.name,
          cardinality: set.cardinality,
          elems: toIndicesArray(set.elems, data.toElemIndex, indicesOptions)
        }, set);
      }),
      combinations: config.compress === "no" ? data.combinations.map(function(c2) {
        var setKeys = new Set(Array.from(c2.sets).map(toKey$1));
        return withColor({
          name: c2.name,
          type: c2.type,
          cardinality: c2.cardinality,
          degree: c2.degree,
          sets: setLookup.filter(function(_ref5) {
            var key = _ref5.key;
            return setKeys.has(key);
          }).map(function(_ref6) {
            var i2 = _ref6.i;
            return i2;
          }),
          elems: toIndicesArray(c2.elems, data.toElemIndex, indicesOptions)
        }, c2);
      }) : void 0,
      combinationOptions: data.combinationOptions,
      selection: data.selection ? Array.isArray(data.selection) ? toIndicesArray(data.selection, data.toElemIndex, indicesOptions) : toSetRef(data.selection) : void 0,
      queries: data.queries.map(function(query) {
        var elems = isSetQuery(query) ? toSetRef(query.set) : toIndicesArray(Array.from(query.elems), data.toElemIndex, indicesOptions);
        return {
          name: query.name,
          color: query.color,
          set: typeof elems === "string" || Array.isArray(elems) ? void 0 : elems,
          elems: typeof elems === "string" || Array.isArray(elems) ? elems : void 0
        };
      })
    };
  }
  function generateName(sets2, type) {
    if (sets2.length === 1) {
      return sets2[0].name;
    }
    return "(".concat(sets2.map(function(set) {
      return set.name;
    }).join(SET_JOINERS[type]), ")");
  }
  function toStaticDump(data) {
    var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _a;
    var toKey$1 = (_a = config.toKey) !== null && _a !== void 0 ? _a : toKey;
    var bySetKey = new Map(data.sets.map(function(s2, i2) {
      return [toKey$1(s2), i2];
    }));
    var byCombinationKey = new Map(data.combinations.map(function(s2, i2) {
      return [toKey$1(s2), i2];
    }));
    var toSelectionSetRef = function toSelectionSetRef2(s2) {
      if (isSetLike$1(s2)) {
        if (s2.type === "set") {
          return {
            type: s2.type,
            index: bySetKey.get(toKey$1(s2))
          };
        }
        var index = byCombinationKey.get(toKey$1(s2));
        if (index != null && index >= 0) {
          return {
            type: s2.type,
            index
          };
        }
      }
      var overlapF = setOverlapFactory(isSetLike$1(s2) ? s2.elems : s2);
      return data.sets.map(function(set) {
        return overlapF(set.elems).intersection;
      }).concat(data.combinations.map(function(set) {
        return overlapF(set.elems).intersection;
      }));
    };
    var setIndex = new Map(data.sets.map(function(set, i2) {
      return [toKey$1(set), i2];
    }));
    var overlaps = generateOverlapLookup(data.sets, data.combinations, config);
    var shortNames = config.compress === "yes";
    var compressCombination = function compressCombination2(set) {
      var partOf = Array.from(set.sets).map(function(s2) {
        return setIndex.get(toKey$1(s2));
      }).sort(function(a2, b2) {
        return a2 - b2;
      });
      var r2 = {
        c: set.cardinality,
        s: partOf.reduce(function(acc, i2) {
          return acc + Math.pow(2, i2);
        }, 0)
      };
      if (set.name !== generateName(partOf.map(function(i2) {
        return data.sets[i2];
      }), set.type)) {
        r2.n = set.name;
      }
      if (set.type !== "intersection") {
        r2.type = set.type[0];
      }
      if (set.color) {
        r2.cc = set.color;
      }
      return r2;
    };
    return {
      sets: shortNames ? data.sets.map(function(set) {
        return {
          n: set.name,
          cc: set.color,
          c: set.cardinality
        };
      }) : data.sets.map(function(set) {
        return withColor({
          name: set.name,
          cardinality: set.cardinality
        }, set);
      }),
      combinations: shortNames ? data.combinations.map(compressCombination) : data.combinations.map(function(set) {
        return withColor({
          name: set.name,
          cardinality: set.cardinality,
          type: set.type,
          sets: Array.from(set.sets).map(function(s2) {
            return setIndex.get(toKey$1(s2));
          }).sort(function(a2, b2) {
            return a2 - b2;
          })
        }, set);
      }),
      overlaps,
      selection: data.selection ? toSelectionSetRef(data.selection) : void 0,
      queries: data.queries.map(function(query) {
        if (isSetQuery(query)) {
          var ref = toSelectionSetRef(query.set);
          if (Array.isArray(ref)) {
            return {
              name: query.name,
              color: query.color,
              overlaps: ref
            };
          }
          return {
            name: query.name,
            color: query.color,
            set: ref
          };
        }
        var overlapF = setOverlapFactory(query.elems);
        var overlaps2 = data.sets.map(function(set) {
          return overlapF(set.elems).intersection;
        }).concat(data.combinations.map(function(set) {
          return overlapF(set.elems).intersection;
        }));
        return {
          name: query.name,
          color: query.color,
          overlaps: overlaps2
        };
      })
    };
  }
  var lzString = { exports: {} };
  (function(module) {
    var LZString2 = function() {
      var f2 = String.fromCharCode;
      var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
      var baseReverseDic = {};
      function getBaseValue(alphabet, character) {
        if (!baseReverseDic[alphabet]) {
          baseReverseDic[alphabet] = {};
          for (var i2 = 0; i2 < alphabet.length; i2++) {
            baseReverseDic[alphabet][alphabet.charAt(i2)] = i2;
          }
        }
        return baseReverseDic[alphabet][character];
      }
      var LZString3 = {
        compressToBase64: function compressToBase64(input) {
          if (input == null)
            return "";
          var res = LZString3._compress(input, 6, function(a2) {
            return keyStrBase64.charAt(a2);
          });
          switch (res.length % 4) {
            default:
            case 0:
              return res;
            case 1:
              return res + "===";
            case 2:
              return res + "==";
            case 3:
              return res + "=";
          }
        },
        decompressFromBase64: function decompressFromBase64(input) {
          if (input == null)
            return "";
          if (input == "")
            return null;
          return LZString3._decompress(input.length, 32, function(index) {
            return getBaseValue(keyStrBase64, input.charAt(index));
          });
        },
        compressToUTF16: function compressToUTF16(input) {
          if (input == null)
            return "";
          return LZString3._compress(input, 15, function(a2) {
            return f2(a2 + 32);
          }) + " ";
        },
        decompressFromUTF16: function decompressFromUTF16(compressed) {
          if (compressed == null)
            return "";
          if (compressed == "")
            return null;
          return LZString3._decompress(compressed.length, 16384, function(index) {
            return compressed.charCodeAt(index) - 32;
          });
        },
        compressToUint8Array: function compressToUint8Array(uncompressed) {
          var compressed = LZString3.compress(uncompressed);
          var buf = new Uint8Array(compressed.length * 2);
          for (var i2 = 0, TotalLen = compressed.length; i2 < TotalLen; i2++) {
            var current_value = compressed.charCodeAt(i2);
            buf[i2 * 2] = current_value >>> 8;
            buf[i2 * 2 + 1] = current_value % 256;
          }
          return buf;
        },
        decompressFromUint8Array: function decompressFromUint8Array(compressed) {
          if (compressed === null || compressed === void 0) {
            return LZString3.decompress(compressed);
          } else {
            var buf = new Array(compressed.length / 2);
            for (var i2 = 0, TotalLen = buf.length; i2 < TotalLen; i2++) {
              buf[i2] = compressed[i2 * 2] * 256 + compressed[i2 * 2 + 1];
            }
            var result = [];
            buf.forEach(function(c2) {
              result.push(f2(c2));
            });
            return LZString3.decompress(result.join(""));
          }
        },
        compressToEncodedURIComponent: function compressToEncodedURIComponent(input) {
          if (input == null)
            return "";
          return LZString3._compress(input, 6, function(a2) {
            return keyStrUriSafe.charAt(a2);
          });
        },
        decompressFromEncodedURIComponent: function decompressFromEncodedURIComponent(input) {
          if (input == null)
            return "";
          if (input == "")
            return null;
          input = input.replace(/ /g, "+");
          return LZString3._decompress(input.length, 32, function(index) {
            return getBaseValue(keyStrUriSafe, input.charAt(index));
          });
        },
        compress: function compress(uncompressed) {
          return LZString3._compress(uncompressed, 16, function(a2) {
            return f2(a2);
          });
        },
        _compress: function _compress(uncompressed, bitsPerChar, getCharFromInt) {
          if (uncompressed == null)
            return "";
          var i2, value, context_dictionary = {}, context_dictionaryToCreate = {}, context_c = "", context_wc = "", context_w = "", context_enlargeIn = 2, context_dictSize = 3, context_numBits = 2, context_data = [], context_data_val = 0, context_data_position = 0, ii;
          for (ii = 0; ii < uncompressed.length; ii += 1) {
            context_c = uncompressed.charAt(ii);
            if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
              context_dictionary[context_c] = context_dictSize++;
              context_dictionaryToCreate[context_c] = true;
            }
            context_wc = context_w + context_c;
            if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {
              context_w = context_wc;
            } else {
              if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
                if (context_w.charCodeAt(0) < 256) {
                  for (i2 = 0; i2 < context_numBits; i2++) {
                    context_data_val = context_data_val << 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                  }
                  value = context_w.charCodeAt(0);
                  for (i2 = 0; i2 < 8; i2++) {
                    context_data_val = context_data_val << 1 | value & 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = value >> 1;
                  }
                } else {
                  value = 1;
                  for (i2 = 0; i2 < context_numBits; i2++) {
                    context_data_val = context_data_val << 1 | value;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = 0;
                  }
                  value = context_w.charCodeAt(0);
                  for (i2 = 0; i2 < 16; i2++) {
                    context_data_val = context_data_val << 1 | value & 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = value >> 1;
                  }
                }
                context_enlargeIn--;
                if (context_enlargeIn == 0) {
                  context_enlargeIn = Math.pow(2, context_numBits);
                  context_numBits++;
                }
                delete context_dictionaryToCreate[context_w];
              } else {
                value = context_dictionary[context_w];
                for (i2 = 0; i2 < context_numBits; i2++) {
                  context_data_val = context_data_val << 1 | value & 1;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                  value = value >> 1;
                }
              }
              context_enlargeIn--;
              if (context_enlargeIn == 0) {
                context_enlargeIn = Math.pow(2, context_numBits);
                context_numBits++;
              }
              context_dictionary[context_wc] = context_dictSize++;
              context_w = String(context_c);
            }
          }
          if (context_w !== "") {
            if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
              if (context_w.charCodeAt(0) < 256) {
                for (i2 = 0; i2 < context_numBits; i2++) {
                  context_data_val = context_data_val << 1;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                }
                value = context_w.charCodeAt(0);
                for (i2 = 0; i2 < 8; i2++) {
                  context_data_val = context_data_val << 1 | value & 1;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                  value = value >> 1;
                }
              } else {
                value = 1;
                for (i2 = 0; i2 < context_numBits; i2++) {
                  context_data_val = context_data_val << 1 | value;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                  value = 0;
                }
                value = context_w.charCodeAt(0);
                for (i2 = 0; i2 < 16; i2++) {
                  context_data_val = context_data_val << 1 | value & 1;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                  value = value >> 1;
                }
              }
              context_enlargeIn--;
              if (context_enlargeIn == 0) {
                context_enlargeIn = Math.pow(2, context_numBits);
                context_numBits++;
              }
              delete context_dictionaryToCreate[context_w];
            } else {
              value = context_dictionary[context_w];
              for (i2 = 0; i2 < context_numBits; i2++) {
                context_data_val = context_data_val << 1 | value & 1;
                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }
                value = value >> 1;
              }
            }
            context_enlargeIn--;
            if (context_enlargeIn == 0) {
              context_enlargeIn = Math.pow(2, context_numBits);
              context_numBits++;
            }
          }
          value = 2;
          for (i2 = 0; i2 < context_numBits; i2++) {
            context_data_val = context_data_val << 1 | value & 1;
            if (context_data_position == bitsPerChar - 1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
          while (true) {
            context_data_val = context_data_val << 1;
            if (context_data_position == bitsPerChar - 1) {
              context_data.push(getCharFromInt(context_data_val));
              break;
            } else
              context_data_position++;
          }
          return context_data.join("");
        },
        decompress: function decompress(compressed) {
          if (compressed == null)
            return "";
          if (compressed == "")
            return null;
          return LZString3._decompress(compressed.length, 32768, function(index) {
            return compressed.charCodeAt(index);
          });
        },
        _decompress: function _decompress(length, resetValue, getNextValue) {
          var dictionary = [], enlargeIn = 4, dictSize = 4, numBits = 3, entry = "", result = [], i2, w2, bits, resb, maxpower, power, c2, data = {
            val: getNextValue(0),
            position: resetValue,
            index: 1
          };
          for (i2 = 0; i2 < 3; i2 += 1) {
            dictionary[i2] = i2;
          }
          bits = 0;
          maxpower = Math.pow(2, 2);
          power = 1;
          while (power != maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb > 0 ? 1 : 0) * power;
            power <<= 1;
          }
          switch (bits) {
            case 0:
              bits = 0;
              maxpower = Math.pow(2, 8);
              power = 1;
              while (power != maxpower) {
                resb = data.val & data.position;
                data.position >>= 1;
                if (data.position == 0) {
                  data.position = resetValue;
                  data.val = getNextValue(data.index++);
                }
                bits |= (resb > 0 ? 1 : 0) * power;
                power <<= 1;
              }
              c2 = f2(bits);
              break;
            case 1:
              bits = 0;
              maxpower = Math.pow(2, 16);
              power = 1;
              while (power != maxpower) {
                resb = data.val & data.position;
                data.position >>= 1;
                if (data.position == 0) {
                  data.position = resetValue;
                  data.val = getNextValue(data.index++);
                }
                bits |= (resb > 0 ? 1 : 0) * power;
                power <<= 1;
              }
              c2 = f2(bits);
              break;
            case 2:
              return "";
          }
          dictionary[3] = c2;
          w2 = c2;
          result.push(c2);
          while (true) {
            if (data.index > length) {
              return "";
            }
            bits = 0;
            maxpower = Math.pow(2, numBits);
            power = 1;
            while (power != maxpower) {
              resb = data.val & data.position;
              data.position >>= 1;
              if (data.position == 0) {
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }
              bits |= (resb > 0 ? 1 : 0) * power;
              power <<= 1;
            }
            switch (c2 = bits) {
              case 0:
                bits = 0;
                maxpower = Math.pow(2, 8);
                power = 1;
                while (power != maxpower) {
                  resb = data.val & data.position;
                  data.position >>= 1;
                  if (data.position == 0) {
                    data.position = resetValue;
                    data.val = getNextValue(data.index++);
                  }
                  bits |= (resb > 0 ? 1 : 0) * power;
                  power <<= 1;
                }
                dictionary[dictSize++] = f2(bits);
                c2 = dictSize - 1;
                enlargeIn--;
                break;
              case 1:
                bits = 0;
                maxpower = Math.pow(2, 16);
                power = 1;
                while (power != maxpower) {
                  resb = data.val & data.position;
                  data.position >>= 1;
                  if (data.position == 0) {
                    data.position = resetValue;
                    data.val = getNextValue(data.index++);
                  }
                  bits |= (resb > 0 ? 1 : 0) * power;
                  power <<= 1;
                }
                dictionary[dictSize++] = f2(bits);
                c2 = dictSize - 1;
                enlargeIn--;
                break;
              case 2:
                return result.join("");
            }
            if (enlargeIn == 0) {
              enlargeIn = Math.pow(2, numBits);
              numBits++;
            }
            if (dictionary[c2]) {
              entry = dictionary[c2];
            } else {
              if (c2 === dictSize) {
                entry = w2 + w2.charAt(0);
              } else {
                return null;
              }
            }
            result.push(entry);
            dictionary[dictSize++] = w2 + entry.charAt(0);
            enlargeIn--;
            w2 = entry;
            if (enlargeIn == 0) {
              enlargeIn = Math.pow(2, numBits);
              numBits++;
            }
          }
        }
      };
      return LZString3;
    }();
    if (module != null) {
      module.exports = LZString2;
    }
  })(lzString);
  var LZString = lzString.exports;
  function extractStyleId(node) {
    return Array.from(node.classList).find(function(d2) {
      return d2.startsWith("root-");
    }).slice("root-".length);
  }
  function extractTitle(node, styleId) {
    var _a, _b;
    return (_b = (_a = node.querySelector("titleTextStyle-".concat(styleId))) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : "UpSetJS";
  }
  function extractDescription(node, styleId) {
    var _a, _b;
    return (_b = (_a = node.querySelector("descTextStyle-".concat(styleId))) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : "";
  }
  var EMPTY_OBJECT = {};
  var EMPTY_ARRAY$2 = [];
  var DEFAULT_FONT_SIZES = {
    setLabel: "16px",
    axisTick: "10px",
    chartLabel: "16px",
    barLabel: "10px",
    legend: "10px",
    description: "16px",
    title: "24px",
    valueLabel: "12px",
    exportLabel: "10px"
  };
  var DEFAULT_WIDTH_RATIO = [0.18, 0.12, 0.7];
  var DEFAULT_HEIGHT_RATIO = [0.6, 0.4];
  var DEFAULT_COMBINATIONS = {
    type: "intersection",
    order: ["cardinality:desc", "name:asc"]
  };
  var FONT_SIZES_KEYS = Object.keys(DEFAULT_FONT_SIZES);
  var MULTI_STYLE_KEYS = ["axisTick", "bar", "barLabel", "chartLabel", "dot", "legend", "title", "description", "setLabel", "set", "valueLabel"];
  var EXPORT_OPTION_KEYS = ["dump", "png", "share", "svg", "vega"];
  var OVERFLOW_OPACITY_FACTOR = [0.7, 0.4];
  var OVERFLOW_PADDING_FACTOR = [0.15, 0.3];
  var lightTheme = {
    selectionColor: "#ffa500",
    color: "#000000",
    hasSelectionColor: "",
    opacity: 1,
    hasSelectionOpacity: -1,
    textColor: "#000000",
    hoverHintColor: "#cccccc",
    notMemberColor: "#d3d3d3",
    alternatingBackgroundColor: "rgba(0,0,0,0.05)",
    valueTextColor: "#000000",
    strokeColor: "#000000",
    backgroundColor: "#ffffff",
    filled: false
  };
  var darkTheme = {
    selectionColor: "#ffa500",
    color: "#cccccc",
    hasSelectionColor: "",
    opacity: 1,
    hasSelectionOpacity: -1,
    textColor: "#ffffff",
    hoverHintColor: "#d9d9d9",
    notMemberColor: "#666666",
    alternatingBackgroundColor: "rgba(255, 255, 255, 0.2)",
    valueTextColor: "#ffffff",
    strokeColor: "#ffffff",
    backgroundColor: "#303030",
    filled: false
  };
  var vegaTheme = {
    selectionColor: "#4c78a8",
    color: "#4c78a8",
    hasSelectionColor: "#c9d6e5",
    opacity: 1,
    hasSelectionOpacity: -1,
    textColor: "#000000",
    hoverHintColor: "#cccccc",
    notMemberColor: "#d3d3d3",
    alternatingBackgroundColor: "rgba(0,0,0,0.05)",
    valueTextColor: "#000000",
    strokeColor: "#000000",
    backgroundColor: "#ffffff",
    filled: true
  };
  function getDefaultTheme(theme2) {
    return theme2 === "vega" ? vegaTheme : theme2 === "dark" ? darkTheme : lightTheme;
  }
  function areCombinations$1(combinations2) {
    return Array.isArray(combinations2);
  }
  function styleFactory(rules) {
    return React.createElement("style", null, rules);
  }
  function fillGeneric(base, props) {
    var others = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var theme2 = getDefaultTheme(props.theme);
    return Object.assign(base, {
      queryLegend: props.queries != null && props.queries.length > 0,
      theme: "light",
      padding: 20,
      selection: null,
      title: "",
      description: "",
      fontFamily: "sans-serif",
      queries: EMPTY_ARRAY$2,
      exportButtons: true,
      className: "",
      fontSizes: DEFAULT_FONT_SIZES,
      classNames: EMPTY_OBJECT,
      style: EMPTY_OBJECT,
      styles: EMPTY_OBJECT,
      toKey,
      tooltips: true,
      styleFactory
    }, theme2, props, others, props.fontSizes ? {
      fontSizes: Object.assign({}, DEFAULT_FONT_SIZES, props.fontSizes)
    } : EMPTY_OBJECT);
  }
  function fillDefaultsG(props) {
    return fillGeneric({
      barPadding: 0.3,
      dotPadding: 0.7,
      combinations: DEFAULT_COMBINATIONS,
      combinationName: props.combinations != null && !areCombinations$1(props.combinations) && props.combinations.type === "union" ? "Union Size" : "Intersection Size",
      barLabelOffset: 2,
      setNameAxisOffset: "auto",
      combinationNameAxisOffset: "auto",
      setName: "Set Size",
      widthRatios: DEFAULT_WIDTH_RATIO,
      heightRatios: DEFAULT_HEIGHT_RATIO,
      setLabelAlignment: "center",
      numericScale: "linear",
      bandScale: "band",
      childrenFactories: EMPTY_OBJECT,
      setAddons: EMPTY_ARRAY$2,
      combinationAddons: EMPTY_ARRAY$2,
      setAddonPadding: 1,
      combinationAddonPadding: 1,
      emptySelection: true
    }, props);
  }
  function fillDefaults$1(props) {
    return fillDefaultsG(props);
  }
  function createSVG(node, toRemove) {
    var clone = node.cloneNode(true);
    clone.style.backgroundColor = getDefaultTheme(node.dataset.theme).backgroundColor;
    if (toRemove) {
      Array.from(clone.querySelectorAll(toRemove)).forEach(function(d2) {
        return d2.remove();
      });
    }
    return new XMLSerializer().serializeToString(clone);
  }
  function exportSVG$1(node, _ref) {
    var _ref$type = _ref.type, type = _ref$type === void 0 ? "png" : _ref$type, title = _ref.title, toRemove = _ref.toRemove;
    var b2 = new Blob([createSVG(node, toRemove)], {
      type: "image/svg+xml;charset=utf-8"
    });
    var styleId = extractStyleId(node);
    var chartTitle = title !== null && title !== void 0 ? title : extractTitle(node, styleId);
    var url = URL.createObjectURL(b2);
    if (type === "svg") {
      downloadUrl$1(url, "".concat(chartTitle, ".").concat(type), node.ownerDocument);
      URL.revokeObjectURL(url);
      return Promise.resolve();
    }
    return toPNG(url, node).then(function(purl) {
      downloadUrl$1(purl, "".concat(chartTitle, ".").concat(type), node.ownerDocument);
      URL.revokeObjectURL(url);
    });
  }
  function toPNG(url, node) {
    var canvas = node.ownerDocument.createElement("canvas");
    var bb = node.getBoundingClientRect();
    canvas.width = bb.width;
    canvas.height = bb.height;
    var ctx = canvas.getContext("2d");
    var img = new Image(canvas.width, canvas.height);
    return new Promise(function(resolve) {
      img.onload = function() {
        ctx.drawImage(img, 0, 0);
        var png = canvas.toDataURL("image/png");
        resolve(png);
      };
      img.src = url;
    });
  }
  function downloadUrl$1(url, title, doc) {
    var a2 = doc.createElement("a");
    a2.href = url;
    a2.style.position = "absolute";
    a2.style.left = "-10000px";
    a2.style.top = "-10000px";
    a2.download = title;
    doc.body.appendChild(a2);
    a2.click();
    a2.remove();
  }
  function createVegaSpec(svg, title) {
    var _a, _b, _c, _d, _e;
    var resolveStyle = (_c = svg.getComputedStyle || ((_b = (_a = svg.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView) === null || _b === void 0 ? void 0 : _b.getComputedStyle)) !== null && _c !== void 0 ? _c : window.getComputedStyle;
    var styleId = extractStyleId(svg);
    var chartTitle = title !== null && title !== void 0 ? title : extractTitle(svg, styleId);
    var sets2 = Array.from(svg.querySelectorAll("[data-upset=sets] [data-cardinality]")).map(function(set) {
      return {
        name: set.querySelector("text.setTextStyle-".concat(styleId)).textContent,
        cardinality: Number.parseInt(set.dataset.cardinality, 10)
      };
    }).reverse();
    var barLabelOffset = -Number.parseFloat(svg.querySelector(".sBarTextStyle-".concat(styleId)).getAttribute("dx"));
    var color = resolveStyle(svg.querySelector(".fillPrimary-".concat(styleId))).fill;
    var fillNotMember = resolveStyle(svg.querySelector(".fillNotMember-".concat(styleId))).fill;
    var textColor = resolveStyle(svg.querySelector("text")).fill;
    var csName = svg.querySelector(".cChartTextStyle-".concat(styleId)).textContent;
    var setName = svg.querySelector(".sChartTextStyle-".concat(styleId)).textContent;
    var combinations2 = Array.from(svg.querySelectorAll("[data-upset=cs] [data-cardinality]")).map(function(set) {
      return {
        name: set.querySelector("text.hoverBarTextStyle-".concat(styleId)).textContent,
        cardinality: Number.parseInt(set.dataset.cardinality, 10),
        sets: Array.from(set.querySelectorAll(".fillPrimary-".concat(styleId, " > title"))).map(function(n2) {
          return n2.textContent;
        })
      };
    });
    var translateX = function translateX2(v2) {
      return Number.parseFloat(v2.getAttribute("transform").match(/([\d.]+),/)[1]);
    };
    var translateY = function translateY2(v2) {
      return Number.parseFloat(v2.getAttribute("transform").match(/,([\d.]+)/)[1]);
    };
    var base = svg.querySelector("[data-upset=base]");
    var padding = translateX(base);
    var setWidth = translateX(svg.querySelector("[data-upset=csaxis]"));
    var csWidth = Number.parseFloat(base.querySelector("g").firstElementChild.children[1].getAttribute("x2"));
    var csHeight = translateY(svg.querySelector("[data-upset=setaxis]"));
    var labelWidth = Number.parseFloat(svg.querySelector("defs rect").getAttribute("width"));
    var setHeight = Number.parseFloat(svg.querySelector("defs rect").getAttribute("height"));
    var radius = Number.parseFloat(svg.querySelector("[data-cardinality] circle.fillPrimary-".concat(styleId)).getAttribute("r"));
    var hasPrimarySelection = svg.querySelector("[data-upset=sets-s] [data-cardinality]") != null;
    var hasQuery = svg.querySelector("[data-upset=sets-q] [data-cardinality]") != null;
    var hasSelection = hasPrimarySelection || hasQuery;
    var selectionColor = "orange";
    if (hasSelection) {
      Array.from(svg.querySelectorAll("[data-upset=sets-".concat(hasPrimarySelection ? "s]" : "q]:first-of-type", " [data-cardinality]"))).forEach(function(elem) {
        var i2 = sets2.length - Number.parseInt(elem.dataset.i, 10) - 1;
        sets2[i2].selection = Number.parseInt(elem.dataset.cardinality, 10);
      });
      Array.from(svg.querySelectorAll("[data-upset=cs-".concat(hasPrimarySelection ? "s]" : "q]:first-of-type", " [data-cardinality]"))).forEach(function(elem) {
        var i2 = Number.parseInt(elem.dataset.i, 10);
        combinations2[i2].selection = Number.parseInt(elem.dataset.cardinality, 10);
      });
      selectionColor = resolveStyle(svg.querySelector("[data-upset=sets-".concat(hasPrimarySelection ? "s" : "q", "] [data-cardinality]"))).fill;
    }
    var highlightedCombination = Number.parseInt((_e = (_d = svg.querySelector("[data-upset=cs-ss]")) === null || _d === void 0 ? void 0 : _d.dataset.i) !== null && _e !== void 0 ? _e : "-1", 10);
    var filter = highlightedCombination >= 0 ? {
      field: "partOf",
      oneOf: [1, 2]
    } : {
      field: "partOf",
      equal: 1
    };
    return {
      $schema: "https://vega.github.io/schema/vega-lite/v4.json",
      title: chartTitle,
      description: extractDescription(svg, styleId),
      datasets: {
        sets: sets2,
        combinations: combinations2.map(function(c2, i2) {
          return Object.assign({}, c2, {
            partOf: highlightedCombination === i2 ? 2 : 1,
            nsets: [""]
          });
        }).concat(combinations2.map(function(c2) {
          return {
            name: c2.name,
            cardinality: c2.cardinality,
            partOf: 0,
            sets: [""],
            nsets: sets2.filter(function(s2) {
              return !c2.sets.includes(s2.name);
            }).map(function(s2) {
              return s2.name;
            })
          };
        }))
      },
      vconcat: [{
        hconcat: [{
          mark: "bar",
          width: setWidth + labelWidth - 40,
          height: csHeight
        }, {
          width: csWidth,
          height: csHeight,
          data: {
            name: "combinations"
          },
          transform: [{
            filter
          }],
          layer: [{
            mark: {
              type: "bar",
              tooltip: true
            }
          }, {
            mark: {
              type: "text",
              align: "center",
              baseline: "bottom",
              dy: -barLabelOffset
            },
            encoding: {
              text: {
                field: "cardinality",
                type: "quantitative"
              }
            }
          }, hasSelection && {
            mark: {
              type: "bar",
              fill: selectionColor,
              tooltip: true
            },
            encoding: {
              y: {
                field: "selection",
                type: "quantitative"
              }
            }
          }].filter(Boolean),
          encoding: {
            x: {
              field: "name",
              type: "ordinal",
              axis: null,
              sort: null
            },
            y: {
              field: "cardinality",
              type: "quantitative",
              axis: {
                grid: false
              },
              title: csName
            }
          }
        }]
      }, {
        hconcat: [{
          width: setWidth,
          height: setHeight,
          data: {
            name: "sets"
          },
          layer: [{
            mark: {
              type: "bar",
              tooltip: true
            }
          }, {
            mark: {
              type: "text",
              align: "right",
              baseline: "middle",
              dx: -barLabelOffset
            },
            encoding: {
              text: {
                field: "cardinality",
                type: "quantitative"
              }
            }
          }, hasSelection && {
            mark: {
              type: "bar",
              fill: selectionColor,
              tooltip: true
            },
            encoding: {
              x: {
                field: "selection",
                type: "quantitative"
              }
            }
          }].filter(Boolean),
          encoding: {
            y: {
              field: "name",
              type: "ordinal",
              axis: null,
              sort: null
            },
            x: {
              field: "cardinality",
              type: "quantitative",
              title: setName,
              sort: "descending",
              axis: {
                grid: false
              }
            }
          }
        }, {
          data: {
            name: "sets"
          },
          width: labelWidth,
          height: setHeight,
          mark: {
            type: "text",
            align: "center",
            baseline: "middle",
            fontSize: Number.parseInt(resolveStyle(svg.querySelector(".setTextStyle-".concat(styleId))).fontSize, 10)
          },
          encoding: {
            y: {
              field: "name",
              type: "ordinal",
              axis: null,
              sort: null
            },
            text: {
              field: "name",
              type: "ordinal"
            }
          }
        }, {
          width: csWidth,
          height: setHeight,
          data: {
            name: "combinations"
          },
          transform: [{
            flatten: ["sets"],
            as: ["has_set"]
          }, {
            flatten: ["nsets"],
            as: ["has_not_set"]
          }, {
            calculate: "datum.has_set+datum.has_not_set",
            as: "set"
          }],
          layer: [{
            mark: {
              type: "circle",
              size: radius * radius * Math.PI,
              tooltip: true
            },
            encoding: {
              color: {
                field: "partOf",
                type: "nominal",
                legend: null,
                scale: {
                  range: [fillNotMember, color].concat(highlightedCombination >= 0 ? [selectionColor] : [])
                }
              },
              y: {
                field: "set",
                type: "ordinal",
                axis: null,
                sort: null,
                scale: {
                  domain: sets2.map(function(s2) {
                    return s2.name;
                  })
                }
              }
            }
          }, {
            mark: "rule",
            transform: [{
              filter
            }, {
              calculate: "datum.sets[datum.sets.length -1]",
              as: "set_end"
            }],
            encoding: Object.assign({
              y: {
                field: "sets[0]",
                type: "ordinal",
                axis: null,
                sort: null
              },
              y2: {
                field: "set_end"
              }
            }, highlightedCombination < 0 ? {} : {
              color: {
                field: "partOf",
                type: "nominal",
                legend: null,
                scale: {
                  range: [color, selectionColor]
                }
              }
            })
          }],
          encoding: {
            x: {
              field: "name",
              type: "ordinal",
              axis: null,
              sort: null
            }
          }
        }]
      }],
      config: {
        padding,
        background: getDefaultTheme(svg.dataset.theme).backgroundColor,
        concat: {
          spacing: 0
        },
        view: {
          stroke: null
        },
        bar: {
          fill: color
        },
        circle: {
          opacity: 1
        },
        rule: {
          stroke: color,
          strokeWidth: Number.parseInt(resolveStyle(svg.querySelector("[data-upset=cs] [data-cardinality] line")).strokeWidth, 10)
        },
        axis: {
          labelColor: textColor,
          labelFontSize: Number.parseInt(resolveStyle(svg.querySelector(".axisTextStyle-".concat(styleId))).fontSize, 10),
          titleColor: textColor,
          titleFontSize: Number.parseInt(resolveStyle(svg.querySelector(".cChartTextStyle-".concat(styleId))).fontSize, 10)
        },
        title: {
          color: textColor
        },
        text: {
          fill: textColor,
          fontSize: Number.parseInt(resolveStyle(svg.querySelector(".sBarTextStyle-".concat(styleId))).fontSize, 10)
        }
      }
    };
  }
  function exportVegaLite(svg) {
    var _ref2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, title = _ref2.title;
    var spec = createVegaSpec(svg, title);
    var url = URL.createObjectURL(new Blob([JSON.stringify(spec, null, 2)], {
      type: "application/json"
    }));
    downloadUrl$1(url, "".concat(spec.title, ".json"), svg.ownerDocument);
    URL.revokeObjectURL(url);
  }
  var THEME_KEYS = ["selectionColor", "color", "textColor", "hoverHintColor", "notMemberColor", "alternatingBackgroundColor", "hasSelectionColor", "hasSelectionOpacity", "opacity", "strokeColor", "valueTextColor"];
  var LAYOUT_KEYS = ["padding", "barPadding", "dotPadding", "widthRatios", "heightRatios"];
  var STYLE_KEYS = ["fontSizes", "combinationName", "setName", "barLabelOffset", "setNameAxisOffset", "combinationNameAxisOffset", "theme", "fontFamily", "emptySelection", "exportButtons", "queryLegend"];
  var DUMP_KEYS = ["bandScale", "numericScale"].concat(THEME_KEYS, LAYOUT_KEYS, STYLE_KEYS);
  function toDumpProps(props) {
    var _a;
    var full = fillDefaults$1({
      width: 0,
      height: 0,
      sets: (_a = props.sets) !== null && _a !== void 0 ? _a : [],
      combinations: props.combinations,
      theme: props.theme
    });
    var r2 = {};
    DUMP_KEYS.forEach(function(key) {
      var value = props[key];
      var defaultValue = full[key];
      if (key === "theme" && value !== "light") {
        r2[key] = value;
        return;
      }
      if (value == null || value === defaultValue) {
        return;
      }
      if (key === "fontSizes") {
        var empty = true;
        var sub = {};
        FONT_SIZES_KEYS.forEach(function(fKey) {
          var fValue = value[fKey];
          var fDefaultValue = defaultValue[fKey];
          if (fValue !== fDefaultValue) {
            sub[fKey] = fValue;
            empty = false;
          }
        });
        if (!empty) {
          r2[key] = sub;
        }
      } else {
        r2[key] = value;
      }
    });
    return r2;
  }
  function toUpSetJSDump$1(dump, elements, props, author, mode) {
    return Object.assign({
      $schema: "https://upset.js.org/schema.1.0.0.json",
      name: typeof props.title === "string" ? props.title : "UpSetJS",
      description: typeof props.description === "string" ? props.description : "",
      mode,
      author,
      elements,
      attrs: [],
      props: toDumpProps(props)
    }, dump);
  }
  function toUpSetJSStaticDump$1(dump, props, author, mode) {
    return Object.assign({
      $schema: "https://upset.js.org/schema-static.1.0.0.json",
      name: typeof props.title === "string" ? props.title : "UpSetJS",
      description: typeof props.description === "string" ? props.description : "",
      mode,
      author,
      props: toDumpProps(props)
    }, dump);
  }
  function exportDumpData(props, data) {
    var compress = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var mode = arguments.length > 3 ? arguments[3] : void 0;
    var _a, _b;
    var elems = [];
    var lookup = /* @__PURE__ */ new Map();
    var toElemIndex = function toElemIndex2(elem) {
      if (lookup.has(elem)) {
        return lookup.get(elem);
      }
      lookup.set(elem, elems.length);
      elems.push(elem);
      return elems.length - 1;
    };
    var dump = toDump({
      sets: props.sets,
      queries: (_b = (_a = props.queries) === null || _a === void 0 ? void 0 : _a.filter(function(d2) {
        return isElemQuery(d2) || isSetQuery(d2);
      })) !== null && _b !== void 0 ? _b : [],
      toElemIndex,
      selection: props.selection && isSetLike$1(props.selection) ? props.selection : void 0,
      combinations: data.cs.v,
      combinationOptions: Array.isArray(props.combinations) ? {} : props.combinations
    }, {
      compress: compress ? "yes" : "no"
    });
    return toUpSetJSDump$1(dump, elems, props, void 0, mode);
  }
  function exportStaticDumpData(props, data) {
    var compress = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var mode = arguments.length > 3 ? arguments[3] : void 0;
    var _a, _b;
    var dump = toStaticDump({
      sets: props.sets,
      queries: (_b = (_a = props.queries) === null || _a === void 0 ? void 0 : _a.filter(function(d2) {
        return isElemQuery(d2) || isSetQuery(d2);
      })) !== null && _b !== void 0 ? _b : [],
      selection: props.selection && isSetLike$1(props.selection) ? props.selection : void 0,
      combinations: data.cs.v
    }, {
      compress: compress ? "yes" : "no"
    });
    return toUpSetJSStaticDump$1(dump, props, void 0, mode);
  }
  function exportDump(svg, props, data, mode) {
    var dump = exportDumpData(props, data, false, mode);
    var url = URL.createObjectURL(new Blob([JSON.stringify(dump, null, 2)], {
      type: "application/json"
    }));
    downloadUrl$1(url, "".concat(dump.name, ".json"), svg.ownerDocument);
    URL.revokeObjectURL(url);
  }
  var MAX_URL_LENGTH = 2048 * 2;
  function exportSharedLink(props, data, mode) {
    var r2 = exportDumpData(props, data, true, mode);
    delete r2.$schema;
    var arg = LZString.compressToEncodedURIComponent(JSON.stringify(r2));
    var url = new URL("https://upset.js.org/app/embed.html");
    url.searchParams.set("p", arg);
    if (url.toString().length < MAX_URL_LENGTH) {
      window.open(url.toString(), "_blank");
      return true;
    }
    var r22 = exportStaticDumpData(props, data, true, mode);
    delete r22.$schema;
    var arg2 = LZString.compressToEncodedURIComponent(JSON.stringify(r22));
    url.searchParams.set("p", arg2);
    if (url.toString().length < MAX_URL_LENGTH) {
      window.open(url.toString(), "_blank");
      return true;
    }
    url.searchParams["delete"]("p");
    var w2 = window.open(url.toString(), "_blank");
    w2 === null || w2 === void 0 ? void 0 : w2.addEventListener("load", function() {
      w2 === null || w2 === void 0 ? void 0 : w2.postMessage(r2, url.origin);
    });
    return false;
  }
  function clsx() {
    for (var _len = arguments.length, classNames2 = new Array(_len), _key = 0; _key < _len; _key++) {
      classNames2[_key] = arguments[_key];
    }
    return classNames2.filter(Boolean).join(" ");
  }
  function generateId(_args) {
    return "upset-".concat(Math.random().toString(36).slice(4));
  }
  function isSetLike(s2) {
    return s2 != null && !Array.isArray(s2);
  }
  function elemOverlapOf(query, toElemKey) {
    var f2 = setOverlapFactory(query, toElemKey);
    return function(s2) {
      return f2(s2.elems).intersection;
    };
  }
  function noGuessPossible() {
    return -1;
  }
  function generateSelectionOverlap(selection2, overlapGuesser, toElemKey) {
    if (!selection2) {
      return noOverlap;
    }
    if (typeof selection2 === "function") {
      return selection2;
    }
    if (Array.isArray(selection2)) {
      return elemOverlapOf(selection2, toElemKey);
    }
    var ss = selection2;
    if (ss.overlap) {
      return ss.overlap.bind(ss);
    }
    var f2 = null;
    return function(s2) {
      if (s2.overlap) {
        return s2.overlap(ss);
      }
      var guess = overlapGuesser(s2, ss);
      if (guess >= 0) {
        return guess;
      }
      if (!f2) {
        f2 = elemOverlapOf(ss.elems, toElemKey);
      }
      return f2(s2);
    };
  }
  function generateSelectionName(selection2) {
    var _a;
    return Array.isArray(selection2) ? "Array(".concat(selection2.length, ")") : typeof selection2 === "function" ? "?" : (_a = selection2) === null || _a === void 0 ? void 0 : _a.name;
  }
  function elemElemOverlapOf(query, toElemKey) {
    var f2 = setElemOverlapFactory(query, toElemKey);
    return function(s2) {
      return f2(s2.elems).intersection;
    };
  }
  function noOverlap() {
    return 0;
  }
  function parseFontSize(v2) {
    if (v2 == null) {
      return 10;
    }
    if (v2.endsWith("pt")) {
      return Math.floor(4 / 3 * Number.parseInt(v2, 10));
    }
    return Number.parseInt(v2, 10);
  }
  function toAnchor(alignment) {
    var _a;
    var alignments = {
      left: "start",
      center: "middle",
      right: "end"
    };
    return (_a = alignments[alignment]) !== null && _a !== void 0 ? _a : "middle";
  }
  function resolveNumericScale(factory) {
    if (factory === "linear") {
      return linearScale;
    }
    if (factory === "log") {
      return logScale;
    }
    return factory;
  }
  function resolveBandScale(factory) {
    return factory === "band" ? bandScale$1 : factory;
  }
  function areCombinations(combinations2) {
    return Array.isArray(combinations2);
  }
  function deriveDataDependent(sets2, combinations2, sizes, numericScale2, bandScale3, barLabelFontSize, dotPadding, barPadding, tickFontSize, combinationAddons, toKey2, toElemKey, id, setMaxScale, combinationMaxScale) {
    var _a;
    var numericScaleFactory = resolveNumericScale(numericScale2);
    var bandScaleFactory = resolveBandScale(bandScale3);
    var cs = areCombinations(combinations2) ? combinations2 : generateCombinations(sets2, Object.assign({
      toElemKey
    }, DEFAULT_COMBINATIONS, combinations2));
    var csKeys = cs.map(toKey2);
    var combinationX = bandScaleFactory(csKeys, sizes.cs.w, sizes.padding);
    var dataCSCardinality = cs.reduce(function(acc, d2) {
      return Math.max(acc, d2.cardinality);
    }, 0);
    var maxCSCardinality = combinationMaxScale !== null && combinationMaxScale !== void 0 ? combinationMaxScale : dataCSCardinality;
    var combinationYEnd = maxCSCardinality > dataCSCardinality ? 0 : barLabelFontSize;
    var combinationY = numericScaleFactory(maxCSCardinality, [sizes.cs.h, combinationYEnd], {
      orientation: "vertical",
      fontSizeHint: tickFontSize
    });
    var labelSize = function labelSize2(text) {
      return Math.floor(barLabelFontSize / 1.4 * 0.7 * text.length);
    };
    var guessLabelWidth = function guessLabelWidth2(v2) {
      return labelSize(combinationY.tickFormat()(v2));
    };
    var dataSetCardinality = sets2.reduce(function(acc, d2) {
      return Math.max(acc, d2.cardinality);
    }, 0);
    var maxSetCardinality = setMaxScale !== null && setMaxScale !== void 0 ? setMaxScale : dataSetCardinality;
    var largestSetLabelWidth = guessLabelWidth(maxSetCardinality);
    var largestCSLabelWidth = guessLabelWidth(maxCSCardinality);
    var _iterator = _createForOfIteratorHelper(combinationAddons), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var addon = _step.value;
        if (!addon.scale) {
          continue;
        }
        var ticks = addon.scale.ticks(3);
        var f2 = addon.scale.tickFormat();
        var _iterator2 = _createForOfIteratorHelper(ticks), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var tick = _step2.value;
            var l2 = typeof tick === "number" ? f2(tick) : (_a = tick.label) !== null && _a !== void 0 ? _a : f2(tick.value);
            var size = labelSize(l2);
            if (size > largestCSLabelWidth) {
              largestCSLabelWidth = size;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var setShift = maxSetCardinality > dataSetCardinality ? 0 : largestSetLabelWidth;
    var setX = numericScaleFactory(maxSetCardinality, [sizes.sets.w, setShift], {
      orientation: "horizontal",
      fontSizeHint: tickFontSize
    });
    var setKeys = sets2.map(toKey2);
    var setY = bandScaleFactory(
      setKeys.slice().reverse(),
      sizes.sets.h,
      sizes.padding
    );
    var r2 = Math.min(setY.bandwidth(), combinationX.bandwidth()) / 2 * dotPadding;
    var triangleSize = Math.max(2, Math.min(setY.bandwidth(), combinationX.bandwidth()) / 2 * barPadding);
    return {
      id: id ? id : generateId(),
      r: r2,
      triangleSize,
      sets: {
        v: sets2,
        keys: setKeys,
        rv: sets2.slice().reverse(),
        x: setX,
        xAxisWidth: sizes.sets.w - setShift,
        y: function y2(s2) {
          return setY(toKey2(s2));
        },
        max: maxSetCardinality,
        bandWidth: setY.bandwidth(),
        cy: setY.bandwidth() / 2 + sizes.cs.h,
        format: setX.tickFormat(),
        labelOffset: barLabelFontSize + 9 + 2
      },
      cs: {
        v: cs,
        keys: cs.map(toKey2),
        x: function x2(s2) {
          return combinationX(toKey2(s2));
        },
        max: maxCSCardinality,
        y: combinationY,
        yAxisWidth: sizes.cs.h - combinationYEnd,
        cx: combinationX.bandwidth() / 2,
        bandWidth: combinationX.bandwidth(),
        format: combinationY.tickFormat(),
        has: function has(v2, s2) {
          var sk = toKey2(s2);
          return Array.from(v2.sets).some(function(ss) {
            return toKey2(ss) === sk;
          });
        },
        labelOffset: largestCSLabelWidth + 9 + 6
      },
      toKey: toKey2,
      toElemKey,
      overlapGuesser: generateOverlapFunction(cs, noGuessPossible, toKey2)
    };
  }
  function deriveSizeDependent(width, height, margin, barPadding, widthRatios2, heightRatios2, setAddons, combinationAddons, id, setAddonPadding, combinationAddonPadding) {
    var setAddonsBefore = setAddons.reduce(function(acc, a2) {
      return acc + (a2.position === "before" ? a2.size + setAddonPadding : 0);
    }, 0);
    var setAddonsAfter = setAddons.reduce(function(acc, a2) {
      return acc + (a2.position !== "before" ? a2.size + setAddonPadding : 0);
    }, 0);
    var combinationAddonsBefore = combinationAddons.reduce(function(acc, a2) {
      return acc + (a2.position === "before" ? a2.size + setAddonPadding : 0);
    }, 0);
    var combinationAddonsAfter = combinationAddons.reduce(function(acc, a2) {
      return acc + (a2.position !== "before" ? a2.size + setAddonPadding : 0);
    }, 0);
    var h2 = height - 2 * margin - 20 - combinationAddonsAfter - combinationAddonsBefore;
    var w2 = width - 2 * margin - setAddonsBefore - setAddonsAfter;
    var setWidth = widthRatios2[0] > 1 ? widthRatios2[0] : w2 * widthRatios2[0];
    var labelsWidth = widthRatios2[1] > 1 ? widthRatios2[1] : w2 * widthRatios2[1];
    var combinationHeight = heightRatios2[0] > 1 ? heightRatios2[0] : h2 * heightRatios2[0];
    return {
      id: id ? id : generateId(),
      cs: {
        before: combinationAddonsBefore,
        after: combinationAddonsAfter,
        x: setAddonsBefore + setWidth + labelsWidth,
        y: combinationAddonsBefore,
        w: w2 - setWidth - labelsWidth,
        h: combinationHeight,
        addons: combinationAddons,
        addonPadding: combinationAddonPadding
      },
      labels: {
        x: setAddonsBefore + setWidth,
        y: combinationAddonsBefore + combinationHeight,
        w: labelsWidth,
        h: h2 - combinationHeight
      },
      sets: {
        before: setAddonsBefore,
        after: setAddonsAfter,
        x: setAddonsBefore,
        y: combinationAddonsBefore + combinationHeight,
        w: setWidth,
        h: h2 - combinationHeight,
        addons: setAddons,
        addonPadding: setAddonPadding
      },
      padding: barPadding,
      legend: {
        x: width / 2
      },
      margin,
      w: width,
      h: height
    };
  }
  function deriveStyleDependent$1(theme2, styles2, classNames2, combinationName, combinationNameAxisOffset, setName, setNameAxisOffset, styleId, barLabelOffset, selectionColor, emptySelection, title, description, tooltips, setLabelAlignment2) {
    return {
      theme: theme2,
      styles: styles2,
      classNames: classNames2,
      cs: {
        name: combinationName,
        offset: combinationNameAxisOffset
      },
      sets: {
        name: setName,
        offset: setNameAxisOffset
      },
      emptySelection,
      id: styleId,
      barLabelOffset,
      selectionColor,
      title,
      description,
      tooltips,
      setLabelAlignment: setLabelAlignment2
    };
  }
  function ExportButtons(_ref3) {
    var transform = _ref3.transform, styleId = _ref3.styleId, exportButtons2 = _ref3.exportButtons, exportChart = _ref3.exportChart;
    if (!exportButtons2) {
      return null;
    }
    var svgWidth = 26;
    var pngWidth = 26;
    var vegaWidth = 34;
    var dumpWidth = 34;
    var shareWidth = 42;
    var space = 2;
    var acc = 0;
    var buttons = [];
    if (exportButtons2 === true || exportButtons2.svg !== false) {
      acc += svgWidth;
      buttons.push(React.createElement("g", {
        key: "svg",
        className: "exportButton-".concat(styleId),
        onClick: exportChart,
        "data-type": "svg",
        transform: "translate(-".concat(acc, ", 0)")
      }, React.createElement("title", null, "Download SVG Image"), React.createElement("rect", {
        y: -9,
        width: svgWidth,
        height: 11,
        rx: 2,
        ry: 2
      }), React.createElement("text", {
        className: "exportTextStyle-".concat(styleId),
        x: svgWidth / 2
      }, "SVG")));
      acc += space;
    }
    if (exportButtons2 === true || exportButtons2.png !== false) {
      acc += pngWidth;
      buttons.push(React.createElement("g", {
        key: "png",
        className: "exportButton-".concat(styleId),
        onClick: exportChart,
        "data-type": "png",
        transform: "translate(-".concat(acc, ", 0)")
      }, React.createElement("title", null, "Download PNG Image"), React.createElement("rect", {
        y: -9,
        width: pngWidth,
        height: 11,
        rx: 2,
        ry: 2
      }), React.createElement("text", {
        className: "exportTextStyle-".concat(styleId),
        x: pngWidth / 2
      }, "PNG")));
      acc += space;
    }
    if (exportButtons2 === true || exportButtons2.vega !== false) {
      acc += vegaWidth;
      buttons.push(React.createElement("g", {
        key: "vega",
        className: "exportButton-".concat(styleId),
        onClick: exportChart,
        "data-type": "vega",
        transform: "translate(-".concat(acc, ", 0)")
      }, React.createElement("title", null, "Download VEGA-Lite Specification"), React.createElement("rect", {
        y: -9,
        width: vegaWidth,
        height: 11,
        rx: 2,
        ry: 2
      }), React.createElement("text", {
        className: "exportTextStyle-".concat(styleId),
        x: vegaWidth / 2
      }, "VEGA")));
      acc += space;
    }
    if (exportButtons2 === true || exportButtons2.dump !== false) {
      acc += dumpWidth;
      buttons.push(React.createElement("g", {
        key: "dump",
        className: "exportButton-".concat(styleId),
        onClick: exportChart,
        "data-type": "dump",
        transform: "translate(-".concat(acc, ", 0)")
      }, React.createElement("title", null, "Download UpSet.js JSON Dump"), React.createElement("rect", {
        y: -9,
        width: dumpWidth,
        height: 11,
        rx: 2,
        ry: 2
      }), React.createElement("text", {
        className: "exportTextStyle-".concat(styleId),
        x: dumpWidth / 2
      }, "DUMP")));
      acc += space;
    }
    if (exportButtons2 === true || exportButtons2.share !== false) {
      acc += shareWidth;
      buttons.push(React.createElement("g", {
        key: "share",
        className: "exportButton-".concat(styleId),
        onClick: exportChart,
        "data-type": "share",
        transform: "translate(-".concat(acc, ", 0)")
      }, React.createElement("title", null, "Open a shareable URL"), React.createElement("rect", {
        y: -9,
        width: shareWidth,
        height: 11,
        rx: 2,
        ry: 2
      }), React.createElement("text", {
        className: "exportTextStyle-".concat(styleId),
        x: shareWidth / 2
      }, "SHARE")));
      acc += space;
    }
    return React.createElement("g", {
      className: "exportButtons-".concat(styleId),
      transform
    }, buttons);
  }
  var QueryLegend = /* @__PURE__ */ React.memo(function QueryLegend2(_ref4) {
    var queries2 = _ref4.queries, x2 = _ref4.x, style2 = _ref4.style, data = _ref4.data;
    return React.createElement("text", {
      transform: "translate(".concat(x2, ",4)"),
      style: style2.styles.legend,
      className: clsx("legendTextStyle-".concat(style2.id), style2.classNames.legend)
    }, queries2.map(function(q2, i2) {
      var count2 = null;
      if (isSetQuery(q2)) {
        count2 = q2.set.cardinality;
      } else if (isElemQuery(q2)) {
        count2 = q2.elems instanceof Set ? q2.elems.size : q2.elems.length;
      }
      return React.createElement(React.Fragment, {
        key: q2.name
      }, React.createElement("tspan", {
        className: "fillQ".concat(i2, "-").concat(data.id)
      }, "  \u2B24 "), React.createElement("tspan", null, q2.name, count2 != null ? ": ".concat(data.sets.format(count2)) : ""));
    }));
  });
  var HorizontalTick = /* @__PURE__ */ React.memo(function HorizontalTick2(_ref5) {
    var pos = _ref5.pos, spacing = _ref5.spacing, tickSizeInner = _ref5.tickSizeInner, orient = _ref5.orient, name = _ref5.name, style2 = _ref5.style;
    var k2 = orient === "top" || orient === "left" ? -1 : 1;
    return React.createElement("g", {
      transform: "translate(0, ".concat(pos + 0.5, ")")
    }, name && React.createElement("text", {
      x: k2 * spacing,
      dy: "0.32em",
      className: clsx("axisTextStyle-".concat(style2.id), orient === "right" ? "startText-".concat(style2.id) : "endText-".concat(style2.id), style2.classNames.axisTick),
      style: style2.styles.axisTick
    }, name), React.createElement("line", {
      x2: k2 * tickSizeInner,
      className: "axisLine-".concat(style2.id)
    }));
  });
  var VerticalTick = /* @__PURE__ */ React.memo(function VerticalTick2(_ref6) {
    var pos = _ref6.pos, name = _ref6.name, spacing = _ref6.spacing, orient = _ref6.orient, tickSizeInner = _ref6.tickSizeInner, style2 = _ref6.style;
    var k2 = orient === "top" || orient === "left" ? -1 : 1;
    return React.createElement("g", {
      transform: "translate(".concat(pos + 0.5, ", 0)")
    }, name && React.createElement("text", {
      y: k2 * spacing,
      dy: orient === "top" ? "0em" : "0.71em",
      className: clsx("axisTextStyle-".concat(style2.id), style2.classNames.axisTick),
      style: style2.styles.axisTick
    }, name), React.createElement("line", {
      y2: k2 * tickSizeInner,
      className: "axisLine-".concat(style2.id)
    }));
  });
  function Axis(_ref7) {
    var scale = _ref7.scale, orient = _ref7.orient, _ref7$tickSizeInner = _ref7.tickSizeInner, tickSizeInner = _ref7$tickSizeInner === void 0 ? 6 : _ref7$tickSizeInner, _ref7$tickSizeOuter = _ref7.tickSizeOuter, tickSizeOuter = _ref7$tickSizeOuter === void 0 ? 6 : _ref7$tickSizeOuter, _ref7$tickPadding = _ref7.tickPadding, tickPadding = _ref7$tickPadding === void 0 ? 3 : _ref7$tickPadding, size = _ref7.size, start = _ref7.start, style2 = _ref7.style, transform = _ref7.transform;
    var spacing = Math.max(tickSizeInner, 0) + tickPadding;
    var range0 = start;
    var range1 = size;
    var k2 = orient === "top" || orient === "left" ? -1 : 1;
    var Tick = orient === "left" || orient === "right" ? HorizontalTick : VerticalTick;
    var values = scale.ticks().map(function(d2) {
      return typeof d2 === "number" ? {
        value: d2,
        label: d2.toLocaleString()
      } : d2;
    });
    return React.createElement("g", {
      transform
    }, values.map(function(d2) {
      return React.createElement(Tick, {
        key: d2.value,
        pos: scale(d2.value),
        name: d2.label,
        spacing,
        tickSizeInner,
        orient,
        style: style2
      });
    }), React.createElement("path", {
      className: "axisLine-".concat(style2.id),
      d: orient === "left" || orient === "right" ? tickSizeOuter ? "M".concat(k2 * tickSizeOuter, ",").concat(range0, "H0.5V").concat(range1, "H").concat(k2 * tickSizeOuter) : "M0.5,".concat(range0, "V").concat(range1) : tickSizeOuter ? "M".concat(range0, ",").concat(k2 * tickSizeOuter, "V0.5H").concat(range1, "V").concat(k2 * tickSizeOuter) : "M".concat(range0, ",0.5H").concat(range1)
    }));
  }
  var MultilineText = /* @__PURE__ */ React.memo(function MultilineText2(_ref8) {
    var width = _ref8.width, text = _ref8.text, dy = _ref8.dy, x2 = _ref8.x, style2 = _ref8.style, className = _ref8.className;
    var ref = s(null);
    var _useState = l(typeof text === "string" ? [text] : []), _useState2 = _slicedToArray(_useState, 2), lines = _useState2[0], setLines = _useState2[1];
    h(function() {
      if (typeof text === "string") {
        setLines([text]);
      } else {
        setLines([]);
      }
    }, [text]);
    h(function() {
      if (!ref.current || ref.current.childElementCount > 0 || typeof text !== "string" || typeof ref.current.getComputedTextLength !== "function") {
        return;
      }
      var len2 = ref.current.getComputedTextLength();
      var lines2 = [];
      var lineWidth = width;
      var start = 0;
      var p2 = ref.current.getStartPositionOfChar(0);
      while (len2 > lineWidth) {
        p2.x = lineWidth;
        var num = ref.current.getCharNumAtPosition(p2);
        var space = text.lastIndexOf(" ", num);
        if (space < start) {
          break;
        }
        lines2.push(text.slice(start, space + 1));
        var used = ref.current.getEndPositionOfChar(space + 1).x;
        start = space + 1;
        lineWidth = used + width;
      }
      lines2.push(text.slice(start));
      setLines(lines2);
    }, [ref, text, width]);
    if (!text) {
      return null;
    }
    return React.createElement("tspan", {
      ref,
      dy,
      style: style2,
      x: x2,
      className
    }, lines.length > 1 ? lines.map(function(l2, i2) {
      return React.createElement("tspan", {
        key: l2,
        x: 0,
        dy: i2 > 0 ? "1.2em" : dy
      }, l2);
    }) : text);
  });
  var UpSetTitle = /* @__PURE__ */ React.memo(function UpSetTitle2(_ref9) {
    var width = _ref9.width, _ref9$descriptionWidt = _ref9.descriptionWidth, descriptionWidth = _ref9$descriptionWidt === void 0 ? width : _ref9$descriptionWidt, style2 = _ref9.style;
    if (!style2.title && !style2.description) {
      return null;
    }
    return React.createElement("text", null, React.createElement(MultilineText, {
      text: style2.title,
      width,
      dy: "10px",
      className: clsx("titleTextStyle-".concat(style2.id), style2.classNames.title),
      style: style2.styles.title
    }), React.createElement(MultilineText, {
      x: 0,
      width: descriptionWidth,
      dy: style2.title ? "2em" : "10px",
      text: style2.description,
      className: clsx("descTextStyle-".concat(style2.id), style2.classNames.description),
      style: style2.styles.description
    }));
  });
  function noop() {
    return void 0;
  }
  function wrap(f2) {
    if (!f2) {
      return noop;
    }
    return function(set, addons) {
      return function(evt) {
        return f2.call(this, set, evt.nativeEvent, addons.map(function(a2) {
          return a2.createOnHandlerData ? a2.createOnHandlerData(set) : null;
        }));
      };
    };
  }
  function addonPositionGenerator(total, padding) {
    var beforeAcc = 0;
    var afterAcc = 0;
    return function(addon) {
      var x2 = 0;
      if (addon.position === "before") {
        beforeAcc += addon.size + padding;
        x2 = -beforeAcc;
      } else {
        x2 = total + afterAcc + padding;
        afterAcc += addon.size + padding;
      }
      return x2;
    };
  }
  function mergeColor(style2, color) {
    var prop = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "fill";
    if (!color) {
      return style2;
    }
    if (!style2) {
      return !color ? void 0 : _defineProperty({}, prop, color);
    }
    return Object.assign(_defineProperty({}, prop, color), style2);
  }
  var UpSetAxis = /* @__PURE__ */ React.memo(function UpSetAxis2(_ref11) {
    var size = _ref11.size, style2 = _ref11.style, data = _ref11.data;
    var setPosGen = addonPositionGenerator(size.sets.w + size.labels.w + size.cs.w, size.sets.addonPadding);
    var combinationPosGen = addonPositionGenerator(size.cs.h + size.sets.h, size.cs.addonPadding);
    var csNameOffset = style2.cs.offset === "auto" ? data.cs.labelOffset : style2.cs.offset;
    var setNameOffset = style2.sets.offset === "auto" ? data.sets.labelOffset : style2.sets.offset;
    return React.createElement("g", null, React.createElement(UpSetTitle, {
      style: style2,
      width: size.cs.x - csNameOffset - 20
    }), size.cs.h > 0 && React.createElement("g", {
      transform: "translate(".concat(size.cs.x, ",").concat(size.cs.y, ")"),
      "data-upset": "csaxis"
    }, React.createElement(Axis, {
      scale: data.cs.y,
      orient: "left",
      size: size.cs.h,
      start: size.cs.h - data.cs.yAxisWidth,
      style: style2
    }), React.createElement("line", {
      x1: 0,
      x2: size.cs.w,
      y1: size.cs.h + 1,
      y2: size.cs.h + 1,
      className: "axisLine-".concat(style2.id)
    }), React.createElement("text", {
      className: clsx("cChartTextStyle-".concat(style2.id), style2.classNames.chartLabel),
      style: style2.styles.chartLabel,
      transform: "translate(".concat(-csNameOffset, ", ").concat(size.cs.h / 2, ")rotate(-90)")
    }, style2.cs.name), size.cs.addons.map(function(addon) {
      var pos = combinationPosGen(addon);
      var title = React.createElement("text", {
        key: addon.name,
        className: clsx("cChartTextStyle-".concat(style2.id), style2.classNames.chartLabel),
        style: style2.styles.chartLabel,
        transform: "translate(".concat(-csNameOffset, ", ").concat(pos + addon.size / 2, ")rotate(-90)")
      }, addon.name);
      if (!addon.scale) {
        return title;
      }
      return React.createElement(React.Fragment, {
        key: addon.name
      }, React.createElement(Axis, {
        scale: addon.scale,
        orient: "left",
        size: addon.size,
        start: 0,
        style: style2,
        transform: "translate(0,".concat(pos, ")")
      }), title);
    })), size.sets.w > 0 && React.createElement("g", {
      transform: "translate(".concat(size.sets.x, ",").concat(size.sets.y, ")"),
      "data-upset": "setaxis"
    }, React.createElement(Axis, {
      scale: data.sets.x,
      orient: "bottom",
      size: size.sets.w,
      start: size.sets.w - data.sets.xAxisWidth,
      transform: "translate(0, ".concat(size.sets.h, ")"),
      style: style2
    }), React.createElement("text", {
      className: clsx("sChartTextStyle-".concat(style2.id), style2.classNames.chartLabel),
      style: style2.styles.chartLabel,
      transform: "translate(".concat(size.sets.w / 2, ", ").concat(size.sets.h + setNameOffset, ")")
    }, style2.sets.name), size.sets.addons.map(function(addon) {
      var pos = setPosGen(addon);
      var title = React.createElement("text", {
        key: addon.name,
        className: clsx("sChartTextStyle-".concat(style2.id), style2.classNames.chartLabel),
        style: style2.styles.chartLabel,
        transform: "translate(".concat(pos + addon.size / 2, ", ").concat(size.sets.h + setNameOffset, ")")
      }, addon.name);
      if (!addon.scale) {
        return title;
      }
      return React.createElement(React.Fragment, {
        key: addon.name
      }, React.createElement(Axis, {
        scale: addon.scale,
        orient: "bottom",
        size: addon.size,
        start: 0,
        transform: "translate(".concat(pos, ", ").concat(size.sets.h, ")"),
        style: style2
      }), title);
    })));
  });
  var UpSetDot = /* @__PURE__ */ React.memo(function UpSetDot2(_ref12) {
    var cx = _ref12.cx, r2 = _ref12.r, cy = _ref12.cy, name = _ref12.name, className = _ref12.className, style2 = _ref12.style, fill = _ref12.fill;
    return React.createElement("circle", {
      r: r2,
      cx,
      cy,
      className,
      style: mergeColor(style2, fill)
    }, name && React.createElement("title", null, name));
  });
  function computeOverflowValues(value, max, scale) {
    var scaled = [scale(value)];
    for (var i2 = 0; i2 < OVERFLOW_PADDING_FACTOR.length && value > max; i2++) {
      value -= max;
      scaled.push(scale(value));
    }
    return scaled;
  }
  var CombinationChart = /* @__PURE__ */ React.memo(function CombinationChart2(_ref13) {
    var d2 = _ref13.d, h2 = _ref13.h, className = _ref13.className, data = _ref13.data, size = _ref13.size, style2 = _ref13.style, children = _ref13.children;
    var yValues = computeOverflowValues(d2.cardinality, data.cs.max, data.cs.y);
    var genPosition = addonPositionGenerator(size.cs.h + size.sets.h, size.cs.addonPadding);
    return React.createElement("g", {
      transform: "translate(".concat(data.cs.x(d2), ", 0)"),
      onMouseEnter: h2.onMouseEnter(d2, size.cs.addons),
      onMouseLeave: h2.onMouseLeave,
      onClick: h2.onClick(d2, size.cs.addons),
      onContextMenu: h2.onContextMenu(d2, size.cs.addons),
      onMouseMove: h2.onMouseMove(d2, size.cs.addons),
      className,
      "data-cardinality": d2.cardinality
    }, style2.tooltips && React.createElement("title", null, d2.name, ": ", data.cs.format(d2.cardinality)), React.createElement("rect", {
      y: -size.cs.before,
      width: data.cs.bandWidth,
      height: size.sets.h + size.cs.h + size.cs.before + size.cs.after,
      className: "hoverBar-".concat(style2.id)
    }), size.cs.h > 0 && React.createElement(React.Fragment, null, yValues.map(function(y2, i2) {
      var offset = i2 > 0 ? Math.floor(data.cs.bandWidth * OVERFLOW_PADDING_FACTOR[i2 - 1]) : 0;
      return React.createElement("rect", {
        key: i2,
        x: offset,
        y: y2,
        height: size.cs.h - y2,
        width: data.cs.bandWidth - offset * 2,
        className: clsx("fillPrimary-".concat(style2.id), i2 < yValues.length - 1 && "fillOverflow".concat(yValues.length - 1 - i2, "-").concat(style2.id), style2.classNames.bar),
        style: mergeColor(style2.styles.bar, d2.color)
      });
    }), React.createElement("text", {
      y: yValues[0] - style2.barLabelOffset,
      x: data.cs.bandWidth / 2,
      style: style2.styles.barLabel,
      className: clsx("cBarTextStyle-".concat(style2.id), style2.classNames.barLabel)
    }, data.cs.format(d2.cardinality))), React.createElement("text", {
      y: -style2.barLabelOffset - size.cs.before,
      x: data.cs.bandWidth / 2,
      style: style2.styles.barLabel,
      className: clsx("hoverBarTextStyle-".concat(style2.id), style2.classNames.barLabel)
    }, d2.name), data.sets.v.map(function(s2, i2) {
      if (data.cs.has(d2, s2)) {
        return null;
      }
      return React.createElement(UpSetDot, {
        key: data.sets.keys[i2],
        r: data.r,
        cx: data.cs.cx,
        cy: data.sets.y(s2) + data.sets.cy,
        name: style2.tooltips ? d2.name : "",
        style: style2.styles.dot,
        fill: void 0,
        className: clsx("fillNotMember-".concat(style2.id), style2.classNames.dot)
      });
    }), d2.sets.size > 1 && React.createElement("line", {
      x1: data.cs.cx,
      y1: data.sets.y(data.sets.v.find(function(p2) {
        return data.cs.has(d2, p2);
      })) + data.sets.cy - (data.r - 1),
      x2: data.cs.cx,
      y2: data.sets.y(data.sets.rv.find(function(p2) {
        return data.cs.has(d2, p2);
      })) + data.sets.cy + (data.r - 1),
      style: d2.color ? {
        stroke: d2.color
      } : void 0,
      className: "upsetLine-".concat(data.id)
    }), data.sets.v.map(function(s2, i2) {
      var _a;
      if (!data.cs.has(d2, s2)) {
        return null;
      }
      return React.createElement(UpSetDot, {
        key: data.sets.keys[i2],
        r: data.r,
        cx: data.cs.cx,
        cy: data.sets.y(s2) + data.sets.cy,
        name: style2.tooltips ? s2.name : "",
        style: style2.styles.dot,
        fill: (_a = s2.color) !== null && _a !== void 0 ? _a : d2.color,
        className: clsx("fillPrimary-".concat(style2.id), style2.classNames.dot)
      });
    }), size.cs.addons.map(function(addon) {
      return React.createElement("g", {
        key: addon.name,
        transform: "translate(0,".concat(genPosition(addon), ")")
      }, addon.render({
        set: d2,
        width: data.cs.bandWidth,
        height: addon.size,
        theme: style2.theme
      }));
    }), children);
  });
  var SetChart = /* @__PURE__ */ React.memo(function SetChart2(_ref14) {
    var d2 = _ref14.d, i2 = _ref14.i, h2 = _ref14.h, className = _ref14.className, size = _ref14.size, data = _ref14.data, style2 = _ref14.style, children = _ref14.children;
    var xValues = computeOverflowValues(d2.cardinality, data.sets.max, data.sets.x);
    var genPosition = addonPositionGenerator(size.sets.w + size.labels.w + size.cs.w, size.sets.addonPadding);
    var anchorOffset = style2.setLabelAlignment === "center" ? size.labels.w / 2 : style2.setLabelAlignment === "left" ? 2 : size.labels.w - 2;
    return React.createElement("g", {
      transform: "translate(0, ".concat(data.sets.y(d2), ")"),
      onMouseEnter: h2.onMouseEnter(d2, size.sets.addons),
      onMouseLeave: h2.onMouseLeave,
      onClick: h2.onClick(d2, size.sets.addons),
      onContextMenu: h2.onContextMenu(d2, size.sets.addons),
      onMouseMove: h2.onMouseMove(d2, size.sets.addons),
      className,
      "data-cardinality": d2.cardinality
    }, style2.tooltips && React.createElement("title", null, d2.name, ": ", data.sets.format(d2.cardinality)), React.createElement("rect", {
      x: -size.sets.before,
      width: size.sets.w + size.labels.w + size.cs.w + size.sets.after,
      height: data.sets.bandWidth,
      className: "hoverBar-".concat(style2.id)
    }), i2 % 2 === 1 && React.createElement("rect", {
      x: size.sets.w,
      width: size.labels.w + size.cs.w + size.sets.after,
      height: data.sets.bandWidth,
      className: "fillAlternating-".concat(style2.id)
    }), size.sets.w > 0 && React.createElement(React.Fragment, null, xValues.map(function(x2, i3) {
      var offset = i3 > 0 ? Math.floor(data.sets.bandWidth * OVERFLOW_PADDING_FACTOR[i3 - 1]) : 0;
      return React.createElement("rect", {
        key: i3,
        x: x2,
        y: offset,
        width: size.sets.w - x2,
        height: data.sets.bandWidth - offset * 2,
        className: clsx("fillPrimary-".concat(style2.id), i3 < xValues.length - 1 && "fillOverflow".concat(xValues.length - 1 - i3, "-").concat(style2.id), style2.classNames.bar),
        style: mergeColor(style2.styles.bar, d2.color)
      });
    }), React.createElement("text", {
      x: xValues[0],
      dx: -style2.barLabelOffset,
      y: data.sets.bandWidth / 2,
      style: style2.styles.barLabel,
      className: clsx("sBarTextStyle-".concat(style2.id), style2.classNames.barLabel)
    }, data.sets.format(d2.cardinality))), React.createElement("text", {
      x: size.sets.w + anchorOffset,
      y: data.sets.bandWidth / 2,
      className: clsx("setTextStyle-".concat(style2.id), style2.classNames.setLabel),
      style: style2.styles.setLabel,
      clipPath: "url(#clip-".concat(size.id, ")")
    }, d2.name), size.sets.addons.map(function(addon) {
      return React.createElement("g", {
        key: addon.name,
        transform: "translate(".concat(genPosition(addon), ",0)")
      }, addon.render({
        set: d2,
        width: addon.size,
        height: data.sets.bandWidth,
        theme: style2.theme
      }));
    }), children);
  });
  var UpSetChart = /* @__PURE__ */ React.memo(function UpSetChart2(_ref15) {
    var data = _ref15.data, size = _ref15.size, style2 = _ref15.style, h2 = _ref15.h, setChildrenFactory = _ref15.setChildrenFactory, combinationChildrenFactory = _ref15.combinationChildrenFactory;
    return React.createElement("g", {
      className: h2.hasClick ? "clickAble-".concat(style2.id) : void 0
    }, React.createElement("g", {
      transform: "translate(".concat(size.sets.x, ",").concat(size.sets.y, ")"),
      "data-upset": "sets"
    }, data.sets.v.map(function(d2, i2) {
      return React.createElement(SetChart, {
        key: data.sets.keys[i2],
        d: d2,
        i: i2,
        h: h2,
        className: h2.hasClick || h2.hasHover ? "interactive-".concat(style2.id) : void 0,
        data,
        style: style2,
        size
      }, setChildrenFactory && setChildrenFactory(d2));
    })), React.createElement("g", {
      transform: "translate(".concat(size.cs.x, ",").concat(size.cs.y, ")"),
      "data-upset": "cs"
    }, data.cs.v.map(function(d2, i2) {
      return React.createElement(CombinationChart, {
        key: data.cs.keys[i2],
        d: d2,
        h: h2,
        className: h2.hasClick || h2.hasHover ? "interactive-".concat(style2.id) : void 0,
        data,
        style: style2,
        size
      }, combinationChildrenFactory && combinationChildrenFactory(d2));
    })));
  });
  function CombinationSelectionChart(_ref16) {
    var data = _ref16.data, size = _ref16.size, style2 = _ref16.style, elemOverlap = _ref16.elemOverlap, secondary = _ref16.secondary, tooltip = _ref16.tooltip, suffix = _ref16.suffix, transform = _ref16.transform, empty = _ref16.empty, combinationAddons = _ref16.combinationAddons;
    var width = data.cs.bandWidth;
    var totalHeight = size.cs.h + size.sets.h;
    var height = size.cs.h;
    var className = clsx("fill".concat(suffix), !tooltip && "pnone-".concat(style2.id), style2.classNames.bar);
    return React.createElement("g", {
      transform,
      "data-upset": secondary ? "cs-q" : "cs-s"
    }, data.cs.v.map(function(d2, i2) {
      var x2 = data.cs.x(d2);
      var key = data.cs.keys[i2];
      if (empty && !secondary) {
        return React.createElement("rect", {
          key,
          x: x2,
          y: height,
          height: 0,
          width,
          className,
          style: mergeColor(style2.styles.bar, !style2.selectionColor ? d2.color : void 0)
        }, tooltip && React.createElement("title", null));
      }
      var o2 = elemOverlap(d2);
      if (o2 === 0) {
        return null;
      }
      var yValues = computeOverflowValues(o2, data.cs.max, data.cs.y);
      var title = tooltip && React.createElement("title", null, "".concat(d2.name, " \u2229 ").concat(tooltip, ": ").concat(o2));
      var content = secondary ? React.createElement("path", {
        key,
        transform: "translate(".concat(x2, ", ").concat(yValues[0], ")"),
        d: "M0,-1 l".concat(width, ",0 l0,2 l").concat(-width, ",0 L-").concat(data.triangleSize, ",-").concat(data.triangleSize, " L-").concat(data.triangleSize, ",").concat(data.triangleSize, " Z"),
        className,
        "data-i": i2,
        "data-cardinality": o2,
        style: mergeColor(void 0, !style2.selectionColor ? d2.color : void 0)
      }, title) : yValues.map(function(y2, j2) {
        var offset = j2 > 0 ? Math.floor(data.cs.bandWidth * OVERFLOW_PADDING_FACTOR[j2 - 1]) : 0;
        return React.createElement("rect", {
          key: j2,
          x: x2 + offset,
          y: y2,
          height: height - y2,
          width: width - offset * 2,
          "data-i": j2 > 0 ? null : i2,
          "data-cardinality": j2 > 0 ? null : o2,
          className: clsx(className, j2 < yValues.length - 1 && "fillOverflow".concat(yValues.length - 1 - j2, "-").concat(style2.id)),
          style: mergeColor(style2.styles.bar, !style2.selectionColor ? d2.color : void 0)
        }, title);
      });
      var genPosition = addonPositionGenerator(totalHeight, size.cs.addonPadding);
      var addons = combinationAddons.map(function(addon) {
        var v2 = genPosition(addon);
        var content2 = addon.render({
          set: d2,
          width,
          height: addon.size,
          theme: style2.theme
        });
        if (!content2) {
          return null;
        }
        return React.createElement("g", {
          key: addon.name,
          transform: "translate(".concat(x2, ",").concat(v2, ")")
        }, content2);
      }).filter(Boolean);
      if (addons.length === 0) {
        return content;
      }
      return React.createElement("g", {
        key
      }, content, addons);
    }));
  }
  function SetSelectionChart(_ref17) {
    var data = _ref17.data, size = _ref17.size, style2 = _ref17.style, elemOverlap = _ref17.elemOverlap, suffix = _ref17.suffix, secondary = _ref17.secondary, empty = _ref17.empty, tooltip = _ref17.tooltip, setAddons = _ref17.setAddons, transform = _ref17.transform;
    var width = size.sets.w;
    var totalWidth = size.sets.w + size.labels.w + size.cs.w;
    var height = data.sets.bandWidth;
    var className = clsx("fill".concat(suffix), !tooltip && " pnone-".concat(style2.id), style2.classNames.bar);
    return React.createElement("g", {
      transform,
      "data-upset": secondary ? "sets-q" : "sets-s"
    }, data.sets.v.map(function(d2, i2) {
      var y2 = data.sets.y(d2);
      var key = data.sets.keys[i2];
      if (empty && !secondary) {
        return React.createElement("rect", {
          key,
          x: width,
          y: y2,
          width: 0,
          height,
          className,
          style: mergeColor(style2.styles.bar, !style2.selectionColor ? d2.color : void 0)
        }, style2.tooltips && tooltip && React.createElement("title", null));
      }
      var o2 = elemOverlap(d2);
      if (o2 === 0) {
        return null;
      }
      var xValues = computeOverflowValues(o2, data.sets.max, data.sets.x);
      var title = style2.tooltips && tooltip && React.createElement("title", null, "".concat(d2.name, " \u2229 ").concat(tooltip, ": ").concat(o2));
      var content = secondary ? React.createElement("path", {
        key,
        transform: "translate(".concat(xValues[0], ", ").concat(y2 + height, ")"),
        d: "M1,0 l0,".concat(-height, " l-2,0 l0,").concat(height, " L-").concat(data.triangleSize, ",").concat(data.triangleSize, " L").concat(data.triangleSize, ",").concat(data.triangleSize, " Z"),
        "data-i": i2,
        "data-cardinality": o2,
        className,
        style: mergeColor(void 0, !style2.selectionColor ? d2.color : void 0)
      }, title) : xValues.map(function(x2, j2) {
        var offset = j2 > 0 ? Math.floor(data.sets.bandWidth * OVERFLOW_PADDING_FACTOR[j2 - 1]) : 0;
        return React.createElement("rect", {
          key: j2,
          "data-i": j2 > 0 ? null : i2,
          "data-cardinality": j2 > 0 ? null : o2,
          x: x2,
          y: y2 + offset,
          width: width - x2,
          height: height - offset * 2,
          className: clsx(className, j2 < xValues.length - 1 && "fillOverflow".concat(xValues.length - 1 - j2, "-").concat(style2.id)),
          style: mergeColor(style2.styles.bar, !style2.selectionColor ? d2.color : void 0)
        }, title);
      });
      var genPosition = addonPositionGenerator(totalWidth, size.sets.addonPadding);
      var addons = setAddons.map(function(addon) {
        var v2 = genPosition(addon);
        var content2 = addon.render({
          set: d2,
          width: addon.size,
          height,
          theme: style2.theme
        });
        if (!content2) {
          return null;
        }
        return React.createElement("g", {
          key: addon.name,
          transform: "translate(".concat(v2, ",").concat(y2, ")")
        }, content2);
      }).filter(Boolean);
      if (addons.length === 0) {
        return content;
      }
      return React.createElement("g", {
        key
      }, content, addons);
    }));
  }
  var EMPTY_ARRAY$1 = [];
  var UpSetQueries = /* @__PURE__ */ React.memo(function UpSetQueries2(_ref18) {
    var size = _ref18.size, data = _ref18.data, style2 = _ref18.style, hasHover = _ref18.hasHover, secondary = _ref18.secondary, queries2 = _ref18.queries;
    var someAddon = size.sets.addons.some(function(s2) {
      return s2.renderQuery != null;
    }) || size.cs.addons.some(function(s2) {
      return s2.renderQuery != null;
    });
    var qs = d(function() {
      return queries2.map(function(q2) {
        return Object.assign(Object.assign({}, q2), {
          overlap: queryOverlap(q2, "intersection", data.toElemKey),
          elemOverlap: someAddon ? queryElemOverlap(q2, "intersection", data.toElemKey) : null
        });
      });
    }, [queries2, someAddon, data.toElemKey]);
    function wrapAddon(addon, query, index, overlapper, secondary2) {
      return Object.assign(Object.assign({}, addon), {
        render: function render2(props) {
          var overlap = overlapper(props.set);
          return addon.renderQuery ? addon.renderQuery(Object.assign({
            query,
            overlap,
            index,
            secondary: secondary2
          }, props)) : null;
        }
      });
    }
    return React.createElement("g", {
      className: hasHover && !secondary ? "pnone-".concat(style2.id) : void 0
    }, React.createElement("g", {
      transform: "translate(".concat(size.sets.x, ",").concat(size.sets.y, ")")
    }, qs.map(function(q2, i2) {
      return React.createElement(SetSelectionChart, {
        key: q2.name,
        data,
        size,
        style: style2,
        elemOverlap: q2.overlap,
        suffix: "Q".concat(i2, "-").concat(data.id),
        secondary: secondary || i2 > 0,
        tooltip: hasHover && !(secondary || i2 > 0) ? void 0 : q2.name,
        setAddons: size.sets.addons.length === 0 ? EMPTY_ARRAY$1 : size.sets.addons.map(function(a2, i3) {
          return wrapAddon(a2, q2, i3, q2.elemOverlap, secondary || i3 > 0);
        })
      });
    })), React.createElement("g", {
      transform: "translate(".concat(size.cs.x, ",").concat(size.cs.y, ")")
    }, qs.map(function(q2, i2) {
      return React.createElement(CombinationSelectionChart, {
        key: q2.name,
        data,
        size,
        style: style2,
        elemOverlap: q2.overlap,
        suffix: "Q".concat(i2, "-").concat(data.id),
        secondary: secondary || i2 > 0,
        tooltip: hasHover && !(secondary || i2 > 0) ? void 0 : q2.name,
        combinationAddons: size.cs.addons.length === 0 ? EMPTY_ARRAY$1 : size.cs.addons.map(function(a2, i3) {
          return wrapAddon(a2, q2, i3, q2.elemOverlap, secondary || i3 > 0);
        })
      });
    })));
  });
  function LabelsSelection(_ref19) {
    var data = _ref19.data, size = _ref19.size, style2 = _ref19.style, selection2 = _ref19.selection;
    if (!selection2 || selection2.type !== "set" || !data.sets.keys.includes(data.toKey(selection2))) {
      return null;
    }
    var d2 = selection2;
    return React.createElement("rect", {
      y: data.sets.y(d2),
      width: size.labels.w + size.cs.w + size.sets.after,
      height: data.sets.bandWidth,
      className: "selectionHint-".concat(style2.id)
    });
  }
  function UpSetSelectionChart(_ref20) {
    var data = _ref20.data, size = _ref20.size, style2 = _ref20.style, selection2 = _ref20.selection;
    var cy = data.sets.bandWidth / 2;
    var cx = data.cs.cx;
    var r2 = data.r;
    var height = size.sets.h + size.sets.after;
    var width = data.cs.bandWidth;
    if (!selection2 || selection2.type === "set" || !data.cs) {
      return null;
    }
    var d2 = selection2;
    var index = data.cs.keys.indexOf(data.toKey(d2));
    if (index < 0) {
      return null;
    }
    return React.createElement("g", {
      transform: "translate(".concat(size.labels.w + data.cs.x(d2), ", 0)"),
      "data-upset": "cs-ss",
      "data-i": index
    }, React.createElement("rect", {
      width,
      height,
      className: "selectionHint-".concat(style2.id)
    }), d2.sets.size > 1 && React.createElement("line", {
      x1: cx,
      y1: data.sets.y(data.sets.v.find(function(p2) {
        return data.cs.has(d2, p2);
      })) + cy - (data.r - 1),
      x2: cx,
      y2: data.sets.y(data.sets.rv.find(function(p2) {
        return data.cs.has(d2, p2);
      })) + cy + (data.r - 1),
      className: "upsetSelectionLine-".concat(data.id),
      style: mergeColor(void 0, !style2.selectionColor ? d2.color : void 0, "stroke")
    }), data.sets.v.filter(function(s2) {
      return data.cs.has(d2, s2);
    }).map(function(s2) {
      return React.createElement(UpSetDot, {
        key: data.toKey(s2),
        r: r2 * 1.1,
        cx,
        cy: data.sets.y(s2) + cy,
        name: style2.tooltips ? s2.name : "",
        className: clsx("fillSelection-".concat(style2.id), "pnone-".concat(style2.id), style2.classNames.dot),
        style: mergeColor(style2.styles.dot, !style2.selectionColor ? s2.color : void 0)
      });
    }));
  }
  var EMPTY_ARRAY = [];
  function UpSetSelection(_ref21) {
    var size = _ref21.size, data = _ref21.data, style2 = _ref21.style, selection2 = _ref21.selection, hasHover = _ref21.hasHover;
    var empty = style2.emptySelection;
    var selectionOverlap = generateSelectionOverlap(selection2, data.overlapGuesser, data.toElemKey);
    var selectionName = generateSelectionName(selection2);
    var someAddon = size.sets.addons.some(function(s2) {
      return s2.renderSelection != null;
    }) || size.cs.addons.some(function(s2) {
      return s2.renderSelection != null;
    });
    var selectionElemOverlap = selection2 && typeof selection2 !== "function" && someAddon ? elemElemOverlapOf(Array.isArray(selection2) ? selection2 : selection2.elems, data.toElemKey) : null;
    function wrapAddon(addon) {
      return Object.assign(Object.assign({}, addon), {
        render: function render2(props) {
          var overlap = selectionElemOverlap ? selectionElemOverlap(props.set) : null;
          return addon.renderSelection ? addon.renderSelection(Object.assign({
            selection: selection2,
            selectionColor: style2.selectionColor || props.set.color || "orange",
            overlap
          }, props)) : null;
        }
      });
    }
    return React.createElement("g", {
      className: hasHover ? "pnone-".concat(style2.id) : void 0
    }, (selection2 || empty) && React.createElement(CombinationSelectionChart, {
      data,
      size,
      style: style2,
      transform: "translate(".concat(size.cs.x, ",").concat(size.cs.y, ")"),
      empty: empty && !selection2,
      elemOverlap: selectionOverlap,
      suffix: "Selection-".concat(style2.id),
      tooltip: hasHover ? void 0 : selectionName,
      combinationAddons: size.cs.addons.length === 0 ? EMPTY_ARRAY : size.cs.addons.map(wrapAddon)
    }), (selection2 || empty) && React.createElement(SetSelectionChart, {
      data,
      size,
      style: style2,
      transform: "translate(".concat(size.sets.x, ",").concat(size.sets.y, ")"),
      empty: empty && !selection2,
      elemOverlap: selectionOverlap,
      suffix: "Selection-".concat(style2.id),
      tooltip: hasHover ? void 0 : selectionName,
      setAddons: size.sets.addons.length === 0 ? EMPTY_ARRAY : size.sets.addons.map(wrapAddon)
    }), React.createElement("g", {
      transform: "translate(".concat(size.labels.x, ",").concat(size.labels.y, ")")
    }, isSetLike(selection2) && React.createElement(LabelsSelection, {
      data,
      size,
      style: style2,
      selection: selection2
    }), isSetLike(selection2) && React.createElement(UpSetSelectionChart, {
      data,
      size,
      style: style2,
      selection: selection2
    })));
  }
  function propRule(value) {
    var prop = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "font-size";
    return value ? "".concat(prop, ": ").concat(value, ";") : "";
  }
  function baseRules(styleId, theme2, fontFamily, fontSizes2) {
    var hasS = [];
    if (theme2.hasSelectionColor) {
      hasS.push("fill: ".concat(theme2.hasSelectionColor, ";"));
    }
    var hasSelectionOpacity = theme2.hasSelectionOpacity != null && theme2.hasSelectionOpacity >= 0;
    if (hasSelectionOpacity) {
      hasS.push("fill-opacity: ".concat(theme2.hasSelectionOpacity, ";"));
    }
    return {
      p: propRule,
      root: "\n  .root-".concat(styleId, " {\n    ").concat(propRule(fontFamily, "font-family"), "\n  }\n  "),
      text: "\n  .titleTextStyle-".concat(styleId, " {\n    fill: ").concat(theme2.textColor, ";\n    ").concat(propRule(fontSizes2.title), "\n  }\n  .descTextStyle-").concat(styleId, " {\n    fill: ").concat(theme2.textColor, ";\n    ").concat(propRule(fontSizes2.description), "\n  }\n\n  .legendTextStyle-").concat(styleId, " {\n    fill: ").concat(theme2.textColor, ";\n    ").concat(propRule(fontSizes2.legend), "\n    text-anchor: middle;\n    dominant-baseline: hanging;\n    pointer-events: none;\n  }\n  "),
      hasSFill: hasS.join(" "),
      hasSStroke: hasS.join(" ").replace("fill:", "stroke:").replace("fill-", "stroke-"),
      fill: "\n  .fillPrimary-".concat(styleId, " { fill: ").concat(theme2.color, "; fill-opacity: ").concat(theme2.opacity, "; }\n  .fillOverflow1-").concat(styleId, " { fill-opacity: ").concat(theme2.opacity * OVERFLOW_OPACITY_FACTOR[0], "; }\n  .fillOverflow2-").concat(styleId, " { fill-opacity: ").concat(theme2.opacity * OVERFLOW_OPACITY_FACTOR[1], "; }\n  ").concat(hasS.length > 0 ? ".root-".concat(styleId, "[data-selection] .fillPrimary-").concat(styleId, " { ").concat(hasS.join(" "), " }") : "", "\n  ").concat(hasSelectionOpacity ? "\n      .root-".concat(styleId, "[data-selection] .fillOverflow1-").concat(styleId, " { fill-opacity: ").concat(theme2.opacity * OVERFLOW_OPACITY_FACTOR[0], "; }\n      .root-").concat(styleId, "[data-selection] .fillOverflow2-").concat(styleId, " { fill-opacity: ").concat(theme2.opacity * OVERFLOW_OPACITY_FACTOR[1], "; }") : "", "\n  ").concat(theme2.selectionColor ? ".fillSelection-".concat(styleId, " { fill: ").concat(theme2.selectionColor, "; }") : "", "\n  .fillTransparent-").concat(styleId, " { fill: transparent; }\n\n  .selectionHint-").concat(styleId, " {\n    fill: transparent;\n    pointer-events: none;\n    ").concat(propRule(theme2.selectionColor, "stroke"), "\n  }\n  .clickAble-").concat(styleId, " {\n    cursor: pointer;\n  }\n\n  .startText-").concat(styleId, " {\n    text-anchor: start;\n  }\n  .endText-").concat(styleId, " {\n    text-anchor: end;\n  }\n  .pnone-").concat(styleId, " {\n    pointer-events: none;\n  }"),
      "export": "\n  .exportTextStyle-".concat(styleId, " {\n    fill: ").concat(theme2.textColor, ";\n    ").concat(propRule(fontSizes2.exportLabel), "\n  }\n  .exportButtons-").concat(styleId, " {\n    text-anchor: middle;\n  }\n  .exportButton-").concat(styleId, " {\n    cursor: pointer;\n    opacity: 0.5;\n  }\n  .exportButton-").concat(styleId, ":hover {\n    opacity: 1;\n  }\n  .exportButton-").concat(styleId, " > rect {\n    fill: none;\n    stroke: ").concat(theme2.textColor, ";\n  }\n  ")
    };
  }
  function useHandler(p2) {
    var onClick2 = p2.onClick;
    return d(function() {
      return {
        hasClick: onClick2 != null,
        hasHover: p2.onHover != null,
        onClick: wrap(onClick2),
        onMouseEnter: wrap(p2.onHover),
        onContextMenu: wrap(p2.onContextMenu),
        onMouseLeave: p2.onHover ? function(evt) {
          return p2.onHover(null, evt.nativeEvent, []);
        } : void 0,
        onMouseMove: wrap(p2.onMouseMove),
        reset: function reset(evt) {
          return onClick2 ? onClick2(null, evt.nativeEvent, []) : null;
        }
      };
    }, [onClick2, p2.onHover, p2.onContextMenu, p2.onMouseMove]);
  }
  var UpSetJS = /* @__PURE__ */ React.forwardRef(function UpSetJS2(props, ref) {
    var _a;
    var p2 = fillDefaults$1(props);
    var _p$selection = p2.selection, selection2 = _p$selection === void 0 ? null : _p$selection, _p$queries = p2.queries, queries2 = _p$queries === void 0 ? [] : _p$queries, fontSizes2 = p2.fontSizes;
    var styleId = d(function() {
      return p2.id ? p2.id : generateId([p2.fontFamily, fontSizes2.axisTick, fontSizes2.barLabel, fontSizes2.chartLabel, fontSizes2.legend, fontSizes2.setLabel, fontSizes2.title, fontSizes2.exportLabel, fontSizes2.description, p2.textColor, p2.hoverHintColor, p2.color, p2.hasSelectionColor, p2.selectionColor, p2.notMemberColor, p2.alternatingBackgroundColor, p2.opacity, p2.hasSelectionOpacity]);
    }, [p2.id, p2.fontFamily, fontSizes2.axisTick, fontSizes2.barLabel, fontSizes2.chartLabel, fontSizes2.legend, fontSizes2.setLabel, fontSizes2.title, fontSizes2.exportLabel, fontSizes2.description, p2.textColor, p2.hoverHintColor, p2.color, p2.hasSelectionColor, p2.selectionColor, p2.notMemberColor, p2.alternatingBackgroundColor, p2.opacity, p2.hasSelectionOpacity]);
    var styleInfo = d(function() {
      return deriveStyleDependent$1(p2.theme, p2.styles, p2.classNames, p2.combinationName, p2.combinationNameAxisOffset, p2.setName, p2.setNameAxisOffset, styleId, p2.barLabelOffset, p2.selectionColor, p2.emptySelection, p2.title, p2.description, p2.tooltips, p2.setLabelAlignment);
    }, [p2.theme, p2.styles, p2.classNames, p2.barLabelOffset, p2.combinationName, p2.combinationNameAxisOffset, p2.setName, p2.setNameAxisOffset, styleId, p2.selectionColor, p2.emptySelection, p2.title, p2.description, p2.tooltips, p2.setLabelAlignment]);
    var sizeInfo = d(function() {
      return deriveSizeDependent(p2.width, p2.height, p2.padding, p2.barPadding, p2.widthRatios, p2.heightRatios, p2.setAddons, p2.combinationAddons, p2.id, p2.setAddonPadding, p2.combinationAddonPadding);
    }, [p2.width, p2.height, p2.padding, p2.barPadding, p2.widthRatios, p2.heightRatios, p2.setAddons, p2.combinationAddons, p2.id, p2.setAddonPadding, p2.combinationAddonPadding]);
    var dataInfo = d(function() {
      return deriveDataDependent(p2.sets, p2.combinations, sizeInfo, p2.numericScale, p2.bandScale, p2.barLabelOffset + parseFontSize(fontSizes2.barLabel), p2.dotPadding, p2.barPadding, parseFontSize(fontSizes2.axisTick), p2.combinationAddons, p2.toKey, p2.toElemKey, p2.id, p2.setMaxScale, p2.combinationMaxScale);
    }, [p2.sets, p2.combinations, sizeInfo, p2.numericScale, p2.bandScale, p2.barLabelOffset, fontSizes2.barLabel, p2.dotPadding, p2.barPadding, fontSizes2.axisTick, p2.combinationAddons, p2.toKey, p2.toElemKey, p2.id, p2.setMaxScale, p2.combinationMaxScale]);
    var rulesHelper = baseRules(styleId, p2, p2.fontFamily, fontSizes2);
    var h2 = useHandler(p2);
    var rules = "\n  ".concat(rulesHelper.root, "\n  ").concat(rulesHelper.text, "\n\n  .axisTextStyle-").concat(styleId, " {\n    fill: ").concat(p2.textColor, ";\n    ").concat(rulesHelper.p(fontSizes2.axisTick), "\n    text-anchor: middle;\n  }\n  .barTextStyle-").concat(styleId, " {\n    fill: ").concat(p2.textColor, ";\n    ").concat(rulesHelper.p(fontSizes2.barLabel), "\n  }\n  .cBarTextStyle-").concat(styleId, " {\n    fill: ").concat(p2.textColor, ";\n    ").concat(rulesHelper.p(fontSizes2.barLabel), "\n    text-anchor: middle;\n  }\n  .sBarTextStyle-").concat(styleId, " {\n    fill: ").concat(p2.textColor, ";\n    ").concat(rulesHelper.p(fontSizes2.barLabel), "\n    text-anchor: end;\n    dominant-baseline: central;\n  }\n  .hoverBarTextStyle-").concat(styleId, " {\n    ").concat(rulesHelper.p(fontSizes2.barLabel), "\n    fill: ").concat(p2.hoverHintColor, ";\n    display: none;\n    text-anchor: middle;\n  }\n  .setTextStyle-").concat(styleId, " {\n    fill: ").concat(p2.textColor, ";\n    ").concat(rulesHelper.p(fontSizes2.setLabel), "\n    text-anchor: ").concat(toAnchor(p2.setLabelAlignment), ";\n    dominant-baseline: central;\n  }\n  .cChartTextStyle-").concat(styleId, " {\n    fill: ").concat(p2.textColor, ";\n    ").concat(rulesHelper.p(fontSizes2.chartLabel), "\n    text-anchor: middle;\n  }\n  .sChartTextStyle-").concat(styleId, " {\n    fill: ").concat(p2.textColor, ";\n    ").concat(rulesHelper.p(fontSizes2.chartLabel), "\n    text-anchor: middle;\n    dominant-baseline: hanging;\n  }\n\n  ").concat(rulesHelper.fill, "\n  .fillNotMember-").concat(styleId, " { fill: ").concat(p2.notMemberColor, "; }\n  .fillAlternating-").concat(styleId, " { fill: ").concat(p2.alternatingBackgroundColor || "transparent", "; }\n\n  .axisLine-").concat(styleId, " {\n    fill: none;\n    stroke: ").concat(p2.textColor, ";\n  }\n  .hoverBar-").concat(styleId, " {\n    fill: transparent;\n  }\n\n  .interactive-").concat(styleId, ":hover > .hoverBar-").concat(styleId, " {\n    stroke: ").concat(p2.hoverHintColor, ";\n  }\n  .interactive-").concat(styleId, ":hover > .hoverBarTextStyle-").concat(styleId, " {\n    display: unset;\n  }\n\n  ").concat(rulesHelper["export"], "\n\n  .upsetLine-").concat(dataInfo.id, " {\n    stroke-width: ").concat(dataInfo.r * 0.6, ";\n    stroke: ").concat(p2.color, ";\n    stroke-opacity: ").concat(p2.opacity, ";\n  }\n  ").concat(rulesHelper.hasSStroke ? ".root-".concat(styleId, "[data-selection] .upsetLine-").concat(dataInfo.id, " { ").concat(rulesHelper.hasSStroke, " }") : "", "\n\n  .upsetSelectionLine-").concat(dataInfo.id, " {\n    stroke-width: ").concat(dataInfo.r * 0.6 * 1.1, ";\n    ").concat(rulesHelper.p(p2.selectionColor, "stroke"), "\n    pointer-events: none;\n  }\n\n  ").concat(queries2.map(function(q2, i2) {
      return ".fillQ".concat(i2, "-").concat(dataInfo.id, " {\n    fill: ").concat(q2.color, ";\n  }");
    }).join("\n"), "\n  ");
    var exportChart = A$1(function(evt) {
      var svg = evt.currentTarget.closest("svg");
      var type = evt.currentTarget.dataset.type || "png";
      switch (type) {
        case "vega":
          exportVegaLite(svg);
          break;
        case "dump":
          exportDump(svg, props, dataInfo);
          break;
        case "share":
          exportSharedLink(props, dataInfo);
          break;
        case "svg":
        case "png":
          exportSVG$1(svg, {
            type,
            toRemove: ".".concat(evt.currentTarget.getAttribute("class"))
          });
      }
    }, [dataInfo, props]);
    var selectionName = generateSelectionName(selection2);
    return React.createElement("svg", {
      id: p2.id,
      className: clsx("root-".concat(styleId), p2.className),
      style: p2.style,
      width: p2.width,
      height: p2.height,
      ref,
      viewBox: "0 0 ".concat(p2.width, " ").concat(p2.height),
      "data-theme": (_a = p2.theme) !== null && _a !== void 0 ? _a : "light",
      "data-selection": selectionName ? selectionName : void 0
    }, p2.styleFactory(rules), React.createElement("defs", null, React.createElement("clipPath", {
      id: "clip-".concat(sizeInfo.id)
    }, React.createElement("rect", {
      x: sizeInfo.sets.w,
      y: 0,
      width: sizeInfo.labels.w,
      height: sizeInfo.sets.h
    }))), p2.queryLegend && React.createElement(QueryLegend, {
      queries: queries2,
      x: sizeInfo.legend.x,
      style: styleInfo,
      data: dataInfo
    }), React.createElement(ExportButtons, {
      transform: "translate(".concat(sizeInfo.w - 2, ",").concat(sizeInfo.h - 3, ")"),
      styleId,
      exportButtons: p2.exportButtons,
      exportChart
    }), React.createElement("g", {
      transform: "translate(".concat(p2.padding, ",").concat(p2.padding, ")"),
      "data-upset": "base"
    }, p2.onClick && React.createElement("rect", {
      width: sizeInfo.cs.x,
      height: sizeInfo.sets.y,
      onClick: h2.reset,
      className: "fillTransparent-".concat(styleId)
    }), React.createElement(UpSetAxis, {
      size: sizeInfo,
      style: styleInfo,
      data: dataInfo
    }), React.createElement(UpSetChart, {
      size: sizeInfo,
      style: styleInfo,
      data: dataInfo,
      h: h2,
      setChildrenFactory: p2.setChildrenFactory,
      combinationChildrenFactory: p2.combinationChildrenFactory
    }), React.createElement(UpSetSelection, {
      size: sizeInfo,
      style: styleInfo,
      data: dataInfo,
      hasHover: h2.hasHover,
      selection: selection2
    }), React.createElement(UpSetQueries, {
      size: sizeInfo,
      style: styleInfo,
      data: dataInfo,
      hasHover: h2.hasHover,
      queries: queries2,
      secondary: p2.onHover != null || selection2 != null
    })), props.children);
  });
  var DEG2RAD = 1 / 180 * Math.PI;
  function widthRatios(value) {
    return value == null || Array.isArray(value) && value.length >= 2 && value.every(function(v2) {
      return typeof v2 === "number";
    });
  }
  function heightRatios(value) {
    return value == null || Array.isArray(value) && value.length >= 1 && value.every(function(v2) {
      return typeof v2 === "number";
    });
  }
  function setLabelAlignment(value) {
    return value == null || value === "left" || value === "center" || value === "right";
  }
  function sets(value) {
    return Array.isArray(value) && value.every(isSet);
  }
  function combinations(value) {
    return value == null || Array.isArray(value) && value.every(isSetCombination) || isGenerateSetCombinationOptions(value);
  }
  function selection(value) {
    return value == null || Array.isArray(value) || isSetLike$1(value);
  }
  function onHover(value) {
    return value == null || typeof value === "function";
  }
  function onClick(value) {
    return value == null || typeof value === "function";
  }
  function onContextMenu(value) {
    return value == null || typeof value === "function";
  }
  function onMouseMove(value) {
    return value == null || typeof value === "function";
  }
  function queries(value) {
    return !value || Array.isArray(value) && value.every(isUpSetQuery);
  }
  function stringOrFalse(value) {
    return value == null || typeof value === "string" || value === false;
  }
  function setLabelOffsets(value) {
    return value == null || Array.isArray(value) && value.every(function(v2) {
      return null;
    });
  }
  function theme(value) {
    return value == null || value === "light" || value === "dark" || value === "vega";
  }
  function classNames(value) {
    return value == null || Object.keys(value).every(function(k2) {
      return MULTI_STYLE_KEYS.includes(k2) && typeof value[k2] === "string";
    });
  }
  function fontSizes(value) {
    return value == null || Object.keys(value).every(function(k2) {
      return FONT_SIZES_KEYS.includes(k2) && typeof value[k2] === "string";
    });
  }
  function numericScale(value) {
    return value == null || value === "linear" || value === "log" || typeof value === "function";
  }
  function bandScale2(value) {
    return value == null || value === "band" || typeof value === "function";
  }
  function axisOffset(value) {
    return value == null || value === "auto" || typeof value === "number";
  }
  function style(value) {
    return value == null || _typeof(value) === "object";
  }
  function styles(value) {
    return value == null || Object.keys(value).every(function(k2) {
      return MULTI_STYLE_KEYS.includes(k2);
    });
  }
  function exportButtons(value) {
    return value == null || typeof value === "boolean" || Object.keys(value).every(function(k2) {
      return EXPORT_OPTION_KEYS.includes(k2) && typeof value[k2] === "boolean";
    });
  }
  var validators = Object.freeze({
    __proto__: null,
    widthRatios,
    heightRatios,
    setLabelAlignment,
    sets,
    combinations,
    selection,
    onHover,
    onClick,
    onContextMenu,
    onMouseMove,
    queries,
    stringOrFalse,
    setLabelOffsets,
    theme,
    classNames,
    fontSizes,
    numericScale,
    bandScale: bandScale2,
    axisOffset,
    style,
    styles,
    exportButtons
  });
  var HELPER = Math.sqrt(2 * Math.PI);
  function render(node, props) {
    var p2 = props;
    S$1(v$1(UpSetJS, p2), node);
  }

  // language_upset.ts
  async function main() {
    console.log("Hello!");
    const sets2 = await fetch("./sets.json").then((res) => res.json());
    const rawCombinations = await fetch("./combinations.json").then((res) => res.json());
    const setsByName = new Map(sets2.map((s2) => [s2.name, s2]));
    const combinations2 = rawCombinations.map((c2) => ({
      ...c2,
      sets: new Set(c2.sets.map((name) => setsByName.get(name)))
    }));
    const props = {
      sets: sets2,
      combinations: combinations2,
      width: 1500,
      height: 600,
      heightRatios: [200],
      setLabelAlignment: "left",
      widthRatios: [150, 100, 1750],
      selection: null,
      onHover: (set) => {
        render(document.getElementById("upset"), { ...props, selection: set });
      },
      fontSizes: { setLabel: "10px", barLabel: "10px" }
    };
    console.log("combinations:", combinations2);
    console.log("sets:", sets2);
    render(document.getElementById("upset"), props);
  }
  main();
})();
/*! Bundled license information:

@upsetjs/bundle/dist/index.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
