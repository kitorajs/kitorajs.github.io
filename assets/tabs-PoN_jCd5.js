import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{i as n,n as r,r as i,t as a}from"./TabsTab-CVxbqcBw.js";import{a as o,i as s,n as c,o as l,r as u,t as d}from"./tabs-oUW2hCtt.js";import{t as f}from"./switch-Clz4Lth_.js";import{t as p}from"./input-C8M4VLUF.js";import{Bc as m,Cc as h,Ic as g,ti as _}from"./index-q72zUtm9.js";import{t as v}from"./label-DjxTNoON.js";var y=e({TabsBuildYourOwn:()=>S}),b=g(),x=[{value:`account`,label:`Account`,panel:`Account-level settings and profile.`},{value:`billing`,label:`Billing`,panel:`Plan, invoices, payment methods.`},{value:`api`,label:`API`,panel:`API keys, rate limits, webhooks.`}];function S({value:e,onValueChange:t}){return(0,b.jsxs)(r,{defaultValue:e===void 0?`account`:void 0,value:e,onValueChange:e=>t?.(e),className:`flex w-full max-w-md flex-col gap-3`,children:[(0,b.jsxs)(n,{className:`relative flex gap-4 border-b border-border`,children:[x.map(e=>(0,b.jsx)(a,{value:e.value,className:`relative z-[1] pb-2 text-sm font-medium text-muted-foreground outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring data-active:text-foreground`,children:e.label},e.value)),(0,b.jsx)(l,{className:`absolute bottom-[-1px] h-0.5 w-(--active-tab-width) bg-foreground [left:var(--active-tab-left)] transition-[left,width] duration-200 motion-reduce:transition-none`})]}),x.map(e=>(0,b.jsx)(i,{value:e.value,className:`text-sm text-muted-foreground outline-none`,children:e.panel},e.value))]})}var C=e({TabsComposeSettingsPanel:()=>T}),w=t(m(),1);function T(){let e=(0,w.useId)(),t=(0,w.useId)();return(0,b.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,b.jsxs)(d,{defaultValue:`profile`,className:`w-full max-w-sm`,children:[(0,b.jsxs)(s,{children:[(0,b.jsx)(o,{value:`profile`,children:`Profile`}),(0,b.jsx)(o,{value:`security`,children:`Security`})]}),(0,b.jsxs)(c,{value:`profile`,className:`mt-3 grid gap-3`,children:[(0,b.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,b.jsx)(v,{htmlFor:e,children:`Display name`}),(0,b.jsx)(p,{id:e,defaultValue:`Ada Lovelace`})]}),(0,b.jsx)(_,{className:`justify-self-start`,children:`Save`})]}),(0,b.jsx)(c,{value:`security`,className:`mt-3`,children:(0,b.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,b.jsx)(v,{htmlFor:t,children:`Two-factor authentication`}),(0,b.jsx)(f,{id:t,defaultChecked:!0})]})})]})})}var E=e({TabsDefault:()=>D});function D(){return(0,b.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,b.jsxs)(d,{defaultValue:`account`,className:`w-full max-w-md`,children:[(0,b.jsxs)(s,{children:[(0,b.jsx)(o,{value:`account`,children:`Account`}),(0,b.jsx)(o,{value:`billing`,children:`Billing`}),(0,b.jsx)(o,{value:`api`,children:`API`})]}),(0,b.jsx)(c,{value:`account`,className:`mt-3 text-sm text-muted-foreground`,children:`Account-level settings and profile.`}),(0,b.jsx)(c,{value:`billing`,className:`mt-3 text-sm text-muted-foreground`,children:`Plan, invoices, payment methods.`}),(0,b.jsx)(c,{value:`api`,className:`mt-3 text-sm text-muted-foreground`,children:`API keys, rate limits, webhooks.`})]})})}var O=e({TabsIndicatorDemo:()=>k});function k(){return(0,b.jsxs)(`div`,{className:`flex flex-col items-center gap-6`,children:[(0,b.jsx)(d,{defaultValue:`overview`,children:(0,b.jsxs)(s,{children:[(0,b.jsx)(o,{value:`overview`,children:`Overview`}),(0,b.jsx)(o,{value:`analytics`,children:`Analytics`}),(0,b.jsx)(o,{value:`reports`,children:`Reports`}),(0,b.jsx)(u,{})]})}),(0,b.jsx)(d,{defaultValue:`files`,children:(0,b.jsxs)(s,{variant:`line`,children:[(0,b.jsx)(o,{value:`files`,children:`Files`}),(0,b.jsx)(o,{value:`issues`,children:`Issues`}),(0,b.jsx)(o,{value:`pull-requests`,children:`Pull requests`}),(0,b.jsx)(u,{})]})})]})}var A=e({TabsScrollable:()=>M}),j=[`General`,`Members`,`Billing`,`Invoices`,`API keys`,`Webhooks`,`Integrations`,`Audit log`,`Security`,`Advanced`];function M(){return(0,b.jsx)(d,{defaultValue:`General`,className:`w-full max-w-sm`,children:(0,b.jsx)(s,{scrollable:!0,variant:`line`,"aria-label":`Settings sections`,children:j.map(e=>(0,b.jsx)(o,{value:e,children:e},e))})})}var N=e({TabsSizesFill:()=>F}),P=[`sm`,`default`,`lg`];function F(){return(0,b.jsxs)(`div`,{className:`flex w-full max-w-md flex-col gap-4`,children:[P.map(e=>(0,b.jsx)(d,{defaultValue:`day`,children:(0,b.jsxs)(s,{size:e,children:[(0,b.jsx)(o,{value:`day`,children:`Day`}),(0,b.jsx)(o,{value:`week`,children:`Week`}),(0,b.jsx)(o,{value:`month`,children:`Month`})]})},e)),(0,b.jsx)(d,{defaultValue:`day`,children:(0,b.jsxs)(s,{fill:!0,children:[(0,b.jsx)(o,{value:`day`,children:`Day`}),(0,b.jsx)(o,{value:`week`,children:`Week`}),(0,b.jsx)(o,{value:`month`,children:`Month`})]})})]})}var I=`import type { ReactNode } from "react"
import { Tabs } from "@kitora/primitives/react"

/** One tab and its panel. */
interface Tab {
  readonly value: string
  readonly label: string
  readonly panel: ReactNode
}

const TABS: readonly Tab[] = [
  { value: "account", label: "Account", panel: "Account-level settings and profile." },
  { value: "billing", label: "Billing", panel: "Plan, invoices, payment methods." },
  { value: "api", label: "API", panel: "API keys, rate limits, webhooks." },
]

/** Tabs built from the primitives' parts only: \`Tabs.Root\`, \`List\`, \`Tab\`, \`Indicator\` and \`Panel\`, styled on their state attributes. */
export function TabsBuildYourOwn({ value, onValueChange }: { value?: string; onValueChange?: (value: string) => void }) {
  return (
    <Tabs.Root
      defaultValue={value === undefined ? "account" : undefined}
      value={value}
      onValueChange={(next) => onValueChange?.(next as string)}
      className="flex w-full max-w-md flex-col gap-3"
    >
      <Tabs.List className="relative flex gap-4 border-b border-border">
        {TABS.map((tab) => (
          <Tabs.Tab key={tab.value} value={tab.value} className="relative z-[1] pb-2 text-sm font-medium text-muted-foreground outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring data-active:text-foreground">
            {tab.label}
          </Tabs.Tab>
        ))}
        <Tabs.Indicator className="absolute bottom-[-1px] h-0.5 w-(--active-tab-width) bg-foreground [left:var(--active-tab-left)] transition-[left,width] duration-200 motion-reduce:transition-none" />
      </Tabs.List>
      {TABS.map((tab) => (
        <Tabs.Panel key={tab.value} value={tab.value} className="text-sm text-muted-foreground outline-none">
          {tab.panel}
        </Tabs.Panel>
      ))}
    </Tabs.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>h(()=>import(`./build-your-own-WW0ifHA3.js`),[]));var L=`import { useId } from "react"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { Label } from "@kitora/ui/label"
import { Switch } from "@kitora/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@kitora/ui/tabs"

export function TabsComposeSettingsPanel() {
  const nameId = useId()
  const twoFaId = useId()
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Tabs defaultValue="profile" className="w-full max-w-sm">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="mt-3 grid gap-3">
          <div className="grid gap-1.5">
            <Label htmlFor={nameId}>Display name</Label>
            <Input id={nameId} defaultValue="Ada Lovelace" />
          </div>
          <Button className="justify-self-start">Save</Button>
        </TabsContent>
        <TabsContent value="security" className="mt-3">
          <div className="flex items-center justify-between gap-3">
            <Label htmlFor={twoFaId}>Two-factor authentication</Label>
            <Switch id={twoFaId} defaultChecked />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>h(()=>import(`./compose-CyOSPOVD.js`),[]));var R=`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@kitora/ui/tabs"

export function TabsDefault() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Tabs defaultValue="account" className="w-full max-w-md">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="mt-3 text-sm text-muted-foreground">
          Account-level settings and profile.
        </TabsContent>
        <TabsContent value="billing" className="mt-3 text-sm text-muted-foreground">
          Plan, invoices, payment methods.
        </TabsContent>
        <TabsContent value="api" className="mt-3 text-sm text-muted-foreground">
          API keys, rate limits, webhooks.
        </TabsContent>
      </Tabs>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>h(()=>import(`./default-DxT3AEcT.js`),[]));var z=`import { Tabs, TabsIndicator, TabsList, TabsTrigger } from "@kitora/ui/tabs"

export function TabsIndicatorDemo() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsIndicator />
        </TabsList>
      </Tabs>
      <Tabs defaultValue="files">
        <TabsList variant="line">
          <TabsTrigger value="files">Files</TabsTrigger>
          <TabsTrigger value="issues">Issues</TabsTrigger>
          <TabsTrigger value="pull-requests">Pull requests</TabsTrigger>
          <TabsIndicator />
        </TabsList>
      </Tabs>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>h(()=>import(`./indicator-C0-00RI_.js`),[]));var B=`import { Tabs, TabsList, TabsTrigger } from "@kitora/ui/tabs"

const sections = ["General", "Members", "Billing", "Invoices", "API keys", "Webhooks", "Integrations", "Audit log", "Security", "Advanced"]

export function TabsScrollable() {
  return (
    <Tabs defaultValue="General" className="w-full max-w-sm">
      <TabsList scrollable variant="line" aria-label="Settings sections">
        {sections.map((s) => (
          <TabsTrigger key={s} value={s}>
            {s}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(B,()=>h(()=>import(`./scrollable-DV42SYql.js`),[]));var V=`import { Tabs, TabsList, TabsTrigger } from "@kitora/ui/tabs"

const sizes = ["sm", "default", "lg"] as const

export function TabsSizesFill() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      {sizes.map((size) => (
        <Tabs key={size} defaultValue="day">
          <TabsList size={size}>
            <TabsTrigger value="day">Day</TabsTrigger>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
          </TabsList>
        </Tabs>
      ))}
      <Tabs defaultValue="day">
        <TabsList fill>
          <TabsTrigger value="day">Day</TabsTrigger>
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="month">Month</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(V,()=>h(()=>import(`./sizes-fill-DCx1gkty.js`),[]));var H={"./demos/tabs/build-your-own.tsx":y,"./demos/tabs/compose.tsx":C,"./demos/tabs/default.tsx":E,"./demos/tabs/indicator.tsx":O,"./demos/tabs/scrollable.tsx":A,"./demos/tabs/sizes-fill.tsx":N},U={"./demos/tabs/build-your-own.tsx":I,"./demos/tabs/compose.tsx":L,"./demos/tabs/default.tsx":R,"./demos/tabs/indicator.tsx":z,"./demos/tabs/scrollable.tsx":B,"./demos/tabs/sizes-fill.tsx":V};export{H as modules,U as sources};