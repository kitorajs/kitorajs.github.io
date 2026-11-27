import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Uc as r,_i as i,ii as a,zc as o}from"./index-BZuUy872.js";import{K as s,W as c,X as l,Z as u,n as d}from"./messages-CylclMLI.js";import{A as f,At as p,Mt as m,c as h}from"./field-config-53O_jYuu.js";import{a as g,o as _,r as v}from"./fields-DyVcPE0c.js";import{t as y}from"./example-B67lLz1F.js";import"./demos-PewJ5Ayd.js";import{n as b}from"./demo-fixtures-DdkQJpDx.js";function x(e,t){let n=e.map(e=>({item:e,pending:!1})),r=new Set,i=e=>{n=e;for(let e of Array.from(r))e()},a=e=>n.findIndex(n=>t.key(n.item)===e);return{get:()=>n,subscribe(e){return r.add(e),()=>r.delete(e)},add(e,r){let a=t.key(r);return e.optimistic(()=>i([...n,{item:r,pending:!0}]),()=>i(n.filter(e=>t.key(e.item)!==a))),a},update(e,r,o){let s=a(r);if(s<0)return;let c=n[s].item;e.optimistic(()=>i(n.map((e,t)=>t===s?{item:{...e.item,...o},pending:!0}:e)),()=>i(n.map(e=>t.key(e.item)===r?{item:c,pending:!1}:e)))},remove(e,t){let r=a(t);if(r<0)return;let o=n[r];e.optimistic(()=>i(n.filter((e,t)=>t!==r)),()=>{let e=[...n];e.splice(Math.min(r,e.length),0,{item:o.item,pending:!1}),i(e)})},confirm(e,t){let r=a(e);r<0||i(n.map((e,n)=>n===r?{item:t??e.item,pending:!1}:e))},set(e){i(e.map(e=>({item:e,pending:!1})))}}}var S={mine:`mine`,theirs:`theirs`,both:`both`},C={mine:`mine`,theirs:`theirs`},w=e=>typeof e==`object`&&!!e&&!Array.isArray(e)&&Object.getPrototypeOf(e)===Object.prototype;function T(e,t,n){let r=e.filter(w);if(r.length===0||r.length!==e.filter(e=>e!==void 0).length){t&&n.add(t);return}let i=new Set;for(let e of r)for(let t of Object.keys(e))i.add(t);for(let r of i)T(e.map(e=>w(e)?e[r]:void 0),t?`${t}.${r}`:r,n)}function E(e){let{base:t,mine:n,theirs:r}=e,i=new Set;T([t,n,r],``,i);let a=[];for(let e of i){let i=s(t,e),o=s(n,e),l=s(r,e);if(c(o,l))continue;let u=!c(o,i),d=!c(l,i),f=u&&d?S.both:u?S.mine:S.theirs;a.push({path:e,kind:f,base:i,mine:o,theirs:l})}return a}function D(e,t,n={}){let r=e;for(let e of t)(e.kind===S.mine||e.kind===S.both&&(n[e.path]??C.mine)===C.mine)&&(r=l(r,e.path,e.mine));return r}function O(e,t,n={}){let r=E({base:e.baseline(),mine:e.getValues(),theirs:t}),i=D(t,r,n);return e.rebase(t),e.reset(i,{keepBaseline:!0}),r}var k=e(r(),1);function A(e){return(0,k.useSyncExternalStore)(e.subscribe,e.get,e.get)}var j=o(),M={heading:`conflict.heading`,field:`conflict.field`,mine:`conflict.mine`,theirs:`conflict.theirs`,keepMine:`conflict.keepMine`,takeTheirs:`conflict.takeTheirs`,autoMine:`conflict.autoMine`,autoTheirs:`conflict.autoTheirs`,apply:`conflict.apply`},ee={heading:u[`conflict.heading`],field:u[`conflict.field`],mine:u[`conflict.mine`],theirs:u[`conflict.theirs`],keepMine:u[`conflict.keepMine`],takeTheirs:u[`conflict.takeTheirs`],autoMine:u[`conflict.autoMine`],autoTheirs:u[`conflict.autoTheirs`],apply:u[`conflict.apply`]};function te(e){let t={...ee};for(let n of Object.keys(M))t[n]=e.t(M[n]);return t}var ne=e=>e==null||e===``?`—`:typeof e==`string`?e:JSON.stringify(e);function re({form:e,theirs:t,labels:n,format:r,onResolved:a,text:o,buttonClassName:s,className:c}){let l=d(),u={...te(l),...o},f=(0,k.useMemo)(()=>E({base:e.baseline(),mine:e.getValues(),theirs:t}),[e,t]),[p,m]=(0,k.useState)({}),h=(e,t)=>r?r(e,t):ne(e);return(0,j.jsxs)(`section`,{"aria-label":u.heading,"data-slot":`conflict-resolver`,className:i(`space-y-2 rounded-lg border border-amber-500/40 bg-amber-500/5 p-3 text-[13px]`,c),children:[(0,j.jsx)(`p`,{className:`font-medium`,children:u.heading}),(0,j.jsx)(`div`,{className:`overflow-x-auto`,children:(0,j.jsxs)(`table`,{className:`w-full border-collapse text-start`,children:[(0,j.jsx)(`thead`,{className:`text-[11px] uppercase tracking-wide text-muted-foreground`,children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{scope:`col`,className:`py-1 pe-2 text-start font-medium`,children:u.field}),(0,j.jsx)(`th`,{scope:`col`,className:`py-1 pe-2 text-start font-medium`,children:u.mine}),(0,j.jsx)(`th`,{scope:`col`,className:`py-1 pe-2 text-start font-medium`,children:u.theirs}),(0,j.jsx)(`th`,{scope:`col`,className:`py-1 text-start font-medium`,"aria-label":l.t(`conflict.resolution`)})]})}),(0,j.jsx)(`tbody`,{children:f.map(e=>{let t=n?.[e.path]??e.path,r=p[e.path]??C.mine;return(0,j.jsxs)(`tr`,{"data-conflict-kind":e.kind,className:`border-t border-border/60 align-top`,children:[(0,j.jsx)(`th`,{scope:`row`,className:`py-1.5 pe-2 text-start font-medium`,children:t}),(0,j.jsx)(`td`,{className:i(`py-1.5 pe-2 tabular-nums`,e.kind!==S.theirs&&`font-medium`),children:h(e.mine,e.path)}),(0,j.jsx)(`td`,{className:i(`py-1.5 pe-2 tabular-nums`,e.kind===S.theirs&&`font-medium`),children:h(e.theirs,e.path)}),(0,j.jsx)(`td`,{className:`py-1.5`,children:e.kind===S.both?(0,j.jsx)(`div`,{role:`radiogroup`,"aria-label":l.t(`conflict.whichValue`,{label:t}),className:`inline-flex rounded-[var(--dk-input-radius,calc(var(--radius)*0.75))] border border-input p-0.5`,children:[C.mine,C.theirs].map(t=>(0,j.jsx)(`button`,{type:`button`,role:`radio`,"aria-checked":r===t,className:i(`whitespace-nowrap rounded px-2 py-0.5 text-xs`,r===t?`bg-primary text-primary-foreground`:`hover:bg-accent`),onClick:()=>m(n=>({...n,[e.path]:t})),children:t===C.mine?u.keepMine:u.takeTheirs},t))}):(0,j.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:e.kind===S.mine?u.autoMine:u.autoTheirs})})]},e.path)})})]})}),(0,j.jsx)(`button`,{type:`button`,className:s,onClick:()=>a?.(O(e,t,p)),children:u.apply})]})}var ie=200,N=403,P=(e,t)=>new Response(JSON.stringify(t),{status:e,headers:{"content-type":`application/json`}});function F(e){let t=`t-2`,n=2;return{async token(){return await b(250),n++,t=`t-${n}`,e(`GET /csrf → new token ${t}`),t},async transfer(n){return await b(250),n.csrf===t?(e(`POST /transfers with ${n.csrf} → 200`),P(ie,{id:`tr_1`})):(e(`POST /transfers with ${n.csrf} → 403 (token expired)`),P(N,{message:`Your session token expired`}))}}}function I(){let[e,t]=(0,k.useState)([]),[n]=(0,k.useState)(()=>F(e=>t(t=>[...t,e]))),r=f({defaultValues:{csrf:`t-1`,to:`Ada`,amount:`25`},csrf:{path:`csrf`,refresh:n.token}});return(0,j.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[(0,j.jsxs)(h,{form:r,onSubmit:async e=>{let t=await n.transfer(e);if(!t.ok)throw await m(t)},children:[(0,j.jsx)(g,{name:`to`,label:`Recipient`}),(0,j.jsx)(g,{name:`amount`,label:`Amount`,prefix:`$`,inputMode:`decimal`}),(0,j.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,j.jsx)(h.Submit,{className:a({size:`sm`,className:`w-fit`}),pendingLabel:`Sending…`,children:`Send money`}),(0,j.jsx)(h.Status,{className:`text-[13px]`,success:()=>(0,j.jsx)(`span`,{className:`text-emerald-700 dark:text-emerald-400`,children:`Sent after one silent retry`}),error:e=>(0,j.jsx)(`span`,{className:`text-destructive`,children:e.message})})]})]}),(0,j.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,j.jsx)(`div`,{className:`flex h-8 items-center border-b bg-muted/40 px-3 text-[12px] font-medium`,children:`Network`}),(0,j.jsx)(`div`,{className:`space-y-0.5 p-3 font-mono text-[11px]`,children:e.length===0?(0,j.jsx)(`p`,{className:`font-sans text-muted-foreground`,children:`Submit: the first POST carries the expired token.`}):e.map((e,t)=>(0,j.jsx)(`p`,{children:e},`${t}:${e}`))})]})]})}var L=`import { useState } from "react"
import { buttonVariants } from "@kitora/ui/button"
import { submitErrorFromResponse } from "@kitora/form/core"
import { TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"
import { delay, MOCK_LATENCY_MS } from "@/kit/form/demo-fixtures"

type Transfer = { csrf: string; to: string; amount: string }

const HTTP_OK = 200
const HTTP_FORBIDDEN = 403
const json = (status: number, body: unknown): Response =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } })

/** A mock server whose session token rotated after the page loaded (the form still holds \`t-1\`). Replace with your API. */
function createCsrfServer(log: (line: string) => void) {
  let current = "t-2"
  let issued = 2
  return {
    async token(): Promise<string> {
      await delay(MOCK_LATENCY_MS)
      issued++
      current = \`t-\${issued}\`
      log(\`GET /csrf → new token \${current}\`)
      return current
    },
    async transfer(payload: Transfer): Promise<Response> {
      await delay(MOCK_LATENCY_MS)
      if (payload.csrf !== current) {
        log(\`POST /transfers with \${payload.csrf} → 403 (token expired)\`)
        return json(HTTP_FORBIDDEN, { message: "Your session token expired" })
      }
      log(\`POST /transfers with \${payload.csrf} → 200\`)
      return json(HTTP_OK, { id: "tr_1" })
    },
  }
}

export function TransferForm() {
  const [lines, setLines] = useState<string[]>([])
  const [server] = useState(() => createCsrfServer((line) => setLines((l) => [...l, line])))
  // a 403 → refresh the token into "csrf" (a clean write, not an edit) → resubmit ONCE;
  // a second 403 or a failed refresh ends in error with every value kept
  const form = useForm<Transfer>({ defaultValues: { csrf: "t-1", to: "Ada", amount: "25" }, csrf: { path: "csrf", refresh: server.token } })
  const send = async (payload: Transfer): Promise<void> => {
    const res = await server.transfer(payload)
    if (!res.ok) throw await submitErrorFromResponse(res) // 403 → forbidden, 409 → conflict, 422 → fields, 429 → retryAfter
  }
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
      <Form form={form} onSubmit={send}>
        <TextField name="to" label="Recipient" />
        <TextField name="amount" label="Amount" prefix="$" inputMode="decimal" />
        <div className="flex flex-wrap items-center gap-2">
          <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })} pendingLabel="Sending…">
            Send money
          </Form.Submit>
          <Form.Status className="text-[13px]" success={() => <span className="text-emerald-700 dark:text-emerald-400">Sent after one silent retry</span>} error={(e) => <span className="text-destructive">{e.message}</span>} />
        </div>
      </Form>
      <aside className="min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card">
        <div className="flex h-8 items-center border-b bg-muted/40 px-3 text-[12px] font-medium">Network</div>
        <div className="space-y-0.5 p-3 font-mono text-[11px]">
          {lines.length === 0 ? <p className="font-sans text-muted-foreground">Submit: the first POST carries the expired token.</p> : lines.map((line, i) => <p key={\`\${i}:\${line}\`}>{line}</p>)}
        </div>
      </aside>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>n(()=>import(`./csrf-CEeCMADP.js`),[]));var R=200,z=429,B=5,V=1e3;function H(){let e=0;return async t=>{await b(250);let n=e+B*V-Date.now();return n>0?new Response(JSON.stringify({message:`Too many invites`}),{status:z,headers:{"content-type":`application/json`,"retry-after":String(Math.ceil(n/V))}}):(e=Date.now(),new Response(JSON.stringify({ok:!0}),{status:R,headers:{"content-type":`application/json`}}))}}function U(){let[e]=(0,k.useState)(H),t=f({defaultValues:{email:`grace@example.com`}});return(0,j.jsxs)(h,{form:t,onSubmit:async t=>{let n=await e(t);if(!n.ok)throw await m(n)},className:`max-w-md`,children:[(0,j.jsx)(g,{name:`email`,label:`Invite by email`,type:`email`,description:`Send twice quickly: the second answer is a 429 with Retry-After.`}),(0,j.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,j.jsx)(h.Submit,{className:a({size:`sm`,className:`w-fit`}),pendingLabel:`Sending…`,children:`Send invite`}),(0,j.jsx)(h.Status,{className:`text-[13px]`,clearOn:`submit`,success:()=>(0,j.jsx)(`span`,{className:`text-emerald-700 dark:text-emerald-400`,children:`Invite sent`}),error:(e,{retry:t,retryIn:n})=>n>0?(0,j.jsxs)(`span`,{className:`text-amber-700 tabular-nums dark:text-amber-400`,children:[e.message,`. Try again in `,n,`s`]}):t?(0,j.jsx)(`button`,{type:`button`,className:a({size:`sm`,variant:`outline`,className:`w-fit`}),onClick:t,children:`Retry now`}):(0,j.jsx)(`span`,{className:`text-destructive`,children:e.message})})]})]})}var W=`import { useState } from "react"
import { buttonVariants } from "@kitora/ui/button"
import { submitErrorFromResponse } from "@kitora/form/core"
import { TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"
import { delay, MOCK_LATENCY_MS } from "@/kit/form/demo-fixtures"

type Invite = { email: string }

const HTTP_OK = 200
const HTTP_TOO_MANY = 429
/** Seconds between accepted invites (the mock limiter's window). */
const INVITE_WINDOW_S = 5
const MS_PER_S = 1000

/** A mock limiter that answers 429 + Retry-After inside the window. Replace with your API. */
function createLimitedServer() {
  let lastAt = 0
  return async (_payload: Invite): Promise<Response> => {
    await delay(MOCK_LATENCY_MS)
    const wait = lastAt + INVITE_WINDOW_S * MS_PER_S - Date.now()
    if (wait > 0) {
      return new Response(JSON.stringify({ message: "Too many invites" }), {
        status: HTTP_TOO_MANY,
        headers: { "content-type": "application/json", "retry-after": String(Math.ceil(wait / MS_PER_S)) },
      })
    }
    lastAt = Date.now()
    return new Response(JSON.stringify({ ok: true }), { status: HTTP_OK, headers: { "content-type": "application/json" } })
  }
}

export function InviteForm() {
  const [invite] = useState(createLimitedServer)
  const form = useForm<Invite>({ defaultValues: { email: "grace@example.com" } })
  const send = async (payload: Invite): Promise<void> => {
    const res = await invite(payload)
    if (!res.ok) throw await submitErrorFromResponse(res) // 429 → retryAfterMs from Retry-After
  }
  return (
    <Form form={form} onSubmit={send} className="max-w-md">
      <TextField name="email" label="Invite by email" type="email" description="Send twice quickly: the second answer is a 429 with Retry-After." />
      <div className="flex flex-wrap items-center gap-2">
        {/* disabled while the cooldown runs; the store refuses a resubmit until then too */}
        <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })} pendingLabel="Sending…">
          Send invite
        </Form.Submit>
        <Form.Status
          className="text-[13px]"
          clearOn="submit"
          success={() => <span className="text-emerald-700 dark:text-emerald-400">Invite sent</span>}
          error={(e, { retry, retryIn }) =>
            retryIn > 0 ? (
              <span className="text-amber-700 tabular-nums dark:text-amber-400">
                {e.message}. Try again in {retryIn}s
              </span>
            ) : retry ? (
              <button type="button" className={buttonVariants({ size: "sm", variant: "outline", className: "w-fit" })} onClick={retry}>
                Retry now
              </button>
            ) : (
              <span className="text-destructive">{e.message}</span>
            )
          }
        />
      </div>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>n(()=>import(`./rate-limit-CXMPNFpg.js`),[]));var G=200,K=409,q={title:`Quarterly plan`,body:`Ship the form engine.`,status:`draft`,version:1},J=[{value:`draft`,label:`Draft`},{value:`review`,label:`In review`},{value:`published`,label:`Published`}],ae={title:`Title`,body:`Body`,status:`Status`,version:`Version`},Y=e=>typeof e==`object`&&!!e&&`title`in e&&`body`in e&&`status`in e&&`version`in e&&typeof e.title==`string`&&typeof e.body==`string`&&typeof e.status==`string`&&typeof e.version==`number`,X=(e,t)=>new Response(JSON.stringify(t),{status:e,headers:{"content-type":`application/json`}});function oe(){let e=q;return{colleagueEdits(){e={...e,body:`${e.body} Then dogfood it.`,status:`review`,version:e.version+1}},async save(t){return await b(250),t.version===e.version?(e={...t,version:e.version+1},X(G,e)):X(K,{message:`This record changed since you opened it`,current:e})}}}function Z(){let[e]=(0,k.useState)(oe),[t,n]=(0,k.useState)(!1),r=f({defaultValues:q});return(0,j.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[(0,j.jsxs)(h,{form:r,onSubmit:async t=>{let n=await e.save(t);if(!n.ok)throw await m(n);let i=await n.json();Y(i)&&r.rebase(i)},children:[(0,j.jsx)(g,{name:`title`,label:`Title`}),(0,j.jsx)(_,{name:`body`,label:`Body`,rows:2}),(0,j.jsx)(v,{name:`status`,label:`Status`,options:J}),(0,j.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,j.jsx)(h.Submit,{className:a({size:`sm`,className:`w-fit`}),pendingLabel:`Saving…`,children:`Save`}),(0,j.jsx)(`button`,{type:`button`,className:a({size:`sm`,variant:`outline`,className:`w-fit`}),disabled:t,onClick:()=>{e.colleagueEdits(),n(!0)},children:t?`A colleague saved`:`Simulate a colleague's save`})]}),(0,j.jsx)(h.Status,{className:`text-[13px]`,success:()=>(0,j.jsx)(`span`,{className:`text-emerald-700 dark:text-emerald-400`,children:`Saved`}),error:(e,{conflict:t})=>t&&Y(e.theirs)?(0,j.jsx)(re,{form:r,theirs:e.theirs,labels:ae,buttonClassName:a({size:`sm`,className:`w-fit`}),onResolved:()=>n(!1)}):(0,j.jsx)(`span`,{className:`text-destructive`,children:e.message})})]}),(0,j.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,j.jsx)(`div`,{className:`flex h-8 items-center border-b bg-muted/40 px-3 text-[12px] font-medium`,children:`How to see it`}),(0,j.jsxs)(`ol`,{className:`list-decimal space-y-1 p-3 pl-7 text-[13px] text-muted-foreground`,children:[(0,j.jsx)(`li`,{children:`Change the title (and the body, for a true conflict).`}),(0,j.jsx)(`li`,{children:`Simulate a colleague's save, then Save: the server answers 409 with its record.`}),(0,j.jsx)(`li`,{children:`Pick per conflicting field, Apply, review, Save again — it carries their version now.`})]})]})]})}var Q=`import { useState } from "react"
import { buttonVariants } from "@kitora/ui/button"
import { submitErrorFromResponse } from "@kitora/form/core"
import { ConflictResolver, SelectField, TextareaField, TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"
import { delay, MOCK_LATENCY_MS } from "@/kit/form/demo-fixtures"

type Doc = { title: string; body: string; status: string; version: number }

const HTTP_OK = 200
const HTTP_CONFLICT = 409
const DOC: Doc = { title: "Quarterly plan", body: "Ship the form engine.", status: "draft", version: 1 }
const DOC_STATUSES = [
  { value: "draft", label: "Draft" },
  { value: "review", label: "In review" },
  { value: "published", label: "Published" },
]
const DOC_LABELS = { title: "Title", body: "Body", status: "Status", version: "Version" }
const isDoc = (x: unknown): x is Doc =>
  typeof x === "object" && x !== null && "title" in x && "body" in x && "status" in x && "version" in x && typeof x.title === "string" && typeof x.body === "string" && typeof x.status === "string" && typeof x.version === "number"
const json = (status: number, body: unknown): Response =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } })

/** A mock record store with optimistic locking: 409 + the current record on a version mismatch. Replace with your API. */
function createDocServer() {
  let record: Doc = DOC
  return {
    /** A colleague saves first: body and status change, the version moves on. */
    colleagueEdits(): void {
      record = { ...record, body: \`\${record.body} Then dogfood it.\`, status: "review", version: record.version + 1 }
    },
    async save(payload: Doc): Promise<Response> {
      await delay(MOCK_LATENCY_MS)
      if (payload.version !== record.version) return json(HTTP_CONFLICT, { message: "This record changed since you opened it", current: record })
      record = { ...payload, version: record.version + 1 }
      return json(HTTP_OK, record)
    },
  }
}

export function DocForm() {
  const [server] = useState(createDocServer)
  const [colleague, setColleague] = useState(false)
  const form = useForm<Doc>({ defaultValues: DOC })
  const save = async (payload: Doc): Promise<void> => {
    const res = await server.save(payload)
    if (!res.ok) throw await submitErrorFromResponse(res) // 409/412 → status "conflict", e.theirs = current
    const saved: unknown = await res.json()
    if (isDoc(saved)) form.rebase(saved) // the new version is the clean baseline
  }
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
      <Form form={form} onSubmit={save}>
        <TextField name="title" label="Title" />
        <TextareaField name="body" label="Body" rows={2} />
        <SelectField name="status" label="Status" options={DOC_STATUSES} />
        <div className="flex flex-wrap items-center gap-2">
          <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })} pendingLabel="Saving…">
            Save
          </Form.Submit>
          <button
            type="button"
            className={buttonVariants({ size: "sm", variant: "outline", className: "w-fit" })}
            disabled={colleague}
            onClick={() => {
              server.colleagueEdits()
              setColleague(true)
            }}
          >
            {colleague ? "A colleague saved" : "Simulate a colleague's save"}
          </button>
        </div>
        <Form.Status
          className="text-[13px]"
          success={() => <span className="text-emerald-700 dark:text-emerald-400">Saved</span>}
          error={(e, { conflict }) =>
            conflict && isDoc(e.theirs) ? (
              // one-sided changes merge automatically; a true conflict asks Keep mine / Take theirs;
              // Apply makes theirs the baseline (their version) and keeps your picks as edits
              <ConflictResolver form={form} theirs={e.theirs} labels={DOC_LABELS} buttonClassName={buttonVariants({ size: "sm", className: "w-fit" })} onResolved={() => setColleague(false)} />
            ) : (
              <span className="text-destructive">{e.message}</span>
            )
          }
        />
      </Form>
      <aside className="min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card">
        <div className="flex h-8 items-center border-b bg-muted/40 px-3 text-[12px] font-medium">How to see it</div>
        <ol className="list-decimal space-y-1 p-3 pl-7 text-[13px] text-muted-foreground">
          <li>Change the title (and the body, for a true conflict).</li>
          <li>Simulate a colleague's save, then Save: the server answers 409 with its record.</li>
          <li>Pick per conflicting field, Apply, review, Save again — it carries their version now.</li>
        </ol>
      </aside>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>n(()=>import(`./conflict-BjSLmCCN.js`),[]));var se={text:``},ce=4,le={async post(e){if(await b(250*ce),e.text.toLowerCase().includes(`fail`))throw new p({message:`The server rejected the comment`});return{id:crypto.randomUUID(),text:e.text}}};function ue({initial:e}){let[t]=(0,k.useState)(()=>x(e,{key:e=>e.id})),n=A(t),r=f({defaultValues:se});return(0,j.jsxs)(`div`,{className:`flex max-w-md flex-col gap-3`,children:[(0,j.jsx)(`ul`,{"aria-label":`Comments`,className:`space-y-1 text-[13px]`,children:n.map(e=>(0,j.jsxs)(`li`,{"data-pending":e.pending||void 0,className:i(`rounded-md border px-2 py-1`,e.pending&&`border-dashed text-muted-foreground`),children:[e.item.text,e.pending?(0,j.jsx)(`span`,{className:`ml-2 text-[11px]`,children:`sending…`}):null]},e.item.id))}),(0,j.jsxs)(h,{form:r,onSubmit:async(e,n)=>{let r=t.add(n,{id:crypto.randomUUID(),text:e.text});t.confirm(r,await le.post(e))},layout:`none`,className:`flex flex-col gap-2`,children:[(0,j.jsx)(_,{name:`text`,label:`Add a comment`,rows:2,required:!0,description:`Include "fail" to see the rollback.`}),(0,j.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,j.jsx)(h.Submit,{className:a({size:`sm`,className:`w-fit`}),children:`Comment`}),(0,j.jsx)(h.Status,{className:`text-[13px]`,error:e=>(0,j.jsxs)(`span`,{className:`text-destructive`,children:[e.message,` — removed it again`]})})]})]})]})}function de(){return(0,j.jsx)(ue,{initial:[{id:`c-1`,text:`Looks great.`}]})}var $=`import { useState } from "react"
import { buttonVariants } from "@kitora/ui/button"
import { cn } from "@kitora/ui/utils"
import { createOptimisticList, SubmitError, type SubmitContext } from "@kitora/form/core"
import { TextareaField } from "@kitora/form/fields"
import { Form, useForm, useOptimisticList } from "@kitora/form/react"
import { delay, MOCK_LATENCY_MS } from "@/kit/form/demo-fixtures"

type Comment = { id: string; text: string }
type Draft = { text: string }

const defaultValues: Draft = { text: "" }
/** The mock post is slow enough to see the pending row (multiples of the shared latency). */
const POST_LATENCY_FACTOR = 4

// stub: replace with your API (POST /comments → the saved comment). A text containing "fail" is rejected so the rollback shows.
const api = {
  async post(payload: Draft): Promise<Comment> {
    await delay(MOCK_LATENCY_MS * POST_LATENCY_FACTOR)
    if (payload.text.toLowerCase().includes("fail")) throw new SubmitError({ message: "The server rejected the comment" })
    return { id: crypto.randomUUID(), text: payload.text }
  },
}

export function Comments({ initial }: { initial: Comment[] }) {
  const [list] = useState(() => createOptimisticList(initial, { key: (c: Comment) => c.id }))
  const rows = useOptimisticList(list)
  const form = useForm<Draft>({ defaultValues })
  const send = async (payload: Draft, ctx: SubmitContext): Promise<void> => {
    const temp = list.add(ctx, { id: crypto.randomUUID(), text: payload.text }) // shown now, pending; removed again if this submit fails
    list.confirm(temp, await api.post(payload)) // swapped for the saved one; a throw rolls it back
  }
  return (
    <div className="flex max-w-md flex-col gap-3">
      <ul aria-label="Comments" className="space-y-1 text-[13px]">
        {rows.map((r) => (
          <li key={r.item.id} data-pending={r.pending || undefined} className={cn("rounded-md border px-2 py-1", r.pending && "border-dashed text-muted-foreground")}>
            {r.item.text}
            {r.pending ? <span className="ml-2 text-[11px]">sending…</span> : null}
          </li>
        ))}
      </ul>
      <Form form={form} onSubmit={send} layout="none" className="flex flex-col gap-2">
        <TextareaField name="text" label="Add a comment" rows={2} required description='Include "fail" to see the rollback.' />
        <div className="flex flex-wrap items-center gap-2">
          <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Comment</Form.Submit>
          <Form.Status className="text-[13px]" error={(e) => <span className="text-destructive">{e.message} — removed it again</span>} />
        </div>
      </Form>
    </div>
  )
}

export function CommentsThread() {
  return <Comments initial={[{ id: "c-1", text: "Looks great." }]} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>n(()=>import(`./optimistic-PxiQaA42.js`),[]));function fe(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(t,{title:`Submission recovery`,children:`What happens after the server says no: an expired CSRF token is refreshed and retried once, a rate limit counts down its Retry-After, a conflict shows theirs against mine, and an optimistic update rolls back.`}),(0,j.jsx)(y,{n:1,title:`Expired CSRF token`,blurb:`The page's token expired. The 403 triggers one refresh and one resubmit; the user sees only success.`,code:L,children:(0,j.jsx)(I,{})}),(0,j.jsx)(y,{n:2,title:`Rate limited (429)`,blurb:`The limiter allows one invite per 5 seconds. The 429's Retry-After disables Submit and counts down before Retry appears.`,code:W,children:(0,j.jsx)(U,{})}),(0,j.jsx)(y,{n:3,title:`Conflict (409): theirs vs mine`,blurb:`Optimistic locking with a version field. A colleague's save makes yours stale; the resolver merges one-sided changes and asks about the rest.`,code:Q,children:(0,j.jsx)(Z,{})}),(0,j.jsx)(y,{n:4,title:`Optimistic update with rollback`,blurb:`The comment shows at once as pending, is confirmed by the server's copy, and disappears again if the post fails.`,code:$,children:(0,j.jsx)(de,{})})]})}export{fe as component};