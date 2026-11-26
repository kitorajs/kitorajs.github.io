import{n as e,t}from"./stats-V6U4lkOu.js";import{t as n}from"./circle-check-CEqScjDT.js";import{s as r}from"./kit-docs-CvNs0WqT.js";import{t as i}from"./git-branch-DpcW4RGM.js";import{t as a}from"./git-commit-horizontal-Bw7umnwT.js";import{t as o}from"./globe-sWXhXf1y.js";import{t as s}from"./hammer-DEDUTHmQ.js";import{t as c}from"./rocket-DlwnT5g4.js";import{t as l}from"./shield-check-QpyAbWp2.js";import{t as u}from"./timer-Cp2lT3Tz.js";import{Cc as d,Ic as f,ti as p}from"./index-9y5uwRd3.js";import{n as m}from"./code-block-qBHLFEGc.js";import{t as h}from"./json-viewer-BKuDnsgI.js";import{t as g}from"./timeline-BQ9mCFLX.js";import{t as _}from"./description-list-DPUBRyYS.js";import{a as v,n as y}from"./people-BWa0DOHZ.js";import{o as b,r as x}from"./badges-CKbRtUKd.js";import{n as S}from"./disclosure-C5j12mxn.js";import{r as C,t as w}from"./hints-DnVOIgYM.js";import"./kit-gallery-B-Yr9fP4.js";import{t as T}from"./example-CZLJLtIC.js";var E=f(),D=new Date(`2026-10-15T14:30:00Z`),O=e=>new Date(D.getTime()-e*6e4),k=[{id:`u1`,name:`Ada Lovelace`,role:`Staff engineer`,team:`Platform`,location:`London`,email:`ada@acme.dev`,presence:`online`,skills:[`Go`,`Postgres`,`Infra`]},{id:`u2`,name:`Grace Hopper`,role:`Engineering manager`,team:`Platform`,location:`Arlington`,email:`grace@acme.dev`,presence:`busy`,skills:[`Leadership`,`Compilers`]},{id:`u3`,name:`Linus Pauling`,role:`Data scientist`,team:`Insights`,location:`Portland`,email:`linus@acme.dev`,presence:`away`,skills:[`Python`,`SQL`,`ML`]},{id:`u4`,name:`Katherine Johnson`,role:`Product designer`,team:`Design`,location:`Hampton`,email:`katherine@acme.dev`,presence:`online`,skills:[`Figma`,`Research`]},{id:`u5`,name:`Alan Turing`,role:`Security engineer`,team:`Security`,location:`Manchester`,email:`alan@acme.dev`,presence:`offline`,skills:[`Crypto`,`Rust`]},{id:`u6`,name:`Hedy Lamarr`,role:`Frontend engineer`,team:`Web`,location:`Vienna`,email:`hedy@acme.dev`,presence:`online`,skills:[`React`,`TypeScript`,`A11y`]},{id:`u7`,name:`Margaret Hamilton`,role:`Principal engineer`,team:`Reliability`,location:`Boston`,email:`margaret@acme.dev`,presence:`away`,skills:[`SRE`,`Go`]},{id:`u8`,name:`Tim Berners-Lee`,role:`Developer advocate`,team:`DevRel`,location:`Geneva`,email:`tim@acme.dev`,presence:`offline`,skills:[`Docs`,`HTTP`]},{id:`u9`,name:`Radia Perlman`,role:`Network engineer`,team:`Infra`,location:`Seattle`,email:`radia@acme.dev`,presence:`online`,skills:[`Networking`,`BGP`]},{id:`u10`,name:`Barbara Liskov`,role:`Architect`,team:`Platform`,location:`Cambridge`,email:`barbara@acme.dev`,presence:`busy`,skills:[`Distributed systems`]}];function A(e,t=24,n=100,r=1.5){let i=[],a=n,o=e;for(let e=0;e<t;e+=1)o=(o*9301+49297)%233280,a=Math.max(0,a+r+(o/233280-.5)*n*.12),i.push(Math.round(a*10)/10);return i}var j=k[5]??{name:`Hedy Lamarr`,role:`Frontend engineer`},M=[{term:`Status`,value:(0,E.jsx)(x,{tone:`success`,dot:!0,children:`Ready`})},{term:`Environment`,value:`Production`},{term:`Branch`,value:(0,E.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[(0,E.jsx)(i,{className:`size-3.5 text-muted-foreground`}),`main`]})},{term:`Commit`,value:`a1c9e07`,mono:!0,copy:`a1c9e07c3f81b2d`},{term:`Duration`,value:`1 min 52 s`},{term:`Region`,value:`fra1 · iad1 · sfo1`},{term:`Author`,value:(0,E.jsx)(C,{content:(0,E.jsx)(v,{person:j,secondary:j.role,size:`lg`}),children:(0,E.jsx)(`a`,{href:`#author`,className:`font-medium underline decoration-dotted underline-offset-2`,children:j.name})})},{term:`Domains`,value:`acme.dev, www.acme.dev`,wide:!0}],N=[{id:`live`,title:`Promoted to production`,icon:(0,E.jsx)(c,{}),tone:`success`,time:O(3),body:`Aliased acme.dev and www.acme.dev`},{id:`checks`,title:`Checks passed`,icon:(0,E.jsx)(l,{}),tone:`info`,time:O(5),body:(0,E.jsx)(b,{tags:[{id:`e2e`,label:`e2e · 48`,color:`#10b981`},{id:`lint`,label:`lint`,color:`#10b981`},{id:`types`,label:`types`,color:`#10b981`}]})},{id:`build`,title:`Build finished`,icon:(0,E.jsx)(s,{}),time:O(6),body:`312 static pages, 41 functions, 2.4 MB`},{id:`push`,title:`pushed a1c9e07 to main`,icon:(0,E.jsx)(a,{}),time:O(8),actor:j.name}],P=`14:21:03.118  Cloning github.com/acme/web (branch: main, commit: a1c9e07)
14:21:04.902  Restored build cache from previous deployment
14:21:05.440  Running "pnpm install --frozen-lockfile"
14:21:19.775  Running "pnpm build"
14:22:31.006  warn  Large chunk: assets/editor-9f2a.js is 612 kB after minification
14:22:48.330  Generated 312 static pages
14:22:55.019  Deployment completed`,F=`{
  "framework": "vite",
  "buildCommand": "pnpm build",
  "regions": ["fra1", "iad1", "sfo1"],
  "headers": [{ "source": "/assets/(.*)", "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }] }]
}`,I={name:`api/orders`,runtime:`nodejs22.x`,memory:1024,maxDuration:30,regions:[`fra1`,`iad1`],env:{DATABASE_URL:`•••••`,STRIPE_KEY:`•••••`,LOG_LEVEL:`info`}};function L(){return(0,E.jsxs)(`div`,{className:`flex flex-col gap-4 text-[13px]`,children:[(0,E.jsxs)(`header`,{className:`flex flex-wrap items-center gap-3`,children:[(0,E.jsx)(`div`,{className:`flex size-9 items-center justify-center rounded-lg border bg-muted`,children:(0,E.jsx)(o,{className:`size-4`})}),(0,E.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,E.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,E.jsx)(`h3`,{className:`text-[15px] font-semibold`,children:`acme-web-a1c9e07`}),(0,E.jsx)(x,{tone:`success`,dot:!0,children:`Ready`}),(0,E.jsx)(x,{tone:`accent`,variant:`outline`,children:`Current`})]}),(0,E.jsx)(`p`,{className:`text-muted-foreground`,children:`Fix checkout redirect after 3-D Secure on Safari`})]}),(0,E.jsx)(y,{people:k.slice(0,6),max:4,after:(0,E.jsx)(`span`,{className:`text-[12px] text-muted-foreground`,children:`watching`})}),(0,E.jsx)(w,{content:`Redeploy`,shortcut:`Mod+Shift+R`,children:(0,E.jsx)(p,{size:`sm`,variant:`outline`,children:`Redeploy`})}),(0,E.jsx)(w,{content:`Open the live site`,shortcut:`g o`,children:(0,E.jsx)(p,{size:`sm`,children:`Visit`})})]}),(0,E.jsxs)(t,{children:[(0,E.jsx)(e,{label:`Requests · 24 h`,value:`1.28M`,current:1.28,previous:1.11,series:A(21)}),(0,E.jsx)(e,{label:`p95 latency`,value:`182 ms`,current:182,previous:214,invert:!0,series:A(13,24,240,-2)}),(0,E.jsx)(e,{label:`Error rate`,value:`0.04%`,current:.04,previous:.09,invert:!0,series:A(17,24,.1,-.002)}),(0,E.jsx)(e,{label:`Build cache`,value:`94%`,progress:.94,target:`of files reused`})]}),(0,E.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_18rem]`,children:[(0,E.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-3`,children:[(0,E.jsx)(_,{layout:`grid`,columns:3,items:M,className:`rounded-lg border bg-card p-3`}),(0,E.jsx)(S,{label:`Deployment`,tabs:[{value:`logs`,label:`Build logs`,icon:(0,E.jsx)(u,{}),content:(0,E.jsx)(m,{files:[{name:`build.log`,language:`text`,code:P,highlight:`5`},{name:`vercel.json`,code:F}]})},{value:`fn`,label:`Functions`,icon:(0,E.jsx)(n,{}),count:41,content:(0,E.jsx)(h,{value:I,rootName:`api/orders`,defaultExpandDepth:1})}]})]}),(0,E.jsxs)(`aside`,{className:`rounded-lg border bg-card p-3`,children:[(0,E.jsx)(`h4`,{className:`mb-2 text-[12px] font-medium tracking-wide text-muted-foreground uppercase`,children:`Activity`}),(0,E.jsx)(g,{events:N,now:D,density:`compact`})]})]})]})}var R=`import { CheckCircle2, GitBranch, GitCommit, Globe, Hammer, Rocket, ShieldCheck, Timer } from "lucide-react"
import { AvatarStack, CodeTabs, DescriptionList, DisplayTabs, Hint, JsonViewer, KpiStrip, KpiTile, PersonLabel, PreviewCard, StatusBadge, TagList, Timeline, type PersonLike, type Presence } from "@kitora/display"
import { Button } from "@kitora/ui/button"

/** The gallery's fixed clock: every relative time is measured from here. */
const DEMO_NOW = new Date("2026-10-15T14:30:00Z")

/** \`minutes\` before {@link DEMO_NOW}. */
const minutesAgo = (minutes: number) => new Date(DEMO_NOW.getTime() - minutes * 60_000)

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

/** A deterministic series of \`n\` points around \`base\` with a drift, for sparklines. */
function series(seed: number, n = 24, base = 100, drift = 1.5): number[] {
  const out: number[] = []
  let value = base
  let s = seed
  for (let i = 0; i < n; i += 1) {
    s = (s * 9301 + 49297) % 233280
    value = Math.max(0, value + drift + ((s / 233280) - 0.5) * base * 0.12)
    out.push(Math.round(value * 10) / 10)
  }
  return out
}

const AUTHOR = TEAM[5] ?? { name: "Hedy Lamarr", role: "Frontend engineer" }

const FACTS = [
  { term: "Status", value: <StatusBadge tone="success" dot>Ready</StatusBadge> },
  { term: "Environment", value: "Production" },
  { term: "Branch", value: <span className="inline-flex items-center gap-1"><GitBranch className="size-3.5 text-muted-foreground" />main</span> },
  { term: "Commit", value: "a1c9e07", mono: true, copy: "a1c9e07c3f81b2d" },
  { term: "Duration", value: "1 min 52 s" },
  { term: "Region", value: "fra1 · iad1 · sfo1" },
  {
    term: "Author",
    value: (
      <PreviewCard content={<PersonLabel person={AUTHOR} secondary={AUTHOR.role} size="lg" />}>
        <a href="#author" className="font-medium underline decoration-dotted underline-offset-2">{AUTHOR.name}</a>
      </PreviewCard>
    ),
  },
  { term: "Domains", value: "acme.dev, www.acme.dev", wide: true },
]

const EVENTS = [
  { id: "live", title: "Promoted to production", icon: <Rocket />, tone: "success" as const, time: minutesAgo(3), body: "Aliased acme.dev and www.acme.dev" },
  { id: "checks", title: "Checks passed", icon: <ShieldCheck />, tone: "info" as const, time: minutesAgo(5), body: <TagList tags={[{ id: "e2e", label: "e2e · 48", color: "#10b981" }, { id: "lint", label: "lint", color: "#10b981" }, { id: "types", label: "types", color: "#10b981" }]} /> },
  { id: "build", title: "Build finished", icon: <Hammer />, time: minutesAgo(6), body: "312 static pages, 41 functions, 2.4 MB" },
  { id: "push", title: "pushed a1c9e07 to main", icon: <GitCommit />, time: minutesAgo(8), actor: AUTHOR.name },
]

const LOG = \`14:21:03.118  Cloning github.com/acme/web (branch: main, commit: a1c9e07)
14:21:04.902  Restored build cache from previous deployment
14:21:05.440  Running "pnpm install --frozen-lockfile"
14:21:19.775  Running "pnpm build"
14:22:31.006  warn  Large chunk: assets/editor-9f2a.js is 612 kB after minification
14:22:48.330  Generated 312 static pages
14:22:55.019  Deployment completed\`

const CONFIG = \`{
  "framework": "vite",
  "buildCommand": "pnpm build",
  "regions": ["fra1", "iad1", "sfo1"],
  "headers": [{ "source": "/assets/(.*)", "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }] }]
}\`

const FUNCTION = {
  name: "api/orders",
  runtime: "nodejs22.x",
  memory: 1024,
  maxDuration: 30,
  regions: ["fra1", "iad1"],
  env: { DATABASE_URL: "•••••", STRIPE_KEY: "•••••", LOG_LEVEL: "info" },
}

/** A deployment detail page made only of display-kit parts: facts, KPIs, a timeline, logs and config in file tabs, a JSON inspector. */
export function DeploymentOverview() {
  return (
    <div className="flex flex-col gap-4 text-[13px]">
      <header className="flex flex-wrap items-center gap-3">
        <div className="flex size-9 items-center justify-center rounded-lg border bg-muted"><Globe className="size-4" /></div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-[15px] font-semibold">acme-web-a1c9e07</h3>
            <StatusBadge tone="success" dot>Ready</StatusBadge>
            <StatusBadge tone="accent" variant="outline">Current</StatusBadge>
          </div>
          <p className="text-muted-foreground">Fix checkout redirect after 3-D Secure on Safari</p>
        </div>
        <AvatarStack people={TEAM.slice(0, 6)} max={4} after={<span className="text-[12px] text-muted-foreground">watching</span>} />
        <Hint content="Redeploy" shortcut="Mod+Shift+R">
          <Button size="sm" variant="outline">Redeploy</Button>
        </Hint>
        <Hint content="Open the live site" shortcut="g o">
          <Button size="sm">Visit</Button>
        </Hint>
      </header>

      <KpiStrip>
        <KpiTile label="Requests · 24 h" value="1.28M" current={1.28} previous={1.11} series={series(21)} />
        <KpiTile label="p95 latency" value="182 ms" current={182} previous={214} invert series={series(13, 24, 240, -2)} />
        <KpiTile label="Error rate" value="0.04%" current={0.04} previous={0.09} invert series={series(17, 24, 0.1, -0.002)} />
        <KpiTile label="Build cache" value="94%" progress={0.94} target="of files reused" />
      </KpiStrip>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="flex min-w-0 flex-col gap-3">
          <DescriptionList layout="grid" columns={3} items={FACTS} className="rounded-lg border bg-card p-3" />
          <DisplayTabs
            label="Deployment"
            tabs={[
              { value: "logs", label: "Build logs", icon: <Timer />, content: <CodeTabs files={[{ name: "build.log", language: "text", code: LOG, highlight: "5" }, { name: "vercel.json", code: CONFIG }]} /> },
              { value: "fn", label: "Functions", icon: <CheckCircle2 />, count: 41, content: <JsonViewer value={FUNCTION} rootName="api/orders" defaultExpandDepth={1} /> },
            ]}
          />
        </div>
        <aside className="rounded-lg border bg-card p-3">
          <h4 className="mb-2 text-[12px] font-medium tracking-wide text-muted-foreground uppercase">Activity</h4>
          <Timeline events={EVENTS} now={DEMO_NOW} density="compact" />
        </aside>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>d(()=>import(`./overview-CNAxz_MF.js`),[]));var z=[{name:`Code`,what:"CodeBlock, CodeTabs, InlineCode, CopyButton; a built-in tokenizer for ts/tsx/js/jsx, json, css, html, bash, python, go, rust, sql, yaml, markdown and diff, Shiki as the exact engine (the `/shiki` entry below), or bring your own."},{name:`Data`,what:`DescriptionList (inline, stacked, grid), JsonViewer (fold, search, copy path as JS / JSON Pointer / jq, tree keys), Timeline (icons, tones, groups, relative times).`},{name:`Metrics`,what:"StatCard, StatGrid, KpiTile, KpiStrip, Sparkline (the charts kit's sparkline with a trend-picked tone), TrendBadge; `invert` for metrics where down is good."},{name:`People and labels`,what:`PersonAvatar, AvatarStack (optional colour ring per person), PresenceDot, PersonLabel, PersonCard (a full-width person row: avatar, name, secondary line, trailing slot, optionally a button), StatusBadge, StatusDot (general status in the badge tones, pulse, sizes), CountBadge, Tag, TagList.`},{name:`Formatters`,what:"FormatNumber (decimal, currency, percent, unit, compact), FormatBytes (binary KiB or decimal kB), FormatDate (a `<time dateTime>`), RelativeTime (live: ticks every second, minute or hour by distance; SSR-safe). All read the formatter adapter; each takes its own `locale`."},{name:`Surfaces`,what:`Carousel (scroll-snap, keys, loop, autoplay), DisplayAccordion, DisplayTabs (underline, pills, segmented, enclosed), Hint, InfoHint, PreviewCard, Kbd (from the keyboard kit), ZoomImage and ImageGallery (grid, mosaic or masonry, on the overlay kit's Lightbox), and Masonry with MasonryItem (mixed heights packed into columns, the DOM and Tab order kept in source order).`},{name:`Compound parts`,what:"Every stateful preset is built only from public parts you can recompose: CodeBlock.Root / Header / Title / Language / WrapToggle / Copy / Body / Line, JsonViewer.Root / Toolbar / Search / MatchCount / Tree / Row, Carousel.Root / Viewport / Track / Prev / Next / Dots / PlayToggle, Timeline.Root / Group / Item / Dot / Content / Time, StatCard.Root / Label / Value / Footnote, StatusDot.Root / Indicator / Label, DescriptionList.Root / Item / Term / Details. Presets take `className` plus `classNames` per part; state is controlled or uncontrolled."},{name:`Adapters`,what:`DisplayProvider swaps the highlighter, the clipboard, the number, byte, date and time formatters and the avatar palette for everything below it; the defaults are the built-in tokenizer, the Clipboard API, Intl and a hue per name.`},{name:`/core`,what:`Framework-free, no DOM: highlightLines, parseLineRanges, the JSON model (flattenJson, searchJson, formatJsonPath), trendOf, formatNumber, formatBytes, formatDate, formatRelative, relativeTickMs, initials, splitOverflow, pageAt, groupConsecutive, masonryLayout and resolveMasonryColumns, and the adapter interfaces with their pure defaults.`},{name:`/dom and /react`,what:`/dom: navigatorClipboard, carousel scrolling and measuring, reduced motion. /react: DisplayProvider, HighlighterProvider, useHighlight, useControllableState, useRelativeClock, useCopy, and the markup-free useCodeBlock, useJsonTree and useCarousel for your own markup.`},{name:`/shiki`,what:`shikiHighlighter(): Shiki behind the highlighting seam, from shiki/core with the JavaScript regex engine (no WASM), each grammar a lazy chunk; blocks show the built-in colours until their grammar loads, then exact, with the same lines. shiki is an optional peer.`}];function B(){return(0,E.jsxs)(`div`,{children:[(0,E.jsx)(r,{title:`Display kit`,children:'The parts a power-user app shows data with. Hover the commit for copy, the author for a hover card, the avatars for names and the buttons for their shortcuts; switch to Functions to search the JSON; every relative time has its absolute one on hover. Under `dir="rtl"` the parts mirror while code and JSON stay left to right (Basics: surfaces has a right-to-left demo).'}),(0,E.jsx)(T,{n:1,title:`A deployment detail page`,blurb:`Header with badges, an avatar stack and hinted actions; a KPI strip; a description grid; build logs and config in file tabs; a JSON inspector; an activity timeline.`,code:R,children:(0,E.jsx)(L,{})}),(0,E.jsx)(T,{n:2,title:`What is in the kit`,blurb:"Everything comes from the barrel, `@kitora/display`; the lower layers are also their own entries: `/core`, `/dom`, `/react`.",children:(0,E.jsx)(`table`,{className:`w-full text-[13px]`,children:(0,E.jsx)(`tbody`,{children:z.map(e=>(0,E.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,E.jsx)(`td`,{className:`py-1.5 pr-3 align-top font-medium whitespace-nowrap`,children:e.name}),(0,E.jsx)(`td`,{className:`py-1.5 text-muted-foreground`,children:e.what})]},e.name))})})})]})}export{B as component};