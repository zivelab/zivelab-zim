(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,n){"use strict";(function(e){var a=n(25),r=n(24);t.a=function(t){var n=Object(r.createMuiTheme)({direction:t.direction,nprogress:{color:"light"===t.paletteType?"#000":"#fff"},palette:Object(a.a)({},t.paletteColors,{type:t.paletteType})});return e.browser&&(window.theme=n),n}}).call(this,n(99))},149:function(e,t,n){"use strict";(function(e){var a=n(26),r=n(65),i=n(16),c=n.n(i),o=n(27),s=n(18),l=n(19),u=n(21),d=n(20),p=n(22),h=n(25),m=(n(68),n(0)),f=n.n(m),g=n(5),v=n.n(g),b=n(24),y=n(88),k=n(33),x=n(38),w=n(173),E=n.n(w),O=n(172),j=n.n(O),C=n(57),S=n.n(C),A=n(176),T=n.n(A),D=n(58),N=n.n(D),L=n(170),M=n.n(L),P=n(66),I=n.n(P),H=n(89),R=n.n(H),z=n(67),W=n.n(z),_=n(82),B=n.n(_),F=n(174),G=n.n(F),U=n(49),K=n.n(U),Z=n(36),$=n.n(Z),q=n(177),J=n.n(q),V=n(178),Y=n.n(V),Q=n(179),X=n.n(Q),ee=n(113),te=n.n(ee),ne=n(150),ae=n.n(ne),re=n(151),ie=n.n(re),ce=n(152),oe=n.n(ce),se=n(175),le=n.n(se),ue=n(171),de=n.n(ue),pe=n(42),he=n(48),me=n(153),fe=n(182),ge=n(181),ve=n(167),be=n(37),ye="getting-started-nav";e.browser&&console.log("%c\n    \n    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557      \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \n    \u255a\u2550\u2550\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\n      \u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\n     \u2588\u2588\u2588\u2554\u255d  \u2588\u2588\u2551\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2554\u2550\u2550\u255d  \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\n    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551 \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\n    \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u2550\u2550\u255d  \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u255d \n\n    Tip: you can access the documentation `theme` object directly in the console.\n","font-family:monospace;color:#1976d2;font-size:12px;");var ke=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={openDrawer:!1,openSnackbar:!1,snackbarMessage:"",selectedKey:ye,localIP:null,localDevices:[],remoteDevices:[],knownDevice:"",scanDevices:!1,isLocalScan:!1,isRemoteScan:!1,scanCompleted:0,scanTotal:0},n.toggleDrawer=function(e){return function(){n.setState({openDrawer:e})}},n.togglePaletteType=function(){var e="light"===n.props.reduxTheme.paletteType?"dark":"light";document.cookie="paletteType=".concat(e,";path=/;max-age=31536000"),n.props.dispatch({type:be.a.THEME_CHANGE,payload:{paletteType:e}})},n.handleSnackbarClose=function(e,t){"clickaway"!==t&&n.setState({openSnackbar:!1})},n.handleListItemClick=function(e,t){n.setState({selectedKey:t})},n.handleLocalClick=function(){n.findDevices(!0)},n.handleRemoteClick=function(){n.findDevices(!1)},n.handleAddKnownDevice=function(e){n.setState({knownDevice:e}),n.scanKnownDevice(e)},n.channelPage=function(e){var t=e.match.params;return f.a.createElement(ve.a,{ipAddress:t.id})},n.gettingStartedLink=function(e){return f.a.createElement(y.b,Object.assign({to:"/getting-started"},e))},n.gettingStartedPage=function(){return f.a.createElement(ge.a,null)},n.componentDidMount=function(){n.getLocalIPAddressAsync()},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"scanKnownDevice",value:function(){var e=Object(o.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadDescriptionAsync(t,!0);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"findDevices",value:function(){var e=Object(o.a)(c.a.mark(function e(t){var n,a,r,i=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=t?"Scanning local devices...":"Scanning remote devices...",this.setState({openSnackbar:!0,snackbarMessage:n}),t||this.state.localIP){e.next=6;break}return e.next=6,this.getLocalIPAddressAsync();case 6:a=t?"169.254.17.1":this.state.localIP,r=Object(he.a)(a),this.setState({isLocalScan:t,isRemoteScan:!t,scanCompleted:0,scanTotal:r.length}),r.map(function(){var e=Object(o.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.loadDescriptionAsync(t);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}},e,this,[[0,12]])}));return function(t){return e.apply(this,arguments)}}()},{key:"getLocalIPAddressAsync",value:function(){var e=Object(o.a)(c.a.mark(function e(){var t,n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(he.b)();case 3:(t=e.sent)&&(n=t.split(".").slice(0,3).join(".")+".15",this.setState({localIP:t,knownDevice:n})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"loadDescriptionAsync",value:function(){var e=Object(o.a)(c.a.mark(function e(t){var n,i,o,s,l,u,d,p,h=arguments;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=h.length>1&&void 0!==h[1]&&h[1],i="169"===t.split(".").slice(0,1),o=i?"localDevices":"remoteDevices",e.prev=3,s=new Request("http://"+t+"/about"),e.next=8,fetch(s);case 8:return l=e.sent,e.next=11,l.json();case 11:if(!(u=e.sent)){e.next=17;break}if(Object(he.c)(u.macAddress)){e.next=15;break}return e.abrupt("return");case 15:d={name:u.hostName||"Untitled",model:u.model,serialNumber:u.serialNumber,ipAddress:u.ipAddress,macAddress:u.macAddress},this.state[o].filter(function(e){return e.ipAddress===t}).length<=0&&this.setState(Object(a.a)({},o,[].concat(Object(r.a)(this.state[o]),[d])));case 17:e.next=24;break;case 19:e.prev=19,e.t0=e.catch(3),p=this.state[o].filter(function(e){return e.ipAddress===t}),this.setState(Object(a.a)({},o,this.state[o].filter(function(e){return e!==p}))),n&&("Can't find device. Make sure your device is turned on and connected to the network.",this.setState({openSnackbar:!0,snackbarMessage:"Can't find device. Make sure your device is turned on and connected to the network."}));case 24:return e.prev=24,this.setState({scanCompleted:this.state.scanCompleted+1}),e.finish(24);case 27:case"end":return e.stop()}},e,this,[[3,19,24,27]])}));return function(t){return e.apply(this,arguments)}}()},{key:"ScanProgress",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e?f.a.createElement(f.a.Fragment,null):f.a.createElement(f.a.Fragment,null,f.a.createElement(M.a,{variant:"determinate",value:t,color:"secondary"}))}},{key:"ListDevices",value:function(e){var t=this,n=function(e){return"/device/"+e},a=function(e){return function(t){return f.a.createElement(y.b,Object.assign({to:n(e)},t))}},r=function(e){return"nav-device-"+e.split(".").join("-")},i=function(e){var t=e.name||"Untitled",n=e.model.startsWith("Zive")?e.model.split(" ").slice(1).join(" "):e.model;return"Untitled"===t?n:t},c=function(e){var t=e.name||"Untitled",n=e.model.startsWith("Zive")?e.model.split(" ").slice(1).join(" "):e.model,a=e.ipAddress;return"Untitled"===t?a:n+" | "+a};return e?e.map(function(e){return f.a.createElement(f.a.Fragment,{key:e.ipAddress},f.a.createElement(S.a,{variant:"inset",key:(n=e.ipAddress,"nav-divider-"+n.split(".").join("-"))}),f.a.createElement(I.a,{button:!0,dense:!0,key:r(e.ipAddress),component:a(e.ipAddress),selected:t.state.selectedKey===e.ipAddress,onClick:function(n){return t.handleListItemClick(n,e.ipAddress)}},f.a.createElement(R.a,null,f.a.createElement(de.a,null)),f.a.createElement(W.a,{primary:i(e),secondary:c(e)})));var n}):f.a.createElement(f.a.Fragment,null)}},{key:"render",value:function(){var e=this,t=this.props,n=t.classes,r=t.reduxTheme,i=t.reduxTitle,c=this.state,o=c.openDrawer,s=c.openSnackbar,l=c.snackbarMessage,u=this.state,d=u.localIP,p=u.localDevices,h=u.remoteDevices,m=this.state,g=m.isLocalScan,b=m.isRemoteScan,x=m.scanCompleted,w=m.scanTotal,O=i||"Zive Channels",C=w>0&&x<w,A=g&&C,D=b&&C,L=C?100*x/w:0;return f.a.createElement(y.a,null,f.a.createElement("div",{className:n.root},f.a.createElement(j.a,null),f.a.createElement(fe.a,null),f.a.createElement(E.a,{position:"fixed",className:v()(n.appBar,Object(a.a)({},n.appBarShift,o))},f.a.createElement(G.a,{disableGutters:!o},f.a.createElement(N.a,{edge:"start",color:"inherit","aria-label":"Open drawer",onClick:this.toggleDrawer(!0),className:v()(n.menuButton,o&&n.hide)},f.a.createElement(le.a,null)),null!==O&&f.a.createElement($.a,{className:n.title,variant:"h6",color:"inherit",noWrap:!0},O),f.a.createElement("div",{className:n.grow}),f.a.createElement(K.a,{title:"Toggle theme",enterDelay:300},f.a.createElement(N.a,{color:"inherit",onClick:this.togglePaletteType,"aria-label":"toggleTheme"},"light"===r.paletteType?f.a.createElement(ie.a,null):f.a.createElement(oe.a,null))),f.a.createElement(K.a,{title:"Github repository",enterDelay:300},f.a.createElement(N.a,{edge:"end",component:"a",color:"inherit",href:"https://github.com/zivelab/zivelab-channels","aria-label":"github"},f.a.createElement(ae.a,null))))),f.a.createElement(T.a,{className:n.drawer,variant:"persistent",anchor:"left",open:o,classes:{paper:n.drawerPaper}},f.a.createElement("div",{className:n.drawerHeader},f.a.createElement(N.a,{onClick:this.toggleDrawer(!1)},"ltr"===r.direction?f.a.createElement(J.a,null):f.a.createElement(Y.a,null))),f.a.createElement(S.a,{key:"nav-first-divider"}),f.a.createElement(I.a,{button:!0,dense:!0,key:ye,component:this.gettingStartedLink,selected:this.state.selectedKey===ye,onClick:function(t){return e.handleListItemClick(t,ye)}},f.a.createElement(W.a,{primary:"Getting Started"})),f.a.createElement(S.a,{key:"nav-second-divider"}),f.a.createElement(K.a,{title:"Click to scan local devices","aria-label":"Click to scan local devices"},f.a.createElement(I.a,{button:!0,dense:!0,key:"nav-local-devices",onClick:this.handleLocalClick,disabled:C},f.a.createElement(R.a,null,f.a.createElement(te.a,null)),f.a.createElement(W.a,{primary:"Scan My Devices",secondary:A?"scanning... "+x+"/"+w:p.length?"":"no devices found"}))),this.ScanProgress(!A,L),this.ListDevices(p),f.a.createElement(S.a,{key:"nav-third-divider"}),f.a.createElement(K.a,{title:"Click to scan remote devices","aria-label":"Click to scan remote devices"},f.a.createElement(I.a,{button:!0,dense:!0,key:"nav-remote-devices",onClick:this.handleRemoteClick,disabled:C},f.a.createElement(R.a,null,f.a.createElement(te.a,null)),f.a.createElement(W.a,{primary:"Scan Remote Devices",secondary:D?"scanning... "+x+"/"+w:h.length?d:"no devices found"}))),this.ScanProgress(!D,L),this.ListDevices(h),f.a.createElement(S.a,{key:"nav-last-divider"}),f.a.createElement(me.a,{classes:n,knownDevice:this.state.knownDevice,onClick:this.handleAddKnownDevice})),f.a.createElement("main",{className:v()(n.content,Object(a.a)({},n.contentShift,o))},f.a.createElement(k.d,null,f.a.createElement(k.a,{path:"/",exact:!0,to:"/getting-started"}),f.a.createElement(k.b,{path:"/getting-started",exact:!0,component:this.gettingStartedPage}),f.a.createElement(k.b,{path:"/device/:id",exact:!0,component:this.channelPage}))),f.a.createElement(B.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:s,autoHideDuration:2e3,onClose:this.handleSnackbarClose,ContentProps:{"aria-describedby":"message-id"},message:f.a.createElement("span",{id:"message-id"},l),action:[f.a.createElement(N.a,{key:"close","aria-label":"Close",color:"inherit",className:n.close,onClick:this.handleSnackbarClose},f.a.createElement(X.a,null))]})))}}]),t}(f.a.Component);t.a=Object(pe.a)(Object(x.b)(function(e){return{reduxTheme:e.theme,reduxTitle:e.title}}),Object(b.withStyles)(function(e){return{"@global":{strong:{fontWeight:e.typography.fontWeightMedium}},root:{display:"flex"},grow:{flexGrow:1},title:{marginLeft:2*e.spacing.unit,flex:"0 1 auto"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},badgeMargin:{margin:2*e.spacing.unit},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(h.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:3*e.spacing.unit,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240,marginTop:"32px"},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},fab:{position:"absolute",bottom:2*e.spacing.unit,right:2*e.spacing.unit},markdown:Object(h.a)({},e.typography.body1,{padding:"0 8px",margin:"32px"})}}))(ke)}).call(this,n(99))},153:function(e,t,n){"use strict";var a=n(18),r=n(19),i=n(21),c=n(20),o=n(22),s=n(0),l=n.n(s),u=n(63),d=n.n(u),p=n(156),h=n.n(p),m=n(163),f=n.n(m),g=n(158),v=n.n(g),b=n(159),y=n.n(b),k=n(157),x=n.n(k),w=n(154),E=n.n(w),O=n(160),j=n.n(O),C=n(162),S=n.n(C),A=n(161),T=n.n(A),D=n(49),N=n.n(D),L=n(155),M=n.n(L),P=n(48),I=n(47);var H=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1,knownDevice:"",isValidDevice:!1},n.handleOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1})},n.handleChange=function(e){var t=e.target.value,a=Object(P.d)(t);n.setState({knownDevice:t,isValidDevice:a})},n.handleClick=function(){document.cookie="lastKnownDevice=".concat(n.state.knownDevice,";path=/;max-age=31536000"),n.handleClose(),n.props.onClick(n.state.knownDevice)},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,n=t.open,a=t.knownDevice,r=t.isValidDevice;return l.a.createElement(l.a.Fragment,null,l.a.createElement(N.a,{title:"Click to add known device","aria-label":"Click to add known device"},l.a.createElement(E.a,{"aria-label":"Add",className:e.fab,color:"primary",size:"medium",onClick:this.handleOpen},l.a.createElement(M.a,null))),l.a.createElement(h.a,{open:n,onClose:this.handleClose,"aria-labelledby":"form-dialog-known-device"},l.a.createElement(x.a,{id:"form-dialog-known-device"},"Add known device"),l.a.createElement(v.a,null,l.a.createElement(y.a,null,"Please enter the known IP address of your device here."),l.a.createElement("br",null),l.a.createElement(j.a,{required:!0,error:!r},l.a.createElement(T.a,null,"IP address"),l.a.createElement(S.a,{autoFocus:!0,id:"ipAddress-to-add",label:"IP address",value:a,onChange:this.handleChange,type:"text",fullWidth:!0}))),l.a.createElement(f.a,null,l.a.createElement(d.a,{onClick:this.handleClick,color:"primary",disabled:!r},"Add"))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(t.open||t.knownDevice===e.knownDevice)return null;var n=function(e){var t=Object(I.a)("lastKnownDevice");return""===t?e:t}(e.knownDevice);return{knownDevice:n,isValidDevice:Object(P.d)(n)}}}]),t}(l.a.Component);t.a=H},164:function(e,t,n){"use strict";(function(e){var a=n(183),r=n(18),i=n(19),c=n(21),o=n(20),s=n(22),l=n(25),u=n(0),d=n.n(u),p=n(84),h=n(86),m=n.n(h),f=n(24),g=n(165),v=n(39);m.a.Lexer.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u2424/g,"\n"),this.token(e,!0)};var b=new m.a.Renderer;b.heading=function(t,n){if(n>=4)return"<h".concat(n,">").concat(t,"</h").concat(n,">");var a=Object(g.a)(t,e.__MARKED_UNIQUE__);return"\n    <h".concat(n,'>\n      <a class="anchor-link" id="').concat(a,'"></a>').concat(t)+'<a class="anchor-link-style" href="#'.concat(a,'">\n        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M46.9 13.9c-.5-.6-1.2-.94-2.07-.94h-6.67l1.86-8.98c.17-.85 0-1.7-.52-2.3-.48-.6-1.2-.94-2.07-.94-1.6 0-3.2 1.27-3.54 2.93l-.5 2.42c0 .07-.07.13-.07.2l-1.37 6.62H20.7l1.88-8.96c.16-.85 0-1.7-.53-2.3-.48-.6-1.2-.94-2.07-.94-1.65 0-3.2 1.27-3.56 2.93l-.52 2.58v.08l-1.37 6.64H7.3c-1.67 0-3.22 1.3-3.58 2.96-.16.86 0 1.7.52 2.3.48.6 1.2.93 2.07.93h6.97l-2 9.65H4c-1.67 0-3.22 1.27-3.56 2.94-.2.8 0 1.67.5 2.27.5.6 1.2.93 2.08.93H10l-1.84 9.05c-.2.84 0 1.67.52 2.3.5.6 1.25.92 2.08.92 1.66 0 3.2-1.3 3.55-2.94l1.94-9.33h11.22l-1.87 9.05c-.15.84.03 1.67.53 2.3.5.6 1.2.92 2.07.92 1.65 0 3.22-1.3 3.56-2.94l1.9-9.33h7c1.6 0 3.2-1.28 3.53-2.93.2-.87 0-1.7-.52-2.3-.48-.62-1.2-.96-2.05-.96h-6.7l2.02-9.65h6.93c1.67 0 3.22-1.27 3.56-2.92.2-.85 0-1.7-.5-2.3l-.04.03zM17.53 28.77l1.95-9.65H30.7l-1.97 9.66H17.5h.03z"/></svg>\n      </a></h').concat(n,">\n  ")},b.link=function(e,t,n){return'<a href="'.concat(e,'"').concat(' target="_blank" rel="noopener nofollow"',">").concat(n,"</a>")};var y={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,highlight:function(e,t){var n;switch(t){case"diff":n=v.b.languages.diff;break;case"css":n=v.b.languages.css;break;case"ts":case"tsx":n=v.b.languages.typescript;break;case"js":case"jsx":default:n=v.b.languages.jsx}return v.b.highlight(e,n)},renderer:b},k=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.className,r=e.text,i=Object(a.a)(e,["classes","className","text"]);return d.a.createElement("div",Object.assign({className:Object(p.a)(t.root,"markdown-body",n),dangerouslySetInnerHTML:{__html:m()(r,y)}},i))}}]),t}(d.a.Component);t.a=Object(f.withStyles)(function(e){return{root:{fontFamily:e.typography.fontFamily,fontSize:16,color:e.palette.text.primary,"& .anchor-link":{marginTop:-125,position:"absolute"},'& pre, & pre[class*="language-"]':{margin:"24px 0",padding:"12px 18px",backgroundColor:e.palette.background.paper,borderRadius:e.shape.borderRadius,overflow:"auto",WebkitOverflowScrolling:"touch"},"& code":{display:"inline-block",lineHeight:1.6,fontFamily:'Consolas, "Liberation Mono", Menlo, Courier, monospace',padding:"3px 6px",color:e.palette.text.primary,backgroundColor:e.palette.background.paper,fontSize:14},"& p code, & ul code, & pre code":{fontSize:14,lineHeight:1.6},"& h1":Object(l.a)({},e.typography.h2,{margin:"32px 0 16px"}),"& .description":Object(l.a)({},e.typography.h5,{margin:"0 0 40px"}),"& h2":Object(l.a)({},e.typography.h4,{margin:"32px 0 24px"}),"& h3":Object(l.a)({},e.typography.h5,{margin:"32px 0 24px"}),"& h4":Object(l.a)({},e.typography.h6,{margin:"24px 0 16px"}),"& h5":Object(l.a)({},e.typography.subtitle2,{margin:"24px 0 16px"}),"& p, & ul, & ol":{lineHeight:1.6},"& h1, & h2, & h3, & h4":{"& code":{fontSize:"inherit",lineHeight:"inherit",wordBreak:"break-word"},"& .anchor-link-style":{opacity:0,display:"none"},"&:hover .anchor-link-style":{display:"inline-block",opacity:1,padding:"0 8px",color:e.palette.text.hint,"&:hover":{color:e.palette.text.secondary},"& svg":{width:"0.55em",height:"0.55em",fill:"currentColor"}}},"& table":{width:"100%",display:"block",overflowX:"auto",WebkitOverflowScrolling:"touch",borderCollapse:"collapse",borderSpacing:0,overflow:"hidden","& .prop-name":{fontSize:13,fontFamily:'Consolas, "Liberation Mono", Menlo, monospace'},"& .required":{color:"light"===e.palette.type?"#006500":"#9bc89b"},"& .prop-type":{fontSize:13,fontFamily:'Consolas, "Liberation Mono", Menlo, monospace',color:"light"===e.palette.type?"#932981":"#dbb0d0"},"& .prop-default":{fontSize:13,fontFamily:'Consolas, "Liberation Mono", Menlo, monospace',borderBottom:"1px dotted ".concat(e.palette.text.hint)}},"& thead":{fontSize:14,fontWeight:e.typography.fontWeightMedium,color:e.palette.text.secondary},"& tbody":{fontSize:14,lineHeight:1.5,color:e.palette.text.primary},"& td":{borderBottom:"1px solid ".concat(e.palette.divider),padding:"8px 16px 8px 8px",textAlign:"left"},"& td:last-child":{paddingRight:24},"& td compact":{paddingRight:24},"& td code":{fontSize:13,lineHeight:1.6},"& th":{whiteSpace:"pre",borderBottom:"1px solid ".concat(e.palette.divider),fontWeight:e.typography.fontWeightMedium,padding:"0 16px 0 8px",textAlign:"left"},"& th:last-child":{paddingRight:24},"& tr":{height:48},"& thead tr":{height:64},"& strong":{fontWeight:e.typography.fontWeightMedium},"& blockquote":{borderLeft:"5px solid ".concat(e.palette.text.hint),backgroundColor:e.palette.background.paper,padding:"4px 24px",margin:"24px 0"},"& a, & a code":{color:e.palette.secondary.main,textDecoration:"none","&:hover":{textDecoration:"underline"}},"& img":{maxWidth:"100%"}}}},{flip:!1})(k)}).call(this,n(31))},165:function(e,t,n){"use strict";function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function e(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=1===a?t:"".concat(t,"-").concat(a);return n[r]?e(t,n,a+1):(n[r]=!0,r)}(encodeURI(e.toLowerCase().replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g,"").replace(/[!@#\$%\^&\*\(\)=_\+\[\]{}`~;:'"\|,\.<>\/\?\s]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")),t)}n.d(t,"a",function(){return a})},166:function(e,t,n){e.exports=n.p+"static/media/gettingStarted.084dd3fa.md"},167:function(e,t,n){"use strict";var a=n(26),r=n(25),i=n(180),c=n(65),o=n(16),s=n.n(o),l=n(27),u=n(18),d=n(19),p=n(21),h=n(20),m=n(22),f=(n(68),n(0)),g=n.n(f),v=n(24),b=n(38),y=n(36),k=n.n(y),x=n(87),w=n.n(x),E=n(168),O=n.n(E),j=n(83),C=n(42),S=(new Date).getTime(),A={NotAssigned:"NotAssigned",Idle:"Idle",Running:"Running",Finished:"Finished",Stopped:"Stopped",RunningNoiseLevel:"RunningNoiseLevel"},T={initialFrequency:1e3,finalFrequency:1,density:10,iteration:1,currentRange:2,maxInitialDelay:12,skip:1,cycles:0},D=null,N=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={ipAddress:"",about:null,channel:null,cook:null,parameters:T,activeIndex:-1,auxData:[]},n.getTitle=function(e){if(e){var t=e.hostName||"Untitled",n=e.model.startsWith("Zive")?e.model.split(" ").slice(1).join(" "):e.model,a=e.ipAddress;return"Untitled"===t?n+" ("+a+")":t+" ("+n+", "+a+")"}return""},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.loadAboutAsync(),this.loadChannelAsync()}},{key:"componentDidUpdate",value:function(e,t){t.ipAddress!==this.state.ipAddress&&(this.loadAboutAsync(),this.loadChannelAsync())}},{key:"componentWillUnmount",value:function(){D=null}},{key:"loadAboutAsync",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t,n,a,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((t=this.state.ipAddress)===D){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,n="http://"+t+"/about",e.next=7,fetch(n);case 7:return a=e.sent,e.next=10,a.json();case 10:(r=e.sent)&&this.setState({about:r}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0);case 17:case"end":return e.stop()}},e,this,[[3,14]])}));return function(){return e.apply(this,arguments)}}()},{key:"loadChannelAsync",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t,n,a,r,o,l,u,d,p,h;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((t=this.state.ipAddress)===D){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,n="http://"+t+"/channel",e.next=7,fetch(n);case 7:return a=e.sent,e.next=10,a.json();case 10:(r=e.sent)&&(o=Object.keys(A).find(function(e){return A[e]===r.state}),r.isIdle=o===A.Idle,r.isRunning=o===A.Running||o===A.Finished||o===A.Stopped,r.isRunningNoiseLevel=o===A.RunningNoiseLevel,l={time:(new Date).getTime()-S,voltage:r.auxVoltage,temperature:r.auxTemperature},this.state.auxData.length<200?this.setState({channel:r,auxData:[].concat(Object(c.a)(this.state.auxData),[l])}):(u=Object(i.a)(this.state.auxData),u[0],d=u.slice(1),this.setState({channel:r,auxData:[].concat(Object(c.a)(d),[l])})),r.lastStarted&&(p=r.lastStarted.ticks,h=r.lastStarted.count,this.state.cook&&this.state.cook.started.ticks===p&&this.state.cook.started.count===h||this.loadCookAsync())),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0);case 17:return e.prev=17,e.finish(17);case 19:case"end":return e.stop()}},e,this,[[3,14,17,19]])}));return function(){return e.apply(this,arguments)}}()},{key:"loadCookAsync",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t,n,a,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((t=this.state.ipAddress)===D){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,n="http://"+t+"/cook",e.next=7,fetch(n);case 7:return a=e.sent,e.next=10,a.json();case 10:(i=e.sent)&&(i.started.moment=O()(i.started.ticks-621355968e5),this.setState({cook:i,parameters:Object(r.a)({},i.parameters)})),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0);case 17:case"end":return e.stop()}},e,this,[[3,14]])}));return function(){return e.apply(this,arguments)}}()},{key:"loadSamplesAsync",value:function(){var e=Object(l.a)(s.a.mark(function e(t){var n,i,c,o,l,u,d;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.state,i=n.ipAddress,c=n.cook,i===D){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,o="http://"+i+"/sample?"+t.toString(),e.next=7,fetch(o);case 7:return l=e.sent,e.next=10,l.json();case 10:(u=e.sent)&&c&&c.data&&t>=0&&t<c.data.length&&(d=c.data.map(function(e,n){return n===t?e.samples=u:e}),this.setState({cook:Object(r.a)({},this.state.cook,Object(a.a)({},d,d))})),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0);case 17:case"end":return e.stop()}},e,this,[[3,14]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.reduxTheme,a=this.state,r=a.about,i=a.channel,c=a.cook,o=this.getTitle(r),s="light"===n.paletteType?"rjv-default":"monokai";return g.a.createElement(j.a,{className:t.root,title:o},g.a.createElement("div",{className:t.content},g.a.createElement(k.a,{variant:"h4",gutterBottom:!0},"About"),g.a.createElement("p",null),r?g.a.createElement(w.a,{src:r,displayDataTypes:!1,collapsed:!1,theme:s}):g.a.createElement("div",null),g.a.createElement("p",null),g.a.createElement(k.a,{variant:"h4",gutterBottom:!0},"Channel (demo)"),g.a.createElement("p",null),i?g.a.createElement(w.a,{src:i,displayDataTypes:!1,collapsed:!0,theme:s}):g.a.createElement("div",null),g.a.createElement("p",null),g.a.createElement(k.a,{variant:"h4",gutterBottom:!0},"Cook (demo)"),g.a.createElement("p",null),c?g.a.createElement(w.a,{src:c,displayDataTypes:!1,collapsed:!0,theme:s}):g.a.createElement("div",null)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.ipAddress!==e.ipAddress?(D=e.ipAddress,{ipAddress:e.ipAddress,about:null,channel:null,cook:null}):null}}]),t}(g.a.Component);t.a=Object(C.a)(Object(b.b)(function(e){return{reduxTheme:e.theme}}),Object(v.withStyles)(function(e){return{root:{marginBottom:100},content:{marginTop:2*e.spacing.unit,marginBottom:2*e.spacing.unit,padding:2*e.spacing.unit}}}))(N)},181:function(e,t,n){"use strict";var a=n(18),r=n(19),i=n(21),c=n(20),o=n(22),s=(n(68),n(0)),l=n.n(s),u=n(24),d=n(83),p=n(42),h=n(164),m=/---[\r\n]([\s\S]*)[\r\n]---/,f=/^\s*$/;var g=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.markdown,a=n?function(e){return e.replace(m,"").split(/^{{|}}$/gm).filter(function(e){return!f.test(e)})}(n):[""];return l.a.createElement("div",null,a.map(function(e){return l.a.createElement(h.a,{className:t.markdownElement,key:e,text:e})}))}}]),t}(l.a.Component),v=Object(p.a)(Object(u.withStyles)(function(e){return{markdownElement:{marginTop:2*e.spacing.unit,marginBottom:2*e.spacing.unit,padding:e.spacing.unit}}}))(g),b=n(166),y=n.n(b),k=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={md:""},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch(y.a).then(function(e){return e.text()}).then(function(t){e.setState({md:t})})}},{key:"render",value:function(){var e=this.props.classes,t=this.state.md;return l.a.createElement(d.a,{className:e.root,title:"Getting Started"},l.a.createElement(v,{className:e.markdown,markdown:t}))}}]),t}(s.Component);t.a=Object(u.withStyles)(function(e){return{root:{marginBottom:100},markdown:{marginTop:2*e.spacing.unit,marginBottom:2*e.spacing.unit,padding:2*e.spacing.unit}}})(k)},182:function(e,t,n){"use strict";var a=n(16),r=n.n(a),i=n(18),c=n(19),o=n(21),s=n(20),l=n(22),u=n(27),d=(n(358),n(0)),p=n.n(d),h=n(63),m=n.n(h),f=n(82),g=n.n(f);var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise(function(t){setTimeout(t,e)})},b=n(47);var y=null;function k(){return x.apply(this,arguments)}function x(){return(x=Object(u.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,y){e.next=10;break}return e.next=4,v(1500);case 4:return e.next=6,fetch("https://raw.githubusercontent.com/zivelab/zivelab-channels/master/docs/notifications.json");case 6:return t=e.sent,e.next=9,t.json();case 9:y=e.sent;case 10:e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:y=y||[];case 15:case"end":return e.stop()}},e,null,[[0,12]])}))).apply(this,arguments)}var w=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).mounted=!1,n.state={open:!1,message:{}},n.handleMessage=function(){var e=function(){var e=Object(b.a)("lastSeenNotification");return""===e?0:parseInt(e,10)}(),t=y.filter(function(t){return!(t.id<=e)});t.length>0&&n.mounted&&n.setState({message:t[0],open:!0})},n.handleClose=function(){n.setState({open:!1}),document.cookie="lastSeenNotification=".concat(n.state.message.id,";path=/;max-age=31536000")},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,e.next=3,k();case 3:this.handleMessage();case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.message,n=e.open;return p.a.createElement(g.a,{key:t.id,anchorOrigin:{vertical:"top",horizontal:"center"},ContentProps:{"aria-describedby":"notification-message"},message:p.a.createElement("span",{id:"notification-message",dangerouslySetInnerHTML:{__html:t.text}}),action:p.a.createElement(m.a,{size:"small",color:"secondary",onClick:this.handleClose},"Close"),open:n,autoHideDuration:2e4,onClose:this.handleClose,onExited:this.handleMessage})}}]),t}(p.a.Component);t.a=w},188:function(e,t,n){e.exports=n(383)},37:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={THEME_CHANGE:"THEME_CHANGE",TITLE_CHANGE:"TITLE_CHANGE",OPTIONS_CHANGE:"OPTIONS_CHANGE"}},383:function(e,t,n){"use strict";n.r(t);n(68);var a=n(0),r=n.n(a),i=n(29),c=n.n(i),o=n(38),s=n(64),l=n(26),u=n(37),d=n(146),p=n.n(d),h=n(109),m=n.n(h),f=n(40),g={direction:"ltr",paletteType:"light",paletteColors:{primary:p.a,secondary:{main:Object(f.darken)(m.a.A400,.08)}}},v=Object(l.a)({},u.a.THEME_CHANGE,function(e,t){return{paletteType:t.payload.paletteType||e.paletteType,direction:t.payload.direction||e.direction,paletteColors:t.payload.paletteColors||e.paletteColors}});var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,n=e;return v[t.type]&&(n=v[t.type](e,t)),n},y=document.title;var k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,n=e;return t.type===u.a.TITLE_CHANGE&&(n=t.payload.title||e.title),n},x=Object(s.c)(Object(s.b)({theme:b,title:k})),w=n(18),E=n(19),O=n(21),j=n(20),C=n(22),S=n(55),A=n(39),T=n(111),D=n(47),N=Object(S.c)();function L(e){Object(A.d)("light"===e.paletteType?A.c:A.a),document.body.dir=e.direction}var M=function(e){function t(){var e,n;Object(w.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(O.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(C.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){L(this.props.reduxTheme);var e=this.props.reduxTheme,t=Object(D.a)("paletteType"),n=Object(D.a)("paletteColors");(t&&e.paletteType!==t||n&&JSON.stringify(e.paletteColors)!==n)&&this.props.dispatch({type:u.a.THEME_CHANGE,payload:{paletteType:t,paletteColors:n?JSON.parse(n):null}})}},{key:"componentDidUpdate",value:function(){L(this.props.reduxTheme)}},{key:"render",value:function(){var e=this.props.children,t=this.state.theme;return r.a.createElement(S.a,{generateClassName:N},r.a.createElement(S.b,{theme:t},e))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if("undefined"===typeof t.theme)return{prevProps:e,theme:Object(T.a)(e.reduxTheme)};var n=t.prevProps;return e.reduxTheme.paletteType!==n.reduxTheme.paletteType||e.reduxTheme.paletteColors!==n.reduxTheme.paletteColors||e.reduxTheme.direction!==n.reduxTheme.direction?{prevProps:e,theme:Object(T.a)(e.reduxTheme)}:null}}]),t}(r.a.Component),P=Object(o.b)(function(e){return{reduxTheme:e.theme}})(M),I=n(149);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,{store:x},r.a.createElement(P,null,r.a.createElement(I.a,null))),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},39:function(e,t,n){"use strict";(function(e){n.d(t,"c",function(){return r}),n.d(t,"a",function(){return i}),n.d(t,"d",function(){return s});var a,r,i,c=n(147),o=n.n(c);n(228),n(229),n(230),n(231),n(232),n(233);function s(e){a.textContent=e}e.browser&&(r=n(234),i=n(235),(a=document.createElement("style")).setAttribute("data-prism","true"),document.head.appendChild(a)),t.b=o.a}).call(this,n(99))},42:function(e,t,n){"use strict";function a(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}},function(e){return e})}n.d(t,"a",function(){return a})},47:function(e,t,n){"use strict";n.d(t,"a",function(){return a});n(10),n(110),n(148);function a(e){var t=new RegExp("(?:(?:^|.*;*)".concat(e,"*=*([^;]*).*$)|^.*$"));return document.cookie.replace(t,"$1")}},48:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return i}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return o});var a={ZiveLab:["00:1b:c5:08:10","00:1b:c5:08:11","00:1b:c5:08:12","00:1b:c5:08:13","00:1b:c5:08:14","00:1b:c5:08:15","00:1b:c5:08:16","00:1b:c5:08:17","00:1b:c5:08:18","00:1b:c5:08:19","00:1b:c5:08:1a","00:1b:c5:08:1b","00:1b:c5:08:1c","00:1b:c5:08:1d","00:1b:c5:08:1e","00:1b:c5:08:1f"]};function r(){return new Promise(function(e,t){var n=window.webkitRTCPeerConnection||window.mozRTCPeerConnection;n||t("Your browser does not support this API");var a=new n({iceServers:[]});a.createDataChannel("",{reliable:!1}),a.onicecandidate=function(t){if(t.candidate){var n=function(e){var t="";return e.split("\r\n").forEach(function(e){if(~e.indexOf("a=candidate")){var n=e.split(" "),a=n[4];"host"===n[7]&&(t=a)}else if(~e.indexOf("c=")){var r=e.split(" ")[2];t=r}}),t}("a="+t.candidate.candidate);e(n)}},a.createOffer(function(e){a.setLocalDescription(e)},function(e){console.warn("offer failed",e)})})}function i(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!c(e))return null;var n=e.substr(0,e.lastIndexOf(".")+1);return t?Array.from({length:255},function(e,t){return n+(t+1)}):Array.from({length:253},function(e,t){return n+(t+2)})}function c(e){return!!/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e)||(alert("You have entered an invalid IP address!"),!1)}function o(e){return"ZiveLab"===function(e,t){var n=e.toLowerCase().split(":").slice(0,5).join(":");if(t&&a[t]&&a[t].indexOf(n)>-1)return t;if(-1===JSON.stringify(a).indexOf(n))return!1;for(var r in a)if(a[r].indexOf(n)>-1)return r}(e,"ZiveLab")}},68:function(e,t,n){"use strict";var a=n(55);Object(a.d)()},83:function(e,t,n){"use strict";var a=n(18),r=n(19),i=n(21),c=n(20),o=n(22),s=n(26),l=n(0),u=n.n(l),d=n(84),p=n(24),h=n(38),m=n(37),f=n(42),g=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).getDocTitle=function(e){return e?e+" - Zive Channels":"Zive Channels"},n.titleSideEffect=function(e){document.title=e},n.dispatchTitle=function(e){n.props.dispatch({type:m.a.TITLE_CHANGE,payload:{title:e}})},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.getDocTitle(this.props.title);this.titleSideEffect(e)}},{key:"componentDidUpdate",value:function(){var e=this.getDocTitle(this.props.title);this.props.reduxTitle!==e&&(this.titleSideEffect(e),this.dispatchTitle(e))}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.classes,a=e.children;return u.a.createElement("div",{className:Object(d.a)(n.root,t)},a)}}]),t}(u.a.Component);t.a=Object(f.a)(Object(h.b)(function(e){return{reduxTitle:e.title}}),Object(p.withStyles)(function(e){var t;return{root:(t={flex:"1 1 100%",maxWidth:"100%"},Object(s.a)(t,e.breakpoints.up("sm"),{paddingRight:1*e.spacing.unit}),Object(s.a)(t,e.breakpoints.up("lg"),{paddingLeft:1*e.spacing.unit,paddingRight:5*e.spacing.unit}),t)}}))(g)}},[[188,1,2]]]);
//# sourceMappingURL=main.b59f59a9.chunk.js.map