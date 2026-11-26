import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{n as t,t as n}from"./italic-DYnJ5SLL.js";import{t as r}from"./link-2-05NQ8Qy-.js";import{t as i}from"./mail-8xGud2d1.js";import{t as a}from"./pencil-DL9xkgPh.js";import{t as ee}from"./settings-Dn8u38Jz.js";import{t as o}from"./trash-2-qhjCvUtq.js";import{t as s}from"./underline-DIqy0Gq3.js";import{t as c}from"./input-C8M4VLUF.js";import{$r as l,Cc as u,Di as d,Ic as f,Jr as p,Qr as m,Xr as h,Yr as g,Zr as _,aa as v,ca as te,ia as y,la as b,oa as x,sa as ne,ti as S,ua as re}from"./index-q72zUtm9.js";import{t as ie}from"./label-DjxTNoON.js";import{n as C}from"./hints-C8vZ_fcw.js";import{t as w}from"./button-group-ptoJBpd1.js";var T=e({TooltipBuildYourOwn:()=>O}),E=f(),D=[{label:`Edit`,icon:a},{label:`Duplicate`,icon:d},{label:`Delete`,icon:o}];function O({open:e,onOpenChange:t}){return(0,E.jsx)(te,{delay:0,children:(0,E.jsx)(`div`,{role:`group`,className:`flex`,children:D.map(({label:n,icon:r},i)=>(0,E.jsxs)(b,{open:i===0?e:void 0,onOpenChange:i===0?e=>t?.(e):void 0,children:[(0,E.jsx)(re,{render:(0,E.jsx)(S,{variant:`outline`,size:`icon`,"aria-label":n}),children:(0,E.jsx)(r,{})}),(0,E.jsx)(x,{children:(0,E.jsx)(ne,{side:`top`,align:`center`,sideOffset:4,className:`isolate z-50`,children:(0,E.jsxs)(v,{className:`z-50 w-fit max-w-xs origin-(--transform-origin) rounded-md bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none`,children:[n,(0,E.jsx)(y,{className:`size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px] bg-foreground data-[side=top]:-bottom-2.5`})]})})})]},n))})})}var k=e({TooltipComposeIconToolbar:()=>j}),A=[{label:`Edit`,icon:a},{label:`Duplicate`,icon:d},{label:`Delete`,icon:o}];function j(){return(0,E.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,E.jsx)(w,{children:A.map(({label:e,icon:t})=>(0,E.jsxs)(g,{children:[(0,E.jsx)(m,{asChild:!0,children:(0,E.jsx)(S,{variant:`outline`,size:`icon`,"aria-label":e,children:(0,E.jsx)(t,{})})}),(0,E.jsx)(h,{children:e})]},e))})})}var M=e({TooltipDefault:()=>N});function N(){return(0,E.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,E.jsxs)(g,{children:[(0,E.jsx)(m,{asChild:!0,children:(0,E.jsx)(S,{variant:`outline`,size:`icon`,"aria-label":`Send email`,children:(0,E.jsx)(i,{})})}),(0,E.jsx)(h,{children:`Send email`})]}),(0,E.jsxs)(g,{children:[(0,E.jsx)(m,{asChild:!0,children:(0,E.jsx)(S,{variant:`ghost`,size:`icon`,"aria-label":`Settings`,children:(0,E.jsx)(ee,{})})}),(0,E.jsx)(h,{children:`Settings`})]})]})}var P=e({TooltipDisabledButton:()=>F});function F(){return(0,E.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,E.jsxs)(g,{children:[(0,E.jsx)(m,{asChild:!0,children:(0,E.jsx)(S,{disabled:!0,focusableWhenDisabled:!0,children:`Publish`})}),(0,E.jsx)(h,{children:`Add a title before you publish`})]})})}var I=e({TooltipInfoHint:()=>L});function L(){return(0,E.jsxs)(`dl`,{className:`grid w-full max-w-xs grid-cols-[1fr_auto] gap-x-4 gap-y-2 text-sm`,children:[(0,E.jsxs)(`dt`,{className:`inline-flex items-center gap-1 text-muted-foreground`,children:[`Apdex`,(0,E.jsx)(C,{label:`About Apdex`,content:`Share of requests answered within the target time, counting tolerable ones as half.`})]}),(0,E.jsx)(`dd`,{className:`text-end tabular-nums`,children:`0.94`}),(0,E.jsxs)(`dt`,{className:`inline-flex items-center gap-1 text-muted-foreground`,children:[`p95 latency`,(0,E.jsx)(C,{label:`About p95 latency`,content:`95% of requests finished faster than this.`})]}),(0,E.jsx)(`dd`,{className:`text-end tabular-nums`,children:`182 ms`})]})}var R=e({TooltipSharedByTriggers:()=>B}),z=l();function B(){return(0,E.jsxs)(_,{children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-2`,children:[(0,E.jsx)(m,{handle:z,payload:{label:`Bold`,shortcut:`Ctrl B`},asChild:!0,children:(0,E.jsx)(S,{variant:`outline`,size:`icon`,"aria-label":`Bold`,children:(0,E.jsx)(t,{})})}),(0,E.jsx)(m,{handle:z,payload:{label:`Italic`,shortcut:`Ctrl I`},asChild:!0,children:(0,E.jsx)(S,{variant:`outline`,size:`icon`,"aria-label":`Italic`,children:(0,E.jsx)(n,{})})}),(0,E.jsx)(m,{handle:z,payload:{label:`Underline`,shortcut:`Ctrl U`},asChild:!0,children:(0,E.jsx)(S,{variant:`outline`,size:`icon`,"aria-label":`Underline`,children:(0,E.jsx)(s,{})})})]}),(0,E.jsx)(g,{handle:z,children:({payload:e})=>(0,E.jsxs)(h,{children:[e?.label,` `,(0,E.jsx)(`span`,{className:`opacity-70`,children:e?.shortcut})]})})]})}var V=e({TooltipToggletip:()=>H});function H(){return(0,E.jsxs)(`div`,{className:`flex w-full max-w-xs flex-col gap-1.5`,children:[(0,E.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,E.jsx)(ie,{htmlFor:`toggletip-budget`,children:`Monthly budget`}),(0,E.jsx)(p,{label:`About the monthly budget`,children:`Spending pauses for the rest of the month once this is reached.`})]}),(0,E.jsx)(c,{id:`toggletip-budget`,inputMode:`decimal`,placeholder:`500`})]})}var U=e({TooltipViewportBetweenTriggers:()=>G}),W=l();function G(){return(0,E.jsxs)(_,{children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-2`,children:[(0,E.jsx)(m,{handle:W,payload:{label:`Bold`,hint:`Ctrl B`},asChild:!0,children:(0,E.jsx)(S,{variant:`outline`,size:`icon`,"aria-label":`Bold`,children:(0,E.jsx)(t,{})})}),(0,E.jsx)(m,{handle:W,payload:{label:`Italic`,hint:`Ctrl I`},asChild:!0,children:(0,E.jsx)(S,{variant:`outline`,size:`icon`,"aria-label":`Italic`,children:(0,E.jsx)(n,{})})}),(0,E.jsx)(m,{handle:W,payload:{label:`Insert a link to another page or a section of this one`,hint:`Ctrl K`},asChild:!0,children:(0,E.jsx)(S,{variant:`outline`,size:`icon`,"aria-label":`Insert link`,children:(0,E.jsx)(r,{})})})]}),(0,E.jsx)(g,{handle:W,children:({payload:e})=>(0,E.jsxs)(h,{morph:!0,children:[e?.label,` `,(0,E.jsx)(`span`,{className:`opacity-70`,children:e?.hint})]})})]})}var K=`import { Copy, Pencil, Trash2 } from "lucide-react"
import { Tooltip } from "@kitora/primitives/react"
import { Button } from "@kitora/ui/button"

const ACTIONS = [
  { label: "Edit", icon: Pencil },
  { label: "Duplicate", icon: Copy },
  { label: "Delete", icon: Trash2 },
]

/**
 * Tooltips built from the primitives' parts only: \`Tooltip.Provider\` (one delay group, so moving along the toolbar shows the next tip at
 * once), \`Root\`, \`Trigger\`, \`Portal\`, \`Positioner\` (above the trigger), \`Popup\` and \`Arrow\`, fading on \`data-starting-style\` / \`data-ending-style\`.
 */
export function TooltipBuildYourOwn({ open, onOpenChange }: { open?: boolean; onOpenChange?: (open: boolean) => void }) {
  return (
    <Tooltip.Provider delay={0}>
      <div role="group" className="flex">
        {ACTIONS.map(({ label, icon: Icon }, i) => (
          <Tooltip.Root key={label} open={i === 0 ? open : undefined} onOpenChange={i === 0 ? (next) => onOpenChange?.(next) : undefined}>
            <Tooltip.Trigger render={<Button variant="outline" size="icon" aria-label={label} />}>
              <Icon />
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Positioner side="top" align="center" sideOffset={4} className="isolate z-50">
                <Tooltip.Popup className="z-50 w-fit max-w-xs origin-(--transform-origin) rounded-md bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none">
                  {label}
                  <Tooltip.Arrow className="size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px] bg-foreground data-[side=top]:-bottom-2.5" />
                </Tooltip.Popup>
              </Tooltip.Positioner>
            </Tooltip.Portal>
          </Tooltip.Root>
        ))}
      </div>
    </Tooltip.Provider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>u(()=>import(`./build-your-own-5BQPhnbo.js`),[]));var q=`import { Copy, Pencil, Trash2 } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { ButtonGroup } from "@kitora/ui/button-group"
import { Tooltip, TooltipContent, TooltipTrigger } from "@kitora/ui/tooltip"

const actions = [
  { label: "Edit", icon: Pencil },
  { label: "Duplicate", icon: Copy },
  { label: "Delete", icon: Trash2 },
]

export function TooltipComposeIconToolbar() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <ButtonGroup>
        {actions.map(({ label, icon: Icon }) => (
          <Tooltip key={label}>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" aria-label={label}>
                <Icon />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        ))}
      </ButtonGroup>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>u(()=>import(`./compose-BaWDNioI.js`),[]));var J=`import { Mail, Settings } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@kitora/ui/tooltip"

export function TooltipDefault() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Send email">
            <Mail />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Send email</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Settings">
            <Settings />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Settings</TooltipContent>
      </Tooltip>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>u(()=>import(`./default-CTEWyT92.js`),[]));var Y=`import { Button } from "@kitora/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@kitora/ui/tooltip"

// A disabled button fires no pointer or focus events, so a tooltip on it never shows. \`focusableWhenDisabled\` keeps the button in the tab
// order (announced as disabled, still not pressable) so hover and focus reach it, and the tooltip can say why it is off.
export function TooltipDisabledButton() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button disabled focusableWhenDisabled>
            Publish
          </Button>
        </TooltipTrigger>
        <TooltipContent>Add a title before you publish</TooltipContent>
      </Tooltip>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>u(()=>import(`./disabled-button-D21cvghR.js`),[]));var X=`import { InfoHint } from "@kitora/display"

// The display kit's \`InfoHint\`: a focusable (i) beside a term whose tooltip explains it, on hover or on
// keyboard focus. \`label\` names the button ("More info" by default).
export function TooltipInfoHint() {
  return (
    <dl className="grid w-full max-w-xs grid-cols-[1fr_auto] gap-x-4 gap-y-2 text-sm">
      <dt className="inline-flex items-center gap-1 text-muted-foreground">
        Apdex
        <InfoHint label="About Apdex" content="Share of requests answered within the target time, counting tolerable ones as half." />
      </dt>
      <dd className="text-end tabular-nums">0.94</dd>
      <dt className="inline-flex items-center gap-1 text-muted-foreground">
        p95 latency
        <InfoHint label="About p95 latency" content="95% of requests finished faster than this." />
      </dt>
      <dd className="text-end tabular-nums">182 ms</dd>
    </dl>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>u(()=>import(`./info-hint-pgePxt2G.js`),[]));var Z=`import { Bold, Italic, Underline } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { createTooltipHandle, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@kitora/ui/tooltip"

interface Command {
  readonly label: string
  readonly shortcut: string
}

const format = createTooltipHandle<Command>()

export function TooltipSharedByTriggers() {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <TooltipTrigger handle={format} payload={{ label: "Bold", shortcut: "Ctrl B" }} asChild>
          <Button variant="outline" size="icon" aria-label="Bold">
            <Bold />
          </Button>
        </TooltipTrigger>
        <TooltipTrigger handle={format} payload={{ label: "Italic", shortcut: "Ctrl I" }} asChild>
          <Button variant="outline" size="icon" aria-label="Italic">
            <Italic />
          </Button>
        </TooltipTrigger>
        <TooltipTrigger handle={format} payload={{ label: "Underline", shortcut: "Ctrl U" }} asChild>
          <Button variant="outline" size="icon" aria-label="Underline">
            <Underline />
          </Button>
        </TooltipTrigger>
      </div>
      <Tooltip handle={format}>
        {({ payload }) => (
          <TooltipContent>
            {payload?.label} <span className="opacity-70">{payload?.shortcut}</span>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>u(()=>import(`./shared-by-triggers-BiNYSXS6.js`),[]));var Q=`import { Label } from "@kitora/ui/label"
import { Input } from "@kitora/ui/input"
import { Toggletip } from "@kitora/ui/tooltip"

// A toggletip opens on click, Enter or Space (not on hover), so touch and screen reader users reach the explanation too; its text is
// announced as it opens, and Escape or a click outside closes it. Use it for a short hint beside a field; a tooltip only names a control.
export function TooltipToggletip() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <div className="flex items-center gap-1">
        <Label htmlFor="toggletip-budget">Monthly budget</Label>
        <Toggletip label="About the monthly budget">Spending pauses for the rest of the month once this is reached.</Toggletip>
      </div>
      <Input id="toggletip-budget" inputMode="decimal" placeholder="500" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>u(()=>import(`./toggletip-BsQADedW.js`),[]));var $=`import { Bold, Italic, Link2 } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { createTooltipHandle, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@kitora/ui/tooltip"

interface Command {
  readonly label: string
  readonly hint: string
}

const format = createTooltipHandle<Command>()

export function TooltipViewportBetweenTriggers() {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <TooltipTrigger handle={format} payload={{ label: "Bold", hint: "Ctrl B" }} asChild>
          <Button variant="outline" size="icon" aria-label="Bold">
            <Bold />
          </Button>
        </TooltipTrigger>
        <TooltipTrigger handle={format} payload={{ label: "Italic", hint: "Ctrl I" }} asChild>
          <Button variant="outline" size="icon" aria-label="Italic">
            <Italic />
          </Button>
        </TooltipTrigger>
        <TooltipTrigger handle={format} payload={{ label: "Insert a link to another page or a section of this one", hint: "Ctrl K" }} asChild>
          <Button variant="outline" size="icon" aria-label="Insert link">
            <Link2 />
          </Button>
        </TooltipTrigger>
      </div>
      <Tooltip handle={format}>
        {({ payload }) => (
          <TooltipContent morph>
            {payload?.label} <span className="opacity-70">{payload?.hint}</span>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>u(()=>import(`./viewport-between-triggers-Cgroe2T_.js`),[]));var ae={"./demos/tooltip/build-your-own.tsx":T,"./demos/tooltip/compose.tsx":k,"./demos/tooltip/default.tsx":M,"./demos/tooltip/disabled-button.tsx":P,"./demos/tooltip/info-hint.tsx":I,"./demos/tooltip/shared-by-triggers.tsx":R,"./demos/tooltip/toggletip.tsx":V,"./demos/tooltip/viewport-between-triggers.tsx":U},oe={"./demos/tooltip/build-your-own.tsx":K,"./demos/tooltip/compose.tsx":q,"./demos/tooltip/default.tsx":J,"./demos/tooltip/disabled-button.tsx":Y,"./demos/tooltip/info-hint.tsx":X,"./demos/tooltip/shared-by-triggers.tsx":Z,"./demos/tooltip/toggletip.tsx":Q,"./demos/tooltip/viewport-between-triggers.tsx":$};export{ae as modules,oe as sources};