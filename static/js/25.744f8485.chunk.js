(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[25],{1326:function(e,n,t){"use strict";t.r(n);var r=t(23),a=t(1),i=t(43),u=t(36),o=t(3),c=t(118),l=t(5),s=function(e){return e.produr.form},d=Object(l.a)([s],(function(e){return e.record})),m={selectInitLoading:Object(l.a)([s],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(l.a)([s],(function(e){return Boolean(e.saveLoading)})),selectRecord:d,selectRaw:s},b=t(7),f=t(906),j=t(617),p=t(619),O=t(641),x=t(618),v=t(12);n.default=function(e){var n=Object(a.useState)(!1),t=Object(r.a)(n,2),l=t[0],s=t[1],d=Object(i.d)(),h=Object(u.h)(),g=Object(i.e)(m.selectInitLoading),q=Object(i.e)(m.selectSaveLoading),y=Object(i.e)(m.selectRecord),C=Boolean(h.params.id),S=C?Object(o.c)("entities.produr.edit.title"):Object(o.c)("entities.produr.new.title");Object(a.useEffect)((function(){d(c.a.doInit(h.params.id)),s(!0)}),[d,h.params.id]);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(p.a,{items:[[Object(o.c)("dashboard.menu"),"/"],[Object(o.c)("entities.produr.menu"),"/produr"],[S]]}),Object(v.jsxs)(j.a,{children:[Object(v.jsx)(x.a,{children:S}),g&&Object(v.jsx)(O.a,{}),l&&!g&&Object(v.jsx)(f.a,{saveLoading:q,record:y,isEditing:C,onSubmit:function(e,n){d(C?c.a.doUpdate(e,n):c.a.doCreate(n))},onCancel:function(){return Object(b.b)().push("/produr")}})]})]})}},616:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(10),a=t(11),i=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,n,t,r){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!r&&!t[e])return null;var u=n[e];return(null===u||void 0===u||null===(a=u[0])||void 0===a?void 0:a.message)||(null===u||void 0===u?void 0:u.message)||u||null}}]),e}()},617:function(e,n,t){"use strict";var r,a=t(183),i=t(184).a.div(r||(r=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));n.a=i},618:function(e,n,t){"use strict";var r,a=t(183),i=t(184).a.h1(r||(r=Object(a.a)(["\n  margin-bottom: 36px;\n"])));n.a=i},619:function(e,n,t){"use strict";var r=t(663),a=(t(1),t(95)),i=t(12);n.a=function(e){var n=function(e){return e.length>1};return Object(i.jsx)(r.a,{children:e.items.map((function(e){return Object(i.jsx)(r.a.Item,{children:n(e)?Object(i.jsx)(a.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},623:function(e,n,t){"use strict";var r=t(0),a=t(1280),i=t(1284),u=t(613),o=t(1),c=t(616),l=t(12),s=function(e){var n=e.label,t=e.name,s=e.hint,d=e.layout,m=e.size,b=e.type,f=e.placeholder,j=e.autoFocus,p=e.autoComplete,O=e.prefix,x=e.externalErrorMessage,v=e.required,h=e.addonAfter,g=Object(u.d)(),q=g.setValue,y=g.watch,C=g.register,S=g.errors,Y=g.formState,w=Y.touched,M=Y.isSubmitted;Object(o.useEffect)((function(){C({name:t})}),[C,t]);var T=c.a.errorMessage(t,S,w,M,x);return Object(l.jsx)(a.a.Item,Object(r.a)(Object(r.a)({},d),{},{label:n,required:v,validateStatus:T?"error":"success",help:T||s,children:Object(l.jsx)(i.a,{id:t,name:t,type:b,value:y(t),onChange:function(n){q(t,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},size:m||void 0,placeholder:f||void 0,autoFocus:j||!1,autoComplete:p||void 0,prefix:O||void 0,addonAfter:h||void 0})}))};s.defaultProps={layout:null,type:"text",required:!1},n.a=s},626:function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return o}));var r,a=t(183),i=t(184).a.div(r||(r=Object(a.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n"]))),u={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},o={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};n.a=i},634:function(e,n,t){"use strict";var r=t(19),a=t(46),i=t(3),u=t(137),o=t.n(u),c={generic:function(e){return a.c().label(e)},string:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},boolean:function(e,n){return a.b().default(!1).label(e)},relationToOne:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(t=t.required()),t},stringArray:function(e,n){n=n||{};var t=a.a().compact().ensure().of(a.h().transform((function(e,n){return""===n?null:e})).trim()).label(e);return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},relationToMany:function(e,n){n=n||{};var t=a.a().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},integer:function(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},images:function(e,n){n=n||{};var t=a.a().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},files:function(e,n){n=n||{};var t=a.a().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},enumerator:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(r.a)(n.options||[])));return n.required&&(t=t.required(Object(i.c)("validation.string.selected"))),t},email:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},decimal:function(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},datetime:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return e?o()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(t=t.required()),t},date:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).test("is-date",Object(i.c)("validation.mixed.default"),(function(e){return!e||o()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?o()(e).format("YYYY-MM-DD"):null}));return n.required&&(t=t.required()),t}};n.a=c},641:function(e,n,t){"use strict";var r=t(649),a=(t(1),t(12));n.a=function(e){return Object(a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(a.jsx)(r.a,{})})}},906:function(e,n,t){"use strict";var r=t(0),a=t(23),i=t(762),u=t(694),o=t(763),c=t(1280),l=t(206),s=t(613),d=t(1),m=t(3),b=t(626),f=t(46),j=t(634),p=t(639),O=t(623),x=t(12),v=f.e().shape({produrTitle:j.a.string(Object(m.c)("entities.produr.fields.produrTitle"),{required:!0})});n.a=function(e){var n=Object(d.useState)((function(){return{produrTitle:(e.record||{}).produrTitle}})),t=Object(a.a)(n,1)[0],f=Object(s.c)({resolver:Object(p.yupResolver)(v),mode:"all",defaultValues:t}),j=function(n){var t;e.onSubmit(null===e||void 0===e||null===(t=e.record)||void 0===t?void 0:t.id,n)},h=e.saveLoading;return Object(x.jsx)(b.a,{children:Object(x.jsx)(s.a,Object(r.a)(Object(r.a)({},f),{},{children:Object(x.jsxs)("form",{onSubmit:f.handleSubmit(j),children:[Object(x.jsx)(O.a,{name:"produrTitle",label:Object(m.c)("entities.produr.fields.produrTitle"),required:!0,layout:b.b,autoFocus:!0}),Object(x.jsxs)(c.a.Item,Object(r.a)(Object(r.a)({className:"form-buttons"},b.c),{},{children:[Object(x.jsx)(l.a,{loading:h,type:"primary",onClick:f.handleSubmit(j),icon:Object(x.jsx)(i.a,{}),children:Object(m.c)("common.save")}),Object(x.jsx)(l.a,{disabled:h,onClick:function(){Object.keys(t).forEach((function(e){f.setValue(e,t[e])}))},icon:Object(x.jsx)(u.a,{}),children:Object(m.c)("common.reset")}),e.onCancel&&Object(x.jsx)(l.a,{disabled:h,onClick:function(){return e.onCancel()},icon:Object(x.jsx)(o.a,{}),children:Object(m.c)("common.cancel")})]}))]})}))})}}}]);