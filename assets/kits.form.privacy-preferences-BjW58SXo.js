import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./switch-CiJzHfYx.js";import{s as n}from"./kit-docs-BUovISd0.js";import{Bc as r,Cc as i,Ic as a,hi as o,ti as s}from"./index-B9ukmIN1.js";import{t as c}from"./badge-uhFB8J9R.js";import{W as l}from"./messages-C_IMdr_-.js";import{A as u,J as ee,Y as d,c as f,f as p,h as m}from"./field-config-17kME8Vl.js";import{_ as h,a as g,b as _,f as v,g as y,i as te,r as ne,t as b,v as x,y as S}from"./fields-CwxxBZgA.js";import{n as C}from"./wizard-D4W23MbD.js";import{n as w,r as re,t as T}from"./wizard-chrome-D0CpQAFy.js";import{i as E}from"./choice-D87pJpHO.js";import{t as ie}from"./confirm-Bdo0sgJx.js";import{t as D}from"./display-CjsFrQus.js";import{t as O}from"./example-BGnSQG2Y.js";import"./demos-Ds1NfSaA.js";var k=[`input`];function A(e){return Array.isArray(e)?x(e,k):_(e)}function j(e){return h(e)?Array.isArray(e.userErrors)?[e.userErrors]:Object.values(e).flatMap(e=>h(e)&&Array.isArray(e.userErrors)?[e.userErrors]:[]):[]}var M=e=>{let t=y(e),n=j(t?t.data:e);if(n.length)return n.flat().filter(h).map(e=>({message:_(e.message)??``,field:A(e.field),code:_(e.code)}))},N=e(r(),1),P=a();function F(e){return new Promise(t=>setTimeout(t,e))}var I={accountDone:!1,vaultId:``,configAdded:!1,retentionSet:!1,scopesSet:!1,provider:``,providerName:``,checklistDone:!1,verified:!1},L={enabled:!0,method:`vault`,partnerMode:`aggregated`,setup:I,setupConfirmed:!1},R=[{value:`vault`,label:`Secure vault`,meta:(0,P.jsx)(c,{variant:`secondary`,children:`Recommended`}),description:`Connect with your vault ID — the config block is generated for you.`},{value:`builtin`,label:`Built-in export`,description:`Use the app’s own encrypted export. We guide you through choosing what it covers.`},{value:`other`,label:`Another storage provider`,description:`Archivo, Stashly, Boxharbor, Datacrate, and others. A short checklist, then a quick setup.`}],z=[{value:`aggregated`,label:`Aggregated only`,meta:(0,P.jsx)(c,{variant:`secondary`,children:`Recommended`}),description:`Partners see totals per week, never single records. Enough for most shared reports.`},{value:`full`,label:`Full records`,description:`Partners see individual records with personal fields masked. Needs a signed data agreement.`}],B=[{value:`archivo`,label:`Archivo`},{value:`stashly`,label:`Stashly`},{value:`boxharbor`,label:`Boxharbor`},{value:`datacrate`,label:`Datacrate`},{value:`other`,label:`Another provider`}],V=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,H=`00000000-0000-0000-0000-000000000000`,{c:U,v:W}=d(),G=d(),K=e=>G.c.eq(G.e.ctx(`method`),e),q=ee()(()=>({fields:[],whenHidden:`keep`,effects:[{on:[`method`],do:[{set:`setupConfirmed`,to:!1}]}]})),J={async sharingUpdate(e){return await F(500),{data:{sharingUpdate:{userErrors:e.setup.vaultId===`00000000-0000-0000-0000-000000000000`?[{field:[`input`,`vault_id`],message:`No vault exists with this ID`,code:`NOT_FOUND`},{field:null,message:`Sharing preferences were not saved.`}]:[]}}}}};async function Y(e){let t=S(await J.sharingUpdate(e),{sources:[M],paths:{vault_id:`setup.vaultId`}});if(t)throw t;return{savedAt:new Date().toLocaleTimeString()}}function X({title:e,children:t}){return(0,P.jsxs)(`div`,{className:`flex flex-col gap-0.5`,children:[(0,P.jsx)(`h3`,{className:`text-sm font-semibold`,children:e}),(0,P.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:t})]})}function ae(e){return`[sharing.vault]\nid = "${typeof e==`string`&&e!==``?e:`YOUR-VAULT-ID`}"\nencrypt = true`}function Z({form:e,label:t,variant:n=`default`}){return(0,P.jsx)(v,{parent:e,scope:`setup`,empty:I,title:`Set up data sharing`,description:`Each step is confirmed by you — nothing is scanned. Cancel leaves the page as it was.`,trigger:(0,P.jsx)(s,{size:`sm`,variant:n,className:`w-fit`,children:t}),size:`lg`,submit:!1,parentContext:e=>({method:e.method}),set:()=>[{path:`setupConfirmed`,value:!0}],children:(0,P.jsxs)(C,{submitLabel:`Complete`,progress:(0,P.jsx)(w,{}),nav:(0,P.jsx)(T,{}),children:[(0,P.jsxs)(C.Step,{id:`vault-account`,label:`Account`,visibleIf:K(`vault`),children:[(0,P.jsxs)(`ol`,{className:`list-decimal space-y-1 ps-5 text-[13px] text-muted-foreground`,children:[(0,P.jsx)(`li`,{children:`Create a vault account, or sign in.`}),(0,P.jsx)(`li`,{children:`Create a vault for this workspace.`}),(0,P.jsx)(`li`,{children:`Copy its ID, then come back here.`})]}),(0,P.jsx)(b,{name:`accountDone`,label:`I’ve created a vault for this workspace.`,required:!0,rules:[G.v.oneOf([!0],`Confirm this step to continue`)]})]}),(0,P.jsx)(C.Step,{id:`vault-id`,label:`Vault ID`,visibleIf:K(`vault`),children:(0,P.jsx)(g,{name:`vaultId`,label:`Vault ID`,description:`Vault → Settings → General. Each ID belongs to one vault.`,placeholder:`xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`,required:!0,dir:`ltr`,rules:[G.v.pattern(V,`A vault ID looks like 1a2b3c4d-…`)]})}),(0,P.jsxs)(C.Step,{id:`vault-config`,label:`Config`,visibleIf:K(`vault`),children:[(0,P.jsx)(D,{name:`vaultId`,label:`Add to sharing.toml`,tone:`inline`,className:`flex-col items-stretch`,render:e=>(0,P.jsx)(`pre`,{className:`overflow-x-auto rounded-md bg-muted p-2 font-mono text-[12px] font-normal`,children:ae(e)})}),(0,P.jsx)(b,{name:`configAdded`,label:`I’ve added the config block to my workspace.`,required:!0,rules:[G.v.oneOf([!0],`Confirm this step to continue`)]})]}),(0,P.jsx)(C.Step,{id:`vault-retention`,label:`Retention`,visibleIf:K(`vault`),children:(0,P.jsx)(b,{name:`retentionSet`,label:`I’ve set how long the vault keeps shared data.`,required:!0,rules:[G.v.oneOf([!0],`Confirm this step to continue`)]})}),(0,P.jsxs)(C.Step,{id:`builtin-scopes`,label:`Scopes`,visibleIf:K(`builtin`),children:[(0,P.jsx)(`p`,{className:`text-[13px] text-muted-foreground`,children:`Settings → Exports → choose which record types the export covers.`}),(0,P.jsx)(b,{name:`scopesSet`,label:`I’ve chosen which record types the export covers.`,required:!0,rules:[G.v.oneOf([!0],`Confirm this step to continue`)]})]}),(0,P.jsxs)(C.Step,{id:`other-provider`,label:`Provider`,visibleIf:K(`other`),children:[(0,P.jsx)(ne,{name:`provider`,label:`Storage provider`,options:B,required:!0}),(0,P.jsx)(g,{name:`providerName`,label:`Provider name`,required:!0,visibleIf:G.c.eq(`provider`,`other`)}),(0,P.jsx)(b,{name:`checklistDone`,label:`I’ve completed these steps for my provider.`,required:!0,rules:[G.v.oneOf([!0],`Confirm this step to continue`)]})]}),(0,P.jsx)(C.Step,{id:`other-verify`,label:`Is it working?`,visibleIf:K(`other`),children:(0,P.jsx)(b,{name:`verified`,label:`I’ve sent a test export and found it at the provider.`,required:!0,rules:[G.v.oneOf([!0],`Confirm this step to continue`)]})})]})})}var oe={vault:`Secure vault`,builtin:`Built-in export`,other:`Another storage provider`};function Q({title:e,meta:t,sticky:n=!1,className:r,children:i}){return(0,P.jsxs)(`aside`,{className:o(`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,n&&`lg:sticky lg:top-[4.5rem]`,r),children:[(0,P.jsxs)(`div`,{className:`flex h-8 items-center justify-between gap-2 border-b bg-muted/40 px-3 text-[12px]`,children:[(0,P.jsx)(`span`,{className:`truncate font-medium`,children:e}),t===void 0?null:(0,P.jsx)(`span`,{className:`shrink-0 tabular-nums text-muted-foreground`,children:t})]}),i]})}function se({children:e,stack:t=!1}){return(0,P.jsx)(`div`,{className:o(`grid grid-cols-1 gap-4`,!t&&`lg:grid-cols-[minmax(0,1fr)_280px]`),children:N.Children.toArray(e)})}function ce({value:e,maxHeight:t=`max-h-[420px]`}){return(0,P.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:o(`overflow-auto p-3 text-[11px] leading-relaxed focus-visible:outline-2 focus-visible:outline-ring`,t),children:JSON.stringify(e,null,2)})}function le({store:e,title:t=`Live payload`,redact:n=!1,mode:r=`full`}){let{payload:i,dirty:a,status:o,issues:s}=m(e,e=>({payload:e.serialize({redact:n,mode:r}),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),l);return(0,P.jsxs)(Q,{sticky:!0,title:t,meta:`${a?`● dirty`:`clean`} · ${o}`,children:[(0,P.jsx)(ce,{value:i}),s.length>0?(0,P.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:s.map(e=>(0,P.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}function ue(){let[e,n]=(0,N.useState)(!0),[r,i]=(0,N.useState)(!0),a=u({defaultValues:L,model:q,context:{partnerLinked:e,canManage:r}}),{confirm:o,dialog:s}=ie();return(0,P.jsxs)(se,{children:[(0,P.jsxs)(f,{form:a,onSubmit:Y,className:`flex flex-col gap-4`,children:[(0,P.jsxs)(`div`,{className:`flex flex-col gap-2 rounded-lg border p-3`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,P.jsx)(X,{title:`Data sharing`,children:`Copies your workspace data to a place you control, and to linked partners.`}),(0,P.jsx)(p,{if:U.eq(`enabled`,!0),children:(0,P.jsx)(c,{children:`On`})}),(0,P.jsx)(p,{if:U.ne(`enabled`,!0),children:(0,P.jsx)(c,{variant:`outline`,children:`Off`})})]}),(0,P.jsx)(te,{name:`enabled`,label:`Enable data sharing`,disabledIf:U.not(U.ctx(`canManage`)),confirm:e=>e===!1?o({title:`Turn off data sharing?`,body:`Exports stop and linked partners lose access until you turn it on again. Your setup is kept, so turning it on again restores it.`,confirmLabel:`Turn off`,cancelLabel:`Keep on`,destructive:!0}):!0})]}),(0,P.jsx)(p,{if:U.eq(`enabled`,!0),children:(0,P.jsxs)(C,{submitLabel:`Save & finish`,progress:(0,P.jsx)(w,{}),nav:(0,P.jsx)(T,{}),children:[(0,P.jsxs)(C.Step,{id:`method`,label:`Method`,children:[(0,P.jsx)(X,{title:`Where should shared data go?`,children:`Exports run nightly to the place you choose here.`}),(0,P.jsx)(E,{name:`method`,label:`Sharing method`,options:R,columns:1})]}),(0,P.jsxs)(C.Step,{id:`partner`,label:`Partner access`,visibleIf:U.ctx(`partnerLinked`),children:[(0,P.jsx)(X,{title:`What may the linked partner see?`,children:`Applies to linked partner accounts only — your own exports always hold full records.`}),(0,P.jsx)(E,{name:`partnerMode`,label:`Partner access level`,options:z,columns:1}),(0,P.jsx)(p,{if:U.eq(`partnerMode`,`aggregated`),children:(0,P.jsxs)(`p`,{className:`rounded-md border border-sky-500/30 bg-sky-500/5 px-2.5 py-1.5 text-[13px]`,children:[(0,P.jsx)(`span`,{className:`font-medium`,children:`Why we recommend aggregated access.`}),` Totals answer most partner questions without moving any single person's record.`]})})]}),(0,P.jsxs)(C.Step,{id:`setup`,label:`Set up`,children:[(0,P.jsx)(X,{title:`Set up data sharing`,children:`Complete the guided steps. You confirm each one — we don’t scan your workspace.`}),(0,P.jsx)(D,{name:`method`,label:`Method`,tone:`inline`,render:e=>typeof e==`string`?oe[e]??e:``}),(0,P.jsx)(D,{name:`setupConfirmed`,label:`Setup`,render:e=>e===!0?`✓ Confirmed`:`Not done yet`,rules:[W.oneOf([!0],`Finish the sharing setup to continue`)]}),(0,P.jsx)(p,{if:U.and(U.eq(`setupConfirmed`,!0),U.eq(`method`,`vault`)),children:(0,P.jsx)(D,{name:`setup.vaultId`,label:`Vault ID`,tone:`inline`})}),(0,P.jsx)(p,{if:U.eq(`setupConfirmed`,!0),children:(0,P.jsx)(Z,{form:a,label:`Edit setup`,variant:`outline`})}),(0,P.jsx)(p,{if:U.ne(`setupConfirmed`,!0),children:(0,P.jsx)(Z,{form:a,label:`Start setup`})})]}),(0,P.jsxs)(C.Step,{id:`review`,label:`Review`,children:[(0,P.jsx)(X,{title:`Review & save`,children:`Here’s what will be saved.`}),(0,P.jsx)(re,{})]})]})}),(0,P.jsx)(f.Status,{className:`text-sm`,success:e=>(0,P.jsxs)(`p`,{className:`font-medium text-emerald-700 dark:text-emerald-400`,children:[`✓ Sharing preferences saved at `,e.savedAt,`.`]}),error:e=>(0,P.jsx)(`p`,{className:`text-destructive`,children:e.message})}),s]}),(0,P.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-3`,children:[(0,P.jsx)(Q,{title:`App context`,meta:`c.ctx(…)`,children:(0,P.jsxs)(`div`,{className:`flex flex-col gap-2 p-3 text-[13px]`,children:[(0,P.jsxs)(`label`,{className:`flex items-center justify-between gap-3`,children:[(0,P.jsx)(`span`,{children:`Partner account linked`}),(0,P.jsx)(t,{checked:e,onCheckedChange:n,"aria-label":`Partner account linked`})]}),(0,P.jsxs)(`label`,{className:`flex items-center justify-between gap-3`,children:[(0,P.jsx)(`span`,{children:`Can manage sharing (permission)`}),(0,P.jsx)(t,{checked:r,onCheckedChange:i,"aria-label":`Can manage sharing`})]}),(0,P.jsx)(`p`,{className:`text-muted-foreground`,children:`Not form values: they never appear in the payload and never make the form dirty.`})]})}),(0,P.jsx)(le,{store:a})]})]})}var $=`import { useState, type ReactNode, Children } from "react"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { Switch } from "@kitora/ui/switch"
import { defineForm, kit, mapErrors, type FormStore, deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"
import { userErrorsSource } from "@kitora/form/sources"
import { Form, When, Wizard, useForm, useFormSnapshot, type SnapshotSource } from "@kitora/form/react"
import { CheckboxField, DisplayField, RadioCardsField, SelectField, SubFormDialog, SwitchField, TextField, useConfirm, WizardNav, WizardProgress, WizardSummary, type ChoiceOption } from "@kitora/form/fields"
import { cn } from "@kitora/ui/utils"

// ---- stubs: replace with your API
/** Resolve after \`ms\` — the mock network. */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// ---- the page
// Real-world form: a data-sharing preferences page, rebuilt on the declarative API only. It
// exercises four engine capabilities: confirm-before-change on the master switch (G1), app context
// in rules — the partner step exists only when a partner account is linked, the switch is disabled
// without the permission (G2), a stepped setup modal that writes back into the page as one undo
// step (G3), and a save whose errors land on fields through an opt-in error adapter (G5). The stub
// API answers a \`userErrors\` payload; that is the example adapter's convention, nothing more.

interface SharingSetup {
  accountDone: boolean
  vaultId: string
  configAdded: boolean
  retentionSet: boolean
  scopesSet: boolean
  provider: string
  providerName: string
  checklistDone: boolean
  verified: boolean
}

interface SharingSettings {
  enabled: boolean
  method: string
  partnerMode: string
  setup: SharingSetup
  setupConfirmed: boolean
}

const EMPTY_SETUP: SharingSetup = { accountDone: false, vaultId: "", configAdded: false, retentionSet: false, scopesSet: false, provider: "", providerName: "", checklistDone: false, verified: false }

const DEFAULTS: SharingSettings = { enabled: true, method: "vault", partnerMode: "aggregated", setup: EMPTY_SETUP, setupConfirmed: false }

const METHODS: ChoiceOption[] = [
  { value: "vault", label: "Secure vault", meta: <Badge variant="secondary">Recommended</Badge>, description: "Connect with your vault ID — the config block is generated for you." },
  { value: "builtin", label: "Built-in export", description: "Use the app’s own encrypted export. We guide you through choosing what it covers." },
  { value: "other", label: "Another storage provider", description: "Archivo, Stashly, Boxharbor, Datacrate, and others. A short checklist, then a quick setup." },
]

const PARTNER_MODES: ChoiceOption[] = [
  { value: "aggregated", label: "Aggregated only", meta: <Badge variant="secondary">Recommended</Badge>, description: "Partners see totals per week, never single records. Enough for most shared reports." },
  { value: "full", label: "Full records", description: "Partners see individual records with personal fields masked. Needs a signed data agreement." },
]

const PROVIDERS = [
  { value: "archivo", label: "Archivo" },
  { value: "stashly", label: "Stashly" },
  { value: "boxharbor", label: "Boxharbor" },
  { value: "datacrate", label: "Datacrate" },
  { value: "other", label: "Another provider" },
]

/** Vault IDs are UUIDs. */
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

/** The stub server rejects this ID, to show a GraphQL \`userErrors\` answer landing on a field. */
export const REJECTED_ID = "00000000-0000-0000-0000-000000000000"

const { c, v } = kit<SharingSettings>()

const sk = kit<SharingSetup>()

const methodIs = (method: string) => sk.c.eq(sk.e.ctx("method"), method)

// Changing the method invalidates the confirmed setup (a user change only: a prefill keeps it);
// turning sharing off keeps the configuration, so turning it on again restores it.
const model = defineForm<SharingSettings>()(() => ({
  fields: [],
  whenHidden: "keep",
  effects: [{ on: ["method"], do: [{ set: "setupConfirmed", to: false }] }],
}))

// stub: a GraphQL mutation (sharingUpdate) answering a \`userErrors\` payload
interface UserError {
  field: string[] | null
  message: string
  code?: string
}

const api = {
  async sharingUpdate(input: SharingSettings): Promise<{ data: { sharingUpdate: { userErrors: UserError[] } } }> {
    await delay(500)
    const userErrors: UserError[] =
      input.setup.vaultId === REJECTED_ID
        ? [
            { field: ["input", "vault_id"], message: "No vault exists with this ID", code: "NOT_FOUND" },
            { field: null, message: "Sharing preferences were not saved." },
          ]
        : []
    return { data: { sharingUpdate: { userErrors } } }
  },
}

async function save(values: SharingSettings): Promise<{ savedAt: string }> {
  const res = await api.sharingUpdate(values)
  // this stub API answers \`userErrors\`, so the demo opts into that example adapter;
  // server field names → form paths; unmapped and field-less errors become the form-level message
  const err = mapErrors<SharingSettings>(res, { sources: [userErrorsSource], paths: { vault_id: "setup.vaultId" } })
  if (err) throw err
  return { savedAt: new Date().toLocaleTimeString() }
}

/** Section heading of a step (title + muted intro), as the app renders it. */
function StepIntro({ title, children }: { title: string; children: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-[13px] text-muted-foreground">{children}</p>
    </div>
  )
}

/** The generated vault config block for a vault ID. */
function vaultConfig(id: unknown): string {
  const shown = typeof id === "string" && id !== "" ? id : "YOUR-VAULT-ID"
  return \`[sharing.vault]\\nid = "\${shown}"\\nencrypt = true\`
}

/** The sharing setup modal: a stepped sub-form over \`setup\` whose steps follow the parent's method. */
function SetupDialog({ form, label, variant = "default" }: { form: FormStore<SharingSettings>; label: string; variant?: "default" | "outline" }) {
  return (
    <SubFormDialog
      parent={form}
      scope="setup"
      empty={EMPTY_SETUP}
      title="Set up data sharing"
      description="Each step is confirmed by you — nothing is scanned. Cancel leaves the page as it was."
      trigger={<Button size="sm" variant={variant} className="w-fit">{label}</Button>}
      size="lg"
      submit={false}
      parentContext={(p) => ({ method: p.method })}
      set={() => [{ path: "setupConfirmed", value: true }]}
    >
      <Wizard submitLabel="Complete" progress={<WizardProgress />} nav={<WizardNav />}>
        {/* visibleIf reads the app context: the method the parent form picked */}
        <Wizard.Step id="vault-account" label="Account" visibleIf={methodIs("vault")}>
          <ol className="list-decimal space-y-1 ps-5 text-[13px] text-muted-foreground">
            <li>Create a vault account, or sign in.</li>
            <li>Create a vault for this workspace.</li>
            <li>Copy its ID, then come back here.</li>
          </ol>
          <CheckboxField name="accountDone" label="I’ve created a vault for this workspace." required rules={[sk.v.oneOf([true], "Confirm this step to continue")]} />
        </Wizard.Step>
        {/* visibleIf reads the app context: the method the parent form picked */}
        <Wizard.Step id="vault-id" label="Vault ID" visibleIf={methodIs("vault")}>
          <TextField name="vaultId" label="Vault ID" description="Vault → Settings → General. Each ID belongs to one vault." placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" required dir="ltr" rules={[sk.v.pattern(UUID_PATTERN, "A vault ID looks like 1a2b3c4d-…")]} />
        </Wizard.Step>
        {/* visibleIf reads the app context: the method the parent form picked */}
        <Wizard.Step id="vault-config" label="Config" visibleIf={methodIs("vault")}>
          <DisplayField name="vaultId" label="Add to sharing.toml" tone="inline" className="flex-col items-stretch" render={(id) => <pre className="overflow-x-auto rounded-md bg-muted p-2 font-mono text-[12px] font-normal">{vaultConfig(id)}</pre>} />
          <CheckboxField name="configAdded" label="I’ve added the config block to my workspace." required rules={[sk.v.oneOf([true], "Confirm this step to continue")]} />
        </Wizard.Step>
        {/* visibleIf reads the app context: the method the parent form picked */}
        <Wizard.Step id="vault-retention" label="Retention" visibleIf={methodIs("vault")}>
          <CheckboxField name="retentionSet" label="I’ve set how long the vault keeps shared data." required rules={[sk.v.oneOf([true], "Confirm this step to continue")]} />
        </Wizard.Step>
        {/* visibleIf reads the app context: the method the parent form picked */}
        <Wizard.Step id="builtin-scopes" label="Scopes" visibleIf={methodIs("builtin")}>
          <p className="text-[13px] text-muted-foreground">Settings → Exports → choose which record types the export covers.</p>
          <CheckboxField name="scopesSet" label="I’ve chosen which record types the export covers." required rules={[sk.v.oneOf([true], "Confirm this step to continue")]} />
        </Wizard.Step>
        {/* visibleIf reads the app context: the method the parent form picked */}
        <Wizard.Step id="other-provider" label="Provider" visibleIf={methodIs("other")}>
          <SelectField name="provider" label="Storage provider" options={PROVIDERS} required />
          {/* visibleIf reads the sibling field provider */}
          <TextField name="providerName" label="Provider name" required visibleIf={sk.c.eq("provider", "other")} />
          <CheckboxField name="checklistDone" label="I’ve completed these steps for my provider." required rules={[sk.v.oneOf([true], "Confirm this step to continue")]} />
        </Wizard.Step>
        {/* visibleIf reads the app context: the method the parent form picked */}
        <Wizard.Step id="other-verify" label="Is it working?" visibleIf={methodIs("other")}>
          <CheckboxField name="verified" label="I’ve sent a test export and found it at the provider." required rules={[sk.v.oneOf([true], "Confirm this step to continue")]} />
        </Wizard.Step>
      </Wizard>
    </SubFormDialog>
  )
}

const METHOD_LABELS: Readonly<Record<string, string>> = { vault: "Secure vault", builtin: "Built-in export", other: "Another storage provider" }

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

/** The form beside its side panels (one column below lg). */
function TwoCol({ children, stack = false }: { children: ReactNode; stack?: boolean }) {
  return <div className={cn("grid grid-cols-1 gap-4", !stack && "lg:grid-cols-[minmax(0,1fr)_280px]")}>{Children.toArray(children)}</div>
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

// ---- the examples
export function SharingSettingsExample() {
  // demo-chrome: the app state the page reads (permissions, linked accounts), toggled here to show the rules react
  const [partnerLinked, setPartnerLinked] = useState(true)
  // demo-chrome: the "manage sharing" permission
  const [canManage, setCanManage] = useState(true)
  const form = useForm<SharingSettings>({ defaultValues: DEFAULTS, model, context: { partnerLinked, canManage } })
  const { confirm, dialog } = useConfirm()
  return (
    <TwoCol>
      <Form form={form} onSubmit={save} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 rounded-lg border p-3">
          <div className="flex items-center justify-between gap-3">
            <StepIntro title="Data sharing">Copies your workspace data to a place you control, and to linked partners.</StepIntro>
            <When if={c.eq("enabled", true)}>
              <Badge>On</Badge>
            </When>
            <When if={c.ne("enabled", true)}>
              <Badge variant="outline">Off</Badge>
            </When>
          </div>
          <SwitchField
            name="enabled"
            label="Enable data sharing"
            disabledIf={c.not(c.ctx("canManage"))}
            confirm={(next) =>
              next === false
                ? confirm({ title: "Turn off data sharing?", body: "Exports stop and linked partners lose access until you turn it on again. Your setup is kept, so turning it on again restores it.", confirmLabel: "Turn off", cancelLabel: "Keep on", destructive: true })
                : true
            }
          />
        </div>
        <When if={c.eq("enabled", true)}>
          <Wizard submitLabel="Save & finish" progress={<WizardProgress />} nav={<WizardNav />}>
            <Wizard.Step id="method" label="Method">
              <StepIntro title="Where should shared data go?">Exports run nightly to the place you choose here.</StepIntro>
              <RadioCardsField name="method" label="Sharing method" options={METHODS} columns={1} />
            </Wizard.Step>
            {/* visibleIf reads the app context: a linked partner account */}
            <Wizard.Step id="partner" label="Partner access" visibleIf={c.ctx("partnerLinked")}>
              <StepIntro title="What may the linked partner see?">Applies to linked partner accounts only — your own exports always hold full records.</StepIntro>
              <RadioCardsField name="partnerMode" label="Partner access level" options={PARTNER_MODES} columns={1} />
              <When if={c.eq("partnerMode", "aggregated")}>
                <p className="rounded-md border border-sky-500/30 bg-sky-500/5 px-2.5 py-1.5 text-[13px]">
                  <span className="font-medium">Why we recommend aggregated access.</span> Totals answer most partner questions without moving any single person&apos;s record.
                </p>
              </When>
            </Wizard.Step>
            <Wizard.Step id="setup" label="Set up">
              <StepIntro title="Set up data sharing">Complete the guided steps. You confirm each one — we don’t scan your workspace.</StepIntro>
              <DisplayField name="method" label="Method" tone="inline" render={(t) => (typeof t === "string" ? (METHOD_LABELS[t] ?? t) : "")} />
              <DisplayField name="setupConfirmed" label="Setup" render={(done) => (done === true ? "✓ Confirmed" : "Not done yet")} rules={[v.oneOf([true], "Finish the sharing setup to continue")]} />
              <When if={c.and(c.eq("setupConfirmed", true), c.eq("method", "vault"))}>
                <DisplayField name="setup.vaultId" label="Vault ID" tone="inline" />
              </When>
              <When if={c.eq("setupConfirmed", true)}>
                <SetupDialog form={form} label="Edit setup" variant="outline" />
              </When>
              <When if={c.ne("setupConfirmed", true)}>
                <SetupDialog form={form} label="Start setup" />
              </When>
            </Wizard.Step>
            <Wizard.Step id="review" label="Review">
              <StepIntro title="Review & save">Here’s what will be saved.</StepIntro>
              <WizardSummary />
            </Wizard.Step>
          </Wizard>
        </When>
        <Form.Status<{ savedAt: string }>
          className="text-sm"
          success={(r) => <p className="font-medium text-emerald-700 dark:text-emerald-400">✓ Sharing preferences saved at {r.savedAt}.</p>}
          error={(err) => <p className="text-destructive">{err.message}</p>}
        />
        {dialog}
      </Form>
      <div className="flex min-w-0 flex-col gap-3">
        <SidePanel title="App context" meta="c.ctx(…)">
          <div className="flex flex-col gap-2 p-3 text-[13px]">
            <label className="flex items-center justify-between gap-3">
              <span>Partner account linked</span>
              <Switch checked={partnerLinked} onCheckedChange={setPartnerLinked} aria-label="Partner account linked" />
            </label>
            <label className="flex items-center justify-between gap-3">
              <span>Can manage sharing (permission)</span>
              <Switch checked={canManage} onCheckedChange={setCanManage} aria-label="Can manage sharing" />
            </label>
            <p className="text-muted-foreground">Not form values: they never appear in the payload and never make the form dirty.</p>
          </div>
        </SidePanel>
        <LivePanel store={form} />
      </div>
    </TwoCol>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>i(()=>import(`./privacy-preferences-CsqL3DBG.js`),[]));function de(){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(n,{title:`Privacy preferences (real-world)`,children:[`A data-sharing preferences page, rebuilt on the declarative API. Turning the master switch off asks first (`,(0,P.jsx)(`code`,{children:`confirm`}),`); the partner step and the switch's permission come from app context (`,(0,P.jsx)(`code`,{children:`c.ctx`}),`), not form values; the setup modal is its own wizard over the `,(0,P.jsx)(`code`,{children:`setup`}),` slice that writes back as one undo step (`,(0,P.jsx)(`code`,{children:`SubFormDialog`}),`); the save runs `,(0,P.jsx)(`code`,{children:`mapErrors`}),` with the opt-in `,(0,P.jsx)(`code`,{children:`userErrorsSource`}),` adapter, because this stub API answers a `,(0,P.jsx)(`code`,{children:`userErrors`}),` payload (an example convention); with no adapter the server's message shows form-level. Enter `,(0,P.jsx)(`code`,{children:H}),` as the vault ID to see the server reject it.`]}),(0,P.jsx)(O,{n:1,title:`Sharing settings`,blurb:`Toggle the app context on the right: the partner step and the switch react without touching the values.`,code:$,children:(0,P.jsx)(ue,{})})]})}export{de as component};