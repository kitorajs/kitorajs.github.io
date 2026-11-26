import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{i as n}from"./stepper-CTT0fdox.js";import{t as r}from"./stepper-CE-MJsIQ.js";import{Bc as i,Cc as a,Ic as o,ti as s}from"./index-B9ukmIN1.js";import"./kit-gallery-Bph7isB2.js";import{t as c}from"./example-BGnSQG2Y.js";import{a as l,o as u,r as d,t as f}from"./whats-new-V7F1r_yK.js";import{n as p,r as m}from"./checklist-CbN2WA-J.js";import{t as h}from"./spotlight-f9YW059U.js";import{a as g}from"./beacon-CbbjpjOB.js";import{t as _}from"./-kits.tour.shared-BVL00bhO.js";var v=o(),y=[{id:`profile`,title:`Complete your profile`,description:`Add a photo and your role so teammates know who you are.`},{id:`invite`,title:`Invite a teammate`,description:`Projects are better with company.`},{id:`project`,title:`Create your first project`},{id:`slack`,title:`Connect Slack`,optional:!0}];function b(){let e=m({id:`basics-checklist`,items:y});return(0,v.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,v.jsx)(p,{checklist:e,className:`w-full max-w-80`,renderAction:t=>(0,v.jsx)(s,{size:`xs`,onClick:()=>e.complete(t.id),children:`Do it`})}),(0,v.jsxs)(`div`,{className:`flex gap-1`,children:[e.state.dismissed?(0,v.jsx)(s,{size:`xs`,variant:`outline`,onClick:e.restore,children:`Show the checklist`}):null,(0,v.jsx)(s,{size:`xs`,variant:`ghost`,onClick:e.reset,children:`Reset`})]})]})}var x=`import { Button } from "@kitora/ui/button"
import { OnboardingChecklist, useChecklist, type ChecklistItem } from "@kitora/tour"

// The checklist is data plus a persisted state. Tick a task by hand, or call
// \`checklist.complete(id)\` when the real thing happens.
const ITEMS: readonly ChecklistItem[] = [
  { id: "profile", title: "Complete your profile", description: "Add a photo and your role so teammates know who you are." },
  { id: "invite", title: "Invite a teammate", description: "Projects are better with company." },
  { id: "project", title: "Create your first project" },
  { id: "slack", title: "Connect Slack", optional: true },
]

export function BasicChecklist() {
  const checklist = useChecklist({ id: "basics-checklist", items: ITEMS })
  return (
    <div className="flex flex-col gap-2">
      <OnboardingChecklist
        checklist={checklist}
        className="w-full max-w-80"
        renderAction={(item) => (
          <Button size="xs" onClick={() => checklist.complete(item.id)}>
            Do it
          </Button>
        )}
      />
      <div className="flex gap-1">
        {checklist.state.dismissed ? (
          <Button size="xs" variant="outline" onClick={checklist.restore}>
            Show the checklist
          </Button>
        ) : null}
        <Button size="xs" variant="ghost" onClick={checklist.reset}>
          Reset
        </Button>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>a(()=>import(`./checklist-SESclbHp.js`),[]));var S=[{title:`Account`,description:`Email and password`},{title:`Workspace`,description:`Name and URL`},{title:`Invite`,description:`Optional`},{title:`Done`}];function C(){let e=r({count:S.length});return(0,v.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,v.jsx)(n,{stepper:e,steps:S}),(0,v.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,v.jsx)(s,{size:`sm`,variant:`outline`,disabled:e.active===0,onClick:e.back,children:`Back`}),(0,v.jsx)(s,{size:`sm`,disabled:e.active===S.length-1,onClick:e.next,children:`Continue`}),(0,v.jsxs)(`span`,{className:`text-[12px] text-muted-foreground tabular-nums`,children:[`step `,e.active+1,` of `,S.length]})]})]})}var w=`import { Button } from "@kitora/ui/button"
import { Steps, useStepper } from "@kitora/tour"

// A stepper is a count, an active index and the states that follow from it.
// Linear navigation: you can click back to any done step, not ahead.
const STEPS = [
  { title: "Account", description: "Email and password" },
  { title: "Workspace", description: "Name and URL" },
  { title: "Invite", description: "Optional" },
  { title: "Done" },
] as const

export function BasicStepper() {
  const stepper = useStepper({ count: STEPS.length })
  return (
    <div className="flex flex-col gap-4">
      <Steps stepper={stepper} steps={STEPS} />
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" disabled={stepper.active === 0} onClick={stepper.back}>
          Back
        </Button>
        <Button size="sm" disabled={stepper.active === STEPS.length - 1} onClick={stepper.next}>
          Continue
        </Button>
        <span className="text-[12px] text-muted-foreground tabular-nums">
          step {stepper.active + 1} of {STEPS.length}
        </span>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>a(()=>import(`./stepper-ABgqMln0.js`),[]));var T=[{title:`Connect repository`,description:`github.com/acme/web`},{title:`Configure build`,description:`Build command failed`},{title:`Environment variables`},{title:`Deploy`}],E=new Set([1]);function D(){return(0,v.jsx)(n,{stepper:r({count:T.length,defaultActive:2,errors:E,navigation:`free`}),steps:T,orientation:`vertical`,className:`w-64`})}var O=`import { Steps, useStepper } from "@kitora/tour"

// The same stepper, vertical, with an error on one step and free navigation.
const STEPS = [
  { title: "Connect repository", description: "github.com/acme/web" },
  { title: "Configure build", description: "Build command failed" },
  { title: "Environment variables" },
  { title: "Deploy" },
] as const

const ERRORS: ReadonlySet<number> = new Set([1])

export function BasicVerticalStepper() {
  const stepper = useStepper({ count: STEPS.length, defaultActive: 2, errors: ERRORS, navigation: "free" })
  return <Steps stepper={stepper} steps={STEPS} orientation="vertical" className="w-64" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>a(()=>import(`./vertical-stepper-gZ_a5N6j.js`),[]));var k=[{id:`2026-10-14-dark`,date:`2026-10-14`,tag:`New`,title:`Dark mode everywhere`,body:`Every screen, every chart, every email preview.`},{id:`2026-10-02-export`,date:`2026-10-02`,tag:`Improved`,title:`Faster exports`,body:`Large exports now stream: a 50k-row CSV starts in under a second.`},{id:`2026-09-20-keys`,date:`2026-09-20`,tag:`New`,title:`Keyboard shortcuts`,body:`Press ? anywhere to see them.`}];function A(){let e=u({id:`basics-whats-new`,items:k});return(0,v.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,v.jsx)(l,{announcements:e,align:`start`}),(0,v.jsx)(s,{size:`xs`,variant:`ghost`,onClick:e.reset,children:`Mark unread`})]})}var j=`import { Button } from "@kitora/ui/button"
import { useAnnouncements, WhatsNew, type Announcement } from "@kitora/tour"

// Announcements are dated data; the seen list is persisted. Opening the feed
// clears the badge.
const ITEMS: readonly Announcement[] = [
  { id: "2026-10-14-dark", date: "2026-10-14", tag: "New", title: "Dark mode everywhere", body: "Every screen, every chart, every email preview." },
  { id: "2026-10-02-export", date: "2026-10-02", tag: "Improved", title: "Faster exports", body: "Large exports now stream: a 50k-row CSV starts in under a second." },
  { id: "2026-09-20-keys", date: "2026-09-20", tag: "New", title: "Keyboard shortcuts", body: "Press ? anywhere to see them." },
]

export function BasicWhatsNew() {
  const announcements = useAnnouncements({ id: "basics-whats-new", items: ITEMS })
  return (
    <div className="flex items-center gap-2">
      <WhatsNew announcements={announcements} align="start" />
      <Button size="xs" variant="ghost" onClick={announcements.reset}>
        Mark unread
      </Button>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>a(()=>import(`./whats-new-C-4zWxgS.js`),[]));var M=[{id:`2026-10-20-search`,date:`2026-10-20`,tag:`New`,title:`Search across projects`,body:`One box, every project you can open.`},{id:`2026-10-08-share`,date:`2026-10-08`,tag:`Improved`,title:`Share links expire`,body:`Pick 1 day, 7 days or never.`}];function N(){let e=u({id:`basics-feed-parts`,items:M});return(0,v.jsxs)(d.Root,{announcements:e,trigger:(0,v.jsx)(d.Trigger,{}),align:`start`,children:[(0,v.jsxs)(d.Header,{children:[(0,v.jsx)(d.Title,{children:`Product updates`}),(0,v.jsx)(d.MarkAllRead,{})]}),(0,v.jsx)(d.List,{renderItem:(e,t)=>(0,v.jsx)(f,{announcement:e,unseen:t,classNames:{title:`font-bold`}})}),(0,v.jsx)(d.Footer,{children:(0,v.jsx)(`a`,{href:`#changelog`,className:`text-[12px] text-primary underline-offset-2 hover:underline`,children:`Full changelog`})})]})}var P=`import { AnnouncementItem, Feed, useAnnouncements, type Announcement } from "@kitora/tour"

const ITEMS: readonly Announcement[] = [
  { id: "2026-10-20-search", date: "2026-10-20", tag: "New", title: "Search across projects", body: "One box, every project you can open." },
  { id: "2026-10-08-share", date: "2026-10-08", tag: "Improved", title: "Share links expire", body: "Pick 1 day, 7 days or never." },
]

/**
 * The what's-new feed composed from \`Feed.*\` parts: the default trigger, a header with a title and
 * "mark all read", each row drawn with \`AnnouncementItem\` (bold title), and a footer link.
 */
export function FeedFromParts() {
  const announcements = useAnnouncements({ id: "basics-feed-parts", items: ITEMS })
  return (
    <Feed.Root announcements={announcements} trigger={<Feed.Trigger />} align="start">
      <Feed.Header>
        <Feed.Title>Product updates</Feed.Title>
        <Feed.MarkAllRead />
      </Feed.Header>
      <Feed.List renderItem={(a, unseen) => <AnnouncementItem announcement={a} unseen={unseen} classNames={{ title: "font-bold" }} />} />
      <Feed.Footer>
        <a href="#changelog" className="text-[12px] text-primary underline-offset-2 hover:underline">
          Full changelog
        </a>
      </Feed.Footer>
    </Feed.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>a(()=>import(`./feed-parts-Div4_SDt.js`),[]));var F=e(i(),1);function I(){let[e,t]=(0,F.useState)(null),[n,r]=(0,F.useState)(!1);return(0,v.jsxs)(`div`,{className:`flex flex-col items-start gap-3`,children:[(0,v.jsx)(s,{size:`sm`,variant:`outline`,onClick:()=>r(!0),"data-testid":`spotlight-open`,children:`Highlight the tip`}),(0,v.jsx)(`div`,{ref:t,className:`w-72 rounded-md border bg-popover text-popover-foreground shadow-sm`,children:(0,v.jsx)(g,{title:`Filters live here`,body:`Narrow the list by owner, status or date. Filters are saved per view.`,action:(0,v.jsx)(s,{size:`xs`,onClick:()=>r(!1),children:`Got it`})})}),n?(0,v.jsx)(h,{target:e,interactive:!0,onBackdropClick:()=>r(!1)}):null]})}var L=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { TipCard, TourSpotlight } from "@kitora/tour"

/**
 * \`TourSpotlight\` dims the page around one element (click the dim to close); the element holds a
 * \`TipCard\`, the inside of a coach mark: title, body and an action. \`interactive\` lets clicks through.
 */
export function SpotlightTip() {
  const [target, setTarget] = useState<HTMLDivElement | null>(null)
  const [on, setOn] = useState(false)
  return (
    <div className="flex flex-col items-start gap-3">
      <Button size="sm" variant="outline" onClick={() => setOn(true)} data-testid="spotlight-open">
        Highlight the tip
      </Button>
      <div ref={setTarget} className="w-72 rounded-md border bg-popover text-popover-foreground shadow-sm">
        <TipCard
          title="Filters live here"
          body="Narrow the list by owner, status or date. Filters are saved per view."
          action={
            <Button size="xs" onClick={() => setOn(false)}>
              Got it
            </Button>
          }
        />
      </div>
      {on ? <TourSpotlight target={target} interactive onBackdropClick={() => setOn(false)} /> : null}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>a(()=>import(`./spotlight-BPuK-S4Z.js`),[]));function R(){return(0,v.jsxs)(`div`,{children:[(0,v.jsx)(t,{title:`Basics: widgets`,children:`The pieces around a tour: a getting-started checklist, a stepper and a what's-new feed. Each is a hook plus a preset.`}),(0,v.jsx)(c,{n:1,title:`Onboarding checklist`,blurb:`Progress, the next task expanded with its action, collapse, dismiss. Saved across reloads.`,code:x,children:(0,v.jsx)(_,{testId:`basic-checklist`,children:(0,v.jsx)(b,{})})}),(0,v.jsx)(c,{n:2,title:`Stepper`,blurb:`Horizontal, linear: click back to a done step, never ahead.`,code:w,children:(0,v.jsx)(_,{testId:`basic-stepper`,children:(0,v.jsx)(C,{})})}),(0,v.jsx)(c,{n:3,title:`Vertical stepper`,blurb:`Error state on one step, free navigation.`,code:O,children:(0,v.jsx)(_,{testId:`basic-vertical`,children:(0,v.jsx)(D,{})})}),(0,v.jsx)(c,{n:4,title:`What's new`,blurb:`An unseen count on the trigger; opening the feed clears it.`,code:j,children:(0,v.jsx)(_,{testId:`basic-whats-new`,children:(0,v.jsx)(A,{})})}),(0,v.jsx)(c,{n:5,title:`What's new from parts`,blurb:"`Feed.Root`, `Feed.Trigger`, `Feed.Header`, `Feed.Title`, `Feed.MarkAllRead`, `Feed.List` and `Feed.Footer`, each row drawn with `AnnouncementItem`.",code:P,children:(0,v.jsx)(_,{testId:`basic-feed-parts`,children:(0,v.jsx)(N,{})})}),(0,v.jsx)(c,{n:6,title:`Spotlight and tip card`,blurb:"`TourSpotlight` dims the page around one element; inside it, a `TipCard` with a title, body and action. Click the dim or Got it to close.",code:L,children:(0,v.jsx)(_,{testId:`basic-spotlight`,children:(0,v.jsx)(I,{})})})]})}export{R as component};