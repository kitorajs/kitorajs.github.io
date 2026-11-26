import{s as e}from"./kit-docs-DpYhPoxM.js";import{Cc as t,Ic as n,ni as r}from"./index-q72zUtm9.js";import{W as i}from"./messages-Bsb0m0Hq.js";import{A as a,J as o,Y as s,c,h as l}from"./field-config-DXiPz8Cg.js";import{a as u,o as d}from"./fields-CoJCsIMd.js";import{i as f}from"./fields-extra-uoDLzrFQ.js";import{t as p}from"./matrix-n9AHumxI.js";import{t as m}from"./example-B8EaWveR.js";import{t as h}from"./question-flow-DHA9oR6s.js";import"./demos-DN9t7sug.js";var g=n(),_=[{value:`yes`,label:`Yes`},{value:`no`,label:`No`}],v=[{value:`yes`,label:`Definitely`},{value:`maybe`,label:`Maybe`},{value:`no`,label:`No`}],y=[`Speed`,`Docs`,`Support`],b=[`1`,`2`,`3`,`4`,`5`],{c:x}=s(),S={async send(e){console.log(e)}};function C(){let e=a({defaultValues:{}});return(0,g.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,g.jsxs)(c,{form:e,onSubmit:e=>S.send(e),children:[(0,g.jsx)(f,{name:`usesProduct`,label:`Do you still use the product?`,required:!0,options:_}),(0,g.jsx)(u,{name:`favoriteFeature`,label:`What's your favorite feature?`,visibleIf:x.eq(`usesProduct`,`yes`)}),(0,g.jsx)(d,{name:`churnReason`,label:`What made you stop?`,rows:3,required:!0,visibleIf:x.eq(`usesProduct`,`no`)}),(0,g.jsx)(p,{name:`ratings`,label:`Rate each area (1 = poor, 5 = great)`,rows:y,columns:b,requiredRows:`all`,visibleIf:x.eq(`usesProduct`,`yes`)}),(0,g.jsx)(f,{name:`recommend`,label:`Would you recommend us?`,options:v}),(0,g.jsx)(d,{name:`recommendWhy`,label:`What would change your mind?`,rows:3,visibleIf:x.in(`recommend`,[`no`,`maybe`])}),(0,g.jsx)(c.Submit,{className:r({size:`sm`,className:`w-fit`}),children:`Send answers`}),(0,g.jsx)(c.Status,{success:()=>`Thanks — your answers were sent.`})]}),(0,g.jsx)(w,{form:e})]})}function w({form:e}){let t=l(e,e=>e.serialize(),i);return(0,g.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,g.jsx)(`div`,{className:`border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium`,children:`Live payload`}),(0,g.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)})]})}var T=`import { buttonVariants } from "@kitora/ui/button"
import { deepEqual, kit } from "@kitora/form/core"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { MatrixField, RadioGroupField, TextareaField, TextField } from "@kitora/form/fields"

type Survey = { usesProduct?: string; favoriteFeature?: string; churnReason?: string; ratings?: Record<string, string>; recommend?: string; recommendWhy?: string }

const YES_NO = [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]
const RECOMMEND = [{ value: "yes", label: "Definitely" }, { value: "maybe", label: "Maybe" }, { value: "no", label: "No" }]
const AREAS = ["Speed", "Docs", "Support"]
const LIKERT_5 = ["1", "2", "3", "4", "5"]
const { c } = kit<Survey>()

// stub: replace with your API (POST /survey-answers)
const api = {
  async send(answers: Survey): Promise<void> {
    console.log(answers)
  },
}

// hidden questions leave the payload and stop validating
export function SurveyForm() {
  const form = useForm<Survey>({ defaultValues: {} })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={(a) => api.send(a)}>
        <RadioGroupField name="usesProduct" label="Do you still use the product?" required options={YES_NO} />
        {/* 'usesProduct' is the sibling field above */}
        <TextField name="favoriteFeature" label="What's your favorite feature?" visibleIf={c.eq("usesProduct", "yes")} />
        {/* 'usesProduct' is the sibling field above */}
        <TextareaField name="churnReason" label="What made you stop?" rows={3} required visibleIf={c.eq("usesProduct", "no")} />
        {/* 'usesProduct' is the sibling field above; a Likert matrix, every row required */}
        <MatrixField name="ratings" label="Rate each area (1 = poor, 5 = great)" rows={AREAS} columns={LIKERT_5} requiredRows="all" visibleIf={c.eq("usesProduct", "yes")} />
        <RadioGroupField name="recommend" label="Would you recommend us?" options={RECOMMEND} />
        {/* 'recommend' is the sibling field above */}
        <TextareaField name="recommendWhy" label="What would change your mind?" rows={3} visibleIf={c.in("recommend", ["no", "maybe"])} />
        <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Send answers</Form.Submit>
        <Form.Status success={() => "Thanks — your answers were sent."} />
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>t(()=>import(`./page-DcTd2LIc.js`),[]));var E={},D=[{value:`yes`,label:`Yes`},{value:`no`,label:`No`}],O=[{value:`yes`,label:`Definitely`},{value:`maybe`,label:`Maybe`},{value:`no`,label:`No`}],k=[`Speed`,`Docs`,`Support`],A=[`1`,`2`,`3`,`4`,`5`],j={async send(e){console.log(e)}},M=o()(({f:e,c:t})=>({fields:[e.radio(`usesProduct`,{label:`Do you still use the product?`,required:!0,options:D}),e.text(`favoriteFeature`,{label:`What's your favorite feature?`,visibleIf:t.eq(`usesProduct`,`yes`)}),e.textarea(`churnReason`,{label:`What made you stop?`,visibleIf:t.eq(`usesProduct`,`no`),required:!0}),e.matrix(`ratings`,{label:`Rate each area`,rows:k,columns:A,requiredRows:`all`,visibleIf:t.eq(`usesProduct`,`yes`)}),e.radio(`recommend`,{label:`Would you recommend us?`,options:O}),e.textarea(`recommendWhy`,{label:`What would change your mind?`,visibleIf:t.in(`recommend`,[`no`,`maybe`])})]}));function N(){return(0,g.jsx)(h,{def:M,defaultValues:E,onSubmit:e=>j.send(e),done:`Thanks — your answers were sent.`})}var P=`import { QuestionFlow } from "@kitora/form/auto"
import { defineForm } from "@kitora/form/core"

type Survey = { usesProduct?: string; favoriteFeature?: string; churnReason?: string; ratings?: Record<string, string>; recommend?: string; recommendWhy?: string }

const defaultValues: Survey = {}
const YES_NO = [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]
const RECOMMEND = [{ value: "yes", label: "Definitely" }, { value: "maybe", label: "Maybe" }, { value: "no", label: "No" }]
const AREAS = ["Speed", "Docs", "Support"]
const LIKERT_5 = ["1", "2", "3", "4", "5"]

// stub: replace with your API (POST /survey-answers)
const api = {
  async send(answers: Survey): Promise<void> {
    console.log(answers)
  },
}

// hidden questions leave the payload and stop validating
const survey = defineForm<Survey>()(({ f, c }) => ({
  fields: [
    f.radio("usesProduct", { label: "Do you still use the product?", required: true, options: YES_NO }),
    // 'usesProduct' is the sibling field above
    f.text("favoriteFeature", { label: "What's your favorite feature?", visibleIf: c.eq("usesProduct", "yes") }),
    // 'usesProduct' is the sibling field above
    f.textarea("churnReason", { label: "What made you stop?", visibleIf: c.eq("usesProduct", "no"), required: true }),
    // 'usesProduct' is the sibling field above; a Likert matrix, every row required
    f.matrix("ratings", { label: "Rate each area", rows: AREAS, columns: LIKERT_5, requiredRows: "all", visibleIf: c.eq("usesProduct", "yes") }),
    f.radio("recommend", { label: "Would you recommend us?", options: RECOMMEND }),
    // 'recommend' is the sibling field above
    f.textarea("recommendWhy", { label: "What would change your mind?", visibleIf: c.in("recommend", ["no", "maybe"]) }),
  ],
}))

// one question at a time: QuestionFlow walks the definition, skipping hidden questions
export function SurveyForm() {
  return <QuestionFlow<Survey> def={survey} defaultValues={defaultValues} onSubmit={(a) => api.send(a)} done="Thanks — your answers were sent." />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>t(()=>import(`./one-at-a-time-BM3wtzmt.js`),[]));function F(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(e,{title:`Survey with branching`,children:[`Skip logic as `,(0,g.jsx)(`code`,{children:`visibleIf`}),` on each follow-up: the question shown depends on the previous answer, and skipped questions never appear in the payload (nor block submit). Includes a Likert matrix question with every row required.`]}),(0,g.jsx)(m,{n:1,title:`All questions on one page`,blurb:`Answer Yes to see the feature question and the rating matrix; pick Maybe or No on the last question for its follow-up.`,code:T,children:(0,g.jsx)(C,{})}),(0,g.jsx)(m,{n:2,title:`The same definition, one question at a time`,blurb:`QuestionFlow walks the definition: hidden questions are skipped, Back returns to the previous answer.`,code:P,children:(0,g.jsx)(N,{})})]})}export{F as component};