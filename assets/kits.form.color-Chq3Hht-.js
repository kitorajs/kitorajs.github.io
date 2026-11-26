import{s as e}from"./kit-docs-BUovISd0.js";import{Cc as t,Ic as n}from"./index-B9ukmIN1.js";import{W as r}from"./messages-C_IMdr_-.js";import{A as i,c as a,h as o}from"./field-config-17kME8Vl.js";import{t as s}from"./color-BAi1tfRJ.js";import{t as c}from"./example-BGnSQG2Y.js";import"./demos-Ds1NfSaA.js";var l=n(),u={brand:`#1d4ed8`,accent:`#fde68a`},d=[{value:`#0f766e`,label:`Ocean`},{value:`#1d4ed8`,label:`Royal`},{value:`#7c3aed`,label:`Violet`},{value:`#be123c`,label:`Ruby`},{value:`#ca8a04`,label:`Mustard`},{value:`#fde68a`,label:`Butter`}];function f(){let e=i({defaultValues:u});return(0,l.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[(0,l.jsxs)(a,{form:e,layout:`none`,className:`flex flex-col gap-4`,children:[(0,l.jsx)(s,{name:`brand`,label:`Brand colour`,required:!0,swatches:d,contrastAgainst:`#ffffff`,description:`Used for text on white: warns below 4.5:1 (WCAG AA).`}),(0,l.jsx)(s,{name:`accent`,label:`Accent`,description:`Default palette; type #hex or rgb(…), or open the picker.`})]}),(0,l.jsx)(p,{form:e})]})}function p({form:e}){let{payload:t,dirty:n,status:i,issues:a}=o(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),r);return(0,l.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,l.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,l.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,l.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,i]})]}),(0,l.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),a.length>0?(0,l.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:a.map(e=>(0,l.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var m=`import { ColorField, type ColorSwatch } from "@kitora/form/fields"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"

type Theme = { brand: string; accent: string }

const defaultValues: Theme = { brand: "#1d4ed8", accent: "#fde68a" }
/** A brand palette with names, so screen readers announce "Ocean" rather than a hex code. */
const BRAND: ColorSwatch[] = [
  { value: "#0f766e", label: "Ocean" },
  { value: "#1d4ed8", label: "Royal" },
  { value: "#7c3aed", label: "Violet" },
  { value: "#be123c", label: "Ruby" },
  { value: "#ca8a04", label: "Mustard" },
  { value: "#fde68a", label: "Butter" },
]

export function ThemeForm() {
  const form = useForm<Theme>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
      <Form form={form} layout="none" className="flex flex-col gap-4">
        {/* "#1d4ed8" · contrastAgainst adds a contrast WARN rule (never blocks submit) */}
        <ColorField name="brand" label="Brand colour" required swatches={BRAND} contrastAgainst="#ffffff" description="Used for text on white: warns below 4.5:1 (WCAG AA)." />
        {/* accepts #rgb, #rrggbb, rgb(r g b); stores #rrggbb */}
        <ColorField name="accent" label="Accent" description="Default palette; type #hex or rgb(…), or open the picker." />
      </Form>
      <Payload form={form} />
    </div>
  )
}


interface LiveSource extends SnapshotSource {
  serialize(): unknown
  isDirty(): boolean
  getStatus(): SubmitStatus
  getIssues(): Issue[]
}

/** What the form would submit, live, with its state and issues: a readout beside the form, not part of it. */
function Payload({ form }: { form: LiveSource }) {
  const { payload, dirty, status, issues } = useFormSnapshot(
    form,
    (s: LiveSource) => ({ payload: s.serialize(), dirty: s.isDirty(), status: s.getStatus(), issues: s.getIssues() }),
    deepEqual,
  )
  return (
    <aside className="min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card">
      <div className="flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]">
        <span className="font-medium">Live payload</span>
        <span className="tabular-nums text-muted-foreground">{dirty ? "● dirty" : "clean"} · {status}</span>
      </div>
      <pre dir="ltr" tabIndex={0} className="max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed">
        {JSON.stringify(payload, null, 2)}
      </pre>
      {issues.length > 0 ? (
        <ul className="space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive">
          {issues.map((i) => (
            <li key={i.path}>{i.path || "(form)"}: {i.message}</li>
          ))}
        </ul>
      ) : null}
    </aside>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(m,()=>t(()=>import(`./color-CQUAwtwU.js`),[]));function h(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e,{title:`Colour`,children:[`One canonical value, `,(0,l.jsx)(`code`,{children:`#rrggbb`}),`. Type hex or `,(0,l.jsx)(`code`,{children:`rgb()`}),`, pick a named swatch (the pickers kit's swatches: arrows move focus, Enter or Space picks), or open the pickers kit's colour panel from the preview (area, hue, eyedropper, hex/rgb/hsl). The preview reads its WCAG contrast ratio; with `,(0,l.jsx)(`code`,{children:`contrastAgainst`}),` the field warns below AA and still submits.`]}),(0,l.jsx)(c,{n:1,title:`Theme colours`,blurb:`Named brand swatches with a contrast warning, and the default palette.`,code:m,children:(0,l.jsx)(f,{})})]})}export{h as component};