(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[27],{1574:function(e,n,t){"use strict";t.r(n);var r=t(209),a=t(11),i=t(2),u=t(45),c=t(37),l=t(3),o=t(135),s=t(5),d=function(e){return e.zap.form},m=Object(s.a)([d],(function(e){return e.record})),b={selectInitLoading:Object(s.a)([d],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(s.a)([d],(function(e){return Boolean(e.saveLoading)})),selectRecord:m,selectRaw:d},f=t(7),j=t(0),p=t(765),v=t(783),O=t(893),x=t(1534),h=t(223),g=t(650),q=t(673),z=t(51),y=t(686),C=t(693),S=t(672),w=t(874),D=z.e().shape({zapTitle:y.a.string(Object(l.c)("entities.zap.fields.zapTitle"),{required:!0}),zapDescr:y.a.string(Object(l.c)("entities.zap.fields.zapDescr"),{})}),M=function(e){var n=Object(i.useState)((function(){var n=e.record||{};return{zapTitle:n.zapTitle,zapDescr:n.zapDescr}})),t=Object(r.a)(n,1)[0],u=Object(g.c)({resolver:Object(C.yupResolver)(D),mode:"all",defaultValues:t}),c=function(n){var t;e.onSubmit(null===e||void 0===e||null===(t=e.record)||void 0===t?void 0:t.id,n)},o=e.saveLoading;return Object(a.jsx)(q.a,{children:Object(a.jsx)(g.a,Object(j.a)(Object(j.a)({},u),{},{children:Object(a.jsxs)("form",{onSubmit:u.handleSubmit(c),children:[Object(a.jsx)(S.a,{name:"zapTitle",label:Object(l.c)("entities.zap.fields.zapTitle"),required:!0,layout:q.b,autoFocus:!0}),Object(a.jsx)(w.a,{name:"zapDescr",label:Object(l.c)("entities.zap.fields.zapDescr"),required:!1,layout:q.b}),Object(a.jsxs)(x.a.Item,Object(j.a)(Object(j.a)({className:"form-buttons"},q.c),{},{children:[Object(a.jsx)(h.a,{loading:o,type:"primary",onClick:u.handleSubmit(c),icon:Object(a.jsx)(p.a,{}),children:Object(l.c)("common.save")}),Object(a.jsx)(h.a,{disabled:o,onClick:function(){Object.keys(t).forEach((function(e){u.setValue(e,t[e])}))},icon:Object(a.jsx)(v.a,{}),children:Object(l.c)("common.reset")}),e.onCancel&&Object(a.jsx)(h.a,{disabled:o,onClick:function(){return e.onCancel()},icon:Object(a.jsx)(O.a,{}),children:Object(l.c)("common.cancel")})]}))]})}))})},Y=t(663),B=t(665),T=t(699),I=t(664);n.default=function(e){var n=Object(i.useState)(!1),t=Object(r.a)(n,2),s=t[0],d=t[1],m=Object(u.d)(),j=Object(c.h)(),p=Object(u.e)(b.selectInitLoading),v=Object(u.e)(b.selectSaveLoading),O=Object(u.e)(b.selectRecord),x=Boolean(j.params.id),h=x?Object(l.c)("entities.zap.edit.title"):Object(l.c)("entities.zap.new.title");Object(i.useEffect)((function(){m(o.a.doInit(j.params.id)),d(!0)}),[m,j.params.id]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(B.a,{items:[[Object(l.c)("dashboard.menu"),"/"],[Object(l.c)("entities.zap.menu"),"/zap"],[h]]}),Object(a.jsxs)(Y.a,{children:[Object(a.jsx)(I.a,{children:h}),p&&Object(a.jsx)(T.a,{}),s&&!p&&Object(a.jsx)(M,{saveLoading:v,record:O,isEditing:x,onSubmit:function(e,n){m(x?o.a.doUpdate(e,n):o.a.doCreate(n))},onCancel:function(){return Object(f.b)().push("/zap")}})]})]})}},657:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(14),a=t(15),i=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,n,t,r){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!r&&!t[e])return null;var u=n[e];return(null===u||void 0===u||null===(a=u[0])||void 0===a?void 0:a.message)||(null===u||void 0===u?void 0:u.message)||u||null}}]),e}()},663:function(e,n,t){"use strict";var r=t(194);function a(){var e=Object(r.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var i=t(195).a.div(a());n.a=i},664:function(e,n,t){"use strict";var r=t(194);function a(){var e=Object(r.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var i=t(195).a.h1(a());n.a=i},665:function(e,n,t){"use strict";var r=t(11),a=t(735),i=(t(2),t(103));n.a=function(e){var n=function(e){return e.length>1};return Object(r.jsx)(a.a,{children:e.items.map((function(e){return Object(r.jsx)(a.a.Item,{children:n(e)?Object(r.jsx)(i.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},672:function(e,n,t){"use strict";var r=t(0),a=t(11),i=t(1534),u=t(1537),c=t(650),l=t(2),o=t(657),s=function(e){var n=e.label,t=e.name,s=e.hint,d=e.layout,m=e.size,b=e.type,f=e.placeholder,j=e.autoFocus,p=e.autoComplete,v=e.prefix,O=e.externalErrorMessage,x=e.required,h=e.addonAfter,g=Object(c.d)(),q=g.setValue,z=g.watch,y=g.register,C=g.errors,S=g.formState,w=S.touched,D=S.isSubmitted;Object(l.useEffect)((function(){y({name:t})}),[y,t]);var M=o.a.errorMessage(t,C,w,D,O);return Object(a.jsx)(i.a.Item,Object(r.a)(Object(r.a)({},d),{},{label:n,required:x,validateStatus:M?"error":"success",help:M||s,children:Object(a.jsx)(u.a,{id:t,name:t,type:b,value:z(t),onChange:function(n){q(t,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},size:m||void 0,placeholder:f||void 0,autoFocus:j||!1,autoComplete:p||void 0,prefix:v||void 0,addonAfter:h||void 0})}))};s.defaultProps={layout:null,type:"text",required:!1},n.a=s},673:function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return c}));var r=t(194);function a(){var e=Object(r.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n"]);return a=function(){return e},e}var i=t(195).a.div(a()),u={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},c={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};n.a=i},686:function(e,n,t){"use strict";var r=t(56),a=t(51),i=t(3),u=t(115),c=t.n(u),l={generic:e=>a.c().label(e),string(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},boolean:(e,n)=>a.b().default(!1).label(e),relationToOne(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(t=t.required()),t},stringArray(e,n){n=n||{};var t=a.a().compact().ensure().of(a.h().transform((function(e,n){return""===n?null:e})).trim()).label(e);return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},relationToMany(e,n){n=n||{};var t=a.a().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},integer(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},images(e,n){n=n||{};var t=a.a().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},files(e,n){n=n||{};var t=a.a().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},enumerator(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(r.a)(n.options||[])));return n.required&&(t=t.required(Object(i.c)("validation.string.selected"))),t},email(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},decimal(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},datetime(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return e?c()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(t=t.required()),t},date(e,n){n=n||{};var t=a.c().nullable(!0).label(e).test("is-date",Object(i.c)("validation.mixed.default"),(function(e){return!e||c()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?c()(e).format("YYYY-MM-DD"):null}));return n.required&&(t=t.required()),t}};n.a=l},699:function(e,n,t){"use strict";var r=t(11),a=t(701);t(2);n.a=function(e){return Object(r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(r.jsx)(a.a,{})})}},874:function(e,n,t){"use strict";var r=t(0),a=t(11),i=t(1534),u=t(1537),c=t(650),l=t(2),o=t(657),s=function(e){var n=e.label,t=e.name,s=e.hint,d=e.layout,m=e.placeholder,b=e.autoFocus,f=e.autoComplete,j=e.prefix,p=e.required,v=e.rows,O=e.externalErrorMessage,x=Object(c.d)(),h=x.register,g=x.errors,q=x.formState,z=q.touched,y=q.isSubmitted,C=x.setValue,S=x.watch,w=o.a.errorMessage(t,g,z,y,O),D=S(t);return Object(l.useEffect)((function(){h({name:t})}),[h,t]),Object(a.jsx)(i.a.Item,Object(r.a)(Object(r.a)({},d),{},{label:n,required:p,validateStatus:w?"error":"success",help:w||s,children:Object(a.jsx)(u.a.TextArea,{id:t,onChange:function(n){C(t,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},value:D,placeholder:m||void 0,autoFocus:b||!1,autoComplete:f||void 0,prefix:j||void 0,rows:v})}))};s.defaultProps={layout:null,required:!1,rows:4},n.a=s}}]);