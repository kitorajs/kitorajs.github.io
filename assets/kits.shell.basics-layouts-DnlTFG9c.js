import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./switch-CA6hUnoS.js";import{s as n}from"./kit-docs-CvNs0WqT.js";import{t as r}from"./git-pull-request-C5QdODD6.js";import{t as i}from"./heart-CIJxXSi5.js";import{t as a}from"./house-Bw0k7HMz.js";import{t as ee}from"./inbox-CWroxAY7.js";import{t as te}from"./package-CsbTJXU2.js";import{t as o}from"./search-BZ0gLa1o.js";import{t as s}from"./shopping-bag-COnnBv4X.js";import{t as c}from"./user-BsKaLW_5.js";import{Bc as l,Cc as u,Ic as d}from"./index-9y5uwRd3.js";import{t as f}from"./app-shell-BnG-pVzl.js";import{n as p,t as m}from"./bottom-nav-jCEFzch-.js";import{i as h,r as g}from"./sidebar-VPUXi6Th.js";import{t as _}from"./rail-CgO30nEc.js";import{c as v,o as y,r as b}from"./header-DF1yBiUt.js";import{r as x}from"./page-CZ6HYoN0.js";import{i as S,n as C,r as w,t as T}from"./settings-DTchWft3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as E}from"./example-CZLJLtIC.js";import{t as D}from"./-kits.shell.shared-C5FDgny3.js";var O=e(l(),1),k=d(),A=[{id:`acme`,label:`Acme`,icon:{initials:`AC`,color:`#4f46e5`}},{id:`globex`,label:`Globex`,icon:{initials:`GX`,color:`#047857`},badge:{count:3}}],j={acme:[{id:`c`,label:`Channels`,items:[{id:`general`,label:`# general`,href:`/general`},{id:`eng`,label:`# eng`,href:`/eng`}]}],globex:[{id:`c`,label:`Channels`,items:[{id:`sales`,label:`# sales`,href:`/sales`},{id:`support`,label:`# support`,href:`/support`}]}]};function M(){let[e,t]=(0,O.useState)(`acme`),[n,r]=(0,O.useState)(`/general`);return(0,k.jsx)(f,{layout:`double`,location:n,provider:{defaultState:{width:200}},rail:(0,k.jsx)(_,{label:`Workspaces`,items:A,value:e,onSelect:e=>{t(e),r(j[e]?.[0]?.items[0]?.href??`/`)}}),sidebar:(0,k.jsx)(g,{children:(0,k.jsx)(h,{nav:j[e]??[],onNavigate:(e,t)=>{t.preventDefault(),e.href&&r(e.href)}})}),header:(0,k.jsx)(b,{start:(0,k.jsx)(`span`,{className:`font-medium`,children:n.replace(`/`,`# `)})}),children:(0,k.jsx)(x,{title:n.replace(`/`,`# `),description:`Workspace ${e}`})})}var N=`import { useState } from "react"
import { AppShell, ShellHeader, ShellPage } from "@kitora/shell"
import { AppRail, Sidebar, SidebarNav, type AppRailItem, type NavSection } from "@kitora/sidebar"

const WORKSPACES: readonly AppRailItem[] = [
  { id: "acme", label: "Acme", icon: { initials: "AC", color: "#4f46e5" } },
  { id: "globex", label: "Globex", icon: { initials: "GX", color: "#047857" }, badge: { count: 3 } },
]
const NAV: Record<string, readonly NavSection[]> = {
  acme: [{ id: "c", label: "Channels", items: [{ id: "general", label: "# general", href: "/general" }, { id: "eng", label: "# eng", href: "/eng" }] }],
  globex: [{ id: "c", label: "Channels", items: [{ id: "sales", label: "# sales", href: "/sales" }, { id: "support", label: "# support", href: "/support" }] }],
}

/** The double layout: a workspace rail outside the sidebar (Slack, Discord). The rail hides on phones. */
export function BasicDouble() {
  const [ws, setWs] = useState("acme")
  const [location, setLocation] = useState("/general")
  return (
    <AppShell
      layout="double"
      location={location}
      provider={{ defaultState: { width: 200 } }}
      rail={<AppRail label="Workspaces" items={WORKSPACES} value={ws} onSelect={(id) => { setWs(id); setLocation(NAV[id]?.[0]?.items[0]?.href ?? "/") }} />}
      sidebar={<Sidebar><SidebarNav nav={NAV[ws] ?? []} onNavigate={(item, e) => { e.preventDefault(); if (item.href) setLocation(item.href) }} /></Sidebar>}
      header={<ShellHeader start={<span className="font-medium">{location.replace("/", "# ")}</span>} />}
    >
      <ShellPage title={location.replace("/", "# ")} description={\`Workspace \${ws}\`} />
    </AppShell>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>u(()=>import(`./double-DcAzEYHQ.js`),[]));var P=[{id:`overview`,label:`Overview`,href:`/`},{id:`deployments`,label:`Deployments`,href:`/deployments`},{id:`analytics`,label:`Analytics`,href:`/analytics`},{id:`settings`,label:`Settings`,href:`/settings`}],F=[{id:`main`,label:``,items:P}];function I({band:e}){let[t,n]=(0,O.useState)(`/deployments`),r=(e,t)=>{t.preventDefault(),e.href&&n(e.href)};return(0,k.jsx)(f,{layout:`top-nav`,band:e,location:t,sidebar:(0,k.jsx)(g,{children:(0,k.jsx)(h,{nav:F,onNavigate:r})}),header:(0,k.jsx)(b,{start:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`span`,{className:`font-semibold`,children:`▲ Acme`}),(0,k.jsx)(v,{items:P,onNavigate:r})]})}),children:(0,k.jsx)(x,{title:P.find(e=>e.href===t)?.label??`Overview`})})}var L=`import { useState } from "react"
import { AppShell, ShellHeader, ShellPage, TopNav } from "@kitora/shell"
import { Sidebar, SidebarNav, type NavItem, type NavSection } from "@kitora/sidebar"

const LINKS: readonly NavItem[] = [
  { id: "overview", label: "Overview", href: "/" },
  { id: "deployments", label: "Deployments", href: "/deployments" },
  { id: "analytics", label: "Analytics", href: "/analytics" },
  { id: "settings", label: "Settings", href: "/settings" },
]
const DRAWER: readonly NavSection[] = [{ id: "main", label: "", items: LINKS }]

/** The top-nav layout: links in the header on desktops; on phones the same links move into a drawer behind the menu button. */
export function BasicTopNav({ band }: { readonly band?: "phone" }) {
  const [location, setLocation] = useState("/deployments")
  const go = (item: NavItem, e: { preventDefault: () => void }) => { e.preventDefault(); if (item.href) setLocation(item.href) }
  return (
    <AppShell
      layout="top-nav"
      band={band}
      location={location}
      sidebar={<Sidebar><SidebarNav nav={DRAWER} onNavigate={go} /></Sidebar>}
      header={<ShellHeader start={<><span className="font-semibold">▲ Acme</span><TopNav items={LINKS} onNavigate={go} /></>} />}
    >
      <ShellPage title={LINKS.find((l) => l.href === location)?.label ?? "Overview"} />
    </AppShell>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>u(()=>import(`./top-nav-DWDk3uhw.js`),[]));var R=[{id:`main`,label:``,items:[{id:`repos`,label:`Repositories`,href:`/repos`,icon:{name:`repo`}},{id:`prs`,label:`Pull requests`,href:`/prs`,icon:{name:`pr`}}]}];function z(){return(0,k.jsx)(f,{headerPlacement:`full`,location:`/repos`,provider:{icons:{repo:te,pr:r},defaultState:{width:220}},sidebar:(0,k.jsx)(g,{children:(0,k.jsx)(h,{nav:R,onNavigate:(e,t)=>t.preventDefault()})}),header:(0,k.jsx)(b,{start:(0,k.jsx)(`span`,{className:`font-semibold`,children:`Acme`}),center:(0,k.jsx)(y,{onOpen:()=>void 0})}),children:(0,k.jsx)(x,{title:`Repositories`})})}var B=`import { AppShell, ShellHeader, ShellPage, ShellSearch } from "@kitora/shell"
import { Sidebar, SidebarNav, type NavSection } from "@kitora/sidebar"
import { GitPullRequest, Package } from "lucide-react"

const NAV: readonly NavSection[] = [{ id: "main", label: "", items: [{ id: "repos", label: "Repositories", href: "/repos", icon: { name: "repo" } }, { id: "prs", label: "Pull requests", href: "/prs", icon: { name: "pr" } }] }]

/** \`headerPlacement="full"\`: the header runs across the whole width and the sidebar sits under it (GitHub, Jira). */
export function BasicFullHeader() {
  return (
    <AppShell
      headerPlacement="full"
      location="/repos"
      provider={{ icons: { repo: Package, pr: GitPullRequest }, defaultState: { width: 220 } }}
      sidebar={<Sidebar><SidebarNav nav={NAV} onNavigate={(_i, e) => e.preventDefault()} /></Sidebar>}
      header={<ShellHeader start={<span className="font-semibold">Acme</span>} center={<ShellSearch onOpen={() => undefined} />} />}
    >
      <ShellPage title="Repositories" />
    </AppShell>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>u(()=>import(`./full-header-C_9kwQsU.js`),[]));var V=[{id:`profile`,label:`Profile`,group:`Account`},{id:`notifications`,label:`Notifications`,group:`Account`},{id:`general`,label:`General`,group:`Workspace`},{id:`members`,label:`Members`,group:`Workspace`}];function H(){let[e,n]=(0,O.useState)(`notifications`),[r,i]=(0,O.useState)(!0);return(0,k.jsx)(C,{sections:V,active:e,onSelect:(e,t)=>{t.preventDefault(),n(e.id)},children:(0,k.jsx)(S,{title:V.find(t=>t.id===e)?.label,description:`Changes save as you go.`,children:(0,k.jsx)(w,{label:`Email digests`,description:`A daily summary of what changed.`,htmlFor:`digest`,children:(0,k.jsx)(t,{id:`digest`,checked:r,onCheckedChange:i})})})})}var U=`import { useState } from "react"
import { SettingsLayout, SettingsRow, SettingsSection, type SettingsSectionLink } from "@kitora/shell"
import { Switch } from "@kitora/ui/switch"

const SECTIONS: readonly SettingsSectionLink[] = [
  { id: "profile", label: "Profile", group: "Account" },
  { id: "notifications", label: "Notifications", group: "Account" },
  { id: "general", label: "General", group: "Workspace" },
  { id: "members", label: "Members", group: "Workspace" },
]

/** The settings preset: a grouped section nav that turns into a row of links when its container is narrow. */
export function BasicSettings() {
  const [active, setActive] = useState("notifications")
  const [email, setEmail] = useState(true)
  return (
    <SettingsLayout sections={SECTIONS} active={active} onSelect={(s, e) => { e.preventDefault(); setActive(s.id) }}>
      <SettingsSection title={SECTIONS.find((s) => s.id === active)?.label} description="Changes save as you go.">
        <SettingsRow label="Email digests" description="A daily summary of what changed." htmlFor="digest">
          <Switch id="digest" checked={email} onCheckedChange={setEmail} />
        </SettingsRow>
      </SettingsSection>
    </SettingsLayout>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>u(()=>import(`./settings-KlP8RqYD.js`),[]));var W=[{id:`profile`,label:`Profile`},{id:`security`,label:`Security`}],G=[{id:`plan`,label:`Plan`}];function K(){let[e,n]=(0,O.useState)(`security`),[r,i]=(0,O.useState)(!1),a=t=>(0,k.jsx)(T.Link,{section:t,current:t.id===e,onClick:e=>{e.preventDefault(),n(t.id)}},t.id);return(0,k.jsxs)(T.Root,{children:[(0,k.jsxs)(T.Nav,{label:`Account settings`,children:[(0,k.jsx)(T.Group,{first:!0,children:`Account`}),W.map(a),(0,k.jsx)(T.Group,{children:`Billing`}),G.map(a)]}),(0,k.jsx)(T.Body,{children:(0,k.jsx)(T.Section,{title:[...W,...G].find(t=>t.id===e)?.label,description:`Built from Settings.Root, Nav, Group, Link, Body, Section and Row.`,children:(0,k.jsx)(T.Row,{label:`Two-factor sign-in`,description:`Ask for a code from your phone.`,htmlFor:`two-factor`,children:(0,k.jsx)(t,{id:`two-factor`,checked:r,onCheckedChange:i})})})})]})}var q=`import { useState } from "react"
import { Settings, type SettingsSectionLink } from "@kitora/shell"
import { Switch } from "@kitora/ui/switch"

const ACCOUNT: readonly SettingsSectionLink[] = [
  { id: "profile", label: "Profile" },
  { id: "security", label: "Security" },
]
const BILLING: readonly SettingsSectionLink[] = [{ id: "plan", label: "Plan" }]

/** SettingsLayout rebuilt from the Settings parts: your own groups, your own order, an extra badge in the body. */
export function BasicSettingsParts() {
  const [active, setActive] = useState("security")
  const [twoFactor, setTwoFactor] = useState(false)
  const link = (section: SettingsSectionLink) => (
    <Settings.Link key={section.id} section={section} current={section.id === active} onClick={(e) => { e.preventDefault(); setActive(section.id) }} />
  )
  return (
    <Settings.Root>
      <Settings.Nav label="Account settings">
        <Settings.Group first>Account</Settings.Group>
        {ACCOUNT.map(link)}
        <Settings.Group>Billing</Settings.Group>
        {BILLING.map(link)}
      </Settings.Nav>
      <Settings.Body>
        <Settings.Section title={[...ACCOUNT, ...BILLING].find((s) => s.id === active)?.label} description="Built from Settings.Root, Nav, Group, Link, Body, Section and Row.">
          <Settings.Row label="Two-factor sign-in" description="Ask for a code from your phone." htmlFor="two-factor">
            <Switch id="two-factor" checked={twoFactor} onCheckedChange={setTwoFactor} />
          </Settings.Row>
        </Settings.Section>
      </Settings.Body>
    </Settings.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>u(()=>import(`./settings-parts-DRWp2lZV.js`),[]));var J=[{id:`main`,label:``,items:[{id:`home`,label:`Home`,href:`/`},{id:`inbox`,label:`Inbox`,href:`/inbox`},{id:`search`,label:`Search`,href:`/search`},{id:`profile`,label:`Profile`,href:`/profile`}]}],Y=[{id:`home`,href:`/`,icon:(0,k.jsx)(a,{}),label:`Home`},{id:`inbox`,href:`/inbox`,icon:(0,k.jsx)(ee,{}),label:`Inbox`,badge:2,badgeLabel:`2 unread`},{id:`search`,href:`/search`,icon:(0,k.jsx)(o,{}),label:`Search`},{id:`profile`,href:`/profile`,icon:(0,k.jsx)(c,{}),label:`Profile`}],X={"/":`Home`,"/inbox":`Inbox`,"/search":`Search`,"/profile":`Profile`};function Z(){let[e,t]=(0,O.useState)(`/inbox`);return(0,k.jsx)(f,{band:`phone`,location:e,provider:{label:`Menu`},renderLink:({href:e,children:n,...r})=>(0,k.jsx)(`a`,{...r,href:e,onClick:n=>{n.preventDefault(),t(e)},children:n}),sidebar:(0,k.jsx)(g,{children:(0,k.jsx)(h,{nav:J,onNavigate:(e,n)=>{n.preventDefault(),e.href&&t(e.href)}})}),header:(0,k.jsx)(b,{start:(0,k.jsx)(`span`,{className:`font-medium`,children:`Mail`})}),bottomNav:(0,k.jsx)(p,{items:Y,hideOnScroll:!0}),children:(0,k.jsx)(x,{title:X[e]??`Page`,description:`Scroll the page: the bar hides going down and comes back going up.`,children:Array.from({length:24},(e,t)=>(0,k.jsxs)(`a`,{href:`#message-${t+1}`,className:`block border-b border-border py-3 text-[13px] hover:bg-muted/50`,children:[`Message `,t+1]},t))})})}var Q=`import { HomeIcon, InboxIcon, SearchIcon, UserIcon } from "lucide-react"
import { useState } from "react"
import { AppShell, ShellBottomNav, ShellHeader, ShellPage, type ShellBottomNavItem } from "@kitora/shell"
import { Sidebar, SidebarNav, type NavSection } from "@kitora/sidebar"

const NAV: readonly NavSection[] = [{ id: "main", label: "", items: [{ id: "home", label: "Home", href: "/" }, { id: "inbox", label: "Inbox", href: "/inbox" }, { id: "search", label: "Search", href: "/search" }, { id: "profile", label: "Profile", href: "/profile" }] }]

const TABS: readonly ShellBottomNavItem[] = [
  { id: "home", href: "/", icon: <HomeIcon />, label: "Home" },
  { id: "inbox", href: "/inbox", icon: <InboxIcon />, label: "Inbox", badge: 2, badgeLabel: "2 unread" },
  { id: "search", href: "/search", icon: <SearchIcon />, label: "Search" },
  { id: "profile", href: "/profile", icon: <UserIcon />, label: "Profile" },
]

const TITLES: Readonly<Record<string, string>> = { "/": "Home", "/inbox": "Inbox", "/search": "Search", "/profile": "Profile" }

/**
 * \`bottomNav\` on AppShell: on a phone the tab bar runs along the bottom, above the safe area, and the page is padded clear of it; on a
 * tablet or desktop it is not drawn. \`band="phone"\` forces the phone band in this frame; \`renderLink\` keeps the demo on this page.
 */
export function BasicBottomNav() {
  const [location, setLocation] = useState("/inbox")
  return (
    <AppShell
      band="phone"
      location={location}
      provider={{ label: "Menu" }}
      renderLink={({ href, children, ...props }) => (
        <a
          {...props}
          href={href}
          onClick={(event) => {
            event.preventDefault()
            setLocation(href)
          }}
        >
          {children}
        </a>
      )}
      sidebar={<Sidebar><SidebarNav nav={NAV} onNavigate={(item, e) => { e.preventDefault(); if (item.href) setLocation(item.href) }} /></Sidebar>}
      header={<ShellHeader start={<span className="font-medium">Mail</span>} />}
      bottomNav={<ShellBottomNav items={TABS} hideOnScroll />}
    >
      <ShellPage title={TITLES[location] ?? "Page"} description="Scroll the page: the bar hides going down and comes back going up.">
        {Array.from({ length: 24 }, (_, i) => (
          <a key={i} href={\`#message-\${i + 1}\`} className="block border-b border-border py-3 text-[13px] hover:bg-muted/50">
            Message {i + 1}
          </a>
        ))}
      </ShellPage>
    </AppShell>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>u(()=>import(`./bottom-nav-D49XfWIf.js`),[]));var ne=[{href:`#shop`,label:`Shop`,icon:(0,k.jsx)(a,{})},{href:`#saved`,label:`Saved`,icon:(0,k.jsx)(i,{})},{href:`#bag`,label:`Bag`,icon:(0,k.jsx)(s,{})}];function re(){let[e,t]=(0,O.useState)(`#bag`),[n,r]=(0,O.useState)(2);return(0,k.jsxs)(`div`,{className:`flex h-full flex-col justify-between`,children:[(0,k.jsx)(`button`,{type:`button`,className:`m-4 rounded-md border border-border px-3 py-1.5 text-[13px]`,onClick:()=>r(e=>e+1),children:`Add to bag`}),(0,k.jsx)(m.Root,{"aria-label":`Store`,children:ne.map(r=>(0,k.jsx)(m.Item,{href:r.href,icon:r.icon,label:r.label,active:r.href===e,badge:r.href===`#bag`?n:void 0,badgeLabel:r.href===`#bag`?`${n} items in the bag`:void 0,renderLink:({href:e,children:n,...r})=>(0,k.jsx)(`a`,{...r,href:e,onClick:n=>{n.preventDefault(),t(e)},children:n})},r.href))})]})}var $=`import { HeartIcon, HomeIcon, ShoppingBagIcon } from "lucide-react"
import { useState } from "react"
import { BottomNav } from "@kitora/shell"

const TABS = [
  { href: "#shop", label: "Shop", icon: <HomeIcon /> },
  { href: "#saved", label: "Saved", icon: <HeartIcon /> },
  { href: "#bag", label: "Bag", icon: <ShoppingBagIcon /> },
] as const

// BottomNav.Root and BottomNav.Item, for a host that decides the current item itself (here by the hash it set) or needs its own
// landmark name. Each item is still a link with aria-current on the current one.
export function BasicBottomNavParts() {
  const [current, setCurrent] = useState("#bag")
  const [bag, setBag] = useState(2)
  return (
    <div className="flex h-full flex-col justify-between">
      <button type="button" className="m-4 rounded-md border border-border px-3 py-1.5 text-[13px]" onClick={() => setBag((n) => n + 1)}>
        Add to bag
      </button>
      <BottomNav.Root aria-label="Store">
        {TABS.map((tab) => (
          <BottomNav.Item
            key={tab.href}
            href={tab.href}
            icon={tab.icon}
            label={tab.label}
            active={tab.href === current}
            badge={tab.href === "#bag" ? bag : undefined}
            badgeLabel={tab.href === "#bag" ? \`\${bag} items in the bag\` : undefined}
            renderLink={({ href, children, ...props }) => (
              <a
                {...props}
                href={href}
                onClick={(event) => {
                  event.preventDefault()
                  setCurrent(href)
                }}
              >
                {children}
              </a>
            )}
          />
        ))}
      </BottomNav.Root>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>u(()=>import(`./bottom-nav-parts-Bxi1yeIc.js`),[]));function ie(){return(0,k.jsxs)(`div`,{children:[(0,k.jsx)(n,{title:`Basics: layouts`,children:`The presets: a double sidebar, a top nav, a header across the top, the settings layout with its section nav, and a phone tab bar.`}),(0,k.jsx)(E,{n:1,title:`Double sidebar`,blurb:`layout="double": a workspace rail outside the sidebar. Switch workspaces on the rail.`,code:N,children:(0,k.jsx)(D,{testId:`shell-double`,height:240,children:(0,k.jsx)(M,{})})}),(0,k.jsx)(E,{n:2,title:`Top nav only`,blurb:`layout="top-nav": the links run across the header; on a phone they move into the drawer.`,code:L,children:(0,k.jsx)(D,{testId:`shell-top-nav`,height:200,children:(0,k.jsx)(I,{})})}),(0,k.jsx)(E,{n:3,title:`Header across the top`,blurb:`headerPlacement="full": the sidebar sits under a full-width header.`,code:B,children:(0,k.jsx)(D,{testId:`shell-full-header`,height:220,children:(0,k.jsx)(z,{})})}),(0,k.jsx)(E,{n:4,title:`Settings with a section nav`,blurb:`SettingsLayout groups its sections; in a narrow container the nav becomes a row of links.`,code:U,children:(0,k.jsx)(D,{testId:`shell-settings`,height:260,children:(0,k.jsx)(H,{})})}),(0,k.jsx)(E,{n:5,title:`Settings from its parts`,blurb:`The same layout assembled from Settings.Root, Nav, Group, Link, Body, Section and Row, with your own groups.`,code:q,children:(0,k.jsx)(D,{testId:`shell-settings-parts`,height:260,children:(0,k.jsx)(K,{})})}),(0,k.jsx)(E,{n:6,title:`Bottom nav on a phone`,blurb:`bottomNav: on a phone a tab bar of links runs along the bottom, above the safe area, and the page is padded clear of it; it hides while scrolling down. Not drawn on a tablet or desktop.`,code:Q,children:(0,k.jsx)(D,{testId:`shell-bottom-nav`,height:480,className:`mx-auto max-w-sm`,children:(0,k.jsx)(Z,{})})}),(0,k.jsx)(E,{n:7,title:`Bottom nav from its parts`,blurb:`BottomNav.Root (a landmark named by aria-label) and BottomNav.Item for a host that decides the current item itself; the bag's count badge updates.`,code:$,children:(0,k.jsx)(D,{testId:`shell-bottom-nav-parts`,height:150,className:`mx-auto max-w-sm`,children:(0,k.jsx)(re,{})})})]})}export{ie as component};