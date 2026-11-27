import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Uc as r,zc as i}from"./index-BZuUy872.js";import{t as a}from"./sortable-tree-B-WN5E3c.js";import"./kit-gallery-BBavj2rC.js";import{t as o}from"./example-B67lLz1F.js";import{r as s}from"./devtools-C6ydKhjy.js";var c=e(r(),1),l=i(),u=[p(`Docs`,[p(`Spec`),p(`Notes`),p(`Drafts`,[p(`Draft 1`),p(`Draft 2`)])]),p(`Src`,[p(`App`),p(`Lib`)]),p(`Readme`),p(`License`)];function d({label:e,folder:t}){return(0,l.jsxs)(`span`,{className:`flex min-w-0 items-center gap-1.5`,children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,className:t?`size-2.5 shrink-0 rounded-[3px] bg-amber-500/80`:`size-1.5 shrink-0 rounded-full bg-muted-foreground/60`}),(0,l.jsx)(`span`,{className:`truncate`,children:e})]})}function f({name:e,initial:t,expanded:n,spring:r,selectable:i}){let[o,u]=(0,c.useState)(t),[f,p]=(0,c.useState)(null),[g,_]=(0,c.useState)(`—`),[v,y]=(0,c.useState)(null);return(0,l.jsxs)(`div`,{"data-demo":e,className:`flex max-w-sm flex-col gap-2`,children:[(0,l.jsx)(a,{id:e,label:`${e} tree`,items:o,defaultExpanded:n,springLoad:r,selectable:i,onExpandedChange:y,onItemsChange:(e,t)=>{u(e),p(t)},providerProps:{onDragEnd:e=>_(e.reason)},renderItem:(e,t)=>(0,l.jsx)(d,{label:e.data,folder:t.childCount>0})}),(0,l.jsxs)(h,{name:e,children:[`tree: `,m(o),` · last end: `,g,` · last op: `,f?s(f):`—`,v?` · open: ${v.join(`, `)||`—`}`:``]})]})}function p(e,t=[]){return{id:e,data:e,children:t}}function m(e){return e.map(e=>e.children.length>0?`${e.id}[${m(e.children)}]`:e.id).join(`, `)}function h({name:e,children:t}){return(0,l.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function g(){return(0,l.jsx)(f,{name:`files`,initial:u})}var _=`import { type ReactNode, useState } from "react"
import { type DragEndEvent, type MoveOp, SortableTree, type TreeNode } from "@kitora/dnd"
import { formatOp } from "@kitora/dnd/devtools"

// Reorder and reparent: D41, D42, D55. Drag a row up or down to reorder at its depth; drag it right by one indent to nest it under the row above, left to move it out. The line shows the depth it will land at. Focus a row and use the arrows to move and open or close, Space to pick it up.

const FILES: readonly TreeNode<string>[] = [
  node("Docs", [node("Spec"), node("Notes"), node("Drafts", [node("Draft 1"), node("Draft 2")])]),
  node("Src", [node("App"), node("Lib")]),
  node("Readme"),
  node("License"),
]

/** A folder or file glyph and the label. */
function Row({ label, folder }: { readonly label: string; readonly folder: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-1.5">
      <span aria-hidden="true" className={folder ? "size-2.5 shrink-0 rounded-[3px] bg-amber-500/80" : "size-1.5 shrink-0 rounded-full bg-muted-foreground/60"} />
      <span className="truncate">{label}</span>
    </span>
  )
}

function TreeDemo({
  name,
  initial,
  expanded,
  spring,
  selectable,
}: {
  readonly name: string
  readonly initial: readonly TreeNode<string>[]
  readonly expanded?: readonly string[]
  readonly spring?: number
  readonly selectable?: boolean
}) {
  const [tree, setTree] = useState<readonly TreeNode<string>[]>(initial)
  const [last, setLast] = useState<MoveOp | null>(null)
  const [ended, setEnded] = useState<string>("—")
  const [open, setOpen] = useState<readonly string[] | null>(null)
  return (
    <div data-demo={name} className="flex max-w-sm flex-col gap-2">
      <SortableTree
        id={name}
        label={\`\${name} tree\`}
        items={tree}
        defaultExpanded={expanded}
        springLoad={spring}
        selectable={selectable}
        onExpandedChange={setOpen}
        onItemsChange={(next, op) => {
          setTree(next)
          setLast(op)
        }}
        providerProps={{ onDragEnd: (event: DragEndEvent<unknown>) => setEnded(event.reason) }}
        renderItem={(n, s) => <Row label={n.data} folder={s.childCount > 0} />}
      />
      <DemoStatus name={name}>
        tree: {describeTree(tree)} · last end: {ended} · last op: {last ? formatOp(last) : "—"}
        {open ? \` · open: \${open.join(", ") || "—"}\` : ""}
      </DemoStatus>
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

export function FileTree() {
  return <TreeDemo name="files" initial={FILES} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>n(()=>import(`./tree-tree-C-tZjHY2.js`),[]));var v=[x(`Inbox`),x(`2024`,[x(`Jan`),x(`Feb`)]),x(`2025`,[x(`Mar`),x(`Apr`)]),x(`Loose`)];function y({label:e,folder:t}){return(0,l.jsxs)(`span`,{className:`flex min-w-0 items-center gap-1.5`,children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,className:t?`size-2.5 shrink-0 rounded-[3px] bg-amber-500/80`:`size-1.5 shrink-0 rounded-full bg-muted-foreground/60`}),(0,l.jsx)(`span`,{className:`truncate`,children:e})]})}function b({name:e,initial:t,expanded:n,spring:r,selectable:i}){let[o,u]=(0,c.useState)(t),[d,f]=(0,c.useState)(null),[p,m]=(0,c.useState)(`—`),[h,g]=(0,c.useState)(null);return(0,l.jsxs)(`div`,{"data-demo":e,className:`flex max-w-sm flex-col gap-2`,children:[(0,l.jsx)(a,{id:e,label:`${e} tree`,items:o,defaultExpanded:n,springLoad:r,selectable:i,onExpandedChange:g,onItemsChange:(e,t)=>{u(e),f(t)},providerProps:{onDragEnd:e=>m(e.reason)},renderItem:(e,t)=>(0,l.jsx)(y,{label:e.data,folder:t.childCount>0})}),(0,l.jsxs)(C,{name:e,children:[`tree: `,S(o),` · last end: `,p,` · last op: `,d?s(d):`—`,h?` · open: ${h.join(`, `)||`—`}`:``]})]})}function x(e,t=[]){return{id:e,data:e,children:t}}function S(e){return e.map(e=>e.children.length>0?`${e.id}[${S(e.children)}]`:e.id).join(`, `)}function C({name:e,children:t}){return(0,l.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function w(){return(0,l.jsx)(b,{name:`archive`,initial:v,expanded:[],spring:500})}var T=`import { type ReactNode, useState } from "react"
import { type DragEndEvent, type MoveOp, SortableTree, type TreeNode } from "@kitora/dnd"
import { formatOp } from "@kitora/dnd/devtools"

// Spring-loaded expand: D43. Folders start closed. Hold a dragged row over a folder for half a second and it opens, so the drop can land inside.

const ARCHIVE: readonly TreeNode<string>[] = [node("Inbox"), node("2024", [node("Jan"), node("Feb")]), node("2025", [node("Mar"), node("Apr")]), node("Loose")]

/** A folder or file glyph and the label. */
function Row({ label, folder }: { readonly label: string; readonly folder: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-1.5">
      <span aria-hidden="true" className={folder ? "size-2.5 shrink-0 rounded-[3px] bg-amber-500/80" : "size-1.5 shrink-0 rounded-full bg-muted-foreground/60"} />
      <span className="truncate">{label}</span>
    </span>
  )
}

function TreeDemo({
  name,
  initial,
  expanded,
  spring,
  selectable,
}: {
  readonly name: string
  readonly initial: readonly TreeNode<string>[]
  readonly expanded?: readonly string[]
  readonly spring?: number
  readonly selectable?: boolean
}) {
  const [tree, setTree] = useState<readonly TreeNode<string>[]>(initial)
  const [last, setLast] = useState<MoveOp | null>(null)
  const [ended, setEnded] = useState<string>("—")
  const [open, setOpen] = useState<readonly string[] | null>(null)
  return (
    <div data-demo={name} className="flex max-w-sm flex-col gap-2">
      <SortableTree
        id={name}
        label={\`\${name} tree\`}
        items={tree}
        defaultExpanded={expanded}
        springLoad={spring}
        selectable={selectable}
        onExpandedChange={setOpen}
        onItemsChange={(next, op) => {
          setTree(next)
          setLast(op)
        }}
        providerProps={{ onDragEnd: (event: DragEndEvent<unknown>) => setEnded(event.reason) }}
        renderItem={(n, s) => <Row label={n.data} folder={s.childCount > 0} />}
      />
      <DemoStatus name={name}>
        tree: {describeTree(tree)} · last end: {ended} · last op: {last ? formatOp(last) : "—"}
        {open ? \` · open: \${open.join(", ") || "—"}\` : ""}
      </DemoStatus>
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

export function ArchiveTree() {
  return <TreeDemo name="archive" initial={ARCHIVE} expanded={[]} spring={500} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>n(()=>import(`./tree-spring-DHyaRZRJ.js`),[]));var E=[k(`Docs`,[k(`Spec`),k(`Notes`),k(`Drafts`,[k(`Draft 1`),k(`Draft 2`)])]),k(`Src`,[k(`App`),k(`Lib`)]),k(`Readme`),k(`License`)];function D({label:e,folder:t}){return(0,l.jsxs)(`span`,{className:`flex min-w-0 items-center gap-1.5`,children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,className:t?`size-2.5 shrink-0 rounded-[3px] bg-amber-500/80`:`size-1.5 shrink-0 rounded-full bg-muted-foreground/60`}),(0,l.jsx)(`span`,{className:`truncate`,children:e})]})}function O({name:e,initial:t,expanded:n,spring:r,selectable:i}){let[o,u]=(0,c.useState)(t),[d,f]=(0,c.useState)(null),[p,m]=(0,c.useState)(`—`),[h,g]=(0,c.useState)(null);return(0,l.jsxs)(`div`,{"data-demo":e,className:`flex max-w-sm flex-col gap-2`,children:[(0,l.jsx)(a,{id:e,label:`${e} tree`,items:o,defaultExpanded:n,springLoad:r,selectable:i,onExpandedChange:g,onItemsChange:(e,t)=>{u(e),f(t)},providerProps:{onDragEnd:e=>m(e.reason)},renderItem:(e,t)=>(0,l.jsx)(D,{label:e.data,folder:t.childCount>0})}),(0,l.jsxs)(j,{name:e,children:[`tree: `,A(o),` · last end: `,p,` · last op: `,d?s(d):`—`,h?` · open: ${h.join(`, `)||`—`}`:``]})]})}function k(e,t=[]){return{id:e,data:e,children:t}}function A(e){return e.map(e=>e.children.length>0?`${e.id}[${A(e.children)}]`:e.id).join(`, `)}function j({name:e,children:t}){return(0,l.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function M(){return(0,l.jsx)(O,{name:`refuse`,initial:E})}var N=`import { type ReactNode, useState } from "react"
import { type DragEndEvent, type MoveOp, SortableTree, type TreeNode } from "@kitora/dnd"
import { formatOp } from "@kitora/dnd/devtools"

// No drop into its own subtree: D41. Drag Docs over Drafts or Draft 1: the rows inside Docs are not targets, nothing is marked, and the drop sends Docs home.

const FILES: readonly TreeNode<string>[] = [
  node("Docs", [node("Spec"), node("Notes"), node("Drafts", [node("Draft 1"), node("Draft 2")])]),
  node("Src", [node("App"), node("Lib")]),
  node("Readme"),
  node("License"),
]

/** A folder or file glyph and the label. */
function Row({ label, folder }: { readonly label: string; readonly folder: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-1.5">
      <span aria-hidden="true" className={folder ? "size-2.5 shrink-0 rounded-[3px] bg-amber-500/80" : "size-1.5 shrink-0 rounded-full bg-muted-foreground/60"} />
      <span className="truncate">{label}</span>
    </span>
  )
}

function TreeDemo({
  name,
  initial,
  expanded,
  spring,
  selectable,
}: {
  readonly name: string
  readonly initial: readonly TreeNode<string>[]
  readonly expanded?: readonly string[]
  readonly spring?: number
  readonly selectable?: boolean
}) {
  const [tree, setTree] = useState<readonly TreeNode<string>[]>(initial)
  const [last, setLast] = useState<MoveOp | null>(null)
  const [ended, setEnded] = useState<string>("—")
  const [open, setOpen] = useState<readonly string[] | null>(null)
  return (
    <div data-demo={name} className="flex max-w-sm flex-col gap-2">
      <SortableTree
        id={name}
        label={\`\${name} tree\`}
        items={tree}
        defaultExpanded={expanded}
        springLoad={spring}
        selectable={selectable}
        onExpandedChange={setOpen}
        onItemsChange={(next, op) => {
          setTree(next)
          setLast(op)
        }}
        providerProps={{ onDragEnd: (event: DragEndEvent<unknown>) => setEnded(event.reason) }}
        renderItem={(n, s) => <Row label={n.data} folder={s.childCount > 0} />}
      />
      <DemoStatus name={name}>
        tree: {describeTree(tree)} · last end: {ended} · last op: {last ? formatOp(last) : "—"}
        {open ? \` · open: \${open.join(", ") || "—"}\` : ""}
      </DemoStatus>
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

export function OwnTree() {
  return <TreeDemo name="refuse" initial={FILES} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>n(()=>import(`./tree-refuse-BGNc8iea.js`),[]));var P=[L(`Intro`),L(`Part A`,[L(`A.1`),L(`A.2`)]),L(`Part B`),L(`Part C`),L(`Outro`)];function F({label:e,folder:t}){return(0,l.jsxs)(`span`,{className:`flex min-w-0 items-center gap-1.5`,children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,className:t?`size-2.5 shrink-0 rounded-[3px] bg-amber-500/80`:`size-1.5 shrink-0 rounded-full bg-muted-foreground/60`}),(0,l.jsx)(`span`,{className:`truncate`,children:e})]})}function I({name:e,initial:t,expanded:n,spring:r,selectable:i}){let[o,u]=(0,c.useState)(t),[d,f]=(0,c.useState)(null),[p,m]=(0,c.useState)(`—`),[h,g]=(0,c.useState)(null);return(0,l.jsxs)(`div`,{"data-demo":e,className:`flex max-w-sm flex-col gap-2`,children:[(0,l.jsx)(a,{id:e,label:`${e} tree`,items:o,defaultExpanded:n,springLoad:r,selectable:i,onExpandedChange:g,onItemsChange:(e,t)=>{u(e),f(t)},providerProps:{onDragEnd:e=>m(e.reason)},renderItem:(e,t)=>(0,l.jsx)(F,{label:e.data,folder:t.childCount>0})}),(0,l.jsxs)(z,{name:e,children:[`tree: `,R(o),` · last end: `,p,` · last op: `,d?s(d):`—`,h?` · open: ${h.join(`, `)||`—`}`:``]})]})}function L(e,t=[]){return{id:e,data:e,children:t}}function R(e){return e.map(e=>e.children.length>0?`${e.id}[${R(e.children)}]`:e.id).join(`, `)}function z({name:e,children:t}){return(0,l.jsx)(`p`,{"data-demo-status":e,className:`font-mono text-[11px] break-all text-muted-foreground tabular-nums`,children:t})}function B(){return(0,l.jsx)(I,{name:`outline`,initial:P,selectable:!0})}var V=`import { type ReactNode, useState } from "react"
import { type DragEndEvent, type MoveOp, SortableTree, type TreeNode } from "@kitora/dnd"
import { formatOp } from "@kitora/dnd/devtools"

// Multi-select: D96. Click a row, Ctrl or Cmd-click more, or Shift-click a range, then drag one of them: the selection moves together, shown as a stack with a count.

const OUTLINE: readonly TreeNode<string>[] = [node("Intro"), node("Part A", [node("A.1"), node("A.2")]), node("Part B"), node("Part C"), node("Outro")]

/** A folder or file glyph and the label. */
function Row({ label, folder }: { readonly label: string; readonly folder: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-1.5">
      <span aria-hidden="true" className={folder ? "size-2.5 shrink-0 rounded-[3px] bg-amber-500/80" : "size-1.5 shrink-0 rounded-full bg-muted-foreground/60"} />
      <span className="truncate">{label}</span>
    </span>
  )
}

function TreeDemo({
  name,
  initial,
  expanded,
  spring,
  selectable,
}: {
  readonly name: string
  readonly initial: readonly TreeNode<string>[]
  readonly expanded?: readonly string[]
  readonly spring?: number
  readonly selectable?: boolean
}) {
  const [tree, setTree] = useState<readonly TreeNode<string>[]>(initial)
  const [last, setLast] = useState<MoveOp | null>(null)
  const [ended, setEnded] = useState<string>("—")
  const [open, setOpen] = useState<readonly string[] | null>(null)
  return (
    <div data-demo={name} className="flex max-w-sm flex-col gap-2">
      <SortableTree
        id={name}
        label={\`\${name} tree\`}
        items={tree}
        defaultExpanded={expanded}
        springLoad={spring}
        selectable={selectable}
        onExpandedChange={setOpen}
        onItemsChange={(next, op) => {
          setTree(next)
          setLast(op)
        }}
        providerProps={{ onDragEnd: (event: DragEndEvent<unknown>) => setEnded(event.reason) }}
        renderItem={(n, s) => <Row label={n.data} folder={s.childCount > 0} />}
      />
      <DemoStatus name={name}>
        tree: {describeTree(tree)} · last end: {ended} · last op: {last ? formatOp(last) : "—"}
        {open ? \` · open: \${open.join(", ") || "—"}\` : ""}
      </DemoStatus>
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

export function Outline() {
  return <TreeDemo name="outline" initial={OUTLINE} selectable />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>n(()=>import(`./tree-multi-CbQBvyMA.js`),[]));function H(){return(0,l.jsxs)(`div`,{children:[(0,l.jsx)(t,{title:`Trees`,children:`SortableTree draws a tree as one list of indented rows. The row under the pointer picks the gap; the horizontal drag offset picks the depth. Every drop arrives as the new tree and a MoveOp whose target and position say where the node went.`}),(0,l.jsx)(o,{n:1,title:`Reorder and reparent`,blurb:`D41, D42, D55. Drag a row up or down to reorder at its depth; drag it right by one indent to nest it under the row above, left to move it out. The line shows the depth it will land at. Focus a row and use the arrows to move and open or close, Space to pick it up.`,code:_,children:(0,l.jsx)(g,{})}),(0,l.jsx)(o,{n:2,title:`Spring-loaded expand`,blurb:`D43. Folders start closed. Hold a dragged row over a folder for half a second and it opens, so the drop can land inside.`,code:T,children:(0,l.jsx)(w,{})}),(0,l.jsx)(o,{n:3,title:`No drop into its own subtree`,blurb:`D41. Drag Docs over Drafts or Draft 1: the rows inside Docs are not targets, nothing is marked, and the drop sends Docs home.`,code:N,children:(0,l.jsx)(M,{})}),(0,l.jsx)(o,{n:4,title:`Multi-select`,blurb:`D96. Click a row, Ctrl or Cmd-click more, or Shift-click a range, then drag one of them: the selection moves together, shown as a stack with a count.`,code:V,children:(0,l.jsx)(B,{})})]})}export{H as component};