import{n as e,t}from"./-kits.form-builder.shared-DwipQTY0.js";import{s as n}from"./kit-docs-BUovISd0.js";import{Cc as r,Ic as i}from"./index-B9ukmIN1.js";import{J as a}from"./field-config-17kME8Vl.js";import"./kit-gallery-Bph7isB2.js";import{t as o}from"./example-BGnSQG2Y.js";var s=i(),c=a()(({f:e,c:t,v:n})=>({fields:[e.section({title:`About you`,cols:2},[e.text(`fullName`,{label:`Full name`,required:!0,placeholder:`Ada Lovelace`,rules:[n.minLength(2)]}),e.email(`email`,{label:`Email`,required:!0,rules:[n.email()]}),e.phone(`phone`,{label:`Phone`}),e.field(`url`,`portfolio`,{label:`Portfolio or GitHub`,placeholder:`https://`,rules:[n.url()]})]),e.section({title:`The role`},[e.select(`role`,{label:`Role`,required:!0,options:[{value:`frontend`,label:`Frontend engineer`},{value:`backend`,label:`Backend engineer`},{value:`design`,label:`Product designer`}]}),e.segmented(`seniority`,{label:`Seniority`,default:`mid`,options:[{value:`junior`,label:`Junior`},{value:`mid`,label:`Mid`},{value:`senior`,label:`Senior`}]}),e.switch(`remote`,{label:`I want to work remotely`,default:!0}),e.text(`city`,{label:`Which office?`,required:!0,visibleIf:t.eq(`remote`,!1)}),e.number(`salary`,{label:`Expected salary (USD)`,rules:[n.min(0)]}),e.date(`startDate`,{label:`Earliest start date`})]),e.textarea(`coverLetter`,{label:`Cover letter`,description:`Optional, 1,000 characters at most.`,rules:[n.maxLength(1e3)]}),e.checkbox(`consent`,{label:`I agree to the privacy policy`,required:!0})]}));function l(){return(0,s.jsx)(e,{defaultDef:c,title:`Job application`})}var u=`import { defineForm } from "@kitora/form/core"
import { FormBuilder } from "@kitora/form-builder"

// A real starting point: a job application written with defineForm, opened in the builder.
// Drag fields from the palette, drag cards by their grip to reorder or move them between
// sections, click a card to edit it on the right, then switch to Preview and submit.
type Application = {
  fullName: string
  email: string
  phone: string
  role: string
  seniority: string
  remote: boolean
  city?: string
  salary?: number
  startDate?: string
  portfolio?: string
  coverLetter?: string
  consent: boolean
}

const application = defineForm<Application>()(({ f, c, v }) => ({
  fields: [
    f.section({ title: "About you", cols: 2 }, [
      f.text("fullName", { label: "Full name", required: true, placeholder: "Ada Lovelace", rules: [v.minLength(2)] }),
      f.email("email", { label: "Email", required: true, rules: [v.email()] }),
      f.phone("phone", { label: "Phone" }),
      f.field("url", "portfolio", { label: "Portfolio or GitHub", placeholder: "https://", rules: [v.url()] }),
    ]),
    f.section({ title: "The role" }, [
      f.select("role", {
        label: "Role",
        required: true,
        options: [
          { value: "frontend", label: "Frontend engineer" },
          { value: "backend", label: "Backend engineer" },
          { value: "design", label: "Product designer" },
        ],
      }),
      f.segmented("seniority", {
        label: "Seniority",
        default: "mid",
        options: [
          { value: "junior", label: "Junior" },
          { value: "mid", label: "Mid" },
          { value: "senior", label: "Senior" },
        ],
      }),
      f.switch("remote", { label: "I want to work remotely", default: true }),
      f.text("city", { label: "Which office?", required: true, visibleIf: c.eq("remote", false) }),
      f.number("salary", { label: "Expected salary (USD)", rules: [v.min(0)] }),
      f.date("startDate", { label: "Earliest start date" }),
    ]),
    f.textarea("coverLetter", { label: "Cover letter", description: "Optional, 1,000 characters at most.", rules: [v.maxLength(1000)] }),
    f.checkbox("consent", { label: "I agree to the privacy policy", required: true }),
  ],
}))

export function JobApplicationBuilder() {
  return <FormBuilder defaultDef={application} title="Job application" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(u,()=>r(()=>import(`./job-application-YsCaxSvd.js`),[]));var d=[{name:`core`,entry:`@kitora/form-builder/core`,what:`The document (the engine's own nodes wrapped with builder ids; anything the builder cannot edit kept verbatim), tree ops with placement rules, the palette catalog, simple conditions ⇄ JSON Logic, problems, undo / redo with merged keystrokes, the reducer, drag and click placement, and the two seams: BuilderCodec (default jsonCodec, the engine's toJSON / fromJSON) and BuilderStorage (memoryStorage). No React, no DOM.`},{name:`dom`,entry:`@kitora/form-builder/dom`,what:`Headless browser behaviour: downloadText / copyText and localStorageAdapter. No React, no styling. (Shortcuts are commands on the keyboard kit; their map is data in core: BUILDER_COMMANDS, commandAction.)`},{name:`react`,entry:`@kitora/form-builder/react`,what:`useFormBuilder (document, selection and mode each controlled or uncontrolled), FormBuilderProvider, BuilderDndProvider, and headless hooks: useBuilderShortcuts (the builder's commands on @kitora/keyboard, rebindable under a KeyboardProvider), useAddEntry, usePaletteSearch, useBuilderStatus, useBuilderStorage.`},{name:`ui`,entry:`@kitora/form-builder/ui`,what:`The FormBuilder preset, built only from its parts: FormBuilder.Root, .Toolbar (.ModeSwitch, .UndoButton, .RedoButton, .FieldCount, .ProblemsButton, .JsonButton), .Workspace, .Panes, .Palette, .Canvas, .Properties, .Preview, .JsonDialog, .JsonPanel. Every part takes className and classNames, exposes data-* state, and the slots (icon, field card body, empty canvas) swap renderers. Built on the shared primitives: @kitora/ui buttons, inputs and tabs, the overlay kit's Modal, keyboard roving for the toolbar, palette and segmented choices, the dock's SplitView and the dnd kit.`}];function f(){return(0,s.jsxs)(`div`,{children:[(0,s.jsx)(n,{title:`Form builder`,children:`Build a form by dragging fields from the palette onto the canvas; every card shows the real widget. Drag a card by its grip to reorder it or move it into a section, click it to edit it on the right (label, name, required, shown when, options, default, rules), switch to Preview and submit, open JSON to export or import. ⌘/Ctrl Z undoes anything.`}),(0,s.jsx)(o,{n:1,title:`A job application`,blurb:`Written with defineForm: two sections (one in two columns), a dropdown, a segmented choice, an office field shown only when Remote is off, length, email, URL and minimum rules, a required consent box.`,code:u,children:(0,s.jsx)(t,{testId:`fb-overview`,height:700,bare:!0,children:(0,s.jsx)(l,{})})}),(0,s.jsx)(o,{n:2,title:`Layers`,blurb:`How the kit is put together.`,children:(0,s.jsx)(`table`,{className:`w-full text-[13px]`,children:(0,s.jsx)(`tbody`,{children:d.map(e=>(0,s.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,s.jsxs)(`td`,{className:`py-1.5 pr-3 align-top font-mono text-[12px]`,children:[e.name,(0,s.jsx)(`div`,{className:`text-[11px] whitespace-nowrap text-muted-foreground`,children:e.entry})]}),(0,s.jsx)(`td`,{className:`py-1.5 text-muted-foreground`,children:e.what})]},e.name))})})})]})}export{f as component};