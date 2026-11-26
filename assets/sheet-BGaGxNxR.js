import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./switch-CiJzHfYx.js";import{t as n}from"./funnel-B13jyZNr.js";import{t as r}from"./settings-DVlOJsLs.js";import{t as i}from"./input-DQo0XDsx.js";import{Cc as a,Ic as o,Ja as s,Ka as c,Qa as l,Xa as u,Ya as d,Za as f,_n as p,bn as m,fn as h,gn as g,hn as _,mn as v,oo as y,pn as b,qa as x,ti as S,vn as C,xn as w,yn as T}from"./index-B9ukmIN1.js";import{t as E}from"./badge-uhFB8J9R.js";import{t as D}from"./label-DoQXlIRk.js";import{t as O}from"./checkbox-DcWEP8V9.js";var k=e({SheetBuildYourOwn:()=>M}),A=o(),j=[`Open`,`In review`,`Merged`];function M({open:e,onOpenChange:t}){return(0,A.jsxs)(y,{open:e,onOpenChange:e=>t?.(e),children:[(0,A.jsxs)(l,{render:(0,A.jsx)(S,{variant:`outline`}),children:[(0,A.jsx)(n,{}),`Filters`]}),(0,A.jsxs)(u,{children:[(0,A.jsx)(c,{className:`fixed inset-0 z-50`}),(0,A.jsxs)(d,{className:`fixed inset-y-0 right-0 z-50 flex h-full w-3/4 flex-col gap-4 border-l bg-popover text-sm text-popover-foreground shadow-xl transition duration-200 ease-in-out data-starting-style:translate-x-10 data-starting-style:opacity-0 data-ending-style:translate-x-10 data-ending-style:opacity-0 sm:max-w-sm`,children:[(0,A.jsxs)(`div`,{className:`flex flex-col gap-0.5 p-4`,children:[(0,A.jsx)(f,{className:`text-base font-medium`,children:`Filter pull requests`}),(0,A.jsx)(s,{className:`text-muted-foreground`,children:`Show only the statuses you pick.`})]}),(0,A.jsx)(`div`,{className:`grid gap-3 px-4`,children:j.map((e,t)=>(0,A.jsx)(O,{label:e,defaultChecked:t<2},e))}),(0,A.jsx)(`div`,{className:`mt-auto flex flex-col gap-2 p-4`,children:(0,A.jsx)(x,{render:(0,A.jsx)(S,{}),children:`Apply filters`})}),(0,A.jsx)(x,{render:(0,A.jsx)(w,{className:`absolute top-3 end-3`})})]})]})]})}var N=e({SheetComposeFilterPanel:()=>F}),P=[`Open`,`In review`,`Merged`,`Closed`];function F(){return(0,A.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,A.jsxs)(h,{children:[(0,A.jsx)(m,{asChild:!0,children:(0,A.jsxs)(S,{variant:`outline`,children:[(0,A.jsx)(n,{}),`Filters`,(0,A.jsx)(E,{variant:`secondary`,children:`2`})]})}),(0,A.jsxs)(_,{children:[(0,A.jsxs)(C,{children:[(0,A.jsx)(T,{children:`Filter pull requests`}),(0,A.jsx)(g,{children:`Show only the statuses you pick.`})]}),(0,A.jsx)(`div`,{className:`grid gap-3 px-4`,children:P.map((e,t)=>(0,A.jsxs)(D,{className:`flex items-center gap-2 font-normal`,children:[(0,A.jsx)(O,{defaultChecked:t<2}),e]},e))}),(0,A.jsx)(p,{children:(0,A.jsx)(v,{asChild:!0,children:(0,A.jsx)(S,{children:`Apply filters`})})})]})]})})}var I=e({SheetRightSidePanel:()=>L});function L(){return(0,A.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,A.jsxs)(h,{children:[(0,A.jsx)(m,{asChild:!0,children:(0,A.jsxs)(S,{variant:`outline`,children:[(0,A.jsx)(r,{}),`Open settings`]})}),(0,A.jsxs)(_,{children:[(0,A.jsxs)(C,{children:[(0,A.jsx)(T,{children:`Project settings`}),(0,A.jsx)(g,{children:`Tweak project-wide preferences. Saves on close.`})]}),(0,A.jsxs)(`div`,{className:`space-y-4 px-4`,children:[(0,A.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,A.jsx)(D,{htmlFor:`proj-name`,children:`Name`}),(0,A.jsx)(i,{id:`proj-name`,defaultValue:`Kitora`})]}),(0,A.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,A.jsx)(D,{children:`Public visibility`}),(0,A.jsx)(t,{})]})]}),(0,A.jsx)(p,{children:(0,A.jsx)(v,{asChild:!0,children:(0,A.jsx)(S,{children:`Done`})})})]})]})})}var R=e({SheetStartEndAndBody:()=>B}),z=Array.from({length:20},(e,t)=>`Note ${t+1}: follow up with the design review and update the tracker.`);function B(){return(0,A.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[`start`,`end`].map(e=>(0,A.jsxs)(h,{children:[(0,A.jsx)(m,{asChild:!0,children:(0,A.jsxs)(S,{variant:`outline`,children:[`Open `,e,` sheet`]})}),(0,A.jsxs)(_,{side:e,size:e===`end`?`lg`:`sm`,children:[(0,A.jsxs)(C,{children:[(0,A.jsx)(T,{children:`Notes`}),(0,A.jsxs)(g,{children:[z.length,` notes from this week.`]})]}),(0,A.jsx)(b,{children:(0,A.jsx)(`ul`,{className:`flex flex-col gap-2 text-muted-foreground`,children:z.map(e=>(0,A.jsx)(`li`,{children:e},e))})}),(0,A.jsx)(p,{children:(0,A.jsx)(v,{asChild:!0,children:(0,A.jsx)(S,{children:`Done`})})})]})]},e))})}var V=`import { Filter } from "lucide-react"
import { Dialog } from "@kitora/primitives/react"
import { Button } from "@kitora/ui/button"
import { Checkbox } from "@kitora/ui/checkbox"
import { CloseButton } from "@kitora/ui/close-button"

const STATUSES = ["Open", "In review", "Merged"]

/**
 * A side sheet built from the primitives' Dialog parts only (a sheet is a dialog pinned to an edge): \`Dialog.Root\`, \`Trigger\`, \`Portal\`,
 * \`Backdrop\`, \`Popup\`, \`Title\`, \`Description\` and \`Close\`, sliding in on \`data-starting-style\` / \`data-ending-style\`.
 */
export function SheetBuildYourOwn({ open, onOpenChange }: { open?: boolean; onOpenChange?: (open: boolean) => void }) {
  return (
    <Dialog.Root open={open} onOpenChange={(next) => onOpenChange?.(next)}>
      <Dialog.Trigger render={<Button variant="outline" />}>
        <Filter />
        Filters
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50" />
        <Dialog.Popup className="fixed inset-y-0 right-0 z-50 flex h-full w-3/4 flex-col gap-4 border-l bg-popover text-sm text-popover-foreground shadow-xl transition duration-200 ease-in-out data-starting-style:translate-x-10 data-starting-style:opacity-0 data-ending-style:translate-x-10 data-ending-style:opacity-0 sm:max-w-sm">
          <div className="flex flex-col gap-0.5 p-4">
            <Dialog.Title className="text-base font-medium">Filter pull requests</Dialog.Title>
            <Dialog.Description className="text-muted-foreground">Show only the statuses you pick.</Dialog.Description>
          </div>
          <div className="grid gap-3 px-4">
            {STATUSES.map((status, i) => (
              <Checkbox key={status} label={status} defaultChecked={i < 2} />
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-2 p-4">
            <Dialog.Close render={<Button />}>Apply filters</Dialog.Close>
          </div>
          <Dialog.Close render={<CloseButton className="absolute top-3 end-3" />} />
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>a(()=>import(`./build-your-own-ClG4BPox2.js`),[]));var H=`import { Filter } from "lucide-react"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { Checkbox } from "@kitora/ui/checkbox"
import { Label } from "@kitora/ui/label"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@kitora/ui/sheet"

const statuses = ["Open", "In review", "Merged", "Closed"]

export function SheetComposeFilterPanel() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Filter />
            Filters
            <Badge variant="secondary">2</Badge>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Filter pull requests</SheetTitle>
            <SheetDescription>Show only the statuses you pick.</SheetDescription>
          </SheetHeader>
          <div className="grid gap-3 px-4">
            {statuses.map((s, i) => (
              <Label key={s} className="flex items-center gap-2 font-normal">
                <Checkbox defaultChecked={i < 2} />
                {s}
              </Label>
            ))}
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button>Apply filters</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>a(()=>import(`./compose-CbO9sHBe2.js`),[]));var U=`import { Settings } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { Label } from "@kitora/ui/label"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@kitora/ui/sheet"
import { Switch } from "@kitora/ui/switch"

export function SheetRightSidePanel() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Settings />
            Open settings
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Project settings</SheetTitle>
            <SheetDescription>Tweak project-wide preferences. Saves on close.</SheetDescription>
          </SheetHeader>
          <div className="space-y-4 px-4">
            <div className="grid gap-1.5">
              <Label htmlFor="proj-name">Name</Label>
              <Input id="proj-name" defaultValue="Kitora" />
            </div>
            <div className="flex items-center justify-between">
              <Label>Public visibility</Label>
              <Switch />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button>Done</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>a(()=>import(`./right-side-panel-9qQ8WpIf.js`),[]));var W=`import { Button } from "@kitora/ui/button"
import { Sheet, SheetBody, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@kitora/ui/sheet"

const NOTES = Array.from({ length: 20 }, (_, i) => \`Note \${i + 1}: follow up with the design review and update the tracker.\`)

// \`side="start"\` and \`side="end"\` follow the reading direction: in right-to-left text the start sheet comes from the right. The notes sit in
// a \`SheetBody\`, so they scroll while the header and the footer stay put; \`size="lg"\` widens the end panel.
export function SheetStartEndAndBody() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {(["start", "end"] as const).map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">Open {side} sheet</Button>
          </SheetTrigger>
          <SheetContent side={side} size={side === "end" ? "lg" : "sm"}>
            <SheetHeader>
              <SheetTitle>Notes</SheetTitle>
              <SheetDescription>{NOTES.length} notes from this week.</SheetDescription>
            </SheetHeader>
            <SheetBody>
              <ul className="flex flex-col gap-2 text-muted-foreground">
                {NOTES.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </SheetBody>
            <SheetFooter>
              <SheetClose asChild>
                <Button>Done</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>a(()=>import(`./start-end-and-body-6sSDeXRQ.js`),[]));var G={"./demos/sheet/build-your-own.tsx":k,"./demos/sheet/compose.tsx":N,"./demos/sheet/right-side-panel.tsx":I,"./demos/sheet/start-end-and-body.tsx":R},K={"./demos/sheet/build-your-own.tsx":V,"./demos/sheet/compose.tsx":H,"./demos/sheet/right-side-panel.tsx":U,"./demos/sheet/start-end-and-body.tsx":W};export{G as modules,K as sources};