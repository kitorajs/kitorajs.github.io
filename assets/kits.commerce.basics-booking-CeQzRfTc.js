import{r as e,t}from"./booking-1b6l4HU7.js";import{s as n}from"./kit-docs-Cf27Kpa-.js";import{m as r}from"./slots-CZAWbVQo.js";import{Ec as i,Wo as a,ri as o,zc as s}from"./index-BZuUy872.js";import{c,l,r as u,t as d,u as f}from"./fake-Dm1Dt5OA.js";import"./kit-gallery-BBavj2rC.js";import{t as p}from"./example-B67lLz1F.js";import{t as m}from"./-kits.commerce.shared-CXqE4w_z.js";var h=s(),g=u();function _(){let n=e({adapter:g,durations:[30]});return(0,h.jsxs)(t.Root,{booking:n,className:`grid max-w-xl gap-4 sm:grid-cols-[minmax(0,1fr)_160px]`,children:[(0,h.jsx)(t.Calendar,{}),(0,h.jsx)(`div`,{className:`flex max-h-72 flex-col`,children:n.slot?(0,h.jsxs)(`p`,{className:`text-[13px]`,children:[`Picked `,(0,h.jsx)(`span`,{className:`font-semibold`,children:new Date(n.slot.start).toLocaleString()}),`.`,` `,(0,h.jsx)(o,{type:`button`,variant:`link`,size:`xs`,onClick:()=>n.selectSlot(null),children:`Clear`})]}):(0,h.jsx)(t.Slots,{})})]})}var v=`import { Button } from "@kitora/ui/button"
import { Booking, fakeBooking, useBooking } from "@kitora/commerce"

const adapter = fakeBooking()

/** The calendar and the slot list from the parts. Days without times are disabled; arrow keys move between days. */
export function BasicSlotGrid() {
  const booking = useBooking({ adapter, durations: [30] })
  return (
    <Booking.Root booking={booking} className="grid max-w-xl gap-4 sm:grid-cols-[minmax(0,1fr)_160px]">
      <Booking.Calendar />
      <div className="flex max-h-72 flex-col">
        {booking.slot ? (
          <p className="text-[13px]">
            Picked <span className="font-semibold">{new Date(booking.slot.start).toLocaleString()}</span>.{" "}
            <Button type="button" variant="link" size="xs" onClick={() => booking.selectSlot(null)}>Clear</Button>
          </p>
        ) : (
          <Booking.Slots />
        )}
      </div>
    </Booking.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>i(()=>import(`./slot-grid-DwMLUhfh.js`),[]));var y=[`America/Los_Angeles`,`America/New_York`,`Europe/London`,`Asia/Kolkata`,`Asia/Tokyo`];function b(){let e=a(),t=f(e,d.timeZone),n=r({availability:d,viewerDate:t,viewerTimeZone:d.timeZone,rules:{duration:60,step:60},now:e});for(let i=0;i<7&&n.length===0;i++)t=c(t,1),n=r({availability:d,viewerDate:t,viewerTimeZone:d.timeZone,rules:{duration:60,step:60},now:e});let i=(e,t)=>l(e,t,{weekday:`short`,hour:`numeric`,minute:`2-digit`},`en-US`);return(0,h.jsx)(`div`,{tabIndex:0,role:`region`,"aria-label":`One slot in five time zones`,className:`overflow-x-auto outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring`,children:(0,h.jsxs)(`table`,{className:`w-full min-w-[520px] text-[12px]`,children:[(0,h.jsx)(`thead`,{children:(0,h.jsx)(`tr`,{className:`border-b text-left text-muted-foreground`,children:y.map(e=>(0,h.jsx)(`th`,{scope:`col`,className:`py-1.5 pr-3 font-medium`,children:e.split(`/`).pop()?.replaceAll(`_`,` `)},e))})}),(0,h.jsx)(`tbody`,{children:n.slice(0,5).map(e=>(0,h.jsx)(`tr`,{className:`border-b last:border-b-0`,children:y.map(t=>(0,h.jsx)(`td`,{className:`py-1.5 pr-3 tabular-nums`,children:i(e.start,t)},t))},e.id))})]})})}var x=`import { useCurrentTime } from "@kitora/primitives/react"
import { FAKE_AVAILABILITY, addDays, formatInZone, isoDateIn, slotsForDay } from "@kitora/commerce"

const ZONES = ["America/Los_Angeles", "America/New_York", "Europe/London", "Asia/Kolkata", "Asia/Tokyo"] as const

/** Core only, no React state: the host's next weekday in New York, read in five zones. The same instants, different wall clocks. */
export function BasicTimeZones() {
  // the clock in effect: the build's until hydration (so the server HTML matches), then the visitor's
  const now = useCurrentTime()
  let day = isoDateIn(now, FAKE_AVAILABILITY.timeZone)
  let slots = slotsForDay({ availability: FAKE_AVAILABILITY, viewerDate: day, viewerTimeZone: FAKE_AVAILABILITY.timeZone, rules: { duration: 60, step: 60 }, now })
  for (let i = 0; i < 7 && slots.length === 0; i++) {
    day = addDays(day, 1)
    slots = slotsForDay({ availability: FAKE_AVAILABILITY, viewerDate: day, viewerTimeZone: FAKE_AVAILABILITY.timeZone, rules: { duration: 60, step: 60 }, now })
  }
  const time = (t: number, z: string) => formatInZone(t, z, { weekday: "short", hour: "numeric", minute: "2-digit" }, "en-US")
  return (
    <div tabIndex={0} role="region" aria-label="One slot in five time zones" className="overflow-x-auto outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring">
      <table className="w-full min-w-[520px] text-[12px]">
        <thead>
          <tr className="border-b text-left text-muted-foreground">
            {ZONES.map((z) => (
              <th key={z} scope="col" className="py-1.5 pr-3 font-medium">{z.split("/").pop()?.replaceAll("_", " ")}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {slots.slice(0, 5).map((s) => (
            <tr key={s.id} className="border-b last:border-b-0">
              {ZONES.map((z) => (
                <td key={z} className="py-1.5 pr-3 tabular-nums">{time(s.start, z)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>i(()=>import(`./time-zones-BNlVAjNs.js`),[]));function S(){return(0,h.jsxs)(`div`,{children:[(0,h.jsx)(n,{title:`Basics: booking`,children:`Hosts publish weekly hours in their zone; slots are instants, read in the viewer's zone.`}),(0,h.jsx)(p,{n:1,title:`Calendar and slots`,blurb:`Days without times are disabled. Focus a day and use the arrow keys, Page Up and Page Down.`,code:v,children:(0,h.jsx)(m,{testId:`basic-slots`,children:(0,h.jsx)(_,{})})}),(0,h.jsx)(p,{n:2,title:`One slot, five zones`,blurb:`The core alone: the host's next open hours, the same instants in five wall clocks.`,code:x,children:(0,h.jsx)(m,{testId:`basic-zones`,children:(0,h.jsx)(b,{})})})]})}export{S as component};