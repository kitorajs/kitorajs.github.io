import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./file-text-DN2dXqcR.js";import{Ec as r,Uc as i,ri as a,zc as o}from"./index-BZuUy872.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./card-XcfOPVWP.js";import{c as p}from"./validate-DKo_UZcY.js";import{t as m}from"./dropzone-Dd-QY562.js";var h=e({FileUploadComposeAttachmentsCard:()=>v}),g=t(i(),1),_=o();function v(){let[e,t]=(0,g.useState)([]);return(0,_.jsxs)(f,{className:`w-full max-w-sm`,children:[(0,_.jsxs)(s,{children:[(0,_.jsx)(u,{children:`Attachments`}),(0,_.jsx)(d,{children:`PDF or PNG, up to 5 MB each.`})]}),(0,_.jsxs)(l,{className:`space-y-2`,children:[(0,_.jsx)(m,{size:`compact`,accept:`.pdf,.png`,maxSize:5*1024*1024,label:`Attach PDF or PNG files`,onDrop:e=>t(t=>[...t,...e])}),(0,_.jsx)(`ul`,{className:`space-y-1 text-sm`,children:e.map((e,t)=>(0,_.jsxs)(`li`,{className:`flex items-center gap-2 text-muted-foreground`,children:[(0,_.jsx)(n,{className:`size-4 shrink-0`}),(0,_.jsx)(`span`,{className:`min-w-0 flex-1 truncate`,children:e.name}),(0,_.jsx)(`span`,{className:`text-xs tabular-nums`,children:p(e.size)})]},`${e.name}-${t}`))})]}),(0,_.jsx)(c,{children:(0,_.jsxs)(a,{className:`w-full`,disabled:e.length===0,children:[`Upload `,e.length||``]})})]})}var y=e({FileUploadDragDrop:()=>b});function b(){return(0,_.jsx)(`div`,{className:`flex flex-wrap items-center gap-3 justify-stretch`,children:(0,_.jsx)(m,{className:`w-full max-w-md`,accept:`image/*,.pdf`,maxSize:5*1024*1024,title:`Drop images or PDFs`})})}var x=`import { useState } from "react"
import { FileText } from "lucide-react"
import { formatBytes } from "@kitora/upload/core"
import { Dropzone } from "@kitora/upload/ui"
import { Button } from "@kitora/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@kitora/ui/card"

export function FileUploadComposeAttachmentsCard() {
  const [files, setFiles] = useState<readonly File[]>([])
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Attachments</CardTitle>
        <CardDescription>PDF or PNG, up to 5 MB each.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Dropzone size="compact" accept=".pdf,.png" maxSize={5 * 1024 * 1024} label="Attach PDF or PNG files" onDrop={(next) => setFiles((prev) => [...prev, ...next])} />
        <ul className="space-y-1 text-sm">
          {files.map((f, i) => (
            <li key={\`\${f.name}-\${i}\`} className="flex items-center gap-2 text-muted-foreground">
              <FileText className="size-4 shrink-0" />
              <span className="min-w-0 flex-1 truncate">{f.name}</span>
              <span className="text-xs tabular-nums">{formatBytes(f.size)}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled={files.length === 0}>
          Upload {files.length || ""}
        </Button>
      </CardFooter>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>r(()=>import(`./compose-BFhALTPB.js`),[]));var S=`import { Dropzone } from "@kitora/upload/ui"

export function FileUploadDragDrop() {
  return (
    <div className="flex flex-wrap items-center gap-3 justify-stretch">
      <Dropzone className="w-full max-w-md" accept="image/*,.pdf" maxSize={5 * 1024 * 1024} title="Drop images or PDFs" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>r(()=>import(`./drag-drop-DAgp2Yop.js`),[]));var C={"./demos/file-upload/compose.tsx":h,"./demos/file-upload/drag-drop.tsx":y},w={"./demos/file-upload/compose.tsx":x,"./demos/file-upload/drag-drop.tsx":S};export{C as modules,w as sources};