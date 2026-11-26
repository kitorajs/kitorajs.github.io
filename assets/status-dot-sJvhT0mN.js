import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{Cc as t,Ic as n}from"./index-9y5uwRd3.js";import{t as r}from"./badges-CKbRtUKd.js";import{n as i,t as a}from"./status-dot-C4Vmf8Mk.js";var o=e({StatusDotLiveStatusList:()=>l}),s=n(),c=[{name:`API`,tone:`success`,status:`All systems normal`,pulse:!1},{name:`Workers`,tone:`warning`,status:`Degraded performance`,pulse:!0},{name:`Egress`,tone:`danger`,status:`Elevated error rate`,pulse:!0},{name:`Sandbox`,tone:`neutral`,status:`Paused`,pulse:!1}];function l(){return(0,s.jsx)(`ul`,{className:`flex w-full max-w-xs flex-col gap-2.5 text-sm`,"aria-label":`Services`,children:c.map(e=>(0,s.jsxs)(`li`,{className:`flex items-center justify-between gap-3`,children:[(0,s.jsx)(`span`,{className:`font-medium`,children:e.name}),(0,s.jsx)(i,{tone:e.tone,pulse:e.pulse,children:e.status})]},e.name))})}var u=e({StatusDotTonesAndSizes:()=>d});function d(){return(0,s.jsxs)(`div`,{className:`flex flex-col gap-3 text-sm`,children:[(0,s.jsx)(`div`,{className:`flex flex-wrap items-center gap-3`,children:r.map(e=>(0,s.jsx)(i,{tone:e,label:e},e))}),(0,s.jsx)(`div`,{className:`flex flex-wrap items-center gap-3`,children:a.map(e=>(0,s.jsx)(i,{tone:`success`,size:e,children:e},e))})]})}var f=`import { StatusDot } from "@kitora/display"

const SERVICES = [
  { name: "API", tone: "success", status: "All systems normal", pulse: false },
  { name: "Workers", tone: "warning", status: "Degraded performance", pulse: true },
  { name: "Egress", tone: "danger", status: "Elevated error rate", pulse: true },
  { name: "Sandbox", tone: "neutral", status: "Paused", pulse: false },
] as const

// A dot with a visible label per service; \`pulse\` marks the live states (it stands still under reduced motion).
export function StatusDotLiveStatusList() {
  return (
    <ul className="flex w-full max-w-xs flex-col gap-2.5 text-sm" aria-label="Services">
      {SERVICES.map((s) => (
        <li key={s.name} className="flex items-center justify-between gap-3">
          <span className="font-medium">{s.name}</span>
          <StatusDot tone={s.tone} pulse={s.pulse}>
            {s.status}
          </StatusDot>
        </li>
      ))}
    </ul>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(f,()=>t(()=>import(`./live-status-list-DwrxI3oj.js`),[]));var p=`import { BADGE_TONES, STATUS_DOT_SIZES, StatusDot } from "@kitora/display"

// Every tone and every size. A dot with no visible text takes \`label\`, so it is still announced.
export function StatusDotTonesAndSizes() {
  return (
    <div className="flex flex-col gap-3 text-sm">
      <div className="flex flex-wrap items-center gap-3">
        {BADGE_TONES.map((tone) => (
          <StatusDot key={tone} tone={tone} label={tone} />
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        {STATUS_DOT_SIZES.map((size) => (
          <StatusDot key={size} tone="success" size={size}>
            {size}
          </StatusDot>
        ))}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(p,()=>t(()=>import(`./tones-and-sizes-Bewcze6e.js`),[]));var m={"./demos/status-dot/live-status-list.tsx":o,"./demos/status-dot/tones-and-sizes.tsx":u},h={"./demos/status-dot/live-status-list.tsx":f,"./demos/status-dot/tones-and-sizes.tsx":p};export{m as modules,h as sources};