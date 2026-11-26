import{t as e}from"./bell-Bee7W2a6.js";import{t}from"./circle-dot-BH1bsXZT.js";import{t as n}from"./credit-card-DPtTbQbg.js";import{t as r}from"./database-DEFok6Hf.js";import{s as i}from"./kit-docs-BUovISd0.js";import{t as a}from"./funnel-B13jyZNr.js";import{t as o}from"./git-pull-request-CM22aY9m.js";import{t as s}from"./key-round-CK2_2eaA.js";import{t as c}from"./message-square-BENMLP3G.js";import{t as l}from"./plus-DS8FiCg5.js";import{t as u}from"./shield-CsQXPgj2.js";import{t as d}from"./tag-xlyDf7k4.js";import{t as f}from"./users-BnHhGQEL.js";import{t as p}from"./user-BhLzwaGb.js";import{Cc as m,Ic as h}from"./index-B9ukmIN1.js";import{t as g}from"./description-list-BGtOo23y.js";import{r as _}from"./badges-DAbO4yBh.js";import{n as v,r as y,t as b}from"./disclosure-ytpNtqof.js";import{t as x}from"./hints-RaGFHJNJ.js";import"./kit-gallery-Bph7isB2.js";import{t as S}from"./example-BGnSQG2Y.js";var C=h();function w(){return(0,C.jsxs)(`div`,{className:`grid grid-cols-1 gap-5 lg:grid-cols-2`,children:[(0,C.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,C.jsx)(`span`,{className:`font-mono text-[11.5px] text-muted-foreground`,children:`bordered · single`}),(0,C.jsx)(b,{defaultValue:[`trial`],items:[{value:`trial`,title:`How long is the free trial?`,content:`Fourteen days on every plan, no card needed. Your data stays if you upgrade.`},{value:`seats`,title:`Do guests count as seats?`,content:`No. Guests with view-only access are free; anyone who can edit counts as a seat.`},{value:`export`,title:`Can I export my data?`,content:`Yes: CSV and JSON from Settings → Export, or the REST API at any time.`},{value:`sso`,title:`Is SSO included?`,content:`SAML and SCIM are part of the Scale plan and above.`}]})]}),(0,C.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,C.jsx)(`span`,{className:`font-mono text-[11.5px] text-muted-foreground`,children:`separated · multiple`}),(0,C.jsx)(b,{variant:`separated`,multiple:!0,defaultValue:[`db`],items:[{value:`db`,title:`Database`,icon:(0,C.jsx)(r,{}),meta:`3 replicas`,content:`Postgres 17, primary in eu-west-1, two read replicas, point-in-time recovery for 14 days.`},{value:`security`,title:`Security`,icon:(0,C.jsx)(u,{}),meta:`2 findings`,content:`Two medium findings from the last scan; both have fixes scheduled this sprint.`},{value:`billing`,title:`Billing`,icon:(0,C.jsx)(n,{}),meta:`Paid`,content:`Invoices are paid automatically on the 1st of each month.`},{value:`legacy`,title:`Legacy exports`,disabled:!0,meta:`Retired`,content:`Retired.`}]})]}),(0,C.jsxs)(`div`,{className:`flex flex-col gap-1 lg:col-span-2`,children:[(0,C.jsx)(`span`,{className:`font-mono text-[11.5px] text-muted-foreground`,children:`flush · changelog`}),(0,C.jsx)(b,{variant:`flush`,multiple:!0,items:[{value:`1.4.2`,title:`1.4.2`,meta:(0,C.jsx)(_,{tone:`success`,children:`Latest`}),content:`Fixes the JSON viewer collapsing on search clear; the carousel no longer skips a page on fast swipes.`},{value:`1.4.1`,title:`1.4.1`,meta:`Oct 2`,content:`Avatar stacks show names for the +N chip; badges gain an outline variant.`},{value:`1.4.0`,title:`1.4.0`,meta:`Sep 18`,content:`Code blocks gain file tabs, highlighted lines and wrap.`}]})]})]})}var T=`import { DisplayAccordion, StatusBadge } from "@kitora/display"
import { CreditCard, Database, Shield } from "lucide-react"

// Three accordion looks: a bordered FAQ (one open at a time), separated cards with icons and
// a meta count (several open at once), and a flush changelog.
export function NavAccordions() {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      <div className="flex flex-col gap-1">
        <span className="font-mono text-[11.5px] text-muted-foreground">bordered · single</span>
        <DisplayAccordion
          defaultValue={["trial"]}
          items={[
            { value: "trial", title: "How long is the free trial?", content: "Fourteen days on every plan, no card needed. Your data stays if you upgrade." },
            { value: "seats", title: "Do guests count as seats?", content: "No. Guests with view-only access are free; anyone who can edit counts as a seat." },
            { value: "export", title: "Can I export my data?", content: "Yes: CSV and JSON from Settings → Export, or the REST API at any time." },
            { value: "sso", title: "Is SSO included?", content: "SAML and SCIM are part of the Scale plan and above." },
          ]}
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-mono text-[11.5px] text-muted-foreground">separated · multiple</span>
        <DisplayAccordion
          variant="separated"
          multiple
          defaultValue={["db"]}
          items={[
            { value: "db", title: "Database", icon: <Database />, meta: "3 replicas", content: "Postgres 17, primary in eu-west-1, two read replicas, point-in-time recovery for 14 days." },
            { value: "security", title: "Security", icon: <Shield />, meta: "2 findings", content: "Two medium findings from the last scan; both have fixes scheduled this sprint." },
            { value: "billing", title: "Billing", icon: <CreditCard />, meta: "Paid", content: "Invoices are paid automatically on the 1st of each month." },
            { value: "legacy", title: "Legacy exports", disabled: true, meta: "Retired", content: "Retired." },
          ]}
        />
      </div>
      <div className="flex flex-col gap-1 lg:col-span-2">
        <span className="font-mono text-[11.5px] text-muted-foreground">flush · changelog</span>
        <DisplayAccordion
          variant="flush"
          multiple
          items={[
            { value: "1.4.2", title: "1.4.2", meta: <StatusBadge tone="success">Latest</StatusBadge>, content: "Fixes the JSON viewer collapsing on search clear; the carousel no longer skips a page on fast swipes." },
            { value: "1.4.1", title: "1.4.1", meta: "Oct 2", content: "Avatar stacks show names for the +N chip; badges gain an outline variant." },
            { value: "1.4.0", title: "1.4.0", meta: "Sep 18", content: "Code blocks gain file tabs, highlighted lines and wrap." },
          ]}
        />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>m(()=>import(`./nav-accordions-CXcXvcmC.js`),[]));function E(){return(0,C.jsxs)(`div`,{className:`flex flex-col gap-5`,children:[(0,C.jsx)(v,{orientation:`vertical`,label:`Settings`,className:`min-h-56 flex-col rounded-lg border bg-card p-3 sm:flex-row`,classNames:{list:`w-full sm:w-44`},tabs:[{value:`profile`,label:`Profile`,icon:(0,C.jsx)(p,{}),content:(0,C.jsx)(g,{items:[{term:`Name`,value:`Ada Lovelace`},{term:`Email`,value:`ada@acme.dev`,copy:`ada@acme.dev`,mono:!0},{term:`Timezone`,value:`Europe/London`}]})},{value:`team`,label:`Team`,icon:(0,C.jsx)(f,{}),count:10,content:(0,C.jsx)(`p`,{className:`text-muted-foreground`,children:`10 members across 6 teams.`})},{value:`billing`,label:`Billing`,icon:(0,C.jsx)(n,{}),content:(0,C.jsx)(g,{items:[{term:`Plan`,value:`Scale, annual`},{term:`Next invoice`,value:`Nov 1, 2026 · $1,188.00`}]})},{value:`notifications`,label:`Notifications`,icon:(0,C.jsx)(e,{}),content:(0,C.jsx)(`p`,{className:`text-muted-foreground`,children:`Email digests are on, weekly.`})},{value:`keys`,label:`API keys`,icon:(0,C.jsx)(s,{}),count:3,content:(0,C.jsx)(`p`,{className:`text-muted-foreground`,children:`Three active keys; the oldest is 211 days old.`})}]}),(0,C.jsx)(v,{variant:`segmented`,fill:!0,label:`Period`,tabs:[{value:`day`,label:`Day`,content:(0,C.jsx)(`p`,{className:`text-muted-foreground`,children:`1,204 requests today.`})},{value:`week`,label:`Week`,content:(0,C.jsx)(`p`,{className:`text-muted-foreground`,children:`8,930 requests this week.`})},{value:`month`,label:`Month`,content:(0,C.jsx)(`p`,{className:`text-muted-foreground`,children:`36,410 requests this month.`})},{value:`year`,label:`Year`,content:(0,C.jsx)(`p`,{className:`text-muted-foreground`,children:`402,118 requests this year.`})}]})]})}var D=`import { DescriptionList, DisplayTabs } from "@kitora/display"
import { Bell, CreditCard, KeyRound, User, Users } from "lucide-react"

// A settings layout with vertical underline tabs, and a full-width segmented control above a
// period-specific summary. Up/Down move between vertical tabs.
export function NavSettings() {
  return (
    <div className="flex flex-col gap-5">
      <DisplayTabs
        orientation="vertical"
        label="Settings"
        // Below sm the tab list sits above the panel: beside it, a 390px screen leaves the panel ~100px.
        className="min-h-56 flex-col rounded-lg border bg-card p-3 sm:flex-row"
        classNames={{ list: "w-full sm:w-44" }}
        tabs={[
          { value: "profile", label: "Profile", icon: <User />, content: <DescriptionList items={[{ term: "Name", value: "Ada Lovelace" }, { term: "Email", value: "ada@acme.dev", copy: "ada@acme.dev", mono: true }, { term: "Timezone", value: "Europe/London" }]} /> },
          { value: "team", label: "Team", icon: <Users />, count: 10, content: <p className="text-muted-foreground">10 members across 6 teams.</p> },
          { value: "billing", label: "Billing", icon: <CreditCard />, content: <DescriptionList items={[{ term: "Plan", value: "Scale, annual" }, { term: "Next invoice", value: "Nov 1, 2026 · $1,188.00" }]} /> },
          { value: "notifications", label: "Notifications", icon: <Bell />, content: <p className="text-muted-foreground">Email digests are on, weekly.</p> },
          { value: "keys", label: "API keys", icon: <KeyRound />, count: 3, content: <p className="text-muted-foreground">Three active keys; the oldest is 211 days old.</p> },
        ]}
      />
      <DisplayTabs
        variant="segmented"
        fill
        label="Period"
        tabs={[
          { value: "day", label: "Day", content: <p className="text-muted-foreground">1,204 requests today.</p> },
          { value: "week", label: "Week", content: <p className="text-muted-foreground">8,930 requests this week.</p> },
          { value: "month", label: "Month", content: <p className="text-muted-foreground">36,410 requests this month.</p> },
          { value: "year", label: "Year", content: <p className="text-muted-foreground">402,118 requests this year.</p> },
        ]}
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>m(()=>import(`./nav-settings-DI2tOC8F.js`),[]));var O=[{value:`issues`,label:`Issues`,icon:(0,C.jsx)(t,{}),count:128},{value:`pulls`,label:`Pull requests`,icon:(0,C.jsx)(o,{}),count:14},{value:`discussions`,label:`Discussions`,icon:(0,C.jsx)(c,{}),count:3},{value:`releases`,label:`Releases`,icon:(0,C.jsx)(d,{})},{value:`archived`,label:`Archived`,disabled:!0}];function k(){return(0,C.jsx)(`div`,{className:`flex flex-col gap-5`,children:y.map(e=>(0,C.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,C.jsx)(`span`,{className:`font-mono text-[11.5px] text-muted-foreground`,children:e}),(0,C.jsx)(v,{tabs:O,variant:e,label:`Repository sections (${e})`,actions:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(x,{content:`Filter`,shortcut:`f`,children:(0,C.jsx)(`button`,{type:`button`,"aria-label":`Filter`,className:`inline-flex size-7 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground`,children:(0,C.jsx)(a,{className:`size-3.5`})})}),(0,C.jsx)(x,{content:`New issue`,shortcut:`Mod+Shift+N`,children:(0,C.jsxs)(`button`,{type:`button`,"aria-label":`New issue`,className:`inline-flex h-7 items-center gap-1 rounded-md bg-primary px-2 text-[12px] font-medium text-primary-foreground hover:bg-primary/90`,children:[(0,C.jsx)(l,{className:`size-3.5`}),` New`]})})]})})]},e))})}var A=`import { DisplayTabs, Hint, TAB_VARIANTS, type TabEntry } from "@kitora/display"
import { CircleDot, GitPullRequest, Filter, MessageSquare, Plus, Tag } from "lucide-react"

const TABS: readonly TabEntry[] = [
  { value: "issues", label: "Issues", icon: <CircleDot />, count: 128 },
  { value: "pulls", label: "Pull requests", icon: <GitPullRequest />, count: 14 },
  { value: "discussions", label: "Discussions", icon: <MessageSquare />, count: 3 },
  { value: "releases", label: "Releases", icon: <Tag /> },
  { value: "archived", label: "Archived", disabled: true },
]

// The four tab looks on the same data: icons, counts, a disabled tab, and toolbar buttons in
// the actions slot with hints that show their keyboard shortcut. Arrow keys move between tabs.
export function NavTabs() {
  return (
    <div className="flex flex-col gap-5">
      {TAB_VARIANTS.map((variant) => (
        <div key={variant} className="flex flex-col gap-1">
          <span className="font-mono text-[11.5px] text-muted-foreground">{variant}</span>
          <DisplayTabs
            tabs={TABS}
            variant={variant}
            label={\`Repository sections (\${variant})\`}
            actions={
              <>
                <Hint content="Filter" shortcut="f">
                  <button type="button" aria-label="Filter" className="inline-flex size-7 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground">
                    <Filter className="size-3.5" />
                  </button>
                </Hint>
                <Hint content="New issue" shortcut="Mod+Shift+N">
                  <button type="button" aria-label="New issue" className="inline-flex h-7 items-center gap-1 rounded-md bg-primary px-2 text-[12px] font-medium text-primary-foreground hover:bg-primary/90">
                    <Plus className="size-3.5" /> New
                  </button>
                </Hint>
              </>
            }
          />
        </div>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>m(()=>import(`./nav-tabs-ChgZLqz3.js`),[]));function j(){return(0,C.jsxs)(`div`,{children:[(0,C.jsx)(i,{title:`Tabs and accordions`,children:`Tabs and accordions as data, on the primitives' keyboard model (arrows, Home, End). Four tab looks and three accordion looks.`}),(0,C.jsx)(S,{n:1,title:`Every tab look`,blurb:`Underline, pills, segmented and enclosed on the same tabs: icons, counts, a disabled tab and toolbar buttons with shortcut hints.`,code:A,children:(0,C.jsx)(k,{})}),(0,C.jsx)(S,{n:2,title:`Vertical settings and a segmented period`,blurb:`Vertical tabs beside their panels, then a full-width segmented control.`,code:D,children:(0,C.jsx)(E,{})}),(0,C.jsx)(S,{n:3,title:`Accordions`,blurb:`A bordered FAQ with one open at a time, separated cards with icons and meta, a flush changelog.`,code:T,children:(0,C.jsx)(w,{})})]})}export{j as component};