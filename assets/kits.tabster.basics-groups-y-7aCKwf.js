import{s as e}from"./kit-docs-DpYhPoxM.js";import{Cc as t,Ic as n}from"./index-q72zUtm9.js";import"./kit-gallery-Atvibnty.js";import{t as r}from"./example-B8EaWveR.js";import{t as i}from"./tabster-qD_44-6A.js";import{t as a}from"./define-panels-BMgBEt0I.js";var o=n();function s({params:e}){return(0,o.jsx)(`div`,{className:`p-3 text-[13px]`,children:e?.text??`Empty note`})}var c=a({note:s}),l=c.specs([{id:`readme`,component:`note`,title:`README.md`,params:{text:`Three tabs in one group. Click a tab, or drag it to reorder.`}},{id:`todo`,component:`note`,title:`TODO.md`,params:{text:`Ship the basics page.`}},{id:`notes`,component:`note`,title:`notes.txt`,params:{text:`Drag a tab to an edge to split.`}}]);function u(){return(0,o.jsx)(`div`,{className:`h-56 overflow-hidden rounded-lg border border-border bg-background`,children:(0,o.jsx)(i,{panels:c.panels,initialPanels:l})})}var d=`import { Tabster, defineTabsterPanels, type TabsterPanelRenderProps } from "@kitora/tabster"

type NoteParams = { text: string }

// Params come back from stored JSON, so read every field as optional.
function Note({ params }: TabsterPanelRenderProps<Partial<NoteParams>>) {
  return <div className="p-3 text-[13px]">{params?.text ?? "Empty note"}</div>
}

// The registry maps a component name to a React component; specs name it in a type-checked way.
const PANELS = defineTabsterPanels({ note: Note })

const INITIAL = PANELS.specs<NoteParams>([
  { id: "readme", component: "note", title: "README.md", params: { text: "Three tabs in one group. Click a tab, or drag it to reorder." } },
  { id: "todo", component: "note", title: "TODO.md", params: { text: "Ship the basics page." } },
  { id: "notes", component: "note", title: "notes.txt", params: { text: "Drag a tab to an edge to split." } },
])

export function TabGroup() {
  return (
    <div className="h-56 overflow-hidden rounded-lg border border-border bg-background">
      <Tabster panels={PANELS.panels} initialPanels={INITIAL} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(d,()=>t(()=>import(`./tab-group-CZ9ERCMb.js`),[]));function f({params:e}){return(0,o.jsx)(`div`,{className:`p-3 text-[13px]`,children:e?.text??`Empty note`})}var p=a({note:f}),m=p.specs([{id:`left`,component:`note`,title:`left.ts`,params:{text:`The left group. Drag the divider to resize.`}},{id:`right`,component:`note`,title:`right.ts`,position:{referencePanel:`left`,direction:`right`},params:{text:`The right group.`}}]);function h(){return(0,o.jsx)(`div`,{className:`h-56 overflow-hidden rounded-lg border border-border bg-background`,children:(0,o.jsx)(i,{panels:p.panels,initialPanels:m})})}var g=`import { Tabster, defineTabsterPanels, type TabsterPanelRenderProps } from "@kitora/tabster"

type NoteParams = { text: string }

function Note({ params }: TabsterPanelRenderProps<Partial<NoteParams>>) {
  return <div className="p-3 text-[13px]">{params?.text ?? "Empty note"}</div>
}

const PANELS = defineTabsterPanels({ note: Note })

// \`position\` opens a panel beside another one: here a second group to the right of "left".
const INITIAL = PANELS.specs<NoteParams>([
  { id: "left", component: "note", title: "left.ts", params: { text: "The left group. Drag the divider to resize." } },
  { id: "right", component: "note", title: "right.ts", position: { referencePanel: "left", direction: "right" }, params: { text: "The right group." } },
])

export function SideBySideGroups() {
  return (
    <div className="h-56 overflow-hidden rounded-lg border border-border bg-background">
      <Tabster panels={PANELS.panels} initialPanels={INITIAL} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>t(()=>import(`./side-by-side-DSw8BA29.js`),[]));function _(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e,{title:`Basics: groups`,children:`A panel registry, a list of panels and one Tabster: first a single tab group, then two groups side by side.`}),(0,o.jsx)(r,{n:1,title:`A tab group`,blurb:`defineTabsterPanels names your components; initialPanels opens them as tabs in one group.`,code:d,children:(0,o.jsx)(u,{})}),(0,o.jsx)(r,{n:2,title:`Two groups side by side`,blurb:`A panel's position opens it beside another panel, which makes a second group.`,code:g,children:(0,o.jsx)(h,{})})]})}export{_ as component};