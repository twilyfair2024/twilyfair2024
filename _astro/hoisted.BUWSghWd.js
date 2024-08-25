import "./hoisted.BcY2K5JV.js";
import "./index.DImtQWSj.js";
var K = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Q(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var D = {
    exports: {}
};
typeof self < "u" && self, D.exports = function (t) {
    var e = {};
    function n(r) {
        if (e[r])
            return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    return n.m = t,
    n.c = e,
    n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    },
    n.r = function (t) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e || 4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t)
                n.d(r, o, function (e) {
                    return t[e]
                }
                    .bind(null, o));
        return r
    },
    n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        }
         : function () {
            return t
        };
        return n.d(e, "a", e),
        e
    },
    n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    },
    n.p = "",
    n(n.s = 0)
}
([function (t, e, n) {
            (function (e) {
                t.exports = function (t, n) {
                    var r,
                    o,
                    i,
                    c,
                    l,
                    u,
                    a,
                    s = e.window,
                    f = s.document,
                    d = f.documentElement,
                    p = f.querySelector("body"),
                    h = t.getContext("2d"),
                    y = function (t) {
                        return "rgba(0,0,0,".concat(t / 100, ")")
                    },
                    g = Object.assign({
                        viewport: null,
                        styles: {
                            "header,footer,section,article": y(8),
                            "h1,a": y(10),
                            "h2,h3,h4": y(8)
                        },
                        back: y(2),
                        view: y(5),
                        drag: y(10),
                        interval: null
                    }, n),
                    v = function (t, e, n, r) {
                        return n.split(/\s+/).forEach((function (n) {
                                return t[e](n, r)
                            }))
                    },
                    m = function (t, e, n) {
                        return v(t, "addEventListener", e, n)
                    },
                    b = function (t, e, n) {
                        return v(t, "removeEventListener", e, n)
                    },
                    w = function (t, e, n, r) {
                        return {
                            x: t,
                            y: e,
                            w: n,
                            h: r
                        }
                    },
                    x = function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            x: 0,
                            y: 0
                        };
                        return w(t.x - e.x, t.y - e.y, t.w, t.h)
                    },
                    O = function () {
                        return w(0, 0, d.scrollWidth, d.scrollHeight)
                    },
                    j = function () {
                        return w(s.pageXOffset, s.pageYOffset, d.clientWidth, d.clientHeight)
                    },
                    E = function (t) {
                        var e = t.getBoundingClientRect();
                        return {
                            x: e.left + s.pageXOffset,
                            y: e.top + s.pageYOffset
                        }
                    },
                    T = function (t) {
                        var e = E(t),
                        n = e.x,
                        r = e.y;
                        return w(n, r, t.offsetWidth, t.offsetHeight)
                    },
                    L = function (t) {
                        var e = E(t),
                        n = e.x,
                        r = e.y;
                        return w(n + t.clientLeft, r + t.clientTop, t.clientWidth, t.clientHeight)
                    },
                    S = function (t) {
                        var e = E(t),
                        n = e.x,
                        r = e.y;
                        return w(n + t.clientLeft - t.scrollLeft, r + t.clientTop - t.scrollTop, t.scrollWidth, t.scrollHeight)
                    },
                    P = (u = t.clientWidth, a = t.clientHeight, function (t, e) {
                        return Math.min(u / t, a / e)
                    }),
                    C = function (e, n) {
                        t.width = e,
                        t.height = n,
                        t.style.width = "".concat(e, "px"),
                        t.style.height = "".concat(n, "px")
                    },
                    W = g.viewport,
                    _ = function (t) {
                        return Array.from((W || f).querySelectorAll(t))
                    },
                    k = !1,
                    B = function (t, e) {
                        e && (h.beginPath(), h.rect(t.x, t.y, t.w, t.h), h.fillStyle = e, h.fill())
                    },
                    H = function (t) {
                        Object.keys(t).forEach((function (e) {
                                var n = t[e];
                                _(e).forEach((function (t) {
                                        B(x(T(t), r), n)
                                    }))
                            }))
                    },
                    M = function () {
                        r = W ? S(W) : O(),
                        o = W ? L(W) : j(),
                        i = P(r.w, r.h),
                        C(r.w * i, r.h * i),
                        h.setTransform(1, 0, 0, 1, 0, 0),
                        h.clearRect(0, 0, t.width, t.height),
                        h.scale(i, i),
                        B(x(r, r), g.back),
                        H(g.styles),
                        B(x(o, r), k ? g.drag : g.view)
                    },
                    Y = function (e) {
                        e.preventDefault();
                        var n = L(t),
                        r = (e.pageX - n.x) / i - o.w * c,
                        u = (e.pageY - n.y) / i - o.h * l;
                        W ? (W.scrollLeft = r, W.scrollTop = u) : s.scrollTo(r, u),
                        M()
                    },
                    X = function e(n) {
                        k = !1,
                        t.style.cursor = "pointer",
                        p.style.cursor = "auto",
                        b(s, "mousemove", Y),
                        b(s, "mouseup", e),
                        Y(n)
                    },
                    D = function (e) {
                        k = !0;
                        var n = L(t),
                        u = x(o, r);
                        c = ((e.pageX - n.x) / i - u.x) / u.w,
                        l = ((e.pageY - n.y) / i - u.y) / u.h,
                        (c < 0 || c > 1 || l < 0 || l > 1) && (c = .5, l = .5),
                        t.style.cursor = "crosshair",
                        p.style.cursor = "crosshair",
                        m(s, "mousemove", Y),
                        m(s, "mouseup", X),
                        Y(e)
                    };
                    return t.style.cursor = "pointer",
                    m(t, "mousedown", D),
                    m(W || s, "load resize scroll", M),
                    g.interval > 0 && setInterval((function () {
                            return M()
                        }), g.interval),
                    M(), {
                        redraw: M
                    }
                }
            }).call(this, n(1))
        }, function (t, e) {
            var n;
            n = function () {
                return this
            }
            ();
            try {
                n = n || new Function("return this")()
            } catch {
                "object" == typeof window && (n = window)
            }
            t.exports = n
        }
    ]);
var V = D.exports;
const Z = Q(V);
document.addEventListener("DOMContentLoaded", (() => {
        const t = document.getElementById("map");
        t && Z(t, {
            viewport: null,
            styles: {
                footer: "rgba(0,0,0,0.5)",
                span: "rgba(0,0,0,0.3)",
                "h2,h3,h4,p,li": "rgba(0,0,0,0.15)"
            },
            back: "rgba(255, 255, 255,0.5)",
            view: "rgba(0,0,0,0.3)",
            drag: "rgba(0,0,0,0.5)",
            interval: null
        });
        const e = document.getElementById("myCanvas");
        if (!(e instanceof HTMLCanvasElement))
            return;
        e.addEventListener("mousedown", (t => {
                const {
                    x: n,
                    y: r
                } = e.getBoundingClientRect();
                o = t.clientX - n,
                i = t.clientY - r
            })),
        e.addEventListener("mousemove", (t => {
                1 === t.buttons && r(t)
            }));
        const n = e.getContext("2d");
        document.getElementById("clearCanvas").addEventListener("mousedown", (t => {
                n.clearRect(0, 0, n.canvas.width, n.canvas.height)
            }));
        const r = t => {
            const {
                x: r,
                y: c
            } = e.getBoundingClientRect(),
            l = t.clientX - r,
            u = t.clientY - c;
            n.beginPath(),
            n.lineWidth = 3,
            n.moveTo(o, i),
            n.lineTo(l, u),
            n.strokeStyle = "black",
            n.stroke(),
            n.closePath(),
            o = l,
            i = u
        };
        let o = 0,
        i = 0
    }));