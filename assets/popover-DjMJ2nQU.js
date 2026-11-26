import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./ellipsis-rAU-_rQa.js";import{t as r}from"./input-DQo0XDsx.js";import{Bc as ee,Cc as i,Ic as a,_a as o,ba as s,bi as c,ga as te,ha as ne,ma as re,ti as l,va as ie,xa as u,xi as d,ya as f}from"./index-B9ukmIN1.js";import{t as p}from"./checkbox-DcWEP8V9.js";import{a as m,c as h,i as g,n as _,o as v,r as y,s as b,t as x}from"./popover-Btm2pKCO.js";import{t as S}from"./separator-BAbS8iiG.js";var C=e({PopoverBuildYourOwn:()=>E}),w=a(),T=[`Open`,`In progress`,`Done`];function E({open:e,onOpenChange:t}){return(0,w.jsxs)(f,{open:e,onOpenChange:e=>t?.(e),children:[(0,w.jsxs)(u,{render:(0,w.jsx)(l,{variant:`outline`}),children:[(0,w.jsx)(d,{}),`Filter`]}),(0,w.jsx)(o,{children:(0,w.jsx)(ie,{side:`bottom`,align:`center`,sideOffset:4,className:`isolate z-50`,children:(0,w.jsxs)(te,{className:`flex w-64 origin-(--transform-origin) flex-col gap-2.5 rounded-lg bg-popover p-2.5 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-hidden transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0`,children:[(0,w.jsxs)(`div`,{className:`flex flex-col gap-0.5`,children:[(0,w.jsx)(s,{className:`font-medium`,children:`Status`}),(0,w.jsx)(ne,{className:`text-muted-foreground`,children:`Show issues matching any of these.`})]}),(0,w.jsx)(`div`,{className:`grid gap-2 py-2`,children:T.map((e,t)=>(0,w.jsx)(p,{label:e,defaultChecked:t<2},e))}),(0,w.jsxs)(`div`,{className:`flex justify-end gap-2 border-t pt-2`,children:[(0,w.jsx)(l,{size:`sm`,variant:`ghost`,children:`Reset`}),(0,w.jsx)(re,{render:(0,w.jsx)(l,{size:`sm`}),children:`Apply`})]})]})})})]})}var D=e({PopoverCloseAndArrow:()=>O});function O(){return(0,w.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,w.jsxs)(x,{children:[(0,w.jsx)(b,{asChild:!0,children:(0,w.jsx)(l,{variant:`outline`,children:`What's new`})}),(0,w.jsxs)(y,{arrow:!0,collisionPadding:16,className:`relative`,children:[(0,w.jsxs)(m,{className:`pe-6`,children:[(0,w.jsx)(v,{children:`Saved views`}),(0,w.jsx)(g,{children:`Keep a filter and sort as a view and switch between views from the sidebar.`})]}),(0,w.jsx)(_,{asChild:!0,children:(0,w.jsx)(l,{variant:`ghost`,size:`icon-xs`,className:`absolute top-1.5 end-1.5`,"aria-label":`Close`,children:(0,w.jsx)(c,{})})}),(0,w.jsx)(_,{asChild:!0,children:(0,w.jsx)(l,{size:`sm`,className:`self-end`,children:`Got it`})})]})]})})}var k=e({PopoverComposeFilterMenu:()=>M}),A=t(ee(),1),j=[`Open`,`In progress`,`Done`];function M(){let e=(0,A.useId)();return(0,w.jsxs)(x,{children:[(0,w.jsx)(b,{asChild:!0,children:(0,w.jsxs)(l,{variant:`outline`,children:[(0,w.jsx)(d,{}),`Filter`]})}),(0,w.jsxs)(y,{className:`w-64`,children:[(0,w.jsxs)(m,{children:[(0,w.jsx)(v,{children:`Status`}),(0,w.jsx)(g,{children:`Show issues matching any of these.`})]}),(0,w.jsx)(`div`,{className:`grid gap-2 py-2`,children:j.map((t,n)=>(0,w.jsxs)(`label`,{htmlFor:`${e}-${n}`,className:`flex items-center gap-2 text-sm`,children:[(0,w.jsx)(p,{id:`${e}-${n}`,defaultChecked:n<2}),t]},t))}),(0,w.jsx)(S,{}),(0,w.jsxs)(`div`,{className:`flex justify-end gap-2 pt-2`,children:[(0,w.jsx)(l,{size:`sm`,variant:`ghost`,children:`Reset`}),(0,w.jsx)(l,{size:`sm`,children:`Apply`})]})]})]})}var N=e({PopoverDetachedTrigger:()=>F}),P=h();function F(){return(0,w.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,w.jsx)(b,{handle:P,payload:{name:`Starter`,price:`$0`},asChild:!0,children:(0,w.jsx)(l,{variant:`outline`,children:`Starter`})}),(0,w.jsx)(b,{id:`pro`,handle:P,payload:{name:`Pro`,price:`$12`},asChild:!0,children:(0,w.jsx)(l,{variant:`outline`,children:`Pro`})}),(0,w.jsx)(l,{variant:`ghost`,onClick:()=>P.open(`pro`),children:`Open Pro from code`}),(0,w.jsx)(l,{variant:`ghost`,onClick:()=>P.close(),children:`Close`})]}),(0,w.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`The triggers and the popover live in different places; one handle joins them.`}),(0,w.jsx)(x,{handle:P,children:({payload:e})=>(0,w.jsx)(y,{className:`w-56`,children:(0,w.jsxs)(m,{children:[(0,w.jsx)(v,{children:e?.name}),(0,w.jsxs)(g,{children:[e?.price,` per member and month.`]})]})})})]})}var I=e({PopoverInlineEdit:()=>L});function L(){return(0,w.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,w.jsxs)(x,{children:[(0,w.jsx)(b,{asChild:!0,children:(0,w.jsxs)(l,{variant:`outline`,children:[(0,w.jsx)(n,{}),`Quick edit`]})}),(0,w.jsx)(y,{className:`w-72`,children:(0,w.jsxs)(`div`,{className:`space-y-3`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`h4`,{className:`text-sm font-semibold`,children:`Rename project`}),(0,w.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Visible to all collaborators.`})]}),(0,w.jsx)(r,{defaultValue:`Kitora`}),(0,w.jsxs)(`div`,{className:`flex justify-end gap-2`,children:[(0,w.jsx)(l,{size:`sm`,variant:`ghost`,children:`Cancel`}),(0,w.jsx)(l,{size:`sm`,children:`Save`})]})]})})]})})}var ae=e({PopoverSharedByTriggers:()=>z}),R=[{name:`Ada`,role:`Design engineer`,since:`2021`},{name:`Lin`,role:`Platform`,since:`2023`},{name:`Noor`,role:`Accessibility`,since:`2024`}];function z(){return(0,w.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,w.jsx)(x,{children:({payload:e})=>(0,w.jsxs)(w.Fragment,{children:[R.map(e=>(0,w.jsx)(b,{payload:e,asChild:!0,children:(0,w.jsx)(l,{variant:`outline`,children:e.name})},e.name)),(0,w.jsx)(y,{className:`w-64`,children:(0,w.jsxs)(m,{children:[(0,w.jsx)(v,{children:e?.name}),(0,w.jsxs)(g,{children:[e?.role,`, here since `,e?.since,`.`]})]})})]})})})}var B=e({PopoverViewportBetweenTriggers:()=>U}),V={profile:{title:`Profile`,lines:[`Ada Lovelace`,`ada@example.com`],width:`w-56`},billing:{title:`Billing`,lines:[`Pro plan, $12 per member`,`Next invoice on 1 March`,`Visa ending 4242`,`Download receipts`],width:`w-72`},team:{title:`Team`,lines:[`Ada, Lin and Noor`,`3 of 5 seats used`],width:`w-64`}},H=h();function U(){return(0,w.jsxs)(`div`,{className:`flex flex-col items-center gap-6`,children:[(0,w.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:Object.entries(V).map(([e,t])=>(0,w.jsx)(b,{id:e,handle:H,payload:t,asChild:!0,children:(0,w.jsx)(l,{variant:`outline`,children:t.title})},e))}),(0,w.jsx)(x,{handle:H,children:({payload:e})=>(0,w.jsx)(y,{morph:!0,className:`w-(--popup-width,auto)`,children:(0,w.jsxs)(`div`,{className:e?.width,children:[(0,w.jsx)(v,{children:e?.title}),e?.lines.map(e=>(0,w.jsx)(g,{children:e},e))]})})}),(0,w.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Open one, then press another: the popover moves and resizes, and the content slides toward the new trigger.`})]})}var W=e({PopoverWithBackdrop:()=>G});function G(){return(0,w.jsx)(`div`,{className:`flex items-center justify-center`,children:(0,w.jsxs)(x,{children:[(0,w.jsx)(b,{asChild:!0,children:(0,w.jsx)(l,{variant:`outline`,children:`Share this file`})}),(0,w.jsx)(y,{backdrop:!0,children:(0,w.jsxs)(m,{children:[(0,w.jsx)(v,{children:`Share this file`}),(0,w.jsx)(g,{children:`Anyone with the link can view it. The page behind stays live; a press on the dim closes the popover.`})]})})]})})}var K=`import { SlidersHorizontal } from "lucide-react"
import { Popover } from "@kitora/primitives/react"
import { Button } from "@kitora/ui/button"
import { Checkbox } from "@kitora/ui/checkbox"

const STATUSES = ["Open", "In progress", "Done"]

/**
 * A popover built from the primitives' parts only: \`Popover.Root\`, \`Trigger\`, \`Portal\`, \`Positioner\` (below the trigger, 4px away), \`Popup\`,
 * \`Title\`, \`Description\` and \`Close\`, growing from the trigger on \`--transform-origin\` and fading on \`data-starting-style\` / \`data-ending-style\`.
 */
export function PopoverBuildYourOwn({ open, onOpenChange }: { open?: boolean; onOpenChange?: (open: boolean) => void }) {
  return (
    <Popover.Root open={open} onOpenChange={(next) => onOpenChange?.(next)}>
      <Popover.Trigger render={<Button variant="outline" />}>
        <SlidersHorizontal />
        Filter
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner side="bottom" align="center" sideOffset={4} className="isolate z-50">
          <Popover.Popup className="flex w-64 origin-(--transform-origin) flex-col gap-2.5 rounded-lg bg-popover p-2.5 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-hidden transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0">
            <div className="flex flex-col gap-0.5">
              <Popover.Title className="font-medium">Status</Popover.Title>
              <Popover.Description className="text-muted-foreground">Show issues matching any of these.</Popover.Description>
            </div>
            <div className="grid gap-2 py-2">
              {STATUSES.map((status, i) => (
                <Checkbox key={status} label={status} defaultChecked={i < 2} />
              ))}
            </div>
            <div className="flex justify-end gap-2 border-t pt-2">
              <Button size="sm" variant="ghost">
                Reset
              </Button>
              <Popover.Close render={<Button size="sm" />}>Apply</Popover.Close>
            </div>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>i(()=>import(`./build-your-own-aULSTJDz.js`),[]));var q=`import { X } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { Popover, PopoverClose, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@kitora/ui/popover"

// \`arrow\` points the popover at its trigger (the dropdown menu's arrow). \`PopoverClose\` closes it from inside: an icon button in the corner
// and a "Got it" button, both through \`asChild\`. \`collisionPadding\` keeps it 16px clear of the window's edges.
export function PopoverCloseAndArrow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">What's new</Button>
        </PopoverTrigger>
        <PopoverContent arrow collisionPadding={16} className="relative">
          <PopoverHeader className="pe-6">
            <PopoverTitle>Saved views</PopoverTitle>
            <PopoverDescription>Keep a filter and sort as a view and switch between views from the sidebar.</PopoverDescription>
          </PopoverHeader>
          <PopoverClose asChild>
            <Button variant="ghost" size="icon-xs" className="absolute top-1.5 end-1.5" aria-label="Close">
              <X />
            </Button>
          </PopoverClose>
          <PopoverClose asChild>
            <Button size="sm" className="self-end">
              Got it
            </Button>
          </PopoverClose>
        </PopoverContent>
      </Popover>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>i(()=>import(`./close-and-arrow-nh6hyyhW.js`),[]));var J=`import { useId } from "react"
import { SlidersHorizontal } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { Checkbox } from "@kitora/ui/checkbox"
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@kitora/ui/popover"
import { Separator } from "@kitora/ui/separator"

const statuses = ["Open", "In progress", "Done"]

export function PopoverComposeFilterMenu() {
  const id = useId()
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <SlidersHorizontal />
          Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <PopoverHeader>
          <PopoverTitle>Status</PopoverTitle>
          <PopoverDescription>Show issues matching any of these.</PopoverDescription>
        </PopoverHeader>
        <div className="grid gap-2 py-2">
          {statuses.map((s, i) => (
            <label key={s} htmlFor={\`\${id}-\${i}\`} className="flex items-center gap-2 text-sm">
              <Checkbox id={\`\${id}-\${i}\`} defaultChecked={i < 2} />
              {s}
            </label>
          ))}
        </div>
        <Separator />
        <div className="flex justify-end gap-2 pt-2">
          <Button size="sm" variant="ghost">
            Reset
          </Button>
          <Button size="sm">Apply</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>i(()=>import(`./compose-D_bBS2BX.js`),[]));var Y=`import { Button } from "@kitora/ui/button"
import { createPopoverHandle, Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@kitora/ui/popover"

interface Plan {
  readonly name: string
  readonly price: string
}

const compare = createPopoverHandle<Plan>()

export function PopoverDetachedTrigger() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <PopoverTrigger handle={compare} payload={{ name: "Starter", price: "$0" }} asChild>
          <Button variant="outline">Starter</Button>
        </PopoverTrigger>
        <PopoverTrigger id="pro" handle={compare} payload={{ name: "Pro", price: "$12" }} asChild>
          <Button variant="outline">Pro</Button>
        </PopoverTrigger>
        <Button variant="ghost" onClick={() => compare.open("pro")}>
          Open Pro from code
        </Button>
        <Button variant="ghost" onClick={() => compare.close()}>
          Close
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">The triggers and the popover live in different places; one handle joins them.</p>
      <Popover handle={compare}>
        {({ payload }) => (
          <PopoverContent className="w-56">
            <PopoverHeader>
              <PopoverTitle>{payload?.name}</PopoverTitle>
              <PopoverDescription>{payload?.price} per member and month.</PopoverDescription>
            </PopoverHeader>
          </PopoverContent>
        )}
      </Popover>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>i(()=>import(`./detached-trigger-XDk6Km_y.js`),[]));var X=`import { MoreHorizontal } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@kitora/ui/popover"

export function PopoverInlineEdit() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <MoreHorizontal />
            Quick edit
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72">
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-semibold">Rename project</h4>
              <p className="text-xs text-muted-foreground">Visible to all collaborators.</p>
            </div>
            <Input defaultValue="Kitora" />
            <div className="flex justify-end gap-2">
              <Button size="sm" variant="ghost">
                Cancel
              </Button>
              <Button size="sm">Save</Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>i(()=>import(`./inline-edit-DaZPLTUo.js`),[]));var Z=`import { Button } from "@kitora/ui/button"
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@kitora/ui/popover"

interface Member {
  readonly name: string
  readonly role: string
  readonly since: string
}

const members: readonly Member[] = [
  { name: "Ada", role: "Design engineer", since: "2021" },
  { name: "Lin", role: "Platform", since: "2023" },
  { name: "Noor", role: "Accessibility", since: "2024" },
]

export function PopoverSharedByTriggers() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Popover>
        {({ payload }: { payload: Member | undefined }) => (
          <>
            {members.map((member) => (
              <PopoverTrigger key={member.name} payload={member} asChild>
                <Button variant="outline">{member.name}</Button>
              </PopoverTrigger>
            ))}
            <PopoverContent className="w-64">
              <PopoverHeader>
                <PopoverTitle>{payload?.name}</PopoverTitle>
                <PopoverDescription>
                  {payload?.role}, here since {payload?.since}.
                </PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </>
        )}
      </Popover>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>i(()=>import(`./shared-by-triggers-BVw8sgNY.js`),[]));var Q=`import { Button } from "@kitora/ui/button"
import { createPopoverHandle, Popover, PopoverContent, PopoverDescription, PopoverTitle, PopoverTrigger } from "@kitora/ui/popover"

interface Panel {
  readonly title: string
  readonly lines: readonly string[]
  readonly width: string
}

const panels: Readonly<Record<string, Panel>> = {
  profile: { title: "Profile", lines: ["Ada Lovelace", "ada@example.com"], width: "w-56" },
  billing: { title: "Billing", lines: ["Pro plan, $12 per member", "Next invoice on 1 March", "Visa ending 4242", "Download receipts"], width: "w-72" },
  team: { title: "Team", lines: ["Ada, Lin and Noor", "3 of 5 seats used"], width: "w-64" },
}

const account = createPopoverHandle<Panel>()

export function PopoverViewportBetweenTriggers() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {Object.entries(panels).map(([id, panel]) => (
          <PopoverTrigger key={id} id={id} handle={account} payload={panel} asChild>
            <Button variant="outline">{panel.title}</Button>
          </PopoverTrigger>
        ))}
      </div>
      <Popover handle={account}>
        {({ payload }) => (
          <PopoverContent morph className="w-(--popup-width,auto)">
            <div className={payload?.width}>
              <PopoverTitle>{payload?.title}</PopoverTitle>
              {payload?.lines.map((line) => (
                <PopoverDescription key={line}>{line}</PopoverDescription>
              ))}
            </div>
          </PopoverContent>
        )}
      </Popover>
      <p className="text-xs text-muted-foreground">Open one, then press another: the popover moves and resizes, and the content slides toward the new trigger.</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>i(()=>import(`./viewport-between-triggers-C3mk3bAQ.js`),[]));var $=`import { Button } from "@kitora/ui/button"
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@kitora/ui/popover"

export function PopoverWithBackdrop() {
  return (
    <div className="flex items-center justify-center">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Share this file</Button>
        </PopoverTrigger>
        <PopoverContent backdrop>
          <PopoverHeader>
            <PopoverTitle>Share this file</PopoverTitle>
            <PopoverDescription>Anyone with the link can view it. The page behind stays live; a press on the dim closes the popover.</PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>i(()=>import(`./with-backdrop-CbGbT3N6.js`),[]));var oe={"./demos/popover/build-your-own.tsx":C,"./demos/popover/close-and-arrow.tsx":D,"./demos/popover/compose.tsx":k,"./demos/popover/detached-trigger.tsx":N,"./demos/popover/inline-edit.tsx":I,"./demos/popover/shared-by-triggers.tsx":ae,"./demos/popover/viewport-between-triggers.tsx":B,"./demos/popover/with-backdrop.tsx":W},se={"./demos/popover/build-your-own.tsx":K,"./demos/popover/close-and-arrow.tsx":q,"./demos/popover/compose.tsx":J,"./demos/popover/detached-trigger.tsx":Y,"./demos/popover/inline-edit.tsx":X,"./demos/popover/shared-by-triggers.tsx":Z,"./demos/popover/viewport-between-triggers.tsx":Q,"./demos/popover/with-backdrop.tsx":$};export{oe as modules,se as sources};