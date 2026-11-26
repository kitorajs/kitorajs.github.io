import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{t as n}from"./house-Bw0k7HMz.js";import{t as r}from"./inbox-CWroxAY7.js";import{t as i}from"./list-todo-CziaCdgU.js";import{t as a}from"./square-check-big-vyK9bL6X.js";import{t as o}from"./zap-DP_2_ptQ.js";import{Bc as s,Cc as c,Ic as l}from"./index-9y5uwRd3.js";import{a as u,c as d,i as f,l as p,n as m,s as h}from"./context-B0rBLGA7.js";import{t as g}from"./match-P3PTXEG7.js";import{t as _}from"./state-0HUX4Mag.js";import{i as v,o as y,r as b}from"./sidebar-VPUXi6Th.js";import{n as x}from"./storage-C1x0ip8A.js";import{c as S,o as C}from"./parts-BCmKNJsH.js";import"./kit-gallery-B-Yr9fP4.js";import{t as w}from"./example-CZLJLtIC.js";import{t as T}from"./-kits.sidebar.shared-1cFvM_u_.js";var E=e(s(),1),D=l(),O=`data-sidebar-devtools`;function k({name:e,children:t}){return(0,D.jsxs)(`div`,{className:`flex gap-2 border-b border-current/10 py-1 last:border-b-0`,children:[(0,D.jsx)(`dt`,{className:`w-28 shrink-0 text-current/60`,children:e}),(0,D.jsx)(`dd`,{className:`min-w-0 flex-1 break-words`,children:t})]})}var A=e=>e.length===0?`—`:e.join(`, `);function j({nav:e,persist:t,className:n}){let{store:r,location:i,collapse:a,side:o,railWidth:s,query:c}=u(),l=f(),m=h(e=>e),[v,y]=(0,E.useState)(!1),b=JSON.stringify(p(m)),x=t?d(t.storage,t.key):null,S=e?g(e,i):null;return(0,D.jsxs)(`section`,{[O]:``,"aria-label":`Sidebar devtools`,className:[`rounded-lg border p-2 font-mono text-[11.5px]`,n].filter(Boolean).join(` `),children:[(0,D.jsxs)(`div`,{className:`mb-1 flex items-center gap-1.5`,children:[(0,D.jsx)(`span`,{className:`me-auto font-sans text-[12px] font-semibold`,children:`Sidebar devtools`}),(0,D.jsx)(`button`,{type:`button`,className:`h-6 rounded border px-1.5 font-sans hover:bg-current/5`,onClick:()=>r.dispatch({type:`replace`,state:_}),children:`Reset`}),(0,D.jsx)(`button`,{type:`button`,className:`h-6 rounded border px-1.5 font-sans hover:bg-current/5`,onClick:()=>r.dispatch({type:`collapse-all`}),children:`Collapse all`}),(0,D.jsx)(`button`,{type:`button`,className:`h-6 rounded border px-1.5 font-sans hover:bg-current/5`,onClick:()=>{navigator.clipboard?.writeText(b),y(!0)},children:v?`Copied`:`Copy snapshot`})]}),(0,D.jsxs)(`dl`,{children:[(0,D.jsxs)(k,{name:`band · mode`,children:[l.band,` · `,l.mode]}),(0,D.jsxs)(k,{name:`collapse · side`,children:[a,` · `,o,` · rail `,s,`px`]}),(0,D.jsx)(k,{name:`collapsed`,children:String(m.collapsed)}),(0,D.jsx)(k,{name:`sheet open`,children:String(m.mobileOpen)}),(0,D.jsxs)(k,{name:`width`,children:[m.width,`px`]}),(0,D.jsx)(k,{name:`panel`,children:m.panel??`—`}),(0,D.jsx)(k,{name:`expanded`,children:A(m.expanded)}),(0,D.jsx)(k,{name:`closed sections`,children:A(m.collapsedSections)}),(0,D.jsx)(k,{name:`hidden sections`,children:A(m.hiddenSections)}),(0,D.jsx)(k,{name:`recents`,children:A(m.recents)}),(0,D.jsx)(k,{name:`filter`,children:c===``?`—`:`“${c}”`}),(0,D.jsx)(k,{name:`location`,children:i||`—`}),e?(0,D.jsx)(k,{name:`active match`,children:S?`${S.id} (ancestors: ${A(S.ancestors)})`:`none`}):null,(0,D.jsx)(k,{name:`snapshot`,children:b}),x?(0,D.jsxs)(k,{name:`stored`,children:[t?.key,`: `,x.status]}):null]})]})}var M={check:a,home:n,inbox:r,list:i,zap:o},N=[{id:`m-top`,label:``,items:[{id:`m-home`,label:`Home`,href:`/m/home`,icon:{name:`home`}},{id:`m-inbox`,label:`Inbox`,href:`/m/inbox`,icon:{name:`inbox`},badge:{count:4}},{id:`m-mine`,label:`My issues`,href:`/m/mine`,icon:{name:`check`}}]},{id:`m-team`,label:`Team`,items:[{id:`m-eng`,label:`Engineering`,icon:{initials:`E`,color:`#7c3aed`},children:[{id:`m-backlog`,label:`Backlog`,href:`/m/backlog`,icon:{name:`list`}},{id:`m-active`,label:`Active`,href:`/m/active`,icon:{name:`zap`},badge:{mentions:1}}]},{id:`m-design`,label:`Design`,href:`/m/design`,icon:{initials:`D`,color:`#c2410c`}}]}];function P(){let{mode:e}=f();return e===`panel`?null:(0,D.jsx)(y,{})}function F(){let[e,t]=(0,E.useState)(`/m/active`),n=(e,n)=>{e.external||!e.href||(n.preventDefault(),t(e.href))},[r]=(0,E.useState)(()=>({key:`demo.sidebar`,storage:x()}));return(0,D.jsxs)(`div`,{className:`relative h-full overflow-hidden`,children:[(0,D.jsx)(C,{}),(0,D.jsx)(m,{icons:M,location:e,label:`Demo navigation`,persist:r,toggleShortcut:!0,defaultState:{width:220},children:(0,D.jsx)(S,{sidebar:(0,D.jsx)(b,{header:(0,D.jsxs)(`div`,{className:`flex h-8 items-center gap-1 px-1`,children:[(0,D.jsx)(`span`,{className:`min-w-0 flex-1 truncate text-[13px] font-semibold`,children:`Demo`}),(0,D.jsx)(y,{})]}),children:(0,D.jsx)(v,{nav:N,onNavigate:n})}),children:(0,D.jsxs)(`div`,{className:`flex h-full min-h-0 flex-col gap-2 overflow-auto p-3`,children:[(0,D.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,D.jsx)(P,{}),(0,D.jsx)(`span`,{className:`text-[12.5px] text-muted-foreground`,children:`Change the sidebar and watch the state, snapshot and active match follow.`})]}),(0,D.jsx)(j,{nav:N,persist:r})]})})})]})}var I=`import { CheckSquare, Home, Inbox, ListTodo, Zap } from "lucide-react"
import { useState } from "react"
import { memoryStorage, Sidebar, SidebarLayout, SidebarNav, SidebarProvider, SidebarStyles, SidebarTrigger, useSidebar, type NavItem, type NavSection, type SidebarIconComponent } from "@kitora/sidebar"
import { SidebarDevtools } from "@kitora/sidebar/devtools"

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

/** The content's own toggle while the panel is not showing in full. */
function CollapsedTrigger() {
  const { mode } = useSidebar()
  return mode === "panel" ? null : <SidebarTrigger />
}

/** A sidebar persisting to memory, with the devtools panel beside the content. Import the devtools entry only in development. */
export function DevtoolsApp() {
  // In an app, pass the router's pathname as \`location\` and let the links navigate; this demo keeps navigation in the page.
  const [location, setLocation] = useState("/m/active")
  const navigate = (item: NavItem, event: { preventDefault(): void }) => {
    if (item.external || !item.href) return
    event.preventDefault()
    setLocation(item.href)
  }
  // The same persist object goes to the provider and the panel, so the panel can show what is stored.
  const [persist] = useState(() => ({ key: "demo.sidebar", storage: memoryStorage() }))
  return (
    <div className="relative h-full overflow-hidden">
      <SidebarStyles />
      <SidebarProvider icons={ICONS} location={location} label="Demo navigation" persist={persist} toggleShortcut defaultState={{ width: 220 }}>
        <SidebarLayout
          sidebar={
            <Sidebar
              header={
                <div className="flex h-8 items-center gap-1 px-1">
                  <span className="min-w-0 flex-1 truncate text-[13px] font-semibold">Demo</span>
                  <SidebarTrigger />
                </div>
              }
            >
              <SidebarNav nav={NAV} onNavigate={navigate} />
            </Sidebar>
          }
        >
          <div className="flex h-full min-h-0 flex-col gap-2 overflow-auto p-3">
            <div className="flex items-center gap-2">
              <CollapsedTrigger />
              <span className="text-[12.5px] text-muted-foreground">Change the sidebar and watch the state, snapshot and active match follow.</span>
            </div>
            <SidebarDevtools nav={NAV} persist={persist} />
          </div>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>c(()=>import(`./devtools-BlPI2rxy.js`),[]));function L(){return(0,D.jsxs)(`div`,{children:[(0,D.jsx)(t,{title:`Devtools`,children:`An opt-in panel from @kitora/sidebar/devtools: the band and visible mode, the UI state, the snapshot persistence writes and what is stored now (with its parse status), the active match for the location, and reset, collapse-all and copy buttons. Production pages that never import it carry none of it.`}),(0,D.jsx)(w,{n:1,title:`State, snapshot, active match`,blurb:`Collapse, resize, open nodes or navigate, and the panel follows.`,code:I,children:(0,D.jsx)(T,{testId:`devtools`,height:520,children:(0,D.jsx)(F,{})})})]})}export{L as component};