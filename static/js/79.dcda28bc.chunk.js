(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[79],{1246:function(e,t,n){"use strict";n.r(t);var r=n(11),c=n(2),a=n(45),i=n(37),s=n(3),o=n(251),u=n(5),l=function(e){return e.product.view},d=Object(u.a)([l],(function(e){return e.record})),j={selectLoading:Object(u.a)([l],(function(e){return Boolean(e.loading)})),selectRecord:d,selectRaw:l},b=n(0),m=n(649),p=n(724),O=n(1237),f=n(99),v=n(792),h=function(e){var t=Object(a.e)(v.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(r.jsx)(r.Fragment,{children:n().map((function(e){return n=e,t?Object(r.jsx)("div",{children:Object(r.jsx)(f.a,{to:"/prodtype/".concat(n.id),children:n.prodtypeName})},n.id):Object(r.jsx)("div",{children:n.prodtypeName},n.id);var n}))}):null},x=n(791),T=function(e){var t=Object(a.e)(x.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(r.jsx)(r.Fragment,{children:n().map((function(e){return n=e,t?Object(r.jsx)("div",{children:Object(r.jsx)(f.a,{to:"/unit/".concat(n.id),children:n.unitTitle})},n.id):Object(r.jsx)("div",{children:n.unitTitle},n.id);var n}))}):null},C=function(e){var t=e.record;return e.loading||!t?Object(r.jsx)(m.a,{}):Object(r.jsxs)(p.a,{children:[Boolean(t.prodName)&&Object(r.jsx)(O.a.Item,Object(b.a)(Object(b.a)({},p.b),{},{label:Object(s.c)("entities.product.fields.prodName"),children:t.prodName})),Boolean(t.prodDescr)&&Object(r.jsx)(O.a.Item,Object(b.a)(Object(b.a)({},p.b),{},{label:Object(s.c)("entities.product.fields.prodDescr"),children:t.prodDescr})),Boolean(t.partNumber)&&Object(r.jsx)(O.a.Item,Object(b.a)(Object(b.a)({},p.b),{},{label:Object(s.c)("entities.product.fields.partNumber"),children:t.partNumber})),Boolean(t.prodType)&&Object(r.jsx)(O.a.Item,Object(b.a)(Object(b.a)({},p.b),{},{label:Object(s.c)("entities.product.fields.prodType"),children:Object(r.jsx)(h,{value:t.prodType})})),Boolean(t.partUnit)&&Object(r.jsx)(O.a.Item,Object(b.a)(Object(b.a)({},p.b),{},{label:Object(s.c)("entities.product.fields.partUnit"),children:Object(r.jsx)(T,{value:t.partUnit})}))]})},g=n(831),y=n(689),w=n(613),P=n(212),U=n(687),I=n(143),R=n(797),D=n(174),B=n(907),E=n(637),N=function(e){var t=Object(a.d)(),n=Object(i.h)(),c=Object(a.e)(I.a.selectPermissionToRead),o=Object(a.e)(R.a.selectPermissionToEdit),u=Object(a.e)(R.a.selectPermissionToDestroy),l=Object(a.e)(B.a.selectLoading),d=n.params.id;return Object(r.jsxs)(E.a,{children:[o&&Object(r.jsx)(f.a,{to:"/product/".concat(d,"/edit"),children:Object(r.jsx)(P.a,{type:"primary",icon:Object(r.jsx)(g.a,{}),children:Object(s.c)("common.edit")})}),u&&Object(r.jsx)(U.a,{title:Object(s.c)("common.areYouSure"),onConfirm:function(){t(D.a.doDestroy(d))},okText:Object(s.c)("common.yes"),cancelText:Object(s.c)("common.no"),children:Object(r.jsx)(P.a,{type:"primary",icon:Object(r.jsx)(y.a,{}),disabled:l,children:Object(s.c)("common.destroy")})}),c&&Object(r.jsx)(f.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(d)),children:Object(r.jsx)(P.a,{icon:Object(r.jsx)(w.a,{}),children:Object(s.c)("auditLog.menu")})})]})},L=n(626),k=n(628),A=n(627);t.default=function(e){var t=Object(a.d)(),n=Object(i.h)(),u=Object(a.e)(j.selectLoading),l=Object(a.e)(j.selectRecord);return Object(c.useEffect)((function(){t(o.a.doFind(n.params.id))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(k.a,{items:[[Object(s.c)("dashboard.menu"),"/"],[Object(s.c)("entities.product.menu"),"/product"],[Object(s.c)("entities.product.view.title")]]}),Object(r.jsxs)(L.a,{children:[Object(r.jsx)(A.a,{children:Object(s.c)("entities.product.view.title")}),Object(r.jsx)(N,{match:n}),Object(r.jsx)(C,{loading:u,record:l})]})]})}},626:function(e,t,n){"use strict";var r=n(184);function c(){var e=Object(r.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return c=function(){return e},e}var a=n(185).a.div(c());t.a=a},627:function(e,t,n){"use strict";var r=n(184);function c(){var e=Object(r.a)(["\n  margin-bottom: 36px;\n"]);return c=function(){return e},e}var a=n(185).a.h1(c());t.a=a},628:function(e,t,n){"use strict";var r=n(11),c=n(667),a=(n(2),n(99));t.a=function(e){var t=function(e){return e.length>1};return Object(r.jsx)(c.a,{children:e.items.map((function(e){return Object(r.jsx)(c.a.Item,{children:t(e)?Object(r.jsx)(a.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},637:function(e,t,n){"use strict";var r=n(184);function c(){var e=Object(r.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return c=function(){return e},e}var a=n(185).a.div(c());t.a=a},649:function(e,t,n){"use strict";var r=n(11),c=n(656);n(2);t.a=function(e){return Object(r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(r.jsx)(c.a,{})})}},724:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(184);function c(){var e=Object(r.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return c=function(){return e},e}var a=n(185).a.div(c()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=a},791:function(e,t,n){"use strict";var r=n(5),c=n(42),a=n(79),i=n(186),s=Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.unitRead)})),o=Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.unitEdit)})),u=Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.unitCreate)})),l=Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.unitImport)})),d={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:u,selectPermissionToDestroy:Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.unitDestroy)})),selectPermissionToImport:l};t.a=d},792:function(e,t,n){"use strict";var r=n(5),c=n(42),a=n(79),i=n(186),s=Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.prodtypeRead)})),o=Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.prodtypeEdit)})),u=Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.prodtypeCreate)})),l=Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.prodtypeImport)})),d={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:u,selectPermissionToDestroy:Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.prodtypeDestroy)})),selectPermissionToImport:l};t.a=d},797:function(e,t,n){"use strict";var r=n(5),c=n(42),a=n(79),i=n(186),s=Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.productRead)})),o=Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.productEdit)})),u=Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.productCreate)})),l=Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.productImport)})),d={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:u,selectPermissionToDestroy:Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.productDestroy)})),selectPermissionToImport:l};t.a=d},907:function(e,t,n){"use strict";var r=n(5),c={selectLoading:Object(r.a)([function(e){return e.product.destroy}],(function(e){return Boolean(e.loading)}))};t.a=c}}]);