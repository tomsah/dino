;(() => {
  var e = {
      228: (e) => {
        e.exports = function (e, n) {
          ;(null == n || n > e.length) && (n = e.length)
          for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t]
          return r
        }
      },
      646: (e, n, t) => {
        var r = t(228)
        e.exports = function (e) {
          if (Array.isArray(e)) return r(e)
        }
      },
      506: (e) => {
        e.exports = function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            )
          return e
        }
      },
      575: (e) => {
        e.exports = function (e, n) {
          if (!(e instanceof n))
            throw new TypeError('Cannot call a class as a function')
        }
      },
      913: (e) => {
        function n(e, n) {
          for (var t = 0; t < n.length; t++) {
            var r = n[t]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        e.exports = function (e, t, r) {
          return t && n(e.prototype, t), r && n(e, r), e
        }
      },
      754: (e) => {
        function n(t) {
          return (
            (e.exports = n = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            n(t)
          )
        }
        e.exports = n
      },
      205: (e, n, t) => {
        var r = t(489)
        e.exports = function (e, n) {
          if ('function' != typeof n && null !== n)
            throw new TypeError(
              'Super expression must either be null or a function',
            )
          ;(e.prototype = Object.create(n && n.prototype, {
            constructor: {value: e, writable: !0, configurable: !0},
          })),
            n && r(e, n)
        }
      },
      860: (e) => {
        e.exports = function (e) {
          if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e)
        }
      },
      206: (e) => {
        e.exports = function () {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          )
        }
      },
      585: (e, n, t) => {
        var r = t(8),
          i = t(506)
        e.exports = function (e, n) {
          return !n || ('object' !== r(n) && 'function' != typeof n) ? i(e) : n
        }
      },
      489: (e) => {
        function n(t, r) {
          return (
            (e.exports = n =
              Object.setPrototypeOf ||
              function (e, n) {
                return (e.__proto__ = n), e
              }),
            n(t, r)
          )
        }
        e.exports = n
      },
      319: (e, n, t) => {
        var r = t(646),
          i = t(860),
          o = t(379),
          a = t(206)
        e.exports = function (e) {
          return r(e) || i(e) || o(e) || a()
        }
      },
      8: (e) => {
        function n(t) {
          return (
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? (e.exports = n = function (e) {
                  return typeof e
                })
              : (e.exports = n = function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
            n(t)
          )
        }
        e.exports = n
      },
      379: (e, n, t) => {
        var r = t(228)
        e.exports = function (e, n) {
          if (e) {
            if ('string' == typeof e) return r(e, n)
            var t = Object.prototype.toString.call(e).slice(8, -1)
            return (
              'Object' === t && e.constructor && (t = e.constructor.name),
              'Map' === t || 'Set' === t
                ? Array.from(e)
                : 'Arguments' === t ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                ? r(e, n)
                : void 0
            )
          }
        }
      },
      756: (e, n, t) => {
        'use strict'
        t.d(n, {Z: () => d})
        var r = t(645),
          i = t.n(r),
          o = t(667),
          a = t.n(o),
          c = t(422),
          s = i()(function (e) {
            return e[1]
          }),
          u = a()(c.Z)
        s.push([
          e.id,
          "/* General Styles */\nbody {\n    background: rgb(111, 208, 224);\n    background: linear-gradient(0deg,rgb(111, 208, 224) 0%, rgb(171, 228, 167) 100%);\n    font-family: 'Open Sans', sans-serif;\n    text-align: center;\n    min-height: 100vh;\n}\n\nh1 {\n    margin: 0;\n    font-family: 'Frijole', cursive;\n    font-size: 3em;\n    font-weight: 400;\n}\n\nh2,\nh3 {\n    font-family: 'Oswald', sans-serif;\n}\n\n@media (min-width: 650px) {\n    h1 {\n        font-size: 5em;\n    }\n}\n\n@media (min-width: 920px) {\n    h1 {\n        font-size: 8em;\n    }\n}\n\np {\n    font-weight: 100;\n}\n\n/* Grid Styles */\n#grid {\n    background: #fff url(" +
            u +
            ") no-repeat;\n    background-size: cover;\n    display: flex;\n    margin: 2em;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    flex-wrap: wrap;\n}\n\n.grid-item {\n    position: relative;\n    box-sizing: border-box;\n    width: 100%;\n}\n\n.grid-item:nth-child(1){\n    background: #009687f5;\n}\n\n.grid-item:nth-child(2){\n    background: #dc7657f5;\n}\n\n.grid-item:nth-child(3){\n    background: #4bb3c1fa;\n}\n\n.grid-item:nth-child(4){\n    background: #fac069f9;\n}\n\n.grid-item:nth-child(5){\n    background: #67a866f9;\n}\n\n.grid-item:nth-child(6){\n    background: #b94169fa;\n}\n\n.grid-item:nth-child(7){\n    background: #7f62b3fa;\n}\n\n.grid-item:nth-child(8){\n    background: #9fc376f9;\n}\n\n.grid-item:nth-child(9){\n    background: #677bcbfa;\n}\n\n@media (min-width: 550px) {\n    #grid div {\n        width: calc(100% / 3);\n    }\n}\n\n.grid-item h3 {\n    font-size: 2em;\n    color: #eee;\n}\n\n.grid-item img {\n    max-width: 100%;\n    padding-bottom: 1em;\n}\n\n.grid-item p {\n    background: rgba(000,000,000, .3);\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    padding: 0.8em 0.8em 1.8em;\n    margin:0;\n    box-sizing: border-box;\n    font-size: 1.2em;\n    font-weight: 600;\n    color: #fff;\n}\n\n/* Form Styles */\n.form-container {\n    background: #eee;\n    padding: 1.3em;\n    text-align: left;\n    max-width: 400px;\n    margin: 0 auto;\n}\n\nform p {\n    margin-bottom: 0.3em;\n    font-size: 1.3em;\n    font-weight: 600;\n    font-family: 'Oswald', sans-serif;\n}\n\ninput {\n    padding: 0.7em;\n    background: #fff;\n    border: 0;\n}\n\ninput:valid {\n    border: 2px solid green;\n}\n\ninput:invalid{\n    border: 2px dashed rgba(255,0,0,0.3);\n}\n\ninput::placeholder {\n    font-size: 12px;\n    opacity: 0.7;\n}\n\ninput:focus::placeholder {\n    color: transparent;\n}\n\n.form-field__short {\n    width: 25%;\n    margin-right: 3%;\n    box-sizing: border-box;\n}\n\n.form-field__full {\n    width: 100%;\n    box-sizing: border-box;\n}\n\nselect {\n    display: block;\n}\n\n#btn {\n    display: inline-block;\n    background: #ccc;\n    padding: 0.8em;\n    margin: 1.2em auto;\n    transition: ease 0.3s all;\n}\n\n#btn:hover:enabled {\n    background: #777;\n    color: #fff;\n    cursor: pointer;\n}\n\n/* Footer */\n.fine-print {\n    display: block;\n    font-size: 0.7em;\n}",
          '',
        ])
        const d = s
      },
      645: (e) => {
        'use strict'
        e.exports = function (e) {
          var n = []
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = e(n)
                return n[2] ? '@media '.concat(n[2], ' {').concat(t, '}') : t
              }).join('')
            }),
            (n.i = function (e, t, r) {
              'string' == typeof e && (e = [[null, e, '']])
              var i = {}
              if (r)
                for (var o = 0; o < this.length; o++) {
                  var a = this[o][0]
                  null != a && (i[a] = !0)
                }
              for (var c = 0; c < e.length; c++) {
                var s = [].concat(e[c])
                ;(r && i[s[0]]) ||
                  (t &&
                    (s[2]
                      ? (s[2] = ''.concat(t, ' and ').concat(s[2]))
                      : (s[2] = t)),
                  n.push(s))
              }
            }),
            n
          )
        }
      },
      667: (e) => {
        'use strict'
        e.exports = function (e, n) {
          return (
            n || (n = {}),
            'string' != typeof (e = e && e.__esModule ? e.default : e)
              ? e
              : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                n.hash && (e += n.hash),
                /["'() \t\n]/.test(e) || n.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, '\\n'),
                      '"',
                    )
                  : e)
          )
        }
      },
      994: (e, n, t) => {
        'use strict'
        var r,
          i = (function () {
            var e = {}
            return function (n) {
              if (void 0 === e[n]) {
                var t = document.querySelector(n)
                if (
                  window.HTMLIFrameElement &&
                  t instanceof window.HTMLIFrameElement
                )
                  try {
                    t = t.contentDocument.head
                  } catch (e) {
                    t = null
                  }
                e[n] = t
              }
              return e[n]
            }
          })(),
          o = []
        function a(e) {
          for (var n = -1, t = 0; t < o.length; t++)
            if (o[t].identifier === e) {
              n = t
              break
            }
          return n
        }
        function c(e, n) {
          for (var t = {}, r = [], i = 0; i < e.length; i++) {
            var c = e[i],
              s = n.base ? c[0] + n.base : c[0],
              u = t[s] || 0,
              d = ''.concat(s, ' ').concat(u)
            t[s] = u + 1
            var l = a(d),
              f = {css: c[1], media: c[2], sourceMap: c[3]}
            ;-1 !== l
              ? (o[l].references++, o[l].updater(f))
              : o.push({identifier: d, updater: m(f, n), references: 1}),
              r.push(d)
          }
          return r
        }
        function s(e) {
          var n = document.createElement('style'),
            r = e.attributes || {}
          if (void 0 === r.nonce) {
            var o = t.nc
            o && (r.nonce = o)
          }
          if (
            (Object.keys(r).forEach(function (e) {
              n.setAttribute(e, r[e])
            }),
            'function' == typeof e.insert)
          )
            e.insert(n)
          else {
            var a = i(e.insert || 'head')
            if (!a)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
              )
            a.appendChild(n)
          }
          return n
        }
        var u,
          d =
            ((u = []),
            function (e, n) {
              return (u[e] = n), u.filter(Boolean).join('\n')
            })
        function l(e, n, t, r) {
          var i = t
            ? ''
            : r.media
            ? '@media '.concat(r.media, ' {').concat(r.css, '}')
            : r.css
          if (e.styleSheet) e.styleSheet.cssText = d(n, i)
          else {
            var o = document.createTextNode(i),
              a = e.childNodes
            a[n] && e.removeChild(a[n]),
              a.length ? e.insertBefore(o, a[n]) : e.appendChild(o)
          }
        }
        function f(e, n, t) {
          var r = t.css,
            i = t.media,
            o = t.sourceMap
          if (
            (i ? e.setAttribute('media', i) : e.removeAttribute('media'),
            o &&
              'undefined' != typeof btoa &&
              (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                ' */',
              )),
            e.styleSheet)
          )
            e.styleSheet.cssText = r
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild)
            e.appendChild(document.createTextNode(r))
          }
        }
        var h = null,
          p = 0
        function m(e, n) {
          var t, r, i
          if (n.singleton) {
            var o = p++
            ;(t = h || (h = s(n))),
              (r = l.bind(null, t, o, !1)),
              (i = l.bind(null, t, o, !0))
          } else
            (t = s(n)),
              (r = f.bind(null, t, n)),
              (i = function () {
                !(function (e) {
                  if (null === e.parentNode) return !1
                  e.parentNode.removeChild(e)
                })(t)
              })
          return (
            r(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap
                )
                  return
                r((e = n))
              } else i()
            }
          )
        }
        e.exports = function (e, n) {
          ;(n = n || {}).singleton ||
            'boolean' == typeof n.singleton ||
            (n.singleton =
              (void 0 === r &&
                (r = Boolean(
                  window && document && document.all && !window.atob,
                )),
              r))
          var t = c((e = e || []), n)
          return function (e) {
            if (
              ((e = e || []),
              '[object Array]' === Object.prototype.toString.call(e))
            ) {
              for (var r = 0; r < t.length; r++) {
                var i = a(t[r])
                o[i].references--
              }
              for (var s = c(e, n), u = 0; u < t.length; u++) {
                var d = a(t[u])
                0 === o[d].references && (o[d].updater(), o.splice(d, 1))
              }
              t = s
            }
          }
        }
      },
      422: (e, n, t) => {
        'use strict'
        t.d(n, {Z: () => r})
        const r = t.p + '9e5def92b715763acc0dd617d2717104.png'
      },
    },
    n = {}
  function t(r) {
    if (n[r]) return n[r].exports
    var i = (n[r] = {id: r, exports: {}})
    return e[r](i, i.exports, t), i.exports
  }
  ;(t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e
    return t.d(n, {a: n}), n
  }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, {enumerable: !0, get: n[r]})
    }),
    (t.g = (function () {
      if ('object' == typeof globalThis) return globalThis
      try {
        return this || new Function('return this')()
      } catch (e) {
        if ('object' == typeof window) return window
      }
    })()),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      var e
      t.g.importScripts && (e = t.g.location + '')
      var n = t.g.document
      if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
        var r = n.getElementsByTagName('script')
        r.length && (e = r[r.length - 1].src)
      }
      if (!e)
        throw new Error('Automatic publicPath is not supported in this browser')
      ;(e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (t.p = e)
    })(),
    (() => {
      'use strict'
      var e = t(319),
        n = t.n(e),
        r = t(913),
        i = t.n(r),
        o = t(205),
        a = t.n(o),
        c = t(585),
        s = t.n(c),
        u = t(754),
        d = t.n(u),
        l = t(575),
        f = t.n(l)
      const h = JSON.parse(
        '{"N":[{"species":"Triceratops","weight":13000,"height":114,"diet":"herbavor","where":"North America","when":"Late Cretaceous","fact":"First discovered in 1889 by Othniel Charles Marsh"},{"species":"Tyrannosaurus Rex","weight":11905,"height":144,"diet":"carnivor","where":"North America","when":"Late Cretaceous","fact":"The largest known skull measures in at 5 feet long."},{"species":"Anklyosaurus","weight":10500,"height":55,"diet":"herbavor","where":"North America","when":"Late Cretaceous","fact":"Anklyosaurus survived for approximately 135 million years."},{"species":"Brachiosaurus","weight":70000,"height":"372","diet":"herbavor","where":"North America","when":"Late Jurasic","fact":"An asteroid was named 9954 Brachiosaurus in 1991."},{"species":"Stegosaurus","weight":11600,"height":79,"diet":"herbavor","where":"North America, Europe, Asia","when":"Late Jurasic to Early Cretaceous","fact":"The Stegosaurus had between 17 and 22 seperate places and flat spines."},{"species":"Elasmosaurus","weight":16000,"height":59,"diet":"carnivor","where":"North America","when":"Late Cretaceous","fact":"Elasmosaurus was a marine reptile first discovered in Kansas."},{"species":"Pteranodon","weight":44,"height":20,"diet":"carnivor","where":"North America","when":"Late Cretaceous","fact":"Actually a flying reptile, the Pteranodon is not a dinosaur."},{"species":"Pigeon","weight":0.5,"height":9,"diet":"herbavor","where":"World Wide","when":"Holocene","fact":"All birds are living dinosaurs."}]}',
      )
      var p = t(994),
        m = t.n(p),
        g = t(756)
      function b(e) {
        var n = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {}),
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var t,
            r = d()(e)
          if (n) {
            var i = d()(this).constructor
            t = Reflect.construct(r, arguments, i)
          } else t = r.apply(this, arguments)
          return s()(this, t)
        }
      }
      m()(g.Z, {insert: 'head', singleton: !1}), g.Z.locals
      var v,
        y = [],
        w = {},
        x = document.getElementById('btn')
      x.setAttribute('disabled', 'disabled')
      var E = document.getElementById('dino-compare'),
        S = document.getElementById('main')
      E.addEventListener('input', function () {
        x.disabled = !E.checkValidity()
      })
      var k = function (e) {
          e.parentNode.remove(), L()
        },
        C = function e(n, t, r, i) {
          f()(this, e),
            (this.diet = n),
            (this.height = t),
            (this.species = r),
            (this.weight = i),
            (this.imgSrc = './images/'.concat(r, '.png'))
        },
        N = (function (e) {
          a()(t, e)
          var n = b(t)
          function t(e) {
            var r,
              i = e.diet,
              o = e.fact,
              a = e.height,
              c = e.species,
              s = e.weight,
              u = e.when,
              d = e.where
            return (
              f()(this, t),
              ((r = n.call(this, i, a, c, s)).fact = t.generateFact(
                c,
                o,
                d,
                u,
              )),
              (r.when = u),
              (r.where = d),
              (r.id = 'Dino'),
              r
            )
          }
          return (
            i()(t, null, [
              {
                key: 'generateFact',
                value: function (e, n, t, r) {
                  return 'Pigeon' === e
                    ? [n]
                    : [
                        n,
                        ''.concat(e, ' could be found in ').concat(t),
                        ''.concat(e, ' used to exist from ').concat(r),
                      ]
                },
              },
            ]),
            t
          )
        })(C)
      h.N.forEach(function (e) {
        y.push(new N(e))
      })
      var A = (function (e) {
          a()(t, e)
          var n = b(t)
          function t(e) {
            var r,
              i = e.diet,
              o = e.feet,
              a = e.inches,
              c = e.name,
              s = e.weight
            f()(this, t)
            var u = 12 * Number(o) + Number(a)
            return ((r = n.call(this, i, u, 'human', s)).name = c), r
          }
          return t
        })(C),
        O = function (e, n) {
          return Number(e.height) > n
            ? 'you are '
                .concat(Number(e.height) - n, 'inches smaller than ')
                .concat(e.species)
            : 'you are '
                .concat(
                  parseInt(w.weight) - Number(e.height),
                  'inches taller than ',
                )
                .concat(e.species)
        },
        j = function (e, n, t) {
          var r = document.createElement('div')
          r.className = 'grid-item'
          var i = document.createElement('h3'),
            o = document.createTextNode(e)
          i.appendChild(o), r.appendChild(i)
          var a = document.createElement('img')
          if (((a.src = n), r.appendChild(a), t)) {
            var c = document.createElement('p'),
              s = t[Math.floor(Math.random() * t.length)],
              u = document.createTextNode(s)
            c.appendChild(u), r.appendChild(c)
          }
          return r
        },
        T = Boolean(E),
        L = function () {
          T
            ? ((T = !1), S.appendChild(v))
            : ((T = !0),
              E.reset(),
              document.getElementById('main').appendChild(E))
        }
      x.addEventListener('click', function (e) {
        var t
        ;(t = {
          name: E.name.value,
          weight: E.weight.value,
          feet: E.feet.value,
          inches: E.inches.value,
          diet: E.diet.value,
        }),
          (w = new A(t)),
          (function (e, t) {
            e.forEach(function (e) {
              var r = (function (e, n) {
                  return e.weight > n
                    ? 'you are '
                        .concat(e.weight - n, 'lbs lighter than ')
                        .concat(e.species)
                    : 'you are '
                        .concat(n - e.weight, 'lbs Heavier than ')
                        .concat(e.species)
                })(e, Number(t.weight)),
                i = (function (e, n) {
                  var t
                  return (
                    e.diet === n.toLowerCase()
                      ? (t = 'you have the same '
                          .concat(e.diet, ' diet than ')
                          .concat(e.species))
                      : 'herbavor' === e.diet
                      ? (t = 'you are safe with '
                          .concat(e.species, ', I am on ')
                          .concat(e.diet, ' diet than'))
                      : 'carnivor' === e.diet &&
                        (t = 'careful '
                          .concat(e.species, ' has a ')
                          .concat(
                            e.diet,
                            ' diet, you can easily become its meal',
                          )),
                    t
                  )
                })(e, t.diet.toLowerCase()),
                o = O(e, t.height)
              e.fact =
                'Pigeon' === e.species
                  ? e.fact
                  : [].concat(n()(e.fact), [r, i, o])
            })
          })(y, w),
          (function () {
            ;(v = document.createElement('div')).id = 'container'
            var e = document.createElement('button')
            e.append('restart'),
              e.addEventListener('click', function (e) {
                ;(document.getElementById('grid').innerHTML = ''),
                  y.splice(4, 1),
                  k(e.target)
              }),
              v.appendChild(e)
            var n = document.createElement('div')
            ;(n.id = 'grid'),
              v.appendChild(n),
              y.sort(function () {
                return Math.random() - 0.5
              }),
              y.splice(4, 0, w),
              y.forEach(function (e) {
                var t =
                  'Dino' === e.id
                    ? j(e.species, e.imgSrc, e.fact)
                    : j(e.name, e.imgSrc)
                n.appendChild(t)
              })
          })(),
          k(e.target.parentNode)
      })
    })()
})()
