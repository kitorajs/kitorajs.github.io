import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{a as n,c as r,d as i,f as a,i as o,l as s,m as c,n as l,o as u,p as d,r as f,s as p,t as m,u as h}from"./slider-DK85j1as.js";import{Bc as g,Cc as _,Ic as v}from"./index-B9ukmIN1.js";import{t as y}from"./label-DoQXlIRk.js";import{a as b,n as x,o as S,r as C,t as w}from"./card-B_Tor3B1.js";var T=e({SliderBuildYourOwn:()=>O}),E=v(),D=[`Minimum price`,`Maximum price`];function O({value:e,defaultValue:t=60,onValueChange:n,name:r}){let o=e??t,s=Array.isArray(o)?o.length:1;return(0,E.jsx)(a,{defaultValue:e===void 0?t:void 0,value:e,onValueChange:e=>n?.(e),name:r,className:`w-full max-w-sm`,children:(0,E.jsxs)(h,{className:`relative flex w-full touch-none items-center py-2 select-none data-disabled:opacity-50`,children:[(0,E.jsx)(c,{className:`relative h-1 w-full grow overflow-hidden rounded-full bg-muted`,children:(0,E.jsx)(i,{className:`h-full bg-primary`})}),Array.from({length:s},(e,t)=>(0,E.jsx)(d,{index:t,"aria-label":s===1?`Volume`:void 0,getAriaLabel:s===1?void 0:e=>D[e]??`Price`,className:`block size-3 rounded-full border border-ring bg-white has-focus-visible:ring-3 has-focus-visible:ring-ring/50`},t))]})})}var k=e({SliderComposeBudgetCard:()=>j}),A=t(g(),1);function j(){let e=(0,A.useId)(),[t,n]=(0,A.useState)(40);return(0,E.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,E.jsxs)(w,{className:`w-full max-w-sm`,children:[(0,E.jsxs)(b,{children:[(0,E.jsx)(S,{children:`Monthly budget`}),(0,E.jsx)(C,{children:`Alerts fire when spend passes this cap.`})]}),(0,E.jsxs)(x,{className:`grid gap-3`,children:[(0,E.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,E.jsx)(y,{id:e,children:`Spend cap`}),(0,E.jsxs)(`span`,{className:`text-sm tabular-nums`,children:[`$`,t*10]})]}),(0,E.jsx)(m,{"aria-labelledby":e,value:[t],max:100,step:5,onValueChange:e=>n(Array.isArray(e)?e[0]:e)})]})]})})}var M=e({SliderDefault:()=>N});function N(){return(0,E.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,E.jsxs)(`div`,{className:`grid w-full max-w-sm gap-3`,children:[(0,E.jsx)(y,{children:`Volume`}),(0,E.jsx)(m,{defaultValue:[60],max:100,step:1,"aria-label":`Volume`})]})})}var P=e({SliderMarksDemo:()=>I}),F=[{value:0,label:`0°C`},{value:20,label:`20°C`},{value:37,label:`37°C`},{value:100,label:`100°C`}];function I(){return(0,E.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,E.jsxs)(`div`,{className:`grid w-full max-w-sm gap-8`,children:[(0,E.jsx)(m,{"aria-label":`Temperature`,defaultValue:37,marks:F,getAriaValueText:(e,t)=>`${t} degrees Celsius`}),(0,E.jsx)(m,{defaultValue:[20,60],step:10,marks:`step`,getAriaLabel:e=>e===0?`Minimum price`:`Maximum price`})]})})}var L=e({SliderParts:()=>R});function R(){return(0,E.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,E.jsxs)(n,{defaultValue:.65,min:0,max:1,step:.05,format:{style:`percent`},className:`grid w-full max-w-sm grid-cols-[1fr_auto] items-center gap-3`,children:[(0,E.jsx)(f,{children:`Opacity`}),(0,E.jsx)(s,{}),(0,E.jsxs)(l,{className:`col-span-2`,children:[(0,E.jsx)(r,{children:(0,E.jsx)(o,{})}),(0,E.jsx)(u,{})]})]})})}var z=e({SliderValueBubble:()=>B});function B(){return(0,E.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,E.jsxs)(`div`,{className:`grid w-full max-w-sm gap-12 pt-8`,children:[(0,E.jsx)(m,{"aria-label":`Volume`,defaultValue:40,showValue:`active`}),(0,E.jsx)(n,{defaultValue:[200,800],min:0,max:1e3,step:50,format:{style:`currency`,currency:`USD`,maximumFractionDigits:0},children:(0,E.jsxs)(l,{children:[(0,E.jsx)(r,{children:(0,E.jsx)(o,{})}),[0,1].map(e=>(0,E.jsx)(u,{index:e,"aria-label":e===0?`Minimum price`:`Maximum price`,children:(0,E.jsx)(p,{show:`always`})},e))]})})]})})}var V=e({SliderVertical:()=>U}),H=[{value:0,label:`Off`},{value:50,label:`Half`},{value:100,label:`Full`}];function U(){return(0,E.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-16`,children:[(0,E.jsx)(`div`,{className:`h-48`,children:(0,E.jsx)(m,{"aria-label":`Bass`,orientation:`vertical`,defaultValue:60,showValue:`active`})}),(0,E.jsx)(`div`,{className:`h-48 pe-10`,children:(0,E.jsx)(m,{"aria-label":`Treble`,orientation:`vertical`,defaultValue:50,marks:H})}),(0,E.jsx)(`div`,{className:`h-48`,children:(0,E.jsx)(m,{orientation:`vertical`,defaultValue:[30,70],getAriaLabel:e=>e===0?`Low cut`:`High cut`})})]})}var W=`import { Slider } from "@kitora/primitives/react"

/** The names of a range's two ends, read by the thumbs' inputs. */
const RANGE_LABELS = ["Minimum price", "Maximum price"] as const

/**
 * A slider built from the primitives' parts only: \`Slider.Root\`, \`Control\`, \`Track\`, \`Indicator\` and one \`Thumb\` per value,
 * styled on their state attributes. A number is one thumb ("Volume"); an array of two is a range ("Minimum / Maximum price").
 */
export function SliderBuildYourOwn({
  value,
  defaultValue = 60,
  onValueChange,
  name,
}: {
  value?: number | readonly number[]
  defaultValue?: number | readonly number[]
  onValueChange?: (value: number | readonly number[]) => void
  name?: string
}) {
  const current = value ?? defaultValue
  const thumbs = Array.isArray(current) ? current.length : 1
  return (
    <Slider.Root
      defaultValue={value === undefined ? defaultValue : undefined}
      value={value}
      onValueChange={(next) => onValueChange?.(next)}
      name={name}
      className="w-full max-w-sm"
    >
      <Slider.Control className="relative flex w-full touch-none items-center py-2 select-none data-disabled:opacity-50">
        <Slider.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-muted">
          <Slider.Indicator className="h-full bg-primary" />
        </Slider.Track>
        {Array.from({ length: thumbs }, (_, index) => (
          <Slider.Thumb
            key={index}
            index={index}
            aria-label={thumbs === 1 ? "Volume" : undefined}
            getAriaLabel={thumbs === 1 ? undefined : (i) => RANGE_LABELS[i] ?? "Price"}
            className="block size-3 rounded-full border border-ring bg-white has-focus-visible:ring-3 has-focus-visible:ring-ring/50"
          />
        ))}
      </Slider.Control>
    </Slider.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>_(()=>import(`./build-your-own-CpGa2oLL.js`),[]));var G=`import { useId, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@kitora/ui/card"
import { Label } from "@kitora/ui/label"
import { Slider } from "@kitora/ui/slider"

export function SliderComposeBudgetCard() {
  const id = useId()
  const [budget, setBudget] = useState(40)
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Monthly budget</CardTitle>
          <CardDescription>Alerts fire when spend passes this cap.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3">
          <div className="flex items-center justify-between">
            <Label id={id}>Spend cap</Label>
            <span className="text-sm tabular-nums">\${budget * 10}</span>
          </div>
          <Slider aria-labelledby={id} value={[budget]} max={100} step={5} onValueChange={(v) => setBudget(Array.isArray(v) ? v[0] : v)} />
        </CardContent>
      </Card>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>_(()=>import(`./compose-DQXKJq-g.js`),[]));var K=`import { Label } from "@kitora/ui/label"
import { Slider } from "@kitora/ui/slider"

export function SliderDefault() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="grid w-full max-w-sm gap-3">
        <Label>Volume</Label>
        <Slider defaultValue={[60]} max={100} step={1} aria-label="Volume" />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>_(()=>import(`./default-Mzy3JyHo.js`),[]));var q=`import { Slider } from "@kitora/ui/slider"

const temperatures = [
  { value: 0, label: "0°C" },
  { value: 20, label: "20°C" },
  { value: 37, label: "37°C" },
  { value: 100, label: "100°C" },
]

/** Labelled marks on a single slider, and a tick at every step on a range: marks inside the filled part are tinted. */
export function SliderMarksDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="grid w-full max-w-sm gap-8">
        <Slider aria-label="Temperature" defaultValue={37} marks={temperatures} getAriaValueText={(_text, value) => \`\${value} degrees Celsius\`} />
        <Slider defaultValue={[20, 60]} step={10} marks="step" getAriaLabel={(index) => (index === 0 ? "Minimum price" : "Maximum price")} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>_(()=>import(`./marks-CzbzsJNQ.js`),[]));var J=`import { SliderControl, SliderLabel, SliderRange, SliderRoot, SliderThumb, SliderTrack, SliderValue } from "@kitora/ui/slider"

/** The preset's parts rearranged: a label and a live value over the track. The label names the thumb; pressing it focuses the thumb. */
export function SliderParts() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <SliderRoot defaultValue={0.65} min={0} max={1} step={0.05} format={{ style: "percent" }} className="grid w-full max-w-sm grid-cols-[1fr_auto] items-center gap-3">
        <SliderLabel>Opacity</SliderLabel>
        <SliderValue />
        <SliderControl className="col-span-2">
          <SliderTrack>
            <SliderRange />
          </SliderTrack>
          <SliderThumb />
        </SliderControl>
      </SliderRoot>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>_(()=>import(`./parts-8oDfbB7i.js`),[]));var Y=`import { Slider, SliderControl, SliderRange, SliderRoot, SliderThumb, SliderThumbValue, SliderTrack } from "@kitora/ui/slider"

/** A value bubble over the thumb: on hover, keyboard focus and drag by default, or always; it shows the root's \`format\`. */
export function SliderValueBubble() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="grid w-full max-w-sm gap-12 pt-8">
        <Slider aria-label="Volume" defaultValue={40} showValue="active" />
        <SliderRoot defaultValue={[200, 800]} min={0} max={1000} step={50} format={{ style: "currency", currency: "USD", maximumFractionDigits: 0 }}>
          <SliderControl>
            <SliderTrack>
              <SliderRange />
            </SliderTrack>
            {[0, 1].map((index) => (
              <SliderThumb key={index} index={index} aria-label={index === 0 ? "Minimum price" : "Maximum price"}>
                <SliderThumbValue show="always" />
              </SliderThumb>
            ))}
          </SliderControl>
        </SliderRoot>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>_(()=>import(`./value-bubble-BwJ5JaKA.js`),[]));var X=`import { Slider } from "@kitora/ui/slider"

const levels = [
  { value: 0, label: "Off" },
  { value: 50, label: "Half" },
  { value: 100, label: "Full" },
]

/** \`orientation="vertical"\`: the value grows upward, ArrowUp increases; marks and the value bubble sit beside the track. */
export function SliderVertical() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-16">
      <div className="h-48">
        <Slider aria-label="Bass" orientation="vertical" defaultValue={60} showValue="active" />
      </div>
      <div className="h-48 pe-10">
        <Slider aria-label="Treble" orientation="vertical" defaultValue={50} marks={levels} />
      </div>
      <div className="h-48">
        <Slider orientation="vertical" defaultValue={[30, 70]} getAriaLabel={(index) => (index === 0 ? "Low cut" : "High cut")} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>_(()=>import(`./vertical-D4Gfk9lt.js`),[]));var Z={"./demos/slider/build-your-own.tsx":T,"./demos/slider/compose.tsx":k,"./demos/slider/default.tsx":M,"./demos/slider/marks.tsx":P,"./demos/slider/parts.tsx":L,"./demos/slider/value-bubble.tsx":z,"./demos/slider/vertical.tsx":V},Q={"./demos/slider/build-your-own.tsx":W,"./demos/slider/compose.tsx":G,"./demos/slider/default.tsx":K,"./demos/slider/marks.tsx":q,"./demos/slider/parts.tsx":J,"./demos/slider/value-bubble.tsx":Y,"./demos/slider/vertical.tsx":X};export{Z as modules,Q as sources};