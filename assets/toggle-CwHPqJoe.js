import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{n as t,t as n}from"./italic-CjF2wZHD.js";import{t as r}from"./underline-CiJst2l5.js";import{Ec as i,ri as a,xo as o,zc as s}from"./index-BZuUy872.js";import{t as c}from"./separator-BeYrD2Vo.js";import{t as l}from"./toggle-CpkBz3nc.js";var u=e({ToggleBuildYourOwn:()=>p}),d=s(),f=`inline-flex size-8 items-center justify-center rounded-sm text-sm outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring data-pressed:bg-muted data-pressed:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50`;function p({pressed:e,onPressedChange:t,disabled:n}){return(0,d.jsxs)(`div`,{className:`flex gap-1`,children:[(0,d.jsx)(o,{"aria-label":`Bold`,pressed:e,onPressedChange:e=>t?.(e),className:f,children:(0,d.jsx)(`span`,{className:`font-bold`,children:`B`})}),(0,d.jsx)(o,{"aria-label":`Italic`,defaultPressed:!0,className:f,children:(0,d.jsx)(`span`,{className:`italic`,children:`I`})}),(0,d.jsx)(o,{"aria-label":`Underline`,disabled:n,className:f,children:(0,d.jsx)(`span`,{className:`underline`,children:`U`})})]})}var m=e({ToggleComposeEditorToolbar:()=>h});function h(){return(0,d.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,d.jsxs)(`div`,{className:`flex w-full max-w-sm flex-wrap items-center gap-1 rounded-md border border-border bg-card p-1`,children:[(0,d.jsx)(l,{size:`sm`,"aria-label":`Bold`,defaultPressed:!0,children:(0,d.jsx)(t,{})}),(0,d.jsx)(l,{size:`sm`,"aria-label":`Italic`,children:(0,d.jsx)(n,{})}),(0,d.jsx)(l,{size:`sm`,"aria-label":`Underline`,children:(0,d.jsx)(r,{})}),(0,d.jsx)(c,{orientation:`vertical`,className:`mx-1 h-5`}),(0,d.jsx)(a,{size:`sm`,variant:`ghost`,className:`ml-auto`,children:`Preview`}),(0,d.jsx)(a,{size:`sm`,children:`Publish`})]})})}var g=e({TogglePressedState:()=>_});function _(){return(0,d.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,d.jsx)(l,{"aria-label":`Bold`,children:(0,d.jsx)(`span`,{className:`font-bold`,children:`B`})}),(0,d.jsx)(l,{"aria-label":`Italic`,defaultPressed:!0,children:(0,d.jsx)(`span`,{className:`italic`,children:`I`})}),(0,d.jsx)(l,{"aria-label":`Underline`,children:(0,d.jsx)(`span`,{className:`underline`,children:`U`})})]})}var v=`import { Toggle } from "@kitora/primitives/react"

/** Your own toggle look: a quiet button with a muted fill while pressed (\`aria-pressed\`, also written as \`data-pressed\`). */
const TOGGLE = "inline-flex size-8 items-center justify-center rounded-sm text-sm outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring data-pressed:bg-muted data-pressed:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"

/**
 * Toggles built from the primitives' \`Toggle\` only: Bold follows \`pressed\` / \`onPressedChange\` when you pass them (else it starts
 * off), Italic starts pressed (uncontrolled) and Underline is disabled when \`disabled\` is set.
 */
export function ToggleBuildYourOwn({ pressed, onPressedChange, disabled }: { pressed?: boolean; onPressedChange?: (pressed: boolean) => void; disabled?: boolean }) {
  return (
    <div className="flex gap-1">
      <Toggle aria-label="Bold" pressed={pressed} onPressedChange={(next) => onPressedChange?.(next)} className={TOGGLE}>
        <span className="font-bold">B</span>
      </Toggle>
      <Toggle aria-label="Italic" defaultPressed className={TOGGLE}>
        <span className="italic">I</span>
      </Toggle>
      <Toggle aria-label="Underline" disabled={disabled} className={TOGGLE}>
        <span className="underline">U</span>
      </Toggle>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>i(()=>import(`./build-your-own-DHmnT7af.js`),[]));var y=`import { Bold, Italic, Underline } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { Separator } from "@kitora/ui/separator"
import { Toggle } from "@kitora/ui/toggle"

export function ToggleComposeEditorToolbar() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="flex w-full max-w-sm flex-wrap items-center gap-1 rounded-md border border-border bg-card p-1">
        <Toggle size="sm" aria-label="Bold" defaultPressed>
          <Bold />
        </Toggle>
        <Toggle size="sm" aria-label="Italic">
          <Italic />
        </Toggle>
        <Toggle size="sm" aria-label="Underline">
          <Underline />
        </Toggle>
        <Separator orientation="vertical" className="mx-1 h-5" />
        <Button size="sm" variant="ghost" className="ml-auto">
          Preview
        </Button>
        <Button size="sm">Publish</Button>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>i(()=>import(`./compose-OYnD1hc6.js`),[]));var b=`import { Toggle } from "@kitora/ui/toggle"

export function TogglePressedState() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Toggle aria-label="Bold">
        <span className="font-bold">B</span>
      </Toggle>
      <Toggle aria-label="Italic" defaultPressed>
        <span className="italic">I</span>
      </Toggle>
      <Toggle aria-label="Underline">
        <span className="underline">U</span>
      </Toggle>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>i(()=>import(`./pressed-state-DDudaCai.js`),[]));var x={"./demos/toggle/build-your-own.tsx":u,"./demos/toggle/compose.tsx":m,"./demos/toggle/pressed-state.tsx":g},S={"./demos/toggle/build-your-own.tsx":v,"./demos/toggle/compose.tsx":y,"./demos/toggle/pressed-state.tsx":b};export{x as modules,S as sources};