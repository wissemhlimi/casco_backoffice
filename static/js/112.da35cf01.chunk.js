(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[112],{1526:function(n,e,t){"use strict";t.r(e);var i=t(11),r=t(223),a=(t(2),t(45)),c=t(3),o=t(24),l=t(42),s=t(962),u=t(964),d=t(963),h=t(998),b=t(766);e.default=function(n){var e=Object(a.d)(),t=Object(a.e)(l.a.selectCurrentUserEmail),p=Object(a.e)(l.a.selectLoadingEmailConfirmation),f=Object(a.e)(l.a.selectBackgroundImageUrl),g=Object(a.e)(l.a.selectLogoUrl);return Object(i.jsx)(u.a,{style:{backgroundImage:"url(".concat(f||"/images/emailUnverified.jpg",")")},children:Object(i.jsxs)(s.a,{children:[Object(i.jsx)(d.a,{children:g?Object(i.jsx)("img",{src:g,width:"240px",alt:Object(c.c)("app.title")}):Object(i.jsx)("h1",{children:Object(c.c)("app.title")})}),Object(i.jsx)("h3",{style:{textAlign:"center"},children:Object(c.e)("auth.emailUnverified.message",t)}),Object(i.jsx)(r.a,{onClick:function(){e(o.a.doSendEmailConfirmation())},style:{marginTop:"24px"},type:"primary",size:"large",block:!0,htmlType:"submit",loading:p,children:Object(c.c)("auth.emailUnverified.submit")}),Object(i.jsx)(h.a,{children:Object(i.jsx)(b.a,{onClick:function(){e(o.a.doSignout())},children:Object(c.c)("auth.signinWithAnotherAccount")})})]})})}},766:function(n,e,t){"use strict";var i=t(194);function r(){var n=Object(i.a)(["\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  color: var(--link-color);\n  text-decoration: none;\n  display: inline;\n  margin: 0;\n  padding: 0;\n\n  &:hover {\n    text-decoration: none;\n  }\n  &:focus {\n    text-decoration: none;\n  }\n"]);return r=function(){return n},n}var a=t(195).a.button(r());e.a=a},962:function(n,e,t){"use strict";var i=t(194);function r(){var n=Object(i.a)(["\n  width: 500px;\n  height: 100%;\n  min-height: 100%;\n  overflow-y: auto;\n  z-index: 1;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 56px 40px;\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: white;\n  }\n\n  .ant-checkbox-wrapper {\n    color: white;\n  }\n\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n"]);return r=function(){return n},n}var a=t(195).a.div(r());e.a=a},963:function(n,e,t){"use strict";var i=t(194);function r(){var n=Object(i.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 48px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  color: white;\n\n  h1 {\n    margin-bottom: 0;\n  }\n"]);return r=function(){return n},n}var a=t(195).a.div(r());e.a=a},964:function(n,e,t){"use strict";var i=t(194);function r(){var n=Object(i.a)(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n  }\n"]);return r=function(){return n},n}var a=t(195).a.div(r());e.a=a},998:function(n,e,t){"use strict";var i=t(194);function r(){var n=Object(i.a)(["\n  margin-top: 36px;\n  text-align: center;\n"]);return r=function(){return n},n}var a=t(195).a.div(r());e.a=a}}]);