import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./archive-CtScAYkH.js";import{s as n}from"./kit-docs-Cf27Kpa-.js";import{t as r}from"./file-text-DN2dXqcR.js";import{t as i}from"./hash-BG8ZiI9f.js";import{Ec as a,Uc as o,_i as s,zc as c}from"./index-BZuUy872.js";import{n as l}from"./context-C6mmtqBC.js";import{u}from"./match-CI3pJ4k7.js";import{a as d,i as f,n as p,r as m}from"./sidebar-IYAqkxSJ.js";import{c as h,o as g}from"./parts-BGYTk8Zo.js";import"./kit-gallery-BBavj2rC.js";import{t as _}from"./example-B67lLz1F.js";import{t as v}from"./-kits.sidebar.shared-B10Tgr4d.js";var y=e(o(),1),b=c(),x={archive:t,doc:r,hash:i},S=[{id:`st-general`,label:`general`,href:`/st/general`,icon:{name:`hash`}},{id:`st-eng`,label:`engineering`,href:`/st/eng`,icon:{name:`hash`},badge:{unread:!0}},{id:`st-design`,label:`design`,href:`/st/design`,icon:{name:`hash`},badge:{mentions:2}}],C=[{id:`st-sidebar`,label:`Sidebar kit`,href:`/st/p/sidebar`,icon:{emoji:`🧭`}},{id:`st-dock`,label:`Dock kit`,href:`/st/p/dock`,icon:{emoji:`🪟`}}],w=[{id:`st-old-1`,label:`Website relaunch`,href:`/st/a/relaunch`,icon:{name:`doc`}},{id:`st-old-2`,label:`Billing v1`,href:`/st/a/billing`,icon:{name:`doc`}}];function T(e,t,n,r,i={}){return{id:e,label:t,items:r===`empty`?[]:n,...r===`loading`||r===`error`?{status:r}:{},...i}}function E({name:e,value:t,onChange:n}){return(0,b.jsxs)(`span`,{className:`flex items-center gap-1`,role:`group`,"aria-label":`${e} state`,children:[(0,b.jsx)(`span`,{className:`text-[12px] text-muted-foreground`,children:e}),[`ready`,`loading`,`error`,`empty`].map(e=>(0,b.jsx)(`button`,{type:`button`,"aria-pressed":t===e,onClick:()=>n(e),className:s(`h-6 rounded border px-1.5 text-[11.5px]`,t===e?`border-primary bg-primary text-primary-foreground`:`text-muted-foreground hover:bg-muted`),children:e},e))]})}function D(){let[e,t]=(0,y.useState)(`loading`),[n,r]=(0,y.useState)(`error`),[i,a]=(0,y.useState)([]),[o,c]=(0,y.useState)(!1),[u,_]=(0,y.useState)(null),[v,D]=(0,y.useState)(!1),[O,k]=(0,y.useState)(`/st/general`),A=(e,t)=>{e.external||!e.href||(t.preventDefault(),k(e.href))},j=[T(`st-channels`,`Channels`,S,e,{empty:`No channels yet`,emptyAction:`Browse channels`}),T(`st-people`,`Direct messages`,i,i.length===0?`empty`:`ready`,{empty:`No conversations`,emptyAction:`Message a teammate`}),T(`st-projects`,`Projects`,C,n,{error:`Could not load projects`}),{id:`st-archive`,label:`Archive`,items:[{id:`st-2025`,label:`2025 projects`,icon:{name:`archive`},lazy:!0,...u?{children:u}:{}}]}];return(0,b.jsxs)(`div`,{className:`flex h-full min-h-0 flex-col gap-2 p-2`,children:[(0,b.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,b.jsx)(E,{name:`Channels`,value:e,onChange:t}),(0,b.jsx)(E,{name:`Projects`,value:n,onChange:r}),(0,b.jsx)(`button`,{type:`button`,"aria-pressed":o,onClick:()=>c(e=>!e),className:s(`h-6 rounded border px-1.5 text-[11.5px]`,o?`border-primary bg-primary text-primary-foreground`:`text-muted-foreground hover:bg-muted`),children:`Whole nav loading`}),(0,b.jsx)(`button`,{type:`button`,disabled:!v||u!==null,onClick:()=>_(w),className:`h-6 rounded border px-1.5 text-[11.5px] text-muted-foreground hover:bg-muted disabled:opacity-50`,children:`Resolve the lazy folder`})]}),(0,b.jsxs)(`div`,{className:`relative min-h-0 flex-1 overflow-hidden rounded-lg border`,children:[(0,b.jsx)(g,{}),(0,b.jsx)(l,{icons:x,location:O,label:`Workspace`,defaultState:{width:240},children:(0,b.jsx)(h,{sidebar:(0,b.jsx)(m,{header:(0,b.jsx)(d,{}),children:o?(0,b.jsx)(p,{rows:8,sections:2}):(0,b.jsx)(f,{nav:j,onNavigate:A,onRetry:e=>e.id===`st-projects`?r(`ready`):t(`ready`),onEmptyAction:e=>{e.id===`st-people`?a([{id:`st-ana`,label:`Ana Lima`,href:`/st/dm/ana`,icon:{initials:`AL`,color:`#047857`},presence:`online`}]):t(`ready`)},onLoadChildren:()=>D(!0)})}),children:(0,b.jsx)(`div`,{className:`p-4 text-[13px] text-muted-foreground`,children:`Set each section's state above. A failed section's row is its Retry (Enter or click); an empty section's row runs its call to action. Open Archive › 2025 projects: it asks the host for its children and shows a loading row until they arrive (Resolve stands in for the server).`})})})]})]})}var O=`import { Archive, FileText, Hash } from "lucide-react"
import { useState } from "react"
import { NavSkeleton, Sidebar, SidebarLayout, SidebarNav, SidebarProvider, SidebarSearch, SidebarStyles, type NavItem, type NavSection, type SectionStatus, type SidebarIconComponent } from "@kitora/sidebar"
import { cn } from "@kitora/ui/utils"

// \`{ name }\` icons in the nav resolve through this registry.
const ICONS: Readonly<Record<string, SidebarIconComponent>> = { archive: Archive, doc: FileText, hash: Hash }

/** What the controls set per section: the kit's \`SectionStatus\`, or no items at all. */
type DemoStatus = SectionStatus | "empty"

const CHANNELS: readonly NavItem[] = [
  { id: "st-general", label: "general", href: "/st/general", icon: { name: "hash" } },
  { id: "st-eng", label: "engineering", href: "/st/eng", icon: { name: "hash" }, badge: { unread: true } },
  { id: "st-design", label: "design", href: "/st/design", icon: { name: "hash" }, badge: { mentions: 2 } },
]
const PROJECTS: readonly NavItem[] = [
  { id: "st-sidebar", label: "Sidebar kit", href: "/st/p/sidebar", icon: { emoji: "🧭" } },
  { id: "st-dock", label: "Dock kit", href: "/st/p/dock", icon: { emoji: "🪟" } },
]
const ARCHIVED: readonly NavItem[] = [
  { id: "st-old-1", label: "Website relaunch", href: "/st/a/relaunch", icon: { name: "doc" } },
  { id: "st-old-2", label: "Billing v1", href: "/st/a/billing", icon: { name: "doc" } },
]

/** A section in one of the demo states. Section states are data: set them where you set the items. */
function section(id: string, label: string, items: readonly NavItem[], status: DemoStatus, extra: Partial<NavSection> = {}): NavSection {
  return { id, label, items: status === "empty" ? [] : items, ...(status === "loading" || status === "error" ? { status } : {}), ...extra }
}

function StateButtons({ name, value, onChange }: { readonly name: string; readonly value: DemoStatus; readonly onChange: (s: DemoStatus) => void }) {
  return (
    <span className="flex items-center gap-1" role="group" aria-label={\`\${name} state\`}>
      <span className="text-[12px] text-muted-foreground">{name}</span>
      {(["ready", "loading", "error", "empty"] as const).map((s) => (
        <button key={s} type="button" aria-pressed={value === s} onClick={() => onChange(s)} className={cn("h-6 rounded border px-1.5 text-[11.5px]", value === s ? "border-primary bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted")}>
          {s}
        </button>
      ))}
    </span>
  )
}

/** Loading, empty and error per section, a lazy folder, and the whole-nav skeleton. The buttons stand in for your data layer. */
export function StatesApp() {
  const [channels, setChannels] = useState<DemoStatus>("loading")
  const [projects, setProjects] = useState<DemoStatus>("error")
  const [people, setPeople] = useState<readonly NavItem[]>([])
  const [booting, setBooting] = useState(false)
  // The lazy folder's children: null until the host loads them (Resolve stands in for the server).
  const [archive, setArchive] = useState<readonly NavItem[] | null>(null)
  const [asked, setAsked] = useState(false)
  // In an app, pass the router's pathname as \`location\` and let the links navigate; this demo keeps navigation in the page.
  const [location, setLocation] = useState("/st/general")
  const navigate = (item: NavItem, event: { preventDefault(): void }) => {
    if (item.external || !item.href) return
    event.preventDefault()
    setLocation(item.href)
  }
  const nav: readonly NavSection[] = [
    section("st-channels", "Channels", CHANNELS, channels, { empty: "No channels yet", emptyAction: "Browse channels" }),
    section("st-people", "Direct messages", people, people.length === 0 ? "empty" : "ready", { empty: "No conversations", emptyAction: "Message a teammate" }),
    section("st-projects", "Projects", PROJECTS, projects, { error: "Could not load projects" }),
    { id: "st-archive", label: "Archive", items: [{ id: "st-2025", label: "2025 projects", icon: { name: "archive" }, lazy: true, ...(archive ? { children: archive } : {}) }] },
  ]
  return (
    <div className="flex h-full min-h-0 flex-col gap-2 p-2">
      <div className="flex flex-wrap items-center gap-3">
        <StateButtons name="Channels" value={channels} onChange={setChannels} />
        <StateButtons name="Projects" value={projects} onChange={setProjects} />
        <button type="button" aria-pressed={booting} onClick={() => setBooting((b) => !b)} className={cn("h-6 rounded border px-1.5 text-[11.5px]", booting ? "border-primary bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted")}>
          Whole nav loading
        </button>
        <button type="button" disabled={!asked || archive !== null} onClick={() => setArchive(ARCHIVED)} className="h-6 rounded border px-1.5 text-[11.5px] text-muted-foreground hover:bg-muted disabled:opacity-50">
          Resolve the lazy folder
        </button>
      </div>
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-lg border">
        <SidebarStyles />
        <SidebarProvider icons={ICONS} location={location} label="Workspace" defaultState={{ width: 240 }}>
          <SidebarLayout
            sidebar={
              <Sidebar header={<SidebarSearch />}>
                {booting ? (
                  <NavSkeleton rows={8} sections={2} />
                ) : (
                  <SidebarNav
                    nav={nav}
                    onNavigate={navigate}
                    // A failed section's row is its Retry; an empty section's row runs its call to action.
                    onRetry={(s) => (s.id === "st-projects" ? setProjects("ready") : setChannels("ready"))}
                    onEmptyAction={(s) => {
                      if (s.id === "st-people") setPeople([{ id: "st-ana", label: "Ana Lima", href: "/st/dm/ana", icon: { initials: "AL", color: "#047857" }, presence: "online" }])
                      else setChannels("ready")
                    }}
                    // Opening a \`lazy\` item asks for its children; it shows a loading row until they arrive.
                    onLoadChildren={() => setAsked(true)}
                  />
                )}
              </Sidebar>
            }
          >
            <div className="p-4 text-[13px] text-muted-foreground">Set each section's state above. A failed section's row is its Retry (Enter or click); an empty section's row runs its call to action. Open Archive › 2025 projects: it asks the host for its children and shows a loading row until they arrive (Resolve stands in for the server).</div>
          </SidebarLayout>
        </SidebarProvider>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>a(()=>import(`./states-bCqqh48M.js`),[]));var k={doc:r},A=50,j=100;function M(){return Array.from({length:A},(e,t)=>({id:`big-${t}`,label:`Folder ${t+1}`,items:Array.from({length:j},(e,n)=>({id:`big-${t}-${n}`,label:`Document ${t+1}.${n+1}`,href:`/big/${t}/${n}`,icon:{name:`doc`},...n%17==0?{badge:{count:n+1}}:{}}))}))}function N(){let[e,t]=(0,y.useState)(M),[n,r]=(0,y.useState)(`/big/0/0`);return(0,b.jsxs)(`div`,{className:`relative h-full overflow-hidden`,children:[(0,b.jsx)(g,{}),(0,b.jsx)(l,{icons:k,location:n,label:`Documents`,defaultState:{width:260},children:(0,b.jsx)(h,{sidebar:(0,b.jsx)(m,{header:(0,b.jsx)(d,{placeholder:`Filter 5,000 documents`}),children:(0,b.jsx)(f,{nav:e,onNavigate:(e,t)=>{e.external||!e.href||(t.preventDefault(),r(e.href))},onNavChange:t,onRename:(n,r)=>t(u(e,n.id,e=>({...e,label:r})))})}),children:(0,b.jsxs)(`div`,{className:`p-4 text-[13px] text-muted-foreground`,children:[(A*j).toLocaleString(`en`),` items in `,A,` sections. Scroll, use the arrows, Home and End, type a letter to jump, or filter: the tree renders only the rows near the viewport.`]})})})]})}var P=`import { FileText } from "lucide-react"
import { useState } from "react"
import { Sidebar, SidebarLayout, SidebarNav, SidebarProvider, SidebarSearch, SidebarStyles, updateItem, type NavItem, type NavSection, type SidebarIconComponent } from "@kitora/sidebar"

// \`{ name }\` icons in the nav resolve through this registry.
const ICONS: Readonly<Record<string, SidebarIconComponent>> = { doc: FileText }

/** Sections and items per section: 50 × 100 = 5,000 items. */
const SECTIONS = 50
const ITEMS = 100

/** The 5,000-item nav. Past 300 rows the tree virtualises on its own; virtualize={true | false | n} overrides the threshold. */
function bigNav(): readonly NavSection[] {
  return Array.from({ length: SECTIONS }, (_, s) => ({
    id: \`big-\${s}\`,
    label: \`Folder \${s + 1}\`,
    items: Array.from({ length: ITEMS }, (_, i) => ({ id: \`big-\${s}-\${i}\`, label: \`Document \${s + 1}.\${i + 1}\`, href: \`/big/\${s}/\${i}\`, icon: { name: "doc" }, ...(i % 17 === 0 ? { badge: { count: i + 1 } } : {}) })),
  }))
}

/** A nav of 5,000 items in 50 sections: only the rows near the viewport render. */
export function VirtualApp() {
  const [nav, setNav] = useState(bigNav)
  // In an app, pass the router's pathname as \`location\` and let the links navigate; this demo keeps navigation in the page.
  const [location, setLocation] = useState("/big/0/0")
  const navigate = (item: NavItem, event: { preventDefault(): void }) => {
    if (item.external || !item.href) return
    event.preventDefault()
    setLocation(item.href)
  }
  return (
    <div className="relative h-full overflow-hidden">
      <SidebarStyles />
      <SidebarProvider icons={ICONS} location={location} label="Documents" defaultState={{ width: 260 }}>
        <SidebarLayout
          sidebar={
            <Sidebar header={<SidebarSearch placeholder="Filter 5,000 documents" />}>
              <SidebarNav nav={nav} onNavigate={navigate} onNavChange={setNav} onRename={(item, label) => setNav(updateItem(nav, item.id, (i) => ({ ...i, label })))} />
            </Sidebar>
          }
        >
          <div className="p-4 text-[13px] text-muted-foreground">
            {(SECTIONS * ITEMS).toLocaleString("en")} items in {SECTIONS} sections. Scroll, use the arrows, Home and End, type a letter to jump, or filter: the tree renders only the rows near the viewport.
          </div>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>a(()=>import(`./virtual-ltoSlKYC.js`),[]));function F(){return(0,b.jsxs)(`div`,{children:[(0,b.jsx)(n,{title:`States and scale`,children:`What a sidebar shows while its data is not there yet, is empty or failed to load, and how it stays fast with thousands of items. Section states are data on the section (status, error, empty, emptyAction), so a server-driven nav sets them where it sets the items.`}),(0,b.jsx)(_,{n:1,title:`Loading, empty and error`,blurb:`Skeleton rows while a section loads (S71), an empty section with its call to action (S72), a failed section whose row retries (S73), and the whole-nav skeleton before the nav exists.`,code:O,children:(0,b.jsx)(v,{testId:`states`,height:410,children:(0,b.jsx)(D,{})})}),(0,b.jsx)(_,{n:2,title:`5,000 items`,blurb:`Fifty folders of a hundred documents: the flat rows make it a list virtualiser, so only the rows near the viewport render, with their real positions for screen readers, drag and the keyboard (S74).`,code:P,children:(0,b.jsx)(v,{testId:`virtual`,height:420,children:(0,b.jsx)(N,{})})})]})}export{F as component};