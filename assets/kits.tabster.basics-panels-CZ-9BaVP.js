import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Uc as r,ri as i,zc as a}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as o}from"./example-B67lLz1F.js";import{t as s}from"./tabster-DdIcOxyJ.js";import{t as c}from"./local-storage-adapter-D4UusGhu.js";import{t as l}from"./define-panels-ftPk9pfn.js";import{t as u}from"./inline-rename-CTRhps7L.js";var d=e(r(),1),f=a();function p({params:e}){return(0,f.jsx)(`div`,{className:`p-3 text-[13px]`,children:e?.text??`Empty note`})}var m=l({note:p}),h=m.specs([{id:`file-1`,component:`note`,title:`file-1.ts`,params:{text:`Close a tab with its ×.`}}]);function g(){let e=(0,d.useRef)(null),t=(0,d.useRef)(2);return(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`div`,{className:`flex gap-2`,children:[(0,f.jsx)(i,{size:`sm`,onClick:()=>{let n=t.current++;e.current?.addPanel(m.spec({id:`file-${n}`,component:`note`,title:`file-${n}.ts`,params:{text:`New file ${n}`}}))},children:`Add panel`}),(0,f.jsx)(i,{size:`sm`,variant:`outline`,onClick:()=>e.current?.closeActive(),children:`Close active`})]}),(0,f.jsx)(`div`,{className:`mt-2 h-56 overflow-hidden rounded-lg border border-border bg-background`,children:(0,f.jsx)(s,{panels:m.panels,initialPanels:h,onReady:({api:t})=>e.current=t})})]})}var _=`import { useRef } from "react"
import { Button } from "@kitora/ui/button"
import { Tabster, defineTabsterPanels, type TabsterApi, type TabsterPanelRenderProps } from "@kitora/tabster"

type NoteParams = { text: string }

function Note({ params }: TabsterPanelRenderProps<Partial<NoteParams>>) {
  return <div className="p-3 text-[13px]">{params?.text ?? "Empty note"}</div>
}

const PANELS = defineTabsterPanels({ note: Note })
const INITIAL = PANELS.specs<NoteParams>([{ id: "file-1", component: "note", title: "file-1.ts", params: { text: "Close a tab with its ×." } }])

/** \`onReady\` hands over the api: addPanel opens a tab, closeActive closes the focused one. */
export function AddAndClosePanels() {
  const api = useRef<TabsterApi | null>(null)
  const next = useRef(2)
  const add = () => {
    const n = next.current++
    api.current?.addPanel(PANELS.spec<NoteParams>({ id: \`file-\${n}\`, component: "note", title: \`file-\${n}.ts\`, params: { text: \`New file \${n}\` } }))
  }
  return (
    <div>
      <div className="flex gap-2">
        <Button size="sm" onClick={add}>Add panel</Button>
        <Button size="sm" variant="outline" onClick={() => api.current?.closeActive()}>Close active</Button>
      </div>
      <div className="mt-2 h-56 overflow-hidden rounded-lg border border-border bg-background">
        <Tabster panels={PANELS.panels} initialPanels={INITIAL} onReady={({ api: ready }) => (api.current = ready)} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>n(()=>import(`./add-close-DygSRMBG.js`),[]));function v({params:e}){return(0,f.jsx)(`div`,{className:`p-3 text-[13px]`,children:e?.text??`Empty note`})}var y=l({note:v}),b=y.specs([{id:`a`,component:`note`,title:`a.ts`,params:{text:`Drag this tab beside b.ts, then reload the page.`}},{id:`b`,component:`note`,title:`b.ts`,params:{text:`The layout comes back from localStorage.`}}]),x=c({key:`basics-save-layout`});function S(){let e=(0,d.useRef)(null);return(0,f.jsxs)(`div`,{children:[(0,f.jsx)(i,{size:`sm`,variant:`outline`,onClick:()=>{e.current?.closeAll();for(let t of b)e.current?.addPanel(t)},children:`Restore default`}),(0,f.jsx)(`div`,{className:`mt-2 h-56 overflow-hidden rounded-lg border border-border bg-background`,children:(0,f.jsx)(s,{panels:y.panels,initialPanels:b,adapter:x,onReady:({api:t})=>e.current=t})})]})}var C=`import { useRef } from "react"
import { Button } from "@kitora/ui/button"
import { Tabster, createLocalStorageAdapter, defineTabsterPanels, type TabsterApi, type TabsterPanelRenderProps } from "@kitora/tabster"

type NoteParams = { text: string }

function Note({ params }: TabsterPanelRenderProps<Partial<NoteParams>>) {
  return <div className="p-3 text-[13px]">{params?.text ?? "Empty note"}</div>
}

const PANELS = defineTabsterPanels({ note: Note })
const INITIAL = PANELS.specs<NoteParams>([
  { id: "a", component: "note", title: "a.ts", params: { text: "Drag this tab beside b.ts, then reload the page." } },
  { id: "b", component: "note", title: "b.ts", params: { text: "The layout comes back from localStorage." } },
])

// With an adapter, every layout change is saved and the saved layout wins over initialPanels on load.
const adapter = createLocalStorageAdapter({ key: "basics-save-layout" })

export function SavedLayout() {
  const api = useRef<TabsterApi | null>(null)
  // Back to the starting tabs: clear the dock, open INITIAL again; the adapter saves the result.
  const restoreDefault = () => {
    api.current?.closeAll()
    for (const spec of INITIAL) api.current?.addPanel(spec)
  }
  return (
    <div>
      <Button size="sm" variant="outline" onClick={restoreDefault}>Restore default</Button>
      <div className="mt-2 h-56 overflow-hidden rounded-lg border border-border bg-background">
        <Tabster panels={PANELS.panels} initialPanels={INITIAL} adapter={adapter} onReady={({ api: ready }) => (api.current = ready)} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>n(()=>import(`./save-layout-CMKnDJPm.js`),[]));var w=[`index.ts`,`README.md`,`styles.css`];function T(){let[e,t]=(0,d.useState)(w),[n,r]=(0,d.useState)(null),i=(e,n)=>{let i=n.trim();i&&t(t=>t.map((t,n)=>n===e?i:t)),r(null)};return(0,f.jsx)(`ul`,{className:`w-64 rounded-lg border border-border bg-background p-1 text-[12px]`,children:e.map((e,t)=>(0,f.jsx)(`li`,{className:`flex h-7 items-center rounded px-2 hover:bg-muted`,children:n===t?(0,f.jsx)(u,{initial:e,onCommit:e=>i(t,e),onCancel:()=>r(null)}):(0,f.jsx)(`button`,{type:`button`,className:`flex-1 text-left`,onDoubleClick:()=>r(t),onKeyDown:e=>e.key===`Enter`?r(t):void 0,children:e})},e))})}var E=`import { useState } from "react"
import { TabsterInlineRename } from "@kitora/tabster"

const START = ["index.ts", "README.md", "styles.css"]

/**
 * The outliner's rename field on its own: double-click (or Enter on) a row to edit it; Enter or
 * blur commits, Escape cancels. The input names itself "Rename <name>" (pass \`label\` to change it).
 */
export function InlineRenameList() {
  const [names, setNames] = useState(START)
  const [editing, setEditing] = useState<number | null>(null)
  const commit = (index: number, next: string) => {
    const trimmed = next.trim()
    if (trimmed) setNames((current) => current.map((name, i) => (i === index ? trimmed : name)))
    setEditing(null)
  }
  return (
    <ul className="w-64 rounded-lg border border-border bg-background p-1 text-[12px]">
      {names.map((name, index) => (
        <li key={name} className="flex h-7 items-center rounded px-2 hover:bg-muted">
          {editing === index ? (
            <TabsterInlineRename initial={name} onCommit={(next) => commit(index, next)} onCancel={() => setEditing(null)} />
          ) : (
            <button type="button" className="flex-1 text-left" onDoubleClick={() => setEditing(index)} onKeyDown={(event) => (event.key === "Enter" ? setEditing(index) : undefined)}>
              {name}
            </button>
          )}
        </li>
      ))}
    </ul>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>n(()=>import(`./inline-rename-D_jFlykR.js`),[]));function D(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t,{title:`Basics: panels and layout`,children:`Open and close panels from code, and keep the layout across reloads.`}),(0,f.jsx)(o,{n:1,title:`Adding and closing a panel`,blurb:`onReady gives you the api; addPanel and closeActive change the dock from your own buttons.`,code:_,children:(0,f.jsx)(g,{})}),(0,f.jsx)(o,{n:2,title:`Saving the layout`,blurb:`Pass an adapter and every change is saved; createLocalStorageAdapter keeps it in the browser.`,code:C,children:(0,f.jsx)(S,{})}),(0,f.jsx)(o,{n:3,title:`Renaming in place`,blurb:`TabsterInlineRename is the outliner's rename field: Enter or blur commits, Escape cancels. Double-click a row.`,code:E,children:(0,f.jsx)(T,{})})]})}export{D as component};