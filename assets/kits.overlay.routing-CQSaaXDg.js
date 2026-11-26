import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{a as t,i as n,n as r,r as i,t as a}from"./route-overlays-vrIK53ad.js";import{t as o}from"./useRouterState-BWAVAYLS.js";import{s}from"./kit-docs-CvNs0WqT.js";import{t as c}from"./overlay-CZ7x6XuN.js";import{t as l}from"./input-2rqm_FXH.js";import{i as u,n as d,r as f}from"./parts-DCKM_aRr.js";import{Ar as p,Bc as m,Cc as h,Cn as g,Ic as _,Mr as v,Nr as y,Oc as b,kr as x,ti as S,wn as C}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as w}from"./example-CZLJLtIC.js";var T=_();function E(){return(0,T.jsx)(g,{children:(0,T.jsx)(`div`,{className:`flex flex-col gap-1 text-[13px]`,children:(0,T.jsxs)(c,{name:`back-opt-in`,dismiss:{back:!0},children:[(0,T.jsx)(c.Trigger,{render:(0,T.jsx)(S,{size:`sm`,variant:`outline`,className:`w-fit`,"data-demo":`sentinel-open`}),children:`Open dialog`}),(0,T.jsxs)(c.Content,{children:[(0,T.jsx)(u,{title:`Back closes me`,closeButton:!1}),(0,T.jsx)(d,{children:(0,T.jsx)(`p`,{className:`text-muted-foreground`,children:`Press the browser's Back button.`})}),(0,T.jsx)(f,{children:(0,T.jsx)(c.Close,{render:(0,T.jsx)(S,{size:`sm`,variant:`ghost`})})})]})]})})})}var D=`import { EnsureOverlayUi, Overlay, OverlayBody, OverlayFooter, OverlayHeader } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"

// Back closes a non-route dialog: Not in the URL; dismiss.back pushes a history sentinel so Back closes it instead of leaving.

export function BackClosesDialog() {
  return (
    <EnsureOverlayUi>
      <div className="flex flex-col gap-1 text-[13px]">
        <Overlay name="back-opt-in" dismiss={{ back: true }}>
          <Overlay.Trigger render={<Button size="sm" variant="outline" className="w-fit" data-demo="sentinel-open" />}>Open dialog</Overlay.Trigger>
          <Overlay.Content>
            {/* OverlayHeader's title is the dialog's accessible name (aria-labelledby); a bare <h2> names nothing */}
            <OverlayHeader title="Back closes me" closeButton={false} />
            <OverlayBody>
              <p className="text-muted-foreground">Press the browser's Back button.</p>
            </OverlayBody>
            <OverlayFooter>
              <Overlay.Close render={<Button size="sm" variant="ghost" />} />
            </OverlayFooter>
          </Overlay.Content>
        </Overlay>
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>h(()=>import(`./routing-back-CpG7U_Fv.js`),[]));var O=e(m(),1),k=[{id:1,name:`Ada Lovelace`},{id:2,name:`Grace Hopper`},{id:3,name:`Alan Turing`}];function A(e){return typeof e==`number`&&Number.isInteger(e)&&e>0?e:null}function j({params:e}){let t=k.find(t=>t.id===e.userId)?.name??``,[n,r]=(0,O.useState)(t),i=n!==t;p(i?x(()=>!0,{title:`Discard your edits?`,description:`Changes to ${t} are not saved.`}):null);let a=v();return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(u,{title:`Edit user #${e.userId}`}),(0,T.jsxs)(d,{children:[(0,T.jsxs)(`label`,{className:`flex flex-col gap-1`,children:[(0,T.jsx)(`span`,{className:`text-muted-foreground`,children:`Name`}),(0,T.jsx)(l,{className:`h-7`,value:n,onChange:e=>r(e.target.value),"data-demo":`user-name`})]}),(0,T.jsx)(`p`,{className:`mt-2 text-muted-foreground`,"data-demo":`dirty`,children:i?`Unsaved changes: Back, Escape, the close button and leaving the page all ask first.`:`Pristine: every close goes straight through.`})]}),(0,T.jsxs)(f,{children:[(0,T.jsx)(b,{to:`/kits/overlay/features`,className:`mr-auto self-center text-primary underline`,"data-demo":`leave`,children:`Go to another page`}),(0,T.jsx)(S,{size:`sm`,disabled:!i,onClick:()=>a.resolve(n),"data-demo":`save`,children:`Save`})]})]})}var M=t(j,{key:`edit-user`,params:e=>{let t=A(e.id);return t!==null&&k.some(e=>e.id===t)?{userId:t}:null},toSearch:({userId:e})=>({id:e}),surface:`sheet`});function N(){return(0,T.jsx)(g,{children:(0,T.jsx)(r,{overlays:[M],children:(0,T.jsx)(`ul`,{className:`flex gap-3 text-[13px]`,children:k.map(e=>(0,T.jsx)(`li`,{children:(0,T.jsxs)(a,{overlay:M,params:{userId:e.id},className:`text-primary underline-offset-2 hover:underline`,"data-demo":`edit-${e.id}`,children:[`Edit `,e.name]})},e.id))})})})}var P=`import { useState } from "react"
import { Link } from "@tanstack/react-router"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { dirtyGuard, EnsureOverlayUi, OverlayBody, OverlayFooter, OverlayHeader, RouteOverlayLink, RouteOverlays, routeOverlay, useCloseGuard, useOverlay, type RouteOverlayBodyProps, type SearchRecord } from "@kitora/overlay"

// Edit user: deep link, Back, dirty guard (O21 · O22 · O25): open one, type in the name, then press
// Back or follow “Go to another page”: the discard confirm decides.

interface User {
  readonly id: number
  readonly name: string
}

// stub: replace with your API
const USERS: readonly User[] = [
  { id: 1, name: "Ada Lovelace" },
  { id: 2, name: "Grace Hopper" },
  { id: 3, name: "Alan Turing" },
]

/** A positive integer from the URL, else null (the search parser hands back numbers for numeric values). */
function positiveInt(value: unknown): number | null {
  return typeof value === "number" && Number.isInteger(value) && value > 0 ? value : null
}

function EditUserBody({ params }: RouteOverlayBodyProps<{ readonly userId: number }>) {
  const initial = USERS.find((u) => u.id === params.userId)?.name ?? ""
  const [draft, setDraft] = useState(initial)
  const dirty = draft !== initial
  // Back, Escape, the close button and leaving the page all ask while the draft is dirty
  useCloseGuard(dirty ? dirtyGuard(() => true, { title: "Discard your edits?", description: \`Changes to \${initial} are not saved.\` }) : null)
  const ctl = useOverlay<string>()
  return (
    <>
      <OverlayHeader title={\`Edit user #\${params.userId}\`} />
      <OverlayBody>
        <label className="flex flex-col gap-1">
          <span className="text-muted-foreground">Name</span>
          <Input className="h-7" value={draft} onChange={(e) => setDraft(e.target.value)} data-demo="user-name" />
        </label>
        <p className="mt-2 text-muted-foreground" data-demo="dirty">
          {dirty ? "Unsaved changes: Back, Escape, the close button and leaving the page all ask first." : "Pristine: every close goes straight through."}
        </p>
      </OverlayBody>
      <OverlayFooter>
        <Link to="/kits/overlay/features" className="mr-auto self-center text-primary underline" data-demo="leave">
          Go to another page
        </Link>
        <Button size="sm" disabled={!dirty} onClick={() => ctl.resolve(draft)} data-demo="save">
          Save
        </Button>
      </OverlayFooter>
    </>
  )
}

// open while the URL says ?overlay=edit-user&id=2: a deep link that survives reload, and Back closes it
const editUserOverlay = routeOverlay(EditUserBody, {
  key: "edit-user",
  params: (s: SearchRecord) => {
    const userId = positiveInt(s.id)
    return userId !== null && USERS.some((u) => u.id === userId) ? { userId } : null
  },
  toSearch: ({ userId }) => ({ id: userId }),
  surface: "sheet",
})

export function UserList() {
  return (
    <EnsureOverlayUi>
      <RouteOverlays overlays={[editUserOverlay]}>
        <ul className="flex gap-3 text-[13px]">
          {USERS.map((u) => (
            <li key={u.id}>
              <RouteOverlayLink overlay={editUserOverlay} params={{ userId: u.id }} className="text-primary underline-offset-2 hover:underline" data-demo={\`edit-\${u.id}\`}>
                Edit {u.name}
              </RouteOverlayLink>
            </li>
          ))}
        </ul>
      </RouteOverlays>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>h(()=>import(`./routing-edit-user-C8Pb9xck.js`),[]));var F=[{id:1,title:`Harbour at dawn`,hue:200},{id:2,title:`Desert road`,hue:30},{id:3,title:`Pine ridge`,hue:140},{id:4,title:`Night market`,hue:280}];function I(e){return typeof e==`number`&&Number.isInteger(e)&&e>0?e:null}function L({params:e}){let t=F.find(t=>t.id===e.id);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(u,{title:t?t.title:`No photo #${e.id}`}),t?(0,T.jsxs)(`figure`,{className:`mx-auto flex w-full max-w-xl flex-col gap-2 p-4`,"data-demo":`photo`,children:[(0,T.jsx)(`div`,{className:`aspect-[4/3] w-full rounded`,style:{background:`oklch(0.7 0.12 ${t.hue})`}}),(0,T.jsxs)(`figcaption`,{className:`text-sm text-muted-foreground tabular-nums`,children:[`#`,t.id]})]}):null]})}var R=n(t(L,{key:`photo`,params:e=>{let t=I(e.pid);return t===null?null:{id:t}},toSearch:({id:e})=>({pid:e}),surface:`lightbox`}),({id:e})=>({to:`/kits/overlay/routing/photo/$photoId`,params:{photoId:String(e)},unmaskOnReload:!0}));function z(){return(0,T.jsx)(g,{children:(0,T.jsx)(r,{overlays:[R],children:(0,T.jsx)(`div`,{className:`grid grid-cols-4 gap-2 text-[13px]`,children:F.map(e=>(0,T.jsxs)(a,{overlay:R,params:{id:e.id},className:`block`,"data-demo":`photo-${e.id}`,children:[(0,T.jsx)(`div`,{className:`aspect-square rounded`,style:{background:`oklch(0.7 0.12 ${e.hue})`}}),(0,T.jsx)(`span`,{className:`text-muted-foreground`,children:e.title})]},e.id))})})})}var B=`import { EnsureOverlayUi, maskedOverlay, OverlayHeader, RouteOverlayLink, RouteOverlays, routeOverlay, type RouteOverlayBodyProps, type SearchRecord } from "@kitora/overlay"

// Masked photo route (O23): a click opens the lightbox over this list while the address bar shows the
// photo's own page; reloading that URL renders the page instead.

// stub: replace with your API
const PHOTOS: readonly { readonly id: number; readonly title: string; readonly hue: number }[] = [
  { id: 1, title: "Harbour at dawn", hue: 200 },
  { id: 2, title: "Desert road", hue: 30 },
  { id: 3, title: "Pine ridge", hue: 140 },
  { id: 4, title: "Night market", hue: 280 },
]

function positiveInt(value: unknown): number | null {
  return typeof value === "number" && Number.isInteger(value) && value > 0 ? value : null
}

function PhotoBody({ params }: RouteOverlayBodyProps<{ readonly id: number }>) {
  const photo = PHOTOS.find((p) => p.id === params.id)
  return (
    <>
      <OverlayHeader title={photo ? photo.title : \`No photo #\${params.id}\`} />
      {photo ? (
        <figure className="mx-auto flex w-full max-w-xl flex-col gap-2 p-4" data-demo="photo">
          <div className="aspect-[4/3] w-full rounded" style={{ background: \`oklch(0.7 0.12 \${photo.hue})\` }} />
          <figcaption className="text-sm text-muted-foreground tabular-nums">#{photo.id}</figcaption>
        </figure>
      ) : null}
    </>
  )
}

// the lightbox opens over the list; the address bar shows /kits/overlay/routing/photo/<id>, which a
// reload renders as that page (the app's route for it)
const photoOverlay = maskedOverlay(
  routeOverlay(PhotoBody, {
    key: "photo",
    params: (s: SearchRecord) => {
      const id = positiveInt(s.pid)
      return id !== null ? { id } : null
    },
    toSearch: ({ id }) => ({ pid: id }),
    surface: "lightbox",
  }),
  ({ id }) => ({ to: "/kits/overlay/routing/photo/$photoId", params: { photoId: String(id) }, unmaskOnReload: true }),
)

export function PhotoGrid() {
  return (
    <EnsureOverlayUi>
      <RouteOverlays overlays={[photoOverlay]}>
        <div className="grid grid-cols-4 gap-2 text-[13px]">
          {PHOTOS.map((p) => (
            <RouteOverlayLink key={p.id} overlay={photoOverlay} params={{ id: p.id }} className="block" data-demo={\`photo-\${p.id}\`}>
              <div className="aspect-square rounded" style={{ background: \`oklch(0.7 0.12 \${p.hue})\` }} />
              <span className="text-muted-foreground">{p.title}</span>
            </RouteOverlayLink>
          ))}
        </div>
      </RouteOverlays>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>h(()=>import(`./routing-photo-Cj31_gC3.js`),[]));var V=[{id:1,name:`Acme Corp`,status:`active`},{id:2,name:`Globex`,status:`trial`},{id:3,name:`Initech`,status:`churned`},{id:4,name:`Umbrella`,status:`active`},{id:5,name:`Hooli`,status:`trial`}];function H(e){return typeof e==`number`&&Number.isInteger(e)&&e>0?e:null}function U({params:e}){let t=i(W),n=(0,O.useId)(),r=V.findIndex(t=>t.id===e.id),a=V[r],o=V[r-1],s=V[r+1];return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(u,{title:`${a?a.name:`Unknown`} #${e.id}`}),(0,T.jsxs)(d,{children:[(0,T.jsxs)(`p`,{className:`text-muted-foreground`,"data-demo":`record-title`,children:[`Status: `,a?.status]}),(0,T.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Body mount `,(0,T.jsx)(`code`,{"data-demo":`mount-id`,children:n}),` stays the same across prev/next (no remount, no re-animation).`]})]}),(0,T.jsxs)(f,{children:[(0,T.jsx)(S,{size:`sm`,variant:`outline`,disabled:!o,onClick:()=>o&&t.setParams({id:o.id}),"data-demo":`prev`,children:`← Prev`}),(0,T.jsx)(S,{size:`sm`,variant:`outline`,disabled:!s,onClick:()=>s&&t.setParams({id:s.id}),"data-demo":`next`,children:`Next →`})]})]})}var W=t(U,{key:`record`,params:e=>{let t=H(e.rid);return t!==null&&V.some(e=>e.id===t)?{id:t}:null},toSearch:({id:e})=>({rid:e}),surface:`sheet`});function G(){return(0,T.jsx)(g,{children:(0,T.jsx)(r,{overlays:[W],children:(0,T.jsx)(`table`,{className:`w-full max-w-md text-[13px]`,children:(0,T.jsx)(`tbody`,{children:V.map(e=>(0,T.jsxs)(`tr`,{className:`border-b`,children:[(0,T.jsxs)(`td`,{className:`py-1 text-muted-foreground tabular-nums`,children:[`#`,e.id]}),(0,T.jsx)(`td`,{className:`py-1`,children:(0,T.jsx)(a,{overlay:W,params:{id:e.id},className:`text-primary underline-offset-2 hover:underline`,"data-demo":`record-${e.id}`,children:e.name})}),(0,T.jsx)(`td`,{className:`py-1 text-muted-foreground`,children:e.status})]},e.id))})})})})}var K=`import { useId } from "react"
import { Button } from "@kitora/ui/button"
import { EnsureOverlayUi, OverlayBody, OverlayFooter, OverlayHeader, RouteOverlayLink, RouteOverlays, routeOverlay, useRouteOverlay, type RouteOverlayBodyProps, type SearchRecord } from "@kitora/overlay"

// Record sheet with prev/next (O24): Prev and Next change the URL; the open body re-renders in place
// (its mount id stays the same).

// stub: replace with your API
const RECORDS: readonly { readonly id: number; readonly name: string; readonly status: string }[] = [
  { id: 1, name: "Acme Corp", status: "active" },
  { id: 2, name: "Globex", status: "trial" },
  { id: 3, name: "Initech", status: "churned" },
  { id: 4, name: "Umbrella", status: "active" },
  { id: 5, name: "Hooli", status: "trial" },
]

function positiveInt(value: unknown): number | null {
  return typeof value === "number" && Number.isInteger(value) && value > 0 ? value : null
}

function RecordBody({ params }: RouteOverlayBodyProps<{ readonly id: number }>) {
  const nav = useRouteOverlay(recordOverlay)
  // stable for one mount: if prev/next remounted the body, this value would change
  const mountId = useId()
  const index = RECORDS.findIndex((r) => r.id === params.id)
  const record = RECORDS[index]
  const prev = RECORDS[index - 1]
  const next = RECORDS[index + 1]
  return (
    <>
      <OverlayHeader title={\`\${record ? record.name : "Unknown"} #\${params.id}\`} />
      <OverlayBody>
        <p className="text-muted-foreground" data-demo="record-title">
          Status: {record?.status}
        </p>
        <p className="text-muted-foreground">
          Body mount <code data-demo="mount-id">{mountId}</code> stays the same across prev/next (no remount, no re-animation).
        </p>
      </OverlayBody>
      <OverlayFooter>
        {/* setParams replaces the URL: the same body re-renders */}
        <Button size="sm" variant="outline" disabled={!prev} onClick={() => prev && nav.setParams({ id: prev.id })} data-demo="prev">
          ← Prev
        </Button>
        <Button size="sm" variant="outline" disabled={!next} onClick={() => next && nav.setParams({ id: next.id })} data-demo="next">
          Next →
        </Button>
      </OverlayFooter>
    </>
  )
}

const recordOverlay = routeOverlay(RecordBody, {
  key: "record",
  params: (s: SearchRecord) => {
    const id = positiveInt(s.rid)
    return id !== null && RECORDS.some((r) => r.id === id) ? { id } : null
  },
  toSearch: ({ id }) => ({ rid: id }),
  surface: "sheet",
})

export function RecordTable() {
  return (
    <EnsureOverlayUi>
      <RouteOverlays overlays={[recordOverlay]}>
        <table className="w-full max-w-md text-[13px]">
          <tbody>
            {RECORDS.map((r) => (
              <tr key={r.id} className="border-b">
                <td className="py-1 text-muted-foreground tabular-nums">#{r.id}</td>
                <td className="py-1">
                  <RouteOverlayLink overlay={recordOverlay} params={{ id: r.id }} className="text-primary underline-offset-2 hover:underline" data-demo={\`record-\${r.id}\`}>
                    {r.name}
                  </RouteOverlayLink>
                </td>
                <td className="py-1 text-muted-foreground">{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </RouteOverlays>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>h(()=>import(`./routing-record-BPY_vzVF.js`),[]));function q(){return(0,T.jsx)(C,{children:(0,T.jsx)(J,{})})}function J(){let e=o({select:e=>e.location.maskedLocation?.href??e.location.href}),t=y();return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(s,{title:`Route-driven overlays`,children:[`Every overlay below is open because the URL says so: copy the address bar, reload, or press Back. URL `,(0,T.jsx)(`code`,{className:`break-all`,"data-demo":`url`,children:e}),` · open entries`,` `,(0,T.jsx)(`code`,{"data-demo":`entries`,children:t.map(e=>`${e.name??e.id}:${e.status}`).join(`, `)||`none`})]}),(0,T.jsx)(w,{n:1,title:`Edit user: deep link, Back, dirty guard (O21 · O22 · O25)`,blurb:`Open one, type in the name, then press Back or follow “Go to another page”: the discard confirm decides.`,code:P,children:(0,T.jsx)(N,{})}),(0,T.jsx)(w,{n:2,title:`Record sheet with prev/next (O24)`,blurb:`Prev and Next change the URL; the open body re-renders in place (its mount id stays the same).`,code:K,children:(0,T.jsx)(G,{})}),(0,T.jsx)(w,{n:3,title:`Masked photo route (O23)`,blurb:`A click opens the lightbox over this list while the address bar shows the photo page; reloading that URL renders the page.`,code:B,children:(0,T.jsx)(z,{})}),(0,T.jsx)(w,{n:4,title:`Back closes a non-route dialog`,blurb:`Not in the URL; dismiss.back pushes a history sentinel so Back closes it instead of leaving.`,code:D,children:(0,T.jsx)(E,{})})]})}export{q as component};