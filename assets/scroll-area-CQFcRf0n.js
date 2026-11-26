import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{n as t,t as n}from"./avatar-DDurds49.js";import{a as r,c as i,i as a,n as o,o as s,r as c,s as l,t as u}from"./scroll-area-yZc3U-Ez.js";import{Cc as d,Ic as f}from"./index-B9ukmIN1.js";import{t as p}from"./separator-BAbS8iiG.js";import{n as m,t as h}from"./scroll-area-CnoGhBE3.js";var g=e({ScrollAreaAxesFadeType:()=>y}),_=f(),v=Array.from({length:30},(e,t)=>Array.from({length:12},(e,n)=>`R${t+1}C${n+1}`));function y(){return(0,_.jsxs)(`div`,{className:`flex w-full max-w-md flex-col gap-4`,children:[(0,_.jsx)(h,{scrollbars:`both`,fade:!0,contentClassName:``,className:`h-48 rounded-md border border-border`,children:(0,_.jsx)(`table`,{className:`text-xs`,children:(0,_.jsx)(`tbody`,{children:v.map(e=>(0,_.jsx)(`tr`,{children:e.map(e=>(0,_.jsx)(`td`,{className:`px-3 py-1 font-mono whitespace-nowrap text-muted-foreground`,children:e},e))},e[0]))})})}),(0,_.jsx)(h,{type:`hover`,fade:!0,className:`h-32 rounded-md border border-border`,children:(0,_.jsxs)(`p`,{className:`p-3 text-sm text-muted-foreground`,children:[`The bar shows only while the pointer is over this area or it scrolls. `,`Long text keeps going. `.repeat(30)]})})]})}var b=e({ScrollAreaBasic:()=>C}),x=Array.from({length:40},(e,t)=>`v1.${40-t}.0`),S=[`All`,`Design`,`Engineering`,`Marketing`,`Sales`,`Support`,`Finance`,`Legal`,`People`];function C(){return(0,_.jsxs)(`div`,{className:`flex w-full max-w-sm flex-col gap-4`,children:[(0,_.jsx)(h,{className:`h-48 rounded-md border border-border`,children:(0,_.jsxs)(`div`,{className:`p-3`,children:[(0,_.jsx)(`p`,{className:`mb-2 text-sm font-medium`,children:`Releases`}),x.map(e=>(0,_.jsx)(`div`,{className:`border-b border-border py-1.5 text-sm text-muted-foreground last:border-0`,children:e},e))]})}),(0,_.jsxs)(h,{className:`w-full rounded-md border border-border`,children:[(0,_.jsx)(`div`,{className:`flex w-max gap-2 p-3`,children:S.map(e=>(0,_.jsx)(`span`,{className:`rounded-full bg-muted px-3 py-1 text-sm`,children:e},e))}),(0,_.jsx)(m,{orientation:`horizontal`})]})]})}var w=e({ScrollAreaBuildYourOwn:()=>D}),T=Array.from({length:40},(e,t)=>`v1.${40-t}.0`);function E({orientation:e,keepMounted:t}){return(0,_.jsx)(a,{orientation:e,keepMounted:t,className:`flex touch-none p-px select-none data-horizontal:h-2.5 data-horizontal:flex-col data-vertical:w-2.5 data-hovering:bg-muted/40`,children:(0,_.jsx)(r,{className:`relative flex-1 rounded-full bg-border`})})}function D({keepMounted:e}){return(0,_.jsxs)(c,{"data-type":e?`always`:void 0,className:`relative h-48 w-full max-w-sm rounded-md border border-border`,children:[(0,_.jsx)(s,{className:`size-full rounded-[inherit] outline-none focus-visible:ring-2 focus-visible:ring-ring`,children:(0,_.jsxs)(u,{className:`p-3`,children:[(0,_.jsx)(`p`,{className:`mb-2 text-sm font-medium`,children:`Releases`}),T.map(e=>(0,_.jsx)(`div`,{className:`border-b border-border py-1.5 text-sm text-muted-foreground last:border-0`,children:e},e))]})}),(0,_.jsx)(E,{orientation:`vertical`,keepMounted:e}),(0,_.jsx)(E,{orientation:`horizontal`,keepMounted:e}),(0,_.jsx)(o,{})]})}var O=e({ScrollAreaComposeMemberList:()=>j}),k=[`Ana Ruiz`,`Ben Cole`,`Chen Wei`,`Dara Okafor`,`Eli Novak`,`Fatima Khan`,`Gus Lund`,`Hana Mori`,`Ivan Petrov`,`Jade Lee`],A=e=>e.split(` `).map(e=>e[0]).join(``);function j(){return(0,_.jsxs)(`div`,{className:`w-full max-w-xs rounded-lg border border-border bg-card`,children:[(0,_.jsxs)(`p`,{className:`px-3 py-2 text-sm font-medium`,children:[`Members · `,k.length]}),(0,_.jsx)(p,{}),(0,_.jsx)(h,{className:`h-56`,children:(0,_.jsx)(`ul`,{className:`p-1`,children:k.map(e=>(0,_.jsxs)(`li`,{className:`flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted`,children:[(0,_.jsx)(n,{className:`size-6`,children:(0,_.jsx)(t,{className:`text-[10px]`,children:A(e)})}),e]},e))})})]})}var M=e({ScrollAreaCspNonce:()=>P});function N(){let{nonce:e,disableStyleElements:t}=i();return(0,_.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`nonce: `,(0,_.jsx)(`code`,{children:e??`none`}),`, inline styles `,t?`off`:`on`]})}function P(){return(0,_.jsx)(l,{nonce:`demo-nonce`,children:(0,_.jsxs)(`div`,{className:`grid w-full max-w-xs gap-2`,children:[(0,_.jsx)(N,{}),(0,_.jsxs)(h,{className:`h-24 rounded-md border border-border`,children:[(0,_.jsx)(`div`,{className:`grid gap-1 p-3 text-sm`,children:Array.from({length:12},(e,t)=>(0,_.jsxs)(`span`,{children:[`Row `,t+1]},t))}),(0,_.jsx)(m,{})]})]})})}var F=`import { ScrollArea } from "@kitora/ui/scroll-area"

const rows = Array.from({ length: 30 }, (_, r) => Array.from({ length: 12 }, (_, c) => \`R\${r + 1}C\${c + 1}\`))

export function ScrollAreaAxesFadeType() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <ScrollArea scrollbars="both" fade contentClassName="" className="h-48 rounded-md border border-border">
        <table className="text-xs">
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell) => (
                  <td key={cell} className="px-3 py-1 font-mono whitespace-nowrap text-muted-foreground">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </ScrollArea>
      <ScrollArea type="hover" fade className="h-32 rounded-md border border-border">
        <p className="p-3 text-sm text-muted-foreground">
          The bar shows only while the pointer is over this area or it scrolls. {"Long text keeps going. ".repeat(30)}
        </p>
      </ScrollArea>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>d(()=>import(`./axes-fade-type-C9jPp180.js`),[]));var I=`import { ScrollArea, ScrollBar } from "@kitora/ui/scroll-area"

const tags = Array.from({ length: 40 }, (_, i) => \`v1.\${40 - i}.0\`)
const chips = ["All", "Design", "Engineering", "Marketing", "Sales", "Support", "Finance", "Legal", "People"]

export function ScrollAreaBasic() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <ScrollArea className="h-48 rounded-md border border-border">
        <div className="p-3">
          <p className="mb-2 text-sm font-medium">Releases</p>
          {tags.map((t) => (
            <div key={t} className="border-b border-border py-1.5 text-sm text-muted-foreground last:border-0">
              {t}
            </div>
          ))}
        </div>
      </ScrollArea>
      <ScrollArea className="w-full rounded-md border border-border">
        <div className="flex w-max gap-2 p-3">
          {chips.map((c) => (
            <span key={c} className="rounded-full bg-muted px-3 py-1 text-sm">
              {c}
            </span>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>d(()=>import(`./basic-Cak4qUZ-.js`),[]));var L=`import { ScrollArea } from "@kitora/primitives/react"

const TAGS = Array.from({ length: 40 }, (_, i) => \`v1.\${40 - i}.0\`)

/** One thin scrollbar with its thumb; \`keepMounted\` keeps it when nothing overflows. */
function Bar({ orientation, keepMounted }: { orientation: "vertical" | "horizontal"; keepMounted?: boolean }) {
  return (
    <ScrollArea.Scrollbar orientation={orientation} keepMounted={keepMounted} className="flex touch-none p-px select-none data-horizontal:h-2.5 data-horizontal:flex-col data-vertical:w-2.5 data-hovering:bg-muted/40">
      <ScrollArea.Thumb className="relative flex-1 rounded-full bg-border" />
    </ScrollArea.Scrollbar>
  )
}

/**
 * A scroll area built from the primitives' parts only: \`ScrollArea.Root\`, \`Viewport\` (focusable while it has something to scroll),
 * \`Content\`, a vertical and a horizontal \`Scrollbar\` with its \`Thumb\`, and \`Corner\`. Bars mount while their axis overflows, or always with
 * \`keepMounted\` (marked \`data-type="always"\` on the root, as ui's \`type="always"\` does).
 */
export function ScrollAreaBuildYourOwn({ keepMounted }: { keepMounted?: boolean }) {
  return (
    <ScrollArea.Root data-type={keepMounted ? "always" : undefined} className="relative h-48 w-full max-w-sm rounded-md border border-border">
      <ScrollArea.Viewport className="size-full rounded-[inherit] outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <ScrollArea.Content className="p-3">
          <p className="mb-2 text-sm font-medium">Releases</p>
          {TAGS.map((tag) => (
            <div key={tag} className="border-b border-border py-1.5 text-sm text-muted-foreground last:border-0">
              {tag}
            </div>
          ))}
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <Bar orientation="vertical" keepMounted={keepMounted} />
      <Bar orientation="horizontal" keepMounted={keepMounted} />
      <ScrollArea.Corner />
    </ScrollArea.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>d(()=>import(`./build-your-own-D1RW_mHp.js`),[]));var R=`import { Avatar, AvatarFallback } from "@kitora/ui/avatar"
import { ScrollArea } from "@kitora/ui/scroll-area"
import { Separator } from "@kitora/ui/separator"

const members = ["Ana Ruiz", "Ben Cole", "Chen Wei", "Dara Okafor", "Eli Novak", "Fatima Khan", "Gus Lund", "Hana Mori", "Ivan Petrov", "Jade Lee"]

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")

export function ScrollAreaComposeMemberList() {
  return (
    <div className="w-full max-w-xs rounded-lg border border-border bg-card">
      <p className="px-3 py-2 text-sm font-medium">Members · {members.length}</p>
      <Separator />
      <ScrollArea className="h-56">
        <ul className="p-1">
          {members.map((m) => (
            <li key={m} className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted">
              <Avatar className="size-6">
                <AvatarFallback className="text-[10px]">{initials(m)}</AvatarFallback>
              </Avatar>
              {m}
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>d(()=>import(`./compose-DVohIf1x.js`),[]));var z=`import { CSPProvider, useCSPContext } from "@kitora/primitives/react"
import { ScrollArea, ScrollBar } from "@kitora/ui/scroll-area"

function Policy() {
  const { nonce, disableStyleElements } = useCSPContext()
  return (
    <p className="text-xs text-muted-foreground">
      nonce: <code>{nonce ?? "none"}</code>, inline styles {disableStyleElements ? "off" : "on"}
    </p>
  )
}

/** A page with a strict Content Security Policy gives the scroll area's inline style its nonce (or turns it off and ships the rule itself). */
export function ScrollAreaCspNonce() {
  return (
    <CSPProvider nonce="demo-nonce">
      <div className="grid w-full max-w-xs gap-2">
        <Policy />
        <ScrollArea className="h-24 rounded-md border border-border">
          <div className="grid gap-1 p-3 text-sm">
            {Array.from({ length: 12 }, (_, i) => (
              <span key={i}>Row {i + 1}</span>
            ))}
          </div>
          <ScrollBar />
        </ScrollArea>
      </div>
    </CSPProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>d(()=>import(`./csp-nonce-B3sdeAqu.js`),[]));var B={"./demos/scroll-area/axes-fade-type.tsx":g,"./demos/scroll-area/basic.tsx":b,"./demos/scroll-area/build-your-own.tsx":w,"./demos/scroll-area/compose.tsx":O,"./demos/scroll-area/csp-nonce.tsx":M},V={"./demos/scroll-area/axes-fade-type.tsx":F,"./demos/scroll-area/basic.tsx":I,"./demos/scroll-area/build-your-own.tsx":L,"./demos/scroll-area/compose.tsx":R,"./demos/scroll-area/csp-nonce.tsx":z};export{B as modules,V as sources};