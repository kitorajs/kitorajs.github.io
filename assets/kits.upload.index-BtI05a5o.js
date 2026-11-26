import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./media-library-DaFfRpjV.js";import{n}from"./upload-queue-DbGdD0iS.js";import{s as r}from"./kit-docs-BUovISd0.js";import{Bc as i,Cc as a,Ic as o}from"./index-B9ukmIN1.js";import{i as s}from"./validate-BWHY_AUA.js";import{r as c}from"./adapter-DRlDAuEh.js";import{t as l}from"./use-upload-queue-DjvO6Sod.js";import"./kit-gallery-Bph7isB2.js";import{t as u}from"./example-BGnSQG2Y.js";import{n as d,t as f,u as p}from"./-kits.upload.shared-CuG2JfJM.js";var m=e(i(),1),h=o();function g(){let[e,r]=p(),[i,a]=(0,m.useState)(d),o=(0,m.useRef)(new Map),[u]=(0,m.useState)(()=>c({bytesPerSecond:1.8*1024*1024,failWhen:e=>e.includes(`fail`)})),f=l({adapter:u,concurrency:3,onComplete:e=>{let t=s({name:e.name,type:e.file.type}),n=e.result?.url,i={id:e.id,name:e.name,kind:t,size:e.size,folderId:o.current.get(e.id)??null,createdAt:Date.now(),url:n,thumbUrl:t===`image`?n:void 0};r(e=>[i,...e])}});return e?(0,h.jsx)(t,{items:e,folders:i,onUpload:(e,t)=>{for(let n of f.add(e))o.current.set(n,t)},onDelete:e=>r(t=>t.filter(t=>!e.includes(t.id))),onMove:(e,t)=>r(n=>n.map(n=>e.includes(n.id)?{...n,folderId:t}:n)),onCreateFolder:(e,t)=>a(n=>[...n,{id:`f-${Date.now()}`,name:e,parentId:t}]),uploads:f.items.length>0?(0,h.jsx)(n,{queue:f,maxHeight:150,className:`m-2 mb-0 shadow-sm`}):null,className:`h-full rounded-none border-0`}):(0,h.jsx)(`div`,{className:`grid h-full place-items-center text-[12px] text-muted-foreground`,children:`Painting the demo library…`})}var _=`import { useRef, useState } from "react"
import { MediaLibrary, UploadQueueList, createFakeAdapter, fileKind, useUploadQueue, type MediaItem } from "@kitora/upload"
import { DEMO_FOLDERS, useDemoLibrary } from "./fixtures"

/**
 * A Drive-style file manager: drop files on the library (or use Upload) and they go
 * through the queue into the folder that was open; each one lands in the grid the
 * moment it finishes. Files named "*fail*" fail, to show Retry.
 */
export function FileManager() {
  const [items, update] = useDemoLibrary()
  const [folders, setFolders] = useState(DEMO_FOLDERS)
  // Which folder each queued upload is headed for.
  const destination = useRef(new Map<string, string | null>())
  const [adapter] = useState(() => createFakeAdapter({ bytesPerSecond: 1.8 * 1024 * 1024, failWhen: (name) => name.includes("fail") }))
  const queue = useUploadQueue({
    adapter,
    concurrency: 3,
    onComplete: (upload) => {
      const kind = fileKind({ name: upload.name, type: upload.file.type })
      const url = upload.result?.url
      const item: MediaItem = { id: upload.id, name: upload.name, kind, size: upload.size, folderId: destination.current.get(upload.id) ?? null, createdAt: Date.now(), url, thumbUrl: kind === "image" ? url : undefined }
      update((all) => [item, ...all])
    },
  })

  if (!items) return <div className="grid h-full place-items-center text-[12px] text-muted-foreground">Painting the demo library…</div>
  return (
    <MediaLibrary
      items={items}
      folders={folders}
      onUpload={(files, folderId) => {
        for (const id of queue.add(files)) destination.current.set(id, folderId)
      }}
      onDelete={(ids) => update((all) => all.filter((it) => !ids.includes(it.id)))}
      onMove={(ids, folderId) => update((all) => all.map((it) => (ids.includes(it.id) ? { ...it, folderId } : it)))}
      onCreateFolder={(name, parentId) => setFolders((fs) => [...fs, { id: \`f-\${Date.now()}\`, name, parentId }])}
      uploads={queue.items.length > 0 ? <UploadQueueList queue={queue} maxHeight={150} className="m-2 mb-0 shadow-sm" /> : null}
      className="h-full rounded-none border-0"
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>a(()=>import(`./file-manager-C1dVXIYn.js`),[]));var v=[{name:`core`,what:`@kitora/upload/core. Formatting and the UploadFormatters seam; validation (accept grammar, size, count) with coded reasons; the UploadAdapter contract with chunked/resumable (pluggable ChunkTransport and ResumeStore) and fake adapters; the queue store (concurrency, cancel, retry, rates, summary); crop geometry; the media model (query, paging, selection, folders). No DOM, no React.`},{name:`dom`,what:`@kitora/upload/dom. Browser behaviour with no React: files from drops (folders expanded) and the clipboard, the drag verdict, the XHR adapter, waveform peaks, crop export to a Blob, downloads.`},{name:`react`,what:`@kitora/upload/react. useFilePicker (the one file picker: accept, size and count rules, folders with directory, the camera with capture, a form post with name), useDropzone on it (controlled or uncontrolled refusals), useUploadQueue, useControllableState, UploadFormatProvider / useUploadFormatters, useObjectUrl, useMediaElement. No styling.`},{name:`ui`,what:`@kitora/upload/ui. Compound parts Dropzone.Root / Area / Icon / Title / Browse / Hint / Rejections and UploadQueueView.Root / Header / Title / Summary / Actions / Progress / Items / Row, with the Dropzone and UploadQueueList presets built from them; FileTrigger (any button opens the picker, no drop area); ImageCropper (controlled aspect), AvatarUpload, MediaLibrary (controlled folder, selection and view), Pager, viewers and players. className plus classNames per part, data-* state attributes.`}];function y(){return(0,h.jsxs)(`div`,{children:[(0,h.jsx)(r,{title:`Upload kit`,children:`Drop files onto the library (or press Upload): they upload three at a time into the folder that is open and appear in the grid as each one finishes. Select with click, ⌘/Ctrl and Shift, or the keyboard; move, download or delete in bulk; double-click or Enter to preview images, PDFs, audio and video. Under \`dir="rtl"\` the kit mirrors, while a video's timeline and an image's pan keys stay physical (Basics: the media library has a right-to-left demo). Under a design language other than Kitora's, its panels and tiles follow the language's cards and its bars the language's progress bars.`}),(0,h.jsx)(u,{n:1,title:`A file manager`,blurb:"MediaLibrary for browsing, useUploadQueue on a fake adapter for the uploads, UploadQueueList in the library's `uploads` slot.",code:_,children:(0,h.jsx)(f,{testId:`file-manager`,height:620,children:(0,h.jsx)(g,{})})}),(0,h.jsx)(u,{n:2,title:`Layers`,blurb:"One package, `@kitora/upload`: each layer imports only the ones below it and is its own entry, and the barrel re-exports all four.",children:(0,h.jsx)(`table`,{className:`w-full text-[13px]`,children:(0,h.jsx)(`tbody`,{children:v.map(e=>(0,h.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,h.jsx)(`td`,{className:`py-1.5 pr-3 align-top font-mono text-[12px]`,children:e.name}),(0,h.jsx)(`td`,{className:`py-1.5 text-muted-foreground`,children:e.what})]},e.name))})})})]})}export{y as component};