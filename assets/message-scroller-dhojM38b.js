import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{n,t as r}from"./avatar-DDurds49.js";import{t as i}from"./switch-CiJzHfYx.js";import{t as a}from"./input-DQo0XDsx.js";import{Bc as o,Cc as s,Ic as c,ti as l}from"./index-B9ukmIN1.js";import{t as u}from"./label-DoQXlIRk.js";import{a as d,n as f,o as p,t as m}from"./card-B_Tor3B1.js";import{a as h,i as g,n as _,r as v,t as y}from"./message-scroller-CQTp-fEP.js";var b=e({MessageScrollerCompose:()=>T}),x=t(o(),1),S=c(),C=[{id:`n1`,who:`Ana Ruiz`,text:`Deploy window opens at 14:00.`},{id:`n2`,who:`Eli Novak`,text:`Migrations are reviewed and merged.`},{id:`n3`,who:`Chen Wei`,text:`Feature flag stays off until QA signs off.`},{id:`n4`,who:`Ana Ruiz`,text:`Rollback plan is in the runbook.`},{id:`n5`,who:`Eli Novak`,text:`Status page draft is ready.`},{id:`n6`,who:`Chen Wei`,text:`On-call knows the timeline.`}];function w({onSend:e}){let{stick:t}=h(),[n,r]=(0,x.useState)(``);return(0,S.jsxs)(`form`,{className:`flex gap-2 border-t p-3`,onSubmit:i=>{i.preventDefault(),n.trim()&&(e(n.trim()),r(``),requestAnimationFrame(t))},children:[(0,S.jsx)(a,{"aria-label":`Add a note`,placeholder:`Add a note`,value:n,onChange:e=>r(e.target.value)}),(0,S.jsx)(l,{type:`submit`,children:`Send`})]})}function T(){let[e,t]=(0,x.useState)(C);return(0,S.jsxs)(m,{className:`w-full max-w-md gap-0 overflow-hidden py-0`,children:[(0,S.jsx)(d,{className:`border-b py-3`,children:(0,S.jsx)(p,{className:`text-[14px]`,children:`Release notes`})}),(0,S.jsx)(f,{className:`p-0`,children:(0,S.jsxs)(y,{className:`h-72`,children:[(0,S.jsxs)(`div`,{className:`relative flex min-h-0 flex-1 flex-col`,children:[(0,S.jsx)(g,{label:`Release notes`,children:(0,S.jsx)(_,{className:`gap-3 p-3 text-[13px]`,children:e.map(e=>(0,S.jsxs)(`div`,{"data-message-id":e.id,className:`flex items-start gap-2`,children:[(0,S.jsx)(r,{className:`size-7`,children:(0,S.jsx)(n,{className:`text-[11px]`,children:e.who.split(` `).map(e=>e[0]).join(``)})}),(0,S.jsxs)(`div`,{className:`min-w-0`,children:[(0,S.jsx)(`p`,{className:`font-medium`,children:e.who}),(0,S.jsx)(`p`,{className:`break-words text-muted-foreground`,children:e.text})]})]},e.id))})}),(0,S.jsx)(v,{})]}),(0,S.jsx)(w,{onSend:e=>t(t=>[...t,{id:`n${t.length+1}`,who:`You`,text:e}])})]})})]})}var E=e({MessageScrollerControlled:()=>O}),D=[`resolve`,`fetch`,`link`,`build`,`test`,`pack`,`upload`];function O(){let[e,t]=(0,x.useState)(!0),[n,r]=(0,x.useState)(()=>Array.from({length:14},(e,t)=>`[${String(t).padStart(3,`0`)}] ${D[t%D.length]} ok`)),[a,o]=(0,x.useState)(0);return(0,S.jsxs)(`div`,{className:`flex w-full max-w-md flex-col gap-3`,children:[(0,S.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,S.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,S.jsx)(i,{id:`follow-log`,checked:e,onCheckedChange:e=>{t(e),e&&o(0)}}),(0,S.jsx)(u,{htmlFor:`follow-log`,children:`Follow new lines`})]}),(0,S.jsx)(l,{size:`sm`,variant:`outline`,onClick:()=>{r(e=>[...e,`[${String(e.length).padStart(3,`0`)}] ${D[e.length%D.length]} ok`]),e||o(e=>e+1)},children:`Add a line`})]}),(0,S.jsxs)(y,{following:e,onFollowingChange:e=>{t(e),e&&o(0)},className:`h-56 rounded-lg border bg-muted/30`,children:[(0,S.jsx)(g,{label:`Build log`,children:(0,S.jsx)(_,{className:`p-3 font-mono text-[12px]`,children:n.map((e,t)=>(0,S.jsx)(`div`,{"data-message-id":String(t),children:e},t))})}),(0,S.jsx)(v,{label:`Follow the log`,count:a})]})]})}var k=e({MessageScrollerLoadOlder:()=>N}),A=12,j=-60;function M(e){let t=Math.max(j,e-A);return Array.from({length:e-t},(e,n)=>({id:t+n,text:`Message ${t+n+61}: ${t+n<-30?`last week's planning notes`:`this week's standup`}`}))}function N(){let[e,t]=(0,x.useState)(()=>M(0)),n=e[0]?.id??0;return(0,S.jsxs)(y,{className:`h-64 w-full max-w-md rounded-lg border`,children:[(0,S.jsx)(g,{label:`Channel history`,children:(0,S.jsxs)(_,{className:`gap-1 p-3 text-[13px]`,children:[n>j?(0,S.jsx)(l,{size:`sm`,variant:`ghost`,className:`self-center`,onClick:()=>t(e=>[...M(n),...e]),children:`Load older messages`}):(0,S.jsx)(`p`,{className:`self-center text-[12px] text-muted-foreground`,children:`The beginning of the channel`}),e.map(e=>(0,S.jsx)(`p`,{"data-message-id":String(e.id),className:`rounded-md px-2 py-1 hover:bg-muted/60`,children:e.text},e.id))]})}),(0,S.jsx)(v,{})]})}var P=e({MessageScrollerStreaming:()=>L}),F=`A debounce waits until the calls stop for a moment before it runs. Each call clears the pending timer and starts a new one, so a burst of keystrokes becomes one search. Give it a cancel to drop the pending call and a flush to run it now, and keep the latest arguments so the call that finally runs sees what the reader typed last.`,I=[{id:`m0`,author:`you`,text:`The search page feels slow on a phone.`},{id:`m0b`,author:`assistant`,text:`Every keystroke sends a request, and the answers arrive out of order. Two fixes help: wait for a pause in typing, and drop answers to old queries.`},{id:`m1`,author:`you`,text:`How do I stop my search box from firing on every key?`},{id:`m2`,author:`assistant`,text:`Debounce the request. Want an example with cancel and flush?`},{id:`m3`,author:`you`,text:`Yes, and explain when it runs.`}];function L(){let[e,t]=(0,x.useState)(I),[n,r]=(0,x.useState)(!1),i=(0,x.useRef)(null);return(0,x.useEffect)(()=>()=>{i.current&&clearInterval(i.current)},[]),(0,S.jsxs)(`div`,{className:`flex w-full max-w-md flex-col gap-3`,children:[(0,S.jsxs)(y,{className:`h-64 rounded-lg border`,children:[(0,S.jsx)(g,{label:`Conversation`,children:(0,S.jsx)(_,{className:`gap-2 p-3 text-[13px]`,children:e.map(e=>(0,S.jsx)(`p`,{"data-message-id":e.id,className:e.author===`you`?`max-w-[85%] self-end rounded-xl bg-muted px-3 py-2`:`max-w-[85%] self-start`,children:e.text||`…`},e.id))})}),(0,S.jsx)(v,{})]}),(0,S.jsx)(l,{size:`sm`,variant:`outline`,className:`self-start`,onClick:()=>{let e=`r${Date.now()}`,n=F.split(` `),a=0;r(!0),t(t=>[...t,{id:e,author:`assistant`,text:``}]),i.current=setInterval(()=>{a+=1,t(t=>t.map(t=>t.id===e?{...t,text:n.slice(0,a).join(` `)}:t)),a>=n.length&&i.current&&(clearInterval(i.current),i.current=null,r(!1))},60)},disabled:n,children:n?`Streaming…`:`Stream a reply`})]})}var R=`import { useState } from "react"
import { Avatar, AvatarFallback } from "@kitora/ui/avatar"
import { Button } from "@kitora/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@kitora/ui/card"
import { Input } from "@kitora/ui/input"
import { MessageScroller, MessageScrollerContent, MessageScrollerJump, MessageScrollerViewport, useMessageScroller } from "@kitora/ui/message-scroller"

interface Note {
  readonly id: string
  readonly who: string
  readonly text: string
}

const NOTES: readonly Note[] = [
  { id: "n1", who: "Ana Ruiz", text: "Deploy window opens at 14:00." },
  { id: "n2", who: "Eli Novak", text: "Migrations are reviewed and merged." },
  { id: "n3", who: "Chen Wei", text: "Feature flag stays off until QA signs off." },
  { id: "n4", who: "Ana Ruiz", text: "Rollback plan is in the runbook." },
  { id: "n5", who: "Eli Novak", text: "Status page draft is ready." },
  { id: "n6", who: "Chen Wei", text: "On-call knows the timeline." },
]

/** Sending brings the reader down to their note even when they had scrolled up. */
function NoteForm({ onSend }: { readonly onSend: (text: string) => void }) {
  const { stick } = useMessageScroller()
  const [draft, setDraft] = useState("")
  return (
    <form
      className="flex gap-2 border-t p-3"
      onSubmit={(event) => {
        event.preventDefault()
        if (!draft.trim()) return
        onSend(draft.trim())
        setDraft("")
        requestAnimationFrame(stick)
      }}
    >
      <Input aria-label="Add a note" placeholder="Add a note" value={draft} onChange={(event) => setDraft(event.target.value)} />
      <Button type="submit">Send</Button>
    </form>
  )
}

export function MessageScrollerCompose() {
  const [notes, setNotes] = useState<readonly Note[]>(NOTES)
  return (
    <Card className="w-full max-w-md gap-0 overflow-hidden py-0">
      <CardHeader className="border-b py-3">
        <CardTitle className="text-[14px]">Release notes</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <MessageScroller className="h-72">
          <div className="relative flex min-h-0 flex-1 flex-col">
            <MessageScrollerViewport label="Release notes">
              <MessageScrollerContent className="gap-3 p-3 text-[13px]">
                {notes.map((note) => (
                  <div key={note.id} data-message-id={note.id} className="flex items-start gap-2">
                    <Avatar className="size-7">
                      <AvatarFallback className="text-[11px]">{note.who.split(" ").map((part) => part[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="font-medium">{note.who}</p>
                      <p className="break-words text-muted-foreground">{note.text}</p>
                    </div>
                  </div>
                ))}
              </MessageScrollerContent>
            </MessageScrollerViewport>
            <MessageScrollerJump />
          </div>
          <NoteForm onSend={(text) => setNotes((all) => [...all, { id: \`n\${all.length + 1}\`, who: "You", text }])} />
        </MessageScroller>
      </CardContent>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>s(()=>import(`./compose-Cj8y2pn0.js`),[]));var z=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Label } from "@kitora/ui/label"
import { MessageScroller, MessageScrollerContent, MessageScrollerJump, MessageScrollerViewport } from "@kitora/ui/message-scroller"
import { Switch } from "@kitora/ui/switch"

const STEPS = ["resolve", "fetch", "link", "build", "test", "pack", "upload"] as const

export function MessageScrollerControlled() {
  const [following, setFollowing] = useState(true)
  const [lines, setLines] = useState<readonly string[]>(() => Array.from({ length: 14 }, (_, i) => \`[\${String(i).padStart(3, "0")}] \${STEPS[i % STEPS.length]} ok\`))
  const [missed, setMissed] = useState(0)

  const add = () => {
    setLines((all) => [...all, \`[\${String(all.length).padStart(3, "0")}] \${STEPS[all.length % STEPS.length]} ok\`])
    if (!following) setMissed((n) => n + 1)
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Switch
            id="follow-log"
            checked={following}
            onCheckedChange={(on) => {
              setFollowing(on)
              if (on) setMissed(0)
            }}
          />
          <Label htmlFor="follow-log">Follow new lines</Label>
        </div>
        <Button size="sm" variant="outline" onClick={add}>
          Add a line
        </Button>
      </div>
      <MessageScroller
        following={following}
        onFollowingChange={(on) => {
          setFollowing(on)
          if (on) setMissed(0)
        }}
        className="h-56 rounded-lg border bg-muted/30"
      >
        <MessageScrollerViewport label="Build log">
          <MessageScrollerContent className="p-3 font-mono text-[12px]">
            {lines.map((line, i) => (
              <div key={i} data-message-id={String(i)}>
                {line}
              </div>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerJump label="Follow the log" count={missed} />
      </MessageScroller>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>s(()=>import(`./controlled-usxacztB.js`),[]));var B=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { MessageScroller, MessageScrollerContent, MessageScrollerJump, MessageScrollerViewport } from "@kitora/ui/message-scroller"

interface Line {
  readonly id: number
  readonly text: string
}

const PAGE = 12
const OLDEST = -60

function page(before: number): readonly Line[] {
  const from = Math.max(OLDEST, before - PAGE)
  return Array.from({ length: before - from }, (_, i) => ({ id: from + i, text: \`Message \${from + i + 61}: \${from + i < -30 ? "last week's planning notes" : "this week's standup"}\` }))
}

export function MessageScrollerLoadOlder() {
  const [lines, setLines] = useState<readonly Line[]>(() => page(0))
  const oldest = lines[0]?.id ?? 0
  const more = oldest > OLDEST

  return (
    <MessageScroller className="h-64 w-full max-w-md rounded-lg border">
      <MessageScrollerViewport label="Channel history">
        <MessageScrollerContent className="gap-1 p-3 text-[13px]">
          {more ? (
            <Button size="sm" variant="ghost" className="self-center" onClick={() => setLines((all) => [...page(oldest), ...all])}>
              Load older messages
            </Button>
          ) : (
            <p className="self-center text-[12px] text-muted-foreground">The beginning of the channel</p>
          )}
          {lines.map((line) => (
            <p key={line.id} data-message-id={String(line.id)} className="rounded-md px-2 py-1 hover:bg-muted/60">
              {line.text}
            </p>
          ))}
        </MessageScrollerContent>
      </MessageScrollerViewport>
      <MessageScrollerJump />
    </MessageScroller>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>s(()=>import(`./load-older-Cs47jewb.js`),[]));var V=`import { useEffect, useRef, useState } from "react"
import { Button } from "@kitora/ui/button"
import { MessageScroller, MessageScrollerContent, MessageScrollerJump, MessageScrollerViewport } from "@kitora/ui/message-scroller"

interface Row {
  readonly id: string
  readonly author: "you" | "assistant"
  readonly text: string
}

const REPLY =
  "A debounce waits until the calls stop for a moment before it runs. Each call clears the pending timer and starts a new one, so a burst of keystrokes becomes one search. Give it a cancel to drop the pending call and a flush to run it now, and keep the latest arguments so the call that finally runs sees what the reader typed last."

const START: readonly Row[] = [
  { id: "m0", author: "you", text: "The search page feels slow on a phone." },
  { id: "m0b", author: "assistant", text: "Every keystroke sends a request, and the answers arrive out of order. Two fixes help: wait for a pause in typing, and drop answers to old queries." },
  { id: "m1", author: "you", text: "How do I stop my search box from firing on every key?" },
  { id: "m2", author: "assistant", text: "Debounce the request. Want an example with cancel and flush?" },
  { id: "m3", author: "you", text: "Yes, and explain when it runs." },
]

export function MessageScrollerStreaming() {
  const [rows, setRows] = useState<readonly Row[]>(START)
  const [streaming, setStreaming] = useState(false)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)
  useEffect(() => () => {
    if (timer.current) clearInterval(timer.current)
  }, [])

  const stream = () => {
    const id = \`r\${Date.now()}\`
    const words = REPLY.split(" ")
    let shown = 0
    setStreaming(true)
    setRows((all) => [...all, { id, author: "assistant", text: "" }])
    timer.current = setInterval(() => {
      shown += 1
      setRows((all) => all.map((row) => (row.id === id ? { ...row, text: words.slice(0, shown).join(" ") } : row)))
      if (shown >= words.length && timer.current) {
        clearInterval(timer.current)
        timer.current = null
        setStreaming(false)
      }
    }, 60)
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <MessageScroller className="h-64 rounded-lg border">
        <MessageScrollerViewport label="Conversation">
          <MessageScrollerContent className="gap-2 p-3 text-[13px]">
            {rows.map((row) => (
              <p key={row.id} data-message-id={row.id} className={row.author === "you" ? "max-w-[85%] self-end rounded-xl bg-muted px-3 py-2" : "max-w-[85%] self-start"}>
                {row.text || "…"}
              </p>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerJump />
      </MessageScroller>
      <Button size="sm" variant="outline" className="self-start" onClick={stream} disabled={streaming}>
        {streaming ? "Streaming…" : "Stream a reply"}
      </Button>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>s(()=>import(`./streaming-C0-qIW2Y.js`),[]));var H={"./demos/message-scroller/compose.tsx":b,"./demos/message-scroller/controlled.tsx":E,"./demos/message-scroller/load-older.tsx":k,"./demos/message-scroller/streaming.tsx":P},U={"./demos/message-scroller/compose.tsx":R,"./demos/message-scroller/controlled.tsx":z,"./demos/message-scroller/load-older.tsx":B,"./demos/message-scroller/streaming.tsx":V};export{H as modules,U as sources};