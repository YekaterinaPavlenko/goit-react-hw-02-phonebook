(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__31lhA",input:"ContactForm_input__BM6tV",button:"ContactForm_button__MUZ4T"}},,,,,,,function(t,e,n){t.exports={item:"ContactItem_item__2OnUx",btn_delete:"ContactItem_btn_delete__bNLOi"}},function(t,e,n){t.exports={box:"Filter_box__3fOAW",input:"Filter_input__2nqDG"}},,,function(t,e,n){t.exports={list:"ContactList_list__3lJhu"}},,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(11),o=n.n(c),i=(n(19),n(14)),s=n(3),u=n(4),l=n(6),b=n(5),m=(n(20),n(12)),d=n(7),h=n(2),j=n.n(h),p=n(24),f=n(0),O=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(d.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(Object(m.a)({id:Object(p.a)()},t.state)),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(f.jsxs)("form",{onSubmit:this.handleSubmit,className:j.a.form,children:[Object(f.jsxs)("label",{className:j.a.label,children:["Name",Object(f.jsx)("input",{type:"text",className:j.a.input,pattern:"^[\u0410-\u042f\u0430-\u044f\u0401\u0451-0-9\\s_]+$|^[a-zA-Z-0-9\\s_]+$",required:!0,placeholder:"Enter name",name:"name",onChange:this.handleChange,value:e})]}),Object(f.jsxs)("label",{className:j.a.label,children:["Number",Object(f.jsx)("input",{type:"phone",className:j.a.input,pattern:"^[\\+?\\0-9\\-_]+$",required:!0,placeholder:"Enter phone number",name:"number",onChange:this.handleChange,value:n})]}),Object(f.jsx)("button",{type:"submit",className:j.a.button,children:"Add contact"})]})}}]),n}(a.Component),v=n(13),x=n.n(v),C=n(9),_=n.n(C),g=function(t){var e=t.contacts,n=t.deleteContact;return e.map((function(t){var e=t.name,a=t.number,r=t.id;return Object(f.jsxs)("li",{className:_.a.item,children:[Object(f.jsxs)("p",{children:[e,":"]}),Object(f.jsx)("p",{children:a}),Object(f.jsx)("button",{type:"button",className:_.a.btn_delete,onClick:function(){return n(r)},children:"Delete"})]},r)}))};g.defaultProps={name:"",number:"",id:""};var y=g,N=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.contacts;return Object(f.jsx)("ul",{className:x.a.list,children:Object(f.jsx)(y,{contacts:t,deleteContact:this.props.deleteContact})})}}]),n}(a.Component),S=n(10),w=n.n(S),k=function(t){var e=t.value,n=t.changeFilter;return Object(f.jsx)("div",{className:w.a.box,children:Object(f.jsx)("label",{children:Object(f.jsx)("input",{type:"text",className:w.a.input,placeholder:"Enter name",name:"filter",onChange:n,value:e})})})},F=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"+38-097-459-12-56"},{id:"id-2",name:"Hermione Kline",number:"+38-066-443-89-12"},{id:"id-3",name:"Eden Clements",number:"+38-067-645-17-79"},{id:"id-4",name:"Annie Copeland",number:"+38-099-227-91-26"}],filter:""},t.formSubmitHandler=function(e){var n=t.state.contacts,a=n.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()})),r=n.find((function(t){return t.number.toLowerCase()===e.number.toLowerCase()}));a||r?alert("The ".concat(a?"name":r&&"number"," is already in contacts.")):t.setState((function(t){return{contacts:[e].concat(Object(i.a)(t.contacts))}}))},t.addFilterValue=function(e){e.preventDefault(),t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t.deleteContact=function(e){var n=t.state.contacts;t.setState({contacts:n.filter((function(t){return t.id!==e}))})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(O,{onSubmit:this.formSubmitHandler}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(k,{value:t,changeFilter:this.addFilterValue}),Object(f.jsx)(N,{contacts:e,deleteContact:this.deleteContact})]})}}]),n}(a.Component);o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(F,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.f264dbe4.chunk.js.map