import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{t as n}from"./highlight-DjMYH-yU.js";import{Bc as r,Cc as i,Ic as a}from"./index-9y5uwRd3.js";import{c as o}from"./parts-DE4Xz_H0.js";import"./kit-gallery-B-Yr9fP4.js";import{t as s}from"./example-CZLJLtIC.js";import{i as c,n as l,o as u}from"./search-kZQgZ6ND.js";import{a as d,c as f,d as p,f as m,h,i as g,l as _,m as v,n as y,o as b,p as x,r as ee,s as S,t as C,u as w}from"./search-box-D2l_myzG.js";import{t as T}from"./use-search-BK5dKoAh.js";import{n as E,r as D,t as O}from"./results-Dd2EdP8e.js";import{t as k}from"./-kits.search.shared-BdaR6_vO.js";var A=e(r(),1),j=a(),M=[{id:`billing`,title:`Billing`,path:`Settings › Billing`,section:`Settings`},{id:`invoices`,title:`Invoices`,path:`Settings › Billing › Invoices`,section:`Settings`},{id:`members`,title:`Members`,path:`Settings › Members`,section:`Settings`},{id:`api`,title:`API keys`,path:`Developers › API keys`,section:`Developers`},{id:`webhooks`,title:`Webhooks`,path:`Developers › Webhooks`,section:`Developers`},{id:`profile`,title:`Profile`,path:`Account › Profile`,section:`Account`}],N=l(M,[{key:`title`,get:e=>e.title,weight:2},{key:`path`,get:e=>e.path}]),P=[`Settings`,`Developers`,`Account`];function F(){let e=h({initial:[`members`]}),[t,r]=(0,A.useState)(null),i=v({search:N,recent:e,getKey:e=>e.id,groupOf:e=>e.section,groupOrder:P,label:`Search pages`,shortcut:`/`,onSelect:e=>r(e.path)});return(0,j.jsxs)(`div`,{className:`flex h-full flex-col gap-2 text-[13px]`,children:[(0,j.jsxs)(p,{controller:i,className:`max-w-sm`,children:[(0,j.jsxs)(ee,{className:`rounded-full`,children:[(0,j.jsx)(o,{className:`size-3.5 shrink-0 text-muted-foreground`}),(0,j.jsx)(S,{placeholder:`Jump to a page…`}),(0,j.jsx)(y,{}),(0,j.jsx)(m,{})]}),(0,j.jsxs)(w,{children:[(0,j.jsxs)(f,{maxHeight:220,children:[(0,j.jsx)(x,{}),i.recentOptions.length>0?(0,j.jsx)(b,{label:`Recent`,children:i.recentOptions.map(e=>(0,j.jsx)(_,{index:e.index,children:e.query},e.key))}):null,i.groups.map(e=>(0,j.jsx)(b,{label:e.id,count:e.total,children:e.options.map(e=>(0,j.jsxs)(_,{index:e.index,className:`h-auto flex-col items-start gap-0 py-1`,children:[(0,j.jsx)(n,{text:e.hit.item.title,query:i.trimmed,className:`font-medium`,variant:`tint`}),(0,j.jsx)(`span`,{className:`text-[11px] text-[color:var(--row-muted,var(--muted-foreground))]`,children:e.hit.item.path})]},e.key))},e.id)),i.trimmed&&i.hitCount===0?(0,j.jsxs)(g,{children:[`Nothing called “`,i.trimmed,`”`]}):null]}),(0,j.jsxs)(d,{children:[i.hitCount,` of `,M.length,` pages`]})]})]}),(0,j.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Opened: `,t??`nothing yet`]})]})}var I=`import { Highlight } from "@kitora/ui/highlight"
import { useState } from "react"
import { localSearch, SearchBoxClear, SearchBoxControl, SearchBoxEmpty, SearchBoxFooter, SearchBoxGroup, SearchBoxInput, SearchBoxList, SearchBoxOption, SearchBoxPopup, SearchBoxRoot, SearchBoxShortcut, SearchBoxStatusRow, useRecentSearches, useSearchBox } from "@kitora/search"
import { SearchIcon } from "@kitora/collections"

interface Page { readonly id: string; readonly title: string; readonly path: string; readonly section: string }
const PAGES: readonly Page[] = [
  { id: "billing", title: "Billing", path: "Settings › Billing", section: "Settings" },
  { id: "invoices", title: "Invoices", path: "Settings › Billing › Invoices", section: "Settings" },
  { id: "members", title: "Members", path: "Settings › Members", section: "Settings" },
  { id: "api", title: "API keys", path: "Developers › API keys", section: "Developers" },
  { id: "webhooks", title: "Webhooks", path: "Developers › Webhooks", section: "Developers" },
  { id: "profile", title: "Profile", path: "Account › Profile", section: "Account" },
]
const search = localSearch(PAGES, [{ key: "title", get: (p) => p.title, weight: 2 }, { key: "path", get: (p) => p.path }])
const SECTIONS = ["Settings", "Developers", "Account"]

// The styled SearchBox is only \`useSearchBox\` drawn with its public parts (\`SearchBoxRoot\`, …; also reachable as
// \`SearchBox.Root\`, …). This file rebuilds it with the same parts and its own row markup: a two-line row, a section
// count, a custom footer, no "See all" row. \`/\` focuses it; \`SearchBoxShortcut\` shows that key while the query is empty.
export function ComposedSearchBox() {
  const recent = useRecentSearches({ initial: ["members"] })
  const [opened, setOpened] = useState<string | null>(null)
  const box = useSearchBox({ search, recent, getKey: (p) => p.id, groupOf: (p) => p.section, groupOrder: SECTIONS, label: "Search pages", shortcut: "/", onSelect: (p) => setOpened(p.path) })
  return (
    <div className="flex h-full flex-col gap-2 text-[13px]">
      <SearchBoxRoot controller={box} className="max-w-sm">
        <SearchBoxControl className="rounded-full">
          <SearchIcon className="size-3.5 shrink-0 text-muted-foreground" />
          <SearchBoxInput placeholder="Jump to a page…" />
          <SearchBoxClear />
          <SearchBoxShortcut />
        </SearchBoxControl>
        <SearchBoxPopup>
          <SearchBoxList maxHeight={220}>
            <SearchBoxStatusRow />
            {box.recentOptions.length > 0 ? (
              <SearchBoxGroup label="Recent">
                {box.recentOptions.map((option) => (
                  <SearchBoxOption key={option.key} index={option.index}>{option.query}</SearchBoxOption>
                ))}
              </SearchBoxGroup>
            ) : null}
            {box.groups.map((group) => (
              <SearchBoxGroup key={group.id} label={group.id} count={group.total}>
                {group.options.map((option) => (
                  <SearchBoxOption key={option.key} index={option.index} className="h-auto flex-col items-start gap-0 py-1">
                    <Highlight text={option.hit.item.title} query={box.trimmed} className="font-medium" variant="tint" />
                    {/* \`--row-muted\`: secondary text that follows the row highlight (a language can highlight in the brand colour). */}
                    <span className="text-[11px] text-[color:var(--row-muted,var(--muted-foreground))]">{option.hit.item.path}</span>
                  </SearchBoxOption>
                ))}
              </SearchBoxGroup>
            ))}
            {box.trimmed && box.hitCount === 0 ? <SearchBoxEmpty>Nothing called “{box.trimmed}”</SearchBoxEmpty> : null}
          </SearchBoxList>
          <SearchBoxFooter>{box.hitCount} of {PAGES.length} pages</SearchBoxFooter>
        </SearchBoxPopup>
      </SearchBoxRoot>
      <p className="text-muted-foreground">Opened: {opened ?? "nothing yet"}</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>i(()=>import(`./compose-D7RpzQJW.js`),[]));var L=[{id:1,title:`Quarterly billing report`,kind:`Report`,team:`Finance`},{id:2,title:`Billing API reference`,kind:`Guide`,team:`Platform`},{id:3,title:`Onboarding checklist`,kind:`Checklist`,team:`Support`},{id:4,title:`Refund policy`,kind:`Policy`,team:`Finance`},{id:5,title:`Incident runbook`,kind:`Guide`,team:`Platform`},{id:6,title:`Support macros`,kind:`Checklist`,team:`Support`},{id:7,title:`Pricing FAQ`,kind:`Guide`,team:`Finance`}],te={fields:[{key:`title`,get:e=>e.title}],facets:[{id:`kind`,label:`Type`,get:e=>e.kind},{id:`team`,label:`Team`,get:e=>e.team}]};function R(){let e=T(L,te),{response:t,state:r}=e;return(0,j.jsxs)(`div`,{className:`flex gap-4 text-[13px]`,children:[(0,j.jsx)(E,{facets:t.facets,onToggle:e.toggle,onClear:e.clearFilters,className:`w-44 shrink-0`}),(0,j.jsxs)(`div`,{className:`min-w-0 flex-1 space-y-2`,children:[(0,j.jsx)(`input`,{value:r.query,onChange:t=>e.setQuery(t.target.value),placeholder:`Filter by title…`,"aria-label":`Query`,className:`h-7 w-full rounded-md border bg-background px-2 outline-none focus:border-ring`}),(0,j.jsx)(O,{selection:r.selection,facets:t.facets,onToggle:e.toggle}),(0,j.jsxs)(`ul`,{className:`divide-y rounded-md border`,children:[t.page.items.map(({item:e})=>(0,j.jsxs)(`li`,{className:`flex items-center justify-between px-2 py-1.5`,children:[(0,j.jsx)(n,{text:e.title,query:r.query,variant:`tint`}),(0,j.jsxs)(`span`,{className:`text-[12px] text-muted-foreground`,children:[e.kind,` · `,e.team]})]},e.id)),t.page.total===0?(0,j.jsx)(`li`,{className:`px-2 py-4 text-center text-muted-foreground`,children:`No documents match.`}):null]})]})]})}var z=`import { Highlight } from "@kitora/ui/highlight"
import { ActiveFilters, FacetPanel, useSearch, type FacetDef, type SearchSetup } from "@kitora/search"

interface Doc { readonly id: number; readonly title: string; readonly kind: string; readonly team: string }
const DOCS: readonly Doc[] = [
  { id: 1, title: "Quarterly billing report", kind: "Report", team: "Finance" },
  { id: 2, title: "Billing API reference", kind: "Guide", team: "Platform" },
  { id: 3, title: "Onboarding checklist", kind: "Checklist", team: "Support" },
  { id: 4, title: "Refund policy", kind: "Policy", team: "Finance" },
  { id: 5, title: "Incident runbook", kind: "Guide", team: "Platform" },
  { id: 6, title: "Support macros", kind: "Checklist", team: "Support" },
  { id: 7, title: "Pricing FAQ", kind: "Guide", team: "Finance" },
]
const FACETS: readonly FacetDef<Doc>[] = [{ id: "kind", label: "Type", get: (d) => d.kind }, { id: "team", label: "Team", get: (d) => d.team }]
const SETUP: SearchSetup<Doc> = { fields: [{ key: "title", get: (d) => d.title }], facets: FACETS }

// Within a facet values are OR, across facets AND. Each facet counts over the OTHER facets' picks, so siblings never vanish.
export function BasicFacets() {
  const search = useSearch(DOCS, SETUP)
  const { response, state } = search
  return (
    <div className="flex gap-4 text-[13px]">
      <FacetPanel facets={response.facets} onToggle={search.toggle} onClear={search.clearFilters} className="w-44 shrink-0" />
      <div className="min-w-0 flex-1 space-y-2">
        <input value={state.query} onChange={(e) => search.setQuery(e.target.value)} placeholder="Filter by title…" aria-label="Query" className="h-7 w-full rounded-md border bg-background px-2 outline-none focus:border-ring" />
        <ActiveFilters selection={state.selection} facets={response.facets} onToggle={search.toggle} />
        <ul className="divide-y rounded-md border">
          {response.page.items.map(({ item }) => (
            <li key={item.id} className="flex items-center justify-between px-2 py-1.5">
              <Highlight text={item.title} query={state.query} variant="tint" />
              <span className="text-[12px] text-muted-foreground">{item.kind} · {item.team}</span>
            </li>
          ))}
          {response.page.total === 0 ? <li className="px-2 py-4 text-center text-muted-foreground">No documents match.</li> : null}
        </ul>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>i(()=>import(`./facets-BAE33KqX.js`),[]));var B=[`Café Crème Brûlée`,`Billing and invoices`,`Export invoices to CSV`,`Résumé builder`];function V(){let[e,t]=(0,A.useState)(`cafe inv`);return(0,j.jsxs)(`div`,{className:`space-y-2 text-[13px]`,children:[(0,j.jsx)(`input`,{value:e,onChange:e=>t(e.target.value),"aria-label":`Query`,className:`h-7 w-56 rounded-md border bg-background px-2 outline-none focus:border-ring`}),(0,j.jsx)(`ul`,{className:`space-y-1`,children:B.map(t=>(0,j.jsx)(`li`,{children:(0,j.jsx)(n,{text:t,query:e,variant:`tint`})},t))})]})}var H=`import { useState } from "react"
import { Highlight } from "@kitora/ui/highlight"

const LINES = ["Café Crème Brûlée", "Billing and invoices", "Export invoices to CSV", "Résumé builder"]

// ui \`Highlight\` takes the raw query: it splits and folds it and finds every hit (case- and
// accent-insensitive: "cafe" finds "Café"), then marks them in the amber \`tint\` variant the search
// box uses. (The search kit's own \`queryTerms\` / \`matchRanges\` are deprecated in favour of this.)
export function BasicHighlight() {
  const [query, setQuery] = useState("cafe inv")
  return (
    <div className="space-y-2 text-[13px]">
      <input value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Query" className="h-7 w-56 rounded-md border bg-background px-2 outline-none focus:border-ring" />
      <ul className="space-y-1">
        {LINES.map((line) => <li key={line}><Highlight text={line} query={query} variant="tint" /></li>)}
      </ul>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>i(()=>import(`./highlight-CSWGnSpO.js`),[]));var U=Array.from({length:487},(e,t)=>`Result ${t+1}`);function W(){let[e,t]=(0,A.useState)(1),[n,r]=(0,A.useState)(10),i=c(U,e,n);return(0,j.jsxs)(`div`,{className:`space-y-2 text-[13px]`,children:[(0,j.jsx)(`ol`,{className:`grid grid-cols-5 gap-1 text-muted-foreground tabular-nums`,children:i.items.slice(0,10).map(e=>(0,j.jsx)(`li`,{className:`rounded border px-1.5 py-0.5`,children:e},e))}),(0,j.jsx)(D,{page:i,onPage:t,onPageSize:e=>{r(e),t(1)}})]})}var G=`import { useState } from "react"
import { paginate, ResultsPagination } from "@kitora/search"

const ROWS = Array.from({ length: 487 }, (_, i) => \`Result \${i + 1}\`)

// paginate() slices and clamps; ResultsPagination draws the range, page size and a page strip with gaps.
export function BasicPagination() {
  const [page, setPage] = useState(1)
  const [size, setSize] = useState(10)
  const current = paginate(ROWS, page, size)
  return (
    <div className="space-y-2 text-[13px]">
      <ol className="grid grid-cols-5 gap-1 text-muted-foreground tabular-nums">
        {current.items.slice(0, 10).map((row) => <li key={row} className="rounded border px-1.5 py-0.5">{row}</li>)}
      </ol>
      <ResultsPagination page={current} onPage={setPage} onPageSize={(s) => { setSize(s); setPage(1) }} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>i(()=>import(`./pagination-CSmTJyp2.js`),[]));var K=l([{id:`billing`,title:`Billing`,path:`Settings › Billing`},{id:`invoices`,title:`Invoices`,path:`Settings › Billing › Invoices`},{id:`members`,title:`Members`,path:`Settings › Members`},{id:`api`,title:`API keys`,path:`Settings › Developers`},{id:`webhooks`,title:`Webhooks`,path:`Settings › Developers`},{id:`profile`,title:`Profile`,path:`Account`}],[{key:`title`,get:e=>e.title,weight:2},{key:`path`,get:e=>e.path}]);function q(){let e=h({initial:[`billing`,`api`]}),[t,n]=(0,A.useState)(null);return(0,j.jsxs)(`div`,{className:`flex h-full flex-col gap-2 text-[13px]`,children:[(0,j.jsx)(C,{search:K,recent:e,shortcut:`s`,placeholder:`Search settings…`,getKey:e=>e.id,getLabel:e=>e.title,getDescription:e=>e.path,onSelect:e=>n(e.title),className:`max-w-sm`}),(0,j.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Opened: `,t??`nothing yet`]})]})}var J=`import { useState } from "react"
import { localSearch, SearchBox, useRecentSearches } from "@kitora/search"

interface Page { readonly id: string; readonly title: string; readonly path: string }
const PAGES: readonly Page[] = [
  { id: "billing", title: "Billing", path: "Settings › Billing" },
  { id: "invoices", title: "Invoices", path: "Settings › Billing › Invoices" },
  { id: "members", title: "Members", path: "Settings › Members" },
  { id: "api", title: "API keys", path: "Settings › Developers" },
  { id: "webhooks", title: "Webhooks", path: "Settings › Developers" },
  { id: "profile", title: "Profile", path: "Account" },
]
const search = localSearch(PAGES, [{ key: "title", get: (p) => p.title, weight: 2 }, { key: "path", get: (p) => p.path }])

// Focus the box (or press S; the gallery itself owns /) to see recent searches; type for instant results. ↑/↓ and ↵ work throughout.
export function BasicSearchBox() {
  const recent = useRecentSearches({ initial: ["billing", "api"] })
  const [opened, setOpened] = useState<string | null>(null)
  return (
    <div className="flex h-full flex-col gap-2 text-[13px]">
      <SearchBox search={search} recent={recent} shortcut="s" placeholder="Search settings…" getKey={(p) => p.id} getLabel={(p) => p.title} getDescription={(p) => p.path} onSelect={(p) => setOpened(p.title)} className="max-w-sm" />
      <p className="text-muted-foreground">Opened: {opened ?? "nothing yet"}</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>i(()=>import(`./search-box-kVFQN8e3.js`),[]));var Y=[{name:`react`,stars:231e3,language:`JavaScript`},{name:`react-router`,stars:54e3,language:`TypeScript`},{name:`redux`,stars:61e3,language:`TypeScript`},{name:`rust`,stars:101e3,language:`Rust`},{name:`ripgrep`,stars:5e4,language:`Rust`},{name:`rails`,stars:56e3,language:`Ruby`},{name:`remix`,stars:31e3,language:`TypeScript`},{name:`vite`,stars:7e4,language:`TypeScript`},{name:`vitest`,stars:14e3,language:`TypeScript`},{name:`vue`,stars:48e3,language:`TypeScript`}];function X(e,t){return new Promise((n,r)=>{let i=setTimeout(()=>n(Y.filter(t=>t.name.includes(e.toLowerCase())).toSorted((e,t)=>t.stars-e.stars)),400);t.addEventListener(`abort`,()=>{clearTimeout(i),r(t.reason)})})}var Z=async(e,t)=>u(await X(e,t));function Q(e){let t=[];return{read:()=>t,write:n=>{t=n,queueMicrotask(()=>e(`saved ${n.length} recent`))}}}function ne(){let[e,t]=(0,A.useState)(`no writes yet`),[n]=(0,A.useState)(()=>Q(t)),r=h({store:n}),[i,a]=(0,A.useState)(null);return(0,j.jsxs)(`div`,{className:`flex h-full flex-col gap-2 text-[13px]`,children:[(0,j.jsx)(C,{search:Z,debounceMs:150,recent:r,label:`Search repositories`,placeholder:`Search repositories (try “re”)…`,getKey:e=>e.name,getLabel:e=>e.name,getDescription:e=>e.language,getMeta:e=>`★ ${(e.stars/1e3).toFixed(0)}k`,onSelect:e=>a(e.name),className:`max-w-sm`}),(0,j.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Opened: `,(0,j.jsx)(`span`,{"data-testid":`remote-opened`,children:i??`nothing yet`}),` · store: `,e]})]})}var $=`import { useState } from "react"
import { SearchBox, toHits, useRecentSearches, type RecentStore, type SearchSource } from "@kitora/search"

interface Repo { readonly name: string; readonly stars: number; readonly language: string }
const INDEX: readonly Repo[] = [
  { name: "react", stars: 231000, language: "JavaScript" },
  { name: "react-router", stars: 54000, language: "TypeScript" },
  { name: "redux", stars: 61000, language: "TypeScript" },
  { name: "rust", stars: 101000, language: "Rust" },
  { name: "ripgrep", stars: 50000, language: "Rust" },
  { name: "rails", stars: 56000, language: "Ruby" },
  { name: "remix", stars: 31000, language: "TypeScript" },
  { name: "vite", stars: 70000, language: "TypeScript" },
  { name: "vitest", stars: 14000, language: "TypeScript" },
  { name: "vue", stars: 48000, language: "TypeScript" },
]

// stub: replace with your API. A pretend server: answers after 400 ms, ranked by stars, and honours the abort signal.
function fetchRepos(query: string, signal: AbortSignal): Promise<readonly Repo[]> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => resolve(INDEX.filter((r) => r.name.includes(query.toLowerCase())).toSorted((a, b) => b.stars - a.stars)), 400)
    signal.addEventListener("abort", () => {
      clearTimeout(timer)
      reject(signal.reason)
    })
  })
}

// The data-source adapter: any (query, signal) => hits | Promise<hits>. A server already ranked them, so toHits keeps its order.
const remoteSource: SearchSource<Repo> = async (query, signal) => toHits(await fetchRepos(query, signal))

// The recents adapter: here an in-memory store that also logs each write (yours could POST to a server).
function loggingStore(log: (line: string) => void): RecentStore {
  let list: readonly string[] = []
  return { read: () => list, write: (next) => { list = next; queueMicrotask(() => log(\`saved \${next.length} recent\`)) } }
}

// Custom adapters: an async source with a 150 ms debounce (the box shows "Searching…" and drops stale answers) and a custom recent store.
export function RemoteSearchBox() {
  const [log, setLog] = useState("no writes yet")
  const [store] = useState(() => loggingStore(setLog))
  const recent = useRecentSearches({ store })
  const [opened, setOpened] = useState<string | null>(null)
  return (
    <div className="flex h-full flex-col gap-2 text-[13px]">
      <SearchBox
        search={remoteSource}
        debounceMs={150}
        recent={recent}
        label="Search repositories"
        placeholder="Search repositories (try “re”)…"
        getKey={(r) => r.name}
        getLabel={(r) => r.name}
        getDescription={(r) => r.language}
        getMeta={(r) => \`★ \${(r.stars / 1000).toFixed(0)}k\`}
        onSelect={(r) => setOpened(r.name)}
        className="max-w-sm"
      />
      <p className="text-muted-foreground">Opened: <span data-testid="remote-opened">{opened ?? "nothing yet"}</span> · store: {log}</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>i(()=>import(`./remote-source-sms5boz8.js`),[]));function re(){return(0,j.jsxs)(`div`,{children:[(0,j.jsx)(t,{title:`Basics: search`,children:`The pieces of a search experience, one at a time: highlighting, the search box (styled, rebuilt from its parts, and on a custom data source), facets and the page strip.`}),(0,j.jsx)(s,{n:1,title:`Highlight`,blurb:"ui `Highlight` finds every query word, ignoring case and accents, and marks them in its `tint` variant, as the search box does.",code:H,children:(0,j.jsx)(k,{testId:`basic-highlight`,children:(0,j.jsx)(V,{})})}),(0,j.jsx)(s,{n:2,title:`The search box`,blurb:`Recent searches when empty, instant results as you type, ↑/↓ and ↵, S to focus.`,code:J,children:(0,j.jsx)(k,{testId:`basic-search-box`,height:300,className:`p-3`,children:(0,j.jsx)(q,{})})}),(0,j.jsx)(s,{n:3,title:`Compose your own`,blurb:"`useSearchBox` + the parts the preset is built from (`SearchBoxRoot`, `SearchBoxControl`, `SearchBoxInput`, `SearchBoxClear`, `SearchBoxShortcut`, `SearchBoxPopup`, `SearchBoxList`, `SearchBoxStatusRow`, `SearchBoxGroup`, `SearchBoxOption`, `SearchBoxEmpty`, `SearchBoxFooter`), with your own rows, groups and footer.",code:I,children:(0,j.jsx)(k,{testId:`basic-compose`,height:320,className:`p-3`,children:(0,j.jsx)(F,{})})}),(0,j.jsx)(s,{n:4,title:`Your own data source`,blurb:"A custom `SearchSource` (async, abortable, debounced, with a loading row) and a custom `RecentStore`.",code:$,children:(0,j.jsx)(k,{testId:`basic-remote`,height:300,className:`p-3`,children:(0,j.jsx)(ne,{})})}),(0,j.jsx)(s,{n:5,title:`Facets`,blurb:"`useSearch` + `FacetPanel`: OR within a facet, AND across, counts that never hide siblings.",code:z,children:(0,j.jsx)(k,{testId:`basic-facets`,children:(0,j.jsx)(R,{})})}),(0,j.jsx)(s,{n:6,title:`Pagination`,blurb:"`paginate` + `ResultsPagination`: range, page size, first / prev / pages with gaps / next / last.",code:G,children:(0,j.jsx)(k,{testId:`basic-pagination`,children:(0,j.jsx)(W,{})})})]})}export{re as component};