(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[96],{1041:function(e,t,n){"use strict";var a=n(5),i=function(e){return e.planning.view},c=Object(a.a)([i],(function(e){return e.record})),r={selectLoading:Object(a.a)([i],(function(e){return Boolean(e.loading)})),selectRecord:c,selectRaw:i};t.a=r},1366:function(e,t,n){},1519:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(43),c=n(36),r=n(4),o=n(223),l=n(1041),d=n(0),s=n(2),u=n(3),p=n(22),j=n(650),b=n(832),m=n(833),y=n(1480),f=(n(1366),n(1042)),O=n(746),x=n(137),g=n.n(x),h=(n(1367),n(83)),w=n(12),v=function(e){var t,n=Object(a.useState)({}),i=Object(p.a)(n,2),c=i[0],r=i[1],o=Object(a.useState)({}),l=Object(p.a)(o,2),d=l[0],j=l[1],b=Object(a.useState)(),m=Object(p.a)(b,2),y=m[0],O=m[1],x=window.location.pathname.split("planning/").pop().replace("/daily",""),g=function(){var n=Object(u.a)(Object(s.a)().mark((function n(){return Object(s.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.a.find(x);case 2:t=n.sent,j(t),t.line.map((function(n){n.name===e.data.lineParent&&(n.product.map((function(n,a){t.product.map((function(e){e.id===n.id&&(n.quantityPlanned=e.quantityPlannedTotal)})),n.days.map((function(t,n){e.header.toLowerCase().includes(t.day)&&O(n)})),n.quantityPlanned>0&&n.days.map((function(e){e.priority=a+1}))})),r(n))})),e.onSubmit(t);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();Object(a.useEffect)((function(){g()}),[e]);var v=function(){var t=Object(u.a)(Object(s.a)().mark((function t(n){var a,i,r,o,l,u,p;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n.length>0)){t.next=49;break}if(!Object.values(n[0].data)[0].quantity){t.next=10;break}return r=d,t.next=5,d.line.map((function(e,t){e.name===c.name&&(i=t)}));case 5:return t.next=7,d.line[i].product.map((function(e,t){n[0].key.id===e.id&&(a=t)}));case 7:r.line[i].product[a].days[y].quantity=Object.values(n[0].data)[0].quantity,t.next=48;break;case 10:if(!Object.values(n[0].data)[0].priority){t.next=19;break}return r=d,t.next=14,d.line.map((function(e,t){e.name===c.name&&(i=t)}));case 14:return t.next=16,d.line[i].product.map((function(e,t){n[0].key.id===e.id&&(a=t)}));case 16:r.line[i].product[a].days[y].priority=Object.values(n[0].data)[0].priority,t.next=48;break;case 19:if("priorityChecked"!==Object.keys(Object.values(n[0].data)[0])[0]){t.next=48;break}return r=d,o=0,l=0,t.next=25,d.line.map((function(e,t){e.name===c.name&&(i=t)}));case 25:return t.next=27,d.line[i].product.map((function(e,t){n[0].key.id===e.id&&(a=t),e.days[y].priorityChecked&&o++,null!==e.days[y].priority&&e.days[y].priority>l&&(l=e.days[y].priority)}));case 27:if(!0!==Object.values(n[0].data)[0].priorityChecked){t.next=47;break}if(0!==o){t.next=39;break}if(null!==r.line[i].product[a].days[y].priority){t.next=33;break}r.line[i].product[a].days[y].priority=l+1,t.next=37;break;case 33:return u=r.line[i].product[a].days[y].priority,t.next=36,d.line[i].product.map((function(e){e.days[y].priority===o+1&&(e.days[y].priority=u)}));case 36:r.line[i].product[a].days[y].priority=o+1;case 37:t.next=47;break;case 39:if(null!==r.line[i].product[a].days[y].priority){t.next=43;break}r.line[i].product[a].days[y].priority=l+1,t.next=47;break;case 43:return p=r.line[i].product[a].days[y].priority,t.next=46,d.line[i].product.map((function(e){e.days[y].priority===o+1&&(e.days[y].priority=p)}));case 46:r.line[i].product[a].days[y].priority=o+1;case 47:r.line[i].product[a].days[y].priorityChecked=Object.values(n[0].data)[0].priorityChecked;case 48:e.onSubmit(r);case 49:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(w.jsxs)(f.DataGrid,{dataSource:c.product,showBorders:!0,columnAutoWidth:!0,allowColumnResizing:!0,columnResizingMode:"widget",onCellPrepared:function(e){"Quantity"===e.column.caption&&"data"===e.rowType&&(e.cellElement.style.background="#0aa3a3"),"Priority"===e.column.caption&&"data"===e.rowType&&(e.cellElement.style.background="#0aa3a3")},children:[Object(w.jsx)(f.Selection,{mode:"single"}),Object(w.jsx)(f.Editing,{allowUpdating:!0,allowAdding:!1,allowDeleting:!1,mode:"cell",onChangesChange:function(e){return v(e)}}),Object(w.jsx)(f.ColumnChooser,{enabled:!0,mode:"select"}),Object(w.jsx)(f.Column,{dataField:"familyParent",allowEditing:!1}),Object(w.jsx)(f.Column,{dataField:"id",allowEditing:!1}),Object(w.jsx)(f.Column,{caption:"SB",dataField:"subassembly",dataType:"boolean",allowEditing:!1}),Object(w.jsx)(f.Column,{caption:"FG",dataField:"finishGood",dataType:"boolean",allowEditing:!1}),Object(w.jsx)(f.Column,{caption:"Total Quantity Planned",dataField:"quantityPlanned",allowEditing:!1}),Object(w.jsxs)(f.Column,{caption:"Quantity Planned",allowEditing:!1,children:[Object(w.jsx)(f.Column,{caption:"Current Line",dataField:"quantity",allowEditing:!1,cellRender:function(e){return function(e){var t=0;return e.data.days.map((function(e){t+=e.quantity})),Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{children:t})})}(e)}}),Object(w.jsx)(f.Column,{caption:"Other Lines",dataField:"otherLines",allowEditing:!1,cellRender:function(e){return function(e){var t=0,n=d;return 1===e.data.lineParent.length?t=0:n.line.map((function(n){n.name!==c.name&&e.data.lineParent.includes(n.name)&&n.product.map((function(n){n.days.map((function(a){n.id===e.data.id&&(t+=a.quantity)}))}))})),Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{children:t})})}(e)}})]}),Object(w.jsx)(f.Column,{dataField:"quantityRemained",allowEditing:!1,cellRender:function(e){return function(e){var t=0;return e.data.days.map((function(e){t+=e.quantity})),Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{children:e.data.quantityRequested>=t?e.data.quantityRequested-t:0})})}(e)}}),Object(w.jsx)(f.Column,{caption:"Quantity",dataField:"days[".concat(y,"].quantity"),allowEditing:!0}),Object(w.jsx)(f.Column,{caption:"Priority",dataField:"days[".concat(y,"].priority"),dataType:"number",allowEditing:!0}),Object(w.jsx)(f.Column,{caption:"",dataField:"days[".concat(y,"].priorityChecked"),dataType:"boolean",allowEditing:!0})]})},C=n(82),k=n(880),P=function(e){var t=Object(i.d)(),n=Object(c.h)(),x=Object(i.e)(l.a.selectLoading),P=Object(i.e)(l.a.selectRecord),E=Object(a.useState)(!1),S=Object(p.a)(E,2),Y=S[0],D=S[1],R=Object(a.useState)(""),F=Object(p.a)(R,2),q=F[0],I=F[1],M=Object(a.useState)({}),T=Object(p.a)(M,2),z=T[0],B=T[1],L=Object(a.useState)(1e3),G=Object(p.a)(L,2),A=(G[0],G[1],function(){var e=Object(u.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("newRecord")||null)){e.next=4;break}return e.next=4,h.a.update(P.id,JSON.parse(t));case 4:D(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());Object(a.useEffect)((function(){Y||t(o.a.doFind(n.params.id))}),[!Y]);var J=Object(a.useState)([{familyParent:"",zapParent:"",lineParent:""}]),Q=Object(p.a)(J,2),N=Q[0],W=Q[1],U=function(){var e=Object(u.a)(Object(s.a)().mark((function e(){var t,n,a;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[{familyParent:"",zapParent:"",lineParent:""}],n={familyParent:"",zapParent:"",lineParent:""},e.next=4,C.a.find(P.config.id);case 4:(a=e.sent).family.map((function(e){e.linesId.map((function(i){n={familyParent:e.famId.famTitle,zapParent:"",lineParent:i.lineId.lineTitle},a.zapId.map((function(e){e.linesId.map((function(t){t.lineTitle===i.lineId.lineTitle&&(n.zapParent=e.zapTitle)}))})),t.push(n)}))})),t.shift(),W(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(Object(a.useEffect)((function(){!x&&P&&U()}),[!x&&P]),x||!P)return Object(w.jsx)(j.a,{});function Z(){var e=new Date(null===P||void 0===P?void 0:P.year,0,1+7*((null===P||void 0===P?void 0:P.week)-1)),t=e.getDay(),n=e;return t<=4?n.setDate(e.getDate()-e.getDay()+1):n.setDate(e.getDate()+8-e.getDay()),n}var H=function(e){var t=e.data.lineParent,n=[{priority:0,quantity:0,name:""}];P.line.map((function(a){a.name===t&&a.product.map((function(t){t.days.map((function(a,i){if(e.column.caption.toLowerCase().includes(a.day)&&t.days[i].quantity>0&&null!==t.days[i].priority){var c={priority:t.days[i].priority,quantity:t.days[i].quantity,name:t.id};n.push(c)}}))}))})),n.shift();var a=n.sort((function(e,t){return e.priority-t.priority}));return Object(w.jsx)(w.Fragment,{children:a.map((function(e){return Object(w.jsx)("div",{children:Object(w.jsx)("li",{children:"".concat(e.priority,". ").concat(e.name,": ").concat(e.quantity)})})}))})};return Object(w.jsxs)(O.a,{children:[Object(w.jsxs)(b.a,{gutter:24,children:[Boolean(P.name)&&Object(w.jsx)(m.a,{span:6,children:Object(w.jsx)(y.a.Item,Object(d.a)(Object(d.a)({},O.b),{},{label:Object(r.c)("entities.planning.fields.name"),children:P.name}))}),Boolean(P.year)&&Object(w.jsx)(m.a,{span:6,children:Object(w.jsx)(y.a.Item,Object(d.a)(Object(d.a)({},O.b),{},{label:Object(r.c)("entities.planning.fields.year"),children:P.year}))}),Boolean(P.week)&&Object(w.jsx)(m.a,{span:6,children:Object(w.jsx)(y.a.Item,Object(d.a)(Object(d.a)({},O.b),{},{label:Object(r.c)("entities.planning.fields.week"),children:P.week}))}),Boolean(P.status)&&Object(w.jsx)(m.a,{span:6,children:Object(w.jsx)(y.a.Item,Object(d.a)(Object(d.a)({},O.b),{},{label:Object(r.c)("entities.planning.fields.status"),children:Object(r.c)("entities.planning.enumerators.status.".concat(P.status))}))})]}),Object(w.jsxs)(f.DataGrid,{dataSource:N,allowColumnReordering:!0,columnWidth:"auto",showBorders:!0,width:"100%",columnResizingMode:"widget",showRowLines:!0,onCellClick:function(e){var t;"data"===(t=e).rowType&&"Line"!==t.column.caption&&(I(t.column.caption),B(t.data),D(!0))},onRowPrepared:function(e){0===e.groupIndex?e.rowElement.style.background="#0aa3a3":1===e.groupIndex&&(e.rowElement.style.background="#00383B")},children:[Object(w.jsx)(f.ColumnChooser,{enabled:!0,mode:"select"}),Object(w.jsx)(f.Selection,{mode:"single"}),Object(w.jsx)(f.GroupPanel,{visible:!1}),Object(w.jsx)(f.Grouping,{autoExpandAll:!0,expandMode:"rowClick"}),Object(w.jsx)(f.Column,{caption:"Zap",dataField:"zapParent",allowEditing:!1,groupIndex:0}),Object(w.jsx)(f.Column,{caption:"Family",dataField:"familyParent",allowEditing:!1,groupIndex:1}),Object(w.jsx)(f.Column,{caption:"Line",dataField:"lineParent",allowEditing:!1}),Object(w.jsx)(f.Column,{caption:"Monday: ".concat(g()(Z()).format("DD/MM/YYYY")),allowEditing:!1,cellRender:function(e){return H(e)}}),Object(w.jsx)(f.Column,{caption:"Tuesday: ".concat(g()(Z()).add(1,"days").format("DD/MM/YYYY")),allowEditing:!1,cellRender:function(e){return H(e)}}),Object(w.jsx)(f.Column,{caption:"Wednesday: ".concat(g()(Z()).add(2,"days").format("DD/MM/YYYY")),allowEditing:!1,cellRender:function(e){return H(e)}}),Object(w.jsx)(f.Column,{caption:"Thursday: ".concat(g()(Z()).add(3,"days").format("DD/MM/YYYY")),allowEditing:!1,cellRender:function(e){return H(e)}}),Object(w.jsx)(f.Column,{caption:"Friday: ".concat(g()(Z()).add(4,"days").format("DD/MM/YYYY")),allowEditing:!1,cellRender:function(e){return H(e)}}),Object(w.jsx)(f.Column,{caption:"Saturday: ".concat(g()(Z()).add(5,"days").format("DD/MM/YYYY")),allowEditing:!1,cellRender:function(e){return H(e)}}),Object(w.jsx)(f.Column,{caption:"Sunday: ".concat(g()(Z()).add(6,"days").format("DD/MM/YYYY")),allowEditing:!1,cellRender:function(e){return H(e)}}),Object(w.jsx)(f.Scrolling,{}),Object(w.jsx)(f.Paging,{defaultPageSize:100}),Object(w.jsx)(f.Pager,{visible:!0,allowedPageSizes:!0,displayMode:"full",showPageSizeSelector:!0,showInfo:!0,showNavigationButtons:!0}),Object(w.jsx)(f.Summary,{children:Object(w.jsx)(f.GroupItem,{column:"id",summaryType:"count"})})]}),Object(w.jsx)(k.a,{width:"1200px",title:q,visible:Y,onOk:A,onCancel:function(){D(!1)},children:Object(w.jsx)(v,{data:z,header:q,onSubmit:function(e){localStorage.setItem("newRecord",JSON.stringify(e))}})})]})},E=n(623),S=n(625),Y=n(624);t.default=function(e){var t=Object(i.d)(),n=Object(c.h)(),d=Object(i.e)(l.a.selectLoading),s=Object(i.e)(l.a.selectRecord);return Object(a.useEffect)((function(){t(o.a.doFind(n.params.id))}),[]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(S.a,{items:[[Object(r.c)("dashboard.menu"),"/"],[Object(r.c)("entities.planning.menu"),"/planning"],[Object(r.c)("entities.planning.daily")]]}),Object(w.jsxs)(E.a,{children:[Object(w.jsxs)(b.a,{children:[Object(w.jsx)(m.a,{span:16,children:Object(w.jsx)(Y.a,{children:Object(r.c)("entities.planning.daily")})}),Object(w.jsx)(m.a,{span:8,style:{textAlign:"end"}})]}),Object(w.jsx)(P,{loading:d,record:s})]})]})}},623:function(e,t,n){"use strict";var a,i=n(183),c=n(184).a.div(a||(a=Object(i.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));t.a=c},624:function(e,t,n){"use strict";var a,i=n(183),c=n(184).a.h1(a||(a=Object(i.a)(["\n  margin-bottom: 36px;\n"])));t.a=c},625:function(e,t,n){"use strict";var a=n(674),i=(n(1),n(95)),c=n(12);t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)(a.a,{children:e.items.map((function(e){return Object(c.jsx)(a.a.Item,{children:t(e)?Object(c.jsx)(i.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},650:function(e,t,n){"use strict";var a=n(651),i=(n(1),n(12));t.a=function(e){return Object(i.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(i.jsx)(a.a,{})})}},746:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var a,i=n(183),c=n(184).a.div(a||(a=Object(i.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]))),r={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=c}}]);