import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./chart-column-D5F5MgZG.js";import{s as n}from"./kit-docs-BUovISd0.js";import{t as r}from"./folder-kanban-LoDCdwJ7.js";import{t as i}from"./inbox-CG0KJAIy.js";import{t as a}from"./plus-DS8FiCg5.js";import{t as o}from"./settings-DVlOJsLs.js";import{t as s}from"./user-plus-bAIjDwLE.js";import{Bc as c,Cc as l,Ic as u,hi as d,ti as f}from"./index-B9ukmIN1.js";import{t as p}from"./search-input-EgtTTRGv.js";import"./kit-gallery-Bph7isB2.js";import{t as m}from"./example-BGnSQG2Y.js";import{a as h,o as g}from"./whats-new-V7F1r_yK.js";import{n as _,r as v}from"./checklist-CbN2WA-J.js";import{i as y}from"./target-BGFN9UV-.js";import{r as b,t as x}from"./tour-BNS_Hg8z.js";import{t as S}from"./seen-D1ZjB1he.js";import{i as C}from"./beacon-CbbjpjOB.js";import{t as w}from"./-kits.tour.shared-BVL00bhO.js";var T=e(c(),1),E=u(),D=[{id:`welcome`,title:`Welcome to Acme Projects`,body:`Five quick stops. ← and → move, Escape ends the tour, and it picks up where you left off if you reload.`},{id:`nav`,target:`ov-nav`,title:`Everything lives here`,body:`Projects, your inbox and reports. The count shows unread mentions.`,side:`right`,align:`start`},{id:`search`,target:`ov-search`,title:`Search`,body:`Projects, people and files from one box.`,align:`start`},{id:`new`,target:`ov-new`,title:`Create your first project`,body:`Press New project to continue.`,side:`bottom`,align:`end`,advanceOn:`target-click`},{id:`news`,target:`ov-news`,title:`What's new`,body:`Release notes land here; the dot means something you haven't seen.`,align:`end`},{id:`checklist`,target:`ov-checklist`,title:`Your checklist`,body:`Tasks tick themselves as you go. Dismiss it any time.`,side:`left`,align:`start`}],O=[{id:`tour`,title:`Take the tour`,description:`Two minutes, six stops.`},{id:`project`,title:`Create a project`,description:`Name it anything; you can rename it later.`},{id:`invite`,title:`Invite a teammate`,description:`Projects are better with company.`},{id:`reports`,title:`Open Reports`,optional:!0}],k=[{id:`ov-2026-10-12`,date:`2026-10-12`,tag:`New`,title:`Reports`,body:`Burn-down and cycle time for every project.`},{id:`ov-2026-10-01`,date:`2026-10-01`,tag:`Improved`,title:`Faster search`,body:`Results as you type, across every project.`},{id:`ov-2026-09-18`,date:`2026-09-18`,tag:`Fixed`,title:`Calendar time zones`,body:`Due dates now follow your profile's zone.`}],A=[`Website redesign`,`Mobile app v2`,`Q4 planning`];function j(){let[e,n]=(0,T.useState)(A),[c,l]=(0,T.useState)(`projects`),u=v({id:`overview-checklist`,items:O}),m=b({id:`overview-tour`,steps:D,onComplete:()=>u.complete(`tour`)}),w=g({id:`overview-news`,items:k}),j=S(`overview-hotspots`),M=()=>{n(e=>[...e,`Untitled project ${e.length-A.length+1}`]),u.complete(`project`)},N=()=>{m.reset(),u.reset(),w.reset(),j.reset(),n(A)},P=[{id:`projects`,label:`Projects`,icon:r},{id:`inbox`,label:`Inbox`,icon:i,count:3},{id:`reports`,label:`Reports`,icon:t},{id:`settings`,label:`Settings`,icon:o}];return(0,E.jsxs)(`div`,{className:`flex h-full flex-col text-[13px]`,children:[(0,E.jsxs)(`header`,{className:`flex h-11 shrink-0 items-center gap-2 border-b px-3`,children:[(0,E.jsx)(`span`,{className:`flex size-6 items-center justify-center rounded-md bg-primary text-[11px] font-bold text-primary-foreground`,children:`A`}),(0,E.jsx)(`span`,{className:`font-semibold`,children:`Acme`}),(0,E.jsx)(`div`,{...y(`ov-search`),className:`ml-4 w-64`,children:(0,E.jsx)(p,{"aria-label":`Search`,placeholder:`Search projects…`,containerClassName:`h-7`})}),(0,E.jsx)(`span`,{className:`flex-1`}),(0,E.jsx)(`span`,{...y(`ov-news`),children:(0,E.jsx)(h,{announcements:w})}),(0,E.jsxs)(f,{size:`sm`,variant:`ghost`,onClick:()=>u.complete(`invite`),children:[(0,E.jsx)(s,{}),` Invite`]}),(0,E.jsx)(f,{size:`sm`,variant:`outline`,onClick:()=>m.start(),"data-testid":`ov-start`,children:`Take the tour`})]}),(0,E.jsxs)(`div`,{className:`flex min-h-0 flex-1`,children:[(0,E.jsxs)(`nav`,{...y(`ov-nav`),"aria-label":`Main`,className:`flex w-44 shrink-0 flex-col gap-0.5 border-r p-2`,children:[P.map(e=>(0,E.jsxs)(`div`,{className:`relative`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:()=>{l(e.id),e.id===`reports`&&u.complete(`reports`)},className:d(`flex h-7 w-full items-center gap-2 rounded-md px-2 text-left hover:bg-muted`,c===e.id&&`bg-muted font-medium`),children:[(0,E.jsx)(e.icon,{className:`size-3.5 text-muted-foreground`}),(0,E.jsx)(`span`,{className:`flex-1`,children:e.label}),`count`in e?(0,E.jsx)(`span`,{className:`text-[11px] text-muted-foreground tabular-nums`,children:e.count}):null]}),e.id===`reports`?(0,E.jsx)(`span`,{className:`absolute top-1.5 right-1.5`,children:(0,E.jsx)(C,{id:`reports`,seen:j,side:`right`,align:`start`,title:`New: Reports`,body:`Burn-down and cycle time for every project, updated live.`})}):null]},e.id)),(0,E.jsx)(`span`,{className:`flex-1`}),(0,E.jsx)(f,{size:`xs`,variant:`ghost`,className:`justify-start text-muted-foreground`,onClick:N,children:`Reset demo`})]}),(0,E.jsxs)(`main`,{className:`flex min-w-0 flex-1 flex-col gap-3 p-3`,children:[(0,E.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,E.jsx)(`h1`,{className:`flex-1 text-[15px] font-semibold capitalize`,children:c}),(0,E.jsxs)(f,{size:`sm`,onClick:M,...y(`ov-new`),"data-testid":`ov-new`,children:[(0,E.jsx)(a,{}),` New project`]})]}),(0,E.jsxs)(`table`,{className:`w-full`,children:[(0,E.jsx)(`thead`,{children:(0,E.jsxs)(`tr`,{className:`border-b text-left text-[12px] text-muted-foreground`,children:[(0,E.jsx)(`th`,{className:`py-1.5 font-medium`,children:`Name`}),(0,E.jsx)(`th`,{className:`py-1.5 font-medium`,children:`Owner`}),(0,E.jsx)(`th`,{className:`py-1.5 text-right font-medium`,children:`Tasks`})]})}),(0,E.jsx)(`tbody`,{children:e.map((e,t)=>(0,E.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,E.jsx)(`td`,{className:`py-1.5`,children:e}),(0,E.jsx)(`td`,{className:`py-1.5 text-muted-foreground`,children:[`Dana`,`Lee`,`Priya`][t%3]}),(0,E.jsx)(`td`,{className:`py-1.5 text-right tabular-nums`,children:(t*7+4)%23})]},e))})]})]}),(0,E.jsx)(`aside`,{className:`w-72 shrink-0 border-l p-3`,children:(0,E.jsxs)(`div`,{...y(`ov-checklist`),children:[(0,E.jsx)(_,{checklist:u,manual:!1,renderAction:e=>e.id===`tour`?(0,E.jsx)(f,{size:`xs`,onClick:()=>m.start(),children:`Start the tour`}):e.id===`project`?(0,E.jsx)(f,{size:`xs`,onClick:M,children:`New project`}):e.id===`invite`?(0,E.jsx)(f,{size:`xs`,onClick:()=>u.complete(`invite`),children:`Invite`}):null}),u.state.dismissed?(0,E.jsx)(f,{size:`xs`,variant:`outline`,onClick:u.restore,children:`Show the checklist`}):null]})})]}),(0,E.jsx)(x,{tour:m})]})}var M=`import { useState } from "react"
import { BarChart3, FolderKanban, Inbox, Plus, Settings, UserPlus } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { SearchInput } from "@kitora/ui/search-input"
import { cn } from "@kitora/ui/utils"
import { Hotspot, OnboardingChecklist, ProductTour, tourTarget, useAnnouncements, useChecklist, useSeenSet, useTour, WhatsNew, type Announcement, type ChecklistItem, type ReactTourStep } from "@kitora/tour"

// A small project app wired with the whole kit: a welcome tour (one step asks
// you to press the real button), a getting-started checklist whose tasks tick
// themselves when you do them, a hotspot on a new feature and a what's-new feed.

const STEPS: readonly ReactTourStep[] = [
  { id: "welcome", title: "Welcome to Acme Projects", body: "Five quick stops. ← and → move, Escape ends the tour, and it picks up where you left off if you reload." },
  { id: "nav", target: "ov-nav", title: "Everything lives here", body: "Projects, your inbox and reports. The count shows unread mentions.", side: "right", align: "start" },
  { id: "search", target: "ov-search", title: "Search", body: "Projects, people and files from one box.", align: "start" },
  { id: "new", target: "ov-new", title: "Create your first project", body: "Press New project to continue.", side: "bottom", align: "end", advanceOn: "target-click" },
  { id: "news", target: "ov-news", title: "What's new", body: "Release notes land here; the dot means something you haven't seen.", align: "end" },
  { id: "checklist", target: "ov-checklist", title: "Your checklist", body: "Tasks tick themselves as you go. Dismiss it any time.", side: "left", align: "start" },
]

const TASKS: readonly ChecklistItem[] = [
  { id: "tour", title: "Take the tour", description: "Two minutes, six stops." },
  { id: "project", title: "Create a project", description: "Name it anything; you can rename it later." },
  { id: "invite", title: "Invite a teammate", description: "Projects are better with company." },
  { id: "reports", title: "Open Reports", optional: true },
]

const NEWS: readonly Announcement[] = [
  { id: "ov-2026-10-12", date: "2026-10-12", tag: "New", title: "Reports", body: "Burn-down and cycle time for every project." },
  { id: "ov-2026-10-01", date: "2026-10-01", tag: "Improved", title: "Faster search", body: "Results as you type, across every project." },
  { id: "ov-2026-09-18", date: "2026-09-18", tag: "Fixed", title: "Calendar time zones", body: "Due dates now follow your profile's zone." },
]

const SEED = ["Website redesign", "Mobile app v2", "Q4 planning"]

export function OverviewApp() {
  const [projects, setProjects] = useState<readonly string[]>(SEED)
  const [view, setView] = useState("projects")
  const checklist = useChecklist({ id: "overview-checklist", items: TASKS })
  const tour = useTour({ id: "overview-tour", steps: STEPS, onComplete: () => checklist.complete("tour") })
  const news = useAnnouncements({ id: "overview-news", items: NEWS })
  const hotspots = useSeenSet("overview-hotspots")

  const addProject = () => {
    setProjects((p) => [...p, \`Untitled project \${p.length - SEED.length + 1}\`])
    checklist.complete("project")
  }
  const resetDemo = () => {
    tour.reset()
    checklist.reset()
    news.reset()
    hotspots.reset()
    setProjects(SEED)
  }

  const NAV = [
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "inbox", label: "Inbox", icon: Inbox, count: 3 },
    { id: "reports", label: "Reports", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
  ] as const

  return (
    <div className="flex h-full flex-col text-[13px]">
      <header className="flex h-11 shrink-0 items-center gap-2 border-b px-3">
        <span className="flex size-6 items-center justify-center rounded-md bg-primary text-[11px] font-bold text-primary-foreground">A</span>
        <span className="font-semibold">Acme</span>
        <div {...tourTarget("ov-search")} className="ml-4 w-64">
          <SearchInput aria-label="Search" placeholder="Search projects…" containerClassName="h-7" />
        </div>
        <span className="flex-1" />
        <span {...tourTarget("ov-news")}>
          <WhatsNew announcements={news} />
        </span>
        <Button size="sm" variant="ghost" onClick={() => checklist.complete("invite")}>
          <UserPlus /> Invite
        </Button>
        <Button size="sm" variant="outline" onClick={() => tour.start()} data-testid="ov-start">
          Take the tour
        </Button>
      </header>
      <div className="flex min-h-0 flex-1">
        <nav {...tourTarget("ov-nav")} aria-label="Main" className="flex w-44 shrink-0 flex-col gap-0.5 border-r p-2">
          {NAV.map((item) => (
            <div key={item.id} className="relative">
              <button
                type="button"
                onClick={() => {
                  setView(item.id)
                  if (item.id === "reports") checklist.complete("reports")
                }}
                className={cn("flex h-7 w-full items-center gap-2 rounded-md px-2 text-left hover:bg-muted", view === item.id && "bg-muted font-medium")}
              >
                <item.icon className="size-3.5 text-muted-foreground" />
                <span className="flex-1">{item.label}</span>
                {"count" in item ? <span className="text-[11px] text-muted-foreground tabular-nums">{item.count}</span> : null}
              </button>
              {item.id === "reports" ? (
                <span className="absolute top-1.5 right-1.5">
                  <Hotspot id="reports" seen={hotspots} side="right" align="start" title="New: Reports" body="Burn-down and cycle time for every project, updated live." />
                </span>
              ) : null}
            </div>
          ))}
          <span className="flex-1" />
          <Button size="xs" variant="ghost" className="justify-start text-muted-foreground" onClick={resetDemo}>
            Reset demo
          </Button>
        </nav>
        <main className="flex min-w-0 flex-1 flex-col gap-3 p-3">
          <div className="flex items-center gap-2">
            <h1 className="flex-1 text-[15px] font-semibold capitalize">{view}</h1>
            <Button size="sm" onClick={addProject} {...tourTarget("ov-new")} data-testid="ov-new">
              <Plus /> New project
            </Button>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-[12px] text-muted-foreground">
                <th className="py-1.5 font-medium">Name</th>
                <th className="py-1.5 font-medium">Owner</th>
                <th className="py-1.5 text-right font-medium">Tasks</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((name, i) => (
                <tr key={name} className="border-b last:border-b-0">
                  <td className="py-1.5">{name}</td>
                  <td className="py-1.5 text-muted-foreground">{["Dana", "Lee", "Priya"][i % 3]}</td>
                  <td className="py-1.5 text-right tabular-nums">{(i * 7 + 4) % 23}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
        <aside className="w-72 shrink-0 border-l p-3">
          <div {...tourTarget("ov-checklist")}>
            <OnboardingChecklist
              checklist={checklist}
              manual={false}
              renderAction={(item) =>
                item.id === "tour" ? (
                  <Button size="xs" onClick={() => tour.start()}>
                    Start the tour
                  </Button>
                ) : item.id === "project" ? (
                  <Button size="xs" onClick={addProject}>
                    New project
                  </Button>
                ) : item.id === "invite" ? (
                  <Button size="xs" onClick={() => checklist.complete("invite")}>
                    Invite
                  </Button>
                ) : null
              }
            />
            {checklist.state.dismissed ? (
              <Button size="xs" variant="outline" onClick={checklist.restore}>
                Show the checklist
              </Button>
            ) : null}
          </div>
        </aside>
      </div>
      <ProductTour tour={tour} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>l(()=>import(`./overview-dhZlkEFd.js`),[]));var N=[{name:`core`,what:`Tour reducer (next / back / goTo / skip / complete, conditional steps, progress, resume snapshot), spotlight geometry, checklist reducer and progress, stepper states and click policy (re-exported from feedback), announcement feed, the KeyValueStorage seam. No DOM, no React.`},{name:`dom`,what:`localStorage adapter, target resolver (data-tour or a selector), wait-for-target, live rect observer, scroll into view, reduced motion.`},{name:`react`,what:`useTour (router adapter, target wait, keyboard with ← and → swapped in right-to-left text, persistence), useChecklist, useStepper (re-exported from feedback), useAnnouncements, useSeenSet, useTargetRect; controlled or not. No markup.`},{name:`ui`,what:`Tour.* parts and ProductTour on the overlay kit's Popover, TourSpotlight, Beacon, Hotspot, CoachMark, Checklist.* and OnboardingChecklist, Stepper.* and Steps (re-exported from the feedback kit, where they now live; import them from @kitora/feedback in new code), Feed.* and WhatsNew with AnnouncementList; every preset is built only from its parts and takes a class per part.`}];function P(){return(0,E.jsxs)(`div`,{children:[(0,E.jsx)(n,{title:`Tour kit`,children:`Press Take the tour. One step waits for you to press the real New project button; the checklist ticks its tasks as you do them, the Reports beacon retires once you've read it, and What's new clears its badge when opened. Everything survives a reload; Reset demo in the sidebar starts over.`}),(0,E.jsx)(m,{n:1,title:`A project app with onboarding`,blurb:`Welcome tour with a spotlight, a self-ticking checklist, a hotspot on a new feature and a what's-new feed, all on one page.`,code:M,children:(0,E.jsx)(w,{testId:`overview`,className:`h-[460px] overflow-hidden p-0`,children:(0,E.jsx)(j,{})})}),(0,E.jsx)(m,{n:2,title:`Layers`,blurb:`Each layer is its own entry: @kitora/tour/core, /dom, /react and /ui (the root barrel exports all four). Use only the core, only the hooks with your own markup, or the styled presets.`,children:(0,E.jsx)(`table`,{className:`w-full text-[13px]`,children:(0,E.jsx)(`tbody`,{children:N.map(e=>(0,E.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,E.jsx)(`td`,{className:`py-1.5 pr-3 align-top font-mono text-[12px]`,children:e.name}),(0,E.jsx)(`td`,{className:`py-1.5 text-muted-foreground`,children:e.what})]},e.name))})})})]})}export{P as component};