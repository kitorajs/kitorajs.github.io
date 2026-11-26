import{t as e}from"./bell-ring-DD_TnxYl.js";import{t}from"./circle-check-CEqScjDT.js";import{s as n}from"./kit-docs-CvNs0WqT.js";import{t as r}from"./git-commit-horizontal-Bw7umnwT.js";import{t as i}from"./key-round-DDzAVqxg.js";import{t as a}from"./message-square-3FtuajII.js";import{t as o}from"./rocket-DlwnT5g4.js";import{t as s}from"./settings-BYIHPtJX.js";import{t as c}from"./trash-2-0f767-k3.js";import{t as l}from"./triangle-alert-BxmJxCv7.js";import{t as u}from"./undo-2-CNsU07mN.js";import{t as d}from"./user-plus-CEVILXCU.js";import{Cc as f,Ic as p,Mi as m}from"./index-9y5uwRd3.js";import{t as h}from"./code-block-qBHLFEGc.js";import{t as g}from"./timeline-BQ9mCFLX.js";import{r as _}from"./people-BWa0DOHZ.js";import{r as v}from"./badges-CKbRtUKd.js";import"./kit-gallery-B-Yr9fP4.js";import{t as y}from"./example-CZLJLtIC.js";var b=m(`log-in`,[[`path`,{d:`m10 17 5-5-5-5`,key:`1bsop3`}],[`path`,{d:`M15 12H3`,key:`6jk70r`}],[`path`,{d:`M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4`,key:`u53s6r`}]]),x=p(),S=new Date(`2026-10-15T14:30:00Z`),C=e=>new Date(S.getTime()-e*6e4),w=[{id:`u1`,name:`Ada Lovelace`,role:`Staff engineer`,team:`Platform`,location:`London`,email:`ada@acme.dev`,presence:`online`,skills:[`Go`,`Postgres`,`Infra`]},{id:`u2`,name:`Grace Hopper`,role:`Engineering manager`,team:`Platform`,location:`Arlington`,email:`grace@acme.dev`,presence:`busy`,skills:[`Leadership`,`Compilers`]},{id:`u3`,name:`Linus Pauling`,role:`Data scientist`,team:`Insights`,location:`Portland`,email:`linus@acme.dev`,presence:`away`,skills:[`Python`,`SQL`,`ML`]},{id:`u4`,name:`Katherine Johnson`,role:`Product designer`,team:`Design`,location:`Hampton`,email:`katherine@acme.dev`,presence:`online`,skills:[`Figma`,`Research`]},{id:`u5`,name:`Alan Turing`,role:`Security engineer`,team:`Security`,location:`Manchester`,email:`alan@acme.dev`,presence:`offline`,skills:[`Crypto`,`Rust`]},{id:`u6`,name:`Hedy Lamarr`,role:`Frontend engineer`,team:`Web`,location:`Vienna`,email:`hedy@acme.dev`,presence:`online`,skills:[`React`,`TypeScript`,`A11y`]},{id:`u7`,name:`Margaret Hamilton`,role:`Principal engineer`,team:`Reliability`,location:`Boston`,email:`margaret@acme.dev`,presence:`away`,skills:[`SRE`,`Go`]},{id:`u8`,name:`Tim Berners-Lee`,role:`Developer advocate`,team:`DevRel`,location:`Geneva`,email:`tim@acme.dev`,presence:`offline`,skills:[`Docs`,`HTTP`]},{id:`u9`,name:`Radia Perlman`,role:`Network engineer`,team:`Infra`,location:`Seattle`,email:`radia@acme.dev`,presence:`online`,skills:[`Networking`,`BGP`]},{id:`u10`,name:`Barbara Liskov`,role:`Architect`,team:`Platform`,location:`Cambridge`,email:`barbara@acme.dev`,presence:`busy`,skills:[`Distributed systems`]}],T=e=>w[e]?.name??`Someone`,E=[{id:`a1`,group:`Today`,icon:(0,x.jsx)(b,{}),tone:`info`,actor:T(0),title:`signed in from London (Chrome, macOS)`,time:C(12)},{id:`a2`,group:`Today`,icon:(0,x.jsx)(i,{}),tone:`warning`,actor:T(4),title:`rotated the production API key`,time:C(47)},{id:`a3`,group:`Today`,icon:(0,x.jsx)(d,{}),tone:`success`,actor:T(1),title:`invited radia@acme.dev as Developer`,time:C(130)},{id:`a4`,group:`Today`,icon:(0,x.jsx)(s,{}),tone:`neutral`,actor:T(5),title:`changed the session timeout from 12 h to 8 h`,time:C(310)},{id:`a5`,group:`Yesterday`,icon:(0,x.jsx)(c,{}),tone:`danger`,actor:T(6),title:`deleted the staging-old project`,time:C(1320)},{id:`a6`,group:`Yesterday`,icon:(0,x.jsx)(b,{}),tone:`info`,actor:T(2),title:`signed in from Portland (Firefox, Linux)`,time:C(1560)},{id:`a7`,group:`Yesterday`,icon:(0,x.jsx)(s,{}),tone:`neutral`,actor:T(9),title:`enabled SSO enforcement for @acme.dev`,time:C(1740)}];function D(){return(0,x.jsx)(`div`,{className:`max-w-xl rounded-lg border bg-card p-3`,children:(0,x.jsx)(g,{events:E,now:S,density:`compact`,label:`Audit log`})})}var O=`import { KeyRound, LogIn, Settings, Trash2, UserPlus } from "lucide-react"
import { Timeline, type TimelineEvent, type PersonLike, type Presence } from "@kitora/display"

/** The gallery's fixed clock: every relative time is measured from here. */
const DEMO_NOW = new Date("2026-10-15T14:30:00Z")

/** \`minutes\` before {@link DEMO_NOW}. */
const minutesAgo = (minutes: number) => new Date(DEMO_NOW.getTime() - minutes * 60_000)

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

// An audit feed in compact density, grouped by day: \`group\` on each event, consecutive equal
// groups share one heading. Times are relative to the gallery's fixed clock.
const name = (i: number) => TEAM[i]?.name ?? "Someone"

const EVENTS: readonly TimelineEvent[] = [
  { id: "a1", group: "Today", icon: <LogIn />, tone: "info", actor: name(0), title: "signed in from London (Chrome, macOS)", time: minutesAgo(12) },
  { id: "a2", group: "Today", icon: <KeyRound />, tone: "warning", actor: name(4), title: "rotated the production API key", time: minutesAgo(47) },
  { id: "a3", group: "Today", icon: <UserPlus />, tone: "success", actor: name(1), title: "invited radia@acme.dev as Developer", time: minutesAgo(130) },
  { id: "a4", group: "Today", icon: <Settings />, tone: "neutral", actor: name(5), title: "changed the session timeout from 12 h to 8 h", time: minutesAgo(310) },
  { id: "a5", group: "Yesterday", icon: <Trash2 />, tone: "danger", actor: name(6), title: "deleted the staging-old project", time: minutesAgo(60 * 22) },
  { id: "a6", group: "Yesterday", icon: <LogIn />, tone: "info", actor: name(2), title: "signed in from Portland (Firefox, Linux)", time: minutesAgo(60 * 26) },
  { id: "a7", group: "Yesterday", icon: <Settings />, tone: "neutral", actor: name(9), title: "enabled SSO enforcement for @acme.dev", time: minutesAgo(60 * 29) },
]

export function AuditFeed() {
  return (
    <div className="max-w-xl rounded-lg border bg-card p-3">
      <Timeline events={EVENTS} now={DEMO_NOW} density="compact" label="Audit log" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>f(()=>import(`./activity-audit-sCZpVUeQ.js`),[]));var k=new Date(`2026-10-15T14:30:00Z`),A=e=>new Date(k.getTime()-e*6e4),j=[{id:`u1`,name:`Ada Lovelace`,role:`Staff engineer`,team:`Platform`,location:`London`,email:`ada@acme.dev`,presence:`online`,skills:[`Go`,`Postgres`,`Infra`]},{id:`u2`,name:`Grace Hopper`,role:`Engineering manager`,team:`Platform`,location:`Arlington`,email:`grace@acme.dev`,presence:`busy`,skills:[`Leadership`,`Compilers`]},{id:`u3`,name:`Linus Pauling`,role:`Data scientist`,team:`Insights`,location:`Portland`,email:`linus@acme.dev`,presence:`away`,skills:[`Python`,`SQL`,`ML`]},{id:`u4`,name:`Katherine Johnson`,role:`Product designer`,team:`Design`,location:`Hampton`,email:`katherine@acme.dev`,presence:`online`,skills:[`Figma`,`Research`]},{id:`u5`,name:`Alan Turing`,role:`Security engineer`,team:`Security`,location:`Manchester`,email:`alan@acme.dev`,presence:`offline`,skills:[`Crypto`,`Rust`]},{id:`u6`,name:`Hedy Lamarr`,role:`Frontend engineer`,team:`Web`,location:`Vienna`,email:`hedy@acme.dev`,presence:`online`,skills:[`React`,`TypeScript`,`A11y`]},{id:`u7`,name:`Margaret Hamilton`,role:`Principal engineer`,team:`Reliability`,location:`Boston`,email:`margaret@acme.dev`,presence:`away`,skills:[`SRE`,`Go`]},{id:`u8`,name:`Tim Berners-Lee`,role:`Developer advocate`,team:`DevRel`,location:`Geneva`,email:`tim@acme.dev`,presence:`offline`,skills:[`Docs`,`HTTP`]},{id:`u9`,name:`Radia Perlman`,role:`Network engineer`,team:`Infra`,location:`Seattle`,email:`radia@acme.dev`,presence:`online`,skills:[`Networking`,`BGP`]},{id:`u10`,name:`Barbara Liskov`,role:`Architect`,team:`Platform`,location:`Cambridge`,email:`barbara@acme.dev`,presence:`busy`,skills:[`Distributed systems`]}],[M,N,,,,P]=j;function F({index:e}){let t=j[e];return t?(0,x.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 align-middle`,children:[(0,x.jsx)(_,{name:t.name,size:`xs`}),t.name]}):null}var I=[{id:`alert`,icon:(0,x.jsx)(e,{}),tone:`danger`,title:`checkout-api p95 latency above 2 s for 5 minutes`,time:A(92),body:(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5`,children:[(0,x.jsx)(v,{tone:`danger`,dot:!0,pulse:!0,children:`SEV-2`}),(0,x.jsx)(v,{variant:`outline`,children:`checkout-api`}),(0,x.jsx)(v,{variant:`outline`,children:`eu-west-1`})]})},{id:`ack`,icon:(0,x.jsx)(l,{}),tone:`warning`,actor:(0,x.jsx)(F,{index:6}),title:`acknowledged and took incident command`,time:A(88)},{id:`deploy`,icon:(0,x.jsx)(r,{}),tone:`info`,actor:(0,x.jsx)(F,{index:0}),title:`linked the suspect deploy`,time:A(81),body:(0,x.jsx)(h,{bare:!0,language:`bash`,code:`git show --stat 4f2c91a  # "batch tax lookups" by ${M?.name??`Ada`}`})},{id:`note`,icon:(0,x.jsx)(a,{}),tone:`neutral`,actor:(0,x.jsx)(F,{index:5}),title:`commented`,time:A(76),body:(0,x.jsx)(`p`,{className:`rounded-md border bg-muted/30 px-2 py-1.5 text-foreground/90`,children:`Tax service connection pool is saturated: 40 of 40 in use, 300+ waiting. The batch path opens one connection per line item.`})},{id:`rollback`,icon:(0,x.jsx)(u,{}),tone:`accent`,actor:(0,x.jsx)(F,{index:1}),title:`rolled back checkout-api to 9b81e07`,time:A(70),body:(0,x.jsx)(v,{tone:`success`,dot:!0,children:`Rollback healthy in 3 of 3 regions`})},{id:`resolved`,icon:(0,x.jsx)(t,{}),tone:`success`,actor:(0,x.jsx)(F,{index:6}),title:`resolved; p95 back to 310 ms. Follow-up owner: ${P?.name??`Hedy`}, review with ${N?.name??`Grace`}`,time:A(52)},{id:`postmortem`,icon:(0,x.jsx)(o,{}),tone:`neutral`,title:`Postmortem scheduled`,timeLabel:`Fri 10:00`}];function L(){return(0,x.jsx)(`div`,{className:`max-w-2xl rounded-lg border bg-card p-4`,children:(0,x.jsx)(g,{events:I,now:k,label:`Incident INC-2041`})})}var R=`import { AlertTriangle, BellRing, CheckCircle2, GitCommitHorizontal, MessageSquare, Rocket, Undo2 } from "lucide-react"
import { CodeBlock, PersonAvatar, StatusBadge, Timeline, type TimelineEvent, type PersonLike, type Presence } from "@kitora/display"

/** The gallery's fixed clock: every relative time is measured from here. */
const DEMO_NOW = new Date("2026-10-15T14:30:00Z")

/** \`minutes\` before {@link DEMO_NOW}. */
const minutesAgo = (minutes: number) => new Date(DEMO_NOW.getTime() - minutes * 60_000)

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

// An incident's timeline, newest last: alert, acknowledgement, the suspect deploy, the rollback,
// resolution. Actors are people from the team; times are relative to the gallery's fixed clock.
const [ada, grace, , , , hedy] = TEAM

function Actor({ index }: { index: number }) {
  const person = TEAM[index]
  if (!person) return null
  return (
    <span className="inline-flex items-center gap-1.5 align-middle">
      <PersonAvatar name={person.name} size="xs" />
      {person.name}
    </span>
  )
}

const EVENTS: readonly TimelineEvent[] = [
  {
    id: "alert",
    icon: <BellRing />,
    tone: "danger",
    title: "checkout-api p95 latency above 2 s for 5 minutes",
    time: minutesAgo(92),
    body: (
      <div className="flex flex-wrap items-center gap-1.5">
        <StatusBadge tone="danger" dot pulse>SEV-2</StatusBadge>
        <StatusBadge variant="outline">checkout-api</StatusBadge>
        <StatusBadge variant="outline">eu-west-1</StatusBadge>
      </div>
    ),
  },
  { id: "ack", icon: <AlertTriangle />, tone: "warning", actor: <Actor index={6} />, title: "acknowledged and took incident command", time: minutesAgo(88) },
  {
    id: "deploy",
    icon: <GitCommitHorizontal />,
    tone: "info",
    actor: <Actor index={0} />,
    title: "linked the suspect deploy",
    time: minutesAgo(81),
    body: <CodeBlock bare language="bash" code={\`git show --stat 4f2c91a  # "batch tax lookups" by \${ada?.name ?? "Ada"}\`} />,
  },
  {
    id: "note",
    icon: <MessageSquare />,
    tone: "neutral",
    actor: <Actor index={5} />,
    title: "commented",
    time: minutesAgo(76),
    body: <p className="rounded-md border bg-muted/30 px-2 py-1.5 text-foreground/90">Tax service connection pool is saturated: 40 of 40 in use, 300+ waiting. The batch path opens one connection per line item.</p>,
  },
  { id: "rollback", icon: <Undo2 />, tone: "accent", actor: <Actor index={1} />, title: "rolled back checkout-api to 9b81e07", time: minutesAgo(70), body: <StatusBadge tone="success" dot>Rollback healthy in 3 of 3 regions</StatusBadge> },
  { id: "resolved", icon: <CheckCircle2 />, tone: "success", actor: <Actor index={6} />, title: \`resolved; p95 back to 310 ms. Follow-up owner: \${hedy?.name ?? "Hedy"}, review with \${grace?.name ?? "Grace"}\`, time: minutesAgo(52) },
  { id: "postmortem", icon: <Rocket />, tone: "neutral", title: "Postmortem scheduled", timeLabel: "Fri 10:00" },
]

export function IncidentTimeline() {
  return (
    <div className="max-w-2xl rounded-lg border bg-card p-4">
      <Timeline events={EVENTS} now={DEMO_NOW} label="Incident INC-2041" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>f(()=>import(`./activity-incident-Dfk3YGHc.js`),[]));function z(){return(0,x.jsxs)(`div`,{children:[(0,x.jsx)(n,{title:`Activity`,children:`Timelines for incidents, audit logs and activity feeds: tone and icon per event, an actor, a relative time (absolute on hover) and any body you like.`}),(0,x.jsx)(y,{n:1,title:`An incident timeline`,blurb:`Alert, acknowledgement, the suspect deploy, a comment, the rollback and resolution, with badges and a bare code block in the bodies.`,code:R,children:(0,x.jsx)(L,{})}),(0,x.jsx)(y,{n:2,title:`An audit feed`,blurb:"`density=compact`, grouped under Today and Yesterday.",code:O,children:(0,x.jsx)(D,{})})]})}export{z as component};