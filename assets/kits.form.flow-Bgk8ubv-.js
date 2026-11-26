import{s as e}from"./kit-docs-DpYhPoxM.js";import{Cc as t,Ic as n}from"./index-q72zUtm9.js";import{J as r}from"./field-config-DXiPz8Cg.js";import{t as i}from"./example-B8EaWveR.js";import{t as a}from"./question-flow-DHA9oR6s.js";import"./demos-DN9t7sug.js";var o=n(),s={name:``},c={async save(e){console.log(`saved`,e)}},l=r()(({f:e,e:t,c:n})=>({fields:[e.text(`name`,{label:`What's your name?`,required:!0}),e.radioCards(`role`,{label:`What best describes you?`,required:!0,options:[{value:`team`,label:`I lead a team`},{value:`solo`,label:`I work on my own`}],pipe:t.cat(`Nice to meet you, `,t.ref(`name`),`. What best describes you?`),goTo:[{if:n.eq(`role`,`solo`),to:`soloReason`}]}),e.when(n.eq(`role`,`team`),[e.stepper(`teamSize`,{label:`How many people are on your team?`,props:{min:2,max:500}})]),e.text(`soloReason`,{label:`What are you working on?`,visibleIf:n.eq(`role`,`solo`)}),e.email(`email`,{label:`Where should we send your setup guide?`,required:!0})]}));function u(){return(0,o.jsx)(a,{def:l,defaultValues:s,onSubmit:c.save,done:`You're all set.`})}var d=`import { QuestionFlow } from "@kitora/form/auto"
import { defineForm } from "@kitora/form/core"

type Onboarding = { name: string; role?: string; teamSize?: number; soloReason?: string; email?: string }

const defaultValues: Onboarding = { name: "" }

// stub: replace with your API (POST /onboarding)
const api = {
  async save(values: Onboarding): Promise<void> {
    console.log("saved", values)
  },
}

const def = defineForm<Onboarding>()(({ f, e, c }) => ({
  fields: [
    f.text("name", { label: "What's your name?", required: true }),
    f.radioCards("role", {
      label: "What best describes you?",
      required: true,
      options: [{ value: "team", label: "I lead a team" }, { value: "solo", label: "I work on my own" }],
      // 'name' is the sibling field above: its answer is piped into this label
      pipe: e.cat("Nice to meet you, ", e.ref("name"), ". What best describes you?"),
      // jump straight to the sibling 'soloReason' question
      goTo: [{ if: c.eq("role", "solo"), to: "soloReason" }],
    }),
    // skip logic = visibleIf on the sibling 'role'
    f.when(c.eq("role", "team"), [f.stepper("teamSize", { label: "How many people are on your team?", props: { min: 2, max: 500 } })]),
    // visible only when the sibling 'role' is solo
    f.text("soloReason", { label: "What are you working on?", visibleIf: c.eq("role", "solo") }),
    f.email("email", { label: "Where should we send your setup guide?", required: true }),
  ],
}))

// Enter advances after validation; Back returns to the previous answered question
export function OnboardingFlow() {
  return <QuestionFlow def={def} defaultValues={defaultValues} onSubmit={api.save} done="You're all set." />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(d,()=>t(()=>import(`./flow-COblIMiV.js`),[]));function f(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e,{title:`One question at a time`,children:[`A definition asked question by question: Enter advances after validation, skip logic is `,(0,o.jsx)(`code`,{children:`visibleIf`}),`, `,(0,o.jsx)(`code`,{children:`goTo`}),` jumps, Back returns to the previous answered question, and labels can pipe earlier answers.`]}),(0,o.jsx)(i,{n:1,title:`Onboarding`,blurb:`Choose “I work on my own” to see the jump; go Back and change it to see the team branch.`,code:d,children:(0,o.jsx)(u,{})})]})}export{f as component};