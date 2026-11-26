import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{a as t,c as n,d as r,i,l as a,n as o,o as s,r as c,s as l,t as u,u as d}from"./progress-okFmiS6e.js";import{t as f}from"./file-Cu4A8CGV.js";import{s as p,t as m}from"./progress-Ck_DgHtt.js";import{Cc as h,Ic as g,ti as _}from"./index-B9ukmIN1.js";import{a as v,n as y,o as b,t as x}from"./card-B_Tor3B1.js";var S=e({ProgressBufferedRoot:()=>E}),C=g(),w=38,T=71;function E(){return(0,C.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,C.jsxs)(i,{value:w,className:`grid w-full max-w-sm grid-cols-[1fr_auto] gap-x-3 gap-y-1.5`,children:[(0,C.jsx)(c,{className:`text-xs text-muted-foreground`,children:`Playback`}),(0,C.jsx)(s,{className:`font-mono text-xs text-muted-foreground`}),(0,C.jsxs)(t,{className:`col-span-2 h-1.5`,children:[(0,C.jsx)(`span`,{"aria-hidden":`true`,className:`absolute inset-y-0 left-0 rounded-full bg-primary/25`,style:{width:`${T}%`}}),(0,C.jsx)(o,{className:`relative rounded-full bg-emerald-600`})]})]})})}var D=e({ProgressBuildYourOwn:()=>O});function O({label:e=`Build`,value:t=62}){return(0,C.jsxs)(a,{value:t,className:`flex w-full max-w-sm flex-wrap gap-3`,children:[(0,C.jsx)(d,{className:`text-sm font-medium`,children:e}),(0,C.jsx)(l,{className:`ms-auto text-sm text-muted-foreground tabular-nums`}),(0,C.jsx)(n,{className:`relative h-1 w-full overflow-hidden rounded-full bg-muted`,children:(0,C.jsx)(r,{className:`h-full bg-primary transition-all data-complete:bg-emerald-600 data-indeterminate:w-2/5 data-indeterminate:animate-pulse`})})]})}var k=e({ProgressCircular:()=>A});function A(){return(0,C.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-4`,children:[(0,C.jsx)(m,{value:62,showValue:!0,label:`Uploading`}),(0,C.jsx)(m,{value:100,size:28,thickness:3,tone:`success`,label:`Synced`}),(0,C.jsx)(m,{value:35,size:28,thickness:3,tone:`warning`,label:`Storage used`}),(0,C.jsx)(m,{size:28,thickness:3,label:`Working`})]})}var j=e({ProgressComposeUploadQueue:()=>N}),M=[{name:`report-q3.pdf`,value:100},{name:`screens.zip`,value:64},{name:`demo.mp4`,value:12}];function N(){return(0,C.jsxs)(x,{className:`w-full max-w-sm`,children:[(0,C.jsxs)(v,{className:`flex flex-row flex-wrap items-center justify-between gap-2`,children:[(0,C.jsx)(b,{children:`Uploads`}),(0,C.jsx)(_,{size:`sm`,variant:`ghost`,children:`Cancel all`})]}),(0,C.jsx)(y,{className:`grid gap-4`,children:M.map(e=>(0,C.jsxs)(u,{value:e.value,children:[(0,C.jsxs)(c,{className:`flex items-center gap-2`,children:[(0,C.jsx)(f,{className:`size-4 text-muted-foreground`,"aria-hidden":`true`}),e.name]}),(0,C.jsx)(s,{})]},e.name))})]})}var P=e({ProgressDefault:()=>F});function F(){return(0,C.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,C.jsxs)(u,{value:62,className:`w-full max-w-sm`,children:[(0,C.jsx)(c,{className:`text-xs text-muted-foreground`,children:`Build`}),(0,C.jsx)(s,{className:`font-mono text-xs text-muted-foreground`})]})})}var I=e({ProgressIndeterminate:()=>L});function L(){return(0,C.jsxs)(`div`,{className:`grid w-full max-w-sm gap-6`,children:[(0,C.jsx)(u,{value:null,children:(0,C.jsx)(c,{children:`Preparing export`})}),(0,C.jsx)(`div`,{dir:`rtl`,children:(0,C.jsx)(u,{value:null,children:(0,C.jsx)(c,{children:`جارٍ التحضير`})})})]})}var R=e({ProgressSections:()=>z});function z(){return(0,C.jsxs)(`div`,{className:`grid w-full max-w-sm gap-6`,children:[(0,C.jsxs)(p.Root,{label:`Sprint`,max:40,showValue:!0,showLegend:!0,children:[(0,C.jsx)(p.Section,{value:18,tone:`success`,label:`Done`}),(0,C.jsx)(p.Section,{value:6,tone:`warning`,label:`In review`}),(0,C.jsx)(p.Section,{value:3,tone:`error`,label:`Blocked`})]}),(0,C.jsxs)(p.Root,{label:`Storage`,size:`lg`,valueText:`61 of 100 GB`,showValue:!0,showLegend:!0,children:[(0,C.jsx)(p.Section,{value:34,tone:`info`,label:`Photos`}),(0,C.jsx)(p.Section,{value:19,tone:`default`,label:`Documents`}),(0,C.jsx)(p.Section,{value:8,tone:`success`,label:`Other`})]})]})}var B=`import { ProgressIndicator, ProgressLabel, ProgressRoot, ProgressTrack, ProgressValue } from "@kitora/ui/progress"

const PLAYED = 38
const BUFFERED = 71

export function ProgressBufferedRoot() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <ProgressRoot value={PLAYED} className="grid w-full max-w-sm grid-cols-[1fr_auto] gap-x-3 gap-y-1.5">
        <ProgressLabel className="text-xs text-muted-foreground">Playback</ProgressLabel>
        <ProgressValue className="font-mono text-xs text-muted-foreground" />
        <ProgressTrack className="col-span-2 h-1.5">
          <span aria-hidden="true" className="absolute inset-y-0 left-0 rounded-full bg-primary/25" style={{ width: \`\${BUFFERED}%\` }} />
          <ProgressIndicator className="relative rounded-full bg-emerald-600" />
        </ProgressTrack>
      </ProgressRoot>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>h(()=>import(`./buffered-root-BhktAhzF.js`),[]));var V=`import { Progress } from "@kitora/primitives/react"

/**
 * A progress bar built from the primitives' parts only: \`Progress.Root\` (\`role="progressbar"\` and its value for assistive tech),
 * \`Label\`, \`Value\`, \`Track\` and \`Indicator\`, styled on their state attributes. \`value={null}\` is indeterminate: the root and its
 * parts write \`data-indeterminate\` and the indicator no width, so a 40% bar pulses instead.
 */
export function ProgressBuildYourOwn({ label = "Build", value = 62 }: { label?: string; value?: number | null }) {
  return (
    <Progress.Root value={value} className="flex w-full max-w-sm flex-wrap gap-3">
      <Progress.Label className="text-sm font-medium">{label}</Progress.Label>
      <Progress.Value className="ms-auto text-sm text-muted-foreground tabular-nums" />
      <Progress.Track className="relative h-1 w-full overflow-hidden rounded-full bg-muted">
        <Progress.Indicator className="h-full bg-primary transition-all data-complete:bg-emerald-600 data-indeterminate:w-2/5 data-indeterminate:animate-pulse" />
      </Progress.Track>
    </Progress.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>h(()=>import(`./build-your-own-Dez1lwYq.js`),[]));var H=`import { CircularProgress } from "@kitora/feedback"

// The feedback kit's ring: determinate with its value in the middle, smaller rings in a tone, and no
// \`value\` for an indeterminate spin. Each is a progressbar named by \`label\`.
export function ProgressCircular() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <CircularProgress value={62} showValue label="Uploading" />
      <CircularProgress value={100} size={28} thickness={3} tone="success" label="Synced" />
      <CircularProgress value={35} size={28} thickness={3} tone="warning" label="Storage used" />
      <CircularProgress size={28} thickness={3} label="Working" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>h(()=>import(`./circular-FLSilYxu.js`),[]));var U=`import { File } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@kitora/ui/card"
import { Progress, ProgressLabel, ProgressValue } from "@kitora/ui/progress"

const uploads = [
  { name: "report-q3.pdf", value: 100 },
  { name: "screens.zip", value: 64 },
  { name: "demo.mp4", value: 12 },
]

export function ProgressComposeUploadQueue() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-2">
        <CardTitle>Uploads</CardTitle>
        <Button size="sm" variant="ghost">
          Cancel all
        </Button>
      </CardHeader>
      <CardContent className="grid gap-4">
        {uploads.map((u) => (
          <Progress key={u.name} value={u.value}>
            <ProgressLabel className="flex items-center gap-2">
              <File className="size-4 text-muted-foreground" aria-hidden="true" />
              {u.name}
            </ProgressLabel>
            <ProgressValue />
          </Progress>
        ))}
      </CardContent>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>h(()=>import(`./compose-BgNXwnUK.js`),[]));var W=`import { Progress, ProgressLabel, ProgressValue } from "@kitora/ui/progress"

export function ProgressDefault() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Progress value={62} className="w-full max-w-sm">
        <ProgressLabel className="text-xs text-muted-foreground">Build</ProgressLabel>
        <ProgressValue className="font-mono text-xs text-muted-foreground" />
      </Progress>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>h(()=>import(`./default-vBd0z7Lg.js`),[]));var G=`import { Progress, ProgressLabel } from "@kitora/ui/progress"

export function ProgressIndeterminate() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <Progress value={null}>
        <ProgressLabel>Preparing export</ProgressLabel>
      </Progress>
      <div dir="rtl">
        <Progress value={null}>
          <ProgressLabel>جارٍ التحضير</ProgressLabel>
        </Progress>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>h(()=>import(`./indeterminate-DFgncoo-.js`),[]));var K=`import { SectionedProgress } from "@kitora/feedback"

export function ProgressSections() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <SectionedProgress.Root label="Sprint" max={40} showValue showLegend>
        <SectionedProgress.Section value={18} tone="success" label="Done" />
        <SectionedProgress.Section value={6} tone="warning" label="In review" />
        <SectionedProgress.Section value={3} tone="error" label="Blocked" />
      </SectionedProgress.Root>
      <SectionedProgress.Root label="Storage" size="lg" valueText="61 of 100 GB" showValue showLegend>
        <SectionedProgress.Section value={34} tone="info" label="Photos" />
        <SectionedProgress.Section value={19} tone="default" label="Documents" />
        <SectionedProgress.Section value={8} tone="success" label="Other" />
      </SectionedProgress.Root>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>h(()=>import(`./sections-DKjhp-K5.js`),[]));var q={"./demos/progress/buffered-root.tsx":S,"./demos/progress/build-your-own.tsx":D,"./demos/progress/circular.tsx":k,"./demos/progress/compose.tsx":j,"./demos/progress/default.tsx":P,"./demos/progress/indeterminate.tsx":I,"./demos/progress/sections.tsx":R},J={"./demos/progress/buffered-root.tsx":B,"./demos/progress/build-your-own.tsx":V,"./demos/progress/circular.tsx":H,"./demos/progress/compose.tsx":U,"./demos/progress/default.tsx":W,"./demos/progress/indeterminate.tsx":G,"./demos/progress/sections.tsx":K};export{q as modules,J as sources};