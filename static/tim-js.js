! function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define &&
		define.amd ? define(t) : (e = e || self).TIM = t()
}(this, (function() {
	function e(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			t && (o = o.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), n.push.apply(n, o)
		}
		return n
	}

	function t(t) {
		for (var n = 1; n < arguments.length; n++) {
			var o = null != arguments[n] ? arguments[n] : {};
			n % 2 ? e(Object(o), !0).forEach((function(e) {
				s(t, e, o[e])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object
				.getOwnPropertyDescriptors(o)) : e(Object(o)).forEach((function(e) {
				Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
			}))
		}
		return t
	}

	function n(e) {
		return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol
				.prototype ? "symbol" : typeof e
		})(e)
	}

	function o(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function r(e, t) {
		for (var n = 0; n < t.length; n++) {
			var o = t[n];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object
				.defineProperty(e, o.key, o)
		}
	}

	function a(e, t, n) {
		return t && r(e.prototype, t), n && r(e, n), e
	}

	function s(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}

	function i(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError(
			"Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && c(e, t)
	}

	function u(e) {
		return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}

	function c(e, t) {
		return (c = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function l() {
		if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
		if (Reflect.construct.sham) return !1;
		if ("function" == typeof Proxy) return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
		} catch (e) {
			return !1
		}
	}

	function p(e, t, n) {
		return (p = l() ? Reflect.construct : function(e, t, n) {
			var o = [null];
			o.push.apply(o, t);
			var r = new(Function.bind.apply(e, o));
			return n && c(r, n.prototype), r
		}).apply(null, arguments)
	}

	function d(e) {
		var t = "function" == typeof Map ? new Map : void 0;
		return (d = function(e) {
			if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]")))
			return e;
			var n;
			if ("function" != typeof e) throw new TypeError(
				"Super expression must either be null or a function");
			if (void 0 !== t) {
				if (t.has(e)) return t.get(e);
				t.set(e, o)
			}

			function o() {
				return p(e, arguments, u(this).constructor)
			}
			return o.prototype = Object.create(e.prototype, {
				constructor: {
					value: o,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), c(o, e)
		})(e)
	}

	function g(e, t) {
		if (null == e) return {};
		var n, o, r = function(e, t) {
			if (null == e) return {};
			var n, o, r = {},
				a = Object.keys(e);
			for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
			return r
		}(e, t);
		if (Object.getOwnPropertySymbols) {
			var a = Object.getOwnPropertySymbols(e);
			for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable
				.call(e, n) && (r[n] = e[n])
		}
		return r
	}

	function h(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function f(e, t) {
		return !t || "object" != typeof t && "function" != typeof t ? h(e) : t
	}

	function _(e) {
		var t = l();
		return function() {
			var n, o = u(e);
			if (t) {
				var r = u(this).constructor;
				n = Reflect.construct(o, arguments, r)
			} else n = o.apply(this, arguments);
			return f(this, n)
		}
	}

	function m(e, t) {
		return M(e) || function(e, t) {
			var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e[
			"@@iterator"];
			if (null == n) return;
			var o, r, a = [],
				s = !0,
				i = !1;
			try {
				for (n = n.call(e); !(s = (o = n.next()).done) && (a.push(o.value), !t || a.length !==
					t); s = !0);
			} catch (u) {
				i = !0, r = u
			} finally {
				try {
					s || null == n.return || n.return()
				} finally {
					if (i) throw r
				}
			}
			return a
		}(e, t) || I(e, t) || S()
	}

	function v(e) {
		return function(e) {
			if (Array.isArray(e)) return T(e)
		}(e) || y(e) || I(e) || function() {
			throw new TypeError(
				"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
				)
		}()
	}

	function M(e) {
		if (Array.isArray(e)) return e
	}

	function y(e) {
		if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array
			.from(e)
	}

	function I(e, t) {
		if (e) {
			if ("string" == typeof e) return T(e, t);
			var n = Object.prototype.toString.call(e).slice(8, -1);
			return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ?
				Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? T(e,
					t) : void 0
		}
	}

	function T(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
		return o
	}

	function S() {
		throw new TypeError(
			"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
			)
	}

	function D(e, t) {
		var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
		if (!n) {
			if (Array.isArray(e) || (n = I(e)) || t && e && "number" == typeof e.length) {
				n && (e = n);
				var o = 0,
					r = function() {};
				return {
					s: r,
					n: function() {
						return o >= e.length ? {
							done: !0
						} : {
							done: !1,
							value: e[o++]
						}
					},
					e: function(e) {
						throw e
					},
					f: r
				}
			}
			throw new TypeError(
				"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
				)
		}
		var a, s = !0,
			i = !1;
		return {
			s: function() {
				n = n.call(e)
			},
			n: function() {
				var e = n.next();
				return s = e.done, e
			},
			e: function(e) {
				i = !0, a = e
			},
			f: function() {
				try {
					s || null == n.return || n.return()
				} finally {
					if (i) throw a
				}
			}
		}
	}
	var E = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window :
		"undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

	function C(e, t) {
		return e(t = {
			exports: {}
		}, t.exports), t.exports
	}
	var A, k, N = function(e) {
			return e && e.Math == Math && e
		},
		O = N("object" == typeof globalThis && globalThis) || N("object" == typeof window && window) || N(
			"object" == typeof self && self) || N("object" == typeof E && E) || function() {
			return this
		}() || Function("return this")(),
		L = function(e) {
			try {
				return !!e()
			} catch (t) {
				return !0
			}
		},
		R = !L((function() {
			return 7 != Object.defineProperty({}, 1, {
				get: function() {
					return 7
				}
			})[1]
		})),
		b = {}.propertyIsEnumerable,
		w = Object.getOwnPropertyDescriptor,
		P = {
			f: w && !b.call({
				1: 2
			}, 1) ? function(e) {
				var t = w(this, e);
				return !!t && t.enumerable
			} : b
		},
		G = function(e, t) {
			return {
				enumerable: !(1 & e),
				configurable: !(2 & e),
				writable: !(4 & e),
				value: t
			}
		},
		U = {}.toString,
		F = function(e) {
			return U.call(e).slice(8, -1)
		},
		q = "".split,
		x = L((function() {
			return !Object("z").propertyIsEnumerable(0)
		})) ? function(e) {
			return "String" == F(e) ? q.call(e, "") : Object(e)
		} : Object,
		V = function(e) {
			if (null == e) throw TypeError("Can't call method on " + e);
			return e
		},
		K = function(e) {
			return x(V(e))
		},
		B = function(e) {
			return "object" == typeof e ? null !== e : "function" == typeof e
		},
		H = function(e) {
			return "function" == typeof e ? e : void 0
		},
		j = function(e, t) {
			return arguments.length < 2 ? H(O[e]) : O[e] && O[e][t]
		},
		$ = j("navigator", "userAgent") || "",
		Y = O.process,
		z = O.Deno,
		W = Y && Y.versions || z && z.version,
		J = W && W.v8;
	J ? k = (A = J.split("."))[0] < 4 ? 1 : A[0] + A[1] : $ && (!(A = $.match(/Edge\/(\d+)/)) || A[1] >= 74) &&
		(A = $.match(/Chrome\/(\d+)/)) && (k = A[1]);
	var X = k && +k,
		Q = !!Object.getOwnPropertySymbols && !L((function() {
			var e = Symbol();
			return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && X && X < 41
		})),
		Z = Q && !Symbol.sham && "symbol" == typeof Symbol.iterator,
		ee = Z ? function(e) {
			return "symbol" == typeof e
		} : function(e) {
			var t = j("Symbol");
			return "function" == typeof t && Object(e) instanceof t
		},
		te = function(e, t) {
			try {
				Object.defineProperty(O, e, {
					value: t,
					configurable: !0,
					writable: !0
				})
			} catch (n) {
				O[e] = t
			}
			return t
		},
		ne = O["__core-js_shared__"] || te("__core-js_shared__", {}),
		oe = C((function(e) {
			(e.exports = function(e, t) {
				return ne[e] || (ne[e] = void 0 !== t ? t : {})
			})("versions", []).push({
				version: "3.16.1",
				mode: "global",
				copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
			})
		})),
		re = function(e) {
			return Object(V(e))
		},
		ae = {}.hasOwnProperty,
		se = Object.hasOwn || function(e, t) {
			return ae.call(re(e), t)
		},
		ie = 0,
		ue = Math.random(),
		ce = function(e) {
			return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++ie + ue).toString(36)
		},
		le = oe("wks"),
		pe = O.Symbol,
		de = Z ? pe : pe && pe.withoutSetter || ce,
		ge = function(e) {
			return se(le, e) && (Q || "string" == typeof le[e]) || (Q && se(pe, e) ? le[e] = pe[e] : le[e] = de(
				"Symbol." + e)), le[e]
		},
		he = ge("toPrimitive"),
		fe = function(e, t) {
			if (!B(e) || ee(e)) return e;
			var n, o = e[he];
			if (void 0 !== o) {
				if (void 0 === t && (t = "default"), n = o.call(e, t), !B(n) || ee(n)) return n;
				throw TypeError("Can't convert object to primitive value")
			}
			return void 0 === t && (t = "number"),
				function(e, t) {
					var n, o;
					if ("string" === t && "function" == typeof(n = e.toString) && !B(o = n.call(e))) return o;
					if ("function" == typeof(n = e.valueOf) && !B(o = n.call(e))) return o;
					if ("string" !== t && "function" == typeof(n = e.toString) && !B(o = n.call(e))) return o;
					throw TypeError("Can't convert object to primitive value")
				}(e, t)
		},
		_e = function(e) {
			var t = fe(e, "string");
			return ee(t) ? t : String(t)
		},
		me = O.document,
		ve = B(me) && B(me.createElement),
		Me = function(e) {
			return ve ? me.createElement(e) : {}
		},
		ye = !R && !L((function() {
			return 7 != Object.defineProperty(Me("div"), "a", {
				get: function() {
					return 7
				}
			}).a
		})),
		Ie = Object.getOwnPropertyDescriptor,
		Te = {
			f: R ? Ie : function(e, t) {
				if (e = K(e), t = _e(t), ye) try {
					return Ie(e, t)
				} catch (n) {}
				if (se(e, t)) return G(!P.f.call(e, t), e[t])
			}
		},
		Se = function(e) {
			if (!B(e)) throw TypeError(String(e) + " is not an object");
			return e
		},
		De = Object.defineProperty,
		Ee = {
			f: R ? De : function(e, t, n) {
				if (Se(e), t = _e(t), Se(n), ye) try {
					return De(e, t, n)
				} catch (o) {}
				if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
				return "value" in n && (e[t] = n.value), e
			}
		},
		Ce = R ? function(e, t, n) {
			return Ee.f(e, t, G(1, n))
		} : function(e, t, n) {
			return e[t] = n, e
		},
		Ae = Function.toString;
	"function" != typeof ne.inspectSource && (ne.inspectSource = function(e) {
		return Ae.call(e)
	});
	var ke, Ne, Oe, Le = ne.inspectSource,
		Re = O.WeakMap,
		be = "function" == typeof Re && /native code/.test(Le(Re)),
		we = oe("keys"),
		Pe = function(e) {
			return we[e] || (we[e] = ce(e))
		},
		Ge = {},
		Ue = O.WeakMap;
	if (be || ne.state) {
		var Fe = ne.state || (ne.state = new Ue),
			qe = Fe.get,
			xe = Fe.has,
			Ve = Fe.set;
		ke = function(e, t) {
			if (xe.call(Fe, e)) throw new TypeError("Object already initialized");
			return t.facade = e, Ve.call(Fe, e, t), t
		}, Ne = function(e) {
			return qe.call(Fe, e) || {}
		}, Oe = function(e) {
			return xe.call(Fe, e)
		}
	} else {
		var Ke = Pe("state");
		Ge[Ke] = !0, ke = function(e, t) {
			if (se(e, Ke)) throw new TypeError("Object already initialized");
			return t.facade = e, Ce(e, Ke, t), t
		}, Ne = function(e) {
			return se(e, Ke) ? e[Ke] : {}
		}, Oe = function(e) {
			return se(e, Ke)
		}
	}
	var Be = {
			set: ke,
			get: Ne,
			has: Oe,
			enforce: function(e) {
				return Oe(e) ? Ne(e) : ke(e, {})
			},
			getterFor: function(e) {
				return function(t) {
					var n;
					if (!B(t) || (n = Ne(t)).type !== e) throw TypeError("Incompatible receiver, " + e +
						" required");
					return n
				}
			}
		},
		He = C((function(e) {
			var t = Be.get,
				n = Be.enforce,
				o = String(String).split("String");
			(e.exports = function(e, t, r, a) {
				var s, i = !!a && !!a.unsafe,
					u = !!a && !!a.enumerable,
					c = !!a && !!a.noTargetGet;
				"function" == typeof r && ("string" != typeof t || se(r, "name") || Ce(r, "name",
						t), (s = n(r)).source || (s.source = o.join("string" == typeof t ? t : ""))
						), e !== O ? (i ? !c && e[t] && (u = !0) : delete e[t], u ? e[t] = r : Ce(e,
						t, r)) : u ? e[t] = r : te(t, r)
			})(Function.prototype, "toString", (function() {
				return "function" == typeof this && t(this).source || Le(this)
			}))
		})),
		je = Math.ceil,
		$e = Math.floor,
		Ye = function(e) {
			return isNaN(e = +e) ? 0 : (e > 0 ? $e : je)(e)
		},
		ze = Math.min,
		We = function(e) {
			return e > 0 ? ze(Ye(e), 9007199254740991) : 0
		},
		Je = Math.max,
		Xe = Math.min,
		Qe = function(e, t) {
			var n = Ye(e);
			return n < 0 ? Je(n + t, 0) : Xe(n, t)
		},
		Ze = function(e) {
			return function(t, n, o) {
				var r, a = K(t),
					s = We(a.length),
					i = Qe(o, s);
				if (e && n != n) {
					for (; s > i;)
						if ((r = a[i++]) != r) return !0
				} else
					for (; s > i; i++)
						if ((e || i in a) && a[i] === n) return e || i || 0;
				return !e && -1
			}
		},
		et = {
			includes: Ze(!0),
			indexOf: Ze(!1)
		},
		nt = et.indexOf,
		ot = function(e, t) {
			var n, o = K(e),
				r = 0,
				a = [];
			for (n in o) !se(Ge, n) && se(o, n) && a.push(n);
			for (; t.length > r;) se(o, n = t[r++]) && (~nt(a, n) || a.push(n));
			return a
		},
		rt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString",
			"toString", "valueOf"
		],
		at = rt.concat("length", "prototype"),
		st = {
			f: Object.getOwnPropertyNames || function(e) {
				return ot(e, at)
			}
		},
		it = {
			f: Object.getOwnPropertySymbols
		},
		ut = j("Reflect", "ownKeys") || function(e) {
			var t = st.f(Se(e)),
				n = it.f;
			return n ? t.concat(n(e)) : t
		},
		ct = function(e, t) {
			for (var n = ut(t), o = Ee.f, r = Te.f, a = 0; a < n.length; a++) {
				var s = n[a];
				se(e, s) || o(e, s, r(t, s))
			}
		},
		lt = /#|\.prototype\./,
		pt = function(e, t) {
			var n = gt[dt(e)];
			return n == ft || n != ht && ("function" == typeof t ? L(t) : !!t)
		},
		dt = pt.normalize = function(e) {
			return String(e).replace(lt, ".").toLowerCase()
		},
		gt = pt.data = {},
		ht = pt.NATIVE = "N",
		ft = pt.POLYFILL = "P",
		_t = pt,
		mt = Te.f,
		vt = function(e, t) {
			var n, o, r, a, s, i = e.target,
				u = e.global,
				c = e.stat;
			if (n = u ? O : c ? O[i] || te(i, {}) : (O[i] || {}).prototype)
				for (o in t) {
					if (a = t[o], r = e.noTargetGet ? (s = mt(n, o)) && s.value : n[o], !_t(u ? o : i + (c ?
							"." : "#") + o, e.forced) && void 0 !== r) {
						if (typeof a == typeof r) continue;
						ct(a, r)
					}(e.sham || r && r.sham) && Ce(a, "sham", !0), He(n, o, a, e)
				}
		},
		Mt = function(e) {
			if (ee(e)) throw TypeError("Cannot convert a Symbol value to a string");
			return String(e)
		},
		yt = "\t\n\v\f\r                　\u2028\u2029\ufeff",
		It = "[" + yt + "]",
		Tt = RegExp("^" + It + It + "*"),
		St = RegExp(It + It + "*$"),
		Dt = function(e) {
			return function(t) {
				var n = Mt(V(t));
				return 1 & e && (n = n.replace(Tt, "")), 2 & e && (n = n.replace(St, "")), n
			}
		},
		Et = {
			start: Dt(1),
			end: Dt(2),
			trim: Dt(3)
		},
		Ct = Et.trim,
		At = O.parseInt,
		kt = /^[+-]?0[Xx]/,
		Nt = 8 !== At(yt + "08") || 22 !== At(yt + "0x16") ? function(e, t) {
			var n = Ct(Mt(e));
			return At(n, t >>> 0 || (kt.test(n) ? 16 : 10))
		} : At;
	vt({
		global: !0,
		forced: parseInt != Nt
	}, {
		parseInt: Nt
	});
	var Ot, Lt = Object.keys || function(e) {
			return ot(e, rt)
		},
		Rt = R ? Object.defineProperties : function(e, t) {
			Se(e);
			for (var n, o = Lt(t), r = o.length, a = 0; r > a;) Ee.f(e, n = o[a++], t[n]);
			return e
		},
		bt = j("document", "documentElement"),
		wt = Pe("IE_PROTO"),
		Pt = function() {},
		Gt = function(e) {
			return "<script>" + e + "<\/script>"
		},
		Ut = function(e) {
			e.write(Gt("")), e.close();
			var t = e.parentWindow.Object;
			return e = null, t
		},
		Ft = function() {
			try {
				Ot = new ActiveXObject("htmlfile")
			} catch (t) {}
			Ft = document.domain && Ot ? Ut(Ot) : function() {
				var e, t = Me("iframe");
				if (t.style) return t.style.display = "none", bt.appendChild(t), t.src = String(
					"javascript:"), (e = t.contentWindow.document).open(), e.write(Gt(
					"document.F=Object")), e.close(), e.F
			}() || Ut(Ot);
			for (var e = rt.length; e--;) delete Ft.prototype[rt[e]];
			return Ft()
		};
	Ge[wt] = !0;
	var qt = Object.create || function(e, t) {
		var n;
		return null !== e ? (Pt.prototype = Se(e), n = new Pt, Pt.prototype = null, n[wt] = e) : n = Ft(),
			void 0 === t ? n : Rt(n, t)
	};
	vt({
		target: "Object",
		stat: !0,
		sham: !R
	}, {
		create: qt
	});
	var xt = function(e) {
			if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
			return e
		},
		Vt = function(e, t, n) {
			if (xt(e), void 0 === t) return e;
			switch (n) {
				case 0:
					return function() {
						return e.call(t)
					};
				case 1:
					return function(n) {
						return e.call(t, n)
					};
				case 2:
					return function(n, o) {
						return e.call(t, n, o)
					};
				case 3:
					return function(n, o, r) {
						return e.call(t, n, o, r)
					}
			}
			return function() {
				return e.apply(t, arguments)
			}
		},
		Kt = Array.isArray || function(e) {
			return "Array" == F(e)
		},
		Bt = ge("species"),
		Ht = function(e, t) {
			return new(function(e) {
				var t;
				return Kt(e) && ("function" != typeof(t = e.constructor) || t !== Array && !Kt(t
						.prototype) ? B(t) && null === (t = t[Bt]) && (t = void 0) : t = void 0),
					void 0 === t ? Array : t
			}(e))(0 === t ? 0 : t)
		},
		jt = [].push,
		$t = function(e) {
			var t = 1 == e,
				n = 2 == e,
				o = 3 == e,
				r = 4 == e,
				a = 6 == e,
				s = 7 == e,
				i = 5 == e || a;
			return function(u, c, l, p) {
				for (var d, g, h = re(u), f = x(h), _ = Vt(c, l, 3), m = We(f.length), v = 0, M = p || Ht,
						y = t ? M(u, m) : n || s ? M(u, 0) : void 0; m > v; v++)
					if ((i || v in f) && (g = _(d = f[v], v, h), e))
						if (t) y[v] = g;
						else if (g) switch (e) {
					case 3:
						return !0;
					case 5:
						return d;
					case 6:
						return v;
					case 2:
						jt.call(y, d)
				} else switch (e) {
					case 4:
						return !1;
					case 7:
						jt.call(y, d)
				}
				return a ? -1 : o || r ? r : y
			}
		},
		Yt = {
			forEach: $t(0),
			map: $t(1),
			filter: $t(2),
			some: $t(3),
			every: $t(4),
			find: $t(5),
			findIndex: $t(6),
			filterReject: $t(7)
		},
		zt = function(e, t) {
			var n = [][e];
			return !!n && L((function() {
				n.call(null, t || function() {
					throw 1
				}, 1)
			}))
		},
		Wt = Yt.forEach,
		Jt = zt("forEach") ? [].forEach : function(e) {
			return Wt(this, e, arguments.length > 1 ? arguments[1] : void 0)
		};
	vt({
		target: "Array",
		proto: !0,
		forced: [].forEach != Jt
	}, {
		forEach: Jt
	});
	var Xt = {
		CSSRuleList: 0,
		CSSStyleDeclaration: 0,
		CSSValueList: 0,
		ClientRectList: 0,
		DOMRectList: 0,
		DOMStringList: 0,
		DOMTokenList: 1,
		DataTransferItemList: 0,
		FileList: 0,
		HTMLAllCollection: 0,
		HTMLCollection: 0,
		HTMLFormElement: 0,
		HTMLSelectElement: 0,
		MediaList: 0,
		MimeTypeArray: 0,
		NamedNodeMap: 0,
		NodeList: 1,
		PaintRequestList: 0,
		Plugin: 0,
		PluginArray: 0,
		SVGLengthList: 0,
		SVGNumberList: 0,
		SVGPathSegList: 0,
		SVGPointList: 0,
		SVGStringList: 0,
		SVGTransformList: 0,
		SourceBufferList: 0,
		StyleSheetList: 0,
		TextTrackCueList: 0,
		TextTrackList: 0,
		TouchList: 0
	};
	for (var Qt in Xt) {
		var Zt = O[Qt],
			en = Zt && Zt.prototype;
		if (en && en.forEach !== Jt) try {
			Ce(en, "forEach", Jt)
		} catch (_M) {
			en.forEach = Jt
		}
	}
	var tn = L((function() {
		Lt(1)
	}));
	vt({
		target: "Object",
		stat: !0,
		forced: tn
	}, {
		keys: function(e) {
			return Lt(re(e))
		}
	});
	var nn = function(e) {
			var t = e.return;
			if (void 0 !== t) return Se(t.call(e)).value
		},
		on = function(e, t, n, o) {
			try {
				return o ? t(Se(n)[0], n[1]) : t(n)
			} catch (_M) {
				throw nn(e), _M
			}
		},
		rn = {},
		an = ge("iterator"),
		sn = Array.prototype,
		un = function(e) {
			return void 0 !== e && (rn.Array === e || sn[an] === e)
		},
		cn = function(e, t, n) {
			var o = _e(t);
			o in e ? Ee.f(e, o, G(0, n)) : e[o] = n
		},
		ln = {};
	ln[ge("toStringTag")] = "z";
	var pn = "[object z]" === String(ln),
		dn = ge("toStringTag"),
		gn = "Arguments" == F(function() {
			return arguments
		}()),
		hn = pn ? F : function(e) {
			var t, n, o;
			return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
					try {
						return e[t]
					} catch (_M) {}
				}(t = Object(e), dn)) ? n : gn ? F(t) : "Object" == (o = F(t)) && "function" == typeof t
				.callee ? "Arguments" : o
		},
		fn = ge("iterator"),
		_n = function(e) {
			if (null != e) return e[fn] || e["@@iterator"] || rn[hn(e)]
		},
		mn = function(e) {
			var t, n, o, r, a, s, i = re(e),
				u = "function" == typeof this ? this : Array,
				c = arguments.length,
				l = c > 1 ? arguments[1] : void 0,
				p = void 0 !== l,
				d = _n(i),
				g = 0;
			if (p && (l = Vt(l, c > 2 ? arguments[2] : void 0, 2)), null == d || u == Array && un(d))
				for (n = new u(t = We(i.length)); t > g; g++) s = p ? l(i[g], g) : i[g], cn(n, g, s);
			else
				for (a = (r = d.call(i)).next, n = new u; !(o = a.call(r)).done; g++) s = p ? on(r, l, [o.value,
					g
				], !0) : o.value, cn(n, g, s);
			return n.length = g, n
		},
		vn = ge("iterator"),
		Mn = !1;
	try {
		var yn = 0,
			In = {
				next: function() {
					return {
						done: !!yn++
					}
				},
				return: function() {
					Mn = !0
				}
			};
		In[vn] = function() {
			return this
		}, Array.from(In, (function() {
			throw 2
		}))
	} catch (_M) {}
	var Tn = function(e, t) {
			if (!t && !Mn) return !1;
			var n = !1;
			try {
				var o = {};
				o[vn] = function() {
					return {
						next: function() {
							return {
								done: n = !0
							}
						}
					}
				}, e(o)
			} catch (_M) {}
			return n
		},
		Sn = !Tn((function(e) {
			Array.from(e)
		}));
	vt({
		target: "Array",
		stat: !0,
		forced: Sn
	}, {
		from: mn
	});
	var Dn, En, Cn, An = function(e) {
			return function(t, n) {
				var o, r, a = Mt(V(t)),
					s = Ye(n),
					i = a.length;
				return s < 0 || s >= i ? e ? "" : void 0 : (o = a.charCodeAt(s)) < 55296 || o > 56319 || s +
					1 === i || (r = a.charCodeAt(s + 1)) < 56320 || r > 57343 ? e ? a.charAt(s) : o : e ? a
					.slice(s, s + 2) : r - 56320 + (o - 55296 << 10) + 65536
			}
		},
		kn = {
			codeAt: An(!1),
			charAt: An(!0)
		},
		Nn = !L((function() {
			function e() {}
			return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
		})),
		On = Pe("IE_PROTO"),
		Ln = Object.prototype,
		Rn = Nn ? Object.getPrototypeOf : function(e) {
			return e = re(e), se(e, On) ? e[On] : "function" == typeof e.constructor && e instanceof e
				.constructor ? e.constructor.prototype : e instanceof Object ? Ln : null
		},
		bn = ge("iterator"),
		wn = !1;
	[].keys && ("next" in (Cn = [].keys()) ? (En = Rn(Rn(Cn))) !== Object.prototype && (Dn = En) : wn = !0), (
		null == Dn || L((function() {
			var e = {};
			return Dn[bn].call(e) !== e
		}))) && (Dn = {}), se(Dn, bn) || Ce(Dn, bn, (function() {
		return this
	}));
	var Pn = {
			IteratorPrototype: Dn,
			BUGGY_SAFARI_ITERATORS: wn
		},
		Gn = Ee.f,
		Un = ge("toStringTag"),
		Fn = function(e, t, n) {
			e && !se(e = n ? e : e.prototype, Un) && Gn(e, Un, {
				configurable: !0,
				value: t
			})
		},
		qn = Pn.IteratorPrototype,
		xn = function() {
			return this
		},
		Vn = function(e, t, n) {
			var o = t + " Iterator";
			return e.prototype = qt(qn, {
				next: G(1, n)
			}), Fn(e, o, !1), rn[o] = xn, e
		},
		Kn = Object.setPrototypeOf || ("__proto__" in {} ? function() {
			var e, t = !1,
				n = {};
			try {
				(e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t =
					n instanceof Array
			} catch (_M) {}
			return function(n, o) {
				return Se(n),
					function(e) {
						if (!B(e) && null !== e) throw TypeError("Can't set " + String(e) +
							" as a prototype")
					}(o), t ? e.call(n, o) : n.__proto__ = o, n
			}
		}() : void 0),
		Bn = Pn.IteratorPrototype,
		Hn = Pn.BUGGY_SAFARI_ITERATORS,
		jn = ge("iterator"),
		$n = function() {
			return this
		},
		Yn = function(e, t, n, o, r, a, s) {
			Vn(n, t, o);
			var i, u, c, l = function(e) {
					if (e === r && f) return f;
					if (!Hn && e in g) return g[e];
					switch (e) {
						case "keys":
						case "values":
						case "entries":
							return function() {
								return new n(this, e)
							}
					}
					return function() {
						return new n(this)
					}
				},
				p = t + " Iterator",
				d = !1,
				g = e.prototype,
				h = g[jn] || g["@@iterator"] || r && g[r],
				f = !Hn && h || l(r),
				_ = "Array" == t && g.entries || h;
			if (_ && (i = Rn(_.call(new e)), Bn !== Object.prototype && i.next && (Rn(i) !== Bn && (Kn ? Kn(i,
					Bn) : "function" != typeof i[jn] && Ce(i, jn, $n)), Fn(i, p, !0))), "values" == r && h &&
				"values" !== h.name && (d = !0, f = function() {
					return h.call(this)
				}), g[jn] !== f && Ce(g, jn, f), rn[t] = f, r)
				if (u = {
						values: l("values"),
						keys: a ? f : l("keys"),
						entries: l("entries")
					}, s)
					for (c in u)(Hn || d || !(c in g)) && He(g, c, u[c]);
				else vt({
					target: t,
					proto: !0,
					forced: Hn || d
				}, u);
			return u
		},
		zn = kn.charAt,
		Wn = Be.set,
		Jn = Be.getterFor("String Iterator");
	Yn(String, "String", (function(e) {
		Wn(this, {
			type: "String Iterator",
			string: Mt(e),
			index: 0
		})
	}), (function() {
		var e, t = Jn(this),
			n = t.string,
			o = t.index;
		return o >= n.length ? {
			value: void 0,
			done: !0
		} : (e = zn(n, o), t.index += e.length, {
			value: e,
			done: !1
		})
	}));
	var Xn = ge("species"),
		Qn = function(e) {
			return X >= 51 || !L((function() {
				var t = [];
				return (t.constructor = {})[Xn] = function() {
					return {
						foo: 1
					}
				}, 1 !== t[e](Boolean).foo
			}))
		},
		Zn = ge("isConcatSpreadable"),
		eo = X >= 51 || !L((function() {
			var e = [];
			return e[Zn] = !1, e.concat()[0] !== e
		})),
		to = Qn("concat"),
		no = function(e) {
			if (!B(e)) return !1;
			var t = e[Zn];
			return void 0 !== t ? !!t : Kt(e)
		};
	vt({
		target: "Array",
		proto: !0,
		forced: !eo || !to
	}, {
		concat: function(e) {
			var t, n, o, r, a, s = re(this),
				i = Ht(s, 0),
				u = 0;
			for (t = -1, o = arguments.length; t < o; t++)
				if (no(a = -1 === t ? s : arguments[t])) {
					if (u + (r = We(a.length)) > 9007199254740991) throw TypeError(
						"Maximum allowed index exceeded");
					for (n = 0; n < r; n++, u++) n in a && cn(i, u, a[n])
				} else {
					if (u >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
					cn(i, u++, a)
				} return i.length = u, i
		}
	});
	var oo = {
			SDK_READY: "sdkStateReady",
			SDK_NOT_READY: "sdkStateNotReady",
			SDK_DESTROY: "sdkDestroy",
			MESSAGE_RECEIVED: "onMessageReceived",
			MESSAGE_MODIFIED: "onMessageModified",
			MESSAGE_REVOKED: "onMessageRevoked",
			MESSAGE_READ_BY_PEER: "onMessageReadByPeer",
			CONVERSATION_LIST_UPDATED: "onConversationListUpdated",
			GROUP_LIST_UPDATED: "onGroupListUpdated",
			GROUP_SYSTEM_NOTICE_RECEIVED: "receiveGroupSystemNotice",
			GROUP_ATTRIBUTES_UPDATED: "groupAttributesUpdated",
			PROFILE_UPDATED: "onProfileUpdated",
			BLACKLIST_UPDATED: "blacklistUpdated",
			FRIEND_LIST_UPDATED: "onFriendListUpdated",
			FRIEND_GROUP_LIST_UPDATED: "onFriendGroupListUpdated",
			FRIEND_APPLICATION_LIST_UPDATED: "onFriendApplicationListUpdated",
			KICKED_OUT: "kickedOut",
			ERROR: "error",
			NET_STATE_CHANGE: "netStateChange",
			SDK_RELOAD: "sdkReload"
		},
		ro = {
			MSG_TEXT: "TIMTextElem",
			MSG_IMAGE: "TIMImageElem",
			MSG_SOUND: "TIMSoundElem",
			MSG_AUDIO: "TIMSoundElem",
			MSG_FILE: "TIMFileElem",
			MSG_FACE: "TIMFaceElem",
			MSG_VIDEO: "TIMVideoFileElem",
			MSG_GEO: "TIMLocationElem",
			MSG_GRP_TIP: "TIMGroupTipElem",
			MSG_GRP_SYS_NOTICE: "TIMGroupSystemNoticeElem",
			MSG_CUSTOM: "TIMCustomElem",
			MSG_MERGER: "TIMRelayElem",
			MSG_PRIORITY_HIGH: "High",
			MSG_PRIORITY_NORMAL: "Normal",
			MSG_PRIORITY_LOW: "Low",
			MSG_PRIORITY_LOWEST: "Lowest",
			CONV_C2C: "C2C",
			CONV_GROUP: "GROUP",
			CONV_SYSTEM: "@TIM#SYSTEM",
			CONV_AT_ME: 1,
			CONV_AT_ALL: 2,
			CONV_AT_ALL_AT_ME: 3,
			GRP_PRIVATE: "Private",
			GRP_WORK: "Private",
			GRP_PUBLIC: "Public",
			GRP_CHATROOM: "ChatRoom",
			GRP_MEETING: "ChatRoom",
			GRP_AVCHATROOM: "AVChatRoom",
			GRP_MBR_ROLE_OWNER: "Owner",
			GRP_MBR_ROLE_ADMIN: "Admin",
			GRP_MBR_ROLE_MEMBER: "Member",
			GRP_TIP_MBR_JOIN: 1,
			GRP_TIP_MBR_QUIT: 2,
			GRP_TIP_MBR_KICKED_OUT: 3,
			GRP_TIP_MBR_SET_ADMIN: 4,
			GRP_TIP_MBR_CANCELED_ADMIN: 5,
			GRP_TIP_GRP_PROFILE_UPDATED: 6,
			GRP_TIP_MBR_PROFILE_UPDATED: 7,
			MSG_REMIND_ACPT_AND_NOTE: "AcceptAndNotify",
			MSG_REMIND_ACPT_NOT_NOTE: "AcceptNotNotify",
			MSG_REMIND_DISCARD: "Discard",
			GENDER_UNKNOWN: "Gender_Type_Unknown",
			GENDER_FEMALE: "Gender_Type_Female",
			GENDER_MALE: "Gender_Type_Male",
			KICKED_OUT_MULT_ACCOUNT: "multipleAccount",
			KICKED_OUT_MULT_DEVICE: "multipleDevice",
			KICKED_OUT_USERSIG_EXPIRED: "userSigExpired",
			ALLOW_TYPE_ALLOW_ANY: "AllowType_Type_AllowAny",
			ALLOW_TYPE_NEED_CONFIRM: "AllowType_Type_NeedConfirm",
			ALLOW_TYPE_DENY_ANY: "AllowType_Type_DenyAny",
			FORBID_TYPE_NONE: "AdminForbid_Type_None",
			FORBID_TYPE_SEND_OUT: "AdminForbid_Type_SendOut",
			JOIN_OPTIONS_FREE_ACCESS: "FreeAccess",
			JOIN_OPTIONS_NEED_PERMISSION: "NeedPermission",
			JOIN_OPTIONS_DISABLE_APPLY: "DisableApply",
			JOIN_STATUS_SUCCESS: "JoinedSuccess",
			JOIN_STATUS_ALREADY_IN_GROUP: "AlreadyInGroup",
			JOIN_STATUS_WAIT_APPROVAL: "WaitAdminApproval",
			GRP_PROFILE_OWNER_ID: "ownerID",
			GRP_PROFILE_CREATE_TIME: "createTime",
			GRP_PROFILE_LAST_INFO_TIME: "lastInfoTime",
			GRP_PROFILE_MEMBER_NUM: "memberNum",
			GRP_PROFILE_MAX_MEMBER_NUM: "maxMemberNum",
			GRP_PROFILE_JOIN_OPTION: "joinOption",
			GRP_PROFILE_INTRODUCTION: "introduction",
			GRP_PROFILE_NOTIFICATION: "notification",
			GRP_PROFILE_MUTE_ALL_MBRS: "muteAllMembers",
			SNS_ADD_TYPE_SINGLE: "Add_Type_Single",
			SNS_ADD_TYPE_BOTH: "Add_Type_Both",
			SNS_DELETE_TYPE_SINGLE: "Delete_Type_Single",
			SNS_DELETE_TYPE_BOTH: "Delete_Type_Both",
			SNS_APPLICATION_TYPE_BOTH: "Pendency_Type_Both",
			SNS_APPLICATION_SENT_TO_ME: "Pendency_Type_ComeIn",
			SNS_APPLICATION_SENT_BY_ME: "Pendency_Type_SendOut",
			SNS_APPLICATION_AGREE: "Response_Action_Agree",
			SNS_APPLICATION_AGREE_AND_ADD: "Response_Action_AgreeAndAdd",
			SNS_CHECK_TYPE_BOTH: "CheckResult_Type_Both",
			SNS_CHECK_TYPE_SINGLE: "CheckResult_Type_Single",
			SNS_TYPE_NO_RELATION: "CheckResult_Type_NoRelation",
			SNS_TYPE_A_WITH_B: "CheckResult_Type_AWithB",
			SNS_TYPE_B_WITH_A: "CheckResult_Type_BWithA",
			SNS_TYPE_BOTH_WAY: "CheckResult_Type_BothWay",
			NET_STATE_CONNECTED: "connected",
			NET_STATE_CONNECTING: "connecting",
			NET_STATE_DISCONNECTED: "disconnected",
			MSG_AT_ALL: "__kImSDK_MesssageAtALL__"
		},
		ao = [].slice,
		so = {},
		io = function(e, t, n) {
			if (!(t in so)) {
				for (var o = [], r = 0; r < t; r++) o[r] = "a[" + r + "]";
				so[t] = Function("C,a", "return new C(" + o.join(",") + ")")
			}
			return so[t](e, n)
		},
		uo = Function.bind || function(e) {
			var t = xt(this),
				n = ao.call(arguments, 1),
				o = function() {
					var r = n.concat(ao.call(arguments));
					return this instanceof o ? io(t, r.length, r) : t.apply(e, r)
				};
			return B(t.prototype) && (o.prototype = t.prototype), o
		};
	vt({
		target: "Function",
		proto: !0
	}, {
		bind: uo
	});
	var co = Yt.map,
		lo = Qn("map");
	vt({
		target: "Array",
		proto: !0,
		forced: !lo
	}, {
		map: function(e) {
			return co(this, e, arguments.length > 1 ? arguments[1] : void 0)
		}
	});
	var po = function() {
			function e() {
				o(this, e), this.cache = [], this.options = null
			}
			return a(e, [{
				key: "use",
				value: function(e) {
					if ("function" != typeof e) throw "middleware must be a function";
					return this.cache.push(e), this
				}
			}, {
				key: "next",
				value: function(e) {
					if (this.middlewares && this.middlewares.length > 0) return this.middlewares
						.shift().call(this, this.options, this.next.bind(this))
				}
			}, {
				key: "run",
				value: function(e) {
					return this.middlewares = this.cache.map((function(e) {
						return e
					})), this.options = e, this.next()
				}
			}]), e
		}(),
		go = Ee.f,
		ho = Function.prototype,
		fo = ho.toString,
		_o = /^\s*function ([^ (]*)/;
	R && !("name" in ho) && go(ho, "name", {
		configurable: !0,
		get: function() {
			try {
				return fo.call(this).match(_o)[1]
			} catch (_M) {
				return ""
			}
		}
	});
	var mo = C((function(e, t) {
		var n, o, r, a, s, i, u, c, l, p, d, g, h, f, _, m, v, M;
		e.exports = (n = "function" == typeof Promise, o = "object" == typeof self ? self : E, r =
			"undefined" != typeof Symbol, a = "undefined" != typeof Map, s = "undefined" !=
			typeof Set, i = "undefined" != typeof WeakMap, u = "undefined" != typeof WeakSet,
			c = "undefined" != typeof DataView, l = r && void 0 !== Symbol.iterator, p = r &&
			void 0 !== Symbol.toStringTag, d = s && "function" == typeof Set.prototype.entries,
			g = a && "function" == typeof Map.prototype.entries, h = d && Object.getPrototypeOf(
				(new Set).entries()), f = g && Object.getPrototypeOf((new Map).entries()), _ =
			l && "function" == typeof Array.prototype[Symbol.iterator], m = _ && Object
			.getPrototypeOf([][Symbol.iterator]()), v = l && "function" == typeof String
			.prototype[Symbol.iterator], M = v && Object.getPrototypeOf("" [Symbol.iterator]()),
			function(e) {
				var t = typeof e;
				if ("object" !== t) return t;
				if (null === e) return "null";
				if (e === o) return "global";
				if (Array.isArray(e) && (!1 === p || !(Symbol.toStringTag in e)))
			return "Array";
				if ("object" == typeof window && null !== window) {
					if ("object" == typeof window.location && e === window.location)
					return "Location";
					if ("object" == typeof window.document && e === window.document)
					return "Document";
					if ("object" == typeof window.navigator) {
						if ("object" == typeof window.navigator.mimeTypes && e === window
							.navigator.mimeTypes) return "MimeTypeArray";
						if ("object" == typeof window.navigator.plugins && e === window
							.navigator.plugins) return "PluginArray"
					}
					if (("function" == typeof window.HTMLElement || "object" == typeof window
							.HTMLElement) && e instanceof window.HTMLElement) {
						if ("BLOCKQUOTE" === e.tagName) return "HTMLQuoteElement";
						if ("TD" === e.tagName) return "HTMLTableDataCellElement";
						if ("TH" === e.tagName) return "HTMLTableHeaderCellElement"
					}
				}
				var r = p && e[Symbol.toStringTag];
				if ("string" == typeof r) return r;
				var l = Object.getPrototypeOf(e);
				return l === RegExp.prototype ? "RegExp" : l === Date.prototype ? "Date" : n &&
					l === Promise.prototype ? "Promise" : s && l === Set.prototype ? "Set" :
					a && l === Map.prototype ? "Map" : u && l === WeakSet.prototype ?
					"WeakSet" : i && l === WeakMap.prototype ? "WeakMap" : c && l === DataView
					.prototype ? "DataView" : a && l === f ? "Map Iterator" : s && l === h ?
					"Set Iterator" : _ && l === m ? "Array Iterator" : v && l === M ?
					"String Iterator" : null === l ? "Object" : Object.prototype.toString.call(
						e).slice(8, -1)
			})
	}));
	vt({
		target: "Array",
		stat: !0
	}, {
		isArray: Kt
	});
	var vo = function(e, t, n) {
			var o, r;
			return Kn && "function" == typeof(o = t.constructor) && o !== n && B(r = o.prototype) && r !== n
				.prototype && Kn(e, r), e
		},
		Mo = st.f,
		yo = Te.f,
		Io = Ee.f,
		To = Et.trim,
		So = O.Number,
		Do = So.prototype,
		Eo = "Number" == F(qt(Do)),
		Co = function(e) {
			if (ee(e)) throw TypeError("Cannot convert a Symbol value to a number");
			var t, n, o, r, a, s, i, u, c = fe(e, "number");
			if ("string" == typeof c && c.length > 2)
				if (43 === (t = (c = To(c)).charCodeAt(0)) || 45 === t) {
					if (88 === (n = c.charCodeAt(2)) || 120 === n) return NaN
				} else if (48 === t) {
				switch (c.charCodeAt(1)) {
					case 66:
					case 98:
						o = 2, r = 49;
						break;
					case 79:
					case 111:
						o = 8, r = 55;
						break;
					default:
						return +c
				}
				for (s = (a = c.slice(2)).length, i = 0; i < s; i++)
					if ((u = a.charCodeAt(i)) < 48 || u > r) return NaN;
				return parseInt(a, o)
			}
			return +c
		};
	if (_t("Number", !So(" 0o1") || !So("0b1") || So("+0x1"))) {
		for (var Ao, ko = function(e) {
					var t = arguments.length < 1 ? 0 : e,
						n = this;
					return n instanceof ko && (Eo ? L((function() {
						Do.valueOf.call(n)
					})) : "Number" != F(n)) ? vo(new So(Co(t)), n, ko) : Co(t)
				}, No = R ? Mo(So) :
				"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range"
				.split(","), Oo = 0; No.length > Oo; Oo++) se(So, Ao = No[Oo]) && !se(ko, Ao) && Io(ko, Ao, yo(
			So, Ao));
		ko.prototype = Do, Do.constructor = ko, He(O, "Number", ko)
	}
	var Lo = L((function() {
		Rn(1)
	}));
	vt({
		target: "Object",
		stat: !0,
		forced: Lo,
		sham: !Nn
	}, {
		getPrototypeOf: function(e) {
			return Rn(re(e))
		}
	});
	var Ro = Date.prototype,
		bo = Ro.toString,
		wo = Ro.getTime;
	"Invalid Date" != String(new Date(NaN)) && He(Ro, "toString", (function() {
		var e = wo.call(this);
		return e == e ? bo.call(this) : "Invalid Date"
	}));
	var Po = pn ? {}.toString : function() {
		return "[object " + hn(this) + "]"
	};
	pn || He(Object.prototype, "toString", Po, {
		unsafe: !0
	});
	var Go = function() {
			var e = Se(this),
				t = "";
			return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (
				t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
		},
		Uo = RegExp.prototype,
		Fo = Uo.toString,
		qo = L((function() {
			return "/a/b" != Fo.call({
				source: "a",
				flags: "b"
			})
		})),
		xo = "toString" != Fo.name;
	(qo || xo) && He(RegExp.prototype, "toString", (function() {
		var e = Se(this),
			t = Mt(e.source),
			n = e.flags;
		return "/" + t + "/" + Mt(void 0 === n && e instanceof RegExp && !("flags" in Uo) ? Go.call(
			e) : n)
	}), {
		unsafe: !0
	});
	var Vo, Ko, Bo = function(e, t) {
			return RegExp(e, t)
		},
		Ho = {
			UNSUPPORTED_Y: L((function() {
				var e = Bo("a", "y");
				return e.lastIndex = 2, null != e.exec("abcd")
			})),
			BROKEN_CARET: L((function() {
				var e = Bo("^r", "gy");
				return e.lastIndex = 2, null != e.exec("str")
			}))
		},
		jo = L((function() {
			var e = RegExp(".", "string".charAt(0));
			return !(e.dotAll && e.exec("\n") && "s" === e.flags)
		})),
		$o = L((function() {
			var e = RegExp("(?<a>b)", "string".charAt(5));
			return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
		})),
		Yo = Be.get,
		zo = RegExp.prototype.exec,
		Wo = oe("native-string-replace", String.prototype.replace),
		Jo = zo,
		Xo = (Vo = /a/, Ko = /b*/g, zo.call(Vo, "a"), zo.call(Ko, "a"), 0 !== Vo.lastIndex || 0 !== Ko
			.lastIndex),
		Qo = Ho.UNSUPPORTED_Y || Ho.BROKEN_CARET,
		Zo = void 0 !== /()??/.exec("")[1];
	(Xo || Zo || Qo || jo || $o) && (Jo = function(e) {
		var t, n, o, r, a, s, i, u = this,
			c = Yo(u),
			l = Mt(e),
			p = c.raw;
		if (p) return p.lastIndex = u.lastIndex, t = Jo.call(p, l), u.lastIndex = p.lastIndex, t;
		var d = c.groups,
			g = Qo && u.sticky,
			h = Go.call(u),
			f = u.source,
			_ = 0,
			m = l;
		if (g && (-1 === (h = h.replace("y", "")).indexOf("g") && (h += "g"), m = l.slice(u.lastIndex), u
				.lastIndex > 0 && (!u.multiline || u.multiline && "\n" !== l.charAt(u.lastIndex - 1)) && (
					f = "(?: " + f + ")", m = " " + m, _++), n = new RegExp("^(?:" + f + ")", h)), Zo && (
				n = new RegExp("^" + f + "$(?!\\s)", h)), Xo && (o = u.lastIndex), r = zo.call(g ? n : u,
			m), g ? r ? (r.input = r.input.slice(_), r[0] = r[0].slice(_), r.index = u.lastIndex, u
				.lastIndex += r[0].length) : u.lastIndex = 0 : Xo && r && (u.lastIndex = u.global ? r
				.index + r[0].length : o), Zo && r && r.length > 1 && Wo.call(r[0], n, (function() {
				for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (r[a] =
					void 0)
			})), r && d)
			for (r.groups = s = qt(null), a = 0; a < d.length; a++) s[(i = d[a])[0]] = r[i[1]];
		return r
	});
	var er = Jo;
	vt({
		target: "RegExp",
		proto: !0,
		forced: /./.exec !== er
	}, {
		exec: er
	});
	var tr = ge("species"),
		nr = RegExp.prototype,
		or = function(e, t, n, o) {
			var r = ge(e),
				a = !L((function() {
					var t = {};
					return t[r] = function() {
						return 7
					}, 7 != "" [e](t)
				})),
				s = a && !L((function() {
					var t = !1,
						n = /a/;
					return "split" === e && ((n = {}).constructor = {}, n.constructor[tr] = function() {
						return n
					}, n.flags = "", n[r] = /./ [r]), n.exec = function() {
						return t = !0, null
					}, n[r](""), !t
				}));
			if (!a || !s || n) {
				var i = /./ [r],
					u = t(r, "" [e], (function(e, t, n, o, r) {
						var s = t.exec;
						return s === er || s === nr.exec ? a && !r ? {
							done: !0,
							value: i.call(t, n, o)
						} : {
							done: !0,
							value: e.call(n, t, o)
						} : {
							done: !1
						}
					}));
				He(String.prototype, e, u[0]), He(nr, r, u[1])
			}
			o && Ce(nr[r], "sham", !0)
		},
		rr = kn.charAt,
		ar = function(e, t, n) {
			return t + (n ? rr(e, t).length : 1)
		},
		sr = function(e, t) {
			var n = e.exec;
			if ("function" == typeof n) {
				var o = n.call(e, t);
				if ("object" != typeof o) throw TypeError(
					"RegExp exec method returned something other than an Object or null");
				return o
			}
			if ("RegExp" !== F(e)) throw TypeError("RegExp#exec called on incompatible receiver");
			return er.call(e, t)
		};
	or("match", (function(e, t, n) {
		return [function(t) {
			var n = V(this),
				o = null == t ? void 0 : t[e];
			return void 0 !== o ? o.call(t, n) : new RegExp(t)[e](Mt(n))
		}, function(e) {
			var o = Se(this),
				r = Mt(e),
				a = n(t, o, r);
			if (a.done) return a.value;
			if (!o.global) return sr(o, r);
			var s = o.unicode;
			o.lastIndex = 0;
			for (var i, u = [], c = 0; null !== (i = sr(o, r));) {
				var l = Mt(i[0]);
				u[c] = l, "" === l && (o.lastIndex = ar(r, We(o.lastIndex), s)), c++
			}
			return 0 === c ? null : u
		}]
	})), vt({
		target: "Date",
		stat: !0
	}, {
		now: function() {
			return (new Date).getTime()
		}
	});
	var ir = ge("unscopables"),
		ur = Array.prototype;
	null == ur[ir] && Ee.f(ur, ir, {
		configurable: !0,
		value: qt(null)
	});
	var cr = function(e) {
			ur[ir][e] = !0
		},
		lr = et.includes;
	vt({
		target: "Array",
		proto: !0
	}, {
		includes: function(e) {
			return lr(this, e, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), cr("includes");
	var pr = ge("match"),
		dr = function(e) {
			var t;
			return B(e) && (void 0 !== (t = e[pr]) ? !!t : "RegExp" == F(e))
		},
		gr = function(e) {
			if (dr(e)) throw TypeError("The method doesn't accept regular expressions");
			return e
		},
		hr = ge("match"),
		fr = function(e) {
			var t = /./;
			try {
				"/./" [e](t)
			} catch (n) {
				try {
					return t[hr] = !1, "/./" [e](t)
				} catch (o) {}
			}
			return !1
		};
	vt({
		target: "String",
		proto: !0,
		forced: !fr("includes")
	}, {
		includes: function(e) {
			return !!~Mt(V(this)).indexOf(Mt(gr(e)), arguments.length > 1 ? arguments[1] : void 0)
		}
	});
	var _r = function(e) {
			var t = Mt(V(this)),
				n = "",
				o = Ye(e);
			if (o < 0 || Infinity == o) throw RangeError("Wrong number of repetitions");
			for (; o > 0;
				(o >>>= 1) && (t += t)) 1 & o && (n += t);
			return n
		},
		mr = Math.ceil,
		vr = function(e) {
			return function(t, n, o) {
				var r, a, s = Mt(V(t)),
					i = s.length,
					u = void 0 === o ? " " : Mt(o),
					c = We(n);
				return c <= i || "" == u ? s : ((a = _r.call(u, mr((r = c - i) / u.length))).length > r && (
					a = a.slice(0, r)), e ? s + a : a + s)
			}
		},
		Mr = {
			start: vr(!1),
			end: vr(!0)
		}.start,
		yr = Math.abs,
		Ir = Date.prototype,
		Tr = Ir.getTime,
		Sr = Ir.toISOString,
		Dr = L((function() {
			return "0385-07-25T07:06:39.999Z" != Sr.call(new Date(-50000000000001))
		})) || !L((function() {
			Sr.call(new Date(NaN))
		})) ? function() {
			if (!isFinite(Tr.call(this))) throw RangeError("Invalid time value");
			var e = this.getUTCFullYear(),
				t = this.getUTCMilliseconds(),
				n = e < 0 ? "-" : e > 9999 ? "+" : "";
			return n + Mr(yr(e), n ? 6 : 4, 0) + "-" + Mr(this.getUTCMonth() + 1, 2, 0) + "-" + Mr(this
				.getUTCDate(), 2, 0) + "T" + Mr(this.getUTCHours(), 2, 0) + ":" + Mr(this.getUTCMinutes(),
				2, 0) + ":" + Mr(this.getUTCSeconds(), 2, 0) + "." + Mr(t, 3, 0) + "Z"
		} : Sr;
	vt({
		target: "Date",
		proto: !0,
		forced: Date.prototype.toISOString !== Dr
	}, {
		toISOString: Dr
	});
	var Er = Math.floor,
		Cr = "".replace,
		Ar = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
		kr = /\$([$&'`]|\d{1,2})/g,
		Nr = function(e, t, n, o, r, a) {
			var s = n + e.length,
				i = o.length,
				u = kr;
			return void 0 !== r && (r = re(r), u = Ar), Cr.call(a, u, (function(a, u) {
				var c;
				switch (u.charAt(0)) {
					case "$":
						return "$";
					case "&":
						return e;
					case "`":
						return t.slice(0, n);
					case "'":
						return t.slice(s);
					case "<":
						c = r[u.slice(1, -1)];
						break;
					default:
						var l = +u;
						if (0 === l) return a;
						if (l > i) {
							var p = Er(l / 10);
							return 0 === p ? a : p <= i ? void 0 === o[p - 1] ? u.charAt(1) : o[p -
								1] + u.charAt(1) : a
						}
						c = o[l - 1]
				}
				return void 0 === c ? "" : c
			}))
		},
		Or = ge("replace"),
		Lr = Math.max,
		Rr = Math.min,
		br = "$0" === "a".replace(/./, "$0"),
		wr = !!/./ [Or] && "" === /./ [Or]("a", "$0");
	or("replace", (function(e, t, n) {
		var o = wr ? "$" : "$0";
		return [function(e, n) {
			var o = V(this),
				r = null == e ? void 0 : e[Or];
			return void 0 !== r ? r.call(e, o, n) : t.call(Mt(o), e, n)
		}, function(e, r) {
			var a = Se(this),
				s = Mt(e);
			if ("string" == typeof r && -1 === r.indexOf(o) && -1 === r.indexOf("$<")) {
				var i = n(t, a, s, r);
				if (i.done) return i.value
			}
			var u = "function" == typeof r;
			u || (r = Mt(r));
			var c = a.global;
			if (c) {
				var l = a.unicode;
				a.lastIndex = 0
			}
			for (var p = [];;) {
				var d = sr(a, s);
				if (null === d) break;
				if (p.push(d), !c) break;
				"" === Mt(d[0]) && (a.lastIndex = ar(s, We(a.lastIndex), l))
			}
			for (var g, h = "", f = 0, _ = 0; _ < p.length; _++) {
				d = p[_];
				for (var m = Mt(d[0]), v = Lr(Rr(Ye(d.index), s.length), 0), M = [], y =
					1; y < d.length; y++) M.push(void 0 === (g = d[y]) ? g : String(g));
				var I = d.groups;
				if (u) {
					var T = [m].concat(M, v, s);
					void 0 !== I && T.push(I);
					var S = Mt(r.apply(void 0, T))
				} else S = Nr(m, s, v, M, I, r);
				v >= f && (h += s.slice(f, v) + S, f = v + m.length)
			}
			return h + s.slice(f)
		}]
	}), !!L((function() {
		var e = /./;
		return e.exec = function() {
			var e = [];
			return e.groups = {
				a: "7"
			}, e
		}, "7" !== "".replace(e, "$<a>")
	})) || !br || wr);
	var Pr = Be.set,
		Gr = Be.getterFor("Array Iterator"),
		Ur = Yn(Array, "Array", (function(e, t) {
			Pr(this, {
				type: "Array Iterator",
				target: K(e),
				index: 0,
				kind: t
			})
		}), (function() {
			var e = Gr(this),
				t = e.target,
				n = e.kind,
				o = e.index++;
			return !t || o >= t.length ? (e.target = void 0, {
				value: void 0,
				done: !0
			}) : "keys" == n ? {
				value: o,
				done: !1
			} : "values" == n ? {
				value: t[o],
				done: !1
			} : {
				value: [o, t[o]],
				done: !1
			}
		}), "values");
	rn.Arguments = rn.Array, cr("keys"), cr("values"), cr("entries");
	var Fr = ge("iterator"),
		qr = ge("toStringTag"),
		xr = Ur.values;
	for (var Vr in Xt) {
		var Kr = O[Vr],
			Br = Kr && Kr.prototype;
		if (Br) {
			if (Br[Fr] !== xr) try {
				Ce(Br, Fr, xr)
			} catch (_M) {
				Br[Fr] = xr
			}
			if (Br[qr] || Ce(Br, qr, Vr), Xt[Vr])
				for (var Hr in Ur)
					if (Br[Hr] !== Ur[Hr]) try {
						Ce(Br, Hr, Ur[Hr])
					} catch (_M) {
						Br[Hr] = Ur[Hr]
					}
		}
	}
	var jr = Qn("slice"),
		$r = ge("species"),
		Yr = [].slice,
		zr = Math.max;
	vt({
		target: "Array",
		proto: !0,
		forced: !jr
	}, {
		slice: function(e, t) {
			var n, o, r, a = K(this),
				s = We(a.length),
				i = Qe(e, s),
				u = Qe(void 0 === t ? s : t, s);
			if (Kt(a) && ("function" != typeof(n = a.constructor) || n !== Array && !Kt(n
					.prototype) ? B(n) && null === (n = n[$r]) && (n = void 0) : n = void 0, n ===
					Array || void 0 === n)) return Yr.call(a, i, u);
			for (o = new(void 0 === n ? Array : n)(zr(u - i, 0)), r = 0; i < u; i++, r++) i in a &&
				cn(o, r, a[i]);
			return o.length = r, o
		}
	});
	var Wr = [].join,
		Jr = x != Object,
		Xr = zt("join", ",");
	vt({
		target: "Array",
		proto: !0,
		forced: Jr || !Xr
	}, {
		join: function(e) {
			return Wr.call(K(this), void 0 === e ? "," : e)
		}
	});
	var Qr = et.indexOf,
		Zr = [].indexOf,
		ea = !!Zr && 1 / [1].indexOf(1, -0) < 0,
		ta = zt("indexOf");
	vt({
		target: "Array",
		proto: !0,
		forced: ea || !ta
	}, {
		indexOf: function(e) {
			return ea ? Zr.apply(this, arguments) || 0 : Qr(this, e, arguments.length > 1 ?
				arguments[1] : void 0)
		}
	});
	var na = st.f,
		oa = {}.toString,
		ra = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(
			window) : [],
		aa = {
			f: function(e) {
				return ra && "[object Window]" == oa.call(e) ? function(e) {
					try {
						return na(e)
					} catch (_M) {
						return ra.slice()
					}
				}(e) : na(K(e))
			}
		},
		sa = aa.f,
		ia = L((function() {
			return !Object.getOwnPropertyNames(1)
		}));
	vt({
		target: "Object",
		stat: !0,
		forced: ia
	}, {
		getOwnPropertyNames: sa
	});
	var ua = Yt.find,
		ca = !0;
	"find" in [] && Array(1).find((function() {
		ca = !1
	})), vt({
		target: "Array",
		proto: !0,
		forced: ca
	}, {
		find: function(e) {
			return ua(this, e, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), cr("find");
	var la, pa, da, ga, ha = O.Promise,
		fa = function(e, t, n) {
			for (var o in t) He(e, o, t[o], n);
			return e
		},
		_a = ge("species"),
		ma = function(e) {
			var t = j(e),
				n = Ee.f;
			R && t && !t[_a] && n(t, _a, {
				configurable: !0,
				get: function() {
					return this
				}
			})
		},
		va = function(e, t, n) {
			if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
			return e
		},
		Ma = function(e, t) {
			this.stopped = e, this.result = t
		},
		ya = function(e, t, n) {
			var o, r, a, s, i, u, c, l = n && n.that,
				p = !(!n || !n.AS_ENTRIES),
				d = !(!n || !n.IS_ITERATOR),
				g = !(!n || !n.INTERRUPTED),
				h = Vt(t, l, 1 + p + g),
				f = function(e) {
					return o && nn(o), new Ma(!0, e)
				},
				_ = function(e) {
					return p ? (Se(e), g ? h(e[0], e[1], f) : h(e[0], e[1])) : g ? h(e, f) : h(e)
				};
			if (d) o = e;
			else {
				if ("function" != typeof(r = _n(e))) throw TypeError("Target is not iterable");
				if (un(r)) {
					for (a = 0, s = We(e.length); s > a; a++)
						if ((i = _(e[a])) && i instanceof Ma) return i;
					return new Ma(!1)
				}
				o = r.call(e)
			}
			for (u = o.next; !(c = u.call(o)).done;) {
				try {
					i = _(c.value)
				} catch (_M) {
					throw nn(o), _M
				}
				if ("object" == typeof i && i && i instanceof Ma) return i
			}
			return new Ma(!1)
		},
		Ia = ge("species"),
		Ta = function(e, t) {
			var n, o = Se(e).constructor;
			return void 0 === o || null == (n = Se(o)[Ia]) ? t : xt(n)
		},
		Sa = /(?:iphone|ipod|ipad).*applewebkit/i.test($),
		Da = "process" == F(O.process),
		Ea = O.setImmediate,
		Ca = O.clearImmediate,
		Aa = O.process,
		ka = O.MessageChannel,
		Na = O.Dispatch,
		Oa = 0,
		La = {};
	try {
		la = O.location
	} catch (_M) {}
	var Ra = function(e) {
			if (La.hasOwnProperty(e)) {
				var t = La[e];
				delete La[e], t()
			}
		},
		ba = function(e) {
			return function() {
				Ra(e)
			}
		},
		wa = function(e) {
			Ra(e.data)
		},
		Pa = function(e) {
			O.postMessage(String(e), la.protocol + "//" + la.host)
		};
	Ea && Ca || (Ea = function(e) {
			for (var t = [], n = arguments.length, o = 1; n > o;) t.push(arguments[o++]);
			return La[++Oa] = function() {
				("function" == typeof e ? e : Function(e)).apply(void 0, t)
			}, pa(Oa), Oa
		}, Ca = function(e) {
			delete La[e]
		}, Da ? pa = function(e) {
			Aa.nextTick(ba(e))
		} : Na && Na.now ? pa = function(e) {
			Na.now(ba(e))
		} : ka && !Sa ? (ga = (da = new ka).port2, da.port1.onmessage = wa, pa = Vt(ga.postMessage, ga,
		1)) : O.addEventListener && "function" == typeof postMessage && !O.importScripts && la &&
		"file:" !== la.protocol && !L(Pa) ? (pa = Pa, O.addEventListener("message", wa, !1)) : pa =
		"onreadystatechange" in Me("script") ? function(e) {
			bt.appendChild(Me("script")).onreadystatechange = function() {
				bt.removeChild(this), Ra(e)
			}
		} : function(e) {
			setTimeout(ba(e), 0)
		});
	var Ga, Ua, Fa, qa, xa, Va, Ka, Ba, Ha = {
			set: Ea,
			clear: Ca
		},
		ja = /iphone|ipod|ipad/i.test($) && void 0 !== O.Pebble,
		$a = /web0s(?!.*chrome)/i.test($),
		Ya = Te.f,
		za = Ha.set,
		Wa = O.MutationObserver || O.WebKitMutationObserver,
		Ja = O.document,
		Xa = O.process,
		Qa = O.Promise,
		Za = Ya(O, "queueMicrotask"),
		es = Za && Za.value;
	es || (Ga = function() {
		var e, t;
		for (Da && (e = Xa.domain) && e.exit(); Ua;) {
			t = Ua.fn, Ua = Ua.next;
			try {
				t()
			} catch (_M) {
				throw Ua ? qa() : Fa = void 0, _M
			}
		}
		Fa = void 0, e && e.enter()
	}, Sa || Da || $a || !Wa || !Ja ? !ja && Qa && Qa.resolve ? ((Ka = Qa.resolve(void 0)).constructor =
		Qa, Ba = Ka.then, qa = function() {
			Ba.call(Ka, Ga)
		}) : qa = Da ? function() {
		Xa.nextTick(Ga)
	} : function() {
		za.call(O, Ga)
	} : (xa = !0, Va = Ja.createTextNode(""), new Wa(Ga).observe(Va, {
		characterData: !0
	}), qa = function() {
		Va.data = xa = !xa
	}));
	var ts, ns, os, rs, as = es || function(e) {
			var t = {
				fn: e,
				next: void 0
			};
			Fa && (Fa.next = t), Ua || (Ua = t, qa()), Fa = t
		},
		ss = function(e) {
			var t, n;
			this.promise = new e((function(e, o) {
				if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
				t = e, n = o
			})), this.resolve = xt(t), this.reject = xt(n)
		},
		is = {
			f: function(e) {
				return new ss(e)
			}
		},
		us = function(e, t) {
			if (Se(e), B(t) && t.constructor === e) return t;
			var n = is.f(e);
			return (0, n.resolve)(t), n.promise
		},
		cs = function(e) {
			try {
				return {
					error: !1,
					value: e()
				}
			} catch (_M) {
				return {
					error: !0,
					value: _M
				}
			}
		},
		ls = "object" == typeof window,
		ps = Ha.set,
		ds = ge("species"),
		gs = "Promise",
		hs = Be.get,
		fs = Be.set,
		_s = Be.getterFor(gs),
		ms = ha && ha.prototype,
		vs = ha,
		Ms = ms,
		ys = O.TypeError,
		Is = O.document,
		Ts = O.process,
		Ss = is.f,
		Ds = Ss,
		Es = !!(Is && Is.createEvent && O.dispatchEvent),
		Cs = "function" == typeof PromiseRejectionEvent,
		As = !1,
		ks = _t(gs, (function() {
			var e = Le(vs),
				t = e !== String(vs);
			if (!t && 66 === X) return !0;
			if (X >= 51 && /native code/.test(e)) return !1;
			var n = new vs((function(e) {
					e(1)
				})),
				o = function(e) {
					e((function() {}), (function() {}))
				};
			return (n.constructor = {})[ds] = o, !(As = n.then((function() {})) instanceof o) || !t &&
				ls && !Cs
		})),
		Ns = ks || !Tn((function(e) {
			vs.all(e).catch((function() {}))
		})),
		Os = function(e) {
			var t;
			return !(!B(e) || "function" != typeof(t = e.then)) && t
		},
		Ls = function(e, t) {
			if (!e.notified) {
				e.notified = !0;
				var n = e.reactions;
				as((function() {
					for (var o = e.value, r = 1 == e.state, a = 0; n.length > a;) {
						var s, i, u, c = n[a++],
							l = r ? c.ok : c.fail,
							p = c.resolve,
							d = c.reject,
							g = c.domain;
						try {
							l ? (r || (2 === e.rejection && Ps(e), e.rejection = 1), !0 === l ? s =
								o : (g && g.enter(), s = l(o), g && (g.exit(), u = !0)), s === c
								.promise ? d(ys("Promise-chain cycle")) : (i = Os(s)) ? i.call(
									s, p, d) : p(s)) : d(o)
						} catch (_M) {
							g && !u && g.exit(), d(_M)
						}
					}
					e.reactions = [], e.notified = !1, t && !e.rejection && bs(e)
				}))
			}
		},
		Rs = function(e, t, n) {
			var o, r;
			Es ? ((o = Is.createEvent("Event")).promise = t, o.reason = n, o.initEvent(e, !1, !0), O
				.dispatchEvent(o)) : o = {
				promise: t,
				reason: n
			}, !Cs && (r = O["on" + e]) ? r(o) : "unhandledrejection" === e && function(e, t) {
				var n = O.console;
				n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
			}("Unhandled promise rejection", n)
		},
		bs = function(e) {
			ps.call(O, (function() {
				var t, n = e.facade,
					o = e.value;
				if (ws(e) && (t = cs((function() {
						Da ? Ts.emit("unhandledRejection", o, n) : Rs(
							"unhandledrejection", n, o)
					})), e.rejection = Da || ws(e) ? 2 : 1, t.error)) throw t.value
			}))
		},
		ws = function(e) {
			return 1 !== e.rejection && !e.parent
		},
		Ps = function(e) {
			ps.call(O, (function() {
				var t = e.facade;
				Da ? Ts.emit("rejectionHandled", t) : Rs("rejectionhandled", t, e.value)
			}))
		},
		Gs = function(e, t, n) {
			return function(o) {
				e(t, o, n)
			}
		},
		Us = function(e, t, n) {
			e.done || (e.done = !0, n && (e = n), e.value = t, e.state = 2, Ls(e, !0))
		},
		Fs = function(e, t, n) {
			if (!e.done) {
				e.done = !0, n && (e = n);
				try {
					if (e.facade === t) throw ys("Promise can't be resolved itself");
					var o = Os(t);
					o ? as((function() {
						var n = {
							done: !1
						};
						try {
							o.call(t, Gs(Fs, n, e), Gs(Us, n, e))
						} catch (_M) {
							Us(n, _M, e)
						}
					})) : (e.value = t, e.state = 1, Ls(e, !1))
				} catch (_M) {
					Us({
						done: !1
					}, _M, e)
				}
			}
		};
	if (ks && (Ms = (vs = function(e) {
			va(this, vs, gs), xt(e), ts.call(this);
			var t = hs(this);
			try {
				e(Gs(Fs, t), Gs(Us, t))
			} catch (_M) {
				Us(t, _M)
			}
		}).prototype, (ts = function(e) {
			fs(this, {
				type: gs,
				done: !1,
				notified: !1,
				parent: !1,
				reactions: [],
				rejection: !1,
				state: 0,
				value: void 0
			})
		}).prototype = fa(Ms, {
			then: function(e, t) {
				var n = _s(this),
					o = Ss(Ta(this, vs));
				return o.ok = "function" != typeof e || e, o.fail = "function" == typeof t && t, o
					.domain = Da ? Ts.domain : void 0, n.parent = !0, n.reactions.push(o), 0 != n
					.state && Ls(n, !1), o.promise
			},
			catch: function(e) {
				return this.then(void 0, e)
			}
		}), ns = function() {
			var e = new ts,
				t = hs(e);
			this.promise = e, this.resolve = Gs(Fs, t), this.reject = Gs(Us, t)
		}, is.f = Ss = function(e) {
			return e === vs || e === os ? new ns(e) : Ds(e)
		}, "function" == typeof ha && ms !== Object.prototype)) {
		rs = ms.then, As || (He(ms, "then", (function(e, t) {
			var n = this;
			return new vs((function(e, t) {
				rs.call(n, e, t)
			})).then(e, t)
		}), {
			unsafe: !0
		}), He(ms, "catch", Ms.catch, {
			unsafe: !0
		}));
		try {
			delete ms.constructor
		} catch (_M) {}
		Kn && Kn(ms, Ms)
	}
	vt({
		global: !0,
		wrap: !0,
		forced: ks
	}, {
		Promise: vs
	}), Fn(vs, gs, !1), ma(gs), os = j(gs), vt({
		target: gs,
		stat: !0,
		forced: ks
	}, {
		reject: function(e) {
			var t = Ss(this);
			return t.reject.call(void 0, e), t.promise
		}
	}), vt({
		target: gs,
		stat: !0,
		forced: ks
	}, {
		resolve: function(e) {
			return us(this, e)
		}
	}), vt({
		target: gs,
		stat: !0,
		forced: Ns
	}, {
		all: function(e) {
			var t = this,
				n = Ss(t),
				o = n.resolve,
				r = n.reject,
				a = cs((function() {
					var n = xt(t.resolve),
						a = [],
						s = 0,
						i = 1;
					ya(e, (function(e) {
						var u = s++,
							c = !1;
						a.push(void 0), i++, n.call(t, e).then((function(e) {
							c || (c = !0, a[u] = e, --i || o(a))
						}), r)
					})), --i || o(a)
				}));
			return a.error && r(a.value), n.promise
		},
		race: function(e) {
			var t = this,
				n = Ss(t),
				o = n.reject,
				r = cs((function() {
					var r = xt(t.resolve);
					ya(e, (function(e) {
						r.call(t, e).then(n.resolve, o)
					}))
				}));
			return r.error && o(r.value), n.promise
		}
	});
	var qs = kn.codeAt;
	vt({
		target: "String",
		proto: !0
	}, {
		codePointAt: function(e) {
			return qs(this, e)
		}
	});
	var xs = Et.trim,
		Vs = O.parseFloat,
		Ks = 1 / Vs(yt + "-0") != -Infinity ? function(e) {
			var t = xs(Mt(e)),
				n = Vs(t);
			return 0 === n && "-" == t.charAt(0) ? -0 : n
		} : Vs;
	vt({
		global: !0,
		forced: parseFloat != Ks
	}, {
		parseFloat: Ks
	});
	var Bs = {
			WEB: 7,
			WX_MP: 8,
			QQ_MP: 9,
			TT_MP: 10,
			BAIDU_MP: 11,
			ALI_MP: 12,
			UNI_NATIVE_APP: 14
		},
		Hs = "1.7.3",
		js = 537048168,
		$s = 1,
		Ys = 2,
		zs = 3,
		Ws = {
			HOST: {
				CURRENT: {
					DEFAULT: "",
					BACKUP: ""
				},
				TEST: {
					DEFAULT: "wss://wss-dev.tim.qq.com",
					BACKUP: "wss://wss-dev.tim.qq.com"
				},
				PRODUCTION: {
					DEFAULT: "wss://wss.im.qcloud.com",
					BACKUP: "wss://wss.tim.qq.com"
				},
				OVERSEA_PRODUCTION: {
					DEFAULT: "wss://wss.im.qcloud.com",
					BACKUP: "wss://wss.im.qcloud.com"
				},
				setCurrent: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
					e === $s ? this.CURRENT = this.TEST : e === Ys ? this.CURRENT = this.PRODUCTION : e ===
						zs && (this.CURRENT = this.OVERSEA_PRODUCTION)
				}
			},
			NAME: {
				OPEN_IM: "openim",
				GROUP: "group_open_http_svc",
				GROUP_ATTR: "group_open_attr_http_svc",
				FRIEND: "sns",
				PROFILE: "profile",
				RECENT_CONTACT: "recentcontact",
				PIC: "openpic",
				BIG_GROUP_NO_AUTH: "group_open_http_noauth_svc",
				BIG_GROUP_LONG_POLLING: "group_open_long_polling_http_svc",
				BIG_GROUP_LONG_POLLING_NO_AUTH: "group_open_long_polling_http_noauth_svc",
				IM_OPEN_STAT: "imopenstat",
				WEB_IM: "webim",
				IM_COS_SIGN: "im_cos_sign_svr",
				CUSTOM_UPLOAD: "im_cos_msg",
				HEARTBEAT: "heartbeat",
				IM_OPEN_PUSH: "im_open_push",
				IM_OPEN_STATUS: "im_open_status",
				IM_LONG_MESSAGE: "im_long_msg",
				CLOUD_CONTROL: "im_sdk_config_mgr"
			},
			CMD: {
				ACCESS_LAYER: "accesslayer",
				LOGIN: "wslogin",
				LOGOUT_LONG_POLL: "longpollinglogout",
				LOGOUT: "wslogout",
				HELLO: "wshello",
				PORTRAIT_GET: "portrait_get_all",
				PORTRAIT_SET: "portrait_set",
				GET_LONG_POLL_ID: "getlongpollingid",
				LONG_POLL: "longpolling",
				AVCHATROOM_LONG_POLL: "get_msg",
				ADD_FRIEND: "friend_add",
				UPDATE_FRIEND: "friend_update",
				GET_FRIEND_LIST: "friend_get",
				GET_FRIEND_PROFILE: "friend_get_list",
				DELETE_FRIEND: "friend_delete",
				CHECK_FRIEND: "friend_check",
				GET_FRIEND_GROUP_LIST: "group_get",
				RESPOND_FRIEND_APPLICATION: "friend_response",
				GET_FRIEND_APPLICATION_LIST: "pendency_get",
				DELETE_FRIEND_APPLICATION: "pendency_delete",
				REPORT_FRIEND_APPLICATION: "pendency_report",
				GET_GROUP_APPLICATION: "get_pendency",
				CREATE_FRIEND_GROUP: "group_add",
				DELETE_FRIEND_GROUP: "group_delete",
				UPDATE_FRIEND_GROUP: "group_update",
				GET_BLACKLIST: "black_list_get",
				ADD_BLACKLIST: "black_list_add",
				DELETE_BLACKLIST: "black_list_delete",
				CREATE_GROUP: "create_group",
				GET_JOINED_GROUPS: "get_joined_group_list",
				SET_GROUP_ATTRIBUTES: "set_group_attr",
				MODIFY_GROUP_ATTRIBUTES: "modify_group_attr",
				DELETE_GROUP_ATTRIBUTES: "delete_group_attr",
				CLEAR_GROUP_ATTRIBUTES: "clear_group_attr",
				GET_GROUP_ATTRIBUTES: "get_group_attr",
				SEND_MESSAGE: "sendmsg",
				REVOKE_C2C_MESSAGE: "msgwithdraw",
				DELETE_C2C_MESSAGE: "delete_c2c_msg_ramble",
				SEND_GROUP_MESSAGE: "send_group_msg",
				REVOKE_GROUP_MESSAGE: "group_msg_recall",
				DELETE_GROUP_MESSAGE: "delete_group_ramble_msg_by_seq",
				GET_GROUP_INFO: "get_group_info",
				GET_GROUP_MEMBER_INFO: "get_specified_group_member_info",
				GET_GROUP_MEMBER_LIST: "get_group_member_info",
				QUIT_GROUP: "quit_group",
				CHANGE_GROUP_OWNER: "change_group_owner",
				DESTROY_GROUP: "destroy_group",
				ADD_GROUP_MEMBER: "add_group_member",
				DELETE_GROUP_MEMBER: "delete_group_member",
				SEARCH_GROUP_BY_ID: "get_group_public_info",
				APPLY_JOIN_GROUP: "apply_join_group",
				HANDLE_APPLY_JOIN_GROUP: "handle_apply_join_group",
				HANDLE_GROUP_INVITATION: "handle_invite_join_group",
				MODIFY_GROUP_INFO: "modify_group_base_info",
				MODIFY_GROUP_MEMBER_INFO: "modify_group_member_info",
				DELETE_GROUP_SYSTEM_MESSAGE: "deletemsg",
				DELETE_GROUP_AT_TIPS: "deletemsg",
				GET_CONVERSATION_LIST: "get",
				PAGING_GET_CONVERSATION_LIST: "page_get",
				DELETE_CONVERSATION: "delete",
				PIN_CONVERSATION: "top",
				GET_MESSAGES: "getmsg",
				GET_C2C_ROAM_MESSAGES: "getroammsg",
				GET_GROUP_ROAM_MESSAGES: "group_msg_get",
				SET_C2C_MESSAGE_READ: "msgreaded",
				GET_PEER_READ_TIME: "get_peer_read_time",
				SET_GROUP_MESSAGE_READ: "msg_read_report",
				FILE_READ_AND_WRITE_AUTHKEY: "authkey",
				FILE_UPLOAD: "pic_up",
				COS_SIGN: "cos",
				COS_PRE_SIG: "pre_sig",
				TIM_WEB_REPORT_V2: "tim_web_report_v2",
				BIG_DATA_HALLWAY_AUTH_KEY: "authkey",
				GET_ONLINE_MEMBER_NUM: "get_online_member_num",
				ALIVE: "alive",
				MESSAGE_PUSH: "msg_push",
				MESSAGE_PUSH_ACK: "ws_msg_push_ack",
				STATUS_FORCEOFFLINE: "stat_forceoffline",
				DOWNLOAD_MERGER_MESSAGE: "get_relay_json_msg",
				UPLOAD_MERGER_MESSAGE: "save_relay_json_msg",
				FETCH_CLOUD_CONTROL_CONFIG: "fetch_config",
				PUSHED_CLOUD_CONTROL_CONFIG: "push_configv2"
			},
			CHANNEL: {
				SOCKET: 1,
				XHR: 2,
				AUTO: 0
			},
			NAME_VERSION: {
				openim: "v4",
				group_open_http_svc: "v4",
				sns: "v4",
				profile: "v4",
				recentcontact: "v4",
				openpic: "v4",
				group_open_http_noauth_svc: "v4",
				group_open_long_polling_http_svc: "v4",
				group_open_long_polling_http_noauth_svc: "v4",
				imopenstat: "v4",
				im_cos_sign_svr: "v4",
				im_cos_msg: "v4",
				webim: "v4",
				im_open_push: "v4",
				im_open_status: "v4"
			}
		};
	Ws.HOST.setCurrent(Ys);
	var Js, Xs, Qs, Zs = "undefined" != typeof wx && "function" == typeof wx.getSystemInfoSync && Boolean(wx
			.getSystemInfoSync().fontSizeSetting),
		ei = "undefined" != typeof qq && "function" == typeof qq.getSystemInfoSync && Boolean(qq
			.getSystemInfoSync().fontSizeSetting),
		ti = "undefined" != typeof tt && "function" == typeof tt.getSystemInfoSync && Boolean(tt
			.getSystemInfoSync().fontSizeSetting),
		ni = "undefined" != typeof swan && "function" == typeof swan.getSystemInfoSync && Boolean(swan
			.getSystemInfoSync().fontSizeSetting),
		oi = "undefined" != typeof my && "function" == typeof my.getSystemInfoSync && Boolean(my
			.getSystemInfoSync().fontSizeSetting),
		ri = "undefined" != typeof uni && "undefined" == typeof window,
		ai = Zs || ei || ti || ni || oi || ri,
		si = ("undefined" != typeof uni || "undefined" != typeof window) && !ai,
		ii = ei ? qq : ti ? tt : ni ? swan : oi ? my : Zs ? wx : ri ? uni : {},
		ui = (Js = "WEB", Ti ? Js = "WEB" : ei ? Js = "QQ_MP" : ti ? Js = "TT_MP" : ni ? Js = "BAIDU_MP" : oi ?
			Js = "ALI_MP" : Zs ? Js = "WX_MP" : ri && (Js = "UNI_NATIVE_APP"), Bs[Js]),
		ci = si && window && window.navigator && window.navigator.userAgent || "",
		li = /AppleWebKit\/([\d.]+)/i.exec(ci),
		pi = (li && parseFloat(li.pop()), /iPad/i.test(ci)),
		di = /iPhone/i.test(ci) && !pi,
		gi = /iPod/i.test(ci),
		hi = di || pi || gi,
		fi = (function() {
			var e = ci.match(/OS (\d+)_/i);
			e && e[1] && e[1]
		}(), /Android/i.test(ci)),
		_i = function() {
			var e = ci.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
			if (!e) return null;
			var t = e[1] && parseFloat(e[1]),
				n = e[2] && parseFloat(e[2]);
			return t && n ? parseFloat(e[1] + "." + e[2]) : t || null
		}(),
		mi = (fi && /webkit/i.test(ci), /Firefox/i.test(ci), /Edge/i.test(ci)),
		vi = !mi && /Chrome/i.test(ci),
		Mi = (function() {
			var e = ci.match(/Chrome\/(\d+)/);
			e && e[1] && parseFloat(e[1])
		}(), /MSIE/.test(ci)),
		yi = (/MSIE\s8\.0/.test(ci), function() {
			var e = /MSIE\s(\d+)\.\d/.exec(ci),
				t = e && parseFloat(e[1]);
			return !t && /Trident\/7.0/i.test(ci) && /rv:11.0/.test(ci) && (t = 11), t
		}()),
		Ii = (/Safari/i.test(ci), /TBS\/\d+/i.test(ci)),
		Ti = (function() {
				var e = ci.match(/TBS\/(\d+)/i);
				if (e && e[1]) e[1]
			}(), !Ii && /MQQBrowser\/\d+/i.test(ci), !Ii && / QQBrowser\/\d+/i.test(ci),
			/(micromessenger|webbrowser)/i.test(ci)),
		Si = /Windows/i.test(ci),
		Di = /MAC OS X/i.test(ci),
		Ei = (/MicroMessenger/i.test(ci), !L((function() {
			return Object.isExtensible(Object.preventExtensions({}))
		}))),
		Ci = C((function(e) {
			var t = Ee.f,
				n = !1,
				o = ce("meta"),
				r = 0,
				a = Object.isExtensible || function() {
					return !0
				},
				s = function(e) {
					t(e, o, {
						value: {
							objectID: "O" + r++,
							weakData: {}
						}
					})
				},
				i = e.exports = {
					enable: function() {
						i.enable = function() {}, n = !0;
						var e = st.f,
							t = [].splice,
							r = {};
						r[o] = 1, e(r).length && (st.f = function(n) {
							for (var r = e(n), a = 0, s = r.length; a < s; a++)
								if (r[a] === o) {
									t.call(r, a, 1);
									break
								} return r
						}, vt({
							target: "Object",
							stat: !0,
							forced: !0
						}, {
							getOwnPropertyNames: aa.f
						}))
					},
					fastKey: function(e, t) {
						if (!B(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" :
							"P") + e;
						if (!se(e, o)) {
							if (!a(e)) return "F";
							if (!t) return "E";
							s(e)
						}
						return e[o].objectID
					},
					getWeakData: function(e, t) {
						if (!se(e, o)) {
							if (!a(e)) return !0;
							if (!t) return !1;
							s(e)
						}
						return e[o].weakData
					},
					onFreeze: function(e) {
						return Ei && n && a(e) && !se(e, o) && s(e), e
					}
				};
			Ge[o] = !0
		})),
		Ai = (Ci.enable, Ci.fastKey, Ci.getWeakData, Ci.onFreeze, Ee.f),
		ki = Ci.fastKey,
		Ni = Be.set,
		Oi = Be.getterFor,
		Li = (function(e, t, n) {
				var o = -1 !== e.indexOf("Map"),
					r = -1 !== e.indexOf("Weak"),
					a = o ? "set" : "add",
					s = O[e],
					i = s && s.prototype,
					u = s,
					c = {},
					l = function(e) {
						var t = i[e];
						He(i, e, "add" == e ? function(e) {
							return t.call(this, 0 === e ? 0 : e), this
						} : "delete" == e ? function(e) {
							return !(r && !B(e)) && t.call(this, 0 === e ? 0 : e)
						} : "get" == e ? function(e) {
							return r && !B(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
						} : "has" == e ? function(e) {
							return !(r && !B(e)) && t.call(this, 0 === e ? 0 : e)
						} : function(e, n) {
							return t.call(this, 0 === e ? 0 : e, n), this
						})
					};
				if (_t(e, "function" != typeof s || !(r || i.forEach && !L((function() {
						(new s).entries().next()
					}))))) u = n.getConstructor(t, e, o, a), Ci.enable();
				else if (_t(e, !0)) {
					var p = new u,
						d = p[a](r ? {} : -0, 1) != p,
						g = L((function() {
							p.has(1)
						})),
						h = Tn((function(e) {
							new s(e)
						})),
						f = !r && L((function() {
							for (var e = new s, t = 5; t--;) e[a](t, t);
							return !e.has(-0)
						}));
					h || ((u = t((function(t, n) {
						va(t, u, e);
						var r = vo(new s, t, u);
						return null != n && ya(n, r[a], {
							that: r,
							AS_ENTRIES: o
						}), r
					}))).prototype = i, i.constructor = u), (g || f) && (l("delete"), l("has"), o && l(
						"get")), (f || d) && l(a), r && i.clear && delete i.clear
				}
				c[e] = u, vt({
					global: !0,
					forced: u != s
				}, c), Fn(u, e), r || n.setStrong(u, e, o)
			}("Map", (function(e) {
				return function() {
					return e(this, arguments.length ? arguments[0] : void 0)
				}
			}), {
				getConstructor: function(e, t, n, o) {
					var r = e((function(e, a) {
							va(e, r, t), Ni(e, {
								type: t,
								index: qt(null),
								first: void 0,
								last: void 0,
								size: 0
							}), R || (e.size = 0), null != a && ya(a, e[o], {
								that: e,
								AS_ENTRIES: n
							})
						})),
						a = Oi(t),
						s = function(e, t, n) {
							var o, r, s = a(e),
								u = i(e, t);
							return u ? u.value = n : (s.last = u = {
									index: r = ki(t, !0),
									key: t,
									value: n,
									previous: o = s.last,
									next: void 0,
									removed: !1
								}, s.first || (s.first = u), o && (o.next = u), R ? s.size++ : e
								.size++, "F" !== r && (s.index[r] = u)), e
						},
						i = function(e, t) {
							var n, o = a(e),
								r = ki(t);
							if ("F" !== r) return o.index[r];
							for (n = o.first; n; n = n.next)
								if (n.key == t) return n
						};
					return fa(r.prototype, {
						clear: function() {
							for (var e = a(this), t = e.index, n = e.first; n;) n
								.removed = !0, n.previous && (n.previous = n.previous.next =
									void 0), delete t[n.index], n = n.next;
							e.first = e.last = void 0, R ? e.size = 0 : this.size = 0
						},
						delete: function(e) {
							var t = a(this),
								n = i(this, e);
							if (n) {
								var o = n.next,
									r = n.previous;
								delete t.index[n.index], n.removed = !0, r && (r.next = o),
									o && (o.previous = r), t.first == n && (t.first = o), t
									.last == n && (t.last = r), R ? t.size-- : this.size--
							}
							return !!n
						},
						forEach: function(e) {
							for (var t, n = a(this), o = Vt(e, arguments.length > 1 ?
									arguments[1] : void 0, 3); t = t ? t.next : n.first;)
								for (o(t.value, t.key, this); t && t.removed;) t = t
									.previous
						},
						has: function(e) {
							return !!i(this, e)
						}
					}), fa(r.prototype, n ? {
						get: function(e) {
							var t = i(this, e);
							return t && t.value
						},
						set: function(e, t) {
							return s(this, 0 === e ? 0 : e, t)
						}
					} : {
						add: function(e) {
							return s(this, e = 0 === e ? 0 : e, e)
						}
					}), R && Ai(r.prototype, "size", {
						get: function() {
							return a(this).size
						}
					}), r
				},
				setStrong: function(e, t, n) {
					var o = t + " Iterator",
						r = Oi(t),
						a = Oi(o);
					Yn(e, t, (function(e, t) {
						Ni(this, {
							type: o,
							target: e,
							state: r(e),
							kind: t,
							last: void 0
						})
					}), (function() {
						for (var e = a(this), t = e.kind, n = e.last; n && n.removed;) n = n
							.previous;
						return e.target && (e.last = n = n ? n.next : e.state.first) ?
							"keys" == t ? {
								value: n.key,
								done: !1
							} : "values" == t ? {
								value: n.value,
								done: !1
							} : {
								value: [n.key, n.value],
								done: !1
							} : (e.target = void 0, {
								value: void 0,
								done: !0
							})
					}), n ? "entries" : "values", !n, !0), ma(t)
				}
			}), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" !=
			typeof window ? window : {});
	Xs = "undefined" != typeof console ? console : void 0 !== Li && Li.console ? Li.console : "undefined" !=
		typeof window && window.console ? window.console : {};
	for (var Ri = function() {}, bi = ["assert", "clear", "count", "debug", "dir", "dirxml", "error",
			"exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile",
			"profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"
		], wi = bi.length; wi--;) Qs = bi[wi], console[Qs] || (Xs[Qs] = Ri);
	Xs.methods = bi;
	var Pi = Xs,
		Gi = 0,
		Ui = function() {
			return (new Date).getTime() + Gi
		},
		Fi = function() {
			Gi = 0
		},
		qi = 0,
		xi = new Map;

	function Vi() {
		var e, t = ((e = new Date).setTime(Ui()), e);
		return "TIM " + t.toLocaleTimeString("en-US", {
			hour12: !1
		}) + "." + function(e) {
			var t;
			switch (e.toString().length) {
				case 1:
					t = "00" + e;
					break;
				case 2:
					t = "0" + e;
					break;
				default:
					t = e
			}
			return t
		}(t.getMilliseconds()) + ":"
	}
	var Ki = {
			arguments2String: function(e) {
				var t;
				if (1 === e.length) t = Vi() + e[0];
				else {
					t = Vi();
					for (var n = 0, o = e.length; n < o; n++) Xi(e[n]) ? Zi(e[n]) ? t += au(e[n]) : t +=
						JSON.stringify(e[n]) : t += e[n], t += " "
				}
				return t
			},
			debug: function() {
				if (qi <= -1) {
					var e = this.arguments2String(arguments);
					Pi.debug(e)
				}
			},
			log: function() {
				if (qi <= 0) {
					var e = this.arguments2String(arguments);
					Pi.log(e)
				}
			},
			info: function() {
				if (qi <= 1) {
					var e = this.arguments2String(arguments);
					Pi.info(e)
				}
			},
			warn: function() {
				if (qi <= 2) {
					var e = this.arguments2String(arguments);
					Pi.warn(e)
				}
			},
			error: function() {
				if (qi <= 3) {
					var e = this.arguments2String(arguments);
					Pi.error(e)
				}
			},
			time: function(e) {
				xi.set(e, ou.now())
			},
			timeEnd: function(e) {
				if (xi.has(e)) {
					var t = ou.now() - xi.get(e);
					return xi.delete(e), t
				}
				return Pi.warn("未找到对应label: ".concat(e, ", 请在调用 logger.timeEnd 前，调用 logger.time")), 0
			},
			setLevel: function(e) {
				e < 4 && Pi.log(Vi() + "set level from " + qi + " to " + e), qi = e
			},
			getLevel: function() {
				return qi
			}
		},
		Bi = ["url"],
		Hi = function(e) {
			return "file" === eu(e)
		},
		ji = function(e) {
			return null !== e && ("number" == typeof e && !isNaN(e - 0) || "object" === n(e) && e
				.constructor === Number)
		},
		$i = function(e) {
			return "string" == typeof e
		},
		Yi = function(e) {
			return null !== e && "object" === n(e)
		},
		zi = function(e) {
			if ("object" !== n(e) || null === e) return !1;
			var t = Object.getPrototypeOf(e);
			if (null === t) return !0;
			for (var o = t; null !== Object.getPrototypeOf(o);) o = Object.getPrototypeOf(o);
			return t === o
		},
		Wi = function(e) {
			return "function" == typeof Array.isArray ? Array.isArray(e) : "array" === eu(e)
		},
		Ji = function(e) {
			return void 0 === e
		},
		Xi = function(e) {
			return Wi(e) || Yi(e)
		},
		Qi = function(e) {
			return "function" == typeof e
		},
		Zi = function(e) {
			return e instanceof Error
		},
		eu = function(e) {
			return Object.prototype.toString.call(e).match(/^\[object (.*)\]$/)[1].toLowerCase()
		},
		tu = function(e) {
			if ("string" != typeof e) return !1;
			var t = e[0];
			return !/[^a-zA-Z0-9]/.test(t)
		},
		nu = 0;
	Date.now || (Date.now = function() {
		return (new Date).getTime()
	});
	var ou = {
			now: function() {
				0 === nu && (nu = Date.now() - 1);
				var e = Date.now() - nu;
				return e > 4294967295 ? (nu += 4294967295, Date.now() - nu) : e
			},
			utc: function() {
				return Math.round(Date.now() / 1e3)
			}
		},
		ru = function e(t, n, o, r) {
			if (!Xi(t) || !Xi(n)) return 0;
			for (var a, s = 0, i = Object.keys(n), u = 0, c = i.length; u < c; u++)
				if (a = i[u], !(Ji(n[a]) || o && o.includes(a)))
					if (Xi(t[a]) && Xi(n[a])) s += e(t[a], n[a], o, r);
					else {
						if (r && r.includes(n[a])) continue;
						t[a] !== n[a] && (t[a] = n[a], s += 1)
					} return s
		},
		au = function(e) {
			return JSON.stringify(e, ["message", "code"])
		},
		su = function(e) {
			if (0 === e.length) return 0;
			for (var t = 0, n = 0, o = "undefined" != typeof document && void 0 !== document.characterSet ?
					document.characterSet : "UTF-8"; void 0 !== e[t];) n += e[t++].charCodeAt[t] <= 255 ? 1 : !
				1 === o ? 3 : 2;
			return n
		},
		iu = function(e) {
			var t = e || 99999999;
			return Math.round(Math.random() * t)
		},
		uu = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
		cu = uu.length,
		lu = function(e, t) {
			for (var n in e)
				if (e[n] === t) return !0;
			return !1
		},
		pu = {},
		du = function() {
			if (ai) return "https:";
			if (si && "undefined" == typeof window) return "https:";
			var e = window.location.protocol;
			return ["http:", "https:"].indexOf(e) < 0 && (e = "http:"), e
		},
		gu = function(e) {
			return -1 === e.indexOf("http://") || -1 === e.indexOf("https://") ? "https://" + e : e.replace(
				/https|http/, "https")
		},
		hu = function e(t) {
			if (0 === Object.getOwnPropertyNames(t).length) return Object.create(null);
			var o = Array.isArray(t) ? [] : Object.create(null),
				r = "";
			for (var a in t) null !== t[a] ? void 0 !== t[a] ? (r = n(t[a]), ["string", "number", "function",
				"boolean"
			].indexOf(r) >= 0 ? o[a] = t[a] : o[a] = e(t[a])) : o[a] = void 0 : o[a] = null;
			return o
		};

	function fu(e, t) {
		Wi(e) && Wi(t) ? t.forEach((function(t) {
			var n = t.key,
				o = t.value,
				r = e.find((function(e) {
					return e.key === n
				}));
			r ? r.value = o : e.push({
				key: n,
				value: o
			})
		})) : Ki.warn("updateCustomField target 或 source 不是数组，忽略此次更新。")
	}
	var _u = function(e) {
			return e === ro.GRP_PUBLIC
		},
		mu = function(e) {
			return e === ro.GRP_AVCHATROOM
		},
		vu = function(e) {
			return $i(e) && e.slice(0, 3) === ro.CONV_C2C
		},
		Mu = function(e) {
			return $i(e) && e.slice(0, 5) === ro.CONV_GROUP
		},
		yu = function(e) {
			return $i(e) && e === ro.CONV_SYSTEM
		};

	function Iu(e, t) {
		var n = {};
		return Object.keys(e).forEach((function(o) {
			n[o] = t(e[o], o)
		})), n
	}

	function Tu() {
		function e() {
			return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
		}
		return "".concat(e() + e()).concat(e()).concat(e()).concat(e()).concat(e()).concat(e()).concat(e())
	}

	function Su() {
		var e = "unknown";
		if (Di && (e = "mac"), Si && (e = "windows"), hi && (e = "ios"), fi && (e = "android"), ai) try {
			var t = ii.getSystemInfoSync().platform;
			void 0 !== t && (e = t)
		} catch (_M) {}
		return e
	}

	function Du(e) {
		var t = e.originUrl,
			n = void 0 === t ? void 0 : t,
			o = e.originWidth,
			r = e.originHeight,
			a = e.min,
			s = void 0 === a ? 198 : a,
			i = parseInt(o),
			u = parseInt(r),
			c = {
				url: void 0,
				width: 0,
				height: 0
			};
		return (i <= u ? i : u) <= s ? (c.url = n, c.width = i, c.height = u) : (u <= i ? (c.width = Math.ceil(
				i * s / u), c.height = s) : (c.width = s, c.height = Math.ceil(u * s / i)), c.url = ""
			.concat(n, 198 === s ? "?imageView2/3/w/198/h/198" : "?imageView2/3/w/720/h/720")), Ji(n) ? g(c,
			Bi) : c
	}

	function Eu(e) {
		var t = e[2];
		e[2] = e[1], e[1] = t;
		for (var n = 0; n < e.length; n++) e[n].setType(n)
	}

	function Cu(e) {
		var t = e.servcmd;
		return t.slice(t.indexOf(".") + 1)
	}

	function Au(e, t) {
		return Math.round(Number(e) * Math.pow(10, t)) / Math.pow(10, t)
	}

	function ku(e, t) {
		return e.includes(t)
	}

	function Nu(e, t) {
		return e.includes(t)
	}
	var Ou = Object.prototype.hasOwnProperty;

	function Lu(e) {
		if (null == e) return !0;
		if ("boolean" == typeof e) return !1;
		if ("number" == typeof e) return 0 === e;
		if ("string" == typeof e) return 0 === e.length;
		if ("function" == typeof e) return 0 === e.length;
		if (Array.isArray(e)) return 0 === e.length;
		if (e instanceof Error) return "" === e.message;
		if (zi(e)) {
			for (var t in e)
				if (Ou.call(e, t)) return !1;
			return !0
		}
		return !("map" !== eu(e) && ! function(e) {
			return "set" === eu(e)
		}(e) && !Hi(e)) && 0 === e.size
	}

	function Ru(e, t, n) {
		if (void 0 === t) return !0;
		var o = !0;
		if ("object" === mo(t).toLowerCase()) Object.keys(t).forEach((function(r) {
			var a = 1 === e.length ? e[0][r] : void 0;
			o = !!bu(a, t[r], n, r) && o
		}));
		else if ("array" === mo(t).toLowerCase())
			for (var r = 0; r < t.length; r++) o = !!bu(e[r], t[r], n, t[r].name) && o;
		if (o) return o;
		throw new Error("Params validate failed.")
	}

	function bu(e, t, n, o) {
		if (void 0 === t) return !0;
		var r = !0;
		return t.required && Lu(e) && (Pi.error("TIM [".concat(n, '] Missing required params: "').concat(o,
			'".')), r = !1), Lu(e) || mo(e).toLowerCase() === t.type.toLowerCase() || (Pi.error("TIM ["
			.concat(n, '] Invalid params: type check failed for "').concat(o, '".Expected ').concat(t
				.type, ".")), r = !1), t.validator && !t.validator(e) && (Pi.error("TIM [".concat(n,
			"] Invalid params: custom validator check failed for params.")), r = !1), r
	}
	var wu = {
			f: ge
		},
		Pu = O,
		Gu = Ee.f,
		Uu = Yt.forEach,
		Fu = Pe("hidden"),
		qu = ge("toPrimitive"),
		xu = Be.set,
		Vu = Be.getterFor("Symbol"),
		Ku = Object.prototype,
		Bu = O.Symbol,
		Hu = j("JSON", "stringify"),
		ju = Te.f,
		$u = Ee.f,
		Yu = aa.f,
		zu = P.f,
		Wu = oe("symbols"),
		Ju = oe("op-symbols"),
		Xu = oe("string-to-symbol-registry"),
		Qu = oe("symbol-to-string-registry"),
		Zu = oe("wks"),
		ec = O.QObject,
		tc = !ec || !ec.prototype || !ec.prototype.findChild,
		nc = R && L((function() {
			return 7 != qt($u({}, "a", {
				get: function() {
					return $u(this, "a", {
						value: 7
					}).a
				}
			})).a
		})) ? function(e, t, n) {
			var o = ju(Ku, t);
			o && delete Ku[t], $u(e, t, n), o && e !== Ku && $u(Ku, t, o)
		} : $u,
		oc = function(e, t) {
			var n = Wu[e] = qt(Bu.prototype);
			return xu(n, {
				type: "Symbol",
				tag: e,
				description: t
			}), R || (n.description = t), n
		},
		rc = function(e, t, n) {
			e === Ku && rc(Ju, t, n), Se(e);
			var o = _e(t);
			return Se(n), se(Wu, o) ? (n.enumerable ? (se(e, Fu) && e[Fu][o] && (e[Fu][o] = !1), n = qt(n, {
				enumerable: G(0, !1)
			})) : (se(e, Fu) || $u(e, Fu, G(1, {})), e[Fu][o] = !0), nc(e, o, n)) : $u(e, o, n)
		},
		ac = function(e, t) {
			Se(e);
			var n = K(t),
				o = Lt(n).concat(cc(n));
			return Uu(o, (function(t) {
				R && !sc.call(n, t) || rc(e, t, n[t])
			})), e
		},
		sc = function(e) {
			var t = _e(e),
				n = zu.call(this, t);
			return !(this === Ku && se(Wu, t) && !se(Ju, t)) && (!(n || !se(this, t) || !se(Wu, t) || se(this,
				Fu) && this[Fu][t]) || n)
		},
		ic = function(e, t) {
			var n = K(e),
				o = _e(t);
			if (n !== Ku || !se(Wu, o) || se(Ju, o)) {
				var r = ju(n, o);
				return !r || !se(Wu, o) || se(n, Fu) && n[Fu][o] || (r.enumerable = !0), r
			}
		},
		uc = function(e) {
			var t = Yu(K(e)),
				n = [];
			return Uu(t, (function(e) {
				se(Wu, e) || se(Ge, e) || n.push(e)
			})), n
		},
		cc = function(e) {
			var t = e === Ku,
				n = Yu(t ? Ju : K(e)),
				o = [];
			return Uu(n, (function(e) {
				!se(Wu, e) || t && !se(Ku, e) || o.push(Wu[e])
			})), o
		};
	if (Q || (He((Bu = function() {
			if (this instanceof Bu) throw TypeError("Symbol is not a constructor");
			var e = arguments.length && void 0 !== arguments[0] ? Mt(arguments[0]) : void 0,
				t = ce(e),
				n = function(e) {
					this === Ku && n.call(Ju, e), se(this, Fu) && se(this[Fu], t) && (this[Fu][
						t] = !1), nc(this, t, G(1, e))
				};
			return R && tc && nc(Ku, t, {
				configurable: !0,
				set: n
			}), oc(t, e)
		}).prototype, "toString", (function() {
			return Vu(this).tag
		})), He(Bu, "withoutSetter", (function(e) {
			return oc(ce(e), e)
		})), P.f = sc, Ee.f = rc, Te.f = ic, st.f = aa.f = uc, it.f = cc, wu.f = function(e) {
			return oc(ge(e), e)
		}, R && ($u(Bu.prototype, "description", {
			configurable: !0,
			get: function() {
				return Vu(this).description
			}
		}), He(Ku, "propertyIsEnumerable", sc, {
			unsafe: !0
		}))), vt({
			global: !0,
			wrap: !0,
			forced: !Q,
			sham: !Q
		}, {
			Symbol: Bu
		}), Uu(Lt(Zu), (function(e) {
			! function(e) {
				var t = Pu.Symbol || (Pu.Symbol = {});
				se(t, e) || Gu(t, e, {
					value: wu.f(e)
				})
			}(e)
		})), vt({
			target: "Symbol",
			stat: !0,
			forced: !Q
		}, {
			for: function(e) {
				var t = Mt(e);
				if (se(Xu, t)) return Xu[t];
				var n = Bu(t);
				return Xu[t] = n, Qu[n] = t, n
			},
			keyFor: function(e) {
				if (!ee(e)) throw TypeError(e + " is not a symbol");
				if (se(Qu, e)) return Qu[e]
			},
			useSetter: function() {
				tc = !0
			},
			useSimple: function() {
				tc = !1
			}
		}), vt({
			target: "Object",
			stat: !0,
			forced: !Q,
			sham: !R
		}, {
			create: function(e, t) {
				return void 0 === t ? qt(e) : ac(qt(e), t)
			},
			defineProperty: rc,
			defineProperties: ac,
			getOwnPropertyDescriptor: ic
		}), vt({
			target: "Object",
			stat: !0,
			forced: !Q
		}, {
			getOwnPropertyNames: uc,
			getOwnPropertySymbols: cc
		}), vt({
			target: "Object",
			stat: !0,
			forced: L((function() {
				it.f(1)
			}))
		}, {
			getOwnPropertySymbols: function(e) {
				return it.f(re(e))
			}
		}), Hu) {
		var lc = !Q || L((function() {
			var e = Bu();
			return "[null]" != Hu([e]) || "{}" != Hu({
				a: e
			}) || "{}" != Hu(Object(e))
		}));
		vt({
			target: "JSON",
			stat: !0,
			forced: lc
		}, {
			stringify: function(e, t, n) {
				for (var o, r = [e], a = 1; arguments.length > a;) r.push(arguments[a++]);
				if (o = t, (B(t) || void 0 !== e) && !ee(e)) return Kt(t) || (t = function(e, t) {
					if ("function" == typeof o && (t = o.call(this, e, t)), !ee(t))
						return t
				}), r[1] = t, Hu.apply(null, r)
			}
		})
	}
	Bu.prototype[qu] || Ce(Bu.prototype, qu, Bu.prototype.valueOf), Fn(Bu, "Symbol"), Ge[Fu] = !0;
	var pc = Ee.f,
		dc = O.Symbol;
	if (R && "function" == typeof dc && (!("description" in dc.prototype) || void 0 !== dc().description)) {
		var gc = {},
			hc = function() {
				var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
					t = this instanceof hc ? new dc(e) : void 0 === e ? dc() : dc(e);
				return "" === e && (gc[t] = !0), t
			};
		ct(hc, dc);
		var fc = hc.prototype = dc.prototype;
		fc.constructor = hc;
		var _c = fc.toString,
			mc = "Symbol(test)" == String(dc("test")),
			vc = /^Symbol\((.*)\)[^)]+$/;
		pc(fc, "description", {
			configurable: !0,
			get: function() {
				var e = B(this) ? this.valueOf() : this,
					t = _c.call(e);
				if (se(gc, e)) return "";
				var n = mc ? t.slice(7, -1) : t.replace(vc, "$1");
				return "" === n ? void 0 : n
			}
		}), vt({
			global: !0,
			forced: !0
		}, {
			Symbol: hc
		})
	}
	var Mc, yc = Te.f,
		Ic = "".startsWith,
		Tc = Math.min,
		Sc = fr("startsWith"),
		Dc = !(Sc || (Mc = yc(String.prototype, "startsWith"), !Mc || Mc.writable));
	vt({
		target: "String",
		proto: !0,
		forced: !Dc && !Sc
	}, {
		startsWith: function(e) {
			var t = Mt(V(this));
			gr(e);
			var n = We(Tc(arguments.length > 1 ? arguments[1] : void 0, t.length)),
				o = Mt(e);
			return Ic ? Ic.call(t, o, n) : t.slice(n, n + o.length) === o
		}
	});
	var Ec = {
			UNSEND: "unSend",
			SUCCESS: "success",
			FAIL: "fail"
		},
		Cc = {
			NOT_START: "notStart",
			PENDING: "pengding",
			RESOLVED: "resolved",
			REJECTED: "rejected"
		},
		Ac = function(e) {
			return !!e && (!!(vu(e) || Mu(e) || yu(e)) || (console.warn("非法的会话 ID:".concat(e,
				"。会话 ID 组成方式：C2C + userID（单聊）GROUP + groupID（群聊）@TIM#SYSTEM（系统通知会话）")), !1))
		},
		kc = "请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#",
		Nc = function(e) {
			return e.param ? "".concat(e.api, " ").concat(e.param, " ").concat(e.desc, "。").concat(kc).concat(e
				.api) : "".concat(e.api, " ").concat(e.desc, "。").concat(kc).concat(e.api)
		},
		Oc = {
			type: "String",
			required: !0
		},
		Lc = {
			type: "Array",
			required: !0
		},
		Rc = {
			type: "Object",
			required: !0
		},
		bc = {
			login: {
				userID: Oc,
				userSig: Oc
			},
			addToBlacklist: {
				userIDList: Lc
			},
			on: [{
				name: "eventName",
				type: "String",
				validator: function(e) {
					return "string" == typeof e && 0 !== e.length || (console.warn(Nc({
						api: "on",
						param: "eventName",
						desc: "类型必须为 String，且不能为空"
					})), !1)
				}
			}, {
				name: "handler",
				type: "Function",
				validator: function(e) {
					return "function" != typeof e ? (console.warn(Nc({
						api: "on",
						param: "handler",
						desc: "参数必须为 Function"
					})), !1) : ("" === e.name && console.warn(
						"on 接口的 handler 参数推荐使用具名函数。具名函数可以使用 off 接口取消订阅，匿名函数无法取消订阅。"), !0)
				}
			}],
			once: [{
				name: "eventName",
				type: "String",
				validator: function(e) {
					return "string" == typeof e && 0 !== e.length || (console.warn(Nc({
						api: "once",
						param: "eventName",
						desc: "类型必须为 String，且不能为空"
					})), !1)
				}
			}, {
				name: "handler",
				type: "Function",
				validator: function(e) {
					return "function" != typeof e ? (console.warn(Nc({
						api: "once",
						param: "handler",
						desc: "参数必须为 Function"
					})), !1) : ("" === e.name && console.warn("once 接口的 handler 参数推荐使用具名函数。"), !
						0)
				}
			}],
			off: [{
				name: "eventName",
				type: "String",
				validator: function(e) {
					return "string" == typeof e && 0 !== e.length || (console.warn(Nc({
						api: "off",
						param: "eventName",
						desc: "类型必须为 String，且不能为空"
					})), !1)
				}
			}, {
				name: "handler",
				type: "Function",
				validator: function(e) {
					return "function" != typeof e ? (console.warn(Nc({
						api: "off",
						param: "handler",
						desc: "参数必须为 Function"
					})), !1) : ("" === e.name && console.warn("off 接口无法为匿名函数取消监听事件。"), !0)
				}
			}],
			sendMessage: [t({
				name: "message"
			}, Rc)],
			getMessageList: {
				conversationID: t(t({}, Oc), {}, {
					validator: function(e) {
						return Ac(e)
					}
				}),
				nextReqMessageID: {
					type: "String"
				},
				count: {
					type: "Number",
					validator: function(e) {
						return !(!Ji(e) && !/^[1-9][0-9]*$/.test(e)) || (console.warn(Nc({
							api: "getMessageList",
							param: "count",
							desc: "必须为正整数"
						})), !1)
					}
				}
			},
			setMessageRead: {
				conversationID: t(t({}, Oc), {}, {
					validator: function(e) {
						return Ac(e)
					}
				})
			},
			getConversationProfile: [t(t({
				name: "conversationID"
			}, Oc), {}, {
				validator: function(e) {
					return Ac(e)
				}
			})],
			deleteConversation: [t(t({
				name: "conversationID"
			}, Oc), {}, {
				validator: function(e) {
					return Ac(e)
				}
			})],
			pinConversation: {
				conversationID: t(t({}, Oc), {}, {
					validator: function(e) {
						return Ac(e)
					}
				}),
				isPinned: t({}, {
					type: "Boolean",
					required: !0
				})
			},
			getGroupList: {
				groupProfileFilter: {
					type: "Array"
				}
			},
			getGroupProfile: {
				groupID: Oc,
				groupCustomFieldFilter: {
					type: "Array"
				},
				memberCustomFieldFilter: {
					type: "Array"
				}
			},
			getGroupProfileAdvance: {
				groupIDList: Lc
			},
			createGroup: {
				name: Oc
			},
			joinGroup: {
				groupID: Oc,
				type: {
					type: "String"
				},
				applyMessage: {
					type: "String"
				}
			},
			quitGroup: [t({
				name: "groupID"
			}, Oc)],
			handleApplication: {
				message: Rc,
				handleAction: Oc,
				handleMessage: {
					type: "String"
				}
			},
			changeGroupOwner: {
				groupID: Oc,
				newOwnerID: Oc
			},
			updateGroupProfile: {
				groupID: Oc,
				muteAllMembers: {
					type: "Boolean"
				}
			},
			dismissGroup: [t({
				name: "groupID"
			}, Oc)],
			searchGroupByID: [t({
				name: "groupID"
			}, Oc)],
			initGroupAttributes: {
				groupID: Oc,
				groupAttributes: t(t({}, Rc), {}, {
					validator: function(e) {
						var t = !0;
						return Object.keys(e).forEach((function(n) {
							if (!$i(e[n])) return console.warn(Nc({
								api: "initGroupAttributes",
								desc: "群属性 value 必须是字符串"
							})), t = !1
						})), t
					}
				})
			},
			setGroupAttributes: {
				groupID: Oc,
				groupAttributes: t(t({}, Rc), {}, {
					validator: function(e) {
						var t = !0;
						return Object.keys(e).forEach((function(n) {
							if (!$i(e[n])) return console.warn(Nc({
								api: "setGroupAttributes",
								desc: "群属性 value 必须是字符串"
							})), t = !1
						})), t
					}
				})
			},
			deleteGroupAttributes: {
				groupID: Oc,
				keyList: {
					type: "Array",
					validator: function(e) {
						if (Ji(e)) return console.warn(Nc({
							api: "deleteGroupAttributes",
							desc: "缺少必填参数：keyList"
						})), !1;
						if (!Wi(e)) return !1;
						if (!Lu(e)) {
							var t = !0;
							return e.forEach((function(e) {
								if (!$i(e)) return console.warn(Nc({
									api: "deleteGroupAttributes",
									desc: "群属性 key 必须是字符串"
								})), t = !1
							})), t
						}
						return !0
					}
				}
			},
			getGroupAttributes: {
				groupID: Oc,
				keyList: {
					type: "Array",
					validator: function(e) {
						if (Ji(e)) return console.warn(Nc({
							api: "getGroupAttributes",
							desc: "缺少必填参数：keyList"
						})), !1;
						if (!Wi(e)) return !1;
						if (!Lu(e)) {
							var t = !0;
							return e.forEach((function(e) {
								if (!$i(e)) return console.warn(Nc({
									api: "getGroupAttributes",
									desc: "群属性 key 必须是字符串"
								})), t = !1
							})), t
						}
						return !0
					}
				}
			},
			getGroupMemberList: {
				groupID: Oc,
				offset: {
					type: "Number"
				},
				count: {
					type: "Number"
				}
			},
			getGroupMemberProfile: {
				groupID: Oc,
				userIDList: Lc,
				memberCustomFieldFilter: {
					type: "Array"
				}
			},
			addGroupMember: {
				groupID: Oc,
				userIDList: Lc
			},
			setGroupMemberRole: {
				groupID: Oc,
				userID: Oc,
				role: Oc
			},
			setGroupMemberMuteTime: {
				groupID: Oc,
				userID: Oc,
				muteTime: {
					type: "Number",
					validator: function(e) {
						return e >= 0
					}
				}
			},
			setGroupMemberNameCard: {
				groupID: Oc,
				userID: {
					type: "String"
				},
				nameCard: {
					type: "String",
					validator: function(e) {
						return $i(e) ? (e.length, !0) : (console.warn(Nc({
							api: "setGroupMemberNameCard",
							param: "nameCard",
							desc: "类型必须为 String"
						})), !1)
					}
				}
			},
			setMessageRemindType: {
				groupID: Oc,
				messageRemindType: Oc
			},
			setGroupMemberCustomField: {
				groupID: Oc,
				userID: {
					type: "String"
				},
				memberCustomField: Lc
			},
			deleteGroupMember: {
				groupID: Oc
			},
			createTextMessage: {
				to: Oc,
				conversationType: Oc,
				payload: t(t({}, Rc), {}, {
					validator: function(e) {
						return zi(e) ? $i(e.text) ? 0 !== e.text.length || (console.warn(Nc({
							api: "createTextMessage",
							desc: "消息内容不能为空"
						})), !1) : (console.warn(Nc({
							api: "createTextMessage",
							param: "payload.text",
							desc: "类型必须为 String"
						})), !1) : (console.warn(Nc({
							api: "createTextMessage",
							param: "payload",
							desc: "类型必须为 plain object"
						})), !1)
					}
				})
			},
			createTextAtMessage: {
				to: Oc,
				conversationType: Oc,
				payload: t(t({}, Rc), {}, {
					validator: function(e) {
						return zi(e) ? $i(e.text) ? 0 === e.text.length ? (console.warn(Nc({
							api: "createTextAtMessage",
							desc: "消息内容不能为空"
						})), !1) : !(e.atUserList && !Wi(e.atUserList)) || (console.warn(Nc({
							api: "createTextAtMessage",
							desc: "payload.atUserList 类型必须为数组"
						})), !1) : (console.warn(Nc({
							api: "createTextAtMessage",
							param: "payload.text",
							desc: "类型必须为 String"
						})), !1) : (console.warn(Nc({
							api: "createTextAtMessage",
							param: "payload",
							desc: "类型必须为 plain object"
						})), !1)
					}
				})
			},
			createCustomMessage: {
				to: Oc,
				conversationType: Oc,
				payload: t(t({}, Rc), {}, {
					validator: function(e) {
						return zi(e) ? e.data && !$i(e.data) ? (console.warn(Nc({
							api: "createCustomMessage",
							param: "payload.data",
							desc: "类型必须为 String"
						})), !1) : e.description && !$i(e.description) ? (console.warn(Nc({
							api: "createCustomMessage",
							param: "payload.description",
							desc: "类型必须为 String"
						})), !1) : !(e.extension && !$i(e.extension)) || (console.warn(Nc({
							api: "createCustomMessage",
							param: "payload.extension",
							desc: "类型必须为 String"
						})), !1) : (console.warn(Nc({
							api: "createCustomMessage",
							param: "payload",
							desc: "类型必须为 plain object"
						})), !1)
					}
				})
			},
			createImageMessage: {
				to: Oc,
				conversationType: Oc,
				payload: t(t({}, Rc), {}, {
					validator: function(e) {
						if (!zi(e)) return console.warn(Nc({
							api: "createImageMessage",
							param: "payload",
							desc: "类型必须为 plain object"
						})), !1;
						if (Ji(e.file)) return console.warn(Nc({
							api: "createImageMessage",
							param: "payload.file",
							desc: "不能为 undefined"
						})), !1;
						if (si) {
							if (!(e.file instanceof HTMLInputElement || Hi(e.file))) return zi(e
									.file) && "undefined" != typeof uni ? 0 !== e.file
								.tempFilePaths.length && 0 !== e.file.tempFiles.length || (
									console.warn(Nc({
										api: "createImageMessage",
										param: "payload.file",
										desc: "您没有选择文件，无法发送"
									})), !1) : (console.warn(Nc({
									api: "createImageMessage",
									param: "payload.file",
									desc: "类型必须是 HTMLInputElement 或 File"
								})), !1);
							if (e.file instanceof HTMLInputElement && 0 === e.file.files.length)
								return console.warn(Nc({
									api: "createImageMessage",
									param: "payload.file",
									desc: "您没有选择文件，无法发送"
								})), !1
						}
						return !0
					},
					onProgress: {
						type: "Function",
						required: !1,
						validator: function(e) {
							return Ji(e) && console.warn(Nc({
								api: "createImageMessage",
								desc: "没有 onProgress 回调，您将无法获取上传进度"
							})), !0
						}
					}
				})
			},
			createAudioMessage: {
				to: Oc,
				conversationType: Oc,
				payload: t(t({}, Rc), {}, {
					validator: function(e) {
						return !!zi(e) || (console.warn(Nc({
							api: "createAudioMessage",
							param: "payload",
							desc: "类型必须为 plain object"
						})), !1)
					}
				}),
				onProgress: {
					type: "Function",
					required: !1,
					validator: function(e) {
						return Ji(e) && console.warn(Nc({
							api: "createAudioMessage",
							desc: "没有 onProgress 回调，您将无法获取上传进度"
						})), !0
					}
				}
			},
			createVideoMessage: {
				to: Oc,
				conversationType: Oc,
				payload: t(t({}, Rc), {}, {
					validator: function(e) {
						if (!zi(e)) return console.warn(Nc({
							api: "createVideoMessage",
							param: "payload",
							desc: "类型必须为 plain object"
						})), !1;
						if (Ji(e.file)) return console.warn(Nc({
							api: "createVideoMessage",
							param: "payload.file",
							desc: "不能为 undefined"
						})), !1;
						if (si) {
							if (!(e.file instanceof HTMLInputElement || Hi(e.file))) return zi(e
									.file) && "undefined" != typeof uni ? !!Hi(e.file
								.tempFile) || (console.warn(Nc({
									api: "createVideoMessage",
									param: "payload.file",
									desc: "您没有选择文件，无法发送"
								})), !1) : (console.warn(Nc({
									api: "createVideoMessage",
									param: "payload.file",
									desc: "类型必须是 HTMLInputElement 或 File"
								})), !1);
							if (e.file instanceof HTMLInputElement && 0 === e.file.files.length)
								return console.warn(Nc({
									api: "createVideoMessage",
									param: "payload.file",
									desc: "您没有选择文件，无法发送"
								})), !1
						}
						return !0
					}
				}),
				onProgress: {
					type: "Function",
					required: !1,
					validator: function(e) {
						return Ji(e) && console.warn(Nc({
							api: "createVideoMessage",
							desc: "没有 onProgress 回调，您将无法获取上传进度"
						})), !0
					}
				}
			},
			createFaceMessage: {
				to: Oc,
				conversationType: Oc,
				payload: t(t({}, Rc), {}, {
					validator: function(e) {
						return zi(e) ? ji(e.index) ? !!$i(e.data) || (console.warn(Nc({
							api: "createFaceMessage",
							param: "payload.data",
							desc: "类型必须为 String"
						})), !1) : (console.warn(Nc({
							api: "createFaceMessage",
							param: "payload.index",
							desc: "类型必须为 Number"
						})), !1) : (console.warn(Nc({
							api: "createFaceMessage",
							param: "payload",
							desc: "类型必须为 plain object"
						})), !1)
					}
				})
			},
			createFileMessage: {
				to: Oc,
				conversationType: Oc,
				payload: t(t({}, Rc), {}, {
					validator: function(e) {
						if (!zi(e)) return console.warn(Nc({
							api: "createFileMessage",
							param: "payload",
							desc: "类型必须为 plain object"
						})), !1;
						if (Ji(e.file)) return console.warn(Nc({
							api: "createFileMessage",
							param: "payload.file",
							desc: "不能为 undefined"
						})), !1;
						if (si) {
							if (!(e.file instanceof HTMLInputElement || Hi(e.file))) return zi(e
									.file) && "undefined" != typeof uni ? 0 !== e.file
								.tempFilePaths.length && 0 !== e.file.tempFiles.length || (
									console.warn(Nc({
										api: "createFileMessage",
										param: "payload.file",
										desc: "您没有选择文件，无法发送"
									})), !1) : (console.warn(Nc({
									api: "createFileMessage",
									param: "payload.file",
									desc: "类型必须是 HTMLInputElement 或 File"
								})), !1);
							if (e.file instanceof HTMLInputElement && 0 === e.file.files.length)
								return console.warn(Nc({
									api: "createFileMessage",
									desc: "您没有选择文件，无法发送"
								})), !1
						}
						return !0
					}
				}),
				onProgress: {
					type: "Function",
					required: !1,
					validator: function(e) {
						return Ji(e) && console.warn(Nc({
							api: "createFileMessage",
							desc: "没有 onProgress 回调，您将无法获取上传进度"
						})), !0
					}
				}
			},
			createMergerMessage: {
				to: Oc,
				conversationType: Oc,
				payload: t(t({}, Rc), {}, {
					validator: function(e) {
						if (Lu(e.messageList)) return console.warn(Nc({
							api: "createMergerMessage",
							desc: "不能为空数组"
						})), !1;
						if (Lu(e.compatibleText)) return console.warn(Nc({
							api: "createMergerMessage",
							desc: "类型必须为 String，且不能为空"
						})), !1;
						var t = !1;
						return e.messageList.forEach((function(e) {
							e.status === Ec.FAIL && (t = !0)
						})), !t || (console.warn(Nc({
							api: "createMergerMessage",
							desc: "不支持合并已发送失败的消息"
						})), !1)
					}
				})
			},
			revokeMessage: [t(t({
				name: "message"
			}, Rc), {}, {
				validator: function(e) {
					return Lu(e) ? (console.warn("revokeMessage 请传入消息（Message）实例"), !1) : e
						.conversationType === ro.CONV_SYSTEM ? (console.warn(
							"revokeMessage 不能撤回系统会话消息，只能撤回单聊消息或群消息"), !1) : !0 !== e
						.isRevoked || (console.warn("revokeMessage 消息已经被撤回，请勿重复操作"), !1)
				}
			})],
			deleteMessage: [t(t({
				name: "messageList"
			}, Lc), {}, {
				validator: function(e) {
					return !Lu(e) || (console.warn(Nc({
						api: "deleteMessage",
						param: "messageList",
						desc: "不能为空数组"
					})), !1)
				}
			})],
			getUserProfile: {
				userIDList: {
					type: "Array",
					validator: function(e) {
						return Wi(e) ? (0 === e.length && console.warn(Nc({
							api: "getUserProfile",
							param: "userIDList",
							desc: "不能为空数组"
						})), !0) : (console.warn(Nc({
							api: "getUserProfile",
							param: "userIDList",
							desc: "必须为数组"
						})), !1)
					}
				}
			},
			updateMyProfile: {
				profileCustomField: {
					type: "Array",
					validator: function(e) {
						return !!Ji(e) || (!!Wi(e) || (console.warn(Nc({
							api: "updateMyProfile",
							param: "profileCustomField",
							desc: "必须为数组"
						})), !1))
					}
				}
			},
			addFriend: {
				to: Oc,
				source: {
					type: "String",
					required: !0,
					validator: function(e) {
						return !!e && (e.startsWith("AddSource_Type_") ? !(e.replace("AddSource_Type_", "")
							.length > 8) || (console.warn(Nc({
							api: "addFriend",
							desc: "加好友来源字段的关键字长度不得超过8字节"
						})), !1) : (console.warn(Nc({
							api: "addFriend",
							desc: "加好友来源字段的前缀必须是：AddSource_Type_"
						})), !1))
					}
				},
				remark: {
					type: "String",
					required: !1,
					validator: function(e) {
						return !($i(e) && e.length > 96) || (console.warn(Nc({
							api: "updateFriend",
							desc: " 备注长度最长不得超过 96 个字节"
						})), !1)
					}
				}
			},
			deleteFriend: {
				userIDList: Lc
			},
			checkFriend: {
				userIDList: Lc
			},
			getFriendProfile: {
				userIDList: Lc
			},
			updateFriend: {
				userID: Oc,
				remark: {
					type: "String",
					required: !1,
					validator: function(e) {
						return !($i(e) && e.length > 96) || (console.warn(Nc({
							api: "updateFriend",
							desc: " 备注长度最长不得超过 96 个字节"
						})), !1)
					}
				},
				friendCustomField: {
					type: "Array",
					required: !1,
					validator: function(e) {
						if (e) {
							if (!Wi(e)) return console.warn(Nc({
								api: "updateFriend",
								param: "friendCustomField",
								desc: "必须为数组"
							})), !1;
							var t = !0;
							return e.forEach((function(e) {
								return $i(e.key) && -1 !== e.key.indexOf("Tag_SNS_Custom") ? $i(
									e.value) ? e.value.length > 8 ? (console.warn(Nc({
									api: "updateFriend",
									desc: "好友自定义字段的关键字长度不得超过8字节"
								})), t = !1) : void 0 : (console.warn(Nc({
									api: "updateFriend",
									desc: "类型必须为 String"
								})), t = !1) : (console.warn(Nc({
									api: "updateFriend",
									desc: "好友自定义字段的前缀必须是 Tag_SNS_Custom"
								})), t = !1)
							})), t
						}
						return !0
					}
				}
			},
			acceptFriendApplication: {
				userID: Oc
			},
			refuseFriendApplication: {
				userID: Oc
			},
			deleteFriendApplication: {
				userID: Oc
			},
			createFriendGroup: {
				name: Oc
			},
			deleteFriendGroup: {
				name: Oc
			},
			addToFriendGroup: {
				name: Oc,
				userIDList: Lc
			},
			removeFromFriendGroup: {
				name: Oc,
				userIDList: Lc
			},
			renameFriendGroup: {
				oldName: Oc,
				newName: Oc
			}
		},
		wc = {
			login: "login",
			logout: "logout",
			on: "on",
			once: "once",
			off: "off",
			setLogLevel: "setLogLevel",
			registerPlugin: "registerPlugin",
			destroy: "destroy",
			createTextMessage: "createTextMessage",
			createTextAtMessage: "createTextAtMessage",
			createImageMessage: "createImageMessage",
			createAudioMessage: "createAudioMessage",
			createVideoMessage: "createVideoMessage",
			createCustomMessage: "createCustomMessage",
			createFaceMessage: "createFaceMessage",
			createFileMessage: "createFileMessage",
			createMergerMessage: "createMergerMessage",
			downloadMergerMessage: "downloadMergerMessage",
			createForwardMessage: "createForwardMessage",
			sendMessage: "sendMessage",
			resendMessage: "resendMessage",
			revokeMessage: "revokeMessage",
			deleteMessage: "deleteMessage",
			getMessageList: "getMessageList",
			setMessageRead: "setMessageRead",
			getConversationList: "getConversationList",
			getConversationProfile: "getConversationProfile",
			deleteConversation: "deleteConversation",
			pinConversation: "pinConversation",
			getGroupList: "getGroupList",
			getGroupProfile: "getGroupProfile",
			createGroup: "createGroup",
			joinGroup: "joinGroup",
			updateGroupProfile: "updateGroupProfile",
			quitGroup: "quitGroup",
			dismissGroup: "dismissGroup",
			changeGroupOwner: "changeGroupOwner",
			searchGroupByID: "searchGroupByID",
			setMessageRemindType: "setMessageRemindType",
			handleGroupApplication: "handleGroupApplication",
			initGroupAttributes: "initGroupAttributes",
			setGroupAttributes: "setGroupAttributes",
			deleteGroupAttributes: "deleteGroupAttributes",
			getGroupAttributes: "getGroupAttributes",
			getGroupMemberProfile: "getGroupMemberProfile",
			getGroupMemberList: "getGroupMemberList",
			addGroupMember: "addGroupMember",
			deleteGroupMember: "deleteGroupMember",
			setGroupMemberNameCard: "setGroupMemberNameCard",
			setGroupMemberMuteTime: "setGroupMemberMuteTime",
			setGroupMemberRole: "setGroupMemberRole",
			setGroupMemberCustomField: "setGroupMemberCustomField",
			getGroupOnlineMemberCount: "getGroupOnlineMemberCount",
			getMyProfile: "getMyProfile",
			getUserProfile: "getUserProfile",
			updateMyProfile: "updateMyProfile",
			getBlacklist: "getBlacklist",
			addToBlacklist: "addToBlacklist",
			removeFromBlacklist: "removeFromBlacklist",
			getFriendList: "getFriendList",
			addFriend: "addFriend",
			deleteFriend: "deleteFriend",
			checkFriend: "checkFriend",
			updateFriend: "updateFriend",
			getFriendProfile: "getFriendProfile",
			getFriendApplicationList: "getFriendApplicationList",
			refuseFriendApplication: "refuseFriendApplication",
			deleteFriendApplication: "deleteFriendApplication",
			acceptFriendApplication: "acceptFriendApplication",
			setFriendApplicationRead: "setFriendApplicationRead",
			getFriendGroupList: "getFriendGroupList",
			createFriendGroup: "createFriendGroup",
			renameFriendGroup: "renameFriendGroup",
			deleteFriendGroup: "deleteFriendGroup",
			addToFriendGroup: "addToFriendGroup",
			removeFromFriendGroup: "removeFromFriendGroup",
			callExperimentalAPI: "callExperimentalAPI"
		},
		Pc = !!ha && L((function() {
			ha.prototype.finally.call({
				then: function() {}
			}, (function() {}))
		}));
	if (vt({
			target: "Promise",
			proto: !0,
			real: !0,
			forced: Pc
		}, {
			finally: function(e) {
				var t = Ta(this, j("Promise")),
					n = "function" == typeof e;
				return this.then(n ? function(n) {
					return us(t, e()).then((function() {
						return n
					}))
				} : e, n ? function(n) {
					return us(t, e()).then((function() {
						throw n
					}))
				} : e)
			}
		}), "function" == typeof ha) {
		var Gc = j("Promise").prototype.finally;
		ha.prototype.finally !== Gc && He(ha.prototype, "finally", Gc, {
			unsafe: !0
		})
	}
	var Uc = [].slice,
		Fc = /MSIE .\./.test($),
		qc = function(e) {
			return function(t, n) {
				var o = arguments.length > 2,
					r = o ? Uc.call(arguments, 2) : void 0;
				return e(o ? function() {
					("function" == typeof t ? t : Function(t)).apply(this, r)
				} : t, n)
			}
		};
	vt({
		global: !0,
		bind: !0,
		forced: Fc
	}, {
		setTimeout: qc(O.setTimeout),
		setInterval: qc(O.setInterval)
	});
	var xc = Yt.filter,
		Vc = Qn("filter");
	vt({
		target: "Array",
		proto: !0,
		forced: !Vc
	}, {
		filter: function(e) {
			return xc(this, e, arguments.length > 1 ? arguments[1] : void 0)
		}
	});
	var Kc, Bc = "sign",
		Hc = "message",
		jc = "user",
		$c = "c2c",
		Yc = "group",
		zc = "sns",
		Wc = "groupMember",
		Jc = "conversation",
		Xc = "context",
		Qc = "storage",
		Zc = "eventStat",
		el = "netMonitor",
		tl = "bigDataChannel",
		nl = "upload",
		ol = "plugin",
		rl = "syncUnreadMessage",
		al = "session",
		sl = "channel",
		il = "message_loss_detection",
		ul = "cloudControl",
		cl = "pullGroupMessage",
		ll = "qualityStat",
		pl = function() {
			function e(t) {
				o(this, e), this._moduleManager = t, this._className = ""
			}
			return a(e, [{
				key: "isLoggedIn",
				value: function() {
					return this._moduleManager.getModule(Xc).isLoggedIn()
				}
			}, {
				key: "isOversea",
				value: function() {
					return this._moduleManager.getModule(Xc).isOversea()
				}
			}, {
				key: "getMyUserID",
				value: function() {
					return this._moduleManager.getModule(Xc).getUserID()
				}
			}, {
				key: "getModule",
				value: function(e) {
					return this._moduleManager.getModule(e)
				}
			}, {
				key: "getPlatform",
				value: function() {
					return ui
				}
			}, {
				key: "getNetworkType",
				value: function() {
					return this._moduleManager.getModule(el).getNetworkType()
				}
			}, {
				key: "probeNetwork",
				value: function() {
					return this._moduleManager.getModule(el).probe()
				}
			}, {
				key: "getCloudConfig",
				value: function(e) {
					return this._moduleManager.getModule(ul).getCloudConfig(e)
				}
			}, {
				key: "emitOuterEvent",
				value: function(e, t) {
					this._moduleManager.getOuterEmitterInstance().emit(e, t)
				}
			}, {
				key: "emitInnerEvent",
				value: function(e, t) {
					this._moduleManager.getInnerEmitterInstance().emit(e, t)
				}
			}, {
				key: "getInnerEmitterInstance",
				value: function() {
					return this._moduleManager.getInnerEmitterInstance()
				}
			}, {
				key: "generateTjgID",
				value: function(e) {
					return this._moduleManager.getModule(Xc).getTinyID() + "-" + e.random
				}
			}, {
				key: "filterModifiedMessage",
				value: function(e) {
					if (!Lu(e)) {
						var t = e.filter((function(e) {
							return !0 === e.isModified
						}));
						t.length > 0 && this.emitOuterEvent(oo.MESSAGE_MODIFIED, t)
					}
				}
			}, {
				key: "filterUnmodifiedMessage",
				value: function(e) {
					return Lu(e) ? [] : e.filter((function(e) {
						return !1 === e.isModified
					}))
				}
			}, {
				key: "request",
				value: function(e) {
					return this._moduleManager.getModule(al).request(e)
				}
			}]), e
		}(),
		dl = "wslogin",
		gl = "wslogout",
		hl = "wshello",
		fl = "getmsg",
		_l = "authkey",
		ml = "sendmsg",
		vl = "send_group_msg",
		Ml = "portrait_get_all",
		yl = "portrait_set",
		Il = "black_list_get",
		Tl = "black_list_add",
		Sl = "black_list_delete",
		Dl = "msgwithdraw",
		El = "msgreaded",
		Cl = "getroammsg",
		Al = "get_peer_read_time",
		kl = "delete_c2c_msg_ramble",
		Nl = "page_get",
		Ol = "get",
		Ll = "delete",
		Rl = "top",
		bl = "deletemsg",
		wl = "get_joined_group_list",
		Pl = "get_group_info",
		Gl = "create_group",
		Ul = "destroy_group",
		Fl = "modify_group_base_info",
		ql = "apply_join_group",
		xl = "apply_join_group_noauth",
		Vl = "quit_group",
		Kl = "get_group_public_info",
		Bl = "change_group_owner",
		Hl = "handle_apply_join_group",
		jl = "handle_invite_join_group",
		$l = "group_msg_recall",
		Yl = "msg_read_report",
		zl = "group_msg_get",
		Wl = "get_pendency",
		Jl = "deletemsg",
		Xl = "get_msg",
		Ql = "get_msg_noauth",
		Zl = "get_online_member_num",
		ep = "delete_group_ramble_msg_by_seq",
		tp = "set_group_attr",
		np = "modify_group_attr",
		op = "delete_group_attr",
		rp = "clear_group_attr",
		ap = "get_group_attr",
		sp = "get_group_member_info",
		ip = "get_specified_group_member_info",
		up = "add_group_member",
		cp = "delete_group_member",
		lp = "modify_group_member_info",
		pp = "cos",
		dp = "pre_sig",
		gp = "tim_web_report_v2",
		hp = "alive",
		fp = "msg_push",
		_p = "ws_msg_push_ack",
		mp = "stat_forceoffline",
		vp = "save_relay_json_msg",
		Mp = "get_relay_json_msg",
		yp = "fetch_config",
		Ip = "push_configv2",
		Tp = {
			NO_SDKAPPID: 2e3,
			NO_ACCOUNT_TYPE: 2001,
			NO_IDENTIFIER: 2002,
			NO_USERSIG: 2003,
			NO_TINYID: 2022,
			NO_A2KEY: 2023,
			USER_NOT_LOGGED_IN: 2024,
			REPEAT_LOGIN: 2025,
			COS_UNDETECTED: 2040,
			COS_GET_SIG_FAIL: 2041,
			MESSAGE_SEND_FAIL: 2100,
			MESSAGE_LIST_CONSTRUCTOR_NEED_OPTIONS: 2103,
			MESSAGE_SEND_NEED_MESSAGE_INSTANCE: 2105,
			MESSAGE_SEND_INVALID_CONVERSATION_TYPE: 2106,
			MESSAGE_FILE_IS_EMPTY: 2108,
			MESSAGE_ONPROGRESS_FUNCTION_ERROR: 2109,
			MESSAGE_REVOKE_FAIL: 2110,
			MESSAGE_DELETE_FAIL: 2111,
			MESSAGE_IMAGE_SELECT_FILE_FIRST: 2251,
			MESSAGE_IMAGE_TYPES_LIMIT: 2252,
			MESSAGE_IMAGE_SIZE_LIMIT: 2253,
			MESSAGE_AUDIO_UPLOAD_FAIL: 2300,
			MESSAGE_AUDIO_SIZE_LIMIT: 2301,
			MESSAGE_VIDEO_UPLOAD_FAIL: 2350,
			MESSAGE_VIDEO_SIZE_LIMIT: 2351,
			MESSAGE_VIDEO_TYPES_LIMIT: 2352,
			MESSAGE_FILE_UPLOAD_FAIL: 2400,
			MESSAGE_FILE_SELECT_FILE_FIRST: 2401,
			MESSAGE_FILE_SIZE_LIMIT: 2402,
			MESSAGE_FILE_URL_IS_EMPTY: 2403,
			MESSAGE_MERGER_TYPE_INVALID: 2450,
			MESSAGE_MERGER_KEY_INVALID: 2451,
			MESSAGE_MERGER_DOWNLOAD_FAIL: 2452,
			MESSAGE_FORWARD_TYPE_INVALID: 2453,
			CONVERSATION_NOT_FOUND: 2500,
			USER_OR_GROUP_NOT_FOUND: 2501,
			CONVERSATION_UN_RECORDED_TYPE: 2502,
			ILLEGAL_GROUP_TYPE: 2600,
			CANNOT_JOIN_WORK: 2601,
			CANNOT_CHANGE_OWNER_IN_AVCHATROOM: 2620,
			CANNOT_CHANGE_OWNER_TO_SELF: 2621,
			CANNOT_DISMISS_Work: 2622,
			MEMBER_NOT_IN_GROUP: 2623,
			CANNOT_USE_GRP_ATTR_NOT_AVCHATROOM: 2641,
			CANNOT_USE_GRP_ATTR_AVCHATROOM_UNJOIN: 2642,
			JOIN_GROUP_FAIL: 2660,
			CANNOT_ADD_MEMBER_IN_AVCHATROOM: 2661,
			CANNOT_JOIN_NON_AVCHATROOM_WITHOUT_LOGIN: 2662,
			CANNOT_KICK_MEMBER_IN_AVCHATROOM: 2680,
			NOT_OWNER: 2681,
			CANNOT_SET_MEMBER_ROLE_IN_WORK_AND_AVCHATROOM: 2682,
			INVALID_MEMBER_ROLE: 2683,
			CANNOT_SET_SELF_MEMBER_ROLE: 2684,
			CANNOT_MUTE_SELF: 2685,
			NOT_MY_FRIEND: 2700,
			ALREADY_MY_FRIEND: 2701,
			FRIEND_GROUP_EXISTED: 2710,
			FRIEND_GROUP_NOT_EXIST: 2711,
			FRIEND_APPLICATION_NOT_EXIST: 2716,
			UPDATE_PROFILE_INVALID_PARAM: 2721,
			UPDATE_PROFILE_NO_KEY: 2722,
			ADD_BLACKLIST_INVALID_PARAM: 2740,
			DEL_BLACKLIST_INVALID_PARAM: 2741,
			CANNOT_ADD_SELF_TO_BLACKLIST: 2742,
			ADD_FRIEND_INVALID_PARAM: 2760,
			NETWORK_ERROR: 2800,
			NETWORK_TIMEOUT: 2801,
			NETWORK_BASE_OPTIONS_NO_URL: 2802,
			NETWORK_UNDEFINED_SERVER_NAME: 2803,
			NETWORK_PACKAGE_UNDEFINED: 2804,
			NO_NETWORK: 2805,
			CONVERTOR_IRREGULAR_PARAMS: 2900,
			NOTICE_RUNLOOP_UNEXPECTED_CONDITION: 2901,
			NOTICE_RUNLOOP_OFFSET_LOST: 2902,
			UNCAUGHT_ERROR: 2903,
			GET_LONGPOLL_ID_FAILED: 2904,
			INVALID_OPERATION: 2905,
			CANNOT_FIND_PROTOCOL: 2997,
			CANNOT_FIND_MODULE: 2998,
			SDK_IS_NOT_READY: 2999,
			LONG_POLL_KICK_OUT: 91101,
			MESSAGE_A2KEY_EXPIRED: 20002,
			ACCOUNT_A2KEY_EXPIRED: 70001,
			LONG_POLL_API_PARAM_ERROR: 90001,
			HELLO_ANSWER_KICKED_OUT: 1002
		},
		Sp = "无 SDKAppID",
		Dp = "无 userID",
		Ep = "无 userSig",
		Cp = "无 tinyID",
		Ap = "无 a2key",
		kp = "用户未登录",
		Np = "重复登录",
		Op = "未检测到 COS 上传插件",
		Lp = "获取 COS 预签名 URL 失败",
		Rp = "消息发送失败",
		bp = "需要 Message 的实例",
		wp = 'Message.conversationType 只能为 "C2C" 或 "GROUP"',
		Pp = "无法发送空文件",
		Gp = "回调函数运行时遇到错误，请检查接入侧代码",
		Up = "消息撤回失败",
		Fp = "消息删除失败",
		qp = "请先选择一个图片",
		xp = "只允许上传 jpg png jpeg gif bmp格式的图片",
		Vp = "图片大小超过20M，无法发送",
		Kp = "语音上传失败",
		Bp = "语音大小大于20M，无法发送",
		Hp = "视频上传失败",
		jp = "视频大小超过100M，无法发送",
		$p = "只允许上传 mp4 格式的视频",
		Yp = "文件上传失败",
		zp = "请先选择一个文件",
		Wp = "文件大小超过100M，无法发送 ",
		Jp = "缺少必要的参数文件 URL",
		Xp = "非合并消息",
		Qp = "合并消息的 messageKey 无效",
		Zp = "下载合并消息失败",
		ed = "选择的消息类型（如群提示消息）不可以转发",
		td = "没有找到相应的会话，请检查传入参数",
		nd = "没有找到相应的用户或群组，请检查传入参数",
		od = "未记录的会话类型",
		rd = "非法的群类型，请检查传入参数",
		ad = "不能加入 Work 类型的群组",
		sd = "AVChatRoom 类型的群组不能转让群主",
		id = "不能把群主转让给自己",
		ud = "不能解散 Work 类型的群组",
		cd = "用户不在该群组内",
		ld = "加群失败，请检查传入参数或重试",
		pd = "AVChatRoom 类型的群不支持邀请群成员",
		dd = "非 AVChatRoom 类型的群组不允许匿名加群，请先登录后再加群",
		gd = "不能在 AVChatRoom 类型的群组踢人",
		hd = "你不是群主，只有群主才有权限操作",
		fd = "不能在 Work / AVChatRoom 类型的群中设置群成员身份",
		_d = "不合法的群成员身份，请检查传入参数",
		md = "不能设置自己的群成员身份，请检查传入参数",
		vd = "不能将自己禁言，请检查传入参数",
		Md = "传入 updateMyProfile 接口的参数无效",
		yd = "updateMyProfile 无标配资料字段或自定义资料字段",
		Id = "传入 addToBlacklist 接口的参数无效",
		Td = "传入 removeFromBlacklist 接口的参数无效",
		Sd = "不能拉黑自己",
		Dd = "网络错误",
		Ed = "请求超时",
		Cd = "未连接到网络",
		Ad = "无效操作，如调用了未定义或者未实现的方法等",
		kd = "无法找到协议",
		Nd = "无法找到模块",
		Od = "接口需要 SDK 处于 ready 状态后才能调用",
		Ld = "upload",
		Rd = "networkRTT",
		bd = "messageE2EDelay",
		wd = "sendMessageC2C",
		Pd = "sendMessageGroup",
		Gd = "sendMessageGroupAV",
		Ud = "sendMessageRichMedia",
		Fd = "cosUpload",
		qd = "messageReceivedGroup",
		xd = "messageReceivedGroupAVPush",
		Vd = "messageReceivedGroupAVPull",
		Kd = (s(Kc = {}, Rd, 2), s(Kc, bd, 3), s(Kc, wd, 4), s(Kc, Pd, 5), s(Kc, Gd, 6), s(Kc, Ud, 7), s(Kc, qd,
			8), s(Kc, xd, 9), s(Kc, Vd, 10), s(Kc, Fd, 11), Kc),
		Bd = {
			info: 4,
			warning: 5,
			error: 6
		},
		Hd = {
			wifi: 1,
			"2g": 2,
			"3g": 3,
			"4g": 4,
			"5g": 5,
			unknown: 6,
			none: 7,
			online: 8
		},
		jd = function() {
			function e(t) {
				o(this, e), this.eventType = 0, this.timestamp = 0, this.networkType = 8, this.code = 0, this
					.message = "", this.moreMessage = "", this.extension = t, this.costTime = 0, this
					.duplicate = !1, this.level = 4, this._sentFlag = !1, this._startts = Ui()
			}
			return a(e, [{
				key: "updateTimeStamp",
				value: function() {
					this.timestamp = Ui()
				}
			}, {
				key: "start",
				value: function(e) {
					return this._startts = e, this
				}
			}, {
				key: "end",
				value: function() {
					var e = this,
						t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					if (!this._sentFlag) {
						var n = Ui();
						this.costTime = n - this._startts, this.setMoreMessage("host:".concat(
							Su(), " startts:").concat(this._startts, " endts:").concat(
							n)), t ? (this._sentFlag = !0, this._eventStatModule && this
							._eventStatModule.pushIn(this)) : setTimeout((function() {
							e._sentFlag = !0, e._eventStatModule && e
								._eventStatModule.pushIn(e)
						}), 0)
					}
				}
			}, {
				key: "setError",
				value: function(e, t, n) {
					return e instanceof Error ? (this._sentFlag || (this.setNetworkType(n), t ?
						(e.code && this.setCode(e.code), e.message && this
							.setMoreMessage(e.message)) : (this.setCode(Tp.NO_NETWORK),
							this.setMoreMessage(Cd)), this.setLevel("error")), this) : (Ki
						.warn(
							"SSOLogData.setError value not instanceof Error, please check!"
							), this)
				}
			}, {
				key: "setCode",
				value: function(e) {
					return Ji(e) || this._sentFlag || ("ECONNABORTED" === e && (this.code =
						103), ji(e) ? this.code = e : Ki.warn(
							"SSOLogData.setCode value not a number, please check!", e, n(e))
						), this
				}
			}, {
				key: "setMessage",
				value: function(e) {
					return Ji(e) || this._sentFlag || (ji(e) && (this.message = e.toString()),
						$i(e) && (this.message = e)), this
				}
			}, {
				key: "setLevel",
				value: function(e) {
					return Ji(e) || this._sentFlag || (this.level = Bd[e]), this
				}
			}, {
				key: "setMoreMessage",
				value: function(e) {
					return Lu(this.moreMessage) ? this.moreMessage = "".concat(e) : this
						.moreMessage += " ".concat(e), this
				}
			}, {
				key: "setNetworkType",
				value: function(e) {
					return Ji(e) || Ji(Hd[e]) ? Ki.warn(
							"SSOLogData.setNetworkType value is undefined, please check!") :
						this.networkType = Hd[e], this
				}
			}, {
				key: "getStartTs",
				value: function() {
					return this._startts
				}
			}], [{
				key: "bindEventStatModule",
				value: function(t) {
					e.prototype._eventStatModule = t
				}
			}]), e
		}(),
		$d = "sdkConstruct",
		Yd = "sdkReady",
		zd = "login",
		Wd = "logout",
		Jd = "kickedOut",
		Xd = "registerPlugin",
		Qd = "wsConnect",
		Zd = "wsOnOpen",
		eg = "wsOnClose",
		tg = "wsOnError",
		ng = "getCosAuthKey",
		og = "getCosPreSigUrl",
		rg = "upload",
		ag = "sendMessage",
		sg = "getC2CRoamingMessages",
		ig = "getGroupRoamingMessages",
		ug = "revokeMessage",
		cg = "deleteMessage",
		lg = "setC2CMessageRead",
		pg = "setGroupMessageRead",
		dg = "emptyMessageBody",
		gg = "getPeerReadTime",
		hg = "uploadMergerMessage",
		fg = "downloadMergerMessage",
		_g = "jsonParseError",
		mg = "messageE2EDelayException",
		vg = "getConversationList",
		Mg = "getConversationProfile",
		yg = "deleteConversation",
		Ig = "pinConversation",
		Tg = "getConversationListInStorage",
		Sg = "syncConversationList",
		Dg = "createGroup",
		Eg = "applyJoinGroup",
		Cg = "quitGroup",
		Ag = "searchGroupByID",
		kg = "changeGroupOwner",
		Ng = "handleGroupApplication",
		Og = "handleGroupInvitation",
		Lg = "setMessageRemindType",
		Rg = "dismissGroup",
		bg = "updateGroupProfile",
		wg = "getGroupList",
		Pg = "getGroupProfile",
		Gg = "getGroupListInStorage",
		Ug = "getGroupLastSequence",
		Fg = "getGroupMissingMessage",
		qg = "pagingGetGroupList",
		xg = "getGroupSimplifiedInfo",
		Vg = "joinWithoutAuth",
		Kg = "initGroupAttributes",
		Bg = "setGroupAttributes",
		Hg = "deleteGroupAttributes",
		jg = "getGroupAttributes",
		$g = "getGroupMemberList",
		Yg = "getGroupMemberProfile",
		zg = "addGroupMember",
		Wg = "deleteGroupMember",
		Jg = "setGroupMemberMuteTime",
		Xg = "setGroupMemberNameCard",
		Qg = "setGroupMemberRole",
		Zg = "setGroupMemberCustomField",
		eh = "getGroupOnlineMemberCount",
		th = "longPollingAVError",
		nh = "messageLoss",
		oh = "messageStacked",
		rh = "getUserProfile",
		ah = "updateMyProfile",
		sh = "getBlacklist",
		ih = "addToBlacklist",
		uh = "removeFromBlacklist",
		ch = "callbackFunctionError",
		lh = "fetchCloudControlConfig",
		ph = "pushedCloudControlConfig",
		dh = "error",
		gh = P.f,
		hh = function(e) {
			return function(t) {
				for (var n, o = K(t), r = Lt(o), a = r.length, s = 0, i = []; a > s;) n = r[s++], R && !gh
					.call(o, n) || i.push(e ? [n, o[n]] : o[n]);
				return i
			}
		},
		fh = {
			entries: hh(!0),
			values: hh(!1)
		}.values;
	vt({
		target: "Object",
		stat: !0
	}, {
		values: function(e) {
			return fh(e)
		}
	});
	var _h = function() {
			function e(t) {
				o(this, e), this.type = ro.MSG_TEXT, this.content = {
					text: t.text || ""
				}
			}
			return a(e, [{
				key: "setText",
				value: function(e) {
					this.content.text = e
				}
			}, {
				key: "sendable",
				value: function() {
					return 0 !== this.content.text.length
				}
			}]), e
		}(),
		mh = ge("iterator"),
		vh = !L((function() {
			var e = new URL("b?a=1&b=2&c=3", "http://a"),
				t = e.searchParams,
				n = "";
			return e.pathname = "c%20d", t.forEach((function(e, o) {
					t.delete("b"), n += o + e
				})), !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !==
				String(new URLSearchParams("?a=1")) || !t[mh] || "a" !== new URL("https://a@b")
				.username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
				"xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б")
				.hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host
		})),
		Mh = Object.assign,
		yh = Object.defineProperty,
		Ih = !Mh || L((function() {
			if (R && 1 !== Mh({
					b: 1
				}, Mh(yh({}, "a", {
					enumerable: !0,
					get: function() {
						yh(this, "b", {
							value: 3,
							enumerable: !1
						})
					}
				}), {
					b: 2
				})).b) return !0;
			var e = {},
				t = {},
				n = Symbol();
			return e[n] = 7, "abcdefghijklmnopqrst".split("").forEach((function(e) {
				t[e] = e
			})), 7 != Mh({}, e)[n] || "abcdefghijklmnopqrst" != Lt(Mh({}, t)).join("")
		})) ? function(e, t) {
			for (var n = re(e), o = arguments.length, r = 1, a = it.f, s = P.f; o > r;)
				for (var i, u = x(arguments[r++]), c = a ? Lt(u).concat(a(u)) : Lt(u), l = c.length, p = 0; l >
					p;) i = c[p++], R && !s.call(u, i) || (n[i] = u[i]);
			return n
		} : Mh,
		Th = /[^\0-\u007E]/,
		Sh = /[.\u3002\uFF0E\uFF61]/g,
		Dh = "Overflow: input needs wider integers to process",
		Eh = Math.floor,
		Ch = String.fromCharCode,
		Ah = function(e) {
			return e + 22 + 75 * (e < 26)
		},
		kh = function(e, t, n) {
			var o = 0;
			for (e = n ? Eh(e / 700) : e >> 1, e += Eh(e / t); e > 455; o += 36) e = Eh(e / 35);
			return Eh(o + 36 * e / (e + 38))
		},
		Nh = function(e) {
			var t, n, o = [],
				r = (e = function(e) {
					for (var t = [], n = 0, o = e.length; n < o;) {
						var r = e.charCodeAt(n++);
						if (r >= 55296 && r <= 56319 && n < o) {
							var a = e.charCodeAt(n++);
							56320 == (64512 & a) ? t.push(((1023 & r) << 10) + (1023 & a) + 65536) : (t
								.push(r), n--)
						} else t.push(r)
					}
					return t
				}(e)).length,
				a = 128,
				s = 0,
				i = 72;
			for (t = 0; t < e.length; t++)(n = e[t]) < 128 && o.push(Ch(n));
			var u = o.length,
				c = u;
			for (u && o.push("-"); c < r;) {
				var l = 2147483647;
				for (t = 0; t < e.length; t++)(n = e[t]) >= a && n < l && (l = n);
				var p = c + 1;
				if (l - a > Eh((2147483647 - s) / p)) throw RangeError(Dh);
				for (s += (l - a) * p, a = l, t = 0; t < e.length; t++) {
					if ((n = e[t]) < a && ++s > 2147483647) throw RangeError(Dh);
					if (n == a) {
						for (var d = s, g = 36;; g += 36) {
							var h = g <= i ? 1 : g >= i + 26 ? 26 : g - i;
							if (d < h) break;
							var f = d - h,
								_ = 36 - h;
							o.push(Ch(Ah(h + f % _))), d = Eh(f / _)
						}
						o.push(Ch(Ah(d))), i = kh(s, p, c == u), s = 0, ++c
					}
				}++s, ++a
			}
			return o.join("")
		},
		Oh = function(e) {
			var t = _n(e);
			if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
			return Se(t.call(e))
		},
		Lh = j("fetch"),
		Rh = j("Request"),
		bh = Rh && Rh.prototype,
		wh = j("Headers"),
		Ph = ge("iterator"),
		Gh = Be.set,
		Uh = Be.getterFor("URLSearchParams"),
		Fh = Be.getterFor("URLSearchParamsIterator"),
		qh = /\+/g,
		xh = Array(4),
		Vh = function(e) {
			return xh[e - 1] || (xh[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
		},
		Kh = function(e) {
			try {
				return decodeURIComponent(e)
			} catch (_M) {
				return e
			}
		},
		Bh = function(e) {
			var t = e.replace(qh, " "),
				n = 4;
			try {
				return decodeURIComponent(t)
			} catch (_M) {
				for (; n;) t = t.replace(Vh(n--), Kh);
				return t
			}
		},
		Hh = /[!'()~]|%20/g,
		jh = {
			"!": "%21",
			"'": "%27",
			"(": "%28",
			")": "%29",
			"~": "%7E",
			"%20": "+"
		},
		$h = function(e) {
			return jh[e]
		},
		Yh = function(e) {
			return encodeURIComponent(e).replace(Hh, $h)
		},
		zh = function(e, t) {
			if (t)
				for (var n, o, r = t.split("&"), a = 0; a < r.length;)(n = r[a++]).length && (o = n.split("="),
					e.push({
						key: Bh(o.shift()),
						value: Bh(o.join("="))
					}))
		},
		Wh = function(e) {
			this.entries.length = 0, zh(this.entries, e)
		},
		Jh = function(e, t) {
			if (e < t) throw TypeError("Not enough arguments")
		},
		Xh = Vn((function(e, t) {
			Gh(this, {
				type: "URLSearchParamsIterator",
				iterator: Oh(Uh(e).entries),
				kind: t
			})
		}), "Iterator", (function() {
			var e = Fh(this),
				t = e.kind,
				n = e.iterator.next(),
				o = n.value;
			return n.done || (n.value = "keys" === t ? o.key : "values" === t ? o.value : [o.key, o
				.value
			]), n
		})),
		Qh = function() {
			va(this, Qh, "URLSearchParams");
			var e, t, n, o, r, a, s, i, u, c = arguments.length > 0 ? arguments[0] : void 0,
				l = this,
				p = [];
			if (Gh(l, {
					type: "URLSearchParams",
					entries: p,
					updateURL: function() {},
					updateSearchParams: Wh
				}), void 0 !== c)
				if (B(c))
					if ("function" == typeof(e = _n(c)))
						for (n = (t = e.call(c)).next; !(o = n.call(t)).done;) {
							if ((s = (a = (r = Oh(Se(o.value))).next).call(r)).done || (i = a.call(r)).done || !
								a.call(r).done) throw TypeError("Expected sequence with length 2");
							p.push({
								key: Mt(s.value),
								value: Mt(i.value)
							})
						} else
							for (u in c) se(c, u) && p.push({
								key: u,
								value: Mt(c[u])
							});
					else zh(p, "string" == typeof c ? "?" === c.charAt(0) ? c.slice(1) : c : Mt(c))
		},
		Zh = Qh.prototype;
	if (fa(Zh, {
			append: function(e, t) {
				Jh(arguments.length, 2);
				var n = Uh(this);
				n.entries.push({
					key: Mt(e),
					value: Mt(t)
				}), n.updateURL()
			},
			delete: function(e) {
				Jh(arguments.length, 1);
				for (var t = Uh(this), n = t.entries, o = Mt(e), r = 0; r < n.length;) n[r].key === o ?
					n.splice(r, 1) : r++;
				t.updateURL()
			},
			get: function(e) {
				Jh(arguments.length, 1);
				for (var t = Uh(this).entries, n = Mt(e), o = 0; o < t.length; o++)
					if (t[o].key === n) return t[o].value;
				return null
			},
			getAll: function(e) {
				Jh(arguments.length, 1);
				for (var t = Uh(this).entries, n = Mt(e), o = [], r = 0; r < t.length; r++) t[r].key ===
					n && o.push(t[r].value);
				return o
			},
			has: function(e) {
				Jh(arguments.length, 1);
				for (var t = Uh(this).entries, n = Mt(e), o = 0; o < t.length;)
					if (t[o++].key === n) return !0;
				return !1
			},
			set: function(e, t) {
				Jh(arguments.length, 1);
				for (var n, o = Uh(this), r = o.entries, a = !1, s = Mt(e), i = Mt(t), u = 0; u < r
					.length; u++)(n = r[u]).key === s && (a ? r.splice(u--, 1) : (a = !0, n.value = i));
				a || r.push({
					key: s,
					value: i
				}), o.updateURL()
			},
			sort: function() {
				var e, t, n, o = Uh(this),
					r = o.entries,
					a = r.slice();
				for (r.length = 0, n = 0; n < a.length; n++) {
					for (e = a[n], t = 0; t < n; t++)
						if (r[t].key > e.key) {
							r.splice(t, 0, e);
							break
						} t === n && r.push(e)
				}
				o.updateURL()
			},
			forEach: function(e) {
				for (var t, n = Uh(this).entries, o = Vt(e, arguments.length > 1 ? arguments[1] :
						void 0, 3), r = 0; r < n.length;) o((t = n[r++]).value, t.key, this)
			},
			keys: function() {
				return new Xh(this, "keys")
			},
			values: function() {
				return new Xh(this, "values")
			},
			entries: function() {
				return new Xh(this, "entries")
			}
		}, {
			enumerable: !0
		}), He(Zh, Ph, Zh.entries), He(Zh, "toString", (function() {
			for (var e, t = Uh(this).entries, n = [], o = 0; o < t.length;) e = t[o++], n.push(Yh(e
				.key) + "=" + Yh(e.value));
			return n.join("&")
		}), {
			enumerable: !0
		}), Fn(Qh, "URLSearchParams"), vt({
			global: !0,
			forced: !vh
		}, {
			URLSearchParams: Qh
		}), !vh && "function" == typeof wh) {
		var ef = function(e) {
			if (B(e)) {
				var t, n = e.body;
				if ("URLSearchParams" === hn(n)) return (t = e.headers ? new wh(e.headers) : new wh).has(
					"content-type") || t.set("content-type",
					"application/x-www-form-urlencoded;charset=UTF-8"), qt(e, {
					body: G(0, String(n)),
					headers: G(0, t)
				})
			}
			return e
		};
		if ("function" == typeof Lh && vt({
				global: !0,
				enumerable: !0,
				forced: !0
			}, {
				fetch: function(e) {
					return Lh(e, arguments.length > 1 ? ef(arguments[1]) : {})
				}
			}), "function" == typeof Rh) {
			var tf = function(e) {
				return va(this, tf, "Request"), new Rh(e, arguments.length > 1 ? ef(arguments[1]) : {})
			};
			bh.constructor = tf, tf.prototype = bh, vt({
				global: !0,
				forced: !0
			}, {
				Request: tf
			})
		}
	}
	var nf, of = {
			URLSearchParams: Qh,
			getState: Uh
		},
		rf = kn.codeAt,
		af = O.URL,
		sf = of .URLSearchParams,
		uf = of .getState,
		cf = Be.set,
		lf = Be.getterFor("URL"),
		pf = Math.floor,
		df = Math.pow,
		gf = /[A-Za-z]/,
		hf = /[\d+-.A-Za-z]/,
		ff = /\d/,
		_f = /^0x/i,
		mf = /^[0-7]+$/,
		vf = /^\d+$/,
		Mf = /^[\dA-Fa-f]+$/,
		yf = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
		If = /[\0\t\n\r #/:<>?@[\\\]^|]/,
		Tf = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,
		Sf = /[\t\n\r]/g,
		Df = function(e, t) {
			var n, o, r;
			if ("[" == t.charAt(0)) {
				if ("]" != t.charAt(t.length - 1)) return "Invalid host";
				if (!(n = Cf(t.slice(1, -1)))) return "Invalid host";
				e.host = n
			} else if (wf(e)) {
				if (t = function(e) {
						var t, n, o = [],
							r = e.toLowerCase().replace(Sh, ".").split(".");
						for (t = 0; t < r.length; t++) n = r[t], o.push(Th.test(n) ? "xn--" + Nh(n) : n);
						return o.join(".")
					}(t), yf.test(t)) return "Invalid host";
				if (null === (n = Ef(t))) return "Invalid host";
				e.host = n
			} else {
				if (If.test(t)) return "Invalid host";
				for (n = "", o = mn(t), r = 0; r < o.length; r++) n += Rf(o[r], kf);
				e.host = n
			}
		},
		Ef = function(e) {
			var t, n, o, r, a, s, i, u = e.split(".");
			if (u.length && "" == u[u.length - 1] && u.pop(), (t = u.length) > 4) return e;
			for (n = [], o = 0; o < t; o++) {
				if ("" == (r = u[o])) return e;
				if (a = 10, r.length > 1 && "0" == r.charAt(0) && (a = _f.test(r) ? 16 : 8, r = r.slice(8 == a ?
						1 : 2)), "" === r) s = 0;
				else {
					if (!(10 == a ? vf : 8 == a ? mf : Mf).test(r)) return e;
					s = parseInt(r, a)
				}
				n.push(s)
			}
			for (o = 0; o < t; o++)
				if (s = n[o], o == t - 1) {
					if (s >= df(256, 5 - t)) return null
				} else if (s > 255) return null;
			for (i = n.pop(), o = 0; o < n.length; o++) i += n[o] * df(256, 3 - o);
			return i
		},
		Cf = function(e) {
			var t, n, o, r, a, s, i, u = [0, 0, 0, 0, 0, 0, 0, 0],
				c = 0,
				l = null,
				p = 0,
				d = function() {
					return e.charAt(p)
				};
			if (":" == d()) {
				if (":" != e.charAt(1)) return;
				p += 2, l = ++c
			}
			for (; d();) {
				if (8 == c) return;
				if (":" != d()) {
					for (t = n = 0; n < 4 && Mf.test(d());) t = 16 * t + parseInt(d(), 16), p++, n++;
					if ("." == d()) {
						if (0 == n) return;
						if (p -= n, c > 6) return;
						for (o = 0; d();) {
							if (r = null, o > 0) {
								if (!("." == d() && o < 4)) return;
								p++
							}
							if (!ff.test(d())) return;
							for (; ff.test(d());) {
								if (a = parseInt(d(), 10), null === r) r = a;
								else {
									if (0 == r) return;
									r = 10 * r + a
								}
								if (r > 255) return;
								p++
							}
							u[c] = 256 * u[c] + r, 2 != ++o && 4 != o || c++
						}
						if (4 != o) return;
						break
					}
					if (":" == d()) {
						if (p++, !d()) return
					} else if (d()) return;
					u[c++] = t
				} else {
					if (null !== l) return;
					p++, l = ++c
				}
			}
			if (null !== l)
				for (s = c - l, c = 7; 0 != c && s > 0;) i = u[c], u[c--] = u[l + s - 1], u[l + --s] = i;
			else if (8 != c) return;
			return u
		},
		Af = function(e) {
			var t, n, o, r;
			if ("number" == typeof e) {
				for (t = [], n = 0; n < 4; n++) t.unshift(e % 256), e = pf(e / 256);
				return t.join(".")
			}
			if ("object" == typeof e) {
				for (t = "", o = function(e) {
						for (var t = null, n = 1, o = null, r = 0, a = 0; a < 8; a++) 0 !== e[a] ? (r > n && (
							t = o, n = r), o = null, r = 0) : (null === o && (o = a), ++r);
						return r > n && (t = o, n = r), t
					}(e), n = 0; n < 8; n++) r && 0 === e[n] || (r && (r = !1), o === n ? (t += n ? ":" : "::",
					r = !0) : (t += e[n].toString(16), n < 7 && (t += ":")));
				return "[" + t + "]"
			}
			return e
		},
		kf = {},
		Nf = Ih({}, kf, {
			" ": 1,
			'"': 1,
			"<": 1,
			">": 1,
			"`": 1
		}),
		Of = Ih({}, Nf, {
			"#": 1,
			"?": 1,
			"{": 1,
			"}": 1
		}),
		Lf = Ih({}, Of, {
			"/": 1,
			":": 1,
			";": 1,
			"=": 1,
			"@": 1,
			"[": 1,
			"\\": 1,
			"]": 1,
			"^": 1,
			"|": 1
		}),
		Rf = function(e, t) {
			var n = rf(e, 0);
			return n > 32 && n < 127 && !se(t, e) ? e : encodeURIComponent(e)
		},
		bf = {
			ftp: 21,
			file: null,
			http: 80,
			https: 443,
			ws: 80,
			wss: 443
		},
		wf = function(e) {
			return se(bf, e.scheme)
		},
		Pf = function(e) {
			return "" != e.username || "" != e.password
		},
		Gf = function(e) {
			return !e.host || e.cannotBeABaseURL || "file" == e.scheme
		},
		Uf = function(e, t) {
			var n;
			return 2 == e.length && gf.test(e.charAt(0)) && (":" == (n = e.charAt(1)) || !t && "|" == n)
		},
		Ff = function(e) {
			var t;
			return e.length > 1 && Uf(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" ===
				t || "?" === t || "#" === t)
		},
		qf = function(e) {
			var t = e.path,
				n = t.length;
			!n || "file" == e.scheme && 1 == n && Uf(t[0], !0) || t.pop()
		},
		xf = function(e) {
			return "." === e || "%2e" === e.toLowerCase()
		},
		Vf = {},
		Kf = {},
		Bf = {},
		Hf = {},
		jf = {},
		$f = {},
		Yf = {},
		zf = {},
		Wf = {},
		Jf = {},
		Xf = {},
		Qf = {},
		Zf = {},
		e_ = {},
		t_ = {},
		n_ = {},
		o_ = {},
		r_ = {},
		a_ = {},
		s_ = {},
		i_ = {},
		u_ = function(e, t, n, o) {
			var r, a, s, i, u, c = n || Vf,
				l = 0,
				p = "",
				d = !1,
				g = !1,
				h = !1;
			for (n || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e
				.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, t = t.replace(Tf,
					"")), t = t.replace(Sf, ""), r = mn(t); l <= r.length;) {
				switch (a = r[l], c) {
					case Vf:
						if (!a || !gf.test(a)) {
							if (n) return "Invalid scheme";
							c = Bf;
							continue
						}
						p += a.toLowerCase(), c = Kf;
						break;
					case Kf:
						if (a && (hf.test(a) || "+" == a || "-" == a || "." == a)) p += a.toLowerCase();
						else {
							if (":" != a) {
								if (n) return "Invalid scheme";
								p = "", c = Bf, l = 0;
								continue
							}
							if (n && (wf(e) != se(bf, p) || "file" == p && (Pf(e) || null !== e.port) ||
									"file" == e.scheme && !e.host)) return;
							if (e.scheme = p, n) return void(wf(e) && bf[e.scheme] == e.port && (e.port =
							null));
							p = "", "file" == e.scheme ? c = e_ : wf(e) && o && o.scheme == e.scheme ? c = Hf :
								wf(e) ? c = zf : "/" == r[l + 1] ? (c = jf, l++) : (e.cannotBeABaseURL = !0, e
									.path.push(""), c = a_)
						}
						break;
					case Bf:
						if (!o || o.cannotBeABaseURL && "#" != a) return "Invalid scheme";
						if (o.cannotBeABaseURL && "#" == a) {
							e.scheme = o.scheme, e.path = o.path.slice(), e.query = o.query, e.fragment = "", e
								.cannotBeABaseURL = !0, c = i_;
							break
						}
						c = "file" == o.scheme ? e_ : $f;
						continue;
					case Hf:
						if ("/" != a || "/" != r[l + 1]) {
							c = $f;
							continue
						}
						c = Wf, l++;
						break;
					case jf:
						if ("/" == a) {
							c = Jf;
							break
						}
						c = r_;
						continue;
					case $f:
						if (e.scheme = o.scheme, a == nf) e.username = o.username, e.password = o.password, e
							.host = o.host, e.port = o.port, e.path = o.path.slice(), e.query = o.query;
						else if ("/" == a || "\\" == a && wf(e)) c = Yf;
						else if ("?" == a) e.username = o.username, e.password = o.password, e.host = o.host, e
							.port = o.port, e.path = o.path.slice(), e.query = "", c = s_;
						else {
							if ("#" != a) {
								e.username = o.username, e.password = o.password, e.host = o.host, e.port = o
									.port, e.path = o.path.slice(), e.path.pop(), c = r_;
								continue
							}
							e.username = o.username, e.password = o.password, e.host = o.host, e.port = o.port,
								e.path = o.path.slice(), e.query = o.query, e.fragment = "", c = i_
						}
						break;
					case Yf:
						if (!wf(e) || "/" != a && "\\" != a) {
							if ("/" != a) {
								e.username = o.username, e.password = o.password, e.host = o.host, e.port = o
									.port, c = r_;
								continue
							}
							c = Jf
						} else c = Wf;
						break;
					case zf:
						if (c = Wf, "/" != a || "/" != p.charAt(l + 1)) continue;
						l++;
						break;
					case Wf:
						if ("/" != a && "\\" != a) {
							c = Jf;
							continue
						}
						break;
					case Jf:
						if ("@" == a) {
							d && (p = "%40" + p), d = !0, s = mn(p);
							for (var f = 0; f < s.length; f++) {
								var _ = s[f];
								if (":" != _ || h) {
									var m = Rf(_, Lf);
									h ? e.password += m : e.username += m
								} else h = !0
							}
							p = ""
						} else if (a == nf || "/" == a || "?" == a || "#" == a || "\\" == a && wf(e)) {
							if (d && "" == p) return "Invalid authority";
							l -= mn(p).length + 1, p = "", c = Xf
						} else p += a;
						break;
					case Xf:
					case Qf:
						if (n && "file" == e.scheme) {
							c = n_;
							continue
						}
						if (":" != a || g) {
							if (a == nf || "/" == a || "?" == a || "#" == a || "\\" == a && wf(e)) {
								if (wf(e) && "" == p) return "Invalid host";
								if (n && "" == p && (Pf(e) || null !== e.port)) return;
								if (i = Df(e, p)) return i;
								if (p = "", c = o_, n) return;
								continue
							}
							"[" == a ? g = !0 : "]" == a && (g = !1), p += a
						} else {
							if ("" == p) return "Invalid host";
							if (i = Df(e, p)) return i;
							if (p = "", c = Zf, n == Qf) return
						}
						break;
					case Zf:
						if (!ff.test(a)) {
							if (a == nf || "/" == a || "?" == a || "#" == a || "\\" == a && wf(e) || n) {
								if ("" != p) {
									var v = parseInt(p, 10);
									if (v > 65535) return "Invalid port";
									e.port = wf(e) && v === bf[e.scheme] ? null : v, p = ""
								}
								if (n) return;
								c = o_;
								continue
							}
							return "Invalid port"
						}
						p += a;
						break;
					case e_:
						if (e.scheme = "file", "/" == a || "\\" == a) c = t_;
						else {
							if (!o || "file" != o.scheme) {
								c = r_;
								continue
							}
							if (a == nf) e.host = o.host, e.path = o.path.slice(), e.query = o.query;
							else if ("?" == a) e.host = o.host, e.path = o.path.slice(), e.query = "", c = s_;
							else {
								if ("#" != a) {
									Ff(r.slice(l).join("")) || (e.host = o.host, e.path = o.path.slice(), qf(
										e)), c = r_;
									continue
								}
								e.host = o.host, e.path = o.path.slice(), e.query = o.query, e.fragment = "",
									c = i_
							}
						}
						break;
					case t_:
						if ("/" == a || "\\" == a) {
							c = n_;
							break
						}
						o && "file" == o.scheme && !Ff(r.slice(l).join("")) && (Uf(o.path[0], !0) ? e.path.push(
							o.path[0]) : e.host = o.host), c = r_;
						continue;
					case n_:
						if (a == nf || "/" == a || "\\" == a || "?" == a || "#" == a) {
							if (!n && Uf(p)) c = r_;
							else if ("" == p) {
								if (e.host = "", n) return;
								c = o_
							} else {
								if (i = Df(e, p)) return i;
								if ("localhost" == e.host && (e.host = ""), n) return;
								p = "", c = o_
							}
							continue
						}
						p += a;
						break;
					case o_:
						if (wf(e)) {
							if (c = r_, "/" != a && "\\" != a) continue
						} else if (n || "?" != a)
							if (n || "#" != a) {
								if (a != nf && (c = r_, "/" != a)) continue
							} else e.fragment = "", c = i_;
						else e.query = "", c = s_;
						break;
					case r_:
						if (a == nf || "/" == a || "\\" == a && wf(e) || !n && ("?" == a || "#" == a)) {
							if (".." === (u = (u = p).toLowerCase()) || "%2e." === u || ".%2e" === u ||
								"%2e%2e" === u ? (qf(e), "/" == a || "\\" == a && wf(e) || e.path.push("")) :
								xf(p) ? "/" == a || "\\" == a && wf(e) || e.path.push("") : ("file" == e
									.scheme && !e.path.length && Uf(p) && (e.host && (e.host = ""), p = p
										.charAt(0) + ":"), e.path.push(p)), p = "", "file" == e.scheme && (a ==
									nf || "?" == a || "#" == a))
								for (; e.path.length > 1 && "" === e.path[0];) e.path.shift();
							"?" == a ? (e.query = "", c = s_) : "#" == a && (e.fragment = "", c = i_)
						} else p += Rf(a, Of);
						break;
					case a_:
						"?" == a ? (e.query = "", c = s_) : "#" == a ? (e.fragment = "", c = i_) : a != nf && (e
							.path[0] += Rf(a, kf));
						break;
					case s_:
						n || "#" != a ? a != nf && ("'" == a && wf(e) ? e.query += "%27" : e.query += "#" == a ?
							"%23" : Rf(a, kf)) : (e.fragment = "", c = i_);
						break;
					case i_:
						a != nf && (e.fragment += Rf(a, Nf))
				}
				l++
			}
		},
		c_ = function(e) {
			var t, n, o = va(this, c_, "URL"),
				r = arguments.length > 1 ? arguments[1] : void 0,
				a = Mt(e),
				s = cf(o, {
					type: "URL"
				});
			if (void 0 !== r)
				if (r instanceof c_) t = lf(r);
				else if (n = u_(t = {}, Mt(r))) throw TypeError(n);
			if (n = u_(s, a, null, t)) throw TypeError(n);
			var i = s.searchParams = new sf,
				u = uf(i);
			u.updateSearchParams(s.query), u.updateURL = function() {
				s.query = String(i) || null
			}, R || (o.href = p_.call(o), o.origin = d_.call(o), o.protocol = g_.call(o), o.username = h_
				.call(o), o.password = f_.call(o), o.host = __.call(o), o.hostname = m_.call(o), o.port = v_
				.call(o), o.pathname = M_.call(o), o.search = y_.call(o), o.searchParams = I_.call(o), o
				.hash = T_.call(o))
		},
		l_ = c_.prototype,
		p_ = function() {
			var e = lf(this),
				t = e.scheme,
				n = e.username,
				o = e.password,
				r = e.host,
				a = e.port,
				s = e.path,
				i = e.query,
				u = e.fragment,
				c = t + ":";
			return null !== r ? (c += "//", Pf(e) && (c += n + (o ? ":" + o : "") + "@"), c += Af(r), null !==
					a && (c += ":" + a)) : "file" == t && (c += "//"), c += e.cannotBeABaseURL ? s[0] : s
				.length ? "/" + s.join("/") : "", null !== i && (c += "?" + i), null !== u && (c += "#" + u), c
		},
		d_ = function() {
			var e = lf(this),
				t = e.scheme,
				n = e.port;
			if ("blob" == t) try {
				return new c_(t.path[0]).origin
			} catch (_M) {
				return "null"
			}
			return "file" != t && wf(e) ? t + "://" + Af(e.host) + (null !== n ? ":" + n : "") : "null"
		},
		g_ = function() {
			return lf(this).scheme + ":"
		},
		h_ = function() {
			return lf(this).username
		},
		f_ = function() {
			return lf(this).password
		},
		__ = function() {
			var e = lf(this),
				t = e.host,
				n = e.port;
			return null === t ? "" : null === n ? Af(t) : Af(t) + ":" + n
		},
		m_ = function() {
			var e = lf(this).host;
			return null === e ? "" : Af(e)
		},
		v_ = function() {
			var e = lf(this).port;
			return null === e ? "" : String(e)
		},
		M_ = function() {
			var e = lf(this),
				t = e.path;
			return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : ""
		},
		y_ = function() {
			var e = lf(this).query;
			return e ? "?" + e : ""
		},
		I_ = function() {
			return lf(this).searchParams
		},
		T_ = function() {
			var e = lf(this).fragment;
			return e ? "#" + e : ""
		},
		S_ = function(e, t) {
			return {
				get: e,
				set: t,
				configurable: !0,
				enumerable: !0
			}
		};
	if (R && Rt(l_, {
			href: S_(p_, (function(e) {
				var t = lf(this),
					n = Mt(e),
					o = u_(t, n);
				if (o) throw TypeError(o);
				uf(t.searchParams).updateSearchParams(t.query)
			})),
			origin: S_(d_),
			protocol: S_(g_, (function(e) {
				var t = lf(this);
				u_(t, Mt(e) + ":", Vf)
			})),
			username: S_(h_, (function(e) {
				var t = lf(this),
					n = mn(Mt(e));
				if (!Gf(t)) {
					t.username = "";
					for (var o = 0; o < n.length; o++) t.username += Rf(n[o], Lf)
				}
			})),
			password: S_(f_, (function(e) {
				var t = lf(this),
					n = mn(Mt(e));
				if (!Gf(t)) {
					t.password = "";
					for (var o = 0; o < n.length; o++) t.password += Rf(n[o], Lf)
				}
			})),
			host: S_(__, (function(e) {
				var t = lf(this);
				t.cannotBeABaseURL || u_(t, Mt(e), Xf)
			})),
			hostname: S_(m_, (function(e) {
				var t = lf(this);
				t.cannotBeABaseURL || u_(t, Mt(e), Qf)
			})),
			port: S_(v_, (function(e) {
				var t = lf(this);
				Gf(t) || ("" == (e = Mt(e)) ? t.port = null : u_(t, e, Zf))
			})),
			pathname: S_(M_, (function(e) {
				var t = lf(this);
				t.cannotBeABaseURL || (t.path = [], u_(t, Mt(e), o_))
			})),
			search: S_(y_, (function(e) {
				var t = lf(this);
				"" == (e = Mt(e)) ? t.query = null: ("?" == e.charAt(0) && (e = e.slice(1)), t
					.query = "", u_(t, e, s_)), uf(t.searchParams).updateSearchParams(t
					.query)
			})),
			searchParams: S_(I_),
			hash: S_(T_, (function(e) {
				var t = lf(this);
				"" != (e = Mt(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "",
					u_(t, e, i_)) : t.fragment = null
			}))
		}), He(l_, "toJSON", (function() {
			return p_.call(this)
		}), {
			enumerable: !0
		}), He(l_, "toString", (function() {
			return p_.call(this)
		}), {
			enumerable: !0
		}), af) {
		var D_ = af.createObjectURL,
			E_ = af.revokeObjectURL;
		D_ && He(c_, "createObjectURL", (function(e) {
			return D_.apply(af, arguments)
		})), E_ && He(c_, "revokeObjectURL", (function(e) {
			return E_.apply(af, arguments)
		}))
	}
	Fn(c_, "URL"), vt({
		global: !0,
		forced: !vh,
		sham: !R
	}, {
		URL: c_
	}), vt({
		target: "Object",
		stat: !0,
		forced: Object.assign !== Ih
	}, {
		assign: Ih
	});
	var C_ = {
			JSON: {
				TYPE: {
					C2C: {
						NOTICE: 1,
						COMMON: 9,
						EVENT: 10
					},
					GROUP: {
						COMMON: 3,
						TIP: 4,
						SYSTEM: 5,
						TIP2: 6
					},
					FRIEND: {
						NOTICE: 7
					},
					PROFILE: {
						NOTICE: 8
					}
				},
				SUBTYPE: {
					C2C: {
						COMMON: 0,
						READED: 92,
						KICKEDOUT: 96
					},
					GROUP: {
						COMMON: 0,
						LOVEMESSAGE: 1,
						TIP: 2,
						REDPACKET: 3
					}
				},
				OPTIONS: {
					GROUP: {
						JOIN: 1,
						QUIT: 2,
						KICK: 3,
						SET_ADMIN: 4,
						CANCEL_ADMIN: 5,
						MODIFY_GROUP_INFO: 6,
						MODIFY_MEMBER_INFO: 7
					}
				}
			},
			PROTOBUF: {},
			IMAGE_TYPES: {
				ORIGIN: 1,
				LARGE: 2,
				SMALL: 3
			},
			IMAGE_FORMAT: {
				JPG: 1,
				JPEG: 1,
				GIF: 2,
				PNG: 3,
				BMP: 4,
				UNKNOWN: 255
			}
		},
		A_ = {
			NICK: "Tag_Profile_IM_Nick",
			GENDER: "Tag_Profile_IM_Gender",
			BIRTHDAY: "Tag_Profile_IM_BirthDay",
			LOCATION: "Tag_Profile_IM_Location",
			SELFSIGNATURE: "Tag_Profile_IM_SelfSignature",
			ALLOWTYPE: "Tag_Profile_IM_AllowType",
			LANGUAGE: "Tag_Profile_IM_Language",
			AVATAR: "Tag_Profile_IM_Image",
			MESSAGESETTINGS: "Tag_Profile_IM_MsgSettings",
			ADMINFORBIDTYPE: "Tag_Profile_IM_AdminForbidType",
			LEVEL: "Tag_Profile_IM_Level",
			ROLE: "Tag_Profile_IM_Role"
		},
		k_ = {
			UNKNOWN: "Gender_Type_Unknown",
			FEMALE: "Gender_Type_Female",
			MALE: "Gender_Type_Male"
		},
		N_ = {
			NONE: "AdminForbid_Type_None",
			SEND_OUT: "AdminForbid_Type_SendOut"
		},
		O_ = {
			NEED_CONFIRM: "AllowType_Type_NeedConfirm",
			ALLOW_ANY: "AllowType_Type_AllowAny",
			DENY_ANY: "AllowType_Type_DenyAny"
		},
		L_ = "JoinedSuccess",
		R_ = "WaitAdminApproval",
		b_ = function() {
			function e(t) {
				o(this, e), this._imageMemoryURL = "", ai ? this.createImageDataASURLInWXMiniApp(t.file) : this
					.createImageDataASURLInWeb(t.file), this._initImageInfoModel(), this.type = ro.MSG_IMAGE,
					this._percent = 0, this.content = {
						imageFormat: t.imageFormat || C_.IMAGE_FORMAT.UNKNOWN,
						uuid: t.uuid,
						imageInfoArray: []
					}, this.initImageInfoArray(t.imageInfoArray), this._defaultImage =
					"http://imgcache.qq.com/open/qcloud/video/act/webim-images/default.jpg", this._autoFixUrl()
			}
			return a(e, [{
				key: "_initImageInfoModel",
				value: function() {
					var e = this;
					this._ImageInfoModel = function(t) {
						this.instanceID = iu(9999999), this.sizeType = t.type || 0, this
							.type = 0, this.size = t.size || 0, this.width = t.width || 0,
							this.height = t.height || 0, this.imageUrl = t.url || "", this
							.url = t.url || e._imageMemoryURL || e._defaultImage
					}, this._ImageInfoModel.prototype = {
						setSizeType: function(e) {
							this.sizeType = e
						},
						setType: function(e) {
							this.type = e
						},
						setImageUrl: function(e) {
							e && (this.imageUrl = e)
						},
						getImageUrl: function() {
							return this.imageUrl
						}
					}
				}
			}, {
				key: "initImageInfoArray",
				value: function(e) {
					for (var t = 0, n = null, o = null; t <= 2;) o = Ji(e) || Ji(e[t]) ? {
							type: 0,
							size: 0,
							width: 0,
							height: 0,
							url: ""
						} : e[t], (n = new this._ImageInfoModel(o)).setSizeType(t + 1), n
						.setType(t), this.addImageInfo(n), t++;
					this.updateAccessSideImageInfoArray()
				}
			}, {
				key: "updateImageInfoArray",
				value: function(e) {
					for (var t, n = this.content.imageInfoArray.length, o = 0; o < n; o++) t =
						this.content.imageInfoArray[o], e[o].size && (t.size = e[o].size), e[o]
						.url && t.setImageUrl(e[o].url), e[o].width && (t.width = e[o].width),
						e[o].height && (t.height = e[o].height)
				}
			}, {
				key: "_autoFixUrl",
				value: function() {
					for (var e = this.content.imageInfoArray.length, t = "", n = "", o = [
							"http", "https"
						], r = null, a = 0; a < e; a++) this.content.imageInfoArray[a].url &&
						"" !== (r = this.content.imageInfoArray[a]).imageUrl && (n = r.imageUrl
							.slice(0, r.imageUrl.indexOf("://") + 1), t = r.imageUrl.slice(r
								.imageUrl.indexOf("://") + 1), o.indexOf(n) < 0 && (n =
								"https:"), this.content.imageInfoArray[a].setImageUrl([n, t]
								.join("")))
				}
			}, {
				key: "updatePercent",
				value: function(e) {
					this._percent = e, this._percent > 1 && (this._percent = 1)
				}
			}, {
				key: "updateImageFormat",
				value: function(e) {
					this.content.imageFormat = C_.IMAGE_FORMAT[e.toUpperCase()] || C_
						.IMAGE_FORMAT.UNKNOWN
				}
			}, {
				key: "createImageDataASURLInWeb",
				value: function(e) {
					void 0 !== e && e.files.length > 0 && (this._imageMemoryURL = window.URL
						.createObjectURL(e.files[0]))
				}
			}, {
				key: "createImageDataASURLInWXMiniApp",
				value: function(e) {
					e && e.url && (this._imageMemoryURL = e.url)
				}
			}, {
				key: "replaceImageInfo",
				value: function(e, t) {
					this.content.imageInfoArray[t] instanceof this._ImageInfoModel || (this
						.content.imageInfoArray[t] = e)
				}
			}, {
				key: "addImageInfo",
				value: function(e) {
					this.content.imageInfoArray.length >= 3 || this.content.imageInfoArray.push(
						e)
				}
			}, {
				key: "updateAccessSideImageInfoArray",
				value: function() {
					var e = this.content.imageInfoArray,
						t = e[0],
						n = t.width,
						o = void 0 === n ? 0 : n,
						r = t.height,
						a = void 0 === r ? 0 : r;
					0 !== o && 0 !== a && (Eu(e), Object.assign(e[2], Du({
						originWidth: o,
						originHeight: a,
						min: 720
					})))
				}
			}, {
				key: "sendable",
				value: function() {
					return 0 !== this.content.imageInfoArray.length && ("" !== this.content
						.imageInfoArray[0].imageUrl && 0 !== this.content.imageInfoArray[0]
						.size)
				}
			}]), e
		}(),
		w_ = function() {
			function e(t) {
				o(this, e), this.type = ro.MSG_FACE, this.content = t || null
			}
			return a(e, [{
				key: "sendable",
				value: function() {
					return null !== this.content
				}
			}]), e
		}(),
		P_ = function() {
			function e(t) {
				o(this, e), this.type = ro.MSG_AUDIO, this._percent = 0, this.content = {
					downloadFlag: 2,
					second: t.second,
					size: t.size,
					url: t.url,
					remoteAudioUrl: t.url || "",
					uuid: t.uuid
				}
			}
			return a(e, [{
				key: "updatePercent",
				value: function(e) {
					this._percent = e, this._percent > 1 && (this._percent = 1)
				}
			}, {
				key: "updateAudioUrl",
				value: function(e) {
					this.content.remoteAudioUrl = e
				}
			}, {
				key: "sendable",
				value: function() {
					return "" !== this.content.remoteAudioUrl
				}
			}]), e
		}();
	vt({
		target: "Object",
		stat: !0,
		forced: !R,
		sham: !R
	}, {
		defineProperty: Ee.f
	});
	var G_ = {
			from: !0,
			groupID: !0,
			groupName: !0,
			to: !0
		},
		U_ = function() {
			function e(t) {
				o(this, e), this.type = ro.MSG_GRP_TIP, this.content = {}, this._initContent(t)
			}
			return a(e, [{
				key: "_initContent",
				value: function(e) {
					var t = this;
					Object.keys(e).forEach((function(n) {
						switch (n) {
							case "remarkInfo":
								break;
							case "groupProfile":
								t.content.groupProfile = {}, t._initGroupProfile(e[
									n]);
								break;
							case "operatorInfo":
							case "memberInfoList":
								break;
							case "msgMemberInfo":
								t.content.memberList = e[n], Object.defineProperty(t
									.content, "msgMemberInfo", {
										get: function() {
											return Ki.warn(
													"!!! 禁言的群提示消息中的 payload.msgMemberInfo 属性即将废弃，请使用 payload.memberList 属性替代。 \n",
													"msgMemberInfo 中的 shutupTime 属性对应更改为 memberList 中的 muteTime 属性，表示禁言时长。 \n",
													"参考：群提示消息 https://web.sdk.qcloud.com/im/doc/zh-cn/Message.html#.GroupTipPayload"
													), t.content.memberList
												.map((function(e) {
													return {
														userID: e
															.userID,
														shutupTime: e
															.muteTime
													}
												}))
										}
									});
								break;
							case "onlineMemberInfo":
								break;
							case "memberNum":
								t.content[n] = e[n], t.content.memberCount = e[n];
								break;
							default:
								t.content[n] = e[n]
						}
					})), this.content.userIDList || (this.content.userIDList = [this.content
						.operatorID
					])
				}
			}, {
				key: "_initGroupProfile",
				value: function(e) {
					for (var t = Object.keys(e), n = 0; n < t.length; n++) {
						var o = t[n];
						G_[o] && (this.content.groupProfile[o] = e[o])
					}
				}
			}]), e
		}(),
		F_ = {
			from: !0,
			groupID: !0,
			groupName: !0,
			to: !0
		},
		q_ = function() {
			function e(t) {
				o(this, e), this.type = ro.MSG_GRP_SYS_NOTICE, this.content = {}, this._initContent(t)
			}
			return a(e, [{
				key: "_initContent",
				value: function(e) {
					var t = this;
					Object.keys(e).forEach((function(n) {
						switch (n) {
							case "memberInfoList":
								break;
							case "remarkInfo":
								t.content.handleMessage = e[n];
								break;
							case "groupProfile":
								t.content.groupProfile = {}, t._initGroupProfile(e[
									n]);
								break;
							default:
								t.content[n] = e[n]
						}
					}))
				}
			}, {
				key: "_initGroupProfile",
				value: function(e) {
					for (var t = Object.keys(e), n = 0; n < t.length; n++) {
						var o = t[n];
						F_[o] && ("groupName" === o ? this.content.groupProfile.name = e[o] :
							this.content.groupProfile[o] = e[o])
					}
				}
			}]), e
		}(),
		x_ = Math.min,
		V_ = [].lastIndexOf,
		K_ = !!V_ && 1 / [1].lastIndexOf(1, -0) < 0,
		B_ = zt("lastIndexOf"),
		H_ = K_ || !B_ ? function(e) {
			if (K_) return V_.apply(this, arguments) || 0;
			var t = K(this),
				n = We(t.length),
				o = n - 1;
			for (arguments.length > 1 && (o = x_(o, Ye(arguments[1]))), o < 0 && (o = n + o); o >= 0; o--)
				if (o in t && t[o] === e) return o || 0;
			return -1
		} : V_;
	vt({
		target: "Array",
		proto: !0,
		forced: H_ !== [].lastIndexOf
	}, {
		lastIndexOf: H_
	});
	var j_ = function() {
			function e(t) {
				o(this, e), this.type = ro.MSG_FILE, this._percent = 0;
				var n = this._getFileInfo(t);
				this.content = {
					downloadFlag: 2,
					fileUrl: t.url || "",
					uuid: t.uuid,
					fileName: n.name || "",
					fileSize: n.size || 0
				}
			}
			return a(e, [{
				key: "_getFileInfo",
				value: function(e) {
					if (e.fileName && e.fileSize) return {
						size: e.fileSize,
						name: e.fileName
					};
					if (ai) return {};
					var t = e.file.files[0];
					return {
						size: t.size,
						name: t.name,
						type: t.type.slice(t.type.lastIndexOf("/") + 1).toLowerCase()
					}
				}
			}, {
				key: "updatePercent",
				value: function(e) {
					this._percent = e, this._percent > 1 && (this._percent = 1)
				}
			}, {
				key: "updateFileUrl",
				value: function(e) {
					this.content.fileUrl = e
				}
			}, {
				key: "sendable",
				value: function() {
					return "" !== this.content.fileUrl && ("" !== this.content.fileName && 0 !==
						this.content.fileSize)
				}
			}]), e
		}(),
		$_ = function() {
			function e(t) {
				o(this, e), this.type = ro.MSG_CUSTOM, this.content = {
					data: t.data || "",
					description: t.description || "",
					extension: t.extension || ""
				}
			}
			return a(e, [{
				key: "setData",
				value: function(e) {
					return this.content.data = e, this
				}
			}, {
				key: "setDescription",
				value: function(e) {
					return this.content.description = e, this
				}
			}, {
				key: "setExtension",
				value: function(e) {
					return this.content.extension = e, this
				}
			}, {
				key: "sendable",
				value: function() {
					return 0 !== this.content.data.length || 0 !== this.content.description
						.length || 0 !== this.content.extension.length
				}
			}]), e
		}(),
		Y_ = function() {
			function e(t) {
				o(this, e), this.type = ro.MSG_VIDEO, this._percent = 0, this.content = {
					remoteVideoUrl: t.remoteVideoUrl || t.videoUrl || "",
					videoFormat: t.videoFormat,
					videoSecond: parseInt(t.videoSecond, 10),
					videoSize: t.videoSize,
					videoUrl: t.videoUrl,
					videoDownloadFlag: 2,
					videoUUID: t.videoUUID,
					thumbUUID: t.thumbUUID,
					thumbFormat: t.thumbFormat,
					thumbWidth: t.thumbWidth,
					thumbHeight: t.thumbHeight,
					thumbSize: t.thumbSize,
					thumbDownloadFlag: 2,
					thumbUrl: t.thumbUrl
				}
			}
			return a(e, [{
				key: "updatePercent",
				value: function(e) {
					this._percent = e, this._percent > 1 && (this._percent = 1)
				}
			}, {
				key: "updateVideoUrl",
				value: function(e) {
					e && (this.content.remoteVideoUrl = e)
				}
			}, {
				key: "sendable",
				value: function() {
					return "" !== this.content.remoteVideoUrl
				}
			}]), e
		}(),
		z_ = function e(t) {
			o(this, e), this.type = ro.MSG_GEO, this.content = t
		},
		W_ = function() {
			function e(t) {
				if (o(this, e), this.from = t.from, this.messageSender = t.from, this.time = t.time, this
					.messageSequence = t.sequence, this.clientSequence = t.clientSequence || t.sequence, this
					.messageRandom = t.random, this.cloudCustomData = t.cloudCustomData || "", t.ID) this.nick =
					t.nick || "", this.avatar = t.avatar || "", this.messageBody = [{
						type: t.type,
						payload: t.payload
					}], t.conversationType.startsWith(ro.CONV_C2C) ? this.receiverUserID = t.to : t
					.conversationType.startsWith(ro.CONV_GROUP) && (this.receiverGroupID = t.to), this
					.messageReceiver = t.to;
				else {
					this.nick = t.nick || "", this.avatar = t.avatar || "", this.messageBody = [];
					var n = t.elements[0].type,
						r = t.elements[0].content;
					this._patchRichMediaPayload(n, r), n === ro.MSG_MERGER ? this.messageBody.push({
							type: n,
							payload: new J_(r).content
						}) : this.messageBody.push({
							type: n,
							payload: r
						}), t.groupID && (this.receiverGroupID = t.groupID, this.messageReceiver = t.groupID), t
						.to && (this.receiverUserID = t.to, this.messageReceiver = t.to)
				}
			}
			return a(e, [{
				key: "_patchRichMediaPayload",
				value: function(e, t) {
					e === ro.MSG_IMAGE ? t.imageInfoArray.forEach((function(e) {
							!e.imageUrl && e.url && (e.imageUrl = e.url, e.sizeType = e
								.type, 1 === e.type ? e.type = 0 : 3 === e.type && (
									e.type = 1))
						})) : e === ro.MSG_VIDEO ? !t.remoteVideoUrl && t.videoUrl && (t
							.remoteVideoUrl = t.videoUrl) : e === ro.MSG_AUDIO ? !t
						.remoteAudioUrl && t.url && (t.remoteAudioUrl = t.url) : e === ro
						.MSG_FILE && !t.fileUrl && t.url && (t.fileUrl = t.url, t.url = void 0)
				}
			}]), e
		}(),
		J_ = function() {
			function e(t) {
				if (o(this, e), this.type = ro.MSG_MERGER, this.content = {
						downloadKey: "",
						pbDownloadKey: "",
						messageList: [],
						title: "",
						abstractList: [],
						compatibleText: "",
						version: 0,
						layersOverLimit: !1
					}, t.downloadKey) {
					var n = t.downloadKey,
						r = t.pbDownloadKey,
						a = t.title,
						s = t.abstractList,
						i = t.compatibleText,
						u = t.version;
					this.content.downloadKey = n, this.content.pbDownloadKey = r, this.content.title = a, this
						.content.abstractList = s, this.content.compatibleText = i, this.content.version = u ||
						0
				} else if (Lu(t.messageList)) 1 === t.layersOverLimit && (this.content.layersOverLimit = !0);
				else {
					var c = t.messageList,
						l = t.title,
						p = t.abstractList,
						d = t.compatibleText,
						g = t.version,
						h = [];
					c.forEach((function(e) {
							if (!Lu(e)) {
								var t = new W_(e);
								h.push(t)
							}
						})), this.content.messageList = h, this.content.title = l, this.content.abstractList =
						p, this.content.compatibleText = d, this.content.version = g || 0
				}
				Ki.debug("MergerElement.content:", this.content)
			}
			return a(e, [{
				key: "sendable",
				value: function() {
					return !Lu(this.content.messageList) || !Lu(this.content.downloadKey)
				}
			}]), e
		}(),
		X_ = {
			1: ro.MSG_PRIORITY_HIGH,
			2: ro.MSG_PRIORITY_NORMAL,
			3: ro.MSG_PRIORITY_LOW,
			4: ro.MSG_PRIORITY_LOWEST
		},
		Q_ = function() {
			function e(t) {
				o(this, e), this.ID = "", this.conversationID = t.conversationID || null, this
					.conversationType = t.conversationType || ro.CONV_C2C, this.conversationSubType = t
					.conversationSubType, this.time = t.time || Math.ceil(Date.now() / 1e3), this.sequence = t
					.sequence || 0, this.clientSequence = t.clientSequence || t.sequence || 0, this.random = t
					.random || 0 === t.random ? t.random : iu(), this.priority = this._computePriority(t
						.priority), this.nick = t.nick || "", this.avatar = t.avatar || "", this.isPeerRead = !
					1, this.nameCard = "", this._elements = [], this.isPlaceMessage = t.isPlaceMessage || 0,
					this.isRevoked = 2 === t.isPlaceMessage || 8 === t.msgFlagBits, this.geo = {}, this.from = t
					.from || null, this.to = t.to || null, this.flow = "", this.isSystemMessage = t
					.isSystemMessage || !1, this.protocol = t.protocol || "JSON", this.isResend = !1, this
					.isRead = !1, this.status = t.status || Ec.SUCCESS, this._onlineOnlyFlag = !1, this
					._groupAtInfoList = [], this._relayFlag = !1, this.atUserList = [], this.cloudCustomData = t
					.cloudCustomData || "", this.isDeleted = !1, this.isModified = !1, this.reInitialize(t
						.currentUser), this.extractGroupInfo(t.groupProfile || null), this.handleGroupAtInfo(t)
			}
			return a(e, [{
				key: "elements",
				get: function() {
					return Ki.warn(
						"！！！Message 实例的 elements 属性即将废弃，请尽快修改。使用 type 和 payload 属性处理单条消息，兼容组合消息使用 _elements 属性！！！"
						), this._elements
				}
			}, {
				key: "getElements",
				value: function() {
					return this._elements
				}
			}, {
				key: "extractGroupInfo",
				value: function(e) {
					if (null !== e) {
						$i(e.nick) && (this.nick = e.nick), $i(e.avatar) && (this.avatar = e
							.avatar);
						var t = e.messageFromAccountExtraInformation;
						zi(t) && $i(t.nameCard) && (this.nameCard = t.nameCard)
					}
				}
			}, {
				key: "handleGroupAtInfo",
				value: function(e) {
					var t = this;
					e.payload && e.payload.atUserList && e.payload.atUserList.forEach((function(
						e) {
						e !== ro.MSG_AT_ALL ? (t._groupAtInfoList.push({
							groupAtAllFlag: 0,
							groupAtUserID: e
						}), t.atUserList.push(e)) : (t._groupAtInfoList.push({
							groupAtAllFlag: 1
						}), t.atUserList.push(ro.MSG_AT_ALL))
					})), Wi(e.groupAtInfo) && e.groupAtInfo.forEach((function(e) {
						1 === e.groupAtAllFlag ? t.atUserList.push(e
							.groupAtUserID) : 2 === e.groupAtAllFlag && t.atUserList
							.push(ro.MSG_AT_ALL)
					}))
				}
			}, {
				key: "getGroupAtInfoList",
				value: function() {
					return this._groupAtInfoList
				}
			}, {
				key: "_initProxy",
				value: function() {
					this._elements[0] && (this.payload = this._elements[0].content, this.type =
						this._elements[0].type)
				}
			}, {
				key: "reInitialize",
				value: function(e) {
					e && (this.status = this.from ? Ec.SUCCESS : Ec.UNSEND, !this.from && (this
							.from = e)), this._initFlow(e), this._initSequence(e), this
						._concatConversationID(e), this.generateMessageID(e)
				}
			}, {
				key: "isSendable",
				value: function() {
					return 0 !== this._elements.length && ("function" != typeof this._elements[
							0].sendable ? (Ki.warn("".concat(this._elements[0].type,
							' need "boolean : sendable()" method')), !1) : this._elements[0]
						.sendable())
				}
			}, {
				key: "_initTo",
				value: function(e) {
					this.conversationType === ro.CONV_GROUP && (this.to = e.groupID)
				}
			}, {
				key: "_initSequence",
				value: function(e) {
					0 === this.clientSequence && e && (this.clientSequence = function(e) {
						if (!e) return Ki.error(
							"autoIncrementIndex(string: key) need key parameter"
							), !1;
						if (void 0 === pu[e]) {
							var t = new Date,
								n = "3".concat(t.getHours()).slice(-2),
								o = "0".concat(t.getMinutes()).slice(-2),
								r = "0".concat(t.getSeconds()).slice(-2);
							pu[e] = parseInt([n, o, r, "0001"].join("")), n = null, o =
								null, r = null, Ki.log("autoIncrementIndex start index:"
									.concat(pu[e]))
						}
						return pu[e]++
					}(e)), 0 === this.sequence && this.conversationType === ro.CONV_C2C && (
						this.sequence = this.clientSequence)
				}
			}, {
				key: "generateMessageID",
				value: function(e) {
					var t = e === this.from ? 1 : 0,
						n = this.sequence > 0 ? this.sequence : this.clientSequence;
					this.ID = "".concat(this.conversationID, "-").concat(n, "-").concat(this
						.random, "-").concat(t)
				}
			}, {
				key: "_initFlow",
				value: function(e) {
					"" !== e && (e === this.from ? (this.flow = "out", this.isRead = !0) : this
						.flow = "in")
				}
			}, {
				key: "_concatConversationID",
				value: function(e) {
					var t = this.to,
						n = "",
						o = this.conversationType;
					o !== ro.CONV_SYSTEM ? (n = o === ro.CONV_C2C ? e === this.from ? t : this
							.from : this.to, this.conversationID = "".concat(o).concat(n)) :
						this.conversationID = ro.CONV_SYSTEM
				}
			}, {
				key: "isElement",
				value: function(e) {
					return e instanceof _h || e instanceof b_ || e instanceof w_ ||
						e instanceof P_ || e instanceof j_ || e instanceof Y_ ||
						e instanceof U_ || e instanceof q_ || e instanceof $_ ||
						e instanceof z_ || e instanceof J_
				}
			}, {
				key: "setElement",
				value: function(e) {
					var t = this;
					if (this.isElement(e)) return this._elements = [e], void this._initProxy();
					var n = function(e) {
						if (e.type && e.content) switch (e.type) {
							case ro.MSG_TEXT:
								t.setTextElement(e.content);
								break;
							case ro.MSG_IMAGE:
								t.setImageElement(e.content);
								break;
							case ro.MSG_AUDIO:
								t.setAudioElement(e.content);
								break;
							case ro.MSG_FILE:
								t.setFileElement(e.content);
								break;
							case ro.MSG_VIDEO:
								t.setVideoElement(e.content);
								break;
							case ro.MSG_CUSTOM:
								t.setCustomElement(e.content);
								break;
							case ro.MSG_GEO:
								t.setGEOElement(e.content);
								break;
							case ro.MSG_GRP_TIP:
								t.setGroupTipElement(e.content);
								break;
							case ro.MSG_GRP_SYS_NOTICE:
								t.setGroupSystemNoticeElement(e.content);
								break;
							case ro.MSG_FACE:
								t.setFaceElement(e.content);
								break;
							case ro.MSG_MERGER:
								t.setMergerElement(e.content);
								break;
							default:
								Ki.warn(e.type, e.content, "no operation......")
						}
					};
					if (Wi(e))
						for (var o = 0; o < e.length; o++) n(e[o]);
					else n(e);
					this._initProxy()
				}
			}, {
				key: "clearElement",
				value: function() {
					this._elements.length = 0
				}
			}, {
				key: "setTextElement",
				value: function(e) {
					var t = "string" == typeof e ? e : e.text,
						n = new _h({
							text: t
						});
					this._elements.push(n)
				}
			}, {
				key: "setImageElement",
				value: function(e) {
					var t = new b_(e);
					this._elements.push(t)
				}
			}, {
				key: "setAudioElement",
				value: function(e) {
					var t = new P_(e);
					this._elements.push(t)
				}
			}, {
				key: "setFileElement",
				value: function(e) {
					var t = new j_(e);
					this._elements.push(t)
				}
			}, {
				key: "setVideoElement",
				value: function(e) {
					var t = new Y_(e);
					this._elements.push(t)
				}
			}, {
				key: "setGEOElement",
				value: function(e) {
					var t = new z_(e);
					this._elements.push(t)
				}
			}, {
				key: "setCustomElement",
				value: function(e) {
					var t = new $_(e);
					this._elements.push(t)
				}
			}, {
				key: "setGroupTipElement",
				value: function(e) {
					var t = {},
						n = e.operationType;
					Lu(e.memberInfoList) ? e.operatorInfo && (t = e.operatorInfo) : n !== ro
						.GRP_TIP_MBR_JOIN && n !== ro.GRP_TIP_MBR_KICKED_OUT && n !== ro
						.GRP_TIP_MBR_SET_ADMIN && n !== ro.GRP_TIP_MBR_CANCELED_ADMIN || (t = e
							.memberInfoList[0]);
					var o = t,
						r = o.nick,
						a = o.avatar;
					$i(r) && (this.nick = r), $i(a) && (this.avatar = a);
					var s = new U_(e);
					this._elements.push(s)
				}
			}, {
				key: "setGroupSystemNoticeElement",
				value: function(e) {
					var t = new q_(e);
					this._elements.push(t)
				}
			}, {
				key: "setFaceElement",
				value: function(e) {
					var t = new w_(e);
					this._elements.push(t)
				}
			}, {
				key: "setMergerElement",
				value: function(e) {
					var t = new J_(e);
					this._elements.push(t)
				}
			}, {
				key: "setIsRead",
				value: function(e) {
					this.isRead = e
				}
			}, {
				key: "setRelayFlag",
				value: function(e) {
					this._relayFlag = e
				}
			}, {
				key: "getRelayFlag",
				value: function() {
					return this._relayFlag
				}
			}, {
				key: "setOnlineOnlyFlag",
				value: function(e) {
					this._onlineOnlyFlag = e
				}
			}, {
				key: "getOnlineOnlyFlag",
				value: function() {
					return this._onlineOnlyFlag
				}
			}, {
				key: "_computePriority",
				value: function(e) {
					if (Ji(e)) return ro.MSG_PRIORITY_NORMAL;
					if ($i(e) && -1 !== Object.values(X_).indexOf(e)) return e;
					if (ji(e)) {
						var t = "" + e;
						if (-1 !== Object.keys(X_).indexOf(t)) return X_[t]
					}
					return ro.MSG_PRIORITY_NORMAL
				}
			}, {
				key: "setNickAndAvatar",
				value: function(e) {
					var t = e.nick,
						n = e.avatar;
					$i(t) && (this.nick = t), $i(n) && (this.avatar = n)
				}
			}, {
				key: "setNameCard",
				value: function(e) {
					$i(e) && (this.nameCard = e)
				}
			}]), e
		}(),
		Z_ = function(e) {
			return {
				code: 0,
				data: e || {}
			}
		},
		em = "https://cloud.tencent.com/document/product/",
		tm = "您可以在即时通信 IM 控制台的【开发辅助工具(https://console.cloud.tencent.com/im-detail/tool-usersig)】页面校验 UserSig。",
		nm = "UserSig 非法，请使用官网提供的 API 重新生成 UserSig(".concat(em, "269/32688)。"),
		om = "#.E6.B6.88.E6.81.AF.E5.85.83.E7.B4.A0-timmsgelement",
		rm = {
			70001: "UserSig 已过期，请重新生成。建议 UserSig 有效期设置不小于24小时。",
			70002: "UserSig 长度为0，请检查传入的 UserSig 是否正确。",
			70003: nm,
			70005: nm,
			70009: "UserSig 验证失败，可能因为生成 UserSig 时混用了其他 SDKAppID 的私钥或密钥导致，请使用对应 SDKAppID 下的私钥或密钥重新生成 UserSig("
				.concat(em, "269/32688)。"),
			70013: "请求中的 UserID 与生成 UserSig 时使用的 UserID 不匹配。".concat(tm),
			70014: "请求中的 SDKAppID 与生成 UserSig 时使用的 SDKAppID 不匹配。".concat(tm),
			70016: "密钥不存在，UserSig 验证失败，请在即时通信 IM 控制台获取密钥(".concat(em,
				"269/32578#.E8.8E.B7.E5.8F.96.E5.AF.86.E9.92.A5)。"),
			70020: "SDKAppID 未找到，请在即时通信 IM 控制台确认应用信息。",
			70050: "UserSig 验证次数过于频繁。请检查 UserSig 是否正确，并于1分钟后重新验证。".concat(tm),
			70051: "帐号被拉入黑名单。",
			70052: "UserSig 已经失效，请重新生成，再次尝试。",
			70107: "因安全原因被限制登录，请不要频繁登录。",
			70169: "请求的用户帐号不存在。",
			70114: "".concat("服务端内部超时，请稍后重试。"),
			70202: "".concat("服务端内部超时，请稍后重试。"),
			70206: "请求中批量数量不合法。",
			70402: "参数非法，请检查必填字段是否填充，或者字段的填充是否满足协议要求。",
			70403: "请求失败，需要 App 管理员权限。",
			70398: "帐号数超限。如需创建多于100个帐号，请将应用升级为专业版，具体操作指引请参见购买指引(".concat(em, "269/32458)。"),
			70500: "".concat("服务端内部错误，请重试。"),
			71e3: "删除帐号失败。仅支持删除体验版帐号，您当前应用为专业版，暂不支持帐号删除。",
			20001: "请求包非法。",
			20002: "UserSig 或 A2 失效。",
			20003: "消息发送方或接收方 UserID 无效或不存在，请检查 UserID 是否已导入即时通信 IM。",
			20004: "网络异常，请重试。",
			20005: "".concat("服务端内部错误，请重试。"),
			20006: "触发发送".concat("单聊消息", "之前回调，App 后台返回禁止下发该消息。"),
			20007: "发送".concat("单聊消息", "，被对方拉黑，禁止发送。消息发送状态默认展示为失败，您可以登录控制台修改该场景下的消息发送状态展示结果，具体操作请参见消息保留设置(")
				.concat(em, "269/38656)。"),
			20009: "消息发送双方互相不是好友，禁止发送（配置".concat("单聊消息", "校验好友关系才会出现）。"),
			20010: "发送".concat("单聊消息", "，自己不是对方的好友（单向关系），禁止发送。"),
			20011: "发送".concat("单聊消息", "，对方不是自己的好友（单向关系），禁止发送。"),
			20012: "发送方被禁言，该条消息被禁止发送。",
			20016: "消息撤回超过了时间限制（默认2分钟）。",
			20018: "删除漫游内部错误。",
			90001: "JSON 格式解析失败，请检查请求包是否符合 JSON 规范。",
			90002: "".concat("JSON 格式请求包体",
				"中 MsgBody 不符合消息格式描述，或者 MsgBody 不是 Array 类型，请参考 TIMMsgElement 对象的定义(").concat(em,
				"269/2720").concat(om, ")。"),
			90003: "".concat("JSON 格式请求包体", "中缺少 To_Account 字段或者 To_Account 帐号不存在。"),
			90005: "".concat("JSON 格式请求包体", "中缺少 MsgRandom 字段或者 MsgRandom 字段不是 Integer 类型。"),
			90006: "".concat("JSON 格式请求包体", "中缺少 MsgTimeStamp 字段或者 MsgTimeStamp 字段不是 Integer 类型。"),
			90007: "".concat("JSON 格式请求包体", "中 MsgBody 类型不是 Array 类型，请将其修改为 Array 类型。"),
			90008: "".concat("JSON 格式请求包体", "中缺少 From_Account 字段或者 From_Account 帐号不存在。"),
			90009: "请求需要 App 管理员权限。",
			90010: "".concat("JSON 格式请求包体", "不符合消息格式描述，请参考 TIMMsgElement 对象的定义(").concat(em, "269/2720").concat(
				om, ")。"),
			90011: "批量发消息目标帐号超过500，请减少 To_Account 中目标帐号数量。",
			90012: "To_Account 没有注册或不存在，请确认 To_Account 是否导入即时通信 IM 或者是否拼写错误。",
			90026: "消息离线存储时间错误（最多不能超过7天）。",
			90031: "".concat("JSON 格式请求包体", "中 SyncOtherMachine 字段不是 Integer 类型。"),
			90044: "".concat("JSON 格式请求包体", "中 MsgLifeTime 字段不是 Integer 类型。"),
			90048: "请求的用户帐号不存在。",
			90054: "撤回请求中的 MsgKey 不合法。",
			90994: "".concat("服务端内部错误，请重试。"),
			90995: "".concat("服务端内部错误，请重试。"),
			91e3: "".concat("服务端内部错误，请重试。"),
			90992: "".concat("服务端内部错误，请重试。",
				"如果所有请求都返回该错误码，且 App 配置了第三方回调，请检查 App 服务端是否正常向即时通信 IM 后台服务端返回回调结果。"),
			93e3: "JSON 数据包超长，消息包体请不要超过8k。",
			91101: "Web 端长轮询被踢（Web 端同时在线实例个数超出限制）。",
			10002: "".concat("服务端内部错误，请重试。"),
			10003: "请求中的接口名称错误，请核对接口名称并重试。",
			10004: "参数非法，请根据错误描述检查请求是否正确。",
			10005: "请求包体中携带的帐号数量过多。",
			10006: "操作频率限制，请尝试降低调用的频率。",
			10007: "操作权限不足，例如 Work ".concat("群组", "中普通成员尝试执行踢人操作，但只有 App 管理员才有权限。"),
			10008: "请求非法，可能是请求中携带的签名信息验证不正确，请再次尝试。",
			10009: "该群不允许群主主动退出。",
			10010: "".concat("群组", "不存在，或者曾经存在过，但是目前已经被解散。"),
			10011: "解析 JSON 包体失败，请检查包体的格式是否符合 JSON 格式。",
			10012: "发起操作的 UserID 非法，请检查发起操作的用户 UserID 是否填写正确。",
			10013: "被邀请加入的用户已经是群成员。",
			10014: "群已满员，无法将请求中的用户加入".concat("群组", "，如果是批量加人，可以尝试减少加入用户的数量。"),
			10015: "找不到指定 ID 的".concat("群组", "。"),
			10016: "App 后台通过第三方回调拒绝本次操作。",
			10017: "因被禁言而不能发送消息，请检查发送者是否被设置禁言。",
			10018: "应答包长度超过最大包长（1MB），请求的内容过多，请尝试减少单次请求的数据量。",
			10019: "请求的用户帐号不存在。",
			10021: "".concat("群组", " ID 已被使用，请选择其他的").concat("群组", " ID。"),
			10023: "发消息的频率超限，请延长两次发消息时间的间隔。",
			10024: "此邀请或者申请请求已经被处理。",
			10025: "".concat("群组", " ID 已被使用，并且操作者为群主，可以直接使用。"),
			10026: "该 SDKAppID 请求的命令字已被禁用。",
			10030: "请求撤回的消息不存在。",
			10031: "消息撤回超过了时间限制（默认2分钟）。",
			10032: "请求撤回的消息不支持撤回操作。",
			10033: "".concat("群组", "类型不支持消息撤回操作。"),
			10034: "该消息类型不支持删除操作。",
			10035: "直播群和在线成员广播大群不支持删除消息。",
			10036: "直播群创建数量超过了限制，请参考价格说明(".concat(em, "269/11673)购买预付费套餐“IM直播群”。"),
			10037: "单个用户可创建和加入的".concat("群组", "数量超过了限制，请参考价格说明(").concat(em, "269/11673)购买或升级预付费套餐“单人可创建与加入")
				.concat("群组", "数”。"),
			10038: "群成员数量超过限制，请参考价格说明(".concat(em, "269/11673)购买或升级预付费套餐“扩展群人数上限”。"),
			10041: "该应用（SDKAppID）已配置不支持群消息撤回。",
			10050: "群属性 key 不存在",
			10056: "请在写入群属性前先使用 getGroupAttributes 接口更新本地群属性，避免冲突。",
			30001: "请求参数错误，请根据错误描述检查请求参数",
			30002: "SDKAppID 不匹配",
			30003: "请求的用户帐号不存在",
			30004: "请求需要 App 管理员权限",
			30005: "关系链字段中包含敏感词",
			30006: "".concat("服务端内部错误，请重试。"),
			30007: "".concat("网络超时，请稍后重试. "),
			30008: "并发写导致写冲突，建议使用批量方式",
			30009: "后台禁止该用户发起加好友请求",
			30010: "自己的好友数已达系统上限",
			30011: "分组已达系统上限",
			30012: "未决数已达系统上限",
			30014: "对方的好友数已达系统上限",
			30515: "请求添加好友时，对方在自己的黑名单中，不允许加好友",
			30516: "请求添加好友时，对方的加好友验证方式是不允许任何人添加自己为好友",
			30525: "请求添加好友时，自己在对方的黑名单中，不允许加好友",
			30539: "等待对方同意",
			30540: "添加好友请求被安全策略打击，请勿频繁发起添加好友请求",
			31704: "与请求删除的帐号之间不存在好友关系",
			31707: "删除好友请求被安全策略打击，请勿频繁发起删除好友请求"
		},
		am = function(e) {
			i(n, e);
			var t = _(n);

			function n(e) {
				var r;
				return o(this, n), (r = t.call(this)).code = e.code, r.message = rm[e.code] || e.message, r
					.data = e.data || {}, r
			}
			return n
		}(d(Error)),
		sm = null,
		im = function(e) {
			sm = e
		},
		um = function(e) {
			return Promise.resolve(Z_(e))
		},
		cm = function(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
			if (e instanceof am) return t && null !== sm && sm.emit(oo.ERROR, e), Promise.reject(e);
			if (e instanceof Error) {
				var n = new am({
					code: Tp.UNCAUGHT_ERROR,
					message: e.message
				});
				return t && null !== sm && sm.emit(oo.ERROR, n), Promise.reject(n)
			}
			if (Ji(e) || Ji(e.code) || Ji(e.message)) Ki.error(
				"IMPromise.reject 必须指定code(错误码)和message(错误信息)!!!");
			else {
				if (ji(e.code) && $i(e.message)) {
					var o = new am(e);
					return t && null !== sm && sm.emit(oo.ERROR, o), Promise.reject(o)
				}
				Ki.error("IMPromise.reject code(错误码)必须为数字，message(错误信息)必须为字符串!!!")
			}
		},
		lm = function(e) {
			i(n, e);
			var t = _(n);

			function n(e) {
				var r;
				return o(this, n), (r = t.call(this, e))._className = "C2CModule", r
			}
			return a(n, [{
				key: "onNewC2CMessage",
				value: function(e) {
					var t = e.dataList,
						n = e.isInstantMessage,
						o = e.C2CRemainingUnreadList;
					Ki.debug("".concat(this._className, ".onNewC2CMessage count:").concat(t
						.length, " isInstantMessage:").concat(n));
					var r = this._newC2CMessageStoredAndSummary({
							dataList: t,
							C2CRemainingUnreadList: o,
							isInstantMessage: n
						}),
						a = r.conversationOptionsList,
						s = r.messageList;
					(this.filterModifiedMessage(s), a.length > 0) && this.getModule(Jc)
						.onNewMessage({
							conversationOptionsList: a,
							isInstantMessage: n
						});
					var i = this.filterUnmodifiedMessage(s);
					n && i.length > 0 && this.emitOuterEvent(oo.MESSAGE_RECEIVED, i), s.length =
						0
				}
			}, {
				key: "_newC2CMessageStoredAndSummary",
				value: function(e) {
					for (var t = e.dataList, n = e.C2CRemainingUnreadList, o = e
							.isInstantMessage, r = null, a = [], s = [], i = {}, u = this
							.getModule(tl), c = 0, l = t.length; c < l; c++) {
						var p = t[c];
						p.currentUser = this.getMyUserID(), p.conversationType = ro.CONV_C2C, p
							.isSystemMessage = !!p.isSystemMessage, r = new Q_(p), p.elements =
							u.parseElements(p.elements, p.from), r.setElement(p.elements), r
							.setNickAndAvatar({
								nick: p.nick,
								avatar: p.avatar
							});
						var d = r.conversationID;
						if (o) {
							var g = !1,
								h = this.getModule(Jc);
							if (r.from !== this.getMyUserID()) {
								var f = h.getLatestMessageSentByPeer(d);
								if (f) {
									var _ = f.nick,
										m = f.avatar;
									_ === r.nick && m === r.avatar || (g = !0)
								}
							} else {
								var v = h.getLatestMessageSentByMe(d);
								if (v) {
									var M = v.nick,
										y = v.avatar;
									M === r.nick && y === r.avatar || h.modifyMessageSentByMe({
										conversationID: d,
										latestNick: r.nick,
										latestAvatar: r.avatar
									})
								}
							}
							var I = 1 === t[c].isModified;
							if (h.isMessageSentByCurrentInstance(r) ? r.isModified = I : I = !1,
								0 === p.msgLifeTime) r.setOnlineOnlyFlag(!0), s.push(r);
							else {
								if (!h.pushIntoMessageList(s, r, I)) continue;
								g && (h.modifyMessageSentByPeer(d), h
									.updateUserProfileSpecifiedKey({
										conversationID: d,
										nick: r.nick,
										avatar: r.avatar
									}))
							}
							this.getModule(ll).addMessageDelay({
								currentTime: Date.now(),
								time: r.time
							})
						}
						if (0 !== p.msgLifeTime) {
							if (!1 === r.getOnlineOnlyFlag())
								if (Ji(i[d])) i[d] = a.push({
									conversationID: d,
									unreadCount: "out" === r.flow ? 0 : 1,
									type: r.conversationType,
									subType: r.conversationSubType,
									lastMessage: r
								}) - 1;
								else {
									var T = i[d];
									a[T].type = r.conversationType, a[T].subType = r
										.conversationSubType, a[T].lastMessage = r, "in" === r
										.flow && a[T].unreadCount++
								}
						} else r.setOnlineOnlyFlag(!0)
					}
					if (Wi(n))
						for (var S = function(e, t) {
								var o = a.find((function(t) {
									return t.conversationID === "C2C".concat(n[
										e].from)
								}));
								o ? o.unreadCount += n[e].count : a.push({
									conversationID: "C2C".concat(n[e].from),
									unreadCount: n[e].count,
									type: ro.CONV_C2C,
									lastMsgTime: n[e].lastMsgTime
								})
							}, D = 0, E = n.length; D < E; D++) S(D);
					return {
						conversationOptionsList: a,
						messageList: s
					}
				}
			}, {
				key: "onC2CMessageRevoked",
				value: function(e) {
					var t = this;
					Ki.debug("".concat(this._className, ".onC2CMessageRevoked count:").concat(e
						.dataList.length));
					var n = this.getModule(Jc),
						o = [],
						r = null;
					e.dataList.forEach((function(e) {
						if (e.c2cMessageRevokedNotify) {
							var a = e.c2cMessageRevokedNotify.revokedInfos;
							Ji(a) || a.forEach((function(e) {
								var a = t.getMyUserID() === e.from ? ""
									.concat(ro.CONV_C2C).concat(e.to) :
									"".concat(ro.CONV_C2C).concat(e
										.from);
								(r = n.revoke(a, e.sequence, e
								.random)) && o.push(r)
							}))
						}
					})), 0 !== o.length && (n.onMessageRevoked(o), this.emitOuterEvent(oo
						.MESSAGE_REVOKED, o))
				}
			}, {
				key: "onC2CMessageReadReceipt",
				value: function(e) {
					var t = this;
					e.dataList.forEach((function(e) {
						if (!Lu(e.c2cMessageReadReceipt)) {
							var n = e.c2cMessageReadReceipt.to;
							e.c2cMessageReadReceipt.uinPairReadArray.forEach((
								function(e) {
									var o = e.peerReadTime;
									Ki.debug("".concat(t._className,
										"._onC2CMessageReadReceipt to:"
										).concat(n,
										" peerReadTime:").concat(o));
									var r = "".concat(ro.CONV_C2C).concat(
										n),
										a = t.getModule(Jc);
									a.recordPeerReadTime(r, o), a
										.updateMessageIsPeerReadProperty(r,
											o)
								}))
						}
					}))
				}
			}, {
				key: "onC2CMessageReadNotice",
				value: function(e) {
					var t = this;
					e.dataList.forEach((function(e) {
						if (!Lu(e.c2cMessageReadNotice)) {
							var n = t.getModule(Jc);
							e.c2cMessageReadNotice.uinPairReadArray.forEach((
								function(e) {
									var o = e.from,
										r = e.peerReadTime;
									Ki.debug("".concat(t._className,
										".onC2CMessageReadNotice from:"
										).concat(o,
										" lastReadTime:").concat(r));
									var a = "".concat(ro.CONV_C2C).concat(
									o);
									n.updateIsReadAfterReadReport({
										conversationID: a,
										lastMessageTime: r
									}), n.updateUnreadCount(a)
								}))
						}
					}))
				}
			}, {
				key: "sendMessage",
				value: function(e, t) {
					var n = this._createC2CMessagePack(e, t);
					return this.request(n)
				}
			}, {
				key: "_createC2CMessagePack",
				value: function(e, t) {
					var n = null;
					t && (t.offlinePushInfo && (n = t.offlinePushInfo), !0 === t
						.onlineUserOnly && (n ? n.disablePush = !0 : n = {
							disablePush: !0
						}));
					var o = "";
					return $i(e.cloudCustomData) && e.cloudCustomData.length > 0 && (o = e
						.cloudCustomData), {
						protocolName: ml,
						tjgID: this.generateTjgID(e),
						requestData: {
							fromAccount: this.getMyUserID(),
							toAccount: e.to,
							msgTimeStamp: Math.ceil(Date.now() / 1e3),
							msgBody: e.getElements(),
							cloudCustomData: o,
							msgSeq: e.sequence,
							msgRandom: e.random,
							msgLifeTime: this.isOnlineMessage(e, t) ? 0 : void 0,
							nick: e.nick,
							avatar: e.avatar,
							offlinePushInfo: n ? {
								pushFlag: !0 === n.disablePush ? 1 : 0,
								title: n.title || "",
								desc: n.description || "",
								ext: n.extension || "",
								apnsInfo: {
									badgeMode: !0 === n.ignoreIOSBadge ? 1 : 0
								},
								androidInfo: {
									OPPOChannelID: n.androidOPPOChannelID || ""
								}
							} : void 0
						}
					}
				}
			}, {
				key: "isOnlineMessage",
				value: function(e, t) {
					return !(!t || !0 !== t.onlineUserOnly)
				}
			}, {
				key: "revokeMessage",
				value: function(e) {
					return this.request({
						protocolName: Dl,
						requestData: {
							msgInfo: {
								fromAccount: e.from,
								toAccount: e.to,
								msgSeq: e.sequence,
								msgRandom: e.random,
								msgTimeStamp: e.time
							}
						}
					})
				}
			}, {
				key: "deleteMessage",
				value: function(e) {
					var t = e.to,
						n = e.keyList;
					return Ki.log("".concat(this._className, ".deleteMessage toAccount:")
						.concat(t, " count:").concat(n.length)), this.request({
						protocolName: kl,
						requestData: {
							fromAccount: this.getMyUserID(),
							to: t,
							keyList: n
						}
					})
				}
			}, {
				key: "setMessageRead",
				value: function(e) {
					var t = this,
						n = e.conversationID,
						o = e.lastMessageTime,
						r = "".concat(this._className, ".setMessageRead");
					Ki.log("".concat(r, " conversationID:").concat(n, " lastMessageTime:")
						.concat(o)), ji(o) || Ki.warn("".concat(r,
						" 请勿修改 Conversation.lastMessage.lastTime，否则可能会导致已读上报结果不准确"));
					var a = new jd(lg);
					return a.setMessage("conversationID:".concat(n, " lastMessageTime:").concat(
						o)), this.request({
						protocolName: El,
						requestData: {
							C2CMsgReaded: {
								cookie: "",
								C2CMsgReadedItem: [{
									toAccount: n.replace("C2C", ""),
									lastMessageTime: o,
									receipt: 1
								}]
							}
						}
					}).then((function() {
						a.setNetworkType(t.getNetworkType()).end(), Ki.log(""
							.concat(r, " ok"));
						var e = t.getModule(Jc);
						return e.updateIsReadAfterReadReport({
							conversationID: n,
							lastMessageTime: o
						}), e.updateUnreadCount(n), Z_()
					})).catch((function(e) {
						return t.probeNetwork().then((function(t) {
							var n = m(t, 2),
								o = n[0],
								r = n[1];
							a.setError(e, o, r).end()
						})), Ki.log("".concat(r, " failed. error:"), e), cm(e)
					}))
				}
			}, {
				key: "getRoamingMessage",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, ".getRoamingMessage"),
						o = e.peerAccount,
						r = e.conversationID,
						a = e.count,
						s = e.lastMessageTime,
						i = e.messageKey,
						u = "peerAccount:".concat(o, " count:").concat(a || 15,
							" lastMessageTime:").concat(s || 0, " messageKey:").concat(i);
					Ki.log("".concat(n, " ").concat(u));
					var c = new jd(sg);
					return this.request({
						protocolName: Cl,
						requestData: {
							peerAccount: o,
							count: a || 15,
							lastMessageTime: s || 0,
							messageKey: i
						}
					}).then((function(e) {
						var o = e.data,
							a = o.complete,
							s = o.messageList,
							i = o.messageKey;
						Ji(s) ? Ki.log("".concat(n, " ok. complete:").concat(a,
							" but messageList is undefined!")) : Ki.log(""
							.concat(n, " ok. complete:").concat(a, " count:")
							.concat(s.length)), c.setNetworkType(t
							.getNetworkType()).setMessage("".concat(u,
							" complete:").concat(a, " length:").concat(s
							.length)).end();
						var l = t.getModule(Jc);
						1 === a && l.setCompleted(r);
						var p = l.storeRoamingMessage(s, r);
						l.modifyMessageList(r), l.updateIsRead(r), l
							.updateRoamingMessageKey(r, i);
						var d = l.getPeerReadTime(r);
						if (Ki.log("".concat(n,
									" update isPeerRead property. conversationID:")
								.concat(r, " peerReadTime:").concat(d)), d) l
							.updateMessageIsPeerReadProperty(r, d);
						else {
							var g = r.replace(ro.CONV_C2C, "");
							t.getRemotePeerReadTime([g]).then((function() {
								l.updateMessageIsPeerReadProperty(r, l
									.getPeerReadTime(r))
							}))
						}
						return p
					})).catch((function(e) {
						return t.probeNetwork().then((function(t) {
							var n = m(t, 2),
								o = n[0],
								r = n[1];
							c.setMessage(u).setError(e, o, r).end()
						})), Ki.warn("".concat(n, " failed. error:"), e), cm(e)
					}))
				}
			}, {
				key: "getRemotePeerReadTime",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, ".getRemotePeerReadTime");
					if (Lu(e)) return Ki.warn("".concat(n, " userIDList is empty!")), Promise
						.resolve();
					var o = new jd(gg);
					return Ki.log("".concat(n, " userIDList:").concat(e)), this.request({
						protocolName: Al,
						requestData: {
							userIDList: e
						}
					}).then((function(r) {
						var a = r.data.peerReadTimeList;
						Ki.log("".concat(n, " ok. peerReadTimeList:").concat(a));
						for (var s = "", i = t.getModule(Jc), u = 0; u < e
							.length; u++) s += "".concat(e[u], "-").concat(a[u],
							" "), a[u] > 0 && i.recordPeerReadTime("C2C".concat(
							e[u]), a[u]);
						o.setNetworkType(t.getNetworkType()).setMessage(s).end()
					})).catch((function(e) {
						t.probeNetwork().then((function(t) {
							var n = m(t, 2),
								r = n[0],
								a = n[1];
							o.setError(e, r, a).end()
						})), Ki.warn("".concat(n, " failed. error:"), e)
					}))
				}
			}]), n
		}(pl),
		pm = Math.floor,
		dm = function(e, t) {
			var n = e.length,
				o = pm(n / 2);
			return n < 8 ? gm(e, t) : hm(dm(e.slice(0, o), t), dm(e.slice(o), t), t)
		},
		gm = function(e, t) {
			for (var n, o, r = e.length, a = 1; a < r;) {
				for (o = a, n = e[a]; o && t(e[o - 1], n) > 0;) e[o] = e[--o];
				o !== a++ && (e[o] = n)
			}
			return e
		},
		hm = function(e, t, n) {
			for (var o = e.length, r = t.length, a = 0, s = 0, i = []; a < o || s < r;) a < o && s < r ? i.push(
				n(e[a], t[s]) <= 0 ? e[a++] : t[s++]) : i.push(a < o ? e[a++] : t[s++]);
			return i
		},
		fm = dm,
		_m = $.match(/firefox\/(\d+)/i),
		mm = !!_m && +_m[1],
		vm = /MSIE|Trident/.test($),
		Mm = $.match(/AppleWebKit\/(\d+)\./),
		ym = !!Mm && +Mm[1],
		Im = [],
		Tm = Im.sort,
		Sm = L((function() {
			Im.sort(void 0)
		})),
		Dm = L((function() {
			Im.sort(null)
		})),
		Em = zt("sort"),
		Cm = !L((function() {
			if (X) return X < 70;
			if (!(mm && mm > 3)) {
				if (vm) return !0;
				if (ym) return ym < 603;
				var e, t, n, o, r = "";
				for (e = 65; e < 76; e++) {
					switch (t = String.fromCharCode(e), e) {
						case 66:
						case 69:
						case 70:
						case 72:
							n = 3;
							break;
						case 68:
						case 71:
							n = 4;
							break;
						default:
							n = 2
					}
					for (o = 0; o < 47; o++) Im.push({
						k: t + o,
						v: n
					})
				}
				for (Im.sort((function(e, t) {
						return t.v - e.v
					})), o = 0; o < Im.length; o++) t = Im[o].k.charAt(0), r.charAt(r.length - 1) !==
					t && (r += t);
				return "DGBEFHACIJK" !== r
			}
		}));
	vt({
		target: "Array",
		proto: !0,
		forced: Sm || !Dm || !Em || !Cm
	}, {
		sort: function(e) {
			void 0 !== e && xt(e);
			var t = re(this);
			if (Cm) return void 0 === e ? Tm.call(t) : Tm.call(t, e);
			var n, o, r = [],
				a = We(t.length);
			for (o = 0; o < a; o++) o in t && r.push(t[o]);
			for (n = (r = fm(r, function(e) {
					return function(t, n) {
						return void 0 === n ? -1 : void 0 === t ? 1 : void 0 !== e ? +e(
							t, n) || 0 : Mt(t) > Mt(n) ? 1 : -1
					}
				}(e))).length, o = 0; o < n;) t[o] = r[o++];
			for (; o < a;) delete t[o++];
			return t
		}
	});
	var Am = Yt.findIndex,
		km = !0;
	"findIndex" in [] && Array(1).findIndex((function() {
		km = !1
	})), vt({
		target: "Array",
		proto: !0,
		forced: km
	}, {
		findIndex: function(e) {
			return Am(this, e, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), cr("findIndex");
	var Nm = function() {
			function e(t) {
				o(this, e), this.list = new Map, this._className = "MessageListHandler", this
					._latestMessageSentByPeerMap = new Map, this._latestMessageSentByMeMap = new Map, this
					._groupLocalLastMessageSequenceMap = new Map
			}
			return a(e, [{
				key: "getLocalOldestMessageByConversationID",
				value: function(e) {
					if (!e) return null;
					if (!this.list.has(e)) return null;
					var t = this.list.get(e).values();
					return t ? t.next().value : null
				}
			}, {
				key: "pushIn",
				value: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = e.conversationID,
						o = e.ID,
						r = !0;
					this.list.has(n) || this.list.set(n, new Map);
					var a = this.list.get(n).has(o);
					if (a) {
						var s = this.list.get(n).get(o);
						if (!t || !0 === s.isModified) return r = !1
					}
					return this.list.get(n).set(o, e), this._setLatestMessageSentByPeer(n, e),
						this._setLatestMessageSentByMe(n, e), this
						._setGroupLocalLastMessageSequence(n, e), r
				}
			}, {
				key: "unshift",
				value: function(e) {
					var t;
					if (Wi(e)) {
						if (e.length > 0) {
							t = e[0].conversationID;
							var n = e.length;
							this._unshiftMultipleMessages(e), this
								._setGroupLocalLastMessageSequence(t, e[n - 1])
						}
					} else t = e.conversationID, this._unshiftSingleMessage(e), this
						._setGroupLocalLastMessageSequence(t, e);
					if (t && t.startsWith(ro.CONV_C2C)) {
						var o = Array.from(this.list.get(t).values()),
							r = o.length;
						if (0 === r) return;
						for (var a = r - 1; a >= 0; a--)
							if ("out" === o[a].flow) {
								this._setLatestMessageSentByMe(t, o[a]);
								break
							} for (var s = r - 1; s >= 0; s--)
							if ("in" === o[s].flow) {
								this._setLatestMessageSentByPeer(t, o[s]);
								break
							}
					}
				}
			}, {
				key: "_unshiftSingleMessage",
				value: function(e) {
					var t = e.conversationID,
						n = e.ID;
					if (!this.list.has(t)) return this.list.set(t, new Map), void this.list.get(
						t).set(n, e);
					var o = Array.from(this.list.get(t));
					o.unshift([n, e]), this.list.set(t, new Map(o))
				}
			}, {
				key: "_unshiftMultipleMessages",
				value: function(e) {
					for (var t = e.length, n = [], o = e[0].conversationID, r = this.list.has(
							o) ? Array.from(this.list.get(o)) : [], a = 0; a < t; a++) n.push([
						e[a].ID, e[a]
					]);
					this.list.set(o, new Map(n.concat(r)))
				}
			}, {
				key: "remove",
				value: function(e) {
					var t = e.conversationID,
						n = e.ID;
					this.list.has(t) && this.list.get(t).delete(n)
				}
			}, {
				key: "revoke",
				value: function(e, t, n) {
					if (Ki.debug("revoke message", e, t, n), this.list.has(e)) {
						var o, r = D(this.list.get(e));
						try {
							for (r.s(); !(o = r.n()).done;) {
								var a = m(o.value, 2)[1];
								if (a.sequence === t && !a.isRevoked && (Ji(n) || a.random ===
										n)) return a.isRevoked = !0, a
							}
						} catch (s) {
							r.e(s)
						} finally {
							r.f()
						}
					}
					return null
				}
			}, {
				key: "removeByConversationID",
				value: function(e) {
					this.list.has(e) && (this.list.delete(e), this._latestMessageSentByPeerMap
						.delete(e), this._latestMessageSentByMeMap.delete(e))
				}
			}, {
				key: "updateMessageIsPeerReadProperty",
				value: function(e, t) {
					var n = [];
					if (this.list.has(e)) {
						var o, r = D(this.list.get(e));
						try {
							for (r.s(); !(o = r.n()).done;) {
								var a = m(o.value, 2)[1];
								a.time <= t && !a.isPeerRead && "out" === a.flow && (a
									.isPeerRead = !0, n.push(a))
							}
						} catch (s) {
							r.e(s)
						} finally {
							r.f()
						}
						Ki.log("".concat(this._className,
							".updateMessageIsPeerReadProperty conversationID:").concat(
							e, " peerReadTime:").concat(t, " count:").concat(n.length))
					}
					return n
				}
			}, {
				key: "updateMessageIsModifiedProperty",
				value: function(e) {
					var t = e.conversationID,
						n = e.ID;
					if (this.list.has(t)) {
						var o = this.list.get(t).get(n);
						o && (o.isModified = !0)
					}
				}
			}, {
				key: "hasLocalMessageList",
				value: function(e) {
					return this.list.has(e)
				}
			}, {
				key: "getLocalMessageList",
				value: function(e) {
					return this.hasLocalMessageList(e) ? v(this.list.get(e).values()) : []
				}
			}, {
				key: "hasLocalMessage",
				value: function(e, t) {
					return !!this.hasLocalMessageList(e) && this.list.get(e).has(t)
				}
			}, {
				key: "getLocalMessage",
				value: function(e, t) {
					return this.hasLocalMessage(e, t) ? this.list.get(e).get(t) : null
				}
			}, {
				key: "_setLatestMessageSentByPeer",
				value: function(e, t) {
					e.startsWith(ro.CONV_C2C) && "in" === t.flow && this
						._latestMessageSentByPeerMap.set(e, t)
				}
			}, {
				key: "_setLatestMessageSentByMe",
				value: function(e, t) {
					e.startsWith(ro.CONV_C2C) && "out" === t.flow && this
						._latestMessageSentByMeMap.set(e, t)
				}
			}, {
				key: "_setGroupLocalLastMessageSequence",
				value: function(e, t) {
					e.startsWith(ro.CONV_GROUP) && this._groupLocalLastMessageSequenceMap.set(e,
						t.sequence)
				}
			}, {
				key: "getLatestMessageSentByPeer",
				value: function(e) {
					return this._latestMessageSentByPeerMap.get(e)
				}
			}, {
				key: "getLatestMessageSentByMe",
				value: function(e) {
					return this._latestMessageSentByMeMap.get(e)
				}
			}, {
				key: "getGroupLocalLastMessageSequence",
				value: function(e) {
					return this._groupLocalLastMessageSequenceMap.get(e) || 0
				}
			}, {
				key: "modifyMessageSentByPeer",
				value: function(e, t) {
					var n = this.list.get(e);
					if (!Lu(n)) {
						var o = Array.from(n.values()),
							r = o.length;
						if (0 !== r) {
							var a = null,
								s = null;
							t && (s = t);
							for (var i = 0, u = !1, c = r - 1; c >= 0; c--) "in" === o[c]
								.flow && (null === s ? s = o[c] : ((a = o[c]).nick !== s.nick &&
									(a.setNickAndAvatar({
										nick: s.nick
									}), u = !0), a.avatar !== s.avatar && (a
										.setNickAndAvatar({
											avatar: s.avatar
										}), u = !0), u && (i += 1)));
							Ki.log("".concat(this._className,
								".modifyMessageSentByPeer conversationID:").concat(e,
								" count:").concat(i))
						}
					}
				}
			}, {
				key: "modifyMessageSentByMe",
				value: function(e) {
					var t = e.conversationID,
						n = e.latestNick,
						o = e.latestAvatar,
						r = this.list.get(t);
					if (!Lu(r)) {
						var a = Array.from(r.values()),
							s = a.length;
						if (0 !== s) {
							for (var i = null, u = 0, c = !1, l = s - 1; l >= 0; l--) "out" ===
								a[l].flow && ((i = a[l]).nick !== n && (i.setNickAndAvatar({
									nick: n
								}), c = !0), i.avatar !== o && (i.setNickAndAvatar({
									avatar: o
								}), c = !0), c && (u += 1));
							Ki.log("".concat(this._className,
								".modifyMessageSentByMe conversationID:").concat(t,
								" count:").concat(u))
						}
					}
				}
			}, {
				key: "traversal",
				value: function() {
					if (0 !== this.list.size && -1 === Ki.getLevel()) {
						console.group("conversationID-messageCount");
						var e, t = D(this.list);
						try {
							for (t.s(); !(e = t.n()).done;) {
								var n = m(e.value, 2),
									o = n[0],
									r = n[1];
								console.log("".concat(o, "-").concat(r.size))
							}
						} catch (a) {
							t.e(a)
						} finally {
							t.f()
						}
						console.groupEnd()
					}
				}
			}, {
				key: "reset",
				value: function() {
					this.list.clear(), this._latestMessageSentByPeerMap.clear(), this
						._latestMessageSentByMeMap.clear(), this
						._groupLocalLastMessageSequenceMap.clear()
				}
			}]), e
		}(),
		Om = {
			CONTEXT_A2KEY_AND_TINYID_UPDATED: "_a2KeyAndTinyIDUpdated",
			CLOUD_CONFIG_UPDATED: "_cloudConfigUpdated"
		};

	function Lm(e) {
		this.mixin(e)
	}
	Lm.mixin = function(e) {
		var t = e.prototype || e;
		t._isReady = !1, t.ready = function(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
			if (e) return this._isReady ? void(t ? e.call(this) : setTimeout(e, 1)) : (this
				._readyQueue = this._readyQueue || [], void this._readyQueue.push(e))
		}, t.triggerReady = function() {
			var e = this;
			this._isReady = !0, setTimeout((function() {
				var t = e._readyQueue;
				e._readyQueue = [], t && t.length > 0 && t.forEach((function(e) {
					e.call(this)
				}), e)
			}), 1)
		}, t.resetReady = function() {
			this._isReady = !1, this._readyQueue = []
		}, t.isReady = function() {
			return this._isReady
		}
	};
	var Rm = ["jpg", "jpeg", "gif", "png", "bmp"],
		bm = ["mp4"],
		wm = 1,
		Pm = 2,
		Gm = 3,
		Um = 255,
		Fm = function() {
			function e(t) {
				var n = this;
				o(this, e), Lu(t) || (this.userID = t.userID || "", this.nick = t.nick || "", this.gender = t
					.gender || "", this.birthday = t.birthday || 0, this.location = t.location || "", this
					.selfSignature = t.selfSignature || "", this.allowType = t.allowType || ro
					.ALLOW_TYPE_ALLOW_ANY, this.language = t.language || 0, this.avatar = t.avatar || "",
					this.messageSettings = t.messageSettings || 0, this.adminForbidType = t
					.adminForbidType || ro.FORBID_TYPE_NONE, this.level = t.level || 0, this.role = t
					.role || 0, this.lastUpdatedTime = 0, this.profileCustomField = [], Lu(t
						.profileCustomField) || t.profileCustomField.forEach((function(e) {
						n.profileCustomField.push({
							key: e.key,
							value: e.value
						})
					})))
			}
			return a(e, [{
				key: "validate",
				value: function(e) {
					var t = !0,
						n = "";
					if (Lu(e)) return {
						valid: !1,
						tips: "empty options"
					};
					if (e.profileCustomField)
						for (var o = e.profileCustomField.length, r = null, a = 0; a < o; a++) {
							if (r = e.profileCustomField[a], !$i(r.key) || -1 === r.key.indexOf(
									"Tag_Profile_Custom")) return {
								valid: !1,
								tips: "自定义资料字段的前缀必须是 Tag_Profile_Custom"
							};
							if (!$i(r.value)) return {
								valid: !1,
								tips: "自定义资料字段的 value 必须是字符串"
							}
						}
					for (var s in e)
						if (Object.prototype.hasOwnProperty.call(e, s)) {
							if ("profileCustomField" === s) continue;
							if (Lu(e[s]) && !$i(e[s]) && !ji(e[s])) {
								n = "key:" + s + ", invalid value:" + e[s], t = !1;
								continue
							}
							switch (s) {
								case "nick":
									$i(e[s]) || (n = "nick should be a string", t = !1), su(e[
										s]) > 500 && (n =
										"nick name limited: must less than or equal to "
										.concat(500, " bytes, current size: ").concat(su(e[
											s]), " bytes"), t = !1);
									break;
								case "gender":
									lu(k_, e.gender) || (n = "key:gender, invalid value:" + e
										.gender, t = !1);
									break;
								case "birthday":
									ji(e.birthday) || (n = "birthday should be a number", t = !
										1);
									break;
								case "location":
									$i(e.location) || (n = "location should be a string", t = !
										1);
									break;
								case "selfSignature":
									$i(e.selfSignature) || (n =
										"selfSignature should be a string", t = !1);
									break;
								case "allowType":
									lu(O_, e.allowType) || (n =
										"key:allowType, invalid value:" + e.allowType, t = !
										1);
									break;
								case "language":
									ji(e.language) || (n = "language should be a number", t = !
										1);
									break;
								case "avatar":
									$i(e.avatar) || (n = "avatar should be a string", t = !1);
									break;
								case "messageSettings":
									0 !== e.messageSettings && 1 !== e.messageSettings && (n =
										"messageSettings should be 0 or 1", t = !1);
									break;
								case "adminForbidType":
									lu(N_, e.adminForbidType) || (n =
										"key:adminForbidType, invalid value:" + e
										.adminForbidType, t = !1);
									break;
								case "level":
									ji(e.level) || (n = "level should be a number", t = !1);
									break;
								case "role":
									ji(e.role) || (n = "role should be a number", t = !1);
									break;
								default:
									n = "unknown key:" + s + "  " + e[s], t = !1
							}
						} return {
						valid: t,
						tips: n
					}
				}
			}]), e
		}(),
		qm = function e(t) {
			o(this, e), this.value = t, this.next = null
		},
		xm = function() {
			function e(t) {
				o(this, e), this.MAX_LENGTH = t, this.pTail = null, this.pNodeToDel = null, this.map = new Map,
					Ki.debug("SinglyLinkedList init MAX_LENGTH:".concat(this.MAX_LENGTH))
			}
			return a(e, [{
				key: "set",
				value: function(e) {
					var t = new qm(e);
					if (this.map.size < this.MAX_LENGTH) null === this.pTail ? (this.pTail = t,
							this.pNodeToDel = t) : (this.pTail.next = t, this.pTail = t), this
						.map.set(e, 1);
					else {
						var n = this.pNodeToDel;
						this.pNodeToDel = this.pNodeToDel.next, this.map.delete(n.value), n
							.next = null, n = null, this.pTail.next = t, this.pTail = t, this
							.map.set(e, 1)
					}
				}
			}, {
				key: "has",
				value: function(e) {
					return this.map.has(e)
				}
			}, {
				key: "delete",
				value: function(e) {
					this.has(e) && this.map.delete(e)
				}
			}, {
				key: "tail",
				value: function() {
					return this.pTail
				}
			}, {
				key: "size",
				value: function() {
					return this.map.size
				}
			}, {
				key: "data",
				value: function() {
					return Array.from(this.map.keys())
				}
			}, {
				key: "reset",
				value: function() {
					for (var e; null !== this.pNodeToDel;) e = this.pNodeToDel, this
						.pNodeToDel = this.pNodeToDel.next, e.next = null, e = null;
					this.pTail = null, this.map.clear()
				}
			}]), e
		}(),
		Vm = ["groupID", "name", "avatar", "type", "introduction", "notification", "ownerID", "selfInfo",
			"createTime", "infoSequence", "lastInfoTime", "lastMessage", "nextMessageSeq", "memberNum",
			"maxMemberNum", "memberList", "joinOption", "groupCustomField", "muteAllMembers"
		],
		Km = function() {
			function e(t) {
				o(this, e), this.groupID = "", this.name = "", this.avatar = "", this.type = "", this
					.introduction = "", this.notification = "", this.ownerID = "", this.createTime = "", this
					.infoSequence = "", this.lastInfoTime = "", this.selfInfo = {
						messageRemindType: "",
						joinTime: "",
						nameCard: "",
						role: ""
					}, this.lastMessage = {
						lastTime: "",
						lastSequence: "",
						fromAccount: "",
						messageForShow: ""
					}, this.nextMessageSeq = "", this.memberNum = "", this.memberCount = "", this.maxMemberNum =
					"", this.maxMemberCount = "", this.joinOption = "", this.groupCustomField = [], this
					.muteAllMembers = void 0, this._initGroup(t)
			}
			return a(e, [{
				key: "memberNum",
				get: function() {
					return Ki.warn("！！！v2.8.0起弃用memberNum，请使用 memberCount"), this.memberCount
				},
				set: function(e) {}
			}, {
				key: "maxMemberNum",
				get: function() {
					return Ki.warn("！！！v2.8.0起弃用maxMemberNum，请使用 maxMemberCount"), this
						.maxMemberCount
				},
				set: function(e) {}
			}, {
				key: "_initGroup",
				value: function(e) {
					for (var t in e) Vm.indexOf(t) < 0 || ("selfInfo" !== t ? ("memberNum" ===
							t && (this.memberCount = e[t]), "maxMemberNum" === t && (this
								.maxMemberCount = e[t]), this[t] = e[t]) : this
						.updateSelfInfo(e[t]))
				}
			}, {
				key: "updateGroup",
				value: function(e) {
					var t = JSON.parse(JSON.stringify(e));
					t.lastMsgTime && (this.lastMessage.lastTime = t.lastMsgTime), Ji(t
							.muteAllMembers) || ("On" === t.muteAllMembers ? t
							.muteAllMembers = !0 : t.muteAllMembers = !1), t.groupCustomField &&
						fu(this.groupCustomField, t.groupCustomField), Ji(t.memberNum) || (this
							.memberCount = t.memberNum), Ji(t.maxMemberNum) || (this
							.maxMemberCount = t.maxMemberNum), ru(this, t, ["members",
							"errorCode", "lastMsgTime", "groupCustomField", "memberNum",
							"maxMemberNum"
						])
				}
			}, {
				key: "updateSelfInfo",
				value: function(e) {
					var t = e.nameCard,
						n = e.joinTime,
						o = e.role,
						r = e.messageRemindType;
					ru(this.selfInfo, {
						nameCard: t,
						joinTime: n,
						role: o,
						messageRemindType: r
					}, [], ["", null, void 0, 0, NaN])
				}
			}, {
				key: "setSelfNameCard",
				value: function(e) {
					this.selfInfo.nameCard = e
				}
			}]), e
		}(),
		Bm = function(e, t) {
			if (Ji(t)) return "";
			switch (e) {
				case ro.MSG_TEXT:
					return t.text;
				case ro.MSG_IMAGE:
					return "[图片]";
				case ro.MSG_GEO:
					return "[位置]";
				case ro.MSG_AUDIO:
					return "[语音]";
				case ro.MSG_VIDEO:
					return "[视频]";
				case ro.MSG_FILE:
					return "[文件]";
				case ro.MSG_CUSTOM:
					return "[自定义消息]";
				case ro.MSG_GRP_TIP:
					return "[群提示消息]";
				case ro.MSG_GRP_SYS_NOTICE:
					return "[群系统通知]";
				case ro.MSG_FACE:
					return "[动画表情]";
				case ro.MSG_MERGER:
					return "[聊天记录]";
				default:
					return ""
			}
		},
		Hm = function(e) {
			return Ji(e) ? {
				lastTime: 0,
				lastSequence: 0,
				fromAccount: 0,
				messageForShow: "",
				payload: null,
				type: "",
				isRevoked: !1,
				cloudCustomData: "",
				onlineOnlyFlag: !1
			} : e instanceof Q_ ? {
				lastTime: e.time || 0,
				lastSequence: e.sequence || 0,
				fromAccount: e.from || "",
				messageForShow: Bm(e.type, e.payload),
				payload: e.payload || null,
				type: e.type || null,
				isRevoked: e.isRevoked || !1,
				cloudCustomData: e.cloudCustomData || "",
				onlineOnlyFlag: !!Qi(e.getOnlineOnlyFlag) && e.getOnlineOnlyFlag()
			} : t(t({}, e), {}, {
				messageForShow: Bm(e.type, e.payload)
			})
		},
		jm = function() {
			function e(t) {
				o(this, e), this.conversationID = t.conversationID || "", this.unreadCount = t.unreadCount || 0,
					this.type = t.type || "", this.lastMessage = Hm(t.lastMessage), t.lastMsgTime && (this
						.lastMessage.lastTime = t.lastMsgTime), this._isInfoCompleted = !1, this.peerReadTime =
					t.peerReadTime || 0, this.groupAtInfoList = [], this.remark = "", this.isPinned = t
					.isPinned || !1, this._initProfile(t)
			}
			return a(e, [{
				key: "toAccount",
				get: function() {
					return this.conversationID.startsWith(ro.CONV_C2C) ? this.conversationID
						.replace(ro.CONV_C2C, "") : this.conversationID.startsWith(ro
							.CONV_GROUP) ? this.conversationID.replace(ro.CONV_GROUP, "") : ""
				}
			}, {
				key: "subType",
				get: function() {
					return this.groupProfile ? this.groupProfile.type : ""
				}
			}, {
				key: "_initProfile",
				value: function(e) {
					var t = this;
					Object.keys(e).forEach((function(n) {
							switch (n) {
								case "userProfile":
									t.userProfile = e.userProfile;
									break;
								case "groupProfile":
									t.groupProfile = e.groupProfile
							}
						})), Ji(this.userProfile) && this.type === ro.CONV_C2C ? this
						.userProfile = new Fm({
							userID: e.conversationID.replace("C2C", "")
						}) : Ji(this.groupProfile) && this.type === ro.CONV_GROUP && (this
							.groupProfile = new Km({
								groupID: e.conversationID.replace("GROUP", "")
							}))
				}
			}, {
				key: "updateUnreadCount",
				value: function(e, t) {
					Ji(e) || (mu(this.subType) ? this.unreadCount = 0 : t && this.type === ro
						.CONV_GROUP ? this.unreadCount = e : this.unreadCount = this
						.unreadCount + e)
				}
			}, {
				key: "updateLastMessage",
				value: function(e) {
					this.lastMessage = Hm(e)
				}
			}, {
				key: "updateGroupAtInfoList",
				value: function(e) {
					var t, n = (M(t = e.groupAtType) || y(t) || I(t) || S()).slice(0); - 1 !== n
						.indexOf(ro.CONV_AT_ME) && -1 !== n.indexOf(ro.CONV_AT_ALL) && (n = [ro
							.CONV_AT_ALL_AT_ME
						]);
					var o = {
						from: e.from,
						groupID: e.groupID,
						messageSequence: e.sequence,
						atTypeArray: n,
						__random: e.__random,
						__sequence: e.__sequence
					};
					this.groupAtInfoList.push(o), Ki.debug(
						"Conversation.updateGroupAtInfoList conversationID:".concat(this
							.conversationID), this.groupAtInfoList)
				}
			}, {
				key: "clearGroupAtInfoList",
				value: function() {
					this.groupAtInfoList.length = 0
				}
			}, {
				key: "reduceUnreadCount",
				value: function() {
					this.unreadCount >= 1 && (this.unreadCount -= 1)
				}
			}, {
				key: "isLastMessageRevoked",
				value: function(e) {
					var t = e.sequence,
						n = e.time;
					return this.type === ro.CONV_C2C && t === this.lastMessage.lastSequence &&
						n === this.lastMessage.lastTime || this.type === ro.CONV_GROUP && t ===
						this.lastMessage.lastSequence
				}
			}, {
				key: "setLastMessageRevoked",
				value: function(e) {
					this.lastMessage.isRevoked = e
				}
			}]), e
		}(),
		$m = function(e) {
			i(r, e);
			var n = _(r);

			function r(e) {
				var t;
				return o(this, r), (t = n.call(this, e))._className = "ConversationModule", Lm.mixin(h(t)), t
					._messageListHandler = new Nm, t.singlyLinkedList = new xm(100), t._pagingStatus = Cc
					.NOT_START, t._pagingTimeStamp = 0, t._pagingStartIndex = 0, t._pagingPinnedTimeStamp = 0, t
					._pagingPinnedStartIndex = 0, t._conversationMap = new Map, t._tmpGroupList = [], t
					._tmpGroupAtTipsList = [], t._peerReadTimeMap = new Map, t._completedMap = new Map, t
					._roamingMessageKeyMap = new Map, t._initListeners(), t
			}
			return a(r, [{
				key: "_initListeners",
				value: function() {
					this.getInnerEmitterInstance().on(Om.CONTEXT_A2KEY_AND_TINYID_UPDATED, this
						._initLocalConversationList, this)
				}
			}, {
				key: "onCheckTimer",
				value: function(e) {
					e % 60 == 0 && this._messageListHandler.traversal()
				}
			}, {
				key: "_initLocalConversationList",
				value: function() {
					var e = this,
						t = new jd(Tg);
					Ki.log("".concat(this._className, "._initLocalConversationList."));
					var n = "",
						o = this._getStorageConversationList();
					if (o) {
						for (var r = o.length, a = 0; a < r; a++) {
							var s = o[a];
							if (s && s.groupProfile) {
								var i = s.groupProfile.type;
								if (mu(i)) continue
							}
							this._conversationMap.set(o[a].conversationID, new jm(o[a]))
						}
						this._emitConversationUpdate(!0, !1), n = "count:".concat(r)
					} else n = "count:0";
					t.setNetworkType(this.getNetworkType()).setMessage(n).end(), this.getModule(
						$c) || this.triggerReady(), this.ready((function() {
						e._tmpGroupList.length > 0 && (e
							.updateConversationGroupProfile(e._tmpGroupList), e
							._tmpGroupList.length = 0)
					})), this._syncConversationList()
				}
			}, {
				key: "onMessageSent",
				value: function(e) {
					this._onSendOrReceiveMessage(e.conversationOptionsList, !0)
				}
			}, {
				key: "onNewMessage",
				value: function(e) {
					this._onSendOrReceiveMessage(e.conversationOptionsList, e.isInstantMessage)
				}
			}, {
				key: "_onSendOrReceiveMessage",
				value: function(e) {
					var t = this,
						n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
					this._isReady ? 0 !== e.length && (this._getC2CPeerReadTime(e), this
							._updateLocalConversationList(e, !1, n), this
							._setStorageConversationList(), this._emitConversationUpdate()) :
						this.ready((function() {
							t._onSendOrReceiveMessage(e, n)
						}))
				}
			}, {
				key: "updateConversationGroupProfile",
				value: function(e) {
					var t = this;
					Wi(e) && 0 === e.length || (0 !== this._conversationMap.size ? (e.forEach((
							function(e) {
								var n = "GROUP".concat(e.groupID);
								if (t._conversationMap.has(n)) {
									var o = t._conversationMap.get(n);
									o.groupProfile = e, o.lastMessage.lastSequence <
										e.nextMessageSeq && (o.lastMessage
											.lastSequence = e.nextMessageSeq - 1), o
										.subType || (o.subType = e.type)
								}
							})), this._emitConversationUpdate(!0, !1)) : this
						._tmpGroupList = e)
				}
			}, {
				key: "_updateConversationUserProfile",
				value: function(e) {
					var t = this;
					e.data.forEach((function(e) {
						var n = "C2C".concat(e.userID);
						t._conversationMap.has(n) && (t._conversationMap.get(n)
							.userProfile = e)
					})), this._emitConversationUpdate(!0, !1)
				}
			}, {
				key: "onMessageRevoked",
				value: function(e) {
					var t = this;
					if (0 !== e.length) {
						var n = null,
							o = !1;
						e.forEach((function(e) {
							(n = t._conversationMap.get(e.conversationID)) && n
								.isLastMessageRevoked(e) && (o = !0, n
									.setLastMessageRevoked(!0))
						})), o && this._emitConversationUpdate(!0, !1)
					}
				}
			}, {
				key: "onMessageDeleted",
				value: function(e) {
					if (0 !== e.length) {
						e.forEach((function(e) {
							e.isDeleted = !0
						}));
						for (var t = e[0].conversationID, n = this._messageListHandler
								.getLocalMessageList(t), o = {}, r = n.length - 1; r > 0; r--)
							if (!n[r].isDeleted) {
								o = n[r];
								break
							} var a = this._conversationMap.get(t);
						if (a) {
							var s = !1;
							a.lastMessage.lastSequence !== o.sequence && a.lastMessage
								.lastTime !== o.time && (a.updateLastMessage(o), s = !0, Ki.log(
									"".concat(this._className,
										".onMessageDeleted. update conversationID:").concat(
										t, " with lastMessage:"), a.lastMessage)), t.startsWith(
									ro.CONV_C2C) && this.updateUnreadCount(t), s && this
								._emitConversationUpdate(!0, !1)
						}
					}
				}
			}, {
				key: "onNewGroupAtTips",
				value: function(e) {
					var t = this,
						n = e.dataList,
						o = null;
					n.forEach((function(e) {
							e.groupAtTips ? o = e.groupAtTips : e.elements && (o = e
									.elements), o.__random = e.random, o.__sequence = e
								.clientSequence, t._tmpGroupAtTipsList.push(o)
						})), Ki.debug("".concat(this._className, ".onNewGroupAtTips isReady:")
							.concat(this._isReady), this._tmpGroupAtTipsList), this._isReady &&
						this._handleGroupAtTipsList()
				}
			}, {
				key: "_handleGroupAtTipsList",
				value: function() {
					var e = this;
					if (0 !== this._tmpGroupAtTipsList.length) {
						var t = !1;
						this._tmpGroupAtTipsList.forEach((function(n) {
								var o = n.groupID;
								if (n.from !== e.getMyUserID()) {
									var r = e._conversationMap.get("".concat(ro
										.CONV_GROUP).concat(o));
									r && (r.updateGroupAtInfoList(n), t = !0)
								}
							})), t && this._emitConversationUpdate(!0, !1), this
							._tmpGroupAtTipsList.length = 0
					}
				}
			}, {
				key: "_getC2CPeerReadTime",
				value: function(e) {
					var t = this,
						n = [];
					if (e.forEach((function(e) {
							t._conversationMap.has(e.conversationID) || e.type !== ro
								.CONV_C2C || n.push(e.conversationID.replace(ro
									.CONV_C2C, ""))
						})), n.length > 0) {
						Ki.debug("".concat(this._className, "._getC2CPeerReadTime userIDList:")
							.concat(n));
						var o = this.getModule($c);
						o && o.getRemotePeerReadTime(n)
					}
				}
			}, {
				key: "_getStorageConversationList",
				value: function() {
					return this.getModule(Qc).getItem("conversationMap")
				}
			}, {
				key: "_setStorageConversationList",
				value: function() {
					var e = this.getLocalConversationList().slice(0, 20).map((function(e) {
						return {
							conversationID: e.conversationID,
							type: e.type,
							subType: e.subType,
							lastMessage: e.lastMessage,
							groupProfile: e.groupProfile,
							userProfile: e.userProfile
						}
					}));
					this.getModule(Qc).setItem("conversationMap", e)
				}
			}, {
				key: "_emitConversationUpdate",
				value: function() {
					var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
						n = v(this._conversationMap.values());
					if (t) {
						var o = this.getModule(Yc);
						o && o.updateGroupLastMessage(n)
					}
					e && this.emitOuterEvent(oo.CONVERSATION_LIST_UPDATED, n)
				}
			}, {
				key: "getLocalConversationList",
				value: function() {
					return v(this._conversationMap.values())
				}
			}, {
				key: "getLocalConversation",
				value: function(e) {
					return this._conversationMap.get(e)
				}
			}, {
				key: "_syncConversationList",
				value: function() {
					var e = this,
						t = new jd(Sg);
					return this._pagingStatus === Cc.NOT_START && this._conversationMap.clear(),
						this._pagingGetConversationList().then((function(n) {
							return e._pagingStatus = Cc.RESOLVED, e
								._setStorageConversationList(), e
								._handleC2CPeerReadTime(), e.checkAndPatchRemark(), t
								.setMessage(e._conversationMap.size).setNetworkType(e
									.getNetworkType()).end(), n
						})).catch((function(n) {
							return e._pagingStatus = Cc.REJECTED, t.setMessage(e
								._pagingTimeStamp), e.probeNetwork().then((function(
								e) {
								var o = m(e, 2),
									r = o[0],
									a = o[1];
								t.setError(n, r, a).end()
							})), cm(n)
						}))
				}
			}, {
				key: "_pagingGetConversationList",
				value: function() {
					var e = this,
						t = "".concat(this._className, "._pagingGetConversationList");
					return Ki.log("".concat(t, " timeStamp:").concat(this._pagingTimeStamp,
								" startIndex:").concat(this._pagingStartIndex) +
							" pinnedTimeStamp:".concat(this._pagingPinnedTimeStamp,
								" pinnedStartIndex:").concat(this._pagingPinnedStartIndex)),
						this._pagingStatus = Cc.PENDING, this.request({
							protocolName: Nl,
							requestData: {
								fromAccount: this.getMyUserID(),
								timeStamp: this._pagingTimeStamp,
								startIndex: this._pagingStartIndex,
								pinnedTimeStamp: this._pagingPinnedTimeStamp,
								pinnedStartIndex: this._pagingStartIndex,
								orderType: 1
							}
						}).then((function(n) {
							var o = n.data,
								r = o.completeFlag,
								a = o.conversations,
								s = void 0 === a ? [] : a,
								i = o.timeStamp,
								u = o.startIndex,
								c = o.pinnedTimeStamp,
								l = o.pinnedStartIndex;
							if (Ki.log("".concat(t, " ok. completeFlag:").concat(r,
									" count:").concat(s.length)), s.length > 0) {
								var p = e._getConversationOptions(s);
								e._updateLocalConversationList(p, !0)
							}
							if (e._isReady) e._emitConversationUpdate();
							else {
								if (!e.isLoggedIn()) return um();
								e.triggerReady()
							}
							return e._pagingTimeStamp = i, e._pagingStartIndex = u, e
								._pagingPinnedTimeStamp = c, e._pagingPinnedStartIndex =
								l, 1 !== r ? e._pagingGetConversationList() : (e
									._handleGroupAtTipsList(), um())
						})).catch((function(n) {
							throw e.isLoggedIn() && (e._isReady || (Ki.warn("".concat(t,
								" failed. error:"), n), e.triggerReady())), n
						}))
				}
			}, {
				key: "_updateLocalConversationList",
				value: function(e, t, n) {
					var o, r = Date.now();
					o = this._getTmpConversationListMapping(e, t, n), this._conversationMap =
						new Map(this._sortConversationList([].concat(v(o
							.toBeUpdatedConversationList), v(this._conversationMap)))), t ||
						this._updateUserOrGroupProfile(o.newConversationList), Ki.debug(""
							.concat(this._className, "._updateLocalConversationList cost ")
							.concat(Date.now() - r, " ms"))
				}
			}, {
				key: "_getTmpConversationListMapping",
				value: function(e, t, n) {
					for (var o = [], r = [], a = this.getModule(Yc), s = this.getModule(zc), i =
							0, u = e.length; i < u; i++) {
						var c = new jm(e[i]),
							l = c.conversationID;
						if (this._conversationMap.has(l)) {
							var p = this._conversationMap.get(l),
								d = ["unreadCount", "allowType", "adminForbidType", "payload",
									"isPinned"
								];
							n || d.push("lastMessage"), ru(p, c, d, [null, void 0, "", 0, NaN]),
								p.updateUnreadCount(c.unreadCount, t), n && (p.lastMessage
									.payload = e[i].lastMessage.payload), e[i].lastMessage && p
								.lastMessage.cloudCustomData !== e[i].lastMessage
								.cloudCustomData && (p.lastMessage.cloudCustomData = e[i]
									.lastMessage.cloudCustomData || ""), this._conversationMap
								.delete(l), o.push([l, p])
						} else {
							if (c.type === ro.CONV_GROUP && a) {
								var g = c.groupProfile.groupID,
									h = a.getLocalGroupProfile(g);
								h && (c.groupProfile = h, c.updateUnreadCount(0))
							} else if (c.type === ro.CONV_C2C) {
								var f = l.replace(ro.CONV_C2C, "");
								s && s.isMyFriend(f) && (c.remark = s.getFriendRemark(f))
							}
							r.push(c), o.push([l, c])
						}
					}
					return {
						toBeUpdatedConversationList: o,
						newConversationList: r
					}
				}
			}, {
				key: "_sortConversationList",
				value: function(e) {
					var t = [],
						n = [];
					return e.forEach((function(e) {
						!0 === e[1].isPinned ? t.push(e) : n.push(e)
					})), t.sort((function(e, t) {
						return t[1].lastMessage.lastTime - e[1].lastMessage.lastTime
					})).concat(n.sort((function(e, t) {
						return t[1].lastMessage.lastTime - e[1].lastMessage
							.lastTime
					})))
				}
			}, {
				key: "_sortConversationListAndEmitEvent",
				value: function() {
					this._conversationMap = new Map(this._sortConversationList(v(this
						._conversationMap))), this._emitConversationUpdate(!0, !1)
				}
			}, {
				key: "_updateUserOrGroupProfile",
				value: function(e) {
					var t = this;
					if (0 !== e.length) {
						var n = [],
							o = [],
							r = this.getModule(jc),
							a = this.getModule(Yc);
						e.forEach((function(e) {
							if (e.type === ro.CONV_C2C) n.push(e.toAccount);
							else if (e.type === ro.CONV_GROUP) {
								var t = e.toAccount;
								a.hasLocalGroup(t) ? e.groupProfile = a
									.getLocalGroupProfile(t) : o.push(t)
							}
						})), Ki.log("".concat(this._className,
							"._updateUserOrGroupProfile c2cUserIDList:").concat(n,
							" groupIDList:").concat(o)), n.length > 0 && r.getUserProfile({
							userIDList: n
						}).then((function(e) {
							var n = e.data;
							Wi(n) ? n.forEach((function(e) {
									t._conversationMap.get("C2C".concat(e
										.userID)).userProfile = e
								})) : t._conversationMap.get("C2C".concat(n.userID))
								.userProfile = n
						})), o.length > 0 && a.getGroupProfileAdvance({
							groupIDList: o,
							responseFilter: {
								groupBaseInfoFilter: ["Type", "Name", "FaceUrl"]
							}
						}).then((function(e) {
							e.data.successGroupList.forEach((function(e) {
								var n = "GROUP".concat(e.groupID);
								if (t._conversationMap.has(n)) {
									var o = t._conversationMap.get(n);
									ru(o.groupProfile, e, [], [null,
										void 0, "", 0, NaN
									]), !o.subType && e.type && (o
										.subType = e.type)
								}
							}))
						}))
					}
				}
			}, {
				key: "_getConversationOptions",
				value: function(e) {
					var t = [],
						n = e.filter((function(e) {
							var t = e.lastMsg;
							return zi(t)
						})).map((function(e) {
							if (1 === e.type) {
								var n = {
									userID: e.userID,
									nick: e.c2CNick,
									avatar: e.c2CImage
								};
								return t.push(n), {
									conversationID: "C2C".concat(e.userID),
									type: "C2C",
									lastMessage: {
										lastTime: e.time,
										lastSequence: e.sequence,
										fromAccount: e.lastC2CMsgFromAccount,
										messageForShow: e.messageShow,
										type: e.lastMsg.elements[0] ? e.lastMsg
											.elements[0].type : null,
										payload: e.lastMsg.elements[0] ? e.lastMsg
											.elements[0].content : null,
										cloudCustomData: e.cloudCustomData || "",
										isRevoked: 8 === e.lastMessageFlag,
										onlineOnlyFlag: !1
									},
									userProfile: new Fm(n),
									peerReadTime: e.c2cPeerReadTime,
									isPinned: 1 === e.isPinned
								}
							}
							return {
								conversationID: "GROUP".concat(e.groupID),
								type: "GROUP",
								lastMessage: {
									lastTime: e.time,
									lastSequence: e.messageReadSeq + e.unreadCount,
									fromAccount: e.msgGroupFromAccount,
									messageForShow: e.messageShow,
									type: e.lastMsg.elements[0] ? e.lastMsg.elements[0]
										.type : null,
									payload: e.lastMsg.elements[0] ? e.lastMsg.elements[
										0].content : null,
									cloudCustomData: e.cloudCustomData || "",
									isRevoked: 2 === e.lastMessageFlag,
									onlineOnlyFlag: !1
								},
								groupProfile: new Km({
									groupID: e.groupID,
									name: e.groupNick,
									avatar: e.groupImage
								}),
								unreadCount: e.unreadCount,
								peerReadTime: 0,
								isPinned: 1 === e.isPinned
							}
						}));
					t.length > 0 && this.getModule(jc).onConversationsProfileUpdated(t);
					return n
				}
			}, {
				key: "getLocalMessageList",
				value: function(e) {
					return this._messageListHandler.getLocalMessageList(e)
				}
			}, {
				key: "deleteLocalMessage",
				value: function(e) {
					e instanceof Q_ && this._messageListHandler.remove(e)
				}
			}, {
				key: "onConversationDeleted",
				value: function(e) {
					var t = this;
					Ki.log("".concat(this._className, ".onConversationDeleted")), Wi(e) && e
						.forEach((function(e) {
							var n = e.type,
								o = e.userID,
								r = e.groupID,
								a = "";
							1 === n ? a = "".concat(ro.CONV_C2C).concat(o) : 2 === n &&
								(a = "".concat(ro.CONV_GROUP).concat(r)), t
								.deleteLocalConversation(a)
						}))
				}
			}, {
				key: "onConversationPinned",
				value: function(e) {
					var t = this;
					if (Wi(e)) {
						var n = !1;
						e.forEach((function(e) {
							var o, r = e.type,
								a = e.userID,
								s = e.groupID;
							1 === r ? o = t.getLocalConversation("".concat(ro
								.CONV_C2C).concat(a)) : 2 === r && (o = t
								.getLocalConversation("".concat(ro.CONV_GROUP)
									.concat(s))), o && (Ki.log("".concat(t
									._className,
									".onConversationPinned conversationID:")
								.concat(o.conversationID, " isPinned:")
								.concat(o.isPinned)), o.isPinned || (o
								.isPinned = !0, n = !0))
						})), n && this._sortConversationListAndEmitEvent()
					}
				}
			}, {
				key: "onConversationUnpinned",
				value: function(e) {
					var t = this;
					if (Wi(e)) {
						var n = !1;
						e.forEach((function(e) {
							var o, r = e.type,
								a = e.userID,
								s = e.groupID;
							1 === r ? o = t.getLocalConversation("".concat(ro
								.CONV_C2C).concat(a)) : 2 === r && (o = t
								.getLocalConversation("".concat(ro.CONV_GROUP)
									.concat(s))), o && (Ki.log("".concat(t
									._className,
									".onConversationUnpinned conversationID:"
									).concat(o.conversationID, " isPinned:")
								.concat(o.isPinned)), o.isPinned && (o
								.isPinned = !1, n = !0))
						})), n && this._sortConversationListAndEmitEvent()
					}
				}
			}, {
				key: "getMessageList",
				value: function(e) {
					var t = this,
						n = e.conversationID,
						o = e.nextReqMessageID,
						r = e.count,
						a = "".concat(this._className, ".getMessageList"),
						s = this.getLocalConversation(n),
						i = "";
					if (s && s.groupProfile && (i = s.groupProfile.type), mu(i)) return Ki.log(
						"".concat(a, " not available in avchatroom. conversationID:")
						.concat(n)), um({
						messageList: [],
						nextReqMessageID: "",
						isCompleted: !0
					});
					(Ji(r) || r > 15) && (r = 15);
					var u = this._computeLeftCount({
						conversationID: n,
						nextReqMessageID: o
					});
					return Ki.log("".concat(a, " conversationID:").concat(n, " leftCount:")
							.concat(u, " count:").concat(r, " nextReqMessageID:").concat(o)),
						this._needGetHistory({
							conversationID: n,
							leftCount: u,
							count: r
						}) ? this.getHistoryMessages({
							conversationID: n,
							nextReqMessageID: o,
							count: 20
						}).then((function() {
							return u = t._computeLeftCount({
								conversationID: n,
								nextReqMessageID: o
							}), Z_(t._computeResult({
								conversationID: n,
								nextReqMessageID: o,
								count: r,
								leftCount: u
							}))
						})) : (Ki.log("".concat(a,
								".getMessageList get message list from memory")), this
							.modifyMessageList(n), um(this._computeResult({
								conversationID: n,
								nextReqMessageID: o,
								count: r,
								leftCount: u
							})))
				}
			}, {
				key: "_computeLeftCount",
				value: function(e) {
					var t = e.conversationID,
						n = e.nextReqMessageID;
					return n ? this._messageListHandler.getLocalMessageList(t).findIndex((
						function(e) {
							return e.ID === n
						})) : this._getMessageListSize(t)
				}
			}, {
				key: "_getMessageListSize",
				value: function(e) {
					return this._messageListHandler.getLocalMessageList(e).length
				}
			}, {
				key: "_needGetHistory",
				value: function(e) {
					var t = e.conversationID,
						n = e.leftCount,
						o = e.count,
						r = this.getLocalConversation(t),
						a = "";
					return r && r.groupProfile && (a = r.groupProfile.type), !yu(t) && !mu(a) &&
						(n < o && !this._completedMap.has(t))
				}
			}, {
				key: "_computeResult",
				value: function(e) {
					var t = e.conversationID,
						n = e.nextReqMessageID,
						o = e.count,
						r = e.leftCount,
						a = this._computeMessageList({
							conversationID: t,
							nextReqMessageID: n,
							count: o
						}),
						s = this._computeIsCompleted({
							conversationID: t,
							leftCount: r,
							count: o
						}),
						i = this._computeNextReqMessageID({
							messageList: a,
							isCompleted: s,
							conversationID: t
						}),
						u = "".concat(this._className, "._computeResult. conversationID:")
						.concat(t);
					return Ki.log("".concat(u, " leftCount:").concat(r, " count:").concat(o,
						" nextReqMessageID:").concat(i, " isCompleted:").concat(s)), {
						messageList: a,
						nextReqMessageID: i,
						isCompleted: s
					}
				}
			}, {
				key: "_computeMessageList",
				value: function(e) {
					var t = e.conversationID,
						n = e.nextReqMessageID,
						o = e.count,
						r = this._messageListHandler.getLocalMessageList(t),
						a = this._computeIndexEnd({
							nextReqMessageID: n,
							messageList: r
						}),
						s = this._computeIndexStart({
							indexEnd: a,
							count: o
						});
					return r.slice(s, a)
				}
			}, {
				key: "_computeNextReqMessageID",
				value: function(e) {
					var t = e.messageList,
						n = e.isCompleted,
						o = e.conversationID;
					if (!n) return 0 === t.length ? "" : t[0].ID;
					var r = this._messageListHandler.getLocalMessageList(o);
					return 0 === r.length ? "" : r[0].ID
				}
			}, {
				key: "_computeIndexEnd",
				value: function(e) {
					var t = e.messageList,
						n = void 0 === t ? [] : t,
						o = e.nextReqMessageID;
					return o ? n.findIndex((function(e) {
						return e.ID === o
					})) : n.length
				}
			}, {
				key: "_computeIndexStart",
				value: function(e) {
					var t = e.indexEnd,
						n = e.count;
					return t > n ? t - n : 0
				}
			}, {
				key: "_computeIsCompleted",
				value: function(e) {
					var t = e.conversationID;
					return !!(e.leftCount <= e.count && this._completedMap.has(t))
				}
			}, {
				key: "getHistoryMessages",
				value: function(e) {
					var t = e.conversationID,
						n = e.nextReqMessageID;
					if (t === ro.CONV_SYSTEM) return um();
					e.count ? e.count > 20 && (e.count = 20) : e.count = 15;
					var o = this._messageListHandler.getLocalOldestMessageByConversationID(t);
					o || ((o = {}).time = 0, o.sequence = 0, 0 === t.indexOf(ro.CONV_C2C) ? (o
							.to = t.replace(ro.CONV_C2C, ""), o.conversationType = ro
							.CONV_C2C) : 0 === t.indexOf(ro.CONV_GROUP) && (o.to = t
							.replace(ro.CONV_GROUP, ""), o.conversationType = ro.CONV_GROUP
							));
					var r = "",
						a = null;
					switch (o.conversationType) {
						case ro.CONV_C2C:
							return r = t.replace(ro.CONV_C2C, ""), (a = this.getModule($c)) ? a
								.getRoamingMessage({
									conversationID: e.conversationID,
									peerAccount: r,
									count: e.count,
									lastMessageTime: this._roamingMessageKeyMap.has(t) ? o
										.time : 0,
									messageKey: this._roamingMessageKeyMap.get(t)
								}) : cm({
									code: Tp.CANNOT_FIND_MODULE,
									message: Nd
								});
						case ro.CONV_GROUP:
							return (a = this.getModule(Yc)) ? a.getRoamingMessage({
								conversationID: e.conversationID,
								groupID: o.to,
								count: e.count,
								sequence: n && !1 === o.getOnlineOnlyFlag() ? o
									.sequence - 1 : o.sequence
							}) : cm({
								code: Tp.CANNOT_FIND_MODULE,
								message: Nd
							});
						default:
							return um()
					}
				}
			}, {
				key: "patchConversationLastMessage",
				value: function(e) {
					var t = this.getLocalConversation(e);
					if (t) {
						var n = t.lastMessage,
							o = n.messageForShow,
							r = n.payload;
						if (Lu(o) || Lu(r)) {
							var a = this._messageListHandler.getLocalMessageList(e);
							if (0 === a.length) return;
							var s = a[a.length - 1];
							Ki.log("".concat(this._className,
								".patchConversationLastMessage conversationID:").concat(
								e, " payload:"), s.payload), t.updateLastMessage(s)
						}
					}
				}
			}, {
				key: "storeRoamingMessage",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						n = arguments.length > 1 ? arguments[1] : void 0,
						o = n.startsWith(ro.CONV_C2C) ? ro.CONV_C2C : ro.CONV_GROUP,
						r = null,
						a = [],
						s = 0,
						i = e.length,
						u = null,
						c = o === ro.CONV_GROUP,
						l = this.getModule(tl),
						p = function() {
							s = c ? e.length - 1 : 0, i = c ? 0 : e.length
						},
						d = function() {
							c ? --s : ++s
						},
						g = function() {
							return c ? s >= i : s < i
						};
					for (p(); g(); d())
						if (c && 1 === e[s].sequence && this.setCompleted(n), 1 !== e[s]
							.isPlaceMessage)
							if ((r = new Q_(e[s])).to = e[s].to, r.isSystemMessage = !!e[s]
								.isSystemMessage, r.conversationType = o, 4 === e[s].event ?
								u = {
									type: ro.MSG_GRP_TIP,
									content: t(t({}, e[s].elements), {}, {
										groupProfile: e[s].groupProfile
									})
								} : (e[s].elements = l.parseElements(e[s].elements, e[s].from),
									u = e[s].elements), c || r.setNickAndAvatar({
									nick: e[s].nick,
									avatar: e[s].avatar
								}), Lu(u)) {
								var h = new jd(dg);
								h.setMessage("from:".concat(r.from, " to:").concat(r.to,
										" sequence:").concat(r.sequence, " event:").concat(
										e[s].event)), h.setNetworkType(this.getNetworkType())
									.setLevel("warning").end()
							} else r.setElement(u), r.reInitialize(this.getMyUserID()), a.push(
								r);
					return this._messageListHandler.unshift(a), p = d = g = null, a
				}
			}, {
				key: "setMessageRead",
				value: function(e) {
					var t = e.conversationID,
						n = e.messageID,
						o = this.getLocalConversation(t);
					if (Ki.log("".concat(this._className, ".setMessageRead conversationID:")
							.concat(t, " unreadCount:").concat(o ? o.unreadCount : 0)), !o)
						return um();
					if (o.type !== ro.CONV_GROUP || Lu(o.groupAtInfoList) || this
						.deleteGroupAtTips(t), 0 === o.unreadCount) return um();
					var r = this._messageListHandler.getLocalMessage(t, n),
						a = null;
					switch (o.type) {
						case ro.CONV_C2C:
							return (a = this.getModule($c)) ? a.setMessageRead({
								conversationID: t,
								lastMessageTime: r ? r.time : o.lastMessage.lastTime
							}) : cm({
								code: Tp.CANNOT_FIND_MODULE,
								message: Nd
							});
						case ro.CONV_GROUP:
							return (a = this._moduleManager.getModule(Yc)) ? a.setMessageRead({
								conversationID: t,
								lastMessageSeq: r ? r.sequence : o.lastMessage
									.lastSequence
							}) : cm({
								code: Tp.CANNOT_FIND_MODULE,
								message: Nd
							});
						case ro.CONV_SYSTEM:
							return o.unreadCount = 0, this._emitConversationUpdate(!0, !1),
						um();
						default:
							return um()
					}
				}
			}, {
				key: "updateIsReadAfterReadReport",
				value: function(e) {
					var t = e.conversationID,
						n = e.lastMessageSeq,
						o = e.lastMessageTime,
						r = this._messageListHandler.getLocalMessageList(t);
					if (0 !== r.length)
						for (var a, s = r.length - 1; s >= 0; s--)
							if (a = r[s], !(o && a.time > o || n && a.sequence > n)) {
								if ("in" === a.flow && a.isRead) break;
								a.setIsRead(!0)
							}
				}
			}, {
				key: "updateUnreadCount",
				value: function(e) {
					var t = this.getLocalConversation(e),
						n = this._messageListHandler.getLocalMessageList(e);
					if (t) {
						var o = t.unreadCount,
							r = n.filter((function(e) {
								return !e.isRead && !e.getOnlineOnlyFlag() && !e
									.isDeleted
							})).length;
						o !== r && (t.unreadCount = r, Ki.log("".concat(this._className,
								".updateUnreadCount from ").concat(o, " to ").concat(r,
								", conversationID:").concat(e)), this
							._emitConversationUpdate(!0, !1))
					}
				}
			}, {
				key: "updateIsRead",
				value: function(e) {
					var t = this.getLocalConversation(e),
						n = this.getLocalMessageList(e);
					if (t && 0 !== n.length && !yu(t.type)) {
						for (var o = [], r = 0, a = n.length; r < a; r++) "in" !== n[r].flow ?
							"out" !== n[r].flow || n[r].isRead || n[r].setIsRead(!0) : o.push(n[
								r]);
						var s = 0;
						if (t.type === ro.CONV_C2C) {
							var i = o.slice(-t.unreadCount).filter((function(e) {
								return e.isRevoked
							})).length;
							s = o.length - t.unreadCount - i
						} else s = o.length - t.unreadCount;
						for (var u = 0; u < s && !o[u].isRead; u++) o[u].setIsRead(!0)
					}
				}
			}, {
				key: "deleteGroupAtTips",
				value: function(e) {
					var t = "".concat(this._className, ".deleteGroupAtTips");
					Ki.log("".concat(t));
					var n = this._conversationMap.get(e);
					if (!n) return Promise.resolve();
					var o = n.groupAtInfoList;
					if (0 === o.length) return Promise.resolve();
					var r = this.getMyUserID();
					return this.request({
						protocolName: bl,
						requestData: {
							messageListToDelete: o.map((function(e) {
								return {
									from: e.from,
									to: r,
									messageSeq: e.__sequence,
									messageRandom: e.__random,
									groupID: e.groupID
								}
							}))
						}
					}).then((function() {
						return Ki.log("".concat(t, " ok. count:").concat(o.length)),
							n.clearGroupAtInfoList(), Promise.resolve()
					})).catch((function(e) {
						return Ki.error("".concat(t, " failed. error:"), e), cm(e)
					}))
				}
			}, {
				key: "appendToMessageList",
				value: function(e) {
					this._messageListHandler.pushIn(e)
				}
			}, {
				key: "setMessageRandom",
				value: function(e) {
					this.singlyLinkedList.set(e.random)
				}
			}, {
				key: "deleteMessageRandom",
				value: function(e) {
					this.singlyLinkedList.delete(e.random)
				}
			}, {
				key: "pushIntoMessageList",
				value: function(e, t, n) {
					return !(!this._messageListHandler.pushIn(t, n) || this
						._isMessageFromCurrentInstance(t) && !n) && (e.push(t), !0)
				}
			}, {
				key: "_isMessageFromCurrentInstance",
				value: function(e) {
					return this.singlyLinkedList.has(e.random)
				}
			}, {
				key: "revoke",
				value: function(e, t, n) {
					return this._messageListHandler.revoke(e, t, n)
				}
			}, {
				key: "getPeerReadTime",
				value: function(e) {
					return this._peerReadTimeMap.get(e)
				}
			}, {
				key: "recordPeerReadTime",
				value: function(e, t) {
					this._peerReadTimeMap.has(e) ? this._peerReadTimeMap.get(e) < t && this
						._peerReadTimeMap.set(e, t) : this._peerReadTimeMap.set(e, t)
				}
			}, {
				key: "updateMessageIsPeerReadProperty",
				value: function(e, t) {
					if (e.startsWith(ro.CONV_C2C) && t > 0) {
						var n = this._messageListHandler.updateMessageIsPeerReadProperty(e, t);
						n.length > 0 && this.emitOuterEvent(oo.MESSAGE_READ_BY_PEER, n)
					}
				}
			}, {
				key: "updateMessageIsReadProperty",
				value: function(e) {
					var t = this.getLocalConversation(e),
						n = this._messageListHandler.getLocalMessageList(e);
					if (t && 0 !== n.length && !yu(t.type)) {
						for (var o = [], r = 0; r < n.length; r++) "in" !== n[r].flow ?
							"out" !== n[r].flow || n[r].isRead || n[r].setIsRead(!0) : o.push(n[
								r]);
						var a = 0;
						if (t.type === ro.CONV_C2C) {
							var s = o.slice(-t.unreadCount).filter((function(e) {
								return e.isRevoked
							})).length;
							a = o.length - t.unreadCount - s
						} else a = o.length - t.unreadCount;
						for (var i = 0; i < a && !o[i].isRead; i++) o[i].setIsRead(!0)
					}
				}
			}, {
				key: "updateMessageIsModifiedProperty",
				value: function(e) {
					this._messageListHandler.updateMessageIsModifiedProperty(e)
				}
			}, {
				key: "setCompleted",
				value: function(e) {
					Ki.log("".concat(this._className, ".setCompleted. conversationID:").concat(
						e)), this._completedMap.set(e, !0)
				}
			}, {
				key: "updateRoamingMessageKey",
				value: function(e, t) {
					this._roamingMessageKeyMap.set(e, t)
				}
			}, {
				key: "getConversationList",
				value: function() {
					var e = this,
						t = "".concat(this._className, ".getConversationList");
					Ki.log(t), this._pagingStatus === Cc.REJECTED && (Ki.log("".concat(t,
							". continue to sync conversationList")), this
						._syncConversationList());
					var n = new jd(vg);
					return this.request({
						protocolName: Ol,
						requestData: {
							fromAccount: this.getMyUserID()
						}
					}).then((function(o) {
						var r = o.data.conversations,
							a = void 0 === r ? [] : r,
							s = e._getConversationOptions(a);
						return e._updateLocalConversationList(s, !0), e
							._setStorageConversationList(), e
							._handleC2CPeerReadTime(), n.setMessage(
								"conversation count: ".concat(a.length))
							.setNetworkType(e.getNetworkType()).end(), Ki.log(""
								.concat(t, " ok")), um({
								conversationList: e.getLocalConversationList()
							})
					})).catch((function(o) {
						return e.probeNetwork().then((function(e) {
							var t = m(e, 2),
								r = t[0],
								a = t[1];
							n.setError(o, r, a).end()
						})), Ki.error("".concat(t, " failed. error:"), o), cm(o)
					}))
				}
			}, {
				key: "_handleC2CPeerReadTime",
				value: function() {
					var e, t = D(this._conversationMap);
					try {
						for (t.s(); !(e = t.n()).done;) {
							var n = m(e.value, 2),
								o = n[0],
								r = n[1];
							r.type === ro.CONV_C2C && (Ki.debug("".concat(this._className,
									"._handleC2CPeerReadTime conversationID:").concat(o,
									" peerReadTime:").concat(r.peerReadTime)), this
								.recordPeerReadTime(o, r.peerReadTime))
						}
					} catch (a) {
						t.e(a)
					} finally {
						t.f()
					}
				}
			}, {
				key: "getConversationProfile",
				value: function(e) {
					var t, n = this;
					if ((t = this._conversationMap.has(e) ? this._conversationMap.get(e) :
							new jm({
								conversationID: e,
								type: e.slice(0, 3) === ro.CONV_C2C ? ro.CONV_C2C : ro
									.CONV_GROUP
							}))._isInfoCompleted || t.type === ro.CONV_SYSTEM) return um({
						conversation: t
					});
					var o = new jd(Mg),
						r = "".concat(this._className, ".getConversationProfile");
					return Ki.log("".concat(r, ". conversationID:").concat(e, " remark:")
							.concat(t.remark, " lastMessage:"), t.lastMessage), this
						._updateUserOrGroupProfileCompletely(t).then((function(a) {
							o.setNetworkType(n.getNetworkType()).setMessage(
								"conversationID:".concat(e, " unreadCount:").concat(
									a.data.conversation.unreadCount)).end();
							var s = n.getModule(zc);
							if (s && t.type === ro.CONV_C2C) {
								var i = e.replace(ro.CONV_C2C, "");
								if (s.isMyFriend(i)) {
									var u = s.getFriendRemark(i);
									t.remark !== u && (t.remark = u, Ki.log("".concat(r,
										". conversationID:").concat(e,
										" patch remark:").concat(t.remark)))
								}
							}
							return Ki.log("".concat(r, " ok. conversationID:").concat(
								e)), a
						})).catch((function(t) {
							return n.probeNetwork().then((function(n) {
								var r = m(n, 2),
									a = r[0],
									s = r[1];
								o.setError(t, a, s).setMessage(
									"conversationID:".concat(e)).end()
							})), Ki.error("".concat(r, " failed. error:"), t), cm(t)
						}))
				}
			}, {
				key: "_updateUserOrGroupProfileCompletely",
				value: function(e) {
					var t = this;
					return e.type === ro.CONV_C2C ? this.getModule(jc).getUserProfile({
						userIDList: [e.toAccount]
					}).then((function(n) {
						var o = n.data;
						return 0 === o.length ? cm(new am({
							code: Tp.USER_OR_GROUP_NOT_FOUND,
							message: nd
						})) : (e.userProfile = o[0], e._isInfoCompleted = !0, t
							._unshiftConversation(e), um({
								conversation: e
							}))
					})) : this.getModule(Yc).getGroupProfile({
						groupID: e.toAccount
					}).then((function(n) {
						return e.groupProfile = n.data.group, e._isInfoCompleted = !
							0, t._unshiftConversation(e), um({
								conversation: e
							})
					}))
				}
			}, {
				key: "_unshiftConversation",
				value: function(e) {
					e instanceof jm && !this._conversationMap.has(e.conversationID) && (this
						._conversationMap = new Map([
							[e.conversationID, e]
						].concat(v(this._conversationMap))), this
						._setStorageConversationList(), this._emitConversationUpdate(!0, !1)
						)
				}
			}, {
				key: "deleteConversation",
				value: function(e) {
					var t = this,
						n = {
							fromAccount: this.getMyUserID(),
							toAccount: void 0,
							type: void 0
						};
					if (!this._conversationMap.has(e)) {
						var o = new am({
							code: Tp.CONVERSATION_NOT_FOUND,
							message: td
						});
						return cm(o)
					}
					switch (this._conversationMap.get(e).type) {
						case ro.CONV_C2C:
							n.type = 1, n.toAccount = e.replace(ro.CONV_C2C, "");
							break;
						case ro.CONV_GROUP:
							n.type = 2, n.toGroupID = e.replace(ro.CONV_GROUP, "");
							break;
						case ro.CONV_SYSTEM:
							return this.getModule(Yc).deleteGroupSystemNotice({
								messageList: this._messageListHandler
									.getLocalMessageList(e)
							}), this.deleteLocalConversation(e), um({
								conversationID: e
							});
						default:
							var r = new am({
								code: Tp.CONVERSATION_UN_RECORDED_TYPE,
								message: od
							});
							return cm(r)
					}
					var a = new jd(yg);
					a.setMessage("conversationID:".concat(e));
					var s = "".concat(this._className, ".deleteConversation");
					return Ki.log("".concat(s, ". conversationID:").concat(e)), this
						.setMessageRead({
							conversationID: e
						}).then((function() {
							return t.request({
								protocolName: Ll,
								requestData: n
							})
						})).then((function() {
							return a.setNetworkType(t.getNetworkType()).end(), Ki.log(""
									.concat(s, " ok")), t.deleteLocalConversation(e),
								um({
									conversationID: e
								})
						})).catch((function(e) {
							return t.probeNetwork().then((function(t) {
								var n = m(t, 2),
									o = n[0],
									r = n[1];
								a.setError(e, o, r).end()
							})), Ki.error("".concat(s, " failed. error:"), e), cm(e)
						}))
				}
			}, {
				key: "pinConversation",
				value: function(e) {
					var t = this,
						n = e.conversationID,
						o = e.isPinned;
					if (!this._conversationMap.has(n)) return cm({
						code: Tp.CONVERSATION_NOT_FOUND,
						message: td
					});
					var r = this.getLocalConversation(n);
					if (r.isPinned === o) return um({
						conversationID: n
					});
					var a = new jd(Ig);
					a.setMessage("conversationID:".concat(n, " isPinned:").concat(o));
					var s = "".concat(this._className, ".pinConversation");
					Ki.log("".concat(s, ". conversationID:").concat(n, " isPinned:").concat(o));
					var i = null;
					return vu(n) ? i = {
						type: 1,
						toAccount: n.replace(ro.CONV_C2C, "")
					} : Mu(n) && (i = {
						type: 2,
						groupID: n.replace(ro.CONV_GROUP, "")
					}), this.request({
						protocolName: Rl,
						requestData: {
							fromAccount: this.getMyUserID(),
							operationType: !0 === o ? 1 : 2,
							itemList: [i]
						}
					}).then((function() {
						return a.setNetworkType(t.getNetworkType()).end(), Ki.log(""
							.concat(s, " ok")), r.isPinned !== o && (r
							.isPinned = o, t._sortConversationListAndEmitEvent()
							), Z_({
							conversationID: n
						})
					})).catch((function(e) {
						return t.probeNetwork().then((function(t) {
							var n = m(t, 2),
								o = n[0],
								r = n[1];
							a.setError(e, o, r).end()
						})), Ki.error("".concat(s, " failed. error:"), e), cm(e)
					}))
				}
			}, {
				key: "deleteLocalConversation",
				value: function(e) {
					var t = this._conversationMap.has(e);
					Ki.log("".concat(this._className,
							".deleteLocalConversation conversationID:").concat(e, " has:")
						.concat(t)), t && (this._conversationMap.delete(e), this
						._roamingMessageKeyMap.delete(e), this
					._setStorageConversationList(), this._messageListHandler
						.removeByConversationID(e), this._completedMap.delete(e), this
						._emitConversationUpdate(!0, !1))
				}
			}, {
				key: "isMessageSentByCurrentInstance",
				value: function(e) {
					return !(!this._messageListHandler.hasLocalMessage(e.conversationID, e
						.ID) && !this.singlyLinkedList.has(e.random))
				}
			}, {
				key: "modifyMessageList",
				value: function(e) {
					if (e.startsWith(ro.CONV_C2C)) {
						var t = Date.now();
						this._messageListHandler.modifyMessageSentByPeer(e);
						var n = this.getModule(jc).getNickAndAvatarByUserID(this.getMyUserID());
						this._messageListHandler.modifyMessageSentByMe({
							conversationID: e,
							latestNick: n.nick,
							latestAvatar: n.avatar
						}), Ki.log("".concat(this._className,
								".modifyMessageList conversationID:").concat(e, " cost ")
							.concat(Date.now() - t, " ms"))
					}
				}
			}, {
				key: "updateUserProfileSpecifiedKey",
				value: function(e) {
					Ki.log("".concat(this._className,
						".updateUserProfileSpecifiedKey options:"), e);
					var t = e.conversationID,
						n = e.nick,
						o = e.avatar;
					if (this._conversationMap.has(t)) {
						var r = this._conversationMap.get(t).userProfile;
						$i(n) && r.nick !== n && (r.nick = n), $i(o) && r.avatar !== o && (r
							.avatar = o), this._emitConversationUpdate(!0, !1)
					}
				}
			}, {
				key: "onMyProfileModified",
				value: function(e) {
					var n = this,
						o = this.getLocalConversationList(),
						r = Date.now();
					o.forEach((function(o) {
						n.modifyMessageSentByMe(t({
							conversationID: o.conversationID
						}, e))
					})), Ki.log("".concat(this._className,
							".onMyProfileModified. modify all messages sent by me, cost ")
						.concat(Date.now() - r, " ms"))
				}
			}, {
				key: "modifyMessageSentByMe",
				value: function(e) {
					this._messageListHandler.modifyMessageSentByMe(e)
				}
			}, {
				key: "getLatestMessageSentByMe",
				value: function(e) {
					return this._messageListHandler.getLatestMessageSentByMe(e)
				}
			}, {
				key: "modifyMessageSentByPeer",
				value: function(e, t) {
					this._messageListHandler.modifyMessageSentByPeer(e, t)
				}
			}, {
				key: "getLatestMessageSentByPeer",
				value: function(e) {
					return this._messageListHandler.getLatestMessageSentByPeer(e)
				}
			}, {
				key: "pushIntoNoticeResult",
				value: function(e, t) {
					return !(!this._messageListHandler.pushIn(t) || this.singlyLinkedList.has(t
						.random)) && (e.push(t), !0)
				}
			}, {
				key: "getGroupLocalLastMessageSequence",
				value: function(e) {
					return this._messageListHandler.getGroupLocalLastMessageSequence(e)
				}
			}, {
				key: "checkAndPatchRemark",
				value: function() {
					if (0 !== this._conversationMap.size) {
						var e = this.getModule(zc);
						if (e) {
							var t = v(this._conversationMap.values()).filter((function(e) {
								return e.type === ro.CONV_C2C
							}));
							if (0 !== t.length) {
								var n = !1,
									o = 0;
								t.forEach((function(t) {
										var r = t.conversationID.replace(ro.CONV_C2C,
											"");
										if (e.isMyFriend(r)) {
											var a = e.getFriendRemark(r);
											t.remark !== a && (t.remark = a, o += 1,
												n = !0)
										}
									})), Ki.log("".concat(this._className,
											".checkAndPatchRemark. c2c conversation count:")
										.concat(t.length, ", patched count:").concat(o)), n &&
									this._emitConversationUpdate(!0, !1)
							}
						}
					}
				}
			}, {
				key: "reset",
				value: function() {
					Ki.log("".concat(this._className, ".reset")), this._pagingStatus = Cc
						.NOT_START, this._messageListHandler.reset(), this._roamingMessageKeyMap
						.clear(), this.singlyLinkedList.reset(), this._peerReadTimeMap.clear(),
						this._completedMap.clear(), this._conversationMap.clear(), this
						._pagingTimeStamp = 0, this._pagingStartIndex = 0, this
						._pagingPinnedTimeStamp = 0, this._pagingPinnedStartIndex = 0, this
						.resetReady()
				}
			}]), r
		}(pl),
		Ym = function() {
			function e(t) {
				o(this, e), this._groupModule = t, this._className = "GroupTipsHandler", this
					._cachedGroupTipsMap = new Map, this._checkCountMap = new Map, this.MAX_CHECK_COUNT = 4
			}
			return a(e, [{
				key: "onCheckTimer",
				value: function(e) {
					e % 1 == 0 && this._cachedGroupTipsMap.size > 0 && this
						._checkCachedGroupTips()
				}
			}, {
				key: "_checkCachedGroupTips",
				value: function() {
					var e = this;
					this._cachedGroupTipsMap.forEach((function(t, n) {
						var o = e._checkCountMap.get(n),
							r = e._groupModule.hasLocalGroup(n);
						Ki.log("".concat(e._className,
									"._checkCachedGroupTips groupID:").concat(n,
									" hasLocalGroup:").concat(r, " checkCount:")
								.concat(o)), r ? (e._notifyCachedGroupTips(n), e
								._checkCountMap.delete(n), e._groupModule
								.deleteUnjoinedAVChatRoom(n)) : o >= e
							.MAX_CHECK_COUNT ? (e._deleteCachedGroupTips(n), e
								._checkCountMap.delete(n)) : (o++, e._checkCountMap
								.set(n, o))
					}))
				}
			}, {
				key: "onNewGroupTips",
				value: function(e) {
					Ki.debug("".concat(this._className, ".onReceiveGroupTips count:").concat(e
						.dataList.length));
					var t = this.newGroupTipsStoredAndSummary(e),
						n = t.eventDataList,
						o = t.result,
						r = t.AVChatRoomMessageList;
					(r.length > 0 && this._groupModule.onAVChatRoomMessage(r), n.length > 0) &&
					(this._groupModule.getModule(Jc).onNewMessage({
						conversationOptionsList: n,
						isInstantMessage: !0
					}), this._groupModule.updateNextMessageSeq(n));
					o.length > 0 && (this._groupModule.emitOuterEvent(oo.MESSAGE_RECEIVED, o),
						this.handleMessageList(o))
				}
			}, {
				key: "newGroupTipsStoredAndSummary",
				value: function(e) {
					for (var n = e.event, o = e.dataList, r = null, a = [], s = [], i = {},
							u = [], c = 0, l = o.length; c < l; c++) {
						var p = o[c],
							d = p.groupProfile.groupID,
							g = this._groupModule.hasLocalGroup(d);
						if (g || !this._groupModule.isUnjoinedAVChatRoom(d))
							if (g)
								if (this._groupModule.isMessageFromAVChatroom(d)) {
									var h = hu(p);
									h.event = n, u.push(h)
								} else {
									p.currentUser = this._groupModule.getMyUserID(), p
										.conversationType = ro.CONV_GROUP, (r = new Q_(p))
										.setElement({
											type: ro.MSG_GRP_TIP,
											content: t(t({}, p.elements), {}, {
												groupProfile: p.groupProfile
											})
										}), r.isSystemMessage = !1;
									var f = this._groupModule.getModule(Jc),
										_ = r.conversationID;
									if (6 === n) r.setOnlineOnlyFlag(!0), s.push(r);
									else if (!f.pushIntoNoticeResult(s, r)) continue;
									if (6 !== n || !f.getLocalConversation(_)) {
										if (6 !== n) this._groupModule.getModule(ll)
											.addMessageSequence({
												key: qd,
												message: r
											});
										if (Ji(i[_])) i[_] = a.push({
											conversationID: _,
											unreadCount: "in" === r.flow && r
												.getOnlineOnlyFlag() ? 0 : 1,
											type: r.conversationType,
											subType: r.conversationSubType,
											lastMessage: r
										}) - 1;
										else {
											var m = i[_];
											a[m].type = r.conversationType, a[m].subType = r
												.conversationSubType, a[m].lastMessage = r,
												"in" !== r.flow || r.getOnlineOnlyFlag() || a[m]
												.unreadCount++
										}
									}
								}
						else this._cacheGroupTipsAndProbe({
							groupID: d,
							event: n,
							item: p
						})
					}
					return {
						eventDataList: a,
						result: s,
						AVChatRoomMessageList: u
					}
				}
			}, {
				key: "handleMessageList",
				value: function(e) {
					var t = this;
					e.forEach((function(e) {
						switch (e.payload.operationType) {
							case 1:
								t._onNewMemberComeIn(e);
								break;
							case 2:
								t._onMemberQuit(e);
								break;
							case 3:
								t._onMemberKickedOut(e);
								break;
							case 4:
								t._onMemberSetAdmin(e);
								break;
							case 5:
								t._onMemberCancelledAdmin(e);
								break;
							case 6:
								t._onGroupProfileModified(e);
								break;
							case 7:
								t._onMemberInfoModified(e);
								break;
							default:
								Ki.warn("".concat(t._className,
									".handleMessageList unknown operationType:"
									).concat(e.payload.operationType))
						}
					}))
				}
			}, {
				key: "_onNewMemberComeIn",
				value: function(e) {
					var t = e.payload,
						n = t.memberNum,
						o = t.groupProfile.groupID,
						r = this._groupModule.getLocalGroupProfile(o);
					r && ji(n) && (r.memberNum = n)
				}
			}, {
				key: "_onMemberQuit",
				value: function(e) {
					var t = e.payload,
						n = t.memberNum,
						o = t.groupProfile.groupID,
						r = this._groupModule.getLocalGroupProfile(o);
					r && ji(n) && (r.memberNum = n), this._groupModule.deleteLocalGroupMembers(
						o, e.payload.userIDList)
				}
			}, {
				key: "_onMemberKickedOut",
				value: function(e) {
					var t = e.payload,
						n = t.memberNum,
						o = t.groupProfile.groupID,
						r = this._groupModule.getLocalGroupProfile(o);
					r && ji(n) && (r.memberNum = n), this._groupModule.deleteLocalGroupMembers(
						o, e.payload.userIDList)
				}
			}, {
				key: "_onMemberSetAdmin",
				value: function(e) {
					var t = e.payload.groupProfile.groupID,
						n = e.payload.userIDList,
						o = this._groupModule.getModule(Wc);
					n.forEach((function(e) {
						var n = o.getLocalGroupMemberInfo(t, e);
						n && n.updateRole(ro.GRP_MBR_ROLE_ADMIN)
					}))
				}
			}, {
				key: "_onMemberCancelledAdmin",
				value: function(e) {
					var t = e.payload.groupProfile.groupID,
						n = e.payload.userIDList,
						o = this._groupModule.getModule(Wc);
					n.forEach((function(e) {
						var n = o.getLocalGroupMemberInfo(t, e);
						n && n.updateRole(ro.GRP_MBR_ROLE_MEMBER)
					}))
				}
			}, {
				key: "_onGroupProfileModified",
				value: function(e) {
					var t = this,
						n = e.payload,
						o = n.newGroupProfile,
						r = n.groupProfile.groupID,
						a = this._groupModule.getLocalGroupProfile(r);
					Object.keys(o).forEach((function(e) {
						switch (e) {
							case "ownerID":
								t._ownerChanged(a, o);
								break;
							default:
								a[e] = o[e]
						}
					})), this._groupModule.emitGroupListUpdate(!0, !0)
				}
			}, {
				key: "_ownerChanged",
				value: function(e, t) {
					var n = e.groupID,
						o = this._groupModule.getLocalGroupProfile(n),
						r = this.tim.context.identifier;
					if (r === t.ownerID) {
						o.updateGroup({
							selfInfo: {
								role: ro.GRP_MBR_ROLE_OWNER
							}
						});
						var a = this._groupModule.getModule(Wc),
							s = a.getLocalGroupMemberInfo(n, r),
							i = this._groupModule.getLocalGroupProfile(n).ownerID,
							u = a.getLocalGroupMemberInfo(n, i);
						s && s.updateRole(ro.GRP_MBR_ROLE_OWNER), u && u.updateRole(ro
							.GRP_MBR_ROLE_MEMBER)
					}
				}
			}, {
				key: "_onMemberInfoModified",
				value: function(e) {
					var t = e.payload.groupProfile.groupID,
						n = this._groupModule.getModule(Wc);
					e.payload.memberList.forEach((function(e) {
						var o = n.getLocalGroupMemberInfo(t, e.userID);
						o && e.muteTime && o.updateMuteUntil(e.muteTime)
					}))
				}
			}, {
				key: "_cacheGroupTips",
				value: function(e, t) {
					this._cachedGroupTipsMap.has(e) || this._cachedGroupTipsMap.set(e, []), this
						._cachedGroupTipsMap.get(e).push(t)
				}
			}, {
				key: "_deleteCachedGroupTips",
				value: function(e) {
					this._cachedGroupTipsMap.has(e) && this._cachedGroupTipsMap.delete(e)
				}
			}, {
				key: "_notifyCachedGroupTips",
				value: function(e) {
					var t = this,
						n = this._cachedGroupTipsMap.get(e) || [];
					n.forEach((function(e) {
						t.onNewGroupTips(e)
					})), this._deleteCachedGroupTips(e), Ki.log("".concat(this._className,
						"._notifyCachedGroupTips groupID:").concat(e, " count:").concat(
						n.length))
				}
			}, {
				key: "_cacheGroupTipsAndProbe",
				value: function(e) {
					var t = this,
						n = e.groupID,
						o = e.event,
						r = e.item;
					this._cacheGroupTips(n, {
							event: o,
							dataList: [r]
						}), this._groupModule.getGroupSimplifiedInfo(n).then((function(e) {
							e.type === ro.GRP_AVCHATROOM ? t._groupModule.hasLocalGroup(
									n) ? t._notifyCachedGroupTips(n) : t._groupModule
								.setUnjoinedAVChatRoom(n) : (t._groupModule
									.updateGroupMap([e]), t._notifyCachedGroupTips(n))
						})), this._checkCountMap.has(n) || this._checkCountMap.set(n, 0), Ki
						.log("".concat(this._className, "._cacheGroupTipsAndProbe groupID:")
							.concat(n))
				}
			}, {
				key: "reset",
				value: function() {
					this._cachedGroupTipsMap.clear(), this._checkCountMap.clear()
				}
			}]), e
		}(),
		zm = Ho.UNSUPPORTED_Y,
		Wm = [].push,
		Jm = Math.min;
	or("split", (function(e, t, n) {
		var o;
		return o = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 !=
			"ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/)
			.length > 1 || "".split(/.?/).length ? function(e, n) {
				var o = Mt(V(this)),
					r = void 0 === n ? 4294967295 : n >>> 0;
				if (0 === r) return [];
				if (void 0 === e) return [o];
				if (!dr(e)) return t.call(o, e, r);
				for (var a, s, i, u = [], c = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") +
						(e.unicode ? "u" : "") + (e.sticky ? "y" : ""), l = 0, p = new RegExp(e
							.source, c + "g");
					(a = er.call(p, o)) && !((s = p.lastIndex) > l && (u.push(o.slice(l, a.index)),
						a.length > 1 && a.index < o.length && Wm.apply(u, a.slice(1)), i = a[0]
						.length, l = s, u.length >= r));) p.lastIndex === a.index && p.lastIndex++;
				return l === o.length ? !i && p.test("") || u.push("") : u.push(o.slice(l)), u
					.length > r ? u.slice(0, r) : u
			} : "0".split(void 0, 0).length ? function(e, n) {
				return void 0 === e && 0 === n ? [] : t.call(this, e, n)
			} : t, [function(t, n) {
				var r = V(this),
					a = null == t ? void 0 : t[e];
				return void 0 !== a ? a.call(t, r, n) : o.call(Mt(r), t, n)
			}, function(e, r) {
				var a = Se(this),
					s = Mt(e),
					i = n(o, a, s, r, o !== t);
				if (i.done) return i.value;
				var u = Ta(a, RegExp),
					c = a.unicode,
					l = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ?
						"u" : "") + (zm ? "g" : "y"),
					p = new u(zm ? "^(?:" + a.source + ")" : a, l),
					d = void 0 === r ? 4294967295 : r >>> 0;
				if (0 === d) return [];
				if (0 === s.length) return null === sr(p, s) ? [s] : [];
				for (var g = 0, h = 0, f = []; h < s.length;) {
					p.lastIndex = zm ? 0 : h;
					var _, m = sr(p, zm ? s.slice(h) : s);
					if (null === m || (_ = Jm(We(p.lastIndex + (zm ? h : 0)), s.length)) === g)
						h = ar(s, h, c);
					else {
						if (f.push(s.slice(g, h)), f.length === d) return f;
						for (var v = 1; v <= m.length - 1; v++)
							if (f.push(m[v]), f.length === d) return f;
						h = g = _
					}
				}
				return f.push(s.slice(g)), f
			}]
	}), !!L((function() {
		var e = /(?:)/,
			t = e.exec;
		e.exec = function() {
			return t.apply(this, arguments)
		};
		var n = "ab".split(e);
		return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
	})), zm);
	var Xm = function() {
			function e(t) {
				o(this, e), this._groupModule = t, this._className = "CommonGroupHandler", this
					.tempConversationList = null, this._cachedGroupMessageMap = new Map, this._checkCountMap =
					new Map, this.MAX_CHECK_COUNT = 4, t.getInnerEmitterInstance().once(Om
						.CONTEXT_A2KEY_AND_TINYID_UPDATED, this._initGroupList, this)
			}
			return a(e, [{
				key: "onCheckTimer",
				value: function(e) {
					e % 1 == 0 && this._cachedGroupMessageMap.size > 0 && this
						._checkCachedGroupMessage()
				}
			}, {
				key: "_checkCachedGroupMessage",
				value: function() {
					var e = this;
					this._cachedGroupMessageMap.forEach((function(t, n) {
						var o = e._checkCountMap.get(n),
							r = e._groupModule.hasLocalGroup(n);
						Ki.log("".concat(e._className,
									"._checkCachedGroupMessage groupID:").concat(n,
									" hasLocalGroup:").concat(r, " checkCount:")
								.concat(o)), r ? (e._notifyCachedGroupMessage(n), e
								._checkCountMap.delete(n), e._groupModule
								.deleteUnjoinedAVChatRoom(n)) : o >= e
							.MAX_CHECK_COUNT ? (e._deleteCachedGroupMessage(n), e
								._checkCountMap.delete(n)) : (o++, e._checkCountMap
								.set(n, o))
					}))
				}
			}, {
				key: "_initGroupList",
				value: function() {
					var e = this;
					Ki.log("".concat(this._className, "._initGroupList"));
					var t = new jd(Gg),
						n = this._groupModule.getStorageGroupList();
					if (Wi(n) && n.length > 0) {
						n.forEach((function(t) {
							e._groupModule.initGroupMap(t)
						})), this._groupModule.emitGroupListUpdate(!0, !1);
						var o = this._groupModule.getLocalGroupList().length;
						t.setNetworkType(this._groupModule.getNetworkType()).setMessage(
							"group count:".concat(o)).end()
					} else t.setNetworkType(this._groupModule.getNetworkType()).setMessage(
						"group count:0").end();
					Ki.log("".concat(this._className, "._initGroupList ok")), this
					.getGroupList()
				}
			}, {
				key: "handleUpdateGroupLastMessage",
				value: function(e) {
					var t = "".concat(this._className, ".handleUpdateGroupLastMessage");
					if (Ki.debug("".concat(t, " conversation count:").concat(e.length,
							", local group count:").concat(this._groupModule
							.getLocalGroupList().length)), 0 !== this._groupModule.getGroupMap()
						.size) {
						for (var n, o, r, a = !1, s = 0, i = e.length; s < i; s++)(n = e[s])
							.type === ro.CONV_GROUP && (o = n.conversationID.split(/^GROUP/)[1],
								(r = this._groupModule.getLocalGroupProfile(o)) && (r
									.lastMessage = n.lastMessage, a = !0));
						a && (this._groupModule.sortLocalGroupList(), this._groupModule
							.emitGroupListUpdate(!0, !1))
					} else this.tempConversationList = e
				}
			}, {
				key: "onNewGroupMessage",
				value: function(e) {
					Ki.debug("".concat(this._className, ".onNewGroupMessage count:").concat(e
						.dataList.length));
					var t = this._newGroupMessageStoredAndSummary(e),
						n = t.conversationOptionsList,
						o = t.messageList,
						r = t.AVChatRoomMessageList;
					(r.length > 0 && this._groupModule.onAVChatRoomMessage(r), this._groupModule
						.filterModifiedMessage(o), n.length > 0) && (this._groupModule
						.getModule(Jc).onNewMessage({
							conversationOptionsList: n,
							isInstantMessage: !0
						}), this._groupModule.updateNextMessageSeq(n));
					var a = this._groupModule.filterUnmodifiedMessage(o);
					a.length > 0 && this._groupModule.emitOuterEvent(oo.MESSAGE_RECEIVED, a), o
						.length = 0
				}
			}, {
				key: "_newGroupMessageStoredAndSummary",
				value: function(e) {
					var t = e.dataList,
						n = e.event,
						o = e.isInstantMessage,
						r = null,
						a = [],
						s = [],
						i = [],
						u = {},
						c = ro.CONV_GROUP,
						l = this._groupModule.getModule(tl),
						p = t.length;
					p > 1 && t.sort((function(e, t) {
						return e.sequence - t.sequence
					}));
					for (var d = 0; d < p; d++) {
						var g = t[d],
							h = g.groupProfile.groupID,
							f = this._groupModule.hasLocalGroup(h);
						if (f || !this._groupModule.isUnjoinedAVChatRoom(h))
							if (f)
								if (this._groupModule.isMessageFromAVChatroom(h)) {
									var _ = hu(g);
									_.event = n, i.push(_)
								} else {
									g.currentUser = this._groupModule.getMyUserID(), g
										.conversationType = c, g.isSystemMessage = !!g
										.isSystemMessage, r = new Q_(g), g.elements = l
										.parseElements(g.elements, g.from), r.setElement(g
											.elements);
									var m = 1 === t[d].isModified,
										v = this._groupModule.getModule(Jc);
									v.isMessageSentByCurrentInstance(r) ? r.isModified = m :
										m = !1;
									var M = this._groupModule.getModule(ll);
									if (o && M.addMessageDelay({
											currentTime: Date.now(),
											time: r.time
										}), 1 === g.onlineOnlyFlag) r.setOnlineOnlyFlag(!0), s
										.push(r);
									else {
										if (!v.pushIntoMessageList(s, r, m)) continue;
										M.addMessageSequence({
											key: qd,
											message: r
										});
										var y = r.conversationID;
										if (Ji(u[y])) u[y] = a.push({
											conversationID: y,
											unreadCount: "out" === r.flow ? 0 : 1,
											type: r.conversationType,
											subType: r.conversationSubType,
											lastMessage: r
										}) - 1;
										else {
											var I = u[y];
											a[I].type = r.conversationType, a[I].subType = r
												.conversationSubType, a[I].lastMessage = r,
												"in" === r.flow && a[I].unreadCount++
										}
									}
								}
						else this._cacheGroupMessageAndProbe({
							groupID: h,
							event: n,
							item: g
						})
					}
					return {
						conversationOptionsList: a,
						messageList: s,
						AVChatRoomMessageList: i
					}
				}
			}, {
				key: "onGroupMessageRevoked",
				value: function(e) {
					Ki.debug("".concat(this._className, ".onGroupMessageRevoked nums:").concat(e
						.dataList.length));
					var t = this._groupModule.getModule(Jc),
						n = [],
						o = null;
					e.dataList.forEach((function(e) {
						var r = e.elements.revokedInfos;
						Ji(r) || r.forEach((function(e) {
							(o = t.revoke("GROUP".concat(e.groupID), e
								.sequence, e.random)) && n.push(o)
						}))
					})), 0 !== n.length && (t.onMessageRevoked(n), this._groupModule
						.emitOuterEvent(oo.MESSAGE_REVOKED, n))
				}
			}, {
				key: "_groupListTreeShaking",
				value: function(e) {
					for (var t = new Map(v(this._groupModule.getGroupMap())), n = 0, o = e
							.length; n < o; n++) t.delete(e[n].groupID);
					this._groupModule.hasJoinedAVChatRoom() && this._groupModule
						.getJoinedAVChatRoom().forEach((function(e) {
							t.delete(e)
						}));
					for (var r = v(t.keys()), a = 0, s = r.length; a < s; a++) this._groupModule
						.deleteGroup(r[a])
				}
			}, {
				key: "getGroupList",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, ".getGroupList"),
						o = new jd(wg);
					Ki.log("".concat(n));
					var r = {
							introduction: "Introduction",
							notification: "Notification",
							createTime: "CreateTime",
							ownerID: "Owner_Account",
							lastInfoTime: "LastInfoTime",
							memberNum: "MemberNum",
							maxMemberNum: "MaxMemberNum",
							joinOption: "ApplyJoinOption",
							muteAllMembers: "ShutUpAllMember"
						},
						a = ["Type", "Name", "FaceUrl", "NextMsgSeq", "LastMsgTime"],
						s = [];
					return e && e.groupProfileFilter && e.groupProfileFilter.forEach((function(
						e) {
						r[e] && a.push(r[e])
					})), this._pagingGetGroupList({
						limit: 50,
						offset: 0,
						groupBaseInfoFilter: a,
						groupList: s
					}).then((function() {
						Ki.log("".concat(n, " ok. count:").concat(s.length)), t
							._groupListTreeShaking(s), t._groupModule
							.updateGroupMap(s);
						var e = t._groupModule.getLocalGroupList().length;
						return o.setNetworkType(t._groupModule.getNetworkType())
							.setMessage("remote count:".concat(s.length,
								", after tree shaking, local count:").concat(e))
							.end(), t.tempConversationList && (Ki.log("".concat(n,
									" update last message with tempConversationList, count:"
									).concat(t.tempConversationList.length)), t
								.handleUpdateGroupLastMessage({
									data: t.tempConversationList
								}), t.tempConversationList = null), t._groupModule
							.emitGroupListUpdate(), Z_({
								groupList: t._groupModule.getLocalGroupList()
							})
					})).catch((function(e) {
						return t._groupModule.probeNetwork().then((function(t) {
							var n = m(t, 2),
								r = n[0],
								a = n[1];
							o.setError(e, r, a).end()
						})), Ki.error("".concat(n, " failed. error:"), e), cm(e)
					}))
				}
			}, {
				key: "_pagingGetGroupList",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, "._pagingGetGroupList"),
						o = e.limit,
						r = e.offset,
						a = e.groupBaseInfoFilter,
						s = e.groupList,
						i = new jd(qg);
					return this._groupModule.request({
						protocolName: wl,
						requestData: {
							memberAccount: this._groupModule.getMyUserID(),
							limit: o,
							offset: r,
							responseFilter: {
								groupBaseInfoFilter: a,
								selfInfoFilter: ["Role", "JoinTime", "MsgFlag"]
							}
						}
					}).then((function(e) {
						var u = e.data,
							c = u.groups,
							l = u.totalCount;
						s.push.apply(s, v(c));
						var p = r + o,
							d = !(l > p);
						return i.setNetworkType(t._groupModule.getNetworkType())
							.setMessage("offset:".concat(r, " totalCount:").concat(
									l, " isCompleted:").concat(d, " currentCount:")
								.concat(s.length)).end(), d ? (Ki.log("".concat(n,
								" ok. totalCount:").concat(l)), Z_({
								groupList: s
							})) : (r = p, t._pagingGetGroupList({
								limit: o,
								offset: r,
								groupBaseInfoFilter: a,
								groupList: s
							}))
					})).catch((function(e) {
						return t._groupModule.probeNetwork().then((function(t) {
							var n = m(t, 2),
								o = n[0],
								r = n[1];
							i.setError(e, o, r).end()
						})), cm(e)
					}))
				}
			}, {
				key: "_cacheGroupMessage",
				value: function(e, t) {
					this._cachedGroupMessageMap.has(e) || this._cachedGroupMessageMap.set(e,
					[]), this._cachedGroupMessageMap.get(e).push(t)
				}
			}, {
				key: "_deleteCachedGroupMessage",
				value: function(e) {
					this._cachedGroupMessageMap.has(e) && this._cachedGroupMessageMap.delete(e)
				}
			}, {
				key: "_notifyCachedGroupMessage",
				value: function(e) {
					var t = this,
						n = this._cachedGroupMessageMap.get(e) || [];
					n.forEach((function(e) {
						t.onNewGroupMessage(e)
					})), this._deleteCachedGroupMessage(e), Ki.log("".concat(this
						._className, "._notifyCachedGroupMessage groupID:").concat(e,
						" count:").concat(n.length))
				}
			}, {
				key: "_cacheGroupMessageAndProbe",
				value: function(e) {
					var t = this,
						n = e.groupID,
						o = e.event,
						r = e.item;
					this._cacheGroupMessage(n, {
							event: o,
							dataList: [r]
						}), this._groupModule.getGroupSimplifiedInfo(n).then((function(e) {
							e.type === ro.GRP_AVCHATROOM ? t._groupModule.hasLocalGroup(
									n) ? t._notifyCachedGroupMessage(n) : t._groupModule
								.setUnjoinedAVChatRoom(n) : (t._groupModule
									.updateGroupMap([e]), t._notifyCachedGroupMessage(n)
									)
						})), this._checkCountMap.has(n) || this._checkCountMap.set(n, 0), Ki
						.log("".concat(this._className, "._cacheGroupMessageAndProbe groupID:")
							.concat(n))
				}
			}, {
				key: "reset",
				value: function() {
					this._cachedGroupMessageMap.clear(), this._checkCountMap.clear(), this
						._groupModule.getInnerEmitterInstance().once(Om
							.CONTEXT_A2KEY_AND_TINYID_UPDATED, this._initGroupList, this)
				}
			}]), e
		}(),
		Qm = {
			1: "init",
			2: "modify",
			3: "clear",
			4: "delete"
		},
		Zm = function() {
			function e(t) {
				o(this, e), this._groupModule = t, this._className = "GroupAttributesHandler", this
					._groupAttributesMap = new Map, this.CACHE_EXPIRE_TIME = 3e4, this._groupModule
					.getInnerEmitterInstance().on(Om.CLOUD_CONFIG_UPDATED, this._onCloudConfigUpdated, this)
			}
			return a(e, [{
				key: "_onCloudConfigUpdated",
				value: function() {
					var e = this._groupModule.getCloudConfig("grp_attr_cache_time");
					Ji(e) || (this.CACHE_EXPIRE_TIME = Number(e))
				}
			}, {
				key: "updateLocalMainSequenceOnReconnected",
				value: function() {
					this._groupAttributesMap.forEach((function(e) {
						e.localMainSequence = 0
					}))
				}
			}, {
				key: "onGroupAttributesUpdated",
				value: function(e) {
					var t = this,
						n = e.groupID,
						o = e.groupAttributeOption,
						r = o.mainSequence,
						a = o.hasChangedAttributeInfo,
						s = o.groupAttributeList,
						i = void 0 === s ? [] : s,
						u = o.operationType;
					if (Ki.log("".concat(this._className,
							".onGroupAttributesUpdated. hasChangedAttributeInfo:").concat(a,
							" operationType:").concat(u)), 1 === a) {
						if (4 === u) {
							var c = [];
							i.forEach((function(e) {
								c.push(e.key)
							})), i = v(c), c = null
						}
						return this._refreshCachedGroupAttributes({
							groupID: n,
							remoteMainSequence: r,
							groupAttributeList: i,
							operationType: Qm[u]
						}), void this._emitGroupAttributesUpdated(n)
					}
					if (this._groupAttributesMap.has(n)) {
						var l = this._groupAttributesMap.get(n).avChatRoomKey;
						this._getGroupAttributes({
							groupID: n,
							avChatRoomKey: l
						}).then((function() {
							t._emitGroupAttributesUpdated(n)
						}))
					}
				}
			}, {
				key: "initGroupAttributesCache",
				value: function(e) {
					var t = e.groupID,
						n = e.avChatRoomKey;
					this._groupAttributesMap.set(t, {
						lastUpdateTime: 0,
						localMainSequence: 0,
						remoteMainSequence: 0,
						attributes: new Map,
						avChatRoomKey: n
					}), Ki.log("".concat(this._className,
						".initGroupAttributesCache groupID:").concat(t,
						" avChatRoomKey:").concat(n))
				}
			}, {
				key: "initGroupAttributes",
				value: function(e) {
					var t = this,
						n = e.groupID,
						o = e.groupAttributes,
						r = this._checkCachedGroupAttributes({
							groupID: n,
							funcName: "initGroupAttributes"
						});
					if (!0 !== r) return cm(r);
					var a = this._groupAttributesMap.get(n),
						s = a.remoteMainSequence,
						i = a.avChatRoomKey,
						u = new jd(Kg);
					return u.setMessage("groupID:".concat(n, " mainSequence:").concat(s,
							" groupAttributes:").concat(JSON.stringify(o))), this._groupModule
						.request({
							protocolName: tp,
							requestData: {
								groupID: n,
								avChatRoomKey: i,
								mainSequence: s,
								groupAttributeList: this._transformGroupAttributes(o)
							}
						}).then((function(e) {
							var r = e.data,
								a = r.mainSequence,
								s = v(r.groupAttributeList);
							return s.forEach((function(e) {
									e.value = o[e.key]
								})), t._refreshCachedGroupAttributes({
									groupID: n,
									remoteMainSequence: a,
									groupAttributeList: s,
									operationType: "init"
								}), u.setNetworkType(t._groupModule.getNetworkType())
								.end(), Ki.log("".concat(t._className,
									".initGroupAttributes ok. groupID:").concat(n)),
							Z_({
									groupAttributes: o
								})
						})).catch((function(e) {
							return t._groupModule.probeNetwork().then((function(t) {
								var n = m(t, 2),
									o = n[0],
									r = n[1];
								u.setError(e, o, r).end()
							})), cm(e)
						}))
				}
			}, {
				key: "setGroupAttributes",
				value: function(e) {
					var t = this,
						n = e.groupID,
						o = e.groupAttributes,
						r = this._checkCachedGroupAttributes({
							groupID: n,
							funcName: "setGroupAttributes"
						});
					if (!0 !== r) return cm(r);
					var a = this._groupAttributesMap.get(n),
						s = a.remoteMainSequence,
						i = a.avChatRoomKey,
						u = a.attributes,
						c = this._transformGroupAttributes(o);
					c.forEach((function(e) {
						var t = e.key;
						e.sequence = 0, u.has(t) && (e.sequence = u.get(t).sequence)
					}));
					var l = new jd(Bg);
					return l.setMessage("groupID:".concat(n, " mainSequence:").concat(s,
							" groupAttributes:").concat(JSON.stringify(o))), this._groupModule
						.request({
							protocolName: np,
							requestData: {
								groupID: n,
								avChatRoomKey: i,
								mainSequence: s,
								groupAttributeList: c
							}
						}).then((function(e) {
							var r = e.data,
								a = r.mainSequence,
								s = v(r.groupAttributeList);
							return s.forEach((function(e) {
									e.value = o[e.key]
								})), t._refreshCachedGroupAttributes({
									groupID: n,
									remoteMainSequence: a,
									groupAttributeList: s,
									operationType: "modify"
								}), l.setNetworkType(t._groupModule.getNetworkType())
								.end(), Ki.log("".concat(t._className,
									".setGroupAttributes ok. groupID:").concat(n)), Z_({
									groupAttributes: o
								})
						})).catch((function(e) {
							return t._groupModule.probeNetwork().then((function(t) {
								var n = m(t, 2),
									o = n[0],
									r = n[1];
								l.setError(e, o, r).end()
							})), cm(e)
						}))
				}
			}, {
				key: "deleteGroupAttributes",
				value: function(e) {
					var t = this,
						n = e.groupID,
						o = e.keyList,
						r = void 0 === o ? [] : o,
						a = this._checkCachedGroupAttributes({
							groupID: n,
							funcName: "deleteGroupAttributes"
						});
					if (!0 !== a) return cm(a);
					var s = this._groupAttributesMap.get(n),
						i = s.remoteMainSequence,
						u = s.avChatRoomKey,
						c = s.attributes,
						l = v(c.keys()),
						p = rp,
						d = "clear",
						g = {
							groupID: n,
							avChatRoomKey: u,
							mainSequence: i
						};
					if (r.length > 0) {
						var h = [];
						l = [], p = op, d = "delete", r.forEach((function(e) {
							var t = 0;
							c.has(e) && (t = c.get(e).sequence, l.push(e)), h.push({
								key: e,
								sequence: t
							})
						})), g.groupAttributeList = h
					}
					var f = new jd(Hg);
					return f.setMessage("groupID:".concat(n, " mainSequence:").concat(i,
							" keyList:").concat(r, " protocolName:").concat(p)), this
						._groupModule.request({
							protocolName: p,
							requestData: g
						}).then((function(e) {
							var o = e.data.mainSequence;
							return t._refreshCachedGroupAttributes({
									groupID: n,
									remoteMainSequence: o,
									groupAttributeList: r,
									operationType: d
								}), f.setNetworkType(t._groupModule.getNetworkType())
								.end(), Ki.log("".concat(t._className,
										".deleteGroupAttributes ok. groupID:").concat(
									n)), Z_({
									keyList: l
								})
						})).catch((function(e) {
							return t._groupModule.probeNetwork().then((function(t) {
								var n = m(t, 2),
									o = n[0],
									r = n[1];
								f.setError(e, o, r).end()
							})), cm(e)
						}))
				}
			}, {
				key: "getGroupAttributes",
				value: function(e) {
					var t = this,
						n = e.groupID,
						o = this._checkCachedGroupAttributes({
							groupID: n,
							funcName: "getGroupAttributes"
						});
					if (!0 !== o) return cm(o);
					var r = this._groupAttributesMap.get(n),
						a = r.avChatRoomKey,
						s = r.lastUpdateTime,
						i = r.localMainSequence,
						u = r.remoteMainSequence,
						c = new jd(jg);
					if (c.setMessage("groupID:".concat(n, " localMainSequence:").concat(i,
								" remoteMainSequence:").concat(u, " keyList:").concat(e
							.keyList)), Date.now() - s >= this.CACHE_EXPIRE_TIME || i < u)
						return this._getGroupAttributes({
							groupID: n,
							avChatRoomKey: a
						}).then((function(o) {
							c.setMoreMessage("get attributes from remote. count:"
								.concat(o.length)).setNetworkType(t._groupModule
								.getNetworkType()).end(), Ki.log("".concat(t
									._className,
									".getGroupAttributes from remote. groupID:")
								.concat(n));
							var r = t._getLocalGroupAttributes(e);
							return Z_({
								groupAttributes: r
							})
						})).catch((function(e) {
							return t._groupModule.probeNetwork().then((function(t) {
								var n = m(t, 2),
									o = n[0],
									r = n[1];
								c.setError(e, o, r).end()
							})), cm(e)
						}));
					c.setMoreMessage("get attributes from cache").setNetworkType(this
						._groupModule.getNetworkType()).end(), Ki.log("".concat(this
						._className, ".getGroupAttributes from cache. groupID:").concat(
						n));
					var l = this._getLocalGroupAttributes(e);
					return um({
						groupAttributes: l
					})
				}
			}, {
				key: "_getGroupAttributes",
				value: function(e) {
					var n = this;
					return this._groupModule.request({
						protocolName: ap,
						requestData: t({}, e)
					}).then((function(t) {
						var o = t.data,
							r = o.mainSequence,
							a = o.groupAttributeList,
							s = v(a);
						return Ki.log("".concat(n._className,
							"._getGroupAttributes ok. groupID:").concat(e
							.groupID)), n._refreshCachedGroupAttributes({
							groupID: e.groupID,
							remoteMainSequence: r,
							groupAttributeList: s,
							operationType: "get"
						}), a
					})).catch((function(e) {
						return cm(e)
					}))
				}
			}, {
				key: "_getLocalGroupAttributes",
				value: function(e) {
					var t = e.groupID,
						n = e.keyList,
						o = void 0 === n ? [] : n,
						r = {};
					if (!this._groupAttributesMap.has(t)) return r;
					var a = this._groupAttributesMap.get(t).attributes;
					if (o.length > 0) o.forEach((function(e) {
						a.has(e) && (r[e] = a.get(e).value)
					}));
					else {
						var s, i = D(a.keys());
						try {
							for (i.s(); !(s = i.n()).done;) {
								var u = s.value;
								r[u] = a.get(u).value
							}
						} catch (c) {
							i.e(c)
						} finally {
							i.f()
						}
					}
					return r
				}
			}, {
				key: "_refreshCachedGroupAttributes",
				value: function(e) {
					var t = e.groupID,
						n = e.remoteMainSequence,
						o = e.groupAttributeList,
						r = e.operationType;
					if (this._groupAttributesMap.has(t)) {
						var a = this._groupAttributesMap.get(t),
							s = a.localMainSequence;
						if ("get" === r || n - s == 1) a.remoteMainSequence = n, a
							.localMainSequence = n, a.lastUpdateTime = Date.now(), this
							._updateCachedAttributes({
								groupAttributes: a,
								groupAttributeList: o,
								operationType: r
							});
						else {
							if (s === n) return;
							a.remoteMainSequence = n
						}
						this._groupAttributesMap.set(t, a);
						var i = "operationType:".concat(r, " localMainSequence:").concat(s,
							" remoteMainSequence:").concat(n);
						Ki.log("".concat(this._className, "._refreshCachedGroupAttributes. ")
							.concat(i))
					}
				}
			}, {
				key: "_updateCachedAttributes",
				value: function(e) {
					var t = e.groupAttributes,
						n = e.groupAttributeList,
						o = e.operationType;
					"clear" !== o ? "delete" !== o ? ("init" === o && t.attributes.clear(), n
						.forEach((function(e) {
							var n = e.key,
								o = e.value,
								r = e.sequence;
							t.attributes.set(n, {
								value: o,
								sequence: r
							})
						}))) : n.forEach((function(e) {
						t.attributes.delete(e)
					})) : t.attributes.clear()
				}
			}, {
				key: "_checkCachedGroupAttributes",
				value: function(e) {
					var t = e.groupID,
						n = e.funcName;
					if (this._groupModule.hasLocalGroup(t) && this._groupModule
						.getLocalGroupProfile(t).type !== ro.GRP_AVCHATROOM) {
						return Ki.warn("".concat(this._className,
								"._checkCachedGroupAttributes. ").concat("非直播群不能使用群属性 API")),
							new am({
								code: Tp.CANNOT_USE_GRP_ATTR_NOT_AVCHATROOM,
								message: "非直播群不能使用群属性 API"
							})
					}
					var o = this._groupAttributesMap.get(t);
					if (Ji(o)) {
						var r = "如果 groupID:".concat(t, " 是直播群，使用 ").concat(n,
							" 前先使用 joinGroup 接口申请加入群组，详细请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#joinGroup"
							);
						return Ki.warn("".concat(this._className,
							"._checkCachedGroupAttributes. ").concat(r)), new am({
							code: Tp.CANNOT_USE_GRP_ATTR_AVCHATROOM_UNJOIN,
							message: r
						})
					}
					return !0
				}
			}, {
				key: "_transformGroupAttributes",
				value: function(e) {
					var t = [];
					return Object.keys(e).forEach((function(n) {
						t.push({
							key: n,
							value: e[n]
						})
					})), t
				}
			}, {
				key: "_emitGroupAttributesUpdated",
				value: function(e) {
					var t = this._getLocalGroupAttributes({
						groupID: e
					});
					this._groupModule.emitOuterEvent(oo.GROUP_ATTRIBUTES_UPDATED, {
						groupID: e,
						groupAttributes: t
					})
				}
			}, {
				key: "reset",
				value: function() {
					this._groupAttributesMap.clear(), this.CACHE_EXPIRE_TIME = 3e4
				}
			}]), e
		}(),
		ev = function() {
			function e(t) {
				o(this, e);
				var n = t.groupModule,
					r = t.groupID,
					a = t.onInit,
					s = t.onSuccess,
					i = t.onFail;
				this._groupModule = n, this._className = "Polling", this._onInit = a, this._onSuccess = s, this
					._onFail = i, this._groupID = r, this._timeoutID = -1, this._isRunning = !1, this
					._pollingInterval = 0, this.MAX_POLLING_INTERVAL = 2e3
			}
			return a(e, [{
				key: "start",
				value: function() {
					Ki.log("".concat(this._className, ".start")), this._isRunning = !0, this
						._request()
				}
			}, {
				key: "isRunning",
				value: function() {
					return this._isRunning
				}
			}, {
				key: "_request",
				value: function() {
					var e = this,
						t = this._onInit(this._groupID),
						n = Xl;
					this._groupModule.isLoggedIn() || (n = Ql), this._groupModule.request({
						protocolName: n,
						requestData: t
					}).then((function(t) {
						e._onSuccess(e._groupID, t), e.isRunning() && (clearTimeout(
							e._timeoutID), e._timeoutID = setTimeout(e
							._request.bind(e), 0))
					})).catch((function(t) {
						e._onFail(e._groupID, t), e.isRunning() && (clearTimeout(e
							._timeoutID), e._timeoutID = setTimeout(e
							._request.bind(e), e.MAX_POLLING_INTERVAL))
					}))
				}
			}, {
				key: "stop",
				value: function() {
					Ki.log("".concat(this._className, ".stop")), this._timeoutID > 0 && (
						clearTimeout(this._timeoutID), this._timeoutID = -1, this
						._pollingInterval = 0), this._isRunning = !1
				}
			}]), e
		}(),
		tv = {
			3: !0,
			4: !0,
			5: !0,
			6: !0
		},
		nv = function() {
			function e(t) {
				o(this, e), this._groupModule = t, this._className = "AVChatRoomHandler", this._joinedGroupMap =
					new Map, this._pollingRequestInfoMap = new Map, this._pollingInstanceMap = new Map, this
					.sequencesLinkedList = new xm(100), this.messageIDLinkedList = new xm(100), this
					.receivedMessageCount = 0, this._reportMessageStackedCount = 0, this._onlineMemberCountMap =
					new Map, this.DEFAULT_EXPIRE_TIME = 60
			}
			return a(e, [{
				key: "hasJoinedAVChatRoom",
				value: function() {
					return this._joinedGroupMap.size > 0
				}
			}, {
				key: "checkJoinedAVChatRoomByID",
				value: function(e) {
					return this._joinedGroupMap.has(e)
				}
			}, {
				key: "getJoinedAVChatRoom",
				value: function() {
					return this._joinedGroupMap.size > 0 ? v(this._joinedGroupMap.keys()) : null
				}
			}, {
				key: "_updateRequestData",
				value: function(e) {
					return t({}, this._pollingRequestInfoMap.get(e))
				}
			}, {
				key: "_handleSuccess",
				value: function(e, t) {
					var n = t.data,
						o = n.key,
						r = n.nextSeq,
						a = n.rspMsgList;
					if (0 !== n.errorCode) {
						var s = this._pollingRequestInfoMap.get(e),
							i = new jd(th),
							u = s ? "".concat(s.key, "-").concat(s.startSeq) :
							"requestInfo is undefined";
						i.setMessage("".concat(e, "-").concat(u, "-").concat(t.errorInfo))
							.setCode(t.errorCode).setNetworkType(this._groupModule
								.getNetworkType()).end(!0)
					} else {
						if (!this.checkJoinedAVChatRoomByID(e)) return;
						$i(o) && ji(r) && this._pollingRequestInfoMap.set(e, {
							key: o,
							startSeq: r
						}), Wi(a) && a.length > 0 && (a.forEach((function(e) {
							e.to = e.groupID
						})), this.onMessage(a))
					}
				}
			}, {
				key: "_handleFailure",
				value: function(e, t) {}
			}, {
				key: "onMessage",
				value: function(e) {
					if (Wi(e) && 0 !== e.length) {
						var t = null,
							n = [],
							o = this._getModule(Jc),
							r = e.length;
						r > 1 && e.sort((function(e, t) {
							return e.sequence - t.sequence
						}));
						for (var a = this._getModule(Xc), s = 0; s < r; s++)
							if (tv[e[s].event]) {
								this.receivedMessageCount += 1, t = this.packMessage(e[s], e[s]
									.event);
								var i = 1 === e[s].isModified;
								if ((a.isUnlimitedAVChatRoom() || !this.sequencesLinkedList.has(
										t.sequence)) && !this.messageIDLinkedList.has(t.ID)) {
									var u = t.conversationID;
									if (this.receivedMessageCount % 40 == 0 && this._getModule(
											il).detectMessageLoss(u, this.sequencesLinkedList
											.data()), null !== this.sequencesLinkedList
									.tail()) {
										var c = this.sequencesLinkedList.tail().value,
											l = t.sequence - c;
										l > 1 && l <= 20 ? this._getModule(il)
											.onMessageMaybeLost(u, c + 1, l - 1) : l < -1 &&
											l >= -20 && this._getModule(il).onMessageMaybeLost(
												u, t.sequence + 1, Math.abs(l) - 1)
									}
									this.sequencesLinkedList.set(t.sequence), this
										.messageIDLinkedList.set(t.ID);
									var p = !1;
									if (this._isMessageSentByCurrentInstance(t) ? i && (p = !0,
											t.isModified = i, o.updateMessageIsModifiedProperty(
												t)) : p = !0, p) {
										if (t.conversationType, ro.CONV_SYSTEM, t
											.conversationType !== ro.CONV_SYSTEM) {
											var d = this._getModule(ll),
												g = t.conversationID.replace(ro.CONV_GROUP, "");
											this._pollingInstanceMap.has(g) ? d
												.addMessageSequence({
													key: Vd,
													message: t
												}) : (t.type !== ro.MSG_GRP_TIP && d
													.addMessageDelay({
														currentTime: Date.now(),
														time: t.time
													}), d.addMessageSequence({
														key: xd,
														message: t
													}))
										}
										n.push(t)
									}
								}
							} else Ki.warn("".concat(this._className,
								".onMessage 未处理的 event 类型: ").concat(e[s].event));
						if (0 !== n.length) {
							this._groupModule.filterModifiedMessage(n);
							var h = this.packConversationOption(n);
							if (h.length > 0) this._getModule(Jc).onNewMessage({
								conversationOptionsList: h,
								isInstantMessage: !0
							});
							Ki.debug("".concat(this._className, ".onMessage count:").concat(n
								.length)), this._checkMessageStacked(n);
							var f = this._groupModule.filterUnmodifiedMessage(n);
							f.length > 0 && this._groupModule.emitOuterEvent(oo
								.MESSAGE_RECEIVED, f), n.length = 0
						}
					}
				}
			}, {
				key: "_checkMessageStacked",
				value: function(e) {
					var t = e.length;
					t >= 100 && (Ki.warn("".concat(this._className,
						"._checkMessageStacked 直播群消息堆积数:").concat(e.length,
						'！可能会导致微信小程序渲染时遇到 "Dom limit exceeded" 的错误，建议接入侧此时只渲染最近的10条消息'
						)), this._reportMessageStackedCount < 5 && (new jd(oh)
						.setNetworkType(this._groupModule.getNetworkType()).setMessage(
							"count:".concat(t, " groupID:").concat(v(this
								._joinedGroupMap.keys()))).setLevel("warning").end(),
						this._reportMessageStackedCount += 1))
				}
			}, {
				key: "_isMessageSentByCurrentInstance",
				value: function(e) {
					return !!this._getModule(Jc).isMessageSentByCurrentInstance(e)
				}
			}, {
				key: "packMessage",
				value: function(e, t) {
					e.currentUser = this._groupModule.getMyUserID(), e.conversationType = 5 ===
						t ? ro.CONV_SYSTEM : ro.CONV_GROUP, e.isSystemMessage = !!e
						.isSystemMessage;
					var n = new Q_(e),
						o = this.packElements(e, t);
					return n.setElement(o), n
				}
			}, {
				key: "packElements",
				value: function(e, n) {
					return 4 === n || 6 === n ? (this._updateMemberCountByGroupTips(e), this
						._onGroupAttributesUpdated(e), {
							type: ro.MSG_GRP_TIP,
							content: t(t({}, e.elements), {}, {
								groupProfile: e.groupProfile
							})
						}) : 5 === n ? {
						type: ro.MSG_GRP_SYS_NOTICE,
						content: t(t({}, e.elements), {}, {
							groupProfile: e.groupProfile
						})
					} : this._getModule(tl).parseElements(e.elements, e.from)
				}
			}, {
				key: "packConversationOption",
				value: function(e) {
					for (var t = new Map, n = 0; n < e.length; n++) {
						var o = e[n],
							r = o.conversationID;
						if (t.has(r)) {
							var a = t.get(r);
							a.lastMessage = o, "in" === o.flow && a.unreadCount++
						} else t.set(r, {
							conversationID: o.conversationID,
							unreadCount: "out" === o.flow ? 0 : 1,
							type: o.conversationType,
							subType: o.conversationSubType,
							lastMessage: o
						})
					}
					return v(t.values())
				}
			}, {
				key: "_updateMemberCountByGroupTips",
				value: function(e) {
					var t = e.groupProfile.groupID,
						n = e.elements.onlineMemberInfo,
						o = void 0 === n ? void 0 : n;
					if (!Lu(o)) {
						var r = o.onlineMemberNum,
							a = void 0 === r ? 0 : r,
							s = o.expireTime,
							i = void 0 === s ? this.DEFAULT_EXPIRE_TIME : s,
							u = this._onlineMemberCountMap.get(t) || {},
							c = Date.now();
						Lu(u) ? Object.assign(u, {
								lastReqTime: 0,
								lastSyncTime: 0,
								latestUpdateTime: c,
								memberCount: a,
								expireTime: i
							}) : (u.latestUpdateTime = c, u.memberCount = a), Ki.debug(""
								.concat(this._className,
								"._updateMemberCountByGroupTips info:"), u), this
							._onlineMemberCountMap.set(t, u)
					}
				}
			}, {
				key: "start",
				value: function(e) {
					if (this._pollingInstanceMap.has(e)) {
						var t = this._pollingInstanceMap.get(e);
						t.isRunning() || t.start()
					} else {
						var n = new ev({
							groupModule: this._groupModule,
							groupID: e,
							onInit: this._updateRequestData.bind(this),
							onSuccess: this._handleSuccess.bind(this),
							onFail: this._handleFailure.bind(this)
						});
						n.start(), this._pollingInstanceMap.set(e, n), Ki.log("".concat(this
							._className, ".start groupID:").concat(e))
					}
				}
			}, {
				key: "handleJoinResult",
				value: function(e) {
					var t = this;
					return this._preCheck().then((function() {
						var n = e.longPollingKey,
							o = e.group,
							r = o.groupID;
						return t._joinedGroupMap.set(r, o), t._groupModule
							.updateGroupMap([o]), t._groupModule
							.deleteUnjoinedAVChatRoom(r), t._groupModule
							.emitGroupListUpdate(!0, !1), Ji(n) ? um({
								status: L_,
								group: o
							}) : Promise.resolve()
					}))
				}
			}, {
				key: "startRunLoop",
				value: function(e) {
					var t = this;
					return this.handleJoinResult(e).then((function() {
						var n = e.longPollingKey,
							o = e.group,
							r = o.groupID;
						return t._pollingRequestInfoMap.set(r, {
							key: n,
							startSeq: 0
						}), t.start(r), t._groupModule.isLoggedIn() ? um({
							status: L_,
							group: o
						}) : um({
							status: L_
						})
					}))
				}
			}, {
				key: "_preCheck",
				value: function() {
					if (this._getModule(Xc).isUnlimitedAVChatRoom()) return Promise.resolve();
					if (!this.hasJoinedAVChatRoom()) return Promise.resolve();
					var e = m(this._joinedGroupMap.entries().next().value, 2),
						t = e[0],
						n = e[1];
					if (this._groupModule.isLoggedIn()) {
						if (!(n.selfInfo.role === ro.GRP_MBR_ROLE_OWNER || n.ownerID === this
								._groupModule.getMyUserID())) return this._groupModule
							.quitGroup(t);
						this._groupModule.deleteLocalGroupAndConversation(t)
					} else this._groupModule.deleteLocalGroupAndConversation(t);
					return this.reset(t), Promise.resolve()
				}
			}, {
				key: "joinWithoutAuth",
				value: function(e) {
					var t = this,
						n = e.groupID,
						o = "".concat(this._className, ".joinWithoutAuth"),
						r = new jd(Vg);
					return this._groupModule.request({
						protocolName: xl,
						requestData: e
					}).then((function(e) {
						var a = e.data.longPollingKey;
						if (r.setNetworkType(t._groupModule.getNetworkType())
							.setMessage("groupID:".concat(n, " longPollingKey:")
								.concat(a)).end(!0), Ji(a)) return cm(new am({
							code: Tp
								.CANNOT_JOIN_NON_AVCHATROOM_WITHOUT_LOGIN,
							message: dd
						}));
						Ki.log("".concat(o, " ok. groupID:").concat(n)), t
							._getModule(Jc).setCompleted("".concat(ro.CONV_GROUP)
								.concat(n));
						var s = new Km({
							groupID: n
						});
						return t.startRunLoop({
							group: s,
							longPollingKey: a
						}), Z_({
							status: L_
						})
					})).catch((function(e) {
						return Ki.error("".concat(o, " failed. groupID:").concat(n,
							" error:"), e), t._groupModule.probeNetwork().then((
							function(t) {
								var o = m(t, 2),
									a = o[0],
									s = o[1];
								r.setError(e, a, s).setMessage("groupID:"
									.concat(n)).end(!0)
							})), cm(e)
					})).finally((function() {
						t._groupModule.getModule(Zc).reportAtOnce()
					}))
				}
			}, {
				key: "getGroupOnlineMemberCount",
				value: function(e) {
					var t = this._onlineMemberCountMap.get(e) || {},
						n = Date.now();
					return Lu(t) || n - t.lastSyncTime > 1e3 * t.expireTime && n - t
						.latestUpdateTime > 1e4 && n - t.lastReqTime > 3e3 ? (t.lastReqTime = n,
							this._onlineMemberCountMap.set(e, t), this
							._getGroupOnlineMemberCount(e).then((function(e) {
								return Z_({
									memberCount: e.memberCount
								})
							})).catch((function(e) {
								return cm(e)
							}))) : um({
							memberCount: t.memberCount
						})
				}
			}, {
				key: "_getGroupOnlineMemberCount",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, "._getGroupOnlineMemberCount");
					return this._groupModule.request({
						protocolName: Zl,
						requestData: {
							groupID: e
						}
					}).then((function(o) {
						var r = t._onlineMemberCountMap.get(e) || {},
							a = o.data,
							s = a.onlineMemberNum,
							i = void 0 === s ? 0 : s,
							u = a.expireTime,
							c = void 0 === u ? t.DEFAULT_EXPIRE_TIME : u;
						Ki.log("".concat(n, " ok. groupID:").concat(e,
								" memberCount:").concat(i, " expireTime:")
							.concat(c));
						var l = Date.now();
						return Lu(r) && (r.lastReqTime = l), t._onlineMemberCountMap
							.set(e, Object.assign(r, {
								lastSyncTime: l,
								latestUpdateTime: l,
								memberCount: i,
								expireTime: c
							})), {
								memberCount: i
							}
					})).catch((function(o) {
						return Ki.warn("".concat(n, " failed. error:"), o), new jd(
								eh).setCode(o.code).setMessage("groupID:".concat(e,
								" error:").concat(JSON.stringify(o)))
							.setNetworkType(t._groupModule.getNetworkType()).end(),
							Promise.reject(o)
					}))
				}
			}, {
				key: "_onGroupAttributesUpdated",
				value: function(e) {
					var t = e.groupProfile.groupID,
						n = e.elements,
						o = n.operationType,
						r = n.newGroupProfile;
					if (6 === o) {
						var a = (void 0 === r ? void 0 : r).groupAttributeOption;
						Ji(a) || this._groupModule.onGroupAttributesUpdated({
							groupID: t,
							groupAttributeOption: a
						})
					}
				}
			}, {
				key: "_getModule",
				value: function(e) {
					return this._groupModule.getModule(e)
				}
			}, {
				key: "reset",
				value: function(e) {
					if (e) {
						Ki.log("".concat(this._className, ".reset groupID:").concat(e));
						var t = this._pollingInstanceMap.get(e);
						t && t.stop(), this._pollingInstanceMap.delete(e), this._joinedGroupMap
							.delete(e), this._pollingRequestInfoMap.delete(e), this
							._onlineMemberCountMap.delete(e)
					} else {
						Ki.log("".concat(this._className, ".reset all"));
						var n, o = D(this._pollingInstanceMap.values());
						try {
							for (o.s(); !(n = o.n()).done;) {
								n.value.stop()
							}
						} catch (r) {
							o.e(r)
						} finally {
							o.f()
						}
						this._pollingInstanceMap.clear(), this._joinedGroupMap.clear(), this
							._pollingRequestInfoMap.clear(), this._onlineMemberCountMap.clear()
					}
					this.sequencesLinkedList.reset(), this.messageIDLinkedList.reset(), this
						.receivedMessageCount = 0, this._reportMessageStackedCount = 0
				}
			}]), e
		}(),
		ov = 1,
		rv = 15,
		av = function() {
			function e(t) {
				o(this, e), this._groupModule = t, this._className = "GroupSystemNoticeHandler", this
					.pendencyMap = new Map
			}
			return a(e, [{
				key: "onNewGroupSystemNotice",
				value: function(e) {
					var t = e.dataList,
						n = e.isSyncingEnded,
						o = e.isInstantMessage;
					Ki.debug("".concat(this._className, ".onReceiveSystemNotice count:").concat(
						t.length));
					var r = this.newSystemNoticeStoredAndSummary({
							notifiesList: t,
							isInstantMessage: o
						}),
						a = r.eventDataList,
						s = r.result;
					a.length > 0 && (this._groupModule.getModule(Jc).onNewMessage({
						conversationOptionsList: a,
						isInstantMessage: o
					}), this._onReceivedGroupSystemNotice({
						result: s,
						isInstantMessage: o
					}));
					o ? s.length > 0 && this._groupModule.emitOuterEvent(oo.MESSAGE_RECEIVED,
						s) : !0 === n && this._clearGroupSystemNotice()
				}
			}, {
				key: "newSystemNoticeStoredAndSummary",
				value: function(e) {
					var n = e.notifiesList,
						o = e.isInstantMessage,
						r = null,
						a = n.length,
						s = 0,
						i = [],
						u = {
							conversationID: ro.CONV_SYSTEM,
							unreadCount: 0,
							type: ro.CONV_SYSTEM,
							subType: null,
							lastMessage: null
						};
					for (s = 0; s < a; s++) {
						var c = n[s];
						if (c.elements.operationType !== rv) c.currentUser = this._groupModule
							.getMyUserID(), c.conversationType = ro.CONV_SYSTEM, c
							.conversationID = ro.CONV_SYSTEM, (r = new Q_(c)).setElement({
								type: ro.MSG_GRP_SYS_NOTICE,
								content: t(t({}, c.elements), {}, {
									groupProfile: c.groupProfile
								})
							}), r.isSystemMessage = !0, (1 === r.sequence && 1 === r.random ||
								2 === r.sequence && 2 === r.random) && (r.sequence = iu(), r
								.random = iu(), r.generateMessageID(c.currentUser), Ki.log(""
									.concat(this._className,
										".newSystemNoticeStoredAndSummary sequence and random maybe duplicated, regenerate. ID:"
										).concat(r.ID))), this._groupModule.getModule(Jc)
							.pushIntoNoticeResult(i, r) && (o ? u.unreadCount++ : r.setIsRead(!
								0), u.subType = r.conversationSubType)
					}
					return u.lastMessage = i[i.length - 1], {
						eventDataList: i.length > 0 ? [u] : [],
						result: i
					}
				}
			}, {
				key: "_clearGroupSystemNotice",
				value: function() {
					var e = this;
					this.getPendencyList().then((function(t) {
						t.forEach((function(t) {
							e.pendencyMap.set("".concat(t.from, "_")
								.concat(t.groupID, "_").concat(t
								.to), t)
						}));
						var n = e._groupModule.getModule(Jc).getLocalMessageList(ro
								.CONV_SYSTEM),
							o = [];
						n.forEach((function(t) {
							var n = t.payload,
								r = n.operatorID,
								a = n.operationType,
								s = n.groupProfile;
							if (a === ov) {
								var i = "".concat(r, "_").concat(s
										.groupID, "_").concat(s.to),
									u = e.pendencyMap.get(i);
								u && ji(u.handled) && 0 !== u.handled &&
									o.push(t)
							}
						})), e.deleteGroupSystemNotice({
							messageList: o
						})
					}))
				}
			}, {
				key: "deleteGroupSystemNotice",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, ".deleteGroupSystemNotice");
					return Wi(e.messageList) && 0 !== e.messageList.length ? (Ki.log("".concat(
						n) + e.messageList.map((function(e) {
						return e.ID
					}))), this._groupModule.request({
						protocolName: Jl,
						requestData: {
							messageListToDelete: e.messageList.map((function(e) {
								return {
									from: ro.CONV_SYSTEM,
									messageSeq: e.clientSequence,
									messageRandom: e.random
								}
							}))
						}
					}).then((function() {
						Ki.log("".concat(n, " ok"));
						var o = t._groupModule.getModule(Jc);
						return e.messageList.forEach((function(e) {
							o.deleteLocalMessage(e)
						})), Z_()
					})).catch((function(e) {
						return Ki.error("".concat(n, " error:"), e), cm(e)
					}))) : um()
				}
			}, {
				key: "getPendencyList",
				value: function(e) {
					var t = this;
					return this._groupModule.request({
						protocolName: Wl,
						requestData: {
							startTime: e && e.startTime ? e.startTime : 0,
							limit: e && e.limit ? e.limit : 10,
							handleAccount: this._groupModule.getMyUserID()
						}
					}).then((function(e) {
						var n = e.data.pendencyList;
						return 0 !== e.data.nextStartTime ? t.getPendencyList({
							startTime: e.data.nextStartTime
						}).then((function(e) {
							return [].concat(v(n), v(e))
						})) : n
					}))
				}
			}, {
				key: "_onReceivedGroupSystemNotice",
				value: function(e) {
					var t = this,
						n = e.result;
					e.isInstantMessage && n.forEach((function(e) {
						switch (e.payload.operationType) {
							case 1:
								break;
							case 2:
								t._onApplyGroupRequestAgreed(e);
								break;
							case 3:
								break;
							case 4:
								t._onMemberKicked(e);
								break;
							case 5:
								t._onGroupDismissed(e);
								break;
							case 6:
								break;
							case 7:
								t._onInviteGroup(e);
								break;
							case 8:
								t._onQuitGroup(e);
								break;
							case 9:
								t._onSetManager(e);
								break;
							case 10:
								t._onDeleteManager(e)
						}
					}))
				}
			}, {
				key: "_onApplyGroupRequestAgreed",
				value: function(e) {
					var t = this,
						n = e.payload.groupProfile.groupID;
					this._groupModule.hasLocalGroup(n) || this._groupModule.getGroupProfile({
						groupID: n
					}).then((function(e) {
						var n = e.data.group;
						n && (t._groupModule.updateGroupMap([n]), t._groupModule
							.emitGroupListUpdate())
					}))
				}
			}, {
				key: "_onMemberKicked",
				value: function(e) {
					var t = e.payload.groupProfile.groupID;
					this._groupModule.hasLocalGroup(t) && this._groupModule
						.deleteLocalGroupAndConversation(t)
				}
			}, {
				key: "_onGroupDismissed",
				value: function(e) {
					var t = e.payload.groupProfile.groupID;
					this._groupModule.hasLocalGroup(t) && this._groupModule
						.deleteLocalGroupAndConversation(t);
					var n = this._groupModule._AVChatRoomHandler;
					n && n.checkJoinedAVChatRoomByID(t) && n.reset(t)
				}
			}, {
				key: "_onInviteGroup",
				value: function(e) {
					var t = this,
						n = e.payload.groupProfile.groupID;
					this._groupModule.hasLocalGroup(n) || this._groupModule.getGroupProfile({
						groupID: n
					}).then((function(e) {
						var n = e.data.group;
						n && (t._groupModule.updateGroupMap([n]), t._groupModule
							.emitGroupListUpdate())
					}))
				}
			}, {
				key: "_onQuitGroup",
				value: function(e) {
					var t = e.payload.groupProfile.groupID;
					this._groupModule.hasLocalGroup(t) && this._groupModule
						.deleteLocalGroupAndConversation(t)
				}
			}, {
				key: "_onSetManager",
				value: function(e) {
					var t = e.payload.groupProfile,
						n = t.to,
						o = t.groupID,
						r = this._groupModule.getModule(Wc).getLocalGroupMemberInfo(o, n);
					r && r.updateRole(ro.GRP_MBR_ROLE_ADMIN)
				}
			}, {
				key: "_onDeleteManager",
				value: function(e) {
					var t = e.payload.groupProfile,
						n = t.to,
						o = t.groupID,
						r = this._groupModule.getModule(Wc).getLocalGroupMemberInfo(o, n);
					r && r.updateRole(ro.GRP_MBR_ROLE_MEMBER)
				}
			}, {
				key: "reset",
				value: function() {
					this.pendencyMap.clear()
				}
			}]), e
		}(),
		sv = function(e) {
			i(r, e);
			var n = _(r);

			function r(e) {
				var t;
				return o(this, r), (t = n.call(this, e))._className = "GroupModule", t._commonGroupHandler =
					null, t._AVChatRoomHandler = null, t._groupSystemNoticeHandler = null, t
					._commonGroupHandler = new Xm(h(t)), t._groupAttributesHandler = new Zm(h(t)), t
					._AVChatRoomHandler = new nv(h(t)), t._groupTipsHandler = new Ym(h(t)), t
					._groupSystemNoticeHandler = new av(h(t)), t.groupMap = new Map, t._unjoinedAVChatRoomList =
					new Map, t
			}
			return a(r, [{
				key: "onCheckTimer",
				value: function(e) {
					this.isLoggedIn() && (this._commonGroupHandler.onCheckTimer(e), this
						._groupTipsHandler.onCheckTimer(e))
				}
			}, {
				key: "guardForAVChatRoom",
				value: function(e) {
					var t = this;
					if (e.conversationType === ro.CONV_GROUP) {
						var n = e.to;
						return this.hasLocalGroup(n) ? um() : this.getGroupProfile({
							groupID: n
						}).then((function(o) {
							var r = o.data.group.type;
							if (Ki.log("".concat(t._className,
									".guardForAVChatRoom. groupID:").concat(n,
									" type:").concat(r)), r === ro.GRP_AVCHATROOM) {
								var a = "userId:".concat(e.from, " 未加入群 groupID:")
									.concat(n,
										"。发消息前先使用 joinGroup 接口申请加群，详细请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#joinGroup"
										);
								return Ki.warn("".concat(t._className,
									".guardForAVChatRoom sendMessage not allowed. "
									).concat(a)), cm(new am({
									code: Tp.MESSAGE_SEND_FAIL,
									message: a,
									data: {
										message: e
									}
								}))
							}
							return um()
						}))
					}
					return um()
				}
			}, {
				key: "checkJoinedAVChatRoomByID",
				value: function(e) {
					return !!this._AVChatRoomHandler && this._AVChatRoomHandler
						.checkJoinedAVChatRoomByID(e)
				}
			}, {
				key: "onNewGroupMessage",
				value: function(e) {
					this._commonGroupHandler && this._commonGroupHandler.onNewGroupMessage(e)
				}
			}, {
				key: "updateNextMessageSeq",
				value: function(e) {
					var t = this;
					Wi(e) && e.forEach((function(e) {
						var n = e.conversationID.replace(ro.CONV_GROUP, "");
						t.groupMap.has(n) && (t.groupMap.get(n).nextMessageSeq = e
							.lastMessage.sequence + 1)
					}))
				}
			}, {
				key: "onNewGroupTips",
				value: function(e) {
					this._groupTipsHandler && this._groupTipsHandler.onNewGroupTips(e)
				}
			}, {
				key: "onGroupMessageRevoked",
				value: function(e) {
					this._commonGroupHandler && this._commonGroupHandler.onGroupMessageRevoked(
						e)
				}
			}, {
				key: "onNewGroupSystemNotice",
				value: function(e) {
					this._groupSystemNoticeHandler && this._groupSystemNoticeHandler
						.onNewGroupSystemNotice(e)
				}
			}, {
				key: "onGroupMessageReadNotice",
				value: function(e) {
					var t = this;
					e.dataList.forEach((function(e) {
						var n = e.elements.groupMessageReadNotice;
						if (!Ji(n)) {
							var o = t.getModule(Jc);
							n.forEach((function(e) {
								var n = e.groupID,
									r = e.lastMessageSeq;
								Ki.debug("".concat(t._className,
									".onGroupMessageReadNotice groupID:"
									).concat(n,
									" lastMessageSeq:").concat(
									r));
								var a = "".concat(ro.CONV_GROUP).concat(
									n);
								o.updateIsReadAfterReadReport({
									conversationID: a,
									lastMessageSeq: r
								}), o.updateUnreadCount(a)
							}))
						}
					}))
				}
			}, {
				key: "deleteGroupSystemNotice",
				value: function(e) {
					this._groupSystemNoticeHandler && this._groupSystemNoticeHandler
						.deleteGroupSystemNotice(e)
				}
			}, {
				key: "initGroupMap",
				value: function(e) {
					this.groupMap.set(e.groupID, new Km(e))
				}
			}, {
				key: "deleteGroup",
				value: function(e) {
					this.groupMap.delete(e)
				}
			}, {
				key: "updateGroupMap",
				value: function(e) {
					var t = this;
					e.forEach((function(e) {
						t.groupMap.has(e.groupID) ? t.groupMap.get(e.groupID)
							.updateGroup(e) : t.groupMap.set(e.groupID, new Km(e))
					})), this._setStorageGroupList()
				}
			}, {
				key: "getStorageGroupList",
				value: function() {
					return this.getModule(Qc).getItem("groupMap")
				}
			}, {
				key: "_setStorageGroupList",
				value: function() {
					var e = this.getLocalGroupList().filter((function(e) {
						var t = e.type;
						return !mu(t)
					})).slice(0, 20).map((function(e) {
						return {
							groupID: e.groupID,
							name: e.name,
							avatar: e.avatar,
							type: e.type
						}
					}));
					this.getModule(Qc).setItem("groupMap", e)
				}
			}, {
				key: "getGroupMap",
				value: function() {
					return this.groupMap
				}
			}, {
				key: "getLocalGroupList",
				value: function() {
					return v(this.groupMap.values())
				}
			}, {
				key: "getLocalGroupProfile",
				value: function(e) {
					return this.groupMap.get(e)
				}
			}, {
				key: "sortLocalGroupList",
				value: function() {
					var e = v(this.groupMap).filter((function(e) {
						var t = m(e, 2);
						t[0];
						return !Lu(t[1].lastMessage)
					}));
					e.sort((function(e, t) {
						return t[1].lastMessage.lastTime - e[1].lastMessage.lastTime
					})), this.groupMap = new Map(v(e))
				}
			}, {
				key: "updateGroupLastMessage",
				value: function(e) {
					this._commonGroupHandler && this._commonGroupHandler
						.handleUpdateGroupLastMessage(e)
				}
			}, {
				key: "emitGroupListUpdate",
				value: function() {
					var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
						n = this.getLocalGroupList();
					if (e && this.emitOuterEvent(oo.GROUP_LIST_UPDATED, n), t) {
						var o = JSON.parse(JSON.stringify(n)),
							r = this.getModule(Jc);
						r.updateConversationGroupProfile(o)
					}
				}
			}, {
				key: "getMyNameCardByGroupID",
				value: function(e) {
					var t = this.getLocalGroupProfile(e);
					return t ? t.selfInfo.nameCard : ""
				}
			}, {
				key: "getGroupList",
				value: function(e) {
					return this._commonGroupHandler ? this._commonGroupHandler.getGroupList(e) :
						um()
				}
			}, {
				key: "getGroupProfile",
				value: function(e) {
					var t = this,
						n = new jd(Pg),
						o = "".concat(this._className, ".getGroupProfile"),
						r = e.groupID,
						a = e.groupCustomFieldFilter;
					Ki.log("".concat(o, " groupID:").concat(r));
					var s = {
						groupIDList: [r],
						responseFilter: {
							groupBaseInfoFilter: ["Type", "Name", "Introduction",
								"Notification", "FaceUrl", "Owner_Account",
								"CreateTime", "InfoSeq", "LastInfoTime", "LastMsgTime",
								"MemberNum", "MaxMemberNum", "ApplyJoinOption",
								"NextMsgSeq", "ShutUpAllMember"
							],
							groupCustomFieldFilter: a
						}
					};
					return this.getGroupProfileAdvance(s).then((function(e) {
						var a, s = e.data,
							i = s.successGroupList,
							u = s.failureGroupList;
						return Ki.log("".concat(o, " ok")), u.length > 0 ? cm(u[
							0]) : (mu(i[0].type) && !t.hasLocalGroup(r) ? a =
								new Km(i[0]) : (t.updateGroupMap(i), a = t
									.getLocalGroupProfile(r)), n.setNetworkType(t
									.getNetworkType()).setMessage("groupID:".concat(
									r, " type:").concat(a.type,
									" muteAllMembers:").concat(a.muteAllMembers,
									" ownerID:").concat(a.ownerID)).end(), a && a
								.selfInfo && !a.selfInfo.nameCard ? t
								.updateSelfInfo(a).then((function(e) {
									return Z_({
										group: e
									})
								})) : Z_({
									group: a
								}))
					})).catch((function(r) {
						return t.probeNetwork().then((function(t) {
							var o = m(t, 2),
								a = o[0],
								s = o[1];
							n.setError(r, a, s).setMessage("groupID:"
								.concat(e.groupID)).end()
						})), Ki.error("".concat(o, " failed. error:"), r), cm(r)
					}))
				}
			}, {
				key: "getGroupProfileAdvance",
				value: function(e) {
					var t = "".concat(this._className, ".getGroupProfileAdvance");
					return Wi(e.groupIDList) && e.groupIDList.length > 50 && (Ki.warn("".concat(
						t, " 获取群资料的数量不能超过50个")), e.groupIDList.length = 50), Ki.log(""
						.concat(t, " groupIDList:").concat(e.groupIDList)), this.request({
						protocolName: Pl,
						requestData: e
					}).then((function(e) {
						Ki.log("".concat(t, " ok"));
						var n = e.data.groups,
							o = n.filter((function(e) {
								return Ji(e.errorCode) || 0 === e.errorCode
							})),
							r = n.filter((function(e) {
								return e.errorCode && 0 !== e.errorCode
							})).map((function(e) {
								return new am({
									code: e.errorCode,
									message: e.errorInfo,
									data: {
										groupID: e.groupID
									}
								})
							}));
						return Z_({
							successGroupList: o,
							failureGroupList: r
						})
					})).catch((function(e) {
						return Ki.error("".concat(t, " failed. error:"), e), cm(e)
					}))
				}
			}, {
				key: "updateSelfInfo",
				value: function(e) {
					var t = "".concat(this._className, ".updateSelfInfo"),
						n = e.groupID;
					return Ki.log("".concat(t, " groupID:").concat(n)), this.getModule(Wc)
						.getGroupMemberProfile({
							groupID: n,
							userIDList: [this.getMyUserID()]
						}).then((function(n) {
							var o = n.data.memberList;
							return Ki.log("".concat(t, " ok")), e && 0 !== o.length && e
								.updateSelfInfo(o[0]), e
						}))
				}
			}, {
				key: "createGroup",
				value: function(e) {
					var n = this,
						o = "".concat(this._className, ".createGroup");
					if (!["Public", "Private", "ChatRoom", "AVChatRoom"].includes(e.type)) {
						var r = new am({
							code: Tp.ILLEGAL_GROUP_TYPE,
							message: rd
						});
						return cm(r)
					}
					mu(e.type) && !Ji(e.memberList) && e.memberList.length > 0 && (Ki.warn(""
							.concat(o, " 创建 AVChatRoom 时不能添加群成员，自动忽略该字段")), e.memberList =
						void 0), _u(e.type) || Ji(e.joinOption) || (Ki.warn("".concat(o,
							" 创建 Work/Meeting/AVChatRoom 群时不能设置字段 joinOption，自动忽略该字段")), e
						.joinOption = void 0);
					var a = new jd(Dg);
					Ki.log("".concat(o, " options:"), e);
					var s = [];
					return this.request({
						protocolName: Gl,
						requestData: t(t({}, e), {}, {
							ownerID: this.getMyUserID(),
							webPushFlag: 1
						})
					}).then((function(r) {
						var i = r.data,
							u = i.groupID,
							c = i.overLimitUserIDList,
							l = void 0 === c ? [] : c;
						if (s = l, a.setNetworkType(n.getNetworkType()).setMessage(
								"groupType:".concat(e.type, " groupID:").concat(u,
									" overLimitUserIDList=").concat(l)).end(), Ki
							.log("".concat(o, " ok groupID:").concat(u,
								" overLimitUserIDList:"), l), e.type === ro
							.GRP_AVCHATROOM) return n.getGroupProfile({
							groupID: u
						});
						Lu(e.memberList) || Lu(l) || (e.memberList = e.memberList
							.filter((function(e) {
								return -1 === l.indexOf(e.userID)
							}))), n.updateGroupMap([t(t({}, e), {}, {
							groupID: u
						})]);
						var p = n.getModule(Hc),
							d = p.createCustomMessage({
								to: u,
								conversationType: ro.CONV_GROUP,
								payload: {
									data: "group_create",
									extension: "".concat(n.getMyUserID(),
										"创建群组")
								}
							});
						return p.sendMessageInstance(d), n.emitGroupListUpdate(), n
							.getGroupProfile({
								groupID: u
							})
					})).then((function(e) {
						var t = e.data.group,
							n = t.selfInfo,
							o = n.nameCard,
							r = n.joinTime;
						return t.updateSelfInfo({
							nameCard: o,
							joinTime: r,
							messageRemindType: ro.MSG_REMIND_ACPT_AND_NOTE,
							role: ro.GRP_MBR_ROLE_OWNER
						}), Z_({
							group: t,
							overLimitUserIDList: s
						})
					})).catch((function(t) {
						return a.setMessage("groupType:".concat(e.type)), n
							.probeNetwork().then((function(e) {
								var n = m(e, 2),
									o = n[0],
									r = n[1];
								a.setError(t, o, r).end()
							})), Ki.error("".concat(o, " failed. error:"), t), cm(t)
					}))
				}
			}, {
				key: "dismissGroup",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, ".dismissGroup");
					if (this.hasLocalGroup(e) && this.getLocalGroupProfile(e).type === ro
						.GRP_WORK) return cm(new am({
						code: Tp.CANNOT_DISMISS_WORK,
						message: ud
					}));
					var o = new jd(Rg);
					return o.setMessage("groupID:".concat(e)), Ki.log("".concat(n, " groupID:")
						.concat(e)), this.request({
						protocolName: Ul,
						requestData: {
							groupID: e
						}
					}).then((function() {
						return o.setNetworkType(t.getNetworkType()).end(), Ki.log(""
								.concat(n, " ok")), t
							.deleteLocalGroupAndConversation(e), t
							.checkJoinedAVChatRoomByID(e) && t._AVChatRoomHandler
							.reset(e), Z_({
								groupID: e
							})
					})).catch((function(e) {
						return t.probeNetwork().then((function(t) {
							var n = m(t, 2),
								r = n[0],
								a = n[1];
							o.setError(e, r, a).end()
						})), Ki.error("".concat(n, " failed. error:"), e), cm(e)
					}))
				}
			}, {
				key: "updateGroupProfile",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, ".updateGroupProfile");
					!this.hasLocalGroup(e.groupID) || _u(this.getLocalGroupProfile(e.groupID)
						.type) || Ji(e.joinOption) || (Ki.warn("".concat(n,
							" Work/Meeting/AVChatRoom 群不能设置字段 joinOption，自动忽略该字段")), e
						.joinOption = void 0), Ji(e.muteAllMembers) || (e.muteAllMembers ? e
						.muteAllMembers = "On" : e.muteAllMembers = "Off");
					var o = new jd(bg);
					return o.setMessage(JSON.stringify(e)), Ki.log("".concat(n, " groupID:")
						.concat(e.groupID)), this.request({
						protocolName: Fl,
						requestData: e
					}).then((function() {
						(o.setNetworkType(t.getNetworkType()).end(), Ki.log(""
							.concat(n, " ok")), t.hasLocalGroup(e.groupID)) && (t
							.groupMap.get(e.groupID).updateGroup(e), t
							._setStorageGroupList());
						return Z_({
							group: t.groupMap.get(e.groupID)
						})
					})).catch((function(e) {
						return t.probeNetwork().then((function(t) {
							var n = m(t, 2),
								r = n[0],
								a = n[1];
							o.setError(e, r, a).end()
						})), Ki.log("".concat(n, " failed. error:"), e), cm(e)
					}))
				}
			}, {
				key: "joinGroup",
				value: function(e) {
					var t = this,
						n = e.groupID,
						o = e.type,
						r = "".concat(this._className, ".joinGroup");
					if (o === ro.GRP_WORK) {
						var a = new am({
							code: Tp.CANNOT_JOIN_WORK,
							message: ad
						});
						return cm(a)
					}
					if (this.deleteUnjoinedAVChatRoom(n), this.hasLocalGroup(n)) {
						if (!this.isLoggedIn()) return um({
							status: ro.JOIN_STATUS_ALREADY_IN_GROUP
						});
						var s = new jd(Eg);
						return this.getGroupProfile({
							groupID: n
						}).then((function() {
							return s.setNetworkType(t.getNetworkType()).setMessage(
								"groupID:".concat(n, " joinedStatus:").concat(ro
									.JOIN_STATUS_ALREADY_IN_GROUP)).end(), um({
								status: ro.JOIN_STATUS_ALREADY_IN_GROUP
							})
						})).catch((function(o) {
							return s.setNetworkType(t.getNetworkType()).setMessage(
									"groupID:".concat(n, " unjoined")).end(), Ki
								.warn("".concat(r, " ").concat(n,
									" was unjoined, now join!")), t.groupMap.delete(
									n), t.applyJoinGroup(e)
						}))
					}
					return Ki.log("".concat(r, " groupID:").concat(n)), this.isLoggedIn() ? this
						.applyJoinGroup(e) : this._AVChatRoomHandler.joinWithoutAuth(e)
				}
			}, {
				key: "applyJoinGroup",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, ".applyJoinGroup"),
						o = e.groupID,
						r = new jd(Eg);
					return this.request({
						protocolName: ql,
						requestData: e
					}).then((function(e) {
						var a = e.data,
							s = a.joinedStatus,
							i = a.longPollingKey,
							u = a.avChatRoomFlag,
							c = a.avChatRoomKey,
							l = "groupID:".concat(o, " joinedStatus:").concat(s,
								" longPollingKey:").concat(i, " avChatRoomFlag:")
							.concat(u);
						switch (r.setNetworkType(t.getNetworkType()).setMessage(""
							.concat(l)).end(), Ki.log("".concat(n, " ok. ")
							.concat(l)), s) {
							case R_:
								return Z_({
									status: R_
								});
							case L_:
								return t.getGroupProfile({
									groupID: o
								}).then((function(e) {
									var n = e.data.group,
										r = {
											status: L_,
											group: n
										};
									return 1 === u ? (t.getModule(Jc)
										.setCompleted("".concat(ro
											.CONV_GROUP).concat(
											o)), t
										._groupAttributesHandler
										.initGroupAttributesCache({
											groupID: o,
											avChatRoomKey: c
										}), Ji(i) ? t
										._AVChatRoomHandler
										.handleJoinResult({
											group: n
										}) : t._AVChatRoomHandler
										.startRunLoop({
											longPollingKey: i,
											group: n
										})) : (t
										.emitGroupListUpdate(!0, !
										1), Z_(r))
								}));
							default:
								var p = new am({
									code: Tp.JOIN_GROUP_FAIL,
									message: ld
								});
								return Ki.error("".concat(n, " error:"), p), cm(p)
						}
					})).catch((function(o) {
						return r.setMessage("groupID:".concat(e.groupID)), t
							.probeNetwork().then((function(e) {
								var t = m(e, 2),
									n = t[0],
									a = t[1];
								r.setError(o, n, a).end()
							})), Ki.error("".concat(n, " error:"), o), cm(o)
					}))
				}
			}, {
				key: "quitGroup",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, ".quitGroup");
					Ki.log("".concat(n, " groupID:").concat(e));
					var o = this.checkJoinedAVChatRoomByID(e);
					if (!o && !this.hasLocalGroup(e)) {
						var r = new am({
							code: Tp.MEMBER_NOT_IN_GROUP,
							message: cd
						});
						return cm(r)
					}
					if (o && !this.isLoggedIn()) return Ki.log("".concat(n,
							" anonymously ok. groupID:").concat(e)), this
						.deleteLocalGroupAndConversation(e), this._AVChatRoomHandler.reset(
							e), um({
							groupID: e
						});
					var a = new jd(Cg);
					return a.setMessage("groupID:".concat(e)), this.request({
						protocolName: Vl,
						requestData: {
							groupID: e
						}
					}).then((function() {
						return a.setNetworkType(t.getNetworkType()).end(), Ki.log(""
							.concat(n, " ok")), o && t._AVChatRoomHandler.reset(
							e), t.deleteLocalGroupAndConversation(e), Z_({
							groupID: e
						})
					})).catch((function(e) {
						return t.probeNetwork().then((function(t) {
							var n = m(t, 2),
								o = n[0],
								r = n[1];
							a.setError(e, o, r).end()
						})), Ki.error("".concat(n, " failed. error:"), e), cm(e)
					}))
				}
			}, {
				key: "searchGroupByID",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, ".searchGroupByID"),
						o = {
							groupIDList: [e]
						},
						r = new jd(Ag);
					return r.setMessage("groupID:".concat(e)), Ki.log("".concat(n, " groupID:")
						.concat(e)), this.request({
						protocolName: Kl,
						requestData: o
					}).then((function(e) {
						var o = e.data.groupProfile;
						if (0 !== o[0].errorCode) throw new am({
							code: o[0].errorCode,
							message: o[0].errorInfo
						});
						return r.setNetworkType(t.getNetworkType()).end(), Ki.log(""
							.concat(n, " ok")), Z_({
							group: new Km(o[0])
						})
					})).catch((function(e) {
						return t.probeNetwork().then((function(t) {
							var n = m(t, 2),
								o = n[0],
								a = n[1];
							r.setError(e, o, a).end()
						})), Ki.warn("".concat(n, " failed. error:"), e), cm(e)
					}))
				}
			}, {
				key: "changeGroupOwner",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, ".changeGroupOwner");
					if (this.hasLocalGroup(e.groupID) && this.getLocalGroupProfile(e.groupID)
						.type === ro.GRP_AVCHATROOM) return cm(new am({
						code: Tp.CANNOT_CHANGE_OWNER_IN_AVCHATROOM,
						message: sd
					}));
					if (e.newOwnerID === this.getMyUserID()) return cm(new am({
						code: Tp.CANNOT_CHANGE_OWNER_TO_SELF,
						message: id
					}));
					var o = new jd(kg);
					return o.setMessage("groupID:".concat(e.groupID, " newOwnerID:").concat(e
							.newOwnerID)), Ki.log("".concat(n, " groupID:").concat(e.groupID)),
						this.request({
							protocolName: Bl,
							requestData: e
						}).then((function() {
							o.setNetworkType(t.getNetworkType()).end(), Ki.log(""
								.concat(n, " ok"));
							var r = e.groupID,
								a = e.newOwnerID;
							t.groupMap.get(r).ownerID = a;
							var s = t.getModule(Wc).getLocalGroupMemberList(r);
							if (s instanceof Map) {
								var i = s.get(t.getMyUserID());
								Ji(i) || (i.updateRole("Member"), t.groupMap.get(r)
									.selfInfo.role = "Member");
								var u = s.get(a);
								Ji(u) || u.updateRole("Owner")
							}
							return t.emitGroupListUpdate(!0, !1), Z_({
								group: t.groupMap.get(r)
							})
						})).catch((function(e) {
							return t.probeNetwork().then((function(t) {
								var n = m(t, 2),
									r = n[0],
									a = n[1];
								o.setError(e, r, a).end()
							})), Ki.error("".concat(n, " failed. error:"), e), cm(e)
						}))
				}
			}, {
				key: "handleGroupApplication",
				value: function(e) {
					var n = this,
						o = "".concat(this._className, ".handleGroupApplication"),
						r = e.message.payload,
						a = r.groupProfile.groupID,
						s = r.authentication,
						i = r.messageKey,
						u = r.operatorID,
						c = new jd(Ng);
					return c.setMessage("groupID:".concat(a)), Ki.log("".concat(o, " groupID:")
						.concat(a)), this.request({
						protocolName: Hl,
						requestData: t(t({}, e), {}, {
							applicant: u,
							groupID: a,
							authentication: s,
							messageKey: i
						})
					}).then((function() {
						return c.setNetworkType(n.getNetworkType()).end(), Ki.log(""
								.concat(o, " ok")), n._groupSystemNoticeHandler
							.deleteGroupSystemNotice({
								messageList: [e.message]
							}), Z_({
								group: n.getLocalGroupProfile(a)
							})
					})).catch((function(e) {
						return n.probeNetwork().then((function(t) {
							var n = m(t, 2),
								o = n[0],
								r = n[1];
							c.setError(e, o, r).end()
						})), Ki.error("".concat(o, " failed. error"), e), cm(e)
					}))
				}
			}, {
				key: "handleGroupInvitation",
				value: function(e) {
					var n = this,
						o = "".concat(this._className, ".handleGroupInvitation"),
						r = e.message.payload,
						a = r.groupProfile.groupID,
						s = r.authentication,
						i = r.messageKey,
						u = r.operatorID,
						c = e.handleAction,
						l = new jd(Og);
					return l.setMessage("groupID:".concat(a, " inviter:").concat(u,
							" handleAction:").concat(c)), Ki.log("".concat(o, " groupID:")
							.concat(a, " inviter:").concat(u, " handleAction:").concat(c)), this
						.request({
							protocolName: jl,
							requestData: t(t({}, e), {}, {
								inviter: u,
								groupID: a,
								authentication: s,
								messageKey: i
							})
						}).then((function() {
							return l.setNetworkType(n.getNetworkType()).end(), Ki.log(""
									.concat(o, " ok")), n._groupSystemNoticeHandler
								.deleteGroupSystemNotice({
									messageList: [e.message]
								}), Z_({
									group: n.getLocalGroupProfile(a)
								})
						})).catch((function(e) {
							return n.probeNetwork().then((function(t) {
								var n = m(t, 2),
									o = n[0],
									r = n[1];
								l.setError(e, o, r).end()
							})), Ki.error("".concat(o, " failed. error"), e), cm(e)
						}))
				}
			}, {
				key: "getGroupOnlineMemberCount",
				value: function(e) {
					return this._AVChatRoomHandler ? this._AVChatRoomHandler
						.checkJoinedAVChatRoomByID(e) ? this._AVChatRoomHandler
						.getGroupOnlineMemberCount(e) : um({
							memberCount: 0
						}) : cm({
							code: Tp.CANNOT_FIND_MODULE,
							message: Nd
						})
				}
			}, {
				key: "hasLocalGroup",
				value: function(e) {
					return this.groupMap.has(e)
				}
			}, {
				key: "deleteLocalGroupAndConversation",
				value: function(e) {
					this._deleteLocalGroup(e), this.getModule(Jc).deleteLocalConversation(
						"GROUP".concat(e)), this.emitGroupListUpdate(!0, !1)
				}
			}, {
				key: "_deleteLocalGroup",
				value: function(e) {
					this.groupMap.delete(e), this.getModule(Wc).deleteGroupMemberList(e), this
						._setStorageGroupList()
				}
			}, {
				key: "sendMessage",
				value: function(e, t) {
					var n = this.createGroupMessagePack(e, t);
					return this.request(n)
				}
			}, {
				key: "createGroupMessagePack",
				value: function(e, t) {
					var n = null;
					t && t.offlinePushInfo && (n = t.offlinePushInfo);
					var o = "";
					$i(e.cloudCustomData) && e.cloudCustomData.length > 0 && (o = e
						.cloudCustomData);
					var r = e.getGroupAtInfoList();
					return {
						protocolName: vl,
						tjgID: this.generateTjgID(e),
						requestData: {
							fromAccount: this.getMyUserID(),
							groupID: e.to,
							msgBody: e.getElements(),
							cloudCustomData: o,
							random: e.random,
							priority: e.priority,
							clientSequence: e.clientSequence,
							groupAtInfo: e.type !== ro.MSG_TEXT || Lu(r) ? void 0 : r,
							onlineOnlyFlag: this.isOnlineMessage(e, t) ? 1 : 0,
							offlinePushInfo: n ? {
								pushFlag: !0 === n.disablePush ? 1 : 0,
								title: n.title || "",
								desc: n.description || "",
								ext: n.extension || "",
								apnsInfo: {
									badgeMode: !0 === n.ignoreIOSBadge ? 1 : 0
								},
								androidInfo: {
									OPPOChannelID: n.androidOPPOChannelID || ""
								}
							} : void 0
						}
					}
				}
			}, {
				key: "revokeMessage",
				value: function(e) {
					return this.request({
						protocolName: $l,
						requestData: {
							to: e.to,
							msgSeqList: [{
								msgSeq: e.sequence
							}]
						}
					})
				}
			}, {
				key: "deleteMessage",
				value: function(e) {
					var t = e.to,
						n = e.keyList;
					return Ki.log("".concat(this._className, ".deleteMessage groupID:").concat(
						t, " count:").concat(n.length)), this.request({
						protocolName: ep,
						requestData: {
							groupID: t,
							deleter: this.getMyUserID(),
							keyList: n
						}
					})
				}
			}, {
				key: "getRoamingMessage",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, ".getRoamingMessage"),
						o = new jd(ig),
						r = 0;
					return this._computeLastSequence(e).then((function(n) {
						return r = n, Ki.log("".concat(t._className,
							".getRoamingMessage groupID:").concat(e.groupID,
							" lastSequence:").concat(r)), t.request({
							protocolName: zl,
							requestData: {
								groupID: e.groupID,
								count: 21,
								sequence: r
							}
						})
					})).then((function(a) {
						var s = a.data,
							i = s.messageList,
							u = s.complete;
						Ji(i) ? Ki.log("".concat(n, " ok. complete:").concat(u,
							" but messageList is undefined!")) : Ki.log(""
							.concat(n, " ok. complete:").concat(u, " count:")
							.concat(i.length)), o.setNetworkType(t
							.getNetworkType()).setMessage("groupID:".concat(e
							.groupID, " lastSequence:").concat(r,
							" complete:").concat(u, " count:").concat(i ? i
							.length : "undefined")).end();
						var c = "GROUP".concat(e.groupID),
							l = t.getModule(Jc);
						if (2 === u || Lu(i)) return l.setCompleted(c), [];
						var p = l.storeRoamingMessage(i, c);
						return l.updateIsRead(c), l.patchConversationLastMessage(c),
							p
					})).catch((function(a) {
						return t.probeNetwork().then((function(t) {
							var n = m(t, 2),
								s = n[0],
								i = n[1];
							o.setError(a, s, i).setMessage("groupID:"
								.concat(e.groupID, " lastSequence:")
								.concat(r)).end()
						})), Ki.warn("".concat(n, " failed. error:"), a), cm(a)
					}))
				}
			}, {
				key: "setMessageRead",
				value: function(e) {
					var t = this,
						n = e.conversationID,
						o = e.lastMessageSeq,
						r = "".concat(this._className, ".setMessageRead");
					Ki.log("".concat(r, " conversationID:").concat(n, " lastMessageSeq:")
						.concat(o)), ji(o) || Ki.warn("".concat(r,
						" 请勿修改 Conversation.lastMessage.lastSequence，否则可能会导致已读上报结果不准确"));
					var a = new jd(pg);
					return a.setMessage("".concat(n, "-").concat(o)), this.request({
						protocolName: Yl,
						requestData: {
							groupID: n.replace("GROUP", ""),
							messageReadSeq: o
						}
					}).then((function() {
						a.setNetworkType(t.getNetworkType()).end(), Ki.log(""
							.concat(r, " ok."));
						var e = t.getModule(Jc);
						return e.updateIsReadAfterReadReport({
							conversationID: n,
							lastMessageSeq: o
						}), e.updateUnreadCount(n), Z_()
					})).catch((function(e) {
						return t.probeNetwork().then((function(t) {
							var n = m(t, 2),
								o = n[0],
								r = n[1];
							a.setError(e, o, r).end()
						})), Ki.log("".concat(r, " failed. error:"), e), cm(e)
					}))
				}
			}, {
				key: "_computeLastSequence",
				value: function(e) {
					return e.sequence > 0 ? Promise.resolve(e.sequence) : this
						.getGroupLastSequence(e.groupID)
				}
			}, {
				key: "getGroupLastSequence",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, ".getGroupLastSequence"),
						o = new jd(Ug),
						r = 0,
						a = "";
					if (this.hasLocalGroup(e)) {
						var s = this.getLocalGroupProfile(e),
							i = s.lastMessage;
						if (i.lastSequence > 0 && !1 === i.onlineOnlyFlag) return r = i
							.lastSequence, a = "got lastSequence:".concat(r,
								" from local group profile[lastMessage.lastSequence]. groupID:"
								).concat(e), Ki.log("".concat(n, " ").concat(a)), o
							.setNetworkType(this.getNetworkType()).setMessage("".concat(a))
							.end(), Promise.resolve(r);
						if (s.nextMessageSeq > 1) return r = s.nextMessageSeq - 1, a =
							"got lastSequence:".concat(r,
								" from local group profile[nextMessageSeq]. groupID:")
							.concat(e), Ki.log("".concat(n, " ").concat(a)), o
							.setNetworkType(this.getNetworkType()).setMessage("".concat(a))
							.end(), Promise.resolve(r)
					}
					var u = "GROUP".concat(e),
						c = this.getModule(Jc).getLocalConversation(u);
					if (c && c.lastMessage.lastSequence && !1 === c.lastMessage.onlineOnlyFlag)
						return r = c.lastMessage.lastSequence, a = "got lastSequence:".concat(r,
								" from local conversation profile[lastMessage.lastSequence]. groupID:"
								).concat(e), Ki.log("".concat(n, " ").concat(a)), o
							.setNetworkType(this.getNetworkType()).setMessage("".concat(a))
							.end(), Promise.resolve(r);
					var l = {
						groupIDList: [e],
						responseFilter: {
							groupBaseInfoFilter: ["NextMsgSeq"]
						}
					};
					return this.getGroupProfileAdvance(l).then((function(s) {
						var i = s.data.successGroupList;
						return Lu(i) ? Ki.log("".concat(n,
								" successGroupList is empty. groupID:").concat(
								e)) : (r = i[0].nextMessageSeq - 1, a =
								"got lastSequence:".concat(r,
									" from getGroupProfileAdvance. groupID:")
								.concat(e), Ki.log("".concat(n, " ").concat(a))), o
							.setNetworkType(t.getNetworkType()).setMessage(""
								.concat(a)).end(), r
					})).catch((function(r) {
						return t.probeNetwork().then((function(t) {
							var n = m(t, 2),
								a = n[0],
								s = n[1];
							o.setError(r, a, s).setMessage(
								"get lastSequence failed from getGroupProfileAdvance. groupID:"
								.concat(e)).end()
						})), Ki.warn("".concat(n, " failed. error:"), r), cm(r)
					}))
				}
			}, {
				key: "isMessageFromAVChatroom",
				value: function(e) {
					return !!this._AVChatRoomHandler && this._AVChatRoomHandler
						.checkJoinedAVChatRoomByID(e)
				}
			}, {
				key: "hasJoinedAVChatRoom",
				value: function() {
					return this._AVChatRoomHandler ? this._AVChatRoomHandler
						.hasJoinedAVChatRoom() : 0
				}
			}, {
				key: "getJoinedAVChatRoom",
				value: function() {
					return this._AVChatRoomHandler ? this._AVChatRoomHandler
						.getJoinedAVChatRoom() : []
				}
			}, {
				key: "isOnlineMessage",
				value: function(e, t) {
					return !(!this._canIUseOnlineOnlyFlag(e) || !t || !0 !== t.onlineUserOnly)
				}
			}, {
				key: "_canIUseOnlineOnlyFlag",
				value: function(e) {
					var t = this.getJoinedAVChatRoom();
					return !t || !t.includes(e.to) || e.conversationType !== ro.CONV_GROUP
				}
			}, {
				key: "deleteLocalGroupMembers",
				value: function(e, t) {
					this.getModule(Wc).deleteLocalGroupMembers(e, t)
				}
			}, {
				key: "onAVChatRoomMessage",
				value: function(e) {
					this._AVChatRoomHandler && this._AVChatRoomHandler.onMessage(e)
				}
			}, {
				key: "getGroupSimplifiedInfo",
				value: function(e) {
					var t = this,
						n = new jd(xg),
						o = {
							groupIDList: [e],
							responseFilter: {
								groupBaseInfoFilter: ["Type", "Name"]
							}
						};
					return this.getGroupProfileAdvance(o).then((function(o) {
						var r = o.data.successGroupList;
						return n.setNetworkType(t.getNetworkType()).setMessage(
								"groupID:".concat(e, " type:").concat(r[0].type))
							.end(), r[0]
					})).catch((function(o) {
						t.probeNetwork().then((function(t) {
							var r = m(t, 2),
								a = r[0],
								s = r[1];
							n.setError(o, a, s).setMessage("groupID:"
								.concat(e)).end()
						}))
					}))
				}
			}, {
				key: "setUnjoinedAVChatRoom",
				value: function(e) {
					this._unjoinedAVChatRoomList.set(e, 1)
				}
			}, {
				key: "deleteUnjoinedAVChatRoom",
				value: function(e) {
					this._unjoinedAVChatRoomList.has(e) && this._unjoinedAVChatRoomList.delete(
						e)
				}
			}, {
				key: "isUnjoinedAVChatRoom",
				value: function(e) {
					return this._unjoinedAVChatRoomList.has(e)
				}
			}, {
				key: "onGroupAttributesUpdated",
				value: function(e) {
					this._groupAttributesHandler && this._groupAttributesHandler
						.onGroupAttributesUpdated(e)
				}
			}, {
				key: "updateLocalMainSequenceOnReconnected",
				value: function() {
					this._groupAttributesHandler && this._groupAttributesHandler
						.updateLocalMainSequenceOnReconnected()
				}
			}, {
				key: "initGroupAttributes",
				value: function(e) {
					return this._groupAttributesHandler.initGroupAttributes(e)
				}
			}, {
				key: "setGroupAttributes",
				value: function(e) {
					return this._groupAttributesHandler.setGroupAttributes(e)
				}
			}, {
				key: "deleteGroupAttributes",
				value: function(e) {
					return this._groupAttributesHandler.deleteGroupAttributes(e)
				}
			}, {
				key: "getGroupAttributes",
				value: function(e) {
					return this._groupAttributesHandler.getGroupAttributes(e)
				}
			}, {
				key: "reset",
				value: function() {
					this.groupMap.clear(), this._unjoinedAVChatRoomList.clear(), this
						._commonGroupHandler.reset(), this._groupSystemNoticeHandler.reset(),
						this._groupTipsHandler.reset(), this._AVChatRoomHandler && this
						._AVChatRoomHandler.reset()
				}
			}]), r
		}(pl),
		iv = function() {
			function e(t) {
				o(this, e), this.userID = "", this.avatar = "", this.nick = "", this.role = "", this.joinTime =
					"", this.lastSendMsgTime = "", this.nameCard = "", this.muteUntil = 0, this
					.memberCustomField = [], this._initMember(t)
			}
			return a(e, [{
				key: "_initMember",
				value: function(e) {
					this.updateMember(e)
				}
			}, {
				key: "updateMember",
				value: function(e) {
					var t = [null, void 0, "", 0, NaN];
					e.memberCustomField && fu(this.memberCustomField, e.memberCustomField), ru(
						this, e, ["memberCustomField"], t)
				}
			}, {
				key: "updateRole",
				value: function(e) {
					["Owner", "Admin", "Member"].indexOf(e) < 0 || (this.role = e)
				}
			}, {
				key: "updateMuteUntil",
				value: function(e) {
					Ji(e) || (this.muteUntil = Math.floor((Date.now() + 1e3 * e) / 1e3))
				}
			}, {
				key: "updateNameCard",
				value: function(e) {
					Ji(e) || (this.nameCard = e)
				}
			}, {
				key: "updateMemberCustomField",
				value: function(e) {
					e && fu(this.memberCustomField, e)
				}
			}]), e
		}(),
		uv = function(e) {
			i(r, e);
			var n = _(r);

			function r(e) {
				var t;
				return o(this, r), (t = n.call(this, e))._className = "GroupMemberModule", t
					.groupMemberListMap = new Map, t.getInnerEmitterInstance().on(Om.PROFILE_UPDATED, t
						._onProfileUpdated, h(t)), t
			}
			return a(r, [{
				key: "_onProfileUpdated",
				value: function(e) {
					for (var t = this, n = e.data, o = function(e) {
							var o = n[e];
							t.groupMemberListMap.forEach((function(e) {
								e.has(o.userID) && e.get(o.userID)
							.updateMember({
									nick: o.nick,
									avatar: o.avatar
								})
							}))
						}, r = 0; r < n.length; r++) o(r)
				}
			}, {
				key: "deleteGroupMemberList",
				value: function(e) {
					this.groupMemberListMap.delete(e)
				}
			}, {
				key: "getGroupMemberList",
				value: function(e) {
					var t = this,
						n = e.groupID,
						o = e.offset,
						r = void 0 === o ? 0 : o,
						a = e.count,
						s = void 0 === a ? 15 : a,
						i = "".concat(this._className, ".getGroupMemberList"),
						u = new jd($g);
					Ki.log("".concat(i, " groupID:").concat(n, " offset:").concat(r, " count:")
						.concat(s));
					var c = [];
					return this.request({
						protocolName: sp,
						requestData: {
							groupID: n,
							offset: r,
							limit: s > 100 ? 100 : s
						}
					}).then((function(e) {
						var o = e.data,
							r = o.members,
							a = o.memberNum;
						if (!Wi(r) || 0 === r.length) return Promise.resolve([]);
						var s = t.getModule(Yc);
						return s.hasLocalGroup(n) && (s.getLocalGroupProfile(n)
							.memberNum = a), c = t._updateLocalGroupMemberMap(n,
							r), t.getModule(jc).getUserProfile({
							userIDList: r.map((function(e) {
								return e.userID
							})),
							tagList: [A_.NICK, A_.AVATAR]
						})
					})).then((function(e) {
						var o = e.data;
						if (!Wi(o) || 0 === o.length) return um({
							memberList: []
						});
						var a = o.map((function(e) {
							return {
								userID: e.userID,
								nick: e.nick,
								avatar: e.avatar
							}
						}));
						return t._updateLocalGroupMemberMap(n, a), u.setNetworkType(
								t.getNetworkType()).setMessage("groupID:".concat(n,
								" offset:").concat(r, " count:").concat(s)).end(),
							Ki.log("".concat(i, " ok.")), Z_({
								memberList: c
							})
					})).catch((function(e) {
						return t.probeNetwork().then((function(t) {
							var n = m(t, 2),
								o = n[0],
								r = n[1];
							u.setError(e, o, r).end()
						})), Ki.error("".concat(i, " failed. error:"), e), cm(e)
					}))
				}
			}, {
				key: "getGroupMemberProfile",
				value: function(e) {
					var n = this,
						o = "".concat(this._className, ".getGroupMemberProfile"),
						r = new jd(Yg);
					r.setMessage(e.userIDList.length > 5 ? "userIDList.length:".concat(e
						.userIDList.length) : "userIDList:".concat(e.userIDList)), Ki.log(""
						.concat(o, " groupID:").concat(e.groupID, " userIDList:").concat(e
							.userIDList.join(","))), e.userIDList.length > 50 && (e
						.userIDList = e.userIDList.slice(0, 50));
					var a = e.groupID,
						s = e.userIDList;
					return this._getGroupMemberProfileAdvance(t(t({}, e), {}, {
						userIDList: s
					})).then((function(e) {
						var t = e.data.members;
						return Wi(t) && 0 !== t.length ? (n
							._updateLocalGroupMemberMap(a, t), n.getModule(jc)
							.getUserProfile({
								userIDList: t.map((function(e) {
									return e.userID
								})),
								tagList: [A_.NICK, A_.AVATAR]
							})) : um([])
					})).then((function(e) {
						var t = e.data.map((function(e) {
							return {
								userID: e.userID,
								nick: e.nick,
								avatar: e.avatar
							}
						}));
						n._updateLocalGroupMemberMap(a, t);
						var o = s.filter((function(e) {
							return n.hasLocalGroupMember(a, e)
						})).map((function(e) {
							return n.getLocalGroupMemberInfo(a, e)
						}));
						return r.setNetworkType(n.getNetworkType()).end(), Z_({
							memberList: o
						})
					}))
				}
			}, {
				key: "addGroupMember",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, ".addGroupMember"),
						o = e.groupID,
						r = this.getModule(Yc).getLocalGroupProfile(o),
						a = r.type,
						s = new jd(zg);
					if (s.setMessage("groupID:".concat(o, " groupType:").concat(a)), mu(a)) {
						var i = new am({
							code: Tp.CANNOT_ADD_MEMBER_IN_AVCHATROOM,
							message: pd
						});
						return s.setCode(Tp.CANNOT_ADD_MEMBER_IN_AVCHATROOM).setError(pd)
							.setNetworkType(this.getNetworkType()).end(), cm(i)
					}
					return e.userIDList = e.userIDList.map((function(e) {
						return {
							userID: e
						}
					})), Ki.log("".concat(n, " groupID:").concat(o)), this.request({
						protocolName: up,
						requestData: e
					}).then((function(o) {
						var a = o.data.members;
						Ki.log("".concat(n, " ok"));
						var i = a.filter((function(e) {
								return 1 === e.result
							})).map((function(e) {
								return e.userID
							})),
							u = a.filter((function(e) {
								return 0 === e.result
							})).map((function(e) {
								return e.userID
							})),
							c = a.filter((function(e) {
								return 2 === e.result
							})).map((function(e) {
								return e.userID
							})),
							l = a.filter((function(e) {
								return 4 === e.result
							})).map((function(e) {
								return e.userID
							})),
							p = "groupID:".concat(e.groupID, ", ") +
							"successUserIDList:".concat(i, ", ") +
							"failureUserIDList:".concat(u, ", ") +
							"existedUserIDList:".concat(c, ", ") +
							"overLimitUserIDList:".concat(l);
						return s.setNetworkType(t.getNetworkType()).setMoreMessage(
							p).end(), 0 === i.length ? Z_({
							successUserIDList: i,
							failureUserIDList: u,
							existedUserIDList: c,
							overLimitUserIDList: l
						}) : (r.memberNum += i.length, Z_({
							successUserIDList: i,
							failureUserIDList: u,
							existedUserIDList: c,
							overLimitUserIDList: l,
							group: r
						}))
					})).catch((function(e) {
						return t.probeNetwork().then((function(t) {
							var n = m(t, 2),
								o = n[0],
								r = n[1];
							s.setError(e, o, r).end()
						})), Ki.error("".concat(n, " failed. error:"), e), cm(e)
					}))
				}
			}, {
				key: "deleteGroupMember",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, ".deleteGroupMember"),
						o = e.groupID,
						r = e.userIDList,
						a = new jd(Wg),
						s = "groupID:".concat(o, " ").concat(r.length > 5 ? "userIDList.length:"
							.concat(r.length) : "userIDList:".concat(r));
					a.setMessage(s), Ki.log("".concat(n, " groupID:").concat(o, " userIDList:"),
						r);
					var i = this.getModule(Yc).getLocalGroupProfile(o);
					return mu(i.type) ? cm(new am({
						code: Tp.CANNOT_KICK_MEMBER_IN_AVCHATROOM,
						message: gd
					})) : this.request({
						protocolName: cp,
						requestData: e
					}).then((function() {
						return a.setNetworkType(t.getNetworkType()).end(), Ki.log(""
								.concat(n, " ok")), i.memberNum--, t
							.deleteLocalGroupMembers(o, r), Z_({
								group: i,
								userIDList: r
							})
					})).catch((function(e) {
						return t.probeNetwork().then((function(t) {
							var n = m(t, 2),
								o = n[0],
								r = n[1];
							a.setError(e, o, r).end()
						})), Ki.error("".concat(n, " failed. error:"), e), cm(e)
					}))
				}
			}, {
				key: "setGroupMemberMuteTime",
				value: function(e) {
					var t = this,
						n = e.groupID,
						o = e.userID,
						r = e.muteTime,
						a = "".concat(this._className, ".setGroupMemberMuteTime");
					if (o === this.getMyUserID()) return cm(new am({
						code: Tp.CANNOT_MUTE_SELF,
						message: vd
					}));
					Ki.log("".concat(a, " groupID:").concat(n, " userID:").concat(o));
					var s = new jd(Jg);
					return s.setMessage("groupID:".concat(n, " userID:").concat(o, " muteTime:")
						.concat(r)), this._modifyGroupMemberInfo({
						groupID: n,
						userID: o,
						muteTime: r
					}).then((function(e) {
						s.setNetworkType(t.getNetworkType()).end(), Ki.log(""
							.concat(a, " ok"));
						var o = t.getModule(Yc);
						return Z_({
							group: o.getLocalGroupProfile(n),
							member: e
						})
					})).catch((function(e) {
						return t.probeNetwork().then((function(t) {
							var n = m(t, 2),
								o = n[0],
								r = n[1];
							s.setError(e, o, r).end()
						})), Ki.error("".concat(a, " failed. error:"), e), cm(e)
					}))
				}
			}, {
				key: "setGroupMemberRole",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, ".setGroupMemberRole"),
						o = e.groupID,
						r = e.userID,
						a = e.role,
						s = this.getModule(Yc).getLocalGroupProfile(o);
					if (s.selfInfo.role !== ro.GRP_MBR_ROLE_OWNER) return cm(new am({
						code: Tp.NOT_OWNER,
						message: hd
					}));
					if ([ro.GRP_WORK, ro.GRP_AVCHATROOM].includes(s.type)) return cm(new am({
						code: Tp.CANNOT_SET_MEMBER_ROLE_IN_WORK_AND_AVCHATROOM,
						message: fd
					}));
					if ([ro.GRP_MBR_ROLE_ADMIN, ro.GRP_MBR_ROLE_MEMBER].indexOf(a) < 0)
					return cm(new am({
							code: Tp.INVALID_MEMBER_ROLE,
							message: _d
						}));
					if (r === this.getMyUserID()) return cm(new am({
						code: Tp.CANNOT_SET_SELF_MEMBER_ROLE,
						message: md
					}));
					var i = new jd(Qg);
					return i.setMessage("groupID:".concat(o, " userID:").concat(r, " role:")
						.concat(a)), Ki.log("".concat(n, " groupID:").concat(o, " userID:")
						.concat(r)), this._modifyGroupMemberInfo({
						groupID: o,
						userID: r,
						role: a
					}).then((function(e) {
						return i.setNetworkType(t.getNetworkType()).end(), Ki.log(""
							.concat(n, " ok")), Z_({
							group: s,
							member: e
						})
					})).catch((function(e) {
						return t.probeNetwork().then((function(t) {
							var n = m(t, 2),
								o = n[0],
								r = n[1];
							i.setError(e, o, r).end()
						})), Ki.error("".concat(n, " failed. error:"), e), cm(e)
					}))
				}
			}, {
				key: "setGroupMemberNameCard",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, ".setGroupMemberNameCard"),
						o = e.groupID,
						r = e.userID,
						a = void 0 === r ? this.getMyUserID() : r,
						s = e.nameCard;
					Ki.log("".concat(n, " groupID:").concat(o, " userID:").concat(a));
					var i = new jd(Xg);
					return i.setMessage("groupID:".concat(o, " userID:").concat(a, " nameCard:")
						.concat(s)), this._modifyGroupMemberInfo({
						groupID: o,
						userID: a,
						nameCard: s
					}).then((function(e) {
						Ki.log("".concat(n, " ok")), i.setNetworkType(t
							.getNetworkType()).end();
						var r = t.getModule(Yc).getLocalGroupProfile(o);
						return a === t.getMyUserID() && r && r.setSelfNameCard(s),
							Z_({
								group: r,
								member: e
							})
					})).catch((function(e) {
						return t.probeNetwork().then((function(t) {
							var n = m(t, 2),
								o = n[0],
								r = n[1];
							i.setError(e, o, r).end()
						})), Ki.error("".concat(n, " failed. error:"), e), cm(e)
					}))
				}
			}, {
				key: "setGroupMemberCustomField",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, ".setGroupMemberCustomField"),
						o = e.groupID,
						r = e.userID,
						a = void 0 === r ? this.getMyUserID() : r,
						s = e.memberCustomField;
					Ki.log("".concat(n, " groupID:").concat(o, " userID:").concat(a));
					var i = new jd(Zg);
					return i.setMessage("groupID:".concat(o, " userID:").concat(a,
							" memberCustomField:").concat(JSON.stringify(s))), this
						._modifyGroupMemberInfo({
							groupID: o,
							userID: a,
							memberCustomField: s
						}).then((function(e) {
							i.setNetworkType(t.getNetworkType()).end(), Ki.log(""
								.concat(n, " ok"));
							var r = t.getModule(Yc).getLocalGroupProfile(o);
							return Z_({
								group: r,
								member: e
							})
						})).catch((function(e) {
							return t.probeNetwork().then((function(t) {
								var n = m(t, 2),
									o = n[0],
									r = n[1];
								i.setError(e, o, r).end()
							})), Ki.error("".concat(n, " failed. error:"), e), cm(e)
						}))
				}
			}, {
				key: "setMessageRemindType",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, ".setMessageRemindType"),
						o = new jd(Lg);
					o.setMessage("groupID:".concat(e.groupID)), Ki.log("".concat(n, " groupID:")
						.concat(e.groupID));
					var r = e.groupID,
						a = e.messageRemindType;
					return this._modifyGroupMemberInfo({
						groupID: r,
						messageRemindType: a,
						userID: this.getMyUserID()
					}).then((function() {
						o.setNetworkType(t.getNetworkType()).end(), Ki.log(""
							.concat(n, " ok. groupID:").concat(e.groupID));
						var r = t.getModule(Yc).getLocalGroupProfile(e.groupID);
						return r && (r.selfInfo.messageRemindType = a), Z_({
							group: r
						})
					})).catch((function(e) {
						return t.probeNetwork().then((function(t) {
							var n = m(t, 2),
								r = n[0],
								a = n[1];
							o.setError(e, r, a).end()
						})), Ki.error("".concat(n, " failed. error:"), e), cm(e)
					}))
				}
			}, {
				key: "_modifyGroupMemberInfo",
				value: function(e) {
					var t = this,
						n = e.groupID,
						o = e.userID;
					return this.request({
						protocolName: lp,
						requestData: e
					}).then((function() {
						if (t.hasLocalGroupMember(n, o)) {
							var r = t.getLocalGroupMemberInfo(n, o);
							return Ji(e.muteTime) || r.updateMuteUntil(e.muteTime),
								Ji(e.role) || r.updateRole(e.role), Ji(e
								.nameCard) || r.updateNameCard(e.nameCard), Ji(e
									.memberCustomField) || r
								.updateMemberCustomField(e.memberCustomField), r
						}
						return t.getGroupMemberProfile({
							groupID: n,
							userIDList: [o]
						}).then((function(e) {
							return m(e.data.memberList, 1)[0]
						}))
					}))
				}
			}, {
				key: "_getGroupMemberProfileAdvance",
				value: function(e) {
					return this.request({
						protocolName: ip,
						requestData: t(t({}, e), {}, {
							memberInfoFilter: e.memberInfoFilter ? e
								.memberInfoFilter : ["Role", "JoinTime",
									"NameCard", "ShutUpUntil"
								]
						})
					})
				}
			}, {
				key: "_updateLocalGroupMemberMap",
				value: function(e, t) {
					var n = this;
					return Wi(t) && 0 !== t.length ? t.map((function(t) {
						return n.hasLocalGroupMember(e, t.userID) ? n
							.getLocalGroupMemberInfo(e, t.userID).updateMember(t) :
							n.setLocalGroupMember(e, new iv(t)), n
							.getLocalGroupMemberInfo(e, t.userID)
					})) : []
				}
			}, {
				key: "deleteLocalGroupMembers",
				value: function(e, t) {
					var n = this.groupMemberListMap.get(e);
					n && t.forEach((function(e) {
						n.delete(e)
					}))
				}
			}, {
				key: "getLocalGroupMemberInfo",
				value: function(e, t) {
					return this.groupMemberListMap.has(e) ? this.groupMemberListMap.get(e).get(
						t) : null
				}
			}, {
				key: "setLocalGroupMember",
				value: function(e, t) {
					if (this.groupMemberListMap.has(e)) this.groupMemberListMap.get(e).set(t
						.userID, t);
					else {
						var n = (new Map).set(t.userID, t);
						this.groupMemberListMap.set(e, n)
					}
				}
			}, {
				key: "getLocalGroupMemberList",
				value: function(e) {
					return this.groupMemberListMap.get(e)
				}
			}, {
				key: "hasLocalGroupMember",
				value: function(e, t) {
					return this.groupMemberListMap.has(e) && this.groupMemberListMap.get(e).has(
						t)
				}
			}, {
				key: "hasLocalGroupMemberMap",
				value: function(e) {
					return this.groupMemberListMap.has(e)
				}
			}, {
				key: "reset",
				value: function() {
					this.groupMemberListMap.clear()
				}
			}]), r
		}(pl),
		cv = function() {
			function e(t) {
				o(this, e), this._userModule = t, this._className = "ProfileHandler", this.TAG = "profile", this
					.accountProfileMap = new Map, this.expirationTime = 864e5
			}
			return a(e, [{
				key: "setExpirationTime",
				value: function(e) {
					this.expirationTime = e
				}
			}, {
				key: "getUserProfile",
				value: function(e) {
					var t = this,
						n = e.userIDList;
					e.fromAccount = this._userModule.getMyAccount(), n.length > 100 && (Ki.warn(
							"".concat(this._className, ".getUserProfile 获取用户资料人数不能超过100人")),
						n.length = 100);
					for (var o, r = [], a = [], s = 0, i = n.length; s < i; s++) o = n[s], this
						._userModule.isMyFriend(o) && this._containsAccount(o) ? a.push(this
							._getProfileFromMap(o)) : r.push(o);
					if (0 === r.length) return um(a);
					e.toAccount = r;
					var u = e.bFromGetMyProfile || !1,
						c = [];
					e.toAccount.forEach((function(e) {
						c.push({
							toAccount: e,
							standardSequence: 0,
							customSequence: 0
						})
					})), e.userItem = c;
					var l = new jd(rh);
					return l.setMessage(n.length > 5 ? "userIDList.length:".concat(n.length) :
						"userIDList:".concat(n)), this._userModule.request({
						protocolName: Ml,
						requestData: e
					}).then((function(e) {
						l.setNetworkType(t._userModule.getNetworkType()).end(), Ki
							.info("".concat(t._className, ".getUserProfile ok"));
						var n = t._handleResponse(e).concat(a);
						return Z_(u ? n[0] : n)
					})).catch((function(e) {
						return t._userModule.probeNetwork().then((function(t) {
							var n = m(t, 2),
								o = n[0],
								r = n[1];
							l.setError(e, o, r).end()
						})), Ki.error("".concat(t._className,
							".getUserProfile failed. error:"), e), cm(e)
					}))
				}
			}, {
				key: "getMyProfile",
				value: function() {
					var e = this._userModule.getMyAccount();
					if (Ki.log("".concat(this._className, ".getMyProfile myAccount:").concat(
						e)), this._fillMap(), this._containsAccount(e)) {
						var t = this._getProfileFromMap(e);
						return Ki.debug("".concat(this._className,
								".getMyProfile from cache, myProfile:") + JSON.stringify(t)),
							um(t)
					}
					return this.getUserProfile({
						fromAccount: e,
						userIDList: [e],
						bFromGetMyProfile: !0
					})
				}
			}, {
				key: "_handleResponse",
				value: function(e) {
					for (var t, n, o = ou.now(), r = e.data.userProfileItem, a = [], s = 0, i =
							r.length; s < i; s++) "@TLS#NOT_FOUND" !== r[s].to && "" !== r[s]
						.to && (t = r[s].to, n = this._updateMap(t, this
							._getLatestProfileFromResponse(t, r[s].profileItem)), a.push(n));
					return Ki.log("".concat(this._className, "._handleResponse cost ").concat(ou
						.now() - o, " ms")), a
				}
			}, {
				key: "_getLatestProfileFromResponse",
				value: function(e, t) {
					var n = {};
					if (n.userID = e, n.profileCustomField = [], !Lu(t))
						for (var o = 0, r = t.length; o < r; o++)
							if (t[o].tag.indexOf("Tag_Profile_Custom") > -1) n
								.profileCustomField.push({
									key: t[o].tag,
									value: t[o].value
								});
							else switch (t[o].tag) {
								case A_.NICK:
									n.nick = t[o].value;
									break;
								case A_.GENDER:
									n.gender = t[o].value;
									break;
								case A_.BIRTHDAY:
									n.birthday = t[o].value;
									break;
								case A_.LOCATION:
									n.location = t[o].value;
									break;
								case A_.SELFSIGNATURE:
									n.selfSignature = t[o].value;
									break;
								case A_.ALLOWTYPE:
									n.allowType = t[o].value;
									break;
								case A_.LANGUAGE:
									n.language = t[o].value;
									break;
								case A_.AVATAR:
									n.avatar = t[o].value;
									break;
								case A_.MESSAGESETTINGS:
									n.messageSettings = t[o].value;
									break;
								case A_.ADMINFORBIDTYPE:
									n.adminForbidType = t[o].value;
									break;
								case A_.LEVEL:
									n.level = t[o].value;
									break;
								case A_.ROLE:
									n.role = t[o].value;
									break;
								default:
									Ki.warn("".concat(this._className,
											"._handleResponse unknown tag:"), t[o].tag,
										t[o].value)
							}
					return n
				}
			}, {
				key: "updateMyProfile",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, ".updateMyProfile"),
						o = new jd(ah);
					o.setMessage(JSON.stringify(e));
					var r = (new Fm).validate(e);
					if (!r.valid) return o.setCode(Tp.UPDATE_PROFILE_INVALID_PARAM)
						.setMoreMessage("".concat(n, " info:").concat(r.tips))
						.setNetworkType(this._userModule.getNetworkType()).end(), Ki.error(
							"".concat(n, " info:").concat(r.tips,
								"，请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#updateMyProfile"
								)), cm({
							code: Tp.UPDATE_PROFILE_INVALID_PARAM,
							message: Md
						});
					var a = [];
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (
						"profileCustomField" === s ? e.profileCustomField.forEach((function(
							e) {
							a.push({
								tag: e.key,
								value: e.value
							})
						})) : a.push({
							tag: A_[s.toUpperCase()],
							value: e[s]
						}));
					return 0 === a.length ? (o.setCode(Tp.UPDATE_PROFILE_NO_KEY).setMoreMessage(
							yd).setNetworkType(this._userModule.getNetworkType()).end(), Ki
						.error("".concat(n, " info:").concat(yd,
							"，请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#updateMyProfile"
							)), cm({
							code: Tp.UPDATE_PROFILE_NO_KEY,
							message: yd
						})) : this._userModule.request({
						protocolName: yl,
						requestData: {
							fromAccount: this._userModule.getMyAccount(),
							profileItem: a
						}
					}).then((function(r) {
						o.setNetworkType(t._userModule.getNetworkType()).end(), Ki
							.info("".concat(n, " ok"));
						var a = t._updateMap(t._userModule.getMyAccount(), e);
						return t._userModule.emitOuterEvent(oo.PROFILE_UPDATED, [
							a]), um(a)
					})).catch((function(e) {
						return t._userModule.probeNetwork().then((function(t) {
							var n = m(t, 2),
								r = n[0],
								a = n[1];
							o.setError(e, r, a).end()
						})), Ki.error("".concat(n, " failed. error:"), e), cm(e)
					}))
				}
			}, {
				key: "onProfileModified",
				value: function(e) {
					var t = e.dataList;
					if (!Lu(t)) {
						var n, o, r = t.length;
						Ki.info("".concat(this._className, ".onProfileModified count:").concat(
							r));
						for (var a = [], s = this._userModule.getModule(Jc), i = 0; i < r; i++)
							n = t[i].userID, o = this._updateMap(n, this
								._getLatestProfileFromResponse(n, t[i].profileList)), a.push(o),
							n === this._userModule.getMyAccount() && s.onMyProfileModified({
								latestNick: o.nick,
								latestAvatar: o.avatar
							});
						this._userModule.emitInnerEvent(Om.PROFILE_UPDATED, a), this._userModule
							.emitOuterEvent(oo.PROFILE_UPDATED, a)
					}
				}
			}, {
				key: "_fillMap",
				value: function() {
					if (0 === this.accountProfileMap.size) {
						for (var e = this._getCachedProfiles(), t = Date.now(), n = 0, o = e
								.length; n < o; n++) t - e[n].lastUpdatedTime < this
							.expirationTime && this.accountProfileMap.set(e[n].userID, e[n]);
						Ki.log("".concat(this._className, "._fillMap from cache, map.size:")
							.concat(this.accountProfileMap.size))
					}
				}
			}, {
				key: "_updateMap",
				value: function(e, t) {
					var n, o = Date.now();
					return this._containsAccount(e) ? (n = this._getProfileFromMap(e), t
							.profileCustomField && fu(n.profileCustomField, t
								.profileCustomField), ru(n, t, ["profileCustomField"]), n
							.lastUpdatedTime = o) : (n = new Fm(t), (this._userModule
							.isMyFriend(e) || e === this._userModule.getMyAccount()) && (n
							.lastUpdatedTime = o, this.accountProfileMap.set(e, n))), this
						._flushMap(e === this._userModule.getMyAccount()), n
				}
			}, {
				key: "_flushMap",
				value: function(e) {
					var t = v(this.accountProfileMap.values()),
						n = this._userModule.getStorageModule();
					Ki.debug("".concat(this._className, "._flushMap length:").concat(t.length,
						" flushAtOnce:").concat(e)), n.setItem(this.TAG, t, e)
				}
			}, {
				key: "_containsAccount",
				value: function(e) {
					return this.accountProfileMap.has(e)
				}
			}, {
				key: "_getProfileFromMap",
				value: function(e) {
					return this.accountProfileMap.get(e)
				}
			}, {
				key: "_getCachedProfiles",
				value: function() {
					var e = this._userModule.getStorageModule().getItem(this.TAG);
					return Lu(e) ? [] : e
				}
			}, {
				key: "onConversationsProfileUpdated",
				value: function(e) {
					for (var t, n, o, r = [], a = 0, s = e.length; a < s; a++) n = (t = e[a])
						.userID, this._userModule.isMyFriend(n) || (this._containsAccount(n) ? (
								o = this._getProfileFromMap(n), ru(o, t) > 0 && r.push(n)) : r
							.push(t.userID));
					0 !== r.length && (Ki.info("".concat(this._className,
							".onConversationsProfileUpdated toAccountList:").concat(r)),
						this.getUserProfile({
							userIDList: r
						}))
				}
			}, {
				key: "getNickAndAvatarByUserID",
				value: function(e) {
					if (this._containsAccount(e)) {
						var t = this._getProfileFromMap(e);
						return {
							nick: t.nick,
							avatar: t.avatar
						}
					}
					return {
						nick: "",
						avatar: ""
					}
				}
			}, {
				key: "reset",
				value: function() {
					this._flushMap(!0), this.accountProfileMap.clear()
				}
			}]), e
		}(),
		lv = function e(t) {
			o(this, e), Lu || (this.userID = t.userID || "", this.timeStamp = t.timeStamp || 0)
		},
		pv = function() {
			function e(t) {
				o(this, e), this._userModule = t, this._className = "BlacklistHandler", this._blacklistMap =
					new Map, this.startIndex = 0, this.maxLimited = 100, this.currentSequence = 0
			}
			return a(e, [{
				key: "getLocalBlacklist",
				value: function() {
					return v(this._blacklistMap.keys())
				}
			}, {
				key: "getBlacklist",
				value: function() {
					var e = this,
						t = "".concat(this._className, ".getBlacklist"),
						n = {
							fromAccount: this._userModule.getMyAccount(),
							maxLimited: this.maxLimited,
							startIndex: 0,
							lastSequence: this.currentSequence
						},
						o = new jd(sh);
					return this._userModule.request({
						protocolName: Il,
						requestData: n
					}).then((function(n) {
						var r = n.data,
							a = r.blackListItem,
							s = r.currentSequence,
							i = Lu(a) ? 0 : a.length;
						o.setNetworkType(e._userModule.getNetworkType()).setMessage(
								"blackList count:".concat(i)).end(), Ki.info(""
								.concat(t, " ok")), e.currentSequence = s, e
							._handleResponse(a, !0), e._userModule.emitOuterEvent(oo
								.BLACKLIST_UPDATED, v(e._blacklistMap.keys()))
					})).catch((function(n) {
						return e._userModule.probeNetwork().then((function(e) {
							var t = m(e, 2),
								r = t[0],
								a = t[1];
							o.setError(n, r, a).end()
						})), Ki.error("".concat(t, " failed. error:"), n), cm(n)
					}))
				}
			}, {
				key: "addBlacklist",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, ".addBlacklist"),
						o = new jd(ih);
					if (!Wi(e.userIDList)) return o.setCode(Tp.ADD_BLACKLIST_INVALID_PARAM)
						.setMessage(Id).setNetworkType(this._userModule.getNetworkType())
						.end(), Ki.error("".concat(n, " options.userIDList 必需是数组")), cm({
							code: Tp.ADD_BLACKLIST_INVALID_PARAM,
							message: Id
						});
					var r = this._userModule.getMyAccount();
					return 1 === e.userIDList.length && e.userIDList[0] === r ? (o.setCode(Tp
						.CANNOT_ADD_SELF_TO_BLACKLIST).setMessage(Sd).setNetworkType(
						this._userModule.getNetworkType()).end(), Ki.error("".concat(n,
						" 不能把自己拉黑")), cm({
						code: Tp.CANNOT_ADD_SELF_TO_BLACKLIST,
						message: Sd
					})) : (e.userIDList.includes(r) && (e.userIDList = e.userIDList.filter((
							function(e) {
								return e !== r
							})), Ki.warn("".concat(n, " 不能把自己拉黑，已过滤"))), e.fromAccount =
						this._userModule.getMyAccount(), e.toAccount = e.userIDList, this
						._userModule.request({
							protocolName: Tl,
							requestData: e
						}).then((function(r) {
							return o.setNetworkType(t._userModule.getNetworkType())
								.setMessage(e.userIDList.length > 5 ?
									"userIDList.length:".concat(e.userIDList
									.length) : "userIDList:".concat(e.userIDList))
								.end(), Ki.info("".concat(n, " ok")), t
								._handleResponse(r.resultItem, !0), Z_(v(t
									._blacklistMap.keys()))
						})).catch((function(e) {
							return t._userModule.probeNetwork().then((function(t) {
									var n = m(t, 2),
										r = n[0],
										a = n[1];
									o.setError(e, r, a).end()
								})), Ki.error("".concat(n, " failed. error:"), e),
								cm(e)
						})))
				}
			}, {
				key: "_handleResponse",
				value: function(e, t) {
					if (!Lu(e))
						for (var n, o, r, a = 0, s = e.length; a < s; a++) o = e[a].to, r = e[a]
							.resultCode, (Ji(r) || 0 === r) && (t ? ((n = this._blacklistMap
										.has(o) ? this._blacklistMap.get(o) : new lv).userID =
									o, !Lu(e[a].addBlackTimeStamp) && (n.timeStamp = e[a]
										.addBlackTimeStamp), this._blacklistMap.set(o, n)) :
								this._blacklistMap.has(o) && (n = this._blacklistMap.get(o),
									this._blacklistMap.delete(o)));
					Ki.log("".concat(this._className, "._handleResponse total:").concat(this
						._blacklistMap.size, " bAdd:").concat(t))
				}
			}, {
				key: "deleteBlacklist",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, ".deleteBlacklist"),
						o = new jd(uh);
					return Wi(e.userIDList) ? (e.fromAccount = this._userModule.getMyAccount(),
						e.toAccount = e.userIDList, this._userModule.request({
							protocolName: Sl,
							requestData: e
						}).then((function(r) {
							return o.setNetworkType(t._userModule.getNetworkType())
								.setMessage(e.userIDList.length > 5 ?
									"userIDList.length:".concat(e.userIDList
									.length) : "userIDList:".concat(e.userIDList))
								.end(), Ki.info("".concat(n, " ok")), t
								._handleResponse(r.data.resultItem, !1), Z_(v(t
									._blacklistMap.keys()))
						})).catch((function(e) {
							return t._userModule.probeNetwork().then((function(t) {
									var n = m(t, 2),
										r = n[0],
										a = n[1];
									o.setError(e, r, a).end()
								})), Ki.error("".concat(n, " failed. error:"), e),
								cm(e)
						}))) : (o.setCode(Tp.DEL_BLACKLIST_INVALID_PARAM).setMessage(Td)
						.setNetworkType(this._userModule.getNetworkType()).end(), Ki.error(
							"".concat(n, " options.userIDList 必需是数组")), cm({
							code: Tp.DEL_BLACKLIST_INVALID_PARAM,
							message: Td
						}))
				}
			}, {
				key: "onAccountDeleted",
				value: function(e) {
					for (var t, n = [], o = 0, r = e.length; o < r; o++) t = e[o], this
						._blacklistMap.has(t) && (this._blacklistMap.delete(t), n.push(t));
					n.length > 0 && (Ki.log("".concat(this._className,
							".onAccountDeleted count:").concat(n.length,
						" userIDList:"), n), this._userModule.emitOuterEvent(oo
						.BLACKLIST_UPDATED, v(this._blacklistMap.keys())))
				}
			}, {
				key: "onAccountAdded",
				value: function(e) {
					for (var t, n = [], o = 0, r = e.length; o < r; o++) t = e[o], this
						._blacklistMap.has(t) || (this._blacklistMap.set(t, new lv({
							userID: t
						})), n.push(t));
					n.length > 0 && (Ki.log("".concat(this._className, ".onAccountAdded count:")
							.concat(n.length, " userIDList:"), n), this._userModule
						.emitOuterEvent(oo.BLACKLIST_UPDATED, v(this._blacklistMap.keys())))
				}
			}, {
				key: "reset",
				value: function() {
					this._blacklistMap.clear(), this.startIndex = 0, this.maxLimited = 100, this
						.currentSequence = 0
				}
			}]), e
		}(),
		dv = function(e) {
			i(n, e);
			var t = _(n);

			function n(e) {
				var r;
				return o(this, n), (r = t.call(this, e))._className = "UserModule", r._profileHandler = new cv(
					h(r)), r._blacklistHandler = new pv(h(r)), r.getInnerEmitterInstance().on(Om
					.CONTEXT_A2KEY_AND_TINYID_UPDATED, r.onContextUpdated, h(r)), r
			}
			return a(n, [{
				key: "onContextUpdated",
				value: function(e) {
					this._profileHandler.getMyProfile(), this._blacklistHandler.getBlacklist()
				}
			}, {
				key: "onProfileModified",
				value: function(e) {
					this._profileHandler.onProfileModified(e)
				}
			}, {
				key: "onRelationChainModified",
				value: function(e) {
					var t = e.dataList;
					if (!Lu(t)) {
						var n = [];
						t.forEach((function(e) {
							e.blackListDelAccount && n.push.apply(n, v(e
								.blackListDelAccount))
						})), n.length > 0 && this._blacklistHandler.onAccountDeleted(n);
						var o = [];
						t.forEach((function(e) {
							e.blackListAddAccount && o.push.apply(o, v(e
								.blackListAddAccount))
						})), o.length > 0 && this._blacklistHandler.onAccountAdded(o)
					}
				}
			}, {
				key: "onConversationsProfileUpdated",
				value: function(e) {
					this._profileHandler.onConversationsProfileUpdated(e)
				}
			}, {
				key: "getMyAccount",
				value: function() {
					return this.getMyUserID()
				}
			}, {
				key: "getMyProfile",
				value: function() {
					return this._profileHandler.getMyProfile()
				}
			}, {
				key: "getStorageModule",
				value: function() {
					return this.getModule(Qc)
				}
			}, {
				key: "isMyFriend",
				value: function(e) {
					var t = this.getModule(zc);
					return !!t && t.isMyFriend(e)
				}
			}, {
				key: "getUserProfile",
				value: function(e) {
					return this._profileHandler.getUserProfile(e)
				}
			}, {
				key: "updateMyProfile",
				value: function(e) {
					return this._profileHandler.updateMyProfile(e)
				}
			}, {
				key: "getNickAndAvatarByUserID",
				value: function(e) {
					return this._profileHandler.getNickAndAvatarByUserID(e)
				}
			}, {
				key: "getLocalBlacklist",
				value: function() {
					var e = this._blacklistHandler.getLocalBlacklist();
					return um(e)
				}
			}, {
				key: "addBlacklist",
				value: function(e) {
					return this._blacklistHandler.addBlacklist(e)
				}
			}, {
				key: "deleteBlacklist",
				value: function(e) {
					return this._blacklistHandler.deleteBlacklist(e)
				}
			}, {
				key: "reset",
				value: function() {
					Ki.log("".concat(this._className, ".reset")), this._profileHandler.reset(),
						this._blacklistHandler.reset()
				}
			}]), n
		}(pl),
		gv = function() {
			function e(t, n) {
				o(this, e), this._moduleManager = t, this._isLoggedIn = !1, this._SDKAppID = n.SDKAppID, this
					._userID = n.userID || "", this._userSig = n.userSig || "", this._version = "2.14.0", this
					._a2Key = "", this._tinyID = "", this._contentType = "json", this._unlimitedAVChatRoom = n
					.unlimitedAVChatRoom, this._scene = n.scene || "", this._oversea = n.oversea, this
					._instanceID = n.instanceID, this._statusInstanceID = 0
			}
			return a(e, [{
				key: "isLoggedIn",
				value: function() {
					return this._isLoggedIn
				}
			}, {
				key: "isOversea",
				value: function() {
					return this._oversea
				}
			}, {
				key: "isUnlimitedAVChatRoom",
				value: function() {
					return this._unlimitedAVChatRoom
				}
			}, {
				key: "getUserID",
				value: function() {
					return this._userID
				}
			}, {
				key: "setUserID",
				value: function(e) {
					this._userID = e
				}
			}, {
				key: "setUserSig",
				value: function(e) {
					this._userSig = e
				}
			}, {
				key: "getUserSig",
				value: function() {
					return this._userSig
				}
			}, {
				key: "getSDKAppID",
				value: function() {
					return this._SDKAppID
				}
			}, {
				key: "getTinyID",
				value: function() {
					return this._tinyID
				}
			}, {
				key: "setTinyID",
				value: function(e) {
					this._tinyID = e, this._isLoggedIn = !0
				}
			}, {
				key: "getScene",
				value: function() {
					return function() {
						var e = !1,
							t = [];
						ai && (t = Object.keys(ii)), si && (t = Object.keys(window));
						for (var n = 0, o = t.length; n < o; n++)
							if (t[n].toLowerCase().includes("uikit")) {
								e = !0;
								break
							} return t = null, e
					}() ? "tuikit" : this._scene
				}
			}, {
				key: "getInstanceID",
				value: function() {
					return this._instanceID
				}
			}, {
				key: "getStatusInstanceID",
				value: function() {
					return this._statusInstanceID
				}
			}, {
				key: "setStatusInstanceID",
				value: function(e) {
					this._statusInstanceID = e
				}
			}, {
				key: "getVersion",
				value: function() {
					return this._version
				}
			}, {
				key: "getA2Key",
				value: function() {
					return this._a2Key
				}
			}, {
				key: "setA2Key",
				value: function(e) {
					this._a2Key = e
				}
			}, {
				key: "getContentType",
				value: function() {
					return this._contentType
				}
			}, {
				key: "reset",
				value: function() {
					this._isLoggedIn = !1, this._userSig = "", this._a2Key = "", this._tinyID =
						"", this._statusInstanceID = 0
				}
			}]), e
		}(),
		hv = function(e) {
			i(n, e);
			var t = _(n);

			function n(e) {
				var r;
				return o(this, n), (r = t.call(this, e))._className = "SignModule", r._helloInterval = 120, r
					._lastLoginTs = 0, Lm.mixin(h(r)), r
			}
			return a(n, [{
				key: "onCheckTimer",
				value: function(e) {
					this.isLoggedIn() && e % this._helloInterval == 0 && this._hello()
				}
			}, {
				key: "login",
				value: function(e) {
					if (this.isLoggedIn()) {
						var t = "您已经登录账号".concat(e.userID,
							"！如需切换账号登录，请先调用 logout 接口登出，再调用 login 接口登录。");
						return Ki.warn(t), um({
							actionStatus: "OK",
							errorCode: 0,
							errorInfo: t,
							repeatLogin: !0
						})
					}
					if (Date.now() - this._lastLoginTs <= 15e3) return Ki.warn("您正在尝试登录账号"
						.concat(e.userID, "！请勿重复登录。")), cm({
						code: Tp.REPEAT_LOGIN,
						message: Np
					});
					Ki.log("".concat(this._className, ".login userID:").concat(e.userID));
					var n = this._checkLoginInfo(e);
					if (0 !== n.code) return cm(n);
					var o = this.getModule(Xc),
						r = e.userID,
						a = e.userSig;
					return o.setUserID(r), o.setUserSig(a), this.getModule(al)
						.updateProtocolConfig(), this._login()
				}
			}, {
				key: "_login",
				value: function() {
					var e = this,
						t = this.getModule(Xc),
						n = new jd(zd);
					return n.setMessage("".concat(t.getScene())).setMoreMessage("identifier:"
							.concat(this.getMyUserID())), this._lastLoginTs = Date.now(), this
						.request({
							protocolName: dl
						}).then((function(o) {
							e._lastLoginTs = 0;
							var r = Date.now(),
								a = null,
								s = o.data,
								i = s.a2Key,
								u = s.tinyID,
								c = s.helloInterval,
								l = s.instanceID,
								p = s.timeStamp;
							Ki.log("".concat(e._className, ".login ok. helloInterval:")
								.concat(c, " instanceID:").concat(l, " timeStamp:")
								.concat(p));
							var d = 1e3 * p,
								g = r - n.getStartTs(),
								h = d + parseInt(g / 2) - r,
								f = n.getStartTs() + h;
							if (n.start(f), function(e, t) {
									Gi = t;
									var n = new Date;
									n.setTime(e), Ki.info("baseTime from server: "
										.concat(n, " offset: ").concat(Gi))
								}(d, h), !u) throw a = new am({
								code: Tp.NO_TINYID,
								message: Cp
							}), n.setError(a, !0, e.getNetworkType()).end(), a;
							if (!i) throw a = new am({
								code: Tp.NO_A2KEY,
								message: Ap
							}), n.setError(a, !0, e.getNetworkType()).end(), a;
							return n.setNetworkType(e.getNetworkType()).setMoreMessage(
									"helloInterval:".concat(c, " instanceID:").concat(l,
										" offset:").concat(h)).end(), t.setA2Key(i), t
								.setTinyID(u), t.setStatusInstanceID(l), e.getModule(al)
								.updateProtocolConfig(), e.emitInnerEvent(Om
									.CONTEXT_A2KEY_AND_TINYID_UPDATED), e
								._helloInterval = c, e.triggerReady(), e
								._fetchCloudControlConfig(), o
						})).catch((function(t) {
							return e.probeNetwork().then((function(e) {
									var o = m(e, 2),
										r = o[0],
										a = o[1];
									n.setError(t, r, a).end(!0)
								})), Ki.error("".concat(e._className,
									".login failed. error:"), t), e._moduleManager
								.onLoginFailed(), cm(t)
						}))
				}
			}, {
				key: "logout",
				value: function() {
					var e = this,
						t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
					if (!this.isLoggedIn()) return cm({
						code: Tp.USER_NOT_LOGGED_IN,
						message: kp
					});
					var n = new jd(Wd);
					return n.setNetworkType(this.getNetworkType()).setMessage("identifier:"
						.concat(this.getMyUserID())).end(!0), Ki.info("".concat(this
						._className, ".logout type:").concat(t)), this.request({
						protocolName: gl,
						requestData: {
							type: t
						}
					}).then((function() {
						return e.resetReady(), um({})
					})).catch((function(t) {
						return Ki.error("".concat(e._className, "._logout error:"),
							t), e.resetReady(), um({})
					}))
				}
			}, {
				key: "_fetchCloudControlConfig",
				value: function() {
					this.getModule(ul).fetchConfig()
				}
			}, {
				key: "_hello",
				value: function() {
					var e = this;
					this.request({
						protocolName: hl
					}).catch((function(t) {
						Ki.warn("".concat(e._className, "._hello error:"), t)
					}))
				}
			}, {
				key: "_checkLoginInfo",
				value: function(e) {
					var t = 0,
						n = "";
					return Lu(this.getModule(Xc).getSDKAppID()) ? (t = Tp.NO_SDKAPPID, n = Sp) :
						Lu(e.userID) ? (t = Tp.NO_IDENTIFIER, n = Dp) : Lu(e.userSig) && (t = Tp
							.NO_USERSIG, n = Ep), {
							code: t,
							message: n
						}
				}
			}, {
				key: "onMultipleAccountKickedOut",
				value: function(e) {
					var t = this;
					new jd(Jd).setNetworkType(this.getNetworkType()).setMessage("type:".concat(
						ro.KICKED_OUT_MULT_ACCOUNT, " newInstanceInfo:").concat(JSON
						.stringify(e))).end(!0), Ki.warn("".concat(this._className,
						".onMultipleAccountKickedOut userID:").concat(this
					.getMyUserID(), " newInstanceInfo:"), e), this.logout(1).then((
					function() {
						t.emitOuterEvent(oo.KICKED_OUT, {
							type: ro.KICKED_OUT_MULT_ACCOUNT
						}), t._moduleManager.reset()
					}))
				}
			}, {
				key: "onMultipleDeviceKickedOut",
				value: function(e) {
					var t = this;
					new jd(Jd).setNetworkType(this.getNetworkType()).setMessage("type:".concat(
						ro.KICKED_OUT_MULT_DEVICE, " newInstanceInfo:").concat(JSON
						.stringify(e))).end(!0), Ki.warn("".concat(this._className,
						".onMultipleDeviceKickedOut userID:").concat(this.getMyUserID(),
						" newInstanceInfo:"), e), this.logout(1).then((function() {
						t.emitOuterEvent(oo.KICKED_OUT, {
							type: ro.KICKED_OUT_MULT_DEVICE
						}), t._moduleManager.reset()
					}))
				}
			}, {
				key: "onUserSigExpired",
				value: function() {
					new jd(Jd).setNetworkType(this.getNetworkType()).setMessage(ro
							.KICKED_OUT_USERSIG_EXPIRED).end(!0), Ki.warn("".concat(this
							._className, ".onUserSigExpired: userSig 签名过期被踢下线")), 0 !== this
						.getModule(Xc).getStatusInstanceID() && (this.emitOuterEvent(oo
							.KICKED_OUT, {
								type: ro.KICKED_OUT_USERSIG_EXPIRED
							}), this._moduleManager.reset())
				}
			}, {
				key: "reset",
				value: function() {
					Ki.log("".concat(this._className, ".reset")), this.resetReady(), this
						._helloInterval = 120, this._lastLoginTs = 0
				}
			}]), n
		}(pl);

	function fv() {
		return null
	}
	var _v = function() {
			function e(t) {
				o(this, e), this._moduleManager = t, this._className = "StorageModule", this._storageQueue =
					new Map, this._errorTolerantHandle()
			}
			return a(e, [{
				key: "_errorTolerantHandle",
				value: function() {
					ai || !Ji(window) && !Ji(window.localStorage) || (this.getItem = fv, this
						.setItem = fv, this.removeItem = fv, this.clear = fv)
				}
			}, {
				key: "onCheckTimer",
				value: function(e) {
					if (e % 20 == 0) {
						if (0 === this._storageQueue.size) return;
						this._doFlush()
					}
				}
			}, {
				key: "_doFlush",
				value: function() {
					try {
						var e, t = D(this._storageQueue);
						try {
							for (t.s(); !(e = t.n()).done;) {
								var n = m(e.value, 2),
									o = n[0],
									r = n[1];
								this._setStorageSync(this._getKey(o), r)
							}
						} catch (a) {
							t.e(a)
						} finally {
							t.f()
						}
						this._storageQueue.clear()
					} catch (_M) {
						Ki.warn("".concat(this._className, "._doFlush error:"), _M)
					}
				}
			}, {
				key: "_getPrefix",
				value: function() {
					var e = this._moduleManager.getModule(Xc);
					return "TIM_".concat(e.getSDKAppID(), "_").concat(e.getUserID(), "_")
				}
			}, {
				key: "_getKey",
				value: function(e) {
					return "".concat(this._getPrefix()).concat(e)
				}
			}, {
				key: "getItem",
				value: function(e) {
					var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
					try {
						var n = t ? this._getKey(e) : e;
						return this._getStorageSync(n)
					} catch (_M) {
						return Ki.warn("".concat(this._className, ".getItem error:"), _M), {}
					}
				}
			}, {
				key: "setItem",
				value: function(e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
						o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
					if (n) {
						var r = o ? this._getKey(e) : e;
						this._setStorageSync(r, t)
					} else this._storageQueue.set(e, t)
				}
			}, {
				key: "clear",
				value: function() {
					try {
						ai ? ii.clearStorageSync() : localStorage && localStorage.clear()
					} catch (_M) {
						Ki.warn("".concat(this._className, ".clear error:"), _M)
					}
				}
			}, {
				key: "removeItem",
				value: function(e) {
					var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
					try {
						var n = t ? this._getKey(e) : e;
						this._removeStorageSync(n)
					} catch (_M) {
						Ki.warn("".concat(this._className, ".removeItem error:"), _M)
					}
				}
			}, {
				key: "getSize",
				value: function(e) {
					var t = this,
						n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] :
						"b";
					try {
						var o = {
							size: 0,
							limitSize: 5242880,
							unit: n
						};
						if (Object.defineProperty(o, "leftSize", {
								enumerable: !0,
								get: function() {
									return o.limitSize - o.size
								}
							}), ai && (o.limitSize = 1024 * ii.getStorageInfoSync().limitSize),
							e) o.size = JSON.stringify(this.getItem(e)).length + this._getKey(e)
							.length;
						else if (ai) {
							var r = ii.getStorageInfoSync(),
								a = r.keys;
							a.forEach((function(e) {
								o.size += JSON.stringify(t._getStorageSync(e))
									.length + t._getKey(e).length
							}))
						} else if (localStorage)
							for (var s in localStorage) localStorage.hasOwnProperty(s) && (o
								.size += localStorage.getItem(s).length + s.length);
						return this._convertUnit(o)
					} catch (_M) {
						Ki.warn("".concat(this._className, " error:"), _M)
					}
				}
			}, {
				key: "_convertUnit",
				value: function(e) {
					var t = {},
						n = e.unit;
					for (var o in t.unit = n, e) "number" == typeof e[o] && ("kb" === n
						.toLowerCase() ? t[o] = Math.round(e[o] / 1024) : "mb" === n
						.toLowerCase() ? t[o] = Math.round(e[o] / 1024 / 1024) : t[o] = e[o]
						);
					return t
				}
			}, {
				key: "_setStorageSync",
				value: function(e, t) {
					ai ? oi ? my.setStorageSync({
						key: e,
						data: t
					}) : ii.setStorageSync(e, t) : localStorage && localStorage.setItem(e,
						JSON.stringify(t))
				}
			}, {
				key: "_getStorageSync",
				value: function(e) {
					return ai ? oi ? my.getStorageSync({
						key: e
					}).data : ii.getStorageSync(e) : localStorage ? JSON.parse(localStorage
						.getItem(e)) : {}
				}
			}, {
				key: "_removeStorageSync",
				value: function(e) {
					ai ? oi ? my.removeStorageSync({
						key: e
					}) : ii.removeStorageSync(e) : localStorage && localStorage.removeItem(
						e)
				}
			}, {
				key: "reset",
				value: function() {
					Ki.log("".concat(this._className, ".reset")), this._doFlush()
				}
			}]), e
		}(),
		mv = function() {
			function e(t) {
				o(this, e), this._className = "SSOLogBody", this._report = []
			}
			return a(e, [{
				key: "pushIn",
				value: function(e) {
					Ki.debug("".concat(this._className, ".pushIn"), this._report.length, e),
						this._report.push(e)
				}
			}, {
				key: "backfill",
				value: function(e) {
					var t;
					Wi(e) && 0 !== e.length && (Ki.debug("".concat(this._className,
							".backfill"), this._report.length, e.length), (t = this._report)
						.unshift.apply(t, v(e)))
				}
			}, {
				key: "getLogsNumInMemory",
				value: function() {
					return this._report.length
				}
			}, {
				key: "isEmpty",
				value: function() {
					return 0 === this._report.length
				}
			}, {
				key: "_reset",
				value: function() {
					this._report.length = 0, this._report = []
				}
			}, {
				key: "getLogsInMemory",
				value: function() {
					var e = this._report.slice();
					return this._reset(), e
				}
			}]), e
		}(),
		vv = function(e) {
			var t = e.getModule(Xc);
			return {
				SDKType: 10,
				SDKAppID: t.getSDKAppID(),
				SDKVersion: t.getVersion(),
				tinyID: Number(t.getTinyID()),
				userID: t.getUserID(),
				platform: e.getPlatform(),
				instanceID: t.getInstanceID(),
				traceID: Ui()
			}
		},
		Mv = function(e) {
			i(r, e);
			var n = _(r);

			function r(e) {
				var t;
				o(this, r), (t = n.call(this, e))._className = "EventStatModule", t.TAG = "im-ssolog-event", t
					._reportBody = new mv, t.MIN_THRESHOLD = 20, t.MAX_THRESHOLD = 100, t.WAITING_TIME = 6e4, t
					.REPORT_LEVEL = [4, 5, 6], t.REPORT_SDKAPPID_BLACKLIST = [], t.REPORT_TINYID_WHITELIST = [],
					t._lastReportTime = Date.now();
				var a = t.getInnerEmitterInstance();
				return a.on(Om.CONTEXT_A2KEY_AND_TINYID_UPDATED, t._onLoginSuccess, h(t)), a.on(Om
					.CLOUD_CONFIG_UPDATED, t._onCloudConfigUpdated, h(t)), t
			}
			return a(r, [{
				key: "reportAtOnce",
				value: function() {
					Ki.debug("".concat(this._className, ".reportAtOnce")), this._report()
				}
			}, {
				key: "_onLoginSuccess",
				value: function() {
					var e = this,
						t = this.getModule(Qc),
						n = t.getItem(this.TAG, !1);
					!Lu(n) && Qi(n.forEach) && (Ki.log("".concat(this._className,
						"._onLoginSuccess get ssolog in storage, count:").concat(n
						.length)), n.forEach((function(t) {
						e._reportBody.pushIn(t)
					})), t.removeItem(this.TAG, !1))
				}
			}, {
				key: "_onCloudConfigUpdated",
				value: function() {
					var e = this.getCloudConfig("evt_rpt_threshold"),
						t = this.getCloudConfig("evt_rpt_waiting"),
						n = this.getCloudConfig("evt_rpt_level"),
						o = this.getCloudConfig("evt_rpt_sdkappid_bl"),
						r = this.getCloudConfig("evt_rpt_tinyid_wl");
					Ji(e) || (this.MIN_THRESHOLD = Number(e)), Ji(t) || (this.WAITING_TIME =
						Number(t)), Ji(n) || (this.REPORT_LEVEL = n.split(",").map((
						function(e) {
							return Number(e)
						}))), Ji(o) || (this.REPORT_SDKAPPID_BLACKLIST = o.split(",").map((
						function(e) {
							return Number(e)
						}))), Ji(r) || (this.REPORT_TINYID_WHITELIST = r.split(","))
				}
			}, {
				key: "pushIn",
				value: function(e) {
					e instanceof jd && (e.updateTimeStamp(), this._reportBody.pushIn(e), this
						._reportBody.getLogsNumInMemory() >= this.MIN_THRESHOLD && this
						._report())
				}
			}, {
				key: "onCheckTimer",
				value: function() {
					Date.now() < this._lastReportTime + this.WAITING_TIME || this._reportBody
						.isEmpty() || this._report()
				}
			}, {
				key: "_filterLogs",
				value: function(e) {
					var t = this,
						n = this.getModule(Xc),
						o = n.getSDKAppID(),
						r = n.getTinyID();
					return ku(this.REPORT_SDKAPPID_BLACKLIST, o) && !Nu(this
						.REPORT_TINYID_WHITELIST, r) ? [] : e.filter((function(e) {
						return t.REPORT_LEVEL.includes(e.level)
					}))
				}
			}, {
				key: "_report",
				value: function() {
					var e = this;
					if (!this._reportBody.isEmpty()) {
						var n = this._reportBody.getLogsInMemory(),
							o = this._filterLogs(n);
						if (0 !== o.length) {
							var r = {
								header: vv(this),
								event: o
							};
							this.request({
								protocolName: gp,
								requestData: t({}, r)
							}).then((function() {
								e._lastReportTime = Date.now()
							})).catch((function(t) {
								Ki.warn("".concat(e._className,
										".report failed. networkType:").concat(e
										.getNetworkType(), " error:"), t), e
									._reportBody.backfill(n), e._reportBody
									.getLogsNumInMemory() > e.MAX_THRESHOLD && e
									._flushAtOnce()
							}))
						} else this._lastReportTime = Date.now()
					}
				}
			}, {
				key: "_flushAtOnce",
				value: function() {
					var e = this.getModule(Qc),
						t = e.getItem(this.TAG, !1),
						n = this._reportBody.getLogsInMemory();
					if (Lu(t)) Ki.log("".concat(this._className, "._flushAtOnce count:").concat(
						n.length)), e.setItem(this.TAG, n, !0, !1);
					else {
						var o = n.concat(t);
						o.length > this.MAX_THRESHOLD && (o = o.slice(0, this.MAX_THRESHOLD)),
							Ki.log("".concat(this._className, "._flushAtOnce count:").concat(o
								.length)), e.setItem(this.TAG, o, !0, !1)
					}
				}
			}, {
				key: "reset",
				value: function() {
					Ki.log("".concat(this._className, ".reset")), this._lastReportTime = 0, this
						._report(), this.REPORT_SDKAPPID_BLACKLIST = [], this
						.REPORT_TINYID_WHITELIST = []
				}
			}]), r
		}(pl),
		yv = "none",
		Iv = "online",
		Tv = function() {
			function e(t) {
				o(this, e), this._moduleManager = t, this._networkType = "", this._className =
					"NetMonitorModule", this.MAX_WAIT_TIME = 3e3
			}
			return a(e, [{
				key: "start",
				value: function() {
					var e = this;
					if (ai) {
						ii.getNetworkType({
							success: function(t) {
								e._networkType = t.networkType, t.networkType ===
									yv ? Ki.warn("".concat(e._className,
										".start no network, please check!")) : Ki
									.info("".concat(e._className,
										".start networkType:").concat(t
										.networkType))
							}
						});
						var t = this._onNetworkStatusChange.bind(this);
						ii.offNetworkStatusChange && (ri || ti ? ii.offNetworkStatusChange(t) :
							ii.offNetworkStatusChange()), ii.onNetworkStatusChange(t)
					} else this._networkType = Iv
				}
			}, {
				key: "_onNetworkStatusChange",
				value: function(e) {
					e.isConnected ? (Ki.info("".concat(this._className,
								"._onNetworkStatusChange previousNetworkType:").concat(this
								._networkType, " currentNetworkType:").concat(e
							.networkType)), this._networkType !== e.networkType && this
						._moduleManager.getModule(sl).reConnect()) : Ki.warn("".concat(this
						._className, "._onNetworkStatusChange no network, please check!"
						));
					this._networkType = e.networkType
				}
			}, {
				key: "probe",
				value: function() {
					var e = this;
					return new Promise((function(t, n) {
						if (ai) ii.getNetworkType({
							success: function(n) {
								e._networkType = n.networkType, n
									.networkType === yv ? (Ki.warn(""
										.concat(e._className,
											".probe no network, please check!"
											)), t([!1, n
										.networkType])) : (Ki.info(""
										.concat(e._className,
											".probe networkType:")
										.concat(n.networkType)), t([
										!0, n.networkType
									]))
							}
						});
						else if (window && window.fetch) fetch("".concat(du(),
							"//web.sdk.qcloud.com/im/assets/speed.xml?random="
							).concat(Math.random())).then((function(e) {
							e.ok ? t([!0, Iv]) : t([!1, yv])
						})).catch((function(e) {
							t([!1, yv])
						}));
						else {
							var o = new XMLHttpRequest,
								r = setTimeout((function() {
									Ki.warn("".concat(e._className,
											".probe fetch timeout. Probably no network, please check!"
											)), o.abort(), e._networkType =
										yv, t([!1, yv])
								}), e.MAX_WAIT_TIME);
							o.onreadystatechange = function() {
								4 === o.readyState && (clearTimeout(r), 200 ===
									o.status || 304 === o.status ? (this
										._networkType = Iv, t([!0, Iv])) : (
										Ki.warn("".concat(this.className,
												".probe fetch status:")
											.concat(o.status,
												". Probably no network, please check!"
												)), this._networkType = yv,
										t([!1, yv])))
							}, o.open("GET", "".concat(du(),
								"//web.sdk.qcloud.com/im/assets/speed.xml?random="
								).concat(Math.random())), o.send()
						}
					}))
				}
			}, {
				key: "getNetworkType",
				value: function() {
					return this._networkType
				}
			}]), e
		}(),
		Sv = C((function(e) {
			var t = Object.prototype.hasOwnProperty,
				n = "~";

			function o() {}

			function r(e, t, n) {
				this.fn = e, this.context = t, this.once = n || !1
			}

			function a(e, t, o, a, s) {
				if ("function" != typeof o) throw new TypeError("The listener must be a function");
				var i = new r(o, a || e, s),
					u = n ? n + t : t;
				return e._events[u] ? e._events[u].fn ? e._events[u] = [e._events[u], i] : e._events[u]
					.push(i) : (e._events[u] = i, e._eventsCount++), e
			}

			function s(e, t) {
				0 == --e._eventsCount ? e._events = new o : delete e._events[t]
			}

			function i() {
				this._events = new o, this._eventsCount = 0
			}
			Object.create && (o.prototype = Object.create(null), (new o).__proto__ || (n = !1)), i
				.prototype.eventNames = function() {
					var e, o, r = [];
					if (0 === this._eventsCount) return r;
					for (o in e = this._events) t.call(e, o) && r.push(n ? o.slice(1) : o);
					return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
				}, i.prototype.listeners = function(e) {
					var t = n ? n + e : e,
						o = this._events[t];
					if (!o) return [];
					if (o.fn) return [o.fn];
					for (var r = 0, a = o.length, s = new Array(a); r < a; r++) s[r] = o[r].fn;
					return s
				}, i.prototype.listenerCount = function(e) {
					var t = n ? n + e : e,
						o = this._events[t];
					return o ? o.fn ? 1 : o.length : 0
				}, i.prototype.emit = function(e, t, o, r, a, s) {
					var i = n ? n + e : e;
					if (!this._events[i]) return !1;
					var u, c, l = this._events[i],
						p = arguments.length;
					if (l.fn) {
						switch (l.once && this.removeListener(e, l.fn, void 0, !0), p) {
							case 1:
								return l.fn.call(l.context), !0;
							case 2:
								return l.fn.call(l.context, t), !0;
							case 3:
								return l.fn.call(l.context, t, o), !0;
							case 4:
								return l.fn.call(l.context, t, o, r), !0;
							case 5:
								return l.fn.call(l.context, t, o, r, a), !0;
							case 6:
								return l.fn.call(l.context, t, o, r, a, s), !0
						}
						for (c = 1, u = new Array(p - 1); c < p; c++) u[c - 1] = arguments[c];
						l.fn.apply(l.context, u)
					} else {
						var d, g = l.length;
						for (c = 0; c < g; c++) switch (l[c].once && this.removeListener(e, l[c].fn,
							void 0, !0), p) {
							case 1:
								l[c].fn.call(l[c].context);
								break;
							case 2:
								l[c].fn.call(l[c].context, t);
								break;
							case 3:
								l[c].fn.call(l[c].context, t, o);
								break;
							case 4:
								l[c].fn.call(l[c].context, t, o, r);
								break;
							default:
								if (!u)
									for (d = 1, u = new Array(p - 1); d < p; d++) u[d - 1] =
										arguments[d];
								l[c].fn.apply(l[c].context, u)
						}
					}
					return !0
				}, i.prototype.on = function(e, t, n) {
					return a(this, e, t, n, !1)
				}, i.prototype.once = function(e, t, n) {
					return a(this, e, t, n, !0)
				}, i.prototype.removeListener = function(e, t, o, r) {
					var a = n ? n + e : e;
					if (!this._events[a]) return this;
					if (!t) return s(this, a), this;
					var i = this._events[a];
					if (i.fn) i.fn !== t || r && !i.once || o && i.context !== o || s(this, a);
					else {
						for (var u = 0, c = [], l = i.length; u < l; u++)(i[u].fn !== t || r && !i[u]
							.once || o && i[u].context !== o) && c.push(i[u]);
						c.length ? this._events[a] = 1 === c.length ? c[0] : c : s(this, a)
					}
					return this
				}, i.prototype.removeAllListeners = function(e) {
					var t;
					return e ? (t = n ? n + e : e, this._events[t] && s(this, t)) : (this._events =
						new o, this._eventsCount = 0), this
				}, i.prototype.off = i.prototype.removeListener, i.prototype.addListener = i.prototype
				.on, i.prefixed = n, i.EventEmitter = i, e.exports = i
		})),
		Dv = function(e) {
			i(n, e);
			var t = _(n);

			function n(e) {
				var r;
				return o(this, n), (r = t.call(this, e))._className = "BigDataChannelModule", r.FILETYPE = {
						SOUND: 2106,
						FILE: 2107,
						VIDEO: 2113
					}, r._bdh_download_server = "grouptalk.c2c.qq.com", r._BDHBizID = 10001, r._authKey = "", r
					._expireTime = 0, r.getInnerEmitterInstance().on(Om.CONTEXT_A2KEY_AND_TINYID_UPDATED, r
						._getAuthKey, h(r)), r
			}
			return a(n, [{
				key: "_getAuthKey",
				value: function() {
					var e = this;
					this.request({
						protocolName: _l
					}).then((function(t) {
						t.data.authKey && (e._authKey = t.data.authKey, e
							._expireTime = parseInt(t.data.expireTime))
					}))
				}
			}, {
				key: "_isFromOlderVersion",
				value: function(e) {
					return !(!e.content || 2 === e.content.downloadFlag)
				}
			}, {
				key: "parseElements",
				value: function(e, t) {
					if (!Wi(e) || !t) return [];
					for (var n = [], o = null, r = 0; r < e.length; r++) o = e[r], this
						._needParse(o) ? n.push(this._parseElement(o, t)) : n.push(e[r]);
					return n
				}
			}, {
				key: "_needParse",
				value: function(e) {
					return !e.cloudCustomData && !(!this._isFromOlderVersion(e) || e.type !== ro
						.MSG_AUDIO && e.type !== ro.MSG_FILE && e.type !== ro.MSG_VIDEO)
				}
			}, {
				key: "_parseElement",
				value: function(e, t) {
					switch (e.type) {
						case ro.MSG_AUDIO:
							return this._parseAudioElement(e, t);
						case ro.MSG_FILE:
							return this._parseFileElement(e, t);
						case ro.MSG_VIDEO:
							return this._parseVideoElement(e, t)
					}
				}
			}, {
				key: "_parseAudioElement",
				value: function(e, t) {
					return e.content.url = this._genAudioUrl(e.content.uuid, t), e
				}
			}, {
				key: "_parseFileElement",
				value: function(e, t) {
					return e.content.url = this._genFileUrl(e.content.uuid, t, e.content
						.fileName), e
				}
			}, {
				key: "_parseVideoElement",
				value: function(e, t) {
					return e.content.url = this._genVideoUrl(e.content.uuid, t), e
				}
			}, {
				key: "_genAudioUrl",
				value: function(e, t) {
					if ("" === this._authKey) return Ki.warn("".concat(this._className,
						"._genAudioUrl no authKey!")), "";
					var n = this.getModule(Xc).getSDKAppID();
					return "https://".concat(this._bdh_download_server,
							"/asn.com/stddownload_common_file?authkey=").concat(this._authKey,
							"&bid=").concat(this._BDHBizID, "&subbid=").concat(n, "&fileid=")
						.concat(e, "&filetype=").concat(this.FILETYPE.SOUND, "&openid=").concat(
							t, "&ver=0")
				}
			}, {
				key: "_genFileUrl",
				value: function(e, t, n) {
					if ("" === this._authKey) return Ki.warn("".concat(this._className,
						"._genFileUrl no authKey!")), "";
					n || (n = "".concat(Math.floor(1e5 * Math.random()), "-").concat(Date
					.now()));
					var o = this.getModule(Xc).getSDKAppID();
					return "https://".concat(this._bdh_download_server,
							"/asn.com/stddownload_common_file?authkey=").concat(this._authKey,
							"&bid=").concat(this._BDHBizID, "&subbid=").concat(o, "&fileid=")
						.concat(e, "&filetype=").concat(this.FILETYPE.FILE, "&openid=").concat(
							t, "&ver=0&filename=").concat(encodeURIComponent(n))
				}
			}, {
				key: "_genVideoUrl",
				value: function(e, t) {
					if ("" === this._authKey) return Ki.warn("".concat(this._className,
						"._genVideoUrl no authKey!")), "";
					var n = this.getModule(Xc).getSDKAppID();
					return "https://".concat(this._bdh_download_server,
							"/asn.com/stddownload_common_file?authkey=").concat(this._authKey,
							"&bid=").concat(this._BDHBizID, "&subbid=").concat(n, "&fileid=")
						.concat(e, "&filetype=").concat(this.FILETYPE.VIDEO, "&openid=").concat(
							t, "&ver=0")
				}
			}, {
				key: "reset",
				value: function() {
					Ki.log("".concat(this._className, ".reset")), this._authKey = "", this
						.expireTime = 0
				}
			}]), n
		}(pl),
		Ev = function(e) {
			i(r, e);
			var n = _(r);

			function r(e) {
				var t;
				return o(this, r), (t = n.call(this, e))._className = "UploadModule", t.TIMUploadPlugin = null,
					t.timUploadPlugin = null, t.COSSDK = null, t._cosUploadMethod = null, t.expiredTimeLimit =
					600, t.appid = 0, t.bucketName = "", t.ciUrl = "", t.directory = "", t.downloadUrl = "", t
					.uploadUrl = "", t.region = "ap-shanghai", t.cos = null, t.cosOptions = {
						secretId: "",
						secretKey: "",
						sessionToken: "",
						expiredTime: 0
					}, t.uploadFileType = "", t.duration = 900, t.tryCount = 0, t.getInnerEmitterInstance().on(
						Om.CONTEXT_A2KEY_AND_TINYID_UPDATED, t._init, h(t)), t
			}
			return a(r, [{
				key: "_init",
				value: function() {
					var e = "".concat(this._className, "._init"),
						t = this.getModule(ol);
					if (this.TIMUploadPlugin = t.getPlugin("tim-upload-plugin"), this
						.TIMUploadPlugin) this._initUploaderMethod();
					else {
						var n = ai ? "cos-wx-sdk" : "cos-js-sdk";
						this.COSSDK = t.getPlugin(n), this.COSSDK ? (this
						._getAuthorizationKey(), Ki.warn("".concat(e,
								" v2.9.2起推荐使用 tim-upload-plugin 代替 ").concat(n,
								"，上传更快更安全。详细请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#registerPlugin"
								))) : Ki.warn("".concat(e,
							" 没有检测到上传插件，将无法发送图片、音频、视频、文件等类型的消息。详细请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#registerPlugin"
							))
					}
				}
			}, {
				key: "_getAuthorizationKey",
				value: function() {
					var e = this,
						t = new jd(ng),
						n = Math.ceil(Date.now() / 1e3);
					this.request({
						protocolName: pp,
						requestData: {
							duration: this.expiredTimeLimit
						}
					}).then((function(o) {
						var r = o.data;
						Ki.log("".concat(e._className,
							"._getAuthorizationKey ok. data:"), r);
						var a = r.expiredTime - n;
						t.setMessage("requestId:".concat(r.requestId,
									" requestTime:").concat(n, " expiredTime:")
								.concat(r.expiredTime, " diff:").concat(a, "s"))
							.setNetworkType(e.getNetworkType()).end(), !ai && r
							.region && (e.region = r.region), e.appid = r.appid, e
							.bucketName = r.bucketName, e.ciUrl = r.ciUrl, e
							.directory = r.directory, e.downloadUrl = r.downloadUrl,
							e.uploadUrl = r.uploadUrl, e.cosOptions = {
								secretId: r.secretId,
								secretKey: r.secretKey,
								sessionToken: r.sessionToken,
								expiredTime: r.expiredTime
							}, Ki.log("".concat(e._className,
								"._getAuthorizationKey ok. region:").concat(e
								.region, " bucketName:").concat(e.bucketName)), e
							._initUploaderMethod()
					})).catch((function(n) {
						e.probeNetwork().then((function(e) {
							var o = m(e, 2),
								r = o[0],
								a = o[1];
							t.setError(n, r, a).end()
						})), Ki.warn("".concat(e._className,
							"._getAuthorizationKey failed. error:"), n)
					}))
				}
			}, {
				key: "_getCosPreSigUrl",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, "._getCosPreSigUrl"),
						o = Math.ceil(Date.now() / 1e3),
						r = new jd(og);
					return this.request({
						protocolName: dp,
						requestData: {
							fileType: e.fileType,
							fileName: e.fileName,
							uploadMethod: e.uploadMethod,
							duration: e.duration
						}
					}).then((function(e) {
						t.tryCount = 0;
						var a = e.data || {},
							s = a.expiredTime - o;
						return Ki.log("".concat(n, " ok. data:"), a), r.setMessage(
								"requestId:".concat(a.requestId, " expiredTime:")
								.concat(a.expiredTime, " diff:").concat(s, "s"))
							.setNetworkType(t.getNetworkType()).end(), a
					})).catch((function(o) {
						return -1 === o.code && (o.code = Tp.COS_GET_SIG_FAIL), t
							.probeNetwork().then((function(e) {
								var t = m(e, 2),
									n = t[0],
									a = t[1];
								r.setError(o, n, a).end()
							})), Ki.warn("".concat(n, " failed. error:"), o), t
							.tryCount < 1 ? (t.tryCount++, t._getCosPreSigUrl(e)) :
							(t.tryCount = 0, cm({
								code: Tp.COS_GET_SIG_FAIL,
								message: Lp
							}))
					}))
				}
			}, {
				key: "_initUploaderMethod",
				value: function() {
					var e = this;
					if (this.TIMUploadPlugin) return this.timUploadPlugin = new this
						.TIMUploadPlugin, void(this._cosUploadMethod = function(t, n) {
							e.timUploadPlugin.uploadFile(t, n)
						});
					this.appid && (this.cos = ai ? new this.COSSDK({
						ForcePathStyle: !0,
						getAuthorization: this._getAuthorization.bind(this)
					}) : new this.COSSDK({
						getAuthorization: this._getAuthorization.bind(this)
					}), this._cosUploadMethod = ai ? function(t, n) {
						e.cos.postObject(t, n)
					} : function(t, n) {
						e.cos.uploadFiles(t, n)
					})
				}
			}, {
				key: "onCheckTimer",
				value: function(e) {
					this.COSSDK && (this.TIMUploadPlugin || this.isLoggedIn() && e % 60 == 0 &&
						Math.ceil(Date.now() / 1e3) >= this.cosOptions.expiredTime - 120 &&
						this._getAuthorizationKey())
				}
			}, {
				key: "_getAuthorization",
				value: function(e, t) {
					t({
						TmpSecretId: this.cosOptions.secretId,
						TmpSecretKey: this.cosOptions.secretKey,
						XCosSecurityToken: this.cosOptions.sessionToken,
						ExpiredTime: this.cosOptions.expiredTime
					})
				}
			}, {
				key: "upload",
				value: function(e) {
					if (!0 === e.getRelayFlag()) return Promise.resolve();
					var t = this.getModule(ll);
					switch (e.type) {
						case ro.MSG_IMAGE:
							return t.addTotalCount(Fd), this._uploadImage(e);
						case ro.MSG_FILE:
							return t.addTotalCount(Fd), this._uploadFile(e);
						case ro.MSG_AUDIO:
							return t.addTotalCount(Fd), this._uploadAudio(e);
						case ro.MSG_VIDEO:
							return t.addTotalCount(Fd), this._uploadVideo(e);
						default:
							return Promise.resolve()
					}
				}
			}, {
				key: "_uploadImage",
				value: function(e) {
					var n = this.getModule(Hc),
						o = e.getElements()[0],
						r = n.getMessageOptionByID(e.ID);
					return this.doUploadImage({
						file: r.payload.file,
						to: r.to,
						onProgress: function(e) {
							if (o.updatePercent(e), Qi(r.onProgress)) try {
								r.onProgress(e)
							} catch (t) {
								return cm({
									code: Tp
										.MESSAGE_ONPROGRESS_FUNCTION_ERROR,
									message: Gp
								})
							}
						}
					}).then((function(n) {
						var r = n.location,
							a = n.fileType,
							s = n.fileSize,
							i = n.width,
							u = n.height,
							c = gu(r);
						o.updateImageFormat(a);
						var l = Du({
								originUrl: c,
								originWidth: i,
								originHeight: u,
								min: 198
							}),
							p = Du({
								originUrl: c,
								originWidth: i,
								originHeight: u,
								min: 720
							});
						return o.updateImageInfoArray([{
							size: s,
							url: c,
							width: i,
							height: u
						}, t({}, p), t({}, l)]), e
					}))
				}
			}, {
				key: "_uploadFile",
				value: function(e) {
					var t = this.getModule(Hc),
						n = e.getElements()[0],
						o = t.getMessageOptionByID(e.ID);
					return this.doUploadFile({
						file: o.payload.file,
						to: o.to,
						onProgress: function(e) {
							if (n.updatePercent(e), Qi(o.onProgress)) try {
								o.onProgress(e)
							} catch (t) {
								return cm({
									code: Tp
										.MESSAGE_ONPROGRESS_FUNCTION_ERROR,
									message: Gp
								})
							}
						}
					}).then((function(t) {
						var o = t.location,
							r = gu(o);
						return n.updateFileUrl(r), e
					}))
				}
			}, {
				key: "_uploadAudio",
				value: function(e) {
					var t = this.getModule(Hc),
						n = e.getElements()[0],
						o = t.getMessageOptionByID(e.ID);
					return this.doUploadAudio({
						file: o.payload.file,
						to: o.to,
						onProgress: function(e) {
							if (n.updatePercent(e), Qi(o.onProgress)) try {
								o.onProgress(e)
							} catch (t) {
								return cm({
									code: Tp
										.MESSAGE_ONPROGRESS_FUNCTION_ERROR,
									message: Gp
								})
							}
						}
					}).then((function(t) {
						var o = t.location,
							r = gu(o);
						return n.updateAudioUrl(r), e
					}))
				}
			}, {
				key: "_uploadVideo",
				value: function(e) {
					var t = this.getModule(Hc),
						n = e.getElements()[0],
						o = t.getMessageOptionByID(e.ID);
					return this.doUploadVideo({
						file: o.payload.file,
						to: o.to,
						onProgress: function(e) {
							if (n.updatePercent(e), Qi(o.onProgress)) try {
								o.onProgress(e)
							} catch (t) {
								return cm({
									code: Tp
										.MESSAGE_ONPROGRESS_FUNCTION_ERROR,
									message: Gp
								})
							}
						}
					}).then((function(t) {
						var o = gu(t.location);
						return n.updateVideoUrl(o), e
					}))
				}
			}, {
				key: "doUploadImage",
				value: function(e) {
					if (!e.file) return cm({
						code: Tp.MESSAGE_IMAGE_SELECT_FILE_FIRST,
						message: qp
					});
					var t = this._checkImageType(e.file);
					if (!0 !== t) return t;
					var n = this._checkImageSize(e.file);
					if (!0 !== n) return n;
					var o = null;
					return this._setUploadFileType(wm), this.uploadByCOS(e).then((function(e) {
						return o = e, t = "https://".concat(e.location), ai ?
							new Promise((function(e, n) {
								ii.getImageInfo({
									src: t,
									success: function(t) {
										e({
											width: t
												.width,
											height: t
												.height
										})
									},
									fail: function() {
										e({
											width: 0,
											height: 0
										})
									}
								})
							})) : Mi && 9 === yi ? Promise.resolve({
								width: 0,
								height: 0
							}) : new Promise((function(e, n) {
								var o = new Image;
								o.onload = function() {
									e({
										width: this.width,
										height: this.height
									}), o = null
								}, o.onerror = function() {
									e({
										width: 0,
										height: 0
									}), o = null
								}, o.src = t
							}));
						var t
					})).then((function(e) {
						return o.width = e.width, o.height = e.height, Promise
							.resolve(o)
					}))
				}
			}, {
				key: "_checkImageType",
				value: function(e) {
					var t = "";
					return t = ai ? e.url.slice(e.url.lastIndexOf(".") + 1) : e.files[0].name
						.slice(e.files[0].name.lastIndexOf(".") + 1), Rm.indexOf(t
						.toLowerCase()) >= 0 || cm({
							code: Tp.MESSAGE_IMAGE_TYPES_LIMIT,
							message: xp
						})
				}
			}, {
				key: "_checkImageSize",
				value: function(e) {
					var t = 0;
					return 0 === (t = ai ? e.size : e.files[0].size) ? cm({
						code: Tp.MESSAGE_FILE_IS_EMPTY,
						message: "".concat(Pp)
					}) : t < 20971520 || cm({
						code: Tp.MESSAGE_IMAGE_SIZE_LIMIT,
						message: "".concat(Vp)
					})
				}
			}, {
				key: "doUploadFile",
				value: function(e) {
					var t = null;
					return e.file ? e.file.files[0].size > 104857600 ? cm(t = {
						code: Tp.MESSAGE_FILE_SIZE_LIMIT,
						message: Wp
					}) : 0 === e.file.files[0].size ? (t = {
						code: Tp.MESSAGE_FILE_IS_EMPTY,
						message: "".concat(Pp)
					}, cm(t)) : (this._setUploadFileType(Um), this.uploadByCOS(e)) : cm(
					t = {
						code: Tp.MESSAGE_FILE_SELECT_FILE_FIRST,
						message: zp
					})
				}
			}, {
				key: "doUploadVideo",
				value: function(e) {
					return e.file.videoFile.size > 104857600 ? cm({
						code: Tp.MESSAGE_VIDEO_SIZE_LIMIT,
						message: "".concat(jp)
					}) : 0 === e.file.videoFile.size ? cm({
						code: Tp.MESSAGE_FILE_IS_EMPTY,
						message: "".concat(Pp)
					}) : -1 === bm.indexOf(e.file.videoFile.type) ? cm({
						code: Tp.MESSAGE_VIDEO_TYPES_LIMIT,
						message: "".concat($p)
					}) : (this._setUploadFileType(Pm), ai ? this.handleVideoUpload({
						file: e.file.videoFile,
						onProgress: e.onProgress
					}) : si ? this.handleVideoUpload(e) : void 0)
				}
			}, {
				key: "handleVideoUpload",
				value: function(e) {
					var t = this;
					return new Promise((function(n, o) {
						t.uploadByCOS(e).then((function(e) {
							n(e)
						})).catch((function() {
							t.uploadByCOS(e).then((function(e) {
								n(e)
							})).catch((function() {
								o(new am({
									code: Tp
										.MESSAGE_VIDEO_UPLOAD_FAIL,
									message: Hp
								}))
							}))
						}))
					}))
				}
			}, {
				key: "doUploadAudio",
				value: function(e) {
					return e.file ? e.file.size > 20971520 ? cm(new am({
						code: Tp.MESSAGE_AUDIO_SIZE_LIMIT,
						message: "".concat(Bp)
					})) : 0 === e.file.size ? cm(new am({
						code: Tp.MESSAGE_FILE_IS_EMPTY,
						message: "".concat(Pp)
					})) : (this._setUploadFileType(Gm), this.uploadByCOS(e)) : cm(new am({
						code: Tp.MESSAGE_AUDIO_UPLOAD_FAIL,
						message: Kp
					}))
				}
			}, {
				key: "uploadByCOS",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, ".uploadByCOS");
					if (!Qi(this._cosUploadMethod)) return Ki.warn("".concat(n,
						" 没有检测到上传插件，将无法发送图片、音频、视频、文件等类型的消息。详细请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#registerPlugin"
						)), cm({
						code: Tp.COS_UNDETECTED,
						message: Op
					});
					if (this.timUploadPlugin) return this._uploadWithPreSigUrl(e);
					var o = new jd(rg),
						r = Date.now(),
						a = ai ? e.file : e.file.files[0];
					return new Promise((function(s, i) {
						var u = ai ? t._createCosOptionsWXMiniApp(e) : t
							._createCosOptionsWeb(e),
							c = t;
						t._cosUploadMethod(u, (function(e, u) {
							var l = Object.create(null);
							if (u) {
								if (e || Wi(u.files) && u.files[0]
									.error) {
									var p = new am({
										code: Tp
											.MESSAGE_FILE_UPLOAD_FAIL,
										message: Yp
									});
									return o.setError(p, !0, t
											.getNetworkType()).end(), Ki
										.log("".concat(n,
												" failed. error:"), u
											.files[0].error), 403 === u
										.files[0].error.statusCode && (
											Ki.warn("".concat(n,
												" failed. cos AccessKeyId was invalid, regain auth key!"
												)), t
											._getAuthorizationKey()),
										void i(p)
								}
								l.fileName = a.name, l.fileSize = a
									.size, l.fileType = a.type.slice(a
										.type.indexOf("/") + 1)
									.toLowerCase(), l.location = ai ? u
									.Location : u.files[0].data
									.Location;
								var d = Date.now() - r,
									g = c._formatFileSize(a.size),
									h = c._formatSpeed(1e3 * a.size /
									d),
									f = "size:".concat(g, " time:")
									.concat(d, "ms speed:").concat(h);
								Ki.log("".concat(n, " success. name:")
										.concat(a.name, " ").concat(f)),
									s(l);
								var _ = t.getModule(ll);
								return _.addCost(Fd, d), _.addFileSize(
										Fd, a.size), void o
									.setNetworkType(t.getNetworkType())
									.setMessage(f).end()
							}
							var m = new am({
								code: Tp
									.MESSAGE_FILE_UPLOAD_FAIL,
								message: Yp
							});
							o.setError(m, !0, c.getNetworkType()).end(),
								Ki.warn("".concat(n, " failed. error:"),
									e), 403 === e.statusCode && (Ki
									.warn("".concat(n,
										" failed. cos AccessKeyId was invalid, regain auth key!"
										)), t._getAuthorizationKey()),
								i(m)
						}))
					}))
				}
			}, {
				key: "_uploadWithPreSigUrl",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, "._uploadWithPreSigUrl"),
						o = ai ? e.file : e.file.files[0];
					return this._createCosOptionsPreSigUrl(e).then((function(e) {
						return new Promise((function(r, a) {
							var s = new jd(rg);
							Ki.time(Ld), t._cosUploadMethod(e, (
								function(e, i) {
									var u = Object.create(null);
									if (e || 403 === i
										.statusCode) {
										var c = new am({
											code: Tp
												.MESSAGE_FILE_UPLOAD_FAIL,
											message: Yp
										});
										return s.setError(c, !0,
												t
												.getNetworkType()
												).end(), Ki.log(
												"".concat(n,
													" failed, error:"
													), e),
											void a(c)
									}
									var l = i.data.location ||
										"";
									0 !== l.indexOf(
										"https://") && 0 !== l
										.indexOf("http://") || (
											l = l.split("//")[1]
											), u.fileName = o
										.name, u.fileSize = o
										.size, u.fileType = o
										.type.slice(o.type
											.indexOf("/") + 1)
										.toLowerCase(), u
										.location = l;
									var p = Ki.timeEnd(Ld),
										d = t._formatFileSize(o
											.size),
										g = t._formatSpeed(1e3 *
											o.size / p),
										h = "size:".concat(d,
											",time:").concat(p,
											"ms,speed:").concat(
											g);
									Ki.log("".concat(n,
											" success name:"
											).concat(o.name,
											",").concat(h)), s
										.setNetworkType(t
											.getNetworkType())
										.setMessage(h).end();
									var f = t.getModule(ll);
									f.addCost(Fd, p), f
										.addFileSize(Fd, o
										.size), r(u)
								}))
						}))
					}))
				}
			}, {
				key: "_formatFileSize",
				value: function(e) {
					return e < 1024 ? e + "B" : e < 1048576 ? Math.floor(e / 1024) + "KB" : Math
						.floor(e / 1048576) + "MB"
				}
			}, {
				key: "_formatSpeed",
				value: function(e) {
					return e <= 1048576 ? Au(e / 1024, 1) + "KB/s" : Au(e / 1048576, 1) + "MB/s"
				}
			}, {
				key: "_createCosOptionsWeb",
				value: function(e) {
					var t = this.getMyUserID(),
						n = this._genFileName(t, e.to, e.file.files[0].name);
					return {
						files: [{
							Bucket: "".concat(this.bucketName, "-").concat(this.appid),
							Region: this.region,
							Key: "".concat(this.directory, "/").concat(n),
							Body: e.file.files[0]
						}],
						SliceSize: 1048576,
						onProgress: function(t) {
							if ("function" == typeof e.onProgress) try {
								e.onProgress(t.percent)
							} catch (n) {
								Ki.warn("onProgress callback error:", n)
							}
						},
						onFileFinish: function(e, t, n) {}
					}
				}
			}, {
				key: "_createCosOptionsWXMiniApp",
				value: function(e) {
					var t = this.getMyUserID(),
						n = this._genFileName(t, e.to, e.file.name),
						o = e.file.url;
					return {
						Bucket: "".concat(this.bucketName, "-").concat(this.appid),
						Region: this.region,
						Key: "".concat(this.directory, "/").concat(n),
						FilePath: o,
						onProgress: function(t) {
							if (Ki.log(JSON.stringify(t)), "function" == typeof e
								.onProgress) try {
								e.onProgress(t.percent)
							} catch (n) {
								Ki.warn("onProgress callback error:", n)
							}
						}
					}
				}
			}, {
				key: "_createCosOptionsPreSigUrl",
				value: function(e) {
					var t = this,
						n = "",
						o = "",
						r = 0;
					return ai ? (n = this._genFileName(e.file.name), o = e.file.url, r = 1) : (
						n = this._genFileName("".concat(iu(999999))), o = e.file.files[0],
						r = 0), this._getCosPreSigUrl({
						fileType: this.uploadFileType,
						fileName: n,
						uploadMethod: r,
						duration: this.duration
					}).then((function(r) {
						var a = r.uploadUrl,
							s = r.downloadUrl;
						return {
							url: a,
							fileType: t.uploadFileType,
							fileName: n,
							resources: o,
							downloadUrl: s,
							onProgress: function(t) {
								if ("function" == typeof e.onProgress) try {
									e.onProgress(t.percent)
								} catch (n) {
									Ki.warn("onProgress callback error:",
										n), Ki.error(n)
								}
							}
						}
					}))
				}
			}, {
				key: "_genFileName",
				value: function(e) {
					return "".concat(Tu(), "-").concat(e)
				}
			}, {
				key: "_setUploadFileType",
				value: function(e) {
					this.uploadFileType = e
				}
			}, {
				key: "reset",
				value: function() {
					Ki.log("".concat(this._className, ".reset"))
				}
			}]), r
		}(pl),
		Cv = ["downloadKey", "pbDownloadKey", "messageList"],
		Av = function() {
			function e(t) {
				o(this, e), this._className = "MergerMessageHandler", this._messageModule = t
			}
			return a(e, [{
				key: "uploadMergerMessage",
				value: function(e, t) {
					var n = this;
					Ki.debug("".concat(this._className, ".uploadMergerMessage message:"), e,
						"messageBytes:".concat(t));
					var o = e.payload.messageList,
						r = o.length,
						a = new jd(hg);
					return this._messageModule.request({
						protocolName: vp,
						requestData: {
							messageList: o
						}
					}).then((function(e) {
						Ki.debug("".concat(n._className,
							".uploadMergerMessage ok. response:"), e.data);
						var o = e.data,
							s = o.pbDownloadKey,
							i = o.downloadKey,
							u = {
								pbDownloadKey: s,
								downloadKey: i,
								messageNumber: r
							};
						return a.setNetworkType(n._messageModule.getNetworkType())
							.setMessage("".concat(r, "-").concat(t, "-").concat(i))
							.end(), u
					})).catch((function(e) {
						throw Ki.warn("".concat(n._className,
								".uploadMergerMessage failed. error:"), e), n
							._messageModule.probeNetwork().then((function(t) {
								var n = m(t, 2),
									o = n[0],
									r = n[1];
								a.setError(e, o, r).end()
							})), e
					}))
				}
			}, {
				key: "downloadMergerMessage",
				value: function(e) {
					var n = this;
					Ki.debug("".concat(this._className, ".downloadMergerMessage message:"), e);
					var o = e.payload.downloadKey,
						r = new jd(fg);
					return r.setMessage("downloadKey:".concat(o)), this._messageModule.request({
						protocolName: Mp,
						requestData: {
							downloadKey: o
						}
					}).then((function(o) {
						if (Ki.debug("".concat(n._className,
								".downloadMergerMessage ok. response:"), o.data),
							Qi(e.clearElement)) {
							var a = e.payload,
								s = (a.downloadKey, a.pbDownloadKey, a.messageList,
									g(a, Cv));
							e.clearElement(), e.setElement({
								type: e.type,
								content: t({
									messageList: o.data.messageList
								}, s)
							})
						} else {
							var i = [];
							o.data.messageList.forEach((function(e) {
									if (!Lu(e)) {
										var t = new W_(e);
										i.push(t)
									}
								})), e.payload.messageList = i, e.payload
								.downloadKey = "", e.payload.pbDownloadKey = ""
						}
						return r.setNetworkType(n._messageModule.getNetworkType())
							.end(), e
					})).catch((function(e) {
						throw Ki.warn("".concat(n._className,
								".downloadMergerMessage failed. key:").concat(o,
								" error:"), e), n._messageModule.probeNetwork()
							.then((function(t) {
								var n = m(t, 2),
									o = n[0],
									a = n[1];
								r.setError(e, o, a).end()
							})), e
					}))
				}
			}, {
				key: "createMergerMessagePack",
				value: function(e, t, n) {
					return e.conversationType === ro.CONV_C2C ? this
						._createC2CMergerMessagePack(e, t, n) : this
						._createGroupMergerMessagePack(e, t, n)
				}
			}, {
				key: "_createC2CMergerMessagePack",
				value: function(e, t, n) {
					var o = null;
					t && (t.offlinePushInfo && (o = t.offlinePushInfo), !0 === t
						.onlineUserOnly && (o ? o.disablePush = !0 : o = {
							disablePush: !0
						}));
					var r = "";
					$i(e.cloudCustomData) && e.cloudCustomData.length > 0 && (r = e
						.cloudCustomData);
					var a = n.pbDownloadKey,
						s = n.downloadKey,
						i = n.messageNumber,
						u = e.payload,
						c = u.title,
						l = u.abstractList,
						p = u.compatibleText,
						d = this._messageModule.getModule($c);
					return {
						protocolName: ml,
						tjgID: this._messageModule.generateTjgID(e),
						requestData: {
							fromAccount: this._messageModule.getMyUserID(),
							toAccount: e.to,
							msgBody: [{
								msgType: e.type,
								msgContent: {
									pbDownloadKey: a,
									downloadKey: s,
									title: c,
									abstractList: l,
									compatibleText: p,
									messageNumber: i
								}
							}],
							cloudCustomData: r,
							msgSeq: e.sequence,
							msgRandom: e.random,
							msgLifeTime: d && d.isOnlineMessage(e, t) ? 0 : void 0,
							offlinePushInfo: o ? {
								pushFlag: !0 === o.disablePush ? 1 : 0,
								title: o.title || "",
								desc: o.description || "",
								ext: o.extension || "",
								apnsInfo: {
									badgeMode: !0 === o.ignoreIOSBadge ? 1 : 0
								},
								androidInfo: {
									OPPOChannelID: o.androidOPPOChannelID || ""
								}
							} : void 0
						}
					}
				}
			}, {
				key: "_createGroupMergerMessagePack",
				value: function(e, t, n) {
					var o = null;
					t && t.offlinePushInfo && (o = t.offlinePushInfo);
					var r = "";
					$i(e.cloudCustomData) && e.cloudCustomData.length > 0 && (r = e
						.cloudCustomData);
					var a = n.pbDownloadKey,
						s = n.downloadKey,
						i = n.messageNumber,
						u = e.payload,
						c = u.title,
						l = u.abstractList,
						p = u.compatibleText,
						d = this._messageModule.getModule(Yc);
					return {
						protocolName: vl,
						tjgID: this._messageModule.generateTjgID(e),
						requestData: {
							fromAccount: this._messageModule.getMyUserID(),
							groupID: e.to,
							msgBody: [{
								msgType: e.type,
								msgContent: {
									pbDownloadKey: a,
									downloadKey: s,
									title: c,
									abstractList: l,
									compatibleText: p,
									messageNumber: i
								}
							}],
							random: e.random,
							priority: e.priority,
							clientSequence: e.clientSequence,
							groupAtInfo: void 0,
							cloudCustomData: r,
							onlineOnlyFlag: d && d.isOnlineMessage(e, t) ? 1 : 0,
							offlinePushInfo: o ? {
								pushFlag: !0 === o.disablePush ? 1 : 0,
								title: o.title || "",
								desc: o.description || "",
								ext: o.extension || "",
								apnsInfo: {
									badgeMode: !0 === o.ignoreIOSBadge ? 1 : 0
								},
								androidInfo: {
									OPPOChannelID: o.androidOPPOChannelID || ""
								}
							} : void 0
						}
					}
				}
			}]), e
		}(),
		kv = {
			ERR_SVR_COMM_SENSITIVE_TEXT: 80001,
			ERR_SVR_COMM_BODY_SIZE_LIMIT: 80002,
			ERR_SVR_MSG_PKG_PARSE_FAILED: 20001,
			ERR_SVR_MSG_INTERNAL_AUTH_FAILED: 20002,
			ERR_SVR_MSG_INVALID_ID: 20003,
			ERR_SVR_MSG_PUSH_DENY: 20006,
			ERR_SVR_MSG_IN_PEER_BLACKLIST: 20007,
			ERR_SVR_MSG_BOTH_NOT_FRIEND: 20009,
			ERR_SVR_MSG_NOT_PEER_FRIEND: 20010,
			ERR_SVR_MSG_NOT_SELF_FRIEND: 20011,
			ERR_SVR_MSG_SHUTUP_DENY: 20012,
			ERR_SVR_GROUP_INVALID_PARAMETERS: 10004,
			ERR_SVR_GROUP_PERMISSION_DENY: 10007,
			ERR_SVR_GROUP_NOT_FOUND: 10010,
			ERR_SVR_GROUP_INVALID_GROUPID: 10015,
			ERR_SVR_GROUP_REJECT_FROM_THIRDPARTY: 10016,
			ERR_SVR_GROUP_SHUTUP_DENY: 10017,
			MESSAGE_SEND_FAIL: 2100
		},
		Nv = [Tp.MESSAGE_ONPROGRESS_FUNCTION_ERROR, Tp.MESSAGE_IMAGE_SELECT_FILE_FIRST, Tp
			.MESSAGE_IMAGE_TYPES_LIMIT, Tp.MESSAGE_FILE_IS_EMPTY, Tp.MESSAGE_IMAGE_SIZE_LIMIT, Tp
			.MESSAGE_FILE_SELECT_FILE_FIRST, Tp.MESSAGE_FILE_SIZE_LIMIT, Tp.MESSAGE_VIDEO_SIZE_LIMIT, Tp
			.MESSAGE_VIDEO_TYPES_LIMIT, Tp.MESSAGE_AUDIO_UPLOAD_FAIL, Tp.MESSAGE_AUDIO_SIZE_LIMIT, Tp
			.COS_UNDETECTED
		];
	var Ov = function(e) {
			i(n, e);
			var t = _(n);

			function n(e) {
				var r;
				return o(this, n), (r = t.call(this, e))._className = "MessageModule", r._messageOptionsMap =
					new Map, r._mergerMessageHandler = new Av(h(r)), r
			}
			return a(n, [{
				key: "createTextMessage",
				value: function(e) {
					var t = this.getMyUserID();
					e.currentUser = t;
					var n = new Q_(e),
						o = "string" == typeof e.payload ? e.payload : e.payload.text,
						r = new _h({
							text: o
						}),
						a = this._getNickAndAvatarByUserID(t);
					return n.setElement(r), n.setNickAndAvatar(a), n.setNameCard(this
						._getNameCardByGroupID(n)), n
				}
			}, {
				key: "createImageMessage",
				value: function(e) {
					var t = this.getMyUserID();
					e.currentUser = t;
					var n = new Q_(e);
					if (ai) {
						var o = e.payload.file;
						if (Hi(o)) return void Ki.warn(
							"小程序环境下调用 createImageMessage 接口时，payload.file 不支持传入 File 对象"
							);
						var r = o.tempFilePaths[0],
							a = {
								url: r,
								name: r.slice(r.lastIndexOf("/") + 1),
								size: o.tempFiles && o.tempFiles[0].size || 1,
								type: r.slice(r.lastIndexOf(".") + 1).toLowerCase()
							};
						e.payload.file = a
					} else if (si)
						if (Hi(e.payload.file)) {
							var s = e.payload.file;
							e.payload.file = {
								files: [s]
							}
						} else if (zi(e.payload.file) && "undefined" != typeof uni) {
						var i = e.payload.file.tempFiles[0];
						e.payload.file = {
							files: [i]
						}
					}
					var u = new b_({
							imageFormat: C_.IMAGE_FORMAT.UNKNOWN,
							uuid: this._generateUUID(),
							file: e.payload.file
						}),
						c = this._getNickAndAvatarByUserID(t);
					return n.setElement(u), n.setNickAndAvatar(c), n.setNameCard(this
						._getNameCardByGroupID(n)), this._messageOptionsMap.set(n.ID, e), n
				}
			}, {
				key: "createAudioMessage",
				value: function(e) {
					if (ai) {
						var t = e.payload.file;
						if (ai) {
							var n = {
								url: t.tempFilePath,
								name: t.tempFilePath.slice(t.tempFilePath.lastIndexOf("/") +
									1),
								size: t.fileSize,
								second: parseInt(t.duration) / 1e3,
								type: t.tempFilePath.slice(t.tempFilePath.lastIndexOf(".") +
									1).toLowerCase()
							};
							e.payload.file = n
						}
						var o = this.getMyUserID();
						e.currentUser = o;
						var r = new Q_(e),
							a = new P_({
								second: Math.floor(t.duration / 1e3),
								size: t.fileSize,
								url: t.tempFilePath,
								uuid: this._generateUUID()
							}),
							s = this._getNickAndAvatarByUserID(o);
						return r.setElement(a), r.setNickAndAvatar(s), r.setNameCard(this
								._getNameCardByGroupID(r)), this._messageOptionsMap.set(r.ID,
							e), r
					}
					Ki.warn("createAudioMessage 目前只支持小程序环境下发语音消息")
				}
			}, {
				key: "createVideoMessage",
				value: function(e) {
					var t = this.getMyUserID();
					e.currentUser = t, e.payload.file.thumbUrl =
						"https://web.sdk.qcloud.com/im/assets/images/transparent.png", e.payload
						.file.thumbSize = 1668;
					var n = {};
					if (ai) {
						if (oi) return void Ki.warn("createVideoMessage 不支持在支付宝小程序环境下使用");
						if (Hi(e.payload.file)) return void Ki.warn(
							"小程序环境下调用 createVideoMessage 接口时，payload.file 不支持传入 File 对象"
							);
						var o = e.payload.file;
						n.url = o.tempFilePath, n.name = o.tempFilePath.slice(o.tempFilePath
								.lastIndexOf("/") + 1), n.size = o.size, n.second = o.duration,
							n.type = o.tempFilePath.slice(o.tempFilePath.lastIndexOf(".") + 1)
							.toLowerCase()
					} else if (si) {
						if (Hi(e.payload.file)) {
							var r = e.payload.file;
							e.payload.file.files = [r]
						} else if (zi(e.payload.file) && "undefined" != typeof uni) {
							var a = e.payload.file.tempFile;
							e.payload.file.files = [a]
						}
						var s = e.payload.file;
						n.url = window.URL.createObjectURL(s.files[0]), n.name = s.files[0]
							.name, n.size = s.files[0].size, n.second = s.files[0].duration ||
							0, n.type = s.files[0].type.split("/")[1]
					}
					e.payload.file.videoFile = n;
					var i = new Q_(e),
						u = new Y_({
							videoFormat: n.type,
							videoSecond: Au(n.second, 0),
							videoSize: n.size,
							remoteVideoUrl: "",
							videoUrl: n.url,
							videoUUID: this._generateUUID(),
							thumbUUID: this._generateUUID(),
							thumbWidth: e.payload.file.width || 200,
							thumbHeight: e.payload.file.height || 200,
							thumbUrl: e.payload.file.thumbUrl,
							thumbSize: e.payload.file.thumbSize,
							thumbFormat: e.payload.file.thumbUrl.slice(e.payload.file
								.thumbUrl.lastIndexOf(".") + 1).toLowerCase()
						}),
						c = this._getNickAndAvatarByUserID(t);
					return i.setElement(u), i.setNickAndAvatar(c), i.setNameCard(this
						._getNameCardByGroupID(i)), this._messageOptionsMap.set(i.ID, e), i
				}
			}, {
				key: "createCustomMessage",
				value: function(e) {
					var t = this.getMyUserID();
					e.currentUser = t;
					var n = new Q_(e),
						o = new $_({
							data: e.payload.data,
							description: e.payload.description,
							extension: e.payload.extension
						}),
						r = this._getNickAndAvatarByUserID(t);
					return n.setElement(o), n.setNickAndAvatar(r), n.setNameCard(this
						._getNameCardByGroupID(n)), n
				}
			}, {
				key: "createFaceMessage",
				value: function(e) {
					var t = this.getMyUserID();
					e.currentUser = t;
					var n = new Q_(e),
						o = new w_(e.payload),
						r = this._getNickAndAvatarByUserID(t);
					return n.setElement(o), n.setNickAndAvatar(r), n.setNameCard(this
						._getNameCardByGroupID(n)), n
				}
			}, {
				key: "createMergerMessage",
				value: function(e) {
					var t = this.getMyUserID();
					e.currentUser = t;
					var n = this._getNickAndAvatarByUserID(t),
						o = new Q_(e),
						r = new J_(e.payload);
					return o.setElement(r), o.setNickAndAvatar(n), o.setNameCard(this
						._getNameCardByGroupID(o)), o.setRelayFlag(!0), o
				}
			}, {
				key: "createForwardMessage",
				value: function(e) {
					var t = e.to,
						n = e.conversationType,
						o = e.priority,
						r = e.payload,
						a = this.getMyUserID(),
						s = this._getNickAndAvatarByUserID(a);
					if (r.type === ro.MSG_GRP_TIP) return cm(new am({
						code: Tp.MESSAGE_FORWARD_TYPE_INVALID,
						message: ed
					}));
					var i = {
							to: t,
							conversationType: n,
							conversationID: "".concat(n).concat(t),
							priority: o,
							isPlaceMessage: 0,
							status: Ec.UNSEND,
							currentUser: a,
							cloudCustomData: e.cloudCustomData || r.cloudCustomData || ""
						},
						u = new Q_(i);
					return u.setElement(r.getElements()[0]), u.setNickAndAvatar(s), u
						.setNameCard(this._getNameCardByGroupID(r)), u.setRelayFlag(!0), u
				}
			}, {
				key: "downloadMergerMessage",
				value: function(e) {
					return this._mergerMessageHandler.downloadMergerMessage(e)
				}
			}, {
				key: "createFileMessage",
				value: function(e) {
					if (!ai) {
						if (si)
							if (Hi(e.payload.file)) {
								var t = e.payload.file;
								e.payload.file = {
									files: [t]
								}
							} else if (zi(e.payload.file) && "undefined" != typeof uni) {
							var n = e.payload.file.tempFiles[0];
							e.payload.file = {
								files: [n]
							}
						}
						var o = this.getMyUserID();
						e.currentUser = o;
						var r = new Q_(e),
							a = new j_({
								uuid: this._generateUUID(),
								file: e.payload.file
							}),
							s = this._getNickAndAvatarByUserID(o);
						return r.setElement(a), r.setNickAndAvatar(s), r.setNameCard(this
								._getNameCardByGroupID(r)), this._messageOptionsMap.set(r.ID,
							e), r
					}
					Ki.warn("小程序目前不支持选择文件， createFileMessage 接口不可用！")
				}
			}, {
				key: "_onCannotFindModule",
				value: function() {
					return cm({
						code: Tp.CANNOT_FIND_MODULE,
						message: Nd
					})
				}
			}, {
				key: "sendMessageInstance",
				value: function(e, t) {
					var n, o = this,
						r = null;
					switch (e.conversationType) {
						case ro.CONV_C2C:
							if (!(r = this.getModule($c))) return this._onCannotFindModule();
							break;
						case ro.CONV_GROUP:
							if (!(r = this.getModule(Yc))) return this._onCannotFindModule();
							break;
						default:
							return cm({
								code: Tp.MESSAGE_SEND_INVALID_CONVERSATION_TYPE,
								message: wp
							})
					}
					var a = this.getModule(nl),
						s = this.getModule(Yc);
					return a.upload(e).then((function() {
						o._getSendMessageSpecifiedKey(e) === Ud && o.getModule(ll)
							.addSuccessCount(Fd);
						return s.guardForAVChatRoom(e).then((function() {
							if (!e.isSendable()) return cm({
								code: Tp
									.MESSAGE_FILE_URL_IS_EMPTY,
								message: Jp
							});
							o._addSendMessageTotalCount(e), n = Date
								.now();
							var a = function(e) {
								var t = "utf-8";
								si && document && (t = document
									.charset.toLowerCase());
								var n, o, r = 0;
								if (o = e.length, "utf-8" === t ||
									"utf8" === t)
									for (var a = 0; a < o; a++)(n =
											e.codePointAt(a)) <=
										127 ? r += 1 : n <= 2047 ?
										r += 2 : n <= 65535 ? r +=
										3 : (r += 4, a++);
								else if ("utf-16" === t ||
									"utf16" === t)
									for (var s = 0; s < o; s++)(n =
											e.codePointAt(s)) <=
										65535 ? r += 2 : (r += 4,
											s++);
								else r = e.replace(/[^\x00-\xff]/g,
									"aa").length;
								return r
							}(JSON.stringify(e));
							return e.type === ro.MSG_MERGER && a > 7e3 ?
								o._mergerMessageHandler
								.uploadMergerMessage(e, a).then((
									function(n) {
										var r = o
											._mergerMessageHandler
											.createMergerMessagePack(
												e, t, n);
										return o.request(r)
									})) : (o.getModule(Jc)
									.setMessageRandom(e), e
									.conversationType === ro.CONV_C2C ||
									e.conversationType === ro
									.CONV_GROUP ? r.sendMessage(e, t) :
									void 0)
						})).then((function(a) {
							var s = a.data,
								i = s.time,
								u = s.sequence;
							o._addSendMessageSuccessCount(e, n), o
								._messageOptionsMap.delete(e.ID);
							var c = o.getModule(Jc);
							e.status = Ec.SUCCESS, e.time = i;
							var l = !1;
							if (e.conversationType === ro.CONV_GROUP) e
								.sequence = u, e.generateMessageID(o
									.getMyUserID());
							else if (e.conversationType === ro
								.CONV_C2C) {
								var p = c.getLatestMessageSentByMe(e
									.conversationID);
								if (p) {
									var d = p.nick,
										g = p.avatar;
									d === e.nick && g === e.avatar || (
										l = !0)
								}
							}
							return c.appendToMessageList(e), l && c
								.modifyMessageSentByMe({
									conversationID: e
										.conversationID,
									latestNick: e.nick,
									latestAvatar: e.avatar
								}), r.isOnlineMessage(e, t) ? e
								.setOnlineOnlyFlag(!0) : c
								.onMessageSent({
									conversationOptionsList: [{
										conversationID: e
											.conversationID,
										unreadCount: 0,
										type: e
											.conversationType,
										subType: e
											.conversationSubType,
										lastMessage: e
									}]
								}), e.getRelayFlag() ||
								"TIMImageElem" !== e.type || Eu(e
									.payload.imageInfoArray), Z_({
									message: e
								})
						}))
					})).catch((function(t) {
						return o._onSendMessageFailed(e, t)
					}))
				}
			}, {
				key: "_onSendMessageFailed",
				value: function(e, t) {
					e.status = Ec.FAIL, this.getModule(Jc).deleteMessageRandom(e), this
						._addSendMessageFailCountOnUser(e, t);
					var n = new jd(ag);
					return n.setMessage("tjg_id:".concat(this.generateTjgID(e), " type:")
							.concat(e.type, " from:").concat(e.from, " to:").concat(e.to)), this
						.probeNetwork().then((function(e) {
							var o = m(e, 2),
								r = o[0],
								a = o[1];
							n.setError(t, r, a).end()
						})), Ki.error("".concat(this._className,
							"._onSendMessageFailed error:"), t), cm(new am({
							code: t && t.code ? t.code : Tp.MESSAGE_SEND_FAIL,
							message: t && t.message ? t.message : Rp,
							data: {
								message: e
							}
						}))
				}
			}, {
				key: "_getSendMessageSpecifiedKey",
				value: function(e) {
					if ([ro.MSG_IMAGE, ro.MSG_AUDIO, ro.MSG_VIDEO, ro.MSG_FILE].includes(e
						.type)) return Ud;
					if (e.conversationType === ro.CONV_C2C) return wd;
					if (e.conversationType === ro.CONV_GROUP) {
						var t = this.getModule(Yc).getLocalGroupProfile(e.to);
						if (!t) return;
						var n = t.type;
						return mu(n) ? Gd : Pd
					}
				}
			}, {
				key: "_addSendMessageTotalCount",
				value: function(e) {
					var t = this._getSendMessageSpecifiedKey(e);
					t && this.getModule(ll).addTotalCount(t)
				}
			}, {
				key: "_addSendMessageSuccessCount",
				value: function(e, t) {
					var n = Math.abs(Date.now() - t),
						o = this._getSendMessageSpecifiedKey(e);
					if (o) {
						var r = this.getModule(ll);
						r.addSuccessCount(o), r.addCost(o, n)
					}
				}
			}, {
				key: "_addSendMessageFailCountOnUser",
				value: function(e, t) {
					var n, o, r = t.code,
						a = void 0 === r ? -1 : r,
						s = this.getModule(ll),
						i = this._getSendMessageSpecifiedKey(e);
					i === Ud && (n = a, o = !1, Nv.includes(n) && (o = !0), o) ? s
						.addFailedCountOfUserSide(Fd) : function(e) {
							var t = !1;
							return Object.values(kv).includes(e) && (t = !0), (e >= 120001 &&
								e <= 13e4 || e >= 10100 && e <= 10200) && (t = !0), t
						}(a) && i && s.addFailedCountOfUserSide(i)
				}
			}, {
				key: "resendMessage",
				value: function(e) {
					return e.isResend = !0, e.status = Ec.UNSEND, this.sendMessageInstance(e)
				}
			}, {
				key: "revokeMessage",
				value: function(e) {
					var t = this,
						n = null;
					if (e.conversationType === ro.CONV_C2C) {
						if (!(n = this.getModule($c))) return this._onCannotFindModule()
					} else if (e.conversationType === ro.CONV_GROUP && !(n = this.getModule(
						Yc))) return this._onCannotFindModule();
					var o = new jd(ug);
					return o.setMessage("tjg_id:".concat(this.generateTjgID(e), " type:")
							.concat(e.type, " from:").concat(e.from, " to:").concat(e.to)), n
						.revokeMessage(e).then((function(n) {
							var r = n.data.recallRetList;
							if (!Lu(r) && 0 !== r[0].retCode) {
								var a = new am({
									code: r[0].retCode,
									message: rm[r[0].retCode] || Up,
									data: {
										message: e
									}
								});
								return o.setCode(a.code).setMoreMessage(a.message)
								.end(), cm(a)
							}
							return Ki.info("".concat(t._className,
									".revokeMessage ok. ID:").concat(e.ID)), e
								.isRevoked = !0, o.end(), t.getModule(Jc)
								.onMessageRevoked([e]), Z_({
									message: e
								})
						})).catch((function(n) {
							t.probeNetwork().then((function(e) {
								var t = m(e, 2),
									r = t[0],
									a = t[1];
								o.setError(n, r, a).end()
							}));
							var r = new am({
								code: n && n.code ? n.code : Tp
									.MESSAGE_REVOKE_FAIL,
								message: n && n.message ? n.message : Up,
								data: {
									message: e
								}
							});
							return Ki.warn("".concat(t._className,
								".revokeMessage failed. error:"), n), cm(r)
						}))
				}
			}, {
				key: "deleteMessage",
				value: function(e) {
					var t = this,
						n = null,
						o = e[0],
						r = o.conversationID,
						a = "",
						s = [],
						i = [];
					if (o.conversationType === ro.CONV_C2C ? (n = this.getModule($c), a = r
							.replace(ro.CONV_C2C, ""), e.forEach((function(e) {
								e && e.status === Ec.SUCCESS && e.conversationID ===
									r && (e.getOnlineOnlyFlag() || s.push("".concat(e
											.sequence, "_").concat(e.random, "_")
										.concat(e.time)), i.push(e))
							}))) : o.conversationType === ro.CONV_GROUP && (n = this.getModule(
							Yc), a = r.replace(ro.CONV_GROUP, ""), e.forEach((function(e) {
							e && e.status === Ec.SUCCESS && e.conversationID ===
								r && (e.getOnlineOnlyFlag() || s.push("".concat(e
									.sequence)), i.push(e))
						}))), !n) return this._onCannotFindModule();
					if (0 === s.length) return this._onMessageDeleted(i);
					s.length > 30 && (s = s.slice(0, 30), i = i.slice(0, 30));
					var u = new jd(cg);
					return u.setMessage("to:".concat(a, " count:").concat(s.length)), n
						.deleteMessage({
							to: a,
							keyList: s
						}).then((function(e) {
							return u.end(), Ki.info("".concat(t._className,
								".deleteMessage ok")), t._onMessageDeleted(i)
						})).catch((function(e) {
							t.probeNetwork().then((function(t) {
								var n = m(t, 2),
									o = n[0],
									r = n[1];
								u.setError(e, o, r).end()
							})), Ki.warn("".concat(t._className,
								".deleteMessage failed. error:"), e);
							var n = new am({
								code: e && e.code ? e.code : Tp
									.MESSAGE_DELETE_FAIL,
								message: e && e.message ? e.message : Fp
							});
							return cm(n)
						}))
				}
			}, {
				key: "_onMessageDeleted",
				value: function(e) {
					return this.getModule(Jc).onMessageDeleted(e), um({
						messageList: e
					})
				}
			}, {
				key: "_generateUUID",
				value: function() {
					var e = this.getModule(Xc);
					return "".concat(e.getSDKAppID(), "-").concat(e.getUserID(), "-").concat(
						function() {
							for (var e = "", t = 32; t > 0; --t) e += uu[Math.floor(Math
								.random() * cu)];
							return e
						}())
				}
			}, {
				key: "getMessageOptionByID",
				value: function(e) {
					return this._messageOptionsMap.get(e)
				}
			}, {
				key: "_getNickAndAvatarByUserID",
				value: function(e) {
					return this.getModule(jc).getNickAndAvatarByUserID(e)
				}
			}, {
				key: "_getNameCardByGroupID",
				value: function(e) {
					if (e.conversationType === ro.CONV_GROUP) {
						var t = this.getModule(Yc);
						if (t) return t.getMyNameCardByGroupID(e.to)
					}
					return ""
				}
			}, {
				key: "reset",
				value: function() {
					Ki.log("".concat(this._className, ".reset")), this._messageOptionsMap
					.clear()
				}
			}]), n
		}(pl),
		Lv = function(e) {
			i(n, e);
			var t = _(n);

			function n(e) {
				var r;
				return o(this, n), (r = t.call(this, e))._className = "PluginModule", r.plugins = {}, r
			}
			return a(n, [{
				key: "registerPlugin",
				value: function(e) {
					var t = this;
					Object.keys(e).forEach((function(n) {
						t.plugins[n] = e[n]
					})), new jd(Xd).setMessage("key=".concat(Object.keys(e))).end()
				}
			}, {
				key: "getPlugin",
				value: function(e) {
					return this.plugins[e]
				}
			}, {
				key: "reset",
				value: function() {
					Ki.log("".concat(this._className, ".reset"))
				}
			}]), n
		}(pl),
		Rv = function(e) {
			i(n, e);
			var t = _(n);

			function n(e) {
				var r;
				return o(this, n), (r = t.call(this, e))._className = "SyncUnreadMessageModule", r._cookie = "",
					r._onlineSyncFlag = !1, r.getInnerEmitterInstance().on(Om.CONTEXT_A2KEY_AND_TINYID_UPDATED,
						r._onLoginSuccess, h(r)), r
			}
			return a(n, [{
				key: "_onLoginSuccess",
				value: function(e) {
					this._startSync({
						cookie: this._cookie,
						syncFlag: 0,
						isOnlineSync: 0
					})
				}
			}, {
				key: "_startSync",
				value: function(e) {
					var t = this,
						n = e.cookie,
						o = e.syncFlag,
						r = e.isOnlineSync;
					Ki.log("".concat(this._className, "._startSync cookie:").concat(n,
						" syncFlag:").concat(o, " isOnlineSync:").concat(r)), this.request({
						protocolName: fl,
						requestData: {
							cookie: n,
							syncFlag: o,
							isOnlineSync: r
						}
					}).then((function(e) {
						var n = e.data,
							o = n.cookie,
							r = n.syncFlag,
							a = n.eventArray,
							s = n.messageList,
							i = n.C2CRemainingUnreadList;
						if (t._cookie = o, Lu(o));
						else if (0 === r || 1 === r) {
							if (a) t.getModule(al).onMessage({
								head: {},
								body: {
									eventArray: a,
									isInstantMessage: t._onlineSyncFlag,
									isSyncingEnded: !1
								}
							});
							t.getModule($c).onNewC2CMessage({
								dataList: s,
								isInstantMessage: !1,
								C2CRemainingUnreadList: i
							}), t._startSync({
								cookie: o,
								syncFlag: r,
								isOnlineSync: 0
							})
						} else if (2 === r) {
							if (a) t.getModule(al).onMessage({
								head: {},
								body: {
									eventArray: a,
									isInstantMessage: t._onlineSyncFlag,
									isSyncingEnded: !0
								}
							});
							t.getModule($c).onNewC2CMessage({
								dataList: s,
								isInstantMessage: t._onlineSyncFlag,
								C2CRemainingUnreadList: i
							})
						}
					})).catch((function(e) {
						Ki.error("".concat(t._className,
							"._startSync failed. error:"), e)
					}))
				}
			}, {
				key: "startOnlineSync",
				value: function() {
					Ki.log("".concat(this._className, ".startOnlineSync")), this
						._onlineSyncFlag = !0, this._startSync({
							cookie: this._cookie,
							syncFlag: 0,
							isOnlineSync: 1
						})
				}
			}, {
				key: "startSyncOnReconnected",
				value: function() {
					Ki.log("".concat(this._className, ".startSyncOnReconnected.")), this
						._onlineSyncFlag = !0, this._startSync({
							cookie: this._cookie,
							syncFlag: 0,
							isOnlineSync: 0
						})
				}
			}, {
				key: "reset",
				value: function() {
					Ki.log("".concat(this._className, ".reset")), this._onlineSyncFlag = !1,
						this._cookie = ""
				}
			}]), n
		}(pl),
		bv = {
			request: {
				toAccount: "To_Account",
				fromAccount: "From_Account",
				to: "To_Account",
				from: "From_Account",
				groupID: "GroupId",
				groupAtUserID: "GroupAt_Account",
				extension: "Ext",
				data: "Data",
				description: "Desc",
				elements: "MsgBody",
				sizeType: "Type",
				downloadFlag: "Download_Flag",
				thumbUUID: "ThumbUUID",
				videoUUID: "VideoUUID",
				remoteAudioUrl: "Url",
				remoteVideoUrl: "VideoUrl",
				videoUrl: "",
				imageUrl: "URL",
				fileUrl: "Url",
				uuid: "UUID",
				priority: "MsgPriority",
				receiverUserID: "To_Account",
				receiverGroupID: "GroupId",
				messageSender: "SenderId",
				messageReceiver: "ReceiverId",
				nick: "From_AccountNick",
				avatar: "From_AccountHeadurl",
				messageNumber: "MsgNum",
				pbDownloadKey: "PbMsgKey",
				downloadKey: "JsonMsgKey",
				applicationType: "PendencyType",
				userIDList: "To_Account",
				groupNameList: "GroupName",
				userID: "To_Account",
				groupAttributeList: "GroupAttr",
				mainSequence: "AttrMainSeq",
				avChatRoomKey: "BytesKey",
				attributeControl: "AttrControl",
				sequence: "seq"
			},
			response: {
				MsgPriority: "priority",
				ThumbUUID: "thumbUUID",
				VideoUUID: "videoUUID",
				Download_Flag: "downloadFlag",
				GroupId: "groupID",
				Member_Account: "userID",
				MsgList: "messageList",
				SyncFlag: "syncFlag",
				To_Account: "to",
				From_Account: "from",
				MsgSeq: "sequence",
				MsgRandom: "random",
				MsgTime: "time",
				MsgTimeStamp: "time",
				MsgContent: "content",
				MsgBody: "elements",
				From_AccountNick: "nick",
				From_AccountHeadurl: "avatar",
				GroupWithdrawInfoArray: "revokedInfos",
				GroupReadInfoArray: "groupMessageReadNotice",
				LastReadMsgSeq: "lastMessageSeq",
				WithdrawC2cMsgNotify: "c2cMessageRevokedNotify",
				C2cWithdrawInfoArray: "revokedInfos",
				C2cReadedReceipt: "c2cMessageReadReceipt",
				ReadC2cMsgNotify: "c2cMessageReadNotice",
				LastReadTime: "peerReadTime",
				MsgRand: "random",
				MsgType: "type",
				MsgShow: "messageShow",
				NextMsgSeq: "nextMessageSeq",
				FaceUrl: "avatar",
				ProfileDataMod: "profileModify",
				Profile_Account: "userID",
				ValueBytes: "value",
				ValueNum: "value",
				NoticeSeq: "noticeSequence",
				NotifySeq: "notifySequence",
				MsgFrom_AccountExtraInfo: "messageFromAccountExtraInformation",
				Operator_Account: "operatorID",
				OpType: "operationType",
				ReportType: "operationType",
				UserId: "userID",
				User_Account: "userID",
				List_Account: "userIDList",
				MsgOperatorMemberExtraInfo: "operatorInfo",
				MsgMemberExtraInfo: "memberInfoList",
				ImageUrl: "avatar",
				NickName: "nick",
				MsgGroupNewInfo: "newGroupProfile",
				MsgAppDefinedData: "groupCustomField",
				Owner_Account: "ownerID",
				GroupFaceUrl: "avatar",
				GroupIntroduction: "introduction",
				GroupNotification: "notification",
				GroupApplyJoinOption: "joinOption",
				MsgKey: "messageKey",
				GroupInfo: "groupProfile",
				ShutupTime: "muteTime",
				Desc: "description",
				Ext: "extension",
				GroupAt_Account: "groupAtUserID",
				MsgNum: "messageNumber",
				PbMsgKey: "pbDownloadKey",
				JsonMsgKey: "downloadKey",
				MsgModifiedFlag: "isModified",
				PendencyItem: "applicationItem",
				PendencyType: "applicationType",
				AddTime: "time",
				AddSource: "source",
				AddWording: "wording",
				ProfileImImage: "avatar",
				PendencyAdd: "friendApplicationAdded",
				FrienPencydDel_Account: "friendApplicationDeletedUserIDList",
				Peer_Account: "userID",
				GroupAttr: "groupAttributeList",
				GroupAttrAry: "groupAttributeList",
				AttrMainSeq: "mainSequence",
				seq: "sequence",
				GroupAttrOption: "groupAttributeOption",
				BytesChangedKeys: "changedKeyList",
				GroupAttrInfo: "groupAttributeList",
				GroupAttrSeq: "mainSequence",
				PushChangedAttrValFlag: "hasChangedAttributeInfo",
				SubKeySeq: "sequence",
				Val: "value"
			},
			ignoreKeyWord: ["C2C", "ID", "USP"]
		},
		wv = Et.trim;

	function Pv(e, t) {
		if ("string" != typeof e && !Array.isArray(e)) throw new TypeError(
			"Expected the input to be `string | string[]`");
		t = Object.assign({
			pascalCase: !1
		}, t);
		var n;
		return 0 === (e = Array.isArray(e) ? e.map((function(e) {
				return e.trim()
			})).filter((function(e) {
				return e.length
			})).join("-") : e.trim()).length ? "" : 1 === e.length ? t.pascalCase ? e.toUpperCase() : e
			.toLowerCase() : (e !== e.toLowerCase() && (e = Gv(e)), e = e.replace(/^[_.\- ]+/, "").toLowerCase()
				.replace(/[_.\- ]+(\w|$)/g, (function(e, t) {
					return t.toUpperCase()
				})).replace(/\d+(\w|$)/g, (function(e) {
					return e.toUpperCase()
				})), n = e, t.pascalCase ? n.charAt(0).toUpperCase() + n.slice(1) : n)
	}
	vt({
		target: "String",
		proto: !0,
		forced: function(e) {
			return L((function() {
				return !!yt[e]() || "​᠎" != "​᠎" [e]() || yt[e].name !== e
			}))
		}("trim")
	}, {
		trim: function() {
			return wv(this)
		}
	});
	var Gv = function(e) {
		for (var t = !1, n = !1, o = !1, r = 0; r < e.length; r++) {
			var a = e[r];
			t && /[a-zA-Z]/.test(a) && a.toUpperCase() === a ? (e = e.slice(0, r) + "-" + e.slice(r), t = !
				1, o = n, n = !0, r++) : n && o && /[a-zA-Z]/.test(a) && a.toLowerCase() === a ? (e = e
				.slice(0, r - 1) + "-" + e.slice(r - 1), o = n, n = !1, t = !0) : (t = a
			.toLowerCase() === a && a.toUpperCase() !== a, o = n, n = a.toUpperCase() === a && a
				.toLowerCase() !== a)
		}
		return e
	};

	function Uv(e, t) {
		var n = 0;
		return function e(t, o) {
			if (++n > 100) return n--, t;
			if (Wi(t)) {
				var r = t.map((function(t) {
					return Yi(t) ? e(t, o) : t
				}));
				return n--, r
			}
			if (Yi(t)) {
				var a = (s = t, i = function(e, t) {
					if (!tu(t)) return !1;
					if ((r = t) !== Pv(r))
						for (var n = 0; n < bv.ignoreKeyWord.length && !t.includes(bv.ignoreKeyWord[
								n]); n++);
					var r;
					return Ji(o[t]) ? function(e) {
						return "OPPOChannelID" === e ? e : e[0].toUpperCase() + Pv(e).slice(1)
					}(t) : o[t]
				}, u = Object.create(null), Object.keys(s).forEach((function(e) {
					var t = i(s[e], e);
					t && (u[t] = s[e])
				})), u);
				return a = Iu(a, (function(t, n) {
					return Wi(t) || Yi(t) ? e(t, o) : t
				})), n--, a
			}
			var s, i, u
		}(e, t)
	}

	function Fv(e, t) {
		if (Wi(e)) return e.map((function(e) {
			return Yi(e) ? Fv(e, t) : e
		}));
		if (Yi(e)) {
			var n = (o = e, r = function(e, n) {
				return Ji(t[n]) ? Pv(n) : t[n]
			}, a = {}, Object.keys(o).forEach((function(e) {
				a[r(o[e], e)] = o[e]
			})), a);
			return n = Iu(n, (function(e) {
				return Wi(e) || Yi(e) ? Fv(e, t) : e
			}))
		}
		var o, r, a
	}
	var qv = function() {
			function e(t) {
				o(this, e), this._handler = t;
				var n = t.getURL();
				this._socket = null, this._id = iu(), ai ? oi ? (ii.connectSocket({
						url: n,
						header: {
							"content-type": "application/json"
						}
					}), ii.onSocketClose(this._onClose.bind(this)), ii.onSocketOpen(this._onOpen.bind(
					this)), ii.onSocketMessage(this._onMessage.bind(this)), ii.onSocketError(this._onError
						.bind(this))) : (this._socket = ii.connectSocket({
						url: n,
						header: {
							"content-type": "application/json"
						},
						complete: function() {}
					}), this._socket.onClose(this._onClose.bind(this)), this._socket.onOpen(this._onOpen
						.bind(this)), this._socket.onMessage(this._onMessage.bind(this)), this._socket
					.onError(this._onError.bind(this))) : si && (this._socket = new WebSocket(n), this
					._socket.onopen = this._onOpen.bind(this), this._socket.onmessage = this._onMessage
					.bind(this), this._socket.onclose = this._onClose.bind(this), this._socket.onerror =
					this._onError.bind(this))
			}
			return a(e, [{
				key: "getID",
				value: function() {
					return this._id
				}
			}, {
				key: "_onOpen",
				value: function() {
					this._handler.onOpen({
						id: this._id
					})
				}
			}, {
				key: "_onClose",
				value: function(e) {
					this._handler.onClose({
						id: this._id,
						e: e
					})
				}
			}, {
				key: "_onMessage",
				value: function(e) {
					this._handler.onMessage(e)
				}
			}, {
				key: "_onError",
				value: function(e) {
					this._handler.onError({
						id: this._id,
						e: e
					})
				}
			}, {
				key: "close",
				value: function(e) {
					if (oi) return ii.offSocketClose(), ii.offSocketMessage(), ii
					.offSocketOpen(), ii.offSocketError(), void ii.closeSocket();
					this._socket && (ai ? (this._socket.onClose((function() {})), this._socket
							.onOpen((function() {})), this._socket.onMessage((
							function() {})), this._socket.onError((function() {}))) : si &&
						(this._socket.onopen = null, this._socket.onmessage = null, this
							._socket.onclose = null, this._socket.onerror = null), ni ? this
						._socket.close({
							code: e
						}) : this._socket.close(e), this._socket = null)
				}
			}, {
				key: "send",
				value: function(e) {
					oi ? ii.sendSocketMessage({
						data: e.data,
						fail: function() {
							e.fail && e.requestID && e.fail(e.requestID)
						}
					}) : this._socket && (ai ? this._socket.send({
						data: e.data,
						fail: function() {
							e.fail && e.requestID && e.fail(e.requestID)
						}
					}) : si && this._socket.send(e.data))
				}
			}]), e
		}(),
		xv = 4e3,
		Vv = 4001,
		Kv = ["keyMap"],
		Bv = ["keyMap"],
		Hv = "connected",
		jv = "connecting",
		$v = "disconnected",
		Yv = function() {
			function e(t) {
				o(this, e), this._channelModule = t, this._className = "SocketHandler", this._promiseMap =
					new Map, this._readyState = $v, this._simpleRequestMap = new Map, this.MAX_SIZE = 100, this
					._startSequence = iu(), this._startTs = 0, this._reConnectFlag = !1, this._nextPingTs = 0,
					this._reConnectCount = 0, this.MAX_RECONNECT_COUNT = 3, this._socketID = -1, this._random =
					0, this._socket = null, this._url = "", this._onOpenTs = 0, this._setOverseaHost(), this
					._initConnection()
			}
			return a(e, [{
				key: "_setOverseaHost",
				value: function() {
					this._channelModule.isOversea() && Ws.HOST.setCurrent(zs)
				}
			}, {
				key: "_initConnection",
				value: function() {
					"" === this._url ? this._url = Ws.HOST.CURRENT.DEFAULT : this._url === Ws
						.HOST.CURRENT.DEFAULT ? this._url = Ws.HOST.CURRENT.BACKUP : this
						._url === Ws.HOST.CURRENT.BACKUP && (this._url = Ws.HOST.CURRENT
							.DEFAULT), this._connect(), this._nextPingTs = 0
				}
			}, {
				key: "onCheckTimer",
				value: function(e) {
					e % 1 == 0 && this._checkPromiseMap()
				}
			}, {
				key: "_checkPromiseMap",
				value: function() {
					var e = this;
					0 !== this._promiseMap.size && this._promiseMap.forEach((function(t, n) {
						var o = t.reject,
							r = t.timestamp;
						Date.now() - r >= 15e3 && (Ki.log("".concat(e._className,
							"._checkPromiseMap request timeout, delete requestID:"
							).concat(n)), e._promiseMap.delete(n), o(
					new am({
							code: Tp.NETWORK_TIMEOUT,
							message: Ed
						})), e._channelModule.onRequestTimeout(n))
					}))
				}
			}, {
				key: "onOpen",
				value: function(e) {
					this._onOpenTs = Date.now();
					var t = e.id;
					this._socketID = t, new jd(Zd).setMessage(n).setMessage("socketID:".concat(
						t)).end();
					var n = Date.now() - this._startTs;
					Ki.log("".concat(this._className, "._onOpen cost ").concat(n,
						" ms. socketID:").concat(t)), e.id === this._socketID && (this
						._readyState = Hv, this._reConnectCount = 0, this._resend(), !0 ===
						this._reConnectFlag && (this._channelModule.onReconnected(), this
							._reConnectFlag = !1), this._channelModule.onOpen())
				}
			}, {
				key: "onClose",
				value: function(e) {
					var t = new jd(eg),
						n = e.id,
						o = e.e,
						r = "sourceSocketID:".concat(n, " currentSocketID:").concat(this
							._socketID),
						a = 0;
					0 !== this._onOpenTs && (a = Date.now() - this._onOpenTs), t.setMessage(a)
						.setMoreMessage(r).setCode(o.code).end(), Ki.log("".concat(this
								._className, "._onClose code:").concat(o.code, " reason:")
							.concat(o.reason, " ").concat(r, " onlineTime:").concat(a)), n ===
						this._socketID && (this._readyState = $v, a < 1e3 ? this._channelModule
							.onReconnectFailed() : this._channelModule.onClose())
				}
			}, {
				key: "onError",
				value: function(e) {
					var t = e.id,
						n = e.e,
						o = "sourceSocketID:".concat(t, " currentSocketID:").concat(this
							._socketID);
					new jd(tg).setMessage(n.errMsg || au(n)).setMoreMessage(o).setLevel("error")
						.end(), Ki.warn("".concat(this._className, "._onError"), n, o), t ===
						this._socketID && (this._readyState = "", this._channelModule.onError())
				}
			}, {
				key: "onMessage",
				value: function(e) {
					var t;
					try {
						t = JSON.parse(e.data)
					} catch (_M) {
						new jd(_g).setMessage(e.data).end()
					}
					if (t && t.head) {
						var n = this._getRequestIDFromHead(t.head),
							o = Cu(t.head),
							r = Fv(t.body, this._getResponseKeyMap(o));
						if (Ki.debug("".concat(this._className, ".onMessage ret:").concat(JSON
								.stringify(r), " requestID:").concat(n, " has:").concat(this
								._promiseMap.has(n))), this._setNextPingTs(), this._promiseMap
							.has(n)) {
							var a = this._promiseMap.get(n),
								s = a.resolve,
								i = a.reject,
								u = a.timestamp;
							return this._promiseMap.delete(n), this._calcRTT(u), void(r
								.errorCode && 0 !== r.errorCode ? (this._channelModule
									.onErrorCodeNotZero(r), i(new am({
										code: r.errorCode,
										message: r.errorInfo || ""
									}))) : s(Z_(r)))
						}
						this._channelModule.onMessage({
							head: t.head,
							body: r
						})
					}
				}
			}, {
				key: "_calcRTT",
				value: function(e) {
					var t = Date.now() - e;
					this._channelModule.getModule(ll).addRTT(t)
				}
			}, {
				key: "_connect",
				value: function() {
					new jd(Qd).setMessage("url:".concat(this.getURL())).end(), Ki.log("".concat(
							this._className, "._connect url:").concat(this.getURL())), this
						._startTs = Date.now(), this._socket = new qv(this), this._socketID =
						this._socket.getID(), this._readyState = jv
				}
			}, {
				key: "getURL",
				value: function() {
					var e = this._channelModule.getModule(Xc);
					return "".concat(this._url, "/info?sdkappid=").concat(e.getSDKAppID(),
						"&instanceid=").concat(e.getInstanceID(), "&random=").concat(this
						._getRandom())
				}
			}, {
				key: "_closeConnection",
				value: function(e) {
					Ki.log("".concat(this._className, "._closeConnection")), this._socket && (
						this._socket.close(e), this._socketID = -1, this._socket = null,
						this._readyState = $v)
				}
			}, {
				key: "_resend",
				value: function() {
					var e = this;
					if (Ki.log("".concat(this._className, "._resend reConnectFlag:").concat(this
							._reConnectFlag), "promiseMap.size:".concat(this._promiseMap
							.size, " simpleRequestMap.size:").concat(this._simpleRequestMap
							.size)), this._promiseMap.size > 0 && this._promiseMap.forEach((
							function(t, n) {
								var o = t.uplinkData,
									r = t.resolve,
									a = t.reject;
								e._promiseMap.set(n, {
									resolve: r,
									reject: a,
									timestamp: Date.now(),
									uplinkData: o
								}), e._execute(n, o)
							})), this._simpleRequestMap.size > 0) {
						var t, n = D(this._simpleRequestMap);
						try {
							for (n.s(); !(t = n.n()).done;) {
								var o = m(t.value, 2),
									r = o[0],
									a = o[1];
								this._execute(r, a)
							}
						} catch (s) {
							n.e(s)
						} finally {
							n.f()
						}
						this._simpleRequestMap.clear()
					}
				}
			}, {
				key: "send",
				value: function(e) {
					var t = this;
					e.head.seq = this._getSequence(), e.head.reqtime = Math.floor(Date.now() /
						1e3);
					e.keyMap;
					var n = g(e, Kv),
						o = this._getRequestIDFromHead(e.head),
						r = JSON.stringify(n);
					return new Promise((function(e, a) {
						(t._promiseMap.set(o, {
							resolve: e,
							reject: a,
							timestamp: Date.now(),
							uplinkData: r
						}), Ki.debug("".concat(t._className,
							".send uplinkData:").concat(JSON.stringify(n),
							" requestID:").concat(o, " readyState:").concat(
							t._readyState)), t._readyState !== Hv) ? t._reConnect():
							(t._execute(o, r), t._channelModule.getModule(ll)
								.addRequestCount())
					}))
				}
			}, {
				key: "simplySend",
				value: function(e) {
					e.head.seq = this._getSequence(), e.head.reqtime = Math.floor(Date.now() /
						1e3);
					e.keyMap;
					var t = g(e, Bv),
						n = this._getRequestIDFromHead(e.head),
						o = JSON.stringify(t);
					this._readyState !== Hv ? (this._simpleRequestMap.size < this.MAX_SIZE ?
						this._simpleRequestMap.set(n, o) : Ki.log("".concat(this._className,
							".simplySend. simpleRequestMap is full, drop request!")), this
						._reConnect()) : this._execute(n, o)
				}
			}, {
				key: "_execute",
				value: function(e, t) {
					this._socket.send({
						data: t,
						fail: ai ? this._onSendFail.bind(this) : void 0,
						requestID: e
					})
				}
			}, {
				key: "_onSendFail",
				value: function(e) {
					Ki.log("".concat(this._className, "._onSendFail requestID:").concat(e))
				}
			}, {
				key: "_getSequence",
				value: function() {
					var e;
					if (this._startSequence < 2415919103) return e = this._startSequence, this
						._startSequence += 1, 2415919103 === this._startSequence && (this
							._startSequence = iu()), e
				}
			}, {
				key: "_getRequestIDFromHead",
				value: function(e) {
					return e.servcmd + e.seq
				}
			}, {
				key: "_getResponseKeyMap",
				value: function(e) {
					var n = this._channelModule.getKeyMap(e);
					return t(t({}, bv.response), n.response)
				}
			}, {
				key: "_reConnect",
				value: function() {
					this._readyState !== Hv && this._readyState !== jv && this.forcedReconnect()
				}
			}, {
				key: "forcedReconnect",
				value: function() {
					var e = this;
					Ki.log("".concat(this._className, ".forcedReconnect count:").concat(this
							._reConnectCount, " readyState:").concat(this._readyState)), this
						._reConnectFlag = !0, this._resetRandom(), this._reConnectCount < this
						.MAX_RECONNECT_COUNT ? (this._reConnectCount += 1, this
							._closeConnection(Vv), this._initConnection()) : this._channelModule
						.probeNetwork().then((function(t) {
							var n = m(t, 2),
								o = n[0];
							n[1];
							o ? (Ki.warn("".concat(e._className,
									".forcedReconnect disconnected from wsserver but network is ok, continue..."
									)), e._reConnectCount = 0, e._closeConnection(
									Vv), e._initConnection()) : e._channelModule
								.onReconnectFailed()
						}))
				}
			}, {
				key: "getReconnectFlag",
				value: function() {
					return this._reConnectFlag
				}
			}, {
				key: "_setNextPingTs",
				value: function() {
					this._nextPingTs = Date.now() + 1e4
				}
			}, {
				key: "getNextPingTs",
				value: function() {
					return this._nextPingTs
				}
			}, {
				key: "isConnected",
				value: function() {
					return this._readyState === Hv
				}
			}, {
				key: "_getRandom",
				value: function() {
					return 0 === this._random && (this._random = Math.random()), this._random
				}
			}, {
				key: "_resetRandom",
				value: function() {
					this._random = 0
				}
			}, {
				key: "close",
				value: function() {
					Ki.log("".concat(this._className, ".close")), this._closeConnection(xv),
						this._promiseMap.clear(), this._startSequence = iu(), this._readyState =
						$v, this._simpleRequestMap.clear(), this._reConnectFlag = !1, this
						._reConnectCount = 0, this._onOpenTs = 0, this._url = "", this._random =
						0
				}
			}]), e
		}(),
		zv = function(e) {
			i(n, e);
			var t = _(n);

			function n(e) {
				var r;
				if (o(this, n), (r = t.call(this, e))._className = "ChannelModule", r._socketHandler = new Yv(h(
						r)), r._probing = !1, r._isAppShowing = !0, r._previousState = ro.NET_STATE_CONNECTED,
					ai && "function" == typeof ii.onAppShow && "function" == typeof ii.onAppHide) {
					var a = r._onAppHide.bind(h(r)),
						s = r._onAppShow.bind(h(r));
					"function" == typeof ii.offAppHide && ii.offAppHide(a), "function" == typeof ii
						.offAppShow && ii.offAppShow(s), ii.onAppHide(a), ii.onAppShow(s)
				}
				return r._timerForNotLoggedIn = -1, r._timerForNotLoggedIn = setInterval(r.onCheckTimer.bind(h(
					r)), 1e3), r._fatalErrorFlag = !1, r
			}
			return a(n, [{
				key: "onCheckTimer",
				value: function(e) {
					this._socketHandler && (this.isLoggedIn() ? (this._timerForNotLoggedIn >
							0 && (clearInterval(this._timerForNotLoggedIn), this
								._timerForNotLoggedIn = -1), this._socketHandler
							.onCheckTimer(e)) : this._socketHandler.onCheckTimer(1), this
						._checkNextPing())
				}
			}, {
				key: "onErrorCodeNotZero",
				value: function(e) {
					this.getModule(al).onErrorCodeNotZero(e)
				}
			}, {
				key: "onMessage",
				value: function(e) {
					this.getModule(al).onMessage(e)
				}
			}, {
				key: "send",
				value: function(e) {
					return this._socketHandler ? this._previousState !== ro
						.NET_STATE_CONNECTED && e.head.servcmd.includes(gp) ? this
						._sendLogViaHTTP(e) : this._socketHandler.send(e) : Promise.reject()
				}
			}, {
				key: "_sendLogViaHTTP",
				value: function(e) {
					return new Promise((function(t, n) {
						var o =
							"https://webim.tim.qq.com/v4/imopenstat/tim_web_report_v2?sdkappid="
							.concat(e.head.sdkappid, "&reqtime=").concat(Date
						.now()),
							r = JSON.stringify(e.body),
							a = "application/x-www-form-urlencoded;charset=UTF-8";
						if (ai) ii.request({
							url: o,
							data: r,
							method: "POST",
							timeout: 3e3,
							header: {
								"content-type": a
							},
							success: function() {
								t()
							},
							fail: function() {
								n(new am({
									code: Tp.NETWORK_ERROR,
									message: Dd
								}))
							}
						});
						else {
							var s = new XMLHttpRequest,
								i = setTimeout((function() {
									s.abort(), n(new am({
										code: Tp
											.NETWORK_TIMEOUT,
										message: Ed
									}))
								}), 3e3);
							s.onreadystatechange = function() {
								4 === s.readyState && (clearTimeout(i), 200 ===
									s.status || 304 === s.status ? t() : n(
										new am({
											code: Tp.NETWORK_ERROR,
											message: Dd
										})))
							}, s.open("POST", o, !0), s.setRequestHeader(
								"Content-type", a), s.send(r)
						}
					}))
				}
			}, {
				key: "simplySend",
				value: function(e) {
					return this._socketHandler ? this._socketHandler.simplySend(e) : Promise
						.reject()
				}
			}, {
				key: "onOpen",
				value: function() {
					this._ping()
				}
			}, {
				key: "onClose",
				value: function() {
					this.reConnect()
				}
			}, {
				key: "onError",
				value: function() {
					ai && Ki.error("".concat(this._className,
						".onError 从v2.11.2起，SDK 支持了 WebSocket，如您未添加相关受信域名，请先添加！升级指引: https://web.sdk.qcloud.com/im/doc/zh-cn/tutorial-02-upgradeguideline.html"
						))
				}
			}, {
				key: "getKeyMap",
				value: function(e) {
					return this.getModule(al).getKeyMap(e)
				}
			}, {
				key: "_onAppHide",
				value: function() {
					this._isAppShowing = !1
				}
			}, {
				key: "_onAppShow",
				value: function() {
					this._isAppShowing = !0
				}
			}, {
				key: "onRequestTimeout",
				value: function(e) {}
			}, {
				key: "onReconnected",
				value: function() {
					Ki.log("".concat(this._className, ".onReconnected")), this.getModule(al)
						.onReconnected(), this._emitNetStateChangeEvent(ro.NET_STATE_CONNECTED)
				}
			}, {
				key: "onReconnectFailed",
				value: function() {
					Ki.log("".concat(this._className, ".onReconnectFailed")), this
						._emitNetStateChangeEvent(ro.NET_STATE_DISCONNECTED)
				}
			}, {
				key: "reConnect",
				value: function() {
					if (!this._fatalErrorFlag && this._socketHandler) {
						var e = this._socketHandler.getReconnectFlag();
						if (Ki.log("".concat(this._className, ".reConnect previousState:")
								.concat(this._previousState, " reconnectFlag:").concat(e)), this
							._previousState === ro.NET_STATE_CONNECTING && e) return;
						this._socketHandler.forcedReconnect(), this._emitNetStateChangeEvent(ro
							.NET_STATE_CONNECTING)
					}
				}
			}, {
				key: "_emitNetStateChangeEvent",
				value: function(e) {
					this._previousState !== e && (this._previousState = e, this.emitOuterEvent(
						oo.NET_STATE_CHANGE, {
							state: e
						}))
				}
			}, {
				key: "_ping",
				value: function() {
					var e = this;
					if (!0 !== this._probing) {
						this._probing = !0;
						var t = this.getModule(al).getProtocolData({
							protocolName: hp
						});
						this.send(t).then((function() {
							e._probing = !1
						})).catch((function(t) {
							if (Ki.warn("".concat(e._className,
									"._ping failed. error:"), t), e._probing = !1,
								t && 60002 === t.code) return new jd(dh).setMessage(
									"code:".concat(t.code, " message:").concat(t
										.message)).setNetworkType(e.getModule(
									el).getNetworkType()).end(), e
								._fatalErrorFlag = !0, void e
								._emitNetStateChangeEvent(ro
									.NET_STATE_DISCONNECTED);
							e.probeNetwork().then((function(t) {
								var n = m(t, 2),
									o = n[0],
									r = n[1];
								Ki.log("".concat(e._className,
										"._ping failed. isAppShowing:"
										).concat(e._isAppShowing,
										" online:").concat(o,
										" networkType:").concat(r)), o ?
									e.reConnect() : e
									._emitNetStateChangeEvent(ro
										.NET_STATE_DISCONNECTED)
							}))
						}))
					}
				}
			}, {
				key: "_checkNextPing",
				value: function() {
					this._socketHandler && (this._socketHandler.isConnected() && Date.now() >=
						this._socketHandler.getNextPingTs() && this._ping())
				}
			}, {
				key: "dealloc",
				value: function() {
					this._socketHandler && (this._socketHandler.close(), this._socketHandler =
						null), this._timerForNotLoggedIn > -1 && clearInterval(this
						._timerForNotLoggedIn)
				}
			}, {
				key: "reset",
				value: function() {
					Ki.log("".concat(this._className, ".reset")), this._previousState = ro
						.NET_STATE_CONNECTED, this._probing = !1, this._fatalErrorFlag = !1,
						this._timerForNotLoggedIn = setInterval(this.onCheckTimer.bind(this),
							1e3)
				}
			}]), n
		}(pl),
		Wv = ["a2", "tinyid"],
		Jv = ["a2", "tinyid"],
		Xv = function() {
			function e(t) {
				o(this, e), this._className = "ProtocolHandler", this._sessionModule = t, this._configMap =
					new Map, this._fillConfigMap()
			}
			return a(e, [{
				key: "_fillConfigMap",
				value: function() {
					this._configMap.clear();
					var e = this._sessionModule.genCommonHead(),
						n = this._sessionModule.genCosSpecifiedHead(),
						o = this._sessionModule.genSSOReportHead();
					this._configMap.set(dl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.IM_OPEN_STATUS, ".")
									.concat(Ws.CMD.LOGIN)
							}),
							body: {
								state: "Online"
							},
							keyMap: {
								response: {
									TinyId: "tinyID",
									InstId: "instanceID",
									HelloInterval: "helloInterval"
								}
							}
						}
					}(e)), this._configMap.set(gl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.IM_OPEN_STATUS, ".")
									.concat(Ws.CMD.LOGOUT)
							}),
							body: {
								type: 0
							},
							keyMap: {
								request: {
									type: "wslogout_type"
								}
							}
						}
					}(e)), this._configMap.set(hl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.IM_OPEN_STATUS, ".")
									.concat(Ws.CMD.HELLO)
							}),
							body: {},
							keyMap: {
								response: {
									NewInstInfo: "newInstanceInfo"
								}
							}
						}
					}(e)), this._configMap.set(pp, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.IM_COS_SIGN, ".")
									.concat(Ws.CMD.COS_SIGN)
							}),
							body: {
								cmd: "open_im_cos_svc",
								subCmd: "get_cos_token",
								duration: 300,
								version: 2
							},
							keyMap: {
								request: {
									userSig: "usersig",
									subCmd: "sub_cmd",
									cmd: "cmd",
									duration: "duration",
									version: "version"
								},
								response: {
									expired_time: "expiredTime",
									bucket_name: "bucketName",
									session_token: "sessionToken",
									tmp_secret_id: "secretId",
									tmp_secret_key: "secretKey"
								}
							}
						}
					}(n)), this._configMap.set(dp, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.CUSTOM_UPLOAD, ".")
									.concat(Ws.CMD.COS_PRE_SIG)
							}),
							body: {
								fileType: void 0,
								fileName: void 0,
								uploadMethod: 0,
								duration: 900
							},
							keyMap: {
								request: {
									userSig: "usersig",
									fileType: "file_type",
									fileName: "file_name",
									uploadMethod: "upload_method"
								},
								response: {
									expired_time: "expiredTime",
									request_id: "requestId",
									head_url: "headUrl",
									upload_url: "uploadUrl",
									download_url: "downloadUrl",
									ci_url: "ciUrl"
								}
							}
						}
					}(n)), this._configMap.set(yp, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.CLOUD_CONTROL, ".")
									.concat(Ws.CMD.FETCH_CLOUD_CONTROL_CONFIG)
							}),
							body: {
								SDKAppID: 0,
								version: 0
							},
							keyMap: {
								request: {
									SDKAppID: "uint32_sdkappid",
									version: "uint64_version"
								},
								response: {
									int32_error_code: "errorCode",
									str_error_message: "errorMessage",
									str_json_config: "cloudControlConfig",
									uint32_expired_time: "expiredTime",
									uint32_sdkappid: "SDKAppID",
									uint64_version: "version"
								}
							}
						}
					}(e)), this._configMap.set(Ip, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.CLOUD_CONTROL, ".")
									.concat(Ws.CMD.PUSHED_CLOUD_CONTROL_CONFIG)
							}),
							body: {},
							keyMap: {
								response: {
									int32_error_code: "errorCode",
									str_error_message: "errorMessage",
									str_json_config: "cloudControlConfig",
									uint32_expired_time: "expiredTime",
									uint32_sdkappid: "SDKAppID",
									uint64_version: "version"
								}
							}
						}
					}(e)), this._configMap.set(fl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.OPEN_IM, ".").concat(
									Ws.CMD.GET_MESSAGES)
							}),
							body: {
								cookie: "",
								syncFlag: 0,
								needAbstract: 1,
								isOnlineSync: 0
							},
							keyMap: {
								request: {
									fromAccount: "From_Account",
									toAccount: "To_Account",
									from: "From_Account",
									to: "To_Account",
									time: "MsgTimeStamp",
									sequence: "MsgSeq",
									random: "MsgRandom",
									elements: "MsgBody"
								},
								response: {
									MsgList: "messageList",
									SyncFlag: "syncFlag",
									To_Account: "to",
									From_Account: "from",
									ClientSeq: "clientSequence",
									MsgSeq: "sequence",
									NoticeSeq: "noticeSequence",
									NotifySeq: "notifySequence",
									MsgRandom: "random",
									MsgTimeStamp: "time",
									MsgContent: "content",
									ToGroupId: "groupID",
									MsgKey: "messageKey",
									GroupTips: "groupTips",
									MsgBody: "elements",
									MsgType: "type",
									C2CRemainingUnreadCount: "C2CRemainingUnreadList",
									C2CPairUnreadCount: "C2CPairUnreadList"
								}
							}
						}
					}(e)), this._configMap.set(_l, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.OPEN_IM, ".").concat(
									Ws.CMD.BIG_DATA_HALLWAY_AUTH_KEY)
							}),
							body: {}
						}
					}(e)), this._configMap.set(ml, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.OPEN_IM, ".").concat(
									Ws.CMD.SEND_MESSAGE)
							}),
							body: {
								fromAccount: "",
								toAccount: "",
								msgTimeStamp: void 0,
								msgSeq: 0,
								msgRandom: 0,
								msgBody: [],
								cloudCustomData: void 0,
								nick: "",
								avatar: "",
								msgLifeTime: void 0,
								offlinePushInfo: {
									pushFlag: 0,
									title: "",
									desc: "",
									ext: "",
									apnsInfo: {
										badgeMode: 0
									},
									androidInfo: {
										OPPOChannelID: ""
									}
								}
							},
							keyMap: {
								request: {
									fromAccount: "From_Account",
									toAccount: "To_Account",
									msgTimeStamp: "MsgTimeStamp",
									msgSeq: "MsgSeq",
									msgRandom: "MsgRandom",
									msgBody: "MsgBody",
									count: "MaxCnt",
									lastMessageTime: "LastMsgTime",
									messageKey: "MsgKey",
									peerAccount: "Peer_Account",
									data: "Data",
									description: "Desc",
									extension: "Ext",
									type: "MsgType",
									content: "MsgContent",
									sizeType: "Type",
									uuid: "UUID",
									url: "",
									imageUrl: "URL",
									fileUrl: "Url",
									remoteAudioUrl: "Url",
									remoteVideoUrl: "VideoUrl",
									thumbUUID: "ThumbUUID",
									videoUUID: "VideoUUID",
									videoUrl: "",
									downloadFlag: "Download_Flag",
									nick: "From_AccountNick",
									avatar: "From_AccountHeadurl",
									from: "From_Account",
									time: "MsgTimeStamp",
									messageRandom: "MsgRandom",
									messageSequence: "MsgSeq",
									elements: "MsgBody",
									clientSequence: "ClientSeq",
									payload: "MsgContent",
									messageList: "MsgList",
									messageNumber: "MsgNum",
									abstractList: "AbstractList",
									messageBody: "MsgBody"
								}
							}
						}
					}(e)), this._configMap.set(vl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.SEND_GROUP_MESSAGE)
							}),
							body: {
								fromAccount: "",
								groupID: "",
								random: 0,
								clientSequence: 0,
								priority: "",
								msgBody: [],
								cloudCustomData: void 0,
								onlineOnlyFlag: 0,
								offlinePushInfo: {
									pushFlag: 0,
									title: "",
									desc: "",
									ext: "",
									apnsInfo: {
										badgeMode: 0
									},
									androidInfo: {
										OPPOChannelID: ""
									}
								},
								groupAtInfo: []
							},
							keyMap: {
								request: {
									to: "GroupId",
									extension: "Ext",
									data: "Data",
									description: "Desc",
									random: "Random",
									sequence: "ReqMsgSeq",
									count: "ReqMsgNumber",
									type: "MsgType",
									priority: "MsgPriority",
									content: "MsgContent",
									elements: "MsgBody",
									sizeType: "Type",
									uuid: "UUID",
									url: "",
									imageUrl: "URL",
									fileUrl: "Url",
									remoteAudioUrl: "Url",
									remoteVideoUrl: "VideoUrl",
									thumbUUID: "ThumbUUID",
									videoUUID: "VideoUUID",
									videoUrl: "",
									downloadFlag: "Download_Flag",
									clientSequence: "ClientSeq",
									from: "From_Account",
									time: "MsgTimeStamp",
									messageRandom: "MsgRandom",
									messageSequence: "MsgSeq",
									payload: "MsgContent",
									messageList: "MsgList",
									messageNumber: "MsgNum",
									abstractList: "AbstractList",
									messageBody: "MsgBody"
								},
								response: {
									MsgTime: "time",
									MsgSeq: "sequence"
								}
							}
						}
					}(e)), this._configMap.set(Dl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.OPEN_IM, ".").concat(
									Ws.CMD.REVOKE_C2C_MESSAGE)
							}),
							body: {
								msgInfo: {
									fromAccount: "",
									toAccount: "",
									msgTimeStamp: 0,
									msgSeq: 0,
									msgRandom: 0
								}
							},
							keyMap: {
								request: {
									msgInfo: "MsgInfo",
									msgTimeStamp: "MsgTimeStamp",
									msgSeq: "MsgSeq",
									msgRandom: "MsgRandom"
								}
							}
						}
					}(e)), this._configMap.set($l, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.REVOKE_GROUP_MESSAGE)
							}),
							body: {
								to: "",
								msgSeqList: void 0
							},
							keyMap: {
								request: {
									to: "GroupId",
									msgSeqList: "MsgSeqList",
									msgSeq: "MsgSeq"
								}
							}
						}
					}(e)), this._configMap.set(Cl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.OPEN_IM, ".").concat(
									Ws.CMD.GET_C2C_ROAM_MESSAGES)
							}),
							body: {
								peerAccount: "",
								count: 15,
								lastMessageTime: 0,
								messageKey: "",
								withRecalledMessage: 1
							},
							keyMap: {
								request: {
									messageKey: "MsgKey",
									peerAccount: "Peer_Account",
									count: "MaxCnt",
									lastMessageTime: "LastMsgTime",
									withRecalledMessage: "WithRecalledMsg"
								}
							}
						}
					}(e)), this._configMap.set(zl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.GET_GROUP_ROAM_MESSAGES)
							}),
							body: {
								withRecalledMsg: 1,
								groupID: "",
								count: 15,
								sequence: ""
							},
							keyMap: {
								request: {
									sequence: "ReqMsgSeq",
									count: "ReqMsgNumber",
									withRecalledMessage: "WithRecalledMsg"
								},
								response: {
									Random: "random",
									MsgTime: "time",
									MsgSeq: "sequence",
									ReqMsgSeq: "sequence",
									RspMsgList: "messageList",
									IsPlaceMsg: "isPlaceMessage",
									IsSystemMsg: "isSystemMessage",
									ToGroupId: "to",
									EnumFrom_AccountType: "fromAccountType",
									EnumTo_AccountType: "toAccountType",
									GroupCode: "groupCode",
									MsgPriority: "priority",
									MsgBody: "elements",
									MsgType: "type",
									MsgContent: "content",
									IsFinished: "complete",
									Download_Flag: "downloadFlag",
									ClientSeq: "clientSequence",
									ThumbUUID: "thumbUUID",
									VideoUUID: "videoUUID"
								}
							}
						}
					}(e)), this._configMap.set(El, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.OPEN_IM, ".").concat(
									Ws.CMD.SET_C2C_MESSAGE_READ)
							}),
							body: {
								C2CMsgReaded: void 0
							},
							keyMap: {
								request: {
									lastMessageTime: "LastedMsgTime"
								}
							}
						}
					}(e)), this._configMap.set(Yl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.SET_GROUP_MESSAGE_READ)
							}),
							body: {
								groupID: void 0,
								messageReadSeq: void 0
							},
							keyMap: {
								request: {
									messageReadSeq: "MsgReadedSeq"
								}
							}
						}
					}(e)), this._configMap.set(kl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.OPEN_IM, ".").concat(
									Ws.CMD.DELETE_C2C_MESSAGE)
							}),
							body: {
								fromAccount: "",
								to: "",
								keyList: void 0
							},
							keyMap: {
								request: {
									keyList: "MsgKeyList"
								}
							}
						}
					}(e)), this._configMap.set(ep, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.DELETE_GROUP_MESSAGE)
							}),
							body: {
								groupID: "",
								deleter: "",
								keyList: void 0
							},
							keyMap: {
								request: {
									deleter: "Deleter_Account",
									keyList: "Seqs"
								}
							}
						}
					}(e)), this._configMap.set(Al, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.OPEN_IM, ".").concat(
									Ws.CMD.GET_PEER_READ_TIME)
							}),
							body: {
								userIDList: void 0
							},
							keyMap: {
								request: {
									userIDList: "To_Account"
								},
								response: {
									ReadTime: "peerReadTimeList"
								}
							}
						}
					}(e)), this._configMap.set(Ol, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.RECENT_CONTACT, ".")
									.concat(Ws.CMD.GET_CONVERSATION_LIST)
							}),
							body: {
								fromAccount: void 0,
								count: 0
							},
							keyMap: {
								request: {},
								response: {
									SessionItem: "conversations",
									ToAccount: "groupID",
									To_Account: "userID",
									UnreadMsgCount: "unreadCount",
									MsgGroupReadedSeq: "messageReadSeq",
									C2cPeerReadTime: "c2cPeerReadTime"
								}
							}
						}
					}(e)), this._configMap.set(Nl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.RECENT_CONTACT, ".")
									.concat(Ws.CMD.PAGING_GET_CONVERSATION_LIST)
							}),
							body: {
								fromAccount: void 0,
								timeStamp: void 0,
								startIndex: void 0,
								pinnedTimeStamp: void 0,
								pinnedStartIndex: void 0,
								orderType: void 0,
								messageAssistFlag: 4,
								assistFlag: 7
							},
							keyMap: {
								request: {
									messageAssistFlag: "MsgAssistFlags",
									assistFlag: "AssistFlags",
									pinnedTimeStamp: "TopTimeStamp",
									pinnedStartIndex: "TopStartIndex"
								},
								response: {
									SessionItem: "conversations",
									ToAccount: "groupID",
									To_Account: "userID",
									UnreadMsgCount: "unreadCount",
									MsgGroupReadedSeq: "messageReadSeq",
									C2cPeerReadTime: "c2cPeerReadTime",
									LastMsgFlags: "lastMessageFlag",
									TopFlags: "isPinned",
									TopTimeStamp: "pinnedTimeStamp",
									TopStartIndex: "pinnedStartIndex"
								}
							}
						}
					}(e)), this._configMap.set(Ll, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.RECENT_CONTACT, ".")
									.concat(Ws.CMD.DELETE_CONVERSATION)
							}),
							body: {
								fromAccount: "",
								toAccount: void 0,
								type: 1,
								toGroupID: void 0
							},
							keyMap: {
								request: {
									toGroupID: "ToGroupid"
								}
							}
						}
					}(e)), this._configMap.set(Rl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.RECENT_CONTACT, ".")
									.concat(Ws.CMD.PIN_CONVERSATION)
							}),
							body: {
								fromAccount: "",
								operationType: 1,
								itemList: void 0
							},
							keyMap: {
								request: {
									itemList: "RecentContactItem"
								}
							}
						}
					}(e)), this._configMap.set(bl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.OPEN_IM, ".").concat(
									Ws.CMD.DELETE_GROUP_AT_TIPS)
							}),
							body: {
								messageListToDelete: void 0
							},
							keyMap: {
								request: {
									messageListToDelete: "DelMsgList",
									messageSeq: "MsgSeq",
									messageRandom: "MsgRandom"
								}
							}
						}
					}(e)), this._configMap.set(Ml, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.PROFILE, ".").concat(
									Ws.CMD.PORTRAIT_GET)
							}),
							body: {
								fromAccount: "",
								userItem: []
							},
							keyMap: {
								request: {
									toAccount: "To_Account",
									standardSequence: "StandardSequence",
									customSequence: "CustomSequence"
								}
							}
						}
					}(e)), this._configMap.set(yl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.PROFILE, ".").concat(
									Ws.CMD.PORTRAIT_SET)
							}),
							body: {
								fromAccount: "",
								profileItem: [{
									tag: A_.NICK,
									value: ""
								}, {
									tag: A_.GENDER,
									value: ""
								}, {
									tag: A_.ALLOWTYPE,
									value: ""
								}, {
									tag: A_.AVATAR,
									value: ""
								}]
							},
							keyMap: {
								request: {
									toAccount: "To_Account",
									standardSequence: "StandardSequence",
									customSequence: "CustomSequence"
								}
							}
						}
					}(e)), this._configMap.set(Il, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.FRIEND, ".").concat(
									Ws.CMD.GET_BLACKLIST)
							}),
							body: {
								fromAccount: "",
								startIndex: 0,
								maxLimited: 30,
								lastSequence: 0
							},
							keyMap: {
								response: {
									CurruentSequence: "currentSequence"
								}
							}
						}
					}(e)), this._configMap.set(Tl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.FRIEND, ".").concat(
									Ws.CMD.ADD_BLACKLIST)
							}),
							body: {
								fromAccount: "",
								toAccount: []
							}
						}
					}(e)), this._configMap.set(Sl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.FRIEND, ".").concat(
									Ws.CMD.DELETE_BLACKLIST)
							}),
							body: {
								fromAccount: "",
								toAccount: []
							}
						}
					}(e)), this._configMap.set(wl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.GET_JOINED_GROUPS)
							}),
							body: {
								memberAccount: "",
								limit: void 0,
								offset: void 0,
								groupType: void 0,
								responseFilter: {
									groupBaseInfoFilter: void 0,
									selfInfoFilter: void 0
								}
							},
							keyMap: {
								request: {
									memberAccount: "Member_Account"
								},
								response: {
									GroupIdList: "groups",
									MsgFlag: "messageRemindType"
								}
							}
						}
					}(e)), this._configMap.set(Pl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.GET_GROUP_INFO)
							}),
							body: {
								groupIDList: void 0,
								responseFilter: {
									groupBaseInfoFilter: ["Type", "Name",
										"Introduction", "Notification", "FaceUrl",
										"Owner_Account", "CreateTime", "InfoSeq",
										"LastInfoTime", "LastMsgTime", "MemberNum",
										"MaxMemberNum", "ApplyJoinOption",
										"NextMsgSeq", "ShutUpAllMember"
									],
									groupCustomFieldFilter: void 0,
									memberInfoFilter: void 0,
									memberCustomFieldFilter: void 0
								}
							},
							keyMap: {
								request: {
									groupIDList: "GroupIdList",
									groupCustomField: "AppDefinedData",
									memberCustomField: "AppMemberDefinedData",
									groupCustomFieldFilter: "AppDefinedDataFilter_Group",
									memberCustomFieldFilter: "AppDefinedDataFilter_GroupMember"
								},
								response: {
									GroupIdList: "groups",
									MsgFlag: "messageRemindType",
									AppDefinedData: "groupCustomField",
									AppMemberDefinedData: "memberCustomField",
									AppDefinedDataFilter_Group: "groupCustomFieldFilter",
									AppDefinedDataFilter_GroupMember: "memberCustomFieldFilter",
									InfoSeq: "infoSequence",
									MemberList: "members",
									GroupInfo: "groups",
									ShutUpUntil: "muteUntil",
									ShutUpAllMember: "muteAllMembers",
									ApplyJoinOption: "joinOption"
								}
							}
						}
					}(e)), this._configMap.set(Gl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.CREATE_GROUP)
							}),
							body: {
								type: void 0,
								name: void 0,
								groupID: void 0,
								ownerID: void 0,
								introduction: void 0,
								notification: void 0,
								maxMemberNum: void 0,
								joinOption: void 0,
								memberList: void 0,
								groupCustomField: void 0,
								memberCustomField: void 0,
								webPushFlag: 1,
								avatar: "FaceUrl"
							},
							keyMap: {
								request: {
									ownerID: "Owner_Account",
									userID: "Member_Account",
									avatar: "FaceUrl",
									maxMemberNum: "MaxMemberCount",
									joinOption: "ApplyJoinOption",
									groupCustomField: "AppDefinedData",
									memberCustomField: "AppMemberDefinedData"
								},
								response: {
									HugeGroupFlag: "avChatRoomFlag",
									OverJoinedGroupLimit_Account: "overLimitUserIDList"
								}
							}
						}
					}(e)), this._configMap.set(Ul, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.DESTROY_GROUP)
							}),
							body: {
								groupID: void 0
							}
						}
					}(e)), this._configMap.set(Fl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.MODIFY_GROUP_INFO)
							}),
							body: {
								groupID: void 0,
								name: void 0,
								introduction: void 0,
								notification: void 0,
								avatar: void 0,
								maxMemberNum: void 0,
								joinOption: void 0,
								groupCustomField: void 0,
								muteAllMembers: void 0
							},
							keyMap: {
								request: {
									maxMemberNum: "MaxMemberCount",
									groupCustomField: "AppDefinedData",
									muteAllMembers: "ShutUpAllMember",
									joinOption: "ApplyJoinOption",
									avatar: "FaceUrl"
								},
								response: {
									AppDefinedData: "groupCustomField",
									ShutUpAllMember: "muteAllMembers",
									ApplyJoinOption: "joinOption"
								}
							}
						}
					}(e)), this._configMap.set(ql, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.APPLY_JOIN_GROUP)
							}),
							body: {
								groupID: void 0,
								applyMessage: void 0,
								userDefinedField: void 0,
								webPushFlag: 1
							},
							keyMap: {
								request: {
									applyMessage: "ApplyMsg"
								},
								response: {
									HugeGroupFlag: "avChatRoomFlag",
									AVChatRoomKey: "avChatRoomKey"
								}
							}
						}
					}(e)), this._configMap.set(xl, function(e) {
						e.a2, e.tinyid;
						return {
							head: t(t({}, g(e, Wv)), {}, {
								servcmd: "".concat(Ws.NAME.BIG_GROUP_NO_AUTH,
									".").concat(Ws.CMD.APPLY_JOIN_GROUP)
							}),
							body: {
								groupID: void 0,
								applyMessage: void 0,
								userDefinedField: void 0,
								webPushFlag: 1
							},
							keyMap: {
								request: {
									applyMessage: "ApplyMsg"
								},
								response: {
									HugeGroupFlag: "avChatRoomFlag"
								}
							}
						}
					}(e)), this._configMap.set(Vl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.QUIT_GROUP)
							}),
							body: {
								groupID: void 0
							}
						}
					}(e)), this._configMap.set(Kl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.SEARCH_GROUP_BY_ID)
							}),
							body: {
								groupIDList: void 0,
								responseFilter: {
									groupBasePublicInfoFilter: ["Type", "Name",
										"Introduction", "Notification", "FaceUrl",
										"CreateTime", "Owner_Account",
										"LastInfoTime", "LastMsgTime", "NextMsgSeq",
										"MemberNum", "MaxMemberNum",
										"ApplyJoinOption"
									]
								}
							},
							keyMap: {
								response: {
									ApplyJoinOption: "joinOption"
								}
							}
						}
					}(e)), this._configMap.set(Bl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.CHANGE_GROUP_OWNER)
							}),
							body: {
								groupID: void 0,
								newOwnerID: void 0
							},
							keyMap: {
								request: {
									newOwnerID: "NewOwner_Account"
								}
							}
						}
					}(e)), this._configMap.set(Hl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.HANDLE_APPLY_JOIN_GROUP)
							}),
							body: {
								groupID: void 0,
								applicant: void 0,
								handleAction: void 0,
								handleMessage: void 0,
								authentication: void 0,
								messageKey: void 0,
								userDefinedField: void 0
							},
							keyMap: {
								request: {
									applicant: "Applicant_Account",
									handleAction: "HandleMsg",
									handleMessage: "ApprovalMsg",
									messageKey: "MsgKey"
								}
							}
						}
					}(e)), this._configMap.set(jl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.HANDLE_GROUP_INVITATION)
							}),
							body: {
								groupID: void 0,
								inviter: void 0,
								handleAction: void 0,
								handleMessage: void 0,
								authentication: void 0,
								messageKey: void 0,
								userDefinedField: void 0
							},
							keyMap: {
								request: {
									inviter: "Inviter_Account",
									handleAction: "HandleMsg",
									handleMessage: "ApprovalMsg",
									messageKey: "MsgKey"
								}
							}
						}
					}(e)), this._configMap.set(Wl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.GET_GROUP_APPLICATION)
							}),
							body: {
								startTime: void 0,
								limit: void 0,
								handleAccount: void 0
							},
							keyMap: {
								request: {
									handleAccount: "Handle_Account"
								}
							}
						}
					}(e)), this._configMap.set(Jl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.OPEN_IM, ".").concat(
									Ws.CMD.DELETE_GROUP_SYSTEM_MESSAGE)
							}),
							body: {
								messageListToDelete: void 0
							},
							keyMap: {
								request: {
									messageListToDelete: "DelMsgList",
									messageSeq: "MsgSeq",
									messageRandom: "MsgRandom"
								}
							}
						}
					}(e)), this._configMap.set(Xl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME
									.BIG_GROUP_LONG_POLLING, ".").concat(Ws
									.CMD.AVCHATROOM_LONG_POLL)
							}),
							body: {
								USP: 1,
								startSeq: 1,
								holdTime: 90,
								key: void 0
							},
							keyMap: {
								request: {
									USP: "USP"
								},
								response: {
									ToGroupId: "groupID"
								}
							}
						}
					}(e)), this._configMap.set(Ql, function(e) {
						e.a2, e.tinyid;
						return {
							head: t(t({}, g(e, Jv)), {}, {
								servcmd: "".concat(Ws.NAME
										.BIG_GROUP_LONG_POLLING_NO_AUTH, ".")
									.concat(Ws.CMD.AVCHATROOM_LONG_POLL)
							}),
							body: {
								USP: 1,
								startSeq: 1,
								holdTime: 90,
								key: void 0
							},
							keyMap: {
								request: {
									USP: "USP"
								},
								response: {
									ToGroupId: "groupID"
								}
							}
						}
					}(e)), this._configMap.set(Zl, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.GET_ONLINE_MEMBER_NUM)
							}),
							body: {
								groupID: void 0
							}
						}
					}(e)), this._configMap.set(tp, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.SET_GROUP_ATTRIBUTES)
							}),
							body: {
								groupID: void 0,
								groupAttributeList: void 0,
								mainSequence: void 0,
								avChatRoomKey: void 0,
								attributeControl: ["RaceConflict"]
							},
							keyMap: {
								request: {
									key: "key",
									value: "value"
								}
							}
						}
					}(e)), this._configMap.set(np, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.MODIFY_GROUP_ATTRIBUTES)
							}),
							body: {
								groupID: void 0,
								groupAttributeList: void 0,
								mainSequence: void 0,
								avChatRoomKey: void 0,
								attributeControl: ["RaceConflict"]
							},
							keyMap: {
								request: {
									key: "key",
									value: "value"
								}
							}
						}
					}(e)), this._configMap.set(op, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.DELETE_GROUP_ATTRIBUTES)
							}),
							body: {
								groupID: void 0,
								groupAttributeList: void 0,
								mainSequence: void 0,
								avChatRoomKey: void 0,
								attributeControl: ["RaceConflict"]
							},
							keyMap: {
								request: {
									key: "key"
								}
							}
						}
					}(e)), this._configMap.set(rp, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.CLEAR_GROUP_ATTRIBUTES)
							}),
							body: {
								groupID: void 0,
								mainSequence: void 0,
								avChatRoomKey: void 0,
								attributeControl: ["RaceConflict"]
							}
						}
					}(e)), this._configMap.set(ap, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP_ATTR, ".")
									.concat(Ws.CMD.GET_GROUP_ATTRIBUTES)
							}),
							body: {
								groupID: void 0,
								avChatRoomKey: void 0,
								groupType: 1
							},
							keyMap: {
								request: {
									avChatRoomKey: "Key",
									groupType: "GroupType"
								}
							}
						}
					}(e)), this._configMap.set(sp, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.GET_GROUP_MEMBER_LIST)
							}),
							body: {
								groupID: void 0,
								limit: 0,
								offset: 0,
								memberRoleFilter: void 0,
								memberInfoFilter: ["Role", "NameCard", "ShutUpUntil",
									"JoinTime"
								],
								memberCustomFieldFilter: void 0
							},
							keyMap: {
								request: {
									memberCustomFieldFilter: "AppDefinedDataFilter_GroupMember"
								},
								response: {
									AppMemberDefinedData: "memberCustomField",
									AppDefinedDataFilter_GroupMember: "memberCustomFieldFilter",
									MemberList: "members",
									ShutUpUntil: "muteUntil"
								}
							}
						}
					}(e)), this._configMap.set(ip, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.GET_GROUP_MEMBER_INFO)
							}),
							body: {
								groupID: void 0,
								userIDList: void 0,
								memberInfoFilter: void 0,
								memberCustomFieldFilter: void 0
							},
							keyMap: {
								request: {
									userIDList: "Member_List_Account",
									memberCustomFieldFilter: "AppDefinedDataFilter_GroupMember"
								},
								response: {
									MemberList: "members",
									ShutUpUntil: "muteUntil",
									AppDefinedDataFilter_GroupMember: "memberCustomFieldFilter",
									AppMemberDefinedData: "memberCustomField"
								}
							}
						}
					}(e)), this._configMap.set(up, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.ADD_GROUP_MEMBER)
							}),
							body: {
								groupID: void 0,
								silence: void 0,
								userIDList: void 0
							},
							keyMap: {
								request: {
									userID: "Member_Account",
									userIDList: "MemberList"
								},
								response: {
									MemberList: "members"
								}
							}
						}
					}(e)), this._configMap.set(cp, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.DELETE_GROUP_MEMBER)
							}),
							body: {
								groupID: void 0,
								userIDList: void 0,
								reason: void 0
							},
							keyMap: {
								request: {
									userIDList: "MemberToDel_Account"
								}
							}
						}
					}(e)), this._configMap.set(lp, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.GROUP, ".").concat(Ws
									.CMD.MODIFY_GROUP_MEMBER_INFO)
							}),
							body: {
								groupID: void 0,
								userID: void 0,
								messageRemindType: void 0,
								nameCard: void 0,
								role: void 0,
								memberCustomField: void 0,
								muteTime: void 0
							},
							keyMap: {
								request: {
									userID: "Member_Account",
									memberCustomField: "AppMemberDefinedData",
									muteTime: "ShutUpTime",
									messageRemindType: "MsgFlag"
								}
							}
						}
					}(e)), this._configMap.set(gp, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.IM_OPEN_STAT, ".")
									.concat(Ws.CMD.TIM_WEB_REPORT_V2)
							}),
							body: {
								header: {},
								event: [],
								quality: []
							},
							keyMap: {
								request: {
									SDKType: "sdk_type",
									SDKVersion: "sdk_version",
									deviceType: "device_type",
									platform: "platform",
									instanceID: "instance_id",
									traceID: "trace_id",
									SDKAppID: "sdk_app_id",
									userID: "user_id",
									tinyID: "tiny_id",
									extension: "extension",
									timestamp: "timestamp",
									networkType: "network_type",
									eventType: "event_type",
									code: "error_code",
									message: "error_message",
									moreMessage: "more_message",
									duplicate: "duplicate",
									costTime: "cost_time",
									level: "level",
									qualityType: "quality_type",
									reportIndex: "report_index",
									wholePeriod: "whole_period",
									totalCount: "total_count",
									rttCount: "success_count_business",
									successRateOfRequest: "percent_business",
									countLessThan1Second: "success_count_business",
									percentOfCountLessThan1Second: "percent_business",
									countLessThan3Second: "success_count_platform",
									percentOfCountLessThan3Second: "percent_platform",
									successCountOfBusiness: "success_count_business",
									successRateOfBusiness: "percent_business",
									successCountOfPlatform: "success_count_platform",
									successRateOfPlatform: "percent_platform",
									successCountOfMessageReceived: "success_count_business",
									successRateOfMessageReceived: "percent_business",
									avgRTT: "average_value",
									avgDelay: "average_value",
									avgValue: "average_value"
								}
							}
						}
					}(o)), this._configMap.set(hp, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.HEARTBEAT, ".")
									.concat(Ws.CMD.ALIVE)
							}),
							body: {}
						}
					}(e)), this._configMap.set(fp, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.IM_OPEN_PUSH, ".")
									.concat(Ws.CMD.MESSAGE_PUSH)
							}),
							body: {},
							keyMap: {
								response: {
									C2cMsgArray: "C2CMessageArray",
									GroupMsgArray: "groupMessageArray",
									GroupTips: "groupTips",
									C2cNotifyMsgArray: "C2CNotifyMessageArray",
									ClientSeq: "clientSequence",
									MsgPriority: "priority",
									NoticeSeq: "noticeSequence",
									MsgContent: "content",
									MsgType: "type",
									MsgBody: "elements",
									ToGroupId: "to",
									Desc: "description",
									Ext: "extension",
									IsSyncMsg: "isSyncMessage",
									Flag: "needSync",
									NeedAck: "needAck",
									PendencyAdd_Account: "userID",
									ProfileImNick: "nick",
									PendencyType: "applicationType"
								}
							}
						}
					}(e)), this._configMap.set(_p, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.OPEN_IM, ".").concat(
									Ws.CMD.MESSAGE_PUSH_ACK)
							}),
							body: {
								sessionData: void 0
							},
							keyMap: {
								request: {
									sessionData: "SessionData"
								}
							}
						}
					}(e)), this._configMap.set(mp, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.IM_OPEN_STATUS, ".")
									.concat(Ws.CMD.STATUS_FORCEOFFLINE)
							}),
							body: {},
							keyMap: {
								response: {
									C2cNotifyMsgArray: "C2CNotifyMessageArray",
									NoticeSeq: "noticeSequence",
									KickoutMsgNotify: "kickoutMsgNotify",
									NewInstInfo: "newInstanceInfo"
								}
							}
						}
					}(e)), this._configMap.set(Mp, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.IM_LONG_MESSAGE, ".")
									.concat(Ws.CMD.DOWNLOAD_MERGER_MESSAGE)
							}),
							body: {
								downloadKey: ""
							},
							keyMap: {
								response: {
									Data: "data",
									Desc: "description",
									Ext: "extension",
									Download_Flag: "downloadFlag",
									ThumbUUID: "thumbUUID",
									VideoUUID: "videoUUID"
								}
							}
						}
					}(e)), this._configMap.set(vp, function(e) {
						return {
							head: t(t({}, e), {}, {
								servcmd: "".concat(Ws.NAME.IM_LONG_MESSAGE, ".")
									.concat(Ws.CMD.UPLOAD_MERGER_MESSAGE)
							}),
							body: {
								messageList: []
							},
							keyMap: {
								request: {
									fromAccount: "From_Account",
									toAccount: "To_Account",
									msgTimeStamp: "MsgTimeStamp",
									msgSeq: "MsgSeq",
									msgRandom: "MsgRandom",
									msgBody: "MsgBody",
									type: "MsgType",
									content: "MsgContent",
									data: "Data",
									description: "Desc",
									extension: "Ext",
									sizeType: "Type",
									uuid: "UUID",
									url: "",
									imageUrl: "URL",
									fileUrl: "Url",
									remoteAudioUrl: "Url",
									remoteVideoUrl: "VideoUrl",
									thumbUUID: "ThumbUUID",
									videoUUID: "VideoUUID",
									videoUrl: "",
									downloadFlag: "Download_Flag",
									from: "From_Account",
									time: "MsgTimeStamp",
									messageRandom: "MsgRandom",
									messageSequence: "MsgSeq",
									elements: "MsgBody",
									clientSequence: "ClientSeq",
									payload: "MsgContent",
									messageList: "MsgList",
									messageNumber: "MsgNum",
									abstractList: "AbstractList",
									messageBody: "MsgBody"
								}
							}
						}
					}(e))
				}
			}, {
				key: "has",
				value: function(e) {
					return this._configMap.has(e)
				}
			}, {
				key: "get",
				value: function(e) {
					return this._configMap.get(e)
				}
			}, {
				key: "update",
				value: function() {
					this._fillConfigMap()
				}
			}, {
				key: "getKeyMap",
				value: function(e) {
					return this.has(e) ? this.get(e).keyMap || {} : (Ki.warn("".concat(this
						._className, ".getKeyMap unknown protocolName:").concat(e)), {})
				}
			}, {
				key: "getProtocolData",
				value: function(e) {
					var t = e.protocolName,
						n = e.requestData,
						o = this.get(t),
						r = null;
					if (n) {
						var a = this._simpleDeepCopy(o),
							s = a.body,
							i = Object.create(null);
						for (var u in s)
							if (Object.prototype.hasOwnProperty.call(s, u)) {
								if (i[u] = s[u], void 0 === n[u]) continue;
								i[u] = n[u]
							} a.body = i, r = this._getUplinkData(a)
					} else r = this._getUplinkData(o);
					return r
				}
			}, {
				key: "_getUplinkData",
				value: function(e) {
					var t = this._requestDataCleaner(e),
						n = Cu(t.head),
						o = Uv(t.body, this._getRequestKeyMap(n));
					return t.body = o, t
				}
			}, {
				key: "_getRequestKeyMap",
				value: function(e) {
					var n = this.getKeyMap(e);
					return t(t({}, bv.request), n.request)
				}
			}, {
				key: "_requestDataCleaner",
				value: function(e) {
					var t = Array.isArray(e) ? [] : Object.create(null);
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && tu(o) &&
						null !== e[o] && void 0 !== e[o] && ("object" !== n(e[o]) ? t[o] = e[
							o] : t[o] = this._requestDataCleaner.bind(this)(e[o]));
					return t
				}
			}, {
				key: "_simpleDeepCopy",
				value: function(e) {
					for (var t, n = Object.keys(e), o = {}, r = 0, a = n.length; r < a; r++) t =
						n[r], Wi(e[t]) ? o[t] = Array.from(e[t]) : Yi(e[t]) ? o[t] = this
						._simpleDeepCopy(e[t]) : o[t] = e[t];
					return o
				}
			}]), e
		}(),
		Qv = [_p],
		Zv = function() {
			function e(t) {
				o(this, e), this._sessionModule = t, this._className = "DownlinkHandler", this
					._eventHandlerMap = new Map, this._eventHandlerMap.set("C2CMessageArray", this
						._c2cMessageArrayHandler.bind(this)), this._eventHandlerMap.set("groupMessageArray",
						this._groupMessageArrayHandler.bind(this)), this._eventHandlerMap.set("groupTips", this
						._groupTipsHandler.bind(this)), this._eventHandlerMap.set("C2CNotifyMessageArray", this
						._C2CNotifyMessageArrayHandler.bind(this)), this._eventHandlerMap.set("profileModify",
						this._profileHandler.bind(this)), this._eventHandlerMap.set("friendListMod", this
						._relationChainHandler.bind(this)), this._eventHandlerMap.set("recentContactMod", this
						._recentContactHandler.bind(this)), this._keys = v(this._eventHandlerMap.keys())
			}
			return a(e, [{
				key: "_c2cMessageArrayHandler",
				value: function(e) {
					var t = this._sessionModule.getModule($c);
					if (t) {
						if (e.dataList.forEach((function(e) {
								if (1 === e.isSyncMessage) {
									var t = e.from;
									e.from = e.to, e.to = t
								}
							})), 1 === e.needSync) this._sessionModule.getModule(rl)
							.startOnlineSync();
						t.onNewC2CMessage({
							dataList: e.dataList,
							isInstantMessage: !0
						})
					}
				}
			}, {
				key: "_groupMessageArrayHandler",
				value: function(e) {
					var t = this._sessionModule.getModule(Yc);
					t && t.onNewGroupMessage({
						event: e.event,
						dataList: e.dataList,
						isInstantMessage: !0
					})
				}
			}, {
				key: "_groupTipsHandler",
				value: function(e) {
					var t = this._sessionModule.getModule(Yc);
					if (t) {
						var n = e.event,
							o = e.dataList,
							r = e.isInstantMessage,
							a = void 0 === r || r,
							s = e.isSyncingEnded;
						switch (n) {
							case 4:
							case 6:
								t.onNewGroupTips({
									event: n,
									dataList: o
								});
								break;
							case 5:
								o.forEach((function(e) {
									Wi(e.elements.revokedInfos) ? t
										.onGroupMessageRevoked({
											dataList: o
										}) : Wi(e.elements.groupMessageReadNotice) ?
										t.onGroupMessageReadNotice({
											dataList: o
										}) : t.onNewGroupSystemNotice({
											dataList: o,
											isInstantMessage: a,
											isSyncingEnded: s
										})
								}));
								break;
							case 12:
								this._sessionModule.getModule(Jc).onNewGroupAtTips({
									dataList: o
								});
								break;
							default:
								Ki.log("".concat(this._className,
									"._groupTipsHandler unknown event:").concat(n,
									" dataList:"), o)
						}
					}
				}
			}, {
				key: "_C2CNotifyMessageArrayHandler",
				value: function(e) {
					var t = this,
						n = e.dataList;
					if (Wi(n)) {
						var o = this._sessionModule.getModule($c);
						n.forEach((function(e) {
							if (zi(e))
								if (e.hasOwnProperty("kickoutMsgNotify")) {
									var r = e.kickoutMsgNotify,
										a = r.kickType,
										s = r.newInstanceInfo,
										i = void 0 === s ? {} : s;
									1 === a ? t._sessionModule
										.onMultipleAccountKickedOut(i) : 2 === a &&
										t._sessionModule.onMultipleDeviceKickedOut(
											i)
								} else e.hasOwnProperty("c2cMessageRevokedNotify") ?
									o && o.onC2CMessageRevoked({
										dataList: n
									}) : e.hasOwnProperty("c2cMessageReadReceipt") ?
									o && o.onC2CMessageReadReceipt({
										dataList: n
									}) : e.hasOwnProperty("c2cMessageReadNotice") &&
									o && o.onC2CMessageReadNotice({
										dataList: n
									})
						}))
					}
				}
			}, {
				key: "_profileHandler",
				value: function(e) {
					this._sessionModule.getModule(jc).onProfileModified({
						dataList: e.dataList
					});
					var t = this._sessionModule.getModule(zc);
					t && t.onFriendProfileModified({
						dataList: e.dataList
					})
				}
			}, {
				key: "_relationChainHandler",
				value: function(e) {
					this._sessionModule.getModule(jc).onRelationChainModified({
						dataList: e.dataList
					});
					var t = this._sessionModule.getModule(zc);
					t && t.onRelationChainModified({
						dataList: e.dataList
					})
				}
			}, {
				key: "_recentContactHandler",
				value: function(e) {
					var t = e.dataList;
					if (Wi(t)) {
						var n = this._sessionModule.getModule(Jc);
						n && t.forEach((function(e) {
							var t = e.pushType,
								o = e.recentContactTopItem,
								r = e.recentContactDeleteItem;
							1 === t ? n.onConversationDeleted(r.recentContactList) :
								2 === t ? n.onConversationPinned(o
									.recentContactList) : 3 === t && n
								.onConversationUnpinned(o.recentContactList)
						}))
					}
				}
			}, {
				key: "_cloudControlConfigHandler",
				value: function(e) {
					this._sessionModule.getModule(ul).onPushedCloudControlConfig(e)
				}
			}, {
				key: "onMessage",
				value: function(e) {
					var t = this,
						n = e.head,
						o = e.body;
					if (this._isPushedCloudControlConfig(n)) this._cloudControlConfigHandler(o);
					else {
						var r = o.eventArray,
							a = o.isInstantMessage,
							s = o.isSyncingEnded,
							i = o.needSync;
						if (Wi(r))
							for (var u = null, c = null, l = 0, p = 0, d = r.length; p <
								d; p++) {
								l = (u = r[p]).event;
								var g = Object.keys(u).find((function(e) {
									return -1 !== t._keys.indexOf(e)
								}));
								g ? (c = u[g], this._eventHandlerMap.get(g)({
									event: l,
									dataList: c,
									isInstantMessage: a,
									isSyncingEnded: s,
									needSync: i
								})) : Ki.log("".concat(this._className,
									".onMessage unknown eventItem:").concat(u))
							}
					}
				}
			}, {
				key: "_isPushedCloudControlConfig",
				value: function(e) {
					return e.servcmd && e.servcmd.includes(Ip)
				}
			}]), e
		}(),
		eM = function(e) {
			i(n, e);
			var t = _(n);

			function n(e) {
				var r;
				return o(this, n), (r = t.call(this, e))._className = "SessionModule", r._platform = r
					.getPlatform(), r._protocolHandler = new Xv(h(r)), r._messageDispatcher = new Zv(h(r)), r
			}
			return a(n, [{
				key: "updateProtocolConfig",
				value: function() {
					this._protocolHandler.update()
				}
			}, {
				key: "request",
				value: function(e) {
					Ki.debug("".concat(this._className, ".request options:"), e);
					var t = e.protocolName,
						n = e.tjgID;
					if (!this._protocolHandler.has(t)) return Ki.warn("".concat(this._className,
						".request unknown protocol:").concat(t)), cm({
						code: Tp.CANNOT_FIND_PROTOCOL,
						message: kd
					});
					var o = this.getProtocolData(e);
					Lu(n) || (o.head.tjgID = n);
					var r = this.getModule(sl);
					return Qv.includes(t) ? r.simplySend(o) : r.send(o)
				}
			}, {
				key: "getKeyMap",
				value: function(e) {
					return this._protocolHandler.getKeyMap(e)
				}
			}, {
				key: "genCommonHead",
				value: function() {
					var e = this.getModule(Xc);
					return {
						ver: "v4",
						platform: this._platform,
						websdkappid: js,
						websdkversion: Hs,
						a2: e.getA2Key() || void 0,
						tinyid: e.getTinyID() || void 0,
						status_instid: e.getStatusInstanceID(),
						sdkappid: e.getSDKAppID(),
						contenttype: e.getContentType(),
						reqtime: 0,
						identifier: e.getA2Key() ? void 0 : e.getUserID(),
						usersig: e.getA2Key() ? void 0 : e.getUserSig(),
						sdkability: 2,
						tjgID: ""
					}
				}
			}, {
				key: "genCosSpecifiedHead",
				value: function() {
					var e = this.getModule(Xc);
					return {
						ver: "v4",
						platform: this._platform,
						websdkappid: js,
						websdkversion: Hs,
						sdkappid: e.getSDKAppID(),
						contenttype: e.getContentType(),
						reqtime: 0,
						identifier: e.getUserID(),
						usersig: e.getUserSig(),
						status_instid: e.getStatusInstanceID(),
						sdkability: 2
					}
				}
			}, {
				key: "genSSOReportHead",
				value: function() {
					var e = this.getModule(Xc);
					return {
						ver: "v4",
						platform: this._platform,
						websdkappid: js,
						websdkversion: Hs,
						sdkappid: e.getSDKAppID(),
						contenttype: "",
						reqtime: 0,
						identifier: "",
						usersig: "",
						status_instid: e.getStatusInstanceID(),
						sdkability: 2
					}
				}
			}, {
				key: "getProtocolData",
				value: function(e) {
					return this._protocolHandler.getProtocolData(e)
				}
			}, {
				key: "onErrorCodeNotZero",
				value: function(e) {
					var t = e.errorCode;
					if (t === Tp.HELLO_ANSWER_KICKED_OUT) {
						var n = e.kickType,
							o = e.newInstanceInfo,
							r = void 0 === o ? {} : o;
						1 === n ? this.onMultipleAccountKickedOut(r) : 2 === n && this
							.onMultipleDeviceKickedOut(r)
					}
					t !== Tp.MESSAGE_A2KEY_EXPIRED && t !== Tp.ACCOUNT_A2KEY_EXPIRED || (this
						._onUserSigExpired(), this.getModule(sl).reConnect())
				}
			}, {
				key: "onMessage",
				value: function(e) {
					var t = e.body,
						n = t.needAck,
						o = void 0 === n ? 0 : n,
						r = t.sessionData;
					1 === o && this._sendACK(r), this._messageDispatcher.onMessage(e)
				}
			}, {
				key: "onReconnected",
				value: function() {
					var e = this;
					this.isLoggedIn() && this.request({
						protocolName: dl
					}).then((function(t) {
						var n = t.data.instanceID;
						e.getModule(Xc).setStatusInstanceID(n), Ki.log("".concat(e
								._className,
								".onReconnected, login ok. start to sync unread messages."
								)), e.getModule(rl).startSyncOnReconnected(), e
							.getModule(cl).startPull(), e.getModule(Yc)
							.updateLocalMainSequenceOnReconnected()
					}))
				}
			}, {
				key: "onMultipleAccountKickedOut",
				value: function(e) {
					this.getModule(Bc).onMultipleAccountKickedOut(e)
				}
			}, {
				key: "onMultipleDeviceKickedOut",
				value: function(e) {
					this.getModule(Bc).onMultipleDeviceKickedOut(e)
				}
			}, {
				key: "_onUserSigExpired",
				value: function() {
					this.getModule(Bc).onUserSigExpired()
				}
			}, {
				key: "_sendACK",
				value: function(e) {
					this.request({
						protocolName: _p,
						requestData: {
							sessionData: e
						}
					})
				}
			}]), n
		}(pl),
		tM = function(e) {
			i(n, e);
			var t = _(n);

			function n(e) {
				var r;
				return o(this, n), (r = t.call(this, e))._className = "MessageLossDetectionModule", r
					._maybeLostSequencesMap = new Map, r
			}
			return a(n, [{
				key: "onMessageMaybeLost",
				value: function(e, t, n) {
					this._maybeLostSequencesMap.has(e) || this._maybeLostSequencesMap.set(e,
				[]);
					for (var o = this._maybeLostSequencesMap.get(e), r = 0; r < n; r++) o.push(
						t + r);
					Ki.debug("".concat(this._className,
						".onMessageMaybeLost. maybeLostSequences:").concat(o))
				}
			}, {
				key: "detectMessageLoss",
				value: function(e, t) {
					var n = this._maybeLostSequencesMap.get(e);
					if (!Lu(n) && !Lu(t)) {
						var o = t.filter((function(e) {
							return -1 !== n.indexOf(e)
						}));
						if (Ki.debug("".concat(this._className,
								".detectMessageLoss. matchedSequences:").concat(o)), n
							.length === o.length) Ki.info("".concat(this._className,
								".detectMessageLoss no message loss. conversationID:")
							.concat(e));
						else {
							var r, a = n.filter((function(e) {
									return -1 === o.indexOf(e)
								})),
								s = a.length;
							s <= 5 ? r = e + "-" + a.join("-") : (a.sort((function(e, t) {
									return e - t
								})), r = e + " start:" + a[0] + " end:" + a[s - 1] +
								" count:" + s), new jd(nh).setMessage(r).setNetworkType(this
								.getNetworkType()).setLevel("warning").end(), Ki.warn(""
								.concat(this._className,
									".detectMessageLoss message loss detected. conversationID:"
									).concat(e, " lostSequences:").concat(a))
						}
						n.length = 0
					}
				}
			}, {
				key: "reset",
				value: function() {
					Ki.log("".concat(this._className, ".reset")), this._maybeLostSequencesMap
						.clear()
				}
			}]), n
		}(pl),
		nM = function(e) {
			i(n, e);
			var t = _(n);

			function n(e) {
				var r;
				return o(this, n), (r = t.call(this, e))._className = "CloudControlModule", r._cloudConfig =
					new Map, r._expiredTime = 0, r._version = 0, r._isFetching = !1, r
			}
			return a(n, [{
				key: "getCloudConfig",
				value: function(e) {
					return Ji(e) ? this._cloudConfig : this._cloudConfig.has(e) ? this
						._cloudConfig.get(e) : void 0
				}
			}, {
				key: "_canFetchConfig",
				value: function() {
					return this.isLoggedIn() && !this._isFetching && Date.now() >= this
						._expiredTime
				}
			}, {
				key: "fetchConfig",
				value: function() {
					var e = this,
						t = this._canFetchConfig();
					if (Ki.log("".concat(this._className, ".fetchConfig canFetchConfig:")
							.concat(t)), t) {
						var n = new jd(lh),
							o = this.getModule(Xc).getSDKAppID();
						this._isFetching = !0, this.request({
							protocolName: yp,
							requestData: {
								SDKAppID: o,
								version: this._version
							}
						}).then((function(t) {
							e._isFetching = !1, n.setMessage("version:".concat(e
									._version, " newVersion:").concat(t.data
									.version, " config:").concat(t.data
									.cloudControlConfig)).setNetworkType(e
									.getNetworkType()).end(), Ki.log("".concat(e
									._className, ".fetchConfig ok")), e
								._parseCloudControlConfig(t.data)
						})).catch((function(t) {
							e._isFetching = !1, e.probeNetwork().then((function(e) {
									var o = m(e, 2),
										r = o[0],
										a = o[1];
									n.setError(t, r, a).end()
								})), Ki.log("".concat(e._className,
									".fetchConfig failed. error:"), t), e
								._setExpiredTimeOnResponseError(12e4)
						}))
					}
				}
			}, {
				key: "onPushedCloudControlConfig",
				value: function(e) {
					Ki.log("".concat(this._className, ".onPushedCloudControlConfig")), new jd(
							ph).setNetworkType(this.getNetworkType()).setMessage("newVersion:"
							.concat(e.version, " config:").concat(e.cloudControlConfig)).end(),
						this._parseCloudControlConfig(e)
				}
			}, {
				key: "onCheckTimer",
				value: function(e) {
					this._canFetchConfig() && this.fetchConfig()
				}
			}, {
				key: "_parseCloudControlConfig",
				value: function(e) {
					var t = this,
						n = "".concat(this._className, "._parseCloudControlConfig"),
						o = e.errorCode,
						r = e.errorMessage,
						a = e.cloudControlConfig,
						s = e.version,
						i = e.expiredTime;
					if (0 === o) {
						if (this._version !== s) {
							var u = null;
							try {
								u = JSON.parse(a)
							} catch (_M) {
								Ki.error("".concat(n, " JSON parse error:").concat(a))
							}
							u && (this._cloudConfig.clear(), Object.keys(u).forEach((function(
							e) {
								t._cloudConfig.set(e, u[e])
							})), this._version = s, this.emitInnerEvent(Om
								.CLOUD_CONFIG_UPDATED))
						}
						this._expiredTime = Date.now() + 1e3 * i
					} else Ji(o) ? (Ki.log("".concat(n, " failed. Invalid message format:"), e),
						this._setExpiredTimeOnResponseError(36e5)) : (Ki.error("".concat(n,
							" errorCode:").concat(o, " errorMessage:").concat(r)), this
						._setExpiredTimeOnResponseError(12e4))
				}
			}, {
				key: "_setExpiredTimeOnResponseError",
				value: function(e) {
					this._expiredTime = Date.now() + e
				}
			}, {
				key: "reset",
				value: function() {
					Ki.log("".concat(this._className, ".reset")), this._cloudConfig.clear(),
						this._expiredTime = 0, this._version = 0, this._isFetching = !1
				}
			}]), n
		}(pl),
		oM = function(e) {
			i(n, e);
			var t = _(n);

			function n(e) {
				var r;
				return o(this, n), (r = t.call(this, e))._className = "PullGroupMessageModule", r
					._remoteLastMessageSequenceMap = new Map, r.PULL_LIMIT_COUNT = 15, r
			}
			return a(n, [{
				key: "startPull",
				value: function() {
					var e = this,
						t = this._getNeedPullConversationList();
					this._getRemoteLastMessageSequenceList().then((function() {
						var n = e.getModule(Jc);
						t.forEach((function(t) {
							var o = t.conversationID,
								r = o.replace(ro.CONV_GROUP, ""),
								a = n.getGroupLocalLastMessageSequence(
									o),
								s = e._remoteLastMessageSequenceMap.get(
									r) || 0,
								i = s - a;
							Ki.log("".concat(e._className,
										".startPull groupID:").concat(r,
										" localLastMessageSequence:")
									.concat(a, " ") +
									"remoteLastMessageSequence:".concat(
										s, " diff:").concat(i)), a >
								0 && i >= 1 && i < 300 && e
								._pullMissingMessage({
									groupID: r,
									localLastMessageSequence: a,
									remoteLastMessageSequence: s,
									diff: i
								})
						}))
					}))
				}
			}, {
				key: "_getNeedPullConversationList",
				value: function() {
					return this.getModule(Jc).getLocalConversationList().filter((function(e) {
						return e.type === ro.CONV_GROUP && e.groupProfile.type !==
							ro.GRP_AVCHATROOM
					}))
				}
			}, {
				key: "_getRemoteLastMessageSequenceList",
				value: function() {
					var e = this;
					return this.getModule(Yc).getGroupList().then((function(t) {
						for (var n = t.data.groupList, o = void 0 === n ? [] : n,
								r = 0; r < o.length; r++) {
							var a = o[r],
								s = a.groupID,
								i = a.nextMessageSeq;
							if (a.type !== ro.GRP_AVCHATROOM) {
								var u = i - 1;
								e._remoteLastMessageSequenceMap.set(s, u)
							}
						}
					}))
				}
			}, {
				key: "_pullMissingMessage",
				value: function(e) {
					var t = this,
						n = e.localLastMessageSequence,
						o = e.remoteLastMessageSequence,
						r = e.diff;
					e.count = r > this.PULL_LIMIT_COUNT ? this.PULL_LIMIT_COUNT : r, e
						.sequence = r > this.PULL_LIMIT_COUNT ? n + this.PULL_LIMIT_COUNT : n +
						r, this._getGroupMissingMessage(e).then((function(a) {
							a.length > 0 && (a[0].sequence + 1 <= o && (e
									.localLastMessageSequence = n + t
									.PULL_LIMIT_COUNT, e.diff = r - t
									.PULL_LIMIT_COUNT, t._pullMissingMessage(e)), t
								.getModule(Yc).onNewGroupMessage({
									dataList: a,
									isInstantMessage: !1
								}))
						}))
				}
			}, {
				key: "_getGroupMissingMessage",
				value: function(e) {
					var t = this,
						n = new jd(Fg);
					return this.request({
						protocolName: zl,
						requestData: {
							groupID: e.groupID,
							count: e.count,
							sequence: e.sequence
						}
					}).then((function(o) {
						var r = o.data.messageList,
							a = void 0 === r ? [] : r;
						return n.setNetworkType(t.getNetworkType()).setMessage(
								"groupID:".concat(e.groupID, " count:").concat(e
									.count, " sequence:").concat(e.sequence,
									" messageList length:").concat(a.length)).end(),
							a
					})).catch((function(e) {
						t.probeNetwork().then((function(t) {
							var o = m(t, 2),
								r = o[0],
								a = o[1];
							n.setError(e, r, a).end()
						}))
					}))
				}
			}, {
				key: "reset",
				value: function() {
					Ki.log("".concat(this._className, ".reset")), this
						._remoteLastMessageSequenceMap.clear()
				}
			}]), n
		}(pl),
		rM = function() {
			function e() {
				o(this, e), this._className = "AvgE2EDelay", this._e2eDelayArray = []
			}
			return a(e, [{
				key: "addMessageDelay",
				value: function(e) {
					var t = Au(e.currentTime / 1e3 - e.time, 2);
					this._e2eDelayArray.push(t)
				}
			}, {
				key: "_calcAvg",
				value: function(e, t) {
					if (0 === t) return 0;
					var n = 0;
					return e.forEach((function(e) {
						n += e
					})), Au(n / t, 1)
				}
			}, {
				key: "_calcTotalCount",
				value: function() {
					return this._e2eDelayArray.length
				}
			}, {
				key: "_calcCountWithLimit",
				value: function(e) {
					var t = e.e2eDelayArray,
						n = e.min,
						o = e.max;
					return t.filter((function(e) {
						return n < e && e <= o
					})).length
				}
			}, {
				key: "_calcPercent",
				value: function(e, t) {
					var n = Au(e / t * 100, 2);
					return n > 100 && (n = 100), n
				}
			}, {
				key: "_checkE2EDelayException",
				value: function(e, t) {
					var n = e.filter((function(e) {
						return e > t
					}));
					if (n.length > 0) {
						var o = n.length,
							r = Math.min.apply(Math, v(n)),
							a = Math.max.apply(Math, v(n)),
							s = this._calcAvg(n, o),
							i = Au(o / e.length * 100, 2);
						new jd(mg).setMessage("message e2e delay exception. count:".concat(o,
							" min:").concat(r, " max:").concat(a, " avg:").concat(s,
							" percent:").concat(i)).setLevel("warning").end()
					}
				}
			}, {
				key: "getStatResult",
				value: function() {
					var e = this._calcTotalCount();
					if (0 === e) return null;
					var t = v(this._e2eDelayArray),
						n = this._calcCountWithLimit({
							e2eDelayArray: t,
							min: 0,
							max: 1
						}),
						o = this._calcCountWithLimit({
							e2eDelayArray: t,
							min: 1,
							max: 3
						}),
						r = this._calcPercent(n, e),
						a = this._calcPercent(o, e),
						s = this._calcAvg(t, e);
					return this._checkE2EDelayException(t, 3), this.reset(), {
						totalCount: e,
						countLessThan1Second: n,
						percentOfCountLessThan1Second: r,
						countLessThan3Second: o,
						percentOfCountLessThan3Second: a,
						avgDelay: s
					}
				}
			}, {
				key: "reset",
				value: function() {
					this._e2eDelayArray.length = 0
				}
			}]), e
		}(),
		aM = function() {
			function e() {
				o(this, e), this._className = "AvgRTT", this._requestCount = 0, this._rttArray = []
			}
			return a(e, [{
				key: "addRequestCount",
				value: function() {
					this._requestCount += 1
				}
			}, {
				key: "addRTT",
				value: function(e) {
					this._rttArray.push(e)
				}
			}, {
				key: "_calcTotalCount",
				value: function() {
					return this._requestCount
				}
			}, {
				key: "_calcRTTCount",
				value: function(e) {
					return e.length
				}
			}, {
				key: "_calcSuccessRateOfRequest",
				value: function(e, t) {
					if (0 === t) return 0;
					var n = Au(e / t * 100, 2);
					return n > 100 && (n = 100), n
				}
			}, {
				key: "_calcAvg",
				value: function(e, t) {
					if (0 === t) return 0;
					var n = 0;
					return e.forEach((function(e) {
						n += e
					})), parseInt(n / t)
				}
			}, {
				key: "_calcMax",
				value: function() {
					return Math.max.apply(Math, v(this._rttArray))
				}
			}, {
				key: "_calcMin",
				value: function() {
					return Math.min.apply(Math, v(this._rttArray))
				}
			}, {
				key: "getStatResult",
				value: function() {
					var e = this._calcTotalCount(),
						t = v(this._rttArray);
					if (0 === e) return null;
					var n = this._calcRTTCount(t),
						o = this._calcSuccessRateOfRequest(n, e),
						r = this._calcAvg(t, n);
					return Ki.log("".concat(this._className, ".getStatResult max:").concat(this
							._calcMax(), " min:").concat(this._calcMin(), " avg:").concat(
						r)), this.reset(), {
						totalCount: e,
						rttCount: n,
						successRateOfRequest: o,
						avgRTT: r
					}
				}
			}, {
				key: "reset",
				value: function() {
					this._requestCount = 0, this._rttArray.length = 0
				}
			}]), e
		}(),
		sM = function() {
			function e() {
				o(this, e), this._map = new Map
			}
			return a(e, [{
				key: "initMap",
				value: function(e) {
					var t = this;
					e.forEach((function(e) {
						t._map.set(e, {
							totalCount: 0,
							successCount: 0,
							failedCountOfUserSide: 0,
							costArray: [],
							fileSizeArray: []
						})
					}))
				}
			}, {
				key: "addTotalCount",
				value: function(e) {
					return !(Ji(e) || !this._map.has(e)) && (this._map.get(e).totalCount += 1, !
						0)
				}
			}, {
				key: "addSuccessCount",
				value: function(e) {
					return !(Ji(e) || !this._map.has(e)) && (this._map.get(e).successCount += 1,
						!0)
				}
			}, {
				key: "addFailedCountOfUserSide",
				value: function(e) {
					return !(Ji(e) || !this._map.has(e)) && (this._map.get(e)
						.failedCountOfUserSide += 1, !0)
				}
			}, {
				key: "addCost",
				value: function(e, t) {
					return !(Ji(e) || !this._map.has(e)) && (this._map.get(e).costArray.push(t),
						!0)
				}
			}, {
				key: "addFileSize",
				value: function(e, t) {
					return !(Ji(e) || !this._map.has(e)) && (this._map.get(e).fileSizeArray
						.push(t), !0)
				}
			}, {
				key: "_calcSuccessRateOfBusiness",
				value: function(e) {
					if (Ji(e) || !this._map.has(e)) return -1;
					var t = this._map.get(e),
						n = Au(t.successCount / t.totalCount * 100, 2);
					return n > 100 && (n = 100), n
				}
			}, {
				key: "_calcSuccessRateOfPlatform",
				value: function(e) {
					if (Ji(e) || !this._map.has(e)) return -1;
					var t = this._map.get(e),
						n = this._calcSuccessCountOfPlatform(e) / t.totalCount * 100;
					return (n = Au(n, 2)) > 100 && (n = 100), n
				}
			}, {
				key: "_calcTotalCount",
				value: function(e) {
					return Ji(e) || !this._map.has(e) ? -1 : this._map.get(e).totalCount
				}
			}, {
				key: "_calcSuccessCountOfBusiness",
				value: function(e) {
					return Ji(e) || !this._map.has(e) ? -1 : this._map.get(e).successCount
				}
			}, {
				key: "_calcSuccessCountOfPlatform",
				value: function(e) {
					if (Ji(e) || !this._map.has(e)) return -1;
					var t = this._map.get(e);
					return t.successCount + t.failedCountOfUserSide
				}
			}, {
				key: "_calcAvg",
				value: function(e) {
					return Ji(e) || !this._map.has(e) ? -1 : e === Fd ? this._calcAvgSpeed(e) :
						this._calcAvgCost(e)
				}
			}, {
				key: "_calcAvgCost",
				value: function(e) {
					var t = this._map.get(e).costArray.length;
					if (0 === t) return 0;
					var n = 0;
					return this._map.get(e).costArray.forEach((function(e) {
						n += e
					})), parseInt(n / t)
				}
			}, {
				key: "_calcAvgSpeed",
				value: function(e) {
					var t = 0,
						n = 0;
					return this._map.get(e).costArray.forEach((function(e) {
						t += e
					})), this._map.get(e).fileSizeArray.forEach((function(e) {
						n += e
					})), parseInt(1e3 * n / t)
				}
			}, {
				key: "getStatResult",
				value: function(e) {
					var t = this._calcTotalCount(e);
					if (0 === t) return null;
					var n = this._calcSuccessCountOfBusiness(e),
						o = this._calcSuccessRateOfBusiness(e),
						r = this._calcSuccessCountOfPlatform(e),
						a = this._calcSuccessRateOfPlatform(e),
						s = this._calcAvg(e);
					return this.reset(e), {
						totalCount: t,
						successCountOfBusiness: n,
						successRateOfBusiness: o,
						successCountOfPlatform: r,
						successRateOfPlatform: a,
						avgValue: s
					}
				}
			}, {
				key: "reset",
				value: function(e) {
					Ji(e) ? this._map.clear() : this._map.set(e, {
						totalCount: 0,
						successCount: 0,
						failedCountOfUserSide: 0,
						costArray: [],
						fileSizeArray: []
					})
				}
			}]), e
		}(),
		iM = function() {
			function e() {
				o(this, e), this._lastMap = new Map, this._currentMap = new Map
			}
			return a(e, [{
				key: "initMap",
				value: function(e) {
					var t = this;
					e.forEach((function(e) {
						t._lastMap.set(e, new Map), t._currentMap.set(e, new Map)
					}))
				}
			}, {
				key: "addMessageSequence",
				value: function(e) {
					var t = e.key,
						n = e.message;
					if (Ji(t) || !this._lastMap.has(t) || !this._currentMap.has(t)) return !1;
					var o = n.conversationID,
						r = n.sequence,
						a = o.replace(ro.CONV_GROUP, "");
					if (0 === this._lastMap.get(t).size) this._addCurrentMap(e);
					else if (this._lastMap.get(t).has(a)) {
						var s = this._lastMap.get(t).get(a),
							i = s.length - 1;
						r > s[0] && r < s[i] ? (s.push(r), s.sort(), this._lastMap.get(t).set(a,
							s)) : this._addCurrentMap(e)
					} else this._addCurrentMap(e);
					return !0
				}
			}, {
				key: "_addCurrentMap",
				value: function(e) {
					var t = e.key,
						n = e.message,
						o = n.conversationID,
						r = n.sequence,
						a = o.replace(ro.CONV_GROUP, "");
					this._currentMap.get(t).has(a) || this._currentMap.get(t).set(a, []), this
						._currentMap.get(t).get(a).push(r)
				}
			}, {
				key: "_copyData",
				value: function(e) {
					if (!Ji(e)) {
						this._lastMap.set(e, new Map);
						var t, n = this._lastMap.get(e),
							o = D(this._currentMap.get(e));
						try {
							for (o.s(); !(t = o.n()).done;) {
								var r = m(t.value, 2),
									a = r[0],
									s = r[1];
								n.set(a, s)
							}
						} catch (i) {
							o.e(i)
						} finally {
							o.f()
						}
						n = null, this._currentMap.set(e, new Map)
					}
				}
			}, {
				key: "getStatResult",
				value: function(e) {
					if (Ji(this._currentMap.get(e)) || Ji(this._lastMap.get(e))) return null;
					if (0 === this._lastMap.get(e).size) return this._copyData(e), null;
					var t = 0,
						n = 0;
					if (this._lastMap.get(e).forEach((function(e, o) {
							var r = v(e.values()),
								a = r.length,
								s = r[a - 1] - r[0] + 1;
							t += s, n += a
						})), 0 === t) return null;
					var o = Au(n / t * 100, 2);
					return o > 100 && (o = 100), this._copyData(e), {
						totalCount: t,
						successCountOfMessageReceived: n,
						successRateOfMessageReceived: o
					}
				}
			}, {
				key: "reset",
				value: function() {
					this._currentMap.clear(), this._lastMap.clear()
				}
			}]), e
		}(),
		uM = function(e) {
			i(r, e);
			var n = _(r);

			function r(e) {
				var t;
				o(this, r), (t = n.call(this, e))._className = "QualityStatModule", t.TAG =
					"im-ssolog-quality-stat", t.reportIndex = 0, t.wholePeriod = !1, t._qualityItems = [Rd, bd,
						wd, Pd, Gd, Ud, Fd, qd, xd, Vd
					], t._messageSentItems = [wd, Pd, Gd, Ud, Fd], t._messageReceivedItems = [qd, xd, Vd], t
					.REPORT_INTERVAL = 120, t.REPORT_SDKAPPID_BLACKLIST = [], t.REPORT_TINYID_WHITELIST = [], t
					._statInfoArr = [], t._avgRTT = new aM, t._avgE2EDelay = new rM, t._rateMessageSent =
					new sM, t._rateMessageReceived = new iM;
				var a = t.getInnerEmitterInstance();
				return a.on(Om.CONTEXT_A2KEY_AND_TINYID_UPDATED, t._onLoginSuccess, h(t)), a.on(Om
					.CLOUD_CONFIG_UPDATED, t._onCloudConfigUpdated, h(t)), t
			}
			return a(r, [{
				key: "_onLoginSuccess",
				value: function() {
					var e = this;
					this._rateMessageSent.initMap(this._messageSentItems), this
						._rateMessageReceived.initMap(this._messageReceivedItems);
					var t = this.getModule(Qc),
						n = t.getItem(this.TAG, !1);
					!Lu(n) && Qi(n.forEach) && (Ki.log("".concat(this._className,
							"._onLoginSuccess.get quality stat log in storage, nums=")
						.concat(n.length)), n.forEach((function(t) {
						e._statInfoArr.push(t)
					})), t.removeItem(this.TAG, !1))
				}
			}, {
				key: "_onCloudConfigUpdated",
				value: function() {
					var e = this.getCloudConfig("q_rpt_interval"),
						t = this.getCloudConfig("q_rpt_sdkappid_bl"),
						n = this.getCloudConfig("q_rpt_tinyid_wl");
					Ji(e) || (this.REPORT_INTERVAL = Number(e)), Ji(t) || (this
						.REPORT_SDKAPPID_BLACKLIST = t.split(",").map((function(e) {
							return Number(e)
						}))), Ji(n) || (this.REPORT_TINYID_WHITELIST = n.split(","))
				}
			}, {
				key: "onCheckTimer",
				value: function(e) {
					this.isLoggedIn() && e % this.REPORT_INTERVAL == 0 && (this.wholePeriod = !
						0, this._report())
				}
			}, {
				key: "addRequestCount",
				value: function() {
					this._avgRTT.addRequestCount()
				}
			}, {
				key: "addRTT",
				value: function(e) {
					this._avgRTT.addRTT(e)
				}
			}, {
				key: "addMessageDelay",
				value: function(e) {
					this._avgE2EDelay.addMessageDelay(e)
				}
			}, {
				key: "addTotalCount",
				value: function(e) {
					this._rateMessageSent.addTotalCount(e) || Ki.warn("".concat(this._className,
						".addTotalCount invalid key:"), e)
				}
			}, {
				key: "addSuccessCount",
				value: function(e) {
					this._rateMessageSent.addSuccessCount(e) || Ki.warn("".concat(this
						._className, ".addSuccessCount invalid key:"), e)
				}
			}, {
				key: "addFailedCountOfUserSide",
				value: function(e) {
					this._rateMessageSent.addFailedCountOfUserSide(e) || Ki.warn("".concat(this
						._className, ".addFailedCountOfUserSide invalid key:"), e)
				}
			}, {
				key: "addCost",
				value: function(e, t) {
					this._rateMessageSent.addCost(e, t) || Ki.warn("".concat(this._className,
						".addCost invalid key or cost:"), e, t)
				}
			}, {
				key: "addFileSize",
				value: function(e, t) {
					this._rateMessageSent.addFileSize(e, t) || Ki.warn("".concat(this
						._className, ".addFileSize invalid key or size:"), e, t)
				}
			}, {
				key: "addMessageSequence",
				value: function(e) {
					this._rateMessageReceived.addMessageSequence(e) || Ki.warn("".concat(this
						._className, ".addMessageSequence invalid key:"), e.key)
				}
			}, {
				key: "_getQualityItem",
				value: function(e) {
					var n = {},
						o = Hd[this.getNetworkType()];
					Ji(o) && (o = 8);
					var r = {
						qualityType: Kd[e],
						timestamp: Ui(),
						networkType: o,
						extension: ""
					};
					switch (e) {
						case Rd:
							n = this._avgRTT.getStatResult();
							break;
						case bd:
							n = this._avgE2EDelay.getStatResult();
							break;
						case wd:
						case Pd:
						case Gd:
						case Ud:
						case Fd:
							n = this._rateMessageSent.getStatResult(e);
							break;
						case qd:
						case xd:
						case Vd:
							n = this._rateMessageReceived.getStatResult(e)
					}
					return null === n ? null : t(t({}, r), n)
				}
			}, {
				key: "_report",
				value: function(e) {
					var t = this,
						n = [],
						o = null;
					Ji(e) ? this._qualityItems.forEach((function(e) {
							null !== (o = t._getQualityItem(e)) && (o.reportIndex = t
								.reportIndex, o.wholePeriod = t.wholePeriod, n.push(
									o))
						})) : null !== (o = this._getQualityItem(e)) && (o.reportIndex = this
							.reportIndex, o.wholePeriod = this.wholePeriod, n.push(o)), Ki
						.debug("".concat(this._className, "._report"), n), this._statInfoArr
						.length > 0 && (n = n.concat(this._statInfoArr), this
					._statInfoArr = []);
					var r = this.getModule(Xc),
						a = r.getSDKAppID(),
						s = r.getTinyID();
					ku(this.REPORT_SDKAPPID_BLACKLIST, a) && !Nu(this.REPORT_TINYID_WHITELIST,
						s) && (n = []), n.length > 0 && this._doReport(n)
				}
			}, {
				key: "_doReport",
				value: function(e) {
					var n = this,
						o = {
							header: vv(this),
							quality: e
						};
					this.request({
						protocolName: gp,
						requestData: t({}, o)
					}).then((function() {
						n.reportIndex++, n.wholePeriod = !1
					})).catch((function(t) {
						Ki.warn("".concat(n._className, "._doReport, online:")
								.concat(n.getNetworkType(), " error:"), t), n
							._statInfoArr = n._statInfoArr.concat(e), n
							._flushAtOnce()
					}))
				}
			}, {
				key: "_flushAtOnce",
				value: function() {
					var e = this.getModule(Qc),
						t = e.getItem(this.TAG, !1),
						n = this._statInfoArr;
					if (Lu(t)) Ki.log("".concat(this._className, "._flushAtOnce count:").concat(
						n.length)), e.setItem(this.TAG, n, !0, !1);
					else {
						var o = n.concat(t);
						o.length > 10 && (o = o.slice(0, 10)), Ki.log("".concat(this.className,
							"._flushAtOnce count:").concat(o.length)), e.setItem(this.TAG,
							o, !0, !1)
					}
					this._statInfoArr = []
				}
			}, {
				key: "reset",
				value: function() {
					Ki.log("".concat(this._className, ".reset")), this._report(), this
						.reportIndex = 0, this.wholePeriod = !1, this
						.REPORT_SDKAPPID_BLACKLIST = [], this.REPORT_TINYID_WHITELIST = [], this
						._avgRTT.reset(), this._avgE2EDelay.reset(), this._rateMessageSent
						.reset(), this._rateMessageReceived.reset()
				}
			}]), r
		}(pl),
		cM = function() {
			function e(t) {
				o(this, e);
				var n = new jd($d);
				this._className = "ModuleManager", this._isReady = !1, this._startLoginTs = 0, this._moduleMap =
					new Map, this._innerEmitter = null, this._outerEmitter = null, this._checkCount = 0, this
					._checkTimer = -1, this._moduleMap.set(Xc, new gv(this, t)), this._moduleMap.set(ul, new nM(
						this)), this._moduleMap.set(ll, new uM(this)), this._moduleMap.set(sl, new zv(this)),
					this._moduleMap.set(al, new eM(this)), this._moduleMap.set(Bc, new hv(this)), this
					._moduleMap.set(Hc, new Ov(this)), this._moduleMap.set(jc, new dv(this)), this._moduleMap
					.set($c, new lm(this)), this._moduleMap.set(Jc, new $m(this)), this._moduleMap.set(Yc,
						new sv(this)), this._moduleMap.set(Wc, new uv(this)), this._moduleMap.set(Qc, new _v(
						this)), this._moduleMap.set(Zc, new Mv(this)), this._moduleMap.set(el, new Tv(this)),
					this._moduleMap.set(tl, new Dv(this)), this._moduleMap.set(nl, new Ev(this)), this
					._moduleMap.set(ol, new Lv(this)), this._moduleMap.set(rl, new Rv(this)), this._moduleMap
					.set(il, new tM(this)), this._moduleMap.set(cl, new oM(this));
				var r = t.instanceID,
					a = t.oversea,
					s = t.SDKAppID,
					i = "instanceID:".concat(r, " oversea:").concat(a, " host:").concat(Su(), " ") +
					"inBrowser:".concat(si, " inMiniApp:").concat(ai, " SDKAppID:").concat(s, " UserAgent:")
					.concat(ci);
				jd.bindEventStatModule(this._moduleMap.get(Zc)), n.setMessage("".concat(i)).end(), Ki.info(
						"SDK ".concat(i)), this._readyList = void 0, this._ssoLogForReady = null, this
					._initReadyList()
			}
			return a(e, [{
				key: "_startTimer",
				value: function() {
					this._checkTimer < 0 && (this._checkTimer = setInterval(this._onCheckTimer
						.bind(this), 1e3))
				}
			}, {
				key: "stopTimer",
				value: function() {
					this._checkTimer > 0 && (clearInterval(this._checkTimer), this
						._checkTimer = -1, this._checkCount = 0)
				}
			}, {
				key: "_onCheckTimer",
				value: function() {
					this._checkCount += 1;
					var e, t = D(this._moduleMap);
					try {
						for (t.s(); !(e = t.n()).done;) {
							var n = m(e.value, 2)[1];
							n.onCheckTimer && n.onCheckTimer(this._checkCount)
						}
					} catch (o) {
						t.e(o)
					} finally {
						t.f()
					}
				}
			}, {
				key: "_initReadyList",
				value: function() {
					var e = this;
					this._readyList = [this._moduleMap.get(Bc), this._moduleMap.get(Jc)], this
						._readyList.forEach((function(t) {
							t.ready((function() {
								return e._onModuleReady()
							}))
						}))
				}
			}, {
				key: "_onModuleReady",
				value: function() {
					var e = !0;
					if (this._readyList.forEach((function(t) {
							t.isReady() || (e = !1)
						})), e && !this._isReady) {
						this._isReady = !0, this._outerEmitter.emit(oo.SDK_READY);
						var t = Date.now() - this._startLoginTs;
						Ki.warn("SDK is ready. cost ".concat(t, " ms")), this._startLoginTs =
							Date.now();
						var n = this._moduleMap.get(el).getNetworkType(),
							o = this._ssoLogForReady.getStartTs() + Gi;
						this._ssoLogForReady.setNetworkType(n).setMessage(t).start(o).end()
					}
				}
			}, {
				key: "login",
				value: function() {
					0 === this._startLoginTs && (Fi(), this._startLoginTs = Date.now(), this
						._startTimer(), this._moduleMap.get(el).start(), this
						._ssoLogForReady = new jd(Yd))
				}
			}, {
				key: "onLoginFailed",
				value: function() {
					this._startLoginTs = 0
				}
			}, {
				key: "getOuterEmitterInstance",
				value: function() {
					return null === this._outerEmitter && (this._outerEmitter = new Sv, im(this
							._outerEmitter), this._outerEmitter._emit = this._outerEmitter
						.emit, this._outerEmitter.emit = function(e, t) {
							var n = arguments[0],
								o = [n, {
									name: arguments[0],
									data: arguments[1]
								}];
							this._outerEmitter._emit.apply(this._outerEmitter, o)
						}.bind(this)), this._outerEmitter
				}
			}, {
				key: "getInnerEmitterInstance",
				value: function() {
					return null === this._innerEmitter && (this._innerEmitter = new Sv, this
						._innerEmitter._emit = this._innerEmitter.emit, this._innerEmitter
						.emit = function(e, t) {
							var n;
							zi(arguments[1]) && arguments[1].data ? (Ki.warn(
									"inner eventData has data property, please check!"),
								n = [e, {
									name: arguments[0],
									data: arguments[1].data
								}]) : n = [e, {
								name: arguments[0],
								data: arguments[1]
							}], this._innerEmitter._emit.apply(this._innerEmitter, n)
						}.bind(this)), this._innerEmitter
				}
			}, {
				key: "hasModule",
				value: function(e) {
					return this._moduleMap.has(e)
				}
			}, {
				key: "getModule",
				value: function(e) {
					return this._moduleMap.get(e)
				}
			}, {
				key: "isReady",
				value: function() {
					return this._isReady
				}
			}, {
				key: "onError",
				value: function(e) {
					Ki.warn("Oops! code:".concat(e.code, " message:").concat(e.message)),
						new jd(dh).setMessage("code:".concat(e.code, " message:").concat(e
							.message)).setNetworkType(this.getModule(el).getNetworkType())
						.setLevel("error").end(), this.getOuterEmitterInstance().emit(oo.ERROR,
							e)
				}
			}, {
				key: "reset",
				value: function() {
					Ki.log("".concat(this._className, ".reset")), Fi();
					var e, t = D(this._moduleMap);
					try {
						for (t.s(); !(e = t.n()).done;) {
							var n = m(e.value, 2)[1];
							n.reset && n.reset()
						}
					} catch (o) {
						t.e(o)
					} finally {
						t.f()
					}
					this._startLoginTs = 0, this._initReadyList(), this._isReady = !1, this
						.stopTimer(), this._outerEmitter.emit(oo.SDK_NOT_READY)
				}
			}]), e
		}(),
		lM = function() {
			function e() {
				o(this, e), this._funcMap = new Map
			}
			return a(e, [{
				key: "defense",
				value: function(e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] :
						void 0;
					if ("string" != typeof e) return null;
					if (0 === e.length) return null;
					if ("function" != typeof t) return null;
					if (this._funcMap.has(e) && this._funcMap.get(e).has(t)) return this
						._funcMap.get(e).get(t);
					this._funcMap.has(e) || this._funcMap.set(e, new Map);
					var o = null;
					return this._funcMap.get(e).has(t) ? o = this._funcMap.get(e).get(t) : (o =
						this._pack(e, t, n), this._funcMap.get(e).set(t, o)), o
				}
			}, {
				key: "defenseOnce",
				value: function(e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] :
						void 0;
					return "function" != typeof t ? null : this._pack(e, t, n)
				}
			}, {
				key: "find",
				value: function(e, t) {
					return "string" != typeof e || 0 === e.length || "function" != typeof t ?
						null : this._funcMap.has(e) ? this._funcMap.get(e).has(t) ? this
						._funcMap.get(e).get(t) : (Ki.log("SafetyCallback.find: 找不到 func —— "
								.concat(e, "/").concat("" !== t.name ? t.name : "[anonymous]")),
							null) : (Ki.log("SafetyCallback.find: 找不到 eventName-".concat(e,
							" 对应的 func")), null)
				}
			}, {
				key: "delete",
				value: function(e, t) {
					return "function" == typeof t && (!!this._funcMap.has(e) && (!!this._funcMap
						.get(e).has(t) && (this._funcMap.get(e).delete(t), 0 === this
							._funcMap.get(e).size && this._funcMap.delete(e), !0)))
				}
			}, {
				key: "_pack",
				value: function(e, t, n) {
					return function() {
						try {
							t.apply(n, Array.from(arguments))
						} catch (s) {
							var o = Object.values(oo).indexOf(e);
							if (-1 !== o) {
								var r = Object.keys(oo)[o];
								Ki.warn("接入侧事件 TIM.EVENT.".concat(r, " 对应的回调函数逻辑存在问题，请检查！"),
									s)
							}
							var a = new jd(ch);
							a.setMessage("eventName:".concat(e)).setMoreMessage(s.message)
								.end()
						}
					}
				}
			}]), e
		}(),
		pM = function() {
			function e(t) {
				o(this, e);
				var n = {
					SDKAppID: t.SDKAppID,
					unlimitedAVChatRoom: t.unlimitedAVChatRoom || !1,
					scene: t.scene || "",
					oversea: t.oversea || !1,
					instanceID: Tu()
				};
				this._moduleManager = new cM(n), this._safetyCallbackFactory = new lM
			}
			return a(e, [{
				key: "isReady",
				value: function() {
					return this._moduleManager.isReady()
				}
			}, {
				key: "onError",
				value: function(e) {
					this._moduleManager.onError(e)
				}
			}, {
				key: "login",
				value: function(e) {
					return this._moduleManager.login(), this._moduleManager.getModule(Bc).login(
						e)
				}
			}, {
				key: "logout",
				value: function() {
					var e = this;
					return this._moduleManager.getModule(Bc).logout().then((function(t) {
						return e._moduleManager.reset(), t
					}))
				}
			}, {
				key: "destroy",
				value: function() {
					var e = this;
					return this.logout().finally((function() {
						e._moduleManager.stopTimer(), e._moduleManager.getModule(sl)
							.dealloc();
						var t = e._moduleManager.getOuterEmitterInstance(),
							n = e._moduleManager.getModule(Xc);
						t.emit(oo.SDK_DESTROY, {
							SDKAppID: n.getSDKAppID()
						})
					}))
				}
			}, {
				key: "on",
				value: function(e, t, n) {
					e === oo.GROUP_SYSTEM_NOTICE_RECEIVED && Ki.warn(
							"！！！TIM.EVENT.GROUP_SYSTEM_NOTICE_RECEIVED v2.6.0起弃用，为了更好的体验，请在 TIM.EVENT.MESSAGE_RECEIVED 事件回调内接收处理群系统通知，详细请参考：https://web.sdk.qcloud.com/im/doc/zh-cn/Message.html#.GroupSystemNoticePayload"
							), Ki.debug("on", "eventName:".concat(e)), this._moduleManager
						.getOuterEmitterInstance().on(e, this._safetyCallbackFactory.defense(e,
							t, n), n)
				}
			}, {
				key: "once",
				value: function(e, t, n) {
					Ki.debug("once", "eventName:".concat(e)), this._moduleManager
						.getOuterEmitterInstance().once(e, this._safetyCallbackFactory
							.defenseOnce(e, t, n), n || this)
				}
			}, {
				key: "off",
				value: function(e, t, n, o) {
					Ki.debug("off", "eventName:".concat(e));
					var r = this._safetyCallbackFactory.find(e, t);
					null !== r && (this._moduleManager.getOuterEmitterInstance().off(e, r, n,
						o), this._safetyCallbackFactory.delete(e, t))
				}
			}, {
				key: "registerPlugin",
				value: function(e) {
					this._moduleManager.getModule(ol).registerPlugin(e)
				}
			}, {
				key: "setLogLevel",
				value: function(e) {
					if (e <= 0) {
						console.log(["",
							" ________  ______  __       __  __       __  ________  _______",
							"|        \\|      \\|  \\     /  \\|  \\  _  |  \\|        \\|       \\",
							" \\$$$$$$$$ \\$$$$$$| $$\\   /  $$| $$ / \\ | $$| $$$$$$$$| $$$$$$$\\",
							"   | $$     | $$  | $$$\\ /  $$$| $$/  $\\| $$| $$__    | $$__/ $$",
							"   | $$     | $$  | $$$$\\  $$$$| $$  $$$\\ $$| $$  \\   | $$    $$",
							"   | $$     | $$  | $$\\$$ $$ $$| $$ $$\\$$\\$$| $$$$$   | $$$$$$$\\",
							"   | $$    _| $$_ | $$ \\$$$| $$| $$$$  \\$$$$| $$_____ | $$__/ $$",
							"   | $$   |   $$ \\| $$  \\$ | $$| $$$    \\$$$| $$     \\| $$    $$",
							"    \\$$    \\$$$$$$ \\$$      \\$$ \\$$      \\$$ \\$$$$$$$$ \\$$$$$$$",
							"", ""
						].join("\n")), console.log(
							"%cIM 智能客服，随时随地解决您的问题 →_→ https://cloud.tencent.com/act/event/smarty-service?from=im-doc",
							"color:#006eff"), console.log(
							"%c从v2.11.2起，SDK 支持了 WebSocket，小程序需要添加受信域名！升级指引: https://web.sdk.qcloud.com/im/doc/zh-cn/tutorial-02-upgradeguideline.html",
							"color:#ff0000");
						console.log(["", "参考以下文档，会更快解决问题哦！(#^.^#)\n",
							"SDK 更新日志: https://cloud.tencent.com/document/product/269/38492\n",
							"SDK 接口文档: https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html\n",
							"常见问题: https://web.sdk.qcloud.com/im/doc/zh-cn/tutorial-01-faq.html\n",
							"反馈问题？戳我提 issue: https://github.com/tencentyun/TIMSDK/issues\n",
							"如果您需要在生产环境关闭上面的日志，请 tim.setLogLevel(1)\n"
						].join("\n"))
					}
					Ki.setLevel(e)
				}
			}, {
				key: "createTextMessage",
				value: function(e) {
					return this._moduleManager.getModule(Hc).createTextMessage(e)
				}
			}, {
				key: "createTextAtMessage",
				value: function(e) {
					return this._moduleManager.getModule(Hc).createTextMessage(e)
				}
			}, {
				key: "createImageMessage",
				value: function(e) {
					return this._moduleManager.getModule(Hc).createImageMessage(e)
				}
			}, {
				key: "createAudioMessage",
				value: function(e) {
					return this._moduleManager.getModule(Hc).createAudioMessage(e)
				}
			}, {
				key: "createVideoMessage",
				value: function(e) {
					return this._moduleManager.getModule(Hc).createVideoMessage(e)
				}
			}, {
				key: "createCustomMessage",
				value: function(e) {
					return this._moduleManager.getModule(Hc).createCustomMessage(e)
				}
			}, {
				key: "createFaceMessage",
				value: function(e) {
					return this._moduleManager.getModule(Hc).createFaceMessage(e)
				}
			}, {
				key: "createFileMessage",
				value: function(e) {
					return this._moduleManager.getModule(Hc).createFileMessage(e)
				}
			}, {
				key: "createMergerMessage",
				value: function(e) {
					return this._moduleManager.getModule(Hc).createMergerMessage(e)
				}
			}, {
				key: "downloadMergerMessage",
				value: function(e) {
					return e.type !== ro.MSG_MERGER ? cm(new am({
						code: Tp.MESSAGE_MERGER_TYPE_INVALID,
						message: Xp
					})) : Lu(e.payload.downloadKey) ? cm(new am({
						code: Tp.MESSAGE_MERGER_KEY_INVALID,
						message: Qp
					})) : this._moduleManager.getModule(Hc).downloadMergerMessage(e).catch((
						function(e) {
							return cm(new am({
								code: Tp.MESSAGE_MERGER_DOWNLOAD_FAIL,
								message: Zp
							}))
						}))
				}
			}, {
				key: "createForwardMessage",
				value: function(e) {
					return this._moduleManager.getModule(Hc).createForwardMessage(e)
				}
			}, {
				key: "sendMessage",
				value: function(e, t) {
					return e instanceof Q_ ? this._moduleManager.getModule(Hc)
						.sendMessageInstance(e, t) : cm(new am({
							code: Tp.MESSAGE_SEND_NEED_MESSAGE_INSTANCE,
							message: bp
						}))
				}
			}, {
				key: "callExperimentalAPI",
				value: function(e, t) {
					return "handleGroupInvitation" === e ? this._moduleManager.getModule(Yc)
						.handleGroupInvitation(t) : cm(new am({
							code: Tp.INVALID_OPERATION,
							message: Ad
						}))
				}
			}, {
				key: "revokeMessage",
				value: function(e) {
					return this._moduleManager.getModule(Hc).revokeMessage(e)
				}
			}, {
				key: "resendMessage",
				value: function(e) {
					return this._moduleManager.getModule(Hc).resendMessage(e)
				}
			}, {
				key: "deleteMessage",
				value: function(e) {
					return this._moduleManager.getModule(Hc).deleteMessage(e)
				}
			}, {
				key: "getMessageList",
				value: function(e) {
					return this._moduleManager.getModule(Jc).getMessageList(e)
				}
			}, {
				key: "setMessageRead",
				value: function(e) {
					return this._moduleManager.getModule(Jc).setMessageRead(e)
				}
			}, {
				key: "getConversationList",
				value: function() {
					return this._moduleManager.getModule(Jc).getConversationList()
				}
			}, {
				key: "getConversationProfile",
				value: function(e) {
					return this._moduleManager.getModule(Jc).getConversationProfile(e)
				}
			}, {
				key: "deleteConversation",
				value: function(e) {
					return this._moduleManager.getModule(Jc).deleteConversation(e)
				}
			}, {
				key: "pinConversation",
				value: function(e) {
					return this._moduleManager.getModule(Jc).pinConversation(e)
				}
			}, {
				key: "getMyProfile",
				value: function() {
					return this._moduleManager.getModule(jc).getMyProfile()
				}
			}, {
				key: "getUserProfile",
				value: function(e) {
					return this._moduleManager.getModule(jc).getUserProfile(e)
				}
			}, {
				key: "updateMyProfile",
				value: function(e) {
					return this._moduleManager.getModule(jc).updateMyProfile(e)
				}
			}, {
				key: "getBlacklist",
				value: function() {
					return this._moduleManager.getModule(jc).getLocalBlacklist()
				}
			}, {
				key: "addToBlacklist",
				value: function(e) {
					return this._moduleManager.getModule(jc).addBlacklist(e)
				}
			}, {
				key: "removeFromBlacklist",
				value: function(e) {
					return this._moduleManager.getModule(jc).deleteBlacklist(e)
				}
			}, {
				key: "getFriendList",
				value: function() {
					var e = this._moduleManager.getModule(zc);
					return e ? e.getLocalFriendList() : cm({
						code: Tp.CANNOT_FIND_MODULE,
						message: Nd
					})
				}
			}, {
				key: "addFriend",
				value: function(e) {
					var t = this._moduleManager.getModule(zc);
					return t ? t.addFriend(e) : cm({
						code: Tp.CANNOT_FIND_MODULE,
						message: Nd
					})
				}
			}, {
				key: "deleteFriend",
				value: function(e) {
					var t = this._moduleManager.getModule(zc);
					return t ? t.deleteFriend(e) : cm({
						code: Tp.CANNOT_FIND_MODULE,
						message: Nd
					})
				}
			}, {
				key: "checkFriend",
				value: function(e) {
					var t = this._moduleManager.getModule(zc);
					return t ? t.checkFriend(e) : cm({
						code: Tp.CANNOT_FIND_MODULE,
						message: Nd
					})
				}
			}, {
				key: "getFriendProfile",
				value: function(e) {
					var t = this._moduleManager.getModule(zc);
					return t ? t.getFriendProfile(e) : cm({
						code: Tp.CANNOT_FIND_MODULE,
						message: Nd
					})
				}
			}, {
				key: "updateFriend",
				value: function(e) {
					var t = this._moduleManager.getModule(zc);
					return t ? t.updateFriend(e) : cm({
						code: Tp.CANNOT_FIND_MODULE,
						message: Nd
					})
				}
			}, {
				key: "getFriendApplicationList",
				value: function() {
					var e = this._moduleManager.getModule(zc);
					return e ? e.getLocalFriendApplicationList() : cm({
						code: Tp.CANNOT_FIND_MODULE,
						message: Nd
					})
				}
			}, {
				key: "acceptFriendApplication",
				value: function(e) {
					var t = this._moduleManager.getModule(zc);
					return t ? t.acceptFriendApplication(e) : cm({
						code: Tp.CANNOT_FIND_MODULE,
						message: Nd
					})
				}
			}, {
				key: "refuseFriendApplication",
				value: function(e) {
					var t = this._moduleManager.getModule(zc);
					return t ? t.refuseFriendApplication(e) : cm({
						code: Tp.CANNOT_FIND_MODULE,
						message: Nd
					})
				}
			}, {
				key: "deleteFriendApplication",
				value: function(e) {
					var t = this._moduleManager.getModule(zc);
					return t ? t.deleteFriendApplication(e) : cm({
						code: Tp.CANNOT_FIND_MODULE,
						message: Nd
					})
				}
			}, {
				key: "setFriendApplicationRead",
				value: function() {
					var e = this._moduleManager.getModule(zc);
					return e ? e.setFriendApplicationRead() : cm({
						code: Tp.CANNOT_FIND_MODULE,
						message: Nd
					})
				}
			}, {
				key: "getFriendGroupList",
				value: function() {
					var e = this._moduleManager.getModule(zc);
					return e ? e.getLocalFriendGroupList() : cm({
						code: Tp.CANNOT_FIND_MODULE,
						message: Nd
					})
				}
			}, {
				key: "createFriendGroup",
				value: function(e) {
					var t = this._moduleManager.getModule(zc);
					return t ? t.createFriendGroup(e) : cm({
						code: Tp.CANNOT_FIND_MODULE,
						message: Nd
					})
				}
			}, {
				key: "deleteFriendGroup",
				value: function(e) {
					var t = this._moduleManager.getModule(zc);
					return t ? t.deleteFriendGroup(e) : cm({
						code: Tp.CANNOT_FIND_MODULE,
						message: Nd
					})
				}
			}, {
				key: "addToFriendGroup",
				value: function(e) {
					var t = this._moduleManager.getModule(zc);
					return t ? t.addToFriendGroup(e) : cm({
						code: Tp.CANNOT_FIND_MODULE,
						message: Nd
					})
				}
			}, {
				key: "removeFromFriendGroup",
				value: function(e) {
					var t = this._moduleManager.getModule(zc);
					return t ? t.removeFromFriendGroup(e) : cm({
						code: Tp.CANNOT_FIND_MODULE,
						message: Nd
					})
				}
			}, {
				key: "renameFriendGroup",
				value: function(e) {
					var t = this._moduleManager.getModule(zc);
					return t ? t.renameFriendGroup(e) : cm({
						code: Tp.CANNOT_FIND_MODULE,
						message: Nd
					})
				}
			}, {
				key: "getGroupList",
				value: function(e) {
					return this._moduleManager.getModule(Yc).getGroupList(e)
				}
			}, {
				key: "getGroupProfile",
				value: function(e) {
					return this._moduleManager.getModule(Yc).getGroupProfile(e)
				}
			}, {
				key: "createGroup",
				value: function(e) {
					return this._moduleManager.getModule(Yc).createGroup(e)
				}
			}, {
				key: "dismissGroup",
				value: function(e) {
					return this._moduleManager.getModule(Yc).dismissGroup(e)
				}
			}, {
				key: "updateGroupProfile",
				value: function(e) {
					return this._moduleManager.getModule(Yc).updateGroupProfile(e)
				}
			}, {
				key: "joinGroup",
				value: function(e) {
					return this._moduleManager.getModule(Yc).joinGroup(e)
				}
			}, {
				key: "quitGroup",
				value: function(e) {
					return this._moduleManager.getModule(Yc).quitGroup(e)
				}
			}, {
				key: "searchGroupByID",
				value: function(e) {
					return this._moduleManager.getModule(Yc).searchGroupByID(e)
				}
			}, {
				key: "getGroupOnlineMemberCount",
				value: function(e) {
					return this._moduleManager.getModule(Yc).getGroupOnlineMemberCount(e)
				}
			}, {
				key: "changeGroupOwner",
				value: function(e) {
					return this._moduleManager.getModule(Yc).changeGroupOwner(e)
				}
			}, {
				key: "handleGroupApplication",
				value: function(e) {
					return this._moduleManager.getModule(Yc).handleGroupApplication(e)
				}
			}, {
				key: "initGroupAttributes",
				value: function(e) {
					return this._moduleManager.getModule(Yc).initGroupAttributes(e)
				}
			}, {
				key: "setGroupAttributes",
				value: function(e) {
					return this._moduleManager.getModule(Yc).setGroupAttributes(e)
				}
			}, {
				key: "deleteGroupAttributes",
				value: function(e) {
					return this._moduleManager.getModule(Yc).deleteGroupAttributes(e)
				}
			}, {
				key: "getGroupAttributes",
				value: function(e) {
					return this._moduleManager.getModule(Yc).getGroupAttributes(e)
				}
			}, {
				key: "getGroupMemberList",
				value: function(e) {
					return this._moduleManager.getModule(Wc).getGroupMemberList(e)
				}
			}, {
				key: "getGroupMemberProfile",
				value: function(e) {
					return this._moduleManager.getModule(Wc).getGroupMemberProfile(e)
				}
			}, {
				key: "addGroupMember",
				value: function(e) {
					return this._moduleManager.getModule(Wc).addGroupMember(e)
				}
			}, {
				key: "deleteGroupMember",
				value: function(e) {
					return this._moduleManager.getModule(Wc).deleteGroupMember(e)
				}
			}, {
				key: "setGroupMemberMuteTime",
				value: function(e) {
					return this._moduleManager.getModule(Wc).setGroupMemberMuteTime(e)
				}
			}, {
				key: "setGroupMemberRole",
				value: function(e) {
					return this._moduleManager.getModule(Wc).setGroupMemberRole(e)
				}
			}, {
				key: "setGroupMemberNameCard",
				value: function(e) {
					return this._moduleManager.getModule(Wc).setGroupMemberNameCard(e)
				}
			}, {
				key: "setGroupMemberCustomField",
				value: function(e) {
					return this._moduleManager.getModule(Wc).setGroupMemberCustomField(e)
				}
			}, {
				key: "setMessageRemindType",
				value: function(e) {
					return this._moduleManager.getModule(Wc).setMessageRemindType(e)
				}
			}]), e
		}(),
		dM = {
			login: "login",
			logout: "logout",
			destroy: "destroy",
			on: "on",
			off: "off",
			ready: "ready",
			setLogLevel: "setLogLevel",
			joinGroup: "joinGroup",
			quitGroup: "quitGroup",
			registerPlugin: "registerPlugin",
			getGroupOnlineMemberCount: "getGroupOnlineMemberCount"
		};

	function gM(e, t) {
		if (e.isReady() || void 0 !== dM[t]) return !0;
		var n = new am({
			code: Tp.SDK_IS_NOT_READY,
			message: "".concat(t, " ").concat(Od,
				"，请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/module-EVENT.html#.SDK_READY")
		});
		return e.onError(n), !1
	}
	var hM = {},
		fM = {};
	return fM.create = function(e) {
		var n = 0;
		if (ji(e.SDKAppID)) n = e.SDKAppID;
		else if (Ki.warn("TIM.create SDKAppID 的类型应该为 Number，请修改！"), n = parseInt(e.SDKAppID), isNaN(n))
			return Ki.error("TIM.create failed. 解析 SDKAppID 失败，请检查传参！"), null;
		if (n && hM[n]) return hM[n];
		Ki.log("TIM.create");
		var o = new pM(t(t({}, e), {}, {
			SDKAppID: n
		}));
		o.on(oo.SDK_DESTROY, (function(e) {
			hM[e.data.SDKAppID] = null, delete hM[e.data.SDKAppID]
		}));
		var r = function(e) {
			var t = Object.create(null);
			return Object.keys(wc).forEach((function(n) {
				if (e[n]) {
					var o = wc[n],
						r = new po;
					t[o] = function() {
						var t = Array.from(arguments);
						return r.use((function(t, o) {
							return gM(e, n) ? o() : cm(new am({
								code: Tp.SDK_IS_NOT_READY,
								message: "".concat(n, " ")
									.concat(Od, "。")
							}))
						})).use((function(e, t) {
							if (!0 === Ru(e, bc[n], o)) return t()
						})).use((function(t, o) {
							return e[n].apply(e, t)
						})), r.run(t)
					}
				}
			})), t
		}(o);
		return hM[n] = r, Ki.log("TIM.create ok"), r
	}, fM.TYPES = ro, fM.EVENT = oo, fM.VERSION = "2.14.0", Ki.log("TIM.VERSION: ".concat(fM.VERSION)), fM
}));
