import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{Bc as n,Cc as r,Ic as i}from"./index-q72zUtm9.js";import{t as a}from"./inline-edit-DiuSYUUX.js";var o=e({InlineEditAsyncSave:()=>u}),s=t(n(),1),c=i();function l(e){return new Promise((t,n)=>setTimeout(()=>e.includes(` `)?n(Error(`A slug cannot contain spaces.`)):t(),600))}function u(){let[e,t]=(0,s.useState)(`q4-launch`);return(0,c.jsxs)(`div`,{className:`flex w-72 flex-col gap-2 text-sm`,children:[(0,c.jsx)(a,{"aria-label":`Project slug`,value:e,onValueChange:t,onSubmit:l,controls:!0}),(0,c.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Try a value with a space to see the error.`})]})}var d=e({InlineEditMultilineWithControls:()=>f});function f(){return(0,c.jsx)(`div`,{className:`w-80 text-sm`,children:(0,c.jsx)(a,{"aria-label":`Description`,multiline:!0,controls:!0,defaultValue:`Ship the onboarding checklist and the new billing page before the October freeze.`,validate:e=>e.trim().length<10?`Write at least 10 characters.`:null})})}var p=e({InlineEditText:()=>m});function m(){let[e,t]=(0,s.useState)(`Q4 launch plan`);return(0,c.jsxs)(`div`,{className:`flex w-72 flex-col gap-2 text-sm`,children:[(0,c.jsx)(a,{"aria-label":`Project title`,value:e,onValueChange:t,placeholder:`Untitled`}),(0,c.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`Saved: `,e||`(empty)`]})]})}var h=`import { useState } from "react"
import { InlineEdit } from "@kitora/pickers/ui"

/** A pretend request: rejects names with spaces, so the error path shows. */
function saveSlug(slug: string): Promise<void> {
  return new Promise((resolve, reject) => setTimeout(() => (slug.includes(" ") ? reject(new Error("A slug cannot contain spaces.")) : resolve()), 600))
}

// \`onSubmit\` may return a promise: the field stays busy (controls disabled) until it settles, and a
// rejection keeps the edit open with the error message.
export function InlineEditAsyncSave() {
  const [slug, setSlug] = useState("q4-launch")
  return (
    <div className="flex w-72 flex-col gap-2 text-sm">
      <InlineEdit aria-label="Project slug" value={slug} onValueChange={setSlug} onSubmit={saveSlug} controls />
      <p className="text-xs text-muted-foreground">Try a value with a space to see the error.</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>r(()=>import(`./async-save-C1VQeQ3I.js`),[]));var g=`import { InlineEdit } from "@kitora/pickers/ui"

// \`multiline\` edits in a textarea (Ctrl or ⌘ + Enter saves), \`controls\` adds Save and Cancel buttons, and
// \`validate\` keeps the field open with its message until the draft passes.
export function InlineEditMultilineWithControls() {
  return (
    <div className="w-80 text-sm">
      <InlineEdit
        aria-label="Description"
        multiline
        controls
        defaultValue="Ship the onboarding checklist and the new billing page before the October freeze."
        validate={(draft) => (draft.trim().length < 10 ? "Write at least 10 characters." : null)}
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>r(()=>import(`./multiline-with-controls-DwZvB3Ne.js`),[]));var _=`import { useState } from "react"
import { InlineEdit } from "@kitora/pickers/ui"

// Text that turns into a field: click it (or press Enter or F2 on it) to edit, Enter saves, Escape
// restores, and leaving the field saves. Controlled here; \`defaultValue\` makes it uncontrolled.
export function InlineEditText() {
  const [title, setTitle] = useState("Q4 launch plan")
  return (
    <div className="flex w-72 flex-col gap-2 text-sm">
      <InlineEdit aria-label="Project title" value={title} onValueChange={setTitle} placeholder="Untitled" />
      <p className="text-xs text-muted-foreground">Saved: {title || "(empty)"}</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>r(()=>import(`./text-CBVXs_gk.js`),[]));var v={"./demos/inline-edit/async-save.tsx":o,"./demos/inline-edit/multiline-with-controls.tsx":d,"./demos/inline-edit/text.tsx":p},y={"./demos/inline-edit/async-save.tsx":h,"./demos/inline-edit/multiline-with-controls.tsx":g,"./demos/inline-edit/text.tsx":_};export{v as modules,y as sources};