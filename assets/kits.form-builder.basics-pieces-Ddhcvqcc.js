import{C as e,_ as t,a as n,b as r,c as i,d as a,f as o,g as s,i as c,l,m as u,n as d,o as f,p,r as m,s as h,t as g,u as _,w as v,x as y,y as b}from"./-kits.form-builder.shared-DwipQTY0.js";import{s as x}from"./kit-docs-BUovISd0.js";import{Cc as S,Ic as C}from"./index-B9ukmIN1.js";import"./kit-gallery-Bph7isB2.js";import{t as w}from"./example-BGnSQG2Y.js";import{a as T}from"./auto-form-9BIFbDQc.js";var E=C();function D(){return(0,E.jsxs)(d.Root,{children:[(0,E.jsxs)(d.Toolbar,{children:[(0,E.jsx)(d.ModeSwitch,{}),(0,E.jsx)(d.UndoButton,{}),(0,E.jsx)(d.RedoButton,{}),(0,E.jsx)(`div`,{className:`flex-1`}),(0,E.jsx)(d.ProblemsButton,{}),(0,E.jsx)(d.JsonButton,{})]}),(0,E.jsx)(d.Workspace,{children:(0,E.jsxs)(d.Panes,{sizes:[.3,.5,.2],labels:[`Properties`,`Canvas`,`Palette`],children:[(0,E.jsx)(d.Properties,{className:`border-r`}),(0,E.jsx)(d.Canvas,{classNames:{card:`data-[selected]:shadow-md`}}),(0,E.jsx)(d.Palette,{className:`border-l`})]})}),(0,E.jsx)(d.JsonDialog,{})]})}var O=`import { FormBuilder } from "@kitora/form-builder"

// The ready-made <FormBuilder /> rebuilt from its public parts, so you can see every seam:
// move the toolbar, drop a pane, swap the preview, or add your own buttons between the parts.
// Here the properties panel moves to the left and the toolbar loses its field count.
export function BasicCompose() {
  return (
    <FormBuilder.Root>
      <FormBuilder.Toolbar>
        <FormBuilder.ModeSwitch />
        <FormBuilder.UndoButton />
        <FormBuilder.RedoButton />
        <div className="flex-1" />
        <FormBuilder.ProblemsButton />
        <FormBuilder.JsonButton />
      </FormBuilder.Toolbar>
      <FormBuilder.Workspace>
        <FormBuilder.Panes sizes={[0.3, 0.5, 0.2]} labels={["Properties", "Canvas", "Palette"]}>
          <FormBuilder.Properties className="border-r" />
          <FormBuilder.Canvas classNames={{ card: "data-[selected]:shadow-md" }} />
          <FormBuilder.Palette className="border-l" />
        </FormBuilder.Panes>
      </FormBuilder.Workspace>
      <FormBuilder.JsonDialog />
    </FormBuilder.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>S(()=>import(`./compose-lO-8lxFe.js`),[]));function k(){return(0,E.jsx)(d,{title:`Untitled form`})}var A=`import { FormBuilder } from "@kitora/form-builder"

// The whole builder in one line: palette, canvas, properties, preview, undo / redo and JSON.
// Click a palette entry (or drag it) to add a field; ⌘/Ctrl Z undoes.
export function BasicEmptyBuilder() {
  return <FormBuilder title="Untitled form" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>S(()=>import(`./empty-builder-DDpH0-8z.js`),[]));var j=[{kind:`field`,name:`fullName`,type:`text`,label:`Full name`,required:!0},{kind:`field`,name:`email`,type:`email`,label:`Email`},{kind:`field`,name:`start`,type:`date`,label:`Start date`},{kind:`field`,name:`remote`,type:`switch`,label:`Open to remote`}];function M(){return(0,E.jsx)(`ul`,{className:`grid gap-2 p-3 sm:grid-cols-2`,children:j.map(e=>(0,E.jsxs)(`li`,{className:`rounded-md border bg-background p-2`,children:[(0,E.jsxs)(`div`,{className:`mb-1 flex items-center gap-1.5 text-xs text-muted-foreground`,children:[(0,E.jsx)(r,{type:e.type}),(0,E.jsx)(`span`,{children:e.type})]}),(0,E.jsx)(y,{node:e,widgets:T})]},e.name))})}var N=`import { FieldPreview, TypeIcon } from "@kitora/form-builder/ui"
import { defaultWidgets } from "@kitora/form/auto"
import type { FieldNode } from "@kitora/form/core"

// The two small pieces the canvas draws on every card: TypeIcon (the field type's glyph) and
// FieldPreview (the real widget for one field, inert). Use them for a card of your own.
const nodes: readonly FieldNode[] = [
  { kind: "field", name: "fullName", type: "text", label: "Full name", required: true },
  { kind: "field", name: "email", type: "email", label: "Email" },
  { kind: "field", name: "start", type: "date", label: "Start date" },
  { kind: "field", name: "remote", type: "switch", label: "Open to remote" },
]

export function BasicFieldCards() {
  return (
    <ul className="grid gap-2 p-3 sm:grid-cols-2">
      {nodes.map((node) => (
        <li key={node.name} className="rounded-md border bg-background p-2">
          <div className="mb-1 flex items-center gap-1.5 text-xs text-muted-foreground">
            <TypeIcon type={node.type} />
            <span>{node.type}</span>
          </div>
          <FieldPreview node={node} widgets={defaultWidgets} />
        </li>
      ))}
    </ul>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>S(()=>import(`./field-cards-YGLhChjx.js`),[]));function P(){return(0,E.jsxs)(a,{children:[(0,E.jsxs)(i,{children:[(0,E.jsx)(n,{}),(0,E.jsx)(l,{}),(0,E.jsx)(h,{}),(0,E.jsx)(m,{}),(0,E.jsx)(`div`,{className:`flex-1`}),(0,E.jsx)(f,{}),(0,E.jsx)(c,{})]}),(0,E.jsx)(o,{preview:(0,E.jsx)(u,{className:`bg-background`}),children:(0,E.jsxs)(_,{children:[(0,E.jsx)(s,{className:`border-r`}),(0,E.jsx)(b,{}),(0,E.jsx)(p,{className:`border-l`})]})}),(0,E.jsx)(t,{})]})}var F=`import { BuilderCanvas, BuilderFieldCount, BuilderJsonButton, BuilderJsonDialog, BuilderModeSwitch, BuilderPalette, BuilderPanes, BuilderPreview, BuilderProblemsButton, BuilderProperties, BuilderRedoButton, BuilderRoot, BuilderToolbar, BuilderUndoButton, BuilderWorkspace } from "@kitora/form-builder/ui"

// The same parts as FormBuilder.Root, .Toolbar … imported by name from the ui entry, for hosts
// that prefer named imports. BuilderWorkspace shows the panes while editing and its \`preview\`
// (here BuilderPreview with a wider form) once the mode switch is on Preview.
export function BasicNamedParts() {
  return (
    <BuilderRoot>
      <BuilderToolbar>
        <BuilderModeSwitch />
        <BuilderUndoButton />
        <BuilderRedoButton />
        <BuilderFieldCount />
        <div className="flex-1" />
        <BuilderProblemsButton />
        <BuilderJsonButton />
      </BuilderToolbar>
      <BuilderWorkspace preview={<BuilderPreview className="bg-background" />}>
        <BuilderPanes>
          <BuilderPalette className="border-r" />
          <BuilderCanvas />
          <BuilderProperties className="border-l" />
        </BuilderPanes>
      </BuilderWorkspace>
      <BuilderJsonDialog />
    </BuilderRoot>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>S(()=>import(`./named-parts-DqDLSBiX.js`),[]));function I(){return(0,E.jsx)(v,{children:(0,E.jsx)(e,{children:(0,E.jsxs)(`div`,{className:`grid h-full grid-cols-[180px_minmax(0,1fr)]`,children:[(0,E.jsx)(s,{className:`border-r`}),(0,E.jsx)(b,{emptyHint:`Drag a field here`})]})})})}var L=`import { BuilderCanvas, BuilderDndProvider, BuilderPalette, FormBuilderProvider } from "@kitora/form-builder"

// The pieces lay out however you like inside a FormBuilderProvider. The palette and the
// canvas share one BuilderDndProvider so a drag can cross from one to the other.
export function BasicPieces() {
  return (
    <FormBuilderProvider>
      <BuilderDndProvider>
        <div className="grid h-full grid-cols-[180px_minmax(0,1fr)]">
          <BuilderPalette className="border-r" />
          <BuilderCanvas emptyHint="Drag a field here" />
        </div>
      </BuilderDndProvider>
    </FormBuilderProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>S(()=>import(`./pieces-D62iTLo5.js`),[]));var R={version:1,fields:[{kind:`field`,name:`plan`,type:`radio`,label:`Plan`,required:!0,options:[{value:`free`,label:`Free`},{value:`pro`,label:`Pro`}]},{kind:`field`,name:`company`,type:`text`,label:`Company`,placeholder:`Acme Inc.`}]};function z(){return(0,E.jsx)(v,{defaultDef:R,children:(0,E.jsx)(e,{children:(0,E.jsxs)(`div`,{className:`grid h-full grid-cols-[minmax(0,1fr)_280px]`,children:[(0,E.jsx)(b,{}),(0,E.jsx)(p,{className:`border-l`})]})})})}var B=`import { BuilderCanvas, BuilderDndProvider, BuilderProperties, FormBuilderProvider } from "@kitora/form-builder"
import type { FormDef } from "@kitora/form/core"

// Click a card: the properties panel edits that field. Rename it, mark it required,
// change its options and default, or add a length rule; the card redraws as you type.
const plan: FormDef = {
  version: 1,
  fields: [
    {
      kind: "field",
      name: "plan",
      type: "radio",
      label: "Plan",
      required: true,
      options: [
        { value: "free", label: "Free" },
        { value: "pro", label: "Pro" },
      ],
    },
    { kind: "field", name: "company", type: "text", label: "Company", placeholder: "Acme Inc." },
  ],
}

export function BasicProperties() {
  return (
    <FormBuilderProvider defaultDef={plan}>
      <BuilderDndProvider>
        <div className="grid h-full grid-cols-[minmax(0,1fr)_280px]">
          <BuilderCanvas />
          <BuilderProperties className="border-l" />
        </div>
      </BuilderDndProvider>
    </FormBuilderProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>S(()=>import(`./properties-9yYGM9vP.js`),[]));function V(){return(0,E.jsxs)(`div`,{children:[(0,E.jsx)(x,{title:`Basics: the pieces`,children:"`FormBuilder` is the whole thing, built only from public parts: `FormBuilder.Root`, `.Toolbar`, `.Panes`, `.Palette`, `.Canvas`, `.Properties`, `.Preview`, `.JsonDialog`. Use them for a layout of your own."}),(0,E.jsx)(w,{n:1,title:`The whole builder`,blurb:`One component. Click or drag a palette entry; the new field is selected and the panel on the right edits it.`,code:A,children:(0,E.jsx)(g,{testId:`fb-basic-empty`,height:480,bare:!0,children:(0,E.jsx)(k,{})})}),(0,E.jsx)(w,{n:2,title:`Palette and canvas`,blurb:`Two pieces in a grid of your own. Drag from the palette onto the canvas, then drag the cards by their grips to reorder.`,code:L,children:(0,E.jsx)(g,{testId:`fb-basic-pieces`,height:380,children:(0,E.jsx)(I,{})})}),(0,E.jsx)(w,{n:3,title:`The properties panel`,blurb:`Click a card to edit it: name, label, required, options with a default, help text.`,code:B,children:(0,E.jsx)(g,{testId:`fb-basic-properties`,height:460,children:(0,E.jsx)(z,{})})}),(0,E.jsx)(w,{n:4,title:`Compose your own`,blurb:`The ready-made builder rebuilt from its public parts (FormBuilder.Root, .Toolbar, .Panes, .Canvas …), rearranged: properties on the left, palette on the right, a toolbar without the field count.`,code:O,children:(0,E.jsx)(g,{testId:`fb-basic-compose`,height:480,bare:!0,children:(0,E.jsx)(D,{})})}),(0,E.jsx)(w,{n:5,title:`Named parts`,blurb:`The same parts imported by name from @kitora/form-builder/ui: BuilderRoot, BuilderToolbar with BuilderModeSwitch, BuilderUndoButton, BuilderRedoButton, BuilderFieldCount, BuilderProblemsButton and BuilderJsonButton, BuilderWorkspace with a BuilderPreview, BuilderPanes, BuilderJsonDialog.`,code:F,children:(0,E.jsx)(g,{testId:`fb-basic-named-parts`,height:480,bare:!0,children:(0,E.jsx)(P,{})})}),(0,E.jsx)(w,{n:6,title:`Card pieces`,blurb:`What each canvas card is drawn with: TypeIcon for the field type and FieldPreview for the real, inert widget. Build a card of your own from them.`,code:N,children:(0,E.jsx)(g,{testId:`fb-basic-field-cards`,children:(0,E.jsx)(M,{})})})]})}export{V as component};