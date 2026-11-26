import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{n as t,t as n}from"./avatar-DDurds49.js";import{t as r}from"./switch-CiJzHfYx.js";import{a as i,c as a,i as o,l as s,n as c,o as ee,r as l,s as u,t as d}from"./alert-dialog-CyTY3GiE.js";import{t as f}from"./globe-X8eHtpbL.js";import{t as p}from"./lock-DLKF2ezk.js";import{t as m}from"./shield-check-cQSxweU5.js";import{t as h}from"./trash-2-BYfY5R1J.js";import{t as g}from"./user-BhLzwaGb.js";import{t as _}from"./input-DQo0XDsx.js";import{t as v}from"./textarea-C8WF-XOD.js";import{t as te}from"./tags-input-DPHPTUtr.js";import{Bc as y,Cc as b,Ic as ne,Mi as re,hi as ie,ht as x,ti as S}from"./index-B9ukmIN1.js";import{t as C}from"./badge-uhFB8J9R.js";import{t as w}from"./label-DoQXlIRk.js";import{t as T}from"./api-key-card-B4zVQsXl.js";import{t as E}from"./page-C1By_5dM.js";import{t as D}from"./separator-BAbS8iiG.js";import{t as O}from"./select-IOvfzDtl.js";import{a as k,c as A,i as j,l as M,o as N,r as P,s as F,t as I}from"./dialog-XB0zm5GH.js";import{t as L}from"./password-input-BWIhgkHX.js";import{t as R}from"./template-page-DfBB7MP1.js";var z=re(`key`,[[`path`,{d:`m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4`,key:`g0fldk`}],[`path`,{d:`m21 2-9.6 9.6`,key:`1j0ho8`}],[`circle`,{cx:`7.5`,cy:`15.5`,r:`5.5`,key:`yqb3hr`}]]),B=e(y(),1),V=ne();function H({id:e,kicker:t,title:n,description:r,children:i}){return(0,V.jsxs)(`section`,{id:e,className:`scroll-mt-24`,children:[(0,V.jsxs)(`header`,{className:`mb-5 border-b border-border pb-3`,children:[t?(0,V.jsx)(`span`,{className:`font-mono text-[10px] font-medium uppercase tracking-wider text-primary`,children:t}):null,(0,V.jsx)(`h2`,{className:`mt-0.5 text-xl font-semibold tracking-tight`,children:n}),r?(0,V.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:r}):null]}),(0,V.jsx)(`div`,{className:`space-y-5`,children:i})]})}function U({label:e,hint:t,children:n}){let r=(0,B.useId)(),i=`${r}-label`,a=typeof n==`function`;return(0,V.jsxs)(`div`,{className:`grid grid-cols-1 gap-3 sm:grid-cols-[180px_1fr]`,children:[(0,V.jsxs)(`div`,{children:[a?(0,V.jsx)(w,{id:i,htmlFor:r,className:`text-[13px] font-medium text-foreground`,children:e}):(0,V.jsx)(`p`,{className:`text-[13px] font-medium leading-none text-foreground`,children:e}),t?(0,V.jsx)(`p`,{className:`mt-0.5 text-[11px] text-muted-foreground`,children:t}):null]}),(0,V.jsx)(`div`,{className:`min-w-0`,children:a?n({id:r,labelId:i}):n})]})}var W=[{id:`eng`,label:`Software engineer`},{id:`design`,label:`Designer`},{id:`pm`,label:`Product manager`},{id:`ops`,label:`Operations`},{id:`other`,label:`Other`}],G=[{id:`light`,label:`Light`},{id:`dark`,label:`Dark`},{id:`system`,label:`System`}],K=[{id:`compact`,label:`Compact`},{id:`comfortable`,label:`Comfortable`},{id:`spacious`,label:`Spacious`}],q=[{id:`read`,label:`Read-only`},{id:`write`,label:`Read + write`},{id:`admin`,label:`Admin (full)`}],J=`sm:max-w-56`;function Y(){return(0,V.jsxs)(H,{id:`profile`,kicker:`Account · Profile`,title:`Profile`,children:[(0,V.jsx)(U,{label:`Avatar`,hint:`PNG/JPG, square, ≤ 1 MB`,children:(0,V.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,V.jsx)(n,{className:`size-12`,children:(0,V.jsx)(t,{className:`text-sm`,children:`AK`})}),(0,V.jsxs)(`div`,{className:`flex gap-2`,children:[(0,V.jsx)(S,{variant:`outline`,size:`sm`,children:`Upload`}),(0,V.jsx)(S,{variant:`ghost`,size:`sm`,children:`Remove`})]})]})}),(0,V.jsx)(U,{label:`Full name`,children:({id:e})=>(0,V.jsx)(_,{id:e,defaultValue:`Alex Kim`})}),(0,V.jsx)(U,{label:`Email`,hint:`Used for sign-in and notifications`,children:({id:e})=>(0,V.jsx)(_,{id:e,type:`email`,defaultValue:`alex@example.com`})}),(0,V.jsx)(U,{label:`Role`,children:({labelId:e})=>(0,V.jsx)(O,{"aria-labelledby":e,items:W,defaultValue:`eng`,classNames:{field:J}})}),(0,V.jsx)(U,{label:`Bio`,hint:`Short — shows on your team profile`,children:({id:e})=>(0,V.jsx)(v,{id:e,defaultValue:`Building Kitora. Focused on dense, power-user UIs.`,rows:3})}),(0,V.jsx)(U,{label:`Skills`,children:({id:e})=>(0,V.jsx)(te,{id:e,defaultValue:[`typescript`,`design-systems`,`tanstack`,`shadcn`]})}),(0,V.jsxs)(`div`,{className:`flex justify-end gap-2 pt-2`,children:[(0,V.jsx)(S,{variant:`ghost`,children:`Reset`}),(0,V.jsx)(S,{onClick:()=>x.success(`Profile saved`),children:`Save profile`})]})]})}function ae(){return(0,V.jsxs)(H,{id:`preferences`,kicker:`Account · Preferences`,title:`Preferences`,description:`Tune the interface to your taste.`,children:[(0,V.jsx)(U,{label:`Theme`,children:({labelId:e})=>(0,V.jsx)(O,{"aria-labelledby":e,items:G,defaultValue:`light`,classNames:{field:J}})}),(0,V.jsx)(U,{label:`Density`,hint:`Compact saves space; comfortable reads better.`,children:({labelId:e})=>(0,V.jsx)(O,{"aria-labelledby":e,items:K,defaultValue:`comfortable`,classNames:{field:J}})}),(0,V.jsx)(U,{label:`Reduce motion`,children:({labelId:e})=>(0,V.jsx)(r,{"aria-labelledby":e})}),(0,V.jsx)(U,{label:`Show keyboard hints`,children:({labelId:e})=>(0,V.jsx)(r,{"aria-labelledby":e,defaultChecked:!0})}),(0,V.jsx)(U,{label:`Use system fonts`,hint:`Falls back from Geist to native.`,children:({labelId:e})=>(0,V.jsx)(r,{"aria-labelledby":e})})]})}function oe(){return(0,V.jsxs)(H,{id:`security`,kicker:`Account · Security`,title:`Security`,description:`Two-factor authentication is currently enabled.`,children:[(0,V.jsx)(U,{label:`Current password`,children:({id:e})=>(0,V.jsx)(L,{id:e,placeholder:`••••••••`})}),(0,V.jsx)(U,{label:`New password`,children:({id:e})=>(0,V.jsx)(L,{id:e,placeholder:`••••••••`,showStrength:!0})}),(0,V.jsx)(U,{label:`Recovery codes`,hint:`One-time codes for emergency access. Re-generate after each use.`,children:(0,V.jsx)(S,{variant:`outline`,size:`sm`,children:`Generate new codes`})}),(0,V.jsx)(D,{}),(0,V.jsx)(U,{label:`Active sessions`,hint:`Devices currently signed in to this account.`,children:(0,V.jsx)(`ul`,{className:`grid gap-2`,children:[{device:`Chrome · macOS`,location:`San Francisco`,current:!0},{device:`iPhone Safari`,location:`San Francisco`,current:!1}].map(e=>(0,V.jsxs)(`li`,{className:`flex items-center justify-between gap-3 rounded-md border border-border bg-card px-3 py-2`,children:[(0,V.jsxs)(`div`,{className:`min-w-0`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-2 text-[13px]`,children:[(0,V.jsx)(`span`,{className:`font-medium`,children:e.device}),e.current?(0,V.jsx)(C,{variant:`outline`,className:`font-mono text-[10px]`,children:`this device`}):null]}),(0,V.jsx)(`div`,{className:`text-[11px] text-muted-foreground`,children:e.location})]}),e.current?null:(0,V.jsx)(S,{size:`sm`,variant:`ghost`,children:`Sign out`})]},e.device))})})]})}function se(){let[e,t]=(0,B.useState)(!1),n=(0,B.useId)(),r=(0,B.useId)();return(0,V.jsxs)(H,{id:`api-keys`,kicker:`Developer · API keys`,title:`API keys`,description:`Keys with broad scopes. Treat them like passwords.`,children:[(0,V.jsx)(`div`,{className:`flex justify-end`,children:(0,V.jsxs)(I,{open:e,onOpenChange:t,children:[(0,V.jsx)(M,{asChild:!0,children:(0,V.jsxs)(S,{size:`sm`,children:[(0,V.jsx)(z,{}),`Generate new key`]})}),(0,V.jsxs)(j,{children:[(0,V.jsxs)(F,{children:[(0,V.jsx)(A,{children:`Generate new API key`}),(0,V.jsx)(k,{children:`You'll only see the key once. Copy it before closing.`})]}),(0,V.jsxs)(`div`,{className:`grid gap-3`,children:[(0,V.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,V.jsx)(w,{htmlFor:n,children:`Name`}),(0,V.jsx)(_,{id:n,placeholder:`Production · ingest`})]}),(0,V.jsxs)(`div`,{className:`grid gap-1.5`,children:[(0,V.jsx)(w,{id:r,children:`Scope`}),(0,V.jsx)(O,{"aria-labelledby":r,items:q,defaultValue:`read`})]})]}),(0,V.jsxs)(N,{children:[(0,V.jsx)(P,{asChild:!0,children:(0,V.jsx)(S,{variant:`outline`,children:`Cancel`})}),(0,V.jsx)(S,{onClick:()=>{t(!1),x.success(`Key generated`)},children:`Generate`})]})]})]})}),(0,V.jsx)(T,{name:`Production · ingest`,value:`sk_demo_xxxxxxxxxxxxxxxxxxxxxxxxxxxx4242`,createdAt:`14 days ago`,lastUsed:`2 hours ago`,onRotate:()=>x.success(`Key rotated`)}),(0,V.jsx)(T,{name:`Preview · read-only`,value:`sk_demo_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx1881`,createdAt:`2 days ago`,lastUsed:`never`})]})}function ce(){return(0,V.jsx)(H,{id:`danger`,kicker:`Danger zone`,title:`Delete account`,description:`This permanently deletes your account, all your projects, and all your data.`,children:(0,V.jsx)(`div`,{className:`rounded-lg border border-rose-500/40 bg-rose-500/5 p-4`,children:(0,V.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,V.jsx)(h,{className:`mt-0.5 size-5 text-rose-600 dark:text-rose-400`}),(0,V.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,V.jsx)(`p`,{className:`text-sm font-semibold text-rose-700 dark:text-rose-400`,children:`Delete this account`}),(0,V.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:`You'll lose all access to your workspace, projects, and historical data. This cannot be undone.`})]}),(0,V.jsxs)(d,{children:[(0,V.jsx)(s,{asChild:!0,children:(0,V.jsx)(S,{variant:`destructive`,size:`sm`,children:`Delete account`})}),(0,V.jsxs)(o,{children:[(0,V.jsxs)(u,{children:[(0,V.jsx)(a,{children:`Delete this account?`}),(0,V.jsx)(i,{children:`This is permanent. Type your email to confirm.`})]}),(0,V.jsx)(_,{"aria-label":`Your email`,placeholder:`alex@example.com`}),(0,V.jsxs)(ee,{children:[(0,V.jsx)(l,{children:`Cancel`}),(0,V.jsx)(c,{children:`Delete forever`})]})]})]})]})})})}var le=[{group:`Account`,items:[{id:`profile`,label:`Profile`,icon:g},{id:`preferences`,label:`Preferences`,icon:f},{id:`security`,label:`Security`,icon:p}]},{group:`Developer`,items:[{id:`api-keys`,label:`API keys`,icon:z}]},{group:`Workspace`,items:[{id:`danger`,label:`Danger zone`,icon:h}]}];function X(e){return window.addEventListener(`hashchange`,e),()=>window.removeEventListener(`hashchange`,e)}function ue(){return(0,B.useSyncExternalStore)(X,()=>window.location.hash.slice(1),()=>``)}function de(){let e=ue()||`profile`;return(0,V.jsxs)(`div`,{className:`mx-auto flex w-full max-w-[1300px]`,children:[(0,V.jsx)(`aside`,{className:`sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-60 shrink-0 overflow-y-auto border-r border-border px-4 py-6 lg:block`,children:(0,V.jsx)(`nav`,{className:`space-y-6 text-sm`,children:le.map(t=>(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h3`,{className:`mb-1.5 font-mono text-[10px] font-medium uppercase tracking-wider text-muted-foreground`,children:t.group}),(0,V.jsx)(`ul`,{className:`space-y-px`,children:t.items.map(t=>{let n=t.icon,r=e===t.id;return(0,V.jsx)(`li`,{children:(0,V.jsxs)(`a`,{href:`#${t.id}`,className:ie(`-mx-2 flex items-center gap-2 rounded-md px-2 py-1.5 transition-colors`,r?`bg-muted text-foreground`:`text-muted-foreground hover:bg-muted/60 hover:text-foreground`),children:[(0,V.jsx)(n,{className:`size-3.5`}),t.label]})},t.id)})})]},t.group))})}),(0,V.jsx)(`div`,{className:`min-w-0 flex-1`,children:(0,V.jsxs)(`article`,{className:`mx-auto max-w-3xl px-6 py-12 lg:py-14`,children:[(0,V.jsx)(E.Header,{className:`border-border px-0 pt-0 pb-5 sm:px-0`,children:(0,V.jsxs)(E.Heading,{className:`gap-x-3 gap-y-3`,actions:(0,V.jsx)(V.Fragment,{children:(0,V.jsxs)(C,{variant:`outline`,className:`font-mono text-[10px]`,children:[(0,V.jsx)(m,{className:`mr-1 size-3`}),`2FA on`]})}),children:[(0,V.jsx)(E.Title,{className:`text-2xl leading-8 tracking-tighter`,children:`Settings`}),(0,V.jsx)(E.Description,{className:`mt-1 max-w-2xl text-sm`,children:`Manage your account, workspace, and developer credentials. All changes save immediately.`})]})}),(0,V.jsxs)(`div`,{className:`mt-10 space-y-12`,children:[(0,V.jsx)(Y,{}),(0,V.jsx)(ae,{}),(0,V.jsx)(oe,{}),(0,V.jsx)(se,{}),(0,V.jsx)(ce,{})]})]})})]})}var Z=`import { Globe, Key, Lock, ShieldCheck, Trash2, User } from 'lucide-react'
import { useSyncExternalStore } from 'react'
import { Badge } from '@kitora/ui/badge'
import { Page } from '@kitora/shell'
import { cn } from '@kitora/ui/utils'
import { APIKeysSection, DangerSection, PreferencesSection, ProfileSection, SecuritySection } from './sections'

/** The sections this page has, grouped as the nav lists them; each \`id\` is its section's anchor. */
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

/** An account settings page: a section nav beside profile, preferences, security, API keys and a danger zone. */
export function SettingsTemplate() {
  const hash = useHash() || 'profile'

  return (
    <div className="mx-auto flex w-full max-w-[1300px]">
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
                  const active = hash === it.id
                  return (
                    <li key={it.id}>
                      <a
                        href={\`#\${it.id}\`}
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

      <div className="min-w-0 flex-1">
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>b(()=>import(`./page-DqTrPup2.js`),[]));var Q=`import { useId, type ReactNode } from 'react'
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
    <section id={id} className="scroll-mt-24">
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>b(()=>import(`./section-BL2LtFDO.js`),[]));var $=`import { Key, Trash2 } from 'lucide-react'
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
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>b(()=>import(`./sections-RgoeghKF.js`),[]));var fe=[{name:`page.tsx`,code:Z},{name:`section.tsx`,code:Q},{name:`sections.tsx`,code:$}];function pe(){return(0,V.jsx)(R,{slug:`settings`,files:fe,children:(0,V.jsx)(de,{})})}export{pe as component};