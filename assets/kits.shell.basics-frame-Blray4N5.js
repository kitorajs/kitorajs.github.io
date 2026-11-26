import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{b as t,s as n}from"./kit-docs-BUovISd0.js";import{t as r}from"./folder-CByvWSrf.js";import{t as i}from"./git-branch-D9zd0CZc.js";import{t as a}from"./globe-X8eHtpbL.js";import{t as o}from"./house-qKU6DYL7.js";import{t as s}from"./inbox-CG0KJAIy.js";import{t as c}from"./refresh-cw-Bmh3wpbh.js";import{Bc as l,Cc as u,Ic as d}from"./index-B9ukmIN1.js";import{t as f}from"./app-shell-CEPxqUeP.js";import{i as p,r as m}from"./sidebar-DUjuVdBo.js";import{i as h,n as g,r as _}from"./inspector-vPmzK40_.js";import{n as v}from"./breadcrumbs-CbZZ_Yqm.js";import{i as y,o as b,r as x}from"./header-BEgCh4ca.js";import{r as S}from"./page-C1By_5dM.js";import{r as C,t as w}from"./status-bar-C0GSkdh_.js";import"./kit-gallery-Bph7isB2.js";import{t as T}from"./example-BGnSQG2Y.js";import{t as E}from"./-kits.shell.shared-DtaDyBT_.js";var D=e(l(),1),O=d(),k=[{id:`main`,label:``,items:[{id:`home`,label:`Home`,href:`/`,icon:{name:`home`}},{id:`inbox`,label:`Inbox`,href:`/inbox`,icon:{name:`inbox`}}]},{id:`projects`,label:`Projects`,items:[{id:`web`,label:`Website`,href:`/p/web`,icon:{name:`globe`},children:[{id:`web-issues`,label:`Issues`,href:`/p/web/issues`},{id:`web-roadmap`,label:`Roadmap`,href:`/p/web/roadmap`}]}]}],A={home:o,inbox:s,globe:a};function j(){let[e,t]=(0,D.useState)(`/p/web/issues`),n=h(k,e);return(0,O.jsx)(f,{location:e,provider:{icons:A,defaultState:{width:220}},sidebar:(0,O.jsx)(m,{children:(0,O.jsx)(p,{nav:k,onNavigate:(e,n)=>{n.preventDefault(),e.href&&t(e.href)}})}),header:(0,O.jsx)(x,{start:(0,O.jsx)(v,{items:n,onNavigate:(e,n)=>{n.preventDefault(),e.href&&t(e.href)}})}),children:(0,O.jsx)(S,{title:n[n.length-1]?.label??`Home`,description:`You are at ${e}`})})}var M=`import { useState } from "react"
import { AppShell, breadcrumbsFor, ShellBreadcrumbs, ShellHeader, ShellPage } from "@kitora/shell"
import { Sidebar, SidebarNav, type NavSection } from "@kitora/sidebar"
import { Globe, Home, Inbox } from "lucide-react"

const NAV: readonly NavSection[] = [
  { id: "main", label: "", items: [{ id: "home", label: "Home", href: "/", icon: { name: "home" } }, { id: "inbox", label: "Inbox", href: "/inbox", icon: { name: "inbox" } }] },
  {
    id: "projects",
    label: "Projects",
    items: [{ id: "web", label: "Website", href: "/p/web", icon: { name: "globe" }, children: [{ id: "web-issues", label: "Issues", href: "/p/web/issues" }, { id: "web-roadmap", label: "Roadmap", href: "/p/web/roadmap" }] }],
  },
]

// Icons by name, resolved through the provider's registry (any component that takes a className).
const ICONS = { home: Home, inbox: Inbox, globe: Globe }

/** The smallest shell: a sidebar, a header with breadcrumbs derived from the nav, and a page. */
export function BasicMinimal() {
  const [location, setLocation] = useState("/p/web/issues")
  const crumbs = breadcrumbsFor(NAV, location)
  return (
    <AppShell
      location={location}
      provider={{ icons: ICONS, defaultState: { width: 220 } }}
      sidebar={<Sidebar><SidebarNav nav={NAV} onNavigate={(item, e) => { e.preventDefault(); if (item.href) setLocation(item.href) }} /></Sidebar>}
      header={<ShellHeader start={<ShellBreadcrumbs items={crumbs} onNavigate={(c, e) => { e.preventDefault(); if (c.href) setLocation(c.href) }} />} />}
    >
      <ShellPage title={crumbs[crumbs.length - 1]?.label ?? "Home"} description={\`You are at \${location}\`} />
    </AppShell>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>u(()=>import(`./minimal-BzxkN6eQ.js`),[]));var N=[{id:`main`,label:``,items:[{id:`files`,label:`Files`,href:`/files`,icon:{name:`folder`}}]}],P=[`Q3 report.pdf`,`Logo.svg`,`Pricing.xlsx`];function F(){let[e,t]=(0,D.useState)(!0),[n,i]=(0,D.useState)(P[0]);return(0,O.jsx)(f,{location:`/files`,provider:{icons:{folder:r},defaultState:{width:200}},sidebar:(0,O.jsx)(m,{children:(0,O.jsx)(p,{nav:N,onNavigate:(e,t)=>t.preventDefault()})}),header:(0,O.jsx)(x,{start:(0,O.jsx)(`span`,{className:`font-medium`,children:`Files`}),end:(0,O.jsx)(y,{})}),inspectorOpen:e,onInspectorOpenChange:t,defaultInspectorWidth:260,inspector:(0,O.jsx)(_,{title:n,children:(0,O.jsxs)(`dl`,{children:[(0,O.jsx)(g,{label:`Kind`,children:n.split(`.`).pop()?.toUpperCase()}),(0,O.jsx)(g,{label:`Owner`,children:`Dana Wu`}),(0,O.jsx)(g,{label:`Modified`,children:(0,O.jsx)(`span`,{className:`tabular-nums`,children:`2026-10-14 09:12`})})]})}),children:(0,O.jsx)(S,{title:`Files`,children:(0,O.jsx)(`ul`,{className:`divide-y rounded-md border`,children:P.map(r=>(0,O.jsx)(`li`,{children:(0,O.jsx)(`button`,{type:`button`,"aria-pressed":e&&r===n,onClick:()=>{i(r),t(!0)},className:`flex h-8 w-full items-center px-3 text-start hover:bg-accent aria-pressed:bg-accent`,children:r})},r))})})})}var I=`import { useState } from "react"
import { AppShell, InspectorField, ShellHeader, ShellInspector, ShellInspectorToggle, ShellPage } from "@kitora/shell"
import { Sidebar, SidebarNav, type NavSection } from "@kitora/sidebar"
import { Folder } from "lucide-react"

const NAV: readonly NavSection[] = [{ id: "main", label: "", items: [{ id: "files", label: "Files", href: "/files", icon: { name: "folder" } }] }]
const FILES = ["Q3 report.pdf", "Logo.svg", "Pricing.xlsx"] as const

/** A right inspector on the dock's SplitView: open it from the header or by picking a row; drag its edge to resize. */
export function BasicInspector() {
  const [open, setOpen] = useState(true)
  const [file, setFile] = useState<string>(FILES[0])
  return (
    <AppShell
      location="/files"
      provider={{ icons: { folder: Folder }, defaultState: { width: 200 } }}
      sidebar={<Sidebar><SidebarNav nav={NAV} onNavigate={(_i, e) => e.preventDefault()} /></Sidebar>}
      header={<ShellHeader start={<span className="font-medium">Files</span>} end={<ShellInspectorToggle />} />}
      inspectorOpen={open}
      onInspectorOpenChange={setOpen}
      defaultInspectorWidth={260}
      inspector={
        <ShellInspector title={file}>
          <dl>
            <InspectorField label="Kind">{file.split(".").pop()?.toUpperCase()}</InspectorField>
            <InspectorField label="Owner">Dana Wu</InspectorField>
            <InspectorField label="Modified"><span className="tabular-nums">2026-10-14 09:12</span></InspectorField>
          </dl>
        </ShellInspector>
      }
    >
      <ShellPage title="Files">
        <ul className="divide-y rounded-md border">
          {FILES.map((name) => (
            <li key={name}>
              <button type="button" aria-pressed={open && name === file} onClick={() => { setFile(name); setOpen(true) }} className="flex h-8 w-full items-center px-3 text-start hover:bg-accent aria-pressed:bg-accent">
                {name}
              </button>
            </li>
          ))}
        </ul>
      </ShellPage>
    </AppShell>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>u(()=>import(`./inspector-CkR4ay6E.js`),[]));var L=[{id:`main`,label:``,items:[{id:`editor`,label:`Editor`,href:`/editor`,icon:{name:`file`}}]}];function R(){let[e,n]=(0,D.useState)(3);return(0,O.jsx)(f,{location:`/editor`,provider:{icons:{file:t},defaultState:{width:200}},sidebar:(0,O.jsx)(m,{children:(0,O.jsx)(p,{nav:L,onNavigate:(e,t)=>t.preventDefault()})}),header:(0,O.jsx)(x,{start:(0,O.jsx)(`span`,{className:`font-medium`,children:`Editor`})}),footer:(0,O.jsx)(w,{start:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(C,{icon:(0,O.jsx)(i,{}),children:`main`}),(0,O.jsx)(C,{tone:`success`,children:`Connected`})]}),end:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(C,{children:`Ln 12, Col 4`}),(0,O.jsx)(C,{icon:(0,O.jsx)(c,{}),title:`Sync now`,onClick:()=>n(0),children:e===0?`Synced just now`:`Synced ${e} min ago`})]})}),children:(0,O.jsx)(S,{title:`Editor`,description:`The status bar spans the sidebar and the content.`})})}var z=`import { useState } from "react"
import { AppShell, ShellHeader, ShellPage, ShellStatusBar, StatusItem } from "@kitora/shell"
import { Sidebar, SidebarNav, type NavSection } from "@kitora/sidebar"
import { FileCode2, GitBranch, RefreshCw } from "lucide-react"

const NAV: readonly NavSection[] = [{ id: "main", label: "", items: [{ id: "editor", label: "Editor", href: "/editor", icon: { name: "file" } }] }]

/** A status bar under the whole frame: text items, a tone dot, and items that are buttons. */
export function BasicStatusBar() {
  const [synced, setSynced] = useState(3)
  return (
    <AppShell
      location="/editor"
      provider={{ icons: { file: FileCode2 }, defaultState: { width: 200 } }}
      sidebar={<Sidebar><SidebarNav nav={NAV} onNavigate={(_i, e) => e.preventDefault()} /></Sidebar>}
      header={<ShellHeader start={<span className="font-medium">Editor</span>} />}
      footer={
        <ShellStatusBar
          start={<><StatusItem icon={<GitBranch />}>main</StatusItem><StatusItem tone="success">Connected</StatusItem></>}
          end={<><StatusItem>Ln 12, Col 4</StatusItem><StatusItem icon={<RefreshCw />} title="Sync now" onClick={() => setSynced(0)}>{synced === 0 ? "Synced just now" : \`Synced \${synced} min ago\`}</StatusItem></>}
        />
      }
    >
      <ShellPage title="Editor" description="The status bar spans the sidebar and the content." />
    </AppShell>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>u(()=>import(`./status-bar-Z_jc8MXL.js`),[]));var B=[{id:`main`,label:``,items:[{id:`home`,label:`Home`,href:`/`},{id:`orders`,label:`Orders`,href:`/orders`},{id:`customers`,label:`Customers`,href:`/customers`}]}];function V(){let[e,t]=(0,D.useState)(`/orders`),[n,r]=(0,D.useState)(0);return(0,O.jsx)(f,{band:`phone`,location:e,provider:{label:`Menu`},sidebar:(0,O.jsx)(m,{children:(0,O.jsx)(p,{nav:B,onNavigate:(e,n)=>{n.preventDefault(),e.href&&t(e.href)}})}),header:(0,O.jsx)(x,{start:(0,O.jsx)(`span`,{className:`font-medium`,children:`Shop`}),end:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(b,{onOpen:()=>r(e=>e+1)}),(0,O.jsx)(y,{})]})}),inspector:(0,O.jsx)(_,{title:`Filters`,children:(0,O.jsx)(`p`,{className:`text-muted-foreground`,children:`Status, date range and channel filters.`})}),inspectorLabel:`Filters`,children:(0,O.jsx)(S,{title:e===`/`?`Home`:e.slice(1,2).toUpperCase()+e.slice(2),description:`Search opened ${n} times`})})}var H=`import { useState } from "react"
import { AppShell, ShellHeader, ShellInspector, ShellInspectorToggle, ShellPage, ShellSearch } from "@kitora/shell"
import { Sidebar, SidebarNav, type NavSection } from "@kitora/sidebar"

const NAV: readonly NavSection[] = [{ id: "main", label: "", items: [{ id: "home", label: "Home", href: "/" }, { id: "orders", label: "Orders", href: "/orders" }, { id: "customers", label: "Customers", href: "/customers" }] }]

/**
 * On a phone the sidebar is a drawer behind the menu button, search shrinks to an icon and the
 * inspector opens as a sheet. \`band="phone"\` forces the phone band so it shows on a desktop.
 */
export function BasicMobile() {
  const [location, setLocation] = useState("/orders")
  const [searches, setSearches] = useState(0)
  return (
    <AppShell
      band="phone"
      location={location}
      provider={{ label: "Menu" }}
      sidebar={<Sidebar><SidebarNav nav={NAV} onNavigate={(item, e) => { e.preventDefault(); if (item.href) setLocation(item.href) }} /></Sidebar>}
      header={<ShellHeader start={<span className="font-medium">Shop</span>} end={<><ShellSearch onOpen={() => setSearches((n) => n + 1)} /><ShellInspectorToggle /></>} />}
      inspector={<ShellInspector title="Filters"><p className="text-muted-foreground">Status, date range and channel filters.</p></ShellInspector>}
      inspectorLabel="Filters"
    >
      <ShellPage title={location === "/" ? "Home" : location.slice(1, 2).toUpperCase() + location.slice(2)} description={\`Search opened \${searches} times\`} />
    </AppShell>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>u(()=>import(`./mobile-DLXg4nD8.js`),[]));function U(){return(0,O.jsxs)(`div`,{children:[(0,O.jsx)(n,{title:`Basics: the frame`,children:`The shell puts the sidebar kit's sidebar beside a header and the page, with an optional inspector on the right and a status bar along the bottom.`}),(0,O.jsx)(T,{n:1,title:`Sidebar, header and page`,blurb:`Breadcrumbs come from the nav with breadcrumbsFor, so the trail and the highlighted row always agree. Click a row or a crumb.`,code:M,children:(0,O.jsx)(E,{testId:`shell-minimal`,height:280,children:(0,O.jsx)(j,{})})}),(0,O.jsx)(T,{n:2,title:`The inspector`,blurb:`A resizable pane on the dock's SplitView. Toggle it from the header, pick a file to open it, drag its edge between 240 and 640 px.`,code:I,children:(0,O.jsx)(E,{testId:`shell-inspector`,height:260,children:(0,O.jsx)(F,{})})}),(0,O.jsx)(T,{n:3,title:`A status bar`,blurb:`Under the whole frame: text items, tone dots and items that are buttons (click the sync item).`,code:z,children:(0,O.jsx)(E,{testId:`shell-status-bar`,height:240,children:(0,O.jsx)(R,{})})}),(0,O.jsx)(T,{n:4,title:`On a phone`,blurb:`Forced to the phone band: the menu button opens the nav drawer, search shrinks to an icon, the inspector opens as a sheet.`,code:H,children:(0,O.jsx)(E,{testId:`shell-mobile`,height:280,className:`max-w-[380px]`,children:(0,O.jsx)(V,{})})})]})}export{U as component};