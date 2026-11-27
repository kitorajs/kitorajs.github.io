import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{_ as n,a as r,b as i,c as a,d as o,f as s,g as c,h as l,i as u,l as d,m as f,p as ee,r as p,s as m,t as h,u as g}from"./input-CmD5I_83.js";import"./use-filter-BHsmepfZ.js";import{n as _,t as v}from"./root-FNlA2wAa.js";import{t as y}from"./search-B6QTpngp.js";import{n as te}from"./input-CLjf4jLu.js";import{n as b,r as x,t as S}from"./input-group-DvLV3l6K.js";import{t as C}from"./highlight-C_SIKKRc.js";import{Di as ne,Ec as w,Si as T,Uc as re,_i as E,ai as D,ci as O,fi as ie,ji as ae,li as oe,oi as se,ri as k,si as ce,ui as le,zc as ue}from"./index-BZuUy872.js";import{t as de}from"./badge-zOMNRv4l.js";import{t as fe}from"./label-Cw7IrV7Q.js";import{a as pe,i as A,n as j,o as M,t as N}from"./card-XcfOPVWP.js";var P=t(re(),1),F=ue();function I(e){return(0,F.jsx)(v,{...e})}function L({className:e,...t}){return(0,F.jsx)(h,{"data-slot":`autocomplete-clear`,"aria-label":`Clear`,render:(0,F.jsx)(x,{variant:`ghost`,size:`icon-xs`}),className:E(e),...t,children:(0,F.jsx)(T,{className:`pointer-events-none`})})}function R({className:e,inputClassName:t,children:n,disabled:i=!1,showTrigger:a=!1,showClear:o=!1,triggerLabel:s=`Show suggestions`,clearLabel:c=`Clear`,...l}){let d=a||o;return(0,F.jsxs)(u,{render:(0,F.jsx)(S,{className:E(le,e)}),children:[(0,F.jsx)(p,{"data-slot":`input-group-control`,disabled:i,className:E(te,`flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 focus-visible:inset-shadow-none disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent`,t),...l}),d?(0,F.jsxs)(b,{align:`inline-end`,children:[a?(0,F.jsx)(r,{"data-slot":`autocomplete-trigger`,"aria-label":s,disabled:i,render:(0,F.jsx)(x,{size:`icon-xs`,variant:`ghost`,className:`group-has-data-[slot=autocomplete-clear]/input-group:hidden group-data-readonly/input-group:hidden data-pressed:bg-transparent aria-invalid:border-transparent aria-invalid:ring-0`}),children:(0,F.jsx)(ae,{"data-slot":`autocomplete-trigger-icon`,className:`pointer-events-none size-4 text-muted-foreground`})}):null,o?(0,F.jsx)(L,{disabled:i,"aria-label":c,className:`group-data-readonly/input-group:hidden`}):null]}):null,n]})}function z({className:e,...t}){return(0,F.jsx)(m,{"data-slot":`autocomplete-backdrop`,className:E(ie,e),...t})}function B({className:e,side:t=`bottom`,sideOffset:n=4,align:r=`start`,alignOffset:i=0,anchor:a,container:c,backdrop:l=!1,...u}){return(0,F.jsxs)(o,{container:c,children:[l?(0,F.jsx)(z,{}):null,(0,F.jsx)(s,{side:t,sideOffset:n,align:r,alignOffset:i,anchor:a,className:`isolate z-50`,children:(0,F.jsx)(g,{"data-slot":`autocomplete-content`,className:E(oe,e),...u})})]})}function V({className:e,...t}){return(0,F.jsx)(d,{"data-slot":`autocomplete-list`,className:E(ce,e),...t})}function H({className:e,...t}){return(0,F.jsx)(n,{"data-slot":`autocomplete-item`,className:E(D,`pe-1.5`,e),...t})}function me({children:e,query:t,...n}){return t===void 0?(0,F.jsx)(_,{children:t=>(0,F.jsx)(C,{text:e,query:t,...n})}):(0,F.jsx)(C,{text:e,query:t,...n})}function he({className:e,...t}){return(0,F.jsx)(l,{"data-slot":`autocomplete-group`,className:E(e),...t})}function ge({className:e,...t}){return(0,F.jsx)(c,{"data-slot":`autocomplete-label`,className:E(se,e),...t})}function _e(e){return(0,F.jsx)(f,{...e})}function U({className:e,...t}){return(0,F.jsx)(a,{"data-slot":`autocomplete-empty`,className:E(O,e),...t})}function ve({className:e,...t}){return(0,F.jsx)(ee,{"data-slot":`autocomplete-status`,className:E(O,e),...t})}function ye({className:e,...t}){return(0,F.jsx)(i,{"data-slot":`autocomplete-separator`,className:E(`-mx-1 my-1 h-px bg-border`,e),...t})}var be=e({AutocompleteAsyncSearch:()=>Ce}),xe=[`Alien`,`Amélie`,`Arrival`,`Blade Runner`,`Casablanca`,`Gattaca`,`Heat`,`Her`,`Jaws`,`Metropolis`,`Moon`,`Solaris`];function Se(e,t){return new Promise((n,r)=>{let i=setTimeout(()=>n(xe.filter(t=>t.toLowerCase().includes(e.trim().toLowerCase())).slice(0,5)),450);t.addEventListener(`abort`,()=>{clearTimeout(i),r(new DOMException(`aborted`,`AbortError`))})})}function Ce(){let[e,t]=(0,P.useState)(``),[n,r]=(0,P.useState)([]),[i,a]=(0,P.useState)(!1);return(0,P.useEffect)(()=>{if(e.trim()===``){r([]),a(!1);return}let t=new AbortController;return a(!0),Se(e,t.signal).then(e=>{r(e),a(!1)}).catch(()=>{}),()=>t.abort()},[e]),(0,F.jsxs)(I,{items:n,filter:null,value:e,onValueChange:t,children:[(0,F.jsx)(R,{className:`w-64`,"aria-label":`Movie`,placeholder:`Search movies…`,showClear:!0}),(0,F.jsxs)(B,{children:[(0,F.jsx)(ve,{className:i?`gap-2`:`sr-only`,children:i?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(ne,{className:`size-4 animate-spin`,"aria-hidden":`true`}),`Searching…`]}):`${n.length} suggestions`}),(0,F.jsx)(U,{children:i?null:`No movie found.`}),(0,F.jsx)(V,{children:e=>(0,F.jsx)(H,{value:e,children:e},e)})]})]})}var we=e({AutocompleteBoth:()=>Ee}),Te=[`Amsterdam`,`Athens`,`Barcelona`,`Berlin`,`Bergen`,`Brussels`,`Copenhagen`,`Dublin`,`Lisbon`,`Oslo`,`Prague`,`Vienna`];function Ee(){return(0,F.jsxs)(I,{items:Te,mode:`both`,children:[(0,F.jsx)(R,{className:`w-64`,"aria-label":`City`,placeholder:`Start typing a city…`}),(0,F.jsxs)(B,{children:[(0,F.jsx)(U,{children:`No city matches.`}),(0,F.jsx)(V,{children:e=>(0,F.jsx)(H,{value:e,children:e},e)})]})]})}var De=e({AutocompleteBuildYourOwn:()=>ke}),Oe=[`Accessibility`,`Animation`,`Authentication`,`Caching`,`Forms`,`Internationalisation`,`Keyboard shortcuts`,`Routing`,`Server rendering`,`Theming`,`Validation`];function ke({value:e,onValueChange:t,name:r,mode:i=`list`}){return(0,F.jsxs)(v,{items:Oe,value:e,onValueChange:e=>t?.(e),name:r,mode:i,children:[(0,F.jsxs)(u,{render:(0,F.jsx)(S,{className:`w-64`}),children:[(0,F.jsx)(p,{"aria-label":`Topic`,placeholder:`Search the docs…`,className:`h-full min-w-0 flex-1 bg-transparent px-2.5 text-sm outline-none placeholder:text-muted-foreground`}),(0,F.jsx)(b,{align:`inline-end`,children:(0,F.jsx)(h,{"aria-label":`Clear`,render:(0,F.jsx)(x,{size:`icon-xs`,variant:`ghost`}),children:(0,F.jsx)(T,{})})})]}),(0,F.jsx)(o,{children:(0,F.jsx)(s,{side:`bottom`,sideOffset:4,align:`start`,className:`z-50`,children:(0,F.jsxs)(g,{className:`w-(--anchor-width) overflow-hidden rounded-md bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10`,children:[(0,F.jsx)(a,{className:`py-2 text-center text-sm text-muted-foreground empty:p-0`,children:`No topic matches.`}),(0,F.jsx)(d,{className:`max-h-80 overflow-y-auto p-1 data-empty:p-0`,children:e=>(0,F.jsx)(n,{value:e,className:`flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground`,children:e},e)})]})})})]})}var Ae=e({AutocompleteComposeLabelIssue:()=>Me}),je=[`bug`,`design`,`docs`,`good first issue`,`performance`,`question`];function Me(){let e=(0,P.useId)(),[t,n]=(0,P.useState)(``),[r,i]=(0,P.useState)([]),a=t.trim();return(0,F.jsxs)(N,{className:`w-full max-w-sm`,children:[(0,F.jsx)(pe,{children:(0,F.jsx)(M,{children:`Label this issue`})}),(0,F.jsxs)(j,{className:`grid gap-2`,children:[(0,F.jsx)(fe,{htmlFor:e,children:`Label`}),(0,F.jsxs)(I,{items:je,value:t,onValueChange:n,id:e,children:[(0,F.jsx)(R,{placeholder:`bug, docs, or your own…`,showClear:!0}),(0,F.jsxs)(B,{children:[(0,F.jsx)(U,{children:`Press Add to create a new label.`}),(0,F.jsx)(V,{children:e=>(0,F.jsx)(H,{value:e,children:e},e)})]})]}),(0,F.jsx)(`div`,{className:`flex min-h-6 flex-wrap gap-1.5`,role:`status`,children:r.length===0?(0,F.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`No labels yet.`}):r.map(e=>(0,F.jsx)(de,{children:e},e))})]}),(0,F.jsx)(A,{className:`justify-end`,children:(0,F.jsx)(k,{disabled:a===``||r.includes(a),onClick:()=>{i([...r,a]),n(``)},children:`Add`})})]})}var Ne=e({AutocompleteDefault:()=>Fe}),Pe=[`Accessibility`,`Animation`,`Authentication`,`Caching`,`Forms`,`Internationalisation`,`Keyboard shortcuts`,`Routing`,`Server rendering`,`Theming`,`Validation`];function Fe(){return(0,F.jsxs)(I,{items:Pe,children:[(0,F.jsx)(R,{className:`w-64`,"aria-label":`Topic`,placeholder:`Search the docs…`,showClear:!0}),(0,F.jsxs)(B,{children:[(0,F.jsx)(U,{children:`No topic matches.`}),(0,F.jsx)(V,{children:e=>(0,F.jsx)(H,{value:e,children:e},e)})]})]})}var Ie=e({AutocompleteGroups:()=>Re}),Le=[{value:`Components`,items:[`Button`,`Checkbox`,`Combobox`,`Dialog`,`Select`,`Switch`]},{value:`Guides`,items:[`Getting started`,`Theming`,`Writing a custom part`]},{value:`Reference`,items:[`Keyboard map`,`Data attributes`,`CSS variables`]}];function Re(){return(0,F.jsxs)(I,{items:Le,children:[(0,F.jsx)(R,{className:`w-64`,"aria-label":`Search`,placeholder:`Search components and guides…`}),(0,F.jsxs)(B,{children:[(0,F.jsx)(U,{children:`Nothing matches.`}),(0,F.jsx)(V,{children:(e,t)=>(0,F.jsxs)(he,{items:e.items,children:[t>0?(0,F.jsx)(ye,{}):null,(0,F.jsx)(ge,{children:e.value}),(0,F.jsx)(_e,{children:e=>(0,F.jsx)(H,{value:e,children:e},e)})]},e.value)})]})]})}var ze=e({AutocompleteHighlight:()=>Ve}),Be=[`Accessibility`,`Animation`,`Authentication`,`Caching`,`Forms`,`Internationalisation`,`Keyboard shortcuts`,`Routing`,`Server rendering`,`Theming`,`Validation`];function Ve(){return(0,F.jsxs)(I,{items:Be,children:[(0,F.jsx)(R,{className:`w-64`,"aria-label":`Topic`,placeholder:`Try “at”…`,showClear:!0}),(0,F.jsxs)(B,{children:[(0,F.jsx)(U,{children:`No topic matches.`}),(0,F.jsx)(V,{children:e=>(0,F.jsx)(H,{value:e,children:(0,F.jsx)(me,{children:e})},e)})]})]})}var He=e({AutocompleteInAForm:()=>We}),Ue=[`billing address`,`billing portal`,`change password`,`export data`,`invite a teammate`,`invoice history`,`single sign-on`];function We(){let[e,t]=(0,P.useState)(null);return(0,F.jsxs)(`form`,{role:`search`,className:`flex w-full max-w-sm flex-col gap-2`,onSubmit:e=>{e.preventDefault(),t(String(new FormData(e.currentTarget).get(`q`)??``))},children:[(0,F.jsxs)(`div`,{className:`flex gap-2`,children:[(0,F.jsx)(`div`,{className:`min-w-0 flex-1`,children:(0,F.jsxs)(I,{items:Ue,name:`q`,submitOnItemClick:!0,children:[(0,F.jsx)(R,{"aria-label":`Search help`,placeholder:`Search help…`,showClear:!0}),(0,F.jsxs)(B,{children:[(0,F.jsx)(U,{children:`No suggestion.`}),(0,F.jsx)(V,{children:e=>(0,F.jsx)(H,{value:e,children:e},e)})]})]})}),(0,F.jsxs)(k,{type:`submit`,children:[(0,F.jsx)(y,{}),`Search`]})]}),(0,F.jsx)(`p`,{className:`text-xs text-muted-foreground`,role:`status`,children:e===null?`Nothing searched yet.`:`Searched for "${e}"`})]})}var Ge=e({AutocompleteInline:()=>W}),Ke=[`git add`,`git branch`,`git checkout`,`git commit`,`git diff`,`git fetch`,`git log`,`git merge`,`git pull`,`git push`,`git rebase`,`git stash`];function W(){return(0,F.jsxs)(I,{items:Ke,mode:`inline`,children:[(0,F.jsx)(R,{className:`w-64`,"aria-label":`Command`,placeholder:`Type, then use the arrows…`}),(0,F.jsx)(B,{children:(0,F.jsx)(V,{children:e=>(0,F.jsx)(H,{value:e,children:e},e)})})]})}var G=`import { useEffect, useState } from "react"
import { LoaderCircleIcon } from "lucide-react"
import { Autocomplete, AutocompleteContent, AutocompleteEmpty, AutocompleteInput, AutocompleteItem, AutocompleteList, AutocompleteStatus } from "@kitora/ui/autocomplete"

const MOVIES = ["Alien", "Amélie", "Arrival", "Blade Runner", "Casablanca", "Gattaca", "Heat", "Her", "Jaws", "Metropolis", "Moon", "Solaris"]

/** A stand-in for your suggestions endpoint: it waits like a network call and gives up when the text changes. */
function suggestMovies(query: string, signal: AbortSignal): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => resolve(MOVIES.filter((title) => title.toLowerCase().includes(query.trim().toLowerCase())).slice(0, 5)), 450)
    signal.addEventListener("abort", () => {
      clearTimeout(timer)
      reject(new DOMException("aborted", "AbortError"))
    })
  })
}

export function AutocompleteAsyncSearch() {
  const [query, setQuery] = useState("")
  const [items, setItems] = useState<string[]>([])
  const [pending, setPending] = useState(false)

  useEffect(() => {
    if (query.trim() === "") {
      setItems([])
      setPending(false)
      return
    }
    const controller = new AbortController()
    setPending(true)
    suggestMovies(query, controller.signal)
      .then((found) => {
        setItems(found)
        setPending(false)
      })
      .catch(() => {})
    return () => controller.abort()
  }, [query])

  return (
    // \`items\` is what the server sent, so the root's own filter is off (\`filter={null}\`).
    <Autocomplete items={items} filter={null} value={query} onValueChange={setQuery}>
      <AutocompleteInput className="w-64" aria-label="Movie" placeholder="Search movies…" showClear />
      <AutocompleteContent>
        <AutocompleteStatus className={pending ? "gap-2" : "sr-only"}>
          {pending ? (
            <>
              <LoaderCircleIcon className="size-4 animate-spin" aria-hidden="true" />
              Searching…
            </>
          ) : (
            \`\${items.length} suggestions\`
          )}
        </AutocompleteStatus>
        <AutocompleteEmpty>{pending ? null : "No movie found."}</AutocompleteEmpty>
        <AutocompleteList>
          {(title: string) => (
            <AutocompleteItem key={title} value={title}>
              {title}
            </AutocompleteItem>
          )}
        </AutocompleteList>
      </AutocompleteContent>
    </Autocomplete>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>w(()=>import(`./async-search-CQP-KBG0.js`),[]));var K=`import { Autocomplete, AutocompleteContent, AutocompleteEmpty, AutocompleteInput, AutocompleteItem, AutocompleteList } from "@kitora/ui/autocomplete"

const CITIES = ["Amsterdam", "Athens", "Barcelona", "Berlin", "Bergen", "Brussels", "Copenhagen", "Dublin", "Lisbon", "Oslo", "Prague", "Vienna"]

export function AutocompleteBoth() {
  return (
    // \`both\` filters by what you typed, and writes the highlighted suggestion into the input as you arrow (Enter keeps it).
    <Autocomplete items={CITIES} mode="both">
      <AutocompleteInput className="w-64" aria-label="City" placeholder="Start typing a city…" />
      <AutocompleteContent>
        <AutocompleteEmpty>No city matches.</AutocompleteEmpty>
        <AutocompleteList>
          {(city: string) => (
            <AutocompleteItem key={city} value={city}>
              {city}
            </AutocompleteItem>
          )}
        </AutocompleteList>
      </AutocompleteContent>
    </Autocomplete>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>w(()=>import(`./both-BNqJMxdb.js`),[]));var q=`import { Autocomplete } from "@kitora/primitives/react"
import { InputGroup, InputGroupAddon, InputGroupButton } from "@kitora/ui/input-group"
import { XIcon } from "lucide-react"

const TOPICS = ["Accessibility", "Animation", "Authentication", "Caching", "Forms", "Internationalisation", "Keyboard shortcuts", "Routing", "Server rendering", "Theming", "Validation"]

/**
 * An autocomplete built from the primitives' parts (\`Autocomplete.Root\`, \`InputGroup\`, \`Input\`, \`Clear\`, \`Portal\`, \`Positioner\`, \`Popup\`, \`Empty\`, \`List\`,
 * \`Item\`) inside ui's input group, styled on their state attributes. The text is the value; \`mode="both"\` also completes the input inline.
 */
export function AutocompleteBuildYourOwn({
  value,
  onValueChange,
  name,
  mode = "list",
}: {
  value?: string
  onValueChange?: (value: string) => void
  name?: string
  mode?: "list" | "both" | "inline" | "none"
}) {
  return (
    <Autocomplete.Root items={TOPICS} value={value} onValueChange={(next) => onValueChange?.(next)} name={name} mode={mode}>
      <Autocomplete.InputGroup render={<InputGroup className="w-64" />}>
        <Autocomplete.Input aria-label="Topic" placeholder="Search the docs…" className="h-full min-w-0 flex-1 bg-transparent px-2.5 text-sm outline-none placeholder:text-muted-foreground" />
        <InputGroupAddon align="inline-end">
          <Autocomplete.Clear aria-label="Clear" render={<InputGroupButton size="icon-xs" variant="ghost" />}>
            <XIcon />
          </Autocomplete.Clear>
        </InputGroupAddon>
      </Autocomplete.InputGroup>
      <Autocomplete.Portal>
        <Autocomplete.Positioner side="bottom" sideOffset={4} align="start" className="z-50">
          <Autocomplete.Popup className="w-(--anchor-width) overflow-hidden rounded-md bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10">
            <Autocomplete.Empty className="py-2 text-center text-sm text-muted-foreground empty:p-0">No topic matches.</Autocomplete.Empty>
            <Autocomplete.List className="max-h-80 overflow-y-auto p-1 data-empty:p-0">
              {(topic: string) => (
                <Autocomplete.Item
                  key={topic}
                  value={topic}
                  className="flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground"
                >
                  {topic}
                </Autocomplete.Item>
              )}
            </Autocomplete.List>
          </Autocomplete.Popup>
        </Autocomplete.Positioner>
      </Autocomplete.Portal>
    </Autocomplete.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>w(()=>import(`./build-your-own-BIsK2OkS.js`),[]));var J=`import { useId, useState } from "react"
import { Badge } from "@kitora/ui/badge"
import { Autocomplete, AutocompleteContent, AutocompleteEmpty, AutocompleteInput, AutocompleteItem, AutocompleteList } from "@kitora/ui/autocomplete"
import { Button } from "@kitora/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@kitora/ui/card"
import { Label } from "@kitora/ui/label"

const LABELS = ["bug", "design", "docs", "good first issue", "performance", "question"]

export function AutocompleteComposeLabelIssue() {
  const id = useId()
  const [text, setText] = useState("")
  const [applied, setApplied] = useState<string[]>([])
  const label = text.trim()
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Label this issue</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-2">
        <Label htmlFor={id}>Label</Label>
        {/* Suggestions, not a list to choose from: any text is a label. */}
        <Autocomplete items={LABELS} value={text} onValueChange={setText} id={id}>
          <AutocompleteInput placeholder="bug, docs, or your own…" showClear />
          <AutocompleteContent>
            <AutocompleteEmpty>Press Add to create a new label.</AutocompleteEmpty>
            <AutocompleteList>
              {(item: string) => (
                <AutocompleteItem key={item} value={item}>
                  {item}
                </AutocompleteItem>
              )}
            </AutocompleteList>
          </AutocompleteContent>
        </Autocomplete>
        <div className="flex min-h-6 flex-wrap gap-1.5" role="status">
          {applied.length === 0 ? <span className="text-xs text-muted-foreground">No labels yet.</span> : applied.map((item) => <Badge key={item}>{item}</Badge>)}
        </div>
      </CardContent>
      <CardFooter className="justify-end">
        <Button
          disabled={label === "" || applied.includes(label)}
          onClick={() => {
            setApplied([...applied, label])
            setText("")
          }}
        >
          Add
        </Button>
      </CardFooter>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>w(()=>import(`./compose-cAbZZ3bd.js`),[]));var Y=`import { Autocomplete, AutocompleteContent, AutocompleteEmpty, AutocompleteInput, AutocompleteItem, AutocompleteList } from "@kitora/ui/autocomplete"

const TOPICS = ["Accessibility", "Animation", "Authentication", "Caching", "Forms", "Internationalisation", "Keyboard shortcuts", "Routing", "Server rendering", "Theming", "Validation"]

export function AutocompleteDefault() {
  return (
    <Autocomplete items={TOPICS}>
      <AutocompleteInput className="w-64" aria-label="Topic" placeholder="Search the docs…" showClear />
      <AutocompleteContent>
        <AutocompleteEmpty>No topic matches.</AutocompleteEmpty>
        <AutocompleteList>
          {(topic: string) => (
            <AutocompleteItem key={topic} value={topic}>
              {topic}
            </AutocompleteItem>
          )}
        </AutocompleteList>
      </AutocompleteContent>
    </Autocomplete>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>w(()=>import(`./default-DzXSlm-y.js`),[]));var X=`import { Autocomplete, AutocompleteCollection, AutocompleteContent, AutocompleteEmpty, AutocompleteGroup, AutocompleteInput, AutocompleteItem, AutocompleteLabel, AutocompleteList, AutocompleteSeparator } from "@kitora/ui/autocomplete"

interface Group {
  value: string
  items: string[]
}

const GROUPS: Group[] = [
  { value: "Components", items: ["Button", "Checkbox", "Combobox", "Dialog", "Select", "Switch"] },
  { value: "Guides", items: ["Getting started", "Theming", "Writing a custom part"] },
  { value: "Reference", items: ["Keyboard map", "Data attributes", "CSS variables"] },
]

export function AutocompleteGroups() {
  return (
    <Autocomplete items={GROUPS}>
      <AutocompleteInput className="w-64" aria-label="Search" placeholder="Search components and guides…" />
      <AutocompleteContent>
        <AutocompleteEmpty>Nothing matches.</AutocompleteEmpty>
        <AutocompleteList>
          {(group: Group, index: number) => (
            <AutocompleteGroup key={group.value} items={group.items}>
              {index > 0 ? <AutocompleteSeparator /> : null}
              <AutocompleteLabel>{group.value}</AutocompleteLabel>
              <AutocompleteCollection>
                {(item: string) => (
                  <AutocompleteItem key={item} value={item}>
                    {item}
                  </AutocompleteItem>
                )}
              </AutocompleteCollection>
            </AutocompleteGroup>
          )}
        </AutocompleteList>
      </AutocompleteContent>
    </Autocomplete>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>w(()=>import(`./groups-CZ3l0ABV.js`),[]));var Z=`import { Autocomplete, AutocompleteContent, AutocompleteEmpty, AutocompleteInput, AutocompleteItem, AutocompleteItemText, AutocompleteList } from "@kitora/ui/autocomplete"

const TOPICS = ["Accessibility", "Animation", "Authentication", "Caching", "Forms", "Internationalisation", "Keyboard shortcuts", "Routing", "Server rendering", "Theming", "Validation"]

export function AutocompleteHighlight() {
  return (
    <Autocomplete items={TOPICS}>
      <AutocompleteInput className="w-64" aria-label="Topic" placeholder="Try “at”…" showClear />
      <AutocompleteContent>
        <AutocompleteEmpty>No topic matches.</AutocompleteEmpty>
        <AutocompleteList>
          {(topic: string) => (
            <AutocompleteItem key={topic} value={topic}>
              {/* Marks the typed text in each suggestion; the option's name stays the whole word. */}
              <AutocompleteItemText>{topic}</AutocompleteItemText>
            </AutocompleteItem>
          )}
        </AutocompleteList>
      </AutocompleteContent>
    </Autocomplete>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>w(()=>import(`./highlight-LVVNopDl.js`),[]));var Q=`import { useState } from "react"
import { SearchIcon } from "lucide-react"
import { Autocomplete, AutocompleteContent, AutocompleteEmpty, AutocompleteInput, AutocompleteItem, AutocompleteList } from "@kitora/ui/autocomplete"
import { Button } from "@kitora/ui/button"

const QUERIES = ["billing address", "billing portal", "change password", "export data", "invite a teammate", "invoice history", "single sign-on"]

export function AutocompleteInAForm() {
  const [searched, setSearched] = useState<string | null>(null)
  return (
    <form
      role="search"
      className="flex w-full max-w-sm flex-col gap-2"
      onSubmit={(event) => {
        event.preventDefault()
        setSearched(String(new FormData(event.currentTarget).get("q") ?? ""))
      }}
    >
      <div className="flex gap-2">
        <div className="min-w-0 flex-1">
          {/* \`submitOnItemClick\` submits the form when a suggestion is pressed, as Enter does with nothing highlighted. */}
          <Autocomplete items={QUERIES} name="q" submitOnItemClick>
            <AutocompleteInput aria-label="Search help" placeholder="Search help…" showClear />
            <AutocompleteContent>
              <AutocompleteEmpty>No suggestion.</AutocompleteEmpty>
              <AutocompleteList>
                {(query: string) => (
                  <AutocompleteItem key={query} value={query}>
                    {query}
                  </AutocompleteItem>
                )}
              </AutocompleteList>
            </AutocompleteContent>
          </Autocomplete>
        </div>
        <Button type="submit">
          <SearchIcon />
          Search
        </Button>
      </div>
      <p className="text-xs text-muted-foreground" role="status">
        {searched === null ? "Nothing searched yet." : \`Searched for "\${searched}"\`}
      </p>
    </form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>w(()=>import(`./in-a-form-B4l95M_q.js`),[]));var $=`import { Autocomplete, AutocompleteContent, AutocompleteInput, AutocompleteItem, AutocompleteList } from "@kitora/ui/autocomplete"

const COMMANDS = ["git add", "git branch", "git checkout", "git commit", "git diff", "git fetch", "git log", "git merge", "git pull", "git push", "git rebase", "git stash"]

export function AutocompleteInline() {
  return (
    // \`inline\` lists every suggestion and writes the highlighted one into the input as you arrow; moving past the ends gives your own text back.
    <Autocomplete items={COMMANDS} mode="inline">
      <AutocompleteInput className="w-64" aria-label="Command" placeholder="Type, then use the arrows…" />
      <AutocompleteContent>
        <AutocompleteList>
          {(command: string) => (
            <AutocompleteItem key={command} value={command}>
              {command}
            </AutocompleteItem>
          )}
        </AutocompleteList>
      </AutocompleteContent>
    </Autocomplete>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>w(()=>import(`./inline-DDQjm9X9.js`),[]));var qe={"./demos/autocomplete/async-search.tsx":be,"./demos/autocomplete/both.tsx":we,"./demos/autocomplete/build-your-own.tsx":De,"./demos/autocomplete/compose.tsx":Ae,"./demos/autocomplete/default.tsx":Ne,"./demos/autocomplete/groups.tsx":Ie,"./demos/autocomplete/highlight.tsx":ze,"./demos/autocomplete/in-a-form.tsx":He,"./demos/autocomplete/inline.tsx":Ge},Je={"./demos/autocomplete/async-search.tsx":G,"./demos/autocomplete/both.tsx":K,"./demos/autocomplete/build-your-own.tsx":q,"./demos/autocomplete/compose.tsx":J,"./demos/autocomplete/default.tsx":Y,"./demos/autocomplete/groups.tsx":X,"./demos/autocomplete/highlight.tsx":Z,"./demos/autocomplete/in-a-form.tsx":Q,"./demos/autocomplete/inline.tsx":$};export{qe as modules,Je as sources};