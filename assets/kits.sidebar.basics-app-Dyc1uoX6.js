import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{Bc as n,Cc as r,Ic as i}from"./index-9y5uwRd3.js";import{n as a}from"./context-B0rBLGA7.js";import{i as o,r as s}from"./sidebar-VPUXi6Th.js";import{c,o as l}from"./parts-BCmKNJsH.js";import{i as u}from"./menus-nyQ8K-Fa.js";import"./kit-gallery-B-Yr9fP4.js";import{t as d}from"./example-CZLJLtIC.js";import{t as f}from"./-kits.sidebar.shared-1cFvM_u_.js";var p=e(n(),1),m=i(),h=[{id:`main`,label:``,items:[{id:`home`,label:`Home`,href:`/`},{id:`projects`,label:`Projects`,href:`/projects`,children:[{id:`alpha`,label:`Alpha`,href:`/projects/alpha`},{id:`beta`,label:`Beta`,href:`/projects/beta`}]},{id:`settings`,label:`Settings`,href:`/settings`}]}];function g(){let[e,t]=(0,p.useState)(`/projects/beta`);return(0,m.jsxs)(`div`,{className:`h-full`,children:[(0,m.jsx)(l,{}),(0,m.jsx)(a,{location:e,label:`Routes`,defaultState:{expanded:[`projects`]},children:(0,m.jsx)(c,{sidebar:(0,m.jsx)(s,{children:(0,m.jsx)(o,{nav:h,onNavigate:(n,r)=>{r.preventDefault(),t(n.href??e)}})}),children:(0,m.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5 p-3 text-[13px]`,children:[(0,m.jsx)(`span`,{className:`text-muted-foreground`,children:`location`}),(0,m.jsx)(`code`,{"data-testid":`basic-active-location`,className:`font-mono text-[12px]`,children:e}),(0,m.jsx)(`button`,{type:`button`,className:`h-6 rounded border px-2 text-[12px] hover:bg-muted`,onClick:()=>t(`/settings`),children:`Go to /settings`})]})})})]})}var _=`import { useState } from "react"
import { Sidebar, SidebarLayout, SidebarNav, SidebarProvider, SidebarStyles, type NavSection } from "@kitora/sidebar"

// Leaves match the location exactly; a parent with children matches by prefix, so /projects/alpha keeps Projects lit when folded.
const NAV: readonly NavSection[] = [
  {
    id: "main",
    label: "",
    items: [
      { id: "home", label: "Home", href: "/" },
      { id: "projects", label: "Projects", href: "/projects", children: [{ id: "alpha", label: "Alpha", href: "/projects/alpha" }, { id: "beta", label: "Beta", href: "/projects/beta" }] },
      { id: "settings", label: "Settings", href: "/settings" },
    ],
  },
]

/** Pass the router's pathname as \`location\` (here, page state stands in for the router) and the matching row is highlighted. */
export function BasicActiveRoute() {
  const [location, setLocation] = useState("/projects/beta")
  return (
    <div className="h-full">
      <SidebarStyles />
      <SidebarProvider location={location} label="Routes" defaultState={{ expanded: ["projects"] }}>
        <SidebarLayout sidebar={<Sidebar><SidebarNav nav={NAV} onNavigate={(item, event) => { event.preventDefault(); setLocation(item.href ?? location) }} /></Sidebar>}>
          <div className="flex flex-wrap items-center gap-1.5 p-3 text-[13px]">
            <span className="text-muted-foreground">location</span>
            <code data-testid="basic-active-location" className="font-mono text-[12px]">{location}</code>
            <button type="button" className="h-6 rounded border px-2 text-[12px] hover:bg-muted" onClick={() => setLocation("/settings")}>Go to /settings</button>
          </div>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>r(()=>import(`./active-route-BWrPwPrB.js`),[]));var v=[{id:`acme`,name:`Acme Inc`,icon:{initials:`A`,color:`#7c3aed`},detail:`48 members`},{id:`side`,name:`Side project`,icon:{initials:`S`,color:`#0369a1`},detail:`2 members`}],y=[{id:`main`,label:``,items:[{id:`home`,label:`Home`,href:`/home`},{id:`inbox`,label:`Inbox`,href:`/inbox`}]}];function b(){let[e,t]=(0,p.useState)(`acme`);return(0,m.jsxs)(`div`,{className:`h-full`,children:[(0,m.jsx)(l,{}),(0,m.jsx)(a,{location:`/home`,label:`Workspace`,children:(0,m.jsx)(c,{sidebar:(0,m.jsx)(s,{header:(0,m.jsx)(u,{workspaces:v,current:e,onSelect:t,actions:[{id:`new`,label:`Create a workspace`,onSelect:()=>void 0}]}),children:(0,m.jsx)(o,{nav:y,onNavigate:(e,t)=>t.preventDefault()})}),children:(0,m.jsxs)(`div`,{"data-testid":`basic-workspace-current`,className:`p-3 text-[13px] text-muted-foreground`,children:[`Workspace: `,v.find(t=>t.id===e)?.name]})})})]})}var x=`import { useState } from "react"
import { Sidebar, SidebarLayout, SidebarNav, SidebarProvider, SidebarStyles, WorkspaceSwitcher, type NavSection } from "@kitora/sidebar"

const WORKSPACES = [
  { id: "acme", name: "Acme Inc", icon: { initials: "A", color: "#7c3aed" }, detail: "48 members" },
  { id: "side", name: "Side project", icon: { initials: "S", color: "#0369a1" }, detail: "2 members" },
]

const NAV: readonly NavSection[] = [{ id: "main", label: "", items: [{ id: "home", label: "Home", href: "/home" }, { id: "inbox", label: "Inbox", href: "/inbox" }] }]

/** The switcher sits in the sidebar's header; picking one calls onSelect, and \`actions\` add menu rows under the list. */
export function BasicWorkspaceSwitcher() {
  const [workspace, setWorkspace] = useState("acme")
  const header = <WorkspaceSwitcher workspaces={WORKSPACES} current={workspace} onSelect={setWorkspace} actions={[{ id: "new", label: "Create a workspace", onSelect: () => undefined }]} />
  return (
    <div className="h-full">
      <SidebarStyles />
      <SidebarProvider location="/home" label="Workspace">
        <SidebarLayout sidebar={<Sidebar header={header}><SidebarNav nav={NAV} onNavigate={(_item, event) => event.preventDefault()} /></Sidebar>}>
          <div data-testid="basic-workspace-current" className="p-3 text-[13px] text-muted-foreground">Workspace: {WORKSPACES.find((w) => w.id === workspace)?.name}</div>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>r(()=>import(`./workspace-switcher-uClrdpuf.js`),[]));function S(){return(0,m.jsxs)(`div`,{children:[(0,m.jsx)(t,{title:`Basics: wiring it into an app`,children:`A workspace switcher in the header, and the router's path deciding which row is active.`}),(0,m.jsx)(d,{n:1,title:`A workspace switcher`,blurb:`Open the menu at the top and pick a workspace; the page reads the choice.`,code:x,children:(0,m.jsx)(f,{testId:`basic-workspace`,height:240,children:(0,m.jsx)(b,{})})}),(0,m.jsx)(d,{n:2,title:`Highlighting the active route`,blurb:"The row whose href matches `location` is active. The button changes the location from outside the sidebar.",code:_,children:(0,m.jsx)(f,{testId:`basic-active`,height:220,children:(0,m.jsx)(g,{})})})]})}export{S as component};