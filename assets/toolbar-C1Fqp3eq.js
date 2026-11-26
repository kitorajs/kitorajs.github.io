import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{a as n,i as r,n as i,r as a,t as o}from"./toolbar-DOiY63nm.js";import{t as s}from"./toggle-group-P199eLC2.js";import{n as c,t as l}from"./italic-DxRW2qia.js";import{t as u}from"./image-DtLVBYKl.js";import{t as d}from"./link-2-CUYWQCng.js";import{t as f}from"./list-C1nJxk7s.js";import{t as p}from"./save-DJB_O8y8.js";import{t as m}from"./scissors-MDFruhGa.js";import{t as ee}from"./send-BbGn8CvN.js";import{t as te}from"./table-hp90NAhr.js";import{n as h,t as g}from"./text-align-end-B2KohG6r.js";import{t as _}from"./text-align-start-BHWjYlO7.js";import{t as v}from"./text-wrap-CjFiXyIk.js";import{t as y}from"./trash-2-0f767-k3.js";import{t as b}from"./underline-D5UPa3xY.js";import{Bc as ne,Cc as x,Di as re,Fn as S,Ic as C,Rn as w,Un as T,er as E,ki as D,ti as O,yo as ie}from"./index-9y5uwRd3.js";import{t as ae}from"./badge-CMT8Lr82.js";import{n as oe,t as se}from"./card-AZ_23TG_.js";import{a as ce,c as k,i as le,l as A,n as j,o as M,r as N,s as P,t as F}from"./toolbar-Bpvkqm5p.js";import{n as I,t as L}from"./toggle-group-DGN5AhCC.js";var R=e({ToolbarBuildYourOwn:()=>U}),z=C(),B=`inline-flex h-8 min-w-8 items-center justify-center gap-1.5 rounded-md px-2 text-sm outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring aria-disabled:opacity-50 data-pressed:bg-primary/10 data-pressed:text-primary [&_svg]:size-4`;function V({label:e,value:t,pressed:n,onPressedChange:r,children:i}){return(0,z.jsx)(o,{"aria-label":e,className:B,render:(0,z.jsx)(ie,{value:t,pressed:n,onPressedChange:r}),children:i})}var H=`shrink-0 bg-border data-vertical:mx-1 data-vertical:h-5 data-vertical:w-px data-horizontal:my-1 data-horizontal:h-px data-horizontal:w-5`;function U({orientation:e=`horizontal`,value:t,onValueChange:u,pressed:d,onPressedChange:f}){return(0,z.jsxs)(r,{"aria-label":`Editor`,orientation:e,className:`flex w-full flex-wrap items-center gap-1 rounded-lg border border-border bg-background p-1 data-vertical:w-fit data-vertical:flex-nowrap data-vertical:flex-col data-vertical:items-stretch`,children:[(0,z.jsxs)(s,{multiple:!0,"aria-label":`Marks`,defaultValue:[`bold`],orientation:e,className:`flex gap-0.5 data-vertical:flex-col`,children:[(0,z.jsx)(V,{label:`Bold`,value:`bold`,children:(0,z.jsx)(c,{})}),(0,z.jsx)(V,{label:`Italic`,value:`italic`,children:(0,z.jsx)(l,{})})]}),(0,z.jsx)(n,{className:H}),(0,z.jsxs)(s,{"aria-label":`Alignment`,value:t,defaultValue:t===void 0?[`left`]:void 0,onValueChange:e=>u?.([...e]),orientation:e,className:`flex gap-0.5 data-vertical:flex-col`,children:[(0,z.jsx)(V,{label:`Align left`,value:`left`,children:(0,z.jsx)(_,{})}),(0,z.jsx)(V,{label:`Align center`,value:`center`,children:(0,z.jsx)(h,{})}),(0,z.jsx)(V,{label:`Align right`,value:`right`,children:(0,z.jsx)(g,{})})]}),(0,z.jsx)(n,{className:H}),(0,z.jsx)(V,{label:`Wrap lines`,pressed:d,onPressedChange:f,children:(0,z.jsx)(v,{})}),(0,z.jsx)(i,{"aria-label":`Find`,placeholder:`Find`,className:`h-8 w-24 min-w-0 rounded-md border border-input bg-transparent px-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring`}),(0,z.jsx)(`div`,{"aria-hidden":`true`,className:`flex-1`}),(0,z.jsx)(a,{href:`#help`,className:B,children:`Help`}),(0,z.jsxs)(o,{disabled:!0,className:B,children:[(0,z.jsx)(ee,{}),`Publish`]}),(0,z.jsxs)(o,{className:B,children:[(0,z.jsx)(p,{}),`Save`]})]})}var W=e({ToolbarComposeEditorBar:()=>ue}),G=t(ne(),1);function ue(){let[e,t]=(0,G.useState)([]);return(0,z.jsx)(se,{className:`w-full max-w-lg`,children:(0,z.jsxs)(oe,{className:`grid gap-3`,children:[(0,z.jsxs)(F,{"aria-label":`Note formatting`,className:`w-full`,children:[(0,z.jsxs)(L,{multiple:!0,"aria-label":`Marks`,value:e,onValueChange:t,children:[(0,z.jsx)(I,{value:`bold`,size:`sm`,"aria-label":`Bold`,children:(0,z.jsx)(c,{})}),(0,z.jsx)(I,{value:`italic`,size:`sm`,"aria-label":`Italic`,children:(0,z.jsx)(l,{})})]}),(0,z.jsx)(M,{}),(0,z.jsx)(j,{"aria-label":`Bulleted list`,children:(0,z.jsx)(f,{})}),(0,z.jsx)(j,{"aria-label":`Paragraph`,children:(0,z.jsx)(_,{})}),(0,z.jsx)(ae,{variant:`outline`,className:`ml-auto`,children:`Draft`})]}),(0,z.jsx)(`p`,{className:`text-sm ${e.includes(`bold`)?`font-bold`:``} ${e.includes(`italic`)?`italic`:``}`,children:`Tab into the toolbar once; the arrow keys move along it, Home and End jump to the ends.`}),(0,z.jsxs)(`div`,{className:`flex justify-end gap-2`,children:[(0,z.jsx)(O,{variant:`outline`,size:`sm`,children:`Discard`}),(0,z.jsx)(O,{size:`sm`,children:`Save note`})]})]})})}var de=e({ToolbarFormatting:()=>fe});function fe(){return(0,z.jsxs)(F,{"aria-label":`Text formatting`,children:[(0,z.jsxs)(L,{multiple:!0,"aria-label":`Marks`,children:[(0,z.jsx)(I,{value:`bold`,size:`sm`,"aria-label":`Bold`,children:(0,z.jsx)(c,{})}),(0,z.jsx)(I,{value:`italic`,size:`sm`,"aria-label":`Italic`,children:(0,z.jsx)(l,{})}),(0,z.jsx)(I,{value:`underline`,size:`sm`,"aria-label":`Underline`,children:(0,z.jsx)(b,{})})]}),(0,z.jsx)(M,{}),(0,z.jsxs)(L,{"aria-label":`Alignment`,defaultValue:[`left`],children:[(0,z.jsx)(I,{value:`left`,size:`sm`,"aria-label":`Align left`,children:(0,z.jsx)(_,{})}),(0,z.jsx)(I,{value:`center`,size:`sm`,"aria-label":`Align center`,children:(0,z.jsx)(h,{})}),(0,z.jsx)(I,{value:`right`,size:`sm`,"aria-label":`Align right`,children:(0,z.jsx)(g,{})})]}),(0,z.jsx)(M,{}),(0,z.jsx)(j,{"aria-label":`Insert link`,children:(0,z.jsx)(d,{})})]})}var pe=e({ToolbarInputLinkAndMenu:()=>me});function me(){return(0,z.jsxs)(F,{"aria-label":`Document`,className:`w-full max-w-xl flex-wrap`,children:[(0,z.jsx)(N,{"aria-label":`Find in document`,placeholder:`Find…`,className:`w-36`}),(0,z.jsx)(M,{}),(0,z.jsxs)(S,{children:[(0,z.jsxs)(j,{render:(0,z.jsx)(E,{}),children:[`Insert `,(0,z.jsx)(D,{})]}),(0,z.jsxs)(w,{children:[(0,z.jsx)(T,{children:`Image`}),(0,z.jsx)(T,{children:`Table`}),(0,z.jsx)(T,{children:`Divider`})]})]}),(0,z.jsx)(le,{href:`#help`,children:`Help`})]})}var he=e({ToolbarOverflowMore:()=>_e}),ge={wide:`max-w-xl`,medium:`max-w-sm`,narrow:`max-w-56`};function _e(){let[e,t]=(0,G.useState)(`medium`),[n,r]=(0,G.useState)(!0),[i,a]=(0,G.useState)(`nothing yet`),[o,s]=(0,G.useState)([]),p=[{id:`bold`,label:`Bold`,icon:(0,z.jsx)(c,{}),kind:`toggle`,defaultPressed:!0},{id:`italic`,label:`Italic`,icon:(0,z.jsx)(l,{}),kind:`toggle`},{id:`underline`,label:`Underline`,icon:(0,z.jsx)(b,{}),kind:`toggle`},{id:`marks-end`,kind:`separator`},{id:`align-left`,label:`Align left`,icon:(0,z.jsx)(_,{}),onSelect:()=>a(`Align left`)},{id:`align-center`,label:`Align center`,icon:(0,z.jsx)(h,{}),onSelect:()=>a(`Align center`)},{id:`list`,label:`Bulleted list`,icon:(0,z.jsx)(f,{}),onSelect:()=>a(`Bulleted list`)},{id:`blocks-end`,kind:`separator`},{id:`link`,label:`Insert link`,icon:(0,z.jsx)(d,{}),onSelect:()=>a(`Insert link`)},{id:`image`,label:`Insert image`,icon:(0,z.jsx)(u,{}),onSelect:()=>a(`Insert image`)},{id:`table`,label:`Insert table`,icon:(0,z.jsx)(te,{}),onSelect:()=>a(`Insert table`)},{id:`wrap`,label:`Wrap lines`,icon:(0,z.jsx)(v,{}),kind:`toggle`,pressed:n,onPressedChange:r}];return(0,z.jsxs)(`div`,{className:`flex w-full max-w-xl flex-col gap-3`,children:[(0,z.jsxs)(L,{"aria-label":`Bar width`,value:[e],onValueChange:e=>e[0]&&t(e[0]),children:[(0,z.jsx)(I,{value:`wide`,size:`sm`,children:`Wide`}),(0,z.jsx)(I,{value:`medium`,size:`sm`,children:`Medium`}),(0,z.jsx)(I,{value:`narrow`,size:`sm`,children:`Narrow`})]}),(0,z.jsxs)(F,{"aria-label":`Editor`,className:`w-full ${ge[e]}`,children:[(0,z.jsx)(j,{children:`Save`}),(0,z.jsx)(M,{}),(0,z.jsx)(ce,{items:p,moreLabel:`More formatting`,onOverflowChange:s})]}),(0,z.jsxs)(`p`,{className:`text-sm text-muted-foreground`,children:[`Last command: `,i,`. Wrap lines is `,n?`on`:`off`,`. In the menu: `,o.length===0?`nothing`:o.length,`.`]})]})}var ve=e({ToolbarTogglesAndSpacer:()=>ye});function ye(){let[e,t]=(0,G.useState)([`left`]),[n,r]=(0,G.useState)(!0);return(0,z.jsxs)(`div`,{className:`flex w-full max-w-xl flex-col gap-3`,children:[(0,z.jsxs)(F,{"aria-label":`Editor`,className:`w-full`,children:[(0,z.jsxs)(A,{multiple:!0,"aria-label":`Marks`,defaultValue:[`bold`],children:[(0,z.jsx)(k,{value:`bold`,"aria-label":`Bold`,children:(0,z.jsx)(c,{})}),(0,z.jsx)(k,{value:`italic`,"aria-label":`Italic`,children:(0,z.jsx)(l,{})}),(0,z.jsx)(k,{value:`underline`,"aria-label":`Underline`,children:(0,z.jsx)(b,{})})]}),(0,z.jsx)(M,{}),(0,z.jsxs)(A,{"aria-label":`Alignment`,value:e,onValueChange:t,disallowEmptySelection:!0,children:[(0,z.jsx)(k,{value:`left`,"aria-label":`Align left`,children:(0,z.jsx)(_,{})}),(0,z.jsx)(k,{value:`center`,"aria-label":`Align center`,children:(0,z.jsx)(h,{})}),(0,z.jsx)(k,{value:`right`,"aria-label":`Align right`,children:(0,z.jsx)(g,{})})]}),(0,z.jsx)(M,{}),(0,z.jsx)(k,{"aria-label":`Wrap lines`,pressed:n,onPressedChange:r,children:(0,z.jsx)(v,{})}),(0,z.jsx)(P,{}),(0,z.jsxs)(j,{variant:`outline`,children:[(0,z.jsx)(p,{}),`Save`]})]}),(0,z.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`Align: `,e.join(`, `),` · Wrap: `,n?`on`:`off`]})]})}var be=e({ToolbarVerticalAndDisabled:()=>K});function K(){return(0,z.jsxs)(`div`,{className:`flex flex-wrap items-start justify-center gap-8`,children:[(0,z.jsxs)(F,{"aria-label":`Edit actions`,orientation:`vertical`,className:`w-40`,children:[(0,z.jsxs)(j,{className:`justify-start`,children:[(0,z.jsx)(m,{}),` Cut`]}),(0,z.jsxs)(j,{className:`justify-start`,disabled:!0,children:[(0,z.jsx)(re,{}),` Copy (disabled, still focusable)`]}),(0,z.jsx)(M,{}),(0,z.jsxs)(j,{className:`justify-start`,disabled:!0,focusableWhenDisabled:!1,children:[(0,z.jsx)(y,{}),` Delete (skipped)`]}),(0,z.jsx)(j,{className:`justify-start`,children:`Select all`})]}),(0,z.jsxs)(F,{"aria-label":`Whole toolbar disabled`,disabled:!0,children:[(0,z.jsx)(j,{children:`Undo`}),(0,z.jsx)(j,{children:`Redo`})]})]})}var q=`import type { ReactNode } from "react"
import { AlignCenter, AlignLeft, AlignRight, Bold, Italic, Save, Send, WrapText } from "lucide-react"
import { Toggle, ToggleGroup, Toolbar } from "@kitora/primitives/react"

const ITEM = "inline-flex h-8 min-w-8 items-center justify-center gap-1.5 rounded-md px-2 text-sm outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring aria-disabled:opacity-50 data-pressed:bg-primary/10 data-pressed:text-primary [&_svg]:size-4"

/** A two-state stop of the bar: \`Toolbar.Button\` rendering a \`Toggle\`, so the toolbar owns the focus and the toggle owns the state. */
function BarToggle({ label, value, pressed, onPressedChange, children }: { label: string; value?: string; pressed?: boolean; onPressedChange?: (pressed: boolean) => void; children: ReactNode }) {
  return (
    <Toolbar.Button aria-label={label} className={ITEM} render={<Toggle value={value} pressed={pressed} onPressedChange={onPressedChange} />}>
      {children}
    </Toolbar.Button>
  )
}

const SEPARATOR = "shrink-0 bg-border data-vertical:mx-1 data-vertical:h-5 data-vertical:w-px data-horizontal:my-1 data-horizontal:h-px data-horizontal:w-5"

/**
 * A toolbar built from the primitives' parts only: \`Toolbar.Root\` (one tab stop, arrow keys along \`orientation\`, Home and End), \`ToggleGroup\`s
 * whose toggles are stops of the bar, \`Toolbar.Button\` rendering a \`Toggle\`, \`Toolbar.Separator\`, \`Toolbar.Input\`, \`Toolbar.Link\` and plain
 * \`Toolbar.Button\`s (a disabled one stays focusable with \`aria-disabled\`). The alignment is controlled with \`value\` and \`onValueChange\`, the wrap toggle with \`pressed\` and \`onPressedChange\`.
 */
export function ToolbarBuildYourOwn({ orientation = "horizontal", value, onValueChange, pressed, onPressedChange }: { orientation?: "horizontal" | "vertical"; value?: string[]; onValueChange?: (value: string[]) => void; pressed?: boolean; onPressedChange?: (pressed: boolean) => void }) {
  return (
    <Toolbar.Root aria-label="Editor" orientation={orientation} className="flex w-full flex-wrap items-center gap-1 rounded-lg border border-border bg-background p-1 data-vertical:w-fit data-vertical:flex-nowrap data-vertical:flex-col data-vertical:items-stretch">
      <ToggleGroup multiple aria-label="Marks" defaultValue={["bold"]} orientation={orientation} className="flex gap-0.5 data-vertical:flex-col">
        <BarToggle label="Bold" value="bold">
          <Bold />
        </BarToggle>
        <BarToggle label="Italic" value="italic">
          <Italic />
        </BarToggle>
      </ToggleGroup>
      <Toolbar.Separator className={SEPARATOR} />
      <ToggleGroup aria-label="Alignment" value={value} defaultValue={value === undefined ? ["left"] : undefined} onValueChange={(next) => onValueChange?.([...next])} orientation={orientation} className="flex gap-0.5 data-vertical:flex-col">
        <BarToggle label="Align left" value="left">
          <AlignLeft />
        </BarToggle>
        <BarToggle label="Align center" value="center">
          <AlignCenter />
        </BarToggle>
        <BarToggle label="Align right" value="right">
          <AlignRight />
        </BarToggle>
      </ToggleGroup>
      <Toolbar.Separator className={SEPARATOR} />
      <BarToggle label="Wrap lines" pressed={pressed} onPressedChange={onPressedChange}>
        <WrapText />
      </BarToggle>
      <Toolbar.Input aria-label="Find" placeholder="Find" className="h-8 w-24 min-w-0 rounded-md border border-input bg-transparent px-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring" />
      <div aria-hidden="true" className="flex-1" />
      <Toolbar.Link href="#help" className={ITEM}>
        Help
      </Toolbar.Link>
      <Toolbar.Button disabled className={ITEM}>
        <Send />
        Publish
      </Toolbar.Button>
      <Toolbar.Button className={ITEM}>
        <Save />
        Save
      </Toolbar.Button>
    </Toolbar.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>x(()=>import(`./build-your-own-KXuVhajF.js`),[]));var J=`import { useState } from "react"
import { AlignLeft, Bold, Italic, List } from "lucide-react"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { Card, CardContent } from "@kitora/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@kitora/ui/toggle-group"
import { Toolbar, ToolbarButton, ToolbarSeparator } from "@kitora/ui/toolbar"

export function ToolbarComposeEditorBar() {
  const [marks, setMarks] = useState<string[]>([])
  return (
    <Card className="w-full max-w-lg">
      <CardContent className="grid gap-3">
        <Toolbar aria-label="Note formatting" className="w-full">
          <ToggleGroup multiple aria-label="Marks" value={marks} onValueChange={setMarks}>
            <ToggleGroupItem value="bold" size="sm" aria-label="Bold">
              <Bold />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" size="sm" aria-label="Italic">
              <Italic />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToolbarSeparator />
          <ToolbarButton aria-label="Bulleted list">
            <List />
          </ToolbarButton>
          <ToolbarButton aria-label="Paragraph">
            <AlignLeft />
          </ToolbarButton>
          <Badge variant="outline" className="ml-auto">
            Draft
          </Badge>
        </Toolbar>
        <p className={\`text-sm \${marks.includes("bold") ? "font-bold" : ""} \${marks.includes("italic") ? "italic" : ""}\`}>Tab into the toolbar once; the arrow keys move along it, Home and End jump to the ends.</p>
        <div className="flex justify-end gap-2">
          <Button variant="outline" size="sm">
            Discard
          </Button>
          <Button size="sm">Save note</Button>
        </div>
      </CardContent>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>x(()=>import(`./compose-BWWA4r0B.js`),[]));var Y=`import { AlignCenter, AlignLeft, AlignRight, Bold, Italic, Link2, Underline } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@kitora/ui/toggle-group"
import { Toolbar, ToolbarButton, ToolbarSeparator } from "@kitora/ui/toolbar"

export function ToolbarFormatting() {
  return (
    <Toolbar aria-label="Text formatting">
      <ToggleGroup multiple aria-label="Marks">
        <ToggleGroupItem value="bold" size="sm" aria-label="Bold">
          <Bold />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" size="sm" aria-label="Italic">
          <Italic />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" size="sm" aria-label="Underline">
          <Underline />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToolbarSeparator />
      <ToggleGroup aria-label="Alignment" defaultValue={["left"]}>
        <ToggleGroupItem value="left" size="sm" aria-label="Align left">
          <AlignLeft />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" size="sm" aria-label="Align center">
          <AlignCenter />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" size="sm" aria-label="Align right">
          <AlignRight />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToolbarSeparator />
      <ToolbarButton aria-label="Insert link">
        <Link2 />
      </ToolbarButton>
    </Toolbar>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>x(()=>import(`./formatting-vTsjtios.js`),[]));var X=`import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@kitora/ui/dropdown-menu"
import { Toolbar, ToolbarButton, ToolbarInput, ToolbarLink, ToolbarSeparator } from "@kitora/ui/toolbar"

export function ToolbarInputLinkAndMenu() {
  return (
    <Toolbar aria-label="Document" className="w-full max-w-xl flex-wrap">
      <ToolbarInput aria-label="Find in document" placeholder="Find…" className="w-36" />
      <ToolbarSeparator />
      <DropdownMenu>
        <ToolbarButton render={<DropdownMenuTrigger />}>
          Insert <ChevronDown />
        </ToolbarButton>
        <DropdownMenuContent>
          <DropdownMenuItem>Image</DropdownMenuItem>
          <DropdownMenuItem>Table</DropdownMenuItem>
          <DropdownMenuItem>Divider</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ToolbarLink href="#help">Help</ToolbarLink>
    </Toolbar>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>x(()=>import(`./input-link-and-menu-DFDuvUja.js`),[]));var Z=`import { useState } from "react"
import { AlignCenter } from "lucide-react"
import { AlignLeft } from "lucide-react"
import { Bold } from "lucide-react"
import { ImageIcon } from "lucide-react"
import { Italic } from "lucide-react"
import { Link2 } from "lucide-react"
import { List } from "lucide-react"
import { Table } from "lucide-react"
import { Underline } from "lucide-react"
import { WrapText } from "lucide-react"
import { ToggleGroup } from "@kitora/ui/toggle-group"
import { ToggleGroupItem } from "@kitora/ui/toggle-group"
import { Toolbar } from "@kitora/ui/toolbar"
import { ToolbarButton } from "@kitora/ui/toolbar"
import { ToolbarOverflow } from "@kitora/ui/toolbar"
import { ToolbarSeparator } from "@kitora/ui/toolbar"
import type { ToolbarOverflowEntry } from "@kitora/ui/toolbar"

const WIDTHS = { wide: "max-w-xl", medium: "max-w-sm", narrow: "max-w-56" } as const
type Width = keyof typeof WIDTHS

export function ToolbarOverflowMore() {
  const [width, setWidth] = useState<Width>("medium")
  const [wrap, setWrap] = useState(true)
  const [last, setLast] = useState("nothing yet")
  const [hidden, setHidden] = useState<string[]>([])
  const items: ToolbarOverflowEntry[] = [
    { id: "bold", label: "Bold", icon: <Bold />, kind: "toggle", defaultPressed: true },
    { id: "italic", label: "Italic", icon: <Italic />, kind: "toggle" },
    { id: "underline", label: "Underline", icon: <Underline />, kind: "toggle" },
    { id: "marks-end", kind: "separator" },
    { id: "align-left", label: "Align left", icon: <AlignLeft />, onSelect: () => setLast("Align left") },
    { id: "align-center", label: "Align center", icon: <AlignCenter />, onSelect: () => setLast("Align center") },
    { id: "list", label: "Bulleted list", icon: <List />, onSelect: () => setLast("Bulleted list") },
    { id: "blocks-end", kind: "separator" },
    { id: "link", label: "Insert link", icon: <Link2 />, onSelect: () => setLast("Insert link") },
    { id: "image", label: "Insert image", icon: <ImageIcon />, onSelect: () => setLast("Insert image") },
    { id: "table", label: "Insert table", icon: <Table />, onSelect: () => setLast("Insert table") },
    { id: "wrap", label: "Wrap lines", icon: <WrapText />, kind: "toggle", pressed: wrap, onPressedChange: setWrap },
  ]
  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <ToggleGroup aria-label="Bar width" value={[width]} onValueChange={(next) => next[0] && setWidth(next[0] as Width)}>
        <ToggleGroupItem value="wide" size="sm">
          Wide
        </ToggleGroupItem>
        <ToggleGroupItem value="medium" size="sm">
          Medium
        </ToggleGroupItem>
        <ToggleGroupItem value="narrow" size="sm">
          Narrow
        </ToggleGroupItem>
      </ToggleGroup>
      <Toolbar aria-label="Editor" className={\`w-full \${WIDTHS[width]}\`}>
        <ToolbarButton>Save</ToolbarButton>
        <ToolbarSeparator />
        <ToolbarOverflow items={items} moreLabel="More formatting" onOverflowChange={setHidden} />
      </Toolbar>
      <p className="text-sm text-muted-foreground">
        Last command: {last}. Wrap lines is {wrap ? "on" : "off"}. In the menu: {hidden.length === 0 ? "nothing" : hidden.length}.
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>x(()=>import(`./overflow-CkwNN8-F.js`),[]));var Q=`import { useState } from "react"
import { AlignCenter, AlignLeft, AlignRight, Bold, Italic, Save, Underline, WrapText } from "lucide-react"
import { Toolbar, ToolbarButton, ToolbarSeparator, ToolbarSpacer, ToolbarToggle, ToolbarToggleGroup } from "@kitora/ui/toolbar"

export function ToolbarTogglesAndSpacer() {
  const [align, setAlign] = useState<string[]>(["left"])
  const [wrap, setWrap] = useState(true)
  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <Toolbar aria-label="Editor" className="w-full">
        <ToolbarToggleGroup multiple aria-label="Marks" defaultValue={["bold"]}>
          <ToolbarToggle value="bold" aria-label="Bold">
            <Bold />
          </ToolbarToggle>
          <ToolbarToggle value="italic" aria-label="Italic">
            <Italic />
          </ToolbarToggle>
          <ToolbarToggle value="underline" aria-label="Underline">
            <Underline />
          </ToolbarToggle>
        </ToolbarToggleGroup>
        <ToolbarSeparator />
        <ToolbarToggleGroup aria-label="Alignment" value={align} onValueChange={setAlign} disallowEmptySelection>
          <ToolbarToggle value="left" aria-label="Align left">
            <AlignLeft />
          </ToolbarToggle>
          <ToolbarToggle value="center" aria-label="Align center">
            <AlignCenter />
          </ToolbarToggle>
          <ToolbarToggle value="right" aria-label="Align right">
            <AlignRight />
          </ToolbarToggle>
        </ToolbarToggleGroup>
        <ToolbarSeparator />
        <ToolbarToggle aria-label="Wrap lines" pressed={wrap} onPressedChange={setWrap}>
          <WrapText />
        </ToolbarToggle>
        <ToolbarSpacer />
        <ToolbarButton variant="outline">
          <Save />
          Save
        </ToolbarButton>
      </Toolbar>
      <p className="text-xs text-muted-foreground">
        Align: {align.join(", ")} · Wrap: {wrap ? "on" : "off"}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>x(()=>import(`./toggles-and-spacer-DlqVWry3.js`),[]));var $=`import { Copy, Scissors, Trash2 } from "lucide-react"
import { Toolbar, ToolbarButton, ToolbarSeparator } from "@kitora/ui/toolbar"

export function ToolbarVerticalAndDisabled() {
  return (
    <div className="flex flex-wrap items-start justify-center gap-8">
      <Toolbar aria-label="Edit actions" orientation="vertical" className="w-40">
        <ToolbarButton className="justify-start">
          <Scissors /> Cut
        </ToolbarButton>
        <ToolbarButton className="justify-start" disabled>
          <Copy /> Copy (disabled, still focusable)
        </ToolbarButton>
        <ToolbarSeparator />
        <ToolbarButton className="justify-start" disabled focusableWhenDisabled={false}>
          <Trash2 /> Delete (skipped)
        </ToolbarButton>
        <ToolbarButton className="justify-start">Select all</ToolbarButton>
      </Toolbar>
      <Toolbar aria-label="Whole toolbar disabled" disabled>
        <ToolbarButton>Undo</ToolbarButton>
        <ToolbarButton>Redo</ToolbarButton>
      </Toolbar>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>x(()=>import(`./vertical-and-disabled-D8AVK9ri.js`),[]));var xe={"./demos/toolbar/build-your-own.tsx":R,"./demos/toolbar/compose.tsx":W,"./demos/toolbar/formatting.tsx":de,"./demos/toolbar/input-link-and-menu.tsx":pe,"./demos/toolbar/overflow.tsx":he,"./demos/toolbar/toggles-and-spacer.tsx":ve,"./demos/toolbar/vertical-and-disabled.tsx":be},Se={"./demos/toolbar/build-your-own.tsx":q,"./demos/toolbar/compose.tsx":J,"./demos/toolbar/formatting.tsx":Y,"./demos/toolbar/input-link-and-menu.tsx":X,"./demos/toolbar/overflow.tsx":Z,"./demos/toolbar/toggles-and-spacer.tsx":Q,"./demos/toolbar/vertical-and-disabled.tsx":$};export{xe as modules,Se as sources};