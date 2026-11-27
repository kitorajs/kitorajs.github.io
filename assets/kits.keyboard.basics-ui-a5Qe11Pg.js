import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./cheatsheet-SysYmzKC.js";import{s as n}from"./kit-docs-Cf27Kpa-.js";import{t as r}from"./keyboard-layers-C6YOI-El.js";import{t as i}from"./command-palette-C8vgjOP2.js";import{t as a}from"./provider-Chu9Vnk7.js";import{a as o,d as s}from"./hooks-B0tbzz3E.js";import{n as c}from"./components-kpftdbSQ.js";import{t as l}from"./fuzzy-CPYP9OT0.js";import{t as u}from"./palette-UxrbKfhU.js";import{i as d,t as f}from"./kbd-CZ2z7L7Q.js";import{n as p,t as m}from"./shortcuts-editor-DKJYUwsC.js";import{t as h}from"./highlight-C_SIKKRc.js";import{Ec as g,Uc as _,zc as v}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as y}from"./example-B67lLz1F.js";var b=e(_(),1),x=v();function S(){let[e,n]=(0,b.useState)(!1),[r,i]=(0,b.useState)(`nothing yet`);return o({"help.keys":{title:`Keyboard shortcuts`,category:`Help`,run:()=>n(!0)},"mail.compose":{title:`Compose`,category:`Mail`,run:()=>i(`Compose`)},"mail.reply":{title:`Reply`,category:`Mail`,run:()=>i(`Reply`)}}),s(`default`,[{key:`[Shift]+?`,command:`help.keys`},{key:`c`,command:`mail.compose`},{key:`r`,command:`mail.reply`}]),(0,x.jsxs)(`div`,{className:`flex items-center gap-3 text-[13px]`,children:[(0,x.jsx)(f,{command:`help.keys`,className:`h-7`}),(0,x.jsxs)(`span`,{role:`status`,children:[`Last run: `,r]}),(0,x.jsx)(t,{open:e,onOpenChange:n})]})}function C(){return(0,x.jsx)(a,{children:(0,x.jsx)(S,{})})}var w=`import { useState } from "react"
import { Cheatsheet, CommandButton, KeyboardProvider, useCommands, useKeymap } from "@kitora/keyboard"

// The cheatsheet: press ? (or the button) for every key that works right now, grouped by category and
// searchable. It reads the registry, so there is no list of shortcuts to keep in sync by hand.

function App() {
  const [open, setOpen] = useState(false)
  const [last, setLast] = useState("nothing yet")
  useCommands({
    "help.keys": { title: "Keyboard shortcuts", category: "Help", run: () => setOpen(true) },
    "mail.compose": { title: "Compose", category: "Mail", run: () => setLast("Compose") },
    "mail.reply": { title: "Reply", category: "Mail", run: () => setLast("Reply") },
  })
  useKeymap("default", [
    { key: "[Shift]+?", command: "help.keys" },
    { key: "c", command: "mail.compose" },
    { key: "r", command: "mail.reply" },
  ])
  return (
    <div className="flex items-center gap-3 text-[13px]">
      <CommandButton command="help.keys" className="h-7" />
      <span role="status">Last run: {last}</span>
      <Cheatsheet open={open} onOpenChange={setOpen} />
    </div>
  )
}

export function CheatsheetBasics() {
  return (
    <KeyboardProvider>
      <App />
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>g(()=>import(`./cheatsheet-BsxEyS3j.js`),[]));function T(){return o({"file.open":{title:`Open file`,category:`File`,run:()=>void 0},"file.saveAs":{title:`Save as`,category:`File`,run:()=>void 0},"view.sidebar":{title:`Toggle sidebar`,category:`View`,run:()=>void 0}}),s(`default`,[{key:`Mod+O`,command:`file.open`},{key:`Mod+Shift+S`,command:`file.saveAs`},{key:`Mod+B`,command:`view.sidebar`}]),(0,x.jsx)(m,{})}function E(){return(0,x.jsx)(a,{children:(0,x.jsx)(T,{})})}var D=`import { KeyboardProvider, ShortcutsEditor, useCommands, useKeymap } from "@kitora/keyboard"

// The shortcuts editor on its own: search by name or by keys, record a new key, see conflicts, reset.
// Edits go to the user layer only; give KeyboardProvider a \`store\` to keep them across reloads.

function Settings() {
  useCommands({
    "file.open": { title: "Open file", category: "File", run: () => undefined },
    "file.saveAs": { title: "Save as", category: "File", run: () => undefined },
    "view.sidebar": { title: "Toggle sidebar", category: "View", run: () => undefined },
  })
  useKeymap("default", [
    { key: "Mod+O", command: "file.open" },
    { key: "Mod+Shift+S", command: "file.saveAs" },
    { key: "Mod+B", command: "view.sidebar" },
  ])
  return <ShortcutsEditor />
}

export function EditorBasics() {
  return (
    <KeyboardProvider>
      <Settings />
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>g(()=>import(`./editor-DjmkCcgv.js`),[]));var O=[`Open file`,`Toggle sidebar`,`Go to line`,`Format document`];function k(){let[e,t]=(0,b.useState)(`ofi`);return(0,x.jsxs)(`div`,{className:`flex w-64 flex-col gap-2 text-[13px]`,children:[(0,x.jsx)(`input`,{"aria-label":`Filter commands`,value:e,onChange:e=>t(e.target.value),className:`h-7 rounded-md border bg-background px-2`}),(0,x.jsx)(`ul`,{className:`flex flex-col gap-1`,children:O.map(t=>{let n=l(e,t);return e!==``&&n===null?null:(0,x.jsx)(`li`,{children:(0,x.jsx)(h,{text:t,indices:n?.indices??[]})},t)})})]})}var A=`import { useState } from "react"
import { fuzzyMatch } from "@kitora/keyboard"
import { Highlight } from "@kitora/ui/highlight"

// ui \`Highlight\` marks the matched characters of a fuzzy match, as the palette does on each row.
// fuzzyMatch scores one text against the query and returns the indices it matched.
const TITLES = ["Open file", "Toggle sidebar", "Go to line", "Format document"] as const

export function HighlightMatches() {
  const [query, setQuery] = useState("ofi")
  return (
    <div className="flex w-64 flex-col gap-2 text-[13px]">
      <input aria-label="Filter commands" value={query} onChange={(event) => setQuery(event.target.value)} className="h-7 rounded-md border bg-background px-2" />
      <ul className="flex flex-col gap-1">
        {TITLES.map((title) => {
          const match = fuzzyMatch(query, title)
          if (query !== "" && match === null) return null
          return (
            <li key={title}>
              <Highlight text={title} indices={match?.indices ?? []} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>g(()=>import(`./highlight--DP0DjYY.js`),[]));function j(){let[e,t]=(0,b.useState)(!1),[n,r]=(0,b.useState)(`nothing yet`);o({"palette.open":{title:`Show command palette`,run:()=>t(!0)},"doc.new":{title:`New document`,category:`File`,run:()=>r(`New document`)},"doc.share":{title:`Share document`,category:`File`,run:()=>r(`Share document`)},"view.zoom":{title:`Zoom in`,category:`View`,run:()=>r(`Zoom in`)}}),s(`default`,[{key:`Mod+K`,command:`palette.open`},{key:`Alt+N`,command:`doc.new`}]);let a=u();return(0,x.jsxs)(`div`,{className:`flex items-center gap-3 text-[13px]`,children:[(0,x.jsx)(f,{command:`palette.open`,className:`h-7`}),(0,x.jsxs)(`span`,{role:`status`,children:[`Last run: `,n]}),(0,x.jsx)(i,{...a.props,shortcut:!1,open:e,onOpenChange:e=>{t(e),e||a.reset()}})]})}function M(){return(0,x.jsx)(a,{layers:r()??void 0,children:(0,x.jsx)(j,{})})}var N=`import { useState } from "react"
import { CommandButton, KeyboardProvider, useCommandPalette, useCommands, useKeymap } from "@kitora/keyboard"
import { CommandPalette, useKeyboardLayerSource } from "@kitora/overlay"

// A command palette fed from the registry: every command is a row with its key, fuzzy-searched.
// useCommandPalette builds the rows; the overlay kit's CommandPalette draws them. Mod+K opens it.

function App() {
  const [open, setOpen] = useState(false)
  const [last, setLast] = useState("nothing yet")
  useCommands({
    "palette.open": { title: "Show command palette", run: () => setOpen(true) },
    "doc.new": { title: "New document", category: "File", run: () => setLast("New document") },
    "doc.share": { title: "Share document", category: "File", run: () => setLast("Share document") },
    "view.zoom": { title: "Zoom in", category: "View", run: () => setLast("Zoom in") },
  })
  useKeymap("default", [
    { key: "Mod+K", command: "palette.open" },
    { key: "Alt+N", command: "doc.new" },
  ])
  const palette = useCommandPalette()
  return (
    <div className="flex items-center gap-3 text-[13px]">
      <CommandButton command="palette.open" className="h-7" />
      <span role="status">Last run: {last}</span>
      <CommandPalette
        {...palette.props}
        shortcut={false}
        open={open}
        onOpenChange={(next) => {
          setOpen(next)
          if (!next) palette.reset()
        }}
      />
    </div>
  )
}

export function PaletteBasics() {
  const layers = useKeyboardLayerSource() // while the palette is open, its keys shadow the page's
  return (
    <KeyboardProvider layers={layers ?? undefined}>
      <App />
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>g(()=>import(`./palette-DfWrC2oW.js`),[]));function P(){let[e,t]=(0,b.useState)(`Shift+J`),[n,r]=(0,b.useState)(``),[i,o]=(0,b.useState)(0);return(0,x.jsxs)(a,{children:[(0,x.jsx)(c,{keys:e,onKey:()=>o(e=>e+1)}),(0,x.jsxs)(`div`,{className:`flex flex-col gap-2 text-[13px]`,children:[(0,x.jsxs)(`p`,{children:[`Press `,(0,x.jsx)(d,{binding:e}),`: pressed`,` `,(0,x.jsx)(`span`,{className:`font-mono tabular-nums`,"data-testid":`kb-basics-shortcut-count`,children:i}),` `,`times.`]}),(0,x.jsx)(p,{label:`New key for the counter`,value:n,onChange:r,onCommit:e=>{e!==``&&t(e),r(``)},onCancel:()=>r(``),className:`w-64`})]})]})}var F=`import { useState } from "react"
import { KeyboardProvider, KeyRecorder, ProviderKbd, Shortcut } from "@kitora/keyboard"

// <Shortcut> is useKeybinding as a component: it binds \`keys\` while mounted. KeyRecorder records a
// new binding (the engine pauses while it has focus); the Shortcut below rebinds to what you record.
export function ShortcutRecorder() {
  const [binding, setBinding] = useState("Shift+J")
  const [draft, setDraft] = useState("")
  const [count, setCount] = useState(0)
  return (
    <KeyboardProvider>
      <Shortcut keys={binding} onKey={() => setCount((n) => n + 1)} />
      <div className="flex flex-col gap-2 text-[13px]">
        <p>
          Press <ProviderKbd binding={binding} />: pressed{" "}
          <span className="font-mono tabular-nums" data-testid="kb-basics-shortcut-count">
            {count}
          </span>{" "}
          times.
        </p>
        <KeyRecorder
          label="New key for the counter"
          value={draft}
          onChange={setDraft}
          onCommit={(value) => {
            if (value !== "") setBinding(value)
            setDraft("")
          }}
          onCancel={() => setDraft("")}
          className="w-64"
        />
      </div>
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>g(()=>import(`./shortcut-recorder-DTNNTW4-.js`),[]));function I(){return(0,x.jsxs)(`div`,{children:[(0,x.jsx)(n,{title:`Palette, cheatsheet and editor`,children:`The three shortcut screens, each over a few commands of its own and nothing else.`}),(0,x.jsx)(y,{n:1,title:`A command palette`,blurb:`Mod+K or the button; type to filter, Enter runs.`,code:N,children:(0,x.jsx)(M,{})}),(0,x.jsx)(y,{n:2,title:`The cheatsheet`,blurb:`Press ? for every key that works here.`,code:w,children:(0,x.jsx)(C,{})}),(0,x.jsx)(y,{n:3,title:`The shortcuts editor on its own`,blurb:`Search, record a new key, reset to the default.`,code:D,children:(0,x.jsx)(E,{})}),(0,x.jsx)(y,{n:4,title:`Record a key for a Shortcut`,blurb:`Shortcut binds a key while mounted; KeyRecorder records a new one (focus it, press keys, Enter accepts).`,code:F,children:(0,x.jsx)(P,{})}),(0,x.jsx)(y,{n:5,title:`Highlight a fuzzy match`,blurb:"ui `Highlight` marks the characters fuzzyMatch matched (its `indices`), as on each palette row.",code:A,children:(0,x.jsx)(k,{})})]})}export{I as component};