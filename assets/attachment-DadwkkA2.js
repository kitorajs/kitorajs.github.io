import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./send-horizontal-B_UP07q2.js";import{t as r}from"./textarea-BQPz--El.js";import{Bc as i,Cc as a,Ic as o,ti as s}from"./index-9y5uwRd3.js";import{n as c,t as l}from"./card-AZ_23TG_.js";import{t as u}from"./attachment-DtY3LfoA.js";var d=e({AttachmentCompose:()=>h}),f=t(i(),1),p=o(),m=[{id:`f1`,name:`mockup-home.png`,kind:`image/png`,size:31e4,thumb:`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Crect width='8' height='8' fill='%2360a5fa'/%3E%3Ccircle cx='3' cy='3' r='1.5' fill='%23fde68a'/%3E%3C/svg%3E`},{id:`f2`,name:`brief.pdf`,kind:`application/pdf`,size:92e3}];function h(){let[e,t]=(0,f.useState)(m);return(0,p.jsx)(l,{className:`w-full max-w-md`,children:(0,p.jsxs)(c,{className:`flex flex-col gap-2`,children:[e.length>0?(0,p.jsx)(`div`,{className:`flex flex-wrap gap-1.5`,children:e.map(e=>(0,p.jsx)(u,{variant:`chip`,name:e.name,kind:e.kind,size:e.size,icon:`thumb`in e?(0,p.jsx)(`img`,{src:e.thumb,alt:``}):void 0,onRemove:()=>t(t=>t.filter(t=>t.id!==e.id))},e.id))}):null,(0,p.jsx)(r,{"aria-label":`Message`,placeholder:`Write a message…`,rows:2}),(0,p.jsxs)(s,{className:`self-end`,size:`sm`,children:[(0,p.jsx)(n,{}),` Send`]})]})})}var g=e({AttachmentDefault:()=>_});function _(){return(0,p.jsxs)(`div`,{className:`flex w-full max-w-md flex-col gap-3`,children:[(0,p.jsxs)(`div`,{className:`flex flex-wrap gap-1.5`,children:[(0,p.jsx)(u,{name:`contract-final-v3-signed.pdf`,kind:`application/pdf`,size:248e3}),(0,p.jsx)(u,{name:`site-photo.jpg`,kind:`image/jpeg`,size:24e5})]}),(0,p.jsxs)(`div`,{className:`flex flex-wrap gap-1.5`,children:[(0,p.jsx)(u,{variant:`chip`,name:`notes.md`,kind:`text/markdown`,size:3200}),(0,p.jsx)(u,{variant:`chip`,name:`diagram.png`,kind:`image/png`,size:64e4})]})]})}var v=e({AttachmentUpload:()=>b}),y=[{id:`u1`,name:`quarterly-report.xlsx`,kind:`application/vnd.ms-excel`,size:125e4,progress:64},{id:`u2`,name:`logo.svg`,kind:`image/svg+xml`,size:12400},{id:`u3`,name:`recording.mp4`,kind:`video/mp4`,size:48e6,progress:12}];function b(){let[e,t]=(0,f.useState)(y);return(0,p.jsxs)(`div`,{className:`flex w-full max-w-md flex-col gap-2`,children:[(0,p.jsx)(`div`,{className:`flex flex-wrap gap-1.5`,children:e.map(e=>(0,p.jsx)(u,{name:e.name,kind:e.kind,size:e.size,progress:e.progress,onRemove:()=>t(t=>t.filter(t=>t.id!==e.id))},e.id))}),e.length<y.length?(0,p.jsx)(`button`,{type:`button`,className:`self-start text-[12px] font-medium underline underline-offset-2`,onClick:()=>t(y),children:`Restore files`}):null]})}var x=`import { useState } from "react"
import { SendHorizontal } from "lucide-react"
import { Attachment } from "@kitora/ui/attachment"
import { Button } from "@kitora/ui/button"
import { Card, CardContent } from "@kitora/ui/card"
import { Textarea } from "@kitora/ui/textarea"

const THUMB = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Crect width='8' height='8' fill='%2360a5fa'/%3E%3Ccircle cx='3' cy='3' r='1.5' fill='%23fde68a'/%3E%3C/svg%3E"

const FILES = [
  { id: "f1", name: "mockup-home.png", kind: "image/png", size: 310_000, thumb: THUMB },
  { id: "f2", name: "brief.pdf", kind: "application/pdf", size: 92_000 },
] as const

export function AttachmentCompose() {
  const [files, setFiles] = useState<readonly (typeof FILES)[number][]>(FILES)
  return (
    <Card className="w-full max-w-md">
      <CardContent className="flex flex-col gap-2">
        {files.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
            {files.map((f) => (
              <Attachment
                key={f.id}
                variant="chip"
                name={f.name}
                kind={f.kind}
                size={f.size}
                icon={"thumb" in f ? <img src={f.thumb} alt="" /> : undefined}
                onRemove={() => setFiles((all) => all.filter((x) => x.id !== f.id))}
              />
            ))}
          </div>
        ) : null}
        <Textarea aria-label="Message" placeholder="Write a message…" rows={2} />
        <Button className="self-end" size="sm">
          <SendHorizontal /> Send
        </Button>
      </CardContent>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>a(()=>import(`./compose-BcIvRViC.js`),[]));var S=`import { Attachment } from "@kitora/ui/attachment"

export function AttachmentDefault() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex flex-wrap gap-1.5">
        <Attachment name="contract-final-v3-signed.pdf" kind="application/pdf" size={248_000} />
        <Attachment name="site-photo.jpg" kind="image/jpeg" size={2_400_000} />
      </div>
      <div className="flex flex-wrap gap-1.5">
        <Attachment variant="chip" name="notes.md" kind="text/markdown" size={3_200} />
        <Attachment variant="chip" name="diagram.png" kind="image/png" size={640_000} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>a(()=>import(`./default-CyPHj2qH.js`),[]));var C=`import { useState } from "react"
import { Attachment } from "@kitora/ui/attachment"

interface Upload {
  readonly id: string
  readonly name: string
  readonly kind: string
  readonly size: number
  readonly progress?: number
}

const START: readonly Upload[] = [
  { id: "u1", name: "quarterly-report.xlsx", kind: "application/vnd.ms-excel", size: 1_250_000, progress: 64 },
  { id: "u2", name: "logo.svg", kind: "image/svg+xml", size: 12_400 },
  { id: "u3", name: "recording.mp4", kind: "video/mp4", size: 48_000_000, progress: 12 },
]

export function AttachmentUpload() {
  const [files, setFiles] = useState(START)
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex flex-wrap gap-1.5">
        {files.map((f) => (
          <Attachment key={f.id} name={f.name} kind={f.kind} size={f.size} progress={f.progress} onRemove={() => setFiles((all) => all.filter((x) => x.id !== f.id))} />
        ))}
      </div>
      {files.length < START.length ? (
        <button type="button" className="self-start text-[12px] font-medium underline underline-offset-2" onClick={() => setFiles(START)}>
          Restore files
        </button>
      ) : null}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>a(()=>import(`./upload-sgt0DvMq.js`),[]));var w={"./demos/attachment/compose.tsx":d,"./demos/attachment/default.tsx":g,"./demos/attachment/upload.tsx":v},T={"./demos/attachment/compose.tsx":x,"./demos/attachment/default.tsx":S,"./demos/attachment/upload.tsx":C};export{w as modules,T as sources};