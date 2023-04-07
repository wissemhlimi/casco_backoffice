(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[98],{1300:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(43),r=n(36),i=n(3),o=n(236),s=n(5),u=function(e){return e.unit.view},j=Object(s.a)([u],(function(e){return e.record})),l={selectLoading:Object(s.a)([u],(function(e){return Boolean(e.loading)})),selectRecord:j,selectRaw:u},d=n(0),b=n(641),m=n(725),O=n(1280),p=n(12),f=function(e){var t=e.record;return e.loading||!t?Object(p.jsx)(b.a,{}):Object(p.jsx)(m.a,{children:Boolean(t.unitTitle)&&Object(p.jsx)(O.a.Item,Object(d.a)(Object(d.a)({},m.b),{},{label:Object(i.c)("entities.unit.fields.unitTitle"),children:t.unitTitle}))})},x=n(843),h=n(687),g=n(602),v=n(206),T=n(685),C=n(95),w=n(139),y=n(797),P=n(166),I=n(926),R=n(628),U=function(e){var t=Object(a.d)(),n=Object(r.h)(),c=Object(a.e)(w.a.selectPermissionToRead),o=Object(a.e)(y.a.selectPermissionToEdit),s=Object(a.e)(y.a.selectPermissionToDestroy),u=Object(a.e)(I.a.selectLoading),j=n.params.id;return Object(p.jsxs)(R.a,{children:[o&&Object(p.jsx)(C.a,{to:"/unit/".concat(j,"/edit"),children:Object(p.jsx)(v.a,{type:"primary",icon:Object(p.jsx)(x.a,{}),children:Object(i.c)("common.edit")})}),s&&Object(p.jsx)(T.a,{title:Object(i.c)("common.areYouSure"),onConfirm:function(){t(P.a.doDestroy(j))},okText:Object(i.c)("common.yes"),cancelText:Object(i.c)("common.no"),children:Object(p.jsx)(v.a,{type:"primary",icon:Object(p.jsx)(h.a,{}),disabled:u,children:Object(i.c)("common.destroy")})}),c&&Object(p.jsx)(C.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(j)),children:Object(p.jsx)(v.a,{icon:Object(p.jsx)(g.a,{}),children:Object(i.c)("auditLog.menu")})})]})},L=n(617),k=n(619),B=n(618);t.default=function(e){var t=Object(a.d)(),n=Object(r.h)(),s=Object(a.e)(l.selectLoading),u=Object(a.e)(l.selectRecord);return Object(c.useEffect)((function(){t(o.a.doFind(n.params.id))}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(k.a,{items:[[Object(i.c)("dashboard.menu"),"/"],[Object(i.c)("entities.unit.menu"),"/unit"],[Object(i.c)("entities.unit.view.title")]]}),Object(p.jsxs)(L.a,{children:[Object(p.jsx)(B.a,{children:Object(i.c)("entities.unit.view.title")}),Object(p.jsx)(U,{match:n}),Object(p.jsx)(f,{loading:s,record:u})]})]})}},617:function(e,t,n){"use strict";var c,a=n(183),r=n(184).a.div(c||(c=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));t.a=r},618:function(e,t,n){"use strict";var c,a=n(183),r=n(184).a.h1(c||(c=Object(a.a)(["\n  margin-bottom: 36px;\n"])));t.a=r},619:function(e,t,n){"use strict";var c=n(663),a=(n(1),n(95)),r=n(12);t.a=function(e){var t=function(e){return e.length>1};return Object(r.jsx)(c.a,{children:e.items.map((function(e){return Object(r.jsx)(c.a.Item,{children:t(e)?Object(r.jsx)(a.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},628:function(e,t,n){"use strict";var c,a=n(183),r=n(184).a.div(c||(c=Object(a.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));t.a=r},641:function(e,t,n){"use strict";var c=n(649),a=(n(1),n(12));t.a=function(e){return Object(a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(a.jsx)(c.a,{})})}},725:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var c,a=n(183),r=n(184).a.div(c||(c=Object(a.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]))),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=r},797:function(e,t,n){"use strict";var c=n(5),a=n(40),r=n(77),i=n(185),o=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.unitRead)})),s=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.unitEdit)})),u=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.unitCreate)})),j=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.unitImport)})),l={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:u,selectPermissionToDestroy:Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.unitDestroy)})),selectPermissionToImport:j};t.a=l},926:function(e,t,n){"use strict";var c=n(5),a={selectLoading:Object(c.a)([function(e){return e.unit.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a}}]);