import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{n as t}from"./contrast-XXF7XhZ8.js";import{Bc as n,Cc as r,Ic as i,ti as a}from"./index-B9ukmIN1.js";var o=e(n(),1),s=i(),c={passing:{label:`Passing pair`,fg:{l:.48,c:.01,h:285},bg:{l:1,c:0,h:0}},failing:{label:`Try a failing pair`,fg:{l:.68,c:.02,h:285},bg:{l:1,c:0,h:0}}};function l(){let[e,n]=(0,o.useState)({id:`passing`,n:0}),r=c[e.id];return(0,s.jsxs)(`div`,{className:`grid gap-3`,children:[(0,s.jsx)(`div`,{role:`group`,"aria-label":`Start from`,className:`flex flex-wrap gap-1.5`,children:Object.keys(c).map(t=>(0,s.jsx)(a,{type:`button`,size:`xs`,variant:e.id===t?`secondary`:`outline`,"aria-pressed":e.id===t,onClick:()=>n(e=>({id:t,n:e.n+1})),children:c[t].label},t))}),(0,s.jsx)(t.Panel,{defaultForeground:r.fg,defaultBackground:r.bg},e.n)]})}var u=`import { useState } from "react"
import { ContrastChecker, type Oklch } from "@kitora/theme"
import { Button } from "@kitora/ui/button"

/** A named starting pair for the checker. */
interface Pair {
  readonly label: string
  readonly fg: Oklch
  readonly bg: Oklch
}

/**
 * The demo opens on a pair that passes AA (so the page itself has no contrast failures) and keeps a
 * failing pair one click away, to show a Fail grade and the Fix button.
 */
const PAIRS = {
  passing: { label: "Passing pair", fg: { l: 0.48, c: 0.01, h: 285 }, bg: { l: 1, c: 0, h: 0 } },
  failing: { label: "Try a failing pair", fg: { l: 0.68, c: 0.02, h: 285 }, bg: { l: 1, c: 0, h: 0 } },
} as const satisfies Record<string, Pair>
type PairId = keyof typeof PAIRS

/** Two colours (hex, rgb() or oklch()), the WCAG ratio, the grade per use, and a one-click fix. */
export function BasicChecker() {
  // a preset click remounts the checker (key) so it restarts from that pair; edits stay in the checker
  const [start, setStart] = useState<{ readonly id: PairId; readonly n: number }>({ id: "passing", n: 0 })
  const pair = PAIRS[start.id]
  return (
    <div className="grid gap-3">
      <div role="group" aria-label="Start from" className="flex flex-wrap gap-1.5">
        {(Object.keys(PAIRS) as PairId[]).map((id) => (
          <Button key={id} type="button" size="xs" variant={start.id === id ? "secondary" : "outline"} aria-pressed={start.id === id} onClick={() => setStart((s) => ({ id, n: s.n + 1 }))}>
            {PAIRS[id].label}
          </Button>
        ))}
      </div>
      <ContrastChecker.Panel key={start.n} defaultForeground={pair.fg} defaultBackground={pair.bg} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(u,()=>r(()=>import(`./checker-BrL_93pz.js`),[]));export{l as n,u as t};