import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{a as t,n,t as r}from"./route-overlays-DR4JVtu5.js";import{s as i}from"./kit-docs-Cf27Kpa-.js";import{t as a}from"./handle-BCLyqnIX.js";import{t as o}from"./overlay-DqjGYZmU.js";import{i as s,n as c,r as l}from"./parts-ZglKsaYF.js";import{t as u}from"./inline-surface-Ce6i6aWR.js";import{n as d}from"./presets-B7T12Ync.js";import{i as f,l as p,r as m,t as h}from"./opener-6ftLcBPy.js";import{Ec as g,En as _,Fr as v,Jr as y,Pr as b,Tn as x,Uc as S,Yr as C,fr as w,ri as T,zc as E}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as D}from"./example-B67lLz1F.js";var O=e(S(),1),k=E(),A={id:7,name:`Website redesign`,tasks:42},j=`archived`;function M(e){return e.status===`resolved`?`resolved ${JSON.stringify(e.value)}`:`dismissed (${e.reason})`}function N({id:e}){let t=b(),n=v().find(e=>e.id===t.id)?.driver??`?`;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(s,{title:`Project #${e} — ${A.name}`,description:`${A.tasks} tasks`}),(0,k.jsx)(c,{children:(0,k.jsxs)(`p`,{children:[`Opened by driver `,(0,k.jsx)(`code`,{"data-demo":`driver`,children:n}),`. The body, surface and result type are identical for all three.`]})}),(0,k.jsxs)(l,{children:[(0,k.jsx)(o.Close,{render:(0,k.jsx)(T,{size:`sm`,variant:`outline`}),children:`Cancel`}),(0,k.jsx)(T,{size:`sm`,onClick:()=>t.resolve(j),children:`Archive`})]})]})}var P=p({name:`project`,surface:`sheet`,render:({id:e})=>(0,k.jsx)(N,{id:e})}),F=t(({params:e})=>(0,k.jsx)(N,{id:e.projectId}),{key:`project`,surface:`sheet`,params:e=>typeof e.projectId==`number`?{projectId:e.projectId}:null,toSearch:({projectId:e})=>({projectId:e})}),I=m();function L(){let e=v();return(0,k.jsxs)(`p`,{className:`w-full text-muted-foreground`,"data-demo":`entries`,children:[`Stack: `,e.length===0?`empty`:e.map(e=>`${e.name??e.id} (${e.kind}, ${e.driver}, ${e.status})`).join(` › `)]})}function R(){let e=f(),[t,n]=(0,O.useState)([]),i=e=>n(t=>[e,...t].slice(0,6));return(0,k.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,children:[(0,k.jsxs)(o,{surface:`sheet`,name:`project`,onResult:e=>i(`jsx → ${M(e)}`),children:[(0,k.jsx)(o.Trigger,{render:(0,k.jsx)(T,{size:`sm`,variant:`outline`,"data-demo":`open-jsx`}),children:`JSX`}),(0,k.jsx)(o.Content,{children:(0,k.jsx)(N,{id:A.id})})]}),(0,k.jsx)(T,{size:`sm`,variant:`outline`,"data-demo":`open-imperative`,onClick:async()=>i(`imperative → ${M(await e.open(P,{id:A.id}).result)}`),children:`Imperative`}),(0,k.jsx)(r,{overlay:F,params:{projectId:A.id},className:`inline-flex h-7 items-center rounded-md border px-2.5 text-[13px] hover:bg-muted`,"data-demo":`open-route`,children:`Route (?overlay=project)`}),(0,k.jsx)(T,{size:`sm`,variant:`ghost`,"data-demo":`open-outside`,onClick:()=>{setTimeout(()=>{I.open(P,{id:A.id}).result.then(e=>i(`outside React → ${M(e)}`))},0)},children:`From a timer`}),(0,k.jsx)(L,{}),(0,k.jsx)(`ol`,{className:`w-full font-mono text-[12px] text-muted-foreground`,"data-demo":`log`,children:t.length===0?(0,k.jsx)(`li`,{children:`No results yet.`}):t.map((e,t)=>(0,k.jsx)(`li`,{children:e},`${t}-${e}`))})]})}function z(){return(0,k.jsxs)(x,{children:[(0,k.jsx)(h,{overlays:I}),(0,k.jsx)(n,{overlays:[F],children:(0,k.jsx)(R,{})})]})}var B=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { createOverlays, defineOverlay, EnsureOverlayUi, Overlay, OverlayBody, OverlayFooter, OverlayHeader, OverlaysBinding, RouteOverlayLink, routeOverlay, RouteOverlays, useOverlay, useOverlayEntries, useOverlays, type OverlayResult, type RouteOverlayBodyProps, type SearchRecord } from "@kitora/overlay"

// stub: replace with your API
const PROJECT = { id: 7, name: "Website redesign", tasks: 42 } as const
const ARCHIVED = "archived"
type ProjectResult = typeof ARCHIVED

function describeResult(r: OverlayResult<ProjectResult>): string {
  return r.status === "resolved" ? \`resolved \${JSON.stringify(r.value)}\` : \`dismissed (\${r.reason})\`
}

// The body every driver renders: same header, body and footer, plus the driver the stack recorded for this entry.
function ProjectPanel({ id }: { id: number }) {
  const ctl = useOverlay<ProjectResult>()
  const driver = useOverlayEntries().find((e) => e.id === ctl.id)?.driver ?? "?"
  return (
    <>
      <OverlayHeader title={\`Project #\${id} — \${PROJECT.name}\`} description={\`\${PROJECT.tasks} tasks\`} />
      <OverlayBody>
        <p>
          Opened by driver <code data-demo="driver">{driver}</code>. The body, surface and result type are identical for all three.
        </p>
      </OverlayBody>
      <OverlayFooter>
        <Overlay.Close render={<Button size="sm" variant="outline" />}>Cancel</Overlay.Close>
        <Button size="sm" onClick={() => ctl.resolve(ARCHIVED)}>
          Archive
        </Button>
      </OverlayFooter>
    </>
  )
}

// imperative driver: a typed definition
const ProjectSheet = defineOverlay<{ readonly id: number }, ProjectResult>({
  name: "project",
  surface: "sheet",
  render: ({ id }) => <ProjectPanel id={id} />,
})

// route driver: open while the URL has ?overlay=project&projectId=7
const projectRoute = routeOverlay(({ params }: RouteOverlayBodyProps<{ readonly projectId: number }>) => <ProjectPanel id={params.projectId} />, {
  key: "project",
  surface: "sheet",
  params: (s: SearchRecord) => (typeof s.projectId === "number" ? { projectId: s.projectId } : null),
  toSearch: ({ projectId }) => ({ projectId }),
})

// a module-level opener: callable from code with no hooks once <OverlaysBinding> binds it
const overlays = createOverlays()

// The live stack: every entry with its kind, the driver that opened it and its status.
function StackView() {
  const entries = useOverlayEntries()
  return (
    <p className="w-full text-muted-foreground" data-demo="entries">
      Stack: {entries.length === 0 ? "empty" : entries.map((e) => \`\${e.name ?? e.id} (\${e.kind}, \${e.driver}, \${e.status})\`).join(" › ")}
    </p>
  )
}

function Drivers() {
  const scoped = useOverlays()
  const [log, setLog] = useState<readonly string[]>([])
  const push = (line: string) => setLog((l) => [line, ...l].slice(0, 6))
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]">
      <Overlay<void, ProjectResult> surface="sheet" name="project" onResult={(r) => push(\`jsx → \${describeResult(r)}\`)}>
        <Overlay.Trigger render={<Button size="sm" variant="outline" data-demo="open-jsx" />}>JSX</Overlay.Trigger>
        <Overlay.Content>
          <ProjectPanel id={PROJECT.id} />
        </Overlay.Content>
      </Overlay>
      <Button
        size="sm"
        variant="outline"
        data-demo="open-imperative"
        onClick={async () => push(\`imperative → \${describeResult(await scoped.open(ProjectSheet, { id: PROJECT.id }).result)}\`)}
      >
        Imperative
      </Button>
      <RouteOverlayLink overlay={projectRoute} params={{ projectId: PROJECT.id }} className="inline-flex h-7 items-center rounded-md border px-2.5 text-[13px] hover:bg-muted" data-demo="open-route">
        Route (?overlay=project)
      </RouteOverlayLink>
      <Button
        size="sm"
        variant="ghost"
        data-demo="open-outside"
        onClick={() => {
          // outside React's event: a timer callback has no hooks, the module-level opener still works
          setTimeout(() => {
            void overlays.open(ProjectSheet, { id: PROJECT.id }).result.then((r) => push(\`outside React → \${describeResult(r)}\`))
          }, 0)
        }}
      >
        From a timer
      </Button>
      <StackView />
      <ol className="w-full font-mono text-[12px] text-muted-foreground" data-demo="log">
        {log.length === 0 ? <li>No results yet.</li> : log.map((line, i) => <li key={\`\${i}-\${line}\`}>{line}</li>)}
      </ol>
    </div>
  )
}

export function ThreeDrivers() {
  return (
    <EnsureOverlayUi>
      <OverlaysBinding overlays={overlays} />
      <RouteOverlays overlays={[projectRoute]}>
        <Drivers />
      </RouteOverlays>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>g(()=>import(`./drivers-B6xUFRc4.js`),[]));var V=`ok`;function H(e){return e.status===`resolved`?`resolved ${JSON.stringify(e.value)}`:`dismissed (${e.reason})`}function U({kind:e,surface:t}){let n=b(),r=`${e} × ${t}`,i=(0,k.jsx)(`p`,{className:`text-muted-foreground`,children:`Role, focus and dismissal come from the kind; the look from the surface.`}),a=(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(o.Close,{render:(0,k.jsx)(T,{size:`sm`,variant:`outline`}),children:`Close`}),(0,k.jsx)(T,{size:`sm`,onClick:()=>n.resolve(V),children:`Resolve`})]});return t===`anchored`?(0,k.jsxs)(`div`,{className:`flex w-56 flex-col gap-2`,children:[i,(0,k.jsx)(`div`,{className:`flex justify-end gap-1.5`,children:a})]}):t===`inline`?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(u,{title:r}),(0,k.jsxs)(`div`,{className:`flex flex-col gap-2 p-3`,children:[i,(0,k.jsx)(`div`,{className:`flex gap-1.5`,children:a})]})]}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(s,{title:r}),(0,k.jsx)(c,{children:i}),(0,k.jsx)(l,{children:a})]})}function W(){let e=f(),[t,n]=(0,O.useState)(`—`),r=async(t,r,i)=>{n(`${r} × ${i}: ${H(await e.openRender(()=>(0,k.jsx)(U,{kind:r,surface:i}),{name:`${r}×${i}`,kind:r,surface:i,modal:i===`inline`?!1:void 0,anchor:i===`anchored`?t.currentTarget:void 0,anchoring:{title:`${r} × ${i}`},presentation:i===`inline`?{width:`sm`}:void 0}).result)}`)};return(0,k.jsxs)(`div`,{className:`flex min-w-0 flex-1 flex-col gap-2 text-[13px]`,children:[(0,k.jsx)(`div`,{className:`w-full overflow-x-auto`,children:(0,k.jsxs)(`table`,{className:`w-full min-w-[34rem] text-[12px] tabular-nums`,"data-demo":`matrix`,children:[(0,k.jsx)(`thead`,{children:(0,k.jsxs)(`tr`,{className:`text-left text-muted-foreground`,children:[(0,k.jsx)(`th`,{scope:`col`,className:`py-1 pr-2 font-medium`,children:`kind \\ surface`}),C.map(e=>(0,k.jsx)(`th`,{scope:`col`,className:`px-1 py-1 font-medium`,children:e},e))]})}),(0,k.jsx)(`tbody`,{children:y.map(e=>(0,k.jsxs)(`tr`,{className:`border-t`,children:[(0,k.jsx)(`th`,{scope:`row`,className:`py-1 pr-2 text-left font-medium`,children:e}),C.map(t=>(0,k.jsx)(`td`,{className:`px-1 py-1`,children:(0,k.jsx)(T,{size:`xs`,variant:`outline`,"aria-label":`Open ${e} on ${t}`,"data-cell":`${e}:${t}`,onClick:n=>void r(n,e,t),children:`Open`})},t))]},e))})]})}),(0,k.jsxs)(`p`,{className:`text-muted-foreground`,"data-demo":`matrix-result`,children:[`Last: `,t]})]})}function G(){return(0,k.jsx)(x,{children:(0,k.jsx)(`div`,{className:`flex`,children:(0,k.jsx)(w,{children:(0,k.jsx)(W,{})})})})}var K=`import { useState, type MouseEvent } from "react"
import { Button } from "@kitora/ui/button"
import { EnsureOverlayUi, InlineHeader, Overlay, OVERLAY_KINDS, OVERLAY_SURFACES, OverlayBody, OverlayFooter, OverlayHeader, OverlayScope, useOverlay, useOverlays, type OverlayKind, type OverlayResult, type OverlaySurface } from "@kitora/overlay"

const RESOLVED = "ok"

function describeResult(r: OverlayResult<string>): string {
  return r.status === "resolved" ? \`resolved \${JSON.stringify(r.value)}\` : \`dismissed (\${r.reason})\`
}

// A cell's body, drawn with the chrome its surface needs: a popover body, an inline region header, or a dialog/sheet header and footer.
function CellBody({ kind, surface }: { kind: OverlayKind; surface: OverlaySurface }) {
  const ctl = useOverlay<string>()
  const title = \`\${kind} × \${surface}\`
  const text = <p className="text-muted-foreground">Role, focus and dismissal come from the kind; the look from the surface.</p>
  const actions = (
    <>
      <Overlay.Close render={<Button size="sm" variant="outline" />}>Close</Overlay.Close>
      <Button size="sm" onClick={() => ctl.resolve(RESOLVED)}>
        Resolve
      </Button>
    </>
  )
  if (surface === "anchored") {
    return (
      <div className="flex w-56 flex-col gap-2">
        {text}
        <div className="flex justify-end gap-1.5">{actions}</div>
      </div>
    )
  }
  if (surface === "inline") {
    return (
      <>
        <InlineHeader title={title} />
        <div className="flex flex-col gap-2 p-3">
          {text}
          <div className="flex gap-1.5">{actions}</div>
        </div>
      </>
    )
  }
  return (
    <>
      <OverlayHeader title={title} />
      <OverlayBody>{text}</OverlayBody>
      <OverlayFooter>{actions}</OverlayFooter>
    </>
  )
}

function Matrix() {
  // useOverlays() opens in the nearest OverlayScope, so an inline panel lands beside this table
  const overlays = useOverlays()
  const [last, setLast] = useState("—")
  const openCell = async (event: MouseEvent<HTMLButtonElement>, kind: OverlayKind, surface: OverlaySurface) => {
    // kind and surface are independent: any kind renders on any surface
    const handle = overlays.openRender<string>(() => <CellBody kind={kind} surface={surface} />, {
      name: \`\${kind}×\${surface}\`,
      kind,
      surface,
      // a push panel never blocks the page; everything else keeps the kind's default
      modal: surface === "inline" ? false : undefined,
      anchor: surface === "anchored" ? event.currentTarget : undefined,
      anchoring: { title: \`\${kind} × \${surface}\` },
      presentation: surface === "inline" ? { width: "sm" } : undefined,
    })
    setLast(\`\${kind} × \${surface}: \${describeResult(await handle.result)}\`)
  }
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-2 text-[13px]">
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[34rem] text-[12px] tabular-nums" data-demo="matrix">
          <thead>
            <tr className="text-left text-muted-foreground">
              <th scope="col" className="py-1 pr-2 font-medium">
                kind \\ surface
              </th>
              {OVERLAY_SURFACES.map((s) => (
                <th key={s} scope="col" className="px-1 py-1 font-medium">
                  {s}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {OVERLAY_KINDS.map((kind) => (
              <tr key={kind} className="border-t">
                <th scope="row" className="py-1 pr-2 text-left font-medium">
                  {kind}
                </th>
                {OVERLAY_SURFACES.map((surface) => (
                  <td key={surface} className="px-1 py-1">
                    <Button size="xs" variant="outline" aria-label={\`Open \${kind} on \${surface}\`} data-cell={\`\${kind}:\${surface}\`} onClick={(e) => void openCell(e, kind, surface)}>
                      Open
                    </Button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-muted-foreground" data-demo="matrix-result">
        Last: {last}
      </p>
    </div>
  )
}

export function KindSurfaceMatrix() {
  return (
    // joins the app's OverlayUiProvider when there is one, mounts its own otherwise
    <EnsureOverlayUi>
      {/* the scope renders its inline panels after the table, inside this flex row */}
      <div className="flex">
        <OverlayScope>
          <Matrix />
        </OverlayScope>
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>g(()=>import(`./kind-surface-j3KmQIUE.js`),[]));function q(e){return e.status===`resolved`?`resolved ${JSON.stringify(e.value)}`:`dismissed (${e.reason})`}var J=[{id:`c1`,name:`Spring sale`},{id:`c2`,name:`Black Friday`},{id:`c3`,name:`Back to school`}],Y=a();function X({children:e}){return(0,k.jsx)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,children:e})}function Z(){let[e,t]=(0,O.useState)(`—`);return(0,k.jsx)(x,{children:(0,k.jsxs)(X,{children:[(0,k.jsx)(`ul`,{className:`flex w-full flex-col divide-y rounded-md border`,children:J.map(e=>(0,k.jsxs)(`li`,{className:`flex items-center justify-between px-2 py-1`,children:[(0,k.jsx)(`span`,{children:e.name}),(0,k.jsx)(o.Trigger,{handle:Y,payload:e,render:(0,k.jsx)(T,{size:`xs`,variant:`ghost`,"data-demo":`edit-${e.id}`}),children:`Edit`})]},e.id))}),(0,k.jsx)(d,{handle:Y,size:`sm`,title:e=>`Rename ${e.name}`,onResult:e=>t(q(e)),footer:(0,k.jsx)(o.Close,{render:(0,k.jsx)(T,{size:`sm`,variant:`outline`}),children:`Done`}),children:e=>(0,k.jsxs)(`p`,{children:[`Payload `,(0,k.jsx)(`code`,{children:e.id}),`: one Modal instance, rendered with the clicked row.`]})}),(0,k.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Last: `,e]})]})})}var Q=`import { useState, type ReactNode } from "react"
import { Button } from "@kitora/ui/button"
import { createOverlayHandle, EnsureOverlayUi, Modal, Overlay, type OverlayResult } from "@kitora/overlay"

// Many triggers, one modal (O17): Each row's Edit opens the same mounted Modal with that row as payload; focus returns to the row's button.

function describeResult<R>(r: OverlayResult<R>): string {
  return r.status === "resolved" ? \`resolved \${JSON.stringify(r.value)}\` : \`dismissed (\${r.reason})\`
}

// ── Handle mode (O17) ────────────────────────────────────────────────────────

interface Row {
  readonly id: string
  readonly name: string
}

const ROWS: readonly Row[] = [
  { id: "c1", name: "Spring sale" },
  { id: "c2", name: "Black Friday" },
  { id: "c3", name: "Back to school" },
]

const editRow = createOverlayHandle<Row>()

// ── Page ─────────────────────────────────────────────────────────────────────

/** An example's preview row: triggers, then what they produced. */
function Row({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap items-center gap-2 text-[13px]">{children}</div>
}

export function CampaignList() {
  const [last, setLast] = useState("—")
  return (
    <EnsureOverlayUi>
      <Row>
        <ul className="flex w-full flex-col divide-y rounded-md border">
          {ROWS.map((row) => (
            <li key={row.id} className="flex items-center justify-between px-2 py-1">
              <span>{row.name}</span>
              <Overlay.Trigger handle={editRow} payload={row} render={<Button size="xs" variant="ghost" data-demo={\`edit-\${row.id}\`} />}>
                Edit
              </Overlay.Trigger>
            </li>
          ))}
        </ul>
        <Modal<string, Row>
          handle={editRow}
          size="sm"
          title={(row) => \`Rename \${row.name}\`}
          onResult={(r) => setLast(describeResult(r))}
          footer={<Overlay.Close render={<Button size="sm" variant="outline" />}>Done</Overlay.Close>}
        >
          {(row) => (
            <p>
              Payload <code>{row.id}</code>: one Modal instance, rendered with the clicked row.
            </p>
          )}
        </Modal>
        <p className="text-muted-foreground">Last: {last}</p>
      </Row>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>g(()=>import(`./index-handle-DGCQKtRE.js`),[]));function $(){return(0,k.jsx)(D,{n:3,title:`Many triggers, one modal (O17)`,blurb:`Each row's Edit opens the same mounted Modal with that row as payload; focus returns to the row's button.`,code:Q,children:(0,k.jsx)(Z,{})})}function ee(){return(0,k.jsxs)(_,{children:[(0,k.jsx)(i,{title:`Kinds, surfaces, drivers`,children:`One stack under every overlay: the matrix, the three drivers and the handle below all open into it.`}),(0,k.jsx)(D,{n:1,title:`Kind × surface`,blurb:`Kind and surface are independent: any kind renders on any surface. Anchored cells place against the button; inline cells push this table aside.`,code:K,children:(0,k.jsx)(G,{})}),(0,k.jsx)(D,{n:2,title:`One overlay, three drivers`,blurb:`JSX, imperative and route open the same sheet body; each entry records how it was opened, and the stack line lists every open entry.`,code:B,children:(0,k.jsx)(z,{})}),(0,k.jsx)($,{})]})}export{ee as component};