(this.webpackJsonpemployees=this.webpackJsonpemployees||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(9),c=n.n(s),i=n(2),l=n(7),o=n(10),u=n(3),d=n(4),j=n(6),b=n(5),m=(n(16),n(0)),f=function(e){var t=e.employees,n=e.increased;return Object(m.jsxs)("div",{className:"app-info",children:[Object(m.jsx)("h1",{children:"\u0423\u0447\u0435\u0442 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432 \u0432 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 N"}),Object(m.jsxs)("h2",{children:["\u041e\u0431\u0449\u0435\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432: ",t]}),Object(m.jsxs)("h2",{children:["\u041f\u0440\u0435\u043c\u0438\u044e \u043f\u043e\u043b\u0443\u0447\u0430\u0442: ",n]})]})},h=(n(18),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).onUpdateSearch=function(e){var t=e.target.value;a.setState({term:t}),a.props.onUpdateSearch(t)},a.state={term:""},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsx)("input",{type:"text",className:"form-control search-input",placeholder:"\u041d\u0430\u0439\u0442\u0438 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430",value:this.state.term,onChange:this.onUpdateSearch})}}]),n}(a.Component)),p=(n(19),function(e){var t=[{name:"all",label:"\u0412\u0441\u0435 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438"},{name:"rise",label:"\u041d\u0430 \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u0435"},{name:"moreThen1000",label:"\u0417/\u041f \u0431\u043e\u043b\u044c\u0448\u0435 1000$"}].map((function(t){var n=t.name,a=t.label,r=e.filter===n?"btn-light":"btn-outline-light";return Object(m.jsx)("button",{type:"button",className:"btn ".concat(r),onClick:function(){return e.onFilterSelect(n)},children:a},n)}));return Object(m.jsx)("div",{className:"btn-group",children:t})}),O=n(11),g=(n(20),function(e){var t=e.name,n=e.salary,a=e.onDelete,r=e.onToggleProp,s="list-group-item d-flex justify-content-between";return e.increase&&(s+=" increase"),e.rise&&(s+=" like"),Object(m.jsxs)("li",{className:s,children:[Object(m.jsx)("span",{className:"list-group-item-label",onClick:r,"data-toggle":"rise",children:t}),Object(m.jsx)("input",{type:"text",className:"list-group-item-input",defaultValue:n+"$"}),Object(m.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(m.jsx)("button",{type:"button",className:"btn-cookie btn-sm ",onClick:r,"data-toggle":"increase",children:Object(m.jsx)("i",{className:"fas fa-cookie"})}),Object(m.jsx)("button",{type:"button",className:"btn-trash btn-sm ",onClick:a,children:Object(m.jsx)("i",{className:"fas fa-trash"})}),Object(m.jsx)("i",{className:"fas fa-star"})]})]})}),x=(n(21),["id"]),v=function(e){var t=e.data,n=e.onDelete,a=e.onToggleProp,r=t.map((function(e){var t=e.id,r=Object(O.a)(e,x);return Object(m.jsx)(g,Object(l.a)(Object(l.a)({},r),{},{onDelete:function(){return n(t)},onToggleProp:function(e){return a(t,e.currentTarget.getAttribute("data-toggle"))}}),t)}));return Object(m.jsx)("ul",{className:"app-list list-group",children:r})},y=(n(22),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).onValueChange=function(e){a.setState(Object(i.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault(),/[A-Za-z]{3,}/g.test(a.state.name)&&/[0-9]{3,}/.test(a.state.salary)?(a.props.onAdd(a.state.name,a.state.salary),a.setState({name:"",salary:""})):alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e")},a.state={name:"",salary:""},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.salary;return Object(m.jsxs)("div",{className:"app-add-form",children:[Object(m.jsx)("h3",{children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430"}),Object(m.jsxs)("form",{className:"add-form d-flex",onSubmit:this.onSubmit,children:[Object(m.jsx)("input",{type:"text",className:"form-control new-post-label",placeholder:"\u041a\u0430\u043a \u0435\u0433\u043e \u0437\u043e\u0432\u0443\u0442?",name:"name",value:t,onChange:this.onValueChange}),Object(m.jsx)("input",{type:"number",className:"form-control new-post-label",placeholder:"\u0417/\u041f \u0432 $?",name:"salary",value:n,onChange:this.onValueChange}),Object(m.jsx)("button",{type:"submit",className:"btn btn-outline-light",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})}}]),n}(a.Component)),N=(n(23),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).deleteItem=function(e){a.setState((function(t){return{data:t.data.filter((function(t){return t.id!==e}))}}))},a.addItem=function(e,t){var n={name:e,salary:t,increase:!1,rise:!1,id:a.maxId++};a.setState((function(e){var t=e.data;return{data:[].concat(Object(o.a)(t),[n])}}))},a.onToggleProp=function(e,t){a.setState((function(n){return{data:n.data.map((function(n){return n.id===e?Object(l.a)(Object(l.a)({},n),{},Object(i.a)({},t,!n[t])):n}))}}))},a.searchEmp=function(e,t){return 0===t.length?e:e.filter((function(e){return e.name.indexOf(t)>-1}))},a.onUpdateSearch=function(e){a.setState({term:e})},a.filterPost=function(e,t){switch(t){case"rise":return e.filter((function(e){return e.rise}));case"moreThen1000":return e.filter((function(e){return e.salary>1e3}));default:return e}},a.onFilterSelect=function(e){a.setState({filter:e})},a.state={data:[{name:"John C.",salary:800,increase:!1,rise:!0,id:1},{name:"Alex M.",salary:3e3,increase:!0,rise:!1,id:2},{name:"Carl W.",salary:5e3,increase:!1,rise:!1,id:3}],term:"",filter:"all"},a.maxId=4,a}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.data,n=e.term,a=e.filter,r=this.state.data.length,s=this.state.data.filter((function(e){return e.increase})).length,c=this.filterPost(this.searchEmp(t,n),a);return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(f,{employees:r,increased:s}),Object(m.jsxs)("div",{className:"search-panel",children:[Object(m.jsx)(h,{onUpdateSearch:this.onUpdateSearch}),Object(m.jsx)(p,{filter:a,onFilterSelect:this.onFilterSelect})]}),Object(m.jsx)(v,{data:c,onDelete:this.deleteItem,onToggleProp:this.onToggleProp}),Object(m.jsx)(y,{onAdd:this.addItem})]})}}]),n}(a.Component));n(24);c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.07233e75.chunk.js.map