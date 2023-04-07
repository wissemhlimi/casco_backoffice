(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[80],{1286:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t(3),o=t(617),i=t(618),r=t(43),l=t(113),s=function(){var e=Object(r.d)();return Object(a.useEffect)((function(){e(l.a.doFetch())}),[]),null},d=t(751),u=t(685),b=t(206),f=t(818),m=t(95),j=t(27),p=t(233),v=t(5),O={selectLoading:Object(v.a)([function(e){return e.tenant.destroy}],(function(e){return Boolean(e.loading)}))},x=t(110),h=t(308),g=t(192),y=t(40),C=t(77),w=t(185),E={selectPermissionToEdit:Object(v.a)([y.a.selectCurrentUser],(function(e){return function(n){return new C.a(n,e).match(w.a.values.tenantEdit)}})),selectPermissionToDestroy:Object(v.a)([y.a.selectCurrentUser],(function(e){return function(n){return new C.a(n,e).match(w.a.values.tenantDestroy)}})),selectInvitationToken:Object(v.a)([y.a.selectCurrentUser],(function(e){return function(n){if(!e||!e.tenants)return!1;var t=e.tenants.find((function(e){return e.tenant.id===n.id&&"invited"===e.status}));return t?t.invitationToken:null}}))},T=t(688),k=t(651),P=t(214),N=t(52),S=t(35),q=t(12),V=function(e){var n=Object(r.d)(),t=Object(r.e)(g.a.selectLoading),a=Object(r.e)(O.selectLoading),o=Object(r.e)(h.a.selectLoading),i=t||a||o,s=Object(r.e)(g.a.selectRows),v=Object(r.e)(g.a.selectPagination),C=Object(r.e)(E.selectInvitationToken),w=Object(r.e)(E.selectPermissionToEdit),V=Object(r.e)(E.selectPermissionToDestroy),D=Object(r.e)(y.a.selectCurrentTenant),I=[{title:Object(c.c)("tenant.fields.name"),sorter:!0,dataIndex:"name",render:function(e,n){return Object(q.jsxs)(q.Fragment,{children:[n.name,Boolean(C(n))&&Object(q.jsx)(d.a,{color:"gold",style:{marginLeft:"8px"},children:Object(c.c)("tenant.invitation.invited")})]})}},S.a.isEnabled&&{title:Object(c.c)("tenant.fields.url"),sorter:!0,dataIndex:"url",render:function(e,n){return"".concat(n.url,".").concat(N.a.frontendUrl.host)}},N.a.isPlanEnabled&&{title:Object(c.c)("tenant.fields.plan"),sorter:!0,dataIndex:"plan",render:function(e,n){return Object(q.jsx)(d.a,{color:e===P.a.values.free?void 0:"gold",children:Object(c.c)("plan.".concat(e,".label"))})}},{title:"",dataIndex:"",width:"160px",render:function(e,t){return C(t)?Object(q.jsxs)("div",{className:"table-actions",children:[Object(q.jsx)(u.a,{title:Object(c.c)("common.areYouSure"),onConfirm:function(){return e=C(t),void n(x.a.doAccept(e));var e},okText:Object(c.c)("common.yes"),cancelText:Object(c.c)("common.no"),children:Object(q.jsx)(b.a,{type:"primary",children:Object(c.c)("tenant.invitation.accept")})}),Object(q.jsx)(u.a,{title:Object(c.c)("common.areYouSure"),onConfirm:function(){return e=C(t),void n(x.a.doDecline(e));var e},okText:Object(c.c)("common.yes"),cancelText:Object(c.c)("common.no"),children:Object(q.jsx)(b.a,{type:"primary",danger:!0,children:Object(c.c)("tenant.invitation.decline")})})]}):Object(q.jsxs)("div",{className:"table-actions",children:[D.id!==t.id&&Object(q.jsx)(b.a,{type:"primary",onClick:function(){return e=t,void n(j.a.doSelectTenant(e));var e},children:Object(c.c)("tenant.select")}),w(t)&&Object(q.jsx)(m.a,{to:"/tenant/".concat(t.id,"/edit"),children:Object(c.c)("common.edit")}),V(t)&&Object(q.jsx)(u.a,{title:Object(c.c)("common.areYouSure"),onConfirm:function(){return e=t.id,void n(p.a.doDestroy(e));var e},okText:Object(c.c)("common.yes"),cancelText:Object(c.c)("common.no"),children:Object(q.jsx)(T.a,{children:Object(c.c)("common.destroy")})})]})}}].filter(Boolean);return Object(q.jsx)(k.a,{children:Object(q.jsx)(f.a,{rowKey:"id",loading:i,columns:I,dataSource:s,pagination:v,onChange:function(e,t,a){n(l.a.doChangePaginationAndSort(e,a))},scroll:{x:!0}})})},D=t(761),I=t(628),B=function(e){return Object(q.jsx)(I.a,{children:Object(q.jsx)(m.a,{to:"/tenant/new",children:Object(q.jsx)(b.a,{type:"primary",icon:Object(q.jsx)(D.a,{}),children:Object(c.c)("common.new")})})})};n.default=function(e){return Object(q.jsx)(q.Fragment,{children:Object(q.jsxs)(o.a,{style:{marginTop:0},children:[Object(q.jsx)(i.a,{children:Object(c.c)("tenant.list.title")}),Object(q.jsx)(B,{}),Object(q.jsx)(s,{}),Object(q.jsx)(V,{})]})})}},617:function(e,n,t){"use strict";var a,c=t(183),o=t(184).a.div(a||(a=Object(c.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));n.a=o},618:function(e,n,t){"use strict";var a,c=t(183),o=t(184).a.h1(a||(a=Object(c.a)(["\n  margin-bottom: 36px;\n"])));n.a=o},628:function(e,n,t){"use strict";var a,c=t(183),o=t(184).a.div(a||(a=Object(c.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));n.a=o},630:function(e,n,t){"use strict";var a;function c(e){if("undefined"===typeof document)return 0;if(e||void 0===a){var n=document.createElement("div");n.style.width="100%",n.style.height="200px";var t=document.createElement("div"),c=t.style;c.position="absolute",c.top="0",c.left="0",c.pointerEvents="none",c.visibility="hidden",c.width="200px",c.height="150px",c.overflow="hidden",t.appendChild(n),document.body.appendChild(t);var o=n.offsetWidth;t.style.overflow="scroll";var i=n.offsetWidth;o===i&&(i=t.clientWidth),document.body.removeChild(t),a=o-i}return a}t.d(n,"a",(function(){return c}))},651:function(e,n,t){"use strict";var a,c=t(183),o=t(184).a.div(a||(a=Object(c.a)(["\n  .ant-table th {\n    white-space: nowrap;\n  }\n\n  .ant-table td {\n    white-space: nowrap;\n  }\n\n  .ant-table .table-actions {\n    text-align: right;\n  }\n\n  .ant-table .table-actions a,\n  .ant-table .table-actions button {\n    margin-left: 8px;\n  }\n"])));n.a=o},685:function(e,n,t){"use strict";var a=t(13),c=t.n(a),o=t(37),i=t.n(o),r=t(1),l=t(16),s=t.n(l),d=t(276),u=t.n(d),b=t(103),f=t(207),m=t(206),j=t(278),p=t(205),v=t(193),O=t(138),x=t(251),h=t(38),g=void 0,y=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)n.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(t[a[c]]=e[a[c]])}return t},C=r.forwardRef((function(e,n){var t=r.useState(e.visible),a=i()(t,2),o=a[0],l=a[1];r.useEffect((function(){"visible"in e&&l(e.visible)}),[e.visible]),r.useEffect((function(){"defaultVisible"in e&&l(e.defaultVisible)}),[e.defaultVisible]);var d=function(n,t){"visible"in e||l(n),e.onVisibleChange&&e.onVisibleChange(n,t)},u=function(n){d(!1,n),e.onConfirm&&e.onConfirm.call(g,n)},C=function(n){d(!1,n),e.onCancel&&e.onCancel.call(g,n)},w=r.useContext(O.b).getPrefixCls,E=e.prefixCls,T=e.placement,k=e.children,P=e.overlayClassName,N=y(e,["prefixCls","placement","children","overlayClassName"]),S=w("popover",E),q=w("popconfirm",E),V=s()(q,P),D=r.createElement(p.a,{componentName:"Popconfirm",defaultLocale:v.a.Popconfirm},(function(n){return function(n,t){var a=e.okButtonProps,o=e.cancelButtonProps,i=e.title,l=e.cancelText,s=e.okText,d=e.okType,b=e.icon;return r.createElement("div",{className:"".concat(n,"-inner-content")},r.createElement("div",{className:"".concat(n,"-message")},b,r.createElement("div",{className:"".concat(n,"-message-title")},Object(x.a)(i))),r.createElement("div",{className:"".concat(n,"-buttons")},r.createElement(m.a,c()({onClick:C,size:"small"},o),l||t.cancelText),r.createElement(m.a,c()({onClick:u},Object(j.a)(d),{size:"small"},a),s||t.okText)))}(S,n)}));return r.createElement(f.a,c()({},N,{prefixCls:S,placement:T,onVisibleChange:function(n){e.disabled||d(n)},visible:o,overlay:D,overlayClassName:V,ref:n}),Object(h.a)(k,{onKeyDown:function(e){var n,t;r.isValidElement(k)&&(null===(t=null===k||void 0===k?void 0:(n=k.props).onKeyDown)||void 0===t||t.call(n,e)),function(e){e.keyCode===b.a.ESC&&o&&d(!1,e)}(e)}}))}));C.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:r.createElement(u.a,null),disabled:!1},n.a=C},688:function(e,n,t){"use strict";var a,c=t(183),o=t(184).a.button(a||(a=Object(c.a)(["\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  color: var(--link-color);\n  text-decoration: none;\n  display: inline;\n  margin: 0;\n  padding: 0;\n\n  &:hover {\n    text-decoration: none;\n  }\n  &:focus {\n    text-decoration: none;\n  }\n"])));n.a=o},697:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(37),c=t.n(a),o=t(1);function i(){var e=o.useReducer((function(e){return e+1}),0);return c()(e,2)[1]}},761:function(e,n,t){"use strict";var a=t(0),c=t(1),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},i=t(42),r=function(e,n){return c.createElement(i.a,Object(a.a)(Object(a.a)({},e),{},{ref:n,icon:o}))};r.displayName="PlusOutlined";n.a=c.forwardRef(r)},800:function(e,n,t){var a=t(305);e.exports=function(e,n){return a(e,n)}}}]);