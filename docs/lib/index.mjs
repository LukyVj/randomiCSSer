'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
const n = (
  n = {
    count: 3,
    variable: 'random',
    unit: '',
    range: {
      min: 1,
      max: 100,
      round: !1,
    },
    target: 'undefined' == typeof window ? null : document.querySelector('body'),
    values: void 0,
  },
) => {
  const r = Array.isArray(n),
    a = r ? n : [n],
    t = [],
    e = (a, t, e, o) => {
      const u = r ? n[o].values : n.values;
      if (u && u.length > 0) return u[Math.floor(Math.random() * u.length)];
      {
        const n = t - a;
        return e ? Math.round(a + Math.random() * n) : a + Math.random() * n;
      }
    },
    o = (n) => {
      a.map(({ variable: r, unit: a, count: o, target: u, range: d, values: i }, l) => {
        (({
          count: n = 3,
          variable: r = 'random',
          unit: a = '',
          range: o = {
            min: 1,
            max: 100,
            round: !1,
          },
          target: u = 'undefined' == typeof window ? null : document.querySelector('body'),
          dom: d,
          index: i,
        }) => {
          const l = u,
            m = [],
            s = {
              [r]: m,
            },
            g = [];
          Array.from({
            length: n,
          }).map((t, u) => {
            const s = 1 === n ? `--${r}` : `--${r}-${u}`,
              g = a ? `${e(o.min, o.max, o.round, i)}${a}` : e(o.min, o.max, o.round, i);
            return (
              m.push({
                [s]: g,
              }),
              l && d && l.style.setProperty(`${s}`, `${g}`),
              null
            );
          }),
            g.push(JSON.stringify(s)),
            t.push(g.join(','));
        })({
          count: o,
          variable: r,
          unit: a,
          range: d,
          target: u,
          values: i,
          dom: !1 !== n,
          index: l,
        });
      });
    };
  return {
    load: o,
    getVars: (n) => {
      o(!1);
      const r = n ? t[n] : t.join(',');
      return JSON.parse(`[${r}]`);
    },
  };
};

//# v: 1.0.13
exports.default = n;
