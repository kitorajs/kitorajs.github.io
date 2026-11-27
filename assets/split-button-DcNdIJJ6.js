import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./download-BRTJA0xs.js";import{t as r}from"./git-merge-BpypHSMN.js";import{t as i}from"./mail-C0QDlHH1.js";import{t as a}from"./rocket-CyiOKCJw.js";import{t as o}from"./save-BJJsV0AH.js";import{t as s}from"./settings-2-Dgk7JyNr.js";import{t as c}from"./share-2-BUBEB5i1.js";import{Bn as l,Ec as u,Gn as d,Ln as f,Uc as p,Un as m,Zn as h,_i as g,ji as _,nr as v,qn as y,ri as b,zc as x}from"./index-BZuUy872.js";import{t as S}from"./badge-zOMNRv4l.js";import{n as C,t as w}from"./card-XcfOPVWP.js";import{n as T,t as E}from"./button-group-hdNwMkhO.js";var D=t(p(),1),O=x(),k=D.createContext({}),A=`More options`;function j(e){return g(`px-1.5`,e===`xs`&&`px-1`,e===`lg`&&`px-2`,e===`xl`&&`px-2.5`)}function M(e){return e.menu!==void 0}function N(e){if(M(e))return(0,O.jsx)(P,{...e});let{variant:t,size:n,disabled:r,open:i,defaultOpen:a,onOpenChange:o,modal:s,menu:c,...l}=e;return(0,O.jsx)(k.Provider,{value:{variant:t,size:n,disabled:r},children:(0,O.jsx)(f,{open:i,defaultOpen:a,onOpenChange:o,modal:s,children:(0,O.jsx)(E,{...l})})})}function P({variant:e,size:t,className:n,children:r,menu:i,align:a=`end`,disabled:o,menuDisabled:s,menuLabel:c,separator:l=!1,open:u,defaultOpen:d,onOpenChange:f,modal:p,...m}){return(0,O.jsxs)(N,{variant:e,size:t,className:n,open:u,defaultOpen:d,onOpenChange:f,modal:p,children:[(0,O.jsx)(F,{disabled:o,...m,children:r}),l?(0,O.jsx)(T,{}):null,(0,O.jsx)(I,{disabled:s??o,menuLabel:c}),(0,O.jsx)(L,{align:a,children:i})]})}function F({variant:e,size:t,disabled:n,...r}){let i=D.useContext(k);return(0,O.jsx)(b,{variant:e??i.variant,size:t??i.size,disabled:n??i.disabled,...r})}function I({variant:e,size:t,disabled:n,menuLabel:r,className:i,children:a,"aria-label":o,...s}){let c=D.useContext(k),l=t??c.size;return(0,O.jsx)(v,{asChild:!0,children:(0,O.jsx)(b,{variant:e??c.variant,size:l,disabled:n??c.disabled,className:g(j(l),i),"aria-label":o??r??A,...s,children:a??(0,O.jsx)(_,{})})})}function L({align:e=`end`,...t}){return(0,O.jsx)(l,{align:e,...t})}var R=e({SplitButtonComposeDeployRow:()=>z});function z(){return(0,O.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,O.jsx)(w,{className:`w-full max-w-md`,children:(0,O.jsxs)(C,{className:`flex flex-wrap items-center justify-between gap-3`,children:[(0,O.jsxs)(`div`,{className:`grid gap-1`,children:[(0,O.jsx)(`span`,{className:`text-sm font-medium`,children:`main @ 4f2a91c`}),(0,O.jsx)(S,{variant:`secondary`,children:`Build passed`})]}),(0,O.jsxs)(N,{size:`sm`,menu:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(d,{children:`Deploy to preview`}),(0,O.jsx)(d,{children:`Deploy to staging`})]}),children:[(0,O.jsx)(a,{}),`Deploy`]})]})})})}var B=e({SplitButtonDefault:()=>V});function V(){return(0,O.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,O.jsxs)(N,{menu:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(d,{children:[(0,O.jsx)(a,{}),` Deploy preview`]}),(0,O.jsxs)(d,{children:[(0,O.jsx)(a,{}),` Deploy production`]}),(0,O.jsx)(h,{}),(0,O.jsx)(d,{children:`Configure environments…`})]}),children:[(0,O.jsx)(a,{}),`Deploy`]}),(0,O.jsxs)(N,{variant:`outline`,menu:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(d,{children:[(0,O.jsx)(o,{}),` Save and exit`]}),(0,O.jsxs)(d,{children:[(0,O.jsx)(o,{}),` Save as draft`]}),(0,O.jsxs)(d,{children:[(0,O.jsx)(o,{}),` Save and continue`]})]}),children:[(0,O.jsx)(o,{}),`Save`]}),(0,O.jsxs)(N,{variant:`soft`,size:`sm`,menu:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(d,{children:[(0,O.jsx)(c,{}),` Copy link`]}),(0,O.jsxs)(d,{children:[(0,O.jsx)(i,{}),` Email`]}),(0,O.jsxs)(d,{children:[(0,O.jsx)(n,{}),` Export PDF`]})]}),children:[(0,O.jsx)(c,{}),`Share`]})]})}var H=e({SplitButtonParts:()=>W}),U=[`Create a merge commit`,`Squash and merge`,`Rebase and merge`];function W(){let[e,t]=(0,D.useState)(U[1]),[n,i]=(0,D.useState)(!1),[a,o]=(0,D.useState)(null);return(0,O.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,O.jsxs)(N,{open:n,onOpenChange:i,children:[(0,O.jsx)(I,{menuLabel:`Merge options`,children:(0,O.jsx)(s,{})}),(0,O.jsx)(T,{}),(0,O.jsxs)(F,{onClick:t=>o(`${e} (${t.detail===0?`keyboard`:`pointer`})`),children:[(0,O.jsx)(r,{}),e]}),(0,O.jsx)(L,{align:`start`,children:(0,O.jsxs)(m,{children:[(0,O.jsx)(y,{children:`Merge method`}),U.map(e=>(0,O.jsx)(d,{onClick:()=>t(e),children:e},e))]})})]}),(0,O.jsxs)(`p`,{className:`text-[13px] text-muted-foreground`,children:[`Menu `,n?`open`:`closed`,a?` · last: ${a}`:``]})]})}var G=`import { Rocket } from "lucide-react"
import { Badge } from "@kitora/ui/badge"
import { Card, CardContent } from "@kitora/ui/card"
import { DropdownMenuItem } from "@kitora/ui/dropdown-menu"
import { SplitButton } from "@kitora/ui/split-button"

export function SplitButtonComposeDeployRow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-wrap items-center justify-between gap-3">
          <div className="grid gap-1">
            <span className="text-sm font-medium">main @ 4f2a91c</span>
            <Badge variant="secondary">Build passed</Badge>
          </div>
          <SplitButton
            size="sm"
            menu={
              <>
                <DropdownMenuItem>Deploy to preview</DropdownMenuItem>
                <DropdownMenuItem>Deploy to staging</DropdownMenuItem>
              </>
            }
          >
            <Rocket />
            Deploy
          </SplitButton>
        </CardContent>
      </Card>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>u(()=>import(`./compose-Df82-0ao.js`),[]));var K=`import { Download, Mail, Rocket, Save, Share2 } from "lucide-react"
import { DropdownMenuItem, DropdownMenuSeparator } from "@kitora/ui/dropdown-menu"
import { SplitButton } from "@kitora/ui/split-button"

export function SplitButtonDefault() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <SplitButton
        menu={
          <>
            <DropdownMenuItem>
              <Rocket /> Deploy preview
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Rocket /> Deploy production
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Configure environments…</DropdownMenuItem>
          </>
        }
      >
        <Rocket />
        Deploy
      </SplitButton>
      <SplitButton
        variant="outline"
        menu={
          <>
            <DropdownMenuItem>
              <Save /> Save and exit
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Save /> Save as draft
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Save /> Save and continue
            </DropdownMenuItem>
          </>
        }
      >
        <Save />
        Save
      </SplitButton>
      <SplitButton
        variant="soft"
        size="sm"
        menu={
          <>
            <DropdownMenuItem>
              <Share2 /> Copy link
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Mail /> Email
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Download /> Export PDF
            </DropdownMenuItem>
          </>
        }
      >
        <Share2 />
        Share
      </SplitButton>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>u(()=>import(`./default-Bohc9z5d.js`),[]));var q=`import { useState } from "react"
import { GitMerge, Settings2 } from "lucide-react"
import { ButtonGroupSeparator } from "@kitora/ui/button-group"
import { DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel } from "@kitora/ui/dropdown-menu"
import { SplitButton, SplitButtonAction, SplitButtonMenu, SplitButtonTrigger } from "@kitora/ui/split-button"

const METHODS = ["Create a merge commit", "Squash and merge", "Rebase and merge"] as const

export function SplitButtonParts() {
  const [method, setMethod] = useState<(typeof METHODS)[number]>(METHODS[1])
  const [open, setOpen] = useState(false)
  const [merged, setMerged] = useState<string | null>(null)

  return (
    <div className="flex flex-col items-center gap-3">
      <SplitButton open={open} onOpenChange={setOpen}>
        {/* The parts go in any order: here the menu opens from the start. */}
        <SplitButtonTrigger menuLabel="Merge options">
          <Settings2 />
        </SplitButtonTrigger>
        <ButtonGroupSeparator />
        <SplitButtonAction onClick={(event) => setMerged(\`\${method} (\${event.detail === 0 ? "keyboard" : "pointer"})\`)}>
          <GitMerge />
          {method}
        </SplitButtonAction>
        <SplitButtonMenu align="start">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Merge method</DropdownMenuLabel>
            {METHODS.map((m) => (
              <DropdownMenuItem key={m} onClick={() => setMethod(m)}>
                {m}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </SplitButtonMenu>
      </SplitButton>
      <p className="text-[13px] text-muted-foreground">
        Menu {open ? "open" : "closed"}
        {merged ? \` · last: \${merged}\` : ""}
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>u(()=>import(`./parts-bXKnaaZO.js`),[]));var J={"./demos/split-button/compose.tsx":R,"./demos/split-button/default.tsx":B,"./demos/split-button/parts.tsx":H},Y={"./demos/split-button/compose.tsx":G,"./demos/split-button/default.tsx":K,"./demos/split-button/parts.tsx":q};export{J as modules,Y as sources};