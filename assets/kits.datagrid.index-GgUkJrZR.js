import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{i as t}from"./toaster-CxYvK1SV.js";import{n,t as r}from"./avatar-DDurds49.js";import{t as i}from"./data-grid-sort-Bx_JdFDN.js";import{t as a}from"./bookmark-CMe0QVHR.js";import{t as o}from"./chevron-up-CV04Qf2m.js";import{F as s,G as c,I as l,L as u,Q as d,R as f,V as p,W as m,X as h,Y as g,Z as _,c as v,et as y,q as b,tt as x}from"./data-grid-highlight-CpMXzsVp.js";import{t as S}from"./columns-3-BQj5R0sI.js";import{t as C}from"./eye-Dlb5mfZf.js";import{s as w}from"./kit-docs-BUovISd0.js";import{t as T}from"./layout-grid-0-GKHoiG.js";import{t as E}from"./pin-off-DI3LWNTM.js";import{t as D}from"./pin-CeSKZd8V.js";import{t as ee}from"./plus-DS8FiCg5.js";import{t as O}from"./send-3adh7YZe.js";import{t as k}from"./star-DSb30TWj.js";import{t as A}from"./table-2-Ii29QUcX.js";import{t as te}from"./trash-2-BYfY5R1J.js";import{t as ne}from"./handle-GZENR5qj.js";import{n as re}from"./menu-overlay-item-vuJfbKkO.js";import{t as ie}from"./input-DQo0XDsx.js";import{t as ae}from"./autofocus-Bpzcq_jD.js";import{a as oe,i as se,n as ce,r as le}from"./parts-CQPz3DEM.js";import{t as ue}from"./preset-B4vwv-fd.js";import{c as de}from"./confirm-ByMBokV0.js";import{i as fe,n as pe}from"./presets-CrjzKOxJ.js";import{a as me,o as he}from"./provider-CJrNxsO0.js";import{n as j}from"./kbd-BBrTDCPy.js";import{c as ge,i as _e,l as ve,n as ye,t as be}from"./select-8usvpmkP.js";import{Ai as M,Bc as xe,Cc as Se,Cn as N,Fn as Ce,Ic as we,Mi as P,Mr as Te,Rn as Ee,Un as F,Vn as I,Yn as L,er as De,hi as R,ki as z,mt as Oe,ti as B}from"./index-B9ukmIN1.js";import{t as V}from"./badge-uhFB8J9R.js";import{t as ke}from"./button-group-DpxJH0U4.js";import{n as Ae,t as je}from"./key-hint-Cx6mHwhK.js";import{n as Me,t as Ne}from"./data-grid-density-toggle-DBDS9fHe.js";import{t as Pe}from"./data-grid-view-CdE5uul0.js";import{t as Fe}from"./cards-layout-XaU025Cs.js";import{n as Ie,t as Le}from"./data-grid-export-button-D4Op9Kjt.js";import{t as Re}from"./data-grid-selection-indicator-DwQi65_p.js";import{n as ze,r as Be,t as Ve}from"./data-grid-bulk-actions-CksVzV0g.js";import{t as He}from"./data-grid-group-by-kPMDdX8j.js";import{t as Ue}from"./filter-bar-DmceuDdf.js";import{t as We}from"./save-view-dialog-CFFgT7tx.js";import{t as Ge}from"./data-grid-pagination-5oox18Q_.js";import{t as Ke}from"./data-grid-column-visibility-CKTTNFiA.js";import"./kit-gallery-Bph7isB2.js";import{t as qe}from"./example-BGnSQG2Y.js";var Je=P(`bookmark-check`,[[`path`,{d:`m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z`,key:`169p4p`}],[`path`,{d:`m9 10 2 2 4-4`,key:`1gnqz4`}]]),Ye=P(`star-off`,[[`path`,{d:`M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43`,key:`16m0ql`}],[`path`,{d:`M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91`,key:`1vt8nq`}],[`line`,{x1:`2`,x2:`22`,y1:`2`,y2:`22`,key:`a6p6uj`}]]),H=we();function Xe({layouts:e=[],hideTable:t}){let{layoutId:n,setLayoutId:r}=d(),i=t?e:[{id:`table`,label:`Table`,icon:A,render:()=>null},...e];return i.length<=1?null:(0,H.jsx)(ke,{children:i.map(e=>{let t=e.icon??Ze(e.id);return(0,H.jsxs)(B,{size:`sm`,variant:n===e.id?`secondary`:`outline`,onClick:()=>r(e.id),"aria-label":e.label,title:e.label,children:[t?(0,H.jsx)(t,{}):null,(0,H.jsx)(`span`,{className:`hidden md:inline`,children:e.label})]},e.id)})})}function Ze(e){return e===`table`?A:e===`cards`?S:e===`kanban`?T:null}var U=e(xe(),1);function Qe({title:e,description:t,body:n,footer:r,width:i=`md`,stepper:a=!0,className:s}){let{rows:c,getRowId:l}=h(),{detailRowId:u,setDetailRowId:f}=d(),p=u?c.findIndex(e=>l(e)===u):-1,m=p>=0?c[p]:null,[g,_]=U.useState(m);m&&m!==g&&_(m);let v=m??g,y=e=>{let t=c[p+e];t&&f(l(t))};return(0,H.jsx)(N,{children:(0,H.jsx)(fe,{open:!!m,onOpenChange:e=>{e||f(null)},side:`end`,width:i,title:v?e?e(v):(0,H.jsx)(`span`,{className:`font-mono`,children:l(v)}):``,description:v&&t?t(v):void 0,headerActions:a?(0,H.jsxs)(`div`,{className:`flex items-center gap-0.5`,children:[(0,H.jsx)(B,{variant:`ghost`,size:`icon-sm`,"aria-label":`Previous row`,disabled:p<=0,onClick:()=>y(-1),children:(0,H.jsx)(o,{})}),(0,H.jsx)(B,{variant:`ghost`,size:`icon-sm`,"aria-label":`Next row`,disabled:p<0||p>=c.length-1,onClick:()=>y(1),children:(0,H.jsx)(z,{})})]}):null,footer:v&&r?r(v):void 0,bodyClassName:s,children:v?n(v):null})})}var $e=`Could not update the selected rows. Try again.`;function et({columns:e}){let{mutators:t,rows:n,getRowId:r,history:i}=h(),{bulkEditColumnId:a,setBulkEditColumnId:o,selectedIds:s}=d(),[c]=U.useState(()=>ne()),l=t.bulkUpdate,u=t=>{let n=e.find(e=>e.id===t);return n?.meta?.edit?{col:n,editConfig:n.meta.edit}:null},f=!!l&&u(a)!==null;return U.useEffect(()=>{if(f&&a){let e=document.activeElement,t=e instanceof HTMLElement&&e!==document.body?re(e)??e:null;c.open(a,t)}else c.close()},[f,a,c]),l?(0,H.jsx)(N,{children:(0,H.jsx)(ue,{kind:`dialog`,surface:`center`,presentation:{size:`sm`},handle:c,onOpenChange:e=>{e||o(null)},content:e=>{let t=u(e);if(!t)return null;let{col:a,editConfig:o}=t,c=a.meta?.label??(typeof a.header==`string`?a.header:a.id);return(0,H.jsx)(tt,{label:c,count:s.length,editConfig:o,onApply:async e=>{let t=o.type===`number`?e===``?null:Number(e):e,u=o.patch(t),d=n.filter(e=>s.includes(r(e))).map(e=>({rowId:r(e),before:o.patch(y(e,a)),after:u}));await l(s,u),i?.track(x.bulkEdit(c,s.length),d)}})}})}):null}function tt({label:e,count:t,editConfig:n,onApply:r}){let i=Te(),[a,o]=U.useState(``),[s,c]=U.useState(!1),l=U.useId(),u=`New ${e}`,d=()=>{a===``||i.busy||(c(!1),i.run(()=>r(a)).then(()=>i.resolve(),()=>c(!0)))},f=s&&!i.busy,p={[ae]:``};return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(se,{title:`Bulk edit ${e}`,description:(0,H.jsxs)(H.Fragment,{children:[`Apply a new value to `,t,` `,t===1?`row`:`rows`,` via`,` `,(0,H.jsx)(`code`,{className:`rounded bg-muted px-1 py-0.5 font-mono text-[11px]`,children:`mutators.bulkUpdate`}),`.`]})}),(0,H.jsxs)(ce,{className:`flex flex-col gap-2`,children:[n.type===`select`?(0,H.jsxs)(be,{items:n.options,value:a===``?null:a,onValueChange:e=>o(e??``),disabled:i.busy,children:[(0,H.jsx)(ge,{...p,size:`sm`,"aria-label":u,"aria-describedby":f?l:void 0,className:`w-full text-xs`,children:(0,H.jsx)(ve,{placeholder:`Choose…`})}),(0,H.jsx)(ye,{alignItemWithTrigger:!1,className:`text-xs`,children:n.options.map(e=>(0,H.jsx)(_e,{value:e.value,children:e.label},e.value))})]}):(0,H.jsx)(ie,{...p,value:a,type:n.type===`number`?`number`:`text`,placeholder:n.placeholder,"aria-label":u,"aria-describedby":f?l:void 0,disabled:i.busy,className:`h-7`,onChange:e=>o(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),d())},...n.type===`number`?{min:n.min,max:n.max,step:n.step}:{}}),f?(0,H.jsx)(`p`,{id:l,role:`alert`,className:`rounded-md bg-destructive/10 px-2 py-1.5 text-xs text-destructive`,children:de(i.error,$e)}):null]}),(0,H.jsxs)(le,{children:[(0,H.jsx)(B,{size:`sm`,variant:`outline`,onClick:()=>void i.close(`close-button`),disabled:i.busy,children:`Cancel`}),(0,H.jsxs)(B,{size:`sm`,onClick:d,disabled:i.busy||a===``,children:[i.busy?(0,H.jsx)(oe,{}):null,i.busy?`Applying…`:`Apply to ${t}`]})]})]})}var W=[{id:c.focusSearch,handler:`onSlash`,title:`Focus search`},{id:c.openFilters,handler:`onF`,title:`Open filter picker`},{id:c.openViews,handler:`onV`,title:`Open views menu`},{id:c.openColumns,handler:`onC`,title:`Toggle column visibility`},{id:c.openSort,handler:`onS`,title:`Open sort dropdown`},{id:c.showShortcuts,handler:`onQuestion`,title:`Show keyboard shortcuts`}];function nt(e){let t=me(),n=U.useRef(e);n.current=e;let r=W.filter(t=>e[t.handler]!==void 0).map(e=>e.id).join(` `);U.useEffect(()=>{if(r===``)return;let e=new Set(r.split(` `)),i={};for(let t of W)e.has(t.id)&&(i[t.id]={title:t.title,category:m,run:()=>n.current[t.handler]?.()});let a=b.filter(t=>e.has(t.command)),o=t.register(i,`datagrid`),s=t.keymap.add(`default`,a,{source:`datagrid`});return()=>{s.dispose(),o()}},[t,r])}function rt({searchInputRef:e,disabled:t,onOpenColumns:n,onOpenSort:r,onOpenViews:i}){let a=d();return nt({onSlash:t?.slash?void 0:()=>e?.current?.focus(),onF:t?.f?void 0:()=>a.setFilterPickerOpen(!0),onQuestion:t?.question?void 0:()=>a.setShortcutsHelpOpen(!0),onS:t?.s?void 0:r,onV:t?.v?void 0:i,onC:t?.c?void 0:n}),null}var it=[{title:`Navigation`,rows:[{keys:[`/`],label:`Focus search`,command:c.focusSearch},{keys:[`?`],label:`Show this help`,command:c.showShortcuts},{keys:[`Escape`],label:`Close popovers / dialogs`},{keys:[`o`],label:`Open the focused card or row (cards, kanban, virtual)`}]},{title:`Toolbar`,rows:[{keys:[`f`],label:`Open filter picker`,command:c.openFilters},{keys:[`s`],label:`Open sort dropdown`,command:c.openSort},{keys:[`v`],label:`Open views menu`,command:c.openViews},{keys:[`c`],label:`Toggle column visibility`,command:c.openColumns}]},{title:`Lists / dropdowns`,rows:[{keys:[`ArrowUp`,`ArrowDown`],label:`Move highlight`},{keys:[`Home`,`End`],label:`Jump to ends`},{keys:[`Enter`],label:`Select highlighted item`},{keys:[`Space`],label:`Toggle in multi-select`}]},{title:`Boolean filter`,rows:[{keys:[`t`,`y`],label:`True`},{keys:[`n`,`f`],label:`False`}]}];function at({sections:e=it,title:t=`Keyboard shortcuts`,description:n=`Speed-up shortcuts available across the grid.`}){let{shortcutsHelpOpen:r,setShortcutsHelpOpen:i}=d();return(0,H.jsx)(N,{children:(0,H.jsx)(pe,{open:r,onOpenChange:e=>i(e),title:t,description:n,size:`md`,children:(0,H.jsx)(`div`,{className:`grid grid-cols-1 gap-4 sm:grid-cols-2`,children:e.map(e=>(0,H.jsxs)(`section`,{children:[(0,H.jsx)(`h3`,{className:`mb-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground`,children:e.title}),(0,H.jsx)(`ul`,{className:`space-y-1.5`,children:e.rows.map((e,t)=>(0,H.jsxs)(`li`,{className:`flex items-center justify-between gap-3 text-[12.5px]`,children:[(0,H.jsx)(`span`,{className:`text-foreground/80`,children:e.label}),e.command?(0,H.jsx)(ct,{command:e.command,fallback:e.keys}):(0,H.jsx)(st,{keys:e.keys})]},t))})]},e.title))})})})}function ot({keys:e,render:t}){return(0,H.jsx)(`span`,{className:`flex items-center gap-1`,children:e.map((e,n)=>(0,H.jsxs)(U.Fragment,{children:[n>0?(0,H.jsx)(`span`,{className:`text-[10px] text-muted-foreground`,children:`/`}):null,t(e)]},e))})}function st({keys:e}){let t=he();return(0,H.jsx)(ot,{keys:e,render:e=>(0,H.jsx)(j,{binding:e,...t?{platform:t.platform}:{}})})}function ct({command:e,fallback:t}){let n=he(),r=Ae(e,t);return r.length===0?(0,H.jsx)(`span`,{className:`text-[11px] text-muted-foreground`,children:`unbound`}):(0,H.jsx)(ot,{keys:r,render:e=>(0,H.jsx)(j,{binding:e,...n?{platform:n.platform}:{}})})}var lt={q:`q`,f:`f`,s:`s`,p:`p`,ps:`ps`,v:`v`,hc:`hc`,co:`co`,d:`d`,l:`l`},ut={search:`q`,filters:`f`,sort:`s`,pagination:`p`,pageSize:`ps`,viewId:`v`,hiddenColumns:`hc`,columnOrder:`co`,density:`d`,layoutId:`l`};function dt(e){return new Set((e?.exclude??[]).map(e=>ut[e]))}function ft(e,t){let n=e?.namespace;return n?`${n}.${t}`:t}function pt(e){return encodeURIComponent(JSON.stringify(e))}function mt(e,t){if(!e)return t;try{return JSON.parse(decodeURIComponent(e))}catch{return t}}function ht(e){return e.map(e=>`${e.fieldId}:${e.direction}`).join(`,`)}function gt(e){return e?e.split(`,`).map(e=>{let[t,n]=e.split(`:`);return!t||n!==`asc`&&n!==`desc`?null:{fieldId:t,direction:n}}).filter(Boolean):[]}function _t(e,t){let n=dt(t),r=r=>n.has(r)?null:e.get(ft(t,lt[r])),i={},a=r(`q`);a!==null&&(i.search=a);let o=r(`f`);o!==null&&(i.filters=mt(o,[]));let s=r(`s`);s!==null&&(i.sort=gt(s));let c=r(`p`),l=r(`ps`);!n.has(`p`)&&(c!==null||l!==null)&&(i.pagination={direction:`forward`,cursor:null,page:c?Math.max(1,Number(c)||1):1}),l!==null&&(i.pageSize=Math.max(1,Number(l)||20));let u=r(`v`);u!==null&&(i.viewId=u||null);let d=r(`hc`);d!==null&&(i.hiddenColumns=d?d.split(`,`):[]);let f=r(`co`);f!==null&&(i.columnOrder=f?f.split(`,`):[]);let p=r(`d`);(p===`compact`||p===`comfortable`)&&(i.density=p);let m=r(`l`);return m!==null&&(i.layoutId=m),i}function vt(e,t,n){let r=dt(n),i=(t,i)=>{if(r.has(t))return;let a=ft(n,lt[t]);i===null||i===``?e.delete(a):e.set(a,i)};return i(`q`,t.search||null),i(`f`,t.filters.length?pt(t.filters):null),i(`s`,t.sort.length?ht(t.sort):null),i(`p`,t.pagination.page>1?String(t.pagination.page):null),i(`ps`,t.pageSize===20?null:String(t.pageSize)),i(`v`,t.viewId),i(`hc`,t.hiddenColumns.length?t.hiddenColumns.join(`,`):null),i(`co`,t.columnOrder.length?t.columnOrder.join(`,`):null),i(`d`,t.density===`comfortable`?null:t.density),i(`l`,t.layoutId===`table`?null:t.layoutId),e}function yt(e={}){let{enabled:t=!0,mode:n=`replace`}=e,r=d(),i=U.useRef(!1),a=U.useRef({ui:r,options:e});a.current={ui:r,options:e},U.useEffect(()=>{if(!t||typeof window>`u`)return;let{ui:e,options:n}=a.current,r=_t(new URLSearchParams(window.location.search),n);r.search!==void 0&&e.setSearch(r.search),r.filters!==void 0&&e.setFilters(r.filters),r.sort!==void 0&&e.setSort(r.sort),r.pagination!==void 0&&e.setPagination(r.pagination),r.pageSize!==void 0&&e.setPageSize(r.pageSize),r.viewId!==void 0&&e.setViewId(r.viewId),r.hiddenColumns!==void 0&&e.setHiddenColumns(r.hiddenColumns),r.columnOrder!==void 0&&e.setColumnOrder(r.columnOrder),r.density!==void 0&&e.setDensity(r.density),r.layoutId!==void 0&&e.setLayoutId(r.layoutId),i.current=!0;let o=()=>{let{ui:e,options:t}=a.current,n=_t(new URLSearchParams(window.location.search),t);n.search!==void 0&&e.setSearch(n.search),n.filters!==void 0&&e.setFilters(n.filters),n.sort!==void 0&&e.setSort(n.sort),n.pagination!==void 0&&e.setPagination(n.pagination),n.pageSize!==void 0&&e.setPageSize(n.pageSize),n.viewId!==void 0&&e.setViewId(n.viewId),n.hiddenColumns!==void 0&&e.setHiddenColumns(n.hiddenColumns),n.columnOrder!==void 0&&e.setColumnOrder(n.columnOrder),n.density!==void 0&&e.setDensity(n.density),n.layoutId!==void 0&&e.setLayoutId(n.layoutId)};return window.addEventListener(`popstate`,o),()=>window.removeEventListener(`popstate`,o)},[t]);let o=JSON.stringify([r.search,r.filters,r.sort,r.pagination.page,r.pageSize,r.viewId,r.hiddenColumns,r.columnOrder,r.columnSizes,r.density,r.layoutId]);U.useEffect(()=>{if(!t||typeof window>`u`||!i.current)return;let{ui:e,options:r}=a.current,o=new URLSearchParams(window.location.search);vt(o,{search:e.search,filters:e.filters,sort:e.sort,pagination:e.pagination,pageSize:e.pageSize,viewId:e.viewId,hiddenColumns:e.hiddenColumns,columnOrder:e.columnOrder,density:e.density,layoutId:e.layoutId},r);let s=`${window.location.pathname}?${o.toString()}${window.location.hash}`;n===`push`?window.history.pushState(null,``,s):window.history.replaceState(null,``,s)},[t,n,o])}var bt=class{key;constructor(e){this.key=`dg:views:${e}`}read(){if(typeof window>`u`)return[];try{let e=window.localStorage.getItem(this.key);if(!e)return[];let t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}}write(e){if(!(typeof window>`u`))try{window.localStorage.setItem(this.key,JSON.stringify(e))}catch{}}async list(){return this.read()}async get(e){return this.read().find(t=>t.id===e)??null}async save(e){let t=this.read(),n=t.findIndex(t=>t.id===e.id),r=new Date().toISOString(),i={...e,updatedAt:r,createdAt:n>=0?t[n].createdAt:e.createdAt??r};return n>=0?t[n]=i:t.push(i),this.write(t),i}async delete(e){this.write(this.read().filter(t=>t.id!==e))}async setDefault(e){this.write(this.read().map(t=>({...t,isDefault:e!==null&&t.id===e})))}async setFavorite(e,t){this.write(this.read().map(n=>n.id===e?{...n,isFavorite:t}:n))}};function xt({scope:e,storage:t,builtinViews:n}){let r=U.useRef(null);r.current||=t??new bt(e);let i=r.current,[a,o]=U.useState([]),[s,c]=U.useState(!0),l=U.useCallback(async()=>{c(!0);try{o(await i.list())}finally{c(!1)}},[i]);U.useEffect(()=>{l()},[l]);let u=U.useMemo(()=>(n??[]).map(e=>({...e,isBuiltin:!0})),[n]),d=U.useMemo(()=>{let e=a.toSorted((e,t)=>e.isFavorite===t.isFavorite?e.name.localeCompare(t.name):e.isFavorite?-1:1);return[...u,...e]},[u,a]);return{views:d,defaultView:U.useMemo(()=>d.find(e=>e.isDefault)??null,[d]),loading:s,save:U.useCallback(async e=>{let t=await i.save(e);return await l(),t},[i,l]),remove:U.useCallback(async e=>{await i.delete(e),await l()},[i,l]),setDefault:U.useCallback(async e=>{await i.setDefault(e),await l()},[i,l]),setFavorite:U.useCallback(async(e,t)=>{await i.setFavorite(e,t),await l()},[i,l]),reload:l}}var St=`All`;function Ct({scope:e,storage:t,builtinViews:n,applyDefaultOnMount:r=!0,showShortcut:i=!0}){let o=d(),{views:s,save:l,remove:u,setDefault:f,setFavorite:p}=xt({scope:e,storage:t,builtinViews:n}),[m,h]=U.useState(!1),g=U.useRef(!1),_=s.find(e=>e.id===o.viewId)??null,v=Tt(o,_),{setSearch:y,setFilters:b,setSort:x,setHiddenColumns:S,setColumnOrder:C,setColumnSizes:w,setViewId:T}=o,E=U.useCallback(e=>{y(e.state.search),b(e.state.filters),x(e.state.sort),S(e.state.hiddenColumns??[]),C(e.state.columnOrder??[]),w(e.state.columnSizes??{}),T(e.id||null)},[y,b,x,S,C,w,T]);U.useEffect(()=>{if(!r||g.current)return;let e=s.find(e=>e.isDefault);e&&(g.current=!0,E(e))},[s,r,E]);let D=()=>{o.setSearch(``),o.setFilters([]),o.setSort([]),o.setHiddenColumns([]),o.setColumnOrder([]),o.setColumnSizes({}),o.setViewId(null)},O=()=>({search:o.search,filters:o.filters,sort:o.sort,hiddenColumns:o.hiddenColumns,columnOrder:o.columnOrder,columnSizes:o.columnSizes}),k=async e=>{let t=new Date().toISOString(),n=await l({id:`view-${Date.now()}`,name:e,state:O(),createdAt:t,updatedAt:t});o.setViewId(n.id)},A=async()=>{!_||_.isBuiltin||await l({..._,state:O(),updatedAt:new Date().toISOString()})};return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(Ce,{children:[(0,H.jsx)(De,{asChild:!0,children:(0,H.jsxs)(B,{variant:`outline`,size:`sm`,className:`h-7 gap-1.5 px-2 text-xs`,children:[(0,H.jsx)(a,{className:`size-3`}),(0,H.jsx)(`span`,{className:`max-w-[10rem] truncate`,children:_?.name??St}),v&&(0,H.jsx)(`span`,{className:`inline-block size-1.5 rounded-full bg-primary`,title:`Unsaved changes`}),i&&(0,H.jsx)(je,{command:c.openViews,fallback:`v`,className:`ms-0.5`}),(0,H.jsx)(z,{className:`size-2.5 opacity-60`})]})}),(0,H.jsxs)(Ee,{align:`end`,className:`w-56 p-0.5`,children:[(0,H.jsx)(I,{children:(0,H.jsxs)(F,{onClick:D,className:`h-7 gap-1.5 px-2 py-0 text-xs`,children:[(0,H.jsx)(M,{className:R(`size-2.5 shrink-0`,o.viewId?`opacity-0`:`opacity-100`)}),St]})}),s.length>0&&(0,H.jsx)(L,{className:`my-0.5`}),s.length>0&&(0,H.jsx)(I,{children:s.map(e=>(0,H.jsx)(wt,{view:e,active:o.viewId===e.id,onSelect:()=>E(e),onSetDefault:()=>f(e.isDefault?null:e.id),onSetFavorite:()=>p(e.id,!e.isFavorite),onDelete:()=>{o.viewId===e.id&&o.setViewId(null),u(e.id)}},e.id))}),(0,H.jsx)(L,{className:`my-0.5`}),(0,H.jsxs)(I,{children:[v&&_&&!_.isBuiltin&&(0,H.jsxs)(F,{onClick:()=>void A(),className:`h-7 gap-1.5 px-2 py-0 text-xs`,children:[(0,H.jsx)(Je,{className:`size-3`}),`Save changes`]}),(0,H.jsxs)(F,{onClick:()=>h(!0),className:`h-7 gap-1.5 px-2 py-0 text-xs`,children:[(0,H.jsx)(ee,{className:`size-3`}),`Save as new view…`]})]})]})]}),(0,H.jsx)(We,{open:m,onOpenChange:h,onSave:k})]})}function wt({view:e,active:t,onSelect:n,onSetDefault:r,onSetFavorite:i,onDelete:a}){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(F,{onClick:n,className:`group h-7 gap-1.5 px-2 py-0 text-xs`,children:[(0,H.jsx)(M,{className:R(`size-2.5 shrink-0`,t?`opacity-100`:`opacity-0`)}),e.isFavorite&&(0,H.jsx)(k,{className:`size-2.5 shrink-0 fill-amber-500 text-amber-500`}),(0,H.jsx)(`span`,{className:`flex-1 truncate`,children:e.name}),e.isDefault&&(0,H.jsx)(`span`,{className:`text-[10px] text-muted-foreground`,children:`default`}),e.isBuiltin&&(0,H.jsx)(`span`,{className:`text-[10px] text-muted-foreground`,children:`built-in`})]}),!e.isBuiltin&&(0,H.jsxs)(`div`,{className:`flex items-center gap-1 px-6 pb-1 text-[10px] text-muted-foreground`,children:[(0,H.jsx)(`button`,{type:`button`,className:`transition-colors hover:text-foreground`,onClick:e=>{e.stopPropagation(),i()},children:e.isFavorite?(0,H.jsxs)(`span`,{className:`inline-flex items-center gap-0.5`,children:[(0,H.jsx)(Ye,{className:`size-2.5`}),`Unfavorite`]}):(0,H.jsxs)(`span`,{className:`inline-flex items-center gap-0.5`,children:[(0,H.jsx)(k,{className:`size-2.5`}),`Favorite`]})}),(0,H.jsx)(`span`,{children:`·`}),(0,H.jsx)(`button`,{type:`button`,className:`transition-colors hover:text-foreground`,onClick:e=>{e.stopPropagation(),r()},children:e.isDefault?(0,H.jsxs)(`span`,{className:`inline-flex items-center gap-0.5`,children:[(0,H.jsx)(E,{className:`size-2.5`}),`Unpin`]}):(0,H.jsxs)(`span`,{className:`inline-flex items-center gap-0.5`,children:[(0,H.jsx)(D,{className:`size-2.5`}),`Pin`]})}),(0,H.jsx)(`span`,{children:`·`}),(0,H.jsx)(`button`,{type:`button`,className:`transition-colors hover:text-destructive`,onClick:e=>{e.stopPropagation(),a()},children:(0,H.jsxs)(`span`,{className:`inline-flex items-center gap-0.5`,children:[(0,H.jsx)(te,{className:`size-2.5`}),`Delete`]})})]})]})}function Tt(e,t){if(!t)return e.search!==``||e.filters.length>0||e.sort.length>0;let n=t.state.hiddenColumns??[],r=t.state.columnOrder??[],i=t.state.columnSizes??{};return e.search!==t.state.search||!G(e.filters,t.state.filters,Ot)||!G(e.sort,t.state.sort,kt)||!G(e.hiddenColumns,n,Et)||!G(e.columnOrder,r,Et)||!Dt(e.columnSizes,i)}function Et(e,t){return e===t}function Dt(e,t){let n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let r of n)if(e[r]!==t[r])return!1;return!0}function G(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}function Ot(e,t){return e.fieldId===t.fieldId&&e.operator===t.operator&&JSON.stringify(e.value)===JSON.stringify(t.value)}function kt(e,t){return e.fieldId===t.fieldId&&e.direction===t.direction}var K=[`Platform`,`Growth`,`Design`,`Infra`,`Data`],q=[`admin`,`editor`,`viewer`],J=[`active`,`invited`,`paused`],Y=[`free`,`pro`,`enterprise`],At=[`San Francisco, CA`,`New York, NY`,`London, UK`,`Berlin, DE`,`Tokyo, JP`,`Sydney, AU`,`Toronto, CA`,`Singapore, SG`],jt=[`America/Los_Angeles`,`America/New_York`,`Europe/London`,`Europe/Berlin`,`Asia/Tokyo`,`Australia/Sydney`,`America/Toronto`,`Asia/Singapore`],X=[`Grace Bennett`,`Linus Whitfield`,`Maya Chamberlain`,`Nina Holloway`,`Owen Carmichael`,`Petra Ashford`,`Quinn Faulkner`,`Riley Pendleton`,`Sam Thatcher`,`Tara Lockwood`,`Wren Caldwell`,`Beck Donovan`,`Drew Sterling`,`Cora Maxwell`,`Eli Hawthorne`,`Felix Brennan`,`Hazel Garrison`,`Iris Whitaker`,`Jude Pemberton`,`Kira Stanton`],Mt=3600*1e3,Nt=1440*60*1e3;function Pt(e){return Array.from({length:e},(e,t)=>{let n=Math.floor(t/X.length),r=n>0?`${X[t%X.length]} ${n+1}`:X[t%X.length],i=r.toLowerCase().replace(/\s+/g,`.`),a=i.split(`.`)[0];return{id:`u-${t+1}`,name:r,email:`${i}@kitora.dev`,role:q[t%q.length],status:J[t%J.length],team:K[t%K.length],tasks:t*13%47+1,lastActive:new Date(Date.now()-t*Mt*7).toISOString(),plan:Y[t%Y.length],location:At[t%At.length],timezone:jt[t%jt.length],joined:new Date(Date.now()-(200+t*17%700)*Nt).toISOString(),renews:new Date(Date.now()+(t*23%90+1)*Nt).toISOString(),mfa:t%3!=0,github:`@${a}`,slack:`#${K[t%K.length].toLowerCase()}-${a}`,prs:t*7%23+1,tickets:t*11%19,score:t*13%100+1,storage:t*41%950+50}})}var Z=Pt(73),Ft=e=>q.some(t=>t===e),It=e=>J.some(t=>t===e),Lt=u()([{fieldId:`name`,label:`Name`},{fieldId:`team`,label:`Team`},{fieldId:`tasks`,label:`Open tasks`},{fieldId:`lastActive`,label:`Last active`},{fieldId:`plan`,label:`Plan`},{fieldId:`location`,label:`Location`},{fieldId:`joined`,label:`Joined`},{fieldId:`prs`,label:`PRs`},{fieldId:`tickets`,label:`Tickets`},{fieldId:`score`,label:`Score`},{fieldId:`storage`,label:`Storage`}]),Rt=l()([{id:`role`,label:`Role`,type:`select`,group:`User`,options:[{value:`admin`,label:`Admin`},{value:`editor`,label:`Editor`},{value:`viewer`,label:`Viewer`}],toWhere:e=>({role:e.value})},{id:`status`,label:`Status`,type:`multi-select`,group:`User`,options:[{value:`active`,label:`Active`},{value:`invited`,label:`Invited`},{value:`paused`,label:`Paused`}],toWhere:e=>({status:e.value})},{id:`team`,label:`Team`,type:`select`,group:`User`,options:[{value:`Platform`,label:`Platform`},{value:`Growth`,label:`Growth`},{value:`Design`,label:`Design`},{value:`Infra`,label:`Infra`},{value:`Data`,label:`Data`}],toWhere:e=>({team:e.value})},{id:`tasks`,label:`Open tasks`,type:`number`,group:`Activity`,toWhere:e=>({tasks:e.value})},{id:`lastActive`,label:`Last active`,type:`date-range`,group:`Activity`,toWhere:e=>({lastActive:e.value})},{id:`plan`,label:`Plan`,type:`multi-select`,group:`Account`,options:[{value:`free`,label:`Free`},{value:`pro`,label:`Pro`},{value:`enterprise`,label:`Enterprise`}],toWhere:e=>({plan:e.value})},{id:`joined`,label:`Joined`,type:`date-range`,group:`Account`,toWhere:e=>({joined:e.value})},{id:`renews`,label:`Renews`,type:`date`,group:`Account`,toWhere:e=>({renews:e.operator===`eq`?p(e.value):e.value})}]),zt=e=>e.split(` `).map(e=>e[0]).join(``).toUpperCase().slice(0,2),Bt=new Intl.DateTimeFormat(void 0,{month:`short`,day:`numeric`}),Q=e=>Bt.format(new Date(e)),Vt={active:`bg-emerald-500/10 text-[color:var(--dk-chip-ink,var(--color-emerald-800))] dark:text-[color:var(--dk-chip-ink,var(--color-emerald-300))]`,invited:`bg-amber-500/10 text-[color:var(--dk-chip-ink,var(--color-amber-700))] dark:text-[color:var(--dk-chip-ink,var(--color-amber-300))]`,paused:`bg-muted text-muted-foreground`},$=s()([{id:`name`,header:`User`,cell:e=>(0,H.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,H.jsx)(r,{className:`size-7`,children:(0,H.jsx)(n,{className:`text-[10px]`,children:zt(e.name)})}),(0,H.jsxs)(`div`,{className:`flex flex-col`,children:[(0,H.jsx)(`span`,{className:`font-medium`,children:e.name}),(0,H.jsx)(`span`,{className:`font-mono text-[10.5px] text-muted-foreground`,children:e.email})]})]}),size:240,meta:{sortFieldId:`name`,label:`User`,pin:`start`,aggregate:`count`,searchable:!0}},{id:`role`,header:`Role`,cell:e=>(0,H.jsx)(V,{variant:`outline`,className:`font-mono text-[10px] uppercase`,children:e.role}),size:96,meta:{filterFieldId:`role`,edit:{type:`select`,options:[{value:`admin`,label:`Admin`},{value:`editor`,label:`Editor`},{value:`viewer`,label:`Viewer`}],patch:e=>Ft(e)?{role:e}:{}}}},{id:`status`,header:`Status`,cell:e=>(0,H.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 font-mono text-[10px] uppercase ${Vt[e.status]}`,children:[(0,H.jsx)(`span`,{className:`size-1.5 rounded-full bg-current`}),e.status]}),size:110,meta:{filterFieldId:`status`,groupable:!0}},{id:`team`,header:`Team`,cell:e=>(0,H.jsx)(`span`,{className:`text-muted-foreground`,children:e.team}),size:110,meta:{sortFieldId:`team`,filterFieldId:`team`,aggregate:`countDistinct`,searchable:!0,label:`Team`}},{id:`tasks`,header:`Open tasks`,cell:e=>(0,H.jsx)(`span`,{className:`font-mono tabular-nums`,children:e.tasks}),size:110,meta:{sortFieldId:`tasks`,filterFieldId:`tasks`,align:`end`,aggregate:`sum`}},{id:`plan`,header:`Plan`,cell:e=>(0,H.jsx)(V,{variant:e.plan===`enterprise`?`default`:`outline`,className:`font-mono text-[10px] uppercase`,children:e.plan}),size:110,meta:{sortFieldId:`plan`,filterFieldId:`plan`}},{id:`location`,header:`Location`,cell:e=>(0,H.jsx)(`span`,{className:`text-muted-foreground`,children:e.location}),size:170,meta:{sortFieldId:`location`}},{id:`timezone`,header:`Timezone`,cell:e=>(0,H.jsx)(`span`,{className:`font-mono text-[11.5px] text-muted-foreground`,children:e.timezone}),size:180},{id:`joined`,header:`Joined`,cell:e=>(0,H.jsx)(`span`,{className:`font-mono text-muted-foreground`,children:Q(e.joined)}),size:120,meta:{sortFieldId:`joined`,filterFieldId:`joined`}},{id:`mfa`,header:`MFA`,cell:e=>e.mfa?(0,H.jsx)(`span`,{className:`inline-flex items-center gap-1 font-mono text-[11px] text-emerald-700 dark:text-emerald-400`,children:`●`}):(0,H.jsx)(`span`,{className:`font-mono text-[11px] text-muted-foreground/60`,children:`○`}),size:70,meta:{align:`center`}},{id:`github`,header:`GitHub`,cell:e=>(0,H.jsx)(`span`,{className:`font-mono text-[11.5px] text-muted-foreground`,children:e.github}),size:140},{id:`slack`,header:`Slack`,cell:e=>(0,H.jsx)(`span`,{className:`font-mono text-[11.5px] text-muted-foreground`,children:e.slack}),size:200},{id:`prs`,header:`PRs`,cell:e=>(0,H.jsx)(`span`,{className:`font-mono tabular-nums`,children:e.prs}),size:80,meta:{sortFieldId:`prs`,align:`end`,aggregate:`sum`}},{id:`tickets`,header:`Tickets`,cell:e=>(0,H.jsx)(`span`,{className:`font-mono tabular-nums`,children:e.tickets}),size:90,meta:{sortFieldId:`tickets`,align:`end`,aggregate:`sum`}},{id:`score`,header:`Score`,cell:e=>(0,H.jsx)(`span`,{className:R(`font-mono font-medium tabular-nums`,e.score>=80?`text-emerald-700 dark:text-emerald-400`:e.score>=50?`text-amber-700 dark:text-amber-400`:`text-rose-700 dark:text-rose-400`),children:e.score}),size:90,meta:{sortFieldId:`score`,align:`end`,aggregate:`avg`}},{id:`storage`,header:`Storage`,cell:e=>(0,H.jsxs)(`span`,{className:`font-mono tabular-nums text-muted-foreground`,children:[e.storage,` MB`]}),size:110,meta:{sortFieldId:`storage`,align:`end`,aggregate:`sum`}},{id:`lastActive`,header:`Last active`,cell:e=>(0,H.jsx)(`span`,{className:`font-mono text-muted-foreground`,children:Q(e.lastActive)}),size:120,meta:{sortFieldId:`lastActive`,filterFieldId:`lastActive`,pin:`end`}}]);function Ht(){return(0,H.jsx)(_,{defaultPageSize:20,children:(0,H.jsx)(g,{adapter:(0,U.useMemo)(()=>f({initial:Z,sortOptions:Lt,filterFields:Rt,search:{placeholder:`Search users…`,toWhere:e=>({_q:e})},searchKeys:[`name`,`email`,`team`],latencyMs:0,getChildren:e=>new Promise(t=>{setTimeout(()=>{let n=Z.filter(t=>t.team===e.team&&t.id!==e.id),r=Z.findIndex(t=>t.id===e.id);t(n.filter(e=>Z.indexOf(e)>r).slice(0,2))},200)}),hasChildren:e=>{let t=Z.findIndex(t=>t.id===e.id);return Z.some((n,r)=>r>t&&n.team===e.team&&n.id!==e.id)}}),[]),children:(0,H.jsx)(Wt,{})})})}var Ut=[Fe({headlineColumnId:`name`,bodyColumnIds:[`role`,`status`,`team`,`tasks`,`lastActive`]}),Ie({headlineColumnId:`name`,subheadColumnId:`team`,groupBy:e=>e.status,patchFor:e=>It(e)?{status:e}:{},columns:[{key:`active`,label:`Active`,accent:`bg-emerald-500/10 text-[color:var(--dk-chip-ink,var(--color-emerald-800))] dark:text-[color:var(--dk-chip-ink,var(--color-emerald-300))]`},{key:`invited`,label:`Invited`,accent:`bg-amber-500/10 text-[color:var(--dk-chip-ink,var(--color-amber-700))] dark:text-[color:var(--dk-chip-ink,var(--color-amber-300))]`},{key:`paused`,label:`Paused`}]})];function Wt(){let{setDetailRowId:e,selectedIds:n,setSelectedIds:r}=d(),[a]=(0,U.useState)(()=>Oe());yt({namespace:`users`});let o=(0,U.useRef)(null),[s,c]=(0,U.useState)(null);return ze({enabled:!0,hostRef:o,onChange:c,onSelect:(e,t)=>{r(n=>t.additive?Array.from(new Set([...n,...e])):e)}}),v({enabled:!0,onLongPress:e=>{r(t=>t.includes(e)?t:[...t,e])}}),Be({hostRef:o,onClear:()=>r([]),onSelectAll:()=>{let e=o.current?.querySelectorAll(`[data-row-id]`);if(!e)return;let t=[];e.forEach(e=>{let n=e.dataset.rowId;n&&t.push(n)}),r(t)}}),(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(rt,{}),(0,H.jsx)(t,{toaster:a}),(0,H.jsxs)(`div`,{ref:o,children:[s?(0,H.jsx)(`div`,{"aria-hidden":!0,className:`pointer-events-none fixed z-50 rounded-sm border-2 border-primary bg-primary/10`,style:{left:s.left,top:s.top,width:s.width,height:s.height}}):null,(0,H.jsx)(`div`,{className:`mt-4 rounded-lg border border-border bg-surface-1 p-2`,children:(0,H.jsx)(Ue,{rightSlot:(0,H.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1`,children:[(0,H.jsx)(Me,{columns:$}),(0,H.jsx)(i,{options:Lt}),(0,H.jsx)(He,{columns:$}),(0,H.jsx)(Ct,{scope:`examples:datagrid`}),(0,H.jsx)(Le,{fields:[[`Name`,e=>e.name],[`Email`,e=>e.email],[`Role`,e=>e.role],[`Status`,e=>e.status],[`Team`,e=>e.team],[`Open tasks`,e=>e.tasks],[`Last active`,e=>e.lastActive]],formats:[`csv`,`json`,`markdown`],filename:()=>`users-${new Date().toISOString().slice(0,10)}`}),(0,H.jsx)(Xe,{layouts:Ut}),(0,H.jsx)(Ne,{}),(0,H.jsx)(Ke,{columns:$}),(0,H.jsx)(Re,{})]})})}),(0,H.jsxs)(`div`,{className:`mt-3`,children:[(0,H.jsx)(Pe,{columns:$,layouts:Ut,leftActions:e=>[{label:`View`,icon:C,tooltip:`View user`,onAction:()=>{a.info(`View ${e.name}`)}}],rightActions:e=>[{label:`Send invite`,icon:O,tooltip:`Send invite`,onAction:()=>{a.success(`Invite sent to ${e.email}`)}}],onEditRow:e=>{a.info(`Edit ${e.name}`)},rowLabel:e=>e.name,rowAccent:e=>e.status===`paused`?`warn`:e.status===`invited`?`success`:void 0,onRowClick:t=>e(t.id)}),(0,H.jsx)(Ge,{})]}),(0,H.jsx)(Ve,{}),(0,H.jsx)(et,{columns:$}),(0,H.jsx)(at,{}),(0,H.jsx)(Qe,{title:e=>e.name,description:e=>(0,H.jsxs)(`span`,{className:`font-mono`,children:[e.email,` · `,e.role,` · `,e.team]}),body:e=>(0,H.jsxs)(`dl`,{className:`grid grid-cols-[max-content_1fr] gap-x-4 gap-y-2.5 py-4 text-[13px]`,children:[(0,H.jsx)(`dt`,{className:`text-muted-foreground`,children:`Status`}),(0,H.jsx)(`dd`,{className:`font-mono`,children:e.status}),(0,H.jsx)(`dt`,{className:`text-muted-foreground`,children:`Open tasks`}),(0,H.jsx)(`dd`,{className:`font-mono tabular-nums`,children:e.tasks}),(0,H.jsx)(`dt`,{className:`text-muted-foreground`,children:`Last active`}),(0,H.jsx)(`dd`,{className:`font-mono`,children:Q(e.lastActive)}),(0,H.jsx)(`dt`,{className:`text-muted-foreground`,children:`Email`}),(0,H.jsx)(`dd`,{className:`font-mono`,children:e.email})]}),footer:e=>(0,H.jsx)(B,{variant:`outline`,size:`sm`,asChild:!0,children:(0,H.jsx)(`a`,{href:`mailto:${e.email}`,children:`Send email`})})})]})]})}var Gt=`import { useMemo, useRef, useState } from "react"
import { Eye, Send } from "lucide-react"
import { createToaster } from "@kitora/feedback/react"
import { Toaster } from "@kitora/feedback/ui"
import { Avatar, AvatarFallback } from "@kitora/ui/avatar"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { cn } from "@kitora/ui/utils"
import { DataGridBulkActions, DataGridBulkEditPopover, DataGridColumnVisibility, DataGridDensityToggle, DataGridDetailDrawer, DataGridExportButton, DataGridFilterBar, DataGridGroupBy, DataGridLayoutSwitcher, DataGridShortcuts, DataGridShortcutsHelp, DataGridPagination, DataGridProvider, DataGridSearchColumns, DataGridSelectionIndicator, DataGridSort, DataGridUIProvider, DataGridView, DataGridViewSelector, cardsLayout, kanbanLayout, createInMemoryAdapter, useDataGridLongPress, useDataGridRubberBand, useDataGridSelectionShortcuts, useDataGridUI, useDataGridUrlSync, defineColumns, defineFilterFields, defineSortOptions, dayBounds, type ActionItem, type DataGridAdapter } from "@kitora/datagrid"

// Sample data: swap createInMemoryAdapter for your REST / GraphQL adapter and drop this block.
interface User {
  id: string
  name: string
  email: string
  role: (typeof ROLES)[number]
  status: (typeof STATUSES)[number]
  team: string
  tasks: number
  lastActive: string
  plan: (typeof PLANS)[number]
  location: string
  timezone: string
  joined: string
  /** Next plan renewal (ISO timestamp); only the single-date "Renews" filter reads it. */
  renews: string
  mfa: boolean
  github: string
  slack: string
  prs: number
  tickets: number
  score: number
  storage: number
}

const TEAMS = ["Platform", "Growth", "Design", "Infra", "Data"]
const ROLES = ["admin", "editor", "viewer"] as const
const STATUSES = ["active", "invited", "paused"] as const
const PLANS = ["free", "pro", "enterprise"] as const
const LOCATIONS = ["San Francisco, CA", "New York, NY", "London, UK", "Berlin, DE", "Tokyo, JP", "Sydney, AU", "Toronto, CA", "Singapore, SG"]
const TIMEZONES = ["America/Los_Angeles", "America/New_York", "Europe/London", "Europe/Berlin", "Asia/Tokyo", "Australia/Sydney", "America/Toronto", "Asia/Singapore"]
const NAMES = ["Grace Bennett", "Linus Whitfield", "Maya Chamberlain", "Nina Holloway", "Owen Carmichael", "Petra Ashford", "Quinn Faulkner", "Riley Pendleton", "Sam Thatcher", "Tara Lockwood", "Wren Caldwell", "Beck Donovan", "Drew Sterling", "Cora Maxwell", "Eli Hawthorne", "Felix Brennan", "Hazel Garrison", "Iris Whitaker", "Jude Pemberton", "Kira Stanton"]
const HOUR = 60 * 60 * 1000
const DAY = 24 * 60 * 60 * 1000

/** Deterministic sample users: the same count always gives the same rows. */
function makeUsers(count: number): User[] {
  return Array.from({ length: count }, (_, i) => {
    const round = Math.floor(i / NAMES.length)
    const name = round > 0 ? \`\${NAMES[i % NAMES.length]} \${round + 1}\` : NAMES[i % NAMES.length]
    const handle = name.toLowerCase().replace(/\\s+/g, ".")
    const first = handle.split(".")[0]
    return {
      id: \`u-\${i + 1}\`,
      name,
      email: \`\${handle}@kitora.dev\`,
      role: ROLES[i % ROLES.length],
      status: STATUSES[i % STATUSES.length],
      team: TEAMS[i % TEAMS.length],
      tasks: ((i * 13) % 47) + 1,
      lastActive: new Date(Date.now() - i * HOUR * 7).toISOString(),
      plan: PLANS[i % PLANS.length],
      location: LOCATIONS[i % LOCATIONS.length],
      timezone: TIMEZONES[i % TIMEZONES.length],
      joined: new Date(Date.now() - (200 + ((i * 17) % 700)) * DAY).toISOString(),
      renews: new Date(Date.now() + (((i * 23) % 90) + 1) * DAY).toISOString(),
      mfa: i % 3 !== 0,
      github: \`@\${first}\`,
      slack: \`#\${TEAMS[i % TEAMS.length].toLowerCase()}-\${first}\`,
      prs: ((i * 7) % 23) + 1,
      tickets: (i * 11) % 19,
      score: ((i * 13) % 100) + 1,
      storage: ((i * 41) % 950) + 50,
    }
  })
}

const seedRows = makeUsers(73)

/** The role column's \`patch\` guard: is the picked value one of \`User['role']\`? */
const isRole = (value: unknown): value is User['role'] =>
  ROLES.some((role) => role === value)

/** The kanban's \`patchFor\` guard: is the column key one of \`User['status']\`? */
const isStatus = (value: unknown): value is User['status'] =>
  STATUSES.some((status) => status === value)

const sortOptions = defineSortOptions()([
  { fieldId: 'name', label: 'Name' },
  { fieldId: 'team', label: 'Team' },
  { fieldId: 'tasks', label: 'Open tasks' },
  { fieldId: 'lastActive', label: 'Last active' },
  { fieldId: 'plan', label: 'Plan' },
  { fieldId: 'location', label: 'Location' },
  { fieldId: 'joined', label: 'Joined' },
  { fieldId: 'prs', label: 'PRs' },
  { fieldId: 'tickets', label: 'Tickets' },
  { fieldId: 'score', label: 'Score' },
  { fieldId: 'storage', label: 'Storage' },
])

/* Filter fields — \`toWhere\` builds a Partial<TWhere>; the in-memory adapter
 * still applies row matching via the FilterCondition itself, but real
 * adapters can read \`where\` from \`query.where\`. */
const filterFields = defineFilterFields()([
  {
    id: 'role',
    label: 'Role',
    type: 'select',
    group: 'User',
    options: [
      { value: 'admin', label: 'Admin' },
      { value: 'editor', label: 'Editor' },
      { value: 'viewer', label: 'Viewer' },
    ],
    toWhere: (cond) => ({ role: cond.value }),
  },
  {
    id: 'status',
    label: 'Status',
    type: 'multi-select',
    group: 'User',
    options: [
      { value: 'active', label: 'Active' },
      { value: 'invited', label: 'Invited' },
      { value: 'paused', label: 'Paused' },
    ],
    toWhere: (cond) => ({ status: cond.value }),
  },
  {
    id: 'team',
    label: 'Team',
    type: 'select',
    group: 'User',
    options: [
      { value: 'Platform', label: 'Platform' },
      { value: 'Growth', label: 'Growth' },
      { value: 'Design', label: 'Design' },
      { value: 'Infra', label: 'Infra' },
      { value: 'Data', label: 'Data' },
    ],
    toWhere: (cond) => ({ team: cond.value }),
  },
  {
    id: 'tasks',
    label: 'Open tasks',
    type: 'number',
    group: 'Activity',
    toWhere: (cond) => ({ tasks: cond.value }),
  },
  {
    id: 'lastActive',
    label: 'Last active',
    type: 'date-range',
    group: 'Activity',
    toWhere: (cond) => ({ lastActive: cond.value }),
  },
  {
    id: 'plan',
    label: 'Plan',
    type: 'multi-select',
    group: 'Account',
    options: [
      { value: 'free', label: 'Free' },
      { value: 'pro', label: 'Pro' },
      { value: 'enterprise', label: 'Enterprise' },
    ],
    toWhere: (cond) => ({ plan: cond.value }),
  },
  {
    id: 'joined',
    label: 'Joined',
    type: 'date-range',
    group: 'Account',
    toWhere: (cond) => ({ joined: cond.value }),
  },
  {
    id: 'renews',
    label: 'Renews',
    type: 'date',
    group: 'Account',
    // Single-day filter: the value is that day's local midnight as an ISO timestamp, so the
    // after / before operators compare cleanly with the ISO \`renews\` strings. "is" means the
    // whole day, so it sends that day's inclusive range instead of the midnight instant.
    toWhere: (cond) => ({ renews: cond.operator === 'eq' ? dayBounds(cond.value) : cond.value }),
  },
])

const initials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

/* One formatter for every cell (toLocaleDateString with options builds a new one per call). */
const shortDate = new Intl.DateTimeFormat(undefined, {
  month: 'short',
  day: 'numeric',
})
const fmtDate = (iso: string) => shortDate.format(new Date(iso))

// Tinted status pills read the design language's chip ink (\`chip.toneText\`), as the display kit's pills do: under Kitora's
// language it is unset and the tint's own dark text shows; under Retro and Terminal the pill text takes the text colour.
const STATUS_COLORS: Record<User['status'], string> = {
  active: 'bg-emerald-500/10 text-[color:var(--dk-chip-ink,var(--color-emerald-800))] dark:text-[color:var(--dk-chip-ink,var(--color-emerald-300))]',
  invited: 'bg-amber-500/10 text-[color:var(--dk-chip-ink,var(--color-amber-700))] dark:text-[color:var(--dk-chip-ink,var(--color-amber-300))]',
  paused: 'bg-muted text-muted-foreground',
}

const columns = defineColumns<User>()([
  {
    id: 'name',
    header: 'User',
    cell: (row) => (
      <div className="flex items-center gap-2.5">
        <Avatar className="size-7">
          <AvatarFallback className="text-[10px]">{initials(row.name)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{row.name}</span>
          <span className="font-mono text-[10.5px] text-muted-foreground">{row.email}</span>
        </div>
      </div>
    ),
    size: 240,
    meta: {
      sortFieldId: 'name',
      label: 'User',
      pin: 'start',
      aggregate: 'count',
      searchable: true,
    },
  },
  {
    id: 'role',
    header: 'Role',
    cell: (row) => (
      <Badge variant="outline" className="font-mono text-[10px] uppercase">
        {row.role}
      </Badge>
    ),
    size: 96,
    meta: {
      filterFieldId: 'role',
      /* Double-click the cell → the list opens → choosing (click, or
       * arrows and Enter) commits via \`mutators.updateRow\`; Escape
       * cancels. Hides automatically when the adapter doesn't implement
       * \`updateRow\`. */
      edit: {
        type: 'select',
        options: [
          { value: 'admin', label: 'Admin' },
          { value: 'editor', label: 'Editor' },
          { value: 'viewer', label: 'Viewer' },
        ],
        /* Narrow the picked string to the \`role\` union; anything else
         * patches nothing. */
        patch: (value) => (isRole(value) ? { role: value } : {}),
      },
    },
  },
  {
    id: 'status',
    header: 'Status',
    cell: (row) => (
      <span
        className={\`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 font-mono text-[10px] uppercase \${STATUS_COLORS[row.status]}\`}
      >
        <span className="size-1.5 rounded-full bg-current" />
        {row.status}
      </span>
    ),
    size: 110,
    meta: { filterFieldId: 'status', groupable: true },
  },
  {
    id: 'team',
    header: 'Team',
    cell: (row) => <span className="text-muted-foreground">{row.team}</span>,
    size: 110,
    meta: {
      sortFieldId: 'team',
      filterFieldId: 'team',
      aggregate: 'countDistinct',
      searchable: true,
      label: 'Team',
    },
  },
  {
    id: 'tasks',
    header: 'Open tasks',
    cell: (row) => (
      <span className="font-mono tabular-nums">{row.tasks}</span>
    ),
    size: 110,
    meta: {
      sortFieldId: 'tasks',
      filterFieldId: 'tasks',
      align: 'end',
      aggregate: 'sum',
    },
  },
  {
    id: 'plan',
    header: 'Plan',
    cell: (row) => (
      <Badge
        variant={row.plan === 'enterprise' ? 'default' : 'outline'}
        className="font-mono text-[10px] uppercase"
      >
        {row.plan}
      </Badge>
    ),
    size: 110,
    meta: { sortFieldId: 'plan', filterFieldId: 'plan' },
  },
  {
    id: 'location',
    header: 'Location',
    cell: (row) => (
      <span className="text-muted-foreground">{row.location}</span>
    ),
    size: 170,
    meta: { sortFieldId: 'location' },
  },
  {
    id: 'timezone',
    header: 'Timezone',
    cell: (row) => (
      <span className="font-mono text-[11.5px] text-muted-foreground">
        {row.timezone}
      </span>
    ),
    size: 180,
  },
  {
    id: 'joined',
    header: 'Joined',
    cell: (row) => (
      <span className="font-mono text-muted-foreground">{fmtDate(row.joined)}</span>
    ),
    size: 120,
    meta: { sortFieldId: 'joined', filterFieldId: 'joined' },
  },
  {
    id: 'mfa',
    header: 'MFA',
    cell: (row) =>
      row.mfa ? (
        <span className="inline-flex items-center gap-1 font-mono text-[11px] text-emerald-700 dark:text-emerald-400">
          ●
        </span>
      ) : (
        <span className="font-mono text-[11px] text-muted-foreground/60">○</span>
      ),
    size: 70,
    meta: { align: 'center' },
  },
  {
    id: 'github',
    header: 'GitHub',
    cell: (row) => (
      <span className="font-mono text-[11.5px] text-muted-foreground">
        {row.github}
      </span>
    ),
    size: 140,
  },
  {
    id: 'slack',
    header: 'Slack',
    cell: (row) => (
      <span className="font-mono text-[11.5px] text-muted-foreground">
        {row.slack}
      </span>
    ),
    size: 200,
  },
  {
    id: 'prs',
    header: 'PRs',
    cell: (row) => (
      <span className="font-mono tabular-nums">{row.prs}</span>
    ),
    size: 80,
    meta: { sortFieldId: 'prs', align: 'end', aggregate: 'sum' },
  },
  {
    id: 'tickets',
    header: 'Tickets',
    cell: (row) => (
      <span className="font-mono tabular-nums">{row.tickets}</span>
    ),
    size: 90,
    meta: { sortFieldId: 'tickets', align: 'end', aggregate: 'sum' },
  },
  {
    id: 'score',
    header: 'Score',
    cell: (row) => {
      const tone =
        row.score >= 80
          ? 'text-emerald-700 dark:text-emerald-400'
          : row.score >= 50
            ? 'text-amber-700 dark:text-amber-400'
            : 'text-rose-700 dark:text-rose-400'
      return (
        <span className={cn('font-mono font-medium tabular-nums', tone)}>
          {row.score}
        </span>
      )
    },
    size: 90,
    meta: { sortFieldId: 'score', align: 'end', aggregate: 'avg' },
  },
  {
    id: 'storage',
    header: 'Storage',
    cell: (row) => (
      <span className="font-mono tabular-nums text-muted-foreground">
        {row.storage} MB
      </span>
    ),
    size: 110,
    meta: { sortFieldId: 'storage', align: 'end', aggregate: 'sum' },
  },
  {
    id: 'lastActive',
    header: 'Last active',
    cell: (row) => (
      <span className="font-mono text-muted-foreground">
        {fmtDate(row.lastActive)}
      </span>
    ),
    size: 120,
    meta: {
      sortFieldId: 'lastActive',
      filterFieldId: 'lastActive',
      pin: 'end',
    },
  },
])

export function UsersGrid() {
  const adapter = useMemo<DataGridAdapter<User>>(
    () =>
      createInMemoryAdapter<User>({
        initial: seedRows,
        sortOptions,
        filterFields,
        search: {
          placeholder: 'Search users…',
          toWhere: (q) => ({ _q: q }),
        },
        searchKeys: ['name', 'email', 'team'],
        latencyMs: 0,
        /* Tree expansion — synthetic: each user "manages" the next two
         * users on the same team. Adapter fakes a 200ms network hit so
         * the expand chevron flashes a loading dot. */
        getChildren: (parent) =>
          new Promise<User[]>((res) => {
            setTimeout(() => {
              const sameTeam = seedRows.filter(
                (r) => r.team === parent.team && r.id !== parent.id,
              )
              const idx = seedRows.findIndex((r) => r.id === parent.id)
              res(
                sameTeam
                  .filter((r) => seedRows.indexOf(r) > idx)
                  .slice(0, 2),
              )
            }, 200)
          }),
        /* Hide the chevron up-front for rows we know are leaves —
         * mirrors the same logic as \`getChildren\` but synchronously. */
        hasChildren: (row) => {
          const idx = seedRows.findIndex((r) => r.id === row.id)
          return seedRows.some(
            (r, i) => i > idx && r.team === row.team && r.id !== row.id,
          )
        },
      }),
    [],
  )

  // No \`defaultSort\` — manual row reorder requires the result set to stay
  // in source order. An active sort would re-impose its ordering on each
  // refresh and erase the user's drag, so the drag handle auto-disables
  // (with a tooltip) when sort is active.
  return (
    <DataGridUIProvider defaultPageSize={20}>
      <DataGridProvider adapter={adapter}>
        <UsersGridContent />
      </DataGridProvider>
    </DataGridUIProvider>
  )
}

const layouts = [
  cardsLayout<User>({
    headlineColumnId: 'name',
    bodyColumnIds: ['role', 'status', 'team', 'tasks', 'lastActive'],
  }),
  kanbanLayout<User>({
    headlineColumnId: 'name',
    subheadColumnId: 'team',
    groupBy: (row) => row.status,
    patchFor: (key): Partial<User> => (isStatus(key) ? { status: key } : {}),
    columns: [
      { key: 'active', label: 'Active', accent: 'bg-emerald-500/10 text-[color:var(--dk-chip-ink,var(--color-emerald-800))] dark:text-[color:var(--dk-chip-ink,var(--color-emerald-300))]' },
      { key: 'invited', label: 'Invited', accent: 'bg-amber-500/10 text-[color:var(--dk-chip-ink,var(--color-amber-700))] dark:text-[color:var(--dk-chip-ink,var(--color-amber-300))]' },
      { key: 'paused', label: 'Paused' },
    ],
  }),
]

function UsersGridContent() {
  const { setDetailRowId, selectedIds, setSelectedIds } = useDataGridUI()
  // a toaster of the demo's own, so its toasts draw without an app-wide <Toaster />
  const [toast] = useState(() => createToaster())
  useDataGridUrlSync({ namespace: 'users' })

  /* Layout-agnostic selection extras — same hooks that power the
   * MediaGrid demo. Rubber-band marquee + touch long-press + global
   * ⌘A / Esc shortcuts, all wired to the table view here. Each table
   * row carries \`data-row-id\` so the default selector works without
   * extra config. */
  const hostRef = useRef<HTMLDivElement | null>(null)
  const [marquee, setMarquee] = useState<DOMRect | null>(null)

  useDataGridRubberBand({
    enabled: true,
    hostRef,
    onChange: setMarquee,
    onSelect: (ids, opts) => {
      setSelectedIds((prev) =>
        opts.additive
          ? Array.from(new Set([...prev, ...ids]))
          : ids,
      )
    },
  })

  useDataGridLongPress({
    enabled: true,
    onLongPress: (rowId) => {
      setSelectedIds((prev) =>
        prev.includes(rowId) ? prev : [...prev, rowId],
      )
    },
  })

  useDataGridSelectionShortcuts({
    hostRef,
    onClear: () => setSelectedIds([]),
    /* Select-all = every visible row on the current page. Table view
     * already has a header checkbox; this just adds the keyboard route. */
    onSelectAll: () => {
      const rows = hostRef.current?.querySelectorAll<HTMLElement>(
        '[data-row-id]',
      )
      if (!rows) return
      const ids: string[] = []
      rows.forEach((r) => {
        const id = r.dataset.rowId
        if (id) ids.push(id)
      })
      setSelectedIds(ids)
    },
  })

  void selectedIds /* keep for future telemetry hook */

  return (
    <>
      <DataGridShortcuts />
      <Toaster toaster={toast} />
      <div ref={hostRef}>

          {marquee ? (
            <div
              aria-hidden
              className="pointer-events-none fixed z-50 rounded-sm border-2 border-primary bg-primary/10"
              style={{
                left: marquee.left,
                top: marquee.top,
                width: marquee.width,
                height: marquee.height,
              }}
            />
          ) : null}

          <div className="mt-4 rounded-lg border border-border bg-surface-1 p-2">
            <DataGridFilterBar
              rightSlot={
                <div className="flex flex-wrap items-center gap-1">
                  <DataGridSearchColumns columns={columns} />
                  <DataGridSort options={sortOptions} />
                  <DataGridGroupBy columns={columns} />
                  <DataGridViewSelector scope="examples:datagrid" />
                  <DataGridExportButton<User>
                    fields={[
                      ['Name', (r) => r.name],
                      ['Email', (r) => r.email],
                      ['Role', (r) => r.role],
                      ['Status', (r) => r.status],
                      ['Team', (r) => r.team],
                      ['Open tasks', (r) => r.tasks],
                      ['Last active', (r) => r.lastActive],
                    ]}
                    formats={['csv', 'json', 'markdown']}
                    filename={() =>
                      \`users-\${new Date().toISOString().slice(0, 10)}\`
                    }
                  />
                  <DataGridLayoutSwitcher layouts={layouts} />
                  <DataGridDensityToggle />
                  <DataGridColumnVisibility columns={columns} />
                  <DataGridSelectionIndicator />
                </div>
              }
            />
          </div>

          <div className="mt-3">
            <DataGridView
              columns={columns}
              layouts={layouts}
              leftActions={(row): ActionItem[] => [
                {
                  label: 'View',
                  icon: Eye,
                  tooltip: 'View user',
                  onAction: () => {
                    toast.info(\`View \${row.name}\`)
                  },
                },
              ]}
              rightActions={(row): ActionItem[] => [
                {
                  label: 'Send invite',
                  icon: Send,
                  tooltip: 'Send invite',
                  onAction: () => {
                    toast.success(\`Invite sent to \${row.email}\`)
                  },
                },
              ]}
              onEditRow={(row) => {
                toast.info(\`Edit \${row.name}\`)
              }}
              rowLabel={(row) => row.name}
              rowAccent={(row) =>
                row.status === 'paused'
                  ? 'warn'
                  : row.status === 'invited'
                    ? 'success'
                    : undefined
              }
              onRowClick={(row) => setDetailRowId(row.id)}
            />
            <DataGridPagination />
          </div>

          <DataGridBulkActions />
          <DataGridBulkEditPopover<User> columns={columns} />
          <DataGridShortcutsHelp />
          <DataGridDetailDrawer<User>
            title={(r) => r.name}
            description={(r) => (
              <span className="font-mono">
                {r.email} · {r.role} · {r.team}
              </span>
            )}
            body={(r) => (
              <dl className="grid grid-cols-[max-content_1fr] gap-x-4 gap-y-2.5 py-4 text-[13px]">
                <dt className="text-muted-foreground">Status</dt>
                <dd className="font-mono">{r.status}</dd>
                <dt className="text-muted-foreground">Open tasks</dt>
                <dd className="font-mono tabular-nums">{r.tasks}</dd>
                <dt className="text-muted-foreground">Last active</dt>
                <dd className="font-mono">{fmtDate(r.lastActive)}</dd>
                <dt className="text-muted-foreground">Email</dt>
                <dd className="font-mono">{r.email}</dd>
              </dl>
            )}
            footer={(r) => (
              <Button variant="outline" size="sm" asChild>
                <a href={\`mailto:\${r.email}\`}>Send email</a>
              </Button>
            )}
          />
        </div>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Gt,()=>Se(()=>import(`./demos-D_z7t4zz.js`),[]));function Kt(){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(w,{title:`Cursor`,children:[`Cursor-paginated baseline — search, sort, density, column visibility, bulk actions, saved views, layout switcher (table / cards / kanban). Pagination via `,(0,H.jsx)(`code`,{className:`rounded bg-muted px-1 py-0.5 font-mono text-[11px]`,children:`pageInfo.endCursor`}),`.`,(0,H.jsx)(`br`,{}),(0,H.jsx)(`span`,{className:`text-foreground`,children:`Plus rubber-band (drag empty area / Cmd-drag a row), touch long-press, ⌘A select-all, Esc clear — all from the layout-agnostic selection hooks.`})]}),(0,H.jsx)(qe,{n:1,title:`Users grid, every feature on`,blurb:`Search, filters, multi-sort, group-by, saved views, export, table / cards / kanban layouts, density, column visibility, row actions, bulk edit, tree rows, detail drawer and URL sync, over one in-memory adapter.`,code:Gt,children:(0,H.jsx)(Ht,{})})]})}export{Kt as component};