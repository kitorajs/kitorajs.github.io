import{n as e,t}from"./-kits.form-builder.shared-DwipQTY0.js";import{s as n}from"./kit-docs-BUovISd0.js";import{Cc as r,Ic as i}from"./index-B9ukmIN1.js";import{J as a}from"./field-config-17kME8Vl.js";import"./kit-gallery-Bph7isB2.js";import{t as o}from"./example-BGnSQG2Y.js";var s=i(),c=a()(({f:e,c:t,v:n})=>({fields:[e.section({title:`Vehicle`,cols:2},[e.select(`vehicle`,{label:`Vehicle`,required:!0,options:[{value:`car`,label:`Car`},{value:`van`,label:`Van`},{value:`motorbike`,label:`Motorbike`}]}),e.number(`year`,{label:`Year`,rules:[n.min(1950),n.max(2027),n.integer()]}),e.radio(`usage`,{label:`Usage`,default:`personal`,options:[{value:`personal`,label:`Personal`},{value:`commute`,label:`Commuting`},{value:`business`,label:`Business`}]}),e.slider(`commuteMiles`,{label:`Daily commute (miles)`,visibleIf:t.eq(`usage`,`commute`),props:{min:0,max:120,step:5}}),e.text(`businessName`,{label:`Business name`,visibleIf:t.eq(`usage`,`business`),required:!0})]),e.section({title:`History`},[e.switch(`claims`,{label:`Any claims in the last 5 years?`}),e.number(`claimCount`,{label:`How many?`,visibleIf:t.eq(`claims`,!0),required:!0,rules:[n.min(1)]}),e.textarea(`claimDetails`,{label:`Tell us more`,visibleIf:t.gt(`claimCount`,2),rules:[n.minLength(20)]})]),e.email(`email`,{label:`Where should we send the quote?`,required:!0,rules:[n.email()]})]}));function l(){return(0,s.jsx)(e,{defaultDef:c,title:`Car insurance quote`})}var u=`import { defineForm } from "@kitora/form/core"
import { FormBuilder } from "@kitora/form-builder"

// Conditional logic, built by pointing and clicking: select a card with the eye chip and
// its "Shown" section reads "When … is …". Rename a field the others depend on (Name, in
// the panel) and every condition follows. Preview to watch fields appear and become required.
type Quote = {
  vehicle: string
  year?: number
  usage: string
  commuteMiles?: number
  businessName?: string
  claims: boolean
  claimCount?: number
  claimDetails?: string
  email: string
}

const quote = defineForm<Quote>()(({ f, c, v }) => ({
  fields: [
    f.section({ title: "Vehicle", cols: 2 }, [
      f.select("vehicle", {
        label: "Vehicle",
        required: true,
        options: [
          { value: "car", label: "Car" },
          { value: "van", label: "Van" },
          { value: "motorbike", label: "Motorbike" },
        ],
      }),
      f.number("year", { label: "Year", rules: [v.min(1950), v.max(2027), v.integer()] }),
      f.radio("usage", {
        label: "Usage",
        default: "personal",
        options: [
          { value: "personal", label: "Personal" },
          { value: "commute", label: "Commuting" },
          { value: "business", label: "Business" },
        ],
      }),
      f.slider("commuteMiles", { label: "Daily commute (miles)", visibleIf: c.eq("usage", "commute"), props: { min: 0, max: 120, step: 5 } }),
      f.text("businessName", { label: "Business name", visibleIf: c.eq("usage", "business"), required: true }),
    ]),
    f.section({ title: "History" }, [
      f.switch("claims", { label: "Any claims in the last 5 years?" }),
      f.number("claimCount", { label: "How many?", visibleIf: c.eq("claims", true), required: true, rules: [v.min(1)] }),
      f.textarea("claimDetails", { label: "Tell us more", visibleIf: c.gt("claimCount", 2), rules: [v.minLength(20)] }),
    ]),
    f.email("email", { label: "Where should we send the quote?", required: true, rules: [v.email()] }),
  ],
}))

export function ConditionsBuilder() {
  return <FormBuilder defaultDef={quote} title="Car insurance quote" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(u,()=>r(()=>import(`./conditions-idHsY8kq.js`),[]));function d(){return(0,s.jsxs)(`div`,{children:[(0,s.jsx)(n,{title:`Conditions`,children:`"Shown when" and "Required when" are a field, an operator and a value, stored as the engine's JSON Logic. A richer expression from an imported definition is kept as is and shown verbatim.`}),(0,s.jsx)(o,{n:1,title:`A car insurance quote`,blurb:`Commute miles for commuting, a business name (required) for business use, a claim count when claims is on, and details when more than two claims.`,code:u,children:(0,s.jsx)(t,{testId:`fb-conditions`,height:720,bare:!0,children:(0,s.jsx)(l,{})})})]})}export{d as component};