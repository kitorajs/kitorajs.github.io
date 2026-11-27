import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./toggle-group-BiRY4vGz.js";import{t as r}from"./layout-grid-CH-2fjKR.js";import{t as i}from"./list-Drpf7xgB.js";import{t as a}from"./rows-3-Be9Q2ni8.js";import{n as o,t as s}from"./text-align-end-D3gFGC4M.js";import{t as c}from"./text-align-start-BpOvNy8K.js";import{Ec as l,Pi as u,Uc as d,xo as f,zc as p}from"./index-BZuUy872.js";import{t as m}from"./badge-zOMNRv4l.js";import{n as h,t as g}from"./card-XcfOPVWP.js";import{n as _,t as v}from"./toggle-group-DGKH1xFk.js";var y=u(`layout-list`,[[`rect`,{width:`7`,height:`7`,x:`3`,y:`3`,rx:`1`,key:`1g98yp`}],[`rect`,{width:`7`,height:`7`,x:`3`,y:`14`,rx:`1`,key:`1bb6yr`}],[`path`,{d:`M14 4h7`,key:`3xa0d5`}],[`path`,{d:`M14 9h7`,key:`1icrd9`}],[`path`,{d:`M14 15h7`,key:`1mj8o2`}],[`path`,{d:`M14 20h7`,key:`11slyb`}]]),b=e({ToggleGroupBuildYourOwn:()=>C}),x=p(),S=[{value:`left`,label:`Align left`,icon:(0,x.jsx)(c,{})},{value:`center`,label:`Align center`,icon:(0,x.jsx)(o,{})},{value:`right`,label:`Align right`,icon:(0,x.jsx)(s,{})}];function C({value:e,defaultValue:t=e===void 0?[`left`]:void 0,onValueChange:r,multiple:i,disallowEmptySelection:a,orientation:o=`horizontal`}){return(0,x.jsx)(n,{"aria-label":`Text alignment`,value:e,defaultValue:t,onValueChange:e=>r?.(e),multiple:i,disallowEmptySelection:a,orientation:o,className:`flex w-fit gap-0.5 data-[orientation=vertical]:flex-col`,children:S.map(e=>(0,x.jsx)(f,{value:e.value,"aria-label":e.label,className:`inline-flex size-8 items-center justify-center rounded-sm outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 data-pressed:bg-muted [&_svg]:size-4`,children:e.icon},e.value))})}var w=e({ToggleGroupChips:()=>D}),T=t(d(),1),E=[`Bug`,`Feature`,`Docs`,`Design`,`Performance`,`Security`];function D(){let[e,t]=(0,T.useState)([`Bug`]);return(0,x.jsxs)(`div`,{className:`flex w-full max-w-md flex-col items-center gap-3`,children:[(0,x.jsx)(v,{variant:`chip`,multiple:!0,"aria-label":`Filter by label`,value:e,onValueChange:t,children:E.map(e=>(0,x.jsx)(_,{value:e,children:e},e))}),(0,x.jsxs)(v,{variant:`chip`,size:`sm`,"aria-label":`Sort`,defaultValue:[`newest`],disallowEmptySelection:!0,children:[(0,x.jsx)(_,{value:`newest`,children:`Newest`}),(0,x.jsx)(_,{value:`oldest`,children:`Oldest`}),(0,x.jsx)(_,{value:`popular`,children:`Most popular`})]}),(0,x.jsxs)(`p`,{className:`text-[13px] text-muted-foreground`,children:[`Labels: `,e.length>0?e.join(`, `):`none`]})]})}var O=e({ToggleGroupComposeViewSwitcher:()=>A}),k=[`Atlas`,`Beacon`,`Comet`,`Delta`];function A(){let[e,t]=(0,T.useState)([`grid`]),n=e[0]!==`list`;return(0,x.jsxs)(`div`,{className:`grid w-full max-w-md gap-3`,children:[(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2`,children:[(0,x.jsx)(`span`,{className:`text-sm font-medium`,children:`Projects`}),(0,x.jsxs)(v,{value:e,onValueChange:e=>e.length>0&&t(e),children:[(0,x.jsx)(_,{value:`grid`,"aria-label":`Grid view`,children:(0,x.jsx)(r,{})}),(0,x.jsx)(_,{value:`list`,"aria-label":`List view`,children:(0,x.jsx)(i,{})})]})]}),(0,x.jsx)(`div`,{className:n?`grid grid-cols-2 gap-2`:`grid gap-2`,children:k.map(e=>(0,x.jsx)(g,{children:(0,x.jsxs)(h,{className:`flex items-center justify-between gap-2 text-sm`,children:[e,(0,x.jsx)(m,{variant:`outline`,children:`Active`})]})},e))})]})}var j=e({ToggleGroupMultipleTextFormatting:()=>M});function M(){return(0,x.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,x.jsxs)(v,{defaultValue:[`bold`],multiple:!0,children:[(0,x.jsx)(_,{value:`bold`,"aria-label":`Bold`,children:(0,x.jsx)(`span`,{className:`font-bold`,children:`B`})}),(0,x.jsx)(_,{value:`italic`,"aria-label":`Italic`,children:(0,x.jsx)(`span`,{className:`italic`,children:`I`})}),(0,x.jsx)(_,{value:`underline`,"aria-label":`Underline`,children:(0,x.jsx)(`span`,{className:`underline`,children:`U`})})]})})}var N=e({ToggleGroupNeverEmpty:()=>P});function P(){let[e,t]=(0,T.useState)([`grid`]);return(0,x.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,x.jsxs)(v,{variant:`outline`,"aria-label":`View`,value:e,onValueChange:t,disallowEmptySelection:!0,children:[(0,x.jsx)(_,{value:`grid`,"aria-label":`Grid`,children:(0,x.jsx)(r,{})}),(0,x.jsx)(_,{value:`list`,"aria-label":`List`,children:(0,x.jsx)(y,{})}),(0,x.jsx)(_,{value:`rows`,"aria-label":`Rows`,children:(0,x.jsx)(a,{})})]}),(0,x.jsxs)(`p`,{className:`text-[13px] text-muted-foreground`,children:[`View: `,e.join(`, `),` (pressing it again keeps it)`]})]})}var F=e({ToggleGroupSingleAlignmentToolbar:()=>I});function I(){return(0,x.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,x.jsxs)(v,{defaultValue:[`left`],children:[(0,x.jsx)(_,{value:`left`,"aria-label":`Align left`,children:(0,x.jsx)(c,{})}),(0,x.jsx)(_,{value:`center`,"aria-label":`Align center`,children:(0,x.jsx)(o,{})}),(0,x.jsx)(_,{value:`right`,"aria-label":`Align right`,children:(0,x.jsx)(s,{})})]})})}var L=`import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react"
import { Toggle, ToggleGroup } from "@kitora/primitives/react"

const ALIGNMENTS = [
  { value: "left", label: "Align left", icon: <AlignLeftIcon /> },
  { value: "center", label: "Align center", icon: <AlignCenterIcon /> },
  { value: "right", label: "Align right", icon: <AlignRightIcon /> },
]

/**
 * A toggle group built from the primitives' \`ToggleGroup\` and \`Toggle\`: one tab stop, the arrow keys on the \`orientation\` axis, Home and
 * End, Space and Enter press. Single choice by default (\`multiple\` allows several); \`disallowEmptySelection\` keeps one pressed.
 */
export function ToggleGroupBuildYourOwn({
  value,
  defaultValue = value === undefined ? ["left"] : undefined,
  onValueChange,
  multiple,
  disallowEmptySelection,
  orientation = "horizontal",
}: {
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
  multiple?: boolean
  disallowEmptySelection?: boolean
  orientation?: "horizontal" | "vertical"
}) {
  return (
    <ToggleGroup
      aria-label="Text alignment"
      value={value}
      defaultValue={defaultValue}
      onValueChange={(next) => onValueChange?.(next)}
      multiple={multiple}
      disallowEmptySelection={disallowEmptySelection}
      orientation={orientation}
      className="flex w-fit gap-0.5 data-[orientation=vertical]:flex-col"
    >
      {ALIGNMENTS.map((item) => (
        <Toggle
          key={item.value}
          value={item.value}
          aria-label={item.label}
          className="inline-flex size-8 items-center justify-center rounded-sm outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 data-pressed:bg-muted [&_svg]:size-4"
        >
          {item.icon}
        </Toggle>
      ))}
    </ToggleGroup>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>l(()=>import(`./build-your-own-CubeseYn.js`),[]));var R=`import { useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@kitora/ui/toggle-group"

const LABELS = ["Bug", "Feature", "Docs", "Design", "Performance", "Security"]

export function ToggleGroupChips() {
  const [labels, setLabels] = useState<string[]>(["Bug"])

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3">
      <ToggleGroup variant="chip" multiple aria-label="Filter by label" value={labels} onValueChange={setLabels}>
        {LABELS.map((label) => (
          <ToggleGroupItem key={label} value={label}>
            {label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <ToggleGroup variant="chip" size="sm" aria-label="Sort" defaultValue={["newest"]} disallowEmptySelection>
        <ToggleGroupItem value="newest">Newest</ToggleGroupItem>
        <ToggleGroupItem value="oldest">Oldest</ToggleGroupItem>
        <ToggleGroupItem value="popular">Most popular</ToggleGroupItem>
      </ToggleGroup>
      <p className="text-[13px] text-muted-foreground">Labels: {labels.length > 0 ? labels.join(", ") : "none"}</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>l(()=>import(`./chips-BJvc2Hze.js`),[]));var z=`import { useState } from "react"
import { LayoutGrid, List } from "lucide-react"
import { Badge } from "@kitora/ui/badge"
import { Card, CardContent } from "@kitora/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@kitora/ui/toggle-group"

const projects = ["Atlas", "Beacon", "Comet", "Delta"]

export function ToggleGroupComposeViewSwitcher() {
  const [view, setView] = useState<string[]>(["grid"])
  const isGrid = view[0] !== "list"
  return (
    <div className="grid w-full max-w-md gap-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-sm font-medium">Projects</span>
        <ToggleGroup value={view} onValueChange={(v) => v.length > 0 && setView(v)}>
          <ToggleGroupItem value="grid" aria-label="Grid view">
            <LayoutGrid />
          </ToggleGroupItem>
          <ToggleGroupItem value="list" aria-label="List view">
            <List />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className={isGrid ? "grid grid-cols-2 gap-2" : "grid gap-2"}>
        {projects.map((p) => (
          <Card key={p}>
            <CardContent className="flex items-center justify-between gap-2 text-sm">
              {p}
              <Badge variant="outline">Active</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>l(()=>import(`./compose-DHcQGBC0.js`),[]));var B=`import { ToggleGroup, ToggleGroupItem } from "@kitora/ui/toggle-group"

export function ToggleGroupMultipleTextFormatting() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <ToggleGroup defaultValue={["bold"]} multiple>
        <ToggleGroupItem value="bold" aria-label="Bold">
          <span className="font-bold">B</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <span className="italic">I</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          <span className="underline">U</span>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>l(()=>import(`./multiple-text-formatting-DDveSMYP.js`),[]));var V=`import { useState } from "react"
import { LayoutGrid, LayoutList, Rows3 } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@kitora/ui/toggle-group"

export function ToggleGroupNeverEmpty() {
  const [view, setView] = useState<string[]>(["grid"])

  return (
    <div className="flex flex-col items-center gap-3">
      <ToggleGroup variant="outline" aria-label="View" value={view} onValueChange={setView} disallowEmptySelection>
        <ToggleGroupItem value="grid" aria-label="Grid">
          <LayoutGrid />
        </ToggleGroupItem>
        <ToggleGroupItem value="list" aria-label="List">
          <LayoutList />
        </ToggleGroupItem>
        <ToggleGroupItem value="rows" aria-label="Rows">
          <Rows3 />
        </ToggleGroupItem>
      </ToggleGroup>
      <p className="text-[13px] text-muted-foreground">View: {view.join(", ")} (pressing it again keeps it)</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>l(()=>import(`./never-empty-PdeZ62h5.js`),[]));var H=`import { AlignCenter, AlignLeft, AlignRight } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@kitora/ui/toggle-group"

export function ToggleGroupSingleAlignmentToolbar() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <ToggleGroup defaultValue={["left"]}>
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeft />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenter />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <AlignRight />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>l(()=>import(`./single-alignment-toolbar-DE_0dMBu.js`),[]));var U={"./demos/toggle-group/build-your-own.tsx":b,"./demos/toggle-group/chips.tsx":w,"./demos/toggle-group/compose.tsx":O,"./demos/toggle-group/multiple-text-formatting.tsx":j,"./demos/toggle-group/never-empty.tsx":N,"./demos/toggle-group/single-alignment-toolbar.tsx":F},W={"./demos/toggle-group/build-your-own.tsx":L,"./demos/toggle-group/chips.tsx":R,"./demos/toggle-group/compose.tsx":z,"./demos/toggle-group/multiple-text-formatting.tsx":B,"./demos/toggle-group/never-empty.tsx":V,"./demos/toggle-group/single-alignment-toolbar.tsx":H};export{U as modules,W as sources};