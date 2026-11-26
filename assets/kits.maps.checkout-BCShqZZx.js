import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./location-picker-Bncckx8K.js";import{s as n}from"./kit-docs-CvNs0WqT.js";import{Bc as r,Cc as i,Ic as a,Uo as o,ti as s}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as c}from"./example-CZLJLtIC.js";import{D as l,E as u,t as d}from"./-kits.maps.shared-D_iIEV7i.js";import{a as f}from"./samples-Dr5eWr2r.js";var p=e(r(),1),m=a(),h={lng:-.1052,lat:51.5234},g=8e3,_=2.5,v=.6;function y(){let e=o(),[n,r]=(0,p.useState)(`Ada Lovelace`),[i,a]=(0,p.useState)({point:{lng:-.1246,lat:51.5007},place:null}),[c,d]=(0,p.useState)(!1),y=i?u(h,i.point):null,b=y!==null&&y>g,x=y!==null&&!b?_+y/1e3*v:null;return(0,m.jsxs)(`form`,{className:`grid h-full grid-cols-1 gap-3 text-[13px] md:grid-cols-[1fr_220px]`,onSubmit:e=>{e.preventDefault(),d(!0)},children:[(0,m.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,m.jsxs)(`label`,{className:`flex flex-col gap-1 text-[12px] font-medium text-foreground/80`,children:[`Name`,(0,m.jsx)(`input`,{value:n,onChange:e=>r(e.target.value),required:!0,className:`h-7 rounded-md border border-input bg-background px-2 text-[13px] font-normal outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 dark:bg-input/30`})]}),(0,m.jsx)(t,{geocoder:f,label:`Deliver to`,height:250,value:i,onChange:e=>{a(e),d(!1)},defaultCamera:{center:h,zoom:11}})]}),(0,m.jsxs)(`aside`,{className:`flex flex-col gap-2 rounded-lg border bg-card p-2.5`,"aria-label":`Order summary`,children:[(0,m.jsx)(`div`,{className:`text-[12px] font-medium`,children:`Summary`}),(0,m.jsxs)(`dl`,{className:`grid grid-cols-[1fr_auto] gap-y-1 text-[12px] tabular-nums`,children:[(0,m.jsx)(`dt`,{className:`text-muted-foreground`,children:`Distance`}),(0,m.jsx)(`dd`,{children:y===null?`–`:l(y,{units:`metric`,locale:e})}),(0,m.jsx)(`dt`,{className:`text-muted-foreground`,children:`Delivery fee`}),(0,m.jsx)(`dd`,{children:x===null?`–`:`£${x.toFixed(2)}`})]}),b?(0,m.jsxs)(`p`,{role:`alert`,className:`rounded-md bg-destructive/10 px-2 py-1 text-[12px] text-destructive`,children:[`Outside our `,l(g,{units:`metric`,locale:e}),` zone. Pick a spot closer to central London.`]}):null,(0,m.jsx)(s,{type:`submit`,size:`sm`,disabled:!i||b||!n.trim(),className:`mt-auto`,children:`Place order`}),c?(0,m.jsxs)(`p`,{className:`text-[12px] text-emerald-700 dark:text-emerald-400`,role:`status`,children:[`Order placed for `,n,`.`]}):null,(0,m.jsx)(`pre`,{className:`max-h-28 overflow-auto rounded bg-muted p-1.5 font-mono text-[10px] text-muted-foreground`,children:JSON.stringify(i,null,1)})]})]})}var b=`import { useState } from "react"
import { useDefaultLocale } from "@kitora/primitives/react"
import { Button } from "@kitora/ui/button"
import { LocationPicker, distanceMeters, formatDistance, type PickedLocation } from "@kitora/maps"
import { demoGeocoder } from "@kitora/maps/samples"

/** The kitchen the courier leaves from, and how far it delivers. */
const KITCHEN = { lng: -0.1052, lat: 51.5234 }
const RADIUS_M = 8_000
const BASE_FEE = 2.5
const FEE_PER_KM = 0.6

/** A controlled \`LocationPicker\` in a delivery form: the app owns the value, derives the fee, and refuses drops outside the zone. */
export function CheckoutAddress() {
  // the reader's locale (the build's until hydration, so the server HTML matches)
  const locale = useDefaultLocale()
  const [name, setName] = useState("Ada Lovelace")
  const [where, setWhere] = useState<PickedLocation | null>({ point: { lng: -0.1246, lat: 51.5007 }, place: null })
  const [sent, setSent] = useState(false)
  const dist = where ? distanceMeters(KITCHEN, where.point) : null
  const outside = dist !== null && dist > RADIUS_M
  const fee = dist !== null && !outside ? BASE_FEE + (dist / 1000) * FEE_PER_KM : null
  return (
    <form
      className="grid h-full grid-cols-1 gap-3 text-[13px] md:grid-cols-[1fr_220px]"
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
    >
      <div className="flex flex-col gap-2">
        <label className="flex flex-col gap-1 text-[12px] font-medium text-foreground/80">
          Name
          <input value={name} onChange={(e) => setName(e.target.value)} required className="h-7 rounded-md border border-input bg-background px-2 text-[13px] font-normal outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 dark:bg-input/30" />
        </label>
        <LocationPicker
          geocoder={demoGeocoder}
          label="Deliver to"
          height={250}
          value={where}
          onChange={(v) => {
            setWhere(v)
            setSent(false)
          }}
          defaultCamera={{ center: KITCHEN, zoom: 11 }}
        />
      </div>
      <aside className="flex flex-col gap-2 rounded-lg border bg-card p-2.5" aria-label="Order summary">
        <div className="text-[12px] font-medium">Summary</div>
        <dl className="grid grid-cols-[1fr_auto] gap-y-1 text-[12px] tabular-nums">
          <dt className="text-muted-foreground">Distance</dt>
          <dd>{dist === null ? "–" : formatDistance(dist, { units: "metric", locale })}</dd>
          <dt className="text-muted-foreground">Delivery fee</dt>
          <dd>{fee === null ? "–" : \`£\${fee.toFixed(2)}\`}</dd>
        </dl>
        {outside ? (
          <p role="alert" className="rounded-md bg-destructive/10 px-2 py-1 text-[12px] text-destructive">
            Outside our {formatDistance(RADIUS_M, { units: "metric", locale })} zone. Pick a spot closer to central London.
          </p>
        ) : null}
        <Button type="submit" size="sm" disabled={!where || outside || !name.trim()} className="mt-auto">
          Place order
        </Button>
        {sent ? <p className="text-[12px] text-emerald-700 dark:text-emerald-400" role="status">Order placed for {name}.</p> : null}
        <pre className="max-h-28 overflow-auto rounded bg-muted p-1.5 font-mono text-[10px] text-muted-foreground">{JSON.stringify(where, null, 1)}</pre>
      </aside>
    </form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>i(()=>import(`./checkout-B5lUcoSf.js`),[]));function x(){return(0,m.jsxs)(`div`,{children:[(0,m.jsx)(n,{title:`Checkout address`,children:"`LocationPicker` is controlled here: the form owns the value, prices the delivery from it, and blocks the order outside the zone."}),(0,m.jsx)(c,{n:1,title:`Where should we deliver?`,blurb:`Search an address, click the map or drag the pin. Drag it out past Wimbledon to see the zone check.`,code:b,children:(0,m.jsx)(d,{testId:`checkout`,height:420,children:(0,m.jsx)(y,{})})})]})}export{x as component};