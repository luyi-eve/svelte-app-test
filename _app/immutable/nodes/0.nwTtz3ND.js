import{s as N,n as M,d as f,e as C,u as V,x as h,z as p,p as S,c as g,f as J,k as P,D as z,H as D,E as B,F as Q,G as R,I as U,j as v,g as W,l as E}from"../chunks/CwplC9Io.js";import{S as T,i as I,d as L,t as k,a as w,m as O,b as A,e as j}from"../chunks/CXSZxs7i.js";import{u as X,t as Y,d as Z,s as q,a as x,b as $,c as ee,l as te,m as ae,e as ne}from"../chunks/CGCFbMFt.js";import{g as se}from"../chunks/D0QH3NT1.js";const oe=!0,ke=Object.freeze(Object.defineProperty({__proto__:null,prerender:oe},Symbol.toStringTag,{value:"Module"}));class re extends T{constructor(e){super(),I(this,e,null,null,N,{})}}function F(n){X.set(n)}function le(n){Y.set(n)}function K({defaultMode:n,themeColors:e,darkClassNames:a=["dark"],lightClassNames:t=[],defaultTheme:s=""}){const o=document.documentElement,l=localStorage.getItem("mode-watcher-mode")||n,m=localStorage.getItem("mode-watcher-theme")||s,i=l==="light"||l==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches;if(i?(a.length&&o.classList.remove(...a),t.length&&o.classList.add(...t)):(t.length&&o.classList.remove(...t),a.length&&o.classList.add(...a)),o.style.colorScheme=i?"light":"dark",e){const r=document.querySelector('meta[name="theme-color"]');r&&r.setAttribute("content",l==="light"?e.light:e.dark)}m&&(o.setAttribute("data-theme",m),localStorage.setItem("mode-watcher-theme",m)),localStorage.setItem("mode-watcher-mode",l)}const{document:u}=se;function H(n){let e,a;return{c(){e=P("meta"),this.h()},l(t){e=J(t,"META",{name:!0,content:!0}),this.h()},h(){S(e,"name","theme-color"),S(e,"content",a=n[0].dark)},m(t,s){g(t,e,s)},p(t,s){s&1&&a!==(a=t[0].dark)&&S(e,"content",a)},d(t){t&&f(e)}}}function ie(n){let e,a="<script>("+K.toString()+")("+JSON.stringify(n[2])+");<\/script>",t;return{c(){e=new D(!1),t=h(),this.h()},l(s){e=z(s,!1),t=h(),this.h()},h(){e.a=t},m(s,o){e.m(a,s,o),g(s,t,o)},p:M,d(s){s&&(f(t),e.d())}}}function me(n){let e,a=`<script nonce=${n[1]}>(`+K.toString()+")("+JSON.stringify(n[2])+");<\/script>",t;return{c(){e=new D(!1),t=h(),this.h()},l(s){e=z(s,!1),t=h(),this.h()},h(){e.a=t},m(s,o){e.m(a,s,o),g(s,t,o)},p(s,o){o&2&&a!==(a=`<script nonce=${s[1]}>(`+K.toString()+")("+JSON.stringify(s[2])+");<\/script>")&&e.p(a)},d(s){s&&(f(t),e.d())}}}function ce(n){let e,a,t=n[0]&&H(n);function s(m,i){return m[1]?me:ie}let o=s(n),l=o(n);return{c(){t&&t.c(),e=h(),l.c(),a=h()},l(m){const i=V("svelte-1nen96w",u.head);t&&t.l(i),e=h(),l.l(i),a=h(),i.forEach(f)},m(m,i){t&&t.m(u.head,null),C(u.head,e),l.m(u.head,null),C(u.head,a)},p(m,[i]){m[0]?t?t.p(m,i):(t=H(m),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null),o===(o=s(m))&&l?l.p(m,i):(l.d(1),l=o(m),l&&(l.c(),l.m(a.parentNode,a)))},i:M,o:M,d(m){t&&t.d(m),f(e),l.d(m),f(a)}}}function de(n,e,a){let t,{track:s=!0}=e,{defaultMode:o="system"}=e,{themeColors:l=void 0}=e,{disableTransitions:m=!0}=e,{darkClassNames:i=["dark"]}=e,{lightClassNames:r=[]}=e,{defaultTheme:d=""}=e,{nonce:b=""}=e,{themeStorageKey:_="mode-watcher-theme"}=e,{modeStorageKey:y="mode-watcher-mode"}=e;p(()=>{const c=Z.subscribe(()=>{});return q.tracking(s),q.query(),F("light"),localStorage.setItem(getModeStorageKey(),"light"),document.documentElement.setAttribute("data-theme","light"),le("light"),localStorage.setItem(getThemeStorageKey(),"light"),()=>{c()}});const G={defaultMode:o,themeColors:l,darkClassNames:i,lightClassNames:r,defaultTheme:d,modeStorageKey:y,themeStorageKey:_};return n.$$set=c=>{"track"in c&&a(3,s=c.track),"defaultMode"in c&&a(4,o=c.defaultMode),"themeColors"in c&&a(0,l=c.themeColors),"disableTransitions"in c&&a(5,m=c.disableTransitions),"darkClassNames"in c&&a(6,i=c.darkClassNames),"lightClassNames"in c&&a(7,r=c.lightClassNames),"defaultTheme"in c&&a(8,d=c.defaultTheme),"nonce"in c&&a(9,b=c.nonce),"themeStorageKey"in c&&a(10,_=c.themeStorageKey),"modeStorageKey"in c&&a(11,y=c.modeStorageKey)},n.$$.update=()=>{n.$$.dirty&32&&x.set(m),n.$$.dirty&1&&$.set(l),n.$$.dirty&64&&ee.set(i),n.$$.dirty&128&&te.set(r),n.$$.dirty&2048&&ae.set(y),n.$$.dirty&1024&&ne.set(_),n.$$.dirty&512&&a(1,t=typeof window>"u"?b:"")},[l,t,G,s,o,m,i,r,d,b,_,y]}class fe extends T{constructor(e){super(),I(this,e,de,ce,N,{track:3,defaultMode:4,themeColors:0,disableTransitions:5,darkClassNames:6,lightClassNames:7,defaultTheme:8,nonce:9,themeStorageKey:10,modeStorageKey:11})}}function he(n){let e,a,t,s,o,l;e=new fe({});const m=n[2].default,i=B(m,n,n[1],null);return o=new re({}),{c(){j(e.$$.fragment),a=E(),t=P("div"),i&&i.c(),s=E(),j(o.$$.fragment),this.h()},l(r){A(e.$$.fragment,r),a=v(r),t=J(r,"DIV",{class:!0});var d=W(t);i&&i.l(d),s=v(d),A(o.$$.fragment,d),d.forEach(f),this.h()},h(){S(t,"class","relative mx-auto min-h-screen max-w-2xl bg-background px-6 py-12 font-sans antialiased sm:py-24")},m(r,d){O(e,r,d),g(r,a,d),g(r,t,d),i&&i.m(t,null),C(t,s),O(o,t,null),l=!0},p(r,[d]){i&&i.p&&(!l||d&2)&&Q(i,m,r,r[1],l?U(m,r[1],d,null):R(r[1]),null)},i(r){l||(w(e.$$.fragment,r),w(i,r),w(o.$$.fragment,r),l=!0)},o(r){k(e.$$.fragment,r),k(i,r),k(o.$$.fragment,r),l=!1},d(r){r&&(f(a),f(t)),L(e,r),i&&i.d(r),L(o)}}}function ue(n,e,a){let{$$slots:t={},$$scope:s}=e;const o=!0;return F("light"),n.$$set=l=>{"$$scope"in l&&a(1,s=l.$$scope)},[o,s,t]}class we extends T{constructor(e){super(),I(this,e,ue,he,N,{prerender:0})}get prerender(){return this.$$.ctx[0]}}export{we as component,ke as universal};
