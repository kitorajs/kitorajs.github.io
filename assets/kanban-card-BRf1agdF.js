import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./progress-C6z8hanw.js";import{t as r}from"./circle-check-CEqScjDT.js";import{t as i}from"./message-square-3FtuajII.js";import{t as a}from"./paperclip-C81gkc8i.js";import{t as o}from"./plus-DkT_QJcZ.js";import{Bc as s,Cc as c,Ic as l,ti as u}from"./index-9y5uwRd3.js";import{t as d}from"./badge-CMT8Lr82.js";import{a as f,i as p,n as m,r as h,t as g}from"./kanban-card-DUj4bT9j.js";var _=e({KanbanCardComposeColumn:()=>y}),v=l();function y(){return(0,v.jsxs)(`section`,{"aria-label":`In progress`,className:`w-full max-w-xs space-y-2 rounded-lg border border-border bg-muted/40 p-2`,children:[(0,v.jsxs)(`header`,{className:`flex items-center justify-between px-1`,children:[(0,v.jsxs)(`h3`,{className:`flex items-center gap-2 text-sm font-medium`,children:[`In progress`,(0,v.jsx)(d,{variant:`outline`,children:`2`})]}),(0,v.jsx)(u,{size:`icon-sm`,variant:`ghost`,"aria-label":`Add card`,children:(0,v.jsx)(o,{})})]}),(0,v.jsx)(g,{title:`Billing page`,description:`Plans, invoices, card update.`,badges:[{label:`Frontend`,tone:`primary`}],assignee:{name:`Ada Byron`},due:`Nov 4`,count:[{icon:(0,v.jsx)(i,{className:`size-3`}),value:3}]}),(0,v.jsx)(g,{title:`Rate-limit sign-in`,badges:[{label:`Security`,tone:`danger`}],assignee:{name:`Alan Turing`}})]})}var b=e({KanbanCardDefault:()=>x});function x(){return(0,v.jsx)(`div`,{className:`flex items-center justify-center flex-col gap-2`,children:(0,v.jsxs)(`div`,{className:`grid w-full max-w-sm gap-2`,children:[(0,v.jsx)(g,{title:`Wire OAuth callback to session cookie`,description:"State param should be opaque + short-lived. Depends on the migration that adds `sessions` table.",badges:[{label:`P0`,tone:`danger`},{label:`Auth`,tone:`primary`}],assignee:{name:`Alex Kim`},due:`May 9`,count:[{icon:(0,v.jsx)(i,{}),value:3},{icon:(0,v.jsx)(r,{}),value:`2/4`}]}),(0,v.jsx)(g,{title:`Datatable pagination — server-side`,badges:[{label:`P1`,tone:`warning`}],assignee:{name:`Grace H`},due:`May 11`})]})})}var S=e({KanbanCardPartsAndCover:()=>C});function C(){return(0,v.jsxs)(`div`,{className:`grid w-full max-w-sm gap-2`,children:[(0,v.jsx)(g,{title:`Landing page hero`,badges:[{label:`Design`,tone:`primary`}],due:`Nov 20`,assignee:{name:`Grace Hopper`},cover:(0,v.jsx)(`div`,{className:`h-20 bg-gradient-to-b from-primary/30 to-primary/5`})}),(0,v.jsxs)(`div`,{className:`rounded-md border border-border bg-card p-3`,children:[(0,v.jsx)(m,{badges:[{label:`Release`,tone:`warning`}]}),(0,v.jsx)(f,{as:`h3`,children:`Ship 2.0`}),(0,v.jsx)(n,{value:60,className:`mt-2`,"aria-label":`Checklist progress`}),(0,v.jsxs)(h,{children:[(0,v.jsx)(p,{due:`Dec 1`,count:[{icon:(0,v.jsx)(a,{}),value:4}]}),(0,v.jsx)(`span`,{className:`text-[11px] text-muted-foreground`,children:`6 / 10`})]})]})]})}var w=e({KanbanCardSelectedAndRender:()=>D}),T=t(s(),1),E=[{id:`1`,title:`Wire OAuth callback`,tone:`danger`,label:`P0`},{id:`2`,title:`Server-side pagination`,tone:`warning`,label:`P1`},{id:`3`,title:`Billing page copy`,tone:`primary`,label:`Docs`}];function D(){let[e,t]=(0,T.useState)(`1`);return(0,v.jsxs)(`div`,{className:`grid w-full max-w-sm gap-2`,children:[E.map(n=>(0,v.jsx)(g,{title:n.title,badges:[{label:n.label,tone:n.tone}],selected:e===n.id,onClick:()=>t(n.id),titleAs:`h3`},n.id)),(0,v.jsx)(g,{title:`Opens in a new tab`,description:`A card rendered as your own link element.`,render:({children:e,...t})=>(0,v.jsx)(`a`,{...t,href:`#kanban-card`,target:`_blank`,rel:`noreferrer`,children:e})})]})}var O=`import { MessageSquare, Plus } from "lucide-react"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { KanbanCard } from "@kitora/ui/kanban-card"

export function KanbanCardComposeColumn() {
  return (
    <section aria-label="In progress" className="w-full max-w-xs space-y-2 rounded-lg border border-border bg-muted/40 p-2">
      <header className="flex items-center justify-between px-1">
        <h3 className="flex items-center gap-2 text-sm font-medium">
          In progress
          <Badge variant="outline">2</Badge>
        </h3>
        <Button size="icon-sm" variant="ghost" aria-label="Add card">
          <Plus />
        </Button>
      </header>
      <KanbanCard
        title="Billing page"
        description="Plans, invoices, card update."
        badges={[{ label: "Frontend", tone: "primary" }]}
        assignee={{ name: "Ada Byron" }}
        due="Nov 4"
        count={[{ icon: <MessageSquare className="size-3" />, value: 3 }]}
      />
      <KanbanCard title="Rate-limit sign-in" badges={[{ label: "Security", tone: "danger" }]} assignee={{ name: "Alan Turing" }} />
    </section>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>c(()=>import(`./compose-Cz8hNrgq2.js`),[]));var k=`import { CheckCircle2, MessageSquare } from "lucide-react"
import { KanbanCard } from "@kitora/ui/kanban-card"

export function KanbanCardDefault() {
  return (
    <div className="flex items-center justify-center flex-col gap-2">
      <div className="grid w-full max-w-sm gap-2">
        <KanbanCard
          title="Wire OAuth callback to session cookie"
          description="State param should be opaque + short-lived. Depends on the migration that adds \`sessions\` table."
          badges={[
            { label: "P0", tone: "danger" },
            { label: "Auth", tone: "primary" },
          ]}
          assignee={{ name: "Alex Kim" }}
          due="May 9"
          count={[
            { icon: <MessageSquare />, value: 3 },
            { icon: <CheckCircle2 />, value: "2/4" },
          ]}
        />
        <KanbanCard title="Datatable pagination — server-side" badges={[{ label: "P1", tone: "warning" }]} assignee={{ name: "Grace H" }} due="May 11" />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>c(()=>import(`./default-cDWYeJOC.js`),[]));var A=`import { Paperclip } from "lucide-react"
import { KanbanCard, KanbanCardBadges, KanbanCardFooter, KanbanCardMeta, KanbanCardTitle } from "@kitora/ui/kanban-card"
import { Progress } from "@kitora/ui/progress"

export function KanbanCardPartsAndCover() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <KanbanCard
        title="Landing page hero"
        badges={[{ label: "Design", tone: "primary" }]}
        due="Nov 20"
        assignee={{ name: "Grace Hopper" }}
        cover={<div className="h-20 bg-gradient-to-b from-primary/30 to-primary/5" />}
      />
      <div className="rounded-md border border-border bg-card p-3">
        <KanbanCardBadges badges={[{ label: "Release", tone: "warning" }]} />
        <KanbanCardTitle as="h3">Ship 2.0</KanbanCardTitle>
        <Progress value={60} className="mt-2" aria-label="Checklist progress" />
        <KanbanCardFooter>
          <KanbanCardMeta due="Dec 1" count={[{ icon: <Paperclip />, value: 4 }]} />
          <span className="text-[11px] text-muted-foreground">6 / 10</span>
        </KanbanCardFooter>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>c(()=>import(`./parts-and-cover-DmyeeFWd.js`),[]));var j=`import { useState } from "react"
import { KanbanCard } from "@kitora/ui/kanban-card"

const tasks = [
  { id: "1", title: "Wire OAuth callback", tone: "danger" as const, label: "P0" },
  { id: "2", title: "Server-side pagination", tone: "warning" as const, label: "P1" },
  { id: "3", title: "Billing page copy", tone: "primary" as const, label: "Docs" },
]

export function KanbanCardSelectedAndRender() {
  const [selected, setSelected] = useState("1")
  return (
    <div className="grid w-full max-w-sm gap-2">
      {tasks.map((t) => (
        <KanbanCard key={t.id} title={t.title} badges={[{ label: t.label, tone: t.tone }]} selected={selected === t.id} onClick={() => setSelected(t.id)} titleAs="h3" />
      ))}
      <KanbanCard title="Opens in a new tab" description="A card rendered as your own link element." render={({ children, ...props }) => <a {...props} href="#kanban-card" target="_blank" rel="noreferrer">{children}</a>} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>c(()=>import(`./selected-and-render-VxPAzq2N.js`),[]));var M={"./demos/kanban-card/compose.tsx":_,"./demos/kanban-card/default.tsx":b,"./demos/kanban-card/parts-and-cover.tsx":S,"./demos/kanban-card/selected-and-render.tsx":w},N={"./demos/kanban-card/compose.tsx":O,"./demos/kanban-card/default.tsx":k,"./demos/kanban-card/parts-and-cover.tsx":A,"./demos/kanban-card/selected-and-render.tsx":j};export{M as modules,N as sources};