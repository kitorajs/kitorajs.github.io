import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{t as n}from"./trash-2-0f767-k3.js";import{Bc as r,Cc as i,Ic as a,hi as o,ti as s}from"./index-9y5uwRd3.js";import{a as c,c as l}from"./adapter-MuxtTBM4.js";import{c as u,m as d,p as f,s as p,t as m,u as h,v as g}from"./react-D7rNXBHp.js";import"./kit-gallery-B-Yr9fP4.js";import{t as _}from"./example-CZLJLtIC.js";import{r as v}from"./history-CD_rSdQ7.js";import{r as y}from"./presence-D7z7_1Y4.js";import{n as b}from"./selection-Bx_DA2Lb.js";import{a as x,c as S,o as C}from"./awareness-CR0kcyqK.js";import{n as w,r as T,t as E}from"./yjs-DVYJD1T7.js";var D=e(r(),1),O=a(),k={id:`ada`,name:`Ada Lovelace`,color:`#e11d48`},A={id:`cleo`,name:`Cleo Park`,color:`#059669`},j=`todos`,M={all:`All`,active:`Active`,done:`Done`},N=[`all`,`active`,`done`],P=e=>l(e)&&(typeof e.typing==`string`||e.typing===null)?{typing:e.typing}:null,F=[{id:`t1`,text:`Draft the launch post`,done:!0},{id:`t2`,text:`Review pricing page copy`,done:!1},{id:`t3`,text:`Record the demo video`,done:!1},{id:`t4`,text:`Send the beta invite email`,done:!1}];function I(e){if(!(e instanceof S))return null;let t=e.get(`id`),n=e.get(`text`),r=e.get(`done`);return typeof t==`string`&&typeof n==`string`&&typeof r==`boolean`?{id:t,text:n,done:r}:null}function L(e){let t=(0,D.useRef)(null),n=(0,D.useMemo)(()=>n=>{let r=()=>{t.current=null,n()};return e.observeDeep(r),()=>e.unobserveDeep(r)},[e]),r=()=>t.current??=e.toArray().map(I).filter(e=>e!==null);return(0,D.useSyncExternalStore)(n,r,r)}function R(e){let t=new S;return t.set(`id`,e.id),t.set(`text`,e.text),t.set(`done`,e.done),t}function z(e,t){let[n,r]=(0,D.useState)(null),i=(0,D.useRef)(e);return(0,D.useEffect)(()=>{let e=i.current();if(!e)return;let n=new x,a=n.getArray(`todos`),o={screen:n.clientID},s=new C(a,{trackedOrigins:new Set([o]),captureTimeout:400}),c=T(s),l=E(n,e);return l.whenSynced.then(()=>{t&&a.length===0&&n.transact(()=>a.push(F.map(R)))}),r({conn:l,list:a,history:c,change(e,t,r=!1){r||s.stopCapturing(),c.label(e),n.transact(t,o)}}),()=>{c.destroy(),s.destroy(),l.destroy(),n.destroy(),r(null)}},[t]),n}function B(){let e=h().filter(e=>P(e.custom)?.typing);return(0,O.jsx)(`p`,{className:`h-4 px-3 text-[11px] text-muted-foreground`,"aria-live":`polite`,children:e.length>0?`${e.map(e=>e.user.name.split(` `)[0]).join(`, `)} ${e.length===1?`is`:`are`} typing…`:``})}function V({room:e}){let t=L(e.list),r=d(),[i,a]=(0,D.useState)(``),[c,l]=(0,D.useState)(`all`),u=(0,D.useRef)(null);p(e.history,u);let f=t.filter(e=>c===`all`?!0:c===`done`?e.done:!e.done),m=t.filter(e=>!e.done).length,h=t=>e.list.toArray().findIndex(e=>e.get(`id`)===t),g=t=>e.list.get(h(t)),_=()=>{let t=i.trim();t&&(e.change(`Add “${t}”`,()=>e.list.push([R({id:`t-${Date.now().toString(36)}`,text:t,done:!1})])),a(``))},v=e=>r.update({selection:e?{surface:j,ids:[e]}:null,custom:{typing:null}});return(0,O.jsxs)(`div`,{ref:u,className:`flex flex-col`,children:[(0,O.jsx)(`div`,{className:`flex items-center gap-1.5 border-b p-2`,children:(0,O.jsxs)(`form`,{className:`flex flex-1 gap-1.5`,onSubmit:e=>{e.preventDefault(),_()},children:[(0,O.jsx)(`input`,{value:i,onChange:e=>a(e.target.value),placeholder:`Add a todo…`,"aria-label":`New todo`,className:`h-7 min-w-0 flex-1 rounded-md border bg-background px-2 text-[13px] outline-none focus-visible:ring-2 focus-visible:ring-ring`}),(0,O.jsx)(s,{type:`submit`,size:`sm`,disabled:!i.trim(),children:`Add`})]})}),(0,O.jsxs)(`ul`,{"aria-label":`Todos`,className:`min-h-40 space-y-1 p-2`,children:[f.map(t=>(0,O.jsx)(`li`,{children:(0,O.jsx)(b,{surface:j,id:t.id,className:`rounded-md`,children:(0,O.jsxs)(`div`,{className:`group flex h-8 items-center gap-2 rounded-md border bg-card px-2`,children:[(0,O.jsx)(`input`,{type:`checkbox`,checked:t.done,"aria-label":`Done: ${t.text}`,className:`size-3.5 accent-primary`,onChange:()=>e.change(t.done?`Reopen`:`Complete`,()=>g(t.id)?.set(`done`,!t.done))}),(0,O.jsx)(`input`,{value:t.text,"aria-label":`Todo text`,onFocus:()=>v(t.id),onBlur:()=>v(null),onChange:n=>{let i=n.target.value;r.update({custom:{typing:t.id}}),e.change(`Edit text`,()=>g(t.id)?.set(`text`,i),!0)},className:o(`h-6 min-w-0 flex-1 rounded bg-transparent px-1 text-[13px] outline-none focus-visible:bg-muted/60`,t.done&&`text-muted-foreground line-through`)}),(0,O.jsx)(`button`,{type:`button`,"aria-label":`Delete ${t.text}`,onClick:()=>e.change(`Delete “${t.text}”`,()=>e.list.delete(h(t.id),1)),className:`rounded p-1 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:text-destructive focus-visible:opacity-100`,children:(0,O.jsx)(n,{className:`size-3.5`})})]})})},t.id)),f.length===0?(0,O.jsx)(`li`,{className:`px-1 py-2 text-[12px] text-muted-foreground`,children:`Nothing here.`}):null]}),(0,O.jsx)(B,{}),(0,O.jsxs)(`div`,{className:`flex items-center gap-1 border-t px-2 py-1.5 text-[12px]`,children:[(0,O.jsxs)(`span`,{className:`mr-auto text-muted-foreground tabular-nums`,children:[m,` left`]}),N.map(e=>(0,O.jsx)(`button`,{type:`button`,"aria-pressed":c===e,onClick:()=>l(e),className:o(`h-6 rounded px-1.5 text-muted-foreground hover:bg-muted`,c===e&&`bg-muted font-medium text-foreground`),children:M[e]},e)),(0,O.jsx)(`button`,{type:`button`,disabled:t.every(e=>!e.done),onClick:()=>e.change(`Clear completed`,()=>{for(let t=e.list.length-1;t>=0;t--)I(e.list.get(t))?.done&&e.list.delete(t,1)}),className:`h-6 rounded px-1.5 text-muted-foreground hover:bg-muted disabled:opacity-40`,children:`Clear done`})]})]})}function H({user:e,toolbar:t,children:n}){return(0,O.jsxs)(`div`,{"data-pane":e.id,className:`flex min-w-0 flex-col overflow-hidden rounded-lg border bg-background`,children:[(0,O.jsxs)(`div`,{className:`flex h-9 shrink-0 items-center gap-2 border-b bg-muted/40 px-2.5 text-[12px]`,children:[(0,O.jsx)(`span`,{className:`size-2 rounded-full`,style:{backgroundColor:e.color}}),(0,O.jsxs)(`span`,{className:`font-medium`,children:[e.name.split(` `)[0],`’s screen`]}),(0,O.jsx)(`div`,{className:`ml-auto flex items-center gap-1.5`,children:t})]}),(0,O.jsx)(`div`,{className:`relative min-h-0 flex-1`,children:n})]})}function U({user:e,connect:t,seed:n,historyHeight:r=`h-40`}){let i=z(t,n),a=f({user:e,parseCustom:P,key:i?String(i.conn.doc.clientID):`offline`,adapter:()=>i?w(i.conn.awareness):null});return(0,O.jsx)(H,{user:e,toolbar:a?(0,O.jsx)(m,{presence:a,trackActivity:!1,children:(0,O.jsx)(y,{size:`xs`})}):null,children:i&&a?(0,O.jsxs)(m,{presence:a,children:[(0,O.jsx)(V,{room:i}),(0,O.jsx)(v,{source:i.history,title:`My undo history`,className:o(`m-2 rounded-md`,r)})]}):(0,O.jsx)(`div`,{className:`h-64 animate-pulse bg-muted`})})}function W(){let e=u();return(0,O.jsxs)(`div`,{className:`grid grid-cols-1 gap-3 md:grid-cols-2`,children:[(0,O.jsx)(U,{user:k,connect:()=>e.connect(),seed:!0}),(0,O.jsx)(U,{user:A,connect:()=>e.connect(),seed:!1})]})}function G(){let e=Math.random().toString(36).slice(2,8);return{id:e,name:`Guest ${e.slice(0,3).toUpperCase()}`,color:c(e)}}function K(){let[e]=(0,D.useState)(G);return(0,O.jsxs)(`div`,{className:`max-w-xl space-y-2`,children:[(0,O.jsx)(U,{user:e,connect:()=>g(`gallery-todos`),seed:!0,historyHeight:`h-32`}),(0,O.jsx)(`a`,{href:typeof location>`u`?`#`:location.href,target:`_blank`,rel:`noreferrer`,className:`inline-block text-[12px] font-medium text-primary hover:underline`,children:`Open this page in another tab ↗`})]})}var q=`import { useEffect, useMemo, useRef, useState, useSyncExternalStore, type ReactNode } from "react"
import { Trash2 } from "lucide-react"
import { broadcastTransport, CollabProvider, colorFor, HistoryPanel, isRecord, PresenceAvatars, SelectionMark, useHistoryKeys, useMemoryHub, useOthers, usePresenceRoom, usePresenceStore, type CollabTransport, type CollabUser } from "@kitora/collab"
import { connectYDoc, Y, yAwarenessPresence, yUndoHistory, type YConnection, type YUndoHistory } from "@kitora/collab/yjs"
import { Button } from "@kitora/ui/button"
import { cn } from "@kitora/ui/utils"

const ADA: CollabUser = { id: "ada", name: "Ada Lovelace", color: "#e11d48" }
const CLEO: CollabUser = { id: "cleo", name: "Cleo Park", color: "#059669" }
const SURFACE = "todos"
const FILTERS = { all: "All", active: "Active", done: "Done" } as const
type Filter = keyof typeof FILTERS
const FILTER_ORDER: readonly Filter[] = ["all", "active", "done"]

interface Todo {
  readonly id: string
  readonly text: string
  readonly done: boolean
}

/** Each person's presence also carries the todo they are typing in (the \`custom\` field, checked on read). */
interface Typing {
  readonly typing: string | null
}
const parseTyping = (raw: unknown): Typing | null => (isRecord(raw) && (typeof raw.typing === "string" || raw.typing === null) ? { typing: raw.typing } : null)

const SEED: readonly Todo[] = [
  { id: "t1", text: "Draft the launch post", done: true },
  { id: "t2", text: "Review pricing page copy", done: false },
  { id: "t3", text: "Record the demo video", done: false },
  { id: "t4", text: "Send the beta invite email", done: false },
]

function readTodo(item: unknown): Todo | null {
  if (!(item instanceof Y.Map)) return null
  const id: unknown = item.get("id")
  const text: unknown = item.get("text")
  const done: unknown = item.get("done")
  return typeof id === "string" && typeof text === "string" && typeof done === "boolean" ? { id, text, done } : null
}

function useTodos(list: Y.Array<Y.Map<unknown>>): readonly Todo[] {
  const cache = useRef<readonly Todo[] | null>(null)
  const subscribe = useMemo(
    () => (onChange: () => void) => {
      const observer = () => {
        cache.current = null
        onChange()
      }
      list.observeDeep(observer)
      return () => list.unobserveDeep(observer)
    },
    [list],
  )
  const read = () => (cache.current ??= list.toArray().map(readTodo).filter((t): t is Todo => t !== null))
  return useSyncExternalStore(subscribe, read, read)
}

function makeItem(todo: Todo): Y.Map<unknown> {
  const item = new Y.Map<unknown>()
  item.set("id", todo.id)
  item.set("text", todo.text)
  item.set("done", todo.done)
  return item
}

/** This screen's doc, connection, list and a per-person undo history (only this person's own changes are undoable). */
interface TodoRoom {
  readonly conn: YConnection
  readonly list: Y.Array<Y.Map<unknown>>
  readonly history: YUndoHistory
  /** Run a local change as a labelled undo step; \`merge\` folds it into the step before (typing). */
  change(label: string, fn: () => void, merge?: boolean): void
}

function useTodoRoom(connect: () => CollabTransport | null, seed: boolean): TodoRoom | null {
  const [room, setRoom] = useState<TodoRoom | null>(null)
  const connectRef = useRef(connect)
  useEffect(() => {
    const transport = connectRef.current()
    if (!transport) return
    const doc = new Y.Doc()
    const list = doc.getArray<Y.Map<unknown>>("todos")
    const local = { screen: doc.clientID }
    const manager = new Y.UndoManager(list, { trackedOrigins: new Set([local]), captureTimeout: 400 })
    const history = yUndoHistory(manager)
    const conn = connectYDoc(doc, transport)
    void conn.whenSynced.then(() => {
      if (seed && list.length === 0) doc.transact(() => list.push(SEED.map(makeItem)))
    })
    setRoom({
      conn,
      list,
      history,
      change(label, fn, merge = false) {
        if (!merge) manager.stopCapturing()
        history.label(label)
        doc.transact(fn, local)
      },
    })
    return () => {
      history.destroy()
      manager.destroy()
      conn.destroy()
      doc.destroy()
      setRoom(null)
    }
  }, [seed])
  return room
}

function TypingLine() {
  const others = useOthers()
  const typing = others.filter((p) => parseTyping(p.custom)?.typing)
  return <p className="h-4 px-3 text-[11px] text-muted-foreground" aria-live="polite">{typing.length > 0 ? \`\${typing.map((p) => p.user.name.split(" ")[0]).join(", ")} \${typing.length === 1 ? "is" : "are"} typing…\` : ""}</p>
}

function TodoList({ room }: { readonly room: TodoRoom }) {
  const todos = useTodos(room.list)
  const store = usePresenceStore()
  const [draft, setDraft] = useState("")
  const [filter, setFilter] = useState<Filter>("all")
  const ref = useRef<HTMLDivElement>(null)
  useHistoryKeys(room.history, ref)
  const shown = todos.filter((t) => (filter === "all" ? true : filter === "done" ? t.done : !t.done))
  const left = todos.filter((t) => !t.done).length

  const indexOf = (id: string) => room.list.toArray().findIndex((item) => item.get("id") === id)
  const itemOf = (id: string) => room.list.get(indexOf(id))
  const add = () => {
    const text = draft.trim()
    if (!text) return
    room.change(\`Add “\${text}”\`, () => room.list.push([makeItem({ id: \`t-\${Date.now().toString(36)}\`, text, done: false })]))
    setDraft("")
  }
  const editing = (id: string | null) => store.update({ selection: id ? { surface: SURFACE, ids: [id] } : null, custom: { typing: null } })

  return (
    <div ref={ref} className="flex flex-col">
      <div className="flex items-center gap-1.5 border-b p-2">
        <form className="flex flex-1 gap-1.5" onSubmit={(e) => { e.preventDefault(); add() }}>
          <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Add a todo…" aria-label="New todo" className="h-7 min-w-0 flex-1 rounded-md border bg-background px-2 text-[13px] outline-none focus-visible:ring-2 focus-visible:ring-ring" />
          <Button type="submit" size="sm" disabled={!draft.trim()}>Add</Button>
        </form>
      </div>
      <ul aria-label="Todos" className="min-h-40 space-y-1 p-2">
        {shown.map((todo) => (
          <li key={todo.id}>
            <SelectionMark surface={SURFACE} id={todo.id} className="rounded-md">
              <div className="group flex h-8 items-center gap-2 rounded-md border bg-card px-2">
                <input type="checkbox" checked={todo.done} aria-label={\`Done: \${todo.text}\`} className="size-3.5 accent-primary" onChange={() => room.change(todo.done ? "Reopen" : "Complete", () => itemOf(todo.id)?.set("done", !todo.done))} />
                <input
                  value={todo.text}
                  aria-label="Todo text"
                  onFocus={() => editing(todo.id)}
                  onBlur={() => editing(null)}
                  onChange={(e) => {
                    const text = e.target.value
                    store.update({ custom: { typing: todo.id } })
                    room.change("Edit text", () => itemOf(todo.id)?.set("text", text), true)
                  }}
                  className={cn("h-6 min-w-0 flex-1 rounded bg-transparent px-1 text-[13px] outline-none focus-visible:bg-muted/60", todo.done && "text-muted-foreground line-through")}
                />
                <button type="button" aria-label={\`Delete \${todo.text}\`} onClick={() => room.change(\`Delete “\${todo.text}”\`, () => room.list.delete(indexOf(todo.id), 1))} className="rounded p-1 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:text-destructive focus-visible:opacity-100">
                  <Trash2 className="size-3.5" />
                </button>
              </div>
            </SelectionMark>
          </li>
        ))}
        {shown.length === 0 ? <li className="px-1 py-2 text-[12px] text-muted-foreground">Nothing here.</li> : null}
      </ul>
      <TypingLine />
      <div className="flex items-center gap-1 border-t px-2 py-1.5 text-[12px]">
        <span className="mr-auto text-muted-foreground tabular-nums">{left} left</span>
        {FILTER_ORDER.map((f) => (
          <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)} className={cn("h-6 rounded px-1.5 text-muted-foreground hover:bg-muted", filter === f && "bg-muted font-medium text-foreground")}>
            {FILTERS[f]}
          </button>
        ))}
        <button type="button" disabled={todos.every((t) => !t.done)} onClick={() => room.change("Clear completed", () => { for (let i = room.list.length - 1; i >= 0; i--) if (readTodo(room.list.get(i))?.done) room.list.delete(i, 1) })} className="h-6 rounded px-1.5 text-muted-foreground hover:bg-muted disabled:opacity-40">
          Clear done
        </button>
      </div>
    </div>
  )
}

/** Screen chrome: the person's name and colour, a toolbar slot, the content. */
function Pane({ user, toolbar, children }: { readonly user: CollabUser; readonly toolbar?: ReactNode; readonly children: ReactNode }) {
  return (
    <div data-pane={user.id} className="flex min-w-0 flex-col overflow-hidden rounded-lg border bg-background">
      <div className="flex h-9 shrink-0 items-center gap-2 border-b bg-muted/40 px-2.5 text-[12px]">
        <span className="size-2 rounded-full" style={{ backgroundColor: user.color }} />
        <span className="font-medium">{user.name.split(" ")[0]}’s screen</span>
        <div className="ml-auto flex items-center gap-1.5">{toolbar}</div>
      </div>
      <div className="relative min-h-0 flex-1">{children}</div>
    </div>
  )
}

/** One person's screen: a Yjs room, presence on its awareness, the list and their own history. */
export function TodoScreen({ user, connect, seed, historyHeight = "h-40" }: { readonly user: CollabUser; readonly connect: () => CollabTransport | null; readonly seed: boolean; readonly historyHeight?: string }) {
  const room = useTodoRoom(connect, seed)
  const store = usePresenceRoom<Typing>({ user, parseCustom: parseTyping, key: room ? String(room.conn.doc.clientID) : "offline", adapter: () => (room ? yAwarenessPresence(room.conn.awareness) : null) })
  return (
    <Pane user={user} toolbar={store ? <CollabProvider presence={store} trackActivity={false}><PresenceAvatars size="xs" /></CollabProvider> : null}>
      {room && store ? (
        <CollabProvider presence={store}>
          <TodoList room={room} />
          <HistoryPanel source={room.history} title="My undo history" className={cn("m-2 rounded-md", historyHeight)} />
        </CollabProvider>
      ) : (
        <div className="h-64 animate-pulse bg-muted" />
      )}
    </Pane>
  )
}

/** The shared todo list on two screens in one in-memory room. */
export function SharedTodos() {
  const hub = useMemoryHub()
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      <TodoScreen user={ADA} connect={() => hub.connect()} seed />
      <TodoScreen user={CLEO} connect={() => hub.connect()} seed={false} />
    </div>
  )
}

/** A random guest per tab, for the across-tabs example. */
function guestUser(): CollabUser {
  const id = Math.random().toString(36).slice(2, 8)
  return { id, name: \`Guest \${id.slice(0, 3).toUpperCase()}\`, color: colorFor(id) }
}

/** The same todo app with one line changed: a BroadcastChannel transport, so every open tab of this page shares the list. */
export function TodosAcrossTabs() {
  const [user] = useState(guestUser)
  return (
    <div className="max-w-xl space-y-2">
      <TodoScreen user={user} connect={() => broadcastTransport("gallery-todos")} seed historyHeight="h-32" />
      <a href={typeof location === "undefined" ? "#" : location.href} target="_blank" rel="noreferrer" className="inline-block text-[12px] font-medium text-primary hover:underline">Open this page in another tab ↗</a>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>i(()=>import(`./todos-B44VY8oB.js`),[]));function J(){return(0,O.jsxs)(`div`,{children:[(0,O.jsx)(t,{title:`Shared todo list`,children:`A Yjs list shared by two people. Presence rides the doc's awareness, the todo you are editing is your shared selection, and a custom presence field says who is typing. Undo is per person: a Y.UndoManager tracks only your own changes, shown in the history panel through the Yjs history adapter.`}),(0,O.jsx)(_,{n:1,title:`Two screens, one list`,blurb:`Add, tick, edit and delete on either side. Focus a todo: the other screen rings it with your name. ⌘Z undoes only your own changes; the panel time-travels them.`,code:q,children:(0,O.jsx)(W,{})}),(0,O.jsx)(_,{n:2,title:`Across browser tabs`,blurb:`The same TodoScreen (same file as above, its last component) on a BroadcastChannel. Open a second tab: it syncs the doc from this one, then both edit live.`,code:q,children:(0,O.jsx)(K,{})})]})}export{J as component};