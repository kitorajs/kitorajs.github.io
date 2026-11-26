import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{i as t,r as n}from"./stepper-lQJEWQu0.js";import{t as r}from"./stepper-DwkpSgnw.js";import{Cc as i,Ic as a,ti as o}from"./index-9y5uwRd3.js";import{i as s,n as c,t as l}from"./card-AZ_23TG_.js";var u=e({StepperComposeWizardCard:()=>p}),d=a(),f=[{id:`account`,label:`Account`},{id:`team`,label:`Team`},{id:`billing`,label:`Billing`}];function p(){let e=r({count:f.length,defaultActive:1}),t=f[e.active];return(0,d.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,d.jsxs)(l,{className:`w-full max-w-md`,children:[(0,d.jsxs)(c,{className:`grid gap-4`,children:[(0,d.jsx)(n.Root,{stepper:e,"aria-label":`Setup`,children:f.map((e,t)=>(0,d.jsxs)(n.Item,{index:t,children:[(0,d.jsxs)(n.Trigger,{children:[(0,d.jsx)(n.Indicator,{}),(0,d.jsx)(n.Title,{children:e.label})]}),(0,d.jsx)(n.Separator,{})]},e.id))}),(0,d.jsxs)(`p`,{className:`text-sm text-muted-foreground`,children:[`Step `,e.active+1,` of `,f.length,`: `,t?.label]})]}),(0,d.jsxs)(s,{className:`flex flex-wrap justify-between gap-2`,children:[(0,d.jsx)(o,{variant:`outline`,disabled:e.active===0,onClick:e.back,children:`Back`}),(0,d.jsx)(o,{disabled:e.active===f.length-1,onClick:e.next,children:`Next`})]})]})})}var m=e({StepperHorizontal:()=>g}),h=[{title:`Create`},{title:`Connect`},{title:`Configure`},{title:`Deploy`}];function g(){return(0,d.jsx)(`div`,{className:`flex flex-wrap items-center gap-3 justify-start`,children:(0,d.jsx)(t,{stepper:r({count:h.length,defaultActive:1}),steps:h,className:`w-full max-w-2xl`})})}var _=e({StepperVertical:()=>y}),v=[{title:`Create project`,description:`Done`},{title:`Connect repository`,description:`Pick a GitHub repo`},{title:`Configure environment`},{title:`Deploy`}];function y(){return(0,d.jsx)(`div`,{className:`flex flex-wrap items-center gap-3 justify-start`,children:(0,d.jsx)(t,{stepper:r({count:v.length,defaultActive:1}),steps:v,orientation:`vertical`})})}var b=`import { Stepper, useStepper } from "@kitora/feedback"
import { Button } from "@kitora/ui/button"
import { Card, CardContent, CardFooter } from "@kitora/ui/card"

const STEPS = [
  { id: "account", label: "Account" },
  { id: "team", label: "Team" },
  { id: "billing", label: "Billing" },
]

export function StepperComposeWizardCard() {
  const stepper = useStepper({ count: STEPS.length, defaultActive: 1 })
  const current = STEPS[stepper.active]
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Card className="w-full max-w-md">
        <CardContent className="grid gap-4">
          <Stepper.Root stepper={stepper} aria-label="Setup">
            {STEPS.map((step, i) => (
              <Stepper.Item key={step.id} index={i}>
                <Stepper.Trigger>
                  <Stepper.Indicator />
                  <Stepper.Title>{step.label}</Stepper.Title>
                </Stepper.Trigger>
                <Stepper.Separator />
              </Stepper.Item>
            ))}
          </Stepper.Root>
          <p className="text-sm text-muted-foreground">
            Step {stepper.active + 1} of {STEPS.length}: {current?.label}
          </p>
        </CardContent>
        <CardFooter className="flex flex-wrap justify-between gap-2">
          <Button variant="outline" disabled={stepper.active === 0} onClick={stepper.back}>
            Back
          </Button>
          <Button disabled={stepper.active === STEPS.length - 1} onClick={stepper.next}>
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>i(()=>import(`./compose-DmuSbeoU.js`),[]));var x=`import { Steps, useStepper } from "@kitora/feedback"

const STEPS = [{ title: "Create" }, { title: "Connect" }, { title: "Configure" }, { title: "Deploy" }]

export function StepperHorizontal() {
  const stepper = useStepper({ count: STEPS.length, defaultActive: 1 })
  return (
    <div className="flex flex-wrap items-center gap-3 justify-start">
      <Steps stepper={stepper} steps={STEPS} className="w-full max-w-2xl" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>i(()=>import(`./horizontal-BN6Dme5a.js`),[]));var S=`import { Steps, useStepper } from "@kitora/feedback"

const STEPS = [
  { title: "Create project", description: "Done" },
  { title: "Connect repository", description: "Pick a GitHub repo" },
  { title: "Configure environment" },
  { title: "Deploy" },
]

export function StepperVertical() {
  const stepper = useStepper({ count: STEPS.length, defaultActive: 1 })
  return (
    <div className="flex flex-wrap items-center gap-3 justify-start">
      <Steps stepper={stepper} steps={STEPS} orientation="vertical" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>i(()=>import(`./vertical-DtAv3w0j.js`),[]));var C={"./demos/stepper/compose.tsx":u,"./demos/stepper/horizontal.tsx":m,"./demos/stepper/vertical.tsx":_},w={"./demos/stepper/compose.tsx":b,"./demos/stepper/horizontal.tsx":x,"./demos/stepper/vertical.tsx":S};export{C as modules,w as sources};