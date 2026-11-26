import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-CvNs0WqT.js";import{a as n,r,t as i}from"./media-viewer-BhaoiSpU.js";import{t as a}from"./music-BJWXacNK.js";import{t as o}from"./play--5eXVtC5.js";import{Bc as s,Cc as c,Ic as l}from"./index-9y5uwRd3.js";import{c as u,l as d}from"./validate-BWHY_AUA.js";import"./kit-gallery-B-Yr9fP4.js";import{t as f}from"./example-CZLJLtIC.js";import{t as p,u as m}from"./-kits.upload.shared-BT8Kx0dl.js";var h=e(s(),1),g=l();function _(){let[e]=m(),[t,s]=(0,h.useState)(),[c,l]=(0,h.useState)();if(!e)return(0,g.jsx)(`div`,{className:`grid h-40 place-items-center text-[12px] text-muted-foreground`,children:`Painting the demo library…`});let f=e.filter(e=>e.kind===`image`&&e.width).slice(0,12),p=e.filter(e=>e.kind===`audio`),_=e.find(e=>e.kind===`video`),v=e.filter(e=>e.kind===`pdf`),y=p.find(e=>e.id===c)??p[0];return(0,g.jsxs)(`div`,{className:`grid gap-4 p-3 text-[13px] lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]`,children:[(0,g.jsxs)(`section`,{"aria-label":`Photos`,children:[(0,g.jsx)(`h3`,{className:`mb-1.5 text-[12px] font-semibold text-muted-foreground uppercase`,children:`Photos`}),(0,g.jsx)(`div`,{className:`grid grid-cols-4 gap-1`,children:f.map(e=>(0,g.jsx)(`button`,{type:`button`,onClick:()=>s(e),"aria-label":`Open ${e.name}`,className:`overflow-hidden rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring`,children:(0,g.jsx)(`img`,{src:e.thumbUrl,alt:``,className:`aspect-square w-full object-cover transition-transform hover:scale-105`})},e.id))})]}),(0,g.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,g.jsxs)(`section`,{"aria-label":`Playlist`,className:`flex flex-col gap-1.5`,children:[(0,g.jsx)(`h3`,{className:`text-[12px] font-semibold text-muted-foreground uppercase`,children:`Playlist`}),y?.url?(0,g.jsx)(r,{src:y.url,title:y.name,subtitle:u(y.size)},y.id):null,(0,g.jsx)(`ul`,{className:`divide-y rounded-md border`,children:p.map(e=>(0,g.jsx)(`li`,{children:(0,g.jsxs)(`button`,{type:`button`,onClick:()=>l(e.id),"aria-current":e.id===y?.id,className:`flex h-8 w-full items-center gap-2 px-2 text-left hover:bg-muted aria-[current=true]:font-medium aria-[current=true]:text-primary`,children:[e.id===y?.id?(0,g.jsx)(o,{className:`size-3.5 fill-current`,"aria-hidden":!0}):(0,g.jsx)(a,{className:`size-3.5 text-muted-foreground`,"aria-hidden":!0}),(0,g.jsx)(`span`,{className:`truncate`,children:e.name}),(0,g.jsx)(`span`,{className:`ml-auto text-[12px] text-muted-foreground tabular-nums`,children:d(e.duration??NaN)})]})},e.id))})]}),(0,g.jsxs)(`section`,{"aria-label":`Video`,className:`flex flex-col gap-1.5`,children:[(0,g.jsx)(`h3`,{className:`text-[12px] font-semibold text-muted-foreground uppercase`,children:`Video`}),_?.url?(0,g.jsx)(n,{src:_.url,title:_.name,className:`aspect-video`}):(0,g.jsx)(`div`,{className:`grid aspect-video place-items-center rounded-lg bg-black text-[12px] text-white/70`,children:`Recording a demo clip…`})]}),(0,g.jsxs)(`section`,{"aria-label":`Documents`,className:`flex flex-col gap-1.5`,children:[(0,g.jsx)(`h3`,{className:`text-[12px] font-semibold text-muted-foreground uppercase`,children:`Documents`}),(0,g.jsx)(`ul`,{className:`divide-y rounded-md border`,children:v.map(e=>(0,g.jsx)(`li`,{children:(0,g.jsxs)(`button`,{type:`button`,onClick:()=>s(e),className:`flex h-8 w-full items-center gap-2 px-2 text-left hover:bg-muted`,children:[(0,g.jsx)(`span`,{className:`truncate`,children:e.name}),(0,g.jsx)(`span`,{className:`ml-auto text-[12px] text-muted-foreground tabular-nums`,children:u(e.size)})]})},e.id))})]})]}),(0,g.jsx)(i,{item:t,items:t?.kind===`pdf`?v:f,onItemChange:s})]})}var v=`import { useState } from "react"
import { Music, Play } from "lucide-react"
import { AudioPlayer, MediaPreviewDialog, VideoPlayer, formatBytes, formatDuration, type MediaItem } from "@kitora/upload"
import { useDemoLibrary } from "./fixtures"

/** A photo grid that opens a lightbox (← → with [ and ]), a playlist with one shared player, the teaser video, and documents. */
export function LightboxAndPlayers() {
  const [items] = useDemoLibrary()
  const [open, setOpen] = useState<MediaItem>()
  const [track, setTrack] = useState<string>()
  if (!items) return <div className="grid h-40 place-items-center text-[12px] text-muted-foreground">Painting the demo library…</div>
  const photos = items.filter((it) => it.kind === "image" && it.width).slice(0, 12)
  const tracks = items.filter((it) => it.kind === "audio")
  const video = items.find((it) => it.kind === "video")
  const docs = items.filter((it) => it.kind === "pdf")
  const current = tracks.find((t) => t.id === track) ?? tracks[0]
  return (
    <div className="grid gap-4 p-3 text-[13px] lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
      <section aria-label="Photos">
        <h3 className="mb-1.5 text-[12px] font-semibold text-muted-foreground uppercase">Photos</h3>
        <div className="grid grid-cols-4 gap-1">
          {photos.map((p) => (
            <button key={p.id} type="button" onClick={() => setOpen(p)} aria-label={\`Open \${p.name}\`} className="overflow-hidden rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <img src={p.thumbUrl} alt="" className="aspect-square w-full object-cover transition-transform hover:scale-105" />
            </button>
          ))}
        </div>
      </section>
      <div className="flex flex-col gap-4">
        <section aria-label="Playlist" className="flex flex-col gap-1.5">
          <h3 className="text-[12px] font-semibold text-muted-foreground uppercase">Playlist</h3>
          {current?.url ? <AudioPlayer key={current.id} src={current.url} title={current.name} subtitle={formatBytes(current.size)} /> : null}
          <ul className="divide-y rounded-md border">
            {tracks.map((t) => (
              <li key={t.id}>
                <button type="button" onClick={() => setTrack(t.id)} aria-current={t.id === current?.id} className="flex h-8 w-full items-center gap-2 px-2 text-left hover:bg-muted aria-[current=true]:font-medium aria-[current=true]:text-primary">
                  {t.id === current?.id ? <Play className="size-3.5 fill-current" aria-hidden /> : <Music className="size-3.5 text-muted-foreground" aria-hidden />}
                  <span className="truncate">{t.name}</span>
                  <span className="ml-auto text-[12px] text-muted-foreground tabular-nums">{formatDuration(t.duration ?? Number.NaN)}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>
        <section aria-label="Video" className="flex flex-col gap-1.5">
          <h3 className="text-[12px] font-semibold text-muted-foreground uppercase">Video</h3>
          {video?.url ? <VideoPlayer src={video.url} title={video.name} className="aspect-video" /> : <div className="grid aspect-video place-items-center rounded-lg bg-black text-[12px] text-white/70">Recording a demo clip…</div>}
        </section>
        <section aria-label="Documents" className="flex flex-col gap-1.5">
          <h3 className="text-[12px] font-semibold text-muted-foreground uppercase">Documents</h3>
          <ul className="divide-y rounded-md border">
            {docs.map((d) => (
              <li key={d.id}>
                <button type="button" onClick={() => setOpen(d)} className="flex h-8 w-full items-center gap-2 px-2 text-left hover:bg-muted">
                  <span className="truncate">{d.name}</span>
                  <span className="ml-auto text-[12px] text-muted-foreground tabular-nums">{formatBytes(d.size)}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <MediaPreviewDialog item={open} items={open?.kind === "pdf" ? docs : photos} onItemChange={setOpen} />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>c(()=>import(`./lightbox-EYOzVJmR.js`),[]));function y(){return(0,g.jsxs)(`div`,{children:[(0,g.jsx)(t,{title:`Lightbox and players`,children:"`MediaPreviewDialog` is a lightbox for any list of items; the players work alone too."}),(0,g.jsx)(f,{n:1,title:`Photos, playlist, video, documents`,blurb:`Click a photo, then step with the arrows or [ and ]. Pick a track to load it into the one player. Open a document to read it inline.`,code:v,children:(0,g.jsx)(p,{testId:`lightbox`,children:(0,g.jsx)(_,{})})})]})}export{y as component};