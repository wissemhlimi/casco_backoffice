(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[94],{1265:function(e,t,n){"use strict";n.r(t);var c=n(11),a=n(2),i=n(45),r=n(37),o=n(3),s=n(248),u=n(5),j=function(e){return e.config.view},l=Object(u.a)([j],(function(e){return e.record})),b={selectLoading:Object(u.a)([j],(function(e){return Boolean(e.loading)})),selectRecord:l,selectRaw:j},d=n(0),f=n(649),O=n(724),m=n(1237),g=function(e){var t=e.record;return e.loading||!t?Object(c.jsx)(f.a,{}):Object(c.jsxs)(O.a,{children:[Boolean(t.configTitle)&&Object(c.jsx)(m.a.Item,Object(d.a)(Object(d.a)({},O.b),{},{label:Object(o.c)("entities.config.fields.configTitle"),children:t.configTitle})),Boolean(t.configRef)&&Object(c.jsx)(m.a.Item,Object(d.a)(Object(d.a)({},O.b),{},{label:Object(o.c)("entities.config.fields.configRef"),children:t.configRef})),Boolean(t.configDate)&&Object(c.jsx)(m.a.Item,Object(d.a)(Object(d.a)({},O.b),{},{label:Object(o.c)("entities.config.fields.configDate"),children:t.configDate})),Boolean(t.configStatus)&&Object(c.jsx)(m.a.Item,Object(d.a)(Object(d.a)({},O.b),{},{label:Object(o.c)("entities.config.fields.configStatus"),children:Object(o.c)("entities.config.enumerators.configStatus.".concat(t.configStatus))}))]})},p=n(831),x=n(689),h=n(613),v=n(212),T=n(687),C=n(99),w=n(143),y=n(904),I=n(171),R=n(903),P=n(637),B=function(e){var t=Object(i.d)(),n=Object(r.h)(),a=Object(i.e)(w.a.selectPermissionToRead),s=Object(i.e)(y.a.selectPermissionToEdit),u=Object(i.e)(y.a.selectPermissionToDestroy),j=Object(i.e)(R.a.selectLoading),l=n.params.id;return Object(c.jsxs)(P.a,{children:[s&&Object(c.jsx)(C.a,{to:"/config/".concat(l,"/edit"),children:Object(c.jsx)(v.a,{type:"primary",icon:Object(c.jsx)(p.a,{}),children:Object(o.c)("common.edit")})}),u&&Object(c.jsx)(T.a,{title:Object(o.c)("common.areYouSure"),onConfirm:function(){t(I.a.doDestroy(l))},okText:Object(o.c)("common.yes"),cancelText:Object(o.c)("common.no"),children:Object(c.jsx)(v.a,{type:"primary",icon:Object(c.jsx)(x.a,{}),disabled:j,children:Object(o.c)("common.destroy")})}),a&&Object(c.jsx)(C.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(l)),children:Object(c.jsx)(v.a,{icon:Object(c.jsx)(h.a,{}),children:Object(o.c)("auditLog.menu")})})]})},D=n(626),U=n(628),L=n(627);t.default=function(e){var t=Object(i.d)(),n=Object(r.h)(),u=Object(i.e)(b.selectLoading),j=Object(i.e)(b.selectRecord);return Object(a.useEffect)((function(){t(s.a.doFind(n.params.id))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(U.a,{items:[[Object(o.c)("dashboard.menu"),"/"],[Object(o.c)("entities.config.menu"),"/config"],[Object(o.c)("entities.config.view.title")]]}),Object(c.jsxs)(D.a,{children:[Object(c.jsx)(L.a,{children:Object(o.c)("entities.config.view.title")}),Object(c.jsx)(B,{match:n}),Object(c.jsx)(g,{loading:u,record:j})]})]})}},626:function(e,t,n){"use strict";var c=n(184);function a(){var e=Object(c.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var i=n(185).a.div(a());t.a=i},627:function(e,t,n){"use strict";var c=n(184);function a(){var e=Object(c.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var i=n(185).a.h1(a());t.a=i},628:function(e,t,n){"use strict";var c=n(11),a=n(667),i=(n(2),n(99));t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)(a.a,{children:e.items.map((function(e){return Object(c.jsx)(a.a.Item,{children:t(e)?Object(c.jsx)(i.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},637:function(e,t,n){"use strict";var c=n(184);function a(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var i=n(185).a.div(a());t.a=i},649:function(e,t,n){"use strict";var c=n(11),a=n(656);n(2);t.a=function(e){return Object(c.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(c.jsx)(a.a,{})})}},724:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var c=n(184);function a(){var e=Object(c.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var i=n(185).a.div(a()),r={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=i},903:function(e,t,n){"use strict";var c=n(5),a={selectLoading:Object(c.a)([function(e){return e.config.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a},904:function(e,t,n){"use strict";var c=n(5),a=n(42),i=n(79),r=n(186),o=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(r.a.values.configRead)})),s=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(r.a.values.configEdit)})),u=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(r.a.values.configCreate)})),j=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(r.a.values.configImport)})),l={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:u,selectPermissionToDestroy:Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(r.a.values.configDestroy)})),selectPermissionToImport:j};t.a=l}}]);