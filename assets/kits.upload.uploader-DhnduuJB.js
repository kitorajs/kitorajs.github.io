import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{n as t}from"./upload-queue-DbGdD0iS.js";import{n}from"./file-icon-DPItOcvw.js";import{s as r}from"./kit-docs-BUovISd0.js";import{t as i}from"./paperclip-C8EZhdyj.js";import{t as a}from"./send-3adh7YZe.js";import{Bc as o,Cc as s,Ic as c,bi as l,ti as u}from"./index-B9ukmIN1.js";import{c as d,o as f}from"./validate-BWHY_AUA.js";import{r as p}from"./adapter-DRlDAuEh.js";import{t as m}from"./use-upload-queue-DjvO6Sod.js";import{t as h}from"./use-dropzone-DI_mlt3O.js";import{l as g,t as _}from"./dropzone-D-dLxHik.js";import"./kit-gallery-Bph7isB2.js";import{t as v}from"./example-BGnSQG2Y.js";import{l as y,t as b}from"./-kits.upload.shared-CuG2JfJM.js";var x=e(o(),1),S=c(),C=25*1024*1024;function w(){let[e]=(0,x.useState)(()=>p({bytesPerSecond:900*1024})),t=m({adapter:e}),[r,o]=(0,x.useState)([]),[s,c]=(0,x.useState)(!1),_=t.items.filter(e=>e.status!==`canceled`),v=_.reduce((e,t)=>e+t.size,0),y=e=>{let{accepted:n,rejected:r}=f(e,{maxSize:C-v});o(r),t.add(n),c(!1)},b=h({onDrop:e=>y(e),paste:!1}),w=t.summary.uploading+t.summary.queued>0;return(0,S.jsxs)(`div`,{className:`relative m-3 flex flex-col rounded-lg border bg-card text-[13px] shadow-sm`,ref:b.rootRef,children:[(0,S.jsx)(`input`,{...b.getInputProps(),ref:b.inputRef}),(0,S.jsxs)(`div`,{className:`flex items-center gap-2 border-b px-3 py-1.5`,children:[(0,S.jsx)(`span`,{className:`w-14 text-muted-foreground`,children:`To`}),(0,S.jsx)(`span`,{children:`design-team@acme.io`})]}),(0,S.jsxs)(`div`,{className:`flex items-center gap-2 border-b px-3 py-1.5`,children:[(0,S.jsx)(`span`,{className:`w-14 text-muted-foreground`,children:`Subject`}),(0,S.jsx)(`span`,{className:`font-medium`,children:`Assets for the launch`})]}),(0,S.jsx)(`textarea`,{"aria-label":`Message`,placeholder:`Write a message, or paste a screenshot here…`,onPaste:e=>{let t=[...e.clipboardData.files];t.length>0&&(e.preventDefault(),y(t))},className:`min-h-24 resize-none bg-transparent px-3 py-2 outline-none`,defaultValue:`Hi team,

Attached are the final assets for Thursday.`}),_.length>0?(0,S.jsx)(`ul`,{className:`flex flex-wrap gap-1.5 px-3 pb-2`,"aria-label":`Attachments`,children:_.map(e=>(0,S.jsxs)(`li`,{className:`relative flex h-8 max-w-56 items-center gap-1.5 overflow-hidden rounded-md border bg-background pr-1 pl-1`,children:[(0,S.jsx)(n,{file:e.file,className:`size-6`}),(0,S.jsx)(`span`,{className:`truncate`,children:e.name}),(0,S.jsx)(`span`,{className:`shrink-0 text-[11px] text-muted-foreground tabular-nums`,children:e.status===`error`?`failed`:d(e.size)}),(0,S.jsx)(`button`,{type:`button`,"aria-label":`Remove ${e.name}`,onClick:()=>t.remove(e.id),className:`grid size-5 shrink-0 place-items-center rounded text-muted-foreground hover:bg-muted hover:text-foreground`,children:(0,S.jsx)(l,{className:`size-3`})}),e.status===`uploading`||e.status===`queued`?(0,S.jsx)(`span`,{className:`absolute inset-x-0 bottom-0 h-0.5 bg-primary transition-[width]`,style:{width:`${e.loaded/Math.max(1,e.size)*100}%`}}):null]},e.id))}):null,r.length>0?(0,S.jsx)(g,{rejections:r,onDismiss:()=>o([]),className:`mx-3 mb-2`}):null,(0,S.jsxs)(`div`,{className:`flex items-center gap-2 border-t px-3 py-1.5`,children:[(0,S.jsxs)(u,{size:`sm`,disabled:w||s,onClick:()=>c(!0),children:[(0,S.jsx)(a,{}),` `,s?`Sent`:w?`Uploading…`:`Send`]}),(0,S.jsx)(u,{size:`icon-sm`,variant:`ghost`,"aria-label":`Attach files`,onClick:b.open,children:(0,S.jsx)(i,{})}),(0,S.jsxs)(`span`,{className:`ml-auto text-[12px] text-muted-foreground tabular-nums`,children:[d(v),` of 25 MB`]})]}),b.drag===`idle`?null:(0,S.jsx)(`div`,{className:`pointer-events-none absolute inset-0 grid place-items-center rounded-lg border-2 border-dashed border-primary bg-primary/10 font-medium`,children:`Drop to attach`})]})}var T=`import { useState } from "react"
import { Paperclip, Send, X } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { FileThumb, RejectionList, createFakeAdapter, formatBytes, useDropzone, useUploadQueue, validateBatch, type Rejection } from "@kitora/upload"

/** Gmail's total attachment limit. */
const LIMIT = 25 * 1024 * 1024

/**
 * An email composer: drop anywhere on the card, paste into the message, or use the
 * paperclip. Attachments upload as chips with their own bars, the total stays under
 * 25 MB, and Send waits for every upload.
 */
export function EmailAttachments() {
  const [adapter] = useState(() => createFakeAdapter({ bytesPerSecond: 900 * 1024 }))
  const queue = useUploadQueue({ adapter })
  const [refused, setRefused] = useState<readonly Rejection[]>([])
  const [sent, setSent] = useState(false)
  const live = queue.items.filter((it) => it.status !== "canceled")
  const used = live.reduce((n, it) => n + it.size, 0)
  const add = (files: readonly File[]) => {
    // The per-file limit is what is left of the total.
    const { accepted, rejected } = validateBatch(files, { maxSize: LIMIT - used })
    setRefused(rejected)
    queue.add(accepted)
    setSent(false)
  }
  const zone = useDropzone({ onDrop: (files) => add(files), paste: false })
  const busy = queue.summary.uploading + queue.summary.queued > 0
  return (
    <div className="relative m-3 flex flex-col rounded-lg border bg-card text-[13px] shadow-sm" ref={zone.rootRef}>
      <input {...zone.getInputProps()} ref={zone.inputRef} />
      <div className="flex items-center gap-2 border-b px-3 py-1.5"><span className="w-14 text-muted-foreground">To</span><span>design-team@acme.io</span></div>
      <div className="flex items-center gap-2 border-b px-3 py-1.5"><span className="w-14 text-muted-foreground">Subject</span><span className="font-medium">Assets for the launch</span></div>
      <textarea
        aria-label="Message"
        placeholder="Write a message, or paste a screenshot here…"
        onPaste={(e) => {
          const files = [...e.clipboardData.files]
          if (files.length > 0) {
            e.preventDefault()
            add(files)
          }
        }}
        className="min-h-24 resize-none bg-transparent px-3 py-2 outline-none"
        defaultValue={"Hi team,\\n\\nAttached are the final assets for Thursday."}
      />
      {live.length > 0 ? (
        <ul className="flex flex-wrap gap-1.5 px-3 pb-2" aria-label="Attachments">
          {live.map((it) => (
            <li key={it.id} className="relative flex h-8 max-w-56 items-center gap-1.5 overflow-hidden rounded-md border bg-background pr-1 pl-1">
              <FileThumb file={it.file} className="size-6" />
              <span className="truncate">{it.name}</span>
              <span className="shrink-0 text-[11px] text-muted-foreground tabular-nums">{it.status === "error" ? "failed" : formatBytes(it.size)}</span>
              <button type="button" aria-label={\`Remove \${it.name}\`} onClick={() => queue.remove(it.id)} className="grid size-5 shrink-0 place-items-center rounded text-muted-foreground hover:bg-muted hover:text-foreground">
                <X className="size-3" />
              </button>
              {it.status === "uploading" || it.status === "queued" ? <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transition-[width]" style={{ width: \`\${(it.loaded / Math.max(1, it.size)) * 100}%\` }} /> : null}
            </li>
          ))}
        </ul>
      ) : null}
      {refused.length > 0 ? <RejectionList rejections={refused} onDismiss={() => setRefused([])} className="mx-3 mb-2" /> : null}
      <div className="flex items-center gap-2 border-t px-3 py-1.5">
        <Button size="sm" disabled={busy || sent} onClick={() => setSent(true)}>
          <Send /> {sent ? "Sent" : busy ? "Uploading…" : "Send"}
        </Button>
        <Button size="icon-sm" variant="ghost" aria-label="Attach files" onClick={zone.open}>
          <Paperclip />
        </Button>
        <span className="ml-auto text-[12px] text-muted-foreground tabular-nums">{formatBytes(used)} of 25 MB</span>
      </div>
      {zone.drag !== "idle" ? (
        <div className="pointer-events-none absolute inset-0 grid place-items-center rounded-lg border-2 border-dashed border-primary bg-primary/10 font-medium">Drop to attach</div>
      ) : null}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>s(()=>import(`./attachments-BjqaImsK.js`),[]));var E={fast:{label:`Fibre`,bytesPerSecond:8*1024*1024,failRate:0},slow:{label:`Slow 3G`,bytesPerSecond:300*1024,failRate:0},flaky:{label:`Flaky Wi-Fi`,bytesPerSecond:2*1024*1024,failRate:.35}},D=[`fast`,`slow`,`flaky`],O=[[`hero-banner.png`,34e5,`image/png`],[`product-demo.mp4`,18e6,`video/mp4`],[`pricing.pdf`,9e5,`application/pdf`],[`voiceover.wav`,62e5,`audio/wav`],[`icons.zip`,21e5,`application/zip`],[`copy-deck.docx`,45e4,`application/vnd.openxmlformats-officedocument.wordprocessingml.document`],[`screenshot-1.png`,11e5,`image/png`],[`screenshot-2.png`,125e4,`image/png`]];function k(){let[e,n]=(0,x.useState)(`fast`),r=m({adapter:(0,x.useMemo)(()=>p(E[e]),[e]),concurrency:3}),{summary:i}=r,a=[[`Files`,`${i.total}`],[`Uploaded`,`${i.done}`],[`Failed`,`${i.failed}`],[`Sent`,`${i.percent}% of ${d(i.bytes)}`]];return(0,S.jsxs)(`div`,{className:`grid gap-3 p-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]`,children:[(0,S.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,S.jsx)(_,{maxSize:50*1024*1024,maxFiles:20,held:i.total-i.canceled,title:`Drop project files`,onDrop:e=>r.add(e)}),(0,S.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5 text-[12px]`,children:[(0,S.jsx)(u,{size:`xs`,variant:`outline`,onClick:()=>r.add(O.map(([e,t,n])=>y(e,t,n))),children:`Add 8 sample files`}),(0,S.jsx)(`span`,{className:`ml-auto text-muted-foreground`,children:`Network`}),(0,S.jsx)(`div`,{role:`radiogroup`,"aria-label":`Simulated network`,className:`flex rounded-md border p-0.5`,children:D.map(t=>(0,S.jsx)(`button`,{type:`button`,role:`radio`,"aria-checked":e===t,onClick:()=>n(t),className:`h-6 rounded px-1.5 text-muted-foreground hover:text-foreground aria-checked:bg-muted aria-checked:font-medium aria-checked:text-foreground`,children:E[t].label},t))})]}),(0,S.jsx)(`dl`,{className:`grid grid-cols-2 gap-1.5 sm:grid-cols-4`,children:a.map(([e,t])=>(0,S.jsxs)(`div`,{className:`rounded-md border bg-card px-2 py-1.5`,children:[(0,S.jsx)(`dt`,{className:`text-[11px] text-muted-foreground`,children:e}),(0,S.jsx)(`dd`,{className:`truncate text-[13px] font-semibold tabular-nums`,children:t})]},e))})]}),(0,S.jsx)(t,{queue:r,title:`Project files`,maxHeight:300,empty:(0,S.jsx)(`div`,{className:`grid h-full min-h-40 place-items-center rounded-lg border border-dashed text-[12px] text-muted-foreground`,children:`The queue is empty.`})})]})}var A=`import { useMemo, useState } from "react"
import { Button } from "@kitora/ui/button"
import { Dropzone, UploadQueueList, createFakeAdapter, formatBytes, useUploadQueue } from "@kitora/upload"
import { sizedFile } from "./fixtures"

/** Network conditions the fake adapter simulates. */
const NETWORKS = {
  fast: { label: "Fibre", bytesPerSecond: 8 * 1024 * 1024, failRate: 0 },
  slow: { label: "Slow 3G", bytesPerSecond: 300 * 1024, failRate: 0 },
  flaky: { label: "Flaky Wi-Fi", bytesPerSecond: 2 * 1024 * 1024, failRate: 0.35 },
} as const
type Network = keyof typeof NETWORKS
const NETWORK_IDS: readonly Network[] = ["fast", "slow", "flaky"]

const SAMPLES: readonly [string, number, string][] = [
  ["hero-banner.png", 3_400_000, "image/png"],
  ["product-demo.mp4", 18_000_000, "video/mp4"],
  ["pricing.pdf", 900_000, "application/pdf"],
  ["voiceover.wav", 6_200_000, "audio/wav"],
  ["icons.zip", 2_100_000, "application/zip"],
  ["copy-deck.docx", 450_000, "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["screenshot-1.png", 1_100_000, "image/png"],
  ["screenshot-2.png", 1_250_000, "image/png"],
]

/** A project uploader: rules, a simulated network you can switch mid-flight, three uploads at a time, and live totals. */
export function ProjectUploader() {
  const [network, setNetwork] = useState<Network>("fast")
  const adapter = useMemo(() => createFakeAdapter(NETWORKS[network]), [network])
  const queue = useUploadQueue({ adapter, concurrency: 3 })
  const { summary } = queue
  const stats = [
    ["Files", \`\${summary.total}\`],
    ["Uploaded", \`\${summary.done}\`],
    ["Failed", \`\${summary.failed}\`],
    ["Sent", \`\${summary.percent}% of \${formatBytes(summary.bytes)}\`],
  ] as const
  return (
    <div className="grid gap-3 p-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
      <div className="flex flex-col gap-2">
        <Dropzone maxSize={50 * 1024 * 1024} maxFiles={20} held={summary.total - summary.canceled} title="Drop project files" onDrop={(files) => queue.add(files)} />
        <div className="flex flex-wrap items-center gap-1.5 text-[12px]">
          <Button size="xs" variant="outline" onClick={() => queue.add(SAMPLES.map(([n, s, t]) => sizedFile(n, s, t)))}>Add 8 sample files</Button>
          <span className="ml-auto text-muted-foreground">Network</span>
          <div role="radiogroup" aria-label="Simulated network" className="flex rounded-md border p-0.5">
            {NETWORK_IDS.map((n) => (
              <button key={n} type="button" role="radio" aria-checked={network === n} onClick={() => setNetwork(n)} className="h-6 rounded px-1.5 text-muted-foreground hover:text-foreground aria-checked:bg-muted aria-checked:font-medium aria-checked:text-foreground">
                {NETWORKS[n].label}
              </button>
            ))}
          </div>
        </div>
        <dl className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
          {stats.map(([label, value]) => (
            <div key={label} className="rounded-md border bg-card px-2 py-1.5">
              <dt className="text-[11px] text-muted-foreground">{label}</dt>
              <dd className="truncate text-[13px] font-semibold tabular-nums">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <UploadQueueList queue={queue} title="Project files" maxHeight={300} empty={<div className="grid h-full min-h-40 place-items-center rounded-lg border border-dashed text-[12px] text-muted-foreground">The queue is empty.</div>} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>s(()=>import(`./uploader-MyI4xiWM.js`),[]));function j(){return(0,S.jsxs)(`div`,{children:[(0,S.jsx)(r,{title:`Uploader`,children:`Two real-world shapes on the same queue: a bulk project upload, and attachments inside a composer.`}),(0,S.jsx)(v,{n:1,title:`Project upload`,blurb:`Up to 20 files of 50 MB, three at a time. Switch the simulated network mid-flight: new uploads use it, and Flaky Wi-Fi fails about a third of them for Retry failed.`,code:A,children:(0,S.jsx)(b,{testId:`project-uploader`,children:(0,S.jsx)(k,{})})}),(0,S.jsx)(v,{n:2,title:`Email attachments`,blurb:`Drop anywhere on the composer, paste into the message, or use the paperclip. Each chip has its own bar; the 25 MB total is enforced; Send waits.`,code:T,children:(0,S.jsx)(b,{testId:`email-attachments`,children:(0,S.jsx)(w,{})})})]})}export{j as component};