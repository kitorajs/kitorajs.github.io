import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{n as t,t as n}from"./italic-DxRW2qia.js";import{t as r}from"./code-eKedDJ8J.js";import{t as i}from"./ellipsis-BestnnOQ.js";import{s as a}from"./kit-docs-CvNs0WqT.js";import{t as o}from"./file-text-jZN1FxYo.js";import{t as s}from"./folder-BMIhIs7B.js";import{t as c}from"./image-DtLVBYKl.js";import{t as l}from"./link-BN2ds8OS.js";import{t as u}from"./redo-2-NIVObKqE.js";import{t as d}from"./strikethrough-IAMe67aP.js";import{t as f}from"./table-hp90NAhr.js";import{n as p,t as m}from"./text-align-end-B2KohG6r.js";import{t as h}from"./text-align-justify-NikzJ5uj.js";import{t as g}from"./text-align-start-BHWjYlO7.js";import{t as _}from"./undo-2-CNsU07mN.js";import{t as v}from"./underline-D5UPa3xY.js";import{l as y}from"./model-DKICKTZE.js";import{Bc as b,Cc as x,Ic as S,ki as C}from"./index-9y5uwRd3.js";import{n as w,r as T,t as E}from"./menu-DVJj8WGf.js";import{a as D,i as O,n as k,o as A,r as j,t as M}from"./toolbar-CfyOqu42.js";import"./kit-gallery-B-Yr9fP4.js";import{t as N}from"./example-CZLJLtIC.js";import{t as P}from"./-kits.collections.shared-COb_zFiP.js";var F=e(b(),1),I=S();function L(){let[e,t]=(0,F.useState)([]),[n,r]=(0,F.useState)(!0),[i,a]=(0,F.useState)(!1),[o,s]=(0,F.useState)(`compact`),c=e=>t(t=>[e,...t].slice(0,5)),l=[y(`new`,``,[{id:`new-file`,label:`New file`,hint:`⌘N`},{id:`new-window`,label:`New window`,hint:`⇧⌘N`}]),y(`open`,``,[{id:`open`,label:`Open…`,hint:`⌘O`},{id:`recent`,label:`Open recent`,children:[{id:`r1`,label:`Kitora`,description:`~/projects`},{id:`r2`,label:`lorewire`,description:`~/projects`},{id:`more`,label:`More`,children:[{id:`r3`,label:`gqlkit`},{id:`r4`,label:`runbay`}]}]}]),y(`save`,``,[{id:`save`,label:`Save`,hint:`⌘S`},{id:`save-as`,label:`Save as…`,hint:`⇧⌘S`},{id:`export`,label:`Export`,disabled:!0}])],u=[y(`show`,`Show`,[{id:`wrap`,label:`Word wrap`,type:`checkbox`,checked:n,onSelect:()=>r(!n),hint:`⌥Z`},{id:`minimap`,label:`Minimap`,type:`checkbox`,checked:i,onSelect:()=>a(!i)}]),y(`density`,`Density`,[`compact`,`cozy`,`roomy`].map(e=>({id:e,label:e[0]?.toUpperCase()+e.slice(1),type:`radio`,checked:o===e,onSelect:()=>s(e)})))];return(0,I.jsxs)(`div`,{className:`space-y-3`,children:[(0,I.jsx)(T,{"aria-label":`Editor`,className:`w-fit`,onAction:e=>c(e.type===`item`||!e.type?`Ran ${e.label}`:`Toggled ${e.label}`),menus:[{id:`file`,label:`File`,items:l},{id:`edit`,label:`Edit`,items:[{id:`undo`,label:`Undo`,hint:`⌘Z`},{id:`redo`,label:`Redo`,hint:`⇧⌘Z`},{id:`find`,label:`Find`,hint:`⌘F`},{id:`replace`,label:`Replace`,hint:`⌥⌘F`}]},{id:`view`,label:`View`,items:u},{id:`go`,label:`Go`,disabled:!0,items:[]},{id:`help`,label:`Help`,items:[{id:`docs`,label:`Documentation`},{id:`keys`,label:`Keyboard shortcuts`,hint:`⌘/`},{id:`about`,label:`About`}]}]}),(0,I.jsxs)(`div`,{className:`flex gap-4 text-[12px] text-muted-foreground tabular-nums`,children:[(0,I.jsxs)(`span`,{children:[`Wrap: `,n?`on`:`off`]}),(0,I.jsxs)(`span`,{children:[`Minimap: `,i?`on`:`off`]}),(0,I.jsxs)(`span`,{children:[`Density: `,o]})]}),(0,I.jsx)(`ol`,{className:`min-h-[90px] space-y-0.5 rounded-md border border-border bg-muted/30 p-2 text-[12px]`,children:e.length===0?(0,I.jsx)(`li`,{className:`text-muted-foreground`,children:`Use the menubar: Tab to it, then ← → ↓.`}):e.map((e,t)=>(0,I.jsx)(`li`,{className:t===0?``:`text-muted-foreground`,children:e},`${t}-${e}`))})]})}var R=`import { useState } from "react"
import { Menubar, section, type CollectionNode, type MenuItem } from "@kitora/collections"

/** A desktop-style menubar: checkbox and radio items keep the menu open, submenus nest, shortcuts are hints. */
export function MenusApp() {
  const [log, setLog] = useState<string[]>([])
  const [wrap, setWrap] = useState(true)
  const [minimap, setMinimap] = useState(false)
  const [density, setDensity] = useState("compact")
  const note = (line: string) => setLog((l) => [line, ...l].slice(0, 5))

  const file: readonly CollectionNode<MenuItem>[] = [
    section("new", "", [
      { id: "new-file", label: "New file", hint: "⌘N" },
      { id: "new-window", label: "New window", hint: "⇧⌘N" },
    ]),
    section("open", "", [
      { id: "open", label: "Open…", hint: "⌘O" },
      {
        id: "recent",
        label: "Open recent",
        children: [
          { id: "r1", label: "Kitora", description: "~/projects" },
          { id: "r2", label: "lorewire", description: "~/projects" },
          { id: "more", label: "More", children: [{ id: "r3", label: "gqlkit" }, { id: "r4", label: "runbay" }] },
        ],
      },
    ]),
    section("save", "", [
      { id: "save", label: "Save", hint: "⌘S" },
      { id: "save-as", label: "Save as…", hint: "⇧⌘S" },
      { id: "export", label: "Export", disabled: true },
    ]),
  ]
  const view: readonly CollectionNode<MenuItem>[] = [
    section("show", "Show", [
      { id: "wrap", label: "Word wrap", type: "checkbox", checked: wrap, onSelect: () => setWrap(!wrap), hint: "⌥Z" },
      { id: "minimap", label: "Minimap", type: "checkbox", checked: minimap, onSelect: () => setMinimap(!minimap) },
    ]),
    section("density", "Density", ["compact", "cozy", "roomy"].map((d) => ({ id: d, label: d[0]?.toUpperCase() + d.slice(1), type: "radio" as const, checked: density === d, onSelect: () => setDensity(d) }))),
  ]
  return (
    <div className="space-y-3">
      <Menubar
        aria-label="Editor"
        className="w-fit"
        onAction={(item) => note(item.type === "item" || !item.type ? \`Ran \${item.label}\` : \`Toggled \${item.label}\`)}
        menus={[
          { id: "file", label: "File", items: file },
          { id: "edit", label: "Edit", items: [{ id: "undo", label: "Undo", hint: "⌘Z" }, { id: "redo", label: "Redo", hint: "⇧⌘Z" }, { id: "find", label: "Find", hint: "⌘F" }, { id: "replace", label: "Replace", hint: "⌥⌘F" }] },
          { id: "view", label: "View", items: view },
          { id: "go", label: "Go", disabled: true, items: [] },
          { id: "help", label: "Help", items: [{ id: "docs", label: "Documentation" }, { id: "keys", label: "Keyboard shortcuts", hint: "⌘/" }, { id: "about", label: "About" }] },
        ]}
      />
      <div className="flex gap-4 text-[12px] text-muted-foreground tabular-nums">
        <span>Wrap: {wrap ? "on" : "off"}</span>
        <span>Minimap: {minimap ? "on" : "off"}</span>
        <span>Density: {density}</span>
      </div>
      <ol className="min-h-[90px] space-y-0.5 rounded-md border border-border bg-muted/30 p-2 text-[12px]">
        {log.length === 0 ? <li className="text-muted-foreground">Use the menubar: Tab to it, then ← → ↓.</li> : log.map((l, i) => <li key={\`\${i}-\${l}\`} className={i === 0 ? "" : "text-muted-foreground"}>{l}</li>)}
      </ol>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>x(()=>import(`./menus-app-C595i_Fd.js`),[]));var z=[{id:`designs`,name:`Designs`,kind:`folder`,size:`—`},{id:`brief`,name:`Brief.pdf`,kind:`doc`,size:`1.2 MB`},{id:`cover`,name:`Cover.png`,kind:`image`,size:`640 KB`},{id:`notes`,name:`Notes.md`,kind:`doc`,size:`8 KB`}];function B(e,t){return[y(`open`,``,e===`folder`?[{id:`open`,label:`Open ${t}`},{id:`new-file`,label:`New file inside`}]:[{id:`open`,label:`Open ${t}`,hint:`↵`},{id:`open-with`,label:`Open with`,children:[{id:`preview`,label:`Preview`},{id:`editor`,label:`Text editor`,disabled:e===`image`}]}]),y(`edit`,``,[{id:`rename`,label:`Rename`,hint:`F2`},{id:`duplicate`,label:`Duplicate`},{id:`copy-path`,label:`Copy path`,hint:`⌥⌘C`}]),y(`danger`,``,[{id:`delete`,label:`Delete`,danger:!0,hint:`⌘⌫`}])]}function V(){let[e,t]=(0,F.useState)(null);return(0,I.jsxs)(`div`,{className:`max-w-md space-y-2`,children:[(0,I.jsx)(E,{items:[],itemsFor:e=>{let t=e.closest(`[data-file]`),n=z.find(e=>e.id===t?.dataset.file);return n?B(n.kind,n.name):[{id:`new-folder`,label:`New folder`},{id:`paste`,label:`Paste`,disabled:!0}]},onAction:e=>t(e.label),className:`rounded-lg border border-border`,children:(0,I.jsxs)(`div`,{role:`list`,"aria-label":`Files`,className:`p-1`,children:[z.map(e=>(0,I.jsxs)(`div`,{role:`listitem`,"data-file":e.id,tabIndex:0,className:`flex h-7 items-center gap-2 rounded-[5px] px-2 text-[13px] outline-none hover:bg-accent focus-visible:bg-accent`,children:[e.kind===`folder`?(0,I.jsx)(s,{className:`size-3.5 text-amber-500`}):e.kind===`image`?(0,I.jsx)(c,{className:`size-3.5 text-sky-500`}):(0,I.jsx)(o,{className:`size-3.5 text-muted-foreground`}),(0,I.jsx)(`span`,{className:`flex-1`,children:e.name}),(0,I.jsx)(`span`,{className:`text-[11px] text-muted-foreground tabular-nums`,children:e.size})]},e.id)),(0,I.jsx)(`div`,{className:`h-10`})]})}),(0,I.jsx)(`p`,{className:`text-[12px] text-muted-foreground`,children:e?`Chose: ${e}`:`Right-click a row or the empty space below the rows.`})]})}var H=`import { useState } from "react"
import { FileText, Folder, Image } from "lucide-react"
import { ContextMenu, section, type CollectionNode, type MenuItem } from "@kitora/collections"

const FILES = [
  { id: "designs", name: "Designs", kind: "folder", size: "—" },
  { id: "brief", name: "Brief.pdf", kind: "doc", size: "1.2 MB" },
  { id: "cover", name: "Cover.png", kind: "image", size: "640 KB" },
  { id: "notes", name: "Notes.md", kind: "doc", size: "8 KB" },
] as const

function menuFor(kind: string, name: string): readonly CollectionNode<MenuItem>[] {
  const open: MenuItem[] = kind === "folder" ? [{ id: "open", label: \`Open \${name}\` }, { id: "new-file", label: "New file inside" }] : [{ id: "open", label: \`Open \${name}\`, hint: "↵" }, { id: "open-with", label: "Open with", children: [{ id: "preview", label: "Preview" }, { id: "editor", label: "Text editor", disabled: kind === "image" }] }]
  return [
    section("open", "", open),
    section("edit", "", [{ id: "rename", label: "Rename", hint: "F2" }, { id: "duplicate", label: "Duplicate" }, { id: "copy-path", label: "Copy path", hint: "⌥⌘C" }]),
    section("danger", "", [{ id: "delete", label: "Delete", danger: true, hint: "⌘⌫" }]),
  ]
}

/** One context menu, different items per row: the menu reads the row that was right-clicked (or focused for Shift+F10). */
export function MenusContext() {
  const [last, setLast] = useState<string | null>(null)
  return (
    <div className="max-w-md space-y-2">
      <ContextMenu
        items={[]}
        itemsFor={(target) => {
          const row = target.closest<HTMLElement>("[data-file]")
          const file = FILES.find((f) => f.id === row?.dataset.file)
          return file ? menuFor(file.kind, file.name) : [{ id: "new-folder", label: "New folder" }, { id: "paste", label: "Paste", disabled: true }]
        }}
        onAction={(item) => setLast(item.label)}
        className="rounded-lg border border-border"
      >
        <div role="list" aria-label="Files" className="p-1">
          {FILES.map((f) => (
            <div key={f.id} role="listitem" data-file={f.id} tabIndex={0} className="flex h-7 items-center gap-2 rounded-[5px] px-2 text-[13px] outline-none hover:bg-accent focus-visible:bg-accent">
              {f.kind === "folder" ? <Folder className="size-3.5 text-amber-500" /> : f.kind === "image" ? <Image className="size-3.5 text-sky-500" /> : <FileText className="size-3.5 text-muted-foreground" />}
              <span className="flex-1">{f.name}</span>
              <span className="text-[11px] text-muted-foreground tabular-nums">{f.size}</span>
            </div>
          ))}
          <div className="h-10" />
        </div>
      </ContextMenu>
      <p className="text-[12px] text-muted-foreground">{last ? \`Chose: \${last}\` : "Right-click a row or the empty space below the rows."}</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>x(()=>import(`./menus-context-tFGoCSLz.js`),[]));var U=[`Paragraph`,`Heading 1`,`Heading 2`,`Heading 3`,`Quote`,`Code block`];function W(){let[e,a]=(0,F.useState)(`Paragraph`),[o,s]=(0,F.useState)([`left`]),[y,b]=(0,F.useState)([`bold`]),[x,S]=(0,F.useState)(``);return(0,I.jsxs)(`div`,{className:`space-y-3`,children:[(0,I.jsxs)(M,{"aria-label":`Text formatting`,className:`w-full max-w-2xl flex-wrap`,children:[(0,I.jsx)(k,{"aria-label":`Undo`,onClick:()=>S(`Undo`),children:(0,I.jsx)(_,{})}),(0,I.jsx)(k,{"aria-label":`Redo`,disabled:!0,children:(0,I.jsx)(u,{})}),(0,I.jsx)(j,{}),(0,I.jsx)(w,{items:U.map(t=>({id:t,label:t,type:`radio`,checked:t===e,keepOpen:!1,onSelect:()=>a(t)})),trigger:(0,I.jsxs)(k,{className:`w-28 justify-between`,children:[(0,I.jsx)(`span`,{className:`truncate`,children:e}),(0,I.jsx)(C,{className:`opacity-60`})]})}),(0,I.jsx)(j,{}),(0,I.jsx)(A,{type:`multiple`,label:`Marks`,value:y,onValueChange:b,choices:[{value:`bold`,label:`Bold`,icon:(0,I.jsx)(t,{})},{value:`italic`,label:`Italic`,icon:(0,I.jsx)(n,{})},{value:`underline`,label:`Underline`,icon:(0,I.jsx)(v,{})},{value:`strike`,label:`Strikethrough`,icon:(0,I.jsx)(d,{})}]}),(0,I.jsx)(j,{}),(0,I.jsx)(A,{type:`single`,label:`Alignment`,value:o,onValueChange:e=>s(e.length>0?e:o),choices:[{value:`left`,label:`Align left`,icon:(0,I.jsx)(g,{})},{value:`center`,label:`Align center`,icon:(0,I.jsx)(p,{})},{value:`right`,label:`Align right`,icon:(0,I.jsx)(m,{})},{value:`justify`,label:`Justify`,icon:(0,I.jsx)(h,{})}]}),(0,I.jsx)(j,{}),(0,I.jsx)(D,{"aria-label":`Inline code`,children:(0,I.jsx)(r,{})}),(0,I.jsx)(O,{}),(0,I.jsx)(w,{placement:`bottom-end`,onAction:e=>S(e.label),items:[{id:`link`,label:`Link`,icon:(0,I.jsx)(l,{}),hint:`⌘K`},{id:`image`,label:`Image`,icon:(0,I.jsx)(c,{})},{id:`table`,label:`Table`,icon:(0,I.jsx)(f,{}),children:[{id:`t2`,label:`2 × 2`},{id:`t3`,label:`3 × 3`},{id:`t4`,label:`4 × 4`}]}],trigger:(0,I.jsx)(k,{"aria-label":`More`,children:(0,I.jsx)(i,{})})})]}),(0,I.jsxs)(`p`,{className:`text-[12px] text-muted-foreground tabular-nums`,children:[`Block: `,e,` · Marks: `,y.join(`, `)||`none`,` · Align: `,o[0],` `,x?`· Inserted ${x}`:``]})]})}var G=`import { useState } from "react"
import { AlignCenter, AlignJustify, AlignLeft, AlignRight, Bold, ChevronDown, Code, Image, Italic, Link, MoreHorizontal, Redo2, Strikethrough, Table, Underline, Undo2 } from "lucide-react"
import { Menu, Toolbar, ToolbarButton, ToolbarSeparator, ToolbarSpacer, ToolbarToggle, ToolbarToggleGroup } from "@kitora/collections"

const BLOCKS = ["Paragraph", "Heading 1", "Heading 2", "Heading 3", "Quote", "Code block"]

/** An editor toolbar: toggles, a single-choice alignment group, a multi-choice marks group, and menus that are part of the roving order. */
export function MenusToolbar() {
  const [block, setBlock] = useState("Paragraph")
  const [align, setAlign] = useState<string[]>(["left"])
  const [marks, setMarks] = useState<string[]>(["bold"])
  const [last, setLast] = useState("")
  return (
    <div className="space-y-3">
      <Toolbar aria-label="Text formatting" className="w-full max-w-2xl flex-wrap">
        <ToolbarButton aria-label="Undo" onClick={() => setLast("Undo")}><Undo2 /></ToolbarButton>
        <ToolbarButton aria-label="Redo" disabled><Redo2 /></ToolbarButton>
        <ToolbarSeparator />
        <Menu
          items={BLOCKS.map((b) => ({ id: b, label: b, type: "radio" as const, checked: b === block, keepOpen: false, onSelect: () => setBlock(b) }))}
          trigger={<ToolbarButton className="w-28 justify-between"><span className="truncate">{block}</span><ChevronDown className="opacity-60" /></ToolbarButton>}
        />
        <ToolbarSeparator />
        <ToolbarToggleGroup
          type="multiple"
          label="Marks"
          value={marks}
          onValueChange={setMarks}
          choices={[
            { value: "bold", label: "Bold", icon: <Bold /> },
            { value: "italic", label: "Italic", icon: <Italic /> },
            { value: "underline", label: "Underline", icon: <Underline /> },
            { value: "strike", label: "Strikethrough", icon: <Strikethrough /> },
          ]}
        />
        <ToolbarSeparator />
        <ToolbarToggleGroup
          type="single"
          label="Alignment"
          value={align}
          onValueChange={(v) => setAlign(v.length > 0 ? v : align)}
          choices={[
            { value: "left", label: "Align left", icon: <AlignLeft /> },
            { value: "center", label: "Align center", icon: <AlignCenter /> },
            { value: "right", label: "Align right", icon: <AlignRight /> },
            { value: "justify", label: "Justify", icon: <AlignJustify /> },
          ]}
        />
        <ToolbarSeparator />
        <ToolbarToggle aria-label="Inline code"><Code /></ToolbarToggle>
        <ToolbarSpacer />
        <Menu
          placement="bottom-end"
          onAction={(item) => setLast(item.label)}
          items={[
            { id: "link", label: "Link", icon: <Link />, hint: "⌘K" },
            { id: "image", label: "Image", icon: <Image /> },
            { id: "table", label: "Table", icon: <Table />, children: [{ id: "t2", label: "2 × 2" }, { id: "t3", label: "3 × 3" }, { id: "t4", label: "4 × 4" }] },
          ]}
          trigger={<ToolbarButton aria-label="More"><MoreHorizontal /></ToolbarButton>}
        />
      </Toolbar>
      <p className="text-[12px] text-muted-foreground tabular-nums">
        Block: {block} · Marks: {marks.join(", ") || "none"} · Align: {align[0]} {last ? \`· Inserted \${last}\` : ""}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>x(()=>import(`./menus-toolbar-DmjdhOp0.js`),[]));function K(){return(0,I.jsxs)(`div`,{children:[(0,I.jsx)(a,{title:`Menus`,children:`Menus as in a desktop app: checkbox and radio items, deep submenus, menus that depend on what was clicked, and a toolbar that mixes buttons, toggle groups and menus in one roving row.`}),(0,I.jsx)(N,{n:1,title:`Desktop menubar`,blurb:`File › Open recent › More nests three levels; View has checkbox and radio items that stay open; Go is disabled and skipped.`,code:R,children:(0,I.jsx)(P,{testId:`menus-app`,children:(0,I.jsx)(L,{})})}),(0,I.jsx)(N,{n:2,title:`Context menu per row`,blurb:"`itemsFor` reads the right-clicked row: folders and files get different items, the empty space gets its own.",code:H,children:(0,I.jsx)(P,{testId:`menus-context`,children:(0,I.jsx)(V,{})})}),(0,I.jsx)(N,{n:3,title:`Editor toolbar`,blurb:`Undo/redo, a block-type menu, marks (multiple) and alignment (single) groups, a toggle and an overflow menu, all one tab stop.`,code:G,children:(0,I.jsx)(P,{testId:`menus-toolbar`,children:(0,I.jsx)(W,{})})})]})}export{K as component};