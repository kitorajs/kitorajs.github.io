import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{a as n,l as r,o as i,r as a,t as o}from"./confirm-CQ9jnarK.js";import{t as s}from"./popconfirm-CqS-a_kN.js";import{n as c}from"./presets-HOFCkHuH.js";import{Bc as l,Cc as u,Cn as d,Ic as f,Pn as p,ti as m,wn as h}from"./index-q72zUtm9.js";import"./kit-gallery-Atvibnty.js";import{t as g}from"./example-B8EaWveR.js";var _=e(l(),1),v=f();function y(e){return e.status===`resolved`?`resolved ${JSON.stringify(e.value)}`:`dismissed (${e.reason})`}function b({id:e,result:t,children:n}){return(0,v.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,children:[n,(0,v.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`last result`,` `,(0,v.jsx)(`b`,{className:`text-foreground`,"data-result":e,children:t})]})]})}function x(){let[e,t]=(0,_.useState)(`—`);return(0,v.jsx)(d,{children:(0,v.jsx)(b,{id:`destructive`,result:e,children:(0,v.jsx)(a,{trigger:(0,v.jsx)(m,{size:`sm`,variant:`destructive`,children:`Delete project…`}),title:`Delete “Website redesign”?`,description:`The project, its 42 tasks and their history are removed. This cannot be undone.`,destructive:!0,confirmLabel:`Delete project`,onResult:e=>t(y(e))})})})}var S=`import { useState, type ReactNode } from "react"
import { Confirm, EnsureOverlayUi, type OverlayResult } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"

// Destructive confirm (O1): alertdialog, no outside dismiss, focus starts on Cancel.
/** \`resolved true\` / \`dismissed (escape)\`: what the opener got back. */
function describe<R>(r: OverlayResult<R>): string {
  return r.status === "resolved" ? \`resolved \${JSON.stringify(r.value)}\` : \`dismissed (\${r.reason})\`
}

/** The trigger row of an example plus what the opener last got back. */
function Row({ id, result, children }: { id: string; result: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]">
      {children}
      <span className="text-muted-foreground tabular-nums">
        last result{" "}
        <b className="text-foreground" data-result={id}>
          {result}
        </b>
      </span>
    </div>
  )
}

export function DeleteProjectDemo() {
  const [result, setResult] = useState("—")
  return (
    <EnsureOverlayUi>
      <Row id="destructive" result={result}>
        <Confirm
          trigger={
            <Button size="sm" variant="destructive">
              Delete project…
            </Button>
          }
          title="Delete “Website redesign”?"
          description="The project, its 42 tasks and their history are removed. This cannot be undone."
          destructive
          confirmLabel="Delete project"
          onResult={(r) => setResult(describe(r))}
        />
      </Row>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>u(()=>import(`./confirm-destructive-B3qyrk4R.js`),[]));var C=600,w=()=>new Promise(e=>setTimeout(e,C));function T(e){return e.status===`resolved`?`resolved ${JSON.stringify(e.value)}`:`dismissed (${e.reason})`}function E({id:e,result:t,children:n}){return(0,v.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,children:[n,(0,v.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`last result`,` `,(0,v.jsx)(`b`,{className:`text-foreground`,"data-result":e,children:t})]})]})}function D(){let[e,t]=(0,_.useState)(`—`),[n,r]=(0,_.useState)(0);return(0,v.jsx)(d,{children:(0,v.jsx)(E,{id:`async`,result:e,children:(0,v.jsx)(a,{trigger:(0,v.jsx)(m,{size:`sm`,variant:`outline`,children:`Archive 3 projects…`}),title:`Archive 3 projects?`,description:`Archived projects are read-only and hidden from the sidebar.`,confirmLabel:`Archive`,action:async()=>{await w();let e=n+1;if(r(e),e%2==1)throw Error(`The server timed out. Nothing was archived.`)},onResult:e=>t(T(e))})})})}var O=`import { useState, type ReactNode } from "react"
import { Confirm, EnsureOverlayUi, type OverlayResult } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"

// Async confirm with busy and retry (O2): The first attempt fails after 600 ms and the error stays inline; Retry succeeds. Escape and Cancel are refused while busy.

const LATENCY_MS = 600

const wait = () => new Promise<void>((r) => setTimeout(r, LATENCY_MS))

/** \`resolved true\` / \`dismissed (escape)\`: what the opener got back. */
function describe<R>(r: OverlayResult<R>): string {
  return r.status === "resolved" ? \`resolved \${JSON.stringify(r.value)}\` : \`dismissed (\${r.reason})\`
}

/** The trigger row of an example plus what the opener last got back. */
function Row({ id, result, children }: { id: string; result: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]">
      {children}
      <span className="text-muted-foreground tabular-nums">
        last result{" "}
        <b className="text-foreground" data-result={id}>
          {result}
        </b>
      </span>
    </div>
  )
}

export function ArchiveDemo() {
  const [result, setResult] = useState("—")
  const [attempts, setAttempts] = useState(0)
  return (
    <EnsureOverlayUi>
      <Row id="async" result={result}>
        <Confirm
          trigger={
            <Button size="sm" variant="outline">
              Archive 3 projects…
            </Button>
          }
          title="Archive 3 projects?"
          description="Archived projects are read-only and hidden from the sidebar."
          confirmLabel="Archive"
          action={async () => {
            await wait()
            const n = attempts + 1
            setAttempts(n)
            if (n % 2 === 1) throw new Error("The server timed out. Nothing was archived.")
          }}
          onResult={(r) => setResult(describe(r))}
        />
      </Row>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>u(()=>import(`./confirm-async-CqMHphfA.js`),[]));var k=600,A=()=>new Promise(e=>setTimeout(e,k));function j(e){return e.status===`resolved`?`resolved ${JSON.stringify(e.value)}`:`dismissed (${e.reason})`}function M({id:e,result:t,children:n}){return(0,v.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,children:[n,(0,v.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`last result`,` `,(0,v.jsx)(`b`,{className:`text-foreground`,"data-result":e,children:t})]})]})}function N(){let[e,t]=(0,_.useState)(`—`);return(0,v.jsx)(d,{children:(0,v.jsx)(M,{id:`type`,result:e,children:(0,v.jsx)(a,{trigger:(0,v.jsx)(m,{size:`sm`,variant:`destructive`,children:`Delete repository…`}),title:`Delete ubgo/kitora?`,description:`All branches, issues and releases are deleted permanently.`,destructive:!0,requireText:`ubgo/kitora`,confirmLabel:`Delete repository`,action:A,onResult:e=>t(j(e))})})})}var P=`import { useState, type ReactNode } from "react"
import { Confirm, EnsureOverlayUi, type OverlayResult } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"

// Type to confirm (O4): The action stays disabled until the repository name is typed exactly.

const LATENCY_MS = 600

const wait = () => new Promise<void>((r) => setTimeout(r, LATENCY_MS))

/** \`resolved true\` / \`dismissed (escape)\`: what the opener got back. */
function describe<R>(r: OverlayResult<R>): string {
  return r.status === "resolved" ? \`resolved \${JSON.stringify(r.value)}\` : \`dismissed (\${r.reason})\`
}

/** The trigger row of an example plus what the opener last got back. */
function Row({ id, result, children }: { id: string; result: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]">
      {children}
      <span className="text-muted-foreground tabular-nums">
        last result{" "}
        <b className="text-foreground" data-result={id}>
          {result}
        </b>
      </span>
    </div>
  )
}

export function DeleteRepositoryDemo() {
  const [result, setResult] = useState("—")
  return (
    <EnsureOverlayUi>
      <Row id="type" result={result}>
        <Confirm
          trigger={
            <Button size="sm" variant="destructive">
              Delete repository…
            </Button>
          }
          title="Delete ubgo/kitora?"
          description="All branches, issues and releases are deleted permanently."
          destructive
          requireText="ubgo/kitora"
          confirmLabel="Delete repository"
          action={wait}
          onResult={(r) => setResult(describe(r))}
        />
      </Row>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>u(()=>import(`./confirm-type-BC4pddVJ.js`),[]));var ee=()=>new Promise(e=>setTimeout(e,600));function F(){let e=p(),t=r({action:ee,requireText:`archive`});return(0,v.jsxs)(`div`,{className:`grid gap-3 text-[13px]`,children:[(0,v.jsxs)(`p`,{className:`text-muted-foreground`,children:[`The project becomes read-only. Type “archive” to go on, or press `,e.cancel,`.`]}),(0,v.jsx)(i,{model:t}),(0,v.jsx)(`div`,{className:`flex justify-end gap-2`,children:(0,v.jsx)(n,{model:t,destructive:!1,confirmLabel:`Archive project`,focus:`action`})})]})}function I(){let[e,t]=(0,_.useState)(`—`);return(0,v.jsx)(d,{children:(0,v.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,children:[(0,v.jsx)(c,{trigger:(0,v.jsx)(m,{size:`sm`,variant:`outline`,children:`Archive project…`}),title:`Archive project?`,size:`sm`,onResult:e=>t(e.status===`resolved`?`resolved ${JSON.stringify(e.value)}`:`dismissed (${e.reason})`),children:(0,v.jsx)(F,{})}),(0,v.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`last result`,` `,(0,v.jsx)(`b`,{className:`text-foreground`,"data-result":`compose`,children:e})]})]})})}var L=`import { useState } from "react"
import { ConfirmButtons, ConfirmFields, EnsureOverlayUi, Modal, useConfirmModel, useUiMessages, type OverlayResult } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"

const wait = () => new Promise<void>((r) => setTimeout(r, 600))

/**
 * A confirm surface of your own on the parts \`Confirm\` and \`Popconfirm\` share: \`useConfirmModel\` (the typed-text gate, the async action, busy
 * and retry), \`ConfirmFields\` (the text box and the inline error) and \`ConfirmButtons\` (Cancel and the action), here inside a plain \`Modal\`
 * with a note of its own; \`useUiMessages\` reads the kit's strings in the page's language.
 */
function ArchiveBody() {
  const messages = useUiMessages()
  const model = useConfirmModel({ action: wait, requireText: "archive" })
  return (
    <div className="grid gap-3 text-[13px]">
      <p className="text-muted-foreground">The project becomes read-only. Type “archive” to go on, or press {messages.cancel}.</p>
      <ConfirmFields model={model} />
      <div className="flex justify-end gap-2">
        <ConfirmButtons model={model} destructive={false} confirmLabel="Archive project" focus="action" />
      </div>
    </div>
  )
}

export function ComposeConfirmDemo() {
  const [result, setResult] = useState("—")
  return (
    <EnsureOverlayUi>
      <div className="flex flex-wrap items-center gap-2 text-[13px]">
        <Modal<boolean>
          trigger={
            <Button size="sm" variant="outline">
              Archive project…
            </Button>
          }
          title="Archive project?"
          size="sm"
          onResult={(r: OverlayResult<boolean>) => setResult(r.status === "resolved" ? \`resolved \${JSON.stringify(r.value)}\` : \`dismissed (\${r.reason})\`)}
        >
          <ArchiveBody />
        </Modal>
        <span className="text-muted-foreground tabular-nums">
          last result{" "}
          <b className="text-foreground" data-result="compose">
            {result}
          </b>
        </span>
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>u(()=>import(`./confirm-compose-CgXNTGbr.js`),[]));function R(e){return e.status===`resolved`?`resolved ${JSON.stringify(e.value)}`:`dismissed (${e.reason})`}function z({id:e,result:t,children:n}){return(0,v.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,children:[n,(0,v.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`last result`,` `,(0,v.jsx)(`b`,{className:`text-foreground`,"data-result":e,children:t})]})]})}function B(){let[e,t]=(0,_.useState)(`—`);return(0,v.jsx)(d,{children:(0,v.jsx)(z,{id:`choose`,result:e,children:(0,v.jsx)(o,{trigger:(0,v.jsx)(m,{size:`sm`,variant:`outline`,children:`Close document…`}),title:`Save changes to “Q3 plan”?`,description:`Your changes are lost if you don’t save them.`,options:[{value:`discard`,label:`Don’t save`,tone:`destructive`},{value:`save`,label:`Save`,tone:`default`}],onResult:e=>t(R(e))})})})}var V=`import { useState, type ReactNode } from "react"
import { Choose, EnsureOverlayUi, type OverlayResult } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"

// Choose one of three (O5): The result is a closed set, not a boolean: save, discard, or dismissed.

/** \`resolved true\` / \`dismissed (escape)\`: what the opener got back. */
function describe<R>(r: OverlayResult<R>): string {
  return r.status === "resolved" ? \`resolved \${JSON.stringify(r.value)}\` : \`dismissed (\${r.reason})\`
}

/** The trigger row of an example plus what the opener last got back. */
function Row({ id, result, children }: { id: string; result: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]">
      {children}
      <span className="text-muted-foreground tabular-nums">
        last result{" "}
        <b className="text-foreground" data-result={id}>
          {result}
        </b>
      </span>
    </div>
  )
}

type CloseChoice = "save" | "discard"

export function CloseDocumentDemo() {
  const [result, setResult] = useState("—")
  return (
    <EnsureOverlayUi>
      <Row id="choose" result={result}>
        <Choose<CloseChoice>
          trigger={
            <Button size="sm" variant="outline">
              Close document…
            </Button>
          }
          title="Save changes to “Q3 plan”?"
          description="Your changes are lost if you don’t save them."
          options={[
            { value: "discard", label: "Don’t save", tone: "destructive" },
            { value: "save", label: "Save", tone: "default" },
          ]}
          onResult={(r) => setResult(describe(r))}
        />
      </Row>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>u(()=>import(`./confirm-choose-BT-bjCgF.js`),[]));function H(e){return e.status===`resolved`?`resolved ${JSON.stringify(e.value)}`:`dismissed (${e.reason})`}function U({id:e,result:t,children:n}){return(0,v.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,children:[n,(0,v.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`last result`,` `,(0,v.jsx)(`b`,{className:`text-foreground`,"data-result":e,children:t})]})]})}function W(){let[e,t]=(0,_.useState)(`—`);return(0,v.jsx)(d,{children:(0,v.jsx)(U,{id:`responsive`,result:e,children:(0,v.jsx)(a,{trigger:(0,v.jsx)(m,{size:`sm`,variant:`outline`,children:`Sign out…`}),surface:{base:`bottom-sheet`,sm:`center`},title:`Sign out of all devices?`,description:`You will need to sign in again on every device.`,confirmLabel:`Sign out`,onResult:e=>t(H(e))})})})}var G=`import { useState, type ReactNode } from "react"
import { Confirm, EnsureOverlayUi, type OverlayResult } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"

// Confirm as a bottom sheet on phones: Same alertdialog; below sm it renders as a bottom sheet (swipe down dismisses).

/** \`resolved true\` / \`dismissed (escape)\`: what the opener got back. */
function describe<R>(r: OverlayResult<R>): string {
  return r.status === "resolved" ? \`resolved \${JSON.stringify(r.value)}\` : \`dismissed (\${r.reason})\`
}

/** The trigger row of an example plus what the opener last got back. */
function Row({ id, result, children }: { id: string; result: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[13px]">
      {children}
      <span className="text-muted-foreground tabular-nums">
        last result{" "}
        <b className="text-foreground" data-result={id}>
          {result}
        </b>
      </span>
    </div>
  )
}

export function SignOutDemo() {
  const [result, setResult] = useState("—")
  return (
    <EnsureOverlayUi>
      <Row id="responsive" result={result}>
        <Confirm
          trigger={
            <Button size="sm" variant="outline">
              Sign out…
            </Button>
          }
          surface={{ base: "bottom-sheet", sm: "center" }}
          title="Sign out of all devices?"
          description="You will need to sign in again on every device."
          confirmLabel="Sign out"
          onResult={(r) => setResult(describe(r))}
        />
      </Row>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>u(()=>import(`./confirm-responsive-BEzQb8oS.js`),[]));function K(){let[e,t]=(0,_.useState)(`—`);return(0,v.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3 text-[13px]`,children:[(0,v.jsx)(s,{trigger:(0,v.jsx)(m,{size:`sm`,variant:`outline`,children:`Delete branch`}),title:`Delete feature/login?`,description:`Open pull requests from it are closed.`,destructive:!0,confirmLabel:`Delete`,action:()=>new Promise(e=>setTimeout(e,700)),onConfirm:()=>t(`deleted`),onCancel:()=>t(`kept`)}),(0,v.jsxs)(`span`,{className:`text-muted-foreground`,children:[`last: `,(0,v.jsx)(`b`,{className:`text-foreground`,children:e})]})]})}var q=`import { useState } from "react"
import { Popconfirm } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"

/** The anchored confirm: the same confirm model as the modal one, next to its trigger. Focus starts on Cancel; Escape or a press outside cancels; focus returns to the trigger. */
export function AnchoredConfirmDemo() {
  const [last, setLast] = useState("—")
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 text-[13px]">
      <Popconfirm
        trigger={
          <Button size="sm" variant="outline">
            Delete branch
          </Button>
        }
        title="Delete feature/login?"
        description="Open pull requests from it are closed."
        destructive
        confirmLabel="Delete"
        action={() => new Promise<void>((resolve) => setTimeout(resolve, 700))}
        onConfirm={() => setLast("deleted")}
        onCancel={() => setLast("kept")}
      />
      <span className="text-muted-foreground">
        last: <b className="text-foreground">{last}</b>
      </span>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>u(()=>import(`./confirm-anchored-D_93riVN.js`),[]));function J(){return(0,v.jsx)(g,{n:1,title:`Destructive confirm (O1)`,blurb:`alertdialog, no outside dismiss, focus starts on Cancel.`,code:S,children:(0,v.jsx)(x,{})})}function Y(){return(0,v.jsx)(g,{n:2,title:`Async confirm with busy and retry (O2)`,blurb:`The first attempt fails after 600 ms and the error stays inline; Retry succeeds. Escape and Cancel are refused while busy.`,code:O,children:(0,v.jsx)(D,{})})}function X(){return(0,v.jsx)(g,{n:3,title:`Type to confirm (O4)`,blurb:`The action stays disabled until the repository name is typed exactly.`,code:P,children:(0,v.jsx)(N,{})})}function Z(){return(0,v.jsx)(g,{n:4,title:`Choose one of three (O5)`,blurb:`The result is a closed set, not a boolean: save, discard, or dismissed.`,code:V,children:(0,v.jsx)(B,{})})}function Q(){return(0,v.jsx)(g,{n:5,title:`Confirm as a bottom sheet on phones`,blurb:`Same alertdialog; below sm it renders as a bottom sheet (swipe down dismisses).`,code:G,children:(0,v.jsx)(W,{})})}function $(){return(0,v.jsx)(g,{n:6,title:`Anchored confirm (popconfirm)`,blurb:"`Popconfirm` asks next to the button that asked: the same confirm model as the dialog, focus on Cancel first, Escape or a press outside cancels, an async action keeps it busy and shows a failure inline.",code:q,children:(0,v.jsx)(K,{})})}function te(){return(0,v.jsx)(g,{n:7,title:`A confirm of your own`,blurb:"`useConfirmModel`, `ConfirmFields` and `ConfirmButtons`, the parts `Confirm` and `Popconfirm` share, inside a plain `Modal` with a note of its own; `useUiMessages` reads the kit's strings.",code:L,children:(0,v.jsx)(I,{})})}function ne(){return(0,v.jsxs)(h,{children:[(0,v.jsxs)(t,{title:`Confirm and decide`,children:[(0,v.jsx)(`code`,{children:`Confirm`}),` and `,(0,v.jsx)(`code`,{children:`Choose`}),` from `,(0,v.jsx)(`code`,{children:`@kitora/overlay`}),`, drawn by the one Drawer root.`]}),(0,v.jsx)(J,{}),(0,v.jsx)(Y,{}),(0,v.jsx)(X,{}),(0,v.jsx)(Z,{}),(0,v.jsx)(Q,{}),(0,v.jsx)($,{}),(0,v.jsx)(te,{})]})}export{ne as component};