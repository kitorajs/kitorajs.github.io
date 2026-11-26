import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{o as t}from"./anchored-surface-CTW9t0uW.js";import{t as n}from"./clipboard-list-D9L0QonP.js";import{t as r}from"./clock-Dkgn9bA4.js";import{t as i}from"./download-DmNVxFcg.js";import{s as a}from"./kit-docs-DpYhPoxM.js";import{t as o}from"./git-branch-Cwmkb4Z_.js";import{t as s}from"./globe-DhCQ2plc.js";import{t as c}from"./mail-8xGud2d1.js";import{t as l}from"./message-square-CNfB0thr.js";import{t as u}from"./network-bE4R3Q3K.js";import{t as d}from"./play-CuM_vIZt.js";import{t as f}from"./redo-2-OwHe0gTo.js";import{t as p}from"./timer-pzOhrAn2.js";import{t as m}from"./trash-2-qhjCvUtq.js";import{t as h}from"./undo-2-CBx450oc.js";import{t as g}from"./webhook-ir8rfNIR.js";import{n as _}from"./popover-CXL0v60V.js";import{Bc as v,Cc as y,Cn as b,Di as x,Ic as S,Mi as C,ti as w}from"./index-q72zUtm9.js";import{t as T}from"./react-CDm0GyeA.js";import{c as E,l as D,t as O}from"./kit-CidJliA5.js";import"./kit-gallery-Atvibnty.js";import{t as k}from"./example-B8EaWveR.js";import{_ as ee,a as te,d as ne,g as re,i as ie,m as ae,n as A,o as j,r as M,s as N,t as P,v as oe}from"./-kits.flow.shared-Du06GQFI.js";import{t as se}from"./node-card-BlNhzRYV.js";var F=C(`file-spreadsheet`,[[`path`,{d:`M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z`,key:`1rqfz7`}],[`path`,{d:`M14 2v4a2 2 0 0 0 2 2h4`,key:`tnqrlb`}],[`path`,{d:`M8 13h2`,key:`yr2amv`}],[`path`,{d:`M14 13h2`,key:`un5t4a`}],[`path`,{d:`M8 17h2`,key:`2yhykz`}],[`path`,{d:`M14 17h2`,key:`10kma7`}]]),I=C(`shuffle`,[[`path`,{d:`m18 14 4 4-4 4`,key:`10pe0f`}],[`path`,{d:`m18 2 4 4-4 4`,key:`pucp1d`}],[`path`,{d:`M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22`,key:`1ailkh`}],[`path`,{d:`M2 6h1.972a4 4 0 0 1 3.6 2.2`,key:`km57vx`}],[`path`,{d:`M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45`,key:`os18l9`}]]),L=e(v(),1),R=S(),z={id:`in`,kind:`in`,side:`top`},B={id:`out`,kind:`out`,side:`bottom`},V=`bg-violet-500/15 text-violet-600 dark:text-violet-400`,H=`bg-sky-500/15 text-sky-700 dark:text-sky-400`,U=`bg-amber-500/15 text-amber-700 dark:text-amber-400`,W={webhook:{label:`Webhook`,category:`Triggers`,icon:(0,R.jsx)(g,{}),accent:V,fields:[{key:`path`,label:`Path`,placeholder:`/hooks/orders`}],ports:()=>({ports:[B]})},schedule:{label:`Schedule`,category:`Triggers`,icon:(0,R.jsx)(r,{}),accent:V,fields:[{key:`cron`,label:`Cron`,placeholder:`0 9 * * MON`}],ports:()=>({ports:[B]})},form:{label:`Form submitted`,category:`Triggers`,icon:(0,R.jsx)(n,{}),accent:V,fields:[{key:`form`,label:`Form`,placeholder:`Contact us`}],ports:()=>({ports:[B]})},http:{label:`HTTP request`,category:`Actions`,icon:(0,R.jsx)(s,{}),accent:H,fields:[{key:`url`,label:`URL`,placeholder:`GET https://api…`}],ports:()=>({ports:[z,B]})},slack:{label:`Slack message`,category:`Actions`,icon:(0,R.jsx)(l,{}),accent:H,fields:[{key:`channel`,label:`Channel`,placeholder:`#general`},{key:`text`,label:`Message`,placeholder:`New order {{id}}`}],ports:()=>({ports:[z,B]})},email:{label:`Send email`,category:`Actions`,icon:(0,R.jsx)(c,{}),accent:H,fields:[{key:`to`,label:`To`,placeholder:`{{customer.email}}`},{key:`subject`,label:`Subject`,placeholder:`Thanks!`}],ports:()=>({ports:[z,B]})},sheet:{label:`Append row`,category:`Actions`,icon:(0,R.jsx)(F,{}),accent:H,fields:[{key:`sheet`,label:`Sheet`,placeholder:`Orders 2026`}],ports:()=>({ports:[z,B]})},transform:{label:`Transform`,category:`Actions`,icon:(0,R.jsx)(I,{}),accent:H,fields:[{key:`expr`,label:`Expression`,placeholder:`{ total: $.amount * 1.2 }`}],ports:()=>({ports:[z,B]})},if:{label:`If / else`,category:`Logic`,icon:(0,R.jsx)(o,{}),accent:U,fields:[{key:`condition`,label:`Condition`,placeholder:`order.total > 500`}],ports:()=>({ports:[z,{id:`true`,kind:`out`,side:`bottom`,offset:.3,label:`true`},{id:`false`,kind:`out`,side:`bottom`,offset:.7,label:`false`}]})},delay:{label:`Wait`,category:`Logic`,icon:(0,R.jsx)(p,{}),accent:U,fields:[{key:`for`,label:`Duration`,placeholder:`1 day`}],ports:()=>({ports:[z,B]})},merge:{label:`Merge`,category:`Logic`,icon:(0,R.jsx)(u,{}),accent:U,fields:[{key:`mode`,label:`Mode`,placeholder:`wait for all`}],ports:()=>({ports:[{id:`a`,kind:`in`,side:`top`,offset:.3,label:`a`},{id:`b`,kind:`in`,side:`top`,offset:.7,label:`b`},B]})}},G=Object.keys(W).filter(e=>e in W),ce=[`Triggers`,`Actions`,`Logic`],K=200,q=10,J=`palette:`,Y=`workflow-canvas`;function X(e,t,n,r,i={}){let a=W[e];return{id:t,position:n,width:K,ports:a.ports().ports,data:{kind:e,name:r??a.label,config:i}}}var Z=(e,t,n,r)=>({id:`${e}.${t}-${n}`,source:e,sourcePort:t,target:n,targetPort:`in`,...r?{label:r}:{}}),le={nodes:[X(`webhook`,`order`,{x:120,y:0},`New order`,{path:`/hooks/shop/orders`}),X(`http`,`customer`,{x:120,y:110},`Fetch customer`,{url:`GET /customers/{{customer_id}}`}),X(`if`,`big`,{x:120,y:220},`Order over $500?`,{condition:`order.total > 500`}),X(`slack`,`vip`,{x:0,y:350},`Ping #vip-sales`,{channel:`#vip-sales`,text:`Big order from {{customer.name}}`}),X(`delay`,`wait`,{x:250,y:350},`Wait a day`,{for:`1 day`}),X(`email`,`review`,{x:250,y:460},`Ask for a review`,{to:`{{customer.email}}`,subject:`How was your order?`}),X(`schedule`,`monday`,{x:520,y:0},`Every Monday 9:00`,{cron:`0 9 * * MON`}),X(`sheet`,`report`,{x:520,y:110},`Weekly report row`,{sheet:`Sales 2026`})],edges:[Z(`order`,`out`,`customer`),Z(`customer`,`out`,`big`),Z(`big`,`true`,`vip`,`yes`),Z(`big`,`false`,`wait`,`no`),Z(`wait`,`out`,`review`),Z(`monday`,`out`,`report`)]},Q=420;function ue(){let e=ne({initial:le,edgeKind:`step`}),{graph:t,selection:n}=e.state,[r,a]=(0,L.useState)({}),[o,s]=(0,L.useState)(new Set),[c,l]=(0,L.useState)(!1),[p,m]=(0,L.useState)(null),[g,_]=(0,L.useState)(``),v=(0,L.useRef)([]);(0,L.useEffect)(()=>()=>v.current.forEach(e=>window.clearTimeout(e)),[]),(0,L.useEffect)(()=>{if(!g)return;let e=window.setTimeout(()=>_(``),1800);return()=>window.clearTimeout(e)},[g]);let y=n.nodes.length===1?t.nodes.find(e=>e.id===n.nodes[0]):void 0,x=(t,n,r)=>{let i=e.current().graph,a=ae(t,new Set(i.nodes.map(e=>e.id))),o=X(t,a,re({x:n.x-K/2,y:r?.fromKind===`in`?n.y-80:n.y},q));if(e.addNode(o),r){let t=o.ports?.find(e=>e.kind!==r.fromKind);t&&requestAnimationFrame(()=>e.connect(r.from,{node:a,port:t.id}))}},S=t=>{let{width:n,height:r}=e.paneSize(),i=e.current().viewport,a=e.current(),o=a.graph.nodes.map(e=>ee(e,a.sizes)),s={x:(n/2-i.x)/i.zoom,y:(r/2-i.y)/i.zoom-40};for(let e=0;e<40&&o.some(e=>oe(e,{x:s.x-K/2-8,y:s.y-8,width:K+16,height:80}));e++)s={x:s.x+30,y:s.y+40};x(t,s)},C=()=>{v.current.forEach(e=>window.clearTimeout(e));let t=e.current().graph,n=new Set(t.edges.map(e=>e.target)),r=t.nodes.filter(e=>!n.has(e.id)).map(e=>e.id),i=[],o=new Set,c=r.map(e=>({id:e,via:[]}));for(;c.length>0;){let e=[];for(let n of c){if(o.has(n.id))continue;o.add(n.id),i.push(n);let r=t.nodes.find(e=>e.id===n.id),a=r?.data.kind===`if`?/>\s*\d/.test(r.data.config.condition??``)?`true`:`false`:void 0;for(let r of t.edges)r.source===n.id&&(!a||r.sourcePort===a)&&e.push({id:r.target,via:[r.id]})}c=e}l(!0),a(Object.fromEntries(t.nodes.map(e=>[e.id,`idle`]))),s(new Set),i.forEach((e,t)=>{v.current.push(window.setTimeout(()=>{a(t=>({...t,[e.id]:`running`})),s(t=>new Set([...t,...e.via]))},t*Q),window.setTimeout(()=>a(t=>({...t,[e.id]:`ok`})),t*Q+Q*.8))}),v.current.push(window.setTimeout(()=>{l(!1),s(new Set),_(`Test run: ${i.length} of ${t.nodes.length} steps ran`)},i.length*Q+200))},T=(0,L.useRef)({pointer:null,over:null}),E=e=>{T.current={pointer:e.pointer,over:e.over?.id??null}};return(0,R.jsx)(b,{children:(0,R.jsx)(O,{presentation:{feedback:`clone`,indicator:`none`,dropAnimation:!1,flash:!1},onDragMove:E,onDragOver:E,onDragEnd:t=>{let{pointer:n,over:r}=T.current,i=G.find(e=>`${J}${e}`===t.source.id);t.reason===`drop`&&r===Y&&n&&i&&x(i,e.clientToFlow(n))},children:(0,R.jsxs)(`div`,{className:`flex h-full flex-col md:grid md:grid-cols-[176px_1fr_248px]`,children:[(0,R.jsx)(pe,{onAdd:S}),(0,R.jsx)(de,{children:(0,R.jsxs)(N,{flow:e,fitViewOnMount:!0,snapGrid:q,label:`Workflow`,renderNode:({node:e,selected:t})=>{let n=W[e.data.kind],i=n.fields[0],a=i?e.data.config[i.key]:void 0;return(0,R.jsx)(se,{title:e.data.name,subtitle:n.label,icon:n.icon,accent:n.accent,selected:t,status:r[e.id],children:a&&(0,R.jsx)(`div`,{className:`truncate border-t px-2.5 py-1 font-mono text-[10.5px] text-muted-foreground`,children:a})})},edgeClassName:e=>o.has(e.id)?`${j} stroke-sky-500`:void 0,onConnectToEmpty:(e,t,n)=>m({from:e,fromKind:t,at:n}),children:[(0,R.jsx)(M,{position:`top-left`,children:(0,R.jsxs)(`div`,{className:`${te} flex items-center gap-0.5 p-0.5`,role:`toolbar`,"aria-label":`Workflow`,children:[(0,R.jsxs)(w,{size:`sm`,onClick:C,disabled:c||t.nodes.length===0,children:[(0,R.jsx)(d,{}),` `,c?`Running…`:`Test run`]}),(0,R.jsx)(`span`,{className:`mx-0.5 h-4 w-px bg-border`}),(0,R.jsx)(w,{variant:`ghost`,size:`icon-sm`,"aria-label":`Undo`,title:`Undo (⌘Z)`,disabled:!e.canUndo,onClick:e.undo,children:(0,R.jsx)(h,{})}),(0,R.jsx)(w,{variant:`ghost`,size:`icon-sm`,"aria-label":`Redo`,title:`Redo (⇧⌘Z)`,disabled:!e.canRedo,onClick:e.redo,children:(0,R.jsx)(f,{})}),(0,R.jsxs)(w,{variant:`ghost`,size:`sm`,onClick:()=>e.layout({direction:`TB`,rankGap:44,nodeGap:30}),children:[(0,R.jsx)(u,{}),` Tidy up`]}),(0,R.jsx)(w,{variant:`ghost`,size:`icon-sm`,"aria-label":`Copy workflow JSON`,title:`Copy workflow JSON`,onClick:()=>{navigator.clipboard?.writeText(e.toJSON()).catch(()=>void 0),_(`Workflow JSON copied`)},children:(0,R.jsx)(i,{})})]})}),(0,R.jsx)(A,{position:`bottom-left`}),(0,R.jsx)(ie,{position:`bottom-right`,width:150,height:96,nodeClassName:e=>e.data!==null&&typeof e.data==`object`&&`kind`in e.data&&(e.data.kind===`webhook`||e.data.kind===`schedule`||e.data.kind===`form`)?`fill-violet-500/50`:void 0}),g&&(0,R.jsx)(M,{position:`bottom-center`,children:(0,R.jsx)(`div`,{role:`status`,className:`rounded-md bg-foreground px-2.5 py-1 text-[12px] text-background shadow`,children:g})}),p&&(0,R.jsx)(me,{at:e.flowToClient(p.at),kinds:G.filter(e=>W[e].ports().ports.some(e=>e.kind!==p.fromKind)),onPick:e=>{x(e,p.at,p),m(null)},onClose:()=>m(null)})]})}),(0,R.jsx)(he,{node:y,count:{nodes:t.nodes.length,edges:t.edges.length,selected:n.nodes.length},onEdit:t=>y&&e.updateNodeData(y.id,t,!1),onBeginEdit:()=>e.dispatch({type:`checkpoint`}),onDuplicate:()=>e.duplicate(),onDelete:()=>e.deleteSelection()})]})})})}function de({children:e}){let{ref:t}=D({id:Y,kind:`container`});return(0,R.jsx)(`div`,{ref:t,"data-zone":Y,className:`relative min-h-0 flex-1 data-[dnd-over]:ring-2 data-[dnd-over]:ring-primary/40 data-[dnd-over]:ring-inset`,children:e})}function fe({kind:e,index:t,onAdd:n}){let{ref:r}=E({id:`${J}${e}`,container:`palette`,index:t,data:e});return(0,R.jsxs)(`button`,{ref:r,type:`button`,"data-palette-kind":e,onClick:()=>n(e),title:`Drag onto the canvas, or click to add`,className:`flex h-7 w-full cursor-grab items-center gap-2 rounded-md px-1.5 text-left text-[12.5px] whitespace-nowrap hover:bg-background hover:shadow-xs active:cursor-grabbing`,children:[(0,R.jsx)(`span`,{className:`grid size-5 place-items-center rounded [&_svg]:size-3 ${W[e].accent}`,children:W[e].icon}),W[e].label]})}function pe({onAdd:e}){return(0,R.jsx)(`nav`,{"aria-label":`Steps`,className:`flex shrink-0 gap-3 overflow-x-auto border-b bg-muted/30 p-2 md:flex-col md:gap-2 md:overflow-y-auto md:border-r md:border-b-0`,children:ce.map(t=>(0,R.jsxs)(`div`,{className:`shrink-0`,children:[(0,R.jsx)(`div`,{className:`px-1 pb-1 text-[10.5px] font-medium tracking-wide text-muted-foreground uppercase`,children:t}),(0,R.jsx)(`ul`,{className:`flex gap-1 md:flex-col md:gap-0.5`,children:G.filter(e=>W[e].category===t).map(t=>(0,R.jsx)(`li`,{children:(0,R.jsx)(fe,{kind:t,index:G.indexOf(t),onAdd:e})},t))})]},t))})}function me({at:e,kinds:n,onPick:r,onClose:i}){let{ref:a}=T({orientation:`vertical`,loop:!0});return(0,R.jsxs)(_,{name:`Add the next step`,anchor:t.fromPoint(e.x,e.y),open:!0,side:`bottom`,align:`start`,sideOffset:0,onOpenChange:e=>{e||i()},className:`w-48 p-1`,children:[(0,R.jsx)(`div`,{className:`px-1.5 py-1 text-[11px] text-muted-foreground`,children:`Add the next step`}),(0,R.jsx)(`div`,{ref:a,role:`menu`,"aria-label":`Add the next step`,className:`max-h-56 overflow-y-auto`,children:n.map(e=>(0,R.jsxs)(`button`,{type:`button`,role:`menuitem`,"data-roving-item":``,onClick:()=>r(e),className:`flex h-7 w-full items-center gap-2 rounded px-1.5 text-left text-[12.5px] outline-none hover:bg-muted focus-visible:bg-muted`,children:[(0,R.jsx)(`span`,{className:`grid size-5 place-items-center rounded [&_svg]:size-3 ${W[e].accent}`,children:W[e].icon}),W[e].label]},e))})]})}function he({node:e,count:t,onEdit:n,onBeginEdit:r,onDuplicate:i,onDelete:a}){let o=`h-7 w-full rounded-md border bg-background px-2 text-[12.5px] outline-none focus-visible:ring-2 focus-visible:ring-ring`;return(0,R.jsx)(`aside`,{"aria-label":`Inspector`,className:`hidden min-h-0 overflow-y-auto border-l bg-muted/20 p-3 text-[12.5px] md:block`,children:e?(0,R.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,R.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,R.jsx)(`span`,{className:`grid size-7 place-items-center rounded-md [&_svg]:size-4 ${W[e.data.kind].accent}`,children:W[e.data.kind].icon}),(0,R.jsxs)(`div`,{className:`min-w-0`,children:[(0,R.jsx)(`div`,{className:`truncate font-medium`,children:e.data.name}),(0,R.jsxs)(`div`,{className:`text-[11px] text-muted-foreground`,children:[W[e.data.kind].label,` · `,(0,R.jsx)(`span`,{className:`font-mono`,children:e.id})]})]})]}),(0,R.jsxs)(`label`,{className:`flex flex-col gap-1`,children:[(0,R.jsx)(`span`,{className:`text-[11px] text-muted-foreground`,children:`Name`}),(0,R.jsx)(`input`,{className:o,value:e.data.name,onFocus:r,onChange:e=>n(t=>({...t,name:e.target.value}))})]}),W[e.data.kind].fields.map(t=>(0,R.jsxs)(`label`,{className:`flex flex-col gap-1`,children:[(0,R.jsx)(`span`,{className:`text-[11px] text-muted-foreground`,children:t.label}),(0,R.jsx)(`input`,{className:`${o} font-mono text-[11.5px]`,placeholder:t.placeholder,value:e.data.config[t.key]??``,onFocus:r,onChange:e=>n(n=>({...n,config:{...n.config,[t.key]:e.target.value}}))})]},t.key)),(0,R.jsxs)(`div`,{className:`flex gap-1.5 pt-1`,children:[(0,R.jsxs)(w,{variant:`outline`,size:`sm`,onClick:i,children:[(0,R.jsx)(x,{}),` Duplicate`]}),(0,R.jsxs)(w,{variant:`outline`,size:`sm`,className:`text-destructive`,onClick:a,children:[(0,R.jsx)(m,{}),` Delete`]})]})]}):(0,R.jsxs)(`div`,{className:`flex flex-col gap-2 text-muted-foreground`,children:[(0,R.jsx)(`div`,{className:`font-medium text-foreground`,children:`Workflow`}),(0,R.jsxs)(`div`,{className:`tabular-nums`,children:[t.nodes,` steps · `,t.edges,` connections`,t.selected>1?` · ${t.selected} selected`:``]}),(0,R.jsx)(`p`,{children:`Select a step to edit it. Drag from a port and let go on empty canvas to add the next step there.`}),(0,R.jsx)(`p`,{children:`Edits to one field undo as one step: ⌘Z.`})]})})}var $=`import { useEffect, useRef, useState, type ReactNode } from "react"
import { DndProvider, useDraggable, useDroppable, type DragState } from "@kitora/dnd"
import { useRoving } from "@kitora/keyboard/roving"
import { EnsureOverlayUi, Popover, virtualAnchor } from "@kitora/overlay"
import { Clock, FileSpreadsheet, GitBranch, Globe, Mail, MessageSquare, Play, Shuffle, Timer, Webhook, ClipboardList, Undo2, Redo2, Network, Copy, Trash2, Download } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { FLOW_DASH_CLASS, FlowCanvas, FlowControls, FlowPanel, MiniMap, NodeCard, PANEL_SURFACE, nodeRect, rectsIntersect, snapToGrid, uniqueId, useFlow, type FlowEdge, type FlowNode, type FlowPort, type Graph, type NodeStatus, type PortKind, type PortRef, type XY } from "@kitora/flow"

// ── the node catalog ─────────────────────────────────────────────────────────
type Category = "Triggers" | "Actions" | "Logic"
type KindId = "webhook" | "schedule" | "form" | "http" | "slack" | "email" | "sheet" | "transform" | "if" | "delay" | "merge"

interface Kind {
  readonly label: string
  readonly category: Category
  readonly icon: ReactNode
  readonly accent: string
  /** Inspector fields, in order; the first one is shown on the card. */
  readonly fields: readonly { readonly key: string; readonly label: string; readonly placeholder: string }[]
  readonly ports: () => { readonly ports: FlowPort[] }
}

// A top-to-bottom flow, Zapier-style: steps take input on top and hand on from the bottom.
const IN: FlowPort = { id: "in", kind: "in", side: "top" }
const OUT: FlowPort = { id: "out", kind: "out", side: "bottom" }
const TRIGGER = "bg-violet-500/15 text-violet-600 dark:text-violet-400"
const ACTION = "bg-sky-500/15 text-sky-700 dark:text-sky-400"
const LOGIC = "bg-amber-500/15 text-amber-700 dark:text-amber-400"

const KINDS: Readonly<Record<KindId, Kind>> = {
  webhook: { label: "Webhook", category: "Triggers", icon: <Webhook />, accent: TRIGGER, fields: [{ key: "path", label: "Path", placeholder: "/hooks/orders" }], ports: () => ({ ports: [OUT] }) },
  schedule: { label: "Schedule", category: "Triggers", icon: <Clock />, accent: TRIGGER, fields: [{ key: "cron", label: "Cron", placeholder: "0 9 * * MON" }], ports: () => ({ ports: [OUT] }) },
  form: { label: "Form submitted", category: "Triggers", icon: <ClipboardList />, accent: TRIGGER, fields: [{ key: "form", label: "Form", placeholder: "Contact us" }], ports: () => ({ ports: [OUT] }) },
  http: { label: "HTTP request", category: "Actions", icon: <Globe />, accent: ACTION, fields: [{ key: "url", label: "URL", placeholder: "GET https://api…" }], ports: () => ({ ports: [IN, OUT] }) },
  slack: { label: "Slack message", category: "Actions", icon: <MessageSquare />, accent: ACTION, fields: [{ key: "channel", label: "Channel", placeholder: "#general" }, { key: "text", label: "Message", placeholder: "New order {{id}}" }], ports: () => ({ ports: [IN, OUT] }) },
  email: { label: "Send email", category: "Actions", icon: <Mail />, accent: ACTION, fields: [{ key: "to", label: "To", placeholder: "{{customer.email}}" }, { key: "subject", label: "Subject", placeholder: "Thanks!" }], ports: () => ({ ports: [IN, OUT] }) },
  sheet: { label: "Append row", category: "Actions", icon: <FileSpreadsheet />, accent: ACTION, fields: [{ key: "sheet", label: "Sheet", placeholder: "Orders 2026" }], ports: () => ({ ports: [IN, OUT] }) },
  transform: { label: "Transform", category: "Actions", icon: <Shuffle />, accent: ACTION, fields: [{ key: "expr", label: "Expression", placeholder: "{ total: $.amount * 1.2 }" }], ports: () => ({ ports: [IN, OUT] }) },
  if: { label: "If / else", category: "Logic", icon: <GitBranch />, accent: LOGIC, fields: [{ key: "condition", label: "Condition", placeholder: "order.total > 500" }], ports: () => ({ ports: [IN, { id: "true", kind: "out", side: "bottom", offset: 0.3, label: "true" }, { id: "false", kind: "out", side: "bottom", offset: 0.7, label: "false" }] }) },
  delay: { label: "Wait", category: "Logic", icon: <Timer />, accent: LOGIC, fields: [{ key: "for", label: "Duration", placeholder: "1 day" }], ports: () => ({ ports: [IN, OUT] }) },
  merge: { label: "Merge", category: "Logic", icon: <Network />, accent: LOGIC, fields: [{ key: "mode", label: "Mode", placeholder: "wait for all" }], ports: () => ({ ports: [{ id: "a", kind: "in", side: "top", offset: 0.3, label: "a" }, { id: "b", kind: "in", side: "top", offset: 0.7, label: "b" }, OUT] }) },
}
const KIND_IDS = Object.keys(KINDS).filter((k): k is KindId => k in KINDS)
const CATEGORIES: readonly Category[] = ["Triggers", "Actions", "Logic"]
const NODE_WIDTH = 200
const GRID = 10
/** Palette items are dnd draggables \`palette:<kind>\`; the canvas is the dnd container \`CANVAS_ZONE\`. */
const PALETTE_PREFIX = "palette:"
const CANVAS_ZONE = "workflow-canvas"

interface Step {
  readonly kind: KindId
  readonly name: string
  readonly config: Readonly<Record<string, string>>
}

function makeNode(kind: KindId, id: string, position: XY, name?: string, config: Record<string, string> = {}): FlowNode<Step> {
  const k = KINDS[kind]
  const p = k.ports()
  return { id, position, width: NODE_WIDTH, ports: p.ports, data: { kind, name: name ?? k.label, config } }
}

const edge = (source: string, sourcePort: string, target: string, label?: string): FlowEdge => ({ id: \`\${source}.\${sourcePort}-\${target}\`, source, sourcePort, target, targetPort: "in", ...(label ? { label } : {}) })

const INITIAL: Graph<Step> = {
  nodes: [
    makeNode("webhook", "order", { x: 120, y: 0 }, "New order", { path: "/hooks/shop/orders" }),
    makeNode("http", "customer", { x: 120, y: 110 }, "Fetch customer", { url: "GET /customers/{{customer_id}}" }),
    makeNode("if", "big", { x: 120, y: 220 }, "Order over $500?", { condition: "order.total > 500" }),
    makeNode("slack", "vip", { x: 0, y: 350 }, "Ping #vip-sales", { channel: "#vip-sales", text: "Big order from {{customer.name}}" }),
    makeNode("delay", "wait", { x: 250, y: 350 }, "Wait a day", { for: "1 day" }),
    makeNode("email", "review", { x: 250, y: 460 }, "Ask for a review", { to: "{{customer.email}}", subject: "How was your order?" }),
    makeNode("schedule", "monday", { x: 520, y: 0 }, "Every Monday 9:00", { cron: "0 9 * * MON" }),
    makeNode("sheet", "report", { x: 520, y: 110 }, "Weekly report row", { sheet: "Sales 2026" }),
  ],
  edges: [edge("order", "out", "customer"), edge("customer", "out", "big"), edge("big", "true", "vip", "yes"), edge("big", "false", "wait", "no"), edge("wait", "out", "review"), edge("monday", "out", "report")],
}

/** Each test-run step takes this long, so the walk along the graph is visible. */
const RUN_STEP_MS = 420

/**
 * An automation builder: drag steps in from the palette (or click to add), connect them, branch on
 * If / else, edit the selected step on the right, and Test run walks the graph from the triggers.
 * Drop a connection on empty canvas to pick the next step right there.
 */
export function WorkflowBuilder() {
  const flow = useFlow<Step>({ initial: INITIAL, edgeKind: "step" })
  const { graph, selection } = flow.state
  const [status, setStatus] = useState<Readonly<Record<string, NodeStatus>>>({})
  const [live, setLive] = useState<ReadonlySet<string>>(new Set())
  const [running, setRunning] = useState(false)
  const [quickAdd, setQuickAdd] = useState<{ from: PortRef; fromKind: PortKind; at: XY } | null>(null)
  const [toast, setToast] = useState("")
  const timers = useRef<number[]>([])
  useEffect(() => () => timers.current.forEach((t) => window.clearTimeout(t)), [])
  useEffect(() => {
    if (!toast) return
    const t = window.setTimeout(() => setToast(""), 1800)
    return () => window.clearTimeout(t)
  }, [toast])

  const selected = selection.nodes.length === 1 ? graph.nodes.find((n) => n.id === selection.nodes[0]) : undefined

  const add = (kind: KindId, at: XY, connectFrom?: { from: PortRef; fromKind: PortKind }) => {
    const g = flow.current().graph
    const id = uniqueId(kind, new Set(g.nodes.map((n) => n.id)))
    // Hang the new step under the dragged output (or above the dragged input), centred on the drop point.
    const node = makeNode(kind, id, snapToGrid({ x: at.x - NODE_WIDTH / 2, y: connectFrom?.fromKind === "in" ? at.y - 80 : at.y }, GRID))
    flow.addNode(node)
    if (connectFrom) {
      const port = node.ports?.find((p) => p.kind !== connectFrom.fromKind)
      if (port) requestAnimationFrame(() => flow.connect(connectFrom.from, { node: id, port: port.id }))
    }
  }

  const addAtCentre = (kind: KindId) => {
    const { width, height } = flow.paneSize()
    const v = flow.current().viewport
    // Start at the centre of the view and step down-right until the new step overlaps nothing.
    const s = flow.current()
    const taken = s.graph.nodes.map((n) => nodeRect(n, s.sizes))
    let at = { x: (width / 2 - v.x) / v.zoom, y: (height / 2 - v.y) / v.zoom - 40 }
    for (let i = 0; i < 40 && taken.some((r) => rectsIntersect(r, { x: at.x - NODE_WIDTH / 2 - 8, y: at.y - 8, width: NODE_WIDTH + 16, height: 80 })); i++) at = { x: at.x + 30, y: at.y + 40 }
    add(kind, at)
  }

  const testRun = () => {
    timers.current.forEach((t) => window.clearTimeout(t))
    const g = flow.current().graph
    const targets = new Set(g.edges.map((e) => e.target))
    const triggers = g.nodes.filter((n) => !targets.has(n.id)).map((n) => n.id)
    // Breadth-first from the triggers; an If takes its "true" branch when the condition mentions "> 5", else "false".
    const order: { id: string; via: string[] }[] = []
    const seen = new Set<string>()
    let frontier = triggers.map((id) => ({ id, via: [] as string[] }))
    while (frontier.length > 0) {
      const next: { id: string; via: string[] }[] = []
      for (const step of frontier) {
        if (seen.has(step.id)) continue
        seen.add(step.id)
        order.push(step)
        const node = g.nodes.find((n) => n.id === step.id)
        const branch = node?.data.kind === "if" ? (/>\\s*\\d/.test(node.data.config.condition ?? "") ? "true" : "false") : undefined
        for (const e of g.edges) if (e.source === step.id && (!branch || e.sourcePort === branch)) next.push({ id: e.target, via: [e.id] })
      }
      frontier = next
    }
    setRunning(true)
    setStatus(Object.fromEntries(g.nodes.map((n) => [n.id, "idle" as const])))
    setLive(new Set())
    order.forEach((step, i) => {
      timers.current.push(
        window.setTimeout(() => {
          setStatus((s) => ({ ...s, [step.id]: "running" }))
          setLive((l) => new Set([...l, ...step.via]))
        }, i * RUN_STEP_MS),
        window.setTimeout(() => setStatus((s) => ({ ...s, [step.id]: "ok" })), i * RUN_STEP_MS + RUN_STEP_MS * 0.8),
      )
    })
    timers.current.push(
      window.setTimeout(() => {
        setRunning(false)
        setLive(new Set())
        setToast(\`Test run: \${order.length} of \${g.nodes.length} steps ran\`)
      }, order.length * RUN_STEP_MS + 200),
    )
  }

  // A palette item dropped on the canvas: the dnd kit runs the drag; the last pointer position is the drop point.
  const lastDrag = useRef<{ pointer: XY | null; over: string | null }>({ pointer: null, over: null })
  const trackDrag = (state: DragState<unknown>) => {
    lastDrag.current = { pointer: state.pointer, over: state.over?.id ?? null }
  }

  return (
    <EnsureOverlayUi>
      <DndProvider
        presentation={{ feedback: "clone", indicator: "none", dropAnimation: false, flash: false }}
        onDragMove={trackDrag}
        onDragOver={trackDrag}
        onDragEnd={(event) => {
          const { pointer, over } = lastDrag.current
          const kind = KIND_IDS.find((k) => \`\${PALETTE_PREFIX}\${k}\` === event.source.id)
          if (event.reason === "drop" && over === CANVAS_ZONE && pointer && kind) add(kind, flow.clientToFlow(pointer))
        }}
      >
        <div className="flex h-full flex-col md:grid md:grid-cols-[176px_1fr_248px]">
          <Palette onAdd={addAtCentre} />
          <CanvasDropZone>
            <FlowCanvas
              flow={flow}
              fitViewOnMount
              snapGrid={GRID}
              label="Workflow"
              renderNode={({ node, selected: isSelected }) => {
                const k = KINDS[node.data.kind]
                const first = k.fields[0]
                const value = first ? node.data.config[first.key] : undefined
                return (
                  <NodeCard title={node.data.name} subtitle={k.label} icon={k.icon} accent={k.accent} selected={isSelected} status={status[node.id]} >
                    {value && <div className="truncate border-t px-2.5 py-1 font-mono text-[10.5px] text-muted-foreground">{value}</div>}
                  </NodeCard>
                )
              }}
              edgeClassName={(e) => (live.has(e.id) ? \`\${FLOW_DASH_CLASS} stroke-sky-500\` : undefined)}
              onConnectToEmpty={(from, fromKind, at) => setQuickAdd({ from, fromKind, at })}
            >
              <FlowPanel position="top-left">
                <div className={\`\${PANEL_SURFACE} flex items-center gap-0.5 p-0.5\`} role="toolbar" aria-label="Workflow">
                  <Button size="sm" onClick={testRun} disabled={running || graph.nodes.length === 0}>
                    <Play /> {running ? "Running…" : "Test run"}
                  </Button>
                  <span className="mx-0.5 h-4 w-px bg-border" />
                  <Button variant="ghost" size="icon-sm" aria-label="Undo" title="Undo (⌘Z)" disabled={!flow.canUndo} onClick={flow.undo}>
                    <Undo2 />
                  </Button>
                  <Button variant="ghost" size="icon-sm" aria-label="Redo" title="Redo (⇧⌘Z)" disabled={!flow.canRedo} onClick={flow.redo}>
                    <Redo2 />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => flow.layout({ direction: "TB", rankGap: 44, nodeGap: 30 })}>
                    <Network /> Tidy up
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label="Copy workflow JSON"
                    title="Copy workflow JSON"
                    onClick={() => {
                      void navigator.clipboard?.writeText(flow.toJSON()).catch(() => undefined)
                      setToast("Workflow JSON copied")
                    }}
                  >
                    <Download />
                  </Button>
                </div>
              </FlowPanel>
              <FlowControls position="bottom-left" />
              <MiniMap position="bottom-right" width={150} height={96} nodeClassName={(n) => (n.data !== null && typeof n.data === "object" && "kind" in n.data && (n.data.kind === "webhook" || n.data.kind === "schedule" || n.data.kind === "form") ? "fill-violet-500/50" : undefined)} />
              {toast && (
                <FlowPanel position="bottom-center">
                  <div role="status" className="rounded-md bg-foreground px-2.5 py-1 text-[12px] text-background shadow">
                    {toast}
                  </div>
                </FlowPanel>
              )}
              {quickAdd && (
                <QuickAdd
                  at={flow.flowToClient(quickAdd.at)}
                  kinds={KIND_IDS.filter((k) => KINDS[k].ports().ports.some((p) => p.kind !== quickAdd.fromKind))}
                  onPick={(kind) => {
                    add(kind, quickAdd.at, quickAdd)
                    setQuickAdd(null)
                  }}
                  onClose={() => setQuickAdd(null)}
                />
              )}
            </FlowCanvas>
          </CanvasDropZone>
          <Inspector
            node={selected}
            count={{ nodes: graph.nodes.length, edges: graph.edges.length, selected: selection.nodes.length }}
            onEdit={(update) => selected && flow.updateNodeData(selected.id, update, false)}
            onBeginEdit={() => flow.dispatch({ type: "checkpoint" })}
            onDuplicate={() => flow.duplicate()}
            onDelete={() => flow.deleteSelection()}
          />
        </div>
      </DndProvider>
    </EnsureOverlayUi>
  )
}

/** The canvas column as a dnd container target, so palette items can be dropped on it. */
function CanvasDropZone({ children }: { readonly children: ReactNode }) {
  const { ref } = useDroppable({ id: CANVAS_ZONE, kind: "container" })
  return (
    <div ref={ref} data-zone={CANVAS_ZONE} className="relative min-h-0 flex-1 data-[dnd-over]:ring-2 data-[dnd-over]:ring-primary/40 data-[dnd-over]:ring-inset">
      {children}
    </div>
  )
}

/** One palette entry: a dnd draggable that also adds on click (the dnd kit's activation tells a click from a drag). */
function PaletteItem({ kind, index, onAdd }: { readonly kind: KindId; readonly index: number; readonly onAdd: (kind: KindId) => void }) {
  const { ref } = useDraggable({ id: \`\${PALETTE_PREFIX}\${kind}\`, container: "palette", index, data: kind })
  return (
    <button
      ref={ref}
      type="button"
      data-palette-kind={kind}
      onClick={() => onAdd(kind)}
      title="Drag onto the canvas, or click to add"
      className="flex h-7 w-full cursor-grab items-center gap-2 rounded-md px-1.5 text-left text-[12.5px] whitespace-nowrap hover:bg-background hover:shadow-xs active:cursor-grabbing"
    >
      <span className={\`grid size-5 place-items-center rounded [&_svg]:size-3 \${KINDS[kind].accent}\`}>{KINDS[kind].icon}</span>
      {KINDS[kind].label}
    </button>
  )
}

function Palette({ onAdd }: { readonly onAdd: (kind: KindId) => void }) {
  return (
    <nav aria-label="Steps" className="flex shrink-0 gap-3 overflow-x-auto border-b bg-muted/30 p-2 md:flex-col md:gap-2 md:overflow-y-auto md:border-r md:border-b-0">
      {CATEGORIES.map((category) => (
        <div key={category} className="shrink-0">
          <div className="px-1 pb-1 text-[10.5px] font-medium tracking-wide text-muted-foreground uppercase">{category}</div>
          <ul className="flex gap-1 md:flex-col md:gap-0.5">
            {KIND_IDS.filter((k) => KINDS[k].category === category).map((k) => (
              <li key={k}>
                <PaletteItem kind={k} index={KIND_IDS.indexOf(k)} onAdd={onAdd} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}

/** The next-step menu where a connection was dropped: an overlay-kit popover at that point, arrow keys from the keyboard kit's roving focus. */
function QuickAdd({ at, kinds, onPick, onClose }: { readonly at: XY; readonly kinds: readonly KindId[]; readonly onPick: (kind: KindId) => void; readonly onClose: () => void }) {
  const { ref } = useRoving<HTMLDivElement>({ orientation: "vertical", loop: true })
  return (
    <Popover
      name="Add the next step"
      anchor={virtualAnchor.fromPoint(at.x, at.y)}
      open
      side="bottom"
      align="start"
      sideOffset={0}
      onOpenChange={(open) => {
        if (!open) onClose()
      }}
      className="w-48 p-1"
    >
      <div className="px-1.5 py-1 text-[11px] text-muted-foreground">Add the next step</div>
      <div ref={ref} role="menu" aria-label="Add the next step" className="max-h-56 overflow-y-auto">
        {kinds.map((k) => (
          <button key={k} type="button" role="menuitem" data-roving-item="" onClick={() => onPick(k)} className="flex h-7 w-full items-center gap-2 rounded px-1.5 text-left text-[12.5px] outline-none hover:bg-muted focus-visible:bg-muted">
            <span className={\`grid size-5 place-items-center rounded [&_svg]:size-3 \${KINDS[k].accent}\`}>{KINDS[k].icon}</span>
            {KINDS[k].label}
          </button>
        ))}
      </div>
    </Popover>
  )
}

function Inspector({
  node,
  count,
  onEdit,
  onBeginEdit,
  onDuplicate,
  onDelete,
}: {
  readonly node: FlowNode<Step> | undefined
  readonly count: { readonly nodes: number; readonly edges: number; readonly selected: number }
  readonly onEdit: (update: (step: Step) => Step) => void
  readonly onBeginEdit: () => void
  readonly onDuplicate: () => void
  readonly onDelete: () => void
}) {
  const field = "h-7 w-full rounded-md border bg-background px-2 text-[12.5px] outline-none focus-visible:ring-2 focus-visible:ring-ring"
  return (
    <aside aria-label="Inspector" className="hidden min-h-0 overflow-y-auto border-l bg-muted/20 p-3 text-[12.5px] md:block">
      {node ? (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className={\`grid size-7 place-items-center rounded-md [&_svg]:size-4 \${KINDS[node.data.kind].accent}\`}>{KINDS[node.data.kind].icon}</span>
            <div className="min-w-0">
              <div className="truncate font-medium">{node.data.name}</div>
              <div className="text-[11px] text-muted-foreground">
                {KINDS[node.data.kind].label} · <span className="font-mono">{node.id}</span>
              </div>
            </div>
          </div>
          <label className="flex flex-col gap-1">
            <span className="text-[11px] text-muted-foreground">Name</span>
            <input className={field} value={node.data.name} onFocus={onBeginEdit} onChange={(e) => onEdit((s) => ({ ...s, name: e.target.value }))} />
          </label>
          {KINDS[node.data.kind].fields.map((f) => (
            <label key={f.key} className="flex flex-col gap-1">
              <span className="text-[11px] text-muted-foreground">{f.label}</span>
              <input className={\`\${field} font-mono text-[11.5px]\`} placeholder={f.placeholder} value={node.data.config[f.key] ?? ""} onFocus={onBeginEdit} onChange={(e) => onEdit((s) => ({ ...s, config: { ...s.config, [f.key]: e.target.value } }))} />
            </label>
          ))}
          <div className="flex gap-1.5 pt-1">
            <Button variant="outline" size="sm" onClick={onDuplicate}>
              <Copy /> Duplicate
            </Button>
            <Button variant="outline" size="sm" className="text-destructive" onClick={onDelete}>
              <Trash2 /> Delete
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2 text-muted-foreground">
          <div className="font-medium text-foreground">Workflow</div>
          <div className="tabular-nums">
            {count.nodes} steps · {count.edges} connections{count.selected > 1 ? \` · \${count.selected} selected\` : ""}
          </div>
          <p>Select a step to edit it. Drag from a port and let go on empty canvas to add the next step there.</p>
          <p>Edits to one field undo as one step: ⌘Z.</p>
        </div>
      )}
    </aside>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>y(()=>import(`./workflow-B3BxRGg0.js`),[]));function ge(){return(0,R.jsxs)(`div`,{children:[(0,R.jsx)(a,{title:`Workflow builder`,children:`A Zapier / n8n-style automation editor: triggers, actions and logic steps on a snapped grid with step edges.`}),(0,R.jsx)(k,{n:1,title:`Automation builder`,blurb:`Drag a step in from the palette (or click it), connect it, branch on If / else, edit it on the right, press Test run. Drop a connection on empty canvas to choose the next step right there.`,code:$,children:(0,R.jsx)(P,{testId:`workflow`,height:560,children:(0,R.jsx)(ue,{})})})]})}export{ge as component};