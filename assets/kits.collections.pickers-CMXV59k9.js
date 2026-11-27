import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./database-C3sxj0I-.js";import{s as n}from"./kit-docs-Cf27Kpa-.js";import{t as r}from"./server-CJZD-zNH.js";import{t as i}from"./zap-Cc_MY59V.js";import{l as a}from"./model-BiVkNloq.js";import{t as o}from"./tags-input-T4PCj2jz.js";import{t as s}from"./combobox-C16CR069.js";import{Ec as c,Pi as l,Uc as u,zc as d}from"./index-BZuUy872.js";import{t as f}from"./select-Ddc2TRJI.js";import{t as p}from"./multi-select-CQuXlv3a.js";import"./kit-gallery-BBavj2rC.js";import{t as m}from"./example-B67lLz1F.js";import{t as h}from"./-kits.collections.shared-CrMBZThW.js";var g=l(`cloud`,[[`path`,{d:`M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z`,key:`p7xjir`}]]),_=l(`hard-drive`,[[`line`,{x1:`22`,x2:`2`,y1:`12`,y2:`12`,key:`1y58io`}],[`path`,{d:`M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,key:`oot6mr`}],[`line`,{x1:`6`,x2:`6.01`,y1:`16`,y2:`16`,key:`sgf278`}],[`line`,{x1:`10`,x2:`10.01`,y1:`16`,y2:`16`,key:`1l4acy`}]]),v=e(u(),1),y=d(),b=[a(`americas`,`Americas`,[{id:`us-east-1`,label:`US East`,description:`N. Virginia`,hint:`12 ms`},{id:`us-west-2`,label:`US West`,description:`Oregon`,hint:`71 ms`},{id:`sa-east-1`,label:`South America`,description:`São Paulo`,hint:`118 ms`,disabled:!0}]),a(`europe`,`Europe`,[{id:`eu-west-1`,label:`EU West`,description:`Ireland`,hint:`84 ms`},{id:`eu-central-1`,label:`EU Central`,description:`Frankfurt`,hint:`92 ms`}]),a(`asia`,`Asia Pacific`,[{id:`ap-south-1`,label:`Asia South`,description:`Mumbai`,hint:`201 ms`},{id:`ap-northeast-1`,label:`Asia North East`,description:`Tokyo`,hint:`160 ms`}])],x=[{id:`postgres`,label:`PostgreSQL 17`,icon:(0,y.jsx)(t,{})},{id:`mysql`,label:`MySQL 8.4`,icon:(0,y.jsx)(r,{})},{id:`redis`,label:`Redis 8`,icon:(0,y.jsx)(i,{})},{id:`sqlite`,label:`SQLite`,icon:(0,y.jsx)(_,{}),disabled:!0,description:`not managed`},{id:`s3`,label:`Object storage`,icon:(0,y.jsx)(g,{})}];function S(){let[e,t]=(0,v.useState)(`eu-west-1`),[n,r]=(0,v.useState)(null);return(0,y.jsxs)(`div`,{className:`grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2`,children:[(0,y.jsxs)(`div`,{className:`space-y-1`,children:[(0,y.jsx)(`div`,{id:`region-label`,className:`text-[12px] font-medium`,children:`Region`}),(0,y.jsx)(f,{"aria-labelledby":`region-label`,items:b,value:e,onChange:t})]}),(0,y.jsxs)(`div`,{className:`space-y-1`,children:[(0,y.jsx)(`div`,{id:`engine-label`,className:`text-[12px] font-medium`,children:`Engine`}),(0,y.jsx)(f,{"aria-labelledby":`engine-label`,items:x,value:n,onChange:r,placeholder:`Choose an engine`,clearable:!0,invalid:n===null}),n===null?(0,y.jsx)(`p`,{className:`text-[11px] text-destructive`,children:`Pick an engine to continue.`}):null]}),(0,y.jsxs)(`div`,{className:`space-y-1`,children:[(0,y.jsx)(`div`,{id:`plan-label`,className:`text-[12px] font-medium text-muted-foreground`,children:`Plan (locked)`}),(0,y.jsx)(f,{"aria-labelledby":`plan-label`,items:[{id:`pro`,label:`Pro`}],defaultValue:`pro`,disabled:!0})]})]})}var C=`import { useState } from "react"
import { Cloud, Database, HardDrive, Server, Zap } from "lucide-react"
import { section, Select, type CollectionNode, type Entry } from "@kitora/collections"

const REGIONS: readonly CollectionNode<Entry>[] = [
  section("americas", "Americas", [
    { id: "us-east-1", label: "US East", description: "N. Virginia", hint: "12 ms" },
    { id: "us-west-2", label: "US West", description: "Oregon", hint: "71 ms" },
    { id: "sa-east-1", label: "South America", description: "São Paulo", hint: "118 ms", disabled: true },
  ]),
  section("europe", "Europe", [
    { id: "eu-west-1", label: "EU West", description: "Ireland", hint: "84 ms" },
    { id: "eu-central-1", label: "EU Central", description: "Frankfurt", hint: "92 ms" },
  ]),
  section("asia", "Asia Pacific", [
    { id: "ap-south-1", label: "Asia South", description: "Mumbai", hint: "201 ms" },
    { id: "ap-northeast-1", label: "Asia North East", description: "Tokyo", hint: "160 ms" },
  ]),
]

const ENGINES: readonly Entry[] = [
  { id: "postgres", label: "PostgreSQL 17", icon: <Database /> },
  { id: "mysql", label: "MySQL 8.4", icon: <Server /> },
  { id: "redis", label: "Redis 8", icon: <Zap /> },
  { id: "sqlite", label: "SQLite", icon: <HardDrive />, disabled: true, description: "not managed" },
  { id: "s3", label: "Object storage", icon: <Cloud /> },
]

/** Selects with sections, descriptions, latency hints, icons, disabled options, clearing, and the invalid and disabled states. */
export function PickersSelect() {
  const [region, setRegion] = useState<string | null>("eu-west-1")
  const [engine, setEngine] = useState<string | null>(null)
  return (
    <div className="grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
      <div className="space-y-1">
        <div id="region-label" className="text-[12px] font-medium">Region</div>
        <Select aria-labelledby="region-label" items={REGIONS} value={region} onChange={setRegion} />
      </div>
      <div className="space-y-1">
        <div id="engine-label" className="text-[12px] font-medium">Engine</div>
        <Select aria-labelledby="engine-label" items={ENGINES} value={engine} onChange={setEngine} placeholder="Choose an engine" clearable invalid={engine === null} />
        {engine === null ? <p className="text-[11px] text-destructive">Pick an engine to continue.</p> : null}
      </div>
      <div className="space-y-1">
        <div id="plan-label" className="text-[12px] font-medium text-muted-foreground">Plan (locked)</div>
        <Select aria-labelledby="plan-label" items={[{ id: "pro", label: "Pro" }]} defaultValue="pro" disabled />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>c(()=>import(`./pickers-select-uh7kFAO1.js`),[]));var w=async(e,t)=>(await I(e,t)).map(e=>({id:e.id,label:e.label,hint:e.hint,keywords:e.keywords,icon:(0,y.jsx)(`span`,{className:`text-[13px] leading-none`,children:F(e.hint)})})),T=async(e,t)=>(await N(e,t)).map(e=>({id:e.id,label:e.label,description:e.description,hint:e.hint,icon:(0,y.jsx)(L,{name:e.label,color:e.color})}));function E(){let[e,t]=(0,v.useState)(null),[n,r]=(0,v.useState)([]),[i,a]=(0,v.useState)([]);return(0,y.jsxs)(`div`,{className:`grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2`,children:[(0,y.jsxs)(`div`,{className:`space-y-1`,children:[(0,y.jsx)(`div`,{id:`country-label`,className:`text-[12px] font-medium`,children:`Country`}),(0,y.jsx)(s,{"aria-labelledby":`country-label`,placeholder:`Search 56 countries…`,loadItems:w,value:e,onChange:t}),(0,y.jsxs)(`p`,{className:`text-[11px] text-muted-foreground tabular-nums`,children:[`Value: `,e??`—`]})]}),(0,y.jsxs)(`div`,{className:`space-y-1`,children:[(0,y.jsx)(`div`,{id:`reviewers-label`,className:`text-[12px] font-medium`,children:`Reviewers (max 4)`}),(0,y.jsx)(p,{"aria-labelledby":`reviewers-label`,placeholder:`Search people…`,loadItems:T,max:4,value:n,onChange:(e,t)=>{r(e),a(t.map(e=>e.label))}}),(0,y.jsx)(`p`,{className:`truncate text-[11px] text-muted-foreground`,children:i.length>0?i.join(`, `):`Nobody yet`})]})]})}function D(e,t){return new Promise((n,r)=>{let i=setTimeout(n,e);t?.addEventListener(`abort`,()=>{clearTimeout(i),r(new DOMException(`aborted`,`AbortError`))})})}var O=[`Ada`,`Alan`,`Grace`,`Linus`,`Margaret`,`Ken`,`Barbara`,`Dennis`,`Frances`,`John`,`Radia`,`Tim`,`Sophie`,`Guido`,`Anders`,`Yukihiro`,`Brendan`,`Rasmus`,`Bjarne`,`Katherine`],k=[`Lovelace`,`Turing`,`Hopper`,`Torvalds`,`Hamilton`,`Thompson`,`Liskov`,`Ritchie`,`Allen`,`McCarthy`,`Perlman`,`Berners-Lee`,`Wilson`,`van Rossum`,`Hejlsberg`,`Matsumoto`,`Eich`,`Lerdorf`,`Stroustrup`,`Johnson`],A=[`Engineering`,`Design`,`Product`,`Support`,`Research`],j=[`#10b981`,`#6366f1`,`#f59e0b`,`#ef4444`,`#0ea5e9`,`#a855f7`,`#14b8a6`,`#f97316`],M=Array.from({length:200},(e,t)=>{let n=O[t%O.length]??`Ada`,r=k[t*7%k.length]??`Lovelace`;return{id:`p${t}`,label:`${n} ${r}`,description:A[t%A.length],hint:`@${n.toLowerCase()}${t}`,color:j[t%j.length]??`#10b981`}});async function N(e,t){if(await D(350,t),e.trim().toLowerCase()===`fail`)throw Error(`Directory is unavailable`);let n=e.trim().toLowerCase();return M.filter(e=>n===``||e.label.toLowerCase().includes(n)||(e.hint??``).includes(n)).slice(0,12)}var P=`AR Argentina;AU Australia;AT Austria;BE Belgium;BR Brazil;CA Canada;CL Chile;CN China;CO Colombia;HR Croatia;CZ Czechia;DK Denmark;EG Egypt;EE Estonia;FI Finland;FR France;DE Germany;GR Greece;HU Hungary;IS Iceland;IN India;ID Indonesia;IE Ireland;IL Israel;IT Italy;JP Japan;KE Kenya;LV Latvia;LT Lithuania;MY Malaysia;MX Mexico;MA Morocco;NL Netherlands;NZ New Zealand;NG Nigeria;NO Norway;PE Peru;PH Philippines;PL Poland;PT Portugal;RO Romania;SA Saudi Arabia;SG Singapore;ZA South Africa;KR South Korea;ES Spain;SE Sweden;CH Switzerland;TW Taiwan;TH Thailand;TR Türkiye;UA Ukraine;AE United Arab Emirates;GB United Kingdom;US United States;VN Vietnam`.split(`;`).map(e=>{let t=e.slice(0,2);return{id:t.toLowerCase(),label:e.slice(3),hint:t,keywords:[t]}});function F(e){return[...e.toUpperCase()].map(e=>String.fromCodePoint(127462+e.charCodeAt(0)-65)).join(``)}async function I(e,t){await D(300,t);let n=e.trim().toLowerCase();return P.filter(e=>n===``||e.label.toLowerCase().includes(n)||e.hint.toLowerCase()===n)}function L({name:e,color:t}){let n=e.split(` `).map(e=>e[0]??``).join(``).slice(0,2);return(0,y.jsx)(`span`,{className:`grid size-4 place-items-center rounded-full text-[8px] font-semibold text-white`,style:{background:t},children:n})}var R=`import { useState } from "react"
import { Combobox, MultiSelect, type Entry } from "@kitora/collections"

const countryItems = async (query: string, signal: AbortSignal): Promise<Entry[]> =>
  (await searchCountries(query, signal)).map((c) => ({ id: c.id, label: c.label, hint: c.hint, keywords: c.keywords, icon: <span className="text-[13px] leading-none">{flag(c.hint)}</span> }))

const peopleItems = async (query: string, signal: AbortSignal): Promise<Entry[]> =>
  (await searchPeople(query, signal)).map((p) => ({ id: p.id, label: p.label, description: p.description, hint: p.hint, icon: <Avatar name={p.label} color={p.color} /> }))

/** Async search: debounced, the stale request is cancelled, a spinner while loading, an error row with Retry (type "fail"). */
export function PickersAsync() {
  const [country, setCountry] = useState<string | null>(null)
  const [reviewers, setReviewers] = useState<string[]>([])
  const [names, setNames] = useState<string[]>([])
  return (
    <div className="grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
      <div className="space-y-1">
        <div id="country-label" className="text-[12px] font-medium">Country</div>
        <Combobox<Entry> aria-labelledby="country-label" placeholder="Search 56 countries…" loadItems={countryItems} value={country} onChange={setCountry} />
        <p className="text-[11px] text-muted-foreground tabular-nums">Value: {country ?? "—"}</p>
      </div>
      <div className="space-y-1">
        <div id="reviewers-label" className="text-[12px] font-medium">Reviewers (max 4)</div>
        <MultiSelect<Entry>
          aria-labelledby="reviewers-label"
          placeholder="Search people…"
          loadItems={peopleItems}
          max={4}
          value={reviewers}
          onChange={(ids, items) => {
            setReviewers(ids)
            setNames(items.map((i) => i.label))
          }}
        />
        <p className="truncate text-[11px] text-muted-foreground">{names.length > 0 ? names.join(", ") : "Nobody yet"}</p>
      </div>
    </div>
  )
}

// ---- Stub data and fake APIs (stub: replace with your API). They wait like a network
// would and honour the AbortSignal the kit passes.

/** Resolves after \`ms\`, or rejects when \`signal\` aborts first. */
function wait(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, ms)
    signal?.addEventListener("abort", () => {
      clearTimeout(timer)
      reject(new DOMException("aborted", "AbortError"))
    })
  })
}

interface Person {
  readonly id: string
  readonly label: string
  readonly description?: string
  readonly hint?: string
  readonly color: string
}

const FIRST = ["Ada", "Alan", "Grace", "Linus", "Margaret", "Ken", "Barbara", "Dennis", "Frances", "John", "Radia", "Tim", "Sophie", "Guido", "Anders", "Yukihiro", "Brendan", "Rasmus", "Bjarne", "Katherine"]
const LAST = ["Lovelace", "Turing", "Hopper", "Torvalds", "Hamilton", "Thompson", "Liskov", "Ritchie", "Allen", "McCarthy", "Perlman", "Berners-Lee", "Wilson", "van Rossum", "Hejlsberg", "Matsumoto", "Eich", "Lerdorf", "Stroustrup", "Johnson"]
const ROLES = ["Engineering", "Design", "Product", "Support", "Research"]
const COLORS = ["#10b981", "#6366f1", "#f59e0b", "#ef4444", "#0ea5e9", "#a855f7", "#14b8a6", "#f97316"]

/** 200 people, deterministic. */
const PEOPLE: readonly Person[] = Array.from({ length: 200 }, (_, i) => {
  const first = FIRST[i % FIRST.length] ?? "Ada"
  const last = LAST[(i * 7) % LAST.length] ?? "Lovelace"
  return { id: \`p\${i}\`, label: \`\${first} \${last}\`, description: ROLES[i % ROLES.length], hint: \`@\${first.toLowerCase()}\${i}\`, color: COLORS[i % COLORS.length] ?? "#10b981" }
})

/** A people search that takes ~350ms; type "fail" to see the error row. */
async function searchPeople(query: string, signal: AbortSignal): Promise<Person[]> {
  await wait(350, signal)
  if (query.trim().toLowerCase() === "fail") throw new Error("Directory is unavailable")
  const q = query.trim().toLowerCase()
  return PEOPLE.filter((p) => q === "" || p.label.toLowerCase().includes(q) || (p.hint ?? "").includes(q)).slice(0, 12)
}

interface Country {
  readonly id: string
  readonly label: string
  readonly hint: string
  readonly keywords: readonly string[]
}

const COUNTRY_ROWS = "AR Argentina;AU Australia;AT Austria;BE Belgium;BR Brazil;CA Canada;CL Chile;CN China;CO Colombia;HR Croatia;CZ Czechia;DK Denmark;EG Egypt;EE Estonia;FI Finland;FR France;DE Germany;GR Greece;HU Hungary;IS Iceland;IN India;ID Indonesia;IE Ireland;IL Israel;IT Italy;JP Japan;KE Kenya;LV Latvia;LT Lithuania;MY Malaysia;MX Mexico;MA Morocco;NL Netherlands;NZ New Zealand;NG Nigeria;NO Norway;PE Peru;PH Philippines;PL Poland;PT Portugal;RO Romania;SA Saudi Arabia;SG Singapore;ZA South Africa;KR South Korea;ES Spain;SE Sweden;CH Switzerland;TW Taiwan;TH Thailand;TR Türkiye;UA Ukraine;AE United Arab Emirates;GB United Kingdom;US United States;VN Vietnam"

/** Countries with their ISO code as a hint and keyword. */
const COUNTRIES: readonly Country[] = COUNTRY_ROWS.split(";").map((row) => {
  const code = row.slice(0, 2)
  return { id: code.toLowerCase(), label: row.slice(3), hint: code, keywords: [code] }
})

/** The flag emoji for an ISO country code. */
function flag(code: string): string {
  return [...code.toUpperCase()].map((c) => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65)).join("")
}

/** A country search that takes ~300ms. */
async function searchCountries(query: string, signal: AbortSignal): Promise<Country[]> {
  await wait(300, signal)
  const q = query.trim().toLowerCase()
  return COUNTRIES.filter((c) => q === "" || c.label.toLowerCase().includes(q) || c.hint.toLowerCase() === q)
}

/** A tiny initials avatar for the people demos. */
function Avatar({ name, color }: { readonly name: string; readonly color: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0] ?? "")
    .join("")
    .slice(0, 2)
  return (
    <span className="grid size-4 place-items-center rounded-full text-[8px] font-semibold text-white" style={{ background: color }}>
      {initials}
    </span>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>c(()=>import(`./pickers-async-CWjEshJq.js`),[]));var z=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;function B(){let[e,t]=(0,v.useState)([`frontend`,`backend`,`infra`].map(e=>({id:e,label:e}))),[n,r]=(0,v.useState)(`frontend`),[i,a]=(0,v.useState)([`ada@example.com`]),[c,l]=(0,v.useState)([]);return(0,y.jsxs)(`div`,{className:`grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2`,children:[(0,y.jsxs)(`div`,{className:`space-y-1`,children:[(0,y.jsx)(`div`,{id:`team-label`,className:`text-[12px] font-medium`,children:`Team tag`}),(0,y.jsx)(s,{"aria-labelledby":`team-label`,items:e,value:n,onChange:r,onCreate:e=>{let n={id:e.toLowerCase().replace(/\s+/g,`-`),label:e};return t(e=>[...e,n]),n}}),(0,y.jsxs)(`p`,{className:`text-[11px] text-muted-foreground`,children:[e.length,` tags · type a new one and press Enter`]})]}),(0,y.jsxs)(`div`,{className:`space-y-1`,children:[(0,y.jsx)(`div`,{id:`invite-label`,className:`text-[12px] font-medium`,children:`Invite by email`}),(0,y.jsx)(o,{"aria-labelledby":`invite-label`,value:i,onChange:e=>{a(e),l([])},onReject:l,validate:e=>z.test(e),max:5,placeholder:`name@company.com`,suggestions:[`grace@example.com`,`linus@example.com`,`margaret@example.com`,`ken@example.com`,`barbara@example.com`],invalid:c.length>0}),(0,y.jsx)(`p`,{className:c.length>0?`text-[11px] text-destructive`:`text-[11px] text-muted-foreground tabular-nums`,children:c.length>0?`Not added: ${c.join(`, `)}`:`${i.length} / 5 · paste a comma-separated list`})]})]})}var V=`import { useState } from "react"
import { Combobox, TagsInput, type Entry } from "@kitora/collections"

const EMAIL = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/

/** "Create …" when nothing matches, and a tags input that validates emails, caps at 5 and suggests known addresses. */
export function PickersCreate() {
  const [tags, setTags] = useState<Entry[]>(["frontend", "backend", "infra"].map((t) => ({ id: t, label: t })))
  const [tag, setTag] = useState<string | null>("frontend")
  const [emails, setEmails] = useState<string[]>(["ada@example.com"])
  const [rejected, setRejected] = useState<string[]>([])
  return (
    <div className="grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
      <div className="space-y-1">
        <div id="team-label" className="text-[12px] font-medium">Team tag</div>
        <Combobox
          aria-labelledby="team-label"
          items={tags}
          value={tag}
          onChange={setTag}
          onCreate={(label) => {
            const item = { id: label.toLowerCase().replace(/\\s+/g, "-"), label }
            setTags((all) => [...all, item])
            return item
          }}
        />
        <p className="text-[11px] text-muted-foreground">{tags.length} tags · type a new one and press Enter</p>
      </div>
      <div className="space-y-1">
        <div id="invite-label" className="text-[12px] font-medium">Invite by email</div>
        <TagsInput
          aria-labelledby="invite-label"
          value={emails}
          onChange={(next) => {
            setEmails(next)
            setRejected([])
          }}
          onReject={setRejected}
          validate={(t) => EMAIL.test(t)}
          max={5}
          placeholder="name@company.com"
          suggestions={["grace@example.com", "linus@example.com", "margaret@example.com", "ken@example.com", "barbara@example.com"]}
          invalid={rejected.length > 0}
        />
        <p className={rejected.length > 0 ? "text-[11px] text-destructive" : "text-[11px] text-muted-foreground tabular-nums"}>
          {rejected.length > 0 ? \`Not added: \${rejected.join(", ")}\` : \`\${emails.length} / 5 · paste a comma-separated list\`}
        </p>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>c(()=>import(`./pickers-create-D8cnqXW8.js`),[]));function H(){return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(n,{title:`Pickers`,children:`Realistic pickers: rich options, remote search, creating values and validated tags.`}),(0,y.jsx)(m,{n:1,title:`Rich selects`,blurb:`Sections, descriptions, latency hints, icons, a disabled option, clearing, and the invalid and disabled field states.`,code:C,children:(0,y.jsx)(h,{testId:`pickers-select`,children:(0,y.jsx)(S,{})})}),(0,y.jsx)(m,{n:2,title:`Async search`,blurb:`Debounced, the stale request aborted, a spinner while loading; type “fail” for the error row and its Retry. The reviewers field caps at four.`,code:R,children:(0,y.jsx)(h,{testId:`pickers-async`,children:(0,y.jsx)(E,{})})}),(0,y.jsx)(m,{n:3,title:`Create and validate`,blurb:`“Create …” when nothing matches exactly; emails validated, capped at five, with suggestions and paste splitting.`,code:V,children:(0,y.jsx)(h,{testId:`pickers-create`,children:(0,y.jsx)(B,{})})})]})}export{H as component};