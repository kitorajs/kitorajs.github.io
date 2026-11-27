import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./switch-CcCDBWVn.js";import{t as r}from"./plus-DdsWgtk9.js";import{t as i}from"./trash-2-DLTNQhTV.js";import{Ec as a,Uc as o,ri as s,zc as c}from"./index-BZuUy872.js";import{t as l}from"./badge-zOMNRv4l.js";import{t as u}from"./label-Cw7IrV7Q.js";import{n as d,t as f}from"./alert-Bdf8DvYD.js";import{a as p,c as m,i as h,n as g,o as _,r as v,s as y,t as b}from"./api-key-card-B8raoavv.js";var x=e({ApiKeyCardComposeKeysPanel:()=>C}),S=c();function C(){return(0,S.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:(0,S.jsxs)(`div`,{className:`w-full max-w-md space-y-3`,children:[(0,S.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2`,children:[(0,S.jsx)(`h3`,{className:`text-sm font-semibold`,children:`API keys`}),(0,S.jsxs)(s,{size:`sm`,children:[(0,S.jsx)(r,{}),`New key`]})]}),(0,S.jsx)(f,{children:(0,S.jsx)(d,{children:`Keys grant full access. Never commit them to a repo.`})}),(0,S.jsx)(b,{name:`Production`,value:`dk_live_xxxxxxxxxxxxxxxxxxxxxxxx`,createdAt:`14 days ago`,lastUsed:`2 hours ago`,onRotate:()=>{}})]})})}var w=e({ApiKeyCardControlledReveal:()=>E}),T=t(o(),1);function E(){let[e,t]=(0,T.useState)(!1),[r,i]=(0,T.useState)(0);return(0,S.jsxs)(`div`,{className:`w-full max-w-md space-y-3`,children:[(0,S.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,S.jsx)(n,{id:`reveal-all`,checked:e,onCheckedChange:t}),(0,S.jsx)(u,{htmlFor:`reveal-all`,children:`Show key`}),(0,S.jsxs)(`span`,{className:`ms-auto text-xs text-muted-foreground`,children:[`Copied `,r,` times`]})]}),(0,S.jsx)(b,{name:`Production · ingest`,value:`dk_demo_xxxxxxxxxxxxxxxxxxxxxxxx`,createdAt:`14 days ago`,revealed:e,onRevealedChange:t,onCopy:()=>i(e=>e+1)}),(0,S.jsx)(b,{name:`Webhook signing secret`,value:`whsec_9b2d7f3a`,canReveal:!1,maskLength:16,createdAt:`shown once at creation`})]})}var D=e({ApiKeyCardParts:()=>O});function O(){return(0,S.jsx)(`div`,{className:`w-full max-w-md`,children:(0,S.jsxs)(y,{value:`dk_demo_xxxxxxxxxxxxxxxxxxxxxxxx`,labels:{created:e=>`créée ${e}`,reveal:`Afficher la clé`,hide:`Masquer la clé`,copy:`Copier la clé`,copied:`Copiée`,copyFailed:`Échec de la copie`},children:[(0,S.jsx)(p,{name:`Production`,createdAt:`il y a 3 jours`,children:(0,S.jsx)(l,{variant:`secondary`,children:`active`})}),(0,S.jsxs)(h,{children:[(0,S.jsx)(m,{}),(0,S.jsxs)(g,{children:[(0,S.jsx)(_,{}),(0,S.jsx)(v,{}),(0,S.jsx)(s,{variant:`outline`,size:`icon-sm`,"aria-label":`Révoquer la clé`,children:(0,S.jsx)(i,{})})]})]})]})})}var k=e({ApiKeyCardRevealCopyRotate:()=>A});function A(){return(0,S.jsx)(`div`,{className:`flex flex-wrap items-center gap-3 justify-start`,children:(0,S.jsxs)(`div`,{className:`w-full max-w-md space-y-3`,children:[(0,S.jsx)(b,{name:`Production · ingest`,value:`dk_live_xxxxxxxxxxxxxxxxxxxxxxxx`,createdAt:`14 days ago`,lastUsed:`2 hours ago`,onRotate:()=>{}}),(0,S.jsx)(b,{name:`Preview · read-only`,value:`dk_test_xxxxxxxxxxxxxxxxxxxxxxxx_8a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p`,createdAt:`2 days ago`,lastUsed:`never`})]})})}var j=e({ApiKeyCardRotating:()=>N});function M(){return`dk_live_${Math.random().toString(36).slice(2,14)}${Math.random().toString(36).slice(2,14)}`}function N(){let[e,t]=(0,T.useState)(`dk_demo_xxxxxxxxxxxxxxxxxxxxxxxx`),[n,r]=(0,T.useState)(!1);return(0,S.jsx)(`div`,{className:`w-full max-w-md`,children:(0,S.jsx)(b,{name:`Production`,value:e,maskLength:20,createdAt:`just now`,onRotate:()=>{r(!0),setTimeout(()=>{t(M()),r(!1)},1500)},rotating:n})})}var P=`import { Plus } from "lucide-react"
import { APIKeyCard } from "@kitora/ui/api-key-card"
import { Button } from "@kitora/ui/button"
import { Alert, AlertDescription } from "@kitora/ui/alert"

export function ApiKeyCardComposeKeysPanel() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div className="w-full max-w-md space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-sm font-semibold">API keys</h3>
          <Button size="sm">
            <Plus />
            New key
          </Button>
        </div>
        <Alert>
          <AlertDescription>Keys grant full access. Never commit them to a repo.</AlertDescription>
        </Alert>
        <APIKeyCard name="Production" value="dk_live_xxxxxxxxxxxxxxxxxxxxxxxx" createdAt="14 days ago" lastUsed="2 hours ago" onRotate={() => {}} />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(P,()=>a(()=>import(`./compose-CfKa0O_p.js`),[]));var F=`import { useState } from "react"
import { APIKeyCard } from "@kitora/ui/api-key-card"
import { Switch } from "@kitora/ui/switch"
import { Label } from "@kitora/ui/label"

export function ApiKeyCardControlledReveal() {
  const [revealed, setRevealed] = useState(false)
  const [copies, setCopies] = useState(0)
  return (
    <div className="w-full max-w-md space-y-3">
      <div className="flex items-center gap-2">
        <Switch id="reveal-all" checked={revealed} onCheckedChange={setRevealed} />
        <Label htmlFor="reveal-all">Show key</Label>
        <span className="ms-auto text-xs text-muted-foreground">Copied {copies} times</span>
      </div>
      <APIKeyCard
        name="Production · ingest"
        value="dk_demo_xxxxxxxxxxxxxxxxxxxxxxxx"
        createdAt="14 days ago"
        revealed={revealed}
        onRevealedChange={setRevealed}
        onCopy={() => setCopies((n) => n + 1)}
      />
      <APIKeyCard name="Webhook signing secret" value="whsec_9b2d7f3a" canReveal={false} maskLength={16} createdAt="shown once at creation" />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>a(()=>import(`./controlled-reveal-BnsDnlFV.js`),[]));var I=`import { Trash2 } from "lucide-react"
import { ApiKeyCardActions, ApiKeyCardCopyButton, ApiKeyCardField, ApiKeyCardHeader, ApiKeyCardRevealButton, ApiKeyCardRoot, ApiKeyCardValue } from "@kitora/ui/api-key-card"
import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"

export function ApiKeyCardParts() {
  return (
    <div className="w-full max-w-md">
      <ApiKeyCardRoot value="dk_demo_xxxxxxxxxxxxxxxxxxxxxxxx" labels={{ created: (when) => \`créée \${when}\`, reveal: "Afficher la clé", hide: "Masquer la clé", copy: "Copier la clé", copied: "Copiée", copyFailed: "Échec de la copie" }}>
        <ApiKeyCardHeader name="Production" createdAt="il y a 3 jours">
          <Badge variant="secondary">active</Badge>
        </ApiKeyCardHeader>
        <ApiKeyCardField>
          <ApiKeyCardValue />
          <ApiKeyCardActions>
            <ApiKeyCardRevealButton />
            <ApiKeyCardCopyButton />
            <Button variant="outline" size="icon-sm" aria-label="Révoquer la clé">
              <Trash2 />
            </Button>
          </ApiKeyCardActions>
        </ApiKeyCardField>
      </ApiKeyCardRoot>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(I,()=>a(()=>import(`./parts-BkXST_FT.js`),[]));var L=`import { APIKeyCard } from "@kitora/ui/api-key-card"

export function ApiKeyCardRevealCopyRotate() {
  return (
    <div className="flex flex-wrap items-center gap-3 justify-start">
      <div className="w-full max-w-md space-y-3">
        <APIKeyCard
          name="Production · ingest"
          value="dk_live_xxxxxxxxxxxxxxxxxxxxxxxx"
          createdAt="14 days ago"
          lastUsed="2 hours ago"
          onRotate={() => {}}
        />
        <APIKeyCard name="Preview · read-only" value="dk_test_xxxxxxxxxxxxxxxxxxxxxxxx_8a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p" createdAt="2 days ago" lastUsed="never" />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(L,()=>a(()=>import(`./reveal-copy-rotate-CuT4k8m3.js`),[]));var R=`import { useState } from "react"
import { APIKeyCard } from "@kitora/ui/api-key-card"

function newKey() {
  return \`dk_live_\${Math.random().toString(36).slice(2, 14)}\${Math.random().toString(36).slice(2, 14)}\`
}

export function ApiKeyCardRotating() {
  const [value, setValue] = useState("dk_demo_xxxxxxxxxxxxxxxxxxxxxxxx")
  const [rotating, setRotating] = useState(false)
  const rotate = () => {
    setRotating(true)
    setTimeout(() => {
      setValue(newKey())
      setRotating(false)
    }, 1500)
  }
  return (
    <div className="w-full max-w-md">
      <APIKeyCard name="Production" value={value} maskLength={20} createdAt="just now" onRotate={rotate} rotating={rotating} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>a(()=>import(`./rotating-B9LN-TW_.js`),[]));var z={"./demos/api-key-card/compose.tsx":x,"./demos/api-key-card/controlled-reveal.tsx":w,"./demos/api-key-card/parts.tsx":D,"./demos/api-key-card/reveal-copy-rotate.tsx":k,"./demos/api-key-card/rotating.tsx":j},B={"./demos/api-key-card/compose.tsx":P,"./demos/api-key-card/controlled-reveal.tsx":F,"./demos/api-key-card/parts.tsx":I,"./demos/api-key-card/reveal-copy-rotate.tsx":L,"./demos/api-key-card/rotating.tsx":R};export{z as modules,B as sources};