import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./circle-check-CzxPyIkl.js";import{t as n}from"./circle-dashed-B98eW5Qy.js";import{t as r}from"./circle-C8CJOATp.js";import{t as i}from"./clock-Dkgn9bA4.js";import{t as a}from"./ellipsis-DbSYAn2x.js";import{s as o}from"./kit-docs-DpYhPoxM.js";import{t as s}from"./inbox-Bv6dlLdK.js";import{t as c}from"./layers-DCbL8hmH.js";import{t as l}from"./layout-grid-BC3eZvLl.js";import{t as u}from"./package-CT0BQx-l.js";import{t as d}from"./target-Dx1reJNV.js";import{t as f}from"./zap-CddFqPAs.js";import{Bc as p,Cc as m,Ic as h}from"./index-q72zUtm9.js";import{i as g,n as _}from"./context-cfON_OKy.js";import{i as v,o as y,r as b}from"./sidebar-BdF__I6I.js";import{c as x,o as S}from"./parts-Dc9PvGaJ.js";import{i as C}from"./menus-CdEOzjpw.js";import"./kit-gallery-Atvibnty.js";import{t as w}from"./example-B8EaWveR.js";import{t as T}from"./-kits.sidebar.shared-CSA81ZJQ.js";var E=e(p(),1),D=h(),O={clock:i,grid:l,inbox:s,layers:c,more:a,package:u,target:d,zap:f},k=(e,t,n)=>({id:e,label:t,icon:{initials:t.slice(0,1),color:n},children:[{id:`${e}-issues`,label:`Issues`,href:`/linear/${e}/issues`,icon:{name:`layers`}},{id:`${e}-cycles`,label:`Cycles`,href:`/linear/${e}/cycles`,icon:{name:`clock`}},{id:`${e}-projects`,label:`Projects`,href:`/linear/${e}/projects`,icon:{name:`package`}},{id:`${e}-views`,label:`Views`,href:`/linear/${e}/views`,icon:{name:`grid`}}]}),A=[{id:`lin-top`,label:``,items:[{id:`lin-inbox`,label:`Inbox`,href:`/linear/inbox`,icon:{name:`inbox`},badge:{count:4},shortcut:`G I`},{id:`lin-mine`,label:`My issues`,href:`/linear/my-issues`,icon:{name:`target`},shortcut:`G M`}]},{id:`lin-ws`,label:`Workspace`,items:[{id:`lin-projects`,label:`Projects`,href:`/linear/projects`,icon:{name:`package`}},{id:`lin-views`,label:`Views`,href:`/linear/views`,icon:{name:`layers`}},{id:`lin-more`,label:`More`,href:`/linear/more`,icon:{name:`more`}}]},{id:`lin-fav`,label:`Favorites`,items:[{id:`lin-f1`,label:`Sidebar kit`,href:`/linear/p/sidebar`,icon:{emoji:`🧭`}},{id:`lin-f2`,label:`Bugs this week`,href:`/linear/v/bugs`,icon:{name:`zap`,color:`#f2994a`}}]},{id:`lin-teams`,label:`Your teams`,items:[k(`eng`,`Engineering`,`#5e6ad2`),k(`design`,`Design`,`#0e7490`),k(`growth`,`Growth`,`#15803d`)]}],j={"--sb-accent":`#5e6ad2`},M=[{key:`ENG-412`,title:`Wire the billing webhook retries`,state:`progress`},{key:`ENG-409`,title:`Migrate session tokens to rotating keys`,state:`progress`},{key:`ENG-415`,title:`Rate limit sign-in per IP and account`,state:`todo`},{key:`ENG-416`,title:`Audit log export to CSV`,state:`todo`},{key:`ENG-418`,title:`Keyboard shortcuts cheat sheet`,state:`todo`},{key:`ENG-398`,title:`Drop the legacy v1 importer`,state:`done`}],N={progress:{icon:n,color:`#f2c94c`},todo:{icon:r,color:`#95a2b3`},done:{icon:t,color:`#5e6ad2`}};function P(){let{mode:e}=g();return e===`panel`?null:(0,D.jsx)(y,{})}function F({title:e}){return(0,D.jsxs)(`div`,{className:`flex h-full min-h-0 flex-col bg-background text-[13px]`,children:[(0,D.jsxs)(`div`,{className:`flex h-11 shrink-0 items-center gap-2 border-b px-3`,children:[(0,D.jsx)(P,{}),(0,D.jsx)(`h1`,{className:`truncate font-medium`,children:e})]}),(0,D.jsx)(`div`,{className:`min-h-0 flex-1 overflow-y-auto`,children:M.map(e=>{let{icon:t,color:n}=N[e.state];return(0,D.jsxs)(`div`,{className:`flex h-9 items-center gap-3 border-b px-4 hover:bg-muted/50`,children:[(0,D.jsx)(`span`,{className:`w-16 shrink-0 text-[12px] text-muted-foreground tabular-nums`,children:e.key}),(0,D.jsx)(t,{className:`size-3.5 shrink-0`,style:{color:n},"aria-hidden":`true`}),(0,D.jsx)(`span`,{className:`min-w-0 flex-1 truncate`,children:e.title})]},e.key)})})]})}function I(){let[e,t]=(0,E.useState)(A),[n,r]=(0,E.useState)(`/linear/eng/issues`),i=(e,t)=>{e.external||!e.href||(t.preventDefault(),r(e.href))};return(0,D.jsxs)(`div`,{className:`relative h-full overflow-hidden`,style:{...j},children:[(0,D.jsx)(S,{}),(0,D.jsx)(_,{icons:O,location:n,label:`Linear navigation`,defaultState:{width:230,expanded:[`eng`]},children:(0,D.jsx)(x,{shape:`inset`,sidebar:(0,D.jsx)(b,{header:(0,D.jsx)(C,{workspaces:[{id:`acme`,name:`Acme`,icon:{initials:`A`,color:`#5e6ad2`}}],current:`acme`,onSelect:()=>void 0,actions:[{id:`settings`,label:`Settings`,shortcut:`G S`,onSelect:()=>void 0}],trailing:(0,D.jsx)(y,{})}),children:(0,D.jsx)(v,{nav:e,onNavChange:t,onNavigate:i})}),children:(0,D.jsx)(F,{title:`Engineering · Issues`})})})]})}var L=`import { CheckCircle2, Circle, CircleDashed, Clock, Inbox, Layers, LayoutGrid, MoreHorizontal, Package, Target, Zap } from "lucide-react"
import { useState } from "react"
import { Sidebar, SidebarLayout, SidebarNav, SidebarProvider, SidebarStyles, SidebarTrigger, useSidebar, WorkspaceSwitcher, type NavItem, type NavSection, type SidebarIconComponent } from "@kitora/sidebar"

// \`{ name }\` icons in the nav resolve through this registry.
const ICONS: Readonly<Record<string, SidebarIconComponent>> = { clock: Clock, grid: LayoutGrid, inbox: Inbox, layers: Layers, more: MoreHorizontal, package: Package, target: Target, zap: Zap }

/** A team with its nested views. */
const team = (id: string, label: string, color: string): NavItem => ({
  id,
  label,
  icon: { initials: label.slice(0, 1), color },
  children: [
    { id: \`\${id}-issues\`, label: "Issues", href: \`/linear/\${id}/issues\`, icon: { name: "layers" } },
    { id: \`\${id}-cycles\`, label: "Cycles", href: \`/linear/\${id}/cycles\`, icon: { name: "clock" } },
    { id: \`\${id}-projects\`, label: "Projects", href: \`/linear/\${id}/projects\`, icon: { name: "package" } },
    { id: \`\${id}-views\`, label: "Views", href: \`/linear/\${id}/views\`, icon: { name: "grid" } },
  ],
})

const NAV: readonly NavSection[] = [
  {
    id: "lin-top",
    label: "",
    items: [
      // \`shortcut\` draws the hint; the keyboard entry (@kitora/sidebar/keyboard) can bind it for real.
      { id: "lin-inbox", label: "Inbox", href: "/linear/inbox", icon: { name: "inbox" }, badge: { count: 4 }, shortcut: "G I" },
      { id: "lin-mine", label: "My issues", href: "/linear/my-issues", icon: { name: "target" }, shortcut: "G M" },
    ],
  },
  {
    id: "lin-ws",
    label: "Workspace",
    items: [
      { id: "lin-projects", label: "Projects", href: "/linear/projects", icon: { name: "package" } },
      { id: "lin-views", label: "Views", href: "/linear/views", icon: { name: "layers" } },
      { id: "lin-more", label: "More", href: "/linear/more", icon: { name: "more" } },
    ],
  },
  {
    id: "lin-fav",
    label: "Favorites",
    items: [
      { id: "lin-f1", label: "Sidebar kit", href: "/linear/p/sidebar", icon: { emoji: "🧭" } },
      { id: "lin-f2", label: "Bugs this week", href: "/linear/v/bugs", icon: { name: "zap", color: "#f2994a" } },
    ],
  },
  { id: "lin-teams", label: "Your teams", items: [team("eng", "Engineering", "#5e6ad2"), team("design", "Design", "#0e7490"), team("growth", "Growth", "#15803d")] },
]

const THEME: Readonly<Record<\`--sb-\${string}\`, string>> = { "--sb-accent": "#5e6ad2" }

const ISSUES = [
  { key: "ENG-412", title: "Wire the billing webhook retries", state: "progress" },
  { key: "ENG-409", title: "Migrate session tokens to rotating keys", state: "progress" },
  { key: "ENG-415", title: "Rate limit sign-in per IP and account", state: "todo" },
  { key: "ENG-416", title: "Audit log export to CSV", state: "todo" },
  { key: "ENG-418", title: "Keyboard shortcuts cheat sheet", state: "todo" },
  { key: "ENG-398", title: "Drop the legacy v1 importer", state: "done" },
] as const

const STATE_ICON = { progress: { icon: CircleDashed, color: "#f2c94c" }, todo: { icon: Circle, color: "#95a2b3" }, done: { icon: CheckCircle2, color: "#5e6ad2" } } as const

/** The content's own toggle while the panel is not showing in full (the rail, or the phone sheet). */
function CollapsedTrigger() {
  const { mode } = useSidebar()
  return mode === "panel" ? null : <SidebarTrigger />
}

function IssueList({ title }: { readonly title: string }) {
  return (
    <div className="flex h-full min-h-0 flex-col bg-background text-[13px]">
      <div className="flex h-11 shrink-0 items-center gap-2 border-b px-3">
        <CollapsedTrigger />
        <h1 className="truncate font-medium">{title}</h1>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto">
        {ISSUES.map((issue) => {
          const { icon: StateIcon, color } = STATE_ICON[issue.state]
          return (
            <div key={issue.key} className="flex h-9 items-center gap-3 border-b px-4 hover:bg-muted/50">
              <span className="w-16 shrink-0 text-[12px] text-muted-foreground tabular-nums">{issue.key}</span>
              <StateIcon className="size-3.5 shrink-0" style={{ color }} aria-hidden="true" />
              <span className="min-w-0 flex-1 truncate">{issue.title}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/** Linear: the inset shape, calm density, shortcut hints, teams with nested views. */
export function LinearApp() {
  const [nav, setNav] = useState(NAV)
  // In an app, pass the router's pathname as \`location\` and let the links navigate; this demo keeps navigation in the page.
  const [location, setLocation] = useState("/linear/eng/issues")
  const navigate = (item: NavItem, event: { preventDefault(): void }) => {
    if (item.external || !item.href) return
    event.preventDefault()
    setLocation(item.href)
  }
  return (
    <div className="relative h-full overflow-hidden" style={{ ...THEME }}>
      <SidebarStyles />
      <SidebarProvider icons={ICONS} location={location} label="Linear navigation" defaultState={{ width: 230, expanded: ["eng"] }}>
        <SidebarLayout
          // The sidebar sits on the page background and the content is a raised card.
          shape="inset"
          sidebar={
            <Sidebar
              header={
                <WorkspaceSwitcher
                  workspaces={[{ id: "acme", name: "Acme", icon: { initials: "A", color: "#5e6ad2" } }]}
                  current="acme"
                  onSelect={() => undefined}
                  actions={[{ id: "settings", label: "Settings", shortcut: "G S", onSelect: () => undefined }]}
                  trailing={<SidebarTrigger />}
                />
              }
            >
              <SidebarNav nav={nav} onNavChange={setNav} onNavigate={navigate} />
            </Sidebar>
          }
        >
          <IssueList title="Engineering · Issues" />
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>m(()=>import(`./linear-CLceuYqJ.js`),[]));function R(){return(0,D.jsxs)(`div`,{children:[(0,D.jsx)(o,{title:`Linear: inset sidebar`,children:`The inset shape: the sidebar sits on the page background and the content is a raised card. Inbox with a count, shortcut hints, Favorites, and teams with nested Issues, Cycles, Projects and Views.`}),(0,D.jsx)(w,{n:1,title:`Linear style`,code:L,children:(0,D.jsx)(T,{testId:`linear`,height:560,children:(0,D.jsx)(I,{})})})]})}export{R as component};