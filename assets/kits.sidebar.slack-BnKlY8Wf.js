import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{t as n}from"./git-branch-5CNQxu_V.js";import{t as r}from"./hash-BG8ZiI9f.js";import{t as i}from"./lock--Ym7mIah.js";import{t as a}from"./message-square-CvbuViJy.js";import{t as o}from"./play-QIB3BLWv.js";import{t as s}from"./send-LrSHgWxY.js";import{t as c}from"./zap-Cc_MY59V.js";import{Ec as l,Uc as u,_i as d,zc as f}from"./index-BZuUy872.js";import{i as p,n as m}from"./context-C6mmtqBC.js";import{u as h}from"./match-CI3pJ4k7.js";import{a as g,i as _,o as v,r as y}from"./sidebar-IYAqkxSJ.js";import{c as b,o as x}from"./parts-BGYTk8Zo.js";import{r as S}from"./menus-CLpkMARg.js";import{t as C}from"./rail-CUizGgRY.js";import"./kit-gallery-BBavj2rC.js";import{t as w}from"./example-B67lLz1F.js";import{t as T}from"./-kits.sidebar.shared-B10Tgr4d.js";var E=e(u(),1),D=f(),O={branch:n,hash:r,lock:i,message:a,play:o,send:s,zap:c},k=(e,t,n={})=>({id:e,label:t,href:`/slack/c/${e}`,icon:{name:`hash`},...n}),A=(e,t,n,r,i,a={})=>({id:e,label:t,href:`/slack/d/${e}`,icon:{initials:n,color:r},presence:i,...a}),j=[{id:`slack-top`,label:``,items:[{id:`threads`,label:`Threads`,href:`/slack/threads`,icon:{name:`message`},badge:{unread:!0}},{id:`huddles`,label:`Huddles`,href:`/slack/huddles`,icon:{name:`play`}},{id:`drafts`,label:`Drafts & sent`,href:`/slack/drafts`,icon:{name:`send`},badge:{count:2}}]},{id:`starred`,label:`Starred`,items:[k(`launch`,`launch-q4`,{badge:{mentions:4}}),k(`eng-leads`,`eng-leads`,{icon:{name:`lock`}})]},{id:`channels`,label:`Channels`,limit:6,items:[k(`general`,`general`),k(`engineering`,`engineering`,{badge:{unread:!0}}),k(`design`,`design`,{badge:{mentions:2}}),k(`incidents`,`incidents`,{badge:{unread:!0,dot:`danger`}}),k(`releases`,`releases`),k(`random`,`random`,{muted:!0}),k(`watercooler`,`watercooler`,{muted:!0})]},{id:`dms`,label:`Direct messages`,items:[A(`maya`,`Maya Kapoor`,`MK`,`#c2410c`,`online`,{badge:{mentions:1}}),A(`jon`,`Jon Lee`,`JL`,`#047857`,`away`,{description:`Back at 3 pm`}),A(`sara`,`Sara Ruiz`,`SR`,`#be123c`,`busy`,{badge:{unread:!0}}),A(`team`,`Maya, Jon, Sara`,`3`,`#475569`,void 0),A(`ola`,`Ola Nordmann`,`ON`,`#4f46e5`,`offline`)]},{id:`apps`,label:`Apps`,items:[{id:`github`,label:`GitHub`,href:`/slack/a/github`,icon:{name:`branch`}},{id:`workflow`,label:`Workflow Builder`,href:`/slack/a/workflow`,icon:{name:`zap`}}]}],M=[{id:`acme`,label:`Acme Inc`,icon:{initials:`Ac`,color:`#4a154b`}},{id:`oss`,label:`Open Source Guild`,icon:{initials:`OS`,color:`#2563eb`},badge:{mentions:3,unread:!0}},{id:`club`,label:`Climbing Club`,icon:{initials:`CC`,color:`#15803d`},badge:{unread:!0}}],N={"--sb-bg":`#3f0e40`,"--sb-fg":`#f4ecf4`,"--sb-muted":`#cdb8ce`,"--sb-faint":`#a58aa6`,"--sb-hover":`rgb(255 255 255 / 0.08)`,"--sb-active-bg":`#1164a3`,"--sb-active-fg":`#ffffff`,"--sb-accent":`#1d9bd1`,"--sb-border":`rgb(255 255 255 / 0.12)`,"--sb-mention":`#cd2553`,"--sb-rail-bg":`#350d36`,"--sb-rail-fg":`#ffffff`,"--sb-content-bg":`#ffffff`},P=[{name:`Maya Kapoor`,color:`#c2410c`,initials:`MK`,text:`Staging is green again, the webhook retries are in.`},{name:`Jon Lee`,color:`#047857`,initials:`JL`,text:`Nice. Shipping the rate limit after lunch, reviews welcome.`},{name:`Sara Ruiz`,color:`#be123c`,initials:`SR`,text:`Design review moved to 3 pm, notes in the doc.`}],F=e=>e.badge?.unread===!0||(e.badge?.mentions??0)>0;function I(){let{mode:e}=p();return e===`panel`?null:(0,D.jsx)(v,{})}function L({title:e}){return(0,D.jsxs)(`div`,{className:`flex h-full min-h-0 flex-col bg-white text-[13px] text-[#1d1c1d]`,children:[(0,D.jsxs)(`div`,{className:`flex h-12 shrink-0 items-center gap-2 border-b px-4`,children:[(0,D.jsx)(I,{}),(0,D.jsx)(`span`,{className:`font-bold`,children:e}),(0,D.jsx)(`span`,{className:`ms-auto text-[12px] text-[#616061]`,children:`42 members`})]}),(0,D.jsxs)(`div`,{className:`flex min-h-0 flex-1 flex-col justify-end gap-3 overflow-y-auto p-4`,children:[P.map(e=>(0,D.jsxs)(`div`,{className:`flex gap-2`,children:[(0,D.jsx)(`span`,{className:`grid size-8 shrink-0 place-items-center rounded-md text-[11px] font-semibold text-white`,style:{background:e.color},children:e.initials}),(0,D.jsxs)(`span`,{children:[(0,D.jsx)(`span`,{className:`font-bold`,children:e.name}),` `,(0,D.jsx)(`span`,{className:`text-[11px] text-[#616061]`,children:`10:42`}),(0,D.jsx)(`p`,{children:e.text})]})]},e.name)),(0,D.jsxs)(`div`,{className:`rounded-lg border border-[#bbbabb] px-3 py-2 text-[#616061]`,children:[`Message `,e]})]})]})}function R({nav:e,setNav:t,navigate:n}){let[r,i]=(0,E.useState)(!1),{panel:a}=p();return(0,D.jsx)(y,{header:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(`div`,{className:`flex h-9 items-center gap-1 px-1.5`,children:[(0,D.jsx)(`span`,{className:`min-w-0 flex-1 truncate text-[15px] font-bold`,children:(M.find(e=>e.id===a)??M[0])?.label}),(0,D.jsx)(`button`,{type:`button`,"aria-pressed":r,onClick:()=>i(e=>!e),className:d(`h-6 rounded px-1.5 text-[11.5px] font-medium`,r?`bg-white text-[#3f0e40]`:`text-[var(--sb-muted)] hover:bg-[var(--sb-hover)]`),children:`Unreads`}),(0,D.jsx)(v,{})]}),(0,D.jsx)(g,{placeholder:`Jump to…`})]}),footer:(0,D.jsx)(S,{name:`Aman Bansal`,avatar:{initials:`AB`,color:`#0369a1`},presence:`online`,status:`Active`,actions:[{id:`pause`,label:`Pause notifications`,onSelect:()=>void 0},{id:`out`,label:`Sign out`,separatorBefore:!0,onSelect:()=>void 0}]}),children:(0,D.jsx)(_,{nav:e,onNavChange:t,onNavigate:n,predicate:r?F:void 0,itemActions:n=>[{id:`read`,label:`Mark as read`,onSelect:()=>t(h(e,n.id,e=>({...e,badge:void 0})))},{id:`mute`,label:n.muted?`Unmute`:`Mute`,onSelect:()=>t(h(e,n.id,e=>({...e,muted:!e.muted})))},{id:`leave`,label:`Leave`,danger:!0,separatorBefore:!0,onSelect:()=>t(e.map(e=>({...e,items:e.items.filter(e=>e.id!==n.id)})))}],rowOptions:{onCreate:()=>void 0,createLabel:e=>e.kind===`section`?`Add to ${e.section.label}`:`Add`}})})}function z(){let[e,t]=(0,E.useState)(j),[n,r]=(0,E.useState)(`/slack/c/engineering`),i=(e,t)=>{e.external||!e.href||(t.preventDefault(),r(e.href))},a=(0,E.useMemo)(()=>{for(let t of e)for(let e of t.items)if(e.href===n)return e.icon&&`name`in e.icon&&e.icon.name===`hash`?`# ${e.label}`:e.label;return`Threads`},[e,n]);return(0,D.jsxs)(`div`,{className:`relative h-full overflow-hidden`,style:{...N},children:[(0,D.jsx)(x,{}),(0,D.jsx)(m,{icons:O,location:n,label:`Slack channels`,defaultState:{panel:`acme`,width:260},children:(0,D.jsx)(b,{rail:(0,D.jsx)(C,{label:`Workspaces`,items:M,variant:`tiles`}),sidebar:(0,D.jsx)(R,{nav:e,setNav:t,navigate:i}),children:(0,D.jsx)(L,{title:a})})})]})}var B=`import { GitBranch, Hash, Lock, MessageSquare, Play, Send, Zap } from "lucide-react"
import { useMemo, useState } from "react"
import { AppRail, Sidebar, SidebarLayout, SidebarNav, SidebarProvider, SidebarSearch, SidebarStyles, SidebarTrigger, updateItem, UserMenu, useSidebar, type AppRailItem, type NavItem, type NavSection, type SidebarIconComponent } from "@kitora/sidebar"
import { cn } from "@kitora/ui/utils"

// \`{ name }\` icons in the nav resolve through this registry.
const ICONS: Readonly<Record<string, SidebarIconComponent>> = { branch: GitBranch, hash: Hash, lock: Lock, message: MessageSquare, play: Play, send: Send, zap: Zap }

const channel = (id: string, label: string, extra: Partial<NavItem> = {}): NavItem => ({ id, label, href: \`/slack/c/\${id}\`, icon: { name: "hash" }, ...extra })
const person = (id: string, label: string, initials: string, color: string, presence: NavItem["presence"], extra: Partial<NavItem> = {}): NavItem => ({ id, label, href: \`/slack/d/\${id}\`, icon: { initials, color }, presence, ...extra })

const NAV: readonly NavSection[] = [
  {
    id: "slack-top",
    label: "",
    items: [
      { id: "threads", label: "Threads", href: "/slack/threads", icon: { name: "message" }, badge: { unread: true } },
      { id: "huddles", label: "Huddles", href: "/slack/huddles", icon: { name: "play" } },
      { id: "drafts", label: "Drafts & sent", href: "/slack/drafts", icon: { name: "send" }, badge: { count: 2 } },
    ],
  },
  { id: "starred", label: "Starred", items: [channel("launch", "launch-q4", { badge: { mentions: 4 } }), channel("eng-leads", "eng-leads", { icon: { name: "lock" } })] },
  {
    id: "channels",
    label: "Channels",
    // Past six rows the section folds the rest behind "Show more".
    limit: 6,
    items: [
      channel("general", "general"),
      channel("engineering", "engineering", { badge: { unread: true } }),
      channel("design", "design", { badge: { mentions: 2 } }),
      channel("incidents", "incidents", { badge: { unread: true, dot: "danger" } }),
      channel("releases", "releases"),
      channel("random", "random", { muted: true }),
      channel("watercooler", "watercooler", { muted: true }),
    ],
  },
  {
    id: "dms",
    label: "Direct messages",
    items: [
      person("maya", "Maya Kapoor", "MK", "#c2410c", "online", { badge: { mentions: 1 } }),
      person("jon", "Jon Lee", "JL", "#047857", "away", { description: "Back at 3 pm" }),
      person("sara", "Sara Ruiz", "SR", "#be123c", "busy", { badge: { unread: true } }),
      person("team", "Maya, Jon, Sara", "3", "#475569", undefined),
      person("ola", "Ola Nordmann", "ON", "#4f46e5", "offline"),
    ],
  },
  {
    id: "apps",
    label: "Apps",
    items: [
      { id: "github", label: "GitHub", href: "/slack/a/github", icon: { name: "branch" } },
      { id: "workflow", label: "Workflow Builder", href: "/slack/a/workflow", icon: { name: "zap" } },
    ],
  },
]

// The workspace rail: each tile is a panel id, so the panel knows which workspace is open.
const WORKSPACES: readonly AppRailItem[] = [
  { id: "acme", label: "Acme Inc", icon: { initials: "Ac", color: "#4a154b" } },
  { id: "oss", label: "Open Source Guild", icon: { initials: "OS", color: "#2563eb" }, badge: { mentions: 3, unread: true } },
  { id: "club", label: "Climbing Club", icon: { initials: "CC", color: "#15803d" }, badge: { unread: true } },
]

// Theme tokens: any --sb-* set on an ancestor restyles the sidebar (the phone sheet carries them too).
const THEME: Readonly<Record<\`--sb-\${string}\`, string>> = {
  "--sb-bg": "#3f0e40",
  "--sb-fg": "#f4ecf4",
  "--sb-muted": "#cdb8ce",
  "--sb-faint": "#a58aa6",
  "--sb-hover": "rgb(255 255 255 / 0.08)",
  "--sb-active-bg": "#1164a3",
  "--sb-active-fg": "#ffffff",
  "--sb-accent": "#1d9bd1",
  "--sb-border": "rgb(255 255 255 / 0.12)",
  "--sb-mention": "#cd2553",
  "--sb-rail-bg": "#350d36",
  "--sb-rail-fg": "#ffffff",
  "--sb-content-bg": "#ffffff",
}

const MESSAGES = [
  { name: "Maya Kapoor", color: "#c2410c", initials: "MK", text: "Staging is green again, the webhook retries are in." },
  { name: "Jon Lee", color: "#047857", initials: "JL", text: "Nice. Shipping the rate limit after lunch, reviews welcome." },
  { name: "Sara Ruiz", color: "#be123c", initials: "SR", text: "Design review moved to 3 pm, notes in the doc." },
] as const

/** "Unreads only": the predicate the nav filters by. */
const unread = (item: NavItem): boolean => item.badge?.unread === true || (item.badge?.mentions ?? 0) > 0

/** The content's own toggle while the panel is not showing in full (hidden, or the phone sheet). */
function CollapsedTrigger() {
  const { mode } = useSidebar()
  return mode === "panel" ? null : <SidebarTrigger />
}

function ChannelView({ title }: { readonly title: string }) {
  return (
    <div className="flex h-full min-h-0 flex-col bg-white text-[13px] text-[#1d1c1d]">
      <div className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
        <CollapsedTrigger />
        <span className="font-bold">{title}</span>
        <span className="ms-auto text-[12px] text-[#616061]">42 members</span>
      </div>
      <div className="flex min-h-0 flex-1 flex-col justify-end gap-3 overflow-y-auto p-4">
        {MESSAGES.map((m) => (
          <div key={m.name} className="flex gap-2">
            <span className="grid size-8 shrink-0 place-items-center rounded-md text-[11px] font-semibold text-white" style={{ background: m.color }}>
              {m.initials}
            </span>
            <span>
              <span className="font-bold">{m.name}</span> <span className="text-[11px] text-[#616061]">10:42</span>
              <p>{m.text}</p>
            </span>
          </div>
        ))}
        <div className="rounded-lg border border-[#bbbabb] px-3 py-2 text-[#616061]">Message {title}</div>
      </div>
    </div>
  )
}

function SlackSidebar({ nav, setNav, navigate }: { readonly nav: readonly NavSection[]; readonly setNav: (nav: readonly NavSection[]) => void; readonly navigate: (item: NavItem, event: { preventDefault(): void }) => void }) {
  const [unreadsOnly, setUnreadsOnly] = useState(false)
  const { panel } = useSidebar()
  const workspace = WORKSPACES.find((w) => w.id === panel) ?? WORKSPACES[0]
  return (
    <Sidebar
      header={
        <>
          <div className="flex h-9 items-center gap-1 px-1.5">
            <span className="min-w-0 flex-1 truncate text-[15px] font-bold">{workspace?.label}</span>
            <button
              type="button"
              aria-pressed={unreadsOnly}
              onClick={() => setUnreadsOnly((v) => !v)}
              className={cn("h-6 rounded px-1.5 text-[11.5px] font-medium", unreadsOnly ? "bg-white text-[#3f0e40]" : "text-[var(--sb-muted)] hover:bg-[var(--sb-hover)]")}
            >
              Unreads
            </button>
            <SidebarTrigger />
          </div>
          <SidebarSearch placeholder="Jump to…" />
        </>
      }
      footer={
        <UserMenu
          name="Aman Bansal"
          avatar={{ initials: "AB", color: "#0369a1" }}
          presence="online"
          status="Active"
          actions={[
            { id: "pause", label: "Pause notifications", onSelect: () => undefined },
            { id: "out", label: "Sign out", separatorBefore: true, onSelect: () => undefined },
          ]}
        />
      }
    >
      <SidebarNav
        nav={nav}
        onNavChange={setNav}
        onNavigate={navigate}
        predicate={unreadsOnly ? unread : undefined}
        // The row's "…" menu and its right-click menu.
        itemActions={(item) => [
          { id: "read", label: "Mark as read", onSelect: () => setNav(updateItem(nav, item.id, (i) => ({ ...i, badge: undefined }))) },
          { id: "mute", label: item.muted ? "Unmute" : "Mute", onSelect: () => setNav(updateItem(nav, item.id, (i) => ({ ...i, muted: !i.muted }))) },
          { id: "leave", label: "Leave", danger: true, separatorBefore: true, onSelect: () => setNav(nav.map((s) => ({ ...s, items: s.items.filter((i) => i.id !== item.id) }))) },
        ]}
        // The hover "+" on section headers and rows.
        rowOptions={{ onCreate: () => undefined, createLabel: (row) => (row.kind === "section" ? \`Add to \${row.section.label}\` : "Add") }}
      />
    </Sidebar>
  )
}

/** A Slack-style double sidebar: a workspace rail, a themed channel panel, presence, unreads and drag between sections. */
export function SlackApp() {
  const [nav, setNav] = useState(NAV)
  // In an app, pass the router's pathname as \`location\` and let the links navigate; this demo keeps navigation in the page.
  const [location, setLocation] = useState("/slack/c/engineering")
  const navigate = (item: NavItem, event: { preventDefault(): void }) => {
    if (item.external || !item.href) return
    event.preventDefault()
    setLocation(item.href)
  }
  const title = useMemo(() => {
    for (const s of nav) for (const i of s.items) if (i.href === location) return i.icon && "name" in i.icon && i.icon.name === "hash" ? \`# \${i.label}\` : i.label
    return "Threads"
  }, [nav, location])
  return (
    <div className="relative h-full overflow-hidden" style={{ ...THEME }}>
      <SidebarStyles />
      <SidebarProvider icons={ICONS} location={location} label="Slack channels" defaultState={{ panel: "acme", width: 260 }}>
        <SidebarLayout rail={<AppRail label="Workspaces" items={WORKSPACES} variant="tiles" />} sidebar={<SlackSidebar nav={nav} setNav={setNav} navigate={navigate} />}>
          <ChannelView title={title} />
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>l(()=>import(`./slack-Hnfbb2dC.js`),[]));function V(){return(0,D.jsxs)(`div`,{children:[(0,D.jsx)(t,{title:`Slack: double sidebar`,children:`A workspace rail beside a themed channel panel: rail tiles with an active pill and mention badges, Starred, Channels and Direct messages sections, bold unread channels, mention pills, presence on DMs, the Unreads filter, muted channels, Show more, and drag of channels between sections.`}),(0,D.jsx)(w,{n:1,title:`Slack style`,code:B,children:(0,D.jsx)(T,{testId:`slack`,height:620,children:(0,D.jsx)(z,{})})})]})}export{V as component};