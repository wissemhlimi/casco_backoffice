(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[69],{1246:function(e,t,n){},1282:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(43),i=n(36),o=n(3),r=n(223),l=n(941),s=n(0),d=n(2),u=n(4),b=n(14),j=n(23),m=n(641),f=n(810),p=n(811),O=n(1280),h=(n(1246),n(963)),v=n(85),g=n(725),x=n(12),y=function(e){var t=Object(a.useState)([""]),n=Object(j.a)(t,2),c=n[0],i=n[1],r=e.record,l=e.loading,y=Object(a.useState)([{finishGood:!0,id:"",familyParent:"",quantityInStock:0,quantityInStockAfter:0,quantityRequested:0,quantityPlannedTotal:0,quantityToProduce:0,subassembly:!0}]),w=Object(j.a)(y,2),C=w[0],P=w[1],T=function(){var t=e.record?e.record.id:r.id;v.a.find(t).then((function(e){var t=[""];e.product[0].perWeek.map((function(e){t.push(e.week)})),t.shift(),i(t)}));var n=[{_id:"",finishGood:!0,id:"",familyParent:"",quantityInStock:0,quantityInStockAfter:0,quantityRequested:0,quantityPlannedTotal:0,quantityToProduce:0,subassembly:!0}],a={_id:"",finishGood:!0,id:"",familyParent:"",quantityInStock:0,quantityInStockAfter:0,quantityRequested:0,quantityPlannedTotal:0,quantityToProduce:0,subassembly:!0};r.product.map((function(e){a={_id:e._id,finishGood:e.finishGood,id:e.id,familyParent:e.familyParent,quantityInStock:e.quantityInStock,quantityInStockAfter:e.quantityInStockAfter,quantityRequested:e.quantityRequested,quantityPlannedTotal:e.quantityPlannedTotal,quantityToProduce:e.quantityToProduce,subassembly:e.subassembly},e.perWeek.map((function(e,t){Object.assign(a,Object(b.a)({},e.week,{Quantity:e.quantity,ToProduce:e.quantityToProduce.value,changed:e.quantityToProduce.changed,_id:e._id}))})),n.push(a)})),n.shift(),P(n)};Object(a.useEffect)((function(){!l&&r&&T()}),[!l&&r]);var k=function(){var t=Object(u.a)(Object(d.a)().mark((function t(n){var a,c,i,o;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n.length>0)){t.next=10;break}return e.record.product.map((function(e,t){e._id===n[0].key._id&&(a=t,e.perWeek.map((function(e,t){var a=Object.keys(n[0].data);i=a[0],e.week===i&&(c=t)})))})),e.record.product[a].perWeek[c].quantityToProduce={value:n[0].data[i].ToProduce,changed:!0},o=0,t.next=6,e.record.product[a].perWeek.map((function(e){o+=e.quantityToProduce.value}));case 6:return e.record.product[a].quantityPlannedTotal=o,t.next=9,v.a.update(e.record.id,e.record);case 9:T();case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return l||!r?Object(x.jsx)(m.a,{}):Object(x.jsxs)(g.a,{children:[Object(x.jsxs)(f.a,{gutter:24,children:[Boolean(r.name)&&Object(x.jsx)(p.a,{span:6,children:Object(x.jsx)(O.a.Item,Object(s.a)(Object(s.a)({},g.b),{},{label:Object(o.c)("entities.planning.fields.name"),children:r.name}))}),Boolean(r.year)&&Object(x.jsx)(p.a,{span:6,children:Object(x.jsx)(O.a.Item,Object(s.a)(Object(s.a)({},g.b),{},{label:Object(o.c)("entities.planning.fields.year"),children:r.year}))}),Boolean(r.week)&&Object(x.jsx)(p.a,{span:6,children:Object(x.jsx)(O.a.Item,Object(s.a)(Object(s.a)({},g.b),{},{label:Object(o.c)("entities.planning.fields.week"),children:r.week}))}),Boolean(r.status)&&Object(x.jsx)(p.a,{span:6,children:Object(x.jsx)(O.a.Item,Object(s.a)(Object(s.a)({},g.b),{},{label:Object(o.c)("entities.planning.fields.status"),children:Object(o.c)("entities.planning.enumerators.status.".concat(r.status))}))})]}),Object(x.jsxs)(h.DataGrid,{dataSource:C,allowColumnReordering:!0,columnWidth:"auto",showBorders:!0,onRowPrepared:function(e){0===e.groupIndex&&(e.rowElement.style.background="#0aa3a3")},showRowLines:!0,onCellPrepared:function(t){"To Produce"===t.column.caption&&"data"===t.rowType&&"draft"===e.record.status&&(t.cellElement.style.background="#fff")},children:[Object(x.jsx)(h.ColumnChooser,{enabled:!0,mode:"select"}),Object(x.jsx)(h.Selection,{mode:"multiple"}),Object(x.jsx)(h.GroupPanel,{visible:!1}),Object(x.jsx)(h.Grouping,{autoExpandAll:!1,expandMode:"rowClick"}),Object(x.jsx)(h.Editing,{allowUpdating:!0,allowAdding:!1,allowDeleting:!1,mode:"cell",onChangesChange:function(e){return k(e)}}),Object(x.jsx)(h.Column,{dataField:"familyParent",allowEditing:!1,groupIndex:0}),Object(x.jsx)(h.Column,{dataField:"id",allowEditing:!1,fixed:!0}),Object(x.jsx)(h.Column,{dataField:"quantityInStock",allowEditing:!1,fixed:!0}),Object(x.jsx)(h.Column,{dataField:"quantityInStockAfter",allowEditing:!1}),Object(x.jsx)(h.Column,{dataField:"quantityRequested",allowEditing:!1,fixed:!0}),Object(x.jsx)(h.Column,{dataField:"quantityToProduce",allowEditing:!1}),Object(x.jsx)(h.Column,{dataField:"quantityPlannedTotal",allowEditing:!1}),Object(x.jsx)(h.Column,{dataField:"subassembly",dataType:"boolean",allowEditing:!1}),Object(x.jsx)(h.Column,{dataField:"finishGood",dataType:"boolean",allowEditing:!1}),null===c||void 0===c?void 0:c.map((function(t){return Object(x.jsxs)(h.Column,{caption:t,children:[Object(x.jsx)(h.Column,{caption:"Quantity",dataField:t+".Quantity",allowEditing:!1}),Object(x.jsx)(h.Column,{caption:"To Produce",dataField:t+".ToProduce",allowEditing:"draft"===e.record.status,cellRender:function(n){return function(t,n){var a;return Object(x.jsx)(x.Fragment,{children:null!==(a=t.data[n])&&void 0!==a&&a.changed?Object(x.jsx)("div",{style:{backgroundColor:"draft"===e.record.status?"white":"",color:"red",paddingLeft:5,paddingRight:5},children:t.value}):Object(x.jsx)("div",{style:{backgroundColor:"draft"===e.record.status?"white":"",color:"draft"===e.record.status?"black":"",paddingLeft:5,paddingRight:5},children:t.value})})}(n,t)}})]})})),Object(x.jsx)(h.Scrolling,{}),Object(x.jsx)(h.Paging,{defaultPageSize:100}),Object(x.jsx)(h.Pager,{visible:!0,allowedPageSizes:!0,displayMode:"full",showPageSizeSelector:!0,showInfo:!0,showNavigationButtons:!0}),Object(x.jsx)(h.Export,{enabled:!0,allowExportSelectedData:!0})]})]})},w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M296 250c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm184 144H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-48 458H208V148h560v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm440-88H728v-36.6c46.3-13.8 80-56.6 80-107.4 0-61.9-50.1-112-112-112s-112 50.1-112 112c0 50.7 33.7 93.6 80 107.4V764H520c-8.8 0-16 7.2-16 16v152c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16V780c0-8.8-7.2-16-16-16zM646 620c0-27.6 22.4-50 50-50s50 22.4 50 50-22.4 50-50 50-50-22.4-50-50zm180 266H566v-60h260v60z"}}]},name:"audit",theme:"outlined"},C=n(42),P=function(e,t){return a.createElement(C.a,Object(s.a)(Object(s.a)({},e),{},{ref:t,icon:w}))};P.displayName="AuditOutlined";var T=a.forwardRef(P),k={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm376 116c-119.3 0-216 96.7-216 216s96.7 216 216 216 216-96.7 216-216-96.7-216-216-216zm107.5 323.5C750.8 868.2 712.6 884 672 884s-78.8-15.8-107.5-44.5C535.8 810.8 520 772.6 520 732s15.8-78.8 44.5-107.5C593.2 595.8 631.4 580 672 580s78.8 15.8 107.5 44.5C808.2 653.2 824 691.4 824 732s-15.8 78.8-44.5 107.5zM761 656h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8-23.1-31.9a7.92 7.92 0 00-6.5-3.3H573c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.9-5.3.1-12.7-6.4-12.7zM440 852H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"file-done",theme:"outlined"},q=function(e,t){return a.createElement(C.a,Object(s.a)(Object(s.a)({},e),{},{ref:t,icon:k}))};q.displayName="FileDoneOutlined";var E=a.forwardRef(q),S={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"}}]},name:"calendar",theme:"outlined"},z=function(e,t){return a.createElement(C.a,Object(s.a)(Object(s.a)({},e),{},{ref:t,icon:S}))};z.displayName="CalendarOutlined";var I=a.forwardRef(z),R=n(843),H=n(687),F=n(602),B=n(685),V=n(206),N=n(95),L=n(139),M=n(902),D=n(177),A=n(117),G=n(922),U=n(628),_=function(e){var t=Object(c.d)(),n=Object(i.h)(),a=Object(c.e)(L.a.selectPermissionToRead),r=Object(c.e)(M.a.selectPermissionToEdit),l=Object(c.e)(M.a.selectPermissionToDestroy),s=Object(c.e)(G.a.selectLoading),d=n.params.id;return Object(x.jsxs)(U.a,{children:[r&&Object(x.jsx)(x.Fragment,{children:e.record?Object(x.jsxs)(x.Fragment,{children:["commited"===e.record.status?Object(x.jsx)(B.a,{title:Object(o.c)("common.areYouSure"),onConfirm:function(){e.record.status="draft",t(A.a.doUpdate(d,e.record))},okText:Object(o.c)("common.yes"),cancelText:Object(o.c)("common.no"),children:Object(x.jsx)(V.a,{type:"primary",icon:Object(x.jsx)(T,{}),disabled:s,children:Object(o.c)("common.draft")})}):Object(x.jsx)(B.a,{title:Object(o.c)("common.areYouSure"),onConfirm:function(){e.record.status="commited",t(A.a.doUpdate(d,e.record))},okText:Object(o.c)("common.yes"),cancelText:Object(o.c)("common.no"),children:Object(x.jsx)(V.a,{type:"primary",icon:Object(x.jsx)(E,{}),disabled:s,children:Object(o.c)("common.confirm")})}),r&&"commited"===e.record.status&&Object(x.jsx)(N.a,{to:"/planning/".concat(e.record.id,"/daily"),children:Object(x.jsx)(V.a,{type:"primary",icon:Object(x.jsx)(I,{}),children:Object(o.c)("common.daily")})})]}):null}),r&&Object(x.jsx)(N.a,{to:"/planning/".concat(d,"/edit"),children:Object(x.jsx)(V.a,{type:"primary",icon:Object(x.jsx)(R.a,{}),children:Object(o.c)("common.edit")})}),l&&Object(x.jsx)(B.a,{title:Object(o.c)("common.areYouSure"),onConfirm:function(){t(D.a.doDestroy(d))},okText:Object(o.c)("common.yes"),cancelText:Object(o.c)("common.no"),children:Object(x.jsx)(V.a,{type:"primary",icon:Object(x.jsx)(H.a,{}),disabled:s,children:Object(o.c)("common.destroy")})}),a&&Object(x.jsx)(N.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(d)),children:Object(x.jsx)(V.a,{icon:Object(x.jsx)(F.a,{}),children:Object(o.c)("auditLog.menu")})})]})},W=n(617),Q=n(619),Y=n(618);t.default=function(e){var t=Object(c.d)(),n=Object(i.h)(),s=Object(c.e)(l.a.selectLoading),d=Object(c.e)(l.a.selectRecord);return Object(a.useEffect)((function(){t(r.a.doFind(n.params.id))}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(Q.a,{items:[[Object(o.c)("dashboard.menu"),"/"],[Object(o.c)("entities.planning.menu"),"/planning"],[Object(o.c)("entities.planning.view.title")]]}),Object(x.jsxs)(W.a,{children:[Object(x.jsxs)(f.a,{children:[Object(x.jsx)(p.a,{span:8,children:Object(x.jsx)(Y.a,{children:Object(o.c)("entities.planning.view.title")})}),Object(x.jsx)(p.a,{span:16,style:{textAlign:"end"},children:Object(x.jsx)(_,{match:n,record:d})})]}),Object(x.jsx)(y,{loading:s,record:d})]})]})}},617:function(e,t,n){"use strict";var a,c=n(183),i=n(184).a.div(a||(a=Object(c.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));t.a=i},618:function(e,t,n){"use strict";var a,c=n(183),i=n(184).a.h1(a||(a=Object(c.a)(["\n  margin-bottom: 36px;\n"])));t.a=i},619:function(e,t,n){"use strict";var a=n(663),c=(n(1),n(95)),i=n(12);t.a=function(e){var t=function(e){return e.length>1};return Object(i.jsx)(a.a,{children:e.items.map((function(e){return Object(i.jsx)(a.a.Item,{children:t(e)?Object(i.jsx)(c.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},628:function(e,t,n){"use strict";var a,c=n(183),i=n(184).a.div(a||(a=Object(c.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));t.a=i},641:function(e,t,n){"use strict";var a=n(649),c=(n(1),n(12));t.a=function(e){return Object(c.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(c.jsx)(a.a,{})})}},685:function(e,t,n){"use strict";var a=n(13),c=n.n(a),i=n(37),o=n.n(i),r=n(1),l=n(16),s=n.n(l),d=n(276),u=n.n(d),b=n(103),j=n(207),m=n(206),f=n(278),p=n(205),O=n(193),h=n(138),v=n(251),g=n(38),x=void 0,y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},w=r.forwardRef((function(e,t){var n=r.useState(e.visible),a=o()(n,2),i=a[0],l=a[1];r.useEffect((function(){"visible"in e&&l(e.visible)}),[e.visible]),r.useEffect((function(){"defaultVisible"in e&&l(e.defaultVisible)}),[e.defaultVisible]);var d=function(t,n){"visible"in e||l(t),e.onVisibleChange&&e.onVisibleChange(t,n)},u=function(t){d(!1,t),e.onConfirm&&e.onConfirm.call(x,t)},w=function(t){d(!1,t),e.onCancel&&e.onCancel.call(x,t)},C=r.useContext(h.b).getPrefixCls,P=e.prefixCls,T=e.placement,k=e.children,q=e.overlayClassName,E=y(e,["prefixCls","placement","children","overlayClassName"]),S=C("popover",P),z=C("popconfirm",P),I=s()(z,q),R=r.createElement(p.a,{componentName:"Popconfirm",defaultLocale:O.a.Popconfirm},(function(t){return function(t,n){var a=e.okButtonProps,i=e.cancelButtonProps,o=e.title,l=e.cancelText,s=e.okText,d=e.okType,b=e.icon;return r.createElement("div",{className:"".concat(t,"-inner-content")},r.createElement("div",{className:"".concat(t,"-message")},b,r.createElement("div",{className:"".concat(t,"-message-title")},Object(v.a)(o))),r.createElement("div",{className:"".concat(t,"-buttons")},r.createElement(m.a,c()({onClick:w,size:"small"},i),l||n.cancelText),r.createElement(m.a,c()({onClick:u},Object(f.a)(d),{size:"small"},a),s||n.okText)))}(S,t)}));return r.createElement(j.a,c()({},E,{prefixCls:S,placement:T,onVisibleChange:function(t){e.disabled||d(t)},visible:i,overlay:R,overlayClassName:I,ref:t}),Object(g.a)(k,{onKeyDown:function(e){var t,n;r.isValidElement(k)&&(null===(n=null===k||void 0===k?void 0:(t=k.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===b.a.ESC&&i&&d(!1,e)}(e)}}))}));w.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:r.createElement(u.a,null),disabled:!1},t.a=w},687:function(e,t,n){"use strict";var a=n(0),c=n(1),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},o=n(42),r=function(e,t){return c.createElement(o.a,Object(a.a)(Object(a.a)({},e),{},{ref:t,icon:i}))};r.displayName="DeleteOutlined";t.a=c.forwardRef(r)},725:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a,c=n(183),i=n(184).a.div(a||(a=Object(c.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]))),o={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=i},843:function(e,t,n){"use strict";var a=n(0),c=n(1),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},o=n(42),r=function(e,t){return c.createElement(o.a,Object(a.a)(Object(a.a)({},e),{},{ref:t,icon:i}))};r.displayName="EditOutlined";t.a=c.forwardRef(r)},902:function(e,t,n){"use strict";var a=n(5),c=n(40),i=n(77),o=n(185),r=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(o.a.values.planningRead)})),l=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(o.a.values.planningEdit)})),s=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(o.a.values.planningCreate)})),d=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(o.a.values.planningImport)})),u={selectPermissionToRead:r,selectPermissionToEdit:l,selectPermissionToCreate:s,selectPermissionToDestroy:Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(o.a.values.planningDestroy)})),selectPermissionToImport:d};t.a=u},922:function(e,t,n){"use strict";var a=n(5),c={selectLoading:Object(a.a)([function(e){return e.planning.destroy}],(function(e){return Boolean(e.loading)}))};t.a=c},941:function(e,t,n){"use strict";var a=n(5),c=function(e){return e.planning.view},i=Object(a.a)([c],(function(e){return e.record})),o={selectLoading:Object(a.a)([c],(function(e){return Boolean(e.loading)})),selectRecord:i,selectRaw:c};t.a=o}}]);