import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Uc as r,zc as i}from"./index-BZuUy872.js";import{t as a}from"./kanban-Bhqbbhuo.js";import"./kit-gallery-BBavj2rC.js";import{t as o}from"./example-B67lLz1F.js";import{r as s}from"./devtools-C6ydKhjy.js";var c=e(r(),1),l=i();function u(e,t){return t.map(t=>`${t}: ${(e[t]??[]).join(`, `)||`—`}`).join(` | `)}var d=[{id:`todo`,title:`To do`},{id:`doing`,title:`Doing`},{id:`done`,title:`Done`}];function f(){let[e,t]=(0,c.useState)(()=>({todo:p(3,`Todo`),doing:p(2,`Doing`),done:[]})),[n,r]=(0,c.useState)(null);return(0,l.jsxs)(`div`,{"data-demo":`board`,className:`flex flex-col gap-2`,children:[(0,l.jsx)(a,{label:`Sprint board`,columns:d,items:e,getId:e=>e,duplicate:e=>`${e} copy`,onItemsChange:(e,n)=>{t(e),r(n)},renderCard:e=>(0,l.jsx)(`span`,{className:`truncate`,children:e})}),(0,l.jsxs)(m,{name:`board`,children:[u(e,[`todo`,`doing`,`done`]),n?` · last: ${s(n)}`:``]})]})}function p(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function m({name:e,children:t}){return(0,l.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function h(){return(0,l.jsx)(f,{})}var g=`import { type ReactNode, useState } from "react"
import { Kanban, type KanbanColumn, type Layout, type MoveOp } from "@kitora/dnd"
import { formatOp } from "@kitora/dnd/devtools"

// Across columns: D38, D60. Drag a card into another column: the target opens a gap and the source column closes up. Drop on the empty column to land at its end; hold Alt (or Ctrl) while dropping to copy.

/** A short readable summary of a board: column (count): cards. */
function describeBoard(board: Layout<string>, order: readonly string[]): string {
  return order.map((key) => \`\${key}: \${(board[key] ?? []).join(", ") || "—"}\`).join(" | ")
}

const BOARD_COLUMNS: readonly KanbanColumn[] = [
  { id: "todo", title: "To do" },
  { id: "doing", title: "Doing" },
  { id: "done", title: "Done" },
]

function Board() {
  const [board, setBoard] = useState<Layout<string>>(() => ({ todo: makeItems(3, "Todo"), doing: makeItems(2, "Doing"), done: [] }))
  const [last, setLast] = useState<MoveOp | null>(null)
  return (
    <div data-demo="board" className="flex flex-col gap-2">
      <Kanban
        label="Sprint board"
        columns={BOARD_COLUMNS}
        items={board}
        getId={(x) => x}
        duplicate={(x) => \`\${x} copy\`}
        onItemsChange={(next, op) => {
          setBoard(next)
          setLast(op)
        }}
        renderCard={(x) => <span className="truncate">{x}</span>}
      />
      <DemoStatus name="board">
        {describeBoard(board, ["todo", "doing", "done"])}
        {last ? \` · last: \${formatOp(last)}\` : ""}
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

export function SprintBoard() {
  return <Board />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>n(()=>import(`./kanban-board-CS1enejx.js`),[]));var _=[`Text`,`Email`,`Date`];function v(){let[e,t]=(0,c.useState)(`revert`),[n,r]=(0,c.useState)(()=>({form:[`Name`]})),[i,o]=(0,c.useState)(0);return(0,l.jsxs)(`div`,{"data-demo":`palette`,className:`flex flex-col gap-2`,children:[(0,l.jsxs)(`label`,{className:`flex h-7 items-center gap-2 text-[13px]`,children:[(0,l.jsx)(`input`,{type:`checkbox`,"data-demo-toggle":`spill`,checked:e===`remove`,onChange:e=>t(e.target.checked?`remove`:`revert`)}),`Remove a field dropped outside the form (spill = remove)`]}),(0,l.jsx)(a,{label:`Form builder`,palette:{id:`palette`,title:`Fields`,items:_},columns:[{id:`form`,title:`Form`}],items:n,getId:e=>e,duplicate:e=>(o(e=>e+1),`${e} #${i+1}`),spill:e,onItemsChange:e=>r(e),renderCard:(e,t)=>(0,l.jsx)(`span`,{className:t.template?`text-muted-foreground`:void 0,children:e})}),(0,l.jsxs)(y,{name:`palette`,children:[`form: `,(n.form??[]).join(`, `)||`—`]})]})}function y({name:e,children:t}){return(0,l.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function b(){return(0,l.jsx)(v,{})}var x=`import { type ReactNode, useState } from "react"
import { Kanban, type Layout, type SpillPolicy } from "@kitora/dnd"

// Palette copy and spill: D39, D40. Fields in the palette are templates: dragging one copies it into the form. A form field dropped outside the form goes home, or is removed with the toggle on.

/** Palette templates; a copy gets a numbered id. */
const FIELDS = ["Text", "Email", "Date"] as const

function Palette() {
  const [spill, setSpill] = useState<SpillPolicy>("revert")
  const [board, setBoard] = useState<Layout<string>>(() => ({ form: ["Name"] }))
  const [copies, setCopies] = useState(0)
  return (
    <div data-demo="palette" className="flex flex-col gap-2">
      <label className="flex h-7 items-center gap-2 text-[13px]">
        <input type="checkbox" data-demo-toggle="spill" checked={spill === "remove"} onChange={(e) => setSpill(e.target.checked ? "remove" : "revert")} />
        Remove a field dropped outside the form (spill = remove)
      </label>
      <Kanban
        label="Form builder"
        palette={{ id: "palette", title: "Fields", items: FIELDS }}
        columns={[{ id: "form", title: "Form" }]}
        items={board}
        getId={(x) => x}
        duplicate={(x) => {
          setCopies((n) => n + 1)
          return \`\${x} #\${copies + 1}\`
        }}
        spill={spill}
        onItemsChange={(next) => setBoard(next)}
        renderCard={(x, state) => <span className={state.template ? "text-muted-foreground" : undefined}>{x}</span>}
      />
      <DemoStatus name="palette">form: {(board.form ?? []).join(", ") || "—"}</DemoStatus>
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

export function FormBuilder() {
  return <Palette />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>n(()=>import(`./kanban-palette-CcgUjE2T.js`),[]));function S(){let[e,t]=(0,c.useState)(()=>({inbox:C(4,`Note`)})),[n,r]=(0,c.useState)(``);return(0,l.jsxs)(`div`,{"data-demo":`combine`,className:`flex flex-col gap-2`,children:[(0,l.jsx)(a,{label:`Notes`,columns:[{id:`inbox`,title:`Inbox`}],items:e,getId:e=>e,onItemsChange:e=>t(e),onCombine:(e,n)=>{t(t=>({...t,inbox:(t.inbox??[]).filter(t=>t!==e).map(t=>t===n?`${n} + ${e}`:t)})),r(`${e} into ${n}`)},renderCard:e=>e}),(0,l.jsxs)(w,{name:`combine`,children:[`inbox: `,(e.inbox??[]).join(`, `),n?` · combined ${n}`:``]})]})}function C(e,t=`Item`){return Array.from({length:e},(e,n)=>`${t} ${n+1}`)}function w({name:e,children:t}){return(0,l.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function T(){return(0,l.jsx)(S,{})}var E=`import { type ReactNode, useState } from "react"
import { Kanban, type Layout } from "@kitora/dnd"

// Combine: D44. Drop a note onto the middle of another to merge them; near the edges it still reorders.

function Combine() {
  const [board, setBoard] = useState<Layout<string>>(() => ({ inbox: makeItems(4, "Note") }))
  const [merged, setMerged] = useState("")
  const merge = (source: string, target: string) => {
    setBoard((b) => ({ ...b, inbox: (b.inbox ?? []).filter((x) => x !== source).map((x) => (x === target ? \`\${target} + \${source}\` : x)) }))
    setMerged(\`\${source} into \${target}\`)
  }
  return (
    <div data-demo="combine" className="flex flex-col gap-2">
      <Kanban label="Notes" columns={[{ id: "inbox", title: "Inbox" }]} items={board} getId={(x) => x} onItemsChange={(next) => setBoard(next)} onCombine={merge} renderCard={(x) => x} />
      <DemoStatus name="combine">
        inbox: {(board.inbox ?? []).join(", ")}
        {merged ? \` · combined \${merged}\` : ""}
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

export function MergeNotes() {
  return <Combine />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>n(()=>import(`./kanban-combine-BRZDrhDb.js`),[]));var D=[{id:`triage`,title:`Triage`},{id:`bugs`,title:`Bugs`,accepts:[`bug`]},{id:`features`,title:`Features`,accepts:[`feature`]},{id:`frozen`,title:`Frozen`,disabled:!0}];function O(){let[e,t]=(0,c.useState)(()=>({triage:[{id:`Bug 1`,kind:`bug`},{id:`Feature 1`,kind:`feature`},{id:`Bug 2`,kind:`bug`}],bugs:[],features:[],frozen:[]}));return(0,l.jsxs)(`div`,{"data-demo":`types`,className:`flex flex-col gap-2`,children:[(0,l.jsx)(a,{label:`Triage`,columns:D,items:e,getId:e=>e.id,getType:e=>e.kind,onItemsChange:e=>t(e),renderCard:e=>(0,l.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,l.jsx)(`span`,{className:e.kind===`bug`?`size-1.5 rounded-full bg-rose-500`:`size-1.5 rounded-full bg-sky-500`,"aria-hidden":`true`}),e.id]})}),(0,l.jsx)(k,{name:`types`,children:D.map(t=>`${t.id}: ${(e[t.id]??[]).map(e=>e.id).join(`, `)||`—`}`).join(` | `)})]})}function k({name:e,children:t}){return(0,l.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function A(){return(0,l.jsx)(O,{})}var j=`import { type ReactNode, useState } from "react"
import { Kanban, type KanbanColumn, type Layout } from "@kitora/dnd"

// Typed cards and a locked column: D50, D56, D29. Bugs only land in Bugs, features only in Features, Triage takes both, and Frozen takes nothing.

/** A typed card for D50. */
interface Ticket {
  readonly id: string
  readonly kind: "bug" | "feature"
}

const TYPED_COLUMNS: readonly KanbanColumn[] = [
  { id: "triage", title: "Triage" },
  { id: "bugs", title: "Bugs", accepts: ["bug"] },
  { id: "features", title: "Features", accepts: ["feature"] },
  { id: "frozen", title: "Frozen", disabled: true },
]

function Types() {
  const [board, setBoard] = useState<Layout<Ticket>>(() => ({
    triage: [
      { id: "Bug 1", kind: "bug" },
      { id: "Feature 1", kind: "feature" },
      { id: "Bug 2", kind: "bug" },
    ],
    bugs: [],
    features: [],
    frozen: [],
  }))
  return (
    <div data-demo="types" className="flex flex-col gap-2">
      <Kanban
        label="Triage"
        columns={TYPED_COLUMNS}
        items={board}
        getId={(t) => t.id}
        getType={(t) => t.kind}
        onItemsChange={(next) => setBoard(next)}
        renderCard={(t) => (
          <span className="flex items-center gap-1.5">
            <span className={t.kind === "bug" ? "size-1.5 rounded-full bg-rose-500" : "size-1.5 rounded-full bg-sky-500"} aria-hidden="true" />
            {t.id}
          </span>
        )}
      />
      <DemoStatus name="types">{TYPED_COLUMNS.map((c) => \`\${c.id}: \${(board[c.id] ?? []).map((t) => t.id).join(", ") || "—"}\`).join(" | ")}</DemoStatus>
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

export function Triage() {
  return <Types />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>n(()=>import(`./kanban-types-Djkxoto-.js`),[]));function M(){return(0,l.jsxs)(`div`,{children:[(0,l.jsx)(t,{title:`Kanban boards`,children:`The Kanban preset: columns are drop targets and cards sort within and across them. Every drop arrives as the new board and its MoveOp.`}),(0,l.jsx)(o,{n:1,title:`Across columns`,blurb:`D38, D60. Drag a card into another column: the target opens a gap and the source column closes up. Drop on the empty column to land at its end; hold Alt (or Ctrl) while dropping to copy.`,code:g,children:(0,l.jsx)(h,{})}),(0,l.jsx)(o,{n:2,title:`Palette copy and spill`,blurb:`D39, D40. Fields in the palette are templates: dragging one copies it into the form. A form field dropped outside the form goes home, or is removed with the toggle on.`,code:x,children:(0,l.jsx)(b,{})}),(0,l.jsx)(o,{n:3,title:`Combine`,blurb:`D44. Drop a note onto the middle of another to merge them; near the edges it still reorders.`,code:E,children:(0,l.jsx)(T,{})}),(0,l.jsx)(o,{n:4,title:`Typed cards and a locked column`,blurb:`D50, D56, D29. Bugs only land in Bugs, features only in Features, Triage takes both, and Frozen takes nothing.`,code:j,children:(0,l.jsx)(A,{})})]})}export{M as component};