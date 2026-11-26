import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{n,t as r}from"./avatar-DegXKoDd.js";import{t as i}from"./download-DmNVxFcg.js";import{t as a}from"./ellipsis-DbSYAn2x.js";import{t as o}from"./file-text-DcQTIaDt.js";import{t as s}from"./image-BbAdbuDr.js";import{t as c}from"./search-x-Cv0Bym2w.js";import{t as l}from"./table-BJdzd_E6.js";import{t as u}from"./input-C8M4VLUF.js";import{Bc as d,Cc as f,Ic as p,Sn as m,ti as h}from"./index-q72zUtm9.js";import{t as g}from"./item-list-CGKf_1kM.js";import{c as _,i as v,n as y,r as b,u as x}from"./item-hANTbFM7.js";var S=e({ItemListEmptyState:()=>E}),C=t(d(),1),w=p(),T=[`Atlas`,`Beacon`,`Compass`,`Delta`,`Ember`].map(e=>({id:e.toLowerCase(),label:e}));function E(){let[e,t]=(0,C.useState)(`zzz`),n=T.filter(t=>t.label.toLowerCase().includes(e.trim().toLowerCase()));return(0,w.jsxs)(`div`,{className:`w-full max-w-md space-y-2`,children:[(0,w.jsx)(u,{"aria-label":`Filter projects`,value:e,onChange:e=>t(e.target.value)}),(0,w.jsx)(g,{"aria-label":`Projects`,items:n,selectionMode:`single`,size:`sm`,renderEmptyState:()=>(0,w.jsxs)(`span`,{className:`flex items-center gap-2`,children:[(0,w.jsx)(c,{className:`size-4`,"aria-hidden":`true`}),` No project matches "`,e,`"`]})})]})}var D=e({ItemListMultiple:()=>k}),O=[{id:`ada`,name:`Ada Lovelace`,role:`Engineering`,initials:`AL`},{id:`grace`,name:`Grace Hopper`,role:`Engineering`,initials:`GH`},{id:`alan`,name:`Alan Turing`,role:`Research`,initials:`AT`},{id:`katherine`,name:`Katherine Johnson`,role:`Research`,initials:`KJ`},{id:`margaret`,name:`Margaret Hamilton`,role:`Design`,initials:`MH`},{id:`tim`,name:`Tim Berners-Lee`,role:`Design`,initials:`TB`,disabled:!0}];function k(){let[e,t]=(0,C.useState)([`grace`]);return(0,w.jsxs)(`div`,{className:`w-full max-w-md space-y-2`,children:[(0,w.jsx)(g,{"aria-label":`People`,items:O,getTextValue:e=>e.name,selectionMode:`multiple`,selectedKeys:e,onSelectionChange:t,size:`sm`,renderItem:e=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(_,{variant:`avatar`,children:(0,w.jsx)(r,{children:(0,w.jsx)(n,{children:e.initials})})}),(0,w.jsxs)(b,{children:[(0,w.jsx)(x,{children:e.name}),(0,w.jsx)(v,{children:e.role})]})]})}),(0,w.jsxs)(`div`,{className:`flex items-center gap-2 text-xs text-muted-foreground`,children:[(0,w.jsxs)(`span`,{children:[e.length,` selected`]}),(0,w.jsx)(h,{size:`xs`,variant:`outline`,disabled:e.length===0,onClick:()=>t([]),children:`Clear`})]})]})}var A=e({ItemListRowActions:()=>M}),j=[{id:`inv-1042`,label:`Invoice 1042`,detail:`Acme Corp, paid`},{id:`inv-1043`,label:`Invoice 1043`,detail:`Globex, due in 6 days`},{id:`inv-1044`,label:`Invoice 1044`,detail:`Initech, overdue`},{id:`inv-1045`,label:`Invoice 1045`,detail:`Umbrella, draft`}];function M(){let[e,t]=(0,C.useState)(`Press Enter on a row, or use its buttons.`);return(0,w.jsxs)(`div`,{className:`w-full max-w-md space-y-2`,children:[(0,w.jsx)(g,{"aria-label":`Invoices`,items:j,selectionMode:`single`,size:`sm`,onAction:e=>t(`Opened ${e.label}`),renderItem:e=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(b,{children:[(0,w.jsx)(x,{children:e.label}),(0,w.jsx)(v,{children:e.detail})]}),(0,w.jsxs)(y,{children:[(0,w.jsxs)(h,{size:`sm`,variant:`outline`,onClick:()=>t(`Downloaded ${e.label}`),children:[(0,w.jsx)(i,{}),` Download`]}),(0,w.jsx)(m,{size:`sm`,label:`More for ${e.label}`,onClick:()=>t(`Menu for ${e.label}`),children:(0,w.jsx)(a,{})})]})]})}),(0,w.jsx)(`p`,{"aria-live":`polite`,className:`text-xs text-muted-foreground`,children:e})]})}var N=e({ItemListSingle:()=>F}),P=[{id:`brief`,name:`Launch brief.docx`,detail:`Edited 2 hours ago`,icon:(0,w.jsx)(o,{})},{id:`budget`,name:`Budget 2027.xlsx`,detail:`Edited yesterday`,icon:(0,w.jsx)(l,{})},{id:`hero`,name:`Hero image.png`,detail:`Edited last week`,icon:(0,w.jsx)(s,{})},{id:`notes`,name:`Interview notes.docx`,detail:`Edited last month`,icon:(0,w.jsx)(o,{})}];function F(){let[e,t]=(0,C.useState)([`budget`]);return(0,w.jsxs)(`div`,{className:`w-full max-w-md space-y-2`,children:[(0,w.jsx)(g,{"aria-label":`Files`,items:P,selectionMode:`single`,selectionBehavior:`replace`,disallowEmptySelection:!0,selectedKeys:e,onSelectionChange:t,size:`sm`,renderItem:e=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(_,{variant:`icon`,children:e.icon}),(0,w.jsxs)(b,{children:[(0,w.jsx)(x,{children:e.name}),(0,w.jsx)(v,{children:e.detail})]})]})}),(0,w.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`Selected: `,P.find(t=>t.id===e[0])?.name??`nothing`]})]})}var I=e({ItemListVirtual:()=>R}),L=Array.from({length:1e4},(e,t)=>({id:`row-${t}`,label:`Ticket ${String(t+1).padStart(5,`0`)}`,detail:t%3==0?`Open`:t%3==1?`In review`:`Closed`}));function R(){let[e,t]=(0,C.useState)([]);return(0,w.jsxs)(`div`,{className:`w-full max-w-md space-y-2`,children:[(0,w.jsx)(g,{"aria-label":`Tickets`,items:L,virtual:!0,rowHeight:52,height:288,size:`xs`,selectionMode:`multiple`,selectedKeys:e,onSelectionChange:t,renderItem:e=>(0,w.jsxs)(b,{className:`gap-0`,children:[(0,w.jsx)(x,{children:e.label}),(0,w.jsx)(v,{className:`line-clamp-1`,children:e.detail})]})}),(0,w.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[e.length.toLocaleString(`en-US`),` of 10,000 selected`]})]})}var z=`import { useState } from "react"
import { SearchXIcon } from "lucide-react"
import { ItemList } from "@kitora/collections/ui"
import { Input } from "@kitora/ui/input"

const PROJECTS = ["Atlas", "Beacon", "Compass", "Delta", "Ember"].map((name) => ({ id: name.toLowerCase(), label: name }))

// With no rows the list shows \`renderEmptyState\` in a one-cell row, so the grid keeps a valid structure. Type a name
// that matches nothing.
export function ItemListEmptyState() {
  const [query, setQuery] = useState("zzz")
  const items = PROJECTS.filter((project) => project.label.toLowerCase().includes(query.trim().toLowerCase()))
  return (
    <div className="w-full max-w-md space-y-2">
      <Input aria-label="Filter projects" value={query} onChange={(event) => setQuery(event.target.value)} />
      <ItemList
        aria-label="Projects"
        items={items}
        selectionMode="single"
        size="sm"
        renderEmptyState={() => (
          <span className="flex items-center gap-2">
            <SearchXIcon className="size-4" aria-hidden="true" /> No project matches "{query}"
          </span>
        )}
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>f(()=>import(`./empty-state-BUOaMNnP.js`),[]));var B=`import { useState } from "react"
import { ItemList } from "@kitora/collections/ui"
import { Avatar, AvatarFallback } from "@kitora/ui/avatar"
import { Button } from "@kitora/ui/button"
import { ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@kitora/ui/item"

const PEOPLE = [
  { id: "ada", name: "Ada Lovelace", role: "Engineering", initials: "AL" },
  { id: "grace", name: "Grace Hopper", role: "Engineering", initials: "GH" },
  { id: "alan", name: "Alan Turing", role: "Research", initials: "AT" },
  { id: "katherine", name: "Katherine Johnson", role: "Research", initials: "KJ" },
  { id: "margaret", name: "Margaret Hamilton", role: "Design", initials: "MH" },
  { id: "tim", name: "Tim Berners-Lee", role: "Design", initials: "TB", disabled: true },
]

// Multiple selection with a checkbox per row. Space toggles, Shift+Up and Shift+Down extend a range, Shift+click
// selects a range, Ctrl or Cmd+A selects every enabled row, and Escape clears. A tap toggles on a touch screen.
export function ItemListMultiple() {
  const [selected, setSelected] = useState<string[]>(["grace"])
  return (
    <div className="w-full max-w-md space-y-2">
      <ItemList
        aria-label="People"
        items={PEOPLE}
        getTextValue={(person) => person.name}
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
        size="sm"
        renderItem={(person) => (
          <>
            <ItemMedia variant="avatar">
              <Avatar>
                <AvatarFallback>{person.initials}</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{person.name}</ItemTitle>
              <ItemDescription>{person.role}</ItemDescription>
            </ItemContent>
          </>
        )}
      />
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span>{selected.length} selected</span>
        <Button size="xs" variant="outline" disabled={selected.length === 0} onClick={() => setSelected([])}>
          Clear
        </Button>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>f(()=>import(`./multiple-DjUAvX8W.js`),[]));var V=`import { useState } from "react"
import { DownloadIcon, MoreHorizontalIcon } from "lucide-react"
import { ItemList } from "@kitora/collections/ui"
import { Button } from "@kitora/ui/button"
import { IconButton } from "@kitora/ui/icon-button"
import { ItemActions, ItemContent, ItemDescription, ItemTitle } from "@kitora/ui/item"

const INVOICES = [
  { id: "inv-1042", label: "Invoice 1042", detail: "Acme Corp, paid" },
  { id: "inv-1043", label: "Invoice 1043", detail: "Globex, due in 6 days" },
  { id: "inv-1044", label: "Invoice 1044", detail: "Initech, overdue" },
  { id: "inv-1045", label: "Invoice 1045", detail: "Umbrella, draft" },
]

// Rows that hold buttons. The list is one tab stop; on a row, Right (Left in right-to-left text) moves into its
// actions and back. Enter or a double click on a row runs \`onAction\`; a click on a button is the button's own.
export function ItemListRowActions() {
  const [log, setLog] = useState("Press Enter on a row, or use its buttons.")
  return (
    <div className="w-full max-w-md space-y-2">
      <ItemList
        aria-label="Invoices"
        items={INVOICES}
        selectionMode="single"
        size="sm"
        onAction={(invoice) => setLog(\`Opened \${invoice.label}\`)}
        renderItem={(invoice) => (
          <>
            <ItemContent>
              <ItemTitle>{invoice.label}</ItemTitle>
              <ItemDescription>{invoice.detail}</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="sm" variant="outline" onClick={() => setLog(\`Downloaded \${invoice.label}\`)}>
                <DownloadIcon /> Download
              </Button>
              <IconButton size="sm" label={\`More for \${invoice.label}\`} onClick={() => setLog(\`Menu for \${invoice.label}\`)}>
                <MoreHorizontalIcon />
              </IconButton>
            </ItemActions>
          </>
        )}
      />
      <p aria-live="polite" className="text-xs text-muted-foreground">
        {log}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>f(()=>import(`./row-actions-CNpQ_TT6.js`),[]));var H=`import { useState } from "react"
import { FileTextIcon, ImageIcon, TableIcon } from "lucide-react"
import { ItemList } from "@kitora/collections/ui"
import { ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@kitora/ui/item"

const FILES = [
  { id: "brief", name: "Launch brief.docx", detail: "Edited 2 hours ago", icon: <FileTextIcon /> },
  { id: "budget", name: "Budget 2027.xlsx", detail: "Edited yesterday", icon: <TableIcon /> },
  { id: "hero", name: "Hero image.png", detail: "Edited last week", icon: <ImageIcon /> },
  { id: "notes", name: "Interview notes.docx", detail: "Edited last month", icon: <FileTextIcon /> },
]

// Single selection in the file-manager style: a click (and an arrow key) makes the row the only selected one.
// Up and Down move, Home and End jump, typing a name jumps to it, and Tab leaves the list.
export function ItemListSingle() {
  const [selected, setSelected] = useState<string[]>(["budget"])
  return (
    <div className="w-full max-w-md space-y-2">
      <ItemList
        aria-label="Files"
        items={FILES}
        selectionMode="single"
        selectionBehavior="replace"
        disallowEmptySelection
        selectedKeys={selected}
        onSelectionChange={setSelected}
        size="sm"
        renderItem={(file) => (
          <>
            <ItemMedia variant="icon">{file.icon}</ItemMedia>
            <ItemContent>
              <ItemTitle>{file.name}</ItemTitle>
              <ItemDescription>{file.detail}</ItemDescription>
            </ItemContent>
          </>
        )}
      />
      <p className="text-xs text-muted-foreground">Selected: {FILES.find((file) => file.id === selected[0])?.name ?? "nothing"}</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>f(()=>import(`./single-CTu_tsU9.js`),[]));var U=`import { useState } from "react"
import { ItemList } from "@kitora/collections/ui"
import { ItemContent, ItemDescription, ItemTitle } from "@kitora/ui/item"

const ROWS = Array.from({ length: 10_000 }, (_, i) => ({ id: \`row-\${i}\`, label: \`Ticket \${String(i + 1).padStart(5, "0")}\`, detail: i % 3 === 0 ? "Open" : i % 3 === 1 ? "In review" : "Closed" }))

// 10,000 rows with only the ones in view mounted. The list still announces its whole size (\`aria-rowcount\`), and the
// keyboard reaches every row: End jumps to the last one, Page Down moves a page, typing "Ticket 05" jumps to it.
export function ItemListVirtual() {
  const [selected, setSelected] = useState<string[]>([])
  return (
    <div className="w-full max-w-md space-y-2">
      <ItemList
        aria-label="Tickets"
        items={ROWS}
        virtual
        rowHeight={52}
        height={288}
        size="xs"
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
        renderItem={(row) => (
          <ItemContent className="gap-0">
            <ItemTitle>{row.label}</ItemTitle>
            <ItemDescription className="line-clamp-1">{row.detail}</ItemDescription>
          </ItemContent>
        )}
      />
      <p className="text-xs text-muted-foreground">{selected.length.toLocaleString("en-US")} of 10,000 selected</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>f(()=>import(`./virtual-oxVtwXRa.js`),[]));var W={"./demos/item-list/empty-state.tsx":S,"./demos/item-list/multiple.tsx":D,"./demos/item-list/row-actions.tsx":A,"./demos/item-list/single.tsx":N,"./demos/item-list/virtual.tsx":I},G={"./demos/item-list/empty-state.tsx":z,"./demos/item-list/multiple.tsx":B,"./demos/item-list/row-actions.tsx":V,"./demos/item-list/single.tsx":H,"./demos/item-list/virtual.tsx":U};export{W as modules,G as sources};