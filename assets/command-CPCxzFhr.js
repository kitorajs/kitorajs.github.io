import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{_ as n,g as r,h as i,l as a,p as o,r as s}from"./input-DxNY09be.js";import{n as c}from"./use-filter-DykTxHaD.js";import{t as l}from"./root-CLnyrXYJ.js";import{t as u}from"./file-text-DcQTIaDt.js";import{t as d}from"./plus-C7zFbiHD.js";import{t as f}from"./search-C2WkThP4.js";import{t as p}from"./settings-Dn8u38Jz.js";import{t as m}from"./user-plus-YxOr2gJM.js";import{n as h,t as g}from"./input-group-BjeqClzO.js";import{a as _,c as v,i as y,l as b,n as x,o as S,r as C,s as w,t as T,u as E}from"./command-BSH4duJZ.js";import{Bc as D,Cc as O,Ic as k,Ti as A,ti as j}from"./index-q72zUtm9.js";import{c as M,i as N,l as P,t as F}from"./dialog-DUcAD2bv.js";var I=e({CommandBuildYourOwn:()=>V}),L=t(D(),1),R=k(),z=[{heading:`Suggestions`,rows:[{value:`New project`,label:`New project`},{value:`docs`,label:`Search docs`,keywords:[`help`,`manual`],shortcut:`/`},{value:`Delete everything`,label:`Delete everything`,description:`Ask an owner`,disabled:!0}]},{heading:`Recent`,rows:[{value:`styles.css`,label:`styles.css`}]}];function B({row:e,onSelect:t}){let r=(0,L.useId)();return(0,R.jsxs)(n,{value:e.value,label:e.value,disabled:e.disabled,"aria-describedby":e.description?r:void 0,onClick:()=>{e.disabled||t?.(e.value)},render:(e,t)=>(0,R.jsx)(`div`,{...e,"aria-selected":t.highlighted,"data-selected":t.highlighted?`true`:void 0}),className:`flex cursor-default items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none select-none data-disabled:opacity-50 data-selected:bg-muted`,children:[e.description?(0,R.jsxs)(`div`,{className:`flex flex-col`,children:[e.label,(0,R.jsx)(`span`,{id:r,"aria-hidden":!0,className:`text-xs text-muted-foreground`,children:e.description})]}):e.label,e.shortcut?(0,R.jsx)(`span`,{className:`ms-auto text-xs tracking-widest text-muted-foreground`,children:e.shortcut}):null]})}function V({value:e,onValueChange:t,onSelect:n}){let[u,d]=(0,L.useState)(``),p=c(),m=u.trim(),_=e=>m===``||[e.value,...e.keywords??[]].some(e=>p.contains(e,m)),v=z.flatMap(e=>e.rows.filter(_));return(0,R.jsx)(`div`,{className:`flex w-full max-w-sm flex-col overflow-hidden rounded-xl border border-border bg-popover p-1 text-popover-foreground`,children:(0,R.jsxs)(l,{inline:!0,filter:null,autoHighlight:`always`,keepHighlight:!0,homeEndKeys:!0,loopFocus:!1,highlightedValue:e,value:u,onValueChange:(e,t)=>{t.reason!==`item-press`&&d(e)},onItemHighlighted:e=>t?.(e==null?``:String(e)),children:[(0,R.jsx)(`div`,{className:`p-1 pb-0`,children:(0,R.jsxs)(g,{className:`h-8`,children:[(0,R.jsx)(s,{"aria-label":`Commands`,placeholder:`Type a command`,className:`w-full bg-transparent px-2 text-sm outline-none`}),(0,R.jsx)(h,{children:(0,R.jsx)(f,{className:`size-4 opacity-50`})})]})}),(0,R.jsxs)(a,{"aria-label":`Suggestions`,className:`max-h-72 overflow-y-auto outline-none`,children:[v.length===0?(0,R.jsx)(`div`,{role:`presentation`,className:`py-6 text-center text-sm`,children:`No results.`}):null,z.map((e,t)=>(0,R.jsxs)(`div`,{children:[t>0&&m===``?(0,R.jsx)(`div`,{role:`none`,className:`-mx-1 h-px bg-border`}):null,(0,R.jsxs)(i,{hidden:!e.rows.some(_)||void 0,className:`p-1`,children:[(0,R.jsx)(r,{className:`px-2 py-1.5 text-xs font-medium text-muted-foreground`,children:e.heading}),e.rows.filter(_).map(e=>(0,R.jsx)(B,{row:e,onSelect:n},e.value))]})]},e.heading))]}),(0,R.jsx)(o,{className:`sr-only`})]})})}var H=e({CommandComposePaletteDialog:()=>U});function U(){return(0,R.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,R.jsxs)(F,{children:[(0,R.jsxs)(P,{render:(0,R.jsx)(j,{variant:`outline`,className:`w-full max-w-xs justify-between`}),children:[(0,R.jsxs)(`span`,{className:`flex items-center gap-2 text-muted-foreground`,children:[(0,R.jsx)(f,{className:`size-4`}),`Search…`]}),(0,R.jsx)(`kbd`,{className:`rounded border border-border bg-muted px-1.5 text-xs text-muted-foreground`,children:`⌘K`})]}),(0,R.jsxs)(N,{className:`p-0`,showCloseButton:!1,children:[(0,R.jsx)(M,{className:`sr-only`,children:`Command palette`}),(0,R.jsxs)(T,{children:[(0,R.jsx)(y,{placeholder:`Type a command…`}),(0,R.jsxs)(w,{children:[(0,R.jsx)(x,{children:`No results.`}),(0,R.jsxs)(C,{heading:`Actions`,children:[(0,R.jsxs)(_,{children:[(0,R.jsx)(m,{}),`Invite member`,(0,R.jsx)(E,{children:`⌘I`})]}),(0,R.jsxs)(_,{children:[(0,R.jsx)(p,{}),`Open settings`,(0,R.jsx)(E,{children:`⌘,`})]})]})]})]})]})]})})}var W=e({CommandInlineK:()=>G});function G(){return(0,R.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,R.jsxs)(T,{className:`w-full max-w-md rounded-lg border border-border bg-card`,children:[(0,R.jsx)(y,{placeholder:`Type a command or search…`}),(0,R.jsxs)(w,{children:[(0,R.jsx)(x,{children:`No results.`}),(0,R.jsxs)(C,{heading:`Suggestions`,children:[(0,R.jsxs)(_,{children:[(0,R.jsx)(d,{}),` New project`,(0,R.jsx)(E,{children:`⌘N`})]}),(0,R.jsxs)(_,{children:[(0,R.jsx)(f,{}),` Search docs`,(0,R.jsx)(E,{children:`/`})]}),(0,R.jsxs)(_,{children:[(0,R.jsx)(p,{}),` Open settings`,(0,R.jsx)(E,{children:`⌘,`})]})]}),(0,R.jsx)(b,{}),(0,R.jsxs)(C,{heading:`Recent`,children:[(0,R.jsxs)(_,{children:[(0,R.jsx)(u,{}),` styles.css`]}),(0,R.jsxs)(_,{children:[(0,R.jsx)(u,{}),` registry.ts`]})]})]})]})})}var K=e({CommandLoadingAndDescriptions:()=>J}),q=[{id:`ada`,name:`Ada Lovelace`,role:`Engineering`},{id:`grace`,name:`Grace Hopper`,role:`Platform`},{id:`alan`,name:`Alan Turing`,role:`Research`}];function J(){let[e,t]=(0,L.useState)(``),[n,r]=(0,L.useState)(``),i=e!==``&&n!==e;return(0,L.useEffect)(()=>{let t=setTimeout(()=>r(e),600);return()=>clearTimeout(t)},[e]),(0,R.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,R.jsxs)(T,{label:`Search people and pages`,className:`w-full max-w-md rounded-lg border border-border bg-card`,children:[(0,R.jsx)(y,{placeholder:`Search people and pages…`,value:e,onValueChange:t}),(0,R.jsxs)(w,{children:[i?(0,R.jsxs)(v,{label:`Searching people…`,children:[(0,R.jsx)(A,{className:`animate-spin motion-reduce:animate-none`}),`Searching people…`]}):null,(0,R.jsx)(x,{children:`No people or pages match.`}),i?null:(0,R.jsx)(C,{heading:`People`,children:q.map(e=>(0,R.jsxs)(_,{value:e.name,keywords:[e.role],children:[(0,R.jsx)(m,{}),(0,R.jsxs)(`span`,{className:`flex min-w-0 flex-col`,children:[e.name,(0,R.jsx)(S,{children:e.role})]})]},e.id))}),(0,R.jsxs)(C,{heading:`Pages`,children:[(0,R.jsxs)(_,{value:`Billing`,keywords:[`invoice`,`plan`],children:[(0,R.jsx)(u,{}),(0,R.jsxs)(`span`,{className:`flex min-w-0 flex-col`,children:[`Billing`,(0,R.jsx)(S,{children:`Plans, invoices and payment methods`})]})]}),(0,R.jsxs)(_,{value:`Audit log`,disabled:!0,children:[(0,R.jsx)(u,{}),(0,R.jsxs)(`span`,{className:`flex min-w-0 flex-col`,children:[`Audit log`,(0,R.jsx)(S,{children:`Available on the Enterprise plan`})]})]})]})]})]})})}var Y=`import { useId, useState } from "react"
import { SearchIcon } from "lucide-react"
import { Autocomplete } from "@kitora/primitives/react"
import { InputGroup, InputGroupAddon } from "@kitora/ui/input-group"

/** One command: what the search matches (\`value\`, \`keywords\`), what it shows, and an optional second line. */
interface Row {
  readonly value: string
  readonly label: string
  readonly keywords?: readonly string[]
  readonly shortcut?: string
  readonly description?: string
  readonly disabled?: boolean
}

const GROUPS: readonly { readonly heading: string; readonly rows: readonly Row[] }[] = [
  {
    heading: "Suggestions",
    rows: [
      { value: "New project", label: "New project" },
      { value: "docs", label: "Search docs", keywords: ["help", "manual"], shortcut: "/" },
      { value: "Delete everything", label: "Delete everything", description: "Ask an owner", disabled: true },
    ],
  },
  { heading: "Recent", rows: [{ value: "styles.css", label: "styles.css" }] },
]

/** One row: an \`Autocomplete.Item\` whose highlight is the command menu's "selected" row (\`aria-selected\`, \`data-selected\`). */
function CommandRow({ row, onSelect }: { row: Row; onSelect?: (value: string) => void }) {
  const descriptionId = useId()
  return (
    <Autocomplete.Item
      value={row.value}
      label={row.value}
      disabled={row.disabled}
      aria-describedby={row.description ? descriptionId : undefined}
      onClick={() => {
        if (!row.disabled) onSelect?.(row.value)
      }}
      render={(props, state) => <div {...props} aria-selected={state.highlighted} data-selected={state.highlighted ? "true" : undefined} />}
      className="flex cursor-default items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none select-none data-disabled:opacity-50 data-selected:bg-muted"
    >
      {row.description ? (
        <div className="flex flex-col">
          {row.label}
          <span id={descriptionId} aria-hidden className="text-xs text-muted-foreground">
            {row.description}
          </span>
        </div>
      ) : (
        row.label
      )}
      {row.shortcut ? <span className="ms-auto text-xs tracking-widest text-muted-foreground">{row.shortcut}</span> : null}
    </Autocomplete.Item>
  )
}

/**
 * A command menu built from the primitives' \`Autocomplete\` parts: an inline list (no popup) under a search field that keeps focus, the first row
 * highlighted from the start, ↑ / ↓ / Home / End to move, Enter to run. \`value\` / \`onValueChange\` is the highlighted row; \`onSelect\` runs a row.
 */
export function CommandBuildYourOwn({ value, onValueChange, onSelect }: { value?: string; onValueChange?: (value: string) => void; onSelect?: (value: string) => void }) {
  const [search, setSearch] = useState("")
  const collator = Autocomplete.useFilter()
  const query = search.trim()
  const matches = (row: Row) => query === "" || [row.value, ...(row.keywords ?? [])].some((text) => collator.contains(text, query))
  const listed = GROUPS.flatMap((group) => group.rows.filter(matches))
  return (
    <div className="flex w-full max-w-sm flex-col overflow-hidden rounded-xl border border-border bg-popover p-1 text-popover-foreground">
      <Autocomplete.Root
        inline
        filter={null}
        autoHighlight="always"
        keepHighlight
        homeEndKeys
        loopFocus={false}
        highlightedValue={value}
        value={search}
        // Running a row would write its text into the field; in a command menu the search stays as typed.
        onValueChange={(next, details) => {
          if (details.reason !== "item-press") setSearch(next)
        }}
        onItemHighlighted={(highlighted) => onValueChange?.(highlighted == null ? "" : String(highlighted))}
      >
        <div className="p-1 pb-0">
          <InputGroup className="h-8">
            <Autocomplete.Input aria-label="Commands" placeholder="Type a command" className="w-full bg-transparent px-2 text-sm outline-none" />
            <InputGroupAddon>
              <SearchIcon className="size-4 opacity-50" />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <Autocomplete.List aria-label="Suggestions" className="max-h-72 overflow-y-auto outline-none">
          {listed.length === 0 ? (
            <div role="presentation" className="py-6 text-center text-sm">
              No results.
            </div>
          ) : null}
          {GROUPS.map((group, index) => (
            <div key={group.heading}>
              {index > 0 && query === "" ? <div role="none" className="-mx-1 h-px bg-border" /> : null}
              <Autocomplete.Group hidden={!group.rows.some(matches) || undefined} className="p-1">
                <Autocomplete.GroupLabel className="px-2 py-1.5 text-xs font-medium text-muted-foreground">{group.heading}</Autocomplete.GroupLabel>
                {group.rows.filter(matches).map((row) => (
                  <CommandRow key={row.value} row={row} onSelect={onSelect} />
                ))}
              </Autocomplete.Group>
            </div>
          ))}
        </Autocomplete.List>
        <Autocomplete.Status className="sr-only" />
      </Autocomplete.Root>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>O(()=>import(`./build-your-own-Bl1-HrXT.js`),[]));var X=`import { Search, Settings, UserPlus } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandShortcut } from "@kitora/ui/command"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@kitora/ui/dialog"
import { Button } from "@kitora/ui/button"

export function CommandComposePaletteDialog() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Dialog>
        <DialogTrigger render={<Button variant="outline" className="w-full max-w-xs justify-between" />}>
          <span className="flex items-center gap-2 text-muted-foreground">
            <Search className="size-4" />
            Search…
          </span>
          <kbd className="rounded border border-border bg-muted px-1.5 text-xs text-muted-foreground">⌘K</kbd>
        </DialogTrigger>
        <DialogContent className="p-0" showCloseButton={false}>
          <DialogTitle className="sr-only">Command palette</DialogTitle>
          <Command>
            <CommandInput placeholder="Type a command…" />
            <CommandList>
              <CommandEmpty>No results.</CommandEmpty>
              <CommandGroup heading="Actions">
                <CommandItem>
                  <UserPlus />
                  Invite member
                  <CommandShortcut>⌘I</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings />
                  Open settings
                  <CommandShortcut>⌘,</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>O(()=>import(`./compose-ClZYGiCr.js`),[]));var Z=`import { FileText, Plus, Search, Settings } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@kitora/ui/command"

export function CommandInlineK() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Command className="w-full max-w-md rounded-lg border border-border bg-card">
        <CommandInput placeholder="Type a command or search…" />
        <CommandList>
          <CommandEmpty>No results.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Plus /> New project
              <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Search /> Search docs
              <CommandShortcut>/</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings /> Open settings
              <CommandShortcut>⌘,</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Recent">
            <CommandItem>
              <FileText /> styles.css
            </CommandItem>
            <CommandItem>
              <FileText /> registry.ts
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>O(()=>import(`./inline-k-CLUw3JrQ.js`),[]));var Q=`import { useEffect, useState } from "react"
import { FileText, Loader2, UserPlus } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandItemDescription, CommandList, CommandLoading } from "@kitora/ui/command"

const PEOPLE = [
  { id: "ada", name: "Ada Lovelace", role: "Engineering" },
  { id: "grace", name: "Grace Hopper", role: "Platform" },
  { id: "alan", name: "Alan Turing", role: "Research" },
]

export function CommandLoadingAndDescriptions() {
  const [search, setSearch] = useState("")
  // A pretend server search: the people for a search are "back" a moment after it was typed.
  const [loadedFor, setLoadedFor] = useState("")
  const loading = search !== "" && loadedFor !== search
  useEffect(() => {
    const timer = setTimeout(() => setLoadedFor(search), 600)
    return () => clearTimeout(timer)
  }, [search])
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Command label="Search people and pages" className="w-full max-w-md rounded-lg border border-border bg-card">
        <CommandInput placeholder="Search people and pages…" value={search} onValueChange={setSearch} />
        <CommandList>
          {loading ? (
            <CommandLoading label="Searching people…">
              <Loader2 className="animate-spin motion-reduce:animate-none" />
              Searching people…
            </CommandLoading>
          ) : null}
          <CommandEmpty>No people or pages match.</CommandEmpty>
          {loading ? null : (
            <CommandGroup heading="People">
              {PEOPLE.map((person) => (
                <CommandItem key={person.id} value={person.name} keywords={[person.role]}>
                  <UserPlus />
                  <span className="flex min-w-0 flex-col">
                    {person.name}
                    <CommandItemDescription>{person.role}</CommandItemDescription>
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
          <CommandGroup heading="Pages">
            <CommandItem value="Billing" keywords={["invoice", "plan"]}>
              <FileText />
              <span className="flex min-w-0 flex-col">
                Billing
                <CommandItemDescription>Plans, invoices and payment methods</CommandItemDescription>
              </span>
            </CommandItem>
            <CommandItem value="Audit log" disabled>
              <FileText />
              <span className="flex min-w-0 flex-col">
                Audit log
                <CommandItemDescription>Available on the Enterprise plan</CommandItemDescription>
              </span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>O(()=>import(`./loading-and-descriptions-DFPFAYGB.js`),[]));var $={"./demos/command/build-your-own.tsx":I,"./demos/command/compose.tsx":H,"./demos/command/inline-k.tsx":W,"./demos/command/loading-and-descriptions.tsx":K},ee={"./demos/command/build-your-own.tsx":Y,"./demos/command/compose.tsx":X,"./demos/command/inline-k.tsx":Z,"./demos/command/loading-and-descriptions.tsx":Q};export{$ as modules,ee as sources};