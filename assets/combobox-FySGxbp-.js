import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./switch-CA6hUnoS.js";import{i as r,r as i,s as a,t as o}from"./field-CyrZpl8n.js";import{t as s}from"./form-I0-vq70A.js";import{_ as c,a as l,c as u,d,f as ee,i as te,l as ne,r as re,t as f,u as ie,v as ae}from"./input-Ch7uyGe5.js";import{t as p}from"./root-CgLe1J7F.js";import{n as m,r as h,t as g}from"./input-group-BPUTNiVu.js";import{Ai as _,Bc as v,Cc as y,Ic as oe,Ti as se,bi as ce,ki as le,ti as b}from"./index-9y5uwRd3.js";import{t as ue}from"./badge-CMT8Lr82.js";import{t as de}from"./label-BCdE7eBP.js";import{a as fe,i as pe,n as me,o as he,t as ge}from"./card-AZ_23TG_.js";import{_ as x,a as S,c as C,d as w,f as T,g as E,h as D,i as O,l as k,m as A,n as j,o as M,p as N,r as P,s as F,t as I,u as L,v as R,y as _e}from"./combobox-kAkGAMRw.js";var ve=e({ComboboxAsyncSearch:()=>V}),z=t(v(),1),B=oe(),ye=[`react`,`react-dom`,`react-router`,`react-query`,`redux`,`remix`,`recoil`,`rxjs`,`rollup`,`rolldown`,`zod`,`zustand`];function be(e,t){return new Promise((n,r)=>{let i=setTimeout(()=>n(ye.filter(t=>t.includes(e.trim().toLowerCase())).slice(0,6)),450);t.addEventListener(`abort`,()=>{clearTimeout(i),r(new DOMException(`aborted`,`AbortError`))})})}function V(){let[e,t]=(0,z.useState)(``),[n,r]=(0,z.useState)(null),[i,a]=(0,z.useState)([]),[o,s]=(0,z.useState)(!0);return(0,z.useEffect)(()=>{if(n!==null&&e===n)return;let t=new AbortController;return s(!0),be(e,t.signal).then(e=>{a(e),s(!1)}).catch(()=>{}),()=>t.abort()},[e,n]),(0,B.jsxs)(`div`,{className:`grid w-64 gap-2`,children:[(0,B.jsxs)(I,{items:i,filter:null,value:n,onValueChange:r,onInputValueChange:t,children:[(0,B.jsx)(k,{"aria-label":`Package`,placeholder:`Search npm packages…`,showClear:!0}),(0,B.jsxs)(M,{children:[(0,B.jsx)(D,{className:o?`gap-2`:`sr-only`,children:o?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(se,{className:`size-4 animate-spin`,"aria-hidden":`true`}),`Searching…`]}):`${i.length} found`}),(0,B.jsx)(F,{children:o?null:`No package found.`}),(0,B.jsx)(T,{children:e=>(0,B.jsx)(L,{value:e,children:e},e)})]})]}),(0,B.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`Chosen: `,n??`nothing`]})]})}var xe=e({ComboboxBuildYourOwn:()=>Ce}),Se=[`Australia`,`Brazil`,`France`,`Germany`,`India`,`Japan`,`Norway`,`United Kingdom`,`United States`];function Ce({value:e,onValueChange:t,name:n}){return(0,B.jsxs)(p,{items:Se,defaultValue:e===void 0?`Norway`:void 0,value:e,onValueChange:e=>t?.(e),name:n,children:[(0,B.jsxs)(te,{render:(0,B.jsx)(g,{className:`w-64`}),children:[(0,B.jsx)(re,{"aria-label":`Country`,placeholder:`Search a country…`,className:`h-full min-w-0 flex-1 bg-transparent px-2.5 text-sm outline-none placeholder:text-muted-foreground`}),(0,B.jsxs)(m,{align:`inline-end`,children:[(0,B.jsx)(l,{"aria-label":`Show suggestions`,render:(0,B.jsx)(h,{size:`icon-xs`,variant:`ghost`,className:`group-has-data-[slot=combobox-clear]/input-group:hidden`}),children:(0,B.jsx)(le,{className:`size-4 text-muted-foreground`})}),(0,B.jsx)(f,{"data-slot":`combobox-clear`,"aria-label":`Clear`,render:(0,B.jsx)(h,{size:`icon-xs`,variant:`ghost`}),children:(0,B.jsx)(ce,{})})]})]}),(0,B.jsx)(d,{children:(0,B.jsx)(ee,{side:`bottom`,sideOffset:4,align:`start`,className:`z-50`,children:(0,B.jsxs)(ie,{className:`w-(--anchor-width) overflow-hidden rounded-md bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10`,children:[(0,B.jsx)(u,{className:`py-2 text-center text-sm text-muted-foreground empty:p-0`,children:`No country found.`}),(0,B.jsx)(ne,{className:`max-h-80 overflow-y-auto p-1 data-empty:p-0`,children:e=>(0,B.jsxs)(c,{value:e,className:`relative flex cursor-default items-center rounded-sm py-1.5 ps-2 pe-8 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground`,children:[e,(0,B.jsx)(ae,{className:`absolute end-2 flex size-4 items-center justify-center`,children:(0,B.jsx)(_,{className:`size-4`})})]},e)})]})})})]})}var we=e({ComboboxChipLabelsAndReadOnly:()=>Te}),H=[`Deutsch`,`English`,`Español`,`Français`,`Italiano`,`Nederlands`,`Português`];function Te(){let e=R(),[t,r]=(0,z.useState)(!1);return(0,B.jsxs)(`div`,{className:`grid w-80 max-w-full gap-4`,children:[(0,B.jsxs)(`label`,{className:`flex items-center gap-2 text-sm`,children:[(0,B.jsx)(n,{checked:t,onCheckedChange:r}),`Read-only`]}),(0,B.jsxs)(I,{items:H,multiple:!0,defaultValue:[`Deutsch`,`Français`],readOnly:t,children:[(0,B.jsx)(P,{ref:e,children:(0,B.jsx)(x,{children:e=>(0,B.jsxs)(B.Fragment,{children:[e.map(e=>(0,B.jsx)(j,{removeLabel:e=>`${e} entfernen`,children:e},e)),(0,B.jsx)(O,{"aria-label":`Sprachen`,placeholder:e.length===0?`Sprachen wählen…`:``})]})})}),(0,B.jsxs)(M,{anchor:e,children:[(0,B.jsx)(F,{children:`Keine Sprache gefunden.`}),(0,B.jsx)(T,{children:e=>(0,B.jsx)(L,{value:e,children:e},e)})]})]}),(0,B.jsxs)(I,{items:H,defaultValue:`English`,readOnly:t,children:[(0,B.jsx)(k,{"aria-label":`Sprache`,showClear:!0,triggerLabel:`Vorschläge zeigen`,clearLabel:`Leeren`}),(0,B.jsxs)(M,{children:[(0,B.jsx)(F,{children:`Keine Sprache gefunden.`}),(0,B.jsx)(T,{children:e=>(0,B.jsx)(L,{value:e,children:e},e)})]})]})]})}var Ee=e({ComboboxComposeAssignOwner:()=>Oe}),De=[{value:`ada`,label:`Ada Lovelace`,role:`Engineering`},{value:`grace`,label:`Grace Hopper`,role:`Engineering`},{value:`katherine`,label:`Katherine Johnson`,role:`Research`},{value:`margaret`,label:`Margaret Hamilton`,role:`Product`}];function Oe(){let e=(0,z.useId)(),[t,n]=(0,z.useState)(null),[r,i]=(0,z.useState)(null);return(0,B.jsxs)(ge,{className:`w-full max-w-sm`,children:[(0,B.jsx)(fe,{children:(0,B.jsx)(he,{children:`Assign an owner`})}),(0,B.jsxs)(me,{className:`grid gap-2`,children:[(0,B.jsx)(de,{htmlFor:e,children:`Owner`}),(0,B.jsxs)(I,{items:De,value:t,onValueChange:n,id:e,children:[(0,B.jsx)(k,{placeholder:`Search people…`,showClear:!0}),(0,B.jsxs)(M,{children:[(0,B.jsx)(F,{children:`No one found.`}),(0,B.jsx)(T,{children:e=>(0,B.jsxs)(L,{value:e,children:[e.label,(0,B.jsx)(ue,{variant:`secondary`,className:`ms-auto`,children:e.role})]},e.value)})]})]})]}),(0,B.jsxs)(pe,{className:`justify-between gap-2`,children:[(0,B.jsx)(`p`,{className:`text-xs text-muted-foreground`,role:`status`,children:r?`Assigned to ${r.label}`:`Not assigned yet`}),(0,B.jsx)(b,{disabled:t===null,onClick:()=>i(t),children:`Assign`})]})]})}var ke=e({ComboboxDefault:()=>je}),Ae=[`Australia`,`Brazil`,`France`,`Germany`,`India`,`Japan`,`Norway`,`United Kingdom`,`United States`];function je(){return(0,B.jsxs)(I,{items:Ae,defaultValue:`Norway`,children:[(0,B.jsx)(k,{className:`w-64`,"aria-label":`Country`,placeholder:`Search a country…`,showClear:!0}),(0,B.jsxs)(M,{children:[(0,B.jsx)(F,{children:`No country found.`}),(0,B.jsx)(T,{children:e=>(0,B.jsx)(L,{value:e,children:e},e)})]})]})}var Me=e({ComboboxGridRows:()=>Fe}),Ne=[{value:`grinning`,label:`😀`},{value:`joy`,label:`😂`},{value:`heart eyes`,label:`😍`},{value:`thinking`,label:`🤔`},{value:`sunglasses`,label:`😎`},{value:`sleeping`,label:`😴`},{value:`party`,label:`🥳`},{value:`rocket`,label:`🚀`},{value:`fire`,label:`🔥`},{value:`sparkles`,label:`✨`},{value:`thumbs up`,label:`👍`},{value:`wave`,label:`👋`}],U=6;function Pe(){let e=_e(),t=[];for(let n=0;n<e.length;n+=U)t.push(e.slice(n,n+U));return t.map((e,t)=>(0,B.jsx)(N,{children:e.map(e=>(0,B.jsx)(L,{value:e,"aria-label":e.value,className:`text-lg`,children:e.label},e.value))},t))}function Fe(){return(0,B.jsxs)(I,{items:Ne,grid:!0,itemToStringLabel:e=>e.value,children:[(0,B.jsx)(k,{className:`w-64`,"aria-label":`Emoji`,placeholder:`Search emoji…`}),(0,B.jsxs)(M,{children:[(0,B.jsx)(F,{children:`No emoji found.`}),(0,B.jsx)(T,{children:(0,B.jsx)(Pe,{})})]})]})}var Ie=e({ComboboxGroups:()=>Re}),Le=[{value:`Fruit`,items:[`Apple`,`Banana`,`Cherry`,`Mango`]},{value:`Vegetables`,items:[`Carrot`,`Kale`,`Leek`,`Pea`]},{value:`Grains`,items:[`Barley`,`Oats`,`Rice`]}];function Re(){return(0,B.jsxs)(I,{items:Le,children:[(0,B.jsx)(k,{className:`w-64`,"aria-label":`Produce`,placeholder:`Search produce…`}),(0,B.jsxs)(M,{children:[(0,B.jsx)(F,{children:`Nothing grows by that name.`}),(0,B.jsx)(T,{children:(e,t)=>(0,B.jsxs)(C,{items:e.items,children:[t>0?(0,B.jsx)(A,{}):null,(0,B.jsx)(w,{children:e.value}),(0,B.jsx)(S,{children:e=>(0,B.jsx)(L,{value:e,children:e},e)})]},e.value)})]})]})}var ze=e({ComboboxInAField:()=>Ve}),Be=[`Europe/London`,`Europe/Oslo`,`America/New_York`,`America/Los_Angeles`,`Asia/Kolkata`,`Asia/Tokyo`,`Australia/Sydney`];function Ve(){let[e,t]=(0,z.useState)(null);return(0,B.jsxs)(s,{className:`w-full max-w-xs gap-3`,onFormSubmit:e=>t(JSON.stringify(e)),children:[(0,B.jsxs)(o,{name:`timezone`,children:[(0,B.jsxs)(a,{children:[`Time zone `,(0,B.jsx)(`span`,{"aria-hidden":`true`,children:`*`})]}),(0,B.jsxs)(I,{items:Be,required:!0,children:[(0,B.jsx)(k,{placeholder:`Search a time zone…`}),(0,B.jsxs)(M,{children:[(0,B.jsx)(F,{children:`No time zone found.`}),(0,B.jsx)(T,{children:e=>(0,B.jsx)(L,{value:e,children:e},e)})]})]}),(0,B.jsx)(i,{children:`Used for digests and due dates.`}),(0,B.jsx)(r,{match:`valueMissing`,children:`Choose a time zone.`})]}),(0,B.jsx)(b,{type:`submit`,children:`Save`}),e?(0,B.jsxs)(`p`,{className:`text-xs text-muted-foreground`,role:`status`,children:[`Submitted `,e]}):null]})}var He=e({ComboboxInputInPopup:()=>We}),Ue=[`TypeScript`,`JavaScript`,`Python`,`Go`,`Rust`,`Kotlin`,`Swift`,`Ruby`,`Elixir`];function We(){return(0,B.jsxs)(I,{items:Ue,defaultValue:`TypeScript`,children:[(0,B.jsx)(E,{"aria-label":`Language`,render:(0,B.jsx)(b,{variant:`outline`,className:`w-56 justify-between font-normal`}),children:(0,B.jsx)(x,{placeholder:`Pick a language`})}),(0,B.jsxs)(M,{"aria-label":`Languages`,children:[(0,B.jsx)(k,{"aria-label":`Search languages`,placeholder:`Search languages…`,showTrigger:!1}),(0,B.jsx)(F,{children:`No language found.`}),(0,B.jsx)(T,{children:e=>(0,B.jsx)(L,{value:e,children:e},e)})]})]})}var Ge=e({ComboboxMultiple:()=>qe}),Ke=[`Next.js`,`SvelteKit`,`Nuxt`,`Remix`,`Astro`,`TanStack Start`,`Solid Start`];function qe(){let e=R();return(0,B.jsxs)(I,{items:Ke,multiple:!0,defaultValue:[`Astro`,`Remix`],children:[(0,B.jsx)(P,{ref:e,className:`w-80 max-w-full`,children:(0,B.jsx)(x,{children:e=>(0,B.jsxs)(B.Fragment,{children:[e.map(e=>(0,B.jsx)(j,{children:e},e)),(0,B.jsx)(O,{"aria-label":`Frameworks`,placeholder:e.length===0?`Pick frameworks…`:``})]})})}),(0,B.jsxs)(M,{anchor:e,children:[(0,B.jsx)(F,{children:`No framework found.`}),(0,B.jsx)(T,{children:e=>(0,B.jsx)(L,{value:e,children:e},e)})]})]})}var W=`import { useEffect, useState } from "react"
import { LoaderCircleIcon } from "lucide-react"
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList, ComboboxStatus } from "@kitora/ui/combobox"

const PACKAGES = ["react", "react-dom", "react-router", "react-query", "redux", "remix", "recoil", "rxjs", "rollup", "rolldown", "zod", "zustand"]

/** A stand-in for your search endpoint: it waits like a network call and gives up when the query changes. */
function searchPackages(query: string, signal: AbortSignal): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => resolve(PACKAGES.filter((name) => name.includes(query.trim().toLowerCase())).slice(0, 6)), 450)
    signal.addEventListener("abort", () => {
      clearTimeout(timer)
      reject(new DOMException("aborted", "AbortError"))
    })
  })
}

export function ComboboxAsyncSearch() {
  const [query, setQuery] = useState("")
  const [value, setValue] = useState<string | null>(null)
  const [items, setItems] = useState<string[]>([])
  const [pending, setPending] = useState(true)

  useEffect(() => {
    // The text of a chosen item is not a new search.
    if (value !== null && query === value) return
    const controller = new AbortController()
    setPending(true)
    searchPackages(query, controller.signal)
      .then((found) => {
        setItems(found)
        setPending(false)
      })
      .catch(() => {})
    return () => controller.abort()
  }, [query, value])

  return (
    <div className="grid w-64 gap-2">
      {/* \`items\` is what the server sent, so the root's own filter is off (\`filter={null}\`). */}
      <Combobox items={items} filter={null} value={value} onValueChange={setValue} onInputValueChange={setQuery}>
        <ComboboxInput aria-label="Package" placeholder="Search npm packages…" showClear />
        <ComboboxContent>
          <ComboboxStatus className={pending ? "gap-2" : "sr-only"}>
            {pending ? (
              <>
                <LoaderCircleIcon className="size-4 animate-spin" aria-hidden="true" />
                Searching…
              </>
            ) : (
              \`\${items.length} found\`
            )}
          </ComboboxStatus>
          <ComboboxEmpty>{pending ? null : "No package found."}</ComboboxEmpty>
          <ComboboxList>
            {(name: string) => (
              <ComboboxItem key={name} value={name}>
                {name}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <p className="text-xs text-muted-foreground">Chosen: {value ?? "nothing"}</p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>y(()=>import(`./async-search-C0oyyvYe.js`),[]));var G=`import { Combobox } from "@kitora/primitives/react"
import { InputGroup, InputGroupAddon, InputGroupButton } from "@kitora/ui/input-group"
import { CheckIcon, ChevronDownIcon, XIcon } from "lucide-react"

const COUNTRIES = ["Australia", "Brazil", "France", "Germany", "India", "Japan", "Norway", "United Kingdom", "United States"]

/**
 * A combobox built from the primitives' parts (\`Combobox.Root\`, \`InputGroup\`, \`Input\`, \`Trigger\`, \`Clear\`, \`Portal\`, \`Positioner\`, \`Popup\`, \`Empty\`,
 * \`List\`, \`Item\`, \`ItemIndicator\`) inside ui's input group, styled on their state attributes.
 */
export function ComboboxBuildYourOwn({ value, onValueChange, name }: { value?: string | null; onValueChange?: (value: string | null) => void; name?: string }) {
  return (
    <Combobox.Root
      items={COUNTRIES}
      defaultValue={value === undefined ? "Norway" : undefined}
      value={value}
      onValueChange={(next) => onValueChange?.(next)}
      name={name}
    >
      <Combobox.InputGroup render={<InputGroup className="w-64" />}>
        <Combobox.Input aria-label="Country" placeholder="Search a country…" className="h-full min-w-0 flex-1 bg-transparent px-2.5 text-sm outline-none placeholder:text-muted-foreground" />
        <InputGroupAddon align="inline-end">
          <Combobox.Trigger aria-label="Show suggestions" render={<InputGroupButton size="icon-xs" variant="ghost" className="group-has-data-[slot=combobox-clear]/input-group:hidden" />}>
            <ChevronDownIcon className="size-4 text-muted-foreground" />
          </Combobox.Trigger>
          <Combobox.Clear data-slot="combobox-clear" aria-label="Clear" render={<InputGroupButton size="icon-xs" variant="ghost" />}>
            <XIcon />
          </Combobox.Clear>
        </InputGroupAddon>
      </Combobox.InputGroup>
      <Combobox.Portal>
        <Combobox.Positioner side="bottom" sideOffset={4} align="start" className="z-50">
          <Combobox.Popup className="w-(--anchor-width) overflow-hidden rounded-md bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10">
            <Combobox.Empty className="py-2 text-center text-sm text-muted-foreground empty:p-0">No country found.</Combobox.Empty>
            <Combobox.List className="max-h-80 overflow-y-auto p-1 data-empty:p-0">
              {(country: string) => (
                <Combobox.Item
                  key={country}
                  value={country}
                  className="relative flex cursor-default items-center rounded-sm py-1.5 ps-2 pe-8 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground"
                >
                  {country}
                  <Combobox.ItemIndicator className="absolute end-2 flex size-4 items-center justify-center">
                    <CheckIcon className="size-4" />
                  </Combobox.ItemIndicator>
                </Combobox.Item>
              )}
            </Combobox.List>
          </Combobox.Popup>
        </Combobox.Positioner>
      </Combobox.Portal>
    </Combobox.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>y(()=>import(`./build-your-own-B_ZJLF1M.js`),[]));var K=`import { useState } from "react"
import { Combobox, ComboboxChip, ComboboxChips, ComboboxChipsInput, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList, ComboboxValue, useComboboxAnchor } from "@kitora/ui/combobox"
import { Switch } from "@kitora/ui/switch"

const LANGUAGES = ["Deutsch", "English", "Español", "Français", "Italiano", "Nederlands", "Português"]

export function ComboboxChipLabelsAndReadOnly() {
  const anchor = useComboboxAnchor()
  const [readOnly, setReadOnly] = useState(false)
  return (
    <div className="grid w-80 max-w-full gap-4">
      <label className="flex items-center gap-2 text-sm">
        <Switch checked={readOnly} onCheckedChange={setReadOnly} />
        Read-only
      </label>
      {/* Each remove button is named after its chip ("Remove Deutsch"); \`removeLabel\` rewords it, here in German. */}
      <Combobox items={LANGUAGES} multiple defaultValue={["Deutsch", "Français"]} readOnly={readOnly}>
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(selected: string[]) => (
              <>
                {selected.map((language) => (
                  <ComboboxChip key={language} removeLabel={(text) => \`\${text} entfernen\`}>
                    {language}
                  </ComboboxChip>
                ))}
                <ComboboxChipsInput aria-label="Sprachen" placeholder={selected.length === 0 ? "Sprachen wählen…" : ""} />
              </>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>Keine Sprache gefunden.</ComboboxEmpty>
          <ComboboxList>{(language: string) => <ComboboxItem key={language} value={language}>{language}</ComboboxItem>}</ComboboxList>
        </ComboboxContent>
      </Combobox>
      {/* The input's buttons take their names as props too; read-only hides them and mutes the fill. */}
      <Combobox items={LANGUAGES} defaultValue="English" readOnly={readOnly}>
        <ComboboxInput aria-label="Sprache" showClear triggerLabel="Vorschläge zeigen" clearLabel="Leeren" />
        <ComboboxContent>
          <ComboboxEmpty>Keine Sprache gefunden.</ComboboxEmpty>
          <ComboboxList>{(language: string) => <ComboboxItem key={language} value={language}>{language}</ComboboxItem>}</ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>y(()=>import(`./chip-labels-and-read-only-CqjvEt2E.js`),[]));var q=`import { useId, useState } from "react"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@kitora/ui/card"
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@kitora/ui/combobox"
import { Label } from "@kitora/ui/label"

const PEOPLE = [
  { value: "ada", label: "Ada Lovelace", role: "Engineering" },
  { value: "grace", label: "Grace Hopper", role: "Engineering" },
  { value: "katherine", label: "Katherine Johnson", role: "Research" },
  { value: "margaret", label: "Margaret Hamilton", role: "Product" },
]

type Person = (typeof PEOPLE)[number]

export function ComboboxComposeAssignOwner() {
  const id = useId()
  const [owner, setOwner] = useState<Person | null>(null)
  const [assigned, setAssigned] = useState<Person | null>(null)
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Assign an owner</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-2">
        <Label htmlFor={id}>Owner</Label>
        <Combobox items={PEOPLE} value={owner} onValueChange={setOwner} id={id}>
          <ComboboxInput placeholder="Search people…" showClear />
          <ComboboxContent>
            <ComboboxEmpty>No one found.</ComboboxEmpty>
            <ComboboxList>
              {(person: Person) => (
                <ComboboxItem key={person.value} value={person}>
                  {person.label}
                  <Badge variant="secondary" className="ms-auto">
                    {person.role}
                  </Badge>
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </CardContent>
      <CardFooter className="justify-between gap-2">
        <p className="text-xs text-muted-foreground" role="status">
          {assigned ? \`Assigned to \${assigned.label}\` : "Not assigned yet"}
        </p>
        <Button disabled={owner === null} onClick={() => setAssigned(owner)}>
          Assign
        </Button>
      </CardFooter>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>y(()=>import(`./compose-BHhJbVa2.js`),[]));var J=`import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@kitora/ui/combobox"

const COUNTRIES = ["Australia", "Brazil", "France", "Germany", "India", "Japan", "Norway", "United Kingdom", "United States"]

export function ComboboxDefault() {
  return (
    <Combobox items={COUNTRIES} defaultValue="Norway">
      <ComboboxInput className="w-64" aria-label="Country" placeholder="Search a country…" showClear />
      <ComboboxContent>
        <ComboboxEmpty>No country found.</ComboboxEmpty>
        <ComboboxList>
          {(country: string) => (
            <ComboboxItem key={country} value={country}>
              {country}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>y(()=>import(`./default-BdnK3YeS.js`),[]));var Y=`import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList, ComboboxRow, useComboboxFilteredItems } from "@kitora/ui/combobox"

const EMOJI = [
  { value: "grinning", label: "😀" },
  { value: "joy", label: "😂" },
  { value: "heart eyes", label: "😍" },
  { value: "thinking", label: "🤔" },
  { value: "sunglasses", label: "😎" },
  { value: "sleeping", label: "😴" },
  { value: "party", label: "🥳" },
  { value: "rocket", label: "🚀" },
  { value: "fire", label: "🔥" },
  { value: "sparkles", label: "✨" },
  { value: "thumbs up", label: "👍" },
  { value: "wave", label: "👋" },
]
const COLUMNS = 6

/** The filtered emoji in rows of six: ←/→ move along a row, ↑/↓ between rows. */
function EmojiRows() {
  const filtered = useComboboxFilteredItems<(typeof EMOJI)[number]>()
  const rows: (typeof EMOJI)[number][][] = []
  for (let i = 0; i < filtered.length; i += COLUMNS) rows.push(filtered.slice(i, i + COLUMNS))
  return rows.map((row, index) => (
    <ComboboxRow key={index}>
      {row.map((emoji) => (
        <ComboboxItem key={emoji.value} value={emoji} aria-label={emoji.value} className="text-lg">
          {emoji.label}
        </ComboboxItem>
      ))}
    </ComboboxRow>
  ))
}

export function ComboboxGridRows() {
  return (
    <Combobox items={EMOJI} grid itemToStringLabel={(emoji: (typeof EMOJI)[number]) => emoji.value}>
      <ComboboxInput className="w-64" aria-label="Emoji" placeholder="Search emoji…" />
      <ComboboxContent>
        <ComboboxEmpty>No emoji found.</ComboboxEmpty>
        <ComboboxList>
          <EmojiRows />
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>y(()=>import(`./grid-rows-5jDzQLDM.js`),[]));var X=`import { Combobox, ComboboxCollection, ComboboxContent, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxLabel, ComboboxList, ComboboxSeparator } from "@kitora/ui/combobox"

interface Group {
  value: string
  items: string[]
}

const GROUPS: Group[] = [
  { value: "Fruit", items: ["Apple", "Banana", "Cherry", "Mango"] },
  { value: "Vegetables", items: ["Carrot", "Kale", "Leek", "Pea"] },
  { value: "Grains", items: ["Barley", "Oats", "Rice"] },
]

export function ComboboxGroups() {
  return (
    <Combobox items={GROUPS}>
      <ComboboxInput className="w-64" aria-label="Produce" placeholder="Search produce…" />
      <ComboboxContent>
        <ComboboxEmpty>Nothing grows by that name.</ComboboxEmpty>
        <ComboboxList>
          {(group: Group, index: number) => (
            <ComboboxGroup key={group.value} items={group.items}>
              {index > 0 ? <ComboboxSeparator /> : null}
              <ComboboxLabel>{group.value}</ComboboxLabel>
              <ComboboxCollection>
                {(item: string) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>y(()=>import(`./groups-BoawLyoZ.js`),[]));var Z=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@kitora/ui/combobox"
import { Field, FieldDescription, FieldError, FieldLabel } from "@kitora/ui/field"
import { Form } from "@kitora/ui/form"

const TIME_ZONES = ["Europe/London", "Europe/Oslo", "America/New_York", "America/Los_Angeles", "Asia/Kolkata", "Asia/Tokyo", "Australia/Sydney"]

export function ComboboxInAField() {
  const [submitted, setSubmitted] = useState<string | null>(null)
  return (
    <Form className="w-full max-w-xs gap-3" onFormSubmit={(values) => setSubmitted(JSON.stringify(values))}>
      <Field name="timezone">
        <FieldLabel>
          Time zone <span aria-hidden="true">*</span>
        </FieldLabel>
        {/* \`required\` is checked by the form on submit; the label names the input and a press on it focuses it. */}
        <Combobox items={TIME_ZONES} required>
          <ComboboxInput placeholder="Search a time zone…" />
          <ComboboxContent>
            <ComboboxEmpty>No time zone found.</ComboboxEmpty>
            <ComboboxList>
              {(zone: string) => (
                <ComboboxItem key={zone} value={zone}>
                  {zone}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        <FieldDescription>Used for digests and due dates.</FieldDescription>
        <FieldError match="valueMissing">Choose a time zone.</FieldError>
      </Field>
      <Button type="submit">Save</Button>
      {submitted ? (
        <p className="text-xs text-muted-foreground" role="status">
          Submitted {submitted}
        </p>
      ) : null}
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>y(()=>import(`./in-a-field-C7XnyPkv.js`),[]));var Q=`import { Button } from "@kitora/ui/button"
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList, ComboboxTrigger, ComboboxValue } from "@kitora/ui/combobox"

const LANGUAGES = ["TypeScript", "JavaScript", "Python", "Go", "Rust", "Kotlin", "Swift", "Ruby", "Elixir"]

export function ComboboxInputInPopup() {
  return (
    <Combobox items={LANGUAGES} defaultValue="TypeScript">
      {/* The trigger is the combobox; the search box lives in the popup and the focus moves to it. */}
      <ComboboxTrigger aria-label="Language" render={<Button variant="outline" className="w-56 justify-between font-normal" />}>
        <ComboboxValue placeholder="Pick a language" />
      </ComboboxTrigger>
      <ComboboxContent aria-label="Languages">
        <ComboboxInput aria-label="Search languages" placeholder="Search languages…" showTrigger={false} />
        <ComboboxEmpty>No language found.</ComboboxEmpty>
        <ComboboxList>
          {(language: string) => (
            <ComboboxItem key={language} value={language}>
              {language}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>y(()=>import(`./input-in-popup-_XKF2H0Q.js`),[]));var $=`import { Combobox, ComboboxChip, ComboboxChips, ComboboxChipsInput, ComboboxContent, ComboboxEmpty, ComboboxItem, ComboboxList, ComboboxValue, useComboboxAnchor } from "@kitora/ui/combobox"

const FRAMEWORKS = ["Next.js", "SvelteKit", "Nuxt", "Remix", "Astro", "TanStack Start", "Solid Start"]

export function ComboboxMultiple() {
  const anchor = useComboboxAnchor()
  return (
    <Combobox items={FRAMEWORKS} multiple defaultValue={["Astro", "Remix"]}>
      <ComboboxChips ref={anchor} className="w-80 max-w-full">
        <ComboboxValue>
          {(selected: string[]) => (
            <>
              {selected.map((framework) => (
                <ComboboxChip key={framework}>{framework}</ComboboxChip>
              ))}
              <ComboboxChipsInput aria-label="Frameworks" placeholder={selected.length === 0 ? "Pick frameworks…" : ""} />
            </>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No framework found.</ComboboxEmpty>
        <ComboboxList>
          {(framework: string) => (
            <ComboboxItem key={framework} value={framework}>
              {framework}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>y(()=>import(`./multiple-csz4Fkii.js`),[]));var Je={"./demos/combobox/async-search.tsx":ve,"./demos/combobox/build-your-own.tsx":xe,"./demos/combobox/chip-labels-and-read-only.tsx":we,"./demos/combobox/compose.tsx":Ee,"./demos/combobox/default.tsx":ke,"./demos/combobox/grid-rows.tsx":Me,"./demos/combobox/groups.tsx":Ie,"./demos/combobox/in-a-field.tsx":ze,"./demos/combobox/input-in-popup.tsx":He,"./demos/combobox/multiple.tsx":Ge},Ye={"./demos/combobox/async-search.tsx":W,"./demos/combobox/build-your-own.tsx":G,"./demos/combobox/chip-labels-and-read-only.tsx":K,"./demos/combobox/compose.tsx":q,"./demos/combobox/default.tsx":J,"./demos/combobox/grid-rows.tsx":Y,"./demos/combobox/groups.tsx":X,"./demos/combobox/in-a-field.tsx":Z,"./demos/combobox/input-in-popup.tsx":Q,"./demos/combobox/multiple.tsx":$};export{Je as modules,Ye as sources};