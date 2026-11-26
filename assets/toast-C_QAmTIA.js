import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{A as n,D as r,E as i,M as a,O as o,T as s,_ as c,b as l,c as u,d,f,g as p,h as ee,i as te,j as ne,k as re,l as ie,m as ae,n as oe,p as se,s as ce,u as le,v as m,w as h,y as g}from"./toaster-CBJXOSeo.js";import{t as _}from"./circle-alert-BIwEL-g6.js";import{t as v}from"./circle-check-CzxPyIkl.js";import{t as y}from"./triangle-alert-BWjjUzcu.js";import{Bc as b,Cc as x,Di as S,Ei as C,Ic as w,Ti as T,ht as E,ti as D,xn as O}from"./index-q72zUtm9.js";import{t as k}from"./badge-Be8rVEaF.js";import{a as A,n as j,o as M,r as N,t as P}from"./card-WiouR7Ep.js";var F=e({ToastAnchored:()=>B}),I=t(b(),1),L=w();function R(){let{toasts:e}=a();return(0,L.jsx)(L.Fragment,{children:e.map(e=>(0,L.jsx)(ee,{children:(0,L.jsx)(p,{toast:e,children:(0,L.jsxs)(ce,{toast:e,children:[(0,L.jsx)(le,{}),(0,L.jsx)(m,{})]})})},e.id))})}function z(){let e=a(),t=(0,I.useRef)(null);return(0,L.jsxs)(D,{ref:t,variant:`outline`,onClick:()=>{navigator.clipboard?.writeText(`npm i @kitora/ui`).catch(()=>{}),e.add({title:`Copied`,timeout:1500,positionerProps:{anchor:t.current,side:`top`}})},children:[(0,L.jsx)(S,{}),` Copy install command`]})}function B(){return(0,L.jsx)(c,{children:(0,L.jsxs)(`div`,{className:`flex h-56 w-full items-center justify-center rounded-lg border bg-muted/30`,children:[(0,L.jsx)(z,{}),(0,L.jsx)(R,{})]})})}var V=e({ToastBasic:()=>U});function H(){let e=a();return(0,L.jsx)(D,{onClick:()=>e.add({title:`Message sent`,description:`Your note reached the whole team.`,actionProps:{children:`Undo`,onClick:()=>e.add({title:`Undone`,timeout:2e3})}}),children:`Send message`})}function U(){return(0,L.jsx)(c,{children:(0,L.jsxs)(`div`,{className:`relative flex h-72 w-full items-start justify-center overflow-hidden rounded-lg border bg-muted/30 p-6`,children:[(0,L.jsx)(H,{}),(0,L.jsx)(g,{className:`absolute right-3 bottom-3 w-[min(356px,calc(100%-1.5rem))]`,children:(0,L.jsx)(l,{})})]})})}var W=e({ToastBuildYourOwn:()=>pe}),ue={success:v,info:C,warning:y,error:_,loading:T};function de(){let{toasts:e}=a();return e.filter(e=>e.positionerProps?.anchor===void 0).map(e=>{let t=ue[e.type??``];return(0,L.jsx)(s,{toast:e,className:`absolute end-0 bottom-0 z-[calc(1000-var(--toast-index))] w-full rounded-lg border bg-popover text-popover-foreground shadow-lg outline-none [transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-var(--toast-index)*0.625rem))_scale(calc(1-var(--toast-index)*0.05))] transition-[transform,opacity] duration-500 data-expanded:[transform:translateY(calc(var(--toast-offset-y)*-1-var(--toast-index)*0.5rem))] data-limited:opacity-0 data-starting-style:[transform:translateY(150%)] data-ending-style:opacity-0`,children:(0,L.jsxs)(re,{className:`flex items-start gap-2.5 p-3 pe-9 text-sm data-behind:opacity-0 data-expanded:opacity-100`,children:[t?(0,L.jsx)(t,{"aria-hidden":!0,className:`mt-0.5 size-4 shrink-0`}):null,(0,L.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,L.jsx)(ne,{className:`font-medium`}),(0,L.jsx)(n,{className:`mt-0.5 text-[13px] text-muted-foreground`}),(0,L.jsx)(r,{className:`mt-2 h-7 rounded-md border px-2.5 text-xs font-medium hover:bg-muted`})]}),(0,L.jsx)(o,{render:(0,L.jsx)(O,{size:`xs`,className:`absolute top-2 end-2`})})]})},e.id)})}function fe(){let e=a();return(0,L.jsx)(D,{onClick:()=>e.add({title:`Saved`,description:`All changes stored.`,type:`success`,actionProps:{children:`Undo`}}),children:`Save`})}function pe({toastManager:e}){return(0,L.jsx)(i,{toastManager:e,children:(0,L.jsxs)(`div`,{className:`relative flex h-64 w-full items-start justify-center overflow-hidden rounded-lg border p-6`,children:[(0,L.jsx)(fe,{}),(0,L.jsx)(h,{className:`absolute end-3 bottom-3 w-[min(356px,calc(100%-1.5rem))] outline-none`,children:(0,L.jsx)(de,{})})]})})}var me=e({ToastComposeDeploy:()=>_e});function he(){let e=a(),[t,n]=(0,I.useState)(`idle`);return(0,L.jsxs)(P,{className:`w-full max-w-sm`,children:[(0,L.jsxs)(A,{children:[(0,L.jsxs)(M,{className:`flex items-center justify-between`,children:[`Production`,(0,L.jsx)(k,{variant:t===`live`?`default`:`secondary`,children:t===`live`?`Live`:t===`deploying`?`Deploying`:`Idle`})]}),(0,L.jsx)(N,{children:`Ship the latest build to every region.`})]}),(0,L.jsx)(j,{children:(0,L.jsx)(D,{disabled:t===`deploying`,onClick:()=>{n(`deploying`),e.promise(new Promise(e=>setTimeout(()=>e(`v2.4.1`),1600)),{loading:{title:`Deploying build…`},success:e=>({title:`Deployed`,description:e,actionProps:{children:`Roll back`,onClick:()=>n(`idle`)}}),error:{title:`Deploy failed`}}).then(()=>n(`live`))},children:`Deploy`})})]})}function ge(){let{toasts:e}=a();return(0,L.jsx)(L.Fragment,{children:e.map(e=>(0,L.jsx)(u,{toast:e,children:(0,L.jsxs)(f,{children:[(0,L.jsx)(ae,{type:e.type}),(0,L.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,L.jsx)(m,{}),(0,L.jsx)(se,{}),(0,L.jsx)(ie,{})]}),(0,L.jsx)(d,{})]})},e.id))})}function _e(){return(0,L.jsx)(c,{children:(0,L.jsxs)(`div`,{className:`relative flex h-80 w-full items-start justify-center overflow-hidden rounded-lg border bg-muted/30 p-6`,children:[(0,L.jsx)(he,{}),(0,L.jsx)(g,{className:`absolute right-3 bottom-3 w-[min(356px,calc(100%-1.5rem))]`,children:(0,L.jsx)(ge,{})})]})})}var ve=e({ToastPriorityAndCustom:()=>ye});function ye(){return(0,L.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,L.jsx)(D,{variant:`destructive`,onClick:()=>E.error(`Deploy failed`,{description:`Errors are high priority: announced at once.`}),children:`Error (high)`}),(0,L.jsx)(D,{variant:`outline`,onClick:()=>E.info(`Index rebuilt`,{priority:`high`}),children:`Info, high priority`}),(0,L.jsx)(D,{variant:`outline`,onClick:()=>E((0,L.jsxs)(`span`,{children:[`Moved `,(0,L.jsx)(`b`,{children:`3 files`}),` to Archive`]})),children:`Rich title`}),(0,L.jsx)(D,{variant:`outline`,onClick:()=>E.custom(e=>(0,L.jsxs)(`div`,{className:`flex w-full items-center gap-3`,children:[(0,L.jsx)(`span`,{className:`grid size-8 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground`,children:String(e.data)}),(0,L.jsx)(`p`,{className:`min-w-0 flex-1 text-[13px]`,children:`New comment on your pull request`}),(0,L.jsx)(oe.Close,{always:!0})]}),{title:`New comment`,data:`AB`}),children:`Custom`}),(0,L.jsx)(te,{swipeDirections:`auto`,mobileFullWidth:!0})]})}var be=e({ToastStacked:()=>Se});function xe(){let e=a(),t=(0,I.useRef)(0);return(0,L.jsxs)(`div`,{className:`flex flex-wrap justify-center gap-2`,children:[(0,L.jsx)(D,{onClick:()=>{t.current+=1,e.add({title:`Notification ${t.current}`,description:`Hover or focus the stack to open it.`,timeout:0})},children:`Add toast`}),(0,L.jsx)(D,{variant:`outline`,onClick:()=>e.close(),children:`Clear all`})]})}function Se(){return(0,L.jsx)(c,{limit:3,children:(0,L.jsxs)(`div`,{className:`relative flex h-80 w-full items-start justify-center overflow-hidden rounded-lg border bg-muted/30 p-6`,children:[(0,L.jsx)(xe,{}),(0,L.jsx)(g,{className:`absolute right-3 bottom-3 w-[min(356px,calc(100%-1.5rem))]`,children:(0,L.jsx)(l,{})})]})})}var Ce=e({ToastSwipe:()=>Te});function we(){let e=a();return(0,L.jsxs)(`div`,{className:`flex flex-col items-center gap-2 text-center`,children:[(0,L.jsx)(D,{onClick:()=>e.add({title:`Swipe me away`,description:`Drag it left or right, or drag it down.`,timeout:0}),children:`Show a toast`}),(0,L.jsx)(`p`,{className:`max-w-xs text-xs text-muted-foreground`,children:`It stays until you dismiss it. Past 40 px the toast leaves the way you pulled it; let go sooner and it springs back.`})]})}function Te(){return(0,L.jsx)(c,{children:(0,L.jsxs)(`div`,{className:`relative flex h-72 w-full items-start justify-center overflow-hidden rounded-lg border bg-muted/30 p-6`,children:[(0,L.jsx)(we,{}),(0,L.jsx)(g,{className:`absolute right-3 bottom-3 w-[min(356px,calc(100%-1.5rem))]`,children:(0,L.jsx)(l,{rootProps:{swipeDirection:[`left`,`right`,`down`]}})})]})})}var Ee=e({ToastToastsPromiseBased:()=>De});function De(){return(0,L.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:[(0,L.jsx)(D,{onClick:()=>E.success(`Saved successfully`),children:`Success`}),(0,L.jsx)(D,{variant:`outline`,onClick:()=>E(`Heads up`,{description:`Build queued`}),children:`Default`}),(0,L.jsx)(D,{variant:`outline`,onClick:()=>E.warning(`Workers degraded`),children:`Warning`}),(0,L.jsx)(D,{variant:`destructive`,onClick:()=>E.error(`Deploy failed`),children:`Error`}),(0,L.jsx)(D,{variant:`soft`,onClick:()=>E.promise(new Promise(e=>setTimeout(e,1500)),{loading:`Deploying…`,success:`Deployed`,error:`Failed`}),children:`Promise`})]})}var Oe=e({ToastTypesPromise:()=>Ae});function ke(){let e=a();return(0,L.jsxs)(`div`,{className:`flex flex-wrap justify-center gap-2`,children:[(0,L.jsx)(D,{variant:`outline`,onClick:()=>e.add({title:`Saved`,description:`Draft stored.`,type:`success`}),children:`Success`}),(0,L.jsx)(D,{variant:`outline`,onClick:()=>e.add({title:`New version`,description:`Reload to update.`,type:`info`}),children:`Info`}),(0,L.jsx)(D,{variant:`outline`,onClick:()=>e.add({title:`Slow connection`,type:`warning`,timeout:8e3}),children:`Warning`}),(0,L.jsx)(D,{variant:`outline`,onClick:()=>e.add({title:`Payment failed`,description:`Your card was declined.`,type:`error`,priority:`high`,timeout:8e3,actionProps:{children:`Retry`,onClick:()=>e.add({title:`Retrying…`,type:`info`})}}),children:`Error (urgent)`}),(0,L.jsx)(D,{onClick:()=>e.promise(new Promise(e=>setTimeout(()=>e(`Invoice 1042`),1800)),{loading:{title:`Generating invoice…`},success:e=>({title:`Invoice ready`,description:e}),error:{title:`Could not generate`,type:`error`}}),children:`Promise`})]})}function Ae(){return(0,L.jsx)(c,{children:(0,L.jsxs)(`div`,{className:`relative flex h-72 w-full items-start justify-center overflow-hidden rounded-lg border bg-muted/30 p-6`,children:[(0,L.jsx)(ke,{}),(0,L.jsx)(g,{className:`absolute right-3 bottom-3 w-[min(356px,calc(100%-1.5rem))]`,children:(0,L.jsx)(l,{})})]})})}var G=`import { useRef } from "react"
import { CopyIcon } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { AnchoredToast, ToastArrow, ToastPortal, ToastPositioner, ToastProvider, ToastTitle, useToastManager } from "@kitora/ui/toast"

function AnchoredToasts() {
  const { toasts } = useToastManager()
  return (
    <>
      {toasts.map((toast) => (
        <ToastPortal key={toast.id}>
          <ToastPositioner toast={toast}>
            <AnchoredToast toast={toast}>
              <ToastArrow />
              <ToastTitle />
            </AnchoredToast>
          </ToastPositioner>
        </ToastPortal>
      ))}
    </>
  )
}

function CopyButton() {
  const toastManager = useToastManager()
  const ref = useRef<HTMLButtonElement>(null)
  return (
    <Button
      ref={ref}
      variant="outline"
      onClick={() => {
        void navigator.clipboard?.writeText("npm i @kitora/ui").catch(() => {})
        toastManager.add({ title: "Copied", timeout: 1500, positionerProps: { anchor: ref.current, side: "top" } })
      }}
    >
      <CopyIcon /> Copy install command
    </Button>
  )
}

export function ToastAnchored() {
  return (
    <ToastProvider>
      <div className="flex h-56 w-full items-center justify-center rounded-lg border bg-muted/30">
        <CopyButton />
        <AnchoredToasts />
      </div>
    </ToastProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(G,()=>x(()=>import(`./anchored-C-sJA7rE.js`),[]));var K=`import { Button } from "@kitora/ui/button"
import { ToastProvider, ToastViewport, Toasts, useToastManager } from "@kitora/ui/toast"

function Trigger() {
  const toastManager = useToastManager()
  return (
    <Button
      onClick={() =>
        toastManager.add({
          title: "Message sent",
          description: "Your note reached the whole team.",
          actionProps: { children: "Undo", onClick: () => toastManager.add({ title: "Undone", timeout: 2000 }) },
        })
      }
    >
      Send message
    </Button>
  )
}

export function ToastBasic() {
  return (
    <ToastProvider>
      <div className="relative flex h-72 w-full items-start justify-center overflow-hidden rounded-lg border bg-muted/30 p-6">
        <Trigger />
        <ToastViewport className="absolute right-3 bottom-3 w-[min(356px,calc(100%-1.5rem))]">
          <Toasts />
        </ToastViewport>
      </div>
    </ToastProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>x(()=>import(`./basic-Bp6RzOZl.js`),[]));var q=`import type { ComponentType } from "react"
import { CircleAlertIcon, CircleCheckIcon, InfoIcon, LoaderCircleIcon, TriangleAlertIcon } from "lucide-react"
import { Toast, useToastManager, type ToastProviderProps } from "@kitora/primitives/react"
import { Button } from "@kitora/ui/button"
import { CloseButton } from "@kitora/ui/close-button"

/** The glyph each toast type draws (none for a plain toast). */
const ICONS: Partial<Record<string, ComponentType<{ className?: string }>>> = {
  success: CircleCheckIcon,
  info: InfoIcon,
  warning: TriangleAlertIcon,
  error: CircleAlertIcon,
  loading: LoaderCircleIcon,
}

/** Every stacked toast the provider holds: the stack, enter, exit and swipe come from the \`--toast-*\` variables the root writes. */
function Stack() {
  const { toasts } = useToastManager()
  return toasts
    .filter((toast) => toast.positionerProps?.anchor === undefined)
    .map((toast) => {
      const Icon = ICONS[toast.type ?? ""]
      return (
        <Toast.Root
          key={toast.id}
          toast={toast}
          className="absolute end-0 bottom-0 z-[calc(1000-var(--toast-index))] w-full rounded-lg border bg-popover text-popover-foreground shadow-lg outline-none [transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-var(--toast-index)*0.625rem))_scale(calc(1-var(--toast-index)*0.05))] transition-[transform,opacity] duration-500 data-expanded:[transform:translateY(calc(var(--toast-offset-y)*-1-var(--toast-index)*0.5rem))] data-limited:opacity-0 data-starting-style:[transform:translateY(150%)] data-ending-style:opacity-0"
        >
          <Toast.Content className="flex items-start gap-2.5 p-3 pe-9 text-sm data-behind:opacity-0 data-expanded:opacity-100">
            {Icon ? <Icon aria-hidden className="mt-0.5 size-4 shrink-0" /> : null}
            <div className="min-w-0 flex-1">
              <Toast.Title className="font-medium" />
              <Toast.Description className="mt-0.5 text-[13px] text-muted-foreground" />
              <Toast.Action className="mt-2 h-7 rounded-md border px-2.5 text-xs font-medium hover:bg-muted" />
            </div>
            <Toast.Close render={<CloseButton size="xs" className="absolute top-2 end-2" />} />
          </Toast.Content>
        </Toast.Root>
      )
    })
}

/** The button that raises a toast, inside the provider so it can reach the manager. */
function SaveButton() {
  const toastManager = useToastManager()
  return (
    <Button onClick={() => toastManager.add({ title: "Saved", description: "All changes stored.", type: "success", actionProps: { children: "Undo" } })}>
      Save
    </Button>
  )
}

/**
 * Toasts built from the primitives' parts only: \`Toast.Provider\` (pass \`toastManager\` to raise toasts from outside React), \`Viewport\` (the
 * live region, F6 moves focus into it), \`Root\`, \`Content\`, \`Title\`, \`Description\`, \`Action\` and \`Close\`, raised with \`useToastManager()\`.
 */
export function ToastBuildYourOwn({ toastManager }: { toastManager?: ToastProviderProps["toastManager"] }) {
  return (
    <Toast.Provider toastManager={toastManager}>
      <div className="relative flex h-64 w-full items-start justify-center overflow-hidden rounded-lg border p-6">
        <SaveButton />
        <Toast.Viewport className="absolute end-3 bottom-3 w-[min(356px,calc(100%-1.5rem))] outline-none">
          <Stack />
        </Toast.Viewport>
      </div>
    </Toast.Provider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(q,()=>x(()=>import(`./build-your-own-Crs-vb1Y.js`),[]));var J=`import { useState } from "react"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@kitora/ui/card"
import { Toast, ToastAction, ToastClose, ToastContent, ToastDescription, ToastIcon, ToastProvider, ToastTitle, ToastViewport, useToastManager } from "@kitora/ui/toast"

function Deploy() {
  const toastManager = useToastManager()
  const [state, setState] = useState<"idle" | "deploying" | "live">("idle")
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Production
          <Badge variant={state === "live" ? "default" : "secondary"}>{state === "live" ? "Live" : state === "deploying" ? "Deploying" : "Idle"}</Badge>
        </CardTitle>
        <CardDescription>Ship the latest build to every region.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          disabled={state === "deploying"}
          onClick={() => {
            setState("deploying")
            void toastManager
              .promise(new Promise<string>((resolve) => setTimeout(() => resolve("v2.4.1"), 1600)), {
                loading: { title: "Deploying build…" },
                success: (version) => ({ title: "Deployed", description: version, actionProps: { children: "Roll back", onClick: () => setState("idle") } }),
                error: { title: "Deploy failed" },
              })
              .then(() => setState("live"))
          }}
        >
          Deploy
        </Button>
      </CardContent>
    </Card>
  )
}

function Toasts() {
  const { toasts } = useToastManager()
  return (
    <>
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast}>
          <ToastContent>
            <ToastIcon type={toast.type} />
            <div className="min-w-0 flex-1">
              <ToastTitle />
              <ToastDescription />
              <ToastAction />
            </div>
            <ToastClose />
          </ToastContent>
        </Toast>
      ))}
    </>
  )
}

export function ToastComposeDeploy() {
  return (
    <ToastProvider>
      <div className="relative flex h-80 w-full items-start justify-center overflow-hidden rounded-lg border bg-muted/30 p-6">
        <Deploy />
        <ToastViewport className="absolute right-3 bottom-3 w-[min(356px,calc(100%-1.5rem))]">
          <Toasts />
        </ToastViewport>
      </div>
    </ToastProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(J,()=>x(()=>import(`./compose-BbWTNylo.js`),[]));var Y=`import { toast, Toaster, ToastCard } from "@kitora/feedback"
import { Button } from "@kitora/ui/button"

export function ToastPriorityAndCustom() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button variant="destructive" onClick={() => toast.error("Deploy failed", { description: "Errors are high priority: announced at once." })}>
        Error (high)
      </Button>
      <Button variant="outline" onClick={() => toast.info("Index rebuilt", { priority: "high" })}>
        Info, high priority
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast(
            <span>
              Moved <b>3 files</b> to Archive
            </span>,
          )
        }
      >
        Rich title
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.custom(
            (t) => (
              <div className="flex w-full items-center gap-3">
                <span className="grid size-8 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">{String(t.data)}</span>
                <p className="min-w-0 flex-1 text-[13px]">New comment on your pull request</p>
                <ToastCard.Close always />
              </div>
            ),
            { title: "New comment", data: "AB" },
          )
        }
      >
        Custom
      </Button>
      <Toaster swipeDirections="auto" mobileFullWidth />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Y,()=>x(()=>import(`./priority-and-custom-CDE6rDUt.js`),[]));var X=`import { useRef } from "react"
import { Button } from "@kitora/ui/button"
import { ToastProvider, ToastViewport, Toasts, useToastManager } from "@kitora/ui/toast"

function Buttons() {
  const toastManager = useToastManager()
  const count = useRef(0)
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Button
        onClick={() => {
          count.current += 1
          toastManager.add({ title: \`Notification \${count.current}\`, description: "Hover or focus the stack to open it.", timeout: 0 })
        }}
      >
        Add toast
      </Button>
      <Button variant="outline" onClick={() => toastManager.close()}>
        Clear all
      </Button>
    </div>
  )
}

export function ToastStacked() {
  return (
    <ToastProvider limit={3}>
      <div className="relative flex h-80 w-full items-start justify-center overflow-hidden rounded-lg border bg-muted/30 p-6">
        <Buttons />
        <ToastViewport className="absolute right-3 bottom-3 w-[min(356px,calc(100%-1.5rem))]">
          <Toasts />
        </ToastViewport>
      </div>
    </ToastProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(X,()=>x(()=>import(`./stacked-BQAo4RiW.js`),[]));var Z=`import { Button } from "@kitora/ui/button"
import { ToastProvider, ToastViewport, Toasts, useToastManager } from "@kitora/ui/toast"

function Trigger() {
  const toastManager = useToastManager()
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <Button onClick={() => toastManager.add({ title: "Swipe me away", description: "Drag it left or right, or drag it down.", timeout: 0 })}>Show a toast</Button>
      <p className="max-w-xs text-xs text-muted-foreground">It stays until you dismiss it. Past 40 px the toast leaves the way you pulled it; let go sooner and it springs back.</p>
    </div>
  )
}

export function ToastSwipe() {
  return (
    <ToastProvider>
      <div className="relative flex h-72 w-full items-start justify-center overflow-hidden rounded-lg border bg-muted/30 p-6">
        <Trigger />
        <ToastViewport className="absolute right-3 bottom-3 w-[min(356px,calc(100%-1.5rem))]">
          <Toasts rootProps={{ swipeDirection: ["left", "right", "down"] }} />
        </ToastViewport>
      </div>
    </ToastProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>x(()=>import(`./swipe-BbyPH0rE.js`),[]));var Q=`import { toast } from "@kitora/feedback"
import { Button } from "@kitora/ui/button"

export function ToastToastsPromiseBased() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button onClick={() => toast.success("Saved successfully")}>Success</Button>
      <Button variant="outline" onClick={() => toast("Heads up", { description: "Build queued" })}>
        Default
      </Button>
      <Button variant="outline" onClick={() => toast.warning("Workers degraded")}>
        Warning
      </Button>
      <Button variant="destructive" onClick={() => toast.error("Deploy failed")}>
        Error
      </Button>
      <Button
        variant="soft"
        onClick={() => toast.promise(new Promise((res) => setTimeout(res, 1500)), { loading: "Deploying…", success: "Deployed", error: "Failed" })}
      >
        Promise
      </Button>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Q,()=>x(()=>import(`./toasts-promise-based-CPALwpTp.js`),[]));var $=`import { Button } from "@kitora/ui/button"
import { ToastProvider, ToastViewport, Toasts, useToastManager } from "@kitora/ui/toast"

function Buttons() {
  const toastManager = useToastManager()
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Button variant="outline" onClick={() => toastManager.add({ title: "Saved", description: "Draft stored.", type: "success" })}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toastManager.add({ title: "New version", description: "Reload to update.", type: "info" })}>
        Info
      </Button>
      <Button variant="outline" onClick={() => toastManager.add({ title: "Slow connection", type: "warning", timeout: 8000 })}>
        Warning
      </Button>
      <Button variant="outline" onClick={() => toastManager.add({ title: "Payment failed", description: "Your card was declined.", type: "error", priority: "high", timeout: 8000, actionProps: { children: "Retry", onClick: () => toastManager.add({ title: "Retrying…", type: "info" }) } })}>
        Error (urgent)
      </Button>
      <Button
        onClick={() =>
          toastManager.promise(new Promise<string>((resolve) => setTimeout(() => resolve("Invoice 1042"), 1800)), {
            loading: { title: "Generating invoice…" },
            success: (result) => ({ title: "Invoice ready", description: result }),
            error: { title: "Could not generate", type: "error" },
          })
        }
      >
        Promise
      </Button>
    </div>
  )
}

export function ToastTypesPromise() {
  return (
    <ToastProvider>
      <div className="relative flex h-72 w-full items-start justify-center overflow-hidden rounded-lg border bg-muted/30 p-6">
        <Buttons />
        <ToastViewport className="absolute right-3 bottom-3 w-[min(356px,calc(100%-1.5rem))]">
          <Toasts />
        </ToastViewport>
      </div>
    </ToastProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>x(()=>import(`./types-promise-D1bDsiWK.js`),[]));var je={"./demos/toast/anchored.tsx":F,"./demos/toast/basic.tsx":V,"./demos/toast/build-your-own.tsx":W,"./demos/toast/compose.tsx":me,"./demos/toast/priority-and-custom.tsx":ve,"./demos/toast/stacked.tsx":be,"./demos/toast/swipe.tsx":Ce,"./demos/toast/toasts-promise-based.tsx":Ee,"./demos/toast/types-promise.tsx":Oe},Me={"./demos/toast/anchored.tsx":G,"./demos/toast/basic.tsx":K,"./demos/toast/build-your-own.tsx":q,"./demos/toast/compose.tsx":J,"./demos/toast/priority-and-custom.tsx":Y,"./demos/toast/stacked.tsx":X,"./demos/toast/swipe.tsx":Z,"./demos/toast/toasts-promise-based.tsx":Q,"./demos/toast/types-promise.tsx":$};export{je as modules,Me as sources};