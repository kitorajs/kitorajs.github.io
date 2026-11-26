import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./overlay-CZ7x6XuN.js";import{t as r}from"./input-2rqm_FXH.js";import{i,n as a,r as o}from"./parts-DCKM_aRr.js";import{i as s,l as c}from"./opener-CB2z166a.js";import{Bc as l,Cc as u,Cn as d,Ic as f,Mr as p,ti as m}from"./index-9y5uwRd3.js";import{t as h}from"./label-BCdE7eBP.js";var g=e({ModalDeclarative:()=>y}),_=t(l(),1),v=f();function y(){let[e,t]=(0,_.useState)(`—`);return(0,v.jsx)(d,{children:(0,v.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3 text-[13px]`,children:[(0,v.jsxs)(n,{name:`welcome`,onResult:e=>t(e.status===`resolved`?`got it`:`dismissed (${e.reason})`),children:[(0,v.jsx)(n.Trigger,{render:(0,v.jsx)(m,{size:`sm`}),children:`Open modal`}),(0,v.jsxs)(n.Content,{children:[(0,v.jsx)(i,{title:`Welcome back`,description:`You have 3 new comments since your last visit.`}),(0,v.jsx)(a,{children:(0,v.jsx)(`p`,{className:`text-[13px]`,children:`Comments are listed on each task. Escape, the backdrop and the × close this too.`})}),(0,v.jsx)(o,{children:(0,v.jsx)(n.Close,{render:(0,v.jsx)(m,{size:`sm`,variant:`outline`}),children:`Later`})})]})]}),(0,v.jsxs)(`span`,{className:`text-muted-foreground`,children:[`last: `,(0,v.jsx)(`b`,{className:`text-foreground`,children:e})]})]})})}var b=e({ModalOpenFromCode:()=>w});function x({current:e}){let t=p(),n=s(),c=(0,_.useId)(),l=(0,_.useId)(),[u,d]=(0,_.useState)(e),f=async()=>{await n.confirm({title:`Delete ${e}?`,description:`The project and its deploys are removed.`,destructive:!0,confirmLabel:`Delete`})&&t.resolve(null)};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i,{title:`Rename project`}),(0,v.jsx)(a,{children:(0,v.jsxs)(`form`,{id:c,className:`flex flex-col gap-1.5`,onSubmit:e=>{e.preventDefault(),u.trim()!==``&&t.resolve(u.trim())},children:[(0,v.jsx)(h,{htmlFor:l,children:`Name`}),(0,v.jsx)(r,{id:l,className:`h-7`,autoFocus:!0,value:u,onChange:e=>d(e.currentTarget.value)})]})}),(0,v.jsxs)(o,{children:[(0,v.jsx)(m,{size:`sm`,variant:`ghost`,className:`mr-auto text-destructive`,onClick:()=>void f(),children:`Delete…`}),(0,v.jsx)(m,{size:`sm`,type:`submit`,form:c,children:`Save`})]})]})}var S=c({name:`rename-project`,render:({current:e})=>(0,v.jsx)(x,{current:e})});function C(){let e=s(),[t,n]=(0,_.useState)(`acme-web`),r=async t=>{let r=await e.open(S,{current:t}).value();r!==void 0&&n(r)};return(0,v.jsxs)(`div`,{className:`flex w-full max-w-sm items-center justify-between gap-2 rounded-lg border border-border bg-card px-3 py-2 text-[13px]`,children:[(0,v.jsx)(`span`,{className:t===null?`text-muted-foreground`:`font-medium`,children:t??`Project deleted`}),t===null?(0,v.jsx)(m,{size:`sm`,variant:`outline`,onClick:()=>n(`acme-web`),children:`Restore`}):(0,v.jsx)(m,{size:`sm`,variant:`outline`,onClick:()=>void r(t),children:`Rename…`})]})}function w(){return(0,v.jsx)(d,{children:(0,v.jsx)(C,{})})}var T=`import { useState } from "react"
import { EnsureOverlayUi, Overlay, OverlayBody, OverlayFooter, OverlayHeader } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"

export function ModalDeclarative() {
  const [last, setLast] = useState("—")
  return (
    // EnsureOverlayUi mounts the overlay stack only when the app root has not (mount OverlayUiProvider once there)
    <EnsureOverlayUi>
      <div className="flex flex-wrap items-center justify-center gap-3 text-[13px]">
        <Overlay<void, boolean> name="welcome" onResult={(r) => setLast(r.status === "resolved" ? "got it" : \`dismissed (\${r.reason})\`)}>
          <Overlay.Trigger render={<Button size="sm" />}>Open modal</Overlay.Trigger>
          <Overlay.Content>
            <OverlayHeader title="Welcome back" description="You have 3 new comments since your last visit." />
            <OverlayBody>
              <p className="text-[13px]">Comments are listed on each task. Escape, the backdrop and the × close this too.</p>
            </OverlayBody>
            <OverlayFooter>
              <Overlay.Close render={<Button size="sm" variant="outline" />}>Later</Overlay.Close>
            </OverlayFooter>
          </Overlay.Content>
        </Overlay>
        <span className="text-muted-foreground">
          last: <b className="text-foreground">{last}</b>
        </span>
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>u(()=>import(`./declarative-Dtr1qGwj.js`),[]));var E=`import { useId, useState } from "react"
import { defineOverlay, EnsureOverlayUi, OverlayBody, OverlayFooter, OverlayHeader, useOverlay, useOverlays } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { Label } from "@kitora/ui/label"

/** The rename form: resolves with the new name; Delete… stacks a confirm on top of it. */
function RenameBody({ current }: { current: string }) {
  const ctl = useOverlay<string | null>()
  const overlays = useOverlays()
  const formId = useId()
  const inputId = useId()
  const [name, setName] = useState(current)
  const remove = async () => {
    // a second modal on the stack: Escape closes only the confirm, the rename stays open under it
    if (await overlays.confirm({ title: \`Delete \${current}?\`, description: "The project and its deploys are removed.", destructive: true, confirmLabel: "Delete" })) ctl.resolve(null)
  }
  return (
    <>
      <OverlayHeader title="Rename project" />
      <OverlayBody>
        <form
          id={formId}
          className="flex flex-col gap-1.5"
          onSubmit={(e) => {
            e.preventDefault()
            if (name.trim() !== "") ctl.resolve(name.trim())
          }}
        >
          <Label htmlFor={inputId}>Name</Label>
          <Input id={inputId} className="h-7" autoFocus value={name} onChange={(e) => setName(e.currentTarget.value)} />
        </form>
      </OverlayBody>
      <OverlayFooter>
        <Button size="sm" variant="ghost" className="mr-auto text-destructive" onClick={() => void remove()}>
          Delete…
        </Button>
        <Button size="sm" type="submit" form={formId}>
          Save
        </Button>
      </OverlayFooter>
    </>
  )
}

// Declared once, typed: props in ({ current }), result out (the new name, or null for deleted).
const RenameProject = defineOverlay<{ current: string }, string | null>({
  name: "rename-project",
  render: ({ current }) => <RenameBody current={current} />,
})

function ProjectRow() {
  const overlays = useOverlays()
  const [project, setProject] = useState<string | null>("acme-web")
  const rename = async (current: string) => {
    // value(): the resolved value, or undefined when the modal was dismissed
    const next = await overlays.open(RenameProject, { current }).value()
    if (next !== undefined) setProject(next)
  }
  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-2 rounded-lg border border-border bg-card px-3 py-2 text-[13px]">
      <span className={project === null ? "text-muted-foreground" : "font-medium"}>{project ?? "Project deleted"}</span>
      {project === null ? (
        <Button size="sm" variant="outline" onClick={() => setProject("acme-web")}>
          Restore
        </Button>
      ) : (
        <Button size="sm" variant="outline" onClick={() => void rename(project)}>
          Rename…
        </Button>
      )}
    </div>
  )
}

export function ModalOpenFromCode() {
  return (
    <EnsureOverlayUi>
      <ProjectRow />
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>u(()=>import(`./open-from-code-V3tHQJSW.js`),[]));var D={"./demos/modal/declarative.tsx":g,"./demos/modal/open-from-code.tsx":b},O={"./demos/modal/declarative.tsx":T,"./demos/modal/open-from-code.tsx":E};export{D as modules,O as sources};