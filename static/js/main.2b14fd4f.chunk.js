(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),s=a.n(i),l=(a(14),a(1)),c=a(2),m=a(4),o=a(3),u=a(5),d=(a(15),function(e){var t=e.items,a=e.deletItem,n=t.length?t.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("span",{className:"name"},e.name),r.a.createElement("span",{className:"age"},e.age),r.a.createElement("span",{className:"sub icon",onClick:function(){return a(e.id)}},"\xd7"))})):r.a.createElement("p",null,"There is no items to show");return r.a.createElement("div",{className:"listitems"},r.a.createElement("div",null,r.a.createElement("span",{className:"name title"},"Name"),r.a.createElement("span",{className:"age title"},"Age"),r.a.createElement("span",{className:"sub title"},"Action")),n)}),h=a(8),p=(a(16),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",age:""},a.ChangeHandler=function(e){a.setState(Object(h.a)({},e.target.id,e.target.value))},a.submitHandler=function(e){if(e.preventDefault(),""===e.target.name.value)return!1;a.props.addItem(a.state),a.setState({name:"",age:""})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.submitHandler},r.a.createElement("input",{className:"name",type:"text",placeholder:"Enter your name",id:"name",onChange:this.ChangeHandler,value:this.state.name}),r.a.createElement("input",{className:"age",type:"number",placeholder:"Enter your age",id:"age",onChange:this.ChangeHandler,value:this.state.age}),r.a.createElement("input",{className:"sub",type:"submit",value:"ADD"})))}}]),t}(n.Component)),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={items:[{id:1,name:"Mahmoud",age:34},{id:2,name:"Ahmed",age:36},{id:3,name:"Omar",age:22}]},a.deletItem=function(e){var t=a.state.items.filter((function(t){return t.id!==e}));a.setState({items:t})},a.addItem=function(e){e.id=Math.random();var t=a.state.items;t.push(e),a.setState({items:t})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App container"},r.a.createElement("h1",null,"Todo List App"),r.a.createElement(d,{items:this.state.items,deletItem:this.deletItem}),r.a.createElement(p,{addItem:this.addItem}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.2b14fd4f.chunk.js.map