import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./switch-Clz4Lth_.js";import{s as n}from"./kit-docs-DpYhPoxM.js";import{Bc as r,Cc as i,Ho as a,Ic as o,hi as s,ni as c,ti as l}from"./index-q72zUtm9.js";import{t as u}from"./badge-Be8rVEaF.js";import{W as d}from"./messages-Bsb0m0Hq.js";import{A as ee,J as f,Y as p,c as m,f as h,h as g}from"./field-config-DXiPz8Cg.js";import{a as _,c as v,i as y,o as b,y as x}from"./fields-CoJCsIMd.js";import{i as S,t as te}from"./fields-extra-uoDLzrFQ.js";import{t as C}from"./example-B8EaWveR.js";import"./demos-DN9t7sug.js";var w=e(r(),1),T=o(),E=class extends Error{response;constructor(e){super(e[0]?.message??`GraphQL error`),this.name=`ClientError`,this.response={errors:e,data:null,status:200}}},D=e=>new Promise(t=>setTimeout(t,e)),O=`WS-REJECT0`,k=`WS-8XK2LQ7R`,A=`WS-PRIM4RY0`;function ne(){let e={secrets:[{name:`Billing export`,secretValue:`demo-secret-0000000001`},{name:`Legacy importer`,secretValue:`demo-secret-0000000002`}],filterRows:[{type:`DAILY`,title:`Daily summary`,filter:`status:paid amount>100`,lastEdited:`2026-09-28T10:12:00Z`},{type:`WEEKLY`,title:`Weekly digest`,filter:null,lastEdited:null},{type:`INVOICES`,title:`Invoice export`,filter:null,lastEdited:null},{type:`USAGE`,title:`Usage export`,filter:null,lastEdited:null},{type:`AUDIT`,title:`Audit log`,filter:null,lastEdited:null},{type:`ERRORS`,title:`Error report`,filter:null,lastEdited:null},{type:`SIGNUPS`,title:`New sign-ups`,filter:null,lastEdited:null},{type:`CHURN`,title:`Churn alert`,filter:null,lastEdited:null,isActive:!1}],log:[]},t=new Set,n=0;function r(n,r){e={...e,...n,log:[r,...e.log].slice(0,8)};for(let e of t)e()}return{subscribe(e){return t.add(e),()=>t.delete(e)},snapshot:()=>e,async apiSecrets(){return await D(450),{apiSecrets:e.secrets}},async apiSecretCreate(){await D(450),n+=1;let t={name:`Generated key ${n}`,secretValue:`gen${n}Xq7Lm2Rt9Vw4Kc8Pz`};return r({secrets:[...e.secrets,t]},`apiSecretCreate → ${t.name??``}`),{apiSecretCreate:t}},async connectionSave(e,t,n){if(await D(450),t.accountId===`WS-REJECT0`)throw r({},`connectionSave ✗ ${t.accountId}`),new E([{message:`account ID is not reachable with the linked reporting account`,path:[`connectionSave`]}]);return r({},`connectionSave(${e}) ✓`),{connectionSave:{id:e,status:`PENDING`,step:2,priority:n,accountId:t.accountId,apiSecret:t.apiSecret,recordKeyFormat:t.recordKeyFormat??`EXTERNAL_ID`}}},async connectionFinish(e){return await D(450),r({},`connectionFinish(${e}) ✓`),{connectionFinish:!0}},async reportFilterUpdate(t,n){if(await D(450),n.includes(`<script`))throw r({},`reportFilterUpdate(${t}) ✗`),new E([{message:`a filter must be a query expression, not markup`,path:[`reportFilterUpdate`]}]);return r({filterRows:e.filterRows.map(e=>e.type===t?{...e,filter:n,lastEdited:new Date().toISOString()}:e)},`reportFilterUpdate(${t}) ✓`),{reportFilterUpdate:!0}},async reportSetActive(t,n){return await D(450),r({filterRows:e.filterRows.map(e=>e.type===t?{...e,isActive:n}:e)},`reportSetActive(${t}, ${String(n)}) ✓`),{reportSetActive:!0}}}}function re(e,t=new Date){if(!e)return``;let n=Math.round((t.getTime()-new Date(e).getTime())/6e4);if(n<1)return`less than a minute ago`;if(n<60)return`${n} minute${n===1?``:`s`} ago`;let r=Math.round(n/60);if(r<24)return`about ${r} hour${r===1?``:`s`} ago`;let i=Math.round(r/24);return`${i} day${i===1?``:`s`} ago`}var j=e=>typeof e.name==`string`&&typeof e.secretValue==`string`;function M({secrets:e,onGenerate:t,generateLabel:n=`Create API secret`,...r}){let i=e.filter(j).map(e=>({value:e.secretValue,label:e.name,hint:e.secretValue})),a=t?async()=>{try{let e=await t();if(!j(e))throw Error(`The service returned an incomplete secret.`);return{value:e.secretValue,label:e.name,hint:e.secretValue}}catch(e){throw Error(x(e)?.message??(e instanceof Error?e.message:`Could not create the secret.`),{cause:e})}}:void 0;return i.length===0&&!a?(0,T.jsx)(_,{...r}):(0,T.jsx)(te,{...r,placeholder:r.placeholder??`Paste a secret or pick one`,options:i,freeText:!0,action:a?{label:n,run:a}:void 0})}var N=/^WS-.{4,10}$/,P=7,F=13,I=`conn_7731`,L=`ops@example.com`,R=[{value:`EXTERNAL_ID`,label:`External ID`},{value:`EMAIL`,label:`Email`},{value:`ACCOUNT_NUMBER`,label:`Account number`},{value:`INTERNAL_ID`,label:`Internal ID`}],{c:z,e:B,v:V}=p(),H=z.and(z.ctx(`linked`),z.ctx(`primary`)),U=f()(()=>({fields:[],derived:{accountId:{when:H,expr:B.ctx(`linkedAccountId`),readOnly:!0}}})),W=ne();async function G(e,t){if(t.active&&!t.dirty)return{text:`No changes — back to Connections.`};try{await W.connectionSave(I,e,t.priority),await W.connectionFinish(I)}catch(e){throw x(e)||e}return{text:`Beacon Reports connected — back to Connections.`}}function K({children:e}){return(0,T.jsxs)(`p`,{className:`rounded-md border border-dashed border-amber-500/50 bg-amber-500/5 px-2.5 py-1.5 text-[12px] text-amber-800 dark:text-amber-300`,children:[(0,T.jsx)(`span`,{className:`font-medium`,children:`Not yet supported:`}),` `,e]})}function q(){let e=(0,w.useSyncExternalStore)(W.subscribe,W.snapshot,W.snapshot),[n,r]=(0,w.useState)(!0),[i,a]=(0,w.useState)(!0),[o,s]=(0,w.useState)(`CREATED`),[c,d]=(0,w.useState)(!0),f=ee({defaultValues:{accountId:``,apiSecret:``,recordKeyFormat:null},model:U,context:{linked:n,primary:i,isCreated:o===`CREATED`,linkedAccountId:k,primaryId:i?``:A}});async function p(){if(!n)throw new E([{message:`accountId is required`,path:[`apiSecretCreate`]}]);return(await W.apiSecretCreate()).apiSecretCreate}return(0,T.jsxs)(Q,{children:[(0,T.jsxs)(m,{form:f,onSubmit:e=>G(e,{active:o===`ACTIVE`,dirty:f.isDirty(),priority:i?`PRIMARY`:`SECONDARY`}),className:`flex flex-col gap-4`,children:[(0,T.jsxs)(`div`,{className:`flex items-center justify-between gap-3 border-b pb-2`,children:[(0,T.jsxs)(`div`,{className:`flex flex-col`,children:[(0,T.jsxs)(`h3`,{className:`text-sm font-semibold`,children:[o===`CREATED`?`Connecting `:``,`Beacon Reports`]}),(0,T.jsx)(`p`,{className:`text-[12px] text-muted-foreground`,children:`Send billing and usage records to your reporting workspace.`})]}),(0,T.jsx)(u,{variant:`secondary`,children:`Scheduled export`})]}),c?(0,T.jsx)(h,{if:z.not(z.ctx(`primary`)),children:(0,T.jsxs)(`div`,{className:`flex items-start justify-between gap-2 rounded-md border border-sky-500/30 bg-sky-500/5 px-2.5 py-1.5 text-[13px]`,children:[(0,T.jsx)(`span`,{children:`Enter the workspace's account ID by hand to add a secondary connection.`}),(0,T.jsx)(l,{type:`button`,variant:`ghost`,size:`sm`,className:`h-6 px-1.5`,onClick:()=>d(!1),"aria-label":`Dismiss`,children:`✕`})]})}):null,(0,T.jsx)(h,{if:H,children:(0,T.jsxs)(`div`,{className:`flex items-center justify-between gap-2 rounded-md bg-muted px-2.5 py-1.5 text-[13px]`,children:[(0,T.jsxs)(`span`,{className:`text-muted-foreground`,children:[`✓ `,L,` (`,k,`) account linked.`]}),(0,T.jsx)(l,{type:`button`,variant:`link`,size:`sm`,className:`h-auto p-0`,disabled:!0,title:`Switching accounts is another page`,children:`Change`})]})}),(0,T.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 sm:grid-cols-2`,children:[(0,T.jsx)(_,{name:`accountId`,label:`Account ID`,description:`Your workspace's account ID, which starts with “WS-”.`,placeholder:`WS-XXXXXXXX`,required:!0,requiredMessage:`Account ID is required`,minLength:P,maxLength:F,dir:`ltr`,rules:[V.pattern(N,`Account ID format is wrong`),V.assert(z.ne(`accountId`,B.ctx(`primaryId`)),`This account ID is already used by another connection.`)]}),(0,T.jsx)(M,{name:`apiSecret`,label:`API secret`,description:`A write-only secret the export job signs its uploads with.`,required:!0,requiredMessage:`API secret is required`,secrets:n&&i?e.secrets:[],onGenerate:i?p:void 0})]}),(0,T.jsx)(K,{children:"a success adornment that follows the field's own validity (a green check in the account ID input once the format passes); `prefix`/`suffix` are static nodes."}),(0,T.jsx)(S,{name:`recordKeyFormat`,label:`Record key`,description:`Which value identifies a customer record in the exported rows.`,options:R,required:!0,requiredMessage:`Please choose a record key to continue.`}),(0,T.jsx)(h,{if:z.and(z.ctx(`isCreated`),z.not(z.ctx(`linked`)),z.ctx(`primary`)),children:(0,T.jsx)(l,{type:`button`,variant:`outline`,size:`sm`,className:`w-fit`,onClick:()=>r(!0),children:`Sign in to Beacon Reports`})}),(0,T.jsx)(m.Status,{className:`text-sm`,success:e=>(0,T.jsxs)(`p`,{className:`font-medium text-emerald-700 dark:text-emerald-400`,children:[`✓ `,e.text]}),error:e=>(0,T.jsxs)(`p`,{role:`alert`,className:`rounded-md border border-destructive/40 bg-destructive/5 px-2.5 py-1.5 text-destructive`,children:[(0,T.jsx)(`span`,{className:`font-medium`,children:`Error`}),` · `,e.message]})}),(0,T.jsx)(`div`,{className:`flex justify-end gap-2 border-t pt-3`,children:(0,T.jsx)(m.Submit,{className:se,pendingLabel:`Saving…`,children:`Save changes`})})]}),(0,T.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-3`,children:[(0,T.jsx)(X,{title:`App context`,meta:`c.ctx(…)`,children:(0,T.jsxs)(`div`,{className:`flex flex-col gap-2 p-3 text-[13px]`,children:[(0,T.jsxs)(`label`,{className:`flex items-center justify-between gap-3`,children:[(0,T.jsx)(`span`,{children:`Reporting account linked`}),(0,T.jsx)(t,{checked:n,onCheckedChange:r,"aria-label":`Reporting account linked`})]}),(0,T.jsxs)(`label`,{className:`flex items-center justify-between gap-3`,children:[(0,T.jsx)(`span`,{children:`PRIMARY connection`}),(0,T.jsx)(t,{checked:i,onCheckedChange:a,"aria-label":`Primary connection`})]}),(0,T.jsxs)(`label`,{className:`flex items-center justify-between gap-3`,children:[(0,T.jsx)(`span`,{children:`Status ACTIVE (editing a live setup)`}),(0,T.jsx)(t,{checked:o===`ACTIVE`,onCheckedChange:e=>s(e?`ACTIVE`:`CREATED`),"aria-label":`Connection active`})]}),(0,T.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Secondary: the primary's ID `,(0,T.jsx)(`code`,{children:A}),` is refused. Enter `,(0,T.jsx)(`code`,{children:O}),` to see the server's error.`]}),(0,T.jsx)(`p`,{className:`text-muted-foreground`,children:`The "already used" rule reads the app context, so flipping Secondary → Primary clears its error at once (no edit needed).`})]})}),(0,T.jsx)(X,{title:`Server calls`,meta:`${e.log.length}`,children:(0,T.jsx)(`ul`,{className:`space-y-0.5 p-3 font-mono text-[11px] text-muted-foreground`,children:e.log.length===0?(0,T.jsx)(`li`,{children:`none yet`}):e.log.map((e,t)=>(0,T.jsx)(`li`,{children:e},`${t}-${e}`))})}),(0,T.jsx)(Z,{store:f})]})]})}var J=f()(()=>({fields:[],effects:[{on:[`isActive`],do:[{set:`filter`,to:``}]}]}));function Y(e){let t=e.isActive!==void 0;return e.filter||t&&e.isActive?`Edit`:t&&!e.isActive?`Activate`:`Customize`}async function ie(e,t){try{await W.reportFilterUpdate(e,t)}catch(e){throw x(e)??e}}function ae({row:e}){let t=a(),[n,r]=(0,w.useState)(!1),[i,o]=(0,w.useState)(!1),s=e.isActive!==void 0;async function u(){s&&!e.isActive&&(o(!0),await W.reportSetActive(e.type,!0),o(!1)),r(!0)}return(0,T.jsxs)(`div`,{className:`flex items-center justify-between gap-2 py-1.5 text-[13px]`,children:[(0,T.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[(0,T.jsx)(`span`,{className:`w-56 shrink-0 truncate font-medium`,children:e.title}),e.lastEdited?(0,T.jsxs)(`span`,{className:`truncate text-muted-foreground`,children:[`Last edited `,re(e.lastEdited,new Date(t))]}):null]}),(0,T.jsx)(l,{type:`button`,variant:`link`,size:`sm`,className:`h-auto p-0`,disabled:i,onClick:()=>void u(),children:i?`Activating…`:Y(e)}),(0,T.jsxs)(v,{open:n,onOpenChange:r,title:`Editing the ${e.title} report`,form:{defaultValues:{filter:e.filter??``,isActive:e.isActive===!0},model:J,autosave:s?{on:`change`,debounceMs:0,paths:[`isActive`],save:async(t,{values:n})=>void await W.reportSetActive(e.type,n.isActive)}:void 0},onSubmit:t=>ie(e.type,t.filter),submitLabel:`Save`,children:[(0,T.jsxs)(`div`,{className:`flex items-center justify-between gap-3 text-[13px]`,children:[(0,T.jsxs)(`p`,{className:`text-muted-foreground`,children:[`A filter narrows which records the report includes, written as space-separated `,(0,T.jsx)(`code`,{children:`field:value`}),` terms.`]}),(0,T.jsx)(`a`,{className:c({variant:`outline`,size:`sm`}),href:`https://example.com/docs/report-filters`,target:`_blank`,rel:`noreferrer`,children:`View document`})]}),s?(0,T.jsx)(y,{name:`isActive`,label:`${e.title} report active`}):null,(0,T.jsx)(b,{name:`filter`,label:`Filter (${e.title})`,rows:3})]})]})}function oe(){let e=(0,w.useSyncExternalStore)(W.subscribe,W.snapshot,W.snapshot);return(0,T.jsxs)(Q,{children:[(0,T.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,T.jsx)(`p`,{className:`rounded-md border border-sky-500/30 bg-sky-500/5 px-2.5 py-1.5 text-[12px]`,children:`Each scheduled report can carry its own filter. Edit a filter here at any time; the next run picks it up.`}),(0,T.jsx)(`div`,{className:`divide-y`,children:e.filterRows.map(e=>(0,T.jsx)(ae,{row:e},e.type))}),(0,T.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,children:[`Type `,(0,T.jsx)(`code`,{children:`<script>`}),` into a filter to see the server refuse it.`]})]}),(0,T.jsx)(X,{title:`Server calls`,meta:`${e.log.length}`,children:(0,T.jsx)(`ul`,{className:`space-y-0.5 p-3 font-mono text-[11px] text-muted-foreground`,children:e.log.length===0?(0,T.jsx)(`li`,{children:`none yet`}):e.log.map((e,t)=>(0,T.jsx)(`li`,{children:e},`${t}-${e}`))})})]})}var se=s(c({size:`sm`}),`w-fit`);function X({title:e,meta:t,sticky:n=!1,className:r,children:i}){return(0,T.jsxs)(`aside`,{className:s(`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,n&&`lg:sticky lg:top-[4.5rem]`,r),children:[(0,T.jsxs)(`div`,{className:`flex h-8 items-center justify-between gap-2 border-b bg-muted/40 px-3 text-[12px]`,children:[(0,T.jsx)(`span`,{className:`truncate font-medium`,children:e}),t===void 0?null:(0,T.jsx)(`span`,{className:`shrink-0 tabular-nums text-muted-foreground`,children:t})]}),i]})}function ce({value:e,maxHeight:t=`max-h-[420px]`}){return(0,T.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:s(`overflow-auto p-3 text-[11px] leading-relaxed focus-visible:outline-2 focus-visible:outline-ring`,t),children:JSON.stringify(e,null,2)})}function Z({store:e,title:t=`Live payload`,redact:n=!1,mode:r=`full`}){let{payload:i,dirty:a,status:o,issues:s}=g(e,e=>({payload:e.serialize({redact:n,mode:r}),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),d);return(0,T.jsxs)(X,{sticky:!0,title:t,meta:`${a?`● dirty`:`clean`} · ${o}`,children:[(0,T.jsx)(ce,{value:i}),s.length>0?(0,T.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:s.map(e=>(0,T.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}function Q({children:e,stack:t=!1}){return(0,T.jsx)(`div`,{className:s(`grid grid-cols-1 gap-4`,!t&&`lg:grid-cols-[minmax(0,1fr)_280px]`),children:w.Children.toArray(e)})}var $=`import { useState, useSyncExternalStore, type ReactNode, Children } from "react"
import { useCurrentTime } from "@kitora/primitives/react"
import { Badge } from "@kitora/ui/badge"
import { Button, buttonVariants } from "@kitora/ui/button"
import { Switch } from "@kitora/ui/switch"
import { defineForm, kit, mapErrors, deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"
import { Form, When, useForm, useFormSnapshot, type SnapshotSource } from "@kitora/form/react"
import { ComboboxField, FormDialog, RadioGroupField, SwitchField, TextareaField, TextField, type SelectOption, type BaseFieldProps } from "@kitora/form/fields"
import { cn } from "@kitora/ui/utils"

// ---- the simulated server (stub: replace with your API)
// In-memory stand-in for the GraphQL operations a "connect a reporting
// service" settings page calls, for the /kits/form/api-credentials demo.
//
// Why it exists: the demo must answer with realistic wire shapes, so every type
// below is written the way a generated GraphQL client types it (nullable
// fields stay nullable, mutations return a payload or a Boolean). Failures are
// thrown the way a typical GraphQL client throws them: an Error whose
// \`response\` carries the spec envelope \`{ errors: [{ message, path }], data:
// null, status }\` — the page reads only \`err.response.errors[0].message\`.
//
// Not claimed: any real backend's error texts. The rejection messages here are
// illustrative; the envelope they travel in is the spec one.

/** How the reporting service keys a customer record (generated enum values). */
export const RECORD_KEY_FORMATS = ["EXTERNAL_ID", "EMAIL", "ACCOUNT_NUMBER", "INTERNAL_ID"] as const

export type RecordKeyFormat = (typeof RECORD_KEY_FORMATS)[number]

/** A workspace's first connection is PRIMARY, later ones SECONDARY. */
export const PRIORITIES = ["PRIMARY", "SECONDARY"] as const

export type ConnectionPriority = (typeof PRIORITIES)[number]

/** The connection lifecycle values the page branches on. */
export const STATUSES = ["CREATED", "PENDING", "ACTIVE"] as const

export type ConnectionStatus = (typeof STATUSES)[number]

/** One API secret of the linked account — both fields nullable, as generated. */
export interface ApiSecret {
  name?: string | null
  secretValue?: string | null
}

/** The mutation input the credentials form sends. */
export interface CredentialsInput {
  accountId: string
  apiSecret: string
  recordKeyFormat: RecordKeyFormat | null
}

/** The slice of the \`connectionSave\` selection the page reads back. */
export interface Connection {
  id: string
  status: ConnectionStatus
  step: number
  priority: ConnectionPriority
  accountId: string
  apiSecret: string
  recordKeyFormat: RecordKeyFormat
}

/** Report types that have a row on the Report filters card. */
export const REPORT_TYPES = ["DAILY", "WEEKLY", "INVOICES", "USAGE", "AUDIT", "ERRORS", "SIGNUPS", "CHURN"] as const

export type ReportType = (typeof REPORT_TYPES)[number]

/** One row of the Report filters card. */
export interface ReportFilterRow {
  type: ReportType
  title: string
  filter: string | null
  lastEdited: string | null
  /** Only CHURN has an activation switch; \`undefined\` = no switch. */
  isActive?: boolean
}

/** One spec GraphQL error, as a GraphQL client exposes it. */
export interface GraphQLErrorEntry {
  message: string
  path?: string[]
  extensions?: Record<string, string>
}

/** The thrown failure: the client's error carries the response on \`.response\`. */
export class ClientError extends Error {
  readonly response: { errors: GraphQLErrorEntry[]; data: null; status: number }
  constructor(errors: GraphQLErrorEntry[]) {
    super(errors[0]?.message ?? "GraphQL error")
    this.name = "ClientError"
    this.response = { errors, data: null, status: 200 }
  }
}

/** Simulated network latency, so loading states are visible. */
export const LATENCY_MS = 450

const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

/** Account ID the stub backend refuses, to show the server's error path. */
export const REJECTED_ACCOUNT_ID = "WS-REJECT0"

/** The account ID of the signed-in (linked) reporting account. */
export const LINKED_ACCOUNT_ID = "WS-8XK2LQ7R"

/** The PRIMARY connection's ID, which a SECONDARY one may not reuse. */
export const PRIMARY_ACCOUNT_ID = "WS-PRIM4RY0"

/** Server state the page re-reads after each mutation (a query refetch in a real app). */
export interface ReportsServerState {
  secrets: ApiSecret[]
  filterRows: ReportFilterRow[]
  log: string[]
}

/** The reporting operations over one in-memory server; \`subscribe\`/\`snapshot\` feed \`useSyncExternalStore\`. */
export function createReportsServer() {
  let state: ReportsServerState = {
    secrets: [
      { name: "Billing export", secretValue: "demo-secret-0000000001" },
      { name: "Legacy importer", secretValue: "demo-secret-0000000002" },
    ],
    filterRows: [
      { type: "DAILY", title: "Daily summary", filter: "status:paid amount>100", lastEdited: "2026-09-28T10:12:00Z" },
      { type: "WEEKLY", title: "Weekly digest", filter: null, lastEdited: null },
      { type: "INVOICES", title: "Invoice export", filter: null, lastEdited: null },
      { type: "USAGE", title: "Usage export", filter: null, lastEdited: null },
      { type: "AUDIT", title: "Audit log", filter: null, lastEdited: null },
      { type: "ERRORS", title: "Error report", filter: null, lastEdited: null },
      { type: "SIGNUPS", title: "New sign-ups", filter: null, lastEdited: null },
      { type: "CHURN", title: "Churn alert", filter: null, lastEdited: null, isActive: false },
    ],
    log: [],
  }
  const listeners = new Set<() => void>()
  let generated = 0
  function write(next: Partial<ReportsServerState>, entry: string): void {
    state = { ...state, ...next, log: [entry, ...state.log].slice(0, 8) }
    for (const l of listeners) l()
  }
  return {
    subscribe(listener: () => void): () => void {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    snapshot: (): ReportsServerState => state,

    /** query apiSecrets($accountId) */
    async apiSecrets(): Promise<{ apiSecrets: ApiSecret[] }> {
      await wait(LATENCY_MS)
      return { apiSecrets: state.secrets }
    },
    /** mutation apiSecretCreate($accountId) — a new secret, appended to the account's list. */
    async apiSecretCreate(): Promise<{ apiSecretCreate: ApiSecret }> {
      await wait(LATENCY_MS)
      generated += 1
      const secret: ApiSecret = { name: \`Generated key \${generated}\`, secretValue: \`gen\${generated}Xq7Lm2Rt9Vw4Kc8Pz\` }
      write({ secrets: [...state.secrets, secret] }, \`apiSecretCreate → \${secret.name ?? ""}\`)
      return { apiSecretCreate: secret }
    },
    /** mutation connectionSave($id, $input) */
    async connectionSave(id: string, input: CredentialsInput, priority: ConnectionPriority): Promise<{ connectionSave: Connection }> {
      await wait(LATENCY_MS)
      if (input.accountId === REJECTED_ACCOUNT_ID) {
        write({}, \`connectionSave ✗ \${input.accountId}\`)
        throw new ClientError([{ message: "account ID is not reachable with the linked reporting account", path: ["connectionSave"] }])
      }
      write({}, \`connectionSave(\${id}) ✓\`)
      return {
        connectionSave: {
          id,
          status: "PENDING",
          step: 2,
          priority,
          accountId: input.accountId,
          apiSecret: input.apiSecret,
          recordKeyFormat: input.recordKeyFormat ?? "EXTERNAL_ID",
        },
      }
    },
    /** mutation connectionFinish($id) → Boolean */
    async connectionFinish(id: string): Promise<{ connectionFinish: boolean }> {
      await wait(LATENCY_MS)
      write({}, \`connectionFinish(\${id}) ✓\`)
      return { connectionFinish: true }
    },
    /** mutation reportFilterUpdate($type, $filter) → Boolean */
    async reportFilterUpdate(type: ReportType, filter: string): Promise<{ reportFilterUpdate: boolean }> {
      await wait(LATENCY_MS)
      if (filter.includes("<script")) {
        write({}, \`reportFilterUpdate(\${type}) ✗\`)
        throw new ClientError([{ message: "a filter must be a query expression, not markup", path: ["reportFilterUpdate"] }])
      }
      const rows = state.filterRows.map((r) => (r.type === type ? { ...r, filter, lastEdited: new Date().toISOString() } : r))
      write({ filterRows: rows }, \`reportFilterUpdate(\${type}) ✓\`)
      return { reportFilterUpdate: true }
    },
    /** mutation reportSetActive($type, $isActive) → Boolean */
    async reportSetActive(type: ReportType, isActive: boolean): Promise<{ reportSetActive: boolean }> {
      await wait(LATENCY_MS)
      const rows = state.filterRows.map((r) => (r.type === type ? { ...r, isActive } : r))
      write({ filterRows: rows }, \`reportSetActive(\${type}, \${String(isActive)}) ✓\`)
      return { reportSetActive: true }
    },
  }
}

export type ReportsServer = ReturnType<typeof createReportsServer>

/** A relative "3 days ago" label without a date library. */
export function lastEditedLabel(iso: string | null, now: Date = new Date()): string {
  if (!iso) return ""
  const minutes = Math.round((now.getTime() - new Date(iso).getTime()) / 60_000)
  if (minutes < 1) return "less than a minute ago"
  if (minutes < 60) return \`\${minutes} minute\${minutes === 1 ? "" : "s"} ago\`
  const hours = Math.round(minutes / 60)
  if (hours < 24) return \`about \${hours} hour\${hours === 1 ? "" : "s"} ago\`
  const days = Math.round(hours / 24)
  return \`\${days} day\${days === 1 ? "" : "s"} ago\`
}

// ---- api-secret-field
/** An option with both parts present (the generated type makes both nullable). */
interface Secret {
  name: string
  secretValue: string
}

const complete = (s: ApiSecret): s is ApiSecret & Secret => typeof s.name === "string" && typeof s.secretValue === "string"

export interface ApiSecretFieldProps extends BaseFieldProps {
  /** Secrets of the linked account; empty = plain text input (manual entry). */
  secrets: readonly ApiSecret[]
  /** Mints a secret (the \`apiSecretCreate\` mutation). Absent = no action button (a SECONDARY connection). */
  onGenerate?: () => Promise<ApiSecret>
  /** Text of the action button. */
  generateLabel?: string
}

/**
 * Free-text secret input with a name→value option list and a "create one" action: the form kit's \`ComboboxField\` in its free-text mode ("pick or type"),
 * so the typed text is the value unless it names a secret, and the action row mints one. Empty \`secrets\` = nothing to list, a plain text input.
 */
export function ApiSecretField({ secrets, onGenerate, generateLabel = "Create API secret", ...rest }: ApiSecretFieldProps) {
  const options = secrets.filter(complete).map((s) => ({ value: s.secretValue, label: s.name, hint: s.secretValue }))
  // The GraphQL failure reads \`errors[0].message\`, which is what the field shows under itself.
  const run = onGenerate
    ? async () => {
        try {
          const s = await onGenerate()
          if (!complete(s)) throw new Error("The service returned an incomplete secret.")
          return { value: s.secretValue, label: s.name, hint: s.secretValue }
        } catch (err) {
          throw new Error(mapErrors(err)?.message ?? (err instanceof Error ? err.message : "Could not create the secret."), { cause: err })
        }
      }
    : undefined
  // Nothing to pick and nothing to create: a plain text input (a combobox with an empty list would only offer a chevron that opens nothing).
  if (options.length === 0 && !run) return <TextField {...rest} />
  return <ComboboxField {...rest} placeholder={rest.placeholder ?? "Paste a secret or pick one"} options={options} freeText action={run ? { label: generateLabel, run } : undefined} />
}

// ---- the page
// A "connect a reporting service" settings page (an invented service, Beacon Reports), built on the
// declarative API. The stub server answers with generated-client GraphQL shapes and throws the spec
// error envelope; the page shows \`errors[0].message\` form-level through core's \`mapErrors\` default source.

// ── the form's shape (the connection mutation's input) ──
interface Credentials {
  accountId: string
  apiSecret: string
  recordKeyFormat: RecordKeyFormat | null
}

/** The service's account ID format: "WS-" then 4 to 10 characters. */
const ACCOUNT_ID_FORMAT = /^WS-.{4,10}$/

const ACCOUNT_ID_MIN = 7

const ACCOUNT_ID_MAX = 13

const CONNECTION_ID = "conn_7731"

const LINKED_EMAIL = "ops@example.com"

/** How the service keys customer records — the four radio choices. */
const RECORD_KEY_OPTIONS: SelectOption[] = [
  { value: "EXTERNAL_ID", label: "External ID" },
  { value: "EMAIL", label: "Email" },
  { value: "ACCOUNT_NUMBER", label: "Account number" },
  { value: "INTERNAL_ID", label: "Internal ID" },
]

const { c, e, v } = kit<Credentials>()

/** Signed-in PRIMARY connection: the ID comes from the linked account, not from typing. */
const linkedPrimary = c.and(c.ctx("linked"), c.ctx("primary"))

// While the app context says "linked + primary", the account ID mirrors the linked account's ID
// (read-only, still sent); otherwise it is the user's own input.
const model = defineForm<Credentials>()(() => ({
  fields: [],
  derived: {
    accountId: { when: linkedPrimary, expr: e.ctx("linkedAccountId"), readOnly: true },
  },
}))

/** The app context the page reads (the signed-in profile + the connection record). Never a value, never sent. */
type CredentialsContext = {
  linked: boolean
  primary: boolean
  isCreated: boolean
  linkedAccountId: string
  /** The PRIMARY connection's ID when it is ACTIVE; "" for a primary one. */
  primaryId: string
}

const server = createReportsServer()

/** Save → finish, two mutations in a row. */
async function saveCredentials(values: Credentials, opts: { active: boolean; dirty: boolean; priority: ConnectionPriority }): Promise<{ text: string }> {
  // an ACTIVE connection with no changes skips the save and leaves
  if (opts.active && !opts.dirty) return { text: "No changes — back to Connections." }
  try {
    await server.connectionSave(CONNECTION_ID, values, opts.priority)
    await server.connectionFinish(CONNECTION_ID)
  } catch (err) {
    // the server's errors[0].message, never a field — the default source does exactly that
    const mapped = mapErrors<Credentials>(err)
    if (mapped) throw mapped
    throw err
  }
  return { text: "Beacon Reports connected — back to Connections." }
}

/** A "Not yet supported" placeholder for a part the engine cannot express without a hack. */
function NotYet({ children }: { children: string }) {
  return (
    <p className="rounded-md border border-dashed border-amber-500/50 bg-amber-500/5 px-2.5 py-1.5 text-[12px] text-amber-800 dark:text-amber-300">
      <span className="font-medium">Not yet supported:</span> {children}
    </p>
  )
}

export function CredentialsExample() {
  const snap = useSyncExternalStore(server.subscribe, server.snapshot, server.snapshot)
  // demo-chrome: the app state the page reads (account link, connection priority and status), toggled to show the rules react
  const [linked, setLinked] = useState(true)
  // demo-chrome: PRIMARY vs SECONDARY connection
  const [primary, setPrimary] = useState(true)
  // demo-chrome: the connection record's status (CREATED = a new setup, ACTIVE = editing a live one)
  const [status, setStatus] = useState<ConnectionStatus>("CREATED")
  // demo-chrome: the dismissible info banner's own visibility
  const [bannerVisible, setBannerVisible] = useState(true)
  const context: CredentialsContext = {
    linked,
    primary,
    isCreated: status === "CREATED",
    linkedAccountId: LINKED_ACCOUNT_ID,
    primaryId: primary ? "" : PRIMARY_ACCOUNT_ID,
  }
  const form = useForm<Credentials>({ defaultValues: { accountId: "", apiSecret: "", recordKeyFormat: null }, model, context })

  async function generate(): Promise<ApiSecret> {
    // minting a secret needs the linked account's ID, which is empty when not signed in
    if (!linked) throw new ClientError([{ message: "accountId is required", path: ["apiSecretCreate"] }])
    return (await server.apiSecretCreate()).apiSecretCreate
  }

  return (
    <TwoCol>
      <Form
        form={form}
        onSubmit={(values) => saveCredentials(values, { active: status === "ACTIVE", dirty: form.isDirty(), priority: primary ? "PRIMARY" : "SECONDARY" })}
        className="flex flex-col gap-4"
      >
        <div className="flex items-center justify-between gap-3 border-b pb-2">
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold">{status === "CREATED" ? "Connecting " : ""}Beacon Reports</h3>
            <p className="text-[12px] text-muted-foreground">Send billing and usage records to your reporting workspace.</p>
          </div>
          <Badge variant="secondary">Scheduled export</Badge>
        </div>

        {bannerVisible ? (
          <When if={c.not(c.ctx("primary"))}>
            <div className="flex items-start justify-between gap-2 rounded-md border border-sky-500/30 bg-sky-500/5 px-2.5 py-1.5 text-[13px]">
              <span>Enter the workspace&apos;s account ID by hand to add a secondary connection.</span>
              <Button type="button" variant="ghost" size="sm" className="h-6 px-1.5" onClick={() => setBannerVisible(false)} aria-label="Dismiss">
                ✕
              </Button>
            </div>
          </When>
        ) : null}

        <When if={linkedPrimary}>
          <div className="flex items-center justify-between gap-2 rounded-md bg-muted px-2.5 py-1.5 text-[13px]">
            <span className="text-muted-foreground">
              ✓ {LINKED_EMAIL} ({LINKED_ACCOUNT_ID}) account linked.
            </span>
            <Button type="button" variant="link" size="sm" className="h-auto p-0" disabled title="Switching accounts is another page">
              Change
            </Button>
          </div>
        </When>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <TextField
            name="accountId"
            label="Account ID"
            description="Your workspace's account ID, which starts with “WS-”."
            placeholder="WS-XXXXXXXX"
            required
            requiredMessage="Account ID is required"
            minLength={ACCOUNT_ID_MIN}
            maxLength={ACCOUNT_ID_MAX}
            dir="ltr"
            rules={[
              v.pattern(ACCOUNT_ID_FORMAT, "Account ID format is wrong"),
              // app context: a SECONDARY connection may not reuse the ACTIVE primary's ID
              v.assert(c.ne("accountId", e.ctx("primaryId")), "This account ID is already used by another connection."),
            ]}
          />
          <ApiSecretField
            name="apiSecret"
            label="API secret"
            description="A write-only secret the export job signs its uploads with."
            required
            requiredMessage="API secret is required"
            secrets={linked && primary ? snap.secrets : []}
            onGenerate={primary ? generate : undefined}
          />
        </div>
        <NotYet>a success adornment that follows the field&apos;s own validity (a green check in the account ID input once the format passes); \`prefix\`/\`suffix\` are static nodes.</NotYet>

        <RadioGroupField
          name="recordKeyFormat"
          label="Record key"
          description="Which value identifies a customer record in the exported rows."
          options={RECORD_KEY_OPTIONS}
          required
          requiredMessage="Please choose a record key to continue."
        />

        <When if={c.and(c.ctx("isCreated"), c.not(c.ctx("linked")), c.ctx("primary"))}>
          {/* demo-chrome: signing in is another page; here it flips the app context */}
          <Button type="button" variant="outline" size="sm" className="w-fit" onClick={() => setLinked(true)}>
            Sign in to Beacon Reports
          </Button>
        </When>

        <Form.Status<{ text: string }>
          className="text-sm"
          success={(r) => <p className="font-medium text-emerald-700 dark:text-emerald-400">✓ {r.text}</p>}
          error={(err) => (
            <p role="alert" className="rounded-md border border-destructive/40 bg-destructive/5 px-2.5 py-1.5 text-destructive">
              <span className="font-medium">Error</span> · {err.message}
            </p>
          )}
        />
        <div className="flex justify-end gap-2 border-t pt-3">
          <Form.Submit className={DEMO_BUTTON} pendingLabel="Saving…">Save changes</Form.Submit>
        </div>
      </Form>
      <div className="flex min-w-0 flex-col gap-3">
        <SidePanel title="App context" meta="c.ctx(…)">
          <div className="flex flex-col gap-2 p-3 text-[13px]">
            <label className="flex items-center justify-between gap-3">
              <span>Reporting account linked</span>
              <Switch checked={linked} onCheckedChange={setLinked} aria-label="Reporting account linked" />
            </label>
            <label className="flex items-center justify-between gap-3">
              <span>PRIMARY connection</span>
              <Switch checked={primary} onCheckedChange={setPrimary} aria-label="Primary connection" />
            </label>
            <label className="flex items-center justify-between gap-3">
              <span>Status ACTIVE (editing a live setup)</span>
              <Switch checked={status === "ACTIVE"} onCheckedChange={(on) => setStatus(on ? "ACTIVE" : "CREATED")} aria-label="Connection active" />
            </label>
            <p className="text-muted-foreground">
              Secondary: the primary&apos;s ID <code>{PRIMARY_ACCOUNT_ID}</code> is refused. Enter <code>{REJECTED_ACCOUNT_ID}</code> to see the server&apos;s error.
            </p>
            <p className="text-muted-foreground">The &quot;already used&quot; rule reads the app context, so flipping Secondary → Primary clears its error at once (no edit needed).</p>
          </div>
        </SidePanel>
        <SidePanel title="Server calls" meta={\`\${snap.log.length}\`}>
          <ul className="space-y-0.5 p-3 font-mono text-[11px] text-muted-foreground">
            {snap.log.length === 0 ? <li>none yet</li> : snap.log.map((l, i) => <li key={\`\${i}-\${l}\`}>{l}</li>)}
          </ul>
        </SidePanel>
        <LivePanel store={form} />
      </div>
    </TwoCol>
  )
}

// ── Report filters: one dialog per report row ──
interface FilterEdit {
  filter: string
  /** The report's status switch: saves the moment it flips (autosave on this path only, N10); never part of Save. */
  isActive: boolean
}

/** Flipping the status clears the filter text. */
const filterModel = defineForm<FilterEdit>()(() => ({ fields: [], effects: [{ on: ["isActive"], do: [{ set: "filter", to: "" }] }] }))

/** The row button's text: Edit when there is something to edit, Activate when off, otherwise Customize. */
function filterButtonLabel(row: ReportFilterRow): string {
  const hasActivate = row.isActive !== undefined
  if (row.filter || (hasActivate && row.isActive)) return "Edit"
  if (hasActivate && !row.isActive) return "Activate"
  return "Customize"
}

/** reportFilterUpdate with the server's message shown form-level. */
async function saveFilter(type: ReportFilterRow["type"], filter: string): Promise<void> {
  try {
    await server.reportFilterUpdate(type, filter)
  } catch (err) {
    const mapped = mapErrors<FilterEdit>(err)
    throw mapped ?? err
  }
}

function ReportFilterRowView({ row }: { row: ReportFilterRow }) {
  // "now" in effect: the build's until hydration (so the server HTML matches), then the visitor's
  const nowMs = useCurrentTime()
  // demo-chrome: the dialog is opened from code after the Activate mutation, so its open state is controlled
  const [open, setOpen] = useState(false)
  const [activating, setActivating] = useState(false)
  const hasActivate = row.isActive !== undefined

  async function openModal(): Promise<void> {
    // an inactive report is activated first, then the dialog opens
    if (hasActivate && !row.isActive) {
      setActivating(true)
      await server.reportSetActive(row.type, true)
      setActivating(false)
    }
    setOpen(true)
  }

  return (
    <div className="flex items-center justify-between gap-2 py-1.5 text-[13px]">
      <div className="flex min-w-0 items-center gap-3">
        <span className="w-56 shrink-0 truncate font-medium">{row.title}</span>
        {row.lastEdited ? <span className="truncate text-muted-foreground">Last edited {lastEditedLabel(row.lastEdited, new Date(nowMs))}</span> : null}
      </div>
      <Button type="button" variant="link" size="sm" className="h-auto p-0" disabled={activating} onClick={() => void openModal()}>
        {activating ? "Activating…" : filterButtonLabel(row)}
      </Button>
      <FormDialog<FilterEdit, void>
        open={open}
        onOpenChange={setOpen}
        title={\`Editing the \${row.title} report\`}
        form={{
          defaultValues: { filter: row.filter ?? "", isActive: row.isActive === true },
          model: filterModel,
          // the switch alone saves instantly (reportSetActive); the text waits for Save
          autosave: hasActivate ? { on: "change", debounceMs: 0, paths: ["isActive"], save: async (_patch, { values }) => void (await server.reportSetActive(row.type, values.isActive)) } : undefined,
        }}
        onSubmit={(values) => saveFilter(row.type, values.filter)}
        submitLabel="Save"
      >
        <div className="flex items-center justify-between gap-3 text-[13px]">
          <p className="text-muted-foreground">A filter narrows which records the report includes, written as space-separated <code>field:value</code> terms.</p>
          <a className={buttonVariants({ variant: "outline", size: "sm" })} href="https://example.com/docs/report-filters" target="_blank" rel="noreferrer">
            View document
          </a>
        </div>
        {hasActivate ? <SwitchField name="isActive" label={\`\${row.title} report active\`} /> : null}
        <TextareaField name="filter" label={\`Filter (\${row.title})\`} rows={3} />
      </FormDialog>
    </div>
  )
}

export function ReportFiltersExample() {
  const snap = useSyncExternalStore(server.subscribe, server.snapshot, server.snapshot)
  return (
    <TwoCol>
      <div className="flex flex-col gap-2">
        <p className="rounded-md border border-sky-500/30 bg-sky-500/5 px-2.5 py-1.5 text-[12px]">
          Each scheduled report can carry its own filter. Edit a filter here at any time; the next run picks it up.
        </p>
        <div className="divide-y">
          {snap.filterRows.map((row) => (
            <ReportFilterRowView key={row.type} row={row} />
          ))}
        </div>
        <p className="text-[12px] text-muted-foreground">
          Type <code>&lt;script&gt;</code> into a filter to see the server refuse it.
        </p>
      </div>
      <SidePanel title="Server calls" meta={\`\${snap.log.length}\`}>
        <ul className="space-y-0.5 p-3 font-mono text-[11px] text-muted-foreground">
          {snap.log.length === 0 ? <li>none yet</li> : snap.log.map((l, i) => <li key={\`\${i}-\${l}\`}>{l}</li>)}
        </ul>
      </SidePanel>
    </TwoCol>
  )
}

// ---- page chrome: the panels beside the form
/** The primary-button look for \`Form.Submit\` (\`w-fit\`: form stacks are flex columns). */
const DEMO_BUTTON = cn(buttonVariants({ size: "sm" }), "w-fit")

/** A side panel: a card with a title strip (title left, muted meta right). */
function SidePanel({ title, meta, sticky = false, className, children }: { title: ReactNode; meta?: ReactNode; sticky?: boolean; className?: string; children: ReactNode }) {
  return (
    <aside className={cn("min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card", sticky && "lg:sticky lg:top-[4.5rem]", className)}>
      <div className="flex h-8 items-center justify-between gap-2 border-b bg-muted/40 px-3 text-[12px]">
        <span className="truncate font-medium">{title}</span>
        {meta !== undefined ? <span className="shrink-0 tabular-nums text-muted-foreground">{meta}</span> : null}
      </div>
      {children}
    </aside>
  )
}

/** A JSON value as a panel body (focusable: it scrolls). */
function PanelJson({ value, maxHeight = "max-h-[420px]" }: { value: unknown; maxHeight?: string }) {
  return (
    <pre dir="ltr" tabIndex={0} className={cn("overflow-auto p-3 text-[11px] leading-relaxed focus-visible:outline-2 focus-visible:outline-ring", maxHeight)}>
      {JSON.stringify(value, null, 2)}
    </pre>
  )
}

/** The read side of a store that {@link LivePanel} shows; every \`FormStore\` fits. */
interface LiveSource extends SnapshotSource {
  serialize(opts?: { redact?: boolean; mode?: "full" | "dirty" }): unknown
  isDirty(): boolean
  getStatus(): SubmitStatus
  getIssues(): Issue[]
}

/** The store's live serialized payload, dirty flag, submit status and issues. */
function LivePanel({ store, title = "Live payload", redact = false, mode = "full" }: { store: LiveSource; title?: string; redact?: boolean; mode?: "full" | "dirty" }) {
  const { payload, dirty, status, issues } = useFormSnapshot(store, (s) => ({ payload: s.serialize({ redact, mode }), dirty: s.isDirty(), status: s.getStatus(), issues: s.getIssues() }), deepEqual)
  return (
    <SidePanel sticky title={title} meta={\`\${dirty ? "● dirty" : "clean"} · \${status}\`}>
      <PanelJson value={payload} />
      {issues.length > 0 ? (
        <ul className="space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive">
          {issues.map((i) => (
            <li key={i.path}>
              {i.path || "(form)"}: {i.message}
            </li>
          ))}
        </ul>
      ) : null}
    </SidePanel>
  )
}

/** The form beside its side panels (one column below lg). */
function TwoCol({ children, stack = false }: { children: ReactNode; stack?: boolean }) {
  return <div className={cn("grid grid-cols-1 gap-4", !stack && "lg:grid-cols-[minmax(0,1fr)_280px]")}>{Children.toArray(children)}</div>
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>i(()=>import(`./api-credentials-bCo_aGqg.js`),[]));function le(){return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(n,{title:`API credentials`,children:[`A settings page that connects an invented reporting service, built on the declarative API with generated-client GraphQL shapes. The account ID mirrors the linked account while the app context says "linked + primary" (a`,` `,(0,T.jsx)(`code`,{children:`derived`}),` mirror over `,(0,T.jsx)(`code`,{children:`e.ctx`}),`); a secondary connection may not reuse the primary's ID (`,(0,T.jsx)(`code`,{children:`v.assert`}),` over app context); the API secret takes free text or a listed secret and can mint one; server failures show `,(0,T.jsx)(`code`,{children:`errors[0].message`}),` form-level through `,(0,T.jsx)(`code`,{children:`mapErrors`}),`.`]}),(0,T.jsx)(C,{n:1,title:`Connect the service`,blurb:`Flip the app context on the right: the ID field turns into a mirror, the secret list and the Create action follow the priority.`,code:$,children:(0,T.jsx)(q,{})}),(0,T.jsx)(C,{n:2,title:`Report filters`,blurb:`Each report's filter is edited in its own dialog and saved straight to the server; Churn alert is activated first, and its switch saves the moment it flips.`,code:$,children:(0,T.jsx)(oe,{})})]})}export{le as component};