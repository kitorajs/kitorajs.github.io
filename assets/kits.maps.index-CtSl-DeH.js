import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{t as n}from"./address-autocomplete-Cg3Ngc-6.js";import{Bc as r,Cc as i,Ic as a,Uo as o}from"./index-B9ukmIN1.js";import"./kit-gallery-Bph7isB2.js";import{t as s}from"./example-BGnSQG2Y.js";import{O as c,a as l,d as u,h as d,i as f,n as p,o as m,t as h,w as g}from"./-kits.maps.shared-Bsr14S3E.js";import{a as _,o as v}from"./samples-BNp5YyQu.js";var y=e(r(),1),b=a(),x=v(50);function S({items:e}){let t=o(),n=d();return(0,b.jsxs)(`div`,{className:`absolute bottom-2 left-2 z-[2] rounded-md border bg-background/95 px-2 py-1 text-[12px] shadow-sm tabular-nums`,"aria-live":`polite`,children:[(0,b.jsx)(`span`,{className:`font-medium`,children:(n?e.filter(e=>g(n.bounds,e.location)).length:0).toLocaleString(t)}),` `,(0,b.jsxs)(`span`,{className:`text-muted-foreground`,children:[`of `,e.length.toLocaleString(t),` places in view · zoom `,n?n.zoom.toFixed(1):`–`]})]})}function C(){let[e,t]=(0,y.useState)(null),[r,i]=(0,y.useState)(null),a=(0,y.useMemo)(()=>new Map(x.map(e=>[e.id,e])),[]);return(0,b.jsxs)(`div`,{className:`flex h-full flex-col gap-2`,children:[(0,b.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,b.jsx)(n,{geocoder:_,ariaLabel:`Fly to a place`,placeholder:`Fly to… (try Tokyo, Big Ben, 40.7, -74)`,onSelect:e=>{let{lng:n,lat:r}=e.location;t(e.bounds??{west:n-.02,east:n+.02,south:r-.012,north:r+.012})},className:`w-80 max-w-full`}),(0,b.jsx)(`span`,{className:`hidden text-[12px] text-muted-foreground sm:inline`,children:`Scroll to zoom · click a bubble to expand · click a pin for details`})]}),(0,b.jsxs)(m,{className:`min-h-0 flex-1`,label:`World explorer`,fit:e,fitMaxZoom:14,children:[(0,b.jsx)(u,{items:x,zIndexOf:e=>e.id===r?.id?1:void 0,renderPoint:e=>(0,b.jsx)(f,{label:`${e.name}, ${e.city}`,selected:e.id===r?.id,tone:e.id===r?.id?`danger`:`primary`,onClick:()=>i(a.get(e.id)??null)}),renderCluster:(e,t)=>(0,b.jsx)(p,{count:e.members.length,onClick:t.expand})}),r?(0,b.jsxs)(l,{lngLat:r.location,title:r.name,onClose:()=>i(null),children:[(0,b.jsx)(`div`,{children:r.city}),(0,b.jsx)(`div`,{className:`font-mono text-[11px] tabular-nums`,children:c(r.location)})]}):null,(0,b.jsx)(S,{items:x})]})]})}var w=`import { useMemo, useState } from "react"
import { useDefaultLocale } from "@kitora/primitives/react"
import { AddressAutocomplete, ClusterBubble, MapClusters, MapPin, MapPopupCard, MapView, boundsContain, formatLngLat, useMapView, type Bounds, type Place } from "@kitora/maps"
import { demoGeocoder, poiCloud, type Poi } from "@kitora/maps/samples"

const POIS = poiCloud(50)

/** Reads the live view through \`useMapView\` (any child of the map can) and counts what is on screen. */
function InViewCount({ items }: { readonly items: readonly Poi[] }) {
  // the reader's locale (the build's until hydration, so the server HTML matches)
  const locale = useDefaultLocale()
  const view = useMapView()
  const n = view ? items.filter((p) => boundsContain(view.bounds, p.location)).length : 0
  return (
    <div className="absolute bottom-2 left-2 z-[2] rounded-md border bg-background/95 px-2 py-1 text-[12px] shadow-sm tabular-nums" aria-live="polite">
      <span className="font-medium">{n.toLocaleString(locale)}</span> <span className="text-muted-foreground">of {items.length.toLocaleString(locale)} places in view · zoom {view ? view.zoom.toFixed(1) : "–"}</span>
    </div>
  )
}

/** A world explorer: search flies the camera, 1,600 places cluster, a pin opens its popup. */
export function MapsExplorer() {
  const [fit, setFit] = useState<Bounds | null>(null)
  const [open, setOpen] = useState<Poi | null>(null)
  const byId = useMemo(() => new Map(POIS.map((p) => [p.id, p])), [])
  const go = (place: Place): void => {
    const { lng, lat } = place.location
    setFit(place.bounds ?? { west: lng - 0.02, east: lng + 0.02, south: lat - 0.012, north: lat + 0.012 })
  }
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex items-center gap-2">
        <AddressAutocomplete geocoder={demoGeocoder} ariaLabel="Fly to a place" placeholder="Fly to… (try Tokyo, Big Ben, 40.7, -74)" onSelect={go} className="w-80 max-w-full" />
        <span className="hidden text-[12px] text-muted-foreground sm:inline">Scroll to zoom · click a bubble to expand · click a pin for details</span>
      </div>
      <MapView className="min-h-0 flex-1" label="World explorer" fit={fit} fitMaxZoom={14}>
        <MapClusters
          items={POIS}
          zIndexOf={(p) => (p.id === open?.id ? 1 : undefined)}
          renderPoint={(p) => <MapPin label={\`\${p.name}, \${p.city}\`} selected={p.id === open?.id} tone={p.id === open?.id ? "danger" : "primary"} onClick={() => setOpen(byId.get(p.id) ?? null)} />}
          renderCluster={(c, ctx) => <ClusterBubble count={c.members.length} onClick={ctx.expand} />}
        />
        {open ? (
          <MapPopupCard lngLat={open.location} title={open.name} onClose={() => setOpen(null)}>
            <div>{open.city}</div>
            <div className="font-mono text-[11px] tabular-nums">{formatLngLat(open.location)}</div>
          </MapPopupCard>
        ) : null}
        <InViewCount items={POIS} />
      </MapView>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>i(()=>import(`./explorer-D830gLNA.js`),[]));var T=[{name:`core`,entry:`@kitora/maps/core`,what:`LngLat and Bounds, distance and formatting, bounds maths, Web Mercator projection and pure clustering, route length / point-along / split, the Geocoder adapter with createFakeGeocoder and a demo gazetteer, the autocomplete reducer, store-locator ranking. No DOM, no React.`},{name:`dom`,entry:`@kitora/maps/dom`,what:`The engine seam (MapEngineLoader, default loadMapLibre: a lazy import of maplibre-gl and its CSS), WebGL detection, the page colour scheme.`},{name:`react`,entry:`@kitora/maps/react`,what:`MapRoot and its unstyled parts (MapMarker, MapPopup, MapClusters, MapRoute, the MapKit namespace), useMapView, useMapActions, and the headless useAutocomplete, useReverseGeocode and useLocationPicker hooks.`},{name:`ui`,entry:`@kitora/maps/ui`,what:`MapView, MapControls, MapPin, ClusterBubble, MapPopupCard, and the compound AddressAutocomplete (Root, Label, Input, List) and LocationPicker (Root, Search, Map, Pin, Hint, Summary), each preset built from its public parts.`},{name:`samples`,entry:`@kitora/maps/samples`,what:`Opt-in sample data for demos and tests: London coffee shops, a courier route, a seeded point cloud, a demo geocoder. Never in the main barrel.`}];function E(){return(0,b.jsxs)(`div`,{children:[(0,b.jsx)(t,{title:`Maps kit`,children:`Maps and location for apps, with no API keys: OpenFreeMap basemaps on MapLibre, React markers and popups, pure-function clustering, route lines, and search through a pluggable geocoder. Search above the map to fly somewhere, zoom to break clusters apart, and switch the site theme to see the dark basemap.`}),(0,b.jsx)(s,{n:1,title:`A world explorer`,blurb:`An address autocomplete flies the camera, 1,600 places cluster as you zoom, a pin opens a popup, and a child of the map counts what is in view.`,code:w,children:(0,b.jsx)(h,{testId:`explorer`,height:540,children:(0,b.jsx)(C,{})})}),(0,b.jsx)(s,{n:2,title:`Layers`,blurb:`Use the core alone (a server ranking nearest stores), the headless React parts with your own markup, or the styled presets.`,children:(0,b.jsx)(`table`,{className:`w-full text-[13px]`,children:(0,b.jsx)(`tbody`,{children:T.map(e=>(0,b.jsxs)(`tr`,{className:`border-b align-top last:border-b-0`,children:[(0,b.jsx)(`td`,{className:`py-1.5 pr-3 font-mono text-[12px]`,children:e.name}),(0,b.jsx)(`td`,{className:`py-1.5 pr-3 font-mono text-[11px] [overflow-wrap:anywhere] text-muted-foreground sm:whitespace-nowrap`,children:e.entry}),(0,b.jsx)(`td`,{className:`py-1.5 text-muted-foreground`,children:e.what})]},e.name))})})})]})}export{E as component};