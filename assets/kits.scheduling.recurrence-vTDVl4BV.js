import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{g as n,h as r,m as i,p as a}from"./shared-C2_C6sya.js";import{Bc as o,Cc as s,Ic as c,Uo as l,Wo as u,hi as d}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as f}from"./example-CZLJLtIC.js";import{a as p,c as m,g as h,t as g}from"./-kits.scheduling.shared-DDgpSEi-.js";import{t as _}from"./month-BQ8Tvzir.js";var v=e(o(),1),y=c(),b=[{label:`Weekdays`,rule:`FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR`},{label:`Every 2 weeks Tue/Thu`,rule:`FREQ=WEEKLY;INTERVAL=2;BYDAY=TU,TH`},{label:`Last Friday`,rule:`FREQ=MONTHLY;BYDAY=-1FR`},{label:`2nd Monday`,rule:`FREQ=MONTHLY;BYDAY=2MO`},{label:`Last workday`,rule:`FREQ=MONTHLY;BYDAY=MO,TU,WE,TH,FR;BYSETPOS=-1`},{label:`15th, 10 times`,rule:`FREQ=MONTHLY;BYMONTHDAY=15;COUNT=10`},{label:`Every 3 days`,rule:`FREQ=DAILY;INTERVAL=3`}];function x(){let e=u(),t=p(e);return(0,y.jsx)(S,{today:t,timeZone:e},`${t.getTime()} ${e}`)}function S({today:e,timeZone:t}){let o=l(),[s,c]=(0,v.useState)(b[0].rule),[u,f]=(0,v.useState)(e),p=(0,v.useMemo)(()=>n(s),[s]),g=(0,v.useMemo)(()=>new Date(e.getFullYear(),e.getMonth(),e.getDate(),10,0),[e]),x=(0,v.useMemo)(()=>p?i(p,g,{before:h(g,24)}).slice(0,12):[],[p,g]),S=(0,v.useMemo)(()=>{let e=m(g,t);return p?[{id:`r`,title:`Repeats`,start:e,end:new Date(e.getTime()+36e5),rrule:s,color:`violet`}]:[]},[p,g,s,t]);return(0,y.jsxs)(`div`,{className:`flex h-full flex-col text-[13px] md:flex-row`,children:[(0,y.jsxs)(`div`,{className:`flex w-full shrink-0 flex-col gap-2 border-b p-3 md:w-72 md:border-r md:border-b-0`,children:[(0,y.jsx)(`label`,{className:`text-[11px] font-semibold tracking-wide text-muted-foreground uppercase`,htmlFor:`rrule-input`,children:`RRULE`}),(0,y.jsx)(`input`,{id:`rrule-input`,spellCheck:!1,className:d(`h-7 rounded-md border bg-background px-2 font-mono text-[12px]`,!p&&`border-rose-500`),value:s,onChange:e=>c(e.target.value)}),(0,y.jsx)(`div`,{className:`flex flex-wrap gap-1`,children:b.map(e=>(0,y.jsx)(`button`,{type:`button`,onClick:()=>c(e.rule),className:d(`h-6 rounded-md border px-1.5 text-[11px] hover:bg-muted`,s===e.rule&&`border-primary bg-primary/10 text-primary`),children:e.label},e.label))}),p?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`div`,{className:`font-medium`,children:a(p)}),(0,y.jsx)(`div`,{className:`font-mono text-[11px] text-muted-foreground`,children:r(p)}),p.unsupported?(0,y.jsxs)(`div`,{className:`rounded-md bg-amber-500/10 px-2 py-1 text-[12px] text-amber-700 dark:text-amber-300`,children:[`Ignored: `,p.unsupported.join(`, `)]}):null,(0,y.jsxs)(`ol`,{className:`mt-1 space-y-0.5 overflow-y-auto tabular-nums`,"aria-label":`Next occurrences`,children:[x.map((e,t)=>(0,y.jsxs)(`li`,{className:`flex gap-2`,children:[(0,y.jsx)(`span`,{className:`w-5 text-right text-muted-foreground`,children:t+1}),new Intl.DateTimeFormat(o,{weekday:`short`,month:`short`,day:`numeric`,year:`numeric`}).format(e)]},e.getTime())),x.length===0?(0,y.jsx)(`li`,{className:`text-muted-foreground`,children:`No occurrences in the next two years.`}):null]})]}):(0,y.jsx)(`div`,{className:`text-[12px] text-rose-700 dark:text-rose-400`,children:`Not a rule: FREQ must be DAILY, WEEKLY, MONTHLY or YEARLY.`})]}),(0,y.jsxs)(`div`,{className:`flex min-h-0 min-w-0 flex-1 flex-col`,children:[(0,y.jsxs)(`div`,{className:`flex h-9 shrink-0 items-center gap-2 border-b px-2`,children:[(0,y.jsx)(`button`,{type:`button`,className:`h-7 rounded-md border px-2 text-[12px] hover:bg-muted`,onClick:()=>f(h(u,-1)),"aria-label":`Previous month`,children:`‹`}),(0,y.jsx)(`button`,{type:`button`,className:`h-7 rounded-md border px-2 text-[12px] hover:bg-muted`,onClick:()=>f(h(u,1)),"aria-label":`Next month`,children:`›`}),(0,y.jsx)(`span`,{className:`font-semibold`,children:new Intl.DateTimeFormat(o,{month:`long`,year:`numeric`}).format(u)})]}),(0,y.jsx)(`div`,{className:`min-h-0 flex-1`,children:(0,y.jsx)(_,{events:S,date:u,maxLanes:2})})]})]})}var C=`import { useMemo, useState } from "react"
import { useDefaultLocale, useDefaultTimeZone } from "@kitora/primitives/react"
import { addMonths, describeRRule, expandRRule, formatRRule, fromZoned, MonthView, parseRRule, useTodayDate, type CalendarEvent } from "@kitora/scheduling"
import { cn } from "@kitora/ui/utils"

const PRESETS = [
  { label: "Weekdays", rule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
  { label: "Every 2 weeks Tue/Thu", rule: "FREQ=WEEKLY;INTERVAL=2;BYDAY=TU,TH" },
  { label: "Last Friday", rule: "FREQ=MONTHLY;BYDAY=-1FR" },
  { label: "2nd Monday", rule: "FREQ=MONTHLY;BYDAY=2MO" },
  { label: "Last workday", rule: "FREQ=MONTHLY;BYDAY=MO,TU,WE,TH,FR;BYSETPOS=-1" },
  { label: "15th, 10 times", rule: "FREQ=MONTHLY;BYMONTHDAY=15;COUNT=10" },
  { label: "Every 3 days", rule: "FREQ=DAILY;INTERVAL=3" },
] as const

// Type an RRULE (or pick a preset): the kit parses it, describes it in words, lists the next
// occurrences and draws them on a month. Parts the kit does not support are named, not guessed.
export function RRuleLab() {
  // keyed on today: a prerendered page starts from the build's today, then from the visitor's right after hydration
  const timeZone = useDefaultTimeZone()
  const today = useTodayDate(timeZone)
  return <Lab key={\`\${today.getTime()} \${timeZone}\`} today={today} timeZone={timeZone} />
}

function Lab({ today, timeZone }: { today: Date; timeZone: string }) {
  const locale = useDefaultLocale()
  const [text, setText] = useState<string>(PRESETS[0].rule)
  const [month, setMonth] = useState(today)
  const rule = useMemo(() => parseRRule(text), [text])
  const start = useMemo(() => new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 0), [today])
  const next = useMemo(() => (rule ? expandRRule(rule, start, { before: addMonths(start, 24) }).slice(0, 12) : []), [rule, start])
  // the event as instants in the display zone (10:00 there), the same on a server and in any browser
  const events = useMemo<CalendarEvent[]>(() => {
    const at = fromZoned(start, timeZone)
    return rule ? [{ id: "r", title: "Repeats", start: at, end: new Date(at.getTime() + 3_600_000), rrule: text, color: "violet" }] : []
  }, [rule, start, text, timeZone])
  return (
    <div className="flex h-full flex-col text-[13px] md:flex-row">
      <div className="flex w-full shrink-0 flex-col gap-2 border-b p-3 md:w-72 md:border-r md:border-b-0">
        <label className="text-[11px] font-semibold tracking-wide text-muted-foreground uppercase" htmlFor="rrule-input">RRULE</label>
        <input id="rrule-input" spellCheck={false} className={cn("h-7 rounded-md border bg-background px-2 font-mono text-[12px]", !rule && "border-rose-500")} value={text} onChange={(e) => setText(e.target.value)} />
        <div className="flex flex-wrap gap-1">
          {PRESETS.map((p) => <button key={p.label} type="button" onClick={() => setText(p.rule)} className={cn("h-6 rounded-md border px-1.5 text-[11px] hover:bg-muted", text === p.rule && "border-primary bg-primary/10 text-primary")}>{p.label}</button>)}
        </div>
        {rule ? (
          <>
            <div className="font-medium">{describeRRule(rule)}</div>
            <div className="font-mono text-[11px] text-muted-foreground">{formatRRule(rule)}</div>
            {rule.unsupported ? <div className="rounded-md bg-amber-500/10 px-2 py-1 text-[12px] text-amber-700 dark:text-amber-300">Ignored: {rule.unsupported.join(", ")}</div> : null}
            <ol className="mt-1 space-y-0.5 overflow-y-auto tabular-nums" aria-label="Next occurrences">
              {next.map((d, i) => <li key={d.getTime()} className="flex gap-2"><span className="w-5 text-right text-muted-foreground">{i + 1}</span>{new Intl.DateTimeFormat(locale, { weekday: "short", month: "short", day: "numeric", year: "numeric" }).format(d)}</li>)}
              {next.length === 0 ? <li className="text-muted-foreground">No occurrences in the next two years.</li> : null}
            </ol>
          </>
        ) : <div className="text-[12px] text-rose-700 dark:text-rose-400">Not a rule: FREQ must be DAILY, WEEKLY, MONTHLY or YEARLY.</div>}
      </div>
      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
        <div className="flex h-9 shrink-0 items-center gap-2 border-b px-2">
          <button type="button" className="h-7 rounded-md border px-2 text-[12px] hover:bg-muted" onClick={() => setMonth(addMonths(month, -1))} aria-label="Previous month">‹</button>
          <button type="button" className="h-7 rounded-md border px-2 text-[12px] hover:bg-muted" onClick={() => setMonth(addMonths(month, 1))} aria-label="Next month">›</button>
          <span className="font-semibold">{new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(month)}</span>
        </div>
        <div className="min-h-0 flex-1"><MonthView events={events} date={month} maxLanes={2} /></div>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>s(()=>import(`./rrule-lab-CNyXIndW.js`),[]));function w(){return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(t,{title:`Recurrence lab`,children:`The kit expands RFC 5545 rules itself: FREQ, INTERVAL, COUNT, UNTIL, BYDAY with ordinals, BYMONTHDAY, BYMONTH, BYSETPOS and WKST. Type a rule or pick a preset to read it in words, list the next occurrences and see them on a month.`}),(0,y.jsx)(f,{n:1,title:`RRULE playground`,blurb:`Parse, describe, format and expand; unsupported parts are named instead of guessed.`,code:C,children:(0,y.jsx)(g,{testId:`rrule-lab`,height:500,children:(0,y.jsx)(x,{})})})]})}export{w as component};