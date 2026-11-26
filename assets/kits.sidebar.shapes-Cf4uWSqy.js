import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./bell-CKqxJ4Kf.js";import{s as n}from"./kit-docs-DpYhPoxM.js";import{t as r}from"./house-CA-hDJt5.js";import{t as i}from"./inbox-Bv6dlLdK.js";import{t as a}from"./list-todo-AZktHC16.js";import{t as ee}from"./lock-1pgDxLz9.js";import{t as o}from"./square-check-big-peU0HoXg.js";import{t as te}from"./users-ZX8x1RHA.js";import{t as s}from"./zap-CddFqPAs.js";import{Bc as ne,Cc as c,Ic as re}from"./index-q72zUtm9.js";import{i as l,n as u,o as d}from"./context-cfON_OKy.js";import{l as f}from"./match-P3PTXEG7.js";import{i as p,o as m,r as h}from"./sidebar-BdF__I6I.js";import{c as g,o as _}from"./parts-Dc9PvGaJ.js";import"./kit-gallery-Atvibnty.js";import{t as v}from"./example-B8EaWveR.js";import{t as y}from"./-kits.sidebar.shared-CSA81ZJQ.js";var b=e(ne(),1),x=re(),S={check:o,home:r,inbox:i,list:a,zap:s},C=[{id:`m-top`,label:``,items:[{id:`m-home`,label:`Home`,href:`/m/home`,icon:{name:`home`}},{id:`m-inbox`,label:`Inbox`,href:`/m/inbox`,icon:{name:`inbox`},badge:{count:4}},{id:`m-mine`,label:`My issues`,href:`/m/mine`,icon:{name:`check`}}]},{id:`m-team`,label:`Team`,items:[{id:`m-eng`,label:`Engineering`,icon:{initials:`E`,color:`#7c3aed`},children:[{id:`m-backlog`,label:`Backlog`,href:`/m/backlog`,icon:{name:`list`}},{id:`m-active`,label:`Active`,href:`/m/active`,icon:{name:`zap`},badge:{mentions:1}}]},{id:`m-design`,label:`Design`,href:`/m/design`,icon:{initials:`D`,color:`#c2410c`}}]}],w={"--sb-accent":`#6555d9`};function T(e=`/m/backlog`){let[t,n]=(0,b.useState)(e);return{location:t,navigate:(e,t)=>{e.external||!e.href||(t.preventDefault(),n(e.href))}}}function E({title:e,navigate:t}){return(0,x.jsx)(h,{header:d()===`rail`?(0,x.jsx)(m,{}):(0,x.jsxs)(`div`,{className:`flex h-8 items-center gap-1 px-1`,children:[(0,x.jsx)(`span`,{className:`min-w-0 flex-1 truncate text-[13px] font-semibold`,children:e}),(0,x.jsx)(m,{})]}),children:(0,x.jsx)(p,{nav:C,onNavigate:t})})}function D({location:e,children:t}){let{mode:n}=l(),r=C.flatMap(e=>e.items).flatMap(e=>[e,...e.children??[]]).find(t=>t.href===e);return(0,x.jsxs)(`div`,{className:`flex h-full min-h-0 flex-col bg-background text-[13px]`,children:[(0,x.jsxs)(`div`,{className:`flex h-10 shrink-0 items-center gap-2 border-b px-3`,children:[n===`panel`?null:(0,x.jsx)(m,{}),(0,x.jsx)(`span`,{className:`font-medium`,children:r?.label??`Home`})]}),(0,x.jsx)(`div`,{className:`min-h-0 flex-1 overflow-hidden p-3 text-muted-foreground`,children:t})]})}function ie(){let{location:e,navigate:t}=T();return(0,x.jsxs)(`div`,{className:`relative h-full overflow-hidden`,style:{...w},children:[(0,x.jsx)(_,{}),(0,x.jsx)(u,{icons:S,location:e,label:`Floating navigation`,defaultState:{width:200,expanded:[`m-eng`]},children:(0,x.jsx)(g,{shape:`floating`,minWidth:180,sidebar:(0,x.jsx)(E,{title:`Floating`,navigate:t}),children:(0,x.jsx)(D,{location:e,children:`shape="floating"`})})})]})}function O(){let{location:e,navigate:t}=T();return(0,x.jsxs)(`div`,{className:`relative h-full overflow-hidden`,style:{...w},children:[(0,x.jsx)(_,{}),(0,x.jsx)(u,{icons:S,location:e,label:`Inset navigation`,defaultState:{width:200,expanded:[`m-eng`]},children:(0,x.jsx)(g,{shape:`inset`,minWidth:180,sidebar:(0,x.jsx)(E,{title:`Inset`,navigate:t}),children:(0,x.jsx)(D,{location:e,children:`shape="inset"`})})})]})}function k(){let{location:e,navigate:t}=T();return(0,x.jsxs)(`div`,{"data-density":`comfortable`,className:`relative h-full overflow-hidden`,style:{...w},children:[(0,x.jsx)(_,{}),(0,x.jsx)(u,{icons:S,location:e,label:`Comfortable navigation`,defaultState:{width:200,expanded:[`m-eng`]},children:(0,x.jsx)(g,{minWidth:180,sidebar:(0,x.jsx)(E,{title:`Comfortable`,navigate:t}),children:(0,x.jsx)(D,{location:e,children:`data-density="comfortable": 32 px rows.`})})})]})}var A=`import { CheckSquare, Home, Inbox, ListTodo, Zap } from "lucide-react"
import { useState, type ReactNode } from "react"
import { Sidebar, SidebarLayout, SidebarNav, SidebarProvider, SidebarStyles, SidebarTrigger, useSidebar, useSidebarMode, type NavItem, type NavSection, type SidebarIconComponent } from "@kitora/sidebar"

// \`{ name }\` icons in the nav resolve through this registry.
const ICONS: Readonly<Record<string, SidebarIconComponent>> = { check: CheckSquare, home: Home, inbox: Inbox, list: ListTodo, zap: Zap }

const NAV: readonly NavSection[] = [
  {
    id: "m-top",
    label: "",
    items: [
      { id: "m-home", label: "Home", href: "/m/home", icon: { name: "home" } },
      { id: "m-inbox", label: "Inbox", href: "/m/inbox", icon: { name: "inbox" }, badge: { count: 4 } },
      { id: "m-mine", label: "My issues", href: "/m/mine", icon: { name: "check" } },
    ],
  },
  {
    id: "m-team",
    label: "Team",
    items: [
      {
        id: "m-eng",
        label: "Engineering",
        icon: { initials: "E", color: "#7c3aed" },
        children: [
          { id: "m-backlog", label: "Backlog", href: "/m/backlog", icon: { name: "list" } },
          { id: "m-active", label: "Active", href: "/m/active", icon: { name: "zap" }, badge: { mentions: 1 } },
        ],
      },
      { id: "m-design", label: "Design", href: "/m/design", icon: { initials: "D", color: "#c2410c" } },
    ],
  },
]

const THEME: Readonly<Record<\`--sb-\${string}\`, string>> = { "--sb-accent": "#6555d9" }

/** The current path, kept in the page: in an app, pass the router's pathname as \`location\` and let the links navigate. */
function useInPageLocation(initial = "/m/backlog") {
  const [location, setLocation] = useState(initial)
  const navigate = (item: NavItem, event: { preventDefault(): void }) => {
    if (item.external || !item.href) return
    event.preventDefault()
    setLocation(item.href)
  }
  return { location, navigate }
}

/** The panel: a title and the toggle (the toggle alone in the icon rail), then the nav. */
function MiniSidebar({ title, navigate }: { readonly title: string; readonly navigate: (item: NavItem, event: { preventDefault(): void }) => void }) {
  const mode = useSidebarMode()
  const header =
    mode === "rail" ? (
      <SidebarTrigger />
    ) : (
      <div className="flex h-8 items-center gap-1 px-1">
        <span className="min-w-0 flex-1 truncate text-[13px] font-semibold">{title}</span>
        <SidebarTrigger />
      </div>
    )
  return (
    <Sidebar header={header}>
      <SidebarNav nav={NAV} onNavigate={navigate} />
    </Sidebar>
  )
}

/** The content: its own toggle while the panel is not showing in full, the current page's name, then \`children\`. */
function Page({ location, children }: { readonly location: string; readonly children: ReactNode }) {
  const { mode } = useSidebar()
  const current = NAV.flatMap((s) => s.items).flatMap((i) => [i, ...(i.children ?? [])]).find((i) => i.href === location)
  return (
    <div className="flex h-full min-h-0 flex-col bg-background text-[13px]">
      <div className="flex h-10 shrink-0 items-center gap-2 border-b px-3">
        {mode === "panel" ? null : <SidebarTrigger />}
        <span className="font-medium">{current?.label ?? "Home"}</span>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden p-3 text-muted-foreground">{children}</div>
    </div>
  )
}

// shape: "sidebar" (flush, the default), "floating" (a card inset from the edges) or "inset" (the content is the card).

/** A floating card with a shadow. */
export function FloatingSidebar() {
  const { location, navigate } = useInPageLocation()
  return (
    <div className="relative h-full overflow-hidden" style={{ ...THEME }}>
      <SidebarStyles />
      <SidebarProvider icons={ICONS} location={location} label="Floating navigation" defaultState={{ width: 200, expanded: ["m-eng"] }}>
        <SidebarLayout shape="floating" minWidth={180} sidebar={<MiniSidebar title="Floating" navigate={navigate} />}>
          <Page location={location}>shape="floating"</Page>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}

/** The content as a raised card on the sidebar's background. */
export function InsetSidebar() {
  const { location, navigate } = useInPageLocation()
  return (
    <div className="relative h-full overflow-hidden" style={{ ...THEME }}>
      <SidebarStyles />
      <SidebarProvider icons={ICONS} location={location} label="Inset navigation" defaultState={{ width: 200, expanded: ["m-eng"] }}>
        <SidebarLayout shape="inset" minWidth={180} sidebar={<MiniSidebar title="Inset" navigate={navigate} />}>
          <Page location={location}>shape="inset"</Page>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}

/** data-density on any ancestor picks the row height: compact (28 px, the default), comfortable (32 px) or touch (40 px). */
export function ComfortableSidebar() {
  const { location, navigate } = useInPageLocation()
  return (
    <div data-density="comfortable" className="relative h-full overflow-hidden" style={{ ...THEME }}>
      <SidebarStyles />
      <SidebarProvider icons={ICONS} location={location} label="Comfortable navigation" defaultState={{ width: 200, expanded: ["m-eng"] }}>
        <SidebarLayout minWidth={180} sidebar={<MiniSidebar title="Comfortable" navigate={navigate} />}>
          <Page location={location}>data-density="comfortable": 32 px rows.</Page>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>c(()=>import(`./shapes-floating-Bu3b7CRA.js`),[]));var j={check:o,home:r,inbox:i,list:a,zap:s},M=[{id:`m-top`,label:``,items:[{id:`m-home`,label:`Home`,href:`/m/home`,icon:{name:`home`}},{id:`m-inbox`,label:`Inbox`,href:`/m/inbox`,icon:{name:`inbox`},badge:{count:4}},{id:`m-mine`,label:`My issues`,href:`/m/mine`,icon:{name:`check`}}]},{id:`m-team`,label:`Team`,items:[{id:`m-eng`,label:`Engineering`,icon:{initials:`E`,color:`#7c3aed`},children:[{id:`m-backlog`,label:`Backlog`,href:`/m/backlog`,icon:{name:`list`}},{id:`m-active`,label:`Active`,href:`/m/active`,icon:{name:`zap`},badge:{mentions:1}}]},{id:`m-design`,label:`Design`,href:`/m/design`,icon:{initials:`D`,color:`#c2410c`}}]}],N={"--sb-accent":`#6555d9`};function P(e=`/m/backlog`){let[t,n]=(0,b.useState)(e);return{location:t,navigate:(e,t)=>{e.external||!e.href||(t.preventDefault(),n(e.href))}}}function F({title:e,navigate:t}){return(0,x.jsx)(h,{header:d()===`rail`?(0,x.jsx)(m,{}):(0,x.jsxs)(`div`,{className:`flex h-8 items-center gap-1 px-1`,children:[(0,x.jsx)(`span`,{className:`min-w-0 flex-1 truncate text-[13px] font-semibold`,children:e}),(0,x.jsx)(m,{})]}),children:(0,x.jsx)(p,{nav:M,onNavigate:t})})}function I({location:e,children:t}){let{mode:n}=l(),r=M.flatMap(e=>e.items).flatMap(e=>[e,...e.children??[]]).find(t=>t.href===e);return(0,x.jsxs)(`div`,{className:`flex h-full min-h-0 flex-col bg-background text-[13px]`,children:[(0,x.jsxs)(`div`,{className:`flex h-10 shrink-0 items-center gap-2 border-b px-3`,children:[n===`panel`?null:(0,x.jsx)(m,{}),(0,x.jsx)(`span`,{className:`font-medium`,children:r?.label??`Home`})]}),(0,x.jsx)(`div`,{className:`min-h-0 flex-1 overflow-hidden p-3 text-muted-foreground`,children:t})]})}function L(){let{location:e,navigate:t}=P();return(0,x.jsxs)(`div`,{className:`relative h-full overflow-hidden`,style:{...N},children:[(0,x.jsx)(_,{}),(0,x.jsx)(u,{icons:j,location:e,label:`Mini rail navigation`,collapse:`rail-labels`,defaultState:{collapsed:!0,expanded:[`m-eng`]},children:(0,x.jsx)(g,{minWidth:180,sidebar:(0,x.jsx)(F,{title:`Mini rail`,navigate:t}),children:(0,x.jsx)(I,{location:e,children:`Collapsed to the 72 px rail with labels; the toggle expands it.`})})})]})}function R(){let{location:e,navigate:t}=P();return(0,x.jsxs)(`div`,{className:`relative h-full overflow-hidden`,style:{...N},children:[(0,x.jsx)(_,{}),(0,x.jsx)(u,{icons:j,location:e,label:`Overlay navigation`,defaultState:{collapsed:!0,width:200,expanded:[`m-eng`]},children:(0,x.jsx)(g,{presentation:`overlay`,minWidth:180,sidebar:(0,x.jsx)(F,{title:`Overlay`,navigate:t}),children:(0,x.jsx)(I,{location:e,children:`Open it with the toggle: the panel covers the content instead of pushing it.`})})})]})}function z(){let{location:e,navigate:t}=P();return(0,x.jsxs)(`div`,{className:`relative h-full overflow-hidden`,style:{...N},children:[(0,x.jsx)(_,{}),(0,x.jsx)(u,{icons:j,location:e,label:`Peek navigation`,collapse:`offcanvas`,defaultState:{collapsed:!0,width:200,expanded:[`m-eng`]},children:(0,x.jsx)(g,{peek:!0,minWidth:180,sidebar:(0,x.jsx)(F,{title:`Peek`,navigate:t}),children:(0,x.jsx)(I,{location:e,children:`Hidden. Rest the pointer on the left edge of this frame to peek.`})})})]})}var B=`import { CheckSquare, Home, Inbox, ListTodo, Zap } from "lucide-react"
import { useState, type ReactNode } from "react"
import { Sidebar, SidebarLayout, SidebarNav, SidebarProvider, SidebarStyles, SidebarTrigger, useSidebar, useSidebarMode, type NavItem, type NavSection, type SidebarIconComponent } from "@kitora/sidebar"

// \`{ name }\` icons in the nav resolve through this registry.
const ICONS: Readonly<Record<string, SidebarIconComponent>> = { check: CheckSquare, home: Home, inbox: Inbox, list: ListTodo, zap: Zap }

const NAV: readonly NavSection[] = [
  {
    id: "m-top",
    label: "",
    items: [
      { id: "m-home", label: "Home", href: "/m/home", icon: { name: "home" } },
      { id: "m-inbox", label: "Inbox", href: "/m/inbox", icon: { name: "inbox" }, badge: { count: 4 } },
      { id: "m-mine", label: "My issues", href: "/m/mine", icon: { name: "check" } },
    ],
  },
  {
    id: "m-team",
    label: "Team",
    items: [
      {
        id: "m-eng",
        label: "Engineering",
        icon: { initials: "E", color: "#7c3aed" },
        children: [
          { id: "m-backlog", label: "Backlog", href: "/m/backlog", icon: { name: "list" } },
          { id: "m-active", label: "Active", href: "/m/active", icon: { name: "zap" }, badge: { mentions: 1 } },
        ],
      },
      { id: "m-design", label: "Design", href: "/m/design", icon: { initials: "D", color: "#c2410c" } },
    ],
  },
]

const THEME: Readonly<Record<\`--sb-\${string}\`, string>> = { "--sb-accent": "#6555d9" }

/** The current path, kept in the page: in an app, pass the router's pathname as \`location\` and let the links navigate. */
function useInPageLocation(initial = "/m/backlog") {
  const [location, setLocation] = useState(initial)
  const navigate = (item: NavItem, event: { preventDefault(): void }) => {
    if (item.external || !item.href) return
    event.preventDefault()
    setLocation(item.href)
  }
  return { location, navigate }
}

/** The panel: a title and the toggle (the toggle alone in the icon rail), then the nav. */
function MiniSidebar({ title, navigate }: { readonly title: string; readonly navigate: (item: NavItem, event: { preventDefault(): void }) => void }) {
  const mode = useSidebarMode()
  const header =
    mode === "rail" ? (
      <SidebarTrigger />
    ) : (
      <div className="flex h-8 items-center gap-1 px-1">
        <span className="min-w-0 flex-1 truncate text-[13px] font-semibold">{title}</span>
        <SidebarTrigger />
      </div>
    )
  return (
    <Sidebar header={header}>
      <SidebarNav nav={NAV} onNavigate={navigate} />
    </Sidebar>
  )
}

/** The content: its own toggle while the panel is not showing in full, the current page's name, then \`children\`. */
function Page({ location, children }: { readonly location: string; readonly children: ReactNode }) {
  const { mode } = useSidebar()
  const current = NAV.flatMap((s) => s.items).flatMap((i) => [i, ...(i.children ?? [])]).find((i) => i.href === location)
  return (
    <div className="flex h-full min-h-0 flex-col bg-background text-[13px]">
      <div className="flex h-10 shrink-0 items-center gap-2 border-b px-3">
        {mode === "panel" ? null : <SidebarTrigger />}
        <span className="font-medium">{current?.label ?? "Home"}</span>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden p-3 text-muted-foreground">{children}</div>
    </div>
  )
}

/** collapse="rail-labels": the mini rail with tiny labels under the icons (Material's navigation rail); the toggle expands it. */
export function RailLabelsSidebar() {
  const { location, navigate } = useInPageLocation()
  return (
    <div className="relative h-full overflow-hidden" style={{ ...THEME }}>
      <SidebarStyles />
      <SidebarProvider icons={ICONS} location={location} label="Mini rail navigation" collapse="rail-labels" defaultState={{ collapsed: true, expanded: ["m-eng"] }}>
        <SidebarLayout minWidth={180} sidebar={<MiniSidebar title="Mini rail" navigate={navigate} />}>
          <Page location={location}>Collapsed to the 72 px rail with labels; the toggle expands it.</Page>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}

/** presentation="overlay": the panel opens over the content with a scrim; Escape or a click outside closes it. */
export function OverlaySidebar() {
  const { location, navigate } = useInPageLocation()
  return (
    <div className="relative h-full overflow-hidden" style={{ ...THEME }}>
      <SidebarStyles />
      <SidebarProvider icons={ICONS} location={location} label="Overlay navigation" defaultState={{ collapsed: true, width: 200, expanded: ["m-eng"] }}>
        <SidebarLayout presentation="overlay" minWidth={180} sidebar={<MiniSidebar title="Overlay" navigate={navigate} />}>
          <Page location={location}>Open it with the toggle: the panel covers the content instead of pushing it.</Page>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}

/** peek: a sidebar hidden off canvas slides in while the pointer rests on its edge. */
export function PeekSidebar() {
  const { location, navigate } = useInPageLocation()
  return (
    <div className="relative h-full overflow-hidden" style={{ ...THEME }}>
      <SidebarStyles />
      <SidebarProvider icons={ICONS} location={location} label="Peek navigation" collapse="offcanvas" defaultState={{ collapsed: true, width: 200, expanded: ["m-eng"] }}>
        <SidebarLayout peek minWidth={180} sidebar={<MiniSidebar title="Peek" navigate={navigate} />}>
          <Page location={location}>Hidden. Rest the pointer on the left edge of this frame to peek.</Page>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>c(()=>import(`./shapes-modes-BKbWVQKN.js`),[]));var V={bell:t,check:o,home:r,inbox:i,list:a,lock:ee,users:te,zap:s},H=[{id:`m-top`,label:``,items:[{id:`m-home`,label:`Home`,href:`/m/home`,icon:{name:`home`}},{id:`m-inbox`,label:`Inbox`,href:`/m/inbox`,icon:{name:`inbox`},badge:{count:4}},{id:`m-mine`,label:`My issues`,href:`/m/mine`,icon:{name:`check`}}]},{id:`m-team`,label:`Team`,items:[{id:`m-eng`,label:`Engineering`,icon:{initials:`E`,color:`#7c3aed`},children:[{id:`m-backlog`,label:`Backlog`,href:`/m/backlog`,icon:{name:`list`}},{id:`m-active`,label:`Active`,href:`/m/active`,icon:{name:`zap`},badge:{mentions:1}}]},{id:`m-design`,label:`Design`,href:`/m/design`,icon:{initials:`D`,color:`#c2410c`}}]}],U={"--sb-accent":`#6555d9`};function W(e=`/m/backlog`){let[t,n]=(0,b.useState)(e);return{location:t,navigate:(e,t)=>{e.external||!e.href||(t.preventDefault(),n(e.href))}}}function ae({title:e,navigate:t}){return(0,x.jsx)(h,{header:d()===`rail`?(0,x.jsx)(m,{}):(0,x.jsxs)(`div`,{className:`flex h-8 items-center gap-1 px-1`,children:[(0,x.jsx)(`span`,{className:`min-w-0 flex-1 truncate text-[13px] font-semibold`,children:e}),(0,x.jsx)(m,{})]}),children:(0,x.jsx)(p,{nav:H,onNavigate:t})})}function G({location:e,children:t}){let{mode:n}=l(),r=H.flatMap(e=>e.items).flatMap(e=>[e,...e.children??[]]).find(t=>t.href===e);return(0,x.jsxs)(`div`,{className:`flex h-full min-h-0 flex-col bg-background text-[13px]`,children:[(0,x.jsxs)(`div`,{className:`flex h-10 shrink-0 items-center gap-2 border-b px-3`,children:[n===`panel`?null:(0,x.jsx)(m,{}),(0,x.jsx)(`span`,{className:`font-medium`,children:r?.label??`Home`})]}),(0,x.jsx)(`div`,{className:`min-h-0 flex-1 overflow-hidden p-3 text-muted-foreground`,children:t})]})}var oe=[{id:`set`,label:`Settings`,collapsible:!1,items:[{id:`set-profile`,label:`Profile`,href:`/set/profile`,icon:{name:`users`}},{id:`set-notify`,label:`Notifications`,href:`/set/notify`,icon:{name:`bell`}},{id:`set-security`,label:`Security`,href:`/set/security`,icon:{name:`lock`}}]}];function se(){let{location:e,navigate:t}=W(`/set/notify`);return(0,x.jsx)(`div`,{className:`h-full min-h-[170px] overflow-hidden rounded-md border`,"data-testid":`nested-settings`,children:(0,x.jsx)(u,{icons:V,location:e,label:`Settings`,collapse:`none`,defaultState:{width:160},children:(0,x.jsx)(g,{minWidth:140,contentRegion:null,sidebar:(0,x.jsx)(h,{children:(0,x.jsx)(p,{nav:oe,onNavigate:t})}),children:(0,x.jsx)(`div`,{className:`p-3 text-[12.5px] text-muted-foreground`,children:`A sidebar inside the page's content: its own provider, its own state.`})})})})}function ce(){let{location:e,navigate:t}=W();return(0,x.jsxs)(`div`,{className:`relative h-full overflow-hidden`,style:{...U},children:[(0,x.jsx)(_,{}),(0,x.jsx)(u,{icons:V,location:e,label:`App navigation`,defaultState:{width:200,expanded:[`m-eng`]},children:(0,x.jsx)(g,{minWidth:180,sidebar:(0,x.jsx)(ae,{title:`App`,navigate:t}),children:(0,x.jsx)(G,{location:e,children:(0,x.jsx)(se,{})})})})]})}function le(){let{location:e,navigate:t}=W(),{pinned:n,rest:r}=f(H.map((e,t)=>t===0?{...e,pinned:!0}:e));return(0,x.jsxs)(`div`,{className:`relative h-full overflow-hidden`,style:{...U},children:[(0,x.jsx)(_,{}),(0,x.jsx)(u,{icons:V,location:e,label:`Pinned navigation`,defaultState:{width:200,expanded:[`m-eng`]},children:(0,x.jsx)(g,{minWidth:180,sidebar:(0,x.jsx)(h,{header:(0,x.jsx)(m,{}),pinned:(0,x.jsx)(p,{nav:n,onNavigate:t,label:`Pinned`}),children:(0,x.jsx)(p,{nav:r,onNavigate:t})}),children:(0,x.jsx)(G,{location:e,children:`Home, Inbox and My issues are pinned above the scrolling body.`})})})]})}var K=`import { Bell, CheckSquare, Home, Inbox, ListTodo, Lock, Users, Zap } from "lucide-react"
import { useState, type ReactNode } from "react"
import { Sidebar, SidebarLayout, SidebarNav, SidebarProvider, SidebarStyles, SidebarTrigger, splitPinned, useSidebar, useSidebarMode, type NavItem, type NavSection, type SidebarIconComponent } from "@kitora/sidebar"

// \`{ name }\` icons in the nav resolve through this registry.
const ICONS: Readonly<Record<string, SidebarIconComponent>> = { bell: Bell, check: CheckSquare, home: Home, inbox: Inbox, list: ListTodo, lock: Lock, users: Users, zap: Zap }

const NAV: readonly NavSection[] = [
  {
    id: "m-top",
    label: "",
    items: [
      { id: "m-home", label: "Home", href: "/m/home", icon: { name: "home" } },
      { id: "m-inbox", label: "Inbox", href: "/m/inbox", icon: { name: "inbox" }, badge: { count: 4 } },
      { id: "m-mine", label: "My issues", href: "/m/mine", icon: { name: "check" } },
    ],
  },
  {
    id: "m-team",
    label: "Team",
    items: [
      {
        id: "m-eng",
        label: "Engineering",
        icon: { initials: "E", color: "#7c3aed" },
        children: [
          { id: "m-backlog", label: "Backlog", href: "/m/backlog", icon: { name: "list" } },
          { id: "m-active", label: "Active", href: "/m/active", icon: { name: "zap" }, badge: { mentions: 1 } },
        ],
      },
      { id: "m-design", label: "Design", href: "/m/design", icon: { initials: "D", color: "#c2410c" } },
    ],
  },
]

const THEME: Readonly<Record<\`--sb-\${string}\`, string>> = { "--sb-accent": "#6555d9" }

/** The current path, kept in the page: in an app, pass the router's pathname as \`location\` and let the links navigate. */
function useInPageLocation(initial = "/m/backlog") {
  const [location, setLocation] = useState(initial)
  const navigate = (item: NavItem, event: { preventDefault(): void }) => {
    if (item.external || !item.href) return
    event.preventDefault()
    setLocation(item.href)
  }
  return { location, navigate }
}

/** The panel: a title and the toggle (the toggle alone in the icon rail), then the nav. */
function MiniSidebar({ title, navigate }: { readonly title: string; readonly navigate: (item: NavItem, event: { preventDefault(): void }) => void }) {
  const mode = useSidebarMode()
  const header =
    mode === "rail" ? (
      <SidebarTrigger />
    ) : (
      <div className="flex h-8 items-center gap-1 px-1">
        <span className="min-w-0 flex-1 truncate text-[13px] font-semibold">{title}</span>
        <SidebarTrigger />
      </div>
    )
  return (
    <Sidebar header={header}>
      <SidebarNav nav={NAV} onNavigate={navigate} />
    </Sidebar>
  )
}

/** The content: its own toggle while the panel is not showing in full, the current page's name, then \`children\`. */
function Page({ location, children }: { readonly location: string; readonly children: ReactNode }) {
  const { mode } = useSidebar()
  const current = NAV.flatMap((s) => s.items).flatMap((i) => [i, ...(i.children ?? [])]).find((i) => i.href === location)
  return (
    <div className="flex h-full min-h-0 flex-col bg-background text-[13px]">
      <div className="flex h-10 shrink-0 items-center gap-2 border-b px-3">
        {mode === "panel" ? null : <SidebarTrigger />}
        <span className="font-medium">{current?.label ?? "Home"}</span>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden p-3 text-muted-foreground">{children}</div>
    </div>
  )
}

const SETTINGS_NAV: readonly NavSection[] = [
  {
    id: "set",
    label: "Settings",
    collapsible: false,
    items: [
      { id: "set-profile", label: "Profile", href: "/set/profile", icon: { name: "users" } },
      { id: "set-notify", label: "Notifications", href: "/set/notify", icon: { name: "bell" } },
      { id: "set-security", label: "Security", href: "/set/security", icon: { name: "lock" } },
    ],
  },
]

/** A settings page with its own sidebar: its own provider, so its own state. contentRegion={null} keeps it out of the page's landmarks. */
function SettingsPage() {
  const { location, navigate } = useInPageLocation("/set/notify")
  return (
    <div className="h-full min-h-[170px] overflow-hidden rounded-md border" data-testid="nested-settings">
      <SidebarProvider icons={ICONS} location={location} label="Settings" collapse="none" defaultState={{ width: 160 }}>
        <SidebarLayout
          minWidth={140}
          contentRegion={null}
          sidebar={
            <Sidebar>
              <SidebarNav nav={SETTINGS_NAV} onNavigate={navigate} />
            </Sidebar>
          }
        >
          <div className="p-3 text-[12.5px] text-muted-foreground">A sidebar inside the page's content: its own provider, its own state.</div>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}

/** The app's sidebar with a settings page, which has a sidebar of its own, in its content. */
export function NestedSidebar() {
  const { location, navigate } = useInPageLocation()
  return (
    <div className="relative h-full overflow-hidden" style={{ ...THEME }}>
      <SidebarStyles />
      <SidebarProvider icons={ICONS} location={location} label="App navigation" defaultState={{ width: 200, expanded: ["m-eng"] }}>
        <SidebarLayout minWidth={180} sidebar={<MiniSidebar title="App" navigate={navigate} />}>
          <Page location={location}>
            <SettingsPage />
          </Page>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}

/** Sections marked \`pinned\` sit in a sticky area under the header; everything else scrolls under it. */
export function PinnedSidebar() {
  const { location, navigate } = useInPageLocation()
  const { pinned, rest } = splitPinned(NAV.map((s, i) => (i === 0 ? { ...s, pinned: true } : s)))
  return (
    <div className="relative h-full overflow-hidden" style={{ ...THEME }}>
      <SidebarStyles />
      <SidebarProvider icons={ICONS} location={location} label="Pinned navigation" defaultState={{ width: 200, expanded: ["m-eng"] }}>
        <SidebarLayout
          minWidth={180}
          sidebar={
            <Sidebar header={<SidebarTrigger />} pinned={<SidebarNav nav={pinned} onNavigate={navigate} label="Pinned" />}>
              <SidebarNav nav={rest} onNavigate={navigate} />
            </Sidebar>
          }
        >
          <Page location={location}>Home, Inbox and My issues are pinned above the scrolling body.</Page>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>c(()=>import(`./shapes-nested-DBnZVvVf.js`),[]));var q={check:o,home:r,inbox:i,list:a,zap:s},J=[{id:`m-top`,label:``,items:[{id:`m-home`,label:`Home`,href:`/m/home`,icon:{name:`home`}},{id:`m-inbox`,label:`Inbox`,href:`/m/inbox`,icon:{name:`inbox`},badge:{count:4}},{id:`m-mine`,label:`My issues`,href:`/m/mine`,icon:{name:`check`}}]},{id:`m-team`,label:`Team`,items:[{id:`m-eng`,label:`Engineering`,icon:{initials:`E`,color:`#7c3aed`},children:[{id:`m-backlog`,label:`Backlog`,href:`/m/backlog`,icon:{name:`list`}},{id:`m-active`,label:`Active`,href:`/m/active`,icon:{name:`zap`},badge:{mentions:1}}]},{id:`m-design`,label:`Design`,href:`/m/design`,icon:{initials:`D`,color:`#c2410c`}}]}],Y={"--sb-accent":`#6555d9`};function X(e=`/m/backlog`){let[t,n]=(0,b.useState)(e);return{location:t,navigate:(e,t)=>{e.external||!e.href||(t.preventDefault(),n(e.href))}}}function Z({title:e,navigate:t}){return(0,x.jsx)(h,{header:d()===`rail`?(0,x.jsx)(m,{}):(0,x.jsxs)(`div`,{className:`flex h-8 items-center gap-1 px-1`,children:[(0,x.jsx)(`span`,{className:`min-w-0 flex-1 truncate text-[13px] font-semibold`,children:e}),(0,x.jsx)(m,{})]}),children:(0,x.jsx)(p,{nav:J,onNavigate:t})})}function Q({location:e,children:t}){let{mode:n}=l(),r=J.flatMap(e=>e.items).flatMap(e=>[e,...e.children??[]]).find(t=>t.href===e);return(0,x.jsxs)(`div`,{className:`flex h-full min-h-0 flex-col bg-background text-[13px]`,children:[(0,x.jsxs)(`div`,{className:`flex h-10 shrink-0 items-center gap-2 border-b px-3`,children:[n===`panel`?null:(0,x.jsx)(m,{}),(0,x.jsx)(`span`,{className:`font-medium`,children:r?.label??`Home`})]}),(0,x.jsx)(`div`,{className:`min-h-0 flex-1 overflow-hidden p-3 text-muted-foreground`,children:t})]})}function ue(){let{location:e,navigate:t}=X();return(0,x.jsxs)(`div`,{className:`relative h-full overflow-hidden`,style:{...Y},children:[(0,x.jsx)(_,{}),(0,x.jsx)(u,{icons:q,location:e,label:`Right side navigation`,side:`right`,defaultState:{width:200,expanded:[`m-eng`]},children:(0,x.jsx)(g,{minWidth:180,sidebar:(0,x.jsx)(Z,{title:`Right side`,navigate:t}),children:(0,x.jsx)(Q,{location:e,children:`side="right": drag the left edge of the panel to resize.`})})})]})}function de(){let{location:e,navigate:t}=X();return(0,x.jsxs)(`div`,{className:`relative h-full overflow-hidden`,style:{...Y},children:[(0,x.jsx)(_,{}),(0,x.jsx)(u,{icons:q,location:e,label:`Both sides navigation`,defaultState:{width:200,expanded:[`m-eng`]},children:(0,x.jsx)(g,{minWidth:180,aside:(0,x.jsx)(`div`,{className:`h-full w-full border-s bg-muted/40 p-3 text-[12.5px] text-muted-foreground`,children:`Inspector (a second panel on the other edge)`}),asideWidth:160,sidebar:(0,x.jsx)(Z,{title:`Both sides`,navigate:t}),children:(0,x.jsx)(Q,{location:e,children:`A nav on the left, an inspector on the right.`})})})]})}function fe(){let{location:e,navigate:t}=X();return(0,x.jsxs)(`div`,{className:`relative h-full overflow-hidden`,style:{...Y},children:[(0,x.jsx)(_,{}),(0,x.jsx)(u,{icons:q,location:e,label:`Top bar navigation`,defaultState:{width:200,expanded:[`m-eng`]},children:(0,x.jsx)(g,{minWidth:180,topBar:(0,x.jsx)(`div`,{className:`flex h-9 items-center border-b bg-muted/40 px-3 text-[12.5px] font-semibold`,children:`Acme · top bar`}),sidebar:(0,x.jsx)(Z,{title:`Top bar`,navigate:t}),children:(0,x.jsx)(Q,{location:e,children:`The sidebar sits under a bar that spans the page.`})})})]})}function pe(){let{location:e,navigate:t}=X();return(0,x.jsxs)(`div`,{dir:`rtl`,className:`relative h-full overflow-hidden`,style:{...Y},children:[(0,x.jsx)(_,{}),(0,x.jsx)(u,{icons:q,location:e,label:`RTL navigation`,defaultState:{width:200,expanded:[`m-eng`]},children:(0,x.jsx)(g,{minWidth:180,sidebar:(0,x.jsx)(Z,{title:`RTL`,navigate:t}),children:(0,x.jsx)(Q,{location:e,children:`dir="rtl": the sidebar sits on the right edge; Left opens a node, Right closes it.`})})})]})}var $=`import { CheckSquare, Home, Inbox, ListTodo, Zap } from "lucide-react"
import { useState, type ReactNode } from "react"
import { Sidebar, SidebarLayout, SidebarNav, SidebarProvider, SidebarStyles, SidebarTrigger, useSidebar, useSidebarMode, type NavItem, type NavSection, type SidebarIconComponent } from "@kitora/sidebar"

// \`{ name }\` icons in the nav resolve through this registry.
const ICONS: Readonly<Record<string, SidebarIconComponent>> = { check: CheckSquare, home: Home, inbox: Inbox, list: ListTodo, zap: Zap }

const NAV: readonly NavSection[] = [
  {
    id: "m-top",
    label: "",
    items: [
      { id: "m-home", label: "Home", href: "/m/home", icon: { name: "home" } },
      { id: "m-inbox", label: "Inbox", href: "/m/inbox", icon: { name: "inbox" }, badge: { count: 4 } },
      { id: "m-mine", label: "My issues", href: "/m/mine", icon: { name: "check" } },
    ],
  },
  {
    id: "m-team",
    label: "Team",
    items: [
      {
        id: "m-eng",
        label: "Engineering",
        icon: { initials: "E", color: "#7c3aed" },
        children: [
          { id: "m-backlog", label: "Backlog", href: "/m/backlog", icon: { name: "list" } },
          { id: "m-active", label: "Active", href: "/m/active", icon: { name: "zap" }, badge: { mentions: 1 } },
        ],
      },
      { id: "m-design", label: "Design", href: "/m/design", icon: { initials: "D", color: "#c2410c" } },
    ],
  },
]

const THEME: Readonly<Record<\`--sb-\${string}\`, string>> = { "--sb-accent": "#6555d9" }

/** The current path, kept in the page: in an app, pass the router's pathname as \`location\` and let the links navigate. */
function useInPageLocation(initial = "/m/backlog") {
  const [location, setLocation] = useState(initial)
  const navigate = (item: NavItem, event: { preventDefault(): void }) => {
    if (item.external || !item.href) return
    event.preventDefault()
    setLocation(item.href)
  }
  return { location, navigate }
}

/** The panel: a title and the toggle (the toggle alone in the icon rail), then the nav. */
function MiniSidebar({ title, navigate }: { readonly title: string; readonly navigate: (item: NavItem, event: { preventDefault(): void }) => void }) {
  const mode = useSidebarMode()
  const header =
    mode === "rail" ? (
      <SidebarTrigger />
    ) : (
      <div className="flex h-8 items-center gap-1 px-1">
        <span className="min-w-0 flex-1 truncate text-[13px] font-semibold">{title}</span>
        <SidebarTrigger />
      </div>
    )
  return (
    <Sidebar header={header}>
      <SidebarNav nav={NAV} onNavigate={navigate} />
    </Sidebar>
  )
}

/** The content: its own toggle while the panel is not showing in full, the current page's name, then \`children\`. */
function Page({ location, children }: { readonly location: string; readonly children: ReactNode }) {
  const { mode } = useSidebar()
  const current = NAV.flatMap((s) => s.items).flatMap((i) => [i, ...(i.children ?? [])]).find((i) => i.href === location)
  return (
    <div className="flex h-full min-h-0 flex-col bg-background text-[13px]">
      <div className="flex h-10 shrink-0 items-center gap-2 border-b px-3">
        {mode === "panel" ? null : <SidebarTrigger />}
        <span className="font-medium">{current?.label ?? "Home"}</span>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden p-3 text-muted-foreground">{children}</div>
    </div>
  )
}

/** side="right": the panel on the right edge; drag its left edge to resize. */
export function RightSidebar() {
  const { location, navigate } = useInPageLocation()
  return (
    <div className="relative h-full overflow-hidden" style={{ ...THEME }}>
      <SidebarStyles />
      <SidebarProvider icons={ICONS} location={location} label="Right side navigation" side="right" defaultState={{ width: 200, expanded: ["m-eng"] }}>
        <SidebarLayout minWidth={180} sidebar={<MiniSidebar title="Right side" navigate={navigate} />}>
          <Page location={location}>side="right": drag the left edge of the panel to resize.</Page>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}

/** A nav on the left and an inspector on the other edge (\`aside\`). */
export function BothSidesSidebar() {
  const { location, navigate } = useInPageLocation()
  return (
    <div className="relative h-full overflow-hidden" style={{ ...THEME }}>
      <SidebarStyles />
      <SidebarProvider icons={ICONS} location={location} label="Both sides navigation" defaultState={{ width: 200, expanded: ["m-eng"] }}>
        <SidebarLayout
          minWidth={180}
          aside={<div className="h-full w-full border-s bg-muted/40 p-3 text-[12.5px] text-muted-foreground">Inspector (a second panel on the other edge)</div>}
          asideWidth={160}
          sidebar={<MiniSidebar title="Both sides" navigate={navigate} />}
        >
          <Page location={location}>A nav on the left, an inspector on the right.</Page>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}

/** topBar: the sidebar sits under a bar that spans the page instead of running full height. */
export function TopBarSidebar() {
  const { location, navigate } = useInPageLocation()
  return (
    <div className="relative h-full overflow-hidden" style={{ ...THEME }}>
      <SidebarStyles />
      <SidebarProvider icons={ICONS} location={location} label="Top bar navigation" defaultState={{ width: 200, expanded: ["m-eng"] }}>
        <SidebarLayout minWidth={180} topBar={<div className="flex h-9 items-center border-b bg-muted/40 px-3 text-[12.5px] font-semibold">Acme · top bar</div>} sidebar={<MiniSidebar title="Top bar" navigate={navigate} />}>
          <Page location={location}>The sidebar sits under a bar that spans the page.</Page>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}

/** dir="rtl" mirrors the side, chevrons, indent, arrow keys and resize direction. */
export function RtlSidebar() {
  const { location, navigate } = useInPageLocation()
  return (
    <div dir="rtl" className="relative h-full overflow-hidden" style={{ ...THEME }}>
      <SidebarStyles />
      <SidebarProvider icons={ICONS} location={location} label="RTL navigation" defaultState={{ width: 200, expanded: ["m-eng"] }}>
        <SidebarLayout minWidth={180} sidebar={<MiniSidebar title="RTL" navigate={navigate} />}>
          <Page location={location}>dir="rtl": the sidebar sits on the right edge; Left opens a node, Right closes it.</Page>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>c(()=>import(`./shapes-placement-nlFuYnkF.js`),[]));function me(){return(0,x.jsxs)(`div`,{children:[(0,x.jsx)(n,{title:`Shapes`,children:`One sidebar, every shape: flush, floating and inset; the icon rail, the mini rail with labels and hidden off canvas; pushing the content or covering it; peeking in on hover; the left or the right edge, or both; full height or under a top bar; nested inside a page; mirrored in RTL; and a pinned area that never scrolls.`}),(0,x.jsx)(v,{n:1,title:`Floating, inset and density`,blurb:`shape: a card inset from the edges with a shadow (S5), or the content as a raised card on the sidebar's background (S6); data-density on any ancestor picks compact, comfortable or touch rows (S111).`,code:A,children:(0,x.jsxs)(`div`,{className:`grid gap-3 md:grid-cols-2`,children:[(0,x.jsx)(y,{testId:`shape-floating`,height:300,children:(0,x.jsx)(ie,{})}),(0,x.jsx)(y,{testId:`shape-inset`,height:300,children:(0,x.jsx)(O,{})}),(0,x.jsx)(y,{testId:`shape-comfortable`,height:300,children:(0,x.jsx)(k,{})})]})}),(0,x.jsx)(v,{n:2,title:`Mini rail, overlay and hover-peek`,blurb:`collapse="rail-labels" draws tiny labels under the icons (S3); presentation="overlay" opens the panel over the content with a scrim, Escape and a click outside to close (S7); peek slides a hidden sidebar in while the pointer rests on the left edge (S8).`,code:B,children:(0,x.jsxs)(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[(0,x.jsx)(y,{testId:`shape-rail-labels`,height:300,children:(0,x.jsx)(L,{})}),(0,x.jsx)(y,{testId:`shape-overlay`,height:300,children:(0,x.jsx)(R,{})}),(0,x.jsx)(y,{testId:`shape-peek`,height:300,children:(0,x.jsx)(z,{})})]})}),(0,x.jsx)(v,{n:3,title:`Right side, both sides, top bar, RTL`,blurb:`side="right" (S10); a left nav with an inspector on the right (S11); the sidebar under a top bar instead of full height (S12); dir="rtl" mirrors the side, chevrons, indent, arrows and resize (S112).`,code:$,children:(0,x.jsxs)(`div`,{className:`grid gap-3 md:grid-cols-2`,children:[(0,x.jsx)(y,{testId:`shape-right`,height:300,children:(0,x.jsx)(ue,{})}),(0,x.jsx)(y,{testId:`shape-both`,height:300,children:(0,x.jsx)(de,{})}),(0,x.jsx)(y,{testId:`shape-topbar`,height:300,children:(0,x.jsx)(fe,{})}),(0,x.jsx)(y,{testId:`shape-rtl`,height:300,children:(0,x.jsx)(pe,{})})]})}),(0,x.jsx)(v,{n:4,title:`Nested sidebar and pinned area`,blurb:`A settings page with its own sidebar inside the app's content (S14), and pinned sections in a sticky area that never scrolls away (S32).`,code:K,children:(0,x.jsxs)(`div`,{className:`grid gap-3 md:grid-cols-2`,children:[(0,x.jsx)(y,{testId:`shape-nested`,height:320,children:(0,x.jsx)(ce,{})}),(0,x.jsx)(y,{testId:`shape-pinned`,height:320,children:(0,x.jsx)(le,{})})]})})]})}export{me as component};