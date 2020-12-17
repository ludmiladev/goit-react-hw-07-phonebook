(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{22:function(t,e,n){t.exports={button:"ContactsItem_button__2B5q7",item:"ContactsItem_item__2AuNI"}},23:function(t,e,n){t.exports={container:"Filter_container__3pfnL",input:"Filter_input__3KmoL"}},35:function(t,e,n){t.exports={enter:"list_enter__276dF",enterActive:"list_enterActive__Ee24G",exit:"list_exit__248VK",exitActive:"list_exitActive__2M3AT"}},36:function(t,e,n){t.exports={list:"ContactList_list__1m40e"}},37:function(t,e,n){t.exports={button:"ContactForm_button__3CAME"}},38:function(t,e,n){t.exports={enter:"pop_enter__2ood5",enterActive:"pop_enterActive__39isj",exit:"pop_exit__3edSZ",exitActive:"pop_exitActive__3KZjM"}},39:function(t,e,n){t.exports={container:"App_container__2cUhZ"}},43:function(t,e,n){t.exports=n(71)},70:function(t,e,n){},71:function(t,e,n){"use strict";n.r(e);var a,c=n(0),o=n.n(c),r=n(8),u=n.n(r),i=n(14),l=n(15),s=n(17),m=n(16),f=n(5),b=n(73),p=n(72),_=n(35),O=n.n(_),d=n(36),h=n.n(d),C=n(22),E=n.n(C),T=function(t){var e=t.name,n=t.number,a=t.id,c=t.deleteContact;return o.a.createElement("li",{className:E.a.item},o.a.createElement("p",null,o.a.createElement("span",null," ",e," ",n),o.a.createElement("button",{type:"button",onClick:function(){return c(a)},className:E.a.button},"Delete")))},j=n(18),v=n.n(j),A=n(1),S="FILTER_CONTACT",N="GET_CONTACTS_START",x="GET_CONTACTS_SUCCES",y="GET_CONTACTS_ERROR",g="POST_CONTACT_START",R="POST_CONTACT_SUCCESS",L="POST_CONTACT_ERROR",k="DELETE_CONTACT_START",w="DELETE_CONTACT_SUCESS",D="DELETE_CONTACT_ERROR",F=Object(A.a)(S),I=Object(A.a)(N),M=Object(A.a)(x),G=Object(A.a)(y),P=Object(A.a)(g),U=Object(A.a)(R),K=Object(A.a)(L),Z=Object(A.a)(k),B=Object(A.a)(w),J=Object(A.a)(D),q=function(t){return function(e){e(P()),e(function(t){return function(e){v.a.post("http://localhost:4000/contacts",t).then((function(t){var n=t.data;return e(U(n))})).catch((function(t){return e(K(t))}))}}(t))}},V=function(t){return function(e){e(Z()),e(function(t){return function(e){v.a.delete("http://localhost:4000/contacts/".concat(t)).then((function(){return e(B(t))})).catch((function(t){return e(J(t))}))}}(t))}},W=Object(f.b)(null,(function(t){return{deleteContact:function(e){return t(V(e))}}}))(T),z=function(t){var e=t.contacts,n=t.filter,a=n?function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}(e,n):e;return o.a.createElement(b.a,{component:"ul",className:h.a.list},a.map((function(t){var e=t.name,n=t.number,a=t.id;return o.a.createElement(p.a,{timeout:250,unmountOnExit:!0,key:a,classNames:O.a},o.a.createElement(W,{name:e,number:n,id:a}))})))},H=function(t){return t.contacts},Q=function(t){return t.filter},X=Object(f.b)((function(t){return{contacts:H(t),filter:Q(t)}}))(z),Y=n(7),$=n(11),tt=n(37),et=n.n(tt),nt={name:"",number:""},at=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contactToAdd:Object($.a)({},nt)},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState((function(t){var e=t.contactToAdd;return{contactToAdd:Object($.a)(Object($.a)({},e),{},Object(Y.a)({},a,c))}}))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.contactToAdd,a=n.name,c=n.number;a&&c&&(t.props.contacts.some((function(t){return t.name.toLowerCase()===a.toLowerCase()}))?alert("".concat(a," is already in contact")):(t.props.postContact(Object($.a)({},t.state.contactToAdd)),t.reset()))},t.reset=function(){t.setState({contactToAdd:Object($.a)({},nt)})},t}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",name:"name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",onChange:this.handleChange,value:this.state.contactToAdd.name}),o.a.createElement("input",{type:"text",name:"number",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440",onChange:this.handleChange,value:this.state.contactToAdd.number}),o.a.createElement("button",{type:"submit",className:et.a.button},"Add contact"))}}]),n}(c.Component),ct=Object(f.b)((function(t){return{contacts:H(t)}}),(function(t){return{postContact:function(e){return t(q(e))}}}))(at),ot=n(38),rt=n.n(ot),ut=n(23),it=n.n(ut),lt=function(t){var e=t.contacts,n=t.filter,a=t.handleFilter;return o.a.createElement(p.a,{classNames:rt.a,timeout:250,unmountOnExit:!0,in:e.length>1},o.a.createElement("div",{className:it.a.container},o.a.createElement("p",null,"\u041f\u043e\u0438\u0441\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430 \u043f\u043e \u0438\u043c\u0435\u043d\u0438"),o.a.createElement("input",{className:it.a.input,placeholder:"\u041f\u043e\u0438\u0441\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430 \u043f\u043e \u0438\u043c\u0435\u043d\u0438...",value:n,onChange:function(t){return a(t.target.value)}})))},st=Object(f.b)((function(t){return{contacts:H(t),filter:Q(t)}}),(function(t){return{handleFilter:function(e){return t(F(e))}}}))(lt),mt=n(39),ft=n.n(mt),bt=(n(70),function(){return o.a.createElement(p.a,{in:!0,timeout:600,classNames:"Logo",appear:!0},o.a.createElement("h1",null,"Phonebook"))}),pt=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return o.a.createElement("div",{className:ft.a.container},o.a.createElement(bt,null),o.a.createElement(ct,null),o.a.createElement("h2",null,"Contacts"),o.a.createElement(st,null),o.a.createElement(X,null))}}]),n}(c.Component),_t={fetchContacts:function(){return function(t){t(I()),t((function(t){v.a.get("http://localhost:4000/contacts").then((function(e){var n=e.data;return t(M(n))})).catch((function(e){return t(G(e))}))}))}}},Ot=Object(f.b)(null,_t)(pt),dt=n(6),ht=n(41),Ct=Object(A.b)([],(a={},Object(Y.a)(a,x,(function(t,e){return e.payload})),Object(Y.a)(a,R,(function(t,e){var n=e.payload;return[].concat(Object(ht.a)(t),[n])})),Object(Y.a)(a,w,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),Et=Object(A.b)("",Object(Y.a)({},S,(function(t,e){return e.payload}))),Tt=Object(dt.combineReducers)({contacts:Ct,filter:Et}),jt=n(40),vt=n(12),At=Object(dt.applyMiddleware)(vt.a),St=Object(dt.createStore)(Tt,Object(jt.composeWithDevTools)(At));u.a.render(o.a.createElement(f.a,{store:St},o.a.createElement(Ot,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.2d5a38a9.chunk.js.map