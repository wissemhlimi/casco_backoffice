(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[98],{1257:function(e,t,n){"use strict";n.r(t);var c=n(11),r=n(2),a=n(45),i=n(37),o=n(3),s=n(243),u=n(5),j=function(e){return e.unit.view},l=Object(u.a)([j],(function(e){return e.record})),d={selectLoading:Object(u.a)([j],(function(e){return Boolean(e.loading)})),selectRecord:l,selectRaw:j},b=n(0),m=n(649),O=n(724),f=n(1237),p=function(e){var t=e.record;return e.loading||!t?Object(c.jsx)(m.a,{}):Object(c.jsx)(O.a,{children:Boolean(t.unitTitle)&&Object(c.jsx)(f.a.Item,Object(b.a)(Object(b.a)({},O.b),{},{label:Object(o.c)("entities.unit.fields.unitTitle"),children:t.unitTitle}))})},x=n(831),h=n(689),v=n(613),g=n(212),T=n(687),C=n(99),w=n(143),y=n(791),P=n(166),I=n(897),R=n(637),U=function(e){var t=Object(a.d)(),n=Object(i.h)(),r=Object(a.e)(w.a.selectPermissionToRead),s=Object(a.e)(y.a.selectPermissionToEdit),u=Object(a.e)(y.a.selectPermissionToDestroy),j=Object(a.e)(I.a.selectLoading),l=n.params.id;return Object(c.jsxs)(R.a,{children:[s&&Object(c.jsx)(C.a,{to:"/unit/".concat(l,"/edit"),children:Object(c.jsx)(g.a,{type:"primary",icon:Object(c.jsx)(x.a,{}),children:Object(o.c)("common.edit")})}),u&&Object(c.jsx)(T.a,{title:Object(o.c)("common.areYouSure"),onConfirm:function(){t(P.a.doDestroy(l))},okText:Object(o.c)("common.yes"),cancelText:Object(o.c)("common.no"),children:Object(c.jsx)(g.a,{type:"primary",icon:Object(c.jsx)(h.a,{}),disabled:j,children:Object(o.c)("common.destroy")})}),r&&Object(c.jsx)(C.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(l)),children:Object(c.jsx)(g.a,{icon:Object(c.jsx)(v.a,{}),children:Object(o.c)("auditLog.menu")})})]})},L=n(626),k=n(628),B=n(627);t.default=function(e){var t=Object(a.d)(),n=Object(i.h)(),u=Object(a.e)(d.selectLoading),j=Object(a.e)(d.selectRecord);return Object(r.useEffect)((function(){t(s.a.doFind(n.params.id))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k.a,{items:[[Object(o.c)("dashboard.menu"),"/"],[Object(o.c)("entities.unit.menu"),"/unit"],[Object(o.c)("entities.unit.view.title")]]}),Object(c.jsxs)(L.a,{children:[Object(c.jsx)(B.a,{children:Object(o.c)("entities.unit.view.title")}),Object(c.jsx)(U,{match:n}),Object(c.jsx)(p,{loading:u,record:j})]})]})}},626:function(e,t,n){"use strict";var c=n(184);function r(){var e=Object(c.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return r=function(){return e},e}var a=n(185).a.div(r());t.a=a},627:function(e,t,n){"use strict";var c=n(184);function r(){var e=Object(c.a)(["\n  margin-bottom: 36px;\n"]);return r=function(){return e},e}var a=n(185).a.h1(r());t.a=a},628:function(e,t,n){"use strict";var c=n(11),r=n(667),a=(n(2),n(99));t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)(r.a,{children:e.items.map((function(e){return Object(c.jsx)(r.a.Item,{children:t(e)?Object(c.jsx)(a.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},637:function(e,t,n){"use strict";var c=n(184);function r(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var a=n(185).a.div(r());t.a=a},649:function(e,t,n){"use strict";var c=n(11),r=n(656);n(2);t.a=function(e){return Object(c.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(c.jsx)(r.a,{})})}},724:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var c=n(184);function r(){var e=Object(c.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var a=n(185).a.div(r()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=a},791:function(e,t,n){"use strict";var c=n(5),r=n(42),a=n(79),i=n(186),o=Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.unitRead)})),s=Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.unitEdit)})),u=Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.unitCreate)})),j=Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.unitImport)})),l={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:u,selectPermissionToDestroy:Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.unitDestroy)})),selectPermissionToImport:j};t.a=l},897:function(e,t,n){"use strict";var c=n(5),r={selectLoading:Object(c.a)([function(e){return e.unit.destroy}],(function(e){return Boolean(e.loading)}))};t.a=r}}]);