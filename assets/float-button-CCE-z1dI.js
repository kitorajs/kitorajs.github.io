import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./bell-CKqxJ4Kf.js";import{n as r,t as ee}from"./italic-DYnJ5SLL.js";import{t as i}from"./camera-DmWusnfP.js";import{t as a}from"./circle-question-mark-CkWtzdpO.js";import{t as o}from"./file-text-DcQTIaDt.js";import{t as s}from"./house-CA-hDJt5.js";import{t as c}from"./image-BbAdbuDr.js";import{t as l}from"./pencil-DL9xkgPh.js";import{t as u}from"./plus-C7zFbiHD.js";import{t as d}from"./printer-DLJ-If2H.js";import{t as f}from"./search-C2WkThP4.js";import{t as p}from"./share-DH4HAdXn.js";import{t as m}from"./underline-DIqy0Gq3.js";import{t as h}from"./user-CO_r6J-b.js";import{Bc as te,Cc as g,Di as ne,Ic as re,bi as ie}from"./index-q72zUtm9.js";import{t as ae}from"./badge-Be8rVEaF.js";import{a as oe,n as se,o as _,t as v}from"./card-WiouR7Ep.js";import{a as y,i as b,n as x,r as S,t as C}from"./float-button-BVWcJaTN.js";import{n as w}from"./bottom-nav-DIaKgKj9.js";var T=e({FloatButtonComposeTasks:()=>O}),E=t(te(),1),D=re();function O(){let[e,t]=(0,E.useState)([`Review the pull request`,`Write the release notes`]);return(0,D.jsxs)(v,{className:`relative w-full max-w-sm pb-16`,children:[(0,D.jsx)(oe,{children:(0,D.jsxs)(_,{className:`flex items-center gap-2`,children:[`Tasks `,(0,D.jsx)(ae,{variant:`secondary`,children:e.length})]})}),(0,D.jsx)(se,{children:(0,D.jsx)(`ul`,{className:`flex flex-col gap-1 text-[13px]`,children:e.map((e,t)=>(0,D.jsx)(`li`,{children:e},`${e}-${t}`))})}),(0,D.jsx)(C,{icon:(0,D.jsx)(u,{}),label:`Add a task`,size:`sm`,withinPortal:!1,affixClassName:`absolute`,offset:12,onClick:()=>t(e=>[...e,`New task ${e.length+1}`])})]})}var k=e({FloatButtonExtended:()=>A});function A(){return(0,D.jsxs)(`div`,{className:`relative h-40 w-full max-w-md rounded-md border border-dashed border-border bg-muted/30 p-3 text-[13px] text-muted-foreground`,children:[`Inbox`,(0,D.jsx)(C,{icon:(0,D.jsx)(l,{}),label:`Compose`,description:`Compose`,withinPortal:!1,affixClassName:`absolute`,offset:16})]})}var j=e({FloatButtonLinkAndBadge:()=>M});function M(){return(0,D.jsxs)(`div`,{className:`relative h-40 w-full max-w-md rounded-md border border-dashed border-border bg-muted/30`,children:[(0,D.jsx)(C,{icon:(0,D.jsx)(a,{}),label:`Help centre`,href:`#float-button-link-and-badge`,variant:`outline`,position:`bottom-start`,withinPortal:!1,affixClassName:`absolute`,offset:16}),(0,D.jsx)(C,{icon:(0,D.jsx)(n,{}),label:`Notifications`,badge:3,badgeLabel:`3 unread`,withinPortal:!1,affixClassName:`absolute`,offset:16})]})}var N=e({FloatButtonSizesAndShapes:()=>F}),P=[`sm`,`default`,`lg`];function F(){return(0,D.jsx)(`div`,{className:`grid w-full max-w-xl grid-cols-3 gap-3`,children:P.flatMap(e=>[`circle`,`square`].map(t=>(0,D.jsxs)(`div`,{className:`relative h-28 rounded-md border border-dashed border-border bg-muted/30`,children:[(0,D.jsxs)(`span`,{className:`absolute start-2 top-2 text-[11px] text-muted-foreground`,children:[e,` · `,t]}),(0,D.jsx)(C,{icon:(0,D.jsx)(u,{}),label:`New item (${e}, ${t})`,size:e,shape:t,variant:t===`square`?`outline`:`default`,withinPortal:!1,affixClassName:`absolute`,offset:12})]},`${e}-${t}`)))})}var ce=e({FloatButtonSpeedDialBottomNav:()=>R}),I=[{id:`home`,href:`#speed-dial-home`,icon:(0,D.jsx)(s,{}),label:`Home`},{id:`search`,href:`#speed-dial-search`,icon:(0,D.jsx)(f,{}),label:`Search`},{id:`profile`,href:`#speed-dial-profile`,icon:(0,D.jsx)(h,{}),label:`Profile`}],L=73;function R(){return(0,D.jsxs)(`div`,{className:`relative h-[26rem] w-full max-w-[22rem] overflow-hidden rounded-[1.5rem] border border-border bg-background`,children:[(0,D.jsx)(`p`,{className:`px-4 pt-5 text-[15px] font-semibold`,children:`Notes`}),(0,D.jsxs)(x,{children:[(0,D.jsx)(y,{icon:(0,D.jsx)(u,{}),label:`New note`,withinPortal:!1,affixClassName:`absolute`,offset:L}),(0,D.jsxs)(b,{children:[(0,D.jsx)(S,{icon:(0,D.jsx)(o,{}),label:`Text`}),(0,D.jsx)(S,{icon:(0,D.jsx)(c,{}),label:`Image`}),(0,D.jsx)(S,{icon:(0,D.jsx)(i,{}),label:`Photo`})]})]}),(0,D.jsx)(`div`,{className:`absolute inset-x-0 bottom-0`,children:(0,D.jsx)(w,{items:I,location:`#speed-dial-home`})})]})}var z=e({FloatButtonSpeedDialLabels:()=>B});function B(){return(0,D.jsx)(`div`,{className:`relative h-72 w-full max-w-md rounded-md border border-dashed border-border bg-muted/30`,children:(0,D.jsxs)(x,{children:[(0,D.jsx)(y,{icon:(0,D.jsx)(u,{}),label:`Add to note`,withinPortal:!1,affixClassName:`absolute`,offset:16}),(0,D.jsxs)(b,{children:[(0,D.jsx)(S,{icon:(0,D.jsx)(o,{}),label:`Text`,showLabel:!0}),(0,D.jsx)(S,{icon:(0,D.jsx)(c,{}),label:`Image`,showLabel:!0}),(0,D.jsx)(S,{icon:(0,D.jsx)(i,{}),label:`Photo`,showLabel:!0})]})]})})}var V=e({FloatButtonSpeedDialStart:()=>H});function H(){return(0,D.jsx)(`div`,{className:`relative h-40 w-full max-w-md rounded-md border border-dashed border-border bg-muted/30`,children:(0,D.jsxs)(x,{children:[(0,D.jsx)(y,{icon:(0,D.jsx)(l,{}),openIcon:(0,D.jsx)(ie,{}),label:`Formatting`,variant:`outline`,withinPortal:!1,affixClassName:`absolute`,offset:16}),(0,D.jsxs)(b,{direction:`start`,children:[(0,D.jsx)(S,{icon:(0,D.jsx)(r,{}),label:`Bold`}),(0,D.jsx)(S,{icon:(0,D.jsx)(ee,{}),label:`Italic`}),(0,D.jsx)(S,{icon:(0,D.jsx)(m,{}),label:`Underline`})]})]})})}var U=e({FloatButtonSpeedDial:()=>G}),W=[{label:`Copy`,icon:(0,D.jsx)(ne,{})},{label:`Print`,icon:(0,D.jsx)(d,{})},{label:`Share`,icon:(0,D.jsx)(p,{})}];function G(){let[e,t]=(0,E.useState)(`none`);return(0,D.jsxs)(`div`,{className:`relative h-72 w-full max-w-md rounded-md border border-dashed border-border bg-muted/30 p-3 text-[13px] text-muted-foreground`,children:[`Last action: `,(0,D.jsx)(`span`,{"data-demo-value":`speed-dial`,children:e}),(0,D.jsxs)(x,{children:[(0,D.jsx)(y,{icon:(0,D.jsx)(u,{}),label:`Document actions`,withinPortal:!1,affixClassName:`absolute`,offset:16}),(0,D.jsx)(b,{children:W.map(e=>(0,D.jsx)(S,{icon:e.icon,label:e.label,onClick:()=>t(e.label)},e.label))})]})]})}var K=`import { PlusIcon } from "lucide-react"
import { useState } from "react"
import { Badge } from "@kitora/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@kitora/ui/card"
import { FloatButton } from "@kitora/ui/float-button"

// A task list in a Card with a FloatButton in its corner that adds a task; a Badge counts them.
export function FloatButtonComposeTasks() {
  const [tasks, setTasks] = useState(["Review the pull request", "Write the release notes"])
  return (
    <Card className="relative w-full max-w-sm pb-16">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Tasks <Badge variant="secondary">{tasks.length}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-1 text-[13px]">
          {tasks.map((task, index) => (
            <li key={\`\${task}-\${index}\`}>{task}</li>
          ))}
        </ul>
      </CardContent>
      <FloatButton icon={<PlusIcon />} label="Add a task" size="sm" withinPortal={false} affixClassName="absolute" offset={12} onClick={() => setTasks((current) => [...current, \`New task \${current.length + 1}\`])} />
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>g(()=>import(`./compose-Bn1inoXn.js`),[]));var q=`import { PencilIcon } from "lucide-react"
import { FloatButton } from "@kitora/ui/float-button"

// \`description\` makes an extended button: icon plus text, named by the text (so what a speech user says is what they see).
export function FloatButtonExtended() {
  return (
    <div className="relative h-40 w-full max-w-md rounded-md border border-dashed border-border bg-muted/30 p-3 text-[13px] text-muted-foreground">
      Inbox
      <FloatButton icon={<PencilIcon />} label="Compose" description="Compose" withinPortal={false} affixClassName="absolute" offset={16} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>g(()=>import(`./extended-f1rmgUZ4.js`),[]));var J=`import { BellIcon, HelpCircleIcon } from "lucide-react"
import { FloatButton } from "@kitora/ui/float-button"

// \`href\` draws it as a link; \`badge\` puts a count (or \`true\`, a dot) on its corner, and \`badgeLabel\` is what a screen reader hears.
export function FloatButtonLinkAndBadge() {
  return (
    <div className="relative h-40 w-full max-w-md rounded-md border border-dashed border-border bg-muted/30">
      <FloatButton icon={<HelpCircleIcon />} label="Help centre" href="#float-button-link-and-badge" variant="outline" position="bottom-start" withinPortal={false} affixClassName="absolute" offset={16} />
      <FloatButton icon={<BellIcon />} label="Notifications" badge={3} badgeLabel="3 unread" withinPortal={false} affixClassName="absolute" offset={16} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>g(()=>import(`./link-and-badge-Be7NlJ9c.js`),[]));var Y=`import { PlusIcon } from "lucide-react"
import { FloatButton } from "@kitora/ui/float-button"

const SIZES = ["sm", "default", "lg"] as const

// Each button sits in its own small "screen" (a positioned box, \`withinPortal={false}\` with an absolute Affix) so the page shows
// all of them at once; in an app a FloatButton is fixed to the viewport corner.
export function FloatButtonSizesAndShapes() {
  return (
    <div className="grid w-full max-w-xl grid-cols-3 gap-3">
      {SIZES.flatMap((size) =>
        (["circle", "square"] as const).map((shape) => (
          <div key={\`\${size}-\${shape}\`} className="relative h-28 rounded-md border border-dashed border-border bg-muted/30">
            <span className="absolute start-2 top-2 text-[11px] text-muted-foreground">
              {size} · {shape}
            </span>
            <FloatButton icon={<PlusIcon />} label={\`New item (\${size}, \${shape})\`} size={size} shape={shape} variant={shape === "square" ? "outline" : "default"} withinPortal={false} affixClassName="absolute" offset={12} />
          </div>
        )),
      )}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>g(()=>import(`./sizes-and-shapes-CWNxDKUT.js`),[]));var X=`import { CameraIcon, FileTextIcon, HomeIcon, ImageIcon, PlusIcon, SearchIcon, UserIcon } from "lucide-react"
import { ShellBottomNav, type ShellBottomNavItem } from "@kitora/shell"
import { SpeedDial, SpeedDialAction, SpeedDialContent, SpeedDialTrigger } from "@kitora/ui/float-button"

const TABS: readonly ShellBottomNavItem[] = [
  { id: "home", href: "#speed-dial-home", icon: <HomeIcon />, label: "Home" },
  { id: "search", href: "#speed-dial-search", icon: <SearchIcon />, label: "Search" },
  { id: "profile", href: "#speed-dial-profile", icon: <UserIcon />, label: "Profile" },
]

/** The bottom nav is 57px tall; the dial's trigger keeps its usual 16px gap above it. */
const ABOVE_BOTTOM_NAV = 57 + 16

// On a phone with a bottom nav the dial's \`offset\` lifts it above the bar, so neither covers the other; the actions open upward from it.
export function FloatButtonSpeedDialBottomNav() {
  return (
    <div className="relative h-[26rem] w-full max-w-[22rem] overflow-hidden rounded-[1.5rem] border border-border bg-background">
      <p className="px-4 pt-5 text-[15px] font-semibold">Notes</p>
      <SpeedDial>
        <SpeedDialTrigger icon={<PlusIcon />} label="New note" withinPortal={false} affixClassName="absolute" offset={ABOVE_BOTTOM_NAV} />
        <SpeedDialContent>
          <SpeedDialAction icon={<FileTextIcon />} label="Text" />
          <SpeedDialAction icon={<ImageIcon />} label="Image" />
          <SpeedDialAction icon={<CameraIcon />} label="Photo" />
        </SpeedDialContent>
      </SpeedDial>
      <div className="absolute inset-x-0 bottom-0">
        <ShellBottomNav items={TABS} location="#speed-dial-home" />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>g(()=>import(`./speed-dial-bottom-nav-BsM8eI8z.js`),[]));var Z=`import { CameraIcon, FileTextIcon, ImageIcon, PlusIcon } from "lucide-react"
import { SpeedDial, SpeedDialAction, SpeedDialContent, SpeedDialTrigger } from "@kitora/ui/float-button"

// \`showLabel\` draws each action's label beside it (MUI's tooltipOpen). Without it the label shows on touch screens, which have no hover,
// and is read by screen readers everywhere.
export function FloatButtonSpeedDialLabels() {
  return (
    <div className="relative h-72 w-full max-w-md rounded-md border border-dashed border-border bg-muted/30">
      <SpeedDial>
        <SpeedDialTrigger icon={<PlusIcon />} label="Add to note" withinPortal={false} affixClassName="absolute" offset={16} />
        <SpeedDialContent>
          <SpeedDialAction icon={<FileTextIcon />} label="Text" showLabel />
          <SpeedDialAction icon={<ImageIcon />} label="Image" showLabel />
          <SpeedDialAction icon={<CameraIcon />} label="Photo" showLabel />
        </SpeedDialContent>
      </SpeedDial>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>g(()=>import(`./speed-dial-labels-D3t1-syQ.js`),[]));var Q=`import { BoldIcon, ItalicIcon, PencilIcon, UnderlineIcon, XIcon } from "lucide-react"
import { SpeedDial, SpeedDialAction, SpeedDialContent, SpeedDialTrigger } from "@kitora/ui/float-button"

// \`direction="start"\` runs the actions toward the inline start (left here, right in right-to-left text); the inline-start arrow walks
// them. \`openIcon\` replaces the icon while the dial is open.
export function FloatButtonSpeedDialStart() {
  return (
    <div className="relative h-40 w-full max-w-md rounded-md border border-dashed border-border bg-muted/30">
      <SpeedDial>
        <SpeedDialTrigger icon={<PencilIcon />} openIcon={<XIcon />} label="Formatting" variant="outline" withinPortal={false} affixClassName="absolute" offset={16} />
        <SpeedDialContent direction="start">
          <SpeedDialAction icon={<BoldIcon />} label="Bold" />
          <SpeedDialAction icon={<ItalicIcon />} label="Italic" />
          <SpeedDialAction icon={<UnderlineIcon />} label="Underline" />
        </SpeedDialContent>
      </SpeedDial>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>g(()=>import(`./speed-dial-start-BN-CGXLu.js`),[]));var $=`import { CopyIcon, PlusIcon, PrinterIcon, ShareIcon } from "lucide-react"
import { useState } from "react"
import { SpeedDial, SpeedDialAction, SpeedDialContent, SpeedDialTrigger } from "@kitora/ui/float-button"

const ACTIONS = [
  { label: "Copy", icon: <CopyIcon /> },
  { label: "Print", icon: <PrinterIcon /> },
  { label: "Share", icon: <ShareIcon /> },
]

// The dial opens upward from the trigger on a press (Enter, Space or ↑ from the keyboard, with focus on the first action); ↑ and ↓
// walk the actions, Escape closes it and focus returns to the trigger. The + turns into a × (not under reduced motion).
export function FloatButtonSpeedDial() {
  const [last, setLast] = useState("none")
  return (
    <div className="relative h-72 w-full max-w-md rounded-md border border-dashed border-border bg-muted/30 p-3 text-[13px] text-muted-foreground">
      Last action: <span data-demo-value="speed-dial">{last}</span>
      <SpeedDial>
        <SpeedDialTrigger icon={<PlusIcon />} label="Document actions" withinPortal={false} affixClassName="absolute" offset={16} />
        <SpeedDialContent>
          {ACTIONS.map((action) => (
            <SpeedDialAction key={action.label} icon={action.icon} label={action.label} onClick={() => setLast(action.label)} />
          ))}
        </SpeedDialContent>
      </SpeedDial>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>g(()=>import(`./speed-dial-DKo6sgHz.js`),[]));var le={"./demos/float-button/compose.tsx":T,"./demos/float-button/extended.tsx":k,"./demos/float-button/link-and-badge.tsx":j,"./demos/float-button/sizes-and-shapes.tsx":N,"./demos/float-button/speed-dial-bottom-nav.tsx":ce,"./demos/float-button/speed-dial-labels.tsx":z,"./demos/float-button/speed-dial-start.tsx":V,"./demos/float-button/speed-dial.tsx":U},ue={"./demos/float-button/compose.tsx":K,"./demos/float-button/extended.tsx":q,"./demos/float-button/link-and-badge.tsx":J,"./demos/float-button/sizes-and-shapes.tsx":Y,"./demos/float-button/speed-dial-bottom-nav.tsx":X,"./demos/float-button/speed-dial-labels.tsx":Z,"./demos/float-button/speed-dial-start.tsx":Q,"./demos/float-button/speed-dial.tsx":$};export{le as modules,ue as sources};