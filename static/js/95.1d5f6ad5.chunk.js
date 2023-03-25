(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[95],{1259:function(e,t,n){"use strict";n.r(t);var a=n(11),c=n(2),r=n(45),i=n(37),o=n(3),s=n(244),l=n(5),u=function(e){return e.family.view},j=Object(l.a)([u],(function(e){return e.record})),b={selectLoading:Object(l.a)([u],(function(e){return Boolean(e.loading)})),selectRecord:j,selectRaw:u},d=n(0),m=n(649),f=n(724),O=n(1237),p=function(e){var t=e.record;return e.loading||!t?Object(a.jsx)(m.a,{}):Object(a.jsxs)(f.a,{children:[Boolean(t.famTitle)&&Object(a.jsx)(O.a.Item,Object(d.a)(Object(d.a)({},f.b),{},{label:Object(o.c)("entities.family.fields.famTitle"),children:t.famTitle})),Boolean(t.famDescr)&&Object(a.jsx)(O.a.Item,Object(d.a)(Object(d.a)({},f.b),{},{label:Object(o.c)("entities.family.fields.famDescr"),children:t.famDescr}))]})},x=n(831),h=n(689),v=n(613),g=n(212),y=n(687),T=n(99),C=n(143),w=n(899),I=n(167),P=n(898),D=n(637),R=function(e){var t=Object(r.d)(),n=Object(i.h)(),c=Object(r.e)(C.a.selectPermissionToRead),s=Object(r.e)(w.a.selectPermissionToEdit),l=Object(r.e)(w.a.selectPermissionToDestroy),u=Object(r.e)(P.a.selectLoading),j=n.params.id;return Object(a.jsxs)(D.a,{children:[s&&Object(a.jsx)(T.a,{to:"/family/".concat(j,"/edit"),children:Object(a.jsx)(g.a,{type:"primary",icon:Object(a.jsx)(x.a,{}),children:Object(o.c)("common.edit")})}),l&&Object(a.jsx)(y.a,{title:Object(o.c)("common.areYouSure"),onConfirm:function(){t(I.a.doDestroy(j))},okText:Object(o.c)("common.yes"),cancelText:Object(o.c)("common.no"),children:Object(a.jsx)(g.a,{type:"primary",icon:Object(a.jsx)(h.a,{}),disabled:u,children:Object(o.c)("common.destroy")})}),c&&Object(a.jsx)(T.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(j)),children:Object(a.jsx)(g.a,{icon:Object(a.jsx)(v.a,{}),children:Object(o.c)("auditLog.menu")})})]})},U=n(626),B=n(628),L=n(627);t.default=function(e){var t=Object(r.d)(),n=Object(i.h)(),l=Object(r.e)(b.selectLoading),u=Object(r.e)(b.selectRecord);return Object(c.useEffect)((function(){t(s.a.doFind(n.params.id))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(B.a,{items:[[Object(o.c)("dashboard.menu"),"/"],[Object(o.c)("entities.family.menu"),"/family"],[Object(o.c)("entities.family.view.title")]]}),Object(a.jsxs)(U.a,{children:[Object(a.jsx)(L.a,{children:Object(o.c)("entities.family.view.title")}),Object(a.jsx)(R,{match:n}),Object(a.jsx)(p,{loading:l,record:u})]})]})}},626:function(e,t,n){"use strict";var a=n(184);function c(){var e=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return c=function(){return e},e}var r=n(185).a.div(c());t.a=r},627:function(e,t,n){"use strict";var a=n(184);function c(){var e=Object(a.a)(["\n  margin-bottom: 36px;\n"]);return c=function(){return e},e}var r=n(185).a.h1(c());t.a=r},628:function(e,t,n){"use strict";var a=n(11),c=n(667),r=(n(2),n(99));t.a=function(e){var t=function(e){return e.length>1};return Object(a.jsx)(c.a,{children:e.items.map((function(e){return Object(a.jsx)(c.a.Item,{children:t(e)?Object(a.jsx)(r.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},637:function(e,t,n){"use strict";var a=n(184);function c(){var e=Object(a.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return c=function(){return e},e}var r=n(185).a.div(c());t.a=r},649:function(e,t,n){"use strict";var a=n(11),c=n(656);n(2);t.a=function(e){return Object(a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(a.jsx)(c.a,{})})}},724:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=n(184);function c(){var e=Object(a.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return c=function(){return e},e}var r=n(185).a.div(c()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=r},898:function(e,t,n){"use strict";var a=n(5),c={selectLoading:Object(a.a)([function(e){return e.family.destroy}],(function(e){return Boolean(e.loading)}))};t.a=c},899:function(e,t,n){"use strict";var a=n(5),c=n(42),r=n(79),i=n(186),o=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.familyRead)})),s=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.familyEdit)})),l=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.familyCreate)})),u=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.familyImport)})),j={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:l,selectPermissionToDestroy:Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.familyDestroy)})),selectPermissionToImport:u};t.a=j}}]);