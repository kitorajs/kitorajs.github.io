import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-Cf27Kpa-.js";import{Ec as n,Uc as r,ri as i,zc as a}from"./index-BZuUy872.js";import{c as o}from"./validate-DKo_UZcY.js";import{r as s}from"./adapter-Ck31NbGD.js";import{n as c,t as l}from"./avatar-upload-BTTDL-MF.js";import"./kit-gallery-BBavj2rC.js";import{t as u}from"./example-B67lLz1F.js";import{i as d,t as f}from"./-kits.upload.shared-iwUT_m60.js";var p=e(r(),1),m=a();function h(){let[e]=(0,p.useState)(()=>s({bytesPerSecond:120*1024})),[t,n]=(0,p.useState)();return(0,m.jsx)(`div`,{className:`p-4`,children:(0,m.jsx)(l,{name:`Aman Bansal`,value:t,onChange:n,adapter:e})})}var g=`import { useState } from "react"
import { AvatarUpload, createFakeAdapter } from "@kitora/upload"

/** Click or drop an image on the avatar, crop it to a circle, and it uploads with a progress ring. */
export function BasicAvatar() {
  const [adapter] = useState(() => createFakeAdapter({ bytesPerSecond: 120 * 1024 }))
  const [url, setUrl] = useState<string>()
  return (
    <div className="p-4">
      <AvatarUpload name="Aman Bansal" value={url} onChange={setUrl} adapter={adapter} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(g,()=>n(()=>import(`./avatar-BHR49IK4.js`),[]));function _(){let[e,t]=(0,p.useState)(),[n,r]=(0,p.useState)(),[a,s]=(0,p.useState)(),l=(0,p.useRef)(null);(0,p.useEffect)(()=>t(d(7,1600,1067)),[]);let u=async()=>{let e=await l.current?.toBlob({width:480,type:`image/jpeg`,quality:.9});e&&s({url:URL.createObjectURL(e),size:e.size})};return(0,m.jsxs)(`div`,{className:`flex flex-col gap-2 p-3 sm:flex-row`,children:[(0,m.jsx)(`div`,{className:`min-w-0 flex-1`,children:e?(0,m.jsx)(c,{ref:l,src:e,onChange:r,height:280}):null}),(0,m.jsxs)(`div`,{className:`flex w-full shrink-0 flex-col gap-2 text-[12px] sm:w-44`,children:[(0,m.jsx)(i,{size:`sm`,onClick:()=>void u(),children:`Export crop`}),n?(0,m.jsxs)(`dl`,{className:`grid grid-cols-2 gap-x-2 text-muted-foreground tabular-nums`,children:[(0,m.jsx)(`dt`,{children:`Centre`}),(0,m.jsxs)(`dd`,{className:`text-right text-foreground`,children:[Math.round(n.centerX),`, `,Math.round(n.centerY)]}),(0,m.jsx)(`dt`,{children:`Size`}),(0,m.jsxs)(`dd`,{className:`text-right text-foreground`,children:[Math.round(n.width),` × `,Math.round(n.height)]}),(0,m.jsx)(`dt`,{children:`Rotation`}),(0,m.jsxs)(`dd`,{className:`text-right text-foreground`,children:[n.rotation,`°`]})]}):null,a?(0,m.jsxs)(`figure`,{className:`flex flex-col gap-1`,children:[(0,m.jsx)(`img`,{src:a.url,alt:`Cropped result`,className:`w-full rounded-md ring-1 ring-border`}),(0,m.jsxs)(`figcaption`,{className:`text-muted-foreground tabular-nums`,children:[`480 px wide · `,o(a.size)]})]}):null]})]})}var v=`import { useEffect, useRef, useState } from "react"
import { Button } from "@kitora/ui/button"
import { ImageCropper, formatBytes, type CropArea, type ImageCropperHandle } from "@kitora/upload"
import { demoImage } from "../fixtures"

/** Crop with aspect presets, zoom and rotation; export the result as a PNG. */
export function BasicCropper() {
  const [src, setSrc] = useState<string>()
  const [area, setArea] = useState<CropArea>()
  const [result, setResult] = useState<{ url: string; size: number }>()
  const cropper = useRef<ImageCropperHandle>(null)
  useEffect(() => setSrc(demoImage(7, 1600, 1067)), [])
  const exportCrop = async () => {
    const blob = await cropper.current?.toBlob({ width: 480, type: "image/jpeg", quality: 0.9 })
    if (blob) setResult({ url: URL.createObjectURL(blob), size: blob.size })
  }
  return (
    <div className="flex flex-col gap-2 p-3 sm:flex-row">
      <div className="min-w-0 flex-1">{src ? <ImageCropper ref={cropper} src={src} onChange={setArea} height={280} /> : null}</div>
      <div className="flex w-full shrink-0 flex-col gap-2 text-[12px] sm:w-44">
        <Button size="sm" onClick={() => void exportCrop()}>Export crop</Button>
        {area ? (
          <dl className="grid grid-cols-2 gap-x-2 text-muted-foreground tabular-nums">
            <dt>Centre</dt><dd className="text-right text-foreground">{Math.round(area.centerX)}, {Math.round(area.centerY)}</dd>
            <dt>Size</dt><dd className="text-right text-foreground">{Math.round(area.width)} × {Math.round(area.height)}</dd>
            <dt>Rotation</dt><dd className="text-right text-foreground">{area.rotation}°</dd>
          </dl>
        ) : null}
        {result ? (
          <figure className="flex flex-col gap-1">
            <img src={result.url} alt="Cropped result" className="w-full rounded-md ring-1 ring-border" />
            <figcaption className="text-muted-foreground tabular-nums">480 px wide · {formatBytes(result.size)}</figcaption>
          </figure>
        ) : null}
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>n(()=>import(`./cropper-6ABMoPhj.js`),[]));function y(){return(0,m.jsxs)(`div`,{children:[(0,m.jsx)(t,{title:`Basics: images`,children:`The cropper keeps a fixed frame over an image you pan, zoom and rotate; the image always covers the frame, and the export draws with the same transform you saw.`}),(0,m.jsx)(u,{n:1,title:`An image cropper`,blurb:"Aspect presets, drag or arrow keys to pan, wheel, pinch or +/− to zoom, quarter turns and a fine straighten. `toBlob` exports; `onChange` reports the crop in source pixels.",code:v,children:(0,m.jsx)(f,{testId:`basic-cropper`,children:(0,m.jsx)(_,{})})}),(0,m.jsx)(u,{n:2,title:`Avatar upload`,blurb:`Click or drop an image on the avatar: a round crop in a dialog, then an upload with a progress ring, Cancel and Retry.`,code:g,children:(0,m.jsx)(f,{testId:`basic-avatar`,children:(0,m.jsx)(h,{})})})]})}export{y as component};