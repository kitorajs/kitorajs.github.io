import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{i as n,r,s as i,t as a}from"./field-DApIfONr.js";import{r as o}from"./input-DxNY09be.js";import{t as s}from"./root-CHHb8oab.js";import{n as c,r as l,t as u}from"./chips-DAf9TAJ0.js";import{t as d}from"./input-C8M4VLUF.js";import{n as f,r as p,t as m}from"./tags-input-UXdtC2Uu.js";import{Bc as h,Cc as g,Ic as _,hi as v,ti as y}from"./index-q72zUtm9.js";import{t as b}from"./label-DjxTNoON.js";import{n as x,t as S}from"./styles-z-ZxYS8s.js";import{d as C,u as w}from"./parts-D3O4J3oE.js";import{t as T}from"./controllable-CwIGLwv9.js";import{a as E,c as D,l as O,o as k,s as A,t as j,u as M}from"./combo-list-D9XKCxJ-.js";var N=e({TagInputBuildYourOwn:()=>L}),P=t(h(),1),F=_(),I=[`react`,`remix`,`redux`,`rust`,`ruby`];function L({value:e,onChange:t,name:n}){let[r,i]=T(e,[],e=>t?.([...e])),[a,d]=(0,P.useState)(``),[m,h]=(0,P.useState)(!1),[g,_]=(0,P.useState)(!1),[y,b]=(0,P.useState)(null),N=(0,P.useRef)(!1),L=(0,P.useMemo)(()=>I.filter(e=>!r.includes(e)).map(e=>({id:e,label:e})),[r]),R=m&&a.trim()!==``&&!g,z=j({items:L,query:a,open:R,creatable:!0}),B=(0,P.useMemo)(()=>O(z.options,z.canCreate,!1),[z.options,z.canCreate]),V=M(r),H=e=>{let t=f(r,e,{unique:!0});t.tags.length!==r.length&&i(t.tags)},U=e=>{d(e),_(!1),N.current=!1};return(0,F.jsxs)(s,{multiple:!0,items:B.ids,itemToStringLabel:B.label,filter:null,name:n,value:V,openOnInputClick:!1,onValueChange:(e,t)=>{if(t.cancel(),t.reason===`item-press`){let t=e.find(e=>!r.includes(e));if(t===void 0)return;H([t===`\0collections:create`?a:t]),U(``)}else t.reason!==`escape-key`&&e.length<r.length&&i(e)},inputValue:a,onInputValueChange:(e,t)=>{if(t.reason!==`input-change`)return;let{pieces:n,rest:r}=p(e);n.length>0&&H(n),U(r)},open:R,onOpenChange:(e,t)=>{!e&&t.reason!==`item-press`&&_(!0),t.reason===`item-press`&&t.cancel()},onItemHighlighted:(e,t)=>{t.reason!==`none`&&(N.current=!0)},children:[(0,F.jsxs)(l,{ref:b,className:v(x,`w-72 flex-wrap py-[3px]`),children:[r.map((e,t)=>(0,F.jsxs)(u,{className:S,children:[(0,F.jsx)(`span`,{className:`truncate`,children:e}),(0,F.jsx)(c,{"aria-label":`Remove ${e}`,className:`grid size-4 place-items-center rounded-sm text-muted-foreground hover:bg-foreground/10 hover:text-foreground`,children:(0,F.jsx)(C,{className:`size-3`})})]},`${e}:${t}`)),(0,F.jsx)(o,{"aria-label":`Tags`,spellCheck:!1,placeholder:r.length===0?`Add a tag…`:``,onKeyDown:e=>{e.key===`Enter`&&a.trim()!==``&&!(R&&N.current)?(e.preventBaseUIHandler(),e.preventDefault(),H([a]),U(``)):e.key===`Escape`&&a!==``&&U(``)},onFocus:()=>h(!0),onBlur:()=>{h(!1),a.trim()!==``&&(H([a]),U(``))},className:`h-5 min-w-12 flex-1 bg-transparent outline-none placeholder:text-muted-foreground`})]}),(0,F.jsxs)(A,{popupHeight:240,label:`Tags`,anchor:y,children:[(0,F.jsx)(D,{listEmpty:z.options.length===0&&!z.canCreate,children:z.options.length===0&&!z.canCreate?(0,F.jsx)(w,{children:`No suggestions`}):null}),(0,F.jsx)(k,{rows:z.rows,selected:new Set,query:a,mark:`none`}),z.canCreate?(0,F.jsxs)(E,{afterOptions:z.options.length>0,children:[`Add “`,a.trim(),`”`]}):null]})]})}var R=e({TagInputComposeInviteForm:()=>z});function z(){let e=(0,P.useId)(),t=(0,P.useId)(),[n,r]=(0,P.useState)([`ada@example.com`]);return(0,F.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,F.jsxs)(`form`,{className:`grid w-full max-w-sm gap-3`,onSubmit:e=>e.preventDefault(),children:[(0,F.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,F.jsx)(b,{htmlFor:e,children:`Invite by email`}),(0,F.jsx)(m,{id:e,value:n,onChange:r,placeholder:`name@company.com`,validate:e=>e.includes(`@`)})]}),(0,F.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,F.jsx)(b,{htmlFor:t,children:`Note`}),(0,F.jsx)(d,{id:t,placeholder:`Welcome aboard`})]}),(0,F.jsxs)(y,{type:`submit`,disabled:n.length===0,children:[`Send `,n.length,` invite`,n.length===1?``:`s`]})]})})}var B=e({TagsInputFormSubmit:()=>V});function V(){let[e,t]=(0,P.useState)(null);return(0,F.jsxs)(`form`,{className:`flex w-full max-w-md flex-col gap-3 text-[13px]`,onSubmit:e=>{e.preventDefault(),t(JSON.stringify([...new FormData(e.currentTarget)].map(([e,t])=>[e,String(t)])))},children:[(0,F.jsxs)(a,{name:`labels`,children:[(0,F.jsx)(i,{children:`Labels`}),(0,F.jsx)(m,{defaultValue:[`bug`],required:!0}),(0,F.jsx)(r,{children:`Press Enter after each label.`}),(0,F.jsx)(n,{match:`valueMissing`,children:`Add at least one label.`})]}),(0,F.jsx)(y,{type:`submit`,size:`sm`,className:`self-start`,children:`Submit`}),(0,F.jsxs)(`p`,{role:`status`,className:`text-muted-foreground`,children:[`FormData: `,(0,F.jsx)(`code`,{children:e??`not submitted`})]})]})}var H=e({TagInputTypeEnterRepeat:()=>U});function U(){let[e,t]=(0,P.useState)([`design-system`,`tanstack`,`shadcn`]);return(0,F.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,F.jsx)(`div`,{className:`w-full max-w-sm`,children:(0,F.jsx)(m,{value:e,onChange:t,"aria-label":`Tags`})})})}var W=`import { useMemo, useRef, useState } from "react"
import { Combobox } from "@kitora/primitives/react"
import { addTags, splitTags } from "@kitora/collections/core"
import { useControllable } from "@kitora/collections/react"
import { chipClass, cn, ComboCreateRow, ComboOptions, ComboPopup, ComboStatusBox, comboEntries, CREATE_VALUE, fieldClass, StatusRow, useComboSource, useStableIds, XIcon, type Entry } from "@kitora/collections/ui"

const SUGGESTIONS = ["react", "remix", "redux", "rust", "ruby"]

/**
 * A tags input with suggestions, built from public parts only: the primitives' \`Combobox\` with \`multiple\` (chips, chip keys, the list model,
 * the hidden inputs) and the collections kit's combo parts (\`useComboSource\` filters the suggestions and says when the typed text can be added,
 * \`ComboPopup\`, \`ComboOptions\`, \`ComboStatusBox\` and \`ComboCreateRow\` draw the popup). The tag rules come from \`@kitora/collections/core\`.
 */
export function TagInputBuildYourOwn({ value, onChange, name }: { value?: readonly string[]; onChange?: (tags: string[]) => void; name?: string }) {
  const [tags, setTags] = useControllable<readonly string[]>(value, [], (next) => onChange?.([...next]))
  const [text, setText] = useState("")
  const [focused, setFocused] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [chips, setChips] = useState<HTMLElement | null>(null)
  // Enter takes a suggestion only once the person moved to one; otherwise it adds what was typed.
  const moved = useRef(false)
  const items = useMemo<Entry[]>(() => SUGGESTIONS.filter((s) => !tags.includes(s)).map((s) => ({ id: s, label: s })), [tags])
  const open = focused && text.trim() !== "" && !dismissed
  const source = useComboSource<Entry>({ items, query: text, open, creatable: true })
  const entries = useMemo(() => comboEntries(source.options, source.canCreate, false), [source.options, source.canCreate])
  const stableTags = useStableIds(tags)

  const add = (candidates: readonly string[]) => {
    const result = addTags(tags, candidates, { unique: true })
    if (result.tags.length !== tags.length) setTags(result.tags)
  }
  const write = (next: string) => {
    setText(next)
    setDismissed(false)
    moved.current = false
  }

  return (
    <Combobox.Root<string, true>
      multiple
      items={entries.ids}
      itemToStringLabel={entries.label}
      filter={null}
      name={name}
      value={stableTags}
      openOnInputClick={false}
      onValueChange={(next, details) => {
        // The tags are this component's: a picked row adds, a removed chip removes, and the primitives' own apply is refused.
        details.cancel()
        if (details.reason === "item-press") {
          const added = next.find((candidate) => !tags.includes(candidate))
          if (added === undefined) return
          add([added === CREATE_VALUE ? text : added])
          write("")
        } else if (details.reason !== "escape-key" && next.length < tags.length) setTags(next)
      }}
      inputValue={text}
      onInputValueChange={(next, details) => {
        if (details.reason !== "input-change") return
        const { pieces, rest } = splitTags(next)
        if (pieces.length > 0) add(pieces)
        write(rest)
      }}
      open={open}
      onOpenChange={(next, details) => {
        if (!next && details.reason !== "item-press") setDismissed(true)
        if (details.reason === "item-press") details.cancel()
      }}
      onItemHighlighted={(_item, details) => {
        if (details.reason !== "none") moved.current = true
      }}
    >
      <Combobox.Chips ref={setChips} className={cn(fieldClass, "w-72 flex-wrap py-[3px]")}>
        {tags.map((tag, index) => (
          <Combobox.Chip key={\`\${tag}:\${index}\`} className={chipClass}>
            <span className="truncate">{tag}</span>
            <Combobox.ChipRemove aria-label={\`Remove \${tag}\`} className="grid size-4 place-items-center rounded-sm text-muted-foreground hover:bg-foreground/10 hover:text-foreground">
              <XIcon className="size-3" />
            </Combobox.ChipRemove>
          </Combobox.Chip>
        ))}
        <Combobox.Input
          aria-label="Tags"
          spellCheck={false}
          placeholder={tags.length === 0 ? "Add a tag…" : ""}
          onKeyDown={(event) => {
            if (event.key === "Enter" && text.trim() !== "" && !(open && moved.current)) {
              event.preventBaseUIHandler()
              event.preventDefault()
              add([text])
              write("")
            } else if (event.key === "Escape" && text !== "") write("")
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false)
            if (text.trim() !== "") {
              add([text])
              write("")
            }
          }}
          className="h-5 min-w-12 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
        />
      </Combobox.Chips>
      <ComboPopup popupHeight={240} label="Tags" anchor={chips}>
        <ComboStatusBox listEmpty={source.options.length === 0 && !source.canCreate}>
          {source.options.length === 0 && !source.canCreate ? <StatusRow>No suggestions</StatusRow> : null}
        </ComboStatusBox>
        <ComboOptions rows={source.rows} selected={new Set()} query={text} mark="none" />
        {source.canCreate ? <ComboCreateRow afterOptions={source.options.length > 0}>Add “{text.trim()}”</ComboCreateRow> : null}
      </ComboPopup>
    </Combobox.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>g(()=>import(`./build-your-own-CSTLBmqk.js`),[]));var G=`import { useId, useState } from "react"
import { TagsInput } from "@kitora/collections/ui"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { Label } from "@kitora/ui/label"

export function TagInputComposeInviteForm() {
  const emailsId = useId()
  const noteId = useId()
  const [emails, setEmails] = useState<string[]>(["ada@example.com"])
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <form className="grid w-full max-w-sm gap-3" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-1.5">
          <Label htmlFor={emailsId}>Invite by email</Label>
          <TagsInput id={emailsId} value={emails} onChange={setEmails} placeholder="name@company.com" validate={(t) => t.includes("@")} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor={noteId}>Note</Label>
          <Input id={noteId} placeholder="Welcome aboard" />
        </div>
        <Button type="submit" disabled={emails.length === 0}>
          Send {emails.length} invite{emails.length === 1 ? "" : "s"}
        </Button>
      </form>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>g(()=>import(`./compose-BY-jU7Ib.js`),[]));var K=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Field, FieldDescription, FieldError, FieldLabel } from "@kitora/ui/field"
import { TagsInput } from "@kitora/collections/ui"


/** Posts with a plain \`<form>\`: \`name\` writes one hidden input per id, \`required\` refuses an empty submit, a Field's label names it. */
export function TagsInputFormSubmit() {
  const [posted, setPosted] = useState<string | null>(null)
  return (
    <form
      className="flex w-full max-w-md flex-col gap-3 text-[13px]"
      onSubmit={(event) => {
        event.preventDefault()
        setPosted(JSON.stringify([...new FormData(event.currentTarget)].map(([key, value]) => [key, String(value)])))
      }}
    >
      <Field name="labels">
        <FieldLabel>Labels</FieldLabel>
        <TagsInput defaultValue={["bug"]} required />
        <FieldDescription>Press Enter after each label.</FieldDescription>
        <FieldError match="valueMissing">Add at least one label.</FieldError>
      </Field>
      <Button type="submit" size="sm" className="self-start">
        Submit
      </Button>
      <p role="status" className="text-muted-foreground">
        FormData: <code>{posted ?? "not submitted"}</code>
      </p>
    </form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>g(()=>import(`./form-submit-Bix2z8jl.js`),[]));var q=`import { useState } from "react"
import { TagsInput } from "@kitora/collections/ui"

export function TagInputTypeEnterRepeat() {
  const [tags, setTags] = useState<string[]>(["design-system", "tanstack", "shadcn"])
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="w-full max-w-sm">
        <TagsInput value={tags} onChange={setTags} aria-label="Tags" />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>g(()=>import(`./type-enter-repeat-ChdgaiFi.js`),[]));var J={"./demos/tag-input/build-your-own.tsx":N,"./demos/tag-input/compose.tsx":R,"./demos/tag-input/form-submit.tsx":B,"./demos/tag-input/type-enter-repeat.tsx":H},Y={"./demos/tag-input/build-your-own.tsx":W,"./demos/tag-input/compose.tsx":G,"./demos/tag-input/form-submit.tsx":K,"./demos/tag-input/type-enter-repeat.tsx":q};export{J as modules,Y as sources};