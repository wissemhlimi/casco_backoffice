(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[81],{1298:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(43),r=n(36),i=n(4),o=n(242),s=n(5),l=function(e){return e.configTable.view},b=Object(s.a)([l],(function(e){return e.record})),u={selectLoading:Object(s.a)([l],(function(e){return Boolean(e.loading)})),selectRecord:b,selectRaw:l},j=n(0),d=n(647),f=n(731),O=n(1284),m=n(95),g=n(881),p=n(12),h=function(e){var t=Object(a.e)(g.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(p.jsx)(p.Fragment,{children:n().map((function(e){return n=e,t?Object(p.jsx)("div",{children:Object(p.jsx)(m.a,{to:"/zap/".concat(n.id),children:n.zapTitle})},n.id):Object(p.jsx)("div",{children:n.zapTitle},n.id);var n}))}):null},x=function(e){var t=e.record;return e.loading||!t?Object(p.jsx)(d.a,{}):Object(p.jsxs)(f.a,{children:[Boolean(t.configTitle)&&Object(p.jsx)(O.a.Item,Object(j.a)(Object(j.a)({},f.b),{},{label:Object(i.c)("entities.config.fields.configTitle"),children:t.configTitle})),Boolean(t.configRef)&&Object(p.jsx)(O.a.Item,Object(j.a)(Object(j.a)({},f.b),{},{label:Object(i.c)("entities.config.fields.configRef"),children:t.configRef})),Boolean(t.configDate)&&Object(p.jsx)(O.a.Item,Object(j.a)(Object(j.a)({},f.b),{},{label:Object(i.c)("entities.config.fields.configDate"),children:t.configDate})),Boolean(t.configStatus)&&Object(p.jsx)(O.a.Item,Object(j.a)(Object(j.a)({},f.b),{},{label:Object(i.c)("entities.config.fields.configStatus"),children:Object(i.c)("entities.config.enumerators.configStatus.".concat(t.configStatus))})),Boolean(t.zapId)&&Boolean(t.zapId.length)&&Object(p.jsx)(O.a.Item,Object(j.a)(Object(j.a)({},f.b),{},{label:Object(i.c)("entities.configTable.fields.zapId"),children:Object(p.jsx)(h,{value:t.zapId})}))]})},T=n(848),v=n(693),C=n(608),w=n(206),y=n(691),I=n(139),P=n(869),R=n(172),z=n(937),U=n(634),B=function(e){var t=Object(a.d)(),n=Object(r.h)(),c=Object(a.e)(I.a.selectPermissionToRead),o=Object(a.e)(P.a.selectPermissionToEdit),s=Object(a.e)(P.a.selectPermissionToDestroy),l=Object(a.e)(z.a.selectLoading),b=n.params.id;return Object(p.jsxs)(U.a,{children:[o&&Object(p.jsx)(m.a,{to:"/config-table/".concat(b,"/edit"),children:Object(p.jsx)(w.a,{type:"primary",icon:Object(p.jsx)(T.a,{}),children:Object(i.c)("common.edit")})}),s&&Object(p.jsx)(y.a,{title:Object(i.c)("common.areYouSure"),onConfirm:function(){t(R.a.doDestroy(b))},okText:Object(i.c)("common.yes"),cancelText:Object(i.c)("common.no"),children:Object(p.jsx)(w.a,{type:"primary",icon:Object(p.jsx)(v.a,{}),disabled:l,children:Object(i.c)("common.destroy")})}),c&&Object(p.jsx)(m.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(b)),children:Object(p.jsx)(w.a,{icon:Object(p.jsx)(C.a,{}),children:Object(i.c)("auditLog.menu")})})]})},D=n(623),E=n(625),L=n(624);t.default=function(e){var t=Object(a.d)(),n=Object(r.h)(),s=Object(a.e)(u.selectLoading),l=Object(a.e)(u.selectRecord);return Object(c.useEffect)((function(){t(o.a.doFind(n.params.id))}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(E.a,{items:[[Object(i.c)("dashboard.menu"),"/"],[Object(i.c)("entities.configTable.menu"),"/config-table"],[Object(i.c)("entities.configTable.view.title")]]}),Object(p.jsxs)(D.a,{children:[Object(p.jsx)(L.a,{children:Object(i.c)("entities.configTable.view.title")}),Object(p.jsx)(B,{match:n}),Object(p.jsx)(x,{loading:s,record:l})]})]})}},623:function(e,t,n){"use strict";var c,a=n(183),r=n(184).a.div(c||(c=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));t.a=r},624:function(e,t,n){"use strict";var c,a=n(183),r=n(184).a.h1(c||(c=Object(a.a)(["\n  margin-bottom: 36px;\n"])));t.a=r},625:function(e,t,n){"use strict";var c=n(669),a=(n(1),n(95)),r=n(12);t.a=function(e){var t=function(e){return e.length>1};return Object(r.jsx)(c.a,{children:e.items.map((function(e){return Object(r.jsx)(c.a.Item,{children:t(e)?Object(r.jsx)(a.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},634:function(e,t,n){"use strict";var c,a=n(183),r=n(184).a.div(c||(c=Object(a.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));t.a=r},647:function(e,t,n){"use strict";var c=n(655),a=(n(1),n(12));t.a=function(e){return Object(a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(a.jsx)(c.a,{})})}},731:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var c,a=n(183),r=n(184).a.div(c||(c=Object(a.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]))),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=r},869:function(e,t,n){"use strict";var c=n(5),a=n(40),r=n(77),i=n(185),o=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.configTableRead)})),s=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.configTableEdit)})),l=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.configTableCreate)})),b=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.configTableImport)})),u={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:l,selectPermissionToDestroy:Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.configTableDestroy)})),selectPermissionToImport:b};t.a=u},881:function(e,t,n){"use strict";var c=n(5),a=n(40),r=n(77),i=n(185),o=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.zapRead)})),s=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.zapEdit)})),l=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.zapCreate)})),b=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.zapImport)})),u={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:l,selectPermissionToDestroy:Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.zapDestroy)})),selectPermissionToImport:b};t.a=u},937:function(e,t,n){"use strict";var c=n(5),a={selectLoading:Object(c.a)([function(e){return e.configTable.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a}}]);