import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{r as n,t as r}from"./radio-group-BUGukExc.js";import{t as i}from"./toggle-group-CXAYKIkx.js";import{t as a}from"./monitor-CbB6cQoo.js";import{t as o}from"./moon-DY7S1vxw.js";import{t as s}from"./sun-Bc31iW-J.js";import{n as c,t as l}from"./text-align-end-CMzNIq__.js";import{t as u}from"./text-align-start-CNDNBg84.js";import{Bc as d,Cc as f,Ic as p,yo as m}from"./index-q72zUtm9.js";import{t as h}from"./badge-Be8rVEaF.js";import{n as g,t as _}from"./card-WiouR7Ep.js";import{n as v,t as y}from"./segmented-control-DDDIfH0C.js";var b=e({SegmentedControlBasic:()=>w}),x=t(d(),1),S=p(),C=[{value:`day`,label:`Day`},{value:`week`,label:`Week`},{value:`month`,label:`Month`}];function w(){let[e,t]=(0,x.useState)(`week`);return(0,S.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,S.jsx)(y,{"aria-label":`Calendar view`,value:e,onValueChange:t,options:C}),(0,S.jsxs)(`p`,{className:`text-[13px] text-muted-foreground`,children:[`View: `,e,` (pressing it again keeps it)`]}),(0,S.jsx)(y,{"aria-label":`Calendar view, uncontrolled`,options:C,indicator:!0})]})}var T=e({SegmentedControlBuildYourOwn:()=>k}),E=[{value:`day`,label:`Day`},{value:`week`,label:`Week`},{value:`month`,label:`Month`},{value:`year`,label:`Year`,disabled:!0}],D=`inline-flex w-fit items-center gap-0.5 rounded-md border bg-muted/60 p-0.5 data-disabled:opacity-50`,O=`h-7 rounded-[calc(var(--radius-md)-2px)] px-2 text-[13px] font-medium text-muted-foreground outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring data-pressed:bg-background data-pressed:text-foreground data-pressed:shadow-sm data-checked:bg-background data-checked:text-foreground data-checked:shadow-sm data-disabled:pointer-events-none data-disabled:opacity-50`;function k({semantics:e=`toggle`,value:t,defaultValue:a,onValueChange:o,disabled:s=!1}){let[c,l]=(0,x.useState)(a),u=t??c??E[0]?.value??``,d=e=>{e!==u&&(l(e),o?.(e))};return e===`radio`?(0,S.jsx)(r,{"aria-label":`Calendar view`,value:u,onValueChange:d,disabled:s,enableHomeAndEndKeys:!0,"data-orientation":`horizontal`,className:D,children:E.map(e=>(0,S.jsx)(n,{value:e.value,disabled:e.disabled,nativeButton:!0,render:(0,S.jsx)(`button`,{type:`button`}),className:O,children:e.label},e.value))}):(0,S.jsx)(i,{"aria-label":`Calendar view`,value:[u],onValueChange:e=>{let t=e[0];t!==void 0&&d(t)},disallowEmptySelection:!0,disabled:s,className:D,children:E.map(e=>(0,S.jsx)(m,{value:e.value,disabled:e.disabled,className:O,children:e.label},e.value))})}var A=e({SegmentedControlComposeIssueFilter:()=>M}),j=[{id:41,title:`Calendar drops the time zone on save`,open:!0},{id:38,title:`Export skips hidden columns`,open:!1},{id:35,title:`Tooltip covers the last menu item`,open:!0},{id:29,title:`Dark mode badge contrast`,open:!1}];function M(){let[e,t]=(0,x.useState)(`all`),n=j.filter(t=>e===`all`||e===`open`===t.open);return(0,S.jsxs)(`div`,{className:`grid w-full max-w-md gap-3`,children:[(0,S.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2`,children:[(0,S.jsx)(`span`,{className:`text-sm font-medium`,children:`Issues`}),(0,S.jsx)(y,{"aria-label":`Show issues`,size:`sm`,value:e,onValueChange:t,indicator:!0,options:[{value:`all`,label:`All`},{value:`open`,label:`Open`},{value:`closed`,label:`Closed`}]})]}),(0,S.jsx)(`div`,{className:`grid gap-2`,children:n.map(e=>(0,S.jsx)(_,{children:(0,S.jsxs)(g,{className:`flex items-center justify-between gap-2 text-sm`,children:[(0,S.jsxs)(`span`,{className:`min-w-0 truncate`,children:[(0,S.jsxs)(`span`,{className:`text-muted-foreground`,children:[`#`,e.id]}),` `,e.title]}),(0,S.jsx)(h,{variant:e.open?`default`:`secondary`,children:e.open?`Open`:`Closed`})]})},e.id))})]})}var N=e({SegmentedControlRadio:()=>P});function P(){let[e,t]=(0,x.useState)(`month`);return(0,S.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,S.jsxs)(y,{semantics:`radio`,"aria-label":`Billing period`,value:e,onValueChange:t,indicator:!0,children:[(0,S.jsx)(v,{value:`month`,children:`Monthly`}),(0,S.jsxs)(v,{value:`year`,className:`gap-1.5`,children:[`Yearly`,(0,S.jsx)(`span`,{className:`rounded bg-emerald-500/12 px-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400`,children:`−20%`})]}),(0,S.jsx)(v,{value:`lifetime`,disabled:!0,children:`Lifetime`})]}),(0,S.jsxs)(`p`,{className:`text-[13px] text-muted-foreground`,children:[`Arrow keys move and select: `,e]})]})}var F=e({SegmentedControlSizesAndIcons:()=>R}),I=[{value:`light`,label:(0,S.jsx)(s,{}),title:`Light`},{value:`dark`,label:(0,S.jsx)(o,{}),title:`Dark`},{value:`system`,label:(0,S.jsx)(a,{}),title:`System`}],L=[{value:`start`,label:(0,S.jsx)(u,{}),title:`Align start`},{value:`center`,label:(0,S.jsx)(c,{}),title:`Align centre`},{value:`end`,label:(0,S.jsx)(l,{}),title:`Align end`}];function R(){return(0,S.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,S.jsx)(y,{"aria-label":`Density, extra small`,size:`xs`,options:[{value:`compact`,label:`Compact`},{value:`comfortable`,label:`Comfortable`}]}),(0,S.jsx)(y,{"aria-label":`Density, small`,size:`sm`,options:[{value:`compact`,label:`Compact`},{value:`comfortable`,label:`Comfortable`}]}),(0,S.jsx)(y,{"aria-label":`Density`,options:[{value:`compact`,label:`Compact`},{value:`comfortable`,label:`Comfortable`}]}),(0,S.jsx)(y,{"aria-label":`Colour mode`,size:`sm`,defaultValue:`system`,options:I,indicator:!0}),(0,S.jsx)(y,{"aria-label":`Text alignment`,options:L,disabled:!0})]})}var z=`import { useState } from "react"
import { SegmentedControl } from "@kitora/ui/segmented-control"

const VIEWS = [
  { value: "day", label: "Day" },
  { value: "week", label: "Week" },
  { value: "month", label: "Month" },
]

export function SegmentedControlBasic() {
  const [view, setView] = useState("week")

  return (
    <div className="flex flex-col items-center gap-4">
      <SegmentedControl aria-label="Calendar view" value={view} onValueChange={setView} options={VIEWS} />
      <p className="text-[13px] text-muted-foreground">View: {view} (pressing it again keeps it)</p>
      <SegmentedControl aria-label="Calendar view, uncontrolled" options={VIEWS} indicator />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>f(()=>import(`./basic-DLmz6URZ.js`),[]));var B=`import { useState } from "react"
import { Radio, RadioGroup, Toggle, ToggleGroup } from "@kitora/primitives/react"

/** One segment: the value it picks, its text and whether it can be picked. */
interface Option {
  readonly value: string
  readonly label: string
  readonly disabled?: boolean
}

const VIEWS: readonly Option[] = [
  { value: "day", label: "Day" },
  { value: "week", label: "Week" },
  { value: "month", label: "Month" },
  { value: "year", label: "Year", disabled: true },
]

/** The muted track and its segments, the chosen one raised (\`data-pressed\` for a toggle, \`data-checked\` for a radio). */
const TRACK = "inline-flex w-fit items-center gap-0.5 rounded-md border bg-muted/60 p-0.5 data-disabled:opacity-50"
const SEGMENT = "h-7 rounded-[calc(var(--radius-md)-2px)] px-2 text-[13px] font-medium text-muted-foreground outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring data-pressed:bg-background data-pressed:text-foreground data-pressed:shadow-sm data-checked:bg-background data-checked:text-foreground data-checked:shadow-sm data-disabled:pointer-events-none data-disabled:opacity-50"

/**
 * A segmented control built from the primitives' parts only: exactly one value of a few, never empty. \`semantics="toggle"\` is a
 * \`ToggleGroup\` of \`Toggle\`s with \`disallowEmptySelection\` (arrows move focus, Space or Enter picks); \`semantics="radio"\` is a
 * \`RadioGroup\` of \`Radio.Root\`s rendered as buttons (arrows, Home and End move and pick). Pass \`value\` / \`onValueChange\` to hold it.
 */
export function SegmentedControlBuildYourOwn({
  semantics = "toggle",
  value,
  defaultValue,
  onValueChange,
  disabled = false,
}: {
  semantics?: "toggle" | "radio"
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
}) {
  const [own, setOwn] = useState(defaultValue)
  // Never empty: the caller's value, else the last pick, else the first segment.
  const current = value ?? own ?? VIEWS[0]?.value ?? ""
  const choose = (next: string) => {
    if (next === current) return
    setOwn(next)
    onValueChange?.(next)
  }

  if (semantics === "radio") {
    return (
      <RadioGroup<string> aria-label="Calendar view" value={current} onValueChange={choose} disabled={disabled} enableHomeAndEndKeys data-orientation="horizontal" className={TRACK}>
        {VIEWS.map((view) => (
          <Radio.Root key={view.value} value={view.value} disabled={view.disabled} nativeButton render={<button type="button" />} className={SEGMENT}>
            {view.label}
          </Radio.Root>
        ))}
      </RadioGroup>
    )
  }
  return (
    <ToggleGroup
      aria-label="Calendar view"
      value={[current]}
      onValueChange={(next) => {
        const picked = next[0]
        if (picked !== undefined) choose(picked)
      }}
      disallowEmptySelection
      disabled={disabled}
      className={TRACK}
    >
      {VIEWS.map((view) => (
        <Toggle key={view.value} value={view.value} disabled={view.disabled} className={SEGMENT}>
          {view.label}
        </Toggle>
      ))}
    </ToggleGroup>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>f(()=>import(`./build-your-own-BgWfhXS9.js`),[]));var V=`import { useState } from "react"
import { Badge } from "@kitora/ui/badge"
import { Card, CardContent } from "@kitora/ui/card"
import { SegmentedControl } from "@kitora/ui/segmented-control"

type Filter = "all" | "open" | "closed"

const ISSUES = [
  { id: 41, title: "Calendar drops the time zone on save", open: true },
  { id: 38, title: "Export skips hidden columns", open: false },
  { id: 35, title: "Tooltip covers the last menu item", open: true },
  { id: 29, title: "Dark mode badge contrast", open: false },
]

export function SegmentedControlComposeIssueFilter() {
  const [filter, setFilter] = useState<Filter>("all")
  const shown = ISSUES.filter((i) => filter === "all" || (filter === "open") === i.open)
  return (
    <div className="grid w-full max-w-md gap-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-sm font-medium">Issues</span>
        <SegmentedControl<Filter>
          aria-label="Show issues"
          size="sm"
          value={filter}
          onValueChange={setFilter}
          indicator
          options={[
            { value: "all", label: "All" },
            { value: "open", label: "Open" },
            { value: "closed", label: "Closed" },
          ]}
        />
      </div>
      <div className="grid gap-2">
        {shown.map((issue) => (
          <Card key={issue.id}>
            <CardContent className="flex items-center justify-between gap-2 text-sm">
              <span className="min-w-0 truncate">
                <span className="text-muted-foreground">#{issue.id}</span> {issue.title}
              </span>
              <Badge variant={issue.open ? "default" : "secondary"}>{issue.open ? "Open" : "Closed"}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>f(()=>import(`./compose-DfsggnNG.js`),[]));var H=`import { useState } from "react"
import { SegmentedControl, SegmentedControlItem } from "@kitora/ui/segmented-control"

export function SegmentedControlRadio() {
  const [period, setPeriod] = useState("month")

  return (
    <div className="flex flex-col items-center gap-3">
      <SegmentedControl semantics="radio" aria-label="Billing period" value={period} onValueChange={setPeriod} indicator>
        <SegmentedControlItem value="month">Monthly</SegmentedControlItem>
        <SegmentedControlItem value="year" className="gap-1.5">
          Yearly
          <span className="rounded bg-emerald-500/12 px-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">−20%</span>
        </SegmentedControlItem>
        <SegmentedControlItem value="lifetime" disabled>
          Lifetime
        </SegmentedControlItem>
      </SegmentedControl>
      <p className="text-[13px] text-muted-foreground">Arrow keys move and select: {period}</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>f(()=>import(`./radio-fI11vI4h.js`),[]));var U=`import { AlignCenter, AlignLeft, AlignRight, Monitor, Moon, Sun } from "lucide-react"
import { SegmentedControl } from "@kitora/ui/segmented-control"

const MODES = [
  { value: "light", label: <Sun />, title: "Light" },
  { value: "dark", label: <Moon />, title: "Dark" },
  { value: "system", label: <Monitor />, title: "System" },
]

const ALIGN = [
  { value: "start", label: <AlignLeft />, title: "Align start" },
  { value: "center", label: <AlignCenter />, title: "Align centre" },
  { value: "end", label: <AlignRight />, title: "Align end" },
]

export function SegmentedControlSizesAndIcons() {
  return (
    <div className="flex flex-col items-center gap-3">
      <SegmentedControl aria-label="Density, extra small" size="xs" options={[{ value: "compact", label: "Compact" }, { value: "comfortable", label: "Comfortable" }]} />
      <SegmentedControl aria-label="Density, small" size="sm" options={[{ value: "compact", label: "Compact" }, { value: "comfortable", label: "Comfortable" }]} />
      <SegmentedControl aria-label="Density" options={[{ value: "compact", label: "Compact" }, { value: "comfortable", label: "Comfortable" }]} />
      <SegmentedControl aria-label="Colour mode" size="sm" defaultValue="system" options={MODES} indicator />
      <SegmentedControl aria-label="Text alignment" options={ALIGN} disabled />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>f(()=>import(`./sizes-and-icons-D3V0N3J_.js`),[]));var W={"./demos/segmented-control/basic.tsx":b,"./demos/segmented-control/build-your-own.tsx":T,"./demos/segmented-control/compose.tsx":A,"./demos/segmented-control/radio.tsx":N,"./demos/segmented-control/sizes-and-icons.tsx":F},G={"./demos/segmented-control/basic.tsx":z,"./demos/segmented-control/build-your-own.tsx":B,"./demos/segmented-control/compose.tsx":V,"./demos/segmented-control/radio.tsx":H,"./demos/segmented-control/sizes-and-icons.tsx":U};export{W as modules,G as sources};