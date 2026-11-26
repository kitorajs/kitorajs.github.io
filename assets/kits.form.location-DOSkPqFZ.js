import{s as e}from"./kit-docs-DpYhPoxM.js";import{Cc as t,Ic as n,ni as r}from"./index-q72zUtm9.js";import{W as i}from"./messages-Bsb0m0Hq.js";import{A as a,c as o,h as s}from"./field-config-DXiPz8Cg.js";import{a as c}from"./fields-CoJCsIMd.js";import{t as l}from"./location-CU-eyI0c.js";import{t as u}from"./example-B8EaWveR.js";import"./demos-DN9t7sug.js";var d=n(),f={name:`Team offsite`,spot:null},p=[{label:`Brandenburg Gate, Berlin`,lat:52.516275,lng:13.377704},{label:`Eiffel Tower, Paris`,lat:48.85837,lng:2.294481},{label:`Gateway of India, Mumbai`,lat:18.921984,lng:72.834654},{label:`Golden Gate Bridge, San Francisco`,lat:37.819929,lng:-122.478255},{label:`Sydney Opera House, Sydney`,lat:-33.856784,lng:151.215297}],m=250,h={async search(e,t){return await new Promise(e=>setTimeout(e,m)),t.aborted?[]:p.filter(t=>t.label.toLowerCase().includes(e.toLowerCase()))}},g={async saveVenue(e){return{id:`ven_`+e.name.length}}};function _(){let e=a({defaultValues:f});return(0,d.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]`,children:[(0,d.jsxs)(o,{form:e,onSubmit:g.saveVenue,children:[(0,d.jsx)(c,{name:`name`,label:`Event`,required:!0}),(0,d.jsx)(l,{name:`spot`,label:`Venue`,required:!0,geocoder:h,description:`Search (try “gate”), click the map, drag the pin, or type coordinates.`}),(0,d.jsx)(o.Submit,{className:r({size:`sm`,className:`w-fit`}),children:`Save venue`}),(0,d.jsx)(o.Status,{success:e=>(0,d.jsxs)(`p`,{children:[`Saved `,e.id]})})]}),(0,d.jsx)(v,{form:e})]})}function v({form:e}){let{payload:t,dirty:n,status:r,issues:a}=s(e,e=>({payload:e.serialize(),dirty:e.isDirty(),status:e.getStatus(),issues:e.getIssues()}),i);return(0,d.jsxs)(`aside`,{className:`min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card`,children:[(0,d.jsxs)(`div`,{className:`flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]`,children:[(0,d.jsx)(`span`,{className:`font-medium`,children:`Live payload`}),(0,d.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[n?`● dirty`:`clean`,` · `,r]})]}),(0,d.jsx)(`pre`,{dir:`ltr`,tabIndex:0,className:`max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed`,children:JSON.stringify(t,null,2)}),a.length>0?(0,d.jsx)(`ul`,{className:`space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive`,children:a.map(e=>(0,d.jsxs)(`li`,{children:[e.path||`(form)`,`: `,e.message]},e.path))}):null]})}var y=`import { buttonVariants } from "@kitora/ui/button"
import type { GeocodeResult, Geocoder, LatLng } from "@kitora/form/core"
import { LocationField, TextField } from "@kitora/form/fields"
import { Form, type SnapshotSource, useForm, useFormSnapshot } from "@kitora/form/react"
import { deepEqual, type Issue, type SubmitStatus } from "@kitora/form/core"

type Venue = { name: string; spot: LatLng | null }
type Saved = { id: string }

const defaultValues: Venue = { name: "Team offsite", spot: null }

// stub: replace with your API (a geocoder over Nominatim, Mapbox, Google or your own endpoint)
const PLACES: GeocodeResult[] = [
  { label: "Brandenburg Gate, Berlin", lat: 52.516275, lng: 13.377704 },
  { label: "Eiffel Tower, Paris", lat: 48.85837, lng: 2.294481 },
  { label: "Gateway of India, Mumbai", lat: 18.921984, lng: 72.834654 },
  { label: "Golden Gate Bridge, San Francisco", lat: 37.819929, lng: -122.478255 },
  { label: "Sydney Opera House, Sydney", lat: -33.856784, lng: 151.215297 },
]
const SEARCH_MS = 250
const geocoder: Geocoder = {
  async search(query, signal) {
    await new Promise((res) => setTimeout(res, SEARCH_MS))
    if (signal.aborted) return []
    return PLACES.filter((p) => p.label.toLowerCase().includes(query.toLowerCase()))
  },
}
const api = {
  async saveVenue(v: Venue): Promise<Saved> {
    return { id: "ven_" + v.name.length }
  },
}

export function VenueForm() {
  const form = useForm<Venue, Venue, Saved>({ defaultValues })
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <Form form={form} onSubmit={api.saveVenue}>
        <TextField name="name" label="Event" required />
        {/* { lat, lng } · map is a lazy chunk (OpenFreeMap tiles by default, mapStyle to swap) · posts spot.lat / spot.lng */}
        <LocationField name="spot" label="Venue" required geocoder={geocoder} description="Search (try “gate”), click the map, drag the pin, or type coordinates." />
        <Form.Submit className={buttonVariants({ size: "sm", className: "w-fit" })}>Save venue</Form.Submit>
        <Form.Status<Saved> success={(r) => <p>Saved {r.id}</p>} />
      </Form>
      <Payload form={form} />
    </div>
  )
}

interface LiveSource extends SnapshotSource {
  serialize(): unknown
  isDirty(): boolean
  getStatus(): SubmitStatus
  getIssues(): Issue[]
}

/** What the form would submit, live, with its state and issues: a readout beside the form, not part of it. */
function Payload({ form }: { form: LiveSource }) {
  const { payload, dirty, status, issues } = useFormSnapshot(
    form,
    (s: LiveSource) => ({ payload: s.serialize(), dirty: s.isDirty(), status: s.getStatus(), issues: s.getIssues() }),
    deepEqual,
  )
  return (
    <aside className="min-w-0 max-w-full self-start overflow-hidden rounded-lg border bg-card">
      <div className="flex h-8 items-center justify-between border-b bg-muted/40 px-3 text-[12px]">
        <span className="font-medium">Live payload</span>
        <span className="tabular-nums text-muted-foreground">{dirty ? "● dirty" : "clean"} · {status}</span>
      </div>
      <pre dir="ltr" tabIndex={0} className="max-h-[420px] overflow-auto p-3 text-[11px] leading-relaxed">
        {JSON.stringify(payload, null, 2)}
      </pre>
      {issues.length > 0 ? (
        <ul className="space-y-0.5 border-t px-3 py-2 text-[11px] text-destructive">
          {issues.map((i) => (
            <li key={i.path}>{i.path || "(form)"}: {i.message}</li>
          ))}
        </ul>
      ) : null}
    </aside>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>t(()=>import(`./location-C03X8sJM.js`),[]));function b(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e,{title:`Location`,children:[`A point as `,(0,d.jsx)(`code`,{children:`{ lat, lng }`}),`. The map (MapLibre with free OpenStreetMap-based tiles from OpenFreeMap, following light and dark) is a separate chunk with its own stylesheet, loaded only when a location field renders. Address search goes through a `,(0,d.jsx)(`code`,{children:`Geocoder`}),` interface, so no vendor is built in; the latitude and longitude inputs are always there for keyboards and screen readers, and take over where WebGL is unavailable.`]}),(0,d.jsx)(u,{n:1,title:`Event venue`,blurb:`Search, click or drag on the map, or type coordinates; required and range-checked on the server too.`,code:y,children:(0,d.jsx)(_,{})})]})}export{b as component};