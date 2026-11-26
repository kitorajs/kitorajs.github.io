import{s as e}from"./kit-docs-BUovISd0.js";import{Cc as t,Ic as n,ni as r}from"./index-B9ukmIN1.js";import{H as i,W as a}from"./messages-C_IMdr_-.js";import{A as o,c as s,g as c,h as l}from"./field-config-17kME8Vl.js";import{a as u}from"./fields-CwxxBZgA.js";import{t as d}from"./rich-text-CBMxZXVh.js";import{t as f}from"./example-BGnSQG2Y.js";import{a as p,r as m,s as h}from"./demos-Ds1NfSaA.js";import{o as g}from"./demo-fixtures-DpfwlbH0.js";var _=n(),v=40,y={title:`v2.4`,body:{type:`doc`,content:[{type:`heading`,attrs:{level:2},content:[{type:`text`,text:`What's new`}]},{type:`bulletList`,content:[{type:`listItem`,content:[{type:`paragraph`,content:[{type:`text`,text:`Builds are `},{type:`text`,text:`40% faster`,marks:[{type:`bold`}]}]}]},{type:`listItem`,content:[{type:`paragraph`,content:[{type:`text`,text:`New `},{type:`text`,text:`--dry-run`,marks:[{type:`code`}]},{type:`text`,text:` flag`}]}]}]}]}};function b(){let e=o({defaultValues:y});return(0,_.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,_.jsxs)(s,{form:e,onSubmit:g,children:[(0,_.jsx)(u,{name:`title`,label:`Release`,required:!0}),(0,_.jsx)(d,{name:`body`,label:`Notes`,required:!0,minLength:v,placeholder:`What changed?`,description:`At least ${v} characters of text. Markdown shortcuts work: ## heading, - list, **bold**.`}),(0,_.jsx)(s.Submit,{className:r({size:`sm`,className:`w-fit`}),children:`Publish`}),(0,_.jsx)(s.Status,{success:e=>(0,_.jsxs)(`p`,{className:`text-emerald-700 dark:text-emerald-400`,children:[`Published · `,e.id]})})]}),(0,_.jsx)(x,{form:e})]})}function x({form:e}){let t=l(e,e=>e.serialize(),a);return(0,_.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,_.jsx)(`div`,{className:`border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium`,children:`Live payload`}),(0,_.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)})]})}var S=`import { buttonVariants } from "@kitora/ui/button"
import { RichTextField, TextField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import type { RichTextDoc } from "@kitora/form/core"
import { deepEqual } from "@kitora/form/core"
import { mockSave, type SaveReceipt } from "@/kit/form/demo-fixtures"

type ReleaseNote = { title: string; body: RichTextDoc | null }

/** Minimum characters of text in the note body (markup does not count). */
const MIN_BODY = 40

const STARTER: RichTextDoc = {
  type: "doc",
  content: [
    { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "What's new" }] },
    {
      type: "bulletList",
      content: [
        { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Builds are " }, { type: "text", text: "40% faster", marks: [{ type: "bold" }] }] }] },
        { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "New " }, { type: "text", text: "--dry-run", marks: [{ type: "code" }] }, { type: "text", text: " flag" }] }] },
      ],
    },
  ],
}

// a JSON document; null = an empty editor, so required works
const defaultValues: ReleaseNote = { title: "v2.4", body: STARTER }

// mockSave is the gallery's stand-in: replace it with your API (POST /releases)
export function ReleaseNoteForm() {
  const form = useForm<ReleaseNote, ReleaseNote, SaveReceipt>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={mockSave}>
        <TextField name="title" label="Release" required />
        {/* JSON doc · minLength counts text, not markup (the richTextLength rule, also checked on a server) */}
        <RichTextField name="body" label="Notes" required minLength={MIN_BODY} placeholder="What changed?" description={\`At least \${MIN_BODY} characters of text. Markdown shortcuts work: ## heading, - list, **bold**.\`} />
        <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Publish</Form.Submit>
        <Form.Status<SaveReceipt> success={(r) => <p className="text-emerald-700 dark:text-emerald-400">Published · {r.id}</p>} />
      </Form>
      <Payload form={form} />
    </div>
  )
}

/** What the form would submit, live: a readout beside the form, not part of it. */
function Payload({ form }: { form: SnapshotSource & { serialize(): unknown } }) {
  const payload = useFormSnapshot(form, (s) => s.serialize(), deepEqual)
  return (
    <aside className="min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card">
      <div className="border-b bg-muted/40 px-3 py-1.5 text-[12px] font-medium">Live payload</div>
      <pre dir="ltr" tabIndex={0} className="max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed">
        {JSON.stringify(payload, null, 2)}
      </pre>
    </aside>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>t(()=>import(`./richtext-Djf-V-2C.js`),[]));var C={type:`doc`,content:[{type:`heading`,attrs:{level:2},content:[{type:`text`,text:`What's new`}]},{type:`bulletList`,content:[{type:`listItem`,content:[{type:`paragraph`,content:[{type:`text`,text:`Builds are `},{type:`text`,text:`40% faster`,marks:[{type:`bold`}]}]}]},{type:`listItem`,content:[{type:`paragraph`,content:[{type:`text`,text:`New `},{type:`text`,text:`--dry-run`,marks:[{type:`code`}]},{type:`text`,text:` flag`}]}]}]}]};function w({form:e}){let t=c(e,`body`),n=c(e,`html`);return(0,_.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,_.jsx)(p,{title:`richTextToMarkdown(body)`,children:(0,_.jsx)(`pre`,{tabIndex:0,className:`overflow-auto p-3 text-[11px] leading-relaxed whitespace-pre-wrap`,children:i(t)||`—`})}),(0,_.jsx)(p,{title:`format="html" value`,children:(0,_.jsx)(m,{value:n,maxHeight:`max-h-40`})})]})}function T(){let e=o({defaultValues:{body:C,html:`<p>Stored as <strong>HTML</strong> for a CMS that already keeps HTML.</p>`}});return(0,_.jsxs)(h,{children:[(0,_.jsxs)(s,{form:e,children:[(0,_.jsx)(d,{name:`body`,label:`Body (JSON document)`}),(0,_.jsx)(d,{name:`html`,label:`Body (HTML)`,format:`html`})]}),(0,_.jsx)(w,{form:e})]})}var E=`import { richTextToMarkdown, type FormStore, type RichTextDoc } from "@kitora/form/core"
import { RichTextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Article = { body: RichTextDoc | null; html: string | null }
type Payload = { body: string; html: string | null }

const defaultValues: Article = { body: null, html: "<p>Stored as <strong>HTML</strong></p>" }

export function ArticleForm() {
  // the stored value stays a JSON doc; the submit payload carries markdown for a markdown backend
  const form = useForm<Article, Payload>({ defaultValues, toSubmit: (v) => ({ body: richTextToMarkdown(v.body), html: v.html }) })
  return (
    <Form form={form}>
      <RichTextField name="body" label="Body (JSON document)" />
      <RichTextField name="html" label="Body (HTML)" format="html" /> {/* sanitize HTML on the server before rendering it */}
    </Form>
  )
}`;function D(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(e,{title:`Rich text`,children:[`A compact Tiptap editor as a form field. The value is a JSON document (or HTML), `,(0,_.jsx)(`code`,{children:`null`}),` when empty so `,(0,_.jsx)(`code`,{children:`required`}),` works, and length limits count text rather than markup. The editor is a separate chunk loaded the first time a rich-text field renders — it is not in the main bundle.`]}),(0,_.jsx)(f,{n:1,title:`Release notes`,blurb:`Required, a minimum length on the text, a keyboard toolbar (one tab stop, arrows move), native posting.`,code:S,children:(0,_.jsx)(b,{})}),(0,_.jsx)(f,{n:2,title:`Stored formats`,blurb:`JSON (default) or HTML; markdown as an output transform.`,code:E,children:(0,_.jsx)(T,{})})]})}export{D as component};