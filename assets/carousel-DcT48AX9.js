import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{Cc as t,Ic as n}from"./index-q72zUtm9.js";import{t as r}from"./carousel-D3_umkd3.js";var i=e({CarouselAutoplayLoop:()=>s}),a=n(),o=[{title:`Spring sale`,tone:`bg-emerald-500/15`},{title:`New: dark mode`,tone:`bg-sky-500/15`},{title:`Free shipping over 50`,tone:`bg-amber-500/15`}];function s(){return(0,a.jsx)(r,{label:`Promotions`,autoplay:4e3,loop:!0,className:`w-full max-w-md`,children:o.map(e=>(0,a.jsx)(`div`,{className:`grid aspect-[3/1] place-items-center rounded-lg text-base font-medium ${e.tone}`,children:e.title},e.title))})}var c=e({CarouselCardsPerView:()=>u}),l=[{who:`Ada, platform lead`,text:`We replaced three internal libraries in a week.`},{who:`Grace, designer`,text:`Tokens finally match the Figma file.`},{who:`Linus, data`,text:`The grid handles our biggest tables without a stutter.`},{who:`Hedy, frontend`,text:`Keyboard support came for free.`},{who:`Alan, security`,text:`No surprise dependencies in the audit.`}];function u(){return(0,a.jsx)(r,{label:`Testimonials`,title:`What teams say`,perView:2,gap:12,arrows:`header`,className:`w-full max-w-xl`,children:l.map(e=>(0,a.jsxs)(`figure`,{className:`flex h-full flex-col justify-between gap-3 rounded-lg border border-border bg-surface-1 p-4 text-sm`,children:[(0,a.jsxs)(`blockquote`,{children:[`“`,e.text,`”`]}),(0,a.jsx)(`figcaption`,{className:`text-xs text-muted-foreground`,children:e.who})]},e.who))})}var d=e({CarouselImages:()=>m});function f(e,t){let n=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000"><rect width="1600" height="1000" fill="hsl(${t} 70% 78%)"/><path d="M0 700 Q 400 450 880 680 T 1600 600 V 1000 H 0 Z" fill="hsl(${t} 35% 38%)"/><text x="80" y="120" font-family="system-ui, sans-serif" font-size="60" fill="hsl(${t} 40% 18%)">${e}</text></svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(n)}`}var p=[[`Fjord at dawn`,205],[`Desert ridge`,28],[`Pine forest`,140],[`Harbour lights`,220],[`Salt flats`,45]];function m(){return(0,a.jsx)(r,{label:`Landscapes`,className:`w-full max-w-xl`,children:p.map(([e,t])=>(0,a.jsx)(`img`,{src:f(e,t),alt:e,className:`aspect-[16/10] w-full rounded-lg object-cover`,draggable:!1},e))})}var h=`import { Carousel } from "@kitora/display"

const SLIDES = [
  { title: "Spring sale", tone: "bg-emerald-500/15" },
  { title: "New: dark mode", tone: "bg-sky-500/15" },
  { title: "Free shipping over 50", tone: "bg-amber-500/15" },
] as const

// \`autoplay\` (ms per slide) with \`loop\`: it pauses on hover and focus, offers a pause button, and does not
// start under reduced motion.
export function CarouselAutoplayLoop() {
  return (
    <Carousel label="Promotions" autoplay={4000} loop className="w-full max-w-md">
      {SLIDES.map((s) => (
        <div key={s.title} className={\`grid aspect-[3/1] place-items-center rounded-lg text-base font-medium \${s.tone}\`}>
          {s.title}
        </div>
      ))}
    </Carousel>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(h,()=>t(()=>import(`./autoplay-loop-C60D5lc_.js`),[]));var g=`import { Carousel } from "@kitora/display"

const QUOTES = [
  { who: "Ada, platform lead", text: "We replaced three internal libraries in a week." },
  { who: "Grace, designer", text: "Tokens finally match the Figma file." },
  { who: "Linus, data", text: "The grid handles our biggest tables without a stutter." },
  { who: "Hedy, frontend", text: "Keyboard support came for free." },
  { who: "Alan, security", text: "No surprise dependencies in the audit." },
] as const

// \`perView\` shows several slides per page and \`gap\` spaces them; \`arrows="header"\` moves the arrows next
// to a \`title\`, and the dots count pages, not slides.
export function CarouselCardsPerView() {
  return (
    <Carousel label="Testimonials" title="What teams say" perView={2} gap={12} arrows="header" className="w-full max-w-xl">
      {QUOTES.map((q) => (
        <figure key={q.who} className="flex h-full flex-col justify-between gap-3 rounded-lg border border-border bg-surface-1 p-4 text-sm">
          <blockquote>“{q.text}”</blockquote>
          <figcaption className="text-xs text-muted-foreground">{q.who}</figcaption>
        </figure>
      ))}
    </Carousel>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>t(()=>import(`./cards-per-view-Crbo63pT.js`),[]));var _=`import { Carousel } from "@kitora/display"

/** A generated landscape as a data URL, so the demo needs no network. */
function picture(title: string, hue: number): string {
  const svg = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000"><rect width="1600" height="1000" fill="hsl(\${hue} 70% 78%)"/><path d="M0 700 Q 400 450 880 680 T 1600 600 V 1000 H 0 Z" fill="hsl(\${hue} 35% 38%)"/><text x="80" y="120" font-family="system-ui, sans-serif" font-size="60" fill="hsl(\${hue} 40% 18%)">\${title}</text></svg>\`
  return \`data:image/svg+xml;charset=utf-8,\${encodeURIComponent(svg)}\`
}

const PLACES = [
  ["Fjord at dawn", 205],
  ["Desert ridge", 28],
  ["Pine forest", 140],
  ["Harbour lights", 220],
  ["Salt flats", 45],
] as const

// A scroll-snap track: swipe, use the arrows or the dots, or focus it and press ←, →, Home and End.
export function CarouselImages() {
  return (
    <Carousel label="Landscapes" className="w-full max-w-xl">
      {PLACES.map(([title, hue]) => (
        <img key={title} src={picture(title, hue)} alt={title} className="aspect-[16/10] w-full rounded-lg object-cover" draggable={false} />
      ))}
    </Carousel>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(_,()=>t(()=>import(`./images-dkdiHQ9j.js`),[]));var v={"./demos/carousel/autoplay-loop.tsx":i,"./demos/carousel/cards-per-view.tsx":c,"./demos/carousel/images.tsx":d},y={"./demos/carousel/autoplay-loop.tsx":h,"./demos/carousel/cards-per-view.tsx":g,"./demos/carousel/images.tsx":_};export{v as modules,y as sources};