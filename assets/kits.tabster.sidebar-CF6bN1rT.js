import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./arrow-down-B95Dehwt.js";import{t as n}from"./arrow-left-C0O7eEbe.js";import{t as r}from"./arrow-right-DV4UInPZ.js";import{t as i}from"./arrow-up-CTDtmLa0.js";import{s as a,v as o}from"./kit-docs-BUovISd0.js";import{t as s}from"./file-code-zMCWoiH6.js";import{t as c}from"./file-text-B8CPDozU.js";import{t as l}from"./file-Cu4A8CGV.js";import{t as u}from"./folder-plus-C-OSa1HS.js";import{t as d}from"./folder-CByvWSrf.js";import{t as f}from"./globe-X8eHtpbL.js";import{t as p}from"./grip-vertical-Ds3XP1S2.js";import{n as m,t as h}from"./square-terminal-C1plbnb0.js";import{t as g}from"./pin-off-DI3LWNTM.js";import{t as _}from"./pin-CeSKZd8V.js";import{t as v}from"./plus-DS8FiCg5.js";import{t as y}from"./settings-DVlOJsLs.js";import{t as b}from"./trash-2-BYfY5R1J.js";import{t as x}from"./wand-sparkles-CqkZrQ_3.js";import{a as S,c as C,l as w}from"./provider-CJrNxsO0.js";import{t as T}from"./glyphs-DIn5uSom.js";import{Bc as E,Cc as D,Ic as O,Mi as k,Oi as A,bi as j,hi as M,ki as ee,ti as te,wi as ne,zc as re}from"./index-B9ukmIN1.js";import{t as ie}from"./badge-uhFB8J9R.js";import{p as N}from"./dock-B0qddSVd.js";import"./env-CFRqT0G6.js";import{c as P,l as F,t as I}from"./kit-BW1oFcGw.js";import"./kit-gallery-Bph7isB2.js";import{t as ae}from"./example-BGnSQG2Y.js";import{a as oe,i as L,o as se,s as R,t as ce}from"./tabster-BO4tJY_i.js";import{t as z}from"./inline-rename-0_nXOW_H.js";var B=k(`file-symlink`,[[`path`,{d:`m10 18 3-3-3-3`,key:`18f6ys`}],[`path`,{d:`M14 2v4a2 2 0 0 0 2 2h4`,key:`tnqrlb`}],[`path`,{d:`M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7`,key:`50q2rw`}]]),le=k(`square-plus`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M8 12h8`,key:`1wcyev`}],[`path`,{d:`M12 8v8`,key:`napkw2`}]]);function V(e,t,n,r){return!e||t===n?!1:e.dispatch({type:`move-group`,group:t,to:r===`center`?{type:`group`,group:n}:{type:`split`,node:n,side:r}})}var H=e(E(),1),ue=e(re(),1),U=O(),W=`tabster-panel`,G=`tabster.outliner.rename`,K=`F2`,q=`data-tabster-rename`;function J(e,t){return`${e}:${t}`}var Y=new Map,de=0;function fe(e,t){let n=S(),[r]=H.useState(()=>`tabster-outliner-${++de}`);return H.useEffect(()=>{let i=e.current;if(!i)return;Y.set(i,t);let a=()=>{let e=i.ownerDocument.activeElement,t=e instanceof Element?e.closest(`[${q}]`):null,n=t?.getAttribute(q);if(!(!t||!n))for(let[e,r]of Y)e.contains(t)&&r(n)},o=[{key:K,command:G,when:w(r),inputs:`ignore`}],s=C(i,r),c=n.register({[G]:{title:`Rename`,category:`Tabs`,run:a}},`tabster`),l=n.keymap.add(`default`,o,{source:`tabster`});return()=>{l.dispose(),c(),s(),Y.delete(i)}},[n,e,r,t]),n.platform}function pe({api:e,namesStore:t,panelCatalog:n,mode:r,onModeChange:i,panelIcons:a,title:o=`Layout`,className:s}){let c=R(),l=e??c?.api??null,u=t??c?.namesStore;if(!u)throw Error(`[Tabster] <TabsterOutliner> needs a namesStore — pass one in props or wrap in <TabsterProvider>.`);let d=l?.raw()??null,f=ge(d);H.useEffect(()=>{f&&u.reconcile(N(f).map(e=>e.id))},[f,u]);let[,p]=H.useReducer(e=>e+1,0);H.useEffect(()=>u.subscribe(p),[u]);let m=f?N(f):[],h=l?.activePanel()??null,g=H.useRef(null),[_,v]=H.useState(null),y={current:_,platform:fe(g,v),start:v,end:e=>{v(null),requestAnimationFrame(()=>{let t=g.current?.ownerDocument;if(t&&t.activeElement&&t.activeElement!==t.body)return;let n=g.current?.querySelectorAll(`[${q}]`)??[];for(let t of n)t.getAttribute(q)===e&&t.focus()})}},b=(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(me,{title:o,mode:r,onModeChange:i,onAddGroup:H.useCallback(()=>{if(!l)return;let e=l.raw()?.getLayout(),t=l.activePanel()??(e?Object.keys(e.panels)[0]:void 0),r=n[0];r&&l.addPanel({id:`${r.type}.${Date.now()}`,component:r.type,title:r.defaultTitle??r.label,position:t?{referencePanel:t,direction:`right`}:void 0})},[l,n])}),(0,U.jsx)(`div`,{ref:g,className:`flex-1 overflow-y-auto py-1`,children:m.length===0?(0,U.jsx)(`div`,{className:`px-3 py-4 text-[11px] text-muted-foreground`,children:`No groups yet. Click the folder+ icon to add one.`}):m.map((e,t)=>(0,U.jsx)(ve,{groupId:e.id,isMaximized:f?.maximized===e.id,groupPanels:_e(f,e),index:t,activePanelId:h,api:l,dock:d,namesStore:u,panelCatalog:n,panelIcons:a,rename:y},e.id))})]}),x=e=>{let t=e.ids[0];!t||!l||l.movePanel(t,{groupId:e.to.container})};return r===`float`?(0,U.jsx)(I,{onMove:x,children:(0,U.jsx)(he,{children:b})}):(0,U.jsx)(I,{onMove:x,children:(0,U.jsx)(`aside`,{className:M(`flex h-full w-[280px] shrink-0 flex-col border-l border-border bg-surface-1`,s),children:b})})}function me({title:e,mode:t,onModeChange:n,onAddGroup:r}){return(0,U.jsxs)(`div`,{className:`flex h-9 shrink-0 items-center gap-1 border-b border-border/60 bg-surface-1 px-2 text-[11px] uppercase tracking-wider text-muted-foreground`,children:[(0,U.jsx)(`span`,{className:`flex-1`,children:e}),(0,U.jsx)(`button`,{type:`button`,title:`Add group`,onClick:r,className:`flex h-6 w-6 items-center justify-center rounded hover:bg-muted`,children:(0,U.jsx)(u,{size:13})}),(0,U.jsx)(`button`,{type:`button`,title:t===`dock`?`Pop out`:`Dock right`,onClick:()=>n(t===`dock`?`float`:`dock`),className:`flex h-6 w-6 items-center justify-center rounded hover:bg-muted`,children:t===`dock`?(0,U.jsx)(g,{size:13}):(0,U.jsx)(_,{size:13})}),(0,U.jsx)(`button`,{type:`button`,title:`Hide`,onClick:()=>n(`hidden`),className:`flex h-6 w-6 items-center justify-center rounded hover:bg-muted`,children:(0,U.jsx)(j,{size:13})})]})}function he({children:e}){let[t,n]=H.useState(null),r=H.useRef(null),i=H.useRef(!1);return!i.current&&typeof window<`u`&&(i.current=!0,t||n({x:Math.max(16,window.innerWidth-280-32),y:96})),H.useEffect(()=>{let e=e=>{r.current&&n({x:Math.min(Math.max(0,e.clientX-r.current.dx),Math.max(0,window.innerWidth-280)),y:Math.min(Math.max(0,e.clientY-r.current.dy),Math.max(0,window.innerHeight-320))})},t=()=>{r.current=null};return window.addEventListener(`mousemove`,e),window.addEventListener(`mouseup`,t),()=>{window.removeEventListener(`mousemove`,e),window.removeEventListener(`mouseup`,t)}},[]),typeof document>`u`||!t?null:(0,ue.createPortal)((0,U.jsx)(`div`,{className:`fixed z-[1000] flex max-h-[80vh] w-[280px] flex-col overflow-hidden rounded-md border border-border bg-background shadow-xl`,style:{left:t.x,top:t.y},children:(0,U.jsx)(`div`,{role:`presentation`,onMouseDown:e=>{e.target instanceof Element&&e.target.closest(`[data-dnd-draggable]`)||(r.current={dx:e.clientX-t.x,dy:e.clientY-t.y},e.preventDefault())},className:`cursor-move`,children:e})}),document.body)}function ge(e){let t=H.useCallback(t=>e?e.subscribe(t):()=>void 0,[e]);return H.useSyncExternalStore(t,()=>e?.getLayout()??null,()=>null)}function _e(e,t){return e?t.panels.flatMap(t=>e.panels[t]??[]):[]}function ve({groupId:e,isMaximized:t,groupPanels:n,activePanelId:r,api:i,dock:a,namesStore:s,panelCatalog:l,panelIcons:u,rename:d}){let[f,p]=H.useState(!1),[h,g]=H.useState(!1),[_,y]=H.useState(!1),x=J(`group`,e),S=d.current===x,C=F({id:e,kind:`container`,accepts:[W],accept:t=>t.container!==e}),[,w]=H.useReducer(e=>e+1,0);H.useEffect(()=>s.subscribe(w),[s]);let E=s.getName(e)??e,D=L(e),O=t=>{i&&(g(!1),i.addPanel({id:`${t.type}.${Date.now()}`,component:t.type,title:t.defaultTitle??t.label,position:{referenceGroup:e,direction:`within`}}))},k=()=>{if(i)for(let e of n)i.removePanel(e.id)},j=()=>{a?.toggleMaximize(e)};return(0,U.jsxs)(`div`,{ref:C.ref,"data-dnd-label":`group ${E}`,className:M(C.isOver&&`bg-primary/5`),children:[(0,U.jsxs)(`div`,{className:`group flex h-7 items-center gap-1 px-1 text-[12px] hover:bg-[color:var(--dk-list-hover,color-mix(in_oklab,var(--muted)_60%,transparent))]`,children:[(0,U.jsx)(`button`,{type:`button`,"aria-label":f?`Expand ${E}`:`Collapse ${E}`,"aria-expanded":!f,"aria-keyshortcuts":T([K],d.platform),[q]:x,onClick:()=>p(e=>!e),className:`flex h-5 w-5 items-center justify-center text-muted-foreground`,children:f?(0,U.jsx)(A,{size:12}):(0,U.jsx)(ee,{size:12})}),(0,U.jsx)(`span`,{className:M(`size-2 shrink-0 rounded-full`,D.dot)}),S?(0,U.jsx)(z,{initial:E,onCommit:t=>{d.end(x),t.trim()&&s.setName(e,t.trim())},onCancel:()=>d.end(x)}):(0,U.jsx)(`span`,{className:`flex-1 cursor-text truncate font-medium`,title:`Double-click or F2 to rename`,onDoubleClick:()=>d.start(x),children:E}),(0,U.jsx)(`span`,{className:`shrink-0 pr-1 font-mono text-[10px] tabular-nums text-muted-foreground`,children:n.length}),(0,U.jsxs)(`div`,{className:`relative`,children:[(0,U.jsx)(`button`,{type:`button`,title:`Add panel`,onClick:()=>g(e=>!e),className:`hidden h-5 w-5 items-center justify-center rounded hover:bg-muted group-hover:flex`,children:(0,U.jsx)(v,{size:12})}),h?(0,U.jsx)(`div`,{className:`absolute right-0 top-6 z-20 w-36 rounded-md border border-border bg-popover p-1 shadow-md`,onMouseLeave:()=>g(!1),children:l.map(e=>(0,U.jsxs)(`button`,{type:`button`,onClick:()=>O(e),className:`flex w-full items-center gap-2 rounded px-2 py-1 text-left text-[12px] hover:bg-muted`,children:[(0,U.jsx)(e.Icon??c,{size:12}),e.label]},e.type))}):null]}),(0,U.jsxs)(`div`,{className:`relative`,children:[(0,U.jsx)(`button`,{type:`button`,title:`Move group`,onClick:()=>y(e=>!e),className:`hidden h-5 w-5 items-center justify-center rounded hover:bg-muted group-hover:flex`,children:(0,U.jsx)(m,{size:12})}),_?(0,U.jsx)(be,{dock:a,namesStore:s,sourceGroupId:e,onClose:()=>y(!1)}):null]}),(0,U.jsx)(`button`,{type:`button`,title:t?`Restore size`:`Maximize`,onClick:j,className:`hidden h-5 w-5 items-center justify-center rounded hover:bg-muted group-hover:flex`,children:t?(0,U.jsx)(o,{size:12}):(0,U.jsx)(ne,{size:12})}),(0,U.jsx)(`button`,{type:`button`,title:`Delete group`,onClick:k,className:`hidden h-5 w-5 items-center justify-center rounded hover:bg-destructive/10 hover:text-destructive group-hover:flex`,children:(0,U.jsx)(b,{size:12})})]}),f?null:(0,U.jsx)(`div`,{className:`pb-1 pl-6`,role:n.length===0?void 0:`list`,"aria-label":n.length===0?void 0:`${E} panels`,children:n.length===0?(0,U.jsx)(`div`,{className:`py-1 pl-2 pr-2 text-[11px] italic text-muted-foreground`,children:`Empty · drop a panel here`}):n.map((t,n)=>(0,U.jsx)(ye,{id:t.id,groupId:e,index:n,title:t.title,component:t.component,active:t.id===r,api:i,dock:a,panelIcons:u,rename:d},t.id))})]})}var X=`o`;function ye({id:e,groupId:t,index:n,title:r,component:i,active:a,api:o,dock:s,panelIcons:l,rename:u}){let d=(i?l?.[i]:void 0)??c,f=J(`panel`,e),p=u.current===f,m=P({id:e,container:t,index:n,data:e,type:W,disabled:p}),h=t=>{u.end(f);let n=t.trim();n&&s?.rename(e,n)},g=()=>{p||o?.focusPanel(e)};return(0,U.jsxs)(`div`,{ref:m.ref,role:`listitem`,tabIndex:0,"data-dnd-label":r,"aria-keyshortcuts":T([X,K],u.platform),[q]:f,onClick:g,onKeyDown:e=>{e.target!==e.currentTarget||e.defaultPrevented||e.altKey||e.ctrlKey||e.metaKey||e.key.toLowerCase()!==X||(e.preventDefault(),g())},className:M(`group flex h-6 cursor-pointer items-center gap-1.5 rounded px-1.5 text-[12px]`,a?`bg-primary/15 text-primary`:`hover:bg-muted/60`),children:[(0,U.jsx)(d,{size:11,className:`shrink-0 opacity-70`}),p?(0,U.jsx)(z,{initial:r,onCommit:h,onCancel:()=>u.end(f)}):(0,U.jsx)(`span`,{className:`flex-1 truncate`,title:`Double-click or F2 to rename`,onDoubleClick:e=>{e.stopPropagation(),u.start(f)},children:r}),(0,U.jsx)(`button`,{type:`button`,title:`Close`,onClick:t=>{t.stopPropagation(),o?.removePanel(e)},className:`hidden h-4 w-4 items-center justify-center rounded hover:bg-destructive/10 hover:text-destructive group-hover:flex`,children:(0,U.jsx)(j,{size:10})})]})}function be({dock:e,namesStore:a,sourceGroupId:o,onClose:s}){let c=e?.getLayout(),l=(c?N(c):[]).filter(e=>e.id!==o),u=(t,n)=>{V(e,o,n,t),s()};return l.length===0?(0,U.jsx)(`div`,{className:`absolute right-0 top-6 z-20 w-44 rounded-md border border-border bg-popover p-2 text-[11px] text-muted-foreground shadow-md`,onMouseLeave:s,children:`Only one group — nothing to move relative to. Add another group first.`}):(0,U.jsxs)(`div`,{className:`absolute right-0 top-6 z-20 w-56 rounded-md border border-border bg-popover p-1.5 shadow-md`,onMouseLeave:s,children:[(0,U.jsx)(`div`,{className:`px-2 pb-1 pt-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground`,children:`Move relative to…`}),l.map(e=>{let o=e.id,s=a.getName(o)??o;return(0,U.jsxs)(`div`,{className:`rounded px-2 py-1 hover:bg-muted/60`,children:[(0,U.jsxs)(`div`,{className:`mb-1 flex items-center gap-1.5 text-[12px] font-medium`,children:[(0,U.jsx)(`span`,{className:M(`size-2 shrink-0 rounded-full`,L(o).dot)}),(0,U.jsx)(`span`,{className:`truncate`,children:s})]}),(0,U.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,U.jsx)(Z,{Icon:i,title:`Above`,onClick:()=>u(`top`,o)}),(0,U.jsx)(Z,{Icon:t,title:`Below`,onClick:()=>u(`bottom`,o)}),(0,U.jsx)(Z,{Icon:n,title:`Left of`,onClick:()=>u(`left`,o)}),(0,U.jsx)(Z,{Icon:r,title:`Right of`,onClick:()=>u(`right`,o)}),(0,U.jsx)(Z,{Icon:le,title:`Merge into`,onClick:()=>u(`center`,o)})]})]},o)})]})}function Z({Icon:e,title:t,onClick:n}){return(0,U.jsx)(`button`,{type:`button`,title:t,onClick:n,className:`flex h-6 w-6 items-center justify-center rounded border border-transparent hover:border-border hover:bg-muted`,children:(0,U.jsx)(e,{size:11})})}var xe=`tabster-arrange`,Se=`bg-background/30 backdrop-blur-[1px]`;function Ce({api:e,hostRef:t,namesStore:n,active:r,tabsterRootRef:i,dimClassName:a=Se}){let o=R(),s=e??o?.api??null,c=t??o?.hostRef,l=n??o?.namesStore;if(!c)throw Error(`[Tabster] <TabsterArrangeOverlay> needs a hostRef — pass one or wrap in <TabsterProvider> + <TabsterDockHost>.`);if(!l)throw Error(`[Tabster] <TabsterArrangeOverlay> needs a namesStore — pass one or wrap in <TabsterProvider>.`);let u=i??c;H.useEffect(()=>{let e=u?.current;if(e)return r&&e.classList.add(`tabster-arrange-mode`),()=>e.classList.remove(`tabster-arrange-mode`)},[r,u]);let[d,f]=H.useReducer(e=>e+1,0);H.useEffect(()=>{if(!r||!s)return;let e=s.raw();if(e)return e.subscribe(()=>f())},[r,s]);let[p,m]=H.useState([]);return H.useEffect(()=>{if(!r){m([]);return}let e=()=>{let e=c.current,t=s?.raw();if(!e||!t){m([]);return}let n=e.getBoundingClientRect(),r=Array.from(e.querySelectorAll(`[data-dock-group]`)),i=[];for(let e of N(t.getLayout())){let t=r.find(t=>t.getAttribute(`data-dock-group`)===e.id);if(!t)continue;let a=t.getBoundingClientRect();i.push({id:e.id,rect:{left:a.left-n.left,top:a.top-n.top,width:a.width,height:a.height},name:l.getName(e.id)??e.id})}m(i)};e();let t=()=>e();window.addEventListener(`resize`,t);let n=l.subscribe(e);return()=>{window.removeEventListener(`resize`,t),n()}},[r,s,c,l,d]),r?(0,U.jsx)(I,{onMove:e=>{let t=e.ids[0],n=Te(e.to.container);!t||!n||V(s?.raw()??null,t,n.groupId,n.direction)},children:(0,U.jsxs)(`div`,{className:`pointer-events-none absolute inset-0 z-20`,children:[(0,U.jsx)(`div`,{className:M(`absolute inset-0`,a)}),p.map((e,t)=>(0,U.jsx)(Ee,{group:e,index:t},e.id))]})}):null}var Q=[{dir:`top`,style:`left-0 right-0 top-0 h-1/4`,label:`above`},{dir:`bottom`,style:`left-0 right-0 bottom-0 h-1/4`,label:`below`},{dir:`left`,style:`top-1/4 bottom-1/4 left-0 w-1/4`,label:`left of`},{dir:`right`,style:`top-1/4 bottom-1/4 right-0 w-1/4`,label:`right of`},{dir:`center`,style:`left-1/4 right-1/4 top-1/4 bottom-1/4`,label:`into`}],$=`::`;function we(e,t){return`${e}${$}${t}`}function Te(e){let t=e.lastIndexOf($);if(t<0)return null;let n=e.slice(0,t),r=Q.find(n=>n.dir===e.slice(t+2));return r?{groupId:n,direction:r.dir}:null}function Ee({group:e,index:t}){let n=L(e.id),r=P({id:e.id,container:xe,index:t,data:e.id});return(0,U.jsxs)(`div`,{ref:r.ref,tabIndex:0,role:`button`,"aria-label":`Move group ${e.name}`,className:M(`pointer-events-auto absolute flex cursor-grab items-center justify-center`,`rounded-md border-2 border-dashed transition-colors active:cursor-grabbing`,`border-border/70 bg-background/40 hover:border-primary/60 hover:bg-primary/[0.06]`,`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`),style:{left:e.rect.left,top:e.rect.top,width:e.rect.width,height:e.rect.height},children:[(0,U.jsxs)(`div`,{className:M(`pointer-events-none inline-flex items-center gap-2 rounded-full bg-background px-3 py-1.5 text-[13px] font-medium shadow ring-1`,n.chip),children:[(0,U.jsx)(p,{size:14,"aria-hidden":!0}),(0,U.jsx)(`span`,{className:M(`size-2 rounded-full`,n.dot)}),e.name]}),Q.map(t=>(0,U.jsx)(De,{hidden:r.isDragging,groupId:e.id,dir:t.dir,style:t.style,label:`${t.label} ${e.name}`},t.dir))]})}function De({hidden:e,groupId:t,dir:n,style:r,label:i}){let a=F({id:we(t,n),kind:`container`,accept:e=>e.id!==t});return(0,U.jsx)(`div`,{ref:a.ref,hidden:e,"data-dnd-label":i,className:M(`absolute transition-colors`,r,a.isOver?`bg-primary/30 ring-2 ring-primary`:`bg-transparent`)})}function Oe(e){let t=e.params?.body??`// ${e.title}\nimport { Tabster } from "@kitora/tabster"\n\nexport function Demo() {\n  return <Tabster panels={{ editor: EditorPanel }} initialPanels={[{ id: "a", component: "editor", title: "demo.tsx" }]} />\n}\n`;return(0,U.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,U.jsxs)(`div`,{className:`flex items-center justify-between border-b border-border bg-surface-1 px-3 py-1.5 text-[11px] text-muted-foreground`,children:[(0,U.jsxs)(`span`,{className:`inline-flex items-center gap-1.5`,children:[(0,U.jsx)(s,{className:`size-3`}),e.params?.language??`tsx`]}),(0,U.jsx)(`span`,{className:`font-mono`,children:`UTF-8 · LF`})]}),(0,U.jsx)(`pre`,{tabIndex:0,className:`flex-1 overflow-auto bg-background px-4 py-3 font-mono text-[12px] leading-relaxed text-foreground`,children:t})]})}var ke=[{name:`src`,folder:!0,depth:0,open:!0},{name:`kit`,folder:!0,depth:1,open:!0},{name:`tabster`,folder:!0,depth:2,open:!0},{name:`tabster.tsx`,folder:!1,depth:3,open:!1},{name:`types.ts`,folder:!1,depth:3,open:!1},{name:`use-keyboard.ts`,folder:!1,depth:3,open:!1},{name:`index.ts`,folder:!1,depth:3,open:!1},{name:`datagrid`,folder:!0,depth:2,open:!1},{name:`task-list`,folder:!0,depth:2,open:!1},{name:`README.md`,folder:!1,depth:0,open:!1}];function Ae(){return(0,U.jsxs)(`div`,{className:`flex h-full flex-col bg-surface-1`,children:[(0,U.jsx)(`div`,{className:`border-b border-border px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground`,children:`Explorer`}),(0,U.jsx)(`ul`,{className:`flex-1 overflow-auto py-1 text-[12px]`,children:ke.map(e=>(0,U.jsxs)(`li`,{className:`flex cursor-pointer items-center gap-1 px-2 py-0.5 hover:bg-muted`,style:{paddingLeft:8+e.depth*12},children:[e.folder?(0,U.jsx)(A,{className:`size-3 transition-transform ${e.open?`rotate-90`:``}`}):(0,U.jsx)(`span`,{className:`inline-block size-3`}),e.folder?(0,U.jsx)(d,{className:`size-3 text-muted-foreground`}):(0,U.jsx)(l,{className:`size-3 text-muted-foreground`}),(0,U.jsx)(`span`,{children:e.name})]},`${e.depth}:${e.name}`))})]})}function je(){return(0,U.jsxs)(`div`,{className:`flex h-full flex-col bg-background`,children:[(0,U.jsx)(`div`,{className:`border-b border-border px-3 py-1.5 text-[11px] text-muted-foreground`,children:(0,U.jsx)(ie,{variant:`outline`,className:`text-[10px]`,children:`zsh`})}),(0,U.jsx)(`pre`,{tabIndex:0,className:`flex-1 overflow-auto px-3 py-2 font-mono text-[12px] leading-relaxed text-muted-foreground`,children:`$ pnpm dev
  ➜  Local:   http://localhost:7001/
  ➜  Network: use --host to expose

[tabster] dock ready · 3 groups · 5 panels`})]})}var Me=[[`Theme`,`Auto`],[`Keyboard map`,`VSCode`],[`Restore layout`,`Reset`]];function Ne(){return(0,U.jsxs)(`div`,{className:`flex h-full flex-col bg-background`,children:[(0,U.jsx)(`div`,{className:`border-b border-border px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground`,children:`Settings`}),(0,U.jsxs)(`div`,{className:`flex-1 space-y-3 overflow-auto px-4 py-3 text-[12px]`,children:[Me.map(([e,t])=>(0,U.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,U.jsx)(`span`,{children:e}),(0,U.jsx)(te,{variant:`outline`,size:`sm`,children:t})]},e)),(0,U.jsxs)(`div`,{className:`text-[11px] text-muted-foreground`,children:[(0,U.jsx)(y,{className:`mb-1 size-3`})," Tabster reads Kitora tokens via CSS vars — restyle by overriding `--dock-*` on the root."]})]})]})}function Pe(){return(0,U.jsxs)(`div`,{className:`flex h-full flex-col bg-background`,children:[(0,U.jsx)(`div`,{className:`border-b border-border px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground`,children:`Notes`}),(0,U.jsxs)(`div`,{tabIndex:0,role:`region`,"aria-label":`Notes`,className:`flex-1 overflow-auto px-4 py-3 text-[12px] leading-relaxed outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-inset`,children:[(0,U.jsxs)(`p`,{children:[`Drag a tab title to another group, an edge of the dock, or out of the window. Every move emits an updated layout JSON via `,(0,U.jsx)(`code`,{children:`onLayoutChange`}),`.`]}),(0,U.jsxs)(`p`,{className:`mt-2`,children:[`Override individual keys via the `,(0,U.jsx)(`code`,{children:`keyboard`}),` prop.`]})]})]})}var Fe={editor:Oe,explorer:Ae,terminal:je,notes:Pe,settings:Ne},Ie=[{type:`editor`,label:`Editor`,Icon:c,defaultTitle:`untitled.tsx`},{type:`terminal`,label:`Terminal`,Icon:h},{type:`notes`,label:`Notes`,Icon:c},{type:`explorer`,label:`Explorer`,Icon:B},{type:`settings`,label:`Settings`,Icon:f}],Le={editor:c,terminal:h,notes:c,explorer:B,settings:f},Re=[{id:`editor.1`,component:`editor`,title:`tabster.tsx`},{id:`editor.2`,component:`editor`,title:`types.ts`,params:{language:`ts`}},{id:`terminal.1`,component:`terminal`,title:`Terminal`,position:{referencePanel:`editor.1`,direction:`below`}},{id:`notes.1`,component:`notes`,title:`Notes`,position:{referencePanel:`editor.1`,direction:`right`}}],ze=[`dock`,`float`,`hidden`];function Be(){let[e,t]=(0,H.useState)(`dock`),[n,r]=(0,H.useState)(!1);return(0,U.jsxs)(se,{children:[(0,U.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[12px]`,children:[(0,U.jsx)(`span`,{className:`text-muted-foreground`,children:`Outliner:`}),ze.map(n=>(0,U.jsx)(`button`,{type:`button`,onClick:()=>t(n),className:M(`rounded-full border border-border px-2 py-0.5 text-[11px]`,e===n?`bg-foreground text-background`:`text-muted-foreground hover:bg-muted`),children:n},n)),(0,U.jsxs)(`button`,{type:`button`,onClick:()=>r(e=>!e),className:M(`ml-auto inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 text-[11px] font-medium transition-colors`,n?`border-primary bg-primary text-primary-foreground`:`border-border text-muted-foreground hover:bg-muted`),children:[(0,U.jsx)(x,{size:12}),n?`Exit arrange mode`:`Arrange mode`]})]}),(0,U.jsxs)(`div`,{className:`relative mt-3 flex h-[640px] overflow-hidden rounded-lg border border-border bg-background`,children:[(0,U.jsxs)(oe,{children:[(0,U.jsx)(ce,{panels:Fe,initialPanels:Re}),(0,U.jsx)(Ce,{active:n})]}),e===`hidden`?null:(0,U.jsx)(pe,{panelCatalog:Ie,panelIcons:Le,mode:e,onModeChange:t})]}),(0,U.jsxs)(`p`,{className:`mt-3 text-[11px] text-muted-foreground`,children:[`Outliner: double-click a name to rename, drag a panel onto a group to re-home, `,(0,U.jsx)(`kbd`,{children:`+`}),` opens the panel-type picker, `,(0,U.jsx)(`kbd`,{children:`Move`}),` for directional re-arrange, `,(0,U.jsx)(`kbd`,{children:`Maximize`}),` per group. Arrange mode: drag any tile, drop on a zone (top / right / bottom / left / center).`]})]})}var Ve=`import { useState } from "react"
import { ChevronRight, File, FileCode, FileSymlink, FileText, Folder, Globe, Settings, TerminalSquare, Wand2 } from "lucide-react"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { cn } from "@kitora/ui/utils"
import { Tabster, TabsterArrangeOverlay, TabsterDockHost, TabsterOutliner, TabsterProvider, type TabsterOutlinerMode, type TabsterOutlinerPanelType, type TabsterPanelRenderProps, type TabsterPanelSpec } from "@kitora/tabster"

function EditorPanel(props: TabsterPanelRenderProps<{ language?: string; body?: string }>) {
  const body = props.params?.body ?? \`// \${props.title}\\nimport { Tabster } from "@kitora/tabster"\\n\\nexport function Demo() {\\n  return <Tabster panels={{ editor: EditorPanel }} initialPanels={[{ id: "a", component: "editor", title: "demo.tsx" }]} />\\n}\\n\`
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-border bg-surface-1 px-3 py-1.5 text-[11px] text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <FileCode className="size-3" />
          {props.params?.language ?? "tsx"}
        </span>
        <span className="font-mono">UTF-8 · LF</span>
      </div>
      <pre tabIndex={0} className="flex-1 overflow-auto bg-background px-4 py-3 font-mono text-[12px] leading-relaxed text-foreground">
        {body}
      </pre>
    </div>
  )
}

const FILES = [
  { name: "src", folder: true, depth: 0, open: true },
  { name: "kit", folder: true, depth: 1, open: true },
  { name: "tabster", folder: true, depth: 2, open: true },
  { name: "tabster.tsx", folder: false, depth: 3, open: false },
  { name: "types.ts", folder: false, depth: 3, open: false },
  { name: "use-keyboard.ts", folder: false, depth: 3, open: false },
  { name: "index.ts", folder: false, depth: 3, open: false },
  { name: "datagrid", folder: true, depth: 2, open: false },
  { name: "task-list", folder: true, depth: 2, open: false },
  { name: "README.md", folder: false, depth: 0, open: false },
]

function ExplorerPanel() {
  return (
    <div className="flex h-full flex-col bg-surface-1">
      <div className="border-b border-border px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Explorer</div>
      <ul className="flex-1 overflow-auto py-1 text-[12px]">
        {FILES.map((f) => (
          <li key={\`\${f.depth}:\${f.name}\`} className="flex cursor-pointer items-center gap-1 px-2 py-0.5 hover:bg-muted" style={{ paddingLeft: 8 + f.depth * 12 }}>
            {f.folder ? <ChevronRight className={\`size-3 transition-transform \${f.open ? "rotate-90" : ""}\`} /> : <span className="inline-block size-3" />}
            {f.folder ? <Folder className="size-3 text-muted-foreground" /> : <File className="size-3 text-muted-foreground" />}
            <span>{f.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function TerminalPanel() {
  return (
    <div className="flex h-full flex-col bg-background">
      <div className="border-b border-border px-3 py-1.5 text-[11px] text-muted-foreground">
        <Badge variant="outline" className="text-[10px]">
          zsh
        </Badge>
      </div>
      <pre tabIndex={0} className="flex-1 overflow-auto px-3 py-2 font-mono text-[12px] leading-relaxed text-muted-foreground">
        {"$ pnpm dev\\n  ➜  Local:   http://localhost:7001/\\n  ➜  Network: use --host to expose\\n\\n[tabster] dock ready · 3 groups · 5 panels"}
      </pre>
    </div>
  )
}

const SETTINGS = [
  ["Theme", "Auto"],
  ["Keyboard map", "VSCode"],
  ["Restore layout", "Reset"],
] as const

function SettingsPanel() {
  return (
    <div className="flex h-full flex-col bg-background">
      <div className="border-b border-border px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Settings</div>
      <div className="flex-1 space-y-3 overflow-auto px-4 py-3 text-[12px]">
        {SETTINGS.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between">
            <span>{label}</span>
            <Button variant="outline" size="sm">
              {value}
            </Button>
          </div>
        ))}
        <div className="text-[11px] text-muted-foreground">
          <Settings className="mb-1 size-3" /> Tabster reads Kitora tokens via CSS vars — restyle by overriding \`--dock-*\` on the root.
        </div>
      </div>
    </div>
  )
}

function NotesPanel() {
  return (
    <div className="flex h-full flex-col bg-background">
      <div className="border-b border-border px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Notes</div>
      <div tabIndex={0} role="region" aria-label="Notes" className="flex-1 overflow-auto px-4 py-3 text-[12px] leading-relaxed outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-inset">
        <p>
          Drag a tab title to another group, an edge of the dock, or out of the window. Every move emits an updated layout JSON via <code>onLayoutChange</code>.
        </p>
        <p className="mt-2">
          Override individual keys via the <code>keyboard</code> prop.
        </p>
      </div>
    </div>
  )
}

const PANELS = { editor: EditorPanel, explorer: ExplorerPanel, terminal: TerminalPanel, notes: NotesPanel, settings: SettingsPanel }

// What the outliner's "+" picker offers, and the icon beside each panel row.
const PANEL_CATALOG: TabsterOutlinerPanelType[] = [
  { type: "editor", label: "Editor", Icon: FileText, defaultTitle: "untitled.tsx" },
  { type: "terminal", label: "Terminal", Icon: TerminalSquare },
  { type: "notes", label: "Notes", Icon: FileText },
  { type: "explorer", label: "Explorer", Icon: FileSymlink },
  { type: "settings", label: "Settings", Icon: Globe },
]
const PANEL_ICONS = { editor: FileText, terminal: TerminalSquare, notes: FileText, explorer: FileSymlink, settings: Globe }

const INITIAL: TabsterPanelSpec[] = [
  { id: "editor.1", component: "editor", title: "tabster.tsx" },
  { id: "editor.2", component: "editor", title: "types.ts", params: { language: "ts" } },
  { id: "terminal.1", component: "terminal", title: "Terminal", position: { referencePanel: "editor.1", direction: "below" } },
  { id: "notes.1", component: "notes", title: "Notes", position: { referencePanel: "editor.1", direction: "right" } },
]

const MODES = ["dock", "float", "hidden"] as const
// the outliner's own header can hide it, so the mode it reports may be "hidden"
type OutlinerVisibility = TabsterOutlinerMode | "hidden"

export function DockWithOutliner() {
  const [mode, setMode] = useState<OutlinerVisibility>("dock")
  const [arranging, setArranging] = useState(false)
  return (
    // the provider shares the dock api and group names with every piece below: no prop threading
    <TabsterProvider>
      <div className="flex flex-wrap items-center gap-2 text-[12px]">
        <span className="text-muted-foreground">Outliner:</span>
        {MODES.map((m) => (
          <button key={m} type="button" onClick={() => setMode(m)} className={cn("rounded-full border border-border px-2 py-0.5 text-[11px]", mode === m ? "bg-foreground text-background" : "text-muted-foreground hover:bg-muted")}>
            {m}
          </button>
        ))}
        <button type="button" onClick={() => setArranging((v) => !v)} className={cn("ml-auto inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 text-[11px] font-medium transition-colors", arranging ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:bg-muted")}>
          <Wand2 size={12} />
          {arranging ? "Exit arrange mode" : "Arrange mode"}
        </button>
      </div>

      <div className="relative mt-3 flex h-[640px] overflow-hidden rounded-lg border border-border bg-background">
        <TabsterDockHost>
          <Tabster panels={PANELS} initialPanels={INITIAL} />
          {/* arrange mode: every tile becomes a drag source with drop zones */}
          <TabsterArrangeOverlay active={arranging} />
        </TabsterDockHost>
        {mode !== "hidden" ? <TabsterOutliner panelCatalog={PANEL_CATALOG} panelIcons={PANEL_ICONS} mode={mode} onModeChange={setMode} /> : null}
      </div>

      <p className="mt-3 text-[11px] text-muted-foreground">
        Outliner: double-click a name to rename, drag a panel onto a group to re-home, <kbd>+</kbd> opens the panel-type picker, <kbd>Move</kbd> for directional re-arrange, <kbd>Maximize</kbd> per group. Arrange mode: drag any tile, drop on a zone (top / right / bottom / left / center).
      </p>
    </TabsterProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Ve,()=>D(()=>import(`./outliner-XP_wh9Ey.js`),[]));function He(){return(0,U.jsxs)(`div`,{children:[(0,U.jsxs)(a,{title:`Sidebar variant`,children:[`Composable library UI wired via `,(0,U.jsx)(`code`,{children:`<TabsterProvider>`}),` — outliner, arrange overlay, and the colored group-label chip all read the shared api + names store from context. No prop threading.`]}),(0,U.jsx)(ae,{n:1,title:`Outliner and arrange mode`,blurb:`Dock, float or hide the outliner; arrange mode turns every tile into a drag source with drop zones.`,code:Ve,children:(0,U.jsx)(Be,{})})]})}export{He as component};