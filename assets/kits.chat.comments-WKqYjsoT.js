import{s as e}from"./kit-docs-CvNs0WqT.js";import{a as t,n,o as r,r as i,t as a}from"./comments-FtAeCWIv.js";import{Cc as o,Ic as s,Ko as c}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as l}from"./example-CZLJLtIC.js";import{t as u}from"./-kits.chat.shared--tJW3dQS.js";import{a as d,d as f,i as p,o as m}from"./fixtures-DW555mY5.js";var h=s(),g=[32,41,38,52,61,58,74];function _(){let e=c();return(0,h.jsx)(v,{now:e},e)}function v({now:e}){return(0,h.jsx)(t,{value:r({initial:f(e),users:m,selfId:d}),children:(0,h.jsxs)(`div`,{className:`flex h-full min-h-0`,children:[(0,h.jsxs)(`article`,{className:`min-w-0 flex-1 overflow-y-auto px-8 py-6 pr-14 text-[14px] leading-6`,children:[(0,h.jsx)(n,{id:`title`,as:`h2`,text:p.title,className:`mb-3 text-xl font-semibold tracking-tight`}),(0,h.jsx)(n,{id:`intro`,text:p.intro,className:`mb-4`}),(0,h.jsx)(a,{id:`chart`,className:`mb-4`,children:(0,h.jsxs)(`figure`,{className:`rounded-lg border bg-card p-3`,children:[(0,h.jsx)(`div`,{className:`flex h-28 items-end gap-2`,children:g.map((e,t)=>(0,h.jsx)(`div`,{className:`flex-1 rounded-t bg-primary/70`,style:{height:`${e}%`}},t))}),(0,h.jsx)(`figcaption`,{className:`mt-2 text-xs text-muted-foreground`,children:`Day-7 activation, last seven weeks`})]})}),(0,h.jsx)(n,{id:`goals-h`,as:`h3`,text:`Goals`,className:`mb-1 text-sm font-semibold`}),(0,h.jsx)(n,{id:`goals`,text:p.goals,className:`mb-4`}),(0,h.jsx)(n,{id:`risks-h`,as:`h3`,text:`Risks`,className:`mb-1 text-sm font-semibold`}),(0,h.jsx)(n,{id:`risks`,text:p.risks})]}),(0,h.jsx)(i,{className:`w-72 shrink-0 border-l bg-surface-1`,order:[`title`,`intro`,`chart`,`goals-h`,`goals`,`risks-h`,`risks`]})]})})}var y=`import { CommentableBlock, CommentableText, CommentsProvider, CommentsRail, useComments } from "@kitora/chat"
import { usePageTime } from "@kitora/primitives/react"
import { DOC_BLOCKS, SELF_ID, USERS, seedThreads } from "./fixtures"

/** Bars for the little chart block; plain data, drawn with divs. */
const BARS = [32, 41, 38, 52, 61, 58, 74] as const

/**
 * A document with Google Docs-style comments: select any text to comment on it, hover the chart
 * to comment on the whole block, click a highlight to open its thread, resolve and reopen in the
 * rail. Replying to a resolved thread reopens it.
 */
export function CommentsDocDemo() {
  // keyed on "now", fixed for the page: threads dated around the build's time in the server HTML, the visitor's right after hydration
  const now = usePageTime()
  return <CommentsDoc key={now} now={now} />
}

function CommentsDoc({ now }: { now: number }) {
  const comments = useComments({ initial: seedThreads(now), users: USERS, selfId: SELF_ID })
  return (
    <CommentsProvider value={comments}>
      <div className="flex h-full min-h-0">
        <article className="min-w-0 flex-1 overflow-y-auto px-8 py-6 pr-14 text-[14px] leading-6">
          <CommentableText id="title" as="h2" text={DOC_BLOCKS.title} className="mb-3 text-xl font-semibold tracking-tight" />
          <CommentableText id="intro" text={DOC_BLOCKS.intro} className="mb-4" />
          <CommentableBlock id="chart" className="mb-4">
            <figure className="rounded-lg border bg-card p-3">
              <div className="flex h-28 items-end gap-2">
                {BARS.map((h, i) => (
                  <div key={i} className="flex-1 rounded-t bg-primary/70" style={{ height: \`\${h}%\` }} />
                ))}
              </div>
              <figcaption className="mt-2 text-xs text-muted-foreground">Day-7 activation, last seven weeks</figcaption>
            </figure>
          </CommentableBlock>
          <CommentableText id="goals-h" as="h3" text="Goals" className="mb-1 text-sm font-semibold" />
          <CommentableText id="goals" text={DOC_BLOCKS.goals} className="mb-4" />
          <CommentableText id="risks-h" as="h3" text="Risks" className="mb-1 text-sm font-semibold" />
          <CommentableText id="risks" text={DOC_BLOCKS.risks} />
        </article>
        <CommentsRail className="w-72 shrink-0 border-l bg-surface-1" order={["title", "intro", "chart", "goals-h", "goals", "risks-h", "risks"]} />
      </div>
    </CommentsProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>o(()=>import(`./comments-doc-Ch3Tg-J4.js`),[]));function b(){return(0,h.jsxs)(`div`,{children:[(0,h.jsx)(e,{title:`Comments on content`,children:`Threads anchor to a text range (with its quote kept) or to a whole block. Overlapping ranges each keep their own highlight. Resolve hides a thread from the Open tab; a reply reopens it.`}),(0,h.jsx)(l,{n:1,title:`A commented document`,blurb:`Select text and press Comment; hover the chart for a block comment; click a highlight to jump to its thread; @ mentions in replies.`,code:y,children:(0,h.jsx)(u,{testId:`comments`,height:560,children:(0,h.jsx)(_,{})})})]})}export{b as component};