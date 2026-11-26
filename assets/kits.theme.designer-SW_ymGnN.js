import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./bell-CKqxJ4Kf.js";import{s as n}from"./kit-docs-DpYhPoxM.js";import{t as r}from"./file-text-DcQTIaDt.js";import{t as i}from"./folder-CcDNU7s5.js";import{t as a}from"./inbox-Bv6dlLdK.js";import{t as o}from"./layout-grid-BC3eZvLl.js";import{t as s}from"./search-C2WkThP4.js";import{t as c}from"./settings-Dn8u38Jz.js";import{t as l}from"./star-Cbf2qr-O.js";import{t as u}from"./users-ZX8x1RHA.js";import{t as d}from"./input-C8M4VLUF.js";import{Bc as f,Cc as p,Ic as m,Nt as h,ti as g,zt as _}from"./index-q72zUtm9.js";import{t as v}from"./badge-Be8rVEaF.js";import{n as y}from"./designer-CUEzE-bg.js";import"./kit-gallery-Atvibnty.js";import{t as b}from"./example-B8EaWveR.js";var x=e(f(),1),S=m(),C=[{icon:a,label:`Inbox`,count:12},{icon:l,label:`Starred`},{icon:o,label:`Projects`,active:!0},{icon:u,label:`Team`},{icon:c,label:`Settings`}],w=[{name:`Q4 roadmap`,owner:`Priya`,edited:`2m ago`,tag:`Draft`},{name:`Pricing experiment`,owner:`Jon`,edited:`1h ago`,tag:`Live`},{name:`Incident 0413 review`,owner:`Mara`,edited:`Yesterday`,tag:`Done`},{name:`Onboarding emails`,owner:`Lee`,edited:`Mon`,tag:`Draft`}];function T(){return(0,S.jsxs)(`div`,{className:`flex h-80 text-[13px]`,children:[(0,S.jsxs)(`nav`,{"aria-label":`App`,className:`hidden w-44 shrink-0 sm:flex flex-col gap-0.5 border-r bg-surface-1 p-2`,children:[(0,S.jsxs)(`div`,{className:`mb-2 flex items-center gap-2 px-1.5 font-semibold`,children:[(0,S.jsx)(`span`,{className:`grid size-5 place-items-center rounded-[calc(var(--radius)*0.75)] bg-primary text-[11px] text-primary-foreground`,children:`A`}),` Acme`]}),C.map(e=>(0,S.jsxs)(`a`,{href:`#app`,"aria-current":`active`in e?`page`:void 0,className:`flex h-7 items-center gap-2 rounded-md px-1.5 text-muted-foreground hover:bg-muted hover:text-foreground aria-[current=page]:bg-primary/10 aria-[current=page]:font-medium aria-[current=page]:text-primary`,children:[(0,S.jsx)(e.icon,{className:`size-3.5`}),` `,e.label,`count`in e?(0,S.jsx)(v,{variant:`secondary`,className:`ml-auto h-4 px-1 text-[10px]`,children:e.count}):null]},e.label))]}),(0,S.jsxs)(`main`,{className:`flex min-w-0 flex-1 flex-col`,children:[(0,S.jsxs)(`header`,{className:`flex h-10 items-center gap-2 border-b px-3`,children:[(0,S.jsx)(i,{className:`size-3.5 text-muted-foreground`}),` `,(0,S.jsx)(`span`,{className:`font-medium`,children:`Projects`}),(0,S.jsxs)(`div`,{className:`relative ml-auto hidden w-48 sm:block`,children:[(0,S.jsx)(s,{className:`pointer-events-none absolute top-1/2 left-2 size-3.5 -translate-y-1/2 text-muted-foreground`}),(0,S.jsx)(d,{"aria-label":`Search`,placeholder:`Search`,className:`h-7 pl-7 text-[12.5px]`})]}),(0,S.jsx)(g,{size:`icon-sm`,variant:`ghost`,"aria-label":`Notifications`,className:`ml-auto sm:ml-0`,children:(0,S.jsx)(t,{})}),(0,S.jsx)(g,{size:`sm`,children:`New doc`})]}),(0,S.jsxs)(`table`,{className:`w-full text-[12.5px]`,children:[(0,S.jsx)(`thead`,{children:(0,S.jsxs)(`tr`,{className:`border-b text-left text-[11px] text-muted-foreground`,children:[(0,S.jsx)(`th`,{className:`px-3 py-1.5 font-medium`,children:`Name`}),(0,S.jsx)(`th`,{className:`hidden py-1.5 font-medium sm:table-cell`,children:`Owner`}),(0,S.jsx)(`th`,{className:`hidden py-1.5 font-medium sm:table-cell`,children:`Edited`}),(0,S.jsx)(`th`,{className:`py-1.5 pr-3 text-right font-medium`,children:`Status`})]})}),(0,S.jsx)(`tbody`,{children:w.map(e=>(0,S.jsxs)(`tr`,{className:`border-b hover:bg-muted/50`,children:[(0,S.jsx)(`td`,{className:`px-3 py-1.5`,children:(0,S.jsxs)(`span`,{className:`flex items-center gap-2`,children:[(0,S.jsx)(r,{className:`size-3.5 text-muted-foreground`}),e.name]})}),(0,S.jsx)(`td`,{className:`hidden py-1.5 text-muted-foreground sm:table-cell`,children:e.owner}),(0,S.jsx)(`td`,{className:`hidden py-1.5 text-muted-foreground tabular-nums sm:table-cell`,children:e.edited}),(0,S.jsx)(`td`,{className:`py-1.5 pr-3 text-right`,children:(0,S.jsx)(v,{variant:e.tag===`Live`?`default`:e.tag===`Done`?`secondary`:`outline`,children:e.tag})})]},e.name))})]})]})]})}function E(){let[e,t]=(0,x.useState)({..._,brand:{l:.5,c:.18,h:270},radius:.375});return(0,S.jsxs)(`div`,{className:`grid gap-2`,children:[(0,S.jsx)(y.Panel,{config:e,onConfigChange:t,preview:(0,S.jsx)(T,{})}),(0,S.jsxs)(`p`,{className:`font-mono text-[11px] text-muted-foreground`,children:[`config.brand = `,JSON.stringify(e.brand),` · radius `,e.radius,` · `,e.density,` · `,h.length,` presets`]})]})}var D=`import { useState } from "react"
import { Bell, FileText, Folder, Inbox, LayoutGrid, Search, Settings, Star, Users } from "lucide-react"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { BRAND_PRESETS, ThemeDesigner, type ThemeConfig, DEFAULT_THEME_CONFIG } from "@kitora/theme"

const NAV = [
  { icon: Inbox, label: "Inbox", count: 12 },
  { icon: Star, label: "Starred" },
  { icon: LayoutGrid, label: "Projects", active: true },
  { icon: Users, label: "Team" },
  { icon: Settings, label: "Settings" },
] as const

const FILES = [
  { name: "Q4 roadmap", owner: "Priya", edited: "2m ago", tag: "Draft" },
  { name: "Pricing experiment", owner: "Jon", edited: "1h ago", tag: "Live" },
  { name: "Incident 0413 review", owner: "Mara", edited: "Yesterday", tag: "Done" },
  { name: "Onboarding emails", owner: "Lee", edited: "Mon", tag: "Draft" },
] as const

/** A small app shell to theme instead of the default sampler: everything colours through tokens.
 * Below \`sm\` the nav, search and the Owner / Edited columns hide so it fits a phone. */
function AppShell() {
  return (
    <div className="flex h-80 text-[13px]">
      <nav aria-label="App" className="hidden w-44 shrink-0 sm:flex flex-col gap-0.5 border-r bg-surface-1 p-2">
        <div className="mb-2 flex items-center gap-2 px-1.5 font-semibold">
          <span className="grid size-5 place-items-center rounded-[calc(var(--radius)*0.75)] bg-primary text-[11px] text-primary-foreground">A</span> Acme
        </div>
        {NAV.map((n) => (
          <a key={n.label} href="#app" aria-current={"active" in n ? "page" : undefined} className="flex h-7 items-center gap-2 rounded-md px-1.5 text-muted-foreground hover:bg-muted hover:text-foreground aria-[current=page]:bg-primary/10 aria-[current=page]:font-medium aria-[current=page]:text-primary">
            <n.icon className="size-3.5" /> {n.label}
            {"count" in n ? <Badge variant="secondary" className="ml-auto h-4 px-1 text-[10px]">{n.count}</Badge> : null}
          </a>
        ))}
      </nav>
      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-10 items-center gap-2 border-b px-3">
          <Folder className="size-3.5 text-muted-foreground" /> <span className="font-medium">Projects</span>
          <div className="relative ml-auto hidden w-48 sm:block">
            <Search className="pointer-events-none absolute top-1/2 left-2 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input aria-label="Search" placeholder="Search" className="h-7 pl-7 text-[12.5px]" />
          </div>
          <Button size="icon-sm" variant="ghost" aria-label="Notifications" className="ml-auto sm:ml-0"><Bell /></Button>
          <Button size="sm">New doc</Button>
        </header>
        <table className="w-full text-[12.5px]">
          <thead>
            <tr className="border-b text-left text-[11px] text-muted-foreground"><th className="px-3 py-1.5 font-medium">Name</th><th className="hidden py-1.5 font-medium sm:table-cell">Owner</th><th className="hidden py-1.5 font-medium sm:table-cell">Edited</th><th className="py-1.5 pr-3 text-right font-medium">Status</th></tr>
          </thead>
          <tbody>
            {FILES.map((f) => (
              <tr key={f.name} className="border-b hover:bg-muted/50">
                <td className="px-3 py-1.5"><span className="flex items-center gap-2"><FileText className="size-3.5 text-muted-foreground" />{f.name}</span></td>
                <td className="hidden py-1.5 text-muted-foreground sm:table-cell">{f.owner}</td>
                <td className="hidden py-1.5 text-muted-foreground tabular-nums sm:table-cell">{f.edited}</td>
                <td className="py-1.5 pr-3 text-right"><Badge variant={f.tag === "Live" ? "default" : f.tag === "Done" ? "secondary" : "outline"}>{f.tag}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  )
}

/** The Panel preset, controlled, with an app shell in the preview slot and a shorter preset list. */
export function DesignerAppDemo() {
  const [config, setConfig] = useState<ThemeConfig>({ ...DEFAULT_THEME_CONFIG, brand: { l: 0.5, c: 0.18, h: 270 }, radius: 0.375 })
  return (
    <div className="grid gap-2">
      <ThemeDesigner.Panel config={config} onConfigChange={setConfig} preview={<AppShell />} />
      <p className="font-mono text-[11px] text-muted-foreground">
        config.brand = {JSON.stringify(config.brand)} · radius {config.radius} · {config.density} · {BRAND_PRESETS.length} presets
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>p(()=>import(`./designer-app-B4E-LqGz.js`),[]));function O(){return(0,S.jsxs)(y.Root,{className:`grid gap-3`,children:[(0,S.jsxs)(`div`,{className:`flex flex-wrap items-end gap-4 rounded-lg border bg-card p-3`,children:[(0,S.jsx)(y.BrandField,{className:`w-60`}),(0,S.jsx)(y.RadiusField,{className:`w-44`}),(0,S.jsx)(y.DensityField,{}),(0,S.jsx)(y.ContrastField,{}),(0,S.jsx)(y.Reset,{className:`ml-auto`})]}),(0,S.jsxs)(`div`,{className:`grid gap-3 xl:grid-cols-2`,children:[(0,S.jsx)(y.Preview,{scheme:`light`}),(0,S.jsx)(y.Preview,{scheme:`dark`})]}),(0,S.jsx)(y.Scale,{})]})}var k=`import { ThemeDesigner } from "@kitora/theme"

/**
 * The designer rebuilt from its public parts in a different layout: controls in one toolbar row,
 * light and dark previews side by side, the ramp under them. This is how the Panel preset is made.
 */
export function DesignerFromParts() {
  return (
    <ThemeDesigner.Root className="grid gap-3">
      <div className="flex flex-wrap items-end gap-4 rounded-lg border bg-card p-3">
        <ThemeDesigner.BrandField className="w-60" />
        <ThemeDesigner.RadiusField className="w-44" />
        <ThemeDesigner.DensityField />
        <ThemeDesigner.ContrastField />
        <ThemeDesigner.Reset className="ml-auto" />
      </div>
      <div className="grid gap-3 xl:grid-cols-2">
        <ThemeDesigner.Preview scheme="light" />
        <ThemeDesigner.Preview scheme="dark" />
      </div>
      <ThemeDesigner.Scale />
    </ThemeDesigner.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>p(()=>import(`./parts-DYszF3l0.js`),[]));function A(){return(0,S.jsxs)(`div`,{children:[(0,S.jsx)(n,{title:`Designer`,children:`The designer preset and the parts it is built from.`}),(0,S.jsx)(b,{n:1,title:`Theming an app shell`,blurb:"The Panel preset, controlled from outside (`config` + `onConfigChange`), with an app shell in its `preview` slot.",code:D,children:(0,S.jsx)(E,{})}),(0,S.jsx)(b,{n:2,title:`Rebuilt from parts`,blurb:`The same parts in a toolbar layout with light and dark previews side by side. The Panel preset is made exactly this way.`,code:k,children:(0,S.jsx)(O,{})})]})}export{A as component};