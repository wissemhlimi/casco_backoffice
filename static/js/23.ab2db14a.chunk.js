(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[23],{1280:function(e,n,t){"use strict";t.r(n);var r=t(199),a=t(11),i=t(2),u=t(45),c=t(3),l=t(7),o=t(122),s=t(917),d=t(626),m=t(628),b=t(627),f=t(0),j=t(1237),O=t(212),p=t(622),x=t(633),v=t(632),h=t(758),g=t(694),q=t(759),y=t(46),C=t(641),S=t(51),Y=t(35),w=t(647),M=y.e().shape({name:C.a.string(Object(c.c)("tenant.fields.tenantName"),{required:!0,max:50}),url:C.a.string(Object(c.c)("tenant.fields.tenantUrl"),{required:!0,max:50}).matches(/^[a-z0-9][-a-zA-Z0-9]*$/,Object(c.c)("tenant.validation.url"))}),k=y.e().shape({name:C.a.string(Object(c.c)("tenant.fields.tenantName"),{required:!0,max:50})}),I=Y.a.isEnabled?M:k,L=function(e){var n=Object(i.useState)((function(){return e.record||{name:""}})),t=Object(r.a)(n,1)[0],u=Object(p.c)({resolver:Object(w.yupResolver)(I),mode:"all",defaultValues:t}),l=function(n){var t;e.onSubmit(null===e||void 0===e||null===(t=e.record)||void 0===t?void 0:t.id,n)},o=e.saveLoading;return Object(a.jsx)(x.a,{children:Object(a.jsx)(p.a,Object(f.a)(Object(f.a)({},u),{},{children:Object(a.jsxs)("form",{onSubmit:u.handleSubmit(l),children:[Object(a.jsx)(v.a,{name:"name",label:Object(c.c)("tenant.fields.name"),required:!0,layout:x.b,autoFocus:!0}),Y.a.isEnabled&&Object(a.jsx)(v.a,{name:"url",label:Object(c.c)("tenant.fields.url"),required:!0,layout:x.b,addonAfter:".".concat(S.a.frontendUrl.host)}),Object(a.jsxs)(j.a.Item,Object(f.a)(Object(f.a)({className:"form-buttons"},x.c),{},{children:[Object(a.jsx)(O.a,{loading:o,type:"primary",onClick:u.handleSubmit(l),icon:Object(a.jsx)(h.a,{}),children:Object(c.c)("common.save")}),Object(a.jsx)(O.a,{disabled:o,onClick:function(){Object.keys(t).forEach((function(e){u.setValue(e,t[e])}))},icon:Object(a.jsx)(g.a,{}),children:Object(c.c)("common.reset")}),e.onCancel&&Object(a.jsx)(O.a,{disabled:o,onClick:function(){return e.onCancel()},icon:Object(a.jsx)(q.a,{}),children:Object(c.c)("common.cancel")})]}))]})}))})},B=t(37),D=t(649);n.default=function(e){var n=Object(u.d)(),t=Object(i.useState)(!1),f=Object(r.a)(t,2),j=f[0],O=f[1],p=Object(B.h)(),x=Object(u.e)(s.a.selectInitLoading),v=Object(u.e)(s.a.selectSaveLoading),h=Object(u.e)(s.a.selectRecord),g=Boolean(p.params.id);Object(i.useEffect)((function(){n(o.a.doInit(p.params.id)),O(!0)}),[n,g,p.params.id]);var q=g?Object(c.c)("tenant.edit.title"):Object(c.c)("tenant.new.title");return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m.a,{header:!0,items:[[Object(c.c)("tenant.menu"),"/tenant"],[q]]}),Object(a.jsxs)(d.a,{children:[Object(a.jsx)(b.a,{children:q}),x&&Object(a.jsx)(D.a,{}),j&&!x&&Object(a.jsx)(L,{saveLoading:v,record:h,isEditing:g,onSubmit:function(e,t){n(g?o.a.doUpdate(e,t):o.a.doCreate(t))},onCancel:function(){return Object(l.b)().push("/tenant")}})]})]})}},625:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(14),a=t(15),i=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,n,t,r){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!r&&!t[e])return null;var u=n[e];return(null===u||void 0===u||null===(a=u[0])||void 0===a?void 0:a.message)||(null===u||void 0===u?void 0:u.message)||u||null}}]),e}()},626:function(e,n,t){"use strict";var r=t(184);function a(){var e=Object(r.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var i=t(185).a.div(a());n.a=i},627:function(e,n,t){"use strict";var r=t(184);function a(){var e=Object(r.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var i=t(185).a.h1(a());n.a=i},628:function(e,n,t){"use strict";var r=t(11),a=t(667),i=(t(2),t(99));n.a=function(e){var n=function(e){return e.length>1};return Object(r.jsx)(a.a,{children:e.items.map((function(e){return Object(r.jsx)(a.a.Item,{children:n(e)?Object(r.jsx)(i.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},632:function(e,n,t){"use strict";var r=t(0),a=t(11),i=t(1237),u=t(1241),c=t(622),l=t(2),o=t(625),s=function(e){var n=e.label,t=e.name,s=e.hint,d=e.layout,m=e.size,b=e.type,f=e.placeholder,j=e.autoFocus,O=e.autoComplete,p=e.prefix,x=e.externalErrorMessage,v=e.required,h=e.addonAfter,g=Object(c.d)(),q=g.setValue,y=g.watch,C=g.register,S=g.errors,Y=g.formState,w=Y.touched,M=Y.isSubmitted;Object(l.useEffect)((function(){C({name:t})}),[C,t]);var k=o.a.errorMessage(t,S,w,M,x);return Object(a.jsx)(i.a.Item,Object(r.a)(Object(r.a)({},d),{},{label:n,required:v,validateStatus:k?"error":"success",help:k||s,children:Object(a.jsx)(u.a,{id:t,name:t,type:b,value:y(t),onChange:function(n){q(t,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},size:m||void 0,placeholder:f||void 0,autoFocus:j||!1,autoComplete:O||void 0,prefix:p||void 0,addonAfter:h||void 0})}))};s.defaultProps={layout:null,type:"text",required:!1},n.a=s},633:function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return c}));var r=t(184);function a(){var e=Object(r.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n"]);return a=function(){return e},e}var i=t(185).a.div(a()),u={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},c={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};n.a=i},641:function(e,n,t){"use strict";var r=t(53),a=t(46),i=t(3),u=t(111),c=t.n(u),l={generic:e=>a.c().label(e),string(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},boolean:(e,n)=>a.b().default(!1).label(e),relationToOne(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(t=t.required()),t},stringArray(e,n){n=n||{};var t=a.a().compact().ensure().of(a.h().transform((function(e,n){return""===n?null:e})).trim()).label(e);return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},relationToMany(e,n){n=n||{};var t=a.a().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},integer(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},images(e,n){n=n||{};var t=a.a().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},files(e,n){n=n||{};var t=a.a().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},enumerator(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(r.a)(n.options||[])));return n.required&&(t=t.required(Object(i.c)("validation.string.selected"))),t},email(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},decimal(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},datetime(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return e?c()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(t=t.required()),t},date(e,n){n=n||{};var t=a.c().nullable(!0).label(e).test("is-date",Object(i.c)("validation.mixed.default"),(function(e){return!e||c()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?c()(e).format("YYYY-MM-DD"):null}));return n.required&&(t=t.required()),t}};n.a=l},649:function(e,n,t){"use strict";var r=t(11),a=t(656);t(2);n.a=function(e){return Object(r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(r.jsx)(a.a,{})})}},917:function(e,n,t){"use strict";var r=t(5),a=function(e){return e.tenant.form},i=Object(r.a)([a],(function(e){return e.record})),u={selectInitLoading:Object(r.a)([a],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(r.a)([a],(function(e){return Boolean(e.saveLoading)})),selectRecord:i,selectRaw:a};n.a=u}}]);