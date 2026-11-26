import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{o as t,s as n}from"./kit-docs-DpYhPoxM.js";import{Bc as r,Ic as i}from"./index-q72zUtm9.js";import{A as a,c as o}from"./field-config-DXiPz8Cg.js";import{r as s}from"./fields-CoJCsIMd.js";import{n as c}from"./url-state-DpOkNO92.js";import{a as l}from"./choice-DBNpzPUu.js";import{t as u}from"./example-B8EaWveR.js";import{a as d,i as f,s as p}from"./demos-DN9t7sug.js";import{n as m,r as h,t as g}from"./embed-protocol-CUmKiI6z.js";var _=e(r()),v=i(),y=t(`/kits/form/leadframe-embed`),b=360,x=[{value:`#10b981`,label:`Emerald`},{value:`#6366f1`,label:`Indigo`},{value:`#f43f5e`,label:`Rose`}],S=g.map(e=>({value:e,label:e.toUpperCase()})),C=`import { useCallback, useRef, useState } from "react"
import { kit, live, readableTextOn, transport } from "@kitora/form/core"
import { FieldConfigProvider, SegmentedField, SelectField, TextField, type Density } from "@kitora/form/fields"
import { Form, useForm } from "@kitora/form/react"

type Brand = { accent: string; density: Density }
type Lead = { name: string; email: string; size: string; phone?: string }

const brandDefaults: Brand = { accent: "#10b981", density: "md" }
const leadDefaults: Lead = { name: "", email: "", size: "1-10" }
const accents = [{ value: "#10b981", label: "Emerald" }, { value: "#6366f1", label: "Indigo" }]
const densities: Density[] = ["sm", "md", "lg"]
const sizes = [{ value: "1-10", label: "1–10" }, { value: "200+", label: "200+ (enterprise)" }]
const { c, v } = kit<Lead>()

/** Only same-origin messages that carry a type; everything else is dropped. */
function readMessage(e: MessageEvent): { type: unknown } | null {
  const data: unknown = e.data
  return e.origin === window.location.origin && typeof data === "object" && data !== null && "type" in data ? data : null
}

// ── host page: embeds the form, receives its height + leads, pushes brand tokens
export function LeadFormHost() {
  const frame = useRef<HTMLIFrameElement | null>(null)
  const [height, setHeight] = useState(360)
  const [leads, setLeads] = useState<string[]>([])
  const sendBrand = (brand: unknown) => frame.current?.contentWindow?.postMessage({ type: "lead:brand", brand }, window.location.origin)
  // the brand panel is itself a form: live() emits its values as they settle
  const brandForm = useForm<Brand>({ defaultValues: brandDefaults, plugins: [live({ onChange: sendBrand, debounceMs: 0 })] })

  // a stable ref callback (React 19 cleanup): listen only to THIS frame's window
  const connect = useCallback((el: HTMLIFrameElement | null) => {
    frame.current = el
    if (!el) return
    const onMessage = (e: MessageEvent) => {
      const msg = e.source === el.contentWindow ? readMessage(e) : null
      if (msg?.type === "lead:ready") sendBrand(brandForm.getValues())
      if (msg?.type === "lead:height" && "height" in msg && typeof msg.height === "number") setHeight(msg.height)
      if (msg?.type === "lead:submit" && "payload" in msg) setLeads((l) => [JSON.stringify(msg.payload), ...l])
    }
    window.addEventListener("message", onMessage)
    return () => window.removeEventListener("message", onMessage)
  }, [brandForm])

  return (
    <>
      <iframe ref={connect} src="/lead-embed" title="Lead form" sandbox="allow-scripts allow-same-origin allow-forms" height={height} className="w-full" />
      <Form form={brandForm}>
        <SelectField name="accent" label="Accent" options={accents} />
        <SegmentedField name="density" label="Density" options={densities.map((d) => ({ value: d, label: d.toUpperCase() }))} />
      </Form>
      <pre>{leads.join("\\n")}</pre>
    </>
  )
}

const toHost = (message: object) => window.parent.postMessage(message, window.location.origin)

// ── the page INSIDE the iframe (/lead-embed): submits through a transport, reports its height
export function LeadFrame() {
  const [brand, setBrand] = useState(brandDefaults)
  // no onSubmit: the validated payload goes out through the iframe transport plugin
  const form = useForm<Lead>({ defaultValues: leadDefaults, plugins: [transport((payload) => toHost({ type: "lead:submit", payload }))] })

  const connect = useCallback((el: HTMLDivElement | null) => {
    if (!el) return
    const onMessage = (e: MessageEvent) => {
      const msg = readMessage(e)
      const next = msg?.type === "lead:brand" && "brand" in msg ? msg.brand : null
      if (typeof next !== "object" || next === null) return
      const accent = "accent" in next && typeof next.accent === "string" ? next.accent : brandDefaults.accent
      const density = densities.find((d) => "density" in next && d === next.density) ?? "md"
      setBrand({ accent, density })
    }
    window.addEventListener("message", onMessage)
    // the frame grows when the enterprise branch opens
    const sizer = new ResizeObserver(() => toHost({ type: "lead:height", height: Math.ceil(el.getBoundingClientRect().height) }))
    sizer.observe(el)
    toHost({ type: "lead:ready" })
    return () => {
      window.removeEventListener("message", onMessage)
      sizer.disconnect()
    }
  }, [])

  return (
    <div ref={connect}>
      <FieldConfigProvider density={brand.density} tokens={{ "--primary": brand.accent, "--primary-foreground": readableTextOn(brand.accent), "--ring": brand.accent }}>
        <Form form={form}>
          <TextField name="name" label="Name" required />
          <TextField name="email" label="Work email" type="email" required rules={[v.email()]} />
          <SelectField name="size" label="Company size" options={sizes} />
          {/* 'size' is the sibling field above */}
          <TextField name="phone" label="Phone" type="tel" required visibleIf={c.eq("size", "200+")} />
          <Form.Submit>Request a demo</Form.Submit>
        </Form>
      </FieldConfigProvider>
    </div>
  )
}`;function w(){let e=(0,_.useRef)(null),[t,r]=(0,_.useState)(b),[i,g]=(0,_.useState)([]),w=t=>e.current?.contentWindow?.postMessage({type:m.brand,...typeof t==`object`&&t?t:{}},window.location.origin),T=a({defaultValues:{accent:x[0].value,density:`md`},plugins:[c({onChange:w,debounceMs:0})]}),E=(0,_.useCallback)(t=>{if(e.current=t,!t)return;let n=e=>{if(e.source!==t.contentWindow)return;let n=h(e,window.location.origin);n?.type===m.height?r(n.height):n?.type===m.submit?g(e=>[{id:(e[0]?.id??0)+1,text:JSON.stringify(n.payload)},...e]):n?.type===m.ready&&w(T.getValues())};return window.addEventListener(`message`,n),()=>window.removeEventListener(`message`,n)},[T]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(n,{title:`Embedded iframe lead form`,children:`The form on the left runs in a same-origin iframe. It submits through an iframe transport plugin (postMessage to this page), reports its height so the frame grows when the enterprise branch opens (pick 200+), and takes brand tokens from the host at runtime. Messages are checked for origin and shape. Not claimed: cross-origin hardening or CSP guidance.`}),(0,v.jsx)(u,{n:1,title:`Host page + embedded form`,blurb:`Change the brand on the right; pick 200+ in the frame to watch it grow; submit to see the lead arrive here.`,code:C,children:(0,v.jsxs)(p,{children:[(0,v.jsx)(`iframe`,{ref:E,src:y,title:`Lead form (embedded)`,sandbox:`allow-scripts allow-same-origin allow-forms`,height:t,className:`w-full rounded-md border transition-[height]`}),(0,v.jsxs)(`aside`,{className:`flex flex-col gap-3`,children:[(0,v.jsx)(o,{form:T,children:(0,v.jsxs)(`div`,{className:`flex flex-col gap-3 rounded-lg border bg-card p-3`,children:[(0,v.jsx)(`p`,{className:`text-[12px] font-medium text-muted-foreground`,children:`Host brand panel`}),(0,v.jsx)(s,{name:`accent`,label:`Accent`,options:x}),(0,v.jsx)(l,{name:`density`,label:`Density`,options:S})]})}),(0,v.jsx)(d,{title:`Leads received`,meta:`frame ${t}px`,className:`w-full`,children:(0,v.jsx)(f,{empty:`none yet`,children:i.map(e=>(0,v.jsx)(`pre`,{className:`whitespace-pre-wrap wrap-anywhere`,children:e.text},e.id))})})]})]})})]})}export{w as component};