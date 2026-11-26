import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./media-library-C1EupN41.js";import{s as n}from"./kit-docs-CvNs0WqT.js";import{Bc as r,Cc as i,Ic as a}from"./index-9y5uwRd3.js";import{i as o}from"./validate-BWHY_AUA.js";import"./kit-gallery-B-Yr9fP4.js";import{t as s}from"./example-CZLJLtIC.js";import{n as c,t as l,u}from"./-kits.upload.shared-BT8Kx0dl.js";var d=e(r(),1),f=a();function p(){let[e,n]=u(),[r,i]=(0,d.useState)(c);return e?(0,f.jsx)(t,{items:e,folders:r,onDelete:e=>n(t=>t.filter(t=>!e.includes(t.id))),onMove:(e,t)=>n(n=>n.map(n=>e.includes(n.id)?{...n,folderId:t}:n)),onCreateFolder:(e,t)=>i(n=>[...n,{id:`f-${Date.now()}`,name:e,parentId:t}]),onUpload:(e,t)=>n(n=>[...n,...e.map((e,n)=>{let r=URL.createObjectURL(e),i=o(e);return{id:`up-${Date.now()}-${n}`,name:e.name,kind:i,size:e.size,folderId:t,createdAt:Date.now(),url:r,thumbUrl:i===`image`?r:void 0}})]),className:`h-full rounded-none border-0`}):(0,f.jsx)(`div`,{className:`grid h-full place-items-center text-[12px] text-muted-foreground`,children:`Painting the demo library…`})}var m=`import { useState } from "react"
import { MediaLibrary, fileKind, type MediaItem } from "@kitora/upload"
import { DEMO_FOLDERS, useDemoLibrary } from "../fixtures"

/** Folders, search, type filter, sort, grid or list, selection, bulk actions and a preview, over items the host owns. */
export function BasicLibrary() {
  const [items, update] = useDemoLibrary()
  const [folders, setFolders] = useState(DEMO_FOLDERS)
  if (!items) return <div className="grid h-full place-items-center text-[12px] text-muted-foreground">Painting the demo library…</div>
  return (
    <MediaLibrary
      items={items}
      folders={folders}
      onDelete={(ids) => update((all) => all.filter((it) => !ids.includes(it.id)))}
      onMove={(ids, folderId) => update((all) => all.map((it) => (ids.includes(it.id) ? { ...it, folderId } : it)))}
      onCreateFolder={(name, parentId) => setFolders((fs) => [...fs, { id: \`f-\${Date.now()}\`, name, parentId }])}
      onUpload={(files, folderId) => update((all) => [...all, ...files.map((f, i): MediaItem => {
        const url = URL.createObjectURL(f)
        const kind = fileKind(f)
        return { id: \`up-\${Date.now()}-\${i}\`, name: f.name, kind, size: f.size, folderId, createdAt: Date.now(), url, thumbUrl: kind === "image" ? url : undefined }
      })])}
      className="h-full rounded-none border-0"
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(m,()=>i(()=>import(`./library-SkSRZ2S-.js`),[]));function h(){let[e]=u(),[n]=(0,d.useState)(c);return e?(0,f.jsx)(`div`,{dir:`rtl`,className:`h-full`,children:(0,f.jsx)(t,{items:e,folders:n,className:`h-full rounded-none border-0`})}):(0,f.jsx)(`div`,{className:`grid h-full place-items-center text-[12px] text-muted-foreground`,children:`Painting the demo library…`})}var g=`import { useState } from "react"
import { MediaLibrary } from "@kitora/upload"
import { DEMO_FOLDERS, useDemoLibrary } from "../fixtures"

/**
 * The same library inside \`dir="rtl"\`: the folder pane sits at the inline start, folders indent from it, the toolbar
 * and the list's columns mirror, and the pager's and the preview's chevrons point the reading way. A video's timeline
 * still runs left to right, and its ← / → still seek back and forward.
 */
export function RightToLeftLibrary() {
  const [items] = useDemoLibrary()
  const [folders] = useState(DEMO_FOLDERS)
  if (!items) return <div className="grid h-full place-items-center text-[12px] text-muted-foreground">Painting the demo library…</div>
  return (
    <div dir="rtl" className="h-full">
      <MediaLibrary items={items} folders={folders} className="h-full rounded-none border-0" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>i(()=>import(`./library-rtl-BtfFEhIQ.js`),[]));function _(){return(0,f.jsxs)(`div`,{children:[(0,f.jsx)(n,{title:`Basics: the media library`,children:`Items and folders come in as props; delete, move, new folder and upload go out as callbacks, so the library sits on any backend.`}),(0,f.jsx)(s,{n:1,title:`A media library`,blurb:`Click, ⌘/Ctrl-click and Shift-click to select (or arrows, Space, Shift+arrows, ⌘A); Enter or double-click previews; Delete asks first. Drop files on it to upload into the open folder.`,code:m,children:(0,f.jsx)(l,{testId:`basic-library`,height:540,children:(0,f.jsx)(p,{})})}),(0,f.jsx)(s,{n:2,title:`Right to left`,blurb:`Inside \`dir="rtl"\` the library mirrors: folder pane, indents, toolbar, list columns and the chevrons. A video's timeline and an image's pan keys stay physical.`,code:g,children:(0,f.jsx)(l,{testId:`basic-library-rtl`,height:540,children:(0,f.jsx)(h,{})})})]})}export{_ as component};