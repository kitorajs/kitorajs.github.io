import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{Bc as n,Cc as r,Ic as i}from"./index-9y5uwRd3.js";import{h as a}from"./glue-D_yEomvg.js";import{i as o,l as s,t as c,u as l}from"./kit-Uq9GZ0sn.js";import{r as u,t as d}from"./sortable-list-BWb-mKpb.js";import{t as f}from"./kanban-DBcI2BrB.js";import{t as ee}from"./free-canvas-B1o5vse2.js";import{t as te}from"./sortable-tree-BRH45jvS.js";import"./kit-gallery-B-Yr9fP4.js";import{t as p}from"./example-CZLJLtIC.js";var m=e(n(),1),h=i();function ne(){let[e,t]=(0,m.useState)([]);return{lines:e,push:e=>t(t=>[...t.slice(-5),e])}}function g({name:e,lines:t}){return(0,h.jsx)(`ol`,{"data-demo-log":e,className:`min-h-7 rounded border bg-muted/30 px-2 py-1 font-mono text-[11px] text-muted-foreground`,children:t.length===0?(0,h.jsx)(`li`,{children:`Announcements appear here.`}):t.map((e,t)=>(0,h.jsx)(`li`,{children:e},`${t}-${e}`))})}var _=e=>(0,h.jsx)(`span`,{className:`truncate`,children:e});function v({name:e,count:t=6,messages:n,orientation:r,dir:i,handle:a,indicator:o,keyboard:s}){let[c,l]=(0,m.useState)(()=>re(t)),d=ne();return(0,h.jsxs)(`div`,{"data-demo":e,className:`flex max-w-md flex-col gap-2`,children:[(0,h.jsx)(u,{id:e,label:`${e} list`,items:c,onItemsChange:l,getId:e=>e,orientation:r,dir:i,handle:a,indicator:o,keyboard:s,renderItem:_,providerProps:{a11y:{messages:n,onAnnounce:d.push}}}),(0,h.jsx)(g,{name:e,lines:d.lines}),(0,h.jsxs)(ie,{name:e,children:[`order: `,c.join(`, `)]})]})}function re(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function ie({name:e,children:t}){return(0,h.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function ae(){return(0,h.jsx)(v,{name:`grab`})}var y=`import { type ReactNode, useState } from "react"
import { type A11yPolicy, type DndMessagesInput, SortableList } from "@kitora/dnd"

// Grab and arrow: D14, D105, D107, D108, D112. Focus an item, press Space, move it with the arrows, Space to drop or Escape to cancel. The log below repeats what a screen reader hears; focus stays on the item after the drop.

/** The last announcements of one demo, newest last; the visible twin of the live region. */
function useLog(): { readonly lines: readonly string[]; readonly push: (text: string) => void } {
  const [lines, setLines] = useState<readonly string[]>([])
  return { lines, push: (text) => setLines((prev) => [...prev.slice(-5), text]) }
}

function Log({ name, lines }: { readonly name: string; readonly lines: readonly string[] }) {
  return (
    <ol data-demo-log={name} className="min-h-7 rounded border bg-muted/30 px-2 py-1 font-mono text-[11px] text-muted-foreground">
      {lines.length === 0 ? <li>Announcements appear here.</li> : lines.map((line, i) => <li key={\`\${i}-\${line}\`}>{line}</li>)}
    </ol>
  )
}

const ROW = (label: string) => <span className="truncate">{label}</span>

function ListDemo({
  name,
  count = 6,
  messages,
  orientation,
  dir,
  handle,
  indicator,
  keyboard,
}: {
  readonly name: string
  readonly count?: number
  readonly messages?: DndMessagesInput
  readonly orientation?: "vertical" | "horizontal"
  readonly dir?: "ltr" | "rtl"
  readonly handle?: boolean
  readonly indicator?: "gap" | "line"
  readonly keyboard?: A11yPolicy
}) {
  const [items, setItems] = useState<readonly string[]>(() => makeItems(count))
  const log = useLog()
  return (
    <div data-demo={name} className="flex max-w-md flex-col gap-2">
      <SortableList
        id={name}
        label={\`\${name} list\`}
        items={items}
        onItemsChange={setItems}
        getId={(x) => x}
        orientation={orientation}
        dir={dir}
        handle={handle}
        indicator={indicator}
        keyboard={keyboard}
        renderItem={ROW}
        providerProps={{ a11y: { messages, onAnnounce: log.push } }}
      />
      <Log name={name} lines={log.lines} />
      <DemoStatus name={name}>order: {items.join(", ")}</DemoStatus>
    </div>
  )
}

/** \`count\` row labels, \`Item 1\` … \`Item count\`. */
function makeItems(count: number, prefix = "Item"): string[] {
  return Array.from({ length: count }, (_, i) => \`\${prefix} \${i + 1}\`)
}

/** A demo's one-line status (the app's state, the last op), found by the headless checks through \`data-demo-status\`. */
function DemoStatus({ name, children }: { readonly name: string; readonly children: ReactNode }) {
  return (
    <p data-demo-status={name} className="font-mono text-[11px] break-all text-muted-foreground tabular-nums">
      {children}
    </p>
  )
}

export function Tasks() {
  return <ListDemo name="grab" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>r(()=>import(`./a11y-grab-BydMVsvR.js`),[]));function oe(){let[e,t]=(0,m.useState)([]);return{lines:e,push:e=>t(t=>[...t.slice(-5),e])}}function se({name:e,lines:t}){return(0,h.jsx)(`ol`,{"data-demo-log":e,className:`min-h-7 rounded border bg-muted/30 px-2 py-1 font-mono text-[11px] text-muted-foreground`,children:t.length===0?(0,h.jsx)(`li`,{children:`Announcements appear here.`}):t.map((e,t)=>(0,h.jsx)(`li`,{children:e},`${t}-${e}`))})}var ce=e=>(0,h.jsx)(`span`,{className:`truncate`,children:e}),b=[{id:`todo`,title:`To do`},{id:`doing`,title:`Doing`},{id:`done`,title:`Done`}];function le({name:e,keyboard:t}){let[n,r]=(0,m.useState)({todo:[`Write`,`Review`,`Ship`],doing:[`Design`],done:[]}),i=oe();return(0,h.jsxs)(`div`,{"data-demo":e,className:`flex flex-col gap-2`,children:[(0,h.jsx)(f,{label:`${e} board`,keyboard:t,columns:b,items:n,onItemsChange:r,getId:e=>e,renderCard:ce,providerProps:{a11y:{onAnnounce:i.push}}}),(0,h.jsx)(se,{name:e,lines:i.lines}),(0,h.jsx)(ue,{name:e,children:b.map(e=>`${e.id}: ${(n[e.id]??[]).join(`, `)||`—`}`).join(` · `)})]})}function ue({name:e,children:t}){return(0,h.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function de(){return(0,h.jsx)(le,{name:`clipboard`,keyboard:`clipboard`})}var x=`import { type ReactNode, useState } from "react"
import { Kanban, type Layout } from "@kitora/dnd"

// Tab to target: D110. Space (or Ctrl X) picks a card up, Tab and Shift+Tab walk every slot across the columns, Space (or Ctrl V) drops it.

/** The last announcements of one demo, newest last; the visible twin of the live region. */
function useLog(): { readonly lines: readonly string[]; readonly push: (text: string) => void } {
  const [lines, setLines] = useState<readonly string[]>([])
  return { lines, push: (text) => setLines((prev) => [...prev.slice(-5), text]) }
}

function Log({ name, lines }: { readonly name: string; readonly lines: readonly string[] }) {
  return (
    <ol data-demo-log={name} className="min-h-7 rounded border bg-muted/30 px-2 py-1 font-mono text-[11px] text-muted-foreground">
      {lines.length === 0 ? <li>Announcements appear here.</li> : lines.map((line, i) => <li key={\`\${i}-\${line}\`}>{line}</li>)}
    </ol>
  )
}

const ROW = (label: string) => <span className="truncate">{label}</span>

const COLUMNS = [
  { id: "todo", title: "To do" },
  { id: "doing", title: "Doing" },
  { id: "done", title: "Done" },
] as const

function BoardDemo({ name, keyboard }: { readonly name: string; readonly keyboard: "clipboard" | "menu" }) {
  const [cards, setCards] = useState<Layout<string>>({ todo: ["Write", "Review", "Ship"], doing: ["Design"], done: [] })
  const log = useLog()
  return (
    <div data-demo={name} className="flex flex-col gap-2">
      <Kanban
        label={\`\${name} board\`}
        keyboard={keyboard}
        columns={COLUMNS}
        items={cards}
        onItemsChange={setCards}
        getId={(c) => c}
        renderCard={ROW}
        providerProps={{ a11y: { onAnnounce: log.push } }}
      />
      <Log name={name} lines={log.lines} />
      <DemoStatus name={name}>{COLUMNS.map((c) => \`\${c.id}: \${(cards[c.id] ?? []).join(", ") || "—"}\`).join(" · ")}</DemoStatus>
    </div>
  )
}

/** A demo's one-line status (the app's state, the last op), found by the headless checks through \`data-demo-status\`. */
function DemoStatus({ name, children }: { readonly name: string; readonly children: ReactNode }) {
  return (
    <p data-demo-status={name} className="font-mono text-[11px] break-all text-muted-foreground tabular-nums">
      {children}
    </p>
  )
}

export function Board() {
  return <BoardDemo name="clipboard" keyboard="clipboard" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>r(()=>import(`./a11y-clipboard-BOBK4G9b.js`),[]));function S(){let[e,t]=(0,m.useState)([]);return{lines:e,push:e=>t(t=>[...t.slice(-5),e])}}function C({name:e,lines:t}){return(0,h.jsx)(`ol`,{"data-demo-log":e,className:`min-h-7 rounded border bg-muted/30 px-2 py-1 font-mono text-[11px] text-muted-foreground`,children:t.length===0?(0,h.jsx)(`li`,{children:`Announcements appear here.`}):t.map((e,t)=>(0,h.jsx)(`li`,{children:e},`${t}-${e}`))})}var w=e=>(0,h.jsx)(`span`,{className:`truncate`,children:e}),T=[{id:`todo`,title:`To do`},{id:`doing`,title:`Doing`},{id:`done`,title:`Done`}];function E({name:e,keyboard:t}){let[n,r]=(0,m.useState)({todo:[`Write`,`Review`,`Ship`],doing:[`Design`],done:[]}),i=S();return(0,h.jsxs)(`div`,{"data-demo":e,className:`flex flex-col gap-2`,children:[(0,h.jsx)(f,{label:`${e} board`,keyboard:t,columns:T,items:n,onItemsChange:r,getId:e=>e,renderCard:w,providerProps:{a11y:{onAnnounce:i.push}}}),(0,h.jsx)(C,{name:e,lines:i.lines}),(0,h.jsx)(D,{name:e,children:T.map(e=>`${e.id}: ${(n[e.id]??[]).join(`, `)||`—`}`).join(` · `)})]})}function D({name:e,children:t}){return(0,h.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function O(){return(0,h.jsx)(E,{name:`menu`,keyboard:`menu`})}var k=`import { type ReactNode, useState } from "react"
import { Kanban, type Layout } from "@kitora/dnd"

// Move menu: D109, D111. Each card has a Move button listing where it can go. It is a plain button and menu, so it also works with VoiceOver and TalkBack on a phone.

/** The last announcements of one demo, newest last; the visible twin of the live region. */
function useLog(): { readonly lines: readonly string[]; readonly push: (text: string) => void } {
  const [lines, setLines] = useState<readonly string[]>([])
  return { lines, push: (text) => setLines((prev) => [...prev.slice(-5), text]) }
}

function Log({ name, lines }: { readonly name: string; readonly lines: readonly string[] }) {
  return (
    <ol data-demo-log={name} className="min-h-7 rounded border bg-muted/30 px-2 py-1 font-mono text-[11px] text-muted-foreground">
      {lines.length === 0 ? <li>Announcements appear here.</li> : lines.map((line, i) => <li key={\`\${i}-\${line}\`}>{line}</li>)}
    </ol>
  )
}

const ROW = (label: string) => <span className="truncate">{label}</span>

const COLUMNS = [
  { id: "todo", title: "To do" },
  { id: "doing", title: "Doing" },
  { id: "done", title: "Done" },
] as const

function BoardDemo({ name, keyboard }: { readonly name: string; readonly keyboard: "clipboard" | "menu" }) {
  const [cards, setCards] = useState<Layout<string>>({ todo: ["Write", "Review", "Ship"], doing: ["Design"], done: [] })
  const log = useLog()
  return (
    <div data-demo={name} className="flex flex-col gap-2">
      <Kanban
        label={\`\${name} board\`}
        keyboard={keyboard}
        columns={COLUMNS}
        items={cards}
        onItemsChange={setCards}
        getId={(c) => c}
        renderCard={ROW}
        providerProps={{ a11y: { onAnnounce: log.push } }}
      />
      <Log name={name} lines={log.lines} />
      <DemoStatus name={name}>{COLUMNS.map((c) => \`\${c.id}: \${(cards[c.id] ?? []).join(", ") || "—"}\`).join(" · ")}</DemoStatus>
    </div>
  )
}

/** A demo's one-line status (the app's state, the last op), found by the headless checks through \`data-demo-status\`. */
function DemoStatus({ name, children }: { readonly name: string; readonly children: ReactNode }) {
  return (
    <p data-demo-status={name} className="font-mono text-[11px] break-all text-muted-foreground tabular-nums">
      {children}
    </p>
  )
}

export function MenuBoard() {
  return <BoardDemo name="menu" keyboard="menu" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>r(()=>import(`./a11y-menu-BEhdY5Ub.js`),[]));var A=e=>(0,h.jsx)(`span`,{className:`truncate`,children:e}),j=1e3;function M(){let[e,t]=(0,m.useState)(()=>N(j,`Row`));return(0,h.jsxs)(`div`,{"data-demo":`long`,className:`flex max-w-md flex-col gap-2`,children:[(0,h.jsx)(`button`,{type:`button`,"data-before":`long`,className:`h-7 w-fit rounded border px-2 text-[12px]`,children:`Before the list`}),(0,h.jsx)(`div`,{className:`max-h-64 overflow-auto rounded-lg`,"data-scroll":`long`,children:(0,h.jsx)(u,{id:`long`,label:`1000 rows`,items:e,onItemsChange:t,getId:e=>e,renderItem:A})}),(0,h.jsx)(`button`,{type:`button`,"data-after":`long`,className:`h-7 w-fit rounded border px-2 text-[12px]`,children:`After the list`}),(0,h.jsxs)(P,{name:`long`,children:[`first: `,e.slice(0,4).join(`, `),` · last: `,e.slice(-2).join(`, `)]})]})}function N(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function P({name:e,children:t}){return(0,h.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function F(){return(0,h.jsx)(M,{})}var I=`import { type ReactNode, useState } from "react"
import { SortableList } from "@kitora/dnd"

// One tab stop for a thousand rows: D70, D108. Tab enters the list once; the arrows, Home and End move focus. Pick a row up and hold the arrow: the list scrolls with it.

const ROW = (label: string) => <span className="truncate">{label}</span>

const LONG_COUNT = 1000

function LongDemo() {
  const [items, setItems] = useState<readonly string[]>(() => makeItems(LONG_COUNT, "Row"))
  return (
    <div data-demo="long" className="flex max-w-md flex-col gap-2">
      <button type="button" data-before="long" className="h-7 w-fit rounded border px-2 text-[12px]">
        Before the list
      </button>
      <div className="max-h-64 overflow-auto rounded-lg" data-scroll="long">
        <SortableList id="long" label="1000 rows" items={items} onItemsChange={setItems} getId={(x) => x} renderItem={ROW} />
      </div>
      <button type="button" data-after="long" className="h-7 w-fit rounded border px-2 text-[12px]">
        After the list
      </button>
      <DemoStatus name="long">
        first: {items.slice(0, 4).join(", ")} · last: {items.slice(-2).join(", ")}
      </DemoStatus>
    </div>
  )
}

/** \`count\` row labels, \`Item 1\` … \`Item count\`. */
function makeItems(count: number, prefix = "Item"): string[] {
  return Array.from({ length: count }, (_, i) => \`\${prefix} \${i + 1}\`)
}

/** A demo's one-line status (the app's state, the last op), found by the headless checks through \`data-demo-status\`. */
function DemoStatus({ name, children }: { readonly name: string; readonly children: ReactNode }) {
  return (
    <p data-demo-status={name} className="font-mono text-[11px] break-all text-muted-foreground tabular-nums">
      {children}
    </p>
  )
}

export function LongList() {
  return <LongDemo />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>r(()=>import(`./a11y-roving-CGYkmX30.js`),[]));var L={roleDescription:`élément déplaçable`,instructions:()=>`Espace pour saisir, flèches pour déplacer, Espace pour déposer, Échap pour annuler.`,pickedUp:e=>`${e.item} saisi, position ${e.index??`?`} sur ${e.total??`?`}.`,over:e=>`${e.item} : position ${e.index??`?`} sur ${e.total??`?`}.`,dropped:e=>`${e.item} déposé en position ${e.index??`?`} sur ${e.total??`?`}.`,ended:e=>`Annulé. ${e.item} revient en position ${e.index??`?`}.`};function R(){let[e,t]=(0,m.useState)([]);return{lines:e,push:e=>t(t=>[...t.slice(-5),e])}}function z({name:e,lines:t}){return(0,h.jsx)(`ol`,{"data-demo-log":e,className:`min-h-7 rounded border bg-muted/30 px-2 py-1 font-mono text-[11px] text-muted-foreground`,children:t.length===0?(0,h.jsx)(`li`,{children:`Announcements appear here.`}):t.map((e,t)=>(0,h.jsx)(`li`,{children:e},`${t}-${e}`))})}var B=e=>(0,h.jsx)(`span`,{className:`truncate`,children:e});function V({name:e,count:t=6,messages:n,orientation:r,dir:i,handle:a,indicator:o,keyboard:s}){let[c,l]=(0,m.useState)(()=>H(t)),d=R();return(0,h.jsxs)(`div`,{"data-demo":e,className:`flex max-w-md flex-col gap-2`,children:[(0,h.jsx)(u,{id:e,label:`${e} list`,items:c,onItemsChange:l,getId:e=>e,orientation:r,dir:i,handle:a,indicator:o,keyboard:s,renderItem:B,providerProps:{a11y:{messages:n,onAnnounce:d.push}}}),(0,h.jsx)(z,{name:e,lines:d.lines}),(0,h.jsxs)(fe,{name:e,children:[`order: `,c.join(`, `)]})]})}function H(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function fe({name:e,children:t}){return(0,h.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function pe(){return(0,h.jsx)(V,{name:`french`,count:4,messages:L})}var U=`import { type ReactNode, useState } from "react"
import { type A11yPolicy, type DndMessagesInput, SortableList } from "@kitora/dnd"

// Custom and localized text: D106. The same list with a French catalog: role description, instructions and every announcement replaced.

/** The French catalog of the localisation demo; the keys it leaves out stay English. */
const FRENCH: DndMessagesInput = {
  roleDescription: "élément déplaçable",
  instructions: () => "Espace pour saisir, flèches pour déplacer, Espace pour déposer, Échap pour annuler.",
  pickedUp: (c) => \`\${c.item} saisi, position \${c.index ?? "?"} sur \${c.total ?? "?"}.\`,
  over: (c) => \`\${c.item} : position \${c.index ?? "?"} sur \${c.total ?? "?"}.\`,
  dropped: (c) => \`\${c.item} déposé en position \${c.index ?? "?"} sur \${c.total ?? "?"}.\`,
  ended: (c) => \`Annulé. \${c.item} revient en position \${c.index ?? "?"}.\`,
}

/** The last announcements of one demo, newest last; the visible twin of the live region. */
function useLog(): { readonly lines: readonly string[]; readonly push: (text: string) => void } {
  const [lines, setLines] = useState<readonly string[]>([])
  return { lines, push: (text) => setLines((prev) => [...prev.slice(-5), text]) }
}

function Log({ name, lines }: { readonly name: string; readonly lines: readonly string[] }) {
  return (
    <ol data-demo-log={name} className="min-h-7 rounded border bg-muted/30 px-2 py-1 font-mono text-[11px] text-muted-foreground">
      {lines.length === 0 ? <li>Announcements appear here.</li> : lines.map((line, i) => <li key={\`\${i}-\${line}\`}>{line}</li>)}
    </ol>
  )
}

const ROW = (label: string) => <span className="truncate">{label}</span>

function ListDemo({
  name,
  count = 6,
  messages,
  orientation,
  dir,
  handle,
  indicator,
  keyboard,
}: {
  readonly name: string
  readonly count?: number
  readonly messages?: DndMessagesInput
  readonly orientation?: "vertical" | "horizontal"
  readonly dir?: "ltr" | "rtl"
  readonly handle?: boolean
  readonly indicator?: "gap" | "line"
  readonly keyboard?: A11yPolicy
}) {
  const [items, setItems] = useState<readonly string[]>(() => makeItems(count))
  const log = useLog()
  return (
    <div data-demo={name} className="flex max-w-md flex-col gap-2">
      <SortableList
        id={name}
        label={\`\${name} list\`}
        items={items}
        onItemsChange={setItems}
        getId={(x) => x}
        orientation={orientation}
        dir={dir}
        handle={handle}
        indicator={indicator}
        keyboard={keyboard}
        renderItem={ROW}
        providerProps={{ a11y: { messages, onAnnounce: log.push } }}
      />
      <Log name={name} lines={log.lines} />
      <DemoStatus name={name}>order: {items.join(", ")}</DemoStatus>
    </div>
  )
}

/** \`count\` row labels, \`Item 1\` … \`Item count\`. */
function makeItems(count: number, prefix = "Item"): string[] {
  return Array.from({ length: count }, (_, i) => \`\${prefix} \${i + 1}\`)
}

/** A demo's one-line status (the app's state, the last op), found by the headless checks through \`data-demo-status\`. */
function DemoStatus({ name, children }: { readonly name: string; readonly children: ReactNode }) {
  return (
    <p data-demo-status={name} className="font-mono text-[11px] break-all text-muted-foreground tabular-nums">
      {children}
    </p>
  )
}

export function FrenchList() {
  return <ListDemo name="french" count={4} messages={FRENCH} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>r(()=>import(`./a11y-messages-DpBU00hA.js`),[]));function me(){let[e,t]=(0,m.useState)([]);return{lines:e,push:e=>t(t=>[...t.slice(-5),e])}}function he({name:e,lines:t}){return(0,h.jsx)(`ol`,{"data-demo-log":e,className:`min-h-7 rounded border bg-muted/30 px-2 py-1 font-mono text-[11px] text-muted-foreground`,children:t.length===0?(0,h.jsx)(`li`,{children:`Announcements appear here.`}):t.map((e,t)=>(0,h.jsx)(`li`,{children:e},`${t}-${e}`))})}var ge=e=>(0,h.jsx)(`span`,{className:`truncate`,children:e});function _e({name:e,count:t=6,messages:n,orientation:r,dir:i,handle:a,indicator:o,keyboard:s}){let[c,l]=(0,m.useState)(()=>ye(t)),d=me();return(0,h.jsxs)(`div`,{"data-demo":e,className:`flex max-w-md flex-col gap-2`,children:[(0,h.jsx)(u,{id:e,label:`${e} list`,items:c,onItemsChange:l,getId:e=>e,orientation:r,dir:i,handle:a,indicator:o,keyboard:s,renderItem:ge,providerProps:{a11y:{messages:n,onAnnounce:d.push}}}),(0,h.jsx)(he,{name:e,lines:d.lines}),(0,h.jsxs)(be,{name:e,children:[`order: `,c.join(`, `)]})]})}function ve({dir:e}){return(0,h.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,children:[`Instructions read on focus: “`,a.instructions({policy:`grab-arrow`,mode:`step`,dir:e}),`”`]})}function ye(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function be({name:e,children:t}){return(0,h.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function xe(){return(0,h.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,h.jsx)(_e,{name:`rtl`,count:4,orientation:`horizontal`,dir:`rtl`}),(0,h.jsx)(ve,{dir:`rtl`})]})}var W=`import { type ReactNode, useState } from "react"
import { type A11yPolicy, DEFAULT_DND_MESSAGES, type DndMessagesInput, SortableList } from "@kitora/dnd"

// Right to left: D48, D106. In a right-to-left list the arrows mirror and the instructions name the right keys.

/** The last announcements of one demo, newest last; the visible twin of the live region. */
function useLog(): { readonly lines: readonly string[]; readonly push: (text: string) => void } {
  const [lines, setLines] = useState<readonly string[]>([])
  return { lines, push: (text) => setLines((prev) => [...prev.slice(-5), text]) }
}

function Log({ name, lines }: { readonly name: string; readonly lines: readonly string[] }) {
  return (
    <ol data-demo-log={name} className="min-h-7 rounded border bg-muted/30 px-2 py-1 font-mono text-[11px] text-muted-foreground">
      {lines.length === 0 ? <li>Announcements appear here.</li> : lines.map((line, i) => <li key={\`\${i}-\${line}\`}>{line}</li>)}
    </ol>
  )
}

const ROW = (label: string) => <span className="truncate">{label}</span>

function ListDemo({
  name,
  count = 6,
  messages,
  orientation,
  dir,
  handle,
  indicator,
  keyboard,
}: {
  readonly name: string
  readonly count?: number
  readonly messages?: DndMessagesInput
  readonly orientation?: "vertical" | "horizontal"
  readonly dir?: "ltr" | "rtl"
  readonly handle?: boolean
  readonly indicator?: "gap" | "line"
  readonly keyboard?: A11yPolicy
}) {
  const [items, setItems] = useState<readonly string[]>(() => makeItems(count))
  const log = useLog()
  return (
    <div data-demo={name} className="flex max-w-md flex-col gap-2">
      <SortableList
        id={name}
        label={\`\${name} list\`}
        items={items}
        onItemsChange={setItems}
        getId={(x) => x}
        orientation={orientation}
        dir={dir}
        handle={handle}
        indicator={indicator}
        keyboard={keyboard}
        renderItem={ROW}
        providerProps={{ a11y: { messages, onAnnounce: log.push } }}
      />
      <Log name={name} lines={log.lines} />
      <DemoStatus name={name}>order: {items.join(", ")}</DemoStatus>
    </div>
  )
}

function Instructions({ dir }: { readonly dir: "ltr" | "rtl" }): ReactNode {
  return <p className="text-[12px] text-muted-foreground">Instructions read on focus: “{DEFAULT_DND_MESSAGES.instructions({ policy: "grab-arrow", mode: "step", dir })}”</p>
}

/** \`count\` row labels, \`Item 1\` … \`Item count\`. */
function makeItems(count: number, prefix = "Item"): string[] {
  return Array.from({ length: count }, (_, i) => \`\${prefix} \${i + 1}\`)
}

/** A demo's one-line status (the app's state, the last op), found by the headless checks through \`data-demo-status\`. */
function DemoStatus({ name, children }: { readonly name: string; readonly children: ReactNode }) {
  return (
    <p data-demo-status={name} className="font-mono text-[11px] break-all text-muted-foreground tabular-nums">
      {children}
    </p>
  )
}

export function RtlTabs() {
  return (
    <div className="flex flex-col gap-2">
      <ListDemo name="rtl" count={4} orientation="horizontal" dir="rtl" />
      <Instructions dir="rtl" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>r(()=>import(`./a11y-rtl-B-jqlGf9.js`),[]));function Se(){let[e,t]=(0,m.useState)([]);return{lines:e,push:e=>t(t=>[...t.slice(-5),e])}}function Ce({name:e,lines:t}){return(0,h.jsx)(`ol`,{"data-demo-log":e,className:`min-h-7 rounded border bg-muted/30 px-2 py-1 font-mono text-[11px] text-muted-foreground`,children:t.length===0?(0,h.jsx)(`li`,{children:`Announcements appear here.`}):t.map((e,t)=>(0,h.jsx)(`li`,{children:e},`${t}-${e}`))})}var we=e=>(0,h.jsx)(`span`,{className:`truncate`,children:e}),Te=[G(`Docs`,[G(`Spec`),G(`Notes`)]),G(`Src`,[G(`App`),G(`Lib`)]),G(`Readme`),G(`License`)];function Ee(){let[e,t]=(0,m.useState)(Te),n=Se();return(0,h.jsxs)(`div`,{"data-demo":`tree`,className:`flex max-w-sm flex-col gap-2`,children:[(0,h.jsx)(te,{id:`tree`,label:`Files tree`,items:e,onItemsChange:t,renderItem:e=>we(e.data),providerProps:{a11y:{onAnnounce:n.push}}}),(0,h.jsx)(Ce,{name:`tree`,lines:n.lines}),(0,h.jsxs)(De,{name:`tree`,children:[`tree: `,K(e)]})]})}function G(e,t=[]){return{id:e,data:e,children:t}}function K(e){return e.map(e=>e.children.length>0?`${e.id}[${K(e.children)}]`:e.id).join(`, `)}function De({name:e,children:t}){return(0,h.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function Oe(){return(0,h.jsx)(Ee,{})}var q=`import { type ReactNode, useState } from "react"
import { SortableTree, type TreeNode } from "@kitora/dnd"

// Tree depth by keyboard: D14, D42. Hold a row: Up and Down move it, Right nests it under the row above, Left moves it out.

/** The last announcements of one demo, newest last; the visible twin of the live region. */
function useLog(): { readonly lines: readonly string[]; readonly push: (text: string) => void } {
  const [lines, setLines] = useState<readonly string[]>([])
  return { lines, push: (text) => setLines((prev) => [...prev.slice(-5), text]) }
}

function Log({ name, lines }: { readonly name: string; readonly lines: readonly string[] }) {
  return (
    <ol data-demo-log={name} className="min-h-7 rounded border bg-muted/30 px-2 py-1 font-mono text-[11px] text-muted-foreground">
      {lines.length === 0 ? <li>Announcements appear here.</li> : lines.map((line, i) => <li key={\`\${i}-\${line}\`}>{line}</li>)}
    </ol>
  )
}

const ROW = (label: string) => <span className="truncate">{label}</span>

const FILES: readonly TreeNode<string>[] = [node("Docs", [node("Spec"), node("Notes")]), node("Src", [node("App"), node("Lib")]), node("Readme"), node("License")]

function TreeDemo() {
  const [tree, setTree] = useState<readonly TreeNode<string>[]>(FILES)
  const log = useLog()
  return (
    <div data-demo="tree" className="flex max-w-sm flex-col gap-2">
      <SortableTree id="tree" label="Files tree" items={tree} onItemsChange={setTree} renderItem={(n) => ROW(n.data)} providerProps={{ a11y: { onAnnounce: log.push } }} />
      <Log name="tree" lines={log.lines} />
      <DemoStatus name="tree">tree: {describeTree(tree)}</DemoStatus>
    </div>
  )
}

/** A demo tree node whose id is its label (for the tree pages). */
function node(label: string, children: readonly TreeNode<string>[] = []): TreeNode<string> {
  return { id: label, data: label, children }
}

/** A tree as one line, \`Docs[Spec, Notes], Readme\`, for the status lines the headless checks read. */
function describeTree(nodes: readonly TreeNode<string>[]): string {
  return nodes.map((n) => (n.children.length > 0 ? \`\${n.id}[\${describeTree(n.children)}]\` : n.id)).join(", ")
}

/** A demo's one-line status (the app's state, the last op), found by the headless checks through \`data-demo-status\`. */
function DemoStatus({ name, children }: { readonly name: string; readonly children: ReactNode }) {
  return (
    <p data-demo-status={name} className="font-mono text-[11px] break-all text-muted-foreground tabular-nums">
      {children}
    </p>
  )
}

export function Files() {
  return <TreeDemo />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>r(()=>import(`./a11y-tree-K-_hbvRL.js`),[]));function ke(){let[e,t]=(0,m.useState)([]);return{lines:e,push:e=>t(t=>[...t.slice(-5),e])}}function Ae({name:e,lines:t}){return(0,h.jsx)(`ol`,{"data-demo-log":e,className:`min-h-7 rounded border bg-muted/30 px-2 py-1 font-mono text-[11px] text-muted-foreground`,children:t.length===0?(0,h.jsx)(`li`,{children:`Announcements appear here.`}):t.map((e,t)=>(0,h.jsx)(`li`,{children:e},`${t}-${e}`))})}var je=[{id:`Note A`,at:{x:16,y:16}},{id:`Note B`,at:{x:160,y:64}}];function Me(){let[e,t]=(0,m.useState)(je),n=ke();return(0,h.jsxs)(`div`,{"data-demo":`canvas`,className:`flex flex-col gap-2`,children:[(0,h.jsx)(ee,{label:`Notes canvas`,width:360,height:160,grid:16,items:e,onItemsChange:t,getId:e=>e.id,getPosition:e=>e.at,setPosition:(e,t)=>({...e,at:t}),renderItem:e=>e.id,providerProps:{a11y:{onAnnounce:n.push}}}),(0,h.jsx)(Ae,{name:`canvas`,lines:n.lines}),(0,h.jsx)(Ne,{name:`canvas`,children:e.map(e=>`${e.id} @ ${e.at.x},${e.at.y}`).join(` · `)})]})}function Ne({name:e,children:t}){return(0,h.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function Pe(){return(0,h.jsx)(Me,{})}var J=`import { type ReactNode, useState } from "react"
import { FreeCanvas, type Point } from "@kitora/dnd"

// Canvas by keyboard: D14, D81. Hold a note: the arrows move it one grid step, Shift four.

/** The last announcements of one demo, newest last; the visible twin of the live region. */
function useLog(): { readonly lines: readonly string[]; readonly push: (text: string) => void } {
  const [lines, setLines] = useState<readonly string[]>([])
  return { lines, push: (text) => setLines((prev) => [...prev.slice(-5), text]) }
}

function Log({ name, lines }: { readonly name: string; readonly lines: readonly string[] }) {
  return (
    <ol data-demo-log={name} className="min-h-7 rounded border bg-muted/30 px-2 py-1 font-mono text-[11px] text-muted-foreground">
      {lines.length === 0 ? <li>Announcements appear here.</li> : lines.map((line, i) => <li key={\`\${i}-\${line}\`}>{line}</li>)}
    </ol>
  )
}

interface Note {
  readonly id: string
  readonly at: Point
}

const NOTES: readonly Note[] = [
  { id: "Note A", at: { x: 16, y: 16 } },
  { id: "Note B", at: { x: 160, y: 64 } },
]

function CanvasDemo() {
  const [notes, setNotes] = useState<readonly Note[]>(NOTES)
  const log = useLog()
  return (
    <div data-demo="canvas" className="flex flex-col gap-2">
      <FreeCanvas
        label="Notes canvas"
        width={360}
        height={160}
        grid={16}
        items={notes}
        onItemsChange={setNotes}
        getId={(n) => n.id}
        getPosition={(n) => n.at}
        setPosition={(n, at) => ({ ...n, at })}
        renderItem={(n) => n.id}
        providerProps={{ a11y: { onAnnounce: log.push } }}
      />
      <Log name="canvas" lines={log.lines} />
      <DemoStatus name="canvas">{notes.map((n) => \`\${n.id} @ \${n.at.x},\${n.at.y}\`).join(" · ")}</DemoStatus>
    </div>
  )
}

/** A demo's one-line status (the app's state, the last op), found by the headless checks through \`data-demo-status\`. */
function DemoStatus({ name, children }: { readonly name: string; readonly children: ReactNode }) {
  return (
    <p data-demo-status={name} className="font-mono text-[11px] break-all text-muted-foreground tabular-nums">
      {children}
    </p>
  )
}

export function Notes() {
  return <CanvasDemo />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>r(()=>import(`./a11y-canvas-Ca12eCKn.js`),[]));function Fe(){let[e,t]=(0,m.useState)([]);return{lines:e,push:e=>t(t=>[...t.slice(-5),e])}}function Ie({name:e,lines:t}){return(0,h.jsx)(`ol`,{"data-demo-log":e,className:`min-h-7 rounded border bg-muted/30 px-2 py-1 font-mono text-[11px] text-muted-foreground`,children:t.length===0?(0,h.jsx)(`li`,{children:`Announcements appear here.`}):t.map((e,t)=>(0,h.jsx)(`li`,{children:e},`${t}-${e}`))})}function Le({id:e,list:t,index:n}){let{ref:r}=l({id:e,container:t,index:n,data:e});return(0,h.jsx)(`li`,{ref:r,"data-item":e,tabIndex:0,className:`flex h-7 cursor-grab items-center rounded border bg-card px-2 text-[13px] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,children:e})}function Y({id:e,title:t,items:n,collapsed:r}){let{ref:i}=s({id:e,kind:`container`});return(0,h.jsxs)(`section`,{className:`flex w-44 flex-col gap-1`,children:[(0,h.jsxs)(`h3`,{className:`text-[12px] font-medium`,children:[t,r?` (collapsed)`:``]}),(0,h.jsx)(`ul`,{ref:i,"aria-label":t,hidden:r,"data-list":e,className:`flex min-h-16 flex-col gap-1 rounded-lg border bg-muted/30 p-1`,children:n.map((t,n)=>(0,h.jsx)(Le,{id:t,list:e,index:n},t))})]})}function Re(){let e=o({defaultColumns:{a:[`Apple`,`Pear`],b:[`Plum`,`Fig`]},getId:e=>e}),[t,n]=(0,m.useState)(!1),r=Fe();return(0,h.jsxs)(`div`,{role:`presentation`,"data-demo":`hidden`,onKeyDown:e=>{e.key.toLowerCase()===`h`&&n(e=>!e)},className:`flex flex-col gap-2`,children:[(0,h.jsx)(c,{collision:d,onMove:e.onMove,a11y:{onAnnounce:r.push},children:(0,h.jsxs)(`div`,{className:`flex gap-3`,children:[(0,h.jsx)(Y,{id:`a`,title:`List A`,items:e.columns.a??[],collapsed:!1}),(0,h.jsx)(Y,{id:`b`,title:`List B`,items:e.columns.b??[],collapsed:t})]})}),(0,h.jsx)(Ie,{name:`hidden`,lines:r.lines}),(0,h.jsxs)(ze,{name:`hidden`,children:[`a: `,(e.columns.a??[]).join(`, `)||`—`,` · b: `,(e.columns.b??[]).join(`, `)||`—`,` · b `,t?`collapsed`:`open`]})]})}function ze({name:e,children:t}){return(0,h.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function Be(){return(0,h.jsx)(Re,{})}var X=`import { type KeyboardEvent, type ReactNode, useState } from "react"
import { DndProvider, GAP_COLLISION, useBoardState, useDroppable, useSortable } from "@kitora/dnd"

// Drop on a hidden target: D152. Pick up Apple, move it into List B, press H to collapse List B, then Space: it lands on the nearest visible slot, in List A.

/** The last announcements of one demo, newest last; the visible twin of the live region. */
function useLog(): { readonly lines: readonly string[]; readonly push: (text: string) => void } {
  const [lines, setLines] = useState<readonly string[]>([])
  return { lines, push: (text) => setLines((prev) => [...prev.slice(-5), text]) }
}

function Log({ name, lines }: { readonly name: string; readonly lines: readonly string[] }) {
  return (
    <ol data-demo-log={name} className="min-h-7 rounded border bg-muted/30 px-2 py-1 font-mono text-[11px] text-muted-foreground">
      {lines.length === 0 ? <li>Announcements appear here.</li> : lines.map((line, i) => <li key={\`\${i}-\${line}\`}>{line}</li>)}
    </ol>
  )
}

/** One row of the hidden-target board. */
function HiddenRow({ id, list, index }: { readonly id: string; readonly list: string; readonly index: number }) {
  const { ref } = useSortable({ id, container: list, index, data: id })
  return (
    <li
      ref={ref}
      data-item={id}
      tabIndex={0}
      className="flex h-7 cursor-grab items-center rounded border bg-card px-2 text-[13px] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      {id}
    </li>
  )
}

function HiddenList({ id, title, items, collapsed }: { readonly id: string; readonly title: string; readonly items: readonly string[]; readonly collapsed: boolean }) {
  const { ref } = useDroppable({ id, kind: "container" })
  return (
    <section className="flex w-44 flex-col gap-1">
      <h3 className="text-[12px] font-medium">
        {title}
        {collapsed ? " (collapsed)" : ""}
      </h3>
      <ul ref={ref} aria-label={title} hidden={collapsed} data-list={id} className="flex min-h-16 flex-col gap-1 rounded-lg border bg-muted/30 p-1">
        {items.map((x, i) => (
          <HiddenRow key={x} id={x} list={id} index={i} />
        ))}
      </ul>
    </section>
  )
}

function HiddenDemo() {
  const board = useBoardState<string>({ defaultColumns: { a: ["Apple", "Pear"], b: ["Plum", "Fig"] }, getId: (x) => x })
  const [collapsed, setCollapsed] = useState(false)
  const log = useLog()
  // H toggles list B even mid-drag (the keyboard sensor ignores keys it does not use), so a held item can lose its target.
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key.toLowerCase() === "h") setCollapsed((c) => !c)
  }
  return (
    <div role="presentation" data-demo="hidden" onKeyDown={onKeyDown} className="flex flex-col gap-2">
      <DndProvider collision={GAP_COLLISION} onMove={board.onMove} a11y={{ onAnnounce: log.push }}>
        <div className="flex gap-3">
          <HiddenList id="a" title="List A" items={board.columns.a ?? []} collapsed={false} />
          <HiddenList id="b" title="List B" items={board.columns.b ?? []} collapsed={collapsed} />
        </div>
      </DndProvider>
      <Log name="hidden" lines={log.lines} />
      <DemoStatus name="hidden">
        a: {(board.columns.a ?? []).join(", ") || "—"} · b: {(board.columns.b ?? []).join(", ") || "—"} · b {collapsed ? "collapsed" : "open"}
      </DemoStatus>
    </div>
  )
}

/** A demo's one-line status (the app's state, the last op), found by the headless checks through \`data-demo-status\`. */
function DemoStatus({ name, children }: { readonly name: string; readonly children: ReactNode }) {
  return (
    <p data-demo-status={name} className="font-mono text-[11px] break-all text-muted-foreground tabular-nums">
      {children}
    </p>
  )
}

export function TwoLists() {
  return <HiddenDemo />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>r(()=>import(`./a11y-hidden-DB9Phb8i.js`),[]));function Ve(){let[e,t]=(0,m.useState)([]);return{lines:e,push:e=>t(t=>[...t.slice(-5),e])}}function He({name:e,lines:t}){return(0,h.jsx)(`ol`,{"data-demo-log":e,className:`min-h-7 rounded border bg-muted/30 px-2 py-1 font-mono text-[11px] text-muted-foreground`,children:t.length===0?(0,h.jsx)(`li`,{children:`Announcements appear here.`}):t.map((e,t)=>(0,h.jsx)(`li`,{children:e},`${t}-${e}`))})}var Ue=e=>(0,h.jsx)(`span`,{className:`truncate`,children:e});function We({name:e,count:t=6,messages:n,orientation:r,dir:i,handle:a,indicator:o,keyboard:s}){let[c,l]=(0,m.useState)(()=>Ge(t)),d=Ve();return(0,h.jsxs)(`div`,{"data-demo":e,className:`flex max-w-md flex-col gap-2`,children:[(0,h.jsx)(u,{id:e,label:`${e} list`,items:c,onItemsChange:l,getId:e=>e,orientation:r,dir:i,handle:a,indicator:o,keyboard:s,renderItem:Ue,providerProps:{a11y:{messages:n,onAnnounce:d.push}}}),(0,h.jsx)(He,{name:e,lines:d.lines}),(0,h.jsxs)(Ke,{name:e,children:[`order: `,c.join(`, `)]})]})}function Ge(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function Ke({name:e,children:t}){return(0,h.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function Z(){return(0,h.jsx)(We,{name:`handles`,count:4,handle:!0,indicator:`line`})}var Q=`import { type ReactNode, useState } from "react"
import { type A11yPolicy, type DndMessagesInput, SortableList } from "@kitora/dnd"

// Handles and forced colours: D113, D114. Drag by the grip. With forced colours on (Windows contrast themes), the preview, placeholder, target and line stay visible as system-colour outlines.

/** The last announcements of one demo, newest last; the visible twin of the live region. */
function useLog(): { readonly lines: readonly string[]; readonly push: (text: string) => void } {
  const [lines, setLines] = useState<readonly string[]>([])
  return { lines, push: (text) => setLines((prev) => [...prev.slice(-5), text]) }
}

function Log({ name, lines }: { readonly name: string; readonly lines: readonly string[] }) {
  return (
    <ol data-demo-log={name} className="min-h-7 rounded border bg-muted/30 px-2 py-1 font-mono text-[11px] text-muted-foreground">
      {lines.length === 0 ? <li>Announcements appear here.</li> : lines.map((line, i) => <li key={\`\${i}-\${line}\`}>{line}</li>)}
    </ol>
  )
}

const ROW = (label: string) => <span className="truncate">{label}</span>

function ListDemo({
  name,
  count = 6,
  messages,
  orientation,
  dir,
  handle,
  indicator,
  keyboard,
}: {
  readonly name: string
  readonly count?: number
  readonly messages?: DndMessagesInput
  readonly orientation?: "vertical" | "horizontal"
  readonly dir?: "ltr" | "rtl"
  readonly handle?: boolean
  readonly indicator?: "gap" | "line"
  readonly keyboard?: A11yPolicy
}) {
  const [items, setItems] = useState<readonly string[]>(() => makeItems(count))
  const log = useLog()
  return (
    <div data-demo={name} className="flex max-w-md flex-col gap-2">
      <SortableList
        id={name}
        label={\`\${name} list\`}
        items={items}
        onItemsChange={setItems}
        getId={(x) => x}
        orientation={orientation}
        dir={dir}
        handle={handle}
        indicator={indicator}
        keyboard={keyboard}
        renderItem={ROW}
        providerProps={{ a11y: { messages, onAnnounce: log.push } }}
      />
      <Log name={name} lines={log.lines} />
      <DemoStatus name={name}>order: {items.join(", ")}</DemoStatus>
    </div>
  )
}

/** \`count\` row labels, \`Item 1\` … \`Item count\`. */
function makeItems(count: number, prefix = "Item"): string[] {
  return Array.from({ length: count }, (_, i) => \`\${prefix} \${i + 1}\`)
}

/** A demo's one-line status (the app's state, the last op), found by the headless checks through \`data-demo-status\`. */
function DemoStatus({ name, children }: { readonly name: string; readonly children: ReactNode }) {
  return (
    <p data-demo-status={name} className="font-mono text-[11px] break-all text-muted-foreground tabular-nums">
      {children}
    </p>
  )
}

export function Layers() {
  return <ListDemo name="handles" count={4} handle indicator="line" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>r(()=>import(`./a11y-handles-BLVRxs0o.js`),[]));function qe(){let[e,t]=(0,m.useState)([]);return{lines:e,push:e=>t(t=>[...t.slice(-5),e])}}function Je({name:e,lines:t}){return(0,h.jsx)(`ol`,{"data-demo-log":e,className:`min-h-7 rounded border bg-muted/30 px-2 py-1 font-mono text-[11px] text-muted-foreground`,children:t.length===0?(0,h.jsx)(`li`,{children:`Announcements appear here.`}):t.map((e,t)=>(0,h.jsx)(`li`,{children:e},`${t}-${e}`))})}var Ye=e=>(0,h.jsx)(`span`,{className:`truncate`,children:e});function Xe({name:e,count:t=6,messages:n,orientation:r,dir:i,handle:a,indicator:o,keyboard:s}){let[c,l]=(0,m.useState)(()=>Ze(t)),d=qe();return(0,h.jsxs)(`div`,{"data-demo":e,className:`flex max-w-md flex-col gap-2`,children:[(0,h.jsx)(u,{id:e,label:`${e} list`,items:c,onItemsChange:l,getId:e=>e,orientation:r,dir:i,handle:a,indicator:o,keyboard:s,renderItem:Ye,providerProps:{a11y:{messages:n,onAnnounce:d.push}}}),(0,h.jsx)(Je,{name:e,lines:d.lines}),(0,h.jsxs)(Qe,{name:e,children:[`order: `,c.join(`, `)]})]})}function Ze(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function Qe({name:e,children:t}){return(0,h.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function $e(){return(0,h.jsx)(Xe,{name:`none`,count:4,keyboard:`none`})}var $=`import { type ReactNode, useState } from "react"
import { type A11yPolicy, type DndMessagesInput, SortableList } from "@kitora/dnd"

// Keyboard off for one surface: keyboard=&quot;none&quot;. Space on a row does nothing here (its keys belong to the page), the rows carry no drag instructions, and the mouse still drags.

/** The last announcements of one demo, newest last; the visible twin of the live region. */
function useLog(): { readonly lines: readonly string[]; readonly push: (text: string) => void } {
  const [lines, setLines] = useState<readonly string[]>([])
  return { lines, push: (text) => setLines((prev) => [...prev.slice(-5), text]) }
}

function Log({ name, lines }: { readonly name: string; readonly lines: readonly string[] }) {
  return (
    <ol data-demo-log={name} className="min-h-7 rounded border bg-muted/30 px-2 py-1 font-mono text-[11px] text-muted-foreground">
      {lines.length === 0 ? <li>Announcements appear here.</li> : lines.map((line, i) => <li key={\`\${i}-\${line}\`}>{line}</li>)}
    </ol>
  )
}

const ROW = (label: string) => <span className="truncate">{label}</span>

function ListDemo({
  name,
  count = 6,
  messages,
  orientation,
  dir,
  handle,
  indicator,
  keyboard,
}: {
  readonly name: string
  readonly count?: number
  readonly messages?: DndMessagesInput
  readonly orientation?: "vertical" | "horizontal"
  readonly dir?: "ltr" | "rtl"
  readonly handle?: boolean
  readonly indicator?: "gap" | "line"
  readonly keyboard?: A11yPolicy
}) {
  const [items, setItems] = useState<readonly string[]>(() => makeItems(count))
  const log = useLog()
  return (
    <div data-demo={name} className="flex max-w-md flex-col gap-2">
      <SortableList
        id={name}
        label={\`\${name} list\`}
        items={items}
        onItemsChange={setItems}
        getId={(x) => x}
        orientation={orientation}
        dir={dir}
        handle={handle}
        indicator={indicator}
        keyboard={keyboard}
        renderItem={ROW}
        providerProps={{ a11y: { messages, onAnnounce: log.push } }}
      />
      <Log name={name} lines={log.lines} />
      <DemoStatus name={name}>order: {items.join(", ")}</DemoStatus>
    </div>
  )
}

/** \`count\` row labels, \`Item 1\` … \`Item count\`. */
function makeItems(count: number, prefix = "Item"): string[] {
  return Array.from({ length: count }, (_, i) => \`\${prefix} \${i + 1}\`)
}

/** A demo's one-line status (the app's state, the last op), found by the headless checks through \`data-demo-status\`. */
function DemoStatus({ name, children }: { readonly name: string; readonly children: ReactNode }) {
  return (
    <p data-demo-status={name} className="font-mono text-[11px] break-all text-muted-foreground tabular-nums">
      {children}
    </p>
  )
}

export function Gallery() {
  return <ListDemo name="none" count={4} keyboard="none" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>r(()=>import(`./a11y-none-C2X6mme0.js`),[]));function et(){return(0,h.jsxs)(`div`,{children:[(0,h.jsx)(t,{title:`Keyboard and screen readers`,children:`Three keyboard models, chosen per surface: grab-arrow (the default), a Move menu, and Tab-to-target. Every pick-up, move, drop and cancel is announced through one polite live region, in words from a catalog the app can replace; instructions are read when an item gets focus; a list is one tab stop; focus comes back to the moved item.`}),(0,h.jsx)(p,{n:1,title:`Grab and arrow`,blurb:`D14, D105, D107, D108, D112. Focus an item, press Space, move it with the arrows, Space to drop or Escape to cancel. The log below repeats what a screen reader hears; focus stays on the item after the drop.`,code:y,children:(0,h.jsx)(ae,{})}),(0,h.jsx)(p,{n:2,title:`Tab to target`,blurb:`D110. Space (or Ctrl X) picks a card up, Tab and Shift+Tab walk every slot across the columns, Space (or Ctrl V) drops it.`,code:x,children:(0,h.jsx)(de,{})}),(0,h.jsx)(p,{n:3,title:`Move menu`,blurb:`D109, D111. Each card has a Move button listing where it can go. It is a plain button and menu, so it also works with VoiceOver and TalkBack on a phone.`,code:k,children:(0,h.jsx)(O,{})}),(0,h.jsx)(p,{n:4,title:`One tab stop for a thousand rows`,blurb:`D70, D108. Tab enters the list once; the arrows, Home and End move focus. Pick a row up and hold the arrow: the list scrolls with it.`,code:I,children:(0,h.jsx)(F,{})}),(0,h.jsx)(p,{n:5,title:`Custom and localized text`,blurb:`D106. The same list with a French catalog: role description, instructions and every announcement replaced.`,code:U,children:(0,h.jsx)(pe,{})}),(0,h.jsx)(p,{n:6,title:`Right to left`,blurb:`D48, D106. In a right-to-left list the arrows mirror and the instructions name the right keys.`,code:W,children:(0,h.jsx)(xe,{})}),(0,h.jsx)(p,{n:7,title:`Tree depth by keyboard`,blurb:`D14, D42. Hold a row: Up and Down move it, Right nests it under the row above, Left moves it out.`,code:q,children:(0,h.jsx)(Oe,{})}),(0,h.jsx)(p,{n:8,title:`Canvas by keyboard`,blurb:`D14, D81. Hold a note: the arrows move it one grid step, Shift four.`,code:J,children:(0,h.jsx)(Pe,{})}),(0,h.jsx)(p,{n:9,title:`Drop on a hidden target`,blurb:`D152. Pick up Apple, move it into List B, press H to collapse List B, then Space: it lands on the nearest visible slot, in List A.`,code:X,children:(0,h.jsx)(Be,{})}),(0,h.jsx)(p,{n:10,title:`Handles and forced colours`,blurb:`D113, D114. Drag by the grip. With forced colours on (Windows contrast themes), the preview, placeholder, target and line stay visible as system-colour outlines.`,code:Q,children:(0,h.jsx)(Z,{})}),(0,h.jsx)(p,{n:11,title:`Keyboard off for one surface`,blurb:`keyboard="none". Space on a row does nothing here (its keys belong to the page), the rows carry no drag instructions, and the mouse still drags.`,code:$,children:(0,h.jsx)($e,{})})]})}export{et as component};