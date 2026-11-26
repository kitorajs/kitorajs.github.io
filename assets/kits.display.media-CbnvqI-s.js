import{s as e}from"./kit-docs-CvNs0WqT.js";import{Cc as t,Ic as n}from"./index-9y5uwRd3.js";import{t as r}from"./carousel-6D5xlUGT.js";import{n as i,t as a}from"./masonry-Bor5WS5f.js";import{r as o}from"./people-BWa0DOHZ.js";import{r as s}from"./badges-CKbRtUKd.js";import{n as c,t as l}from"./image-CHY0xxeY.js";import"./kit-gallery-B-Yr9fP4.js";import{t as u}from"./example-CZLJLtIC.js";var d=n();function f(e,t,n=1600,r=1e3){let i=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${r}" width="${n}" height="${r}">
<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(${t} 70% 70%)"/><stop offset="1" stop-color="hsl(${(t+40)%360} 60% 88%)"/></linearGradient></defs>
<rect width="${n}" height="${r}" fill="url(#s)"/>
<circle cx="${n*.72}" cy="${r*.3}" r="${r*.09}" fill="hsl(${(t+180)%360} 90% 82%)"/>
<path d="M0 ${r*.7} Q ${n*.25} ${r*.45} ${n*.55} ${r*.68} T ${n} ${r*.6} V ${r} H 0 Z" fill="hsl(${t} 35% 38%)"/>
<path d="M0 ${r*.85} Q ${n*.4} ${r*.7} ${n} ${r*.82} V ${r} H 0 Z" fill="hsl(${t} 40% 24%)"/>
<text x="${n*.05}" y="${r*.12}" font-family="system-ui, sans-serif" font-size="${r*.06}" fill="hsl(${t} 40% 18%)">${e}</text>
</svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`}var p=[[`Fjord at dawn`,205],[`Desert ridge`,28],[`Pine forest`,140],[`Harbour lights`,220],[`Salt flats`,45],[`Glacier tongue`,190],[`Rice terraces`,95],[`Basalt coast`,250],[`Lavender rows`,275],[`Canyon bend`,15]],m=p.map(([e,t],n)=>({src:f(e,t),thumb:f(e,t,480,480),alt:`${e}, illustration ${n+1}`,caption:`${e} · generated illustration ${n+1} of ${p.length}`}));function h(){let e=m[3];return(0,d.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]`,children:[(0,d.jsx)(l,{images:m,layout:`mosaic`,columns:4,max:9,label:`Trip photos`,renderOverlay:e=>e.alt.split(`,`)[0]}),(0,d.jsxs)(`article`,{className:`flex flex-col gap-2 text-[13px] leading-relaxed`,children:[(0,d.jsx)(`h3`,{className:`text-[15px] font-semibold`,children:`Night at the harbour`}),(0,d.jsx)(`p`,{className:`text-muted-foreground`,children:`The lights come on one pier at a time. Click the photo to open it full size; Escape closes and focus returns here.`}),e?(0,d.jsx)(c,{image:e,aspect:`16/10`}):null,(0,d.jsx)(`p`,{className:`text-muted-foreground`,children:`By midnight only the ferry terminal is still lit, and the water takes its colour from the sky.`})]})]})}var g=`import { ImageGallery, ZoomImage, type GalleryImage } from "@kitora/display"

/** A generated landscape picture as a data URL: sky gradient, a sun, two hills and a title. */
function picture(title: string, hue: number, w = 1600, h = 1000): string {
  const svg = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 \${w} \${h}" width="\${w}" height="\${h}">
<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(\${hue} 70% 70%)"/><stop offset="1" stop-color="hsl(\${(hue + 40) % 360} 60% 88%)"/></linearGradient></defs>
<rect width="\${w}" height="\${h}" fill="url(#s)"/>
<circle cx="\${w * 0.72}" cy="\${h * 0.3}" r="\${h * 0.09}" fill="hsl(\${(hue + 180) % 360} 90% 82%)"/>
<path d="M0 \${h * 0.7} Q \${w * 0.25} \${h * 0.45} \${w * 0.55} \${h * 0.68} T \${w} \${h * 0.6} V \${h} H 0 Z" fill="hsl(\${hue} 35% 38%)"/>
<path d="M0 \${h * 0.85} Q \${w * 0.4} \${h * 0.7} \${w} \${h * 0.82} V \${h} H 0 Z" fill="hsl(\${hue} 40% 24%)"/>
<text x="\${w * 0.05}" y="\${h * 0.12}" font-family="system-ui, sans-serif" font-size="\${h * 0.06}" fill="hsl(\${hue} 40% 18%)">\${title}</text>
</svg>\`
  return \`data:image/svg+xml;charset=utf-8,\${encodeURIComponent(svg)}\`
}

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
] as const

const PHOTOS: readonly GalleryImage[] = PLACES.map(([title, hue], i) => ({
  src: picture(title, hue),
  thumb: picture(title, hue, 480, 480),
  alt: \`\${title}, illustration \${i + 1}\`,
  caption: \`\${title} · generated illustration \${i + 1} of \${PLACES.length}\`,
}))

// A mosaic gallery (the first image spans 2×2, nine tiles then "+N") that opens the overlay
// kit's Lightbox at the clicked image, beside a single zoomable figure in an article column.
export function MediaGallery() {
  const hero = PHOTOS[3]
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
      <ImageGallery images={PHOTOS} layout="mosaic" columns={4} max={9} label="Trip photos" renderOverlay={(image) => image.alt.split(",")[0]} />
      <article className="flex flex-col gap-2 text-[13px] leading-relaxed">
        <h3 className="text-[15px] font-semibold">Night at the harbour</h3>
        <p className="text-muted-foreground">The lights come on one pier at a time. Click the photo to open it full size; Escape closes and focus returns here.</p>
        {hero ? <ZoomImage image={hero} aspect="16/10" /> : null}
        <p className="text-muted-foreground">By midnight only the ferry terminal is still lit, and the water takes its colour from the sky.</p>
      </article>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>t(()=>import(`./media-gallery-DVymcJU0.js`),[]));function _(e,t,n,r){let i=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${r}" width="${n}" height="${r}"><defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(${t} 70% 70%)"/><stop offset="1" stop-color="hsl(${(t+40)%360} 60% 88%)"/></linearGradient></defs><rect width="${n}" height="${r}" fill="url(#s)"/><circle cx="${n*.7}" cy="${r*.28}" r="${Math.min(n,r)*.1}" fill="hsl(${(t+180)%360} 90% 82%)"/><path d="M0 ${r*.78} Q ${n*.5} ${r*.58} ${n} ${r*.74} V ${r} H 0 Z" fill="hsl(${t} 35% 34%)"/><text x="${n*.06}" y="${r*.12}" font-family="system-ui, sans-serif" font-size="${Math.min(n,r)*.08}" fill="hsl(${t} 40% 18%)">${e}</text></svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`}var v=[[`Lighthouse`,210,1.5],[`Dunes`,32,.66],[`Fern`,120,1.25],[`Harbour`,225,.75],[`Cliffs`,18,1],[`Aurora`,160,1.4],[`Orchard`,85,.7],[`Glacier`,195,1.15],[`Lavender`,275,.8]],y=v.map(([e,t,n],r)=>({src:_(e,t,1200,Math.round(1200*n)),thumb:_(e,t,480,Math.round(480*n)),alt:`${e}, illustration ${r+1}`,caption:`${e} · generated illustration ${r+1} of ${v.length}`}));function b(){return(0,d.jsx)(l,{images:y,layout:`masonry`,columns:3,label:`Coast and country`,renderOverlay:e=>e.alt.split(`,`)[0]})}var x='import { ImageGallery, type GalleryImage } from "@kitora/display"\n\n/** A generated picture as a data URL, `w` by `h`: a sky gradient, a sun and a hill, so the demo needs no network. */\nfunction picture(title: string, hue: number, w: number, h: number): string {\n  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}"><defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(${hue} 70% 70%)"/><stop offset="1" stop-color="hsl(${(hue + 40) % 360} 60% 88%)"/></linearGradient></defs><rect width="${w}" height="${h}" fill="url(#s)"/><circle cx="${w * 0.7}" cy="${h * 0.28}" r="${Math.min(w, h) * 0.1}" fill="hsl(${(hue + 180) % 360} 90% 82%)"/><path d="M0 ${h * 0.78} Q ${w * 0.5} ${h * 0.58} ${w} ${h * 0.74} V ${h} H 0 Z" fill="hsl(${hue} 35% 34%)"/><text x="${w * 0.06}" y="${h * 0.12}" font-family="system-ui, sans-serif" font-size="${Math.min(w, h) * 0.08}" fill="hsl(${hue} 40% 18%)">${title}</text></svg>`\n  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`\n}\n\n/** Title, hue and the picture\'s aspect (height / width): portraits, landscapes and squares mixed. */\nconst SHOTS = [\n  ["Lighthouse", 210, 1.5],\n  ["Dunes", 32, 0.66],\n  ["Fern", 120, 1.25],\n  ["Harbour", 225, 0.75],\n  ["Cliffs", 18, 1],\n  ["Aurora", 160, 1.4],\n  ["Orchard", 85, 0.7],\n  ["Glacier", 195, 1.15],\n  ["Lavender", 275, 0.8],\n] as const\n\nconst PHOTOS: readonly GalleryImage[] = SHOTS.map(([title, hue, aspect], i) => ({\n  src: picture(title, hue, 1200, Math.round(1200 * aspect)),\n  thumb: picture(title, hue, 480, Math.round(480 * aspect)),\n  alt: `${title}, illustration ${i + 1}`,\n  caption: `${title} · generated illustration ${i + 1} of ${SHOTS.length}`,\n}))\n\n// `layout="masonry"` shows every thumbnail whole at its own aspect ratio, packed into columns by\n// the display kit\'s Masonry; the tiles, their names and the Lightbox are the gallery\'s own, and\n// Tab still moves through the photos in order.\nexport function MediaGalleryMasonry() {\n  return <ImageGallery images={PHOTOS} layout="masonry" columns={3} label="Coast and country" renderOverlay={(image) => image.alt.split(",")[0]} />\n}\n';(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>t(()=>import(`./media-gallery-masonry-CJsuZ5WZ.js`),[]));function S(e,t,n){let r=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${t} ${n}" width="${t}" height="${n}"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(${e} 70% 72%)"/><stop offset="1" stop-color="hsl(${(e+40)%360} 60% 88%)"/></linearGradient></defs><rect width="${t}" height="${n}" fill="url(#g)"/><path d="M0 ${n*.75} Q ${t*.5} ${n*.55} ${t} ${n*.72} V ${n} H 0 Z" fill="hsl(${e} 35% 34%)"/></svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(r)}`}var C=[{id:`fjord`,title:`Fjord at dawn`,hue:205,ratio:1.4},{id:`plan`,title:`Day one`,note:`Ferry at nine, then the coast road north. Lunch wherever the view is best.`},{id:`ridge`,title:`Desert ridge`,hue:28,ratio:.7},{id:`pines`,title:`Pine forest`,hue:140,ratio:1.1},{id:`pack`,title:`Packing`,note:`Rain shell, wool layer, the small tripod.`},{id:`harbour`,title:`Harbour lights`,hue:220,ratio:.8},{id:`salt`,title:`Salt flats`,hue:45,ratio:1.6},{id:`glacier`,title:`Glacier tongue`,hue:190,ratio:1},{id:`food`,title:`Eat`,note:`The fish soup at the harbour. Cinnamon buns from the bakery by the station; go early, they sell out by ten.`},{id:`terraces`,title:`Rice terraces`,hue:95,ratio:.75}];function w(){return(0,d.jsx)(a,{as:`ul`,label:`Trip board`,minColumnWidth:180,gap:10,className:`w-full`,children:C.map(e=>(0,d.jsxs)(i,{className:`overflow-hidden rounded-lg border border-border bg-surface-1`,children:[e.hue!==void 0&&e.ratio!==void 0?(0,d.jsx)(`img`,{src:S(e.hue,600,Math.round(600*e.ratio)),alt:`${e.title}, generated illustration`,className:`block h-auto w-full`}):null,(0,d.jsxs)(`div`,{className:`px-3 py-2 text-[13px]`,children:[(0,d.jsx)(`p`,{className:`font-medium`,children:e.title}),e.note?(0,d.jsx)(`p`,{className:`mt-1 text-muted-foreground`,children:e.note}):null]})]},e.id))})}var T=`import { Masonry, MasonryItem } from "@kitora/display"

/** A generated picture as a data URL, \`w\` by \`h\`: a gradient sky and one hill, so the demo needs no network. */
function picture(hue: number, w: number, h: number): string {
  const svg = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 \${w} \${h}" width="\${w}" height="\${h}"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(\${hue} 70% 72%)"/><stop offset="1" stop-color="hsl(\${(hue + 40) % 360} 60% 88%)"/></linearGradient></defs><rect width="\${w}" height="\${h}" fill="url(#g)"/><path d="M0 \${h * 0.75} Q \${w * 0.5} \${h * 0.55} \${w} \${h * 0.72} V \${h} H 0 Z" fill="hsl(\${hue} 35% 34%)"/></svg>\`
  return \`data:image/svg+xml;charset=utf-8,\${encodeURIComponent(svg)}\`
}

type Pin = { readonly id: string; readonly title: string; readonly note?: string; readonly hue?: number; readonly ratio?: number }

const PINS: readonly Pin[] = [
  { id: "fjord", title: "Fjord at dawn", hue: 205, ratio: 1.4 },
  { id: "plan", title: "Day one", note: "Ferry at nine, then the coast road north. Lunch wherever the view is best." },
  { id: "ridge", title: "Desert ridge", hue: 28, ratio: 0.7 },
  { id: "pines", title: "Pine forest", hue: 140, ratio: 1.1 },
  { id: "pack", title: "Packing", note: "Rain shell, wool layer, the small tripod." },
  { id: "harbour", title: "Harbour lights", hue: 220, ratio: 0.8 },
  { id: "salt", title: "Salt flats", hue: 45, ratio: 1.6 },
  { id: "glacier", title: "Glacier tongue", hue: 190, ratio: 1 },
  { id: "food", title: "Eat", note: "The fish soup at the harbour. Cinnamon buns from the bakery by the station; go early, they sell out by ten." },
  { id: "terraces", title: "Rice terraces", hue: 95, ratio: 0.75 },
]

// A trip board: photos and notes of mixed heights packed into columns. The board stays in the
// order it was written for Tab and screen readers; \`minColumnWidth\` gives one column on a phone
// and up to four on a wide screen.
export function MediaMasonry() {
  return (
    <Masonry as="ul" label="Trip board" minColumnWidth={180} gap={10} className="w-full">
      {PINS.map((pin) => (
        <MasonryItem key={pin.id} className="overflow-hidden rounded-lg border border-border bg-surface-1">
          {pin.hue !== undefined && pin.ratio !== undefined ? (
            <img src={picture(pin.hue, 600, Math.round(600 * pin.ratio))} alt={\`\${pin.title}, generated illustration\`} className="block h-auto w-full" />
          ) : null}
          <div className="px-3 py-2 text-[13px]">
            <p className="font-medium">{pin.title}</p>
            {pin.note ? <p className="mt-1 text-muted-foreground">{pin.note}</p> : null}
          </div>
        </MasonryItem>
      ))}
    </Masonry>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>t(()=>import(`./media-masonry-qWcnqJg7.js`),[]));function E(e,t,n=1600,r=1e3){let i=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${r}" width="${n}" height="${r}">
<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(${t} 70% 70%)"/><stop offset="1" stop-color="hsl(${(t+40)%360} 60% 88%)"/></linearGradient></defs>
<rect width="${n}" height="${r}" fill="url(#s)"/>
<circle cx="${n*.72}" cy="${r*.3}" r="${r*.09}" fill="hsl(${(t+180)%360} 90% 82%)"/>
<path d="M0 ${r*.7} Q ${n*.25} ${r*.45} ${n*.55} ${r*.68} T ${n} ${r*.6} V ${r} H 0 Z" fill="hsl(${t} 35% 38%)"/>
<path d="M0 ${r*.85} Q ${n*.4} ${r*.7} ${n} ${r*.82} V ${r} H 0 Z" fill="hsl(${t} 40% 24%)"/>
<text x="${n*.05}" y="${r*.12}" font-family="system-ui, sans-serif" font-size="${r*.06}" fill="hsl(${t} 40% 18%)">${e}</text>
</svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`}var D=[[`Fjord at dawn`,205],[`Desert ridge`,28],[`Pine forest`,140],[`Harbour lights`,220],[`Salt flats`,45],[`Glacier tongue`,190],[`Rice terraces`,95],[`Basalt coast`,250],[`Lavender rows`,275],[`Canyon bend`,15]],O=D.map(([e,t],n)=>({src:E(e,t),thumb:E(e,t,480,480),alt:`${e}, illustration ${n+1}`,caption:`${e} · generated illustration ${n+1} of ${D.length}`}));function k(){return(0,d.jsx)(r,{label:`Product photos`,loop:!0,children:O.slice(0,6).map(e=>(0,d.jsxs)(`figure`,{className:`flex flex-col gap-1.5`,children:[(0,d.jsx)(`img`,{src:e.src,alt:e.alt,className:`aspect-[16/10] w-full rounded-lg object-cover`}),(0,d.jsx)(`figcaption`,{className:`text-[12px] text-muted-foreground`,children:e.caption})]},e.src))})}var A=`import { Carousel, type GalleryImage } from "@kitora/display"

/** A generated landscape picture as a data URL: sky gradient, a sun, two hills and a title. */
function picture(title: string, hue: number, w = 1600, h = 1000): string {
  const svg = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 \${w} \${h}" width="\${w}" height="\${h}">
<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(\${hue} 70% 70%)"/><stop offset="1" stop-color="hsl(\${(hue + 40) % 360} 60% 88%)"/></linearGradient></defs>
<rect width="\${w}" height="\${h}" fill="url(#s)"/>
<circle cx="\${w * 0.72}" cy="\${h * 0.3}" r="\${h * 0.09}" fill="hsl(\${(hue + 180) % 360} 90% 82%)"/>
<path d="M0 \${h * 0.7} Q \${w * 0.25} \${h * 0.45} \${w * 0.55} \${h * 0.68} T \${w} \${h * 0.6} V \${h} H 0 Z" fill="hsl(\${hue} 35% 38%)"/>
<path d="M0 \${h * 0.85} Q \${w * 0.4} \${h * 0.7} \${w} \${h * 0.82} V \${h} H 0 Z" fill="hsl(\${hue} 40% 24%)"/>
<text x="\${w * 0.05}" y="\${h * 0.12}" font-family="system-ui, sans-serif" font-size="\${h * 0.06}" fill="hsl(\${hue} 40% 18%)">\${title}</text>
</svg>\`
  return \`data:image/svg+xml;charset=utf-8,\${encodeURIComponent(svg)}\`
}

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
] as const

const PHOTOS: readonly GalleryImage[] = PLACES.map(([title, hue], i) => ({
  src: picture(title, hue),
  thumb: picture(title, hue, 480, 480),
  alt: \`\${title}, illustration \${i + 1}\`,
  caption: \`\${title} · generated illustration \${i + 1} of \${PLACES.length}\`,
}))

// A product hero carousel: one slide per view, floating arrows, dots, and looping from the
// last photo back to the first. Swipe on touch, or focus the track and use ←/→/Home/End.
export function MediaProduct() {
  return (
    <Carousel label="Product photos" loop>
      {PHOTOS.slice(0, 6).map((photo) => (
        <figure key={photo.src} className="flex flex-col gap-1.5">
          <img src={photo.src} alt={photo.alt} className="aspect-[16/10] w-full rounded-lg object-cover" />
          <figcaption className="text-[12px] text-muted-foreground">{photo.caption}</figcaption>
        </figure>
      ))}
    </Carousel>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>t(()=>import(`./media-product-CfDnWnoi.js`),[]));function j(e,t,n=1600,r=1e3){let i=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${r}" width="${n}" height="${r}">
<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(${t} 70% 70%)"/><stop offset="1" stop-color="hsl(${(t+40)%360} 60% 88%)"/></linearGradient></defs>
<rect width="${n}" height="${r}" fill="url(#s)"/>
<circle cx="${n*.72}" cy="${r*.3}" r="${r*.09}" fill="hsl(${(t+180)%360} 90% 82%)"/>
<path d="M0 ${r*.7} Q ${n*.25} ${r*.45} ${n*.55} ${r*.68} T ${n} ${r*.6} V ${r} H 0 Z" fill="hsl(${t} 35% 38%)"/>
<path d="M0 ${r*.85} Q ${n*.4} ${r*.7} ${n} ${r*.82} V ${r} H 0 Z" fill="hsl(${t} 40% 24%)"/>
<text x="${n*.05}" y="${r*.12}" font-family="system-ui, sans-serif" font-size="${r*.06}" fill="hsl(${t} 40% 18%)">${e}</text>
</svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`}var M=[[`Fjord at dawn`,205],[`Desert ridge`,28],[`Pine forest`,140],[`Harbour lights`,220],[`Salt flats`,45],[`Glacier tongue`,190],[`Rice terraces`,95],[`Basalt coast`,250],[`Lavender rows`,275],[`Canyon bend`,15]],N=M.map(([e,t],n)=>({src:j(e,t),thumb:j(e,t,480,480),alt:`${e}, illustration ${n+1}`,caption:`${e} · generated illustration ${n+1} of ${M.length}`})),P=[129,89,249,59,179,99,139,219,49,159];function F(){return(0,d.jsx)(r,{label:`Related prints`,perView:3,arrows:`header`,title:(0,d.jsx)(`h3`,{className:`text-[13px] font-semibold`,children:`Related prints`}),dots:!1,children:N.map((e,t)=>(0,d.jsxs)(`a`,{href:`#print-${t}`,className:`group block rounded-lg border bg-card p-1.5 text-[13px] hover:bg-accent/40`,children:[(0,d.jsx)(`img`,{src:e.thumb,alt:``,className:`aspect-[4/3] w-full rounded-md object-cover`}),(0,d.jsxs)(`div`,{className:`mt-1.5 flex items-center gap-2 px-0.5`,children:[(0,d.jsx)(`span`,{className:`min-w-0 flex-1 truncate font-medium`,children:e.alt.split(`,`)[0]}),(0,d.jsxs)(`span`,{className:`tabular-nums`,children:[`$`,P[t]]})]}),t%4==1?(0,d.jsx)(s,{tone:`accent`,className:`mt-1 ml-0.5`,children:`Limited`}):null]},e.src))})}var I=`import { Carousel, StatusBadge, type GalleryImage } from "@kitora/display"

/** A generated landscape picture as a data URL: sky gradient, a sun, two hills and a title. */
function picture(title: string, hue: number, w = 1600, h = 1000): string {
  const svg = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 \${w} \${h}" width="\${w}" height="\${h}">
<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(\${hue} 70% 70%)"/><stop offset="1" stop-color="hsl(\${(hue + 40) % 360} 60% 88%)"/></linearGradient></defs>
<rect width="\${w}" height="\${h}" fill="url(#s)"/>
<circle cx="\${w * 0.72}" cy="\${h * 0.3}" r="\${h * 0.09}" fill="hsl(\${(hue + 180) % 360} 90% 82%)"/>
<path d="M0 \${h * 0.7} Q \${w * 0.25} \${h * 0.45} \${w * 0.55} \${h * 0.68} T \${w} \${h * 0.6} V \${h} H 0 Z" fill="hsl(\${hue} 35% 38%)"/>
<path d="M0 \${h * 0.85} Q \${w * 0.4} \${h * 0.7} \${w} \${h * 0.82} V \${h} H 0 Z" fill="hsl(\${hue} 40% 24%)"/>
<text x="\${w * 0.05}" y="\${h * 0.12}" font-family="system-ui, sans-serif" font-size="\${h * 0.06}" fill="hsl(\${hue} 40% 18%)">\${title}</text>
</svg>\`
  return \`data:image/svg+xml;charset=utf-8,\${encodeURIComponent(svg)}\`
}

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
] as const

const PHOTOS: readonly GalleryImage[] = PLACES.map(([title, hue], i) => ({
  src: picture(title, hue),
  thumb: picture(title, hue, 480, 480),
  alt: \`\${title}, illustration \${i + 1}\`,
  caption: \`\${title} · generated illustration \${i + 1} of \${PLACES.length}\`,
}))

const PRICES = [129, 89, 249, 59, 179, 99, 139, 219, 49, 159]

// A "related items" row: three cards per view, arrows in the header next to the title.
export function MediaRelated() {
  return (
    <Carousel label="Related prints" perView={3} arrows="header" title={<h3 className="text-[13px] font-semibold">Related prints</h3>} dots={false}>
      {PHOTOS.map((photo, i) => (
        <a key={photo.src} href={\`#print-\${i}\`} className="group block rounded-lg border bg-card p-1.5 text-[13px] hover:bg-accent/40">
          <img src={photo.thumb} alt="" className="aspect-[4/3] w-full rounded-md object-cover" />
          <div className="mt-1.5 flex items-center gap-2 px-0.5">
            <span className="min-w-0 flex-1 truncate font-medium">{photo.alt.split(",")[0]}</span>
            <span className="tabular-nums">\${PRICES[i]}</span>
          </div>
          {i % 4 === 1 ? <StatusBadge tone="accent" className="mt-1 ml-0.5">Limited</StatusBadge> : null}
        </a>
      ))}
    </Carousel>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>t(()=>import(`./media-related-FStLA7PO.js`),[]));var L=[{id:`u1`,name:`Ada Lovelace`,role:`Staff engineer`,team:`Platform`,location:`London`,email:`ada@acme.dev`,presence:`online`,skills:[`Go`,`Postgres`,`Infra`]},{id:`u2`,name:`Grace Hopper`,role:`Engineering manager`,team:`Platform`,location:`Arlington`,email:`grace@acme.dev`,presence:`busy`,skills:[`Leadership`,`Compilers`]},{id:`u3`,name:`Linus Pauling`,role:`Data scientist`,team:`Insights`,location:`Portland`,email:`linus@acme.dev`,presence:`away`,skills:[`Python`,`SQL`,`ML`]},{id:`u4`,name:`Katherine Johnson`,role:`Product designer`,team:`Design`,location:`Hampton`,email:`katherine@acme.dev`,presence:`online`,skills:[`Figma`,`Research`]},{id:`u5`,name:`Alan Turing`,role:`Security engineer`,team:`Security`,location:`Manchester`,email:`alan@acme.dev`,presence:`offline`,skills:[`Crypto`,`Rust`]},{id:`u6`,name:`Hedy Lamarr`,role:`Frontend engineer`,team:`Web`,location:`Vienna`,email:`hedy@acme.dev`,presence:`online`,skills:[`React`,`TypeScript`,`A11y`]},{id:`u7`,name:`Margaret Hamilton`,role:`Principal engineer`,team:`Reliability`,location:`Boston`,email:`margaret@acme.dev`,presence:`away`,skills:[`SRE`,`Go`]},{id:`u8`,name:`Tim Berners-Lee`,role:`Developer advocate`,team:`DevRel`,location:`Geneva`,email:`tim@acme.dev`,presence:`offline`,skills:[`Docs`,`HTTP`]},{id:`u9`,name:`Radia Perlman`,role:`Network engineer`,team:`Infra`,location:`Seattle`,email:`radia@acme.dev`,presence:`online`,skills:[`Networking`,`BGP`]},{id:`u10`,name:`Barbara Liskov`,role:`Architect`,team:`Platform`,location:`Cambridge`,email:`barbara@acme.dev`,presence:`busy`,skills:[`Distributed systems`]}],R=[`We replaced three internal component libraries with this and nobody noticed, which is the best compliment a UI kit gets.`,`The JSON viewer alone saved our support team hours a week: search, copy path, done.`,`Dense by default. Finally a kit that looks like it was built for people who live in their tools.`,`Keyboard support everywhere, and it actually follows the ARIA patterns. Our audit came back clean.`];function z(){return(0,d.jsx)(r,{label:`Testimonials`,autoplay:5e3,loop:!0,arrows:`none`,title:(0,d.jsx)(`span`,{className:`text-[12px] font-medium text-muted-foreground uppercase tracking-wide`,children:`What teams say`}),children:R.map((e,t)=>{let n=L[t*2]??L[0];return(0,d.jsxs)(`blockquote`,{className:`flex min-h-36 flex-col justify-between gap-3 rounded-lg border bg-card p-4`,children:[(0,d.jsxs)(`p`,{className:`text-[15px] leading-relaxed`,children:[`“`,e,`”`]}),n?(0,d.jsxs)(`footer`,{className:`flex items-center gap-2 text-[12px]`,children:[(0,d.jsx)(o,{name:n.name,size:`sm`}),(0,d.jsx)(`span`,{className:`font-medium`,children:n.name}),(0,d.jsx)(`span`,{className:`text-muted-foreground`,children:n.role})]}):null]},e)})})}var B=`import { Carousel, PersonAvatar, type PersonLike, type Presence } from "@kitora/display"

interface TeamMember extends PersonLike {
  readonly id: string
  readonly role: string
  readonly team: string
  readonly location: string
  readonly email: string
  readonly presence: Presence
  readonly skills: readonly string[]
}

const TEAM: readonly TeamMember[] = [
  { id: "u1", name: "Ada Lovelace", role: "Staff engineer", team: "Platform", location: "London", email: "ada@acme.dev", presence: "online", skills: ["Go", "Postgres", "Infra"] },
  { id: "u2", name: "Grace Hopper", role: "Engineering manager", team: "Platform", location: "Arlington", email: "grace@acme.dev", presence: "busy", skills: ["Leadership", "Compilers"] },
  { id: "u3", name: "Linus Pauling", role: "Data scientist", team: "Insights", location: "Portland", email: "linus@acme.dev", presence: "away", skills: ["Python", "SQL", "ML"] },
  { id: "u4", name: "Katherine Johnson", role: "Product designer", team: "Design", location: "Hampton", email: "katherine@acme.dev", presence: "online", skills: ["Figma", "Research"] },
  { id: "u5", name: "Alan Turing", role: "Security engineer", team: "Security", location: "Manchester", email: "alan@acme.dev", presence: "offline", skills: ["Crypto", "Rust"] },
  { id: "u6", name: "Hedy Lamarr", role: "Frontend engineer", team: "Web", location: "Vienna", email: "hedy@acme.dev", presence: "online", skills: ["React", "TypeScript", "A11y"] },
  { id: "u7", name: "Margaret Hamilton", role: "Principal engineer", team: "Reliability", location: "Boston", email: "margaret@acme.dev", presence: "away", skills: ["SRE", "Go"] },
  { id: "u8", name: "Tim Berners-Lee", role: "Developer advocate", team: "DevRel", location: "Geneva", email: "tim@acme.dev", presence: "offline", skills: ["Docs", "HTTP"] },
  { id: "u9", name: "Radia Perlman", role: "Network engineer", team: "Infra", location: "Seattle", email: "radia@acme.dev", presence: "online", skills: ["Networking", "BGP"] },
  { id: "u10", name: "Barbara Liskov", role: "Architect", team: "Platform", location: "Cambridge", email: "barbara@acme.dev", presence: "busy", skills: ["Distributed systems"] },
]

const QUOTES = [
  "We replaced three internal component libraries with this and nobody noticed, which is the best compliment a UI kit gets.",
  "The JSON viewer alone saved our support team hours a week: search, copy path, done.",
  "Dense by default. Finally a kit that looks like it was built for people who live in their tools.",
  "Keyboard support everywhere, and it actually follows the ARIA patterns. Our audit came back clean.",
]

// Testimonials on autoplay every 5 s: pauses on hover and focus, never runs under reduced
// motion, and has a play/pause button in the header.
export function MediaTestimonials() {
  return (
    <Carousel label="Testimonials" autoplay={5000} loop arrows="none" title={<span className="text-[12px] font-medium text-muted-foreground uppercase tracking-wide">What teams say</span>}>
      {QUOTES.map((quote, i) => {
        const person = TEAM[i * 2] ?? TEAM[0]
        return (
          <blockquote key={quote} className="flex min-h-36 flex-col justify-between gap-3 rounded-lg border bg-card p-4">
            <p className="text-[15px] leading-relaxed">“{quote}”</p>
            {person ? (
              <footer className="flex items-center gap-2 text-[12px]">
                <PersonAvatar name={person.name} size="sm" />
                <span className="font-medium">{person.name}</span>
                <span className="text-muted-foreground">{person.role}</span>
              </footer>
            ) : null}
          </blockquote>
        )
      })}
    </Carousel>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>t(()=>import(`./media-testimonials-DqTi-3Pz.js`),[]));function V(){return(0,d.jsxs)(`div`,{children:[(0,d.jsx)(e,{title:`Media`,children:`The carousel scrolls a CSS scroll-snap track, so swipe, trackpad and momentum are the browser's own. Images open in the overlay kit's Lightbox with ←/→, swipe and a thumbnail strip.`}),(0,d.jsx)(u,{n:1,title:`Product carousel`,blurb:`One slide per view, floating arrows, dots, looping. Focus the track and use ←/→, Home and End.`,code:A,children:(0,d.jsx)(k,{})}),(0,d.jsx)(u,{n:2,title:`Related items`,blurb:`Three per view with the arrows in the header beside the title.`,code:I,children:(0,d.jsx)(F,{})}),(0,d.jsx)(u,{n:3,title:`Gallery and zoomable image`,blurb:`A mosaic of nine tiles then +N; any tile opens the Lightbox there. The article photo zooms on click.`,code:g,children:(0,d.jsx)(h,{})}),(0,d.jsx)(u,{n:4,title:`Masonry gallery`,blurb:`The ImageGallery masonry layout: every thumbnail whole at its own aspect ratio, packed into columns; any tile opens the Lightbox there, and Tab moves through the photos in order.`,code:x,children:(0,d.jsx)(b,{})}),(0,d.jsx)(u,{n:5,title:`Masonry board`,blurb:`Photos and notes of mixed heights packed into the shortest column. The DOM keeps the written order, so Tab and a screen reader read the board in that order.`,code:T,children:(0,d.jsx)(w,{})}),(0,d.jsx)(u,{n:6,title:`Testimonials on autoplay`,blurb:`Advances every five seconds, pauses on hover and focus, stays still under reduced motion.`,code:B,children:(0,d.jsx)(z,{})})]})}export{V as component};