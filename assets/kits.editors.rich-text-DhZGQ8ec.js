import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./calendar-days-D1rxO_ek.js";import{t as n}from"./clipboard-list-kfV-4kMV.js";import{s as r}from"./kit-docs-Cf27Kpa-.js";import{C as i,o as a}from"./editor-BBqZ0Dht.js";import{t as o}from"./lightbulb-DhdsZ3Gj.js";import{t as s}from"./send-LrSHgWxY.js";import{t as c}from"./rank-SsRXWqe_.js";import{Ec as l,Uc as u,ri as d,zc as f}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as p}from"./example-B67lLz1F.js";import{t as m}from"./preview-BcGYAfGt.js";import{t as h}from"./-kits.editors.shared-BZC8f-J8.js";var g=e(u(),1),_=f(),v=[{id:`ada`,label:`Ada Lovelace`,description:`Engineering lead`},{id:`grace`,label:`Grace Hopper`,description:`Platform`},{id:`alan`,label:`Alan Turing`,description:`Research`},{id:`katherine`,label:`Katherine Johnson`,description:`Data`},{id:`margaret`,label:`Margaret Hamilton`,description:`Reliability`},{id:`linus`,label:`Linus Torvalds`,description:`Infrastructure`},{id:`barbara`,label:`Barbara Liskov`,description:`API design`},{id:`dennis`,label:`Dennis Ritchie`,description:`Tooling`}],y=120;async function b(e){return await new Promise(e=>setTimeout(e,y)),c(v.map(e=>({...e,title:e.label,keywords:[e.description??``]})),e,6)}var x=[{id:1,author:`Grace Hopper`,markdown:`Staging looks good. **One blocker**: paste from Google Docs keeps the font colours.`,time:`10:02`},{id:2,author:`Ada Lovelace`,markdown:"Fixed in the paste rules, see `clipboard.ts`. @Grace Hopper can you re-check?",time:`10:15`}];function S(){let e=(0,g.useRef)(null),[t,n]=(0,g.useState)(x),[r,i]=(0,g.useState)(!0),o=()=>{let t=e.current?.getMarkdown().trim()??``;if(t===``)return;let r=new Date;n(e=>[...e,{id:e.length+1,author:`You`,markdown:t,time:`${r.getHours()}:${String(r.getMinutes()).padStart(2,`0`)}`}]),e.current?.editor?.commands.clearContent(!0)};return(0,_.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,_.jsx)(`ol`,{className:`min-h-0 flex-1 space-y-3 overflow-y-auto p-3`,"aria-label":`Thread`,children:t.map(e=>(0,_.jsxs)(`li`,{className:`flex gap-2`,children:[(0,_.jsx)(`span`,{className:`grid size-6 shrink-0 place-items-center rounded-full bg-primary/15 text-[10px] font-semibold text-primary`,children:e.author.slice(0,2).toUpperCase()}),(0,_.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,_.jsxs)(`div`,{className:`flex items-baseline gap-2 text-[12px]`,children:[(0,_.jsx)(`span`,{className:`font-medium`,children:e.author}),(0,_.jsx)(`span`,{className:`text-muted-foreground tabular-nums`,children:e.time})]}),(0,_.jsx)(m,{markdown:e.markdown})]})]},e.id))}),(0,_.jsxs)(`div`,{role:`group`,"aria-label":`New comment`,className:`border-t border-border p-2`,onKeyDown:e=>{e.key===`Enter`&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),o())},children:[(0,_.jsx)(a,{ref:e,toolbar:!1,statusBar:!1,mentions:b,placeholder:`Reply… (@ to mention, / for blocks, ⌘Enter to send)`,label:`Reply`,minHeight:56,maxHeight:160,onChange:e=>i(e.isEmpty)}),(0,_.jsxs)(`div`,{className:`mt-1.5 flex items-center justify-between text-[11px] text-muted-foreground`,children:[(0,_.jsx)(`span`,{children:"Markdown shortcuts work: **bold**, _italic_, `code`, - list"}),(0,_.jsxs)(d,{type:`button`,size:`sm`,onClick:o,disabled:r,children:[(0,_.jsx)(s,{className:`size-3.5`}),`Send`]})]})]})]})}var C=`import { useRef, useState } from "react"
import { Send } from "lucide-react"
import { RichTextEditor, type MentionItem, type RichTextEditorHandle } from "@kitora/editors/rich-text"
import { MarkdownPreview } from "@kitora/editors/markdown"
import { rankItems } from "@kitora/editors"
import { Button } from "@kitora/ui/button"

/** The team the demo mentions (stub: replace with your directory). */
const PEOPLE: readonly MentionItem[] = [
  { id: "ada", label: "Ada Lovelace", description: "Engineering lead" },
  { id: "grace", label: "Grace Hopper", description: "Platform" },
  { id: "alan", label: "Alan Turing", description: "Research" },
  { id: "katherine", label: "Katherine Johnson", description: "Data" },
  { id: "margaret", label: "Margaret Hamilton", description: "Reliability" },
  { id: "linus", label: "Linus Torvalds", description: "Infrastructure" },
  { id: "barbara", label: "Barbara Liskov", description: "API design" },
  { id: "dennis", label: "Dennis Ritchie", description: "Tooling" },
]

/** Pretend server latency for the async mention search, in ms. */
const SEARCH_LATENCY_MS = 120

/** An async people search, the shape a real directory lookup has (stub: replace with your API). */
async function searchPeople(query: string): Promise<readonly MentionItem[]> {
  await new Promise((resolve) => setTimeout(resolve, SEARCH_LATENCY_MS))
  return rankItems(PEOPLE.map((person) => ({ ...person, title: person.label, keywords: [person.description ?? ""] })), query, 6)
}

interface Comment {
  readonly id: number
  readonly author: string
  readonly markdown: string
  readonly time: string
}

const THREAD: readonly Comment[] = [
  { id: 1, author: "Grace Hopper", markdown: "Staging looks good. **One blocker**: paste from Google Docs keeps the font colours.", time: "10:02" },
  { id: 2, author: "Ada Lovelace", markdown: "Fixed in the paste rules, see \`clipboard.ts\`. @Grace Hopper can you re-check?", time: "10:15" },
]

/**
 * A comment box in the Linear / Slack style: no toolbar (the bubble menu and markdown shortcuts
 * format), "@" mentions, "/" blocks, ⌘Enter sends. Comments are stored as markdown and shown
 * with the safe renderer.
 */
export function CommentComposer() {
  const editor = useRef<RichTextEditorHandle>(null)
  const [comments, setComments] = useState(THREAD)
  const [empty, setEmpty] = useState(true)
  const send = (): void => {
    const markdown = editor.current?.getMarkdown().trim() ?? ""
    if (markdown === "") return
    const now = new Date()
    setComments((list) => [...list, { id: list.length + 1, author: "You", markdown, time: \`\${now.getHours()}:\${String(now.getMinutes()).padStart(2, "0")}\` }])
    editor.current?.editor?.commands.clearContent(true)
  }
  return (
    <div className="flex h-full flex-col">
      <ol className="min-h-0 flex-1 space-y-3 overflow-y-auto p-3" aria-label="Thread">
        {comments.map((comment) => (
          <li key={comment.id} className="flex gap-2">
            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/15 text-[10px] font-semibold text-primary">{comment.author.slice(0, 2).toUpperCase()}</span>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2 text-[12px]">
                <span className="font-medium">{comment.author}</span>
                <span className="text-muted-foreground tabular-nums">{comment.time}</span>
              </div>
              <MarkdownPreview markdown={comment.markdown} />
            </div>
          </li>
        ))}
      </ol>
      {/* a group around the composer that turns ⌘/Ctrl+Enter inside it into "send" */}
      <div
        role="group"
        aria-label="New comment"
        className="border-t border-border p-2"
        onKeyDown={(event) => {
          if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
            event.preventDefault()
            send()
          }
        }}
      >
        <RichTextEditor
          ref={editor}
          toolbar={false}
          statusBar={false}
          mentions={searchPeople}
          placeholder="Reply… (@ to mention, / for blocks, ⌘Enter to send)"
          label="Reply"
          minHeight={56}
          maxHeight={160}
          onChange={(current) => setEmpty(current.isEmpty)}
        />
        <div className="mt-1.5 flex items-center justify-between text-[11px] text-muted-foreground">
          <span>Markdown shortcuts work: **bold**, _italic_, \`code\`, - list</span>
          <Button type="button" size="sm" onClick={send} disabled={empty}>
            <Send className="size-3.5" />
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>l(()=>import(`./comment-composer-Cr6e2C5l.js`),[]));var w=[{id:`meeting-notes`,title:`Meeting notes`,description:`Attendees, agenda and action items`,keywords:[`template`,`standup`,`sync`],group:`Templates`,icon:n,run:({editor:e,range:t})=>e.chain().focus().deleteRange(t).insertContent(`<h2>Meeting notes</h2><p><strong>Attendees:</strong> </p><h3>Agenda</h3><ol><li><p></p></li></ol><h3>Action items</h3><ul data-type="taskList"><li data-type="taskItem" data-checked="false"><p></p></li></ul>`).run()},{id:`today`,title:`Today's date`,description:`Insert the current date`,keywords:[`date`,`now`,`time`],group:`Templates`,icon:t,run:({editor:e,range:t})=>e.chain().focus().deleteRange(t).insertContent(new Date().toLocaleDateString(void 0,{dateStyle:`long`})).run()},{id:`idea`,title:`Idea`,description:`A quote block that starts with 💡`,keywords:[`callout`,`tip`,`note`],group:`Templates`,icon:o,run:({editor:e,range:t})=>e.chain().focus().deleteRange(t).insertContent(`<blockquote><p>💡 </p></blockquote>`).run()}];function T(){return(0,_.jsx)(a,{slashItems:[...w,...i],defaultContent:`<p>Type <code>/meet</code> on the next line.</p><p></p>`,minHeight:180})}var E=`import { CalendarDays, ClipboardList, Lightbulb } from "lucide-react"
import { DEFAULT_SLASH_ITEMS, RichTextEditor, type SlashItem } from "@kitora/editors/rich-text"

/** Host-specific blocks, listed first; the built-in ones follow. */
const TEAM_ITEMS: readonly SlashItem[] = [
  {
    id: "meeting-notes",
    title: "Meeting notes",
    description: "Attendees, agenda and action items",
    keywords: ["template", "standup", "sync"],
    group: "Templates",
    icon: ClipboardList,
    run: ({ editor, range }) =>
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .insertContent("<h2>Meeting notes</h2><p><strong>Attendees:</strong> </p><h3>Agenda</h3><ol><li><p></p></li></ol><h3>Action items</h3><ul data-type=\\"taskList\\"><li data-type=\\"taskItem\\" data-checked=\\"false\\"><p></p></li></ul>")
        .run(),
  },
  {
    id: "today",
    title: "Today's date",
    description: "Insert the current date",
    keywords: ["date", "now", "time"],
    group: "Templates",
    icon: CalendarDays,
    run: ({ editor, range }) => editor.chain().focus().deleteRange(range).insertContent(new Date().toLocaleDateString(undefined, { dateStyle: "long" })).run(),
  },
  {
    id: "idea",
    title: "Idea",
    description: "A quote block that starts with 💡",
    keywords: ["callout", "tip", "note"],
    group: "Templates",
    icon: Lightbulb,
    run: ({ editor, range }) => editor.chain().focus().deleteRange(range).insertContent("<blockquote><p>💡 </p></blockquote>").run(),
  },
]

/** Your own slash items: any data with a title, an icon and a \`run\`. Type "/meet" or "/date". */
export function CustomSlashItems() {
  return <RichTextEditor slashItems={[...TEAM_ITEMS, ...DEFAULT_SLASH_ITEMS]} defaultContent="<p>Type <code>/meet</code> on the next line.</p><p></p>" minHeight={180} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>l(()=>import(`./custom-slash-BsdfmAGX.js`),[]));function D(){return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(r,{title:`Rich text`,children:`The same editor shaped for two jobs: a compact reply box, and a document with your own blocks in the slash menu.`}),(0,_.jsx)(p,{n:1,title:`A comment composer`,blurb:`No toolbar: the bubble menu and markdown shortcuts format. @ mentions search asynchronously; ⌘Enter sends, and the thread renders the stored markdown.`,code:C,children:(0,_.jsx)(h,{testId:`comment-composer`,height:420,className:`overflow-hidden rounded-lg border border-border`,children:(0,_.jsx)(S,{})})}),(0,_.jsx)(p,{n:2,title:`Custom slash items`,blurb:`Templates and dynamic content as plain data, listed before the built-in blocks and ranked by the same type-ahead.`,code:E,children:(0,_.jsx)(h,{testId:`custom-slash`,children:(0,_.jsx)(T,{})})})]})}export{D as component};