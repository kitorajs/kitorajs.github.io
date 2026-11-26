import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{d as t}from"./progress-BG3aQzLB.js";import{Ai as n,Cc as r,Ic as i}from"./index-q72zUtm9.js";var a=e({SpinnerInlineStatus:()=>c}),o=i(),s=[{name:`Install dependencies`,done:!0},{name:`Build`,done:!0},{name:`Run tests`,done:!1}];function c(){return(0,o.jsx)(`ul`,{className:`flex w-full max-w-xs flex-col gap-2 text-sm`,"aria-label":`Pipeline`,children:s.map(e=>(0,o.jsxs)(`li`,{className:`flex items-center gap-2`,children:[e.done?(0,o.jsx)(n,{className:`size-4 text-muted-foreground`,"aria-hidden":!0}):(0,o.jsx)(t,{size:`sm`,label:`${e.name}, running`,className:`text-primary`}),(0,o.jsx)(`span`,{className:e.done?`text-muted-foreground`:`font-medium`,children:e.name})]},e.name))})}var l=e({SpinnerSizesAndVariants:()=>u});function u(){return(0,o.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-4 text-muted-foreground`,children:[(0,o.jsx)(t,{size:`xs`}),(0,o.jsx)(t,{size:`sm`}),(0,o.jsx)(t,{size:`md`}),(0,o.jsx)(t,{size:`lg`,className:`text-primary`}),(0,o.jsx)(t,{variant:`dots`,label:`Typing`})]})}var d=`import { Check } from "lucide-react"
import { Spinner } from "@kitora/feedback"

const STEPS = [
  { name: "Install dependencies", done: true },
  { name: "Build", done: true },
  { name: "Run tests", done: false },
] as const

// A spinner beside the text it explains: give it a \`label\` naming the work, since it is announced as a
// status. (A busy ui Button draws its own spinner through \`loading\`.)
export function SpinnerInlineStatus() {
  return (
    <ul className="flex w-full max-w-xs flex-col gap-2 text-sm" aria-label="Pipeline">
      {STEPS.map((step) => (
        <li key={step.name} className="flex items-center gap-2">
          {step.done ? <Check className="size-4 text-muted-foreground" aria-hidden /> : <Spinner size="sm" label={\`\${step.name}, running\`} className="text-primary" />}
          <span className={step.done ? "text-muted-foreground" : "font-medium"}>{step.name}</span>
        </li>
      ))}
    </ul>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(d,()=>r(()=>import(`./inline-status-BD5nMNUX.js`),[]));var f=`import { Spinner } from "@kitora/feedback"

// Four sizes (12 / 16 / 20 / 28 px) of the ring, and the \`dots\` variant for inline "typing" states. Each is
// a \`role="status"\` with \`label\` as its name ("Loading" by default); the colour follows \`currentColor\`.
export function SpinnerSizesAndVariants() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" className="text-primary" />
      <Spinner variant="dots" label="Typing" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(f,()=>r(()=>import(`./sizes-and-variants-C3kJG7jF.js`),[]));var p={"./demos/spinner/inline-status.tsx":a,"./demos/spinner/sizes-and-variants.tsx":l},m={"./demos/spinner/inline-status.tsx":d,"./demos/spinner/sizes-and-variants.tsx":f};export{p as modules,m as sources};