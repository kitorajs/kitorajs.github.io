import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{n,t as r}from"./avatar-DegXKoDd.js";import{t as i}from"./search-C2WkThP4.js";import{t as a}from"./settings-Dn8u38Jz.js";import{t as o}from"./user-plus-YxOr2gJM.js";import{i as s,n as c,r as l,t as u}from"./command-palette-CqbH595N.js";import{Bc as d,Cc as f,Cn as p,Ic as m,Mi as h,ti as g}from"./index-q72zUtm9.js";import{t as _}from"./badge-Be8rVEaF.js";var v=h(`file-plus`,[[`path`,{d:`M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z`,key:`1rqfz7`}],[`path`,{d:`M14 2v4a2 2 0 0 0 2 2h4`,key:`tnqrlb`}],[`path`,{d:`M9 15h6`,key:`cctwl0`}],[`path`,{d:`M12 18v-6`,key:`17g6i2`}]]),y=e({CommandPaletteComposeTopBar:()=>w}),b=t(d(),1),x=m(),S=[{id:`new-doc`,label:`New document`,group:`Actions`,icon:(0,x.jsx)(v,{}),shortcut:`N`},{id:`invite`,label:`Invite teammate`,group:`Actions`,icon:(0,x.jsx)(o,{}),keywords:[`member`,`user`]},{id:`settings`,label:`Workspace settings`,group:`Actions`,icon:(0,x.jsx)(a,{}),keywords:[`preferences`]},{id:`doc-roadmap`,label:`Q3 roadmap`,group:`Recent documents`,detail:`Edited 2h ago by Priya`},{id:`doc-pricing`,label:`Pricing page copy`,group:`Recent documents`,detail:`Edited yesterday`},{id:`doc-onboarding`,label:`Onboarding checklist`,group:`Recent documents`,detail:`Edited last week`}],C=`mod+j`;function w(){let[e,t]=(0,b.useState)([]),a=s(l(C),c());return(0,x.jsx)(p,{children:(0,x.jsxs)(`div`,{className:`flex w-full max-w-lg flex-col gap-2`,children:[(0,x.jsxs)(`header`,{className:`flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2`,children:[(0,x.jsx)(`span`,{className:`text-sm font-semibold`,children:`Docs`}),(0,x.jsx)(u,{commands:S,shortcut:C,name:`docs-palette`,placeholder:`Search documents and actions…`,onRun:e=>t(t=>[e.label,...t].slice(0,3)),trigger:(0,x.jsxs)(g,{size:`sm`,variant:`outline`,className:`ml-auto w-44 justify-start text-muted-foreground`,children:[(0,x.jsx)(i,{}),`Search…`,(0,x.jsx)(`kbd`,{className:`ml-auto rounded border bg-muted px-1 font-mono text-[11px]`,children:a})]})}),(0,x.jsx)(r,{className:`size-7`,children:(0,x.jsx)(n,{children:`AB`})})]}),(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5 text-[12px] text-muted-foreground`,children:[`Ran:`,e.length===0?(0,x.jsx)(`span`,{children:`nothing yet`}):e.map((e,t)=>(0,x.jsx)(_,{variant:`secondary`,children:e},`${t}-${e}`))]})]})})}var T=e({CommandPaletteDefault:()=>D}),E=[{id:`new-campaign`,label:`New campaign`,group:`Create`,shortcut:`C`,keywords:[`add`,`launch`]},{id:`new-report`,label:`New report`,group:`Create`,keywords:[`chart`,`analytics`]},{id:`invite`,label:`Invite teammate`,group:`Create`,keywords:[`user`,`member`]},{id:`goto-dashboard`,label:`Go to dashboard`,group:`Navigate`,shortcut:`G D`,keywords:[`home`]},{id:`goto-campaigns`,label:`Go to campaigns`,group:`Navigate`,shortcut:`G C`},{id:`goto-settings`,label:`Go to settings`,group:`Navigate`,shortcut:`G S`,keywords:[`preferences`]},{id:`toggle-theme`,label:`Toggle dark mode`,group:`View`,keywords:[`theme`,`light`,`dark`]},{id:`export-csv`,label:`Export as CSV`,group:`Data`,keywords:[`download`,`spreadsheet`]},{id:`archive`,label:`Archive selected`,group:`Data`,disabled:!0,detail:`Select a row first`},{id:`billing`,label:`Open billing`,keywords:[`invoice`,`plan`,`payment`]}];function D(){let[e,t]=(0,b.useState)(`—`),n=s(l(`mod+k`),c());return(0,x.jsx)(p,{children:(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-2 text-[13px]`,children:[(0,x.jsx)(u,{commands:E,shortcut:`mod+k`,onResult:e=>t(e.status===`resolved`?`ran ${e.value}`:`dismissed (${e.reason})`),name:`command-palette`,trigger:(0,x.jsx)(g,{size:`sm`,variant:`outline`,children:`Open palette`})}),(0,x.jsxs)(`span`,{className:`text-muted-foreground`,children:[`or press `,(0,x.jsx)(`kbd`,{className:`rounded border bg-muted px-1 font-mono text-xs`,children:n}),` · last `,(0,x.jsx)(`b`,{className:`text-foreground`,children:e})]})]})})}var O=`import { useState } from "react"
import { FilePlus, Search, Settings, UserPlus } from "lucide-react"
import { CommandPalette, EnsureOverlayUi, isApplePlatform, parseShortcut, shortcutLabel, type PaletteCommand } from "@kitora/overlay"
import { Avatar, AvatarFallback } from "@kitora/ui/avatar"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"

type CommandId = "new-doc" | "invite" | "settings" | "doc-roadmap" | "doc-pricing" | "doc-onboarding"

const COMMANDS: readonly PaletteCommand<CommandId>[] = [
  { id: "new-doc", label: "New document", group: "Actions", icon: <FilePlus />, shortcut: "N" },
  { id: "invite", label: "Invite teammate", group: "Actions", icon: <UserPlus />, keywords: ["member", "user"] },
  { id: "settings", label: "Workspace settings", group: "Actions", icon: <Settings />, keywords: ["preferences"] },
  { id: "doc-roadmap", label: "Q3 roadmap", group: "Recent documents", detail: "Edited 2h ago by Priya" },
  { id: "doc-pricing", label: "Pricing page copy", group: "Recent documents", detail: "Edited yesterday" },
  { id: "doc-onboarding", label: "Onboarding checklist", group: "Recent documents", detail: "Edited last week" },
]

// mod+j here, so this example does not fight the page's other palette for mod+k
const SHORTCUT = "mod+j"

export function CommandPaletteComposeTopBar() {
  const [ran, setRan] = useState<readonly string[]>([])
  const label = shortcutLabel(parseShortcut(SHORTCUT), isApplePlatform())
  return (
    <EnsureOverlayUi>
      <div className="flex w-full max-w-lg flex-col gap-2">
        <header className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
          <span className="text-sm font-semibold">Docs</span>
          <CommandPalette<CommandId>
            commands={COMMANDS}
            shortcut={SHORTCUT}
            name="docs-palette"
            placeholder="Search documents and actions…"
            onRun={(c) => setRan((prev) => [c.label, ...prev].slice(0, 3))}
            trigger={
              <Button size="sm" variant="outline" className="ml-auto w-44 justify-start text-muted-foreground">
                <Search />
                Search…
                <kbd className="ml-auto rounded border bg-muted px-1 font-mono text-[11px]">{label}</kbd>
              </Button>
            }
          />
          <Avatar className="size-7">
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </header>
        <div className="flex flex-wrap items-center gap-1.5 text-[12px] text-muted-foreground">
          Ran:
          {ran.length === 0 ? <span>nothing yet</span> : ran.map((r, i) => <Badge key={\`\${i}-\${r}\`} variant="secondary">{r}</Badge>)}
        </div>
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>f(()=>import(`./compose-C71KsTjt2.js`),[]));var k=`import { useState } from "react"
import { CommandPalette, EnsureOverlayUi, isApplePlatform, parseShortcut, shortcutLabel, type OverlayResult, type PaletteCommand } from "@kitora/overlay"
import { Button } from "@kitora/ui/button"

type CommandId = "new-campaign" | "new-report" | "invite" | "goto-dashboard" | "goto-campaigns" | "goto-settings" | "toggle-theme" | "export-csv" | "archive" | "billing"

const COMMANDS: readonly PaletteCommand<CommandId>[] = [
  { id: "new-campaign", label: "New campaign", group: "Create", shortcut: "C", keywords: ["add", "launch"] },
  { id: "new-report", label: "New report", group: "Create", keywords: ["chart", "analytics"] },
  { id: "invite", label: "Invite teammate", group: "Create", keywords: ["user", "member"] },
  { id: "goto-dashboard", label: "Go to dashboard", group: "Navigate", shortcut: "G D", keywords: ["home"] },
  { id: "goto-campaigns", label: "Go to campaigns", group: "Navigate", shortcut: "G C" },
  { id: "goto-settings", label: "Go to settings", group: "Navigate", shortcut: "G S", keywords: ["preferences"] },
  { id: "toggle-theme", label: "Toggle dark mode", group: "View", keywords: ["theme", "light", "dark"] },
  { id: "export-csv", label: "Export as CSV", group: "Data", keywords: ["download", "spreadsheet"] },
  { id: "archive", label: "Archive selected", group: "Data", disabled: true, detail: "Select a row first" },
  { id: "billing", label: "Open billing", keywords: ["invoice", "plan", "payment"] },
]

export function CommandPaletteDefault() {
  const [last, setLast] = useState("—")
  // ⌘K on Apple platforms, Ctrl K elsewhere
  const label = shortcutLabel(parseShortcut("mod+k"), isApplePlatform())
  const onResult = (r: OverlayResult<CommandId>) => setLast(r.status === "resolved" ? \`ran \${r.value}\` : \`dismissed (\${r.reason})\`)
  return (
    // EnsureOverlayUi mounts the overlay stack only when the app root has not (mount OverlayUiProvider once there)
    <EnsureOverlayUi>
      <div className="flex flex-wrap items-center justify-center gap-2 text-[13px]">
        <CommandPalette<CommandId> commands={COMMANDS} shortcut="mod+k" onResult={onResult} name="command-palette" trigger={<Button size="sm" variant="outline">Open palette</Button>} />
        <span className="text-muted-foreground">
          or press <kbd className="rounded border bg-muted px-1 font-mono text-xs">{label}</kbd> · last <b className="text-foreground">{last}</b>
        </span>
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>f(()=>import(`./default-BbXfj9sH.js`),[]));var A={"./demos/command-palette/compose.tsx":y,"./demos/command-palette/default.tsx":T},j={"./demos/command-palette/compose.tsx":O,"./demos/command-palette/default.tsx":k};export{A as modules,j as sources};