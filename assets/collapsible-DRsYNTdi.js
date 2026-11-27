import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{i as t,n,t as r}from"./collapsible-CaezmJUz.js";import{t as i}from"./chevrons-up-down-Dk-Sghwn.js";import{Ec as a,_i as o,gi as s,ji as c,ri as l,zc as u}from"./index-BZuUy872.js";import{t as d}from"./badge-zOMNRv4l.js";var f=u();function p({...e}){return(0,f.jsx)(n,{"data-slot":`collapsible`,...e})}function m({asChild:e,children:n,...r}){return(0,f.jsx)(t,{"data-slot":`collapsible-trigger`,...r,...s(e,n)})}var h=`h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0 motion-reduce:transition-none`;function g({animated:e=!1,className:t,...n}){return(0,f.jsx)(r,{"data-slot":`collapsible-content`,...e?{"data-animated":``}:null,className:e?typeof t==`function`?e=>o(h,t(e)):o(h,t):t,...n})}var _=e({CollapsibleAnimated:()=>v});function v(){return(0,f.jsxs)(p,{className:`w-full max-w-sm rounded-md border border-border p-3`,children:[(0,f.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,f.jsx)(`span`,{className:`text-sm font-medium`,children:`3 environment variables`}),(0,f.jsx)(m,{render:(0,f.jsx)(l,{variant:`ghost`,size:`icon`,"aria-label":`Show variables`}),children:(0,f.jsx)(i,{})})]}),(0,f.jsx)(g,{animated:!0,children:(0,f.jsxs)(`ul`,{className:`mt-2 space-y-1 font-mono text-xs text-muted-foreground`,children:[(0,f.jsx)(`li`,{children:`DATABASE_URL`}),(0,f.jsx)(`li`,{children:`REDIS_URL`}),(0,f.jsx)(`li`,{children:`SENTRY_DSN`})]})})]})}var y=e({CollapsibleBuildYourOwn:()=>b});function b({open:e,onOpenChange:i}){return(0,f.jsxs)(n,{open:e,onOpenChange:e=>i?.(e),className:`w-full max-w-md`,children:[(0,f.jsxs)(`div`,{className:`flex items-center justify-between rounded-md border border-border bg-card px-3 py-2`,children:[(0,f.jsx)(`span`,{className:`text-sm font-medium`,children:`Advanced settings`}),(0,f.jsx)(t,{render:(0,f.jsx)(l,{variant:`ghost`,size:`icon-sm`,"aria-label":`Toggle advanced settings`}),className:`group`,children:(0,f.jsx)(c,{className:`transition-transform group-data-panel-open:rotate-180`})})]}),(0,f.jsxs)(r,{className:`mt-2 space-y-2 rounded-md border border-border bg-card p-3 text-sm`,children:[(0,f.jsx)(`div`,{children:`API rate limit override`}),(0,f.jsx)(`div`,{children:`Custom egress region`}),(0,f.jsx)(`div`,{children:`Egress bypass tokens`})]})]})}var x=e({CollapsibleComposeCiChecks:()=>C}),S=[{name:`lint`,state:`Passed`},{name:`unit tests`,state:`Passed`},{name:`e2e`,state:`Failed`}];function C(){return(0,f.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,f.jsxs)(p,{className:`w-full max-w-md rounded-md border border-border bg-card`,children:[(0,f.jsxs)(`div`,{className:`flex items-center justify-between gap-2 px-3 py-2`,children:[(0,f.jsx)(`span`,{className:`text-sm font-medium`,children:`3 checks · 1 failed`}),(0,f.jsx)(m,{asChild:!0,children:(0,f.jsx)(l,{variant:`ghost`,size:`icon-sm`,"aria-label":`Toggle check details`,children:(0,f.jsx)(i,{})})})]}),(0,f.jsx)(g,{className:`divide-y divide-border border-t border-border`,children:S.map(e=>(0,f.jsxs)(`div`,{className:`flex items-center justify-between px-3 py-1.5 text-sm`,children:[(0,f.jsx)(`span`,{children:e.name}),(0,f.jsx)(d,{variant:e.state===`Failed`?`destructive`:`secondary`,children:e.state})]},e.name))})]})})}var w=e({CollapsibleDefault:()=>T});function T(){return(0,f.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,f.jsxs)(p,{className:`w-full max-w-md`,children:[(0,f.jsxs)(`div`,{className:`flex items-center justify-between rounded-md border border-border bg-card px-3 py-2`,children:[(0,f.jsx)(`span`,{className:`text-sm font-medium`,children:`Advanced settings`}),(0,f.jsx)(m,{asChild:!0,children:(0,f.jsx)(l,{variant:`ghost`,size:`icon-sm`,"aria-label":`Toggle advanced settings`,children:(0,f.jsx)(c,{})})})]}),(0,f.jsxs)(g,{className:`mt-2 space-y-2 rounded-md border border-border bg-card p-3 text-sm`,children:[(0,f.jsx)(`div`,{children:`API rate limit override`}),(0,f.jsx)(`div`,{children:`Custom egress region`}),(0,f.jsx)(`div`,{children:`Egress bypass tokens`})]})]})})}var E=`import { Button } from "@kitora/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@kitora/ui/collapsible"
import { ChevronsUpDownIcon } from "lucide-react"

export function CollapsibleAnimated() {
  return (
    <Collapsible className="w-full max-w-sm rounded-md border border-border p-3">
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-medium">3 environment variables</span>
        <CollapsibleTrigger render={<Button variant="ghost" size="icon" aria-label="Show variables" />}>
          <ChevronsUpDownIcon />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent animated>
        <ul className="mt-2 space-y-1 font-mono text-xs text-muted-foreground">
          <li>DATABASE_URL</li>
          <li>REDIS_URL</li>
          <li>SENTRY_DSN</li>
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>a(()=>import(`./animated-8G9QecBX.js`),[]));var D=`import { ChevronDown } from "lucide-react"
import { Collapsible } from "@kitora/primitives/react"
import { Button } from "@kitora/ui/button"

/** A collapsible built from the primitives' parts only: \`Collapsible.Root\`, \`Trigger\` (rendered as a \`Button\`) and \`Panel\`, with the chevron turning on \`data-panel-open\`. */
export function CollapsibleBuildYourOwn({ open, onOpenChange }: { open?: boolean; onOpenChange?: (open: boolean) => void }) {
  return (
    <Collapsible.Root open={open} onOpenChange={(next) => onOpenChange?.(next)} className="w-full max-w-md">
      <div className="flex items-center justify-between rounded-md border border-border bg-card px-3 py-2">
        <span className="text-sm font-medium">Advanced settings</span>
        <Collapsible.Trigger render={<Button variant="ghost" size="icon-sm" aria-label="Toggle advanced settings" />} className="group">
          <ChevronDown className="transition-transform group-data-panel-open:rotate-180" />
        </Collapsible.Trigger>
      </div>
      <Collapsible.Panel className="mt-2 space-y-2 rounded-md border border-border bg-card p-3 text-sm">
        <div>API rate limit override</div>
        <div>Custom egress region</div>
        <div>Egress bypass tokens</div>
      </Collapsible.Panel>
    </Collapsible.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>a(()=>import(`./build-your-own-CqPg5GB1.js`),[]));var O=`import { ChevronsUpDown } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@kitora/ui/collapsible"
import { Button } from "@kitora/ui/button"
import { Badge } from "@kitora/ui/badge"

const CHECKS = [
  { name: "lint", state: "Passed" },
  { name: "unit tests", state: "Passed" },
  { name: "e2e", state: "Failed" },
]

export function CollapsibleComposeCiChecks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Collapsible className="w-full max-w-md rounded-md border border-border bg-card">
        <div className="flex items-center justify-between gap-2 px-3 py-2">
          <span className="text-sm font-medium">3 checks · 1 failed</span>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon-sm" aria-label="Toggle check details">
              <ChevronsUpDown />
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="divide-y divide-border border-t border-border">
          {CHECKS.map((c) => (
            <div key={c.name} className="flex items-center justify-between px-3 py-1.5 text-sm">
              <span>{c.name}</span>
              <Badge variant={c.state === "Failed" ? "destructive" : "secondary"}>{c.state}</Badge>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>a(()=>import(`./compose-CyvzKZkZ.js`),[]));var k=`import { ChevronDown } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@kitora/ui/collapsible"

export function CollapsibleDefault() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Collapsible className="w-full max-w-md">
        <div className="flex items-center justify-between rounded-md border border-border bg-card px-3 py-2">
          <span className="text-sm font-medium">Advanced settings</span>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon-sm" aria-label="Toggle advanced settings">
              <ChevronDown />
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="mt-2 space-y-2 rounded-md border border-border bg-card p-3 text-sm">
          <div>API rate limit override</div>
          <div>Custom egress region</div>
          <div>Egress bypass tokens</div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>a(()=>import(`./default-DJFByets.js`),[]));var A={"./demos/collapsible/animated.tsx":_,"./demos/collapsible/build-your-own.tsx":y,"./demos/collapsible/compose.tsx":x,"./demos/collapsible/default.tsx":w},j={"./demos/collapsible/animated.tsx":E,"./demos/collapsible/build-your-own.tsx":D,"./demos/collapsible/compose.tsx":O,"./demos/collapsible/default.tsx":k};export{A as modules,j as sources};