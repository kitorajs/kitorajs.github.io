import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./camera-B1D0GgJD.js";import{t as r}from"./paperclip-C81gkc8i.js";import{t as i}from"./textarea-BQPz--El.js";import{Bc as a,Cc as o,Ic as s,Mi as c,bi as l,ti as u}from"./index-9y5uwRd3.js";import{a as d,i as f,n as p,o as m,t as h}from"./card-AZ_23TG_.js";import{l as g}from"./dropzone-DXhfXCx3.js";import{t as _}from"./file-trigger-DU6LZesd.js";var v=c(`folder-up`,[[`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`,key:`1kt360`}],[`path`,{d:`M12 10v6`,key:`1bos4e`}],[`path`,{d:`m9 13 3-3 3 3`,key:`1pxg3c`}]]),y=c(`image-up`,[[`path`,{d:`M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21`,key:`9csbqa`}],[`path`,{d:`m14 19.5 3-3 3 3`,key:`9vmjn0`}],[`path`,{d:`M17 22v-5.5`,key:`1aa6fl`}],[`circle`,{cx:`9`,cy:`9`,r:`2`,key:`af1f0g`}]]),b=e({FileTriggerComposeMessage:()=>C}),x=t(a(),1),S=s();function C(){let[e,t]=(0,x.useState)([]);return(0,S.jsxs)(h,{className:`w-full max-w-md`,children:[(0,S.jsx)(d,{children:(0,S.jsx)(m,{children:`New message`})}),(0,S.jsxs)(p,{className:`grid gap-3`,children:[(0,S.jsx)(i,{"aria-label":`Message`,placeholder:`Write a message…`,minRows:3}),e.length>0?(0,S.jsx)(`ul`,{className:`flex flex-wrap gap-1.5`,"aria-label":`Attachments`,children:e.map((e,n)=>(0,S.jsxs)(`li`,{className:`flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs`,children:[e.name,(0,S.jsx)(`button`,{type:`button`,"aria-label":`Remove ${e.name}`,className:`rounded-sm text-muted-foreground hover:text-foreground`,onClick:()=>t(e=>e.filter((e,t)=>t!==n)),children:(0,S.jsx)(l,{className:`size-3`})})]},`${e.name}-${n}`))}):null]}),(0,S.jsxs)(f,{className:`justify-between gap-2`,children:[(0,S.jsx)(_,{maxFiles:5,held:e.length,onSelect:e=>t(t=>[...t,...e]),children:(0,S.jsxs)(u,{type:`button`,variant:`ghost`,size:`sm`,children:[(0,S.jsx)(r,{}),` Attach`]})}),(0,S.jsx)(u,{type:`button`,size:`sm`,children:`Send`})]})]})}var w=e({FileTriggerDefault:()=>T});function T(){let[e,t]=(0,x.useState)([]);return(0,S.jsxs)(`div`,{className:`flex flex-col items-start gap-2`,children:[(0,S.jsx)(_,{onSelect:e=>t(e.map(e=>e.name))}),(0,S.jsx)(`p`,{className:`text-xs text-muted-foreground`,"aria-live":`polite`,children:e.length>0?`Picked: ${e.join(`, `)}`:`No file picked yet`})]})}var E=e({FileTriggerFolderAndCamera:()=>D});function D(){let[e,t]=(0,x.useState)(`Nothing picked yet`);return(0,S.jsxs)(`div`,{className:`flex flex-col items-start gap-3`,children:[(0,S.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,S.jsx)(_,{directory:!0,onSelect:e=>t(`${e.length} file(s) from ${e[0]?.webkitRelativePath.split(`/`)[0]??`the folder`}`),children:(0,S.jsxs)(u,{type:`button`,variant:`outline`,children:[(0,S.jsx)(v,{}),` Upload a folder`]})}),(0,S.jsx)(_,{accept:`image/*`,capture:`environment`,multiple:!1,onSelect:e=>t(e[0]?`Photo: ${e[0].name}`:`No photo`),children:(0,S.jsxs)(u,{type:`button`,variant:`outline`,children:[(0,S.jsx)(n,{}),` Take a photo`]})})]}),(0,S.jsx)(`p`,{className:`text-xs text-muted-foreground`,"aria-live":`polite`,children:e})]})}var O=e({FileTriggerInAForm:()=>k});function k(){let[e,t]=(0,x.useState)(null),[n,r]=(0,x.useState)(null);return(0,S.jsxs)(`form`,{className:`flex flex-col items-start gap-3`,onSubmit:e=>{e.preventDefault();let t=new FormData(e.currentTarget).get(`resume`);r(t instanceof File&&t.name?`resume = ${t.name}`:`no file posted`)},children:[(0,S.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,S.jsx)(_,{name:`resume`,accept:`.pdf`,multiple:!1,onSelect:e=>t(e[0]?.name??null),children:(0,S.jsx)(u,{type:`button`,variant:`outline`,children:`Attach résumé (PDF)`})}),(0,S.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:e??`No file`})]}),(0,S.jsx)(u,{type:`submit`,size:`sm`,children:`Apply`}),n?(0,S.jsxs)(`p`,{role:`status`,className:`text-xs text-muted-foreground`,children:[`Posted `,n]}):null]})}var A=e({FileTriggerRules:()=>j});function j(){let[e,t]=(0,x.useState)([]),[n,r]=(0,x.useState)([]);return(0,S.jsxs)(`div`,{className:`flex w-full max-w-md flex-col items-start gap-3`,children:[(0,S.jsx)(_,{accept:`image/png,image/jpeg`,maxSize:2*1024*1024,maxFiles:3,onSelect:(e,n)=>{t(e),r(n)},children:(0,S.jsxs)(u,{type:`button`,children:[(0,S.jsx)(y,{}),` Add photos`]})}),(0,S.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`PNG or JPEG, up to 2 MB each, three at most.`}),e.length>0?(0,S.jsxs)(`p`,{className:`text-xs`,children:[`Accepted: `,e.map(e=>e.name).join(`, `)]}):null,(0,S.jsx)(g,{rejections:n,onDismiss:()=>r([]),className:`w-full`})]})}var M=`import { useState } from "react"
import { Paperclip, X } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@kitora/ui/card"
import { Textarea } from "@kitora/ui/textarea"
import { FileTrigger } from "@kitora/upload/ui"

export function FileTriggerComposeMessage() {
  const [files, setFiles] = useState<readonly File[]>([])
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>New message</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        <Textarea aria-label="Message" placeholder="Write a message…" minRows={3} />
        {files.length > 0 ? (
          <ul className="flex flex-wrap gap-1.5" aria-label="Attachments">
            {files.map((file, index) => (
              <li key={\`\${file.name}-\${index}\`} className="flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs">
                {file.name}
                <button type="button" aria-label={\`Remove \${file.name}\`} className="rounded-sm text-muted-foreground hover:text-foreground" onClick={() => setFiles((current) => current.filter((_, i) => i !== index))}>
                  <X className="size-3" />
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </CardContent>
      <CardFooter className="justify-between gap-2">
        <FileTrigger maxFiles={5} held={files.length} onSelect={(accepted) => setFiles((current) => [...current, ...accepted])}>
          <Button type="button" variant="ghost" size="sm">
            <Paperclip /> Attach
          </Button>
        </FileTrigger>
        <Button type="button" size="sm">
          Send
        </Button>
      </CardFooter>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>o(()=>import(`./compose-JCtCzSKT.js`),[]));var N=`import { useState } from "react"
import { FileTrigger } from "@kitora/upload/ui"

export function FileTriggerDefault() {
  const [names, setNames] = useState<readonly string[]>([])
  return (
    <div className="flex flex-col items-start gap-2">
      <FileTrigger onSelect={(accepted) => setNames(accepted.map((file) => file.name))} />
      <p className="text-xs text-muted-foreground" aria-live="polite">
        {names.length > 0 ? \`Picked: \${names.join(", ")}\` : "No file picked yet"}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>o(()=>import(`./default-CqRg9dTi.js`),[]));var P=`import { useState } from "react"
import { Camera, FolderUp } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { FileTrigger } from "@kitora/upload/ui"

export function FileTriggerFolderAndCamera() {
  const [summary, setSummary] = useState("Nothing picked yet")
  return (
    <div className="flex flex-col items-start gap-3">
      <div className="flex flex-wrap gap-2">
        <FileTrigger directory onSelect={(files) => setSummary(\`\${files.length} file(s) from \${files[0]?.webkitRelativePath.split("/")[0] ?? "the folder"}\`)}>
          <Button type="button" variant="outline">
            <FolderUp /> Upload a folder
          </Button>
        </FileTrigger>
        <FileTrigger accept="image/*" capture="environment" multiple={false} onSelect={(files) => setSummary(files[0] ? \`Photo: \${files[0].name}\` : "No photo")}>
          <Button type="button" variant="outline">
            <Camera /> Take a photo
          </Button>
        </FileTrigger>
      </div>
      <p className="text-xs text-muted-foreground" aria-live="polite">
        {summary}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>o(()=>import(`./folder-and-camera-v7HDHQUf.js`),[]));var F=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { FileTrigger } from "@kitora/upload/ui"

export function FileTriggerInAForm() {
  const [chosen, setChosen] = useState<string | null>(null)
  const [posted, setPosted] = useState<string | null>(null)
  return (
    <form
      className="flex flex-col items-start gap-3"
      onSubmit={(event) => {
        event.preventDefault()
        const file = new FormData(event.currentTarget).get("resume")
        setPosted(file instanceof File && file.name ? \`resume = \${file.name}\` : "no file posted")
      }}
    >
      <div className="flex items-center gap-2">
        <FileTrigger name="resume" accept=".pdf" multiple={false} onSelect={(files) => setChosen(files[0]?.name ?? null)}>
          <Button type="button" variant="outline">
            Attach résumé (PDF)
          </Button>
        </FileTrigger>
        <span className="text-xs text-muted-foreground">{chosen ?? "No file"}</span>
      </div>
      <Button type="submit" size="sm">
        Apply
      </Button>
      {posted ? (
        <p role="status" className="text-xs text-muted-foreground">
          Posted {posted}
        </p>
      ) : null}
    </form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>o(()=>import(`./in-a-form-Brk5yMXw.js`),[]));var I=`import { useState } from "react"
import { ImageUp } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { FileTrigger, RejectionList } from "@kitora/upload/ui"
import type { Rejection } from "@kitora/upload/core"

export function FileTriggerRules() {
  const [accepted, setAccepted] = useState<readonly File[]>([])
  const [rejected, setRejected] = useState<readonly Rejection<File>[]>([])
  return (
    <div className="flex w-full max-w-md flex-col items-start gap-3">
      <FileTrigger
        accept="image/png,image/jpeg"
        maxSize={2 * 1024 * 1024}
        maxFiles={3}
        onSelect={(ok, refused) => {
          setAccepted(ok)
          setRejected(refused)
        }}
      >
        <Button type="button">
          <ImageUp /> Add photos
        </Button>
      </FileTrigger>
      <p className="text-xs text-muted-foreground">PNG or JPEG, up to 2 MB each, three at most.</p>
      {accepted.length > 0 ? <p className="text-xs">Accepted: {accepted.map((file) => file.name).join(", ")}</p> : null}
      <RejectionList rejections={rejected} onDismiss={() => setRejected([])} className="w-full" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>o(()=>import(`./rules-Be_Q6ZTk.js`),[]));var L={"./demos/file-trigger/compose.tsx":b,"./demos/file-trigger/default.tsx":w,"./demos/file-trigger/folder-and-camera.tsx":E,"./demos/file-trigger/in-a-form.tsx":O,"./demos/file-trigger/rules.tsx":A},R={"./demos/file-trigger/compose.tsx":M,"./demos/file-trigger/default.tsx":N,"./demos/file-trigger/folder-and-camera.tsx":P,"./demos/file-trigger/in-a-form.tsx":F,"./demos/file-trigger/rules.tsx":I};export{L as modules,R as sources};