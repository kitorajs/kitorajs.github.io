import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./clock-CzrBAEcC.js";import{s as n}from"./kit-docs-BUovISd0.js";import{t as r}from"./address-autocomplete-Cg3Ngc-6.js";import{t as i}from"./star-DSb30TWj.js";import{Bc as a,Cc as o,Ic as s,Mi as c,hi as l}from"./index-B9ukmIN1.js";import"./kit-gallery-Bph7isB2.js";import{t as u}from"./example-BGnSQG2Y.js";import{D as d,T as f,a as p,d as m,f as h,i as g,n as _,o as v,t as y,v as b,y as x}from"./-kits.maps.shared-Bsr14S3E.js";import{a as S,i as C,r as w}from"./samples-BNp5YyQu.js";import{t as T}from"./locator-B1j9om8T.js";var E=c(`locate`,[[`line`,{x1:`2`,x2:`5`,y1:`12`,y2:`12`,key:`bvdh0s`}],[`line`,{x1:`19`,x2:`22`,y1:`12`,y2:`12`,key:`1tbv5k`}],[`line`,{x1:`12`,x2:`12`,y1:`2`,y2:`5`,key:`11lu5j`}],[`line`,{x1:`12`,x2:`12`,y1:`19`,y2:`22`,key:`x3vr5v`}],[`circle`,{cx:`12`,cy:`12`,r:`7`,key:`fim9np`}]]),D=e(a(),1),O=s(),k=f(w.map(e=>e.location)),A={light:b,dark:x.dark},j=e=>({west:e.lng,east:e.lng,south:e.lat,north:e.lat});function M(){let[e,n]=(0,D.useState)(null),[a,o]=(0,D.useState)(``),[s,c]=(0,D.useState)([]),[u,y]=(0,D.useState)(!1),[b,x]=(0,D.useState)(null),[M,N]=(0,D.useState)(null),[P,F]=(0,D.useState)(null),[I,L]=(0,D.useState)(k),R=(0,D.useRef)(new Map),z=T(w,{text:a,tags:s,origin:e?.at,within:u?b:null}),B=w.find(e=>e.id===M)??null;(0,D.useEffect)(()=>{M&&R.current.get(M)?.scrollIntoView({block:`nearest`,behavior:`smooth`})},[M]);let V=e=>{N(e.id),L(j(e.location))},H=e=>c(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),U=e=>e.id===M||e.id===P;return(0,O.jsxs)(`div`,{className:`grid h-full grid-cols-1 gap-2 md:grid-cols-[300px_1fr]`,children:[(0,O.jsxs)(`aside`,{className:`flex min-h-0 flex-col overflow-hidden rounded-lg border bg-card`,"aria-label":`Stores`,children:[(0,O.jsxs)(`div`,{className:`flex flex-col gap-1.5 border-b p-2`,children:[(0,O.jsx)(r,{geocoder:S,ariaLabel:`Find stores near`,placeholder:`Near… (try Brixton, Big Ben, London)`,onSelect:e=>{n({label:e.label,at:e.location});let t=T(w,{origin:e.location}).slice(0,3);L(f([e.location,...t.map(e=>e.item.location)]))},onClear:()=>{n(null),L(k)}}),(0,O.jsx)(`input`,{value:a,onChange:e=>o(e.target.value),placeholder:`Filter by name or street`,"aria-label":`Filter stores`,className:`h-7 rounded-md border border-input bg-background px-2 text-[13px] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 dark:bg-input/30`}),(0,O.jsx)(`div`,{className:`flex flex-wrap gap-1`,role:`group`,"aria-label":`Amenities`,children:C.map(e=>(0,O.jsx)(`button`,{type:`button`,"aria-pressed":s.includes(e),onClick:()=>H(e),className:`h-6 rounded-full border px-2 text-[11px] text-muted-foreground hover:bg-muted aria-pressed:border-primary aria-pressed:bg-primary/10 aria-pressed:text-primary`,children:e},e))}),(0,O.jsxs)(`label`,{className:`flex items-center gap-1.5 text-[12px] text-muted-foreground`,children:[(0,O.jsx)(`input`,{type:`checkbox`,checked:u,onChange:e=>y(e.target.checked),className:`size-3.5 accent-primary`}),` Only stores in the map view`]})]}),(0,O.jsxs)(`div`,{className:`flex h-7 items-center justify-between border-b px-2 text-[11px] text-muted-foreground tabular-nums`,children:[(0,O.jsxs)(`span`,{children:[z.length,` of `,w.length,` stores`]}),e?(0,O.jsxs)(`span`,{className:`flex min-w-0 items-center gap-1 truncate`,children:[(0,O.jsx)(E,{"aria-hidden":!0,className:`size-3`}),` nearest to `,e.label]}):null]}),(0,O.jsxs)(`ul`,{className:`min-h-0 flex-1 overflow-auto p-1`,"aria-label":`Store list`,children:[z.length===0?(0,O.jsx)(`li`,{className:`p-3 text-center text-[12px] text-muted-foreground`,children:`No stores match. Clear a filter or zoom out.`}):null,z.map(({item:e,distance:n})=>(0,O.jsx)(`li`,{ref:t=>{t?R.current.set(e.id,t):R.current.delete(e.id)},children:(0,O.jsxs)(`button`,{type:`button`,onClick:()=>V(e),onMouseEnter:()=>F(e.id),onMouseLeave:()=>F(null),"aria-current":e.id===M?`true`:void 0,className:l(`flex w-full flex-col gap-0.5 rounded-md px-2 py-1.5 text-left text-[13px] hover:bg-muted aria-[current]:bg-primary/10`,U(e)&&`bg-muted`),children:[(0,O.jsxs)(`span`,{className:`flex items-center gap-2`,children:[(0,O.jsx)(`span`,{className:`min-w-0 flex-1 truncate font-medium`,children:e.name}),n===null?null:(0,O.jsx)(`span`,{className:`text-[11px] text-muted-foreground tabular-nums`,children:d(n)})]}),(0,O.jsx)(`span`,{className:`truncate text-[11px] text-muted-foreground`,children:e.address}),(0,O.jsxs)(`span`,{className:`flex items-center gap-2 text-[11px] text-muted-foreground tabular-nums`,children:[(0,O.jsxs)(`span`,{className:`flex items-center gap-0.5`,children:[(0,O.jsx)(i,{"aria-hidden":!0,className:`size-3 fill-amber-400 text-amber-400`}),` `,e.rating.toFixed(1)]}),(0,O.jsxs)(`span`,{className:`flex items-center gap-0.5`,children:[(0,O.jsx)(t,{"aria-hidden":!0,className:`size-3`}),` `,e.hours]})]})]})},e.id))]})]}),(0,O.jsxs)(v,{className:`min-h-[260px]`,label:`Store map`,styles:A,fit:I,fitMaxZoom:14,onViewChange:e=>x(e.bounds),children:[(0,O.jsx)(m,{items:z.map(e=>e.item),radius:36,zIndexOf:e=>U(e)?2:void 0,renderPoint:e=>(0,O.jsx)(g,{label:e.name,selected:U(e),tone:e.id===M?`danger`:`primary`,onClick:()=>V(e),onHover:t=>F(t?e.id:null)}),renderCluster:(e,t)=>(0,O.jsx)(_,{count:e.members.length,onClick:t.expand})}),e?(0,O.jsx)(h,{lngLat:e.at,anchor:`center`,children:(0,O.jsx)(`span`,{role:`img`,"aria-label":`Search origin: ${e.label}`,className:`block size-3.5 rounded-full border-2 border-white bg-sky-500 shadow-[0_0_0_6px_rgb(14_165_233/0.25)]`})}):null,B?(0,O.jsxs)(p,{lngLat:B.location,title:B.name,onClose:()=>N(null),children:[(0,O.jsx)(`div`,{className:`truncate`,children:B.address}),(0,O.jsxs)(`div`,{className:`mt-1 flex items-center gap-2 text-[11px] tabular-nums`,children:[(0,O.jsx)(`span`,{children:B.hours}),(0,O.jsx)(`span`,{children:B.phone})]}),(0,O.jsx)(`div`,{className:`mt-1.5 flex flex-wrap gap-1`,children:(B.tags??[]).map(e=>(0,O.jsx)(`span`,{className:`rounded bg-muted px-1.5 text-[10px] text-foreground/80`,children:e},e))})]}):null]})]})}var N=`import { useEffect, useRef, useState } from "react"
import { Clock, Locate, Star } from "lucide-react"
import { cn } from "@kitora/ui/utils"
import { AddressAutocomplete, ClusterBubble, MapClusters, MapMarker, MapPin, MapPopupCard, MapView, OPENFREEMAP_LIBERTY, OPENFREEMAP_STYLES, boundsOf, formatDistance, locate, type Bounds, type LngLat } from "@kitora/maps"
import { SHOPS, SHOP_TAGS, demoGeocoder, type Shop } from "@kitora/maps/samples"

const ALL = boundsOf(SHOPS.map((s) => s.location))
/** Colourful Liberty in light mode (the basemap is the point here), OpenFreeMap Dark in dark mode. */
const STYLES = { light: OPENFREEMAP_LIBERTY, dark: OPENFREEMAP_STYLES.dark }
const box = (p: LngLat): Bounds => ({ west: p.lng, east: p.lng, south: p.lat, north: p.lat })

/** A store locator: the list and the map share one selection, one hover and one filter (\`locate\` from the core). */
export function StoreLocator() {
  const [origin, setOrigin] = useState<{ label: string; at: LngLat } | null>(null)
  const [text, setText] = useState("")
  const [tags, setTags] = useState<readonly string[]>([])
  const [inViewOnly, setInViewOnly] = useState(false)
  const [view, setView] = useState<Bounds | null>(null)
  const [selected, setSelected] = useState<string | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)
  const [fit, setFit] = useState<Bounds | null>(ALL)
  const rows = useRef(new Map<string, HTMLLIElement>())

  const list = locate(SHOPS, { text, tags, origin: origin?.at, within: inViewOnly ? view : null })
  const shop = SHOPS.find((s) => s.id === selected) ?? null

  // a pin click selects; bring its row into view so the two halves stay in sync
  useEffect(() => {
    if (selected) rows.current.get(selected)?.scrollIntoView({ block: "nearest", behavior: "smooth" })
  }, [selected])

  const choose = (s: Shop): void => {
    setSelected(s.id)
    setFit(box(s.location))
  }
  const toggleTag = (t: string): void => setTags((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]))
  const lit = (s: Shop): boolean => s.id === selected || s.id === hovered

  return (
    <div className="grid h-full grid-cols-1 gap-2 md:grid-cols-[300px_1fr]">
      <aside className="flex min-h-0 flex-col overflow-hidden rounded-lg border bg-card" aria-label="Stores">
        <div className="flex flex-col gap-1.5 border-b p-2">
          <AddressAutocomplete
            geocoder={demoGeocoder}
            ariaLabel="Find stores near"
            placeholder="Near… (try Brixton, Big Ben, London)"
            onSelect={(p) => {
              setOrigin({ label: p.label, at: p.location })
              const nearest = locate(SHOPS, { origin: p.location }).slice(0, 3)
              setFit(boundsOf([p.location, ...nearest.map((n) => n.item.location)]))
            }}
            onClear={() => {
              setOrigin(null)
              setFit(ALL)
            }}
          />
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Filter by name or street" aria-label="Filter stores" className="h-7 rounded-md border border-input bg-background px-2 text-[13px] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 dark:bg-input/30" />
          <div className="flex flex-wrap gap-1" role="group" aria-label="Amenities">
            {SHOP_TAGS.map((t) => (
              <button key={t} type="button" aria-pressed={tags.includes(t)} onClick={() => toggleTag(t)} className="h-6 rounded-full border px-2 text-[11px] text-muted-foreground hover:bg-muted aria-pressed:border-primary aria-pressed:bg-primary/10 aria-pressed:text-primary">
                {t}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-1.5 text-[12px] text-muted-foreground">
            <input type="checkbox" checked={inViewOnly} onChange={(e) => setInViewOnly(e.target.checked)} className="size-3.5 accent-primary" /> Only stores in the map view
          </label>
        </div>
        <div className="flex h-7 items-center justify-between border-b px-2 text-[11px] text-muted-foreground tabular-nums">
          <span>
            {list.length} of {SHOPS.length} stores
          </span>
          {origin ? (
            <span className="flex min-w-0 items-center gap-1 truncate">
              <Locate aria-hidden className="size-3" /> nearest to {origin.label}
            </span>
          ) : null}
        </div>
        <ul className="min-h-0 flex-1 overflow-auto p-1" aria-label="Store list">
          {list.length === 0 ? <li className="p-3 text-center text-[12px] text-muted-foreground">No stores match. Clear a filter or zoom out.</li> : null}
          {list.map(({ item: s, distance }) => (
            <li
              key={s.id}
              ref={(el) => {
                if (el) rows.current.set(s.id, el)
                else rows.current.delete(s.id)
              }}
            >
              <button
                type="button"
                onClick={() => choose(s)}
                onMouseEnter={() => setHovered(s.id)}
                onMouseLeave={() => setHovered(null)}
                aria-current={s.id === selected ? "true" : undefined}
                className={cn("flex w-full flex-col gap-0.5 rounded-md px-2 py-1.5 text-left text-[13px] hover:bg-muted aria-[current]:bg-primary/10", lit(s) && "bg-muted")}
              >
                <span className="flex items-center gap-2">
                  <span className="min-w-0 flex-1 truncate font-medium">{s.name}</span>
                  {distance !== null ? <span className="text-[11px] text-muted-foreground tabular-nums">{formatDistance(distance)}</span> : null}
                </span>
                <span className="truncate text-[11px] text-muted-foreground">{s.address}</span>
                <span className="flex items-center gap-2 text-[11px] text-muted-foreground tabular-nums">
                  <span className="flex items-center gap-0.5">
                    <Star aria-hidden className="size-3 fill-amber-400 text-amber-400" /> {s.rating.toFixed(1)}
                  </span>
                  <span className="flex items-center gap-0.5">
                    <Clock aria-hidden className="size-3" /> {s.hours}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <MapView className="min-h-[260px]" label="Store map" styles={STYLES} fit={fit} fitMaxZoom={14} onViewChange={(v) => setView(v.bounds)}>
        <MapClusters
          items={list.map((l) => l.item)}
          radius={36}
          zIndexOf={(s) => (lit(s) ? 2 : undefined)}
          renderPoint={(s) => <MapPin label={s.name} selected={lit(s)} tone={s.id === selected ? "danger" : "primary"} onClick={() => choose(s)} onHover={(h) => setHovered(h ? s.id : null)} />}
          renderCluster={(c, ctx) => <ClusterBubble count={c.members.length} onClick={ctx.expand} />}
        />
        {origin ? (
          <MapMarker lngLat={origin.at} anchor="center">
            <span role="img" aria-label={\`Search origin: \${origin.label}\`} className="block size-3.5 rounded-full border-2 border-white bg-sky-500 shadow-[0_0_0_6px_rgb(14_165_233/0.25)]" />
          </MapMarker>
        ) : null}
        {shop ? (
          <MapPopupCard lngLat={shop.location} title={shop.name} onClose={() => setSelected(null)}>
            <div className="truncate">{shop.address}</div>
            <div className="mt-1 flex items-center gap-2 text-[11px] tabular-nums">
              <span>{shop.hours}</span>
              <span>{shop.phone}</span>
            </div>
            <div className="mt-1.5 flex flex-wrap gap-1">
              {(shop.tags ?? []).map((t) => (
                <span key={t} className="rounded bg-muted px-1.5 text-[10px] text-foreground/80">
                  {t}
                </span>
              ))}
            </div>
          </MapPopupCard>
        ) : null}
      </MapView>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>o(()=>import(`./store-locator-DnfC9Uqj.js`),[]));function P(){return(0,O.jsxs)(`div`,{children:[(0,O.jsx)(n,{title:`Store locator`,children:"One selection, one hover and one filter shared by the list and the map. The ranking is the core's `locate`: text, amenities, nearest-first from a searched place, and optionally only what the map shows."}),(0,O.jsx)(u,{n:1,title:`Coffee shops across London`,blurb:`Search a place to sort by distance, filter by amenity, hover a row to light its pin, click a row or a pin to open it. Tick “Only stores in the map view” and pan.`,code:N,children:(0,O.jsx)(y,{testId:`store-locator`,height:560,children:(0,O.jsx)(M,{})})})]})}export{P as component};