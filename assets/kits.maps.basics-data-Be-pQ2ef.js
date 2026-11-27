import{s as e}from"./kit-docs-Cf27Kpa-.js";import{Ec as t,Go as n,zc as r}from"./index-BZuUy872.js";import"./kit-gallery-BBavj2rC.js";import{t as i}from"./example-B67lLz1F.js";import{D as a,T as o,d as s,f as c,i as l,m as u,n as d,o as f,t as p,x as m}from"./-kits.maps.shared-BFYpztP8.js";import{o as h,t as g}from"./samples-D-URL-Rx.js";var _=r(),v=h(25);function y(){return(0,_.jsx)(f,{className:`h-full`,label:`Places worldwide`,children:(0,_.jsx)(s,{items:v,renderPoint:e=>(0,_.jsx)(l,{label:`${e.name}, ${e.city}`}),renderCluster:(e,t)=>(0,_.jsx)(d,{count:e.members.length,onClick:t.expand})})})}var b=`import { ClusterBubble, MapClusters, MapPin, MapView } from "@kitora/maps"
import { poiCloud } from "@kitora/maps/samples"

const POIS = poiCloud(25)

/** 800 points that merge into counted bubbles when they would overlap. Click a bubble to zoom into it. */
export function BasicClusters() {
  return (
    <MapView className="h-full" label="Places worldwide">
      <MapClusters items={POIS} renderPoint={(p) => <MapPin label={\`\${p.name}, \${p.city}\`} />} renderCluster={(c, ctx) => <ClusterBubble count={c.members.length} onClick={ctx.expand} />} />
    </MapView>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>t(()=>import(`./clusters-BU2KrtgI.js`),[]));var x=g[0],S=g.at(-1);function C(){let e=n();return(0,_.jsxs)(f,{className:`h-full`,label:`Courier route`,fit:o(g),fitPadding:40,children:[(0,_.jsx)(u,{id:`basic`,path:g}),x?(0,_.jsx)(c,{lngLat:x,children:(0,_.jsx)(l,{label:`Start`,tone:`success`,children:`A`})}):null,S?(0,_.jsx)(c,{lngLat:S,children:(0,_.jsx)(l,{label:`Finish`,tone:`danger`,children:`B`})}):null,(0,_.jsx)(`div`,{className:`absolute bottom-2 left-2 z-[2] rounded-md border bg-background/95 px-2 py-1 text-[12px] shadow-sm tabular-nums`,children:a(m(g),{units:`metric`,locale:e})})]})}var w=`import { useDefaultLocale } from "@kitora/primitives/react"
import { MapMarker, MapPin, MapRoute, MapView, boundsOf, formatDistance, routeLength } from "@kitora/maps"
import { COURIER_ROUTE } from "@kitora/maps/samples"

const START = COURIER_ROUTE[0]
const END = COURIER_ROUTE.at(-1)

/** A polyline from coordinates: \`MapRoute\` draws it (with a white casing) and survives light/dark basemap swaps. */
export function BasicRoute() {
  // the reader's locale (the build's until hydration, so the server HTML matches)
  const locale = useDefaultLocale()
  return (
    <MapView className="h-full" label="Courier route" fit={boundsOf(COURIER_ROUTE)} fitPadding={40}>
      <MapRoute id="basic" path={COURIER_ROUTE} />
      {START ? (
        <MapMarker lngLat={START}>
          <MapPin label="Start" tone="success">A</MapPin>
        </MapMarker>
      ) : null}
      {END ? (
        <MapMarker lngLat={END}>
          <MapPin label="Finish" tone="danger">B</MapPin>
        </MapMarker>
      ) : null}
      <div className="absolute bottom-2 left-2 z-[2] rounded-md border bg-background/95 px-2 py-1 text-[12px] shadow-sm tabular-nums">{formatDistance(routeLength(COURIER_ROUTE), { units: "metric", locale })}</div>
    </MapView>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>t(()=>import(`./route-CNJ6oR_q.js`),[]));function T(){return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(e,{title:`Basics: data on the map`,children:`Many points become clusters, a list of coordinates becomes a route.`}),(0,_.jsx)(i,{n:1,title:`Clusters`,blurb:"`MapClusters` groups items that would overlap at the current zoom and renders your pin and bubble. Click a bubble to zoom in.",code:b,children:(0,_.jsx)(p,{testId:`basic-clusters`,height:340,children:(0,_.jsx)(y,{})})}),(0,_.jsx)(i,{n:2,title:`A route line`,blurb:"`MapRoute` draws a polyline from coordinates; `routeLength` measures it.",code:w,children:(0,_.jsx)(p,{testId:`basic-route`,height:320,children:(0,_.jsx)(C,{})})})]})}export{T as component};