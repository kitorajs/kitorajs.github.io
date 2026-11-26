import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{n}from"./address-autocomplete-Camqgdf7.js";import{c as r,i,l as a,n as o,t as s}from"./select-InBARHya.js";import{Bc as c,Cc as l,Ic as u,Uo as d,hi as f}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as p}from"./example-CZLJLtIC.js";import{C as m,D as h,O as g,_,f as v,g as y,l as b,p as x,r as S,s as C,t as w,u as T}from"./-kits.maps.shared-D_iIEV7i.js";import{o as E,r as D,s as O}from"./samples-Dr5eWr2r.js";import{t as k}from"./locator-bQHrpaS2.js";var A=e(c(),1),j=u(),M=_.filter(e=>[`big-ben`,`british-museum`,`tower-bridge`,`221b`].includes(e.id)),N=E(50);function P(){let e=d(),[t,n]=(0,A.useState)(M[0]?.id??``),c=k(D,{origin:M.find(e=>e.id===t)?.location}).slice(0,5);return(0,j.jsxs)(`div`,{className:`grid gap-3 p-3 text-[13px] md:grid-cols-2`,children:[(0,j.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,j.jsxs)(`div`,{className:`flex items-center gap-2 text-[12px] text-muted-foreground`,children:[(0,j.jsx)(`span`,{id:`core-only-origin`,children:`Nearest stores to`}),(0,j.jsxs)(s,{items:M.map(e=>({value:e.id,label:e.label})),value:t,onValueChange:e=>e!==null&&n(e),children:[(0,j.jsx)(r,{size:`sm`,"aria-labelledby":`core-only-origin`,className:`text-[13px] text-foreground`,children:(0,j.jsx)(a,{})}),(0,j.jsx)(o,{alignItemWithTrigger:!1,children:M.map(e=>(0,j.jsx)(i,{value:e.id,children:e.label},e.id))})]})]}),(0,j.jsx)(`table`,{className:`w-full text-[12px]`,children:(0,j.jsx)(`tbody`,{children:c.map(({item:t,distance:n},r)=>(0,j.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,j.jsx)(`td`,{className:`w-5 py-1 text-muted-foreground tabular-nums`,children:r+1}),(0,j.jsx)(`td`,{className:`py-1`,children:t.name}),(0,j.jsx)(`td`,{className:`py-1 text-right tabular-nums`,children:n===null?``:h(n,{units:`metric`,locale:e})})]},t.id))})})]}),(0,j.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,j.jsxs)(`div`,{className:`text-[12px] text-muted-foreground`,children:["`clusterPoints` over ",N.length.toLocaleString(e),` points, per zoom`]}),(0,j.jsxs)(`table`,{className:`w-full text-[12px] tabular-nums`,children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{className:`text-left text-muted-foreground`,children:[(0,j.jsx)(`th`,{className:`py-1 font-normal`,children:`Zoom`}),(0,j.jsx)(`th`,{className:`py-1 font-normal`,children:`Groups`}),(0,j.jsx)(`th`,{className:`py-1 font-normal`,children:`Largest`})]})}),(0,j.jsx)(`tbody`,{children:[1,3,5,8,11,14].map(e=>{let t=m(N,e);return(0,j.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,j.jsx)(`td`,{className:`py-1`,children:e}),(0,j.jsx)(`td`,{className:`py-1`,children:t.length}),(0,j.jsx)(`td`,{className:`py-1`,children:Math.max(...t.map(e=>e.members.length))})]},e)})})]})]})]})}var F=`import { useState } from "react"
import { useDefaultLocale } from "@kitora/primitives/react"
import { DEMO_PLACES, clusterPoints, formatDistance, locate } from "@kitora/maps/core"
import { SHOPS, poiCloud } from "@kitora/maps/samples"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@kitora/ui/select"

const ORIGINS = DEMO_PLACES.filter((p) => ["big-ben", "british-museum", "tower-bridge", "221b"].includes(p.id))
const CLOUD = poiCloud(50)

/** \`@kitora/maps/core\` alone: no map, no engine, no DOM. Nearest stores and cluster counts, computed the way a server would. */
export function CoreOnly() {
  // the reader's locale (the build's until hydration, so the server HTML matches)
  const locale = useDefaultLocale()
  const [origin, setOrigin] = useState(ORIGINS[0]?.id ?? "")
  const from = ORIGINS.find((o) => o.id === origin)
  const nearest = locate(SHOPS, { origin: from?.location }).slice(0, 5)
  return (
    <div className="grid gap-3 p-3 text-[13px] md:grid-cols-2">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
          <span id="core-only-origin">Nearest stores to</span>
          <Select items={ORIGINS.map((o) => ({ value: o.id, label: o.label }))} value={origin} onValueChange={(next: string | null) => next !== null && setOrigin(next)}>
            <SelectTrigger size="sm" aria-labelledby="core-only-origin" className="text-[13px] text-foreground">
              <SelectValue />
            </SelectTrigger>
            <SelectContent alignItemWithTrigger={false}>
              {ORIGINS.map((o) => (
                <SelectItem key={o.id} value={o.id}>
                  {o.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <table className="w-full text-[12px]">
          <tbody>
            {nearest.map(({ item, distance }, i) => (
              <tr key={item.id} className="border-b last:border-b-0">
                <td className="w-5 py-1 text-muted-foreground tabular-nums">{i + 1}</td>
                <td className="py-1">{item.name}</td>
                <td className="py-1 text-right tabular-nums">{distance === null ? "" : formatDistance(distance, { units: "metric", locale })}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-[12px] text-muted-foreground">
          \`clusterPoints\` over {CLOUD.length.toLocaleString(locale)} points, per zoom
        </div>
        <table className="w-full text-[12px] tabular-nums">
          <thead>
            <tr className="text-left text-muted-foreground">
              <th className="py-1 font-normal">Zoom</th>
              <th className="py-1 font-normal">Groups</th>
              <th className="py-1 font-normal">Largest</th>
            </tr>
          </thead>
          <tbody>
            {[1, 3, 5, 8, 11, 14].map((z) => {
              const groups = clusterPoints(CLOUD, z)
              return (
                <tr key={z} className="border-b last:border-b-0">
                  <td className="py-1">{z}</td>
                  <td className="py-1">{groups.length}</td>
                  <td className="py-1">{Math.max(...groups.map((g) => g.members.length))}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>l(()=>import(`./core-only-BvYyHxUY.js`),[]));var I=[{id:`lib`,label:`Library`,secondary:`Building A`,location:{lng:-.13428,lat:51.52478}},{id:`lab`,label:`Physics lab`,secondary:`Building C`,location:{lng:-.13325,lat:51.52398}},{id:`hall`,label:`Great Hall`,secondary:`Building B`,location:{lng:-.13497,lat:51.52339}},{id:`cafe`,label:`Student café`,secondary:`Quad`,location:{lng:-.13381,lat:51.52521}}],L={async search(e){let t=O(e);return I.filter(e=>O(e.label).includes(t))},async reverse(e){let t=t=>Math.hypot(t.location.lng-e.lng,t.location.lat-e.lat);return I.toSorted((e,n)=>t(e)-t(n))[0]??null}};function R(){let[e,t]=(0,A.useState)({lng:-.13405,lat:51.52445}),[n,r]=(0,A.useState)(null),i=b({geocoder:L,debounceMs:0,onSelect:e=>{t(e.location),r({west:e.location.lng,east:e.location.lng,south:e.location.lat,north:e.location.lat})}}),{place:a}=T(L,e);return(0,j.jsxs)(`div`,{className:`flex h-full flex-col gap-2 text-[13px]`,children:[(0,j.jsxs)(`div`,{className:`relative`,children:[(0,j.jsx)(`input`,{...i.inputProps,"aria-label":`Find a building`,placeholder:`Find a building (lib, hall, café)`,className:`h-7 w-full rounded-full border-2 border-violet-500/60 bg-background px-3 outline-none focus:border-violet-500`}),i.state.open&&i.state.results.length>0?(0,j.jsx)(`ul`,{...i.listboxProps,"aria-label":`Buildings`,className:`absolute inset-x-2 top-full z-20 mt-1 rounded-lg border bg-popover p-1 shadow-lg`,children:i.state.results.map((e,t)=>(0,j.jsxs)(`li`,{...i.getOptionProps(t),className:f(`flex cursor-pointer justify-between rounded px-2 py-1`,i.state.active===t&&`bg-violet-500 text-white`),children:[(0,j.jsx)(`span`,{children:e.label}),(0,j.jsx)(`span`,{className:`text-[11px] opacity-70`,children:e.secondary})]},e.id))}):null]}),(0,j.jsx)(C.Root,{className:`min-h-0 flex-1 rounded-lg border bg-muted`,label:`Campus`,defaultCamera:{center:e,zoom:16},fit:n,fitMaxZoom:17,onMapClick:t,children:(0,j.jsx)(C.Marker,{lngLat:e,draggable:!0,onDragEnd:t,anchor:`center`,children:(0,j.jsx)(`span`,{role:`img`,"aria-label":`Chosen spot`,className:`block size-5 rotate-45 rounded-sm border-2 border-white bg-violet-600 shadow-md`})})}),(0,j.jsxs)(`div`,{className:`flex justify-between text-[12px] text-muted-foreground`,"aria-live":`polite`,children:[(0,j.jsxs)(`span`,{children:[`Nearest building: `,(0,j.jsx)(`span`,{className:`text-foreground`,children:a?.label??`…`})]}),(0,j.jsx)(`span`,{className:`font-mono tabular-nums`,children:g(e)})]})]})}var z=`import { useState } from "react"
import { cn } from "@kitora/ui/utils"
import { MapKit, foldText, formatLngLat, useAutocomplete, useReverseGeocode, type Geocoder, type LngLat, type Place } from "@kitora/maps"

/** Your own adapter: two methods. This one searches a fixed list of campus buildings; a real one would \`fetch\` with \`signal\`. */
const CAMPUS: readonly Place[] = [
  { id: "lib", label: "Library", secondary: "Building A", location: { lng: -0.13428, lat: 51.52478 } },
  { id: "lab", label: "Physics lab", secondary: "Building C", location: { lng: -0.13325, lat: 51.52398 } },
  { id: "hall", label: "Great Hall", secondary: "Building B", location: { lng: -0.13497, lat: 51.52339 } },
  { id: "cafe", label: "Student café", secondary: "Quad", location: { lng: -0.13381, lat: 51.52521 } },
]
const campusGeocoder: Geocoder = {
  async search(query) {
    const q = foldText(query)
    return CAMPUS.filter((p) => foldText(p.label).includes(q))
  },
  async reverse(point) {
    const near = (p: Place) => Math.hypot(p.location.lng - point.lng, p.location.lat - point.lat)
    return CAMPUS.toSorted((a, b) => near(a) - near(b))[0] ?? null
  },
}

/** A location picker rebuilt from public parts: \`useAutocomplete\` with our own markup, \`MapKit.Root\`, \`MapKit.Marker\`, \`useReverseGeocode\`. No preset involved. */
export function CustomPicker() {
  const [point, setPoint] = useState<LngLat>({ lng: -0.13405, lat: 51.52445 })
  const [fit, setFit] = useState<{ west: number; south: number; east: number; north: number } | null>(null)
  const ac = useAutocomplete({
    geocoder: campusGeocoder,
    debounceMs: 0,
    onSelect: (p) => {
      setPoint(p.location)
      setFit({ west: p.location.lng, east: p.location.lng, south: p.location.lat, north: p.location.lat })
    },
  })
  const { place } = useReverseGeocode(campusGeocoder, point)
  return (
    <div className="flex h-full flex-col gap-2 text-[13px]">
      <div className="relative">
        <input {...ac.inputProps} aria-label="Find a building" placeholder="Find a building (lib, hall, café)" className="h-7 w-full rounded-full border-2 border-violet-500/60 bg-background px-3 outline-none focus:border-violet-500" />
        {ac.state.open && ac.state.results.length > 0 ? (
          <ul {...ac.listboxProps} aria-label="Buildings" className="absolute inset-x-2 top-full z-20 mt-1 rounded-lg border bg-popover p-1 shadow-lg">
            {ac.state.results.map((p, i) => (
              <li key={p.id} {...ac.getOptionProps(i)} className={cn("flex cursor-pointer justify-between rounded px-2 py-1", ac.state.active === i && "bg-violet-500 text-white")}>
                <span>{p.label}</span>
                <span className="text-[11px] opacity-70">{p.secondary}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <MapKit.Root className="min-h-0 flex-1 rounded-lg border bg-muted" label="Campus" defaultCamera={{ center: point, zoom: 16 }} fit={fit} fitMaxZoom={17} onMapClick={setPoint}>
        <MapKit.Marker lngLat={point} draggable onDragEnd={setPoint} anchor="center">
          <span role="img" aria-label="Chosen spot" className="block size-5 rotate-45 rounded-sm border-2 border-white bg-violet-600 shadow-md" />
        </MapKit.Marker>
      </MapKit.Root>
      <div className="flex justify-between text-[12px] text-muted-foreground" aria-live="polite">
        <span>Nearest building: <span className="text-foreground">{place?.label ?? "…"}</span></span>
        <span className="font-mono tabular-nums">{formatLngLat(point)}</span>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>l(()=>import(`./custom-picker--hA3vpWQ.js`),[]));var B=[{id:`hyde`,label:`Hyde Park`,secondary:`Westminster`,kind:`park`,location:{lng:-.16573,lat:51.50731}},{id:`regents`,label:`Regent's Park`,secondary:`Camden`,kind:`park`,location:{lng:-.15279,lat:51.52732}},{id:`greenpark`,label:`Green Park`,secondary:`Westminster`,kind:`park`,location:{lng:-.14275,lat:51.50398}}];function V(){let[e,t]=(0,A.useState)(`hyde`),r=B.find(t=>t.id===e);return(0,j.jsxs)(`div`,{className:`grid h-full grid-cols-1 gap-2 text-[13px] sm:grid-cols-[200px_minmax(0,1fr)]`,children:[(0,j.jsx)(`ul`,{"aria-label":`Parks`,className:`flex flex-col gap-1`,children:B.map(r=>(0,j.jsx)(`li`,{children:(0,j.jsx)(`button`,{type:`button`,onClick:()=>t(r.id),className:`flex w-full items-center gap-2 rounded-md px-2 py-1 text-left hover:bg-muted aria-pressed:bg-muted`,"aria-pressed":e===r.id,children:(0,j.jsx)(n,{place:r})})},r.id))}),(0,j.jsxs)(y,{className:`min-h-48 rounded-lg border bg-muted`,label:`London parks`,defaultCamera:{center:{lng:-.154,lat:51.515},zoom:12.5},children:[(0,j.jsx)(S,{className:`absolute top-2 right-2 z-[2]`}),B.map(e=>(0,j.jsx)(v,{lngLat:e.location,anchor:`center`,children:(0,j.jsx)(`button`,{type:`button`,"aria-label":e.label,onClick:()=>t(e.id),className:`block size-4 rounded-full border-2 border-white bg-emerald-600 shadow-md`})},e.id)),r?(0,j.jsx)(x,{lngLat:r.location,label:r.label,onClose:()=>t(null),className:`rounded-md border bg-popover px-2 py-1 text-popover-foreground shadow-md`,children:r.label}):null]})]})}var H=`import { useState } from "react"
import { MapMarker, MapPopup, MapRoot } from "@kitora/maps/react"
import { MapControls, PlaceOption } from "@kitora/maps/ui"
import type { Place } from "@kitora/maps"

const PARKS: readonly Place[] = [
  { id: "hyde", label: "Hyde Park", secondary: "Westminster", kind: "park", location: { lng: -0.16573, lat: 51.50731 } },
  { id: "regents", label: "Regent's Park", secondary: "Camden", kind: "park", location: { lng: -0.15279, lat: 51.52732 } },
  { id: "greenpark", label: "Green Park", secondary: "Westminster", kind: "park", location: { lng: -0.14275, lat: 51.50398 } },
]

/** The headless map parts by name: MapRoot, MapMarker and MapPopup, plus the styled MapControls and PlaceOption rows. */
export function HeadlessParts() {
  const [open, setOpen] = useState<string | null>("hyde")
  const park = PARKS.find((p) => p.id === open)
  return (
    <div className="grid h-full grid-cols-1 gap-2 text-[13px] sm:grid-cols-[200px_minmax(0,1fr)]">
      <ul aria-label="Parks" className="flex flex-col gap-1">
        {PARKS.map((p) => (
          <li key={p.id}>
            <button type="button" onClick={() => setOpen(p.id)} className="flex w-full items-center gap-2 rounded-md px-2 py-1 text-left hover:bg-muted aria-pressed:bg-muted" aria-pressed={open === p.id}>
              <PlaceOption place={p} />
            </button>
          </li>
        ))}
      </ul>
      <MapRoot className="min-h-48 rounded-lg border bg-muted" label="London parks" defaultCamera={{ center: { lng: -0.154, lat: 51.515 }, zoom: 12.5 }}>
        <MapControls className="absolute top-2 right-2 z-[2]" />
        {PARKS.map((p) => (
          <MapMarker key={p.id} lngLat={p.location} anchor="center">
            <button type="button" aria-label={p.label} onClick={() => setOpen(p.id)} className="block size-4 rounded-full border-2 border-white bg-emerald-600 shadow-md" />
          </MapMarker>
        ))}
        {park ? (
          <MapPopup lngLat={park.location} label={park.label} onClose={() => setOpen(null)} className="rounded-md border bg-popover px-2 py-1 text-popover-foreground shadow-md">
            {park.label}
          </MapPopup>
        ) : null}
      </MapRoot>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>l(()=>import(`./headless-parts-79rqm5fN.js`),[]));function U(){return(0,j.jsxs)(`div`,{children:[(0,j.jsx)(t,{title:`Build your own`,children:`Every preset is made of public parts. Rebuild one with your own markup, plug in your own geocoder, or skip the map entirely and use the core.`}),(0,j.jsx)(p,{n:1,title:`A picker from parts, on your own geocoder`,blurb:"`useAutocomplete` gives combobox props for your own input and list; `MapKit.Root` and `MapKit.Marker` are the headless map. The geocoder is a six-line adapter over a campus list.",code:z,children:(0,j.jsx)(w,{testId:`custom-picker`,height:380,children:(0,j.jsx)(R,{})})}),(0,j.jsx)(p,{n:2,title:`The core alone`,blurb:"`@kitora/maps/core` has no DOM and no engine: rank nearest stores and cluster points on a server, in a worker or in a test.",code:F,children:(0,j.jsx)(w,{testId:`core-only`,height:260,children:(0,j.jsx)(P,{})})}),(0,j.jsx)(p,{n:3,title:`Headless parts by name`,blurb:"`MapRoot`, `MapMarker` and `MapPopup` from `/react` with your own marker and popup markup; `MapControls` and `PlaceOption` from `/ui` for the zoom stack and the list rows.",code:H,children:(0,j.jsx)(w,{testId:`headless-parts`,height:340,children:(0,j.jsx)(V,{})})})]})}export{U as component};