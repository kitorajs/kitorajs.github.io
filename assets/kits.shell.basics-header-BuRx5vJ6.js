import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{t as n}from"./log-out-CX3b2zuH.js";import{t as r}from"./settings-BV_zAlgP.js";import{t as i}from"./user-Dnp1pHnH.js";import{t as a}from"./command-palette-C8vgjOP2.js";import{Ec as o,Uc as s,ri as c,zc as l}from"./index-BZuUy872.js";import{t as u}from"./app-shell-eUMaHzXs.js";import{n as d}from"./breadcrumbs-Bfv6xYGz.js";import{a as f,o as p,r as m,s as h}from"./header-BR1oaVaJ.js";import{n as g,r as _}from"./page-BMjnCm9U.js";import"./kit-gallery-BBavj2rC.js";import{t as v}from"./example-B67lLz1F.js";import{t as y}from"./-kits.shell.shared-2pmPGUN-.js";var b=e(s(),1),x=l(),S=[{id:`acme`,label:`Acme`,href:`/`},{id:`eng`,label:`Engineering`,href:`/eng`},{id:`platform`,label:`Platform`,href:`/eng/platform`},{id:`api`,label:`API gateway`,href:`/eng/platform/api`},{id:`rfc`,label:`RFC 112: rate limits`}];function C(){let[e,t]=(0,b.useState)(`nowhere yet`);return(0,x.jsxs)(`div`,{className:`flex flex-col gap-3 p-4 text-[13px]`,children:[(0,x.jsx)(d,{items:S,onNavigate:(e,n)=>{n.preventDefault(),t(e.label)}}),(0,x.jsx)(d,{items:S,max:3,onNavigate:(e,n)=>{n.preventDefault(),t(e.label)}}),(0,x.jsxs)(`span`,{role:`status`,className:`text-muted-foreground`,children:[`Last clicked: `,e]})]})}var w=`import { useState } from "react"
import { ShellBreadcrumbs, type Crumb } from "@kitora/shell"

const TRAIL: readonly Crumb[] = [
  { id: "acme", label: "Acme", href: "/" },
  { id: "eng", label: "Engineering", href: "/eng" },
  { id: "platform", label: "Platform", href: "/eng/platform" },
  { id: "api", label: "API gateway", href: "/eng/platform/api" },
  { id: "rfc", label: "RFC 112: rate limits" },
]

/** A long trail folds its middle into an ellipsis menu; the last step is the current page. */
export function BasicBreadcrumbs() {
  const [went, setWent] = useState("nowhere yet")
  return (
    <div className="flex flex-col gap-3 p-4 text-[13px]">
      <ShellBreadcrumbs items={TRAIL} onNavigate={(c, e) => { e.preventDefault(); setWent(c.label) }} />
      <ShellBreadcrumbs items={TRAIL} max={3} onNavigate={(c, e) => { e.preventDefault(); setWent(c.label) }} />
      <span role="status" className="text-muted-foreground">Last clicked: {went}</span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>o(()=>import(`./breadcrumbs-D5s55Jut.js`),[]));var T=[{id:`go-dashboard`,label:`Go to Dashboard`,group:`Navigate`},{id:`go-billing`,label:`Go to Billing`,group:`Navigate`},{id:`new-project`,label:`New project`,group:`Create`,shortcut:`⌥N`},{id:`invite`,label:`Invite a teammate`,group:`Create`}];function E(){let[e,t]=(0,b.useState)(!1),[n,r]=(0,b.useState)(`nothing yet`);return(0,x.jsxs)(`div`,{className:`flex flex-col items-start gap-3 p-4 text-[13px]`,children:[(0,x.jsx)(p,{onOpen:()=>t(!0),placeholder:`Search or jump to…`}),(0,x.jsxs)(`span`,{role:`status`,className:`text-muted-foreground`,children:[`Ran: `,n]}),(0,x.jsx)(a,{commands:T,shortcut:!1,open:e,onOpenChange:t,onRun:e=>r(e.label)})]})}var D=`import { useState } from "react"
import { ShellSearch } from "@kitora/shell"
import { CommandPalette } from "@kitora/overlay"

const COMMANDS = [
  { id: "go-dashboard", label: "Go to Dashboard", group: "Navigate" },
  { id: "go-billing", label: "Go to Billing", group: "Navigate" },
  { id: "new-project", label: "New project", group: "Create", shortcut: "⌥N" },
  { id: "invite", label: "Invite a teammate", group: "Create" },
] as const

/** The header's search field opens your palette; here the overlay kit's CommandPalette. */
export function BasicSearch() {
  const [open, setOpen] = useState(false)
  const [ran, setRan] = useState("nothing yet")
  return (
    <div className="flex flex-col items-start gap-3 p-4 text-[13px]">
      <ShellSearch onOpen={() => setOpen(true)} placeholder="Search or jump to…" />
      <span role="status" className="text-muted-foreground">Ran: {ran}</span>
      <CommandPalette commands={COMMANDS} shortcut={false} open={open} onOpenChange={setOpen} onRun={(c) => setRan(c.label)} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>o(()=>import(`./search-Di75fQsi.js`),[]));var O=[{id:`n1`,who:`Priya`,what:`assigned you ENG-412`,when:`2m`},{id:`n2`,who:`Marco`,what:`commented on Pricing v3`,when:`1h`}];function k(){let[e,t]=(0,b.useState)(O),[a,o]=(0,b.useState)(`nothing yet`);return(0,x.jsx)(u,{layout:`top-nav`,header:(0,x.jsx)(m,{start:(0,x.jsx)(`span`,{className:`font-semibold`,children:`Acme`}),end:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(f,{count:e.length,children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between border-b px-3 py-2`,children:[(0,x.jsx)(`span`,{className:`font-semibold`,children:`Notifications`}),(0,x.jsx)(`button`,{type:`button`,className:`text-[12px] text-muted-foreground hover:text-foreground`,onClick:()=>t([]),children:`Mark all read`})]}),e.length===0?(0,x.jsx)(`p`,{className:`p-6 text-center text-muted-foreground`,children:`You are all caught up.`}):(0,x.jsx)(`ul`,{className:`py-1`,children:e.map(e=>(0,x.jsxs)(`li`,{className:`flex gap-2 px-3 py-1.5`,children:[(0,x.jsxs)(`span`,{className:`flex-1`,children:[(0,x.jsx)(`b`,{className:`font-medium`,children:e.who}),` `,e.what]}),(0,x.jsx)(`span`,{className:`text-muted-foreground tabular-nums`,children:e.when})]},e.id))})]}),(0,x.jsx)(h,{name:`Dana Wu`,email:`dana@acme.dev`,actions:[{id:`profile`,label:`Profile`,icon:(0,x.jsx)(i,{}),onSelect:()=>o(`Profile`)},{id:`settings`,label:`Settings`,icon:(0,x.jsx)(r,{}),shortcut:`⌘,`,onSelect:()=>o(`Settings`)},{id:`out`,label:`Sign out`,icon:(0,x.jsx)(n,{}),destructive:!0,separatorBefore:!0,onSelect:()=>o(`Sign out`)}]})]})}),children:(0,x.jsxs)(`p`,{role:`status`,className:`p-4 text-muted-foreground`,children:[`Menu choice: `,a]})})}var A=`import { useState } from "react"
import { AppShell, ShellHeader, ShellNotifications, ShellUserMenu } from "@kitora/shell"
import { LogOut, Settings, User } from "lucide-react"

const INITIAL = [
  { id: "n1", who: "Priya", what: "assigned you ENG-412", when: "2m" },
  { id: "n2", who: "Marco", what: "commented on Pricing v3", when: "1h" },
]

/** The header's trailing slots: a notifications bell with its unread count, and the account menu. */
export function BasicHeaderMenus() {
  const [items, setItems] = useState(INITIAL)
  const [last, setLast] = useState("nothing yet")
  return (
    <AppShell
      layout="top-nav"
      header={
        <ShellHeader
          start={<span className="font-semibold">Acme</span>}
          end={
            <>
              <ShellNotifications count={items.length}>
                <div className="flex items-center justify-between border-b px-3 py-2">
                  <span className="font-semibold">Notifications</span>
                  <button type="button" className="text-[12px] text-muted-foreground hover:text-foreground" onClick={() => setItems([])}>Mark all read</button>
                </div>
                {items.length === 0 ? <p className="p-6 text-center text-muted-foreground">You are all caught up.</p> : (
                  <ul className="py-1">{items.map((n) => <li key={n.id} className="flex gap-2 px-3 py-1.5"><span className="flex-1"><b className="font-medium">{n.who}</b> {n.what}</span><span className="text-muted-foreground tabular-nums">{n.when}</span></li>)}</ul>
                )}
              </ShellNotifications>
              <ShellUserMenu
                name="Dana Wu"
                email="dana@acme.dev"
                actions={[
                  { id: "profile", label: "Profile", icon: <User />, onSelect: () => setLast("Profile") },
                  { id: "settings", label: "Settings", icon: <Settings />, shortcut: "⌘,", onSelect: () => setLast("Settings") },
                  { id: "out", label: "Sign out", icon: <LogOut />, destructive: true, separatorBefore: true, onSelect: () => setLast("Sign out") },
                ]}
              />
            </>
          }
        />
      }
    >
      <p role="status" className="p-4 text-muted-foreground">Menu choice: {last}</p>
    </AppShell>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>o(()=>import(`./header-menus-m0o2yr-0.js`),[]));var j=[{id:`overview`,label:`Overview`},{id:`issues`,label:`Issues`,count:42},{id:`members`,label:`Members`,count:8},{id:`settings`,label:`Settings`}];function M(){let[e,t]=(0,b.useState)(`issues`);return(0,x.jsx)(_,{kicker:`Projects / Website`,title:`Website`,description:`Marketing site and docs.`,actions:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(c,{variant:`outline`,size:`sm`,children:`Share`}),(0,x.jsx)(c,{size:`sm`,children:`New issue`})]}),tabs:(0,x.jsx)(g,{tabs:j,active:e,onSelect:(e,n)=>{n.preventDefault(),t(e.id)}}),children:(0,x.jsxs)(`p`,{className:`text-[13px] text-muted-foreground`,children:[`Showing the `,j.find(t=>t.id===e)?.label,` tab.`]})})}var N=`import { useState } from "react"
import { PageTabs, ShellPage, type PageTab } from "@kitora/shell"
import { Button } from "@kitora/ui/button"

const TABS: readonly PageTab[] = [
  { id: "overview", label: "Overview" },
  { id: "issues", label: "Issues", count: 42 },
  { id: "members", label: "Members", count: 8 },
  { id: "settings", label: "Settings" },
]

/** A page header: kicker, title, description, actions and a row of sub-page tabs. */
export function BasicPageHeader() {
  const [tab, setTab] = useState("issues")
  return (
    <ShellPage
      kicker="Projects / Website"
      title="Website"
      description="Marketing site and docs."
      actions={<><Button variant="outline" size="sm">Share</Button><Button size="sm">New issue</Button></>}
      tabs={<PageTabs tabs={TABS} active={tab} onSelect={(t, e) => { e.preventDefault(); setTab(t.id) }} />}
    >
      <p className="text-[13px] text-muted-foreground">Showing the {TABS.find((t) => t.id === tab)?.label} tab.</p>
    </ShellPage>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>o(()=>import(`./page-header-DJ7gBrDk.js`),[]));function P(){return(0,x.jsxs)(`div`,{children:[(0,x.jsx)(t,{title:`Basics: header and page`,children:`The header's parts: breadcrumbs, the search trigger, notifications and the account menu, and the page header with sub-page tabs.`}),(0,x.jsx)(v,{n:1,title:`Breadcrumbs`,blurb:`A long trail folds its middle into an ellipsis menu (the second trail allows 3 steps); the current page is not a link.`,code:w,children:(0,x.jsx)(y,{testId:`shell-breadcrumbs`,height:120,children:(0,x.jsx)(C,{})})}),(0,x.jsx)(v,{n:2,title:`The search trigger`,blurb:`Looks like a field, opens your palette; here the overlay kit's CommandPalette.`,code:D,children:(0,x.jsx)(y,{testId:`shell-search`,height:110,children:(0,x.jsx)(E,{})})}),(0,x.jsx)(v,{n:3,title:`Notifications and the account menu`,blurb:`The bell shows the unread count and opens a popover with your list; the avatar opens the account menu.`,code:A,children:(0,x.jsx)(y,{testId:`shell-header-menus`,height:140,children:(0,x.jsx)(k,{})})}),(0,x.jsx)(v,{n:4,title:`The page header`,blurb:`Kicker, title, description, actions and a row of sub-page tabs with counts.`,code:N,children:(0,x.jsx)(y,{testId:`shell-page-header`,height:190,children:(0,x.jsx)(M,{})})})]})}export{P as component};