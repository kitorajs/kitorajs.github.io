import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./switch-CiJzHfYx.js";import{a as n,i as r,n as i,r as a,t as o}from"./accordion-DdWdt9tr.js";import{t as s}from"./minus-BgH0A0Nf.js";import{t as c}from"./plus-DS8FiCg5.js";import{Cc as l,Ic as u,ki as d}from"./index-B9ukmIN1.js";import{i as f,n as p,r as m,t as h}from"./accordion-BM8aVb1U.js";import{t as g}from"./badge-uhFB8J9R.js";import{t as _}from"./label-DoQXlIRk.js";var v=e({AccordionBuildYourOwn:()=>x}),y=u(),b=[{value:`shipping`,title:`How long does shipping take?`,body:`Orders leave the warehouse within two working days.`},{value:`returns`,title:`Can I return an item?`,body:`Yes, within 30 days, unused and in its box.`},{value:`warranty`,title:`Is there a warranty?`,body:`Every product carries a two-year warranty.`}];function x({value:e,onValueChange:t,multiple:s}){return(0,y.jsx)(r,{defaultValue:e===void 0?[`shipping`]:void 0,value:e,onValueChange:e=>t?.(e),multiple:s,className:`flex w-full max-w-md flex-col`,children:b.map(e=>(0,y.jsxs)(i,{value:e.value,className:`border-b border-border last:border-b-0`,children:[(0,y.jsx)(o,{className:`flex`,children:(0,y.jsxs)(n,{className:`group flex flex-1 items-center justify-between py-2.5 text-start text-sm font-medium outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring`,children:[e.title,(0,y.jsx)(d,{"aria-hidden":`true`,className:`size-4 shrink-0 text-muted-foreground transition-transform group-aria-expanded:rotate-180`})]})}),(0,y.jsx)(a,{className:`overflow-hidden text-sm text-muted-foreground`,children:(0,y.jsx)(`div`,{className:`pb-2.5`,children:e.body})})]},e.value))})}var S=e({AccordionComposeSettingsSections:()=>w}),C=[{id:`email`,title:`Email`,count:2,rows:[`Weekly digest`,`Security alerts`]},{id:`push`,title:`Push`,count:1,rows:[`Mentions`]}];function w(){return(0,y.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,y.jsx)(h,{className:`w-full max-w-md`,children:C.map(e=>(0,y.jsxs)(m,{value:e.id,children:[(0,y.jsx)(f,{children:(0,y.jsxs)(`span`,{className:`flex items-center gap-2`,children:[e.title,(0,y.jsxs)(g,{variant:`secondary`,children:[e.count,` on`]})]})}),(0,y.jsx)(p,{contentClassName:`space-y-2`,children:e.rows.map(n=>(0,y.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,y.jsx)(_,{htmlFor:`${e.id}-${n}`,children:n}),(0,y.jsx)(t,{id:`${e.id}-${n}`,defaultChecked:!0})]},n))})]},e.id))})})}var T=e({AccordionIndicator:()=>D}),E=(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(c,{className:`size-4 group-aria-expanded/accordion-trigger:hidden`}),(0,y.jsx)(s,{className:`hidden size-4 group-aria-expanded/accordion-trigger:block`})]});function D(){return(0,y.jsxs)(`div`,{className:`grid w-full max-w-2xl gap-6 sm:grid-cols-2`,children:[(0,y.jsxs)(h,{defaultValue:[`plans`],children:[(0,y.jsxs)(m,{value:`plans`,children:[(0,y.jsx)(f,{indicator:E,children:`Which plans include SSO?`}),(0,y.jsx)(p,{contentClassName:`text-muted-foreground`,children:`Team and Enterprise. Both support SAML and OIDC.`})]}),(0,y.jsxs)(m,{value:`seats`,children:[(0,y.jsx)(f,{indicator:E,children:`Can I add seats mid-cycle?`}),(0,y.jsx)(p,{contentClassName:`text-muted-foreground`,children:`Yes, prorated to the day.`})]})]}),(0,y.jsx)(h,{children:(0,y.jsxs)(m,{value:`a`,className:`rounded-md border-0 bg-muted/50 px-3`,children:[(0,y.jsx)(f,{indicator:null,children:`No indicator, a tinted panel`}),(0,y.jsxs)(p,{className:`bg-muted/50`,contentClassName:`space-y-2 text-muted-foreground`,children:[(0,y.jsx)(`p`,{children:"`className` styles the panel itself."}),(0,y.jsx)(`p`,{children:"`contentClassName` styles the wrapper around these paragraphs."})]})]})})]})}var O=e({AccordionSingleFAQ:()=>k});function k(){return(0,y.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,y.jsx)(h,{className:`w-full max-w-md`,children:[{q:`What is Kitora?`,a:`A token-driven UI foundation for TanStack Start. Compact, sleek, power-user.`},{q:`How do I install components?`,a:`pnpm dlx shadcn@latest add <name>. Components live in src/components/ui.`},{q:`Can I theme it?`,a:`Yes. Override CSS vars in styles.css — every component re-skins.`}].map((e,t)=>(0,y.jsxs)(m,{value:`item-${t}`,children:[(0,y.jsx)(f,{children:e.q}),(0,y.jsx)(p,{children:e.a})]},t))})})}var A=`import { ChevronDownIcon } from "lucide-react"
import { Accordion } from "@kitora/primitives/react"

/** One row of the accordion: its value, title and answer. */
interface Row {
  readonly value: string
  readonly title: string
  readonly body: string
}

const ROWS: readonly Row[] = [
  { value: "shipping", title: "How long does shipping take?", body: "Orders leave the warehouse within two working days." },
  { value: "returns", title: "Can I return an item?", body: "Yes, within 30 days, unused and in its box." },
  { value: "warranty", title: "Is there a warranty?", body: "Every product carries a two-year warranty." },
]

/** An accordion built from the primitives' parts only: \`Accordion.Root\`, \`Item\`, \`Header\`, \`Trigger\` and \`Panel\`, styled on their state attributes. */
export function AccordionBuildYourOwn({ value, onValueChange, multiple }: { value?: string[]; onValueChange?: (value: string[]) => void; multiple?: boolean }) {
  return (
    <Accordion.Root
      defaultValue={value === undefined ? ["shipping"] : undefined}
      value={value}
      onValueChange={(next) => onValueChange?.(next as string[])}
      multiple={multiple}
      className="flex w-full max-w-md flex-col"
    >
      {ROWS.map((row) => (
        <Accordion.Item key={row.value} value={row.value} className="border-b border-border last:border-b-0">
          <Accordion.Header className="flex">
            <Accordion.Trigger className="group flex flex-1 items-center justify-between py-2.5 text-start text-sm font-medium outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring">
              {row.title}
              <ChevronDownIcon aria-hidden="true" className="size-4 shrink-0 text-muted-foreground transition-transform group-aria-expanded:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className="overflow-hidden text-sm text-muted-foreground">
            <div className="pb-2.5">{row.body}</div>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>l(()=>import(`./build-your-own-ivbbi-Wr.js`),[]));var j=`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@kitora/ui/accordion"
import { Badge } from "@kitora/ui/badge"
import { Switch } from "@kitora/ui/switch"
import { Label } from "@kitora/ui/label"

const SECTIONS = [
  { id: "email", title: "Email", count: 2, rows: ["Weekly digest", "Security alerts"] },
  { id: "push", title: "Push", count: 1, rows: ["Mentions"] },
]

export function AccordionComposeSettingsSections() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Accordion className="w-full max-w-md">
        {SECTIONS.map((s) => (
          <AccordionItem key={s.id} value={s.id}>
            <AccordionTrigger>
              <span className="flex items-center gap-2">
                {s.title}
                <Badge variant="secondary">{s.count} on</Badge>
              </span>
            </AccordionTrigger>
            <AccordionContent contentClassName="space-y-2">
              {s.rows.map((r) => (
                <div key={r} className="flex items-center justify-between">
                  <Label htmlFor={\`\${s.id}-\${r}\`}>{r}</Label>
                  <Switch id={\`\${s.id}-\${r}\`} defaultChecked />
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>l(()=>import(`./compose-HCgjBdPs.js`),[]));var M=`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@kitora/ui/accordion"
import { MinusIcon, PlusIcon } from "lucide-react"

const plusMinus = (
  <>
    <PlusIcon className="size-4 group-aria-expanded/accordion-trigger:hidden" />
    <MinusIcon className="hidden size-4 group-aria-expanded/accordion-trigger:block" />
  </>
)

export function AccordionIndicator() {
  return (
    <div className="grid w-full max-w-2xl gap-6 sm:grid-cols-2">
      <Accordion defaultValue={["plans"]}>
        <AccordionItem value="plans">
          <AccordionTrigger indicator={plusMinus}>Which plans include SSO?</AccordionTrigger>
          <AccordionContent contentClassName="text-muted-foreground">Team and Enterprise. Both support SAML and OIDC.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="seats">
          <AccordionTrigger indicator={plusMinus}>Can I add seats mid-cycle?</AccordionTrigger>
          <AccordionContent contentClassName="text-muted-foreground">Yes, prorated to the day.</AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion>
        <AccordionItem value="a" className="rounded-md border-0 bg-muted/50 px-3">
          <AccordionTrigger indicator={null}>No indicator, a tinted panel</AccordionTrigger>
          <AccordionContent className="bg-muted/50" contentClassName="space-y-2 text-muted-foreground">
            <p>\`className\` styles the panel itself.</p>
            <p>\`contentClassName\` styles the wrapper around these paragraphs.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>l(()=>import(`./indicator-DrfBUisq.js`),[]));var N=`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@kitora/ui/accordion"

export function AccordionSingleFAQ() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Accordion className="w-full max-w-md">
        {[
          {
            q: "What is Kitora?",
            a: "A token-driven UI foundation for TanStack Start. Compact, sleek, power-user.",
          },
          {
            q: "How do I install components?",
            a: "pnpm dlx shadcn@latest add <name>. Components live in src/components/ui.",
          },
          {
            q: "Can I theme it?",
            a: "Yes. Override CSS vars in styles.css — every component re-skins.",
          },
        ].map((it, i) => (
          <AccordionItem key={i} value={\`item-\${i}\`}>
            <AccordionTrigger>{it.q}</AccordionTrigger>
            <AccordionContent>{it.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>l(()=>import(`./single-faq-CLzDDMFd.js`),[]));var P={"./demos/accordion/build-your-own.tsx":v,"./demos/accordion/compose.tsx":S,"./demos/accordion/indicator.tsx":T,"./demos/accordion/single-faq.tsx":O},F={"./demos/accordion/build-your-own.tsx":A,"./demos/accordion/compose.tsx":j,"./demos/accordion/indicator.tsx":M,"./demos/accordion/single-faq.tsx":N};export{P as modules,F as sources};