import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Uc as r,ri as i,zc as a}from"./index-BZuUy872.js";import{i as o,n as s,r as c}from"./people-BirwDKzw.js";import{a as l,n as u,o as d,r as f,t as p}from"./badges-BZf8K0MK.js";import{n as m,t as h}from"./status-dot-B8vX2Cf8.js";import"./kit-gallery-BBavj2rC.js";import{t as g}from"./example-B67lLz1F.js";var _=a(),v=[{id:`u1`,name:`Ada Lovelace`,role:`Staff engineer`,team:`Platform`,location:`London`,email:`ada@acme.dev`,presence:`online`,skills:[`Go`,`Postgres`,`Infra`]},{id:`u2`,name:`Grace Hopper`,role:`Engineering manager`,team:`Platform`,location:`Arlington`,email:`grace@acme.dev`,presence:`busy`,skills:[`Leadership`,`Compilers`]},{id:`u3`,name:`Linus Pauling`,role:`Data scientist`,team:`Insights`,location:`Portland`,email:`linus@acme.dev`,presence:`away`,skills:[`Python`,`SQL`,`ML`]},{id:`u4`,name:`Katherine Johnson`,role:`Product designer`,team:`Design`,location:`Hampton`,email:`katherine@acme.dev`,presence:`online`,skills:[`Figma`,`Research`]},{id:`u5`,name:`Alan Turing`,role:`Security engineer`,team:`Security`,location:`Manchester`,email:`alan@acme.dev`,presence:`offline`,skills:[`Crypto`,`Rust`]},{id:`u6`,name:`Hedy Lamarr`,role:`Frontend engineer`,team:`Web`,location:`Vienna`,email:`hedy@acme.dev`,presence:`online`,skills:[`React`,`TypeScript`,`A11y`]},{id:`u7`,name:`Margaret Hamilton`,role:`Principal engineer`,team:`Reliability`,location:`Boston`,email:`margaret@acme.dev`,presence:`away`,skills:[`SRE`,`Go`]},{id:`u8`,name:`Tim Berners-Lee`,role:`Developer advocate`,team:`DevRel`,location:`Geneva`,email:`tim@acme.dev`,presence:`offline`,skills:[`Docs`,`HTTP`]},{id:`u9`,name:`Radia Perlman`,role:`Network engineer`,team:`Infra`,location:`Seattle`,email:`radia@acme.dev`,presence:`online`,skills:[`Networking`,`BGP`]},{id:`u10`,name:`Barbara Liskov`,role:`Architect`,team:`Platform`,location:`Cambridge`,email:`barbara@acme.dev`,presence:`busy`,skills:[`Distributed systems`]}],y=[`#e5484d`,`#3e63dd`,`#30a46c`,`#f76b15`];function b(){return(0,_.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,_.jsx)(s,{people:v.slice(0,3)}),(0,_.jsx)(s,{people:v.slice(0,4).map((e,t)=>({...e,color:y[t]})),size:`md`,ringByColor:!0}),(0,_.jsx)(s,{people:v,max:4,size:`md`,presence:!0}),(0,_.jsx)(s,{people:v,max:6,size:`xs`,after:(0,_.jsx)(`span`,{className:`text-[12px] text-muted-foreground`,children:`10 watching`})})]})}var x=`import { AvatarStack, type PersonLike, type Presence } from "@kitora/display"

interface TeamMember extends PersonLike {
  readonly id: string
  readonly role: string
  readonly team: string
  readonly location: string
  readonly email: string
  readonly presence: Presence
  readonly skills: readonly string[]
}

const TEAM: readonly TeamMember[] = [
  { id: "u1", name: "Ada Lovelace", role: "Staff engineer", team: "Platform", location: "London", email: "ada@acme.dev", presence: "online", skills: ["Go", "Postgres", "Infra"] },
  { id: "u2", name: "Grace Hopper", role: "Engineering manager", team: "Platform", location: "Arlington", email: "grace@acme.dev", presence: "busy", skills: ["Leadership", "Compilers"] },
  { id: "u3", name: "Linus Pauling", role: "Data scientist", team: "Insights", location: "Portland", email: "linus@acme.dev", presence: "away", skills: ["Python", "SQL", "ML"] },
  { id: "u4", name: "Katherine Johnson", role: "Product designer", team: "Design", location: "Hampton", email: "katherine@acme.dev", presence: "online", skills: ["Figma", "Research"] },
  { id: "u5", name: "Alan Turing", role: "Security engineer", team: "Security", location: "Manchester", email: "alan@acme.dev", presence: "offline", skills: ["Crypto", "Rust"] },
  { id: "u6", name: "Hedy Lamarr", role: "Frontend engineer", team: "Web", location: "Vienna", email: "hedy@acme.dev", presence: "online", skills: ["React", "TypeScript", "A11y"] },
  { id: "u7", name: "Margaret Hamilton", role: "Principal engineer", team: "Reliability", location: "Boston", email: "margaret@acme.dev", presence: "away", skills: ["SRE", "Go"] },
  { id: "u8", name: "Tim Berners-Lee", role: "Developer advocate", team: "DevRel", location: "Geneva", email: "tim@acme.dev", presence: "offline", skills: ["Docs", "HTTP"] },
  { id: "u9", name: "Radia Perlman", role: "Network engineer", team: "Infra", location: "Seattle", email: "radia@acme.dev", presence: "online", skills: ["Networking", "BGP"] },
  { id: "u10", name: "Barbara Liskov", role: "Architect", team: "Platform", location: "Cambridge", email: "barbara@acme.dev", presence: "busy", skills: ["Distributed systems"] },
]

/** Collaboration cursor colours, one per person. */
const CURSOR_COLORS = ["#e5484d", "#3e63dd", "#30a46c", "#f76b15"] as const

/** Overlapping avatars; past \`max\` the rest fold into +N, whose tooltip names them. Hover or focus any avatar for its name. \`ringByColor\` rings each one in the person's \`color\` (or their palette colour), collaboration-cursor style. */
export function BasicAvatarStack() {
  return (
    <div className="flex flex-col gap-3">
      <AvatarStack people={TEAM.slice(0, 3)} />
      <AvatarStack people={TEAM.slice(0, 4).map((p, i) => ({ ...p, color: CURSOR_COLORS[i] }))} size="md" ringByColor />
      <AvatarStack people={TEAM} max={4} size="md" presence />
      <AvatarStack people={TEAM} max={6} size="xs" after={<span className="text-[12px] text-muted-foreground">10 watching</span>} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>n(()=>import(`./avatar-stack-DXAJOPZE.js`),[]));function S(){return(0,_.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,_.jsx)(c,{name:`Ada Lovelace`,size:`xs`}),(0,_.jsx)(c,{name:`Ada Lovelace`,size:`sm`,presence:`online`}),(0,_.jsx)(c,{name:`Grace Hopper`,size:`md`,presence:`busy`}),(0,_.jsx)(c,{name:`Alan Turing`,size:`lg`,presence:`away`}),(0,_.jsx)(c,{name:`Hedy Lamarr`,size:`xl`,presence:`offline`}),(0,_.jsx)(c,{name:`Acme Inc`,size:`lg`,shape:`square`}),(0,_.jsx)(c,{name:`Broken image`,size:`lg`,src:`data:image/png;base64,AAAA`})]})}var C=`import { PersonAvatar } from "@kitora/display"

/** Sizes, a square shape, an image, initials on a colour stable per name, and the four presence states. */
export function BasicAvatars() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <PersonAvatar name="Ada Lovelace" size="xs" />
      <PersonAvatar name="Ada Lovelace" size="sm" presence="online" />
      <PersonAvatar name="Grace Hopper" size="md" presence="busy" />
      <PersonAvatar name="Alan Turing" size="lg" presence="away" />
      <PersonAvatar name="Hedy Lamarr" size="xl" presence="offline" />
      <PersonAvatar name="Acme Inc" size="lg" shape="square" />
      <PersonAvatar name="Broken image" size="lg" src="data:image/png;base64,AAAA" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>n(()=>import(`./avatars-BGdUba8n.js`),[]));function w(){return(0,_.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[[`soft`,`solid`,`outline`].map(e=>(0,_.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5`,children:[(0,_.jsx)(`span`,{className:`w-14 text-[12px] text-muted-foreground`,children:e}),p.map(t=>(0,_.jsx)(f,{tone:t,variant:e,children:t},t))]},e)),(0,_.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5`,children:[(0,_.jsx)(`span`,{className:`w-14 text-[12px] text-muted-foreground`,children:`states`}),(0,_.jsx)(f,{tone:`success`,dot:!0,children:`Healthy`}),(0,_.jsx)(f,{tone:`info`,pulse:!0,children:`Deploying`}),(0,_.jsx)(f,{tone:`danger`,variant:`outline`,dot:!0,children:`Failed`}),(0,_.jsx)(u,{count:7}),(0,_.jsx)(u,{count:240,tone:`accent`})]})]})}var T=`import { BADGE_TONES, CountBadge, StatusBadge } from "@kitora/display"

/** Each tone in the three styles, a status dot, a pulse for live states, and a count pill. */
export function BasicBadges() {
  return (
    <div className="flex flex-col gap-2">
      {(["soft", "solid", "outline"] as const).map((variant) => (
        <div key={variant} className="flex flex-wrap items-center gap-1.5">
          <span className="w-14 text-[12px] text-muted-foreground">{variant}</span>
          {BADGE_TONES.map((tone) => (
            <StatusBadge key={tone} tone={tone} variant={variant}>
              {tone}
            </StatusBadge>
          ))}
        </div>
      ))}
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="w-14 text-[12px] text-muted-foreground">states</span>
        <StatusBadge tone="success" dot>Healthy</StatusBadge>
        <StatusBadge tone="info" pulse>Deploying</StatusBadge>
        <StatusBadge tone="danger" variant="outline" dot>Failed</StatusBadge>
        <CountBadge count={7} />
        <CountBadge count={240} tone="accent" />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>n(()=>import(`./badges-GnEnAe1j.js`),[]));var E=[{name:`Ada Lovelace`,email:`ada@example.com`,presence:`online`,role:`Owner`},{name:`Grace Hopper`,email:`grace@example.com`,presence:`away`,role:`Admin`},{name:`Alan Turing`,email:`alan@example.com`,presence:`offline`,role:`Member`}];function D(){return(0,_.jsxs)(`div`,{className:`flex max-w-sm flex-col gap-1`,children:[E.map(e=>(0,_.jsx)(o,{person:{name:e.name,presence:e.presence},secondary:e.email,size:`sm`,trailing:(0,_.jsx)(`span`,{className:`text-[12px] text-muted-foreground`,children:e.role})},e.email)),(0,_.jsx)(o,{person:{name:`Hedy Lamarr`},secondary:`Open profile`,onClick:()=>void 0,trailing:(0,_.jsx)(u,{count:3}),className:`p-1`})]})}var O=`import { CountBadge, PersonCard } from "@kitora/display"

const TEAM = [
  { name: "Ada Lovelace", email: "ada@example.com", presence: "online", role: "Owner" },
  { name: "Grace Hopper", email: "grace@example.com", presence: "away", role: "Admin" },
  { name: "Alan Turing", email: "alan@example.com", presence: "offline", role: "Member" },
] as const

/** A person row: avatar with presence, name, a secondary line and a trailing slot; with \`onClick\` the whole row is one button. */
export function BasicPersonCard() {
  return (
    <div className="flex max-w-sm flex-col gap-1">
      {TEAM.map((p) => (
        <PersonCard key={p.email} person={{ name: p.name, presence: p.presence }} secondary={p.email} size="sm" trailing={<span className="text-[12px] text-muted-foreground">{p.role}</span>} />
      ))}
      <PersonCard person={{ name: "Hedy Lamarr" }} secondary="Open profile" onClick={() => undefined} trailing={<CountBadge count={3} />} className="p-1" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>n(()=>import(`./person-card-CIpi94Dn.js`),[]));var k=[{name:`API`,tone:`success`,status:`Operational`},{name:`Webhooks`,tone:`warning`,status:`Degraded`,pulse:!0},{name:`Search index`,tone:`info`,status:`Rebuilding`,pulse:!0},{name:`Billing`,tone:`danger`,status:`Outage`},{name:`Docs`,tone:`neutral`,status:`Paused`}];function A(){return(0,_.jsxs)(`div`,{className:`grid gap-3 text-[13px] md:grid-cols-2`,children:[(0,_.jsx)(`ul`,{className:`divide-y rounded-md border`,"aria-label":`Services`,children:k.map(e=>(0,_.jsxs)(`li`,{className:`flex items-center justify-between px-2.5 py-1.5`,children:[(0,_.jsx)(`span`,{children:e.name}),(0,_.jsx)(m,{tone:e.tone,pulse:`pulse`in e&&e.pulse,children:e.status})]},e.name))}),(0,_.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,_.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,_.jsx)(`span`,{className:`w-16 text-[12px] text-muted-foreground`,children:`tones`}),p.map(e=>(0,_.jsx)(m,{tone:e,label:e},e))]}),(0,_.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,_.jsx)(`span`,{className:`w-16 text-[12px] text-muted-foreground`,children:`sizes`}),h.map(e=>(0,_.jsx)(m,{tone:`success`,size:e,children:e},e))]}),(0,_.jsxs)(`div`,{className:`flex items-center gap-3`,"data-testid":`standalone-dots`,children:[(0,_.jsx)(`span`,{className:`w-16 text-[12px] text-muted-foreground`,children:`standalone`}),(0,_.jsx)(m,{tone:`success`,pulse:!0,label:`Live`}),(0,_.jsx)(m,{tone:`danger`,label:`Build failed`}),(0,_.jsx)(`span`,{className:`text-[12px] text-muted-foreground`,children:`(announced by their aria-label)`})]})]})]})}var j=`import { BADGE_TONES, STATUS_DOT_SIZES, StatusDot } from "@kitora/display"

const SERVICES = [
  { name: "API", tone: "success", status: "Operational" },
  { name: "Webhooks", tone: "warning", status: "Degraded", pulse: true },
  { name: "Search index", tone: "info", status: "Rebuilding", pulse: true },
  { name: "Billing", tone: "danger", status: "Outage" },
  { name: "Docs", tone: "neutral", status: "Paused" },
] as const

/** Every tone with a visible label, live states that pulse, the four sizes, and standalone dots that are still announced. */
export function BasicStatusDot() {
  return (
    <div className="grid gap-3 text-[13px] md:grid-cols-2">
      <ul className="divide-y rounded-md border" aria-label="Services">
        {SERVICES.map((s) => (
          <li key={s.name} className="flex items-center justify-between px-2.5 py-1.5">
            <span>{s.name}</span>
            <StatusDot tone={s.tone} pulse={"pulse" in s && s.pulse}>
              {s.status}
            </StatusDot>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="w-16 text-[12px] text-muted-foreground">tones</span>
          {BADGE_TONES.map((tone) => (
            <StatusDot key={tone} tone={tone} label={tone} />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="w-16 text-[12px] text-muted-foreground">sizes</span>
          {STATUS_DOT_SIZES.map((size) => (
            <StatusDot key={size} tone="success" size={size}>
              {size}
            </StatusDot>
          ))}
        </div>
        <div className="flex items-center gap-3" data-testid="standalone-dots">
          <span className="w-16 text-[12px] text-muted-foreground">standalone</span>
          <StatusDot tone="success" pulse label="Live" />
          <StatusDot tone="danger" label="Build failed" />
          <span className="text-[12px] text-muted-foreground">(announced by their aria-label)</span>
        </div>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>n(()=>import(`./status-dot-D4cvOsPB.js`),[]));var M=e(r(),1),N=[{tone:`info`,label:`Queued`,pulse:!1},{tone:`accent`,label:`Running`,pulse:!0},{tone:`success`,label:`Passed`,pulse:!1},{tone:`danger`,label:`Failed`,pulse:!1}];function P(){let[e,t]=(0,M.useState)(1),n=N[e%N.length];return n?(0,_.jsxs)(`div`,{className:`flex items-center gap-3 text-[13px]`,children:[(0,_.jsxs)(m.Root,{tone:n.tone,pulse:n.pulse,size:`md`,className:`rounded-md border px-2 py-1`,children:[(0,_.jsx)(m.Indicator,{haloClassName:`-inset-1 opacity-40`}),(0,_.jsx)(m.Label,{className:`font-medium`,children:n.label}),(0,_.jsxs)(`span`,{className:`text-[12px] text-muted-foreground`,children:[`build #`,1280+e]})]}),(0,_.jsx)(i,{size:`sm`,variant:`outline`,onClick:()=>t(e=>e+1),"data-testid":`compose-dot-next`,children:`Next state`})]}):null}var F=`import { StatusDot, type BadgeTone } from "@kitora/display"
import { Button } from "@kitora/ui/button"
import { useState } from "react"

const STATES: ReadonlyArray<{ readonly tone: BadgeTone; readonly label: string; readonly pulse: boolean }> = [
  { tone: "info", label: "Queued", pulse: false },
  { tone: "accent", label: "Running", pulse: true },
  { tone: "success", label: "Passed", pulse: false },
  { tone: "danger", label: "Failed", pulse: false },
]

/**
 * The preset rebuilt from its parts: \`Root\` holds tone, pulse and size; \`Indicator\` is the dot
 * (with a bigger, softer halo here); \`Label\` is the visible text, followed by markup of your own.
 */
export function ComposeStatusDot() {
  const [step, setStep] = useState(1)
  const state = STATES[step % STATES.length]
  if (!state) return null
  return (
    <div className="flex items-center gap-3 text-[13px]">
      <StatusDot.Root tone={state.tone} pulse={state.pulse} size="md" className="rounded-md border px-2 py-1">
        <StatusDot.Indicator haloClassName="-inset-1 opacity-40" />
        <StatusDot.Label className="font-medium">{state.label}</StatusDot.Label>
        <span className="text-[12px] text-muted-foreground">build #{1280 + step}</span>
      </StatusDot.Root>
      <Button size="sm" variant="outline" onClick={() => setStep((s) => s + 1)} data-testid="compose-dot-next">
        Next state
      </Button>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>n(()=>import(`./compose-status-dot-4N2oO7pY.js`),[]));var I=[{id:`bug`,label:`bug`,color:`#ef4444`},{id:`p1`,label:`priority: high`,color:`#f59e0b`},{id:`web`,label:`web`,color:`#3b82f6`},{id:`a11y`,label:`accessibility`,color:`#8b5cf6`},{id:`docs`,label:`docs`,color:`#10b981`}];function L(){let[e,t]=(0,M.useState)(I),[n,r]=(0,M.useState)(!0);return(0,_.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,_.jsx)(d,{tags:e,onRemove:e=>t(t=>t.filter(t=>t.id!==e.id))}),(0,_.jsx)(d,{tags:I,max:3}),(0,_.jsxs)(`div`,{className:`flex gap-1`,children:[(0,_.jsx)(l,{onClick:()=>r(e=>!e),selected:n,children:`Open only`}),(0,_.jsx)(`button`,{type:`button`,className:`text-[12px] text-muted-foreground underline`,onClick:()=>t(I),children:`Reset`})]})]})}var R=`import { useState } from "react"
import { Tag, TagList, type TagItem } from "@kitora/display"

const START: readonly TagItem[] = [
  { id: "bug", label: "bug", color: "#ef4444" },
  { id: "p1", label: "priority: high", color: "#f59e0b" },
  { id: "web", label: "web", color: "#3b82f6" },
  { id: "a11y", label: "accessibility", color: "#8b5cf6" },
  { id: "docs", label: "docs", color: "#10b981" },
]

/** Removable tags with colour swatches, a "+N" overflow, and selectable filter tags. */
export function BasicTags() {
  const [tags, setTags] = useState(START)
  const [on, setOn] = useState(true)
  return (
    <div className="flex flex-col gap-2">
      <TagList tags={tags} onRemove={(tag) => setTags((all) => all.filter((t) => t.id !== tag.id))} />
      <TagList tags={START} max={3} />
      <div className="flex gap-1">
        <Tag onClick={() => setOn((v) => !v)} selected={on}>
          Open only
        </Tag>
        <button type="button" className="text-[12px] text-muted-foreground underline" onClick={() => setTags(START)}>
          Reset
        </button>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>n(()=>import(`./tags-BRhkl9b6.js`),[]));function z(){return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(t,{title:`Basics: people and labels`,children:`Who is here and what state things are in.`}),(0,_.jsx)(g,{n:1,title:`Avatars and presence`,blurb:`Initials on a colour stable per name when there is no image (or it fails to load).`,code:C,children:(0,_.jsx)(S,{})}),(0,_.jsx)(g,{n:2,title:`An avatar stack`,blurb:"Overlapping avatars with a +N chip that names the rest, and a ring in each person's colour (`ringByColor`).",code:x,children:(0,_.jsx)(b,{})}),(0,_.jsx)(g,{n:3,title:`Badges`,blurb:`Six tones in soft, solid and outline, with dots, a pulse and counts.`,code:T,children:(0,_.jsx)(w,{})}),(0,_.jsx)(g,{n:4,title:`Tags`,blurb:`Removable, coloured, collapsible and selectable labels.`,code:R,children:(0,_.jsx)(L,{})}),(0,_.jsx)(g,{n:5,title:`A status dot`,blurb:"A general status indicator in the badge tones, with a pulse for live states (still under reduced motion) and four sizes. A dot without visible text is announced by its `label`.",code:j,children:(0,_.jsx)(A,{})}),(0,_.jsx)(g,{n:6,title:`Compose a status dot`,blurb:"The preset rebuilt from `StatusDot.Root`, `StatusDot.Indicator` and `StatusDot.Label`, with a softer halo and markup of your own in the row.",code:F,children:(0,_.jsx)(P,{})}),(0,_.jsx)(g,{n:7,title:`A person card`,blurb:"A full-width row on `PersonAvatar`: presence, name, a secondary line and a trailing slot. With `onClick` the whole row is one button.",code:O,children:(0,_.jsx)(D,{})})]})}export{z as component};