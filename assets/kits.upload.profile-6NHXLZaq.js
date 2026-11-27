import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./upload-queue-CIzJoRAk.js";import{s as n}from"./kit-docs-Cf27Kpa-.js";import{t as r}from"./image-plus-PBliNdFa.js";import{n as i}from"./presets-B7T12Ync.js";import{Ec as a,Uc as o,ri as s,zc as c}from"./index-BZuUy872.js";import{r as l}from"./adapter-Ck31NbGD.js";import{n as u,t as d}from"./avatar-upload-BTTDL-MF.js";import{t as f}from"./use-dropzone-BxCs2M2r.js";import{t as p}from"./use-object-url-CDVCYh-q.js";import"./kit-gallery-BBavj2rC.js";import{t as m}from"./example-B67lLz1F.js";import{i as h,t as g}from"./-kits.upload.shared-iwUT_m60.js";var _=e(o(),1),v=c(),y=[{id:`cover`,label:`3:1`,ratio:3}];function b(){let[e]=(0,_.useState)(()=>l({bytesPerSecond:400*1024})),[n,a]=(0,_.useState)(),[o,c]=(0,_.useState)(),[m,g]=(0,_.useState)(),b=p(m),[x,S]=(0,_.useState)(),C=(0,_.useRef)(null);(0,_.useEffect)(()=>{c(h(5,1500,500)),a(h(9,256,256))},[]);let w=f({accept:`image/*`,multiple:!1,maxSize:15*1024*1024,onDrop:e=>g(e[0])}),T=async()=>{let t=await C.current?.toBlob({width:1500,type:`image/jpeg`,quality:.88});g(void 0),t&&(S(0),c((await e.upload(t,{signal:new AbortController().signal,onProgress:e=>S(e.loaded/e.total)})).url),S(void 0))};return(0,v.jsxs)(`div`,{className:`mx-auto max-w-2xl overflow-hidden rounded-lg border bg-card text-[13px] shadow-sm`,children:[(0,v.jsxs)(`div`,{className:`group relative aspect-[3/1] bg-muted`,ref:w.rootRef,children:[(0,v.jsx)(`input`,{...w.getInputProps(),ref:w.inputRef}),o?(0,v.jsx)(`img`,{src:o,alt:`Cover`,className:`size-full object-cover`}):null,(0,v.jsxs)(s,{size:`xs`,variant:`secondary`,className:`absolute top-2 right-2 opacity-90 shadow`,onClick:w.open,disabled:x!==void 0,children:[(0,v.jsx)(r,{}),` Change cover`]}),x===void 0?null:(0,v.jsxs)(`div`,{className:`absolute inset-x-0 bottom-0 bg-black/50 px-3 py-1.5 text-[12px] text-white`,children:[`Uploading cover… `,Math.round(x*100),`%`,(0,v.jsx)(t,{value:x*100,className:`mt-1 bg-white/25`,label:`Cover upload`})]}),w.drag===`idle`?null:(0,v.jsx)(`div`,{className:`absolute inset-0 grid place-items-center border-2 border-dashed border-white bg-black/40 font-medium text-white`,children:`Drop a new cover`})]}),(0,v.jsxs)(`div`,{className:`flex flex-col gap-3 px-4 pt-3 pb-4`,children:[(0,v.jsx)(d,{name:`Aman Bansal`,value:n,onChange:a,adapter:e,size:80}),(0,v.jsxs)(`div`,{className:`grid gap-2 sm:grid-cols-2`,children:[(0,v.jsxs)(`label`,{className:`flex flex-col gap-1`,children:[(0,v.jsx)(`span`,{className:`text-[12px] font-medium text-muted-foreground`,children:`Display name`}),(0,v.jsx)(`input`,{defaultValue:`Aman Bansal`,className:`h-7 rounded-md border bg-background px-2 outline-none focus:ring-2 focus:ring-ring/40`})]}),(0,v.jsxs)(`label`,{className:`flex flex-col gap-1`,children:[(0,v.jsx)(`span`,{className:`text-[12px] font-medium text-muted-foreground`,children:`Handle`}),(0,v.jsx)(`input`,{defaultValue:`khanakia`,className:`h-7 rounded-md border bg-background px-2 outline-none focus:ring-2 focus:ring-ring/40`})]})]})]}),(0,v.jsx)(i,{name:`position-cover`,title:`Position your cover`,description:`Covers are shown at 3:1. Drag to position, scroll to zoom.`,size:`lg`,open:m!==void 0,onOpenChange:e=>{e||g(void 0)},footer:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s,{variant:`ghost`,size:`sm`,onClick:()=>g(void 0),children:`Cancel`}),(0,v.jsx)(s,{size:`sm`,onClick:()=>void T(),children:`Save cover`})]}),children:b?(0,v.jsx)(u,{ref:C,src:b,aspects:y,height:300}):null})]})}var x=`import { useEffect, useRef, useState } from "react"
import { ImagePlus } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { Modal } from "@kitora/overlay"
import { AvatarUpload, ImageCropper, ProgressBar, createFakeAdapter, useDropzone, useObjectUrl, type ImageCropperHandle } from "@kitora/upload"
import { demoImage } from "./fixtures"

/** The cover's shape: 3:1, like X / LinkedIn banners. */
const COVER = [{ id: "cover", label: "3:1", ratio: 3 }] as const

/** A profile editor: a cover photo cropped to 3:1 and an avatar cropped to a circle, both uploaded with progress. */
export function ProfileEditor() {
  const [adapter] = useState(() => createFakeAdapter({ bytesPerSecond: 400 * 1024 }))
  const [avatar, setAvatar] = useState<string>()
  const [cover, setCover] = useState<string>()
  const [source, setSource] = useState<File>()
  const sourceUrl = useObjectUrl(source)
  const [progress, setProgress] = useState<number>()
  const cropper = useRef<ImageCropperHandle>(null)
  useEffect(() => {
    setCover(demoImage(5, 1500, 500))
    setAvatar(demoImage(9, 256, 256))
  }, [])
  const zone = useDropzone({ accept: "image/*", multiple: false, maxSize: 15 * 1024 * 1024, onDrop: (files) => setSource(files[0]) })

  const saveCover = async () => {
    const blob = await cropper.current?.toBlob({ width: 1500, type: "image/jpeg", quality: 0.88 })
    setSource(undefined)
    if (!blob) return
    setProgress(0)
    const result = await adapter.upload(blob, { signal: new AbortController().signal, onProgress: (p) => setProgress(p.loaded / p.total) })
    setCover(result.url)
    setProgress(undefined)
  }

  return (
    <div className="mx-auto max-w-2xl overflow-hidden rounded-lg border bg-card text-[13px] shadow-sm">
      <div className="group relative aspect-[3/1] bg-muted" ref={zone.rootRef}>
        <input {...zone.getInputProps()} ref={zone.inputRef} />
        {cover ? <img src={cover} alt="Cover" className="size-full object-cover" /> : null}
        <Button size="xs" variant="secondary" className="absolute top-2 right-2 opacity-90 shadow" onClick={zone.open} disabled={progress !== undefined}>
          <ImagePlus /> Change cover
        </Button>
        {progress !== undefined ? (
          <div className="absolute inset-x-0 bottom-0 bg-black/50 px-3 py-1.5 text-[12px] text-white">
            Uploading cover… {Math.round(progress * 100)}%
            <ProgressBar value={progress * 100} className="mt-1 bg-white/25" label="Cover upload" />
          </div>
        ) : null}
        {zone.drag !== "idle" ? <div className="absolute inset-0 grid place-items-center border-2 border-dashed border-white bg-black/40 font-medium text-white">Drop a new cover</div> : null}
      </div>
      <div className="flex flex-col gap-3 px-4 pt-3 pb-4">
        <AvatarUpload name="Aman Bansal" value={avatar} onChange={setAvatar} adapter={adapter} size={80} />
        <div className="grid gap-2 sm:grid-cols-2">
          <label className="flex flex-col gap-1">
            <span className="text-[12px] font-medium text-muted-foreground">Display name</span>
            <input defaultValue="Aman Bansal" className="h-7 rounded-md border bg-background px-2 outline-none focus:ring-2 focus:ring-ring/40" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-[12px] font-medium text-muted-foreground">Handle</span>
            <input defaultValue="khanakia" className="h-7 rounded-md border bg-background px-2 outline-none focus:ring-2 focus:ring-ring/40" />
          </label>
        </div>
      </div>
      {/* The overlay kit's Modal, so it shares one stack with any overlay the cropper's page opens. */}
      <Modal
        name="position-cover"
        title="Position your cover"
        description="Covers are shown at 3:1. Drag to position, scroll to zoom."
        size="lg"
        open={source !== undefined}
        onOpenChange={(open) => {
          if (!open) setSource(undefined)
        }}
        footer={
          <>
            <Button variant="ghost" size="sm" onClick={() => setSource(undefined)}>Cancel</Button>
            <Button size="sm" onClick={() => void saveCover()}>Save cover</Button>
          </>
        }
      >
        {sourceUrl ? <ImageCropper ref={cropper} src={sourceUrl} aspects={COVER} height={300} /> : null}
      </Modal>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(x,()=>a(()=>import(`./profile-mAxT0fc2.js`),[]));function S(){return(0,v.jsxs)(`div`,{children:[(0,v.jsx)(n,{title:`Profile editor`,children:"The cropper with one locked preset for a banner, and `AvatarUpload` for the photo. Drop an image straight onto the cover."}),(0,v.jsx)(m,{n:1,title:`Cover and avatar`,blurb:`Change cover opens the cropper locked to 3:1 and uploads a 1500 px JPEG; the avatar crops to a circle and uploads a 256 px PNG.`,code:x,children:(0,v.jsx)(g,{testId:`profile-editor`,className:`p-3`,children:(0,v.jsx)(b,{})})})]})}export{S as component};