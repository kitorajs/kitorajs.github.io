import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./switch-CA6hUnoS.js";import{t as n}from"./bell-QnxoqhU6.js";import{t as r}from"./credit-card-ClJwDVr8.js";import{s as i}from"./kit-docs-CvNs0WqT.js";import{t as a}from"./folder-BMIhIs7B.js";import{t as o}from"./house-Bw0k7HMz.js";import{t as s}from"./key-round-DDzAVqxg.js";import{t as c}from"./log-out-CDXsOmz0.js";import{t as l}from"./settings-BYIHPtJX.js";import{t as u}from"./shield-CFfwHWnr.js";import{t as d}from"./users-DvvoKKua.js";import{t as f}from"./user-BsKaLW_5.js";import{t as p}from"./webhook-DEynp6mS.js";import{t as m}from"./input-2rqm_FXH.js";import{Bc as h,Cc as g,Ci as _,Ic as v,hi as y,ti as b}from"./index-9y5uwRd3.js";import{t as x}from"./app-shell-BnG-pVzl.js";import{i as S,r as C}from"./sidebar-VPUXi6Th.js";import{n as w}from"./breadcrumbs-D9HZluIH.js";import{r as T,s as E}from"./header-DF1yBiUt.js";import{r as D}from"./page-CZ6HYoN0.js";import{i as O,n as k,r as A}from"./settings-DTchWft3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as j}from"./example-CZLJLtIC.js";import{t as M}from"./-kits.shell.shared-C5FDgny3.js";var N=e(h(),1),P=v(),F={home:o,folder:a,settings:l},I=[{id:`top`,label:``,items:[{id:`home`,label:`Home`,href:`/home`,icon:{name:`home`}},{id:`projects`,label:`Projects`,href:`/projects`,icon:{name:`folder`}}]},{id:`admin`,label:``,items:[{id:`settings`,label:`Settings`,href:`/settings`,icon:{name:`settings`},match:`prefix`}]}],L=[{id:`profile`,label:`Profile`,group:`Account`,icon:(0,P.jsx)(f,{})},{id:`notifications`,label:`Notifications`,group:`Account`,icon:(0,P.jsx)(n,{})},{id:`appearance`,label:`Appearance`,group:`Account`,icon:(0,P.jsx)(_,{})},{id:`security`,label:`Security`,group:`Account`,icon:(0,P.jsx)(u,{})},{id:`members`,label:`Members`,group:`Workspace`,icon:(0,P.jsx)(d,{})},{id:`billing`,label:`Billing`,group:`Workspace`,icon:(0,P.jsx)(r,{})},{id:`api`,label:`API keys`,group:`Developer`,icon:(0,P.jsx)(s,{})},{id:`webhooks`,label:`Webhooks`,group:`Developer`,icon:(0,P.jsx)(p,{})}],R=[{name:`Dana Wu`,email:`dana@acme.dev`,role:`Owner`},{name:`Marco Ruiz`,email:`marco@acme.dev`,role:`Admin`},{name:`Priya Shah`,email:`priya@acme.dev`,role:`Member`},{name:`Sam Lee`,email:`sam@acme.dev`,role:`Member`}];function z({id:e,label:n,description:r,defaultOn:i}){let[a,o]=(0,N.useState)(i);return(0,P.jsx)(A,{label:n,description:r,htmlFor:e,children:(0,P.jsx)(t,{id:e,checked:a,onCheckedChange:o})})}function B({value:e,options:t,onChange:n,label:r}){return(0,P.jsx)(`div`,{role:`radiogroup`,"aria-label":r,className:`inline-flex h-7 rounded-md border p-0.5`,children:t.map(t=>(0,P.jsx)(`button`,{type:`button`,role:`radio`,"aria-checked":t===e,onClick:()=>n(t),className:`rounded-[5px] px-2 text-[12.5px] text-muted-foreground capitalize aria-checked:bg-accent aria-checked:text-foreground`,children:t},t))})}function V({id:e}){let[t,n]=(0,N.useState)(`system`),[r,i]=(0,N.useState)(`compact`);switch(e){case`profile`:return(0,P.jsxs)(O,{title:`Profile`,description:`How you appear to your teammates.`,children:[(0,P.jsx)(A,{label:`Full name`,htmlFor:`name`,children:(0,P.jsx)(m,{id:`name`,defaultValue:`Dana Wu`,className:`h-7 w-56 text-[13px]`})}),(0,P.jsx)(A,{label:`Email`,description:`Used to sign in and for notifications.`,htmlFor:`email`,children:(0,P.jsx)(m,{id:`email`,type:`email`,defaultValue:`dana@acme.dev`,className:`h-7 w-56 text-[13px]`})}),(0,P.jsx)(A,{label:`Time zone`,description:`Reports and schedules use it.`,children:(0,P.jsx)(`span`,{className:`text-[13px] text-muted-foreground`,children:`Europe/Berlin (UTC+2)`})})]});case`notifications`:return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(O,{title:`Email`,description:`What we send to your inbox.`,children:[(0,P.jsx)(z,{id:`n-digest`,label:`Daily digest`,description:`A summary of yesterday's activity at 8:00.`,defaultOn:!0}),(0,P.jsx)(z,{id:`n-mentions`,label:`Mentions`,description:`When someone @mentions you.`,defaultOn:!0}),(0,P.jsx)(z,{id:`n-billing`,label:`Billing`,description:`Invoices and failed payments.`,defaultOn:!1})]}),(0,P.jsx)(O,{title:`Push`,children:(0,P.jsx)(z,{id:`n-push`,label:`Desktop notifications`,description:`Shown while the app is open in a tab.`,defaultOn:!1})})]});case`appearance`:return(0,P.jsxs)(O,{title:`Appearance`,children:[(0,P.jsx)(A,{label:`Theme`,children:(0,P.jsx)(B,{label:`Theme`,value:t,options:[`light`,`dark`,`system`],onChange:n})}),(0,P.jsx)(A,{label:`Density`,description:`Compact fits more rows on screen.`,children:(0,P.jsx)(B,{label:`Density`,value:r,options:[`compact`,`comfortable`],onChange:i})})]});case`security`:return(0,P.jsxs)(O,{title:`Security`,children:[(0,P.jsx)(z,{id:`s-2fa`,label:`Two-factor authentication`,description:`Ask for a code from your authenticator app at sign-in.`,defaultOn:!0}),(0,P.jsx)(A,{label:`Active sessions`,description:`3 devices, last seen today.`,children:(0,P.jsx)(b,{variant:`outline`,size:`sm`,children:`Sign out others`})})]});case`members`:return(0,P.jsx)(O,{title:`Members`,description:`4 of 25 seats used.`,children:R.map(e=>(0,P.jsx)(A,{label:e.name,description:e.email,children:(0,P.jsx)(`span`,{className:y(`rounded-full px-2 py-0.5 text-[11.5px]`,e.role===`Owner`?`bg-primary/10 text-primary`:`bg-muted text-muted-foreground`),children:e.role})},e.email))});case`billing`:return(0,P.jsxs)(O,{title:`Plan`,description:`Billed yearly. Next invoice on 2027-01-01.`,children:[(0,P.jsx)(A,{label:`Pro`,description:`25 seats · unlimited reports`,children:(0,P.jsx)(`span`,{className:`text-[13px] font-medium tabular-nums`,children:`$1,188 / yr`})}),(0,P.jsx)(A,{label:`Payment method`,description:`Visa ending 4242, expires 08/28`,children:(0,P.jsx)(b,{variant:`outline`,size:`sm`,children:`Update`})})]});case`api`:return(0,P.jsxs)(O,{title:`API keys`,description:`Keys act as you; keep them secret.`,children:[(0,P.jsx)(A,{label:`Production`,description:`Created 2026-03-02 · last used 2 min ago`,children:(0,P.jsx)(`code`,{className:`rounded bg-muted px-1.5 py-0.5 text-[12px]`,children:`sk_demo_••••4242`})}),(0,P.jsx)(A,{label:`Staging`,description:`Created 2026-05-19 · never used`,children:(0,P.jsx)(`code`,{className:`rounded bg-muted px-1.5 py-0.5 text-[12px]`,children:`sk_demo_••••1881`})})]});default:return(0,P.jsx)(O,{title:`Webhooks`,description:`We POST events to these URLs.`,children:(0,P.jsx)(A,{label:`https://hooks.acme.dev/billing`,description:`invoice.paid, invoice.failed`,children:(0,P.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 text-[12.5px]`,children:[(0,P.jsx)(`span`,{className:`size-1.5 rounded-full bg-emerald-500`}),`Healthy`]})})})}}function H(){let[e,t]=(0,N.useState)(`notifications`),n=L.find(t=>t.id===e);return(0,P.jsx)(x,{location:`/settings`,provider:{icons:F,label:`App`},sidebar:(0,P.jsx)(C,{children:(0,P.jsx)(S,{nav:I,onNavigate:(e,t)=>t.preventDefault()})}),header:(0,P.jsx)(T,{start:(0,P.jsx)(w,{items:[{id:`settings`,label:`Settings`,href:`/settings`},{id:`group`,label:n?.group??``},{id:e,label:n?.label??``}],onNavigate:(e,t)=>t.preventDefault()}),end:(0,P.jsx)(E,{name:`Dana Wu`,email:`dana@acme.dev`,actions:[{id:`out`,label:`Sign out`,icon:(0,P.jsx)(c,{}),destructive:!0}]})}),children:(0,P.jsx)(D,{title:`Settings`,description:`Manage your account and the Acme workspace.`,flush:!0,children:(0,P.jsx)(k,{sections:L,active:e,onSelect:(e,n)=>{n.preventDefault(),t(e.id)},children:(0,P.jsx)(V,{id:e},e)})})})}var U=`import { useState, type ReactNode } from "react"
import { AppShell, ShellBreadcrumbs, ShellHeader, ShellPage, ShellUserMenu, SettingsLayout, SettingsRow, SettingsSection, type SettingsSectionLink } from "@kitora/shell"
import { Sidebar, SidebarNav, type NavSection, type SidebarIconComponent } from "@kitora/sidebar"
import { Button } from "@kitora/ui/button"
import { Input } from "@kitora/ui/input"
import { Switch } from "@kitora/ui/switch"
import { cn } from "@kitora/ui/utils"
import { Bell, CreditCard, Folder, Home, KeyRound, LogOut, Palette, Settings, Shield, User, Users, Webhook } from "lucide-react"

// The settings area of a product: the app's sidebar stays, the content becomes a settings
// layout with a grouped section nav (account, workspace, developer), each section a set of
// rows with real controls. Narrow the window and the section nav turns into a row of links.

const ICONS: Readonly<Record<string, SidebarIconComponent>> = { home: Home, folder: Folder, settings: Settings }
const NAV: readonly NavSection[] = [
  { id: "top", label: "", items: [{ id: "home", label: "Home", href: "/home", icon: { name: "home" } }, { id: "projects", label: "Projects", href: "/projects", icon: { name: "folder" } }] },
  { id: "admin", label: "", items: [{ id: "settings", label: "Settings", href: "/settings", icon: { name: "settings" }, match: "prefix" }] },
]

const SECTIONS: readonly SettingsSectionLink[] = [
  { id: "profile", label: "Profile", group: "Account", icon: <User /> },
  { id: "notifications", label: "Notifications", group: "Account", icon: <Bell /> },
  { id: "appearance", label: "Appearance", group: "Account", icon: <Palette /> },
  { id: "security", label: "Security", group: "Account", icon: <Shield /> },
  { id: "members", label: "Members", group: "Workspace", icon: <Users /> },
  { id: "billing", label: "Billing", group: "Workspace", icon: <CreditCard /> },
  { id: "api", label: "API keys", group: "Developer", icon: <KeyRound /> },
  { id: "webhooks", label: "Webhooks", group: "Developer", icon: <Webhook /> },
]

const MEMBERS = [
  { name: "Dana Wu", email: "dana@acme.dev", role: "Owner" },
  { name: "Marco Ruiz", email: "marco@acme.dev", role: "Admin" },
  { name: "Priya Shah", email: "priya@acme.dev", role: "Member" },
  { name: "Sam Lee", email: "sam@acme.dev", role: "Member" },
] as const

function Toggle({ id, label, description, defaultOn }: { readonly id: string; readonly label: string; readonly description: string; readonly defaultOn: boolean }) {
  const [on, setOn] = useState(defaultOn)
  return (
    <SettingsRow label={label} description={description} htmlFor={id}>
      <Switch id={id} checked={on} onCheckedChange={setOn} />
    </SettingsRow>
  )
}

function Choice<V extends string>({ value, options, onChange, label }: { readonly value: V; readonly options: readonly V[]; readonly onChange: (v: V) => void; readonly label: string }) {
  return (
    <div role="radiogroup" aria-label={label} className="inline-flex h-7 rounded-md border p-0.5">
      {options.map((o) => (
        <button key={o} type="button" role="radio" aria-checked={o === value} onClick={() => onChange(o)} className="rounded-[5px] px-2 text-[12.5px] text-muted-foreground capitalize aria-checked:bg-accent aria-checked:text-foreground">{o}</button>
      ))}
    </div>
  )
}

function SectionBody({ id }: { readonly id: string }): ReactNode {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system")
  const [density, setDensity] = useState<"compact" | "comfortable">("compact")
  switch (id) {
    case "profile":
      return (
        <SettingsSection title="Profile" description="How you appear to your teammates.">
          <SettingsRow label="Full name" htmlFor="name"><Input id="name" defaultValue="Dana Wu" className="h-7 w-56 text-[13px]" /></SettingsRow>
          <SettingsRow label="Email" description="Used to sign in and for notifications." htmlFor="email"><Input id="email" type="email" defaultValue="dana@acme.dev" className="h-7 w-56 text-[13px]" /></SettingsRow>
          <SettingsRow label="Time zone" description="Reports and schedules use it."><span className="text-[13px] text-muted-foreground">Europe/Berlin (UTC+2)</span></SettingsRow>
        </SettingsSection>
      )
    case "notifications":
      return (
        <>
          <SettingsSection title="Email" description="What we send to your inbox.">
            <Toggle id="n-digest" label="Daily digest" description="A summary of yesterday's activity at 8:00." defaultOn />
            <Toggle id="n-mentions" label="Mentions" description="When someone @mentions you." defaultOn />
            <Toggle id="n-billing" label="Billing" description="Invoices and failed payments." defaultOn={false} />
          </SettingsSection>
          <SettingsSection title="Push">
            <Toggle id="n-push" label="Desktop notifications" description="Shown while the app is open in a tab." defaultOn={false} />
          </SettingsSection>
        </>
      )
    case "appearance":
      return (
        <SettingsSection title="Appearance">
          <SettingsRow label="Theme"><Choice label="Theme" value={theme} options={["light", "dark", "system"] as const} onChange={setTheme} /></SettingsRow>
          <SettingsRow label="Density" description="Compact fits more rows on screen."><Choice label="Density" value={density} options={["compact", "comfortable"] as const} onChange={setDensity} /></SettingsRow>
        </SettingsSection>
      )
    case "security":
      return (
        <SettingsSection title="Security">
          <Toggle id="s-2fa" label="Two-factor authentication" description="Ask for a code from your authenticator app at sign-in." defaultOn />
          <SettingsRow label="Active sessions" description="3 devices, last seen today."><Button variant="outline" size="sm">Sign out others</Button></SettingsRow>
        </SettingsSection>
      )
    case "members":
      return (
        <SettingsSection title="Members" description="4 of 25 seats used.">
          {MEMBERS.map((m) => (
            <SettingsRow key={m.email} label={m.name} description={m.email}><span className={cn("rounded-full px-2 py-0.5 text-[11.5px]", m.role === "Owner" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground")}>{m.role}</span></SettingsRow>
          ))}
        </SettingsSection>
      )
    case "billing":
      return (
        <SettingsSection title="Plan" description="Billed yearly. Next invoice on 2027-01-01.">
          <SettingsRow label="Pro" description="25 seats · unlimited reports"><span className="text-[13px] font-medium tabular-nums">$1,188 / yr</span></SettingsRow>
          <SettingsRow label="Payment method" description="Visa ending 4242, expires 08/28"><Button variant="outline" size="sm">Update</Button></SettingsRow>
        </SettingsSection>
      )
    case "api":
      return (
        <SettingsSection title="API keys" description="Keys act as you; keep them secret.">
          <SettingsRow label="Production" description="Created 2026-03-02 · last used 2 min ago"><code className="rounded bg-muted px-1.5 py-0.5 text-[12px]">sk_demo_••••4242</code></SettingsRow>
          <SettingsRow label="Staging" description="Created 2026-05-19 · never used"><code className="rounded bg-muted px-1.5 py-0.5 text-[12px]">sk_demo_••••1881</code></SettingsRow>
        </SettingsSection>
      )
    default:
      return (
        <SettingsSection title="Webhooks" description="We POST events to these URLs.">
          <SettingsRow label="https://hooks.acme.dev/billing" description="invoice.paid, invoice.failed"><span className="inline-flex items-center gap-1.5 text-[12.5px]"><span className="size-1.5 rounded-full bg-emerald-500" />Healthy</span></SettingsRow>
        </SettingsSection>
      )
  }
}

export function SettingsArea() {
  const [section, setSection] = useState("notifications")
  const current = SECTIONS.find((s) => s.id === section)
  return (
    <AppShell
      location="/settings"
      provider={{ icons: ICONS, label: "App" }}
      sidebar={<Sidebar><SidebarNav nav={NAV} onNavigate={(_i, e) => e.preventDefault()} /></Sidebar>}
      header={
        <ShellHeader
          start={<ShellBreadcrumbs items={[{ id: "settings", label: "Settings", href: "/settings" }, { id: "group", label: current?.group ?? "" }, { id: section, label: current?.label ?? "" }]} onNavigate={(_c, e) => e.preventDefault()} />}
          end={<ShellUserMenu name="Dana Wu" email="dana@acme.dev" actions={[{ id: "out", label: "Sign out", icon: <LogOut />, destructive: true }]} />}
        />
      }
    >
      <ShellPage title="Settings" description="Manage your account and the Acme workspace." flush>
        <SettingsLayout sections={SECTIONS} active={section} onSelect={(s, e) => { e.preventDefault(); setSection(s.id) }}>
          <SectionBody key={section} id={section} />
        </SettingsLayout>
      </ShellPage>
    </AppShell>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(U,()=>g(()=>import(`./settings-area-6bkliRYo.js`),[]));function W(){return(0,P.jsxs)(`div`,{children:[(0,P.jsx)(i,{title:`Settings area`,children:`The app sidebar stays; the content becomes a settings layout with a grouped section nav. The nav answers to its own width, so it turns into a row of links in a narrow frame.`}),(0,P.jsx)(j,{n:1,title:`Account and workspace settings`,blurb:`Switch sections from the nav; the breadcrumbs follow. Each section has working controls.`,code:U,children:(0,P.jsx)(M,{testId:`shell-settings`,height:600,children:(0,P.jsx)(H,{})})})]})}export{W as component};