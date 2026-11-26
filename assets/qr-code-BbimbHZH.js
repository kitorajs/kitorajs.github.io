import{n as e,r as t}from"./rolldown-runtime-S-ySWqyJ.js";import{t as n}from"./input-C8M4VLUF.js";import{Bc as r,Cc as i,Ic as a}from"./index-q72zUtm9.js";import{t as o}from"./label-DjxTNoON.js";import{n as s,r as c}from"./totp-C-21QxHn.js";import{t as l}from"./qr-HXK96Ad6.js";var u=e({QrCodeAuthenticator:()=>m}),d=t(r(),1),f=a(),p=`JBSWY3DPEHPK3PXPJBSWY3DPEHPK3PXP`;function m(){let[e,t]=(0,d.useState)(`ada@example.com`);return(0,f.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-5`,children:[(0,f.jsx)(l,{value:c({secret:p,issuer:`Acme`,account:e}),size:132,label:`Authenticator QR code for ${e}`}),(0,f.jsxs)(`div`,{className:`grid w-60 gap-2`,children:[(0,f.jsx)(o,{htmlFor:`qr-account`,children:`Account`}),(0,f.jsx)(n,{id:`qr-account`,value:e,onChange:e=>t(e.target.value)}),(0,f.jsx)(`p`,{className:`font-mono text-xs tracking-wide`,children:s(p)})]})]})}var h=e({QrCodeDefault:()=>g});function g(){return(0,f.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,f.jsx)(l,{value:`https://example.com/invite/7f3a91`,size:148,label:`QR code for the invite link`}),(0,f.jsx)(`code`,{className:`font-mono text-xs text-muted-foreground`,children:`https://example.com/invite/7f3a91`})]})}var _=e({QrCodeErrorCorrection:()=>y}),v=[`L`,`M`,`Q`,`H`];function y(){return(0,f.jsx)(`div`,{className:`flex flex-wrap items-end justify-center gap-5`,children:v.map(e=>(0,f.jsxs)(`figure`,{className:`flex flex-col items-center gap-1`,children:[(0,f.jsx)(l,{value:`https://example.com`,size:96,ecc:e,margin:2,label:`QR code with error correction ${e}`}),(0,f.jsxs)(`figcaption`,{className:`text-xs text-muted-foreground`,children:[`ecc `,e]})]},e))})}var b=`import { useState } from "react"
import { QrCode, groupSecret, totpUri } from "@kitora/auth"
import { Input } from "@kitora/ui/input"
import { Label } from "@kitora/ui/label"

const SECRET = "JBSWY3DPEHPK3PXPJBSWY3DPEHPK3PXP"

// Two-factor setup: \`totpUri\` builds the otpauth:// link an authenticator app scans, and the code redraws
// as the account changes. \`groupSecret\` prints the secret in groups of four for typing by hand.
export function QrCodeAuthenticator() {
  const [account, setAccount] = useState("ada@example.com")
  const uri = totpUri({ secret: SECRET, issuer: "Acme", account })
  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      <QrCode value={uri} size={132} label={\`Authenticator QR code for \${account}\`} />
      <div className="grid w-60 gap-2">
        <Label htmlFor="qr-account">Account</Label>
        <Input id="qr-account" value={account} onChange={(event) => setAccount(event.target.value)} />
        <p className="font-mono text-xs tracking-wide">{groupSecret(SECRET)}</p>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(b,()=>i(()=>import(`./authenticator-DxlCmEpS.js`),[]));var x=`import { QrCode } from "@kitora/auth"

// A QR code drawn as one SVG path, no network or canvas. \`label\` is its accessible name; scanned, this one
// opens the URL.
export function QrCodeDefault() {
  return (
    <div className="flex flex-col items-center gap-2">
      <QrCode value="https://example.com/invite/7f3a91" size={148} label="QR code for the invite link" />
      <code className="font-mono text-xs text-muted-foreground">https://example.com/invite/7f3a91</code>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>i(()=>import(`./default-DGR-9FnI.js`),[]));var S=`import { QrCode } from "@kitora/auth"

const LEVELS = ["L", "M", "Q", "H"] as const

// \`ecc\` trades density for damage tolerance: L recovers about 7% of the code, H about 30%. \`margin\` is the
// quiet zone in modules.
export function QrCodeErrorCorrection() {
  return (
    <div className="flex flex-wrap items-end justify-center gap-5">
      {LEVELS.map((ecc) => (
        <figure key={ecc} className="flex flex-col items-center gap-1">
          <QrCode value="https://example.com" size={96} ecc={ecc} margin={2} label={\`QR code with error correction \${ecc}\`} />
          <figcaption className="text-xs text-muted-foreground">ecc {ecc}</figcaption>
        </figure>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>i(()=>import(`./error-correction-zeS2aXUV.js`),[]));var C={"./demos/qr-code/authenticator.tsx":u,"./demos/qr-code/default.tsx":h,"./demos/qr-code/error-correction.tsx":_},w={"./demos/qr-code/authenticator.tsx":b,"./demos/qr-code/default.tsx":x,"./demos/qr-code/error-correction.tsx":S};export{C as modules,w as sources};