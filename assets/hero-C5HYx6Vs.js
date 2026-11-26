import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./arrow-right-DCctyhz9.js";import{Bc as r,Bo as i,Cc as a,Ic as o,hi as s,jo as c,ti as l}from"./index-q72zUtm9.js";var u=t(r(),1),d=o();function f({className:e,...t}){return(0,d.jsx)(`div`,{"data-slot":`hero-kicker`,className:s(`mb-7`,e),...t})}function p({className:e,render:t,...n}){return c({defaultTagName:`h1`,render:t,props:i({"data-slot":`hero-title`,className:s(`max-w-4xl text-balance text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl`,e)},n)})}function m({className:e,...t}){return(0,d.jsx)(`p`,{"data-slot":`hero-description`,className:s(`mt-5 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground`,e),...t})}function h({className:e,...t}){return(0,d.jsx)(`div`,{"data-slot":`hero-actions`,className:s(`mt-10 flex flex-wrap items-center justify-center gap-3 group-data-[align=start]/hero:justify-start`,e),...t})}function g({kicker:e,title:t,subtitle:n,actions:r,titleAs:i,align:a=`center`,media:o,className:c,children:l,...g}){let _=(0,d.jsxs)(d.Fragment,{children:[e?(0,d.jsx)(f,{children:e}):null,t==null?null:(0,d.jsx)(p,{render:i&&i!==`h1`?u.createElement(i):void 0,children:t}),n?(0,d.jsx)(m,{children:n}):null,r?(0,d.jsx)(h,{children:r}):null,l]});return(0,d.jsx)(`section`,{"data-slot":`hero`,...a===`center`?null:{"data-align":a},className:s(`group/hero relative mx-auto flex max-w-5xl flex-col items-center px-6 pb-20 pt-16 text-center`,a===`start`&&`items-start text-start`,o!=null&&`grid items-center gap-10 md:grid-cols-2`,c),...g,children:o==null?_:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`div`,{"data-slot":`hero-body`,className:s(`flex flex-col`,a===`start`?`items-start`:`items-center`),children:_}),(0,d.jsx)(`div`,{"data-slot":`hero-media`,className:`min-w-0`,children:o})]})})}function _({children:e,href:t,className:n}){let r=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(`span`,{className:`relative flex size-1.5`,children:[(0,d.jsx)(`span`,{className:`absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70 motion-reduce:hidden`}),(0,d.jsx)(`span`,{className:`relative inline-flex size-1.5 rounded-full bg-primary`})]}),e]}),i=s(`inline-flex items-center gap-2 rounded-full border border-border-strong bg-card/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm transition-colors`,t&&`hover:border-primary/40 hover:text-foreground`,n);return t?(0,d.jsx)(`a`,{href:t,className:i,children:r}):(0,d.jsx)(`span`,{className:i,children:r})}function v({className:e}){return(0,d.jsx)(`div`,{"aria-hidden":!0,className:s(`pointer-events-none absolute inset-0 bg-grid mask-radial opacity-60`,e)})}var y=e({HeroCenteredWithDotGrid:()=>b});function b(){return(0,d.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3 relative overflow-hidden min-h-[420px]`,children:[(0,d.jsx)(v,{}),(0,d.jsx)(g,{className:`py-12`,kicker:(0,d.jsx)(_,{children:`v0 — first tokens shipped`}),title:(0,d.jsxs)(d.Fragment,{children:[`Patterns over `,(0,d.jsx)(`span`,{className:`text-primary`,children:`primitives.`})]}),subtitle:`A token-driven UI foundation for TanStack Start. Compact, sleek, power-user.`,actions:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l,{children:`Get started`}),(0,d.jsx)(l,{variant:`outline`,children:`Browse components`})]})})]})}var x=e({HeroComposeLaunchBanner:()=>S});function S(){return(0,d.jsx)(g,{kicker:(0,d.jsx)(_,{children:`New · v2 is out`}),title:`Ship dashboards in an afternoon`,subtitle:`Copy-paste blocks built on accessible primitives, themed by tokens.`,actions:(0,d.jsxs)(`div`,{className:`flex flex-wrap justify-center gap-2`,children:[(0,d.jsxs)(l,{children:[`Get started`,(0,d.jsx)(n,{})]}),(0,d.jsx)(l,{variant:`outline`,children:`Browse components`})]})})}var C=e({HeroParts:()=>w});function w(){return(0,d.jsxs)(g,{className:`py-10`,children:[(0,d.jsx)(f,{className:`text-xs font-medium tracking-widest text-primary uppercase`,children:`Open beta`}),(0,d.jsx)(p,{render:e=>(0,d.jsx)(`h2`,{...e,children:e.children}),className:`text-3xl sm:text-4xl md:text-5xl`,children:`Build the page from parts`}),(0,d.jsx)(m,{children:`Each part carries a data-slot and takes its own classes; Hero lays them out.`}),(0,d.jsx)(h,{children:(0,d.jsx)(l,{size:`lg`,children:`Join the beta`})})]})}var T=e({HeroStartWithMedia:()=>E});function E(){return(0,d.jsx)(g,{align:`start`,titleAs:`h2`,className:`py-10`,kicker:(0,d.jsx)(_,{children:`Changelog · March`}),title:`Reports that write themselves`,subtitle:`Schedule a digest, pick the metrics, and every Monday it lands in the channel you choose.`,actions:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l,{children:`Try it`}),(0,d.jsx)(l,{variant:`outline`,children:`Read the docs`})]}),media:(0,d.jsx)(`div`,{className:`flex aspect-video w-full items-center justify-center rounded-xl border border-border bg-muted text-sm text-muted-foreground`,children:`Product screenshot`})})}var D=`import { Button } from "@kitora/ui/button"
import { BackgroundGrid, Hero, KickerChip } from "@kitora/ui/hero"

export function HeroCenteredWithDotGrid() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 relative overflow-hidden min-h-[420px]">
      <BackgroundGrid />
      <Hero
        className="py-12"
        kicker={<KickerChip>v0 — first tokens shipped</KickerChip>}
        title={
          <>
            Patterns over <span className="text-primary">primitives.</span>
          </>
        }
        subtitle="A token-driven UI foundation for TanStack Start. Compact, sleek, power-user."
        actions={
          <>
            <Button>Get started</Button>
            <Button variant="outline">Browse components</Button>
          </>
        }
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>a(()=>import(`./centered-with-dot-grid-CYsMOVEA.js`),[]));var O=`import { ArrowRight } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { Hero, KickerChip } from "@kitora/ui/hero"

export function HeroComposeLaunchBanner() {
  return (
    <Hero
      kicker={<KickerChip>New · v2 is out</KickerChip>}
      title="Ship dashboards in an afternoon"
      subtitle="Copy-paste blocks built on accessible primitives, themed by tokens."
      actions={
        <div className="flex flex-wrap justify-center gap-2">
          <Button>
            Get started
            <ArrowRight />
          </Button>
          <Button variant="outline">Browse components</Button>
        </div>
      }
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>a(()=>import(`./compose-U94tlkfk.js`),[]));var k=`import { Button } from "@kitora/ui/button"
import { Hero, HeroActions, HeroDescription, HeroKicker, HeroTitle } from "@kitora/ui/hero"

export function HeroParts() {
  return (
    <Hero className="py-10">
      <HeroKicker className="text-xs font-medium tracking-widest text-primary uppercase">Open beta</HeroKicker>
      <HeroTitle render={(props) => <h2 {...props}>{props.children}</h2>} className="text-3xl sm:text-4xl md:text-5xl">
        Build the page from parts
      </HeroTitle>
      <HeroDescription>Each part carries a data-slot and takes its own classes; Hero lays them out.</HeroDescription>
      <HeroActions>
        <Button size="lg">Join the beta</Button>
      </HeroActions>
    </Hero>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>a(()=>import(`./parts-Bnc3601g.js`),[]));var A=`import { Button } from "@kitora/ui/button"
import { Hero, KickerChip } from "@kitora/ui/hero"

export function HeroStartWithMedia() {
  return (
    <Hero
      align="start"
      titleAs="h2"
      className="py-10"
      kicker={<KickerChip>Changelog · March</KickerChip>}
      title="Reports that write themselves"
      subtitle="Schedule a digest, pick the metrics, and every Monday it lands in the channel you choose."
      actions={
        <>
          <Button>Try it</Button>
          <Button variant="outline">Read the docs</Button>
        </>
      }
      media={
        <div className="flex aspect-video w-full items-center justify-center rounded-xl border border-border bg-muted text-sm text-muted-foreground">
          Product screenshot
        </div>
      }
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>a(()=>import(`./start-with-media-BNPgnd5o.js`),[]));var j={"./demos/hero/centered-with-dot-grid.tsx":y,"./demos/hero/compose.tsx":x,"./demos/hero/parts.tsx":C,"./demos/hero/start-with-media.tsx":T},M={"./demos/hero/centered-with-dot-grid.tsx":D,"./demos/hero/compose.tsx":O,"./demos/hero/parts.tsx":k,"./demos/hero/start-with-media.tsx":A};export{j as modules,M as sources};