import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{t as n}from"./lightbulb-C87GLgZ4.js";import{Bc as r,Cc as i,Ic as a,hi as o,ti as s}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as c}from"./example-CZLJLtIC.js";import{i as l}from"./target-BGFN9UV-.js";import{n as u,r as d,t as f}from"./tour-CWMyRUP1.js";import{n as p}from"./spotlight-jnwzSDAk.js";import{t as m}from"./-kits.tour.shared-2PN25Wpc.js";var h=e(r(),1),g=a(),_=[{id:`projects`,target:`cond-projects`,title:`Your projects`,body:`Everything you're a member of.`},{id:`billing`,target:`cond-billing`,title:`Billing`,body:`Plans, invoices and seats. Admins only.`,when:e=>e.role===`admin`},{id:`members`,target:`cond-members`,title:`Members`,body:`Invite people and set their roles. Admins only.`,when:e=>e.role===`admin`},{id:`profile`,target:`cond-profile`,title:`Your profile`,body:`Name, avatar and notification settings.`}],v=[{key:`cond-projects`,label:`Projects`,admin:!1},{key:`cond-billing`,label:`Billing`,admin:!0},{key:`cond-members`,label:`Members`,admin:!0},{key:`cond-profile`,label:`Profile`,admin:!1}];function y(){let[e,t]=(0,h.useState)(`member`),n=d({id:`showcase-conditional`,steps:_,context:{role:e},storage:null});return(0,g.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,g.jsx)(`div`,{className:`flex items-center gap-1 rounded-lg border bg-card p-1`,children:v.filter(t=>!t.admin||e===`admin`).map(e=>(0,g.jsx)(`span`,{...l(e.key),className:o(`rounded-md px-2.5 py-1 text-[13px]`,e.admin&&`text-amber-700 dark:text-amber-400`),children:e.label},e.key))}),(0,g.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,g.jsx)(`div`,{role:`radiogroup`,"aria-label":`Viewer role`,className:`flex gap-1`,children:[`member`,`admin`].map(n=>(0,g.jsx)(s,{size:`xs`,role:`radio`,tabIndex:0,"aria-checked":e===n,variant:e===n?`default`:`outline`,onClick:()=>t(n),children:n},n))}),(0,g.jsxs)(s,{size:`sm`,variant:`outline`,onClick:()=>n.start(),"data-testid":`start-conditional`,children:[`Start as `,e]}),(0,g.jsxs)(`span`,{className:`text-[12px] text-muted-foreground tabular-nums`,children:[n.applicable.length,` steps apply`]})]}),(0,g.jsx)(f,{tour:n,progress:`text`})]})}var b=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { cn } from "@kitora/ui/utils"
import { ProductTour, tourTarget, useTour, type ReactTourStep } from "@kitora/tour"

// Steps with \`when(context)\` show only for the users they apply to. Progress
// counts only those, so a member sees "1 of 2", an admin "1 of 4".
interface Viewer {
  readonly role: "member" | "admin"
}

const STEPS: readonly ReactTourStep<Viewer>[] = [
  { id: "projects", target: "cond-projects", title: "Your projects", body: "Everything you're a member of." },
  { id: "billing", target: "cond-billing", title: "Billing", body: "Plans, invoices and seats. Admins only.", when: (v) => v.role === "admin" },
  { id: "members", target: "cond-members", title: "Members", body: "Invite people and set their roles. Admins only.", when: (v) => v.role === "admin" },
  { id: "profile", target: "cond-profile", title: "Your profile", body: "Name, avatar and notification settings." },
]

const TABS = [
  { key: "cond-projects", label: "Projects", admin: false },
  { key: "cond-billing", label: "Billing", admin: true },
  { key: "cond-members", label: "Members", admin: true },
  { key: "cond-profile", label: "Profile", admin: false },
] as const

export function ConditionalTour() {
  const [role, setRole] = useState<Viewer["role"]>("member")
  const tour = useTour({ id: "showcase-conditional", steps: STEPS, context: { role }, storage: null })
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-1 rounded-lg border bg-card p-1">
        {TABS.filter((t) => !t.admin || role === "admin").map((t) => (
          <span key={t.key} {...tourTarget(t.key)} className={cn("rounded-md px-2.5 py-1 text-[13px]", t.admin && "text-amber-700 dark:text-amber-400")}>
            {t.label}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <div role="radiogroup" aria-label="Viewer role" className="flex gap-1">
          {(["member", "admin"] as const).map((r) => (
            <Button key={r} size="xs" role="radio" tabIndex={0} aria-checked={role === r} variant={role === r ? "default" : "outline"} onClick={() => setRole(r)}>
              {r}
            </Button>
          ))}
        </div>
        <Button size="sm" variant="outline" onClick={() => tour.start()} data-testid="start-conditional">
          Start as {role}
        </Button>
        <span className="text-[12px] text-muted-foreground tabular-nums">{tour.applicable.length} steps apply</span>
      </div>
      <ProductTour tour={tour} progress="text" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>i(()=>import(`./conditional-LySdWKO_.js`),[]));var x=[{id:`board`,target:`cc-board`,title:`Your board`,body:`Columns are statuses. Drag a card to move it along.`,side:`bottom`,align:`start`},{id:`card`,target:`cc-card`,title:`Open a card`,body:`Comments, files and the activity log live inside.`,side:`right`},{id:`add`,target:`cc-add`,title:`Add work`,body:`Press N anywhere to add a card to the first column.`,side:`top`},{id:`done`,target:`cc-done`,title:`Ship it`,body:`Cards in Done are archived after 14 days.`,side:`left`}],S=[{id:`todo`,title:`To do`,cards:[`Pricing page copy`,`Billing emails`]},{id:`doing`,title:`In progress`,cards:[`Onboarding tour`,`Dark mode QA`]},{id:`done`,title:`Done`,cards:[`Usage dashboard`]}];function C(){let e=d({id:`showcase-custom-card`,steps:x,storage:null});return(0,g.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,g.jsx)(`div`,{...l(`cc-board`),className:`grid grid-cols-3 gap-2`,children:S.map(e=>(0,g.jsxs)(`div`,{...e.id===`done`?l(`cc-done`):{},className:`flex flex-col gap-1.5 rounded-lg bg-muted/50 p-2`,children:[(0,g.jsx)(`div`,{className:`px-1 text-[12px] font-medium text-muted-foreground`,children:e.title}),e.cards.map((t,n)=>(0,g.jsx)(`div`,{...e.id===`doing`&&n===0?l(`cc-card`):{},className:`rounded-md border bg-card px-2 py-1.5 text-[13px] shadow-xs`,children:t},t)),e.id===`todo`?(0,g.jsx)(s,{size:`xs`,variant:`ghost`,className:`justify-start text-muted-foreground`,...l(`cc-add`),children:`+ Add card`}):null]},e.id))}),(0,g.jsx)(`div`,{children:(0,g.jsx)(s,{size:`sm`,variant:`outline`,onClick:()=>e.start(),"data-testid":`start-custom`,children:`Start the custom tour`})}),e.running?(0,g.jsxs)(u.Root,{tour:e,messages:{next:`Continue`,done:`Finish`},children:[(0,g.jsx)(u.Spotlight,{classNames:{backdrop:`fill-indigo-950/50`}}),(0,g.jsxs)(u.Popover,{className:`w-72 overflow-hidden`,children:[(0,g.jsx)(`div`,{className:`flex h-16 items-center justify-center bg-gradient-to-br from-indigo-500 to-violet-500 text-white`,children:(0,g.jsx)(n,{className:`size-6`})}),(0,g.jsx)(u.Progress,{variant:`bar`,className:`[&_[data-slot=progress-track]]:h-0.5 [&_[data-slot=progress-track]]:rounded-none`}),(0,g.jsxs)(u.Card,{children:[(0,g.jsxs)(u.Header,{children:[(0,g.jsx)(u.Title,{}),(0,g.jsx)(u.Close,{})]}),(0,g.jsx)(u.Body,{}),(0,g.jsxs)(u.Footer,{children:[(0,g.jsxs)(`span`,{className:`text-[12px] text-muted-foreground tabular-nums`,children:[`Step `,e.progress.current,` of `,e.progress.total]}),(0,g.jsx)(`span`,{className:`flex-1`}),(0,g.jsx)(u.Back,{}),(0,g.jsx)(u.Next,{})]})]})]})]}):null]})}var w=`import { Lightbulb } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { Tour, tourTarget, useTour, type ReactTourStep } from "@kitora/tour"

// \`ProductTour\` rebuilt from the public parts, with a different look: a coloured
// media header, a progress bar, "Step 2 of 4" text and a footer of our own.
const STEPS: readonly ReactTourStep[] = [
  { id: "board", target: "cc-board", title: "Your board", body: "Columns are statuses. Drag a card to move it along.", side: "bottom", align: "start" },
  { id: "card", target: "cc-card", title: "Open a card", body: "Comments, files and the activity log live inside.", side: "right" },
  { id: "add", target: "cc-add", title: "Add work", body: "Press N anywhere to add a card to the first column.", side: "top" },
  { id: "done", target: "cc-done", title: "Ship it", body: "Cards in Done are archived after 14 days.", side: "left" },
]

const COLUMNS = [
  { id: "todo", title: "To do", cards: ["Pricing page copy", "Billing emails"] },
  { id: "doing", title: "In progress", cards: ["Onboarding tour", "Dark mode QA"] },
  { id: "done", title: "Done", cards: ["Usage dashboard"] },
] as const

export function CustomCardTour() {
  const tour = useTour({ id: "showcase-custom-card", steps: STEPS, storage: null })
  return (
    <div className="flex flex-col gap-3">
      <div {...tourTarget("cc-board")} className="grid grid-cols-3 gap-2">
        {COLUMNS.map((col) => (
          <div key={col.id} {...(col.id === "done" ? tourTarget("cc-done") : {})} className="flex flex-col gap-1.5 rounded-lg bg-muted/50 p-2">
            <div className="px-1 text-[12px] font-medium text-muted-foreground">{col.title}</div>
            {col.cards.map((card, i) => (
              <div key={card} {...(col.id === "doing" && i === 0 ? tourTarget("cc-card") : {})} className="rounded-md border bg-card px-2 py-1.5 text-[13px] shadow-xs">
                {card}
              </div>
            ))}
            {col.id === "todo" ? (
              <Button size="xs" variant="ghost" className="justify-start text-muted-foreground" {...tourTarget("cc-add")}>
                + Add card
              </Button>
            ) : null}
          </div>
        ))}
      </div>
      <div>
        <Button size="sm" variant="outline" onClick={() => tour.start()} data-testid="start-custom">
          Start the custom tour
        </Button>
      </div>
      {tour.running ? (
        <Tour.Root tour={tour} messages={{ next: "Continue", done: "Finish" }}>
          <Tour.Spotlight classNames={{ backdrop: "fill-indigo-950/50" }} />
          <Tour.Popover className="w-72 overflow-hidden">
            <div className="flex h-16 items-center justify-center bg-gradient-to-br from-indigo-500 to-violet-500 text-white">
              <Lightbulb className="size-6" />
            </div>
            <Tour.Progress variant="bar" className="[&_[data-slot=progress-track]]:h-0.5 [&_[data-slot=progress-track]]:rounded-none" />
            <Tour.Card>
              <Tour.Header>
                <Tour.Title />
                <Tour.Close />
              </Tour.Header>
              <Tour.Body />
              <Tour.Footer>
                <span className="text-[12px] text-muted-foreground tabular-nums">
                  Step {tour.progress.current} of {tour.progress.total}
                </span>
                <span className="flex-1" />
                <Tour.Back />
                <Tour.Next />
              </Tour.Footer>
            </Tour.Card>
          </Tour.Popover>
        </Tour.Root>
      ) : null}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>i(()=>import(`./custom-card-Dj4NAv4F.js`),[]));var T=[{id:`bold`,target:`hl-bold`,title:`Bold`,body:`⌘B`},{id:`link`,target:`hl-link`,title:`Link`,body:`⌘K, then paste`},{id:`publish`,target:`hl-publish`,title:`Publish`,body:`Ready when you are.`}];function E(){let e=d({id:`showcase-headless`,steps:T,storage:null}),t=p(e.target);return(0,g.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,g.jsxs)(`div`,{className:`flex items-center gap-1 rounded-lg border bg-card p-1`,children:[(0,g.jsx)(s,{size:`sm`,variant:`ghost`,...l(`hl-bold`),children:`B`}),(0,g.jsx)(s,{size:`sm`,variant:`ghost`,...l(`hl-link`),children:`Link`}),(0,g.jsx)(`span`,{className:`flex-1`}),(0,g.jsx)(s,{size:`sm`,...l(`hl-publish`),children:`Publish`})]}),t?(0,g.jsx)(`div`,{"aria-hidden":`true`,className:`pointer-events-none fixed z-40 rounded-md ring-2 ring-amber-500 transition-all duration-200`,style:{left:t.x-3,top:t.y-3,width:t.width+6,height:t.height+6}}):null,(0,g.jsx)(`div`,{className:`flex h-8 items-center gap-2 rounded-md bg-muted/60 px-2 text-[13px]`,"aria-live":`polite`,children:e.step?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`span`,{className:`font-medium`,children:e.step.title}),(0,g.jsx)(`span`,{className:`text-muted-foreground`,children:e.step.body}),(0,g.jsx)(`span`,{className:`flex-1`}),(0,g.jsxs)(`span`,{className:`text-[12px] text-muted-foreground tabular-nums`,children:[e.progress.current,`/`,e.progress.total]}),(0,g.jsx)(s,{size:`xs`,variant:`ghost`,onClick:e.back,disabled:e.progress.isFirst,children:`←`}),(0,g.jsx)(s,{size:`xs`,onClick:e.progress.isLast?e.complete:e.next,children:e.progress.isLast?`Done`:`→`})]}):(0,g.jsx)(s,{size:`xs`,variant:`outline`,onClick:()=>e.start(),"data-testid":`start-headless`,children:`Show me around`})})]})}var D=`import { Button } from "@kitora/ui/button"
import { tourTarget, useTargetRect, useTour, type ReactTourStep } from "@kitora/tour"

// Only the hooks, with markup of our own: no overlay, no spotlight. \`useTour\`
// still brings keyboard, target waiting and scroll; \`useTargetRect\` follows the
// element. Here: an outline ring and a hint bar under the toolbar.
const STEPS: readonly ReactTourStep[] = [
  { id: "bold", target: "hl-bold", title: "Bold", body: "⌘B" },
  { id: "link", target: "hl-link", title: "Link", body: "⌘K, then paste" },
  { id: "publish", target: "hl-publish", title: "Publish", body: "Ready when you are." },
]

export function HeadlessTour() {
  const tour = useTour({ id: "showcase-headless", steps: STEPS, storage: null })
  const rect = useTargetRect(tour.target)
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1 rounded-lg border bg-card p-1">
        <Button size="sm" variant="ghost" {...tourTarget("hl-bold")}>
          B
        </Button>
        <Button size="sm" variant="ghost" {...tourTarget("hl-link")}>
          Link
        </Button>
        <span className="flex-1" />
        <Button size="sm" {...tourTarget("hl-publish")}>
          Publish
        </Button>
      </div>
      {rect ? <div aria-hidden="true" className="pointer-events-none fixed z-40 rounded-md ring-2 ring-amber-500 transition-all duration-200" style={{ left: rect.x - 3, top: rect.y - 3, width: rect.width + 6, height: rect.height + 6 }} /> : null}
      <div className="flex h-8 items-center gap-2 rounded-md bg-muted/60 px-2 text-[13px]" aria-live="polite">
        {tour.step ? (
          <>
            <span className="font-medium">{tour.step.title}</span>
            <span className="text-muted-foreground">{tour.step.body}</span>
            <span className="flex-1" />
            <span className="text-[12px] text-muted-foreground tabular-nums">
              {tour.progress.current}/{tour.progress.total}
            </span>
            <Button size="xs" variant="ghost" onClick={tour.back} disabled={tour.progress.isFirst}>
              ←
            </Button>
            <Button size="xs" onClick={tour.progress.isLast ? tour.complete : tour.next}>
              {tour.progress.isLast ? "Done" : "→"}
            </Button>
          </>
        ) : (
          <Button size="xs" variant="outline" onClick={() => tour.start()} data-testid="start-headless">
            Show me around
          </Button>
        )}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>i(()=>import(`./headless-d3FpnwDL.js`),[]));function O(e){return[{id:`top`,target:`sm-row-2`,title:`Row 2`,body:`Next, a row 40 rows down.`},{id:`far`,target:`sm-row-42`,title:`Row 42`,body:`Scrolled into view for you, smoothly unless you prefer reduced motion.`,side:`top`},{id:`gone`,target:`sm-not-here`,title:`A feature you don't have yet`,body:`Its target isn't on the page, so this card is centred.`,whenMissing:e},{id:`end`,target:`sm-row-5`,title:`Back to the top`,body:`That's it.`}]}var k=Array.from({length:48},(e,t)=>t+1);function A(){let[e,t]=(0,h.useState)(`center`),n=d({id:`showcase-scroll`,steps:O(e),storage:null,targetWaitMs:600});return(0,g.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,g.jsx)(`div`,{tabIndex:0,role:`region`,"aria-label":`Rows`,className:`h-48 overflow-y-auto rounded-lg border bg-card outline-none focus-visible:ring-2 focus-visible:ring-ring`,children:k.map(e=>(0,g.jsxs)(`div`,{...l(`sm-row-${e}`),className:`flex h-7 items-center border-b px-3 text-[13px] tabular-nums last:border-b-0`,children:[`Row `,e]},e))}),(0,g.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,g.jsx)(s,{size:`sm`,variant:`outline`,onClick:()=>n.start(),"data-testid":`start-scroll`,children:`Start`}),(0,g.jsx)(`span`,{className:`text-[12px] text-muted-foreground`,children:`missing target:`}),[`center`,`skip`].map(n=>(0,g.jsx)(s,{size:`xs`,variant:e===n?`default`:`outline`,onClick:()=>t(n),children:n},n)),(0,g.jsxs)(`span`,{className:`text-[12px] text-muted-foreground`,children:[`target: `,n.targetStatus]})]}),(0,g.jsx)(f,{tour:n,progress:`text`})]})}var j=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { ProductTour, tourTarget, useTour, type MissingTargetPolicy, type ReactTourStep } from "@kitora/tour"

// Targets far down a scroll box are scrolled into view before the step shows.
// One step points at an element that is not on the page: after a short wait it
// is either shown centred, without a hole, or skipped.
function steps(missing: MissingTargetPolicy): readonly ReactTourStep[] {
  return [
    { id: "top", target: "sm-row-2", title: "Row 2", body: "Next, a row 40 rows down." },
    { id: "far", target: "sm-row-42", title: "Row 42", body: "Scrolled into view for you, smoothly unless you prefer reduced motion.", side: "top" },
    { id: "gone", target: "sm-not-here", title: "A feature you don't have yet", body: "Its target isn't on the page, so this card is centred.", whenMissing: missing },
    { id: "end", target: "sm-row-5", title: "Back to the top", body: "That's it." },
  ]
}

const ROWS = Array.from({ length: 48 }, (_, i) => i + 1)

export function ScrollAndMissingTour() {
  const [missing, setMissing] = useState<MissingTargetPolicy>("center")
  const tour = useTour({ id: "showcase-scroll", steps: steps(missing), storage: null, targetWaitMs: 600 })
  return (
    <div className="flex flex-col gap-3">
      <div tabIndex={0} role="region" aria-label="Rows" className="h-48 overflow-y-auto rounded-lg border bg-card outline-none focus-visible:ring-2 focus-visible:ring-ring">
        {ROWS.map((n) => (
          <div key={n} {...tourTarget(\`sm-row-\${n}\`)} className="flex h-7 items-center border-b px-3 text-[13px] tabular-nums last:border-b-0">
            Row {n}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" onClick={() => tour.start()} data-testid="start-scroll">
          Start
        </Button>
        <span className="text-[12px] text-muted-foreground">missing target:</span>
        {(["center", "skip"] as const).map((m) => (
          <Button key={m} size="xs" variant={missing === m ? "default" : "outline"} onClick={() => setMissing(m)}>
            {m}
          </Button>
        ))}
        <span className="text-[12px] text-muted-foreground">target: {tour.targetStatus}</span>
      </div>
      <ProductTour tour={tour} progress="text" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>i(()=>import(`./scroll-missing-CAi163ep.js`),[]));function M(){return(0,g.jsxs)(`div`,{children:[(0,g.jsx)(t,{title:`Tours`,children:"`ProductTour` is one arrangement of the public `Tour.*` parts; every piece below is swappable, down to using only the hooks."}),(0,g.jsx)(c,{n:1,title:`A card rebuilt from the parts`,blurb:`Media header, progress bar, our own footer and a tinted spotlight: the same tree ProductTour renders, rearranged.`,code:w,children:(0,g.jsx)(m,{testId:`custom-card`,children:(0,g.jsx)(C,{})})}),(0,g.jsx)(c,{n:2,title:`Conditional steps`,blurb:"Admin-only steps use `when(context)`. Switch the role: progress counts only the steps that apply.",code:b,children:(0,g.jsx)(m,{testId:`conditional`,children:(0,g.jsx)(y,{})})}),(0,g.jsx)(c,{n:3,title:`Scroll into view and missing targets`,blurb:`A target 40 rows down is scrolled to; a target that never appears is centred or skipped.`,code:j,children:(0,g.jsx)(m,{testId:`scroll-missing`,children:(0,g.jsx)(A,{})})}),(0,g.jsx)(c,{n:4,title:`Headless`,blurb:"Only `useTour` and `useTargetRect`: an outline ring and a hint bar, no overlay, keyboard included.",code:D,children:(0,g.jsx)(m,{testId:`headless`,children:(0,g.jsx)(E,{})})})]})}export{M as component};