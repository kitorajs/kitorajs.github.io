import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{n as t,t as n}from"./italic-DYnJ5SLL.js";import{s as r}from"./kit-docs-DpYhPoxM.js";import{t as i}from"./link-DjljsuuA.js";import{t as a}from"./underline-DIqy0Gq3.js";import{l as o}from"./model-DKICKTZE.js";import{Bc as s,Cc as c,Ic as l}from"./index-q72zUtm9.js";import{n as u,r as d,t as f}from"./menu-BBnxNZeO.js";import{a as p,n as m,r as h,t as g}from"./toolbar-X6Sw9hkb.js";import"./kit-gallery-Atvibnty.js";import{t as _}from"./example-B8EaWveR.js";import{t as v}from"./-kits.collections.shared-C9jKxDoh.js";var y=e(s(),1),b=l(),x=[o(`edit`,``,[{id:`rename`,label:`Rename`,hint:`F2`},{id:`duplicate`,label:`Duplicate`,hint:`⌘D`},{id:`move`,label:`Move to`,children:[{id:`inbox`,label:`Inbox`},{id:`archive`,label:`Archive`},{id:`later`,label:`Later`,children:[{id:`tomorrow`,label:`Tomorrow`},{id:`next-week`,label:`Next week`}]}]}]),o(`danger`,``,[{id:`delete`,label:`Delete`,danger:!0,hint:`⌫`}])];function S(){let[e,t]=(0,y.useState)(`nothing yet`);return(0,b.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,b.jsx)(u,{items:x,onAction:e=>t(e.label),trigger:(0,b.jsx)(`button`,{type:`button`,className:`h-7 rounded-md border border-border bg-background px-2.5 text-[13px] hover:bg-accent`,children:`Actions`})}),(0,b.jsxs)(`span`,{className:`text-[12px] text-muted-foreground`,children:[`Last action: `,e]})]})}var C=`import { useState } from "react"
import { Menu, section, type CollectionNode, type MenuItem } from "@kitora/collections"

const ITEMS: readonly CollectionNode<MenuItem>[] = [
  section("edit", "", [
    { id: "rename", label: "Rename", hint: "F2" },
    { id: "duplicate", label: "Duplicate", hint: "⌘D" },
    {
      id: "move",
      label: "Move to",
      children: [
        { id: "inbox", label: "Inbox" },
        { id: "archive", label: "Archive" },
        { id: "later", label: "Later", children: [{ id: "tomorrow", label: "Tomorrow" }, { id: "next-week", label: "Next week" }] },
      ],
    },
  ]),
  section("danger", "", [{ id: "delete", label: "Delete", danger: true, hint: "⌫" }]),
]

/** A menu button with nested submenus: → opens a submenu, ← or Escape closes it. */
export function BasicMenu() {
  const [last, setLast] = useState("nothing yet")
  return (
    <div className="flex items-center gap-3">
      <Menu
        items={ITEMS}
        onAction={(item) => setLast(item.label)}
        trigger={<button type="button" className="h-7 rounded-md border border-border bg-background px-2.5 text-[13px] hover:bg-accent">Actions</button>}
      />
      <span className="text-[12px] text-muted-foreground">Last action: {last}</span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>c(()=>import(`./menu-BRdA5B-e.js`),[]));var w=[{id:`open`,label:`Open`},{id:`copy-link`,label:`Copy link`,hint:`⌘L`},{id:`share`,label:`Share`,children:[{id:`email`,label:`Email`},{id:`slack`,label:`Slack`}]},{id:`trash`,label:`Move to trash`,danger:!0}];function T(){let[e,t]=(0,y.useState)(null);return(0,b.jsx)(f,{items:w,onAction:e=>t(e.label),children:(0,b.jsx)(`div`,{tabIndex:0,className:`grid h-28 w-72 place-items-center rounded-lg border border-dashed border-border text-[13px] text-muted-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring/40`,children:e?`Chose: ${e}`:`Right-click here`})})}var E=`import { useState } from "react"
import { ContextMenu } from "@kitora/collections"

const ITEMS = [
  { id: "open", label: "Open" },
  { id: "copy-link", label: "Copy link", hint: "⌘L" },
  { id: "share", label: "Share", children: [{ id: "email", label: "Email" }, { id: "slack", label: "Slack" }] },
  { id: "trash", label: "Move to trash", danger: true },
]

/** Right-click the area, or focus it and press Shift+F10 / the Menu key. */
export function BasicContextMenu() {
  const [last, setLast] = useState<string | null>(null)
  return (
    <ContextMenu items={ITEMS} onAction={(item) => setLast(item.label)}>
      <div tabIndex={0} className="grid h-28 w-72 place-items-center rounded-lg border border-dashed border-border text-[13px] text-muted-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring/40">
        {last ? \`Chose: \${last}\` : "Right-click here"}
      </div>
    </ContextMenu>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>c(()=>import(`./context-menu-B0TU-eNT.js`),[]));function D(){let[e,t]=(0,y.useState)(`—`);return(0,b.jsxs)(`div`,{className:`space-y-2`,children:[(0,b.jsx)(d,{"aria-label":`App`,className:`w-fit`,onAction:e=>t(e.label),menus:[{id:`file`,label:`File`,items:[{id:`new`,label:`New file`,hint:`⌘N`},{id:`open`,label:`Open…`,hint:`⌘O`},{id:`save`,label:`Save`,hint:`⌘S`}]},{id:`edit`,label:`Edit`,items:[{id:`undo`,label:`Undo`,hint:`⌘Z`},{id:`redo`,label:`Redo`,hint:`⇧⌘Z`}]},{id:`view`,label:`View`,items:[{id:`zoom-in`,label:`Zoom in`},{id:`zoom-out`,label:`Zoom out`}]}]}),(0,b.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,children:[`Last command: `,e]})]})}var O=`import { useState } from "react"
import { Menubar } from "@kitora/collections"

/** A menubar: ←/→ across the bar, ↓ opens, and ←/→ keep walking while a menu is open. */
export function BasicMenubar() {
  const [last, setLast] = useState("—")
  return (
    <div className="space-y-2">
      <Menubar
        aria-label="App"
        className="w-fit"
        onAction={(item) => setLast(item.label)}
        menus={[
          { id: "file", label: "File", items: [{ id: "new", label: "New file", hint: "⌘N" }, { id: "open", label: "Open…", hint: "⌘O" }, { id: "save", label: "Save", hint: "⌘S" }] },
          { id: "edit", label: "Edit", items: [{ id: "undo", label: "Undo", hint: "⌘Z" }, { id: "redo", label: "Redo", hint: "⇧⌘Z" }] },
          { id: "view", label: "View", items: [{ id: "zoom-in", label: "Zoom in" }, { id: "zoom-out", label: "Zoom out" }] },
        ]}
      />
      <p className="text-[12px] text-muted-foreground">Last command: {last}</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>c(()=>import(`./menubar-CKUA-GWK.js`),[]));function k(){return(0,b.jsxs)(g,{"aria-label":`Formatting`,className:`w-fit`,children:[(0,b.jsx)(p,{"aria-label":`Bold`,children:(0,b.jsx)(t,{})}),(0,b.jsx)(p,{"aria-label":`Italic`,children:(0,b.jsx)(n,{})}),(0,b.jsx)(p,{"aria-label":`Underline`,children:(0,b.jsx)(a,{})}),(0,b.jsx)(h,{}),(0,b.jsx)(m,{"aria-label":`Insert link`,children:(0,b.jsx)(i,{})}),(0,b.jsx)(m,{children:`Clear`})]})}var A=`import { Bold, Italic, Link, Underline } from "lucide-react"
import { Toolbar, ToolbarButton, ToolbarSeparator, ToolbarToggle } from "@kitora/collections"

/** One tab stop for the whole row: ←/→ move between the buttons, Home/End jump to the ends. */
export function BasicToolbar() {
  return (
    <Toolbar aria-label="Formatting" className="w-fit">
      <ToolbarToggle aria-label="Bold"><Bold /></ToolbarToggle>
      <ToolbarToggle aria-label="Italic"><Italic /></ToolbarToggle>
      <ToolbarToggle aria-label="Underline"><Underline /></ToolbarToggle>
      <ToolbarSeparator />
      <ToolbarButton aria-label="Insert link"><Link /></ToolbarButton>
      <ToolbarButton>Clear</ToolbarButton>
    </Toolbar>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>c(()=>import(`./toolbar-DgDwEUxP.js`),[]));function j(){return(0,b.jsxs)(`div`,{children:[(0,b.jsx)(r,{title:`Basics: menus and toolbars`,children:`Menus, menubars and toolbars follow the APG patterns: roving focus over the items, typeahead, and → / ← for submenus. They render the Menu, Menubar and Toolbar parts of @kitora/primitives (the ones the ui dropdown menu, menubar and toolbar run on) under the kit's item-array API.`}),(0,b.jsx)(_,{n:1,title:`Menu with submenus`,blurb:`A menu button; ↓ or Enter opens it on the first item, ↑ on the last.`,code:C,children:(0,b.jsx)(v,{testId:`basics-menu`,children:(0,b.jsx)(S,{})})}),(0,b.jsx)(_,{n:2,title:`ContextMenu`,blurb:`Opens at the pointer, or at the focused element from the keyboard.`,code:E,children:(0,b.jsx)(v,{testId:`basics-context-menu`,children:(0,b.jsx)(T,{})})}),(0,b.jsx)(_,{n:3,title:`Menubar`,blurb:`Horizontal bar of menus; hovering switches menus once one is open.`,code:O,children:(0,b.jsx)(v,{testId:`basics-menubar`,children:(0,b.jsx)(D,{})})}),(0,b.jsx)(_,{n:4,title:`Toolbar`,blurb:`A row of controls with a single tab stop.`,code:A,children:(0,b.jsx)(v,{testId:`basics-toolbar`,children:(0,b.jsx)(k,{})})})]})}export{j as component};