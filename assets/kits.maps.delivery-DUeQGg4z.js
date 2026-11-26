import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{t as n}from"./navigation-24x6OBW7.js";import{t as r}from"./pause-sHDNzYzL.js";import{t as i}from"./play-BfkkEACO.js";import{Ai as a,Bc as o,Cc as s,Ic as c,Si as l,Uo as u,hi as d,ti as f}from"./index-B9ukmIN1.js";import"./kit-gallery-Bph7isB2.js";import{t as p}from"./example-BGnSQG2Y.js";import{D as m,S as h,T as g,b as _,f as v,i as y,m as b,o as x,t as S,x as C}from"./-kits.maps.shared-Bsr14S3E.js";import{n as w,t as T}from"./samples-BNp5YyQu.js";var E=e(o(),1),D=c(),O=C(T),k=24e3,A=300,j=g(T);function M(){let e=u(),[t,o]=(0,E.useState)(.18),[s,c]=(0,E.useState)(!1);(0,E.useEffect)(()=>{if(!s)return;let e=performance.now(),t=requestAnimationFrame(function n(r){let i=r-e;e=r,o(e=>Math.min(1,e+i/k)),t=requestAnimationFrame(n)});return()=>cancelAnimationFrame(t)},[s]),(0,E.useEffect)(()=>{t>=1&&c(!1)},[t]);let p=()=>{t>=1&&o(0),c(e=>t>=1||!e)},g=()=>{c(!1),o(0)},S=_(T,t),{done:C,ahead:M}=h(T,t),N=O*(1-t);return(0,D.jsxs)(`div`,{className:`grid h-full grid-cols-1 gap-2 md:grid-cols-[1fr_240px]`,children:[(0,D.jsxs)(x,{className:`min-h-[260px]`,label:`Courier route`,fit:j,fitPadding:36,children:[(0,D.jsx)(b,{id:`done`,path:C,color:`#94a3b8`,width:5}),(0,D.jsx)(b,{id:`ahead`,path:M,color:`#2563eb`,width:5}),w.map((e,n)=>{let r=_(T,e.at);if(!r)return null;let i=t>=e.at;return(0,D.jsx)(v,{lngLat:r.point,children:(0,D.jsx)(y,{label:`${e.label}${i?`, done`:``}`,tone:i?`neutral`:n===w.length-1?`danger`:`violet`,children:i?(0,D.jsx)(a,{className:`size-3`}):n+1})},e.id)}),S?(0,D.jsx)(v,{lngLat:S.point,anchor:`center`,zIndex:3,children:(0,D.jsx)(`span`,{role:`img`,"aria-label":`Courier`,className:`grid size-7 place-items-center rounded-full border-2 border-white bg-emerald-500 text-white shadow-[0_0_0_6px_rgb(16_185_129/0.25)]`,children:(0,D.jsx)(n,{className:`size-3.5 fill-current`,style:{transform:`rotate(${S.bearing-45}deg)`}})})}):null]}),(0,D.jsxs)(`aside`,{className:`flex flex-col gap-2 rounded-lg border bg-card p-2 text-[13px]`,"aria-label":`Trip`,children:[(0,D.jsxs)(`div`,{className:`grid grid-cols-2 gap-1.5 tabular-nums`,children:[(0,D.jsxs)(`div`,{className:`rounded-md bg-muted/60 px-2 py-1`,children:[(0,D.jsx)(`div`,{className:`text-[11px] text-muted-foreground`,children:`Remaining`}),(0,D.jsx)(`div`,{className:`font-medium`,children:m(N,{units:`metric`,locale:e})})]}),(0,D.jsxs)(`div`,{className:`rounded-md bg-muted/60 px-2 py-1`,children:[(0,D.jsx)(`div`,{className:`text-[11px] text-muted-foreground`,children:`ETA`}),(0,D.jsx)(`div`,{className:`font-medium`,children:t>=1?`Arrived`:`${Math.ceil(N/A)} min`})]})]}),(0,D.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,D.jsx)(f,{size:`icon-sm`,variant:`outline`,onClick:p,"aria-label":s?`Pause`:`Play`,children:s?(0,D.jsx)(r,{}):(0,D.jsx)(i,{})}),(0,D.jsx)(f,{size:`icon-sm`,variant:`ghost`,onClick:g,"aria-label":`Restart`,children:(0,D.jsx)(l,{})}),(0,D.jsx)(`input`,{type:`range`,min:0,max:1e3,value:Math.round(t*1e3),onChange:e=>o(Number(e.target.value)/1e3),"aria-label":`Trip progress`,className:`h-7 min-w-0 flex-1 accent-primary`})]}),(0,D.jsx)(`ol`,{className:`flex flex-col`,"aria-label":`Stops`,children:w.map(n=>{let r=t>=n.at,i=O*Math.max(0,n.at-t);return(0,D.jsxs)(`li`,{className:d(`flex h-7 items-center gap-2 border-b text-[12px] last:border-b-0`,r&&`text-muted-foreground`),children:[(0,D.jsx)(`span`,{className:d(`grid size-4 place-items-center rounded-full border`,r?`border-emerald-500 bg-emerald-500 text-white`:`border-border`),children:r?(0,D.jsx)(a,{className:`size-2.5`}):null}),(0,D.jsx)(`span`,{className:d(`min-w-0 flex-1 truncate`,r&&`line-through`),children:n.label}),(0,D.jsx)(`span`,{className:`text-[11px] tabular-nums`,children:r?`done`:m(i,{units:`metric`,locale:e})})]},n.id)})})]})]})}var N=`import { useEffect, useState } from "react"
import { Check, Navigation, Pause, Play, RotateCcw } from "lucide-react"
import { useDefaultLocale } from "@kitora/primitives/react"
import { Button } from "@kitora/ui/button"
import { cn } from "@kitora/ui/utils"
import { MapMarker, MapPin, MapRoute, MapView, boundsOf, formatDistance, pointAlong, routeLength, splitRoute } from "@kitora/maps"
import { COURIER_ROUTE, COURIER_STOPS } from "@kitora/maps/samples"

const TOTAL_M = routeLength(COURIER_ROUTE)
/** One full trip in the demo takes this long. */
const TRIP_MS = 24_000
/** A courier rides at ~18 km/h in town: minutes left for the ETA column. */
const SPEED_M_PER_MIN = 300
const FIT = boundsOf(COURIER_ROUTE)

/** Delivery tracking: the route splits into travelled (grey) and ahead (blue) as the courier moves; stops tick off. */
export function DeliveryTracking() {
  // the reader's locale (the build's until hydration, so the server HTML matches)
  const locale = useDefaultLocale()
  const [progress, setProgress] = useState(0.18)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!playing) return
    let last = performance.now()
    let raf = requestAnimationFrame(function tick(now) {
      const dt = now - last
      last = now
      setProgress((p) => Math.min(1, p + dt / TRIP_MS))
      raf = requestAnimationFrame(tick)
    })
    return () => cancelAnimationFrame(raf)
  }, [playing])

  // the trip ended: stop the clock
  useEffect(() => {
    if (progress >= 1) setPlaying(false)
  }, [progress])

  const toggle = (): void => {
    if (progress >= 1) setProgress(0)
    setPlaying((p) => progress >= 1 || !p)
  }
  const restart = (): void => {
    setPlaying(false)
    setProgress(0)
  }

  const at = pointAlong(COURIER_ROUTE, progress)
  const { done, ahead } = splitRoute(COURIER_ROUTE, progress)
  const left = TOTAL_M * (1 - progress)

  return (
    <div className="grid h-full grid-cols-1 gap-2 md:grid-cols-[1fr_240px]">
      <MapView className="min-h-[260px]" label="Courier route" fit={FIT} fitPadding={36}>
        <MapRoute id="done" path={done} color="#94a3b8" width={5} />
        <MapRoute id="ahead" path={ahead} color="#2563eb" width={5} />
        {COURIER_STOPS.map((s, i) => {
          const p = pointAlong(COURIER_ROUTE, s.at)
          if (!p) return null
          const passed = progress >= s.at
          return (
            <MapMarker key={s.id} lngLat={p.point}>
              <MapPin label={\`\${s.label}\${passed ? ", done" : ""}\`} tone={passed ? "neutral" : i === COURIER_STOPS.length - 1 ? "danger" : "violet"}>
                {passed ? <Check className="size-3" /> : i + 1}
              </MapPin>
            </MapMarker>
          )
        })}
        {at ? (
          <MapMarker lngLat={at.point} anchor="center" zIndex={3}>
            <span role="img" aria-label="Courier" className="grid size-7 place-items-center rounded-full border-2 border-white bg-emerald-500 text-white shadow-[0_0_0_6px_rgb(16_185_129/0.25)]">
              <Navigation className="size-3.5 fill-current" style={{ transform: \`rotate(\${at.bearing - 45}deg)\` }} />
            </span>
          </MapMarker>
        ) : null}
      </MapView>
      <aside className="flex flex-col gap-2 rounded-lg border bg-card p-2 text-[13px]" aria-label="Trip">
        <div className="grid grid-cols-2 gap-1.5 tabular-nums">
          <div className="rounded-md bg-muted/60 px-2 py-1">
            <div className="text-[11px] text-muted-foreground">Remaining</div>
            <div className="font-medium">{formatDistance(left, { units: "metric", locale })}</div>
          </div>
          <div className="rounded-md bg-muted/60 px-2 py-1">
            <div className="text-[11px] text-muted-foreground">ETA</div>
            <div className="font-medium">{progress >= 1 ? "Arrived" : \`\${Math.ceil(left / SPEED_M_PER_MIN)} min\`}</div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button size="icon-sm" variant="outline" onClick={toggle} aria-label={playing ? "Pause" : "Play"}>
            {playing ? <Pause /> : <Play />}
          </Button>
          <Button size="icon-sm" variant="ghost" onClick={restart} aria-label="Restart">
            <RotateCcw />
          </Button>
          <input type="range" min={0} max={1000} value={Math.round(progress * 1000)} onChange={(e) => setProgress(Number(e.target.value) / 1000)} aria-label="Trip progress" className="h-7 min-w-0 flex-1 accent-primary" />
        </div>
        <ol className="flex flex-col" aria-label="Stops">
          {COURIER_STOPS.map((s) => {
            const passed = progress >= s.at
            const dist = TOTAL_M * Math.max(0, s.at - progress)
            return (
              <li key={s.id} className={cn("flex h-7 items-center gap-2 border-b text-[12px] last:border-b-0", passed && "text-muted-foreground")}>
                <span className={cn("grid size-4 place-items-center rounded-full border", passed ? "border-emerald-500 bg-emerald-500 text-white" : "border-border")}>{passed ? <Check className="size-2.5" /> : null}</span>
                <span className={cn("min-w-0 flex-1 truncate", passed && "line-through")}>{s.label}</span>
                <span className="text-[11px] tabular-nums">{passed ? "done" : formatDistance(dist, { units: "metric", locale })}</span>
              </li>
            )
          })}
        </ol>
      </aside>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>s(()=>import(`./delivery-Cm9Nci-E.js`),[]));function P(){return(0,D.jsxs)(`div`,{children:[(0,D.jsx)(t,{title:`Delivery tracking`,children:"Two `MapRoute`s from one path: `splitRoute` cuts it where the courier is, and `pointAlong` gives the position and heading."}),(0,D.jsx)(p,{n:1,title:`A courier on its way`,blurb:`Press play or drag the slider. Stops tick off as the courier passes them; distance and ETA count down.`,code:N,children:(0,D.jsx)(S,{testId:`delivery`,height:460,children:(0,D.jsx)(M,{})})})]})}export{P as component};