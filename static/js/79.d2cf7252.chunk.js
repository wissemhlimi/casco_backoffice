(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[79],{1318:function(e,n,t){"use strict";t.r(n);var r=t(23),a=t(1),i=t(43),l=t(4),o=t(27),c=t(40),u=t(811),s=t(812),d=t(843),m=t(813),b=t(0),f=t(117),j=t(957),h=t(629),p=t(618),g=t(206),O=t(638),v=t(44),x=t(52);var y=t(35),q=t(645),w=t(12),S=v.e().shape({name:O.a.string(Object(l.c)("tenant.fields.tenantName"),{required:!0,max:50}),url:O.a.string(Object(l.c)("tenant.fields.tenantUrl"),{required:!0,max:50}).matches(/^[a-z0-9][-a-zA-Z0-9]*$/,Object(l.c)("tenant.validation.url"))}),k=v.e().shape({name:O.a.string(Object(l.c)("tenant.fields.tenantName"),{required:!0,max:50})}),T=y.a.isEnabled?S:k;var z=function(e){var n=Object(i.d)(),t=Object(a.useState)({name:""}),o=Object(r.a)(t,1)[0],u=Object(p.c)({resolver:Object(q.yupResolver)(T),mode:"onSubmit",defaultValues:o}),s=Object(i.e)(j.a.selectSaveLoading),d=Object(i.e)(c.a.selectInvitedTenants);return Object(w.jsx)(p.a,Object(b.a)(Object(b.a)({},u),{},{children:Object(w.jsxs)("form",{onSubmit:u.handleSubmit((function(e){n(f.a.doCreate(e))})),children:[Object(w.jsx)(h.a,{name:"name",placeholder:Object(l.c)("tenant.fields.tenantName"),autoComplete:"name",size:"large",layout:null,onChange:function(e){return u.setValue("url",e.toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-"))},autoFocus:!0}),y.a.isEnabled&&Object(w.jsx)(h.a,{name:"url",placeholder:Object(l.c)("tenant.fields.tenantUrl"),size:"large",layout:null,addonAfter:Object(w.jsxs)("span",{style:{fontWeight:"bold"},children:[".",x.a.frontendUrl.host]})}),Object(w.jsx)(g.a,{style:{marginTop:"16px"},type:"primary",htmlType:"submit",block:!0,size:"large",loading:s,children:Object(l.c)("tenant.create.button")}),Boolean(d.length)&&Object(w.jsx)(g.a,{style:{marginTop:"16px"},htmlType:"button",block:!0,size:"large",onClick:e.onViewToggle,children:Object(l.c)("tenant.invitation.view")})]})}))},C=t(111),M=t(308),V=t(756),Y=v.e().shape({id:O.a.string(Object(l.c)("tenant.fields.tenantId"))});var I=function(e){var n=Object(i.d)(),t=Object(i.e)(M.a.selectLoading),o=Object(i.e)(c.a.selectInvitedTenants),u=Object(i.e)(c.a.selectCurrentUser),s=Object(a.useState)({id:o[0].id}),d=Object(r.a)(s,1)[0],m=Object(p.c)({resolver:Object(q.yupResolver)(Y),mode:"onSubmit",defaultValues:d});return Object(w.jsx)(p.a,Object(b.a)(Object(b.a)({},m),{},{children:Object(w.jsxs)("form",{onSubmit:m.handleSubmit((function(e){var t=e.id,r=u.tenants.find((function(e){return e.tenant.id===t}));n(C.a.doAccept(r.invitationToken))})),children:[Object(w.jsx)(V.a,{name:"id",placeholder:Object(l.c)("tenant.fields.tenantId"),size:"large",options:o.map((function(e){return{value:e.id,label:e.name}})),layout:null}),Object(w.jsx)(g.a,{style:{marginTop:"16px"},type:"primary",htmlType:"submit",block:!0,size:"large",loading:t,children:Object(l.c)("tenant.invitation.accept")}),Object(w.jsx)(g.a,{style:{marginTop:"16px"},htmlType:"button",block:!0,size:"large",onClick:e.onViewToggle,children:Object(l.c)("tenant.new.title")})]})}))},B=t(694);n.default=function(){var e=Object(a.useState)("form"),n=Object(r.a)(e,2),t=n[0],b=n[1],f=Object(i.d)(),j=Object(i.e)(c.a.selectInvitedTenants),h=Object(i.e)(c.a.selectBackgroundImageUrl),p=Object(i.e)(c.a.selectLogoUrl);Object(a.useEffect)((function(){b(j.length?"select":"form")}),[j]);var g=function(){b((function(e){return"form"===e?"select":"form"}))};return Object(w.jsx)(m.a,{style:{backgroundImage:"url(".concat(h||"/images/tenant.jpg",")")},children:Object(w.jsxs)(u.a,{children:[Object(w.jsx)(s.a,{children:p?Object(w.jsx)("img",{src:p,width:"240px",alt:Object(l.c)("app.title")}):Object(w.jsx)("h1",{children:Object(l.c)("app.title")})}),"form"===t?Object(w.jsx)(z,{onViewToggle:g}):Object(w.jsx)(I,{onViewToggle:g}),Object(w.jsx)(d.a,{children:Object(w.jsx)(B.a,{onClick:function(){f(o.a.doSignout())},children:Object(l.c)("auth.signout")})})]})})}},622:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(10),a=t(11),i=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,n,t,r){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!r&&!t[e])return null;var l=n[e];return(null===l||void 0===l||null===(a=l[0])||void 0===a?void 0:a.message)||(null===l||void 0===l?void 0:l.message)||l||null}}]),e}()},629:function(e,n,t){"use strict";var r=t(0),a=t(1284),i=t(1288),l=t(618),o=t(1),c=t(622),u=t(12),s=function(e){var n=e.label,t=e.name,s=e.hint,d=e.layout,m=e.size,b=e.type,f=e.placeholder,j=e.autoFocus,h=e.autoComplete,p=e.prefix,g=e.externalErrorMessage,O=e.required,v=e.addonAfter,x=Object(l.d)(),y=x.setValue,q=x.watch,w=x.register,S=x.errors,k=x.formState,T=k.touched,z=k.isSubmitted;Object(o.useEffect)((function(){w({name:t})}),[w,t]);var C=c.a.errorMessage(t,S,T,z,g);return Object(u.jsx)(a.a.Item,Object(r.a)(Object(r.a)({},d),{},{label:n,required:O,validateStatus:C?"error":"success",help:C||s,children:Object(u.jsx)(i.a,{id:t,name:t,type:b,value:q(t),onChange:function(n){y(t,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},size:m||void 0,placeholder:f||void 0,autoFocus:j||!1,autoComplete:h||void 0,prefix:p||void 0,addonAfter:v||void 0})}))};s.defaultProps={layout:null,type:"text",required:!1},n.a=s},638:function(e,n,t){"use strict";var r=t(19),a=t(44),i=t(4),l=t(106),o=t.n(l),c={generic:function(e){return a.c().label(e)},string:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},boolean:function(e,n){return a.b().default(!1).label(e)},relationToOne:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(t=t.required()),t},stringArray:function(e,n){n=n||{};var t=a.a().compact().ensure().of(a.h().transform((function(e,n){return""===n?null:e})).trim()).label(e);return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},relationToMany:function(e,n){n=n||{};var t=a.a().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},integer:function(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},images:function(e,n){n=n||{};var t=a.a().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},files:function(e,n){n=n||{};var t=a.a().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},enumerator:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(r.a)(n.options||[])));return n.required&&(t=t.required(Object(i.c)("validation.string.selected"))),t},email:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},decimal:function(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},datetime:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return e?o()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(t=t.required()),t},date:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).test("is-date",Object(i.c)("validation.mixed.default"),(function(e){return!e||o()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?o()(e).format("YYYY-MM-DD"):null}));return n.required&&(t=t.required()),t}};n.a=c},694:function(e,n,t){"use strict";var r,a=t(183),i=t(184).a.button(r||(r=Object(a.a)(["\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  color: var(--link-color);\n  text-decoration: none;\n  display: inline;\n  margin: 0;\n  padding: 0;\n\n  &:hover {\n    text-decoration: none;\n  }\n  &:focus {\n    text-decoration: none;\n  }\n"])));n.a=i},756:function(e,n,t){"use strict";var r=t(0),a=t(1284),i=t(702),l=t(1),o=t(622),c=t(618),u=t(12),s=function(e){var n=e.label,t=e.name,s=e.hint,d=e.layout,m=e.size,b=e.placeholder,f=e.options,j=e.mode,h=e.autoFocus,p=e.required,g=e.externalErrorMessage,O=e.optionFilterProp,v=Object(c.d)(),x=v.register,y=v.errors,q=v.formState,w=q.touched,S=q.isSubmitted,k=v.setValue,T=v.watch,z=o.a.errorMessage(t,y,w,S,g),C=T(t);return Object(l.useEffect)((function(){x({name:t})}),[x,t]),Object(u.jsx)(a.a.Item,Object(r.a)(Object(r.a)({},d),{},{label:n,validateStatus:z?"error":"success",required:p,help:z||s,children:Object(u.jsx)(i.a,{id:t,onChange:function(n){k(t,n,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n)},onBlur:function(n){e.onBlur&&e.onBlur(n)},value:C,size:m||void 0,placeholder:b||void 0,autoFocus:h||!1,mode:j||void 0,optionFilterProp:O||"children",allowClear:!0,children:f.map((function(e){return Object(u.jsx)(i.a.Option,{value:e.value,title:e.title,children:e.label},e.value)}))})}))};s.defaultProps={layout:null,required:!1},n.a=s},811:function(e,n,t){"use strict";var r,a=t(183),i=t(184).a.div(r||(r=Object(a.a)(["\n  width: 500px;\n  height: 100%;\n  min-height: 100%;\n  overflow-y: auto;\n  z-index: 1;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 56px 40px;\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: white;\n  }\n\n  .ant-checkbox-wrapper {\n    color: white;\n  }\n\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n"])));n.a=i},812:function(e,n,t){"use strict";var r,a=t(183),i=t(184).a.div(r||(r=Object(a.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 48px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  color: white;\n\n  h1 {\n    margin-bottom: 0;\n  }\n"])));n.a=i},813:function(e,n,t){"use strict";var r,a=t(183),i=t(184).a.div(r||(r=Object(a.a)(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n  }\n"])));n.a=i},843:function(e,n,t){"use strict";var r,a=t(183),i=t(184).a.div(r||(r=Object(a.a)(["\n  margin-top: 36px;\n  text-align: center;\n"])));n.a=i},957:function(e,n,t){"use strict";var r=t(5),a=function(e){return e.tenant.form},i=Object(r.a)([a],(function(e){return e.record})),l={selectInitLoading:Object(r.a)([a],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(r.a)([a],(function(e){return Boolean(e.saveLoading)})),selectRecord:i,selectRaw:a};n.a=l}}]);