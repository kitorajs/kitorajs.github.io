import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{n,t as r}from"./checkbox-BJqz5NuA.js";import{t as i}from"./minus-m0qDSdNu.js";import{Ai as a,Bc as o,Cc as s,Ic as c,ti as l}from"./index-9y5uwRd3.js";import{n as u}from"./choice-label-DnfuzcK4.js";import{t as d}from"./label-BCdE7eBP.js";import{n as f,t as p}from"./choice-styles-DL1jb3hx.js";import{t as m}from"./checkbox-C15B7P0U.js";var h=e({CheckboxBuildYourOwn:()=>_}),g=c();function _({checked:e,defaultChecked:t=e===void 0?!0:void 0,onCheckedChange:o,indeterminate:s,disabled:c,name:l}){let{controlId:d,descriptionId:m,describedBy:h}=u(void 0,!0,!0,void 0);return(0,g.jsxs)(`span`,{className:`inline-flex items-start gap-2`,children:[(0,g.jsx)(n,{id:d,"aria-describedby":h,checked:e,defaultChecked:t,onCheckedChange:e=>o?.(e),indeterminate:s,disabled:c,name:l,className:p,children:(0,g.jsxs)(r,{className:f,children:[(0,g.jsx)(a,{className:`group-data-indeterminate/checkbox:hidden`}),(0,g.jsx)(i,{className:`hidden group-data-indeterminate/checkbox:block`})]})}),(0,g.jsxs)(`span`,{className:`flex min-w-0 flex-col gap-1 pt-0.5`,children:[(0,g.jsx)(`label`,{htmlFor:d,className:`text-[13px] leading-none select-none peer-data-disabled:opacity-50`,children:`Product updates`}),(0,g.jsx)(`span`,{id:m,className:`text-xs text-muted-foreground`,children:`A short email when we ship something new.`})]})]})}var v=e({CheckboxComposePermissionScopes:()=>x}),y=t(o(),1),b=[{id:`read`,label:`Read repositories`},{id:`write`,label:`Write repositories`},{id:`admin`,label:`Manage settings`}];function x(){let[e,t]=(0,y.useState)([`read`]);return(0,g.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,g.jsxs)(`form`,{className:`w-full max-w-sm space-y-3 rounded-md border border-border bg-card p-3`,onSubmit:e=>e.preventDefault(),children:[(0,g.jsxs)(`fieldset`,{className:`space-y-2`,children:[(0,g.jsx)(`legend`,{className:`mb-1 text-sm font-medium`,children:`Token scopes`}),b.map(n=>(0,g.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,g.jsx)(m,{id:`scope-${n.id}`,checked:e.includes(n.id),onCheckedChange:e=>t(t=>e===!0?[...t,n.id]:t.filter(e=>e!==n.id))}),(0,g.jsx)(d,{htmlFor:`scope-${n.id}`,children:n.label})]},n.id))]}),(0,g.jsx)(l,{type:`submit`,size:`sm`,disabled:e.length===0,children:`Create token`})]})})}var S=e({CheckboxDefault:()=>C});function C(){return(0,g.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,g.jsxs)(`div`,{className:`flex items-start gap-2.5`,children:[(0,g.jsx)(m,{id:`terms`,defaultChecked:!0}),(0,g.jsxs)(`div`,{className:`grid gap-0.5 leading-none`,children:[(0,g.jsx)(d,{htmlFor:`terms`,children:`Accept terms`}),(0,g.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`You agree to the EULA.`})]})]})})}var w=e({CheckboxDescriptionAndSizes:()=>T});function T(){return(0,g.jsxs)(`div`,{className:`grid w-full max-w-sm gap-5`,children:[(0,g.jsx)(m,{defaultChecked:!0,label:`Product updates`,description:`A short email when we ship something new. No more than twice a month.`}),(0,g.jsx)(m,{label:`Security alerts`,description:`Sign-ins from a new device, always on for admins.`,disabled:!0,defaultChecked:!0}),(0,g.jsxs)(`div`,{className:`flex flex-wrap items-center gap-5`,children:[(0,g.jsx)(m,{size:`sm`,label:`Small`,defaultChecked:!0}),(0,g.jsx)(m,{label:`Default`,defaultChecked:!0}),(0,g.jsx)(m,{size:`lg`,label:`Large`,defaultChecked:!0})]})]})}var E=`import { CheckIcon, MinusIcon } from "lucide-react"
import { Checkbox } from "@kitora/primitives/react"
import { useChoiceIds } from "@kitora/ui/choice-label"
import { checkboxControlClassName, checkboxIndicatorClassName } from "@kitora/ui/choice-styles"

/**
 * A checkbox with a label and a description, built from the primitives' \`Checkbox.Root\` and \`Checkbox.Indicator\`. The label points at the
 * box's id (the primitives put it on the hidden input, so a press on the label toggles the box and names it); the description joins the
 * box's \`aria-describedby\` after any description an enclosing Field adds (\`useChoiceIds\` merges them). The box and tick reuse ui's classes.
 */
export function CheckboxBuildYourOwn({
  checked,
  defaultChecked = checked === undefined ? true : undefined,
  onCheckedChange,
  indeterminate,
  disabled,
  name,
}: {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  indeterminate?: boolean
  disabled?: boolean
  name?: string
}) {
  const { controlId, descriptionId, describedBy } = useChoiceIds(undefined, true, true, undefined)
  return (
    <span className="inline-flex items-start gap-2">
      <Checkbox.Root
        id={controlId}
        aria-describedby={describedBy}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={(next) => onCheckedChange?.(next)}
        indeterminate={indeterminate}
        disabled={disabled}
        name={name}
        className={checkboxControlClassName}
      >
        <Checkbox.Indicator className={checkboxIndicatorClassName}>
          <CheckIcon className="group-data-indeterminate/checkbox:hidden" />
          <MinusIcon className="hidden group-data-indeterminate/checkbox:block" />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <span className="flex min-w-0 flex-col gap-1 pt-0.5">
        <label htmlFor={controlId} className="text-[13px] leading-none select-none peer-data-disabled:opacity-50">
          Product updates
        </label>
        <span id={descriptionId} className="text-xs text-muted-foreground">
          A short email when we ship something new.
        </span>
      </span>
    </span>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>s(()=>import(`./build-your-own-gtC8ZAku.js`),[]));var D=`import { useState } from "react"
import { Checkbox } from "@kitora/ui/checkbox"
import { Label } from "@kitora/ui/label"
import { Button } from "@kitora/ui/button"

const SCOPES = [
  { id: "read", label: "Read repositories" },
  { id: "write", label: "Write repositories" },
  { id: "admin", label: "Manage settings" },
]

export function CheckboxComposePermissionScopes() {
  const [picked, setPicked] = useState<string[]>(["read"])
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <form className="w-full max-w-sm space-y-3 rounded-md border border-border bg-card p-3" onSubmit={(e) => e.preventDefault()}>
        <fieldset className="space-y-2">
          <legend className="mb-1 text-sm font-medium">Token scopes</legend>
          {SCOPES.map((s) => (
            <div key={s.id} className="flex items-center gap-2">
              <Checkbox
                id={\`scope-\${s.id}\`}
                checked={picked.includes(s.id)}
                onCheckedChange={(v) => setPicked((p) => (v === true ? [...p, s.id] : p.filter((x) => x !== s.id)))}
              />
              <Label htmlFor={\`scope-\${s.id}\`}>{s.label}</Label>
            </div>
          ))}
        </fieldset>
        <Button type="submit" size="sm" disabled={picked.length === 0}>
          Create token
        </Button>
      </form>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>s(()=>import(`./compose-CJ6glgI8.js`),[]));var O=`import { Checkbox } from "@kitora/ui/checkbox"
import { Label } from "@kitora/ui/label"

export function CheckboxDefault() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="flex items-start gap-2.5">
        <Checkbox id="terms" defaultChecked />
        <div className="grid gap-0.5 leading-none">
          <Label htmlFor="terms">Accept terms</Label>
          <p className="text-xs text-muted-foreground">You agree to the EULA.</p>
        </div>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>s(()=>import(`./default-46DzKfXY.js`),[]));var k=`import { Checkbox } from "@kitora/ui/checkbox"

/** \`label\` and \`description\` render beside the box and are wired for you; \`size\` picks a smaller or larger box. */
export function CheckboxDescriptionAndSizes() {
  return (
    <div className="grid w-full max-w-sm gap-5">
      <Checkbox defaultChecked label="Product updates" description="A short email when we ship something new. No more than twice a month." />
      <Checkbox label="Security alerts" description="Sign-ins from a new device, always on for admins." disabled defaultChecked />
      <div className="flex flex-wrap items-center gap-5">
        <Checkbox size="sm" label="Small" defaultChecked />
        <Checkbox label="Default" defaultChecked />
        <Checkbox size="lg" label="Large" defaultChecked />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>s(()=>import(`./description-and-sizes-D5Xxf2GM.js`),[]));var A={"./demos/checkbox/build-your-own.tsx":h,"./demos/checkbox/compose.tsx":v,"./demos/checkbox/default.tsx":S,"./demos/checkbox/description-and-sizes.tsx":w},j={"./demos/checkbox/build-your-own.tsx":E,"./demos/checkbox/compose.tsx":D,"./demos/checkbox/default.tsx":O,"./demos/checkbox/description-and-sizes.tsx":k};export{A as modules,j as sources};