import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./location-picker-C-Dti3Qz.js";import{s as n}from"./kit-docs-BUovISd0.js";import{t as r}from"./address-autocomplete-Cg3Ngc-6.js";import{Bc as i,Cc as a,Ic as o}from"./index-B9ukmIN1.js";import"./kit-gallery-Bph7isB2.js";import{t as s}from"./example-BGnSQG2Y.js";import{O as c,f as l,i as u,o as d,t as f,u as p}from"./-kits.maps.shared-Bsr14S3E.js";import{a as m,s as h}from"./samples-BNp5YyQu.js";var g=e(i(),1),_=o();function v(){let[e,t]=(0,g.useState)(null);return(0,_.jsxs)(`div`,{className:`flex flex-col gap-2 p-3`,children:[(0,_.jsx)(r,{geocoder:m,label:`Address`,onSelect:t,onClear:()=>t(null)}),(0,_.jsx)(`div`,{className:`text-[12px] text-muted-foreground`,"aria-live":`polite`,children:e?(0,_.jsxs)(_.Fragment,{children:[`Picked `,(0,_.jsx)(`span`,{className:`text-foreground`,children:e.label}),` · `,(0,_.jsx)(`span`,{className:`font-mono tabular-nums`,children:c(e.location)})]}):`Nothing picked yet`})]})}var y=`import { useState } from "react"
import { AddressAutocomplete, formatLngLat, type Place } from "@kitora/maps"
import { demoGeocoder } from "@kitora/maps/samples"

/** An address field over any \`Geocoder\`. Type "par", "baker" or "tower", use ↑ ↓ and Enter, or paste "48.85, 2.29". */
export function BasicAutocomplete() {
  const [place, setPlace] = useState<Place | null>(null)
  return (
    <div className="flex flex-col gap-2 p-3">
      <AddressAutocomplete geocoder={demoGeocoder} label="Address" onSelect={setPlace} onClear={() => setPlace(null)} />
      <div className="text-[12px] text-muted-foreground" aria-live="polite">
        {place ? (
          <>
            Picked <span className="text-foreground">{place.label}</span> · <span className="font-mono tabular-nums">{formatLngLat(place.location)}</span>
          </>
        ) : (
          "Nothing picked yet"
        )}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>a(()=>import(`./autocomplete-BauoAboa.js`),[]));function b(){return(0,_.jsx)(`div`,{className:`p-3`,children:(0,_.jsx)(t,{geocoder:m,label:`Meeting point`,height:240,defaultCamera:{center:{lng:-.1276,lat:51.5072},zoom:10}})})}var x=`import { LocationPicker } from "@kitora/maps"
import { demoGeocoder } from "@kitora/maps/samples"

/** Search a place, click the map, or drag the pin. The footer names the spot by reverse lookup. */
export function BasicLocationPicker() {
  return (
    <div className="p-3">
      <LocationPicker geocoder={demoGeocoder} label="Meeting point" height={240} defaultCamera={{ center: { lng: -0.1276, lat: 51.5072 }, zoom: 10 }} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>a(()=>import(`./location-picker-DoYmzUO1.js`),[]));function S(e){let t=(e,t,n)=>{let r=Math.abs(e),i=Math.floor(r),a=Math.floor((r-i)*60);return`${i}°${a}′${Math.round(((r-i)*60-a)*60)}″${e>=0?t:n}`};return`${t(e.lat,`N`,`S`)} ${t(e.lng,`E`,`W`)}`}function C(){let[e,n]=(0,g.useState)(null);return(0,_.jsxs)(t.Root,{geocoder:m,label:`Drop-off`,value:e,onChange:n,className:`h-full p-3`,children:[(0,_.jsxs)(t.Map,{className:`min-h-0 flex-1`,controls:!1,defaultCamera:{center:{lng:-.1276,lat:51.5072},zoom:11},children:[(0,_.jsx)(t.Pin,{render:e=>(0,_.jsx)(`span`,{role:`img`,"aria-label":`Drop-off at ${S(e)}`,className:`block size-4 rounded-full border-2 border-white bg-emerald-600 shadow-md`})}),(0,_.jsx)(t.Hint,{children:`Click the map or search below`})]}),(0,_.jsx)(t.Search,{ariaLabel:`Search a drop-off point`,placeholder:`Search a drop-off point`}),(0,_.jsx)(t.Summary,{formatPoint:S,emptyText:`No drop-off yet`,classNames:{coords:`text-emerald-700 dark:text-emerald-400`}})]})}var w=`import { useState } from "react"
import { LocationPicker, type LngLat, type PickedLocation } from "@kitora/maps"
import { demoGeocoder } from "@kitora/maps/samples"

/** Degrees, minutes and seconds instead of decimals: the summary's coordinates are a formatter slot. */
function toDms(p: LngLat): string {
  const part = (v: number, pos: string, neg: string) => {
    const a = Math.abs(v)
    const d = Math.floor(a)
    const m = Math.floor((a - d) * 60)
    const s = Math.round(((a - d) * 60 - m) * 60)
    return \`\${d}°\${m}′\${s}″\${v >= 0 ? pos : neg}\`
  }
  return \`\${part(p.lat, "N", "S")} \${part(p.lng, "E", "W")}\`
}

/** The preset rebuilt from its public parts: map first, search under it, a custom pin and DMS coordinates. Controlled. */
export function ComposedLocationPicker() {
  const [value, setValue] = useState<PickedLocation | null>(null)
  return (
    <LocationPicker.Root geocoder={demoGeocoder} label="Drop-off" value={value} onChange={setValue} className="h-full p-3">
      <LocationPicker.Map className="min-h-0 flex-1" controls={false} defaultCamera={{ center: { lng: -0.1276, lat: 51.5072 }, zoom: 11 }}>
        <LocationPicker.Pin render={(p) => <span role="img" aria-label={\`Drop-off at \${toDms(p)}\`} className="block size-4 rounded-full border-2 border-white bg-emerald-600 shadow-md" />} />
        <LocationPicker.Hint>Click the map or search below</LocationPicker.Hint>
      </LocationPicker.Map>
      <LocationPicker.Search ariaLabel="Search a drop-off point" placeholder="Search a drop-off point" />
      <LocationPicker.Summary formatPoint={toDms} emptyText="No drop-off yet" classNames={{ coords: "text-emerald-700 dark:text-emerald-400" }} />
    </LocationPicker.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>a(()=>import(`./compose-D4AtbwOT.js`),[]));var T=[{id:`north`,label:`North depot`,secondary:`Camden, NW1`,kind:`address`,location:{lng:-.1426,lat:51.539}},{id:`east`,label:`East depot`,secondary:`Hackney, E8`,kind:`address`,location:{lng:-.057,lat:51.545}},{id:`south`,label:`South depot`,secondary:`Brixton, SW9`,kind:`address`,location:{lng:-.1146,lat:51.4622}},{id:`west`,label:`West depot`,secondary:`Hammersmith, W6`,kind:`address`,location:{lng:-.224,lat:51.4927}}],E={async search(e,{signal:t,limit:n=5}){if(t.aborted)return[];let r=h(e.trim());return T.filter(e=>h(`${e.label} ${e.secondary??``}`).includes(r)).slice(0,n)}};function D(){return(0,_.jsx)(`div`,{className:`p-3`,children:(0,_.jsx)(t,{geocoder:E,label:`Depot`,placeholder:`Search a depot (north, hack, sw9)`,height:220,defaultCamera:{center:{lng:-.12,lat:51.505},zoom:10}})})}var O=`import { LocationPicker, foldText, type Geocoder, type Place } from "@kitora/maps"

/** Your own data: a few depots. In a real app this is your address API. */
const DEPOTS: readonly Place[] = [
  { id: "north", label: "North depot", secondary: "Camden, NW1", kind: "address", location: { lng: -0.1426, lat: 51.5390 } },
  { id: "east", label: "East depot", secondary: "Hackney, E8", kind: "address", location: { lng: -0.0570, lat: 51.5450 } },
  { id: "south", label: "South depot", secondary: "Brixton, SW9", kind: "address", location: { lng: -0.1146, lat: 51.4622 } },
  { id: "west", label: "West depot", secondary: "Hammersmith, W6", kind: "address", location: { lng: -0.2240, lat: 51.4927 } },
]

/**
 * The adapter is two methods. \`search\` gets an AbortSignal (pass it to \`fetch\`); \`reverse\` is optional,
 * and without it a dropped pin stays "Unnamed spot". Swap this object for Nominatim, Photon or your API.
 */
const depotGeocoder: Geocoder = {
  async search(query, { signal, limit = 5 }) {
    // stub: replace with your API, e.g. fetch(\`/api/depots?q=\${encodeURIComponent(query)}\`, { signal })
    if (signal.aborted) return []
    const q = foldText(query.trim())
    return DEPOTS.filter((d) => foldText(\`\${d.label} \${d.secondary ?? ""}\`).includes(q)).slice(0, limit)
  },
}

/** The stock picker over a custom adapter. Type "depot", "hack" or "sw9". */
export function CustomGeocoderPicker() {
  return (
    <div className="p-3">
      <LocationPicker geocoder={depotGeocoder} label="Depot" placeholder="Search a depot (north, hack, sw9)" height={220} defaultCamera={{ center: { lng: -0.12, lat: 51.505 }, zoom: 10 }} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>a(()=>import(`./custom-geocoder-BVHVtMTs.js`),[]));function k(){let[e,t]=(0,g.useState)({lng:-.1246,lat:51.5007}),{place:n,status:r}=p(m,e);return(0,_.jsxs)(`div`,{className:`flex h-full flex-col gap-2`,children:[(0,_.jsx)(d,{className:`min-h-0 flex-1`,label:`Click to look up a place`,defaultCamera:{center:{lng:-.12,lat:51.507},zoom:11},onMapClick:t,children:e?(0,_.jsx)(l,{lngLat:e,draggable:!0,onDragEnd:t,children:(0,_.jsx)(u,{label:`Lookup point`,tone:`warning`})}):null}),(0,_.jsxs)(`div`,{className:`flex h-7 items-center gap-2 rounded-md border bg-muted/40 px-2 text-[12px]`,"aria-live":`polite`,children:[(0,_.jsx)(`span`,{className:`min-w-0 flex-1 truncate`,children:r===`loading`?`Looking up…`:n?`${n.label} · ${n.secondary??``}`:e?`Nothing named nearby`:`Click the map`}),e?(0,_.jsx)(`span`,{className:`font-mono text-[11px] text-muted-foreground tabular-nums`,children:c(e)}):null]})]})}var A=`import { useState } from "react"
import { MapMarker, MapPin, MapView, formatLngLat, useReverseGeocode, type LngLat } from "@kitora/maps"
import { demoGeocoder } from "@kitora/maps/samples"

/** Click anywhere: \`useReverseGeocode\` asks the adapter what is there (the demo adapter names places within 5 km). */
export function BasicReverse() {
  const [point, setPoint] = useState<LngLat | null>({ lng: -0.1246, lat: 51.5007 })
  const { place, status } = useReverseGeocode(demoGeocoder, point)
  return (
    <div className="flex h-full flex-col gap-2">
      <MapView className="min-h-0 flex-1" label="Click to look up a place" defaultCamera={{ center: { lng: -0.12, lat: 51.507 }, zoom: 11 }} onMapClick={setPoint}>
        {point ? (
          <MapMarker lngLat={point} draggable onDragEnd={setPoint}>
            <MapPin label="Lookup point" tone="warning" />
          </MapMarker>
        ) : null}
      </MapView>
      <div className="flex h-7 items-center gap-2 rounded-md border bg-muted/40 px-2 text-[12px]" aria-live="polite">
        <span className="min-w-0 flex-1 truncate">{status === "loading" ? "Looking up…" : place ? \`\${place.label} · \${place.secondary ?? ""}\` : point ? "Nothing named nearby" : "Click the map"}</span>
        {point ? <span className="font-mono text-[11px] text-muted-foreground tabular-nums">{formatLngLat(point)}</span> : null}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>a(()=>import(`./reverse-C-oS1fzy.js`),[]));function j(){return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(n,{title:`Basics: search and pick`,children:"Every search goes through a `Geocoder` adapter: `search(text)` and optional `reverse(point)`. These demos use `createFakeGeocoder`, an in-memory gazetteer; wire Nominatim, Photon or your own API by implementing the same two methods."}),(0,_.jsx)(s,{n:1,title:`Address autocomplete`,blurb:`A combobox over the geocoder: debounced, cancels stale searches, ↑ ↓ Home End Enter Escape.`,code:y,children:(0,_.jsx)(f,{testId:`basic-autocomplete`,height:220,children:(0,_.jsx)(v,{})})}),(0,_.jsx)(s,{n:2,title:`Location picker`,blurb:`Search, click or drag to set one point; reverse lookup names it.`,code:x,children:(0,_.jsx)(f,{testId:`basic-picker`,height:360,children:(0,_.jsx)(b,{})})}),(0,_.jsx)(s,{n:3,title:`Reverse lookup`,blurb:"`useReverseGeocode(geocoder, point)` names any point. Click the map or drag the pin.",code:A,children:(0,_.jsx)(f,{testId:`basic-reverse`,height:320,children:(0,_.jsx)(k,{})})}),(0,_.jsx)(s,{n:4,title:`Compose your own`,blurb:"`LocationPicker` is `Root` + `Search` + `Map` (`Pin`, `Hint`) + `Summary`. Rebuilt here from those parts: map first, a custom pin, DMS coordinates, controlled value.",code:w,children:(0,_.jsx)(f,{testId:`basic-compose`,height:380,children:(0,_.jsx)(C,{})})}),(0,_.jsx)(s,{n:5,title:`Your own geocoder`,blurb:"Any object with `search` (and optionally `reverse`) is a geocoder. This one searches four depots; without `reverse`, a dropped pin stays unnamed.",code:O,children:(0,_.jsx)(f,{testId:`basic-custom-geocoder`,height:340,children:(0,_.jsx)(D,{})})})]})}export{j as component};