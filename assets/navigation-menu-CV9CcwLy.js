import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{_ as n,a as r,b as i,c as a,d as o,f as s,g as c,h as l,i as u,l as d,m as f,n as p,o as m,p as ee,r as h,s as g,t as _,u as v,v as y,y as b}from"./navigation-DRTGKUDK.js";import{t as te}from"./book-open-Duex-HM-.js";import{t as ne}from"./boxes-B9_yVLEI.js";import{t as re}from"./chart-column-7y9nbWwL.js";import{t as ie}from"./life-buoy-DHv-e8P_.js";import{t as ae}from"./rocket-DlwnT5g4.js";import{t as oe}from"./shield-check-QpyAbWp2.js";import{t as se}from"./users-DvvoKKua.js";import{Bc as x,Cc as S,Ic as C,Mi as w,ki as T,ti as E}from"./index-9y5uwRd3.js";import{n as D,t as O}from"./card-AZ_23TG_.js";var k=w(`lock-keyhole`,[[`circle`,{cx:`12`,cy:`16`,r:`1`,key:`1au0dj`}],[`rect`,{x:`3`,y:`10`,width:`18`,height:`12`,rx:`2`,key:`6s8ecr`}],[`path`,{d:`M7 10V7a5 5 0 0 1 10 0v3`,key:`1pqi11`}]]),A=e({NavigationMenuBuildYourOwn:()=>I}),j=C(),M=`inline-flex h-9 w-max items-center justify-center gap-1 rounded-lg px-2.5 text-sm font-medium outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring data-popup-open:bg-muted/50 group-data-[orientation=vertical]/nav:w-full group-data-[orientation=vertical]/nav:justify-between`,N=`flex items-center gap-1.5 rounded-lg p-2 text-sm outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring data-active:bg-muted/50`;function P({value:e,label:t,children:n}){return(0,j.jsxs)(y,{value:e,className:`relative`,children:[(0,j.jsxs)(v,{className:`group ${M}`,children:[t,(0,j.jsx)(b,{className:`size-3 transition-transform data-popup-open:rotate-180`,children:(0,j.jsx)(T,{className:`size-3`,"aria-hidden":`true`})})]}),(0,j.jsx)(i,{className:`w-max min-w-56 p-2 transition-opacity duration-200 data-starting-style:opacity-0 data-ending-style:opacity-0`,children:n})]})}function F({href:e,title:t,children:r}){return(0,j.jsx)(`li`,{children:(0,j.jsxs)(n,{href:e,className:`${N} flex-col items-start gap-0.5`,children:[(0,j.jsx)(`span`,{className:`font-medium`,children:t}),(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:r})]})})}function I({value:e,onValueChange:t,orientation:r=`horizontal`,delay:i,closeDelay:a}){let u=r===`vertical`;return(0,j.jsxs)(o,{"aria-label":`Main`,value:e,onValueChange:e=>t?.(e),orientation:r,delay:i,closeDelay:a,"data-orientation":r,className:`group/nav relative flex max-w-max items-center`,children:[(0,j.jsxs)(c,{className:u?`flex w-full list-none flex-col gap-0.5`:`flex list-none items-center gap-0.5`,children:[(0,j.jsx)(P,{value:`getting-started`,label:`Getting started`,children:(0,j.jsxs)(`ul`,{className:`grid w-72 gap-1`,children:[(0,j.jsx)(F,{href:`#introduction`,title:`Introduction`,children:`What Kitora is and how it is put together.`}),(0,j.jsx)(F,{href:`#installation`,title:`Installation`,children:`Add the packages and the stylesheet.`}),(0,j.jsx)(F,{href:`#theming`,title:`Theming`,children:`Tokens, dark mode and design languages.`})]})}),(0,j.jsx)(P,{value:`handbook`,label:`Handbook`,children:(0,j.jsxs)(`ul`,{className:`grid w-56 gap-1`,children:[(0,j.jsx)(`li`,{children:(0,j.jsx)(n,{href:`#accessibility`,className:N,children:`Accessibility`})}),(0,j.jsx)(`li`,{children:(0,j.jsx)(n,{href:`#releases`,active:!0,className:N,children:`Releases`})})]})}),(0,j.jsx)(y,{className:`relative`,children:(0,j.jsx)(n,{href:`#github`,className:M,children:`GitHub`})})]}),(0,j.jsx)(ee,{children:(0,j.jsx)(f,{side:u?`inline-end`:`bottom`,align:u?`start`:`center`,sideOffset:8,className:`isolate z-50 h-(--positioner-height) w-(--positioner-width) transition-[top,left,width,height] duration-300 data-instant:transition-none`,children:(0,j.jsx)(s,{className:`relative h-(--popup-height,auto) w-(--popup-width,auto) rounded-xl bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-none transition-[opacity,scale] duration-300 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0`,children:(0,j.jsx)(l,{className:`relative size-full overflow-hidden rounded-[inherit]`})})})})]})}var L=e({NavigationMenuComposeAppHeader:()=>B}),R=t(x(),1),z=[{title:`Overview`,href:`#overview`},{title:`Reports`,href:`#reports`},{title:`Customers`,href:`#customers`}];function B(){let[e,t]=(0,R.useState)(`Overview`);return(0,j.jsx)(O,{className:`w-full max-w-2xl`,children:(0,j.jsxs)(D,{className:`grid gap-3`,children:[(0,j.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,j.jsx)(p,{"aria-label":`Application`,className:`flex-none`,children:(0,j.jsxs)(m,{children:[(0,j.jsxs)(u,{value:`dashboards`,children:[(0,j.jsx)(g,{children:`Dashboards`}),(0,j.jsx)(h,{className:`w-56`,children:(0,j.jsx)(`ul`,{className:`grid gap-1`,children:z.map(({title:n,href:i})=>(0,j.jsx)(`li`,{children:(0,j.jsx)(r,{href:i,active:e===n,closeOnClick:!0,onClick:()=>t(n),children:n})},n))})})]}),(0,j.jsx)(u,{children:(0,j.jsx)(r,{href:`#settings`,active:e===`Settings`,className:d(),onClick:()=>t(`Settings`),children:`Settings`})})]})}),(0,j.jsx)(E,{size:`sm`,children:`Invite`})]}),(0,j.jsxs)(`p`,{className:`text-sm text-muted-foreground`,"aria-live":`polite`,children:[`Current page: `,e]})]})})}var ce=e({NavigationMenuDefault:()=>V});function V(){return(0,j.jsx)(p,{"aria-label":`Main`,children:(0,j.jsxs)(m,{children:[(0,j.jsxs)(u,{value:`getting-started`,children:[(0,j.jsx)(g,{children:`Getting started`}),(0,j.jsx)(h,{children:(0,j.jsxs)(`ul`,{className:`grid w-72 gap-1`,children:[(0,j.jsx)(`li`,{children:(0,j.jsxs)(r,{href:`#introduction`,className:`flex-col items-start gap-0.5`,children:[(0,j.jsx)(`span`,{className:`font-medium`,children:`Introduction`}),(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:`What Kitora is and how it is put together.`})]})}),(0,j.jsx)(`li`,{children:(0,j.jsxs)(r,{href:`#installation`,className:`flex-col items-start gap-0.5`,children:[(0,j.jsx)(`span`,{className:`font-medium`,children:`Installation`}),(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:`Add the packages and the stylesheet.`})]})}),(0,j.jsx)(`li`,{children:(0,j.jsxs)(r,{href:`#theming`,className:`flex-col items-start gap-0.5`,children:[(0,j.jsx)(`span`,{className:`font-medium`,children:`Theming`}),(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:`Tokens, dark mode and design languages.`})]})})]})})]}),(0,j.jsxs)(u,{value:`handbook`,children:[(0,j.jsx)(g,{children:`Handbook`}),(0,j.jsx)(h,{children:(0,j.jsxs)(`ul`,{className:`grid w-56 gap-1`,children:[(0,j.jsx)(`li`,{children:(0,j.jsx)(r,{href:`#accessibility`,children:`Accessibility`})}),(0,j.jsx)(`li`,{children:(0,j.jsx)(r,{href:`#releases`,active:!0,children:`Releases`})}),(0,j.jsx)(`li`,{children:(0,j.jsx)(r,{href:`#changelog`,children:`Changelog`})})]})})]}),(0,j.jsx)(u,{children:(0,j.jsx)(r,{href:`#github`,className:d(),children:`GitHub`})})]})})}var H=e({NavigationMenuMegaMenu:()=>G}),U=[{title:`Analytics`,text:`Funnels, cohorts and dashboards.`,icon:re,href:`#analytics`},{title:`Automation`,text:`Workflows that run on their own.`,icon:ae,href:`#automation`},{title:`Integrations`,text:`Connect the tools you already use.`,icon:ne,href:`#integrations`},{title:`Security`,text:`SSO, audit logs and roles.`,icon:oe,href:`#security`}],W=[{title:`Documentation`,icon:te,href:`#documentation`},{title:`Help centre`,icon:ie,href:`#help`},{title:`Community`,icon:se,href:`#community`}];function G(){return(0,j.jsx)(p,{"aria-label":`Product`,children:(0,j.jsxs)(m,{children:[(0,j.jsxs)(u,{value:`products`,children:[(0,j.jsx)(g,{children:`Products`}),(0,j.jsx)(h,{className:`w-[min(34rem,calc(100vw-2rem))]`,children:(0,j.jsx)(`ul`,{className:`grid gap-1 sm:grid-cols-2`,children:U.map(({title:e,text:t,icon:n,href:i})=>(0,j.jsx)(`li`,{children:(0,j.jsxs)(r,{href:i,className:`items-start gap-3 p-3`,children:[(0,j.jsx)(n,{className:`mt-0.5 text-muted-foreground`}),(0,j.jsxs)(`span`,{className:`grid gap-0.5`,children:[(0,j.jsx)(`span`,{className:`font-medium`,children:e}),(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:t})]})]})},e))})})]}),(0,j.jsxs)(u,{value:`solutions`,children:[(0,j.jsx)(g,{children:`Solutions`}),(0,j.jsx)(h,{className:`w-[min(16rem,calc(100vw-2rem))]`,children:(0,j.jsxs)(`ul`,{className:`grid gap-1`,children:[(0,j.jsx)(`li`,{children:(0,j.jsx)(r,{href:`#startups`,children:`For startups`})}),(0,j.jsx)(`li`,{children:(0,j.jsx)(r,{href:`#agencies`,children:`For agencies`})}),(0,j.jsx)(`li`,{children:(0,j.jsxs)(r,{href:`#enterprise`,children:[(0,j.jsx)(k,{className:`text-muted-foreground`}),`For enterprise`]})})]})})]}),(0,j.jsxs)(u,{value:`resources`,children:[(0,j.jsx)(g,{children:`Resources`}),(0,j.jsx)(h,{className:`w-[min(24rem,calc(100vw-2rem))]`,children:(0,j.jsxs)(`div`,{className:`grid gap-2 sm:grid-cols-[1fr_auto]`,children:[(0,j.jsxs)(r,{href:`#guides`,className:`flex-col items-start justify-end gap-1 rounded-lg bg-muted p-4`,children:[(0,j.jsx)(`span`,{className:`font-medium`,children:`Guides`}),(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:`Step by step, from the first project to production.`})]}),(0,j.jsx)(`ul`,{className:`grid content-start gap-1 sm:w-40`,children:W.map(({title:e,icon:t,href:n})=>(0,j.jsx)(`li`,{children:(0,j.jsxs)(r,{href:n,children:[(0,j.jsx)(t,{className:`text-muted-foreground`}),e]})},e))})]})})]}),(0,j.jsx)(u,{children:(0,j.jsx)(r,{href:`#pricing`,className:d(),children:`Pricing`})})]})})}var le=e({NavigationMenuNested:()=>ue});function ue(){return(0,j.jsx)(p,{"aria-label":`Library`,children:(0,j.jsxs)(m,{children:[(0,j.jsxs)(u,{value:`library`,children:[(0,j.jsx)(g,{children:`Library`}),(0,j.jsx)(h,{className:`w-80`,children:(0,j.jsxs)(p,{"aria-label":`Library sections`,positioner:!1,className:`max-w-none flex-col items-stretch`,children:[(0,j.jsxs)(m,{className:`flex-none justify-start`,children:[(0,j.jsxs)(u,{value:`components`,children:[(0,j.jsx)(g,{children:`Components`}),(0,j.jsx)(h,{className:`min-w-0 w-full`,children:(0,j.jsxs)(`ul`,{className:`grid gap-1`,children:[(0,j.jsx)(`li`,{children:(0,j.jsx)(r,{href:`#buttons`,children:`Buttons`})}),(0,j.jsx)(`li`,{children:(0,j.jsx)(r,{href:`#forms`,children:`Forms`})}),(0,j.jsx)(`li`,{children:(0,j.jsx)(r,{href:`#overlays`,children:`Overlays`})})]})})]}),(0,j.jsxs)(u,{value:`hooks`,children:[(0,j.jsx)(g,{children:`Hooks`}),(0,j.jsx)(h,{className:`min-w-0 w-full`,children:(0,j.jsxs)(`ul`,{className:`grid gap-1`,children:[(0,j.jsx)(`li`,{children:(0,j.jsx)(r,{href:`#use-render`,children:`useRender`})}),(0,j.jsx)(`li`,{children:(0,j.jsx)(r,{href:`#use-button`,children:`useButton`})})]})})]}),(0,j.jsx)(u,{children:(0,j.jsx)(r,{href:`#recipes`,children:`Recipes`})})]}),(0,j.jsx)(a,{})]})})]}),(0,j.jsxs)(u,{value:`updates`,children:[(0,j.jsx)(g,{children:`Updates`}),(0,j.jsx)(h,{className:`w-56`,children:(0,j.jsxs)(`ul`,{className:`grid gap-1`,children:[(0,j.jsx)(`li`,{children:(0,j.jsx)(r,{href:`#releases`,children:`Releases`})}),(0,j.jsx)(`li`,{children:(0,j.jsx)(r,{href:`#roadmap`,children:`Roadmap`})})]})})]})]})})}var de=e({NavigationMenuResponsiveHeader:()=>pe}),fe=[{id:`home`,label:`Home`,href:`#home`},{id:`product`,label:`Product`,children:[{id:`analytics`,label:`Analytics`,href:`#analytics`,description:`Dashboards, funnels and reports.`},{id:`automations`,label:`Automations`,href:`#automations`,description:`Rules that run on every event.`},{id:`integrations`,label:`Integrations`,href:`#integrations`,description:`Connect the tools you already use.`}]},{id:`resources`,label:`Resources`,children:[{id:`docs`,label:`Documentation`,href:`#docs`,description:`Guides and the API reference.`},{id:`changelog`,label:`Changelog`,href:`#changelog`,description:`What shipped this month.`}]},{id:`pricing`,label:`Pricing`,href:`#pricing`}];function pe(){let[e,t]=(0,R.useState)(`#analytics`);return(0,j.jsxs)(`div`,{className:`flex w-full max-w-3xl flex-col gap-3 text-[13px]`,children:[(0,j.jsxs)(`header`,{className:`flex h-12 items-center gap-3 rounded-lg border bg-background px-3`,children:[(0,j.jsx)(`span`,{className:`font-semibold`,children:`Acme`}),(0,j.jsx)(_,{items:fe,location:e,onNavigate:(e,n)=>{n.preventDefault(),t(e.href??`#${e.id}`)},className:`ms-auto`})]}),(0,j.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Current page: `,(0,j.jsx)(`span`,{className:`font-medium text-foreground`,children:e}),`. Narrow the window below 768 px to get the menu button and its sheet.`]})]})}var me=e({NavigationMenuSlotVariables:()=>ge}),he={"--dk-navmenu-radius":`9999px`,"--dk-navmenu-hover":`var(--accent)`,"--dk-navmenu-popup-radius":`calc(var(--radius) * 1)`};function ge(){return(0,j.jsx)(`div`,{style:he,children:(0,j.jsx)(p,{"aria-label":`Docs`,children:(0,j.jsxs)(m,{children:[(0,j.jsxs)(u,{value:`guides`,children:[(0,j.jsx)(g,{children:`Guides`}),(0,j.jsx)(h,{children:(0,j.jsxs)(`ul`,{className:`grid w-56 gap-1`,children:[(0,j.jsx)(`li`,{children:(0,j.jsx)(r,{href:`#start`,children:`Getting started`})}),(0,j.jsx)(`li`,{children:(0,j.jsx)(r,{href:`#theming`,children:`Theming`})})]})})]}),(0,j.jsx)(u,{children:(0,j.jsx)(r,{href:`#blog`,className:d(),children:`Blog`})})]})})})}var _e=e({NavigationMenuVertical:()=>ve});function ve(){return(0,j.jsx)(p,{"aria-label":`Settings`,orientation:`vertical`,className:`w-56`,children:(0,j.jsxs)(m,{children:[(0,j.jsxs)(u,{value:`account`,children:[(0,j.jsx)(g,{children:`Account`}),(0,j.jsx)(h,{children:(0,j.jsxs)(`ul`,{className:`grid gap-1`,children:[(0,j.jsx)(`li`,{children:(0,j.jsx)(r,{href:`#profile`,children:`Profile`})}),(0,j.jsx)(`li`,{children:(0,j.jsx)(r,{href:`#security`,children:`Security`})}),(0,j.jsx)(`li`,{children:(0,j.jsx)(r,{href:`#sessions`,children:`Sessions`})})]})})]}),(0,j.jsxs)(u,{value:`workspace`,children:[(0,j.jsx)(g,{children:`Workspace`}),(0,j.jsx)(h,{children:(0,j.jsxs)(`ul`,{className:`grid gap-1`,children:[(0,j.jsx)(`li`,{children:(0,j.jsx)(r,{href:`#members`,children:`Members`})}),(0,j.jsx)(`li`,{children:(0,j.jsx)(r,{href:`#billing`,active:!0,children:`Billing`})}),(0,j.jsx)(`li`,{children:(0,j.jsx)(r,{href:`#audit-log`,children:`Audit log`})}),(0,j.jsx)(`li`,{children:(0,j.jsx)(r,{href:`#webhooks`,children:`Webhooks`})})]})})]}),(0,j.jsx)(u,{children:(0,j.jsx)(r,{href:`#help`,className:d(),children:`Help`})})]})})}var K=`import type { ReactNode } from "react"
import { ChevronDown } from "lucide-react"
import { NavigationMenu } from "@kitora/primitives/react"

const ENTRY = "inline-flex h-9 w-max items-center justify-center gap-1 rounded-lg px-2.5 text-sm font-medium outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring data-popup-open:bg-muted/50 group-data-[orientation=vertical]/nav:w-full group-data-[orientation=vertical]/nav:justify-between"
const LINK = "flex items-center gap-1.5 rounded-lg p-2 text-sm outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring data-active:bg-muted/50"

/** A trigger with its chevron (\`NavigationMenu.Icon\`, turned over while the panel is open) and the panel it discloses. */
function Section({ value, label, children }: { value: string; label: string; children: ReactNode }) {
  return (
    <NavigationMenu.Item value={value} className="relative">
      <NavigationMenu.Trigger className={\`group \${ENTRY}\`}>
        {label}
        <NavigationMenu.Icon className="size-3 transition-transform data-popup-open:rotate-180">
          <ChevronDown className="size-3" aria-hidden="true" />
        </NavigationMenu.Icon>
      </NavigationMenu.Trigger>
      <NavigationMenu.Content className="w-max min-w-56 p-2 transition-opacity duration-200 data-starting-style:opacity-0 data-ending-style:opacity-0">{children}</NavigationMenu.Content>
    </NavigationMenu.Item>
  )
}

/** A link in a panel with a title and one line of description. */
function Described({ href, title, children }: { href: string; title: string; children: ReactNode }) {
  return (
    <li>
      <NavigationMenu.Link href={href} className={\`\${LINK} flex-col items-start gap-0.5\`}>
        <span className="font-medium">{title}</span>
        <span className="text-muted-foreground">{children}</span>
      </NavigationMenu.Link>
    </li>
  )
}

/**
 * A navigation menu built from the primitives' parts only: \`NavigationMenu.Root\` (a \`<nav>\`), \`List\`, \`Item\`, \`Trigger\` with its \`Icon\`,
 * \`Content\`, \`Link\` (\`active\` marks the current page), and one shared popup (\`Portal\`, \`Positioner\`, \`Popup\`, \`Viewport\`) that follows the
 * open trigger and takes its panel's size. The open item is controlled with \`value\` and \`onValueChange\`; \`orientation\` lays it out as a column.
 */
export function NavigationMenuBuildYourOwn({ value, onValueChange, orientation = "horizontal", delay, closeDelay }: { value?: string | null; onValueChange?: (value: string | null) => void; orientation?: "horizontal" | "vertical"; delay?: number; closeDelay?: number }) {
  const vertical = orientation === "vertical"
  return (
    <NavigationMenu.Root aria-label="Main" value={value} onValueChange={(next) => onValueChange?.(next as string | null)} orientation={orientation} delay={delay} closeDelay={closeDelay} data-orientation={orientation} className="group/nav relative flex max-w-max items-center">
      <NavigationMenu.List className={vertical ? "flex w-full list-none flex-col gap-0.5" : "flex list-none items-center gap-0.5"}>
        <Section value="getting-started" label="Getting started">
          <ul className="grid w-72 gap-1">
            <Described href="#introduction" title="Introduction">
              What Kitora is and how it is put together.
            </Described>
            <Described href="#installation" title="Installation">
              Add the packages and the stylesheet.
            </Described>
            <Described href="#theming" title="Theming">
              Tokens, dark mode and design languages.
            </Described>
          </ul>
        </Section>
        <Section value="handbook" label="Handbook">
          <ul className="grid w-56 gap-1">
            <li>
              <NavigationMenu.Link href="#accessibility" className={LINK}>
                Accessibility
              </NavigationMenu.Link>
            </li>
            <li>
              <NavigationMenu.Link href="#releases" active className={LINK}>
                Releases
              </NavigationMenu.Link>
            </li>
          </ul>
        </Section>
        <NavigationMenu.Item className="relative">
          <NavigationMenu.Link href="#github" className={ENTRY}>
            GitHub
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <NavigationMenu.Portal>
        <NavigationMenu.Positioner side={vertical ? "inline-end" : "bottom"} align={vertical ? "start" : "center"} sideOffset={8} className="isolate z-50 h-(--positioner-height) w-(--positioner-width) transition-[top,left,width,height] duration-300 data-instant:transition-none">
          <NavigationMenu.Popup className="relative h-(--popup-height,auto) w-(--popup-width,auto) rounded-xl bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-none transition-[opacity,scale] duration-300 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0">
            <NavigationMenu.Viewport className="relative size-full overflow-hidden rounded-[inherit]" />
          </NavigationMenu.Popup>
        </NavigationMenu.Positioner>
      </NavigationMenu.Portal>
    </NavigationMenu.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>S(()=>import(`./build-your-own-Cw5v6TuE.js`),[]));var q=`import { useState } from "react"
import { Button } from "@kitora/ui/button"
import { Card, CardContent } from "@kitora/ui/card"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@kitora/ui/navigation-menu"

const pages = [
  { title: "Overview", href: "#overview" },
  { title: "Reports", href: "#reports" },
  { title: "Customers", href: "#customers" },
]

/** An app header: the menu (with the current page marked \`active\`) beside the account button, in a Card. */
export function NavigationMenuComposeAppHeader() {
  const [page, setPage] = useState("Overview")
  return (
    <Card className="w-full max-w-2xl">
      <CardContent className="grid gap-3">
        <div className="flex items-center justify-between gap-2">
          <NavigationMenu aria-label="Application" className="flex-none">
            <NavigationMenuList>
              <NavigationMenuItem value="dashboards">
                <NavigationMenuTrigger>Dashboards</NavigationMenuTrigger>
                <NavigationMenuContent className="w-56">
                  <ul className="grid gap-1">
                    {pages.map(({ title, href }) => (
                      <li key={title}>
                        <NavigationMenuLink href={href} active={page === title} closeOnClick onClick={() => setPage(title)}>
                          {title}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#settings" active={page === "Settings"} className={navigationMenuTriggerStyle()} onClick={() => setPage("Settings")}>
                  Settings
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button size="sm">Invite</Button>
        </div>
        <p className="text-sm text-muted-foreground" aria-live="polite">
          Current page: {page}
        </p>
      </CardContent>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>S(()=>import(`./compose-C4K-Ji9J.js`),[]));var J=`import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@kitora/ui/navigation-menu"

export function NavigationMenuDefault() {
  return (
    <NavigationMenu aria-label="Main">
      <NavigationMenuList>
        <NavigationMenuItem value="getting-started">
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-72 gap-1">
              <li>
                <NavigationMenuLink href="#introduction" className="flex-col items-start gap-0.5">
                  <span className="font-medium">Introduction</span>
                  <span className="text-muted-foreground">What Kitora is and how it is put together.</span>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#installation" className="flex-col items-start gap-0.5">
                  <span className="font-medium">Installation</span>
                  <span className="text-muted-foreground">Add the packages and the stylesheet.</span>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#theming" className="flex-col items-start gap-0.5">
                  <span className="font-medium">Theming</span>
                  <span className="text-muted-foreground">Tokens, dark mode and design languages.</span>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value="handbook">
          <NavigationMenuTrigger>Handbook</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-56 gap-1">
              <li>
                <NavigationMenuLink href="#accessibility">Accessibility</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#releases" active>
                  Releases
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#changelog">Changelog</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#github" className={navigationMenuTriggerStyle()}>
            GitHub
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>S(()=>import(`./default-CSlmHEm6.js`),[]));var Y=`import { BarChart3Icon, BookOpenIcon, BoxesIcon, LifeBuoyIcon, LockKeyholeIcon, RocketIcon, ShieldCheckIcon, UsersIcon } from "lucide-react"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@kitora/ui/navigation-menu"

const products = [
  { title: "Analytics", text: "Funnels, cohorts and dashboards.", icon: BarChart3Icon, href: "#analytics" },
  { title: "Automation", text: "Workflows that run on their own.", icon: RocketIcon, href: "#automation" },
  { title: "Integrations", text: "Connect the tools you already use.", icon: BoxesIcon, href: "#integrations" },
  { title: "Security", text: "SSO, audit logs and roles.", icon: ShieldCheckIcon, href: "#security" },
]

const resources = [
  { title: "Documentation", icon: BookOpenIcon, href: "#documentation" },
  { title: "Help centre", icon: LifeBuoyIcon, href: "#help" },
  { title: "Community", icon: UsersIcon, href: "#community" },
]

/** Three panels of different sizes: the popup follows the active trigger and morphs its size, and the panels slide toward the side the new trigger is on. */
export function NavigationMenuMegaMenu() {
  return (
    <NavigationMenu aria-label="Product">
      <NavigationMenuList>
        <NavigationMenuItem value="products">
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent className="w-[min(34rem,calc(100vw-2rem))]">
            <ul className="grid gap-1 sm:grid-cols-2">
              {products.map(({ title, text, icon: Icon, href }) => (
                <li key={title}>
                  <NavigationMenuLink href={href} className="items-start gap-3 p-3">
                    <Icon className="mt-0.5 text-muted-foreground" />
                    <span className="grid gap-0.5">
                      <span className="font-medium">{title}</span>
                      <span className="text-muted-foreground">{text}</span>
                    </span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value="solutions">
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent className="w-[min(16rem,calc(100vw-2rem))]">
            <ul className="grid gap-1">
              <li>
                <NavigationMenuLink href="#startups">For startups</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#agencies">For agencies</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#enterprise">
                  <LockKeyholeIcon className="text-muted-foreground" />
                  For enterprise
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value="resources">
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent className="w-[min(24rem,calc(100vw-2rem))]">
            <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
              <NavigationMenuLink href="#guides" className="flex-col items-start justify-end gap-1 rounded-lg bg-muted p-4">
                <span className="font-medium">Guides</span>
                <span className="text-muted-foreground">Step by step, from the first project to production.</span>
              </NavigationMenuLink>
              <ul className="grid content-start gap-1 sm:w-40">
                {resources.map(({ title, icon: Icon, href }) => (
                  <li key={title}>
                    <NavigationMenuLink href={href}>
                      <Icon className="text-muted-foreground" />
                      {title}
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#pricing" className={navigationMenuTriggerStyle()}>
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>S(()=>import(`./mega-menu-Cw3-B3ur.js`),[]));var X=`import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from "@kitora/ui/navigation-menu"

/**
 * A navigation menu inside a panel: the nested menu is a \`NavigationMenu\` with \`positioner={false}\` and a \`NavigationMenuViewport\` of its own, so its
 * panels open inline, under its list. ← and → walk its triggers, Enter or Space opens one, Escape closes the nested panel first.
 */
export function NavigationMenuNested() {
  return (
    <NavigationMenu aria-label="Library">
      <NavigationMenuList>
        <NavigationMenuItem value="library">
          <NavigationMenuTrigger>Library</NavigationMenuTrigger>
          <NavigationMenuContent className="w-80">
            <NavigationMenu aria-label="Library sections" positioner={false} className="max-w-none flex-col items-stretch">
              <NavigationMenuList className="flex-none justify-start">
                <NavigationMenuItem value="components">
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-0 w-full">
                    <ul className="grid gap-1">
                      <li>
                        <NavigationMenuLink href="#buttons">Buttons</NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink href="#forms">Forms</NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink href="#overlays">Overlays</NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem value="hooks">
                  <NavigationMenuTrigger>Hooks</NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-0 w-full">
                    <ul className="grid gap-1">
                      <li>
                        <NavigationMenuLink href="#use-render">useRender</NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink href="#use-button">useButton</NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#recipes">Recipes</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
              <NavigationMenuViewport />
            </NavigationMenu>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value="updates">
          <NavigationMenuTrigger>Updates</NavigationMenuTrigger>
          <NavigationMenuContent className="w-56">
            <ul className="grid gap-1">
              <li>
                <NavigationMenuLink href="#releases">Releases</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#roadmap">Roadmap</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>S(()=>import(`./nested-CRBFVW9k.js`),[]));var Z=`import { useState } from "react"
import { ShellNavigationMenu } from "@kitora/shell"
import type { NavItem } from "@kitora/sidebar"

const NAV: readonly NavItem[] = [
  { id: "home", label: "Home", href: "#home" },
  {
    id: "product",
    label: "Product",
    children: [
      { id: "analytics", label: "Analytics", href: "#analytics", description: "Dashboards, funnels and reports." },
      { id: "automations", label: "Automations", href: "#automations", description: "Rules that run on every event." },
      { id: "integrations", label: "Integrations", href: "#integrations", description: "Connect the tools you already use." },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    children: [
      { id: "docs", label: "Documentation", href: "#docs", description: "Guides and the API reference." },
      { id: "changelog", label: "Changelog", href: "#changelog", description: "What shipped this month." },
    ],
  },
  { id: "pricing", label: "Pricing", href: "#pricing" },
]

export function NavigationMenuResponsiveHeader() {
  const [location, setLocation] = useState("#analytics")
  return (
    <div className="flex w-full max-w-3xl flex-col gap-3 text-[13px]">
      <header className="flex h-12 items-center gap-3 rounded-lg border bg-background px-3">
        <span className="font-semibold">Acme</span>
        <ShellNavigationMenu
          items={NAV}
          location={location}
          onNavigate={(item, e) => {
            e.preventDefault()
            setLocation(item.href ?? \`#\${item.id}\`)
          }}
          className="ms-auto"
        />
      </header>
      <p className="text-muted-foreground">
        Current page: <span className="font-medium text-foreground">{location}</span>. Narrow the window below 768 px to get the menu button and its sheet.
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>S(()=>import(`./responsive-header-BoRrPRGF.js`),[]));var Q=`import type { CSSProperties } from "react"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@kitora/ui/navigation-menu"

// The menu's own variables, set on an ancestor: pill triggers and links, an accent hover fill and a squarer popup.
const PILL = {
  "--dk-navmenu-radius": "9999px",
  "--dk-navmenu-hover": "var(--accent)",
  "--dk-navmenu-popup-radius": "calc(var(--radius) * 1)",
} as CSSProperties

export function NavigationMenuSlotVariables() {
  return (
    <div style={PILL}>
      <NavigationMenu aria-label="Docs">
        <NavigationMenuList>
          <NavigationMenuItem value="guides">
            <NavigationMenuTrigger>Guides</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-56 gap-1">
                <li>
                  <NavigationMenuLink href="#start">Getting started</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#theming">Theming</NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#blog" className={navigationMenuTriggerStyle()}>
              Blog
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>S(()=>import(`./slot-variables-B9GnsgNX.js`),[]));var $=`import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@kitora/ui/navigation-menu"

/** A vertical menu: ↑ and ↓ walk the list, → (← in right to left text) opens a panel beside its trigger and moves into it. */
export function NavigationMenuVertical() {
  return (
    <NavigationMenu aria-label="Settings" orientation="vertical" className="w-56">
      <NavigationMenuList>
        <NavigationMenuItem value="account">
          <NavigationMenuTrigger>Account</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-1">
              <li>
                <NavigationMenuLink href="#profile">Profile</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#security">Security</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#sessions">Sessions</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value="workspace">
          <NavigationMenuTrigger>Workspace</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-1">
              <li>
                <NavigationMenuLink href="#members">Members</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#billing" active>
                  Billing
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#audit-log">Audit log</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#webhooks">Webhooks</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#help" className={navigationMenuTriggerStyle()}>
            Help
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>S(()=>import(`./vertical-Bcfquk9D.js`),[]));var ye={"./demos/navigation-menu/build-your-own.tsx":A,"./demos/navigation-menu/compose.tsx":L,"./demos/navigation-menu/default.tsx":ce,"./demos/navigation-menu/mega-menu.tsx":H,"./demos/navigation-menu/nested.tsx":le,"./demos/navigation-menu/responsive-header.tsx":de,"./demos/navigation-menu/slot-variables.tsx":me,"./demos/navigation-menu/vertical.tsx":_e},be={"./demos/navigation-menu/build-your-own.tsx":K,"./demos/navigation-menu/compose.tsx":q,"./demos/navigation-menu/default.tsx":J,"./demos/navigation-menu/mega-menu.tsx":Y,"./demos/navigation-menu/nested.tsx":X,"./demos/navigation-menu/responsive-header.tsx":Z,"./demos/navigation-menu/slot-variables.tsx":Q,"./demos/navigation-menu/vertical.tsx":$};export{ye as modules,be as sources};