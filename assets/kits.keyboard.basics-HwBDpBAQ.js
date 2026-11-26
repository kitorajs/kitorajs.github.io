import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{t as n}from"./provider-D0Iw1w2F.js";import{a as r,d as i,l as a,o}from"./hooks-BRcZguZq.js";import{t as s}from"./components-CFkdVAA0.js";import{i as c,t as l}from"./kbd-WtgBabxu.js";import{i as u}from"./hints-Ciuct_fj.js";import{Bc as d,Cc as f,Ic as p}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as m}from"./example-CZLJLtIC.js";var h=e(d(),1),g=p();function _(){let[e,t]=(0,h.useState)(`Inbox`);return r({"go.inbox":{title:`Go to Inbox`,category:`Go to`,run:()=>t(`Inbox`)},"go.done":{title:`Go to Done`,category:`Go to`,run:()=>t(`Done`)}}),i(`default`,[{key:`g i`,command:`go.inbox`},{key:`g d`,command:`go.done`}]),(0,g.jsxs)(`div`,{className:`flex items-center gap-3 text-[13px]`,children:[(0,g.jsxs)(`span`,{children:[(0,g.jsx)(c,{binding:`g i`}),` Inbox · `,(0,g.jsx)(c,{binding:`g d`}),` Done`]}),(0,g.jsxs)(`span`,{children:[`Showing: `,(0,g.jsx)(`strong`,{"data-testid":`kb-basics-view`,children:e})]}),(0,g.jsx)(u,{className:`h-6`})]})}function v(){return(0,g.jsx)(n,{children:(0,g.jsx)(_,{})})}var y=`import { useState } from "react"
import { KeyboardProvider, PendingChord, ProviderKbd, useCommands, useKeymap } from "@kitora/keyboard"

// A chord is keys pressed one after the other: "g i" is G, then I. PendingChord shows the first half
// while the engine waits for the second.

function Views() {
  const [view, setView] = useState("Inbox")
  useCommands({
    "go.inbox": { title: "Go to Inbox", category: "Go to", run: () => setView("Inbox") },
    "go.done": { title: "Go to Done", category: "Go to", run: () => setView("Done") },
  })
  useKeymap("default", [
    { key: "g i", command: "go.inbox" },
    { key: "g d", command: "go.done" },
  ])
  return (
    <div className="flex items-center gap-3 text-[13px]">
      <span>
        <ProviderKbd binding="g i" /> Inbox · <ProviderKbd binding="g d" /> Done
      </span>
      <span>
        Showing: <strong data-testid="kb-basics-view">{view}</strong>
      </span>
      <PendingChord className="h-6" />
    </div>
  )
}

export function Chord() {
  return (
    <KeyboardProvider>
      <Views />
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>f(()=>import(`./chord-DjjJQpaA.js`),[]));function b(){let[e,t]=(0,h.useState)(0);return(0,g.jsx)(s,{id:`doc.save`,spec:{title:`Save`,category:`File`,run:()=>t(e=>e+1)},keys:[`Mod+S`],children:(0,g.jsxs)(`div`,{className:`flex items-center gap-2 text-[13px]`,children:[(0,g.jsx)(l,{command:`doc.save`,className:`h-7`}),(0,g.jsxs)(`span`,{children:[`Saved`,` `,(0,g.jsx)(`span`,{className:`font-mono tabular-nums`,"data-testid":`kb-basics-saved`,children:e}),` `,`times`]})]})})}function x(){return(0,g.jsx)(n,{children:(0,g.jsx)(b,{})})}var S=`import { useState } from "react"
import { Command, CommandButton, KeyboardProvider } from "@kitora/keyboard"

// A command is a named action with a title; a keybinding points a key at it. <Command> registers both
// while mounted. The button reads the title and key from the registry and runs the same command.

function Editor() {
  const [saved, setSaved] = useState(0)
  return (
    <Command id="doc.save" spec={{ title: "Save", category: "File", run: () => setSaved((n) => n + 1) }} keys={["Mod+S"]}>
      <div className="flex items-center gap-2 text-[13px]">
        <CommandButton command="doc.save" className="h-7" />
        <span>
          Saved{" "}
          <span className="font-mono tabular-nums" data-testid="kb-basics-saved">
            {saved}
          </span>{" "}
          times
        </span>
      </div>
    </Command>
  )
}

export function CommandKey() {
  return (
    <KeyboardProvider>
      <Editor />
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>f(()=>import(`./command-key-DcP3I3Vy.js`),[]));function C(){let[e,t]=(0,h.useState)(0);return a(`h`,()=>t(e=>e+1)),(0,g.jsxs)(`p`,{className:`text-[13px]`,children:[`Press `,(0,g.jsx)(c,{binding:`h`}),` anywhere on the page: pressed`,` `,(0,g.jsx)(`span`,{className:`font-mono tabular-nums`,"data-testid":`kb-basics-count`,children:e}),` `,`times.`]})}function w(){return(0,g.jsx)(n,{children:(0,g.jsx)(C,{})})}var T=`import { useState } from "react"
import { KeyboardProvider, ProviderKbd, useKeybinding } from "@kitora/keyboard"

// The smallest shortcut: a provider and one useKeybinding. The handler may change on every render;
// the key always runs the latest one. Keys are ignored while you type in a text field.

function Counter() {
  const [count, setCount] = useState(0)
  useKeybinding("h", () => setCount((n) => n + 1))
  return (
    <p className="text-[13px]">
      Press <ProviderKbd binding="h" /> anywhere on the page: pressed{" "}
      <span className="font-mono tabular-nums" data-testid="kb-basics-count">
        {count}
      </span>{" "}
      times.
    </p>
  )
}

export function OneShortcut() {
  return (
    <KeyboardProvider>
      <Counter />
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>f(()=>import(`./one-shortcut-Dn7y63Xs.js`),[]));function E(){let[e,t]=(0,h.useState)(!1),[n,a]=(0,h.useState)(0);return r({"item.archive":{title:`Archive item`,run:()=>a(e=>e+1)}}),i(`default`,[{key:`x`,command:`item.archive`,when:`item.selected`}]),o(`item.selected`,e),(0,g.jsxs)(`div`,{className:`flex items-center gap-3 text-[13px]`,children:[(0,g.jsxs)(`label`,{className:`inline-flex h-7 items-center gap-1.5`,children:[(0,g.jsx)(`input`,{type:`checkbox`,className:`size-3.5`,checked:e,onChange:e=>t(e.target.checked)}),`Select the item`]}),(0,g.jsxs)(`span`,{children:[`Press `,(0,g.jsx)(c,{binding:`x`}),`: archived`,` `,(0,g.jsx)(`span`,{className:`font-mono tabular-nums`,"data-testid":`kb-basics-archived`,children:n})]})]})}function D(){return(0,g.jsx)(n,{children:(0,g.jsx)(E,{})})}var O=`import { useState } from "react"
import { KeyboardProvider, ProviderKbd, useCommands, useContextKey, useKeymap } from "@kitora/keyboard"

// A when-clause makes a key work only in some contexts. X archives only while \`item.selected\` is true;
// the checkbox sets that context key, so X does nothing until it is ticked.

function Item() {
  const [selected, setSelected] = useState(false)
  const [archived, setArchived] = useState(0)
  useCommands({ "item.archive": { title: "Archive item", run: () => setArchived((n) => n + 1) } })
  useKeymap("default", [{ key: "x", command: "item.archive", when: "item.selected" }])
  useContextKey("item.selected", selected)
  return (
    <div className="flex items-center gap-3 text-[13px]">
      <label className="inline-flex h-7 items-center gap-1.5">
        <input type="checkbox" className="size-3.5" checked={selected} onChange={(e) => setSelected(e.target.checked)} />
        Select the item
      </label>
      <span>
        Press <ProviderKbd binding="x" />: archived{" "}
        <span className="font-mono tabular-nums" data-testid="kb-basics-archived">
          {archived}
        </span>
      </span>
    </div>
  )
}

export function WhenClause() {
  return (
    <KeyboardProvider>
      <Item />
    </KeyboardProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>f(()=>import(`./when-clause-D2Z4jNCz.js`),[]));function k(){return(0,g.jsxs)(`div`,{children:[(0,g.jsx)(t,{title:`Shortcuts`,children:`The building blocks one at a time, each the smallest file that works: copy the Code tab into an app that has the kit installed.`}),(0,g.jsx)(m,{n:1,title:`One shortcut that runs a function`,blurb:`Press H: useKeybinding calls the handler.`,code:T,children:(0,g.jsx)(w,{})}),(0,g.jsx)(m,{n:2,title:`A command with a keybinding`,blurb:`Mod+S runs the Save command; the button shows its key and runs it too.`,code:S,children:(0,g.jsx)(x,{})}),(0,g.jsx)(m,{n:3,title:`A chord`,blurb:`Press G, then I or D.`,code:y,children:(0,g.jsx)(v,{})}),(0,g.jsx)(m,{n:4,title:`A when-clause`,blurb:`X works only while the item is selected.`,code:O,children:(0,g.jsx)(D,{})})]})}export{k as component};