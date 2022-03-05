"use strict";(self.webpackChunkoa_docs=self.webpackChunkoa_docs||[]).push([[660],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1668:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a={id:"overview",title:"Overview"},l=void 0,s={unversionedId:"Frontend Development/overview",id:"Frontend Development/overview",isDocsHomePage:!1,title:"Overview",description:"Tech Stack",source:"@site/docs/Frontend Development/overview.md",sourceDirName:"Frontend Development",slug:"/Frontend Development/overview",permalink:"/community-platform/Frontend Development/overview",editUrl:"https://github.com/ONEARMY/community-platform/edit/master/documentation/docs/Frontend Development/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Overview"},sidebar:"mainSidebar",previous:{title:"Markdown Style Guide",permalink:"/community-platform/Docs Contribution/md-style-guide"},next:{title:"Modules",permalink:"/community-platform/Frontend Development/modules"}},c=[{value:"Tech Stack",id:"tech-stack",children:[]},{value:"Styling",id:"styling",children:[]},{value:"Components",id:"components",children:[{value:"Containers",id:"containers",children:[]},{value:"Button",id:"button",children:[]},{value:"Icons",id:"icons",children:[]}]},{value:"Inconsistencies",id:"inconsistencies",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tech-stack"},"Tech Stack"),(0,i.kt)("p",null,"The platform is built in ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),", ",(0,i.kt)("a",{parentName:"p",href:"https://mobx.js.org/index.html"},"Mobx"),",",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/basic-types.html"},"Typescript")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.styled-components.com/"},"styled-components")),(0,i.kt)("h2",{id:"styling"},"Styling"),(0,i.kt)("p",null,"For styling we use the popular ",(0,i.kt)("em",{parentName:"p"},"CSS in JS")," library ",(0,i.kt)("a",{parentName:"p",href:"https://www.styled-components.com/"},"styled-components"),".\nOn top of it, we use ",(0,i.kt)("a",{parentName:"p",href:"https://styled-system.com"},"styled-system")," to encourage a theme & prop based styling."),(0,i.kt)("p",null,"If you never used it before don't worry, it makes a lot of sense and you'll just need a bit of further reading and to dive into our codebase. I recommend ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/styled-components/build-better-component-libraries-with-styled-system-4951653d54ee"},"this article")," to understand more about the Design System philosophy behind it."),(0,i.kt)("p",null,"The main style variables are described in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OneArmyWorld/onearmy/blob/module/discussion/src/themes/styled.theme.tsx"},"theme file")," to keep a high level of consistency everywhere in the app. Also, in a long term vision, we would like to allow easy theme swapping by simply changing the theme file for anyone."),(0,i.kt)("h2",{id:"components"},"Components"),(0,i.kt)("p",null,"You can find all the basic stateless components in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/components")," and some more complex & statefull components in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/pages/common"),"."),(0,i.kt)("h3",{id:"containers"},"Containers"),(0,i.kt)("p",null,"Path : ",(0,i.kt)("inlineCode",{parentName:"p"},"src/components/Layout")),(0,i.kt)("p",null,"Available containers :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PageContainer"),(0,i.kt)("li",{parentName:"ul"},"BoxContainer"),(0,i.kt)("li",{parentName:"ul"},"FlexContainer")),(0,i.kt)("p",null,"Use them to wrap the content depending on your need."),(0,i.kt)("h3",{id:"button"},"Button"),(0,i.kt)("p",null,"Path : ",(0,i.kt)("inlineCode",{parentName:"p"},"src/components/Button")),(0,i.kt)("p",null,"Basic button with variant outline :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'<Button variant="outline">button text</Button>\n')),(0,i.kt)("p",null,"You can add an icon to the button by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"icon")," props :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<Button m={50} icon={'icon-name'} variant=\"outline\">\n  button text\n</Button>\n")),(0,i.kt)("h3",{id:"icons"},"Icons"),(0,i.kt)("p",null,"Path : ",(0,i.kt)("inlineCode",{parentName:"p"},"src/components/Icons")),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"https://react-icons.netlify.com/#/"},"react-icons")," lightweight library to provide icons. We may need a custom implementation in the futur but for now it's enough.\nHow to use :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<Icon glyph={'your-icon-name'} />\n")),(0,i.kt)("p",null,"To add a new icon :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"check the one you need in the list ",(0,i.kt)("a",{parentName:"li",href:"https://react-icons.netlify.com/#/icons/md"},"https://react-icons.netlify.com/#/icons/md")),(0,i.kt)("li",{parentName:"ul"},"Import it in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Icons")," component from react-icons like so")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { MdFileDownload } from 'react-icons/md'\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add a case for the imported icon to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Glyph")," const.\nThen you'll be able to use the new icon anywere in the project by importing the ",(0,i.kt)("inlineCode",{parentName:"li"},"Icons")," component and use it as described above.")),(0,i.kt)("h2",{id:"inconsistencies"},"Inconsistencies"),(0,i.kt)("p",null,"When development first started in 2018 many modern react features were either not available or less common (e.g. hooks, functional components, scss support, etc.), and had multiple iterations on architecture and styling approaches. As such you'll likely find rough patches and inconsistencies throughout the codebase, and remnants of old code snippets no longer relevant."),(0,i.kt)("p",null,"If you're interested in helping to upgrade older parts of the codebase and help to make the overall system more consistent and developer-friendly, we support a ",(0,i.kt)("a",{parentName:"p",href:"/community-platform/Contributing/maintainer"},"Maintainer Role")," position that could be perfect for you!"))}u.isMDXComponent=!0}}]);