import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{n as t,t as n}from"./avatar-COZCc4NY.js";import{a as r,c as i,i as a,l as o,n as s,o as c,r as l,s as u,t as d}from"./hover-card-Ci6UfWAJ.js";import{Ec as f,ri as p,zc as m}from"./index-BZuUy872.js";import{t as h}from"./badge-zOMNRv4l.js";import{i as g}from"./people-BirwDKzw.js";var _=e({HoverCardBuildYourOwn:()=>y}),v=m();function y({open:e,onOpenChange:t,delay:n,closeDelay:a}){return(0,v.jsxs)(i,{open:e,onOpenChange:e=>t?.(e),children:[(0,v.jsx)(o,{href:`#grace`,delay:n,closeDelay:a,className:`text-sm font-medium text-primary underline-offset-4 hover:underline`,children:`@grace`}),(0,v.jsx)(c,{children:(0,v.jsx)(u,{side:`bottom`,align:`center`,sideOffset:4,className:`isolate z-50`,children:(0,v.jsxs)(r,{className:`w-72 origin-(--transform-origin) rounded-lg bg-popover p-3 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0`,children:[(0,v.jsx)(`p`,{className:`font-medium`,children:`Grace Hopper`}),(0,v.jsx)(`p`,{className:`text-muted-foreground`,children:`Founding engineer`}),(0,v.jsx)(`p`,{className:`mt-3 text-xs text-muted-foreground`,children:`Joined Jan 2024 · 312 commits this year`})]})})})]})}var b=e({HoverCardComposeMentionPreview:()=>x});function x(){return(0,v.jsxs)(`p`,{className:`w-full max-w-sm text-sm text-muted-foreground`,children:[`Reviewed by`,` `,(0,v.jsxs)(d,{children:[(0,v.jsx)(l,{asChild:!0,children:(0,v.jsx)(`a`,{href:`#ada`,className:`font-medium text-foreground underline underline-offset-4`,children:`@ada`})}),(0,v.jsx)(s,{className:`w-64`,children:(0,v.jsxs)(`div`,{className:`flex gap-3`,children:[(0,v.jsx)(n,{children:(0,v.jsx)(t,{children:`AB`})}),(0,v.jsxs)(`div`,{className:`space-y-1`,children:[(0,v.jsx)(`div`,{className:`text-sm font-medium text-foreground`,children:`Ada Byron`}),(0,v.jsx)(`div`,{className:`text-xs text-muted-foreground`,children:`Staff engineer · Platform`}),(0,v.jsx)(h,{variant:`secondary`,children:`Maintainer`})]})]})})]}),` `,`two hours ago.`]})}var S=e({HoverCardMovingBetweenMentions:()=>T}),C={grace:{name:`Grace Hopper`,role:`Founding engineer`,note:`Joined Jan 2024, 312 commits this year.`},alan:{name:`Alan Turing`,role:`Research`,note:`Writes the compiler notes everyone links to.`},katherine:{name:`Katherine Johnson`,role:`Platform and reliability`,note:`On call this week. Reviews every migration before it ships, and keeps the runbooks current.`}},w=a();function T(){return(0,v.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,v.jsxs)(`p`,{className:`text-sm`,children:[`Reviewed by`,` `,Object.entries(C).map(([e,t])=>(0,v.jsx)(l,{handle:w,payload:t,asChild:!0,children:(0,v.jsxs)(p,{variant:`link`,className:`h-auto px-1 py-0`,children:[`@`,e]})},e))]}),(0,v.jsx)(d,{handle:w,children:({payload:e})=>(0,v.jsx)(s,{morph:!0,backdrop:!0,children:(0,v.jsxs)(`div`,{className:`w-60`,children:[(0,v.jsx)(`p`,{className:`font-medium`,children:e?.name}),(0,v.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:e?.role}),(0,v.jsx)(`p`,{className:`mt-2 text-sm`,children:e?.note})]})})})]})}var E=e({HoverCardUserProfilePreview:()=>D});function D(){return(0,v.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,v.jsxs)(d,{children:[(0,v.jsx)(l,{asChild:!0,children:(0,v.jsx)(p,{variant:`link`,children:`@grace`})}),(0,v.jsxs)(s,{className:`w-72`,children:[(0,v.jsx)(g,{person:{name:`Grace Hopper`,presence:`online`},secondary:`Founding engineer · @grace`}),(0,v.jsx)(`p`,{className:`mt-3 text-xs text-muted-foreground`,children:`Joined Jan 2024 · 312 commits this year`})]})]})})}var O=`import { PreviewCard } from "@kitora/primitives/react"

/**
 * A hover card built from the primitives' parts only: \`PreviewCard.Root\`, \`Trigger\` (a link), \`Portal\`, \`Positioner\` (below the link) and
 * \`Popup\`, fading on \`data-starting-style\` / \`data-ending-style\`. Hover or keyboard focus opens it after \`delay\`; leaving closes it after \`closeDelay\`.
 */
export function HoverCardBuildYourOwn({ open, onOpenChange, delay, closeDelay }: { open?: boolean; onOpenChange?: (open: boolean) => void; delay?: number; closeDelay?: number }) {
  return (
    <PreviewCard.Root open={open} onOpenChange={(next) => onOpenChange?.(next)}>
      <PreviewCard.Trigger href="#grace" delay={delay} closeDelay={closeDelay} className="text-sm font-medium text-primary underline-offset-4 hover:underline">
        @grace
      </PreviewCard.Trigger>
      <PreviewCard.Portal>
        <PreviewCard.Positioner side="bottom" align="center" sideOffset={4} className="isolate z-50">
          <PreviewCard.Popup className="w-72 origin-(--transform-origin) rounded-lg bg-popover p-3 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0">
            <p className="font-medium">Grace Hopper</p>
            <p className="text-muted-foreground">Founding engineer</p>
            <p className="mt-3 text-xs text-muted-foreground">Joined Jan 2024 · 312 commits this year</p>
          </PreviewCard.Popup>
        </PreviewCard.Positioner>
      </PreviewCard.Portal>
    </PreviewCard.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>f(()=>import(`./build-your-own-FB-HdCxZ.js`),[]));var k=`import { Avatar, AvatarFallback } from "@kitora/ui/avatar"
import { Badge } from "@kitora/ui/badge"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@kitora/ui/hover-card"

export function HoverCardComposeMentionPreview() {
  return (
    <p className="w-full max-w-sm text-sm text-muted-foreground">
      Reviewed by{" "}
      <HoverCard>
        <HoverCardTrigger asChild>
          <a href="#ada" className="font-medium text-foreground underline underline-offset-4">
            @ada
          </a>
        </HoverCardTrigger>
        <HoverCardContent className="w-64">
          <div className="flex gap-3">
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <div className="text-sm font-medium text-foreground">Ada Byron</div>
              <div className="text-xs text-muted-foreground">Staff engineer · Platform</div>
              <Badge variant="secondary">Maintainer</Badge>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>{" "}
      two hours ago.
    </p>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>f(()=>import(`./compose-BCQ0lIBf.js`),[]));var A=`import { Button } from "@kitora/ui/button"
import { createHoverCardHandle, HoverCard, HoverCardContent, HoverCardTrigger } from "@kitora/ui/hover-card"

interface Person {
  readonly name: string
  readonly role: string
  readonly note: string
}

const people: Readonly<Record<string, Person>> = {
  grace: { name: "Grace Hopper", role: "Founding engineer", note: "Joined Jan 2024, 312 commits this year." },
  alan: { name: "Alan Turing", role: "Research", note: "Writes the compiler notes everyone links to." },
  katherine: { name: "Katherine Johnson", role: "Platform and reliability", note: "On call this week. Reviews every migration before it ships, and keeps the runbooks current." },
}

const mentions = createHoverCardHandle<Person>()

export function HoverCardMovingBetweenMentions() {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-sm">
        Reviewed by{" "}
        {Object.entries(people).map(([id, person]) => (
          <HoverCardTrigger key={id} handle={mentions} payload={person} asChild>
            <Button variant="link" className="h-auto px-1 py-0">
              @{id}
            </Button>
          </HoverCardTrigger>
        ))}
      </p>
      <HoverCard handle={mentions}>
        {({ payload }) => (
          <HoverCardContent morph backdrop>
            <div className="w-60">
              <p className="font-medium">{payload?.name}</p>
              <p className="text-xs text-muted-foreground">{payload?.role}</p>
              <p className="mt-2 text-sm">{payload?.note}</p>
            </div>
          </HoverCardContent>
        )}
      </HoverCard>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>f(()=>import(`./moving-between-mentions-BsI0svPA.js`),[]));var j=`import { PersonCard } from "@kitora/display"
import { Button } from "@kitora/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@kitora/ui/hover-card"

export function HoverCardUserProfilePreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">@grace</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-72">
          <PersonCard person={{ name: "Grace Hopper", presence: "online" }} secondary="Founding engineer · @grace" />
          <p className="mt-3 text-xs text-muted-foreground">Joined Jan 2024 · 312 commits this year</p>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>f(()=>import(`./user-profile-preview-DhMA7_xw.js`),[]));var M={"./demos/hover-card/build-your-own.tsx":_,"./demos/hover-card/compose.tsx":b,"./demos/hover-card/moving-between-mentions.tsx":S,"./demos/hover-card/user-profile-preview.tsx":E},N={"./demos/hover-card/build-your-own.tsx":O,"./demos/hover-card/compose.tsx":k,"./demos/hover-card/moving-between-mentions.tsx":A,"./demos/hover-card/user-profile-preview.tsx":j};export{M as modules,N as sources};