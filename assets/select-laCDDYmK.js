import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{i as n,r,s as ee,t as te}from"./field-DApIfONr.js";import{t as i}from"./form-BwzByG5g.js";import{t as a}from"./combobox-Dju6inbb.js";import{a as o,c as s,i as c,l,n as u,o as d,r as ne,s as re,t as f}from"./select-CQAiESKx.js";import{Bc as ie,Cc as p,Ic as ae,ti as m}from"./index-q72zUtm9.js";import{t as h}from"./badge-Be8rVEaF.js";import{t as g}from"./label-DjxTNoON.js";import{a as _,n as oe,o as se,t as ce}from"./card-WiouR7Ep.js";import{t as le}from"./select-CBN5RXbD.js";import{t as ue}from"./multi-select-Da3Ni2jO.js";import{r as de,t as fe}from"./build-your-own-BfwasurD.js";var pe=e({SelectAlignItemWithTrigger:()=>me}),v=ae(),y=[{value:`xs`,label:`Extra small`},{value:`s`,label:`Small`},{value:`m`,label:`Medium`},{value:`l`,label:`Large`},{value:`xl`,label:`Extra large`}];function b({label:e,alignItemWithTrigger:t}){return(0,v.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,v.jsx)(`span`,{className:`text-sm text-muted-foreground`,children:e}),(0,v.jsxs)(f,{items:y,defaultValue:`m`,children:[(0,v.jsx)(s,{className:`w-48`,"aria-label":e,children:(0,v.jsx)(l,{})}),(0,v.jsx)(u,{alignItemWithTrigger:t,children:y.map(e=>(0,v.jsx)(c,{value:e.value,children:e.label},e.value))})]})]})}function me(){return(0,v.jsxs)(`div`,{className:`flex flex-wrap items-end justify-center gap-6`,children:[(0,v.jsx)(b,{label:`Over the trigger (default)`,alignItemWithTrigger:!0}),(0,v.jsx)(b,{label:`Under the trigger`,alignItemWithTrigger:!1})]})}var he=e({SelectBottomSheet:()=>S}),x=[{value:`de`,label:`Germany`},{value:`es`,label:`Spain`},{value:`fr`,label:`France`},{value:`in`,label:`India`},{value:`it`,label:`Italy`},{value:`jp`,label:`Japan`},{value:`nl`,label:`Netherlands`},{value:`us`,label:`United States`}];function S(){return(0,v.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,v.jsx)(`span`,{className:`text-sm text-muted-foreground`,children:`Narrow the window below 640px to get a sheet`}),(0,v.jsxs)(f,{items:x,defaultValue:`in`,children:[(0,v.jsx)(s,{className:`w-56`,"aria-label":`Country`,children:(0,v.jsx)(l,{})}),(0,v.jsx)(u,{sheet:`mobile`,alignItemWithTrigger:!1,children:x.map(e=>(0,v.jsx)(c,{value:e.value,children:e.label},e.value))})]})]})}var C=e({SelectComposeRegionPicker:()=>E}),w=t(ie(),1),T=[{value:`eu-west`,label:`Europe (Ireland)`,status:`Available`},{value:`us-east`,label:`US East (Virginia)`,status:`Available`},{value:`ap-south`,label:`Asia Pacific (Mumbai)`,status:`Beta`}];function E(){let[e,t]=(0,w.useState)(`eu-west`),n=T.find(t=>t.value===e);return(0,v.jsxs)(ce,{className:`w-full max-w-sm`,children:[(0,v.jsx)(_,{children:(0,v.jsx)(se,{children:`Deploy region`})}),(0,v.jsxs)(oe,{className:`grid gap-3`,children:[(0,v.jsx)(g,{id:`region-label`,children:`Region`}),(0,v.jsxs)(f,{items:T,value:e,onValueChange:e=>e&&t(e),children:[(0,v.jsx)(s,{className:`w-full`,"aria-labelledby":`region-label`,children:(0,v.jsx)(l,{})}),(0,v.jsx)(u,{children:T.map(e=>(0,v.jsx)(c,{value:e.value,children:e.label},e.value))})]}),n?(0,v.jsx)(h,{variant:`secondary`,children:n.status}):null]})]})}var D=e({SelectDefault:()=>k}),O=[{value:`tanstack`,label:`TanStack Start`},{value:`next`,label:`Next.js`},{value:`remix`,label:`Remix`},{value:`astro`,label:`Astro`}];function k(){return(0,v.jsxs)(f,{items:O,defaultValue:`tanstack`,children:[(0,v.jsx)(s,{className:`w-56`,"aria-label":`Framework`,children:(0,v.jsx)(l,{})}),(0,v.jsx)(u,{children:O.map(e=>(0,v.jsx)(c,{value:e.value,children:e.label},e.value))})]})}var A=e({SelectGroups:()=>M}),j=[{label:`Fruits`,items:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]},{label:`Vegetables`,items:[{value:`carrot`,label:`Carrot`},{value:`kale`,label:`Kale`},{value:`leek`,label:`Leek`}]}];function M(){return(0,v.jsxs)(f,{items:j.flatMap(e=>e.items),children:[(0,v.jsx)(s,{className:`w-56`,"aria-label":`Produce`,children:(0,v.jsx)(l,{placeholder:`Choose produce`})}),(0,v.jsx)(u,{children:j.map((e,t)=>(0,v.jsxs)(`div`,{children:[t>0?(0,v.jsx)(re,{}):null,(0,v.jsxs)(ne,{children:[(0,v.jsx)(o,{children:e.label}),e.items.map(e=>(0,v.jsx)(c,{value:e.value,children:e.label},e.value))]})]},e.label))})]})}var N=e({SelectInAField:()=>F}),P=[{value:`free`,label:`Free`},{value:`pro`,label:`Pro`},{value:`team`,label:`Team`}];function F(){let[e,t]=(0,w.useState)(null);return(0,v.jsxs)(i,{className:`w-full max-w-xs gap-3`,onFormSubmit:e=>t(JSON.stringify(e)),children:[(0,v.jsxs)(te,{name:`plan`,children:[(0,v.jsx)(ee,{nativeLabel:!1,render:(0,v.jsx)(`div`,{}),children:`Plan`}),(0,v.jsxs)(f,{items:P,required:!0,children:[(0,v.jsx)(s,{className:`w-full`,children:(0,v.jsx)(l,{placeholder:`Choose a plan`})}),(0,v.jsx)(u,{children:P.map(e=>(0,v.jsx)(c,{value:e.value,children:e.label},e.value))})]}),(0,v.jsx)(r,{children:`You can change it later.`}),(0,v.jsx)(n,{match:`valueMissing`,children:`Choose a plan.`})]}),(0,v.jsx)(m,{type:`submit`,children:`Continue`}),e?(0,v.jsxs)(`p`,{className:`text-xs text-muted-foreground`,role:`status`,children:[`Submitted `,e]}):null]})}var I=e({SelectLongList:()=>R}),L=Array.from({length:60},(e,t)=>{let n=t-12,r=`UTC${n<0?`-`:`+`}${String(Math.abs(n)).padStart(2,`0`)}:00`;return{value:`utc${n}`,label:r}});function R(){return(0,v.jsxs)(f,{items:L,defaultValue:`utc0`,children:[(0,v.jsx)(s,{className:`w-56`,"aria-label":`Time zone`,children:(0,v.jsx)(l,{})}),(0,v.jsx)(u,{alignItemWithTrigger:!1,className:`max-h-64`,children:L.map(e=>(0,v.jsx)(c,{value:e.value,children:e.label},e.value))})]})}var ge=e({SelectMultiple:()=>_e}),z=[{value:`cheese`,label:`Cheese`},{value:`mushrooms`,label:`Mushrooms`},{value:`olives`,label:`Olives`},{value:`basil`,label:`Basil`},{value:`chili`,label:`Chili`}];function _e(){let[e,t]=(0,w.useState)([`cheese`,`basil`]);return(0,v.jsxs)(`div`,{className:`grid gap-2`,children:[(0,v.jsxs)(f,{items:z,multiple:!0,value:e,onValueChange:t,children:[(0,v.jsx)(s,{className:`w-64`,"aria-label":`Toppings`,children:(0,v.jsx)(l,{placeholder:`Pick toppings`})}),(0,v.jsx)(u,{children:z.map(e=>(0,v.jsx)(c,{value:e.value,children:e.label},e.value))})]}),(0,v.jsxs)(`p`,{className:`text-sm text-muted-foreground`,children:[e.length,` chosen`]})]})}var ve=e({SelectSearchPartAndLoading:()=>ye}),B=[`Argentina`,`Australia`,`Brazil`,`Canada`,`Denmark`,`Egypt`,`France`,`Germany`,`India`,`Japan`,`Kenya`,`Mexico`,`Norway`,`Portugal`,`Spain`].map(e=>({value:e.toLowerCase(),label:e}));function ye(){let[e,t]=(0,w.useState)([]);return(0,w.useEffect)(()=>{let e=setTimeout(()=>t(B),1500);return()=>clearTimeout(e)},[]),(0,v.jsxs)(`div`,{className:`flex flex-wrap items-start justify-center gap-4`,children:[(0,v.jsxs)(f,{items:e,searchable:!0,children:[(0,v.jsx)(s,{className:`w-56`,size:`lg`,"aria-label":`Country`,loading:e.length===0,children:(0,v.jsx)(l,{placeholder:e.length===0?`Loading countries…`:`Pick a country`})}),(0,v.jsxs)(u,{emptyText:`No country matches`,listProps:{className:`max-h-64`},children:[(0,v.jsx)(d,{placeholder:`Filter countries`,className:`bg-muted/40`}),e.map(e=>(0,v.jsx)(c,{value:e.value,children:e.label},e.value))]})]}),(0,v.jsxs)(f,{items:B,defaultValue:`japan`,readOnly:!0,children:[(0,v.jsx)(s,{className:`w-56`,"aria-label":`Home country (read-only)`,children:(0,v.jsx)(l,{})}),(0,v.jsx)(u,{scrollArrows:!1,children:B.map(e=>(0,v.jsx)(c,{value:e.value,children:e.label},e.value))})]})]})}var be=e({SelectSearchable:()=>xe}),V=Intl.supportedValuesOf(`timeZone`).map(e=>({value:e,label:e.replace(/_/g,` `)}));function xe(){return(0,v.jsxs)(f,{items:V,defaultValue:`Europe/London`,searchable:!0,children:[(0,v.jsx)(s,{className:`w-64`,"aria-label":`Time zone`,children:(0,v.jsx)(l,{})}),(0,v.jsx)(u,{searchPlaceholder:`Search time zones`,emptyText:`No time zone matches`,className:`max-h-80`,children:V.map(e=>(0,v.jsx)(c,{value:e.value,children:e.label},e.value))})]})}var Se=e({SelectVirtualized:()=>Ce}),H=Array.from({length:1e4},(e,t)=>({id:`acct-${t+1}`,label:`Account ${String(t+1).padStart(5,`0`)}`}));function Ce(){let[e,t]=(0,w.useState)(`acct-5000`),[n,r]=(0,w.useState)([]);return(0,v.jsxs)(`div`,{className:`grid w-full max-w-sm gap-4`,children:[(0,v.jsxs)(`div`,{className:`grid gap-1.5 text-sm`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`Select (opens on the chosen row)`}),(0,v.jsx)(le,{items:H,value:e,onChange:t,"aria-label":`Account`,virtualized:!0})]}),(0,v.jsxs)(`div`,{className:`grid gap-1.5 text-sm`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`Combobox (type to filter)`}),(0,v.jsx)(a,{items:H,"aria-label":`Find an account`,virtualized:!0})]}),(0,v.jsxs)(`div`,{className:`grid gap-1.5 text-sm`,children:[(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`MultiSelect`}),(0,v.jsx)(ue,{items:H,value:n,onChange:r,"aria-label":`Watched accounts`,virtualized:!0})]})]})}var U=`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@kitora/ui/select"

const SIZES = [
  { value: "xs", label: "Extra small" },
  { value: "s", label: "Small" },
  { value: "m", label: "Medium" },
  { value: "l", label: "Large" },
  { value: "xl", label: "Extra large" },
]

function SizeSelect({ label, alignItemWithTrigger }: { label: string; alignItemWithTrigger: boolean }) {
  return (
    <div className="grid gap-1.5">
      <span className="text-sm text-muted-foreground">{label}</span>
      <Select items={SIZES} defaultValue="m">
        <SelectTrigger className="w-48" aria-label={label}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent alignItemWithTrigger={alignItemWithTrigger}>
          {SIZES.map((size) => (
            <SelectItem key={size.value} value={size.value}>
              {size.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export function SelectAlignItemWithTrigger() {
  return (
    <div className="flex flex-wrap items-end justify-center gap-6">
      <SizeSelect label="Over the trigger (default)" alignItemWithTrigger />
      <SizeSelect label="Under the trigger" alignItemWithTrigger={false} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>p(()=>import(`./align-item-with-trigger-DQvM-ZUP.js`),[]));var W=`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@kitora/ui/select"

const COUNTRIES = [
  { value: "de", label: "Germany" },
  { value: "es", label: "Spain" },
  { value: "fr", label: "France" },
  { value: "in", label: "India" },
  { value: "it", label: "Italy" },
  { value: "jp", label: "Japan" },
  { value: "nl", label: "Netherlands" },
  { value: "us", label: "United States" },
]

export function SelectBottomSheet() {
  return (
    <div className="grid gap-1.5">
      <span className="text-sm text-muted-foreground">Narrow the window below 640px to get a sheet</span>
      <Select items={COUNTRIES} defaultValue="in">
        <SelectTrigger className="w-56" aria-label="Country">
          <SelectValue />
        </SelectTrigger>
        <SelectContent sheet="mobile" alignItemWithTrigger={false}>
          {COUNTRIES.map((country) => (
            <SelectItem key={country.value} value={country.value}>
              {country.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>p(()=>import(`./bottom-sheet-vcu3Eo72.js`),[]));var G=`import { useState } from "react"
import { Badge } from "@kitora/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@kitora/ui/card"
import { Label } from "@kitora/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@kitora/ui/select"

const REGIONS = [
  { value: "eu-west", label: "Europe (Ireland)", status: "Available" },
  { value: "us-east", label: "US East (Virginia)", status: "Available" },
  { value: "ap-south", label: "Asia Pacific (Mumbai)", status: "Beta" },
]

export function SelectComposeRegionPicker() {
  const [region, setRegion] = useState("eu-west")
  const current = REGIONS.find((item) => item.value === region)
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Deploy region</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        <Label id="region-label">Region</Label>
        <Select items={REGIONS} value={region} onValueChange={(next) => next && setRegion(next)}>
          <SelectTrigger className="w-full" aria-labelledby="region-label">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {REGIONS.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {current ? <Badge variant="secondary">{current.status}</Badge> : null}
      </CardContent>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>p(()=>import(`./compose-BrCGwi592.js`),[]));var K=`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@kitora/ui/select"

const FRAMEWORKS = [
  { value: "tanstack", label: "TanStack Start" },
  { value: "next", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
]

export function SelectDefault() {
  return (
    <Select items={FRAMEWORKS} defaultValue="tanstack">
      <SelectTrigger className="w-56" aria-label="Framework">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {FRAMEWORKS.map((framework) => (
          <SelectItem key={framework.value} value={framework.value}>
            {framework.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>p(()=>import(`./default-CDmA_XSF2.js`),[]));var q=`import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "@kitora/ui/select"

const GROUPS = [
  {
    label: "Fruits",
    items: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "cherry", label: "Cherry" },
    ],
  },
  {
    label: "Vegetables",
    items: [
      { value: "carrot", label: "Carrot" },
      { value: "kale", label: "Kale" },
      { value: "leek", label: "Leek" },
    ],
  },
]

export function SelectGroups() {
  return (
    <Select items={GROUPS.flatMap((group) => group.items)}>
      <SelectTrigger className="w-56" aria-label="Produce">
        <SelectValue placeholder="Choose produce" />
      </SelectTrigger>
      <SelectContent>
        {GROUPS.map((group, index) => (
          <div key={group.label}>
            {index > 0 ? <SelectSeparator /> : null}
            <SelectGroup>
              <SelectLabel>{group.label}</SelectLabel>
              {group.items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </div>
        ))}
      </SelectContent>
    </Select>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>p(()=>import(`./groups-DpXioRyj.js`),[]));var J=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Field, FieldDescription, FieldError, FieldLabel } from "@kitora/ui/field"
import { Form } from "@kitora/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@kitora/ui/select"

const PLANS = [
  { value: "free", label: "Free" },
  { value: "pro", label: "Pro" },
  { value: "team", label: "Team" },
]

export function SelectInAField() {
  const [submitted, setSubmitted] = useState<string | null>(null)
  return (
    <Form className="w-full max-w-xs gap-3" onFormSubmit={(values) => setSubmitted(JSON.stringify(values))}>
      <Field name="plan">
        {/* A select's label is not a native <label>: that would click the button and open the list. */}
        <FieldLabel nativeLabel={false} render={<div />}>
          Plan
        </FieldLabel>
        <Select items={PLANS} required>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose a plan" />
          </SelectTrigger>
          <SelectContent>
            {PLANS.map((plan) => (
              <SelectItem key={plan.value} value={plan.value}>
                {plan.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FieldDescription>You can change it later.</FieldDescription>
        <FieldError match="valueMissing">Choose a plan.</FieldError>
      </Field>
      <Button type="submit">Continue</Button>
      {submitted ? (
        <p className="text-xs text-muted-foreground" role="status">
          Submitted {submitted}
        </p>
      ) : null}
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>p(()=>import(`./in-a-field-B_FIvjpa.js`),[]));var Y=`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@kitora/ui/select"

const ZONES = Array.from({ length: 60 }, (_, index) => {
  const offset = index - 12
  const sign = offset < 0 ? "-" : "+"
  const label = \`UTC\${sign}\${String(Math.abs(offset)).padStart(2, "0")}:00\`
  return { value: \`utc\${offset}\`, label }
})

export function SelectLongList() {
  return (
    <Select items={ZONES} defaultValue="utc0">
      <SelectTrigger className="w-56" aria-label="Time zone">
        <SelectValue />
      </SelectTrigger>
      {/* Hold the pointer on the arrows at the ends of the list to scroll it. */}
      <SelectContent alignItemWithTrigger={false} className="max-h-64">
        {ZONES.map((zone) => (
          <SelectItem key={zone.value} value={zone.value}>
            {zone.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>p(()=>import(`./long-list-DQMHmiUy.js`),[]));var X=`import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@kitora/ui/select"

const TOPPINGS = [
  { value: "cheese", label: "Cheese" },
  { value: "mushrooms", label: "Mushrooms" },
  { value: "olives", label: "Olives" },
  { value: "basil", label: "Basil" },
  { value: "chili", label: "Chili" },
]

export function SelectMultiple() {
  const [toppings, setToppings] = useState<string[]>(["cheese", "basil"])
  return (
    <div className="grid gap-2">
      <Select items={TOPPINGS} multiple value={toppings} onValueChange={setToppings}>
        <SelectTrigger className="w-64" aria-label="Toppings">
          <SelectValue placeholder="Pick toppings" />
        </SelectTrigger>
        <SelectContent>
          {TOPPINGS.map((topping) => (
            <SelectItem key={topping.value} value={topping.value}>
              {topping.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className="text-sm text-muted-foreground">{toppings.length} chosen</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>p(()=>import(`./multiple-9vMnCIPo.js`),[]));var Z=`import { useEffect, useState } from "react"
import { Select, SelectContent, SelectItem, SelectSearch, SelectTrigger, SelectValue } from "@kitora/ui/select"

const COUNTRIES = ["Argentina", "Australia", "Brazil", "Canada", "Denmark", "Egypt", "France", "Germany", "India", "Japan", "Kenya", "Mexico", "Norway", "Portugal", "Spain"].map((name) => ({ value: name.toLowerCase(), label: name }))

export function SelectSearchPartAndLoading() {
  // The options "arrive" after a moment: until then the trigger shows a spinner and says it is busy.
  const [items, setItems] = useState<typeof COUNTRIES>([])
  useEffect(() => {
    const timer = setTimeout(() => setItems(COUNTRIES), 1500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="flex flex-wrap items-start justify-center gap-4">
      <Select items={items} searchable>
        <SelectTrigger className="w-56" size="lg" aria-label="Country" loading={items.length === 0}>
          <SelectValue placeholder={items.length === 0 ? "Loading countries…" : "Pick a country"} />
        </SelectTrigger>
        {/* The search box as a part, with its own placeholder and class; \`listProps\` gives the list a taller height. */}
        <SelectContent emptyText="No country matches" listProps={{ className: "max-h-64" }}>
          <SelectSearch placeholder="Filter countries" className="bg-muted/40" />
          {items.map((country) => (
            <SelectItem key={country.value} value={country.value}>
              {country.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select items={COUNTRIES} defaultValue="japan" readOnly>
        <SelectTrigger className="w-56" aria-label="Home country (read-only)">
          <SelectValue />
        </SelectTrigger>
        <SelectContent scrollArrows={false}>
          {COUNTRIES.map((country) => (
            <SelectItem key={country.value} value={country.value}>
              {country.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>p(()=>import(`./search-part-and-loading-rS0f9wts.js`),[]));var Q=`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@kitora/ui/select"

// Every IANA time zone this browser knows, labelled "Europe/London" style; a long list wants a search box.
const ZONES = Intl.supportedValuesOf("timeZone").map((zone) => ({ value: zone, label: zone.replace(/_/g, " ") }))

export function SelectSearchable() {
  return (
    <Select items={ZONES} defaultValue="Europe/London" searchable>
      <SelectTrigger className="w-64" aria-label="Time zone">
        <SelectValue />
      </SelectTrigger>
      <SelectContent searchPlaceholder="Search time zones" emptyText="No time zone matches" className="max-h-80">
        {ZONES.map((zone) => (
          <SelectItem key={zone.value} value={zone.value}>
            {zone.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>p(()=>import(`./searchable-Dpl6Z54E.js`),[]));var $=`import { useState } from "react"
import { Combobox } from "@kitora/collections/ui"
import { MultiSelect } from "@kitora/collections/ui"
import { Select } from "@kitora/collections/ui"
import type { Entry } from "@kitora/collections/ui"

/** Ten thousand accounts: only the rows in view are mounted, yet End, typeahead and the filter reach every one. */
const ACCOUNTS: Entry[] = Array.from({ length: 10_000 }, (_, i) => ({ id: \`acct-\${i + 1}\`, label: \`Account \${String(i + 1).padStart(5, "0")}\` }))

export function SelectVirtualized() {
  const [account, setAccount] = useState<string | null>("acct-5000")
  const [watched, setWatched] = useState<string[]>([])
  return (
    <div className="grid w-full max-w-sm gap-4">
      <div className="grid gap-1.5 text-sm">
        <span className="text-muted-foreground">Select (opens on the chosen row)</span>
        <Select items={ACCOUNTS} value={account} onChange={setAccount} aria-label="Account" virtualized />
      </div>
      <div className="grid gap-1.5 text-sm">
        <span className="text-muted-foreground">Combobox (type to filter)</span>
        <Combobox items={ACCOUNTS} aria-label="Find an account" virtualized />
      </div>
      <div className="grid gap-1.5 text-sm">
        <span className="text-muted-foreground">MultiSelect</span>
        <MultiSelect items={ACCOUNTS} value={watched} onChange={setWatched} aria-label="Watched accounts" virtualized />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>p(()=>import(`./virtualized-BhoMDasv.js`),[]));var we={"./demos/select/align-item-with-trigger.tsx":pe,"./demos/select/bottom-sheet.tsx":he,"./demos/select/build-your-own.tsx":de,"./demos/select/compose.tsx":C,"./demos/select/default.tsx":D,"./demos/select/groups.tsx":A,"./demos/select/in-a-field.tsx":N,"./demos/select/long-list.tsx":I,"./demos/select/multiple.tsx":ge,"./demos/select/search-part-and-loading.tsx":ve,"./demos/select/searchable.tsx":be,"./demos/select/virtualized.tsx":Se},Te={"./demos/select/align-item-with-trigger.tsx":U,"./demos/select/bottom-sheet.tsx":W,"./demos/select/build-your-own.tsx":fe,"./demos/select/compose.tsx":G,"./demos/select/default.tsx":K,"./demos/select/groups.tsx":q,"./demos/select/in-a-field.tsx":J,"./demos/select/long-list.tsx":Y,"./demos/select/multiple.tsx":X,"./demos/select/search-part-and-loading.tsx":Z,"./demos/select/searchable.tsx":Q,"./demos/select/virtualized.tsx":$};export{we as modules,Te as sources};