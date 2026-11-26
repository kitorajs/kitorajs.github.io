import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./navigation-wiTk7OKN.js";import{s as n}from"./kit-docs-DpYhPoxM.js";import{t as r}from"./file-text-DcQTIaDt.js";import{t as i}from"./folder-CcDNU7s5.js";import{Bc as a,Cc as o,Ic as s}from"./index-q72zUtm9.js";import{n as c,r as l,t as u}from"./app-shell-DbSCxFyJ.js";import{n as d,t as f}from"./parts-D3IdCLGP.js";import{t as p}from"./table-of-contents-BmyWXNIl.js";import{r as m}from"./context-93xzOj9T.js";import{i as h,r as g}from"./sidebar-BdF__I6I.js";import{a as _,r as v,t as y}from"./inspector-Cdv9rGvc.js";import{n as b,t as x}from"./breadcrumbs-CaiP9isi.js";import{i as S,n as C,r as w}from"./header-CI1Q0lxx.js";import{n as T,r as E,t as D}from"./page-5VykEPaJ.js";import{n as O,r as k,t as A}from"./status-bar-C1rZtNbL.js";import"./kit-gallery-Atvibnty.js";import{t as j}from"./example-B8EaWveR.js";import{t as M}from"./-kits.shell.shared-Ervi91AK.js";var N=e(a(),1),P=s(),F=[{id:`main`,label:``,items:[{id:`docs`,label:`Docs`,href:`/docs`,icon:{name:`folder`},children:[{id:`guide`,label:`Guide`,href:`/docs/guide`,icon:{name:`file`}},{id:`api`,label:`API`,href:`/docs/api`,icon:{name:`file`}}]}]}],I=_(F);function L({onGo:e}){let{head:t,tail:n,current:r}=f({source:I}),i=[...t,...n];return(0,P.jsx)(x.Root,{children:i.map((t,n)=>(0,P.jsxs)(x.Item,{children:[n>0?(0,P.jsx)(`span`,{"aria-hidden":!0,className:`px-1 text-muted-foreground`,children:`/`}):null,t===r||t.href===void 0?(0,P.jsx)(x.Page,{current:t===r,children:t.label}):(0,P.jsx)(x.Link,{href:t.href,onClick:n=>{n.preventDefault(),e(t.href??`/`)},children:t.label})]},t.id))})}function R(){let e=d(`Details`);return e===null?null:(0,P.jsx)(`button`,{...e,"aria-label":void 0,className:`h-7 rounded-md border px-2 text-[12px] data-[state=open]:bg-accent`,children:e[`aria-pressed`]?`Hide details`:`Show details`})}function z(){let e=m();return(0,P.jsx)(O.Item,{children:e.inspectorOpen?`Inspector ${e.inspectorWidth} px`:`Inspector closed`})}function B(){let[e,t]=(0,N.useState)(`/docs/guide`);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(l,{}),(0,P.jsx)(c.Root,{location:e,withInspector:!0,defaultInspectorOpen:!0,defaultInspectorWidth:260,provider:{icons:{folder:i,file:r},defaultState:{width:200}},children:(0,P.jsx)(c.Frame,{sidebar:(0,P.jsx)(g,{children:(0,P.jsx)(h,{nav:F,onNavigate:(e,n)=>{n.preventDefault(),e.href&&t(e.href)}})}),header:(0,P.jsxs)(C.Root,{children:[(0,P.jsx)(C.MenuButton,{}),(0,P.jsx)(C.Start,{children:(0,P.jsx)(L,{onGo:t})}),(0,P.jsx)(C.End,{children:(0,P.jsx)(R,{})})]}),inspector:(0,P.jsxs)(y.Root,{children:[(0,P.jsxs)(y.Header,{children:[(0,P.jsx)(y.Title,{children:`Page info`}),(0,P.jsx)(y.Close,{})]}),(0,P.jsx)(y.Body,{children:(0,P.jsxs)(`dl`,{children:[(0,P.jsx)(y.Field,{label:`Path`,children:e}),(0,P.jsx)(y.Field,{label:`Owner`,children:`Dana Wu`})]})})]}),footer:(0,P.jsxs)(O.Root,{children:[(0,P.jsx)(O.Start,{children:(0,P.jsx)(O.Item,{tone:`success`,children:`Saved`})}),(0,P.jsx)(O.End,{children:(0,P.jsx)(z,{})})]}),children:(0,P.jsxs)(D.Root,{children:[(0,P.jsxs)(D.Header,{children:[(0,P.jsx)(D.Kicker,{children:`Docs`}),(0,P.jsxs)(D.Heading,{actions:(0,P.jsx)(`button`,{type:`button`,className:`h-7 rounded-md bg-primary px-2.5 text-[12px] text-primary-foreground`,children:`Publish`}),children:[(0,P.jsx)(D.Title,{children:e===`/docs/api`?`API`:e===`/docs`?`Docs`:`Guide`}),(0,P.jsx)(D.Description,{children:`Built from Shell, HeaderBar, Breadcrumbs, Inspector, StatusBar and Page parts.`})]})]}),(0,P.jsx)(D.Body,{children:(0,P.jsx)(`p`,{className:`text-muted-foreground`,children:`Click a nav row or a crumb; toggle the details; drag the inspector edge.`})})]})})})]})}var V=`import { useState } from "react"
import { Breadcrumbs, HeaderBar, Inspector, navCrumbSource, Page, Shell, ShellStyles, StatusBar, useCrumbs, useInspectorToggle, useShell } from "@kitora/shell"
import { Sidebar, SidebarNav, type NavSection } from "@kitora/sidebar"
import { FileText, Folder } from "lucide-react"

const NAV: readonly NavSection[] = [
  { id: "main", label: "", items: [{ id: "docs", label: "Docs", href: "/docs", icon: { name: "folder" }, children: [{ id: "guide", label: "Guide", href: "/docs/guide", icon: { name: "file" } }, { id: "api", label: "API", href: "/docs/api", icon: { name: "file" } }] }] },
]
const SOURCE = navCrumbSource(NAV)

/** The trail from the public parts and the headless \`useCrumbs\` hook: your own separator, your own link. */
function Trail({ onGo }: { readonly onGo: (href: string) => void }) {
  const { head, tail, current } = useCrumbs({ source: SOURCE })
  const steps = [...head, ...tail]
  return (
    <Breadcrumbs.Root>
      {steps.map((crumb, i) => (
        <Breadcrumbs.Item key={crumb.id}>
          {i > 0 ? <span aria-hidden className="px-1 text-muted-foreground">/</span> : null}
          {crumb === current || crumb.href === undefined ? <Breadcrumbs.Page current={crumb === current}>{crumb.label}</Breadcrumbs.Page> : <Breadcrumbs.Link href={crumb.href} onClick={(e) => { e.preventDefault(); onGo(crumb.href ?? "/") }}>{crumb.label}</Breadcrumbs.Link>}
        </Breadcrumbs.Item>
      ))}
    </Breadcrumbs.Root>
  )
}

/** A text toggle on the headless \`useInspectorToggle\` props, instead of the preset's icon button. */
function DetailsButton() {
  const props = useInspectorToggle("Details")
  if (props === null) return null
  // The visible text names the button, so the hook's icon-button label is dropped.
  return <button {...props} aria-label={undefined} className="h-7 rounded-md border px-2 text-[12px] data-[state=open]:bg-accent">{props["aria-pressed"] ? "Hide details" : "Show details"}</button>
}

/** The width the shell holds right now, read from the shell context. */
function WidthReadout() {
  const shell = useShell()
  return <StatusBar.Item>{shell.inspectorOpen ? \`Inspector \${shell.inspectorWidth} px\` : "Inspector closed"}</StatusBar.Item>
}

/**
 * AppShell rebuilt from its public parts: \`Shell.Root\` (providers and state) around \`Shell.Frame\`
 * (the regions), with the header, trail, inspector, status bar and page each assembled from its
 * compound parts. Nothing here is private API. \`ShellStyles\` is the shell's stylesheet (the inspector
 * sash and its slide); Shell.Root mounts it too and React keeps one copy, so mounting it in your root
 * layout just puts it in place before the first shell renders.
 */
export function BasicCompose() {
  const [location, setLocation] = useState("/docs/guide")
  return (
    <>
      <ShellStyles />
      <Shell.Root location={location} withInspector defaultInspectorOpen defaultInspectorWidth={260} provider={{ icons: { folder: Folder, file: FileText }, defaultState: { width: 200 } }}>
        <Shell.Frame
          sidebar={<Sidebar><SidebarNav nav={NAV} onNavigate={(item, e) => { e.preventDefault(); if (item.href) setLocation(item.href) }} /></Sidebar>}
          header={
            <HeaderBar.Root>
              <HeaderBar.MenuButton />
              <HeaderBar.Start><Trail onGo={setLocation} /></HeaderBar.Start>
              <HeaderBar.End><DetailsButton /></HeaderBar.End>
            </HeaderBar.Root>
          }
          inspector={
            <Inspector.Root>
              <Inspector.Header>
                <Inspector.Title>Page info</Inspector.Title>
                <Inspector.Close />
              </Inspector.Header>
              <Inspector.Body>
                <dl>
                  <Inspector.Field label="Path">{location}</Inspector.Field>
                  <Inspector.Field label="Owner">Dana Wu</Inspector.Field>
                </dl>
              </Inspector.Body>
            </Inspector.Root>
          }
          footer={
            <StatusBar.Root>
              <StatusBar.Start><StatusBar.Item tone="success">Saved</StatusBar.Item></StatusBar.Start>
              <StatusBar.End><WidthReadout /></StatusBar.End>
            </StatusBar.Root>
          }
        >
          <Page.Root>
            <Page.Header>
              <Page.Kicker>Docs</Page.Kicker>
              <Page.Heading actions={<button type="button" className="h-7 rounded-md bg-primary px-2.5 text-[12px] text-primary-foreground">Publish</button>}>
                <Page.Title>{location === "/docs/api" ? "API" : location === "/docs" ? "Docs" : "Guide"}</Page.Title>
                <Page.Description>Built from Shell, HeaderBar, Breadcrumbs, Inspector, StatusBar and Page parts.</Page.Description>
              </Page.Heading>
            </Page.Header>
            <Page.Body>
              <p className="text-muted-foreground">Click a nav row or a crumb; toggle the details; drag the inspector edge.</p>
            </Page.Body>
          </Page.Root>
        </Shell.Frame>
      </Shell.Root>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>o(()=>import(`./compose-BtKnAcpr.js`),[]));var H={"/":{label:`Acme`},"/billing":{label:`Billing`,parent:`/`},"/billing/invoices":{label:`Invoices`,parent:`/billing`},"/billing/invoices/inv-2041":{label:`INV-2041`,parent:`/billing/invoices`}},U={crumbsFor(e){let t=[];for(let n=e;n!==void 0;n=H[n]?.parent){let e=H[n];if(!e)break;t.unshift({id:n,label:e.label,href:n})}return t}},W=[{id:`main`,label:``,items:[{id:`billing`,label:`Billing`,href:`/billing`},{id:`invoices`,label:`Invoices`,href:`/billing/invoices`}]}];function G(){let[e,t]=(0,N.useState)(`/billing/invoices/inv-2041`),[n,r]=(0,N.useState)([]),i=(0,N.useMemo)(()=>{let e={width:300,open:!0};return{load:()=>e,save:t=>{e=t,r(e=>[t,...e].slice(0,3))}}},[]);return(0,P.jsx)(u,{location:e,renderLink:({href:e,onClick:n,children:r,...i})=>(0,P.jsx)(`a`,{...i,href:e,"data-router-link":``,onClick:r=>{n?.(r),r.preventDefault(),t(e)},children:r}),inspectorStore:i,provider:{defaultState:{width:200}},sidebar:(0,P.jsx)(g,{children:(0,P.jsx)(h,{nav:W,onNavigate:(e,n)=>{n.preventDefault(),e.href&&t(e.href)}})}),header:(0,P.jsx)(w,{start:(0,P.jsx)(b,{source:U}),end:(0,P.jsx)(S,{})}),inspector:(0,P.jsx)(v,{title:`Store log`,children:(0,P.jsx)(`ol`,{className:`flex flex-col gap-1 text-[12px] tabular-nums`,children:n.length===0?(0,P.jsx)(`li`,{className:`text-muted-foreground`,children:`Drag the edge or close me: each save lands here.`}):n.map((e,t)=>(0,P.jsxs)(`li`,{children:[`width `,e.width??`—`,` · `,e.open?`open`:`closed`]},t))})}),footer:(0,P.jsx)(A,{start:(0,P.jsxs)(k,{children:[`At `,e]}),end:(0,P.jsxs)(k,{children:[n.length,` saves`]})}),children:(0,P.jsx)(E,{title:H[e]?.label??`Not found`,tabs:(0,P.jsx)(T,{tabs:[{id:`/billing`,label:`Overview`,href:`/billing`},{id:`/billing/invoices`,label:`Invoices`,href:`/billing/invoices`}],active:e.startsWith(`/billing/invoices`)?`/billing/invoices`:`/billing`}),children:(0,P.jsx)(`p`,{className:`text-muted-foreground`,children:`Crumbs and tabs navigate through the custom link; the trail comes from the route table.`})})})}var K=`import { useMemo, useState, type MouseEvent } from "react"
import { AppShell, PageTabs, ShellBreadcrumbs, ShellHeader, ShellInspector, ShellInspectorToggle, ShellPage, ShellStatusBar, StatusItem, type CrumbSource, type InspectorSnapshot, type InspectorStore, type RenderShellLink } from "@kitora/shell"
import { Sidebar, SidebarNav, type NavSection } from "@kitora/sidebar"

// The app's own route table: the breadcrumb source reads it instead of the nav.
const ROUTES: Readonly<Record<string, { readonly label: string; readonly parent?: string }>> = {
  "/": { label: "Acme" },
  "/billing": { label: "Billing", parent: "/" },
  "/billing/invoices": { label: "Invoices", parent: "/billing" },
  "/billing/invoices/inv-2041": { label: "INV-2041", parent: "/billing/invoices" },
}

/** A custom \`CrumbSource\`: walk the route table's parents. */
const routeCrumbs: CrumbSource = {
  crumbsFor(location) {
    const trail = []
    for (let path: string | undefined = location; path !== undefined; path = ROUTES[path]?.parent) {
      const route = ROUTES[path]
      if (!route) break
      trail.unshift({ id: path, label: route.label, href: path })
    }
    return trail
  },
}

const NAV: readonly NavSection[] = [{ id: "main", label: "", items: [{ id: "billing", label: "Billing", href: "/billing" }, { id: "invoices", label: "Invoices", href: "/billing/invoices" }] }]

/**
 * Three seams swapped at once: breadcrumbs from the app's route table (a \`CrumbSource\`), every
 * shell link drawn by the app's "router" (\`renderLink\`), and the inspector width remembered by
 * the app's own settings store (an \`InspectorStore\`; here it logs each save).
 */
export function BasicCustomAdapters() {
  const [location, setLocation] = useState("/billing/invoices/inv-2041")
  const [saves, setSaves] = useState<readonly InspectorSnapshot[]>([])
  const store = useMemo<InspectorStore>(() => {
    let last: InspectorSnapshot | null = { width: 300, open: true }
    return {
      load: () => last,
      save: (snapshot) => {
        last = snapshot
        setSaves((list) => [snapshot, ...list].slice(0, 3))
      },
    }
  }, [])
  // The app's router link: intercept the click and navigate in place, marked for the router.
  const renderLink: RenderShellLink = ({ href, onClick, children, ...rest }) => (
    <a
      {...rest}
      href={href}
      data-router-link=""
      onClick={(event: MouseEvent<HTMLAnchorElement>) => {
        onClick?.(event)
        event.preventDefault()
        setLocation(href)
      }}
    >
      {children}
    </a>
  )
  return (
    <AppShell
      location={location}
      renderLink={renderLink}
      inspectorStore={store}
      provider={{ defaultState: { width: 200 } }}
      sidebar={<Sidebar><SidebarNav nav={NAV} onNavigate={(item, e) => { e.preventDefault(); if (item.href) setLocation(item.href) }} /></Sidebar>}
      header={<ShellHeader start={<ShellBreadcrumbs source={routeCrumbs} />} end={<ShellInspectorToggle />} />}
      inspector={
        <ShellInspector title="Store log">
          <ol className="flex flex-col gap-1 text-[12px] tabular-nums">
            {saves.length === 0 ? <li className="text-muted-foreground">Drag the edge or close me: each save lands here.</li> : saves.map((s, i) => <li key={i}>width {s.width ?? "—"} · {s.open ? "open" : "closed"}</li>)}
          </ol>
        </ShellInspector>
      }
      footer={<ShellStatusBar start={<StatusItem>At {location}</StatusItem>} end={<StatusItem>{saves.length} saves</StatusItem>} />}
    >
      <ShellPage title={ROUTES[location]?.label ?? "Not found"} tabs={<PageTabs tabs={[{ id: "/billing", label: "Overview", href: "/billing" }, { id: "/billing/invoices", label: "Invoices", href: "/billing/invoices" }]} active={location.startsWith("/billing/invoices") ? "/billing/invoices" : "/billing"} />}>
        <p className="text-muted-foreground">Crumbs and tabs navigate through the custom link; the trail comes from the route table.</p>
      </ShellPage>
    </AppShell>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>o(()=>import(`./custom-adapters-omZXC9Si.js`),[]));var q=[`Overview`,`Install`,`Configure`,`Deploy`,`Troubleshoot`];function J(){let e=(0,N.useRef)(null);return(0,P.jsxs)(`div`,{className:`flex gap-6 p-4`,children:[(0,P.jsx)(`div`,{ref:e,tabIndex:0,"aria-label":`Article`,className:`h-64 flex-1 overflow-y-auto rounded-lg border p-4 text-[13px] leading-6 outline-none focus-visible:ring-2 focus-visible:ring-ring/50`,children:q.map(e=>(0,P.jsxs)(`section`,{className:`pb-8`,children:[(0,P.jsx)(`h2`,{id:`shell-toc-${e.toLowerCase()}`,className:`mb-2 text-sm font-semibold`,children:e}),(0,P.jsx)(`p`,{className:`text-muted-foreground`,children:`A few lines of text so the article scrolls, and the list beside it follows the section being read.`})]},e))}),(0,P.jsx)(p,{container:e,scrollRoot:e,updateHash:!1,sticky:!0,className:`w-40 shrink-0`})]})}var Y=`import { useRef } from "react"
import { TableOfContents } from "@kitora/shell"

const SECTIONS = ["Overview", "Install", "Configure", "Deploy", "Troubleshoot"]

/** A page with an "On this page" list: headings read from the article, the section in view marked by the scroll spy, smooth scrolling unless reduced motion. */
export function BasicTableOfContents() {
  const article = useRef<HTMLDivElement | null>(null)
  return (
    <div className="flex gap-6 p-4">
      <div ref={article} tabIndex={0} aria-label="Article" className="h-64 flex-1 overflow-y-auto rounded-lg border p-4 text-[13px] leading-6 outline-none focus-visible:ring-2 focus-visible:ring-ring/50">
        {SECTIONS.map((title) => (
          <section key={title} className="pb-8">
            <h2 id={\`shell-toc-\${title.toLowerCase()}\`} className="mb-2 text-sm font-semibold">
              {title}
            </h2>
            <p className="text-muted-foreground">A few lines of text so the article scrolls, and the list beside it follows the section being read.</p>
          </section>
        ))}
      </div>
      <TableOfContents container={article} scrollRoot={article} updateHash={false} sticky className="w-40 shrink-0" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>o(()=>import(`./table-of-contents-CgJ3J2pB.js`),[]));var X=[{id:`home`,label:`Home`,href:`#home`},{id:`product`,label:`Product`,children:[{id:`analytics`,label:`Analytics`,href:`#analytics`,description:`Dashboards, funnels and reports.`},{id:`automations`,label:`Automations`,href:`#automations`,description:`Rules that run on every event.`},{id:`integrations`,label:`Integrations`,href:`#integrations`,description:`Connect the tools you already use.`}]},{id:`resources`,label:`Resources`,children:[{id:`docs`,label:`Documentation`,href:`#docs`,description:`Guides and the API reference.`},{id:`changelog`,label:`Changelog`,href:`#changelog`,description:`What shipped this month.`}]},{id:`pricing`,label:`Pricing`,href:`#pricing`}];function Z(){let[e,n]=(0,N.useState)(`#analytics`);return(0,P.jsxs)(`div`,{className:`flex w-full max-w-3xl flex-col gap-3 text-[13px]`,children:[(0,P.jsxs)(`header`,{className:`flex h-12 items-center gap-3 rounded-lg border bg-background px-3`,children:[(0,P.jsx)(`span`,{className:`font-semibold`,children:`Acme`}),(0,P.jsx)(t,{items:X,location:e,onNavigate:(e,t)=>{t.preventDefault(),n(e.href??`#${e.id}`)},className:`ms-auto`})]}),(0,P.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Current page: `,(0,P.jsx)(`span`,{className:`font-medium text-foreground`,children:e}),`. Narrow the window below 768 px to get the menu button and its sheet.`]})]})}var Q=`import { useState } from "react"
import { ShellNavigationMenu } from "@kitora/shell"
import type { NavItem } from "@kitora/sidebar"

const NAV: readonly NavItem[] = [
  { id: "home", label: "Home", href: "#home" },
  {
    id: "product",
    label: "Product",
    children: [
      { id: "analytics", label: "Analytics", href: "#analytics", description: "Dashboards, funnels and reports." },
      { id: "automations", label: "Automations", href: "#automations", description: "Rules that run on every event." },
      { id: "integrations", label: "Integrations", href: "#integrations", description: "Connect the tools you already use." },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    children: [
      { id: "docs", label: "Documentation", href: "#docs", description: "Guides and the API reference." },
      { id: "changelog", label: "Changelog", href: "#changelog", description: "What shipped this month." },
    ],
  },
  { id: "pricing", label: "Pricing", href: "#pricing" },
]

export function BasicResponsiveNavigation() {
  const [location, setLocation] = useState("#analytics")
  return (
    <div className="flex w-full max-w-3xl flex-col gap-3 text-[13px]">
      <header className="flex h-12 items-center gap-3 rounded-lg border bg-background px-3">
        <span className="font-semibold">Acme</span>
        <ShellNavigationMenu
          items={NAV}
          location={location}
          onNavigate={(item, e) => {
            e.preventDefault()
            setLocation(item.href ?? \`#\${item.id}\`)
          }}
          className="ms-auto"
        />
      </header>
      <p className="text-muted-foreground">
        Current page: <span className="font-medium text-foreground">{location}</span>. Narrow the window below 768 px to get the menu button and its sheet.
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>o(()=>import(`./responsive-navigation-C4IuSlqk.js`),[]));function $(){return(0,P.jsxs)(`div`,{children:[(0,P.jsx)(n,{title:`Basics: compose and adapt`,children:`Every preset is built from public parts, so you can rebuild it with your own pieces; and every seam (breadcrumb source, links, inspector storage, the search shortcut) takes your own implementation.`}),(0,P.jsx)(j,{n:1,title:`Compose your own`,blurb:`AppShell rebuilt from Shell.Root and Shell.Frame, with the header, trail, inspector, status bar and page assembled from their parts and the headless hooks.`,code:V,children:(0,P.jsx)(M,{testId:`shell-compose`,height:300,children:(0,P.jsx)(B,{})})}),(0,P.jsx)(j,{n:2,title:`Custom adapters`,blurb:`Breadcrumbs from the app's route table, every shell link drawn by the app's router, and the inspector width saved to the app's own store (the inspector logs each save).`,code:K,children:(0,P.jsx)(M,{testId:`shell-adapters`,height:300,children:(0,P.jsx)(G,{})})}),(0,P.jsx)(j,{n:3,title:`Table of contents`,blurb:'`TableOfContents` reads the headings of a container, nests them by level, marks the section being read with `aria-current="location"` and scrolls smoothly to a picked one (a jump under reduced motion).',code:Y,children:(0,P.jsx)(M,{testId:`shell-toc`,height:360,children:(0,P.jsx)(J,{})})}),(0,P.jsx)(j,{n:4,title:`Responsive header navigation`,blurb:"`ShellNavigationMenu` draws one list of items as a navigation menu on wide screens and, below `collapseBelow`, as a menu button that opens a sheet with an accordion per section.",code:Q,children:(0,P.jsx)(M,{testId:`shell-responsive-nav`,height:300,children:(0,P.jsx)(Z,{})})})]})}export{$ as component};