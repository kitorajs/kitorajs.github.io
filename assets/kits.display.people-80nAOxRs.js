import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./bell-QnxoqhU6.js";import{s as n}from"./kit-docs-CvNs0WqT.js";import{t as r}from"./inbox-CWroxAY7.js";import{t as i}from"./mail-m_AeWWGR.js";import{t as a}from"./map-pin-Co3GB_sK.js";import{t as o}from"./plus-DkT_QJcZ.js";import{Bc as s,Cc as c,Ic as l,ti as u}from"./index-9y5uwRd3.js";import{c as d}from"./adapters-DpH8EXtx.js";import{t as f}from"./copy-D6KPkybI.js";import{n as p,o as m,r as h,t as g}from"./people-BWa0DOHZ.js";import{a as _,n as v,o as y,r as b}from"./badges-CKbRtUKd.js";import{r as x}from"./hints-DnVOIgYM.js";import"./kit-gallery-B-Yr9fP4.js";import{t as S}from"./example-CZLJLtIC.js";var C=l(),w=[{id:`u1`,name:`Ada Lovelace`,role:`Staff engineer`,team:`Platform`,location:`London`,email:`ada@acme.dev`,presence:`online`,skills:[`Go`,`Postgres`,`Infra`]},{id:`u2`,name:`Grace Hopper`,role:`Engineering manager`,team:`Platform`,location:`Arlington`,email:`grace@acme.dev`,presence:`busy`,skills:[`Leadership`,`Compilers`]},{id:`u3`,name:`Linus Pauling`,role:`Data scientist`,team:`Insights`,location:`Portland`,email:`linus@acme.dev`,presence:`away`,skills:[`Python`,`SQL`,`ML`]},{id:`u4`,name:`Katherine Johnson`,role:`Product designer`,team:`Design`,location:`Hampton`,email:`katherine@acme.dev`,presence:`online`,skills:[`Figma`,`Research`]},{id:`u5`,name:`Alan Turing`,role:`Security engineer`,team:`Security`,location:`Manchester`,email:`alan@acme.dev`,presence:`offline`,skills:[`Crypto`,`Rust`]},{id:`u6`,name:`Hedy Lamarr`,role:`Frontend engineer`,team:`Web`,location:`Vienna`,email:`hedy@acme.dev`,presence:`online`,skills:[`React`,`TypeScript`,`A11y`]},{id:`u7`,name:`Margaret Hamilton`,role:`Principal engineer`,team:`Reliability`,location:`Boston`,email:`margaret@acme.dev`,presence:`away`,skills:[`SRE`,`Go`]},{id:`u8`,name:`Tim Berners-Lee`,role:`Developer advocate`,team:`DevRel`,location:`Geneva`,email:`tim@acme.dev`,presence:`offline`,skills:[`Docs`,`HTTP`]},{id:`u9`,name:`Radia Perlman`,role:`Network engineer`,team:`Infra`,location:`Seattle`,email:`radia@acme.dev`,presence:`online`,skills:[`Networking`,`BGP`]},{id:`u10`,name:`Barbara Liskov`,role:`Architect`,team:`Platform`,location:`Cambridge`,email:`barbara@acme.dev`,presence:`busy`,skills:[`Distributed systems`]}];function T(e,t,n=1600,r=1e3){let i=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${r}" width="${n}" height="${r}">
<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(${t} 70% 70%)"/><stop offset="1" stop-color="hsl(${(t+40)%360} 60% 88%)"/></linearGradient></defs>
<rect width="${n}" height="${r}" fill="url(#s)"/>
<circle cx="${n*.72}" cy="${r*.3}" r="${r*.09}" fill="hsl(${(t+180)%360} 90% 82%)"/>
<path d="M0 ${r*.7} Q ${n*.25} ${r*.45} ${n*.55} ${r*.68} T ${n} ${r*.6} V ${r} H 0 Z" fill="hsl(${t} 35% 38%)"/>
<path d="M0 ${r*.85} Q ${n*.4} ${r*.7} ${n} ${r*.82} V ${r} H 0 Z" fill="hsl(${t} 40% 24%)"/>
<text x="${n*.05}" y="${r*.12}" font-family="system-ui, sans-serif" font-size="${r*.06}" fill="hsl(${t} 40% 18%)">${e}</text>
</svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`}function E(){let e=w[0]?.name??`Ada Lovelace`;return(0,C.jsxs)(`div`,{className:`flex flex-col gap-3 text-[12px] text-muted-foreground`,children:[(0,C.jsxs)(`div`,{className:`flex flex-wrap items-end gap-3`,children:[g.map(t=>(0,C.jsxs)(`span`,{className:`flex flex-col items-center gap-1`,children:[(0,C.jsx)(h,{name:e,size:t}),t]},t)),(0,C.jsx)(`span`,{className:`mx-2 h-10 w-px bg-border`,"aria-hidden":!0}),g.map(e=>(0,C.jsxs)(`span`,{className:`flex flex-col items-center gap-1`,children:[(0,C.jsx)(h,{name:`Acme Inc`,size:e,shape:`square`}),e]},e))]}),(0,C.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[d.map((e,t)=>(0,C.jsxs)(`span`,{className:`inline-flex items-center gap-2 capitalize`,children:[(0,C.jsx)(h,{name:w[t]?.name??e,presence:e,size:`md`}),e]},e)),(0,C.jsxs)(`span`,{className:`inline-flex items-center gap-2`,children:[(0,C.jsx)(h,{name:`Fjord Photo`,src:T(``,205,80,80),size:`md`}),`image`]}),(0,C.jsxs)(`span`,{className:`inline-flex items-center gap-2`,children:[(0,C.jsx)(h,{name:`Broken Image`,src:`data:image/png;base64,AAAA`,size:`md`}),`broken src`]})]})]})}var D=`import { AVATAR_SIZES, PRESENCE, PersonAvatar, type PersonLike, type Presence } from "@kitora/display"

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

/** A generated landscape picture as a data URL: sky gradient, a sun, two hills and a title. */
function picture(title: string, hue: number, w = 1600, h = 1000): string {
  const svg = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 \${w} \${h}" width="\${w}" height="\${h}">
<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(\${hue} 70% 70%)"/><stop offset="1" stop-color="hsl(\${(hue + 40) % 360} 60% 88%)"/></linearGradient></defs>
<rect width="\${w}" height="\${h}" fill="url(#s)"/>
<circle cx="\${w * 0.72}" cy="\${h * 0.3}" r="\${h * 0.09}" fill="hsl(\${(hue + 180) % 360} 90% 82%)"/>
<path d="M0 \${h * 0.7} Q \${w * 0.25} \${h * 0.45} \${w * 0.55} \${h * 0.68} T \${w} \${h * 0.6} V \${h} H 0 Z" fill="hsl(\${hue} 35% 38%)"/>
<path d="M0 \${h * 0.85} Q \${w * 0.4} \${h * 0.7} \${w} \${h * 0.82} V \${h} H 0 Z" fill="hsl(\${hue} 40% 24%)"/>
<text x="\${w * 0.05}" y="\${h * 0.12}" font-family="system-ui, sans-serif" font-size="\${h * 0.06}" fill="hsl(\${hue} 40% 18%)">\${title}</text>
</svg>\`
  return \`data:image/svg+xml;charset=utf-8,\${encodeURIComponent(svg)}\`
}

// Every size in both shapes, then each presence state, then an image avatar and a broken
// image that falls back to initials on the person's stable colour.
export function PeopleAvatars() {
  const ada = TEAM[0]?.name ?? "Ada Lovelace"
  return (
    <div className="flex flex-col gap-3 text-[12px] text-muted-foreground">
      <div className="flex flex-wrap items-end gap-3">
        {AVATAR_SIZES.map((size) => (
          <span key={size} className="flex flex-col items-center gap-1">
            <PersonAvatar name={ada} size={size} />
            {size}
          </span>
        ))}
        <span className="mx-2 h-10 w-px bg-border" aria-hidden />
        {AVATAR_SIZES.map((size) => (
          <span key={size} className="flex flex-col items-center gap-1">
            <PersonAvatar name="Acme Inc" size={size} shape="square" />
            {size}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        {PRESENCE.map((presence, i) => (
          <span key={presence} className="inline-flex items-center gap-2 capitalize">
            <PersonAvatar name={TEAM[i]?.name ?? presence} presence={presence} size="md" />
            {presence}
          </span>
        ))}
        <span className="inline-flex items-center gap-2">
          <PersonAvatar name="Fjord Photo" src={picture("", 205, 80, 80)} size="md" />
          image
        </span>
        <span className="inline-flex items-center gap-2">
          <PersonAvatar name="Broken Image" src="data:image/png;base64,AAAA" size="md" />
          broken src
        </span>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>c(()=>import(`./people-avatars-I3TnlGRL.js`),[]));var O=e(s(),1),k=[{id:`u1`,name:`Ada Lovelace`,role:`Staff engineer`,team:`Platform`,location:`London`,email:`ada@acme.dev`,presence:`online`,skills:[`Go`,`Postgres`,`Infra`]},{id:`u2`,name:`Grace Hopper`,role:`Engineering manager`,team:`Platform`,location:`Arlington`,email:`grace@acme.dev`,presence:`busy`,skills:[`Leadership`,`Compilers`]},{id:`u3`,name:`Linus Pauling`,role:`Data scientist`,team:`Insights`,location:`Portland`,email:`linus@acme.dev`,presence:`away`,skills:[`Python`,`SQL`,`ML`]},{id:`u4`,name:`Katherine Johnson`,role:`Product designer`,team:`Design`,location:`Hampton`,email:`katherine@acme.dev`,presence:`online`,skills:[`Figma`,`Research`]},{id:`u5`,name:`Alan Turing`,role:`Security engineer`,team:`Security`,location:`Manchester`,email:`alan@acme.dev`,presence:`offline`,skills:[`Crypto`,`Rust`]},{id:`u6`,name:`Hedy Lamarr`,role:`Frontend engineer`,team:`Web`,location:`Vienna`,email:`hedy@acme.dev`,presence:`online`,skills:[`React`,`TypeScript`,`A11y`]},{id:`u7`,name:`Margaret Hamilton`,role:`Principal engineer`,team:`Reliability`,location:`Boston`,email:`margaret@acme.dev`,presence:`away`,skills:[`SRE`,`Go`]},{id:`u8`,name:`Tim Berners-Lee`,role:`Developer advocate`,team:`DevRel`,location:`Geneva`,email:`tim@acme.dev`,presence:`offline`,skills:[`Docs`,`HTTP`]},{id:`u9`,name:`Radia Perlman`,role:`Network engineer`,team:`Infra`,location:`Seattle`,email:`radia@acme.dev`,presence:`online`,skills:[`Networking`,`BGP`]},{id:`u10`,name:`Barbara Liskov`,role:`Architect`,team:`Platform`,location:`Cambridge`,email:`barbara@acme.dev`,presence:`busy`,skills:[`Distributed systems`]}],A=[...new Set(k.map(e=>e.team))];function j(){let[e,t]=(0,O.useState)(null),n=e?k.filter(t=>t.team===e):k;return(0,C.jsxs)(`div`,{className:`flex flex-col gap-2 text-[13px]`,children:[(0,C.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1`,role:`group`,"aria-label":`Filter by team`,children:[(0,C.jsxs)(_,{onClick:()=>t(null),selected:e===null,children:[`All · `,k.length]}),A.map(n=>(0,C.jsx)(_,{onClick:()=>t(e===n?null:n),selected:e===n,children:n},n))]}),(0,C.jsx)(`ul`,{className:`divide-y rounded-lg border bg-card`,children:n.map(e=>(0,C.jsxs)(`li`,{className:`flex h-10 items-center gap-3 px-3`,children:[(0,C.jsx)(h,{name:e.name,presence:e.presence,size:`sm`}),(0,C.jsx)(x,{content:(0,C.jsx)(M,{member:e}),children:(0,C.jsx)(`button`,{type:`button`,className:`min-w-0 truncate rounded-sm font-medium hover:underline focus-visible:outline-2 focus-visible:outline-ring`,children:e.name})}),(0,C.jsx)(`span`,{className:`hidden min-w-0 flex-1 truncate text-muted-foreground sm:block`,children:e.role}),(0,C.jsx)(`span`,{className:`ml-auto text-[12px] text-muted-foreground sm:ml-0 sm:w-24`,children:e.team}),(0,C.jsxs)(`span`,{className:`hidden w-28 items-center gap-1.5 text-[12px] text-muted-foreground capitalize md:inline-flex`,children:[(0,C.jsx)(m,{presence:e.presence}),e.presence]})]},e.id))})]})}function M({member:e}){return(0,C.jsxs)(`div`,{className:`flex flex-col gap-2.5`,children:[(0,C.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,C.jsx)(h,{name:e.name,presence:e.presence,size:`xl`}),(0,C.jsxs)(`div`,{className:`min-w-0`,children:[(0,C.jsx)(`div`,{className:`truncate font-semibold`,children:e.name}),(0,C.jsx)(`div`,{className:`truncate text-muted-foreground`,children:e.role}),(0,C.jsx)(`div`,{className:`text-[12px] text-muted-foreground`,children:e.team})]})]}),(0,C.jsxs)(`div`,{className:`flex flex-col gap-1 text-[12px] text-muted-foreground`,children:[(0,C.jsxs)(`span`,{className:`inline-flex items-center gap-1.5`,children:[(0,C.jsx)(a,{className:`size-3.5`,"aria-hidden":!0}),e.location]}),(0,C.jsxs)(`span`,{className:`inline-flex items-center gap-1.5`,children:[(0,C.jsx)(i,{className:`size-3.5`,"aria-hidden":!0}),(0,C.jsx)(`span`,{className:`min-w-0 flex-1 truncate font-mono`,children:e.email}),(0,C.jsx)(f,{value:e.email,label:`Copy email`})]})]}),(0,C.jsx)(y,{tags:e.skills.map(e=>({id:e,label:e}))})]})}var N=`import { useState } from "react"
import { CopyButton, PersonAvatar, PresenceDot, PreviewCard, Tag, TagList, type PersonLike, type Presence } from "@kitora/display"
import { Mail, MapPin } from "lucide-react"

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

const TEAMS = [...new Set(TEAM.map((m) => m.team))]

// A dense team directory: presence on every avatar, a team filter of selectable tags,
// and a hover card on each name (hover, or focus it and wait) with contact details and skills.
export function PeopleDirectory() {
  const [team, setTeam] = useState<string | null>(null)
  const shown = team ? TEAM.filter((m) => m.team === team) : TEAM
  return (
    <div className="flex flex-col gap-2 text-[13px]">
      <div className="flex flex-wrap items-center gap-1" role="group" aria-label="Filter by team">
        <Tag onClick={() => setTeam(null)} selected={team === null}>
          All · {TEAM.length}
        </Tag>
        {TEAMS.map((name) => (
          <Tag key={name} onClick={() => setTeam(team === name ? null : name)} selected={team === name}>
            {name}
          </Tag>
        ))}
      </div>
      <ul className="divide-y rounded-lg border bg-card">
        {shown.map((m) => (
          <li key={m.id} className="flex h-10 items-center gap-3 px-3">
            <PersonAvatar name={m.name} presence={m.presence} size="sm" />
            <PreviewCard content={<MemberCard member={m} />}>
              <button type="button" className="min-w-0 truncate rounded-sm font-medium hover:underline focus-visible:outline-2 focus-visible:outline-ring">
                {m.name}
              </button>
            </PreviewCard>
            <span className="hidden min-w-0 flex-1 truncate text-muted-foreground sm:block">{m.role}</span>
            <span className="ml-auto text-[12px] text-muted-foreground sm:ml-0 sm:w-24">{m.team}</span>
            <span className="hidden w-28 items-center gap-1.5 text-[12px] text-muted-foreground capitalize md:inline-flex">
              <PresenceDot presence={m.presence} />
              {m.presence}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center gap-3">
        <PersonAvatar name={member.name} presence={member.presence} size="xl" />
        <div className="min-w-0">
          <div className="truncate font-semibold">{member.name}</div>
          <div className="truncate text-muted-foreground">{member.role}</div>
          <div className="text-[12px] text-muted-foreground">{member.team}</div>
        </div>
      </div>
      <div className="flex flex-col gap-1 text-[12px] text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="size-3.5" aria-hidden />
          {member.location}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Mail className="size-3.5" aria-hidden />
          <span className="min-w-0 flex-1 truncate font-mono">{member.email}</span>
          <CopyButton value={member.email} label="Copy email" />
        </span>
      </div>
      <TagList tags={member.skills.map((s) => ({ id: s, label: s }))} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>c(()=>import(`./people-directory-Dv3vpHW0.js`),[]));var P=[{id:`u1`,name:`Ada Lovelace`,role:`Staff engineer`,team:`Platform`,location:`London`,email:`ada@acme.dev`,presence:`online`,skills:[`Go`,`Postgres`,`Infra`]},{id:`u2`,name:`Grace Hopper`,role:`Engineering manager`,team:`Platform`,location:`Arlington`,email:`grace@acme.dev`,presence:`busy`,skills:[`Leadership`,`Compilers`]},{id:`u3`,name:`Linus Pauling`,role:`Data scientist`,team:`Insights`,location:`Portland`,email:`linus@acme.dev`,presence:`away`,skills:[`Python`,`SQL`,`ML`]},{id:`u4`,name:`Katherine Johnson`,role:`Product designer`,team:`Design`,location:`Hampton`,email:`katherine@acme.dev`,presence:`online`,skills:[`Figma`,`Research`]},{id:`u5`,name:`Alan Turing`,role:`Security engineer`,team:`Security`,location:`Manchester`,email:`alan@acme.dev`,presence:`offline`,skills:[`Crypto`,`Rust`]},{id:`u6`,name:`Hedy Lamarr`,role:`Frontend engineer`,team:`Web`,location:`Vienna`,email:`hedy@acme.dev`,presence:`online`,skills:[`React`,`TypeScript`,`A11y`]},{id:`u7`,name:`Margaret Hamilton`,role:`Principal engineer`,team:`Reliability`,location:`Boston`,email:`margaret@acme.dev`,presence:`away`,skills:[`SRE`,`Go`]},{id:`u8`,name:`Tim Berners-Lee`,role:`Developer advocate`,team:`DevRel`,location:`Geneva`,email:`tim@acme.dev`,presence:`offline`,skills:[`Docs`,`HTTP`]},{id:`u9`,name:`Radia Perlman`,role:`Network engineer`,team:`Infra`,location:`Seattle`,email:`radia@acme.dev`,presence:`online`,skills:[`Networking`,`BGP`]},{id:`u10`,name:`Barbara Liskov`,role:`Architect`,team:`Platform`,location:`Cambridge`,email:`barbara@acme.dev`,presence:`busy`,skills:[`Distributed systems`]}],F=[{name:`Billing v2 migration`,status:`On track`,tone:`success`,members:P.slice(0,6)},{name:`Search relevance`,status:`At risk`,tone:`warning`,members:[P[2],P[5],P[8]]},{name:`SOC 2 audit`,status:`Blocked`,tone:`danger`,members:[P[4],P[1]]},{name:`Design system 3.0`,status:`Planning`,tone:`neutral`,members:P.slice(3,10)}];function I(){return(0,C.jsxs)(`div`,{className:`flex flex-col gap-2 text-[13px]`,children:[(0,C.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,C.jsx)(`span`,{className:`font-medium`,children:`Projects`}),(0,C.jsxs)(`span`,{className:`ml-auto inline-flex items-center gap-1`,children:[(0,C.jsxs)(u,{size:`icon-sm`,variant:`ghost`,"aria-label":`Inbox, 12 unread`,className:`relative`,children:[(0,C.jsx)(r,{}),(0,C.jsx)(v,{count:12,className:`absolute -top-1 -right-1`})]}),(0,C.jsxs)(u,{size:`icon-sm`,variant:`ghost`,"aria-label":`Notifications, 140 unread`,className:`relative`,children:[(0,C.jsx)(t,{}),(0,C.jsx)(v,{count:140,className:`absolute -top-1 -right-2`})]})]})]}),(0,C.jsx)(`ul`,{className:`divide-y rounded-lg border bg-card`,children:F.map(e=>(0,C.jsxs)(`li`,{className:`flex h-10 items-center gap-3 px-3`,children:[(0,C.jsx)(`span`,{className:`min-w-0 flex-1 truncate font-medium`,children:e.name}),(0,C.jsx)(b,{tone:e.tone,dot:!0,children:e.status}),(0,C.jsx)(p,{people:e.members.filter(e=>e!==void 0).map(e=>({name:e.name})),max:3,size:`sm`,className:`w-28 justify-end`,after:(0,C.jsx)(`button`,{type:`button`,"aria-label":`Add people to ${e.name}`,className:`inline-flex size-6 items-center justify-center rounded-full border border-dashed text-muted-foreground hover:text-foreground`,children:(0,C.jsx)(o,{className:`size-3`,"aria-hidden":!0})})})]},e.name))})]})}var L=`import { AvatarStack, CountBadge, StatusBadge, type BadgeTone, type PersonLike, type Presence } from "@kitora/display"
import { Button } from "@kitora/ui/button"
import { Bell, Inbox, Plus } from "lucide-react"

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

const PROJECTS = [
  { name: "Billing v2 migration", status: "On track", tone: "success", members: TEAM.slice(0, 6) },
  { name: "Search relevance", status: "At risk", tone: "warning", members: [TEAM[2], TEAM[5], TEAM[8]] },
  { name: "SOC 2 audit", status: "Blocked", tone: "danger", members: [TEAM[4], TEAM[1]] },
  { name: "Design system 3.0", status: "Planning", tone: "neutral", members: TEAM.slice(3, 10) },
] as const satisfies ReadonlyArray<{ name: string; status: string; tone: BadgeTone; members: ReadonlyArray<(typeof TEAM)[number] | undefined> }>

// Projects with an avatar stack (three faces, then "+N" whose tooltip names the rest),
// a status badge per row, and count badges on the inbox and bell.
export function PeopleProjects() {
  return (
    <div className="flex flex-col gap-2 text-[13px]">
      <div className="flex items-center gap-2">
        <span className="font-medium">Projects</span>
        <span className="ml-auto inline-flex items-center gap-1">
          <Button size="icon-sm" variant="ghost" aria-label="Inbox, 12 unread" className="relative">
            <Inbox />
            <CountBadge count={12} className="absolute -top-1 -right-1" />
          </Button>
          <Button size="icon-sm" variant="ghost" aria-label="Notifications, 140 unread" className="relative">
            <Bell />
            <CountBadge count={140} className="absolute -top-1 -right-2" />
          </Button>
        </span>
      </div>
      <ul className="divide-y rounded-lg border bg-card">
        {PROJECTS.map((p) => (
          <li key={p.name} className="flex h-10 items-center gap-3 px-3">
            <span className="min-w-0 flex-1 truncate font-medium">{p.name}</span>
            <StatusBadge tone={p.tone} dot>
              {p.status}
            </StatusBadge>
            <AvatarStack
              people={p.members.filter((m) => m !== undefined).map((m) => ({ name: m.name }))}
              max={3}
              size="sm"
              className="w-28 justify-end"
              after={
                <button type="button" aria-label={\`Add people to \${p.name}\`} className="inline-flex size-6 items-center justify-center rounded-full border border-dashed text-muted-foreground hover:text-foreground">
                  <Plus className="size-3" aria-hidden />
                </button>
              }
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>c(()=>import(`./people-projects-EGvQ6QrO.js`),[]));function R(){return(0,C.jsxs)(`div`,{children:[(0,C.jsx)(n,{title:`Team directory`,children:`Avatars with presence, hover cards, selectable tags and avatar stacks. Initials fall back on a colour derived from the name, so a person looks the same on every page.`}),(0,C.jsx)(S,{n:1,title:`Directory with hover cards`,blurb:`Filter by team with the tags. Hover a name (or focus it) for a card with contact details, a copy button and skills.`,code:N,children:(0,C.jsx)(j,{})}),(0,C.jsx)(S,{n:2,title:`Projects and avatar stacks`,blurb:`Three faces per project, then +N; hover any face or the +N chip for names. Count badges cap at 99+.`,code:L,children:(0,C.jsx)(I,{})}),(0,C.jsx)(S,{n:3,title:`Sizes, shapes and presence`,blurb:`Five sizes in circle and square, the four presence states, an image avatar and a broken image falling back to initials.`,code:D,children:(0,C.jsx)(E,{})})]})}export{R as component};