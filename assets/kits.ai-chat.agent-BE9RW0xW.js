import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{a as t,i as n}from"./trace-BHqlpFZl.js";import{t as r}from"./circle-check-CEqScjDT.js";import{t as i}from"./database-BD9gzbd-.js";import{s as a}from"./kit-docs-CvNs0WqT.js";import{t as o}from"./git-branch-DpcW4RGM.js";import{t as s}from"./mail-m_AeWWGR.js";import{S as c,_ as l,g as u,n as d,o as f,t as p}from"./-kits.ai-chat.shared-Cm3Q7IHz.js";import{Bc as m,Cc as h,Ic as g,ti as _}from"./index-9y5uwRd3.js";import{t as v}from"./json-DHhdQWqS.js";import{t as y}from"./empty-state-F8jHW6Qw.js";import"./kit-gallery-B-Yr9fP4.js";import{t as b}from"./example-CZLJLtIC.js";var x=e(m(),1),S=g(),C=new Map;function w(e,t){return new Promise((n,r)=>{C.set(e,n),t.addEventListener(`abort`,()=>r(new DOMException(`Aborted`,`AbortError`)),{once:!0})})}var T=0,E={async*stream(e,t){let n=++T;await c(300,t),yield{type:`reasoning-delta`,delta:`Plan: read the failing CI run, find the commit that broke it, open a fix branch, then email the on-call. Sending email is outward-facing, so ask first.`},yield{type:`reasoning-end`,durationMs:1600},yield{type:`tool-call`,id:`ci-${n}`,name:`ci_logs`,args:{pipeline:`web`,run:4821}},await c(900,t),yield{type:`tool-result`,id:`ci-${n}`,result:{failed:`test:e2e`,error:`Timeout waiting for #checkout`,commit:`a91f3c2`}},yield{type:`tool-call`,id:`git-${n}`,name:`git_branch`,args:{from:`a91f3c2`,name:`fix/checkout-timeout`}},await c(700,t),yield{type:`tool-result`,id:`git-${n}`,result:{branch:`fix/checkout-timeout`,files:2,additions:14,deletions:3}},yield{type:`tool-call`,id:`db-${n}`,name:`query_db`,args:{sql:`select count(*) from orders where status = 'stuck'`}},await c(600,t),yield{type:`tool-error`,id:`db-${n}`,error:`read replica unavailable (ECONNREFUSED)`};let r=`mail-${n}`;if(yield{type:`tool-call`,id:r,name:`send_email`,args:{to:`oncall@acme.dev`,subject:`CI fix ready: fix/checkout-timeout`},status:`pending`},await w(r,t)===`deny`){yield{type:`tool-error`,id:r,error:`Denied by you`},yield{type:`text-delta`,delta:"Okay — I **didn't send** the email. The fix is on `fix/checkout-timeout` (2 files, +14 −3); the stuck-orders count failed because the read replica is down."};return}yield{type:`tool-running`,id:r},await c(800,t),yield{type:`tool-result`,id:r,result:{delivered:!0,messageId:`<8f2e@acme.dev>`}},yield{type:`text-delta`,delta:"Done. The e2e failure came from commit `a91f3c2`; the fix is on **`fix/checkout-timeout`** (2 files, +14 −3) and on-call has the email. I couldn't count stuck orders — the read replica is down, so retry that later."}}},D={ci_logs:`Read CI logs`,git_branch:`Created branch`,query_db:`Queried database`,send_email:`Send email`};function O(e){let t=v(e);return t?(0,S.jsxs)(`div`,{className:`flex items-center gap-2 rounded-md border bg-muted/30 p-2 text-[12px]`,children:[(0,S.jsx)(o,{className:`size-4 text-violet-500`}),(0,S.jsx)(`span`,{className:`font-mono`,children:String(t.branch??``)}),(0,S.jsxs)(`span`,{className:`ml-auto text-emerald-700 tabular-nums dark:text-emerald-400`,children:[`+`,String(t.additions??0)]}),(0,S.jsxs)(`span`,{className:`text-red-600 tabular-nums dark:text-red-400`,children:[`−`,String(t.deletions??0)]})]}):null}var k=[{id:`ci`,title:`Fix the failing CI run`,detail:`and tell on-call`,icon:(0,S.jsx)(r,{}),prompt:`CI on web is red. Find out why, open a fix branch and email on-call.`},{id:`db`,title:`Investigate stuck orders`,detail:`reads logs and the database`,icon:(0,S.jsx)(i,{}),prompt:`Investigate the stuck orders and email on-call.`},{id:`mail`,title:`Draft an incident email`,detail:`asks before sending`,icon:(0,S.jsx)(s,{}),prompt:`Draft and send the incident email.`}];function A(){let e=l({adapter:E}),[t,n]=(0,x.useState)([]),r=(e,t)=>{C.get(e)?.(t),C.delete(e),n(n=>[...n,`${t===`allow`?`Allowed`:`Denied`} ${e}`])};return(0,S.jsx)(u,{value:e,children:(0,S.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,S.jsx)(d,{empty:(0,S.jsx)(y,{title:`Ops agent`,subtitle:`Watch tool calls move from waiting to running to done or failed. The email needs your approval.`,suggestions:k}),toolTitles:D,toolResults:{git_branch:O},onApproveTool:(e,t)=>r(t,`allow`),onDenyTool:(e,t)=>r(t,`deny`),assistantName:`Ops agent`}),(0,S.jsx)(`div`,{className:`mx-auto w-full max-w-[720px] px-4 pb-3`,children:(0,S.jsx)(f,{attachments:!1,placeholder:`Give the agent a task…`,footnote:t.length>0?(0,S.jsx)(`span`,{className:`tabular-nums`,children:t.at(-1)}):`Tools are scripted; nothing real runs.`})})]})})}var j=`import { useState } from "react"
import { CheckCircle2, Database, GitBranch, Mail } from "lucide-react"
import { ChatEmptyState, ChatMessages, ChatProvider, Composer, jsonObject, sleep, useChat, type ChatAdapter, type ChatChunk, type JsonValue, type Suggestion } from "@kitora/ai-chat"

/**
 * Human-in-the-loop approvals over the plain adapter seam: the adapter yields a \`pending\` tool call,
 * then waits on a promise the Allow / Deny buttons settle. A real backend would do the same through
 * its own endpoint; the UI only renders the chunks.
 */
type Decision = "allow" | "deny"
const waiting = new Map<string, (decision: Decision) => void>()

function decide(toolId: string, signal: AbortSignal): Promise<Decision> {
  return new Promise((resolve, reject) => {
    waiting.set(toolId, resolve)
    signal.addEventListener("abort", () => reject(new DOMException("Aborted", "AbortError")), { once: true })
  })
}

let run = 0

const agentAdapter: ChatAdapter = {
  async *stream(_request, signal): AsyncGenerator<ChatChunk> {
    const n = ++run
    await sleep(300, signal)
    yield { type: "reasoning-delta", delta: "Plan: read the failing CI run, find the commit that broke it, open a fix branch, then email the on-call. Sending email is outward-facing, so ask first." }
    yield { type: "reasoning-end", durationMs: 1600 }
    yield { type: "tool-call", id: \`ci-\${n}\`, name: "ci_logs", args: { pipeline: "web", run: 4821 } }
    await sleep(900, signal)
    yield { type: "tool-result", id: \`ci-\${n}\`, result: { failed: "test:e2e", error: "Timeout waiting for #checkout", commit: "a91f3c2" } }
    yield { type: "tool-call", id: \`git-\${n}\`, name: "git_branch", args: { from: "a91f3c2", name: "fix/checkout-timeout" } }
    await sleep(700, signal)
    yield { type: "tool-result", id: \`git-\${n}\`, result: { branch: "fix/checkout-timeout", files: 2, additions: 14, deletions: 3 } }
    yield { type: "tool-call", id: \`db-\${n}\`, name: "query_db", args: { sql: "select count(*) from orders where status = 'stuck'" } }
    await sleep(600, signal)
    yield { type: "tool-error", id: \`db-\${n}\`, error: "read replica unavailable (ECONNREFUSED)" }
    const mailId = \`mail-\${n}\`
    yield { type: "tool-call", id: mailId, name: "send_email", args: { to: "oncall@acme.dev", subject: "CI fix ready: fix/checkout-timeout" }, status: "pending" }
    const decision = await decide(mailId, signal)
    if (decision === "deny") {
      yield { type: "tool-error", id: mailId, error: "Denied by you" }
      yield { type: "text-delta", delta: "Okay — I **didn't send** the email. The fix is on \`fix/checkout-timeout\` (2 files, +14 −3); the stuck-orders count failed because the read replica is down." }
      return
    }
    yield { type: "tool-running", id: mailId }
    await sleep(800, signal)
    yield { type: "tool-result", id: mailId, result: { delivered: true, messageId: "<8f2e@acme.dev>" } }
    yield { type: "text-delta", delta: "Done. The e2e failure came from commit \`a91f3c2\`; the fix is on **\`fix/checkout-timeout\`** (2 files, +14 −3) and on-call has the email. I couldn't count stuck orders — the read replica is down, so retry that later." }
  },
}

const TOOL_TITLES = { ci_logs: "Read CI logs", git_branch: "Created branch", query_db: "Queried database", send_email: "Send email" } as const

function BranchResult(value: JsonValue) {
  const result = jsonObject(value)
  if (!result) return null
  return (
    <div className="flex items-center gap-2 rounded-md border bg-muted/30 p-2 text-[12px]">
      <GitBranch className="size-4 text-violet-500" />
      <span className="font-mono">{String(result.branch ?? "")}</span>
      <span className="ml-auto text-emerald-700 tabular-nums dark:text-emerald-400">+{String(result.additions ?? 0)}</span>
      <span className="text-red-600 tabular-nums dark:text-red-400">−{String(result.deletions ?? 0)}</span>
    </div>
  )
}

const SUGGESTIONS: readonly Suggestion[] = [
  { id: "ci", title: "Fix the failing CI run", detail: "and tell on-call", icon: <CheckCircle2 />, prompt: "CI on web is red. Find out why, open a fix branch and email on-call." },
  { id: "db", title: "Investigate stuck orders", detail: "reads logs and the database", icon: <Database />, prompt: "Investigate the stuck orders and email on-call." },
  { id: "mail", title: "Draft an incident email", detail: "asks before sending", icon: <Mail />, prompt: "Draft and send the incident email." },
]

/** An agent run: reasoning, four tools (one fails), and an email that waits for your Allow or Deny. */
export function AgentRun() {
  const chat = useChat({ adapter: agentAdapter })
  const [log, setLog] = useState<readonly string[]>([])
  const settle = (toolId: string, decision: Decision) => {
    waiting.get(toolId)?.(decision)
    waiting.delete(toolId)
    setLog((l) => [...l, \`\${decision === "allow" ? "Allowed" : "Denied"} \${toolId}\`])
  }
  return (
    <ChatProvider value={chat}>
      <div className="flex h-full flex-col">
        <ChatMessages
          empty={<ChatEmptyState title="Ops agent" subtitle="Watch tool calls move from waiting to running to done or failed. The email needs your approval." suggestions={SUGGESTIONS} />}
          toolTitles={TOOL_TITLES}
          toolResults={{ git_branch: BranchResult }}
          onApproveTool={(_messageId, toolId) => settle(toolId, "allow")}
          onDenyTool={(_messageId, toolId) => settle(toolId, "deny")}
          assistantName="Ops agent"
        />
        <div className="mx-auto w-full max-w-[720px] px-4 pb-3">
          <Composer attachments={false} placeholder="Give the agent a task…" footnote={log.length > 0 ? <span className="tabular-nums">{log.at(-1)}</span> : "Tools are scripted; nothing real runs."} />
        </div>
      </div>
    </ChatProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>h(()=>import(`./agent-BOeSiSmD.js`),[]));var M=[`Read the failing CI run`,`Find the commit that broke it`,`Open a fix branch`,`Rerun the e2e suite`,`Email on-call`],N=[`checkout.spec.ts`,`cart.spec.ts`,`login.spec.ts`,`search.spec.ts`,`profile.spec.ts`];function P(e,t){return e<t?`done`:e===t?`running`:`pending`}function F(){let[e,r]=(0,x.useState)(1),i=M.map((t,n)=>({id:String(n),title:t,status:P(n,e)})),a=N.map((t,n)=>({id:t,title:t,status:e<3?`queued`:e>3||n<2?`done`:n===2?`running`:`queued`}));return(0,S.jsxs)(`div`,{className:`flex h-full flex-col gap-3 overflow-y-auto p-4`,children:[(0,S.jsx)(n,{steps:i,title:`Fix the failing CI run`,announce:!0}),(0,S.jsx)(t,{items:a,title:`e2e files`}),(0,S.jsxs)(`div`,{className:`flex gap-2`,children:[(0,S.jsx)(_,{size:`sm`,variant:`outline`,disabled:e>=M.length,onClick:()=>r(e=>e+1),children:`Next step`}),(0,S.jsx)(_,{size:`sm`,variant:`ghost`,onClick:()=>r(1),children:`Restart`})]})]})}var I=`import { useState } from "react"
import { TracePlan, TraceQueue, type TracePlanStep, type TraceQueueItem, type TraceStatus } from "@kitora/ai-chat"
import { Button } from "@kitora/ui/button"

const PLAN = ["Read the failing CI run", "Find the commit that broke it", "Open a fix branch", "Rerun the e2e suite", "Email on-call"] as const
const FILES = ["checkout.spec.ts", "cart.spec.ts", "login.spec.ts", "search.spec.ts", "profile.spec.ts"] as const

/** Plan step n is done once the run is past it, running while it is on it, waiting after. */
function statusAt(index: number, at: number): TraceStatus {
  return index < at ? "done" : index === at ? "running" : "pending"
}

/**
 * An agent's plan and its work queue, outside a transcript: the plan says "Step 2 of 5 done" politely as steps finish
 * (\`announce\`), and the queue folds finished test files into one count. Next step moves the run on.
 */
export function AgentPlan() {
  const [at, setAt] = useState(1)
  const plan: readonly TracePlanStep[] = PLAN.map((title, i) => ({ id: String(i), title, status: statusAt(i, at) }))
  const files: readonly TraceQueueItem[] = FILES.map((title, i) => ({ id: title, title, status: at < 3 ? "queued" : at > 3 ? "done" : i < 2 ? "done" : i === 2 ? "running" : "queued" }))
  return (
    <div className="flex h-full flex-col gap-3 overflow-y-auto p-4">
      <TracePlan steps={plan} title="Fix the failing CI run" announce />
      <TraceQueue items={files} title="e2e files" />
      <div className="flex gap-2">
        <Button size="sm" variant="outline" disabled={at >= PLAN.length} onClick={() => setAt((n) => n + 1)}>
          Next step
        </Button>
        <Button size="sm" variant="ghost" onClick={() => setAt(1)}>
          Restart
        </Button>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>h(()=>import(`./agent-plan-DJGOzWAe.js`),[]));function L(){return(0,S.jsxs)(`div`,{children:[(0,S.jsx)(a,{title:`Agent run`,children:`Tool calls stream in as cards that move through waiting, running, done and failed. Click a card to see its input and result; the branch tool renders a custom result card.`}),(0,S.jsx)(b,{n:1,title:`Tools with an approval step`,blurb:"The adapter yields a pending `send_email` call and waits for Allow or Deny, which the host passes back. Stop while it waits and the call settles as failed.",code:j,children:(0,S.jsx)(p,{testId:`agent`,height:620,children:(0,S.jsx)(A,{})})}),(0,S.jsx)(b,{n:2,title:`A plan and a work queue`,blurb:"`TracePlan` numbers the steps, says “1 of 5 done” and, outside a transcript, reads each finished step politely (`announce`); `TraceQueue` folds finished items into one count. Next step moves the run on.",code:I,children:(0,S.jsx)(p,{testId:`agent-plan`,height:520,children:(0,S.jsx)(F,{})})})]})}export{L as component};