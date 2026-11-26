import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./mention-B4CGzRoD.js";import{Bc as r,Cc as i,Ic as a}from"./index-q72zUtm9.js";import{t as o}from"./label-DjxTNoON.js";var s=e({MentionAsyncOptions:()=>d}),c=a(),l=[`Ada Lovelace`,`Alan Turing`,`Barbara Liskov`,`Donald Knuth`,`Edsger Dijkstra`,`Frances Allen`,`Grace Hopper`,`Katherine Johnson`,`Margaret Hamilton`,`Tim Berners-Lee`].map(e=>({id:e.toLowerCase().replace(/\s+/g,`-`),label:e}));async function u(e,t){await new Promise((e,n)=>{let r=setTimeout(e,400);t.addEventListener(`abort`,()=>{clearTimeout(r),n(new DOMException(`aborted`,`AbortError`))})});let n=e.toLowerCase();return l.filter(e=>e.label.toLowerCase().includes(n))}function d(){return(0,c.jsxs)(`div`,{className:`flex w-full max-w-sm flex-col gap-1.5`,children:[(0,c.jsx)(o,{htmlFor:`mention-async`,children:`Assign to`}),(0,c.jsx)(n,{id:`mention-async`,singleLine:!0,placeholder:`@name`,triggers:[{char:`@`,loadItems:u,label:`People`}]})]})}var f=e({MentionDefault:()=>g}),p=t(r(),1),m=[{id:`ada`,label:`Ada Lovelace`,description:`Engineering`},{id:`alan`,label:`Alan Turing`,description:`Research`},{id:`grace`,label:`Grace Hopper`,description:`Platform`,keywords:[`admiral`]},{id:`linus`,label:`Linus Torvalds`,description:`Away`,disabled:!0}],h=[{id:`general`,label:`general`},{id:`design`,label:`design`},{id:`releases`,label:`releases`}];function g(){let[e,t]=(0,p.useState)(``);return(0,c.jsxs)(`div`,{className:`flex w-full max-w-sm flex-col gap-1.5`,children:[(0,c.jsx)(o,{htmlFor:`mention-default`,children:`Comment`}),(0,c.jsx)(n,{id:`mention-default`,value:e,onChange:t,placeholder:`Type @ to mention someone, # for a channel`,triggers:[{char:`@`,items:m,label:`People`},{char:`#`,items:h,label:`Channels`,insert:e=>`#${e.id}`}]})]})}var _=`import { Mention } from "@kitora/collections/ui"
import { Label } from "@kitora/ui/label"

const DIRECTORY = ["Ada Lovelace", "Alan Turing", "Barbara Liskov", "Donald Knuth", "Edsger Dijkstra", "Frances Allen", "Grace Hopper", "Katherine Johnson", "Margaret Hamilton", "Tim Berners-Lee"].map((name) => ({ id: name.toLowerCase().replace(/\\s+/g, "-"), label: name }))

/** A pretend directory search: answers after a short wait, cancelled when the query moves on. */
async function searchPeople(query: string, signal: AbortSignal) {
  await new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, 400)
    signal.addEventListener("abort", () => {
      clearTimeout(timer)
      reject(new DOMException("aborted", "AbortError"))
    })
  })
  const q = query.toLowerCase()
  return DIRECTORY.filter((person) => person.label.toLowerCase().includes(q))
}

// \`loadItems\` fetches suggestions for the query (debounced, the stale answer dropped), with a loading row while it waits.
// \`singleLine\` draws a one-line input instead of the textarea.
export function MentionAsyncOptions() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-1.5">
      <Label htmlFor="mention-async">Assign to</Label>
      <Mention id="mention-async" singleLine placeholder="@name" triggers={[{ char: "@", loadItems: searchPeople, label: "People" }]} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>i(()=>import(`./async-options-NNXef4pN.js`),[]));var v=`import { useState } from "react"
import { Mention } from "@kitora/collections/ui"
import { Label } from "@kitora/ui/label"

const PEOPLE = [
  { id: "ada", label: "Ada Lovelace", description: "Engineering" },
  { id: "alan", label: "Alan Turing", description: "Research" },
  { id: "grace", label: "Grace Hopper", description: "Platform", keywords: ["admiral"] },
  { id: "linus", label: "Linus Torvalds", description: "Away", disabled: true },
]
const CHANNELS = [
  { id: "general", label: "general" },
  { id: "design", label: "design" },
  { id: "releases", label: "releases" },
]

// Type @ for people or # for channels: ↑ ↓ move, Enter or Tab inserts the name as plain text, Escape closes. Focus stays in the field.
export function MentionDefault() {
  const [text, setText] = useState("")
  return (
    <div className="flex w-full max-w-sm flex-col gap-1.5">
      <Label htmlFor="mention-default">Comment</Label>
      <Mention
        id="mention-default"
        value={text}
        onChange={setText}
        placeholder="Type @ to mention someone, # for a channel"
        triggers={[
          { char: "@", items: PEOPLE, label: "People" },
          { char: "#", items: CHANNELS, label: "Channels", insert: (channel) => \`#\${channel.id}\` },
        ]}
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>i(()=>import(`./default-B_M5iKex.js`),[]));var y={"./demos/mention/async-options.tsx":s,"./demos/mention/default.tsx":f},b={"./demos/mention/async-options.tsx":_,"./demos/mention/default.tsx":v};export{y as modules,b as sources};