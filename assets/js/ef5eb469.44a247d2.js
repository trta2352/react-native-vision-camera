(self.webpackChunkvision_camera=self.webpackChunkvision_camera||[]).push([[9442],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(a),u=r,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3919:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{b:function(){return n},Z:function(){return r}})},4996:function(e,t,a){"use strict";a.d(t,{C:function(){return i},Z:function(){return o}});var n=a(2263),r=a(3919);function i(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,s=void 0!==o&&o,l=i.absolute,m=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(s)return t+a;var c=a.startsWith(t)?a:t+a.replace(/^\//,"");return m?e+c:c}(i,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},1835:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return m},toc:function(){return c},default:function(){return p}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),o=a(4996),s=["components"],l={id:"formats",title:"Camera Formats",sidebar_label:"Camera Formats"},m={unversionedId:"guides/formats",id:"guides/formats",isDocsHomePage:!1,title:"Camera Formats",description:"What are camera formats?",source:"@site/docs/guides/FORMATS.mdx",sourceDirName:"guides",slug:"/guides/formats",permalink:"/react-native-vision-camera/docs/guides/formats",editUrl:"https://github.com/mrousavy/react-native-vision-camera/edit/main/docs/docs/guides/FORMATS.mdx",version:"current",sidebar_label:"Camera Formats",frontMatter:{id:"formats",title:"Camera Formats",sidebar_label:"Camera Formats"},sidebar:"visionSidebar",previous:{title:"Lifecycle",permalink:"/react-native-vision-camera/docs/guides/lifecycle"},next:{title:"Taking Photos/Recording Videos",permalink:"/react-native-vision-camera/docs/guides/capturing"}},c=[{value:"What are camera formats?",id:"what-are-camera-formats",children:[]},{value:"What if I don&#39;t want to choose a format?",id:"what-if-i-dont-want-to-choose-a-format",children:[]},{value:"What you need to know about cameras",id:"what-you-need-to-know-about-cameras",children:[]},{value:"Get started",id:"get-started",children:[]},{value:"Sort",id:"sort",children:[]},{value:"Props",id:"props",children:[]}],d={toc:c};function p(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",null,(0,i.kt)("img",{align:"right",width:"283",src:(0,o.Z)("img/example.png")})),(0,i.kt)("h3",{id:"what-are-camera-formats"},"What are camera formats?"),(0,i.kt)("p",null,"Each camera device (see ",(0,i.kt)("a",{parentName:"p",href:"devices"},"Camera Devices"),") provides a number of capture formats that have different specifications. There are formats specifically designed for high-resolution photo capture, which have very high photo output quality but in return only support frame-rates of up to 30 FPS. On the other side, there might be formats that are designed for slow-motion video capture which have frame-rates up to 240 FPS."),(0,i.kt)("h3",{id:"what-if-i-dont-want-to-choose-a-format"},"What if I don't want to choose a format?"),(0,i.kt)("p",null,"If you don't want to specify the best format for your camera device, you don't have to. The Camera ",(0,i.kt)("em",{parentName:"p"},"automatically chooses the best matching format")," for the current camera device. This is why the Camera's ",(0,i.kt)("inlineCode",{parentName:"p"},"format")," property is ",(0,i.kt)("em",{parentName:"p"},"optional"),"."),(0,i.kt)("p",null,"If you don't want to do a lot of filtering, but still want to let the camera know what your intentions are, you can use the Camera's ",(0,i.kt)("inlineCode",{parentName:"p"},"preset")," property."),(0,i.kt)("p",null,"For example, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"'medium'")," preset if you want to create a video-chat application that shouldn't excessively use mobile data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'function App() {\n  const devices = useCameraDevices()\n  const device = devices.back\n\n  if (device == null) return <LoadingView />\n  return (\n    <Camera\n      style={StyleSheet.absoluteFill}\n      device={device}\n      preset="medium"\n    />\n  )\n}\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/main/src/CameraPreset.ts"},"CameraPreset.ts")," type for more information about presets"))),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You cannot set ",(0,i.kt)("inlineCode",{parentName:"p"},"preset")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"format")," at the same time; if ",(0,i.kt)("inlineCode",{parentName:"p"},"format")," is set, ",(0,i.kt)("inlineCode",{parentName:"p"},"preset")," must be ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," and vice versa!"))),(0,i.kt)("h3",{id:"what-you-need-to-know-about-cameras"},"What you need to know about cameras"),(0,i.kt)("p",null,'To understand a bit more about camera formats, you first need to understand a few "general camera basics":'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each camera device is built differently, e.g. ",(0,i.kt)("em",{parentName:"li"},"Telephoto devices")," often don't provide frame-rates as high as ",(0,i.kt)("em",{parentName:"li"},"Wide-Angle devices"),"."),(0,i.kt)("li",{parentName:"ul"},"Formats are designed for specific use-cases, so formats with high resolution photo output don't support frame-rates as high as formats with lower resolution."),(0,i.kt)("li",{parentName:"ul"},"Different formats provide different field-of-views (FOV), maximum zoom factors, color spaces (iOS only), resolutions, frame rate ranges, and systems to assist with capture (auto-focus systems, video stabilization systems, ...)")),(0,i.kt)("h3",{id:"get-started"},"Get started"),(0,i.kt)("p",null,"Each application has different needs, so the format filtering is up to you."),(0,i.kt)("p",null,"To get all available formats, simply use the ",(0,i.kt)("inlineCode",{parentName:"p"},"CameraDevice"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},".formats")," property. See how to get a camera device in the ",(0,i.kt)("a",{parentName:"p",href:"devices"},"Camera Devices guide"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can also manually get all camera devices and decide which device to use based on the available ",(0,i.kt)("inlineCode",{parentName:"p"},"formats"),"."))),(0,i.kt)("p",null,"This example shows how you would pick the format with the ",(0,i.kt)("em",{parentName:"p"},"highest frame rate"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"function getMaxFps(format: CameraDeviceFormat): number {\n  return format.frameRateRanges.reduce((prev, curr) => {\n    if (curr.maxFrameRate > prev) return curr.maxFrameRate;\n    else return prev;\n  }, 0);\n}\n\nfunction App() {\n  const devices = useCameraDevices('wide-angle-camera')\n  const device = devices.back\n\n  const format = useMemo(() => {\n    return device?.formats.reduce((prev, curr) => {\n      if (prev == null) return curr;\n      if (getMaxFps(curr) > getMaxFps(prev)) return curr;\n      else return prev;\n    }, undefined);\n  }, [device?.formats]);\n\n  if (device == null) return <LoadingView />\n  return (\n    <Camera\n      style={StyleSheet.absoluteFill}\n      device={device}\n      format={format}\n    />\n  )\n}\n")),(0,i.kt)("p",null,"Note that you don't want to simply pick the highest frame rate, as those formats often have incredibly low resolutions. You want to find a balance between high frame rate and high resolution, so instead you might want to use the ",(0,i.kt)("inlineCode",{parentName:"p"},".sort")," function."),(0,i.kt)("h3",{id:"sort"},"Sort"),(0,i.kt)("p",null,"To sort your formats, create a custom comparator function which will be used as the ",(0,i.kt)("inlineCode",{parentName:"p"},".sort")," function's argument. The custom comparator then compares formats, preferring ones with higher frame rate AND higher resolution."),(0,i.kt)("p",null,'Implement this however you want, I personally use a "point-based system":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'export const sortFormatsByResolution = (left: CameraDeviceFormat, right: CameraDeviceFormat): number => {\n  // in this case, points aren\'t "normalized" (e.g. higher resolution = 1 point, lower resolution = -1 points)\n  let leftPoints = left.photoHeight * left.photoWidth;\n  let rightPoints = right.photoHeight * right.photoWidth;\n\n  if (left.videoHeight != null && left.videoWidth != null && right.videoHeight != null && right.videoWidth != null) {\n    leftPoints += left.videoWidth * left.videoHeight;\n    rightPoints += right.videoWidth * right.videoHeight;\n  }\n\n  // you can also add points for FPS, etc\n\n  return rightPoints - leftPoints;\n};\n\n// and then call it:\nconst formats = useMemo(() => device?.formats.sort(sortFormatsByResolution), [device?.formats])\n')),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Be careful that you don't ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," out a lot of formats since you might end up having no format to use at all. (",(0,i.kt)("em",{parentName:"p"},"Remember; not all devices support e.g. 240 FPS."),") Always carefully sort instead of filter, and pick the best available format - that way you are guaranteed to have a format available, even if your desired specifications aren't fully met."))),(0,i.kt)("h3",{id:"props"},"Props"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Camera")," View provides a few props that depend on the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"format"),". For example, you can only set the ",(0,i.kt)("inlineCode",{parentName:"p"},"fps")," prop to a value that is supported by the current ",(0,i.kt)("inlineCode",{parentName:"p"},"format"),". So if you have a format that supports 240 FPS, you can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"fps")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"240"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  // ...\n  return (\n    <Camera\n      style={StyleSheet.absoluteFill}\n      device={device}\n      format={format}\n      fps={240}\n    />\n  )\n}\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You should always verify that the format supports the desired FPS, and fall back to ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," (or a value that is supported, like ",(0,i.kt)("inlineCode",{parentName:"p"},"30"),") if it doesn't."))),(0,i.kt)("p",null,"Other props that depend on the ",(0,i.kt)("inlineCode",{parentName:"p"},"format"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fps"),": Specifies the frame rate to use"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hdr"),": Enables HDR photo or video capture and preview"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lowLightBoost"),": Enables a night-mode/low-light-boost for photo or video capture and preview"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"colorSpace"),": Uses the specified color-space for photo or video capture and preview (iOS only since Android only uses ",(0,i.kt)("inlineCode",{parentName:"li"},"YUV"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"videoStabilizationMode"),": Specifies the video stabilization mode to use for this camera device")),(0,i.kt)("br",null),(0,i.kt)("h4",{id:"-next-section-taking-photosrecording-videos"},"\ud83d\ude80 Next section: ",(0,i.kt)("a",{parentName:"h4",href:"./capturing"},"Taking Photos/Recording Videos")))}p.isMDXComponent=!0}}]);