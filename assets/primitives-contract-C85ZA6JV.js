import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{i as t,n,r,t as i}from"./TabsTab-666hhZSF.js";import{Bc as a,Cc as o,Ic as s}from"./index-9y5uwRd3.js";import{n as c}from"./lib-NYJzi901.js";var l=e(a(),1),u=s(),d=`rounded-md px-3 py-1.5 text-sm text-muted-foreground data-active:bg-muted data-active:text-foreground`;function f(){let[e,a]=(0,l.useState)(`account`);return(0,u.jsxs)(n,{value:e,onValueChange:e=>a(String(e)),className:`w-full max-w-sm`,children:[(0,u.jsxs)(t,{className:`flex gap-1 border-b pb-1`,children:[(0,u.jsx)(i,{value:`account`,className:d,children:`Account`}),(0,u.jsx)(i,{value:`billing`,className:d,render:(0,u.jsx)(`button`,{type:`button`}),children:`Billing`})]}),(0,u.jsx)(r,{value:`account`,className:`p-3 text-sm`,children:`Your name and email.`}),(0,u.jsx)(r,{value:`billing`,className:`p-3 text-sm`,children:`Your plan and invoices.`}),(0,u.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`Selected: `,e]})]})}var p=`import { useState } from "react"
import { Tabs } from "@kitora/primitives/react"

const TAB = "rounded-md px-3 py-1.5 text-sm text-muted-foreground data-active:bg-muted data-active:text-foreground"

// The primitives' contract in one place: parts with the same names everywhere (Root, List, Tab, Panel), state as
// \`value\` / \`onValueChange\` (leave them out for \`defaultValue\`), \`render\` to swap the element, and every state written as
// a data attribute (\`data-active\`) that the classes style.
export function ControlledTabs() {
  const [value, setValue] = useState("account")
  return (
    <Tabs.Root value={value} onValueChange={(next) => setValue(String(next))} className="w-full max-w-sm">
      <Tabs.List className="flex gap-1 border-b pb-1">
        <Tabs.Tab value="account" className={TAB}>
          Account
        </Tabs.Tab>
        <Tabs.Tab value="billing" className={TAB} render={<button type="button" />}>
          Billing
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="account" className="p-3 text-sm">
        Your name and email.
      </Tabs.Panel>
      <Tabs.Panel value="billing" className="p-3 text-sm">
        Your plan and invoices.
      </Tabs.Panel>
      <p className="text-xs text-muted-foreground">Selected: {value}</p>
    </Tabs.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(p,()=>o(()=>import(`./controlled-tabs-B4u_Cf58.js`),[]));function m(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...c(),...e.components},{Api:n,Relies:r,Snippet:i}=t;return n||g(`Api`,!0),r||g(`Relies`,!0),i||g(`Snippet`,!0),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(t.p,{children:[`The primitives in `,(0,u.jsx)(n,{package:`@kitora/primitives`}),` share one contract, so a component you build from their parts behaves like the styled one:`]}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`The same part names.`}),` A compound primitive's outer part is `,(0,u.jsx)(t.code,{children:`Root`}),`, and the rest are named for what they are (`,(0,u.jsx)(t.code,{children:`List`}),`, `,(0,u.jsx)(t.code,{children:`Tab`}),`, `,(0,u.jsx)(t.code,{children:`Panel`}),`, `,(0,u.jsx)(t.code,{children:`Trigger`}),`, `,(0,u.jsx)(t.code,{children:`Popup`}),`).`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`A headless hook or context`}),` for a part of your own: the root's state and actions without markup.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsxs)(t.strong,{children:[(0,u.jsx)(t.code,{children:`render`}),` on every part`]}),` that draws an element: swap the element or compose your own component, and keep the behaviour.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`One set of names for state.`}),` Controlled with `,(0,u.jsx)(t.code,{children:`value`}),` and `,(0,u.jsx)(t.code,{children:`onValueChange`}),` (or `,(0,u.jsx)(t.code,{children:`open`}),` and `,(0,u.jsx)(t.code,{children:`onOpenChange`}),`), uncontrolled with `,(0,u.jsx)(t.code,{children:`defaultValue`}),`; a two-state control keeps its HTML name (`,(0,u.jsx)(t.code,{children:`checked`}),`, `,(0,u.jsx)(t.code,{children:`pressed`}),`). Every change callback gets the new value and the event details, with a reason and `,(0,u.jsx)(t.code,{children:`cancel()`}),`.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`State as data attributes.`}),` A part writes its state (`,(0,u.jsx)(t.code,{children:`data-active`}),`, `,(0,u.jsx)(t.code,{children:`data-open`}),`, `,(0,u.jsx)(t.code,{children:`data-checked`}),`, `,(0,u.jsx)(t.code,{children:`data-disabled`}),`) and its measured sizes as CSS variables, so styles never need JavaScript.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Form binding`}),` where it holds a value: `,(0,u.jsx)(t.code,{children:`name`}),`, a hidden input, and an enclosing `,(0,u.jsx)(t.code,{children:`Field`}),`.`]}),`
`]}),`
`,(0,u.jsx)(i,{title:`Controlled tabs from the parts`,source:p,children:(0,u.jsx)(f,{})}),`
`,(0,u.jsxs)(t.p,{children:[`Each `,(0,u.jsx)(t.code,{children:`/components`}),` page lists a component's parts, the attributes and CSS variables each one writes, and its keys, all generated from the code: see `,(0,u.jsx)(n,{name:`Tabs`}),`. The primitives package's README holds the full contract, and its check reports what each primitive still lacks.`]}),`
`,(0,u.jsx)(r,{on:[`packages/primitives/README.md`,`src/__tests__/primitives-contract.ts`,`packages/primitives/src/core/contract.ts`]})]})}function h(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(m,{...e})}):m(e)}function g(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{h as default};