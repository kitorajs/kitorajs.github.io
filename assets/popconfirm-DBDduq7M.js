import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./trash-2-0f767-k3.js";import{t as r}from"./triangle-alert-BxmJxCv7.js";import{t as i}from"./popconfirm-VVngGN-K.js";import{Bc as a,Cc as o,Cn as s,Ic as c,ti as l}from"./index-9y5uwRd3.js";import{t as u}from"./badge-CMT8Lr82.js";import{a as d,n as f,o as p,t as m}from"./card-AZ_23TG_.js";var h=e({PopconfirmAsyncAction:()=>y}),g=t(a(),1),_=c(),v=0;function y(){let[e,t]=(0,g.useState)(`Key active`);return(0,_.jsx)(s,{children:(0,_.jsxs)(`div`,{className:`flex items-center gap-3 text-[13px]`,children:[(0,_.jsx)(i,{trigger:(0,_.jsx)(l,{size:`sm`,variant:`outline`,children:`Revoke key`}),title:`Revoke this API key?`,description:`Apps that use it stop working at once.`,icon:(0,_.jsx)(r,{}),destructive:!0,confirmLabel:`Revoke`,action:async()=>{if(await new Promise(e=>setTimeout(e,900)),v+=1,v%2==1)throw Error(`The key is in use by a running deploy. Try again.`)},onConfirm:()=>t(`Key revoked`),side:`bottom`}),(0,_.jsx)(`span`,{className:`text-muted-foreground`,"aria-live":`polite`,children:e})]})})}var b=e({PopconfirmCompose:()=>S}),x=[{name:`Ada Lovelace`,role:`Owner`},{name:`Alan Turing`,role:`Editor`},{name:`Grace Hopper`,role:`Viewer`}];function S(){let[e,t]=(0,g.useState)(x);return(0,_.jsx)(s,{children:(0,_.jsxs)(m,{className:`w-full max-w-sm`,children:[(0,_.jsx)(d,{children:(0,_.jsx)(p,{children:`Team`})}),(0,_.jsx)(f,{className:`flex flex-col gap-2 text-[13px]`,children:e.map(e=>(0,_.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,_.jsx)(`span`,{className:`flex-1 truncate`,children:e.name}),(0,_.jsx)(u,{variant:`secondary`,children:e.role}),(0,_.jsx)(i,{trigger:(0,_.jsx)(l,{size:`sm`,variant:`ghost`,disabled:e.role===`Owner`,children:`Remove`}),title:`Remove ${e.name}?`,description:`They lose access to every project in this team.`,destructive:!0,confirmLabel:`Remove`,onConfirm:()=>t(t=>t.filter(t=>t.name!==e.name))})]},e.name))})]})})}var C=e({PopconfirmDefault:()=>w});function w(){let[e,t]=(0,g.useState)([`Q3 report.pdf`,`Invoice 1042.pdf`,`Roadmap.key`]);return(0,_.jsx)(s,{children:(0,_.jsxs)(`ul`,{className:`flex w-full max-w-xs flex-col divide-y rounded-lg border text-[13px]`,"aria-label":`Files`,children:[e.map(e=>(0,_.jsxs)(`li`,{className:`flex items-center justify-between gap-2 px-3 py-1.5`,children:[(0,_.jsx)(`span`,{className:`truncate`,children:e}),(0,_.jsx)(i,{trigger:(0,_.jsx)(l,{size:`icon-sm`,variant:`ghost`,"aria-label":`Delete ${e}`,children:(0,_.jsx)(n,{})}),title:`Delete ${e}?`,description:`It moves to the trash for 30 days.`,destructive:!0,confirmLabel:`Delete`,onConfirm:()=>t(t=>t.filter(t=>t!==e))})]},e)),e.length===0?(0,_.jsx)(`li`,{className:`px-3 py-2 text-muted-foreground`,children:`No files left.`}):null]})})}var T=`import { useState } from "react"
import { TriangleAlert } from "lucide-react"
import { EnsureOverlayUi, Popconfirm } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"

let attempts = 0

// An async \`action\` keeps the confirm open and busy while it runs (Escape and outside presses wait), shows a failure inline with Retry,
// and closes only once it succeeds. This one fails the first time.
export function PopconfirmAsyncAction() {
  const [status, setStatus] = useState("Key active")
  const revoke = async () => {
    await new Promise((resolve) => setTimeout(resolve, 900))
    attempts += 1
    if (attempts % 2 === 1) throw new Error("The key is in use by a running deploy. Try again.")
  }
  return (
    <EnsureOverlayUi>
      <div className="flex items-center gap-3 text-[13px]">
        <Popconfirm
          trigger={
            <Button size="sm" variant="outline">
              Revoke key
            </Button>
          }
          title="Revoke this API key?"
          description="Apps that use it stop working at once."
          icon={<TriangleAlert />}
          destructive
          confirmLabel="Revoke"
          action={revoke}
          onConfirm={() => setStatus("Key revoked")}
          side="bottom"
        />
        <span className="text-muted-foreground" aria-live="polite">
          {status}
        </span>
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>o(()=>import(`./async-action-BpjtMd6z.js`),[]));var E=`import { useState } from "react"
import { EnsureOverlayUi, Popconfirm } from "@kitora/overlay"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@kitora/ui/card"

const MEMBERS = [
  { name: "Ada Lovelace", role: "Owner" },
  { name: "Alan Turing", role: "Editor" },
  { name: "Grace Hopper", role: "Viewer" },
] as const

// A team Card: each member row has a Badge for the role and a Remove button that asks with a Popconfirm first.
export function PopconfirmCompose() {
  const [members, setMembers] = useState<readonly (typeof MEMBERS)[number][]>(MEMBERS)
  return (
    <EnsureOverlayUi>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Team</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 text-[13px]">
          {members.map((member) => (
            <div key={member.name} className="flex items-center gap-2">
              <span className="flex-1 truncate">{member.name}</span>
              <Badge variant="secondary">{member.role}</Badge>
              <Popconfirm
                trigger={
                  <Button size="sm" variant="ghost" disabled={member.role === "Owner"}>
                    Remove
                  </Button>
                }
                title={\`Remove \${member.name}?\`}
                description="They lose access to every project in this team."
                destructive
                confirmLabel="Remove"
                onConfirm={() => setMembers((all) => all.filter((m) => m.name !== member.name))}
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>o(()=>import(`./compose-CcUObrW0.js`),[]));var D=`import { useState } from "react"
import { Trash2 } from "lucide-react"
import { EnsureOverlayUi, Popconfirm } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"

// A small confirm next to the button that asked: focus starts on Cancel, Escape or a press outside cancels, and focus returns to the trigger.
export function PopconfirmDefault() {
  const [rows, setRows] = useState(["Q3 report.pdf", "Invoice 1042.pdf", "Roadmap.key"])
  return (
    <EnsureOverlayUi>
      <ul className="flex w-full max-w-xs flex-col divide-y rounded-lg border text-[13px]" aria-label="Files">
        {rows.map((name) => (
          <li key={name} className="flex items-center justify-between gap-2 px-3 py-1.5">
            <span className="truncate">{name}</span>
            <Popconfirm
              trigger={
                <Button size="icon-sm" variant="ghost" aria-label={\`Delete \${name}\`}>
                  <Trash2 />
                </Button>
              }
              title={\`Delete \${name}?\`}
              description="It moves to the trash for 30 days."
              destructive
              confirmLabel="Delete"
              onConfirm={() => setRows((all) => all.filter((row) => row !== name))}
            />
          </li>
        ))}
        {rows.length === 0 ? <li className="px-3 py-2 text-muted-foreground">No files left.</li> : null}
      </ul>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>o(()=>import(`./default-C3ktUVJB.js`),[]));var O={"./demos/popconfirm/async-action.tsx":h,"./demos/popconfirm/compose.tsx":b,"./demos/popconfirm/default.tsx":C},k={"./demos/popconfirm/async-action.tsx":T,"./demos/popconfirm/compose.tsx":E,"./demos/popconfirm/default.tsx":D};export{O as modules,k as sources};