import{s as e}from"./kit-docs-CvNs0WqT.js";import{Cc as t,Ic as n}from"./index-9y5uwRd3.js";import{W as r}from"./messages-BpgLhfTN.js";import{A as i,Y as a,c as o,h as s}from"./field-config-62hz5rv-.js";import{t as c}from"./plugins-DTs_adI5.js";import{a as l,t as u}from"./fields-3rMiSNLY.js";import{n as d}from"./wizard-BPjDeHLA.js";import{t as f}from"./composites-BLtDqbKQ.js";import{t as p}from"./date-DkHaI8Bm.js";import{t as m}from"./file-CAKLcIkG.js";import{n as h,r as g,t as _}from"./wizard-chrome-CIUmy4js.js";import{a as v}from"./choice-ZQTH2Ken.js";import{t as y}from"./example-CZLJLtIC.js";import"./demos-DilKtWQ6.js";var b=n(),x={identity:{accountType:`personal`,fullName:``,ssn:``,dob:``},business:{company:``,ein:``},documents:{},address:f.empty(`US`),review:{consent:!1}},S=[{value:`personal`,label:`Personal`},{value:`business`,label:`Business`}],{c:C,v:w}=a(),T=`kyc-draft`,E={load:()=>JSON.parse(localStorage.getItem(T)??`null`),save:e=>localStorage.setItem(T,JSON.stringify(e)),clear:()=>localStorage.removeItem(T)},D={async submit(e){return{id:`kyc_`+e.identity.fullName.length}}};function O(){let e=i({defaultValues:x,validateOn:`blur`,plugins:[c({storage:E})]});return(0,b.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,b.jsx)(o,{form:e,onSubmit:D.submit,children:(0,b.jsxs)(d,{url:`search`,submitLabel:`Submit KYC`,progress:(0,b.jsx)(h,{}),nav:(0,b.jsx)(_,{}),children:[(0,b.jsxs)(d.Step,{id:`identity`,label:`Identity`,scope:`identity`,children:[(0,b.jsx)(v,{name:`.accountType`,label:`Account type`,options:S}),(0,b.jsx)(l,{name:`.fullName`,label:`Legal name`,required:!0}),(0,b.jsx)(l,{name:`.ssn`,label:`SSN`,required:!0,sensitive:`pii`,rules:[w.pattern(/^\d{3}-?\d{2}-?\d{4}$/,`SSN format 000-00-0000`)]}),(0,b.jsx)(p,{name:`.dob`,label:`Date of birth`,required:!0})]}),(0,b.jsxs)(d.Step,{id:`business`,label:`Business`,scope:`business`,visibleIf:C.eq(`identity.accountType`,`business`),children:[(0,b.jsx)(l,{name:`.company`,label:`Company name`,required:!0}),(0,b.jsx)(l,{name:`.ein`,label:`EIN`,required:!0,rules:[w.pattern(/^\d{2}-?\d{7}$/,`EIN format 00-0000000`)]})]}),(0,b.jsx)(d.Step,{id:`documents`,label:`Documents`,scope:`documents`,children:(0,b.jsx)(m,{name:`.idDocument`,label:`Government ID`,required:!0,sensitive:`pii`,accept:`image/*,application/pdf`,maxSizeBytes:5*1024*1024})}),(0,b.jsx)(d.Step,{id:`address`,label:`Address`,scope:`address`,children:(0,b.jsx)(f,{name:`address`,label:`Residential address`,required:!0})}),(0,b.jsxs)(d.Step,{id:`review`,label:`Review`,scope:`review`,children:[(0,b.jsx)(g,{}),(0,b.jsx)(u,{name:`.consent`,label:`I consent to identity verification`,required:!0,rules:[w.oneOf([!0],`You must consent`)]})]})]})}),(0,b.jsx)(k,{form:e})]})}function k({form:e}){let t=s(e,e=>e.serialize(),r);return(0,b.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,b.jsx)(`div`,{className:`border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium`,children:`Live payload`}),(0,b.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)})]})}var A=`import { deepEqual, kit, persist, type StorageCapability } from "@kitora/form/core"
import { AddressField, CheckboxField, DateField, FileField, SegmentedField, TextField, WizardNav, WizardProgress, WizardSummary } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot, Wizard } from "@kitora/form/react"

type Kyc = {
  identity: { accountType: string; fullName: string; ssn: string; dob: string }
  business: { company: string; ein: string }
  documents: { idDocument?: unknown }
  address: ReturnType<typeof AddressField.empty>
  review: { consent: boolean }
}

const defaultValues: Kyc = {
  identity: { accountType: "personal", fullName: "", ssn: "", dob: "" },
  business: { company: "", ein: "" },
  documents: {},
  address: AddressField.empty("US"),
  review: { consent: false },
}
const accountTypes = [{ value: "personal", label: "Personal" }, { value: "business", label: "Business" }]
const { c, v } = kit<Kyc>()

// the draft lives in localStorage; sensitive="pii" fields are dropped from it (and redacted from logs)
const DRAFT_KEY = "kyc-draft"
const draftStorage: StorageCapability = {
  load: () => JSON.parse(localStorage.getItem(DRAFT_KEY) ?? "null"),
  save: (draft) => localStorage.setItem(DRAFT_KEY, JSON.stringify(draft)),
  clear: () => localStorage.removeItem(DRAFT_KEY),
}

// stub: replace with your API (POST /kyc)
const api = { async submit(kyc: Kyc): Promise<{ id: string }> { return { id: "kyc_" + kyc.identity.fullName.length } } }

export function KycForm() {
  const form = useForm<Kyc>({ defaultValues, validateOn: "blur", plugins: [persist({ storage: draftStorage })] })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={api.submit}>
        {/* Next validates the step's scope; url="search" keeps the step in ?step= (a deep link re-checks earlier steps) */}
        <Wizard url="search" submitLabel="Submit KYC" progress={<WizardProgress />} nav={<WizardNav />}>
          <Wizard.Step id="identity" label="Identity" scope="identity">
            <SegmentedField name=".accountType" label="Account type" options={accountTypes} />
            <TextField name=".fullName" label="Legal name" required />
            <TextField name=".ssn" label="SSN" required sensitive="pii" rules={[v.pattern(/^\\d{3}-?\\d{2}-?\\d{4}$/, "SSN format 000-00-0000")]} />
            <DateField name=".dob" label="Date of birth" required />
          </Wizard.Step>
          {/* 'identity.accountType' is the sibling field in step 1 */}
          <Wizard.Step id="business" label="Business" scope="business" visibleIf={c.eq("identity.accountType", "business")}>
            <TextField name=".company" label="Company name" required />
            <TextField name=".ein" label="EIN" required rules={[v.pattern(/^\\d{2}-?\\d{7}$/, "EIN format 00-0000000")]} />
          </Wizard.Step>
          <Wizard.Step id="documents" label="Documents" scope="documents">
            <FileField name=".idDocument" label="Government ID" required sensitive="pii" accept="image/*,application/pdf" maxSizeBytes={5 * 1024 * 1024} />
          </Wizard.Step>
          <Wizard.Step id="address" label="Address" scope="address">
            <AddressField name="address" label="Residential address" required />
          </Wizard.Step>
          <Wizard.Step id="review" label="Review" scope="review">
            <WizardSummary />
            <CheckboxField name=".consent" label="I consent to identity verification" required rules={[v.oneOf([true], "You must consent")]} />
          </Wizard.Step>
        </Wizard>
      </Form>
      <Payload form={form} />
    </div>
  )
}

/** What the form would submit, live: a readout beside the form, not part of it. */
function Payload({ form }: { form: SnapshotSource & { serialize(): unknown } }) {
  const payload = useFormSnapshot(form, (s) => s.serialize(), deepEqual)
  return (
    <aside className="min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card">
      <div className="border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium">Live payload</div>
      <pre dir="ltr" tabIndex={0} className="max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed">
        {JSON.stringify(payload, null, 2)}
      </pre>
    </aside>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>t(()=>import(`./kyc-BCVohiZg.js`),[]));function j(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(e,{title:`Multi-step KYC`,children:[`A `,(0,b.jsx)(`code`,{children:`<Wizard>`}),` of `,(0,b.jsx)(`code`,{children:`<Wizard.Step>`}),` children that validates each step's scope before advancing, with a Business step that appears only for business accounts and an ID-document upload. Save and resume: the draft persists to localStorage and the step lives in the URL; on reload the deep link re-checks earlier steps, so you land on the first one still missing data (the SSN is never stored, so Identity asks for it again). The SSN and the document are `,(0,b.jsx)(`code`,{children:`sensitive="pii"`}),`: dropped from the saved draft and redacted from logs, still submitted.`]}),(0,b.jsx)(y,{n:1,title:`KYC wizard with save and resume`,blurb:`Fill a step or two and reload: the draft and the ?step= deep link restore, minus the SSN and ID document.`,code:A,children:(0,b.jsx)(O,{})})]})}export{j as component};