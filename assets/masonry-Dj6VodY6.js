import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{Ec as n,Uc as r,ri as i,zc as a}from"./index-BZuUy872.js";import{n as o,t as s}from"./masonry-BUM9nrIp.js";var c=e({MasonryCards:()=>d}),l=a(),u=[{title:`Release notes`,body:`Masonry keeps the items in source order in the DOM and only moves them on screen.`},{title:`Standup`,body:`Ship the file tree. Review the gallery.`},{title:`Design review`,body:`Cards of mixed heights pack into the shortest column, so the columns end close together and nothing leaves a gap at the top of a column. Long notes simply take more room.`},{title:`Groceries`,body:`Oats, lemons, coffee.`},{title:`Reading list`,body:`Inclusive Components. Refactoring UI. The Design of Everyday Things.`},{title:`Ideas`,body:`A wall of photos that loads late should re-layout by itself once each image knows its height.`},{title:`Call back`,body:`Dana, about the invoice.`},{title:`Travel`,body:`Train at 08:12, platform 4. Hotel check-in after three. Museum closes at six on Mondays, so go on Tuesday instead.`},{title:`Quote`,body:`“Make it work, make it right, make it fast.”`}];function d(){return(0,l.jsx)(s,{columns:{base:1,sm:2,md:3},gap:12,className:`w-full`,children:u.map(e=>(0,l.jsx)(o,{children:(0,l.jsxs)(`article`,{className:`rounded-lg border border-border bg-surface-1 p-3 text-sm`,children:[(0,l.jsx)(`h3`,{className:`font-medium`,children:e.title}),(0,l.jsx)(`p`,{className:`mt-1 text-muted-foreground`,children:e.body})]})},e.title))})}var f=e({MasonryImageWall:()=>g}),p=t(r(),1);function m(e,t,n,r){let i=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${r}" width="${n}" height="${r}"><rect width="${n}" height="${r}" fill="hsl(${t} 55% 62%)"/><circle cx="${n*.7}" cy="${r*.3}" r="${Math.min(n,r)*.12}" fill="hsl(${(t+180)%360} 80% 85%)"/><text x="${n*.08}" y="${r*.9}" font-family="system-ui, sans-serif" font-size="${Math.min(n,r)*.1}" fill="white">${e}</text></svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`}var h=[{label:`Dune`,hue:30,w:400,h:560},{label:`Lake`,hue:200,w:400,h:260},{label:`Moss`,hue:120,w:400,h:400},{label:`Dusk`,hue:280,w:400,h:620},{label:`Reef`,hue:180,w:400,h:300},{label:`Clay`,hue:15,w:400,h:480},{label:`Snow`,hue:220,w:400,h:240},{label:`Fern`,hue:95,w:400,h:520}];function g(){let[e,t]=(0,p.useState)(0),[n,r]=(0,p.useState)(!1);return(0,p.useEffect)(()=>{r(!1);let e=setTimeout(()=>r(!0),900);return()=>clearTimeout(e)},[e]),(0,l.jsxs)(`div`,{className:`flex w-full flex-col gap-3`,children:[(0,l.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,l.jsx)(i,{size:`sm`,variant:`outline`,onClick:()=>t(e=>e+1),children:`Load again`}),(0,l.jsx)(`span`,{className:`text-xs text-muted-foreground`,"aria-live":`polite`,children:n?`Images loaded`:`Loading images…`})]}),(0,l.jsx)(s,{as:`ul`,label:`Photo wall`,minColumnWidth:140,gap:8,className:`w-full`,children:h.map(e=>(0,l.jsxs)(o,{className:`overflow-hidden rounded-md border border-border bg-muted`,children:[n?(0,l.jsx)(`img`,{src:m(e.label,e.hue,e.w,e.h),alt:`${e.label}, generated landscape`,className:`block h-auto w-full`}):null,(0,l.jsx)(`p`,{className:`px-2 py-1 text-xs`,children:e.label})]},e.label))})]})}var _=e({MasonryKeyboard:()=>y}),v=[{n:1,lines:4},{n:2,lines:1},{n:3,lines:2},{n:4,lines:1},{n:5,lines:3},{n:6,lines:1},{n:7,lines:2}];function y(){let[e,t]=(0,p.useState)(null);return(0,l.jsxs)(`div`,{className:`flex w-full flex-col gap-3`,children:[(0,l.jsx)(s,{columns:3,gap:8,children:v.map(e=>(0,l.jsx)(o,{children:(0,l.jsxs)(`button`,{type:`button`,onFocus:()=>t(e.n),className:`block w-full rounded-md border border-border bg-surface-1 p-3 text-start text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`,children:[(0,l.jsxs)(`span`,{className:`font-medium`,children:[`Card `,e.n]}),Array.from({length:e.lines},(e,t)=>(0,l.jsxs)(`span`,{className:`mt-1 block text-xs text-muted-foreground`,children:[`Line `,t+1]},t))]})},e.n))}),(0,l.jsx)(`p`,{className:`text-xs text-muted-foreground`,"aria-live":`polite`,children:e===null?`Press Tab to move through the cards.`:`Focused: card ${e}`})]})}var b=e({MasonrySequential:()=>C}),x=[120,48,64,40,96,56,72,44,88],S=()=>x.map((e,t)=>(0,l.jsx)(o,{children:(0,l.jsx)(`div`,{className:`flex items-center justify-center rounded-md border border-border bg-surface-1 text-sm font-medium tabular-nums`,style:{height:e},children:t+1})},t));function C(){return(0,l.jsxs)(`div`,{className:`grid w-full gap-6 sm:grid-cols-2`,children:[(0,l.jsxs)(`section`,{className:`flex flex-col gap-2`,children:[(0,l.jsx)(`h3`,{className:`text-sm font-medium`,children:`Packed`}),(0,l.jsx)(s,{columns:3,gap:8,children:S()})]}),(0,l.jsxs)(`section`,{className:`flex flex-col gap-2`,children:[(0,l.jsx)(`h3`,{className:`text-sm font-medium`,children:`Sequential`}),(0,l.jsx)(s,{columns:3,gap:8,sequential:!0,children:S()})]})]})}var w=`import { Masonry, MasonryItem } from "@kitora/display"

const NOTES = [
  { title: "Release notes", body: "Masonry keeps the items in source order in the DOM and only moves them on screen." },
  { title: "Standup", body: "Ship the file tree. Review the gallery." },
  { title: "Design review", body: "Cards of mixed heights pack into the shortest column, so the columns end close together and nothing leaves a gap at the top of a column. Long notes simply take more room." },
  { title: "Groceries", body: "Oats, lemons, coffee." },
  { title: "Reading list", body: "Inclusive Components. Refactoring UI. The Design of Everyday Things." },
  { title: "Ideas", body: "A wall of photos that loads late should re-layout by itself once each image knows its height." },
  { title: "Call back", body: "Dana, about the invoice." },
  { title: "Travel", body: "Train at 08:12, platform 4. Hotel check-in after three. Museum closes at six on Mondays, so go on Tuesday instead." },
  { title: "Quote", body: "“Make it work, make it right, make it fast.”" },
] as const

// Cards of mixed heights. \`columns\` is a responsive map of the viewport's breakpoints (Tailwind's sm
// 640, md 768): one column on a phone, two on a tablet, three on a laptop. \`gap\` is in pixels.
export function MasonryCards() {
  return (
    <Masonry columns={{ base: 1, sm: 2, md: 3 }} gap={12} className="w-full">
      {NOTES.map((note) => (
        <MasonryItem key={note.title}>
          <article className="rounded-lg border border-border bg-surface-1 p-3 text-sm">
            <h3 className="font-medium">{note.title}</h3>
            <p className="mt-1 text-muted-foreground">{note.body}</p>
          </article>
        </MasonryItem>
      ))}
    </Masonry>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>n(()=>import(`./cards-BWZLRse4.js`),[]));var T=`import { useEffect, useState } from "react"
import { Button } from "@kitora/ui/button"
import { Masonry, MasonryItem } from "@kitora/display"

/** A generated picture as a data URL, \`w\` by \`h\`, so the demo needs no network. */
function picture(label: string, hue: number, w: number, h: number): string {
  const svg = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 \${w} \${h}" width="\${w}" height="\${h}"><rect width="\${w}" height="\${h}" fill="hsl(\${hue} 55% 62%)"/><circle cx="\${w * 0.7}" cy="\${h * 0.3}" r="\${Math.min(w, h) * 0.12}" fill="hsl(\${(hue + 180) % 360} 80% 85%)"/><text x="\${w * 0.08}" y="\${h * 0.9}" font-family="system-ui, sans-serif" font-size="\${Math.min(w, h) * 0.1}" fill="white">\${label}</text></svg>\`
  return \`data:image/svg+xml;charset=utf-8,\${encodeURIComponent(svg)}\`
}

const PHOTOS = [
  { label: "Dune", hue: 30, w: 400, h: 560 },
  { label: "Lake", hue: 200, w: 400, h: 260 },
  { label: "Moss", hue: 120, w: 400, h: 400 },
  { label: "Dusk", hue: 280, w: 400, h: 620 },
  { label: "Reef", hue: 180, w: 400, h: 300 },
  { label: "Clay", hue: 15, w: 400, h: 480 },
  { label: "Snow", hue: 220, w: 400, h: 240 },
  { label: "Fern", hue: 95, w: 400, h: 520 },
] as const

// An image wall whose pictures arrive late (here after a short delay; on a real page, the network).
// Each item starts as a short caption only; when its image loads the item grows, the Masonry's
// ResizeObserver sees it and packs the columns again. \`as="ul"\` makes it a list named by \`label\`.
export function MasonryImageWall() {
  const [round, setRound] = useState(0)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(false)
    const timer = setTimeout(() => setLoaded(true), 900)
    return () => clearTimeout(timer)
  }, [round])
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex items-center gap-3">
        <Button size="sm" variant="outline" onClick={() => setRound((r) => r + 1)}>
          Load again
        </Button>
        <span className="text-xs text-muted-foreground" aria-live="polite">
          {loaded ? "Images loaded" : "Loading images…"}
        </span>
      </div>
      <Masonry as="ul" label="Photo wall" minColumnWidth={140} gap={8} className="w-full">
        {PHOTOS.map((photo) => (
          <MasonryItem key={photo.label} className="overflow-hidden rounded-md border border-border bg-muted">
            {loaded ? <img src={picture(photo.label, photo.hue, photo.w, photo.h)} alt={\`\${photo.label}, generated landscape\`} className="block h-auto w-full" /> : null}
            <p className="px-2 py-1 text-xs">{photo.label}</p>
          </MasonryItem>
        ))}
      </Masonry>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>n(()=>import(`./image-wall-jpgGOUKZ.js`),[]));var E=`import { useState } from "react"
import { Masonry, MasonryItem } from "@kitora/display"

const ITEMS = [
  { n: 1, lines: 4 },
  { n: 2, lines: 1 },
  { n: 3, lines: 2 },
  { n: 4, lines: 1 },
  { n: 5, lines: 3 },
  { n: 6, lines: 1 },
  { n: 7, lines: 2 },
] as const

// Tab through the cards: focus moves 1, 2, 3 … in the order they were written, because the
// Masonry never reorders the DOM; only where each card is drawn changes. The line under the
// cards shows the last one focused.
export function MasonryKeyboard() {
  const [focused, setFocused] = useState<number | null>(null)
  return (
    <div className="flex w-full flex-col gap-3">
      <Masonry columns={3} gap={8}>
        {ITEMS.map((item) => (
          <MasonryItem key={item.n}>
            <button
              type="button"
              onFocus={() => setFocused(item.n)}
              className="block w-full rounded-md border border-border bg-surface-1 p-3 text-start text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <span className="font-medium">Card {item.n}</span>
              {Array.from({ length: item.lines }, (_, i) => (
                <span key={i} className="mt-1 block text-xs text-muted-foreground">
                  Line {i + 1}
                </span>
              ))}
            </button>
          </MasonryItem>
        ))}
      </Masonry>
      <p className="text-xs text-muted-foreground" aria-live="polite">
        {focused === null ? "Press Tab to move through the cards." : \`Focused: card \${focused}\`}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>n(()=>import(`./keyboard-CBzFhks1.js`),[]));var D=`import { Masonry, MasonryItem } from "@kitora/display"

const HEIGHTS = [120, 48, 64, 40, 96, 56, 72, 44, 88] as const

// The items are passed straight to the Masonry (not through a wrapper component), so it sees one child per tile.
const tiles = () =>
  HEIGHTS.map((height, i) => (
    <MasonryItem key={i}>
      <div className="flex items-center justify-center rounded-md border border-border bg-surface-1 text-sm font-medium tabular-nums" style={{ height }}>
        {i + 1}
      </div>
    </MasonryItem>
  ))

// The same nine tiles both ways. Packed (the default) puts each next tile into the shortest column,
// so the columns end close together and the visual order is close to the source order.
// \`sequential\` puts tile i into column i % columns, so the numbers read row by row exactly, with
// ragged column ends. The DOM, and so Tab and a screen reader, follow 1 to 9 in both.
export function MasonrySequential() {
  return (
    <div className="grid w-full gap-6 sm:grid-cols-2">
      <section className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">Packed</h3>
        <Masonry columns={3} gap={8}>
          {tiles()}
        </Masonry>
      </section>
      <section className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">Sequential</h3>
        <Masonry columns={3} gap={8} sequential>
          {tiles()}
        </Masonry>
      </section>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>n(()=>import(`./sequential-CSYFfth4.js`),[]));var O={"./demos/masonry/cards.tsx":c,"./demos/masonry/image-wall.tsx":f,"./demos/masonry/keyboard.tsx":_,"./demos/masonry/sequential.tsx":b},k={"./demos/masonry/cards.tsx":w,"./demos/masonry/image-wall.tsx":T,"./demos/masonry/keyboard.tsx":E,"./demos/masonry/sequential.tsx":D};export{O as modules,k as sources};