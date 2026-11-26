import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./menubar-5KzQI3h9.js";import{t as r}from"./circle-C8CJOATp.js";import{$i as i,Ai as a,Bc as o,Bi as s,Cc as c,Gi as ee,Hi as l,Ic as u,Ji as d,Ki as f,Oi as p,Ui as m,Vi as h,Xi as g,Yi as _,Zi as v,ea as y,qi as b,ta as x,vo as S,zi as C}from"./index-q72zUtm9.js";import{t as te}from"./badge-Be8rVEaF.js";import{n as ne,t as re}from"./card-WiouR7Ep.js";import{a as w,c as T,d as E,f as D,i as O,l as k,n as A,o as j,p as M,r as N,s as P,t as F,u as I}from"./menubar-CZhNfLx5.js";var L=e({MenubarApplicationMenu:()=>ie}),R=t(o(),1),z=u();function ie(){let[e,t]=(0,R.useState)(!0),[n,r]=(0,R.useState)(`100`);return(0,z.jsxs)(F,{"aria-label":`Application`,children:[(0,z.jsxs)(w,{children:[(0,z.jsx)(M,{children:`File`}),(0,z.jsxs)(N,{children:[(0,z.jsxs)(O,{children:[`New `,(0,z.jsx)(k,{children:`⌘N`})]}),(0,z.jsxs)(O,{children:[`Open… `,(0,z.jsx)(k,{children:`⌘O`})]}),(0,z.jsxs)(I,{children:[(0,z.jsx)(D,{children:`Open recent`}),(0,z.jsxs)(E,{children:[(0,z.jsx)(O,{children:`Roadmap.md`}),(0,z.jsx)(O,{children:`Budget.csv`})]})]}),(0,z.jsx)(T,{}),(0,z.jsx)(O,{disabled:!0,children:`Print…`})]})]}),(0,z.jsxs)(w,{children:[(0,z.jsx)(M,{children:`Edit`}),(0,z.jsxs)(N,{children:[(0,z.jsxs)(O,{children:[`Undo `,(0,z.jsx)(k,{children:`⌘Z`})]}),(0,z.jsxs)(O,{children:[`Redo `,(0,z.jsx)(k,{children:`⇧⌘Z`})]})]})]}),(0,z.jsxs)(w,{children:[(0,z.jsx)(M,{children:`View`}),(0,z.jsxs)(N,{children:[(0,z.jsx)(A,{checked:e,onCheckedChange:t,children:`Show grid`}),(0,z.jsx)(T,{}),(0,z.jsxs)(j,{value:n,onValueChange:r,children:[(0,z.jsx)(P,{value:`75`,children:`75%`}),(0,z.jsx)(P,{value:`100`,children:`100%`}),(0,z.jsx)(P,{value:`150`,children:`150%`})]})]})]})]})}var B=e({MenubarBuildYourOwn:()=>G}),V=`flex h-6 cursor-default items-center rounded px-2 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:bg-muted data-popup-open:bg-muted`,H=`flex cursor-default items-center gap-2 rounded-md px-2 py-1.5 outline-none select-none data-disabled:opacity-50 data-highlighted:bg-accent data-highlighted:text-accent-foreground data-popup-open:bg-accent`;function U({children:e,submenu:t=!1}){return(0,z.jsx)(f,{children:(0,z.jsx)(b,{side:t?`inline-end`:`bottom`,align:`start`,sideOffset:t?0:8,className:`isolate z-50 outline-none`,children:(0,z.jsx)(ee,{className:`z-50 min-w-40 rounded-lg bg-popover p-1 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-none`,children:e})})})}function W({children:e}){return(0,z.jsx)(`span`,{className:`flex size-4 items-center justify-center`,children:e})}function G(){return(0,z.jsxs)(n,{"aria-label":`App`,className:`flex h-8 w-fit items-center gap-0.5 rounded-lg border border-border bg-background p-[3px]`,children:[(0,z.jsxs)(v,{children:[(0,z.jsx)(x,{className:V,children:`File`}),(0,z.jsxs)(U,{children:[(0,z.jsxs)(m,{className:H,children:[`New file `,(0,z.jsx)(`span`,{className:`ms-auto text-xs text-muted-foreground`,children:`⌘N`})]}),(0,z.jsxs)(i,{children:[(0,z.jsxs)(y,{className:H,children:[`Open recent`,(0,z.jsx)(p,{className:`ms-auto size-4 rtl:rotate-180`})]}),(0,z.jsxs)(U,{submenu:!0,children:[(0,z.jsx)(m,{className:H,children:`roadmap.md`}),(0,z.jsx)(m,{className:H,children:`notes.md`})]})]}),(0,z.jsx)(S,{className:`-mx-1 my-1 h-px bg-border`}),(0,z.jsx)(m,{className:H,disabled:!0,children:`Print`})]})]}),(0,z.jsxs)(v,{children:[(0,z.jsx)(x,{className:V,children:`View`}),(0,z.jsxs)(U,{children:[(0,z.jsxs)(C,{className:H,defaultChecked:!0,children:[(0,z.jsx)(W,{children:(0,z.jsx)(s,{children:(0,z.jsx)(a,{className:`size-4`})})}),`Show grid`]}),(0,z.jsx)(S,{className:`-mx-1 my-1 h-px bg-border`}),(0,z.jsxs)(h,{children:[(0,z.jsx)(l,{className:`px-2 py-1 text-xs font-medium text-muted-foreground`,children:`Zoom`}),(0,z.jsx)(d,{defaultValue:`100`,children:[`100`,`150`,`200`].map(e=>(0,z.jsxs)(_,{value:e,className:H,children:[(0,z.jsx)(W,{children:(0,z.jsx)(g,{children:(0,z.jsx)(r,{className:`size-2 fill-current`})})}),e,`%`]},e))})]})]})]}),(0,z.jsxs)(v,{children:[(0,z.jsx)(x,{className:V,children:`Help`}),(0,z.jsxs)(U,{children:[(0,z.jsx)(m,{className:H,children:`Documentation`}),(0,z.jsx)(m,{className:H,children:`About`})]})]})]})}var K=e({MenubarComposeDocumentWindow:()=>q});function q(){let[e,t]=(0,R.useState)(`Nothing chosen yet`);return(0,z.jsx)(re,{className:`w-full max-w-md`,children:(0,z.jsxs)(ne,{className:`grid gap-3`,children:[(0,z.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,z.jsxs)(F,{"aria-label":`Document`,children:[(0,z.jsxs)(w,{children:[(0,z.jsx)(M,{children:`File`}),(0,z.jsxs)(N,{children:[(0,z.jsx)(O,{onClick:()=>t(`File, New`),children:`New`}),(0,z.jsx)(O,{onClick:()=>t(`File, Save`),children:`Save`}),(0,z.jsx)(T,{}),(0,z.jsx)(O,{onClick:()=>t(`File, Close`),children:`Close`})]})]}),(0,z.jsxs)(w,{children:[(0,z.jsx)(M,{children:`Help`}),(0,z.jsx)(N,{children:(0,z.jsx)(O,{onClick:()=>t(`Help, Shortcuts`),children:`Keyboard shortcuts`})})]})]}),(0,z.jsx)(te,{variant:`secondary`,children:`v2.1`})]}),(0,z.jsx)(`p`,{className:`text-sm text-muted-foreground`,"aria-live":`polite`,children:e})]})})}var J=e({MenubarVerticalAndModal:()=>Y});function Y(){return(0,z.jsxs)(`div`,{className:`flex flex-wrap items-start justify-center gap-10`,children:[(0,z.jsxs)(F,{"aria-label":`Vertical menubar`,orientation:`vertical`,className:`w-32`,children:[(0,z.jsxs)(w,{children:[(0,z.jsx)(M,{children:`Account`}),(0,z.jsxs)(N,{side:`right`,align:`start`,sideOffset:4,alignOffset:0,children:[(0,z.jsx)(O,{children:`Profile`}),(0,z.jsx)(O,{children:`Billing`})]})]}),(0,z.jsxs)(w,{children:[(0,z.jsx)(M,{children:`Team`}),(0,z.jsxs)(N,{side:`right`,align:`start`,sideOffset:4,alignOffset:0,children:[(0,z.jsx)(O,{children:`Members`}),(0,z.jsx)(O,{children:`Invites`})]})]})]}),(0,z.jsxs)(F,{"aria-label":`Not modal`,modal:!1,children:[(0,z.jsxs)(w,{children:[(0,z.jsx)(M,{children:`Layout`}),(0,z.jsxs)(N,{children:[(0,z.jsx)(O,{children:`Compact`}),(0,z.jsx)(O,{children:`Comfortable`})]})]}),(0,z.jsxs)(w,{children:[(0,z.jsx)(M,{disabled:!0,children:`Plugins`}),(0,z.jsx)(N,{children:(0,z.jsx)(O,{children:`Manage`})})]})]})]})}var X=`import { useState } from "react"
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from "@kitora/ui/menubar"

export function MenubarApplicationMenu() {
  const [showGrid, setShowGrid] = useState(true)
  const [zoom, setZoom] = useState("100")
  return (
    <Menubar aria-label="Application">
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Open… <MenubarShortcut>⌘O</MenubarShortcut>
          </MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>Open recent</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Roadmap.md</MenubarItem>
              <MenubarItem>Budget.csv</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem disabled>Print…</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked={showGrid} onCheckedChange={setShowGrid}>
            Show grid
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarRadioGroup value={zoom} onValueChange={setZoom}>
            <MenubarRadioItem value="75">75%</MenubarRadioItem>
            <MenubarRadioItem value="100">100%</MenubarRadioItem>
            <MenubarRadioItem value="150">150%</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>c(()=>import(`./application-menu-bPMkUZ8h.js`),[]));var Z=`import type { ReactNode } from "react"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"
import { Menu, Menubar } from "@kitora/primitives/react"

const TITLE = "flex h-6 cursor-default items-center rounded px-2 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:bg-muted data-popup-open:bg-muted"
const ITEM = "flex cursor-default items-center gap-2 rounded-md px-2 py-1.5 outline-none select-none data-disabled:opacity-50 data-highlighted:bg-accent data-highlighted:text-accent-foreground data-popup-open:bg-accent"

/** One menu's popup: under its title, or beside its submenu trigger. */
function Popup({ children, submenu = false }: { children: ReactNode; submenu?: boolean }) {
  return (
    <Menu.Portal>
      <Menu.Positioner side={submenu ? "inline-end" : "bottom"} align="start" sideOffset={submenu ? 0 : 8} className="isolate z-50 outline-none">
        <Menu.Popup className="z-50 min-w-40 rounded-lg bg-popover p-1 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-none">{children}</Menu.Popup>
      </Menu.Positioner>
    </Menu.Portal>
  )
}

/** A check or a dot in front of a checkbox or radio item. */
function Indicator({ children }: { children: ReactNode }) {
  return <span className="flex size-4 items-center justify-center">{children}</span>
}

/** A menubar built from the primitives' \`Menubar\` and \`Menu\` parts only: one tab stop, ← / → along the bar, ↓ opens a menu. */
export function MenubarBuildYourOwn() {
  return (
    <Menubar aria-label="App" className="flex h-8 w-fit items-center gap-0.5 rounded-lg border border-border bg-background p-[3px]">
      <Menu.Root>
        <Menu.Trigger className={TITLE}>File</Menu.Trigger>
        <Popup>
          <Menu.Item className={ITEM}>
            New file <span className="ms-auto text-xs text-muted-foreground">⌘N</span>
          </Menu.Item>
          <Menu.SubmenuRoot>
            <Menu.SubmenuTrigger className={ITEM}>
              Open recent
              <ChevronRightIcon className="ms-auto size-4 rtl:rotate-180" />
            </Menu.SubmenuTrigger>
            <Popup submenu>
              <Menu.Item className={ITEM}>roadmap.md</Menu.Item>
              <Menu.Item className={ITEM}>notes.md</Menu.Item>
            </Popup>
          </Menu.SubmenuRoot>
          <Menu.Separator className="-mx-1 my-1 h-px bg-border" />
          <Menu.Item className={ITEM} disabled>
            Print
          </Menu.Item>
        </Popup>
      </Menu.Root>
      <Menu.Root>
        <Menu.Trigger className={TITLE}>View</Menu.Trigger>
        <Popup>
          <Menu.CheckboxItem className={ITEM} defaultChecked>
            <Indicator>
              <Menu.CheckboxItemIndicator>
                <CheckIcon className="size-4" />
              </Menu.CheckboxItemIndicator>
            </Indicator>
            Show grid
          </Menu.CheckboxItem>
          <Menu.Separator className="-mx-1 my-1 h-px bg-border" />
          <Menu.Group>
            <Menu.GroupLabel className="px-2 py-1 text-xs font-medium text-muted-foreground">Zoom</Menu.GroupLabel>
            <Menu.RadioGroup defaultValue="100">
              {["100", "150", "200"].map((zoom) => (
                <Menu.RadioItem key={zoom} value={zoom} className={ITEM}>
                  <Indicator>
                    <Menu.RadioItemIndicator>
                      <CircleIcon className="size-2 fill-current" />
                    </Menu.RadioItemIndicator>
                  </Indicator>
                  {zoom}%
                </Menu.RadioItem>
              ))}
            </Menu.RadioGroup>
          </Menu.Group>
        </Popup>
      </Menu.Root>
      <Menu.Root>
        <Menu.Trigger className={TITLE}>Help</Menu.Trigger>
        <Popup>
          <Menu.Item className={ITEM}>Documentation</Menu.Item>
          <Menu.Item className={ITEM}>About</Menu.Item>
        </Popup>
      </Menu.Root>
    </Menubar>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>c(()=>import(`./build-your-own-Bzzb2Hr0.js`),[]));var Q=`import { useState } from "react"
import { Badge } from "@kitora/ui/badge"
import { Card, CardContent } from "@kitora/ui/card"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@kitora/ui/menubar"

export function MenubarComposeDocumentWindow() {
  const [last, setLast] = useState("Nothing chosen yet")
  return (
    <Card className="w-full max-w-md">
      <CardContent className="grid gap-3">
        <div className="flex items-center justify-between gap-2">
          <Menubar aria-label="Document">
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => setLast("File, New")}>New</MenubarItem>
                <MenubarItem onClick={() => setLast("File, Save")}>Save</MenubarItem>
                <MenubarSeparator />
                <MenubarItem onClick={() => setLast("File, Close")}>Close</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Help</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => setLast("Help, Shortcuts")}>Keyboard shortcuts</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <Badge variant="secondary">v2.1</Badge>
        </div>
        <p className="text-sm text-muted-foreground" aria-live="polite">
          {last}
        </p>
      </CardContent>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>c(()=>import(`./compose-BFt_vG9U.js`),[]));var $=`import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@kitora/ui/menubar"

export function MenubarVerticalAndModal() {
  return (
    <div className="flex flex-wrap items-start justify-center gap-10">
      <Menubar aria-label="Vertical menubar" orientation="vertical" className="w-32">
        <MenubarMenu>
          <MenubarTrigger>Account</MenubarTrigger>
          <MenubarContent side="right" align="start" sideOffset={4} alignOffset={0}>
            <MenubarItem>Profile</MenubarItem>
            <MenubarItem>Billing</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Team</MenubarTrigger>
          <MenubarContent side="right" align="start" sideOffset={4} alignOffset={0}>
            <MenubarItem>Members</MenubarItem>
            <MenubarItem>Invites</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <Menubar aria-label="Not modal" modal={false}>
        <MenubarMenu>
          <MenubarTrigger>Layout</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Compact</MenubarItem>
            <MenubarItem>Comfortable</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger disabled>Plugins</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Manage</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>c(()=>import(`./vertical-and-modal-BxB5vNEx.js`),[]));var ae={"./demos/menubar/application-menu.tsx":L,"./demos/menubar/build-your-own.tsx":B,"./demos/menubar/compose.tsx":K,"./demos/menubar/vertical-and-modal.tsx":J},oe={"./demos/menubar/application-menu.tsx":X,"./demos/menubar/build-your-own.tsx":Z,"./demos/menubar/compose.tsx":Q,"./demos/menubar/vertical-and-modal.tsx":$};export{ae as modules,oe as sources};