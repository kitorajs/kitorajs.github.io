import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./media-library-CarWyhfi.js";import{s as n}from"./kit-docs-DpYhPoxM.js";import{t as r}from"./image-plus-eHiIlo5T.js";import{n as i}from"./presets-HOFCkHuH.js";import{Bc as a,Cc as o,Ic as s,bi as c,ti as l}from"./index-q72zUtm9.js";import"./kit-gallery-Atvibnty.js";import{t as u}from"./example-B8EaWveR.js";import{n as d,t as f,u as p}from"./-kits.upload.shared-D8QVq52F.js";var m=e(a(),1),h=s();function g(){let[e]=p(),[n,a]=(0,m.useState)(!1),[o,s]=(0,m.useState)([]),u=e?.filter(e=>e.kind===`image`)??[];return(0,h.jsxs)(`div`,{className:`mx-auto flex max-w-2xl flex-col gap-2 rounded-lg border bg-card p-4 text-[13px] shadow-sm`,children:[(0,h.jsx)(`input`,{"aria-label":`Post title`,defaultValue:`Ten days on the coast`,className:`bg-transparent text-xl font-semibold tracking-tight outline-none`}),(0,h.jsx)(`p`,{className:`text-muted-foreground`,children:`We drove the whole coast road in ten days. These are the frames worth keeping.`}),o.length>0?(0,h.jsx)(`div`,{className:`grid grid-cols-3 gap-1.5`,children:o.map(e=>(0,h.jsxs)(`figure`,{className:`group relative overflow-hidden rounded-md`,children:[(0,h.jsx)(`img`,{src:e.thumbUrl??e.url,alt:e.name,className:`aspect-[4/3] w-full object-cover`}),(0,h.jsx)(`button`,{type:`button`,"aria-label":`Remove ${e.name}`,onClick:()=>s(t=>t.filter(t=>t.id!==e.id)),className:`absolute top-1 right-1 grid size-5 place-items-center rounded bg-black/60 text-white opacity-0 group-hover:opacity-100`,children:(0,h.jsx)(c,{className:`size-3`})})]},e.id))}):null,(0,h.jsx)(`div`,{children:(0,h.jsxs)(l,{size:`sm`,variant:`outline`,onClick:()=>a(!0),disabled:!e,children:[(0,h.jsx)(r,{}),` Insert media`]})}),(0,h.jsx)(i,{name:`insert-media`,title:`Insert media`,size:`xl`,open:n,onOpenChange:a,bodyClassName:`flex h-[min(80vh,640px)] flex-col p-0`,children:(0,h.jsx)(t,{items:u,folders:d,defaultPageSize:12,onPick:e=>{s(t=>[...t,...e.filter(e=>!t.some(t=>t.id===e.id))]),a(!1)},className:`min-h-0 flex-1 rounded-none border-0`})})]})}var _=`import { useState } from "react"
import { ImagePlus, X } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { Modal } from "@kitora/overlay"
import { MediaLibrary, type MediaItem } from "@kitora/upload"
import { DEMO_FOLDERS, useDemoLibrary } from "./fixtures"

/**
 * A post editor with a WordPress-style media picker: Insert media opens the library
 * in a dialog filtered to images; select one or many and Insert adds them to the post.
 */
export function MediaPickerPost() {
  const [items] = useDemoLibrary()
  const [open, setOpen] = useState(false)
  const [inserted, setInserted] = useState<readonly MediaItem[]>([])
  const images = items?.filter((it) => it.kind === "image") ?? []
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-2 rounded-lg border bg-card p-4 text-[13px] shadow-sm">
      <input aria-label="Post title" defaultValue="Ten days on the coast" className="bg-transparent text-xl font-semibold tracking-tight outline-none" />
      <p className="text-muted-foreground">We drove the whole coast road in ten days. These are the frames worth keeping.</p>
      {inserted.length > 0 ? (
        <div className="grid grid-cols-3 gap-1.5">
          {inserted.map((it) => (
            <figure key={it.id} className="group relative overflow-hidden rounded-md">
              <img src={it.thumbUrl ?? it.url} alt={it.name} className="aspect-[4/3] w-full object-cover" />
              <button type="button" aria-label={\`Remove \${it.name}\`} onClick={() => setInserted((cur) => cur.filter((x) => x.id !== it.id))} className="absolute top-1 right-1 grid size-5 place-items-center rounded bg-black/60 text-white opacity-0 group-hover:opacity-100">
                <X className="size-3" />
              </button>
            </figure>
          ))}
        </div>
      ) : null}
      <div>
        <Button size="sm" variant="outline" onClick={() => setOpen(true)} disabled={!items}>
          <ImagePlus /> Insert media
        </Button>
      </div>
      {/* The overlay kit's Modal, so the library's own preview opens on the same stack (Escape closes the top one). */}
      <Modal name="insert-media" title="Insert media" size="xl" open={open} onOpenChange={setOpen} bodyClassName="flex h-[min(80vh,640px)] flex-col p-0">
        <MediaLibrary
          items={images}
          folders={DEMO_FOLDERS}
          defaultPageSize={12}
          onPick={(picked) => {
            setInserted((cur) => [...cur, ...picked.filter((p) => !cur.some((c) => c.id === p.id))])
            setOpen(false)
          }}
          className="min-h-0 flex-1 rounded-none border-0"
        />
      </Modal>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>o(()=>import(`./picker-CtZv6O25.js`),[]));function v(){return(0,h.jsxs)(`div`,{children:[(0,h.jsx)(n,{title:`Media picker`,children:"`onPick` turns the library into a picker: the bulk bar gains an Insert button for the selection."}),(0,h.jsx)(u,{n:1,title:`Insert images into a post`,blurb:`Open Insert media, select a few photos (Shift-click a range), and Insert.`,code:_,children:(0,h.jsx)(f,{testId:`media-picker`,className:`p-3`,children:(0,h.jsx)(g,{})})})]})}export{v as component};