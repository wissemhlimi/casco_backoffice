(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[94],{1308:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(43),i=n(36),o=n(3),r=n(241),s=n(5),j=function(e){return e.config.view},l=Object(s.a)([j],(function(e){return e.record})),b={selectLoading:Object(s.a)([j],(function(e){return Boolean(e.loading)})),selectRecord:l,selectRaw:j},u=n(0),d=n(641),f=n(725),O=n(1280),m=n(12),g=function(e){var t=e.record;return e.loading||!t?Object(m.jsx)(d.a,{}):Object(m.jsxs)(f.a,{children:[Boolean(t.configTitle)&&Object(m.jsx)(O.a.Item,Object(u.a)(Object(u.a)({},f.b),{},{label:Object(o.c)("entities.config.fields.configTitle"),children:t.configTitle})),Boolean(t.configRef)&&Object(m.jsx)(O.a.Item,Object(u.a)(Object(u.a)({},f.b),{},{label:Object(o.c)("entities.config.fields.configRef"),children:t.configRef})),Boolean(t.configDate)&&Object(m.jsx)(O.a.Item,Object(u.a)(Object(u.a)({},f.b),{},{label:Object(o.c)("entities.config.fields.configDate"),children:t.configDate})),Boolean(t.configStatus)&&Object(m.jsx)(O.a.Item,Object(u.a)(Object(u.a)({},f.b),{},{label:Object(o.c)("entities.config.fields.configStatus"),children:Object(o.c)("entities.config.enumerators.configStatus.".concat(t.configStatus))}))]})},p=n(843),x=n(687),h=n(602),v=n(206),T=n(685),C=n(95),w=n(139),y=n(933),I=n(171),R=n(932),P=n(628),B=function(e){var t=Object(a.d)(),n=Object(i.h)(),c=Object(a.e)(w.a.selectPermissionToRead),r=Object(a.e)(y.a.selectPermissionToEdit),s=Object(a.e)(y.a.selectPermissionToDestroy),j=Object(a.e)(R.a.selectLoading),l=n.params.id;return Object(m.jsxs)(P.a,{children:[r&&Object(m.jsx)(C.a,{to:"/config/".concat(l,"/edit"),children:Object(m.jsx)(v.a,{type:"primary",icon:Object(m.jsx)(p.a,{}),children:Object(o.c)("common.edit")})}),s&&Object(m.jsx)(T.a,{title:Object(o.c)("common.areYouSure"),onConfirm:function(){t(I.a.doDestroy(l))},okText:Object(o.c)("common.yes"),cancelText:Object(o.c)("common.no"),children:Object(m.jsx)(v.a,{type:"primary",icon:Object(m.jsx)(x.a,{}),disabled:j,children:Object(o.c)("common.destroy")})}),c&&Object(m.jsx)(C.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(l)),children:Object(m.jsx)(v.a,{icon:Object(m.jsx)(h.a,{}),children:Object(o.c)("auditLog.menu")})})]})},D=n(617),U=n(619),L=n(618);t.default=function(e){var t=Object(a.d)(),n=Object(i.h)(),s=Object(a.e)(b.selectLoading),j=Object(a.e)(b.selectRecord);return Object(c.useEffect)((function(){t(r.a.doFind(n.params.id))}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(U.a,{items:[[Object(o.c)("dashboard.menu"),"/"],[Object(o.c)("entities.config.menu"),"/config"],[Object(o.c)("entities.config.view.title")]]}),Object(m.jsxs)(D.a,{children:[Object(m.jsx)(L.a,{children:Object(o.c)("entities.config.view.title")}),Object(m.jsx)(B,{match:n}),Object(m.jsx)(g,{loading:s,record:j})]})]})}},617:function(e,t,n){"use strict";var c,a=n(183),i=n(184).a.div(c||(c=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));t.a=i},618:function(e,t,n){"use strict";var c,a=n(183),i=n(184).a.h1(c||(c=Object(a.a)(["\n  margin-bottom: 36px;\n"])));t.a=i},619:function(e,t,n){"use strict";var c=n(663),a=(n(1),n(95)),i=n(12);t.a=function(e){var t=function(e){return e.length>1};return Object(i.jsx)(c.a,{children:e.items.map((function(e){return Object(i.jsx)(c.a.Item,{children:t(e)?Object(i.jsx)(a.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},628:function(e,t,n){"use strict";var c,a=n(183),i=n(184).a.div(c||(c=Object(a.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));t.a=i},641:function(e,t,n){"use strict";var c=n(649),a=(n(1),n(12));t.a=function(e){return Object(a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(a.jsx)(c.a,{})})}},725:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var c,a=n(183),i=n(184).a.div(c||(c=Object(a.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]))),o={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=i},932:function(e,t,n){"use strict";var c=n(5),a={selectLoading:Object(c.a)([function(e){return e.config.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a},933:function(e,t,n){"use strict";var c=n(5),a=n(40),i=n(77),o=n(185),r=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(o.a.values.configRead)})),s=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(o.a.values.configEdit)})),j=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(o.a.values.configCreate)})),l=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(o.a.values.configImport)})),b={selectPermissionToRead:r,selectPermissionToEdit:s,selectPermissionToCreate:j,selectPermissionToDestroy:Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(o.a.values.configDestroy)})),selectPermissionToImport:l};t.a=b}}]);