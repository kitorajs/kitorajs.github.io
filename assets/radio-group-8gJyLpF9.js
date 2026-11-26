import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{n,r,t as i}from"./radio-group-BUGukExc.js";import{Bc as a,Cc as o,Ic as s,ti as c}from"./index-q72zUtm9.js";import{t as l}from"./badge-Be8rVEaF.js";import{n as u}from"./choice-label-C2NTqHIo.js";import{t as d}from"./label-DjxTNoON.js";import{a as f,i as p,o as m}from"./choice-styles-DL1jb3hx.js";import{n as h,t as g}from"./radio-group-CHn8JUVh.js";var _=e({RadioGroupBuildYourOwn:()=>x}),v=s(),y=[{value:`standard`,label:`Standard`,hint:`3–5 business days`},{value:`express`,label:`Express`,hint:`1–2 business days`},{value:`overnight`,label:`Overnight`,hint:`Next morning`}];function b({value:e,label:t,hint:i}){let{controlId:a,descriptionId:o,describedBy:s}=u(void 0,!0,!0,void 0);return(0,v.jsxs)(`span`,{className:`inline-flex items-start gap-2`,children:[(0,v.jsx)(r,{id:a,value:e,"aria-describedby":s,className:p,children:(0,v.jsx)(n,{className:m,children:(0,v.jsx)(`span`,{className:f})})}),(0,v.jsxs)(`span`,{className:`flex flex-col gap-1 pt-0.5`,children:[(0,v.jsx)(`label`,{htmlFor:a,className:`text-[13px] leading-none select-none peer-data-disabled:opacity-50`,children:t}),(0,v.jsx)(`span`,{id:o,className:`text-xs text-muted-foreground`,children:i})]})]})}function x({value:e,defaultValue:t=e===void 0?`express`:void 0,onValueChange:n,name:r,orientation:a}){return(0,v.jsx)(i,{"aria-label":`Shipping method`,value:e,defaultValue:t,onValueChange:e=>n?.(e),name:r,"data-orientation":a,"aria-orientation":a,className:a===`horizontal`?`flex flex-wrap gap-x-4 gap-y-2`:`grid gap-2`,children:y.map(e=>(0,v.jsx)(b,{...e},e.value))})}var S=e({RadioGroupComposeShippingOptions:()=>T}),C=t(a(),1),w=[{value:`standard`,label:`Standard`,hint:`3–5 business days`,price:`Free`},{value:`express`,label:`Express`,hint:`1–2 business days`,price:`$9`},{value:`overnight`,label:`Overnight`,hint:`Next morning`,price:`$24`}];function T(){let e=(0,C.useId)();return(0,v.jsxs)(`form`,{className:`grid w-full max-w-sm gap-3`,onSubmit:e=>e.preventDefault(),children:[(0,v.jsx)(`p`,{id:`${e}-title`,className:`text-sm font-medium`,children:`Shipping method`}),(0,v.jsx)(g,{defaultValue:`express`,"aria-labelledby":`${e}-title`,children:w.map(t=>(0,v.jsxs)(`label`,{htmlFor:`${e}-${t.value}`,className:`flex items-center gap-3 rounded-md border border-border bg-card p-3 text-sm`,children:[(0,v.jsx)(h,{id:`${e}-${t.value}`,value:t.value}),(0,v.jsxs)(`span`,{className:`grid flex-1 gap-0.5`,children:[(0,v.jsx)(`span`,{className:`font-medium`,children:t.label}),(0,v.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:t.hint})]}),(0,v.jsx)(l,{variant:`outline`,children:t.price})]},t.value))}),(0,v.jsx)(c,{type:`submit`,children:`Continue to payment`})]})}var E=e({RadioGroupDefault:()=>D});function D(){return(0,v.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,v.jsx)(g,{defaultValue:`comfortable`,children:[`compact`,`comfortable`,`spacious`].map(e=>(0,v.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,v.jsx)(h,{id:`r-${e}`,value:e}),(0,v.jsx)(d,{htmlFor:`r-${e}`,className:`text-sm capitalize`,children:e})]},e))})})}var O=e({RadioGroupDescriptionsHorizontal:()=>k});function k(){return(0,v.jsxs)(`div`,{className:`grid w-full max-w-md gap-6`,children:[(0,v.jsxs)(g,{"aria-label":`Plan`,defaultValue:`pro`,children:[(0,v.jsx)(h,{value:`free`,label:`Free`,description:`Up to 3 projects and 1 GB of storage.`}),(0,v.jsx)(h,{value:`pro`,label:`Pro`,description:`Unlimited projects, 100 GB and priority support.`}),(0,v.jsx)(h,{value:`team`,label:`Team`,description:`Everything in Pro plus shared workspaces.`})]}),(0,v.jsx)(g,{"aria-label":`Size`,defaultValue:`m`,orientation:`horizontal`,children:[`XS`,`S`,`M`,`L`,`XL`].map(e=>(0,v.jsx)(h,{value:e.toLowerCase(),label:e},e))})]})}var A=`import { Radio, RadioGroup } from "@kitora/primitives/react"
import { useChoiceIds } from "@kitora/ui/choice-label"
import { radioControlClassName, radioDotClassName, radioIndicatorClassName } from "@kitora/ui/choice-styles"

const PLANS = [
  { value: "standard", label: "Standard", hint: "3–5 business days" },
  { value: "express", label: "Express", hint: "1–2 business days" },
  { value: "overnight", label: "Overnight", hint: "Next morning" },
]

/** One radio with its label and description: the label points at the radio's id, the description joins its \`aria-describedby\`. */
function Plan({ value, label, hint }: { value: string; label: string; hint: string }) {
  const { controlId, descriptionId, describedBy } = useChoiceIds(undefined, true, true, undefined)
  return (
    <span className="inline-flex items-start gap-2">
      <Radio.Root id={controlId} value={value} aria-describedby={describedBy} className={radioControlClassName}>
        <Radio.Indicator className={radioIndicatorClassName}>
          <span className={radioDotClassName} />
        </Radio.Indicator>
      </Radio.Root>
      <span className="flex flex-col gap-1 pt-0.5">
        <label htmlFor={controlId} className="text-[13px] leading-none select-none peer-data-disabled:opacity-50">
          {label}
        </label>
        <span id={descriptionId} className="text-xs text-muted-foreground">
          {hint}
        </span>
      </span>
    </span>
  )
}

/**
 * A radio group built from the primitives' \`RadioGroup\`, \`Radio.Root\` and \`Radio.Indicator\`: one value, one tab stop, the arrow keys move
 * and choose, and the group submits the chosen value under \`name\`. \`orientation\` lays it out and is announced (\`aria-orientation\`).
 */
export function RadioGroupBuildYourOwn({
  value,
  defaultValue = value === undefined ? "express" : undefined,
  onValueChange,
  name,
  orientation,
}: {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  name?: string
  orientation?: "vertical" | "horizontal"
}) {
  return (
    <RadioGroup
      aria-label="Shipping method"
      value={value}
      defaultValue={defaultValue}
      onValueChange={(next) => onValueChange?.(next as string)}
      name={name}
      data-orientation={orientation}
      aria-orientation={orientation}
      className={orientation === "horizontal" ? "flex flex-wrap gap-x-4 gap-y-2" : "grid gap-2"}
    >
      {PLANS.map((plan) => (
        <Plan key={plan.value} {...plan} />
      ))}
    </RadioGroup>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>o(()=>import(`./build-your-own-BlCrKVrP.js`),[]));var j=`import { useId } from "react"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { RadioGroup, RadioGroupItem } from "@kitora/ui/radio-group"

const plans = [
  { value: "standard", label: "Standard", hint: "3–5 business days", price: "Free" },
  { value: "express", label: "Express", hint: "1–2 business days", price: "$9" },
  { value: "overnight", label: "Overnight", hint: "Next morning", price: "$24" },
]

export function RadioGroupComposeShippingOptions() {
  const id = useId()
  return (
    <form className="grid w-full max-w-sm gap-3" onSubmit={(e) => e.preventDefault()}>
      <p id={\`\${id}-title\`} className="text-sm font-medium">
        Shipping method
      </p>
      <RadioGroup defaultValue="express" aria-labelledby={\`\${id}-title\`}>
        {plans.map((p) => (
          <label key={p.value} htmlFor={\`\${id}-\${p.value}\`} className="flex items-center gap-3 rounded-md border border-border bg-card p-3 text-sm">
            <RadioGroupItem id={\`\${id}-\${p.value}\`} value={p.value} />
            <span className="grid flex-1 gap-0.5">
              <span className="font-medium">{p.label}</span>
              <span className="text-xs text-muted-foreground">{p.hint}</span>
            </span>
            <Badge variant="outline">{p.price}</Badge>
          </label>
        ))}
      </RadioGroup>
      <Button type="submit">Continue to payment</Button>
    </form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>o(()=>import(`./compose-Dzdy9jtD.js`),[]));var M=`import { Label } from "@kitora/ui/label"
import { RadioGroup, RadioGroupItem } from "@kitora/ui/radio-group"

export function RadioGroupDefault() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <RadioGroup defaultValue="comfortable">
        {["compact", "comfortable", "spacious"].map((v) => (
          <div key={v} className="flex items-center gap-2">
            <RadioGroupItem id={\`r-\${v}\`} value={v} />
            <Label htmlFor={\`r-\${v}\`} className="text-sm capitalize">
              {v}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>o(()=>import(`./default-Dwmh9oUW.js`),[]));var N=`import { RadioGroup, RadioGroupItem } from "@kitora/ui/radio-group"

/** Each radio takes a \`label\` and a \`description\`; \`orientation="horizontal"\` lays the group out in a row (the arrow keys work on both axes). */
export function RadioGroupDescriptionsHorizontal() {
  return (
    <div className="grid w-full max-w-md gap-6">
      <RadioGroup aria-label="Plan" defaultValue="pro">
        <RadioGroupItem value="free" label="Free" description="Up to 3 projects and 1 GB of storage." />
        <RadioGroupItem value="pro" label="Pro" description="Unlimited projects, 100 GB and priority support." />
        <RadioGroupItem value="team" label="Team" description="Everything in Pro plus shared workspaces." />
      </RadioGroup>
      <RadioGroup aria-label="Size" defaultValue="m" orientation="horizontal">
        {["XS", "S", "M", "L", "XL"].map((size) => (
          <RadioGroupItem key={size} value={size.toLowerCase()} label={size} />
        ))}
      </RadioGroup>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>o(()=>import(`./descriptions-horizontal-CiA0I_dO.js`),[]));var P={"./demos/radio-group/build-your-own.tsx":_,"./demos/radio-group/compose.tsx":S,"./demos/radio-group/default.tsx":E,"./demos/radio-group/descriptions-horizontal.tsx":O},F={"./demos/radio-group/build-your-own.tsx":A,"./demos/radio-group/compose.tsx":j,"./demos/radio-group/default.tsx":M,"./demos/radio-group/descriptions-horizontal.tsx":N};export{P as modules,F as sources};