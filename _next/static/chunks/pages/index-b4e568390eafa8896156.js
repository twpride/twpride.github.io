_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{RNiq:function(e,n,t){"use strict";t.r(n),t.d(n,"__N_SSG",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t("nKUr"),o=t("g4pe"),c=t.n(o),a=t("YFqc"),i=t.n(a),l=t("CafY"),s=!0;function u(e){var n=e.allPostsData;return Object(r.jsxs)(l.a,{children:[Object(r.jsx)(c.a,{children:Object(r.jsx)("title",{children:"Howard Hwang"})}),n.map((function(e){var n=e.id,t=e.title,o=(e.date,e.preview),c=e.blurb,a=(e.tags,e.bgColor);return Object(r.jsxs)("div",{className:"center-card preview",children:[Object(r.jsx)("img",{src:o,style:{backgroundColor:a}}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"title",children:Object(r.jsx)(i.a,{href:"/projects/".concat(n),children:t})}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:"blurb",children:c})]})]},n)}))]})}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),a=t("elyg"),i=t("nOHt"),l=t("vNVm"),s={};function u(e,n,t,r){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),o=t&&t.pathname||"/",f=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],i=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):i||c}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,b=e.replace,h=e.shallow,j=e.scroll,g=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var m=c.Children.only(v),w=m&&"object"===typeof m&&m.ref,y=(0,l.useIntersection)({rootMargin:"200px"}),_=r(y,2),O=_[0],E=_[1],N=c.default.useCallback((function(e){O(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,O]);(0,c.useEffect)((function(){var e=E&&n&&(0,a.isLocalURL)(d),r="undefined"!==typeof g?g:t&&t.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&u(t,d,p,{locale:r})}),[p,d,E,g,n,t]);var x={ref:N,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,i,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:l,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,t,d,p,b,h,j,g)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),u(t,d,p,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var L="undefined"!==typeof g?g:t&&t.locale,M=t&&t.isLocaleDomain&&(0,a.getDomainLocale)(p,L,t&&t.locales,t&&t.domainLocales);x.href=M||(0,a.addBasePath)((0,a.addLocale)(p,L,t&&t.defaultLocale))}return c.default.cloneElement(m,x)};n.default=f},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,l=(0,o.useRef)(),s=(0,o.useState)(!1),u=r(s,2),f=u[0],d=u[1],p=(0,o.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t("q1tI"),c=t("0G5g"),a="undefined"!==typeof IntersectionObserver;var i=new Map},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,1,3,2]]]);