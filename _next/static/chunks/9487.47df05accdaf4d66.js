"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9487],{19487:function(e,t,r){r.d(t,{diagram:function(){return $}});var a=r(76011),o=r(59373),l=r(43349),i=r(17295),n=r.n(i);r(27484),r(17967),r(27856),r(70277),r(45625),r(39354),r(91518),r(59542),r(10285),r(28734);let s=(e,t,r)=>{let{parentById:a}=r,o=new Set,l=e;for(;l;){if(o.add(l),l===t)return l;l=a[l]}for(l=t;l;){if(o.has(l))return l;l=a[l]}return"root"},d=new(n()),c={},h={},p={},u=function(e,t,r,o,i,n,s){let d=r.select(`[id="${t}"]`),c=d.insert("g").attr("class","nodes"),h=Object.keys(e);return h.forEach(function(t){let r,s,h;let u=e[t],b="default";u.classes.length>0&&(b=u.classes.join(" "));let g=(0,a.a)(u.styles),y=void 0!==u.text?u.text:u.id,w={width:0,height:0};if((0,a.e)((0,a.g)().flowchart.htmlLabels)){let e={label:y.replace(/fa[blrs]?:fa-[\w-]+/g,e=>`<i class='${e.replace(":"," ")}'></i>`)};r=(0,l.a)(d,e).node();let t=r.getBBox();w.width=t.width,w.height=t.height,w.labelNode=r,r.parentNode.removeChild(r)}else{let e=o.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",g.labelStyle.replace("color:","fill:"));let t=y.split(a.c.lineBreakRegex);for(let r of t){let t=o.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=r,e.appendChild(t)}r=e;let l=r.getBBox();w.width=l.width,w.height=l.height,w.labelNode=r}let f=[{id:u.id+"-west",layoutOptions:{"port.side":"WEST"}},{id:u.id+"-east",layoutOptions:{"port.side":"EAST"}},{id:u.id+"-south",layoutOptions:{"port.side":"SOUTH"}},{id:u.id+"-north",layoutOptions:{"port.side":"NORTH"}}],k=0,x="",m={};switch(u.type){case"round":k=5,x="rect";break;case"square":case"group":default:x="rect";break;case"diamond":x="question",m={portConstraints:"FIXED_SIDE"};break;case"hexagon":x="hexagon";break;case"odd":case"odd_right":x="rect_left_inv_arrow";break;case"lean_right":x="lean_right";break;case"lean_left":x="lean_left";break;case"trapezoid":x="trapezoid";break;case"inv_trapezoid":x="inv_trapezoid";break;case"circle":x="circle";break;case"ellipse":x="ellipse";break;case"stadium":x="stadium";break;case"subroutine":x="subroutine";break;case"cylinder":x="cylinder";break;case"doublecircle":x="doublecircle"}let v={labelStyle:g.labelStyle,shape:x,labelText:y,rx:k,ry:k,class:b,style:g.style,id:u.id,link:u.link,linkTarget:u.linkTarget,tooltip:i.db.getTooltip(u.id)||"",domId:i.db.lookUpDomId(u.id),haveCallback:u.haveCallback,width:"group"===u.type?500:void 0,dir:u.dir,type:u.type,props:u.props,padding:(0,a.g)().flowchart.padding};"group"!==v.type&&(s=(h=(0,a.b)(c,v,u.dir)).node().getBBox());let _={id:u.id,ports:"diamond"===u.type?f:[],layoutOptions:m,labelText:y,labelData:w,domId:i.db.lookUpDomId(u.id),width:null==s?void 0:s.width,height:null==s?void 0:s.height,type:u.type,el:h,parent:n.parentById[u.id]};p[v.id]=_}),s},b=(e,t,r)=>{let o={TB:{in:{north:"north"},out:{south:"west",west:"east",east:"south"}},LR:{in:{west:"west"},out:{east:"south",south:"north",north:"east"}},RL:{in:{east:"east"},out:{west:"north",north:"south",south:"west"}},BT:{in:{south:"south"},out:{north:"east",east:"west",west:"north"}}};return o.TD=o.TB,a.l.info("abc88",r,t,e),o[r][t][e]},g=(e,t,r)=>{if(a.l.info("getNextPort abc88",{node:e,edgeDirection:t,graphDirection:r}),!c[e])switch(r){case"TB":case"TD":c[e]={inPosition:"north",outPosition:"south"};break;case"BT":c[e]={inPosition:"south",outPosition:"north"};break;case"RL":c[e]={inPosition:"east",outPosition:"west"};break;case"LR":c[e]={inPosition:"west",outPosition:"east"}}let o="in"===t?c[e].inPosition:c[e].outPosition;return"in"===t?c[e].inPosition=b(c[e].inPosition,t,r):c[e].outPosition=b(c[e].outPosition,t,r),o},y=(e,t)=>{let r=e.start,a=e.end,o=p[r],l=p[a];return o&&l&&("diamond"===o.type&&(r=`${r}-${g(r,"out",t)}`),"diamond"===l.type&&(a=`${a}-${g(a,"in",t)}`)),{source:r,target:a}},w=function(e,t,r,l){let i,n;a.l.info("abc78 edges = ",e);let s=l.insert("g").attr("class","edgeLabels"),d={},c=t.db.getDirection();if(void 0!==e.defaultStyle){let t=(0,a.a)(e.defaultStyle);i=t.style,n=t.labelStyle}return e.forEach(function(t){var l="L-"+t.start+"-"+t.end;void 0===d[l]?(d[l]=0,a.l.info("abc78 new entry",l,d[l])):(d[l]++,a.l.info("abc78 new entry",l,d[l]));let p=l+"-"+d[l];a.l.info("abc78 new link id to be used is",l,p,d[l]);var u="LS-"+t.start,b="LE-"+t.end;let g={style:"",labelStyle:""};switch(g.minlen=t.length||1,"arrow_open"===t.type?g.arrowhead="none":g.arrowhead="normal",g.arrowTypeStart="arrow_open",g.arrowTypeEnd="arrow_open",t.type){case"double_arrow_cross":g.arrowTypeStart="arrow_cross";case"arrow_cross":g.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":g.arrowTypeStart="arrow_point";case"arrow_point":g.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":g.arrowTypeStart="arrow_circle";case"arrow_circle":g.arrowTypeEnd="arrow_circle"}let w="",f="";switch(t.stroke){case"normal":w="fill:none;",void 0!==i&&(w=i),void 0!==n&&(f=n),g.thickness="normal",g.pattern="solid";break;case"dotted":g.thickness="normal",g.pattern="dotted",g.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":g.thickness="thick",g.pattern="solid",g.style="stroke-width: 3.5px;fill:none;"}if(void 0!==t.style){let e=(0,a.a)(t.style);w=e.style,f=e.labelStyle}g.style=g.style+=w,g.labelStyle=g.labelStyle+=f,void 0!==t.interpolate?g.curve=(0,a.d)(t.interpolate,o.c_6):void 0!==e.defaultInterpolate?g.curve=(0,a.d)(e.defaultInterpolate,o.c_6):g.curve=(0,a.d)(h.curve,o.c_6),void 0===t.text?void 0!==t.style&&(g.arrowheadStyle="fill: #333"):(g.arrowheadStyle="fill: #333",g.labelpos="c"),g.labelType="text",g.label=t.text.replace(a.c.lineBreakRegex,"\n"),void 0===t.style&&(g.style=g.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),g.labelStyle=g.labelStyle.replace("color:","fill:"),g.id=p,g.classes="flowchart-link "+u+" "+b;let k=(0,a.f)(s,g),{source:x,target:m}=y(t,c);a.l.debug("abc78 source and target",x,m),r.edges.push({id:"e"+t.start+t.end,sources:[x],targets:[m],labelEl:k,labels:[{width:g.width,height:g.height,orgWidth:g.width,orgHeight:g.height,text:g.label,layoutOptions:{"edgeLabels.inline":"true","edgeLabels.placement":"CENTER"}}],edgeData:g})}),r},f=function(e,t,r,a){let o="";switch(a&&(o=(o=(o=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),t.arrowTypeStart){case"arrow_cross":e.attr("marker-start","url("+o+"#"+r+"-crossStart)");break;case"arrow_point":e.attr("marker-start","url("+o+"#"+r+"-pointStart)");break;case"arrow_barb":e.attr("marker-start","url("+o+"#"+r+"-barbStart)");break;case"arrow_circle":e.attr("marker-start","url("+o+"#"+r+"-circleStart)");break;case"aggregation":e.attr("marker-start","url("+o+"#"+r+"-aggregationStart)");break;case"extension":e.attr("marker-start","url("+o+"#"+r+"-extensionStart)");break;case"composition":e.attr("marker-start","url("+o+"#"+r+"-compositionStart)");break;case"dependency":e.attr("marker-start","url("+o+"#"+r+"-dependencyStart)");break;case"lollipop":e.attr("marker-start","url("+o+"#"+r+"-lollipopStart)")}switch(t.arrowTypeEnd){case"arrow_cross":e.attr("marker-end","url("+o+"#"+r+"-crossEnd)");break;case"arrow_point":e.attr("marker-end","url("+o+"#"+r+"-pointEnd)");break;case"arrow_barb":e.attr("marker-end","url("+o+"#"+r+"-barbEnd)");break;case"arrow_circle":e.attr("marker-end","url("+o+"#"+r+"-circleEnd)");break;case"aggregation":e.attr("marker-end","url("+o+"#"+r+"-aggregationEnd)");break;case"extension":e.attr("marker-end","url("+o+"#"+r+"-extensionEnd)");break;case"composition":e.attr("marker-end","url("+o+"#"+r+"-compositionEnd)");break;case"dependency":e.attr("marker-end","url("+o+"#"+r+"-dependencyEnd)");break;case"lollipop":e.attr("marker-end","url("+o+"#"+r+"-lollipopEnd)")}},k=function(e){let t={parentById:{},childrenById:{}},r=e.getSubGraphs();return a.l.info("Subgraphs - ",r),r.forEach(function(e){e.nodes.forEach(function(r){t.parentById[r]=e.id,void 0===t.childrenById[e.id]&&(t.childrenById[e.id]=[]),t.childrenById[e.id].push(r)})}),r.forEach(function(e){e.id,void 0!==t.parentById[e.id]&&t.parentById[e.id]}),t},x=function(e,t,r){let a=s(e,t,r);if(void 0===a||"root"===a)return{x:0,y:0};let o=p[a].offset;return{x:o.posX,y:o.posY}},m=function(e,t,r,a,l){let i=x(t.sources[0],t.targets[0],l),n=t.sections[0].startPoint,s=t.sections[0].endPoint,d=t.sections[0].bendPoints?t.sections[0].bendPoints:[],c=d.map(e=>[e.x+i.x,e.y+i.y]),h=[[n.x+i.x,n.y+i.y],...c,[s.x+i.x,s.y+i.y]],p=(0,o.jvg)().curve(o.c_6),u=e.insert("path").attr("d",p(h)).attr("class","path").attr("fill","none"),b=e.insert("g").attr("class","edgeLabel"),g=(0,o.Ys)(b.node().appendChild(t.labelEl)),y=g.node().firstChild.getBoundingClientRect();g.attr("width",y.width),g.attr("height",y.height),b.attr("transform",`translate(${t.labels[0].x+i.x}, ${t.labels[0].y+i.y})`),f(u,r,a.type,a.arrowMarkerAbsolute)},v=(e,t)=>{e.forEach(e=>{e.children||(e.children=[]);let r=t.childrenById[e.id];r&&r.forEach(t=>{e.children.push(p[t])}),v(e.children,t)})},_=async function(e,t,r,l){var i;let n,s;l.db.clear(),p={},l.db.setGen("gen-2"),l.parser.parse(e);let c=(0,o.Ys)("body").append("div").attr("style","height:400px").attr("id","cy"),h={id:"root",layoutOptions:{"elk.hierarchyHandling":"INCLUDE_CHILDREN","org.eclipse.elk.padding":"[top=100, left=100, bottom=110, right=110]","elk.layered.spacing.edgeNodeBetweenLayers":"30","elk.direction":"DOWN"},children:[],edges:[]};switch(a.l.info("Drawing flowchart using v3 renderer",d),l.db.getDirection()){case"BT":h.layoutOptions["elk.direction"]="UP";break;case"TB":h.layoutOptions["elk.direction"]="DOWN";break;case"LR":h.layoutOptions["elk.direction"]="RIGHT";break;case"RL":h.layoutOptions["elk.direction"]="LEFT"}let{securityLevel:b,flowchart:g}=(0,a.g)();"sandbox"===b&&(n=(0,o.Ys)("#i"+t));let y="sandbox"===b?(0,o.Ys)(n.nodes()[0].contentDocument.body):(0,o.Ys)("body"),f="sandbox"===b?n.nodes()[0].contentDocument:document,x=y.select(`[id="${t}"]`);(0,a.i)(x,["point","circle","cross"],l.type,l.arrowMarkerAbsolute);let _=l.db.getVertices(),S=l.db.getSubGraphs();a.l.info("Subgraphs - ",S);for(let e=S.length-1;e>=0;e--)s=S[e],l.db.addVertex(s.id,s.title,"group",void 0,s.classes,s.dir);let $=x.insert("g").attr("class","subgraphs"),T=k(l.db);h=u(_,t,y,f,l,T,h);let B=x.insert("g").attr("class","edges edgePath"),C=l.db.getEdges();h=w(C,l,h,x);let I=Object.keys(p);I.forEach(e=>{let t=p[e];t.parent||h.children.push(t),void 0!==T.childrenById[e]&&(t.labels=[{text:t.labelText,layoutOptions:{"nodeLabels.placement":"[H_CENTER, V_TOP, INSIDE]"},width:t.labelData.width,height:t.labelData.height}],delete t.x,delete t.y,delete t.width,delete t.height)}),v(h.children,T),a.l.info("after layout",JSON.stringify(h,null,2));let P=await d.layout(h);E(0,0,P.children,x,$,l,0),a.l.info("after layout",P),null==(i=P.edges)||i.map(e=>{m(B,e,e.edgeData,l,T)}),(0,a.s)({},x,g.diagramPadding,g.useMaxWidth),c.remove()},E=(e,t,r,o,l,i,n)=>{r.forEach(function(r){if(r){if(p[r.id].offset={posX:r.x+e,posY:r.y+t,x:e,y:t,depth:n,width:r.width,height:r.height},"group"===r.type){let o=l.insert("g").attr("class","subgraph");o.insert("rect").attr("class","subgraph subgraph-lvl-"+n%5+" node").attr("x",r.x+e).attr("y",r.y+t).attr("width",r.width).attr("height",r.height);let i=o.insert("g").attr("class","label");i.attr("transform",`translate(${r.labels[0].x+e+r.x}, ${r.labels[0].y+t+r.y})`),i.node().appendChild(r.labelData.labelNode),a.l.info("Id (UGH)= ",r.type,r.labels)}else a.l.info("Id (UGH)= ",r.id),r.el.attr("transform",`translate(${r.x+e+r.width/2}, ${r.y+t+r.height/2})`)}}),r.forEach(function(r){r&&"group"===r.type&&E(e+r.x,t+r.y,r.children,o,l,i,n+1)})},S=e=>{let t="";for(let r=0;r<5;r++)t+=`
      .subgraph-lvl-${r} {
        fill: ${e[`surface${r}`]};
        stroke: ${e[`surfacePeer${r}`]};
      }
    `;return t},$={db:a.h,renderer:{getClasses:function(e,t){a.l.info("Extracting classes"),t.db.clear("ver-2");try{return t.parse(e),t.db.getClasses()}catch(e){return{}}},draw:_},parser:a.p,styles:e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span {
    color: ${e.titleColor};
  }

  .label text,span {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
  .subgraph {
    stroke-width:2;
    rx:3;
  }
  // .subgraph-lvl-1 {
  //   fill:#ccc;
  //   // stroke:black;
  // }
  ${S(e)}
`}}}]);