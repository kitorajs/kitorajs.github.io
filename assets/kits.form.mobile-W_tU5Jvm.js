import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{n,r}from"./time-uJDn_O8M.js";import{Bc as i,Cc as a,Ic as o,hi as s,ni as c}from"./index-9y5uwRd3.js";import{A as l,c as u,n as d,t as f}from"./field-config-62hz5rv-.js";import{a as p,o as m,r as h}from"./fields-3rMiSNLY.js";import{n as g,r as _,t as v}from"./overlay-D2S00zYl.js";import{n as y,t as b}from"./sheet-select-CxKeasOb.js";import{t as x}from"./fields-extra-DjnCI2Jb.js";import{n as S,t as C}from"./date-DkHaI8Bm.js";import{r as w}from"./choice-ZQTH2Ken.js";import{t as T}from"./example-CZLJLtIC.js";import{n as E,o as D,s as O}from"./demos-DilKtWQ6.js";import{o as k}from"./demo-fixtures-DpfwlbH0.js";var A=o(),j=`sticky bottom-0 z-20 -mx-3 border-t border-border bg-background/95 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur supports-[backdrop-filter]:bg-background/80`,M=`md:static md:mx-0 md:border-0 md:bg-transparent md:px-0 md:pt-0 md:pb-0 md:backdrop-blur-none`;function N({children:e,sticky:t=`mobile`,className:n}){return(0,A.jsx)(`div`,{"data-slot":`form-sticky-bar`,"data-sticky":t,className:s(`flex items-center justify-end gap-2`,j,t===`mobile`&&M,n),children:e})}var P=e(i(),1),F={name:``,email:``,phone:``,company:``,role:``,city:``,country:``,website:``,referrer:``,notes:``};function I(){return(0,A.jsx)(`div`,{className:`max-h-[26rem] overflow-y-auto rounded-md border px-3 pt-3`,children:(0,A.jsxs)(u,{form:l({defaultValues:F}),onSubmit:k,children:[(0,A.jsx)(p,{name:`name`,label:`Full name`,required:!0}),(0,A.jsx)(p,{name:`email`,label:`Email`,type:`email`,required:!0}),(0,A.jsx)(p,{name:`phone`,label:`Phone`,type:`tel`}),(0,A.jsx)(p,{name:`company`,label:`Company`}),(0,A.jsx)(p,{name:`role`,label:`Role`}),(0,A.jsx)(p,{name:`city`,label:`City`}),(0,A.jsx)(p,{name:`country`,label:`Country`}),(0,A.jsx)(p,{name:`website`,label:`Website`,type:`url`}),(0,A.jsx)(p,{name:`referrer`,label:`How did you hear about us?`}),(0,A.jsx)(m,{name:`notes`,label:`Anything else?`,rows:3}),(0,A.jsxs)(N,{sticky:`always`,children:[(0,A.jsx)(u.Status,{className:`mr-auto text-[13px]`,invalid:(0,A.jsx)(`span`,{className:`text-destructive`,children:`Fix the highlighted fields.`}),success:()=>(0,A.jsx)(`span`,{className:`text-emerald-700 dark:text-emerald-400`,children:`Sent`})}),(0,A.jsx)(u.Submit,{className:c({size:`sm`,className:`w-fit`}),pendingLabel:`Sending…`,children:`Send application`})]})]})})}var L=`import { buttonVariants } from "@kitora/ui/button"
import { FormStickyBar, TextareaField, TextField } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"
import { mockSave } from "@/kit/form/demo-fixtures"

type Application = {
  name: string
  email: string
  phone: string
  company: string
  role: string
  city: string
  country: string
  website: string
  referrer: string
  notes: string
}

const defaultValues: Application = { name: "", email: "", phone: "", company: "", role: "", city: "", country: "", website: "", referrer: "", notes: "" }

// mockSave is the gallery's stand-in: replace it with your API (POST /applications)
export function ApplicationForm() {
  const form = useForm<Application>({ defaultValues })
  return (
    // a phone-height scroller, so the bar's sticking shows at any viewport width
    <div className="max-h-[26rem] overflow-y-auto rounded-md border px-3 pt-3">
      <Form form={form} onSubmit={mockSave}>
        <TextField name="name" label="Full name" required />
        <TextField name="email" label="Email" type="email" required />
        <TextField name="phone" label="Phone" type="tel" />
        <TextField name="company" label="Company" />
        <TextField name="role" label="Role" />
        <TextField name="city" label="City" />
        <TextField name="country" label="Country" />
        <TextField name="website" label="Website" type="url" />
        <TextField name="referrer" label="How did you hear about us?" />
        <TextareaField name="notes" label="Anything else?" rows={3} />
        {/* sticks to the bottom below md (pure CSS position: sticky), padded by
            env(safe-area-inset-bottom) — add viewport-fit=cover to the viewport meta
            for the iPhone home-indicator inset; an ordinary row from md up.
            sticky="always" pins it at every width (as in this scroller) */}
        <FormStickyBar sticky="always">
          <Form.Status className="mr-auto text-[13px]" invalid={<span className="text-destructive">Fix the highlighted fields.</span>} success={() => <span className="text-emerald-700 dark:text-emerald-400">Sent</span>} />
          <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })} pendingLabel="Sending…">
            Send application
          </Form.Submit>
        </FormStickyBar>
      </Form>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>a(()=>import(`./sticky-C4GCyOSE.js`),[]));var R=[{value:`s`,label:`Small`},{value:`m`,label:`Medium`},{value:`l`,label:`Large`}],z=[{value:`de`,label:`Germany`,text:`Germany`,group:`Europe`},{value:`pt`,label:`Portugal`,text:`Portugal`,group:`Europe`},{value:`in`,label:`India`,text:`India`,group:`Asia`},{value:`jp`,label:`Japan`,text:`Japan`,group:`Asia`}];function B(){let e=l({defaultValues:{note:``}}),t=(0,P.useId)(),n=(0,P.useId)(),[r,i]=(0,P.useState)(void 0),[a,o]=(0,P.useState)(void 0);return(0,A.jsxs)(u,{form:e,children:[(0,A.jsx)(`label`,{htmlFor:t,className:`text-[13px] font-medium`,children:`Size`}),(0,A.jsx)(y,{id:t,value:r,options:R,onChange:i,title:`Size`,placeholder:`Choose a size`}),(0,A.jsx)(`label`,{htmlFor:n,className:`text-[13px] font-medium`,children:`Country`}),(0,A.jsx)(b,{id:n,value:a,options:z,onChange:o,title:`Country`,placeholder:`Choose a country`,searchPlaceholder:`Search countries`,emptyText:`No country matches`}),(0,A.jsxs)(`p`,{className:`text-[12px] text-muted-foreground`,children:[`size: `,r??`none`,` · country: `,a??`none`]})]})}var V=`import { SheetSearchSelect, SheetSelect } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"
import { useId, useState } from "react"

const SIZES = [{ value: "s", label: "Small" }, { value: "m", label: "Medium" }, { value: "l", label: "Large" }]
const COUNTRIES = [
  { value: "de", label: "Germany", text: "Germany", group: "Europe" },
  { value: "pt", label: "Portugal", text: "Portugal", group: "Europe" },
  { value: "in", label: "India", text: "India", group: "Asia" },
  { value: "jp", label: "Japan", text: "Japan", group: "Asia" },
]

export function SheetPickers() {
  const form = useForm<{ note: string }>({ defaultValues: { note: "" } })
  const sizeId = useId()
  const countryId = useId()
  const [size, setSize] = useState<string | undefined>(undefined)
  const [country, setCountry] = useState<string | undefined>(undefined)
  return (
    <Form form={form}>
      {/* the phone-sized pickers SelectField and ComboboxField switch to below md; here used directly */}
      <label htmlFor={sizeId} className="text-[13px] font-medium">Size</label>
      <SheetSelect id={sizeId} value={size} options={SIZES} onChange={setSize} title="Size" placeholder="Choose a size" />
      <label htmlFor={countryId} className="text-[13px] font-medium">Country</label>
      <SheetSearchSelect id={countryId} value={country} options={COUNTRIES} onChange={setCountry} title="Country" placeholder="Choose a country" searchPlaceholder="Search countries" emptyText="No country matches" />
      <p className="text-[12px] text-muted-foreground">
        size: {size ?? "none"} · country: {country ?? "none"}
      </p>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>a(()=>import(`./sheet-select-CmHzFoxK.js`),[]));var H=[`🎉`,`🚀`,`🌱`,`🔥`,`✨`,`🎯`];function U(){let e=l({defaultValues:{note:``}}),t=_(),[n,r]=(0,P.useState)(!1),[i,a]=(0,P.useState)(`🎉`),[o,s]=(0,P.useState)(!1),d=(0,A.jsx)(`div`,{className:`grid grid-cols-6 gap-1`,children:H.map(e=>(0,A.jsx)(`button`,{type:`button`,"aria-label":`Pick ${e}`,"aria-pressed":i===e,onClick:()=>{a(e),r(!1)},className:c({size:`sm`,variant:i===e?`default`:`ghost`}),children:e},e))});return(0,A.jsx)(u,{form:e,children:(0,A.jsxs)(`div`,{className:`relative flex flex-wrap items-center gap-2`,children:[(0,A.jsxs)(`button`,{type:`button`,"aria-expanded":n,onClick:()=>r(!n),className:c({size:`sm`,variant:`outline`}),children:[`Icon `,i]}),(0,A.jsx)(v,{surface:t,open:n,onOpenChange:r,title:`Pick an icon`,popover:e=>(0,A.jsx)(`div`,{className:`absolute top-full left-0 z-10 mt-1 rounded-lg border bg-popover p-2 shadow-md`,children:e}),children:d}),(0,A.jsx)(`button`,{type:`button`,onClick:()=>s(!0),className:c({size:`sm`,variant:`outline`}),children:`Open as sheet`}),(0,A.jsx)(g,{open:o,onOpenChange:s,title:`About this icon`,children:(0,A.jsxs)(`p`,{className:`text-[13px] text-muted-foreground`,children:[`Current pick: `,i,`. Swipe down, press Escape or Done to close.`]})}),(0,A.jsxs)(`span`,{className:`text-[12px] text-muted-foreground`,children:[`surface: `,t]})]})})}var W=`import { FieldOverlay, FieldSheet, useOverlaySurface } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"
import { buttonVariants } from "@kitora/ui/button"
import { useState } from "react"

const EMOJI = ["🎉", "🚀", "🌱", "🔥", "✨", "🎯"]

export function OverlayParts() {
  const form = useForm<{ note: string }>({ defaultValues: { note: "" } })
  const surface = useOverlaySurface()
  const [open, setOpen] = useState(false)
  const [pick, setPick] = useState("🎉")
  const [sheetOpen, setSheetOpen] = useState(false)
  const grid = (
    <div className="grid grid-cols-6 gap-1">
      {EMOJI.map((e) => (
        <button key={e} type="button" aria-label={\`Pick \${e}\`} aria-pressed={pick === e} onClick={() => { setPick(e); setOpen(false) }} className={buttonVariants({ size: "sm", variant: pick === e ? "default" : "ghost" })}>
          {e}
        </button>
      ))}
    </div>
  )
  return (
    <Form form={form}>
      <div className="relative flex flex-wrap items-center gap-2">
        {/* FieldOverlay: an anchored panel from md up, a bottom sheet on a phone (useOverlaySurface decides) */}
        <button type="button" aria-expanded={open} onClick={() => setOpen(!open)} className={buttonVariants({ size: "sm", variant: "outline" })}>
          Icon {pick}
        </button>
        <FieldOverlay
          surface={surface}
          open={open}
          onOpenChange={setOpen}
          title="Pick an icon"
          popover={(body) => <div className="absolute top-full left-0 z-10 mt-1 rounded-lg border bg-popover p-2 shadow-md">{body}</div>}
        >
          {grid}
        </FieldOverlay>
        {/* FieldSheet: the bottom sheet on its own, at any width */}
        <button type="button" onClick={() => setSheetOpen(true)} className={buttonVariants({ size: "sm", variant: "outline" })}>
          Open as sheet
        </button>
        <FieldSheet open={sheetOpen} onOpenChange={setSheetOpen} title="About this icon">
          <p className="text-[13px] text-muted-foreground">Current pick: {pick}. Swipe down, press Escape or Done to close.</p>
        </FieldSheet>
        <span className="text-[12px] text-muted-foreground">surface: {surface}</span>
      </div>
    </Form>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>a(()=>import(`./field-overlay-BNL1GPvY.js`),[]));var G={room:``,amenities:[],day:``,stay:{},arrival:``,city:``,zone:``},K=[{value:`ber`,label:`Berlin`},{value:`lis`,label:`Lisbon`},{value:`bom`,label:`Mumbai`},{value:`tyo`,label:`Tokyo`}],q=[{value:`single`,label:`Single`},{value:`double`,label:`Double`},{value:`suite`,label:`Suite`}],J=[{value:`wifi`,label:`Wi-Fi`},{value:`parking`,label:`Parking`},{value:`breakfast`,label:`Breakfast`},{value:`late`,label:`Late checkout`}],Y={auto:`Auto (by width)`,sheet:`Sheet`,popover:`Popover`};function X(){let[e,t]=(0,P.useState)(`auto`),i=l({defaultValues:G});return(0,A.jsxs)(O,{children:[(0,A.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,A.jsx)(`div`,{role:`radiogroup`,"aria-label":`Picker surface`,className:`inline-flex rounded-md border border-input p-0.5 text-xs`,children:d.map(n=>(0,A.jsx)(`button`,{type:`button`,role:`radio`,"aria-checked":e===n,className:s(`rounded px-2 py-0.5`,e===n?`bg-primary text-primary-foreground`:`hover:bg-accent`),onClick:()=>t(n),children:Y[n]},n))}),(0,A.jsx)(f,{overlay:e,children:(0,A.jsxs)(u,{form:i,onSubmit:k,children:[(0,A.jsx)(h,{name:`room`,label:`Room`,options:q,placeholder:`Choose a room`,required:!0}),(0,A.jsx)(w,{name:`amenities`,label:`Amenities`,options:J}),(0,A.jsx)(C,{name:`day`,label:`Check-in`,required:!0}),(0,A.jsx)(S,{name:`stay`,label:`Stay`}),(0,A.jsx)(n,{name:`arrival`,label:`Arrival time`,min:`12:00`,max:`23:00`,step:30}),(0,A.jsx)(x,{name:`city`,label:`City`,options:K,placeholder:`Search a city`}),(0,A.jsx)(r,{name:`zone`,label:`Time zone`}),(0,A.jsx)(D,{label:`Book`})]})})]}),(0,A.jsx)(E,{store:i})]})}var Z={pickers:`import { useState } from "react"
import { ComboboxField, DateField, DateRangeField, FieldConfigProvider, MultiSelectField, OVERLAY_SURFACE_PREFS, SelectField, TimeField, TimezoneField, type DateRangeValue, type OverlaySurfacePref } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Booking = { room: string; amenities: string[]; day: string; stay: DateRangeValue; arrival: string; city: string; zone: string }

const defaultValues: Booking = { room: "", amenities: [], day: "", stay: {}, arrival: "", city: "", zone: "" }
const CITIES = [{ value: "ber", label: "Berlin" }, { value: "lis", label: "Lisbon" }, { value: "bom", label: "Mumbai" }, { value: "tyo", label: "Tokyo" }]
const ROOMS = [{ value: "single", label: "Single" }, { value: "double", label: "Double" }, { value: "suite", label: "Suite" }]
const AMENITIES = [{ value: "wifi", label: "Wi-Fi" }, { value: "parking", label: "Parking" }, { value: "breakfast", label: "Breakfast" }, { value: "late", label: "Late checkout" }]
const SURFACE_LABELS: Record<OverlaySurfacePref, string> = { auto: "Auto (by width)", sheet: "Sheet", popover: "Popover" }

// stub: replace with your API (POST /bookings)
const api = {
  async book(payload: Booking): Promise<void> {
    console.log("booked", payload)
  },
}

export function BookingForm() {
  const form = useForm<Booking>({ defaultValues })
  // the surface switch lets a desktop viewer try the phone surface; an app usually keeps "auto"
  const [surface, setSurface] = useState<OverlaySurfacePref>("auto")
  // "auto": below 768px every picker opens as a bottom sheet (focus trap, Escape, swipe down,
  // scroll lock); from 768px up as a popover. The server always renders the popover
  // variant and the switch happens after hydration, so there is no mismatch.
  // "sheet" | "popover" forces one surface for the subtree.
  return (
    <div className="flex flex-col gap-3">
      <div role="radiogroup" aria-label="Picker surface" className="inline-flex rounded-md border border-input p-0.5 text-xs">
        {OVERLAY_SURFACE_PREFS.map((p) => (
          <button key={p} type="button" role="radio" aria-checked={surface === p} onClick={() => setSurface(p)}>
            {SURFACE_LABELS[p]}
          </button>
        ))}
      </div>
      <FieldConfigProvider overlay={surface}>
        <Form form={form} onSubmit={api.book}>
          <SelectField name="room" label="Room" options={ROOMS} placeholder="Choose a room" required />
          <MultiSelectField name="amenities" label="Amenities" options={AMENITIES} />
          <DateField name="day" label="Check-in" required />
          <DateRangeField name="stay" label="Stay" />
          <TimeField name="arrival" label="Arrival time" min="12:00" max="23:00" step={30} />
          {/* typed comboboxes: on phones a sheet with a focused search input above the filtered list */}
          <ComboboxField name="city" label="City" options={CITIES} placeholder="Search a city" />
          <TimezoneField name="zone" label="Time zone" />
          <Form.Submit>Book</Form.Submit>
        </Form>
      </FieldConfigProvider>
    </div>
  )
}`};function Q(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(t,{title:`Mobile: sheets and a sticky submit`,children:`On a phone every picker opens as a bottom sheet instead of a tiny popover, and a long form keeps its submit row within reach.`}),(0,A.jsx)(T,{n:1,title:`Pickers as bottom sheets`,blurb:`Select, multi-select, date, date range, time and the typed comboboxes (city, time zone) with a search input in the sheet. Switch the surface to Sheet to see the phone version at desktop width; on a phone Auto picks it.`,code:Z.pickers,children:(0,A.jsx)(X,{})}),(0,A.jsx)(T,{n:2,title:`Sticky submit bar`,blurb:`The action row stays at the bottom of the scrolling form (here always; by default only below md), padded for the home indicator.`,code:L,children:(0,A.jsx)(I,{})}),(0,A.jsx)(T,{n:3,title:`Sheet pickers used directly`,blurb:`SheetSelect and SheetSearchSelect are the phone pickers SelectField and ComboboxField switch to; here as standalone controls.`,code:V,children:(0,A.jsx)(B,{})}),(0,A.jsx)(T,{n:4,title:`A custom picker on the responsive overlay`,blurb:`FieldOverlay (the overlay kit's, shared with the pickers kit's DatePicker) shows your panel as a popover from md up with a mouse and a bottom sheet below md or on a touch screen; FieldSheet is that sheet on its own.`,code:W,children:(0,A.jsx)(U,{})})]})}export{Q as component};