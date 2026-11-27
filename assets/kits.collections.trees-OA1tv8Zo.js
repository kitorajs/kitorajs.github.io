import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{t as n}from"./search-B6QTpngp.js";import{o as r,r as i}from"./tree-C0Nrws0x.js";import{t as a,u as o}from"./tree-view-CNlvzqCD.js";import{Ec as s,Uc as c,zc as l}from"./index-BZuUy872.js";import{n as u,t as d}from"./file-tree-DhivafcL.js";import{t as f}from"./tree-select-DeEJVcaP.js";import{t as p}from"./cascader-B0hUYphz.js";import"./kit-gallery-BBavj2rC.js";import{t as m}from"./example-B67lLz1F.js";import{t as h}from"./-kits.collections.shared-CrMBZThW.js";var g=e(c(),1),_=l();function v(){let[e,t]=(0,g.useState)(``),[i,a]=(0,g.useState)([]),[s,c]=(0,g.useState)(null),[l,f]=(0,g.useState)(S),[p,m]=(0,g.useState)(new Map);return(0,_.jsxs)(`div`,{className:`grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-[280px_1fr]`,children:[(0,_.jsxs)(`div`,{className:`rounded-lg border border-border`,children:[(0,_.jsxs)(`div`,{className:`flex h-8 items-center gap-2 border-b border-border px-2`,children:[(0,_.jsx)(n,{className:`size-3.5 text-muted-foreground`}),(0,_.jsx)(`input`,{"aria-label":`Filter loaded files`,value:e,onChange:e=>t(e.target.value),placeholder:`Filter loaded files…`,className:`h-7 min-w-0 flex-1 bg-transparent text-[13px] outline-none placeholder:text-muted-foreground`})]}),(0,_.jsx)(u,{"aria-label":`Repository`,items:l,draggable:!0,onMove:e=>f(e),renamable:!0,onRename:(e,t)=>{f(o(r(l,p),e.id,t)),m(new Map)},selectionMode:`multiple`,value:i,onChange:a,loadChildren:E,loaded:p,onLoadedChange:m,filter:e,onOpenFile:c,height:300,className:`p-1`})]}),(0,_.jsxs)(`div`,{className:`space-y-2 text-[12px]`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`div`,{className:`font-medium`,children:`Opened`}),(0,_.jsx)(`div`,{className:`flex items-center gap-1.5 font-mono text-muted-foreground`,children:s?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(d,{node:s,expanded:!1}),s.path]}):`— (Enter or double-click a file)`})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsxs)(`div`,{className:`font-medium tabular-nums`,children:[`Selected (`,i.length,`)`]}),(0,_.jsx)(`ul`,{className:`max-h-48 overflow-auto font-mono text-muted-foreground`,children:i.length===0?(0,_.jsx)(`li`,{children:`Click, Space, Shift+↓ or ⌘A`}):i.map(e=>(0,_.jsx)(`li`,{className:`truncate`,children:e},e))})]})]})]})}function y(e,t){return new Promise((n,r)=>{let i=setTimeout(n,e);t?.addEventListener(`abort`,()=>{clearTimeout(i),r(new DOMException(`aborted`,`AbortError`))})})}var b=e=>({id:`/${e}`,label:e.split(`/`).pop()??e,kind:`folder`,path:e,hasChildren:!0}),x=(e,t)=>({id:`/${e}`,label:e.split(`/`).pop()??e,kind:`file`,path:e,size:t}),S=[b(`apps`),b(`packages`),b(`scripts`),b(`.github`),x(`package.json`,2048),x(`pnpm-lock.yaml`,419840),x(`README.md`,6144),x(`logo.svg`,3277)],C=[`src`,`lib`,`test`,`assets`,`config`],w=[`index.ts`,`utils.ts`,`types.ts`,`README.md`,`logo.png`,`package.json`,`vite.config.ts`],T=!1;async function E(e){if(await y(500),e.id===`/scripts`&&!T)throw T=!0,Error(`Permission denied`);let t=e.id.split(`/`).length-1,n=t<3?C.slice(0,3-t+1).map(t=>b(`${e.path}/${t}`)):[],r=w.slice(0,2+e.label.length%4).map((t,n)=>x(`${e.path}/${t}`,(n+1)*3072));return[...n,...r]}var D=`import { useState } from "react"
import { Search } from "lucide-react"
import { FileNodeIcon, FileTree, renameFileNode, withLoaded, type FileNode, type LoadedChildren } from "@kitora/collections"

/**
 * A file explorer on \`FileTree\`: folders first then natural order, the upload kit's icon per file kind, sizes as the hint;
 * folders load on first open (a spinner row, \`/scripts\` fails once to show Retry), filter, multi-select, Enter opens a file.
 * Drag rows into folders (a selection moves as one; holding over a closed folder opens and loads it), or use the row's menu
 * (the Menu key or Shift+F10) and Move to…. The explorer keeps the tree: \`onMove\` hands back the new one, loaded folders included.
 * Dragging is off while the filter has text. F2 (or Rename in the row's menu) renames a file or folder in place; the explorer
 * keeps the loaded folders too (\`loaded\`), so a rename of a fetched file lands in the whole tree (\`withLoaded\`).
 */
export function TreesExplorer() {
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState<string[]>([])
  const [opened, setOpened] = useState<FileNode | null>(null)
  const [repo, setRepo] = useState<readonly FileNode[]>(REPO)
  const [loaded, setLoaded] = useState<LoadedChildren<FileNode>>(new Map())
  return (
    <div className="grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-[280px_1fr]">
      <div className="rounded-lg border border-border">
        <div className="flex h-8 items-center gap-2 border-b border-border px-2">
          <Search className="size-3.5 text-muted-foreground" />
          <input aria-label="Filter loaded files" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Filter loaded files…" className="h-7 min-w-0 flex-1 bg-transparent text-[13px] outline-none placeholder:text-muted-foreground" />
        </div>
        <FileTree
          aria-label="Repository"
          items={repo}
          draggable
          onMove={(next) => setRepo(next)}
          renamable
          onRename={(node, name) => {
            // The fetched folders become part of the tree the explorer keeps, renamed with every path below updated.
            setRepo(renameFileNode(withLoaded(repo, loaded), node.id, name))
            setLoaded(new Map())
          }}
          selectionMode="multiple"
          value={selected}
          onChange={setSelected}
          loadChildren={listFolder}
          loaded={loaded}
          onLoadedChange={setLoaded}
          filter={query}
          onOpenFile={setOpened}
          height={300}
          className="p-1"
        />
      </div>
      <div className="space-y-2 text-[12px]">
        <div>
          <div className="font-medium">Opened</div>
          <div className="flex items-center gap-1.5 font-mono text-muted-foreground">
            {opened ? (
              <>
                <FileNodeIcon node={opened} expanded={false} />
                {opened.path}
              </>
            ) : (
              "— (Enter or double-click a file)"
            )}
          </div>
        </div>
        <div>
          <div className="font-medium tabular-nums">Selected ({selected.length})</div>
          <ul className="max-h-48 overflow-auto font-mono text-muted-foreground">
            {selected.length === 0 ? <li>Click, Space, Shift+↓ or ⌘A</li> : selected.map((s) => <li key={s} className="truncate">{s}</li>)}
          </ul>
        </div>
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

/** A folder at \`path\` ("apps/src") whose children are fetched when it first opens; its id is the path at first and never changes. */
const folder = (path: string): FileNode => ({ id: \`/\${path}\`, label: path.split("/").pop() ?? path, kind: "folder", path, hasChildren: true })
/** A file at \`path\` with a size in bytes. */
const file = (path: string, size: number): FileNode => ({ id: \`/\${path}\`, label: path.split("/").pop() ?? path, kind: "file", path, size })

/** Top of a repository; folders have \`hasChildren\` and are fetched on open. */
const REPO: readonly FileNode[] = [
  folder("apps"),
  folder("packages"),
  folder("scripts"),
  folder(".github"),
  file("package.json", 2048),
  file("pnpm-lock.yaml", 419_840),
  file("README.md", 6144),
  file("logo.svg", 3277),
]

const FOLDER_NAMES = ["src", "lib", "test", "assets", "config"]
const FILE_NAMES = ["index.ts", "utils.ts", "types.ts", "README.md", "logo.png", "package.json", "vite.config.ts"]

/** Lists a folder after ~500ms: a few subfolders (two levels deep) and files. \`/scripts\` fails once to show Retry. */
let scriptsFailed = false
async function listFolder(parent: FileNode): Promise<FileNode[]> {
  await wait(500)
  if (parent.id === "/scripts" && !scriptsFailed) {
    scriptsFailed = true
    throw new Error("Permission denied")
  }
  const depth = parent.id.split("/").length - 1
  const folders = depth < 3 ? FOLDER_NAMES.slice(0, 3 - depth + 1).map((name) => folder(\`\${parent.path}/\${name}\`)) : []
  const files = FILE_NAMES.slice(0, 2 + (parent.label.length % 4)).map((name, i) => file(\`\${parent.path}/\${name}\`, (i + 1) * 3072))
  return [...folders, ...files]
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>s(()=>import(`./trees-explorer-xsUaa51O.js`),[]));var O=[{id:`projects`,label:`Projects`,children:[{id:`projects.read`,label:`View projects`},{id:`projects.write`,label:`Create and edit`},{id:`projects.archive`,label:`Archive`},{id:`projects.delete`,label:`Delete`,disabled:!0,description:`owners only`}]},{id:`issues`,label:`Issues`,children:[{id:`issues.read`,label:`View issues`},{id:`issues.write`,label:`Create and edit`},{id:`issues.bulk`,label:`Bulk edit`,children:[{id:`issues.bulk.status`,label:`Status`},{id:`issues.bulk.assignee`,label:`Assignee`},{id:`issues.bulk.labels`,label:`Labels`}]}]},{id:`billing`,label:`Billing`,children:[{id:`billing.read`,label:`View invoices`},{id:`billing.manage`,label:`Manage plan`}]},{id:`audit`,label:`Audit log`}];function k(){let[e,t]=(0,g.useState)([`projects.read`,`issues.read`,`issues.bulk.status`]),n=(0,g.useMemo)(()=>O.flatMap(e=>i(e)).length,[]);return(0,_.jsxs)(`div`,{className:`grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-[300px_1fr]`,children:[(0,_.jsx)(a,{"aria-label":`Permissions`,items:O,checkboxes:!0,checked:e,onCheckedChange:t,defaultExpanded:[`projects`,`issues`,`issues.bulk`],className:`rounded-lg border border-border p-1`}),(0,_.jsxs)(`div`,{className:`text-[12px]`,children:[(0,_.jsxs)(`div`,{className:`font-medium tabular-nums`,children:[e.length,` of `,n,` granted`]}),(0,_.jsx)(`ul`,{className:`mt-1 font-mono text-muted-foreground`,children:e.map(e=>(0,_.jsx)(`li`,{children:e},e))})]})]})}var A=`import { useMemo, useState } from "react"
import { leafIds, TreeView, type Entry } from "@kitora/collections"

const PERMISSIONS: readonly Entry[] = [
  {
    id: "projects",
    label: "Projects",
    children: [
      { id: "projects.read", label: "View projects" },
      { id: "projects.write", label: "Create and edit" },
      { id: "projects.archive", label: "Archive" },
      { id: "projects.delete", label: "Delete", disabled: true, description: "owners only" },
    ],
  },
  {
    id: "issues",
    label: "Issues",
    children: [
      { id: "issues.read", label: "View issues" },
      { id: "issues.write", label: "Create and edit" },
      { id: "issues.bulk", label: "Bulk edit", children: [{ id: "issues.bulk.status", label: "Status" }, { id: "issues.bulk.assignee", label: "Assignee" }, { id: "issues.bulk.labels", label: "Labels" }] },
    ],
  },
  { id: "billing", label: "Billing", children: [{ id: "billing.read", label: "View invoices" }, { id: "billing.manage", label: "Manage plan" }] },
  { id: "audit", label: "Audit log" },
]

/** Tri-state checkboxes: a parent is checked, unchecked or mixed from its leaves; disabled leaves are left alone. Space toggles. */
export function TreesPermissions() {
  const [checked, setChecked] = useState<string[]>(["projects.read", "issues.read", "issues.bulk.status"])
  const total = useMemo(() => PERMISSIONS.flatMap((p) => leafIds(p)).length, [])
  return (
    <div className="grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-[300px_1fr]">
      <TreeView aria-label="Permissions" items={PERMISSIONS} checkboxes checked={checked} onCheckedChange={setChecked} defaultExpanded={["projects", "issues", "issues.bulk"]} className="rounded-lg border border-border p-1" />
      <div className="text-[12px]">
        <div className="font-medium tabular-nums">
          {checked.length} of {total} granted
        </div>
        <ul className="mt-1 font-mono text-muted-foreground">
          {checked.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>s(()=>import(`./trees-permissions-CJOUb2Ni.js`),[]));var j=[{id:`eng`,label:`Engineering`,children:[{id:`web`,label:`Web`},{id:`mobile`,label:`Mobile`},{id:`platform`,label:`Platform`,children:[{id:`infra`,label:`Infrastructure`},{id:`data`,label:`Data`},{id:`security`,label:`Security`}]}]},{id:`design`,label:`Design`,children:[{id:`product`,label:`Product design`},{id:`research`,label:`Research`},{id:`brand`,label:`Brand`}]},{id:`gtm`,label:`Go to market`,children:[{id:`sales`,label:`Sales`},{id:`marketing`,label:`Marketing`},{id:`support`,label:`Support`}]}],M=[{id:`americas`,label:`Americas`,hasChildren:!0},{id:`emea`,label:`EMEA`,hasChildren:!0},{id:`apac`,label:`APAC`,hasChildren:!0}],N={americas:[`New York`,`Toronto`,`São Paulo`],emea:[`London`,`Berlin`,`Lisbon`,`Dubai`],apac:[`Tokyo`,`Singapore`,`Sydney`,`Bengaluru`]};async function P(e){await I(400);let t=N[e.id];return t?t.map(t=>({id:`${e.id}/${t}`,label:t,hasChildren:!0})):[1,2,3].map(t=>({id:`${e.id}/floor-${t}`,label:`Floor ${t}`}))}function F(){let[e,t]=(0,g.useState)([`infra`]),[n,r]=(0,g.useState)([`web`,`mobile`,`product`]),[i,a]=(0,g.useState)([]),[o,s]=(0,g.useState)([`eng`,`platform`]),[c,l]=(0,g.useState)([]),[u,d]=(0,g.useState)([]);return(0,_.jsxs)(`div`,{className:`grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2`,children:[(0,_.jsxs)(`div`,{className:`space-y-1`,children:[(0,_.jsx)(`div`,{className:`text-[12px] font-medium`,children:`Owning team`}),(0,_.jsx)(f,{"aria-label":`Owning team`,items:j,value:e,onChange:t})]}),(0,_.jsxs)(`div`,{className:`space-y-1`,children:[(0,_.jsx)(`div`,{className:`text-[12px] font-medium`,children:`Audience (many)`}),(0,_.jsx)(f,{"aria-label":`Audience`,items:j,selectionMode:`multiple`,value:n,onChange:r,maxChips:2})]}),(0,_.jsxs)(`div`,{className:`space-y-1`,children:[(0,_.jsx)(`div`,{className:`text-[12px] font-medium`,children:`Desk (async columns)`}),(0,_.jsx)(p,{"aria-label":`Desk`,items:M,loadChildren:P,value:i,onChange:a,placeholder:`Region / office / floor`}),(0,_.jsx)(`p`,{className:`truncate font-mono text-[11px] text-muted-foreground`,children:i.join(` → `)||`—`})]}),(0,_.jsxs)(`div`,{className:`space-y-1`,children:[(0,_.jsx)(`div`,{className:`text-[12px] font-medium`,children:`Scope (any level, hover opens)`}),(0,_.jsx)(p,{"aria-label":`Scope`,items:j,changeOnSelect:!0,expandOnHover:!0,value:o,onChange:s})]}),(0,_.jsxs)(`div`,{className:`space-y-1`,children:[(0,_.jsx)(`div`,{className:`text-[12px] font-medium`,children:`Floor (loaded on open)`}),(0,_.jsx)(f,{"aria-label":`Floor`,items:M,loadChildren:P,value:c,onChange:l,placeholder:`Pick a floor`})]}),(0,_.jsxs)(`div`,{className:`space-y-1`,children:[(0,_.jsx)(`div`,{className:`text-[12px] font-medium`,children:`Floors (many, loaded on open)`}),(0,_.jsx)(f,{"aria-label":`Floors`,items:M,loadChildren:P,selectionMode:`multiple`,value:u,onChange:d,maxChips:2,placeholder:`Pick floors`}),(0,_.jsx)(`p`,{className:`truncate font-mono text-[11px] text-muted-foreground`,children:u.join(`, `)||`—`})]})]})}function I(e,t){return new Promise((n,r)=>{let i=setTimeout(n,e);t?.addEventListener(`abort`,()=>{clearTimeout(i),r(new DOMException(`aborted`,`AbortError`))})})}var L=`import { useState } from "react"
import { Cascader, TreeSelect, type Entry } from "@kitora/collections"

const ORG: readonly Entry[] = [
  { id: "eng", label: "Engineering", children: [{ id: "web", label: "Web" }, { id: "mobile", label: "Mobile" }, { id: "platform", label: "Platform", children: [{ id: "infra", label: "Infrastructure" }, { id: "data", label: "Data" }, { id: "security", label: "Security" }] }] },
  { id: "design", label: "Design", children: [{ id: "product", label: "Product design" }, { id: "research", label: "Research" }, { id: "brand", label: "Brand" }] },
  { id: "gtm", label: "Go to market", children: [{ id: "sales", label: "Sales" }, { id: "marketing", label: "Marketing" }, { id: "support", label: "Support" }] },
]

const REGIONS: readonly Entry[] = [
  { id: "americas", label: "Americas", hasChildren: true },
  { id: "emea", label: "EMEA", hasChildren: true },
  { id: "apac", label: "APAC", hasChildren: true },
]

const OFFICES: Readonly<Record<string, readonly string[]>> = {
  americas: ["New York", "Toronto", "São Paulo"],
  emea: ["London", "Berlin", "Lisbon", "Dubai"],
  apac: ["Tokyo", "Singapore", "Sydney", "Bengaluru"],
}

/** Loads a region's offices (~400ms), then each office's floors. */
async function loadPlace(item: Entry): Promise<Entry[]> {
  await wait(400)
  const offices = OFFICES[item.id]
  if (offices) return offices.map((o) => ({ id: \`\${item.id}/\${o}\`, label: o, hasChildren: true }))
  return [1, 2, 3].map((f) => ({ id: \`\${item.id}/floor-\${f}\`, label: \`Floor \${f}\` }))
}

/** Tree selects (one team, or many with checkboxes; one desk, or many floors, loaded on open) and cascaders (async columns; one that lets a branch be picked). */
export function TreesPickers() {
  const [team, setTeam] = useState<string[]>(["infra"])
  const [audience, setAudience] = useState<string[]>(["web", "mobile", "product"])
  const [desk, setDesk] = useState<string[]>([])
  const [scope, setScope] = useState<string[]>(["eng", "platform"])
  const [floor, setFloor] = useState<string[]>([])
  const [floors, setFloors] = useState<string[]>([])
  return (
    <div className="grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
      <div className="space-y-1">
        <div className="text-[12px] font-medium">Owning team</div>
        <TreeSelect aria-label="Owning team" items={ORG} value={team} onChange={setTeam} />
      </div>
      <div className="space-y-1">
        <div className="text-[12px] font-medium">Audience (many)</div>
        <TreeSelect aria-label="Audience" items={ORG} selectionMode="multiple" value={audience} onChange={setAudience} maxChips={2} />
      </div>
      <div className="space-y-1">
        <div className="text-[12px] font-medium">Desk (async columns)</div>
        <Cascader aria-label="Desk" items={REGIONS} loadChildren={loadPlace} value={desk} onChange={setDesk} placeholder="Region / office / floor" />
        <p className="truncate font-mono text-[11px] text-muted-foreground">{desk.join(" → ") || "—"}</p>
      </div>
      <div className="space-y-1">
        <div className="text-[12px] font-medium">Scope (any level, hover opens)</div>
        <Cascader aria-label="Scope" items={ORG} changeOnSelect expandOnHover value={scope} onChange={setScope} />
      </div>
      <div className="space-y-1">
        <div className="text-[12px] font-medium">Floor (loaded on open)</div>
        <TreeSelect aria-label="Floor" items={REGIONS} loadChildren={loadPlace} value={floor} onChange={setFloor} placeholder="Pick a floor" />
      </div>
      <div className="space-y-1">
        <div className="text-[12px] font-medium">Floors (many, loaded on open)</div>
        <TreeSelect aria-label="Floors" items={REGIONS} loadChildren={loadPlace} selectionMode="multiple" value={floors} onChange={setFloors} maxChips={2} placeholder="Pick floors" />
        <p className="truncate font-mono text-[11px] text-muted-foreground">{floors.join(", ") || "—"}</p>
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>s(()=>import(`./trees-pickers-BO9k_jJh.js`),[]));function R(){return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(t,{title:`Trees`,children:`Trees with lazy children, filtering, multiple selection and tri-state checkboxes, and the two tree pickers.`}),(0,_.jsx)(m,{n:1,title:`File explorer`,blurb:"FileTree: folders load the first time they open; `/scripts` fails once to show Retry. Filter, Shift ranges, ⌘A, Enter opens a file. Drag rows into folders, or use the row's menu (Menu key or Shift+F10) and Move to…. F2 renames.",code:D,children:(0,_.jsx)(h,{testId:`trees-explorer`,children:(0,_.jsx)(v,{})})}),(0,_.jsx)(m,{n:2,title:`Permission checkboxes`,blurb:`Parents are checked, unchecked or mixed from their leaves; a disabled leaf never changes.`,code:A,children:(0,_.jsx)(h,{testId:`trees-permissions`,children:(0,_.jsx)(k,{})})}),(0,_.jsx)(m,{n:3,title:`Tree selects and cascaders`,blurb:`Single and multiple tree selects, two that load children on open; a cascader with async columns and one that lets any level be picked.`,code:L,children:(0,_.jsx)(h,{testId:`trees-pickers`,children:(0,_.jsx)(F,{})})})]})}export{R as component};