import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./file-icon-C9H4zZEv.js";import{s as n}from"./kit-docs-CvNs0WqT.js";import{a as r,c as i,i as a,n as o,o as s,r as c,s as l}from"./media-viewer-BhaoiSpU.js";import{t as u}from"./pause-B1XBvX7z.js";import{t as d}from"./play--5eXVtC5.js";import{Bc as f,Cc as p,Ic as m,ti as h}from"./index-9y5uwRd3.js";import{t as g}from"./validate-BWHY_AUA.js";import{s as _,t as v}from"./pager-Z5k-2E4U.js";import"./kit-gallery-B-Yr9fP4.js";import{t as y}from"./example-CZLJLtIC.js";import{d as b,i as x,o as S,r as C,s as w,t as T}from"./-kits.upload.shared-BT8Kx0dl.js";var E=m(),D=()=>C(12);function O(){let e=b(D);return(0,E.jsx)(`div`,{className:`p-3`,children:e?(0,E.jsx)(c,{src:e,title:`Jingle.wav`,subtitle:`12 s · 529 KB`,transcript:(0,E.jsx)(`p`,{children:`[A synthesized 12-second jingle: rising tones, no speech.]`})}):null})}var k=`import { AudioPlayer } from "@kitora/upload"
import { demoAudioBlob, useDemoUrl } from "../fixtures"

const makeAudio = () => demoAudioBlob(12)

/** A compact audio card that draws the file's real waveform and seeks on it, with a transcript disclosure from the \`transcript\` prop. */
export function BasicAudioPlayer() {
  const url = useDemoUrl(makeAudio)
  return <div className="p-3">{url ? <AudioPlayer src={url} title="Jingle.wav" subtitle="12 s · 529 KB" transcript={<p>[A synthesized 12-second jingle: rising tones, no speech.]</p>} /> : null}</div>
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(k,()=>p(()=>import(`./audio-player-g4AZkl1S.js`),[]));var A=e(f(),1);function j(){let[e,t]=(0,A.useState)();return(0,A.useEffect)(()=>t(x(12,2400,1600)),[]),e?(0,E.jsx)(l,{src:e,alt:`A painted landscape`,className:`h-full`}):null}var M=`import { useEffect, useState } from "react"
import { ImageViewer } from "@kitora/upload"
import { demoImage } from "../fixtures"

/** Fit, 100 %, wheel zoom at the pointer, drag to pan, rotate. Keys: + − 0 1 R and arrows. */
export function BasicImageViewer() {
  const [src, setSrc] = useState<string>()
  useEffect(() => setSrc(demoImage(12, 2400, 1600)), [])
  return src ? <ImageViewer src={src} alt="A painted landscape" className="h-full" /> : null
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(M,()=>p(()=>import(`./image-viewer-Cwgs_ukf.js`),[]));var N=()=>S(`Quarterly report`,4);function P(){let e=b(N);return e?(0,E.jsx)(s,{src:e,name:`Q3 report.pdf`,className:`h-full`}):null}var F=`import { PdfViewer } from "@kitora/upload"
import { demoPdfBlob, useDemoUrl } from "../fixtures"

const makePdf = () => demoPdfBlob("Quarterly report", 4)

/** The browser's own PDF viewer in an iframe, with Open and Download, and a fallback link where it cannot render inline. */
export function BasicPdfViewer() {
  const url = useDemoUrl(makePdf)
  return url ? <PdfViewer src={url} name="Q3 report.pdf" className="h-full" /> : null
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>p(()=>import(`./pdf-viewer-D8P-zgls.js`),[]));var I=()=>w(),L=[{src:`/media/launch-teaser.en.vtt`,kind:`captions`,srcLang:`en`,label:`English`,default:!0}];function R(){let e=b(I);return e?(0,E.jsx)(r,{src:e,title:`Launch teaser`,tracks:L,className:`aspect-video w-full`}):(0,E.jsx)(`div`,{className:`grid aspect-video w-full place-items-center rounded-lg bg-black text-[12px] text-white/70`,children:`Recording a demo clip…`})}var z=`import { VideoPlayer, type MediaTrack } from "@kitora/upload"
import { demoVideoBlob, useDemoUrl } from "../fixtures"

const makeVideo = () => demoVideoBlob()

/** English captions for the 4 s demo clip, a tiny WebVTT file served from public/. */
const TRACKS: readonly MediaTrack[] = [{ src: "/media/launch-teaser.en.vtt", kind: "captions", srcLang: "en", label: "English", default: true }]

/** Custom controls over a native <video>: seek with buffered range, volume, speed, PiP and fullscreen, plus a captions track from the \`tracks\` prop. Keys: Space/K, ←/→, J/L, ↑/↓, M, F, 0–9. */
export function BasicVideoPlayer() {
  const url = useDemoUrl(makeVideo)
  return url ? <VideoPlayer src={url} title="Launch teaser" tracks={TRACKS} className="aspect-video w-full" /> : <div className="grid aspect-video w-full place-items-center rounded-lg bg-black text-[12px] text-white/70">Recording a demo clip…</div>
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(z,()=>p(()=>import(`./video-player-BBdNzQ27.js`),[]));var B=()=>C(8,3),V=3,H=[1,2,3,4,5,6,7],U=H.map(e=>({id:`photo-${e}`,name:`photo-${e}.jpg`,kind:`image`,size:24e4+e*13e3,folderId:null,createdAt:Date.UTC(2026,9,e)}));function W(){let[e,t]=(0,A.useState)(U);return(0,A.useEffect)(()=>t(U.map((e,t)=>({...e,url:x(H[t]??1,480,320)}))),[]),e}function G(){let e=W(),[n,r]=(0,A.useState)(1),[s,c]=(0,A.useState)(U[0].id),l=e.find(e=>e.id===s)??e[0],f=_(e,n,V),p=(0,A.useRef)(null),m=i(p),y=b(B);return(0,E.jsxs)(`div`,{className:`flex flex-col gap-3 p-3`,children:[(0,E.jsx)(`ul`,{className:`flex flex-wrap gap-3`,"aria-label":`File kinds`,children:g.map(e=>(0,E.jsxs)(`li`,{className:`flex items-center gap-1.5 text-[12px] text-muted-foreground`,children:[(0,E.jsx)(t,{kind:e}),e]},e))}),(0,E.jsxs)(`div`,{className:`grid gap-3 sm:grid-cols-[17rem_1fr]`,children:[(0,E.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,E.jsx)(`ul`,{className:`flex flex-col gap-0.5`,children:f.rows.map(e=>(0,E.jsx)(`li`,{children:(0,E.jsxs)(`button`,{type:`button`,"aria-pressed":l.id===e.id,onClick:()=>c(e.id),className:`flex h-7 w-full items-center gap-2 rounded px-1.5 text-left text-[13px] hover:bg-muted aria-pressed:bg-muted aria-pressed:font-medium`,children:[(0,E.jsx)(t,{kind:e.kind,className:`size-5 [&_svg]:size-3`}),e.name]})},e.id))}),(0,E.jsx)(v,{page:f,onPage:r,pageSize:V})]}),(0,E.jsx)(o,{item:l,className:`h-56 rounded-md border`})]}),(0,E.jsxs)(`div`,{className:`flex items-center gap-2 rounded-md border px-2 py-1.5`,children:[(0,E.jsx)(`audio`,{ref:p,src:y,preload:`metadata`}),(0,E.jsx)(h,{size:`icon-xs`,variant:`ghost`,"aria-label":m.playing?`Pause`:`Play`,onClick:m.toggle,disabled:!y,children:m.playing?(0,E.jsx)(u,{}):(0,E.jsx)(d,{})}),(0,E.jsx)(a,{media:m,className:`flex-1`})]})]})}var K=`import { useEffect, useRef, useState } from "react"
import { Pause, Play } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { FILE_KINDS, FileKindIcon, MediaViewer, Pager, SeekBar, paginate, useMediaElement, type MediaItem } from "@kitora/upload"
import { demoAudioBlob, demoImage, useDemoUrl } from "../fixtures"

const makeAudio = () => demoAudioBlob(8, 3)
const PAGE_SIZE = 3

const SEEDS = [1, 2, 3, 4, 5, 6, 7]
/** The photos without their pictures: the server renders the list, the browser paints each image after mount. */
const ITEMS: readonly MediaItem[] = SEEDS.map((seed) => ({
  id: \`photo-\${seed}\`,
  name: \`photo-\${seed}.jpg\`,
  kind: "image",
  size: 240_000 + seed * 13_000,
  folderId: null,
  createdAt: Date.UTC(2026, 9, seed),
}))

/** The painted pictures need a canvas, so they are made in an effect (fixtures.ts: never during a server render). */
function useItems(): readonly MediaItem[] {
  const [items, setItems] = useState(ITEMS)
  useEffect(() => setItems(ITEMS.map((item, i) => ({ ...item, url: demoImage(SEEDS[i] ?? 1, 480, 320) }))), [])
  return items
}

/**
 * The library's smaller parts on their own: a \`FileKindIcon\` per kind, a paged list under \`Pager\`
 * (with \`paginate\` from the core) that opens the picked file in \`MediaViewer\`, and a bare \`<audio>\`
 * driven by \`useMediaElement\` with the kit's \`SeekBar\`.
 */
export function MediaParts() {
  const items = useItems()
  const [page, setPage] = useState(1)
  const [pickedId, setPickedId] = useState(ITEMS[0].id)
  const picked = items.find((item) => item.id === pickedId) ?? items[0]
  const current = paginate(items, page, PAGE_SIZE)
  const audioRef = useRef<HTMLAudioElement>(null)
  const media = useMediaElement(audioRef)
  const audioUrl = useDemoUrl(makeAudio)
  return (
    <div className="flex flex-col gap-3 p-3">
      <ul className="flex flex-wrap gap-3" aria-label="File kinds">
        {FILE_KINDS.map((kind) => (
          <li key={kind} className="flex items-center gap-1.5 text-[12px] text-muted-foreground">
            <FileKindIcon kind={kind} />
            {kind}
          </li>
        ))}
      </ul>
      <div className="grid gap-3 sm:grid-cols-[17rem_1fr]">
        <div className="flex flex-col gap-1">
          <ul className="flex flex-col gap-0.5">
            {current.rows.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  aria-pressed={picked.id === item.id}
                  onClick={() => setPickedId(item.id)}
                  className="flex h-7 w-full items-center gap-2 rounded px-1.5 text-left text-[13px] hover:bg-muted aria-pressed:bg-muted aria-pressed:font-medium"
                >
                  <FileKindIcon kind={item.kind} className="size-5 [&_svg]:size-3" />
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          <Pager page={current} onPage={setPage} pageSize={PAGE_SIZE} />
        </div>
        <MediaViewer item={picked} className="h-56 rounded-md border" />
      </div>
      <div className="flex items-center gap-2 rounded-md border px-2 py-1.5">
        <audio ref={audioRef} src={audioUrl} preload="metadata" />
        <Button size="icon-xs" variant="ghost" aria-label={media.playing ? "Pause" : "Play"} onClick={media.toggle} disabled={!audioUrl}>
          {media.playing ? <Pause /> : <Play />}
        </Button>
        <SeekBar media={media} className="flex-1" />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>p(()=>import(`./media-parts-IK9tgGeV.js`),[]));function q(){return(0,E.jsxs)(`div`,{children:[(0,E.jsx)(n,{title:`Basics: viewers`,children:"A viewer for each kind of file. `MediaViewer` picks the right one from an item's kind; the library's preview dialog uses it."}),(0,E.jsx)(y,{n:1,title:`Image viewer`,blurb:`Fit, actual size, zoom at the pointer, drag to pan, rotate; double-click toggles fit and 2×.`,code:M,children:(0,E.jsx)(T,{testId:`basic-image-viewer`,height:360,children:(0,E.jsx)(j,{})})}),(0,E.jsx)(y,{n:2,title:`PDF viewer`,blurb:`The browser's own viewer (search, zoom, print) in an iframe, with Open and Download.`,code:F,children:(0,E.jsx)(T,{testId:`basic-pdf-viewer`,height:420,children:(0,E.jsx)(P,{})})}),(0,E.jsx)(y,{n:3,title:`Video player`,blurb:"Controls hide while playing; the seek bar shows what is buffered and the time under the pointer. `tracks` adds `<track>` elements (captions, subtitles, descriptions; typed `MediaTrack[]`), here an English WebVTT captions file.",code:z,children:(0,E.jsx)(T,{testId:`basic-video-player`,className:`p-3`,children:(0,E.jsx)(R,{})})}),(0,E.jsx)(y,{n:4,title:`Audio player`,blurb:"Play, speed and volume, with the waveform decoded from the file itself. `transcript` gives the text alternative: a URL string renders a Transcript link, a React node renders a Transcript disclosure under the player.",code:k,children:(0,E.jsx)(T,{testId:`basic-audio-player`,children:(0,E.jsx)(O,{})})}),(0,E.jsx)(y,{n:5,title:`File icons, pager, viewer and seek bar`,blurb:"`FileKindIcon` for every kind; a list paged by `Pager` that opens the picked file in `MediaViewer`; a bare `<audio>` with the kit's `SeekBar`.",code:K,children:(0,E.jsx)(T,{testId:`basic-media-parts`,children:(0,E.jsx)(G,{})})})]})}export{q as component};