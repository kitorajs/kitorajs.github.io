import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./house-n8ZCCI5M.js";import{t as r}from"./inbox-BlLuUyDP.js";import{t as i}from"./settings-BV_zAlgP.js";import{t as a}from"./users-BSZT_uFg.js";import{Ec as o,Uc as s,zc as c}from"./index-BZuUy872.js";import{n as l}from"./context-C6mmtqBC.js";import{i as u,o as d,r as f}from"./sidebar-IYAqkxSJ.js";import{c as p,o as m}from"./parts-BGYTk8Zo.js";var h=e({SidebarIconRail:()=>y}),g=c(),_={home:n,inbox:r,users:a,settings:i},v=[{id:`main`,label:``,items:[{id:`home`,label:`Home`,href:`/home`,icon:{name:`home`}},{id:`inbox`,label:`Inbox`,href:`/inbox`,icon:{name:`inbox`}},{id:`people`,label:`People`,href:`/people`,icon:{name:`users`}},{id:`settings`,label:`Settings`,href:`/settings`,icon:{name:`settings`}}]}];function y(){return(0,g.jsxs)(`div`,{className:`h-80 w-full overflow-hidden rounded-md border border-border`,children:[(0,g.jsx)(m,{}),(0,g.jsx)(l,{icons:_,location:`/home`,label:`Rail`,collapse:`rail`,children:(0,g.jsx)(p,{sidebar:(0,g.jsx)(f,{header:(0,g.jsx)(d,{}),children:(0,g.jsx)(u,{nav:v,onNavigate:(e,t)=>t.preventDefault()})}),children:(0,g.jsx)(`div`,{className:`p-3 text-sm text-muted-foreground`,children:`Press the toggle at the top of the sidebar.`})})})]})}var b=e({SidebarNavList:()=>C}),x=t(s(),1),S=[{id:`main`,label:``,items:[{id:`home`,label:`Home`,href:`/home`,icon:{emoji:`🏠`}},{id:`inbox`,label:`Inbox`,href:`/inbox`,icon:{emoji:`📥`},badge:{count:3}},{id:`projects`,label:`Projects`,href:`/projects`,icon:{emoji:`📁`}},{id:`settings`,label:`Settings`,href:`/settings`,icon:{emoji:`⚙️`}}]}];function C(){let[e,t]=(0,x.useState)(`/home`);return(0,g.jsxs)(`div`,{className:`h-80 w-full overflow-hidden rounded-md border border-border`,children:[(0,g.jsx)(m,{}),(0,g.jsx)(l,{location:e,label:`Main`,children:(0,g.jsx)(p,{sidebar:(0,g.jsx)(f,{children:(0,g.jsx)(u,{nav:S,onNavigate:(n,r)=>{r.preventDefault(),t(n.href??e)}})}),children:(0,g.jsxs)(`div`,{className:`p-3 text-sm text-muted-foreground`,children:[`Page: `,e]})})})]})}var w=e({SidebarSectionsAndTree:()=>E}),T=[{id:`top`,label:``,items:[{id:`home`,label:`Home`,href:`/home`},{id:`inbox`,label:`Inbox`,href:`/inbox`}]},{id:`workspace`,label:`Workspace`,items:[{id:`projects`,label:`Projects`,href:`/projects`,children:[{id:`alpha`,label:`Alpha`,href:`/projects/alpha`},{id:`beta`,label:`Beta`,href:`/projects/beta`}]},{id:`docs`,label:`Docs`,href:`/docs`}]},{id:`channels`,label:`Channels`,limit:3,items:[`general`,`random`,`releases`,`support`,`hiring`].map(e=>({id:e,label:`# ${e}`,href:`/c/${e}`}))}];function E(){let[e,t]=(0,x.useState)(`/projects/beta`);return(0,g.jsxs)(`div`,{className:`h-96 w-full overflow-hidden rounded-md border border-border`,children:[(0,g.jsx)(m,{}),(0,g.jsx)(l,{location:e,label:`Workspace`,defaultState:{expanded:[`projects`]},children:(0,g.jsx)(p,{sidebar:(0,g.jsx)(f,{children:(0,g.jsx)(u,{nav:T,onNavigate:(n,r)=>{r.preventDefault(),t(n.href??e)}})}),children:(0,g.jsxs)(`div`,{className:`p-3 text-sm text-muted-foreground`,children:[`Page: `,e]})})})]})}var D=`import { Home, Inbox, Settings, Users } from "lucide-react"
import { Sidebar, SidebarLayout, SidebarNav, SidebarProvider, SidebarStyles, SidebarTrigger, type NavSection, type SidebarIconComponent } from "@kitora/sidebar"

// \`{ name }\` icons resolve through the provider's \`icons\` registry; the rail shows them alone, with the label as a tooltip.
const ICONS: Readonly<Record<string, SidebarIconComponent>> = { home: Home, inbox: Inbox, users: Users, settings: Settings }

const NAV: readonly NavSection[] = [
  {
    id: "main",
    label: "",
    items: [
      { id: "home", label: "Home", href: "/home", icon: { name: "home" } },
      { id: "inbox", label: "Inbox", href: "/inbox", icon: { name: "inbox" } },
      { id: "people", label: "People", href: "/people", icon: { name: "users" } },
      { id: "settings", label: "Settings", href: "/settings", icon: { name: "settings" } },
    ],
  },
]

// \`SidebarTrigger\` (or ⌘B / Ctrl+B) collapses the panel to an icon rail and back; \`collapse="rail"\` is the
// default, and the sash between sidebar and page resizes it.
export function SidebarIconRail() {
  return (
    <div className="h-80 w-full overflow-hidden rounded-md border border-border">
      <SidebarStyles />
      <SidebarProvider icons={ICONS} location="/home" label="Rail" collapse="rail">
        <SidebarLayout
          sidebar={
            <Sidebar header={<SidebarTrigger />}>
              <SidebarNav nav={NAV} onNavigate={(_item, event) => event.preventDefault()} />
            </Sidebar>
          }
        >
          <div className="p-3 text-sm text-muted-foreground">Press the toggle at the top of the sidebar.</div>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>o(()=>import(`./icon-rail-BoKkNkfK.js`),[]));var O=`import { useState } from "react"
import { Sidebar, SidebarLayout, SidebarNav, SidebarProvider, SidebarStyles, type NavSection } from "@kitora/sidebar"

// One section with an empty label is a plain list of links.
const NAV: readonly NavSection[] = [
  {
    id: "main",
    label: "",
    items: [
      { id: "home", label: "Home", href: "/home", icon: { emoji: "🏠" } },
      { id: "inbox", label: "Inbox", href: "/inbox", icon: { emoji: "📥" }, badge: { count: 3 } },
      { id: "projects", label: "Projects", href: "/projects", icon: { emoji: "📁" } },
      { id: "settings", label: "Settings", href: "/settings", icon: { emoji: "⚙️" } },
    ],
  },
]

// The smallest sidebar: a provider, a layout and a nav. Pass the router's pathname as \`location\` (page
// state stands in for the router here) and the matching link is marked \`aria-current="page"\`.
export function SidebarNavList() {
  const [location, setLocation] = useState("/home")
  return (
    <div className="h-80 w-full overflow-hidden rounded-md border border-border">
      <SidebarStyles />
      <SidebarProvider location={location} label="Main">
        <SidebarLayout
          sidebar={
            <Sidebar>
              <SidebarNav
                nav={NAV}
                onNavigate={(item, event) => {
                  event.preventDefault()
                  setLocation(item.href ?? location)
                }}
              />
            </Sidebar>
          }
        >
          <div className="p-3 text-sm text-muted-foreground">Page: {location}</div>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>o(()=>import(`./nav-list-DzQKu7QO.js`),[]));var k=`import { useState } from "react"
import { Sidebar, SidebarLayout, SidebarNav, SidebarProvider, SidebarStyles, type NavSection } from "@kitora/sidebar"

const NAV: readonly NavSection[] = [
  { id: "top", label: "", items: [{ id: "home", label: "Home", href: "/home" }, { id: "inbox", label: "Inbox", href: "/inbox" }] },
  {
    id: "workspace",
    label: "Workspace",
    items: [
      { id: "projects", label: "Projects", href: "/projects", children: [{ id: "alpha", label: "Alpha", href: "/projects/alpha" }, { id: "beta", label: "Beta", href: "/projects/beta" }] },
      { id: "docs", label: "Docs", href: "/docs" },
    ],
  },
  { id: "channels", label: "Channels", limit: 3, items: ["general", "random", "releases", "support", "hiring"].map((c) => ({ id: c, label: \`# \${c}\`, href: \`/c/\${c}\` })) },
]

// A labelled section folds from its header, a row with \`children\` is a tree (the arrow keys walk it, → and
// ← open and close), and \`limit\` adds a "Show more" row. The provider keeps the fold state.
export function SidebarSectionsAndTree() {
  const [location, setLocation] = useState("/projects/beta")
  return (
    <div className="h-96 w-full overflow-hidden rounded-md border border-border">
      <SidebarStyles />
      <SidebarProvider location={location} label="Workspace" defaultState={{ expanded: ["projects"] }}>
        <SidebarLayout
          sidebar={
            <Sidebar>
              <SidebarNav
                nav={NAV}
                onNavigate={(item, event) => {
                  event.preventDefault()
                  setLocation(item.href ?? location)
                }}
              />
            </Sidebar>
          }
        >
          <div className="p-3 text-sm text-muted-foreground">Page: {location}</div>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>o(()=>import(`./sections-and-tree-CbxBFIFW.js`),[]));var A={"./demos/sidebar/icon-rail.tsx":h,"./demos/sidebar/nav-list.tsx":b,"./demos/sidebar/sections-and-tree.tsx":w},j={"./demos/sidebar/icon-rail.tsx":D,"./demos/sidebar/nav-list.tsx":O,"./demos/sidebar/sections-and-tree.tsx":k};export{A as modules,j as sources};