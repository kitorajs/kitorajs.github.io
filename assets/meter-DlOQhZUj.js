import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{a as n,c as r,d as i,i as a,l as o,n as s,o as c,r as l,s as u,t as d,u as f}from"./meter-E15uvGKu.js";import{t as p}from"./input-C8M4VLUF.js";import{Bc as m,Cc as h,Ic as g,hi as _}from"./index-q72zUtm9.js";import{t as v}from"./badge-Be8rVEaF.js";import{a as y,n as b,o as x,r as S,t as C}from"./card-WiouR7Ep.js";import{n as w}from"./meter-nsGMHYVc.js";import{t as T}from"./separator-DbMx24vO.js";var E=e({MeterBuildYourOwn:()=>O}),D=g();function O({label:e=`Storage used`,value:t=62,max:n,format:a,locale:s}){return(0,D.jsxs)(o,{value:t,max:n,format:a,locale:s,className:`flex w-full max-w-sm flex-wrap gap-3`,children:[(0,D.jsx)(f,{className:`text-sm font-medium`,children:e}),(0,D.jsx)(u,{className:`ms-auto text-sm text-muted-foreground tabular-nums`}),(0,D.jsx)(r,{className:`relative h-1 w-full overflow-hidden rounded-full bg-muted`,children:(0,D.jsx)(i,{className:`h-full bg-primary transition-all`})})]})}var k=e({MeterComposeDrives:()=>j}),A=[{name:`System`,used:212,size:256},{name:`Projects`,used:640,size:1e3},{name:`Backups`,used:1710,size:2e3}];function j(){return(0,D.jsxs)(C,{className:`w-full max-w-md`,children:[(0,D.jsxs)(y,{children:[(0,D.jsx)(x,{children:`Storage`}),(0,D.jsx)(S,{children:`Three drives, used of their size.`})]}),(0,D.jsx)(b,{className:`grid gap-4`,children:A.map((e,t)=>(0,D.jsxs)(`div`,{className:`grid gap-4`,children:[t>0?(0,D.jsx)(T,{}):null,(0,D.jsxs)(d,{value:e.used,max:e.size,locale:`en-US`,format:{style:`unit`,unit:`gigabyte`},getAriaValueText:t=>`${e.name}: ${t} of ${e.size} GB`,children:[(0,D.jsxs)(l,{className:`flex items-center gap-2`,children:[e.name,e.used/e.size>.8?(0,D.jsx)(v,{variant:`destructive`,children:`Almost full`}):null]}),(0,D.jsx)(c,{})]})]},e.name))})]})}var M=e({MeterDefault:()=>N});function N(){return(0,D.jsxs)(d,{value:62,className:`w-full max-w-sm`,children:[(0,D.jsx)(l,{children:`Storage used`}),(0,D.jsx)(c,{})]})}var P=e({MeterFormat:()=>ee});function ee(){return(0,D.jsxs)(`div`,{className:`grid w-full max-w-sm gap-4`,children:[(0,D.jsxs)(d,{value:7.2,max:10,locale:`en-US`,format:{style:`unit`,unit:`gigabyte`,unitDisplay:`short`},getAriaValueText:e=>`${e} of 10 GB used`,children:[(0,D.jsx)(l,{children:`Disk`}),(0,D.jsx)(c,{children:e=>`${e} of 10 GB`})]}),(0,D.jsxs)(d,{value:1234.5,max:5e3,locale:`de-DE`,format:{style:`currency`,currency:`EUR`},children:[(0,D.jsx)(l,{children:`Budget spent`}),(0,D.jsx)(c,{})]})]})}var F=e({MeterParts:()=>L}),I=[{label:`Battery`,value:18},{label:`Memory`,value:54},{label:`CPU`,value:91}];function L(){return(0,D.jsx)(`div`,{className:`grid w-full max-w-sm gap-4`,children:I.map(({label:e,value:t})=>(0,D.jsxs)(a,{value:t,className:`flex flex-wrap gap-2`,children:[(0,D.jsx)(l,{children:e}),(0,D.jsx)(c,{}),(0,D.jsx)(n,{className:`h-2`,children:(0,D.jsx)(s,{className:_(t<25?`bg-red-500`:t<75?`bg-primary`:`bg-amber-500`)})})]},e))})}var R=e({MeterRing:()=>B}),z=[{name:`System`,value:42},{name:`Media`,value:71},{name:`Backups`,value:93}];function B(){return(0,D.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-6`,children:z.map(e=>(0,D.jsxs)(w.Root,{value:e.value,low:60,high:85,optimum:20,className:`w-auto justify-items-center`,children:[(0,D.jsx)(w.Ring,{size:64,thickness:6,className:`justify-self-center`}),(0,D.jsx)(w.Label,{className:`col-span-full text-center`,children:e.name})]},e.name))})}var V=e({MeterSegments:()=>G}),H=t(m(),1),U=[`Too short`,`Weak`,`Fair`,`Good`,`Strong`];function W(e){let t=0;return e.length>=8&&t++,/[A-Z]/.test(e)&&/[a-z]/.test(e)&&t++,/\d/.test(e)&&t++,/[^A-Za-z0-9]/.test(e)&&t++,t}function G(){let[e,t]=(0,H.useState)(`hunter2`);return(0,D.jsxs)(`div`,{className:`grid w-full max-w-sm gap-3`,children:[(0,D.jsx)(p,{type:`password`,value:e,onChange:e=>t(e.target.value),"aria-label":`Password`}),(0,D.jsxs)(w.Root,{value:W(e),max:4,low:2,high:3,optimum:4,format:e=>U[e.value]??``,children:[(0,D.jsx)(w.Label,{children:`Strength`}),(0,D.jsx)(w.Value,{}),(0,D.jsx)(w.Segments,{count:4})]})]})}var K=`import { Meter } from "@kitora/primitives/react"

/**
 * A meter built from the primitives' parts only: \`Meter.Root\` (\`role="meter"\`, the value and its text for assistive tech),
 * \`Label\`, \`Value\`, \`Track\` and \`Indicator\`, styled with your own classes. \`format\` and \`locale\` (\`Intl.NumberFormat\`) turn
 * the bare percentage into a unit, a currency or a compact number.
 */
export function MeterBuildYourOwn({
  label = "Storage used",
  value = 62,
  max,
  format,
  locale,
}: {
  label?: string
  value?: number
  max?: number
  format?: Intl.NumberFormatOptions
  locale?: Intl.LocalesArgument
}) {
  return (
    <Meter.Root value={value} max={max} format={format} locale={locale} className="flex w-full max-w-sm flex-wrap gap-3">
      <Meter.Label className="text-sm font-medium">{label}</Meter.Label>
      <Meter.Value className="ms-auto text-sm text-muted-foreground tabular-nums" />
      <Meter.Track className="relative h-1 w-full overflow-hidden rounded-full bg-muted">
        <Meter.Indicator className="h-full bg-primary transition-all" />
      </Meter.Track>
    </Meter.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>h(()=>import(`./build-your-own-DP1QKxsZ.js`),[]));var q=`import { Badge } from "@kitora/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@kitora/ui/card"
import { Meter, MeterLabel, MeterValue } from "@kitora/ui/meter"
import { Separator } from "@kitora/ui/separator"

const drives = [
  { name: "System", used: 212, size: 256 },
  { name: "Projects", used: 640, size: 1000 },
  { name: "Backups", used: 1710, size: 2000 },
]

export function MeterComposeDrives() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Storage</CardTitle>
        <CardDescription>Three drives, used of their size.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {drives.map((drive, i) => (
          <div key={drive.name} className="grid gap-4">
            {i > 0 ? <Separator /> : null}
            <Meter value={drive.used} max={drive.size} locale="en-US" format={{ style: "unit", unit: "gigabyte" }} getAriaValueText={(formatted) => \`\${drive.name}: \${formatted} of \${drive.size} GB\`}>
              <MeterLabel className="flex items-center gap-2">
                {drive.name}
                {drive.used / drive.size > 0.8 ? <Badge variant="destructive">Almost full</Badge> : null}
              </MeterLabel>
              <MeterValue />
            </Meter>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>h(()=>import(`./compose-D8Jxbjj2.js`),[]));var J=`import { Meter, MeterLabel, MeterValue } from "@kitora/ui/meter"

export function MeterDefault() {
  return (
    <Meter value={62} className="w-full max-w-sm">
      <MeterLabel>Storage used</MeterLabel>
      <MeterValue />
    </Meter>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>h(()=>import(`./default-CPQ0aV8o.js`),[]));var Y=`import { Meter, MeterLabel, MeterValue } from "@kitora/ui/meter"

export function MeterFormat() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <Meter value={7.2} max={10} locale="en-US" format={{ style: "unit", unit: "gigabyte", unitDisplay: "short" }} getAriaValueText={(formatted) => \`\${formatted} of 10 GB used\`}>
        <MeterLabel>Disk</MeterLabel>
        <MeterValue>{(formatted) => \`\${formatted} of 10 GB\`}</MeterValue>
      </Meter>
      <Meter value={1234.5} max={5000} locale="de-DE" format={{ style: "currency", currency: "EUR" }}>
        <MeterLabel>Budget spent</MeterLabel>
        <MeterValue />
      </Meter>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>h(()=>import(`./format--iNQdqV7.js`),[]));var X=`import { MeterIndicator, MeterLabel, MeterRoot, MeterTrack, MeterValue } from "@kitora/ui/meter"
import { cn } from "@kitora/ui/utils"

const readings = [
  { label: "Battery", value: 18 },
  { label: "Memory", value: 54 },
  { label: "CPU", value: 91 },
]

/** The root draws nothing; the track and indicator are yours, here coloured by where the value sits. */
export function MeterParts() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      {readings.map(({ label, value }) => (
        <MeterRoot key={label} value={value} className="flex flex-wrap gap-2">
          <MeterLabel>{label}</MeterLabel>
          <MeterValue />
          <MeterTrack className="h-2">
            <MeterIndicator className={cn(value < 25 ? "bg-red-500" : value < 75 ? "bg-primary" : "bg-amber-500")} />
          </MeterTrack>
        </MeterRoot>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>h(()=>import(`./parts-D682Cqg3.js`),[]));var Z=`import { Meter } from "@kitora/feedback"

const DISKS = [
  { name: "System", value: 42 },
  { name: "Media", value: 71 },
  { name: "Backups", value: 93 },
]

export function MeterRing() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {DISKS.map((disk) => (
        <Meter.Root key={disk.name} value={disk.value} low={60} high={85} optimum={20} className="w-auto justify-items-center">
          <Meter.Ring size={64} thickness={6} className="justify-self-center" />
          <Meter.Label className="col-span-full text-center">{disk.name}</Meter.Label>
        </Meter.Root>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>h(()=>import(`./ring-BWVXV7HT.js`),[]));var Q=`import { useState } from "react"
import { Meter } from "@kitora/feedback"
import { Input } from "@kitora/ui/input"

const LABELS = ["Too short", "Weak", "Fair", "Good", "Strong"]

function strength(password: string): number {
  let score = 0
  if (password.length >= 8) score++
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++
  if (/\\d/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++
  return score
}

export function MeterSegments() {
  const [password, setPassword] = useState("hunter2")
  return (
    <div className="grid w-full max-w-sm gap-3">
      <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} aria-label="Password" />
      <Meter.Root value={strength(password)} max={4} low={2} high={3} optimum={4} format={(s) => LABELS[s.value] ?? ""}>
        <Meter.Label>Strength</Meter.Label>
        <Meter.Value />
        <Meter.Segments count={4} />
      </Meter.Root>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>h(()=>import(`./segments-Dic5BH8J.js`),[]));var $={"./demos/meter/build-your-own.tsx":E,"./demos/meter/compose.tsx":k,"./demos/meter/default.tsx":M,"./demos/meter/format.tsx":P,"./demos/meter/parts.tsx":F,"./demos/meter/ring.tsx":R,"./demos/meter/segments.tsx":V},te={"./demos/meter/build-your-own.tsx":K,"./demos/meter/compose.tsx":q,"./demos/meter/default.tsx":J,"./demos/meter/format.tsx":Y,"./demos/meter/parts.tsx":X,"./demos/meter/ring.tsx":Z,"./demos/meter/segments.tsx":Q};export{$ as modules,te as sources};