import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./switch-CA6hUnoS.js";import{s as n}from"./kit-docs-CvNs0WqT.js";import{Bc as r,Cc as i,Ic as a,hi as o,ti as s}from"./index-9y5uwRd3.js";import{t as c}from"./badge-CMT8Lr82.js";import{W as l}from"./messages-BpgLhfTN.js";import{A as ee,At as u,J as d,Y as f,c as p,d as m,f as h,h as g}from"./field-config-62hz5rv-.js";import{a as _,d as v,o as y,t as te}from"./fields-3rMiSNLY.js";import{t as ne}from"./submit-pipeline-CfLjfYT6.js";import{n as b}from"./wizard-BPjDeHLA.js";import{n as x,r as S,t as re}from"./wizard-chrome-CIUmy4js.js";import{t as C}from"./submit-phases-BOl0iau1.js";import{a as w}from"./choice-ZQTH2Ken.js";import{t as ie}from"./async-multi-select-COIPgg-J.js";import{t as T}from"./field-array-B0BhXTG7.js";import{t as E}from"./display-BL6k8-He.js";import{t as D}from"./example-CZLJLtIC.js";import"./demos-DilKtWQ6.js";var O=e(r(),1),k=a();function A(e){return new Promise(t=>setTimeout(t,e))}var ae=120,oe=1e3,j=[{id:`ledger`,name:`Ledgerly`,pattern:`oauth`,idLabel:`Company ID`,placeholder:`LG-XXXXXX`,manual:!0,steps:[`Open Ledgerly → Settings → Team.`,`Invite access@brightline.example as an Accountant.`,`Paste your Company ID below.`],confirmLabel:`I have invited Brightline to Ledgerly.`},{id:`crm`,name:`Pipewell CRM`,pattern:`oauth`,idLabel:`Account ID`,placeholder:`123-456-7890`,manual:!0,steps:[`Open Pipewell → Admin → Users.`,`Invite crm@brightline.example with Admin access.`,`Paste your Account ID and Workspace ID below.`],confirmLabel:`I have sent the Pipewell invitation.`},{id:`helpdesk`,name:`Deskbird`,pattern:`idInput`,idLabel:`Helpdesk ID`,placeholder:`Enter your ID`,manual:!0,steps:[`Open Deskbird → Settings → Agents.`,`Add partner organisation 4742-1046.`,`Approve; we accept the pending request.`],confirmLabel:`I have shared access to my helpdesk.`},{id:`wiki`,name:`Notewise wiki`,pattern:`idInput`,idLabel:`Wiki space ID`,placeholder:`WK-XXXXXXX`,idPattern:/^WK-[A-Z0-9]{4,}$/i,idPatternMessage:`A wiki space ID looks like WK-ABC1234`,manual:!0,steps:[`Open Notewise → Space settings → Members.`,`Add wiki@brightline.example with Edit permission.`,`Paste your space ID below.`],confirmLabel:`I have added Brightline to the wiki space.`},{id:`chat`,name:`Chatterly`,pattern:`idInput`,idLabel:`Workspace handle`,placeholder:`Enter your handle`,manual:!0,steps:[`Open Chatterly → Admin → Guests.`,`Invite guest account 1580-4433.`,`Paste your workspace handle below.`],confirmLabel:`I have invited the guest account.`},{id:`storage`,name:`Filebay`,pattern:`idInput`,idLabel:`Drive ID`,placeholder:`Enter your ID`,manual:!0,steps:[`Open Filebay → Admin → Sharing.`,`Share the team drive with partner ID 7120044412.`,`Paste your Drive ID below.`],confirmLabel:`I have shared the team drive.`},{id:`billing`,name:`Paylane`,pattern:`idInput`,idLabel:`Paylane public key`,placeholder:`Enter your key`,manual:!0,steps:[`Open Paylane → Settings → Team.`,`Invite billing@brightline.example as a Viewer.`,`Paste your public key below.`],confirmLabel:`I have invited Brightline to Paylane.`},{id:`status`,name:`Uptick status page`,pattern:`idInput`,idLabel:`Status page ID`,placeholder:`Enter your ID`,manual:!1,steps:[],confirmLabel:``}],M=j.filter(e=>e.pattern===`oauth`),se=j.filter(e=>e.pattern===`idInput`),ce=j.filter(e=>e.manual),le=j.filter(e=>!e.manual).map(e=>e.id),N=Object.fromEntries(j.map(e=>[e.id,e.name])),ue={ledger:`LG-R5V9YZ`,crm:`987-654-3210`},P=e=>({system:e,extId:``,workspaceId:``,confirmed:!1,granted:!1}),de={requirements:{usesWiki:null,multiRegion:null,hasLegacyData:null,migrationNotes:``},systems:[`ledger`,`crm`,`helpdesk`].map(P),contacts:[],notes:``},F={yes:`Yes`,no:`No`,unsure:`Not sure`},I=Object.entries(F).map(([e,t])=>({value:e,label:t})),{c:L,e:R,v:z}=f(),B=f(),V=d()(()=>({fields:[],effects:[{on:[`requirements.usesWiki`],when:L.and(L.eq(`requirements.usesWiki`,`yes`),L.none(`systems`,e=>e.c.eq(`system`,`wiki`))),do:[{set:`systems`,to:R.op(`merge`,R.lit([P(`wiki`)]),R.ref(`systems`))}]},{on:[`requirements.usesWiki`],when:L.ne(`requirements.usesWiki`,`yes`),do:[{set:`systems`,to:R.filter(`systems`,e=>e.c.or(e.c.ne(`system`,`wiki`),e.c.filled(`extId`),e.c.eq(`granted`,!0)))}]}]})),H=100,U=[`requirements`,`systems`,`contacts`,`review`],fe=`chat`,W=()=>({record:de,completed:[],step:0,ticketsCreated:0,ticketRef:null,log:[]});function pe(){let e=W(),t=!0,n=new Set,r=(t,r)=>{e={...e,...t,log:r===void 0?e.log:[...e.log,r]};for(let e of n)e()};return{subscribe:e=>(n.add(e),()=>n.delete(e)),snapshot:()=>e,setFailure:e=>{t=e},reset:()=>{t=!0,r(W())},async saveStep(t,n){await A(300);let i=U.findIndex(e=>e===t);r({record:n,step:Math.max(e.step,i+1),completed:[...new Set([...e.completed,t])]},`bookingSave(step: ${i+1})`)},async connectSystem(e){if(await A(250),e.system===fe&&t)throw t=!1,r({},`systemConnect(${e.system}) → 502`),new u({message:`Chatterly did not answer (502). Try again.`,retryable:!0});return r({},`systemConnect(${e.system})`),`${e.system}-ok`},async createTicket(t){await A(300);let n=`SB-${1040+e.ticketsCreated+1}`;return r({ticketsCreated:e.ticketsCreated+1,ticketRef:n},`createTicket(${t.length} contacts) → ${n}`),n},async finish(e){await A(250),r({step:H,completed:[...U]},`bookingSave(step: 100, ticketId: ${e})`)}}}var G=pe(),K=[{value:`c1`,label:`Aylin Demir`,hint:`aylin@acme.example`},{value:`c2`,label:`Marco Rossi`,hint:`marco@acme.example`},{value:`c3`,label:`Priya Nair`,hint:`priya@acme.example`}],q={async search({query:e}){await A(200);let t=e.toLowerCase();return{options:K.filter(e=>e.label.toLowerCase().includes(t)),hasMore:!1}},async create(e){await A(300);let t={value:`c${K.length+1}`,label:e};return K.push(t),t}},me=[{id:`save`,label:`Save the request`,inputs:e=>e,run:e=>G.saveStep(`review`,e)},{id:`systems`,label:`Connect systems`,run:(e,t)=>t.each(e.systems.map(e=>({key:e.system,label:N[e.system]??e.system})),t=>{let n=e.systems.find(e=>e.system===t.key);return n?G.connectSystem(n):void 0})},{id:`ticket`,label:`Create the support ticket`,run:e=>G.createTicket(e.contacts)},{id:`finish`,label:`Mark the request submitted`,run:(e,t)=>{let n=t.results.ticket;return typeof n==`string`?G.finish(n):Promise.reject(new u({message:`No ticket to attach`,retryable:!0}))}}];function J({title:e,children:t}){return(0,k.jsxs)(`div`,{className:`flex flex-col gap-0.5`,children:[(0,k.jsx)(`h3`,{className:`text-sm font-semibold`,children:e}),(0,k.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:t})]})}var Y={idle:{text:`Not connected`,variant:`outline`},connecting:{text:`Connecting…`,variant:`secondary`},connected:{text:`Connected`,variant:`default`},failed:{text:`Failed`,variant:`destructive`}};function he(e){let t=e=>typeof e==`string`?K.find(t=>t.value===e)?.label??F[e]??(e===``?`—`:e):e==null?`—`:String(e);return Array.isArray(e.value)?e.value.length?e.value.map(t).join(`, `):`—`:t(e.value)}var ge={idle:`rounded-full border px-2 py-0.5 text-xs font-normal text-muted-foreground`,connecting:`rounded-full border px-2 py-0.5 text-xs font-normal text-muted-foreground`,connected:`rounded-full border border-emerald-600/40 bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-300`,failed:`rounded-full border border-destructive/40 px-2 py-0.5 text-xs font-medium text-destructive`};function X({ch:e,label:t,variant:n}){return(0,k.jsxs)(v,{empty:P(e.id),title:`Access management · ${e.name}`,description:`Follow these steps, then send the access request. Cancel leaves the row as it was.`,trigger:(0,k.jsx)(s,{type:`button`,size:`sm`,variant:n,className:`w-fit`,children:t}),submitLabel:`Save & send`,set:()=>[{path:`granted`,value:!0}],children:[(0,k.jsx)(`ol`,{className:`list-decimal space-y-1 rounded-md border bg-muted/30 py-2 ps-7 pe-3 text-[13px]`,children:e.steps.map(e=>(0,k.jsx)(`li`,{children:e},e))}),(0,k.jsx)(_,{name:`extId`,label:e.idLabel,placeholder:e.placeholder,required:!0,dir:`ltr`,rules:e.idPattern?[B.v.pattern(e.idPattern,e.idPatternMessage)]:void 0}),(0,k.jsx)(h,{if:B.c.eq(`system`,`crm`),children:(0,k.jsx)(_,{name:`workspaceId`,label:`Workspace ID`,placeholder:`WS-123456`,required:!0,dir:`ltr`,rules:[B.v.pattern(/^WS-\d{6,}$/,`A workspace ID looks like WS-123456`)]})}),(0,k.jsx)(te,{name:`confirmed`,label:e.confirmLabel,required:!0,rules:[B.v.oneOf([!0],`Confirm this step to continue`)]})]})}function _e({ch:e,status:t,onConnect:n}){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,children:[(0,k.jsx)(`span`,{className:`text-muted-foreground`,children:`Connect with SSO`}),(0,k.jsx)(`span`,{className:ge[t],children:Y[t].text}),t===`connected`?(0,k.jsx)(`span`,{className:`font-mono text-xs`,children:ue[e.id]}):null,t===`connected`?null:(0,k.jsx)(s,{type:`button`,size:`sm`,variant:`outline`,disabled:t===`connecting`,onClick:()=>n(e.id),children:`Connect`})]}),(0,k.jsx)(E,{name:`.extId`,label:e.idLabel,tone:`inline`,render:e=>typeof e==`string`&&e!==``?(0,k.jsx)(`span`,{className:`font-mono text-xs`,children:e}):`Added in the access step`}),(0,k.jsx)(h,{if:L.eq(R.ctx(`oauth_${e.id}`),`connected`),children:(0,k.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Connected: API access granted. Manual access below is still required.`})})]})}function ve({oauth:e,onConnect:t}){return(0,k.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,k.jsx)(E,{name:`.system`,label:`System`,tone:`inline`,render:e=>(0,k.jsx)(`span`,{className:`font-medium`,children:typeof e==`string`?N[e]??e:``})}),(0,k.jsxs)(m,{of:`.system`,children:[M.map(n=>(0,k.jsx)(m.Case,{is:n.id,children:(0,k.jsx)(_e,{ch:n,status:e[n.id]??`idle`,onConnect:t})},n.id)),se.map(e=>(0,k.jsx)(m.Case,{is:e.id,children:(0,k.jsx)(_,{name:`.extId`,label:e.idLabel,placeholder:e.placeholder,required:!0,dir:`ltr`,rules:e.idPattern?[z.pattern(e.idPattern,e.idPatternMessage)]:void 0})},e.id))]}),(0,k.jsx)(h,{if:L.notIn(`.system`,le),children:(0,k.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-2`,children:[(0,k.jsx)(E,{name:`.granted`,label:`Manual access`,tone:`inline`,render:e=>e===!0?`✓ Granted`:`Not granted yet`,rules:[z.oneOf([!0],`Grant manual access, or remove this system`)]}),(0,k.jsx)(m,{of:`.system`,children:ce.map(e=>(0,k.jsxs)(m.Case,{is:e.id,children:[(0,k.jsx)(h,{if:L.ne(`.granted`,!0),children:(0,k.jsx)(X,{ch:e,label:`Provide access`,variant:`default`})}),(0,k.jsx)(h,{if:L.eq(`.granted`,!0),children:(0,k.jsx)(X,{ch:e,label:`Edit access`,variant:`outline`})})]},e.id))})]})})]})}function ye(){return(0,k.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5`,children:[(0,k.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`Add:`}),j.map(e=>(0,k.jsx)(h,{if:L.none(`systems`,t=>t.c.eq(`system`,e.id)),children:(0,k.jsx)(T.Add,{to:`systems`,value:()=>P(e.id),children:e.name})},e.id))]})}function be({initial:e,completed:t,oauth:n,onConnect:r,side:i}){let a=ee({defaultValues:e,model:V,context:{oauth_ledger:n.ledger??`idle`,oauth_crm:n.crm??`idle`}}),o=ne(me),c=(0,O.useSyncExternalStore)(G.subscribe,G.snapshot,G.snapshot),l=(0,k.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-3`,children:[i,(0,k.jsx)(Se,{store:a})]});return c.step===H?(0,k.jsxs)(Q,{children:[(0,k.jsxs)(`div`,{className:`flex flex-col gap-2 rounded-lg border p-4 text-[13px]`,children:[(0,k.jsxs)(`p`,{className:`font-medium text-emerald-700 dark:text-emerald-400`,children:[`✓ Request submitted — ticket `,c.ticketRef,`.`]}),(0,k.jsx)(`p`,{className:`text-muted-foreground`,children:`The app redirects to the service request here (server step 100).`}),(0,k.jsx)(C,{phases:o.phases})]}),l]}):(0,k.jsxs)(Q,{children:[(0,k.jsxs)(p,{form:a,onSubmit:o.onSubmit,className:`flex flex-col gap-4`,children:[(0,k.jsxs)(b,{completed:t,onStepComplete:e=>G.saveStep(e,a.serialize()),submitLabel:`Submit request`,progress:(0,k.jsx)(x,{}),nav:(0,k.jsx)(re,{}),children:[(0,k.jsxs)(b.Step,{id:`requirements`,label:`Setup requirements`,scope:`requirements`,children:[(0,k.jsx)(J,{title:`Setup requirements`,children:`Help us understand your current setup so we can tailor the implementation.`}),(0,k.jsx)(w,{name:`.usesWiki`,label:`Do you already keep your team docs in a wiki?`,description:`If you have one, we tidy it before adding anything. “Yes” adds a wiki system.`,options:I,required:!0}),(0,k.jsx)(w,{name:`.multiRegion`,label:`Does your team work across several offices or time zones?`,options:I,required:!0}),(0,k.jsx)(w,{name:`.hasLegacyData`,label:`Do you have data to migrate from an older system?`,options:I,required:!0}),(0,k.jsx)(y,{name:`.migrationNotes`,label:`Migration details`,description:`Required when you answered Yes; optional when you are not sure.`,placeholder:`Tell us what to migrate and from where (e.g. spreadsheets, an older CRM)`,visibleIf:L.in(`requirements.hasLegacyData`,[`yes`,`unsure`]),required:L.eq(`requirements.hasLegacyData`,`yes`),maxLength:ae,counter:!0,rows:3})]}),(0,k.jsxs)(b.Step,{id:`systems`,label:`Systems`,children:[(0,k.jsx)(J,{title:`Systems`,children:`Each system needs its ID and manual access for our team. Remove the ones you do not need.`}),(0,k.jsxs)(T,{name:`systems`,label:`Systems`,rowLabel:`System`,min:1,layout:`cards`,minMessage:`Keep at least one system`,children:[(0,k.jsx)(ve,{oauth:n,onConnect:r}),(0,k.jsx)(T.RowActions,{remove:!0})]}),(0,k.jsx)(ye,{})]}),(0,k.jsxs)(b.Step,{id:`contacts`,label:`Contacts & notes`,children:[(0,k.jsx)(J,{title:`Contacts & notes`,children:`Who should our team talk to, and anything we should know.`}),(0,k.jsx)(ie,{name:`contacts`,label:`Contacts`,description:`Search, or type a new name to create the contact.`,required:!0,loadOptions:q.search,onCreate:q.create,selectedOptions:K}),(0,k.jsx)(y,{name:`notes`,label:`Notes`,placeholder:`Goals, deadlines, anything unusual about your team`,required:!0,maxLength:oe,counter:!0,rows:4})]}),(0,k.jsxs)(b.Step,{id:`review`,label:`Review & submit`,children:[(0,k.jsx)(J,{title:`Review & submit`,children:`Check everything, then submit. Each phase of the submit is shown below.`}),(0,k.jsx)(S,{format:he}),(0,k.jsx)(C,{phases:o.phases})]})]}),(0,k.jsx)(p.Status,{className:`text-sm`,error:(e,{retry:t})=>(0,k.jsxs)(`p`,{className:`flex flex-wrap items-center gap-2 text-destructive`,children:[e.message,t?(0,k.jsx)(s,{type:`button`,size:`sm`,variant:`outline`,onClick:t,children:`Retry`}):null]})})]}),l]})}function Z({title:e,meta:t,sticky:n=!1,className:r,children:i}){return(0,k.jsxs)(`aside`,{className:o(`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,n&&`lg:sticky lg:top-[4.5rem]`,r),children:[(0,k.jsxs)(`div`,{className:`flex h-8 items-center justify-between gap-2 border-b bg-muted/40 px-3 text-[12px]`,children:[(0,k.jsx)(`span`,{className:`truncate font-medium`,children:e}),t===void 0?null:(0,k.jsx)(`span`,{className:`shrink-0 tabular-nums text-muted-foreground`,children:t})]}),i]})}function xe({value:e,maxHeight:t=`max-h-[420px]`}){return(0,k.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:o(`overflow-auto p-3 text-[11px] leading-relaxed focus-visible:outline-2 focus-visible:outline-ring`,t),children:JSON.stringify(e,null,2)})}function Se({store:e,title:t=`Live payload`,redact:n=!1,mode:r=`full`}){let{payload:i,dirty:a,status:o,issues:s}=g(e,e=>({payload:e.serialize({redact:n,mode:r}),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),l);return(0,k.jsxs)(Z,{sticky:!0,title:t,meta:`${a?`● dirty`:`clean`} · ${o}`,children:[(0,k.jsx)(xe,{value:i}),s.length>0?(0,k.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:s.map(e=>(0,k.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}function Q({children:e,stack:t=!1}){return(0,k.jsx)(`div`,{className:o(`grid grid-cols-1 gap-4`,!t&&`lg:grid-cols-[minmax(0,1fr)_280px]`),children:O.Children.toArray(e)})}function Ce(){let[e,n]=(0,O.useState)({ledger:`idle`,crm:`idle`}),[r,i]=(0,O.useState)(0),[a,o]=(0,O.useState)(!0),l=(0,O.useSyncExternalStore)(G.subscribe,G.snapshot,G.snapshot);return(0,k.jsx)(be,{initial:l.record,completed:l.completed,oauth:e,onConnect:e=>{n(t=>({...t,[e]:`connecting`})),A(700).then(()=>n(t=>({...t,[e]:`connected`})))},side:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Z,{title:`Server`,meta:`bookingGet`,children:(0,k.jsxs)(`div`,{className:`flex flex-col gap-2 p-3 text-[13px]`,children:[(0,k.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5`,children:[(0,k.jsx)(`span`,{className:`text-muted-foreground`,children:`Completed:`}),l.completed.length===0?(0,k.jsx)(`span`,{className:`text-muted-foreground`,children:`none`}):l.completed.map(e=>(0,k.jsx)(c,{variant:`secondary`,children:e},e))]}),(0,k.jsxs)(`p`,{className:`tabular-nums`,children:[`step `,l.step,` · tickets created `,l.ticketsCreated,l.ticketRef?` · ${l.ticketRef}`:``]}),(0,k.jsxs)(`label`,{className:`flex items-center justify-between gap-3`,children:[(0,k.jsx)(`span`,{children:`First Chatterly call fails`}),(0,k.jsx)(t,{checked:a,onCheckedChange:e=>{o(e),G.setFailure(e)},"aria-label":`First Chatterly call fails`})]}),(0,k.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,k.jsx)(s,{type:`button`,size:`sm`,variant:`outline`,onClick:()=>i(e=>e+1),children:`Reload from server`}),(0,k.jsx)(s,{type:`button`,size:`sm`,variant:`ghost`,onClick:()=>{G.reset(),o(!0),n({ledger:`idle`,crm:`idle`}),i(e=>e+1)},children:`Start over`})]}),l.log.length>0?(0,k.jsx)(`ol`,{className:`max-h-56 overflow-auto rounded border bg-muted/30 p-2 font-mono text-[11px]`,children:l.log.map((e,t)=>(0,k.jsx)(`li`,{children:e},`${t}-${e}`))}):null]})}),(0,k.jsx)(Z,{title:`App context`,meta:`c.ctx(…)`,children:(0,k.jsx)(`div`,{className:`flex flex-col gap-1 p-3 text-[13px]`,children:M.map(t=>(0,k.jsxs)(`p`,{className:`flex items-center justify-between gap-2`,children:[(0,k.jsxs)(`span`,{children:[t.name,` SSO`]}),(0,k.jsx)(c,{variant:Y[e[t.id]??`idle`].variant,children:Y[e[t.id]??`idle`].text})]},t.id))})})]})},r)}var $=`import { useState, useSyncExternalStore, type ReactNode, Children } from "react"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { Switch } from "@kitora/ui/switch"
import { defineForm, kit, SubmitError, type PipelinePhase, deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"
import { Form, useForm, useSubmitPipeline, Variant, When, Wizard, type SummaryRow, useFormSnapshot, type SnapshotSource } from "@kitora/form/react"
import { AsyncMultiSelectField, FieldArray, CheckboxField, DisplayField, RowSubFormDialog, SegmentedField, SubmitPhases, TextareaField, TextField, WizardNav, WizardProgress, WizardSummary, type ChoiceOption, type RemoteOption } from "@kitora/form/fields"
import { cn } from "@kitora/ui/utils"

// ---- stubs: replace with your API
/** Resolve after \`ms\` — the mock network. */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// ---- the page
// Real-world form: booking an onboarding service package from a vendor, rebuilt on the declarative
// API only. It exercises: server-seeded wizard progress that never regresses (G7, \`<Wizard
// completed>\`), tri-state questions with a conditional required note (catalog SegmentedField +
// \`required={cond}\`), a repeater of system rows each with a single-sign-on status from app context
// (G2) and a per-system access modal that commits into ITS row (G3, \`RowSubFormDialog\`), contacts
// with create-inline, and a phased submit — save → one call per system → ticket → finish — that
// resumes from the failed phase and item on Retry without creating a second ticket (G4,
// \`useSubmitPipeline\`).

// ── the form's shape ─────────────────────────────────────────────────
type Answer = "yes" | "no" | "unsure"

type SystemId = "ledger" | "crm" | "helpdesk" | "wiki" | "chat" | "storage" | "billing" | "status"

type OAuthStatus = "idle" | "connecting" | "connected" | "failed"

interface Requirements {
  usesWiki: Answer | null
  multiRegion: Answer | null
  hasLegacyData: Answer | null
  migrationNotes: string
}

type SystemRow = {
  system: SystemId
  /** Company ID / Account ID / Helpdesk ID / Wiki space ID… — typed in the row or in the access modal. */
  extId: string
  /** Pipewell CRM only: the WS- workspace ID. */
  workspaceId: string
  /** The modal's "I have shared access" acknowledgement. */
  confirmed: boolean
  /** Manual access granted (set by the modal's commit, never typed). */
  granted: boolean
}

interface BookingRequest {
  requirements: Requirements
  systems: SystemRow[]
  contacts: string[]
  notes: string
}

const MIGRATION_NOTES_MAX = 120

const NOTES_MAX = 1000

/** One system system: how its ID is captured and the manual-access steps its modal shows. */
interface SystemConfig {
  id: SystemId
  name: string
  /** \`oauth\`: "Connect with SSO" detects the ID; \`idInput\`: the customer types it in the row. */
  pattern: "oauth" | "idInput"
  idLabel: string
  placeholder: string
  /** A format the ID must match (wiki space IDs); otherwise any non-empty value. */
  idPattern?: RegExp
  idPatternMessage?: string
  /** False for systems without a manual-access flow yet: a valid ID completes them. */
  manual: boolean
  steps: readonly string[]
  confirmLabel: string
}

const WIKI_ID = /^WK-[A-Z0-9]{4,}$/i

const SYSTEMS: readonly SystemConfig[] = [
  {
    id: "ledger",
    name: "Ledgerly",
    pattern: "oauth",
    idLabel: "Company ID",
    placeholder: "LG-XXXXXX",
    manual: true,
    steps: ["Open Ledgerly → Settings → Team.", "Invite access@brightline.example as an Accountant.", "Paste your Company ID below."],
    confirmLabel: "I have invited Brightline to Ledgerly.",
  },
  {
    id: "crm",
    name: "Pipewell CRM",
    pattern: "oauth",
    idLabel: "Account ID",
    placeholder: "123-456-7890",
    manual: true,
    steps: ["Open Pipewell → Admin → Users.", "Invite crm@brightline.example with Admin access.", "Paste your Account ID and Workspace ID below."],
    confirmLabel: "I have sent the Pipewell invitation.",
  },
  {
    id: "helpdesk",
    name: "Deskbird",
    pattern: "idInput",
    idLabel: "Helpdesk ID",
    placeholder: "Enter your ID",
    manual: true,
    steps: ["Open Deskbird → Settings → Agents.", "Add partner organisation 4742-1046.", "Approve; we accept the pending request."],
    confirmLabel: "I have shared access to my helpdesk.",
  },
  {
    id: "wiki",
    name: "Notewise wiki",
    pattern: "idInput",
    idLabel: "Wiki space ID",
    placeholder: "WK-XXXXXXX",
    idPattern: WIKI_ID,
    idPatternMessage: "A wiki space ID looks like WK-ABC1234",
    manual: true,
    steps: ["Open Notewise → Space settings → Members.", "Add wiki@brightline.example with Edit permission.", "Paste your space ID below."],
    confirmLabel: "I have added Brightline to the wiki space.",
  },
  {
    id: "chat",
    name: "Chatterly",
    pattern: "idInput",
    idLabel: "Workspace handle",
    placeholder: "Enter your handle",
    manual: true,
    steps: ["Open Chatterly → Admin → Guests.", "Invite guest account 1580-4433.", "Paste your workspace handle below."],
    confirmLabel: "I have invited the guest account.",
  },
  {
    id: "storage",
    name: "Filebay",
    pattern: "idInput",
    idLabel: "Drive ID",
    placeholder: "Enter your ID",
    manual: true,
    steps: ["Open Filebay → Admin → Sharing.", "Share the team drive with partner ID 7120044412.", "Paste your Drive ID below."],
    confirmLabel: "I have shared the team drive.",
  },
  {
    id: "billing",
    name: "Paylane",
    pattern: "idInput",
    idLabel: "Paylane public key",
    placeholder: "Enter your key",
    manual: true,
    steps: ["Open Paylane → Settings → Team.", "Invite billing@brightline.example as a Viewer.", "Paste your public key below."],
    confirmLabel: "I have invited Brightline to Paylane.",
  },
  {
    id: "status",
    name: "Uptick status page",
    pattern: "idInput",
    idLabel: "Status page ID",
    placeholder: "Enter your ID",
    manual: false,
    steps: [],
    confirmLabel: "",
  },
]

const OAUTH_SYSTEMS = SYSTEMS.filter((ch) => ch.pattern === "oauth")

const ID_SYSTEMS = SYSTEMS.filter((ch) => ch.pattern === "idInput")

const MANUAL_SYSTEMS = SYSTEMS.filter((ch) => ch.manual)

const NO_MANUAL_IDS = SYSTEMS.filter((ch) => !ch.manual).map((ch) => ch.id)

const SYSTEM_NAME: Readonly<Record<string, string>> = Object.fromEntries(SYSTEMS.map((ch) => [ch.id, ch.name]))

/** What "Connect with SSO" detects, per OAuth system (a stub of the app's profile query). */
const DETECTED_ID: Readonly<Record<string, string>> = {
  ledger: "LG-R5V9YZ",
  crm: "987-654-3210",
}

const emptyRow = (system: SystemId): SystemRow => ({
  system,
  extId: "",
  workspaceId: "",
  confirmed: false,
  granted: false,
})

const DEFAULT_SYSTEMS: readonly SystemId[] = ["ledger", "crm", "helpdesk"]

const DEFAULTS: BookingRequest = {
  requirements: {
    usesWiki: null,
    multiRegion: null,
    hasLegacyData: null,
    migrationNotes: "",
  },
  systems: DEFAULT_SYSTEMS.map(emptyRow),
  contacts: [],
  notes: "",
}

const ANSWER_LABEL: Readonly<Record<string, string>> = { yes: "Yes", no: "No", unsure: "Not sure" }

const ANSWERS: ChoiceOption[] = Object.entries(ANSWER_LABEL).map(([value, label]) => ({ value, label }))

const { c, e, v } = kit<BookingRequest>()

/** Rules of the access modal's scratch form, whose values are one row. */
const rk = kit<SystemRow>()

// "Uses a wiki: yes" adds a wiki row first (once); any other answer removes it again while untouched.
const model = defineForm<BookingRequest>()(() => ({
  fields: [],
  effects: [
    {
      on: ["requirements.usesWiki"],
      when: c.and(
        c.eq("requirements.usesWiki", "yes"),
        c.none("systems", (r) => r.c.eq("system", "wiki")),
      ),
      do: [
        {
          set: "systems",
          to: e.op("merge", e.lit([emptyRow("wiki")]), e.ref("systems")),
        },
      ],
    },
    {
      on: ["requirements.usesWiki"],
      when: c.ne("requirements.usesWiki", "yes"),
      do: [
        {
          set: "systems",
          to: e.filter("systems", (r) => r.c.or(r.c.ne("system", "wiki"), r.c.filled("extId"), r.c.eq("granted", true))),
        },
      ],
    },
  ],
}))

// ── the stub server ──────────────────────────────────────────────────
/** What the server knows about this service request. \`step\` 100 = submitted. */
interface ServerState {
  record: BookingRequest
  completed: readonly string[]
  step: number
  ticketsCreated: number
  ticketRef: string | null
  log: readonly string[]
}

const SUBMITTED_STEP = 100

const STEP_IDS = ["requirements", "systems", "contacts", "review"] as const

const FAILING_SYSTEM: SystemId = "chat"

const freshServer = (): ServerState => ({
  record: DEFAULTS,
  completed: [],
  step: 0,
  ticketsCreated: 0,
  ticketRef: null,
  log: [],
})

/** The app's GraphQL API, in memory: saveStep / per-system call / createTicket / finish. */
function createServer() {
  let state = freshServer()
  /** "Fail once" switch per submission: the first Chatterly call errors, the retry succeeds. */
  let failNext = true
  const listeners = new Set<() => void>()
  const write = (patch: Partial<ServerState>, line?: string) => {
    state = {
      ...state,
      ...patch,
      log: line === undefined ? state.log : [...state.log, line],
    }
    for (const l of listeners) l()
  }
  return {
    subscribe: (l: () => void) => {
      listeners.add(l)
      return () => listeners.delete(l)
    },
    snapshot: () => state,
    setFailure: (on: boolean) => {
      failNext = on
    },
    reset: () => {
      failNext = true
      write(freshServer())
    },
    async saveStep(id: string, record: BookingRequest) {
      await delay(300)
      const at = STEP_IDS.findIndex((s) => s === id)
      // the server's progress only grows: saving an earlier step never lowers it
      write(
        {
          record,
          step: Math.max(state.step, at + 1),
          completed: [...new Set([...state.completed, id])],
        },
        \`bookingSave(step: \${at + 1})\`,
      )
    },
    async connectSystem(row: SystemRow) {
      await delay(250)
      if (row.system === FAILING_SYSTEM && failNext) {
        failNext = false
        write({}, \`systemConnect(\${row.system}) → 502\`)
        throw new SubmitError({
          message: "Chatterly did not answer (502). Try again.",
          retryable: true,
        })
      }
      write({}, \`systemConnect(\${row.system})\`)
      return \`\${row.system}-ok\`
    },
    async createTicket(contacts: readonly string[]) {
      await delay(300)
      const ref = \`SB-\${1040 + state.ticketsCreated + 1}\`
      write({ ticketsCreated: state.ticketsCreated + 1, ticketRef: ref }, \`createTicket(\${contacts.length} contacts) → \${ref}\`)
      return ref
    },
    async finish(ticketRef: string) {
      await delay(250)
      write({ step: SUBMITTED_STEP, completed: [...STEP_IDS] }, \`bookingSave(step: 100, ticketId: \${ticketRef})\`)
    },
  }
}

const server = createServer()

const CONTACTS: RemoteOption[] = [
  { value: "c1", label: "Aylin Demir", hint: "aylin@acme.example" },
  { value: "c2", label: "Marco Rossi", hint: "marco@acme.example" },
  { value: "c3", label: "Priya Nair", hint: "priya@acme.example" },
]

const contactsApi = {
  async search({ query }: { query: string }) {
    await delay(200)
    const q = query.toLowerCase()
    return {
      options: CONTACTS.filter((o) => o.label.toLowerCase().includes(q)),
      hasMore: false,
    }
  },
  async create(label: string): Promise<RemoteOption> {
    await delay(300)
    const created = { value: \`c\${CONTACTS.length + 1}\`, label }
    CONTACTS.push(created)
    return created
  },
}

/** The phased submit: each phase is one server call; a retry resumes at the failed phase (and row). */
const PHASES: PipelinePhase<BookingRequest>[] = [
  {
    id: "save",
    label: "Save the request",
    inputs: (p) => p,
    run: (p) => server.saveStep("review", p),
  },
  {
    id: "systems",
    label: "Connect systems",
    run: (p, ctx) =>
      ctx.each(
        p.systems.map((row) => ({
          key: row.system,
          label: SYSTEM_NAME[row.system] ?? row.system,
        })),
        (item) => {
          const row = p.systems.find((r) => r.system === item.key)
          return row ? server.connectSystem(row) : undefined
        },
      ),
  },
  // no \`inputs\`: once created, the ticket stands — a retry reuses its ref instead of opening a second one
  {
    id: "ticket",
    label: "Create the support ticket",
    run: (p) => server.createTicket(p.contacts),
  },
  {
    id: "finish",
    label: "Mark the request submitted",
    run: (_p, ctx) => {
      const ref = ctx.results.ticket
      return typeof ref === "string"
        ? server.finish(ref)
        : Promise.reject(
            new SubmitError({
              message: "No ticket to attach",
              retryable: true,
            }),
          )
    },
  },
]

/** Section heading of a step (title + muted intro), as the app renders it. */
function StepIntro({ title, children }: { title: string; children: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-[13px] text-muted-foreground">{children}</p>
    </div>
  )
}

const OAUTH_BADGE: Readonly<
  Record<
    OAuthStatus,
    {
      text: string
      variant: "default" | "secondary" | "outline" | "destructive"
    }
  >
> = {
  idle: { text: "Not connected", variant: "outline" },
  connecting: { text: "Connecting…", variant: "secondary" },
  connected: { text: "Connected", variant: "default" },
  failed: { text: "Failed", variant: "destructive" },
}

/** Review-step text: answers and contacts by their labels, lists joined, empty as a dash. */
function reviewValue(r: SummaryRow): string {
  const one = (x: unknown): string => {
    if (typeof x !== "string") return x === undefined || x === null ? "—" : String(x)
    return CONTACTS.find((o) => o.value === x)?.label ?? ANSWER_LABEL[x] ?? (x === "" ? "—" : x)
  }
  return Array.isArray(r.value) ? (r.value.length ? r.value.map(one).join(", ") : "—") : one(r.value)
}

/** The row's OAuth status pill (inside a display value, which sets its own text colour, so not a Badge). */
const OAUTH_TONE: Readonly<Record<OAuthStatus, string>> = {
  idle: "rounded-full border px-2 py-0.5 text-xs font-normal text-muted-foreground",
  connecting: "rounded-full border px-2 py-0.5 text-xs font-normal text-muted-foreground",
  connected: "rounded-full border border-emerald-600/40 bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-300",
  failed: "rounded-full border border-destructive/40 px-2 py-0.5 text-xs font-medium text-destructive",
}

/** The per-system manual-access modal: a scratch copy of the row; Complete writes it back with \`granted: true\`. */
function AccessDialog({ ch, label, variant }: { ch: SystemConfig; label: string; variant: "default" | "outline" }) {
  return (
    <RowSubFormDialog<SystemRow>
      empty={emptyRow(ch.id)}
      title={\`Access management · \${ch.name}\`}
      description="Follow these steps, then send the access request. Cancel leaves the row as it was."
      trigger={
        <Button type="button" size="sm" variant={variant} className="w-fit">
          {label}
        </Button>
      }
      submitLabel="Save & send"
      set={() => [{ path: "granted", value: true }]}
    >
      <ol className="list-decimal space-y-1 rounded-md border bg-muted/30 py-2 ps-7 pe-3 text-[13px]">
        {ch.steps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
      <TextField name="extId" label={ch.idLabel} placeholder={ch.placeholder} required dir="ltr" rules={ch.idPattern ? [rk.v.pattern(ch.idPattern, ch.idPatternMessage)] : undefined} />
      <When if={rk.c.eq("system", "crm")}>
        <TextField name="workspaceId" label="Workspace ID" placeholder="WS-123456" required dir="ltr" rules={[rk.v.pattern(/^WS-\\d{6,}$/, "A workspace ID looks like WS-123456")]} />
      </When>
      <CheckboxField name="confirmed" label={ch.confirmLabel} required rules={[rk.v.oneOf([true], "Confirm this step to continue")]} />
    </RowSubFormDialog>
  )
}

/** An OAuth system's row: "Connect with SSO" status from app state, the recorded ID, and a note read from app context. */
function OAuthRow({ ch, status, onConnect }: { ch: SystemConfig; status: OAuthStatus; onConnect: (system: string) => void }) {
  return (
    <>
      <div className="flex flex-wrap items-center gap-2 text-[13px]">
        <span className="text-muted-foreground">Connect with SSO</span>
        <span className={OAUTH_TONE[status]}>{OAUTH_BADGE[status].text}</span>
        {status === "connected" ? <span className="font-mono text-xs">{DETECTED_ID[ch.id]}</span> : null}
        {status !== "connected" ? (
          <Button type="button" size="sm" variant="outline" disabled={status === "connecting"} onClick={() => onConnect(ch.id)}>
            Connect
          </Button>
        ) : null}
      </div>
      {/* the ID the access modal recorded; a display (not an input) keeps it in the payload */}
      <DisplayField name=".extId" label={ch.idLabel} tone="inline" render={(id) => (typeof id === "string" && id !== "" ? <span className="font-mono text-xs">{id}</span> : "Added in the access step")} />
      {/* app context (G2): rules read the OAuth status with e.ctx(…), never from a form value */}
      <When if={c.eq(e.ctx(\`oauth_\${ch.id}\`), "connected")}>
        <p className="text-xs text-muted-foreground">Connected: API access granted. Manual access below is still required.</p>
      </When>
    </>
  )
}

/** One system row's body: OAuth status (app context) or the ID input, then the manual-access gate + modal. */
function SystemRowBody({ oauth, onConnect }: { oauth: Readonly<Record<string, OAuthStatus>>; onConnect: (system: string) => void }) {
  return (
    <div className="flex flex-col gap-2">
      <DisplayField name=".system" label="System" tone="inline" render={(ch) => <span className="font-medium">{typeof ch === "string" ? (SYSTEM_NAME[ch] ?? ch) : ""}</span>} />
      <Variant of=".system">
        {OAUTH_SYSTEMS.map((ch) => (
          <Variant.Case key={ch.id} is={ch.id}>
            <OAuthRow ch={ch} status={oauth[ch.id] ?? "idle"} onConnect={onConnect} />
          </Variant.Case>
        ))}
        {ID_SYSTEMS.map((ch) => (
          <Variant.Case key={ch.id} is={ch.id}>
            <TextField name=".extId" label={ch.idLabel} placeholder={ch.placeholder} required dir="ltr" rules={ch.idPattern ? [v.pattern(ch.idPattern, ch.idPatternMessage)] : undefined} />
          </Variant.Case>
        ))}
      </Variant>
      <When if={c.notIn(".system", NO_MANUAL_IDS)}>
        <div className="flex flex-wrap items-end justify-between gap-2">
          <DisplayField
            name=".granted"
            label="Manual access"
            tone="inline"
            render={(g) => (g === true ? "✓ Granted" : "Not granted yet")}
            rules={[v.oneOf([true], "Grant manual access, or remove this system")]}
          />
          <Variant of=".system">
            {MANUAL_SYSTEMS.map((ch) => (
              <Variant.Case key={ch.id} is={ch.id}>
                <When if={c.ne(".granted", true)}>
                  <AccessDialog ch={ch} label="Provide access" variant="default" />
                </When>
                <When if={c.eq(".granted", true)}>
                  <AccessDialog ch={ch} label="Edit access" variant="outline" />
                </When>
              </Variant.Case>
            ))}
          </Variant>
        </div>
      </When>
    </div>
  )
}

/** "Add system" buttons for every system not in the list yet. */
function AddSystem() {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="text-xs text-muted-foreground">Add:</span>
      {SYSTEMS.map((ch) => (
        <When key={ch.id} if={c.none("systems", (r) => r.c.eq("system", ch.id))}>
          <FieldArray.Add to="systems" value={() => emptyRow(ch.id)}>
            {ch.name}
          </FieldArray.Add>
        </When>
      ))}
    </div>
  )
}

/** The wizard itself; remounted by "Reload from server" to show the server-seeded resume. */
export function ServiceBookingForm({
  initial,
  completed,
  oauth,
  onConnect,
  side,
}: {
  initial: BookingRequest
  completed: readonly string[]
  oauth: Readonly<Record<string, OAuthStatus>>
  onConnect: (system: string) => void
  side: ReactNode
}) {
  const form = useForm<BookingRequest>({
    defaultValues: initial,
    model,
    context: {
      oauth_ledger: oauth.ledger ?? "idle",
      oauth_crm: oauth.crm ?? "idle",
    },
  })
  const submit = useSubmitPipeline(PHASES)
  const srv = useSyncExternalStore(server.subscribe, server.snapshot, server.snapshot)
  const panels = (
    <div className="flex min-w-0 flex-col gap-3">
      {side}
      <LivePanel store={form} />
    </div>
  )
  if (srv.step === SUBMITTED_STEP) {
  
  return (
      <TwoCol>
        <div className="flex flex-col gap-2 rounded-lg border p-4 text-[13px]">
          <p className="font-medium text-emerald-700 dark:text-emerald-400">✓ Request submitted — ticket {srv.ticketRef}.</p>
          <p className="text-muted-foreground">The app redirects to the service request here (server step 100).</p>
          <SubmitPhases phases={submit.phases} />
        </div>
        {panels}
      </TwoCol>
    )
  }
  return (
    <TwoCol>
      <Form form={form} onSubmit={submit.onSubmit} className="flex flex-col gap-4">
        <Wizard completed={completed} onStepComplete={(id) => server.saveStep(id, form.serialize())} submitLabel="Submit request" progress={<WizardProgress />} nav={<WizardNav />}>
          <Wizard.Step id="requirements" label="Setup requirements" scope="requirements">
            <StepIntro title="Setup requirements">Help us understand your current setup so we can tailor the implementation.</StepIntro>
            <SegmentedField
              name=".usesWiki"
              label="Do you already keep your team docs in a wiki?"
              description="If you have one, we tidy it before adding anything. “Yes” adds a wiki system."
              options={ANSWERS}
              required
            />
            <SegmentedField name=".multiRegion" label="Does your team work across several offices or time zones?" options={ANSWERS} required />
            <SegmentedField name=".hasLegacyData" label="Do you have data to migrate from an older system?" options={ANSWERS} required />
            <TextareaField
              name=".migrationNotes"
              label="Migration details"
              description="Required when you answered Yes; optional when you are not sure."
              placeholder="Tell us what to migrate and from where (e.g. spreadsheets, an older CRM)"
              // visibleIf and required read the sibling requirements.hasLegacyData
              visibleIf={c.in("requirements.hasLegacyData", ["yes", "unsure"])}
              required={c.eq("requirements.hasLegacyData", "yes")}
              maxLength={MIGRATION_NOTES_MAX}
              counter
              rows={3}
            />
          </Wizard.Step>
          <Wizard.Step id="systems" label="Systems">
            <StepIntro title="Systems">Each system needs its ID and manual access for our team. Remove the ones you do not need.</StepIntro>
            <FieldArray name="systems" label="Systems" rowLabel="System" min={1} layout="cards" minMessage="Keep at least one system">
              <SystemRowBody oauth={oauth} onConnect={onConnect} />
              <FieldArray.RowActions remove />
            </FieldArray>
            <AddSystem />
          </Wizard.Step>
          <Wizard.Step id="contacts" label="Contacts & notes">
            <StepIntro title="Contacts & notes">Who should our team talk to, and anything we should know.</StepIntro>
            <AsyncMultiSelectField
              name="contacts"
              label="Contacts"
              description="Search, or type a new name to create the contact."
              required
              loadOptions={contactsApi.search}
              onCreate={contactsApi.create}
              selectedOptions={CONTACTS}
            />
            <TextareaField name="notes" label="Notes" placeholder="Goals, deadlines, anything unusual about your team" required maxLength={NOTES_MAX} counter rows={4} />
          </Wizard.Step>
          <Wizard.Step id="review" label="Review & submit">
            <StepIntro title="Review & submit">Check everything, then submit. Each phase of the submit is shown below.</StepIntro>
            <WizardSummary format={reviewValue} />
            <SubmitPhases phases={submit.phases} />
          </Wizard.Step>
        </Wizard>
        <Form.Status
          className="text-sm"
          error={(err, { retry }) => (
            <p className="flex flex-wrap items-center gap-2 text-destructive">
              {err.message}
              {retry ? (
                <Button type="button" size="sm" variant="outline" onClick={retry}>
                  Retry
                </Button>
              ) : null}
            </p>
          )}
        />
      </Form>
      {panels}
    </TwoCol>
  )
}

// ---- page chrome: the panels beside the form
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

// ---- the examples
export function ServiceRequestExample() {
  // demo-chrome: SSO connections are app state (the profile query), not form values
  const [oauth, setOauth] = useState<Readonly<Record<string, OAuthStatus>>>({
    ledger: "idle",
    crm: "idle",
  })
  // demo-chrome: remount the form from the server record, as a page reload does
  const [loads, setLoads] = useState(0)
  // demo-chrome: the stub's "first Chatterly call fails" switch
  const [failOnce, setFailOnce] = useState(true)
  const srv = useSyncExternalStore(server.subscribe, server.snapshot, server.snapshot)
  const connect = (system: string) => {
    setOauth((o) => ({ ...o, [system]: "connecting" }))
    void delay(700).then(() => setOauth((o) => ({ ...o, [system]: "connected" })))
  }
  return (
    <ServiceBookingForm
      key={loads}
      initial={srv.record}
      completed={srv.completed}
      oauth={oauth}
      onConnect={connect}
      side={
        <>
          <SidePanel title="Server" meta="bookingGet">
            <div className="flex flex-col gap-2 p-3 text-[13px]">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-muted-foreground">Completed:</span>
                {srv.completed.length === 0 ? (
                  <span className="text-muted-foreground">none</span>
                ) : (
                  srv.completed.map((id) => (
                    <Badge key={id} variant="secondary">
                      {id}
                    </Badge>
                  ))
                )}
              </div>
              <p className="tabular-nums">
                step {srv.step} · tickets created {srv.ticketsCreated}
                {srv.ticketRef ? \` · \${srv.ticketRef}\` : ""}
              </p>
              <label className="flex items-center justify-between gap-3">
                <span>First Chatterly call fails</span>
                <Switch
                  checked={failOnce}
                  onCheckedChange={(on) => {
                    setFailOnce(on)
                    server.setFailure(on)
                  }}
                  aria-label="First Chatterly call fails"
                />
              </label>
              <div className="flex flex-wrap gap-2">
                <Button type="button" size="sm" variant="outline" onClick={() => setLoads((n) => n + 1)}>
                  Reload from server
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    server.reset()
                    setFailOnce(true)
                    setOauth({ ledger: "idle", crm: "idle" })
                    setLoads((n) => n + 1)
                  }}
                >
                  Start over
                </Button>
              </div>
              {srv.log.length > 0 ? (
                <ol className="max-h-56 overflow-auto rounded border bg-muted/30 p-2 font-mono text-[11px]">
                  {srv.log.map((line, i) => (
                    <li key={\`\${i}-\${line}\`}>{line}</li>
                  ))}
                </ol>
              ) : null}
            </div>
          </SidePanel>
          <SidePanel title="App context" meta="c.ctx(…)">
            <div className="flex flex-col gap-1 p-3 text-[13px]">
              {OAUTH_SYSTEMS.map((ch) => (
                <p key={ch.id} className="flex items-center justify-between gap-2">
                  <span>{ch.name} SSO</span>
                  <Badge variant={OAUTH_BADGE[oauth[ch.id] ?? "idle"].variant}>{OAUTH_BADGE[oauth[ch.id] ?? "idle"].text}</Badge>
                </p>
              ))}
            </div>
          </SidePanel>
        </>
      }
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>i(()=>import(`./service-booking-BVQ1nTKs.js`),[]));function we(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(n,{title:`Service booking (real-world)`,children:[`Booking an onboarding service package, rebuilt on the declarative API. Each Next saves the step; the server's record of completed steps seeds the wizard on reload (`,(0,k.jsx)(`code`,{children:`<Wizard completed>`}),`): it opens at the first unfinished step, completed steps stay checked and reachable, and local edits never move progress back. System rows show their single-sign-on status from app context and open a per-system access modal that writes into that row (`,(0,k.jsx)(`code`,{children:`RowSubFormDialog`}),`). The submit is four phases (`,(0,k.jsx)(`code`,{children:`useSubmitPipeline`}),`); the first Chatterly call fails, and Retry resumes at that row without a second ticket.`]}),(0,k.jsx)(D,{n:1,title:`Service request setup`,blurb:`Fill a step or two, then “Reload from server”: the wizard resumes where the server says.`,code:$,children:(0,k.jsx)(Ce,{})})]})}export{we as component};