import{s as e}from"./kit-docs-CvNs0WqT.js";import{Cc as t,Ic as n,ni as r}from"./index-9y5uwRd3.js";import{A as i,Y as a,c as o,g as s}from"./field-config-62hz5rv-.js";import{a as c,r as l,t as u}from"./fields-3rMiSNLY.js";import{t as d}from"./signature-OAtvqy6_.js";import{t as f}from"./example-CZLJLtIC.js";import"./demos-DilKtWQ6.js";var p=n(),m={"2026-01":{title:`Data processing consent`,paragraphs:[`We process the contact details you give us to provide the service.`,`You can withdraw this consent at any time by writing to privacy@example.com.`]},"2026-10":{title:`Data processing consent`,paragraphs:[`We process the contact details you give us to provide the service and to send service notices.`,`Usage analytics are collected in aggregate and never sold.`,`You can withdraw this consent at any time from your account settings or by writing to privacy@example.com.`]}},h=`2026-10`,g=Object.keys(m).map(e=>({value:e,label:e===h?`${e} (current)`:`${e} (superseded)`})),_=2,v={version:h,signer:``,agree:!1,signature:``},{v:y}=a(),b=e=>{let t=m[e];return t?[t.title,...t.paragraphs].join(`
`):``};async function x(e){let t=await crypto.subtle.digest(`SHA-256`,new TextEncoder().encode(e));return Array.from(new Uint8Array(t),e=>e.toString(16).padStart(2,`0`)).join(``)}async function S(e){let t={consentVersion:e.version,contentHash:await x(b(e.version)),signer:e.signer,signedAt:new Date().toISOString(),signature:e.signature};return{record:t,verified:await x(b(t.consentVersion))===t.contentHash}}function C({version:e}){let t=m[e];return t?(0,p.jsxs)(`article`,{className:`space-y-2 rounded-md border bg-muted/40 p-3 text-sm`,children:[(0,p.jsxs)(`h4`,{className:`font-medium`,children:[t.title,` `,(0,p.jsxs)(`span`,{className:`font-mono text-[11px] text-muted-foreground`,children:[`v`,e]})]}),t.paragraphs.map(e=>(0,p.jsx)(`p`,{children:e},e))]}):null}function w({signed:e}){let{record:t,verified:n}=e;return(0,p.jsxs)(`div`,{className:`flex flex-col gap-2 rounded-md border border-emerald-600/30 p-3 text-xs`,children:[(0,p.jsxs)(`p`,{className:`font-medium text-emerald-700 dark:text-emerald-400`,children:[`✓ Signed by `,t.signer,` at `,t.signedAt]}),(0,p.jsx)(C,{version:t.consentVersion}),(0,p.jsxs)(`p`,{className:`break-all font-mono text-[11px] text-muted-foreground`,children:[`sha256 `,t.contentHash]}),(0,p.jsx)(`p`,{className:n?`text-emerald-700 dark:text-emerald-400`:`text-destructive`,children:n?`Re-hashed from the registry: matches the signed text.`:`Re-hash does NOT match: the stored version changed.`}),t.signature?(0,p.jsx)(`img`,{src:t.signature,alt:`Signature of ${t.signer}`,className:`h-16 rounded border bg-background`}):null]})}function T(){let e=i({defaultValues:v}),t=s(e,`version`);return(0,p.jsx)(o,{form:e,onSubmit:S,children:(0,p.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[(0,p.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,p.jsx)(l,{name:`version`,label:`Consent version`,options:g,description:`Sign the current text, or a superseded one to see that the view re-renders exactly what was signed.`}),(0,p.jsx)(C,{version:t}),(0,p.jsx)(c,{name:`signer`,label:`Full legal name (your signature)`,required:!0,autoComplete:`name`,rules:[y.minLength(_)]}),(0,p.jsx)(d,{name:`signature`,label:`Draw your signature`,required:!0,description:`Mouse, pen or finger. Your typed name above is the signature of record.`}),(0,p.jsx)(u,{name:`agree`,label:`I have read and agree to this consent`,required:!0,rules:[y.oneOf([!0],`You must agree to sign`)]}),(0,p.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 pt-2`,children:[(0,p.jsx)(o.Submit,{className:r({size:`sm`,className:`w-fit`}),pendingLabel:`Signing…`,children:`Sign`}),(0,p.jsx)(o.Status,{success:()=>(0,p.jsx)(`span`,{className:`text-[13px] text-emerald-700 dark:text-emerald-400`,children:`Signed — record on the right`})})]})]}),(0,p.jsx)(o.Status,{success:e=>(0,p.jsx)(w,{signed:e})})]})})}var E=`import { buttonVariants } from "@kitora/ui/button"
import { kit } from "@kitora/form/core"
import { CheckboxField, SelectField, SignatureField, TextField } from "@kitora/form/fields"
import { Form, useForm, useFormValue } from "@kitora/form/react"

type Doc = { title: string; paragraphs: readonly string[] }

// append-only registry: never edit a published version, add a new id
const VERSIONS: Record<string, Doc> = {
  "2026-01": {
    title: "Data processing consent",
    paragraphs: [
      "We process the contact details you give us to provide the service.",
      "You can withdraw this consent at any time by writing to privacy@example.com.",
    ],
  },
  "2026-10": {
    title: "Data processing consent",
    paragraphs: [
      "We process the contact details you give us to provide the service and to send service notices.",
      "Usage analytics are collected in aggregate and never sold.",
      "You can withdraw this consent at any time from your account settings or by writing to privacy@example.com.",
    ],
  },
}
const LATEST = "2026-10"
const versionOptions = Object.keys(VERSIONS).map((id) => ({ value: id, label: id === LATEST ? \`\${id} (current)\` : \`\${id} (superseded)\` }))
const MIN_NAME = 2

type Consent = { version: string; signer: string; agree: boolean; signature: string }
type ConsentRecord = { consentVersion: string; contentHash: string; signer: string; signedAt: string; signature: string }
type Signed = { record: ConsentRecord; verified: boolean }

const defaultValues: Consent = { version: LATEST, signer: "", agree: false, signature: "" }
const { v } = kit<Consent>()

/** The exact text that is hashed: title and paragraphs, one per line (the screen shows what the hash covers). */
const canonical = (version: string): string => {
  const doc = VERSIONS[version]
  return doc ? [doc.title, ...doc.paragraphs].join("\\n") : ""
}

async function sha256Hex(text: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text))
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("")
}

// stub: replace with your API (POST /consents) — store the record server-side
async function sign(p: Consent): Promise<Signed> {
  const record: ConsentRecord = { consentVersion: p.version, contentHash: await sha256Hex(canonical(p.version)), signer: p.signer, signedAt: new Date().toISOString(), signature: p.signature }
  // re-hash the STORED version from the registry: proves the signed text did not change
  return { record, verified: (await sha256Hex(canonical(record.consentVersion))) === record.contentHash }
}

/** One version's text, rendered from the registry. */
function ConsentText({ version }: { version: string }) {
  const doc = VERSIONS[version]
  if (!doc) return null
  return (
    <article className="space-y-2 rounded-md border bg-muted/40 p-3 text-sm">
      <h4 className="font-medium">
        {doc.title} <span className="font-mono text-[11px] text-muted-foreground">v{version}</span>
      </h4>
      {doc.paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </article>
  )
}

/** The signed record, re-rendered from the stored version with its re-hash check. */
function SignedView({ signed }: { signed: Signed }) {
  const { record, verified } = signed
  return (
    <div className="flex flex-col gap-2 rounded-md border border-emerald-600/30 p-3 text-xs">
      <p className="font-medium text-emerald-700 dark:text-emerald-400">✓ Signed by {record.signer} at {record.signedAt}</p>
      <ConsentText version={record.consentVersion} />
      <p className="break-all font-mono text-[11px] text-muted-foreground">sha256 {record.contentHash}</p>
      <p className={verified ? "text-emerald-700 dark:text-emerald-400" : "text-destructive"}>
        {verified ? "Re-hashed from the registry: matches the signed text." : "Re-hash does NOT match: the stored version changed."}
      </p>
      {record.signature ? <img src={record.signature} alt={\`Signature of \${record.signer}\`} className="h-16 rounded border bg-background" /> : null}
    </div>
  )
}

export function ConsentForm() {
  const form = useForm<Consent, Consent, Signed>({ defaultValues })
  const version = useFormValue(form, "version")
  return (
    <Form form={form} onSubmit={sign}>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="flex flex-col gap-3">
          <SelectField name="version" label="Consent version" options={versionOptions} description="Sign the current text, or a superseded one to see that the view re-renders exactly what was signed." />
          <ConsentText version={version} />
          <TextField name="signer" label="Full legal name (your signature)" required autoComplete="name" rules={[v.minLength(MIN_NAME)]} />
          <SignatureField name="signature" label="Draw your signature" required description="Mouse, pen or finger. Your typed name above is the signature of record." />
          <CheckboxField name="agree" label="I have read and agree to this consent" required rules={[v.oneOf([true], "You must agree to sign")]} />
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })} pendingLabel="Signing…">Sign</Form.Submit>
            <Form.Status<Signed> success={() => <span className="text-[13px] text-emerald-700 dark:text-emerald-400">Signed — record on the right</span>} />
          </div>
        </div>
        {/* re-renders the STORED version with its re-hash check */}
        <Form.Status<Signed> success={(s) => <SignedView signed={s} />} />
      </div>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>t(()=>import(`./consent-FzGBD1-n.js`),[]));function D(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(e,{title:`Versioned e-sign consent`,children:`The consent text is an immutable version from a registry. Signing captures the version, a SHA-256 of the exact text, the signer, a timestamp and a drawn signature (canvas, no dependency). The signed view re-renders that stored version and re-hashes it. Not claimed: legal compliance (ESIGN/eIDAS) or server-side storage.`}),(0,p.jsx)(f,{n:1,title:`Sign a consent`,blurb:`Type your name, draw a mark, agree, sign. Then switch the version and sign again.`,code:E,children:(0,p.jsx)(T,{})})]})}export{D as component};