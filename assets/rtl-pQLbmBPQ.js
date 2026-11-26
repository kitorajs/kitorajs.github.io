import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./slider-DhA25Xya.js";import{a as n,i as r,n as i,t as a}from"./tabs-oUW2hCtt.js";import{t as o}from"./switch-Clz4Lth_.js";import{Bc as s,Cc as c,G as l,Ic as u}from"./index-q72zUtm9.js";import{n as d,t as f}from"./radio-group-CHn8JUVh.js";import{n as p}from"./lib-CDU_56K6.js";var m=e(s(),1),h=u(),g=[`small`,`medium`,`large`];function _(){let[e,s]=(0,m.useState)(!0);return(0,h.jsxs)(`div`,{className:`grid w-full max-w-md gap-4`,children:[(0,h.jsx)(o,{checked:e,onCheckedChange:s,label:`Right to left`}),(0,h.jsxs)(l,{dir:e?`rtl`:`ltr`,className:`grid gap-4`,children:[(0,h.jsxs)(a,{defaultValue:`general`,children:[(0,h.jsxs)(r,{children:[(0,h.jsx)(n,{value:`general`,children:`General`}),(0,h.jsx)(n,{value:`members`,children:`Members`}),(0,h.jsx)(n,{value:`billing`,children:`Billing`})]}),(0,h.jsx)(i,{value:`general`,className:`mt-3 border-s-2 ps-3 text-start text-sm text-muted-foreground`,children:`Name, icon and default language.`}),(0,h.jsx)(i,{value:`members`,className:`mt-3 border-s-2 ps-3 text-start text-sm text-muted-foreground`,children:`Who can see and edit the project.`}),(0,h.jsx)(i,{value:`billing`,className:`mt-3 border-s-2 ps-3 text-start text-sm text-muted-foreground`,children:`Plan and invoices.`})]}),(0,h.jsx)(f,{defaultValue:`small`,orientation:`horizontal`,"aria-label":`Size`,children:g.map(e=>(0,h.jsx)(d,{value:e,label:e,labelClassName:`capitalize`},e))}),(0,h.jsx)(t,{defaultValue:[40],max:100,step:10,"aria-label":`Volume`})]})]})}var v=`import { useState } from "react"
import { DirectionProvider } from "@kitora/theme/react"
import { RadioGroup, RadioGroupItem } from "@kitora/ui/radio-group"
import { Slider } from "@kitora/ui/slider"
import { Switch } from "@kitora/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@kitora/ui/tabs"

const SIZES = ["small", "medium", "large"] as const

// DirectionProvider writes \`dir\` on a wrapper and tells every part inside which way text reads, so the arrow keys
// follow reading order: in right to left, ArrowLeft moves to the next tab or radio and raises the slider. The layout
// classes are logical (\`ps-3\`, \`border-s-2\`, \`text-start\`), so they mirror with the text and need no \`rtl:\` variants.
export function RtlControls() {
  const [rtl, setRtl] = useState(true)
  return (
    <div className="grid w-full max-w-md gap-4">
      <Switch checked={rtl} onCheckedChange={setRtl} label="Right to left" />
      <DirectionProvider dir={rtl ? "rtl" : "ltr"} className="grid gap-4">
        <Tabs defaultValue="general">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="mt-3 border-s-2 ps-3 text-start text-sm text-muted-foreground">
            Name, icon and default language.
          </TabsContent>
          <TabsContent value="members" className="mt-3 border-s-2 ps-3 text-start text-sm text-muted-foreground">
            Who can see and edit the project.
          </TabsContent>
          <TabsContent value="billing" className="mt-3 border-s-2 ps-3 text-start text-sm text-muted-foreground">
            Plan and invoices.
          </TabsContent>
        </Tabs>
        <RadioGroup defaultValue="small" orientation="horizontal" aria-label="Size">
          {SIZES.map((size) => (
            <RadioGroupItem key={size} value={size} label={size} labelClassName="capitalize" />
          ))}
        </RadioGroup>
        <Slider defaultValue={[40]} max={100} step={10} aria-label="Volume" />
      </DirectionProvider>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>c(()=>import(`./rtl-controls-UET8jLgG.js`),[]));function y(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...p(),...e.components},{Api:n,Relies:r,Snippet:i}=t;return n||x(`Api`,!0),r||x(`Relies`,!0),i||x(`Snippet`,!0),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t.p,{children:`In right to left, Kitora's arrow keys follow reading order, popups placed by logical side or by start and end flip, and styles written with logical properties mirror with the text. All of it starts from one provider.`}),`
`,(0,h.jsx)(t.h2,{children:`Set the direction`}),`
`,(0,h.jsxs)(t.p,{children:[`Wrap the app, or one part of it, in `,(0,h.jsx)(t.code,{children:`DirectionProvider`}),` from `,(0,h.jsx)(n,{package:`@kitora/theme`}),` (its react entry). It takes `,(0,h.jsx)(t.code,{children:`dir`}),` (controlled) or `,(0,h.jsx)(t.code,{children:`defaultDir`}),`, and `,(0,h.jsx)(t.code,{children:`target`}),` says where `,(0,h.jsx)(t.code,{children:`dir`}),` is written:`]}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`wrapper`}),` (the default) renders a `,(0,h.jsx)(t.code,{children:`div`}),` with `,(0,h.jsx)(t.code,{children:`dir`}),` around its children, so only that subtree flips.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`document`}),` sets `,(0,h.jsx)(t.code,{children:`dir`}),` on `,(0,h.jsx)(t.code,{children:`<html>`}),` while it is mounted and puts the old value back after.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`none`}),` writes nothing: the host renders `,(0,h.jsx)(t.code,{children:`dir`}),` itself, for example on `,(0,h.jsx)(t.code,{children:`<html>`}),` from the server.`]}),`
`]}),`
`,(0,h.jsxs)(t.p,{children:[`Every target also tells the primitives' parts the direction, so their keys follow. To pick a direction from a locale, `,(0,h.jsx)(t.code,{children:`directionForLocale`}),` from the theme's core entry returns `,(0,h.jsx)(t.code,{children:`rtl`}),` for `,(0,h.jsx)(t.code,{children:`ar-EG`}),` or `,(0,h.jsx)(t.code,{children:`he`}),` and `,(0,h.jsx)(t.code,{children:`ltr`}),` for `,(0,h.jsx)(t.code,{children:`en-US`}),`.`]}),`
`,(0,h.jsxs)(t.p,{children:[`An app that uses only `,(0,h.jsx)(n,{package:`@kitora/primitives`}),` can use its own `,(0,h.jsx)(t.code,{children:`DirectionProvider`}),` (from its react entry) with `,(0,h.jsx)(t.code,{children:`direction="rtl"`}),`: it gives the parts the direction but writes no `,(0,h.jsx)(t.code,{children:`dir`}),` attribute, so set `,(0,h.jsx)(t.code,{children:`dir`}),` on an element yourself.`]}),`
`,(0,h.jsx)(t.h2,{children:`Keys that mirror`}),`
`,(0,h.jsxs)(t.p,{children:[`In right to left, ArrowLeft moves to the next item and ArrowRight to the previous one, in `,(0,h.jsx)(t.a,{href:`/components/tabs#api-reference-keyboard`,children:`Tabs`}),`, a `,(0,h.jsx)(t.a,{href:`/components/radio-group#api-reference-keyboard`,children:`Radio group`}),` (which checks the radio it lands on) and a `,(0,h.jsx)(t.a,{href:`/components/toggle-group#api-reference-keyboard`,children:`Toggle group`}),`. On a `,(0,h.jsx)(t.a,{href:`/components/slider`,children:`Slider`}),`, ArrowLeft raises the value and ArrowRight lowers it. Flip the switch below and try the same keys both ways.`]}),`
`,(0,h.jsx)(i,{title:`Tabs, radios and a slider that follow the direction`,source:v,children:(0,h.jsx)(_,{})}),`
`,(0,h.jsx)(t.h2,{children:`Sides that mirror`}),`
`,(0,h.jsxs)(t.p,{children:[`A popup's positioner takes `,(0,h.jsx)(t.code,{children:`side="inline-start"`}),` or `,(0,h.jsx)(t.code,{children:`side="inline-end"`}),`, which is the left or right edge depending on the direction, and `,(0,h.jsx)(t.code,{children:`align="start"`}),` lines the popup up with the anchor's left edge in left to right and its right edge in right to left. Use these instead of `,(0,h.jsx)(t.code,{children:`left`}),` and `,(0,h.jsx)(t.code,{children:`right`}),` when the popup should follow the text.`]}),`
`,(0,h.jsx)(t.h2,{children:`Logical properties`}),`
`,(0,h.jsxs)(t.p,{children:[`Write your own styles with logical classes: `,(0,h.jsx)(t.code,{children:`ms-`}),` and `,(0,h.jsx)(t.code,{children:`me-`}),` for margins, `,(0,h.jsx)(t.code,{children:`ps-`}),` and `,(0,h.jsx)(t.code,{children:`pe-`}),` for padding, `,(0,h.jsx)(t.code,{children:`start-`}),` and `,(0,h.jsx)(t.code,{children:`end-`}),` for position, `,(0,h.jsx)(t.code,{children:`border-s`}),` and `,(0,h.jsx)(t.code,{children:`border-e`}),`, `,(0,h.jsx)(t.code,{children:`text-start`}),` and `,(0,h.jsx)(t.code,{children:`text-end`}),`. They resolve against `,(0,h.jsx)(t.code,{children:`dir`}),`, so one class list serves both directions with no `,(0,h.jsx)(t.code,{children:`rtl:`}),` variants. The example's panels use `,(0,h.jsx)(t.code,{children:`border-s-2`}),`, `,(0,h.jsx)(t.code,{children:`ps-3`}),` and `,(0,h.jsx)(t.code,{children:`text-start`}),`, and ui's own styles do too: the label's required marker, for one, sits on a logical margin that a test pins.`]}),`
`,(0,h.jsx)(t.h2,{children:`Numbers and units`}),`
`,(0,h.jsxs)(t.p,{children:[`Digits, a dash and a space are weak in the Unicode bidi algorithm: they take their direction from the text around them. English text that starts with a number, such as "1–10 of 10" or "479 KB", therefore reorders in a right-to-left page ("of 10 10–1", "KB 479"). Kitora's own runs of this kind sit in a `,(0,h.jsx)(t.code,{children:`<bdi>`}),`, which isolates them and takes their direction from their first letter: the pagers' ranges, file sizes, and the "3 of 10" counts. A run with no letter at all ("1–10", "1920 × 1080") is marked `,(0,h.jsx)(t.code,{children:`<bdi dir="ltr">`}),`. Do the same for such text of your own; `,(0,h.jsx)(t.code,{children:`task rtl:bidi`}),` checks the kits' runs in headless Chrome by where each character is drawn.`]}),`
`,(0,h.jsx)(r,{on:[`packages/theme/src/react/index.tsx`,`packages/upload/src/ui/pager.tsx`,`scripts/rtl-bidi.mjs`,`packages/theme/src/core/direction.ts`,`packages/primitives/src/react/direction.tsx`,`packages/primitives/src/react/rovingGroup.tsx`,`packages/primitives/src/core/roving/nav.ts`,`packages/primitives/src/core/slider.ts`,`packages/primitives/src/core/position.ts`,`packages/primitives/src/react/popup/positioner.tsx`,`packages/ui/src/__tests__/label.test.tsx`,`src/docs/examples/__tests__/rtl.test.tsx`]})]})}function b(e={}){let{wrapper:t}={...p(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(y,{...e})}):y(e)}function x(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{b as default};