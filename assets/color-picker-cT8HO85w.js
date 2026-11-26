import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{r as n,s as r,t as i}from"./field-CyrZpl8n.js";import{n as a,t as o}from"./color-picker-embKfvq8.js";import{t as s}from"./color-swatches-DrW3Uz_r.js";import{Bc as c,Cc as l,Ic as u,ti as d}from"./index-9y5uwRd3.js";var f=e({ColorPickerFormSubmit:()=>h}),p=t(c(),1),m=u();function h(){let[e,t]=(0,p.useState)(null);return(0,m.jsxs)(`form`,{className:`flex flex-col gap-3 text-[13px]`,onSubmit:e=>{e.preventDefault(),t(JSON.stringify([...new FormData(e.currentTarget)].map(([e,t])=>[e,String(t)])))},children:[(0,m.jsxs)(i,{name:`accent`,children:[(0,m.jsx)(r,{children:`Accent`}),(0,m.jsx)(a,{defaultValue:`#2563eb`}),(0,m.jsx)(n,{children:`Links and focus rings.`})]}),(0,m.jsxs)(i,{name:`surface`,children:[(0,m.jsx)(r,{children:`Surface`}),(0,m.jsx)(o,{defaultValue:`#f8fafc`,swatches:[]})]}),(0,m.jsx)(d,{type:`submit`,size:`sm`,className:`self-start`,children:`Save theme`}),(0,m.jsxs)(`p`,{role:`status`,className:`text-muted-foreground`,children:[`FormData: `,(0,m.jsx)(`code`,{children:e??`not submitted`})]})]})}var g=e({ColorPickerInlinePanel:()=>_});function _(){let[e,t]=(0,p.useState)(`#3b82f6`);return(0,m.jsxs)(`div`,{className:`flex flex-col gap-2 text-sm`,children:[(0,m.jsx)(o,{value:e,onChange:t}),(0,m.jsxs)(`p`,{className:`text-muted-foreground`,children:[`value `,(0,m.jsx)(`code`,{className:`font-mono tabular-nums text-foreground`,children:e})]})]})}var v=e({ColorPickerPopoverExample:()=>y});function y(){let[e,t]=(0,p.useState)(`#e11d48`);return(0,m.jsx)(a,{label:`Label colour`,value:e,onChange:t})}var b=e({ColorPickerSwatches:()=>S}),x=[{value:`#ef4444`,label:`Red`},{value:`#f59e0b`,label:`Amber`},{value:`#10b981`,label:`Emerald`},{value:`#3b82f6`,label:`Blue`},{value:`#8b5cf6`,label:`Violet`},{value:`#ec4899`,label:`Pink`}];function S(){let[e,t]=(0,p.useState)(`#10b981`);return(0,m.jsxs)(`div`,{className:`flex flex-col items-center gap-2 text-sm`,children:[(0,m.jsx)(s,{label:`Project colour`,swatches:x,columns:6,value:e,onChange:t}),(0,m.jsxs)(`p`,{className:`text-muted-foreground`,children:[`value `,(0,m.jsx)(`code`,{className:`font-mono tabular-nums text-foreground`,children:e??`none`})]})]})}var C=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Field, FieldDescription, FieldLabel } from "@kitora/ui/field"
import { ColorPicker, ColorPickerPopover } from "@kitora/pickers"

/** Both colour pickers post canonical hex with a plain \`<form>\`; inside a Field its label names them. */
export function ColorPickerFormSubmit() {
  const [posted, setPosted] = useState<string | null>(null)
  return (
    <form
      className="flex flex-col gap-3 text-[13px]"
      onSubmit={(event) => {
        event.preventDefault()
        setPosted(JSON.stringify([...new FormData(event.currentTarget)].map(([key, value]) => [key, String(value)])))
      }}
    >
      <Field name="accent">
        <FieldLabel>Accent</FieldLabel>
        <ColorPickerPopover defaultValue="#2563eb" />
        <FieldDescription>Links and focus rings.</FieldDescription>
      </Field>
      <Field name="surface">
        <FieldLabel>Surface</FieldLabel>
        <ColorPicker defaultValue="#f8fafc" swatches={[]} />
      </Field>
      <Button type="submit" size="sm" className="self-start">
        Save theme
      </Button>
      <p role="status" className="text-muted-foreground">
        FormData: <code>{posted ?? "not submitted"}</code>
      </p>
    </form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>l(()=>import(`./form-submit-DYtpN5yl.js`),[]));var w=`import { useState } from "react"
import { ColorPicker } from "@kitora/pickers/ui"

// The inline panel: drag the area and the sliders (or use the arrow keys on them), type a value in any
// format, or pick a preset. The value is always canonical hex.
export function ColorPickerInlinePanel() {
  const [color, setColor] = useState("#3b82f6")
  return (
    <div className="flex flex-col gap-2 text-sm">
      <ColorPicker value={color} onChange={setColor} />
      <p className="text-muted-foreground">
        value <code className="font-mono tabular-nums text-foreground">{color}</code>
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>l(()=>import(`./inline-panel-CBudHYMs.js`),[]));var T=`import { useState } from "react"
import { ColorPickerPopover } from "@kitora/pickers/ui"

// A swatch button that opens the same panel in a popover, for a form row or a toolbar.
export function ColorPickerPopoverExample() {
  const [color, setColor] = useState("#e11d48")
  return <ColorPickerPopover label="Label colour" value={color} onChange={setColor} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>l(()=>import(`./popover-BiPz-VR4.js`),[]));var E=`import { useState } from "react"
import { ColorSwatches } from "@kitora/pickers/ui"

const PALETTE = [
  { value: "#ef4444", label: "Red" },
  { value: "#f59e0b", label: "Amber" },
  { value: "#10b981", label: "Emerald" },
  { value: "#3b82f6", label: "Blue" },
  { value: "#8b5cf6", label: "Violet" },
  { value: "#ec4899", label: "Pink" },
]

// \`ColorSwatches\` alone: a labelled group of toggle buttons with one tab stop; the arrow keys, Home and End
// move between swatches, Enter or Space picks, and each swatch is named by its \`label\`.
export function ColorPickerSwatches() {
  const [color, setColor] = useState<string | null>("#10b981")
  return (
    <div className="flex flex-col items-center gap-2 text-sm">
      <ColorSwatches label="Project colour" swatches={PALETTE} columns={6} value={color} onChange={setColor} />
      <p className="text-muted-foreground">
        value <code className="font-mono tabular-nums text-foreground">{color ?? "none"}</code>
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>l(()=>import(`./swatches-CRzE6M6m.js`),[]));var D={"./demos/color-picker/form-submit.tsx":f,"./demos/color-picker/inline-panel.tsx":g,"./demos/color-picker/popover.tsx":v,"./demos/color-picker/swatches.tsx":b},O={"./demos/color-picker/form-submit.tsx":C,"./demos/color-picker/inline-panel.tsx":w,"./demos/color-picker/popover.tsx":T,"./demos/color-picker/swatches.tsx":E};export{D as modules,O as sources};