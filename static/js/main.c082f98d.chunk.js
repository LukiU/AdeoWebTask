(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(9),r=a.n(i),c=a(2),u=a(3),o=a(5),s=a(4),m=a(6),d=(a(16),a(17),a(18),a(19),a(7),a(20),a(21),a(1)),E=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(s.a)(t).call(this))).state={showMenu:!1},e.state={showSecondary:!1},e.showMenu=e.showMenu.bind(Object(d.a)(Object(d.a)(e))),e.closeMenu=e.closeMenu.bind(Object(d.a)(Object(d.a)(e))),e.showSecondary=e.showSecondary.bind(Object(d.a)(Object(d.a)(e))),e.closeSecondary=e.closeSecondary.bind(Object(d.a)(Object(d.a)(e))),e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"showMenu",value:function(e){var t=this;e.preventDefault(),this.setState({showMenu:!0},function(){document.addEventListener("click",t.closeMenu)})}},{key:"closeMenu",value:function(e){var t=this;this.dropdownMenu.contains(e.target)||this.setState({showMenu:!1},function(){document.removeEventListener("click",t.closeMenu)})}},{key:"showSecondary",value:function(e){var t=this;e.preventDefault(),this.setState({showSecondary:!0},function(){document.addEventListener("click",t.closeSecondary)})}},{key:"closeSecondary",value:function(e){var t=this;this.dropdownMenu2.contains(e.target)||this.setState({showSecondary:!1},function(){document.removeEventListener("click",t.closeSecondary)})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("button",{className:"dropdown",onClick:this.showMenu},l.a.createElement("div",{id:"bar"}),l.a.createElement("div",{id:"bar"}),l.a.createElement("div",{id:"bar"})),this.state.showMenu?l.a.createElement("div",{className:"dropdownMenu",ref:function(t){e.dropdownMenu=t}},l.a.createElement("li",null,l.a.createElement("a",{href:""},"HOME")),l.a.createElement("li",null,l.a.createElement("a",{href:""},"SERVICE")),l.a.createElement("li",null,l.a.createElement("a",{href:"",className:"dropdownHeader",onClick:this.showSecondary},"WORKS")),this.state.showSecondary?l.a.createElement("div",{className:"dropdownMenuHeader",ref:function(t){e.dropdownMenu2=t}},l.a.createElement("div",{className:"rect"}),l.a.createElement("li",{id:"drop"},l.a.createElement("a",{href:""},"ALL")),l.a.createElement("li",{id:"drop"},l.a.createElement("a",{href:""},"GRAPHIC")),l.a.createElement("li",{id:"drop"},l.a.createElement("a",{href:""},"DESIGN")),l.a.createElement("li",{id:"drop"},l.a.createElement("a",{href:""},"LOGO")),l.a.createElement("li",{id:"drop"},l.a.createElement("a",{href:""},"WEBSITE"))):null,l.a.createElement("li",null,l.a.createElement("a",{href:""},"ABOUT")),l.a.createElement("li",null,l.a.createElement("a",{href:""},"CONTACT"))):null)}}]),t}(n.Component),h=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(s.a)(t).call(this))).state={showMenu:!1},e.showMenu=e.showMenu.bind(Object(d.a)(Object(d.a)(e))),e.closeMenu=e.closeMenu.bind(Object(d.a)(Object(d.a)(e))),e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"showMenu",value:function(e){var t=this;e.preventDefault(),this.setState({showMenu:!0},function(){document.addEventListener("click",t.closeMenu)})}},{key:"closeMenu",value:function(e){var t=this;this.dropdownMenu.contains(e.target)||this.setState({showMenu:!1},function(){document.removeEventListener("click",t.closeMenu)})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"header"},l.a.createElement("div",{id:"headerMenuTop"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:""},"MENU")),l.a.createElement("li",null," | "),l.a.createElement("li",null,l.a.createElement("a",{href:""},"SOME TEXT")),l.a.createElement("li",null," | "),l.a.createElement("li",null,l.a.createElement("a",{href:""},"ANOTHER ITEM")),l.a.createElement("li",null," | "),l.a.createElement("li",null,l.a.createElement("a",{href:""},"ONE MORE")),l.a.createElement("li",null," | "),l.a.createElement("li",null,l.a.createElement("a",{href:""},"AND LAST ONE")))),l.a.createElement("div",{id:"logo"},l.a.createElement("b",null,"DEMO"),l.a.createElement("span",null,"SITE")),l.a.createElement(E,null),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:""},"HOME")),l.a.createElement("li",null,l.a.createElement("a",{href:""},"SERVICE")),l.a.createElement("li",null,l.a.createElement("a",{href:"",className:"dropdownHeader",onClick:this.showMenu},"WORKS")),this.state.showMenu?l.a.createElement("div",{className:"dropdownMenuHeader",ref:function(t){e.dropdownMenu=t}},l.a.createElement("div",{className:"rect"}),l.a.createElement("li",{id:"drop"},l.a.createElement("a",{href:""},"ALL")),l.a.createElement("li",{id:"drop"},l.a.createElement("a",{href:""},"GRAPHIC")),l.a.createElement("li",{id:"drop"},l.a.createElement("a",{href:""},"DESIGN")),l.a.createElement("li",{id:"drop"},l.a.createElement("a",{href:""},"LOGO")),l.a.createElement("li",{id:"drop"},l.a.createElement("a",{href:""},"WEBSITE"))):null,l.a.createElement("li",null,l.a.createElement("a",{href:""},"ABOUT ME")),l.a.createElement("li",null,l.a.createElement("a",{href:""},"CONTACT")))))}}]),t}(n.Component),p=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(s.a)(t).call(this))).state={items:[]},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts").then(function(e){return e.json()}).then(function(t){e.setState({items:t})})}},{key:"render",value:function(){var e=[];this.state.items.forEach(function(t){e.push(l.a.createElement("li",{key:t.id},t.title))});for(var t=[],a=0;a<4;a++)t[a]=e[Math.floor(Math.random()*e.length)],console.log(t);return l.a.createElement("div",{id:"containerMain"},l.a.createElement("div",{id:"containerContentTop"},l.a.createElement("div",{id:"topBoxLeft"},l.a.createElement("h1",null,"WELCOME"),l.a.createElement("p",null,"In sagittis augue in facilisis convallis. Nunc molestie sapien justo, eu mattis nisi convallis et. Mauris vitae placerat ipsum. In nec diam tellus. Duis imperdiet urna sed odio hendrerit, laoreet."),l.a.createElement("button",{id:"learnButton"},"LEARN MORE")),l.a.createElement("div",{id:"topBoxRight"},l.a.createElement("div",{id:"topBoxRightTop"}),l.a.createElement("div",{id:"topBoxRightText"},l.a.createElement("h2",null,"UI/UX DESIGN"),l.a.createElement("p",null,"Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. "),l.a.createElement("p",null,"Fusce placerat augue volutpat, vehicula massa vitae, convallis.")))),l.a.createElement("div",{id:"containerContentMid"},l.a.createElement("div",{id:"midBoxLeft"},l.a.createElement("h2",null,"WEB DEVELOPMENT"),l.a.createElement("p",null,"Sed laoreet risus eu dolor vestibulum, non bibendum urna cursus. Sed at tincidunt arcu. Nulla fermentum purus ut neque blandit tincidunt. Etiam orci. "),l.a.createElement("p",null,"Cras non nibh felis. Quisque in nulla magna. Nunc mattis tortor tortor, id fringilla metus ornare sed. Fusce a quam porttitor, rutrum diam. ")),l.a.createElement("div",{id:"midBoxRight"},l.a.createElement("h2",null,"WIREFRAME"),l.a.createElement("p",{id:"wireframeText"},"Nulla auctor, diam vitae ullamcorper mollis, elit sapien molestie"),l.a.createElement("div",{id:"midListBox"},l.a.createElement("div",{id:"listBoxLeft"},l.a.createElement("h3",null,"Custom List"),l.a.createElement("p",null,"Some Heading"),l.a.createElement("ul",{id:"listRandom"},t)),l.a.createElement("div",{id:"listBoxRight"},l.a.createElement("h3",null,"Web Development"),l.a.createElement("p",null,"Quisque semper, odio ac tempor pellentesque, lectus mi iaculis risus, ut scelerisque lectus purus in. "))))),l.a.createElement("div",{id:"containerContentBot"},l.a.createElement("div",{id:"botBoxLeft"},l.a.createElement("h1",null,"CONTACT"),l.a.createElement("div",{id:"rectangleBlack"}),l.a.createElement("p",null,"Mauris rutrum sapien ut erat venenatis condimentum sed a diam. Vivamus eget porttitor nisl. Nunc vestibulum, tortor sed dapibus euismod, leo nisi posuere tellus, at commodo diam odio tempor orci. Vestibulum elit mauris, tincidunt eget nunc a, euismod rutrum purus. Vestibulum ac libero et dolor condimentum varius vel in urna."),l.a.createElement("p",null,"Donec turpis est, tincidunt et sollicitudin vitae, pharetra non lorem. Curabitur eu auctor mi, nec tempor diam. Phasellus id efficitur metus, nec vulputate mauris. Vivamus metus nisi, rutrum elementum ante quis, rhoncus porta ligula. Donec varius nulla elit, sed placerat neque accumsan a. Ut lorem augue, pellentesque a aliquam et, interdum sit amet sapien."),l.a.createElement("p",null,"Aenean mattis sem augue. Donec lacinia turpis vitae elit feugiat, ac dignissim est rhoncus. Sed nec facilisis ligula. Aliquam erat volutpat. Vestibulum non fringilla est, id consequat eros. Pellentesque cursus ultrices enim eget maximus.")),l.a.createElement("div",{id:"botBoxRight"},l.a.createElement("form",{id:"contactForm"},l.a.createElement("div",null,l.a.createElement("label",{for:"Name"},"NAME")),l.a.createElement("input",{type:"text",name:"Name"}),l.a.createElement("div",null,l.a.createElement("label",{for:"email"},"EMAIL")),l.a.createElement("input",{type:"email",name:"email",placeholder:"email@email.com"}),l.a.createElement("div",null,l.a.createElement("label",{for:"subject"},"MESSAGE")),l.a.createElement("textarea",{id:"message",name:"message"}),l.a.createElement("div",null,l.a.createElement("input",{id:"submit",type:"submit",value:"SEND"}))))))}}]),t}(n.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"footer"},l.a.createElement("div",{id:"footerText"},l.a.createElement("p",null,"Phasellus elementum quam sit amet arcu imperdiet, at molestie nisi efficitur. Donec ex nunc, eleifend at urna quis, pellentesque finibus neque."),l.a.createElement("p",null,"Proin dapibus leo nisl, eu lacinia dui maximus sed. Vestibulum molestie vulputate nisi tempus posuere. Quisque vel lacus rhoncus, malesuada velit ut, mollis orci.")),l.a.createElement("nav",{id:"footerNav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:""},"HOME")),l.a.createElement("li",null,l.a.createElement("a",{href:""},"SERVICE")),l.a.createElement("li",null,l.a.createElement("a",{href:""},"WORKS")),l.a.createElement("li",null,l.a.createElement("a",{href:""},"ABOUT ME")),l.a.createElement("li",null,l.a.createElement("a",{href:""},"CONTACT")))),l.a.createElement("div",{id:"copyright"},l.a.createElement("p",null,"\xa9",l.a.createElement("b",null,"DEMO"),l.a.createElement("span",null,"SITE All rights reserved"))))}}]),t}(n.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"wrapper"},l.a.createElement(h,null),l.a.createElement(p,null),l.a.createElement(f,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.c082f98d.chunk.js.map