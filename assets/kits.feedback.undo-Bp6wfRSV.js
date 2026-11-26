import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{i as t}from"./toaster-CxYvK1SV.js";import{t as n}from"./archive-Cm1ILO06.js";import{s as r}from"./kit-docs-BUovISd0.js";import{t as i}from"./states-DWdQggOn.js";import{t as a}from"./trash-2-BYfY5R1J.js";import{Bc as o,Cc as s,Ic as c,mt as l,ti as u}from"./index-B9ukmIN1.js";import"./kit-gallery-Bph7isB2.js";import{t as d}from"./example-BGnSQG2Y.js";import{t as f}from"./-kits.feedback.shared-DBKNiI9L.js";var p=e(o(),1),m=c(),h=l({position:`bottom-center`}),g=[{id:1,from:`Stripe`,subject:`Your payout of ₹48,200 is on the way`},{id:2,from:`Maya Patel`,subject:`Re: Q4 roadmap — pricing section`},{id:3,from:`GitHub`,subject:`[acme/web] PR #1824 approved`},{id:4,from:`Linear`,subject:`ENG-412 moved to In review`},{id:5,from:`Vercel`,subject:`Deploy succeeded for acme-web`},{id:6,from:`Ravi Iyer`,subject:`Lunch on Thursday?`}];function _(){let[e,r]=(0,p.useState)(g),[o,s]=(0,p.useState)(new Set),[c,l]=(0,p.useState)([]),d=e=>l(t=>[`${new Date().toLocaleTimeString()} ${e}`,...t].slice(0,8)),f=(t,n)=>{let i=e,a=e.filter(e=>t.has(e.id));a.length!==0&&(s(new Set),h.undoable({title:a.length===1?`${n} “${a[0]?.subject??``}”`:`${n} ${a.length} conversations`,run:()=>r(e=>e.filter(e=>!t.has(e.id))),undo:()=>r(e=>i.filter(n=>t.has(n.id)||e.some(e=>e.id===n.id))),commit:()=>d(`${n.toUpperCase()} ${a.map(e=>`#${e.id}`).join(`, `)}`),undoneTitle:a.length===1?`Conversation restored`:`${a.length} conversations restored`}))},_=e=>s(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n});return(0,m.jsxs)(`div`,{className:`grid h-full grid-rows-[1fr_6.5rem] text-[13px] sm:grid-cols-[1fr_14rem] sm:grid-rows-1`,children:[(0,m.jsxs)(`div`,{className:`flex min-h-0 min-w-0 flex-col border-b sm:border-r sm:border-b-0`,children:[(0,m.jsxs)(`div`,{className:`flex h-10 items-center gap-1.5 border-b px-3`,children:[(0,m.jsx)(`input`,{type:`checkbox`,"aria-label":`Select all`,checked:o.size>0&&o.size===e.length,onChange:t=>s(t.target.checked?new Set(e.map(e=>e.id)):new Set),className:`size-3.5 accent-primary`}),(0,m.jsx)(`span`,{className:`truncate text-[12px] text-muted-foreground tabular-nums`,children:o.size>0?`${o.size} selected`:`${e.length} conversations`}),(0,m.jsxs)(`div`,{className:`ml-auto flex gap-1`,children:[(0,m.jsxs)(u,{size:`xs`,variant:`outline`,disabled:o.size===0,onClick:()=>f(o,`Archived`),children:[(0,m.jsx)(n,{}),` Archive`]}),(0,m.jsxs)(u,{size:`xs`,variant:`outline`,disabled:o.size===0,onClick:()=>f(o,`Deleted`),children:[(0,m.jsx)(a,{}),` Delete`]})]})]}),e.length===0?(0,m.jsx)(i,{size:`sm`,title:`All clear`,description:`Nothing left in your inbox.`,actions:(0,m.jsx)(u,{size:`xs`,variant:`outline`,onClick:()=>r(g),children:`Reset demo`})}):(0,m.jsx)(`ul`,{className:`min-h-0 flex-1 divide-y overflow-y-auto`,children:e.map(e=>(0,m.jsxs)(`li`,{className:`group flex h-9 items-center gap-2.5 px-3 hover:bg-muted/50`,children:[(0,m.jsx)(`input`,{type:`checkbox`,"aria-label":`Select ${e.subject}`,checked:o.has(e.id),onChange:()=>_(e.id),className:`size-3.5 accent-primary`}),(0,m.jsx)(`span`,{className:`w-24 shrink-0 truncate font-medium`,children:e.from}),(0,m.jsx)(`span`,{className:`min-w-0 flex-1 truncate text-muted-foreground`,children:e.subject}),(0,m.jsxs)(`div`,{className:`hidden gap-0.5 group-hover:flex group-focus-within:flex`,children:[(0,m.jsx)(u,{size:`icon-xs`,variant:`ghost`,"aria-label":`Archive ${e.subject}`,onClick:()=>f(new Set([e.id]),`Archived`),children:(0,m.jsx)(n,{})}),(0,m.jsx)(u,{size:`icon-xs`,variant:`ghost`,"aria-label":`Delete ${e.subject}`,onClick:()=>f(new Set([e.id]),`Deleted`),children:(0,m.jsx)(a,{})})]})]},e.id))})]}),(0,m.jsxs)(`div`,{className:`flex min-h-0 flex-col`,children:[(0,m.jsx)(`div`,{className:`flex h-8 items-center border-b px-3 text-[12px] font-medium sm:h-10`,children:`Server log`}),(0,m.jsx)(`ol`,{"aria-label":`Committed changes`,className:`min-h-0 flex-1 space-y-1 overflow-y-auto px-3 py-2 font-mono text-[11px] text-muted-foreground`,children:c.length===0?(0,m.jsx)(`li`,{children:`Nothing committed yet.`}):c.map((e,t)=>(0,m.jsx)(`li`,{children:e},`${e}-${t}`))})]}),(0,m.jsx)(t,{toaster:h,contained:!0})]})}var v=`import { useState } from "react"
import { Archive, Trash2 } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { createToaster, EmptyState, Toaster } from "@kitora/feedback"

const toast = createToaster({ position: "bottom-center" })

interface Mail {
  readonly id: number
  readonly from: string
  readonly subject: string
}

const SEED: readonly Mail[] = [
  { id: 1, from: "Stripe", subject: "Your payout of ₹48,200 is on the way" },
  { id: 2, from: "Maya Patel", subject: "Re: Q4 roadmap — pricing section" },
  { id: 3, from: "GitHub", subject: "[acme/web] PR #1824 approved" },
  { id: 4, from: "Linear", subject: "ENG-412 moved to In review" },
  { id: 5, from: "Vercel", subject: "Deploy succeeded for acme-web" },
  { id: 6, from: "Ravi Iyer", subject: "Lunch on Thursday?" },
]

/**
 * Undo instead of "Are you sure?". The rows go at once (\`run\`), the real delete
 * (\`commit\`) waits until the toast closes, and Undo puts them back. Closing the
 * toast early commits; hovering it holds the window open. The log on the right
 * shows what actually reached the "server".
 */
export function UndoMail() {
  const [mail, setMail] = useState<readonly Mail[]>(SEED)
  const [selected, setSelected] = useState<ReadonlySet<number>>(new Set())
  const [log, setLog] = useState<readonly string[]>([])
  const note = (line: string) => setLog((l) => [\`\${new Date().toLocaleTimeString()} \${line}\`, ...l].slice(0, 8))

  const removeMany = (ids: ReadonlySet<number>, verb: "Deleted" | "Archived") => {
    const before = mail
    const gone = mail.filter((m) => ids.has(m.id))
    if (gone.length === 0) return
    setSelected(new Set())
    toast.undoable({
      title: gone.length === 1 ? \`\${verb} “\${gone[0]?.subject ?? ""}”\` : \`\${verb} \${gone.length} conversations\`,
      run: () => setMail((list) => list.filter((m) => !ids.has(m.id))),
      // Restores the rows where they were, merged with anything that changed since.
      undo: () => setMail((list) => before.filter((m) => ids.has(m.id) || list.some((x) => x.id === m.id))),
      commit: () => note(\`\${verb.toUpperCase()} \${gone.map((m) => \`#\${m.id}\`).join(", ")}\`),
      undoneTitle: gone.length === 1 ? "Conversation restored" : \`\${gone.length} conversations restored\`,
    })
  }

  const toggle = (id: number) =>
    setSelected((s) => {
      const next = new Set(s)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  return (
    <div className="grid h-full grid-rows-[1fr_6.5rem] text-[13px] sm:grid-cols-[1fr_14rem] sm:grid-rows-1">
      <div className="flex min-h-0 min-w-0 flex-col border-b sm:border-r sm:border-b-0">
        <div className="flex h-10 items-center gap-1.5 border-b px-3">
          <input type="checkbox" aria-label="Select all" checked={selected.size > 0 && selected.size === mail.length} onChange={(e) => setSelected(e.target.checked ? new Set(mail.map((m) => m.id)) : new Set())} className="size-3.5 accent-primary" />
          <span className="truncate text-[12px] text-muted-foreground tabular-nums">{selected.size > 0 ? \`\${selected.size} selected\` : \`\${mail.length} conversations\`}</span>
          <div className="ml-auto flex gap-1">
            <Button size="xs" variant="outline" disabled={selected.size === 0} onClick={() => removeMany(selected, "Archived")}><Archive /> Archive</Button>
            <Button size="xs" variant="outline" disabled={selected.size === 0} onClick={() => removeMany(selected, "Deleted")}><Trash2 /> Delete</Button>
          </div>
        </div>
        {mail.length === 0 ? (
          <EmptyState size="sm" title="All clear" description="Nothing left in your inbox." actions={<Button size="xs" variant="outline" onClick={() => setMail(SEED)}>Reset demo</Button>} />
        ) : (
          <ul className="min-h-0 flex-1 divide-y overflow-y-auto">
            {mail.map((m) => (
              <li key={m.id} className="group flex h-9 items-center gap-2.5 px-3 hover:bg-muted/50">
                <input type="checkbox" aria-label={\`Select \${m.subject}\`} checked={selected.has(m.id)} onChange={() => toggle(m.id)} className="size-3.5 accent-primary" />
                <span className="w-24 shrink-0 truncate font-medium">{m.from}</span>
                <span className="min-w-0 flex-1 truncate text-muted-foreground">{m.subject}</span>
                <div className="hidden gap-0.5 group-hover:flex group-focus-within:flex">
                  <Button size="icon-xs" variant="ghost" aria-label={\`Archive \${m.subject}\`} onClick={() => removeMany(new Set([m.id]), "Archived")}><Archive /></Button>
                  <Button size="icon-xs" variant="ghost" aria-label={\`Delete \${m.subject}\`} onClick={() => removeMany(new Set([m.id]), "Deleted")}><Trash2 /></Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex min-h-0 flex-col">
        <div className="flex h-8 items-center border-b px-3 text-[12px] font-medium sm:h-10">Server log</div>
        <ol aria-label="Committed changes" className="min-h-0 flex-1 space-y-1 overflow-y-auto px-3 py-2 font-mono text-[11px] text-muted-foreground">
          {log.length === 0 ? <li>Nothing committed yet.</li> : log.map((line, i) => <li key={\`\${line}-\${i}\`}>{line}</li>)}
        </ol>
      </div>
      <Toaster toaster={toast} contained />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>s(()=>import(`./undo-mail-CzeQmPTI.js`),[]));function y(){return(0,m.jsxs)(`div`,{children:[(0,m.jsx)(r,{title:`Undo, not confirm`,children:"A confirm dialog asks before every delete and people learn to click through it. `toast.undoable` does the change at once and keeps it reversible for a few seconds instead. Exactly one of `commit` or `undo` runs."}),(0,m.jsx)(d,{n:1,title:`A mail list with undo`,blurb:`Delete or archive one row (hover it) or select several. Watch the server log: a change lands only when its toast closes. Undo restores the rows in place.`,code:v,children:(0,m.jsx)(f,{testId:`undo-mail`,height:380,children:(0,m.jsx)(_,{})})})]})}export{y as component};