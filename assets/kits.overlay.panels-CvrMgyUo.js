import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{t as n}from"./overlay-DzNw4sCe.js";import{t as r}from"./input-C8M4VLUF.js";import{r as i}from"./parts-CPD-RYH5.js";import{n as a,t as o}from"./preset-CdCfPQBG.js";import{t as s}from"./inline-surface-CAZBT5bN.js";import{Bc as c,Cc as l,Cn as u,Ic as d,hi as f,ti as p,wn as m}from"./index-q72zUtm9.js";import"./kit-gallery-Atvibnty.js";import{t as h}from"./example-B8EaWveR.js";var g=d(),_=[`push`,`overlay`];function v({mode:e=`push`,side:t,width:n,resizable:r,persistWidthKey:c,modal:l,title:u,description:d,footer:f,closeButton:p,headerActions:m,bodyClassName:h,children:_,...v}){let b={side:t,width:n,resizable:r,persistWidthKey:c};return e===`overlay`?(0,g.jsx)(o,{...v,kind:`panel`,modal:l??!1,surface:`sheet`,presentation:b,content:(0,g.jsx)(a,{title:u,description:d,footer:f,closeButton:p,headerActions:m,bodyClassName:h,children:_})}):(0,g.jsx)(o,{...v,kind:`panel`,modal:!1,surface:`inline`,presentation:b,content:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{title:u,description:d,closeButton:p,actions:m}),(0,g.jsx)(y,{className:h,children:_}),f?(0,g.jsx)(i,{className:`rounded-none`,children:f}):null]})})}function y({className:e,children:t}){return(0,g.jsx)(`div`,{"data-overlay-body":``,className:f(`min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-2.5`,e),children:t})}var b=e(c(),1),x=`app.campaigns.details-width`,S=[`start`,`end`],C=[`Ana`,`Ben`,`Chen`,`Dee`,`Eli`],w=[`active`,`paused`,`draft`],T=Array.from({length:24},(e,t)=>({id:t+1,name:`Campaign ${String(t+1).padStart(2,`0`)}`,owner:C[t%C.length],status:w[t%w.length],spend:t*7919%9e3+120}));function E({label:e,options:t,value:n,onChange:r}){return(0,g.jsxs)(`div`,{className:`flex items-center gap-1`,role:`group`,"aria-label":e,children:[(0,g.jsx)(`span`,{className:`text-muted-foreground`,children:e}),t.map(t=>(0,g.jsx)(p,{size:`xs`,variant:t===n?`default`:`outline`,onClick:()=>r(t),"data-option":`${e}-${t}`,children:t},t))]})}function D({label:e,children:t}){return(0,g.jsxs)(`div`,{className:`flex justify-between gap-3 border-b py-1 last:border-b-0`,children:[(0,g.jsx)(`span`,{className:`text-muted-foreground`,children:e}),(0,g.jsx)(`span`,{className:`tabular-nums`,children:t})]})}function O({row:e}){return e?(0,g.jsxs)(`div`,{className:`flex flex-col`,"data-details":e.id,children:[(0,g.jsx)(D,{label:`Id`,children:e.id}),(0,g.jsx)(D,{label:`Owner`,children:e.owner}),(0,g.jsx)(D,{label:`Status`,children:e.status}),(0,g.jsxs)(D,{label:`Spend`,children:[`$`,e.spend.toLocaleString(`en-US`)]}),(0,g.jsxs)(`label`,{className:`mt-2 flex flex-col gap-1`,children:[(0,g.jsx)(`span`,{className:`text-muted-foreground`,children:`Note`}),(0,g.jsx)(r,{placeholder:`Add a note`,className:`h-7 text-[13px]`})]})]}):(0,g.jsx)(`p`,{className:`text-muted-foreground`,children:`Nothing selected. Click a row in the table.`})}function k(){let[e,t]=(0,b.useState)(`push`),[i,a]=(0,b.useState)(`end`),[o,s]=(0,b.useState)(!1),[c,l]=(0,b.useState)(null),[d,m]=(0,b.useState)(``),[h,y]=(0,b.useState)(`—`),C=T.filter(e=>e.name.toLowerCase().includes(d.toLowerCase())),w=e=>{l(e),s(!0)};return(0,g.jsx)(u,{children:(0,g.jsxs)(`div`,{className:`flex flex-col gap-2 text-[13px]`,"data-example-row":`push`,children:[(0,g.jsxs)(`div`,{className:`flex flex-wrap items-center gap-x-4 gap-y-2`,children:[(0,g.jsx)(E,{label:`mode`,options:_,value:e,onChange:t}),(0,g.jsx)(E,{label:`side`,options:S,value:i,onChange:a}),(0,g.jsx)(p,{size:`xs`,variant:`outline`,onClick:()=>s(e=>!e),"data-toggle-panel":``,children:o?`Hide panel`:`Show panel`}),(0,g.jsxs)(`span`,{className:`text-muted-foreground`,"data-last-close":``,children:[`Last close: `,h]})]}),(0,g.jsxs)(`div`,{className:f(`flex h-[420px] overflow-hidden rounded-md border`,i===`start`&&`flex-row-reverse`),"data-push-host":``,children:[(0,g.jsxs)(`div`,{className:`flex min-w-0 flex-1 flex-col`,children:[(0,g.jsxs)(`div`,{className:`flex h-9 shrink-0 items-center gap-2 border-b px-2`,children:[(0,g.jsx)(r,{value:d,onChange:e=>m(e.target.value),placeholder:`Filter campaigns`,className:`h-7 max-w-56 text-[13px]`,"aria-label":`Filter campaigns`,"data-filter":``}),(0,g.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[C.length,` rows`]})]}),(0,g.jsx)(`div`,{className:`min-h-0 flex-1 overflow-auto`,children:(0,g.jsxs)(`table`,{className:`w-full text-left`,children:[(0,g.jsx)(`thead`,{className:`sticky top-0 bg-muted/60 text-muted-foreground`,children:(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`th`,{className:`px-2 py-1 font-medium`,children:`Name`}),(0,g.jsx)(`th`,{className:`px-2 py-1 font-medium`,children:`Owner`}),(0,g.jsx)(`th`,{className:`px-2 py-1 font-medium`,children:`Status`}),(0,g.jsx)(`th`,{className:`px-2 py-1 text-right font-medium`,children:`Spend`})]})}),(0,g.jsx)(`tbody`,{children:C.map(e=>(0,g.jsxs)(`tr`,{className:f(`cursor-pointer border-t hover:bg-muted/40`,c?.id===e.id&&`bg-muted`),onClick:()=>w(e),"data-row":e.id,children:[(0,g.jsx)(`td`,{className:`px-2 py-1`,children:(0,g.jsx)(`button`,{type:`button`,className:`text-left outline-none focus-visible:underline`,onClick:()=>w(e),children:e.name})}),(0,g.jsx)(`td`,{className:`px-2 py-1`,children:e.owner}),(0,g.jsx)(`td`,{className:`px-2 py-1 text-muted-foreground`,children:e.status}),(0,g.jsxs)(`td`,{className:`px-2 py-1 text-right tabular-nums`,children:[`$`,e.spend.toLocaleString(`en-US`)]})]},e.id))})]})})]}),(0,g.jsx)(v,{mode:e,side:i,open:o,onOpenChange:(t,n)=>{s(t),!t&&n&&y(`${e} panel closed (${n})`)},resizable:!0,persistWidthKey:x,width:`sm`,name:`details-panel`,title:c?c.name:`Details`,description:c?`Owner ${c.owner}`:`Select a row`,footer:(0,g.jsx)(n.Close,{render:(0,g.jsx)(p,{size:`sm`,variant:`outline`}),children:`Close`}),children:(0,g.jsx)(O,{row:c})})]})]})})}var A=`import { useState, type ReactNode } from "react"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { cn } from "@kitora/ui/utils"
import { EnsureOverlayUi, Overlay, SIDE_PANEL_MODES, SidePanel, type CloseReason, type SidePanelMode, type SidePanelSide } from "@kitora/overlay"

// the resized width is kept per viewer under this key
const WIDTH_KEY = "app.campaigns.details-width"
const SIDES: readonly SidePanelSide[] = ["start", "end"]

interface Campaign {
  readonly id: number
  readonly name: string
  readonly owner: string
  readonly status: "active" | "paused" | "draft"
  readonly spend: number
}

// stub: replace with your API
const OWNERS = ["Ana", "Ben", "Chen", "Dee", "Eli"] as const
const STATUSES = ["active", "paused", "draft"] as const
const CAMPAIGNS: readonly Campaign[] = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  name: \`Campaign \${String(i + 1).padStart(2, "0")}\`,
  owner: OWNERS[i % OWNERS.length],
  status: STATUSES[i % STATUSES.length],
  spend: ((i * 7919) % 9000) + 120,
}))

function Segmented<T extends string>({ label, options, value, onChange }: { label: string; options: readonly T[]; value: T; onChange: (v: T) => void }) {
  return (
    <div className="flex items-center gap-1" role="group" aria-label={label}>
      <span className="text-muted-foreground">{label}</span>
      {options.map((o) => (
        <Button key={o} size="xs" variant={o === value ? "default" : "outline"} onClick={() => onChange(o)} data-option={\`\${label}-\${o}\`}>
          {o}
        </Button>
      ))}
    </div>
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex justify-between gap-3 border-b py-1 last:border-b-0">
      <span className="text-muted-foreground">{label}</span>
      <span className="tabular-nums">{children}</span>
    </div>
  )
}

function CampaignDetails({ row }: { row: Campaign | null }) {
  if (!row) return <p className="text-muted-foreground">Nothing selected. Click a row in the table.</p>
  return (
    <div className="flex flex-col" data-details={row.id}>
      <Field label="Id">{row.id}</Field>
      <Field label="Owner">{row.owner}</Field>
      <Field label="Status">{row.status}</Field>
      <Field label="Spend">\${row.spend.toLocaleString("en-US")}</Field>
      <label className="mt-2 flex flex-col gap-1">
        <span className="text-muted-foreground">Note</span>
        <Input placeholder="Add a note" className="h-7 text-[13px]" />
      </label>
    </div>
  )
}

export function CampaignsWithDetails() {
  const [mode, setMode] = useState<SidePanelMode>("push")
  const [side, setSide] = useState<SidePanelSide>("end")
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<Campaign | null>(null)
  const [query, setQuery] = useState("")
  const [lastClose, setLastClose] = useState("—")
  const rows = CAMPAIGNS.filter((r) => r.name.toLowerCase().includes(query.toLowerCase()))
  const select = (row: Campaign) => {
    setSelected(row)
    setOpen(true)
  }
  const onOpenChange = (next: boolean, reason: CloseReason | null) => {
    setOpen(next)
    if (!next && reason) setLastClose(\`\${mode} panel closed (\${reason})\`)
  }
  return (
    <EnsureOverlayUi>
      <div className="flex flex-col gap-2 text-[13px]" data-example-row="push">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Segmented label="mode" options={SIDE_PANEL_MODES} value={mode} onChange={setMode} />
          <Segmented label="side" options={SIDES} value={side} onChange={setSide} />
          <Button size="xs" variant="outline" onClick={() => setOpen((o) => !o)} data-toggle-panel="">
            {open ? "Hide panel" : "Show panel"}
          </Button>
          <span className="text-muted-foreground" data-last-close="">
            Last close: {lastClose}
          </span>
        </div>
        {/* the panel is the row's last child: "push" narrows the table beside it; flex-row-reverse puts it on the start edge */}
        <div className={cn("flex h-[420px] overflow-hidden rounded-md border", side === "start" && "flex-row-reverse")} data-push-host="">
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex h-9 shrink-0 items-center gap-2 border-b px-2">
              <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Filter campaigns" className="h-7 max-w-56 text-[13px]" aria-label="Filter campaigns" data-filter="" />
              <span className="text-muted-foreground tabular-nums">{rows.length} rows</span>
            </div>
            <div className="min-h-0 flex-1 overflow-auto">
              <table className="w-full text-left">
                <thead className="sticky top-0 bg-muted/60 text-muted-foreground">
                  <tr>
                    <th className="px-2 py-1 font-medium">Name</th>
                    <th className="px-2 py-1 font-medium">Owner</th>
                    <th className="px-2 py-1 font-medium">Status</th>
                    <th className="px-2 py-1 text-right font-medium">Spend</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.id} className={cn("cursor-pointer border-t hover:bg-muted/40", selected?.id === r.id && "bg-muted")} onClick={() => select(r)} data-row={r.id}>
                      <td className="px-2 py-1">
                        <button type="button" className="text-left outline-none focus-visible:underline" onClick={() => select(r)}>
                          {r.name}
                        </button>
                      </td>
                      <td className="px-2 py-1">{r.owner}</td>
                      <td className="px-2 py-1 text-muted-foreground">{r.status}</td>
                      <td className="px-2 py-1 text-right tabular-nums">\${r.spend.toLocaleString("en-US")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <SidePanel
            // "push" takes room from the table; "overlay" covers its edge. Both are non-modal.
            mode={mode}
            side={side}
            open={open}
            onOpenChange={onOpenChange}
            resizable
            persistWidthKey={WIDTH_KEY}
            width="sm"
            name="details-panel"
            title={selected ? selected.name : "Details"}
            description={selected ? \`Owner \${selected.owner}\` : "Select a row"}
            footer={<Overlay.Close render={<Button size="sm" variant="outline" />}>Close</Overlay.Close>}
          >
            <CampaignDetails row={selected} />
          </SidePanel>
        </div>
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>l(()=>import(`./details-panel-DitmIDqI.js`),[]));var j=`kitora.overlay.panels.inspector-width`,M=[`Position`,`Size`,`Fill`,`Stroke`,`Effects`,`Export`];function N(){return(0,g.jsx)(`div`,{className:`flex flex-col gap-1`,children:M.map(e=>(0,g.jsxs)(`details`,{className:`rounded border px-2 py-1`,open:e===`Position`,children:[(0,g.jsx)(`summary`,{className:`cursor-pointer font-medium`,children:e}),(0,g.jsxs)(`div`,{className:`grid grid-cols-2 gap-1 py-1`,children:[(0,g.jsx)(r,{"aria-label":`${e} X`,defaultValue:`0`,className:`h-7 text-[13px]`}),(0,g.jsx)(r,{"aria-label":`${e} Y`,defaultValue:`0`,className:`h-7 text-[13px]`})]})]},e))})}function P(){let[e,t]=(0,b.useState)(!1),[n,i]=(0,b.useState)(`—`);return(0,g.jsx)(u,{children:(0,g.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,"data-example-row":`inspector`,children:[(0,g.jsx)(v,{mode:`overlay`,open:e,onOpenChange:(e,n)=>{t(e),!e&&n&&i(n)},trigger:(0,g.jsx)(p,{size:`sm`,variant:`outline`,"data-open-inspector":``,children:`Open inspector`}),width:300,resizable:!0,persistWidthKey:j,name:`inspector`,title:`Inspector`,description:`Non-modal: the page stays usable`,children:(0,g.jsx)(N,{})}),(0,g.jsx)(r,{placeholder:`Type here while the inspector is open`,className:`h-7 max-w-72 text-[13px]`,"data-page-input":``}),(0,g.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`last closed by `,(0,g.jsx)(`b`,{className:`text-foreground`,"data-log":``,children:n})]})]})})}var F=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { EnsureOverlayUi, SidePanel, type CloseReason } from "@kitora/overlay"

// Floating inspector (O32): a non-modal panel over the page edge: no backdrop, no scroll lock, no
// focus trap. Escape closes it only while focus is inside it; an outside click does not.

// the resized width is kept per viewer under this key
const INSPECTOR_WIDTH_KEY = "kitora.overlay.panels.inspector-width"
const SECTIONS = ["Position", "Size", "Fill", "Stroke", "Effects", "Export"] as const

function InspectorBody() {
  return (
    <div className="flex flex-col gap-1">
      {SECTIONS.map((section) => (
        <details key={section} className="rounded border px-2 py-1" open={section === "Position"}>
          <summary className="cursor-pointer font-medium">{section}</summary>
          <div className="grid grid-cols-2 gap-1 py-1">
            <Input aria-label={\`\${section} X\`} defaultValue="0" className="h-7 text-[13px]" />
            <Input aria-label={\`\${section} Y\`} defaultValue="0" className="h-7 text-[13px]" />
          </div>
        </details>
      ))}
    </div>
  )
}

export function InspectorButton() {
  const [open, setOpen] = useState(false)
  const [closed, setClosed] = useState("—")
  const onOpenChange = (next: boolean, reason: CloseReason | null) => {
    setOpen(next)
    if (!next && reason) setClosed(reason)
  }
  return (
    <EnsureOverlayUi>
      <div className="flex flex-wrap items-center gap-2 text-[13px]" data-example-row="inspector">
        <SidePanel
          // over the page edge: no backdrop, no scroll lock, no focus trap
          mode="overlay"
          open={open}
          onOpenChange={onOpenChange}
          trigger={<Button size="sm" variant="outline" data-open-inspector="">Open inspector</Button>}
          width={300}
          resizable
          persistWidthKey={INSPECTOR_WIDTH_KEY}
          name="inspector"
          title="Inspector"
          description="Non-modal: the page stays usable"
        >
          <InspectorBody />
        </SidePanel>
        <Input placeholder="Type here while the inspector is open" className="h-7 max-w-72 text-[13px]" data-page-input="" />
        <span className="text-muted-foreground tabular-nums">
          last closed by <b className="text-foreground" data-log="">{closed}</b>
        </span>
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>l(()=>import(`./panels-inspector-09b0zkxr.js`),[]));function I(){return(0,g.jsxs)(m,{children:[(0,g.jsx)(t,{title:`Side panels`,children:`O31 push panel · O32 non-modal inspector · resizable, width kept per viewer (docking is a separate kit).`}),(0,g.jsx)(h,{n:1,title:`Details panel, push or overlay (O31)`,blurb:(0,g.jsxs)(g.Fragment,{children:[`Click a row: the panel shows it. `,(0,g.jsx)(`b`,{children:`push`}),` narrows the table; `,(0,g.jsx)(`b`,{children:`overlay`}),` covers its edge. Either way the rows stay clickable and the filter stays typeable (non-modal). Drag the panel's inner edge to resize; the width survives a reload.`]}),code:A,children:(0,g.jsx)(k,{})}),(0,g.jsx)(h,{n:2,title:`Floating inspector (O32)`,blurb:`A non-modal panel over the page edge: no backdrop, no scroll lock, no focus trap. Escape closes it only while focus is inside it; an outside click does not.`,code:F,children:(0,g.jsx)(P,{})})]})}export{I as component};