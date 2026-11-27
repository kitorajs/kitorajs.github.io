import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{i as n,r}from"./layers-lnVEPz1h.js";import{t as i}from"./menu-overlay-item-BmrUcrQG.js";import{n as a}from"./popover-BQ7GChCm.js";import{r as o}from"./confirm-DLF98dvZ.js";import{i as s,n as c}from"./presets-B7T12Ync.js";import{Bn as l,Ec as u,En as d,Fr as f,Ln as p,Pr as m,Tn as h,Uc as g,_t as _,nr as v,ri as y,zc as b}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as x}from"./example-B67lLz1F.js";var S=e(g(),1),C=b(),w=[`todo`,`doing`,`done`],T=3e4;function E({onPick:e,closed:t,log:n}){let r=m();return(0,C.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[w.map(t=>(0,C.jsx)(y,{size:`sm`,variant:`ghost`,className:`justify-start`,onClick:()=>{e(t),r.resolve(t)},"data-testid":`status-${t}`,children:t},t)),(0,C.jsx)(o,{name:`stack-confirm`,title:`Delete this status?`,description:`Level 4: a confirm opened from the popover. Escape closes only this.`,destructive:!0,confirmLabel:`Delete`,trigger:(0,C.jsx)(y,{size:`sm`,variant:`destructive`,"data-testid":`open-confirm`,children:`Delete…`}),onOpenChange:t(`confirm`),onConfirm:()=>n(`confirm accepted`)})]})}function D(e){let[t,n]=(0,S.useState)(`none`);return(0,C.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,C.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Picked: `,(0,C.jsx)(`b`,{"data-testid":`picked`,children:t}),`. Pressing inside the popover never counts as outside for the sheet.`]}),(0,C.jsx)(a,{name:`stack-popover`,title:`Pick a status`,trigger:(0,C.jsx)(y,{size:`sm`,variant:`outline`,"data-testid":`open-popover`,children:`Pick status`}),onOpenChange:e.closed(`popover`),side:`bottom`,align:`start`,children:(0,C.jsx)(E,{...e,onPick:n})}),(0,C.jsx)(y,{size:`sm`,variant:`outline`,onClick:()=>e.toastFrom(`sheet`),"data-testid":`toast-sheet`,children:`Toast from sheet`}),(0,C.jsx)(`p`,{className:`text-muted-foreground`,"data-testid":`sheet-inside`,children:`Plain text inside the sheet: a press here is outside for the popover only.`})]})}function O({undos:e,...t}){return(0,C.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,C.jsxs)(`p`,{className:`text-muted-foreground tabular-nums`,children:[`Undo clicks seen inside the dialog: `,(0,C.jsx)(`b`,{"data-testid":`undo-count-dialog`,children:e})]}),(0,C.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,C.jsx)(s,{name:`stack-sheet`,title:`Sheet (level 2)`,side:`end`,trigger:(0,C.jsx)(y,{size:`sm`,"data-testid":`open-sheet`,children:`Open sheet`}),onOpenChange:t.closed(`sheet`),children:(0,C.jsx)(D,{...t})}),(0,C.jsx)(y,{size:`sm`,variant:`outline`,onClick:()=>t.toastFrom(`dialog`),"data-testid":`toast-dialog`,children:`Toast from dialog`})]})]})}function k(){let e=f();return(0,C.jsxs)(`div`,{className:`rounded-md border`,children:[(0,C.jsx)(`h3`,{className:`border-b px-2 py-1 font-medium`,children:`Stack (paint order, bottom → top)`}),(0,C.jsxs)(`table`,{className:`w-full text-[12px] tabular-nums`,"data-testid":`stack`,children:[(0,C.jsx)(`thead`,{className:`text-muted-foreground`,children:(0,C.jsxs)(`tr`,{className:`text-left`,children:[(0,C.jsx)(`th`,{className:`px-2 py-1 font-normal`,children:`id`}),(0,C.jsx)(`th`,{className:`px-2 py-1 font-normal`,children:`name`}),(0,C.jsx)(`th`,{className:`px-2 py-1 font-normal`,children:`kind`}),(0,C.jsx)(`th`,{className:`px-2 py-1 font-normal`,children:`parent`}),(0,C.jsx)(`th`,{className:`px-2 py-1 font-normal`,children:`status`})]})}),(0,C.jsx)(`tbody`,{children:e.length===0?(0,C.jsx)(`tr`,{children:(0,C.jsx)(`td`,{className:`px-2 py-1 text-muted-foreground`,colSpan:5,children:`empty`})}):e.map(e=>(0,C.jsxs)(`tr`,{className:`border-t`,"data-stack-name":e.name??``,children:[(0,C.jsx)(`td`,{className:`px-2 py-1 font-mono`,children:e.id}),(0,C.jsx)(`td`,{className:`px-2 py-1`,children:e.name??`—`}),(0,C.jsx)(`td`,{className:`px-2 py-1`,children:e.kind}),(0,C.jsx)(`td`,{className:`px-2 py-1 font-mono`,children:e.parentId??`—`}),(0,C.jsx)(`td`,{className:`px-2 py-1`,children:e.status})]},e.id))})]})]})}function A(){let[e,t]=(0,S.useState)(0),[n,r]=(0,S.useState)([]),i=e=>r(t=>[e,...t].slice(0,6)),a=e=>(t,n)=>{!t&&n&&i(`${e} closed (${n})`)};return(0,C.jsx)(h,{children:(0,C.jsxs)(`div`,{className:`flex flex-col gap-3 text-[13px]`,children:[(0,C.jsx)(c,{name:`stack-dialog`,title:`Dialog (level 1)`,description:`Open the sheet, then the popover inside it, then the confirm.`,trigger:(0,C.jsx)(y,{size:`sm`,className:`self-start`,"data-testid":`open-dialog`,children:`Open dialog`}),onOpenChange:a(`dialog`),children:(0,C.jsx)(O,{undos:e,toastFrom:e=>_(`Saved from ${e}`,{action:{label:`Undo`,onClick:()=>{t(e=>e+1),i(`toast Undo clicked (from ${e})`)}},duration:T}),closed:a,log:i})}),(0,C.jsx)(k,{}),(0,C.jsx)(`ol`,{className:`flex flex-col font-mono text-[12px] text-muted-foreground`,"data-testid":`nested-log`,children:n.length===0?(0,C.jsx)(`li`,{children:`nothing closed yet`}):n.map((e,t)=>(0,C.jsx)(`li`,{children:e},`${n.length-t}`))})]})})}var j=`import { useState } from "react"
import { toast } from "@kitora/feedback"
import { Button } from "@kitora/ui/button"
import { Confirm, EnsureOverlayUi, Modal, Popover, Sheet, useOverlay, useOverlayEntries, type CloseReason } from "@kitora/overlay"

const STATUSES = ["todo", "doing", "done"] as const
// toasts are the feedback kit's: mount its <Toaster /> once in the app
// how long a toast stays, so there is time to press Undo with a modal open
const TOAST_MS = 30_000

interface Level {
  readonly toastFrom: (from: string) => void
  readonly closed: (what: string) => (open: boolean, reason: CloseReason | null) => void
  readonly log: (line: string) => void
}

// Level 3: a popover inside the sheet. Picking resolves it; Delete… opens level 4.
function StatusPicker({ onPick, closed, log }: Level & { onPick: (s: string) => void }) {
  const ctl = useOverlay<string>()
  return (
    <div className="flex flex-col gap-1">
      {STATUSES.map((s) => (
        <Button
          key={s}
          size="sm"
          variant="ghost"
          className="justify-start"
          onClick={() => {
            onPick(s)
            ctl.resolve(s)
          }}
          data-testid={\`status-\${s}\`}
        >
          {s}
        </Button>
      ))}
      <Confirm
        name="stack-confirm"
        title="Delete this status?"
        description="Level 4: a confirm opened from the popover. Escape closes only this."
        destructive
        confirmLabel="Delete"
        trigger={
          <Button size="sm" variant="destructive" data-testid="open-confirm">
            Delete…
          </Button>
        }
        onOpenChange={closed("confirm")}
        onConfirm={() => log("confirm accepted")}
      />
    </div>
  )
}

// Level 2: a sheet inside the dialog.
function SheetBody(level: Level) {
  const [picked, setPicked] = useState("none")
  return (
    <div className="flex flex-col gap-2">
      <p className="text-muted-foreground">
        Picked: <b data-testid="picked">{picked}</b>. Pressing inside the popover never counts as outside for the sheet.
      </p>
      <Popover
        name="stack-popover"
        title="Pick a status"
        trigger={
          <Button size="sm" variant="outline" data-testid="open-popover">
            Pick status
          </Button>
        }
        onOpenChange={level.closed("popover")}
        side="bottom"
        align="start"
      >
        <StatusPicker {...level} onPick={setPicked} />
      </Popover>
      <Button size="sm" variant="outline" onClick={() => level.toastFrom("sheet")} data-testid="toast-sheet">
        Toast from sheet
      </Button>
      <p className="text-muted-foreground" data-testid="sheet-inside">
        Plain text inside the sheet: a press here is outside for the popover only.
      </p>
    </div>
  )
}

// Level 1: the dialog.
function DialogBody({ undos, ...level }: Level & { undos: number }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-muted-foreground tabular-nums">
        Undo clicks seen inside the dialog: <b data-testid="undo-count-dialog">{undos}</b>
      </p>
      <div className="flex flex-wrap gap-2">
        <Sheet
          name="stack-sheet"
          title="Sheet (level 2)"
          side="end"
          trigger={
            <Button size="sm" data-testid="open-sheet">
              Open sheet
            </Button>
          }
          onOpenChange={level.closed("sheet")}
        >
          <SheetBody {...level} />
        </Sheet>
        <Button size="sm" variant="outline" onClick={() => level.toastFrom("dialog")} data-testid="toast-dialog">
          Toast from dialog
        </Button>
      </div>
    </div>
  )
}

// The live stack in paint order: nesting is parent links, not z-indexes.
function StackTable() {
  const entries = useOverlayEntries()
  return (
    <div className="rounded-md border">
      <h3 className="border-b px-2 py-1 font-medium">Stack (paint order, bottom → top)</h3>
      <table className="w-full text-[12px] tabular-nums" data-testid="stack">
        <thead className="text-muted-foreground">
          <tr className="text-left">
            <th className="px-2 py-1 font-normal">id</th>
            <th className="px-2 py-1 font-normal">name</th>
            <th className="px-2 py-1 font-normal">kind</th>
            <th className="px-2 py-1 font-normal">parent</th>
            <th className="px-2 py-1 font-normal">status</th>
          </tr>
        </thead>
        <tbody>
          {entries.length === 0 ? (
            <tr>
              <td className="px-2 py-1 text-muted-foreground" colSpan={5}>
                empty
              </td>
            </tr>
          ) : (
            entries.map((e) => (
              <tr key={e.id} className="border-t" data-stack-name={e.name ?? ""}>
                <td className="px-2 py-1 font-mono">{e.id}</td>
                <td className="px-2 py-1">{e.name ?? "—"}</td>
                <td className="px-2 py-1">{e.kind}</td>
                <td className="px-2 py-1 font-mono">{e.parentId ?? "—"}</td>
                <td className="px-2 py-1">{e.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export function NestedOverlays() {
  const [undos, setUndos] = useState(0)
  const [lines, setLines] = useState<readonly string[]>([])
  const log = (line: string) => setLines((l) => [line, ...l].slice(0, 6))
  const closed = (what: string) => (open: boolean, reason: CloseReason | null) => {
    if (!open && reason) log(\`\${what} closed (\${reason})\`)
  }
  // a press on a toast is not "outside": the modal under it stays open
  const toastFrom = (from: string) =>
    toast(\`Saved from \${from}\`, {
      action: {
        label: "Undo",
        onClick: () => {
          setUndos((n) => n + 1)
          log(\`toast Undo clicked (from \${from})\`)
        },
      },
      duration: TOAST_MS,
    })
  return (
    <EnsureOverlayUi>
      <div className="flex flex-col gap-3 text-[13px]">
        {/* each overlay opened inside another is its child entry: Escape and outside
            presses go to the top entry only, and paint order is DOM order */}
        <Modal
          name="stack-dialog"
          title="Dialog (level 1)"
          description="Open the sheet, then the popover inside it, then the confirm."
          trigger={
            <Button size="sm" className="self-start" data-testid="open-dialog">
              Open dialog
            </Button>
          }
          onOpenChange={closed("dialog")}
        >
          <DialogBody undos={undos} toastFrom={toastFrom} closed={closed} log={log} />
        </Modal>
        <StackTable />
        <ol className="flex flex-col font-mono text-[12px] text-muted-foreground" data-testid="nested-log">
          {lines.length === 0 ? <li>nothing closed yet</li> : lines.map((line, i) => <li key={\`\${lines.length - i}\`}>{line}</li>)}
        </ol>
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>u(()=>import(`./nested-stack-CqJq4S3n.js`),[]));function M(){let e=m();return(0,C.jsxs)(`div`,{className:`flex flex-col gap-2 p-3`,"data-testid":`menu-dialog`,children:[(0,C.jsx)(`p`,{className:`font-medium`,children:`Opened from a menu item`}),(0,C.jsx)(`p`,{className:`text-muted-foreground`,children:`The menu closed; when this closes, focus returns to “Actions”.`}),(0,C.jsxs)(`div`,{className:`flex gap-2`,children:[(0,C.jsx)(y,{size:`sm`,onClick:()=>e.resolve(`saved`),"data-testid":`menu-dialog-save`,children:`Save`}),(0,C.jsx)(y,{size:`sm`,variant:`outline`,onClick:()=>void e.close(),children:`Cancel`})]})]})}function N(){let[e,t]=(0,S.useState)(`—`);return(0,C.jsx)(h,{children:(0,C.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,children:[(0,C.jsxs)(p,{children:[(0,C.jsx)(v,{render:(0,C.jsx)(y,{size:`sm`,variant:`outline`,"data-testid":`menu-trigger`}),children:`Actions`}),(0,C.jsx)(l,{children:(0,C.jsx)(i,{overlay:{name:`menu-edit`,surface:`center`},onResult:e=>t(e.status===`resolved`?`resolved ${e.value}`:`dismissed (${e.reason})`),render:()=>(0,C.jsx)(M,{}),children:`Edit…`})})]}),(0,C.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`last result `,(0,C.jsx)(`b`,{className:`text-foreground`,"data-testid":`menu-result`,children:e})]})]})})}var P=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@kitora/ui/dropdown-menu"
import { EnsureOverlayUi, MenuOverlayItem, useOverlay } from "@kitora/overlay"

// Menu item opens a dialog: MenuOverlayItem closes the menu, opens the dialog, and returns focus to
// the menu trigger when it closes.

function MenuEditBody() {
  const ctl = useOverlay<string>()
  return (
    <div className="flex flex-col gap-2 p-3" data-testid="menu-dialog">
      <p className="font-medium">Opened from a menu item</p>
      <p className="text-muted-foreground">The menu closed; when this closes, focus returns to “Actions”.</p>
      <div className="flex gap-2">
        <Button size="sm" onClick={() => ctl.resolve("saved")} data-testid="menu-dialog-save">
          Save
        </Button>
        <Button size="sm" variant="outline" onClick={() => void ctl.close()}>
          Cancel
        </Button>
      </div>
    </div>
  )
}

export function ActionsMenu() {
  const [last, setLast] = useState("—")
  return (
    <EnsureOverlayUi>
      <div className="flex flex-wrap items-center gap-2 text-[13px]">
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button size="sm" variant="outline" data-testid="menu-trigger" />}>Actions</DropdownMenuTrigger>
          <DropdownMenuContent>
            {/* the menu closes, the dialog opens, and focus returns to "Actions" after it */}
            <MenuOverlayItem<string>
              overlay={{ name: "menu-edit", surface: "center" }}
              onResult={(r) => setLast(r.status === "resolved" ? \`resolved \${r.value}\` : \`dismissed (\${r.reason})\`)}
              render={() => <MenuEditBody />}
            >
              Edit…
            </MenuOverlayItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <span className="text-muted-foreground tabular-nums">
          last result <b className="text-foreground" data-testid="menu-result">{last}</b>
        </span>
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>u(()=>import(`./stacking-menu-C0wpkFI2.js`),[]));var F=3e4;function I(){let[e,t]=(0,S.useState)(0),[i,a]=(0,S.useState)(0),o=e=>_(`Saved from ${e}`,{action:{label:`Undo`,onClick:()=>t(e=>e+1)},duration:F});return(0,C.jsxs)(h,{children:[(0,C.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,children:[(0,C.jsx)(y,{size:`sm`,variant:`outline`,onClick:()=>o(`page`),"data-testid":`toast-page`,children:`Toast`}),(0,C.jsx)(c,{name:`editor`,size:`sm`,title:`Editor`,trigger:(0,C.jsx)(y,{size:`sm`,children:`Open dialog`}),children:(0,C.jsx)(y,{size:`sm`,variant:`outline`,onClick:()=>o(`dialog`),"data-testid":`toast-dialog`,children:`Toast from the dialog`})}),(0,C.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[`undo clicks `,(0,C.jsx)(`b`,{"data-testid":`undo-count`,children:e}),` · chat clicks `,(0,C.jsx)(`b`,{"data-testid":`chat-count`,children:i})]})]}),(0,C.jsx)(`button`,{type:`button`,...n,style:{zIndex:r(`toast`)},className:`fixed bottom-4 left-4 h-7 rounded-full bg-primary px-3 text-[12px] text-primary-foreground shadow-md`,onClick:()=>a(e=>e+1),"data-testid":`chat-widget`,children:`Chat (persistent)`})]})}var L=`import { useState } from "react"
import { toast } from "@kitora/feedback"
import { Button } from "@kitora/ui/button"
import { EnsureOverlayUi, layerZIndex, Modal, persistentProps } from "@kitora/overlay"

// Toasts and persistent widgets above modals (O43, O44): toast from the page or from inside the
// dialog, then click Undo; the fixed Chat widget at the bottom left is clickable with any modal open.
// Neither closes the modal.

/** How long a demo toast stays, so there is time to reach its Undo from inside a modal. */
const TOAST_MS = 30_000

export function ToastAboveModal() {
  const [undos, setUndos] = useState(0)
  const [chats, setChats] = useState(0)
  const fireToast = (from: string) =>
    toast(\`Saved from \${from}\`, { action: { label: "Undo", onClick: () => setUndos((n) => n + 1) }, duration: TOAST_MS })
  return (
    <EnsureOverlayUi>
      <div className="flex flex-wrap items-center gap-2 text-[13px]">
        <Button size="sm" variant="outline" onClick={() => fireToast("page")} data-testid="toast-page">
          Toast
        </Button>
        <Modal name="editor" size="sm" title="Editor" trigger={<Button size="sm">Open dialog</Button>}>
          {/* a press on the toast is not "outside": the dialog stays open */}
          <Button size="sm" variant="outline" onClick={() => fireToast("dialog")} data-testid="toast-dialog">
            Toast from the dialog
          </Button>
        </Modal>
        <span className="text-muted-foreground tabular-nums">
          undo clicks <b data-testid="undo-count">{undos}</b> · chat clicks <b data-testid="chat-count">{chats}</b>
        </span>
      </div>
      {/* persistentProps: clickable above every modal without closing it; the z-index is a named layer */}
      <button
        type="button"
        {...persistentProps}
        style={{ zIndex: layerZIndex("toast") }}
        className="fixed bottom-4 left-4 h-7 rounded-full bg-primary px-3 text-[12px] text-primary-foreground shadow-md"
        onClick={() => setChats((n) => n + 1)}
        data-testid="chat-widget"
      >
        Chat (persistent)
      </button>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>u(()=>import(`./stacking-persistent-DiMCtlkN.js`),[]));function R(){return(0,C.jsxs)(d,{children:[(0,C.jsx)(t,{title:`Stacking`,children:`Nested overlays are child entries of the one that opened them, so Escape and outside presses reach the top entry only and paint order is DOM order. Toasts and persistent widgets stay clickable above modals.`}),(0,C.jsx)(x,{n:1,title:`Dialog → sheet → popover → confirm (O39)`,blurb:`Four levels, each a child entry of the one before. Escape and outside presses close the top one only; the stack table shows the parent links.`,code:j,children:(0,C.jsx)(A,{})}),(0,C.jsx)(x,{n:2,title:`Menu item opens a dialog`,blurb:`MenuOverlayItem closes the menu, opens the dialog, and returns focus to the menu trigger when it closes.`,code:P,children:(0,C.jsx)(N,{})}),(0,C.jsx)(x,{n:3,title:`Toasts and persistent widgets above modals (O43, O44)`,blurb:`Toast from the page or from inside the dialog, then click Undo; the fixed Chat widget at the bottom left is clickable with any modal open. Neither closes the modal.`,code:L,children:(0,C.jsx)(I,{})})]})}export{R as component};