(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[81],{1251:function(e,t,n){"use strict";n.r(t);var c=n(11),a=n(2),r=n(45),i=n(37),o=n(3),s=n(249),l=n(5),u=function(e){return e.configTable.view},b=Object(l.a)([u],(function(e){return e.record})),j={selectLoading:Object(l.a)([u],(function(e){return Boolean(e.loading)})),selectRecord:b,selectRaw:u},d=n(0),f=n(649),O=n(724),m=n(1237),g=n(99),p=n(861),h=function(e){var t=Object(r.e)(p.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(c.jsx)(c.Fragment,{children:n().map((function(e){return n=e,t?Object(c.jsx)("div",{children:Object(c.jsx)(g.a,{to:"/zap/".concat(n.id),children:n.zapTitle})},n.id):Object(c.jsx)("div",{children:n.zapTitle},n.id);var n}))}):null},x=function(e){var t=e.record;return e.loading||!t?Object(c.jsx)(f.a,{}):Object(c.jsxs)(O.a,{children:[Boolean(t.configTitle)&&Object(c.jsx)(m.a.Item,Object(d.a)(Object(d.a)({},O.b),{},{label:Object(o.c)("entities.config.fields.configTitle"),children:t.configTitle})),Boolean(t.configRef)&&Object(c.jsx)(m.a.Item,Object(d.a)(Object(d.a)({},O.b),{},{label:Object(o.c)("entities.config.fields.configRef"),children:t.configRef})),Boolean(t.configDate)&&Object(c.jsx)(m.a.Item,Object(d.a)(Object(d.a)({},O.b),{},{label:Object(o.c)("entities.config.fields.configDate"),children:t.configDate})),Boolean(t.configStatus)&&Object(c.jsx)(m.a.Item,Object(d.a)(Object(d.a)({},O.b),{},{label:Object(o.c)("entities.config.fields.configStatus"),children:Object(o.c)("entities.config.enumerators.configStatus.".concat(t.configStatus))})),Boolean(t.zapId)&&Boolean(t.zapId.length)&&Object(c.jsx)(m.a.Item,Object(d.a)(Object(d.a)({},O.b),{},{label:Object(o.c)("entities.configTable.fields.zapId"),children:Object(c.jsx)(h,{value:t.zapId})}))]})},v=n(831),T=n(689),C=n(613),w=n(212),y=n(687),I=n(143),P=n(853),R=n(172),z=n(905),U=n(637),B=function(e){var t=Object(r.d)(),n=Object(i.h)(),a=Object(r.e)(I.a.selectPermissionToRead),s=Object(r.e)(P.a.selectPermissionToEdit),l=Object(r.e)(P.a.selectPermissionToDestroy),u=Object(r.e)(z.a.selectLoading),b=n.params.id;return Object(c.jsxs)(U.a,{children:[s&&Object(c.jsx)(g.a,{to:"/config-table/".concat(b,"/edit"),children:Object(c.jsx)(w.a,{type:"primary",icon:Object(c.jsx)(v.a,{}),children:Object(o.c)("common.edit")})}),l&&Object(c.jsx)(y.a,{title:Object(o.c)("common.areYouSure"),onConfirm:function(){t(R.a.doDestroy(b))},okText:Object(o.c)("common.yes"),cancelText:Object(o.c)("common.no"),children:Object(c.jsx)(w.a,{type:"primary",icon:Object(c.jsx)(T.a,{}),disabled:u,children:Object(o.c)("common.destroy")})}),a&&Object(c.jsx)(g.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(b)),children:Object(c.jsx)(w.a,{icon:Object(c.jsx)(C.a,{}),children:Object(o.c)("auditLog.menu")})})]})},D=n(626),E=n(628),L=n(627);t.default=function(e){var t=Object(r.d)(),n=Object(i.h)(),l=Object(r.e)(j.selectLoading),u=Object(r.e)(j.selectRecord);return Object(a.useEffect)((function(){t(s.a.doFind(n.params.id))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(E.a,{items:[[Object(o.c)("dashboard.menu"),"/"],[Object(o.c)("entities.configTable.menu"),"/config-table"],[Object(o.c)("entities.configTable.view.title")]]}),Object(c.jsxs)(D.a,{children:[Object(c.jsx)(L.a,{children:Object(o.c)("entities.configTable.view.title")}),Object(c.jsx)(B,{match:n}),Object(c.jsx)(x,{loading:l,record:u})]})]})}},626:function(e,t,n){"use strict";var c=n(184);function a(){var e=Object(c.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var r=n(185).a.div(a());t.a=r},627:function(e,t,n){"use strict";var c=n(184);function a(){var e=Object(c.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var r=n(185).a.h1(a());t.a=r},628:function(e,t,n){"use strict";var c=n(11),a=n(667),r=(n(2),n(99));t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)(a.a,{children:e.items.map((function(e){return Object(c.jsx)(a.a.Item,{children:t(e)?Object(c.jsx)(r.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},637:function(e,t,n){"use strict";var c=n(184);function a(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var r=n(185).a.div(a());t.a=r},649:function(e,t,n){"use strict";var c=n(11),a=n(656);n(2);t.a=function(e){return Object(c.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(c.jsx)(a.a,{})})}},724:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var c=n(184);function a(){var e=Object(c.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var r=n(185).a.div(a()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=r},853:function(e,t,n){"use strict";var c=n(5),a=n(42),r=n(79),i=n(186),o=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.configTableRead)})),s=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.configTableEdit)})),l=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.configTableCreate)})),u=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.configTableImport)})),b={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:l,selectPermissionToDestroy:Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.configTableDestroy)})),selectPermissionToImport:u};t.a=b},861:function(e,t,n){"use strict";var c=n(5),a=n(42),r=n(79),i=n(186),o=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.zapRead)})),s=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.zapEdit)})),l=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.zapCreate)})),u=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.zapImport)})),b={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:l,selectPermissionToDestroy:Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.zapDestroy)})),selectPermissionToImport:u};t.a=b},905:function(e,t,n){"use strict";var c=n(5),a={selectLoading:Object(c.a)([function(e){return e.configTable.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a}}]);