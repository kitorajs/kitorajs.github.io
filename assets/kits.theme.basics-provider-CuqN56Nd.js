import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./slider-DK85j1as.js";import{a as n,i as r,n as i,t as a}from"./tabs-C_iMeG9z.js";import{t as o}from"./chevron-left-WGEI-OLx.js";import{s}from"./kit-docs-BUovISd0.js";import{t as c}from"./input-DQo0XDsx.js";import{Bc as l,Cc as u,G as d,Ht as f,Ic as p,J as m,Oi as h,Q as g,Y as _,Z as v,it as y,ti as b}from"./index-B9ukmIN1.js";import{t as x}from"./badge-uhFB8J9R.js";import{i as S,n as C,r as w}from"./controls-PZrLeW-4.js";import"./kit-gallery-Bph7isB2.js";import{t as T}from"./example-BGnSQG2Y.js";var E=p();function D(){let{mode:e,scheme:t}=y();return(0,E.jsxs)(`p`,{className:`text-[12.5px] text-muted-foreground`,children:[`Mode `,(0,E.jsx)(`b`,{className:`text-foreground`,children:e}),` shows `,(0,E.jsx)(`b`,{className:`text-foreground`,children:t}),e===`system`?` (from prefers-color-scheme)`:``,`.`]})}function O(){return(0,E.jsxs)(m,{target:`scope`,defaultMode:`dark`,storage:null,className:`grid gap-2 rounded-lg border p-3`,children:[(0,E.jsx)(w,{}),(0,E.jsx)(D,{}),(0,E.jsxs)(`div`,{className:`flex gap-1.5`,children:[(0,E.jsx)(b,{size:`sm`,children:`Primary`}),(0,E.jsx)(b,{size:`sm`,variant:`outline`,children:`Outline`})]})]})}var k=`import { Button } from "@kitora/ui/button"
import { ModeToggle, ThemeProvider, useTheme } from "@kitora/theme"

function Status() {
  const { mode, scheme } = useTheme()
  return (
    <p className="text-[12.5px] text-muted-foreground">
      Mode <b className="text-foreground">{mode}</b> shows <b className="text-foreground">{scheme}</b>
      {mode === "system" ? " (from prefers-color-scheme)" : ""}.
    </p>
  )
}

/**
 * Light, dark or system. \`target="scope"\` themes only this box; in an app, leave the default
 * \`target="root"\` and the provider puts \`dark\` on <html>. \`storage={null}\` keeps the demo from persisting.
 */
export function BasicMode() {
  return (
    <ThemeProvider target="scope" defaultMode="dark" storage={null} className="grid gap-2 rounded-lg border p-3">
      <ModeToggle />
      <Status />
      <div className="flex gap-1.5">
        <Button size="sm">Primary</Button>
        <Button size="sm" variant="outline">
          Outline
        </Button>
      </div>
    </ThemeProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>u(()=>import(`./mode-CNFJ8as5.js`),[]));var A=f({brand:{l:.55,c:.22,h:290},radius:1}),j=f({brand:{l:.7,c:.18,h:75},radius:.125,neutral:{hue:75,chroma:.012}});function M({title:e}){return(0,E.jsxs)(`div`,{className:`grid gap-2 rounded-lg border bg-card p-3`,children:[(0,E.jsxs)(`div`,{className:`flex items-center justify-between text-[13px] font-medium`,children:[e,` `,(0,E.jsx)(x,{children:`New`})]}),(0,E.jsxs)(`div`,{className:`flex gap-1.5`,children:[(0,E.jsx)(b,{size:`sm`,children:`Save`}),(0,E.jsx)(b,{size:`sm`,variant:`soft`,children:`Share`})]})]})}function N(){return(0,E.jsxs)(`div`,{className:`grid gap-2 sm:grid-cols-3`,children:[(0,E.jsx)(_,{theme:A,className:`rounded-lg p-2`,children:(0,E.jsx)(M,{title:`Violet, round, follows page`})}),(0,E.jsx)(_,{theme:j,scheme:`dark`,className:`rounded-lg p-2`,children:(0,E.jsx)(M,{title:`Amber, square, pinned dark`})}),(0,E.jsxs)(_,{theme:A,scheme:`light`,className:`rounded-lg p-2`,children:[(0,E.jsx)(M,{title:`Violet, pinned light`}),(0,E.jsx)(_,{theme:j,scheme:`dark`,className:`mt-2 rounded-lg p-2`,children:(0,E.jsx)(M,{title:`Nested: amber dark`})})]})]})}var P=`import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { buildTheme, ThemeScope } from "@kitora/theme"

const violet = buildTheme({ brand: { l: 0.55, c: 0.22, h: 290 }, radius: 1 })
const amber = buildTheme({ brand: { l: 0.7, c: 0.18, h: 75 }, radius: 0.125, neutral: { hue: 75, chroma: 0.012 } })

function Card({ title }: { readonly title: string }) {
  return (
    <div className="grid gap-2 rounded-lg border bg-card p-3">
      <div className="flex items-center justify-between text-[13px] font-medium">
        {title} <Badge>New</Badge>
      </div>
      <div className="flex gap-1.5">
        <Button size="sm">Save</Button>
        <Button size="sm" variant="soft">
          Share
        </Button>
      </div>
    </div>
  )
}

/** Any subtree can carry its own theme; scopes nest, and each can follow the page's scheme or pin one. */
export function BasicSubtree() {
  return (
    <div className="grid gap-2 sm:grid-cols-3">
      <ThemeScope theme={violet} className="rounded-lg p-2">
        <Card title="Violet, round, follows page" />
      </ThemeScope>
      <ThemeScope theme={amber} scheme="dark" className="rounded-lg p-2">
        <Card title="Amber, square, pinned dark" />
      </ThemeScope>
      <ThemeScope theme={violet} scheme="light" className="rounded-lg p-2">
        <Card title="Violet, pinned light" />
        <ThemeScope theme={amber} scheme="dark" className="mt-2 rounded-lg p-2">
          <Card title="Nested: amber dark" />
        </ThemeScope>
      </ThemeScope>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>u(()=>import(`./subtree-Bop7VNQP.js`),[]));var F=e(l(),1),I=[{value:`ltr`,label:`LTR`},{value:`rtl`,label:`RTL`}],L={ltr:{title:`Volume`,body:`The slider fills from the left and the Right arrow raises it.`},rtl:{title:`مستوى الصوت`,body:`يمتلئ شريط التمرير من اليمين، والسهم الأيسر يرفعه.`}};function R(){let[e,o]=(0,F.useState)(`ltr`),[s,c]=(0,F.useState)(30);return(0,E.jsxs)(`div`,{className:`grid gap-3`,children:[(0,E.jsx)(S,{label:`Reading direction`,options:I,value:e,onChange:o}),(0,E.jsx)(d,{dir:e,onDirChange:o,className:`grid gap-3 rounded-lg border p-3 text-[13px]`,children:(0,E.jsxs)(a,{defaultValue:`sound`,children:[(0,E.jsxs)(r,{children:[(0,E.jsx)(n,{value:`sound`,children:`Sound`}),(0,E.jsx)(n,{value:`display`,children:`Display`}),(0,E.jsx)(n,{value:`keys`,children:`Keys`})]}),(0,E.jsxs)(i,{value:`sound`,className:`grid gap-2 pt-2`,children:[(0,E.jsx)(`p`,{className:`font-medium`,children:L[e].title}),(0,E.jsx)(t,{value:[s],onValueChange:e=>c(typeof e==`number`?e:e[0]??0),"aria-label":`Volume`,className:`max-w-xs`}),(0,E.jsxs)(`p`,{className:`text-muted-foreground`,children:[L[e].body,` `,(0,E.jsxs)(`span`,{className:`tabular-nums`,children:[`(`,s,`)`]})]})]}),(0,E.jsx)(i,{value:`display`,className:`pt-2 text-muted-foreground`,children:`Display settings`}),(0,E.jsx)(i,{value:`keys`,className:`pt-2 text-muted-foreground`,children:`Keyboard settings`})]})})]})}var z=`import { useState } from "react"
import { Slider } from "@kitora/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@kitora/ui/tabs"
import { DirectionProvider, SegmentedControl, type Direction } from "@kitora/theme"

const OPTIONS = [
  { value: "ltr", label: "LTR" },
  { value: "rtl", label: "RTL" },
] as const

const COPY: { readonly [D in Direction]: { readonly title: string; readonly body: string } } = {
  ltr: { title: "Volume", body: "The slider fills from the left and the Right arrow raises it." },
  rtl: { title: "مستوى الصوت", body: "يمتلئ شريط التمرير من اليمين، والسهم الأيسر يرفعه." },
}

/**
 * \`DirectionProvider\` (controlled here) puts \`dir\` on a wrapper and feeds the primitives' direction
 * context, so the Slider flips its fill AND its arrow keys, and Tabs flips its arrow-key order. Pick
 * RTL, focus the slider and press the Left arrow: the value goes up. In an app, \`target="document"\`
 * puts \`dir\` on <html> instead.
 */
export function BasicDirection() {
  const [dir, setDir] = useState<Direction>("ltr")
  const [volume, setVolume] = useState(30)
  return (
    <div className="grid gap-3">
      <SegmentedControl label="Reading direction" options={OPTIONS} value={dir} onChange={setDir} />
      <DirectionProvider dir={dir} onDirChange={setDir} className="grid gap-3 rounded-lg border p-3 text-[13px]">
        <Tabs defaultValue="sound">
          <TabsList>
            <TabsTrigger value="sound">Sound</TabsTrigger>
            <TabsTrigger value="display">Display</TabsTrigger>
            <TabsTrigger value="keys">Keys</TabsTrigger>
          </TabsList>
          <TabsContent value="sound" className="grid gap-2 pt-2">
            <p className="font-medium">{COPY[dir].title}</p>
            <Slider value={[volume]} onValueChange={(v) => setVolume(typeof v === "number" ? v : (v[0] ?? 0))} aria-label="Volume" className="max-w-xs" />
            <p className="text-muted-foreground">
              {COPY[dir].body} <span className="tabular-nums">({volume})</span>
            </p>
          </TabsContent>
          <TabsContent value="display" className="pt-2 text-muted-foreground">
            Display settings
          </TabsContent>
          <TabsContent value="keys" className="pt-2 text-muted-foreground">
            Keyboard settings
          </TabsContent>
        </Tabs>
      </DirectionProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>u(()=>import(`./direction-CLlkE5jo.js`),[]));function B(){let e=v();return(0,E.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,E.jsxs)(b,{size:`sm`,variant:`outline`,children:[(0,E.jsx)(e===`rtl`?h:o,{className:`size-4`,"aria-hidden":!0}),`Previous`]}),(0,E.jsx)(`span`,{className:`text-[12px] text-muted-foreground tabular-nums`,children:`Page 2 of 9`}),(0,E.jsxs)(b,{size:`sm`,variant:`outline`,"data-testid":`direction-next`,children:[`Next`,(0,E.jsx)(e===`rtl`?o:h,{className:`size-4`,"aria-hidden":!0,"data-icon":e===`rtl`?`chevron-left`:`chevron-right`})]})]})}function V(){let e=v()===`rtl`?o:h;return(0,E.jsxs)(`nav`,{"aria-label":`Breadcrumb`,className:`flex items-center gap-1 text-[12px] text-muted-foreground`,children:[(0,E.jsx)(`span`,{children:`Settings`}),(0,E.jsx)(e,{className:`size-3`,"aria-hidden":!0}),(0,E.jsx)(`span`,{children:`Team`}),(0,E.jsx)(e,{className:`size-3`,"aria-hidden":!0}),(0,E.jsx)(`span`,{className:`text-foreground`,children:`Members`})]})}function H(){let{dir:e,toggle:t}=g();return(0,E.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,E.jsx)(V,{}),(0,E.jsxs)(b,{size:`sm`,variant:`secondary`,onClick:t,children:[`Switch to `,e===`rtl`?`LTR`:`RTL`]})]})}function U(){return(0,E.jsxs)(d,{className:`grid gap-3 rounded-lg border p-3`,children:[(0,E.jsx)(H,{}),(0,E.jsx)(B,{})]})}var W=`import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { DirectionProvider, useDirection, useDirectionState } from "@kitora/theme"

/**
 * A pager of your own that reads \`useDirection()\`: "Next" points the way the text reads, so its
 * chevron swaps in RTL, and the breadcrumb's chevron separators turn round. Logical CSS (\`ms-*\`, \`ps-*\`,
 * \`text-start\`) flips by itself; icons and arrows are what need the hook.
 */
function Pager() {
  const dir = useDirection()
  const Back = dir === "rtl" ? ChevronRight : ChevronLeft
  const Forward = dir === "rtl" ? ChevronLeft : ChevronRight
  return (
    <div className="flex items-center gap-2">
      <Button size="sm" variant="outline">
        <Back className="size-4" aria-hidden />
        Previous
      </Button>
      <span className="text-[12px] text-muted-foreground tabular-nums">Page 2 of 9</span>
      <Button size="sm" variant="outline" data-testid="direction-next">
        Next
        <Forward className="size-4" aria-hidden data-icon={dir === "rtl" ? "chevron-left" : "chevron-right"} />
      </Button>
    </div>
  )
}

/** Text characters like › are mirrored by the browser in RTL already; SVG icons are not, so they need the hook. */
function Crumbs() {
  const dir = useDirection()
  const Sep = dir === "rtl" ? ChevronLeft : ChevronRight
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-[12px] text-muted-foreground">
      <span>Settings</span>
      <Sep className="size-3" aria-hidden />
      <span>Team</span>
      <Sep className="size-3" aria-hidden />
      <span className="text-foreground">Members</span>
    </nav>
  )
}

/** The toggle is a plain Button driving \`useDirectionState().toggle\`. */
function Toolbar() {
  const { dir, toggle } = useDirectionState()
  return (
    <div className="flex items-center justify-between gap-2">
      <Crumbs />
      <Button size="sm" variant="secondary" onClick={toggle}>
        Switch to {dir === "rtl" ? "LTR" : "RTL"}
      </Button>
    </div>
  )
}

export function BasicDirectionCompose() {
  return (
    <DirectionProvider className="grid gap-3 rounded-lg border p-3">
      <Toolbar />
      <Pager />
    </DirectionProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>u(()=>import(`./direction-compose-DYID0dGF.js`),[]));function G(){let[e,t]=(0,F.useState)(`compact`);return(0,E.jsxs)(`div`,{className:`grid gap-2`,children:[(0,E.jsx)(C,{value:e,onChange:t}),(0,E.jsx)(_,{density:e,paint:!1,className:`w-80 max-w-full`,children:(0,E.jsxs)(`form`,{className:`grid gap-2 rounded-lg border bg-card p-3`,onSubmit:e=>e.preventDefault(),children:[(0,E.jsx)(c,{"aria-label":`Email`,placeholder:`you@company.com`,className:`h-7 text-[13px]`}),(0,E.jsxs)(`div`,{className:`flex gap-2`,children:[(0,E.jsx)(b,{size:`sm`,children:`Invite`}),(0,E.jsx)(b,{size:`sm`,variant:`ghost`,children:`Cancel`})]})]})})]})}var K=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { DensityToggle, ThemeScope, type DensityName } from "@kitora/theme"

/** Density sets Tailwind's \`--spacing\` unit on the subtree, so every \`h-7\`, \`px-2\` and \`gap-1\` inside re-flows. */
export function BasicDensity() {
  const [density, setDensity] = useState<DensityName>("compact")
  return (
    <div className="grid gap-2">
      <DensityToggle value={density} onChange={setDensity} />
      <ThemeScope density={density} paint={false} className="w-80 max-w-full">
        <form className="grid gap-2 rounded-lg border bg-card p-3" onSubmit={(e) => e.preventDefault()}>
          <Input aria-label="Email" placeholder="you@company.com" className="h-7 text-[13px]" />
          <div className="flex gap-2">
            <Button size="sm">Invite</Button>
            <Button size="sm" variant="ghost">
              Cancel
            </Button>
          </div>
        </form>
      </ThemeScope>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>u(()=>import(`./density-C4MyaAuS.js`),[]));function q(){return(0,E.jsxs)(`div`,{children:[(0,E.jsx)(s,{title:`Basics: provider`,children:"`ThemeProvider` owns mode and density; `ThemeScope` themes any subtree; `DirectionProvider` owns ltr / rtl. Both work with tokens only, so every kit inside follows."}),(0,E.jsx)(T,{n:1,title:`Light, dark and system`,blurb:`Pick a mode; system follows prefers-color-scheme live.`,code:k,children:(0,E.jsx)(O,{})}),(0,E.jsx)(T,{n:2,title:`Per-subtree themes`,blurb:`Three scopes with different brands and radii, one nested inside another.`,code:P,children:(0,E.jsx)(N,{})}),(0,E.jsx)(T,{n:3,title:`Density`,blurb:`One variable re-flows the controls inside the scope.`,code:K,children:(0,E.jsx)(G,{})}),(0,E.jsx)(T,{n:4,title:`Direction: LTR and RTL`,blurb:"DirectionProvider sets `dir` (on a wrapper here, or on <html>) and feeds the primitives' direction context, so the Slider's fill and arrow keys and the Tabs' arrow order flip with the text.",code:z,children:(0,E.jsx)(R,{})}),(0,E.jsx)(T,{n:5,title:`Direction: compose your own`,blurb:"Your own pager and breadcrumb read `useDirection()` to turn their arrows; a plain Button drives `useDirectionState().toggle`.",code:W,children:(0,E.jsx)(U,{})})]})}export{q as component};