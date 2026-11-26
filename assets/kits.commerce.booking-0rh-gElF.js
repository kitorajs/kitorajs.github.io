import{n as e,r as t,t as n}from"./booking-BmdlciYL.js";import{s as r}from"./kit-docs-DpYhPoxM.js";import{Cc as i,Ic as a}from"./index-q72zUtm9.js";import{r as o}from"./fake-CqA2cLLP.js";import"./kit-gallery-Atvibnty.js";import{t as s}from"./example-B8EaWveR.js";import{t as c}from"./-kits.commerce.shared-B8GC_PZn.js";var l=a(),u=o(),d=(0,l.jsx)(`div`,{"aria-hidden":!0,className:`grid size-10 place-items-center rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 text-[14px] font-semibold text-white`,children:`MJ`});function f(){return(0,l.jsx)(e,{adapter:u,durations:[15,30,60],defaultDuration:30,rules:{minNoticeMinutes:120,bufferMinutes:10,horizonDays:60},groupedSlots:!0,host:{name:`Maya Jensen`,title:`Product demo`,avatar:d,location:`Video call`,description:`A walkthrough of the workspace, tailored to your team. Bring your questions.`}})}var p=`import { BookingWidget, fakeBooking } from "@kitora/commerce"

const adapter = fakeBooking()
const AVATAR = <div aria-hidden className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 text-[14px] font-semibold text-white">MJ</div>

/** A Calendly-style booking page: the host works in New York; times show in your zone (switch it below the calendar). */
export function BookingWidgetDemo() {
  return (
    <BookingWidget
      adapter={adapter}
      durations={[15, 30, 60]}
      defaultDuration={30}
      rules={{ minNoticeMinutes: 120, bufferMinutes: 10, horizonDays: 60 }}
      groupedSlots
      host={{ name: "Maya Jensen", title: "Product demo", avatar: AVATAR, location: "Video call", description: "A walkthrough of the workspace, tailored to your team. Bring your questions." }}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(p,()=>i(()=>import(`./booking-widget-LtEOY4eW.js`),[]));var m=o();function h(){let e=t({adapter:m,durations:[20,40],defaultTimeZone:`Europe/London`,rules:{minNoticeMinutes:60}});return(0,l.jsxs)(n.Root,{booking:e,className:`flex max-w-xl flex-col gap-3 rounded-xl border bg-card p-3`,children:[(0,l.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2`,children:[(0,l.jsx)(n.Durations,{}),(0,l.jsx)(n.TimeZone,{className:`w-60`})]}),e.booking?(0,l.jsx)(n.Confirmation,{title:`Booked`}):(0,l.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 sm:grid-cols-2`,children:[(0,l.jsx)(n.Calendar,{}),(0,l.jsx)(`div`,{className:`flex max-h-80 flex-col`,children:e.slot?(0,l.jsx)(n.Form,{submitLabel:`Confirm`}):(0,l.jsx)(n.Slots,{grouped:!0})})]})]})}var g=`import { Booking, fakeBooking, useBooking } from "@kitora/commerce"

const adapter = fakeBooking()

/** A compact scheduler rebuilt from the parts: durations and zone in a toolbar, the calendar and a grouped two-column slot list. */
export function BookingFromParts() {
  const booking = useBooking({ adapter, durations: [20, 40], defaultTimeZone: "Europe/London", rules: { minNoticeMinutes: 60 } })
  return (
    <Booking.Root booking={booking} className="flex max-w-xl flex-col gap-3 rounded-xl border bg-card p-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Booking.Durations />
        <Booking.TimeZone className="w-60" />
      </div>
      {booking.booking ? (
        <Booking.Confirmation title="Booked" />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Booking.Calendar />
          <div className="flex max-h-80 flex-col">{booking.slot ? <Booking.Form submitLabel="Confirm" /> : <Booking.Slots grouped />}</div>
        </div>
      )}
    </Booking.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>i(()=>import(`./booking-parts-BP4Vlzm4.js`),[]));function _(){return(0,l.jsxs)(`div`,{children:[(0,l.jsx)(r,{title:`Booking widget`,children:`A booking page in the Calendly shape, then a different scheduler from the same parts.`}),(0,l.jsx)(s,{n:1,title:`A booking page`,blurb:`Durations, a month with available days, your time zone, morning / afternoon / evening slots, the details form and the confirmation. Some slots are already taken.`,code:p,children:(0,l.jsx)(c,{testId:`booking-widget`,children:(0,l.jsx)(f,{})})}),(0,l.jsx)(s,{n:2,title:`Rebuilt from parts`,blurb:"`Booking.Durations`, `TimeZone`, `Calendar`, `Slots`, `Form` and `Confirmation` in a compact layout, pinned to London time.",code:g,children:(0,l.jsx)(c,{testId:`booking-parts`,children:(0,l.jsx)(h,{})})})]})}export{_ as component};