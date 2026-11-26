import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{i as t,r as n,s as r,t as i}from"./field-CyrZpl8n.js";import{s as a}from"./kit-docs-CvNs0WqT.js";import{a as o,c as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./tree-view-CuHZVQXx.js";import{Bc as m,Cc as h,Ic as g,ti as _}from"./index-9y5uwRd3.js";import{a as v}from"./styles-B0f5TDtG.js";import{t as y}from"./tree-select-BS0zvmY0.js";import{t as b}from"./cascader-Bm_NCyvF.js";import"./kit-gallery-B-Yr9fP4.js";import{t as x}from"./example-CZLJLtIC.js";import{t as S}from"./-kits.collections.shared-COb_zFiP.js";var C=g(),w=[{id:`src`,label:`src`,children:[{id:`components`,label:`components`,children:[{id:`button.tsx`,label:`button.tsx`},{id:`dialog.tsx`,label:`dialog.tsx`}]},{id:`main.tsx`,label:`main.tsx`}]},{id:`package.json`,label:`package.json`},{id:`readme`,label:`README.md`}];function T(){return(0,C.jsx)(p,{"aria-label":`Files`,items:w,defaultExpanded:[`src`],defaultValue:[`main.tsx`],className:`w-64 rounded-lg border border-border p-1`})}var E=`import { TreeView } from "@kitora/collections"

const FILES = [
  {
    id: "src",
    label: "src",
    children: [
      { id: "components", label: "components", children: [{ id: "button.tsx", label: "button.tsx" }, { id: "dialog.tsx", label: "dialog.tsx" }] },
      { id: "main.tsx", label: "main.tsx" },
    ],
  },
  { id: "package.json", label: "package.json" },
  { id: "readme", label: "README.md" },
]

/** A tree: → opens or steps in, ← closes or steps out, * opens every sibling, type to jump. */
export function BasicTreeView() {
  return <TreeView aria-label="Files" items={FILES} defaultExpanded={["src"]} defaultValue={["main.tsx"]} className="w-64 rounded-lg border border-border p-1" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>h(()=>import(`./tree-view-DRmnwDc-.js`),[]));var D=e(m(),1),O=[{id:`eng`,label:`Engineering`,children:[{id:`web`,label:`Web`},{id:`mobile`,label:`Mobile`},{id:`infra`,label:`Infrastructure`}]},{id:`design`,label:`Design`,children:[{id:`product-design`,label:`Product design`},{id:`brand`,label:`Brand`}]},{id:`ops`,label:`Operations`}];function k(){let[e,t]=(0,D.useState)([`web`]);return(0,C.jsx)(`div`,{className:`w-64`,children:(0,C.jsx)(y,{"aria-label":`Team`,items:O,value:e,onChange:t})})}var A=`import { useState } from "react"
import { TreeSelect } from "@kitora/collections"

const TEAMS = [
  { id: "eng", label: "Engineering", children: [{ id: "web", label: "Web" }, { id: "mobile", label: "Mobile" }, { id: "infra", label: "Infrastructure" }] },
  { id: "design", label: "Design", children: [{ id: "product-design", label: "Product design" }, { id: "brand", label: "Brand" }] },
  { id: "ops", label: "Operations" },
]

/** A select whose options are a tree: the popup has a filter box over the tree. */
export function BasicTreeSelect() {
  const [team, setTeam] = useState<string[]>(["web"])
  return (
    <div className="w-64">
      <TreeSelect aria-label="Team" items={TEAMS} value={team} onChange={setTeam} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>h(()=>import(`./tree-select-D273ZXyr.js`),[]));var j=[{id:`asia`,label:`Asia`,children:[{id:`japan`,label:`Japan`,children:[{id:`tokyo`,label:`Tokyo`},{id:`osaka`,label:`Osaka`}]},{id:`india`,label:`India`,children:[{id:`delhi`,label:`Delhi`},{id:`mumbai`,label:`Mumbai`}]}]},{id:`europe`,label:`Europe`,children:[{id:`france`,label:`France`,children:[{id:`paris`,label:`Paris`},{id:`lyon`,label:`Lyon`}]},{id:`spain`,label:`Spain`,children:[{id:`madrid`,label:`Madrid`}]}]}];function M(){let[e,t]=(0,D.useState)([]);return(0,C.jsx)(`div`,{className:`w-72`,children:(0,C.jsx)(b,{"aria-label":`City`,placeholder:`Pick a city…`,items:j,value:e,onChange:t})})}var N=`import { useState } from "react"
import { Cascader } from "@kitora/collections"

const PLACES = [
  { id: "asia", label: "Asia", children: [{ id: "japan", label: "Japan", children: [{ id: "tokyo", label: "Tokyo" }, { id: "osaka", label: "Osaka" }] }, { id: "india", label: "India", children: [{ id: "delhi", label: "Delhi" }, { id: "mumbai", label: "Mumbai" }] }] },
  { id: "europe", label: "Europe", children: [{ id: "france", label: "France", children: [{ id: "paris", label: "Paris" }, { id: "lyon", label: "Lyon" }] }, { id: "spain", label: "Spain", children: [{ id: "madrid", label: "Madrid" }] }] },
]

/** One column per level: → or Enter opens the next column, ← goes back, Enter on a city picks the path. */
export function BasicCascader() {
  const [path, setPath] = useState<string[]>([])
  return (
    <div className="w-72">
      <Cascader aria-label="City" placeholder="Pick a city…" items={PLACES} value={path} onChange={setPath} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>h(()=>import(`./cascader-CdMQv8np.js`),[]));var P=[{id:`photos`,label:`Photos`,size:`4.2 GB`,children:[{id:`2025`,label:`2025`,size:`1.8 GB`},{id:`2026`,label:`2026`,size:`2.4 GB`}]},{id:`music`,label:`Music`,size:`9.1 GB`,hasChildren:!0},{id:`notes.txt`,label:`notes.txt`,size:`2 KB`}];function F(e){return new Promise(t=>{setTimeout(()=>t([{id:`${e.id}/jazz`,label:`Jazz`,size:`3.0 GB`},{id:`${e.id}/rock`,label:`Rock`,size:`6.1 GB`}]),600)})}function I(){let[e,t]=(0,D.useState)([`2025`]);return(0,C.jsxs)(`div`,{className:`w-full max-w-xs space-y-2`,children:[(0,C.jsx)(u,{"aria-label":`Backup folders`,items:P,checkboxes:!0,checked:e,onCheckedChange:t,defaultExpanded:[`photos`],loadChildren:F,className:`rounded-lg border border-border p-1`,children:({rows:e})=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(d,{children:`No folders`}),e.map(e=>e.kind===`status`?(0,C.jsx)(f,{row:e},e.key):(0,C.jsxs)(c,{row:e.row,children:[(0,C.jsx)(s,{}),(0,C.jsx)(l,{}),(0,C.jsx)(`span`,{className:`flex-1 truncate`,children:e.row.item.label}),(0,C.jsx)(`span`,{className:`text-[11px] tabular-nums ${v}`,children:e.row.item.size})]},e.key))]})}),(0,C.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,children:[`Backed up: `,e.join(`, `)||`nothing`]})]})}var L=`import { useState } from "react"
import { mutedClass, TreeViewCheck, TreeViewEmpty, TreeViewItem, TreeViewRoot, TreeViewStatus, TreeViewToggle } from "@kitora/collections"

interface Folder {
  readonly id: string
  readonly label: string
  readonly disabled?: boolean
  readonly children?: readonly Folder[]
  /** A branch whose children are fetched on first expand. */
  readonly hasChildren?: boolean
  /** A field of our own: the parts hand it back typed, no cast. */
  readonly size: string
}

const TREE: readonly Folder[] = [
  {
    id: "photos",
    label: "Photos",
    size: "4.2 GB",
    children: [
      { id: "2025", label: "2025", size: "1.8 GB" },
      { id: "2026", label: "2026", size: "2.4 GB" },
    ],
  },
  { id: "music", label: "Music", size: "9.1 GB", hasChildren: true },
  { id: "notes.txt", label: "notes.txt", size: "2 KB" },
]

/** Children of the "Music" branch, fetched on first expand (a short wait, then two rows). */
function loadChildren(item: Folder): Promise<readonly Folder[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve([{ id: \`\${item.id}/jazz\`, label: "Jazz", size: "3.0 GB" }, { id: \`\${item.id}/rock\`, label: "Rock", size: "6.1 GB" }]), 600)
  })
}

/** The \`<TreeView>\` preset rebuilt from its parts: a checkbox tree with our own row (a size on the right), a lazy branch and an empty text. */
export function ComposeTreeView() {
  const [checked, setChecked] = useState<string[]>(["2025"])
  return (
    <div className="w-full max-w-xs space-y-2">
      <TreeViewRoot<Folder> aria-label="Backup folders" items={TREE} checkboxes checked={checked} onCheckedChange={setChecked} defaultExpanded={["photos"]} loadChildren={loadChildren} className="rounded-lg border border-border p-1">
        {({ rows }) => (
          <>
            <TreeViewEmpty>No folders</TreeViewEmpty>
            {rows.map((d) =>
              d.kind === "status" ? (
                <TreeViewStatus key={d.key} row={d} />
              ) : (
                <TreeViewItem key={d.key} row={d.row}>
                  <TreeViewToggle />
                  <TreeViewCheck />
                  <span className="flex-1 truncate">{d.row.item.label}</span>
                  <span className={\`text-[11px] tabular-nums \${mutedClass}\`}>{d.row.item.size}</span>
                </TreeViewItem>
              ),
            )}
          </>
        )}
      </TreeViewRoot>
      <p className="text-[12px] text-muted-foreground">Backed up: {checked.join(", ") || "nothing"}</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>h(()=>import(`./compose-tree-view-DWkNeiH1.js`),[]));var R=[{id:`q1`,label:`Q1 plan`,children:[{id:`hiring`,label:`Hiring`},{id:`budget`,label:`Budget`}]},{id:`q2`,label:`Q2 plan`}];function z(e,t,n){return e.map(e=>e.id===t?{...e,label:n}:e.children?{...e,children:z(e.children,t,n)}:e)}function B(){let[e,t]=(0,D.useState)(R);return(0,C.jsx)(u,{"aria-label":`Plans`,items:e,renamable:!0,onRename:(e,n)=>t(t=>z(t,e.id,n)),defaultExpanded:[`q1`],className:`w-full max-w-xs rounded-lg border border-border p-1`,children:({rows:e})=>e.map(e=>e.kind===`item`?(0,C.jsx)(c,{row:e.row,children:t=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(s,{}),t.renaming?(0,C.jsx)(o,{}):(0,C.jsx)(`span`,{className:`flex-1 truncate`,children:e.row.item.label})]})},e.key):null)})}var V=`import { useState } from "react"
import { TreeViewItem, TreeViewRename, TreeViewRoot, TreeViewToggle, type Entry } from "@kitora/collections"

const START: Entry[] = [
  { id: "q1", label: "Q1 plan", children: [{ id: "hiring", label: "Hiring" }, { id: "budget", label: "Budget" }] },
  { id: "q2", label: "Q2 plan" },
]

/** Renames \`id\` to \`label\` anywhere in the tree. */
function renamed(items: readonly Entry[], id: string, label: string): Entry[] {
  return items.map((item) => (item.id === id ? { ...item, label } : item.children ? { ...item, children: renamed(item.children, id, label) } : item))
}

/**
 * Inline rename in a tree built from the parts: \`renamable\` and \`onRename\` on the root, and \`TreeViewRename\` in the row,
 * shown in place of the label while that row is renamed (\`state.renaming\`). F2 or the row's menu (the Menu key, Shift+F10)
 * opens it; Enter or leaving the field saves, Escape cancels, an empty name is refused.
 */
export function ComposeTreeRename() {
  const [items, setItems] = useState<readonly Entry[]>(START)
  return (
    <TreeViewRoot aria-label="Plans" items={items} renamable onRename={(item, label) => setItems((current) => renamed(current, item.id, label))} defaultExpanded={["q1"]} className="w-full max-w-xs rounded-lg border border-border p-1">
      {({ rows }) =>
        rows.map((d) =>
          d.kind === "item" ? (
            <TreeViewItem key={d.key} row={d.row}>
              {(state) => (
                <>
                  <TreeViewToggle />
                  {state.renaming ? <TreeViewRename /> : <span className="flex-1 truncate">{d.row.item.label}</span>}
                </>
              )}
            </TreeViewItem>
          ) : null,
        )
      }
    </TreeViewRoot>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>h(()=>import(`./compose-tree-rename-BIlJQsO7.js`),[]));var H=[{id:`eng`,label:`Engineering`,children:[{id:`web`,label:`Web`},{id:`ios`,label:`iOS`},{id:`android`,label:`Android`}]},{id:`ops`,label:`Operations`,children:[{id:`sre`,label:`SRE`},{id:`it`,label:`IT`}]}];function U(){let[e,a]=(0,D.useState)(null);return(0,C.jsxs)(`form`,{className:`flex w-full max-w-md flex-col gap-3 p-3 text-[13px]`,onSubmit:e=>{e.preventDefault(),a(JSON.stringify([...new FormData(e.currentTarget)].map(([e,t])=>[e,String(t)])))},children:[(0,C.jsxs)(i,{name:`teams`,children:[(0,C.jsx)(r,{children:`Teams`}),(0,C.jsx)(y,{items:H,selectionMode:`multiple`,defaultValue:[`web`],required:!0}),(0,C.jsx)(n,{children:`Every team that reviews the change.`}),(0,C.jsx)(t,{match:`valueMissing`,children:`Pick at least one team.`})]}),(0,C.jsx)(_,{type:`submit`,size:`sm`,className:`self-start`,children:`Submit`}),(0,C.jsxs)(`p`,{role:`status`,className:`text-muted-foreground`,children:[`FormData: `,(0,C.jsx)(`code`,{children:e??`not submitted`})]})]})}var W=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Field, FieldDescription, FieldError, FieldLabel } from "@kitora/ui/field"
import { TreeSelect } from "@kitora/collections/ui"
const TEAMS = [
  { id: "eng", label: "Engineering", children: [{ id: "web", label: "Web" }, { id: "ios", label: "iOS" }, { id: "android", label: "Android" }] },
  { id: "ops", label: "Operations", children: [{ id: "sre", label: "SRE" }, { id: "it", label: "IT" }] },
]

/** Posts with a plain \`<form>\`: \`name\` writes one hidden input per id, \`required\` refuses an empty submit, a Field's label names it. */
export function BasicTreeSelectForm() {
  const [posted, setPosted] = useState<string | null>(null)
  return (
    <form
      className="flex w-full max-w-md flex-col gap-3 p-3 text-[13px]"
      onSubmit={(event) => {
        event.preventDefault()
        setPosted(JSON.stringify([...new FormData(event.currentTarget)].map(([key, value]) => [key, String(value)])))
      }}
    >
      <Field name="teams">
        <FieldLabel>Teams</FieldLabel>
        <TreeSelect items={TEAMS} selectionMode="multiple" defaultValue={["web"]} required />
        <FieldDescription>Every team that reviews the change.</FieldDescription>
        <FieldError match="valueMissing">Pick at least one team.</FieldError>
      </Field>
      <Button type="submit" size="sm" className="self-start">
        Submit
      </Button>
      <p role="status" className="text-muted-foreground">
        FormData: <code>{posted ?? "not submitted"}</code>
      </p>
    </form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>h(()=>import(`./tree-select-form-tPLg7wJR.js`),[]));var G=[{id:`docs`,label:`المستندات`,children:[{id:`reports`,label:`التقارير`,children:[{id:`q1`,label:`الربع الأول.pdf`},{id:`q2`,label:`الربع الثاني.pdf`}]},{id:`notes`,label:`ملاحظات.txt`}]},{id:`photos`,label:`الصور`,children:[{id:`trip`,label:`رحلة.jpg`}]},{id:`readme`,label:`اقرأني.md`}],K=[{id:`asia`,label:`آسيا`,children:[{id:`japan`,label:`اليابان`,children:[{id:`tokyo`,label:`طوكيو`},{id:`osaka`,label:`أوساكا`}]}]},{id:`africa`,label:`أفريقيا`,children:[{id:`egypt`,label:`مصر`,children:[{id:`cairo`,label:`القاهرة`}]}]}];function q(){return(0,C.jsxs)(`div`,{dir:`rtl`,lang:`ar`,className:`flex flex-wrap items-start gap-4`,children:[(0,C.jsx)(p,{"aria-label":`الملفات`,items:G,defaultExpanded:[`docs`],defaultValue:[`notes`],className:`w-64 rounded-lg border border-border p-1`}),(0,C.jsx)(`div`,{className:`w-72`,children:(0,C.jsx)(b,{"aria-label":`المدينة`,placeholder:`اختر مدينة…`,items:K,defaultValue:[`asia`,`japan`,`tokyo`]})})]})}var J=`import { Cascader, TreeView } from "@kitora/collections"

const FOLDERS = [
  {
    id: "docs",
    label: "المستندات",
    children: [
      { id: "reports", label: "التقارير", children: [{ id: "q1", label: "الربع الأول.pdf" }, { id: "q2", label: "الربع الثاني.pdf" }] },
      { id: "notes", label: "ملاحظات.txt" },
    ],
  },
  { id: "photos", label: "الصور", children: [{ id: "trip", label: "رحلة.jpg" }] },
  { id: "readme", label: "اقرأني.md" },
]

const PLACES = [
  { id: "asia", label: "آسيا", children: [{ id: "japan", label: "اليابان", children: [{ id: "tokyo", label: "طوكيو" }, { id: "osaka", label: "أوساكا" }] }] },
  { id: "africa", label: "أفريقيا", children: [{ id: "egypt", label: "مصر", children: [{ id: "cairo", label: "القاهرة" }] }] },
]

/**
 * Right to left: inside \`dir="rtl"\` the tree's ← opens a folder or steps into it and → closes it or steps out, the
 * chevrons point the reading way, and the cascader's clear button and columns sit at the inline end.
 */
export function RightToLeftTrees() {
  return (
    <div dir="rtl" lang="ar" className="flex flex-wrap items-start gap-4">
      <TreeView aria-label="الملفات" items={FOLDERS} defaultExpanded={["docs"]} defaultValue={["notes"]} className="w-64 rounded-lg border border-border p-1" />
      <div className="w-72">
        <Cascader aria-label="المدينة" placeholder="اختر مدينة…" items={PLACES} defaultValue={["asia", "japan", "tokyo"]} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>h(()=>import(`./right-to-left-acAp0jxZ.js`),[]));function Y(){return(0,C.jsxs)(`div`,{children:[(0,C.jsx)(a,{title:`Basics: trees`,children:"Trees are items with `children`. The same items drive a tree view, a tree select and a cascader."}),(0,C.jsx)(x,{n:1,title:`TreeView`,blurb:"Flat `treeitem` rows with level, position and set size.",code:E,children:(0,C.jsx)(S,{testId:`basics-tree-view`,children:(0,C.jsx)(T,{})})}),(0,C.jsx)(x,{n:2,title:`TreeSelect`,blurb:`A field that opens a filterable tree.`,code:A,children:(0,C.jsx)(S,{testId:`basics-tree-select`,children:(0,C.jsx)(k,{})})}),(0,C.jsx)(x,{n:3,title:`Cascader`,blurb:`Columns, one per level of the path.`,code:N,children:(0,C.jsx)(S,{testId:`basics-cascader`,children:(0,C.jsx)(M,{})})}),(0,C.jsx)(x,{n:4,title:`Compose a tree view`,blurb:"The preset rebuilt from `TreeViewRoot` / `TreeViewItem` / `TreeViewToggle` / `TreeViewCheck` / `TreeViewStatus` / `TreeViewEmpty` (also `TreeView.Root` and so on): a checkbox tree with a size column and a branch whose children load on first expand.",code:L,children:(0,C.jsx)(S,{testId:`basics-tree-view-compose`,children:(0,C.jsx)(I,{})})}),(0,C.jsx)(x,{n:5,title:`Submits with a form`,blurb:"`name` posts one entry per chosen id with a plain `<form>`, `required` refuses an empty submit and focuses the field, and inside a `Field` the label names it and the error describes it.",code:W,children:(0,C.jsx)(S,{testId:`basics-tree-select-form`,children:(0,C.jsx)(U,{})})}),(0,C.jsx)(x,{n:6,title:`Right to left`,blurb:'Inside `dir="rtl"` the tree mirrors: ← opens a folder or steps into it, → closes it or steps out (the WAI-ARIA tree pattern, mirrored), and the chevrons point the reading way. The cascader\'s clear button sits at the inline end.',code:J,children:(0,C.jsx)(S,{testId:`basics-trees-rtl`,children:(0,C.jsx)(q,{})})}),(0,C.jsx)(x,{n:7,title:`Rename in a composed tree`,blurb:"`renamable` and `onRename` on the root, `TreeViewRename` in place of the label while `state.renaming`. F2 or the row's menu opens it; Enter or a blur saves, Escape cancels.",code:V,children:(0,C.jsx)(S,{testId:`basics-tree-rename`,children:(0,C.jsx)(B,{})})})]})}export{Y as component};