import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{n as t,t as n}from"./avatar-DpYkDbpD.js";import{t as r}from"./switch-CA6hUnoS.js";import{a as i,c as a,i as o,l as s,n as c,o as l,r as ee,s as te,t as ne}from"./alert-dialog-t7ITvAJX.js";import{t as re}from"./globe-sWXhXf1y.js";import{t as u}from"./lock-noXszB_P.js";import{t as d}from"./shield-check-QpyAbWp2.js";import{t as f}from"./trash-2-0f767-k3.js";import{t as p}from"./user-BsKaLW_5.js";import{t as m}from"./input-2rqm_FXH.js";import{t as h}from"./textarea-BQPz--El.js";import{t as ie}from"./tags-input--jwQ2Ns2.js";import{Bc as g,Cc as _,Ic as v,Mi as ae,hi as oe,ht as y,ti as b}from"./index-9y5uwRd3.js";import{t as x}from"./badge-CMT8Lr82.js";import{t as S}from"./label-BCdE7eBP.js";import{t as C}from"./api-key-card-DKiVIKjr.js";import{t as w}from"./page-CZ6HYoN0.js";import{t as T}from"./separator-CJFdFqN7.js";import{t as E}from"./select-SH8KPD1g.js";import{a as D,c as O,i as k,l as A,o as j,r as M,s as N,t as P}from"./dialog-oT-L6SVn.js";import{t as F}from"./password-input-DxY7jjB7.js";import{t as I}from"./template-page-DDyulrcV.js";var L=ae(`key`,[[`path`,{d:`m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4`,key:`g0fldk`}],[`path`,{d:`m21 2-9.6 9.6`,key:`1j0ho8`}],[`circle`,{cx:`7.5`,cy:`15.5`,r:`5.5`,key:`yqb3hr`}]]),R=e(g(),1),z=v();function B({id:e,kicker:t,title:n,description:r,children:i}){return(0,z.jsxs)(`section`,{"data-settings-section":e,children:[(0,z.jsxs)(`header`,{className:`mb-5 border-b border-border pb-3`,children:[t?(0,z.jsx)(`span`,{className:`font-mono text-[10px] font-medium uppercase tracking-wider text-primary`,children:t}):null,(0,z.jsx)(`h2`,{className:`mt-0.5 text-xl font-semibold tracking-tight`,children:n}),r?(0,z.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:r}):null]}),(0,z.jsx)(`div`,{className:`space-y-5`,children:i})]})}function V({label:e,hint:t,children:n}){let r=(0,R.useId)(),i=`${r}-label`,a=typeof n==`function`;return(0,z.jsxs)(`div`,{className:`grid grid-cols-1 gap-3 sm:grid-cols-[180px_1fr]`,children:[(0,z.jsxs)(`div`,{children:[a?(0,z.jsx)(S,{id:i,htmlFor:r,className:`text-[13px] font-medium text-foreground`,children:e}):(0,z.jsx)(`p`,{className:`text-[13px] font-medium leading-none text-foreground`,children:e}),t?(0,z.jsx)(`p`,{className:`mt-0.5 text-[11px] text-muted-foreground`,children:t}):null]}),(0,z.jsx)(`div`,{className:`min-w-0`,children:a?n({id:r,labelId:i}):n})]})}var H=[{id:`eng`,label:`Software engineer`},{id:`design`,label:`Designer`},{id:`pm`,label:`Product manager`},{id:`ops`,label:`Operations`},{id:`other`,label:`Other`}],U=[{id:`light`,label:`Light`},{id:`dark`,label:`Dark`},{id:`system`,label:`System`}],W=[{id:`compact`,label:`Compact`},{id:`comfortable`,label:`Comfortable`},{id:`spacious`,label:`Spacious`}],G=[{id:`read`,label:`Read-only`},{id:`write`,label:`Read + write`},{id:`admin`,label:`Admin (full)`}],K=`sm:max-w-56`;function q(){return(0,z.jsxs)(B,{id:`profile`,kicker:`Account · Profile`,title:`Profile`,children:[(0,z.jsx)(V,{label:`Avatar`,hint:`PNG/JPG, square, ≤ 1 MB`,children:(0,z.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,z.jsx)(n,{className:`size-12`,children:(0,z.jsx)(t,{className:`text-sm`,children:`AK`})}),(0,z.jsxs)(`div`,{className:`flex gap-2`,children:[(0,z.jsx)(b,{variant:`outline`,size:`sm`,children:`Upload`}),(0,z.jsx)(b,{variant:`ghost`,size:`sm`,children:`Remove`})]})]})}),(0,z.jsx)(V,{label:`Full name`,children:({id:e})=>(0,z.jsx)(m,{id:e,defaultValue:`Alex Kim`})}),(0,z.jsx)(V,{label:`Email`,hint:`Used for sign-in and notifications`,children:({id:e})=>(0,z.jsx)(m,{id:e,type:`email`,defaultValue:`alex@example.com`})}),(0,z.jsx)(V,{label:`Role`,children:({labelId:e})=>(0,z.jsx)(E,{"aria-labelledby":e,items:H,defaultValue:`eng`,classNames:{field:K}})}),(0,z.jsx)(V,{label:`Bio`,hint:`Short — shows on your team profile`,children:({id:e})=>(0,z.jsx)(h,{id:e,defaultValue:`Building Kitora. Focused on dense, power-user UIs.`,rows:3})}),(0,z.jsx)(V,{label:`Skills`,children:({id:e})=>(0,z.jsx)(ie,{id:e,defaultValue:[`typescript`,`design-systems`,`tanstack`,`shadcn`]})}),(0,z.jsxs)(`div`,{className:`flex justify-end gap-2 pt-2`,children:[(0,z.jsx)(b,{variant:`ghost`,children:`Reset`}),(0,z.jsx)(b,{onClick:()=>y.success(`Profile saved`),children:`Save profile`})]})]})}function se(){return(0,z.jsxs)(B,{id:`preferences`,kicker:`Account · Preferences`,title:`Preferences`,description:`Tune the interface to your taste.`,children:[(0,z.jsx)(V,{label:`Theme`,children:({labelId:e})=>(0,z.jsx)(E,{"aria-labelledby":e,items:U,defaultValue:`light`,classNames:{field:K}})}),(0,z.jsx)(V,{label:`Density`,hint:`Compact saves space; comfortable reads better.`,children:({labelId:e})=>(0,z.jsx)(E,{"aria-labelledby":e,items:W,defaultValue:`comfortable`,classNames:{field:K}})}),(0,z.jsx)(V,{label:`Reduce motion`,children:({labelId:e})=>(0,z.jsx)(r,{"aria-labelledby":e})}),(0,z.jsx)(V,{label:`Show keyboard hints`,children:({labelId:e})=>(0,z.jsx)(r,{"aria-labelledby":e,defaultChecked:!0})}),(0,z.jsx)(V,{label:`Use system fonts`,hint:`Falls back from Geist to native.`,children:({labelId:e})=>(0,z.jsx)(r,{"aria-labelledby":e})})]})}function ce(){return(0,z.jsxs)(B,{id:`security`,kicker:`Account · Security`,title:`Security`,description:`Two-factor authentication is currently enabled.`,children:[(0,z.jsx)(V,{label:`Current password`,children:({id:e})=>(0,z.jsx)(F,{id:e,placeholder:`••••••••`})}),(0,z.jsx)(V,{label:`New password`,children:({id:e})=>(0,z.jsx)(F,{id:e,placeholder:`••••••••`,showStrength:!0})}),(0,z.jsx)(V,{label:`Recovery codes`,hint:`One-time codes for emergency access. Re-generate after each use.`,children:(0,z.jsx)(b,{variant:`outline`,size:`sm`,children:`Generate new codes`})}),(0,z.jsx)(T,{}),(0,z.jsx)(V,{label:`Active sessions`,hint:`Devices currently signed in to this account.`,children:(0,z.jsx)(`ul`,{className:`grid gap-2`,children:[{device:`Chrome · macOS`,location:`San Francisco`,current:!0},{device:`iPhone Safari`,location:`San Francisco`,current:!1}].map(e=>(0,z.jsxs)(`li`,{className:`flex items-center justify-between gap-3 rounded-md border border-border bg-card px-3 py-2`,children:[(0,z.jsxs)(`div`,{className:`min-w-0`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-2 text-[13px]`,children:[(0,z.jsx)(`span`,{className:`font-medium`,children:e.device}),e.current?(0,z.jsx)(x,{variant:`outline`,className:`font-mono text-[10px]`,children:`this device`}):null]}),(0,z.jsx)(`div`,{className:`text-[11px] text-muted-foreground`,children:e.location})]}),e.current?null:(0,z.jsx)(b,{size:`sm`,variant:`ghost`,children:`Sign out`})]},e.device))})})]})}function le(){let[e,t]=(0,R.useState)(!1),n=(0,R.useId)(),r=(0,R.useId)();return(0,z.jsxs)(B,{id:`api-keys`,kicker:`Developer · API keys`,title:`API keys`,description:`Keys with broad scopes. Treat them like passwords.`,children:[(0,z.jsx)(`div`,{className:`flex justify-end`,children:(0,z.jsxs)(P,{open:e,onOpenChange:t,children:[(0,z.jsx)(A,{asChild:!0,children:(0,z.jsxs)(b,{size:`sm`,children:[(0,z.jsx)(L,{}),`Generate new key`]})}),(0,z.jsxs)(k,{children:[(0,z.jsxs)(N,{children:[(0,z.jsx)(O,{children:`Generate new API key`}),(0,z.jsx)(D,{children:`You'll only see the key once. Copy it before closing.`})]}),(0,z.jsxs)(`div`,{className:`grid gap-3`,children:[(0,z.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,z.jsx)(S,{htmlFor:n,children:`Name`}),(0,z.jsx)(m,{id:n,placeholder:`Production · ingest`})]}),(0,z.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,z.jsx)(S,{id:r,children:`Scope`}),(0,z.jsx)(E,{"aria-labelledby":r,items:G,defaultValue:`read`})]})]}),(0,z.jsxs)(j,{children:[(0,z.jsx)(M,{asChild:!0,children:(0,z.jsx)(b,{variant:`outline`,children:`Cancel`})}),(0,z.jsx)(b,{onClick:()=>{t(!1),y.success(`Key generated`)},children:`Generate`})]})]})]})}),(0,z.jsx)(C,{name:`Production · ingest`,value:`sk_demo_xxxxxxxxxxxxxxxxxxxxxxxxxxxx4242`,createdAt:`14 days ago`,lastUsed:`2 hours ago`,onRotate:()=>y.success(`Key rotated`)}),(0,z.jsx)(C,{name:`Preview · read-only`,value:`sk_demo_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx1881`,createdAt:`2 days ago`,lastUsed:`never`})]})}function ue(){return(0,z.jsx)(B,{id:`danger`,kicker:`Danger zone`,title:`Delete account`,description:`This permanently deletes your account, all your projects, and all your data.`,children:(0,z.jsx)(`div`,{className:`rounded-lg border border-rose-500/40 bg-rose-500/5 p-4`,children:(0,z.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,z.jsx)(f,{className:`mt-0.5 size-5 text-rose-600 dark:text-rose-400`}),(0,z.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,z.jsx)(`p`,{className:`text-sm font-semibold text-rose-700 dark:text-rose-400`,children:`Delete this account`}),(0,z.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:`You'll lose all access to your workspace, projects, and historical data. This cannot be undone.`})]}),(0,z.jsxs)(ne,{children:[(0,z.jsx)(s,{asChild:!0,children:(0,z.jsx)(b,{variant:`destructive`,size:`sm`,children:`Delete account`})}),(0,z.jsxs)(o,{children:[(0,z.jsxs)(te,{children:[(0,z.jsx)(a,{children:`Delete this account?`}),(0,z.jsx)(i,{children:`This is permanent. Type your email to confirm.`})]}),(0,z.jsx)(m,{"aria-label":`Your email`,placeholder:`alex@example.com`}),(0,z.jsxs)(l,{children:[(0,z.jsx)(ee,{children:`Cancel`}),(0,z.jsx)(c,{children:`Delete forever`})]})]})]})]})})})}var J=[{group:`Account`,items:[{id:`profile`,label:`Profile`,icon:p},{id:`preferences`,label:`Preferences`,icon:re},{id:`security`,label:`Security`,icon:u}]},{group:`Developer`,items:[{id:`api-keys`,label:`API keys`,icon:L}]},{group:`Workspace`,items:[{id:`danger`,label:`Danger zone`,icon:f}]}];function Y(e){return window.addEventListener(`hashchange`,e),()=>window.removeEventListener(`hashchange`,e)}function de(){return(0,R.useSyncExternalStore)(Y,()=>window.location.hash.slice(1),()=>``)}var X=J.flatMap(e=>e.items.map(e=>e.id));function fe(){let e=de(),[t,n]=(0,R.useState)(null),r=t??(X.includes(e)?e:`profile`),i=(0,R.useRef)(null),a=(0,R.useCallback)(e=>{let t=i.current,n=t?.querySelector(`[data-settings-section="${e}"]`);!t||!n||(e===X[0]?t.scrollTop=0:t.scrollTop+=n.getBoundingClientRect().top-t.getBoundingClientRect().top)},[]);(0,R.useEffect)(()=>{n(null),X.includes(e)&&a(e)},[e,a]);let o=(e,t)=>{e.preventDefault(),n(t),a(t)};return(0,z.jsxs)(`div`,{className:`mx-auto flex w-full max-w-[1300px] lg:h-[calc(100dvh-3.5rem)]`,children:[(0,z.jsx)(`aside`,{className:`sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-60 shrink-0 overflow-y-auto border-r border-border px-4 py-6 lg:block`,children:(0,z.jsx)(`nav`,{className:`space-y-6 text-sm`,children:J.map(e=>(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`h3`,{className:`mb-1.5 font-mono text-[10px] font-medium uppercase tracking-wider text-muted-foreground`,children:e.group}),(0,z.jsx)(`ul`,{className:`space-y-px`,children:e.items.map(e=>{let t=e.icon,n=r===e.id;return(0,z.jsx)(`li`,{children:(0,z.jsxs)(`a`,{href:`#${e.id}`,"aria-current":n?`true`:void 0,onClick:t=>o(t,e.id),className:oe(`-mx-2 flex items-center gap-2 rounded-md px-2 py-1.5 transition-colors`,n?`bg-muted text-foreground`:`text-muted-foreground hover:bg-muted/60 hover:text-foreground`),children:[(0,z.jsx)(t,{className:`size-3.5`}),e.label]})},e.id)})})]},e.group))})}),(0,z.jsx)(`div`,{ref:i,className:`relative min-w-0 flex-1 lg:overflow-y-auto`,children:(0,z.jsxs)(`article`,{className:`mx-auto max-w-3xl px-6 py-12 lg:py-14`,children:[(0,z.jsx)(w.Header,{className:`border-border px-0 pt-0 pb-5 sm:px-0`,children:(0,z.jsxs)(w.Heading,{className:`gap-x-3 gap-y-3`,actions:(0,z.jsx)(z.Fragment,{children:(0,z.jsxs)(x,{variant:`outline`,className:`font-mono text-[10px]`,children:[(0,z.jsx)(d,{className:`mr-1 size-3`}),`2FA on`]})}),children:[(0,z.jsx)(w.Title,{className:`text-2xl leading-8 tracking-tighter`,children:`Settings`}),(0,z.jsx)(w.Description,{className:`mt-1 max-w-2xl text-sm`,children:`Manage your account, workspace, and developer credentials. All changes save immediately.`})]})}),(0,z.jsxs)(`div`,{className:`mt-10 space-y-12`,children:[(0,z.jsx)(q,{}),(0,z.jsx)(se,{}),(0,z.jsx)(ce,{}),(0,z.jsx)(le,{}),(0,z.jsx)(ue,{})]})]})})]})}var Z=`import { Globe, Key, Lock, ShieldCheck, Trash2, User } from 'lucide-react'
import { useCallback, useEffect, useRef, useState, useSyncExternalStore, type MouseEvent } from 'react'
import { Badge } from '@kitora/ui/badge'
import { Page } from '@kitora/shell'
import { cn } from '@kitora/ui/utils'
import { APIKeysSection, DangerSection, PreferencesSection, ProfileSection, SecuritySection } from './sections'

/** The sections this page has, grouped as the nav lists them; each \`id\` names its section (\`#security\` in the URL). */
const navItems = [
  {
    group: 'Account',
    items: [
      { id: 'profile', label: 'Profile', icon: User },
      { id: 'preferences', label: 'Preferences', icon: Globe },
      { id: 'security', label: 'Security', icon: Lock },
    ],
  },
  {
    group: 'Developer',
    items: [{ id: 'api-keys', label: 'API keys', icon: Key }],
  },
  {
    group: 'Workspace',
    items: [{ id: 'danger', label: 'Danger zone', icon: Trash2 }],
  },
]

/** The URL's \`#fragment\` (without the \`#\`), following in-page links; empty on the server. */
function subscribeHash(onChange: () => void) {
  window.addEventListener('hashchange', onChange)
  return () => window.removeEventListener('hashchange', onChange)
}
function useHash() {
  return useSyncExternalStore(subscribeHash, () => window.location.hash.slice(1), () => '')
}

const SECTION_IDS: readonly string[] = navItems.flatMap((g) => g.items.map((it) => it.id))

/**
 * An account settings page: a section nav beside profile, preferences, security, API keys and a danger zone. On a wide
 * screen the sections scroll in their own pane beside the nav, and picking one scrolls that pane, never the page around
 * it. A link to \`#security\` opens on that section; a pick leaves the URL alone.
 */
export function SettingsTemplate() {
  const hash = useHash()
  const [picked, setPicked] = useState<string | null>(null)
  const current = picked ?? (SECTION_IDS.includes(hash) ? hash : 'profile')
  const pane = useRef<HTMLDivElement>(null)

  /** Scrolls the content pane (only it) so the section's top sits at the pane's top; the first one shows the page header too. */
  const reveal = useCallback((id: string) => {
    const box = pane.current
    const section = box?.querySelector(\`[data-settings-section="\${id}"]\`)
    if (!box || !section) return
    if (id === SECTION_IDS[0]) box.scrollTop = 0
    else box.scrollTop += section.getBoundingClientRect().top - box.getBoundingClientRect().top
  }, [])

  // the URL's section, on load and on back / forward
  useEffect(() => {
    setPicked(null)
    if (SECTION_IDS.includes(hash)) reveal(hash)
  }, [hash, reveal])

  const pick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    // the URL stays as it is: an app's router may treat a new #fragment as a navigation and reset the scroll
    event.preventDefault()
    setPicked(id)
    reveal(id)
  }

  return (
    <div className="mx-auto flex w-full max-w-[1300px] lg:h-[calc(100dvh-3.5rem)]">
      <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-60 shrink-0 overflow-y-auto border-r border-border px-4 py-6 lg:block">
        <nav className="space-y-6 text-sm">
          {navItems.map((group) => (
            <div key={group.group}>
              <h3 className="mb-1.5 font-mono text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                {group.group}
              </h3>
              <ul className="space-y-px">
                {group.items.map((it) => {
                  const Icon = it.icon
                  const active = current === it.id
                  return (
                    <li key={it.id}>
                      <a
                        href={\`#\${it.id}\`}
                        aria-current={active ? 'true' : undefined}
                        onClick={(event) => pick(event, it.id)}
                        className={cn(
                          '-mx-2 flex items-center gap-2 rounded-md px-2 py-1.5 transition-colors',
                          active
                            ? 'bg-muted text-foreground'
                            : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground',
                        )}
                      >
                        <Icon className="size-3.5" />
                        {it.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* relative: the pane is the containing block of what is absolutely placed inside it (screen-reader text, a password
          field's toggle), so those scroll and clip with it instead of hanging below the page as blank scroll */}
      <div ref={pane} className="relative min-w-0 flex-1 lg:overflow-y-auto">
        <article className="mx-auto max-w-3xl px-6 py-12 lg:py-14">
          {/* The shell kit's page header: title, description and actions. */}
          <Page.Header className="border-border px-0 pt-0 pb-5 sm:px-0">
            <Page.Heading
              className="gap-x-3 gap-y-3"
              actions={
                <>
                  <Badge variant="outline" className="font-mono text-[10px]">
                    <ShieldCheck className="mr-1 size-3" />
                    2FA on
                  </Badge>
                </>
              }
            >
              <Page.Title className="text-2xl leading-8 tracking-tighter">Settings</Page.Title>
              <Page.Description className="mt-1 max-w-2xl text-sm">
                Manage your account, workspace, and developer credentials. All
                changes save immediately.
              </Page.Description>
            </Page.Heading>
          </Page.Header>

          <div className="mt-10 space-y-12">
            <ProfileSection />
            <PreferencesSection />
            <SecuritySection />
            <APIKeysSection />
            <DangerSection />
          </div>
        </article>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>_(()=>import(`./page-BV4tflo-.js`),[]));var Q=`import { useId, type ReactNode } from 'react'
import { Label } from '@kitora/ui/label'

export function Section({
  id,
  kicker,
  title,
  description,
  children,
}: {
  id: string
  kicker?: string
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    // \`data-settings-section\`, not an \`id\`: the page scrolls its content pane to a section itself, and an element named by
    // the URL's #fragment would make the browser scroll the whole window to it on load
    <section data-settings-section={id}>
      <header className="mb-5 border-b border-border pb-3">
        {kicker ? (
          <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-primary">
            {kicker}
          </span>
        ) : null}
        <h2 className="mt-0.5 text-xl font-semibold tracking-tight">{title}</h2>
        {description ? (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        ) : null}
      </header>
      <div className="space-y-5">{children}</div>
    </section>
  )
}

/** Ids a labelled control takes: \`id\` for a native input (the label's \`htmlFor\`), \`labelId\` for \`aria-labelledby\`. */
interface FieldIds {
  id: string
  labelId: string
}

// A function child is a single control and gets a real \`<label>\` tied to it; a
// plain child (buttons, a list) only sits under the field's caption.
export function Field({
  label,
  hint,
  children,
}: {
  label: string
  hint?: string
  children: ReactNode | ((ids: FieldIds) => ReactNode)
}) {
  const id = useId()
  const labelId = \`\${id}-label\`
  const control = typeof children === 'function'
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[180px_1fr]">
      <div>
        {control ? (
          <Label id={labelId} htmlFor={id} className="text-[13px] font-medium text-foreground">
            {label}
          </Label>
        ) : (
          <p className="text-[13px] font-medium leading-none text-foreground">{label}</p>
        )}
        {hint ? (
          <p className="mt-0.5 text-[11px] text-muted-foreground">{hint}</p>
        ) : null}
      </div>
      <div className="min-w-0">{control ? children({ id, labelId }) : children}</div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>_(()=>import(`./section-Cligt7Hb.js`),[]));var $=`import { Key, Trash2 } from 'lucide-react'
import { useId, useState } from 'react'
import { Select, TagsInput } from '@kitora/collections'
import { APIKeyCard } from '@kitora/ui/api-key-card'
import { Avatar, AvatarFallback } from '@kitora/ui/avatar'
import { Badge } from '@kitora/ui/badge'
import { Button } from '@kitora/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@kitora/ui/dialog'
import { Input } from '@kitora/ui/input'
import { Label } from '@kitora/ui/label'
import { PasswordInput } from '@kitora/ui/password-input'
import { Separator } from '@kitora/ui/separator'
import { Switch } from '@kitora/ui/switch'
import { Textarea } from '@kitora/ui/textarea'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@kitora/ui/alert-dialog'
import { toast } from '@kitora/feedback'
import { Field, Section } from './section'

const ROLES = [
  { id: 'eng', label: 'Software engineer' },
  { id: 'design', label: 'Designer' },
  { id: 'pm', label: 'Product manager' },
  { id: 'ops', label: 'Operations' },
  { id: 'other', label: 'Other' },
]
const THEMES = [
  { id: 'light', label: 'Light' },
  { id: 'dark', label: 'Dark' },
  { id: 'system', label: 'System' },
]
const DENSITIES = [
  { id: 'compact', label: 'Compact' },
  { id: 'comfortable', label: 'Comfortable' },
  { id: 'spacious', label: 'Spacious' },
]
const SCOPES = [
  { id: 'read', label: 'Read-only' },
  { id: 'write', label: 'Read + write' },
  { id: 'admin', label: 'Admin (full)' },
]
/** The collections Select fills its row. */
const SELECT_WIDTH = 'sm:max-w-56'

/* ---------- Profile ---------- */
export function ProfileSection() {
  return (
    <Section id="profile" kicker="Account · Profile" title="Profile">
      <Field label="Avatar" hint="PNG/JPG, square, ≤ 1 MB">
        <div className="flex items-center gap-3">
          <Avatar className="size-12">
            <AvatarFallback className="text-sm">AK</AvatarFallback>
          </Avatar>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Upload
            </Button>
            <Button variant="ghost" size="sm">
              Remove
            </Button>
          </div>
        </div>
      </Field>
      <Field label="Full name">{({ id }) => <Input id={id} defaultValue="Alex Kim" />}</Field>
      <Field label="Email" hint="Used for sign-in and notifications">
        {({ id }) => <Input id={id} type="email" defaultValue="alex@example.com" />}
      </Field>
      <Field label="Role">
        {({ labelId }) => (
          <Select aria-labelledby={labelId} items={ROLES} defaultValue="eng" classNames={{ field: SELECT_WIDTH }} />
        )}
      </Field>
      <Field label="Bio" hint="Short — shows on your team profile">
        {({ id }) => (
          <Textarea
            id={id}
            defaultValue="Building Kitora. Focused on dense, power-user UIs."
            rows={3}
          />
        )}
      </Field>
      <Field label="Skills">
        {({ id }) => (
          <TagsInput id={id} defaultValue={['typescript', 'design-systems', 'tanstack', 'shadcn']} />
        )}
      </Field>
      <div className="flex justify-end gap-2 pt-2">
        <Button variant="ghost">Reset</Button>
        <Button onClick={() => toast.success('Profile saved')}>Save profile</Button>
      </div>
    </Section>
  )
}

/* ---------- Preferences ---------- */
export function PreferencesSection() {
  return (
    <Section
      id="preferences"
      kicker="Account · Preferences"
      title="Preferences"
      description="Tune the interface to your taste."
    >
      <Field label="Theme">
        {({ labelId }) => (
          <Select aria-labelledby={labelId} items={THEMES} defaultValue="light" classNames={{ field: SELECT_WIDTH }} />
        )}
      </Field>
      <Field label="Density" hint="Compact saves space; comfortable reads better.">
        {({ labelId }) => (
          <Select aria-labelledby={labelId} items={DENSITIES} defaultValue="comfortable" classNames={{ field: SELECT_WIDTH }} />
        )}
      </Field>
      <Field label="Reduce motion">{({ labelId }) => <Switch aria-labelledby={labelId} />}</Field>
      <Field label="Show keyboard hints">
        {({ labelId }) => <Switch aria-labelledby={labelId} defaultChecked />}
      </Field>
      <Field label="Use system fonts" hint="Falls back from Geist to native.">
        {({ labelId }) => <Switch aria-labelledby={labelId} />}
      </Field>
    </Section>
  )
}

/* ---------- Security ---------- */
export function SecuritySection() {
  return (
    <Section
      id="security"
      kicker="Account · Security"
      title="Security"
      description="Two-factor authentication is currently enabled."
    >
      <Field label="Current password">{({ id }) => <PasswordInput id={id} placeholder="••••••••" />}</Field>
      <Field label="New password">
        {({ id }) => <PasswordInput id={id} placeholder="••••••••" showStrength />}
      </Field>
      <Field
        label="Recovery codes"
        hint="One-time codes for emergency access. Re-generate after each use."
      >
        <Button variant="outline" size="sm">
          Generate new codes
        </Button>
      </Field>
      <Separator />
      <Field
        label="Active sessions"
        hint="Devices currently signed in to this account."
      >
        <ul className="grid gap-2">
          {[
            { device: 'Chrome · macOS', location: 'San Francisco', current: true },
            { device: 'iPhone Safari', location: 'San Francisco', current: false },
          ].map((s) => (
            <li
              key={s.device}
              className="flex items-center justify-between gap-3 rounded-md border border-border bg-card px-3 py-2"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-[13px]">
                  <span className="font-medium">{s.device}</span>
                  {s.current ? (
                    <Badge variant="outline" className="font-mono text-[10px]">
                      this device
                    </Badge>
                  ) : null}
                </div>
                <div className="text-[11px] text-muted-foreground">{s.location}</div>
              </div>
              {!s.current ? (
                <Button size="sm" variant="ghost">
                  Sign out
                </Button>
              ) : null}
            </li>
          ))}
        </ul>
      </Field>
    </Section>
  )
}

/* ---------- API keys ---------- */
export function APIKeysSection() {
  const [keyDialog, setKeyDialog] = useState(false)
  const keyName = useId()
  const keyScope = useId()
  return (
    <Section
      id="api-keys"
      kicker="Developer · API keys"
      title="API keys"
      description="Keys with broad scopes. Treat them like passwords."
    >
      <div className="flex justify-end">
        <Dialog open={keyDialog} onOpenChange={setKeyDialog}>
          <DialogTrigger asChild>
            <Button size="sm">
              <Key />
              Generate new key
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Generate new API key</DialogTitle>
              <DialogDescription>
                You'll only see the key once. Copy it before closing.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-3">
              <div className="grid gap-1.5">
                <Label htmlFor={keyName}>Name</Label>
                <Input id={keyName} placeholder="Production · ingest" />
              </div>
              <div className="grid gap-1.5">
                <Label id={keyScope}>Scope</Label>
                <Select aria-labelledby={keyScope} items={SCOPES} defaultValue="read" />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button onClick={() => { setKeyDialog(false); toast.success('Key generated') }}>
                Generate
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <APIKeyCard
        name="Production · ingest"
        value="sk_demo_xxxxxxxxxxxxxxxxxxxxxxxxxxxx4242"
        createdAt="14 days ago"
        lastUsed="2 hours ago"
        onRotate={() => toast.success('Key rotated')}
      />
      <APIKeyCard
        name="Preview · read-only"
        value="sk_demo_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx1881"
        createdAt="2 days ago"
        lastUsed="never"
      />
    </Section>
  )
}

/* ---------- Danger ---------- */
export function DangerSection() {
  return (
    <Section
      id="danger"
      kicker="Danger zone"
      title="Delete account"
      description="This permanently deletes your account, all your projects, and all your data."
    >
      <div className="rounded-lg border border-rose-500/40 bg-rose-500/5 p-4">
        <div className="flex items-start gap-3">
          <Trash2 className="mt-0.5 size-5 text-rose-600 dark:text-rose-400" />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-rose-700 dark:text-rose-400">
              Delete this account
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              You'll lose all access to your workspace, projects, and historical
              data. This cannot be undone.
            </p>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" size="sm">
                Delete account
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete this account?</AlertDialogTitle>
                <AlertDialogDescription>
                  This is permanent. Type your email to confirm.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <Input aria-label="Your email" placeholder="alex@example.com" />
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Delete forever</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </Section>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>_(()=>import(`./sections-RgoeghKF.js`),[]));var pe=[{name:`page.tsx`,code:Z},{name:`section.tsx`,code:Q},{name:`sections.tsx`,code:$}];function me(){return(0,z.jsx)(I,{slug:`settings`,files:pe,children:(0,z.jsx)(fe,{})})}export{me as component};