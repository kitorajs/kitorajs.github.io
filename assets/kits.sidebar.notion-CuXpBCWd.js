import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{t as n}from"./house-CA-hDJt5.js";import{t as r}from"./inbox-Bv6dlLdK.js";import{Bc as i,Cc as a,Ic as o}from"./index-q72zUtm9.js";import{i as s,n as c}from"./context-cfON_OKy.js";import{u as l}from"./match-P3PTXEG7.js";import{a as u,i as d,o as f,r as p}from"./sidebar-BdF__I6I.js";import{c as m,o as h}from"./parts-Dc9PvGaJ.js";import{i as g}from"./menus-CdEOzjpw.js";import"./kit-gallery-Atvibnty.js";import{t as _}from"./example-B8EaWveR.js";import{t as v}from"./-kits.sidebar.shared-CSA81ZJQ.js";var y=e(i(),1),b=o(),x={home:n,inbox:r},S=(e,t,n,r=[])=>({id:e,label:t,href:`/notion/${e}`,icon:{emoji:n},children:r,match:`exact`}),C=[{id:`no-top`,label:``,items:[{id:`no-home`,label:`Home`,href:`/notion/home`,icon:{name:`home`}},{id:`no-inbox`,label:`Inbox`,href:`/notion/inbox`,icon:{name:`inbox`},badge:{mentions:1}}]},{id:`no-fav`,label:`Favorites`,items:[S(`no-f-wiki`,`Team wiki`,`📚`)]},{id:`no-team`,label:`Teamspaces`,items:[S(`wiki`,`Team wiki`,`📚`,[S(`onboard`,`Onboarding`,`👋`,[S(`first-week`,`Your first week`,`🗓️`),S(`tools`,`Tools we use`,`🧰`)]),S(`handbook`,`Handbook`,`📘`,[S(`values`,`Values`,`💡`),S(`benefits`,`Benefits`,`🎁`)])]),S(`eng-notes`,`Engineering`,`⚙️`,[S(`rfcs`,`RFCs`,`📝`,[S(`rfc-1`,`RFC 1: Sidebar kit`,`🧭`),S(`rfc-2`,`RFC 2: One splitter`,`↔️`)]),S(`oncall`,`On-call`,`🚨`)]),S(`meetings`,`Meeting notes`,`🗒️`)]},{id:`no-private`,label:`Private`,items:[S(`journal`,`Journal`,`✍️`,[S(`j-oct`,`October`,`🍂`)]),S(`reading`,`Reading list`,`📖`)]}],w={"--sb-bg":`#f7f7f5`,"--sb-accent":`#2383e2`,"--sb-active-bg":`#ebebea`,"--sb-hover":`#efefee`,"--sb-fg":`#37352f`,"--sb-muted":`#6b6a66`,"--sb-faint":`#9b9a97`,"--sb-content-bg":`#ffffff`,"--sb-border":`#e9e9e7`};function T(){let{mode:e}=s();return e===`panel`?null:(0,b.jsx)(f,{})}function E(){let[e,t]=(0,y.useState)(C),[n,r]=(0,y.useState)(`/notion/rfc-1`),i=(e,t)=>{e.external||!e.href||(t.preventDefault(),r(e.href))},a=(0,y.useMemo)(()=>{let t=`Home`,r=e=>e.forEach(e=>e.href===n?t=e.label:r(e.children??[]));return e.forEach(e=>r(e.items)),t},[e,n]);return(0,b.jsxs)(`div`,{className:`relative h-full overflow-hidden`,style:{...w},children:[(0,b.jsx)(h,{}),(0,b.jsx)(c,{icons:x,location:n,label:`Notion pages`,collapse:`offcanvas`,defaultState:{width:240},children:(0,b.jsx)(m,{peek:!0,sidebar:(0,b.jsx)(p,{header:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g,{workspaces:[{id:`n`,name:`Aman's Notion`,icon:{initials:`A`,color:`#37352f`}}],current:`n`,onSelect:()=>void 0,trailing:(0,b.jsx)(f,{})}),(0,b.jsx)(u,{})]}),children:(0,b.jsx)(d,{nav:e,onNavChange:t,onNavigate:i,onRename:(n,r)=>t(l(e,n.id,e=>({...e,label:r}))),rowOptions:{onCreate:()=>void 0,createLabel:e=>e.kind===`item`?`Add a page inside ${e.item.label}`:`Add a page`}})}),children:(0,b.jsxs)(`div`,{className:`flex h-full min-h-0 flex-col bg-white text-[#37352f]`,children:[(0,b.jsxs)(`div`,{className:`flex h-11 shrink-0 items-center gap-2 px-3 text-[13px]`,children:[(0,b.jsx)(T,{}),(0,b.jsx)(`span`,{children:a})]}),(0,b.jsxs)(`div`,{className:`mx-auto w-full max-w-xl px-6 pt-10`,children:[(0,b.jsx)(`div`,{className:`text-[44px] leading-none`,children:`🧭`}),(0,b.jsx)(`h1`,{className:`mt-3 text-[32px] font-bold tracking-tight`,children:a}),(0,b.jsx)(`p`,{className:`mt-3 text-[15px] leading-relaxed text-[#5f5e5b]`,children:`Drag a page right to nest it under the page above, left to take it out. Hide the sidebar with the toggle; rest the pointer on the left edge to peek at it, or use the toggle at the top of this page to bring it back.`})]})]})})})]})}var D=`import { Home, Inbox } from "lucide-react"
import { useMemo, useState } from "react"
import { Sidebar, SidebarLayout, SidebarNav, SidebarProvider, SidebarSearch, SidebarStyles, SidebarTrigger, updateItem, useSidebar, WorkspaceSwitcher, type NavItem, type NavSection, type SidebarIconComponent } from "@kitora/sidebar"

// \`{ name }\` icons in the nav resolve through this registry.
const ICONS: Readonly<Record<string, SidebarIconComponent>> = { home: Home, inbox: Inbox }

/** A page: \`match: "exact"\` keeps a parent page from lighting up while one of its children is open. */
const page = (id: string, label: string, emoji: string, children: readonly NavItem[] = []): NavItem => ({ id, label, href: \`/notion/\${id}\`, icon: { emoji }, children, match: "exact" })

const NAV: readonly NavSection[] = [
  {
    id: "no-top",
    label: "",
    items: [
      { id: "no-home", label: "Home", href: "/notion/home", icon: { name: "home" } },
      { id: "no-inbox", label: "Inbox", href: "/notion/inbox", icon: { name: "inbox" }, badge: { mentions: 1 } },
    ],
  },
  { id: "no-fav", label: "Favorites", items: [page("no-f-wiki", "Team wiki", "📚")] },
  {
    id: "no-team",
    label: "Teamspaces",
    items: [
      page("wiki", "Team wiki", "📚", [page("onboard", "Onboarding", "👋", [page("first-week", "Your first week", "🗓️"), page("tools", "Tools we use", "🧰")]), page("handbook", "Handbook", "📘", [page("values", "Values", "💡"), page("benefits", "Benefits", "🎁")])]),
      page("eng-notes", "Engineering", "⚙️", [page("rfcs", "RFCs", "📝", [page("rfc-1", "RFC 1: Sidebar kit", "🧭"), page("rfc-2", "RFC 2: One splitter", "↔️")]), page("oncall", "On-call", "🚨")]),
      page("meetings", "Meeting notes", "🗒️"),
    ],
  },
  { id: "no-private", label: "Private", items: [page("journal", "Journal", "✍️", [page("j-oct", "October", "🍂")]), page("reading", "Reading list", "📖")] },
]

// Theme tokens: any --sb-* set on an ancestor restyles the sidebar (the phone sheet carries them too).
const THEME: Readonly<Record<\`--sb-\${string}\`, string>> = {
  "--sb-bg": "#f7f7f5",
  "--sb-accent": "#2383e2",
  "--sb-active-bg": "#ebebea",
  "--sb-hover": "#efefee",
  "--sb-fg": "#37352f",
  "--sb-muted": "#6b6a66",
  "--sb-faint": "#9b9a97",
  "--sb-content-bg": "#ffffff",
  "--sb-border": "#e9e9e7",
}

/** The page's own toggle while the sidebar is hidden. */
function CollapsedTrigger() {
  const { mode } = useSidebar()
  return mode === "panel" ? null : <SidebarTrigger />
}

/** Notion: a page tree of any depth with emoji, drag to nest, hidden off canvas, peeking in on edge hover. */
export function NotionApp() {
  const [nav, setNav] = useState(NAV)
  // In an app, pass the router's pathname as \`location\` and let the links navigate; this demo keeps navigation in the page.
  const [location, setLocation] = useState("/notion/rfc-1")
  const navigate = (item: NavItem, event: { preventDefault(): void }) => {
    if (item.external || !item.href) return
    event.preventDefault()
    setLocation(item.href)
  }
  const title = useMemo(() => {
    let found = "Home"
    const walk = (items: readonly NavItem[]) => items.forEach((i) => (i.href === location ? (found = i.label) : walk(i.children ?? [])))
    nav.forEach((s) => walk(s.items))
    return found
  }, [nav, location])
  return (
    <div className="relative h-full overflow-hidden" style={{ ...THEME }}>
      <SidebarStyles />
      <SidebarProvider icons={ICONS} location={location} label="Notion pages" collapse="offcanvas" defaultState={{ width: 240 }}>
        <SidebarLayout
          // Hidden off canvas, the sidebar slides in while the pointer rests on the left edge.
          peek
          sidebar={
            <Sidebar
              header={
                <>
                  <WorkspaceSwitcher workspaces={[{ id: "n", name: "Aman's Notion", icon: { initials: "A", color: "#37352f" } }]} current="n" onSelect={() => undefined} trailing={<SidebarTrigger />} />
                  <SidebarSearch />
                </>
              }
            >
              <SidebarNav
                nav={nav}
                // Drag a page right to nest it under the page above, left to take it out.
                onNavChange={setNav}
                onNavigate={navigate}
                onRename={(item, label) => setNav(updateItem(nav, item.id, (i) => ({ ...i, label })))}
                rowOptions={{ onCreate: () => undefined, createLabel: (row) => (row.kind === "item" ? \`Add a page inside \${row.item.label}\` : "Add a page") }}
              />
            </Sidebar>
          }
        >
          <div className="flex h-full min-h-0 flex-col bg-white text-[#37352f]">
            <div className="flex h-11 shrink-0 items-center gap-2 px-3 text-[13px]">
              <CollapsedTrigger />
              <span>{title}</span>
            </div>
            <div className="mx-auto w-full max-w-xl px-6 pt-10">
              <div className="text-[44px] leading-none">🧭</div>
              <h1 className="mt-3 text-[32px] font-bold tracking-tight">{title}</h1>
              <p className="mt-3 text-[15px] leading-relaxed text-[#5f5e5b]">Drag a page right to nest it under the page above, left to take it out. Hide the sidebar with the toggle; rest the pointer on the left edge to peek at it, or use the toggle at the top of this page to bring it back.</p>
            </div>
          </div>
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>a(()=>import(`./notion-B1fKI_61.js`),[]));function O(){return(0,b.jsxs)(`div`,{children:[(0,b.jsx)(t,{title:`Notion: page tree`,children:`A page tree of any depth with emoji icons. Drag a page right to nest it under the one above and left to outdent; the sidebar hides off canvas and the page's own toggle brings it back.`}),(0,b.jsx)(_,{n:1,title:`Notion style`,code:D,children:(0,b.jsx)(v,{testId:`notion`,height:560,children:(0,b.jsx)(E,{})})})]})}export{O as component};