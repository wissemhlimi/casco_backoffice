(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[95],{1186:function(e,t,n){},1278:function(e,t,n){"use strict";n.r(t);var a=n(11),i=n(2),c=n.n(i),r=n(45),o=n(37),d=n(3),l=n(230),s=n(924),u=n(0),j=n(199),b=n(649),p=n(805),O=n(806),f=n(1238),g=(n(1186),n(925)),m=n(724),x=n(1),h=n.n(x),y=n(4),w=n(89),v=n(111),P=n.n(v),Y=function(e){var t;console.log("data",e.data.data);var n=Object(i.useState)([]),r=Object(j.a)(n,2),o=r[0],d=r[1],l=window.location.pathname.split("planning/").pop().replace("/daily",""),s=function(){var e=Object(y.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.find(l);case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function u(){var e=new Date(null===o||void 0===o?void 0:o.year,0,1+7*((null===o||void 0===o?void 0:o.week)-1)),t=e.getDay(),n=e;return t<=4?n.setDate(e.getDate()-e.getDay()+1):n.setDate(e.getDate()+8-e.getDay()),n}return Object(i.useEffect)((function(){s()}),[]),Object(a.jsx)(c.a.Fragment,{children:Object(a.jsxs)(g.DataGrid,{dataSource:e.data.data.lineParent,showBorders:!0,columnAutoWidth:!0,allowColumnResizing:!0,columnResizingMode:"widget",children:[Object(a.jsx)(g.Selection,{mode:"single"}),Object(a.jsx)(g.ColumnChooser,{enabled:!0,mode:"select"}),Object(a.jsx)(g.Column,{dataField:"lineParent",allowEditing:!1,cellRender:function(e){return Object(a.jsx)("div",{style:{paddingLeft:5,paddingRight:5},children:e.data})}}),Object(a.jsx)(g.Column,{caption:"Quantity Requested",dataField:e.data.data.quantityRequested,allowEditing:!1,cellRender:function(t){return Object(a.jsx)("div",{style:{color:e.data.data.lineParent.length>1?"#317aff":"",paddingLeft:5,paddingRight:5},children:e.data.data.quantityRequested})}}),Object(a.jsx)(g.Column,{caption:"Monday: ".concat(P()(u()).format("DD/MM/YYYY")),allowEditing:!1}),Object(a.jsx)(g.Column,{caption:"Tuesday: ".concat(P()(u()).add(1,"days").format("DD/MM/YYYY")),allowEditing:!1}),Object(a.jsx)(g.Column,{caption:"Wednesday: ".concat(P()(u()).add(2,"days").format("DD/MM/YYYY")),allowEditing:!1}),Object(a.jsx)(g.Column,{caption:"Thursday: ".concat(P()(u()).add(3,"days").format("DD/MM/YYYY")),allowEditing:!1}),Object(a.jsx)(g.Column,{caption:"Friday: ".concat(P()(u()).add(4,"days").format("DD/MM/YYYY")),allowEditing:!1}),Object(a.jsx)(g.Column,{caption:"Saturday: ".concat(P()(u()).add(5,"days").format("DD/MM/YYYY")),allowEditing:!1}),Object(a.jsx)(g.Column,{caption:"Sunday: ".concat(P()(u()).add(6,"days").format("DD/MM/YYYY")),allowEditing:!1})]})})},D=function(e){var t=e.record,n=e.loading,c=Object(i.useState)([{id:"",familyParent:"",zapParent:[""],lineParent:[""],quantityRequested:0}]),r=Object(j.a)(c,2),o=r[0],l=r[1];if(Object(i.useEffect)((function(){!n&&t&&function(){var e=[{_id:"",id:"",familyParent:"",zapParent:[""],lineParent:[""],quantityRequested:0}],n={_id:"",id:"",familyParent:"",zapParent:[""],lineParent:[""],quantityRequested:0};t.product.map((function(t){n={_id:t._id,id:t.id,familyParent:t.familyParent,zapParent:t.zapParent,lineParent:t.lineParent,quantityRequested:t.quantityRequested},e.push(n)})),e.shift(),l(e)}()}),[!n&&t]),n||!t)return Object(a.jsx)(b.a,{});return Object(a.jsxs)(m.a,{children:[Object(a.jsxs)(p.a,{gutter:24,children:[Boolean(t.name)&&Object(a.jsx)(O.a,{span:6,children:Object(a.jsx)(f.a.Item,Object(u.a)(Object(u.a)({},m.b),{},{label:Object(d.c)("entities.planning.fields.name"),children:t.name}))}),Boolean(t.year)&&Object(a.jsx)(O.a,{span:6,children:Object(a.jsx)(f.a.Item,Object(u.a)(Object(u.a)({},m.b),{},{label:Object(d.c)("entities.planning.fields.year"),children:t.year}))}),Boolean(t.week)&&Object(a.jsx)(O.a,{span:6,children:Object(a.jsx)(f.a.Item,Object(u.a)(Object(u.a)({},m.b),{},{label:Object(d.c)("entities.planning.fields.week"),children:t.week}))}),Boolean(t.status)&&Object(a.jsx)(O.a,{span:6,children:Object(a.jsx)(f.a.Item,Object(u.a)(Object(u.a)({},m.b),{},{label:Object(d.c)("entities.planning.fields.status"),children:Object(d.c)("entities.planning.enumerators.status.".concat(t.status))}))})]}),Object(a.jsxs)(g.DataGrid,{dataSource:o,allowColumnReordering:!0,columnWidth:"auto",showBorders:!0,width:"100%",onRowPrepared:function(e){0===e.groupIndex?e.rowElement.style.background="#0aa3a3":1===e.groupIndex&&(e.rowElement.style.background="#00383B")},children:[Object(a.jsx)(g.Selection,{mode:"multiple"}),Object(a.jsx)(g.GroupPanel,{visible:!1}),Object(a.jsx)(g.Grouping,{autoExpandAll:!1,expandMode:"rowClick"}),Object(a.jsx)(g.Column,{caption:"Zap",dataField:"zapParent",allowEditing:!1,groupIndex:0}),Object(a.jsx)(g.Column,{caption:"Family",dataField:"familyParent",allowEditing:!1,groupIndex:1}),Object(a.jsx)(g.Column,{caption:"Product",dataField:"id",allowEditing:!1,cellRender:function(e){return Object(a.jsx)("div",{style:{color:e.data.lineParent.length>1?"#317aff":"",paddingLeft:5,paddingRight:5},children:e.value})}}),Object(a.jsx)(g.MasterDetail,{enabled:!0,component:Y}),Object(a.jsx)(g.Scrolling,{columnRenderingMode:"virtual"}),Object(a.jsx)(g.Paging,{defaultPageSize:100}),Object(a.jsx)(g.Pager,{visible:!0,allowedPageSizes:!0,displayMode:"full",showPageSizeSelector:!0,showInfo:!0,showNavigationButtons:!0}),Object(a.jsx)(g.Summary,{children:Object(a.jsx)(g.GroupItem,{column:"id",summaryType:"count"})})]})]})},R=n(626),C=n(628),M=n(627);t.default=function(e){var t=Object(r.d)(),n=Object(o.h)(),c=Object(r.e)(s.a.selectLoading),u=Object(r.e)(s.a.selectRecord);return Object(i.useEffect)((function(){t(l.a.doFind(n.params.id))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(C.a,{items:[[Object(d.c)("dashboard.menu"),"/"],[Object(d.c)("entities.planning.menu"),"/planning"],[Object(d.c)("entities.planning.daily")]]}),Object(a.jsxs)(R.a,{children:[Object(a.jsxs)(p.a,{children:[Object(a.jsx)(O.a,{span:16,children:Object(a.jsx)(M.a,{children:Object(d.c)("entities.planning.daily")})}),Object(a.jsx)(O.a,{span:8,style:{textAlign:"end"}})]}),Object(a.jsx)(D,{loading:c,record:u})]})]})}},626:function(e,t,n){"use strict";var a=n(184);function i(){var e=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return i=function(){return e},e}var c=n(185).a.div(i());t.a=c},627:function(e,t,n){"use strict";var a=n(184);function i(){var e=Object(a.a)(["\n  margin-bottom: 36px;\n"]);return i=function(){return e},e}var c=n(185).a.h1(i());t.a=c},628:function(e,t,n){"use strict";var a=n(11),i=n(667),c=(n(2),n(99));t.a=function(e){var t=function(e){return e.length>1};return Object(a.jsx)(i.a,{children:e.items.map((function(e){return Object(a.jsx)(i.a.Item,{children:t(e)?Object(a.jsx)(c.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},649:function(e,t,n){"use strict";var a=n(11),i=n(656);n(2);t.a=function(e){return Object(a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(a.jsx)(i.a,{})})}},724:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var a=n(184);function i(){var e=Object(a.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return i=function(){return e},e}var c=n(185).a.div(i()),r={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=c},924:function(e,t,n){"use strict";var a=n(5),i=function(e){return e.planning.view},c=Object(a.a)([i],(function(e){return e.record})),r={selectLoading:Object(a.a)([i],(function(e){return Boolean(e.loading)})),selectRecord:c,selectRaw:i};t.a=r}}]);