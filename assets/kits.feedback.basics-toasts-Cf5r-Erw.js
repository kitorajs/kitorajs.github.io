import{S as e,a as t,i as n,n as r,r as i,t as a,x as o}from"./toaster-CJLpSLxB.js";import{s}from"./kit-docs-CvNs0WqT.js";import{Cc as c,Ic as l,gt as u,mt as d,ti as f}from"./index-9y5uwRd3.js";import"./kit-gallery-B-Yr9fP4.js";import{t as p}from"./example-CZLJLtIC.js";import{t as m}from"./-kits.feedback.shared-CxfmAMWX.js";var h=l(),g=d({position:`bottom-right`});function _(){let n=e(g);return(0,h.jsx)(t,{classNames:{toast:`rounded-xl`},children:o(g).map(e=>(0,h.jsx)(i,{position:e,toaster:g,contained:!0,listRef:n(e),renderToast:e=>(0,h.jsxs)(r.Root,{toast:e,children:[(0,h.jsx)(r.Icon,{}),(0,h.jsx)(r.Count,{}),(0,h.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,h.jsx)(r.Title,{count:!1}),(0,h.jsx)(r.Description,{})]}),(0,h.jsx)(r.Action,{className:`self-center`}),(0,h.jsx)(r.Close,{always:!0}),(0,h.jsx)(r.TimeBar,{})]})},e))})}function v(){return(0,h.jsxs)(`div`,{className:`flex h-full flex-wrap content-start gap-2 p-4`,children:[(0,h.jsx)(f,{size:`sm`,variant:`outline`,onClick:()=>g.success(`Report exported`,{description:`q4-report.csv, 2.1 MB`,action:{label:`Open`,onClick:()=>g.info(`Opening q4-report.csv`)}}),children:`Export`}),(0,h.jsx)(f,{size:`sm`,variant:`outline`,onClick:()=>g.warning(`Rate limit close`,{description:`90% of this hour's calls used.`}),children:`Warn (press twice)`}),(0,h.jsx)(_,{})]})}var y=`import { Button } from "@kitora/ui/button"
import { createToaster, ToastCard, ToasterLook, ToastRegion, useToastPositions, useToasterBindings } from "@kitora/feedback"

const toast = createToaster({ position: "bottom-right" })

/**
 * \`<Toaster />\` rebuilt from its public parts: the page bindings (hidden-tab
 * pause, F8), one \`ToastRegion\` per position in use, and each toast composed
 * from \`ToastCard\` parts. Here the actions sit on the right and the dedupe
 * count moves next to the icon; drop or reorder any part the same way.
 */
function MyToaster() {
  const register = useToasterBindings(toast)
  const positions = useToastPositions(toast)
  return (
    <ToasterLook classNames={{ toast: "rounded-xl" }}>
      {positions.map((position) => (
        <ToastRegion
          key={position}
          position={position}
          toaster={toast}
          contained
          listRef={register(position)}
          renderToast={(t) => (
            <ToastCard.Root toast={t}>
              <ToastCard.Icon />
              <ToastCard.Count />
              <div className="min-w-0 flex-1">
                <ToastCard.Title count={false} />
                <ToastCard.Description />
              </div>
              <ToastCard.Action className="self-center" />
              <ToastCard.Close always />
              <ToastCard.TimeBar />
            </ToastCard.Root>
          )}
        />
      ))}
    </ToasterLook>
  )
}

/** Raise toasts into the composed toaster. */
export function BasicToastCompose() {
  return (
    <div className="flex h-full flex-wrap content-start gap-2 p-4">
      <Button size="sm" variant="outline" onClick={() => toast.success("Report exported", { description: "q4-report.csv, 2.1 MB", action: { label: "Open", onClick: () => toast.info("Opening q4-report.csv") } })}>
        Export
      </Button>
      <Button size="sm" variant="outline" onClick={() => toast.warning("Rate limit close", { description: "90% of this hour's calls used." })}>
        Warn (press twice)
      </Button>
      <MyToaster />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>c(()=>import(`./toast-compose-BcIG044v.js`),[]));var b=d({position:`bottom-right`});function x(){return(0,h.jsxs)(`div`,{className:`flex h-full flex-wrap content-start gap-2 p-4`,children:[(0,h.jsx)(f,{size:`sm`,variant:`outline`,onClick:()=>b(`Invite sent to 3 people`,{action:{label:`View`,onClick:()=>b.info(`Opening the invite list`)},cancel:{label:`Dismiss`,onClick:()=>{}}}),children:`With action`}),(0,h.jsx)(f,{size:`sm`,variant:`outline`,onClick:()=>b.error(`Payment failed`,{description:`Your card was declined.`,duration:1/0,action:{label:`Update card`,onClick:()=>b.success(`Card updated`)}}),children:`Sticky until dismissed`}),(0,h.jsx)(n,{toaster:b,contained:!0,closeButton:!0})]})}var S=`import { Button } from "@kitora/ui/button"
import { createToaster, Toaster } from "@kitora/feedback"

const toast = createToaster({ position: "bottom-right" })

/** An action button and a cancel button; the toast closes after either. */
export function BasicToastActions() {
  return (
    <div className="flex h-full flex-wrap content-start gap-2 p-4">
      <Button
        size="sm"
        variant="outline"
        onClick={() =>
          toast("Invite sent to 3 people", {
            action: { label: "View", onClick: () => toast.info("Opening the invite list") },
            cancel: { label: "Dismiss", onClick: () => {} },
          })
        }
      >
        With action
      </Button>
      <Button size="sm" variant="outline" onClick={() => toast.error("Payment failed", { description: "Your card was declined.", duration: Number.POSITIVE_INFINITY, action: { label: "Update card", onClick: () => toast.success("Card updated") } })}>
        Sticky until dismissed
      </Button>
      <Toaster toaster={toast} contained closeButton />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>c(()=>import(`./toast-actions-W3haqPpP.js`),[]));var C=d({position:`bottom-right`});function w(){return(0,h.jsxs)(`div`,{className:`flex h-full flex-wrap content-start gap-2 p-4`,children:[(0,h.jsx)(f,{size:`sm`,variant:`outline`,onClick:()=>C.success(`Changes saved`),children:`Success`}),(0,h.jsx)(f,{size:`sm`,variant:`outline`,onClick:()=>C.error(`Payment failed`,{description:`The card was declined.`,action:{label:`Retry`,onClick:()=>C.success(`Paid`)}}),children:`Error`}),(0,h.jsx)(n,{toaster:C,contained:!0,renderToast:e=>e.type===`error`?(0,h.jsxs)(r.Root,{toast:e,className:`border-destructive/40`,children:[(0,h.jsx)(r.Icon,{}),(0,h.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,h.jsx)(r.Title,{}),(0,h.jsx)(r.Description,{}),(0,h.jsx)(r.Actions,{})]}),(0,h.jsx)(r.Close,{always:!0})]}):(0,h.jsx)(a,{toast:e})})]})}var T=`import { Button } from "@kitora/ui/button"
import { createToaster, DefaultToast, ToastCard, Toaster } from "@kitora/feedback"

const toast = createToaster({ position: "bottom-right" })

/**
 * \`renderToast\` replaces every card, and \`DefaultToast\` is the preset card, so
 * a host can redraw only some toasts. Here an error gets its own card with a
 * Retry action under the text, and every other type stays the default.
 */
export function BasicToastDefault() {
  return (
    <div className="flex h-full flex-wrap content-start gap-2 p-4">
      <Button size="sm" variant="outline" onClick={() => toast.success("Changes saved")}>Success</Button>
      <Button size="sm" variant="outline" onClick={() => toast.error("Payment failed", { description: "The card was declined.", action: { label: "Retry", onClick: () => toast.success("Paid") } })}>Error</Button>
      <Toaster
        toaster={toast}
        contained
        renderToast={(t) =>
          t.type === "error" ? (
            <ToastCard.Root toast={t} className="border-destructive/40">
              <ToastCard.Icon />
              <div className="min-w-0 flex-1">
                <ToastCard.Title />
                <ToastCard.Description />
                <ToastCard.Actions />
              </div>
              <ToastCard.Close always />
            </ToastCard.Root>
          ) : (
            <DefaultToast toast={t} />
          )
        }
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>c(()=>import(`./toast-default-RSfxwdl-.js`),[]));var E=d();function D(){return(0,h.jsxs)(`div`,{className:`grid h-full place-items-center p-4`,children:[(0,h.jsx)(`div`,{className:`grid grid-cols-3 gap-1.5`,children:u.map(e=>(0,h.jsx)(f,{size:`sm`,variant:`outline`,className:`font-mono text-[11px]`,onClick:()=>E(`Hello from ${e}`,{position:e}),children:e},e))}),(0,h.jsx)(n,{toaster:E,contained:!0})]})}var O=`import { Button } from "@kitora/ui/button"
import { createToaster, TOAST_POSITIONS, Toaster } from "@kitora/feedback"

const toast = createToaster()

/** Each toast can name its own position; the toaster draws one stack per corner in use. */
export function BasicToastPositions() {
  return (
    <div className="grid h-full place-items-center p-4">
      <div className="grid grid-cols-3 gap-1.5">
        {TOAST_POSITIONS.map((position) => (
          <Button key={position} size="sm" variant="outline" className="font-mono text-[11px]" onClick={() => toast(\`Hello from \${position}\`, { position })}>
            {position}
          </Button>
        ))}
      </div>
      <Toaster toaster={toast} contained />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>c(()=>import(`./toast-positions-ruuG6yM0.js`),[]));var k=d({position:`bottom-right`}),A=e=>new Promise(t=>setTimeout(t,e));async function j(e){if(await A(1600),e)throw Error(`Build exited with code 1`);return{url:`acme-7f3a.app`}}function M(){return(0,h.jsxs)(`div`,{className:`flex h-full flex-wrap content-start gap-2 p-4`,children:[(0,h.jsx)(f,{size:`sm`,variant:`outline`,onClick:()=>void k.promise(j(!1),{loading:`Deploying…`,success:e=>`Deployed to ${e.url}`,error:`Deploy failed`}),children:`Deploy (succeeds)`}),(0,h.jsx)(f,{size:`sm`,variant:`outline`,onClick:()=>void k.promise(j(!0),{loading:`Deploying…`,success:`Deployed`,error:`Deploy failed`,description:{error:e=>e instanceof Error?e.message:`Unknown error`}}).catch(()=>{}),children:`Deploy (fails)`}),(0,h.jsx)(n,{toaster:k,contained:!0})]})}var N=`import { Button } from "@kitora/ui/button"
import { createToaster, Toaster } from "@kitora/feedback"

const toast = createToaster({ position: "bottom-right" })

const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

async function deploy(fail: boolean): Promise<{ url: string }> {
  await wait(1600)
  if (fail) throw new Error("Build exited with code 1")
  return { url: "acme-7f3a.app" }
}

/** One toast that goes loading → success or error when the promise settles. */
export function BasicToastPromise() {
  return (
    <div className="flex h-full flex-wrap content-start gap-2 p-4">
      <Button size="sm" variant="outline" onClick={() => void toast.promise(deploy(false), { loading: "Deploying…", success: (r) => \`Deployed to \${r.url}\`, error: "Deploy failed" })}>
        Deploy (succeeds)
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={() =>
          void toast
            .promise(deploy(true), { loading: "Deploying…", success: "Deployed", error: "Deploy failed", description: { error: (e) => (e instanceof Error ? e.message : "Unknown error") } })
            .catch(() => {})
        }
      >
        Deploy (fails)
      </Button>
      <Toaster toaster={toast} contained />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(N,()=>c(()=>import(`./toast-promise-DbojCiAN.js`),[]));var P=d({position:`bottom-right`});function F(){return(0,h.jsxs)(`div`,{className:`flex h-full flex-wrap content-start gap-2 p-4`,children:[(0,h.jsx)(f,{size:`sm`,variant:`outline`,onClick:()=>P(`Event created`,{description:`Sunday, 20 October at 9:00`}),children:`Default`}),(0,h.jsx)(f,{size:`sm`,variant:`outline`,onClick:()=>P.success(`Changes saved`),children:`Success`}),(0,h.jsx)(f,{size:`sm`,variant:`outline`,onClick:()=>P.info(`A new version is available`,{description:`Reload to update.`}),children:`Info`}),(0,h.jsx)(f,{size:`sm`,variant:`outline`,onClick:()=>P.warning(`Storage almost full`,{description:`92% of 10 GB used.`}),children:`Warning`}),(0,h.jsx)(f,{size:`sm`,variant:`outline`,onClick:()=>P.error(`Couldn't send the message`,{description:`Check your connection and try again.`}),children:`Error`}),(0,h.jsx)(f,{size:`sm`,variant:`outline`,onClick:()=>P.loading(`Syncing…`,{duration:3e3}),children:`Loading`}),(0,h.jsx)(n,{toaster:P,contained:!0})]})}var I=`import { Button } from "@kitora/ui/button"
import { createToaster, Toaster } from "@kitora/feedback"

// A toaster of its own, drawn inside this box (\`contained\`). An app usually
// imports the app-wide \`toast\` and mounts one \`<Toaster />\` at its root instead.
const toast = createToaster({ position: "bottom-right" })

/** One call per type. Errors and warnings stay up longer; \`loading\` stays until updated. */
export function BasicToastTypes() {
  return (
    <div className="flex h-full flex-wrap content-start gap-2 p-4">
      <Button size="sm" variant="outline" onClick={() => toast("Event created", { description: "Sunday, 20 October at 9:00" })}>Default</Button>
      <Button size="sm" variant="outline" onClick={() => toast.success("Changes saved")}>Success</Button>
      <Button size="sm" variant="outline" onClick={() => toast.info("A new version is available", { description: "Reload to update." })}>Info</Button>
      <Button size="sm" variant="outline" onClick={() => toast.warning("Storage almost full", { description: "92% of 10 GB used." })}>Warning</Button>
      <Button size="sm" variant="outline" onClick={() => toast.error("Couldn't send the message", { description: "Check your connection and try again." })}>Error</Button>
      <Button size="sm" variant="outline" onClick={() => toast.loading("Syncing…", { duration: 3000 })}>Loading</Button>
      <Toaster toaster={toast} contained />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>c(()=>import(`./toast-types-nPujo74s.js`),[]));function L(){return(0,h.jsxs)(`div`,{children:[(0,h.jsxs)(s,{title:`Basics: toasts`,children:['`toast("…")` and `toast.success(…)` raise a toast; `',`<Toaster />`,"` draws them. These demos each run their own `createToaster()` drawn inside the box, so they do not pile into one corner of the page."]}),(0,h.jsx)(p,{n:1,title:`Toast types`,blurb:`Default, success, info, warning, error and loading. Hover the stack to fan it out and pause the timers.`,code:I,children:(0,h.jsx)(m,{testId:`basic-types`,height:260,children:(0,h.jsx)(F,{})})}),(0,h.jsx)(p,{n:2,title:`Actions`,blurb:"An action and a cancel button. A sticky toast (`duration: Infinity`) waits for the user.",code:S,children:(0,h.jsx)(m,{testId:`basic-actions`,height:240,children:(0,h.jsx)(x,{})})}),(0,h.jsx)(p,{n:3,title:`Promise toast`,blurb:"`toast.promise(p, { loading, success, error })`: one toast that changes when the promise settles.",code:N,children:(0,h.jsx)(m,{testId:`basic-promise`,height:200,children:(0,h.jsx)(M,{})})}),(0,h.jsx)(p,{n:4,title:`Positions`,blurb:`Six positions; each toast may name its own.`,code:O,children:(0,h.jsx)(m,{testId:`basic-positions`,height:300,children:(0,h.jsx)(D,{})})}),(0,h.jsx)(p,{n:5,title:`Compose your own`,blurb:"`<Toaster />` rebuilt from its public parts: `useToasterBindings`, one `ToastRegion` per position, and each toast built from `ToastCard` parts, here with the action on the right and the count by the icon.",code:y,children:(0,h.jsx)(m,{testId:`basic-compose`,height:240,children:(0,h.jsx)(v,{})})}),(0,h.jsx)(p,{n:6,title:`Redraw some toasts`,blurb:"`renderToast` with `DefaultToast` for most types and a `ToastCard` composition only for errors.",code:T,children:(0,h.jsx)(m,{testId:`basic-default-toast`,height:240,children:(0,h.jsx)(w,{})})})]})}export{L as component};