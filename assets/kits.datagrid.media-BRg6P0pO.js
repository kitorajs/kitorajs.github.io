import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{i as t}from"./toaster-CBJXOSeo.js";import{F as n,R as r,Y as i,Z as a}from"./data-grid-highlight-CsF6qD_A.js";import{t as o}from"./download-DmNVxFcg.js";import{t as s}from"./external-link-BGjBmPPj.js";import{t as c}from"./eye-DS3BxKVc.js";import{s as l}from"./kit-docs-DpYhPoxM.js";import{Bc as u,Cc as d,Ic as f,mt as p}from"./index-q72zUtm9.js";import{t as m}from"./data-grid-infinite-anchor-Cf3_pBWA.js";import{t as h}from"./data-grid-view-DPlWcEDd.js";import{t as g}from"./data-grid-selection-indicator-Cc4o6jYx.js";import{a as _,i as v,n as y,o as b,r as x,t as S}from"./media-grid-layout-VW8K1gaS.js";import{t as C}from"./data-grid-bulk-actions-Bfg-bb7p.js";import{t as w}from"./filter-bar-BfqbkqNz.js";import"./kit-gallery-Atvibnty.js";import{t as T}from"./example-B8EaWveR.js";var E=e(u(),1),D=f(),O=[`image`,`image`,`image`,`image`,`image`,`video`,`pdf`,`audio`,`archive`,`document`],k=`sunset-beach.mountain-trek.desert-bloom.midnight-skyline.autumn-leaves.arctic-fjord.urban-graffiti.forest-stream.café-vienna.product-shot.team-offsite.launch-keynote.design-review.investor-deck.roadmap-q4.quarterly-report.press-release.onboarding.hero-banner.lookbook-spring.studio-portrait.demo-reel.concept-art.mood-board.whiteboard-jam.standup-notes.sprint-recap.all-hands.release-notes.changelog.asset-bundle.brand-kit.icon-set.soundtrack.voice-memo.interview-cut.walkthrough.tutorial-clip`.split(`.`),A=Array.from({length:240},(e,t)=>{let n=O[t%O.length]??`image`,r=k[t%k.length];return{id:`asset-${t+1}`,name:`${r}${j(n)}`,kind:n,size:`${(.2+t*37%80/10).toFixed(1)} MB`,url:n===`image`?`https://picsum.photos/seed/dk-${t}/400/400`:n===`video`?`https://videos.pexels.com/video-files/1851190/1851190-uhd_2560_1440_25fps.mp4`:void 0,href:`#asset-${t+1}`}});function j(e){switch(e){case`image`:return`.jpg`;case`video`:return`.mp4`;case`audio`:return`.mp3`;case`pdf`:return`.pdf`;case`archive`:return`.zip`;case`document`:return`.txt`;case`code`:return`.ts`;default:return``}}var M=n()([{id:`name`,header:`Name`,cell:e=>e.name},{id:`kind`,header:`Kind`,cell:e=>e.kind},{id:`size`,header:`Size`,cell:e=>e.size}]);function N(){let[e]=(0,E.useState)(()=>p());return(0,D.jsxs)(a,{defaultLayoutId:`media-grid`,defaultPageSize:40,children:[(0,D.jsx)(i,{adapter:(0,E.useMemo)(()=>r({initial:A,searchKeys:[`name`,`kind`],search:{placeholder:`Search assets…`,toWhere:e=>({_q:e})},latencyMs:0}),[]),paginationMode:`infinite`,children:(0,D.jsx)(P,{layouts:(0,E.useMemo)(()=>[S({thumbUrl:e=>e.url,thumbKind:e=>e.kind,title:e=>e.name,subtitle:e=>`${e.kind} · ${e.size}`,aspect:`square`,columns:{default:5,sm:5,md:5,lg:5,xl:5},onOpen:t=>e(`Open ${t.name}`),actions:t=>[{id:`preview`,label:`Preview`,Icon:c,onClick:()=>e(`Preview ${t.name}`)},{id:`open`,label:`Open in new tab`,Icon:s,onClick:()=>e(`Navigate to ${t.href}`)}]})],[e])})}),(0,D.jsx)(t,{toaster:e})]})}function P({layouts:e}){return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(`div`,{className:`mt-4 rounded-lg border border-border bg-surface-1 p-2`,children:(0,D.jsx)(w,{rightSlot:(0,D.jsx)(g,{})})}),(0,D.jsxs)(`div`,{className:`mt-3`,children:[(0,D.jsx)(m,{direction:`up`}),(0,D.jsx)(h,{columns:M,layouts:e}),(0,D.jsx)(m,{direction:`down`})]}),(0,D.jsx)(C,{})]})}var F=`import { useMemo, useState } from "react"
import { ExternalLink, Eye } from "lucide-react"
import { createToaster } from "@kitora/feedback/react"
import { Toaster } from "@kitora/feedback/ui"
import { DataGridBulkActions, DataGridFilterBar, DataGridInfiniteAnchor, DataGridProvider, DataGridSelectionIndicator, DataGridUIProvider, DataGridView, createInMemoryAdapter, defineColumns, mediaGridLayout, type DataGridAdapter, type MediaGridKind } from "@kitora/datagrid"

/**
 * Media library rendered as a MediaGrid gallery.
 *
 * Sample media library (240 assets, mixed image / video / pdf / audio)
 * rendered as a Google-Photos-style gallery via \`mediaGridLayout\`.
 * Multi-select, drag-rectangle, long-press, keyboard nav all wired.
 */

interface Asset {
  id: string
  name: string
  kind: MediaGridKind
  size: string
  url?: string
  href?: string
}

const KIND_CYCLE: MediaGridKind[] = [
  'image',
  'image',
  'image',
  'image',
  'image',
  'video',
  'pdf',
  'audio',
  'archive',
  'document',
]

/* Pool of stem names — combined with kind-specific extension. Mixed
 * casing / hyphens / numbers for realism. */
const NAME_POOL = [
  'sunset-beach', 'mountain-trek', 'desert-bloom', 'midnight-skyline',
  'autumn-leaves', 'arctic-fjord', 'urban-graffiti', 'forest-stream',
  'café-vienna', 'product-shot', 'team-offsite', 'launch-keynote',
  'design-review', 'investor-deck', 'roadmap-q4', 'quarterly-report',
  'press-release', 'onboarding', 'hero-banner', 'lookbook-spring',
  'studio-portrait', 'demo-reel', 'concept-art', 'mood-board',
  'whiteboard-jam', 'standup-notes', 'sprint-recap', 'all-hands',
  'release-notes', 'changelog', 'asset-bundle', 'brand-kit',
  'icon-set', 'soundtrack', 'voice-memo', 'interview-cut',
  'walkthrough', 'tutorial-clip',
]

const seed: Asset[] = Array.from({ length: 240 }, (_, i) => {
  const kind = KIND_CYCLE[i % KIND_CYCLE.length] ?? 'image'
  const stem = NAME_POOL[i % NAME_POOL.length]
  return {
    id: \`asset-\${i + 1}\`,
    name: \`\${stem}\${extFor(kind)}\`,
    kind,
    size: \`\${(0.2 + ((i * 37) % 80) / 10).toFixed(1)} MB\`,
    url:
      kind === 'image'
        ? \`https://picsum.photos/seed/dk-\${i}/400/400\`
        : kind === 'video'
          ? 'https://videos.pexels.com/video-files/1851190/1851190-uhd_2560_1440_25fps.mp4'
          : undefined,
    href: \`#asset-\${i + 1}\`,
  }
})

function extFor(kind: MediaGridKind): string {
  switch (kind) {
    case 'image': return '.jpg'
    case 'video': return '.mp4'
    case 'audio': return '.mp3'
    case 'pdf': return '.pdf'
    case 'archive': return '.zip'
    case 'document': return '.txt'
    case 'code': return '.ts'
    default: return ''
  }
}

const columns = defineColumns<Asset>()([
  { id: 'name', header: 'Name', cell: (r) => r.name },
  { id: 'kind', header: 'Kind', cell: (r) => r.kind },
  { id: 'size', header: 'Size', cell: (r) => r.size },
])

export function MediaLibrary() {
  // a toaster of the demo's own, so its toasts draw without an app-wide <Toaster />
  const [toast] = useState(() => createToaster())
  const adapter = useMemo<DataGridAdapter<Asset>>(
    () =>
      createInMemoryAdapter<Asset>({
        initial: seed,
        searchKeys: ['name', 'kind'],
        search: {
          placeholder: 'Search assets…',
          toWhere: (q) => ({ _q: q }),
        },
        latencyMs: 0,
      }),
    [],
  )

  const layouts = useMemo(
    () => [
      mediaGridLayout<Asset>({
        thumbUrl: (r) => r.url,
        thumbKind: (r) => r.kind,
        title: (r) => r.name,
        subtitle: (r) => \`\${r.kind} · \${r.size}\`,
        aspect: 'square',
        /* Pinned 5-up at every breakpoint. */
        columns: { default: 5, sm: 5, md: 5, lg: 5, xl: 5 },
        onOpen: (r) => toast(\`Open \${r.name}\`),
        actions: (r) => [
          {
            id: 'preview',
            label: 'Preview',
            Icon: Eye,
            onClick: () => toast(\`Preview \${r.name}\`),
          },
          {
            id: 'open',
            label: 'Open in new tab',
            Icon: ExternalLink,
            onClick: () => toast(\`Navigate to \${r.href}\`),
          },
        ],
      }),
    ],
    [toast],
  )

  return (
    <DataGridUIProvider defaultLayoutId="media-grid" defaultPageSize={40}>
      <DataGridProvider adapter={adapter} paginationMode="infinite">
        <Body layouts={layouts} />
      </DataGridProvider>
      <Toaster toaster={toast} />
    </DataGridUIProvider>
  )
}

function Body({
  layouts,
}: {
  layouts: ReturnType<typeof mediaGridLayout<Asset>>[]
}) {
  return (
    <>

      <div className="mt-4 rounded-lg border border-border bg-surface-1 p-2">
        <DataGridFilterBar
          rightSlot={<DataGridSelectionIndicator />}
        />
      </div>

      <div className="mt-3">
        <DataGridInfiniteAnchor direction="up" />
        <DataGridView<Asset> columns={columns} layouts={layouts} />
        <DataGridInfiniteAnchor direction="down" />
      </div>

      <DataGridBulkActions />
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>d(()=>import(`./media-DZaOoNbT.js`),[]));var I=[{id:`1`,name:`roadmap.pdf`,kind:`pdf`,starred:!0},{id:`2`,name:`voice-memo.mp3`,kind:`audio`,starred:!1},{id:`3`,name:`assets.zip`,kind:`archive`,starred:!1},{id:`4`,name:`notes.txt`,kind:`document`,starred:!0}],L=n()([{id:`name`,header:`Name`,cell:e=>e.name}]);function R(e){return(0,D.jsx)(`div`,{className:e.row.starred?`rounded-lg ring-1 ring-warning`:void 0,children:(0,D.jsx)(y,{...e})})}function z(e){return(0,D.jsxs)(`div`,{className:`relative`,children:[(0,D.jsx)(b,{...e}),(0,D.jsx)(`span`,{className:`absolute bottom-1 left-1 rounded bg-background/85 px-1 text-[10px] uppercase`,children:e.kind})]})}function B(e){return(0,D.jsx)(_,{...e,visible:!0})}function V(e){return(0,D.jsx)(v,{...e})}function H(e){return(0,D.jsx)(x,{...e,subtitle:e.row.starred?`Starred`:e.subtitle})}function U(){let[e,t]=(0,E.useState)(`Click a card to open it`);return(0,D.jsxs)(a,{defaultLayoutId:`media-grid`,children:[(0,D.jsx)(i,{adapter:(0,E.useMemo)(()=>r({initial:I}),[]),children:(0,D.jsx)(h,{columns:L,layouts:(0,E.useMemo)(()=>[S({thumbKind:e=>e.kind,title:e=>e.name,subtitle:e=>e.kind,columns:{default:2,sm:4,md:4,lg:4,xl:4},onOpen:e=>t(`Opened ${e.name}`),actions:e=>[{id:`download`,label:`Download ${e.name}`,Icon:o,onClick:()=>t(`Downloading ${e.name}`)}],Card:R,Thumb:z,Checkbox:B,ActionOverlay:V,Meta:H})],[])})}),(0,D.jsx)(`p`,{className:`mt-2 text-xs text-muted-foreground`,children:e})]})}var W=`import { useMemo, useState } from "react"
import { Download } from "lucide-react"
import { DataGridProvider, DataGridUIProvider, DataGridView, MediaGridActionOverlay, MediaGridCard, MediaGridCheckbox, MediaGridMeta, MediaGridThumb, createInMemoryAdapter, defineColumns, mediaGridLayout, type MediaGridActionOverlayProps, type MediaGridCardProps, type MediaGridCheckboxProps, type MediaGridKind, type MediaGridMetaProps, type MediaGridThumbProps } from "@kitora/datagrid"

interface Doc {
  id: string
  name: string
  kind: MediaGridKind
  starred: boolean
}

const files: Doc[] = [
  { id: "1", name: "roadmap.pdf", kind: "pdf", starred: true },
  { id: "2", name: "voice-memo.mp3", kind: "audio", starred: false },
  { id: "3", name: "assets.zip", kind: "archive", starred: false },
  { id: "4", name: "notes.txt", kind: "document", starred: true },
]

const columns = defineColumns<Doc>()([{ id: "name", header: "Name", cell: (r) => r.name }])

// Each slot takes an override; the default parts are exported, so an override can wrap one instead of rewriting it.
function Card(props: MediaGridCardProps<Doc>) {
  return (
    <div className={props.row.starred ? "rounded-lg ring-1 ring-warning" : undefined}>
      <MediaGridCard {...props} />
    </div>
  )
}
function Thumb(props: MediaGridThumbProps<Doc>) {
  return (
    <div className="relative">
      <MediaGridThumb {...props} />
      <span className="absolute bottom-1 left-1 rounded bg-background/85 px-1 text-[10px] uppercase">{props.kind}</span>
    </div>
  )
}
/** Always shown, not only on hover. */
function Checkbox(props: MediaGridCheckboxProps) {
  return <MediaGridCheckbox {...props} visible />
}
function Actions(props: MediaGridActionOverlayProps<Doc>) {
  return <MediaGridActionOverlay {...props} />
}
function Meta(props: MediaGridMetaProps<Doc>) {
  return <MediaGridMeta {...props} subtitle={props.row.starred ? "Starred" : props.subtitle} />
}

export function MediaParts() {
  const [opened, setOpened] = useState("Click a card to open it")
  const adapter = useMemo(() => createInMemoryAdapter({ initial: files }), [])
  const layouts = useMemo(
    () => [
      mediaGridLayout<Doc>({
        thumbKind: (r) => r.kind,
        title: (r) => r.name,
        subtitle: (r) => r.kind,
        columns: { default: 2, sm: 4, md: 4, lg: 4, xl: 4 },
        onOpen: (r) => setOpened(\`Opened \${r.name}\`),
        actions: (r) => [{ id: "download", label: \`Download \${r.name}\`, Icon: Download, onClick: () => setOpened(\`Downloading \${r.name}\`) }],
        Card,
        Thumb,
        Checkbox,
        ActionOverlay: Actions,
        Meta,
      }),
    ],
    [],
  )
  return (
    <DataGridUIProvider defaultLayoutId="media-grid">
      <DataGridProvider adapter={adapter}>
        <DataGridView<Doc> columns={columns} layouts={layouts} />
      </DataGridProvider>
      <p className="mt-2 text-xs text-muted-foreground">{opened}</p>
    </DataGridUIProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(W,()=>d(()=>import(`./media-parts-gcnOiQfT.js`),[]));function G(){return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(l,{title:`MediaGrid`,children:`Gallery view of any datagrid row data. Hover a card → checkbox appears top-left. First ✓ enters select mode — body click then toggles. Shift-click for range, drag for rubber-band, ⌘A for all, Esc to clear. Long-press on touch to enter mode.`}),(0,D.jsx)(T,{n:1,title:`Media library gallery`,blurb:`60 mixed assets through mediaGridLayout: hover for the checkbox, shift-click for a range, drag for rubber-band, ⌘A for all, Esc to clear, long-press on touch.`,code:F,children:(0,D.jsx)(N,{})}),(0,D.jsx)(T,{n:2,title:`Card from parts`,blurb:`Every card slot takes an override; MediaGridCard, MediaGridThumb, MediaGridCheckbox, MediaGridActionOverlay and MediaGridMeta are the defaults to wrap.`,code:W,children:(0,D.jsx)(U,{})})]})}export{G as component};