﻿(function () {
  try {
    (function () {
      function cf(a, c, b, d) {
        var e = this;
        return A(window, "c.i", function () {
          function f(E) {
            (E = df(l, m, "", E)(l, m)) && (V(E.then) ? E.then(g) : g(E));
            return E;
          }
          function g(E) {
            E &&
              (V(E)
                ? p.push(E)
                : oa(E) &&
                  x(function (N) {
                    var K = N[0];
                    N = N[1];
                    V(N) && ("u" === K ? p.push(N) : h(N, K));
                  }, Ma(E)));
          }
          function h(E, N, K) {
            e[N] = Vl(l, m, K || q, N, E);
          }
          var k,
            l = window;
          (!l || (isNaN(a) && !a)) && ae();
          var m = Wl(a, be, c, b, d),
            p = [],
            q = [ih, df, jh];
          q.unshift(Xl);
          var r = C(T, Xa),
            t = M(m);
          m.id || Ya(Ta("Invalid Metrika id: " + m.id, !0));
          var y = dd.C("counters", {});
          if (y[t]) return Jb(l, t, "dc", ((k = {}), (k.key = t), k)), y[t];
          y[t] = e;
          dd.D("counters", y);
          dd.Ga("counter", e);
          x(function (E) {
            E(l, m);
          }, ef);
          x(f, ce);
          f(Yl);
          h(Zl(l, m, p), "destruct", [ih, jh]);
          Rb(l, D([l, r, f, 1, "a.i"], kh));
          x(f, W);
        })();
      }
      function $l(a, c) {
        var b = "" + c,
          d = { id: 1, aa: "0" },
          e = am(b);
        e
          ? (d.id = e)
          : -1 === jb(b, ":")
          ? ((b = Ea(b)), (d.id = b))
          : ((b = b.split(":")),
            (e = b[1]),
            (d.id = Ea(b[0])),
            (d.aa = de(e) ? "1" : "0"));
        return [ya(a, d), d];
      }
      function bm(a) {
        return oa(a) && P(a.code);
      }
      function cm(a, c) {
        var b,
          d = c.slice(2),
          e = [
            ((b = {}), (b.require = { kind: 0, value: w(dm, Kc([a, {}])) }), b),
          ];
        ff(e, ee([3], d));
      }
      function ff(a, c, b) {
        c = c.slice(1);
        a.push(b || {});
        x(function (d) {
          P(d) && 3 === d[0]
            ? ff(a, d)
            : !P(d) || (18 !== d[0] && 19 !== d[0])
            ? P(d) && 2 === d[0] && $b(a, d[1])
            : em(a, d);
        }, c);
        a.pop();
      }
      function em(a, c) {
        var b = 18 === c[0];
        x(function (d) {
          var e = d[0],
            f = d[1];
          if (b && 1 === d.length) throw Ta("mca");
          d = a[a.length - 1];
          if (vb(d, e)) throw Ta("vr");
          f = $b(a, f);
          d[e] = { kind: b ? 0 : 1, value: f };
        }, c.slice(1));
      }
      function $b(a, c) {
        if (
          ha(c) ||
          "[object Number]" === Object.prototype.toString.call(c) ||
          !!c === c ||
          fa(c)
        )
          return c;
        if (P(c) && 40 === c[0]) {
          a: {
            var b = c[1];
            for (var d = a.length; 0 < d; ) {
              var e = a[--d];
              if (vb(e, b)) {
                b = e[b];
                break a;
              }
            }
            b = void 0;
          }
          if (!b) throw Ta("vnd");
          return b.value;
        }
        if (P(c) && 37 === c[0]) {
          d = c.slice(2);
          b = $b(a, c[1]);
          if (!V(b)) throw Ta("tenf");
          d = C(v(a, $b), d);
          return b.apply(null, d);
        }
        if (P(c) && 24 === c[0]) return fm(a, c);
        if (P(c) && 35 === c[0]) {
          d = c[2];
          b = $b(a, c[1]);
          d = $b(a, d);
          if (!b) throw Ta("noma");
          return b["" + d];
        }
        if (P(c) && 23 === c[0]) return gm(a, c);
      }
      function gm(a, c) {
        return O(
          function (b, d) {
            var e = d[1],
              f = $b(a, d[0]);
            e = $b(a, e);
            b["" + f] = e;
            return b;
          },
          {},
          c.slice(1)
        );
      }
      function fm(a, c) {
        var b = c[1],
          d = c[2],
          e = c[3],
          f = C(T, a);
        return function () {
          var g = arguments,
            h = O(
              function (k, l, m) {
                if (k[l]) throw Ta("da");
                k[l] = { kind: 1, value: g[m] };
                return k;
              },
              {},
              d
            );
          b && !G(b, d) && (h[b] = { kind: 0, value: b });
          ff(f, e, h);
        };
      }
      function dm(a) {
        return hm[a];
      }
      function gf(a, c) {
        return function () {
          try {
            return c.apply(null, arguments);
          } catch (b) {
            lh(a, b);
          }
        };
      }
      function im(a) {
        return O(
          function (c, b) {
            vb(a, b) && (c[b] = a[b]);
            return c;
          },
          {},
          ca(a)
        );
      }
      function jm(a, c) {
        if ("*" === c) return !0;
        var b = U(a);
        return c === b.host + b.pathname;
      }
      function km(a, c) {
        var b = n(c, "target");
        b && a(b);
      }
      function lm(a, c, b) {
        var d = n(b, "submitter");
        d || ((b = n(b, "target")) && (d = fe(a, b)));
        d && c(d);
      }
      function mm(a, c, b, d) {
        var e = ge(a, d);
        e &&
          x(function (f) {
            var g,
              h = null;
            try {
              var k = n(f, "css_selector"),
                l = oc(k, a.document);
              h = mh(l);
            } catch (r) {}
            k = null;
            try {
              var m = n(f, "xpath"),
                p = nm(m);
              var q = p
                ? n(a, "document.evaluate")
                  ? a.document.evaluate(
                      p,
                      a.document,
                      null,
                      a.XPathResult.FIRST_ORDERED_NODE_TYPE,
                      null
                    ).singleNodeValue
                  : null
                : null;
              k = mh(q);
            } catch (r) {}
            f = ((g = {}), (g.s = [k, h]), (g.b = e), g);
            c(f);
          }, b);
      }
      function mh(a) {
        return (a = Kb(a)) ? ed(he(a)) : null;
      }
      function nm(a) {
        if (!a) return "";
        a = a.match(om);
        if (!a || 0 === a.length) return "";
        var c = pm();
        return (
          "//HTML/BODY/" +
          O(
            function (b, d) {
              var e = d[0],
                f = Ea(d.slice(1));
              return "/" + c[e] + (f ? "[" + (f + 1) + "]" : "") + b;
            },
            "",
            a
          )
        );
      }
      function qm(a) {
        x(function (c) {
          var b;
          if (c.data.auctionId) {
            var d = c.event,
              e = c.data;
            c = e.auctionId;
            Fa[c] || (Fa[c] = ((b = {}), (b.auctionId = c), b));
            b = "auctionInit" === d;
            if (!Fa[c].startStamp || b)
              Fa[c].startStamp = b
                ? e.auctionStart || e.timestamp
                : e.auctionStart;
            if (G(d, rm)) {
              if ((b = e.bidderCode)) {
                Fa[c][d] || (Fa[c][d] = {});
                var f = {};
                Fa[c][d][b] = f;
                x(function (g) {
                  var h = e[g];
                  fa(h) || (f[g] = h);
                }, sm);
                Fa[c].endStamp && (Fa[c].Z = !0);
              }
            } else
              "auctionEnd" === d &&
                ((Fa[c].Z = !0),
                (Fa[c].endStamp = e.auctionEnd || e.timestamp),
                (Fa[c].requestedBidders = ia(function (g, h, k) {
                  return hf(g, k) === h;
                }, C(Q("bidderCode"), e.bidderRequests))));
          }
        }, a);
      }
      function tm(a, c) {
        x(function (b) {
          b.Z && um(a, c, b.auctionId);
        }, vm(Fa));
      }
      function um(a, c, b) {
        Fa[b].Z = !1;
        Fa[b].Ia && ma(a, Fa[b].Ia);
        Fa[b].Ia = R(
          a,
          function () {
            var d, e;
            delete Fa[b].Ia;
            delete Fa[b].Z;
            c(((d = {}), (d.__ym = ((e = {}), (e.pbjs = Fa[b]), e)), d));
            delete Fa[b];
          },
          2e3
        );
      }
      function wm(a) {
        var c = n(a, "featurePolicy");
        return c
          ? "browsingTopics" in a && c.allowsFeature("browsing-topics")
          : !1;
      }
      function xm(a, c, b, d) {
        var e = n(d, "data");
        if (ha(e)) {
          var f = e.split("*");
          e = f[0];
          var g = f[1];
          f = f[2];
          "sc.topics-response" === e
            ? (g &&
                ("1" === g && f
                  ? ((a = ob(a, f)), P(a) && c.D("cta", a))
                  : c.D("cta.e", g)),
              b())
            : "sc.frame" === e &&
              d.source &&
              d.source.postMessage("sc.topics", "*");
        }
      }
      function zm(a, c) {
        var b;
        if (
          "https://oauth.yandex.ru" === n(c, "origin") &&
          n(c, "source.window") &&
          "_ym_uid_request" === n(c.data, "_ym")
        ) {
          var d = c.source,
            e = ((b = {}), (b._ym_uid = a), b);
          d.postMessage(e, "https://oauth.yandex.ru");
        }
      }
      function nh(a) {
        return {
          N: function (c, b) {
            Am(a).then(function (d) {
              c.J || (c.J = {});
              c.J.uah = d;
              b();
            }, b);
          },
        };
      }
      function Bm(a) {
        var c = O(
          function (b, d) {
            var e = d[1],
              f = Cm(a[d[0]]);
            f && b.push("" + e + "\n" + f);
            return b;
          },
          [],
          Ma(Dm)
        );
        return L("\n", c);
      }
      function Em(a) {
        return "che\n" + a;
      }
      function Cm(a) {
        return ha(a)
          ? a
          : P(a)
          ? L(
              ",",
              C(function (c) {
                return '"' + c.brand + '";v="' + c.version + '"';
              }, a)
            )
          : fa(a)
          ? ""
          : a
          ? "?1"
          : "?0";
      }
      function Fm(a, c) {
        var b = Gm(a),
          d = [Hm(a) || Im(a)];
        Jm(a) && d.push(b);
        d.unshift("com");
        var e = la(a);
        b = Sa(a);
        var f = b.C("synced", {});
        d = ia(function (g) {
          if (c[g]) {
            var h = (f[g] || 1) + 1440 < e(pb);
            h && delete f[g];
            return h;
          }
        }, d);
        b.D("synced", f);
        return C(function (g) {
          return { Di: c[g], Th: g };
        }, d);
      }
      function Im(a) {
        a = Km(a);
        return Lm[a] || a;
      }
      function Gm(a) {
        a = oh(a);
        return Mm[a] || "com";
      }
      function Nm(a, c, b, d) {
        if (!b.K || de(c.aa)) d();
        else {
          var e = ie(a),
            f = v(e, Om),
            g = Lc(a, ""),
            h = function () {
              var q = L(",", C(Pm(jf), je(e)));
              q = "" + q + Qm(q, g);
              kf(b, "gdpr", q);
              d();
            };
          if (c.Ti) f("31"), h();
          else if (3 === c.id) h();
          else {
            var k = H(a),
              l = k.C("f1");
            if (l) l(h);
            else if (((l = je(e)), Za(pc(jf), l))) h();
            else if (g.C("yandex_login")) f("13"), g.D("gdpr", Mc, 525600), h();
            else {
              l = ke(a);
              var m = U(a);
              var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(m.hostname)
                ? {
                    url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/",
                    version: 2,
                    mf: Rm,
                    uf: "_inversed_buttons",
                  }
                : void 0;
              l || p
                ? ((l = g.C("gdpr")),
                  G(l, qc)
                    ? (f(l === lf ? "12" : "3"), h())
                    : mf(a) || Sm(a)
                    ? (f("17"), h())
                    : Tm(a)
                        .then(T, F)
                        .then(function (q) {
                          q
                            ? (f("28"), h())
                            : (ph(h),
                              k.D("f1", ph),
                              (0, qh[0])(a)
                                .then(Q("params.eu"))
                                .then(function (r) {
                                  if (
                                    r ||
                                    fb(m.href, "yagdprcheck=1") ||
                                    g.C("yaGdprCheck")
                                  ) {
                                    g.D("gdpr_popup", lf);
                                    Um(a, c);
                                    if (qb(a)) return Vm(a, f, c);
                                    var t = rh(a, e);
                                    if (t)
                                      return (
                                        (r = Wm(a, f, t, c, p)),
                                        r.then(D([a, c], Xm)),
                                        r
                                      );
                                  }
                                  r || f("8");
                                  return J.resolve({ value: Mc, Kd: !0 });
                                })
                                .then(function (r) {
                                  g.Eb("gdpr_popup");
                                  if (r) {
                                    var t = r.value;
                                    r = r.Kd;
                                    G(t, qc) &&
                                      g.D("gdpr", t, r ? void 0 : 525600);
                                  }
                                  t = ac(sh, na);
                                  fd(a, t, 20)(Pa(A(a, "gdr"), F));
                                  k.D("f1", na);
                                })
                                ["catch"](A(a, "gdp.a")));
                        }))
                : (f("14"), h());
            }
          }
        }
      }
      function Xm(a, c) {
        if (ke(a)) {
          var b = ie(a),
            d = ya(a, c);
          d = d && d.params;
          b = C(v(Ym, n), je(b));
          d && b.length && d("gdpr", Ba(b));
        }
      }
      function Vm(a, c, b) {
        var d = le(a, b);
        return new J(function (e) {
          var f;
          if (d) {
            var g = d.Y,
              h = w(v("4", c), v(null, e)),
              k = R(a, h, 2e3, "gdp.f.t");
            d.Qf(((f = {}), (f.type = "isYandex"), f))
              .then(function (l) {
                l.isYandex
                  ? (c("5"),
                    g.F(th, function (m) {
                      e({ value: uh(m[1].type) });
                    }))
                  : (c("6"), e(null));
              })
              ["catch"](h)
              .then(D([a, k], ma));
          } else e({ value: lf, Kd: !0 });
        });
      }
      function Um(a, c) {
        var b = le(a, c);
        b &&
          b.Y.F(["isYandex"], function () {
            var d;
            return (d = { type: "isYandex" }), (d.isYandex = ke(a)), d;
          });
        return b;
      }
      function Zm(a, c, b) {
        a = b || oh(a);
        return G(a, c) ? a : "en";
      }
      function uh(a) {
        if (G(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return Mc;
        a = a.replace("GDPR-ok-view-detailed-", "");
        return G(a, qc) ? a : Mc;
      }
      function vh(a, c, b) {
        var d = n(a, "AppMetricaInitializer"),
          e = n(d, "init");
        if (e)
          try {
            I(e, d)(wb(a, c));
          } catch (f) {}
        else wh = R(a, D([a, c, 2 * b], vh), b, "ai.d");
        return function () {
          return ma(a, wh);
        };
      }
      function xh(a, c, b, d) {
        var e,
          f,
          g,
          h = b.Oh,
          k = b.Jh;
        b = b.isTrusted;
        a = nf(a, k);
        k = k.readOnly;
        d =
          ((e = {}),
          (e.fi = of(
            ((f = {}),
            (f.a = h ? 1 : 0),
            (f.b = a),
            (f.c = d || 0),
            (f.d = k ? 1 : null),
            f)
          ).Fa()),
          e);
        fa(b) || (d.ite = xb(b));
        c.params(((g = {}), (g.__ym = d), g));
      }
      function yh(a, c) {
        var b = n(c, "target");
        if (b) {
          var d = n(b, "value");
          if ((d = $a(d)) && !(100 <= ab(d))) {
            var e = "tel" === n(b, "type"),
              f = 0 < jb(d, "@") && !e,
              g = Sb(d),
              h = ab(g);
            if (f || (!f && (e || h))) {
              if (f) {
                if (((d = zh(d)), 5 > ab(d) || 100 < ab(d))) return;
              } else {
                if ($m(d) || ab(d) - h > h || 10 > ab(g) || 16 < ab(g)) return;
                e = g[0];
                g = d[1];
                if ("+" === d[0] && g !== e) return;
                d = Ah(a, d);
              }
              e = n(c, "isTrusted");
              return { Jh: b, Oh: f, Kh: d, isTrusted: e };
            }
          }
        }
      }
      function Bh(a, c, b, d, e) {
        if (!gd(a)) return F;
        var f = [],
          g = ja(a);
        Lb(a)(
          Pa(F, function () {
            var h = kb(c, a.document.body);
            e && (h = ia(e, h));
            x(function (l) {
              f.push(g.F(l, b, d));
            }, h);
            if (Na("MutationObserver", a.MutationObserver)) {
              var k = c.toUpperCase();
              h = new a.MutationObserver(
                A(a, "de.m", function (l) {
                  x(function (m) {
                    var p = m.addedNodes;
                    m = m.removedNodes;
                    p &&
                      p.length &&
                      x(function (q) {
                        hd(
                          a,
                          q,
                          function (r) {
                            r.nodeName !== k ||
                              (e && !e(r)) ||
                              f.push(g.F(r, b, d));
                          },
                          void 0,
                          a.NodeFilter.SHOW_ELEMENT,
                          !0
                        );
                      }, p);
                    m &&
                      m.length &&
                      x(function (q) {
                        hd(
                          a,
                          q,
                          function (r) {
                            r.nodeName !== k || (e && !e(r)) || g.vb(r, b, d);
                          },
                          void 0,
                          a.NodeFilter.SHOW_ELEMENT,
                          !0
                        );
                      }, m);
                  }, l);
                })
              );
              h.observe(a.document.body, { childList: !0, subtree: !0 });
              f.push(I(h.disconnect, h));
            }
          })
        );
        return D([na, f], x);
      }
      function an(a, c, b, d) {
        c = d.C("cc");
        d = D(["cc", ""], d.D);
        if (c) {
          var e = c.split("&");
          c = e[0];
          if ((e = (e = e[1]) && Ea(e)) && 1440 < la(a)(pb) - e) return d();
          b.D("cc", c);
        } else za(0)(c) || d();
      }
      function bn(a, c, b, d) {
        return pa(c, function (e) {
          if (!pf(e) && !id(a))
            if (((e = d.C("zzlc")), X(e) || bb(e) || "na" === e)) {
              var f = yb(a);
              if (f && (e = bc(a))) {
                var g = f("iframe");
                z(g.style, {
                  display: "none",
                  width: "1px",
                  height: "1px",
                  visibility: "hidden",
                });
                f = qf(a, 68);
                var h = rf(a, 79);
                g.src =
                  "https://mc.yandex." +
                  (f || h ? "md" : "ru") +
                  Ch("L21ldHJpa2EvenpsYy5odG1s");
                e.appendChild(g);
                var k = 0,
                  l = ja(a).F(
                    a,
                    ["message"],
                    A(a, "zz.m", function (m) {
                      (m = n(m, "data")) &&
                        m.substr &&
                        "__ym__zz" === m.substr(0, 8) &&
                        (rc(g),
                        (m = m.substr(8)),
                        d.D("zzlc", m),
                        b.D("zzlc", m),
                        l(),
                        ma(a, k));
                    })
                  );
                k = R(a, w(l, v(g, rc)), 3e3);
              }
            } else b.D("zzlc", e);
        });
      }
      function cn(a, c, b) {
        var d,
          e = jd(a, c);
        if (e) {
          e.Y.F(["gpu-get"], function () {
            var h;
            return (h = {}), (h.type = "gpu-get"), (h.pu = b.C("pu")), h;
          });
          var f = n(a, "opener");
          if (f) {
            var g = R(a, D([a, c, b], Dh), 200, "pu.m");
            e.ke(f, ((d = {}), (d.type = "gpu-get"), d), function (h, k) {
              var l = n(k, "pu");
              l && (ma(a, g), b.D("pu", l));
            });
          } else Dh(a, c, b);
        }
      }
      function Dh(a, c, b) {
        var d = n(a, "location.host");
        a = kd(a, c);
        b.D("pu", "" + sc(d) + a);
      }
      function Eh(a, c, b) {
        c = Lc(a, void 0, c);
        c = Fh(a, c.C("phc_settings") || "");
        var d = n(c, "clientId"),
          e = n(c, "orderId"),
          f = n(c, "service_id"),
          g = n(c, "phones") || [];
        return d && e && g && f
          ? dn(a, b.kc, { bg: en })(g)
              .then(function (h) {
                return fn(b, { Bb: d, Ob: e, Tf: f }, h.ha, g, h.za);
              })
              ["catch"](F)
          : J.resolve();
      }
      function en(a, c, b) {
        a = gn(b.Rb);
        if ("href" === b.ee) {
          var d = b.qb;
          c = d.href;
          b = c.replace(a, b.$a);
          if (c !== b) return (d.href = b), !0;
        } else if (
          (a =
            null === (d = b.qb.textContent) || void 0 === d
              ? void 0
              : d.replace(a, b.$a)) &&
          a !== b.qb.textContent
        )
          return (b.qb.textContent = a), !0;
        return !1;
      }
      function fn(a, c, b, d, e) {
        var f;
        c.Bb &&
          c.Ob &&
          ((c.Bb === a.Bb && c.Ob === a.Ob) || z(a, c, { ha: {}, eb: !0 }),
          0 < e && sa(a.za, [e]),
          x(function (g) {
            var h,
              k,
              l = g[0];
            g = g[1];
            var m = +(a.ha[l] && a.ha[l][g] ? a.ha[l][g] : 0);
            z(a.ha, ((h = {}), (h[l] = ((k = {}), (k[g] = m), k)), h));
          }, d),
          x(function (g) {
            var h,
              k,
              l = g[0];
            g = g[1];
            var m = 1 + (a.ha[l] ? a.ha[l][g] : 0);
            z(a.ha, ((h = {}), (h[l] = ((k = {}), (k[g] = m), k)), h));
          }, b),
          a.jf &&
            (a.eb || b.length) &&
            ((c = ya(a.l, a.kc)) &&
              c.params(
                "__ym",
                "phc",
                ((f = {}),
                (f.clientId = a.Bb),
                (f.orderId = a.Ob),
                (f.service_id = a.Tf),
                (f.phones = a.ha),
                (f.performance = a.za),
                f)
              ),
            (a.eb = !1)));
      }
      function hn(a, c) {
        if (n(c, "settings.ins")) {
          var b = H(a);
          if (!b.C("scip")) {
            var d = Sa(a),
              e = la(a)(pb),
              f = me(d.C("sci"));
            if (!(f && 1440 >= e - f)) {
              f = ua(a, "ci");
              var g = ["sync.cook.int"],
                h = function (l) {
                  l = b.C("scip", "") + l;
                  b.D("scip", l);
                },
                k = v("a", h);
              b.D("scip", "0");
              return f({ $: { fa: g, Oa: 3e3, yb: !0 } }, [
                "https://yandex.com/an/sync_cookie",
              ])
                .then(function (l) {
                  l = n(l.Qc, "CookieMatchUrls");
                  if (P(l) && ab(l)) {
                    h("1");
                    var m = ua(a, "c");
                    l = C(function (p, q) {
                      return m({ $: { fa: g, Oa: 3e3 } }, ["https://" + p])[
                        "catch"
                      ](w(v("b", h), v("" + q, h)));
                    }, ia(ha, l));
                    return J.all(l);
                  }
                  k();
                }, k)
                .then(function () {
                  var l = b.C("scip");
                  !l || fb(l, "a") || fb(l, "b") || (d.D("sci", e), h("2"));
                }, F);
            }
          }
        }
      }
      function Gh(a) {
        return {
          N: function (c, b) {
            if (!c.K) return b();
            var d = H(a).C("fid");
            !Hh && d && (kf(c, "fid", d), (Hh = !0));
            return b();
          },
        };
      }
      function jn(a, c) {
        var b = a.document;
        if (G(b.readyState, ["interactive", "complete"])) Rb(a, c);
        else {
          var d = ja(a),
            e = d.F,
            f = d.vb,
            g = function () {
              f(b, ["DOMContentLoaded"], g);
              f(a, ["load"], g);
              c();
            };
          e(b, ["DOMContentLoaded"], g);
          e(a, ["load"], g);
        }
      }
      function sf(a) {
        return {
          N: function (c, b) {
            var d = c.K;
            if (d) {
              var e = H(a).C("adBlockEnabled");
              e && d.D("adb", e);
            }
            b();
          },
        };
      }
      function kn(a) {
        var c = A(a, "i.clch", ln);
        ja(a).F(a.document, ["click"], v(a, c), { passive: !1 });
        return function (b) {
          var d = Ca.Qa,
            e = a.Ya[Ca.ic],
            f = !!e._informer;
          e._informer = z({ domain: "informer.yandex.ru" }, b);
          f || tc(a, { src: d + "//informer.yandex.ru/metrika/informer.js" });
        };
      }
      function mn(a, c) {
        var b = Sa(a);
        if ("" === b.C("cc")) {
          var d = v("cc", b.D);
          d(0);
          var e = la(a),
            f = H(a);
          f = w(
            Q(nn({ Qc: 1 }) + ".c"),
            Nc(function (g) {
              d(g + "&" + e(pb));
            }),
            v("cc", f.D)
          );
          ua(
            a,
            "6",
            c
          )({ $: { yb: !0, Ee: !1 } }, ["https://mc.yandex.md/cc"])
            .then(f)
            ["catch"](
              w(
                Nc(function () {
                  var g = e(pb);
                  b.D("cc", "&" + g);
                }),
                A(a, "cc")
              )
            );
        }
      }
      function ne(a, c) {
        if (!c) return !1;
        var b = U(a);
        return new RegExp(c).test("" + b.pathname + b.hash + b.search);
      }
      function on(a, c) {
        return pa(c, function (b) {
          var d = n(b, "settings.dr");
          return { Pg: pn(a, d), isEnabled: n(b, "settings.auto_goals") };
        });
      }
      function qn(a, c, b, d, e) {
        b = tf(a.document.body, b);
        d = tf(a.document.body, d);
        G(e.target, [b, d]) && uf(a, c);
      }
      function Ih(a, c, b, d) {
        (b = rn(a, d, b)) && uf(a, c, b);
      }
      function Jh(a, c) {
        var b = Kh(a, c);
        return sn(a, b);
      }
      function Kh(a, c) {
        var b = tf(a.document.body, c);
        return b ? tn(a, b) : "";
      }
      function uf(a, c, b) {
        if ((c = ya(a, c)))
          (a = ld(["dr", b || "" + Ua(a, 10, 99)])), c.params(ld(["__ym", a]));
      }
      function tf(a, c) {
        var b = null;
        try {
          b = c ? oc(c, a) : b;
        } catch (d) {}
        return b;
      }
      function Lh(a) {
        a = Ga(Ch(a));
        return C(function (c) {
          c = c.charCodeAt(0).toString(2);
          return Mh("0", 8, c);
        }, a);
      }
      function tn(a, c) {
        if (!c) return "";
        var b = [],
          d = n(a, "document");
        hd(a, c, function (e) {
          if (e.nodeType === d.TEXT_NODE) var f = e.textContent;
          else
            e instanceof a.HTMLImageElement
              ? (f = e.alt)
              : e instanceof a.HTMLInputElement && (f = e.value);
          (f = f && $a(f)) && b.push(f);
        });
        return 0 === b.length ? "" : L(" ", b);
      }
      function un(a, c, b) {
        a = Oa(b);
        b = a[1];
        "track" === a[0] && c({ version: "0", qc: b });
      }
      function vn(a, c, b) {
        if (b) {
          var d = b.version;
          (b = n(wn, d + "." + b.qc)) &&
            ((c && G(b, xn)) || a("ym-" + b + "-" + d));
        }
      }
      function yn(a, c, b) {
        if ("rt" === b)
          return "https://" + Nh(a, c) + ".mc.yandex.ru/watch/3/1";
        if ("mf" === b) {
          b = U(a);
          b = oe(b.protocol + "//" + b.hostname + b.pathname);
          c = kd(a, c);
          var d = "";
          do d += Ua(a);
          while (d.length < c.length);
          d = d.slice(0, c.length);
          a = "";
          for (var e = 0; e < c.length; e += 1)
            a += (c.charCodeAt(e) + d.charCodeAt(e) - 96) % 10;
          a = [d, a];
          return (
            "https://adstat.yandex.ru/track?service=metrika&id=" +
            a[1] +
            "&mask=" +
            a[0] +
            "&ref=" +
            b
          );
        }
      }
      function zn(a, c, b) {
        var d,
          e = vf(c).Qb;
        return ua(a, "pi", c)({ K: Ha(((d = {}), (d[e] = 1), d)) }, [b]);
      }
      function An(a, c, b) {
        return new J(function (d, e) {
          if (Oh(a, pe, "isp")) {
            var f = F,
              g = function (h) {
                ("1" === h ? d : e)();
                f();
                Ph(pe, "isp");
              };
            f = ja(a).F(a, ["message"], D([b, g], A(a, "isp.stat.m", Bn)));
            R(a, g, 1500);
          } else e();
        });
      }
      function Bn(a, c, b) {
        var d = n(b, "data");
        if (ha(d)) {
          var e = d.split("*");
          d = e[0];
          var f = e[1];
          e = e[2];
          "sc.frame" === d && b.source
            ? b.source.postMessage("sc.images*" + a, "*")
            : "sc.image" === d && f === a && c(e);
        }
      }
      function Cn(a, c) {
        var b = Sa(a),
          d = "wv2rf:" + M(c),
          e = c.fc,
          f = wf(a),
          g = b.C(d),
          h = c.Mi;
        return X(f) || bb(g)
          ? Da(function (k, l) {
              pa(c, function (m) {
                var p = !!n(m, "settings.webvisor.forms");
                p = !n(m, "settings.x3") && p;
                f = wf(a) || n(m, "settings.eu");
                b.D(d, xb(p));
                l({ fc: e, Jd: !!f, yf: p, dg: h });
              });
            })
          : xf({ fc: e, Jd: f, yf: !!Ea(g), dg: h });
      }
      function Dn() {
        var a = O(
          function (c, b) {
            c[b[0]] = { ed: 0, Bg: 1 / b[1] };
            return c;
          },
          {},
          [
            ["blur", 0.0034],
            ["change", 0.0155],
            ["click", 0.01095],
            ["deviceRotation", 2e-4],
            ["focus", 0.0061],
            ["mousemove", 0.5132],
            ["scroll", 0.4795],
            ["selection", 0.0109],
            ["touchcancel", 2e-4],
            ["touchend", 0.0265],
            ["touchforcechange", 0.0233],
            ["touchmove", 0.1442],
            ["touchstart", 0.027],
            ["zoom", 0.0014],
          ]
        );
        return {
          xg: function (c) {
            if (c.length)
              return {
                type: "activity",
                data: O(
                  function (b, d) {
                    var e = a[d];
                    return Math.round(b + e.ed * e.Bg);
                  },
                  0,
                  ca(a)
                ),
              };
          },
          Zh: function (c) {
            c && (c = a[c.data.type || c.event]) && (c.ed += 1);
          },
        };
      }
      function En(a) {
        return {
          hh: function () {
            var c = a.document.querySelector("base[href]");
            return c ? c.getAttribute("href") : null;
          },
          jh: function () {
            if (a.document.doctype) {
              var c = z(
                  { name: "html", publicId: "", systemId: "" },
                  a.document.doctype
                ),
                b = c.publicId,
                d = c.systemId;
              return (
                "<!DOCTYPE " +
                L("", [
                  c.name,
                  b ? ' PUBLIC "' + b + '"' : "",
                  !b && d ? " SYSTEM" : "",
                  d ? ' "' + d + '"' : "",
                ]) +
                ">"
              );
            }
            return null;
          },
        };
      }
      function Fn(a, c, b) {
        var d = md(a),
          e = ja(a),
          f = qb(a),
          g = c.xd(),
          h = !n(a, "postMessage") || (f && !n(a, "parent.postMessage")),
          k = v(d, T);
        if (h) {
          if (!g)
            return (
              R(a, I(d.T, d, "i", { va: !1 }), 10), { wd: k, Mf: F, stop: F }
            );
          Ya(Qa());
        }
        d.F(["sr"], function (r) {
          var t,
            y = Qh(a, r.source);
          y &&
            yf(
              a,
              r.source,
              ((t = {}), (t.type = "\u043d"), (t.frameId = c.sa().X(y)), t)
            );
        });
        d.F(["sd"], function (r) {
          var t = r.data;
          r = r.source;
          (a === r || Qh(a, r)) &&
            d.T("sdr", { data: t.data, frameId: t.frameId });
        });
        if (f && !g) {
          var l = !1,
            m = 0,
            p = function () {
              var r;
              yf(a, a.parent, ((r = {}), (r.type = "sr"), r));
              m = R(a, p, 100, "if.i");
            };
          p();
          var q = function (r) {
            d.ea(["\u043d"], q);
            ma(a, m);
            var t = Oc(a, r.origin).host;
            l ||
              r.source !== a.parent ||
              !r.data.frameId ||
              ("about:blank" !== U(a).host && !G(t, b)) ||
              ((l = !0), d.T("i", { frameId: r.data.frameId, va: !0 }));
          };
          d.F(["\u043d"], q);
          R(
            a,
            function () {
              d.ea(["\u043d"], q);
              ma(a, m);
              l || ((l = !0), d.T("i", { va: !1 }));
            },
            2e3,
            "if.r"
          );
        }
        e = e.F(a, ["message"], function (r) {
          var t = ob(a, r.data);
          t &&
            t.type &&
            G(t.type, Gn) &&
            d.T(t.type, { data: t, source: r.source, origin: r.origin });
        });
        return {
          wd: k,
          Mf: function (r) {
            var t;
            return yf(
              a,
              a.parent,
              ((t = {}), (t.frameId = c.xd()), (t.data = r), (t.type = "sd"), t)
            );
          },
          stop: e,
        };
      }
      function Qh(a, c) {
        try {
          return Mb(
            w(Q("contentWindow"), za(c)),
            Ga(a.document.querySelectorAll("iframe"))
          );
        } catch (b) {
          return null;
        }
      }
      function yf(a, c, b) {
        c || Ya(Qa());
        a = wb(a, b);
        c.postMessage(a, "*");
      }
      function Rh() {
        return (
          cc() +
          cc() +
          "-" +
          cc() +
          "-" +
          cc() +
          "-" +
          cc() +
          "-" +
          cc() +
          cc() +
          cc()
        );
      }
      function cc() {
        return Math.floor(65536 * (1 + Math.random()))
          .toString(16)
          .substring(1);
      }
      function Hn(a, c) {
        if (ha(c)) return c;
        var b = a.textContent;
        if (ha(b)) return b;
        b = a.data;
        if (ha(b)) return b;
        b = a.nodeValue;
        return ha(b) ? b : "";
      }
      function In(a, c, b, d, e) {
        void 0 === d && (d = {});
        void 0 === e && (e = Ja(c));
        var f = z(
          O(
            function (h, k) {
              h[k.name] = k.value;
              return h;
            },
            {},
            Ga(c.attributes)
          ),
          d
        );
        z(f, Jn(c, e, f));
        var g =
          (d = zb(
            function (h, k) {
              var l = k[0],
                m = qe(a, c, l, k[1], b, e),
                p = m.value;
              fa(p) ? delete f[l] : (f[l] = p);
              return h || m.mb;
            },
            !1,
            Ma(f)
          )) && nd(c);
        g && ((f.width = g.width), (f.height = g.height));
        return { mb: d, yg: f };
      }
      function Jn(a, c, b) {
        var d = {};
        zf(a)
          ? (d.value = a.value || b.value)
          : "IMG" !== c || b.src || (d.src = "");
        return d;
      }
      function qe(a, c, b, d, e, f) {
        void 0 === f && (f = Ja(c));
        var g = { mb: !1, value: d };
        if (zf(c))
          "value" === b
            ? !fa(d) &&
              "" !== d &&
              ((b = e.Jd),
              (f = e.yf),
              (e = od(a, c)),
              f
                ? ((b = Pc(a, c, b)),
                  (a = b.ob),
                  (c = b.fb),
                  (b = b.Ta),
                  (g.mb = !c && (e || a)))
                : ((g.mb = e), (b = !(c && dc("ym-record-keys", c)))),
              b || e) &&
              ((d = "" + d),
              (g.value = 0 < d.length ? Sh("\u2022", d.length) : ""))
            : "checked" === b &&
              G((c.getAttribute("type") || "").toLowerCase(), Kn)
            ? (g.value = c.checked ? "checked" : null)
            : Ln.test(b) && Af(a, c) && (g.value = null);
        else if ("IMG" === f && "src" === b)
          (e = od(a, c))
            ? ((g.mb = e),
              (g.value =
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="))
            : (g.value =
                (c.getAttribute("srcset") ? c.currentSrc : "") || c.src);
        else if ("A" === f && "href" === b) g.value = d ? "#" : "";
        else if (
          G(b, ["srcset", "integrity", "crossorigin", "password"]) ||
          (2 < b.length && 0 === jb(b, "on")) ||
          ("IFRAME" === f && "src" === b) ||
          ("SCRIPT" === f && G(b, ["src", "type"]))
        )
          g.value = null;
        return g;
      }
      function Bf(a, c, b, d) {
        void 0 === d && (d = "wv2");
        return {
          H: function (e, f) {
            return A(a, d + "." + b + "." + f, e, void 0, c);
          },
        };
      }
      function Mn(a, c, b, d, e) {
        function f() {
          l && l.stop();
        }
        if (!c.xb) return J.resolve(F);
        var g = ua(a, "4", c),
          h = { K: Ha() },
          k = new Nn(a, b, function (m, p, q) {
            if (!g) return J.resolve();
            var r = "wv-data=" + ed(m, !0),
              t = A(a, "m.n.m.s");
            p = {};
            p["wv-part"] = "" + q;
            q = m.length;
            for (var y = 0, E = 255, N = 255, K, ka, qa; q; ) {
              K = 21 < q ? 21 : q;
              q -= K;
              do
                (ka = "string" === typeof m ? m.charCodeAt(y) : m[y]),
                  (y += 1),
                  255 < ka && ((qa = ka >> 8), (ka &= 255), (ka ^= qa)),
                  (E += ka),
                  (N += E);
              while (--K);
              E = (E & 255) + (E >> 8);
              N = (N & 255) + (N >> 8);
            }
            m = (((E & 255) + (E >> 8)) << 8) | ((N & 255) + (N >> 8));
            return g(
              z({}, h, {
                $: { ba: r },
                J:
                  ((p["wv-check"] = "" + (65535 === m ? 0 : m)),
                  (p["wv-type"] = b.type),
                  p),
              }),
              c
            )["catch"](t);
          }),
          l = On(a, k, d, e);
        return pa(c, function (m) {
          m && H(a).D("isEU", n(m, "settings.eu"));
          H(a).C("oo") || (l && Th(a, m) && l.start());
          return f;
        });
      }
      function On(a, c, b, d) {
        var e = a.document,
          f = [],
          g = ja(a),
          h = ":submit" + Math.random(),
          k = [],
          l = I(c.flush, c),
          m = va(function (r, t) {
            A(a, "hfv." + r, function () {
              try {
                var y = t.type;
              } catch (E) {
                return;
              }
              y = G(y, d);
              c.push(t, { type: r });
              y && l();
            })();
          }),
          p = A(a, "sfv", function () {
            var r = b(a),
              t = Pn(a);
            x(function (y) {
              f.push(g.F(y.target, [y.event], m(y.type)));
            }, r);
            x(function (y) {
              f.push(
                g.F(
                  y.target,
                  [y.event],
                  A(a, "hff." + y.type + "." + y.event, function (E) {
                    x(Da({ l: a, na: E, flush: l }), y.O);
                  })
                )
              );
            }, t);
            k = Uh(a, "form", e);
            e.attachEvent &&
              ((r = Uh(a, "form *", e)),
              x(function (y) {
                f.push(g.F(y, ["submit"], m("form")));
              }, k),
              x(function (y) {
                Cf(y) && f.push(g.F(y, ["change"], m("formInput")));
              }, r));
            x(function (y) {
              var E = y.submit;
              if (V(E) || ("object" === typeof E && Qn.test("" + E)))
                (y[h] = E),
                  (y.submit = A(a, "fv", function () {
                    var N = { target: y, type: "submit" };
                    m("document")(N);
                    return y[h]();
                  }));
            }, k);
          }),
          q = A(a, "ufv", function () {
            x(na, f);
            x(function (r) {
              r && (r.submit = r[h]);
            }, k);
            c.flush();
          });
        return { start: p, stop: q };
      }
      function Rn(a, c) {
        var b = ia(function (e) {
            return 0 < e.O.length;
          }, c),
          d = Vh({ target: a.document, type: "document" });
        return C(w(T, d, Sn(a)), b);
      }
      function Wh(a, c) {
        var b = a.l,
          d = [],
          e = c.form;
        if (!c[Va] && e) {
          var f = e.elements;
          e = e.length;
          for (var g = 0; g < e; g += 1) {
            var h = f[g];
            re(h) && !h[Va] && sa(d, uc(b, h));
          }
        } else sa(d, uc(b, c));
        return d;
      }
      function Df(a) {
        if (pd) {
          pd = !1;
          var c = Ab(a.l),
            b = [];
          lb(a.l, b, 15) ? (a = []) : (S(b, c), (a = b));
          return a;
        }
      }
      function Xh(a) {
        if (!pd) {
          pd = !0;
          a = Ab(a.l);
          var c = [];
          Tb(c, 14);
          S(c, a);
          return c;
        }
      }
      function Tn(a, c, b) {
        var d = c[Va];
        if (d) {
          a: {
            var e = Ab(a),
              f = c[Va];
            if (0 < f) {
              var g = [];
              c = Ef(a, c);
              var h = vc[f],
                k = c[0] + "x" + c[1],
                l = c[2] + "x" + c[3];
              if (k !== h.tf) {
                h.tf = k;
                if (lb(a, g, 9)) {
                  a = [];
                  break a;
                }
                S(g, e);
                S(g, f);
                S(g, c[0]);
                S(g, c[1]);
              }
              if (l !== h.size) {
                h.size = l;
                if (lb(a, g, 10)) {
                  a = [];
                  break a;
                }
                S(g, e);
                S(g, f);
                S(g, c[2]);
                S(g, c[3]);
              }
              if (g.length) {
                a = g;
                break a;
              }
            }
            a = [];
          }
          sa(b, a);
        }
        return d;
      }
      function Pc(a, c, b) {
        void 0 === b && (b = !1);
        if (!c) return { Ta: !1, fb: !1, ob: !1 };
        var d = c.getAttribute("type") || c.type;
        if ("button" === d) return { Ta: !1, fb: !1, ob: !1 };
        var e = ia(Yh, [c.className, c.id, c.name]),
          f = c && dc("ym-record-keys", c);
        d = (d && G(d, Zh)) || Za(gb(Un), e);
        var g;
        (g = d) ||
          ((g = c.placeholder),
          (g = Za(gb(Vn), e) || (Yh(g) && Wn.test(g || ""))));
        e = g;
        return {
          Ta: !f && (Ff(a, c) || (e && b) || (e && !d && !b)),
          fb: f,
          ob: e,
        };
      }
      function Ff(a, c) {
        return Af(a, c) || qd(a, c) ? !0 : od(a, c);
      }
      function Yh(a) {
        return !!(a && 2 < a.length);
      }
      function zf(a) {
        try {
          var c = Ja(a);
          if (G(c, Gf)) {
            if ("INPUT" === c) {
              var b = a.type;
              return !b || G(b.toLocaleLowerCase(), Xn);
            }
            return !0;
          }
        } catch (d) {}
        return !1;
      }
      function $h(a, c) {
        return c && dc("(ym-disable-submit|-metrika-noform)", c);
      }
      function Yn(a, c) {
        return L(
          "",
          C(function (b) {
            return a.isNaN(b)
              ? Zn.test(b)
                ? ((b = b.toUpperCase() === b ? $n : ao),
                  String.fromCharCode(Ua(a, b[0], b[1])))
                : b
              : "" + Ua(a, 0, 9);
          }, c.split(""))
        );
      }
      function od(a, c) {
        if (fa(c)) return !1;
        if (Hf(c)) {
          var b = c.parentNode;
          return (fa(b) ? 0 : 11 === b.nodeType) ? !1 : od(a, c.parentNode);
        }
        b = ai(a);
        if (!b) return !1;
        var d = b.call(c, ".ym-hide-content,.ym-hide-content *");
        return d &&
          b.call(c, ".ym-show-content,.ym-hide-content .ym-show-content *")
          ? !1
          : d;
      }
      function Th(a, c) {
        var b = wc(a),
          d = b.C("visorc");
        G(d, ["w", "b"]) || (d = "");
        (bi(a) && ci(a, se, "visorc") && !bo.test(rb(a) || "")) || (d = "b");
        var e = n(c, "settings.webvisor.recp");
        if (!a.isFinite(e) || 0 > e || 1 < e) d = "w";
        d || (d = (H(a).C("hitId") % 1e4) / 1e4 < e ? "w" : "b");
        b.D("visorc", d, 30);
        return "w" === d;
      }
      function co(a, c) {
        return {
          N: function (b, d) {
            b.K.Vb("we", Nb(c.xb));
            di(a, c, b, "rn");
            d();
          },
        };
      }
      function ei(a, c, b) {
        if (fi.isEnabled(a)) return new fi(a, c);
        if (gi.isEnabled(a)) return new gi(a, b);
      }
      function hi(a, c) {
        var b = c[1][3],
          d = 0,
          e = new a.Uint8Array(c[0]);
        return ac([b], function (f, g) {
          if (!f) return e;
          f[0](a, f[2], e, d);
          d += f[1];
          g.push(f[3]);
          return e;
        });
      }
      function ii(a, c, b) {
        a = c(b);
        c = [F, 0, 0];
        var d = [0, c, c, void 0];
        return ac(a, function (e, f) {
          var g = e[0],
            h = e[1],
            k = e[2];
          if (0 === g) return k(d, h), d;
          if (void 0 === h || null === h) return d;
          var l = g >> 3;
          if (g & 1) xc(d, Y(l)), (h = k(h)), l & 2 && xc(d, Y(h[1])), xc(d, h);
          else if (g & 4)
            for (g = h.length - 1; 0 <= g; ) {
              var m = k(h[g]);
              m.push([0, 0, If]);
              m.push([0, Y(l), xc]);
              m.unshift([0, 0, Jf]);
              sa(f, m);
              --g;
            }
          else if (g & 2) {
            k = e[2];
            var p = e[3],
              q = e[4],
              r = e[5],
              t = ca(h);
            for (g = t.length - 1; 0 <= g; )
              (m = t[g]),
                (m = [
                  [0, 0, Jf],
                  [q, h[m], r],
                  [k, m, p],
                  [0, 0, If],
                  [0, Y(l), xc],
                ]),
                sa(f, m),
                --g;
          } else
            (m = k(h)),
              m.push([0, 0, If]),
              m.push([0, Y(l), xc]),
              m.unshift([0, 0, Jf]),
              sa(f, m);
          return d;
        });
      }
      function Jf(a) {
        var c = a[1],
          b = a[0],
          d = a[2];
        a[3]
          ? ((a[0] = a[3][0]),
            (a[1] = a[3][1]),
            (a[2] = a[3][2]),
            (a[3] = a[3][3]))
          : ((a[0] = 0), (a[1] = [F, 0, 0]), (a[2] = a[1]));
        xc(a, Y(b));
        b && ((a[2][3] = c[3]), (a[2] = d), (a[0] += b));
      }
      function If(a) {
        a[3] = [a[0], a[1], a[2], a[3]];
        a[1] = [F, 0, 0];
        a[2] = a[1];
        a[0] = 0;
      }
      function xc(a, c) {
        a[0] += c[1];
        a[2][3] = c;
        a[2] = c;
      }
      function ji(a) {
        return [
          [1857, a.partsTotal, Y],
          [1793, a.activity, Y],
          [1744, a.textChangeMutation, eo],
          [1680, a.removedNodesMutation, fo],
          [1616, a.addedNodesMutation, go],
          [1552, a.attributesChangeMutation, ho],
          [1488, a.publishersHeader, io],
          [1424, a.articleInfo, jo],
          [1360, a.focusEvent, ko],
          [1296, a.fatalErrorEvent, lo],
          [1232, a.deviceRotationEvent, mo],
          [1168, a.keystrokesEvent, no],
          [1104, a.resizeEvent, oo],
          [1040, a.zoomEvent, po],
          [976, a.touchEvent, qo],
          [912, a.changeEvent, ro],
          [848, a.selectionEvent, so],
          [784, a.scrollEvent, to],
          [720, a.mouseEvent, uo],
          [656, a.uj, vo],
          [592, a.page, wo],
          [513, a.end, yc],
          [449, a.partNum, Y],
          [401, a.chunk, xo],
          [257, a.frameId, ta],
          [193, a.event, Y],
          [129, a.type, Y],
          [65, a.stamp, Y],
        ];
      }
      function yo(a) {
        return [[84, a.ri, ji]];
      }
      function zo(a) {
        return [
          [129, a.position, ta],
          [81, a.name, da],
        ];
      }
      function Ao(a) {
        return [[81, a.name, da]];
      }
      function Bo(a) {
        return [[81, a.name, da]];
      }
      function jo(a) {
        return [
          [593, a.updateDate, da],
          [532, a.rubric, zo],
          [449, a.chars, ta],
          [401, a.publicationDate, da],
          [340, a.topics, Ao],
          [276, a.authors, Bo],
          [209, a.pageTitle, da],
          [145, a.pageUrlCanonical, da],
          [65, a.id, Y],
        ];
      }
      function Co(a) {
        return [
          [513, a.chars, ta],
          [489, a.maxScrolled, rd],
          [385, a.involvedTime, ta],
          [321, a.height, ta],
          [257, a.width, ta],
          [193, a.y, ta],
          [129, a.x, ta],
          [65, a.id, Y],
        ];
      }
      function io(a) {
        return [
          [129, a.involvedTime, ta],
          [84, a.articleMeta, Co],
        ];
      }
      function ko(a) {
        return [[65, a.target, ta]];
      }
      function lo(a) {
        return [
          [209, a.stack, da],
          [145, a.Ug, da],
          [81, a.code, da],
        ];
      }
      function mo(a) {
        return [
          [193, a.orientation, ta],
          [129, a.height, Y],
          [65, a.width, Y],
        ];
      }
      function no(a) {
        return [[84, a.keystrokes, Do]];
      }
      function Do(a) {
        return [
          [273, a.modifier, da],
          [193, a.isMeta, yc],
          [145, a.key, da],
          [65, a.id, Y],
        ];
      }
      function oo(a) {
        return [
          [257, a.pageHeight, Y],
          [193, a.pageWidth, Y],
          [129, a.height, Y],
          [65, a.width, Y],
        ];
      }
      function po(a) {
        return [
          [193, a.y, ta],
          [129, a.x, ta],
          [105, a.level, rd],
        ];
      }
      function qo(a) {
        return [
          [129, a.target, ta],
          [84, a.touches, Eo],
        ];
      }
      function Eo(a) {
        return [
          [297, a.force, rd],
          [233, a.y, rd],
          [169, a.x, rd],
          [81, a.id, da],
        ];
      }
      function ro(a) {
        return [
          [257, a.target, ta],
          [193, a.hidden, yc],
          [129, a.checked, yc],
          [81, a.value, da],
        ];
      }
      function so(a) {
        return [
          [257, a.endNode, Y],
          [193, a.startNode, Y],
          [129, a.end, ta],
          [65, a.start, ta],
        ];
      }
      function to(a) {
        return [
          [257, a.target, ta],
          [193, a.page, yc],
          [129, a.y, ta],
          [65, a.x, ta],
        ];
      }
      function uo(a) {
        return [
          [193, a.target, ta],
          [129, a.y, Y],
          [65, a.x, Y],
        ];
      }
      function vo(a) {
        return [
          [148, a.changes, Fo],
          [65, a.target, ta],
        ];
      }
      function Fo(a) {
        return [
          [193, a.index, Y],
          [145, a.op, da],
          [81, a.style, da],
        ];
      }
      function eo(a) {
        return [
          [209, a.value, da],
          [129, a.index, Y],
          [65, a.target, Y],
        ];
      }
      function fo(a) {
        return [
          [129, a.index, Y],
          [69, a.nodes, ta],
        ];
      }
      function go(a) {
        return [
          [129, a.index, Y],
          [84, a.nodes, ki],
        ];
      }
      function ho(a) {
        return [
          [210, a.attributes, 81, da, 145, da],
          [129, a.index, Y],
          [65, a.target, Y],
        ];
      }
      function wo(a) {
        return [
          [852, a.content, ki],
          [785, a.tabId, da],
          [705, a.recordStamp, Go],
          [656, a.location, Ho],
          [592, a.viewport, li],
          [528, a.screen, li],
          [449, a.hasBase, yc],
          [401, a.base, da],
          [337, a.referrer, da],
          [273, a.ua, da],
          [209, a.address, da],
          [145, a.title, da],
          [81, a.doctype, da],
        ];
      }
      function Ho(a) {
        return [
          [209, a.path, da],
          [145, a.protocol, da],
          [81, a.host, da],
        ];
      }
      function li(a) {
        return [
          [129, a.height, ta],
          [65, a.width, ta],
        ];
      }
      function ki(a) {
        return [
          [513, a.hidden, yc],
          [449, a.prev, Y],
          [385, a.next, Y],
          [337, a.content, da],
          [257, a.parent, Y],
          [210, a.attributes, 81, da, 145, da],
          [145, a.name, da],
          [65, a.id, Y],
        ];
      }
      function da(a) {
        var c = Io({}, a, [], 0);
        return c ? [Jo, c, a] : [mi, 0, 0];
      }
      function xo(a) {
        return [Ko, a.length, a];
      }
      function yc(a) {
        return [mi, 1, a ? 1 : 0];
      }
      function Go(a) {
        a = ni(a);
        var c = a[0],
          b = a[1],
          d = ((b >>> 28) | (c << 4)) >>> 0;
        c >>>= 24;
        return [
          oi,
          0 === c
            ? 0 === d
              ? 16384 > b
                ? 128 > b
                  ? 1
                  : 2
                : 2097152 > b
                ? 3
                : 4
              : 16384 > d
              ? 128 > d
                ? 5
                : 6
              : 2097152 > d
              ? 7
              : 8
            : 128 > c
            ? 9
            : 10,
          a,
        ];
      }
      function rd(a) {
        return [Lo, 4, a];
      }
      function ta(a) {
        return 0 > a ? [oi, 10, ni(a)] : Y(a);
      }
      function Y(a) {
        return [
          Mo,
          128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5,
          a,
        ];
      }
      function Mo(a, c, b, d) {
        for (a = c; 127 < a; ) (b[d++] = (a & 127) | 128), (a >>>= 7);
        b[d] = a;
      }
      function mi(a, c, b, d) {
        b[d] = c;
      }
      function Ko(a, c, b, d) {
        for (a = 0; a < c.length; ++a) b[d + a] = c[a];
      }
      function pi(a) {
        return function (c, b, d, e) {
          for (var f, g = 0, h = 0; h < b.length; ++h)
            if (((c = b.charCodeAt(h)), 128 > c)) a ? (g += 1) : (d[e++] = c);
            else {
              if (2048 > c) {
                if (a) {
                  g += 2;
                  continue;
                }
                d[e++] = (c >> 6) | 192;
              } else {
                if (
                  55296 === (c & 64512) &&
                  56320 === ((f = b.charCodeAt(h + 1)) & 64512)
                ) {
                  if (a) {
                    g += 4;
                    continue;
                  }
                  c = 65536 + ((c & 1023) << 10) + (f & 1023);
                  ++h;
                  d[e++] = (c >> 18) | 240;
                  d[e++] = ((c >> 12) & 63) | 128;
                } else {
                  if (a) {
                    g += 3;
                    continue;
                  }
                  d[e++] = (c >> 12) | 224;
                }
                d[e++] = ((c >> 6) & 63) | 128;
              }
              d[e++] = (c & 63) | 128;
            }
          return a ? g : e;
        };
      }
      function Lo(a, c, b, d) {
        return No(a)(a, c, b, d);
      }
      function Oo(a, c, b, d) {
        var e = 0 > c ? 1 : 0;
        e && (c = -c);
        if (0 === c) sd(0 < 1 / c ? 0 : 2147483648, b, d);
        else if (a.isNaN(c)) sd(2143289344, b, d);
        else if (3.4028234663852886e38 < c)
          sd(((e << 31) | 2139095040) >>> 0, b, d);
        else if (1.1754943508222875e-38 > c)
          sd(((e << 31) | a.Math.round(c / 1.401298464324817e-45)) >>> 0, b, d);
        else {
          var f = a.Math.floor(a.Math.log(c) / Math.LN2);
          sd(
            ((e << 31) |
              ((f + 127) << 23) |
              (Math.round(c * a.Math.pow(2, -f) * 8388608) & 8388607)) >>>
              0,
            b,
            d
          );
        }
      }
      function sd(a, c, b) {
        c[b] = a & 255;
        c[b + 1] = (a >>> 8) & 255;
        c[b + 2] = (a >>> 16) & 255;
        c[b + 3] = a >>> 24;
      }
      function oi(a, c, b, d) {
        a = c[0];
        for (c = c[1]; a; )
          (b[d++] = (c & 127) | 128),
            (c = ((c >>> 7) | (a << 25)) >>> 0),
            (a >>>= 7);
        for (; 127 < c; ) (b[d++] = (c & 127) | 128), (c >>>= 7);
        b[d++] = c;
      }
      function ni(a) {
        if (!a) return [0, 0];
        var c = 0 > a;
        c && (a = -a);
        var b = a >>> 0;
        a = ((a - b) / 4294967296) >>> 0;
        c &&
          ((a = ~a >>> 0),
          (b = ~b >>> 0),
          4294967295 < ++b && ((b = 0), 4294967295 < ++a && (a = 0)));
        return [a, b];
      }
      function di(a, c, b, d) {
        var e,
          f = b.J;
        f.wmode = "0";
        f["wv-hit"] = f["wv-hit"] || "" + zc(a);
        f["page-url"] = f["page-url"] || U(a).href;
        d && (f[d] = f[d] || "" + Ua(a));
        a = {
          ja: { Aa: "webvisor/" + c.id },
          $: z(b.$ || {}, {
            Wa: ((e = {}), (e["Content-Type"] = "text/plain"), e),
            Yc: "POST",
          }),
          J: f,
        };
        z(b, a);
      }
      function Po(a, c) {
        return pa(c, function (b) {
          var d = H(a);
          M(c);
          if (!d.C("dSync", !1))
            return (
              d.D("dSync", !0),
              qi(a, b, {
                ab: c,
                Qb: "s",
                Od: "ds",
                Bi: function (e, f, g) {
                  var h = e.Qc;
                  e = e.host;
                  if (n(h, "settings")) return Ya(Qa("ds.e"));
                  f = f(Z) - g;
                  g = e[1];
                  var k, l;
                  h = Ha(((k = {}), (k.di = h), (k.dit = f), (k.dip = g), k));
                  k = ((l = {}), (l["page-url"] = U(a).href), l);
                  return ua(
                    a,
                    "S",
                    ri
                  )({ K: h, J: k }, ri)["catch"](A(a, "ds.rs"));
                },
              })
            );
        });
      }
      function qi(a, c, b) {
        var d,
          e = b.ab,
          f = la(a),
          g = Qo(a, c.userData, e),
          h = Ro(a),
          k = w(si, D([So, To], td))(a),
          l = n(c, "settings.sbp");
        l && (b.data = z({}, l, ((d = {}), (d.c = e.id), d)));
        return h.length
          ? Uo(a, f, g, c, k, b).then(function () {
              return Vo(a, h, g, f, k, b);
            }, F)
          : J.resolve();
      }
      function Ro(a) {
        var c = ud(a);
        a = w(Kf, pc(["iPhone", "iPad"]))(a);
        return c ? Wo : a ? Xo : [];
      }
      function Vo(a, c, b, d, e, f) {
        e = f.Bi;
        var g = void 0 === e ? F : e,
          h = f.Od,
          k = d(Z);
        return Yo(
          a,
          c,
          f
        )(
          Pa(
            function (l) {
              x(function (m) {
                m && vd(a, h + ".s", m);
              }, l);
              l = d(pb);
              b.D(h, l);
            },
            function (l) {
              b.D(h, d(pb));
              g(l, d, k);
            }
          )
        );
      }
      function Uo(a, c, b, d, e, f) {
        var g = f.Od,
          h = f.ab;
        return new J(function (k, l) {
          var m = b.C(g, 0);
          m = parseInt("" + m, 10);
          return c(pb) - m <= e.Yf
            ? l()
            : Zo(a)
            ? k(void 0)
            : pf(d)
            ? l()
            : k($o(a, h));
        });
      }
      function Yo(a, c, b) {
        var d = b.Qb,
          e = b.data,
          f = ua(a, d, b.ab);
        a = z({}, ti);
        e && z(a.J, e);
        return ap(
          C(function (g) {
            return bp(
              f(
                z({ $: { Ee: !1, fe: !0 } }, ti),
                C(function (h) {
                  var k = h[1],
                    l = h[2];
                  h = L(
                    "",
                    C(function (m) {
                      return String.fromCharCode(m.charCodeAt(0) + 10);
                    }, h[0].split(""))
                  );
                  return (
                    "http" + (l ? "s" : "") + "://" + h + ":" + k + "/" + cp[d]
                  );
                }, g)
              ).then(function (h) {
                return z({}, h, { host: g[h.gg] });
              })
            );
          }, c)
        );
      }
      function Qo(a, c, b) {
        var d = c || {},
          e = ua(a, "u", b),
          f = Sa(a);
        return {
          C: function (g, h) {
            return X(d[g]) ? f.C(g, h) : d[g];
          },
          D: function (g, h) {
            var k,
              l = "" + h;
            d[g] = l;
            f.D(g, l);
            return e(
              { J: ((k = {}), (k.key = g), (k.value = l), k) },
              [Ca.Qa + "//" + ec + "/user_storage_set"],
              {}
            )["catch"](A(a, "u.d.s.s"));
          },
        };
      }
      function dp(a) {
        return {
          N: function (c, b) {
            H(a).C("oo") || b();
          },
        };
      }
      function ep(a, c) {
        try {
          var b = c[0];
          var d = b[1];
        } catch (e) {
          return function () {
            return J.resolve();
          };
        }
        return function (e) {
          var f,
            g =
              ((f = {}),
              (f["browser-info"] = fp),
              (f["page-url"] = a.location && "" + a.location.href),
              f);
          return d && (e = wb(a, e))
            ? d(gp, { Xa: g, fa: [], ba: "site-info=" + oe(e) })["catch"](F)
            : J.resolve();
        };
      }
      function hp(a, c) {
        var b = Lf(function (d, e) {
          return d[1].ca > e[1].ca ? 1 : -1;
        }, Ma(be));
        b = C(function (d) {
          var e = d[0],
            f = d[1].Na;
          d = vb(c, e) && !fa(c[e]);
          e = c[e] !== (f || T)(void 0);
          return xb(d && e);
        }, b);
        return te(L("", b));
      }
      function ip(a, c) {
        if (n(a, "disableYaCounter" + c.id) || n(a, "Ya.disableMetrica")) {
          var b = M(c);
          delete H(a).C("counters", {})[b];
          Ya(Qa("oo.e"));
        }
      }
      function jp(a) {
        if (ue(a)) return null;
        var c = kp(a),
          b = c.xf;
        X(b) &&
          ((c.xf = null),
          lp(a).then(function (d) {
            c.xf = d;
          }));
        return b ? 1 : null;
      }
      function mp(a, c, b) {
        b = b.J;
        if ((void 0 === b ? {} : b).nohit) return null;
        a = wd(a);
        if (!a) return null;
        var d = (b = null);
        n(a, "getEntriesByType") &&
          (d = n(a.getEntriesByType("navigation"), "0")) &&
          (b = np);
        if (!b) {
          var e = n(a, "timing");
          e && ((b = op), (d = e));
        }
        if (!b) return null;
        a = pp(a, d, b);
        c = M(c);
        c = qp(c);
        return (c = rp(c, a)) && L(",", c);
      }
      function rp(a, c) {
        var b = a.length
          ? C(function (d, e) {
              var f = c[e];
              return f === d ? null : f;
            }, a)
          : c;
        a.length = 0;
        x(w(T, Wa("push", a)), c);
        return ia(za(null), b).length === a.length ? null : b;
      }
      function pp(a, c, b) {
        return C(function (d) {
          var e = d[0],
            f = d[1];
          if (V(e)) return e(a, c) || null;
          if (1 === d.length) return c[e] ? Math.round(c[e]) : null;
          var g;
          !(g = c[e] && c[f]) &&
            (g = 0 === c[e] && 0 === c[f]) &&
            ((g = d[1]), (g = !(ui[d[0]] || ui[g])));
          if (!g) return null;
          d = Math.round(c[e]) - Math.round(c[f]);
          return 0 > d || 36e5 < d ? null : d;
        }, b);
      }
      function ve(a, c) {
        try {
          var b = c.localStorage.getItem(a);
          return b && ed(he(b));
        } catch (d) {}
        return null;
      }
      function he(a) {
        for (var c = [], b = 0; b < a.length; b++) {
          var d = a.charCodeAt(b);
          128 > d
            ? c.push(d)
            : (127 < d && 2048 > d
                ? c.push((d >> 6) | 192)
                : (c.push((d >> 12) | 224), c.push(((d >> 6) & 63) | 128)),
              c.push((d & 63) | 128));
        }
        return c;
      }
      function ed(a, c) {
        void 0 === c && (c = !1);
        for (var b = a.length, d = b - (b % 3), e = [], f = 0; f < d; f += 3) {
          var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
          e.push(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              (g >> 18) & 63
            ],
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              (g >> 12) & 63
            ],
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              (g >> 6) & 63
            ],
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              g & 63
            ]
          );
        }
        switch (b - d) {
          case 1:
            b = a[d] << 4;
            e.push(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                (b >> 6) & 63
              ],
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                b & 63
              ],
              "=",
              "="
            );
            break;
          case 2:
            (b = (a[d] << 10) + (a[d + 1] << 2)),
              e.push(
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                  (b >> 12) & 63
                ],
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                  (b >> 6) & 63
                ],
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                  b & 63
                ],
                "="
              );
        }
        e = L("", e);
        return c ? vi(e, !0) : e;
      }
      function Ch(a, c) {
        void 0 === c && (c = !1);
        var b = a,
          d = "",
          e = 0;
        if (!b) return "";
        for (c && (b = vi(b)); b.length % 4; ) b += "=";
        do {
          var f = Ac(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              b.charAt(e++)
            ),
            g = Ac(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              b.charAt(e++)
            ),
            h = Ac(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              b.charAt(e++)
            ),
            k = Ac(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              b.charAt(e++)
            );
          if (0 > f || 0 > g || 0 > h || 0 > k) return "";
          var l = (f << 18) | (g << 12) | (h << 6) | k;
          f = (l >> 16) & 255;
          g = (l >> 8) & 255;
          l &= 255;
          d =
            64 === h
              ? d + String.fromCharCode(f)
              : 64 === k
              ? d + String.fromCharCode(f, g)
              : d + String.fromCharCode(f, g, l);
        } while (e < b.length);
        return d;
      }
      function vi(a, c) {
        void 0 === c && (c = !1);
        return a
          ? a.replace(c ? /[+/=]/g : /[-*_]/g, function (b) {
              return sp[b] || b;
            })
          : "";
      }
      function tp(a, c) {
        for (var b = "", d = 0; d < c; d += 1) b += a;
        return b;
      }
      function up(a, c, b, d, e, f, g, h) {
        var k = b.C(f);
        fa(k) && (b.D(f, g), e(a, c, b, d), (k = b.C(f, g)));
        X(h) || h.Vb(f, "" + k);
        return k;
      }
      function we(a, c, b) {
        return function (d) {
          var e,
            f,
            g = ya(c, b);
          g &&
            vp(a, d, c) &&
            ((g = I(g.params, g)),
            (d = Mf({ event: a, Ja: "products", xa: fc, xh: "goods" }, d)) &&
              g &&
              g(((e = {}), (e.__ym = ((f = {}), (f.ecommerce = [d]), f)), e)));
        };
      }
      function vp(a, c, b) {
        var d = !1,
          e = "";
        if (!oa(c)) return Jb(b, "", "ecomeo"), d;
        var f = c.goods;
        switch (a) {
          case "detail":
          case "add":
          case "remove":
            P(f) && f.length
              ? (d = wi(function (g) {
                  return oa(g) && (ha(g.id) || gc(b, g.id) || ha(g.name));
                }, f)) || (e = "ecomgi")
              : (e = "ecomgei");
            break;
          case "purchase":
            gc(b, c.id) || ha(c.id) ? (d = !0) : (e = "ecompi");
        }
        Jb(b, "", e);
        return d;
      }
      function xd(a, c) {
        return {
          N: function (b, d) {
            Nf(b)
              ? d()
              : pa(c, function (e) {
                  var f;
                  if ((e = n(e, "settings.hittoken")))
                    (e = ((f = {}), (f.hittoken = e), f)),
                      (b.J = z(b.J || {}, e));
                  d();
                });
          },
        };
      }
      function wp(a, c) {
        function b() {
          q.hidden
            ? z(k.style, yd(["top", "right", "left", "background"], "initial"))
            : z(k.style, yd(["top", "right", "left"], "0"), {
                background: "rgba(0, 0, 0, .3)",
              });
          y.parentNode || (r.appendChild(p), r.appendChild(y));
          q.hidden = !q.hidden;
          r.hidden = !r.hidden;
          t.hidden = !t.hidden;
        }
        function d(K) {
          var ka = g();
          z(ka.style, Bc("2px", "18px"), Qc, {
            left: "15px",
            top: "7px",
            background: "#2f3747",
            borderRadius: "2px",
          });
          ka.style.transform = "rotate(" + K + "deg)";
          return ka;
        }
        function e(K, ka, qa, Ka, zd) {
          var xe = g();
          z(xe.style, Bc(ka + "px", qa + "px"), Qc, {
            left: K + "px",
            bottom: 0,
            background: Ka,
            borderTopLeftRadius: zd,
          });
          return xe;
        }
        var f = yb(a);
        if (!f) return F;
        var g = v("div", f),
          h = v("iframe", f),
          k = g();
        k.classList.add("__ym_wv_ign");
        z(k.style, xi, {
          bottom: "0",
          width: "100%",
          maxWidth: "initial",
          zIndex: "999999999",
        });
        var l = k.attachShadow ? k.attachShadow({ mode: "open" }) : k,
          m = g();
        z(m.style, Bc("24px"), Qc, Of, {
          top: "12px",
          right: "10px",
          background: "#3367dc",
          overflow: "hidden",
        });
        var p = g();
        z(
          p.style,
          {
            border: "2px solid transparent",
            animation: "__ym_wv_ign-spinner-animation 1s 0.21s infinite linear",
          },
          Of,
          Qc,
          Bc("48px"),
          yd(["top", "left"], "calc(50% - 24px)"),
          yd(["borderTopColor", "borderLeftColor"], "#fc0")
        );
        f = f("style");
        f.textContent =
          "@keyframes __ym_wv_ign-spinner-animation {to {transform: rotate(360deg);}}";
        p.appendChild(f);
        var q = g();
        q.id = "__ym_wv_ign__opener";
        z(q.style, Bc("46px", "48px"), xi, {
          right: "0",
          bottom: "60px",
          cursor: "pointer",
          background: "#fff",
          borderRadius: "16px 0 0 16px",
          boxShadow:
            "0px 0px 1px rgba(67, 68, 69, 0.3), 0px 1px 2px rgba(67, 68, 69, 0.3)",
        });
        var r = g();
        z(r.style, Qc, yd(["top", "right", "bottom"], "0"), {
          width: "600px",
          background: "#fff",
        });
        var t = g();
        t.id = "__ym_wv_ign__closer";
        z(t.style, Bc("32px"), Qc, Of, {
          top: "12px",
          right: "612px",
          cursor: "pointer",
          background: "#fff",
        });
        f = h();
        f.src = "https://metrika.yandex.ru/widget/iframe-check";
        var y = h();
        z(y.style, Bc("100%"), { border: "none" });
        y.src = "https://metrika.yandex.ru/widget/dashboard?id=" + c;
        r.hidden = !0;
        t.hidden = !0;
        t.appendChild(d(45));
        t.appendChild(d(-45));
        r.appendChild(f);
        m.appendChild(
          e(
            0,
            8,
            9,
            "linear-gradient(0deg, #ff324f, #ff324f), linear-gradient(158.67deg, #ff455c 12.6%, #ff1139 96.76%)"
          )
        );
        m.appendChild(e(8, 9, 16, "#04acff", "3px"));
        m.appendChild(e(17, 7, 24, "#ffdd13"));
        q.appendChild(m);
        l.appendChild(r);
        l.appendChild(t);
        var E = ["click", "touchstart"];
        h = ja(a);
        m = a.document.body;
        l = [
          h.F(q, E, b),
          h.F(t, E, b),
          h.F(
            f,
            ["load"],
            D([na, [I(r.removeChild, r, f), I(l.appendChild, l, q)]], x)
          ),
          h.F(y, ["load"], I(r.removeChild, r, p)),
          I(m.removeChild, m, k),
        ];
        var N = D([na, l], x);
        l.push(
          h.F(a, ["securitypolicyviolation"], function (K) {
            (K = n(K, "blockedURI")) &&
              0 <= jb(K, "https://metrika.yandex.ru") &&
              N();
          })
        );
        m.appendChild(k);
        return N;
      }
      function yd(a, c) {
        return O(
          function (b, d) {
            b[d] = c;
            return b;
          },
          {},
          a
        );
      }
      function Bc(a, c) {
        var b;
        return (b = {}), (b.width = a), (b.height = c || a), b;
      }
      function xp(a, c) {
        var b = n(c, "origin"),
          d;
        if ((d = b)) d = yp.test(b) || zp.test(b);
        d &&
          ((b = ob(a, c.data)),
          "appendremote" === n(b, "action") && Ap(a, c, b));
      }
      function yi(a, c, b, d) {
        var e, f, g, h;
        void 0 === b && (b = "");
        void 0 === d && (d = "");
        var k = H(a),
          l = {};
        l.getCachedTags = ye;
        l.form =
          ((e = {}),
          (e.closest = v(a, zi)),
          (e.select = Bp),
          (e.getData = v(a, Ai)),
          e);
        l.button =
          ((f = {}),
          (f.closest = v(a, fe)),
          (f.select = Pf),
          (f.getData = v(a, ge)),
          f);
        l.phone = ((g = {}), (g.hidePhones = D([a, null, [d]], Bi)), g);
        l.status = ((h = {}), (h.checkStatus = D([a, Ea(b)], Cp)), h);
        k.D("_u", l);
        c && tc(a, { src: c });
      }
      function Ci(a) {
        var c = a.lang;
        c = void 0 === c ? "" : c;
        var b = a.appVersion;
        b = void 0 === b ? "" : b;
        var d = a.fileId;
        d = void 0 === d ? "" : d;
        a = a.beta;
        a = void 0 === a ? !1 : a;
        b = L(".", Ba(C(w(T, Ea), b.split("."))));
        if (!G(d, Dp) || !G(c, ["ru", "en", "tr"])) return "";
        c =
          (a
            ? "https://s3.mds.yandex.net/internal-metrika-betas"
            : "https://yastatic.net/s3/metrika") +
          (b ? "/" + b : "") +
          "/form-selector/" +
          (d + "_" + c + ".js");
        return Di(c) ? c : "";
      }
      function Ep(a, c) {
        var b = yb(a);
        if (b) {
          var d = b("div"),
            e = bc(a);
          if (e) {
            d.innerHTML =
              '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
            var f = d.firstChild;
            f.onload = function () {
              var h = b("meta");
              h.setAttribute("http-equiv", "Content-Security-Policy");
              h.setAttribute("content", "script-src *");
              f.contentWindow.document.head.appendChild(h);
              tc(f.contentWindow, { src: c });
            };
            a._ym__remoteIframeEl = f;
            e.appendChild(d);
            d.removeChild(f);
            var g = null;
            d.attachShadow
              ? (g = d.attachShadow({ mode: "open" }))
              : d.createShadowRoot
              ? (g = d.createShadowRoot())
              : d.webkitCreateShadowRoot && (g = d.webkitCreateShadowRoot());
            g
              ? g.appendChild(f)
              : (e.appendChild(f), (a._ym__remoteIframeContainer = f));
          }
        }
      }
      function Cp(a) {
        var c,
          b = Ei(a);
        a = H(a).C("getCounters", Ad)();
        a = C(Q("id"), a);
        return (c = { id: b }), (c.counterFound = !!b && G(b, a)), c;
      }
      function Bi(a, c, b) {
        var d;
        c = Fi(a, c, { bg: Fp, Wh: ((d = {}), (d.href = !0), d) });
        b = Ba(
          C(function (f) {
            return "*" === f ? f : Sb(f);
          }, b)
        );
        var e = C(w(T, Wa("concat", [""]), Gi("reverse"), na), b);
        b = Bd(a);
        d = Hi(a, b, 1e3);
        c = v(e, c);
        d.F(c);
        Gp(a, b);
        Ii(a, b);
        c();
      }
      function Fp(a, c, b) {
        var d = yb(a),
          e = b.qb,
          f = b.Rb,
          g = e.parentNode,
          h = e.textContent;
        if (!("text" === b.ee && h && d && g)) return !1;
        b = d("small");
        Ji(b);
        var k = Ki(h).length;
        x(
          Wa("appendChild", b),
          O(
            function (l, m) {
              var p = l.nodes,
                q = l.jg,
                r = d("small");
              r.innerHTML = m;
              var t = Hp.test(m);
              Ji(r);
              t && (r.style.opacity = "" + (k - q - 1) / k);
              p.push(r);
              return { nodes: p, jg: q + (t ? 1 : 0) };
            },
            { nodes: [], jg: 0 },
            h
          ).nodes
        );
        Ip(a, c, b, f);
        g.insertBefore(b, e);
        e.textContent = "";
        return !0;
      }
      function Ip(a, c, b, d) {
        function e() {
          x(function (l) {
            l.style && z(l.style, { opacity: "" });
          }, Ga(b.childNodes));
          if (c) {
            var k = ya(a, c);
            k && k.extLink("tel:" + d, {});
          }
          g();
          h();
        }
        var f = ja(a),
          g = F,
          h = F;
        g = f.F(b, ["mouseenter"], function (k) {
          if (k.target === b) {
            var l = R(a, e, 200, "ph.h.e");
            h();
            h = f.F(b, ["mouseleave"], function (m) {
              m.target === b && ma(a, l);
            });
          }
        });
      }
      function Ii(a, c) {
        Lb(a)(
          Pa(F, function () {
            var b,
              d = a.document.body,
              e =
                ((b = {}),
                (b.attributes = !0),
                (b.childList = !0),
                (b.subtree = !0),
                b);
            Na("MutationObserver", a.MutationObserver) &&
              new MutationObserver(c.T).observe(d, e);
          })
        );
      }
      function Gp(a, c) {
        return ja(a).F(a, ["load"], c.T);
      }
      function Fi(a, c, b) {
        function d(k) {
          return f(a, c, k) ? h[k.Rb] && h[k.Rb].Wc : null;
        }
        var e,
          f = b.bg;
        b = b.Wh;
        var g = void 0 === b ? ((e = {}), (e.href = !0), (e.text = !0), e) : b,
          h;
        return function (k) {
          return new J(function (l, m) {
            (k && k.length) || m();
            h = Li()(k);
            Lb(a)(
              Pa(v({ ha: [], za: 0 }, l), function () {
                var p = la(a),
                  q = p(Z),
                  r = g.href ? Jp(a, h) : [],
                  t = g.text ? Mi(a, h, a.document.body) : [];
                l({ ha: ia(P, Ba(C(d, r.concat(t)))), za: p(Z) - q });
              })
            );
          });
        };
      }
      function Jp(a, c) {
        var b = a.document.body;
        if (!b) return [];
        var d = Ni(c);
        return O(
          function (e, f) {
            var g = n(f, "href");
            try {
              var h = decodeURI(g || "");
            } catch (p) {
              h = "";
            }
            if ("tel:" === h.slice(0, 4)) {
              var k = (d.exec(h) || [])[0],
                l = k ? Sb(k) : "",
                m = c[l];
              X(m) ||
                (!l && "*" !== m.Wc[0]) ||
                (e.push({
                  ee: "href",
                  qb: f,
                  Rb: l,
                  $a: Oi(k, c[l].$a),
                  Ei: g,
                }),
                (g = Sb(h.slice(4))),
                (l = Li()([l ? m.Wc : [g, ""]])),
                sa(e, Mi(a, l, f)));
            }
            return e;
          },
          [],
          Ga(b.querySelectorAll("a"))
        );
      }
      function Mi(a, c, b) {
        if (!b) return [];
        var d = [],
          e = Ni(c),
          f = ["script", "style"];
        hd(
          a,
          b,
          function (g) {
            var h = n(g, "parentNode.nodeName") || "";
            g === b ||
              G(h.toLowerCase(), f) ||
              ((h = Ba(e.exec(g.textContent || "") || [])),
              x(function (k) {
                var l = Sb(k);
                X(c[l]) ||
                  d.push({
                    ee: "text",
                    qb: g,
                    Rb: l,
                    $a: Oi(k, c[l].$a),
                    Ei: g.textContent || "",
                  });
              }, h));
          },
          function (g) {
            return e.test(g.textContent || "") ? 1 : 0;
          },
          a.NodeFilter.SHOW_TEXT
        );
        return d;
      }
      function Li() {
        return Qf(function (a, c) {
          var b = C(Sb, c),
            d = b[0];
          b = b[1];
          a[d] = { $a: b, Wc: c };
          var e = Pi(d);
          e !== d && (a[e] = { $a: Pi(b), Wc: c });
          return a;
        }, {});
      }
      function Oi(a, c) {
        for (
          var b = [], d = a.split(""), e = c.split(""), f = 0, g = 0;
          g < a.length && !(f >= e.length);
          g += 1
        ) {
          var h = d[g];
          "0" <= h && "9" >= h ? (b.push(e[f]), (f += 1)) : b.push(d[g]);
        }
        return L("", b) + c.slice(f + 1);
      }
      function Pi(a) {
        var c = { 7: "8", 8: "7" };
        return 11 === a.length && c[a[0]] ? "" + c[a[0]] + a.slice(1) : a;
      }
      function Ni(a) {
        return new RegExp("(?:" + L("|", C(Qi, ca(a))) + ")");
      }
      function Ri(a, c, b, d) {
        if (c) {
          var e = [];
          c &&
            (a.document.documentElement.contains(c)
              ? hd(a, c, Wa("push", e), d)
              : sa(e, Si(a, c, d)));
          x(b, e);
        }
      }
      function hd(a, c, b, d, e, f) {
        function g(k) {
          return V(d)
            ? d(k)
              ? a.NodeFilter.FILTER_ACCEPT
              : a.NodeFilter.FILTER_REJECT
            : a.NodeFilter.FILTER_ACCEPT;
        }
        void 0 === e && (e = -1);
        void 0 === f && (f = !1);
        var h = g(c);
        if (
          V(b) &&
          (f || h === a.NodeFilter.FILTER_ACCEPT) &&
          (h && b(c), !Hf(c))
        )
          for (
            c = a.document.createTreeWalker(
              c,
              e,
              d ? { acceptNode: g } : null,
              !1
            );
            c.nextNode() && !1 !== b(c.currentNode);

          );
      }
      function Si(a, c, b) {
        var d = [],
          e = w(T, Wa("push", d));
        V(b)
          ? ((b = b(c)), (fa(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c))
          : e(c);
        if (c.childNodes && 0 < c.childNodes.length) {
          c = c.childNodes;
          b = 0;
          for (var f = c.length; b < f; b += 1) {
            var g = Si(a, c[b]);
            x(e, g);
          }
        }
        return d;
      }
      function Ti(a, c, b) {
        var d;
        a = [
          Ui(a, c, function (e) {
            d = e;
            e.oa.F(b);
          }),
          function () {
            d && d.unsubscribe();
          },
        ];
        return D([ze, a], x);
      }
      function Kp(a, c, b, d) {
        var e, f, g;
        if (b) {
          var h = n(d, "ecommerce") || {};
          var k = n(d, "event") || "";
          h = oa(h) && ha(k) ? Mf(k, h) : void 0;
          if (!h)
            a: {
              var l = d;
              !P(d) && gc(a, ab(d)) && (l = Oa(l));
              if (
                P(l) &&
                ((h = l[0]),
                (k = l[1]),
                (l = l[2]),
                ha(k) && oa(l) && "event" === h)
              ) {
                h = Mf(k, l);
                break a;
              }
              h = void 0;
            }
          if ((d = h || Lp(d)))
            sb(
              a,
              ((e = {}),
              (e.counterKey = c),
              (e.name = "ecommerce"),
              (e.data = d),
              e)
            ),
              b(((f = {}), (f.__ym = ((g = {}), (g.ecommerce = [d]), g)), f));
        }
      }
      function Lp(a) {
        var c = n(a, "ecommerce");
        if (oa(c))
          return (
            (a = ia(pc(Mp), ca(c))),
            (a = O(
              function (b, d) {
                b[d] = c[d];
                return b;
              },
              {},
              a
            )),
            0 === ca(a).length ? void 0 : a
          );
      }
      function Mf(a, c) {
        var b,
          d,
          e = ha(a) ? Np[a] : a;
        if (e) {
          var f = e.event,
            g = e.Ja,
            h = e.xh,
            k = void 0 === h ? "items" : h,
            l = c.purchase || c;
          if ((h = l[k])) {
            e = C(v(e.xa, Op), h);
            var m = ((b = {}), (b[f] = g ? ((d = {}), (d[g] = e), d) : e), b);
            b = ca(l);
            g &&
              1 < b.length &&
              (m[f].actionField = zb(
                function (p, q) {
                  if (q === k) return p;
                  if ("currency" === q) return (m.currencyCode = l.currency), p;
                  p[Pp[q] || Rf[q] || q] = l[q];
                  return p;
                },
                {},
                b
              ));
            return m;
          }
        }
      }
      function Op(a, c) {
        var b = {};
        x(function (d) {
          var e = a[d] || Rf[d] || d;
          -1 !== jb(d, "item_category")
            ? ((e = Rf.item_category),
              (b[e] = b[e] ? b[e] + ("/" + c[d]) : c[d]))
            : (b[e] = c[d]);
        }, ca(c));
        return b;
      }
      function Qp(a, c, b) {
        var d,
          e,
          f,
          g = n(b, "target");
        if (g && ((g = fe(a, g)), (g = ge(a, g)))) {
          g = "?" + Cc(g);
          var h = hc(a, c, "gbn", ((d = {}), (d.id = c.id), (d.query = g), d));
          b = n(b, "isTrusted");
          b = fa(b)
            ? void 0
            : ((e = {}), (e.__ym = ((f = {}), (f.ite = xb(b)), f)), e);
          Ae(a, c, "btn", h).reachGoal(g, b);
        }
      }
      function Rp(a, c, b, d) {
        var e = n(d, "target");
        e &&
          ((d = n(d, "isTrusted")),
          (e = ic("button,input", a, e)) &&
            "submit" === e.type &&
            (e = zi(a, e))) &&
          (b.push(e), R(a, D([!1, a, c, b, e, d], Vi), 300));
      }
      function Vi(a, c, b, d, e, f) {
        var g,
          h,
          k,
          l = Ob(c)(e, d),
          m = -1 !== l;
        if (a || m)
          m && d.splice(l, 1),
            (a = Ai(c, e)),
            (a = "?" + Cc(a)),
            (d = D(
              [c, b, "fg", ((g = {}), (g.id = b.id), (g.query = a), g)],
              Wi
            )),
            (f = fa(f)
              ? void 0
              : ((h = {}), (h.__ym = ((k = {}), (k.ite = xb(f)), k)), h)),
            Ae(c, b, "form", d).reachGoal(a, f);
      }
      function Wi(a, c, b, d) {
        return Sp(a, c).then(w(D([hc(a, c, b, d), F], td), na));
      }
      function Ai(a, c, b) {
        return Xi(a, c, ["i", "n", "p"], void 0, b);
      }
      function Tp(a, c) {
        var b;
        a(((b = {}), (b.clickmap = X(c) ? !0 : c), b));
      }
      function Up(a, c, b, d, e) {
        var f,
          g = "clmap/" + e.id;
        c = ((f = {}), (f["page-url"] = c), (f["pointer-click"] = b), f);
        f = { K: Ha(), J: c, ja: { Aa: g } };
        d(f, e)["catch"](A(a, "c.s.c"));
      }
      function Vp(a, c, b, d, e) {
        if (vb(a, "ymDisabledClickmap") || !c || !c.element) return !1;
        a = Ja(c.element);
        if (
          (e && !e(c.element, a)) ||
          (G(c.button, [2, 3]) && "A" !== a) ||
          Za(za(a), d)
        )
          return !1;
        d = c.element;
        if (c && b) {
          if (50 > c.time - b.time) return !1;
          e = Math.abs(b.position.x - c.position.x);
          a = Math.abs(b.position.y - c.position.y);
          c = c.time - b.time;
          if (b.element === d && 2 > e && 2 > a && 1e3 > c) return !1;
        }
        for (; d; ) {
          if (Wp(d)) return !1;
          d = d.parentElement;
        }
        return !0;
      }
      function Xp(a, c) {
        var b = null;
        try {
          if ((b = c.target || c.srcElement))
            !b.ownerDocument && b.documentElement
              ? (b = b.documentElement)
              : b.ownerDocument !== a.document && (b = null);
        } catch (d) {}
        return b;
      }
      function Yp(a) {
        var c = a.which;
        a = a.button;
        return c || void 0 === a
          ? c
          : 1 === a || 3 === a
          ? 1
          : 2 === a
          ? 3
          : 4 === a
          ? 2
          : 0;
      }
      function Yi(a, c) {
        var b = bc(a),
          d = Sf(a);
        return {
          x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
          y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0,
        };
      }
      function Be(a, c) {
        return {
          N: function (b, d) {
            var e,
              f = b.K,
              g = b.Ha,
              h = b.J,
              k = b.$;
            k = void 0 === k ? {} : k;
            if (f && h) {
              var l = la(a);
              f.Vb("rqnl", 1);
              for (var m = Cd(a), p = 1; m[p]; ) p += 1;
              b.M || (b.M = {});
              b.M.Sb = p;
              m[p] =
                ((e = {}),
                (e.protocol = Ca.Qa),
                (e.host = ec),
                (e.resource = b.ja.Aa),
                (e.postParams = k.ba),
                (e.time = l(Z)),
                (e.counterType = c.aa),
                (e.params = h),
                (e.browserInfo = f.l()),
                (e.counterId = c.id),
                (e.ghid = zc(a)),
                e);
              g && (m[p].telemetry = g.l());
              Tf(a);
            }
            d();
          },
          qa: function (b, d) {
            Zi(a, b);
            d();
          },
        };
      }
      function Zi(a, c) {
        var b = Cd(a);
        c.K && !bb(b) && c.M && (delete b[c.M.Sb], Tf(a));
      }
      function Tf(a) {
        var c = Cd(a);
        Sa(a).D("retryReqs", c);
      }
      function Zp(a, c) {
        if (a.Ki()) {
          var b = $i(c);
          if (b && !dc("ym-disable-tracklink", b)) {
            var d = a.l,
              e = a.Lg,
              f = a.ab,
              g = a.sender,
              h = a.Wg,
              k = f.vc,
              l = b.href;
            var m = $a(b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, ""));
            m ||
              (m = (m = b.querySelector("img"))
                ? $a(m.getAttribute("title") || m.getAttribute("alt"))
                : "");
            m = l === m ? "" : m;
            var p = n(c, "isTrusted");
            if (dc("ym-external-link", b))
              Ce(d, f, { url: l, lb: !0, title: m, Ec: p, sender: g });
            else {
              k = k ? Oc(d, k).hostname : U(d).hostname;
              h = RegExp("\\.(" + L("|", C($p, h)) + ")$", "i");
              var q = b.protocol + "//" + b.hostname + b.pathname;
              h = aj.test(q) || aj.test(l) || h.test(l) || h.test(q);
              b = b.hostname;
              De(k) === De(b)
                ? h
                  ? Ce(d, f, { url: l, Cc: !0, Ec: p, title: m, sender: g })
                  : m && e.D("il", $a(m).slice(0, 100))
                : (l && aq.test(l)) ||
                  Ce(d, f, {
                    url: l,
                    Gc: !0,
                    lb: !0,
                    Cc: h,
                    Ec: p,
                    title: m,
                    sender: g,
                  });
            }
          }
        }
      }
      function Ce(a, c, b) {
        var d,
          e,
          f,
          g,
          h = Ha();
        void 0 !== b.Ec && h.D("ite", xb(b.Ec));
        b.Cc && h.D("dl", 1);
        b.lb && h.D("ln", 1);
        var k = b.ig || {};
        h = {
          K: h,
          M: { title: k.title || b.title, Gc: !!b.Gc, R: k.params },
          J:
            ((d = {}),
            (d["page-url"] = b.url),
            (d["page-ref"] = c.vc || U(a).href),
            d),
        };
        d = "Link";
        b.Cc
          ? (d = b.lb ? "Ext link - File" : "File")
          : b.lb && (d = "Ext link");
        sb(
          a,
          ((e = {}),
          (e.counterKey = M(c)),
          (e.name = "event"),
          (e.data =
            ((f = {}),
            (f.schema = "Link click"),
            (f.name = (b.lb ? "external" : "internal") + " url: " + b.url),
            f)),
          e)
        );
        c = b
          .sender(h, c)
          .then(
            hc(
              a,
              c,
              "lcl",
              ((g = {}), (g.prefix = d), (g.id = c.id), (g.url = b.url), g),
              b.ig
            )
          );
        return Rc(a, "cl.p.s", c, k.callback || F, k.ctx);
      }
      function bq(a, c) {
        var b,
          d,
          e =
            ((b = {}), (b.string = !0), (b.object = !0), (b["boolean"] = c), b)[
              typeof c
            ] || !1;
        a(((d = {}), (d.trackLinks = e), d));
      }
      function cq(a, c, b, d) {
        var e = U(a),
          f = e.hostname;
        e = e.href;
        if ((c = Dd(c).url)) (a = Oc(a, c)), (f = a.hostname), (e = a.href);
        return [d + "://" + f + "/" + b, e || ""];
      }
      function bj(a) {
        return (a.split(":")[1] || "")
          .replace(/^\/*/, "")
          .replace(/^www\./, "")
          .split("/")[0];
      }
      function dq(a, c, b, d) {
        var e;
        if ((a = ya(a, b))) {
          var f = d.data;
          b = "" + b.id;
          var g = d.sended || [];
          d.sended || (d.sended = g);
          G(b, g) ||
            !a.params ||
            (d.counter && "" + d.counter !== b) ||
            (a.params(f),
            g.push(b),
            d.parent && c.Qf(((e = {}), (e.type = "params"), (e.data = f), e)));
        }
      }
      function rh(a, c, b) {
        void 0 === b && (b = T);
        var d = md(a);
        b(d);
        var e = v(d, eq);
        Ed(a, c, function (f) {
          f.oa.F(e);
        });
        return d;
      }
      function eq(a, c) {
        var b = n(c, "ymetrikaEvent");
        b && a.T(n(b, "type"), b);
      }
      function Ed(a, c, b, d) {
        void 0 === b && (b = F);
        void 0 === d && (d = !1);
        var e = Bd(a);
        if (c && V(c.push)) {
          var f = c.push;
          c.push = function () {
            var g = Oa(arguments),
              h = g[0];
            d && e.T(h);
            g = f.apply(c, g);
            d || e.T(h);
            return g;
          };
          a = {
            oa: e,
            unsubscribe: function () {
              c.push = f;
            },
          };
          b(a);
          x(e.T, c);
          return a;
        }
      }
      function ie(a) {
        a = H(a);
        var c = a.C("dataLayer", []);
        a.D("dataLayer", c);
        return c;
      }
      function Om(a, c) {
        var b, d;
        G(c, C(Q("ymetrikaEvent.type"), a)) ||
          a.push(
            ((b = {}), (b.ymetrikaEvent = ((d = {}), (d.type = c), d)), b)
          );
      }
      function cj(a, c) {
        var b = jd(a, c),
          d = [],
          e = [];
        if (!b) return null;
        var f = D([a, b.ke], fq),
          g = v(f, gq);
        b.Y.F(["initToParent"], function (h) {
          g(d, b.children[h[1].counterId]);
        }).F(["parentConnect"], function (h) {
          g(e, b.Ea[h[1].counterId]);
        });
        return {
          Y: b.Y,
          tj: function (h, k) {
            return new J(function (l, m) {
              b.ke(h, k, function (p, q) {
                l([p, q]);
              });
              R(a, v(Qa(), m), 5100, "is.o");
            });
          },
          Pf: function (h) {
            var k = { Sf: [], xe: [], data: h };
            d.push(k);
            return f(b.children, k, h);
          },
          Qf: function (h) {
            var k = { Sf: [], xe: [], data: h };
            e.push(k);
            return f(b.Ea, k, h);
          },
        };
      }
      function gq(a, c, b) {
        c = ia(function (d) {
          return !G(b.info.counterId, d.xe);
        }, c);
        x(function (d) {
          var e;
          b.info.counterId &&
            a(((e = {}), (e[b.info.counterId] = b), e), d, d.data);
        }, c);
      }
      function fq(a, c, b, d, e) {
        return new J(function (f, g) {
          var h = ca(b),
            k = w(d.resolve || T, Nc(f)),
            l = w(d.reject || T, Nc(g));
          d.resolve = k;
          d.reject = l;
          x(function (m) {
            var p;
            d.xe.push(+m);
            var q = b[m],
              r = R(a, v(Qa(), l), 5100, "is.m");
            c(
              q.window,
              z(e, ((p = {}), (p.toCounter = Ea(m)), p)),
              function (t, y) {
                ma(a, r);
                d.Sf.push(m);
                d.resolve && d.resolve(y);
              }
            );
          }, h);
        })["catch"](A(a, "if.b"));
      }
      function hq(a) {
        var c = F,
          b = null,
          d = a.length;
        if (0 !== a.length && a[0]) {
          var e = a.slice(-1)[0];
          V(e) && ((c = e), (d = a.length + -1));
          var f = a.slice(-2)[0];
          V(f) && ((c = f), (b = e), (d = a.length + -2));
          d = a.slice(0, d);
          return { Mg: b, bc: c, R: 1 === d.length ? a[0] : ld(d) };
        }
      }
      function Rc(a, c, b, d, e) {
        var f = D([a, d, e], Uf);
        return b.then(f, function (g) {
          f();
          vd(a, c, g);
        });
      }
      function Vf(a, c) {
        return {
          N: function (b, d) {
            var e,
              f,
              g = (b.M || {}).R,
              h = b.$;
            h = void 0 === h ? {} : h;
            if (g && (dj(c, g), !h.ba && b.K && b.J)) {
              var k = wb(a, g),
                l = ej(a),
                m = b.K.C("pv");
              k &&
                !b.J.nohit &&
                (sb(
                  a,
                  ((e = {}),
                  (e.counterKey = M(c)),
                  (e.name = "params"),
                  (e.data = ((f = {}), (f.val = g), f)),
                  e)
                ),
                m
                  ? encodeURIComponent(k).length > Ca.og
                    ? l.push([b.K, g])
                    : (b.J["site-info"] = k)
                  : ((h.ba = k),
                    (b.$ = h),
                    b.Nc || (b.Nc = {}),
                    (b.Nc.Xh = !0)));
            }
            d();
          },
          qa: function (b, d) {
            var e = ej(a),
              f = ya(a, c),
              g = f && f.params;
            g &&
              ((f = ia(w(Sc, za(b.K)), e)),
              x(function (h) {
                g(h[1]);
                h = Ee(a)(h, e);
                e.splice(h, 1);
              }, f));
            d();
          },
        };
      }
      function Fe(a, c) {
        return function (b) {
          Wf(a, c, b);
        };
      }
      function iq(a, c) {
        Xf(a)(function (b) {
          delete b[c];
        });
      }
      function Wf(a, c, b) {
        Xf(a)(function (d) {
          d[c] = z(d[c] || {}, b);
        });
      }
      function Xf(a) {
        a = H(a);
        var c = a.C("dsjf") || Da({});
        a.Ga("dsjf", c);
        return c;
      }
      function jq(a, c) {
        return function (b) {
          var d,
            e,
            f = ya(a, c);
          if (f) {
            var g = jc(a, M(c));
            oa(b)
              ? ab(ca(b))
                ? (b = fj(a, b)) &&
                  ab(b) &&
                  f.params(
                    ((d = {}), (d.__ym = ((e = {}), (e.fpmh = b), e)), d)
                  )
                : g.log("fpeo")
              : g.log("fpno");
          }
        };
      }
      function fj(a, c) {
        return O(
          function (b, d) {
            var e = d[0],
              f = d[1],
              g = f;
            f = oa(f);
            if (!f && (gc(a, g) && (g = "" + g), !ha(g))) return b;
            g = f ? fj(a, g) : g;
            ab(g) && b.push([e, g]);
            return b;
          },
          [],
          Ma(c)
        );
      }
      function gj(a, c, b) {
        void 0 === b && (b = 0);
        c = Ma(c);
        c = O(
          function (d, e) {
            var f = e[0],
              g = e[1],
              h = oa(g);
            if (!h && (gc(a, g) && (g = "" + g), !ha(g))) return d;
            h
              ? (g = gj(a, g, b + 1))
              : b || "yandex_cid" !== f
              ? ("phone_number" === f
                  ? (g = Ah(a, g))
                  : "email" === f && (g = zh(g)),
                (g = hj(a, g)))
              : (g = J.resolve(g));
            d.push(
              g.then(function (k) {
                return [f, k];
              })
            );
            return d;
          },
          [],
          c
        );
        return J.all(c);
      }
      function zh(a) {
        var c = $a(a).replace(/^\++/gm, "").toLowerCase(),
          b = c.lastIndexOf("@");
        if (-1 === b) return c;
        a = c.substr(0, b);
        b = c.substr(b + 1);
        if (!b || !kq(a)) return c;
        b = b.replace("googlemail.com", "gmail.com");
        ij(b) && (b = "yandex.ru");
        "yandex.ru" === b
          ? (a = a.replace(Yf, "-"))
          : "gmail.com" === b && (a = a.replace(Yf, ""));
        c = jb(a, "+");
        -1 !== c && (a = a.slice(0, c));
        return a + "@" + b;
      }
      function kq(a) {
        return 1 > a.length || 64 < a.length
          ? !1
          : wi(function (c) {
              if (1 > c.length) c = !1;
              else if ('"' === c[0] && '"' === c[c.length - 1] && 2 < c.length)
                a: {
                  for (var b = 1; b + 2 < c.length; b += 1) {
                    var d = c.charCodeAt(b);
                    if (32 > d || 34 === d || 126 < d) {
                      c = !1;
                      break a;
                    }
                    if (92 === d) {
                      if (b + 2 === c.length || 32 > c.charCodeAt(b + 1)) {
                        c = !1;
                        break a;
                      }
                      b += 1;
                    }
                  }
                  c = !0;
                }
              else c = lq.test(c) ? !0 : !1;
              return c;
            }, a.split("."));
      }
      function Ah(a, c) {
        var b = $a(c),
          d = Sb(c);
        return 10 > d.length || 13 < d.length || b.startsWith("+8")
          ? b
          : "8" === b[0]
          ? "7" + d.slice(1)
          : "+" === b[0] || gc(a, +b[0])
          ? d
          : "7" + d;
      }
      function hj(a, c) {
        return new J(function (b, d) {
          var e = new a.TextEncoder().encode(c);
          a.crypto.subtle.digest("SHA-256", e).then(function (f) {
            f = new a.Blob([f], { type: "application/octet-binary" });
            var g = new a.FileReader();
            g.onload = function (h) {
              h = n(h, "target.result") || "";
              var k = jb(h, ",");
              -1 !== k ? b(h.substring(k + 1)) : d(Ta("fpm.i"));
            };
            g.readAsDataURL(f);
          }, d);
        });
      }
      function ya(a, c) {
        var b = H(a).C("counters", {}),
          d = M(c);
        return b[d];
      }
      function hc(a, c, b, d, e) {
        return D([a, M(c), e ? [b + ".p", e] : b, d], Jb);
      }
      function Jb(a, c, b, d) {
        jc(a, c).log(b, d);
      }
      function mq(a, c) {
        function b(d, e, f) {
          var g, h;
          sb(
            a,
            ((g = {}),
            (g.name = "log"),
            (g.counterKey = c),
            (g.data =
              ((h = {}),
              (h.args = P(e) ? e : [e]),
              (h.type = d),
              (h.variables = f),
              h)),
            g)
          );
        }
        return { log: v("log", b), error: v("error", b), warn: v("warn", b) };
      }
      function pa(a, c) {
        var b = M(a);
        return jj()(nq(b)).then(c);
      }
      function oq(a, c, b) {
        var d, e;
        c = M(c);
        var f = Zf(a);
        b = z({ Yg: f(Z) }, b);
        sb(
          a,
          ((d = {}),
          (d.counterKey = c),
          (d.name = "counterSettings"),
          (d.data = ((e = {}), (e.settings = b), e)),
          d)
        );
        return jj()(pq(c, b));
      }
      function pq(a, c) {
        return function (b) {
          var d = b[a];
          d
            ? ((d.oi = c),
              (d.Cf = !0),
              d.Bf ? d.Bf(c) : (d.promise = J.resolve(c)))
            : (b[a] = { promise: J.resolve(c), oi: c, Cf: !0 });
        };
      }
      function $f(a) {
        return !ue(a) && ag(a);
      }
      function Fd(a) {
        return yb(a) ? v(a, qq) : !1;
      }
      function Bb(a) {
        if (a.fetch) {
          var c = n(a, "AbortController");
          return D([a, c ? new c() : void 0], rq);
        }
        return !1;
      }
      function ag(a) {
        var c = n(a, "navigator.sendBeacon");
        return c && Na("sendBeacon", c)
          ? D([a, I(c, n(a, "navigator"))], sq)
          : !1;
      }
      function sq(a, c, b, d) {
        return new J(function (e, f) {
          var g;
          if (!n(a, "navigator.onLine")) return f();
          var h = z(d.Xa, ((g = {}), (g["force-urlencoded"] = 1), g));
          g = b + "?" + Cc(h) + (d.ba ? "&" + d.ba : "");
          return 2e3 < g.length ? f(Qa("sb.tlq")) : c(g) ? e("") : f();
        });
      }
      function qq(a, c, b) {
        return new J(function (d, e) {
          var f,
            g,
            h = "_ymjsp" + Ua(a),
            k = z(((f = {}), (f.callback = h), f), b.Xa),
            l = D([a, h], tq);
          a[h] = function (p) {
            try {
              l(), rc(m), d(p);
            } catch (q) {
              e(q);
            }
          };
          k.wmode = "5";
          var m = tc(a, ((g = {}), (g.src = kj(c, b, k)), g));
          if (!m) return l(), e(Ta("jp.s"));
          f = v(m, rc);
          f = w(f, v(Qa(b.fa), e));
          g = Gd(a, f, b.Oa || 1e4);
          g = D([a, g], ma);
          m.onload = g;
          m.onerror = w(l, g, f);
        });
      }
      function tq(a, c) {
        try {
          delete a[c];
        } catch (b) {
          a[c] = void 0;
        }
      }
      function Tc(a) {
        var c = yb(a);
        return c ? D([a, c], uq) : !1;
      }
      function uq(a, c, b, d) {
        return new J(function (e, f) {
          var g = bc(a),
            h = c("img"),
            k = w(v(h, rc), v(Qa(d.fa), f)),
            l = Gd(a, k, d.Oa || 3e3);
          h.onerror = k;
          h.onload = w(v(h, rc), v(null, e), D([a, l], ma));
          k = z({}, d.Xa);
          delete k.wmode;
          h.src = kj(b, d, k);
          Ge(a) &&
            (z(h.style, {
              position: "absolute",
              visibility: "hidden",
              width: "0px",
              height: "0px",
            }),
            g.appendChild(h));
        });
      }
      function rq(a, c, b, d) {
        var e,
          f = z(d.yb ? ((e = {}), (e.wmode = "7"), e) : {}, d.Xa),
          g = c || { signal: void 0, abort: F },
          h = a.fetch(b + "?" + Cc(f), {
            method: d.Yc,
            body: d.ba,
            credentials: !1 === d.Ee ? "omit" : "include",
            headers: d.Wa,
            signal: g.signal,
          }),
          k = v(d.fa, Qa);
        return new J(function (l, m) {
          d.Oa &&
            Gd(
              a,
              function () {
                try {
                  g.abort();
                } catch (p) {}
                m(k());
              },
              d.Oa
            );
          return h
            .then(function (p) {
              if (!p.ok) {
                if (d.fe) return Ya(lj(p));
                ae(d.fa);
              }
              return d.fe ? p.text() : d.yb ? p.json() : null;
            })
            .then(l)
            ["catch"](v(k(), m));
        });
      }
      function Cb(a) {
        var c;
        if ((c = n(a, "XMLHttpRequest")))
          if ((c = "withCredentials" in new a.XMLHttpRequest())) {
            a: {
              if (
                vq.test(a.location.host) &&
                a.opera &&
                V(a.opera.version) &&
                ((c = a.opera.version()),
                "string" === typeof c && "12" === c.split(".")[0])
              ) {
                c = !0;
                break a;
              }
              c = !1;
            }
            c = !c;
          }
        return c ? v(a, wq) : !1;
      }
      function wq(a, c, b) {
        var d,
          e = new a.XMLHttpRequest(),
          f = b.ba,
          g = z(b.yb ? ((d = {}), (d.wmode = "7"), d) : {}, b.Xa);
        return new J(function (h, k) {
          e.open(b.Yc || "GET", c + "?" + Cc(g), !0);
          e.withCredentials = !1 !== b.Ee;
          b.Oa && (e.timeout = b.Oa);
          xq(
            Ma,
            Uc(function (m) {
              e.setRequestHeader(m[0], m[1]);
            })
          )(b.Wa);
          var l = D([a, e, Qa(b.fa), b.yb, b.fe, h, k], yq);
          e.onreadystatechange = l;
          try {
            e.send(f);
          } catch (m) {}
        });
      }
      function yq(a, c, b, d, e, f, g, h) {
        if (4 === c.readyState)
          if ((200 === c.status || e || g(b), e))
            200 === c.status ? f(c.responseText) : g(lj(c));
          else {
            e = null;
            if (d)
              try {
                (e = ob(a, c.responseText)) || g(b);
              } catch (k) {
                g(b);
              }
            f(e);
          }
        return h;
      }
      function kj(a, c, b) {
        (b = Cc(b)) && (a += "?" + b);
        c.ba && (a += (b ? "&" : "?") + c.ba);
        return a;
      }
      function zq(a, c, b) {
        var d = C(Sc, Ub[c] || Vb);
        x(function (e) {
          return d.unshift(e);
        }, He);
        return C(w(Kc([a, b]), na), d);
      }
      function mj(a) {
        return {
          N: function (c, b) {
            var d = c.J;
            if (!c.K || !d) return b();
            var e = d["page-ref"],
              f = d["page-url"];
            e && f !== e ? (d["page-ref"] = nj(a, e)) : delete d["page-ref"];
            d["page-url"] = nj(a, f).slice(0, Ca.qg);
            return b();
          },
        };
      }
      function nj(a, c) {
        var b = U(a),
          d = b.href,
          e = b.host,
          f = -1;
        if (!ha(c) || X(c)) return d;
        b = c.replace(oj, "");
        if (-1 !== b.search(Aq)) return b;
        var g = b.charAt(0);
        if (
          ("?" === g && ((f = d.search(/\?/)), -1 === f)) ||
          ("#" === g && ((f = d.search(/#/)), -1 === f))
        )
          return d + b;
        if (-1 !== f) return d.substr(0, f) + b;
        if ("/" === g) {
          if (((f = jb(d, e)), -1 !== f)) return d.substr(0, f + e.length) + b;
        } else return (d = d.split("/")), (d[d.length - 1] = b), L("/", d);
        return "";
      }
      function Ie(a, c) {
        return {
          N: function (b, d) {
            var e = pj(c);
            e = D([b, e, d], Bq);
            Cq(a, c, e);
          },
          qa: function (b, d) {
            var e = b.K,
              f = pj(c);
            if (e) {
              var g = f.ta;
              f.Se === e && g && (x(na, g), (f.ta = null));
            }
            d();
          },
        };
      }
      function Bq(a, c, b) {
        var d = a.K;
        d ? (Nf(a) ? ((c.Se = d), b()) : c.ta ? c.ta.push(b) : b()) : b();
      }
      function Nf(a) {
        return (a = a.K) && a.C("pv") && !a.C("ar");
      }
      function Cq(a, c, b) {
        if (Je(a) && qb(a)) {
          var d = Dq(c);
          if (!d.Mh) {
            d.Mh = !0;
            c = jd(a, c);
            if (!c) {
              b();
              return;
            }
            d.ta = [];
            var e = function () {
              d.ta && (x(na, d.ta), (d.ta = null));
            };
            R(a, e, 3e3);
            c.Y.F(["initToChild"], e);
          }
          d.ta ? d.ta.push(b) : b();
        } else b();
      }
      function qj(a, c) {
        return {
          N: function (b, d) {
            var e = b.K;
            if (e && (!c || c.Of)) {
              var f = a.document.title;
              b.M && b.M.title && (f = b.M.title);
              var g = Dc("getElementsByTagName", a.document);
              "string" !== typeof f &&
                g &&
                ((f = g("title")), (f = (f = n(f, "0.innerHtml")) ? f : ""));
              f = f.slice(0, Ca.pg);
              e.D("t", f);
            }
            d();
          },
        };
      }
      function Pb(a) {
        return function (c, b) {
          return {
            N: function (d, e) {
              var f = d.K,
                g = d.J;
              f &&
                g &&
                x(function (h) {
                  var k = Hd[h],
                    l = "bi",
                    m = f;
                  k || ((k = Ke[h]), (l = "tel"), (m = kf(d)));
                  k && ((k = B(l + ":" + h, k, null)(c, b, d)), m.Vb(h, k));
                }, a || Eq());
              e();
            },
          };
        };
      }
      function Fq(a, c) {
        var b = Id(a);
        c.F(["initToParent"], function (d) {
          var e = d[0];
          d = d[1];
          window.window &&
            (b.children[d.counterId] = { info: d, window: e.source });
        })
          .F(["initToChild"], function (d) {
            var e = d[0];
            d = d[1];
            e.source === a.parent && c.T("parentConnect", [e, d]);
          })
          .F(["parentConnect"], function (d) {
            var e = d[1];
            e.counterId &&
              (b.Ea[e.counterId] = { info: e, window: d[0].source });
          });
      }
      function Gq(a) {
        if (Na("MutationObserver", a.MutationObserver)) {
          var c = Id(a).children,
            b = new a.MutationObserver(function () {
              x(function (d) {
                n(c[d], "window.window") || delete c[d];
              }, ca(c));
            });
          Lb(a)(
            Pa(F, function () {
              b.observe(a.document.body, { subtree: !0, childList: !0 });
            })
          );
        }
      }
      function Hq(a, c) {
        return function (b, d) {
          var e,
            f = { oc: la(a)(Z), key: a.Math.random(), dir: 0 };
          b.length &&
            ((f.oc = Ea(b[0])), (f.key = parseFloat(b[1])), (f.dir = Ea(b[2])));
          z(d, c);
          var g =
            ((e = { data: d }),
            (e.__yminfo = L(":", ["__yminfo", f.oc, f.key, f.dir])),
            e);
          return { meta: f, Wf: wb(a, g) || "" };
        };
      }
      function Lb(a, c) {
        function b(e) {
          n(c, d) ? e() : R(a, v(e, b), 100);
        }
        void 0 === c && (c = a);
        var d = (c.nodeType ? "contentWindow." : "") + "document.body";
        return Da(function (e, f) {
          b(f);
        });
      }
      function Jd(a, c) {
        var b = c.Pd,
          d = b || "uid";
        b = b ? a.location.hostname : void 0;
        var e = wc(a),
          f = Sa(a),
          g = la(a)(bg),
          h = rj(a, c),
          k = h[0];
        h = h[1];
        var l = e.C("d");
        sj(a, c);
        var m = !1;
        !h && k && ((h = k), (m = !0));
        if (!h) (h = L("", [g, Ua(a, 1e6, 999999999)])), (m = !0);
        else if (!l || 15768e3 < g - Ea(l)) m = !0;
        m && !c.Sa && (e.D(d, h, 525600, b), e.D("d", "" + g, 525600, b));
        f.D(d, h);
        return h;
      }
      function Iq(a, c) {
        return !c.Sa && sj(a, c);
      }
      function rj(a, c) {
        var b = Sa(a),
          d = wc(a),
          e = c.Pd || "uid";
        return [b.C(e), d.C(e)];
      }
      function zc(a) {
        var c = H(a),
          b = c.C("hitId");
        b || ((b = Ua(a)), c.D("hitId", b));
        return b;
      }
      function ge(a, c, b) {
        var d = Ja(c);
        return d && Xi(a, c, Ba(["p", Jq[d], "c"]), Pf, b);
      }
      function fe(a, c) {
        var b = ic(cg, a, c);
        if (!b) {
          var d = ic("div", a, c);
          d && (kb(cg + ",div", d).length || (b = d));
        }
        return b;
      }
      function Xi(a, c, b, d, e) {
        return O(
          function (f, g) {
            var h = null;
            g in tj
              ? (h = c.getAttribute && c.getAttribute(tj[g]))
              : g in Vc &&
                (h =
                  "p" === g
                    ? Vc[g](a, c, e)
                    : "c" === g
                    ? Vc[g](a, c, d)
                    : Vc[g](a, c));
            h &&
              ((h = h.slice(0, uj[g] || 100)), (f[g] = dg[g] ? "" + sc(h) : h));
            return f;
          },
          {},
          b
        );
      }
      function Uh(a, c, b) {
        if (gd(a)) return Ga(b.querySelectorAll(c));
        var d = vj(c.split(" "), b);
        return ia(function (e, f) {
          return Ob(a)(e, d) === f;
        }, d);
      }
      function vj(a, c) {
        var b = sa([], a),
          d = b.shift();
        if (!d) return [];
        d = c.getElementsByTagName(d);
        return b.length ? Kd(v(b, vj), Ga(d)) : Ga(d);
      }
      function oc(a, c) {
        if (c.querySelector) return c.querySelector(a);
        var b = kb(a, c);
        return b && b.length ? b[0] : null;
      }
      function kb(a, c) {
        if (!c || !c.querySelectorAll) return [];
        var b = c.querySelectorAll(a);
        return b ? Ga(b) : [];
      }
      function $i(a) {
        var c = null;
        try {
          c = a.target || a.srcElement;
        } catch (b) {}
        if (c) {
          3 === c.nodeType && (c = c.parentNode);
          for (
            a = c && c.nodeName && ("" + c.nodeName).toLowerCase();
            n(c, "parentNode.nodeName") &&
            (("a" !== a && "area" !== a) ||
              (!c.href && !c.getAttribute("xlink:href")));

          )
            a =
              (c = c.parentNode) &&
              c.nodeName &&
              ("" + c.nodeName).toLowerCase();
          return c.href ? c : null;
        }
        return null;
      }
      function tc(a, c) {
        var b = yb(a);
        if (b) {
          var d = a.document,
            e = b("script");
          e.src = c.src;
          e.type = c.type || "text/javascript";
          e.charset = c.charset || "utf-8";
          e.async = c.async || !0;
          try {
            var f = d.getElementsByTagName("head")[0];
            if (!f) {
              var g = d.getElementsByTagName("html")[0];
              f = b("head");
              g && g.appendChild(f);
            }
            f.insertBefore(e, f.firstChild);
            return e;
          } catch (h) {}
        }
      }
      function Ph(a, c) {
        var b = wj(a);
        G(c, b.pb) &&
          ((b.pb = ia(w(za(c), Ec), b.pb)),
          b.pb.length || (rc(b.gb), (b.gb = null)));
      }
      function Oh(a, c, b) {
        var d = wj(c);
        G(b, d.pb) || d.pb.push(b);
        if (bb(d.gb)) {
          b = yb(a);
          if (!b) return null;
          b = b("iframe");
          z(b.style, {
            display: "none",
            width: "1px",
            height: "1px",
            visibility: "hidden",
          });
          b.src = c;
          a = bc(a);
          if (!a) return null;
          a.appendChild(b);
          d.gb = b;
        } else
          (a = n(d.gb, "contentWindow")) && a.postMessage("frameReinit", "*");
        return d.gb;
      }
      function Kq(a, c) {
        var b = P(a) ? a : [a];
        c = c || document;
        if (c.querySelectorAll) {
          var d = L(
            ", ",
            C(function (e) {
              return "." + e;
            }, b)
          );
          return Ga(c.querySelectorAll(d));
        }
        if (c.getElementsByClassName)
          return Kd(w(Wa("getElementsByClassName", c), Ga), b);
        d = c.getElementsByTagName("*");
        b = "(" + L("|", b) + ")";
        return ia(v(b, dc), Ga(d));
      }
      function nf(a, c, b) {
        for (
          var d = "", e = ye(), f = Ja(c) || "*";
          c && c.parentNode && !G(f, ["BODY", "HTML"]);

        )
          (d += e[f] || "*"),
            (d += xj(a, c, b) || ""),
            (c = c.parentElement),
            (f = Ja(c) || "*");
        return $a(d, 128);
      }
      function xj(a, c, b) {
        if ((a = Le(a, c))) {
          a = a.childNodes;
          for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)
            if (d === (a[f] && a[f].nodeName)) {
              if (c === a[f]) return e;
              (b && a[f] === b) || (e += 1);
            }
        }
        return 0;
      }
      function Le(a, c) {
        var b = n(a, "document");
        return c && c !== b.documentElement
          ? c === Fc(a)
            ? b.documentElement
            : n(c, "parentNode")
          : null;
      }
      function Ef(a, c) {
        var b = eg(a, c),
          d = b.left;
        b = b.top;
        var e = Me(a, c);
        return [d, b, e[0], e[1]];
      }
      function Me(a, c) {
        var b = n(a, "document");
        if (c === Fc(a) || c === b.documentElement) {
          b = bc(a);
          var d = Ld(a);
          return [
            Math.max(b.scrollWidth, d[0]),
            Math.max(b.scrollHeight, d[1]),
          ];
        }
        return (b = nd(c))
          ? [b.width, b.height]
          : [c.offsetWidth, c.offsetHeight];
      }
      function eg(a, c) {
        var b = c,
          d = n(a, "document"),
          e = Ja(b);
        if (
          !b ||
          !b.ownerDocument ||
          "PARAM" === e ||
          b === Fc(a) ||
          b === d.documentElement
        )
          return { left: 0, top: 0 };
        if ((d = nd(b)))
          return (
            (b = Sf(a)),
            { left: Math.round(d.left + b.x), top: Math.round(d.top + b.y) }
          );
        for (e = d = 0; b; )
          (d += b.offsetLeft), (e += b.offsetTop), (b = b.offsetParent);
        return { left: d, top: e };
      }
      function ic(a, c, b) {
        if (!(c && c.Element && c.Element.prototype && c.document && b))
          return null;
        if (
          c.Element.prototype.closest &&
          Na("closest", c.Element.prototype.closest) &&
          b.closest
        )
          return b.closest(a);
        var d = ai(c);
        if (d) {
          for (; b && 1 === b.nodeType && !d.call(b, a); )
            b = b.parentElement || b.parentNode;
          return b && 1 === b.nodeType ? b : null;
        }
        if (gd(c)) {
          for (
            a = Ga((c.document || c.ownerDocument).querySelectorAll(a));
            b && 1 === b.nodeType && -1 === Ob(c)(b, a);

          )
            b = b.parentElement || b.parentNode;
          return b && 1 === b.nodeType ? b : null;
        }
        return null;
      }
      function gd(a) {
        return !(
          !Na("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) ||
          !a.document.querySelectorAll
        );
      }
      function yj(a) {
        return Ne(a) && !Za(za(a.type), Lq)
          ? Oe(a)
            ? !a.checked
            : !a.value
          : Mq(a)
          ? !a.value
          : Nq(a)
          ? 0 > a.selectedIndex
          : !0;
      }
      function Ja(a) {
        if (a)
          try {
            var c = a.nodeName;
            if (ha(c)) return c;
            c = a.tagName;
            if (ha(c)) return c;
          } catch (b) {}
      }
      function zj(a, c) {
        var b = a.document.getElementsByTagName("form");
        return Ob(a)(c, Ga(b));
      }
      function Oq(a, c, b) {
        b = Dc("dispatchEvent", b || a.document);
        var d = null,
          e = n(a, "Event.prototype.constructor");
        if (
          e &&
          (Na("(Event|Object|constructor)", e) ||
            (fg(a) && "[object Event]" === "" + e))
        )
          try {
            d = new a.Event(c);
          } catch (f) {
            if ((a = Dc("createEvent", n(a, "document"))) && V(a)) {
              try {
                d = a(c);
              } catch (g) {}
              d && d.initEvent && d.initEvent(c, !1, !1);
            }
          }
        d && b(d);
      }
      function nd(a) {
        try {
          return a.getBoundingClientRect && a.getBoundingClientRect();
        } catch (c) {
          return "object" === typeof c &&
            null !== c &&
            16389 === (c.rf && c.rf & 65535)
            ? { top: 0, bottom: 0, left: 0, width: 0, height: 0, right: 0 }
            : null;
        }
      }
      function Sf(a) {
        var c = Fc(a),
          b = n(a, "document");
        return {
          x:
            a.pageXOffset ||
            (b.documentElement && b.documentElement.scrollLeft) ||
            (c && c.scrollLeft) ||
            0,
          y:
            a.pageYOffset ||
            (b.documentElement && b.documentElement.scrollTop) ||
            (c && c.scrollTop) ||
            0,
        };
      }
      function Ld(a) {
        var c = gg(a);
        if (c) {
          var b = c[2];
          return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)];
        }
        c = bc(a);
        return [
          n(c, "clientWidth") || a.innerWidth,
          n(c, "clientHeight") || a.innerHeight,
        ];
      }
      function gg(a) {
        var c = n(a, "visualViewport.width"),
          b = n(a, "visualViewport.height");
        a = n(a, "visualViewport.scale");
        return fa(c) || fa(b) ? null : [Math.floor(c), Math.floor(b), a];
      }
      function bc(a) {
        var c = n(a, "document") || {},
          b = c.documentElement;
        return "CSS1Compat" === c.compatMode ? b : Fc(a) || b;
      }
      function Fc(a) {
        a = n(a, "document");
        try {
          return a.getElementsByTagName("body")[0];
        } catch (c) {
          return null;
        }
      }
      function dc(a, c) {
        try {
          return new RegExp("(?:^|\\s)" + a + "(?:\\s|$)").test(c.className);
        } catch (b) {
          return !1;
        }
      }
      function Gc(a) {
        var c;
        try {
          if ((c = a.target || a.srcElement))
            !c.ownerDocument && c.documentElement
              ? (c = c.documentElement)
              : c.ownerDocument !== document && (c = null);
        } catch (b) {}
        return c;
      }
      function rc(a) {
        var c = a && a.parentNode;
        c && c.removeChild(a);
      }
      function Kb(a) {
        return a ? a.innerText || "" : "";
      }
      function Hf(a) {
        if (fa(a)) return !1;
        a = a.nodeType;
        return 3 === a || 8 === a;
      }
      function Aj(a, c, b) {
        void 0 === c && (c = "");
        void 0 === b && (b = "_ym");
        var d = "" + b + c;
        d && (d += "_");
        return {
          Id: Pq(a),
          C: function (e, f) {
            var g = Bj(a, "" + d + e);
            return bb(g) && !X(f) ? f : g;
          },
          D: function (e, f) {
            Cj(a, "" + d + e, f);
            return this;
          },
          Eb: function (e) {
            Dj(a, "" + d + e);
            return this;
          },
        };
      }
      function Cj(a, c, b) {
        var d = hg(a);
        a = wb(a, b);
        if (!bb(a))
          try {
            d.setItem(c, a);
          } catch (e) {}
      }
      function Bj(a, c) {
        var b = hg(a);
        try {
          return ob(a, b.getItem(c));
        } catch (d) {}
        return null;
      }
      function Dj(a, c) {
        var b = hg(a);
        try {
          b.removeItem(c);
        } catch (d) {}
      }
      function hg(a) {
        try {
          return a.localStorage;
        } catch (c) {}
        return null;
      }
      function wb(a, c, b) {
        try {
          return a.JSON.stringify(c, null, b);
        } catch (d) {
          return null;
        }
      }
      function kf(a, c, b) {
        void 0 === b && (b = null);
        a.Ha || (a.Ha = of());
        c && a.Ha.Vb(c, b);
        return a.Ha;
      }
      function Pe(a) {
        return {
          N: function (c, b) {
            var d = a.document,
              e = c.K;
            if (e && ig(a)) {
              var f = ja(a),
                g = function (h) {
                  ig(a) || (f.vb(d, Ej, g), b());
                  return h;
                };
              f.F(d, Ej, g);
              e.D("pr", "1");
            } else b();
          },
        };
      }
      function Md(a) {
        return function (c, b, d) {
          return function (e, f) {
            var g = C(w(Sc, Kc([c, f]), na), Fj[a] || []);
            g = sa(g, d);
            return Gj(c, b, g)(e);
          };
        };
      }
      function Gj(a, c, b) {
        var d = Wb(a, c);
        return function (e) {
          return Hj(b, e, !0)
            .then(function () {
              var f = e.ja || {},
                g = f.Eh,
                h = void 0 === g ? "" : g;
              g = f.Aa;
              var k = void 0 === g ? "" : g;
              f = f.Fh;
              f = C(
                function (l) {
                  return Ca.Qa + "//" + ("" + h + l || ec) + "/" + k;
                },
                void 0 === f ? [ec] : f
              );
              return d(e, f);
            })
            .then(function (f) {
              var g = f.Qc;
              f = f.gg;
              e.Df = g;
              e.sj = f;
              return Hj(b, e).then(v(g, T));
            });
        };
      }
      function Wb(a, c) {
        return function (b, d) {
          return Ij(a, c, d, b);
        };
      }
      function Ij(a, c, b, d, e, f) {
        var g;
        void 0 === e && (e = 0);
        void 0 === f && (f = 0);
        var h = z({ fa: [] }, d.$),
          k = c[f],
          l = k[0];
        k = k[1];
        var m = b[e];
        (h.Wa && h.Wa["Content-Type"]) ||
          !h.ba ||
          ((h.Wa = z(
            {},
            h.Wa,
            ((g = {}),
            (g["Content-Type"] = "application/x-www-form-urlencoded"),
            g)
          )),
          (h.ba = "site-info=" + oe(h.ba)));
        h.Yc = h.ba ? "POST" : "GET";
        h.Xa = Qq(a, d, l);
        h.Aa = (d.ja || {}).Aa;
        h.fa.push(l);
        z(d.$, h);
        g = "" + m + (d.Nc && d.Nc.Xh ? "/1" : "");
        var p = 0;
        p = Rq(a, g, h);
        return k(g, h)
          .then(function (q) {
            var r = p,
              t,
              y;
            sb(
              a,
              ((t = {}),
              (t.name = "requestSuccess"),
              (t.data = ((y = {}), (y.body = q), (y.requestId = r), y)),
              t)
            );
            return { Qc: q, gg: e };
          })
          ["catch"](function (q) {
            var r = p,
              t,
              y;
            sb(
              a,
              ((t = {}),
              (t.name = "requestFail"),
              (t.data = ((y = {}), (y.error = q), (y.requestId = r), y)),
              t)
            );
            r = f + 1 >= c.length;
            t = e + 1 >= b.length;
            r && t && Ya(q);
            return Ij(a, c, b, d, !t && r ? e + 1 : e, r ? 0 : f + 1);
          });
      }
      function Qq(a, c, b) {
        var d = z({}, c.J);
        a = la(a);
        c.K && (d["browser-info"] = Ha(c.K.l()).D("st", a(bg)).Fa());
        !d.t && (c = c.Ha) && (c.D("ti", b), (d.t = c.Fa()));
        return d;
      }
      function Rq(a, c, b) {
        var d,
          e,
          f,
          g = Ua(a),
          h = b.fa,
          k = b.ba,
          l = b.Wa,
          m = b.Xa;
        b = b.Yc;
        sb(
          a,
          ((d = {}),
          (d.name = "request"),
          (d.data =
            ((e = {}),
            (e.url = c),
            (e.requestId = g),
            (e.senderParams =
              ((f = {}),
              (f.rBody = k),
              (f.debugStack = h),
              (f.rHeaders = l),
              (f.rQuery = m),
              (f.verb = b),
              f)),
            e)),
          d)
        );
        return g;
      }
      function Jj(a, c, b, d) {
        a[c] || (a[c] = []);
        b && !fa(d) && Kj(a[c], b, d);
      }
      function Kj(a, c, b) {
        for (var d = [c, b], e = -1e4, f = 0; f < a.length; f += 1) {
          var g = a[f],
            h = g[0];
          g = g[1];
          if (b === g && h === c) return;
          if (b < g && b >= e) {
            a.splice(f, 0, d);
            return;
          }
          e = g;
        }
        a.push(d);
      }
      function Hj(a, c, b) {
        void 0 === b && (b = !1);
        return new J(function (d, e) {
          function f(k, l) {
            l();
            d();
          }
          var g = a.slice();
          g.push({ N: f, qa: f });
          var h = ac(g, function (k, l) {
            var m = b ? k.N : k.qa;
            if (m)
              try {
                m(c, l);
              } catch (p) {
                h(Sq), e(p);
              }
            else l();
          });
          h(Lj);
        });
      }
      function Rb(a, c, b) {
        var d = b || "as";
        if (a.postMessage && !a.attachEvent) {
          b = ja(a);
          var e = "__ym__promise_" + Ua(a) + "_" + Ua(a),
            f = F;
          d = A(a, d, function (g) {
            try {
              var h = g.data;
            } catch (k) {
              return;
            }
            h === e && (f(), g.stopPropagation && g.stopPropagation(), c());
          });
          f = b.F(a, ["message"], d);
          a.postMessage(e, "*");
        } else R(a, c, 0, d);
      }
      function kh(a, c, b, d, e) {
        void 0 === d && (d = 1);
        void 0 === e && (e = "itc");
        c = ac(c, b);
        fd(a, c, d)(Pa(A(a, e), F));
      }
      function fd(a, c, b, d) {
        void 0 === b && (b = 1);
        void 0 === d && (d = Mj);
        jg = Infinity === b;
        return Da(function (e, f) {
          function g() {
            try {
              var k = c(d(a, b));
              h = h.concat(k);
            } catch (l) {
              return e(l);
            }
            c(Tq);
            if (c(Nd)) return f(h), Nj(a);
            jg ? (c(d(a, 1e4)), f(h), Nj(a)) : R(a, g, 100);
          }
          var h = [];
          Uq(g);
        });
      }
      function Nj(a) {
        if (kg.length) {
          var c = kg.shift();
          jg ? c() : R(a, c, 100);
        } else lg = !1;
      }
      function Uq(a) {
        lg ? kg.push(a) : ((lg = !0), a());
      }
      function xf(a) {
        return Da(function (c, b) {
          b(a);
        });
      }
      function bp(a) {
        return Da(function (c, b) {
          a.then(b, c);
        });
      }
      function Vq(a) {
        var c = [],
          b = 0;
        return Da(function (d, e) {
          x(function (f, g) {
            f(
              Pa(d, function (h) {
                try {
                  (c[g] = h), (b += 1), b === a.length && e(c);
                } catch (k) {
                  d(k);
                }
              })
            );
          }, a);
        });
      }
      function ap(a) {
        var c = [],
          b = !1;
        return Da(function (d, e) {
          function f(g) {
            c.push(g) === a.length && d(c);
          }
          x(function (g) {
            g(
              Pa(f, function (h) {
                if (!b)
                  try {
                    e(h), (b = !0);
                  } catch (k) {
                    f(k);
                  }
              })
            );
          }, a);
        });
      }
      function Pa(a, c) {
        return function (b) {
          return b(a, c);
        };
      }
      function ac(a, c) {
        return Da({ Ra: a, Ld: c || T, qe: !1, wa: 0 });
      }
      function Lj(a) {
        function c() {
          function d() {
            b = !0;
            a.wa += 1;
          }
          b = !1;
          a.Ld(a.Ra[a.wa], function () {
            d();
          });
          b || ((a.wa += 1), (d = v(a, Lj)));
        }
        for (var b = !0; !Nd(a) && b; ) c();
      }
      function Mj(a, c) {
        return function (b) {
          var d = la(a),
            e = d(Z);
          return Oj(function (f, g) {
            d(Z) - e >= c && g(Pj);
          })(b);
        };
      }
      function mg(a, c) {
        return function (b) {
          var d = la(a),
            e = d(Z);
          return ng(function (f) {
            d(Z) - e >= c && Pj(f);
          })(b);
        };
      }
      function ng(a) {
        return function (c) {
          for (var b; c.Ra.length && !Nd(c); )
            (b = c.Ra.pop()), (b = c.Ld(b, c.Ra)), a(c);
          return b;
        };
      }
      function Wq(a) {
        Nd(a) && Ya(Ta("i"));
        var c = a.Ld(a.Ra[a.wa]);
        a.wa += 1;
        return c;
      }
      function Tq(a) {
        a.qe = !1;
      }
      function Pj(a) {
        a.qe = !0;
      }
      function Sq(a) {
        a.wa = a.Ra.length;
      }
      function Nd(a) {
        return a.qe || a.Ra.length <= a.wa;
      }
      function Ab(a) {
        a = la(a);
        return Math.round(a(Qj) / 50);
      }
      function Qj(a) {
        var c = a.za,
          b = c[1];
        a = c[0] && b ? b() : Z(a) - a.Gh;
        return Math.round(a);
      }
      function bg(a) {
        return Math.round(Z(a) / 1e3);
      }
      function pb(a) {
        return Math.floor(Z(a) / 1e3 / 60);
      }
      function Z(a) {
        var c = a.ze;
        return 0 !== c ? c : og(a.l, a.za);
      }
      function Zf(a) {
        var c = ja(a),
          b = Rj(a),
          d = { l: a, ze: 0, za: b, Gh: og(a, b) },
          e = b[1];
        (b[0] && e) ||
          c.F(a, ["beforeunload", "unload"], function () {
            0 === d.ze && (d.ze = og(a, d.za));
          });
        return Da(d);
      }
      function Xq(a) {
        return (10 > a ? "0" : "") + a;
      }
      function Hi(a, c, b) {
        function d() {
          f = 0;
          g && ((g = !1), (f = R(a, d, b)), e.T(h));
        }
        var e = Bd(a),
          f,
          g = !1,
          h;
        c.F(function (k) {
          g = !0;
          h = k;
          f || d();
          return F;
        });
        return e;
      }
      function Yq(a, c) {
        return a.clearInterval(c);
      }
      function Zq(a, c, b, d) {
        return a.setInterval(A(a, "i.err." + (d || "def"), c), b);
      }
      function R(a, c, b, d) {
        return Gd(a, A(a, "d.err." + (d || "def"), c), b);
      }
      function md(a) {
        var c = {};
        return {
          F: function (b, d) {
            x(function (e) {
              n(c, e) || (c[e] = Bd(a));
              c[e].F(d);
            }, b);
            return this;
          },
          ea: function (b, d) {
            x(function (e) {
              n(c, e) && c[e].ea(d);
            }, b);
            return this;
          },
          T: function (b, d) {
            return n(c, b) ? A(a, "e." + d, c[b].T)(d) : [];
          },
        };
      }
      function Bd(a) {
        var c = [],
          b = {};
        b.nj = c;
        b.F = w(Wa("push", c), v(b, T));
        b.ea = w(tb(Ob(a))(c), tb(Wa("splice", c))(1), v(b, T));
        b.T = w(T, tb(na), $q(c));
        return b;
      }
      function Sj(a, c, b, d, e, f) {
        a = ar(a);
        var g = a.F,
          h = a.ea;
        f = f ? h : g;
        if (c[f])
          if (a.Ci) c[f](b, d, e);
          else c[f]("on" + b, d);
      }
      function B(a, c, b) {
        return function () {
          return A(arguments[0], a, c, b).apply(this, arguments);
        };
      }
      function A(a, c, b, d, e) {
        var f = Ya,
          g = b || f;
        return function () {
          var h = d;
          try {
            h = g.apply(e || null, arguments);
          } catch (k) {
            vd(a, c, k);
          }
          return h;
        };
      }
      function og(a, c) {
        var b = c || Rj(a),
          d = b[0];
        b = b[1];
        return !isNaN(d) && V(b)
          ? Math.round(b() + d)
          : a.Date.now
          ? a.Date.now()
          : new a.Date().getTime();
      }
      function Rj(a) {
        a = wd(a);
        var c = n(a, "timing.navigationStart"),
          b = n(a, "now");
        b && (b = I(b, a));
        return [c, b];
      }
      function wd(a) {
        return n(a, "performance") || n(a, "webkitPerformance");
      }
      function vd(a, c, b) {
        var d = "u.a.e",
          e = "";
        b &&
          ("object" === typeof b
            ? (b.unk && Ya(b),
              (d = b.message),
              (e =
                ("string" === typeof b.stack &&
                  b.stack.replace(/\n/g, "\\n")) ||
                "n.s.e.s"))
            : (d = "" + b));
        br(d) ||
          Za(v(d, fb), cr) ||
          (dr(d) && 0.1 <= a.Math.random()) ||
          x(w(T, Kc(["jserrs", d, c, e]), na), Tj);
      }
      function ae() {
        var a = Oa(arguments);
        return Ya(Qa(a));
      }
      function Qa(a) {
        var c = "";
        P(a) ? (c = L(".", a)) : ha(a) && (c = a);
        return Ta("err.kn(" + Ca.$b + ")" + c);
      }
      function lj(a) {
        return Ta(
          "http." +
            a.status +
            ".st." +
            a.statusText +
            ".rt." +
            ("" + a.responseText).substring(0, 50)
        );
      }
      function er(a) {
        this.message = a;
      }
      function sb(a, c) {
        if (Qe(a)) {
          var b = c.ma;
          if (b) {
            var d = b.split(":");
            b = d[1];
            d = pg(me(d[0]));
            if ("1" === b || d) return;
          }
          b = Uj(a);
          1e3 === b.length && b.shift();
          b.push(c);
        }
      }
      function Re(a, c) {
        return -1 < Ac(U(a).href, "_ym_debug=" + c);
      }
      function bi(a, c, b) {
        qg(a, "metrika_enabled", "1", 0, c, b, !0);
        var d = Vj(a);
        (d = d && d.metrika_enabled) && Wj(a, "metrika_enabled", c, b, !0);
        return !!d;
      }
      function qg(a, c, b, d, e, f, g) {
        void 0 === g && (g = !1);
        if (ci(a, se, c)) {
          var h = c + "=" + encodeURIComponent(b) + ";";
          h += "" + fr(a);
          if (d) {
            var k = new Date();
            k.setTime(k.getTime() + 6e4 * d);
            h += "expires=" + k.toUTCString() + ";";
          }
          e && ((d = e.replace(gr, "")), (h += "domain=" + d + ";"));
          try {
            (a.document.cookie = h + ("path=" + (f || "/"))),
              g || (Xj(a)[c] = b);
          } catch (l) {}
        }
      }
      function se(a, c) {
        var b = Xj(a);
        return b ? b[c] || null : null;
      }
      function Vj(a) {
        try {
          var c = a.document.cookie;
          if (!fa(c)) {
            var b = {};
            x(function (d) {
              d = d.split("=");
              var e = d[1];
              b[$a(d[0])] = $a(Yj(e));
            }, (c || "").split(";"));
            return b;
          }
        } catch (d) {}
        return null;
      }
      function ci(a, c, b) {
        return !rg.length || G(b, Od)
          ? !0
          : O(
              function (d, e) {
                return d && e(a, c, b);
              },
              !0,
              rg
            );
      }
      function Cc(a) {
        return a
          ? w(
              Ma,
              Qf(function (c, b) {
                var d = b[0],
                  e = b[1];
                X(e) || fa(e) || c.push(d + "=" + oe(e));
                return c;
              }, []),
              hr("&")
            )(a)
          : "";
      }
      function ir(a) {
        return a
          ? w(
              Uc(function (c) {
                c = c.split("=");
                var b = c[1];
                return [c[0], fa(b) ? void 0 : Yj(b)];
              }),
              Qf(function (c, b) {
                c[b[0]] = b[1];
                return c;
              }, {})
            )(a.split("&"))
          : {};
      }
      function Yj(a) {
        var c = "";
        try {
          c = decodeURIComponent(a);
        } catch (b) {}
        return c;
      }
      function oe(a) {
        try {
          return encodeURIComponent(a);
        } catch (c) {}
        a = L(
          "",
          ia(function (c) {
            return 55296 >= c.charCodeAt(0);
          }, a.split(""))
        );
        return encodeURIComponent(a);
      }
      function $a(a, c) {
        if (a) {
          var b = Zj ? Zj.call(a) : ("" + a).replace(oj, "");
          return c && b.length > c ? b.substring(0, c) : b;
        }
        return "";
      }
      function ij(a) {
        var c = a.match(ak);
        if (c) {
          a = c[1];
          if ((c = c[2])) return G(c, sg) ? c : !1;
          if (a) return sg[0];
        }
        return !1;
      }
      function U(a) {
        return O(
          function (c, b) {
            var d = n(a, "location." + b);
            c[b] = d ? "" + d : "";
            return c;
          },
          {},
          jr
        );
      }
      function bk(a) {
        return O(
          function (c, b) {
            c[be[b[0]].ca] = b[1];
            return c;
          },
          {},
          Ma(a)
        );
      }
      function kc(a) {
        x(function (c) {
          var b = c[1];
          be[c[0]] = { ca: b.ca, Na: b.Na };
        }, Ma(a));
      }
      function Wl(a, c, b, d, e) {
        var f = "object" === typeof a ? a : { id: a, aa: d, jc: e, R: b };
        a = O(
          function (g, h) {
            var k = h[1],
              l = k.Na;
            k = f[k.ca];
            g[h[0]] = l ? l(k) : k;
            return g;
          },
          {},
          Ma(c)
        );
        dj(a, a.R || {});
        return a;
      }
      function kr(a) {
        a = M(a);
        return (lc[a] && lc[a].Ji) || null;
      }
      function ck(a) {
        a = M(a);
        return lc[a] && lc[a].Ii;
      }
      function dj(a, c) {
        var b = M(a),
          d = n(c, "__ym.turbo_page"),
          e = n(c, "__ym.turbo_page_id");
        lc[b] || (lc[b] = {});
        if (d || e) (lc[b].Ii = d), (lc[b].Ji = e);
      }
      function dk(a) {
        return (
          Se(a) || ud(a) || /mobile/i.test(rb(a)) || !X(n(a, "orientation"))
        );
      }
      function qf(a, c) {
        if (Te(a) && c) {
          var b = rb(a).match(tg);
          if (b && b.length) return +b[1] >= c;
        }
        return !1;
      }
      function rf(a, c) {
        var b = rb(a);
        return b && (b = b.match(lr)) && 1 < b.length ? Ea(b[1]) >= c : !1;
      }
      function ig(a) {
        return G(
          "prerender",
          C(v(n(a, "document"), n), [
            "webkitVisibilityState",
            "visibilityState",
          ])
        );
      }
      function Ua(a, c, b) {
        var d = X(b);
        X(c) && d
          ? ((d = 1), (c = 1073741824))
          : d
          ? (d = 1)
          : ((d = c), (c = b));
        return a.Math.floor(a.Math.random() * (c - d)) + d;
      }
      function mr() {
        var a = Oa(arguments),
          c = a[0];
        for (a = a.slice(1); a.length; ) {
          var b = a.shift(),
            d;
          for (d in b) vb(b, d) && (c[d] = b[d]);
          vb(b, "toString") && (c.toString = b.toString);
        }
        return c;
      }
      function nr(a) {
        return function (c) {
          return c ? a(c) : [];
        };
      }
      function ek(a) {
        return X(a)
          ? []
          : ug(
              function (c, b) {
                c.push([b, a[b]]);
                return c;
              },
              [],
              fk(a)
            );
      }
      function fk(a) {
        var c = [],
          b;
        for (b in a) vb(a, b) && c.push(b);
        return c;
      }
      function me(a) {
        try {
          return parseInt(a, 10);
        } catch (c) {
          return null;
        }
      }
      function gc(a, c) {
        return (
          a.isFinite(c) &&
          !a.isNaN(c) &&
          "[object Number]" === Object.prototype.toString.call(c)
        );
      }
      function or(a) {
        for (var c = [], b = a.length - 1; 0 <= b; --b)
          c[a.length - 1 - b] = a[b];
        return c;
      }
      function sa(a, c) {
        x(w(T, Wa("push", a)), c);
        return a;
      }
      function Lf(a, c) {
        return Array.prototype.sort.call(c, a);
      }
      function Ue(a) {
        return a.splice(0, a.length);
      }
      function Ga(a) {
        return a
          ? P(a)
            ? a
            : Pd
            ? Pd(a)
            : "number" === typeof a.length && 0 <= a.length
            ? gk(a)
            : []
          : [];
      }
      function pr(a, c) {
        for (var b = 0; b < c.length; b += 1)
          if (b in c && a.call(c, c[b], b)) return !0;
        return !1;
      }
      function qr(a, c) {
        return O(
          function (b, d, e) {
            d = a(d, e);
            return b.concat(P(d) ? d : [d]);
          },
          [],
          c
        );
      }
      function hk(a, c) {
        return O(
          function (b, d, e) {
            b.push(a(d, e));
            return b;
          },
          [],
          c
        );
      }
      function rr(a, c) {
        if (!Te(a)) return !0;
        try {
          c.call({ 0: !0, length: -Math.pow(2, 32) + 1 }, function () {
            throw 1;
          });
        } catch (b) {
          return !1;
        }
        return !0;
      }
      function sr(a, c) {
        for (var b = "", d = 0; d < c.length; d += 1)
          b += "" + (d ? a : "") + c[d];
        return b;
      }
      function tr(a, c) {
        return 1 <= ik(za(a), c).length;
      }
      function ur(a, c) {
        for (var b = 0; b < c.length; b += 1)
          if (a.call(c, c[b], b)) return c[b];
      }
      function ik(a, c) {
        return ug(
          function (b, d, e) {
            a(d, e) && b.push(d);
            return b;
          },
          [],
          c
        );
      }
      function td(a, c, b) {
        return b ? a : c;
      }
      function vr(a, c) {
        return O(
          function (b, d, e) {
            return b ? !!a(d, e) : !1;
          },
          !0,
          c
        );
      }
      function Uf(a, c, b) {
        try {
          if (V(c)) {
            var d = Oa(arguments).slice(3);
            fa(b) ? c.apply(null, d) : c.apply(b, d);
          }
        } catch (e) {
          Gd(a, v(e, Ya), 0);
        }
      }
      function Ya(a) {
        throw a;
      }
      function Gd(a, c, b) {
        return Dc("setTimeout", a)(c, b);
      }
      function ma(a, c) {
        return Dc("clearTimeout", a)(c);
      }
      function Ad() {
        return [];
      }
      function Hc() {
        return {};
      }
      function Dc(a, c) {
        var b = n(c, a),
          d = n(c, "constructor.prototype." + a) || b;
        try {
          if (d && d.apply)
            return function () {
              return d.apply(c, arguments);
            };
        } catch (e) {
          return b;
        }
        return d;
      }
      function hb(a, c, b) {
        return function () {
          var d = H(arguments[0]),
            e = b ? "global" : "m1290",
            f = d.C(e, {}),
            g = n(f, a);
          g || ((g = u(c)), (f[a] = g), d.D(e, f));
          return g.apply(null, arguments);
        };
      }
      function ld(a, c) {
        void 0 === c && (c = {});
        if (!a || 1 > a.length) return c;
        zb(
          function (b, d, e) {
            if (e === a.length - 1) return b;
            e === a.length - 2 ? (b[d] = a[e + 1]) : vb(b, d) || (b[d] = {});
            return b[d];
          },
          c,
          a
        );
        return c;
      }
      function Qd(a) {
        a = a.Ya = a.Ya || {};
        var c = (a._metrika = a._metrika || {});
        return {
          Ga: function (b, d) {
            vg.call(c, b) || (c[b] = d);
            return this;
          },
          D: function (b, d) {
            c[b] = d;
            return this;
          },
          C: function (b, d) {
            var e = c[b];
            return vg.call(c, b) || X(d) ? e : d;
          },
        };
      }
      function vb(a, c) {
        return fa(a) ? !1 : vg.call(a, c);
      }
      function u(a, c) {
        var b = [],
          d = [];
        var e = c ? c : T;
        return function () {
          var f = Oa(arguments),
            g = e.apply(void 0, f),
            h = hf(g, d);
          if (-1 !== h) return b[h];
          f = a.apply(void 0, f);
          b.push(f);
          d.push(g);
          return f;
        };
      }
      function Ob(a) {
        if (wg) return wg;
        var c = !1;
        try {
          c = [].indexOf && 0 === [void 0].indexOf(void 0);
        } catch (d) {}
        var b =
          a.Array &&
          a.Array.prototype &&
          wa(a.Array.prototype.indexOf, "indexOf");
        a = void 0;
        return (wg = a =
          c && b
            ? function (d, e) {
                return b.call(e, d);
              }
            : wr);
      }
      function wr(a, c) {
        for (var b = 0; b < c.length; b += 1) if (c[b] === a) return b;
        return -1;
      }
      function na(a, c) {
        return c ? a(c) : a();
      }
      function w() {
        var a = Oa(arguments),
          c = a.shift();
        return function () {
          var b = c.apply(void 0, arguments);
          return O(jk, b, a);
        };
      }
      function Qf(a, c) {
        return D([a, c], O);
      }
      function ug(a, c, b) {
        for (var d = 0, e = b.length; d < e; ) (c = a(c, b[d], d)), (d += 1);
        return c;
      }
      function gb(a) {
        return Wa("test", a);
      }
      function Wa(a, c) {
        return I(c[a], c);
      }
      function v(a, c) {
        return I(c, null, a);
      }
      function D(a, c) {
        return I.apply(void 0, ee([c, null], a));
      }
      function xr(a) {
        return function () {
          var c = Oa(arguments);
          return a.apply(c[0], [c[1]].concat(c.slice(2)));
        };
      }
      function yr() {
        var a = Oa(arguments),
          c = a[0],
          b = a[1],
          d = a.slice(2);
        return function () {
          var e = ee(d, Oa(arguments));
          if (Function.prototype.call)
            return Function.prototype.call.apply(c, ee([b], e));
          if (b) {
            for (var f = "_b"; b[f]; ) f += "_" + f.length;
            b[f] = c;
            e = b[f] && kk(f, e, b);
            delete b[f];
            return e;
          }
          return kk(c, e);
        };
      }
      function kk(a, c, b) {
        void 0 === c && (c = []);
        b = b || {};
        var d = c.length,
          e = a;
        V(e) && ((e = "d"), (b[e] = a));
        var f;
        d
          ? 1 === d
            ? (f = b[e](c[0]))
            : 2 === d
            ? (f = b[e](c[0], c[1]))
            : 3 === d
            ? (f = b[e](c[0], c[1], c[2]))
            : 4 === d && (f = b[e](c[0], c[1], c[2], c[3]))
          : (f = b[e]());
        return f;
      }
      function Oa(a) {
        if (Pd)
          try {
            return Pd(a);
          } catch (c) {}
        return gk(a);
      }
      function gk(a) {
        for (var c = a.length, b = [], d = 0; d < c; d += 1) b.push(a[d]);
        return b;
      }
      function oa(a) {
        return (
          !bb(a) &&
          !X(a) &&
          "[object Object]" === Object.prototype.toString.call(a)
        );
      }
      function fa(a) {
        return X(a) || bb(a);
      }
      function V(a) {
        return "function" === typeof a;
      }
      function tb(a) {
        return function (c) {
          return function (b) {
            return a(b, c);
          };
        };
      }
      function va(a) {
        return function (c) {
          return function (b) {
            return a(c, b);
          };
        };
      }
      function jk(a, c) {
        return c(a);
      }
      function $p(a) {
        return a
          .replace(/\^/g, "\\^")
          .replace(/\$/g, "\\$")
          .replace(Yf, "\\.")
          .replace(/\[/g, "\\[")
          .replace(/\]/g, "\\]")
          .replace(/\|/g, "\\|")
          .replace(/\(/g, "\\(")
          .replace(/\)/g, "\\)")
          .replace(/\?/g, "\\?")
          .replace(/\*/g, "\\*")
          .replace(/\+/g, "\\+")
          .replace(/\{/g, "\\{")
          .replace(/\}/g, "\\}");
      }
      function zr(a) {
        return "" + a;
      }
      function fb(a, c) {
        return !(!a || -1 === jb(a, c));
      }
      function Ac(a, c) {
        return jb(a, c);
      }
      function Ar(a, c) {
        for (var b = 0, d = a.length - c.length, e = 0; e < a.length; e += 1) {
          b = a[e] === c[b] ? b + 1 : 0;
          if (b === c.length) return e - c.length + 1;
          if (!b && e > d) break;
        }
        return -1;
      }
      function ha(a) {
        return "string" === typeof a;
      }
      function wa(a, c) {
        return Na(c, a) && a;
      }
      function Na(a, c) {
        var b = Ve(a, c);
        c && !b && xg.push([a, c]);
        return b;
      }
      function Ve(a, c) {
        if (!c || "function" !== typeof c) return !1;
        try {
          var b = "" + c;
        } catch (h) {
          return !1;
        }
        var d = b.length;
        if (d > 35 + a.length) return !1;
        for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
          f =
            "[native code]"[f] === b[g] || (7 === f && "-" === b[g])
              ? f + 1
              : 0;
          if (12 === f) return !0;
          if (!f && g > e) break;
        }
        return !1;
      }
      function F() {}
      function yg(a, c) {
        yg =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (b, d) {
              b.__proto__ = d;
            }) ||
          function (b, d) {
            for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e]);
          };
        return yg(a, c);
      }
      function Ec(a) {
        return !a;
      }
      function cb(a, c) {
        return c;
      }
      function T(a) {
        return a;
      }
      function La(a, c) {
        function b() {
          this.constructor = a;
        }
        yg(a, c);
        a.prototype =
          null === c
            ? Object.create(c)
            : ((b.prototype = c.prototype), new b());
      }
      function ee() {
        for (var a = 0, c = 0, b = arguments.length; c < b; c++)
          a += arguments[c].length;
        a = Array(a);
        var d = 0;
        for (c = 0; c < b; c++)
          for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++)
            a[d] = e[f];
        return a;
      }
      function n(a, c) {
        return a
          ? O(
              function (b, d) {
                if (fa(b)) return b;
                try {
                  return b[d];
                } catch (e) {}
                return null;
              },
              a,
              c.split(".")
            )
          : null;
      }
      function Br(a) {
        return "[object Array]" === Object.prototype.toString.call(a);
      }
      function Cr() {}
      function Dr(a, c) {
        return function () {
          a.apply(c, arguments);
        };
      }
      function Ia(a) {
        if (!(this instanceof Ia))
          throw new TypeError("Promises must be constructed via new");
        if ("function" !== typeof a) throw new TypeError("not a function");
        this.Ka = 0;
        this.Fe = !1;
        this.Pa = void 0;
        this.zb = [];
        lk(a, this);
      }
      function mk(a, c) {
        for (; 3 === a.Ka; ) a = a.Pa;
        0 === a.Ka
          ? a.zb.push(c)
          : ((a.Fe = !0),
            Ia.Ge(function () {
              var b = 1 === a.Ka ? c.$h : c.hi;
              if (null === b) (1 === a.Ka ? zg : Rd)(c.promise, a.Pa);
              else {
                try {
                  var d = b(a.Pa);
                } catch (e) {
                  Rd(c.promise, e);
                  return;
                }
                zg(c.promise, d);
              }
            }));
      }
      function zg(a, c) {
        try {
          if (c === a)
            throw new TypeError("A promise cannot be resolved with itself.");
          if (c && ("object" === typeof c || "function" === typeof c)) {
            var b = c.then;
            if (c instanceof Ia) {
              a.Ka = 3;
              a.Pa = c;
              Ag(a);
              return;
            }
            if ("function" === typeof b) {
              lk(Dr(b, c), a);
              return;
            }
          }
          a.Ka = 1;
          a.Pa = c;
          Ag(a);
        } catch (d) {
          Rd(a, d);
        }
      }
      function Rd(a, c) {
        a.Ka = 2;
        a.Pa = c;
        Ag(a);
      }
      function Ag(a) {
        2 === a.Ka &&
          0 === a.zb.length &&
          Ia.Ge(function () {
            a.Fe || Ia.wg(a.Pa);
          });
        for (var c = 0, b = a.zb.length; c < b; c++) mk(a, a.zb[c]);
        a.zb = null;
      }
      function Er(a, c, b) {
        this.$h = "function" === typeof a ? a : null;
        this.hi = "function" === typeof c ? c : null;
        this.promise = b;
      }
      function lk(a, c) {
        var b = !1;
        try {
          a(
            function (d) {
              b || ((b = !0), zg(c, d));
            },
            function (d) {
              b || ((b = !0), Rd(c, d));
            }
          );
        } catch (d) {
          b || ((b = !0), Rd(c, d));
        }
      }
      function Wj(a, c, b, d, e) {
        void 0 === e && (e = !1);
        return qg(a, c, "", -100, b, d, e);
      }
      function Lc(a, c, b) {
        void 0 === c && (c = "_ym_");
        void 0 === b && (b = "");
        var d = Fr(a),
          e = 1 === (d || "").split(".").length ? d : "." + d,
          f = b ? "_" + b : "";
        return {
          Eb: function (g, h, k) {
            Wj(a, "" + c + g + f, h || e, k);
            return this;
          },
          C: function (g) {
            return se(a, "" + c + g + f);
          },
          D: function (g, h, k, l, m) {
            qg(a, "" + c + g + f, h, k, l || e, m);
            return this;
          },
        };
      }
      function ob(a, c) {
        if (!c) return null;
        try {
          return a.JSON.parse(c);
        } catch (b) {
          return null;
        }
      }
      function sc(a) {
        a = "" + a;
        for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1)
          (c ^= a.charCodeAt(d)),
            (c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24));
        return c >>> 0;
      }
      function Xl(a, c, b, d) {
        var e = nk[b];
        return e
          ? function () {
              var f = Oa(arguments);
              try {
                var g = d.apply(void 0, f);
                var h = H(a);
                h.Ga("mt", {});
                var k = h.C("mt"),
                  l = k[e];
                k[e] = l ? l + 1 : 1;
              } catch (m) {
                Ya(m);
              }
              return g;
            }
          : d;
      }
      function Oc(a, c) {
        var b = Gr(a);
        return b
          ? ((b.href = c),
            {
              protocol: b.protocol,
              host: b.host,
              port: b.port,
              hostname: b.hostname,
              hash: b.hash,
              search: b.search,
              query: b.search.replace(/^\?/, ""),
              pathname: b.pathname || "/",
              path: (b.pathname || "/") + b.search,
              href: b.href,
            })
          : {};
      }
      function ok(a) {
        return (a = U(a).hash.split("#")[1]) ? a.split("?")[0] : "";
      }
      function Hr(a, c) {
        var b = ok(a);
        pk = Zq(
          a,
          function () {
            var d = ok(a);
            d !== b && (c(), (b = d));
          },
          200,
          "t.h"
        );
        return I(Yq, null, a, pk);
      }
      function Ir(a, c, b, d) {
        var e,
          f,
          g = c.aa,
          h = c.Ce,
          k = c.vc,
          l = H(a),
          m = Ha(((e = {}), (e.wh = 1), (e.pv = 1), e));
        e = n(d, "isTrusted");
        d && !fa(e) && m.D("ite", xb(e));
        de(g) && a.Ya && a.Ya.Direct && m.D("ad", "1");
        h && m.D("ut", "1");
        g = l.C("lastReferrer");
        d = U(a).href;
        k = {
          J: ((f = {}), (f["page-url"] = k || d), (f["page-ref"] = g), f),
          K: m,
        };
        b(k, c)["catch"](A(a, "g.s"));
        l.D("lastReferrer", d);
      }
      function Jr(a, c, b) {
        function d() {
          r || ((q = !0), (t = !1), (r = !0), f());
        }
        function e() {
          m = !0;
          k(!1);
          c();
        }
        function f() {
          ma(a, l);
          if (m) k(!1);
          else {
            var K = Math.max(0, b - (t ? y : y + p(Z) - E));
            K ? (l = R(a, e, K, "u.t.d.c")) : e();
          }
        }
        function g() {
          t = q = r = !0;
          y += p(Z) - E;
          E = p(Z);
          f();
        }
        function h() {
          q || r || (y = 0);
          E = p(Z);
          q = r = !0;
          t = !1;
          f();
        }
        function k(K) {
          K = K ? N.F : N.vb;
          K(a, ["blur"], g);
          K(a, ["focus"], h);
          K(a.document, ["click", "mousemove", "keydown", "scroll"], d);
        }
        var l = 0,
          m = !1;
        if (fg(a)) return (l = R(a, c, b, "u.t.d")), D([a, l], ma);
        var p = la(a),
          q = !1,
          r = !1,
          t = !0,
          y = 0,
          E = p(Z),
          N = ja(a);
        k(!0);
        f();
        return function () {
          ma(a, l);
          k(!1);
        };
      }
      function df(a, c, b, d) {
        return function () {
          if (ya(a, c)) {
            var e = Oa(arguments);
            return d.apply(void 0, e);
          }
        };
      }
      function Sd(a, c, b) {
        var d = c.getAttribute("itemtype");
        b = kb('[itemprop~="' + b + '"]', c);
        return d
          ? ia(function (e) {
              return e.parentNode && ic("[itemtype]", a, e.parentNode) === c;
            }, b)
          : b;
      }
      function ib(a, c, b) {
        return (a = Sd(a, c, b)) && a.length ? a[0] : null;
      }
      function db(a) {
        if (!a) return "";
        a = P(a) ? a : [a];
        return a.length ? a[0].getAttribute("content") || Kb(a[0]) : "";
      }
      function qk(a) {
        return a
          ? a.attributes && a.getAttribute("datetime")
            ? a.getAttribute("datetime")
            : db(a)
          : "";
      }
      function qd(a, c, b) {
        a =
          c &&
          (fb(c.className, "ym-disable-keys") ||
            fb(c.className, "-metrika-nokeys"));
        return b && c
          ? a || !!Kq(["ym-disable-keys", "-metrika-nokeys"], c).length
          : a;
      }
      function Af(a, c) {
        return Ne(c)
          ? "password" === c.type ||
              (c.name && G(c.name.toLowerCase(), rk)) ||
              (c.id && G(c.id.toLowerCase(), rk))
          : !1;
      }
      function sk(a, c) {
        var b = Math.max(0, Math.min(c, 65535));
        sa(a, [b >> 8, b & 255]);
      }
      function Tb(a, c) {
        sa(a, [c & 255]);
      }
      function lb(a, c, b) {
        return -1 !== Ob(a)(b, Kr) ? (Tb(c, b), !1) : !0;
      }
      function S(a, c) {
        for (var b = Math.max(0, c | 0); 127 < b; )
          sa(a, [(b & 127) | 128]), (b >>= 7);
        sa(a, [b]);
      }
      function Bg(a, c) {
        S(a, c.length);
        for (var b = 0; b < c.length; b += 1) S(a, c.charCodeAt(b));
      }
      function Cg(a, c) {
        var b = c;
        255 < b.length && (b = b.substr(0, 255));
        a.push(b.length);
        for (var d = 0; d < b.length; d += 1) sk(a, b.charCodeAt(d));
      }
      function Lr(a, c) {
        var b = [];
        if (lb(a, b, 27)) return [];
        S(b, c);
        return b;
      }
      function Mr(a, c) {
        var b = Ja(c);
        if (!b) return (c[Va] = -1), null;
        var d = +c[Va];
        if (!isFinite(d) || 0 >= d) return null;
        if (c.attributes)
          for (var e = c; e; ) {
            if (e.attributes.$i) return null;
            e = e.parentElement;
          }
        e = 64;
        var f = Le(a, c),
          g = f && f[Va] ? f[Va] : 0;
        0 > g && (g = 0);
        b = (b || "").toUpperCase();
        var h = Nr()[b];
        h || (e |= 2);
        var k = xj(a, c);
        k || (e |= 4);
        var l = Ef(a, c);
        (f = f ? Ef(a, f) : null) &&
          l[0] === f[0] &&
          l[1] === f[1] &&
          l[2] === f[2] &&
          l[3] === f[3] &&
          (e |= 8);
        vc[d].tf = l[0] + "x" + l[1];
        vc[d].size = l[2] + "x" + l[3];
        c.id && "string" === typeof c.id && (e |= 32);
        f = [];
        if (lb(a, f, 1)) return null;
        S(f, d);
        Tb(f, e);
        S(f, g);
        h ? Tb(f, h) : Cg(f, b);
        k && S(f, k);
        e & 8 || (S(f, l[0]), S(f, l[1]), S(f, l[2]), S(f, l[3]));
        e & 32 && Cg(f, c.id);
        Tb(f, 0);
        return f;
      }
      function Or(a, c) {
        var b = c[Va];
        if (!b || 0 > b || !Cf(c) || !c.form || $h(a, c.form)) return [];
        var d = zj(a, c.form);
        if (0 > d) return [];
        if (Ne(c)) {
          var e = {
            text: 0,
            color: 0,
            oc: 0,
            dj: 0,
            "datetime-local": 0,
            email: 0,
            rf: 0,
            rj: 0,
            search: 0,
            wj: 0,
            time: 0,
            url: 0,
            month: 0,
            xj: 0,
            password: 2,
            qj: 3,
            bj: 4,
            file: 6,
            image: 7,
          };
          e = e[c.type];
        } else {
          e = { Xi: 1, Yi: 5 };
          var f = Ja(c);
          e = X(f) ? "" : e[f];
        }
        if ("number" !== typeof e) return [];
        f = -1;
        for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)
          if (g[k].name === c.name) {
            if (g[k] === c) {
              f = l;
              break;
            }
            l += 1;
          }
        if (0 > f) return [];
        g = [];
        if (lb(a, g, 7)) return [];
        S(g, b);
        S(g, d);
        S(g, e);
        Bg(g, c.name || "");
        S(g, f);
        return g;
      }
      function uc(a, c, b) {
        void 0 === b && (b = []);
        for (var d = []; c && !Tn(a, c, b); c = Le(a, c)) d.push(c);
        x(function (e) {
          vc.counter += 1;
          var f = vc.counter;
          e[Va] = f;
          vc[f] = {};
          f = Mr(a, e);
          e = Or(a, e);
          f && e && (sa(b, f), sa(b, e));
        }, Pr(d));
        return b;
      }
      function Qr(a) {
        var c = a.na;
        if (!pd || (c && !c.fromElement)) return Xh(a);
      }
      function Rr(a) {
        var c = a.na;
        if (c && !c.toElement) return Df(a);
      }
      function tk(a) {
        var c = Gc(a.na);
        if (c && re(c)) {
          var b = Wh(a, c),
            d = b.concat;
          var e = Ab(a.l),
            f = [];
          lb(a.l, f, 17) ? (a = []) : (S(f, e), S(f, c[Va]), (a = f));
          return d.call(b, a);
        }
      }
      function uk(a) {
        var c = a.l,
          b = a.na.target;
        if (b && re(b)) {
          c = uc(c, b);
          var d = c.concat;
          var e = Ab(a.l),
            f = [];
          lb(a.l, f, 18) ? (a = []) : (S(f, e), S(f, b[Va]), (a = f));
          return d.call(c, a);
        }
      }
      function vk(a) {
        var c = a.l,
          b = Gc(a.na);
        if (!b || Af(c, b) || qd(c, b)) return [];
        if (Cf(b)) {
          var d = H(c).C("isEU"),
            e = Pc(c, b, d),
            f = e.Ta;
          d = e.ob;
          e = e.fb;
          if (Oe(b)) var g = b.checked;
          else (g = b.value), (g = f ? L("", wk(g.split(""))) : g);
          c = uc(c, b);
          f = c.concat;
          var h = Ab(a.l);
          d = d && !e;
          e = [];
          lb(a.l, e, 39)
            ? (a = [])
            : (S(e, h),
              S(e, b[Va]),
              Cg(e, String(g)),
              Tb(e, d ? 1 : 0),
              (a = e));
          return f.call(c, a);
        }
      }
      function We(a) {
        var c = a.l,
          b = a.na,
          d = Gc(b);
        if (!d || "SCROLLBAR" === d.nodeName) return [];
        var e = [],
          f = v(e, sa);
        d && re(d) ? f(Wh(a, d)) : f(uc(c, d));
        var g = Yi(c, b);
        f = e.concat;
        a = Ab(a.l);
        var h = b.type,
          k = [g.x, g.y];
        g = b.which;
        b = b.button;
        var l;
        var m = Me(c, d);
        var p = m[0];
        for (m = m[1]; d && (!p || !m); )
          if ((d = Le(c, d))) (m = Me(c, d)), (p = m[0]), (m = m[1]);
        d
          ? ((p = d[Va]),
            !p || 0 > p
              ? (c = [])
              : (m = ((l = {}),
                (l.mousemove = 2),
                (l.click = 32),
                (l.dblclick = 33),
                (l.mousedown = 4),
                (l.mouseup = 30),
                (l.touch = 12),
                l)[h])
              ? ((l = []),
                (d = eg(c, d)),
                lb(c, l, m)
                  ? (c = [])
                  : (S(l, a),
                    S(l, p),
                    S(l, Math.max(0, k[0] - d.left)),
                    S(l, Math.max(0, k[1] - d.top)),
                    /^mouse(up|down)|click$/.test(h) &&
                      ((c = g || b),
                      Tb(l, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)),
                    (c = l)))
              : (c = []))
          : (c = []);
        return f.call(e, c);
      }
      function Sr(a) {
        var c = null,
          b = a.l,
          d = b.document;
        if (b.getSelection) {
          d = void 0;
          try {
            d = b.getSelection();
          } catch (g) {
            return [];
          }
          if (bb(d)) return [];
          var e = "" + d;
          c = d.anchorNode;
        } else
          d.selection &&
            d.selection.createRange &&
            ((d = d.selection.createRange()),
            (e = d.text),
            (c = d.parentElement()));
        if ("string" !== typeof e) return [];
        try {
          for (; c && 1 !== c.nodeType; ) c = c.parentNode;
        } catch (g) {
          return [];
        }
        if (!c) return [];
        d = Pc(b, c).Ta || qd(b, c, !0);
        c = c.getElementsByTagName("*");
        for (var f = 0; f < c.length && !d; )
          (d = c[f]), (d = Pc(b, d).Ta || qd(b, d, !0)), (f += 1);
        if (e !== Dg)
          return (
            (Dg = e),
            (d = d ? L("", wk(e.split(""))) : e),
            (e = Ab(a.l)),
            0 === d.length
              ? (d = b = "")
              : 100 >= d.length
              ? ((b = d), (d = ""))
              : 200 >= d.length
              ? ((b = d.substr(0, 100)), (d = d.substr(100)))
              : ((b = d.substr(0, 97)), (d = d.substr(d.length - 97))),
            (c = []),
            lb(a.l, c, 29) ? (a = []) : (S(c, e), Bg(c, b), Bg(c, d), (a = c)),
            a
          );
      }
      function Tr(a) {
        return We(a).concat(Sr(a) || []);
      }
      function xk(a) {
        return (
          (a.shiftKey ? 2 : 0) |
          (a.ctrlKey ? 4 : 0) |
          (a.altKey ? 1 : 0) |
          (a.metaKey ? 8 : 0) |
          (a.ctrlKey || a.altKey ? 16 : 0)
        );
      }
      function yk(a) {
        var c = [];
        Eg ||
          ((Eg = !0),
          Dg && sa(c, Lr(a.l, Ab(a.l))),
          Rb(
            a.l,
            function () {
              Eg = !1;
            },
            "fv.c"
          ));
        return c;
      }
      function zk(a, c, b, d) {
        c = Gc(c);
        if (!c || Ff(a, c)) return [];
        var e = Pc(a, c),
          f = e.ob,
          g = e.fb;
        e = e.Ta;
        var h = H(a);
        if (!g && ((f && h.C("isEU")) || qd(a, c))) a = [];
        else {
          f = uc(a, c);
          g = f.concat;
          var k = Ab(a);
          h = [];
          if (lb(a, h, 38)) a = [];
          else {
            S(h, k);
            sk(h, b);
            Tb(h, d);
            a = c[Va];
            if (!a || 0 > a) a = 0;
            S(h, a);
            Tb(h, e ? 1 : 0);
            a = h;
          }
          a = g.call(f, a);
        }
        return a;
      }
      function Ur(a) {
        var c = a.l,
          b = a.na,
          d = b.keyCode,
          e = xk(b),
          f = [],
          g = v(f, sa);
        if (
          {
            3: 1,
            8: 1,
            9: 1,
            13: 1,
            16: 1,
            17: 1,
            18: 1,
            19: 1,
            20: 1,
            27: 1,
            33: 1,
            34: 1,
            35: 1,
            36: 1,
            37: 1,
            38: 1,
            39: 1,
            40: 1,
            45: 1,
            46: 1,
            91: 1,
            92: 1,
            93: 1,
            106: 1,
            110: 1,
            111: 1,
            144: 1,
            145: 1,
          }[d] ||
          (112 <= d && 123 >= d) ||
          (96 <= d && 105 >= d) ||
          e & 16
        )
          19 === d && 4 === (e & -17) && (d = 144),
            g(zk(c, b, d, e | 16)),
            (Fg = !1),
            Rb(
              c,
              function () {
                Fg = !0;
              },
              "fv.kd"
            ),
            !(67 === d && e & 4) || e & 1 || e & 2 || g(yk(a));
        return f;
      }
      function Vr(a) {
        var c = a.l;
        a = a.na;
        var b = [];
        Fg &&
          !Gg &&
          0 !== a.which &&
          (sa(b, zk(c, a, a.charCode || a.keyCode, xk(a))),
          (Gg = !0),
          Rb(
            c,
            function () {
              Gg = !1;
            },
            "fv.kp"
          ));
        return b;
      }
      function Ak(a) {
        var c = a.l,
          b = Gc(a.na);
        if (!b || $h(c, b)) return [];
        var d = [];
        if ("FORM" === b.nodeName) {
          for (var e = b.elements, f = 0; f < e.length; f += 1)
            yj(e[f]) || sa(d, uc(c, e[f]));
          a = Ab(a.l);
          e = zj(c, b);
          if (0 > e) c = [];
          else {
            f = b.elements;
            var g = f.length;
            b = [];
            for (var h = 0; h < g; h += 1)
              if (!yj(f[h])) {
                var k = f[h][Va];
                k && 0 < k && b.push(k);
              }
            f = [];
            if (lb(c, f, 11)) c = [];
            else {
              S(f, a);
              S(f, e);
              S(f, b.length);
              for (c = 0; c < b.length; c += 1) S(f, b[c]);
              c = f;
            }
          }
          sa(d, c);
        }
        return d;
      }
      function Wr(a) {
        var c = a.flush;
        a = Gc(a.na);
        "BODY" === Ja(a) && c();
      }
      function ln(a, c) {
        var b,
          d = Gc(c),
          e = Ca.ic,
          f = Qd(a);
        if (d && dc("ym-advanced-informer", d)) {
          var g = f.C("ifc", 0) + 1;
          f.D("ifc", g);
          g = d.getAttribute("data-lang");
          var h = Ea(d.getAttribute("data-cid") || "");
          if (h || 0 === h)
            (e = n(a, "Ya." + e + ".informer"))
              ? e(((b = {}), (b.i = d), (b.id = h), (b.lang = g), b))
              : f.D("ib", !0),
              (b = c || window.event),
              b.preventDefault ? b.preventDefault() : (b.returnValue = !1);
        }
      }
      function jh(a, c, b, d) {
        return function () {
          var e = Oa(arguments);
          e = d.apply(void 0, e);
          return X(e) ? ya(a, c) : e;
        };
      }
      function ih(a, c, b, d) {
        return A(a, "cm." + b, d);
      }
      function Vl(a, c, b, d, e) {
        return b.length && e
          ? D(
              O(
                function (f, g, h) {
                  return b[h] ? f.concat(D([a, c, d], g)) : f;
                },
                [],
                b
              ),
              w
            )()(e)
          : e;
      }
      var Wc = {
          construct: "Metrika2",
          callbackPostfix: "2",
          version: "6q5vo8idydw3m5q59jr2ws8gr",
          host: "mc.yandex.com",
        },
        xg = [],
        Yf = /\./g,
        Bk = wa(String.prototype.indexOf, "indexOf"),
        jb = Bk
          ? function (a, c) {
              return Bk.call(a, c);
            }
          : Ar,
        za = va(function (a, c) {
          return a === c;
        }),
        Nc = va(function (a, c) {
          a(c);
          return c;
        }),
        Da = va(jk),
        bb = za(null),
        X = za(void 0),
        Pd = wa(Array.from, "from"),
        Ck = wa(Function.prototype.bind, "bind"),
        I = Ck ? xr(Ck) : yr,
        Dk = wa(Array.prototype.reduce, "reduce"),
        zb = Dk
          ? function (a, c, b) {
              return Dk.call(b, a, c);
            }
          : ug,
        O = zb,
        xq = w,
        ze = w(T, na),
        wg,
        hf = Ob(window),
        Pm = tb(hf),
        vg = Object.prototype.hasOwnProperty,
        H = u(Qd),
        Q = tb(n),
        ab = Q("length"),
        Kc = va(D),
        Gi = va(Wa),
        Ek = wa(Array.prototype.every, "every"),
        wi = Ek
          ? function (a, c) {
              return Ek.call(c, a);
            }
          : vr,
        Nb = D([1, null], td),
        xb = D([1, 0], td),
        Db = Boolean,
        Fk = wa(Array.prototype.filter, "filter"),
        ia = Fk
          ? function (a, c) {
              return Fk.call(c, a);
            }
          : ik,
        Ba = v(Db, ia),
        Xr = va(ia),
        Gk = wa(Array.prototype.find, "find"),
        Mb = Gk
          ? function (a, c) {
              return Gk.call(c, a);
            }
          : ur,
        Hk = wa(Array.prototype.includes, "includes"),
        G = Hk
          ? function (a, c, b) {
              return Hk.call(c, a, b);
            }
          : tr,
        pc = tb(G),
        Ik = wa(Array.prototype.join, "join"),
        L = Ik
          ? function (a, c) {
              return Ik.call(c, a);
            }
          : sr,
        hr = va(L),
        Jk = u(function (a) {
          var c = n(a, "navigator") || {};
          a = n(c, "userAgent") || "";
          c = n(c, "vendor") || "";
          return { hf: -1 < jb(c, "Apple"), hg: a };
        }),
        rb = u(Q("navigator.userAgent")),
        tg = /Firefox\/([0-9]+)/i,
        Te = u(function (a) {
          var c = n(a, "document.documentElement.style"),
            b = n(a, "InstallTrigger");
          a =
            -1 !== (n(a, "navigator.userAgent") || "").toLowerCase().search(tg);
          tg.lastIndex = 0;
          return !(!(c && "MozAppearance" in c) || fa(b)) || a;
        }),
        Kk = wa(Array.isArray, "isArray"),
        P = Kk
          ? function (a) {
              return Kk(a);
            }
          : Br,
        Lk = wa(Array.prototype.map, "map"),
        C =
          Lk && rr(window, Array.prototype.map)
            ? function (a, c) {
                return c && 0 < c.length ? Lk.call(c, a) : [];
              }
            : hk,
        x = C,
        Mk = wa(Array.prototype.flatMap, "flatMap"),
        Kd = Mk
          ? function (a, c) {
              return Mk.call(c, a);
            }
          : qr,
        Uc = va(C),
        $q = tb(C),
        Nk = wa(Array.prototype.some, "some"),
        Za = Nk
          ? function (a, c) {
              return Nk.call(c, a);
            }
          : pr,
        Ee = u(Ob),
        Sc = Q("0"),
        Ok = wa(Array.prototype.reverse, "reverse"),
        Pr = Ok
          ? function (a) {
              return Ok.call(a);
            }
          : or,
        Pk = tb(parseInt),
        Ea = Pk(10),
        te = Pk(2),
        Qk = wa(Object.keys, "keys"),
        Rk = wa(Object.entries, "entries"),
        Ma = Rk ? nr(Rk) : ek,
        ca = Qk
          ? function (a) {
              return Qk(a);
            }
          : fk,
        Sk = wa(Object.values, "values"),
        Yr = w(ek, v(Q("1"), hk)),
        vm = Sk
          ? function (a) {
              return Sk(a);
            }
          : Yr,
        z = Object.assign || mr,
        Vh = va(function (a, c) {
          return z({}, a, c);
        }),
        id = u(w(Q("String.fromCharCode"), v("fromCharCode", Na), Ec)),
        Se = u(w(rb, gb(/ipad|iphone|ipod/i))),
        Kf = u(function (a) {
          return n(a, "navigator.platform") || "";
        }),
        Ge = u(function (a) {
          a = Jk(a);
          var c = a.hg;
          return a.hf && !c.match("CriOS");
        }),
        Zr = gb(
          /Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/
        ),
        $r = gb(/; wv\)/),
        ue = u(function (a) {
          a = rb(a);
          return $r(a) || Zr(a);
        }),
        as = /Chrome\/(\d+)\./,
        bs = u(function (a) {
          return (a = (n(a, "navigator.userAgent") || "").match(as)) && a.length
            ? 76 <= Ea(a[1])
            : !1;
        }),
        ud = u(function (a) {
          var c = (rb(a) || "").toLowerCase();
          a = Kf(a);
          return (
            fb(c, "android") &&
            fb(c, "mobile") &&
            /^android|linux armv/i.test(a)
          );
        }),
        cs =
          "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(
            " "
          ),
        ds = u(function (a) {
          var c = n(a, "navigator.connection.type");
          if (X(c)) return null;
          a = Ee(a)(c, cs);
          return -1 === a ? c : "" + a;
        }),
        fg = u(w(Q("document.addEventListener"), Ec)),
        Tk = u(function (a) {
          var c = n(a, "navigator") || {};
          return O(
            function (b, d) {
              return b || n(c, d);
            },
            "",
            ["language", "userLanguage", "browserLanguage", "systemLanguage"]
          );
        }),
        oh = u(function (a) {
          var c = n(a, "navigator") || {};
          a = Tk(a);
          ha(a) || ((a = ""), (c = n(c, "languages.0")), ha(c) && (a = c));
          return a.toLowerCase().split("-")[0];
        }),
        qb = u(function (a) {
          return (n(a, "top") || a) !== a;
        }),
        es = u(Q("top.contentWindow")),
        fs = u(function (a) {
          var c = !1;
          try {
            c = a.navigator.javaEnabled();
          } catch (b) {}
          return c;
        }),
        gs = u(function (a) {
          var c =
              "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(
                " "
              ),
            b = n(a, "external");
          b = n(b, "toString") ? "" + b.toString() : "";
          b = -1 !== jb(b, "Sequentum");
          var d = n(a, "document.documentElement"),
            e = ["selenium", "webdriver", "driver"];
          return !!(
            Za(v(a, n), [
              "_selenium",
              "callSelenium",
              "_Selenium_IDE_Recorder",
            ]) ||
            Za(v(n(a, "document"), n), c) ||
            b ||
            (d && Za(I(d.getAttribute, d), e))
          );
        }),
        hs = u(function (a) {
          return !!(
            Za(v(a, n), ["_phantom", "__nightmare", "callPhantom"]) ||
            /(PhantomJS)|(HeadlessChrome)/.test(rb(a)) ||
            n(a, "navigator.webdriver") ||
            (n(a, "isChrome") && !n(a, "chrome"))
          );
        }),
        is = u(function (a) {
          return !(
            !n(a, "ia_document.shareURL") || !n(a, "ia_document.referrer")
          );
        }),
        Td = u(function (a) {
          var c = rb(a) || "",
            b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
          b = b ? [+b[1], +b[2]] : [0, 0];
          c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
          return 14 <= (c ? +c[1] : 0)
            ? !0
            : (Se(a) || 10 < b[0] || (10 === b[0] && 13 <= b[1])) && Ge(a);
        }),
        lr = /Edg\/(\d+)\./,
        Je = u(function (a) {
          return Td(a) || qf(a, 68) || rf(a, 79);
        }),
        js = Wc.construct,
        ec = Wc.host,
        Hg = fg(window),
        Ca = {
          rg: 24226447,
          lg: 26302566,
          vg: 51533966,
          Vi: 65446441,
          Qa: "https:",
          $b: "1290",
          ic: js,
          qg: Hg ? 512 : 2048,
          og: Hg ? 512 : 2048,
          pg: Hg ? 100 : 400,
          Wi: 100,
          sg: "noindex",
        },
        Ud = [],
        M = u(function (a) {
          return a.id + ":" + a.aa;
        }),
        lc = {},
        de = za("1"),
        ks = setTimeout;
      Ia.prototype["catch"] = function (a) {
        return this.then(null, a);
      };
      Ia.prototype.then = function (a, c) {
        var b = new this.constructor(Cr);
        mk(this, new Er(a, c, b));
        return b;
      };
      Ia.prototype["finally"] = function (a) {
        var c = this.constructor;
        return this.then(
          function (b) {
            return c.resolve(a()).then(function () {
              return b;
            });
          },
          function (b) {
            return c.resolve(a()).then(function () {
              return c.reject(b);
            });
          }
        );
      };
      Ia.all = function (a) {
        return new Ia(function (c, b) {
          function d(h, k) {
            try {
              if (k && ("object" === typeof k || "function" === typeof k)) {
                var l = k.then;
                if ("function" === typeof l) {
                  l.call(
                    k,
                    function (m) {
                      d(h, m);
                    },
                    b
                  );
                  return;
                }
              }
              e[h] = k;
              0 === --f && c(e);
            } catch (m) {
              b(m);
            }
          }
          if (!a || "undefined" === typeof a.length)
            return b(new TypeError("Promise.all accepts an array"));
          var e = Array.prototype.slice.call(a);
          if (0 === e.length) return c([]);
          for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g]);
        });
      };
      Ia.resolve = function (a) {
        return a && "object" === typeof a && a.constructor === Ia
          ? a
          : new Ia(function (c) {
              c(a);
            });
      };
      Ia.reject = function (a) {
        return new Ia(function (c, b) {
          b(a);
        });
      };
      Ia.race = function (a) {
        return new Ia(function (c, b) {
          if (!a || "undefined" === typeof a.length)
            return b(new TypeError("Promise.race accepts an array"));
          for (var d = 0, e = a.length; d < e; d++) Ia.resolve(a[d]).then(c, b);
        });
      };
      Ia.Ge =
        ("function" === typeof setImmediate &&
          function (a) {
            setImmediate(a);
          }) ||
        function (a) {
          ks(a, 0);
        };
      Ia.wg = function (a) {
        "undefined" !== typeof console &&
          console &&
          console.warn("Possible Unhandled Promise Rejection:", a);
      };
      var J = window.Promise,
        ls = wa(J, "Promise"),
        Uk = wa(n(J, "resolve"), "resolve"),
        Vk = wa(n(J, "reject"), "reject"),
        Wk = wa(n(J, "all"), "all");
      if (ls && Uk && Vk && Wk) {
        var Xe = function (a) {
          return new Promise(a);
        };
        Xe.resolve = I(Uk, J);
        Xe.reject = I(Vk, J);
        Xe.all = I(Wk, J);
        J = Xe;
      } else J = Ia;
      var ef = [],
        ce = [],
        W = [],
        Xa = [],
        Ig = [],
        Ic = [],
        pg = pc([26812653]),
        ms = u(w(Q("id"), pg), M),
        Xb = {
          id: "id",
          Ce: "ut",
          aa: "type",
          Pd: "ldc",
          Sa: "nck",
          vc: "url",
          fh: "referrer",
        },
        ns = /^\d+$/,
        Xc = {
          id: function (a) {
            a = "" + (a || "0");
            ns.test(a) || (a = "0");
            try {
              var c = Ea(a);
            } catch (b) {
              c = 0;
            }
            return c;
          },
          aa: function (a) {
            return "" + (a || 0 === a ? a : "0");
          },
          Sa: Db,
          Ce: Db,
        };
      Xb.jc = "defer";
      Xc.jc = Db;
      Xb.R = "params";
      Xc.R = function (a) {
        return oa(a) || P(a) ? a : null;
      };
      Xb.Be = "userParams";
      Xb.cg = "triggerEvent";
      Xc.cg = Db;
      Xb.Of = "sendTitle";
      Xc.Of = function (a) {
        return !!a || X(a);
      };
      Xb.we = "trackHash";
      Xc.we = Db;
      Xb.ag = "trackLinks";
      Xb.Qg = "enableAll";
      var be = O(
          function (a, c) {
            var b = c[0];
            a[b] = { ca: c[1], Na: Xc[b] };
            return a;
          },
          {},
          Ma(Xb)
        ),
        jr = "hash host hostname href pathname port protocol search".split(" "),
        sg =
          "ru by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ru".split(
            " "
          ),
        ak = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/,
        De = u(function (a) {
          return (a ? a.replace(/^www\./, "") : "").toLowerCase();
        }),
        si = u(function (a) {
          a = U(a).hostname;
          var c = !1;
          a && (c = -1 !== a.search(ak));
          return c;
        }),
        Xk = w(U, Q("protocol"), za("https:")),
        fr = u(function (a) {
          return bs(a) && Xk(a) ? "SameSite=None;Secure;" : "";
        }),
        oj = /^\s+|\s+$/g,
        Zj = wa(String.prototype.trim, "trim"),
        Yk = va(function (a, c) {
          return c.replace(a, "");
        }),
        Ki = Yk(/\s/g),
        Sb = Yk(/\D/g),
        Od = ["metrika_enabled"],
        rg = [],
        Xj = hb("gsc", Vj),
        gr = /:\d+$/,
        Fr = u(function (a) {
          var c = (U(a).host || "").split(".");
          return 1 === c.length
            ? c[0]
            : O(
                function (b, d, e) {
                  e += 1;
                  2 <= e &&
                    !b &&
                    ((e = L(".", c.slice(-e))), bi(a, e) && (b = e));
                  return b;
                },
                "",
                c
              );
        }),
        wc = u(Lc),
        Qe = u(function (a) {
          var c = wc(a),
            b = "1" === c.C("debug"),
            d = Re(a, "1") || Re(a, "2"),
            e = a._ym_debug;
          (!e && !d) || b || ((a = U(a)), c.D("debug", "1", void 0, a.host));
          return !!(b || e || d);
        }),
        Uj = hb("debuggerEvents", Ad, !0),
        cr = [
          "http.0.st..rt.",
          "network error occurred",
          "send beacon",
          "Content Security Policy",
          "DOM Exception 18",
        ],
        Vd,
        Ta = (function (a) {
          return function (c, b) {
            void 0 === b && (b = !1);
            if (Vd) var d = new Vd(c);
            else
              Na("Error", a.Error)
                ? ((Vd = a.Error), (d = new a.Error(c)))
                : ((Vd = er), (d = new Vd(c)));
            b && (d.unk = !0);
            return d;
          };
        })(window),
        dr = gb(/^http./),
        br = gb(/^err.kn/),
        Tj = [],
        ar = u(function (a) {
          a = !(!a.addEventListener || !a.removeEventListener);
          return {
            Ci: a,
            F: a ? "addEventListener" : "attachEvent",
            ea: a ? "removeEventListener" : "detachEvent",
          };
        }),
        os = u(function (a) {
          var c = !1;
          if (!a.addEventListener) return c;
          try {
            var b = Object.defineProperty({}, "passive", {
              get: function () {
                c = !0;
                return 1;
              },
            });
            a.addEventListener("test", F, b);
          } catch (d) {}
          return c;
        }),
        ps = va(function (a, c) {
          return a ? z({ capture: !0, passive: !0 }, c || {}) : !!c;
        }),
        ja = u(function (a) {
          var c = os(a),
            b = ps(c),
            d = {};
          return z(d, {
            F: function (e, f, g, h) {
              x(function (k) {
                var l = b(h);
                Sj(a, e, k, g, l, !1);
              }, f);
              return I(d.vb, d, e, f, g, h);
            },
            vb: function (e, f, g, h) {
              x(function (k) {
                var l = b(h);
                Sj(a, e, k, g, l, !0);
              }, f);
            },
          });
        }),
        la = u(Zf),
        Oj = va(function (a, c) {
          for (var b = []; !Nd(c); ) {
            var d = Wq(c);
            a(d, function (e) {
              return e(c);
            });
            b.push(d);
          }
          return b;
        }),
        Zk = va(function (a, c) {
          return Da(function (b, d) {
            return c(b, function (e) {
              try {
                d(a(e));
              } catch (f) {
                b(f);
              }
            });
          });
        }),
        Jg = va(function (a, c) {
          return Da(function (b, d) {
            return c(b, function (e) {
              try {
                a(e)(Pa(b, d));
              } catch (f) {
                b(f);
              }
            });
          });
        }),
        kg = [],
        lg = !1,
        jg = !1,
        $k = va(function (a, c) {
          var b = c || {};
          return {
            l: v(b, T),
            C: function (d, e) {
              var f = b[d];
              return X(f) && !X(e) ? e : f;
            },
            D: function (d, e) {
              b[d] = e;
              return this;
            },
            Vb: function (d, e) {
              return "" === e || fa(e) ? this : this.D(d, e);
            },
            Fa: v(b, a),
          };
        }),
        Ha = $k(function (a) {
          var c = "";
          a = zb(
            function (b, d) {
              var e = d[0],
                f = "" + e + ":" + d[1];
              "t" === e ? (c = f) : b.push(f);
              return b;
            },
            [],
            Ma(a)
          );
          c && a.push(c);
          return L(":", a);
        }),
        Kg,
        Fj =
          ((Kg = {}),
          (Kg.w = [
            [
              function (a, c) {
                return {
                  N: function (b, d) {
                    var e,
                      f = b.J;
                    f =
                      ((e = {}),
                      (e["page-url"] = (f && f["page-url"]) || ""),
                      (e.charset = "utf-8"),
                      e);
                    "0" !== c.aa && (f["cnt-class"] = c.aa);
                    b.K || (b.K = Ha());
                    e = b.K;
                    var g = b.$;
                    f = {
                      ja: { Aa: "watch/" + c.id },
                      $: z(void 0 === g ? {} : g, {
                        yb: !!e.C("pv") && !e.C("ar") && !e.C("wh"),
                      }),
                      J: z(b.J || {}, f),
                    };
                    z(b, f);
                    d();
                  },
                };
              },
              1,
            ],
          ]),
          Kg),
        Lg = v(Fj, Jj),
        mb = Md("w"),
        Ej = ["webkitvisibilitychange", "visibilitychange"],
        of = $k(function (a) {
          a = Ma(a);
          return L(
            "",
            C(function (c) {
              var b = c[0];
              c = c[1];
              return bb(c) ? "" : b + "(" + c + ")";
            }, a)
          );
        }),
        al =
          "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(
            " "
          ),
        aq = /^\s*(data|javascript):/i,
        aj = new RegExp(
          L("", [
            "\\.(" +
              L(
                "|",
                "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(
                  " "
                )
              ) +
              ")$",
          ]),
          "i"
        ),
        Ra,
        nk =
          ((Ra = {}),
          (Ra.hit = "h"),
          (Ra.params = "p"),
          (Ra.reachGoal = "g"),
          (Ra.userParams = "up"),
          (Ra.trackHash = "th"),
          (Ra.accurateTrackBounce = "atb"),
          (Ra.notBounce = "nb"),
          (Ra.addFileExtension = "fe"),
          (Ra.extLink = "el"),
          (Ra.file = "fc"),
          (Ra.trackLinks = "tl"),
          (Ra.destruct = "d"),
          (Ra.setUserID = "ui"),
          (Ra.getClientID = "ci"),
          (Ra.clickmap = "cm"),
          (Ra.enableAll = "ea"),
          Ra),
        qs = u(function () {
          var a = 0;
          return function () {
            return (a += 1);
          };
        }),
        rs = w(M, qs, na),
        Ke = {
          mc: function (a) {
            a = Qd(a).C("mt", {});
            a = Ma(a);
            return a.length
              ? O(
                  function (c, b, d) {
                    return "" + c + (d ? "-" : "") + b[0] + "-" + b[1];
                  },
                  "",
                  a
                )
              : null;
          },
          clc: function (a) {
            var c = H(a).C("cls", { hc: 0, x: 0, y: 0 }),
              b = c.hc,
              d = c.x;
            c = c.y;
            return b
              ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b)
              : b + "-" + d + "-" + c;
          },
          rqnt: function (a, c, b) {
            a = b.J;
            return !a || a.nohit ? null : rs(c);
          },
        },
        Pq = u(function (a) {
          Cj(a, "_ymBRC", "1");
          var c = "1" !== Bj(a, "_ymBRC");
          c || Dj(a, "_ymBRC");
          return c;
        }),
        Sa = u(Aj),
        Yc = u(Aj, function (a, c, b) {
          return "" + c + b;
        }),
        ss = u(Q("document.documentElement")),
        ts = u(function (a) {
          a = n(a, "document") || {};
          return ("" + (a.characterSet || a.charset || "")).toLowerCase();
        }),
        yb = u(w(Q("document"), v("createElement", Dc))),
        ai = u(function (a) {
          var c = n(a, "Element.prototype");
          return c
            ? (a = Mb(
                function (b) {
                  var d = c[b];
                  return !!d && Na(b, d);
                },
                [
                  "matches",
                  "webkitMatchesSelector",
                  "mozMatchesSelector",
                  "msMatchesSelector",
                  "oMatchesSelector",
                ]
              ))
              ? c[a]
              : null
            : null;
        }),
        us = za("INPUT"),
        Ne = w(Ja, us),
        vs = za("TEXTAREA"),
        Mq = w(Ja, vs),
        ws = za("SELECT"),
        Nq = w(Ja, ws),
        Oe = w(Q("type"), gb(/^(checkbox|radio)$/)),
        Cf = w(Ja, gb(/^INPUT|SELECT|TEXTAREA$/)),
        re = w(Ja, gb(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
        Gf = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "),
        Lq = ["submit", "image", "hidden"],
        ye = u(function () {
          for (var a = 59, c = {}, b = 0; b < al.length; b += 1)
            (c[al[b]] = String.fromCharCode(a)), (a += 1);
          return c;
        }),
        wj = u(function (a) {
          return { fj: a, gb: null, pb: [] };
        }),
        uj = {},
        dg = {};
      uj.p = 500;
      var tj = { i: "id", n: "name", h: "href", ty: "type" };
      dg.h = !0;
      dg.c = !0;
      var Vc = {};
      Vc.p = nf;
      Vc.c = function (a, c, b) {
        (a = $a(n(c, "textContent"))) &&
          b &&
          ((b = b(c)),
          b.length && Za(w(Q("textContent"), $a, za(a)), b) && (a = ""));
        Ne(c) && (a = $a((c.getAttribute && c.getAttribute("value")) || a));
        return a;
      };
      var Zc,
        cg =
          "button," +
          L(
            ",",
            C(
              function (a) {
                return 'input[type="' + a + '"]';
              },
              ["button", "submit", "reset", "file"]
            )
          ) +
          ",a",
        Pf = v(cg, kb),
        Jq =
          ((Zc = {}),
          (Zc.A = "h"),
          (Zc.BUTTON = "i"),
          (Zc.DIV = "i"),
          (Zc.INPUT = "ty"),
          Zc),
        bl = /\/$/,
        sj = hb("r", function (a, c) {
          var b = rj(a, c),
            d = b[0];
          return !b[1] && d;
        }),
        Id = u(function () {
          return { Ea: {}, pending: {}, children: {} };
        }),
        Mg = Q("postMessage"),
        xs = B("s.f", function (a, c, b, d, e) {
          c = c(d);
          var f = Id(a),
            g = L(":", [c.meta.oc, c.meta.key]);
          if (Mg(b)) {
            f.pending[g] = e;
            try {
              b.postMessage(c.Wf, "*");
            } catch (h) {
              delete f.pending[g];
              return;
            }
            R(
              a,
              function () {
                delete f.pending[g];
              },
              5e3,
              "if.s"
            );
          }
        }),
        ys = B("s.fh", function (a, c, b, d, e, f) {
          var g = null,
            h = null,
            k = Id(a),
            l = null;
          try {
            (g = ob(a, f.data)), (h = g.__yminfo), (l = g.data);
          } catch (m) {
            return;
          }
          if (
            !fa(h) &&
            h.substring &&
            "__yminfo" === h.substring(0, 8) &&
            !fa(l) &&
            ((g = h.split(":")), 4 === g.length)
          )
            if (
              ((h = c.id),
              (c = g[1]),
              (a = g[2]),
              (g = g[3]),
              !P(l) && l.type && "0" === g && l.counterId)
            ) {
              if (!l.toCounter || l.toCounter == h) {
                k = null;
                try {
                  k = f.source;
                } catch (m) {}
                !bb(k) &&
                  Mg(k) &&
                  ((f = d.T(l.type, [f, l])),
                  (e = C(w(T, Vh(e)), f.concat([{}]))),
                  (l = b([c, a, l.counterId], e)),
                  k.postMessage(l.Wf, "*"));
              }
            } else
              g === "" + h &&
                P(l) &&
                ia(function (m) {
                  return !(!m.hid || !m.counterId);
                }, l).length === l.length &&
                (b = k.pending[L(":", [c, a])]) &&
                b.apply(null, [f].concat(l));
        }),
        jd = u(function (a, c) {
          var b,
            d = Dc("getElementsByTagName", n(a, "document")),
            e = Id(a),
            f = Mg(a),
            g = md(a),
            h = ja(a);
          if (!d || !f) return null;
          d = d.call(a.document, "iframe");
          f = ((b = {}), (b.counterId = c.id), (b.hid = "" + zc(a)), b);
          Je(a) && (f.duid = Jd(a, c));
          Fq(a, g);
          Gq(a);
          b = Hq(a, f);
          var k = D([a, v([], b)], xs);
          x(function (l) {
            var m = null;
            try {
              m = l.contentWindow;
            } catch (p) {}
            m &&
              k(m, { type: "initToChild" }, function (p, q) {
                g.T("initToParent", [p, q]);
              });
          }, d);
          qb(a) &&
            k(a.parent, { type: "initToParent" }, function (l, m) {
              g.T("parentConnect", [l, m]);
            });
          h.F(a, ["message"], D([a, c, b, g, f], ys));
          return { Y: g, Ea: e.Ea, children: e.children, ke: k };
        }, w(cb, M)),
        kd = u(
          function (a, c) {
            if (!Je(a) || !qb(a)) return Jd(a, c);
            var b = jd(a, c);
            return b && b.Ea[c.id]
              ? b.Ea[c.id].info.duid || Jd(a, c)
              : Jd(a, c);
          },
          function (a, c) {
            return "{" + c.Pd + c.Sa;
          }
        ),
        zs = u(
          w(
            la,
            Da(function (a) {
              return -new a.l.Date().getTimezoneOffset();
            })
          )
        ),
        As = w(
          la,
          Da(function (a) {
            a = new a.l.Date();
            return L(
              "",
              C(Xq, [
                a.getFullYear(),
                a.getMonth() + 1,
                a.getDate(),
                a.getHours(),
                a.getMinutes(),
                a.getSeconds(),
              ])
            );
          })
        ),
        Bs = w(la, Da(bg)),
        cl = u(
          w(
            la,
            Da(function (a) {
              return a.za[0];
            })
          )
        ),
        Cs = u(function (a) {
          a = H(a);
          var c = a.C("counterNum", 0) + 1;
          a.D("counterNum", c);
          return c;
        }, w(cb, M)),
        ra,
        Hd =
          ((ra = {}),
          (ra.vf = v(Wc.version, T)),
          (ra.nt = ds),
          (ra.fu = function (a, c, b) {
            var d = b.J;
            if (!d) return null;
            c = (n(a, "document.referrer") || "").replace(bl, "");
            b = (d["page-ref"] || "").replace(bl, "");
            d = d["page-url"];
            a = U(a).href !== d;
            c = c !== b;
            b = 0;
            a && c ? (b = 3) : c ? (b = 1) : a && (b = 2);
            return b;
          }),
          (ra.en = ts),
          (ra.la = Tk),
          (ra.ut = function (a, c, b) {
            var d = b.M;
            b = b.J;
            d = d && d.Gc;
            b && (si(a) || c.Ce || d) && (b.ut = Ca.sg);
            return null;
          }),
          (ra.v = v(Ca.$b, T)),
          (ra.cn = Cs),
          (ra.dp = function (a) {
            var c = H(a),
              b = c.C("bt", {});
            if (X(c.C("bt"))) {
              var d = n(a, "navigator.getBattery");
              try {
                b.p = d && d.call(a.navigator);
              } catch (e) {}
              c.D("bt", b);
              b.p &&
                b.p.then &&
                b.p.then(
                  A(a, "bi:dp.p", function (e) {
                    b.Ri = n(e, "charging") && 0 === n(e, "chargingTime");
                  })
                );
            }
            return xb(b.Ri);
          }),
          (ra.ls = u(function (a, c) {
            var b = Yc(a, c.id),
              d = la(a),
              e = b.C("lsid");
            return +e ? e : ((d = Ua(a, 0, d(Z))), b.D("lsid", d), d);
          }, cb)),
          (ra.hid = zc),
          (ra.phid = function (a, c) {
            if (!qb(a)) return null;
            var b = jd(a, c);
            if (!b) return null;
            var d = ca(b.Ea);
            return d.length ? b.Ea[d[0]].info.hid : null;
          }),
          (ra.z = zs),
          (ra.i = As),
          (ra.et = Bs),
          (ra.c = w(Q("navigator.cookieEnabled"), Nb)),
          (ra.rn = w(T, Ua)),
          (ra.rqn = function (a, c, b) {
            b = b.J;
            if (!b || b.nohit) return null;
            c = M(c);
            a = Yc(a, c);
            c = (a.C("reqNum", 0) || 0) + 1;
            a.D("reqNum", c);
            if (a.C("reqNum") === c) return c;
            a.Eb("reqNum");
            return null;
          }),
          (ra.u = kd),
          (ra.w = function (a) {
            a = Ld(a);
            return a[0] + "x" + a[1];
          }),
          (ra.s = function (a) {
            var c = n(a, "screen");
            if (c) {
              a = n(c, "width");
              var b = n(c, "height");
              c = n(c, "colorDepth") || n(c, "pixelDepth");
              return L("x", [a, b, c]);
            }
            return null;
          }),
          (ra.sk = Q("devicePixelRatio")),
          (ra.ifr = w(qb, Nb)),
          (ra.j = w(fs, Nb)),
          (ra.sti = function (a) {
            return qb(a) && es(a) ? "1" : null;
          }),
          ra),
        Eq = u(function () {
          return sa(ca(Hd), ca(Ke));
        }),
        Dq = u(Hc, M),
        pj = u(function () {
          return { Se: null, ta: [] };
        }, M),
        Aq = /^[a-z][\w.+-]+:/i,
        Ng,
        Vb = [
          [Pe, 1],
          [Ie, 2],
          [Pb(), 3],
          [qj, 4],
        ],
        He = [],
        Eb = v(Vb, Kj),
        Ub = ((Ng = {}), (Ng.h = Vb), Ng),
        aa = v(Ub, Jj);
      Eb(mj, -100);
      var vq = /[^a-z0-9.:-]/,
        Og,
        Pg = {},
        dl = Ba([
          $f && [$f, 0],
          Bb && [Bb, 1],
          [Cb, 2],
          Fd && [Fd, 3],
          [Tc, 4],
        ]),
        mc = Ba([$f, Bb, Cb, Fd, Tc]),
        Qg = [Cb];
      Qg.unshift(Bb);
      Qg.push(Fd);
      var el = Ba(Qg),
        $c = Ba([Tc]);
      Ba([Bb, Cb]);
      var Ds = Ba([Bb, Tc]),
        fl = Ba([Bb, Cb, Fd, Tc]),
        xa = ((Og = {}), (Og.h = el), Og),
        Rg = u(function (a, c) {
          var b = Pg["*"] ? Pg["*"] : c && Pg[c];
          b || (b = c ? xa[c] || [] : mc);
          b = O(
            function (d, e) {
              var f = e(a);
              if (f) {
                var g = Mb(w(Sc, za(e)), dl);
                g && d.push([g[1], f]);
              }
              return d;
            },
            [],
            b
          );
          b.length || ae();
          return b;
        }, cb),
        Sg,
        Es = I(J.reject, J, Qa()),
        Aa = ((Sg = {}), (Sg.h = mb), Sg),
        ua = B(
          "g.sen",
          function (a, c, b) {
            var d = Rg(a, c);
            b = b ? zq(a, c, b) : [];
            var e = Aa[c],
              f = e ? e(a, d, b) : mb(a, d, b);
            return function () {
              var g = Oa(arguments),
                h = g[0];
              g = g.slice(1);
              var k = h.$;
              h = z(h, { $: z(void 0 === k ? {} : k, { fa: [c] }) });
              return f.apply(null, [h].concat(g));
            };
          },
          Es
        ),
        nq = va(function (a, c) {
          if (!c[a]) {
            var b,
              d = new J(function (e) {
                b = e;
              });
            c[a] = { Bf: b, promise: d, Cf: !1 };
          }
          return c[a].promise;
        }),
        jj = u(w(Hc, Da)),
        Fs = B("dc.init", function (a, c) {
          return c && pg(me(c.split(":")[0]))
            ? { log: F, warn: F, error: F }
            : mq(a, c);
        }),
        jc = u(Fs, cb),
        ea,
        Ye = /{(\w+)}/g,
        gl =
          ((ea = {}),
          (ea.gbn = "Button goal. Counter {id}. Button: {query}."),
          (ea.gbi = "Button goal. Counter {id}. Init."),
          (ea["gbi.p"] = "Button goal. Counter {id}. Init. Params: "),
          (ea.dc = "Duplicate counter {key} initialization"),
          (ea.clel = "Empty link"),
          (ea.fpeo = "First party params error. Empty object."),
          (ea.fpno = "First party params error. Not an object."),
          (ea.fgi = "Form goal. Counter {id}. Init."),
          (ea["fgi.p"] = "Form goal. Counter {id}. Init. Params: "),
          (ea.fg = "Form goal. Counter {id}. Form: {query}."),
          (ea["fg.p"] = "Form goal. Counter {id}. Form: {query}. Params: "),
          (ea.gr = "Reach goal. Counter: {id}. Goal id: {goal}"),
          (ea["gr.p"] = "Reach goal. Counter: {id}. Goal id: {goal}. Params: "),
          (ea.h = "PageView. Counter {id}. URL: {url}. Referrer: {ref}"),
          (ea["h.p"] =
            "PageView. Counter {id}. URL: {url}. Referrer: {ref}. Params: "),
          (ea.lcl = "{prefix}. Counter {id}. Url: {url}"),
          (ea["lcl.p"] = "{prefix}. Counter {id}. Url: {url}. Params: "),
          (ea.ns = "Not supported"),
          (ea.nnw =
            'Function "{name}" has been overridden, this may cause issues with Metrika counter'),
          (ea.nbnc = '"callback" argument missing'),
          (ea.nci = "No counter instance found"),
          (ea.pv = "PageView. Counter {id}. URL: {url}. Referrer: {ref}"),
          (ea["pv.p"] =
            "PageView. Counter {id}. URL: {url}. Referrer: {ref}. Params: "),
          (ea.pa = "Params. Counter {id}"),
          (ea["pa.p"] = "Params. Counter {id}. Params: "),
          (ea.pau = "Set user id {uid}"),
          (ea["pau.p"] = "Set user id {uid}. Params: "),
          (ea.paup = "User params. Counter {id}"),
          (ea["paup.p"] = "User params. Counter {id}. Params: "),
          (ea.wuid = "Incorrect user ID"),
          (ea.wup = "Wrong user params"),
          ea),
        Yl = B("h.p", function (a, c) {
          var b,
            d,
            e = ua(a, "h", c),
            f = c.vc || "" + U(a).href,
            g = c.fh || a.document.referrer,
            h = {
              K: Ha(((b = {}), (b.pv = 1), b)),
              J: ((d = {}), (d["page-url"] = f), (d["page-ref"] = g), d),
              M: {},
            };
          h.M.R = c.R;
          h.M.Be = c.Be;
          c.jc && h.J && (h.J.nohit = "1");
          return e(h, c)
            .then(function (k) {
              var l;
              k &&
                (c.jc ||
                  hc(
                    a,
                    c,
                    "h",
                    ((l = {}), (l.id = c.id), (l.url = f), (l.ref = g), l),
                    c.R
                  )(),
                Rb(a, D([a, c, k], oq)));
            })
            ["catch"](A(a, "h.g.s"));
        }),
        Tg = [
          "yandex_metrika_callback" + Wc.callbackPostfix,
          "yandex_metrika_callbacks" + Wc.callbackPostfix,
        ],
        Gs = B("cb.i", function (a) {
          var c = Tg[0],
            b = Tg[1];
          if (V(a[c])) a[c]();
          "object" === typeof a[b] &&
            x(function (d, e) {
              a[b][e] = null;
              Uf(a, d);
            }, a[b]);
          x(function (d) {
            try {
              delete a[d];
            } catch (e) {
              a[d] = void 0;
            }
          }, Tg);
        }),
        lq = /^[a-zA-Z0-9'!#$%&*+-/=?^_`{|}~]+$/,
        hl = u(function (a) {
          return (
            !!n(a, "crypto.subtle.digest") &&
            !!n(a, "TextEncoder") &&
            !!n(a, "FileReader") &&
            !!n(a, "Blob")
          );
        }),
        Hs = B("fpm", function (a, c) {
          if (!Xk(a)) return F;
          var b = M(c);
          if (!hl(a)) return Jb(a, b, "ns"), F;
          var d = ya(a, c);
          return d
            ? function (e) {
                return new J(function (f, g) {
                  return oa(e)
                    ? ca(e).length
                      ? f(
                          gj(a, e).then(function (h) {
                            var k, l;
                            h &&
                              h.length &&
                              d.params(
                                ((k = {}),
                                (k.__ym = ((l = {}), (l.fpp = h), l)),
                                k)
                              );
                          }, F)
                        )
                      : g(Qa("fpm.l"))
                    : g(Qa("fpm.o"));
                })["catch"](A(a, "fpm.en"));
              }
            : F;
        }),
        Ze = va(function (a, c) {
          var b = {};
          Xf(a)(function (d) {
            b = d[c] || {};
          });
          return b;
        }),
        Is = B("c.c.cc", function (a) {
          var c = H(a),
            b = w(Ze(a), function (d) {
              var e,
                f = ((e = {}), (e.clickmap = !!d.clickmap), e);
              return z({}, d, f);
            });
          return A(a, "g.c.cc", w(I(c.C, c, "counters", {}), ca, Uc(b)));
        }),
        Js = B("gt.c.rs", function (a, c) {
          var b,
            d = M(c),
            e = c.id,
            f = c.aa,
            g = c.Hg,
            h = c.we,
            k = D([a, d], iq);
          Wf(
            a,
            d,
            ((b = {}),
            (b.id = e),
            (b.type = +f),
            (b.clickmap = g),
            (b.trackHash = !!h),
            b)
          );
          return k;
        }),
        ej = u(Ad),
        Dd = u(Hc, M),
        Ks = B("pa.int", function (a, c) {
          var b;
          return (
            (b = {}),
            (b.params = function () {
              var d,
                e,
                f,
                g = Oa(arguments),
                h = hq(g);
              if (!h) return null;
              g = h.Mg;
              var k = h.R;
              h = h.bc;
              if (!oa(k) && !P(k)) return null;
              var l = ua(a, "1", c),
                m = Dd(c).url,
                p = !ms(c),
                q = "pa",
                r = ((d = {}), (d.id = c.id), d);
              d = k;
              var t = "";
              if ((t = n(k, "__ym.user_id"))) (q = "pau"), (r.uid = t);
              G("__ymu", ca(k)) && (q = "paup");
              d.__ym &&
                ((d = z({}, k)),
                (d.__ym = O(
                  function (y, E) {
                    var N = n(k, "__ym." + E);
                    N && (y[E] = N);
                    return y;
                  },
                  {},
                  Ud
                )),
                ca(d.__ym).length || delete d.__ym,
                (p = !!ca(d).length));
              d = t ? void 0 : JSON.stringify(d);
              d = hc(a, c, q, r, d);
              l = l(
                {
                  M: { R: k },
                  K: Ha(((e = {}), (e.pa = 1), (e.ar = 1), e)),
                  J: ((f = {}), (f["page-url"] = m || U(a).href), f),
                },
                c
              ).then(p ? d : F);
              return Rc(a, "p.s", l, h, g);
            }),
            b
          );
        }),
        le = u(cj, w(cb, M)),
        Ls = B("y.p", function (a, c) {
          var b = cj(a, c);
          if (b) {
            var d = ie(a),
              e = D([a, b, c], dq);
            rh(a, d, function (f) {
              f.F(["params"], e);
            });
            b.Y.F(["params"], w(Q("1"), e));
          }
        }),
        Gr = u(function (a) {
          if ((a = yb(a))) return a("a");
        }),
        il = { jj: gb(/[/&=?#]/) },
        Ae = B("go.in", function (a, c, b, d) {
          var e;
          void 0 === b && (b = "goal");
          return (
            (e = {}),
            (e.reachGoal = function (f, g, h, k) {
              var l, m, p;
              if (!f || (il[b] && il[b](f))) return null;
              var q = g,
                r = h || F;
              V(g) && ((r = g), (q = void 0), (k = h));
              var t = hc(
                  a,
                  c,
                  "gr",
                  ((l = {}), (l.id = c.id), (l.goal = f), l),
                  q
                ),
                y = "goal" === b;
              g = ua(a, "g", c);
              l = cq(a, c, f, b);
              h = l[0];
              l = l[1];
              q = g(
                {
                  M: { R: q },
                  K: Ha(((m = {}), (m.ar = 1), m)),
                  J: ((p = {}), (p["page-url"] = h), (p["page-ref"] = l), p),
                },
                c
              ).then(function () {
                var E, N;
                y && t();
                sb(
                  a,
                  ((E = {}),
                  (E.counterKey = M(c)),
                  (E.name = "event"),
                  (E.data = ((N = {}), (N.schema = b), (N.name = f), N)),
                  E)
                );
                d && d();
              });
              return Rc(a, "g.s", q, r, k);
            }),
            e
          );
        }),
        Ms = B("guid.int", function (a, c) {
          var b;
          return (
            (b = {}),
            (b.getClientID = function (d) {
              var e = Jd(a, c);
              d && Uf(a, d, null, e);
              return e;
            }),
            b
          );
        }),
        pk,
        Ns = B("th.e", function (a, c) {
          function b() {
            g ||
              (k = vb(a, "onhashchange")
                ? ja(a).F(a, ["hashchange"], h)
                : Hr(a, h));
          }
          var d,
            e = ua(a, "t", c),
            f = Fe(a, M(c)),
            g = !1,
            h = A(a, "h.h.ch", I(Ir, null, a, c, e)),
            k = F;
          c.we && (b(), (g = !0));
          e = A(a, "tr.hs.h", function (l) {
            var m;
            l ? b() : k();
            g = !!l;
            f(((m = {}), (m.trackHash = g), m));
          });
          return (d = {}), (d.trackHash = e), (d.u = k), d;
        }),
        Os = va(function (a, c) {
          ha(c) ? a.push(c) : x(w(T, Wa("push", a)), c);
        }),
        Cd = hb(
          "retryReqs",
          function (a) {
            var c = Sa(a),
              b = c.C("retryReqs", {}),
              d = la(a)(Z);
            x(function (e) {
              var f = e[0];
              e = e[1];
              (!e || !e.time || e.time + 864e5 < d) && delete b[f];
            }, Ma(b));
            c.D("retryReqs", b);
            return b;
          },
          !0
        ),
        Ug = w(Ac, za(0)),
        jl = tb(Ug),
        Ps = [jl("watch"), jl("clmap")],
        Qs = B("g.r", function (a) {
          var c = la(a),
            b = Cd(a),
            d = c(Z),
            e = zc(a);
          return zb(
            function (f, g) {
              var h = g[0],
                k = g[1];
              k &&
                Za(Da(k.resource), Ps) &&
                !k.d &&
                k.ghid &&
                k.ghid !== e &&
                k.time &&
                500 < d - k.time &&
                k.time + 864e5 > d &&
                2 >= k.browserInfo.rqnl &&
                ((k.d = 1),
                (h = {
                  protocol: k.protocol,
                  host: k.host,
                  Aa: k.resource,
                  mi: k.postParams,
                  R: k.params,
                  Ag: k.browserInfo,
                  hj: k.ghid,
                  time: k.time,
                  Sb: Ea(h),
                  Kg: k.counterId,
                  aa: k.counterType,
                }),
                k.telemetry && (h.Ha = k.telemetry),
                f.push(h));
              return f;
            },
            [],
            Ma(b)
          );
        }),
        Rs = B("nb.p", function (a, c) {
          function b(E) {
            l() ||
              ((E = "number" === typeof E ? E : 15e3),
              (y = Jr(a, d(!1), E)),
              m());
          }
          function d(E) {
            return function (N) {
              var K, ka, qa;
              void 0 === N &&
                (N = ((K = {}), (K.ctx = {}), (K.callback = F), K));
              if (E || (!r && !k.Id)) {
                r = !0;
                m();
                y && y();
                var Ka = p(Z);
                K = (Ea(k.C("lastHit")) || 0) < Ka - 18e5;
                var zd = 0.1 > Math.random();
                k.D("lastHit", Ka);
                Ka = Ha(((ka = {}), (ka.nb = 1), (ka.cl = t), (ka.ar = 1), ka));
                ka = Dd(c);
                ka = {
                  J: ((qa = {}), (qa["page-url"] = ka.url || U(a).href), qa),
                  K: Ka,
                  M: { force: E },
                };
                qa = jc(a, M(c)).warn;
                !N.callback && N.ctx && qa("nbnc");
                (qa = E || K || zd) ||
                  ((qa = a.location.href),
                  (K = a.document.referrer),
                  (qa = !(qa && K ? bj(qa) === bj(K) : !qa && !K)));
                if (qa)
                  return (qa = g(ka, c)), Rc(a, "l.o.l", qa, N.callback, N.ctx);
              }
              return null;
            };
          }
          var e,
            f,
            g = ua(a, "n", c),
            h = M(c),
            k = Yc(a, c.id),
            l = v(v(h, Ze(a)), w(na, Q("accurateTrackBounce"))),
            m = v(((e = {}), (e.accurateTrackBounce = !0), e), Fe(a, h)),
            p = la(a),
            q = p(Z),
            r = !1,
            t = 0,
            y;
          pa(c, function (E) {
            t = E.Yg - q;
          });
          c.He && b(c.He);
          e = ((f = {}), (f.notBounce = d(!0)), (f.u = y), f);
          e.accurateTrackBounce = b;
          return e;
        }),
        Wp = va(dc)("(ym-disable-clickmap|ym-clickmap-ignore)"),
        Ss = B("clm.p", function (a, c) {
          if (id(a)) return F;
          var b = ua(a, "m", c),
            d = M(c),
            e = la(a),
            f = e(Z),
            g = v(v(d, Ze(a)), w(na, Q("clickmap"))),
            h,
            k = null;
          d = A(a, "clm.p.c", function (l) {
            var m = g();
            if (m) {
              var p = H(a),
                q = p.C("cls", { hc: 0, x: 0, y: 0 });
              p.D("cls", {
                hc: q.hc + 1,
                x: q.x + l.clientX,
                y: q.y + l.clientY,
              });
              p = "object" === typeof m ? m : {};
              q = p.filter;
              m = p.isTrackHash || !1;
              var r = C(function (y) {
                return ("" + y).toUpperCase();
              }, p.ignoreTags || []);
              X(h) && (h = p.quota || null);
              var t = !!p.quota;
              l = {
                element: Xp(a, l),
                position: Yi(a, l),
                button: Yp(l),
                time: e(Z),
              };
              p = U(a).href;
              if (Vp(a, l, k, r, q)) {
                if (t) {
                  if (!h) return;
                  --h;
                }
                r = Me(a, l.element);
                q = r[0];
                r = r[1];
                t = eg(a, l.element);
                q = [
                  "rn",
                  Ua(a),
                  "x",
                  Math.floor((65535 * (l.position.x - t.left)) / (q || 1)),
                  "y",
                  Math.floor((65535 * (l.position.y - t.top)) / (r || 1)),
                  "t",
                  Math.floor((l.time - f) / 100),
                  "p",
                  nf(a, l.element),
                  "X",
                  l.position.x,
                  "Y",
                  l.position.y,
                ];
                q = L(":", q);
                m && (q += ":wh:1");
                Up(a, p, q, b, c);
                k = l;
              }
            }
          });
          return ja(a).F(n(a, "document"), ["click"], d);
        }),
        Ts = B("trigger.in", function (a, c) {
          c.cg && Rb(a, D([a, "yacounter" + c.id + "inited"], Oq), "t.i");
        }),
        Us = B("c.m.p", function (a, c) {
          var b,
            d = M(c);
          return (b = {}), (b.clickmap = v(Fe(a, d), Tp)), b;
        }),
        zi = v("form", ic),
        Bp = v("form", kb),
        Sp = u(w(cb, tb(pa)(Q("settings.form_goals"))), cb),
        Vs = B("s.f.i", function (a, c) {
          var b,
            d = [],
            e = [],
            f = ja(a);
          d.push(f.F(a, ["click"], A(a, "s.f.c", D([a, c, e], Rp))));
          d.push(
            f.F(
              a,
              ["submit"],
              A(a, "s.f.e", function (g) {
                var h = n(g, "target");
                g = n(g, "isTrusted");
                Vi(!0, a, c, e, h, g);
              })
            )
          );
          Wi(a, c, "fgi", ((b = {}), (b.id = c.id), b));
          return D([ze, d], x);
        }),
        Ws = B("s.f.i", function (a, c) {
          return pa(c, function (b) {
            var d;
            if (n(b, "settings.button_goals"))
              return (
                (b = ja(a).F(
                  a,
                  ["click"],
                  A(a, "c.t.c", w(D([a, c], df(a, c, "", Qp))))
                )),
                hc(a, c, "gbi", ((d = {}), (d.id = c.id), d))(),
                b
              );
          });
        }),
        Yb,
        Wd,
        Vg,
        ad,
        Fb,
        Rf =
          ((Yb = {}),
          (Yb.transaction_id = "id"),
          (Yb.item_brand = "brand"),
          (Yb.index = "position"),
          (Yb.item_variant = "variant"),
          (Yb.value = "revenue"),
          (Yb.item_category = "category"),
          (Yb.item_list_name = "list"),
          Yb),
        fc =
          ((Wd = {}),
          (Wd.item_id = "id"),
          (Wd.item_name = "name"),
          (Wd.promotion_name = "coupon"),
          Wd),
        Pp = ((Vg = {}), (Vg.promotion_name = "name"), Vg),
        kl =
          ((ad = {}),
          (ad.promotion_name = "name"),
          (ad.promotion_id = "id"),
          (ad.item_id = "product_id"),
          (ad.item_name = "product_name"),
          ad),
        Mp =
          "currencyCode add delete remove purchase checkout detail impressions click promoView promoClick".split(
            " "
          ),
        Np =
          ((Fb = {}),
          (Fb.view_item = { event: "detail", xa: fc, Ja: "products" }),
          (Fb.add_to_cart = { event: "add", xa: fc, Ja: "products" }),
          (Fb.remove_from_cart = { event: "remove", xa: fc, Ja: "products" }),
          (Fb.begin_checkout = { event: "checkout", xa: fc, Ja: "products" }),
          (Fb.purchase = { event: "purchase", xa: fc, Ja: "products" }),
          (Fb.view_item_list = { event: "impressions", xa: fc }),
          (Fb.select_item = { event: "click", Ja: "products", xa: fc }),
          (Fb.view_promotion = {
            event: "promoView",
            Ja: "promotions",
            xa: kl,
          }),
          (Fb.select_promotion = {
            event: "promoClick",
            Ja: "promotions",
            xa: kl,
          }),
          Fb),
        Ui = B("dl.w", function (a, c, b) {
          function d() {
            var g = n(a, c);
            (e = P(g) && Ed(a, g, b)) || (f = R(a, d, 1e3, "ec.dl"));
          }
          var e,
            f = 0;
          d();
          return function () {
            return ma(a, f);
          };
        }),
        Xs = B("p.e", function (a, c) {
          var b = ya(a, c);
          if (b) {
            var d = H(a);
            b = b.params;
            var e = A(a, "h.ee", D([a, M(c), b], Kp));
            return c.pd
              ? (d.D("ecs", 0), Ti(a, c.pd, e))
              : pa(c, function (f) {
                  if ((f = n(f, "settings.ecommerce")) && ha(f))
                    return d.D("ecs", 1), Ti(a, f, e);
                });
          }
        }),
        Qi = u(function (a) {
          return L("[^\\d<>]*", a.split(""));
        }),
        gn = u(function (a) {
          return new RegExp(Qi(a), "g");
        }),
        Hp = /\S/,
        Ji = v(
          [
            "style",
            "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit",
          ],
          ld
        ),
        ll = u(function (a) {
          return id(a) || !gd(a);
        }),
        Ys = B("phc.h", function (a, c) {
          if (!dk(a) && !ll(a))
            return pa(c, function (b) {
              if (!n(b, "settings.phchange")) {
                var d = Sa(a),
                  e =
                    fb(U(a).search, "_ym_hide_phones=1") ||
                    d.C("_ym_hide_phones", 0);
                b = n(b, "settings.phhide");
                e && !b && ((b = ["*"]), d.D("_ym_hide_phones", 1));
                b && Bi(a, c, b);
              }
            })["catch"](A(a, "phc.hs"));
        }),
        ml = u(function (a) {
          a = U(a);
          a = ir(a.search.substring(1));
          a["_ym_status-check"] = a["_ym_status-check"] || "";
          a._ym_lang = a._ym_lang || "ru";
          return a;
        }),
        Ei = w(ml, Q("_ym_status-check"), Ea),
        Zs = w(ml, Q("_ym_lang")),
        yp = /^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/,
        zp =
          /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|by|kz|com|com\.tr)\/?$/,
        Di = gb(
          /^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/
        ),
        Dp = ["form", "button", "phone", "status"],
        Wg = [],
        Ap = u(
          function (a, c, b) {
            x(w(Kc([a, c, b]), na), Wg);
            if (b.inline) {
              c = Ci(b);
              var d = b.data;
              b = b.id;
              yi(a, c, void 0 === b ? "" : b, void 0 === d ? "" : d);
            } else
              b.resource &&
                Di(b.resource) &&
                ((a._ym__postMessageEvent = c),
                (a._ym__inpageMode = b.inpageMode),
                (a._ym__initMessage = b.initMessage),
                Ep(a, b.resource));
          },
          function (a, c, b) {
            return b.id;
          }
        ),
        $s = B("cs.init", function (a, c) {
          var b,
            d = Ei(a);
          if (d && c.id === d && "0" === c.aa) {
            var e = Ci(((b = {}), (b.lang = Zs(a)), (b.fileId = "status"), b));
            R(a, D([a, e, "" + d], yi), 0, "cs");
          }
        }),
        at = B("suid.int", function (a, c) {
          var b;
          return (
            (b = {}),
            (b.setUserID = function (d, e, f) {
              if (ha(d) || gc(a, d)) {
                var g = ya(a, c);
                d = ld(["__ym", "user_id", d]);
                g.params(d, e || F, f);
              } else jc(a, M(c)).error("wuid");
            }),
            b
          );
        }),
        Qc = { position: "absolute" },
        xi = { position: "fixed" },
        Of = { borderRadius: "50%" },
        bt = hb("siteStatistics", function (a, c) {
          if (!dk(a))
            return Lb(a)(
              Pa(
                F,
                D(
                  [
                    c,
                    w(
                      Q("settings.sm"),
                      za(1),
                      D([D([a, c.id], wp), F], td),
                      na
                    ),
                  ],
                  pa
                )
              )
            );
        }),
        ct = B("up.int", function (a, c) {
          var b;
          return (
            (b = {}),
            (b.userParams = A(a, "up.c", function (d, e, f) {
              var g,
                h = ya(a, c),
                k = jc(a, M(c)).warn;
              h
                ? oa(d)
                  ? ((d = ((g = {}), (g.__ymu = d), g)),
                    (g = h.params) && g(d, e || F, f))
                  : k("wup")
                : k("nci");
            })),
            b
          );
        }),
        dt = /[\*\.\?\(\)]/g,
        et = u(function (a, c, b) {
          var d;
          try {
            var e = b.replace("\\s", " ").replace(dt, "");
            jc(a, "").warn("nnw", ((d = {}), (d.name = e), d));
          } catch (f) {}
        }, cb),
        ft = B("r.nn", function (a) {
          Qe(a) &&
            Ed(a, xg, function (c) {
              c.oa.F(function (b) {
                et(a, b[1], b[0]);
                xg.splice(100);
              });
            });
        }),
        gt = B("e.a.p", function (a, c) {
          var b,
            d = ya(a, c);
          d = D(
            [
              w(T, Da(!0)),
              Ba(C(v(d, n), ["clickmap", "trackLinks", "accurateTrackBounce"])),
            ],
            C
          );
          c.Qg && d();
          return (b = {}), (b.enableAll = d), b;
        }),
        ht = u(Hc, M),
        it = B("fpi", function (a) {
          var c = wd(a);
          if (c && !a.document.hidden) {
            var b = H(a).Ga;
            b("fpe", 1);
            var d = ja(a).F(
              a,
              ["visibilitychange", "webkitvisibilitychange"],
              function () {
                a.document.hidden && (b("fht", c.now()), d());
              }
            );
          }
        }),
        nl = u(function (a) {
          a = n(a, "console");
          var c = n(a, "log");
          c = Ve("log", c) ? I(c, a) : F;
          var b = n(a, "warn");
          b = Ve("warn", b) ? I(b, a) : c;
          var d = n(a, "error");
          a = Ve("error", d) ? I(d, a) : c;
          return { log: c, error: a, warn: b };
        }),
        jt = B(
          "cr",
          hb("conr", function (a) {
            if (Qe(a)) {
              var c = Uj(a),
                b = nl(a);
              Ed(a, c, function (d) {
                d.oa.F(function (e) {
                  if ("log" === e.name) {
                    var f = C(function (g) {
                      if (ha(g)) {
                        var h = e.data.variables;
                        var k = gl[g];
                        if (k) {
                          if (h) {
                            Ye.lastIndex = 0;
                            for (var l = Ye.exec(k); l; ) {
                              g = l[1];
                              if (vb(h, g)) {
                                var m = g.length + 2;
                                l = l.index;
                                k =
                                  "" +
                                  k.substring(0, l) +
                                  h[g] +
                                  k.substring(l + m, k.length);
                                Ye.lastIndex = m + l;
                              }
                              l = Ye.exec(k);
                            }
                          }
                          h = k;
                        } else h = g;
                      } else h = g;
                      return h;
                    }, e.data.args);
                    b[e.data.type].apply(b, f);
                  }
                });
              });
            }
          })
        ),
        Gb,
        kt =
          ((Gb = {}),
          (Gb.ecomeo = "Ecommerce data should be an object"),
          (Gb.ecomgei =
            "Ecommerce data should contain 'goods' non-empty array"),
          (Gb.ecomgi =
            "All items in 'goods' should be objects and contain 'id' or 'name' field"),
          (Gb.ecompi =
            "Purchase object should contain string or number 'id' field"),
          (Gb.pcs =
            "Warning: content has only {chars} chars. Required {limit}"),
          (Gb.pdf = "Publisher content info found: "),
          (Gb.pfi =
            "Warning: invalid value {value} in {itemField} in field {field}, this item will be ignored"),
          (Gb.ps = 'Publishers analytics schema "{schema}"'),
          (Gb.w2mo =
            "MutationObserver is overridden, webvisor is not guaranteed to work in this environment"),
          Gb),
        lt = v("add", we),
        mt = v("remove", we),
        nt = v("detail", we),
        ot = v("purchase", we),
        pt =
          "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats PassportSDK".split(
            " "
          ),
        mf = u(function (a) {
          var c = Jk(a);
          a = c.hg;
          if (!c.hf) return !1;
          c = Wa("indexOf", a);
          c = Za(w(c, za(-1), Ec), pt);
          var b = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a),
            d = /YaBrowser\/[\d.]+/.test(a),
            e = /Mobile/.test(a);
          return c || b || (d && e) || (!/Safari/.test(a) && e);
        }),
        Sm = u(function (a) {
          var c = rb(a);
          return c ? fb(c, "YangoEats") || ue(a) : !1;
        }),
        qt = /\sYptp\/\d\.(\d+)\s/,
        rt = u(function (a) {
          var c;
          a: {
            if ((c = rb(a)) && (c = qt.exec(c)) && 1 < c.length) {
              c = Ea(c[1]);
              break a;
            }
            c = 0;
          }
          return (50 <= c && 99 >= c) || rf(a, 79) ? !1 : !Td(a) || mf(a);
        }),
        ol = wa(String.prototype.repeat, "repeat"),
        Sh = ol
          ? function (a, c) {
              return ol.call(a, c);
            }
          : tp,
        Mh = v(!0, function (a, c, b, d) {
          b = c.length && (b - d.length) / c.length;
          if (0 >= b) return d;
          c = Sh(c, b);
          return a ? c + d : d + c;
        }),
        st = B("p.cd", function (a) {
          if (ud(a) || Se(a)) {
            var c = Sa(a);
            if (fa(c.C("jn"))) {
              c.D("jn", !1);
              var b = a.chrome || Ge(a) ? function () {} : /./;
              a = nl(a);
              b.toString = function () {
                c.D("jn", !0);
                return "Yandex.Metrika counter is initialized";
              };
              a.log("%c%s", "color: inherit", b);
            }
          }
        }),
        tt = u(function (a) {
          a = n(a, "navigator.plugins");
          return !!(a && ab(a) && Za(w(Q("name"), gb(/Chrome PDF Viewer/)), a));
        }),
        nc = va(function (a, c) {
          return H(c).C(a, null);
        }),
        sp = { "*": "+", "-": "/", Zi: "=", "+": "*", "/": "-", "=": "_" },
        ut = u(function (a) {
          return V(n(a, "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null;
        }),
        vt = u(v("panoramaId", ve)),
        wt = u(function (a) {
          return ve("pubcid.org", a) || ve("_pubCommonId", a);
        }),
        xt = u(v("_sharedid", ve)),
        yt = u(function (a, c) {
          if (c.Sa) return null;
          var b = Lc(a, "").C("_ga");
          return b && ed(he(b));
        }, w(cb, M)),
        op = [
          ["domainLookupEnd", "domainLookupStart"],
          ["connectEnd", "connectStart"],
          ["responseStart", "requestStart"],
          ["responseEnd", "responseStart"],
          ["fetchStart", "navigationStart"],
          ["redirectEnd", "redirectStart"],
          [
            function (a, c) {
              return n(c, "redirectCount") || n(a, "navigation.redirectCount");
            },
          ],
          ["domInteractive", "domLoading"],
          ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
          ["domComplete", "navigationStart"],
          ["loadEventStart", "navigationStart"],
          ["loadEventEnd", "loadEventStart"],
          ["domContentLoadedEventStart", "navigationStart"],
        ],
        ub,
        np = [
          ["domainLookupEnd", "domainLookupStart"],
          ["connectEnd", "connectStart"],
          ["responseStart", "requestStart"],
          ["responseEnd", "responseStart"],
          ["fetchStart"],
          ["redirectEnd", "redirectStart"],
          ["redirectCount"],
          ["domInteractive", "responseEnd"],
          ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
          ["domComplete"],
          ["loadEventStart"],
          ["loadEventEnd", "loadEventStart"],
          ["domContentLoadedEventStart"],
        ],
        ui =
          ((ub = {}),
          (ub.responseEnd = 1),
          (ub.domInteractive = 1),
          (ub.domContentLoadedEventStart = 1),
          (ub.domContentLoadedEventEnd = 1),
          (ub.domComplete = 1),
          (ub.loadEventStart = 1),
          (ub.loadEventEnd = 1),
          (ub.unloadEventStart = 1),
          (ub.unloadEventEnd = 1),
          (ub.secureConnectionStart = 1),
          ub),
        qp = u(Ad),
        kp = u(Hc),
        lp = u(function (a) {
          var c = n(a, "webkitRequestFileSystem");
          if (V(c) && !ud(a))
            return new J(I(c, a, 0, 0))
              .then(function () {
                var d = n(a, "navigator.storage") || {};
                return d.estimate ? d.estimate() : {};
              })
              .then(function (d) {
                return (d = d.quota) && 12e7 > d ? !0 : !1;
              })
              ["catch"](v(!0, T));
          if (Te(a))
            return (c = n(a, "navigator.serviceWorker")), J.resolve(X(c));
          c = n(a, "openDatabase");
          if (Ge(a) && V(c)) {
            var b = !1;
            try {
              c(null, null, null, null);
            } catch (d) {
              b = !0;
            }
            return J.resolve(b);
          }
          return J.resolve(
            !n(a, "indexedDB") &&
              (n(a, "PointerEvent") || n(a, "MSPointerEvent"))
          );
        }),
        zt = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
        At = u(function (a, c) {
          var b = wc(a),
            d = U(a).search.match(zt);
          return d && 2 <= d.length
            ? ((d = d[2]), c.Sa || b.D("turbo_uid", d), d)
            : (b = b.C("turbo_uid"))
            ? b
            : "";
        }),
        Bt = B("pa.plgn", function (a, c) {
          var b = le(a, c);
          b &&
            b.Y.F(
              ["pluginInfo"],
              A(a, "c.plgn", function () {
                var d = H(a);
                d.D("cmc", d.C("cmc", 0) + 1);
                return bk(c);
              })
            );
        }),
        Qb,
        nb,
        Lm =
          ((Qb = {}),
          (Qb.am = "com.am"),
          (Qb.tr = "com.tr"),
          (Qb.ge = "com.ge"),
          (Qb.il = "co.il"),
          (Qb["\u0440\u0444"] = "ru"),
          (Qb["xn--p1ai"] = "ru"),
          (Qb["\u0431\u0435\u043b"] = "by"),
          (Qb["xn--90ais"] = "by"),
          Qb),
        pl = {
          "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
          "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
          "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/,
        },
        Mm =
          ((nb = {}),
          (nb.ka = "ge"),
          (nb.ro = "md"),
          (nb.tg = "tj"),
          (nb.tk = "tm"),
          (nb.et = "ee"),
          (nb.hy = "com.am"),
          (nb.he = "co.li"),
          (nb.ky = "kg"),
          (nb.be = "by"),
          (nb.tr = "com.tr"),
          (nb.kk = "kz"),
          nb),
        ql = /^https?:\/\//,
        Ct = {
          1882689622: 1,
          2318205080: 1,
          3115871109: 1,
          3604875100: 1,
          339366994: 1,
          2890452365: 1,
          849340123: 1,
          173872646: 1,
          2343947156: 1,
          655012937: 1,
          3724710748: 1,
          3364370932: 1,
          1996539654: 1,
          2065498185: 1,
          823651274: 1,
          12282461: 1,
          1555719328: 1,
          1417229093: 1,
          138396985: 1,
          3015043526: 1,
        },
        rl = u(function () {
          return O(
            function (a, c) {
              var b = sc(c + "/tag.js");
              a[b] = 1;
              return a;
            },
            {},
            [
              "mc.yandex.ru/metrika",
              "mc.yandex.com/metrika",
              "cdn.jsdelivr.net/npm/yandex-metrica-watch",
            ]
          );
        }),
        Dt = u(function (a) {
          a = wd(a);
          if (!a || !V(a.getEntriesByType)) return null;
          a = a.getEntriesByType("resource");
          var c = rl();
          return (a = Mb(function (b) {
            b = b.name.replace(ql, "").split("?")[0];
            b = sc(b);
            return c[b];
          }, a))
            ? xb(a.transferSize)
            : null;
        }),
        fp = "ar:1:pv:1:v:" + Ca.$b + ":vf:" + Wc.version,
        gp = Ca.Qa + "//" + ec + "/watch/" + Ca.lg,
        sl = {},
        Et = B("exps.int", function (a, c) {
          var b;
          return (
            (b = {}),
            (b.experiments = function (d, e, f) {
              var g, h;
              void 0 === e && (e = F);
              if (d && 0 < d.length) {
                var k = ua(a, "e", c),
                  l = Dd(c).url;
                d = k(
                  {
                    K: Ha(((g = {}), (g.ex = 1), (g.ar = 1), g)),
                    J:
                      ((h = {}),
                      (h["page-url"] = l || U(a).href),
                      (h.exp = d),
                      h),
                  },
                  c
                );
                return Rc(a, "exps.s", d, e, f);
              }
            }),
            b
          );
        }),
        qh = [],
        Ft = B("p.fh", function (a, c) {
          var b, d;
          void 0 === c && (c = !0);
          var e = Sa(a),
            f = la(a),
            g = e.C("wasSynced"),
            h = { id: 3, aa: "0" };
          return c && g && g.time + 864e5 > f(Z)
            ? J.resolve(g)
            : ua(
                a,
                "f",
                h
              )(
                {
                  K: Ha(((b = {}), (b.pv = 1), b)),
                  J:
                    ((d = {}),
                    (d["page-url"] = U(a).href),
                    (d["page-ref"] = a.document.referrer),
                    d),
                },
                h
              )
                .then(function (k) {
                  var l;
                  k =
                    ((l = {}),
                    (l.time = f(Z)),
                    (l.params = n(k, "settings")),
                    (l.bkParams = n(k, "userData")),
                    l);
                  e.D("wasSynced", k);
                  return k;
                })
                ["catch"](A(a, "f.h"));
        }),
        Gt = va(function (a, c) {
          0 === parseFloat(n(c, "settings.c_recp")) &&
            (a.Qd.D("ymoo" + a.ma, a.$f(pb)),
            a.kd && a.kd.destruct && a.kd.destruct());
        }),
        pf = w(Q("settings.pcs"), za("1")),
        Wo = [
          [
            ["'(-$&$&$'", 30102, 0],
            ["'(-$&$&$'", 29009, 0],
          ],
          [
            ["oWdZ[nc[jh_YW$Yec", 30103, 1],
            ["oWdZ[nc[jh_YW$Yec", 29010, 1],
          ],
        ],
        Xo = [
          [["oWdZ[nc[jh_YW$Yec", 30103, 1]],
          [["oWdZ[nc[jh_YW$Yec", 29010, 1]],
        ],
        ti = { J: { t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k' } },
        To = { Yf: 60, error: 15 },
        So = { Yf: 5, error: 1 },
        ri = { id: 42822899, aa: "0" },
        tl = ec.split("."),
        Ht = tl.pop(),
        Xg = L(".", tl),
        Km = u(function (a) {
          a = U(a).hostname.split(".");
          return a[a.length - 1];
        }),
        Jm = u(function (a) {
          return (
            -1 !==
            U(a).hostname.search(
              /(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/
            )
          );
        }),
        It =
          /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|.*\.yandex|turbopages\.org|turbo\.site|diplodoc\.(com|tech)|datalens\.tech)$/,
        ke = u(function (a) {
          a = U(a).hostname;
          var c = !1;
          a && (c = -1 !== a.search(It));
          return c;
        }),
        Jt =
          /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
        Zo = u(function (a) {
          a = U(a).hostname;
          var c = !1;
          a && (c = -1 !== a.search(Jt));
          return c;
        }),
        ul = Ca.Qa + "//" + ec + "/metrika",
        pe = ul + "/metrika_match.html",
        $e,
        cp = (($e = {}), ($e.s = "p"), ($e["8"] = "i"), $e),
        $o = hb("csp", function (a, c) {
          return ua(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"]);
        }),
        Yg = "et w v z i u vf".split(" "),
        vl = Md("wv"),
        Kt = Md("pub"),
        gi = (function () {
          function a(c, b) {
            this.l = c;
            this.type = b;
          }
          a.isEnabled = function (c) {
            return !!c.JSON;
          };
          a.prototype.Fa = function (c) {
            return xf(wb(this.l, c));
          };
          a.prototype.sb = function (c) {
            var b = c.data;
            "string" !== typeof b && (b = wb(this.l, c.data));
            return b;
          };
          a.prototype.jb = function (c) {
            return encodeURIComponent(c).length;
          };
          a.prototype.ne = function (c, b) {
            for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1)
              e.push(c.slice(f * d, d * (f + 1)));
            return e;
          };
          return a;
        })(),
        No = u(function (a) {
          function c(f, g, h, k) {
            d[0] = g;
            h[k] = e[3];
            h[k + 1] = e[2];
            h[k + 2] = e[1];
            h[k + 3] = e[0];
          }
          function b(f, g, h, k) {
            d[0] = g;
            h[k] = e[0];
            h[k + 1] = e[1];
            h[k + 2] = e[2];
            h[k + 3] = e[3];
          }
          if (
            "undefined" === typeof a.Float32Array ||
            "undefined" === typeof a.Uint8Array
          )
            return Oo;
          var d = new Float32Array([-0]),
            e = new Uint8Array(d.buffer);
          return 128 === e[3] ? b : c;
        }),
        Jo = pi(!1),
        Io = pi(!0),
        ba,
        Jc,
        wl =
          ((ba = {}),
          (ba.mousemove = 0),
          (ba.mouseup = 1),
          (ba.mousedown = 2),
          (ba.click = 3),
          (ba.scroll = 4),
          (ba.windowblur = 5),
          (ba.windowfocus = 6),
          (ba.focus = 7),
          (ba.blur = 8),
          (ba.eof = 9),
          (ba.selection = 10),
          (ba.change = 11),
          (ba.input = 12),
          (ba.touchmove = 13),
          (ba.touchstart = 14),
          (ba.touchend = 15),
          (ba.touchcancel = 16),
          (ba.touchforcechange = 17),
          (ba.zoom = 18),
          (ba.resize = 19),
          (ba.keystroke = 20),
          (ba.deviceRotation = 21),
          (ba.fatalError = 22),
          (ba.hashchange = 23),
          (ba.stylechange = 24),
          (ba.articleInfo = 25),
          (ba.publishersHeader = 26),
          (ba.pageData = 27),
          (ba.mutationAdd = 28),
          (ba.mutationRemove = 29),
          (ba.mutationTextChange = 30),
          (ba.mutationAttributesChange = 31),
          ba),
        xl =
          ((Jc = {}),
          (Jc.page = 0),
          (Jc.event = 1),
          (Jc.mutation = 2),
          (Jc.publishers = 3),
          (Jc.activity = 4),
          Jc),
        fi = (function () {
          function a(c, b) {
            var d,
              e,
              f = this;
            this.isSync = !1;
            this.Db = [];
            this.Sg =
              ((d = {}),
              (d.ad = "mutationAdd"),
              (d.re = "mutationRemove"),
              (d.tc = "mutationTextChange"),
              (d.ac = "mutationAttributesChange"),
              (d.page = "pageData"),
              d);
            this.Ng =
              ((e = {}),
              (e.ad = "addedNodesMutation"),
              (e.re = "removedNodesMutation"),
              (e.tc = "textChangeMutation"),
              (e.ac = "attributesChangeMutation"),
              (e.touchmove = "touchEvent"),
              (e.touchstart = "touchEvent"),
              (e.touchend = "touchEvent"),
              (e.touchforcechange = "touchEvent"),
              (e.touchcancel = "touchEvent"),
              (e.resize = "resizeEvent"),
              (e.scroll = "scrollEvent"),
              (e.change = "changeEvent"),
              (e.mousemove = "mouseEvent"),
              (e.mousedown = "mouseEvent"),
              (e.mouseup = "mouseEvent"),
              (e.click = "mouseEvent"),
              (e.focus = "focusEvent"),
              (e.blur = "focusEvent"),
              (e.deviceRotation = "deviceRotationEvent"),
              (e.zoom = "zoomEvent"),
              (e.keystroke = "keystrokesEvent"),
              (e.selection = "selectionEvent"),
              (e.stylechange = "styleChangeEvent"),
              (e.fatalError = "fatalErrorEvent"),
              (e.pageData = "page"),
              e);
            this.lh = function (g) {
              var h = g.type;
              return g.event ||
                ("publishersHeader" !== h && "articleInfo" !== h)
                ? { type: xl[h], event: wl[f.Sg[g.event] || g.event] }
                : { type: xl.publishers, event: wl[h] };
            };
            this.qf = function (g) {
              var h = !X(g.partNum),
                k = f.lh(g);
              k = {
                stamp: g.stamp,
                type: k.type,
                event: k.event,
                frameId: g.frameId,
                chunk: h ? g.data : void 0,
                partNum: g.partNum,
                end: g.end,
              };
              !h &&
                g.data &&
                (h = f.Ng[g.event] || g.event || g.type) &&
                (k[h] = g.data);
              return k;
            };
            this.l = c;
            this.type = b;
          }
          a.prototype.Fa = function (c, b) {
            var d = this;
            void 0 === b && (b = !1);
            var e = ac(c, this.qf),
              f = this.isSync || b ? Infinity : 10;
            e = fd(this.l, e, f);
            var g = [e];
            this.Db.push(e);
            return e(
              Jg(function (h) {
                h = ii(d.l, yo, { ri: h });
                h = fd(d.l, h, f, mg);
                g.push(h);
                d.Db.push(h);
                return h;
              })
            )(
              Jg(function (h) {
                h = hi(d.l, h.slice(-4));
                h = fd(d.l, h, f, mg);
                g.push(h);
                d.Db.push(h);
                return h;
              })
            )(
              Zk(function (h) {
                h = h[h.length - 1];
                x(function (k) {
                  k = Ee(d.l)(k, d.Db);
                  d.Db.splice(k, 1);
                }, g);
                return h;
              })
            );
          };
          a.prototype.sb = function (c) {
            return ii(this.l, ji, this.qf(c))(ng(F));
          };
          a.prototype.jb = function (c) {
            return c[0];
          };
          a.prototype.ne = function (c, b) {
            for (
              var d = hi(this.l, c)(ng(F)),
                e = Math.ceil(d.length / b),
                f = [],
                g = 0;
              g < b;
              g += 1
            )
              f.push(d.slice(g * e, e * (g + 1)));
            return f;
          };
          a.isEnabled = function (c) {
            var b = Qe(c),
              d = !1;
            try {
              d =
                (d = 2 === new c.Blob(["\u00e4"]).size) &&
                2 === new c.Blob([new c.Uint8Array([1, 2])]).size;
            } catch (e) {}
            return (
              !b && d && !(!c.Uint8Array || !n(c, "Uint8Array.prototype.slice"))
            );
          };
          return a;
        })(),
        yl =
          "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(
            " "
          ),
        Lt =
          "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(
            " "
          ),
        Mt = (function () {
          function a(c, b, d, e, f) {
            var g = this;
            this.Dc = !1;
            this.meta = {};
            this.scroll = { x: 0, y: 0 };
            this.involvedTime = this.nf = 0;
            this.Rd = this.wf = "";
            this.da = [];
            this.le = this.Ia = 0;
            this.wb = { h: 0, w: 0 };
            this.buffer = [];
            this.mg = Lt;
            this.flush = function () {
              g.le = R(g.l, g.flush, 2500);
              var h = g.zd();
              if (g.buffer.length || h) {
                var k = Ue(g.buffer);
                h && k.push(h);
                g.wf = g.Rd;
                g.ia.Fa(k)(
                  Pa(A(g.l, "p.b.st"), function (l) {
                    l && g.Ub(l);
                  })
                );
              }
            };
            this.Ub = e;
            this.ia = d;
            this.Zb = I(this.Zb, this);
            this.zd = I(this.zd, this);
            this.flush = I(this.flush, this);
            this.l = c;
            this.ma = f;
            this.Rc = b;
            this.Md = "pai" + b.id;
            this.Ib();
            this.Oe = ja(this.l);
            this.time = la(this.l);
            this.eg();
            this.Cd = H(this.l);
            this.Ae = null;
          }
          a.prototype.start = function () {
            this.le = R(this.l, this.flush, 2500);
            if (!this.Dc) {
              this.Ai();
              var c = this.Cd.C(this.Md, []),
                b = !c.length;
              c.push(I(this.Qh, this));
              this.Cd.Ga(this.Md, c);
              b && this.Gf();
              this.Ae = ja(this.l).F(this.l, ["click"], I(this.yi, this));
              this.Zb({ type: "page", target: this.l });
            }
          };
          a.prototype.stop = function () {
            this.Oi();
            this.Dc = !0;
            this.flush();
            ma(this.l, this.le);
          };
          a.prototype.kf = function (c) {
            return ic("html", this.l, c) !== this.l.document.documentElement;
          };
          a.prototype.Gf = function () {
            var c = this;
            A(this.l, "p.ic" + this.Rc.id, function () {
              if (!c.Dc) {
                var b = c.Cd.C(c.Md),
                  d = c.Rc.Xg();
                x(function (e) {
                  var f = C(function (g) {
                    return z({}, g);
                  }, d);
                  V(e) && e(f);
                }, b);
                c.Ia = R(c.l, I(c.Gf, c), 1e3, "p");
              }
            })();
          };
          a.prototype.Qh = function (c) {
            this.Dc || (this.Pi(c), this.Qi(), this.Dg());
          };
          a.prototype.Ig = function (c, b) {
            return (c.ie || 0) <= (b.ie || 0) ? b : c;
          };
          a.prototype.yi = function (c) {
            if (this.da.length) {
              c = $i(c);
              var b = U(this.l).hostname,
                d;
              if ((d = c)) d = De(c.hostname) === De(b);
              d &&
                ((c = O(this.Ig, this.da[0], this.da).id),
                (b = zc(this.l)),
                Yc(this.l, this.ma.split(":")[0]).D("pai", c + "-" + b));
            }
          };
          a.prototype.Zb = function (c) {
            var b = this;
            A(this.l, "p.ec." + this.Rc.id, function () {
              var d, e;
              try {
                var f = c.type;
                var g = c.target;
              } catch (p) {
                return;
              }
              var h = "page" === f;
              if ("scroll" === f || h) {
                var k = [
                  b.l,
                  b.l.document,
                  b.l.document.documentElement,
                  Fc(b.l),
                ];
                G(g, k) && b.Ib();
              }
              ("resize" === f || h) && b.eg();
              f = b.time(Z);
              var l = Math.min(f - b.nf, 5e3);
              b.involvedTime += Math.round(l);
              b.nf = f;
              if (b.meta && b.scroll && b.wb) {
                var m = b.wb.h * b.wb.w;
                b.da = C(function (p) {
                  var q = z({}, p),
                    r = b.meta[q.id],
                    t = nd(p.Cb);
                  if (!r || b.kf(q.element) || !t) return q;
                  p = b.l.Math;
                  r = p.max((b.scroll.y + b.wb.h - r.y) / r.height, 0);
                  var y = t.height * t.width,
                    E = b.wb,
                    N = t.top,
                    K = t.bottom,
                    ka = t.left,
                    qa = E.w;
                  E = E.h;
                  var Ka = b.l.Math;
                  t =
                    Ka.min(Ka.max(t.right, 0), qa) - Ka.min(Ka.max(ka, 0), qa);
                  t *= Ka.min(Ka.max(K, 0), E) - Ka.min(Ka.max(N, 0), E);
                  q.ie = t / m;
                  q.visibility = t / y;
                  if (0.9 <= q.visibility || 0.1 <= q.ie) q.involvedTime += l;
                  q.maxScrolled = p.round(1e4 * r) / 1e4;
                  return q;
                }, b.da);
                sb(
                  b.l,
                  ((d = {}),
                  (d.name = "publishers"),
                  (d.counterKey = b.ma),
                  (d.data =
                    ((e = {}),
                    (e.involvedTime = b.involvedTime),
                    (e.contentItems = C(function (p) {
                      var q;
                      return z(((q = {}), (q.contentElement = p.Cb), q), p);
                    }, b.da)),
                    e)),
                  d)
                );
              }
            })();
          };
          a.prototype.Pi = function (c) {
            var b = C(function (d) {
              return d.id;
            }, this.da);
            this.da = this.da.concat(
              ia(function (d) {
                return !G(d.id, b);
              }, c)
            );
          };
          a.prototype.eg = function () {
            var c = gg(this.l) || Ld(this.l);
            this.wb = { w: c[0], h: c[1] };
          };
          a.prototype.Qi = function () {
            var c = this;
            A(this.l, "p.um." + this.Rc.id, function () {
              var b = [];
              c.Ib();
              c.meta = zb(
                function (d, e) {
                  var f;
                  if (c.kf(e.element)) b.push(e), delete d[e.id];
                  else {
                    var g =
                      ((f = {}),
                      (f.id = e.id),
                      (f.involvedTime = Math.max(e.involvedTime, 0)),
                      (f.maxScrolled = e.maxScrolled || 0),
                      (f.chars = e.update ? e.update("chars") || 0 : 0),
                      f);
                    e.Cb &&
                      (f = nd(e.Cb)) &&
                      ((g.x = Math.max(Math.round(f.left) + c.scroll.x, 0)),
                      (g.y = Math.max(Math.round(f.top) + c.scroll.y, 0)),
                      (g.width = Math.round(f.width)),
                      (g.height = Math.round(f.height)));
                    d[e.id] = g;
                  }
                  return d;
                },
                {},
                c.da
              );
              x(function (d) {
                d = Ee(c.l)(d, c.da);
                c.da.splice(d, 1);
              }, b);
            })();
          };
          a.prototype.zd = function () {
            var c,
              b,
              d = C(v(this.meta, n), ca(this.meta));
            return d.length && ((this.Rd = wb(this.l, d)), this.wf !== this.Rd)
              ? ((c = {}),
                (c.type = "publishersHeader"),
                (c.data =
                  ((b = {}),
                  (b.articleMeta = d || []),
                  (b.involvedTime = this.involvedTime),
                  b)),
                c)
              : null;
          };
          a.prototype.Dg = function () {
            var c = this;
            if (this.da.length) {
              var b = C(
                function (d) {
                  var e,
                    f = O(
                      function (g, h) {
                        d[h] && (g[h] = d[h]);
                        return g;
                      },
                      {},
                      c.mg
                    );
                  d.Rf = !0;
                  return (
                    (e = {}),
                    (e.type = "articleInfo"),
                    (e.stamp = f.stamp),
                    (e.data = f),
                    e
                  );
                },
                ia(function (d) {
                  return !d.Rf;
                }, this.da)
              );
              b.length &&
                ((this.buffer = this.buffer.concat(b)),
                Jb(this.l, this.ma, ["pdf", b]));
            }
          };
          a.prototype.Ai = function () {
            this.Oe.F(this.l, yl, this.Zb);
          };
          a.prototype.Oi = function () {
            this.Ae && this.Ae();
            this.Oe.vb(this.l, yl, this.Zb);
          };
          a.prototype.Ib = function () {
            this.scroll = {
              x:
                this.l.pageXOffset ||
                n(this.l, "document.documentElement.scrollLeft") ||
                0,
              y:
                this.l.pageYOffset ||
                n(this.l, "document.documentElement.scrollLeft") ||
                0,
            };
          };
          return a;
        })(),
        Xd,
        Zg = ((Xd = {}), (Xd[1] = 500), (Xd[2] = 500), (Xd[3] = 0), Xd),
        Nt = ["topics", "rubric", "authors"],
        $g = (function () {
          function a(c, b) {
            var d,
              e = this;
            this.id = "a";
            this.Hd = !1;
            this.Fb = {};
            this.rb = {
              "schema.org":
                "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(
                  " "
                ),
              sf: ["article"],
            };
            this.ye = ((d = {}), (d.Answer = 3), (d.Review = 2), d);
            this.Re = u(
              function (f, g, h) {
                var k;
                Jb(
                  e.l,
                  e.ma,
                  "pfi",
                  ((k = {}), (k.field = f), (k.itemField = g), (k.value = h), k)
                );
              },
              function (f, g, h) {
                return "" + f + g + h;
              }
            );
            this.Si = function (f) {
              Nt.forEach(function (g) {
                f[g] &&
                  (f[g] = f[g].reduce(function (h, k) {
                    var l = k.name,
                      m = k.position;
                    if (!l) return e.Re(g, "name", l), h;
                    if ("string" === typeof m) {
                      l = me(m);
                      if (null === l || e.l.isNaN(l))
                        return e.Re(g, "position", m), h;
                      k.position = l;
                    }
                    h.push(k);
                    return h;
                  }, []));
              });
              return f;
            };
            this.Jg = u(function (f, g) {
              var h;
              Jb(
                e.l,
                e.ma,
                ["pcs", g],
                ((h = {}), (h.chars = g.chars), (h.limit = Zg[g.type]), h)
              );
            });
            this.l = c;
            this.root = bc(c);
            this.ma = b;
          }
          a.prototype.La = function (c) {
            return c.element;
          };
          a.prototype.Ye = function (c, b) {
            var d = this,
              e;
            A(this.l, "P.s." + b, function () {
              e = d.Fb[b].call(d, c);
            })();
            return e;
          };
          a.prototype.ni = function (c) {
            var b = z({}, c);
            this.Hd &&
              !b.id &&
              G(c.type, [3, 2]) &&
              ((c = L(", ", C(Q("name"), b.authors || []))),
              (b.pageTitle = c + ": " + b.pageTitle));
            b.pageTitle || (b.pageTitle = this.uh(b.Cb));
            b.pageUrlCanonical ||
              ((c = b.id),
              (b.pageUrlCanonical = (
                "string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)
              )
                ? b.id
                : this.sh()));
            b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
            return b;
          };
          a.prototype.Ca = function (c) {
            var b = this,
              d = {},
              e = this.La(c);
            if (!e) return null;
            d.type = c.type;
            x(function (g) {
              d[g] = b.Ye(c, g);
            }, ca(this.Fb));
            var f = la(this.l);
            d.stamp = f(Qj);
            d.element = c.element;
            d.Cb = e;
            d = this.Si(this.ni(d));
            d.id = d.id ? sc(d.id) : 1;
            d.update = function (g) {
              return b.La(c) ? b.Ye(c, g) : void 0;
            };
            return d;
          };
          a.prototype.uh = function (c) {
            for (var b = 1; 5 >= b; b += 1) {
              var d = db(oc("h" + b, c));
              if (d) return d;
            }
          };
          a.prototype.sh = function () {
            var c = oc('[rel="canonical"]', this.root);
            if (c) return c.href;
          };
          a.prototype.cf = function () {
            return 1;
          };
          a.prototype.uc = function () {
            return [];
          };
          a.prototype.Xg = function () {
            var c = this,
              b = this.uc(),
              d = 1;
            return zb(
              function (e, f) {
                var g = c.Ca({ element: f, type: c.cf(f) }) || [];
                P(g) || (g = [g]);
                g = zb(
                  function (h, k) {
                    var l = h.values,
                      m = h.ef;
                    k && k.chars > Zg[k.type] && !G(k.id, m)
                      ? (l.push(k), m.push(k.id))
                      : k && k.chars <= Zg[k.type] && c.Jg(k.id, k);
                    return { values: l, ef: m };
                  },
                  { values: [], ef: C(Q("id"), e) },
                  g
                ).values;
                return e.concat(
                  C(function (h) {
                    var k;
                    h = z(
                      ((k = { index: d, Rf: !1 }), (k.involvedTime = 0), k),
                      h
                    );
                    d += 1;
                    return h;
                  }, g)
                );
              },
              [],
              b
            );
          };
          return a;
        })(),
        zl = (function (a) {
          function c() {
            var b,
              d = (null !== a && a.apply(this, arguments)) || this;
            d.id = "j";
            d.Hd = !0;
            d.Le = L(",", [
              'script[type="application/ld+json"]',
              'script[type="application/json+ld"]',
              'script[type="ld+json"]',
              'script[type="json+ld"]',
            ]);
            d.Fb =
              ((b = {}),
              (b.id = function (e) {
                var f = e.data["@id"];
                e = e.data.mainEntity || e.data.mainEntityOfPage;
                !f && oa(e) && (f = e["@id"]);
                return f;
              }),
              (b.chars = function (e) {
                var f = e.data;
                return ha(f.text) ? f.text.length : Kb(this.La(e)).length;
              }),
              (b.authors = function (e) {
                e = e.data;
                var f = [];
                f = f.concat(this.sc(e, "author"));
                f = f.concat(this.sc(e.mainEntity, "author"));
                return f.concat(this.sc(e.mainEntityOfPage, "author"));
              }),
              (b.pageTitle = function (e) {
                var f = e.data,
                  g = f.headline || "";
                f.alternativeHeadline && (g += " " + f.alternativeHeadline);
                "" === g &&
                  (f.name
                    ? (g = f.name)
                    : f.itemReviewed && (g = f.itemReviewed));
                3 === e.type && oa(f.parentItem) && (g = f.parentItem.text);
                return g;
              }),
              (b.updateDate = function (e) {
                return e.data.dateModified || "";
              }),
              (b.publicationDate = function (e) {
                return e.data.datePublished || "";
              }),
              (b.pageUrlCanonical = function (e) {
                return e.data.url;
              }),
              (b.topics = function (e) {
                return this.sc(e.data, "about", ["name", "alternateName"]);
              }),
              (b.rubric = function (e) {
                var f = this,
                  g = this.La(e);
                e = Ba(
                  C(function (h) {
                    h = ob(f.l, Kb(h));
                    if (oa(h) || P(h)) {
                      var k = f.Ze(h);
                      if (k)
                        return O(
                          function (l, m) {
                            return l
                              ? l
                              : oa(m) && "BreadcrumbList" === m["@type"]
                              ? m
                              : l;
                          },
                          null,
                          k
                        );
                      if ("BreadcrumbList" === h["@type"]) return h;
                    }
                    return null;
                  }, [e.element].concat(
                    kb(
                      this.Le,
                      document.body === g ? document.documentElement : g
                    )
                  ))
                );
                return e.length && ((e = e[0].itemListElement), P(e))
                  ? Ba(
                      C(function (h) {
                        return oa(h) &&
                          h.item &&
                          oa(h.item) &&
                          !f.l.isNaN(h.position)
                          ? {
                              name: h.item.name || h.name,
                              position: h.position,
                            }
                          : null;
                      }, e)
                    )
                  : [];
              }),
              b);
            return d;
          }
          La(c, a);
          c.prototype.sc = function (b, d, e) {
            void 0 === e && (e = ["name"]);
            if (!b || !b[d]) return [];
            b = P(b[d]) ? b[d] : [b[d]];
            b = Ba(
              C(function (f) {
                return f
                  ? "string" === typeof f
                    ? f
                    : O(
                        function (g, h) {
                          return g || "" + f[h];
                        },
                        "",
                        e
                      )
                  : null;
              }, b)
            );
            return C(function (f) {
              var g;
              return (g = {}), (g.name = f), g;
            }, b);
          };
          c.prototype.La = function (b) {
            var d = b.element,
              e = b.data || {};
            b = e["@id"];
            var f = e.url;
            e = null;
            f && ha(f) && (e = this.Qe(f));
            !e && b && ha(b) && (e = this.Qe(b));
            e ||
              ((e = b = d.parentNode),
              !ic("head", this.l, d) && b && 0 !== Kb(b).length) ||
              (e = this.l.document.body);
            return e;
          };
          c.prototype.Qe = function (b) {
            try {
              var d = Oc(this.l, b).hash;
              if (d) {
                var e = oc(d, this.l.document.body);
                if (e) return e;
              }
            } catch (f) {}
            return null;
          };
          c.prototype.Xd = function (b) {
            return this.ye[b["@type"]] || 1;
          };
          c.prototype.Ca = function (b) {
            var d = this,
              e = b.element,
              f = b.data;
            if (
              !f &&
              ((f = ob(this.l, Kb(e))),
              !f || (!/schema\.org/.test(f["@context"]) && !P(f)))
            )
              return null;
            var g = this.Ze(f);
            if (g)
              return C(function (k) {
                return oa(k) && G(k["@type"], d.rb["schema.org"])
                  ? a.prototype.Ca.call(d, {
                      element: e,
                      data: k,
                      type: d.Xd(k),
                    })
                  : null;
              }, g);
            b.data = f;
            if ("QAPage" === b.data["@type"]) {
              var h = b.data.mainEntity || b.data.mainEntityOfPage;
              if (!h) return null;
            }
            "Question" === b.data["@type"] && (h = b.data);
            return h
              ? ((b = Kd(v(h, n), ["acceptedAnswer", "suggestedAnswer"])),
                C(function (k) {
                  var l;
                  if (!oa(k) || !G(k["@type"], d.rb["schema.org"])) return null;
                  k = {
                    element: e,
                    type: d.Xd(k),
                    data: z(((l = {}), (l.parentItem = h), l), k),
                  };
                  return a.prototype.Ca.call(d, k);
                }, b))
              : G(b.data["@type"], this.rb["schema.org"])
              ? a.prototype.Ca.call(this, z(b, { type: this.Xd(b.data) }))
              : null;
          };
          c.prototype.uc = function () {
            return kb(this.Le, this.root);
          };
          c.prototype.Ze = function (b) {
            if (P(b)) return b;
            if (b && P(b["@graph"])) return b["@graph"];
          };
          return c;
        })($g),
        ah = (function (a) {
          function c() {
            var b,
              d = (null !== a && a.apply(this, arguments)) || this;
            d.id = "s";
            d.Hd = !0;
            d.Ni = Wa(
              "exec",
              new RegExp("schema.org\\/(" + L("|", ca(d.ye)) + ")$")
            );
            d.Fb =
              ((b = {}),
              (b.id = function (e) {
                e = e.element;
                var f = ib(this.l, e, "identifier");
                return f
                  ? db(f)
                  : (f = ib(this.l, e, "mainEntityOfPage")) &&
                    f.getAttribute("itemid")
                  ? f.getAttribute("itemid")
                  : null;
              }),
              (b.chars = function (e) {
                var f = 0;
                e = e.element;
                for (
                  var g = [
                      "articleBody",
                      "reviewBody",
                      "recipeInstructions",
                      "description",
                      "text",
                    ],
                    h = 0;
                  h < g.length;
                  h += 1
                ) {
                  var k = ib(this.l, e, g[h]);
                  if (k) {
                    f = db(k).length;
                    break;
                  }
                }
                e = Kb(e);
                0 === f && e && (f += e.length);
                return f;
              }),
              (b.topics = function (e) {
                var f = this,
                  g = Sd(this.l, e.element, "about");
                return C(function (h) {
                  var k = { name: db(h) };
                  if ((g = ib(f.l, h, "name"))) k.name = db(g);
                  return k;
                }, g);
              }),
              (b.rubric = function (e) {
                var f = this;
                (e = oc(
                  '[itemtype$="schema.org/BreadcrumbList"]',
                  e.element
                )) ||
                  (e = oc(
                    '[itemtype$="schema.org/BreadcrumbList"]',
                    this.root
                  ));
                return e
                  ? C(function (g) {
                      return {
                        name: db(ib(f.l, g, "name")),
                        position: db(ib(f.l, g, "position")),
                      };
                    }, Sd(this.l, e, "itemListElement"))
                  : [];
              }),
              (b.updateDate = function (e) {
                return (e = ib(this.l, e.element, "dateModified")) ? qk(e) : "";
              }),
              (b.publicationDate = function (e) {
                return (e = ib(this.l, e.element, "datePublished"))
                  ? qk(e)
                  : "";
              }),
              (b.pageUrlCanonical = function (e) {
                e = Sd(this.l, e.element, "url");
                if (e.length) {
                  var f = e[0];
                  return f.href ? f.href : db(e);
                }
                return null;
              }),
              (b.pageTitle = function (e) {
                var f = "",
                  g = e.element,
                  h = ib(this.l, g, "headline");
                h && (f += db(h));
                (h = ib(this.l, g, "alternativeHeadline")) &&
                  (f += " " + db(h));
                "" === f &&
                  ((h = ib(this.l, g, "name")) ||
                    (h = ib(this.l, g, "itemReviewed")),
                  h && (f += db(h)));
                3 === e.type &&
                  (e = ic('[itemtype$="schema.org/Question"]', this.l, g)) &&
                  (e = ib(this.l, e, "text")) &&
                  (f += db(e));
                return f;
              }),
              (b.authors = function (e) {
                var f = this;
                e = Sd(this.l, e.element, "author");
                return C(function (g) {
                  var h,
                    k = ((h = {}), (h.name = ""), h);
                  /.+schema.org\/(Person|Organization)/.test(
                    g.getAttribute("itemtype") || ""
                  ) &&
                    (h = ib(f.l, g, "name")) &&
                    (k.name = db(h));
                  k.name ||
                    (k.name =
                      g.getAttribute("content") ||
                      Kb(g) ||
                      g.getAttribute("href"));
                  return k;
                }, e);
              }),
              b);
            return d;
          }
          La(c, a);
          c.prototype.cf = function (b) {
            b = b.getAttribute("itemtype") || "";
            return (b = this.Ni(b)) ? this.ye[b[1]] : 1;
          };
          c.prototype.Ca = function (b) {
            return b.element && Kb(b.element).length
              ? a.prototype.Ca.call(this, b)
              : null;
          };
          c.prototype.uc = function () {
            var b = L(
              ",",
              C(function (d) {
                return '[itemtype$="schema.org/' + d + '"]';
              }, this.rb["schema.org"])
            );
            return kb(b, this.root);
          };
          return c;
        })($g),
        Al = (function (a) {
          function c(b, d) {
            var e,
              f = a.call(this, b, d) || this;
            f.id = "o";
            f.Fb =
              ((e = {}),
              (e.chars = function (g) {
                g = this.La(g);
                return Kb(g).length;
              }),
              (e.authors = function (g) {
                return this.vd(g.data.author);
              }),
              (e.pageTitle = function (g) {
                return this.yc(g.data.title) || "";
              }),
              (e.updateDate = function (g) {
                return this.yc(g.data.modified_time);
              }),
              (e.publicationDate = function (g) {
                return this.yc(g.data.published_time);
              }),
              (e.pageUrlCanonical = function (g) {
                return this.yc(g.data.url);
              }),
              (e.rubric = function (g) {
                return this.vd(g.data.section);
              }),
              (e.topics = function (g) {
                return this.vd(g.data.tag);
              }),
              e);
            f.Rg = new RegExp("^(og:)?((" + L("|", f.rb.sf) + "):)?");
            return f;
          }
          La(c, a);
          c.prototype.vd = function (b) {
            var d;
            return b
              ? P(b)
                ? C(function (e) {
                    var f;
                    return (f = {}), (f.name = e ? "" + e : null), f;
                  }, b)
                : [((d = {}), (d.name = b ? "" + b : null), d)]
              : [];
          };
          c.prototype.yc = function (b) {
            return P(b) ? (b.length ? "" + b[0] : null) : b ? "" + b : null;
          };
          c.prototype.uc = function () {
            var b = kb('meta[property="og:type"]', this.l.document.body);
            return [this.l.document.head].concat(b);
          };
          c.prototype.kh = function (b) {
            var d = this,
              e = b.element,
              f = {},
              g = this.La(b);
            e = kb("meta[property]", e === this.l.document.head ? e : g);
            if (e.length)
              x(function (h) {
                try {
                  if (
                    h.parentNode === g ||
                    h.parentNode === d.l.document.head
                  ) {
                    var k = h.getAttribute("property").replace(d.Rg, ""),
                      l = db(h);
                    f[k]
                      ? P(f[k])
                        ? f[k].push(l)
                        : (f[k] = [f[k], l])
                      : (f[k] = l);
                  }
                } catch (m) {
                  vd(d.l, "og.ed", m);
                }
              }, e);
            else return null;
            return G(f.type, this.rb.sf) ? z(b, { data: f }) : null;
          };
          c.prototype.La = function (b) {
            b = b.element;
            var d = this.l.document;
            return b === d.head ? d.body : b.parentNode;
          };
          c.prototype.Ca = function (b) {
            return (b = this.kh(b)) ? a.prototype.Ca.call(this, b) : null;
          };
          return c;
        })($g),
        Yd = {};
      zl && (Yd.json_ld = zl);
      ah && ((Yd.schema = ah), (Yd.microdata = ah));
      Al && (Yd.opengraph = Al);
      var Ot = B("p.p", function (a, c) {
          function b(m) {
            var p = z({}, l);
            p.$.ba = m;
            return f(p, c)["catch"](A(a, "s.ww.p"));
          }
          var d,
            e = ei(a, "9", "8");
          if (!Na("querySelectorAll", a.document.querySelectorAll) || !e)
            return J.resolve();
          var f = ua(a, "p", c),
            g = Ha(),
            h = Yc(a, c.id),
            k = h.C("pai");
          k && (h.Eb("pai"), g.D("pai", k));
          var l = { J: ((d = {}), (d["wv-type"] = e.type), d), K: g, $: {} };
          return pa(
            c,
            A(a, "ps.s", function (m) {
              var p;
              if ((m = n(m, "settings.publisher.schema"))) {
                ck(c) && (m = "microdata");
                var q = Yd[m];
                if (q && e) {
                  var r = M(c);
                  q = new q(a, r);
                  q = new Mt(a, q, e, b, r);
                  q.start();
                  Jb(a, r, "ps", ((p = {}), (p.schema = m), p));
                  return I(q.stop, q);
                }
              }
            })
          );
        }),
        Pt = (function () {
          function a(c, b) {
            this.type = "0";
            this.l = c;
            this.ih = b;
          }
          a.prototype.Fa = function (c) {
            return xf(Kd(I(this.sb, this), c));
          };
          a.prototype.sb = function (c, b) {
            var d = this,
              e = [],
              f = this.ih(this.l, b && b.type, c.type);
            f &&
              (e = Kd(function (g) {
                return g({ l: d.l, na: c }) || [];
              }, f));
            return e;
          };
          a.prototype.jb = function (c) {
            return c.length;
          };
          a.prototype.ne = function (c) {
            return [c];
          };
          a.prototype.isEnabled = function () {
            return !0;
          };
          return a;
        })(),
        Bl = (function () {
          function a(c, b, d) {
            this.Me = 0;
            this.Yd = 1;
            this.Zc = 5e3;
            this.l = c;
            this.ia = b;
            this.Ub = d;
          }
          a.prototype.Uc = function () {
            this.Me = R(
              this.l,
              w(I(this.flush, this), I(this.Uc, this)),
              this.Zc,
              "b.f"
            );
          };
          a.prototype.send = function (c, b) {
            var d = this.Ub(c, b || [], this.Yd);
            this.Yd += 1;
            return d;
          };
          a.prototype.push = function () {};
          a.prototype.flush = function () {};
          return a;
        })(),
        Nn = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.buffer = [];
            b.ng = 7500;
            b.Zc = 3e4;
            b.Uc();
            return b;
          }
          La(c, a);
          c.prototype.push = function (b, d) {
            var e = this.ia.sb(b, d);
            sa(this.buffer, e);
            this.ia.jb(this.buffer) > this.ng && this.flush();
          };
          c.prototype.flush = function () {
            var b = this.buffer;
            b.length && (this.send(b), (this.buffer = []));
          };
          return c;
        })(Bl),
        bo = /opera mini/i,
        Zh = ["phone", "email"],
        Cl =
          "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(
            " "
          ),
        Zn = /^[\w\u0410-\u042f\u0430-\u044f]$/,
        $n = [65, 90],
        ao = [97, 122],
        Xn =
          "color radio checkbox date datetime-local email month number password range search tel text time url week".split(
            " "
          ),
        Vn = new RegExp("(" + L("|", Cl) + ")", "i"),
        Un = new RegExp("(" + L("|", Zh) + ")", "i"),
        rk = ["password", "passwd", "pswd"],
        Wn = new RegExp(
          "(" +
            L(
              "|",
              Cl.concat(
                "\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(
                  " "
                )
              )
            ) +
            ")",
          "i"
        ),
        Va = "metrikaId_" + Math.random(),
        vc = { counter: 0 },
        Nr = u(function () {
          var a;
          return (
            (a = {}),
            (a.A = 1),
            (a.ABBR = 2),
            (a.ACRONYM = 3),
            (a.ADDRESS = 4),
            (a.APPLET = 5),
            (a.AREA = 6),
            (a.B = 7),
            (a.BASE = 8),
            (a.BASEFONT = 9),
            (a.BDO = 10),
            (a.BIG = 11),
            (a.BLOCKQUOTE = 12),
            (a.BODY = 13),
            (a.BR = 14),
            (a.BUTTON = 15),
            (a.CAPTION = 16),
            (a.CENTER = 17),
            (a.CITE = 18),
            (a.CODE = 19),
            (a.COL = 20),
            (a.COLGROUP = 21),
            (a.DD = 22),
            (a.DEL = 23),
            (a.DFN = 24),
            (a.DIR = 25),
            (a.DIV = 26),
            (a.DL = 27),
            (a.DT = 28),
            (a.EM = 29),
            (a.FIELDSET = 30),
            (a.FONT = 31),
            (a.FORM = 32),
            (a.FRAME = 33),
            (a.FRAMESET = 34),
            (a.H1 = 35),
            (a.H2 = 36),
            (a.H3 = 37),
            (a.H4 = 38),
            (a.H5 = 39),
            (a.H6 = 40),
            (a.HEAD = 41),
            (a.HR = 42),
            (a.HTML = 43),
            (a.I = 44),
            (a.IFRAME = 45),
            (a.IMG = 46),
            (a.INPUT = 47),
            (a.INS = 48),
            (a.ISINDEX = 49),
            (a.KBD = 50),
            (a.LABEL = 51),
            (a.LEGEND = 52),
            (a.LI = 53),
            (a.LINK = 54),
            (a.MAP = 55),
            (a.MENU = 56),
            (a.META = 57),
            (a.NOFRAMES = 58),
            (a.NOSCRIPT = 59),
            (a.OBJECT = 60),
            (a.OL = 61),
            (a.OPTGROUP = 62),
            (a.OPTION = 63),
            (a.P = 64),
            (a.PARAM = 65),
            (a.PRE = 66),
            (a.Q = 67),
            (a.S = 68),
            (a.SAMP = 69),
            (a.SCRIPT = 70),
            (a.SELECT = 71),
            (a.SMALL = 72),
            (a.SPAN = 73),
            (a.STRIKE = 74),
            (a.STRONG = 75),
            (a.STYLE = 76),
            (a.SUB = 77),
            (a.SUP = 78),
            (a.TABLE = 79),
            (a.TBODY = 80),
            (a.TD = 81),
            (a.TEXTAREA = 82),
            (a.TFOOT = 83),
            (a.TH = 84),
            (a.THEAD = 85),
            (a.TITLE = 86),
            (a.TR = 87),
            (a.TT = 88),
            (a.U = 89),
            (a.UL = 90),
            (a.VAR = 91),
            (a.NOINDEX = 100),
            a
          );
        }),
        Kr = [17, 18, 38, 32, 39, 15, 11, 7, 1],
        Qt = (function () {
          var a =
            "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(
              " "
            );
          return {
            gj: new RegExp("(" + L("|", a) + ")", "i"),
            pj: new RegExp(
              "(" +
                L(
                  "|",
                  a.concat(
                    "\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(
                      ";"
                    )
                  )
                ) +
                ")",
              "i"
            ),
            ej: /ym-record-keys/i,
            Yh: "\u2022",
            oj: 88,
          };
        })(),
        wk = Uc(v(Qt.Yh, T)),
        pd = !0,
        Dg = "",
        Eg = !1,
        Fg = !0,
        Gg = !1,
        Sn = va(function (a, c) {
          var b = D([a, "efv." + c.event], A);
          c.O = C(w(T, b), c.O);
          return c;
        }),
        Dl = u(function (a) {
          var c = [],
            b = [],
            d = [];
          a.document.attachEvent &&
            !a.opera &&
            (c.push(Df), b.push(Qr), b.push(Rr));
          a.document.addEventListener ? c.push(uk) : (b.push(tk), d.push(uk));
          return Rn(
            a,
            [
              { target: a, type: "window", event: "beforeunload", O: [F] },
              { target: a, type: "window", event: "unload", O: [F] },
              { event: "click", O: [We] },
              { event: "dblclick", O: [We] },
              { event: "mousedown", O: [We] },
              { event: "mouseup", O: [Tr] },
              { event: "keydown", O: [Ur] },
              { event: "keypress", O: [Vr] },
              { event: "copy", O: [yk] },
              { event: "blur", O: c },
              { event: "focusin", O: b },
              { event: "focusout", O: d },
            ]
              .concat(
                !a.document.attachEvent || a.opera
                  ? [
                      { target: a, type: "window", event: "focus", O: [Xh] },
                      { target: a, type: "window", event: "blur", O: [Df] },
                    ]
                  : []
              )
              .concat(
                a.document.addEventListener
                  ? [
                      { event: "focus", O: [tk] },
                      { event: "change", O: [vk] },
                      { event: "submit", O: [Ak] },
                    ]
                  : [
                      { type: "formInput", event: "change", O: [vk] },
                      { type: "form", event: "submit", O: [Ak] },
                    ]
              )
          );
        }),
        Pn = u(function (a) {
          return Fc(a)
            ? [{ target: a, type: "document", event: "mouseleave", O: [Wr] }]
            : [];
        }),
        Rt = ["submit", "beforeunload", "unload"],
        St = u(function (a, c) {
          var b = c(a);
          return O(
            function (d, e) {
              d[e.type + ":" + e.event] = e.O;
              return d;
            },
            {},
            b
          );
        }),
        Tt = v(Dl, function (a, c, b, d) {
          return St(c, a)[b + ":" + d] || [];
        }),
        Qn = /^\s*function submit\(\)/,
        Ut = B("fw.p", function (a, c) {
          var b;
          if (!(b = c.Og || !c.xb)) {
            var d = H(a),
              e = !1;
            b = d.C("hitParam", {});
            var f = M(c);
            b[f] && ((d = d.C("counters", {})), (e = de(c.aa) && !d[f]));
            b[f] = 1;
            b = e;
          }
          if (b) return J.resolve(F);
          b = new Pt(a, Tt);
          return Mn(a, c, b, Dl, Rt);
        }),
        bh,
        El =
          ((bh = (function (a) {
            function c(b, d, e, f) {
              void 0 === f && (f = 0);
              d = a.call(this, b, d, e) || this;
              d.ve = 0;
              d.Ab = 0;
              d.ue = 0;
              d.buffer = [];
              d.Zc = 2e3;
              d.Y = md(b);
              d.Uc();
              d.ue = f;
              return d;
            }
            La(c, a);
            c.prototype.We = function (b) {
              return Ba(this.Y.T("ag", b));
            };
            c.prototype.Ve = function (b, d) {
              var e = this;
              b(
                Pa(A(this.l, "wv2.b.st"), function (f) {
                  e.send(f, d);
                })
              );
            };
            c.prototype.zi = function (b, d) {
              var e = this;
              ma(this.l, this.Me);
              var f = Math.ceil(this.ia.jb(d) / 63e4),
                g = this.ia.ne(d, f);
              x(function (h, k) {
                var l,
                  m = z(
                    {},
                    b,
                    ((l = {}),
                    (l.data = h),
                    (l.partNum = k + 1),
                    (l.end = k + 1 === f),
                    (l.partsTotal = g.length),
                    l)
                  );
                l = e.ia.Fa([m], !1);
                e.Ve(l, [m]);
              }, g);
              this.Uc();
            };
            c.prototype.send = function (b, d) {
              var e = this;
              this.Y.T("se", d);
              return a.prototype.send.call(this, b, d).then(T, function () {
                e.Y.T("see", d);
              });
            };
            c.Xe = function (b, d, e, f, g) {
              c.cd["" + b + d] ||
                (this.cd[d] = new c(g, f, e, "m" === d ? 31457280 : 0));
              return this.cd[d];
            };
            c.prototype.Ph = function () {
              return this.ue && this.ve >= this.ue;
            };
            c.prototype.push = function (b) {
              var d = this;
              if (!this.Ph()) {
                this.Y.T("p", b);
                var e = this.ia.sb(b),
                  f = this.ia.jb(e);
                7e5 < f
                  ? this.zi(b, e)
                  : ((e = this.We(this.buffer.concat([b]))),
                    (e = zb(
                      function (g, h) {
                        return g + d.ia.jb(d.ia.sb(h));
                      },
                      0,
                      e
                    )),
                    this.Ab + e + f >= 7e5 * 0.7 && this.flush(),
                    this.buffer.push(b),
                    (this.Ab += f));
              }
            };
            c.prototype.F = function (b, d) {
              this.Y.F([b], d);
            };
            c.prototype.ea = function (b, d) {
              this.Y.ea([b], d);
            };
            c.prototype.flush = function (b) {
              var d = this.buffer.concat(this.We(this.buffer));
              d.length &&
                ((this.buffer = []),
                (this.ve += this.Ab),
                (this.Ab = 0),
                (b = this.ia.Fa(d, b)),
                this.Ve(b, d));
            };
            return c;
          })(Bl)),
          (bh.cd = {}),
          bh),
        eb = (function () {
          function a(c, b, d) {
            this.Sh = "wv2.c";
            this.Nb = [];
            this.ga = [];
            this.l = c;
            this.L = Bf(c, this, d, this.Sh);
            this.G = b;
            this.bb = this.G.nh();
            this.start = this.L.H(this.start, "st");
            this.stop = this.L.H(this.stop, "sp");
          }
          a.prototype.start = function () {
            var c = this;
            this.Nb = C(function (b) {
              var d = b[0],
                e = b[2];
              b = I(c.L.H(b[1], d[0]), c);
              return c.bb.F(e || c.l, d, b);
            }, this.ga);
          };
          a.prototype.stop = function () {
            x(na, this.Nb);
          };
          a.prototype.X = function (c) {
            return this.G.sa().X(c);
          };
          return a;
        })(),
        Kn = ["checkbox", "radio"],
        Ln = /pwd|value|password/i,
        ch = Q("location.href"),
        Vt = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.ra = { elements: [], attributes: [] };
            d.index = 0;
            d.Td = d.L.H(d.Td, "o");
            d.ld = d.L.H(d.ld, "io");
            d.$c = d.L.H(d.$c, "ao");
            d.ae = d.L.H(d.ae, "a");
            d.Zd = d.L.H(d.Zd, "at");
            d.ce = d.L.H(d.ce, "r");
            d.$d = d.L.H(d.$d, "c");
            d.oa = new b.MutationObserver(d.Td);
            return d;
          }
          La(c, a);
          c.prototype.start = function () {
            this.oa.observe(this.l.document.documentElement, {
              attributes: !0,
              characterData: !0,
              childList: !0,
              subtree: !0,
              attributeOldValue: !0,
              characterDataOldValue: !0,
            });
          };
          c.prototype.stop = function () {
            this.oa.disconnect();
          };
          c.prototype.$c = function (b) {
            var d = b.target;
            b = b.attributeName;
            var e = Ob(this.l)(d, this.ra.elements);
            -1 === e &&
              ((e = this.ra.elements.push(d) - 1),
              (this.ra.attributes[e] = {}));
            this.ra.attributes[e] || (this.ra.attributes[e] = {});
            e = this.ra.attributes[e];
            var f = d.getAttribute(b);
            e[b] = qe(this.l, d, b, f, this.G.Hb()).value;
          };
          c.prototype.ld = function (b) {
            function d(k) {
              var l = Ob(e.l)(k, f);
              return -1 === l
                ? (f.push(k), (k = { sd: {} }), g.push(k), k)
                : g[l];
            }
            var e = this,
              f = [],
              g = [];
            x(function (k) {
              var l = k.attributeName,
                m = k.removedNodes,
                p = k.oldValue,
                q = k.target,
                r = k.nextSibling,
                t = k.previousSibling;
              switch (k.type) {
                case "attributes":
                  e.$c(k);
                  var y = d(q);
                  y.sd[l] || (y.sd[l] = qe(e.l, q, l, p, e.G.Hb()).value);
                  break;
                case "childList":
                  m &&
                    x(function (E) {
                      y = d(E);
                      y.Te ||
                        z(y, { Te: q, dh: r ? r : void 0, eh: t ? t : void 0 });
                    }, Ga(m));
                  break;
                case "characterData":
                  (y = d(q)), y.Ue || (y.Ue = p);
              }
            }, b);
            var h = this.G.sa();
            x(function (k, l) {
              h.me(k, g[l]);
            }, f);
          };
          c.prototype.Td = function (b) {
            var d = this;
            if (ch(this.l)) {
              var e = this.G.stamp();
              this.ld(b);
              x(function (f) {
                var g = f.addedNodes,
                  h = f.removedNodes,
                  k = f.target;
                switch (f.type) {
                  case "childList":
                    h && h.length && d.ce(Ga(h), e);
                    g && g.length && d.ae(Ga(g), e);
                    break;
                  case "characterData":
                    d.$d(k, e);
                }
              }, b);
              this.Zd(e);
            } else this.stop();
          };
          c.prototype.Zd = function (b) {
            var d = this;
            x(function (e, f) {
              var g = d.wc();
              d.G.V(
                "mutation",
                { index: g, attributes: d.ra.attributes[f], target: d.X(e) },
                "ac",
                b
              );
            }, this.ra.elements);
            this.ra.elements = [];
            this.ra.attributes = [];
          };
          c.prototype.ae = function (b, d) {
            var e = this,
              f = this.wc();
            this.G.sa().Ac({
              nodes: b,
              Tc: function (g) {
                g = C(function (h) {
                  h.node = void 0;
                  return h;
                }, g);
                e.G.V("mutation", { index: f, nodes: g }, "ad", d);
              },
            });
          };
          c.prototype.ce = function (b, d) {
            var e = this,
              f = this.wc(),
              g = this.G.sa(),
              h = C(function (k) {
                var l = g.removeNode(k);
                Ri(e.l, k, function (m) {
                  g.removeNode(m);
                });
                return l;
              }, b);
            this.G.V("mutation", { index: f, nodes: h }, "re", d);
          };
          c.prototype.$d = function (b, d) {
            var e = this.wc();
            this.G.V(
              "mutation",
              { value: b.textContent, target: this.X(b), index: e },
              "tc",
              d
            );
          };
          c.prototype.wc = function () {
            var b = this.index;
            this.index += 1;
            return b;
          };
          return c;
        })(eb),
        Wt = (function () {
          function a(c, b) {
            var d = this;
            this.rc = [];
            this.cb = [];
            this.Sd = 1;
            this.Je = this.Nf = 0;
            this.ya = {};
            this.Lb = {};
            this.Gb = [];
            this.Ed = function (f) {
              return d.cb.length ? G(f, d.cb) : !1;
            };
            this.removeNode = function (f) {
              var g = d.X(f),
                h = Ja(f);
              if (h)
                return (
                  (h = "NR:" + h.toLowerCase()),
                  d.Ed(h) && d.Y.T(h, { data: { node: f, id: g } }),
                  g
                );
            };
            this.ib = function (f) {
              var g = Ja(f);
              if (g) {
                var h = f.__ym_indexer;
                return h
                  ? h
                  : ((h = d.Sd),
                    (f.__ym_indexer = h),
                    (d.Sd += 1),
                    (g = "NA:" + g.toLowerCase()),
                    d.Ed(g) && d.Y.T(g, { data: { node: f, id: h } }),
                    h);
              }
              return null;
            };
            this.Hf = function () {
              d.Nf = R(d.l, w(I(d.Z, d, !1), d.Hf), 50, "i.s");
            };
            this.Ff = function () {
              d.Je = R(d.l, w(I(d.fd, d, !1), d.Ff), 50, "i.g");
            };
            this.ti = function (f) {
              null === d.ya[f] && delete d.ya[f];
            };
            this.l = c;
            var e = Bf(c, this, "i");
            this.Y = md(c);
            this.options = b;
            this.start = e.H(this.start, "st");
            this.stop = e.H(this.stop, "sp");
            this.X = e.H(this.X, "i");
            this.me = e.H(this.me, "o");
            this.Ac = e.H(this.Ac, "a");
            this.removeNode = e.H(this.removeNode, "r");
            this.Z = e.H(this.Z, "s");
            this.fd = e.H(this.fd, "g");
          }
          a.prototype.me = function (c, b) {
            var d = this.ib(c);
            bb(d) || (this.Lb[d] && this.X(c), (this.Lb[d] = b));
          };
          a.prototype.F = function (c, b, d) {
            c = "" + b + c;
            this.cb.push(c);
            this.Ed(c) || this.cb.push(c);
            this.Y.F([c], d);
          };
          a.prototype.ea = function (c, b, d) {
            var e = "" + b + c;
            this.cb = ia(function (f) {
              return f !== e;
            }, this.cb);
            this.Y.ea([e], d);
          };
          a.prototype.start = function () {
            this.Hf();
            this.Ff();
          };
          a.prototype.stop = function () {
            this.flush();
            ma(this.l, this.Je);
            ma(this.l, this.Nf);
            this.rc = [];
            this.Gb = [];
            this.ya = {};
            this.Lb = {};
          };
          a.prototype.Ac = function (c) {
            var b = this,
              d = [],
              e = 0,
              f = { Tc: c.Tc, result: [], Bc: 0, nodes: d };
            this.rc.push(f);
            x(function (g) {
              Ri(b.l, g, function (h) {
                var k = b.ib(h);
                bb(k) ||
                  (d.push(h),
                  b.ya[k] && b.X(h),
                  (b.ya[k] = { node: h, event: f, Li: e }),
                  (e += 1));
              });
            }, c.nodes);
          };
          a.prototype.X = function (c) {
            if (c === this.l) return 0;
            var b = this.ib(c),
              d = this.ya[b],
              e = this.gh(b),
              f = e.Te,
              g = e.sd,
              h = e.Ue,
              k = e.dh,
              l = e.eh;
            if (d) {
              e = d.event;
              d = d.Li;
              var m = ss(this.l) === c;
              k = k || c.nextSibling;
              var p = l || c.previousSibling;
              l = !m && k ? this.ib(k) : null;
              p = !m && p ? this.ib(p) : null;
              m = this.l;
              k = this.options;
              f = this.ib(f || c.parentNode || c.parentElement) || 0;
              var q = g,
                r = void 0;
              void 0 === p && (p = null);
              void 0 === l && (l = null);
              void 0 === q && (q = {});
              void 0 === r && (r = Ja(c));
              if (X(r)) c = void 0;
              else {
                g = {
                  id: b,
                  prev: p !== f ? p : null,
                  next: l !== f ? l : null,
                  parent: f,
                  name: r.toLowerCase(),
                  node: c,
                };
                if (Hf(c)) {
                  if (((h = Hn(c, h)), (g.attributes = {}), (g.content = h)))
                    if ((c = od(m, c)))
                      (g.content = "" !== $a(h) ? Yn(m, h) : h), (g.hidden = c);
                } else
                  (h = In(m, c, k, q, r)),
                    (m = h.mb),
                    (g.attributes = h.yg),
                    m && (g.hidden = m),
                    c.namespaceURI &&
                      fb(c.namespaceURI, "svg") &&
                      (g.namespace = c.namespaceURI);
                c = g;
              }
              if (X(c)) return;
              this.ya[b] = null;
              this.Gb.push(b);
              e.result[d] = c;
              e.Bc += 1;
              e.nodes.length === e.Bc && e.Tc(e.result);
            }
            return b;
          };
          a.prototype.flush = function () {
            this.Z(!0);
          };
          a.prototype.fd = function () {
            if (this.Gb.length) {
              var c = ac(this.Gb, this.ti),
                b = mg(this.l, 30);
              c(b);
            }
          };
          a.prototype.Z = function (c) {
            var b = this;
            if (ch(this.l)) {
              var d = ca(this.ya);
              d = O(
                function (e, f) {
                  b.ya[f] && e.push(b.ya[f].node);
                  return e;
                },
                [],
                d
              );
              d = ac(d, this.X);
              c = c ? Oj(F) : Mj(this.l, 20);
              d(c);
              this.rc = ia(function (e) {
                return e.Bc !== e.result.length;
              }, this.rc);
            }
          };
          a.prototype.gh = function (c) {
            if (bb(c)) return {};
            var b = this.Lb[c];
            return b ? ((this.Lb[c] = null), this.Gb.push(c), b) : {};
          };
          return a;
        })(),
        Xt = ["input", "change", "keyup", "paste", "cut"],
        Yt = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.inputs = {};
            b.od = !1;
            b.Ic = b.L.H(b.Ic, "ii");
            b.Jc = b.L.H(b.Jc, "ir");
            b.Oc = b.L.H(b.Oc, "ri");
            b.Xc = b.L.H(b.Xc, "ur");
            b.Dd = b.L.H(b.Dd, "ce");
            b.zc = b.L.H(b.zc, "vc");
            return b;
          }
          La(c, a);
          c.prototype.start = function () {
            var b = this,
              d = this.G.sa();
            this.od = this.Eg();
            x(function (e) {
              e = e.toLowerCase();
              d.F(e, "NA:", I(b.Ic, b));
              d.F(e, "NR:", I(b.Jc, b));
            }, Gf);
            this.Nb = [
              this.bb.F(this.l.document, Xt, I(this.Dd, this)),
              function () {
                x(function (e) {
                  e = e.toLowerCase();
                  d.ea(e, "NA:", b.Ic);
                  d.ea(e, "NR:", b.Jc);
                }, Gf);
                x(b.Xc, ca(b.inputs));
              },
            ];
          };
          c.prototype.Xc = function (b) {
            var d = this.inputs[b];
            if (d) {
              if (this.od) {
                var e = d.ki;
                d = d.element;
                e && this.l.Object.defineProperty(d, this.xc(d), e);
              }
              delete this.inputs[b];
            }
          };
          c.prototype.Jc = function (b) {
            b && this.Xc(b.data.id);
          };
          c.prototype.Ic = function (b) {
            b && ((b = b.data), this.Oc(b.node, b.id));
          };
          c.prototype.xc = function (b) {
            return Oe(b) ? "checked" : "value";
          };
          c.prototype.Dd = function (b) {
            if ((b = b.target)) {
              var d = this.xc(b);
              this.zc(b[d], b);
            }
          };
          c.prototype.zc = function (b, d) {
            var e = this.X(d),
              f = this.inputs[e];
            if (!f && ((f = this.Oc(f, e)), !f)) return;
            e = f.Gg;
            var g = f.value,
              h = this.xc(d),
              k = !b || G(typeof b, ["string", "boolean", "number"]),
              l = this.G.Hb().Jd;
            k &&
              b !== g &&
              ((g = qe(this.l, d, h, b, this.G.Hb()).value),
              e
                ? this.G.V(
                    "event",
                    { target: this.X(d), checked: !!b },
                    "change"
                  )
                : ((e = Pc(this.l, d, l)),
                  (l = e.fb),
                  this.G.V(
                    "event",
                    { value: g, hidden: e.ob && !l, target: this.X(d) },
                    "change"
                  )),
              (f.value = b));
          };
          c.prototype.Oc = function (b, d) {
            var e = this;
            if (
              !zf(b) ||
              "__ym_input_override_test" === b.getAttribute("class") ||
              this.inputs[d]
            )
              return null;
            var f = Oe(b),
              g = this.xc(b),
              h = { element: b, Gg: f, value: b[g] };
            this.inputs[d] = h;
            this.od &&
              Rb(this.l, function () {
                var k =
                    e.l.Object.getOwnPropertyDescriptor(
                      Object.getPrototypeOf(b),
                      g
                    ) || {},
                  l = e.l.Object.getOwnPropertyDescriptor(b, g) || {},
                  m = z({}, k, l);
                if (Na("((set)?(\\s?" + g + ")?)?", m.set)) {
                  try {
                    e.l.Object.defineProperty(
                      b,
                      g,
                      z({}, m, {
                        configurable: !0,
                        set: function (p) {
                          e.zc(p, this);
                          return m.set.call(this, p);
                        },
                      })
                    );
                  } catch (p) {}
                  h.ki = m;
                }
              });
            return h;
          };
          c.prototype.Eg = function () {
            var b = !0,
              d = yb(this.l)("input");
            try {
              d = yb(this.l)("input");
              d.value = "INPUT_VALUE";
              d.style.setProperty("display", "none", "important");
              d.setAttribute("type", "text");
              d.setAttribute("class", "__ym_input_override_test");
              var e =
                  this.l.Object.getOwnPropertyDescriptor(
                    Object.getPrototypeOf(d),
                    "value"
                  ) || {},
                f = this.l.Object.getOwnPropertyDescriptor(d, "value") || {},
                g = z({}, e, f);
              this.l.Object.defineProperty(
                d,
                "value",
                z({}, g, {
                  configurable: !0,
                  set: function (h) {
                    return g.set.call(d, h);
                  },
                })
              );
              "INPUT_VALUE" !== d.value && (b = !1);
              d.value = "INPUT_TEST";
              "INPUT_TEST" !== d.value && (b = !1);
            } catch (h) {
              b = !1;
            }
            return b;
          };
          return c;
        })(eb),
        Zt = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.Va = {
              width: 0,
              height: 0,
              pageHeight: 0,
              pageWidth: 0,
              orientation: 0,
            };
            b.ga.push([["resize"], b.ii]);
            b.ga.push([["orientationchange"], b.ei]);
            return b;
          }
          La(c, a);
          c.prototype.start = function () {
            a.prototype.start.call(this);
            this.Kf();
          };
          c.prototype.ii = function () {
            var b = this.Bd();
            this.Dh(b) && ((this.Va = b), this.Lf(b));
          };
          c.prototype.ei = function () {
            var b = this.Bd();
            this.Va.orientation !== b.orientation &&
              ((this.Va = b), this.vi(b));
          };
          c.prototype.lf = function (b) {
            return !b.height || !b.width || !b.pageWidth || !b.pageHeight;
          };
          c.prototype.Dh = function (b) {
            return b.height !== this.Va.height || b.width !== this.Va.width;
          };
          c.prototype.Bd = function () {
            var b = this.G.hb(),
              d = Ld(this.l),
              e = d[0];
            d = d[1];
            b = b.Ad();
            return {
              width: e,
              height: d,
              pageWidth: b ? b.scrollWidth : 0,
              pageHeight: b ? b.scrollHeight : 0,
              orientation: this.G.hb().ph(),
            };
          };
          c.prototype.vi = function (b) {
            var d;
            void 0 === d && (d = this.G.stamp());
            this.G.V(
              "event",
              { width: b.width, height: b.height, orientation: b.orientation },
              "deviceRotation",
              d
            );
          };
          c.prototype.Lf = function (b, d) {
            void 0 === d && (d = this.G.stamp());
            this.G.V(
              "event",
              {
                width: b.width,
                height: b.height,
                pageWidth: b.pageWidth,
                pageHeight: b.pageHeight,
              },
              "resize",
              d
            );
          };
          c.prototype.Kf = function () {
            var b = this.Bd();
            this.lf(b)
              ? R(this.l, I(this.Kf, this), 300)
              : (this.lf(this.Va) && (this.Va = b), this.Lf(b, 0));
          };
          return c;
        })(eb),
        af = (function () {
          function a(c) {
            this.index = 0;
            this.ub = {};
            this.l = c;
          }
          a.prototype.nc = function (c, b, d) {
            void 0 === d && (d = {});
            var e = la(this.l),
              f = this.index;
            this.index += 1;
            this.ub[f] = { Ia: 0, Tb: !1, ah: c, bd: [], Nd: e(Z) };
            var g = this;
            return function () {
              var h = Oa(arguments),
                k = d.eb && !g.ub[f].Tb,
                l = g.ub[f];
              ma(g.l, l.Ia);
              l.bd = h;
              l.Tb = !0;
              var m = e(Z);
              if (k || m - l.Nd >= b) c.apply(void 0, h), (l.Nd = m);
              l.Ia = R(
                g.l,
                function () {
                  k || (c.apply(void 0, h), (l.Nd = e(Z)));
                  l.Tb = !1;
                  l.bd = [];
                },
                b,
                "th"
              );
            };
          };
          a.prototype.flush = function () {
            var c = this;
            x(function (b) {
              var d = c.ub[b],
                e = d.Ia,
                f = d.ah,
                g = d.bd;
              d.Tb && ((c.ub[b].Tb = !1), f.apply(void 0, g), ma(c.l, e));
            }, ca(this.ub));
          };
          return a;
        })(),
        $t = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.Zf = [];
            d.De = { x: 0, y: 0 };
            d.Ba = new af(b);
            d.Mc = d.L.H(d.Mc, "o");
            d.ga.push([["scroll"], d.ji]);
            return d;
          }
          La(c, a);
          c.prototype.start = function () {
            a.prototype.start.call(this);
            this.G.V(
              "event",
              {
                x: Math.max(this.l.scrollX, 0),
                y: Math.max(this.l.scrollY, 0),
                page: !0,
                target: -1,
              },
              "scroll",
              0
            );
          };
          c.prototype.stop = function () {
            a.prototype.stop.call(this);
            this.Ba.flush();
          };
          c.prototype.ji = function (b) {
            if (this.G.hb().gf()) this.Mc(b);
            else {
              var d = b.target,
                e = ia(function (f) {
                  return f[0] === d;
                }, this.Zf).pop();
              e
                ? (e = e[1])
                : ((e = this.Ba.nc(I(this.Mc, this), 100, { eb: !0 })),
                  this.Zf.push([d, e]));
              e(b);
            }
          };
          c.prototype.Mc = function (b) {
            var d = this.G.hb().Ad();
            b = b.target;
            var e = this.Ib(b);
            d = d === b || this.l === b || this.l.document === b;
            var f = Math.max(e.left, 0);
            e = Math.max(e.top, 0);
            if (d) {
              if (this.De.x === f && this.De.y === e) return;
              this.De = { x: f, y: e };
            }
            this.G.V(
              "event",
              { x: f, y: e, page: d, target: d ? -1 : this.X(b) },
              "scroll"
            );
          };
          c.prototype.Ib = function (b) {
            var d = { left: 0, top: 0 };
            if (!b) return d;
            if (b.window === b)
              return { top: b.scrollY || 0, left: b.scrollX || 0 };
            var e = b.ownerDocument || b,
              f = b.documentElement,
              g = e.defaultView || e.parentWindow,
              h = e.body;
            return b !== e || ((b = this.G.hb().Ad()), b)
              ? G(b, [f, h])
                ? {
                    top: b.scrollTop || g.scrollY,
                    left: b.scrollLeft || g.scrollX,
                  }
                : { top: b.scrollTop || 0, left: b.scrollLeft || 0 }
              : d;
          };
          return c;
        })(eb),
        au = ["mousemove", "mousedown", "mouseup", "click"],
        bu = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.ga.push([au, d.bi]);
            d.Ba = new af(b);
            d.Hc = d.L.H(d.Hc, "n");
            d.Fi = d.L.H(d.Ba.nc(I(d.Hc, d), 100), "t");
            return d;
          }
          La(c, a);
          c.prototype.stop = function () {
            a.prototype.stop.call(this);
            this.Ba.flush();
          };
          c.prototype.bi = function (b) {
            var d = null;
            try {
              d = b.type;
            } catch (e) {
              return;
            }
            "mousemove" === d ? this.Fi(b) : this.Hc(b);
          };
          c.prototype.Hc = function (b) {
            var d = b.type,
              e = b.clientX;
            e = void 0 === e ? null : e;
            var f = b.clientY;
            f = void 0 === f ? null : f;
            b = b.target || this.l.document.elementFromPoint(e, f);
            this.G.V("event", { x: e || 0, y: f || 0, target: this.X(b) }, d);
          };
          return c;
        })(eb),
        cu = ["focus", "blur"],
        du = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.ga.push([cu, b.bh]);
            return b;
          }
          La(c, a);
          c.prototype.bh = function (b) {
            var d = b.target;
            b = b.type;
            this.G.V(
              "event",
              {
                target: this.X(
                  d === this.l ? this.l.document.documentElement : d
                ),
              },
              b
            );
          };
          return c;
        })(eb),
        eu = u(function (a) {
          var c = wa(a.getSelection, "getSelection");
          return c ? I(c, a) : F;
        }),
        fu = w(eu, na),
        gu = ["mousemove", "touchmove", "mousedown", "touchdown", "select"],
        hu = /text|search|password|tel|url/,
        iu = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.Fd = !1;
            b.ga.push([gu, b.Bh]);
            return b;
          }
          La(c, a);
          c.prototype.Bh = function (b) {
            var d = this.G,
              e = b.type,
              f = b.which;
            b = b.target;
            if ("mousemove" !== e || 1 === f)
              (e = "select" === e ? this.th(b) : this.rh()) && e.start !== e.end
                ? ((this.Fd = !0), d.V("event", e, "selection"))
                : this.Fd &&
                  ((this.Fd = !1),
                  d.V("event", { start: 0, end: 0 }, "selection"));
          };
          c.prototype.rh = function () {
            var b = fu(this.l);
            if (b && 0 < b.rangeCount) {
              b = b.getRangeAt(0) || this.l.document.createRange();
              var d = this.X(b.startContainer),
                e = this.X(b.endContainer);
              if (!X(d) && !X(e))
                return {
                  start: b.startOffset,
                  end: b.endOffset,
                  startNode: d,
                  endNode: e,
                };
            }
          };
          c.prototype.th = function (b) {
            if (hu.test(b.type || "")) {
              var d = this.X(b);
              if (!X(d))
                return {
                  start: b.selectionStart,
                  end: b.selectionEnd,
                  target: d,
                };
            }
          };
          return c;
        })(eb),
        ju = { focus: "windowfocus", blur: "windowblur" },
        ku = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.visibility = null;
            X(b.l.document.hidden)
              ? X(b.l.document.msHidden)
                ? X(b.l.document.webkitHidden) ||
                  (b.visibility = {
                    hidden: "webkitHidden",
                    event: "webkitvisibilitychange",
                  })
                : (b.visibility = {
                    hidden: "msHidden",
                    event: "msvisibilitychange",
                  })
              : (b.visibility = {
                  hidden: "hidden",
                  event: "visibilitychange",
                });
            b.handleEvent = b.L.H(b.handleEvent, "e");
            return b;
          }
          La(c, a);
          c.prototype.start = function () {
            this.Nb = [
              this.bb.F(
                this.l,
                this.visibility ? [this.visibility.event] : ["focus", "blur"],
                I(this.handleEvent, this)
              ),
            ];
          };
          c.prototype.handleEvent = function (b) {
            this.G.V(
              "event",
              {},
              ju[
                this.visibility
                  ? this.l.document[this.visibility.hidden]
                    ? "blur"
                    : "focus"
                  : b.type
              ]
            );
          };
          return c;
        })(eb),
        lu = [
          "touchmove",
          "touchstart",
          "touchend",
          "touchcancel",
          "touchforcechange",
        ],
        mu = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.Vc = {};
            d.scrolling = !1;
            d.If = 0;
            d.ga.push([["scroll"], d.ui, d.l.document]);
            d.ga.push([lu, d.Hi, d.l.document]);
            d.Ba = new af(b);
            d.Mb = d.L.H(d.Mb, "nh");
            d.Gi = d.L.H(
              d.Ba.nc(d.Mb, d.G.hb().gf() ? 0 : 50, { eb: !0 }),
              "th"
            );
            return d;
          }
          La(c, a);
          c.prototype.ui = function () {
            var b = this;
            this.scrolling = !0;
            ma(this.l, this.If);
            this.If = R(
              this.l,
              function () {
                b.scrolling = !1;
              },
              150
            );
          };
          c.prototype.Hi = function (b) {
            var d = this,
              e = "touchcancel" === b.type || "touchend" === b.type;
            b.changedTouches &&
              0 < b.changedTouches.length &&
              x(function (f) {
                var g = d.vh(f);
                f.__ym_touch_id = g;
                e && delete d.Vc[f.identifier];
              }, Ga(b.changedTouches));
            "touchmove" === b.type
              ? this.scrolling
                ? this.Mb(b)
                : this.Gi(b, this.G.stamp())
              : this.Mb(b);
          };
          c.prototype.vh = function (b) {
            this.Vc[b.identifier] || (this.Vc[b.identifier] = Rh());
            return this.Vc[b.identifier];
          };
          c.prototype.Mb = function (b, d) {
            void 0 === d && (d = this.G.stamp());
            var e = b.type,
              f = C(function (g) {
                return {
                  id: g.__ym_touch_id,
                  x: Math.round(g.clientX),
                  y: Math.round(g.clientY),
                  force: g.force,
                };
              }, Ga(b.changedTouches));
            0 < f.length &&
              this.G.V("event", { touches: f, target: this.X(b.target) }, e, d);
          };
          return c;
        })(eb),
        nu = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.ga.push([["load"], b.ai, b.l.document]);
            return b;
          }
          La(c, a);
          c.prototype.ai = function (b) {
            b = b.target;
            "IMG" === Ja(b) &&
              b.getAttribute("srcset") &&
              this.G.V(
                "mutation",
                { target: this.X(b), attributes: { src: b.currentSrc } },
                "ac"
              );
          };
          return c;
        })(eb),
        ou = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.kg = 1;
            d.Ba = new af(b);
            d.ec = d.L.H(d.ec, "z");
            return d;
          }
          La(c, a);
          c.prototype.start = function () {
            if (this.df()) {
              a.prototype.start.call(this);
              this.ec();
              var b = this.bb.F(
                n(this.l, "visualViewport"),
                ["resize"],
                this.Ba.nc(this.ec, 10)
              );
              this.Nb.push(b);
            }
          };
          c.prototype.stop = function () {
            a.prototype.stop.call(this);
            this.Ba.flush();
          };
          c.prototype.ec = function () {
            var b = this.df();
            b && b !== this.kg && ((this.kg = b), this.wi(b));
          };
          c.prototype.df = function () {
            var b = gg(this.l);
            return b ? b[2] : null;
          };
          c.prototype.wi = function (b) {
            var d = Sf(this.l);
            this.G.V("event", { x: d.x, y: d.y, level: b }, "zoom");
          };
          return c;
        })(eb),
        Zd,
        bf = {
          91: "super",
          93: "super",
          224: "super",
          18: "alt",
          17: "ctrl",
          16: "shift",
          9: "tab",
          8: "backspace",
          46: "delete",
        },
        Fl = { super: 1, cj: 2, alt: 3, shift: 4, vj: 5, delete: 6, aj: 6 },
        pu = [4, 9, 8, 32, 37, 38, 39, 40, 46],
        Gl =
          ((Zd = {}),
          (Zd["1"] = {
            91: "&#8984;",
            93: "&#8984;",
            224: "&#8984;",
            18: "&#8997;",
            17: "&#8963;",
            16: "&#8679;",
            9: "&#8677;",
            8: "&#9003;",
            46: "&#9003;",
          }),
          (Zd["2"] = {
            91: "&#xff;",
            93: "&#xff;",
            224: "&#xff;",
            18: "Alt",
            17: "Ctrl",
            16: "Shift",
            9: "Tab",
            8: "Backspace",
            46: "Delete",
          }),
          (Zd.Uh = {
            32: "SPACEBAR",
            37: "&larr;",
            38: "&uarr;",
            39: "&rarr;",
            40: "&darr;",
            13: "Enter",
          }),
          Zd),
        qu = /flash/,
        ru = /ym-disable-keys/,
        su = /^&#/,
        tu = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.kb = {};
            d.Ma = 0;
            d.Da = [];
            d.Xf = [];
            d.pc = 0;
            d.Af = 0;
            d.ga.push([["keydown"], d.yh]);
            d.ga.push([["keyup"], d.zh]);
            d.ug =
              -1 !== Ac(n(b, "navigator.appVersion") || "", "Mac") ? "1" : "2";
            d.Fc = d.L.H(d.Fc, "v");
            d.qd = d.L.H(d.qd, "ec");
            d.Sc = d.L.H(d.Sc, "sk");
            d.yd = d.L.H(d.yd, "gk");
            d.oe = d.L.H(d.oe, "sc");
            d.cc = d.L.H(d.cc, "cc");
            d.reset = d.L.H(d.reset, "r");
            d.Pc = d.L.H(d.Pc, "rs");
            return d;
          }
          La(c, a);
          c.prototype.yh = function (b) {
            if (this.Fc(b) && !this.Nh(b)) {
              var d = b.keyCode;
              b.repeat ||
                this.kb[d] ||
                ((this.kb[b.keyCode] = !0),
                bf[b.keyCode] && !this.Ma
                  ? ((this.Ma += 1), this.oe(b), this.reset(300))
                  : this.Ma
                  ? (this.Cg(), this.de(b), this.qd())
                  : (this.reset(), this.de(b)));
            }
          };
          c.prototype.zh = function (b) {
            if (this.Fc(b)) {
              var d = b.keyCode,
                e = bf[b.keyCode];
              this.kb[b.keyCode] && (this.kb[d] = !1);
              e && this.Ma && ((this.Ma = 0), (this.kb = {}));
              1 === this.Da.length &&
                ((b = this.Da[0]),
                G(b.keyCode, pu) && (this.Sc([b], !0), this.reset()));
              this.Da = ia(w(Q("keyCode"), za(d), Ec), this.Da);
              ma(this.l, this.pc);
            }
          };
          c.prototype.Fc = function (b) {
            var d = this.l.document.activeElement;
            d =
              d &&
              "OBJECT" === d.nodeName &&
              qu.test(d.getAttribute("type") || "");
            b = b.target;
            if (!b) return !d;
            b =
              "INPUT" === b.nodeName &&
              "password" === b.getAttribute("type") &&
              ru.test(b.className);
            return !d && !b;
          };
          c.prototype.qd = function () {
            this.Xf = this.Da.slice(0);
            ma(this.l, this.pc);
            this.pc = R(this.l, v(this.Xf, I(this.Sc, this)), 0, "e.c");
          };
          c.prototype.Sc = function (b, d) {
            void 0 === d && (d = !1);
            if (1 < b.length || d) {
              var e = this.yd(b);
              this.G.V("event", { keystrokes: e }, "keystroke");
            }
          };
          c.prototype.yd = function (b) {
            var d = this;
            b = C(function (e) {
              e = e.keyCode;
              var f = bf[e],
                g = d.oh(e);
              return { id: e, key: g, isMeta: !!f && su.test(g), modifier: f };
            }, b);
            return Lf(function (e, f) {
              return (Fl[e.modifier] || 100) - (Fl[f.modifier] || 100);
            }, b);
          };
          c.prototype.oh = function (b) {
            return Gl[this.ug][b] || Gl.Uh[b] || String.fromCharCode(b);
          };
          c.prototype.de = function (b) {
            G(b, this.Da) || this.Da.push(b);
          };
          c.prototype.oe = function (b) {
            this.de(b);
            this.cc();
          };
          c.prototype.cc = function () {
            this.Ma ? R(this.l, this.cc, 100) : (this.Da = []);
          };
          c.prototype.Cg = function () {
            ma(this.l, this.Af);
          };
          c.prototype.reset = function (b) {
            b ? (this.Af = R(this.l, I(this.Pc, this), b)) : this.Pc();
          };
          c.prototype.Pc = function () {
            this.Ma = 0;
            this.Da = [];
            this.kb = {};
            ma(this.l, this.pc);
          };
          c.prototype.Nh = function (b) {
            return b.target && "INPUT" === b.target.nodeName
              ? b.shiftKey || 32 === b.keyCode || "shift" === bf[b.keyCode]
              : !1;
          };
          return c;
        })(eb),
        Gn = ["sr", "sd", "\u043d"],
        uu = /allow-same-origin/,
        vu = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.Wb = [];
            d.ud = {};
            d.Ud = d.L.H(d.Ud, "fi");
            d.Vd = d.L.H(d.Vd, "sd");
            d.Wd = d.L.H(d.Wd, "src");
            d.oa = new b.MutationObserver(d.Wd);
            return d;
          }
          La(c, a);
          c.prototype.start = function () {
            a.prototype.start.call(this);
            this.G.Hb().fc && this.G.sa().F("iframe", "NA:", I(this.Ud, this));
            this.G.$e().wd().F(["sdr"], I(this.Vd, this));
          };
          c.prototype.stop = function () {
            a.prototype.stop.call(this);
            x(function (b) {
              b.G.stop();
            }, this.Wb);
          };
          c.prototype.Wd = function (b) {
            var d = b.pop().target;
            if (
              (b = Mb(function (f) {
                return f.ff === d;
              }, this.Wb))
            ) {
              this.Wb = ia(function (f) {
                return f.ff !== d;
              }, this.Wb);
              var e = b.G.xd();
              try {
                b.G.stop();
              } catch (f) {}
              this.lc(d, e);
            }
          };
          c.prototype.Ud = function (b) {
            if (b) {
              var d = b.data.node;
              this.oa.observe(d, { attributes: !0, attributeFilter: ["src"] });
              this.lc(d, b.data.id);
            }
          };
          c.prototype.lc = function (b, d) {
            var e = this;
            this.Lh(b) &&
              Lb(
                this.l,
                b
              )(
                Pa(F, function () {
                  var f = e.G.lc(b.contentWindow, d);
                  e.Wb.push({ G: f, ff: b });
                })
              );
          };
          c.prototype.Vd = function (b) {
            var d = this,
              e = b.frameId;
            b = b.data;
            this.ud[e] || (this.ud[e] = { data: [] });
            var f = this.ud[e];
            f.data = f.data.concat(b);
            this.l.isNaN(f.nd) &&
              x(function (g) {
                "page" === g.type && (f.nd = g.data.recordStamp - d.G.af());
              }, f.data);
            this.l.isNaN(f.nd) ||
              (this.G.Z(
                C(function (g) {
                  g.stamp += f.nd;
                  g.stamp = d.l.Math.max(0, g.stamp);
                  return g;
                }, f.data)
              ),
              (f.data = []));
          };
          c.prototype.Lh = function (b) {
            var d = b.getAttribute("src"),
              e = b.getAttribute("sandbox");
            return b.getAttribute("_ym_ignore") ||
              (e && !e.match(uu)) ||
              (d &&
                "about:blank" !== d &&
                (d = Oc(this.l, d).host) &&
                U(this.l).host !== d)
              ? !1
              : n(b, "contentWindow.location.href");
          };
          return c;
        })(eb),
        wu = u(function (a) {
          var c = n(a, "sessionStorage");
          if (!c) return null;
          try {
            var b = c.getItem("__ym_tab_guid");
            c = !1;
            var d = n(a, "opener.sessionStorage");
            try {
              c = !!d && b === d.getItem("__ym_tab_guid");
            } catch (e) {
              c = !0;
            }
            if (!b || c)
              (b = Rh()), a.sessionStorage.setItem("__ym_tab_guid", b);
            return b;
          } catch (e) {
            return null;
          }
        }),
        xu = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.je = b.L.H(b.je, "ps");
            return b;
          }
          La(c, a);
          c.prototype.start = function () {
            this.G.sa().Ac({
              nodes: [this.l.document.documentElement],
              Tc: this.je,
            });
          };
          c.prototype.je = function (b) {
            var d = this.G.qh(),
              e = d.hh(),
              f = U(this.l),
              g = f.host,
              h = f.protocol;
            f = f.pathname;
            var k = Ld(this.l),
              l = k[0];
            k = k[1];
            this.G.V(
              "page",
              {
                content: C(function (m) {
                  m.node = void 0;
                  return m;
                }, b),
                base: e || "",
                hasBase: !!e,
                viewport: { width: l, height: k },
                title: this.l.document.title,
                doctype: d.jh() || "",
                address: this.l.location.href,
                ua: this.l.navigator.userAgent,
                referrer: this.l.document.referrer,
                screen: {
                  width: this.l.screen.width,
                  height: this.l.screen.height,
                },
                location: { host: g, protocol: h, path: f },
                recordStamp: this.G.af(),
                tabId: wu(this.l),
              },
              "page",
              0
            );
          };
          return c;
        })(eb),
        yu = ["addRule", "removeRule", "insertRule", "deleteRule"],
        dh = [
          [
            (function (a) {
              function c(b, d, e) {
                b = a.call(this, b, d, e) || this;
                b.Za = {};
                b.Xb = {};
                b.Ie = 0;
                b.Kc = b.L.H(b.Kc, "a");
                b.tb = b.L.H(b.tb, "sr");
                b.Lc = b.L.H(b.Lc, "r");
                b.Z = b.L.H(b.Z, "d");
                return b;
              }
              La(c, a);
              c.prototype.start = function () {
                var b = this.G.sa();
                b.F("style", "NA:", this.Kc);
                b.F("style", "NR:", this.Lc);
                this.Z();
              };
              c.prototype.stop = function () {
                var b = this;
                a.prototype.stop.call(this);
                var d = this.G.sa();
                d.ea("style", "NA:", this.Kc);
                d.ea("style", "NR:", this.Lc);
                this.Z();
                ma(this.l, this.Ie);
                x(function (e) {
                  b.Za[e].sheet && b.Ef(b.Za[e].sheet);
                }, ca(this.Za));
                this.Za = {};
              };
              c.prototype.Z = function () {
                var b = this;
                x(function (d) {
                  var e = d[0];
                  d = d[1];
                  if (d.length) {
                    for (
                      var f = [], g = d[0].stamp, h = [], k = 0;
                      k < d.length;
                      k += 1
                    ) {
                      var l = d[k],
                        m = l.stamp;
                      delete l.stamp;
                      m <= g + 50 ? f.push(l) : (h.push(f), (g = m), (f = [l]));
                    }
                    f.length && h.push(f);
                    h.length &&
                      x(function (p) {
                        b.G.V(
                          "event",
                          { target: Ea(e), changes: p },
                          "stylechange",
                          g
                        );
                      }, h);
                    delete b.Xb[e];
                  }
                }, Ma(this.Xb));
                this.Ie = R(this.l, this.Z, 100);
              };
              c.prototype.tb = function (b, d, e, f, g) {
                void 0 === f && (f = "");
                void 0 === g && (g = -1);
                this.Xb[b] || (this.Xb[b] = []);
                this.Xb[b].push({ op: d, style: f, index: g, stamp: e });
              };
              c.prototype.li = function (b, d) {
                var e = this,
                  f = b.addRule,
                  g = b.removeRule,
                  h = b.insertRule,
                  k = b.deleteRule;
                V(f) &&
                  (b.addRule = function (l, m, p) {
                    e.tb(d, "a", e.G.stamp(), l + "{" + m + "}", p);
                    return f.call(b, l, m, p);
                  });
                V(g) &&
                  (b.removeRule = function (l) {
                    e.tb(d, "r", e.G.stamp(), "", l);
                    return g.call(b, l);
                  });
                V(h) &&
                  (b.insertRule = function (l, m) {
                    e.tb(d, "a", e.G.stamp(), l, m);
                    return h.call(b, l, m);
                  });
                V(k) &&
                  (b.deleteRule = function (l) {
                    e.tb(d, "r", e.G.stamp(), "", l);
                    return k.call(b, l);
                  });
              };
              c.prototype.Ef = function (b) {
                var d = this;
                x(function (e) {
                  var f = d.l.CSSStyleSheet.prototype[e];
                  V(f) && (b[e] = I(f, b));
                }, yu);
              };
              c.prototype.Vg = function (b) {
                try {
                  return b.cssRules || b.rules;
                } catch (d) {
                  return null;
                }
              };
              c.prototype.Kc = function (b) {
                var d = b.data;
                b = d.id;
                d = d.node;
                if (d.sheet && !d.getAttribute("src") && !d.innerText) {
                  var e = d.sheet,
                    f = this.Vg(e);
                  if (f && f.length) {
                    for (var g = [], h = 0; h < f.length; h += 1)
                      g.push({ style: f[h].cssText, index: h, op: "a" });
                    this.G.V("event", { changes: g, target: b }, "stylechange");
                  }
                  this.li(e, b);
                  this.Za[b] = d;
                }
              };
              c.prototype.Lc = function (b) {
                b = b.data.id;
                var d = this.Za[b];
                d && (delete this.Za[b], d.sheet && this.Ef(d.sheet));
              };
              return c;
            })(eb),
            "ss",
          ],
          [Yt, "in"],
          [Vt, "mu"],
          [Zt, "r"],
          [$t, "sc"],
          [bu, "mo"],
          [du, "f"],
          [iu, "se"],
          [ku, "wf"],
          [mu, "t"],
          [nu, "src"],
          [ou, "z"],
          [tu, "ks"],
        ];
      dh.push([vu, "if"]);
      dh.push([xu, "pa"]);
      var zu = u(function (a) {
          var c = a.document;
          return {
            Ad: function () {
              if (c.scrollingElement) return c.scrollingElement;
              var b =
                0 === jb(c.compatMode, "CSS1") ? c.documentElement : c.body;
              return n(c, "documentElement.scrollHeight") >=
                n(c, "body.scrollHeight")
                ? b
                : null;
            },
            ph: function () {
              var b = a.screen;
              if (!b) return 0;
              var d = Mb(v(b, n), [
                "orientation",
                "mozOrientation",
                "msOrientation",
              ]);
              return n(b, d + ".angle") || 0;
            },
            mj: v(a, qb),
            gf: v(a, ud),
            lj: v(a, Se),
          };
        }),
        Au = (function () {
          function a(c, b) {
            var d = this;
            this.Kb = 0;
            this.md = [];
            this.Jb = null;
            this.va = this.Yb = this.Vf = !1;
            this.recordStamp = 0;
            this.qh = function () {
              return d.page;
            };
            this.xd = function () {
              return d.Kb;
            };
            this.af = function () {
              return d.recordStamp;
            };
            this.nh = function () {
              return d.bb;
            };
            this.$e = function () {
              return d.Jb;
            };
            this.sa = function () {
              return d.Gd;
            };
            this.stamp = function () {
              return d.te ? d.l.Math.max(d.te(Z) - d.recordStamp, 0) : 0;
            };
            this.Hb = function () {
              return d.options;
            };
            this.hb = function () {
              return d.zg;
            };
            this.V = function (f, g, h, k) {
              void 0 === k && (k = d.stamp());
              f = d.mh(f, g, h, k);
              d.Z(f);
            };
            this.mh = function (f, g, h, k) {
              void 0 === k && (k = d.stamp());
              return { type: f, data: g, stamp: k, frameId: d.Kb, event: h };
            };
            this.Z = function (f) {
              f = P(f) ? f : [f];
              d.Vf && !d.Yb
                ? d.va
                  ? ((f = C(function (g) {
                      return g.frameId ? g : z(g, { frameId: d.Kb });
                    }, f)),
                    d.$e().Mf(f))
                  : d.Ub(f)
                : (d.md = d.md.concat(f));
            };
            this.l = c;
            var e = Bf(c, this, "R");
            this.pe = e.H(this.pe, "s");
            this.Z = e.H(this.Z, "sd");
            e = H(c);
            e.C("wv2e") && ae();
            e.D("wv2e", !0);
            this.options = b;
            this.bb = ja(c);
            this.Gd = new Wt(this.l, b);
            this.zg = zu(c);
            this.Ke = C(function (f) {
              return new f[0](c, d, f[1]);
            }, dh);
            this.Ih();
            this.page = En(this.l);
            this.pe();
          }
          a.prototype.start = function (c) {
            this.Vf = !0;
            this.Ub = c;
            this.Jf();
          };
          a.prototype.stop = function () {
            ch(this.l) &&
              (x(function (c) {
                return c.stop();
              }, this.Ke),
              this.Gd.stop(),
              this.Jb && this.Jb.stop(),
              this.va || this.V("event", {}, "eof"));
          };
          a.prototype.lc = function (c, b) {
            var d = new a(c, z({}, this.options, { frameId: b }));
            d.start(F);
            return d;
          };
          a.prototype.Ih = function () {
            var c = this;
            this.va = !!this.options.frameId;
            this.Kb = this.options.frameId || 0;
            this.Yb = !this.va;
            var b = this.options.dg || [];
            b.push(U(this.l).host);
            this.Jb = Fn(this.l, this, b);
            b = this.Jb.wd();
            qb(this.l)
              ? this.Yb &&
                b.F(["i"], function (d) {
                  c.va = d.va;
                  c.Yb = !1;
                  d.frameId && (c.Kb = d.frameId);
                  c.Jf();
                })
              : (this.Yb = this.va = !1);
          };
          a.prototype.Jf = function () {
            var c = Ue(this.md);
            this.Z(c);
          };
          a.prototype.pe = function () {
            this.te = Zf(this.l);
            this.recordStamp = this.te(Z);
            x(function (c) {
              c.start();
            }, this.Ke);
            this.Gd.start();
          };
          return a;
        })(),
        Bu = (function () {
          return function (a, c, b) {
            var d = this;
            this.dd = this.Pb = !1;
            this.Ua = [];
            this.pf = [];
            this.Ne = [];
            this.send = function (e, f, g) {
              e = d.sender(e, d.kc);
              f && g && e.then(f, g);
              return e;
            };
            this.se = function (e, f, g) {
              return new J(function (h, k) {
                e.push([f, h, k, g]);
              });
            };
            this.Ch = function () {
              d.Ua = Lf(function (g, h) {
                return g[3].partNum - h[3].partNum;
              }, d.Ua);
              var e = O(
                  function (g, h, k) {
                    h = h[3];
                    return g && k + 1 === h.partNum;
                  },
                  !0,
                  d.Ua
                ),
                f = !!d.Ua[d.Ua.length - 1][3].end;
              return e && f;
            };
            this.rd = function (e) {
              kh(
                d.l,
                e.slice(),
                function (f) {
                  d.send(f[0], f[1], f[2]);
                },
                20,
                "s.w2.sf.fes"
              );
              Ue(e);
            };
            this.$g = function () {
              d.dd || ((d.dd = !0), d.rd(d.pf), d.rd(d.Ne));
            };
            this.Fg = function (e) {
              return O(
                function (f, g) {
                  var h = "page" === g.type && !g.frameId,
                    k = "eof" === g.data.type || "eof" === g.event,
                    l = h && !!g.partNum;
                  return { jd: f.jd || l, hd: f.hd || h, gd: f.gd || k };
                },
                { hd: !1, gd: !1, jd: !1 },
                e
              );
            };
            this.Ah = function (e, f, g) {
              g
                ? ((e = d.se(d.Ua, e, f[0])),
                  d.Ch() && (d.rd(d.Ua), (d.Pb = !0)))
                : ((d.Pb = !0), (e = d.send(e)));
              return e;
            };
            this.bf = function (e, f, g) {
              var h;
              f = {
                J:
                  ((h = {}), (h["wv-part"] = "" + g), (h["wv-type"] = d.xi), h),
                K: Ha(),
                $: { ba: f },
              };
              e && f.K.D("bt", 1);
              return f;
            };
            this.Tg = function (e, f, g) {
              e = d.bf(!1, e, g);
              return d.Pb ? d.send(e) : d.se(d.Ne, e, f);
            };
            this.Vh = function (e, f, g) {
              e = d.bf(!0, e, g);
              if (d.Pb) return d.send(e);
              var h = d.Fg(f);
              g = h.hd;
              var k = h.gd;
              h = h.jd;
              var l;
              g && (l = d.Ah(e, f, h));
              d.dd
                ? g || (l = d.send(e))
                : (g || (l = d.se(d.pf, e, f)), (d.Pb || k) && d.$g());
              return l;
            };
            this.l = a;
            this.xi = b;
            this.sender = ua(a, "W", c);
            this.kc = c;
          };
        })(),
        Hl = u(
          function (a) {
            var c = H(a),
              b = c.C("isEU");
            if (X(b)) {
              var d = Ea(se(a, "is_gdpr") || "");
              if (G(d, [0, 1])) c.D("isEU", d), (b = !!d);
              else if (((a = Sa(a).C("wasSynced")), (a = n(a, "params.eu"))))
                c.D("isEU", a), (b = !!a);
            }
            return b;
          },
          function (a) {
            return H(a).C("isEU");
          }
        ),
        wf = B("i.e", Hl),
        Cu = B("i.ep", function (a) {
          Hl(a);
        }),
        Du = B("w2", function (a, c) {
          function b() {
            h = !0;
          }
          var d = H(a),
            e = M(c);
          if (
            !c.xb ||
            id(a) ||
            !a.MutationObserver ||
            !Na("Element", a.Element)
          )
            return F;
          Na("MutationObserver", a.MutationObserver) || jc(a, e).warn("w2mo");
          var f = Da(function (k, l) {
              pa(c, l)["catch"](k);
            }),
            g = Lb(a)(Jg(D([a, c], Cn)))(
              Zk(function (k) {
                return new Au(a, k);
              })
            ),
            h = !1;
          Vq([g, f])(
            Pa(A(a, "wv2.R.c"), function (k) {
              var l = k[0];
              k = k[1];
              if (!h) {
                b = function () {
                  h || ((h = !0), l && l.stop());
                };
                var m = d.C("wv2Counter");
                if (!Th(a, k) || m) b();
                else if (
                  (ja(a).F(a, ["beforeunload", "unload"], b),
                  d.D("wv2Counter", e),
                  d.D("stopRecorder", b),
                  (k = ei(a, "7", "6")))
                ) {
                  m = new Bu(a, c, k.type);
                  var p = El.Xe(e, "m", I(m.Vh, m), k, a),
                    q = El.Xe(e, "e", I(m.Tg, m), k, a);
                  k = Dn();
                  m = k.Zh;
                  q.F("ag", k.xg);
                  q.F("p", m);
                  p.F("see", function (t) {
                    var y = !1;
                    x(function (E) {
                      "page" === E.type && (y = !0);
                    }, t);
                    y &&
                      (h ||
                        q.push({
                          type: "event",
                          event: "fatalError",
                          data: {
                            code: "invalid-snapshot",
                            Ug: "p.s.f",
                            stack: "",
                          },
                        }),
                      b());
                  });
                  var r = Uc(function (t) {
                    "eof" === n(t, "data.type") || "eof" === t.event
                      ? (q.push(t), p.push(t), q.flush(!0), p.flush(!0))
                      : ("event" === t.type ? q : p).push(t);
                  });
                  R(a, b, 864e5);
                  Rb(a, function () {
                    var t, y;
                    sb(
                      a,
                      ((t = {}),
                      (t.counterKey = e),
                      (t.name = "webvisor"),
                      (t.data = ((y = {}), (y.version = 2), y)),
                      t)
                    );
                    l.start(r);
                  });
                }
              }
            })
          );
          return function () {
            return b();
          };
        }),
        Eu = B("w2.cs", function (a, c) {
          var b,
            d = M(c);
          Wf(a, d, ((b = {}), (b.webvisor = !!c.xb), b));
        }),
        Fu = ["rt", "mf"],
        vf = u(Hc, M),
        Nh = w(kd, sc),
        Gu = hb("isp", function (a, c) {
          pa(c, function (b) {
            var d = Mb(function (h) {
              return n(b, "settings." + h);
            }, Fu);
            if (d && Td(a)) {
              var e = pf(b) && !ke(a),
                f = vf(c);
              z(f, { Qb: d, status: e ? 3 : 4 });
              if (!e) {
                e = yn(a, c, d);
                var g = function (h) {
                  f.status = h;
                };
                return ("mf" === d ? An : zn)(a, c, e)
                  .then(v(1, g))
                  ["catch"](v(2, g));
              }
            }
          })["catch"](A(a, "l.isp"));
        }),
        Il = B("fbq.o", function (a, c, b) {
          var d = n(a, "fbq");
          if (d && d.callMethod) {
            var e = function () {
              var g = Oa(arguments),
                h = d.apply(void 0, g);
              c(g);
              return h;
            };
            z(e, d);
            b && x(c, b);
            a.fbq = e;
          } else var f = R(a, D([a, c].concat(Ga(d && d.queue)), Il), 1e3, "fbq.d");
          return I(ma, null, a, f);
        }),
        bd,
        Hb,
        cd,
        eh =
          ((bd = {}),
          (bd.add_to_wishlist = "add-to-wishlist"),
          (bd.begin_checkout = "begin-checkout"),
          (bd.generate_lead = "submit-lead"),
          (bd.add_payment_info = "add-payment-info"),
          bd),
        fh =
          ((Hb = {}),
          (Hb.AddToCart = "add-to-cart"),
          (Hb.Lead = "submit-lead"),
          (Hb.InitiateCheckout = "begin-checkout"),
          (Hb.Purchase = "purchase"),
          (Hb.CompleteRegistration = "register"),
          (Hb.Contact = "submit-contact"),
          (Hb.AddPaymentInfo = "add-payment-info"),
          (Hb.AddToWishlist = "add-to-wishlist"),
          (Hb.Subscribe = "subscribe"),
          Hb),
        wn =
          ((cd = {}),
          (cd["1"] = eh),
          (cd["2"] = eh),
          (cd["3"] = eh),
          (cd["0"] = fh),
          cd),
        xn = [fh.AddToCart, fh.Purchase],
        Hu = va(function (a, c) {
          var b = n(c, "ecommerce"),
            d = n(c, "event") || "";
          if (!(b = b && d && { version: "3", qc: d }))
            a: {
              if (P(c) || ab(c))
                if (((b = Oa(c)), (d = b[1]), "event" === b[0] && d)) {
                  b = { version: "2", qc: d };
                  break a;
                }
              b = void 0;
            }
          b ||
            (b = (b = n(c, "ecommerce")) && {
              version: "1",
              qc: L(",", ca(b)),
            });
          b && a(b);
        }),
        Iu = B("ag.e", function (a, c) {
          if ("0" === c.aa) {
            var b = [],
              d = A(a, "ag.s", D([na, b], x));
            pa(c, function (e) {
              if (
                n(e, "settings.auto_goals") &&
                ya(a, c) &&
                (e = Ae(a, c, "autogoal").reachGoal)
              ) {
                e = D([e, c.pd], vn);
                var f = Hu(e);
                e = D([a, e], un);
                b.push(Il(a, e));
                b.push(
                  Ui(a, "dataLayer", function (g) {
                    g.oa.F(f);
                  })
                );
              }
            });
            return d;
          }
        }),
        Ju = /[^\d.,]/g,
        Ku = /[.,]$/,
        sn = B("ep.pp", function (a, c) {
          if (!c) return 0;
          a: {
            var b = c.replace(Ju, "").replace(Ku, "");
            var d = "0" === b[b.length - 1];
            for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
              var f = b[e - 1];
              if (G(f, [",", "."])) {
                d = f;
                break a;
              }
            }
            d = "";
          }
          b = d ? c.split(d) : [c];
          d = d ? b[1] : "00";
          b = parseFloat(Sb(b[0]) + "." + Sb(d));
          d = Math.pow(10, 8) - 0.01;
          a.isNaN(b)
            ? (b = 0)
            : ((b = a.Math.min(b, d)), (b = a.Math.max(b, 0)));
          return b;
        }),
        Lu = [
          [["EUR", "\u20ac"], "978"],
          [["USD", "\u0423\\.\u0415\\.", "\\$"], "840"],
          [["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"],
          [
            "\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(
              " "
            ),
            "398",
          ],
          [["GBP", "\u00a3", "UKL"], "826"],
          [
            "RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(
              " "
            ),
            "643",
          ],
        ],
        Mu = u(function (a) {
          return new RegExp(L("|", a), "i");
        }),
        Nu = B("ep.cp", function (a) {
          if (!a) return "643";
          var c = Ki(a);
          return (a = Mb(function (b) {
            return Mu(b[0]).test(c);
          }, Lu))
            ? a[1]
            : "643";
        }),
        Ou = u(function () {
          function a() {
            var k = h + "0",
              l = h + "1";
            f[k]
              ? f[l]
                ? ((h = h.slice(0, -1)), --g)
                : ((e[l] = b(8)), (f[l] = 1))
              : ((e[k] = b(8)), (f[k] = 1));
          }
          function c() {
            var k = h + "1";
            f[h + "0"]
              ? f[k]
                ? ((h = h.slice(0, -1)), --g)
                : ((h += "1"), (f[h] = 1))
              : ((h += "0"), (f[h] = 1));
          }
          function b(k) {
            void 0 === k && (k = 1);
            var l = d.slice(g, g + k);
            g += k;
            return l;
          }
          for (
            var d = L(
                "",
                Lh(
                  "Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA=="
                )
              ),
              e = {},
              f = {},
              g = 1,
              h = "";
            g < d.length - 1;

          )
            ("0" === b() ? c : a)();
          return e;
        }),
        pn = B("ep.dec", function (a, c) {
          if (!c || id(a)) return [];
          var b = Lh(c),
            d = b[1],
            e = b[2],
            f = b.slice(3);
          if (2 !== te(b[0])) return [];
          b = Ou();
          f = L("", f);
          e = te(d + e);
          var g = "";
          d = "";
          for (var h = 0; d.length < e && f[h]; )
            (g += f[h]),
              b[g] && ((d += String.fromCharCode(te(b[g]))), (g = "")),
              (h += 1);
          b = "";
          for (f = 0; f < d.length; )
            (e = d.charCodeAt(f)),
              128 > e
                ? ((b += String.fromCharCode(e)), f++)
                : 191 < e && 224 > e
                ? ((g = d.charCodeAt(f + 1)),
                  (b += String.fromCharCode(((e & 31) << 6) | (g & 63))),
                  (f += 2))
                : ((g = d.charCodeAt(f + 1)),
                  (b += String.fromCharCode(
                    ((e & 15) << 12) |
                      ((g & 63) << 6) |
                      (d.charCodeAt(f + 2) & 63)
                  )),
                  (f += 3));
          d = ob(a, b);
          return P(d) ? C(zr, d) : [];
        }),
        rn = B("ep.ent", function (a, c, b) {
          a = "" + Ua(a, 10, 99);
          b = "" + 100 * c + b + a;
          if (16 < ab(b)) return "";
          b = Mh("0", 16, b);
          c = b.slice(0, 8);
          b = b.slice(-8);
          c = (+c ^ 92844).toString(35);
          b = (+b ^ 92844).toString(35);
          return "" + c + "z" + b;
        }),
        Jl = w(Kh, Nu),
        Kl = B("ep.ctp", function (a, c, b, d) {
          var e = Jl(a, b),
            f = Jh(a, d);
          Ih(a, c, e, f);
          Na("MutationObserver", a.MutationObserver) &&
            new a.MutationObserver(function () {
              var g = Jl(a, b),
                h = Jh(a, d);
              if (e !== g || f !== h) (e = g), (f = h), Ih(a, c, e, f);
            }).observe(a.document.body, {
              attributes: !0,
              childList: !0,
              subtree: !0,
              characterData: !0,
            });
        }),
        Pu = B("ep.chp", function (a, c, b, d, e) {
          b && uf(a, c);
          return d || e
            ? ja(a).F(
                a.document,
                ["click"],
                A(a, "ep.chp.cl", D([a, c, d, e], qn))
              )
            : F;
        }),
        Tu = B("ep.i", function (a, c) {
          if (gd(a))
            return on(a, c).then(function (b) {
              var d = b.Pg,
                e = d[0],
                f = d[1],
                g = d[2],
                h = d[3],
                k = d[4],
                l = d[5],
                m = d[6],
                p = d[7],
                q = d[8],
                r = d[9],
                t = d[10],
                y = d[11],
                E = d[12],
                N = d[13],
                K = d[14],
                ka = d[15];
              if (!b.isEnabled) return J.resolve(F);
              var qa = ne(a, e),
                Ka = ne(a, h),
                zd = ne(a, m),
                xe = ne(a, q),
                Qu = "" + e + f + g === "" + h + k + l;
              return new J(function (Ru, Su) {
                Lb(a)(
                  Pa(Su, function () {
                    qa && Kl(a, c, f, g, t, y, E);
                    Ka && !Qu && Kl(a, c, k, l, N, K, ka);
                    Ru(Pu(a, c, zd || xe, p, r));
                  })
                );
              });
            });
        }),
        nn = w(ca, Sc),
        Uu = B("cc.i", function (a, c) {
          var b = D([a, c], mn);
          b = D([a, b, 300, void 0], R);
          pa(c, b);
        }),
        Vu = v("9-d5ve+.r%7", T),
        Wu = B("ad", function (a, c) {
          if (!c.Sa) {
            var b = H(a);
            if (!b.C("adBlockEnabled")) {
              var d = function (m) {
                  G(m, ["2", "1"]) && b.D("adBlockEnabled", m);
                },
                e = wc(a),
                f = e.C("isad");
              if (f) d(f);
              else {
                var g = v("adStatus", b.D),
                  h = function (m) {
                    m = m ? "1" : "2";
                    d(m);
                    g("complete");
                    e.D("isad", m, 1200);
                    return m;
                  },
                  k = ua(a, "adb", c);
                if (!b.C("adStatus")) {
                  g("process");
                  var l = "metrika/a" + Vu().replace(/[^a-v]+/g, "") + "t.gif";
                  jn(a, function () {
                    return k({ ja: { Aa: l } })
                      .then(v(!1, h))
                      ["catch"](v(!0, h));
                  });
                }
              }
            }
          }
        }),
        Xu = B("pr.p", function (a, c) {
          var b, d;
          if (ig(a)) {
            var e = ua(a, "5", c),
              f = Ha(((b = {}), (b.pq = 1), (b.ar = 1), b));
            e(
              {
                K: f,
                J:
                  ((d = {}),
                  (d["page-url"] = U(a).href),
                  (d["page-ref"] = n(a, "document.referrer") || ""),
                  d),
              },
              c
            )["catch"](A(a, "pr.p.s"));
          }
        }),
        Hh = !1,
        Yu = B("fid", function (a) {
          var c,
            b = F;
          if (!V(a.PerformanceObserver)) return b;
          var d = H(a);
          if (d.C("fido")) return b;
          d.D("fido", !0);
          var e = new a.PerformanceObserver(
            A(a, "fid", function (f) {
              f = f.getEntries()[0];
              d.D("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
              b();
            })
          );
          b = function () {
            return e.disconnect();
          };
          try {
            e.observe(
              ((c = {}), (c.type = "first-input"), (c.buffered = !0), c)
            );
          } catch (f) {}
          return b;
        }),
        Zu = B(
          "lt.p",
          hb("lt.p", function (a) {
            var c;
            if (Na("PerformanceObserver", a.PerformanceObserver)) {
              var b = 0,
                d = new a.PerformanceObserver(
                  A(a, "lt.o", function (e) {
                    e &&
                      e.getEntries &&
                      ((e = e.getEntries()),
                      (b = O(
                        function (f, g) {
                          return f + g.duration;
                        },
                        b,
                        e
                      )),
                      Qd(a).D("lt", b));
                  })
                );
              try {
                d.observe(
                  ((c = {}), (c.type = "longtask"), (c.buffered = !0), c)
                );
              } catch (e) {
                return;
              }
              return function () {
                return d.disconnect();
              };
            }
          })
        );
      v(Qa("ccf"), Ya);
      var dn = u(Fi),
        Fh = u(ob, cb),
        $u = B("phc.p", function (a, c) {
          if (!ll(a))
            return pa(c, function (b) {
              var d = c.id,
                e = Lc(a, void 0, d),
                f = e.C("phc_settings") || "";
              if ((b = n(b, "settings.phchange"))) {
                var g = wb(a, b) || "";
                g !== f && e.D("phc_settings", g);
              } else f && (b = Fh(a, f));
              e = n(b, "clientId");
              f = n(b, "orderId");
              b = n(b, "phones") || [];
              e &&
                f &&
                b.length &&
                ((f = {
                  Bb: "",
                  Ob: "",
                  Tf: 0,
                  ha: {},
                  za: [],
                  jf: !1,
                  eb: !0,
                  l: a,
                  kc: c,
                }),
                z(f, { jf: !0 }),
                Eh(a, d, f),
                (b = Bd(a)),
                (e = Hi(a, b, 1e3)),
                (d = I(Eh, null, a, d, f)),
                e.F(d),
                Ii(a, b));
            });
        }),
        gh = u(function (a, c) {
          var b = H(a),
            d = Sa(a),
            e = [],
            f = D([a, c, b, d], up),
            g = !rt(a) || qf(a, 68);
          g && e.push(D([cn, "pu", ""], f));
          !g ||
            d.Id ||
            Td(a) ||
            (e.push(D([bn, "zzlc", "na"], f)), e.push(D([an, "cc", ""], f)));
          return e.length
            ? {
                qa: function (h, k) {
                  if (0 === b.C("isEU"))
                    try {
                      x(ze, e);
                    } catch (l) {}
                  k();
                },
                N: function (h, k) {
                  var l = h.K;
                  if (l && 0 === b.C("isEU"))
                    try {
                      x(Da(l), e);
                    } catch (m) {}
                  k();
                },
              }
            : {};
        }, w(cb, M)),
        av = B("p.tfs", function (a) {
          var c = H(a);
          if (!c.C("tfs")) {
            c.D("tfs", !0);
            c = ja(a);
            var b = F;
            b = c.F(a, ["message"], function (d) {
              var e = n(d, "origin");
              if (
                "https://iframe-toloka.com" === e ||
                "https://iframe-tasks.yandex" === e
              )
                if (((d = ob(a, d.data)), oa(d) && "appendremote" === d.action))
                  if (
                    ((d = Sa(a)),
                    d.C("tfsc") ||
                      a.confirm(
                        "\u0414\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u201c\u0420\u0430\u0437\u043c\u0435\u0442\u043a\u0430 \u0441\u0430\u0439\u0442\u043e\u0432\u201c \u043e\u0442 toloka.ai \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b. \u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c?"
                      ))
                  ) {
                    d.D("tfsc", 1);
                    var f, g;
                    H(a).D(
                      "_u",
                      ((f = {}),
                      (f.getCachedTags = ye),
                      (f.button =
                        ((g = {}),
                        (g.closest = v(a, fe)),
                        (g.select = Pf),
                        (g.getData = v(a, ge)),
                        g)),
                      f)
                    );
                    tc(a, {
                      src: "https://yastatic.net/s3/metrika/2.1540128042.1/form-selector/button_ru.js",
                    });
                    b();
                  } else a.close();
            });
          }
        }),
        $m = gb(/[a-z\u0430-\u044f\u0451,.]/gi),
        bv = B("ice", function (a, c, b) {
          (c = ya(a, c)) && (b = yh(a, b)) && xh(a, c, b);
        }),
        cv = B("ice", function (a, c, b) {
          (c = ya(a, c)) &&
            (b = yh(a, b)) &&
            hj(a, b.Kh).then(D([a, c, b], xh), A(a, "ice.s"));
        }),
        dv = ["text", "email", "tel"],
        ev = ["cc-", "name", "shipping"],
        fv = B("icei", function (a, c) {
          if (hl(a)) {
            var b = !1,
              d = F,
              e = F;
            pa(c, function (f) {
              if (!(wf(a) || n(f, "settings.eu") || b)) {
                f = n(f, "settings.cf") ? cv : bv;
                var g = D([a, c], f),
                  h = function (k) {
                    return Ff(a, k) ||
                      !G(k.type, dv) ||
                      Za(Db, C(v(k.autocomplete, fb), ev))
                      ? !1
                      : !0;
                  };
                d = Bh(a, "input", ["blur"], g, h);
                e = Bh(a, "form", ["submit"], function (k) {
                  var l = k.target;
                  l &&
                    ((l = kb("input", l)),
                    x(function (m) {
                      h(m) && g({ target: m, isTrusted: k.isTrusted });
                    }, l));
                });
              }
            });
            return function () {
              b = !0;
              d();
              e();
            };
          }
        }),
        wh,
        gv = B("p.ai", function (a, c) {
          if (ue(a) || mf(a))
            return pa(c, function (b) {
              var d;
              if ((b = n(b, "settings.sbp")))
                return vh(a, z({}, b, ((d = {}), (d.c = c.id), d)), 10);
            });
        }),
        hv =
          "architecture bitness model platformVersion uaFullVersion fullVersionList".split(
            " "
          ),
        Ll = hb("uah", function (a) {
          if (
            !Na(
              "getHighEntropyValues",
              n(a, "navigator.userAgentData.getHighEntropyValues")
            )
          )
            return J.reject("0");
          try {
            return a.navigator.userAgentData.getHighEntropyValues(hv).then(
              function (c) {
                if (!oa(c)) throw "2";
                return c;
              },
              function () {
                throw "1";
              }
            );
          } catch (c) {
            return J.reject("3");
          }
        }),
        Ml = new RegExp(
          L(
            "|",
            "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(
              ";"
            )
          ).replace(/[./]/g, "\\$&")
        ),
        Tm = u(function (a) {
          var c = rb(a);
          return (c = Ml.test(c))
            ? J.resolve(c)
            : Ll(a).then(function (b) {
                try {
                  return O(
                    function (d, e) {
                      return d || Ml.test(e.brand);
                    },
                    !1,
                    b.brands
                  );
                } catch (d) {
                  return !1;
                }
              }, v(!1, T));
        }),
        qc = ["0", "1", "2", "3"],
        Mc = qc[0],
        lf = qc[1],
        iv = qc[2],
        Nl = [
          "GDPR-ok-view-detailed-0",
          "GDPR-ok-view-detailed-1",
          "GDPR-ok-view-detailed-2",
          "GDPR-ok-view-detailed-3",
        ],
        th = ["GDPR-ok-view-default", "GDPR-ok-view-detailed"].concat(Nl),
        jf =
          "GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23"
            .split(" ")
            .concat(Nl)
            .concat(["28", "29", "30", "31"]),
        jv = "3 13 14 15 16 17 28".split(" "),
        je = w(Uc(Q("ymetrikaEvent.type")), Xr(pc(jf))),
        kv = {
          Rh: !0,
          url: "https://yastatic.net/s3/gdpr/v3/gdpr",
          uf: "",
          mf: "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz cs da de el hr it nl pl sk sv".split(
            " "
          ),
        },
        Wm = hb("gdpr", function (a, c, b, d, e) {
          function f(p) {
            c("10");
            b.F(th, function (q) {
              var r;
              q = q.type;
              l.Pf(((r = {}), (r.type = q), r));
              p({ value: uh(q) });
            });
          }
          var g = void 0 === e ? kv : e;
          e = g.url;
          var h = g.uf,
            k = g.Rh;
          g = Zm(a, g.mf, d.Ui);
          var l = le(a, d);
          if (!l) return J.resolve({ value: Mc, Kd: !0 });
          if (a._yaGdprLoaded)
            return new J(function (p) {
              c("7");
              f(p);
            });
          var m = tc(a, { src: "" + e + (k ? "" : g) + h + ".js" });
          return new J(function (p, q) {
            m
              ? (c("7"),
                (m.onerror = function () {
                  var r;
                  c("9");
                  l.Pf(((r = {}), (r.type = "GDPR-ok-view-default"), r));
                  p(null);
                }),
                (m.onload = v(p, f)))
              : (c("9"), q(Qa("gdp.e")));
          });
        }),
        Zb,
        Ym =
          ((Zb = {}),
          (Zb["GDPR-ok"] = "ok"),
          (Zb["GDPR-ok-view-default"] = "ok-default"),
          (Zb["GDPR-ok-view-detailed"] = "ok-detailed"),
          (Zb["GDPR-ok-view-detailed-0"] = "ok-detailed-all"),
          (Zb["GDPR-ok-view-detailed-1"] = "ok-detailed-tech"),
          (Zb["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics"),
          (Zb["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other"),
          Zb),
        Rm =
          "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz ar he sr uk zh".split(
            " "
          ),
        sh = [],
        ph = Wa("push", sh),
        Qm = u(function (a, c) {
          var b = c.C("gdpr");
          return G(b, qc) ? "-" + b : "";
        }),
        hh = u(Ad),
        lv = u(function () {
          var a = O(
            function (c, b) {
              "ru" !== b && (c[b] = Xg + "." + b);
              return c;
            },
            {},
            sg
          );
          x(function (c) {
            a[c] = c;
          }, ca(pl));
          a.com = Xg + ".com";
          return a;
        }),
        Hm = u(function (a) {
          a = U(a).hostname;
          return (a = Mb(w(Q("1"), Gi("test"), tb(na)(a)), Ma(pl))) && a[0];
        }),
        Ol = (function (a, c) {
          return function (b, d) {
            var e = M(d);
            e = lv(e);
            var f = Fm(b, e),
              g = H(b),
              h = qb(b);
            return Td(b) || Te(b)
              ? {}
              : {
                  N: function (k, l) {
                    var m = k.K;
                    m = !(m && m.C("pv"));
                    if (h || m || !f.length) return l();
                    g.C("startSync")
                      ? hh(b).push(l)
                      : (g.D("startSync", !0),
                        D([b, f, F, !1], a)()
                          .then(l, w(Nc(l), A(b, c)))
                          ["catch"](F));
                  },
                  qa: function (k, l) {
                    if (!n(k.Df, "settings.nss")) return l();
                    var m = k.K;
                    m = !(m && m.C("pv"));
                    if (h || m || !f.length) return l();
                    if (g.C("startSync")) hh(b).push(l);
                    else
                      return (
                        g.D("startSync", !0),
                        a(b, f, F, !0).then(l, w(Nc(l), A(b, c)))
                      );
                  },
                };
          };
        })(function (a, c, b, d) {
          var e = la(a),
            f = H(a),
            g = Sa(a);
          b = Rg(a, "c");
          var h = Wb(a, b);
          return zb(
            function (k, l) {
              function m() {
                var r = g.C("synced");
                f.D("startSync", !1);
                r && ((r[l.Th] = p), g.D("synced", r));
                r = hh(a);
                x(na, r);
                Ue(r);
              }
              var p,
                q = h({ $: { fa: ["sync.cook"], Oa: 1500 } }, [
                  Ca.Qa +
                    "//" +
                    l.Di +
                    "/sync_cookie_image_check" +
                    (d ? "_secondary" : ""),
                ])
                  .then(function () {
                    p = e(pb);
                    m();
                  })
                  ["catch"](function () {
                    p = e(pb) - 1435;
                    m();
                  });
              q = v(q, T);
              return k.then(q);
            },
            J.resolve(),
            c
          )["catch"](A(a, "ctl"));
        }, "sy.c"),
        Ib,
        Dm =
          ((Ib = {}),
          (Ib.brands = "chu"),
          (Ib.architecture = "cha"),
          (Ib.bitness = "chb"),
          (Ib.uaFullVersion = "chf"),
          (Ib.fullVersionList = "chl"),
          (Ib.mobile = "chm"),
          (Ib.model = "cho"),
          (Ib.platform = "chp"),
          (Ib.platformVersion = "chv"),
          Ib),
        Am = u(function (a) {
          return Ll(a).then(Bm, Em);
        }),
        mv = hb("ot", function (a, c) {
          if (Je(a)) {
            var b = ja(a);
            return pa(
              c,
              A(a, "ot.s", function (d) {
                if (n(d, "settings.oauth")) {
                  var e = [],
                    f = kd(a, c);
                  e.push(b.F(a, ["message"], A(a, "ot.m", v(f, zm))));
                  Lb(a)(
                    Pa(
                      F,
                      A(a, "ot.b", function () {
                        function g(q) {
                          var r,
                            t = q.href;
                          t &&
                            Ug(t, "https://oauth.yandex.ru/") &&
                            !fb(t, "_ym_uid=") &&
                            ((t = fb(t, "?") ? "&" : "?"),
                            (q.href +=
                              "" +
                              t +
                              Cc(((r = {}), (r._ym_uid = f), (r.mc = "v"), r))),
                            b.F(
                              q,
                              ["click"],
                              A(a, "ot.click", function () {
                                var y = "et=" + l(Z);
                                q.href += "&" + y;
                              })
                            ));
                        }
                        var h,
                          k = a.document.body,
                          l = la(a),
                          m = kb("a", k);
                        x(g, m);
                        if (Na("MutationObserver", a.MutationObserver)) {
                          m = new a.MutationObserver(
                            A(
                              a,
                              "ot.m",
                              v(function (q) {
                                q = q.addedNodes;
                                for (var r = 0; r < q.length; r += 1) {
                                  var t = q[r];
                                  "A" === t.nodeName && g(t);
                                }
                              }, x)
                            )
                          );
                          var p =
                            ((h = {}), (h.childList = !0), (h.subtree = !0), h);
                          m.observe(k, p);
                          e.push(I(m.disconnect, m));
                        }
                      })
                    )
                  );
                  return D([ze, e], x);
                }
              })
            );
          }
        }),
        nv = B("p.cta", function (a) {
          Lb(a)(
            Pa(F, function () {
              var c = H(a);
              if (wm(a.document)) {
                var b = 0;
                if (Oh(a, pe, "cta")) {
                  var d = F,
                    e = function () {
                      Ph(pe, "cta");
                      d();
                      ma(a, b);
                    };
                  d = ja(a).F(a, ["message"], B("p.cta.o", D([a, c, e], xm)));
                  b = R(a, e, 1500);
                } else c.D("cta.e", "if");
              } else c.D("cta.e", "ns");
            })
          );
        }),
        rm = ["bidResponse", "bidAdjustment", "bidWon"],
        sm = [
          "cpm",
          "currency",
          "netRevenue",
          "requestTimestamp",
          "responseTimestamp",
        ],
        Fa = {},
        ov = B("pj", function (a, c) {
          var b,
            d = ya(a, c),
            e = d && d.params;
          return e
            ? ((b = {}),
              (b.pbjs = function (f) {
                P(f) &&
                  ((f = ia(
                    Db,
                    C(function (g) {
                      if (oa(g) && g.data && g.event && oa(g.data)) {
                        var h = n(g, "data.args");
                        return h ? { event: g.event, data: h } : g;
                      }
                    }, f)
                  )),
                  qm(f),
                  tm(a, e));
              }),
              b)
            : F;
        }),
        om = /(\D\d*)/g,
        pm = u(function () {
          var a = ye();
          return O(
            function (c, b) {
              c[a[b]] = b;
              return c;
            },
            {},
            ca(a)
          );
        }),
        pv = B("g.v.e", function (a, c) {
          return pa(
            c,
            A(a, "g.v.t", function (b) {
              var d = ya(a, c);
              if (d && (b = n(b, "settings.goal_values"))) {
                var e = ia(w(Q("url"), v(a, jm)), b);
                if (0 !== e.length) {
                  b = ja(a);
                  var f = [];
                  e = D(
                    [
                      a,
                      function (g) {
                        var h, k;
                        return d.params(
                          ((h = {}),
                          (h.__ym = ((k = {}), (k.goal_values = g), k)),
                          h)
                        );
                      },
                      e,
                    ],
                    mm
                  );
                  f.push(b.F(a, ["click"], A(a, "g.v.c", D([e], km))));
                  f.push(b.F(a, ["submit"], A(a, "g.v.s", D([a, e], lm))));
                  return D([w(T, na), f], x);
                }
              }
            })
          );
        }),
        Pl =
          "close stop focus blur open alert confirm prompt print postMessage captureEvents releaseEvents getSelection getComputedStyle matchMedia moveTo moveBy resizeTo resizeBy scroll scrollTo scrollBy getDefaultComputedStyle scrollByLines scrollByPages find dump requestIdleCallback cancelIdleCallback requestAnimationFrame cancelAnimationFrame reportError setTimeout clearTimeout setInterval clearInterval queueMicrotask fetch self history customElements event frames opener parent frameElement navigator clientInformation external performance visualViewport crypto speechSynthesis localStorage origin indexedDB caches sessionStorage window document location top".split(
            " "
          ),
        lh = F,
        qv = u(function (a, c) {
          lh = c;
        }),
        $d,
        hm =
          (($d = {}),
          ($d.copyFromWindow = function (a, c, b) {
            if (G(b, Pl) || Ug(b, "on")) throw Ta("rwp");
            c = a[b];
            if (fa(c) || gc(a, c) || ha(c) || V(c)) return c;
            if (P(c)) return Pd(c);
            if (oa(c)) return im(c);
          }),
          ($d.loadScript = function (a, c, b, d, e) {
            a = tc(a, { src: b });
            if (!a) throw Ta("stce");
            V(d) &&
              (a.onload = gf("ls.ol", function () {
                return d.apply(null);
              }));
            V(e) &&
              (a.onerror = gf("ls.oe", function () {
                return e.apply(null);
              }));
          }),
          ($d.callFromWindow = function (a, c, b) {
            for (var d = [], e = 3; e < arguments.length; e++)
              d[e - 3] = arguments[e];
            if (G(b, Pl)) throw Ta("rwp");
            e = n(a, b);
            if (!V(e)) throw Ta("wenf");
            return e.apply(void 0, d);
          }),
          $d),
        rv = ["ymab", "rcmx", "yaSurvey", "ym_debug"],
        Ql = u(function (a) {
          qv(a, D([a, "ytm"], vd));
          return function (c) {
            bm(c) &&
              x(function (b) {
                if (P(b) && 1 === b[0]) {
                  var d = b[1];
                  G(d, rv) && gf("p." + d, cm)(a, b);
                }
              }, c.code);
          };
        }),
        sv = B("y.t.m", function (a, c) {
          return pa(
            c,
            A(a, "y.t.t", function (b) {
              if ((b = n(b, "settings.aytm"))) (b = ob(a, b)), Ql(a)(b);
            })
          );
        }),
        Rl = {},
        Sl = u(Hc),
        am = w(Wa("exec", /counterID=(\d+)/), Q("1")),
        Tl = va(function (a, c) {
          var b,
            d = Sl(a),
            e = Ga(c),
            f = e[0],
            g = e[1],
            h = e.slice(2);
          if (g) {
            e = $l(a, f);
            var k = e[0],
              l = e[1];
            e = M(l);
            d[e] || (d[e] = {});
            d = d[e];
            c.Pe ||
              (Rl[g] &&
                O(
                  function (m, p) {
                    return m || !!p(a, l, h, k);
                  },
                  !1,
                  Rl[g]
                )) ||
              ("init" === g
                ? ((c.Pe = !0),
                  k
                    ? Jb(a, "" + f, "dc", ((b = {}), (b.key = f), b))
                    : (a["yaCounter" + l.id] = new a.Ya[Ca.ic](z({}, h[0], l))))
                : k && k[g] && d.Hh
                ? (k[g].apply(k, h), (c.Pe = !0))
                : ((b = d.Uf),
                  b || ((b = []), (d.Uf = b)),
                  b.push(sa([f, g], h))));
          }
        }),
        tv = hb("is", function (a) {
          var c;
          if (!qb(a)) {
            var b = wc(a);
            if (Re(a, "0")) b.Eb("sup_debug");
            else {
              var d = Re(a, "2"),
                e = !!b.C("sup_debug");
              if (d || e)
                (a._ym_debug = !0),
                  b.D("sup_debug", "1", 1440),
                  Ql(a)(
                    ((c = {}),
                    (c.code = [
                      [
                        1,
                        "ym_debug",
                        [18, ["a", [37, [40, "require"], "loadScript"]]],
                        [2, [37, [40, "a"], ul + "/tag_debug.js"]],
                      ],
                    ]),
                    c)
                  );
            }
          }
        }),
        Zl = B("destruct.e", function (a, c, b) {
          return function () {
            var d = H(a),
              e = c.id;
            x(function (f, g) {
              return V(f) && A(a, "dest.fr." + g, f)();
            }, b);
            delete d.C("counters")[M(c)];
            delete a["yaCounter" + e];
          };
        }),
        dd = H(window);
      dd.Ga("hitParam", {});
      dd.Ga("lastReferrer", window.location.href);
      (function () {
        W.push(function (a, c) {
          var b;
          return (
            (b = {}),
            (b.firstPartyParams = Hs(a, c)),
            (b.firstPartyParamsHashed = jq(a, c)),
            b
          );
        });
        Ud.push("fpp");
        Ud.push("fpmh");
      })();
      (function () {
        var a = H(window);
        a.Ga("getCounters", Is(window));
        ce.push(Js);
        Ig.push(function (c, b) {
          b.counters = a.C("getCounters");
        });
      })();
      (function () {
        W.push(function (a, c) {
          var b;
          sb(
            a,
            ((b = {}),
            (b.counterKey = M(c)),
            (b.name = "counter"),
            (b.data = bk(c)),
            b)
          );
        });
      })();
      Aa["1"] = mb;
      W.push(Ks);
      xa["1"] = mc;
      Eb(Vf, -1);
      Ub["1"] = [
        [Vf, -1],
        [Pe, 1],
        [Ie, 2],
        [Pb(), 3],
        [mj, 4],
      ];
      W.push(Ls);
      W.push(
        B("p.ar", function (a, c) {
          var b,
            d = ua(a, "a", c);
          return (
            (b = {}),
            (b.hit = function (e, f, g, h, k, l) {
              var m,
                p,
                q,
                r = { J: {}, K: Ha(((m = {}), (m.pv = 1), (m.ar = 1), m)) };
              f = oa(f)
                ? {
                    title: f.title,
                    zf: f.referer,
                    R: f.params,
                    bc: f.callback,
                    l: f.ctx,
                  }
                : { title: f, zf: g, R: h, bc: k, l: l };
              h = Dd(c);
              g = e || U(a).href;
              h.url !== g && ((h.ref = h.url), (h.url = e));
              e = f.zf || h.ref || a.document.referrer;
              h = hc(
                a,
                c,
                "pv",
                ((p = {}), (p.id = c.id), (p.url = g), (p.ref = e), p),
                f.R
              );
              p = z(r.M || {}, { R: f.R, title: f.title });
              r = d(
                z(r, {
                  M: p,
                  J: z(
                    r.J || {},
                    ((q = {}), (q["page-url"] = g), (q["page-ref"] = e), q)
                  ),
                }),
                c
              ).then(h);
              return Rc(a, "p.ar.s", r, f.bc || F, f.l);
            }),
            b
          );
        })
      );
      Aa.a = mb;
      Ub.a = Vb;
      xa.a = fl;
      W.push(Ae);
      Aa.g = mb;
      xa.g = mc;
      Ub.g = Vb;
      W.push(Ms);
      W.push(Ns);
      Ub.t = Vb;
      Aa.t = mb;
      xa.t = mc;
      W.push(
        B("cl.p", function (a, c) {
          function b(p, q, r, t) {
            void 0 === t && (t = {});
            r
              ? Ce(a, c, { url: r, lb: !0, Cc: p, Gc: q, sender: e, ig: t })
              : h.warn("clel");
          }
          var d,
            e = ua(a, "2", c),
            f = [],
            g = M(c),
            h = jc(a, g),
            k = A(a, "s.s.tr", v(Fe(a, g), bq));
          g = {
            l: a,
            ab: c,
            Wg: f,
            sender: e,
            ij: H(a),
            Lg: Yc(a, c.id),
            kj: zc(a),
            Ki: v(v(g, Ze(a)), w(na, Q("trackLinks"))),
          };
          g = A(a, "cl.p.c", v(g, Zp));
          g = ja(a).F(a, ["click"], g);
          c.ag && k(c.ag);
          var l = A(a, "file.clc", D([!0, !1], b)),
            m = A(a, "e.l.l.clc", D([!1, !0], b));
          f = A(a, "add.f.e.clc", Os(f));
          return (
            (d = {}),
            (d.file = l),
            (d.extLink = m),
            (d.addFileExtension = f),
            (d.trackLinks = k),
            (d.u = g),
            d
          );
        })
      );
      Ub["2"] = Vb;
      Aa["2"] = mb;
      xa["2"] = mc;
      Aa.r = Md("r");
      xa.r = fl;
      Xa.push(
        B("p.r", function (a, c) {
          var b = Qs(a),
            d = ua(a, "r", c),
            e = A(a, "rts.p");
          return pa(
            c,
            D(
              [
                function (f, g) {
                  var h = { id: g.Kg, aa: g.aa },
                    k = {
                      $: { ba: g.mi },
                      K: Ha(g.Ag),
                      J: g.R,
                      M: { Sb: g.Sb },
                      ja: { Aa: g.Aa },
                    };
                  g.Ha && (k.Ha = of(g.Ha));
                  h = d(k, h)["catch"](e);
                  return f.then(v(h, T));
                },
                J.resolve(),
                b,
              ],
              O
            )
          )["catch"](e);
        })
      );
      aa(
        "r",
        function (a) {
          return {
            N: function (c, b) {
              var d = c.K,
                e = void 0 === d ? Ha() : d,
                f = c.M.Sb,
                g = Cd(a);
              d = e.C("rqnl", 0) + 1;
              e.D("rqnl", d);
              if ((e = n(g, L(".", [f, "browserInfo"])))) (e.rqnl = d), Tf(a);
              b();
            },
            qa: function (c, b) {
              Zi(a, c);
              b();
            },
          };
        },
        1
      );
      Eb(Be, 100);
      aa("1", Be, 100);
      W.push(Rs);
      aa("n", Pe, 1);
      aa("n", Ie, 2);
      aa("n", Pb(), 3);
      aa("n", Be, 100);
      Aa.n = mb;
      xa.n = mc;
      kc({ He: { ca: "accurateTrackBounce" } });
      W.push(Ss);
      Aa.m = Md("cm");
      xa.m = Ds;
      aa("m", Pb(["u", "v", "vf"]), 1);
      aa("m", Be, 2);
      kc({ Hg: { ca: "clickmap" } });
      W.push(Ts);
      W.push(Us);
      W.push(Vs);
      W.push(Ws);
      (function () {
        W.push(Xs);
        Ud.push("ecommerce");
        kc({
          pd: {
            ca: "ecommerce",
            Na: function (a) {
              if (a) return !0 === a ? "dataLayer" : "" + a;
            },
          },
        });
      })();
      W.push(Ys);
      Xa.push($s);
      W.push(at);
      Ud.push("user_id");
      Xa.push(B("p.st", bt));
      W.push(ct);
      Eb(function (a, c) {
        return {
          qa: function (b, d) {
            var e = ya(a, c);
            e = e && e.userParams;
            var f = (b.M || {}).Be;
            e && f && e(f);
            d();
          },
        };
      }, 0);
      Od.push("debug");
      Ic.unshift(ft);
      W.push(gt);
      Ic.push(function (a) {
        var c = H(a);
        c.C("i") || (c.D("i", !0), ja(a).F(a, ["message"], v(a, xp)));
      });
      (function () {
        var a,
          c = ((a = {}), (a.tp = w(cb, ck, Nb)), (a.tpid = w(cb, kr)), a);
        z(Hd, c);
      })();
      Eb(xd, 20);
      aa("n", xd, 20);
      aa("1", xd, 20);
      Ic.unshift(it);
      Hd.fp = function (a, c, b) {
        if (b.J && b.J.nohit) return null;
        b = H(a).C;
        if (!b("fpe")) return null;
        c = ht(c);
        if (c.Zg) return null;
        b = b("fht", Infinity);
        a: {
          var d = n(a, "performance.getEntriesByType");
          if (V(d)) {
            if (
              ((a = ia(
                w(T, Q("name"), za("first-contentful-paint")),
                d.call(a.performance, "paint")
              )),
              a.length)
            ) {
              a = a[0].startTime;
              break a;
            }
          } else {
            var e = n(a, "chrome.loadTimes");
            d = cl(a);
            if (
              V(e) &&
              ((e = e.call(a.chrome)), (e = n(e, "firstPaintTime")), d && e)
            ) {
              a = 1e3 * e - d;
              break a;
            }
            if ((a = n(a, "performance.timing.msFirstPaint"))) {
              a -= d;
              break a;
            }
          }
          a = void 0;
        }
        return a && b > a ? ((c.Zg = a), Math.round(a)) : null;
      };
      Xa.push(jt);
      W.push(function (a, c) {
        var b;
        return (
          (b = {}),
          (b.ecommerceAdd = B("ecm.a", lt(a, c))),
          (b.ecommerceRemove = B("ecm.r", mt(a, c))),
          (b.ecommerceDetail = B("ecm.d", nt(a, c))),
          (b.ecommercePurchase = B("ecm.p", ot(a, c))),
          b
        );
      });
      (function () {
        var a,
          c = {};
        c.bu = ut;
        c.pri = jp;
        c.wv = v(2, T);
        c.ds = mp;
        c.co = function (b) {
          return xb(H(b).C("jn"));
        };
        c.td = At;
        z(
          c,
          ((a = {}),
          (a.iss = w(gs, Nb)),
          (a.hdl = w(hs, Nb)),
          (a.iia = w(is, Nb)),
          (a.cpf = w(tt, Nb)),
          (a.ntf = u(function (b) {
            b = n(b, "Notification.permission");
            b = "denied" === b ? !1 : "granted" === b ? !0 : null;
            return bb(b) ? null : b ? 2 : 1;
          })),
          (a.eu = nc("isEU")),
          (a.ns = cl),
          (a.np = function (b) {
            return Ua(b, 0, 100) ? null : ed(he($a(Kf(b), 100)));
          }),
          a)
        );
        c.pani = vt;
        c.pci = wt;
        c.si = xt;
        c.gi = yt;
        z(Hd, c);
      })();
      (function () {
        var a = {};
        a.oo = nc("oo");
        a.pmc = nc("cmc");
        a.lt = function (c) {
          var b = Qd(c).C("lt", null);
          return b ? c.Math.round(100 * b) : b;
        };
        a.re = w(Iq, Nb);
        a.aw = function (c) {
          c = Mb(w(fa, Ec), [
            c.document.hidden,
            c.document.msHidden,
            c.document.webkitHidden,
          ]);
          return fa(c) ? null : xb(!c);
        };
        a.rcm = Dt;
        a.yu = function (c) {
          return (c = Lc(c, "").C("yandexuid")) && c.substring(0, 25);
        };
        a.ifc = nc("ifc");
        a.ifb = nc("ifb");
        a.ecs = nc("ecs");
        a.csi = nc("scip");
        a.cdl = nc("cdl");
        Ke.eco = u(hp, w(cb, M));
        z(Ke, a);
      })();
      xa.er = $c;
      (function (a) {
        try {
          var c = Rg(a, "er"),
            b = ep(a, c);
          Tj.push(function (d, e, f, g) {
            var h, k, l, m, p;
            0.01 >= a.Math.random() ||
              b(
                ((h = {}),
                (h[d] =
                  ((k = {}),
                  (k[Ca.$b] =
                    ((l = {}),
                    (l[e] =
                      ((m = {}),
                      (m[f] = g
                        ? ((p = {}), (p[a.location.href] = g), p)
                        : a.location.href),
                      m)),
                    l)),
                  k)),
                h)
              );
          });
        } catch (d) {}
      })(window);
      (function () {
        ef.push(ip);
        He.unshift(dp);
        Wg.push(function (a) {
          var c = void 0;
          void 0 === c && (c = !0);
          H(a).D("oo", c);
        });
      })();
      Eb(function (a, c) {
        return {
          N: function (b, d) {
            var e = b.J,
              f = b.K;
            !sl[c.id] &&
              f.C("pv") &&
              c.exp &&
              !e.nohit &&
              ((e.exp = c.exp), (sl[c.id] = !0));
            d();
          },
        };
      }, -99);
      W.push(Et);
      Ub.e = Vb;
      Aa.e = mb;
      xa.e = mc;
      kc({ exp: { ca: "experiments" } });
      nk.experiments = "ex";
      (function () {
        var a;
        qh.push(Ft);
        Aa.f = mb;
        z(xa, ((a = {}), (a.f = el), a));
        aa("f", Pb(), 1);
        aa("f", qj, 2);
        aa("f", xd, 20);
      })();
      ef.push(function (a, c) {
        var b = { ma: M(c), kd: ya(a, c), $f: la(a), Qd: Sa(a) },
          d = b.$f(pb);
        if (!b.Qd.Id) {
          var e = b.Qd.C("ymoo" + b.ma);
          if (e && 30 > d - e)
            (b = b.ma), delete H(a).C("counters", {})[b], Ya(Qa("uws"));
          else pa(c, Gt(b))["catch"](A(a, "d.f"));
        }
      });
      (function () {
        var a,
          c,
          b = [Cb];
        z(xa, ((a = {}), (a.s = b), (a.S = b), (a.u = $c), a));
        z(Aa, ((c = {}), (c.s = Wb), (c.S = mb), (c.u = Wb), c));
        aa("s");
        aa("u");
        aa("S", Pb(["v", "hid", "u", "vf", "rn"]), 1);
        W.push(B("s", Po));
      })();
      Aa["8"] = Wb;
      xa["8"] = [ag];
      dl.push([ag, 0]);
      W.push(
        B("p.us", function (a, c) {
          return pa(c, function (b) {
            if (n(b, "settings.sbp"))
              return qi(a, b, { ab: c, Qb: "8", Od: "cs" });
          });
        })
      );
      aa("p", Pb(Yg), 1);
      Lg(
        "pub",
        function (a, c) {
          return {
            N: function (b, d) {
              di(a, c, b);
              d();
            },
          };
        },
        1
      );
      Aa.p = Kt;
      xa.p = Ba([Bb, Cb]);
      Xa.push(Ot);
      kc({
        xb: { ca: "webvisor", Na: Db },
        Og: { ca: "disableFormAnalytics", Na: Db },
      });
      aa("4", Pb(Yg), 1);
      Aa["4"] = vl;
      xa["4"] = Ba([Bb, Cb, Tc]);
      Xa.push(Ut);
      (function () {
        aa("W", Pb(Yg), 1);
        Lg("wv", co, 1);
        xa.W = Ba([Bb, Cb]);
        Aa.W = vl;
        Xa.push(Du);
        W.push(Eu);
        kc({ xb: { ca: "webvisor" } });
        kc({ Mi: { ca: "trustedDomains" }, fc: { ca: "childIframe", Na: Db } });
        Wg.push(function (a) {
          H(a).C("stopRecorder", F)();
        });
      })();
      W.push(Gu);
      aa("pi");
      Aa.pi = Wb;
      xa.pi = $c;
      Lg(
        "w",
        function (a, c) {
          return {
            N: function (b, d) {
              if (b.K) {
                var e = vf(c),
                  f = e.status;
                "rt" === e.Qb &&
                  f &&
                  (b.K.D("rt", f),
                  b.ja || (b.ja = {}),
                  (b.ja.Eh = 1 === f ? Nh(a, c) + "." : ""));
              }
              d();
            },
          };
        },
        2
      );
      W.push(Iu);
      W.push(Tu);
      xa["6"] = Ba([Bb, Cb]);
      Aa["6"] = Wb;
      W.push(Uu);
      W.push(Bt);
      (function () {
        Ig.push(function (a, c) {
          c.informer = kn(a);
        });
      })();
      Eb(sf, 6);
      aa("1", sf, 6);
      aa("adb");
      aa("n", sf, 4);
      xa.adb = $c;
      Aa.adb = Gj;
      ce.push(Wu);
      xa["5"] = mc;
      Aa["5"] = mb;
      Ub["5"] = ia(w(Sc, pc([Pe, Ie]), Ec), Vb);
      W.push(Xu);
      aa("5", xd, 20);
      Eb(Gh, 7);
      aa("n", Gh, 6);
      Xa.push(Yu);
      Aa.d = mb;
      aa("d", Pb(["hid", "u", "v", "vf"]), 1);
      xa.d = $c;
      aa(
        "n",
        function (a, c) {
          return {
            qa: function (b, d) {
              if (!b.M || !b.M.force) {
                var e = 0.002,
                  f = c.id === Ca.rg ? 1 : 0.002,
                  g,
                  h,
                  k,
                  l,
                  m;
                void 0 === e && (e = 1);
                void 0 === f && (f = 1);
                var p = wd(a);
                if (
                  p &&
                  V(p.getEntriesByType) &&
                  ((e = Math.random() > e), (f = Math.random() > f), !e || !f)
                ) {
                  p = p.getEntriesByType("resource");
                  for (
                    var q = {}, r = {}, t = {}, y = rl(), E = U(a).href, N = 0;
                    N < p.length;
                    N += 1
                  ) {
                    var K = p[N],
                      ka = K.name.replace(ql, "").split("?")[0],
                      qa = sc(ka),
                      Ka =
                        ((g = {}),
                        (g.dns = Math.round(
                          K.domainLookupEnd - K.domainLookupStart
                        )),
                        (g.tcp = Math.round(K.connectEnd - K.connectStart)),
                        (g.duration = Math.round(K.duration)),
                        (g.response = Math.round(
                          K.responseEnd - K.requestStart
                        )),
                        g);
                    "script" !== K.initiatorType ||
                      e ||
                      (r[ka] = z(
                        Ka,
                        ((h = {}),
                        (h.name = K.name),
                        (h.decodedBodySize = K.decodedBodySize),
                        (h.transferSize = Math.round(K.transferSize)),
                        h)
                      ));
                    (!Ct[qa] && !y[qa]) ||
                      q[ka] ||
                      f ||
                      (q[ka] = z(Ka, ((k = {}), (k.pages = E), k)));
                  }
                  ca(q).length && (t.timings8 = q);
                  ca(r).length && (t.scripts = r);
                  if (ca(t).length)
                    ua(
                      a,
                      "d",
                      c
                    )(
                      {
                        K: Ha(((l = {}), (l.ar = 1), (l.pv = 1), l)),
                        $: { ba: wb(a, t) || void 0 },
                        J: ((m = {}), (m["page-url"] = E), m),
                      },
                      { id: Ca.vg, aa: "0" }
                    )["catch"](A(a, "r.tim.ng2"));
                }
              }
              d();
            },
          };
        },
        7
      );
      xa.ci = [Cb];
      Aa.ci = Wb;
      Xa.push(
        B("p.sci", function (a, c) {
          return pa(c, v(a, hn))["catch"](A(a, "ins.cs"));
        })
      );
      W.push(Zu);
      Xa.push(st);
      W.push($u);
      Eb(gh, 8);
      aa("f", gh, 3);
      aa("n", gh, 5);
      aa(
        "h",
        function (a) {
          return {
            qa: function (c, b) {
              var d = c.Df;
              Nf(c) && d && H(a).D("isEU", n(d, "settings.eu"));
              b();
            },
          };
        },
        3
      );
      ce.push(Cu);
      Ic.push(av);
      Xa.push(fv);
      W.push(gv);
      kc({ Ti: { ca: "yaDisableGDPR" }, Ui: { ca: "yaGDPRLang" } });
      He.push(function (a, c) {
        return { N: D([a, c], Nm) };
      });
      Od.push("gdpr");
      Od.push("gdpr_popup");
      rg.push(function (a, c) {
        var b = ie(a);
        b = je(b);
        if (ia(pc(jv), b).length) return !0;
        b = c(a, "gdpr");
        return G(b, [Mc, iv]);
      });
      He.push(function (a) {
        return {
          N: function (c, b) {
            var d = c.ja || {},
              e;
            (e = n(a, "document.referrer"))
              ? ((e = Oc(a, e).host), (e = ij(e)), (e = Xg + "." + (e || Ht)))
              : (e = ec);
            c.ja = z(d, { Fh: [e] });
            b();
          },
        };
      });
      Eb(Ol, 5);
      aa("1", Ol, 6);
      xa.c = $c;
      Aa.c = Wb;
      aa("1", nh, 7);
      Eb(nh, 7);
      Xa.push(B("p.ot", mv));
      Xa.push(hb("cta", nv, !0));
      aa(
        "n",
        function (a) {
          var c = H(a);
          return {
            N: function (b, d) {
              var e = b.M || {},
                f = c.C("cta"),
                g = c.C("cta.e");
              if (f || g) {
                e.R || (e.R = {});
                e.R.__ym || (e.R.__ym = {});
                var h = {};
                f
                  ? ((f = C(function (k) {
                      var l,
                        m = n(k, "topic");
                      k = n(k, "version");
                      return (l = {}), (l.topic = m), (l.version = k), l;
                    }, f)),
                    (h.ct = f))
                  : g && (h["ct.e"] = g);
                z(e.R.__ym, h);
                b.M = z(b.M || {}, e);
              }
              d();
            },
          };
        },
        7
      );
      aa("n", Vf, 8);
      W.push(ov);
      W.push(pv);
      Ic.push(
        B("cdl", function (a) {
          var c = H(a).Ga;
          if ((a = n(a, "navigator.cookieDeprecationLabel")))
            try {
              a.getValue().then(v("cdl", c), D(["cdl", "e"], c));
            } catch (b) {
              c("cdl", "d");
            }
          else c("cdl", "na");
        })
      );
      z(gl, kt);
      Xa.push(sv);
      W.push(function (a, c) {
        var b = Sl(a),
          d = M(c),
          e = b[d];
        e || ((e = {}), (b[d] = e));
        e.Hh = !0;
        if ((b = e.Uf)) (d = Tl(a)), x(d, b);
      });
      Od.push("_ym_sup_debug");
      Ic.unshift(tv);
      x(tb(na)(window), Ic);
      if (window.Ya && cf) {
        var Ul = Ca.ic;
        window.Ya[Ul] = cf;
        Gs(window);
        x(w(Kc([window, window.Ya[Ul]]), na), Ig);
      }
      (function (a) {
        var c = n(a, "ym");
        if (c) {
          var b = n(c, "a");
          b || ((c.a = []), (b = c.a));
          var d = Tl(a);
          Ed(
            a,
            b,
            function (e) {
              e.oa.F(d);
            },
            !0
          );
        }
      })(window);
    })();
  } catch (cf) {}
}).call(this);
