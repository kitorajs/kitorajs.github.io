import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{n}from"./kbd-BBrTDCPy.js";import{Bc as r,Cc as i,Ic as a,ti as o,wn as s}from"./index-B9ukmIN1.js";import{c}from"./parts-CAB3pZtj.js";import"./kit-gallery-Bph7isB2.js";import{t as l}from"./example-BGnSQG2Y.js";import{n as u}from"./search-kZQgZ6ND.js";import{h as d,t as f}from"./search-box-DZIZCXKX.js";import{t as p}from"./search-dialog-Mtuq9Cf7.js";import{t as m}from"./-kits.search.shared-BFK8SgRl.js";var h=e(r(),1),g=a();function _(e){let t=e;return()=>(t=(t*1664525+1013904223)%4294967296,t/4294967296)}var v=_(42);function y(e){let t=e[Math.floor(v()*e.length)];if(t===void 0)throw Error(`pick from an empty list`);return t}var b=[`page`,`doc`,`issue`,`person`,`project`],x=[`Ada Lovelace`,`Grace Hopper`,`Alan Turing`,`Katherine Johnson`,`Linus Torvalds`,`Margaret Hamilton`,`Dennis Ritchie`,`Barbara Liskov`,`Ken Thompson`,`Radia Perlman`,`Donald Knuth`,`Frances Allen`,`Edsger Dijkstra`,`Hedy Lamarr`,`John Carmack`,`Anita Borg`],S=[`Engineering`,`Design`,`Product`,`Support`,`Sales`,`Finance`,`Platform`,`Growth`],C=[`Billing revamp`,`Mobile onboarding`,`Search v2`,`Data import`,`Q3 pricing`,`Design system`,`SSO rollout`,`Usage analytics`,`Help center`,`API rate limits`],w=[`Settings`,`Billing`,`Members`,`Integrations`,`API keys`,`Audit log`,`Notifications`,`Security`,`Workspace profile`,`Usage`,`Invoices`,`Webhooks`],T=[`Getting started with`,`How to configure`,`Troubleshooting`,`Best practices for`,`Migrating to`,`FAQ:`,`Release notes:`,`Guide to`],E=[`billing`,`single sign-on`,`CSV import`,`webhooks`,`search filters`,`rate limits`,`invoices`,`team roles`,`API keys`,`audit logs`,`saved views`,`data export`],D=[`Fix`,`Improve`,`Add`,`Investigate`,`Refactor`,`Document`],O=[`invoice PDF totals`,`search highlighting on mobile`,`CSV import date parsing`,`SSO redirect loop`,`webhook retries`,`rate limit headers`,`billing email copy`,`facet counts after filter`,`keyboard navigation in results`,`empty state for saved views`,`pagination on large accounts`,`audit log export`],k=[...w.map((e,t)=>({id:`page-${t}`,type:`page`,title:e,subtitle:`Workspace › ${e}`,meta:`Page`})),...x.map((e,t)=>({id:`person-${t}`,type:`person`,title:e,subtitle:`${y(S)} · ${e.split(` `)[0]?.toLowerCase()}@acme.io`,meta:v()>.5?`Online`:`Away`})),...C.map((e,t)=>({id:`project-${t}`,type:`project`,title:e,subtitle:`${Math.floor(v()*40)+4} open issues · lead ${y(x)}`,meta:y([`On track`,`At risk`,`Planning`])})),...Array.from({length:48},(e,t)=>({id:`doc-${t}`,type:`doc`,title:`${y(T)} ${y(E)}`,subtitle:`Docs › ${y([`Admin`,`Developers`,`Billing`,`Guides`])}`,meta:`${Math.floor(v()*28)+1}d ago`})),...Array.from({length:60},(e,t)=>({id:`issue-${t}`,type:`issue`,title:`${y(D)} ${y(O)}`,subtitle:`ACME-${1200+t} · ${y(C)}`,meta:y([`Todo`,`In progress`,`In review`,`Done`])}))],A=[{key:`title`,get:e=>e.title,weight:3},{key:`subtitle`,get:e=>e.subtitle}],j={page:`Pages`,doc:`Docs`,issue:`Issues`,person:`People`,project:`Projects`},M=u(k,A),N={page:`▤`,doc:`≡`,issue:`◎`,person:`●`,project:`◆`},P=b.map(e=>({id:e,label:j[e]}));function F({name:e}){return(0,g.jsx)(`span`,{className:`grid size-5 place-items-center rounded-full bg-primary/15 text-[9px] font-semibold text-primary`,children:e.split(` `).map(e=>e[0]).join(``).slice(0,2)})}var I={search:M,getKey:e=>e.id,getLabel:e=>e.title,getDescription:e=>e.subtitle,getMeta:e=>e.meta,getIcon:e=>e.type===`person`?(0,g.jsx)(F,{name:e.title}):(0,g.jsx)(`span`,{className:`text-[13px]`,children:N[e.type]}),groupOf:e=>e.type,groups:P,limitPerGroup:4};function L(){let e=d({storageKey:`dk-search-workspace-recent`,initial:[`billing`,`Grace`,`import`]}),[t,r]=(0,h.useState)(`Nothing opened yet`);return(0,g.jsx)(s,{children:(0,g.jsxs)(`div`,{className:`flex h-full flex-col text-[13px]`,children:[(0,g.jsxs)(`header`,{className:`flex items-center gap-3 border-b px-3 py-2`,children:[(0,g.jsxs)(`span`,{className:`flex items-center gap-1.5 font-semibold`,children:[(0,g.jsx)(`span`,{className:`grid size-5 place-items-center rounded bg-primary text-[11px] text-primary-foreground`,children:`A`}),`Acme`]}),(0,g.jsx)(f,{...I,recent:e,shortcut:`s`,placeholder:`Search workspace…`,onSelect:e=>r(`${j[e.type]} › ${e.title}`),onSubmit:e=>r(`All results for “${e}”`),className:`max-w-md`}),(0,g.jsx)(p,{...I,recent:e,placeholder:`Jump to anything…`,onSelect:e=>r(`${j[e.type]} › ${e.title} (spotlight)`),onSubmit:e=>r(`All results for “${e}” (spotlight)`),trigger:(0,g.jsxs)(o,{size:`sm`,variant:`outline`,className:`ml-auto gap-2 text-muted-foreground`,children:[(0,g.jsx)(c,{}),` Spotlight `,(0,g.jsx)(n,{binding:`Mod+K`})]})})]}),(0,g.jsx)(`div`,{className:`grid flex-1 place-items-center p-6 text-center`,children:(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`p`,{className:`text-[12px] text-muted-foreground`,children:`Last opened`}),(0,g.jsx)(`p`,{className:`font-medium`,"aria-live":`polite`,children:t}),(0,g.jsxs)(`p`,{className:`mt-2 text-[12px] text-muted-foreground`,children:[`Try “bill”, “grace”, “csv import” or “acme-12”. `,k.length,` items indexed.`]})]})})]})})}var R=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { OverlayUiProvider } from "@kitora/overlay"
import { Kbd } from "@kitora/keyboard"
import { localSearch, SearchBox, SearchDialog, useRecentSearches, type SearchGroupMeta, type SearchField } from "@kitora/search"
import { SearchIcon } from "@kitora/collections"

// Demo data, generated from a seeded PRNG so every load (and the server render) is identical.
function prng(seed: number) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296
    return s / 4294967296
  }
}
const random = prng(42)
function pick<T>(list: readonly T[]): T {
  const item = list[Math.floor(random() * list.length)]
  if (item === undefined) throw new Error("pick from an empty list")
  return item
}

const WORKSPACE_TYPES = ["page", "doc", "issue", "person", "project"] as const
type WorkspaceType = (typeof WORKSPACE_TYPES)[number]

interface WorkspaceItem {
  readonly id: string
  readonly type: WorkspaceType
  readonly title: string
  readonly subtitle: string
  readonly meta: string
}

const PEOPLE = ["Ada Lovelace", "Grace Hopper", "Alan Turing", "Katherine Johnson", "Linus Torvalds", "Margaret Hamilton", "Dennis Ritchie", "Barbara Liskov", "Ken Thompson", "Radia Perlman", "Donald Knuth", "Frances Allen", "Edsger Dijkstra", "Hedy Lamarr", "John Carmack", "Anita Borg"]
const ROLES = ["Engineering", "Design", "Product", "Support", "Sales", "Finance", "Platform", "Growth"]
const PROJECTS = ["Billing revamp", "Mobile onboarding", "Search v2", "Data import", "Q3 pricing", "Design system", "SSO rollout", "Usage analytics", "Help center", "API rate limits"]
const PAGES = ["Settings", "Billing", "Members", "Integrations", "API keys", "Audit log", "Notifications", "Security", "Workspace profile", "Usage", "Invoices", "Webhooks"]
const DOC_TOPICS = ["Getting started with", "How to configure", "Troubleshooting", "Best practices for", "Migrating to", "FAQ:", "Release notes:", "Guide to"]
const DOC_SUBJECTS = ["billing", "single sign-on", "CSV import", "webhooks", "search filters", "rate limits", "invoices", "team roles", "API keys", "audit logs", "saved views", "data export"]
const ISSUE_VERBS = ["Fix", "Improve", "Add", "Investigate", "Refactor", "Document"]
const ISSUE_OBJECTS = ["invoice PDF totals", "search highlighting on mobile", "CSV import date parsing", "SSO redirect loop", "webhook retries", "rate limit headers", "billing email copy", "facet counts after filter", "keyboard navigation in results", "empty state for saved views", "pagination on large accounts", "audit log export"]

const WORKSPACE: readonly WorkspaceItem[] = [
  ...PAGES.map((title, i) => ({ id: \`page-\${i}\`, type: "page" as const, title, subtitle: \`Workspace › \${title}\`, meta: "Page" })),
  ...PEOPLE.map((name, i) => ({ id: \`person-\${i}\`, type: "person" as const, title: name, subtitle: \`\${pick(ROLES)} · \${name.split(" ")[0]?.toLowerCase()}@acme.io\`, meta: random() > 0.5 ? "Online" : "Away" })),
  ...PROJECTS.map((title, i) => ({ id: \`project-\${i}\`, type: "project" as const, title, subtitle: \`\${Math.floor(random() * 40) + 4} open issues · lead \${pick(PEOPLE)}\`, meta: pick(["On track", "At risk", "Planning"]) })),
  ...Array.from({ length: 48 }, (_, i) => ({ id: \`doc-\${i}\`, type: "doc" as const, title: \`\${pick(DOC_TOPICS)} \${pick(DOC_SUBJECTS)}\`, subtitle: \`Docs › \${pick(["Admin", "Developers", "Billing", "Guides"])}\`, meta: \`\${Math.floor(random() * 28) + 1}d ago\` })),
  ...Array.from({ length: 60 }, (_, i) => ({ id: \`issue-\${i}\`, type: "issue" as const, title: \`\${pick(ISSUE_VERBS)} \${pick(ISSUE_OBJECTS)}\`, subtitle: \`ACME-\${1200 + i} · \${pick(PROJECTS)}\`, meta: pick(["Todo", "In progress", "In review", "Done"]) })),
]

const WORKSPACE_FIELDS: readonly SearchField<WorkspaceItem>[] = [
  { key: "title", get: (item) => item.title, weight: 3 },
  { key: "subtitle", get: (item) => item.subtitle },
]

const WORKSPACE_GROUP_LABELS: Readonly<Record<WorkspaceType, string>> = { page: "Pages", doc: "Docs", issue: "Issues", person: "People", project: "Projects" }

const search = localSearch(WORKSPACE, WORKSPACE_FIELDS)
const ICONS: Readonly<Record<WorkspaceItem["type"], string>> = { page: "▤", doc: "≡", issue: "◎", person: "●", project: "◆" }
const GROUPS: readonly SearchGroupMeta[] = WORKSPACE_TYPES.map((id) => ({ id, label: WORKSPACE_GROUP_LABELS[id] }))

function Avatar({ name }: { readonly name: string }) {
  const initials = name.split(" ").map((part) => part[0]).join("").slice(0, 2)
  return <span className="grid size-5 place-items-center rounded-full bg-primary/15 text-[9px] font-semibold text-primary">{initials}</span>
}

const itemProps = {
  search,
  getKey: (item: WorkspaceItem) => item.id,
  getLabel: (item: WorkspaceItem) => item.title,
  getDescription: (item: WorkspaceItem) => item.subtitle,
  getMeta: (item: WorkspaceItem) => item.meta,
  getIcon: (item: WorkspaceItem) => (item.type === "person" ? <Avatar name={item.title} /> : <span className="text-[13px]">{ICONS[item.type]}</span>),
  groupOf: (item: WorkspaceItem) => item.type,
  groups: GROUPS,
  limitPerGroup: 4,
}

// Workspace search two ways: the header box (press S) and a ⌘K spotlight on the overlay stack. Both group pages, docs,
// issues, people and projects, highlight matches, keep recent searches, and end with "See all results".
export function Spotlight() {
  const recent = useRecentSearches({ storageKey: "dk-search-workspace-recent", initial: ["billing", "Grace", "import"] })
  const [last, setLast] = useState("Nothing opened yet")
  return (
    <OverlayUiProvider>
      <div className="flex h-full flex-col text-[13px]">
        <header className="flex items-center gap-3 border-b px-3 py-2">
          <span className="flex items-center gap-1.5 font-semibold"><span className="grid size-5 place-items-center rounded bg-primary text-[11px] text-primary-foreground">A</span>Acme</span>
          <SearchBox {...itemProps} recent={recent} shortcut="s" placeholder="Search workspace…" onSelect={(item) => setLast(\`\${WORKSPACE_GROUP_LABELS[item.type]} › \${item.title}\`)} onSubmit={(q) => setLast(\`All results for “\${q}”\`)} className="max-w-md" />
          <SearchDialog
            {...itemProps}
            recent={recent}
            placeholder="Jump to anything…"
            onSelect={(item) => setLast(\`\${WORKSPACE_GROUP_LABELS[item.type]} › \${item.title} (spotlight)\`)}
            onSubmit={(q) => setLast(\`All results for “\${q}” (spotlight)\`)}
            trigger={<Button size="sm" variant="outline" className="ml-auto gap-2 text-muted-foreground"><SearchIcon /> Spotlight <Kbd binding="Mod+K" /></Button>}
          />
        </header>
        <div className="grid flex-1 place-items-center p-6 text-center">
          <div>
            <p className="text-[12px] text-muted-foreground">Last opened</p>
            <p className="font-medium" aria-live="polite">{last}</p>
            <p className="mt-2 text-[12px] text-muted-foreground">Try “bill”, “grace”, “csv import” or “acme-12”. {WORKSPACE.length} items indexed.</p>
          </div>
        </div>
      </div>
    </OverlayUiProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>i(()=>import(`./spotlight-DuU0QqaL.js`),[]));function z(){return(0,g.jsxs)(`div`,{children:[(0,g.jsx)(t,{title:`Spotlight`,children:`Global search across a workspace: pages, docs, issues, people and projects, grouped and highlighted. Press S for the header box, or ⌘K (Ctrl+K) for the spotlight; ↑/↓ move, ↵ opens, Esc closes.`}),(0,g.jsx)(l,{n:1,title:`Header search and ⌘K spotlight`,blurb:`One search function, two surfaces; both share the recent searches.`,code:R,children:(0,g.jsx)(m,{testId:`spotlight`,height:460,children:(0,g.jsx)(L,{})})})]})}export{z as component};