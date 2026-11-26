import{s as e}from"./kit-docs-CvNs0WqT.js";import{t}from"./house-Bw0k7HMz.js";import{t as n}from"./inbox-CWroxAY7.js";import{t as r}from"./settings-BYIHPtJX.js";import{t as i}from"./users-DvvoKKua.js";import{Cc as a,Ic as o}from"./index-9y5uwRd3.js";import{i as s,n as c}from"./context-B0rBLGA7.js";import{i as l,o as u,r as d}from"./sidebar-VPUXi6Th.js";import{c as f,o as p}from"./parts-BCmKNJsH.js";import"./kit-gallery-B-Yr9fP4.js";import{t as m}from"./example-CZLJLtIC.js";import{t as h}from"./-kits.sidebar.shared-1cFvM_u_.js";var g=o(),_={home:t,inbox:n,users:i,settings:r},v=[{id:`main`,label:``,items:[{id:`home`,label:`Home`,href:`/home`,icon:{name:`home`}},{id:`inbox`,label:`Inbox`,href:`/inbox`,icon:{name:`inbox`}},{id:`people`,label:`People`,href:`/people`,icon:{name:`users`}},{id:`settings`,label:`Settings`,href:`/settings`,icon:{name:`settings`}}]}];function y(){return(0,g.jsxs)(`div`,{className:`h-full`,children:[(0,g.jsx)(p,{}),(0,g.jsx)(c,{icons:_,location:`/home`,label:`Rail`,collapse:`rail`,children:(0,g.jsx)(f,{sidebar:(0,g.jsx)(d,{header:(0,g.jsx)(u,{}),children:(0,g.jsx)(l,{nav:v,onNavigate:(e,t)=>t.preventDefault()})}),children:(0,g.jsx)(`div`,{className:`p-3 text-[13px] text-muted-foreground`,children:`Press the toggle at the top of the sidebar.`})})})]})}var b=`import { Home, Inbox, Settings, Users } from "lucide-react"
import { Sidebar, SidebarLayout, SidebarNav, SidebarProvider, SidebarStyles, SidebarTrigger, type NavSection, type SidebarIconComponent } from "@kitora/sidebar"

// \`{ name }\` icons resolve through this registry; the rail shows them alone, with the label as a tooltip.
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

/** The trigger (or ⌘B) collapses the panel to the icon rail and back; \`collapse="rail"\` is the default. */
export function BasicIconRail() {
  return (
    <div className="h-full">
      <SidebarStyles />
      <SidebarProvider icons={ICONS} location="/home" label="Rail" collapse="rail">
        <SidebarLayout sidebar={<Sidebar header={<SidebarTrigger />}><SidebarNav nav={NAV} onNavigate={(_item, event) => event.preventDefault()} /></Sidebar>}>
          <div className="p-3 text-[13px] text-muted-foreground">Press the toggle at the top of the sidebar.</div>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>a(()=>import(`./icon-rail-DvJIaOlT.js`),[]));var x=[{id:`main`,label:``,items:[{id:`home`,label:`Home`,href:`/home`},{id:`inbox`,label:`Inbox`,href:`/inbox`},{id:`settings`,label:`Settings`,href:`/settings`}]}];function S(){return(0,g.jsxs)(`div`,{className:`h-full`,children:[(0,g.jsx)(p,{}),(0,g.jsx)(c,{band:`phone`,location:`/home`,label:`Menu`,children:(0,g.jsx)(f,{sidebar:(0,g.jsx)(d,{children:(0,g.jsx)(l,{nav:x,onNavigate:(e,t)=>t.preventDefault()})}),children:(0,g.jsxs)(`div`,{className:`flex h-10 items-center gap-2 border-b px-2 text-[13px] font-medium`,children:[(0,g.jsx)(u,{}),`Home`]})})})]})}var C=`import { Sidebar, SidebarLayout, SidebarNav, SidebarProvider, SidebarStyles, SidebarTrigger, type NavSection } from "@kitora/sidebar"

const NAV: readonly NavSection[] = [{ id: "main", label: "", items: [{ id: "home", label: "Home", href: "/home" }, { id: "inbox", label: "Inbox", href: "/inbox" }, { id: "settings", label: "Settings", href: "/settings" }] }]

/**
 * On a phone the sidebar is a sheet: the trigger opens it, Escape, the scrim or a link closes it.
 * The band comes from the viewport; \`band="phone"\` forces it here so the demo shows on a desktop.
 */
export function BasicMobileSheet() {
  return (
    <div className="h-full">
      <SidebarStyles />
      <SidebarProvider band="phone" location="/home" label="Menu">
        <SidebarLayout sidebar={<Sidebar><SidebarNav nav={NAV} onNavigate={(_item, event) => event.preventDefault()} /></Sidebar>}>
          <div className="flex h-10 items-center gap-2 border-b px-2 text-[13px] font-medium">
            <SidebarTrigger />
            Home
          </div>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>a(()=>import(`./mobile-sheet-Db9-Pamb.js`),[]));var w=[{id:`main`,label:``,items:[{id:`home`,label:`Home`,href:`/home`},{id:`docs`,label:`Documents`,href:`/docs`},{id:`archive`,label:`Archive`,href:`/archive`}]}];function T(){let{width:e,collapsed:t}=s();return(0,g.jsx)(`div`,{className:`p-3 font-mono text-[12px] text-muted-foreground tabular-nums`,children:t?`collapsed to the rail`:`width ${Math.round(e)} px`})}function E(){return(0,g.jsxs)(`div`,{className:`h-full`,children:[(0,g.jsx)(p,{}),(0,g.jsx)(c,{location:`/home`,label:`Resizable`,defaultState:{width:200},children:(0,g.jsx)(f,{minWidth:160,maxWidth:320,sidebar:(0,g.jsx)(d,{children:(0,g.jsx)(l,{nav:w,onNavigate:(e,t)=>t.preventDefault()})}),children:(0,g.jsx)(T,{})})})]})}var D=`import { Sidebar, SidebarLayout, SidebarNav, SidebarProvider, SidebarStyles, useSidebar, type NavSection } from "@kitora/sidebar"

const NAV: readonly NavSection[] = [{ id: "main", label: "", items: [{ id: "home", label: "Home", href: "/home" }, { id: "docs", label: "Documents", href: "/docs" }, { id: "archive", label: "Archive", href: "/archive" }] }]

/** The sidebar's width, read from the provider's state. */
function Width() {
  const { width, collapsed } = useSidebar()
  return <div className="p-3 font-mono text-[12px] text-muted-foreground tabular-nums">{collapsed ? "collapsed to the rail" : \`width \${Math.round(width)} px\`}</div>
}

/** Drag the sidebar's edge between minWidth and maxWidth; drag past half the minimum to collapse. Double-click the edge to reset. */
export function BasicResize() {
  return (
    <div className="h-full">
      <SidebarStyles />
      <SidebarProvider location="/home" label="Resizable" defaultState={{ width: 200 }}>
        <SidebarLayout minWidth={160} maxWidth={320} sidebar={<Sidebar><SidebarNav nav={NAV} onNavigate={(_item, event) => event.preventDefault()} /></Sidebar>}>
          <Width />
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>a(()=>import(`./resize-DHZAtpoB.js`),[]));function O(){return(0,g.jsxs)(`div`,{children:[(0,g.jsx)(e,{title:`Basics: the panel`,children:`The panel collapses to an icon rail, resizes from its edge, and becomes a sheet on a phone.`}),(0,g.jsx)(m,{n:1,title:`Collapse to an icon rail`,blurb:`The toggle (or ⌘B) folds the panel to its icons; hover one for its label.`,code:b,children:(0,g.jsx)(h,{testId:`basic-rail`,height:220,children:(0,g.jsx)(y,{})})}),(0,g.jsx)(m,{n:2,title:`Resizing`,blurb:`Drag the sidebar's edge between 160 and 320 px; drag below 80 px to collapse it.`,code:D,children:(0,g.jsx)(h,{testId:`basic-resize`,height:180,children:(0,g.jsx)(E,{})})}),(0,g.jsx)(m,{n:3,title:`A mobile sheet`,blurb:`Forced to the phone band: the toggle opens the nav as a sheet from the left edge.`,code:C,children:(0,g.jsx)(h,{testId:`basic-sheet`,height:200,className:`max-w-[380px]`,children:(0,g.jsx)(S,{})})})]})}export{O as component};