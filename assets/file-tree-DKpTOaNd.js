import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{u as n}from"./tree-view-CNlvzqCD.js";import{Ec as r,Uc as i,ri as a,zc as o}from"./index-BZuUy872.js";import{n as s,t as c}from"./file-tree-DhivafcL.js";var l=e({FileTreeCheckboxes:()=>p}),u=t(i(),1),d=o(),f=[`photos/2026/beach.jpg`,`photos/2026/hike.jpg`,`photos/2025/party.heic`,`videos/trailer.mov`,`notes/todo.md`,`notes/ideas.md`];function p(){let[e,t]=(0,u.useState)([`notes/todo.md`]);return(0,d.jsxs)(`div`,{className:`flex w-full max-w-sm flex-col gap-2`,children:[(0,d.jsx)(s,{"aria-label":`Folders to sync`,paths:f,checkboxes:!0,checked:e,onCheckedChange:t,defaultExpanded:[`photos`,`notes`],className:`rounded-lg border border-border p-1`}),(0,d.jsxs)(`p`,{className:`text-xs text-muted-foreground tabular-nums`,children:[e.length,` file`,e.length===1?``:`s`,` to sync`]})]})}var m=e({FileTreeDetails:()=>_}),h=e=>Date.parse(`${e}T12:00:00Z`),g=[{id:`reports`,label:`Reports`,kind:`folder`,path:`Reports`,children:[{id:`q3`,label:`Q3 summary.pdf`,kind:`file`,path:`Reports/Q3 summary.pdf`,size:482133,modified:h(`2026-10-02`)},{id:`q4`,label:`Q4 draft.docx`,kind:`file`,path:`Reports/Q4 draft.docx`,size:61440,modified:h(`2026-11-18`),hint:`Draft`},{id:`chart`,label:`revenue.png`,kind:`file`,path:`Reports/revenue.png`,size:1204224,mimeType:`image/png`,modified:h(`2026-11-01`)}]},{id:`export`,label:`export.csv`,kind:`file`,path:`export.csv`,size:9830400,modified:h(`2026-11-20`)},{id:`backup`,label:`backup.tar.gz`,kind:`file`,path:`backup.tar.gz`,size:2147483648,modified:h(`2026-09-30`)}];function _(){return(0,d.jsx)(s,{"aria-label":`Shared drive`,items:g,defaultExpanded:[`reports`],sort:(e,t)=>e.kind===t.kind?(t.size??0)-(e.size??0):e.kind===`folder`?-1:1,className:`w-full max-w-md rounded-lg border border-border p-1`})}var v=e({FileTreeDrag:()=>S}),y=(e,t)=>({id:e,label:e.split(`/`).pop()??e,kind:`folder`,path:e,children:t}),b=(e,t)=>({id:e,label:e.split(`/`).pop()??e,kind:`file`,path:e,size:t}),x=[y(`Documents`,[b(`Documents/contract.pdf`,248e3),b(`Documents/notes.md`,3100)]),y(`Photos`,[y(`Photos/2026`,[b(`Photos/2026/beach.jpg`,24e5)])]),y(`Archive`,[]),b(`report.pdf`,512e3),b(`budget.xlsx`,88e3),b(`song.mp3`,42e5)];function S(){let[e,t]=(0,u.useState)(x),[n,r]=(0,u.useState)(null);return(0,d.jsxs)(`div`,{className:`flex w-full max-w-sm flex-col gap-2`,children:[(0,d.jsx)(s,{"aria-label":`Drive`,items:e,draggable:!0,selectionMode:`multiple`,defaultExpanded:[`Documents`,`Photos`],onMove:(e,n)=>{t(e),r(n.ids.join(`, `))},className:`rounded-lg border border-border p-1`}),(0,d.jsx)(`p`,{className:`text-xs text-muted-foreground`,"aria-live":`polite`,children:n?`Moved ${n}`:`Drag a file into a folder, or use the row's menu.`})]})}var C=e({FileTreeFolderPicker:()=>T}),w=[`Documents/Invoices/2025/`,`Documents/Invoices/2026/`,`Documents/Contracts/`,`Documents/notes.txt`,`Photos/Holidays/`,`Photos/cat.jpg`,`Music/`];function T(){let[e,t]=(0,u.useState)([`Documents/Invoices/2026`]);return(0,d.jsxs)(`div`,{className:`flex w-full max-w-sm flex-col gap-2`,children:[(0,d.jsx)(s,{"aria-label":`Choose a folder`,paths:w,foldersOnly:!0,value:e,onChange:t,defaultExpanded:[`Documents`,`Documents/Invoices`],className:`rounded-lg border border-border p-1`}),(0,d.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`Save to: `,e[0]??`no folder chosen`]})]})}var E=e({FileTreeProject:()=>O}),D=[`README.md`,`package.json`,`src/main.tsx`,`src/app.tsx`,`src/routes/index.tsx`,`src/routes/settings.tsx`,`src/routes/page10.tsx`,`src/routes/page2.tsx`,`public/favicon.ico`,`public/hero.webp`,`docs/guide.pdf`,`docs/demo.mp4`,`release.zip`];function O(){let[e,t]=(0,u.useState)(null);return(0,d.jsxs)(`div`,{className:`flex w-full max-w-sm flex-col gap-2`,children:[(0,d.jsx)(s,{"aria-label":`Project`,paths:D,defaultExpanded:[`src`,`src/routes`],onOpenFile:t,className:`rounded-lg border border-border p-1`}),(0,d.jsx)(`p`,{className:`flex items-center gap-1.5 text-xs text-muted-foreground`,"aria-live":`polite`,children:e?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c,{node:e,expanded:!1}),`Opened ${e.path}`]}):`Enter or double-click a file to open it.`})]})}var k=e({FileTreeRename:()=>P}),A=(e,t)=>({id:e,label:e.split(`/`).pop()??e,kind:`folder`,path:e,children:t}),j=e=>({id:e,label:e.split(`/`).pop()??e,kind:`file`,path:e}),M=[A(`src`,[j(`src/app.tsx`),j(`src/main.tsx`),j(`src/styles.css`)]),j(`README.md`),j(`package.json`)];function N(e){return new Promise(t=>setTimeout(()=>t(e.toLowerCase().startsWith(`con.`)?`That name is reserved on Windows`:void 0),400))}function P(){let[e,t]=(0,u.useState)(M),[r,i]=(0,u.useState)([`src/app.tsx`]),o=(0,u.useRef)(null);return(0,d.jsxs)(`div`,{className:`flex w-full max-w-sm flex-col gap-2`,children:[(0,d.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,d.jsx)(a,{size:`sm`,variant:`outline`,disabled:r.length===0,onClick:()=>r[0]&&o.current?.startRename(r[0]),children:`Rename`}),(0,d.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`or F2 on a row`})]}),(0,d.jsx)(s,{"aria-label":`Workspace`,apiRef:o,items:e,value:r,onChange:i,defaultExpanded:[`src`],renamable:!0,onRename:async(e,r)=>{let i=await N(r);if(i)return i;t(t=>n(t,e.id,r))},className:`rounded-lg border border-border p-1`})]})}var F=`import { useState } from "react"
import { FileTree } from "@kitora/collections/ui"

const PATHS = ["photos/2026/beach.jpg", "photos/2026/hike.jpg", "photos/2025/party.heic", "videos/trailer.mov", "notes/todo.md", "notes/ideas.md"]

// Every TreeView feature works on the file tree: here tri-state \`checkboxes\` pick what to sync.
// The checked value lists files only; a folder reads checked, unchecked or mixed from them.
export function FileTreeCheckboxes() {
  const [checked, setChecked] = useState<string[]>(["notes/todo.md"])
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <FileTree aria-label="Folders to sync" paths={PATHS} checkboxes checked={checked} onCheckedChange={setChecked} defaultExpanded={["photos", "notes"]} className="rounded-lg border border-border p-1" />
      <p className="text-xs text-muted-foreground tabular-nums">{checked.length} file{checked.length === 1 ? "" : "s"} to sync</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>r(()=>import(`./checkboxes-CxocCH1d.js`),[]));var I=`import { FileTree, type FileNode } from "@kitora/collections/ui"

/** A fixed date in milliseconds, so the demo looks the same on every run. */
const day = (iso: string) => Date.parse(\`\${iso}T12:00:00Z\`)

const ITEMS: readonly FileNode[] = [
  {
    id: "reports",
    label: "Reports",
    kind: "folder",
    path: "Reports",
    children: [
      { id: "q3", label: "Q3 summary.pdf", kind: "file", path: "Reports/Q3 summary.pdf", size: 482_133, modified: day("2026-10-02") },
      { id: "q4", label: "Q4 draft.docx", kind: "file", path: "Reports/Q4 draft.docx", size: 61_440, modified: day("2026-11-18"), hint: "Draft" },
      { id: "chart", label: "revenue.png", kind: "file", path: "Reports/revenue.png", size: 1_204_224, mimeType: "image/png", modified: day("2026-11-01") },
    ],
  },
  { id: "export", label: "export.csv", kind: "file", path: "export.csv", size: 9_830_400, modified: day("2026-11-20") },
  { id: "backup", label: "backup.tar.gz", kind: "file", path: "backup.tar.gz", size: 2_147_483_648, modified: day("2026-09-30") },
]

// Items of your own: \`size\` and \`modified\` make the row's hint (a node's own \`hint\` wins), and
// \`sort\` takes a comparator, here the largest file first with folders still on top.
export function FileTreeDetails() {
  return (
    <FileTree
      aria-label="Shared drive"
      items={ITEMS}
      defaultExpanded={["reports"]}
      sort={(a, b) => (a.kind !== b.kind ? (a.kind === "folder" ? -1 : 1) : (b.size ?? 0) - (a.size ?? 0))}
      className="w-full max-w-md rounded-lg border border-border p-1"
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>r(()=>import(`./details-BdOYv9ec.js`),[]));var L=`import { useState } from "react"
import { FileTree, type FileNode } from "@kitora/collections/ui"

const folder = (path: string, children: FileNode[]): FileNode => ({ id: path, label: path.split("/").pop() ?? path, kind: "folder", path, children })
const file = (path: string, size: number): FileNode => ({ id: path, label: path.split("/").pop() ?? path, kind: "file", path, size })

const START: FileNode[] = [
  folder("Documents", [file("Documents/contract.pdf", 248_000), file("Documents/notes.md", 3_100)]),
  folder("Photos", [folder("Photos/2026", [file("Photos/2026/beach.jpg", 2_400_000)])]),
  folder("Archive", []),
  file("report.pdf", 512_000),
  file("budget.xlsx", 88_000),
  file("song.mp3", 4_200_000),
]

// Drag files and folders between folders: drop on a folder's middle to put a row inside it, or
// between rows, where dragging right nests and left outdents. Only folders take children. Select
// several rows (Shift or Ctrl/Cmd+click) and drag one of them to move them all. Holding a drag
// over a closed folder opens it. From the keyboard, open the row's menu (the Menu key or
// Shift+F10) and pick "Move to…". The host keeps the tree: \`onMove\` hands back the new one, with
// every \`path\` updated and the ids kept.
export function FileTreeDrag() {
  const [items, setItems] = useState<readonly FileNode[]>(START)
  const [last, setLast] = useState<string | null>(null)
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <FileTree
        aria-label="Drive"
        items={items}
        draggable
        selectionMode="multiple"
        defaultExpanded={["Documents", "Photos"]}
        onMove={(next, op) => {
          setItems(next)
          setLast(op.ids.join(", "))
        }}
        className="rounded-lg border border-border p-1"
      />
      <p className="text-xs text-muted-foreground" aria-live="polite">
        {last ? \`Moved \${last}\` : "Drag a file into a folder, or use the row's menu."}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>r(()=>import(`./drag-BDdTGP1_.js`),[]));var R=`import { useState } from "react"
import { FileTree } from "@kitora/collections/ui"

const PATHS = ["Documents/Invoices/2025/", "Documents/Invoices/2026/", "Documents/Contracts/", "Documents/notes.txt", "Photos/Holidays/", "Photos/cat.jpg", "Music/"]

// \`foldersOnly\` leaves the files out: a "choose a folder" picker. The value is the folder's id,
// which \`paths\` makes its path.
export function FileTreeFolderPicker() {
  const [folder, setFolder] = useState<string[]>(["Documents/Invoices/2026"])
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <FileTree aria-label="Choose a folder" paths={PATHS} foldersOnly value={folder} onChange={setFolder} defaultExpanded={["Documents", "Documents/Invoices"]} className="rounded-lg border border-border p-1" />
      <p className="text-xs text-muted-foreground">Save to: {folder[0] ?? "no folder chosen"}</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>r(()=>import(`./folder-picker-D_JX2pG5.js`),[]));var z=`import { useState } from "react"
import { FileNodeIcon, FileTree, type FileNode } from "@kitora/collections/ui"

const PATHS = [
  "README.md",
  "package.json",
  "src/main.tsx",
  "src/app.tsx",
  "src/routes/index.tsx",
  "src/routes/settings.tsx",
  "src/routes/page10.tsx",
  "src/routes/page2.tsx",
  "public/favicon.ico",
  "public/hero.webp",
  "docs/guide.pdf",
  "docs/demo.mp4",
  "release.zip",
]

// A list of paths becomes folders and files: folders first, then names in natural order
// ("page2" before "page10"), the upload kit's icon per file kind. Enter or a double-click on a
// file calls \`onOpenFile\`; on a folder it opens or closes it. \`FileNodeIcon\` draws the same icon
// outside the tree, here beside the opened file.
export function FileTreeProject() {
  const [opened, setOpened] = useState<FileNode | null>(null)
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <FileTree aria-label="Project" paths={PATHS} defaultExpanded={["src", "src/routes"]} onOpenFile={setOpened} className="rounded-lg border border-border p-1" />
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground" aria-live="polite">
        {opened ? (
          <>
            <FileNodeIcon node={opened} expanded={false} />
            {\`Opened \${opened.path}\`}
          </>
        ) : (
          "Enter or double-click a file to open it."
        )}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>r(()=>import(`./project-Dh4H9rZe.js`),[]));var B=`import { useRef, useState } from "react"
import { Button } from "@kitora/ui/button"
import { renameFileNode } from "@kitora/collections/core"
import { FileTree, type FileNode, type TreeViewHandle } from "@kitora/collections/ui"

const folder = (path: string, children: FileNode[]): FileNode => ({ id: path, label: path.split("/").pop() ?? path, kind: "folder", path, children })
const file = (path: string): FileNode => ({ id: path, label: path.split("/").pop() ?? path, kind: "file", path })

const START: FileNode[] = [folder("src", [file("src/app.tsx"), file("src/main.tsx"), file("src/styles.css")]), file("README.md"), file("package.json")]

/** A pretend save that takes a moment, and refuses one name the way a server might. */
function save(name: string): Promise<void | string> {
  return new Promise((resolve) => setTimeout(() => resolve(name.toLowerCase().startsWith("con.") ? "That name is reserved on Windows" : undefined), 400))
}

// \`renamable\` turns on inline rename: F2 on the focused row, "Rename" in the row's menu (the Menu
// key, Shift+F10 or a right-click), or a button of your own through \`apiRef.startRename\`. A file
// opens with its stem selected. Enter or leaving the field saves, Escape cancels. An empty name,
// a "/" or a sibling's name is refused before \`onRename\` runs; \`onRename\` may return a message
// (or a promise of one) to refuse it too. \`renameFileNode\` gives the renamed tree, paths updated.
export function FileTreeRename() {
  const [items, setItems] = useState<readonly FileNode[]>(START)
  const [selected, setSelected] = useState<string[]>(["src/app.tsx"])
  const tree = useRef<TreeViewHandle>(null)
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" disabled={selected.length === 0} onClick={() => selected[0] && tree.current?.startRename(selected[0])}>
          Rename
        </Button>
        <span className="text-xs text-muted-foreground">or F2 on a row</span>
      </div>
      <FileTree
        aria-label="Workspace"
        apiRef={tree}
        items={items}
        value={selected}
        onChange={setSelected}
        defaultExpanded={["src"]}
        renamable
        onRename={async (node, name) => {
          const refused = await save(name)
          if (refused) return refused
          setItems((current) => renameFileNode(current, node.id, name))
        }}
        className="rounded-lg border border-border p-1"
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>r(()=>import(`./rename-CD15bocf.js`),[]));var V={"./demos/file-tree/checkboxes.tsx":l,"./demos/file-tree/details.tsx":m,"./demos/file-tree/drag.tsx":v,"./demos/file-tree/folder-picker.tsx":C,"./demos/file-tree/project.tsx":E,"./demos/file-tree/rename.tsx":k},H={"./demos/file-tree/checkboxes.tsx":F,"./demos/file-tree/details.tsx":I,"./demos/file-tree/drag.tsx":L,"./demos/file-tree/folder-picker.tsx":R,"./demos/file-tree/project.tsx":z,"./demos/file-tree/rename.tsx":B};export{V as modules,H as sources};