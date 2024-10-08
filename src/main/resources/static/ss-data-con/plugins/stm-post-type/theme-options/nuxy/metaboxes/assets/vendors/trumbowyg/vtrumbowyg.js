! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e(require("jquery"), require("trumbowyg/dist/ui/icons.svg"), require("trumbowyg")) : "function" == typeof define && define.amd ? define("VueTrumbowyg", ["jquery", "trumbowyg/dist/ui/icons.svg", "trumbowyg"], e) : "object" == typeof exports ? exports.VueTrumbowyg = e(require("jquery"), require("trumbowyg/dist/ui/icons.svg"), require("trumbowyg")) : t.VueTrumbowyg = e(t.jQuery, t["trumbowyg/dist/ui/icons.svg"], t.trumbowyg)
}("undefined" != typeof self ? self : this, (function(t, e, n) {
    return function(t) {
        var e = {};

        function n(o) {
            if (e[o]) return e[o].exports;
            var r = e[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
        }
        return n.m = t, n.c = e, n.d = function(t, e, o) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: o
            })
        }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var r in t) n.d(o, r, function(e) {
                    return t[e]
                }.bind(null, r));
            return o
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 3)
    }([function(e, n) {
        e.exports = t
    }, function(t, n) {
        t.exports = e
    }, function(t, e) {
        t.exports = n
    }, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "trumbowygPlugin", (function() {
            return s
        })), n.d(e, "component", (function() {
            return l
        }));
        var o = n(0),
            r = n.n(o),
            u = (n(2), n(1)),
            i = ["init", "focus", "blur", "change", "resize", "paste", "openfullscreen", "closefullscreen", "close", "modalopen", "modalclose"],
            l = {
                name: "trumbowyg",
                render: function(t) {
                    return t("textarea")
                },
                props: {
                    value: {
                        default: null,
                        required: !0,
                        validator: function(t) {
                            return null === t || "string" == typeof t || t instanceof String
                        }
                    },
                    config: {
                        type: Object,
                        default: function() {
                            return {}
                        }
                    },
                    svgPath: {
                        type: [String, Boolean],
                        default: n.n(u).a
                    },
                    disabled: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        el: null
                    }
                },
                mounted: function() {
                    this.el || (this.el = r()(this.$el), this.el.trumbowyg(r.a.extend(!0, {}, {
                        svgPath: this.svgPath
                    }, this.config)), this.el.trumbowyg("html", this.value), this.el.on("".concat("tbw", "change"), this.onChange), this.el.on("".concat("tbw", "blur"), this.onBlur), this.toggleDisabled(this.disabled), this.registerEvents())
                },
                watch: {
                    value: function(t) {
                        this.el && t !== this.el.trumbowyg("html") && this.el.trumbowyg("html", t)
                    },
                    disabled: function(t) {
                        this.toggleDisabled(t)
                    }
                },
                methods: {
                    onChange: function(t) {
                        this.$emit("input", t.target.value)
                    },
                    onBlur: function(t) {
                        this.$emit("blur", t.target.value)
                    },
                    registerEvents: function() {
                        var t = this;
                        i.forEach((function(e) {
                            t.el.on("".concat("tbw").concat(e), (function() {
                                for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                                t.$emit.apply(t, ["".concat("tbw", "-").concat(e)].concat(o))
                            }))
                        }))
                    },
                    toggleDisabled: function(t) {
                        var e = t ? "disable" : "enable";
                        this.el.trumbowyg(e)
                    }
                },
                beforeDestroy: function() {
                    this.el && (this.el.trumbowyg("destroy"), this.el = null)
                }
            },
            s = function(t, e) {
                var n = "trumbowyg";
                "string" == typeof e && (n = e), t.component(n, l)
            };
        l.install = s;
        e.default = l
    }])
}));