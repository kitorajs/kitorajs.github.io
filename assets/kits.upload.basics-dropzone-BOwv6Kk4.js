import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{a as t,i as n,o as r,r as i,s as a}from"./upload-queue-CMSWNW7u.js";import{s as o}from"./kit-docs-CvNs0WqT.js";import{t as s}from"./file-text-jZN1FxYo.js";import{t as c}from"./file-up-D3zlqmS5.js";import{Bc as l,Cc as u,Ic as d,bi as f,ti as p}from"./index-9y5uwRd3.js";import{c as m}from"./validate-BWHY_AUA.js";import{r as h}from"./adapter-DRlDAuEh.js";import{t as g}from"./use-upload-queue-mceTv7kT.js";import{t as _}from"./use-dropzone-BVIgl2pg.js";import{t as v}from"./use-object-url-DFV3K1f5.js";import{a as y,c as b,i as x,l as S,n as C,o as w,r as T,s as E,t as D}from"./dropzone-DXhfXCx3.js";import{t as O}from"./file-trigger-DU6LZesd.js";import"./kit-gallery-B-Yr9fP4.js";import{t as k}from"./example-CZLJLtIC.js";import{a as A,c as j,l as M,t as N}from"./-kits.upload.shared-BT8Kx0dl.js";var P=d(),F=h({bytesPerSecond:3*1024*1024});function I(){let e=g({adapter:F,concurrency:2}),t=_({accept:`image/*,.pdf`,maxSize:20*1024*1024,onDrop:t=>e.add(t)});return(0,P.jsxs)(`div`,{className:`flex flex-col gap-2 p-3`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,P.jsx)(`span`,{className:`text-[13px] font-medium`,children:`Attachments`}),(0,P.jsxs)(p,{size:`xs`,variant:`outline`,className:`ml-auto`,onClick:t.open,children:[(0,P.jsx)(c,{}),` Browse…`]})]}),(0,P.jsxs)(D.Root,{zone:t,accept:`image/*,.pdf`,maxSize:20*1024*1024,size:`compact`,children:[(0,P.jsxs)(D.Area,{label:`Attach images or PDFs`,className:`rounded-full border-solid`,children:[(0,P.jsx)(D.Icon,{}),(0,P.jsx)(D.Title,{accepting:`Release to attach`,rejecting:`Images and PDFs only`,children:`Drop images or PDFs`}),(0,P.jsx)(D.Hint,{})]}),(0,P.jsx)(D.Rejections,{renderReason:e=>e.errors.map(e=>e.code===`file-too-large`?`over 20 MB`:e.code===`file-invalid-type`?`not an image or PDF`:e.message).join(`, `)})]}),e.items.length>0?(0,P.jsxs)(a.Root,{queue:e,title:`Attachments`,children:[(0,P.jsxs)(a.Header,{className:`flex items-center gap-2 bg-muted/40`,children:[(0,P.jsx)(a.Summary,{}),(0,P.jsx)(a.Actions,{})]}),(0,P.jsx)(a.Items,{maxHeight:200,children:e=>(0,P.jsxs)(`li`,{"data-status":e.status,className:`flex items-center gap-2 px-2.5 py-1 text-[13px]`,children:[(0,P.jsx)(`span`,{className:`truncate`,children:e.name}),(0,P.jsx)(`span`,{className:`ml-auto text-[12px] text-muted-foreground tabular-nums`,children:e.status===`done`?`✓`:`${Math.round(e.loaded/Math.max(1,e.size)*100)}%`})]},e.id)})]}):null]})}var L=`import { FileUp } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { Dropzone, UploadQueueView, createFakeAdapter, useDropzone, useUploadQueue } from "@kitora/upload"

/** One adapter for the demo: simulated progress at 3 MB/s. */
const adapter = createFakeAdapter({ bytesPerSecond: 3 * 1024 * 1024 })

/**
 * The \`Dropzone\` and \`UploadQueueList\` presets rebuilt from their public parts, in a different
 * layout: the zone is a slim bar with the hint on the right, and each queue row is your own markup.
 * \`Dropzone.Root\` takes the hook's result (\`zone\`), so the Browse button above the parts can open it.
 */
export function ComposeYourOwn() {
  const queue = useUploadQueue({ adapter, concurrency: 2 })
  const zone = useDropzone({ accept: "image/*,.pdf", maxSize: 20 * 1024 * 1024, onDrop: (files) => queue.add(files) })
  return (
    <div className="flex flex-col gap-2 p-3">
      <div className="flex items-center gap-2">
        <span className="text-[13px] font-medium">Attachments</span>
        <Button size="xs" variant="outline" className="ml-auto" onClick={zone.open}>
          <FileUp /> Browse…
        </Button>
      </div>
      <Dropzone.Root zone={zone} accept="image/*,.pdf" maxSize={20 * 1024 * 1024} size="compact">
        <Dropzone.Area label="Attach images or PDFs" className="rounded-full border-solid">
          <Dropzone.Icon />
          <Dropzone.Title accepting="Release to attach" rejecting="Images and PDFs only">Drop images or PDFs</Dropzone.Title>
          <Dropzone.Hint />
        </Dropzone.Area>
        <Dropzone.Rejections renderReason={(r) => r.errors.map((e) => (e.code === "file-too-large" ? "over 20 MB" : e.code === "file-invalid-type" ? "not an image or PDF" : e.message)).join(", ")} />
      </Dropzone.Root>
      {queue.items.length > 0 ? (
        <UploadQueueView.Root queue={queue} title="Attachments">
          <UploadQueueView.Header className="flex items-center gap-2 bg-muted/40">
            <UploadQueueView.Summary />
            <UploadQueueView.Actions />
          </UploadQueueView.Header>
          <UploadQueueView.Items maxHeight={200}>
            {(item) => (
              <li key={item.id} data-status={item.status} className="flex items-center gap-2 px-2.5 py-1 text-[13px]">
                <span className="truncate">{item.name}</span>
                <span className="ml-auto text-[12px] text-muted-foreground tabular-nums">{item.status === "done" ? "✓" : \`\${Math.round((item.loaded / Math.max(1, item.size)) * 100)}%\`}</span>
              </li>
            )}
          </UploadQueueView.Items>
        </UploadQueueView.Root>
      ) : null}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>u(()=>import(`./compose-7F_IiiVD.js`),[]));var R=e(l(),1);function z(){let[e,t]=(0,R.useState)();return(0,P.jsxs)(`div`,{className:`flex max-w-md flex-col gap-1 p-3 text-[13px]`,children:[(0,P.jsx)(`span`,{className:`font-medium`,children:`Résumé`}),e?(0,P.jsxs)(`div`,{className:`flex h-9 items-center gap-2 rounded-lg border bg-background px-3`,children:[(0,P.jsx)(s,{className:`size-4 text-primary`,"aria-hidden":!0}),(0,P.jsx)(`span`,{className:`truncate`,children:e.name}),(0,P.jsx)(`span`,{className:`text-[12px] text-muted-foreground tabular-nums`,children:m(e.size)}),(0,P.jsx)(`button`,{type:`button`,"aria-label":`Remove file`,onClick:()=>t(void 0),className:`ml-auto grid size-6 place-items-center rounded text-muted-foreground hover:bg-muted hover:text-foreground`,children:(0,P.jsx)(f,{className:`size-3.5`})})]}):(0,P.jsx)(D,{size:`compact`,multiple:!1,accept:`.pdf,.doc,.docx`,maxSize:5*1024*1024,title:`Drop your résumé`,label:`Upload résumé`,onDrop:e=>t(e[0])})]})}var B=`import { useState } from "react"
import { FileText, X } from "lucide-react"
import { Dropzone, formatBytes } from "@kitora/upload"

/** A one-row, single-file field for forms: the zone becomes a chip once a file is chosen. */
export function BasicCompactField() {
  const [file, setFile] = useState<File>()
  return (
    <div className="flex max-w-md flex-col gap-1 p-3 text-[13px]">
      <span className="font-medium">Résumé</span>
      {file ? (
        <div className="flex h-9 items-center gap-2 rounded-lg border bg-background px-3">
          <FileText className="size-4 text-primary" aria-hidden />
          <span className="truncate">{file.name}</span>
          <span className="text-[12px] text-muted-foreground tabular-nums">{formatBytes(file.size)}</span>
          <button type="button" aria-label="Remove file" onClick={() => setFile(undefined)} className="ml-auto grid size-6 place-items-center rounded text-muted-foreground hover:bg-muted hover:text-foreground">
            <X className="size-3.5" />
          </button>
        </div>
      ) : (
        <Dropzone size="compact" multiple={false} accept=".pdf,.doc,.docx" maxSize={5 * 1024 * 1024} title="Drop your résumé" label="Upload résumé" onDrop={(files) => setFile(files[0])} />
      )}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>u(()=>import(`./compact-SLbQDi-2.js`),[]));function V(){let[e,t]=(0,R.useState)([]);return(0,P.jsxs)(`div`,{className:`flex flex-col gap-2 p-3`,children:[(0,P.jsx)(D,{onDrop:e=>t(t=>[...t,...e])}),e.length>0?(0,P.jsx)(`ul`,{className:`text-[13px] tabular-nums`,children:e.map((e,t)=>(0,P.jsxs)(`li`,{className:`flex justify-between border-b py-1 last:border-b-0`,children:[(0,P.jsx)(`span`,{className:`truncate`,children:e.name}),(0,P.jsx)(`span`,{className:`text-muted-foreground`,children:m(e.size)})]},`${e.name}-${t}`))}):null]})}var H=`import { useState } from "react"
import { Dropzone, formatBytes } from "@kitora/upload"

/** The smallest dropzone: drop, click or press Enter to browse, or paste. Accepted files come back in \`onDrop\`. */
export function BasicDropzone() {
  const [files, setFiles] = useState<readonly File[]>([])
  return (
    <div className="flex flex-col gap-2 p-3">
      <Dropzone onDrop={(accepted) => setFiles((cur) => [...cur, ...accepted])} />
      {files.length > 0 ? (
        <ul className="text-[13px] tabular-nums">
          {files.map((f, i) => (
            <li key={\`\${f.name}-\${i}\`} className="flex justify-between border-b py-1 last:border-b-0">
              <span className="truncate">{f.name}</span>
              <span className="text-muted-foreground">{formatBytes(f.size)}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>u(()=>import(`./dropzone-D4YzXs4e.js`),[]));function U({file:e}){let t=v(e);return t?(0,P.jsx)(`img`,{src:t,alt:e.name,title:e.name,className:`size-16 rounded-md object-cover ring-1 ring-border`}):null}function W(){let[e,t]=(0,R.useState)([]);return(0,P.jsxs)(`div`,{className:`flex flex-col gap-2 p-3`,children:[(0,P.jsx)(D,{accept:`image/*`,paste:`document`,title:`Paste an image anywhere on this page`,onDrop:e=>t(t=>[...e,...t].slice(0,8))}),e.length>0?(0,P.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:e.map((e,t)=>(0,P.jsx)(U,{file:e},`${e.name}-${t}`))}):null]})}var G=`import { useState } from "react"
import { Dropzone, useObjectUrl } from "@kitora/upload"

function Thumb({ file }: { readonly file: File }) {
  const url = useObjectUrl(file)
  return url ? <img src={url} alt={file.name} title={file.name} className="size-16 rounded-md object-cover ring-1 ring-border" /> : null
}

/** \`paste="document"\`: copy a screenshot or an image anywhere and paste it on the page (outside text fields). */
export function BasicPaste() {
  const [images, setImages] = useState<readonly File[]>([])
  return (
    <div className="flex flex-col gap-2 p-3">
      <Dropzone accept="image/*" paste="document" title="Paste an image anywhere on this page" onDrop={(files) => setImages((cur) => [...files, ...cur].slice(0, 8))} />
      {images.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {images.map((f, i) => (
            <Thumb key={\`\${f.name}-\${i}\`} file={f} />
          ))}
        </div>
      ) : null}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>u(()=>import(`./paste-Bk7XcR2j.js`),[]));function K(){let e=(0,R.useRef)(null),[t,n]=(0,R.useState)([]),r=t=>j(e.current?.querySelector(`[role=button]`)??null,t);return(0,P.jsxs)(`div`,{ref:e,className:`flex flex-col gap-2 p-3`,children:[(0,P.jsx)(D,{accept:`image/*,.pdf`,maxSize:2*1024*1024,minSize:1,maxFiles:3,held:t.length,onDrop:e=>n(t=>[...t,...e.map(e=>e.name)])}),(0,P.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1`,children:[(0,P.jsx)(`span`,{className:`text-[12px] text-muted-foreground`,children:`Try:`}),(0,P.jsx)(p,{size:`xs`,variant:`outline`,onClick:()=>r([A(3,`beach.jpg`,800,533)]),children:`A photo`}),(0,P.jsx)(p,{size:`xs`,variant:`outline`,onClick:()=>r([M(`raw-scan.png`,5*1024*1024,`image/png`)]),children:`A 5 MB image`}),(0,P.jsx)(p,{size:`xs`,variant:`outline`,onClick:()=>r([M(`setup.exe`,4e4,`application/x-msdownload`)]),children:`An .exe`}),(0,P.jsx)(p,{size:`xs`,variant:`outline`,onClick:()=>r([M(`empty.pdf`,0,`application/pdf`),M(`a.pdf`,1e3,`application/pdf`),M(`b.pdf`,1e3,`application/pdf`),M(`c.pdf`,1e3,`application/pdf`)]),children:`Four PDFs`}),t.length>0?(0,P.jsxs)(p,{size:`xs`,variant:`ghost`,onClick:()=>n([]),children:[`Reset (`,t.length,` held)`]}):null]})]})}var q=`import { useRef, useState } from "react"
import { Button } from "@kitora/ui/button"
import { Dropzone } from "@kitora/upload"
import { demoImageFile, dropFiles, sizedFile } from "../fixtures"

/** Rules refuse files with a reason each: type, size and count. The buttons drop real files on the zone. */
export function BasicValidation() {
  const zone = useRef<HTMLDivElement>(null)
  const [accepted, setAccepted] = useState<readonly string[]>([])
  const drop = (files: readonly File[]) => dropFiles(zone.current?.querySelector("[role=button]") ?? null, files)
  return (
    <div ref={zone} className="flex flex-col gap-2 p-3">
      <Dropzone
        accept="image/*,.pdf"
        maxSize={2 * 1024 * 1024}
        minSize={1}
        maxFiles={3}
        held={accepted.length}
        onDrop={(files) => setAccepted((cur) => [...cur, ...files.map((f) => f.name)])}
      />
      <div className="flex flex-wrap items-center gap-1">
        <span className="text-[12px] text-muted-foreground">Try:</span>
        <Button size="xs" variant="outline" onClick={() => drop([demoImageFile(3, "beach.jpg", 800, 533)])}>A photo</Button>
        <Button size="xs" variant="outline" onClick={() => drop([sizedFile("raw-scan.png", 5 * 1024 * 1024, "image/png")])}>A 5 MB image</Button>
        <Button size="xs" variant="outline" onClick={() => drop([sizedFile("setup.exe", 40_000, "application/x-msdownload")])}>An .exe</Button>
        <Button size="xs" variant="outline" onClick={() => drop([sizedFile("empty.pdf", 0, "application/pdf"), sizedFile("a.pdf", 1000, "application/pdf"), sizedFile("b.pdf", 1000, "application/pdf"), sizedFile("c.pdf", 1000, "application/pdf")])}>Four PDFs</Button>
        {accepted.length > 0 ? <Button size="xs" variant="ghost" onClick={() => setAccepted([])}>Reset ({accepted.length} held)</Button> : null}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>u(()=>import(`./validation-CUYlPMt5.js`),[]));function J(){let[e,t]=(0,R.useState)([]),[n,r]=(0,R.useState)([]);return(0,P.jsxs)(`div`,{className:`flex flex-col items-start gap-2 p-3`,children:[(0,P.jsx)(O,{accept:`image/*,.pdf`,maxSize:5*1024*1024,onSelect:(e,n)=>{t(t=>[...t,...e]),r(n)},children:(0,P.jsx)(p,{type:`button`,variant:`outline`,children:`Choose files`})}),(0,P.jsx)(S,{rejections:n,onDismiss:()=>r([]),className:`w-full`}),e.length>0?(0,P.jsx)(`ul`,{className:`w-full text-[13px] tabular-nums`,children:e.map((e,t)=>(0,P.jsxs)(`li`,{className:`flex justify-between border-b py-1 last:border-b-0`,children:[(0,P.jsx)(`span`,{className:`truncate`,children:e.name}),(0,P.jsx)(`span`,{className:`text-muted-foreground`,children:m(e.size)})]},`${e.name}-${t}`))}):null]})}var Y=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { FileTrigger, RejectionList, formatBytes, type Rejection } from "@kitora/upload"

/** Just a button: the same rules and the same picker as the dropzone, with no drop area. */
export function BasicFileTrigger() {
  const [files, setFiles] = useState<readonly File[]>([])
  const [rejected, setRejected] = useState<readonly Rejection<File>[]>([])
  return (
    <div className="flex flex-col items-start gap-2 p-3">
      <FileTrigger
        accept="image/*,.pdf"
        maxSize={5 * 1024 * 1024}
        onSelect={(accepted, refused) => {
          setFiles((cur) => [...cur, ...accepted])
          setRejected(refused)
        }}
      >
        <Button type="button" variant="outline">
          Choose files
        </Button>
      </FileTrigger>
      <RejectionList rejections={rejected} onDismiss={() => setRejected([])} className="w-full" />
      {files.length > 0 ? (
        <ul className="w-full text-[13px] tabular-nums">
          {files.map((f, i) => (
            <li key={\`\${f.name}-\${i}\`} className="flex justify-between border-b py-1 last:border-b-0">
              <span className="truncate">{f.name}</span>
              <span className="text-muted-foreground">{formatBytes(f.size)}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>u(()=>import(`./file-trigger-CmCOmEZ_.js`),[]));var X=h({bytesPerSecond:1.5*1024*1024}),Z=10*1024*1024;function Q(){let e=g({adapter:X,concurrency:1});return(0,P.jsxs)(`div`,{className:`flex flex-col gap-2 p-3`,children:[(0,P.jsxs)(E,{accept:`image/*`,maxSize:Z,onDrop:t=>e.add(t),children:[(0,P.jsxs)(C,{label:`Add photos`,children:[(0,P.jsx)(y,{}),(0,P.jsx)(b,{accepting:`Release to add`,rejecting:`Photos only`,children:`Drag photos here`}),(0,P.jsx)(T,{}),(0,P.jsx)(x,{})]}),(0,P.jsx)(w,{})]}),(0,P.jsx)(`button`,{type:`button`,className:`self-start text-[12px] text-primary underline-offset-2 hover:underline`,onClick:()=>e.add([M(`beach.jpg`,32e5,`image/jpeg`),M(`forest.png`,21e5,`image/png`)]),children:`Add two sample photos`}),e.items.length>0?(0,P.jsxs)(n,{queue:e,title:`Photos`,children:[(0,P.jsx)(`div`,{className:`flex items-center gap-2 border-b px-2.5 py-1.5`,children:(0,P.jsx)(r,{})}),(0,P.jsx)(i,{}),(0,P.jsx)(`ul`,{className:`divide-y`,children:e.items.map(n=>(0,P.jsx)(t,{item:n,onCancel:t=>e.cancel(t),onRetry:t=>e.retry(t),onRemove:t=>e.remove(t)},n.id))})]}):null]})}var $=`import { DropzoneArea, DropzoneBrowse, DropzoneHint, DropzoneIcon, DropzoneRejections, DropzoneRoot, DropzoneTitle, UploadQueueProgress, UploadQueueRoot, UploadQueueRow, UploadQueueTitle, createFakeAdapter, useUploadQueue } from "@kitora/upload"
import { sizedFile } from "../fixtures"

const adapter = createFakeAdapter({ bytesPerSecond: 1.5 * 1024 * 1024 })
const MAX = 10 * 1024 * 1024

/**
 * The dropzone and queue parts imported by their own names: \`DropzoneRoot\`, \`DropzoneArea\`, \`DropzoneIcon\`,
 * \`DropzoneTitle\`, \`DropzoneBrowse\`, \`DropzoneHint\` and \`DropzoneRejections\`; then
 * \`UploadQueueRoot\`, \`UploadQueueTitle\` and \`UploadQueueProgress\`, each file drawn by the preset's \`UploadQueueRow\`.
 */
export function NamedParts() {
  const queue = useUploadQueue({ adapter, concurrency: 1 })
  return (
    <div className="flex flex-col gap-2 p-3">
      <DropzoneRoot accept="image/*" maxSize={MAX} onDrop={(files) => queue.add(files)}>
        <DropzoneArea label="Add photos">
          <DropzoneIcon />
          <DropzoneTitle accepting="Release to add" rejecting="Photos only">Drag photos here</DropzoneTitle>
          <DropzoneBrowse />
          <DropzoneHint />
        </DropzoneArea>
        <DropzoneRejections />
      </DropzoneRoot>
      <button type="button" className="self-start text-[12px] text-primary underline-offset-2 hover:underline" onClick={() => queue.add([sizedFile("beach.jpg", 3_200_000, "image/jpeg"), sizedFile("forest.png", 2_100_000, "image/png")])}>
        Add two sample photos
      </button>
      {queue.items.length > 0 ? (
        <UploadQueueRoot queue={queue} title="Photos">
          <div className="flex items-center gap-2 border-b px-2.5 py-1.5">
            <UploadQueueTitle />
          </div>
          <UploadQueueProgress />
          <ul className="divide-y">
            {queue.items.map((item) => (
              <UploadQueueRow key={item.id} item={item} onCancel={(id) => queue.cancel(id)} onRetry={(id) => queue.retry(id)} onRemove={(id) => queue.remove(id)} />
            ))}
          </ul>
        </UploadQueueRoot>
      ) : null}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>u(()=>import(`./named-parts-CyqhWB5i.js`),[]));function ee(){return(0,P.jsxs)(`div`,{children:[(0,P.jsx)(o,{title:`Basics: the dropzone`,children:`One target for every way a file arrives: drag and drop (folders expanded), click or Enter to browse, and paste. Rules split each batch into accepted and refused files, and every refusal says why.`}),(0,P.jsx)(k,{n:1,title:`A dropzone`,blurb:"Drop files, click, press Enter, or focus it and paste. `onDrop` gets the accepted files.",code:H,children:(0,P.jsx)(N,{testId:`basic-dropzone`,children:(0,P.jsx)(V,{})})}),(0,P.jsx)(k,{n:2,title:`Validation`,blurb:"`accept`, `maxSize`, `minSize` and `maxFiles` (counting files already `held`). While dragging, a type the zone refuses tints it red.",code:q,children:(0,P.jsx)(N,{testId:`basic-validation`,children:(0,P.jsx)(K,{})})}),(0,P.jsx)(k,{n:3,title:`A compact form field`,blurb:'`size="compact"` and `multiple={false}`: one row that turns into a file chip.',code:B,children:(0,P.jsx)(N,{testId:`basic-compact`,children:(0,P.jsx)(z,{})})}),(0,P.jsx)(k,{n:4,title:`Paste anywhere`,blurb:'`paste="document"` listens on the whole page, but never steals a paste from a text field.',code:G,children:(0,P.jsx)(N,{testId:`basic-paste`,children:(0,P.jsx)(W,{})})}),(0,P.jsx)(k,{n:5,title:`Just a button`,blurb:"`FileTrigger`: the same picker and rules with no drop area. Any button is the trigger; refusals come back to `onSelect` (shown with `RejectionList`).",code:Y,children:(0,P.jsx)(N,{testId:`basic-file-trigger`,children:(0,P.jsx)(J,{})})}),(0,P.jsx)(k,{n:6,title:`Compose your own`,blurb:"The `Dropzone` and `UploadQueueList` presets rebuilt from their public parts (`Dropzone.Root`, `.Area`, `.Icon`, `.Title`, `.Hint`, `.Rejections`; `UploadQueueView.Root`, `.Header`, `.Summary`, `.Actions`, `.Items`) in another layout, with your own row markup and reasons translated by error code.",code:L,children:(0,P.jsx)(N,{testId:`basic-compose`,children:(0,P.jsx)(I,{})})}),(0,P.jsx)(k,{n:7,title:`Parts by name`,blurb:"The same parts imported by their own names: `DropzoneRoot`, `DropzoneArea`, `DropzoneIcon`, `DropzoneTitle`, `DropzoneBrowse`, `DropzoneHint`, `DropzoneRejections`, then `UploadQueueRoot`, `UploadQueueTitle`, `UploadQueueProgress` and a `UploadQueueRow` per file.",code:$,children:(0,P.jsx)(N,{testId:`basic-named-parts`,children:(0,P.jsx)(Q,{})})})]})}export{ee as component};