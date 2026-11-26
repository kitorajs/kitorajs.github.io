import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{Ac as n,Bc as r,Cc as i,Ic as a,hi as o,jc as s,ti as c}from"./index-q72zUtm9.js";import"./kit-gallery-Atvibnty.js";import{t as l}from"./example-B8EaWveR.js";import{i as u}from"./target-BGFN9UV-.js";import{r as d,t as f}from"./tour-wttZrRu3.js";import{t as p}from"./-kits.tour.shared-BTRnoUo-.js";var m=e(r(),1),h=a(),g=[`inbox`,`reports`,`settings`],_=[{id:`inbox`,route:`inbox`,target:`rt-inbox-filter`,title:`Inbox`,body:`Filter by mentions, assigned or everything.`,align:`start`},{id:`reports`,route:`reports`,target:`rt-reports-range`,title:`Reports`,body:`This step lives on another page: the tour navigated here first.`,align:`start`},{id:`settings`,route:`settings`,target:`rt-settings-theme`,title:`Settings`,body:`Theme, language and notifications.`,align:`start`},{id:`back`,route:`inbox`,target:`rt-inbox-new`,title:`And back again`,body:`Back and Next cross pages in both directions.`,side:`left`}];function v(e){return g.some(t=>t===e)}function y(){let e=s({strict:!1}),t=n(),r=`page`in e&&v(e.page)?e.page:`inbox`,i=(0,m.useRef)(r);i.current=r;let a=(0,m.useMemo)(()=>({isAt:e=>i.current===e,navigate:e=>t({to:`.`,search:{page:e},replace:!1})}),[t]),l=d({id:`showcase-routes`,steps:_,router:a,storage:null});return(0,h.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,h.jsxs)(`div`,{className:`overflow-hidden rounded-lg border bg-card`,children:[(0,h.jsxs)(`div`,{className:`flex items-center gap-1 border-b px-2 py-1`,children:[g.map(e=>(0,h.jsx)(c,{size:`xs`,variant:e===r?`secondary`:`ghost`,onClick:()=>void a.navigate(e),className:`capitalize`,children:e},e)),(0,h.jsxs)(`span`,{className:`ml-auto font-mono text-[11px] text-muted-foreground`,children:[`?page=`,r]})]}),(0,h.jsx)(`div`,{className:`h-32 p-3 text-[13px]`,children:r===`inbox`?(0,h.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,h.jsx)(c,{size:`sm`,variant:`outline`,...u(`rt-inbox-filter`),children:`Mentions`}),(0,h.jsx)(`span`,{className:`flex-1 text-muted-foreground`,children:`3 unread`}),(0,h.jsx)(c,{size:`sm`,...u(`rt-inbox-new`),children:`New message`})]}):r===`reports`?(0,h.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,h.jsx)(`span`,{...u(`rt-reports-range`),className:`w-fit rounded-md border px-2 py-1`,children:`Last 30 days`}),(0,h.jsx)(`div`,{className:`flex h-12 items-end gap-1`,children:[30,55,42,70,64,88,52].map((e,t)=>(0,h.jsx)(`span`,{className:`w-6 rounded-sm bg-primary/70`,style:{height:`${e}%`}},t))})]}):(0,h.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,h.jsx)(`span`,{className:`text-muted-foreground`,children:`Theme`}),(0,h.jsxs)(`span`,{...u(`rt-settings-theme`),className:o(`flex gap-1 rounded-md border p-0.5`),children:[(0,h.jsx)(`span`,{className:`rounded px-2 py-0.5`,children:`Light`}),(0,h.jsx)(`span`,{className:`rounded bg-muted px-2 py-0.5`,children:`System`}),(0,h.jsx)(`span`,{className:`rounded px-2 py-0.5`,children:`Dark`})]})]})})]}),(0,h.jsx)(`div`,{children:(0,h.jsx)(c,{size:`sm`,variant:`outline`,onClick:()=>l.start(),"data-testid":`start-routes`,children:`Start the cross-page tour`})}),(0,h.jsx)(f,{tour:l})]})}var b=`import { useMemo, useRef } from "react"
import { useNavigate, useSearch } from "@tanstack/react-router"
import { Button } from "@kitora/ui/button"
import { cn } from "@kitora/ui/utils"
import { ProductTour, tourTarget, useTour, type ReactTourStep, type TourRouter } from "@kitora/tour"

// One tour over three pages. Each step names its \`route\`; the tour asks the
// router adapter to go there, waits for the step's target to render, then shows
// it. The adapter is two functions over the app's own router: here TanStack
// Router and the \`?page=\` search param of this gallery route, so Back and
// Forward in the browser work and the URL changes as the tour moves.
const PAGES = ["inbox", "reports", "settings"] as const
type Page = (typeof PAGES)[number]

const STEPS: readonly ReactTourStep[] = [
  { id: "inbox", route: "inbox", target: "rt-inbox-filter", title: "Inbox", body: "Filter by mentions, assigned or everything.", align: "start" },
  { id: "reports", route: "reports", target: "rt-reports-range", title: "Reports", body: "This step lives on another page: the tour navigated here first.", align: "start" },
  { id: "settings", route: "settings", target: "rt-settings-theme", title: "Settings", body: "Theme, language and notifications.", align: "start" },
  { id: "back", route: "inbox", target: "rt-inbox-new", title: "And back again", body: "Back and Next cross pages in both directions.", side: "left" },
]

function isPage(value: unknown): value is Page {
  return PAGES.some((p) => p === value)
}

export function AcrossRoutesTour() {
  const search = useSearch({ strict: false })
  const navigate = useNavigate()
  const page: Page = "page" in search && isPage(search.page) ? search.page : "inbox"
  const current = useRef(page)
  current.current = page
  const router = useMemo<TourRouter>(
    () => ({
      isAt: (route) => current.current === route,
      navigate: (route) => navigate({ to: ".", search: { page: route }, replace: false }),
    }),
    [navigate],
  )
  const tour = useTour({ id: "showcase-routes", steps: STEPS, router, storage: null })
  return (
    <div className="flex flex-col gap-3">
      <div className="overflow-hidden rounded-lg border bg-card">
        <div className="flex items-center gap-1 border-b px-2 py-1">
          {PAGES.map((p) => (
            <Button key={p} size="xs" variant={p === page ? "secondary" : "ghost"} onClick={() => void router.navigate(p)} className="capitalize">
              {p}
            </Button>
          ))}
          <span className="ml-auto font-mono text-[11px] text-muted-foreground">?page={page}</span>
        </div>
        <div className="h-32 p-3 text-[13px]">
          {page === "inbox" ? (
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline" {...tourTarget("rt-inbox-filter")}>
                Mentions
              </Button>
              <span className="flex-1 text-muted-foreground">3 unread</span>
              <Button size="sm" {...tourTarget("rt-inbox-new")}>
                New message
              </Button>
            </div>
          ) : page === "reports" ? (
            <div className="flex flex-col gap-2">
              <span {...tourTarget("rt-reports-range")} className="w-fit rounded-md border px-2 py-1">
                Last 30 days
              </span>
              <div className="flex h-12 items-end gap-1">
                {[30, 55, 42, 70, 64, 88, 52].map((h, i) => (
                  <span key={i} className="w-6 rounded-sm bg-primary/70" style={{ height: \`\${h}%\` }} />
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Theme</span>
              <span {...tourTarget("rt-settings-theme")} className={cn("flex gap-1 rounded-md border p-0.5")}>
                <span className="rounded px-2 py-0.5">Light</span>
                <span className="rounded bg-muted px-2 py-0.5">System</span>
                <span className="rounded px-2 py-0.5">Dark</span>
              </span>
            </div>
          )}
        </div>
      </div>
      <div>
        <Button size="sm" variant="outline" onClick={() => tour.start()} data-testid="start-routes">
          Start the cross-page tour
        </Button>
      </div>
      <ProductTour tour={tour} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>i(()=>import(`./across-routes-CC-kD8eM.js`),[]));function x(){return(0,h.jsxs)(`div`,{children:[(0,h.jsx)(t,{title:`Across routes`,children:"A step names its `route`. The tour hands it to a `TourRouter` (two functions over your router), waits for the target to render on the new page, then shows the step. No router is imported by the kit."}),(0,h.jsx)(l,{n:1,title:`A tour over three pages`,blurb:`Watch the URL: each step navigates with TanStack Router, and Back walks the pages in reverse.`,code:b,children:(0,h.jsx)(p,{testId:`routes`,children:(0,h.jsx)(y,{})})})]})}export{x as component};