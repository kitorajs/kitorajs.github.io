import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./archive-CEi55kNz.js";import{t as r}from"./arrow-down-DFaEMtgZ.js";import{Bc as i,Cc as a,Ic as o,Mi as s,Ti as c}from"./index-9y5uwRd3.js";import{n as l,t as u}from"./card-AZ_23TG_.js";import{o as d,t as f}from"./message-FYTlloBs.js";import{t as p}from"./bubble-BdCT96Pd.js";import{n as m,r as h,t as g}from"./marker-B-_KKKQz.js";var _=s(`history`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}],[`path`,{d:`M12 7v5l4 2`,key:`1fdv2h`}]]),v=e({MarkerCompose:()=>S}),y=t(i(),1),b=o(),x=[`Earlier: the API keys were rotated.`,`Earlier: staging was rebuilt.`];function S(){let[e,t]=(0,y.useState)(`idle`);return(0,b.jsx)(u,{className:`w-full max-w-md`,children:(0,b.jsxs)(l,{className:`flex flex-col gap-2 text-[13px]`,children:[e===`idle`?(0,b.jsxs)(g,{variant:`border`,render:(0,b.jsx)(`button`,{type:`button`,onClick:()=>{t(`loading`),setTimeout(()=>t(`done`),900)}}),className:`justify-center hover:bg-muted`,children:[(0,b.jsx)(h,{children:(0,b.jsx)(_,{})}),(0,b.jsx)(m,{children:`Load older messages`})]}):e===`loading`?(0,b.jsxs)(g,{role:`status`,className:`justify-center`,children:[(0,b.jsx)(h,{children:(0,b.jsx)(c,{className:`motion-safe:animate-spin`})}),(0,b.jsx)(m,{children:`Loading older messages…`})]}):x.map(e=>(0,b.jsx)(f,{children:(0,b.jsx)(d,{children:(0,b.jsx)(p,{variant:`muted`,children:e})})},e)),(0,b.jsx)(g,{variant:`separator`,children:`Today`}),(0,b.jsx)(f,{children:(0,b.jsx)(d,{children:(0,b.jsx)(p,{children:`The release candidate is ready for QA.`})})})]})})}var C=e({MarkerStickyDays:()=>T}),w=[{day:`Mon 17 Nov`,lines:[`Kickoff notes are in the doc.`,`Design review moved to Thursday.`,`Budget approved.`,`Vendor call booked.`]},{day:`Tue 18 Nov`,lines:[`First prototype is live.`,`Feedback round one closed.`,`Two bugs filed.`,`Copy deck updated.`]},{day:`Today`,lines:[`Release candidate cut.`,`QA started.`,`Docs are ready.`,`Launch at 14:00.`]}];function T(){return(0,b.jsx)(`div`,{tabIndex:0,role:`log`,"aria-label":`Project updates`,className:`h-64 w-full max-w-md overflow-y-auto rounded-md border text-[13px] outline-none focus-visible:ring-2 focus-visible:ring-ring`,children:w.map(e=>(0,b.jsxs)(`section`,{"aria-label":e.day,children:[(0,b.jsx)(g,{variant:`separator`,sticky:!0,label:e.day,children:(0,b.jsx)(m,{children:e.day})}),e.lines.map(e=>(0,b.jsx)(`p`,{className:`px-4 py-2`,children:e},e))]},e.day))})}var E=e({MarkerVariants:()=>D});function D(){return(0,b.jsxs)(`div`,{className:`flex w-full max-w-md flex-col gap-3`,children:[(0,b.jsx)(g,{variant:`separator`,children:`Yesterday`}),(0,b.jsxs)(g,{className:`text-destructive`,children:[(0,b.jsx)(h,{children:(0,b.jsx)(r,{})}),(0,b.jsx)(m,{children:`New messages`})]}),(0,b.jsxs)(g,{variant:`border`,children:[(0,b.jsx)(h,{children:(0,b.jsx)(n,{})}),(0,b.jsx)(m,{children:`Conversation compacted: 42 earlier messages summarised`})]})]})}var O=`import { useState } from "react"
import { History, LoaderCircle } from "lucide-react"
import { Bubble } from "@kitora/ui/bubble"
import { Card, CardContent } from "@kitora/ui/card"
import { Marker, MarkerContent, MarkerIcon } from "@kitora/ui/marker"
import { Message, MessageContent } from "@kitora/ui/message"

const OLDER = ["Earlier: the API keys were rotated.", "Earlier: staging was rebuilt."] as const

export function MarkerCompose() {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle")
  return (
    <Card className="w-full max-w-md">
      <CardContent className="flex flex-col gap-2 text-[13px]">
        {state === "idle" ? (
          <Marker
            variant="border"
            render={<button type="button" onClick={() => {
              setState("loading")
              setTimeout(() => setState("done"), 900)
            }} />}
            className="justify-center hover:bg-muted"
          >
            <MarkerIcon>
              <History />
            </MarkerIcon>
            <MarkerContent>Load older messages</MarkerContent>
          </Marker>
        ) : state === "loading" ? (
          <Marker role="status" className="justify-center">
            <MarkerIcon>
              <LoaderCircle className="motion-safe:animate-spin" />
            </MarkerIcon>
            <MarkerContent>Loading older messages…</MarkerContent>
          </Marker>
        ) : (
          OLDER.map((text) => (
            <Message key={text}>
              <MessageContent>
                <Bubble variant="muted">{text}</Bubble>
              </MessageContent>
            </Message>
          ))
        )}
        <Marker variant="separator">Today</Marker>
        <Message>
          <MessageContent>
            <Bubble>The release candidate is ready for QA.</Bubble>
          </MessageContent>
        </Message>
      </CardContent>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>a(()=>import(`./compose-CG3bHPT1.js`),[]));var k=`import { Marker, MarkerContent } from "@kitora/ui/marker"

const DAYS = [
  { day: "Mon 17 Nov", lines: ["Kickoff notes are in the doc.", "Design review moved to Thursday.", "Budget approved.", "Vendor call booked."] },
  { day: "Tue 18 Nov", lines: ["First prototype is live.", "Feedback round one closed.", "Two bugs filed.", "Copy deck updated."] },
  { day: "Today", lines: ["Release candidate cut.", "QA started.", "Docs are ready.", "Launch at 14:00."] },
] as const

export function MarkerStickyDays() {
  return (
    <div tabIndex={0} role="log" aria-label="Project updates" className="h-64 w-full max-w-md overflow-y-auto rounded-md border text-[13px] outline-none focus-visible:ring-2 focus-visible:ring-ring">
      {DAYS.map((d) => (
        <section key={d.day} aria-label={d.day}>
          <Marker variant="separator" sticky label={d.day}>
            <MarkerContent>{d.day}</MarkerContent>
          </Marker>
          {d.lines.map((line) => (
            <p key={line} className="px-4 py-2">
              {line}
            </p>
          ))}
        </section>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>a(()=>import(`./sticky-days-BrwSg3li.js`),[]));var A=`import { ArrowDown, Archive } from "lucide-react"
import { Marker, MarkerContent, MarkerIcon } from "@kitora/ui/marker"

export function MarkerVariants() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Marker variant="separator">Yesterday</Marker>
      <Marker className="text-destructive">
        <MarkerIcon>
          <ArrowDown />
        </MarkerIcon>
        <MarkerContent>New messages</MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerIcon>
          <Archive />
        </MarkerIcon>
        <MarkerContent>Conversation compacted: 42 earlier messages summarised</MarkerContent>
      </Marker>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>a(()=>import(`./variants-zcIi7va-.js`),[]));var j={"./demos/marker/compose.tsx":v,"./demos/marker/sticky-days.tsx":C,"./demos/marker/variants.tsx":E},M={"./demos/marker/compose.tsx":O,"./demos/marker/sticky-days.tsx":k,"./demos/marker/variants.tsx":A};export{j as modules,M as sources};