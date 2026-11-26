import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{S as n,_ as r,b as i,i as a,r as o,t as s,v as c,y as l}from"./provider-DEyelEMR.js";import{g as u}from"./stroke-FK0Ft7zS.js";import{a as d,d as f,f as p,o as ee,s as te,t as m,u as h}from"./hooks-M7G8AnMW.js";import{t as g}from"./kbd-C3VYXfDq.js";import{i as _}from"./hints-DZ77Qitg.js";import{Bc as v,Cc as y,Ic as b,hi as x}from"./index-q72zUtm9.js";import"./kit-gallery-Atvibnty.js";import{t as S}from"./example-B8EaWveR.js";var C=`(function)`,w=`Other`;function T(e,t={}){let n=new Map;for(let i of e.commands.list()){let a=r(i.spec.title),o=i.spec.category===void 0?w:r(i.spec.category),s=e.keymap.effective().filter(e=>e.command===i.id).map(e=>({command:i.id,title:a,category:o,key:e.keyText,when:e.rule.when===void 0?null:typeof e.rule.when==`string`?e.rule.when:C,source:e.layer,plugin:e.source??null}));s.length===0&&t.includeUnbound&&s.push({command:i.id,title:a,category:o,key:null,when:null,source:null,plugin:null}),n.set(i.id,s)}return[...n.values()].flat().toSorted((e,t)=>e.category.localeCompare(t.category)||e.title.localeCompare(t.title)||(e.key??``).localeCompare(t.key??``))}function ne(e,t={}){return`${JSON.stringify({platform:e.platform,bindings:T(e,t)},null,2)}\n`}function E(e){return e.replaceAll(`|`,`\\|`).replaceAll(`
`,` `)}function D(e){return e===null?`—`:e.split(` `).map(e=>e.includes("`")?E(e):`\`${E(e)}\``).join(` then `)}function O(e,t={}){let n=T(e,t),r=[`# ${t.title??`Keyboard shortcuts`}`,``,`Platform: ${e.platform}. Generated from the command registry and the effective keymap.`],i=[...new Set(n.map(e=>e.category))];for(let e of i){r.push(``,`## ${E(e)}`,``,`| Command | Keys | When | Source |`,`|---|---|---|---|`);for(let t of n.filter(t=>t.category===e)){let e=t.source===null?`—`:t.plugin?`${t.source} (${E(t.plugin)})`:t.source;r.push(`| ${E(t.title)} | ${D(t.key)} | ${t.when===null?``:`\`${E(t.when)}\``} | ${e} |`)}}return`${r.join(`
`)}\n`}var k=e(v(),1),A=b(),j=[`trace`,`context`,`commands`,`findings`,`map`],M={trace:`Trace`,context:`Context keys`,commands:`Commands`,findings:`Findings`,map:`Keyboard map`},N=new Set([`fired`]),P=`inline-flex h-6 items-center rounded border bg-background px-1.5 text-[11px] font-medium hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring`,F=`px-1.5 py-0.5 align-top`,I=`px-1.5 py-1 text-left text-[11px] font-medium text-muted-foreground`;function L(e=!0){let{attachment:t,keyboard:n}=a(),[r,i]=(0,k.useState)([]);return(0,k.useEffect)(()=>{if(!t||!e)return;let r=0;return t.observe(e=>{r+=1;let t=e.stroke?u(e.stroke,n.platform)??e.stroke.key:`(timer)`;if(e.stroke?.type===`keyup`&&e.decision.outcome===`no-match`)return;let a={n:r,key:t,dispatch:e};i(e=>[a,...e].slice(0,40))})},[t,n,e]),{entries:r,clear:()=>i([])}}function R(e){let t=e.context.snapshot(),n=new Set;for(let t of e.keymap.effective())for(let e of i(t.rule.when))n.add(e);for(let t of e.commands.list()){for(let e of i(t.spec.when))n.add(e);for(let e of i(t.spec.enabled))n.add(e)}return[...new Set([...Object.keys(t),...n])].toSorted((e,t)=>e.localeCompare(t)).map(n=>({key:n,value:e.context.get(n),set:n in t}))}function z(e){return e===void 0?`undefined`:Array.isArray(e)?`[${e.join(`, `)}]`:JSON.stringify(e)}var B=n;function V({inline:e=!1,defaultOpen:t=!1,defaultTab:n=`trace`,className:r=``}){let[i,a]=(0,k.useState)(t||e),[o,s]=(0,k.useState)(n),c=(0,A.jsxs)(`section`,{"aria-label":`Keyboard devtools`,"data-kb-devtools":``,className:`flex flex-col gap-2 rounded-md border bg-background p-2 text-[12px] text-foreground ${e?``:`shadow-xl`} ${r}`,children:[(0,A.jsxs)(`div`,{className:`flex items-center gap-1`,role:`tablist`,"aria-label":`Devtools views`,children:[j.map(e=>(0,A.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":o===e,"data-kb-devtools-tab":e,onClick:()=>s(e),className:`h-6 rounded px-1.5 text-[11px] font-medium ${o===e?`bg-muted text-foreground`:`text-muted-foreground hover:bg-muted/60`}`,children:M[e]},e)),e?null:(0,A.jsx)(`button`,{type:`button`,className:`${P} ml-auto`,onClick:()=>a(!1),"aria-label":`Close keyboard devtools`,children:`Close`})]}),(0,A.jsx)(`div`,{role:`tabpanel`,"aria-label":M[o],className:`min-h-0`,children:o===`trace`?(0,A.jsx)(U,{}):o===`context`?(0,A.jsx)(K,{}):o===`commands`?(0,A.jsx)(J,{}):o===`findings`?(0,A.jsx)(X,{}):(0,A.jsx)(ie,{})})]});return e?c:(0,A.jsxs)(`div`,{className:`fixed right-3 bottom-3 z-50 flex max-h-[70vh] w-[min(40rem,calc(100vw-1.5rem))] flex-col items-end gap-2`,children:[i?(0,A.jsx)(`div`,{className:`max-h-[calc(70vh-2.5rem)] w-full overflow-auto`,children:c}):null,(0,A.jsx)(`button`,{type:`button`,className:P,"aria-expanded":i,onClick:()=>a(e=>!e),"data-kb-devtools-toggle":``,children:`Keyboard devtools`})]})}function H({children:e,label:t}){return(0,A.jsx)(`div`,{className:`max-h-80 overflow-auto rounded border`,tabIndex:0,role:`region`,"aria-label":t,children:e})}function U(){let[e,t]=(0,k.useState)(!0),{entries:n,clear:r}=L(e),[i,a]=(0,k.useState)(null),o=n.find(e=>e.n===i)??n[0];return(0,A.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,A.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,A.jsx)(`button`,{type:`button`,className:P,"aria-pressed":!e,onClick:()=>t(e=>!e),children:e?`Pause`:`Record`}),(0,A.jsx)(`button`,{type:`button`,className:P,onClick:r,children:`Clear`}),(0,A.jsx)(`span`,{className:`text-muted-foreground`,children:`Press keys anywhere on the page; pick a row to see why each rule did or did not fire.`})]}),(0,A.jsxs)(`div`,{className:`grid gap-2 md:grid-cols-[15rem_1fr]`,children:[(0,A.jsx)(H,{label:`Dispatched keys`,children:(0,A.jsxs)(`ol`,{"data-kb-trace":``,children:[n.length===0?(0,A.jsx)(`li`,{className:`px-2 py-3 text-center text-muted-foreground`,children:`No keys yet.`}):null,n.map(e=>{let{decision:t}=e.dispatch;return(0,A.jsx)(`li`,{children:(0,A.jsxs)(`button`,{type:`button`,onClick:()=>a(e.n),"data-kb-trace-row":e.key,"data-outcome":t.outcome,"aria-current":o?.n===e.n,className:`flex w-full items-center gap-1.5 border-b border-border/50 px-1.5 py-0.5 text-left hover:bg-muted/50 ${o?.n===e.n?`bg-muted`:``}`,children:[(0,A.jsx)(`code`,{className:`font-mono`,children:e.key}),(0,A.jsxs)(`span`,{className:`ml-auto rounded px-1 font-mono text-[10px] ${t.outcome===`ran`?`bg-emerald-500/15 text-emerald-700 dark:text-emerald-300`:t.outcome===`pending`?`bg-sky-500/15 text-sky-700 dark:text-sky-300`:`text-muted-foreground`}`,children:[t.outcome,t.reason?` · ${t.reason}`:``]})]})},e.n)})]})}),o?(0,A.jsx)(W,{entry:o}):(0,A.jsx)(`div`,{className:`rounded border p-2 text-muted-foreground`,children:`The explanation of the selected key shows here.`})]})]})}function W({entry:e}){let{decision:t,explanation:n,env:r}=e.dispatch,i=n?.rules??[];return(0,A.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-1.5`,"data-kb-explanation":``,children:[(0,A.jsxs)(`p`,{children:[(0,A.jsx)(`code`,{className:`font-mono font-semibold`,children:e.key}),` → `,(0,A.jsx)(`strong`,{children:t.outcome}),t.command?(0,A.jsxs)(A.Fragment,{children:[` `,`· `,(0,A.jsx)(`code`,{className:`font-mono`,children:t.command})]}):null,t.reason?(0,A.jsxs)(A.Fragment,{children:[` (`,t.reason,`)`]}):null,r?.editable?(0,A.jsx)(`span`,{className:`text-muted-foreground`,children:` · focus in a field`}):null,r?.overlay?(0,A.jsxs)(`span`,{className:`text-muted-foreground`,children:[` · overlay `,r.overlay]}):null]}),n?.ignored?(0,A.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Ignored before any rule was compared: `,n.ignored,`.`]}):null,(0,A.jsx)(H,{label:`Rules for this key`,children:(0,A.jsxs)(`table`,{className:`w-full`,children:[(0,A.jsx)(`thead`,{className:`sticky top-0 bg-muted/80`,children:(0,A.jsxs)(`tr`,{children:[(0,A.jsx)(`th`,{className:I,children:`Rule`}),(0,A.jsx)(`th`,{className:I,children:`Command`}),(0,A.jsx)(`th`,{className:I,children:`When`}),(0,A.jsx)(`th`,{className:I,children:`Layer`}),(0,A.jsx)(`th`,{className:I,children:`Verdict`})]})}),(0,A.jsxs)(`tbody`,{children:[i.length===0?(0,A.jsx)(`tr`,{children:(0,A.jsx)(`td`,{colSpan:5,className:`px-2 py-3 text-center text-muted-foreground`,children:e.dispatch.stroke?`No rule binds this key.`:`A timed-out sequence fired its fallback.`})}):null,i.map(({rule:e,verdict:t})=>(0,A.jsxs)(`tr`,{className:`border-t border-border/50`,"data-verdict":t,"data-rule-command":e.command,children:[(0,A.jsx)(`td`,{className:`${F} font-mono`,children:e.keyText}),(0,A.jsx)(`td`,{className:`${F} font-mono`,children:e.command}),(0,A.jsx)(`td`,{className:`${F} font-mono text-[11px] text-muted-foreground`,children:typeof e.rule.when==`string`?e.rule.when:e.rule.when?`(function)`:``}),(0,A.jsxs)(`td`,{className:F,children:[e.layer,e.source?` · ${e.source}`:``]}),(0,A.jsx)(`td`,{className:`${F} font-mono ${N.has(t)?`text-emerald-700 dark:text-emerald-300`:`text-amber-700 dark:text-amber-300`}`,children:t})]},e.uid))]})]})})]})}function G(e,t){if(e.trim()===``)return null;try{return c(e),l(e,t)?`true`:`false`}catch(e){return e instanceof Error?e.message:String(e)}}function K(){let e=o(),t=h(R,B),[n,r]=(0,k.useState)(``),i=G(n,e.context);return(0,A.jsxs)(`div`,{className:`flex flex-col gap-2`,"data-kb-devtools-context":``,children:[(0,A.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,A.jsx)(`input`,{value:n,onChange:e=>r(e.target.value),placeholder:`Test a when clause: listFocus && !inputFocus`,"aria-label":`When clause to test`,className:`h-7 flex-1 rounded-md border bg-background px-2 font-mono text-[12px] focus-visible:outline-2 focus-visible:outline-ring`}),i===null?null:(0,A.jsx)(`span`,{"data-kb-devtools-when":i,className:`rounded border px-1.5 py-0.5 font-mono text-[11px]`,children:i})]}),(0,A.jsx)(H,{label:`Context keys`,children:(0,A.jsxs)(`table`,{className:`w-full`,children:[(0,A.jsx)(`thead`,{className:`sticky top-0 bg-muted/80`,children:(0,A.jsxs)(`tr`,{children:[(0,A.jsx)(`th`,{className:I,children:`Key`}),(0,A.jsx)(`th`,{className:I,children:`Value`}),(0,A.jsx)(`th`,{className:I,children:`Source`})]})}),(0,A.jsx)(`tbody`,{children:t.map(e=>(0,A.jsxs)(`tr`,{className:`border-t border-border/50`,"data-context-key":e.key,children:[(0,A.jsx)(`td`,{className:`${F} font-mono`,children:e.key}),(0,A.jsx)(`td`,{className:`${F} font-mono ${e.value===!0?`text-emerald-700 dark:text-emerald-300`:`text-muted-foreground`}`,children:z(e.value)}),(0,A.jsx)(`td`,{className:`${F} text-muted-foreground`,children:e.set?`set`:e.value===void 0?`read by a when, never set`:`provider`})]},e.key))})]})})]})}function q(e){return e.commands.list().map(t=>({id:t.id,title:r(t.spec.title),owner:t.owner??`host`,visible:e.isVisible(t.id),enabled:e.isEnabled(t.id),keys:m(e,t.id)}))}function J(){let e=h(q,B);return(0,A.jsx)(H,{label:`Registered commands`,children:(0,A.jsxs)(`table`,{className:`w-full`,"data-kb-devtools-commands":``,children:[(0,A.jsx)(`thead`,{className:`sticky top-0 bg-muted/80`,children:(0,A.jsxs)(`tr`,{children:[(0,A.jsx)(`th`,{className:I,children:`Command`}),(0,A.jsx)(`th`,{className:I,children:`Owner`}),(0,A.jsx)(`th`,{className:I,children:`Visible`}),(0,A.jsx)(`th`,{className:I,children:`Enabled`}),(0,A.jsx)(`th`,{className:I,children:`Keys`})]})}),(0,A.jsx)(`tbody`,{children:e.map(e=>(0,A.jsxs)(`tr`,{className:`border-t border-border/50`,"data-command":e.id,children:[(0,A.jsxs)(`td`,{className:F,children:[(0,A.jsx)(`span`,{className:`font-mono`,children:e.id}),` `,(0,A.jsx)(`span`,{className:`text-muted-foreground`,children:e.title})]}),(0,A.jsx)(`td`,{className:F,children:e.owner}),(0,A.jsx)(`td`,{className:F,children:e.visible?`yes`:`no`}),(0,A.jsx)(`td`,{className:`${F} ${e.enabled?``:`text-amber-700 dark:text-amber-300`}`,children:e.enabled?`yes`:`no`}),(0,A.jsx)(`td`,{className:`${F} font-mono`,children:e.keys.join(`, `)})]},e.id))})]})})}var Y=e=>e.analyze({screenReader:!0});function X(){let e=h(Y,B);return(0,A.jsx)(H,{label:`Keymap findings`,children:(0,A.jsxs)(`ul`,{"data-kb-devtools-findings":``,children:[e.length===0?(0,A.jsx)(`li`,{className:`px-2 py-3 text-center text-muted-foreground`,children:`No findings.`}):null,e.map((e,t)=>(0,A.jsxs)(`li`,{className:`border-b border-border/50 px-1.5 py-1`,"data-finding":e.kind,children:[(0,A.jsx)(`span`,{className:`mr-1.5 rounded bg-muted px-1 font-mono text-[10px] uppercase`,children:e.kind}),e.message]},`${e.kind}-${t}`))]})})}var re=[`markdown`,`json`];function ie(){let[e,t]=(0,k.useState)(`markdown`),[n,r]=(0,k.useState)(!1),i=h((0,k.useMemo)(()=>e===`markdown`?e=>O(e):e=>ne(e),[e]),B);return(0,A.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,A.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[re.map(n=>(0,A.jsx)(`button`,{type:`button`,className:P,"aria-pressed":e===n,onClick:()=>t(n),children:n===`markdown`?`Markdown`:`JSON`},n)),(0,A.jsx)(`button`,{type:`button`,className:`${P} ml-auto`,onClick:()=>{let e=()=>r(!0);typeof navigator<`u`&&navigator.clipboard&&navigator.clipboard.writeText(i).then(e,e)},children:n?`Copied`:`Copy`}),(0,A.jsx)(`button`,{type:`button`,className:P,onClick:()=>{let t=new Blob([i],{type:e===`markdown`?`text/markdown`:`application/json`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=e===`markdown`?`keyboard-shortcuts.md`:`keyboard-shortcuts.json`,r.click(),URL.revokeObjectURL(n)},"data-kb-map-download":``,children:`Download`})]}),(0,A.jsx)(H,{label:`Keyboard map`,children:(0,A.jsx)(`pre`,{className:`p-2 font-mono text-[11px] whitespace-pre`,"data-kb-map":e,children:i})})]})}var Z=`you`,ae=[{id:101,title:`Palette loses focus after closing a nested page`,assignee:Z,status:`open`,starred:!1},{id:102,title:`Record chords in the shortcuts editor`,assignee:`mira`,status:`open`,starred:!1},{id:103,title:`AZERTY users cannot trigger Mod+/`,assignee:null,status:`open`,starred:!1},{id:104,title:`Cheatsheet should hide keys that do nothing here`,assignee:Z,status:`open`,starred:!1},{id:105,title:`Export keybindings as JSON`,assignee:`jonas`,status:`open`,starred:!1},{id:110,title:`IME composition never fires a shortcut`,assignee:Z,status:`closed`,starred:!1}],oe=(e,t)=>e.filter(e=>t===`inbox`?e.status===`open`:e.status===`closed`),se=[{key:`g i`,command:`nav.inbox`},{key:`g d`,command:`nav.done`},{key:`j`,command:`list.next`},{key:`ArrowDown`,command:`list.next`,when:`listFocus`},{key:`k`,command:`list.prev`},{key:`ArrowUp`,command:`list.prev`,when:`listFocus`},{key:`x`,command:`list.toggleSelect`},{key:`Escape`,command:`list.clear`,when:`selection.count > 0`},{key:`c`,command:`issue.new`},{key:`i`,command:`issue.assignMe`},{key:`s`,command:`issue.star`},{key:`e`,command:`issue.archive`},{key:`Mod+Enter`,command:`issue.close`}];function ce(e){let t=e instanceof Element?e.closest(`[data-issue-id]`)?.getAttribute(`data-issue-id`):null;return t?Number(t):null}var le={ArrowDown:`list.next`,ArrowUp:`list.prev`},ue=e=>e.defaultPrevented||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey?void 0:le[e.key];function de(){let[e,t]=(0,k.useState)(ae),[n,r]=(0,k.useState)(`inbox`),[i,a]=(0,k.useState)(101),o=p(),[s,c]=(0,k.useState)([]),[l,u]=(0,k.useState)(!1),[m,h]=(0,k.useState)(`Ready`),v=(0,k.useMemo)(()=>oe(e,n),[e,n]),y=v.find(e=>e.id===i)??null,b=new Set(s.length>0?s:y?[y.id]:[]),S=(e,n)=>{t(t=>t.map(t=>b.has(t.id)?e(t):t)),h(n)},C=e=>{let t=v.findIndex(e=>e.id===i),n=v[Math.max(0,Math.min(v.length-1,t+e))];n&&a(n.id)},w=e=>{r(e),c([]),a(null),h(`Opened ${e===`inbox`?`Inbox`:`Done`}`)},T=(e,t)=>({title:e,category:`Issue`,enabled:`issue.selected || selection.count > 0`,disabledReason:`Select an issue first`,run:t});return d({"nav.inbox":{title:`Go to Inbox`,category:`Go to`,run:()=>w(`inbox`)},"nav.done":{title:`Go to Done`,category:`Go to`,run:()=>w(`done`)},"list.next":{title:`Next issue`,category:`List`,run:()=>C(1)},"list.prev":{title:`Previous issue`,category:`List`,run:()=>C(-1)},"list.toggleSelect":{title:`Select issue`,category:`List`,enabled:`issue.selected`,disabledReason:`Select an issue first`,run:()=>c(e=>y===null?e:e.includes(y.id)?e.filter(e=>e!==y.id):[...e,y.id])},"list.clear":{title:`Clear selection`,category:`List`,enabled:`selection.count > 0`,run:()=>c([])},"issue.new":{title:`New issue`,category:`Issue`,run:()=>{let n=Math.max(...e.map(e=>e.id))+1;t(e=>[{id:n,title:`Untitled issue`,assignee:null,status:`open`,starred:!1},...e]),a(n),h(`Created #${n}`)}},"issue.star":T(`Star issue`,()=>S(e=>({...e,starred:!e.starred}),`Star toggled`)),"issue.assignMe":T(`Assign to me`,()=>S(e=>({...e,assignee:Z}),`Assigned to you`)),"issue.archive":T(`Archive issue`,()=>S(e=>({...e,status:`archived`}),`Archived ${b.size}`)),"issue.close":T(`Close issue`,()=>S(e=>({...e,status:e.status===`closed`?`open`:`closed`}),`Status changed`))}),f(`default`,se),te({"issue.selected":y!==null,"selection.count":s.length}),ee(`listFocus`,l),(0,A.jsxs)(`div`,{className:`flex h-[260px] flex-col overflow-hidden rounded-lg border bg-background text-[13px]`,"data-tracker":``,children:[(0,A.jsxs)(`div`,{className:`flex h-9 shrink-0 items-center gap-1.5 border-b bg-muted/30 px-2`,children:[(0,A.jsx)(`span`,{className:`font-medium`,children:n===`inbox`?`Inbox`:`Done`}),(0,A.jsx)(g,{command:`issue.assignMe`,className:`h-7`}),(0,A.jsx)(g,{command:`issue.archive`,className:`h-7`}),(0,A.jsx)(g,{command:`issue.star`,className:`h-7`})]}),(0,A.jsx)(`div`,{role:`listbox`,"aria-label":`Issues`,"aria-activedescendant":y?`devtools-issue-${y.id}`:void 0,tabIndex:0,onFocus:()=>u(!0),onBlur:()=>u(!1),onClick:e=>{let t=ce(e.target);t!==null&&a(t)},onKeyDown:e=>{let t=ue(e);t&&(e.preventDefault(),o(t,`keyboard`))},className:`min-h-0 flex-1 overflow-y-auto outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-inset`,children:v.map(e=>(0,A.jsxs)(`div`,{id:`devtools-issue-${e.id}`,role:`option`,"aria-selected":e.id===i,"data-issue-id":e.id,className:x(`flex h-8 items-center gap-2 border-b border-border/50 px-2`,e.id===i&&`bg-primary/10 shadow-[inset_2px_0_0] shadow-primary`),children:[(0,A.jsx)(`span`,{className:x(`size-3 shrink-0 rounded-sm border`,s.includes(e.id)?`border-primary bg-primary`:`border-border`),"aria-hidden":!0}),(0,A.jsxs)(`span`,{className:`w-9 shrink-0 font-mono text-[11px] text-muted-foreground tabular-nums`,children:[`#`,e.id]}),(0,A.jsx)(`span`,{className:`min-w-0 flex-1 truncate`,children:e.title}),e.starred?(0,A.jsx)(`span`,{className:`text-amber-500`,children:`★`}):null,(0,A.jsx)(`span`,{className:`w-10 shrink-0 text-right text-[11px] text-muted-foreground`,children:e.assignee??`—`})]},e.id))}),(0,A.jsxs)(`div`,{className:`flex h-8 shrink-0 items-center gap-2 border-t bg-muted/30 px-2 text-[12px] text-muted-foreground`,children:[(0,A.jsx)(_,{className:`h-6`}),(0,A.jsx)(`span`,{className:`truncate`,"data-tracker-flash":``,children:m})]})]})}function fe(){return(0,A.jsx)(s,{children:(0,A.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,A.jsx)(de,{}),(0,A.jsx)(V,{inline:!0}),` `]})})}var Q=`import { useMemo, useState, type KeyboardEvent } from "react"
import { CommandButton, KeyboardProvider, PendingChord, useCommands, useContextKey, useContextKeys, useKeymap, useRunCommand, type CommandSpec, type KeybindingRule } from "@kitora/keyboard"
import { KeyboardDevtools } from "@kitora/keyboard/devtools"
import { cn } from "@kitora/ui/utils"

// "Why didn't my key fire": the devtools entry over a small issue tracker.
// Every key lands in the trace with, rule by rule, why it fired or why not —
// a false when, a disabled command, a field with focus, an overlay on top, a
// higher layer. Also: context keys, the registry, the analyzer's findings and
// the keyboard map. A separate entry, so it costs nothing unless imported;
// render it in development only (\`import.meta.env.DEV\`) or on a settings page.

type View = "inbox" | "done"

interface Issue {
  readonly id: number
  readonly title: string
  readonly assignee: string | null
  readonly status: "open" | "closed" | "archived"
  readonly starred: boolean
}

const ME = "you"
const ISSUES: readonly Issue[] = [
  { id: 101, title: "Palette loses focus after closing a nested page", assignee: ME, status: "open", starred: false },
  { id: 102, title: "Record chords in the shortcuts editor", assignee: "mira", status: "open", starred: false },
  { id: 103, title: "AZERTY users cannot trigger Mod+/", assignee: null, status: "open", starred: false },
  { id: 104, title: "Cheatsheet should hide keys that do nothing here", assignee: ME, status: "open", starred: false },
  { id: 105, title: "Export keybindings as JSON", assignee: "jonas", status: "open", starred: false },
  { id: 110, title: "IME composition never fires a shortcut", assignee: ME, status: "closed", starred: false },
]

const issuesIn = (issues: readonly Issue[], view: View) => issues.filter((issue) => (view === "inbox" ? issue.status === "open" : issue.status === "closed"))

const DEFAULT_KEYS: readonly KeybindingRule[] = [
  { key: "g i", command: "nav.inbox" },
  { key: "g d", command: "nav.done" },
  { key: "j", command: "list.next" },
  { key: "ArrowDown", command: "list.next", when: "listFocus" },
  { key: "k", command: "list.prev" },
  { key: "ArrowUp", command: "list.prev", when: "listFocus" },
  { key: "x", command: "list.toggleSelect" },
  { key: "Escape", command: "list.clear", when: "selection.count > 0" },
  { key: "c", command: "issue.new" },
  { key: "i", command: "issue.assignMe" },
  { key: "s", command: "issue.star" },
  { key: "e", command: "issue.archive" },
  { key: "Mod+Enter", command: "issue.close" },
]

// The issue listbox keeps focus on itself (aria-activedescendant), so its rows
// take no focus and no handlers: one click handler on the listbox finds the
// row through \`data-issue-id\`, and its own key handler runs the list commands.
// The kit's ArrowUp/ArrowDown bindings (when: listFocus) run first and stop the
// key; the listbox handles it only when no binding took it (e.g. one removed).
function issueIdAt(target: EventTarget): number | null {
  const id = target instanceof Element ? target.closest("[data-issue-id]")?.getAttribute("data-issue-id") : null
  return id ? Number(id) : null
}
const LISTBOX_KEYS: Readonly<Record<string, string>> = { ArrowDown: "list.next", ArrowUp: "list.prev" }
const listboxCommand = (event: KeyboardEvent<HTMLElement>): string | undefined =>
  event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey ? undefined : LISTBOX_KEYS[event.key]

function Tracker() {
  const [issues, setIssues] = useState(ISSUES)
  const [view, setView] = useState<View>("inbox")
  const [activeId, setActiveId] = useState<number | null>(101)
  const runCommand = useRunCommand()
  const [selected, setSelected] = useState<readonly number[]>([])
  const [listFocus, setListFocus] = useState(false)
  const [flash, setFlash] = useState("Ready")

  const visible = useMemo(() => issuesIn(issues, view), [issues, view])
  const active = visible.find((issue) => issue.id === activeId) ?? null
  const targets = new Set(selected.length > 0 ? selected : active ? [active.id] : [])
  const update = (change: (issue: Issue) => Issue, message: string) => {
    setIssues((list) => list.map((issue) => (targets.has(issue.id) ? change(issue) : issue)))
    setFlash(message)
  }
  const move = (step: number) => {
    const at = visible.findIndex((issue) => issue.id === activeId)
    const next = visible[Math.max(0, Math.min(visible.length - 1, at + step))]
    if (next) setActiveId(next.id)
  }
  const go = (next: View) => {
    setView(next)
    setSelected([])
    setActiveId(null)
    setFlash(\`Opened \${next === "inbox" ? "Inbox" : "Done"}\`)
  }
  const issueCommand = (title: string, run: () => void): CommandSpec<undefined> => ({ title, category: "Issue", enabled: "issue.selected || selection.count > 0", disabledReason: "Select an issue first", run })

  useCommands({
    "nav.inbox": { title: "Go to Inbox", category: "Go to", run: () => go("inbox") },
    "nav.done": { title: "Go to Done", category: "Go to", run: () => go("done") },
    "list.next": { title: "Next issue", category: "List", run: () => move(1) },
    "list.prev": { title: "Previous issue", category: "List", run: () => move(-1) },
    "list.toggleSelect": {
      title: "Select issue",
      category: "List",
      enabled: "issue.selected",
      disabledReason: "Select an issue first",
      run: () => setSelected((ids) => (active === null ? ids : ids.includes(active.id) ? ids.filter((id) => id !== active.id) : [...ids, active.id])),
    },
    "list.clear": { title: "Clear selection", category: "List", enabled: "selection.count > 0", run: () => setSelected([]) },
    "issue.new": {
      title: "New issue",
      category: "Issue",
      run: () => {
        const id = Math.max(...issues.map((issue) => issue.id)) + 1
        setIssues((list) => [{ id, title: "Untitled issue", assignee: null, status: "open", starred: false }, ...list])
        setActiveId(id)
        setFlash(\`Created #\${id}\`)
      },
    },
    "issue.star": issueCommand("Star issue", () => update((issue) => ({ ...issue, starred: !issue.starred }), "Star toggled")),
    "issue.assignMe": issueCommand("Assign to me", () => update((issue) => ({ ...issue, assignee: ME }), "Assigned to you")),
    "issue.archive": issueCommand("Archive issue", () => update((issue) => ({ ...issue, status: "archived" }), \`Archived \${targets.size}\`)),
    "issue.close": issueCommand("Close issue", () => update((issue) => ({ ...issue, status: issue.status === "closed" ? "open" : "closed" }), "Status changed")),
  })
  useKeymap("default", DEFAULT_KEYS)
  // The devtools' Context keys tab lists these, and every key a when-clause reads that nobody set.
  useContextKeys({ "issue.selected": active !== null, "selection.count": selected.length })
  useContextKey("listFocus", listFocus)

  return (
    <div className="flex h-[260px] flex-col overflow-hidden rounded-lg border bg-background text-[13px]" data-tracker="">
      <div className="flex h-9 shrink-0 items-center gap-1.5 border-b bg-muted/30 px-2">
        <span className="font-medium">{view === "inbox" ? "Inbox" : "Done"}</span>
        <CommandButton command="issue.assignMe" className="h-7" />
        <CommandButton command="issue.archive" className="h-7" />
        <CommandButton command="issue.star" className="h-7" />
      </div>
      <div
        role="listbox"
        aria-label="Issues"
        aria-activedescendant={active ? \`devtools-issue-\${active.id}\` : undefined}
        tabIndex={0}
        onFocus={() => setListFocus(true)}
        onBlur={() => setListFocus(false)}
        onClick={(event) => {
          const id = issueIdAt(event.target)
          if (id !== null) setActiveId(id)
        }}
        onKeyDown={(event) => {
          const command = listboxCommand(event)
          if (!command) return
          event.preventDefault()
          runCommand(command, "keyboard")
        }}
        className="min-h-0 flex-1 overflow-y-auto outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-inset"
      >
        {visible.map((issue) => (
          <div
            key={issue.id}
            id={\`devtools-issue-\${issue.id}\`}
            role="option"
            aria-selected={issue.id === activeId}
            data-issue-id={issue.id}
            className={cn("flex h-8 items-center gap-2 border-b border-border/50 px-2", issue.id === activeId && "bg-primary/10 shadow-[inset_2px_0_0] shadow-primary")}
          >
            <span className={cn("size-3 shrink-0 rounded-sm border", selected.includes(issue.id) ? "border-primary bg-primary" : "border-border")} aria-hidden />
            <span className="w-9 shrink-0 font-mono text-[11px] text-muted-foreground tabular-nums">#{issue.id}</span>
            <span className="min-w-0 flex-1 truncate">{issue.title}</span>
            {issue.starred ? <span className="text-amber-500">★</span> : null}
            <span className="w-10 shrink-0 text-right text-[11px] text-muted-foreground">{issue.assignee ?? "—"}</span>
          </div>
        ))}
      </div>
      <div className="flex h-8 shrink-0 items-center gap-2 border-t bg-muted/30 px-2 text-[12px] text-muted-foreground">
        <PendingChord className="h-6" />
        <span className="truncate" data-tracker-flash="">
          {flash}
        </span>
      </div>
    </div>
  )
}

export function DevtoolsTrace() {
  return (
    <KeyboardProvider>
      <div className="flex flex-col gap-3">
        <Tracker />
        <KeyboardDevtools inline /> {/* without inline: a floating, toggled panel */}
      </div>
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>y(()=>import(`./devtools-trace-BkfzBiSs.js`),[]));function pe(){return d({"issue.archive":{title:`Archive issue`,category:`Issue`,run:()=>`Archived`},"issue.close":{title:`Close issue`,category:`Issue`,run:()=>`Closed`},"list.next":{title:`Next issue`,category:`List`,run:()=>`Next`},"view.sidebar":{title:`Toggle sidebar`,category:`View`,run:()=>`Sidebar`}}),f(`default`,[{key:`e`,command:`issue.archive`},{key:`Mod+Enter`,command:`issue.close`},{key:`j`,command:`list.next`},{key:`Mod+B`,command:`view.sidebar`}]),(0,A.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,A.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,children:[h(e=>T(e).length),` bindings in this app.`]}),(0,A.jsx)(V,{inline:!0,defaultTab:`map`})]})}function me(){return(0,A.jsx)(s,{children:(0,A.jsx)(pe,{})})}var $=`import { KeyboardProvider, keyboardMap, useCommands, useKeyboardValue, useKeymap } from "@kitora/keyboard"
import { KeyboardDevtools } from "@kitora/keyboard/devtools"

// The keyboard map: every binding in the app as data — keyboardMap(kb) gives
// { command, title, category, key, when, source, plugin }[], and
// keyboardMapMarkdown(kb) / keyboardMapJson(kb) the same as text to write into
// your docs at build time. The devtools' Keyboard map tab exports both.

function Issues() {
  useCommands({
    "issue.archive": { title: "Archive issue", category: "Issue", run: () => "Archived" },
    "issue.close": { title: "Close issue", category: "Issue", run: () => "Closed" },
    "list.next": { title: "Next issue", category: "List", run: () => "Next" },
    "view.sidebar": { title: "Toggle sidebar", category: "View", run: () => "Sidebar" },
  })
  useKeymap("default", [
    { key: "e", command: "issue.archive" },
    { key: "Mod+Enter", command: "issue.close" },
    { key: "j", command: "list.next" },
    { key: "Mod+B", command: "view.sidebar" },
  ])
  const count = useKeyboardValue((kb) => keyboardMap(kb).length)
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[12px] text-muted-foreground">{count} bindings in this app.</p>
      <KeyboardDevtools inline defaultTab="map" />
    </div>
  )
}

export function KeyboardMap() {
  return (
    <KeyboardProvider>
      <Issues />
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>y(()=>import(`./keyboard-map-CbchCCHA.js`),[]));function he(){return(0,A.jsxs)(`div`,{children:[(0,A.jsx)(t,{title:`Devtools`,children:`VS Code's troubleshooting log and Inspect Context Keys, in the page. Press keys in the app: every key lands in the trace with, rule by rule, why it fired or why not — a false when, a disabled command, a field with focus, an overlay on top, a higher layer.`}),(0,A.jsx)(S,{n:1,title:`Why didn't my key fire`,blurb:`Click in the app and press j, then Escape with nothing selected, then e on the Done view. Pick a row in the trace: the table names the verdict of every rule bound to that key.`,code:Q,children:(0,A.jsx)(fe,{})}),(0,A.jsx)(S,{n:2,title:`Context keys and the keyboard map`,blurb:`A second app on its own engine. The Keyboard map tab exports its shortcuts as markdown or JSON; the Context keys tab lists every key set now and every key a when clause reads that nobody set.`,code:$,children:(0,A.jsx)(me,{})})]})}export{he as component};