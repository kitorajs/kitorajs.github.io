import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{i as t}from"./toaster-CBJXOSeo.js";import{t as n}from"./archive-DdPah5AF.js";import{n as r,s as i}from"./inbox-jJ9cvERE.js";import{s as a}from"./kit-docs-DpYhPoxM.js";import{t as o}from"./plus-C7zFbiHD.js";import{t as s}from"./refresh-cw-BxB-PhHi.js";import{t as c}from"./states-CPUH3DFl.js";import{t as l}from"./trash-2-qhjCvUtq.js";import{c as u,d,l as f}from"./progress-BG3aQzLB.js";import{Ai as p,Bc as m,Cc as h,Ic as g,ht as _,ti as v}from"./index-q72zUtm9.js";import{t as y}from"./alerts-lJNUGOeS.js";import"./kit-gallery-Atvibnty.js";import{t as b}from"./example-B8EaWveR.js";import{t as x}from"./-kits.feedback.shared-CcQqHcTq.js";var S=e(m(),1),C=g(),w=[{id:`ENG-412`,title:`Login fails when the email has a plus sign`,status:`In progress`,assignee:`RI`},{id:`ENG-409`,title:`Export CSV drops the last row`,status:`Todo`,assignee:`MP`},{id:`ENG-405`,title:`Dark mode: chart tooltips unreadable`,status:`Todo`,assignee:`AB`},{id:`ENG-401`,title:`Rate-limit the sign-in endpoint`,status:`Done`,assignee:`SK`},{id:`ENG-398`,title:`Slow query on the activity feed`,status:`In progress`,assignee:`MP`}],T=6e4,E=i([{id:`n1`,title:`Maya commented on ENG-409`,body:`Repro'd on Safari 18 too.`,group:`comments`,actor:`Maya Patel`,createdAt:Date.now()-3*T,read:!1},{id:`n2`,title:`You were assigned ENG-412`,group:`assigned`,actor:`Ravi Iyer`,createdAt:Date.now()-50*T,read:!1},{id:`n3`,title:`Weekly digest is ready`,group:`system`,tone:`success`,createdAt:Date.now()-1800*T,read:!0}]),D=[{id:`assigned`,label:`Assigned`},{id:`comments`,label:`Comments`},{id:`system`,label:`System`}],O=e=>new Promise(t=>setTimeout(t,e)),k=0;async function A(e){if(await O(900),k+=1,k%3==0)throw Error(`Network timeout`);return e}var j={Todo:`border-muted-foreground`,"In progress":`border-amber-500 bg-amber-500/30`,Done:`border-emerald-500 bg-emerald-500`};function M(){let[e,i]=(0,S.useState)(w),[a,m]=(0,S.useState)(!0),[h,g]=(0,S.useState)(!0),[b,x]=(0,S.useState)(!1);(0,S.useEffect)(()=>{let e=setTimeout(()=>m(!1),900);return()=>clearTimeout(e)},[]),(0,S.useEffect)(()=>{let e=setTimeout(()=>{E.add({id:`n4`,title:`Sam closed ENG-401`,group:`system`,actor:`Sam Kim`,createdAt:Date.now(),read:!1}),_.info(`Sam closed ENG-401`,{description:`Rate-limit the sign-in endpoint`})},4e3);return()=>clearTimeout(e)},[]);let T=(t,n)=>{let r=e.findIndex(e=>e.id===t.id);_.undoable({title:`${n} ${t.id}`,description:t.title,run:()=>i(e=>e.filter(e=>e.id!==t.id)),undo:()=>i(e=>[...e.slice(0,r),t,...e.slice(r)]),commit:()=>{}})};return(0,C.jsxs)(`div`,{className:`flex h-full flex-col text-[13px]`,children:[h?(0,C.jsx)(y,{tone:`info`,onDismiss:()=>g(!1),actions:(0,C.jsx)(v,{size:`xs`,variant:`outline`,onClick:()=>g(!1),children:`Got it`}),children:`New: delete and archive no longer ask “Are you sure?”. Every change can be undone for a few seconds.`}):null,(0,C.jsxs)(`div`,{className:`flex h-11 items-center gap-2 border-b px-3`,children:[(0,C.jsx)(`span`,{className:`font-semibold`,children:`Engineering`}),(0,C.jsx)(`span`,{className:`rounded bg-muted px-1.5 text-[11px] text-muted-foreground tabular-nums`,children:e.length}),(0,C.jsxs)(`div`,{className:`ml-auto flex items-center gap-1`,children:[(0,C.jsx)(v,{size:`icon-sm`,variant:`ghost`,"aria-label":`Refresh`,onClick:()=>{m(!0),setTimeout(()=>{m(!1),_.success(`Issues are up to date`)},500)},children:(0,C.jsx)(s,{})}),(0,C.jsx)(r,{store:E,groups:D}),(0,C.jsxs)(v,{size:`sm`,onClick:()=>{x(!0);let t=`New issue ${e.length+1}`;_.promise(A(t),{loading:`Creating issue…`,success:e=>`Created "${e}"`,error:`Couldn't create the issue`,description:{error:e=>e instanceof Error?`${e.message}. Your draft is kept.`:`Try again.`}}).then(e=>i(t=>[{id:`ENG-${413+t.length}`,title:e,status:`Todo`,assignee:`AB`},...t])).catch(()=>{}).finally(()=>x(!1))},disabled:b,children:[b?(0,C.jsx)(d,{size:`xs`,label:`Creating`}):(0,C.jsx)(o,{}),` New issue`]})]})]}),(0,C.jsx)(`div`,{className:`min-h-0 flex-1 overflow-y-auto`,children:a?(0,C.jsx)(f,{label:`Loading issues`,className:`divide-y`,children:[0,1,2,3,4].map(e=>(0,C.jsxs)(`div`,{className:`flex h-10 items-center gap-3 px-3`,children:[(0,C.jsx)(u,{className:`h-3 w-14`,rounded:`sm`}),(0,C.jsx)(u,{className:`size-3`,rounded:`full`}),(0,C.jsx)(u,{className:`h-3 flex-1`,rounded:`sm`}),(0,C.jsx)(u,{className:`size-6`,rounded:`full`})]},e))}):e.length===0?(0,C.jsx)(c,{icon:(0,C.jsx)(p,{}),title:`Inbox zero`,description:`No open issues. Enjoy it while it lasts.`,actions:(0,C.jsx)(v,{size:`sm`,onClick:()=>i(w),children:`Restore sample issues`})}):(0,C.jsx)(`ul`,{className:`divide-y`,children:e.map(e=>(0,C.jsxs)(`li`,{className:`group flex h-10 items-center gap-3 px-3 hover:bg-muted/50`,children:[(0,C.jsx)(`span`,{className:`w-16 shrink-0 font-mono text-[11px] text-muted-foreground tabular-nums`,children:e.id}),(0,C.jsx)(`span`,{role:`img`,"aria-label":e.status,className:`size-3 shrink-0 rounded-full border-2 ${j[e.status]}`}),(0,C.jsx)(`span`,{className:`min-w-0 flex-1 truncate`,children:e.title}),(0,C.jsxs)(`div`,{className:`hidden gap-0.5 group-hover:flex group-focus-within:flex`,children:[(0,C.jsx)(v,{size:`icon-xs`,variant:`ghost`,"aria-label":`Archive ${e.id}`,onClick:()=>T(e,`Archived`),children:(0,C.jsx)(n,{})}),(0,C.jsx)(v,{size:`icon-xs`,variant:`ghost`,"aria-label":`Delete ${e.id}`,onClick:()=>T(e,`Deleted`),children:(0,C.jsx)(l,{})})]}),(0,C.jsx)(`span`,{className:`grid size-6 shrink-0 place-items-center rounded-full bg-muted text-[10px] font-semibold text-muted-foreground`,children:e.assignee})]},e.id))})}),(0,C.jsx)(t,{richColors:!0})]})}var N=`import { useEffect, useState } from "react"
import { Archive, Check, Plus, RefreshCw, Trash2 } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { Banner, createInboxStore, EmptyState, NotificationBell, Skeleton, SkeletonGroup, Spinner, toast, Toaster } from "@kitora/feedback"

interface Issue {
  readonly id: string
  readonly title: string
  readonly status: "Todo" | "In progress" | "Done"
  readonly assignee: string
}

const SEED: readonly Issue[] = [
  { id: "ENG-412", title: "Login fails when the email has a plus sign", status: "In progress", assignee: "RI" },
  { id: "ENG-409", title: "Export CSV drops the last row", status: "Todo", assignee: "MP" },
  { id: "ENG-405", title: "Dark mode: chart tooltips unreadable", status: "Todo", assignee: "AB" },
  { id: "ENG-401", title: "Rate-limit the sign-in endpoint", status: "Done", assignee: "SK" },
  { id: "ENG-398", title: "Slow query on the activity feed", status: "In progress", assignee: "MP" },
]

const MIN = 60_000
const inbox = createInboxStore([
  { id: "n1", title: "Maya commented on ENG-409", body: "Repro'd on Safari 18 too.", group: "comments", actor: "Maya Patel", createdAt: Date.now() - 3 * MIN, read: false },
  { id: "n2", title: "You were assigned ENG-412", group: "assigned", actor: "Ravi Iyer", createdAt: Date.now() - 50 * MIN, read: false },
  { id: "n3", title: "Weekly digest is ready", group: "system", tone: "success", createdAt: Date.now() - 30 * 60 * MIN, read: true },
])
const GROUPS = [
  { id: "assigned", label: "Assigned" },
  { id: "comments", label: "Comments" },
  { id: "system", label: "System" },
]

const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))
let attempt = 0

/** Pretend server save: every third call fails, so the error path shows up. */
async function saveIssue(title: string): Promise<string> {
  await wait(900)
  attempt += 1
  if (attempt % 3 === 0) throw new Error("Network timeout")
  return title
}

const STATUS_DOT: { readonly [S in Issue["status"]]: string } = { Todo: "border-muted-foreground", "In progress": "border-amber-500 bg-amber-500/30", Done: "border-emerald-500 bg-emerald-500" }

/**
 * An issue tracker wired with the whole kit: the bell and inbox, a banner,
 * promise toasts for saves, undo instead of a confirm on delete and archive,
 * deduped toasts for repeated actions, skeletons while loading and an empty state.
 */
export function TrackerApp() {
  const [issues, setIssues] = useState<readonly Issue[]>(SEED)
  const [loading, setLoading] = useState(true)
  const [offline, setOffline] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(id)
  }, [])

  // A live notification a few seconds in, so the bell's badge moves.
  useEffect(() => {
    const id = setTimeout(() => {
      inbox.add({ id: "n4", title: "Sam closed ENG-401", group: "system", actor: "Sam Kim", createdAt: Date.now(), read: false })
      toast.info("Sam closed ENG-401", { description: "Rate-limit the sign-in endpoint" })
    }, 4000)
    return () => clearTimeout(id)
  }, [])

  const remove = (issue: Issue, verb: "Deleted" | "Archived") => {
    const index = issues.findIndex((i) => i.id === issue.id)
    toast.undoable({
      title: \`\${verb} \${issue.id}\`,
      description: issue.title,
      run: () => setIssues((list) => list.filter((i) => i.id !== issue.id)),
      undo: () => setIssues((list) => [...list.slice(0, index), issue, ...list.slice(index)]),
      commit: () => {},
    })
  }

  const create = () => {
    setSaving(true)
    const title = \`New issue \${issues.length + 1}\`
    toast
      .promise(saveIssue(title), { loading: "Creating issue…", success: (t) => \`Created "\${t}"\`, error: "Couldn't create the issue", description: { error: (e) => (e instanceof Error ? \`\${e.message}. Your draft is kept.\` : "Try again.") } })
      .then((t) => setIssues((list) => [{ id: \`ENG-\${413 + list.length}\`, title: t, status: "Todo", assignee: "AB" }, ...list]))
      .catch(() => {})
      .finally(() => setSaving(false))
  }

  const reload = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      // Pressing Refresh five times shows one toast with ×5, not five toasts.
      toast.success("Issues are up to date")
    }, 500)
  }

  return (
    <div className="flex h-full flex-col text-[13px]">
      {offline ? (
        <Banner tone="info" onDismiss={() => setOffline(false)} actions={<Button size="xs" variant="outline" onClick={() => setOffline(false)}>Got it</Button>}>
          New: delete and archive no longer ask “Are you sure?”. Every change can be undone for a few seconds.
        </Banner>
      ) : null}
      <div className="flex h-11 items-center gap-2 border-b px-3">
        <span className="font-semibold">Engineering</span>
        <span className="rounded bg-muted px-1.5 text-[11px] text-muted-foreground tabular-nums">{issues.length}</span>
        <div className="ml-auto flex items-center gap-1">
          <Button size="icon-sm" variant="ghost" aria-label="Refresh" onClick={reload}>
            <RefreshCw />
          </Button>
          <NotificationBell store={inbox} groups={GROUPS} />
          <Button size="sm" onClick={create} disabled={saving}>
            {saving ? <Spinner size="xs" label="Creating" /> : <Plus />} New issue
          </Button>
        </div>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto">
        {loading ? (
          <SkeletonGroup label="Loading issues" className="divide-y">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="flex h-10 items-center gap-3 px-3">
                <Skeleton className="h-3 w-14" rounded="sm" />
                <Skeleton className="size-3" rounded="full" />
                <Skeleton className="h-3 flex-1" rounded="sm" />
                <Skeleton className="size-6" rounded="full" />
              </div>
            ))}
          </SkeletonGroup>
        ) : issues.length === 0 ? (
          <EmptyState icon={<Check />} title="Inbox zero" description="No open issues. Enjoy it while it lasts." actions={<Button size="sm" onClick={() => setIssues(SEED)}>Restore sample issues</Button>} />
        ) : (
          <ul className="divide-y">
            {issues.map((issue) => (
              <li key={issue.id} className="group flex h-10 items-center gap-3 px-3 hover:bg-muted/50">
                <span className="w-16 shrink-0 font-mono text-[11px] text-muted-foreground tabular-nums">{issue.id}</span>
                <span role="img" aria-label={issue.status} className={\`size-3 shrink-0 rounded-full border-2 \${STATUS_DOT[issue.status]}\`} />
                <span className="min-w-0 flex-1 truncate">{issue.title}</span>
                <div className="hidden gap-0.5 group-hover:flex group-focus-within:flex">
                  <Button size="icon-xs" variant="ghost" aria-label={\`Archive \${issue.id}\`} onClick={() => remove(issue, "Archived")}>
                    <Archive />
                  </Button>
                  <Button size="icon-xs" variant="ghost" aria-label={\`Delete \${issue.id}\`} onClick={() => remove(issue, "Deleted")}>
                    <Trash2 />
                  </Button>
                </div>
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-muted text-[10px] font-semibold text-muted-foreground">{issue.assignee}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* The app-wide toaster: one per app, at the root. It draws whatever \`toast(…)\` raises anywhere. */}
      <Toaster richColors />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>h(()=>import(`./tracker-CatKw2u-.js`),[]));var P=[{name:`core`,what:"`@kitora/feedback/core`. Toast store (queue or drop-oldest per position, dedupe with a count, update by id, pause reasons, promise toasts, two-step dismissal, injectable clock; an API over `@kitora/primitives`' toast store, shared with its Base UI `Toast` parts), the stack layout and swipe decisions (also the primitives'), the undo window, the inbox store with its adapters (InboxStorage, InboxSource, connectInbox), unread counts and day groups, progress helpers, meter zones (resolveMeter, meterZone, meterState, MeterFormatter), the top progress store (createTopProgress and the shared topProgress: start, set, increment, decrement, done, reset, a trickle that never finishes on its own, an injectable clock). No DOM, no React."},{name:`dom`,what:"`@kitora/feedback/dom`. Headless browser behaviour, no framework: pause while the tab is hidden, the F8 focus hotkey, the page-hide flush for undo windows, the localStorage inbox adapter."},{name:`react`,what:"`@kitora/feedback/react`. createToaster() and the app-wide `toast` (success / info / warning / error / loading / promise / update / dismiss / undoable); ToastProvider, useToast, useToasts, useInbox; headless hooks for your own markup: useToasterBindings, useToastPositions, useToastRegion, useToastItem, useInboxView; useTopProgress and useTopProgressLoading (a router's pending state with a delay against flashes)."},{name:`ui`,what:"`@kitora/feedback/ui`. Compound parts (ToastRegion, ToastCard.Root / Icon / Title / Count / Description / Actions / Action / Cancel / Close / TimeBar, ToasterLook; Inbox.Root / Header / UnreadToggle / MarkAllRead / Tabs / Items / Item) and the presets built only from them (Toaster, NotificationBell, NotificationList); Meter.Root / Label / Value / Track / Indicator with the Meter preset (zones by the HTML <meter> rules, a formatter seam); Stepper.Root / Item / Trigger / Indicator / Title / Description / Separator with the Steps preset (useStepper in /react, stepper states in /core; the tour kit re-exports them); Banner, InlineAlert, LinearProgress (on ui's ProgressRoot), TopProgress (a bar along the top of the page with aria-busy and a polite announcement), CircularProgress, StepProgress, Spinner, Skeletons, EmptyState, ResultPage, each with classNames per part and data-* state."}];function F(){return(0,C.jsxs)(`div`,{children:[(0,C.jsx)(a,{title:`Feedback kit`,children:`One way for an app to talk back. Create an issue (every third save fails, so you see the error), hover a row and delete or archive it (no confirm; Undo is in the toast), press Refresh a few times (one toast with a count), open the bell, and wait a few seconds for a live notification.`}),(0,C.jsx)(b,{n:1,title:`An issue tracker`,blurb:`Banner, bell and inbox, promise toasts, undo instead of confirm, deduped toasts, skeletons while loading, an empty state when the list is cleared. Toasts here use the app-wide toaster at the bottom right of the window.`,code:N,children:(0,C.jsx)(x,{testId:`tracker`,height:440,children:(0,C.jsx)(M,{})})}),(0,C.jsx)(b,{n:2,title:`Layers`,blurb:"Each layer imports only the ones below it and is its own package entry; the bare `@kitora/feedback` re-exports all four.",children:(0,C.jsx)(`table`,{className:`w-full text-[13px]`,children:(0,C.jsx)(`tbody`,{children:P.map(e=>(0,C.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,C.jsx)(`td`,{className:`py-1.5 pr-3 align-top font-mono text-[12px]`,children:e.name}),(0,C.jsx)(`td`,{className:`py-1.5 text-muted-foreground`,children:e.what})]},e.name))})})})]})}export{F as component};