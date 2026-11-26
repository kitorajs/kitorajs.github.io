import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{Bo as t,Cc as n,Ic as r,hi as i,jo as a,vi as o}from"./index-B9ukmIN1.js";import{t as s}from"./badge-uhFB8J9R.js";import{n as c,t as l}from"./card-B_Tor3B1.js";var u=o(`font-[var(--font-sans)] font-semibold text-foreground text-balance`,{variants:{size:{"4xl":`text-4xl leading-[1.1] tracking-[-0.025em]`,"3xl":`text-3xl leading-[1.15] tracking-[-0.02em]`,"2xl":`text-2xl leading-tight tracking-[-0.015em]`,xl:`text-xl leading-snug tracking-[-0.01em]`,lg:`text-lg leading-snug tracking-[-0.005em]`,md:`text-base leading-normal`,sm:`text-sm leading-normal`}}}),d={1:`3xl`,2:`2xl`,3:`xl`,4:`lg`,5:`md`,6:`sm`};function f({level:e=2,size:n,className:r,render:o,...s}){let c=n??d[e];return a({defaultTagName:`h${e}`,props:t({className:i(u({size:c}),r)},s),render:o,state:{slot:`heading`,level:String(e),size:c}})}var p=o(`font-[var(--font-sans)]`,{variants:{size:{xs:`text-xs leading-[1.45]`,sm:`text-[13px] leading-[1.5]`,md:`text-sm leading-[1.55]`,lg:`text-base leading-[1.6]`},tone:{foreground:`text-foreground`,muted:`text-muted-foreground`,destructive:`text-destructive`},weight:{normal:`font-normal`,medium:`font-medium`,semibold:`font-semibold`}},defaultVariants:{size:`sm`}}),m=`overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical]`;function h({size:e,tone:n,weight:r,truncate:o=!1,lineClamp:s,className:c,style:l,render:u,...d}){let f=s!==void 0&&s>0?Math.floor(s):void 0;return a({defaultTagName:`p`,props:t({className:i(p({size:e,tone:n,weight:r}),f?m:o&&`truncate`,c),style:f?{WebkitLineClamp:f,...l}:l},d),render:u,state:{slot:`text`,size:e??`sm`,tone:n??void 0,truncate:f?void 0:o||void 0,clamp:f}})}function g({className:e,render:n,...r}){return a({defaultTagName:`blockquote`,props:t({className:i(`border-s-2 border-border-strong ps-4 text-sm leading-[1.6] text-foreground/85 italic [&_footer]:mt-2 [&_footer]:text-[13px] [&_footer]:text-muted-foreground [&_footer]:not-italic`,e)},r),render:n,state:{slot:`blockquote`}})}var _={disc:`list-disc`,circle:`list-[circle]`,square:`list-[square]`,decimal:`list-decimal`,"lower-alpha":`list-[lower-alpha]`,"upper-alpha":`list-[upper-alpha]`,"lower-roman":`list-[lower-roman]`,"upper-roman":`list-[upper-roman]`,none:`list-none`};function v({ordered:e=!1,marker:n,spacing:r=`sm`,className:o,render:s,...c}){let l=n??(e?`decimal`:`disc`);return a({defaultTagName:e?`ol`:`ul`,props:t({className:i(`text-sm leading-[1.6] marker:text-muted-foreground`,_[l],l===`none`?`ps-0`:`ps-5`,r===`sm`&&`space-y-1`,r===`md`&&`space-y-2`,o)},c),render:s,state:{slot:`list`,marker:l}})}function y({className:e,render:n,...r}){return a({defaultTagName:`li`,props:t({className:i(`ps-1`,e)},r),render:n,state:{slot:`list-item`}})}var b=e({TypographyBlockquoteAndList:()=>S}),x=r();function S(){return(0,x.jsxs)(`div`,{className:`flex w-full max-w-md flex-col gap-5`,children:[(0,x.jsxs)(g,{cite:`https://example.com/handbook`,children:[`Ship small changes often; a small change is easy to review and easy to roll back.`,(0,x.jsx)(`footer`,{children:`The engineering handbook`})]}),(0,x.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 sm:grid-cols-3`,children:[(0,x.jsxs)(v,{children:[(0,x.jsx)(y,{children:`Design`}),(0,x.jsx)(y,{children:`Build`}),(0,x.jsx)(y,{children:`Ship`})]}),(0,x.jsxs)(v,{ordered:!0,children:[(0,x.jsx)(y,{children:`Fork`}),(0,x.jsx)(y,{children:`Branch`}),(0,x.jsx)(y,{children:`Open a PR`})]}),(0,x.jsxs)(v,{ordered:!0,marker:`lower-alpha`,spacing:`md`,children:[(0,x.jsx)(y,{children:`Draft`}),(0,x.jsx)(y,{children:`Review`}),(0,x.jsx)(y,{children:`Publish`})]})]})]})}var C=e({TypographyComposeReleaseNote:()=>w});function w(){return(0,x.jsx)(l,{className:`w-full max-w-md`,children:(0,x.jsxs)(c,{className:`flex flex-col gap-3`,children:[(0,x.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,x.jsx)(s,{variant:`secondary`,children:`v2.4`}),(0,x.jsx)(h,{size:`xs`,tone:`muted`,render:(0,x.jsx)(`span`,{}),children:`Released 12 November`})]}),(0,x.jsx)(f,{level:3,size:`lg`,children:`Faster builds and a new rating field`}),(0,x.jsx)(h,{tone:`muted`,lineClamp:2,children:`This release halves cold build times by caching the dependency graph between runs and adds a rating field to forms, with half stars and read-only mode.`}),(0,x.jsxs)(v,{spacing:`sm`,children:[(0,x.jsx)(y,{children:`Build cache on by default`}),(0,x.jsx)(y,{children:`Rating field with half stars`}),(0,x.jsx)(y,{children:`Right-to-left fixes in menus`})]})]})})}var T=e({TypographyHeadings:()=>E});function E(){return(0,x.jsxs)(`div`,{className:`flex w-full max-w-md flex-col gap-3`,children:[(0,x.jsx)(f,{level:1,children:`Level 1 · 3xl`}),(0,x.jsx)(f,{level:2,children:`Level 2 · 2xl`}),(0,x.jsx)(f,{level:3,children:`Level 3 · xl`}),(0,x.jsx)(f,{level:4,children:`Level 4 · lg`}),(0,x.jsx)(f,{level:2,size:`sm`,className:`text-muted-foreground uppercase tracking-wide`,children:`Level 2 drawn small`})]})}var D=e({TypographyText:()=>k}),O=`Deployments roll out region by region. Each region waits for its health checks before the next one starts, so a bad build stops after the first region instead of reaching every customer at once.`;function k(){return(0,x.jsxs)(`div`,{className:`flex w-full max-w-md flex-col gap-3`,children:[(0,x.jsx)(h,{size:`lg`,children:`Large body text, 16px.`}),(0,x.jsx)(h,{children:`Default body text, 13px, in the colour around it.`}),(0,x.jsx)(h,{size:`xs`,tone:`muted`,children:`Extra small muted text for captions and hints.`}),(0,x.jsx)(h,{tone:`destructive`,weight:`medium`,children:`The API key was revoked.`}),(0,x.jsx)(h,{truncate:!0,className:`max-w-64`,children:O}),(0,x.jsx)(h,{lineClamp:2,tone:`muted`,children:O})]})}var A=`import { Blockquote, List, ListItem } from "@kitora/ui/typography"

export function TypographyBlockquoteAndList() {
  return (
    <div className="flex w-full max-w-md flex-col gap-5">
      <Blockquote cite="https://example.com/handbook">
        Ship small changes often; a small change is easy to review and easy to roll back.
        <footer>The engineering handbook</footer>
      </Blockquote>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <List>
          <ListItem>Design</ListItem>
          <ListItem>Build</ListItem>
          <ListItem>Ship</ListItem>
        </List>
        <List ordered>
          <ListItem>Fork</ListItem>
          <ListItem>Branch</ListItem>
          <ListItem>Open a PR</ListItem>
        </List>
        <List ordered marker="lower-alpha" spacing="md">
          <ListItem>Draft</ListItem>
          <ListItem>Review</ListItem>
          <ListItem>Publish</ListItem>
        </List>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>n(()=>import(`./blockquote-and-list-D4GDjih9.js`),[]));var j=`import { Badge } from "@kitora/ui/badge"
import { Card, CardContent } from "@kitora/ui/card"
import { Heading, List, ListItem, Text } from "@kitora/ui/typography"

export function TypographyComposeReleaseNote() {
  return (
    <Card className="w-full max-w-md">
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">v2.4</Badge>
          <Text size="xs" tone="muted" render={<span />}>
            Released 12 November
          </Text>
        </div>
        <Heading level={3} size="lg">
          Faster builds and a new rating field
        </Heading>
        <Text tone="muted" lineClamp={2}>
          This release halves cold build times by caching the dependency graph between runs and adds a rating field to forms, with half stars and read-only mode.
        </Text>
        <List spacing="sm">
          <ListItem>Build cache on by default</ListItem>
          <ListItem>Rating field with half stars</ListItem>
          <ListItem>Right-to-left fixes in menus</ListItem>
        </List>
      </CardContent>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>n(()=>import(`./compose-DVkJ9ss4.js`),[]));var M=`import { Heading } from "@kitora/ui/typography"

export function TypographyHeadings() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Heading level={1}>Level 1 · 3xl</Heading>
      <Heading level={2}>Level 2 · 2xl</Heading>
      <Heading level={3}>Level 3 · xl</Heading>
      <Heading level={4}>Level 4 · lg</Heading>
      <Heading level={2} size="sm" className="text-muted-foreground uppercase tracking-wide">
        Level 2 drawn small
      </Heading>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>n(()=>import(`./headings-CCu9JkV6.js`),[]));var N=`import { Text } from "@kitora/ui/typography"

const LONG =
  "Deployments roll out region by region. Each region waits for its health checks before the next one starts, so a bad build stops after the first region instead of reaching every customer at once."

export function TypographyText() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Text size="lg">Large body text, 16px.</Text>
      <Text>Default body text, 13px, in the colour around it.</Text>
      <Text size="xs" tone="muted">
        Extra small muted text for captions and hints.
      </Text>
      <Text tone="destructive" weight="medium">
        The API key was revoked.
      </Text>
      <Text truncate className="max-w-64">
        {LONG}
      </Text>
      <Text lineClamp={2} tone="muted">
        {LONG}
      </Text>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>n(()=>import(`./text-CONmWXwH.js`),[]));var P={"./demos/typography/blockquote-and-list.tsx":b,"./demos/typography/compose.tsx":C,"./demos/typography/headings.tsx":T,"./demos/typography/text.tsx":D},F={"./demos/typography/blockquote-and-list.tsx":A,"./demos/typography/compose.tsx":j,"./demos/typography/headings.tsx":M,"./demos/typography/text.tsx":N};export{P as modules,F as sources};