(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[99],{1291:function(e,t,n){"use strict";n.r(t);var a,c=n(1),r=n(43),s=n(36),i=n(4),l=n(234),o=n(5),j=function(e){return e.user.view},b=Object(o.a)([j],(function(e){return e.user})),u={selectLoading:Object(o.a)([j],(function(e){return Boolean(e.loading)})),selectUser:b,selectRaw:j},d=n(623),O=n(625),m=n(624),p=n(0),f=n(1284),h=n(207),x=n(302),v=n(647),g=n(731),w=n(959),C=n(1258),y=n(183),I=n(184).a.div(a||(a=Object(y.a)(["\n  .ant-carousel img {\n    width: 100%;\n    object-fit: cover;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    padding: 5px;\n  }\n\n  .ant-carousel .slick-track {\n    height: inherit !important;\n  }\n"]))),T=n(12),U=function(e){var t=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return t().length?Object(T.jsx)(I,{children:Object(T.jsx)(C.a,{autoplay:!0,vertical:!0,effect:"fade",children:t().map((function(e){return Object(T.jsx)("img",{src:e.downloadUrl,alt:e.name},e.id)}))})}):Object(T.jsx)("p",{children:Object(i.c)("imagesViewer.noImage")})},N=function(e){var t=e.user;return e.loading||!t?Object(T.jsx)(v.a,{}):Object(T.jsxs)(g.a,{children:[t.email&&Object(T.jsx)(f.a.Item,Object(p.a)(Object(p.a)({},g.b),{},{label:Object(i.c)("user.fields.email"),children:t.email})),t.firstName&&Object(T.jsx)(f.a.Item,Object(p.a)(Object(p.a)({},g.b),{},{label:Object(i.c)("user.fields.firstName"),children:t.firstName})),t.lastName&&Object(T.jsx)(f.a.Item,Object(p.a)(Object(p.a)({},g.b),{},{label:Object(i.c)("user.fields.lastName"),children:t.lastName})),t.phoneNumber&&Object(T.jsxs)(f.a.Item,Object(p.a)(Object(p.a)({},g.b),{},{label:Object(i.c)("user.fields.phoneNumber"),children:["+",t.phoneNumber]})),t.avatars&&Boolean(t.avatars.length)&&Object(T.jsx)(f.a.Item,Object(p.a)(Object(p.a)({},g.b),{},{label:Object(i.c)("user.fields.avatars"),children:Object(T.jsx)(U,{value:t.avatars})})),t.status&&Object(T.jsx)(f.a.Item,Object(p.a)(Object(p.a)({},g.b),{},{label:Object(i.c)("user.fields.status"),children:Object(T.jsx)(w.a,{value:t.status})})),t.roles&&Boolean(t.roles.length)&&Object(T.jsx)(f.a.Item,Object(p.a)(Object(p.a)({},g.b),{},{label:Object(i.c)("user.fields.roles"),children:t.roles.map((function(e){return Object(T.jsx)("div",{children:Object(T.jsx)(h.a,{title:x.a.descriptionOf(e),children:Object(T.jsx)("span",{children:x.a.labelOf(e)})})},e)}))}))]})},P=n(848),R=n(608),k=n(1338),B=n(206),E=n(95),L=n(634),A=n(926),D=n(139),F=function(){var e=Object(s.h)(),t=Object(r.e)(u.selectUser),n=Object(r.e)(D.a.selectPermissionToRead),a=Object(r.e)(A.a.selectPermissionToEdit),c=e.params.id;return Object(T.jsxs)(L.a,{children:[a&&Object(T.jsx)(E.a,{to:"/user/".concat(c,"/edit"),children:Object(T.jsx)(B.a,{type:"primary",icon:Object(T.jsx)(P.a,{}),children:Object(i.c)("common.edit")})}),n&&Object(T.jsx)(E.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(c)),children:Object(T.jsx)(B.a,{icon:Object(T.jsx)(R.a,{}),children:Object(i.c)("auditLog.menu")})}),t&&t.email&&n&&Object(T.jsx)(E.a,{to:"/audit-logs?createdByEmail=".concat(encodeURIComponent(t.email)),children:Object(T.jsx)(B.a,{icon:Object(T.jsx)(k.a,{}),children:Object(i.c)("user.view.activity")})})]})};t.default=function(e){var t=Object(r.d)(),n=Object(s.h)(),a=Object(r.e)(u.selectLoading),o=Object(r.e)(u.selectUser);return Object(c.useEffect)((function(){t(l.a.doFind(n.params.id))}),[]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(O.a,{header:!0,items:[[Object(i.c)("dashboard.menu"),"/"],[Object(i.c)("user.menu"),"/user"],[Object(i.c)("user.view.title")]]}),Object(T.jsxs)(d.a,{children:[Object(T.jsx)(m.a,{children:Object(i.c)("user.view.title")}),Object(T.jsx)(F,{}),Object(T.jsx)(N,{loading:a,user:o})]})]})}},623:function(e,t,n){"use strict";var a,c=n(183),r=n(184).a.div(a||(a=Object(c.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));t.a=r},624:function(e,t,n){"use strict";var a,c=n(183),r=n(184).a.h1(a||(a=Object(c.a)(["\n  margin-bottom: 36px;\n"])));t.a=r},625:function(e,t,n){"use strict";var a=n(669),c=(n(1),n(95)),r=n(12);t.a=function(e){var t=function(e){return e.length>1};return Object(r.jsx)(a.a,{children:e.items.map((function(e){return Object(r.jsx)(a.a.Item,{children:t(e)?Object(r.jsx)(c.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},634:function(e,t,n){"use strict";var a,c=n(183),r=n(184).a.div(a||(a=Object(c.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));t.a=r},647:function(e,t,n){"use strict";var a=n(655),c=(n(1),n(12));t.a=function(e){return Object(c.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(c.jsx)(a.a,{})})}},731:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var a,c=n(183),r=n(184).a.div(a||(a=Object(c.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]))),s={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=r},926:function(e,t,n){"use strict";var a=n(5),c=n(40),r=n(77),s=n(185),i=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(s.a.values.userRead)})),l=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(s.a.values.userEdit)})),o=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(s.a.values.userDestroy)})),j={selectPermissionToRead:i,selectPermissionToEdit:l,selectPermissionToCreate:Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(s.a.values.userCreate)})),selectPermissionToImport:Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(s.a.values.userImport)})),selectPermissionToDestroy:o};t.a=j},959:function(e,t,n){"use strict";var a=n(4),c=(n(1),n(757)),r=n(12);t.a=function(e){var t=e.value;return t?"active"===t?Object(r.jsx)(c.a,{color:"green",children:Object(a.c)("user.status.active")}):"empty-permissions"===t?Object(r.jsx)(c.a,{color:"red",children:Object(a.c)("user.status.empty-permissions")}):Object(r.jsx)(c.a,{color:"gold",children:Object(a.c)("user.status.invited")}):null}}}]);