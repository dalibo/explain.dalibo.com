import{d as Ks,c as Ht,w as Us,A as Gs,G as Xs}from"./vue-CAlcOYJV.js";var R="top",W="bottom",z="right",V="left",pn="auto",se=[R,W,z,V],Pt="start",Zt="end",fi="clippingParents",vr="viewport",Bt="popper",ui="reference",Qn=se.reduce(function(e,t){return e.concat([t+"-"+Pt,t+"-"+Zt])},[]),gr=[].concat(se,[pn]).reduce(function(e,t){return e.concat([t,t+"-"+Pt,t+"-"+Zt])},[]),di="beforeRead",mi="read",hi="afterRead",pi="beforeMain",vi="main",gi="afterMain",_i="beforeWrite",bi="write",yi="afterWrite",Ei=[di,mi,hi,pi,vi,gi,_i,bi,yi];function rt(e){return e?(e.nodeName||"").toLowerCase():null}function Y(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function $t(e){var t=Y(e).Element;return e instanceof t||e instanceof Element}function K(e){var t=Y(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function _r(e){if(typeof ShadowRoot>"u")return!1;var t=Y(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function qs(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},a=t.attributes[n]||{},i=t.elements[n];!K(i)||!rt(i)||(Object.assign(i.style,r),Object.keys(a).forEach(function(s){var o=a[s];o===!1?i.removeAttribute(s):i.setAttribute(s,o===!0?"":o)}))})}function Qs(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var a=t.elements[r],i=t.attributes[r]||{},s=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),o=s.reduce(function(l,f){return l[f]="",l},{});!K(a)||!rt(a)||(Object.assign(a.style,o),Object.keys(i).forEach(function(l){a.removeAttribute(l)}))})}}const br={name:"applyStyles",enabled:!0,phase:"write",fn:qs,effect:Qs,requires:["computeStyles"]};function et(e){return e.split("-")[0]}var Dt=Math.max,on=Math.min,Jt=Math.round;function Zn(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Ai(){return!/^((?!chrome|android).)*safari/i.test(Zn())}function te(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),a=1,i=1;t&&K(e)&&(a=e.offsetWidth>0&&Jt(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Jt(r.height)/e.offsetHeight||1);var s=$t(e)?Y(e):window,o=s.visualViewport,l=!Ai()&&n,f=(r.left+(l&&o?o.offsetLeft:0))/a,c=(r.top+(l&&o?o.offsetTop:0))/i,u=r.width/a,h=r.height/i;return{width:u,height:h,top:c,right:f+u,bottom:c+h,left:f,x:f,y:c}}function yr(e){var t=te(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function wi(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&_r(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ot(e){return Y(e).getComputedStyle(e)}function Zs(e){return["table","td","th"].indexOf(rt(e))>=0}function Et(e){return(($t(e)?e.ownerDocument:e.document)||window.document).documentElement}function vn(e){return rt(e)==="html"?e:e.assignedSlot||e.parentNode||(_r(e)?e.host:null)||Et(e)}function na(e){return!K(e)||ot(e).position==="fixed"?null:e.offsetParent}function Js(e){var t=/firefox/i.test(Zn()),n=/Trident/i.test(Zn());if(n&&K(e)){var r=ot(e);if(r.position==="fixed")return null}var a=vn(e);for(_r(a)&&(a=a.host);K(a)&&["html","body"].indexOf(rt(a))<0;){var i=ot(a);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return a;a=a.parentNode}return null}function Se(e){for(var t=Y(e),n=na(e);n&&Zs(n)&&ot(n).position==="static";)n=na(n);return n&&(rt(n)==="html"||rt(n)==="body"&&ot(n).position==="static")?t:n||Js(e)||t}function Er(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ve(e,t,n){return Dt(e,on(t,n))}function to(e,t,n){var r=ve(e,t,n);return r>n?n:r}function Ti(){return{top:0,right:0,bottom:0,left:0}}function Oi(e){return Object.assign({},Ti(),e)}function Si(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var eo=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,Oi(typeof t!="number"?t:Si(t,se))};function no(e){var t,n=e.state,r=e.name,a=e.options,i=n.elements.arrow,s=n.modifiersData.popperOffsets,o=et(n.placement),l=Er(o),f=[V,z].indexOf(o)>=0,c=f?"height":"width";if(!(!i||!s)){var u=eo(a.padding,n),h=yr(i),p=l==="y"?R:V,O=l==="y"?W:z,y=n.rects.reference[c]+n.rects.reference[l]-s[l]-n.rects.popper[c],T=s[l]-n.rects.reference[l],m=Se(i),v=m?l==="y"?m.clientHeight||0:m.clientWidth||0:0,A=y/2-T/2,b=u[p],w=v-h[c]-u[O],S=v/2-h[c]/2+A,C=ve(b,S,w),I=l;n.modifiersData[r]=(t={},t[I]=C,t.centerOffset=C-S,t)}}function ro(e){var t=e.state,n=e.options,r=n.element,a=r===void 0?"[data-popper-arrow]":r;a!=null&&(typeof a=="string"&&(a=t.elements.popper.querySelector(a),!a)||wi(t.elements.popper,a)&&(t.elements.arrow=a))}const Ci={name:"arrow",enabled:!0,phase:"main",fn:no,effect:ro,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ee(e){return e.split("-")[1]}var ao={top:"auto",right:"auto",bottom:"auto",left:"auto"};function io(e,t){var n=e.x,r=e.y,a=t.devicePixelRatio||1;return{x:Jt(n*a)/a||0,y:Jt(r*a)/a||0}}function ra(e){var t,n=e.popper,r=e.popperRect,a=e.placement,i=e.variation,s=e.offsets,o=e.position,l=e.gpuAcceleration,f=e.adaptive,c=e.roundOffsets,u=e.isFixed,h=s.x,p=h===void 0?0:h,O=s.y,y=O===void 0?0:O,T=typeof c=="function"?c({x:p,y}):{x:p,y};p=T.x,y=T.y;var m=s.hasOwnProperty("x"),v=s.hasOwnProperty("y"),A=V,b=R,w=window;if(f){var S=Se(n),C="clientHeight",I="clientWidth";if(S===Y(n)&&(S=Et(n),ot(S).position!=="static"&&o==="absolute"&&(C="scrollHeight",I="scrollWidth")),S=S,a===R||(a===V||a===z)&&i===Zt){b=W;var N=u&&S===w&&w.visualViewport?w.visualViewport.height:S[C];y-=N-r.height,y*=l?1:-1}if(a===V||(a===R||a===W)&&i===Zt){A=z;var D=u&&S===w&&w.visualViewport?w.visualViewport.width:S[I];p-=D-r.width,p*=l?1:-1}}var $=Object.assign({position:o},f&&ao),q=c===!0?io({x:p,y},Y(n)):{x:p,y};if(p=q.x,y=q.y,l){var M;return Object.assign({},$,(M={},M[b]=v?"0":"",M[A]=m?"0":"",M.transform=(w.devicePixelRatio||1)<=1?"translate("+p+"px, "+y+"px)":"translate3d("+p+"px, "+y+"px, 0)",M))}return Object.assign({},$,(t={},t[b]=v?y+"px":"",t[A]=m?p+"px":"",t.transform="",t))}function so(e){var t=e.state,n=e.options,r=n.gpuAcceleration,a=r===void 0?!0:r,i=n.adaptive,s=i===void 0?!0:i,o=n.roundOffsets,l=o===void 0?!0:o,f={placement:et(t.placement),variation:ee(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,ra(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,ra(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Ar={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:so,data:{}};var je={passive:!0};function oo(e){var t=e.state,n=e.instance,r=e.options,a=r.scroll,i=a===void 0?!0:a,s=r.resize,o=s===void 0?!0:s,l=Y(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach(function(c){c.addEventListener("scroll",n.update,je)}),o&&l.addEventListener("resize",n.update,je),function(){i&&f.forEach(function(c){c.removeEventListener("scroll",n.update,je)}),o&&l.removeEventListener("resize",n.update,je)}}const wr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:oo,data:{}};var lo={left:"right",right:"left",bottom:"top",top:"bottom"};function en(e){return e.replace(/left|right|bottom|top/g,function(t){return lo[t]})}var co={start:"end",end:"start"};function aa(e){return e.replace(/start|end/g,function(t){return co[t]})}function Tr(e){var t=Y(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Or(e){return te(Et(e)).left+Tr(e).scrollLeft}function fo(e,t){var n=Y(e),r=Et(e),a=n.visualViewport,i=r.clientWidth,s=r.clientHeight,o=0,l=0;if(a){i=a.width,s=a.height;var f=Ai();(f||!f&&t==="fixed")&&(o=a.offsetLeft,l=a.offsetTop)}return{width:i,height:s,x:o+Or(e),y:l}}function uo(e){var t,n=Et(e),r=Tr(e),a=(t=e.ownerDocument)==null?void 0:t.body,i=Dt(n.scrollWidth,n.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),s=Dt(n.scrollHeight,n.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),o=-r.scrollLeft+Or(e),l=-r.scrollTop;return ot(a||n).direction==="rtl"&&(o+=Dt(n.clientWidth,a?a.clientWidth:0)-i),{width:i,height:s,x:o,y:l}}function Sr(e){var t=ot(e),n=t.overflow,r=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+a+r)}function Ni(e){return["html","body","#document"].indexOf(rt(e))>=0?e.ownerDocument.body:K(e)&&Sr(e)?e:Ni(vn(e))}function ge(e,t){var n;t===void 0&&(t=[]);var r=Ni(e),a=r===((n=e.ownerDocument)==null?void 0:n.body),i=Y(r),s=a?[i].concat(i.visualViewport||[],Sr(r)?r:[]):r,o=t.concat(s);return a?o:o.concat(ge(vn(s)))}function Jn(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function mo(e,t){var n=te(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function ia(e,t,n){return t===vr?Jn(fo(e,n)):$t(t)?mo(t,n):Jn(uo(Et(e)))}function ho(e){var t=ge(vn(e)),n=["absolute","fixed"].indexOf(ot(e).position)>=0,r=n&&K(e)?Se(e):e;return $t(r)?t.filter(function(a){return $t(a)&&wi(a,r)&&rt(a)!=="body"}):[]}function po(e,t,n,r){var a=t==="clippingParents"?ho(e):[].concat(t),i=[].concat(a,[n]),s=i[0],o=i.reduce(function(l,f){var c=ia(e,f,r);return l.top=Dt(c.top,l.top),l.right=on(c.right,l.right),l.bottom=on(c.bottom,l.bottom),l.left=Dt(c.left,l.left),l},ia(e,s,r));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function ki(e){var t=e.reference,n=e.element,r=e.placement,a=r?et(r):null,i=r?ee(r):null,s=t.x+t.width/2-n.width/2,o=t.y+t.height/2-n.height/2,l;switch(a){case R:l={x:s,y:t.y-n.height};break;case W:l={x:s,y:t.y+t.height};break;case z:l={x:t.x+t.width,y:o};break;case V:l={x:t.x-n.width,y:o};break;default:l={x:t.x,y:t.y}}var f=a?Er(a):null;if(f!=null){var c=f==="y"?"height":"width";switch(i){case Pt:l[f]=l[f]-(t[c]/2-n[c]/2);break;case Zt:l[f]=l[f]+(t[c]/2-n[c]/2);break}}return l}function ne(e,t){t===void 0&&(t={});var n=t,r=n.placement,a=r===void 0?e.placement:r,i=n.strategy,s=i===void 0?e.strategy:i,o=n.boundary,l=o===void 0?fi:o,f=n.rootBoundary,c=f===void 0?vr:f,u=n.elementContext,h=u===void 0?Bt:u,p=n.altBoundary,O=p===void 0?!1:p,y=n.padding,T=y===void 0?0:y,m=Oi(typeof T!="number"?T:Si(T,se)),v=h===Bt?ui:Bt,A=e.rects.popper,b=e.elements[O?v:h],w=po($t(b)?b:b.contextElement||Et(e.elements.popper),l,c,s),S=te(e.elements.reference),C=ki({reference:S,element:A,placement:a}),I=Jn(Object.assign({},A,C)),N=h===Bt?I:S,D={top:w.top-N.top+m.top,bottom:N.bottom-w.bottom+m.bottom,left:w.left-N.left+m.left,right:N.right-w.right+m.right},$=e.modifiersData.offset;if(h===Bt&&$){var q=$[a];Object.keys(D).forEach(function(M){var Tt=[z,W].indexOf(M)>=0?1:-1,Ot=[R,W].indexOf(M)>=0?"y":"x";D[M]+=q[Ot]*Tt})}return D}function vo(e,t){t===void 0&&(t={});var n=t,r=n.placement,a=n.boundary,i=n.rootBoundary,s=n.padding,o=n.flipVariations,l=n.allowedAutoPlacements,f=l===void 0?gr:l,c=ee(r),u=c?o?Qn:Qn.filter(function(O){return ee(O)===c}):se,h=u.filter(function(O){return f.indexOf(O)>=0});h.length===0&&(h=u);var p=h.reduce(function(O,y){return O[y]=ne(e,{placement:y,boundary:a,rootBoundary:i,padding:s})[et(y)],O},{});return Object.keys(p).sort(function(O,y){return p[O]-p[y]})}function go(e){if(et(e)===pn)return[];var t=en(e);return[aa(e),t,aa(t)]}function _o(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var a=n.mainAxis,i=a===void 0?!0:a,s=n.altAxis,o=s===void 0?!0:s,l=n.fallbackPlacements,f=n.padding,c=n.boundary,u=n.rootBoundary,h=n.altBoundary,p=n.flipVariations,O=p===void 0?!0:p,y=n.allowedAutoPlacements,T=t.options.placement,m=et(T),v=m===T,A=l||(v||!O?[en(T)]:go(T)),b=[T].concat(A).reduce(function(Ft,mt){return Ft.concat(et(mt)===pn?vo(t,{placement:mt,boundary:c,rootBoundary:u,padding:f,flipVariations:O,allowedAutoPlacements:y}):mt)},[]),w=t.rects.reference,S=t.rects.popper,C=new Map,I=!0,N=b[0],D=0;D<b.length;D++){var $=b[D],q=et($),M=ee($)===Pt,Tt=[R,W].indexOf(q)>=0,Ot=Tt?"width":"height",H=ne(t,{placement:$,boundary:c,rootBoundary:u,altBoundary:h,padding:f}),Q=Tt?M?z:V:M?W:R;w[Ot]>S[Ot]&&(Q=en(Q));var Pe=en(Q),St=[];if(i&&St.push(H[q]<=0),o&&St.push(H[Q]<=0,H[Pe]<=0),St.every(function(Ft){return Ft})){N=$,I=!1;break}C.set($,St)}if(I)for(var $e=O?3:1,Cn=function(mt){var de=b.find(function(Re){var Ct=C.get(Re);if(Ct)return Ct.slice(0,mt).every(function(Nn){return Nn})});if(de)return N=de,"break"},ue=$e;ue>0;ue--){var Me=Cn(ue);if(Me==="break")break}t.placement!==N&&(t.modifiersData[r]._skip=!0,t.placement=N,t.reset=!0)}}const xi={name:"flip",enabled:!0,phase:"main",fn:_o,requiresIfExists:["offset"],data:{_skip:!1}};function sa(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function oa(e){return[R,z,W,V].some(function(t){return e[t]>=0})}function bo(e){var t=e.state,n=e.name,r=t.rects.reference,a=t.rects.popper,i=t.modifiersData.preventOverflow,s=ne(t,{elementContext:"reference"}),o=ne(t,{altBoundary:!0}),l=sa(s,r),f=sa(o,a,i),c=oa(l),u=oa(f);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:f,isReferenceHidden:c,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":u})}const Li={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:bo};function yo(e,t,n){var r=et(e),a=[V,R].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,s=i[0],o=i[1];return s=s||0,o=(o||0)*a,[V,z].indexOf(r)>=0?{x:o,y:s}:{x:s,y:o}}function Eo(e){var t=e.state,n=e.options,r=e.name,a=n.offset,i=a===void 0?[0,0]:a,s=gr.reduce(function(c,u){return c[u]=yo(u,t.rects,i),c},{}),o=s[t.placement],l=o.x,f=o.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=f),t.modifiersData[r]=s}const Ii={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Eo};function Ao(e){var t=e.state,n=e.name;t.modifiersData[n]=ki({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}const Cr={name:"popperOffsets",enabled:!0,phase:"read",fn:Ao,data:{}};function wo(e){return e==="x"?"y":"x"}function To(e){var t=e.state,n=e.options,r=e.name,a=n.mainAxis,i=a===void 0?!0:a,s=n.altAxis,o=s===void 0?!1:s,l=n.boundary,f=n.rootBoundary,c=n.altBoundary,u=n.padding,h=n.tether,p=h===void 0?!0:h,O=n.tetherOffset,y=O===void 0?0:O,T=ne(t,{boundary:l,rootBoundary:f,padding:u,altBoundary:c}),m=et(t.placement),v=ee(t.placement),A=!v,b=Er(m),w=wo(b),S=t.modifiersData.popperOffsets,C=t.rects.reference,I=t.rects.popper,N=typeof y=="function"?y(Object.assign({},t.rects,{placement:t.placement})):y,D=typeof N=="number"?{mainAxis:N,altAxis:N}:Object.assign({mainAxis:0,altAxis:0},N),$=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,q={x:0,y:0};if(S){if(i){var M,Tt=b==="y"?R:V,Ot=b==="y"?W:z,H=b==="y"?"height":"width",Q=S[b],Pe=Q+T[Tt],St=Q-T[Ot],$e=p?-I[H]/2:0,Cn=v===Pt?C[H]:I[H],ue=v===Pt?-I[H]:-C[H],Me=t.elements.arrow,Ft=p&&Me?yr(Me):{width:0,height:0},mt=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Ti(),de=mt[Tt],Re=mt[Ot],Ct=ve(0,C[H],Ft[H]),Nn=A?C[H]/2-$e-Ct-de-D.mainAxis:Cn-Ct-de-D.mainAxis,Fs=A?-C[H]/2+$e+Ct+Re+D.mainAxis:ue+Ct+Re+D.mainAxis,kn=t.elements.arrow&&Se(t.elements.arrow),Hs=kn?b==="y"?kn.clientTop||0:kn.clientLeft||0:0,Ur=(M=$==null?void 0:$[b])!=null?M:0,Ws=Q+Nn-Ur-Hs,zs=Q+Fs-Ur,Gr=ve(p?on(Pe,Ws):Pe,Q,p?Dt(St,zs):St);S[b]=Gr,q[b]=Gr-Q}if(o){var Xr,Ys=b==="x"?R:V,Bs=b==="x"?W:z,Nt=S[w],Ve=w==="y"?"height":"width",qr=Nt+T[Ys],Qr=Nt-T[Bs],xn=[R,V].indexOf(m)!==-1,Zr=(Xr=$==null?void 0:$[w])!=null?Xr:0,Jr=xn?qr:Nt-C[Ve]-I[Ve]-Zr+D.altAxis,ta=xn?Nt+C[Ve]+I[Ve]-Zr-D.altAxis:Qr,ea=p&&xn?to(Jr,Nt,ta):ve(p?Jr:qr,Nt,p?ta:Qr);S[w]=ea,q[w]=ea-Nt}t.modifiersData[r]=q}}const Di={name:"preventOverflow",enabled:!0,phase:"main",fn:To,requiresIfExists:["offset"]};function Oo(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function So(e){return e===Y(e)||!K(e)?Tr(e):Oo(e)}function Co(e){var t=e.getBoundingClientRect(),n=Jt(t.width)/e.offsetWidth||1,r=Jt(t.height)/e.offsetHeight||1;return n!==1||r!==1}function No(e,t,n){n===void 0&&(n=!1);var r=K(t),a=K(t)&&Co(t),i=Et(t),s=te(e,a,n),o={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&((rt(t)!=="body"||Sr(i))&&(o=So(t)),K(t)?(l=te(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):i&&(l.x=Or(i))),{x:s.left+o.scrollLeft-l.x,y:s.top+o.scrollTop-l.y,width:s.width,height:s.height}}function ko(e){var t=new Map,n=new Set,r=[];e.forEach(function(i){t.set(i.name,i)});function a(i){n.add(i.name);var s=[].concat(i.requires||[],i.requiresIfExists||[]);s.forEach(function(o){if(!n.has(o)){var l=t.get(o);l&&a(l)}}),r.push(i)}return e.forEach(function(i){n.has(i.name)||a(i)}),r}function xo(e){var t=ko(e);return Ei.reduce(function(n,r){return n.concat(t.filter(function(a){return a.phase===r}))},[])}function Lo(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Io(e){var t=e.reduce(function(n,r){var a=n[r.name];return n[r.name]=a?Object.assign({},a,r,{options:Object.assign({},a.options,r.options),data:Object.assign({},a.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var la={placement:"bottom",modifiers:[],strategy:"absolute"};function ca(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function gn(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,a=t.defaultOptions,i=a===void 0?la:a;return function(o,l,f){f===void 0&&(f=i);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},la,i),modifiersData:{},elements:{reference:o,popper:l},attributes:{},styles:{}},u=[],h=!1,p={state:c,setOptions:function(m){var v=typeof m=="function"?m(c.options):m;y(),c.options=Object.assign({},i,c.options,v),c.scrollParents={reference:$t(o)?ge(o):o.contextElement?ge(o.contextElement):[],popper:ge(l)};var A=xo(Io([].concat(r,c.options.modifiers)));return c.orderedModifiers=A.filter(function(b){return b.enabled}),O(),p.update()},forceUpdate:function(){if(!h){var m=c.elements,v=m.reference,A=m.popper;if(ca(v,A)){c.rects={reference:No(v,Se(A),c.options.strategy==="fixed"),popper:yr(A)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(D){return c.modifiersData[D.name]=Object.assign({},D.data)});for(var b=0;b<c.orderedModifiers.length;b++){if(c.reset===!0){c.reset=!1,b=-1;continue}var w=c.orderedModifiers[b],S=w.fn,C=w.options,I=C===void 0?{}:C,N=w.name;typeof S=="function"&&(c=S({state:c,options:I,name:N,instance:p})||c)}}}},update:Lo(function(){return new Promise(function(T){p.forceUpdate(),T(c)})}),destroy:function(){y(),h=!0}};if(!ca(o,l))return p;p.setOptions(f).then(function(T){!h&&f.onFirstUpdate&&f.onFirstUpdate(T)});function O(){c.orderedModifiers.forEach(function(T){var m=T.name,v=T.options,A=v===void 0?{}:v,b=T.effect;if(typeof b=="function"){var w=b({state:c,name:m,instance:p,options:A}),S=function(){};u.push(w||S)}})}function y(){u.forEach(function(T){return T()}),u=[]}return p}}var Do=gn(),Po=[wr,Cr,Ar,br],$o=gn({defaultModifiers:Po}),Mo=[wr,Cr,Ar,br,Ii,xi,Di,Ci,Li],Nr=gn({defaultModifiers:Mo});const Pi=Object.freeze(Object.defineProperty({__proto__:null,afterMain:gi,afterRead:hi,afterWrite:yi,applyStyles:br,arrow:Ci,auto:pn,basePlacements:se,beforeMain:pi,beforeRead:di,beforeWrite:_i,bottom:W,clippingParents:fi,computeStyles:Ar,createPopper:Nr,createPopperBase:Do,createPopperLite:$o,detectOverflow:ne,end:Zt,eventListeners:wr,flip:xi,hide:Li,left:V,main:vi,modifierPhases:Ei,offset:Ii,placements:gr,popper:Bt,popperGenerator:gn,popperOffsets:Cr,preventOverflow:Di,read:mi,reference:ui,right:z,start:Pt,top:R,variationPlacements:Qn,viewport:vr,write:bi},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const ht=new Map,Ln={set(e,t,n){ht.has(e)||ht.set(e,new Map);const r=ht.get(e);if(!r.has(t)&&r.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`);return}r.set(t,n)},get(e,t){return ht.has(e)&&ht.get(e).get(t)||null},remove(e,t){if(!ht.has(e))return;const n=ht.get(e);n.delete(t),n.size===0&&ht.delete(e)}},Ro=1e6,Vo=1e3,tr="transitionend",$i=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(t,n)=>`#${CSS.escape(n)}`)),e),jo=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),Fo=e=>{do e+=Math.floor(Math.random()*Ro);while(document.getElementById(e));return e},Ho=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),a=Number.parseFloat(n);return!r&&!a?0:(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*Vo)},Mi=e=>{e.dispatchEvent(new Event(tr))},it=e=>!e||typeof e!="object"?!1:(typeof e.jquery<"u"&&(e=e[0]),typeof e.nodeType<"u"),pt=e=>it(e)?e.jquery?e[0]:e:typeof e=="string"&&e.length>0?document.querySelector($i(e)):null,oe=e=>{if(!it(e)||e.getClientRects().length===0)return!1;const t=getComputedStyle(e).getPropertyValue("visibility")==="visible",n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const r=e.closest("summary");if(r&&r.parentNode!==n||r===null)return!1}return t},vt=e=>!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains("disabled")?!0:typeof e.disabled<"u"?e.disabled:e.hasAttribute("disabled")&&e.getAttribute("disabled")!=="false",Ri=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode=="function"){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?Ri(e.parentNode):null},ln=()=>{},Ce=e=>{e.offsetHeight},Vi=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,In=[],Wo=e=>{document.readyState==="loading"?(In.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of In)t()}),In.push(e)):e()},U=()=>document.documentElement.dir==="rtl",X=e=>{Wo(()=>{const t=Vi();if(t){const n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}})},F=(e,t=[],n=e)=>typeof e=="function"?e(...t):n,ji=(e,t,n=!0)=>{if(!n){F(e);return}const a=Ho(t)+5;let i=!1;const s=({target:o})=>{o===t&&(i=!0,t.removeEventListener(tr,s),F(e))};t.addEventListener(tr,s),setTimeout(()=>{i||Mi(t)},a)},kr=(e,t,n,r)=>{const a=e.length;let i=e.indexOf(t);return i===-1?!n&&r?e[a-1]:e[0]:(i+=n?1:-1,r&&(i=(i+a)%a),e[Math.max(0,Math.min(i,a-1))])},zo=/[^.]*(?=\..*)\.|.*/,Yo=/\..*/,Bo=/::\d+$/,Dn={};let fa=1;const Fi={mouseenter:"mouseover",mouseleave:"mouseout"},Ko=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Hi(e,t){return t&&`${t}::${fa++}`||e.uidEvent||fa++}function Wi(e){const t=Hi(e);return e.uidEvent=t,Dn[t]=Dn[t]||{},Dn[t]}function Uo(e,t){return function n(r){return xr(r,{delegateTarget:e}),n.oneOff&&d.off(e,r.type,t),t.apply(e,[r])}}function Go(e,t,n){return function r(a){const i=e.querySelectorAll(t);for(let{target:s}=a;s&&s!==this;s=s.parentNode)for(const o of i)if(o===s)return xr(a,{delegateTarget:s}),r.oneOff&&d.off(e,a.type,t,n),n.apply(s,[a])}}function zi(e,t,n=null){return Object.values(e).find(r=>r.callable===t&&r.delegationSelector===n)}function Yi(e,t,n){const r=typeof t=="string",a=r?n:t||n;let i=Bi(e);return Ko.has(i)||(i=e),[r,a,i]}function ua(e,t,n,r,a){if(typeof t!="string"||!e)return;let[i,s,o]=Yi(t,n,r);t in Fi&&(s=(O=>function(y){if(!y.relatedTarget||y.relatedTarget!==y.delegateTarget&&!y.delegateTarget.contains(y.relatedTarget))return O.call(this,y)})(s));const l=Wi(e),f=l[o]||(l[o]={}),c=zi(f,s,i?n:null);if(c){c.oneOff=c.oneOff&&a;return}const u=Hi(s,t.replace(zo,"")),h=i?Go(e,n,s):Uo(e,s);h.delegationSelector=i?n:null,h.callable=s,h.oneOff=a,h.uidEvent=u,f[u]=h,e.addEventListener(o,h,i)}function er(e,t,n,r,a){const i=zi(t[n],r,a);i&&(e.removeEventListener(n,i,!!a),delete t[n][i.uidEvent])}function Xo(e,t,n,r){const a=t[n]||{};for(const[i,s]of Object.entries(a))i.includes(r)&&er(e,t,n,s.callable,s.delegationSelector)}function Bi(e){return e=e.replace(Yo,""),Fi[e]||e}const d={on(e,t,n,r){ua(e,t,n,r,!1)},one(e,t,n,r){ua(e,t,n,r,!0)},off(e,t,n,r){if(typeof t!="string"||!e)return;const[a,i,s]=Yi(t,n,r),o=s!==t,l=Wi(e),f=l[s]||{},c=t.startsWith(".");if(typeof i<"u"){if(!Object.keys(f).length)return;er(e,l,s,i,a?n:null);return}if(c)for(const u of Object.keys(l))Xo(e,l,u,t.slice(1));for(const[u,h]of Object.entries(f)){const p=u.replace(Bo,"");(!o||t.includes(p))&&er(e,l,s,h.callable,h.delegationSelector)}},trigger(e,t,n){if(typeof t!="string"||!e)return null;const r=Vi(),a=Bi(t),i=t!==a;let s=null,o=!0,l=!0,f=!1;i&&r&&(s=r.Event(t,n),r(e).trigger(s),o=!s.isPropagationStopped(),l=!s.isImmediatePropagationStopped(),f=s.isDefaultPrevented());const c=xr(new Event(t,{bubbles:o,cancelable:!0}),n);return f&&c.preventDefault(),l&&e.dispatchEvent(c),c.defaultPrevented&&s&&s.preventDefault(),c}};function xr(e,t={}){for(const[n,r]of Object.entries(t))try{e[n]=r}catch{Object.defineProperty(e,n,{configurable:!0,get(){return r}})}return e}function da(e){if(e==="true")return!0;if(e==="false")return!1;if(e===Number(e).toString())return Number(e);if(e===""||e==="null")return null;if(typeof e!="string")return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function Pn(e){return e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const st={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${Pn(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${Pn(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter(r=>r.startsWith("bs")&&!r.startsWith("bsConfig"));for(const r of n){let a=r.replace(/^bs/,"");a=a.charAt(0).toLowerCase()+a.slice(1,a.length),t[a]=da(e.dataset[r])}return t},getDataAttribute(e,t){return da(e.getAttribute(`data-bs-${Pn(t)}`))}};class Ne{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,n){const r=it(n)?st.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof r=="object"?r:{},...it(n)?st.getDataAttributes(n):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,n=this.constructor.DefaultType){for(const[r,a]of Object.entries(n)){const i=t[r],s=it(i)?"element":jo(i);if(!new RegExp(a).test(s))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${s}" but expected type "${a}".`)}}}const qo="5.3.2";class J extends Ne{constructor(t,n){super(),t=pt(t),t&&(this._element=t,this._config=this._getConfig(n),Ln.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Ln.remove(this._element,this.constructor.DATA_KEY),d.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,n,r=!0){ji(t,n,r)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Ln.get(pt(t),this.DATA_KEY)}static getOrCreateInstance(t,n={}){return this.getInstance(t)||new this(t,typeof n=="object"?n:null)}static get VERSION(){return qo}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const $n=e=>{let t=e.getAttribute("data-bs-target");if(!t||t==="#"){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&n!=="#"?$i(n.trim()):null}return t},E={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(n=>n.matches(t))},parents(e,t){const n=[];let r=e.parentNode.closest(t);for(;r;)n.push(r),r=r.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(t,e).filter(n=>!vt(n)&&oe(n))},getSelectorFromElement(e){const t=$n(e);return t&&E.findOne(t)?t:null},getElementFromSelector(e){const t=$n(e);return t?E.findOne(t):null},getMultipleElementsFromSelector(e){const t=$n(e);return t?E.find(t):[]}},_n=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,r=e.NAME;d.on(document,n,`[data-bs-dismiss="${r}"]`,function(a){if(["A","AREA"].includes(this.tagName)&&a.preventDefault(),vt(this))return;const i=E.getElementFromSelector(this)||this.closest(`.${r}`);e.getOrCreateInstance(i)[t]()})},Qo="alert",Zo="bs.alert",Ki=`.${Zo}`,Jo=`close${Ki}`,tl=`closed${Ki}`,el="fade",nl="show";class bn extends J{static get NAME(){return Qo}close(){if(d.trigger(this._element,Jo).defaultPrevented)return;this._element.classList.remove(nl);const n=this._element.classList.contains(el);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),d.trigger(this._element,tl),this.dispose()}static jQueryInterface(t){return this.each(function(){const n=bn.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}_n(bn,"close");X(bn);const rl="button",al="bs.button",il=`.${al}`,sl=".data-api",ol="active",ma='[data-bs-toggle="button"]',ll=`click${il}${sl}`;class yn extends J{static get NAME(){return rl}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(ol))}static jQueryInterface(t){return this.each(function(){const n=yn.getOrCreateInstance(this);t==="toggle"&&n[t]()})}}d.on(document,ll,ma,e=>{e.preventDefault();const t=e.target.closest(ma);yn.getOrCreateInstance(t).toggle()});X(yn);const cl="swipe",le=".bs.swipe",fl=`touchstart${le}`,ul=`touchmove${le}`,dl=`touchend${le}`,ml=`pointerdown${le}`,hl=`pointerup${le}`,pl="touch",vl="pen",gl="pointer-event",_l=40,bl={endCallback:null,leftCallback:null,rightCallback:null},yl={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class cn extends Ne{constructor(t,n){super(),this._element=t,!(!t||!cn.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return bl}static get DefaultType(){return yl}static get NAME(){return cl}dispose(){d.off(this._element,le)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),F(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=_l)return;const n=t/this._deltaX;this._deltaX=0,n&&F(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(d.on(this._element,ml,t=>this._start(t)),d.on(this._element,hl,t=>this._end(t)),this._element.classList.add(gl)):(d.on(this._element,fl,t=>this._start(t)),d.on(this._element,ul,t=>this._move(t)),d.on(this._element,dl,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===vl||t.pointerType===pl)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const El="carousel",Al="bs.carousel",At=`.${Al}`,Ui=".data-api",wl="ArrowLeft",Tl="ArrowRight",Ol=500,me="next",Wt="prev",Kt="left",nn="right",Sl=`slide${At}`,Mn=`slid${At}`,Cl=`keydown${At}`,Nl=`mouseenter${At}`,kl=`mouseleave${At}`,xl=`dragstart${At}`,Ll=`load${At}${Ui}`,Il=`click${At}${Ui}`,Gi="carousel",Fe="active",Dl="slide",Pl="carousel-item-end",$l="carousel-item-start",Ml="carousel-item-next",Rl="carousel-item-prev",Xi=".active",qi=".carousel-item",Vl=Xi+qi,jl=".carousel-item img",Fl=".carousel-indicators",Hl="[data-bs-slide], [data-bs-slide-to]",Wl='[data-bs-ride="carousel"]',zl={[wl]:nn,[Tl]:Kt},Yl={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Bl={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ke extends J{constructor(t,n){super(t,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=E.findOne(Fl,this._element),this._addEventListeners(),this._config.ride===Gi&&this.cycle()}static get Default(){return Yl}static get DefaultType(){return Bl}static get NAME(){return El}next(){this._slide(me)}nextWhenVisible(){!document.hidden&&oe(this._element)&&this.next()}prev(){this._slide(Wt)}pause(){this._isSliding&&Mi(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){d.one(this._element,Mn,()=>this.cycle());return}this.cycle()}}to(t){const n=this._getItems();if(t>n.length-1||t<0)return;if(this._isSliding){d.one(this._element,Mn,()=>this.to(t));return}const r=this._getItemIndex(this._getActive());if(r===t)return;const a=t>r?me:Wt;this._slide(a,n[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&d.on(this._element,Cl,t=>this._keydown(t)),this._config.pause==="hover"&&(d.on(this._element,Nl,()=>this.pause()),d.on(this._element,kl,()=>this._maybeEnableCycle())),this._config.touch&&cn.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const r of E.find(jl,this._element))d.on(r,xl,a=>a.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(Kt)),rightCallback:()=>this._slide(this._directionToOrder(nn)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Ol+this._config.interval))}};this._swipeHelper=new cn(this._element,n)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const n=zl[t.key];n&&(t.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const n=E.findOne(Xi,this._indicatorsElement);n.classList.remove(Fe),n.removeAttribute("aria-current");const r=E.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);r&&(r.classList.add(Fe),r.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const n=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(t,n=null){if(this._isSliding)return;const r=this._getActive(),a=t===me,i=n||kr(this._getItems(),r,a,this._config.wrap);if(i===r)return;const s=this._getItemIndex(i),o=p=>d.trigger(this._element,p,{relatedTarget:i,direction:this._orderToDirection(t),from:this._getItemIndex(r),to:s});if(o(Sl).defaultPrevented||!r||!i)return;const f=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(s),this._activeElement=i;const c=a?$l:Pl,u=a?Ml:Rl;i.classList.add(u),Ce(i),r.classList.add(c),i.classList.add(c);const h=()=>{i.classList.remove(c,u),i.classList.add(Fe),r.classList.remove(Fe,u,c),this._isSliding=!1,o(Mn)};this._queueCallback(h,r,this._isAnimated()),f&&this.cycle()}_isAnimated(){return this._element.classList.contains(Dl)}_getActive(){return E.findOne(Vl,this._element)}_getItems(){return E.find(qi,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return U()?t===Kt?Wt:me:t===Kt?me:Wt}_orderToDirection(t){return U()?t===Wt?Kt:nn:t===Wt?nn:Kt}static jQueryInterface(t){return this.each(function(){const n=ke.getOrCreateInstance(this,t);if(typeof t=="number"){n.to(t);return}if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}d.on(document,Il,Hl,function(e){const t=E.getElementFromSelector(this);if(!t||!t.classList.contains(Gi))return;e.preventDefault();const n=ke.getOrCreateInstance(t),r=this.getAttribute("data-bs-slide-to");if(r){n.to(r),n._maybeEnableCycle();return}if(st.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});d.on(window,Ll,()=>{const e=E.find(Wl);for(const t of e)ke.getOrCreateInstance(t)});X(ke);const Kl="collapse",Ul="bs.collapse",xe=`.${Ul}`,Gl=".data-api",Xl=`show${xe}`,ql=`shown${xe}`,Ql=`hide${xe}`,Zl=`hidden${xe}`,Jl=`click${xe}${Gl}`,Rn="show",Gt="collapse",He="collapsing",tc="collapsed",ec=`:scope .${Gt} .${Gt}`,nc="collapse-horizontal",rc="width",ac="height",ic=".collapse.show, .collapse.collapsing",nr='[data-bs-toggle="collapse"]',sc={parent:null,toggle:!0},oc={parent:"(null|element)",toggle:"boolean"};class ye extends J{constructor(t,n){super(t,n),this._isTransitioning=!1,this._triggerArray=[];const r=E.find(nr);for(const a of r){const i=E.getSelectorFromElement(a),s=E.find(i).filter(o=>o===this._element);i!==null&&s.length&&this._triggerArray.push(a)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return sc}static get DefaultType(){return oc}static get NAME(){return Kl}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(ic).filter(o=>o!==this._element).map(o=>ye.getOrCreateInstance(o,{toggle:!1}))),t.length&&t[0]._isTransitioning||d.trigger(this._element,Xl).defaultPrevented)return;for(const o of t)o.hide();const r=this._getDimension();this._element.classList.remove(Gt),this._element.classList.add(He),this._element.style[r]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const a=()=>{this._isTransitioning=!1,this._element.classList.remove(He),this._element.classList.add(Gt,Rn),this._element.style[r]="",d.trigger(this._element,ql)},s=`scroll${r[0].toUpperCase()+r.slice(1)}`;this._queueCallback(a,this._element,!0),this._element.style[r]=`${this._element[s]}px`}hide(){if(this._isTransitioning||!this._isShown()||d.trigger(this._element,Ql).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,Ce(this._element),this._element.classList.add(He),this._element.classList.remove(Gt,Rn);for(const a of this._triggerArray){const i=E.getElementFromSelector(a);i&&!this._isShown(i)&&this._addAriaAndCollapsedClass([a],!1)}this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(He),this._element.classList.add(Gt),d.trigger(this._element,Zl)};this._element.style[n]="",this._queueCallback(r,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Rn)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=pt(t.parent),t}_getDimension(){return this._element.classList.contains(nc)?rc:ac}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(nr);for(const n of t){const r=E.getElementFromSelector(n);r&&this._addAriaAndCollapsedClass([n],this._isShown(r))}}_getFirstLevelChildren(t){const n=E.find(ec,this._config.parent);return E.find(t,this._config.parent).filter(r=>!n.includes(r))}_addAriaAndCollapsedClass(t,n){if(t.length)for(const r of t)r.classList.toggle(tc,!n),r.setAttribute("aria-expanded",n)}static jQueryInterface(t){const n={};return typeof t=="string"&&/show|hide/.test(t)&&(n.toggle=!1),this.each(function(){const r=ye.getOrCreateInstance(this,n);if(typeof t=="string"){if(typeof r[t]>"u")throw new TypeError(`No method named "${t}"`);r[t]()}})}}d.on(document,Jl,nr,function(e){(e.target.tagName==="A"||e.delegateTarget&&e.delegateTarget.tagName==="A")&&e.preventDefault();for(const t of E.getMultipleElementsFromSelector(this))ye.getOrCreateInstance(t,{toggle:!1}).toggle()});X(ye);const ha="dropdown",lc="bs.dropdown",Vt=`.${lc}`,Lr=".data-api",cc="Escape",pa="Tab",fc="ArrowUp",va="ArrowDown",uc=2,dc=`hide${Vt}`,mc=`hidden${Vt}`,hc=`show${Vt}`,pc=`shown${Vt}`,Qi=`click${Vt}${Lr}`,Zi=`keydown${Vt}${Lr}`,vc=`keyup${Vt}${Lr}`,Ut="show",gc="dropup",_c="dropend",bc="dropstart",yc="dropup-center",Ec="dropdown-center",kt='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Ac=`${kt}.${Ut}`,rn=".dropdown-menu",wc=".navbar",Tc=".navbar-nav",Oc=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Sc=U()?"top-end":"top-start",Cc=U()?"top-start":"top-end",Nc=U()?"bottom-end":"bottom-start",kc=U()?"bottom-start":"bottom-end",xc=U()?"left-start":"right-start",Lc=U()?"right-start":"left-start",Ic="top",Dc="bottom",Pc={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},$c={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class nt extends J{constructor(t,n){super(t,n),this._popper=null,this._parent=this._element.parentNode,this._menu=E.next(this._element,rn)[0]||E.prev(this._element,rn)[0]||E.findOne(rn,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Pc}static get DefaultType(){return $c}static get NAME(){return ha}toggle(){return this._isShown()?this.hide():this.show()}show(){if(vt(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!d.trigger(this._element,hc,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(Tc))for(const r of[].concat(...document.body.children))d.on(r,"mouseover",ln);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ut),this._element.classList.add(Ut),d.trigger(this._element,pc,t)}}hide(){if(vt(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!d.trigger(this._element,dc,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))d.off(r,"mouseover",ln);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ut),this._element.classList.remove(Ut),this._element.setAttribute("aria-expanded","false"),st.removeDataAttribute(this._menu,"popper"),d.trigger(this._element,mc,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!it(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${ha.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof Pi>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:it(this._config.reference)?t=pt(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const n=this._getPopperConfig();this._popper=Nr(t,this._menu,n)}_isShown(){return this._menu.classList.contains(Ut)}_getPlacement(){const t=this._parent;if(t.classList.contains(_c))return xc;if(t.classList.contains(bc))return Lc;if(t.classList.contains(yc))return Ic;if(t.classList.contains(Ec))return Dc;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(gc)?n?Cc:Sc:n?kc:Nc}_detectNavbar(){return this._element.closest(wc)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(st.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...F(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:n}){const r=E.find(Oc,this._menu).filter(a=>oe(a));r.length&&kr(r,n,t===va,!r.includes(n)).focus()}static jQueryInterface(t){return this.each(function(){const n=nt.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}static clearMenus(t){if(t.button===uc||t.type==="keyup"&&t.key!==pa)return;const n=E.find(Ac);for(const r of n){const a=nt.getInstance(r);if(!a||a._config.autoClose===!1)continue;const i=t.composedPath(),s=i.includes(a._menu);if(i.includes(a._element)||a._config.autoClose==="inside"&&!s||a._config.autoClose==="outside"&&s||a._menu.contains(t.target)&&(t.type==="keyup"&&t.key===pa||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:a._element};t.type==="click"&&(o.clickEvent=t),a._completeHide(o)}}static dataApiKeydownHandler(t){const n=/input|textarea/i.test(t.target.tagName),r=t.key===cc,a=[fc,va].includes(t.key);if(!a&&!r||n&&!r)return;t.preventDefault();const i=this.matches(kt)?this:E.prev(this,kt)[0]||E.next(this,kt)[0]||E.findOne(kt,t.delegateTarget.parentNode),s=nt.getOrCreateInstance(i);if(a){t.stopPropagation(),s.show(),s._selectMenuItem(t);return}s._isShown()&&(t.stopPropagation(),s.hide(),i.focus())}}d.on(document,Zi,kt,nt.dataApiKeydownHandler);d.on(document,Zi,rn,nt.dataApiKeydownHandler);d.on(document,Qi,nt.clearMenus);d.on(document,vc,nt.clearMenus);d.on(document,Qi,kt,function(e){e.preventDefault(),nt.getOrCreateInstance(this).toggle()});X(nt);const Ji="backdrop",Mc="fade",ga="show",_a=`mousedown.bs.${Ji}`,Rc={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Vc={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class ts extends Ne{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Rc}static get DefaultType(){return Vc}static get NAME(){return Ji}show(t){if(!this._config.isVisible){F(t);return}this._append();const n=this._getElement();this._config.isAnimated&&Ce(n),n.classList.add(ga),this._emulateAnimation(()=>{F(t)})}hide(t){if(!this._config.isVisible){F(t);return}this._getElement().classList.remove(ga),this._emulateAnimation(()=>{this.dispose(),F(t)})}dispose(){this._isAppended&&(d.off(this._element,_a),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(Mc),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=pt(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),d.on(t,_a,()=>{F(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){ji(t,this._getElement(),this._config.isAnimated)}}const jc="focustrap",Fc="bs.focustrap",fn=`.${Fc}`,Hc=`focusin${fn}`,Wc=`keydown.tab${fn}`,zc="Tab",Yc="forward",ba="backward",Bc={autofocus:!0,trapElement:null},Kc={autofocus:"boolean",trapElement:"element"};class es extends Ne{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Bc}static get DefaultType(){return Kc}static get NAME(){return jc}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),d.off(document,fn),d.on(document,Hc,t=>this._handleFocusin(t)),d.on(document,Wc,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,d.off(document,fn))}_handleFocusin(t){const{trapElement:n}=this._config;if(t.target===document||t.target===n||n.contains(t.target))return;const r=E.focusableChildren(n);r.length===0?n.focus():this._lastTabNavDirection===ba?r[r.length-1].focus():r[0].focus()}_handleKeydown(t){t.key===zc&&(this._lastTabNavDirection=t.shiftKey?ba:Yc)}}const ya=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ea=".sticky-top",We="padding-right",Aa="margin-right";class rr{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,We,n=>n+t),this._setElementAttributes(ya,We,n=>n+t),this._setElementAttributes(Ea,Aa,n=>n-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,We),this._resetElementAttributes(ya,We),this._resetElementAttributes(Ea,Aa)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,n,r){const a=this.getWidth(),i=s=>{if(s!==this._element&&window.innerWidth>s.clientWidth+a)return;this._saveInitialAttribute(s,n);const o=window.getComputedStyle(s).getPropertyValue(n);s.style.setProperty(n,`${r(Number.parseFloat(o))}px`)};this._applyManipulationCallback(t,i)}_saveInitialAttribute(t,n){const r=t.style.getPropertyValue(n);r&&st.setDataAttribute(t,n,r)}_resetElementAttributes(t,n){const r=a=>{const i=st.getDataAttribute(a,n);if(i===null){a.style.removeProperty(n);return}st.removeDataAttribute(a,n),a.style.setProperty(n,i)};this._applyManipulationCallback(t,r)}_applyManipulationCallback(t,n){if(it(t)){n(t);return}for(const r of E.find(t,this._element))n(r)}}const Uc="modal",Gc="bs.modal",G=`.${Gc}`,Xc=".data-api",qc="Escape",Qc=`hide${G}`,Zc=`hidePrevented${G}`,ns=`hidden${G}`,rs=`show${G}`,Jc=`shown${G}`,tf=`resize${G}`,ef=`click.dismiss${G}`,nf=`mousedown.dismiss${G}`,rf=`keydown.dismiss${G}`,af=`click${G}${Xc}`,wa="modal-open",sf="fade",Ta="show",Vn="modal-static",of=".modal.show",lf=".modal-dialog",cf=".modal-body",ff='[data-bs-toggle="modal"]',uf={backdrop:!0,focus:!0,keyboard:!0},df={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class re extends J{constructor(t,n){super(t,n),this._dialog=E.findOne(lf,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new rr,this._addEventListeners()}static get Default(){return uf}static get DefaultType(){return df}static get NAME(){return Uc}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||d.trigger(this._element,rs,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(wa),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||d.trigger(this._element,Qc).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Ta),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){d.off(window,G),d.off(this._dialog,G),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new ts({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new es({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=E.findOne(cf,this._dialog);n&&(n.scrollTop=0),Ce(this._element),this._element.classList.add(Ta);const r=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,d.trigger(this._element,Jc,{relatedTarget:t})};this._queueCallback(r,this._dialog,this._isAnimated())}_addEventListeners(){d.on(this._element,rf,t=>{if(t.key===qc){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),d.on(window,tf,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),d.on(this._element,nf,t=>{d.one(this._element,ef,n=>{if(!(this._element!==t.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(wa),this._resetAdjustments(),this._scrollBar.reset(),d.trigger(this._element,ns)})}_isAnimated(){return this._element.classList.contains(sf)}_triggerBackdropTransition(){if(d.trigger(this._element,Zc).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,r=this._element.style.overflowY;r==="hidden"||this._element.classList.contains(Vn)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(Vn),this._queueCallback(()=>{this._element.classList.remove(Vn),this._queueCallback(()=>{this._element.style.overflowY=r},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),r=n>0;if(r&&!t){const a=U()?"paddingLeft":"paddingRight";this._element.style[a]=`${n}px`}if(!r&&t){const a=U()?"paddingRight":"paddingLeft";this._element.style[a]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,n){return this.each(function(){const r=re.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof r[t]>"u")throw new TypeError(`No method named "${t}"`);r[t](n)}})}}d.on(document,af,ff,function(e){const t=E.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),d.one(t,rs,a=>{a.defaultPrevented||d.one(t,ns,()=>{oe(this)&&this.focus()})});const n=E.findOne(of);n&&re.getInstance(n).hide(),re.getOrCreateInstance(t).toggle(this)});_n(re);X(re);const mf="offcanvas",hf="bs.offcanvas",ut=`.${hf}`,as=".data-api",pf=`load${ut}${as}`,vf="Escape",Oa="show",Sa="showing",Ca="hiding",gf="offcanvas-backdrop",is=".offcanvas.show",_f=`show${ut}`,bf=`shown${ut}`,yf=`hide${ut}`,Na=`hidePrevented${ut}`,ss=`hidden${ut}`,Ef=`resize${ut}`,Af=`click${ut}${as}`,wf=`keydown.dismiss${ut}`,Tf='[data-bs-toggle="offcanvas"]',Of={backdrop:!0,keyboard:!0,scroll:!1},Sf={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class gt extends J{constructor(t,n){super(t,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Of}static get DefaultType(){return Sf}static get NAME(){return mf}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||d.trigger(this._element,_f,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new rr().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Sa);const r=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Oa),this._element.classList.remove(Sa),d.trigger(this._element,bf,{relatedTarget:t})};this._queueCallback(r,this._element,!0)}hide(){if(!this._isShown||d.trigger(this._element,yf).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Ca),this._backdrop.hide();const n=()=>{this._element.classList.remove(Oa,Ca),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new rr().reset(),d.trigger(this._element,ss)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){d.trigger(this._element,Na);return}this.hide()},n=!!this._config.backdrop;return new ts({className:gf,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?t:null})}_initializeFocusTrap(){return new es({trapElement:this._element})}_addEventListeners(){d.on(this._element,wf,t=>{if(t.key===vf){if(this._config.keyboard){this.hide();return}d.trigger(this._element,Na)}})}static jQueryInterface(t){return this.each(function(){const n=gt.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}d.on(document,Af,Tf,function(e){const t=E.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),vt(this))return;d.one(t,ss,()=>{oe(this)&&this.focus()});const n=E.findOne(is);n&&n!==t&&gt.getInstance(n).hide(),gt.getOrCreateInstance(t).toggle(this)});d.on(window,pf,()=>{for(const e of E.find(is))gt.getOrCreateInstance(e).show()});d.on(window,Ef,()=>{for(const e of E.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(e).position!=="fixed"&&gt.getOrCreateInstance(e).hide()});_n(gt);X(gt);const Cf=/^aria-[\w-]*$/i,os={"*":["class","dir","id","lang","role",Cf],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Nf=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),kf=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,xf=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?Nf.has(n)?!!kf.test(e.nodeValue):!0:t.filter(r=>r instanceof RegExp).some(r=>r.test(n))};function Lf(e,t,n){if(!e.length)return e;if(n&&typeof n=="function")return n(e);const a=new window.DOMParser().parseFromString(e,"text/html"),i=[].concat(...a.body.querySelectorAll("*"));for(const s of i){const o=s.nodeName.toLowerCase();if(!Object.keys(t).includes(o)){s.remove();continue}const l=[].concat(...s.attributes),f=[].concat(t["*"]||[],t[o]||[]);for(const c of l)xf(c,f)||s.removeAttribute(c.nodeName)}return a.body.innerHTML}const If="TemplateFactory",Df={allowList:os,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Pf={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},$f={entry:"(string|element|function|null)",selector:"(string|element)"};class Mf extends Ne{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Df}static get DefaultType(){return Pf}static get NAME(){return If}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[a,i]of Object.entries(this._config.content))this._setContent(t,i,a);const n=t.children[0],r=this._resolvePossibleFunction(this._config.extraClass);return r&&n.classList.add(...r.split(" ")),n}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[n,r]of Object.entries(t))super._typeCheckConfig({selector:n,entry:r},$f)}_setContent(t,n,r){const a=E.findOne(r,t);if(a){if(n=this._resolvePossibleFunction(n),!n){a.remove();return}if(it(n)){this._putElementInTemplate(pt(n),a);return}if(this._config.html){a.innerHTML=this._maybeSanitize(n);return}a.textContent=n}}_maybeSanitize(t){return this._config.sanitize?Lf(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return F(t,[this])}_putElementInTemplate(t,n){if(this._config.html){n.innerHTML="",n.append(t);return}n.textContent=t.textContent}}const Rf="tooltip",Vf=new Set(["sanitize","allowList","sanitizeFn"]),jn="fade",jf="modal",ze="show",Ff=".tooltip-inner",ka=`.${jf}`,xa="hide.bs.modal",he="hover",Fn="focus",Hf="click",Wf="manual",zf="hide",Yf="hidden",Bf="show",Kf="shown",Uf="inserted",Gf="click",Xf="focusin",qf="focusout",Qf="mouseenter",Zf="mouseleave",Jf={AUTO:"auto",TOP:"top",RIGHT:U()?"left":"right",BOTTOM:"bottom",LEFT:U()?"right":"left"},tu={allowList:os,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},eu={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class ce extends J{constructor(t,n){if(typeof Pi>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return tu}static get DefaultType(){return eu}static get NAME(){return Rf}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),d.off(this._element.closest(ka),xa,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=d.trigger(this._element,this.constructor.eventName(Bf)),r=(Ri(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!r)return;this._disposePopper();const a=this._getTipElement();this._element.setAttribute("aria-describedby",a.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(a),d.trigger(this._element,this.constructor.eventName(Uf))),this._popper=this._createPopper(a),a.classList.add(ze),"ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))d.on(o,"mouseover",ln);const s=()=>{d.trigger(this._element,this.constructor.eventName(Kf)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(s,this.tip,this._isAnimated())}hide(){if(!this._isShown()||d.trigger(this._element,this.constructor.eventName(zf)).defaultPrevented)return;if(this._getTipElement().classList.remove(ze),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))d.off(a,"mouseover",ln);this._activeTrigger[Hf]=!1,this._activeTrigger[Fn]=!1,this._activeTrigger[he]=!1,this._isHovered=null;const r=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),d.trigger(this._element,this.constructor.eventName(Yf)))};this._queueCallback(r,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const n=this._getTemplateFactory(t).toHtml();if(!n)return null;n.classList.remove(jn,ze),n.classList.add(`bs-${this.constructor.NAME}-auto`);const r=Fo(this.constructor.NAME).toString();return n.setAttribute("id",r),this._isAnimated()&&n.classList.add(jn),n}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Mf({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Ff]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(jn)}_isShown(){return this.tip&&this.tip.classList.contains(ze)}_createPopper(t){const n=F(this._config.placement,[this,t,this._element]),r=Jf[n.toUpperCase()];return Nr(this._element,t,this._getPopperConfig(r))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_resolvePossibleFunction(t){return F(t,[this._element])}_getPopperConfig(t){const n={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:r=>{this._getTipElement().setAttribute("data-popper-placement",r.state.placement)}}]};return{...n,...F(this._config.popperConfig,[n])}}_setListeners(){const t=this._config.trigger.split(" ");for(const n of t)if(n==="click")d.on(this._element,this.constructor.eventName(Gf),this._config.selector,r=>{this._initializeOnDelegatedTarget(r).toggle()});else if(n!==Wf){const r=n===he?this.constructor.eventName(Qf):this.constructor.eventName(Xf),a=n===he?this.constructor.eventName(Zf):this.constructor.eventName(qf);d.on(this._element,r,this._config.selector,i=>{const s=this._initializeOnDelegatedTarget(i);s._activeTrigger[i.type==="focusin"?Fn:he]=!0,s._enter()}),d.on(this._element,a,this._config.selector,i=>{const s=this._initializeOnDelegatedTarget(i);s._activeTrigger[i.type==="focusout"?Fn:he]=s._element.contains(i.relatedTarget),s._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},d.on(this._element.closest(ka),xa,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,n){clearTimeout(this._timeout),this._timeout=setTimeout(t,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const n=st.getDataAttributes(this._element);for(const r of Object.keys(n))Vf.has(r)&&delete n[r];return t={...n,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:pt(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[n,r]of Object.entries(this._config))this.constructor.Default[n]!==r&&(t[n]=r);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const n=ce.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}X(ce);const nu="popover",ru=".popover-header",au=".popover-body",iu={...ce.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},su={...ce.DefaultType,content:"(null|string|element|function)"};class Ir extends ce{static get Default(){return iu}static get DefaultType(){return su}static get NAME(){return nu}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[ru]:this._getTitle(),[au]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const n=Ir.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}X(Ir);const ou="scrollspy",lu="bs.scrollspy",Dr=`.${lu}`,cu=".data-api",fu=`activate${Dr}`,La=`click${Dr}`,uu=`load${Dr}${cu}`,du="dropdown-item",zt="active",mu='[data-bs-spy="scroll"]',Hn="[href]",hu=".nav, .list-group",Ia=".nav-link",pu=".nav-item",vu=".list-group-item",gu=`${Ia}, ${pu} > ${Ia}, ${vu}`,_u=".dropdown",bu=".dropdown-toggle",yu={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Eu={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class En extends J{constructor(t,n){super(t,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return yu}static get DefaultType(){return Eu}static get NAME(){return ou}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=pt(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(n=>Number.parseFloat(n))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(d.off(this._config.target,La),d.on(this._config.target,La,Hn,t=>{const n=this._observableSections.get(t.target.hash);if(n){t.preventDefault();const r=this._rootElement||window,a=n.offsetTop-this._element.offsetTop;if(r.scrollTo){r.scrollTo({top:a,behavior:"smooth"});return}r.scrollTop=a}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),t)}_observerCallback(t){const n=s=>this._targetLinks.get(`#${s.target.id}`),r=s=>{this._previousScrollData.visibleEntryTop=s.target.offsetTop,this._process(n(s))},a=(this._rootElement||document.documentElement).scrollTop,i=a>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=a;for(const s of t){if(!s.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(s));continue}const o=s.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&o){if(r(s),!a)return;continue}!i&&!o&&r(s)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=E.find(Hn,this._config.target);for(const n of t){if(!n.hash||vt(n))continue;const r=E.findOne(decodeURI(n.hash),this._element);oe(r)&&(this._targetLinks.set(decodeURI(n.hash),n),this._observableSections.set(n.hash,r))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(zt),this._activateParents(t),d.trigger(this._element,fu,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(du)){E.findOne(bu,t.closest(_u)).classList.add(zt);return}for(const n of E.parents(t,hu))for(const r of E.prev(n,gu))r.classList.add(zt)}_clearActiveClass(t){t.classList.remove(zt);const n=E.find(`${Hn}.${zt}`,t);for(const r of n)r.classList.remove(zt)}static jQueryInterface(t){return this.each(function(){const n=En.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}d.on(window,uu,()=>{for(const e of E.find(mu))En.getOrCreateInstance(e)});X(En);const Au="tab",wu="bs.tab",jt=`.${wu}`,Tu=`hide${jt}`,Ou=`hidden${jt}`,Su=`show${jt}`,Cu=`shown${jt}`,Nu=`click${jt}`,ku=`keydown${jt}`,xu=`load${jt}`,Lu="ArrowLeft",Da="ArrowRight",Iu="ArrowUp",Pa="ArrowDown",Wn="Home",$a="End",xt="active",Ma="fade",zn="show",Du="dropdown",ls=".dropdown-toggle",Pu=".dropdown-menu",Yn=`:not(${ls})`,$u='.list-group, .nav, [role="tablist"]',Mu=".nav-item, .list-group-item",Ru=`.nav-link${Yn}, .list-group-item${Yn}, [role="tab"]${Yn}`,cs='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Bn=`${Ru}, ${cs}`,Vu=`.${xt}[data-bs-toggle="tab"], .${xt}[data-bs-toggle="pill"], .${xt}[data-bs-toggle="list"]`;class ae extends J{constructor(t){super(t),this._parent=this._element.closest($u),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),d.on(this._element,ku,n=>this._keydown(n)))}static get NAME(){return Au}show(){const t=this._element;if(this._elemIsActive(t))return;const n=this._getActiveElem(),r=n?d.trigger(n,Tu,{relatedTarget:t}):null;d.trigger(t,Su,{relatedTarget:n}).defaultPrevented||r&&r.defaultPrevented||(this._deactivate(n,t),this._activate(t,n))}_activate(t,n){if(!t)return;t.classList.add(xt),this._activate(E.getElementFromSelector(t));const r=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(zn);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),d.trigger(t,Cu,{relatedTarget:n})};this._queueCallback(r,t,t.classList.contains(Ma))}_deactivate(t,n){if(!t)return;t.classList.remove(xt),t.blur(),this._deactivate(E.getElementFromSelector(t));const r=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(zn);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),d.trigger(t,Ou,{relatedTarget:n})};this._queueCallback(r,t,t.classList.contains(Ma))}_keydown(t){if(![Lu,Da,Iu,Pa,Wn,$a].includes(t.key))return;t.stopPropagation(),t.preventDefault();const n=this._getChildren().filter(a=>!vt(a));let r;if([Wn,$a].includes(t.key))r=n[t.key===Wn?0:n.length-1];else{const a=[Da,Pa].includes(t.key);r=kr(n,t.target,a,!0)}r&&(r.focus({preventScroll:!0}),ae.getOrCreateInstance(r).show())}_getChildren(){return E.find(Bn,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,n){this._setAttributeIfNotExists(t,"role","tablist");for(const r of n)this._setInitialAttributesOnChild(r)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const n=this._elemIsActive(t),r=this._getOuterElement(t);t.setAttribute("aria-selected",n),r!==t&&this._setAttributeIfNotExists(r,"role","presentation"),n||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const n=E.getElementFromSelector(t);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,n){const r=this._getOuterElement(t);if(!r.classList.contains(Du))return;const a=(i,s)=>{const o=E.findOne(i,r);o&&o.classList.toggle(s,n)};a(ls,xt),a(Pu,zn),r.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(t,n,r){t.hasAttribute(n)||t.setAttribute(n,r)}_elemIsActive(t){return t.classList.contains(xt)}_getInnerElement(t){return t.matches(Bn)?t:E.findOne(Bn,t)}_getOuterElement(t){return t.closest(Mu)||t}static jQueryInterface(t){return this.each(function(){const n=ae.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}d.on(document,Nu,cs,function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),!vt(this)&&ae.getOrCreateInstance(this).show()});d.on(window,xu,()=>{for(const e of E.find(Vu))ae.getOrCreateInstance(e)});X(ae);const ju="toast",Fu="bs.toast",wt=`.${Fu}`,Hu=`mouseover${wt}`,Wu=`mouseout${wt}`,zu=`focusin${wt}`,Yu=`focusout${wt}`,Bu=`hide${wt}`,Ku=`hidden${wt}`,Uu=`show${wt}`,Gu=`shown${wt}`,Xu="fade",Ra="hide",Ye="show",Be="showing",qu={animation:"boolean",autohide:"boolean",delay:"number"},Qu={animation:!0,autohide:!0,delay:5e3};class An extends J{constructor(t,n){super(t,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Qu}static get DefaultType(){return qu}static get NAME(){return ju}show(){if(d.trigger(this._element,Uu).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Xu);const n=()=>{this._element.classList.remove(Be),d.trigger(this._element,Gu),this._maybeScheduleHide()};this._element.classList.remove(Ra),Ce(this._element),this._element.classList.add(Ye,Be),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||d.trigger(this._element,Bu).defaultPrevented)return;const n=()=>{this._element.classList.add(Ra),this._element.classList.remove(Be,Ye),d.trigger(this._element,Ku)};this._element.classList.add(Be),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ye),super.dispose()}isShown(){return this._element.classList.contains(Ye)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,n){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const r=t.relatedTarget;this._element===r||this._element.contains(r)||this._maybeScheduleHide()}_setListeners(){d.on(this._element,Hu,t=>this._onInteraction(t,!0)),d.on(this._element,Wu,t=>this._onInteraction(t,!1)),d.on(this._element,zu,t=>this._onInteraction(t,!0)),d.on(this._element,Yu,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const n=An.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}_n(An);X(An);function Va(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Va(Object(n),!0).forEach(function(r){P(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Va(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function un(e){"@babel/helpers - typeof";return un=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},un(e)}function Zu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ju(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function td(e,t,n){return t&&Ju(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pr(e,t){return nd(e)||ad(e,t)||fs(e,t)||sd()}function Le(e){return ed(e)||rd(e)||fs(e)||id()}function ed(e){if(Array.isArray(e))return ar(e)}function nd(e){if(Array.isArray(e))return e}function rd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ad(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,s,o;try{for(n=n.call(e);!(a=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,o=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw o}}return r}}function fs(e,t){if(e){if(typeof e=="string")return ar(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ar(e,t)}}function ar(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function id(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ja=function(){},$r={},us={},ds=null,ms={mark:ja,measure:ja};try{typeof window<"u"&&($r=window),typeof document<"u"&&(us=document),typeof MutationObserver<"u"&&(ds=MutationObserver),typeof performance<"u"&&(ms=performance)}catch{}var od=$r.navigator||{},Fa=od.userAgent,Ha=Fa===void 0?"":Fa,_t=$r,x=us,Wa=ds,Ke=ms;_t.document;var dt=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",hs=~Ha.indexOf("MSIE")||~Ha.indexOf("Trident/"),Ue,Ge,Xe,qe,Qe,lt="___FONT_AWESOME___",ir=16,ps="fa",vs="svg-inline--fa",Mt="data-fa-i2svg",sr="data-fa-pseudo-element",ld="data-fa-pseudo-element-pending",Mr="data-prefix",Rr="data-icon",za="fontawesome-i2svg",cd="async",fd=["HTML","HEAD","STYLE","SCRIPT"],gs=function(){try{return!0}catch{return!1}}(),k="classic",L="sharp",Vr=[k,L];function Ie(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[k]}})}var Ee=Ie((Ue={},P(Ue,k,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),P(Ue,L,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Ue)),Ae=Ie((Ge={},P(Ge,k,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),P(Ge,L,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ge)),we=Ie((Xe={},P(Xe,k,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),P(Xe,L,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Xe)),ud=Ie((qe={},P(qe,k,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),P(qe,L,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),qe)),dd=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,_s="fa-layers-text",md=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,hd=Ie((Qe={},P(Qe,k,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),P(Qe,L,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Qe)),bs=[1,2,3,4,5,6,7,8,9,10],pd=bs.concat([11,12,13,14,15,16,17,18,19,20]),vd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Lt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Te=new Set;Object.keys(Ae[k]).map(Te.add.bind(Te));Object.keys(Ae[L]).map(Te.add.bind(Te));var gd=[].concat(Vr,Le(Te),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Lt.GROUP,Lt.SWAP_OPACITY,Lt.PRIMARY,Lt.SECONDARY]).concat(bs.map(function(e){return"".concat(e,"x")})).concat(pd.map(function(e){return"w-".concat(e)})),_e=_t.FontAwesomeConfig||{};function _d(e){var t=x.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function bd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(x&&typeof x.querySelector=="function"){var yd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];yd.forEach(function(e){var t=Pr(e,2),n=t[0],r=t[1],a=bd(_d(n));a!=null&&(_e[r]=a)})}var ys={styleDefault:"solid",familyDefault:"classic",cssPrefix:ps,replacementClass:vs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};_e.familyPrefix&&(_e.cssPrefix=_e.familyPrefix);var ie=g(g({},ys),_e);ie.autoReplaceSvg||(ie.observeMutations=!1);var _={};Object.keys(ys).forEach(function(e){Object.defineProperty(_,e,{enumerable:!0,set:function(n){ie[e]=n,be.forEach(function(r){return r(_)})},get:function(){return ie[e]}})});Object.defineProperty(_,"familyPrefix",{enumerable:!0,set:function(t){ie.cssPrefix=t,be.forEach(function(n){return n(_)})},get:function(){return ie.cssPrefix}});_t.FontAwesomeConfig=_;var be=[];function Ed(e){return be.push(e),function(){be.splice(be.indexOf(e),1)}}var Yt=ir,tt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ad(e){if(!(!e||!dt)){var t=x.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=x.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return x.head.insertBefore(t,r),e}}var wd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Oe(){for(var e=12,t="";e-- >0;)t+=wd[Math.random()*62|0];return t}function fe(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function jr(e){return e.classList?fe(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Es(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Td(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Es(e[n]),'" ')},"").trim()}function wn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Fr(e){return e.size!==tt.size||e.x!==tt.x||e.y!==tt.y||e.rotate!==tt.rotate||e.flipX||e.flipY}function Od(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Sd(e){var t=e.transform,n=e.width,r=n===void 0?ir:n,a=e.height,i=a===void 0?ir:a,s="";return hs?s+="translate(".concat(t.x/Yt-r/2,"em, ").concat(t.y/Yt-i/2,"em) "):s+="translate(calc(-50% + ".concat(t.x/Yt,"em), calc(-50% + ").concat(t.y/Yt,"em)) "),s+="scale(".concat(t.size/Yt*(t.flipX?-1:1),", ").concat(t.size/Yt*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var Cd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function As(){var e=ps,t=vs,n=_.cssPrefix,r=_.replacementClass,a=Cd;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}var Ya=!1;function Kn(){_.autoAddCss&&!Ya&&(Ad(As()),Ya=!0)}var Nd={mixout:function(){return{dom:{css:As,insertCss:Kn}}},hooks:function(){return{beforeDOMElementCreation:function(){Kn()},beforeI2svg:function(){Kn()}}}},ct=_t||{};ct[lt]||(ct[lt]={});ct[lt].styles||(ct[lt].styles={});ct[lt].hooks||(ct[lt].hooks={});ct[lt].shims||(ct[lt].shims=[]);var Z=ct[lt],ws=[],kd=function e(){x.removeEventListener("DOMContentLoaded",e),dn=1,ws.map(function(t){return t()})},dn=!1;dt&&(dn=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),dn||x.addEventListener("DOMContentLoaded",kd));function xd(e){dt&&(dn?setTimeout(e,0):ws.push(e))}function De(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Es(e):"<".concat(t," ").concat(Td(r),">").concat(i.map(De).join(""),"</").concat(t,">")}function Ba(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Un=function(t,n,r,a){var i=Object.keys(t),s=i.length,o=n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<s;l++)f=i[l],c=o(c,t[f],f,t);return c};function Ld(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function or(e){var t=Ld(e);return t.length===1?t[0].toString(16):null}function Id(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ka(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function lr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ka(t);typeof Z.hooks.addPack=="function"&&!a?Z.hooks.addPack(e,Ka(t)):Z.styles[e]=g(g({},Z.styles[e]||{}),i),e==="fas"&&lr("fa",t)}var Ze,Je,tn,Xt=Z.styles,Dd=Z.shims,Pd=(Ze={},P(Ze,k,Object.values(we[k])),P(Ze,L,Object.values(we[L])),Ze),Hr=null,Ts={},Os={},Ss={},Cs={},Ns={},$d=(Je={},P(Je,k,Object.keys(Ee[k])),P(Je,L,Object.keys(Ee[L])),Je);function Md(e){return~gd.indexOf(e)}function Rd(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Md(a)?a:null}var ks=function(){var t=function(i){return Un(Xt,function(s,o,l){return s[l]=Un(o,i,{}),s},{})};Ts=t(function(a,i,s){if(i[3]&&(a[i[3]]=s),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){a[l.toString(16)]=s})}return a}),Os=t(function(a,i,s){if(a[s]=s,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){a[l]=s})}return a}),Ns=t(function(a,i,s){var o=i[2];return a[s]=s,o.forEach(function(l){a[l]=s}),a});var n="far"in Xt||_.autoFetchSvg,r=Un(Dd,function(a,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});Ss=r.names,Cs=r.unicodes,Hr=Tn(_.styleDefault,{family:_.familyDefault})};Ed(function(e){Hr=Tn(e.styleDefault,{family:_.familyDefault})});ks();function Wr(e,t){return(Ts[e]||{})[t]}function Vd(e,t){return(Os[e]||{})[t]}function It(e,t){return(Ns[e]||{})[t]}function xs(e){return Ss[e]||{prefix:null,iconName:null}}function jd(e){var t=Cs[e],n=Wr("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function bt(){return Hr}var zr=function(){return{prefix:null,iconName:null,rest:[]}};function Tn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?k:n,a=Ee[r][e],i=Ae[r][e]||Ae[r][a],s=e in Z.styles?e:null;return i||s||null}var Ua=(tn={},P(tn,k,Object.keys(we[k])),P(tn,L,Object.keys(we[L])),tn);function On(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},P(t,k,"".concat(_.cssPrefix,"-").concat(k)),P(t,L,"".concat(_.cssPrefix,"-").concat(L)),t),s=null,o=k;(e.includes(i[k])||e.some(function(f){return Ua[k].includes(f)}))&&(o=k),(e.includes(i[L])||e.some(function(f){return Ua[L].includes(f)}))&&(o=L);var l=e.reduce(function(f,c){var u=Rd(_.cssPrefix,c);if(Xt[c]?(c=Pd[o].includes(c)?ud[o][c]:c,s=c,f.prefix=c):$d[o].indexOf(c)>-1?(s=c,f.prefix=Tn(c,{family:o})):u?f.iconName=u:c!==_.replacementClass&&c!==i[k]&&c!==i[L]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var h=s==="fa"?xs(f.iconName):{},p=It(f.prefix,f.iconName);h.prefix&&(s=null),f.iconName=h.iconName||p||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!Xt.far&&Xt.fas&&!_.autoFetchSvg&&(f.prefix="fas")}return f},zr());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===L&&(Xt.fass||_.autoFetchSvg)&&(l.prefix="fass",l.iconName=It(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=bt()||"fas"),l}var Fd=function(){function e(){Zu(this,e),this.definitions={}}return td(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=g(g({},n.definitions[o]||{}),s[o]),lr(o,s[o]);var l=we[k][o];l&&lr(l,s[o]),ks()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var s=a[i],o=s.prefix,l=s.iconName,f=s.icon,c=f[2];n[o]||(n[o]={}),c.length>0&&c.forEach(function(u){typeof u=="string"&&(n[o][u]=f)}),n[o][l]=f}),n}}]),e}(),Ga=[],qt={},Qt={},Hd=Object.keys(Qt);function Wd(e,t){var n=t.mixoutsTo;return Ga=e,qt={},Object.keys(Qt).forEach(function(r){Hd.indexOf(r)===-1&&delete Qt[r]}),Ga.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(s){typeof a[s]=="function"&&(n[s]=a[s]),un(a[s])==="object"&&Object.keys(a[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=a[s][o]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(s){qt[s]||(qt[s]=[]),qt[s].push(i[s])})}r.provides&&r.provides(Qt)}),n}function cr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=qt[e]||[];return i.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function Rt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=qt[e]||[];a.forEach(function(i){i.apply(null,n)})}function ft(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Qt[e]?Qt[e].apply(null,t):void 0}function fr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||bt();if(t)return t=It(n,t)||t,Ba(Ls.definitions,n,t)||Ba(Z.styles,n,t)}var Ls=new Fd,zd=function(){_.autoReplaceSvg=!1,_.observeMutations=!1,Rt("noAuto")},Yd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return dt?(Rt("beforeI2svg",t),ft("pseudoElements2svg",t),ft("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;_.autoReplaceSvg===!1&&(_.autoReplaceSvg=!0),_.observeMutations=!0,xd(function(){Kd({autoReplaceSvgRoot:n}),Rt("watch",t)})}},Bd={icon:function(t){if(t===null)return null;if(un(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:It(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Tn(t[0]);return{prefix:r,iconName:It(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(_.cssPrefix,"-"))>-1||t.match(dd))){var a=On(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||bt(),iconName:It(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=bt();return{prefix:i,iconName:It(i,t)||t}}}},B={noAuto:zd,config:_,dom:Yd,parse:Bd,library:Ls,findIconDefinition:fr,toHtml:De},Kd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?x:n;(Object.keys(Z.styles).length>0||_.autoFetchSvg)&&dt&&_.autoReplaceSvg&&B.dom.i2svg({node:r})};function Sn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return De(r)})}}),Object.defineProperty(e,"node",{get:function(){if(dt){var r=x.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Ud(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,s=e.transform;if(Fr(s)&&n.found&&!r.found){var o=n.width,l=n.height,f={x:o/l/2,y:.5};a.style=wn(g(g({},i),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Gd(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,s=i===!0?"".concat(t,"-").concat(_.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:g(g({},a),{},{id:s}),children:r}]}]}function Yr(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,s=e.transform,o=e.symbol,l=e.title,f=e.maskId,c=e.titleId,u=e.extra,h=e.watchable,p=h===void 0?!1:h,O=r.found?r:n,y=O.width,T=O.height,m=a==="fak",v=[_.replacementClass,i?"".concat(_.cssPrefix,"-").concat(i):""].filter(function(N){return u.classes.indexOf(N)===-1}).filter(function(N){return N!==""||!!N}).concat(u.classes).join(" "),A={children:[],attributes:g(g({},u.attributes),{},{"data-prefix":a,"data-icon":i,class:v,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(T)})},b=m&&!~u.classes.indexOf("fa-fw")?{width:"".concat(y/T*16*.0625,"em")}:{};p&&(A.attributes[Mt]=""),l&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(c||Oe())},children:[l]}),delete A.attributes.title);var w=g(g({},A),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:s,symbol:o,styles:g(g({},b),u.styles)}),S=r.found&&n.found?ft("generateAbstractMask",w)||{children:[],attributes:{}}:ft("generateAbstractIcon",w)||{children:[],attributes:{}},C=S.children,I=S.attributes;return w.children=C,w.attributes=I,o?Gd(w):Ud(w)}function Xa(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,s=e.extra,o=e.watchable,l=o===void 0?!1:o,f=g(g(g({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(f[Mt]="");var c=g({},s.styles);Fr(a)&&(c.transform=Sd({transform:a,width:n,height:r}),c["-webkit-transform"]=c.transform);var u=wn(c);u.length>0&&(f.style=u);var h=[];return h.push({tag:"span",attributes:f,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Xd(e){var t=e.content,n=e.title,r=e.extra,a=g(g(g({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=wn(r.styles);i.length>0&&(a.style=i);var s=[];return s.push({tag:"span",attributes:a,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Gn=Z.styles;function ur(e){var t=e[0],n=e[1],r=e.slice(4),a=Pr(r,1),i=a[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(_.cssPrefix,"-").concat(Lt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(_.cssPrefix,"-").concat(Lt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(_.cssPrefix,"-").concat(Lt.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:s}}var qd={found:!1,width:512,height:512};function Qd(e,t){!gs&&!_.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function dr(e,t){var n=t;return t==="fa"&&_.styleDefault!==null&&(t=bt()),new Promise(function(r,a){if(ft("missingIconAbstract"),n==="fa"){var i=xs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Gn[t]&&Gn[t][e]){var s=Gn[t][e];return r(ur(s))}Qd(e,t),r(g(g({},qd),{},{icon:_.showMissingIcons&&e?ft("missingIconAbstract")||{}:{}}))})}var qa=function(){},mr=_.measurePerformance&&Ke&&Ke.mark&&Ke.measure?Ke:{mark:qa,measure:qa},pe='FA "6.5.2"',Zd=function(t){return mr.mark("".concat(pe," ").concat(t," begins")),function(){return Is(t)}},Is=function(t){mr.mark("".concat(pe," ").concat(t," ends")),mr.measure("".concat(pe," ").concat(t),"".concat(pe," ").concat(t," begins"),"".concat(pe," ").concat(t," ends"))},Br={begin:Zd,end:Is},an=function(){};function Qa(e){var t=e.getAttribute?e.getAttribute(Mt):null;return typeof t=="string"}function Jd(e){var t=e.getAttribute?e.getAttribute(Mr):null,n=e.getAttribute?e.getAttribute(Rr):null;return t&&n}function tm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(_.replacementClass)}function em(){if(_.autoReplaceSvg===!0)return sn.replace;var e=sn[_.autoReplaceSvg];return e||sn.replace}function nm(e){return x.createElementNS("http://www.w3.org/2000/svg",e)}function rm(e){return x.createElement(e)}function Ds(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?nm:rm:n;if(typeof e=="string")return x.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])});var i=e.children||[];return i.forEach(function(s){a.appendChild(Ds(s,{ceFn:r}))}),a}function am(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var sn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ds(a),n)}),n.getAttribute(Mt)===null&&_.keepOriginalSource){var r=x.createComment(am(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~jr(n).indexOf(_.replacementClass))return sn.replace(t);var a=new RegExp("".concat(_.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(o,l){return l===_.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=r.map(function(o){return De(o)}).join(`
`);n.setAttribute(Mt,""),n.innerHTML=s}};function Za(e){e()}function Ps(e,t){var n=typeof t=="function"?t:an;if(e.length===0)n();else{var r=Za;_.mutateApproach===cd&&(r=_t.requestAnimationFrame||Za),r(function(){var a=em(),i=Br.begin("mutate");e.map(a),i(),n()})}}var Kr=!1;function $s(){Kr=!0}function hr(){Kr=!1}var mn=null;function Ja(e){if(Wa&&_.observeMutations){var t=e.treeCallback,n=t===void 0?an:t,r=e.nodeCallback,a=r===void 0?an:r,i=e.pseudoElementsCallback,s=i===void 0?an:i,o=e.observeMutationsRoot,l=o===void 0?x:o;mn=new Wa(function(f){if(!Kr){var c=bt();fe(f).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Qa(u.addedNodes[0])&&(_.searchPseudoElements&&s(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&_.searchPseudoElements&&s(u.target.parentNode),u.type==="attributes"&&Qa(u.target)&&~vd.indexOf(u.attributeName))if(u.attributeName==="class"&&Jd(u.target)){var h=On(jr(u.target)),p=h.prefix,O=h.iconName;u.target.setAttribute(Mr,p||c),O&&u.target.setAttribute(Rr,O)}else tm(u.target)&&a(u.target)})}}),dt&&mn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function im(){mn&&mn.disconnect()}function sm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function om(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=On(jr(e));return a.prefix||(a.prefix=bt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Vd(a.prefix,e.innerText)||Wr(a.prefix,or(e.innerText))),!a.iconName&&_.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function lm(e){var t=fe(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return _.autoA11y&&(n?t["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(r||Oe()):(t["aria-hidden"]="true",t.focusable="false")),t}function cm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:tt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ti(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=om(e),r=n.iconName,a=n.prefix,i=n.rest,s=lm(e),o=cr("parseNodeAttributes",{},e),l=t.styleParser?sm(e):[];return g({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:tt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}var fm=Z.styles;function Ms(e){var t=_.autoReplaceSvg==="nest"?ti(e,{styleParser:!1}):ti(e);return~t.extra.classes.indexOf(_s)?ft("generateLayersText",e,t):ft("generateSvgReplacementMutation",e,t)}var yt=new Set;Vr.map(function(e){yt.add("fa-".concat(e))});Object.keys(Ee[k]).map(yt.add.bind(yt));Object.keys(Ee[L]).map(yt.add.bind(yt));yt=Le(yt);function ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!dt)return Promise.resolve();var n=x.documentElement.classList,r=function(u){return n.add("".concat(za,"-").concat(u))},a=function(u){return n.remove("".concat(za,"-").concat(u))},i=_.autoFetchSvg?yt:Vr.map(function(c){return"fa-".concat(c)}).concat(Object.keys(fm));i.includes("fa")||i.push("fa");var s=[".".concat(_s,":not([").concat(Mt,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Mt,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=fe(e.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Br.begin("onTree"),f=o.reduce(function(c,u){try{var h=Ms(u);h&&c.push(h)}catch(p){gs||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,u){Promise.all(f).then(function(h){Ps(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),u(h)})})}function um(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ms(e).then(function(n){n&&Ps([n],t)})}function dm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:fr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:fr(a||{})),e(r,g(g({},n),{},{mask:a}))}}var mm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?tt:r,i=n.symbol,s=i===void 0?!1:i,o=n.mask,l=o===void 0?null:o,f=n.maskId,c=f===void 0?null:f,u=n.title,h=u===void 0?null:u,p=n.titleId,O=p===void 0?null:p,y=n.classes,T=y===void 0?[]:y,m=n.attributes,v=m===void 0?{}:m,A=n.styles,b=A===void 0?{}:A;if(t){var w=t.prefix,S=t.iconName,C=t.icon;return Sn(g({type:"icon"},t),function(){return Rt("beforeDOMElementCreation",{iconDefinition:t,params:n}),_.autoA11y&&(h?v["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(O||Oe()):(v["aria-hidden"]="true",v.focusable="false")),Yr({icons:{main:ur(C),mask:l?ur(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:S,transform:g(g({},tt),a),symbol:s,title:h,maskId:c,titleId:O,extra:{attributes:v,styles:b,classes:T}})})}},hm={mixout:function(){return{icon:dm(mm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ei,n.nodeCallback=um,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?x:r,i=n.callback,s=i===void 0?function(){}:i;return ei(a,s)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,s=r.titleId,o=r.prefix,l=r.transform,f=r.symbol,c=r.mask,u=r.maskId,h=r.extra;return new Promise(function(p,O){Promise.all([dr(a,o),c.iconName?dr(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var T=Pr(y,2),m=T[0],v=T[1];p([n,Yr({icons:{main:m,mask:v},prefix:o,iconName:a,transform:l,symbol:f,maskId:u,title:i,titleId:s,extra:h,watchable:!0})])}).catch(O)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.transform,o=n.styles,l=wn(o);l.length>0&&(a.style=l);var f;return Fr(s)&&(f=ft("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},pm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Sn({type:"layer"},function(){Rt("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(_.cssPrefix,"-layers")].concat(Le(i)).join(" ")},children:s}]})}}}},vm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,s=r.classes,o=s===void 0?[]:s,l=r.attributes,f=l===void 0?{}:l,c=r.styles,u=c===void 0?{}:c;return Sn({type:"counter",content:n},function(){return Rt("beforeDOMElementCreation",{content:n,params:r}),Xd({content:n.toString(),title:i,extra:{attributes:f,styles:u,classes:["".concat(_.cssPrefix,"-layers-counter")].concat(Le(o))}})})}}}},gm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?tt:a,s=r.title,o=s===void 0?null:s,l=r.classes,f=l===void 0?[]:l,c=r.attributes,u=c===void 0?{}:c,h=r.styles,p=h===void 0?{}:h;return Sn({type:"text",content:n},function(){return Rt("beforeDOMElementCreation",{content:n,params:r}),Xa({content:n,transform:g(g({},tt),i),title:o,extra:{attributes:u,styles:p,classes:["".concat(_.cssPrefix,"-layers-text")].concat(Le(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,s=r.extra,o=null,l=null;if(hs){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();o=c.width/f,l=c.height/f}return _.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Xa({content:n.innerHTML,width:o,height:l,transform:i,title:a,extra:s,watchable:!0})])}}},_m=new RegExp('"',"ug"),ni=[1105920,1112319];function bm(e){var t=e.replace(_m,""),n=Id(t,0),r=n>=ni[0]&&n<=ni[1],a=t.length===2?t[0]===t[1]:!1;return{value:or(a?t[0]:t),isSecondary:r||a}}function ri(e,t){var n="".concat(ld).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=fe(e.children),s=i.filter(function(C){return C.getAttribute(sr)===t})[0],o=_t.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(md),f=o.getPropertyValue("font-weight"),c=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&c!=="none"&&c!==""){var u=o.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?L:k,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ae[h][l[2].toLowerCase()]:hd[h][f],O=bm(u),y=O.value,T=O.isSecondary,m=l[0].startsWith("FontAwesome"),v=Wr(p,y),A=v;if(m){var b=jd(y);b.iconName&&b.prefix&&(v=b.iconName,p=b.prefix)}if(v&&!T&&(!s||s.getAttribute(Mr)!==p||s.getAttribute(Rr)!==A)){e.setAttribute(n,A),s&&e.removeChild(s);var w=cm(),S=w.extra;S.attributes[sr]=t,dr(v,p).then(function(C){var I=Yr(g(g({},w),{},{icons:{main:C,mask:zr()},prefix:p,iconName:A,extra:S,watchable:!0})),N=x.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(N,e.firstChild):e.appendChild(N),N.outerHTML=I.map(function(D){return De(D)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ym(e){return Promise.all([ri(e,"::before"),ri(e,"::after")])}function Em(e){return e.parentNode!==document.head&&!~fd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(sr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ai(e){if(dt)return new Promise(function(t,n){var r=fe(e.querySelectorAll("*")).filter(Em).map(ym),a=Br.begin("searchPseudoElements");$s(),Promise.all(r).then(function(){a(),hr(),t()}).catch(function(){a(),hr(),n()})})}var Am={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ai,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?x:r;_.searchPseudoElements&&ai(a)}}},ii=!1,wm={mixout:function(){return{dom:{unwatch:function(){$s(),ii=!0}}}},hooks:function(){return{bootstrap:function(){Ja(cr("mutationObserverCallbacks",{}))},noAuto:function(){im()},watch:function(n){var r=n.observeMutationsRoot;ii?hr():Ja(cr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},si=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},Tm={mixout:function(){return{parse:{transform:function(n){return si(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=si(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(l," ").concat(f," ").concat(c)},h={transform:"translate(".concat(s/2*-1," -256)")},p={outer:o,inner:u,path:h};return{tag:"g",attributes:g({},p.outer),children:[{tag:"g",attributes:g({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:g(g({},r.icon.attributes),p.path)}]}]}}}},Xn={x:0,y:0,width:"100%",height:"100%"};function oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Om(e){return e.tag==="g"?e.children:[e]}var Sm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?On(a.split(" ").map(function(s){return s.trim()})):zr();return i.prefix||(i.prefix=bt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.mask,o=n.maskId,l=n.transform,f=i.width,c=i.icon,u=s.width,h=s.icon,p=Od({transform:l,containerWidth:u,iconWidth:f}),O={tag:"rect",attributes:g(g({},Xn),{},{fill:"white"})},y=c.children?{children:c.children.map(oi)}:{},T={tag:"g",attributes:g({},p.inner),children:[oi(g({tag:c.tag,attributes:g(g({},c.attributes),p.path)},y))]},m={tag:"g",attributes:g({},p.outer),children:[T]},v="mask-".concat(o||Oe()),A="clip-".concat(o||Oe()),b={tag:"mask",attributes:g(g({},Xn),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[O,m]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:Om(h)},b]};return r.push(w,{tag:"rect",attributes:g({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(v,")")},Xn)}),{children:r,attributes:a}}}},Cm={provides:function(t){var n=!1;_t.matchMedia&&(n=_t.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:g(g({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=g(g({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:g(g({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:g(g({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:g(g({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:g(g({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:g(g({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:g(g({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:g(g({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Nm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},km=[Nd,hm,pm,vm,gm,Am,wm,Tm,Sm,Cm,Nm];Wd(km,{mixoutsTo:B});B.noAuto;B.config;var xm=B.library;B.dom;var pr=B.parse;B.findIconDefinition;B.toHtml;var Lm=B.icon;B.layer;B.text;B.counter;var Im={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]},Um=Im,Dm={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},Gm={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]};function li(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function at(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?li(Object(n),!0).forEach(function(r){j(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):li(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hn(e){"@babel/helpers - typeof";return hn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hn(e)}function j(e,t,n){return t=Rm(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function $m(e,t){if(e==null)return{};var n=Pm(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Mm(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Rm(e){var t=Mm(e,"string");return typeof t=="symbol"?t:String(t)}var Vm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Rs={exports:{}};(function(e){(function(t){var n=function(m,v,A){if(!f(v)||u(v)||h(v)||p(v)||l(v))return v;var b,w=0,S=0;if(c(v))for(b=[],S=v.length;w<S;w++)b.push(n(m,v[w],A));else{b={};for(var C in v)Object.prototype.hasOwnProperty.call(v,C)&&(b[m(C,A)]=n(m,v[C],A))}return b},r=function(m,v){v=v||{};var A=v.separator||"_",b=v.split||/(?=[A-Z])/;return m.split(b).join(A)},a=function(m){return O(m)?m:(m=m.replace(/[\-_\s]+(.)?/g,function(v,A){return A?A.toUpperCase():""}),m.substr(0,1).toLowerCase()+m.substr(1))},i=function(m){var v=a(m);return v.substr(0,1).toUpperCase()+v.substr(1)},s=function(m,v){return r(m,v).toLowerCase()},o=Object.prototype.toString,l=function(m){return typeof m=="function"},f=function(m){return m===Object(m)},c=function(m){return o.call(m)=="[object Array]"},u=function(m){return o.call(m)=="[object Date]"},h=function(m){return o.call(m)=="[object RegExp]"},p=function(m){return o.call(m)=="[object Boolean]"},O=function(m){return m=m-0,m===m},y=function(m,v){var A=v&&"process"in v?v.process:v;return typeof A!="function"?m:function(b,w){return A(b,m,w)}},T={camelize:a,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(m,v){return n(y(a,v),m)},decamelizeKeys:function(m,v){return n(y(s,v),m,v)},pascalizeKeys:function(m,v){return n(y(i,v),m)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=T:t.humps=T})(Vm)})(Rs);var jm=Rs.exports,Fm=["class","style"];function Hm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=jm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Wm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Vs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Vs(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=Wm(c);break;case"style":l.style=Hm(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,o=$m(n,Fm);return Gs(e.tag,at(at(at({},t),{},{class:a.class,style:at(at({},a.style),s)},a.attrs),o),r)}var js=!1;try{js=!0}catch{}function zm(){if(!js&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function qn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?j({},e,t):{}}function Ym(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},j(t,"fa-".concat(e.size),e.size!==null),j(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),j(t,"fa-pull-".concat(e.pull),e.pull!==null),j(t,"fa-swap-opacity",e.swapOpacity),j(t,"fa-bounce",e.bounce),j(t,"fa-shake",e.shake),j(t,"fa-beat",e.beat),j(t,"fa-fade",e.fade),j(t,"fa-beat-fade",e.beatFade),j(t,"fa-flash",e.flash),j(t,"fa-spin-pulse",e.spinPulse),j(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ci(e){if(e&&hn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(pr.icon)return pr.icon(e);if(e===null)return null;if(hn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Bm=Ks({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=Ht(function(){return ci(t.icon)}),i=Ht(function(){return qn("classes",Ym(t))}),s=Ht(function(){return qn("transform",typeof t.transform=="string"?pr.transform(t.transform):t.transform)}),o=Ht(function(){return qn("mask",ci(t.mask))}),l=Ht(function(){return Lm(a.value,at(at(at(at({},i.value),s.value),o.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Us(l,function(c){if(!c)return zm("Could not find one or more icon(s)",a.value,o.value)},{immediate:!0});var f=Ht(function(){return l.value?Vs(l.value.abstract[0],{},r):null});return function(){return f.value}}});xm.add(Dm);if(document.getElementById("footer")){const e=Xs({});e.component("font-awesome-icon",Bm),e.mount("#footer")}export{Bm as F,re as M,Um as a,Gm as f,xm as l};
