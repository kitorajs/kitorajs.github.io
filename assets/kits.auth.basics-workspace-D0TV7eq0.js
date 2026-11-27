import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./building-2-BQA2hOEM.js";import{s as n}from"./kit-docs-Cf27Kpa-.js";import{Ec as r,Uc as i,_i as a,ri as o,zc as s}from"./index-BZuUy872.js";import{n as c}from"./context-C6mmtqBC.js";import{r as l}from"./sidebar-IYAqkxSJ.js";import{i as u}from"./menus-CLpkMARg.js";import{c as d,n as f,o as p,t as m}from"./-kits.auth.shared-Cf7nNAf_.js";import{A as h,c as g,g as _}from"./field-config-53O_jYuu.js";import{a as v}from"./fields-DyVcPE0c.js";import{a as y,c as b,i as x,s as S,t as C}from"./dialog-BPpaDVGy.js";import"./kit-gallery-BBavj2rC.js";import{t as w}from"./example-B67lLz1F.js";var T=e(i(),1),E=s(),D=`[a-z0-9]+(?:-[a-z0-9]+)*`;function O(e){return e.normalize(`NFKD`).replace(/[̀-ͯ]/g,``).toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``).slice(0,48).replace(/-+$/,``)}var k={name:`Workspace name`,namePlaceholder:`Acme Inc.`,slug:`Workspace address`,slugHint:`Lowercase letters, digits and dashes.`,slugInvalid:`Use lowercase letters, digits and single dashes.`,checking:`Checking the address…`,submit:`Create workspace`,pending:`Creating…`,cancel:`Cancel`,dialogTitle:`Create a workspace`,dialogDescription:`A workspace holds your team's projects and members.`,firstTitle:`Create your first workspace`,firstDescription:`A workspace holds your team's projects and members. You can invite people once it exists.`},A=e=>typeof e==`object`&&!!e&&`field`in e&&`message`in e,j=e=>e instanceof Error?e.message:typeof e==`string`?e:`Something went wrong.`;function M({onSubmit:e,value:t,onValueChange:n,defaultValue:r,error:i,pending:s=!1,slugify:c=O,checkSlug:l,slugPrefix:u,onCancel:f,messages:m,autoFocus:y=!0,className:b}){let x={...k,...m},S=t?.name??r?.name??``,C=t?.slug??r?.slug??c(S),w=h({defaultValues:{name:S,slug:C},value:t,onChange:n?e=>n(e):void 0,validateOn:`blur`,revalidateOn:`change`}),M=_(w,`name`),N=_(w,`slug`),P=(0,T.useRef)(C);(0,T.useEffect)(()=>{let e=w.getValue(`slug`);if(e!==P.current&&e!==``)return;let t=c(M);P.current=t,t!==e&&w.setValue(`slug`,t,{origin:`user`})},[M,w,c]);let F=(0,T.useRef)(l);(0,T.useEffect)(()=>{F.current=l});let I=l!==void 0,[L,R]=(0,T.useState)(!1),[z,B]=(0,T.useState)(null);(0,T.useEffect)(()=>{if(B(null),!I||N===``||!RegExp(`^[a-z0-9]+(?:-[a-z0-9]+)*$`).test(N))return;let e=new AbortController,t=setTimeout(()=>{R(!0),F.current?.(N,e.signal).then(t=>!e.signal.aborted&&B(t??null)).catch(()=>{}).finally(()=>!e.signal.aborted&&R(!1))},350);return()=>{e.abort(),clearTimeout(t),R(!1)}},[N,I]);let[V,H]=(0,T.useState)(null),U=A(i)?i:z?{field:`slug`,message:z}:null,W=U?.field,G=U?.message;(0,T.useEffect)(()=>{w.setServerErrors(W&&G?[{path:W,message:G}]:[])},[w,W,G]);let K=i!=null&&i!==!1&&!A(i)?i:V,[q,J]=(0,T.useState)(!1),Y=s||q;return(0,E.jsxs)(g,{form:w,onSubmit:async t=>{H(null),J(!0);try{let n=F.current?await F.current(t.slug,new AbortController().signal):null;if(n){B(n);return}await e({name:t.name.trim(),slug:t.slug})}catch(e){H(j(e))}finally{J(!1)}},className:a(`flex flex-col gap-4`,b),"data-slot":`create-workspace-form`,"aria-busy":Y||void 0,children:[(0,E.jsx)(v,{name:`name`,label:x.name,placeholder:x.namePlaceholder,required:!0,maxLength:80,autoFocus:y,disabled:Y,autoComplete:`organization`}),(0,E.jsx)(v,{name:`slug`,label:x.slug,description:L?x.checking:x.slugHint,prefix:u,required:!0,maxLength:48,rules:[{rule:`pattern`,value:`^${D}$`,message:x.slugInvalid}],disabled:Y,autoComplete:`off`}),K?(0,E.jsx)(p,{children:K}):null,(0,E.jsxs)(`div`,{className:a(`flex gap-2`,f?`justify-end`:``),children:[f?(0,E.jsx)(o,{type:`button`,variant:`outline`,disabled:Y,onClick:f,children:x.cancel}):null,(0,E.jsx)(d,{pending:Y,pendingLabel:x.pending,className:f?`w-auto`:void 0,children:x.submit})]})]})}function N({open:e,onOpenChange:t,returnFocus:n,title:r,description:i,onSubmit:a,...o}){let s={...k,...o.messages};return(0,E.jsx)(C,{open:e,onOpenChange:e=>t(e),children:(0,E.jsxs)(x,{className:`sm:max-w-md`,finalFocus:n,"data-slot":`create-workspace-dialog`,children:[(0,E.jsxs)(S,{children:[(0,E.jsx)(b,{children:r??s.dialogTitle}),(0,E.jsx)(y,{children:i??s.dialogDescription})]}),e?(0,E.jsx)(M,{...o,onCancel:()=>t(!1),onSubmit:async e=>{await a(e),t(!1)}}):null]})})}function P({logo:e,title:n,description:r,footer:i,pageClassName:o,...s}){let c={...k,...s.messages};return(0,E.jsxs)(`main`,{"data-slot":`first-workspace-page`,className:a(`flex min-h-full w-full flex-col items-center justify-center gap-4 bg-muted/40 p-4`,o),children:[(0,E.jsxs)(f.Root,{className:`max-w-[420px]`,children:[(0,E.jsx)(f.Logo,{children:e??(0,E.jsx)(`span`,{className:`grid size-9 place-items-center rounded-lg bg-primary/10 text-primary`,children:(0,E.jsx)(t,{className:`size-4.5`,"aria-hidden":!0})})}),(0,E.jsxs)(f.Header,{children:[(0,E.jsx)(f.Title,{children:n??c.firstTitle}),(0,E.jsx)(f.Description,{children:r??c.firstDescription})]}),(0,E.jsx)(M,{...s})]}),i?(0,E.jsx)(`div`,{className:`text-[12.5px] text-muted-foreground`,children:i}):null]})}var F=[`acme`,`widgets`],I=(e,t)=>new Promise((n,r)=>{let i=setTimeout(()=>n(F.includes(e)?`This address is already in use`:null),300);t.addEventListener(`abort`,()=>(clearTimeout(i),r(t.reason)))});function L(){let[e,t]=(0,T.useState)(null);return(0,E.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,E.jsx)(M,{slugPrefix:`app.example.com/`,checkSlug:I,autoFocus:!1,onSubmit:async e=>{await new Promise(e=>setTimeout(e,600)),t(e)}}),e?(0,E.jsxs)(`p`,{className:`text-[12.5px] text-muted-foreground`,children:[`Created `,e.name,` at app.example.com/`,e.slug]}):null]})}var R=`import { useState } from "react"
import { CreateWorkspaceForm, type NewWorkspace } from "@kitora/auth/ui"

// stub: replace with your API (GET /workspaces/check?slug=…); "acme" and "widgets" are taken here
const taken = ["acme", "widgets"]
const checkSlug = (slug: string, signal: AbortSignal) =>
  new Promise<string | null>((resolve, reject) => {
    const timer = setTimeout(() => resolve(taken.includes(slug) ? "This address is already in use" : null), 300)
    signal.addEventListener("abort", () => (clearTimeout(timer), reject(signal.reason)))
  })

export function BasicCreateWorkspaceForm() {
  const [created, setCreated] = useState<NewWorkspace | null>(null)
  // type "Acme": the address follows the name and the check marks it taken; edit the address to keep your own
  return (
    <div className="flex flex-col gap-3">
      <CreateWorkspaceForm
        slugPrefix="app.example.com/"
        checkSlug={checkSlug}
        autoFocus={false}
        onSubmit={async (workspace) => {
          // stub: replace with your API (POST /workspaces)
          await new Promise((resolve) => setTimeout(resolve, 600))
          setCreated(workspace)
        }}
      />
      {created ? <p className="text-[12.5px] text-muted-foreground">Created {created.name} at app.example.com/{created.slug}</p> : null}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>r(()=>import(`./workspace-form-CnoaVW8N.js`),[]));var z=[{id:`acme`,name:`Acme`,icon:{initials:`AC`},detail:`12 members`},{id:`widgets`,name:`Widgets Inc`,icon:{initials:`WI`},detail:`3 members`}];function B(){let[e,t]=(0,T.useState)(z),[n,r]=(0,T.useState)(`acme`),[i,a]=(0,T.useState)(!1);return(0,E.jsxs)(c,{band:`desktop`,label:`Workspace`,children:[(0,E.jsx)(`div`,{className:`h-56 w-64 overflow-hidden rounded-lg border`,children:(0,E.jsx)(l,{header:(0,E.jsx)(u,{workspaces:e,current:n,onSelect:r,actions:[{id:`create`,label:`Create workspace`,onSelect:()=>a(!0)}]})})}),(0,E.jsx)(N,{open:i,onOpenChange:a,onSubmit:async({name:n,slug:i})=>{if(e.some(e=>e.id===i))throw Error(`This address is already in use`);await new Promise(e=>setTimeout(e,500)),t(e=>[...e,{id:i,name:n,icon:{initials:n.slice(0,2).toUpperCase()}}]),r(i)}})]})}var V=`import { useState } from "react"
import { CreateWorkspaceDialog, type NewWorkspace } from "@kitora/auth/ui"
import { Sidebar, SidebarProvider, WorkspaceSwitcher, type WorkspaceOption } from "@kitora/sidebar"

const START: readonly WorkspaceOption[] = [
  { id: "acme", name: "Acme", icon: { initials: "AC" }, detail: "12 members" },
  { id: "widgets", name: "Widgets Inc", icon: { initials: "WI" }, detail: "3 members" },
]

export function BasicCreateWorkspaceDialog() {
  const [workspaces, setWorkspaces] = useState(START)
  const [current, setCurrent] = useState("acme")
  const [creating, setCreating] = useState(false)
  const create = async ({ name, slug }: NewWorkspace) => {
    // stub: replace with your API (POST /workspaces); a rejection's message shows in the dialog
    if (workspaces.some((w) => w.id === slug)) throw new Error("This address is already in use")
    await new Promise((resolve) => setTimeout(resolve, 500))
    setWorkspaces((list) => [...list, { id: slug, name, icon: { initials: name.slice(0, 2).toUpperCase() } }])
    setCurrent(slug)
  }
  return (
    <SidebarProvider band="desktop" label="Workspace">
      <div className="h-56 w-64 overflow-hidden rounded-lg border">
        <Sidebar header={<WorkspaceSwitcher workspaces={workspaces} current={current} onSelect={setCurrent} actions={[{ id: "create", label: "Create workspace", onSelect: () => setCreating(true) }]} />} />
      </div>
      {/* the switcher's action opens it; it closes when the workspace is created */}
      <CreateWorkspaceDialog open={creating} onOpenChange={setCreating} onSubmit={create} />
    </SidebarProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>r(()=>import(`./workspace-dialog-BZUdS2Ez.js`),[]));function H(){return(0,E.jsx)(P,{autoFocus:!1,slugPrefix:`app.example.com/`,onSubmit:async()=>{await new Promise(e=>setTimeout(e,600))},footer:(0,E.jsx)(`span`,{children:`Signed in as alice@example.com`})})}var U=`import { FirstWorkspacePage } from "@kitora/auth/ui"

export function BasicFirstWorkspacePage() {
  // what a signed-in user with no workspace sees; it fills its container and centres the card
  return (
    <FirstWorkspacePage
      autoFocus={false}
      slugPrefix="app.example.com/"
      onSubmit={async () => {
        // stub: replace with your API (POST /workspaces), then route to the new workspace
        await new Promise((resolve) => setTimeout(resolve, 600))
      }}
      footer={<span>Signed in as alice@example.com</span>}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>r(()=>import(`./workspace-first-run-DrOIYeF2.js`),[]));function W(){return(0,E.jsxs)(`div`,{children:[(0,E.jsx)(n,{title:`Basics: workspaces`,children:"The other half of the sidebar's `WorkspaceSwitcher`: a create-workspace form on the form engine (a name, an address suggested from it until you edit it, an optional availability check, a server error in place), the same form in a dialog for the switcher's actions, and the first-run page for a signed-in user with no workspace."}),(0,E.jsx)(w,{n:1,title:`The form`,blurb:"Type a name: the address follows it. `checkSlug` runs after a pause and again before submit (try Acme). Enter submits; the form is disabled while it creates.",code:R,children:(0,E.jsx)(m,{testId:`basic-workspace-form`,className:`max-w-md p-4`,children:(0,E.jsx)(L,{})})}),(0,E.jsx)(w,{n:2,title:`From the workspace switcher`,blurb:`Open the switcher and pick Create workspace: the dialog focuses the name, closes when it is created, and the new workspace is selected. A rejected submit shows its message in the dialog.`,code:V,children:(0,E.jsx)(m,{testId:`basic-workspace-dialog`,className:`p-4`,children:(0,E.jsx)(B,{})})}),(0,E.jsx)(w,{n:3,title:`The first-run page`,blurb:"`FirstWorkspacePage`: a centred card with the form, for the first screen after sign-in when there is no workspace yet.",code:U,children:(0,E.jsx)(m,{testId:`basic-workspace-first-run`,height:520,children:(0,E.jsx)(H,{})})})]})}export{W as component};