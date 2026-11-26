import{o as e}from"./stats-C27f7H0k.js";import{s as t}from"./kit-docs-BUovISd0.js";import{n}from"./kbd-BBrTDCPy.js";import{Cc as r,Ic as i,ti as a}from"./index-B9ukmIN1.js";import{t as o}from"./code-block-CS72eEeA.js";import{t as s}from"./carousel-B2WPtN-L.js";import{t as c}from"./timeline-Jstm7zkx.js";import{a as l,n as u}from"./people-CL6LYWEM.js";import{n as d,t as f}from"./disclosure-ytpNtqof.js";import{n as p,r as m,t as h}from"./hints-RaGFHJNJ.js";import{n as g,t as _}from"./image-B5sBovjj.js";import"./kit-gallery-Bph7isB2.js";import{t as v}from"./example-BGnSQG2Y.js";var y=i(),b=[{value:`billing`,title:`How does billing work?`,content:`You pay per seat, monthly or yearly. Seats added mid-cycle are prorated.`},{value:`export`,title:`Can I export my data?`,content:`Yes: Settings → Data → Export gives you a ZIP of JSON and CSV files.`},{value:`sso`,title:`Do you support SSO?`,content:`SAML and OIDC on the Business plan, with SCIM provisioning.`}];function x(){return(0,y.jsx)(f,{items:b,defaultValue:[`billing`],className:`max-w-lg`})}var S=`import { DisplayAccordion } from "@kitora/display"

const ITEMS = [
  { value: "billing", title: "How does billing work?", content: "You pay per seat, monthly or yearly. Seats added mid-cycle are prorated." },
  { value: "export", title: "Can I export my data?", content: "Yes: Settings → Data → Export gives you a ZIP of JSON and CSV files." },
  { value: "sso", title: "Do you support SSO?", content: "SAML and OIDC on the Business plan, with SCIM provisioning." },
]

/** Items as data; one open at a time. ↑/↓ move between headers, Enter or Space toggles. */
export function BasicAccordion() {
  return <DisplayAccordion items={ITEMS} defaultValue={["billing"]} className="max-w-lg" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>r(()=>import(`./accordion-BF4MorIZ.js`),[]));function C(e,t,n=1600,r=1e3){let i=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${r}" width="${n}" height="${r}">
<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(${t} 70% 70%)"/><stop offset="1" stop-color="hsl(${(t+40)%360} 60% 88%)"/></linearGradient></defs>
<rect width="${n}" height="${r}" fill="url(#s)"/>
<circle cx="${n*.72}" cy="${r*.3}" r="${r*.09}" fill="hsl(${(t+180)%360} 90% 82%)"/>
<path d="M0 ${r*.7} Q ${n*.25} ${r*.45} ${n*.55} ${r*.68} T ${n} ${r*.6} V ${r} H 0 Z" fill="hsl(${t} 35% 38%)"/>
<path d="M0 ${r*.85} Q ${n*.4} ${r*.7} ${n} ${r*.82} V ${r} H 0 Z" fill="hsl(${t} 40% 24%)"/>
<text x="${n*.05}" y="${r*.12}" font-family="system-ui, sans-serif" font-size="${r*.06}" fill="hsl(${t} 40% 18%)">${e}</text>
</svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`}var w=[[`Fjord at dawn`,205],[`Desert ridge`,28],[`Pine forest`,140],[`Harbour lights`,220],[`Salt flats`,45],[`Glacier tongue`,190],[`Rice terraces`,95],[`Basalt coast`,250],[`Lavender rows`,275],[`Canyon bend`,15]],T=w.map(([e,t],n)=>({src:C(e,t),thumb:C(e,t,480,480),alt:`${e}, illustration ${n+1}`,caption:`${e} · generated illustration ${n+1} of ${w.length}`}));function E(){return(0,y.jsx)(s,{label:`Landscapes`,className:`max-w-xl`,children:T.slice(0,5).map(e=>(0,y.jsx)(`img`,{src:e.src,alt:e.alt,className:`aspect-[16/10] w-full rounded-lg object-cover`,draggable:!1},e.alt))})}var D='import { Carousel, type GalleryImage } from "@kitora/display"\n\n/** A generated landscape picture as a data URL: sky gradient, a sun, two hills and a title. */\nfunction picture(title: string, hue: number, w = 1600, h = 1000): string {\n  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">\n<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(${hue} 70% 70%)"/><stop offset="1" stop-color="hsl(${(hue + 40) % 360} 60% 88%)"/></linearGradient></defs>\n<rect width="${w}" height="${h}" fill="url(#s)"/>\n<circle cx="${w * 0.72}" cy="${h * 0.3}" r="${h * 0.09}" fill="hsl(${(hue + 180) % 360} 90% 82%)"/>\n<path d="M0 ${h * 0.7} Q ${w * 0.25} ${h * 0.45} ${w * 0.55} ${h * 0.68} T ${w} ${h * 0.6} V ${h} H 0 Z" fill="hsl(${hue} 35% 38%)"/>\n<path d="M0 ${h * 0.85} Q ${w * 0.4} ${h * 0.7} ${w} ${h * 0.82} V ${h} H 0 Z" fill="hsl(${hue} 40% 24%)"/>\n<text x="${w * 0.05}" y="${h * 0.12}" font-family="system-ui, sans-serif" font-size="${h * 0.06}" fill="hsl(${hue} 40% 18%)">${title}</text>\n</svg>`\n  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`\n}\n\nconst PLACES = [\n  ["Fjord at dawn", 205],\n  ["Desert ridge", 28],\n  ["Pine forest", 140],\n  ["Harbour lights", 220],\n  ["Salt flats", 45],\n  ["Glacier tongue", 190],\n  ["Rice terraces", 95],\n  ["Basalt coast", 250],\n  ["Lavender rows", 275],\n  ["Canyon bend", 15],\n] as const\n\nconst PHOTOS: readonly GalleryImage[] = PLACES.map(([title, hue], i) => ({\n  src: picture(title, hue),\n  thumb: picture(title, hue, 480, 480),\n  alt: `${title}, illustration ${i + 1}`,\n  caption: `${title} · generated illustration ${i + 1} of ${PLACES.length}`,\n}))\n\n/** A scroll-snap track: swipe, the arrows, the dots, or focus it and use ←/→/Home/End. */\nexport function BasicCarousel() {\n  return (\n    <Carousel label="Landscapes" className="max-w-xl">\n      {PHOTOS.slice(0, 5).map((photo) => (\n        <img key={photo.alt} src={photo.src} alt={photo.alt} className="aspect-[16/10] w-full rounded-lg object-cover" draggable={false} />\n      ))}\n    </Carousel>\n  )\n}\n';(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>r(()=>import(`./carousel-C8h2Xjk8.js`),[]));var O={id:`u1`,name:`Ada Lovelace`,role:`Staff engineer`,team:`Platform`,location:`London`,email:`ada@acme.dev`,presence:`online`,skills:[`Go`,`Postgres`,`Infra`]};function k(){return(0,y.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4 text-[13px]`,children:[(0,y.jsx)(h,{content:`Search`,shortcut:`Mod+K`,children:(0,y.jsx)(a,{size:`sm`,variant:`outline`,children:`Search`})}),(0,y.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[`Apdex `,(0,y.jsx)(p,{content:`Share of requests answered within the target time, counting tolerable ones as half.`})]}),(0,y.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 text-muted-foreground`,children:[`Press `,(0,y.jsx)(n,{binding:`Mod+Shift+P`,platform:`mac`}),` or `,(0,y.jsx)(n,{binding:`g i`,platform:`win`})]}),O?(0,y.jsx)(m,{content:(0,y.jsx)(l,{person:O,secondary:`${O.role} · ${O.location}`,size:`lg`}),children:(0,y.jsx)(`a`,{href:`#ada`,className:`font-medium underline decoration-dotted underline-offset-2`,children:`@ada`})}):null]})}var A=`import { Hint, InfoHint, Kbd, PersonLabel, PreviewCard, type PersonLike, type Presence } from "@kitora/display"
import { Button } from "@kitora/ui/button"

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

const ADA = TEAM[0]

/** A tooltip with its shortcut, an (i) explaining a term, key caps, and a hover card on a name. */
export function BasicHints() {
  return (
    <div className="flex flex-wrap items-center gap-4 text-[13px]">
      <Hint content="Search" shortcut="Mod+K">
        <Button size="sm" variant="outline">Search</Button>
      </Hint>
      <span className="inline-flex items-center gap-1">
        Apdex <InfoHint content="Share of requests answered within the target time, counting tolerable ones as half." />
      </span>
      <span className="inline-flex items-center gap-1.5 text-muted-foreground">
        Press <Kbd binding="Mod+Shift+P" platform="mac" /> or <Kbd binding="g i" platform="win" />
      </span>
      {ADA ? (
        <PreviewCard content={<PersonLabel person={ADA} secondary={\`\${ADA.role} · \${ADA.location}\`} size="lg" />}>
          <a href="#ada" className="font-medium underline decoration-dotted underline-offset-2">
            @ada
          </a>
        </PreviewCard>
      ) : null}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>r(()=>import(`./hints-Ct1eGKrj.js`),[]));function j(e,t,n=1600,r=1e3){let i=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${r}" width="${n}" height="${r}">
<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(${t} 70% 70%)"/><stop offset="1" stop-color="hsl(${(t+40)%360} 60% 88%)"/></linearGradient></defs>
<rect width="${n}" height="${r}" fill="url(#s)"/>
<circle cx="${n*.72}" cy="${r*.3}" r="${r*.09}" fill="hsl(${(t+180)%360} 90% 82%)"/>
<path d="M0 ${r*.7} Q ${n*.25} ${r*.45} ${n*.55} ${r*.68} T ${n} ${r*.6} V ${r} H 0 Z" fill="hsl(${t} 35% 38%)"/>
<path d="M0 ${r*.85} Q ${n*.4} ${r*.7} ${n} ${r*.82} V ${r} H 0 Z" fill="hsl(${t} 40% 24%)"/>
<text x="${n*.05}" y="${r*.12}" font-family="system-ui, sans-serif" font-size="${r*.06}" fill="hsl(${t} 40% 18%)">${e}</text>
</svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`}var M=[[`Fjord at dawn`,205],[`Desert ridge`,28],[`Pine forest`,140],[`Harbour lights`,220],[`Salt flats`,45],[`Glacier tongue`,190],[`Rice terraces`,95],[`Basalt coast`,250],[`Lavender rows`,275],[`Canyon bend`,15]],N=M.map(([e,t],n)=>({src:j(e,t),thumb:j(e,t,480,480),alt:`${e}, illustration ${n+1}`,caption:`${e} · generated illustration ${n+1} of ${M.length}`}));function P(){let e=N[0];return(0,y.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 sm:grid-cols-[1fr_14rem]`,children:[(0,y.jsx)(_,{images:N.slice(0,8),columns:4,label:`Landscapes`}),e?(0,y.jsx)(g,{image:e,aspect:`4/3`}):null]})}var F='import { ImageGallery, ZoomImage, type GalleryImage } from "@kitora/display"\n\n/** A generated landscape picture as a data URL: sky gradient, a sun, two hills and a title. */\nfunction picture(title: string, hue: number, w = 1600, h = 1000): string {\n  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">\n<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(${hue} 70% 70%)"/><stop offset="1" stop-color="hsl(${(hue + 40) % 360} 60% 88%)"/></linearGradient></defs>\n<rect width="${w}" height="${h}" fill="url(#s)"/>\n<circle cx="${w * 0.72}" cy="${h * 0.3}" r="${h * 0.09}" fill="hsl(${(hue + 180) % 360} 90% 82%)"/>\n<path d="M0 ${h * 0.7} Q ${w * 0.25} ${h * 0.45} ${w * 0.55} ${h * 0.68} T ${w} ${h * 0.6} V ${h} H 0 Z" fill="hsl(${hue} 35% 38%)"/>\n<path d="M0 ${h * 0.85} Q ${w * 0.4} ${h * 0.7} ${w} ${h * 0.82} V ${h} H 0 Z" fill="hsl(${hue} 40% 24%)"/>\n<text x="${w * 0.05}" y="${h * 0.12}" font-family="system-ui, sans-serif" font-size="${h * 0.06}" fill="hsl(${hue} 40% 18%)">${title}</text>\n</svg>`\n  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`\n}\n\nconst PLACES = [\n  ["Fjord at dawn", 205],\n  ["Desert ridge", 28],\n  ["Pine forest", 140],\n  ["Harbour lights", 220],\n  ["Salt flats", 45],\n  ["Glacier tongue", 190],\n  ["Rice terraces", 95],\n  ["Basalt coast", 250],\n  ["Lavender rows", 275],\n  ["Canyon bend", 15],\n] as const\n\nconst PHOTOS: readonly GalleryImage[] = PLACES.map(([title, hue], i) => ({\n  src: picture(title, hue),\n  thumb: picture(title, hue, 480, 480),\n  alt: `${title}, illustration ${i + 1}`,\n  caption: `${title} · generated illustration ${i + 1} of ${PLACES.length}`,\n}))\n\n/** Thumbnails that open the overlay kit\'s Lightbox at the clicked image (←/→, swipe, Esc), and one zoomable image. */\nexport function BasicImageLightbox() {\n  const first = PHOTOS[0]\n  return (\n    <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_14rem]">\n      <ImageGallery images={PHOTOS.slice(0, 8)} columns={4} label="Landscapes" />\n      {first ? <ZoomImage image={first} aspect="4/3" /> : null}\n    </div>\n  )\n}\n';(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>r(()=>import(`./image-lightbox-VYAMKvzt.js`),[]));var I=[{value:`overview`,label:`Overview`,content:(0,y.jsx)(`p`,{className:`text-muted-foreground`,children:`Overview content.`})},{value:`issues`,label:`Issues`,count:12,content:(0,y.jsx)(`p`,{className:`text-muted-foreground`,children:`12 open issues.`})},{value:`settings`,label:`Settings`,content:(0,y.jsx)(`p`,{className:`text-muted-foreground`,children:`Settings.`})}];function L(){return(0,y.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,y.jsx)(d,{tabs:I,label:`Project`}),(0,y.jsx)(d,{tabs:I,variant:`segmented`,label:`Project (segmented)`})]})}var R=`import { DisplayTabs } from "@kitora/display"

const TABS = [
  { value: "overview", label: "Overview", content: <p className="text-muted-foreground">Overview content.</p> },
  { value: "issues", label: "Issues", count: 12, content: <p className="text-muted-foreground">12 open issues.</p> },
  { value: "settings", label: "Settings", content: <p className="text-muted-foreground">Settings.</p> },
]

/** The same tabs in two looks; ←/→ move between them. */
export function BasicTabs() {
  return (
    <div className="flex flex-col gap-4">
      <DisplayTabs tabs={TABS} label="Project" />
      <DisplayTabs tabs={TABS} variant="segmented" label="Project (segmented)" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>r(()=>import(`./tabs-CpRNPdhS.js`),[]));var z=new Date(`2026-10-15T14:30:00Z`),B=e=>new Date(z.getTime()-e*6e4),V=[{value:`summary`,label:`الملخص`,content:(0,y.jsx)(`p`,{className:`text-muted-foreground`,children:`ملخص المشروع.`})},{value:`issues`,label:`المشكلات`,count:12,content:(0,y.jsx)(`p`,{className:`text-muted-foreground`,children:`١٢ مشكلة مفتوحة.`})},{value:`settings`,label:`الإعدادات`,content:(0,y.jsx)(`p`,{className:`text-muted-foreground`,children:`الإعدادات.`})}],H=[{id:`deploy`,title:`نُشر الإصدار ٢٫٤`,time:B(5),tone:`success`},{id:`review`,title:`اكتملت المراجعة`,time:B(40)},{id:`open`,title:`فُتح طلب الدمج`,time:B(95)}],U=[{name:`ليلى حداد`},{name:`عمر خليل`},{name:`سارة يوسف`},{name:`كريم ناصر`},{name:`هدى سالم`}],W=`// code stays left to right
const total = items.reduce((sum, item) => sum + item.price, 0)`;function G(){return(0,y.jsxs)(`div`,{dir:`rtl`,lang:`ar`,className:`flex flex-col gap-5`,children:[(0,y.jsx)(d,{tabs:V,variant:`enclosed`,orientation:`vertical`,label:`المشروع`}),(0,y.jsxs)(`div`,{className:`flex flex-wrap items-start gap-6`,children:[(0,y.jsx)(c,{events:H,now:z,density:`compact`,label:`النشاط`}),(0,y.jsxs)(`div`,{className:`flex flex-col items-start gap-2`,children:[(0,y.jsx)(u,{people:U,max:3}),(0,y.jsx)(e,{current:120,previous:100})]})]}),(0,y.jsx)(o,{code:W,language:`ts`,title:`total.ts`})]})}var K=`import { AvatarStack, CodeBlock, DisplayTabs, Timeline, TrendBadge, type TimelineEvent } from "@kitora/display"

const NOW = new Date("2026-10-15T14:30:00Z")
const minutesAgo = (minutes: number) => new Date(NOW.getTime() - minutes * 60_000)

const TABS = [
  { value: "summary", label: "الملخص", content: <p className="text-muted-foreground">ملخص المشروع.</p> },
  { value: "issues", label: "المشكلات", count: 12, content: <p className="text-muted-foreground">١٢ مشكلة مفتوحة.</p> },
  { value: "settings", label: "الإعدادات", content: <p className="text-muted-foreground">الإعدادات.</p> },
]

const EVENTS: readonly TimelineEvent[] = [
  { id: "deploy", title: "نُشر الإصدار ٢٫٤", time: minutesAgo(5), tone: "success" },
  { id: "review", title: "اكتملت المراجعة", time: minutesAgo(40) },
  { id: "open", title: "فُتح طلب الدمج", time: minutesAgo(95) },
]

const PEOPLE = [
  { name: "ليلى حداد" },
  { name: "عمر خليل" },
  { name: "سارة يوسف" },
  { name: "كريم ناصر" },
  { name: "هدى سالم" },
]

const CODE = \`// code stays left to right
const total = items.reduce((sum, item) => sum + item.price, 0)\`

/**
 * Right to left: inside \`dir="rtl"\` the parts mirror: vertical tabs sit at the inline start with their rule on the
 * inline end, the timeline's line runs down the inline start, avatars overlap toward it, the trend arrow points the
 * reading way. Code stays left to right: the CodeBlock's body is \`dir="ltr"\`, its header and copy button mirror.
 */
export function RightToLeftSurfaces() {
  return (
    <div dir="rtl" lang="ar" className="flex flex-col gap-5">
      <DisplayTabs tabs={TABS} variant="enclosed" orientation="vertical" label="المشروع" />
      <div className="flex flex-wrap items-start gap-6">
        <Timeline events={EVENTS} now={NOW} density="compact" label="النشاط" />
        <div className="flex flex-col items-start gap-2">
          <AvatarStack people={PEOPLE} max={3} />
          <TrendBadge current={120} previous={100} />
        </div>
      </div>
      <CodeBlock code={CODE} language="ts" title="total.ts" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>r(()=>import(`./right-to-left-DojktYGx.js`),[]));function q(){return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(t,{title:`Basics: surfaces`,children:`Content that shows a part at a time: slides, folds, tabs, tooltips, hover cards and a lightbox.`}),(0,y.jsx)(v,{n:1,title:`A carousel`,blurb:`Scroll-snap slides with arrows, dots and keys.`,code:D,children:(0,y.jsx)(E,{})}),(0,y.jsx)(v,{n:2,title:`An accordion`,blurb:`Items as data, single or multiple open.`,code:S,children:(0,y.jsx)(x,{})}),(0,y.jsx)(v,{n:3,title:`Tabs`,blurb:`Tabs as data in any of four looks.`,code:R,children:(0,y.jsx)(L,{})}),(0,y.jsx)(v,{n:4,title:`Hints, keys and hover cards`,blurb:`Tooltips with shortcuts from the keyboard kit, an (i) hint, and a hover card.`,code:A,children:(0,y.jsx)(k,{})}),(0,y.jsx)(v,{n:5,title:`Images in a lightbox`,blurb:`A gallery and a zoomable image on the overlay kit's Lightbox.`,code:F,children:(0,y.jsx)(P,{})}),(0,y.jsx)(v,{n:6,title:`Right to left`,blurb:`Inside \`dir="rtl"\` the parts mirror: vertical tabs, the timeline's line, overlapping avatars, the trend arrow. Code stays left to right: the CodeBlock's body keeps its layout while its header mirrors.`,code:K,children:(0,y.jsx)(G,{})})]})}export{q as component};