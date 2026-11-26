import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{b as t,s as n,y as r}from"./kit-docs-CvNs0WqT.js";import{t as i}from"./folder-BMIhIs7B.js";import{t as a}from"./git-branch-DpcW4RGM.js";import{t as o}from"./play--5eXVtC5.js";import{t as s}from"./puzzle-c3q3AOtf.js";import{t as c}from"./search-BZ0gLa1o.js";import{t as l}from"./settings-BYIHPtJX.js";import{t as u}from"./users-DvvoKKua.js";import{Bc as d,Cc as f,Ic as p,hi as m}from"./index-9y5uwRd3.js";import{a as h,i as g,n as _}from"./context-B0rBLGA7.js";import{u as v}from"./match-P3PTXEG7.js";import{a as y,i as b,o as x,r as S}from"./sidebar-VPUXi6Th.js";import{c as C,o as w}from"./parts-BCmKNJsH.js";import{t as T}from"./rail-CgO30nEc.js";import"./kit-gallery-B-Yr9fP4.js";import{t as E}from"./example-CZLJLtIC.js";import{t as D}from"./-kits.sidebar.shared-1cFvM_u_.js";var O=e(d(),1),k=p(),A={branch:a,file:t,files:r,folder:i,play:o,puzzle:s,search:c,settings:l,users:u},j=(e,t,n=`#519aba`)=>({id:e,label:t,href:`/code/${e}`,icon:{name:`file`,color:n}}),M=(e,t,n)=>({id:e,label:t,icon:{name:`folder`,color:`#90a4ae`},children:n}),N=[{id:`open`,label:`Open editors`,items:[j(`oe-sidebar`,`sidebar.tsx`),j(`oe-model`,`model.ts`,`#e8c547`)]},{id:`repo`,label:`Kitora`,items:[M(`packages`,`packages`,[M(`pkg-sidebar`,`sidebar`,[M(`src`,`src`,[j(`core-model`,`model.ts`,`#e8c547`),j(`core-moves`,`moves.ts`,`#e8c547`),j(`ui-sidebar`,`sidebar.tsx`),j(`nav-tree`,`nav-tree.tsx`)]),j(`pkg-json`,`package.json`,`#cbcb41`)]),M(`pkg-dock`,`dock`,[j(`split-view`,`split-view.tsx`)])]),M(`scripts`,`scripts`,[j(`smoke`,`sidebar-smoke.mjs`,`#cbcb41`)]),j(`readme`,`README.md`,`#42a5f5`),j(`taskfile`,`Taskfile.yml`,`#cb4b4b`)]},{id:`outline`,label:`Outline`,items:[],empty:`No symbols found in document`,collapsible:!0}],P=[{id:`explorer`,label:`Explorer`,icon:{name:`files`}},{id:`search`,label:`Search`,icon:{name:`search`}},{id:`scm`,label:`Source Control`,icon:{name:`branch`},badge:{count:7}},{id:`run`,label:`Run and Debug`,icon:{name:`play`}},{id:`ext`,label:`Extensions`,icon:{name:`puzzle`},badge:{count:2}},{id:`accounts`,label:`Accounts`,icon:{name:`users`},bottom:!0},{id:`manage`,label:`Manage`,icon:{name:`settings`},bottom:!0}],F={explorer:`Explorer`,search:`Search`,scm:`Source Control`,run:`Run and Debug`,ext:`Extensions`,accounts:`Accounts`,manage:`Manage`},I={"--sb-bg":`#181818`,"--sb-fg":`#cccccc`,"--sb-muted":`#9d9d9d`,"--sb-faint":`#6e6e6e`,"--sb-hover":`#2a2d2e`,"--sb-active-bg":`#37373d`,"--sb-active-fg":`#ffffff`,"--sb-accent":`#0078d4`,"--sb-border":`#2b2b2b`,"--sb-mention":`#0078d4`,"--sb-rail-bg":`#181818`,"--sb-rail-fg":`#d7d7d7`,"--sb-content-bg":`#1f1f1f`,"--sb-row-h":`22px`,"--sb-radius":`0px`};function L(){let{mode:e}=g();return e===`panel`?null:(0,k.jsx)(x,{})}function R({files:e,setFiles:t,navigate:n}){let{panel:r}=g(),{setRenaming:i}=h(),a=r??`explorer`;return(0,k.jsx)(S,{header:(0,k.jsx)(`div`,{className:`flex h-8 items-center px-2 text-[11px] tracking-wide text-[var(--sb-muted)] uppercase`,children:F[a]??a}),children:a===`explorer`?(0,k.jsx)(b,{nav:e,indent:10,onNavChange:t,onNavigate:n,onRename:(n,r)=>t(v(e,n.id,e=>({...e,label:r}))),itemActions:n=>[{id:`rename`,label:`Rename…`,shortcut:`F2`,onSelect:()=>i(n.id)},{id:`copy`,label:`Copy Path`,shortcut:`⌥⌘C`,onSelect:()=>void 0},{id:`delete`,label:`Delete`,danger:!0,separatorBefore:!0,onSelect:()=>t(e.map(e=>({...e,items:e.items.filter(e=>e.id!==n.id)})))}]}):a===`search`?(0,k.jsx)(y,{placeholder:`Search files`,shortcut:``}):(0,k.jsxs)(`p`,{className:`px-3 py-2 text-[12px] text-[var(--sb-muted)]`,children:[F[a],`: nothing to show in this demo.`]})})}function z({name:e}){let t=[`// `+e,`import { SidebarProvider } from "@kitora/sidebar"`,``,`export function App() {`,`  return <SidebarProvider location={pathname}>…</SidebarProvider>`,`}`];return(0,k.jsxs)(`div`,{className:`flex h-full min-h-0 flex-col bg-[#1f1f1f] font-mono text-[12.5px] text-[#cccccc]`,children:[(0,k.jsxs)(`div`,{className:`flex h-9 shrink-0 items-center gap-2 border-b border-[#2b2b2b] bg-[#181818] px-2`,children:[(0,k.jsx)(L,{}),(0,k.jsx)(`span`,{className:`border-t-2 border-[#0078d4] bg-[#1f1f1f] px-3 py-1.5 text-[12px]`,children:e})]}),(0,k.jsx)(`div`,{tabIndex:0,role:`region`,"aria-label":`Editor`,className:`flex-1 overflow-auto p-3 leading-5 outline-none`,children:t.map((e,t)=>(0,k.jsxs)(`div`,{className:`flex gap-4`,children:[(0,k.jsx)(`span`,{className:`w-5 text-end text-[#6e7681]`,children:t+1}),(0,k.jsx)(`span`,{className:m(`whitespace-pre`,e.startsWith(`//`)&&`text-[#6a9955]`,e.startsWith(`import`)&&`text-[#c586c0]`),children:e})]},t))})]})}function B(){let[e,t]=(0,O.useState)(N),[n,r]=(0,O.useState)(`/code/ui-sidebar`),i=(e,t)=>{e.external||!e.href||(t.preventDefault(),r(e.href))},a=(0,O.useMemo)(()=>{let t=n.split(`/`).at(-1)??``,r=e=>e.forEach(e=>e.href===n?t=e.label:r(e.children??[]));return e.forEach(e=>r(e.items)),t},[e,n]);return(0,k.jsxs)(`div`,{className:`relative h-full overflow-hidden`,style:{...I},children:[(0,k.jsx)(w,{}),(0,k.jsx)(_,{icons:A,location:n,label:`Explorer`,collapse:`offcanvas`,defaultState:{panel:`explorer`,width:250,expanded:[`packages`,`pkg-sidebar`,`src`]},children:(0,k.jsx)(C,{rail:(0,k.jsx)(T,{label:`Activity bar`,items:P,variant:`icons`,togglePanel:!0,className:`border-e border-[#2b2b2b]`}),sidebar:(0,k.jsx)(R,{files:e,setFiles:t,navigate:i}),aside:(0,k.jsxs)(`aside`,{"aria-label":`Secondary side bar`,className:`flex h-full w-full flex-col border-s border-[#2b2b2b] bg-[#181818] text-[12px] text-[#cccccc]`,children:[(0,k.jsx)(`div`,{className:`flex h-9 items-center px-3 text-[11px] tracking-wide text-[#9d9d9d] uppercase`,children:`Chat`}),(0,k.jsx)(`p`,{className:`px-3 text-[#9d9d9d]`,children:`The secondary side bar: a second sidebar on the other edge.`})]}),asideWidth:220,children:(0,k.jsx)(z,{name:a})})})]})}var V=`import { FileCode2, Files, Folder, GitBranch, Play, Puzzle, Search, Settings, Users } from "lucide-react"
import { useMemo, useState } from "react"
import { AppRail, Sidebar, SidebarLayout, SidebarNav, SidebarProvider, SidebarSearch, SidebarStyles, SidebarTrigger, updateItem, useSidebar, useSidebarContext, type AppRailItem, type NavItem, type NavSection, type SidebarIconComponent } from "@kitora/sidebar"
import { cn } from "@kitora/ui/utils"

// \`{ name }\` icons in the nav and the rail resolve through this registry.
const ICONS: Readonly<Record<string, SidebarIconComponent>> = { branch: GitBranch, file: FileCode2, files: Files, folder: Folder, play: Play, puzzle: Puzzle, search: Search, settings: Settings, users: Users }

const file = (id: string, label: string, color = "#519aba"): NavItem => ({ id, label, href: \`/code/\${id}\`, icon: { name: "file", color } })
const folder = (id: string, label: string, children: readonly NavItem[]): NavItem => ({ id, label, icon: { name: "folder", color: "#90a4ae" }, children })

const FILES: readonly NavSection[] = [
  { id: "open", label: "Open editors", items: [file("oe-sidebar", "sidebar.tsx"), file("oe-model", "model.ts", "#e8c547")] },
  {
    id: "repo",
    label: "Kitora",
    items: [
      folder("packages", "packages", [
        folder("pkg-sidebar", "sidebar", [folder("src", "src", [file("core-model", "model.ts", "#e8c547"), file("core-moves", "moves.ts", "#e8c547"), file("ui-sidebar", "sidebar.tsx"), file("nav-tree", "nav-tree.tsx")]), file("pkg-json", "package.json", "#cbcb41")]),
        folder("pkg-dock", "dock", [file("split-view", "split-view.tsx")]),
      ]),
      folder("scripts", "scripts", [file("smoke", "sidebar-smoke.mjs", "#cbcb41")]),
      file("readme", "README.md", "#42a5f5"),
      file("taskfile", "Taskfile.yml", "#cb4b4b"),
    ],
  },
  { id: "outline", label: "Outline", items: [], empty: "No symbols found in document", collapsible: true },
]

// The activity bar: each icon is a panel id; clicking the active one hides the panel (togglePanel).
const VIEWS: readonly AppRailItem[] = [
  { id: "explorer", label: "Explorer", icon: { name: "files" } },
  { id: "search", label: "Search", icon: { name: "search" } },
  { id: "scm", label: "Source Control", icon: { name: "branch" }, badge: { count: 7 } },
  { id: "run", label: "Run and Debug", icon: { name: "play" } },
  { id: "ext", label: "Extensions", icon: { name: "puzzle" }, badge: { count: 2 } },
  { id: "accounts", label: "Accounts", icon: { name: "users" }, bottom: true },
  { id: "manage", label: "Manage", icon: { name: "settings" }, bottom: true },
]

const VIEW_TITLES: Readonly<Record<string, string>> = { explorer: "Explorer", search: "Search", scm: "Source Control", run: "Run and Debug", ext: "Extensions", accounts: "Accounts", manage: "Manage" }

const THEME: Readonly<Record<\`--sb-\${string}\`, string>> = {
  "--sb-bg": "#181818",
  "--sb-fg": "#cccccc",
  "--sb-muted": "#9d9d9d",
  "--sb-faint": "#6e6e6e",
  "--sb-hover": "#2a2d2e",
  "--sb-active-bg": "#37373d",
  "--sb-active-fg": "#ffffff",
  "--sb-accent": "#0078d4",
  "--sb-border": "#2b2b2b",
  "--sb-mention": "#0078d4",
  "--sb-rail-bg": "#181818",
  "--sb-rail-fg": "#d7d7d7",
  "--sb-content-bg": "#1f1f1f",
  "--sb-row-h": "22px",
  "--sb-radius": "0px",
}

/** The content's own toggle while the panel is hidden. */
function CollapsedTrigger() {
  const { mode } = useSidebar()
  return mode === "panel" ? null : <SidebarTrigger />
}

function VsCodeSidebar({ files, setFiles, navigate }: { readonly files: readonly NavSection[]; readonly setFiles: (next: readonly NavSection[]) => void; readonly navigate: (item: NavItem, event: { preventDefault(): void }) => void }) {
  const { panel } = useSidebar()
  const { setRenaming } = useSidebarContext()
  const view = panel ?? "explorer"
  return (
    <Sidebar header={<div className="flex h-8 items-center px-2 text-[11px] tracking-wide text-[var(--sb-muted)] uppercase">{VIEW_TITLES[view] ?? view}</div>}>
      {view === "explorer" ? (
        <SidebarNav
          nav={files}
          indent={10}
          onNavChange={setFiles}
          onNavigate={navigate}
          // F2 or double-click renames inline.
          onRename={(item, label) => setFiles(updateItem(files, item.id, (i) => ({ ...i, label })))}
          itemActions={(item) => [
            { id: "rename", label: "Rename…", shortcut: "F2", onSelect: () => setRenaming(item.id) },
            { id: "copy", label: "Copy Path", shortcut: "⌥⌘C", onSelect: () => undefined },
            { id: "delete", label: "Delete", danger: true, separatorBefore: true, onSelect: () => setFiles(files.map((s) => ({ ...s, items: s.items.filter((i) => i.id !== item.id) }))) },
          ]}
        />
      ) : view === "search" ? (
        <SidebarSearch placeholder="Search files" shortcut="" />
      ) : (
        <p className="px-3 py-2 text-[12px] text-[var(--sb-muted)]">{VIEW_TITLES[view]}: nothing to show in this demo.</p>
      )}
    </Sidebar>
  )
}

function Editor({ name }: { readonly name: string }) {
  const lines = ["// " + name, 'import { SidebarProvider } from "@kitora/sidebar"', "", "export function App() {", "  return <SidebarProvider location={pathname}>…</SidebarProvider>", "}"]
  return (
    <div className="flex h-full min-h-0 flex-col bg-[#1f1f1f] font-mono text-[12.5px] text-[#cccccc]">
      <div className="flex h-9 shrink-0 items-center gap-2 border-b border-[#2b2b2b] bg-[#181818] px-2">
        <CollapsedTrigger />
        <span className="border-t-2 border-[#0078d4] bg-[#1f1f1f] px-3 py-1.5 text-[12px]">{name}</span>
      </div>
      <div tabIndex={0} role="region" aria-label="Editor" className="flex-1 overflow-auto p-3 leading-5 outline-none">
        {lines.map((l, i) => (
          <div key={i} className="flex gap-4">
            <span className="w-5 text-end text-[#6e7681]">{i + 1}</span>
            <span className={cn("whitespace-pre", l.startsWith("//") && "text-[#6a9955]", l.startsWith("import") && "text-[#c586c0]")}>{l}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/** VS Code: the activity bar switches the panel's view and hides it; the explorer renames inline and moves files by drag; a secondary sidebar on the right. */
export function VsCodeApp() {
  const [files, setFiles] = useState(FILES)
  // In an app, pass the router's pathname as \`location\` and let the links navigate; this demo keeps navigation in the page.
  const [location, setLocation] = useState("/code/ui-sidebar")
  const navigate = (item: NavItem, event: { preventDefault(): void }) => {
    if (item.external || !item.href) return
    event.preventDefault()
    setLocation(item.href)
  }
  const name = useMemo(() => {
    let found = location.split("/").at(-1) ?? ""
    const walk = (items: readonly NavItem[]) => items.forEach((i) => (i.href === location ? (found = i.label) : walk(i.children ?? [])))
    files.forEach((s) => walk(s.items))
    return found
  }, [files, location])
  return (
    <div className="relative h-full overflow-hidden" style={{ ...THEME }}>
      <SidebarStyles />
      <SidebarProvider icons={ICONS} location={location} label="Explorer" collapse="offcanvas" defaultState={{ panel: "explorer", width: 250, expanded: ["packages", "pkg-sidebar", "src"] }}>
        <SidebarLayout
          rail={<AppRail label="Activity bar" items={VIEWS} variant="icons" togglePanel className="border-e border-[#2b2b2b]" />}
          sidebar={<VsCodeSidebar files={files} setFiles={setFiles} navigate={navigate} />}
          aside={
            <aside aria-label="Secondary side bar" className="flex h-full w-full flex-col border-s border-[#2b2b2b] bg-[#181818] text-[12px] text-[#cccccc]">
              <div className="flex h-9 items-center px-3 text-[11px] tracking-wide text-[#9d9d9d] uppercase">Chat</div>
              <p className="px-3 text-[#9d9d9d]">The secondary side bar: a second sidebar on the other edge.</p>
            </aside>
          }
          asideWidth={220}
        >
          <Editor name={name} />
        </SidebarLayout>
      </SidebarProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>f(()=>import(`./vscode-DzRaYWkS.js`),[]));function H(){return(0,k.jsxs)(`div`,{children:[(0,k.jsx)(n,{title:`VS Code: activity bar and explorer`,children:`The activity bar switches the panel's view; clicking the active icon hides the panel (collapse mode offcanvas). The explorer is a file tree with F2 or double-click rename and drag to move files between folders; a secondary sidebar sits on the right edge.`}),(0,k.jsx)(E,{n:1,title:`VS Code style`,code:V,children:(0,k.jsx)(D,{testId:`vscode`,height:560,className:`border-[#2b2b2b]`,children:(0,k.jsx)(B,{})})})]})}export{H as component};