import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{t as n}from"./lightbox-B7-RePhA.js";import{An as r,Bc as i,Cc as a,Cn as o,En as s,Ic as c,On as l,jn as u,kn as d,ti as f,wn as p}from"./index-q72zUtm9.js";import"./kit-gallery-Atvibnty.js";import{t as m}from"./example-B8EaWveR.js";var h=c();function g({children:e}){return(0,h.jsx)(s,{lightbox:n,children:e})}var _=e(i(),1),v=[[`Fjord at dawn`,205],[`Desert ridge`,28],[`Pine forest`,140],[`Harbour lights`,220],[`Salt flats`,45],[`Glacier tongue`,190],[`Rice terraces`,95],[`Basalt coast`,250],[`Lavender rows`,275],[`Canyon bend`,15],[`Tundra lake`,175],[`Dune sea`,38]];function y(e,t,n,r){let i=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${r}" width="${n}" height="${r}">
<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(${t} 70% 72%)"/><stop offset="1" stop-color="hsl(${(t+40)%360} 60% 88%)"/></linearGradient></defs>
<rect width="${n}" height="${r}" fill="url(#s)"/>
<circle cx="${n*.72}" cy="${r*.3}" r="${r*.09}" fill="hsl(${(t+180)%360} 90% 80%)"/>
<path d="M0 ${r*.7} Q ${n*.25} ${r*.45} ${n*.55} ${r*.68} T ${n} ${r*.6} V ${r} H 0 Z" fill="hsl(${t} 35% 38%)"/>
<path d="M0 ${r*.85} Q ${n*.4} ${r*.7} ${n} ${r*.82} V ${r} H 0 Z" fill="hsl(${t} 40% 24%)"/>
<text x="${n*.05}" y="${r*.12}" font-family="system-ui, sans-serif" font-size="${r*.06}" fill="hsl(${t} 40% 20%)">${e}</text>
</svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`}var b=v.map(([e,t],n)=>{let r=n%5==3;return{src:y(e,t,r?900:1600,r?1200:1e3),thumb:y(e,t,320,220),alt:`${e} (illustration ${n+1})`,caption:`${e} — generated illustration ${n+1} of ${v.length}`}});function x(){let[e,t]=(0,_.useState)(!1),[r,i]=(0,_.useState)(0),[a,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)([]);return(0,h.jsx)(o,{children:(0,h.jsxs)(`section`,{className:`flex flex-col gap-1.5 text-[13px]`,"aria-label":`Event log`,children:[(0,h.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,h.jsx)(f,{size:`xs`,variant:`outline`,onClick:()=>t(!0),"data-open-viewer":``,children:`Open the viewer`}),(0,h.jsxs)(f,{size:`xs`,variant:a?`default`:`outline`,onClick:()=>s(e=>!e),"aria-pressed":a,"data-loop":``,children:[`loop `,a?`on`:`off`]}),(0,h.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,"data-index":``,children:[`current index `,r+1,` / `,b.length]})]}),(0,h.jsx)(`ol`,{className:`flex flex-col gap-0.5 font-mono text-xs text-muted-foreground`,"data-log":``,children:c.length===0?(0,h.jsx)(`li`,{children:`—`}):c.map((e,t)=>(0,h.jsx)(`li`,{children:e},`${t}-${e}`))}),(0,h.jsx)(n,{items:b,open:e,onOpenChange:(e,n)=>{t(e),!e&&n&&l(e=>[`closed at ${r+1} (${n})`,...e].slice(0,6))},index:r,onIndexChange:i,loop:a,name:`looping-gallery`,title:`Gallery`})]})})}var S=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { EnsureOverlayUi, Lightbox, type CloseReason, type LightboxItem } from "@kitora/overlay"

// Controlled index, looping and close reason: index and open are this component's state, so it
// knows where the viewer stopped and why it closed. With loop on, → on the last image wraps to the first.

const PLACES = [
  ["Fjord at dawn", 205],
  ["Desert ridge", 28],
  ["Pine forest", 140],
  ["Harbour lights", 220],
  ["Salt flats", 45],
  ["Glacier tongue", 190],
  ["Rice terraces", 95],
  ["Basalt coast", 250],
  ["Lavender rows", 275],
  ["Canyon bend", 15],
  ["Tundra lake", 175],
  ["Dune sea", 38],
] as const

/** A landscape-ish generated picture: sky gradient, two hills, a sun. Width/height differ so letterboxing shows. */
function picture(title: string, hue: number, w: number, h: number): string {
  const svg = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 \${w} \${h}" width="\${w}" height="\${h}">
<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(\${hue} 70% 72%)"/><stop offset="1" stop-color="hsl(\${(hue + 40) % 360} 60% 88%)"/></linearGradient></defs>
<rect width="\${w}" height="\${h}" fill="url(#s)"/>
<circle cx="\${w * 0.72}" cy="\${h * 0.3}" r="\${h * 0.09}" fill="hsl(\${(hue + 180) % 360} 90% 80%)"/>
<path d="M0 \${h * 0.7} Q \${w * 0.25} \${h * 0.45} \${w * 0.55} \${h * 0.68} T \${w} \${h * 0.6} V \${h} H 0 Z" fill="hsl(\${hue} 35% 38%)"/>
<path d="M0 \${h * 0.85} Q \${w * 0.4} \${h * 0.7} \${w} \${h * 0.82} V \${h} H 0 Z" fill="hsl(\${hue} 40% 24%)"/>
<text x="\${w * 0.05}" y="\${h * 0.12}" font-family="system-ui, sans-serif" font-size="\${h * 0.06}" fill="hsl(\${hue} 40% 20%)">\${title}</text>
</svg>\`
  return \`data:image/svg+xml;charset=utf-8,\${encodeURIComponent(svg)}\`
}

const ITEMS: readonly LightboxItem[] = PLACES.map(([title, hue], i) => {
  const portrait = i % 5 === 3
  return {
    src: picture(title, hue, portrait ? 900 : 1600, portrait ? 1200 : 1000),
    thumb: picture(title, hue, 320, 220),
    alt: \`\${title} (illustration \${i + 1})\`,
    caption: \`\${title} — generated illustration \${i + 1} of \${PLACES.length}\`,
  }
})


export function LoopingGallery() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [loop, setLoop] = useState(false)
  const [log, setLog] = useState<readonly string[]>([])
  const onOpenChange = (next: boolean, reason: CloseReason | null) => {
    setOpen(next)
    if (!next && reason) setLog((l) => [\`closed at \${index + 1} (\${reason})\`, ...l].slice(0, 6))
  }
  return (
    <EnsureOverlayUi>
      <section className="flex flex-col gap-1.5 text-[13px]" aria-label="Event log">
        <div className="flex flex-wrap items-center gap-2">
          <Button size="xs" variant="outline" onClick={() => setOpen(true)} data-open-viewer="">
            Open the viewer
          </Button>
          <Button size="xs" variant={loop ? "default" : "outline"} onClick={() => setLoop((l) => !l)} aria-pressed={loop} data-loop="">
            loop {loop ? "on" : "off"}
          </Button>
          <span className="text-muted-foreground tabular-nums" data-index="">
            current index {index + 1} / {ITEMS.length}
          </span>
        </div>
        <ol className="flex flex-col gap-0.5 font-mono text-xs text-muted-foreground" data-log="">
          {log.length === 0 ? <li>—</li> : log.map((line, i) => <li key={\`\${i}-\${line}\`}>{line}</li>)}
        </ol>
        <Lightbox items={ITEMS} open={open} onOpenChange={onOpenChange} index={index} onIndexChange={setIndex} loop={loop} name="looping-gallery" title="Gallery" />
      </section>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>a(()=>import(`./lightbox-controlled-BVtdmmNz.js`),[]));var C=[[`Fjord at dawn`,205],[`Desert ridge`,28],[`Pine forest`,140],[`Harbour lights`,220],[`Salt flats`,45],[`Glacier tongue`,190],[`Rice terraces`,95],[`Basalt coast`,250],[`Lavender rows`,275],[`Canyon bend`,15],[`Tundra lake`,175],[`Dune sea`,38]];function w(e,t,n,r){let i=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${r}" width="${n}" height="${r}">
<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(${t} 70% 72%)"/><stop offset="1" stop-color="hsl(${(t+40)%360} 60% 88%)"/></linearGradient></defs>
<rect width="${n}" height="${r}" fill="url(#s)"/>
<circle cx="${n*.72}" cy="${r*.3}" r="${r*.09}" fill="hsl(${(t+180)%360} 90% 80%)"/>
<path d="M0 ${r*.7} Q ${n*.25} ${r*.45} ${n*.55} ${r*.68} T ${n} ${r*.6} V ${r} H 0 Z" fill="hsl(${t} 35% 38%)"/>
<path d="M0 ${r*.85} Q ${n*.4} ${r*.7} ${n} ${r*.82} V ${r} H 0 Z" fill="hsl(${t} 40% 24%)"/>
<text x="${n*.05}" y="${r*.12}" font-family="system-ui, sans-serif" font-size="${r*.06}" fill="hsl(${t} 40% 20%)">${e}</text>
</svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`}var T=C.map(([e,t],n)=>{let r=n%5==3;return{src:w(e,t,r?900:1600,r?1200:1e3),thumb:w(e,t,320,220),alt:`${e} (illustration ${n+1})`,caption:`${e} — generated illustration ${n+1} of ${C.length}`}});function E(){let[e,t]=(0,_.useState)(!1),[r,i]=(0,_.useState)(0),[a,s]=(0,_.useState)(null);(0,_.useEffect)(()=>s(d()),[]);let c=e=>n=>{l(n.currentTarget.querySelector(`img`),()=>{i(e),t(!0)})};return(0,h.jsx)(o,{children:(0,h.jsxs)(`div`,{className:`flex flex-col gap-2 text-[13px]`,children:[(0,h.jsxs)(`span`,{className:`text-muted-foreground`,"data-testid":`vt-support`,children:[`view transitions `,a===null?`…`:a?`supported`:`unsupported → fade`]}),(0,h.jsx)(`ul`,{className:`grid grid-cols-3 gap-1.5 sm:grid-cols-4 md:grid-cols-6`,"aria-label":`Gallery`,children:T.map((e,t)=>(0,h.jsx)(`li`,{children:(0,h.jsx)(`button`,{type:`button`,onClick:c(t),"aria-label":`Open ${e.alt}`,className:`block w-full overflow-hidden rounded-md ring-offset-2 ring-offset-background outline-none focus-visible:ring-2 focus-visible:ring-ring`,"data-thumb":t,children:(0,h.jsx)(`img`,{src:e.thumb,alt:``,className:`aspect-[4/3] w-full object-cover transition-transform hover:scale-105`})})},e.alt))}),(0,h.jsx)(n,{items:T,open:e,onOpenChange:e=>t(e),index:r,onIndexChange:i,name:`gallery`,title:`Gallery`})]})})}var D=`import { useEffect, useState, type MouseEvent } from "react"
import { EnsureOverlayUi, Lightbox, morphOpen, supportsViewTransitions, type LightboxItem } from "@kitora/overlay"

// Gallery with a thumbnail morph: click a thumbnail and it morphs into the full view (View
// Transitions; a plain fade where unsupported or with reduced motion). ←/→, Home/End and swipe move;
// closing returns focus to the thumbnail. The pictures are generated SVGs, so no network is needed.

const PLACES = [
  ["Fjord at dawn", 205],
  ["Desert ridge", 28],
  ["Pine forest", 140],
  ["Harbour lights", 220],
  ["Salt flats", 45],
  ["Glacier tongue", 190],
  ["Rice terraces", 95],
  ["Basalt coast", 250],
  ["Lavender rows", 275],
  ["Canyon bend", 15],
  ["Tundra lake", 175],
  ["Dune sea", 38],
] as const

/** A landscape-ish generated picture: sky gradient, two hills, a sun. Width/height differ so letterboxing shows. */
function picture(title: string, hue: number, w: number, h: number): string {
  const svg = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 \${w} \${h}" width="\${w}" height="\${h}">
<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(\${hue} 70% 72%)"/><stop offset="1" stop-color="hsl(\${(hue + 40) % 360} 60% 88%)"/></linearGradient></defs>
<rect width="\${w}" height="\${h}" fill="url(#s)"/>
<circle cx="\${w * 0.72}" cy="\${h * 0.3}" r="\${h * 0.09}" fill="hsl(\${(hue + 180) % 360} 90% 80%)"/>
<path d="M0 \${h * 0.7} Q \${w * 0.25} \${h * 0.45} \${w * 0.55} \${h * 0.68} T \${w} \${h * 0.6} V \${h} H 0 Z" fill="hsl(\${hue} 35% 38%)"/>
<path d="M0 \${h * 0.85} Q \${w * 0.4} \${h * 0.7} \${w} \${h * 0.82} V \${h} H 0 Z" fill="hsl(\${hue} 40% 24%)"/>
<text x="\${w * 0.05}" y="\${h * 0.12}" font-family="system-ui, sans-serif" font-size="\${h * 0.06}" fill="hsl(\${hue} 40% 20%)">\${title}</text>
</svg>\`
  return \`data:image/svg+xml;charset=utf-8,\${encodeURIComponent(svg)}\`
}

const ITEMS: readonly LightboxItem[] = PLACES.map(([title, hue], i) => {
  const portrait = i % 5 === 3
  return {
    src: picture(title, hue, portrait ? 900 : 1600, portrait ? 1200 : 1000),
    thumb: picture(title, hue, 320, 220),
    alt: \`\${title} (illustration \${i + 1})\`,
    caption: \`\${title} — generated illustration \${i + 1} of \${PLACES.length}\`,
  }
})


export function PhotoGallery() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [vt, setVt] = useState<boolean | null>(null)
  // read after mount: the server render cannot know the browser's support
  useEffect(() => setVt(supportsViewTransitions()), [])
  const openAt = (i: number) => (e: MouseEvent<HTMLButtonElement>) => {
    const thumb = e.currentTarget.querySelector("img")
    // morphs the thumbnail into the full view, then opens on that index
    void morphOpen(thumb, () => {
      setIndex(i)
      setOpen(true)
    })
  }
  return (
    <EnsureOverlayUi>
      <div className="flex flex-col gap-2 text-[13px]">
        <span className="text-muted-foreground" data-testid="vt-support">
          view transitions {vt === null ? "…" : vt ? "supported" : "unsupported → fade"}
        </span>
        <ul className="grid grid-cols-3 gap-1.5 sm:grid-cols-4 md:grid-cols-6" aria-label="Gallery">
          {ITEMS.map((item, i) => (
            <li key={item.alt}>
              <button
                type="button"
                onClick={openAt(i)}
                aria-label={\`Open \${item.alt}\`}
                className="block w-full overflow-hidden rounded-md ring-offset-2 ring-offset-background outline-none focus-visible:ring-2 focus-visible:ring-ring"
                data-thumb={i}
              >
                <img src={item.thumb} alt="" className="aspect-[4/3] w-full object-cover transition-transform hover:scale-105" />
              </button>
            </li>
          ))}
        </ul>
        <Lightbox items={ITEMS} open={open} onOpenChange={(next) => setOpen(next)} index={index} onIndexChange={setIndex} name="gallery" title="Gallery" />
      </div>
    </EnsureOverlayUi>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>a(()=>import(`./lightbox-gallery-CFu6ld6N.js`),[]));var O=e=>`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='480' height='320'><rect width='480' height='320' fill='hsl(${e} 60%25 70%25)'/><circle cx='360' cy='90' r='30' fill='white' fill-opacity='0.8'/><path d='M0 320 L150 170 L270 270 L360 200 L480 320 Z' fill='hsl(${e} 35%25 30%25)'/></svg>`,k=[[`Lavender rows`,275],[`Canyon bend`,15],[`Tundra lake`,175],[`Dune sea`,38]];function A(){return(0,h.jsx)(g,{children:(0,h.jsx)(u,{className:`grid w-full max-w-lg grid-cols-2 gap-2 sm:grid-cols-4`,children:k.map(([e,t])=>(0,h.jsx)(r,{src:O(t),alt:e,preview:{caption:e},className:`aspect-[3/2] w-full`},e))})})}var j=`import { ImagePreviewLightbox } from "@kitora/overlay"
import { Image, ImagePreviewGroup } from "@kitora/ui/image"

// ui's \`Image preview\` opens in this Lightbox: the overlay kit's \`OverlayUiProvider\` (and \`EnsureOverlayUi\`) install
// \`ImagePreviewLightbox\`, the handler ui's \`ImagePreviewProvider\` seam waits for, so an app with the overlay runtime gets previews
// with no wiring. A host on the headless \`OverlayProvider\` mounts \`ImagePreviewLightbox\` itself under it, as here (under the
// styled provider it is already there; the nearest one wins). The group hands the Lightbox every image in it, in page order.
// The pictures are generated SVGs, so no network is needed.

const scene = (hue: number) =>
  \`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='480' height='320'><rect width='480' height='320' fill='hsl(\${hue} 60%25 70%25)'/><circle cx='360' cy='90' r='30' fill='white' fill-opacity='0.8'/><path d='M0 320 L150 170 L270 270 L360 200 L480 320 Z' fill='hsl(\${hue} 35%25 30%25)'/></svg>\`

const PLACES = [
  ["Lavender rows", 275],
  ["Canyon bend", 15],
  ["Tundra lake", 175],
  ["Dune sea", 38],
] as const

export function ImagePreviewGallery() {
  return (
    <ImagePreviewLightbox>
      <ImagePreviewGroup className="grid w-full max-w-lg grid-cols-2 gap-2 sm:grid-cols-4">
        {PLACES.map(([title, hue]) => (
          <Image key={title} src={scene(hue)} alt={title} preview={{ caption: title }} className="aspect-[3/2] w-full" />
        ))}
      </ImagePreviewGroup>
    </ImagePreviewLightbox>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>a(()=>import(`./lightbox-image-preview-OTGiEMdW.js`),[]));var M=e=>`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='480' height='320'><rect width='480' height='320' fill='hsl(${e} 60%25 70%25)'/><circle cx='120' cy='80' r='26' fill='white' fill-opacity='0.8'/><path d='M0 320 L120 200 L240 280 L340 180 L480 320 Z' fill='hsl(${e} 35%25 30%25)'/></svg>`,N=[[`Fjord morning`,205],[`Rice terraces`,95],[`Basalt coast`,50]];function P(e){let t=e.title?`${e.title} · ${(e.index??0)+1} of ${e.items.length}`:void 0;return(0,h.jsx)(n,{...e,title:t})}function F(){return(0,h.jsx)(s,{lightbox:P,children:(0,h.jsx)(u,{className:`grid w-full max-w-md grid-cols-3 gap-2`,children:N.map(([e,t])=>(0,h.jsx)(r,{src:M(t),alt:e,preview:!0,className:`aspect-[3/2] w-full`},e))})})}var I=`import { ImagePreviewHost, Lightbox, type LightboxProps } from "@kitora/overlay"
import { Image, ImagePreviewGroup } from "@kitora/ui/image"

// \`ImagePreviewHost\` is the image preview's handler with the viewer passed in: ui's \`Image preview\` calls it, and it opens
// the items in \`lightbox\`. \`ImagePreviewLightbox\` is this host with the kit's \`Lightbox\`; \`OverlayUiProvider\` uses it with
// the Lightbox loaded on demand (\`lightbox={null}\` until it arrives; a preview asked for meanwhile opens when it does).
// Here the viewer is the kit's Lightbox with the position in its title. The pictures are generated SVGs.

const scene = (hue: number) =>
  \`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='480' height='320'><rect width='480' height='320' fill='hsl(\${hue} 60%25 70%25)'/><circle cx='120' cy='80' r='26' fill='white' fill-opacity='0.8'/><path d='M0 320 L120 200 L240 280 L340 180 L480 320 Z' fill='hsl(\${hue} 35%25 30%25)'/></svg>\`

const PLACES = [
  ["Fjord morning", 205],
  ["Rice terraces", 95],
  ["Basalt coast", 50],
] as const

/** The kit's Lightbox, titled with the image's place in the group ("Basalt coast · 3 of 3"). */
function NumberedLightbox(props: LightboxProps) {
  const title = props.title ? \`\${props.title} · \${(props.index ?? 0) + 1} of \${props.items.length}\` : undefined
  return <Lightbox {...props} title={title} />
}

export function PreviewHostGallery() {
  return (
    <ImagePreviewHost lightbox={NumberedLightbox}>
      <ImagePreviewGroup className="grid w-full max-w-md grid-cols-3 gap-2">
        {PLACES.map(([title, hue]) => (
          <Image key={title} src={scene(hue)} alt={title} preview className="aspect-[3/2] w-full" />
        ))}
      </ImagePreviewGroup>
    </ImagePreviewHost>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>a(()=>import(`./lightbox-preview-host-D7tTe21C.js`),[]));function L(){return(0,h.jsxs)(p,{children:[(0,h.jsx)(t,{title:`Lightbox`,children:`O33 gallery · ←/→ Home End · swipe · counter · captions · thumbnail morph (pinch-zoom deferred). Images are generated SVGs, so the page needs no network.`}),(0,h.jsx)(m,{n:1,title:`Gallery with a thumbnail morph`,blurb:`Click a thumbnail: it morphs into the full view (View Transitions; a plain fade where unsupported or with reduced motion). ←/→, Home/End and swipe move; closing returns focus to the thumbnail.`,code:D,children:(0,h.jsx)(E,{})}),(0,h.jsx)(m,{n:2,title:`Controlled index, looping and close reason`,blurb:`index and open are the component's state, so it knows where the viewer stopped and why it closed. With loop on, → on the last image wraps to the first.`,code:S,children:(0,h.jsx)(x,{})}),(0,h.jsx)(m,{n:3,title:`ui Image preview`,blurb:`ui's Image with preview, in an ImagePreviewGroup: the provider installs the Lightbox as the preview handler, so each image is a button that opens the group at itself, and closing returns focus to it.`,code:j,children:(0,h.jsx)(A,{})}),(0,h.jsx)(m,{n:4,title:`Your own viewer for the preview`,blurb:`ImagePreviewHost is the preview handler with the viewer passed in (the provider passes the Lightbox once it has loaded). Here the viewer is the Lightbox with the image's position in its title.`,code:I,children:(0,h.jsx)(F,{})})]})}export{L as component};