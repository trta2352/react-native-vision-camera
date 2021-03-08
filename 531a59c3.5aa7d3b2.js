(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{116:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(r),f=a,u=s["".concat(o,".").concat(f)]||s[f]||m[f]||i;return r?n.a.createElement(u,c(c({ref:t},l),{},{components:r})):n.a.createElement(u,c({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},84:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(7),i=(r(0),r(116)),o={id:"temporaryfile.temporaryfile-1",title:"Interface: TemporaryFile",sidebar_label:"TemporaryFile",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/temporaryfile.temporaryfile-1",id:"api/interfaces/temporaryfile.temporaryfile-1",isDocsHomePage:!1,title:"Interface: TemporaryFile",description:"Interface: TemporaryFile",source:"@site/docs/api/interfaces/temporaryfile.temporaryfile-1.md",slug:"/api/interfaces/temporaryfile.temporaryfile-1",permalink:"/react-native-vision-camera/docs/api/interfaces/temporaryfile.temporaryfile-1",editUrl:null,version:"current",sidebar_label:"TemporaryFile",sidebar:"someSidebar",previous:{title:"Interface: TakeSnapshotOptions",permalink:"/react-native-vision-camera/docs/api/interfaces/snapshot.takesnapshotoptions"},next:{title:"Interface: RecordVideoOptions",permalink:"/react-native-vision-camera/docs/api/interfaces/videofile.recordvideooptions"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"path",id:"path",children:[]}]}],l={toc:p};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-temporaryfile"},"Interface: TemporaryFile"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/temporaryfile"},"TemporaryFile"),".TemporaryFile"),Object(i.b)("p",null,"Represents a temporary file in the local filesystem."),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"TemporaryFile")),Object(i.b)("p",{parentName:"li"},"\u21b3 ",Object(i.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/photofile.photofile-1"},Object(i.b)("em",{parentName:"a"},"PhotoFile"))),Object(i.b)("p",{parentName:"li"},"\u21b3 ",Object(i.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/videofile.videofile-1"},Object(i.b)("em",{parentName:"a"},"VideoFile"))))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"path"},"path"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"path"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"The path of the file."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Note:")," If you want to consume this file (e.g. for displaying it in an ",Object(i.b)("inlineCode",{parentName:"p"},"<Image>")," component), you might have to add the ",Object(i.b)("inlineCode",{parentName:"p"},"file://")," prefix.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Note:")," This file might get deleted once the app closes because it lives in the temp directory."))),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b1f78c0/src/TemporaryFile.ts#L12"},"TemporaryFile.ts:12")))}b.isMDXComponent=!0}}]);