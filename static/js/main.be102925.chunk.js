(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports={list:"Statistics_list__MoSD5"}},function(e,t,n){e.exports={wrapperButtons:"FeedbackOptions_wrapperButtons__39jDT"}},function(e,t,n){e.exports={titleFeedback:"Section_titleFeedback__fBB6r"}},function(e,t,n){e.exports={text:"Notification_text__33i2g"}},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(7),r=n.n(s),i=(n(17),n(8)),o=n(2),u=n(3),l=n(5),b=n(4),d=(n(18),n(9)),j=n.n(d),h=n(0),p=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.good,n=e.neutral,c=e.bad,a=e.total,s=e.positivePercentage;return Object(h.jsxs)("ul",{className:j.a.list,children:[Object(h.jsxs)("li",{children:["Good: ",t]}),Object(h.jsxs)("li",{children:["Neutral: ",n]}),Object(h.jsxs)("li",{children:["Bad: ",c]}),Object(h.jsxs)("li",{children:["Total: ",a]}),Object(h.jsxs)("li",{children:["Total: ",s," %"]})]})}}]),n}(c.Component),O=n(10),f=n.n(O);function v(e){var t=e.options,n=e.onLeaveFeedback,c=Object.keys(t);return Object(h.jsx)("div",{className:f.a.wrapperButtons,children:c.map((function(e,t){return Object(h.jsx)("button",{type:"submit",onClick:function(){return n(e)},children:e},t)}))})}var k=n(11),x=n.n(k),g=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{className:x.a.titleFeedback,children:t}),n]})}}]),n}(c.Component),m=n(12),F=n.n(m);function _(e){var t=e.message;return Object(h.jsx)("p",{className:F.a.text,children:t})}var y=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(e){return Object.values(e).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(e){var t=e.good,n=Object.values(e).reduce((function(e,t){return e+t}),0);return Math.round(t/n*100)},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(i.a)({},t,e[t]+1)}))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("header",{className:"feedback",children:[Object(h.jsx)(g,{title:"Please leave feedback",children:Object(h.jsx)(v,{options:this.state,onLeaveFeedback:this.onLeaveFeedback})}),Object(h.jsx)(g,{title:"Statistics",children:0===this.countTotalFeedback(this.state)?Object(h.jsx)(_,{message:"No feedback given"}):Object(h.jsx)(p,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(this.state),positivePercentage:this.countPositiveFeedbackPercentage(this.state)})})]})})}}]),n}(c.Component);r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.be102925.chunk.js.map