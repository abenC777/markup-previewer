(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),o=t(4),i=t.n(o),s=(t(13),t(14),t(5)),c=t(6),d=t(8),l=t(7),h=t(2),u=t.n(h),m=t(0);u.a.setOptions({breaks:!0});var b=new u.a.Renderer;b.link=function(e,n,t){return'<a target="_blank" href="'.concat(e,'">').concat(t)+"</a>"};var j=function(e){return Object(m.jsx)("div",{dangerouslySetInnerHTML:{__html:u()(e.markdown,{renderer:b})},id:"preview"})};function f(e){return Object(m.jsx)("textarea",{name:"editor",id:"editor",cols:"100",rows:"10",type:"text",onChange:e.onChange,value:e.markdown})}var w=function(e){Object(d.a)(t,e);var n=Object(l.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=n.call(this,e)).handleChange=function(e){r.setState({markdown:e.target.value})},r.state={markdown:k},r}return Object(c.a)(t,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Write here all the html markup you want to preview!"}),Object(m.jsx)(f,{markdown:this.state.markdown,onChange:this.handleChange})]}),Object(m.jsx)("div",{className:"converter"}),Object(m.jsx)("div",{children:Object(m.jsx)(j,{markdown:this.state.markdown})})]})}}]),t}(r.Component),k="# Welcome to my React Markdown Previewer!\n  \n  ## This is a sub-heading...\n  ### And here's some other cool stuff:\n  \n  Heres some code, `<div></div>`, between 2 backticks.\n  \n  ```\n  // this is multi-line code:\n  \n  function anotherExample(firstLine, lastLine) {\n    if (firstLine == '```' && lastLine == '```') {\n      return multiLineCode;\n    }\n  }\n  ```\n  \n  You can also make text **bold**... whoa!\n  Or _italic_.\n  Or... wait for it... **_both!_**\n  And feel free to go crazy ~~crossing stuff out~~.\n  \n  There's also [links](https://www.freecodecamp.com), and\n  > Block Quotes!\n  \n  And if you want to get really crazy, even tables:\n  \n  Wild Header | Crazy Header | Another Header?\n  ------------ | ------------- | -------------\n  Your content can | be here, and it | can be here....\n  And here. | Okay. | I think we get it.\n  \n  - And of course there are lists.\n    - Some are bulleted.\n       - With different indentation levels.\n          - That look like this.\n  \n  \n  1. And there are numbererd lists too.\n  1. Use just 1s if you want!\n  1. And last but not least, let's not forget embedded images:\n  \n  ![React Logo w/ Text](https://goo.gl/Umyytc)\n  ",v=w;var p=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(v,{})})};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.10908d68.chunk.js.map