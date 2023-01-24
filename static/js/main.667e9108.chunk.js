(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s,a=c(5),n=c.n(a),l=c(2),i=c(1),r=(c(10),c(11),c(4)),o=c.n(r),d=c(0),j=function(e){var t=e.todos,c=e.selectedTodoId,s=e.onTodoSelect;return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed;return Object(d.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(d.jsx)("td",{className:"is-vcentered",children:t}),Object(d.jsx)("td",{className:"is-vcentered",children:n&&Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:o()({"has-text-success":n,"has-text-danger":!n}),children:a})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(t)},children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:o()("far",{"fa-eye":t!==c},{"fa-eye-slash":t===c})})})})})]},t)}))})]})};!function(e){e.NONE="all",e.ACTIVE="active",e.COMPLETED="completed"}(s||(s={}));var u=Object(i.memo)((function(e){var t=e.selectedFilter,c=e.titleFilter,a=e.onSelectedFilterChange,n=e.onTitleFilterChange,i=Object.entries(s);return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsx)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){a(e.target.value)},children:i.map((function(e){var t=Object(l.a)(e,2),c=t[0],s=t[1],a=s[0].toUpperCase()+s.slice(1);return Object(d.jsx)("option",{value:s,children:a},c)}))})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){return n(e.target.value)}}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),c&&Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(d.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return n("")}})})]})]})}));function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(13);var h=function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})},O=function(e){var t=e.todo,c=e.onClose,s=Object(i.useState)(null),a=Object(l.a)(s,2),n=a[0],r=a[1];return Object(i.useEffect)((function(){var e;t&&(e=t.userId,b("/users/".concat(e))).then((function(e){r(e)}))}),[]),Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),n?Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(d.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(d.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(d.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]}):Object(d.jsx)(h,{})]})},m=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(!1),r=Object(l.a)(n,2),o=r[0],m=r[1],x=Object(i.useState)(0),f=Object(l.a)(x,2),N=f[0],v=f[1],p=Object(i.useState)(s.NONE),y=Object(l.a)(p,2),g=y[0],C=y[1],T=Object(i.useState)(""),E=Object(l.a)(T,2),S=E[0],k=E[1];Object(i.useEffect)((function(){m(!0),b("/todos").then((function(e){return a(e)})).finally((function(){m(!1)}))}),[]);var w=Object(i.useMemo)((function(){return c.find((function(e){return e.id===N}))||null}),[N]),F=Object(i.useMemo)((function(){return function(e,t,c){return e.filter((function(e){var a=e.title.toLowerCase(),n=!t||a.includes(t.toLowerCase());switch(c){case s.ACTIVE:return!e.completed&&n;case s.COMPLETED:return e.completed&&n;case s.NONE:default:return n}}))}(c,S,g)}),[g,S,c]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(u,{onSelectedFilterChange:function(e){return C(e)},selectedFilter:g,onTitleFilterChange:function(e){return k(e)},titleFilter:S})}),Object(d.jsxs)("div",{className:"block",children:[o&&Object(d.jsx)(h,{}),c.length>0&&Object(d.jsx)(j,{todos:F,onTodoSelect:function(e){return v(e)},selectedTodoId:N})]})]})})}),N&&Object(d.jsx)(O,{todo:w,onClose:function(){return v(0)}})]})};n.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.667e9108.chunk.js.map