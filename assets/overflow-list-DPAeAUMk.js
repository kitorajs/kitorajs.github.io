import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./useOverflow-Cm_tHjmV.js";import{n as r,t as i}from"./avatar-DDurds49.js";import{t as a}from"./download-DkWKWhwG.js";import{t as o}from"./pencil-B4UI5Wo7.js";import{t as s}from"./share-DzDqRKKQ.js";import{t as c}from"./star-DSb30TWj.js";import{t as l}from"./trash-Bh0KTJ0J.js";import{Bc as u,Bo as d,Cc as f,Di as p,Fn as m,Ic as h,Oi as g,Rn as _,Un as v,er as y,hi as b,jo as x,ti as S}from"./index-B9ukmIN1.js";import{t as C}from"./badge-uhFB8J9R.js";import{a as w,n as T,o as E,t as ee}from"./card-B_Tor3B1.js";import{r as te,s as ne,t as re}from"./popover-Btm2pKCO.js";import{t as D}from"./link-C-rclok5.js";var O=t(u(),1),k=h(),A=e=>`${e} more`;function j({hidden:e,label:t,triggerRef:n,getKey:r,renderItem:i,indexOf:a}){return(0,k.jsxs)(re,{children:[(0,k.jsxs)(ne,{ref:n,"aria-label":t,"data-slot":`overflow-list-trigger`,render:(0,k.jsx)(S,{size:`xs`,variant:`ghost`,className:`min-w-6 tabular-nums`}),children:[`+`,e.length]}),(0,k.jsx)(te,{align:`start`,"data-slot":`overflow-list-popover`,className:`w-auto max-w-[min(18rem,calc(100vw-2rem))]`,children:(0,k.jsx)(`ul`,{role:`list`,"aria-label":t,className:`flex max-h-72 flex-wrap gap-1 overflow-y-auto`,children:e.map(e=>(0,k.jsx)(`li`,{children:i(e,a(e))},r(e)))})})]})}function M({items:e,getKey:t,renderItem:r,renderOverflow:i,gap:a=4,maxVisible:o,collapseFrom:s=`end`,overflowLabel:c=A,onOverflowChange:l,className:u,style:f,render:p,...m}){let h=e.map(t),g=n({count:e.length,shapeKey:h.join(`
`),collapseFrom:s,maxVisible:o,getKey:e=>h[e]??null,onOverflowChange:l}),_=e.filter((e,t)=>g.isHidden(t)),v=c(_.length),y=_.length>0?(0,k.jsx)(`li`,{role:`listitem`,"data-slot":`overflow-list-overflow`,className:`flex shrink-0 items-center`,children:i?i(_,{ref:g.focusReserveRef,label:v}):(0,k.jsx)(j,{hidden:_,label:v,triggerRef:g.focusReserveRef,getKey:t,renderItem:r,indexOf:t=>e.indexOf(t)})},`overflow`):null,C=e.flatMap((e,t)=>g.isHidden(t)?[]:[(0,k.jsx)(`li`,{role:`listitem`,...g.itemProps(t),className:`flex shrink-0 items-center`,children:r(e,t)},h[t])]),w=i?i([...e],{ref:()=>{},label:c(e.length)}):(0,k.jsxs)(S,{size:`xs`,variant:`ghost`,className:`min-w-6 tabular-nums`,tabIndex:-1,children:[`+`,e.length]});return x({defaultTagName:`ul`,render:p,ref:g.rootRef,props:d({role:`list`,className:b(`relative m-0 flex min-w-0 list-none flex-nowrap items-center p-0`,u),style:{gap:a,...f},children:(0,k.jsxs)(k.Fragment,{children:[s===`start`?y:null,C,s===`end`?y:null,(0,k.jsx)(`li`,{"aria-hidden":`true`,inert:!0,"data-slot":`overflow-list-measure`,className:`pointer-events-none invisible absolute start-0 top-0 size-0 overflow-hidden`,children:(0,k.jsxs)(`div`,{ref:g.measureRef,className:`flex items-center [&>*]:shrink-0`,style:{gap:a},children:[e.map((e,t)=>(0,k.jsx)(`div`,{...g.measureItemProps(t),className:`flex items-center`,children:r(e,t)},h[t])),(0,k.jsx)(`div`,{...g.measureReserveProps,className:`flex items-center`,children:w})]})})]})},m),state:{slot:`overflow-list`,overflowing:_.length>0||void 0,collapseFrom:s}})}var N=e({OverflowListAvatars:()=>I}),P=[`Ada Lovelace`,`Alan Turing`,`Grace Hopper`,`Edsger Dijkstra`,`Barbara Liskov`,`Donald Knuth`,`Margaret Hamilton`,`Ken Thompson`,`Radia Perlman`,`Linus Torvalds`],F=e=>e.split(` `).map(e=>e[0]).join(``);function I(){return(0,k.jsx)(M,{"aria-label":`Reviewers`,className:`w-full max-w-md`,maxVisible:5,overflowLabel:e=>`${e} more reviewers`,items:P,getKey:e=>e,renderItem:e=>(0,k.jsx)(i,{size:`sm`,role:`img`,"aria-label":e,title:e,children:(0,k.jsx)(r,{children:F(e)})})})}var L=e({OverflowListBreadcrumbs:()=>z}),R=[`Workspace`,`Projects`,`kitora`,`packages`,`ui`,`src`,`overflow-list.tsx`];function z(){return(0,k.jsx)(`nav`,{"aria-label":`Breadcrumb`,className:`w-full max-w-md`,children:(0,k.jsx)(M,{collapseFrom:`start`,overflowLabel:e=>`${e} more levels`,items:R,getKey:e=>e,renderItem:(e,t)=>t===R.length-1?(0,k.jsx)(`span`,{"aria-current":`page`,className:`text-[13px] font-medium`,children:e}):(0,k.jsxs)(`span`,{className:`flex items-center gap-1 text-[13px]`,children:[(0,k.jsx)(D,{href:`#overflow-list-breadcrumbs-${t}`,children:e}),(0,k.jsx)(g,{"aria-hidden":!0,className:`size-3.5 text-muted-foreground rtl:rotate-180`})]})})})}var B=e({OverflowListComposeFilters:()=>H}),V=[{id:`open`,label:`Open`,count:128},{id:`mine`,label:`Assigned to me`,count:12},{id:`bug`,label:`Bugs`,count:34},{id:`p1`,label:`Priority 1`,count:5},{id:`review`,label:`In review`,count:9},{id:`stale`,label:`Stale`,count:21}];function H(){let[e,t]=(0,O.useState)(()=>new Set([`open`])),n=e=>t(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n});return(0,k.jsxs)(ee,{className:`w-full max-w-md`,children:[(0,k.jsx)(w,{children:(0,k.jsx)(E,{children:`Issues`})}),(0,k.jsxs)(T,{children:[(0,k.jsx)(M,{"aria-label":`Filters`,gap:6,items:V,getKey:e=>e.id,renderItem:t=>(0,k.jsxs)(S,{size:`xs`,variant:e.has(t.id)?`secondary`:`outline`,"aria-pressed":e.has(t.id),onClick:()=>n(t.id),children:[t.label,(0,k.jsx)(C,{variant:`outline`,className:`tabular-nums`,children:t.count})]})}),(0,k.jsxs)(`p`,{className:`mt-3 text-[12px] text-muted-foreground tabular-nums`,"data-demo-value":`filters`,children:[`Active: `,[...e].join(`, `)||`none`]})]})]})}var U=e({OverflowListCustomOverflow:()=>G}),W=[{id:`edit`,label:`Edit`,icon:(0,k.jsx)(o,{})},{id:`copy`,label:`Duplicate`,icon:(0,k.jsx)(p,{})},{id:`star`,label:`Star`,icon:(0,k.jsx)(c,{})},{id:`share`,label:`Share`,icon:(0,k.jsx)(s,{})},{id:`download`,label:`Download`,icon:(0,k.jsx)(a,{})},{id:`delete`,label:`Delete`,icon:(0,k.jsx)(l,{})}];function G(){return(0,k.jsx)(M,{"aria-label":`File actions`,className:`w-full max-w-sm`,items:W,getKey:e=>e.id,renderItem:e=>(0,k.jsxs)(S,{size:`sm`,variant:`outline`,children:[e.icon,e.label]}),renderOverflow:(e,{ref:t,label:n})=>(0,k.jsxs)(m,{children:[(0,k.jsx)(y,{render:(0,k.jsx)(S,{ref:t,size:`sm`,variant:`ghost`,"aria-label":n}),children:`More`}),(0,k.jsx)(_,{align:`end`,children:e.map(e=>(0,k.jsxs)(v,{children:[e.icon,e.label]},e.id))})]})})}var K=e({OverflowListTags:()=>J}),q=[`design`,`react`,`accessibility`,`typescript`,`tailwind`,`testing`,`performance`,`i18n`,`rtl`,`docs`];function J(){return(0,k.jsx)(`div`,{className:`flex w-full max-w-xl flex-col gap-4`,children:[{width:`w-full`,name:`Tags, wide`},{width:`w-full max-w-60`,name:`Tags, narrow`}].map(({width:e,name:t})=>(0,k.jsx)(M,{"aria-label":t,className:e,items:q,getKey:e=>e,renderItem:e=>(0,k.jsx)(C,{variant:`secondary`,children:e})},t))})}var Y=`import { Avatar, AvatarFallback } from "@kitora/ui/avatar"
import { OverflowList } from "@kitora/ui/overflow-list"

const PEOPLE = ["Ada Lovelace", "Alan Turing", "Grace Hopper", "Edsger Dijkstra", "Barbara Liskov", "Donald Knuth", "Margaret Hamilton", "Ken Thompson", "Radia Perlman", "Linus Torvalds"]

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")

// \`maxVisible\` caps the row at five even when more would fit; each avatar is an image named by the person.
export function OverflowListAvatars() {
  return (
    <OverflowList
      aria-label="Reviewers"
      className="w-full max-w-md"
      maxVisible={5}
      overflowLabel={(n) => \`\${n} more reviewers\`}
      items={PEOPLE}
      getKey={(name) => name}
      renderItem={(name) => (
        <Avatar size="sm" role="img" aria-label={name} title={name}>
          <AvatarFallback>{initials(name)}</AvatarFallback>
        </Avatar>
      )}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>f(()=>import(`./avatars-BKNQ7CT6.js`),[]));var X=`import { ChevronRightIcon } from "lucide-react"
import { Link } from "@kitora/ui/link"
import { OverflowList } from "@kitora/ui/overflow-list"

const PATH = ["Workspace", "Projects", "kitora", "packages", "ui", "src", "overflow-list.tsx"]

// \`collapseFrom="start"\` hides the leading levels, so the current page always stays; the "+N" comes first and lists the hidden levels.
export function OverflowListBreadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="w-full max-w-md">
      <OverflowList
        collapseFrom="start"
        overflowLabel={(n) => \`\${n} more levels\`}
        items={PATH}
        getKey={(level) => level}
        renderItem={(level, index) =>
          index === PATH.length - 1 ? (
            <span aria-current="page" className="text-[13px] font-medium">
              {level}
            </span>
          ) : (
            <span className="flex items-center gap-1 text-[13px]">
              <Link href={\`#overflow-list-breadcrumbs-\${index}\`}>{level}</Link>
              <ChevronRightIcon aria-hidden className="size-3.5 text-muted-foreground rtl:rotate-180" />
            </span>
          )
        }
      />
    </nav>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>f(()=>import(`./breadcrumbs-CzBbIV0a.js`),[]));var Z=`import { useState } from "react"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@kitora/ui/card"
import { OverflowList } from "@kitora/ui/overflow-list"

const FILTERS = [
  { id: "open", label: "Open", count: 128 },
  { id: "mine", label: "Assigned to me", count: 12 },
  { id: "bug", label: "Bugs", count: 34 },
  { id: "p1", label: "Priority 1", count: 5 },
  { id: "review", label: "In review", count: 9 },
  { id: "stale", label: "Stale", count: 21 },
]

// Filter chips in a Card: each chip is a toggle Button with a count Badge; the chips that do not fit go behind "+N", where they still toggle.
export function OverflowListComposeFilters() {
  const [active, setActive] = useState<ReadonlySet<string>>(() => new Set(["open"]))
  const toggle = (id: string) =>
    setActive((current) => {
      const next = new Set(current)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Issues</CardTitle>
      </CardHeader>
      <CardContent>
        <OverflowList
          aria-label="Filters"
          gap={6}
          items={FILTERS}
          getKey={(filter) => filter.id}
          renderItem={(filter) => (
            <Button size="xs" variant={active.has(filter.id) ? "secondary" : "outline"} aria-pressed={active.has(filter.id)} onClick={() => toggle(filter.id)}>
              {filter.label}
              <Badge variant="outline" className="tabular-nums">
                {filter.count}
              </Badge>
            </Button>
          )}
        />
        <p className="mt-3 text-[12px] text-muted-foreground tabular-nums" data-demo-value="filters">
          Active: {[...active].join(", ") || "none"}
        </p>
      </CardContent>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>f(()=>import(`./compose-66U6CuXv.js`),[]));var Q=`import { CopyIcon, DownloadIcon, PencilIcon, ShareIcon, StarIcon, TrashIcon } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@kitora/ui/dropdown-menu"
import { OverflowList } from "@kitora/ui/overflow-list"

const ACTIONS = [
  { id: "edit", label: "Edit", icon: <PencilIcon /> },
  { id: "copy", label: "Duplicate", icon: <CopyIcon /> },
  { id: "star", label: "Star", icon: <StarIcon /> },
  { id: "share", label: "Share", icon: <ShareIcon /> },
  { id: "download", label: "Download", icon: <DownloadIcon /> },
  { id: "delete", label: "Delete", icon: <TrashIcon /> },
]

// \`renderOverflow\` swaps the "+N" popover for a menu of the hidden actions; its trigger takes \`ref\`, so focus lands on it when the
// focused action overflows.
export function OverflowListCustomOverflow() {
  return (
    <OverflowList
      aria-label="File actions"
      className="w-full max-w-sm"
      items={ACTIONS}
      getKey={(action) => action.id}
      renderItem={(action) => (
        <Button size="sm" variant="outline">
          {action.icon}
          {action.label}
        </Button>
      )}
      renderOverflow={(hidden, { ref, label }) => (
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button ref={ref} size="sm" variant="ghost" aria-label={label} />}>More</DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {hidden.map((action) => (
              <DropdownMenuItem key={action.id}>
                {action.icon}
                {action.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>f(()=>import(`./custom-overflow-b8H35IgS.js`),[]));var $=`import { Badge } from "@kitora/ui/badge"
import { OverflowList } from "@kitora/ui/overflow-list"

const TAGS = ["design", "react", "accessibility", "typescript", "tailwind", "testing", "performance", "i18n", "rtl", "docs"]

// The same tags in a wide box and a narrow one: what does not fit goes behind "+N", a real button that opens the rest.
export function OverflowListTags() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-4">
      {[{ width: "w-full", name: "Tags, wide" }, { width: "w-full max-w-60", name: "Tags, narrow" }].map(({ width, name }) => (
        <OverflowList key={name} aria-label={name} className={width} items={TAGS} getKey={(tag) => tag} renderItem={(tag) => <Badge variant="secondary">{tag}</Badge>} />
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>f(()=>import(`./tags-0J7C3Nhc.js`),[]));var ie={"./demos/overflow-list/avatars.tsx":N,"./demos/overflow-list/breadcrumbs.tsx":L,"./demos/overflow-list/compose.tsx":B,"./demos/overflow-list/custom-overflow.tsx":U,"./demos/overflow-list/tags.tsx":K},ae={"./demos/overflow-list/avatars.tsx":Y,"./demos/overflow-list/breadcrumbs.tsx":X,"./demos/overflow-list/compose.tsx":Z,"./demos/overflow-list/custom-overflow.tsx":Q,"./demos/overflow-list/tags.tsx":$};export{ie as modules,ae as sources};