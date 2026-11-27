import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{a as n,f as r}from"./trees-CC5OCRB7.js";import{Ec as i,Uc as a,zc as o}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as s}from"./example-B67lLz1F.js";import{t as c}from"./-kits.whiteboard.shared-x-5jlzh1.js";var l=e(a(),1),u=o(),d=(e,t,n=[],r={})=>({id:e,text:t,children:n,...r}),f=d(`root`,`Q3 launch: Insights`,[d(`goals`,`Goals`,[d(`g1`,`2,000 trials in 30 days`),d(`g2`,`Activation ≥ 40 %`),d(`g3`,`NPS ≥ 45`)]),d(`audience`,`Audience`,[d(`a1`,`Ops leads at 50–500 seat teams`),d(`a2`,`Existing Pro customers`,[d(`a21`,`In-app banner`),d(`a22`,`Account managers`)])]),d(`channels`,`Channels`,[d(`c1`,`Launch post + changelog`),d(`c2`,`Product Hunt`),d(`c3`,`Webinar with Acme`),d(`c4`,`Partner newsletter`)],{collapsed:!0}),d(`product`,`Product`,[d(`p1`,`Saved dashboards`),d(`p2`,`CSV + PDF export`),d(`p3`,`Alerts`,[d(`p31`,`Slack`),d(`p32`,`Email digest`)])]),d(`risks`,`Risks`,[d(`r1`,`Query cost at scale`),d(`r2`,`Docs not ready`)],{color:`#ef4444`}),d(`dates`,`Milestones`,[d(`d1`,`Beta — Jul 8`),d(`d2`,`GA — Aug 19`),d(`d3`,`Retro — Sep 2`)])]);function p({node:e,depth:t=0}){return(0,u.jsxs)(`li`,{children:[(0,u.jsxs)(`div`,{className:`truncate py-px`,style:{paddingLeft:t*10},children:[e.collapsed&&e.children.length>0?`▸ `:e.children.length>0?`▾ `:`· `,e.text]}),e.collapsed?null:(0,u.jsx)(`ul`,{children:e.children.map(e=>(0,u.jsx)(p,{node:e,depth:t+1},e.id))})]})}function m(){let[e,t]=(0,l.useState)(f),[i,a]=(0,l.useState)(!0);return(0,u.jsxs)(`div`,{className:`grid h-full grid-rows-[minmax(0,1fr)_auto] sm:grid-cols-[1fr_200px] sm:grid-rows-1`,children:[(0,u.jsxs)(`div`,{className:`relative min-w-0`,children:[(0,u.jsx)(n,{controller:r({root:e,onChange:t,balanced:i}),label:`Launch plan`}),(0,u.jsx)(`div`,{className:`absolute top-2 right-2 flex rounded-md border bg-card p-0.5 text-[12px] shadow-sm`,children:[!0,!1].map(e=>(0,u.jsx)(`button`,{type:`button`,"aria-pressed":i===e,onClick:()=>a(e),className:`h-6 rounded px-2 text-muted-foreground aria-pressed:bg-muted aria-pressed:text-foreground`,children:e?`Balanced`:`Right`},String(e)))})]}),(0,u.jsxs)(`aside`,{"aria-label":`Outline`,tabIndex:0,className:`overflow-auto max-h-32 border-t sm:max-h-none sm:border-t-0 sm:border-l bg-muted/30 p-3 text-[12px] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset`,children:[(0,u.jsx)(`div`,{className:`mb-1 font-medium`,children:`Outline`}),(0,u.jsx)(`ul`,{className:`text-muted-foreground`,children:(0,u.jsx)(p,{node:e})})]})]})}var h=`import { useState } from "react"
import { type MindNode, MindMapView, useMindMap } from "@kitora/whiteboard"

const t = (id: string, text: string, children: readonly MindNode[] = [], extra: Partial<MindNode> = {}): MindNode => ({ id, text, children, ...extra })

const PLAN: MindNode = t("root", "Q3 launch: Insights", [
  t("goals", "Goals", [t("g1", "2,000 trials in 30 days"), t("g2", "Activation ≥ 40 %"), t("g3", "NPS ≥ 45")]),
  t("audience", "Audience", [t("a1", "Ops leads at 50–500 seat teams"), t("a2", "Existing Pro customers", [t("a21", "In-app banner"), t("a22", "Account managers")])]),
  t("channels", "Channels", [t("c1", "Launch post + changelog"), t("c2", "Product Hunt"), t("c3", "Webinar with Acme"), t("c4", "Partner newsletter")], { collapsed: true }),
  t("product", "Product", [t("p1", "Saved dashboards"), t("p2", "CSV + PDF export"), t("p3", "Alerts", [t("p31", "Slack"), t("p32", "Email digest")])]),
  t("risks", "Risks", [t("r1", "Query cost at scale"), t("r2", "Docs not ready")], { color: "#ef4444" }),
  t("dates", "Milestones", [t("d1", "Beta — Jul 8"), t("d2", "GA — Aug 19"), t("d3", "Retro — Sep 2")]),
])

/** Outline of the same tree the map draws, to show the host owns the data. */
function Outline({ node, depth = 0 }: { readonly node: MindNode; readonly depth?: number }) {
  return (
    <li>
      <div className="truncate py-px" style={{ paddingLeft: depth * 10 }}>
        {node.collapsed && node.children.length > 0 ? "▸ " : node.children.length > 0 ? "▾ " : "· "}
        {node.text}
      </div>
      {node.collapsed ? null : (
        <ul>
          {node.children.map((c) => (
            <Outline key={c.id} node={c} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  )
}

/** A launch plan: balanced or one-sided, branch colours, folded branches with counts, and a live outline. */
export function LaunchMindMap() {
  const [root, setRoot] = useState(PLAN)
  const [balanced, setBalanced] = useState(true)
  const map = useMindMap({ root, onChange: setRoot, balanced })
  return (
    <div className="grid h-full grid-rows-[minmax(0,1fr)_auto] sm:grid-cols-[1fr_200px] sm:grid-rows-1">
      <div className="relative min-w-0">
        <MindMapView controller={map} label="Launch plan" />
        <div className="absolute top-2 right-2 flex rounded-md border bg-card p-0.5 text-[12px] shadow-sm">
          {[true, false].map((b) => (
            <button key={String(b)} type="button" aria-pressed={balanced === b} onClick={() => setBalanced(b)} className="h-6 rounded px-2 text-muted-foreground aria-pressed:bg-muted aria-pressed:text-foreground">
              {b ? "Balanced" : "Right"}
            </button>
          ))}
        </div>
      </div>
      <aside aria-label="Outline" tabIndex={0} className="overflow-auto max-h-32 border-t sm:max-h-none sm:border-t-0 sm:border-l bg-muted/30 p-3 text-[12px] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset">
        <div className="mb-1 font-medium">Outline</div>
        <ul className="text-muted-foreground">
          <Outline node={root} />
        </ul>
      </aside>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>i(()=>import(`./launch-mindmap-DuQauLxL.js`),[]));function g(){return(0,u.jsxs)(`div`,{children:[(0,u.jsx)(t,{title:`Mind map`,children:`An auto-laid-out tree you drive from the keyboard. The host owns the tree (controlled), so the outline beside it is the same data.`}),(0,u.jsx)(s,{n:1,title:`Q3 launch plan`,blurb:`Tab child, Enter sibling, Space fold (Channels is folded: its badge counts the hidden topics), Delete, F2 or type to rename, arrows to move. Switch Balanced / Right.`,code:h,children:(0,u.jsx)(c,{testId:`launch-mindmap`,height:560,children:(0,u.jsx)(m,{})})})]})}export{g as component};