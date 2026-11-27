import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{t as n}from"./overlay-DqjGYZmU.js";import{i as r,n as i,r as a,t as o}from"./command-palette-C8vgjOP2.js";import{n as s}from"./presets-B7T12Ync.js";import{Ec as c,En as l,Tn as u,Uc as d,ri as f,zc as p}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as m}from"./example-B67lLz1F.js";var h=p(),g=[{id:`invite`,label:`Invite teammate`},{id:`export`,label:`Export as CSV`}],_=`mod+j`;function v(){let e=r(a(_),i());return(0,h.jsx)(u,{children:(0,h.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,children:[(0,h.jsx)(o,{commands:g,shortcut:_,name:`modal-palette`}),(0,h.jsx)(s,{title:`A modal underneath`,description:`Press ${e} here: the palette opens over this dialog, and Escape closes the palette first.`,trigger:(0,h.jsx)(f,{size:`sm`,variant:`outline`,"data-open-modal":``,children:`Open a modal`}),footer:(0,h.jsx)(n.Close,{render:(0,h.jsx)(f,{size:`sm`,variant:`outline`}),children:`Close`}),children:(0,h.jsx)(`p`,{className:`text-muted-foreground`,children:`The palette is rendered at page level, so it is a root entry painted above this one.`})})]})})}var y=`import { Button } from "@kitora/ui/button"
import { CommandPalette, EnsureOverlayUi, isApplePlatform, Modal, Overlay, parseShortcut, shortcutLabel, type PaletteCommand } from "@kitora/overlay"

// Over an open modal: the palette is mounted at page level, so its shortcut pressed inside a modal
// opens it as a root entry painted above the dialog; Escape closes the palette first.

const COMMANDS: readonly PaletteCommand<"invite" | "export">[] = [
  { id: "invite", label: "Invite teammate" },
  { id: "export", label: "Export as CSV" },
]
// this page already binds mod+k to the palette above, so this one listens on mod+j
const SHORTCUT = "mod+j"

export function PaletteOverModal() {
  const label = shortcutLabel(parseShortcut(SHORTCUT), isApplePlatform())
  return (
    <EnsureOverlayUi>
      <div className="flex flex-wrap items-center gap-2 text-[13px]">
        {/* mounted at page level, outside the modal */}
        <CommandPalette commands={COMMANDS} shortcut={SHORTCUT} name="modal-palette" />
        <Modal
          title="A modal underneath"
          description={\`Press \${label} here: the palette opens over this dialog, and Escape closes the palette first.\`}
          trigger={<Button size="sm" variant="outline" data-open-modal="">Open a modal</Button>}
          footer={<Overlay.Close render={<Button size="sm" variant="outline" />}>Close</Overlay.Close>}
        >
          <p className="text-muted-foreground">The palette is rendered at page level, so it is a root entry painted above this one.</p>
        </Modal>
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>c(()=>import(`./palette-over-modal-BFXEVOGe.js`),[]));var b=e(d(),1),x=[{id:`new-campaign`,label:`New campaign`,group:`Create`,shortcut:`C`,keywords:[`add`,`launch`]},{id:`new-report`,label:`New report`,group:`Create`,keywords:[`chart`,`analytics`]},{id:`invite`,label:`Invite teammate`,group:`Create`,keywords:[`user`,`member`]},{id:`goto-dashboard`,label:`Go to dashboard`,group:`Navigate`,shortcut:`G D`,keywords:[`home`]},{id:`goto-campaigns`,label:`Go to campaigns`,group:`Navigate`,shortcut:`G C`},{id:`goto-settings`,label:`Go to settings`,group:`Navigate`,shortcut:`G S`,keywords:[`preferences`]},{id:`toggle-theme`,label:`Toggle dark mode`,group:`View`,keywords:[`theme`,`light`,`dark`]},{id:`toggle-density`,label:`Toggle compact rows`,group:`View`,keywords:[`density`]},{id:`export-csv`,label:`Export as CSV`,group:`Data`,keywords:[`download`,`spreadsheet`]},{id:`archive`,label:`Archive selected`,group:`Data`,disabled:!0},{id:`billing`,label:`Open billing`,keywords:[`invoice`,`plan`,`payment`]}];function S(){let[e,t]=(0,b.useState)(`—`),n=r(a(`mod+k`),i());return(0,h.jsx)(u,{children:(0,h.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[13px]`,"data-example-row":`palette`,children:[(0,h.jsx)(o,{commands:x,onResult:e=>t(e.status===`resolved`?`ran ${e.value}`:`dismissed (${e.reason})`),name:`command-palette`,trigger:(0,h.jsx)(f,{size:`sm`,variant:`outline`,"data-open-palette":``,children:`Open palette`})}),(0,h.jsxs)(`span`,{className:`text-muted-foreground`,children:[`or press `,(0,h.jsx)(`kbd`,{className:`rounded border bg-muted px-1 font-mono text-xs`,"data-shortcut-label":``,children:n}),` · last `,(0,h.jsx)(`b`,{className:`text-foreground`,"data-log":``,children:e})]})]})})}var C=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { CommandPalette, EnsureOverlayUi, isApplePlatform, parseShortcut, shortcutLabel, type OverlayResult, type PaletteCommand } from "@kitora/overlay"

// ⌘K palette with groups, keywords and shortcuts: press the shortcut anywhere on the page (again to
// close), or use the button. Type to filter (keywords match too), ↑/↓ to move, Enter to run.

const COMMAND_IDS = ["new-campaign", "new-report", "invite", "goto-dashboard", "goto-campaigns", "goto-settings", "toggle-theme", "toggle-density", "export-csv", "archive", "billing"] as const
type CommandId = (typeof COMMAND_IDS)[number]

const COMMANDS: readonly PaletteCommand<CommandId>[] = [
  { id: "new-campaign", label: "New campaign", group: "Create", shortcut: "C", keywords: ["add", "launch"] },
  { id: "new-report", label: "New report", group: "Create", keywords: ["chart", "analytics"] },
  { id: "invite", label: "Invite teammate", group: "Create", keywords: ["user", "member"] },
  { id: "goto-dashboard", label: "Go to dashboard", group: "Navigate", shortcut: "G D", keywords: ["home"] },
  { id: "goto-campaigns", label: "Go to campaigns", group: "Navigate", shortcut: "G C" },
  { id: "goto-settings", label: "Go to settings", group: "Navigate", shortcut: "G S", keywords: ["preferences"] },
  { id: "toggle-theme", label: "Toggle dark mode", group: "View", keywords: ["theme", "light", "dark"] },
  { id: "toggle-density", label: "Toggle compact rows", group: "View", keywords: ["density"] },
  { id: "export-csv", label: "Export as CSV", group: "Data", keywords: ["download", "spreadsheet"] },
  { id: "archive", label: "Archive selected", group: "Data", disabled: true },
  { id: "billing", label: "Open billing", keywords: ["invoice", "plan", "payment"] },
]

export function AppCommandPalette() {
  const [last, setLast] = useState("—")
  // ⌘K on Apple platforms, Ctrl K elsewhere
  const label = shortcutLabel(parseShortcut("mod+k"), isApplePlatform())
  const onResult = (r: OverlayResult<CommandId>) => setLast(r.status === "resolved" ? \`ran \${r.value}\` : \`dismissed (\${r.reason})\`)
  return (
    <EnsureOverlayUi>
      <div className="flex flex-wrap items-center gap-2 text-[13px]" data-example-row="palette">
        <CommandPalette<CommandId>
          commands={COMMANDS}
          onResult={onResult}
          name="command-palette"
          trigger={<Button size="sm" variant="outline" data-open-palette="">Open palette</Button>}
        />
        <span className="text-muted-foreground">
          or press <kbd className="rounded border bg-muted px-1 font-mono text-xs" data-shortcut-label="">{label}</kbd> · last <b className="text-foreground" data-log="">{last}</b>
        </span>
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>c(()=>import(`./palette-palette-CZK1elRQ.js`),[]));function w(){return(0,h.jsxs)(l,{children:[(0,h.jsx)(t,{title:`Command palette`,children:`O34 · global shortcut · opens over anything · closes on run with the command id (a preset only, no command registry).`}),(0,h.jsx)(m,{n:1,title:`⌘K palette with groups, keywords and shortcuts`,blurb:`Press ⌘K (Ctrl K) anywhere on this page (again to close), or use the button. Type to filter (keywords match too: try “invoice”), ↑/↓ to move, Enter to run, Escape to dismiss. “Archive selected” is disabled.`,code:C,children:(0,h.jsx)(S,{})}),(0,h.jsx)(m,{n:2,title:`Over an open modal`,blurb:`Open the modal, then press ⌘J (Ctrl J): the palette opens as a root entry painted above the dialog; Escape closes the palette first.`,code:y,children:(0,h.jsx)(v,{})})]})}export{w as component};