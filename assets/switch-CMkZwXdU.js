import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{i as n,n as r,r as i,t as a}from"./switch-CiJzHfYx.js";import{t as o}from"./moon-I7KBzuU9.js";import{t as s}from"./sun-WV2OJFSm.js";import{Bc as c,Cc as l,Ic as u,Ti as d}from"./index-B9ukmIN1.js";import{n as f}from"./choice-label-Nmdl4Kky.js";import{t as p}from"./label-DoQXlIRk.js";import{a as m,n as h,o as g,t as _}from"./card-B_Tor3B1.js";import{t as v}from"./separator-BAbS8iiG.js";var y=e({SwitchBuildYourOwn:()=>x}),b=u();function x({checked:e,defaultChecked:t=e===void 0?!0:void 0,onCheckedChange:r,loading:a=!1,disabled:o,name:s}){let{controlId:c,descriptionId:l,describedBy:u}=f(void 0,!0,!0,void 0);return(0,b.jsxs)(`span`,{className:`inline-flex items-start gap-2`,children:[(0,b.jsx)(i,{id:c,"aria-describedby":u,"aria-busy":a||void 0,"data-loading":a?``:void 0,checked:e,defaultChecked:t,onCheckedChange:(e,t)=>a?t.cancel():r?.(e),disabled:o,name:s,className:`peer inline-flex h-[18px] w-8 shrink-0 items-center rounded-full bg-input p-px outline-none focus-visible:ring-3 focus-visible:ring-ring/50 data-checked:bg-primary data-disabled:opacity-50 data-loading:cursor-progress`,children:(0,b.jsx)(n,{className:`flex size-4 items-center justify-center rounded-full bg-background text-primary transition-transform data-checked:translate-x-[14px] rtl:data-checked:-translate-x-[14px]`,children:a?(0,b.jsx)(d,{"aria-hidden":!0,className:`size-3 animate-spin motion-reduce:animate-none`}):null})}),(0,b.jsxs)(`span`,{className:`flex flex-col gap-1 pt-0.5`,children:[(0,b.jsx)(`label`,{htmlFor:c,className:`text-[13px] leading-none select-none peer-data-disabled:opacity-50`,children:`Email digest`}),(0,b.jsx)(`span`,{id:l,className:`text-xs text-muted-foreground`,children:`A summary of the week, every Monday.`})]})]})}var S=e({SwitchComposeNotificationSettings:()=>w}),C=t(c(),1);function w(){let e=(0,C.useId)(),t=(0,C.useId)();return(0,b.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,b.jsxs)(_,{className:`w-full max-w-sm`,children:[(0,b.jsx)(m,{children:(0,b.jsx)(g,{children:`Notifications`})}),(0,b.jsxs)(h,{className:`grid gap-3`,children:[(0,b.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,b.jsx)(p,{htmlFor:e,children:`Email digest`}),(0,b.jsx)(a,{id:e,defaultChecked:!0})]}),(0,b.jsx)(v,{}),(0,b.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,b.jsx)(p,{htmlFor:t,children:`Push alerts`}),(0,b.jsx)(a,{id:t})]})]})]})})}var T=e({SwitchDefault:()=>D});function E(){let[e,t]=(0,C.useState)(!0);return(0,b.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,b.jsx)(a,{id:`notif`,checked:e,onCheckedChange:t}),(0,b.jsxs)(p,{htmlFor:`notif`,className:`text-sm`,children:[`Email notifications `,e?`on`:`off`]})]})}function D(){return(0,b.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,b.jsx)(E,{})})}var O=e({SwitchLabelThumbLoading:()=>k});function k(){let[e,t]=(0,C.useState)(!1),[n,i]=(0,C.useState)(!0),[c,l]=(0,C.useState)(!1);function u(e){l(!0),setTimeout(()=>{i(e),l(!1)},1200)}return(0,b.jsxs)(`div`,{className:`grid w-full max-w-sm gap-5`,children:[(0,b.jsx)(a,{label:`Wi-Fi`,description:`Join known networks automatically.`,defaultChecked:!0}),(0,b.jsx)(a,{label:`Sync across devices`,description:c?`Saving…`:`Settings follow you to every signed-in device.`,labelPosition:`start`,wrapperClassName:`w-full justify-between`,checked:n,loading:c,onCheckedChange:u}),(0,b.jsx)(a,{size:`lg`,label:e?`Dark theme`:`Light theme`,checked:e,onCheckedChange:t,children:(0,b.jsx)(r,{children:e?(0,b.jsx)(o,{}):(0,b.jsx)(s,{})})})]})}var A=`import { LoaderCircleIcon } from "lucide-react"
import { Switch } from "@kitora/primitives/react"
import { useChoiceIds } from "@kitora/ui/choice-label"

/**
 * A switch with a label, a description and a loading state, built from the primitives' \`Switch.Root\` and \`Switch.Thumb\`. While \`loading\`
 * the switch is \`aria-busy\`, its thumb spins, and a press is refused with the change details' \`cancel()\` (it stays focusable).
 */
export function SwitchBuildYourOwn({
  checked,
  defaultChecked = checked === undefined ? true : undefined,
  onCheckedChange,
  loading = false,
  disabled,
  name,
}: {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  loading?: boolean
  disabled?: boolean
  name?: string
}) {
  const { controlId, descriptionId, describedBy } = useChoiceIds(undefined, true, true, undefined)
  return (
    <span className="inline-flex items-start gap-2">
      <Switch.Root
        id={controlId}
        aria-describedby={describedBy}
        aria-busy={loading || undefined}
        data-loading={loading ? "" : undefined}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={(next, details) => (loading ? details.cancel() : onCheckedChange?.(next))}
        disabled={disabled}
        name={name}
        className="peer inline-flex h-[18px] w-8 shrink-0 items-center rounded-full bg-input p-px outline-none focus-visible:ring-3 focus-visible:ring-ring/50 data-checked:bg-primary data-disabled:opacity-50 data-loading:cursor-progress"
      >
        <Switch.Thumb className="flex size-4 items-center justify-center rounded-full bg-background text-primary transition-transform data-checked:translate-x-[14px] rtl:data-checked:-translate-x-[14px]">
          {loading ? <LoaderCircleIcon aria-hidden className="size-3 animate-spin motion-reduce:animate-none" /> : null}
        </Switch.Thumb>
      </Switch.Root>
      <span className="flex flex-col gap-1 pt-0.5">
        <label htmlFor={controlId} className="text-[13px] leading-none select-none peer-data-disabled:opacity-50">
          Email digest
        </label>
        <span id={descriptionId} className="text-xs text-muted-foreground">
          A summary of the week, every Monday.
        </span>
      </span>
    </span>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(A,()=>l(()=>import(`./build-your-own-E10I0MLa.js`),[]));var j=`import { useId } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@kitora/ui/card"
import { Label } from "@kitora/ui/label"
import { Separator } from "@kitora/ui/separator"
import { Switch } from "@kitora/ui/switch"

export function SwitchComposeNotificationSettings() {
  const emailId = useId()
  const pushId = useId()
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          <div className="flex items-center justify-between gap-3">
            <Label htmlFor={emailId}>Email digest</Label>
            <Switch id={emailId} defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between gap-3">
            <Label htmlFor={pushId}>Push alerts</Label>
            <Switch id={pushId} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(j,()=>l(()=>import(`./compose-FI2Quk6-.js`),[]));var M=`import { useState } from "react"
import { Label } from "@kitora/ui/label"
import { Switch } from "@kitora/ui/switch"

function SwitchExample() {
  const [on, setOn] = useState(true)
  return (
    <div className="flex items-center gap-3">
      <Switch id="notif" checked={on} onCheckedChange={setOn} />
      <Label htmlFor="notif" className="text-sm">
        Email notifications {on ? "on" : "off"}
      </Label>
    </div>
  )
}

export function SwitchDefault() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <SwitchExample />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>l(()=>import(`./default-s4eMcYri.js`),[]));var N=`import { useState } from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { Switch, SwitchThumb } from "@kitora/ui/switch"

/** A switch with its own label and description, the label at the start for a settings row, an icon in the thumb, the \`lg\` size, and \`loading\` while a save is in flight. */
export function SwitchLabelThumbLoading() {
  const [dark, setDark] = useState(false)
  const [sync, setSync] = useState(true)
  const [saving, setSaving] = useState(false)

  // Pretend to save: the switch shows a spinner and ignores presses until the request settles.
  function changeSync(next: boolean) {
    setSaving(true)
    setTimeout(() => {
      setSync(next)
      setSaving(false)
    }, 1200)
  }

  return (
    <div className="grid w-full max-w-sm gap-5">
      <Switch label="Wi-Fi" description="Join known networks automatically." defaultChecked />
      <Switch
        label="Sync across devices"
        description={saving ? "Saving…" : "Settings follow you to every signed-in device."}
        labelPosition="start"
        wrapperClassName="w-full justify-between"
        checked={sync}
        loading={saving}
        onCheckedChange={changeSync}
      />
      <Switch size="lg" label={dark ? "Dark theme" : "Light theme"} checked={dark} onCheckedChange={setDark}>
        <SwitchThumb>{dark ? <MoonIcon /> : <SunIcon />}</SwitchThumb>
      </Switch>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>l(()=>import(`./label-thumb-loading-DRj8Nd2B.js`),[]));var P={"./demos/switch/build-your-own.tsx":y,"./demos/switch/compose.tsx":S,"./demos/switch/default.tsx":T,"./demos/switch/label-thumb-loading.tsx":O},F={"./demos/switch/build-your-own.tsx":A,"./demos/switch/compose.tsx":j,"./demos/switch/default.tsx":M,"./demos/switch/label-thumb-loading.tsx":N};export{P as modules,F as sources};