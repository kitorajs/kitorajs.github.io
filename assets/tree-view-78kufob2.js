import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./file-text-jZN1FxYo.js";import{t as r}from"./folder-BMIhIs7B.js";import{t as i}from"./tree-view-CuHZVQXx.js";import{Bc as a,Cc as o,Ic as s}from"./index-9y5uwRd3.js";import{a as c,n as l,o as u,t as d}from"./card-AZ_23TG_.js";import{t as f}from"./separator-CJFdFqN7.js";import{a as p}from"./styles-B0f5TDtG.js";import{n as m}from"./file-tree-BSHgage-.js";var h=e({TreeViewComposeFilePicker:()=>y}),g=t(a(),1),_=s(),v=[{id:`docs`,label:`docs`,icon:(0,_.jsx)(r,{className:`size-3.5 ${p}`}),children:[{id:`intro`,label:`intro.md`,icon:(0,_.jsx)(n,{className:`size-3.5 ${p}`})},{id:`setup`,label:`setup.md`,icon:(0,_.jsx)(n,{className:`size-3.5 ${p}`})}]},{id:`readme`,label:`README.md`,icon:(0,_.jsx)(n,{className:`size-3.5 ${p}`})}];function y(){let[e,t]=(0,g.useState)([`intro`]);return(0,_.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,_.jsxs)(d,{className:`w-full max-w-sm`,children:[(0,_.jsx)(c,{children:(0,_.jsx)(u,{children:`Files`})}),(0,_.jsxs)(l,{className:`grid gap-3`,children:[(0,_.jsx)(i,{"aria-label":`Files`,items:v,defaultExpanded:[`docs`],value:e,onChange:t}),(0,_.jsx)(f,{}),(0,_.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`Selected: `,e[0]??`none`]})]})]})})}var b=e({TreeViewDragToReorder:()=>S}),x=[{id:`plan`,label:`Plan`,children:[{id:`scope`,label:`Scope`},{id:`budget`,label:`Budget`}]},{id:`build`,label:`Build`,children:[{id:`api`,label:`API`},{id:`ui`,label:`UI`}]},{id:`launch`,label:`Launch`}];function S(){let[e,t]=(0,g.useState)(x);return(0,_.jsx)(i,{"aria-label":`Project outline`,items:e,draggable:!0,maxDepth:1,defaultExpanded:[`plan`,`build`],onMove:e=>t(e),className:`w-full max-w-sm rounded-lg border border-border p-1`})}var C=e({TreeViewFolderBrowser:()=>T}),w=[`src/styles.css`,`src/router.tsx`,`src/components/ui/button.tsx`,`src/components/ui/card.tsx`,`src/kit/demos.tsx`,`src/kit/registry.ts`,`src/assets/logo.png`];function T(){let[e,t]=(0,g.useState)([`src/styles.css`]);return(0,_.jsx)(`div`,{className:`flex flex-wrap items-center gap-3 justify-start`,children:(0,_.jsx)(m,{"aria-label":`Project files`,className:`w-full max-w-sm rounded-lg border border-border p-1`,paths:w,defaultExpanded:[`src`,`src/components`,`src/components/ui`,`src/kit`],value:e,onChange:t})})}var E=`import { useState } from "react"
import { FileText, Folder } from "lucide-react"
import { mutedClass, TreeView } from "@kitora/collections/ui"
import type { Entry } from "@kitora/collections/ui"
import { Card, CardContent, CardHeader, CardTitle } from "@kitora/ui/card"
import { Separator } from "@kitora/ui/separator"

const nodes: readonly Entry[] = [
  {
    id: "docs",
    label: "docs",
    icon: <Folder className={\`size-3.5 \${mutedClass}\`} />,
    children: [
      { id: "intro", label: "intro.md", icon: <FileText className={\`size-3.5 \${mutedClass}\`} /> },
      { id: "setup", label: "setup.md", icon: <FileText className={\`size-3.5 \${mutedClass}\`} /> },
    ],
  },
  { id: "readme", label: "README.md", icon: <FileText className={\`size-3.5 \${mutedClass}\`} /> },
]

export function TreeViewComposeFilePicker() {
  const [selected, setSelected] = useState<string[]>(["intro"])
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Files</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          <TreeView aria-label="Files" items={nodes} defaultExpanded={["docs"]} value={selected} onChange={setSelected} />
          <Separator />
          <p className="text-xs text-muted-foreground">Selected: {selected[0] ?? "none"}</p>
        </CardContent>
      </Card>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>o(()=>import(`./compose-R0O1Bspe.js`),[]));var D=`import { useState } from "react"
import { TreeView, type Entry } from "@kitora/collections/ui"

const START: Entry[] = [
  { id: "plan", label: "Plan", children: [{ id: "scope", label: "Scope" }, { id: "budget", label: "Budget" }] },
  { id: "build", label: "Build", children: [{ id: "api", label: "API" }, { id: "ui", label: "UI" }] },
  { id: "launch", label: "Launch" },
]

// \`draggable\` makes every row draggable through the dnd kit's tree rules: the row you drop on
// picks the gap, the horizontal offset picks the depth, and a row never moves into its own
// subtree. \`maxDepth={1}\` keeps the outline two levels deep. The host owns \`items\` and applies
// \`onMove\`. Everything else (selection, the keys, typeahead) is the plain TreeView's.
export function TreeViewDragToReorder() {
  const [items, setItems] = useState<readonly Entry[]>(START)
  return (
    <TreeView
      aria-label="Project outline"
      items={items}
      draggable
      maxDepth={1}
      defaultExpanded={["plan", "build"]}
      onMove={(next) => setItems(next)}
      className="w-full max-w-sm rounded-lg border border-border p-1"
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>o(()=>import(`./drag-to-reorder-jU9l3kwM.js`),[]));var O=`import { useState } from "react"
import { FileTree } from "@kitora/collections/ui"

const PATHS = [
  "src/styles.css",
  "src/router.tsx",
  "src/components/ui/button.tsx",
  "src/components/ui/card.tsx",
  "src/kit/demos.tsx",
  "src/kit/registry.ts",
  "src/assets/logo.png",
]

// \`FileTree\` is the file and folder preset on TreeView: a list of paths becomes folders and files
// (ids are the paths), sorted folders first, with a folder or file-kind icon per row.
export function TreeViewFolderBrowser() {
  const [selected, setSelected] = useState<string[]>(["src/styles.css"])
  return (
    <div className="flex flex-wrap items-center gap-3 justify-start">
      <FileTree
        aria-label="Project files"
        className="w-full max-w-sm rounded-lg border border-border p-1"
        paths={PATHS}
        defaultExpanded={["src", "src/components", "src/components/ui", "src/kit"]}
        value={selected}
        onChange={setSelected}
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>o(()=>import(`./folder-browser-BDfTrfvE.js`),[]));var k={"./demos/tree-view/compose.tsx":h,"./demos/tree-view/drag-to-reorder.tsx":b,"./demos/tree-view/folder-browser.tsx":C},A={"./demos/tree-view/compose.tsx":E,"./demos/tree-view/drag-to-reorder.tsx":D,"./demos/tree-view/folder-browser.tsx":O};export{k as modules,A as sources};