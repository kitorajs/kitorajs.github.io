import{n as e,t}from"./-kits.form-builder.shared-Ck2kzg8T.js";import{s as n}from"./kit-docs-Cf27Kpa-.js";import{Ec as r,zc as i}from"./index-BZuUy872.js";import{J as a}from"./field-config-53O_jYuu.js";import"./kit-gallery-BBavj2rC.js";import{t as o}from"./example-B67lLz1F.js";var s=i(),c=a()(({f:e,c:t,v:n})=>({fields:[e.step(`workspace`,{label:`Workspace`},[e.text(`workspace`,{label:`Workspace name`,required:!0,placeholder:`Acme`}),e.text(`slug`,{label:`URL`,description:`acme.example.com`,required:!0,rules:[n.pattern(`^[a-z0-9-]+$`,`Lowercase letters, digits and dashes`)]}),e.radioCards(`teamSize`,{label:`Team size`,required:!0,options:[{value:`1`,label:`Just me`},{value:`2-10`,label:`2–10`},{value:`11+`,label:`11 or more`}]})]),e.step(`team`,{label:`Team`},[e.checkboxGroup(`useCase`,{label:`What will you use it for?`,options:[{value:`projects`,label:`Projects`},{value:`docs`,label:`Docs`},{value:`support`,label:`Support`}]}),e.tags(`invite`,{label:`Invite teammates`,description:`Email addresses; press Enter after each.`})]),e.step(`billing`,{label:`Billing`},[e.section({title:`Plan`,cols:2},[e.select(`plan`,{label:`Plan`,required:!0,default:`starter`,options:[{value:`starter`,label:`Starter`},{value:`team`,label:`Team`}]}),e.stepper(`seats`,{label:`Seats`,default:5,visibleIf:t.eq(`plan`,`team`),rules:[n.min(2)]})]),e.email(`billingEmail`,{label:`Billing email`,required:t.eq(`plan`,`team`),rules:[n.email()]})])]}));function l(){return(0,s.jsx)(e,{defaultDef:c,title:`Workspace onboarding`})}var u=`import { defineForm } from "@kitora/form/core"
import { FormBuilder } from "@kitora/form-builder"

// A wizard is a form whose top level is steps. Each step card holds fields and sections;
// drag a field from one step to another, drop a "Wizard step" from the palette to add one,
// then Preview walks the steps with Next / Back and validates each before moving on.
type Onboarding = {
  workspace: string
  slug: string
  teamSize: string
  useCase: string[]
  invite: string[]
  plan: string
  seats?: number
  billingEmail?: string
}

const onboarding = defineForm<Onboarding>()(({ f, c, v }) => ({
  fields: [
    f.step("workspace", { label: "Workspace" }, [
      f.text("workspace", { label: "Workspace name", required: true, placeholder: "Acme" }),
      f.text("slug", { label: "URL", description: "acme.example.com", required: true, rules: [v.pattern("^[a-z0-9-]+$", "Lowercase letters, digits and dashes")] }),
      f.radioCards("teamSize", {
        label: "Team size",
        required: true,
        options: [
          { value: "1", label: "Just me" },
          { value: "2-10", label: "2–10" },
          { value: "11+", label: "11 or more" },
        ],
      }),
    ]),
    f.step("team", { label: "Team" }, [
      f.checkboxGroup("useCase", {
        label: "What will you use it for?",
        options: [
          { value: "projects", label: "Projects" },
          { value: "docs", label: "Docs" },
          { value: "support", label: "Support" },
        ],
      }),
      f.tags("invite", { label: "Invite teammates", description: "Email addresses; press Enter after each." }),
    ]),
    f.step("billing", { label: "Billing" }, [
      f.section({ title: "Plan", cols: 2 }, [
        f.select("plan", {
          label: "Plan",
          required: true,
          default: "starter",
          options: [
            { value: "starter", label: "Starter" },
            { value: "team", label: "Team" },
          ],
        }),
        f.stepper("seats", { label: "Seats", default: 5, visibleIf: c.eq("plan", "team"), rules: [v.min(2)] }),
      ]),
      f.email("billingEmail", { label: "Billing email", required: c.eq("plan", "team"), rules: [v.email()] }),
    ]),
  ],
}))

export function WizardBuilder() {
  return <FormBuilder defaultDef={onboarding} title="Workspace onboarding" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(u,()=>r(()=>import(`./wizard-CGCsLyWR.js`),[]));function d(){return(0,s.jsxs)(`div`,{children:[(0,s.jsx)(n,{title:`Wizard`,children:`A form whose top level is steps renders as a wizard. Dropping the first "Wizard step" on a flat form wraps the existing fields into it; after that the top level takes only steps.`}),(0,s.jsx)(o,{n:1,title:`Workspace onboarding`,blurb:`Three steps: a slug with a pattern rule, radio cards, checkboxes and tags, then a two-column plan section whose Seats field shows only for Team, and a billing email required only for Team.`,code:u,children:(0,s.jsx)(t,{testId:`fb-wizard`,height:720,bare:!0,children:(0,s.jsx)(l,{})})})]})}export{d as component};