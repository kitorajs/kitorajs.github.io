import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{n as t}from"./upload-queue-CMSWNW7u.js";import{s as n}from"./kit-docs-CvNs0WqT.js";import{Bc as r,Cc as i,Ic as a,ti as o}from"./index-9y5uwRd3.js";import{a as s,i as c,n as l,r as u,t as d}from"./adapter-DRlDAuEh.js";import{t as f}from"./use-upload-queue-mceTv7kT.js";import{t as p}from"./format-context-CYdYlWHA.js";import{t as m}from"./dropzone-DXhfXCx3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as h}from"./example-CZLJLtIC.js";import{l as g,t as _}from"./-kits.upload.shared-BT8Kx0dl.js";var v=e(r(),1),y=a(),b=256*1024;function x(e){return{async upload(t,{signal:n,onProgress:r}){for(let e=0;e<t.size;e+=b){if(n.aborted)throw d();await t.slice(e,e+b).arrayBuffer(),await s(40,n),r({loaded:Math.min(t.size,e+b),total:t.size})}let i=URL.createObjectURL(t);return e(t.name,i),{url:i,id:crypto.randomUUID()}}}}var S=new Intl.NumberFormat(`de-DE`,{maximumFractionDigits:1}),C={bytes:e=>e<1e3?`${e} B`:e<1e6?`${S.format(e/1e3)} kB`:`${S.format(e/1e6)} MB`,rate:e=>`${S.format(e/1e6)} MB/s`};function w(){let[e,n]=(0,v.useState)([]),[r]=(0,v.useState)(()=>x((e,t)=>n(n=>[...n,{name:e,url:t}]))),i=f({adapter:r});return(0,y.jsx)(p,{formatters:C,children:(0,y.jsxs)(`div`,{className:`flex flex-col gap-2 p-3`,children:[(0,y.jsx)(m,{size:`compact`,maxSize:5e7,onDrop:e=>i.add(e)}),(0,y.jsx)(t,{queue:i,title:`Stored in this tab`,maxHeight:200}),e.length>0?(0,y.jsx)(`ul`,{className:`text-[13px]`,children:e.map(e=>(0,y.jsx)(`li`,{children:(0,y.jsx)(`a`,{href:e.url,target:`_blank`,rel:`noreferrer`,className:`text-primary underline-offset-2 hover:underline`,children:e.name})},e.url))}):null]})})}var T=`import { useState } from "react"
import { Dropzone, UploadFormatProvider, UploadQueueList, abortError, delay, useUploadQueue, type UploadAdapter, type UploadFormatters } from "@kitora/upload"

/** Bytes read per step; small so the progress is visible on small files. */
const STEP = 256 * 1024

/**
 * Your own backend behind the one seam the kit talks to. This one "stores" each file in the
 * browser: it reads the file in slices (reporting progress), then hands back an object URL.
 * A real one would PUT to a presigned S3 URL, call a GraphQL mutation, or speak tus.
 */
function createBrowserStoreAdapter(onStored: (name: string, url: string) => void): UploadAdapter {
  return {
    async upload(file, { signal, onProgress }) {
      for (let loaded = 0; loaded < file.size; loaded += STEP) {
        if (signal.aborted) throw abortError()
        await file.slice(loaded, loaded + STEP).arrayBuffer()
        await delay(40, signal)
        onProgress({ loaded: Math.min(file.size, loaded + STEP), total: file.size })
      }
      const url = URL.createObjectURL(file)
      onStored(file.name, url)
      return { url, id: crypto.randomUUID() }
    },
  }
}

const decimal = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 1 })

/** SI units (1 kB = 1000 B) in German number format: the formatter adapter swaps every label below it. */
const siFormatters: Partial<UploadFormatters> = {
  bytes: (n) => (n < 1000 ? \`\${n} B\` : n < 1e6 ? \`\${decimal.format(n / 1e3)} kB\` : \`\${decimal.format(n / 1e6)} MB\`),
  rate: (n) => \`\${decimal.format(n / 1e6)} MB/s\`,
}

/** A custom \`UploadAdapter\` plus custom formatters, with the stock dropzone and queue unchanged. */
export function CustomAdapter() {
  const [stored, setStored] = useState<readonly { readonly name: string; readonly url: string }[]>([])
  const [adapter] = useState(() => createBrowserStoreAdapter((name, url) => setStored((cur) => [...cur, { name, url }])))
  const queue = useUploadQueue({ adapter })
  return (
    <UploadFormatProvider formatters={siFormatters}>
      <div className="flex flex-col gap-2 p-3">
        <Dropzone size="compact" maxSize={50_000_000} onDrop={(files) => queue.add(files)} />
        <UploadQueueList queue={queue} title="Stored in this tab" maxHeight={200} />
        {stored.length > 0 ? (
          <ul className="text-[13px]">
            {stored.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noreferrer" className="text-primary underline-offset-2 hover:underline">{s.name}</a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </UploadFormatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>i(()=>import(`./custom-adapter-VC0Fm7872.js`),[]));var E=e=>e.includes(`flaky`);function D(){let[e]=(0,v.useState)(()=>u({bytesPerSecond:2.5*1024*1024,failWhen:E})),n=f({adapter:e,concurrency:2});return(0,y.jsxs)(`div`,{className:`flex flex-col gap-2 p-3`,children:[(0,y.jsx)(m,{size:`compact`,onDrop:e=>n.add(e)}),(0,y.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,y.jsx)(o,{size:`xs`,variant:`outline`,onClick:()=>n.add([g(`design-review.mp4`,9e6,`video/mp4`),g(`notes.pdf`,14e5,`application/pdf`),g(`flaky-network.zip`,4e6,`application/zip`),g(`cover.png`,22e5,`image/png`)]),children:`Add sample files`}),(0,y.jsx)(`span`,{className:`text-[12px] text-muted-foreground`,children:`Two at a time; “flaky-network.zip” always fails part-way.`})]}),(0,y.jsx)(t,{queue:n,maxHeight:260})]})}var O=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Dropzone, UploadQueueList, createFakeAdapter, useUploadQueue } from "@kitora/upload"
import { sizedFile } from "../fixtures"

/** Files that fail part-way, every time, to show the error state and Retry. */
const failing = (name: string) => name.includes("flaky")

/**
 * A dropzone feeding an upload queue. The fake adapter simulates progress; swap in
 * \`createXhrAdapter({ url })\` or your own \`UploadAdapter\` for a real backend.
 */
export function BasicQueue() {
  const [adapter] = useState(() => createFakeAdapter({ bytesPerSecond: 2.5 * 1024 * 1024, failWhen: failing }))
  const queue = useUploadQueue({ adapter, concurrency: 2 })
  const addSamples = () => queue.add([sizedFile("design-review.mp4", 9_000_000, "video/mp4"), sizedFile("notes.pdf", 1_400_000, "application/pdf"), sizedFile("flaky-network.zip", 4_000_000, "application/zip"), sizedFile("cover.png", 2_200_000, "image/png")])
  return (
    <div className="flex flex-col gap-2 p-3">
      <Dropzone size="compact" onDrop={(files) => queue.add(files)} />
      <div className="flex items-center gap-1">
        <Button size="xs" variant="outline" onClick={addSamples}>Add sample files</Button>
        <span className="text-[12px] text-muted-foreground">Two at a time; “flaky-network.zip” always fails part-way.</span>
      </div>
      <UploadQueueList queue={queue} maxHeight={260} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>i(()=>import(`./queue-hGmFl_Cd.js`),[]));function k(){let[e]=(0,v.useState)(()=>l({transport:c({bytesPerSecond:3*1024*1024,failRate:1/6}),chunkSize:512*1024})),n=f({adapter:e,concurrency:1});return(0,y.jsxs)(`div`,{className:`flex flex-col gap-2 p-3`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,y.jsx)(o,{size:`xs`,variant:`outline`,onClick:()=>n.add([g(`site-backup.tar`,12e6,`application/x-tar`)]),children:`Upload a 12 MB backup`}),(0,y.jsx)(`span`,{className:`text-[12px] text-muted-foreground`,children:`Cancel it half-way, then Retry: it resumes, it does not restart.`})]}),(0,y.jsx)(t,{queue:n,title:`Chunked upload`})]})}var A=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { UploadQueueList, createChunkedAdapter, createFakeTransport, useUploadQueue } from "@kitora/upload"
import { sizedFile } from "../fixtures"

/**
 * A chunked, resumable adapter: the file goes up in 512 KB pieces, each acknowledged
 * offset is remembered, and Retry (after an error or a cancel) carries on from there.
 * Here one chunk in six fails at random, as on a bad connection.
 */
export function BasicResumable() {
  const [adapter] = useState(() => createChunkedAdapter({ transport: createFakeTransport({ bytesPerSecond: 3 * 1024 * 1024, failRate: 1 / 6 }), chunkSize: 512 * 1024 }))
  const queue = useUploadQueue({ adapter, concurrency: 1 })
  return (
    <div className="flex flex-col gap-2 p-3">
      <div className="flex items-center gap-1">
        <Button size="xs" variant="outline" onClick={() => queue.add([sizedFile("site-backup.tar", 12_000_000, "application/x-tar")])}>Upload a 12 MB backup</Button>
        <span className="text-[12px] text-muted-foreground">Cancel it half-way, then Retry: it resumes, it does not restart.</span>
      </div>
      <UploadQueueList queue={queue} title="Chunked upload" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>i(()=>import(`./resumable-iTjvx1p4.js`),[]));function j(){return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(n,{title:`Basics: the upload queue`,children:"`useUploadQueue` runs files through an `UploadAdapter` with a concurrency limit, and `UploadQueueList` shows each file's progress, rate and time left with cancel, retry and remove. The adapter is the only seam to your backend."}),(0,y.jsx)(h,{n:1,title:`A queue with progress, cancel and retry`,blurb:`Drop files or add the samples. The header totals the queue; Retry failed, Cancel all and Clear finished act on every row.`,code:O,children:(0,y.jsx)(_,{testId:`basic-queue`,children:(0,y.jsx)(D,{})})}),(0,y.jsx)(h,{n:2,title:`A chunked, resumable adapter`,blurb:"`createChunkedAdapter` over any `ChunkTransport` (tus, S3 multipart, your API) remembers the last acknowledged byte, so Retry resumes.",code:A,children:(0,y.jsx)(_,{testId:`basic-resumable`,children:(0,y.jsx)(k,{})})}),(0,y.jsx)(h,{n:3,title:`Your own adapter and formatters`,blurb:"An `UploadAdapter` written by hand (it reads each file in slices, reports progress and returns an object URL) plus `UploadFormatProvider` with SI units in German number format. The stock dropzone and queue are unchanged.",code:T,children:(0,y.jsx)(_,{testId:`basic-custom-adapter`,children:(0,y.jsx)(w,{})})})]})}export{j as component};