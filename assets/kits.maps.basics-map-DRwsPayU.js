import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Uc as r,ri as i,zc as a}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as o}from"./example-B67lLz1F.js";import{T as s,_ as c,a as l,f as u,i as d,o as f,t as p}from"./-kits.maps.shared-BFYpztP8.js";var m=e(r(),1),h=a(),g={Europe:[`london`,`paris`,`berlin`,`madrid`,`rome`,`vienna`,`lisbon`],Americas:[`new-york`,`san-francisco`,`chicago`,`toronto`,`mexico-city`,`sao-paulo`],Asia:[`tokyo`,`seoul`,`singapore`,`mumbai`,`delhi`,`dubai`]},_=[`Europe`,`Americas`,`Asia`];function v(){let[e,t]=(0,m.useState)(`Europe`),n=c.filter(t=>g[e].some(e=>e===t.id));return(0,h.jsxs)(`div`,{className:`flex h-full flex-col gap-2`,children:[(0,h.jsx)(`div`,{className:`flex gap-1`,role:`group`,"aria-label":`Fit to`,children:_.map(n=>(0,h.jsx)(i,{size:`sm`,variant:n===e?`default`:`outline`,"aria-pressed":n===e,onClick:()=>t(n),children:n},n))}),(0,h.jsx)(f,{className:`min-h-0 flex-1`,label:`Cities`,fit:s(n.map(e=>e.location)),children:n.map(e=>(0,h.jsx)(u,{lngLat:e.location,children:(0,h.jsx)(d,{label:e.label})},e.id))})]})}var y=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { DEMO_PLACES, MapMarker, MapPin, MapView, boundsOf } from "@kitora/maps"

const GROUPS = {
  Europe: ["london", "paris", "berlin", "madrid", "rome", "vienna", "lisbon"],
  Americas: ["new-york", "san-francisco", "chicago", "toronto", "mexico-city", "sao-paulo"],
  Asia: ["tokyo", "seoul", "singapore", "mumbai", "delhi", "dubai"],
} as const
type Group = keyof typeof GROUPS
const GROUP_NAMES: readonly Group[] = ["Europe", "Americas", "Asia"]

/** Pass a box to \`fit\` and the camera frames it; \`boundsOf\` makes the box from any points. */
export function BasicFitBounds() {
  const [group, setGroup] = useState<Group>("Europe")
  const places = DEMO_PLACES.filter((p) => GROUPS[group].some((id) => id === p.id))
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex gap-1" role="group" aria-label="Fit to">
        {GROUP_NAMES.map((g) => (
          <Button key={g} size="sm" variant={g === group ? "default" : "outline"} aria-pressed={g === group} onClick={() => setGroup(g)}>
            {g}
          </Button>
        ))}
      </div>
      <MapView className="min-h-0 flex-1" label="Cities" fit={boundsOf(places.map((p) => p.location))}>
        {places.map((p) => (
          <MapMarker key={p.id} lngLat={p.location}>
            <MapPin label={p.label} />
          </MapMarker>
        ))}
      </MapView>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>n(()=>import(`./fit-bounds-BTAY6Dnf.js`),[]));function b(){return(0,h.jsx)(f,{className:`h-full`,label:`Paris`,defaultCamera:{center:{lng:2.3522,lat:48.8566},zoom:11}})}var x=`import { MapView } from "@kitora/maps"

/** The smallest map: a \`MapView\` with a starting camera. Drag to pan, scroll or pinch to zoom. */
export function BasicMap() {
  return <MapView className="h-full" label="Paris" defaultCamera={{ center: { lng: 2.3522, lat: 48.8566 }, zoom: 11 }} />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>n(()=>import(`./map-CHXDW3b6.js`),[]));var S=[{id:`eiffel`,name:`Eiffel Tower`,at:{lng:2.29448,lat:48.85837}},{id:`louvre`,name:`Louvre`,at:{lng:2.33764,lat:48.86061}},{id:`notre-dame`,name:`Notre-Dame`,at:{lng:2.34992,lat:48.85296}},{id:`sacre-coeur`,name:`Sacré-Cœur`,at:{lng:2.34311,lat:48.88672}}];function C(){let[e,t]=(0,m.useState)(`louvre`);return(0,h.jsx)(f,{className:`h-full`,label:`Paris sights`,defaultCamera:{center:{lng:2.322,lat:48.87},zoom:11.6},children:S.map((n,r)=>(0,h.jsx)(u,{lngLat:n.at,zIndex:+(e===n.id),children:(0,h.jsx)(d,{label:n.name,selected:e===n.id,tone:e===n.id?`danger`:`primary`,onClick:()=>t(n.id),children:r+1})},n.id))})}var w=`import { useState } from "react"
import { MapMarker, MapPin, MapView } from "@kitora/maps"

const SIGHTS = [
  { id: "eiffel", name: "Eiffel Tower", at: { lng: 2.29448, lat: 48.85837 } },
  { id: "louvre", name: "Louvre", at: { lng: 2.33764, lat: 48.86061 } },
  { id: "notre-dame", name: "Notre-Dame", at: { lng: 2.34992, lat: 48.85296 } },
  { id: "sacre-coeur", name: "Sacré-Cœur", at: { lng: 2.34311, lat: 48.88672 } },
]

/** Markers are React: put any content in \`MapMarker\`. Here a numbered \`MapPin\`; click one to select it. */
export function BasicMarkers() {
  const [selected, setSelected] = useState<string | null>("louvre")
  return (
    <MapView className="h-full" label="Paris sights" defaultCamera={{ center: { lng: 2.322, lat: 48.87 }, zoom: 11.6 }}>
      {SIGHTS.map((s, i) => (
        <MapMarker key={s.id} lngLat={s.at} zIndex={selected === s.id ? 1 : 0}>
          <MapPin label={s.name} selected={selected === s.id} tone={selected === s.id ? "danger" : "primary"} onClick={() => setSelected(s.id)}>
            {i + 1}
          </MapPin>
        </MapMarker>
      ))}
    </MapView>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>n(()=>import(`./markers-DE5BF3ga.js`),[]));var T=[{id:`tower`,name:`Tower Bridge`,opened:1894,at:{lng:-.07536,lat:51.50546}},{id:`millennium`,name:`Millennium Bridge`,opened:2e3,at:{lng:-.09853,lat:51.50946}},{id:`westminster`,name:`Westminster Bridge`,opened:1862,at:{lng:-.12193,lat:51.50084}}];function E(){let[e,t]=(0,m.useState)(`tower`),n=T.find(t=>t.id===e);return(0,h.jsxs)(f,{className:`h-full`,label:`Thames bridges`,defaultCamera:{center:{lng:-.099,lat:51.505},zoom:13},children:[T.map(n=>(0,h.jsx)(u,{lngLat:n.at,children:(0,h.jsx)(d,{label:n.name,tone:`violet`,selected:e===n.id,onClick:()=>t(n.id)})},n.id)),n?(0,h.jsxs)(l,{lngLat:n.at,title:n.name,onClose:()=>t(null),children:[`Opened `,(0,h.jsx)(`span`,{className:`tabular-nums`,children:n.opened}),` · crosses the Thames`]}):null]})}var D=`import { useState } from "react"
import { MapMarker, MapPin, MapPopupCard, MapView } from "@kitora/maps"

const BRIDGES = [
  { id: "tower", name: "Tower Bridge", opened: 1894, at: { lng: -0.07536, lat: 51.50546 } },
  { id: "millennium", name: "Millennium Bridge", opened: 2000, at: { lng: -0.09853, lat: 51.50946 } },
  { id: "westminster", name: "Westminster Bridge", opened: 1862, at: { lng: -0.12193, lat: 51.50084 } },
]

/** Click a pin to open its popup. Close with ×, Escape, or a click on the bare map. */
export function BasicPopup() {
  const [open, setOpen] = useState<string | null>("tower")
  const bridge = BRIDGES.find((b) => b.id === open)
  return (
    <MapView className="h-full" label="Thames bridges" defaultCamera={{ center: { lng: -0.099, lat: 51.505 }, zoom: 13 }}>
      {BRIDGES.map((b) => (
        <MapMarker key={b.id} lngLat={b.at}>
          <MapPin label={b.name} tone="violet" selected={open === b.id} onClick={() => setOpen(b.id)} />
        </MapMarker>
      ))}
      {bridge ? (
        <MapPopupCard lngLat={bridge.at} title={bridge.name} onClose={() => setOpen(null)}>
          Opened <span className="tabular-nums">{bridge.opened}</span> · crosses the Thames
        </MapPopupCard>
      ) : null}
    </MapView>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>n(()=>import(`./popup-CH9eTSY5.js`),[]));var O=[`auto`,`light`,`dark`];function k(){let[e,t]=(0,m.useState)(`auto`);return(0,h.jsxs)(`div`,{className:`flex h-full flex-col gap-2`,children:[(0,h.jsx)(`div`,{className:`flex gap-1`,role:`group`,"aria-label":`Basemap scheme`,children:O.map(n=>(0,h.jsx)(i,{size:`sm`,variant:n===e?`default`:`outline`,"aria-pressed":n===e,onClick:()=>t(n),className:`capitalize`,children:n},n))}),(0,h.jsx)(f,{className:`min-h-0 flex-1`,label:`Tokyo`,scheme:e,defaultCamera:{center:{lng:139.75,lat:35.68},zoom:11}})]})}var A=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { MapView, type ColorScheme } from "@kitora/maps"

const SCHEMES = ["auto", "light", "dark"] as const satisfies readonly (ColorScheme | "auto")[]

/** \`scheme="auto"\` follows the page's dark class (try the site's theme toggle); or force light or dark. The style is keyless OpenFreeMap. */
export function BasicTheme() {
  const [scheme, setScheme] = useState<ColorScheme | "auto">("auto")
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex gap-1" role="group" aria-label="Basemap scheme">
        {SCHEMES.map((s) => (
          <Button key={s} size="sm" variant={s === scheme ? "default" : "outline"} aria-pressed={s === scheme} onClick={() => setScheme(s)} className="capitalize">
            {s}
          </Button>
        ))}
      </div>
      <MapView className="min-h-0 flex-1" label="Tokyo" scheme={scheme} defaultCamera={{ center: { lng: 139.75, lat: 35.68 }, zoom: 11 }} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>n(()=>import(`./theme-Bq61MzqD.js`),[]));function j(){return(0,h.jsxs)(`div`,{children:[(0,h.jsx)(t,{title:`Basics: the map`,children:"`MapView` is a map with controls and a loading state. Everything on it is React: markers, pins and popups are components you place as children."}),(0,h.jsx)(o,{n:1,title:`A map`,blurb:`One component and a starting camera. The engine loads on first use, and no API key is needed.`,code:x,children:(0,h.jsx)(p,{testId:`basic-map`,height:280,children:(0,h.jsx)(b,{})})}),(0,h.jsx)(o,{n:2,title:`Markers`,blurb:"`MapMarker` pins any content to a point; `MapPin` is the styled teardrop. Click a pin to select it.",code:w,children:(0,h.jsx)(p,{testId:`basic-markers`,height:300,children:(0,h.jsx)(C,{})})}),(0,h.jsx)(o,{n:3,title:`A popup`,blurb:"`MapPopupCard` floats over a point. Close with ×, Escape, or a click on the bare map.",code:D,children:(0,h.jsx)(p,{testId:`basic-popup`,height:300,children:(0,h.jsx)(E,{})})}),(0,h.jsx)(o,{n:4,title:`Fit to bounds`,blurb:"Give `fit` a box (from `boundsOf(points)`) and the camera frames it.",code:y,children:(0,h.jsx)(p,{testId:`basic-fit`,height:320,children:(0,h.jsx)(v,{})})}),(0,h.jsx)(o,{n:5,title:`Light and dark`,blurb:`The basemap follows the page's theme, or a forced scheme. Pins and routes stay on top through the swap.`,code:A,children:(0,h.jsx)(p,{testId:`basic-theme`,height:300,children:(0,h.jsx)(k,{})})})]})}export{j as component};