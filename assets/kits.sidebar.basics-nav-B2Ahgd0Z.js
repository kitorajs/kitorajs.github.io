import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./calendar-BlF-oehQ.js";import{s as n}from"./kit-docs-Cf27Kpa-.js";import{t as r}from"./file-text-DN2dXqcR.js";import{t as i}from"./house-n8ZCCI5M.js";import{t as a}from"./mail-C0QDlHH1.js";import{t as o}from"./highlight-C_SIKKRc.js";import{Ec as s,Uc as c,zc as l}from"./index-BZuUy872.js";import{n as u,t as d}from"./context-C6mmtqBC.js";import{a as f,d as p,i as m,r as h,s as g,t as _}from"./sidebar-IYAqkxSJ.js";import{a as v,c as y,i as b,n as x,o as S,r as C,t as w}from"./parts-BGYTk8Zo.js";import"./kit-gallery-BBavj2rC.js";import{t as T}from"./example-B67lLz1F.js";import{t as E}from"./-kits.sidebar.shared-B10Tgr4d.js";var D=l(),O=[{id:`main`,label:``,items:[{id:`inbox`,label:`Inbox`,href:`/inbox`,badge:{count:12}},{id:`mentions`,label:`Mentions`,href:`/mentions`,badge:{mentions:3}},{id:`general`,label:`# general`,href:`/general`,badge:{unread:!0}},{id:`deploys`,label:`Deploys`,href:`/deploys`,badge:{dot:`success`}},{id:`reports`,label:`Reports`,href:`/reports`,badge:{text:`New`}}]}];function k(){return(0,D.jsxs)(`div`,{className:`h-full`,children:[(0,D.jsx)(S,{}),(0,D.jsx)(u,{location:`/inbox`,label:`Badges`,children:(0,D.jsx)(y,{sidebar:(0,D.jsx)(h,{children:(0,D.jsx)(m,{nav:O,onNavigate:(e,t)=>t.preventDefault()})}),children:(0,D.jsx)(`div`,{className:`p-3 text-[13px] text-muted-foreground`,children:`Counts, mentions, unread, status dots and labels.`})})})]})}var A=`import { Sidebar, SidebarLayout, SidebarNav, SidebarProvider, SidebarStyles, type NavSection } from "@kitora/sidebar"

// A badge's fields combine: \`count\` a plain number, \`mentions\` the accent pill, \`unread\` a bold label, \`dot\` a status, \`text\` a short label.
const NAV: readonly NavSection[] = [
  {
    id: "main",
    label: "",
    items: [
      { id: "inbox", label: "Inbox", href: "/inbox", badge: { count: 12 } },
      { id: "mentions", label: "Mentions", href: "/mentions", badge: { mentions: 3 } },
      { id: "general", label: "# general", href: "/general", badge: { unread: true } },
      { id: "deploys", label: "Deploys", href: "/deploys", badge: { dot: "success" } },
      { id: "reports", label: "Reports", href: "/reports", badge: { text: "New" } },
    ],
  },
]

/** Badges and counts on rows; a collapsed parent rolls up its children's counts. */
export function BasicBadges() {
  return (
    <div className="h-full">
      <SidebarStyles />
      <SidebarProvider location="/inbox" label="Badges">
        <SidebarLayout sidebar={<Sidebar><SidebarNav nav={NAV} onNavigate={(_item, event) => event.preventDefault()} /></Sidebar>}>
          <div className="p-3 text-[13px] text-muted-foreground">Counts, mentions, unread, status dots and labels.</div>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>s(()=>import(`./badges-C4PozLZS.js`),[]));var j=e(c(),1),M=[{id:`people`,label:`Direct messages`,items:[{id:`ana`,label:`Ana Lima`,href:`/dm/ana`,icon:{emoji:`🦊`},presence:`online`,badge:{mentions:2},data:{starred:!0}},{id:`ben`,label:`Ben Okafor`,href:`/dm/ben`,icon:{emoji:`🐻`},presence:`away`,data:{starred:!1}},{id:`chen`,label:`Chen Wei`,href:`/dm/chen`,icon:{emoji:`🐼`},presence:`busy`,badge:{count:4},data:{starred:!1}},{id:`dara`,label:`Dara Quinn`,href:`/dm/dara`,icon:{emoji:`🦉`},presence:`offline`,data:{starred:!0}}]}];function N({row:e,state:t}){if(e.kind!==`item`)return(0,D.jsx)(g,{row:e,state:t});let{item:n}=e;return(0,D.jsxs)(`div`,{"data-nav-rowbox":``,className:`flex h-[var(--sb-row-h)] cursor-pointer items-center gap-2 rounded-[var(--sb-radius)] ps-1.5 pe-1 text-[13px] ${t.active?`bg-[var(--sbc-active-bg)] font-medium`:`hover:bg-[var(--sbc-hover)]`}`,children:[(0,D.jsxs)(`span`,{className:`relative inline-flex shrink-0`,children:[(0,D.jsx)(C,{icon:n.icon,size:18}),n.presence?(0,D.jsx)(b,{presence:n.presence}):null]}),(0,D.jsx)(`span`,{className:`min-w-0 flex-1 truncate`,children:t.link({className:`pointer-events-none outline-none`,children:(0,D.jsx)(o,{text:n.label,ranges:t.ranges,variant:`none`,markClassName:v})})}),n.data?.starred?(0,D.jsx)(w,{name:`star`,size:12,className:`shrink-0 text-amber-500`}):null,(0,D.jsx)(x,{badge:t.badge})]})}function P(){let[e,t]=(0,j.useState)(`/dm/ana`);return(0,D.jsxs)(`div`,{className:`h-full`,children:[(0,D.jsx)(S,{}),(0,D.jsx)(u,{location:e,label:`Messages`,children:(0,D.jsx)(y,{sidebar:(0,D.jsx)(h,{header:(0,D.jsx)(f,{placeholder:`Filter people`}),children:(0,D.jsx)(p,{nav:M,onNavigate:(n,r)=>{r.preventDefault(),t(n.href??e)},renderRow:(e,t)=>(0,D.jsx)(N,{row:e,state:t})})}),children:(0,D.jsxs)(`div`,{className:`p-3 text-[13px] text-muted-foreground`,children:[`Chat: `,e]})})})]})}var F=`import { useState } from "react"
import { Highlight } from "@kitora/ui/highlight"
import { Glyph, NavBadgeView, NavIconView, NavRowView, NavTree, PresenceDot, Sidebar, SidebarLayout, SidebarProvider, SidebarSearch, SIDEBAR_MARK_CLASS, SidebarStyles, type NavRow, type NavRowState, type NavSection } from "@kitora/sidebar"

// \`item.data\` is yours (typed through NavSection<T>): here, whether a person is starred.
interface Person {
  readonly starred: boolean
}

const NAV: readonly NavSection<Person>[] = [
  {
    id: "people",
    label: "Direct messages",
    items: [
      { id: "ana", label: "Ana Lima", href: "/dm/ana", icon: { emoji: "🦊" }, presence: "online", badge: { mentions: 2 }, data: { starred: true } },
      { id: "ben", label: "Ben Okafor", href: "/dm/ben", icon: { emoji: "🐻" }, presence: "away", data: { starred: false } },
      { id: "chen", label: "Chen Wei", href: "/dm/chen", icon: { emoji: "🐼" }, presence: "busy", badge: { count: 4 }, data: { starred: false } },
      { id: "dara", label: "Dara Quinn", href: "/dm/dara", icon: { emoji: "🦉" }, presence: "offline", data: { starred: true } },
    ],
  },
]

/** Your own item row from the styled parts; section headers and every other row kind keep NavRowView. */
function PersonRow({ row, state }: { readonly row: NavRow<Person>; readonly state: NavRowState }) {
  if (row.kind !== "item") return <NavRowView row={row} state={state} />
  const { item } = row
  return (
    <div data-nav-rowbox="" className={\`flex h-[var(--sb-row-h)] cursor-pointer items-center gap-2 rounded-[var(--sb-radius)] ps-1.5 pe-1 text-[13px] \${state.active ? "bg-[var(--sbc-active-bg)] font-medium" : "hover:bg-[var(--sbc-hover)]"}\`}>
      <span className="relative inline-flex shrink-0">
        <NavIconView icon={item.icon} size={18} />
        {item.presence ? <PresenceDot presence={item.presence} /> : null}
      </span>
      <span className="min-w-0 flex-1 truncate">{state.link({ className: "pointer-events-none outline-none", children: <Highlight text={item.label} ranges={state.ranges} variant="none" markClassName={SIDEBAR_MARK_CLASS} /> })}</span>
      {item.data?.starred ? <Glyph name="star" size={12} className="shrink-0 text-amber-500" /> : null}
      <NavBadgeView badge={state.badge} />
    </div>
  )
}

/** NavTree with \`renderRow\`: the tree keeps keyboard, filtering and active state; you draw the rows. Type in the search to see Highlight. */
export function BasicCustomRows() {
  const [location, setLocation] = useState("/dm/ana")
  return (
    <div className="h-full">
      <SidebarStyles />
      <SidebarProvider location={location} label="Messages">
        <SidebarLayout
          sidebar={
            <Sidebar header={<SidebarSearch placeholder="Filter people" />}>
              <NavTree nav={NAV} onNavigate={(item, event) => { event.preventDefault(); setLocation(item.href ?? location) }} renderRow={(row, state) => <PersonRow row={row} state={state} />} />
            </Sidebar>
          }
        >
          <div className="p-3 text-[13px] text-muted-foreground">Chat: {location}</div>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>s(()=>import(`./custom-rows-CCXRulsO.js`),[]));var I=[{id:`spaces`,label:`Spaces`,items:[{id:`product`,label:`Product`,icon:{initials:`P`,color:`#7c3aed`},children:[{id:`roadmap`,label:`Roadmap`,children:[{id:`q3`,label:`Q3`,href:`/q3`},{id:`q4`,label:`Q4`,href:`/q4`}]},{id:`specs`,label:`Specs`,href:`/specs`}]},{id:`marketing`,label:`Marketing`,icon:{initials:`M`,color:`#0369a1`},children:[{id:`launch`,label:`Launch plan`,href:`/launch`}]}]}];function L(){let[e,t]=(0,j.useState)(`/q4`);return(0,D.jsxs)(`div`,{className:`h-full`,children:[(0,D.jsx)(S,{}),(0,D.jsx)(u,{location:e,label:`Spaces`,defaultState:{expanded:[`product`,`roadmap`]},children:(0,D.jsx)(y,{sidebar:(0,D.jsx)(h,{children:(0,D.jsx)(m,{nav:I,onNavigate:(n,r)=>{r.preventDefault(),t(n.href??e)}})}),children:(0,D.jsxs)(`div`,{className:`p-3 text-[13px] text-muted-foreground`,children:[`Page: `,e]})})})]})}var R=`import { useState } from "react"
import { Sidebar, SidebarLayout, SidebarNav, SidebarProvider, SidebarStyles, type NavSection } from "@kitora/sidebar"

// \`children\` nest to any depth; the arrow (or ←/→ on a focused row) opens and closes a node.
const NAV: readonly NavSection[] = [
  {
    id: "spaces",
    label: "Spaces",
    items: [
      {
        id: "product",
        label: "Product",
        icon: { initials: "P", color: "#7c3aed" },
        children: [
          { id: "roadmap", label: "Roadmap", children: [{ id: "q3", label: "Q3", href: "/q3" }, { id: "q4", label: "Q4", href: "/q4" }] },
          { id: "specs", label: "Specs", href: "/specs" },
        ],
      },
      { id: "marketing", label: "Marketing", icon: { initials: "M", color: "#0369a1" }, children: [{ id: "launch", label: "Launch plan", href: "/launch" }] },
    ],
  },
]

/** \`defaultState.expanded\` lists the nodes open at first. */
export function BasicNestedTree() {
  const [location, setLocation] = useState("/q4")
  return (
    <div className="h-full">
      <SidebarStyles />
      <SidebarProvider location={location} label="Spaces" defaultState={{ expanded: ["product", "roadmap"] }}>
        <SidebarLayout sidebar={<Sidebar><SidebarNav nav={NAV} onNavigate={(item, event) => { event.preventDefault(); setLocation(item.href ?? location) }} /></Sidebar>}>
          <div className="p-3 text-[13px] text-muted-foreground">Page: {location}</div>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>s(()=>import(`./nested-tree-Bnqigmte.js`),[]));var z=[{id:`main`,label:``,items:[{id:`home`,label:`Home`,href:`/home`,icon:{emoji:`🏠`}},{id:`inbox`,label:`Inbox`,href:`/inbox`,icon:{emoji:`📥`}},{id:`projects`,label:`Projects`,href:`/projects`,icon:{emoji:`📁`}},{id:`settings`,label:`Settings`,href:`/settings`,icon:{emoji:`⚙️`}}]}];function B(){let[e,t]=(0,j.useState)(`/home`);return(0,D.jsxs)(`div`,{className:`h-full`,children:[(0,D.jsx)(S,{}),(0,D.jsx)(u,{location:e,label:`Main`,children:(0,D.jsx)(y,{sidebar:(0,D.jsx)(h,{children:(0,D.jsx)(m,{nav:z,onNavigate:(n,r)=>{r.preventDefault(),t(n.href??e)}})}),children:(0,D.jsxs)(`div`,{className:`p-3 text-[13px] text-muted-foreground`,children:[`Page: `,e]})})})]})}var V=`import { useState } from "react"
import { Sidebar, SidebarLayout, SidebarNav, SidebarProvider, SidebarStyles, type NavSection } from "@kitora/sidebar"

// One headless section (empty label) is a plain list of links.
const NAV: readonly NavSection[] = [
  {
    id: "main",
    label: "",
    items: [
      { id: "home", label: "Home", href: "/home", icon: { emoji: "🏠" } },
      { id: "inbox", label: "Inbox", href: "/inbox", icon: { emoji: "📥" } },
      { id: "projects", label: "Projects", href: "/projects", icon: { emoji: "📁" } },
      { id: "settings", label: "Settings", href: "/settings", icon: { emoji: "⚙️" } },
    ],
  },
]

/** The smallest sidebar: a provider, a layout, and a nav. \`location\` marks the active link. */
export function BasicNavList() {
  const [location, setLocation] = useState("/home")
  return (
    <div className="h-full">
      <SidebarStyles />
      <SidebarProvider location={location} label="Main">
        <SidebarLayout sidebar={<Sidebar><SidebarNav nav={NAV} onNavigate={(item, event) => { event.preventDefault(); setLocation(item.href ?? location) }} /></Sidebar>}>
          <div className="p-3 text-[13px] text-muted-foreground">Page: {location}</div>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>s(()=>import(`./plain-list-CuT105Dj.js`),[]));var H=[{id:`top`,label:``,items:[{id:`home`,label:`Home`,href:`/home`},{id:`inbox`,label:`Inbox`,href:`/inbox`}]},{id:`teams`,label:`Teams`,items:[{id:`eng`,label:`Engineering`,href:`/eng`},{id:`design`,label:`Design`,href:`/design`}]},{id:`channels`,label:`Channels`,limit:3,items:[`general`,`random`,`releases`,`support`,`hiring`].map(e=>({id:e,label:`# ${e}`,href:`/c/${e}`}))}];function U(){let[e,t]=(0,j.useState)(`/home`);return(0,D.jsxs)(`div`,{className:`h-full`,children:[(0,D.jsx)(S,{}),(0,D.jsx)(u,{location:e,label:`Sections`,children:(0,D.jsx)(y,{sidebar:(0,D.jsx)(h,{children:(0,D.jsx)(m,{nav:H,onNavigate:(n,r)=>{r.preventDefault(),t(n.href??e)}})}),children:(0,D.jsxs)(`div`,{className:`p-3 text-[13px] text-muted-foreground`,children:[`Page: `,e]})})})]})}var W={home:i,mail:a,calendar:t,docs:r},G=[{id:`apps`,label:``,items:[{id:`home`,label:`Home`,href:`/home`,icon:{name:`home`}},{id:`mail`,label:`Mail`,href:`/mail`,icon:{name:`mail`},badge:{count:3}},{id:`calendar`,label:`Calendar`,href:`/calendar`,icon:{name:`calendar`}},{id:`docs`,label:`Docs`,href:`/docs`,icon:{name:`docs`}}]}];function K(){let[e,t]=(0,j.useState)(`/mail`),n=n=>t(n??e);return(0,D.jsxs)(`div`,{className:`h-full`,children:[(0,D.jsx)(S,{}),(0,D.jsx)(u,{icons:W,location:e,label:`Apps`,children:(0,D.jsx)(y,{sidebar:(0,D.jsx)(h,{children:(0,D.jsx)(m,{nav:G,onNavigate:(e,t)=>{t.preventDefault(),n(e.href)}})}),children:(0,D.jsxs)(`div`,{className:`flex h-full`,children:[(0,D.jsx)(d,{value:`rail`,children:(0,D.jsx)(`div`,{className:`w-11 shrink-0 border-e bg-[var(--sbc-bg)]`,children:(0,D.jsx)(_,{nav:G,onNavigate:(e,t)=>{t.preventDefault(),n(e.href)}})})}),(0,D.jsxs)(`div`,{className:`p-3 text-[13px] text-muted-foreground`,children:[`Page: `,e,`. The panel and the forced rail share one nav.`]})]})})})]})}var q=`import { useState } from "react"
import { Calendar, FileText, Home, Mail } from "lucide-react"
import { NavRailList, Sidebar, SidebarLayout, SidebarModeOverride, SidebarNav, SidebarProvider, SidebarStyles, type NavSection, type SidebarIconComponent } from "@kitora/sidebar"

const ICONS: Readonly<Record<string, SidebarIconComponent>> = { home: Home, mail: Mail, calendar: Calendar, docs: FileText }

const NAV: readonly NavSection[] = [
  {
    id: "apps",
    label: "",
    items: [
      { id: "home", label: "Home", href: "/home", icon: { name: "home" } },
      { id: "mail", label: "Mail", href: "/mail", icon: { name: "mail" }, badge: { count: 3 } },
      { id: "calendar", label: "Calendar", href: "/calendar", icon: { name: "calendar" } },
      { id: "docs", label: "Docs", href: "/docs", icon: { name: "docs" } },
    ],
  },
]

/**
 * NavRailList is the icon rail SidebarNav draws when the sidebar is collapsed. SidebarModeOverride forces a
 * mode for its subtree, so the same nav can show as a rail beside the open panel (a compact app switcher).
 */
export function BasicRailList() {
  const [location, setLocation] = useState("/mail")
  const go = (href: string | undefined) => setLocation(href ?? location)
  return (
    <div className="h-full">
      <SidebarStyles />
      <SidebarProvider icons={ICONS} location={location} label="Apps">
        <SidebarLayout sidebar={<Sidebar><SidebarNav nav={NAV} onNavigate={(item, event) => { event.preventDefault(); go(item.href) }} /></Sidebar>}>
          <div className="flex h-full">
            <SidebarModeOverride value="rail">
              <div className="w-11 shrink-0 border-e bg-[var(--sbc-bg)]">
                <NavRailList nav={NAV} onNavigate={(item, event) => { event.preventDefault(); go(item.href) }} />
              </div>
            </SidebarModeOverride>
            <div className="p-3 text-[13px] text-muted-foreground">Page: {location}. The panel and the forced rail share one nav.</div>
          </div>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>s(()=>import(`./rail-list-DMwzxcT-.js`),[]));var J=`import { useState } from "react"
import { Sidebar, SidebarLayout, SidebarNav, SidebarProvider, SidebarStyles, type NavSection } from "@kitora/sidebar"

// Labelled sections get a header that collapses them; \`limit\` adds a "Show more" row.
const NAV: readonly NavSection[] = [
  { id: "top", label: "", items: [{ id: "home", label: "Home", href: "/home" }, { id: "inbox", label: "Inbox", href: "/inbox" }] },
  { id: "teams", label: "Teams", items: [{ id: "eng", label: "Engineering", href: "/eng" }, { id: "design", label: "Design", href: "/design" }] },
  {
    id: "channels",
    label: "Channels",
    limit: 3,
    items: ["general", "random", "releases", "support", "hiring"].map((c) => ({ id: c, label: \`# \${c}\`, href: \`/c/\${c}\` })),
  },
]

/** Click a section header to fold it; the fold state is kept by the provider. */
export function BasicSections() {
  const [location, setLocation] = useState("/home")
  return (
    <div className="h-full">
      <SidebarStyles />
      <SidebarProvider location={location} label="Sections">
        <SidebarLayout sidebar={<Sidebar><SidebarNav nav={NAV} onNavigate={(item, event) => { event.preventDefault(); setLocation(item.href ?? location) }} /></Sidebar>}>
          <div className="p-3 text-[13px] text-muted-foreground">Page: {location}</div>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>s(()=>import(`./sections-CAicxaY7.js`),[]));function Y(){return(0,D.jsxs)(`div`,{children:[(0,D.jsx)(n,{title:`Basics: the nav`,children:"The nav is plain data: sections of items, items with children, badges on any row. `SidebarNav` draws it."}),(0,D.jsx)(T,{n:1,title:`A plain nav list`,blurb:"One headless section of links. Click one: `location` moves and the row lights up.",code:V,children:(0,D.jsx)(E,{testId:`basic-list`,height:220,children:(0,D.jsx)(B,{})})}),(0,D.jsx)(T,{n:2,title:`Sections`,blurb:"Labelled sections fold from their header; `limit` hides the rest behind Show more.",code:J,children:(0,D.jsx)(E,{testId:`basic-sections`,height:300,children:(0,D.jsx)(U,{})})}),(0,D.jsx)(T,{n:3,title:`A nested tree`,blurb:"Items with `children` nest to any depth. Click the arrow, or focus a row and use ←/→.",code:R,children:(0,D.jsx)(E,{testId:`basic-tree`,height:260,children:(0,D.jsx)(L,{})})}),(0,D.jsx)(T,{n:4,title:`Badges and counts`,blurb:`Counts, mention pills, unread labels, status dots and short text labels.`,code:A,children:(0,D.jsx)(E,{testId:`basic-badges`,height:220,children:(0,D.jsx)(k,{})})}),(0,D.jsx)(T,{n:5,title:`Your own rows`,blurb:`NavTree with renderRow, drawing each person from NavIconView, PresenceDot, Highlight, Glyph and NavBadgeView; section headers keep NavRowView. Type in the filter.`,code:F,children:(0,D.jsx)(E,{testId:`basic-custom-rows`,height:240,children:(0,D.jsx)(P,{})})}),(0,D.jsx)(T,{n:6,title:`A forced rail`,blurb:`NavRailList is the collapsed icon rail; SidebarModeOverride forces the rail mode for its subtree, here beside the open panel.`,code:q,children:(0,D.jsx)(E,{testId:`basic-rail-list`,height:220,children:(0,D.jsx)(K,{})})})]})}export{Y as component};