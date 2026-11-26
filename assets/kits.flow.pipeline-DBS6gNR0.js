import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./activity-nUotr9Mb.js";import{t as n}from"./boxes-Hs-eL5KK.js";import{t as r}from"./brain-COFpobH3.js";import{t as i}from"./chart-column-D5F5MgZG.js";import{t as a}from"./database-DEFok6Hf.js";import{s as o}from"./kit-docs-BUovISd0.js";import{t as s}from"./lock-open-DlIiF2Ng.js";import{t as c}from"./lock-DLKF2ezk.js";import{t as l}from"./network-BgD6wpZL.js";import{t as u}from"./radio-BMShKZ1P.js";import{t as d}from"./table-2-Ii29QUcX.js";import{t as f}from"./triangle-alert-CWJdVHaZ.js";import{t as p}from"./workflow-ZeXxFSH-.js";import{Bc as m,Cc as h,Ic as g,Mi as _,ti as v}from"./index-B9ukmIN1.js";import"./kit-gallery-Bph7isB2.js";import{t as y}from"./example-BGnSQG2Y.js";import{a as b,d as x,h as S,i as C,n as w,r as T,s as E,t as D}from"./-kits.flow.shared-DJJToV4S.js";import{n as O,t as k}from"./node-card-DqsVOdKj.js";var A=_(`server-cog`,[[`path`,{d:`m10.852 14.772-.383.923`,key:`11vil6`}],[`path`,{d:`M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923`,key:`1v3clb`}],[`path`,{d:`m13.148 9.228.383-.923`,key:`t2zzyc`}],[`path`,{d:`m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544`,key:`1bxfiv`}],[`path`,{d:`m14.772 10.852.923-.383`,key:`k9m8cz`}],[`path`,{d:`m14.772 13.148.923.383`,key:`1xvhww`}],[`path`,{d:`M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5`,key:`tn8das`}],[`path`,{d:`M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5`,key:`1g2pve`}],[`path`,{d:`M6 18h.01`,key:`uhywen`}],[`path`,{d:`M6 6h.01`,key:`1utrut`}],[`path`,{d:`m9.228 10.852-.923-.383`,key:`1wtb30`}],[`path`,{d:`m9.228 13.148-.923.383`,key:`1a830x`}]]),j=_(`unplug`,[[`path`,{d:`m19 5 3-3`,key:`yk6iyv`}],[`path`,{d:`m2 22 3-3`,key:`19mgm9`}],[`path`,{d:`M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z`,key:`goz73y`}],[`path`,{d:`M7.5 13.5 10 11`,key:`7xgeeb`}],[`path`,{d:`M10.5 16.5 13 14`,key:`10btkg`}],[`path`,{d:`m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z`,key:`1snsnr`}]]),M=e(m(),1),N=g(),P=[`table`,`stream`,`metric`,`model`],F=e=>P.some(t=>t===e),I={table:{port:`border-sky-500`,edge:`stroke-sky-500/70`,swatch:`bg-sky-500`},stream:{port:`border-fuchsia-500`,edge:`stroke-fuchsia-500/70`,swatch:`bg-fuchsia-500`},metric:{port:`border-amber-500`,edge:`stroke-amber-500/70`,swatch:`bg-amber-500`},model:{port:`border-emerald-500`,edge:`stroke-emerald-500/70`,swatch:`bg-emerald-500`}},L={source:{icon:(0,N.jsx)(a,{}),accent:`bg-sky-500/15 text-sky-700 dark:text-sky-400`,mini:`fill-sky-500/50`},transform:{icon:(0,N.jsx)(p,{}),accent:`bg-violet-500/15 text-violet-600 dark:text-violet-400`,mini:`fill-violet-500/50`},ml:{icon:(0,N.jsx)(r,{}),accent:`bg-emerald-500/15 text-emerald-700 dark:text-emerald-400`,mini:`fill-emerald-500/50`},sink:{icon:(0,N.jsx)(d,{}),accent:`bg-amber-500/15 text-amber-700 dark:text-amber-400`,mini:`fill-amber-500/50`}},R=e=>([t,n])=>({id:`${e}:${t}`,label:`${t} · ${n}`,dataType:n});function z(e,t,n,r){let i=O(n.map(R(`in`)),r.map(R(`out`)));return{id:e,position:{x:0,y:0},width:196,height:i.height,ports:i.ports,data:t}}var B=[z(`pg_orders`,{name:`orders`,category:`source`,engine:`Postgres`,rows:1240512,lastRun:`2 min ago`},[],[[`rows`,`table`]]),z(`pg_customers`,{name:`customers`,category:`source`,engine:`Postgres`,rows:88310,lastRun:`2 min ago`},[],[[`rows`,`table`]]),z(`s3_products`,{name:`products.parquet`,category:`source`,engine:`S3`,rows:12904,lastRun:`1 h ago`},[],[[`rows`,`table`]]),z(`kafka_clicks`,{name:`clickstream`,category:`source`,engine:`Kafka`,rows:0,lastRun:`live`,icon:(0,N.jsx)(u,{})},[],[[`events`,`stream`]]),z(`clean_orders`,{name:`clean_orders`,category:`transform`,engine:`dbt`,rows:1238007,lastRun:`1 min ago`},[[`rows`,`table`]],[[`rows`,`table`]]),z(`dim_customer`,{name:`dim_customer`,category:`transform`,engine:`dbt`,rows:88310,lastRun:`1 min ago`},[[`rows`,`table`]],[[`rows`,`table`]]),z(`fct_sales`,{name:`fct_sales`,category:`transform`,engine:`dbt`,rows:1238007,lastRun:`1 min ago`},[[`orders`,`table`],[`customers`,`table`],[`products`,`table`]],[[`rows`,`table`]]),z(`sessionize`,{name:`sessionize`,category:`transform`,engine:`Flink`,rows:0,lastRun:`live`,icon:(0,N.jsx)(t,{})},[[`events`,`stream`]],[[`sessions`,`table`],[`live`,`metric`]]),z(`features`,{name:`churn_features`,category:`ml`,engine:`Spark`,rows:88310,lastRun:`12 min ago`,icon:(0,N.jsx)(n,{})},[[`sales`,`table`],[`sessions`,`table`]],[[`rows`,`table`]]),z(`churn_model`,{name:`churn_model v14`,category:`ml`,engine:`XGBoost`,rows:88310,lastRun:`6 h ago`},[[`train`,`table`]],[[`model`,`model`]]),z(`wh_sales`,{name:`analytics.fct_sales`,category:`sink`,engine:`Snowflake`,rows:1238007,lastRun:`1 min ago`},[[`rows`,`table`]],[]),z(`dash`,{name:`Revenue dashboard`,category:`sink`,engine:`Metabase`,rows:0,lastRun:`live`,icon:(0,N.jsx)(i,{})},[[`sales`,`table`],[`live`,`metric`]],[]),z(`score_api`,{name:`score-api`,category:`sink`,engine:`Serving`,rows:0,lastRun:`deployed`,icon:(0,N.jsx)(A,{})},[[`model`,`model`]],[])],V=(e,t,n,r,i=!1)=>({id:`${e}.${t}>${n}.${r}`,source:e,sourcePort:`out:${t}`,target:n,targetPort:`in:${r}`,...i?{animated:i}:{}}),H=S({nodes:B,edges:[V(`pg_orders`,`rows`,`clean_orders`,`rows`),V(`pg_customers`,`rows`,`dim_customer`,`rows`),V(`clean_orders`,`rows`,`fct_sales`,`orders`),V(`dim_customer`,`rows`,`fct_sales`,`customers`),V(`s3_products`,`rows`,`fct_sales`,`products`),V(`kafka_clicks`,`events`,`sessionize`,`events`,!0),V(`fct_sales`,`rows`,`wh_sales`,`rows`),V(`fct_sales`,`rows`,`dash`,`sales`),V(`sessionize`,`live`,`dash`,`live`,!0),V(`fct_sales`,`rows`,`features`,`sales`),V(`sessionize`,`sessions`,`features`,`sessions`),V(`features`,`rows`,`churn_model`,`train`),V(`churn_model`,`model`,`score_api`,`model`)]},{},{rankGap:48,nodeGap:18});function U(e,t){let n=new Set([t]),r=new Set,i=(t,a)=>{for(let o of e.edges){let[e,s]=a?[o.source,o.target]:[o.target,o.source];e===t&&(r.add(o.id),n.has(s)||(n.add(s),i(s,a)))}};return i(t,!0),i(t,!1),{nodes:n,edges:r}}var W=(e,t,n)=>{let r=e.nodes.find(e=>e.id===t)?.ports?.find(e=>e.id===n)?.dataType;return F(r)?r:void 0},G=new Intl.NumberFormat(`en`,{notation:`compact`,maximumFractionDigits:1});function K(){let e=x({initial:H}),{graph:t,selection:n}=e.state,[r,i]=(0,M.useState)(!1),[a,o]=(0,M.useState)(null),u=n.nodes.length===1?n.nodes[0]:void 0,d=(0,M.useMemo)(()=>u?U(t,u):void 0,[t,u]),p=(0,M.useMemo)(()=>a?X(t,a):void 0,[t,a]),m=(e,t)=>a===e?`error`:p?.has(e)?`warn`:t.lastRun===`live`?`running`:`ok`,h=u?t.nodes.find(e=>e.id===u):void 0;return(0,N.jsxs)(E,{flow:e,fitViewOnMount:!0,readOnly:r,label:`Data pipeline`,portClassName:e=>F(e.dataType)?I[e.dataType].port:void 0,edgeClassName:e=>{let n=W(t,e.source,e.sourcePort);return d&&!d.edges.has(e.id)?`opacity-15`:n?I[n].edge:void 0},renderNode:({node:e,selected:t})=>{let n=L[e.data.category];return(0,N.jsx)(k,{title:e.data.name,subtitle:`${e.data.engine}${e.data.rows?` · ${G.format(e.data.rows)} rows`:``} · ${e.data.lastRun}`,icon:e.data.icon??n.icon,accent:n.accent,selected:t,status:m(e.id,e.data),ports:e.ports,className:d&&!d.nodes.has(e.id)?`opacity-35`:void 0})},children:[(0,N.jsx)(T,{position:`top-left`,children:(0,N.jsxs)(`div`,{className:`${b} flex items-center gap-0.5 p-0.5`,role:`toolbar`,"aria-label":`Pipeline`,children:[(0,N.jsxs)(v,{variant:r?`secondary`:`ghost`,size:`sm`,"aria-pressed":r,onClick:()=>i(!r),children:[r?(0,N.jsx)(c,{}):(0,N.jsx)(s,{}),` `,r?`Read-only`:`Editing`]}),(0,N.jsxs)(v,{variant:`ghost`,size:`sm`,onClick:()=>e.layout({rankGap:48,nodeGap:18}),disabled:r,children:[(0,N.jsx)(l,{}),` Re-layout`]}),(0,N.jsxs)(v,{variant:`ghost`,size:`sm`,onClick:()=>o(a?null:`dim_customer`),children:[a?(0,N.jsx)(j,{}):(0,N.jsx)(f,{}),` `,a?`Clear failure`:`Fail dim_customer`]})]})}),(0,N.jsx)(T,{position:`top-right`,children:(0,N.jsx)(`div`,{className:`${b} flex items-center gap-3 px-2.5 py-1.5 text-[11px] text-muted-foreground`,"aria-label":`Port types`,children:P.map(e=>(0,N.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,N.jsx)(`span`,{className:`size-2 rounded-full ${I[e].swatch}`}),e]},e))})}),h&&d&&(0,N.jsx)(T,{position:`bottom-center`,children:(0,N.jsxs)(`div`,{className:`rounded-lg border bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/80 flex items-center gap-3 px-3 py-1.5 text-[12px]`,role:`status`,children:[(0,N.jsx)(`span`,{className:`font-medium`,children:h.data.name}),(0,N.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[Y(t,h.id).size,` upstream · `,X(t,h.id).size,` downstream`]}),(0,N.jsx)(`span`,{className:`text-muted-foreground`,children:`Esc to clear`})]})}),(0,N.jsx)(w,{position:`bottom-left`}),(0,N.jsx)(C,{position:`bottom-right`,width:160,height:100,nodeClassName:e=>q.get(e.id)})]})}var q=new Map(B.map(e=>[e.id,L[e.data.category].mini]));function J(e,t,n){let r=new Set,i=[t];for(;i.length>0;){let t=i.pop();for(let a of e.edges){let[e,o]=n?[a.source,a.target]:[a.target,a.source];e===t&&!r.has(o)&&(r.add(o),i.push(o))}}return r}var Y=(e,t)=>J(e,t,!1),X=(e,t)=>J(e,t,!0),Z=`import { useMemo, useState, type ReactNode } from "react"
import { Activity, BarChart3, Boxes, Brain, Database, Lock, LockOpen, Network, Radio, ServerCog, Table2, TriangleAlert, Unplug, Workflow } from "lucide-react"
import { Button } from "@kitora/ui/button"
import { FlowCanvas, FlowControls, FlowPanel, MiniMap, NodeCard, PANEL_SURFACE, layoutGraph, rowPorts, useFlow, type FlowEdge, type FlowNode, type Graph, type NodeStatus, type RowPortSpec } from "@kitora/flow"

// ── vocabulary ───────────────────────────────────────────────────────────────
/** What flows along an edge; ports with different types refuse to connect. */
const DATA_TYPES = ["table", "stream", "metric", "model"] as const
type DataType = (typeof DATA_TYPES)[number]
const isDataType = (v: string | undefined): v is DataType => DATA_TYPES.some((t) => t === v)
type Category = "source" | "transform" | "ml" | "sink"

const TYPE_STYLE: Readonly<Record<DataType, { readonly port: string; readonly edge: string; readonly swatch: string }>> = {
  table: { port: "border-sky-500", edge: "stroke-sky-500/70", swatch: "bg-sky-500" },
  stream: { port: "border-fuchsia-500", edge: "stroke-fuchsia-500/70", swatch: "bg-fuchsia-500" },
  metric: { port: "border-amber-500", edge: "stroke-amber-500/70", swatch: "bg-amber-500" },
  model: { port: "border-emerald-500", edge: "stroke-emerald-500/70", swatch: "bg-emerald-500" },
}

const CATEGORY_STYLE: Readonly<Record<Category, { readonly icon: ReactNode; readonly accent: string; readonly mini: string }>> = {
  source: { icon: <Database />, accent: "bg-sky-500/15 text-sky-700 dark:text-sky-400", mini: "fill-sky-500/50" },
  transform: { icon: <Workflow />, accent: "bg-violet-500/15 text-violet-600 dark:text-violet-400", mini: "fill-violet-500/50" },
  ml: { icon: <Brain />, accent: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400", mini: "fill-emerald-500/50" },
  sink: { icon: <Table2 />, accent: "bg-amber-500/15 text-amber-700 dark:text-amber-400", mini: "fill-amber-500/50" },
}

interface Asset {
  readonly name: string
  readonly category: Category
  readonly engine: string
  readonly rows: number
  readonly lastRun: string
  readonly icon?: ReactNode
}

// ── the graph ────────────────────────────────────────────────────────────────
type PortSpec = readonly [id: string, type: DataType]
// Port ids must be unique within a node, and an input and an output may share a name, so ids carry the direction.
const port = (dir: "in" | "out") => ([name, type]: PortSpec): RowPortSpec => ({ id: \`\${dir}:\${name}\`, label: \`\${name} · \${type}\`, dataType: type })

function asset(id: string, a: Asset, inputs: readonly PortSpec[], outputs: readonly PortSpec[]): FlowNode<Asset> {
  const p = rowPorts(inputs.map(port("in")), outputs.map(port("out")))
  return { id, position: { x: 0, y: 0 }, width: 196, height: p.height, ports: p.ports, data: a }
}

const NODES: FlowNode<Asset>[] = [
  asset("pg_orders", { name: "orders", category: "source", engine: "Postgres", rows: 1_240_512, lastRun: "2 min ago" }, [], [["rows", "table"]]),
  asset("pg_customers", { name: "customers", category: "source", engine: "Postgres", rows: 88_310, lastRun: "2 min ago" }, [], [["rows", "table"]]),
  asset("s3_products", { name: "products.parquet", category: "source", engine: "S3", rows: 12_904, lastRun: "1 h ago" }, [], [["rows", "table"]]),
  asset("kafka_clicks", { name: "clickstream", category: "source", engine: "Kafka", rows: 0, lastRun: "live", icon: <Radio /> }, [], [["events", "stream"]]),
  asset("clean_orders", { name: "clean_orders", category: "transform", engine: "dbt", rows: 1_238_007, lastRun: "1 min ago" }, [["rows", "table"]], [["rows", "table"]]),
  asset("dim_customer", { name: "dim_customer", category: "transform", engine: "dbt", rows: 88_310, lastRun: "1 min ago" }, [["rows", "table"]], [["rows", "table"]]),
  asset("fct_sales", { name: "fct_sales", category: "transform", engine: "dbt", rows: 1_238_007, lastRun: "1 min ago" }, [["orders", "table"], ["customers", "table"], ["products", "table"]], [["rows", "table"]]),
  asset("sessionize", { name: "sessionize", category: "transform", engine: "Flink", rows: 0, lastRun: "live", icon: <Activity /> }, [["events", "stream"]], [["sessions", "table"], ["live", "metric"]]),
  asset("features", { name: "churn_features", category: "ml", engine: "Spark", rows: 88_310, lastRun: "12 min ago", icon: <Boxes /> }, [["sales", "table"], ["sessions", "table"]], [["rows", "table"]]),
  asset("churn_model", { name: "churn_model v14", category: "ml", engine: "XGBoost", rows: 88_310, lastRun: "6 h ago" }, [["train", "table"]], [["model", "model"]]),
  asset("wh_sales", { name: "analytics.fct_sales", category: "sink", engine: "Snowflake", rows: 1_238_007, lastRun: "1 min ago" }, [["rows", "table"]], []),
  asset("dash", { name: "Revenue dashboard", category: "sink", engine: "Metabase", rows: 0, lastRun: "live", icon: <BarChart3 /> }, [["sales", "table"], ["live", "metric"]], []),
  asset("score_api", { name: "score-api", category: "sink", engine: "Serving", rows: 0, lastRun: "deployed", icon: <ServerCog /> }, [["model", "model"]], []),
]

const link = (source: string, sourcePort: string, target: string, targetPort: string, animated = false): FlowEdge => ({ id: \`\${source}.\${sourcePort}>\${target}.\${targetPort}\`, source, sourcePort: \`out:\${sourcePort}\`, target, targetPort: \`in:\${targetPort}\`, ...(animated ? { animated } : {}) })

const EDGES: FlowEdge[] = [
  link("pg_orders", "rows", "clean_orders", "rows"),
  link("pg_customers", "rows", "dim_customer", "rows"),
  link("clean_orders", "rows", "fct_sales", "orders"),
  link("dim_customer", "rows", "fct_sales", "customers"),
  link("s3_products", "rows", "fct_sales", "products"),
  link("kafka_clicks", "events", "sessionize", "events", true),
  link("fct_sales", "rows", "wh_sales", "rows"),
  link("fct_sales", "rows", "dash", "sales"),
  link("sessionize", "live", "dash", "live", true),
  link("fct_sales", "rows", "features", "sales"),
  link("sessionize", "sessions", "features", "sessions"),
  link("features", "rows", "churn_model", "train"),
  link("churn_model", "model", "score_api", "model"),
]

// Laid out once, up front: every node has a fixed size, so the core layout needs no DOM.
const INITIAL: Graph<Asset> = layoutGraph({ nodes: NODES, edges: EDGES }, {}, { rankGap: 48, nodeGap: 18 })

/** Every node upstream and downstream of \`id\` (its lineage), plus the edges between them. */
function lineage(graph: Graph<Asset>, id: string): { readonly nodes: ReadonlySet<string>; readonly edges: ReadonlySet<string> } {
  const nodes = new Set([id])
  const edges = new Set<string>()
  const walk = (from: string, forward: boolean) => {
    for (const e of graph.edges) {
      const [a, b] = forward ? [e.source, e.target] : [e.target, e.source]
      if (a !== from) continue
      edges.add(e.id)
      if (!nodes.has(b)) {
        nodes.add(b)
        walk(b, forward)
      }
    }
  }
  walk(id, true)
  walk(id, false)
  return { nodes, edges }
}

const portType = (graph: Graph<Asset>, nodeId: string, portId: string): DataType | undefined => {
  const t = graph.nodes.find((n) => n.id === nodeId)?.ports?.find((p) => p.id === portId)?.dataType
  return isDataType(t) ? t : undefined
}

const compact = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 })

/**
 * A data pipeline: typed ports (a stream cannot feed a table input), live statuses, streaming edges,
 * lineage on select (everything upstream and downstream stays lit), a failure that marks its
 * downstream stale, and a read-only mode for viewers.
 */
export function DataPipeline() {
  const flow = useFlow<Asset>({ initial: INITIAL })
  const { graph, selection } = flow.state
  const [readOnly, setReadOnly] = useState(false)
  const [failed, setFailed] = useState<string | null>(null)
  const focus = selection.nodes.length === 1 ? selection.nodes[0] : undefined
  const lit = useMemo(() => (focus ? lineage(graph, focus) : undefined), [graph, focus])
  // A failed node turns everything downstream of it stale.
  const stale = useMemo(() => (failed ? downstreamOf(graph, failed) : undefined), [graph, failed])
  const statusOf = (id: string, a: Asset): NodeStatus => {
    if (failed === id) return "error"
    if (stale?.has(id)) return "warn"
    return a.lastRun === "live" ? "running" : "ok"
  }
  const selected = focus ? graph.nodes.find((n) => n.id === focus) : undefined

  return (
    <FlowCanvas
      flow={flow}
      fitViewOnMount
      readOnly={readOnly}
      label="Data pipeline"
      portClassName={(p) => (isDataType(p.dataType) ? TYPE_STYLE[p.dataType].port : undefined)}
      edgeClassName={(e) => {
        const t = portType(graph, e.source, e.sourcePort)
        if (lit && !lit.edges.has(e.id)) return "opacity-15"
        return t ? TYPE_STYLE[t].edge : undefined
      }}
      renderNode={({ node, selected: isSelected }) => {
        const c = CATEGORY_STYLE[node.data.category]
        return (
          <NodeCard
            title={node.data.name}
            subtitle={\`\${node.data.engine}\${node.data.rows ? \` · \${compact.format(node.data.rows)} rows\` : ""} · \${node.data.lastRun}\`}
            icon={node.data.icon ?? c.icon}
            accent={c.accent}
            selected={isSelected}
            status={statusOf(node.id, node.data)}
            ports={node.ports}
            className={lit && !lit.nodes.has(node.id) ? "opacity-35" : undefined}
          />
        )
      }}
    >
      <FlowPanel position="top-left">
        <div className={\`\${PANEL_SURFACE} flex items-center gap-0.5 p-0.5\`} role="toolbar" aria-label="Pipeline">
          <Button variant={readOnly ? "secondary" : "ghost"} size="sm" aria-pressed={readOnly} onClick={() => setReadOnly(!readOnly)}>
            {readOnly ? <Lock /> : <LockOpen />} {readOnly ? "Read-only" : "Editing"}
          </Button>
          <Button variant="ghost" size="sm" onClick={() => flow.layout({ rankGap: 48, nodeGap: 18 })} disabled={readOnly}>
            <Network /> Re-layout
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setFailed(failed ? null : "dim_customer")}>
            {failed ? <Unplug /> : <TriangleAlert />} {failed ? "Clear failure" : "Fail dim_customer"}
          </Button>
        </div>
      </FlowPanel>
      <FlowPanel position="top-right">
        <div className={\`\${PANEL_SURFACE} flex items-center gap-3 px-2.5 py-1.5 text-[11px] text-muted-foreground\`} aria-label="Port types">
          {DATA_TYPES.map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <span className={\`size-2 rounded-full \${TYPE_STYLE[t].swatch}\`} />
              {t}
            </span>
          ))}
        </div>
      </FlowPanel>
      {selected && lit && (
        <FlowPanel position="bottom-center">
          <div className={\`\${PANEL_SURFACE} flex items-center gap-3 px-3 py-1.5 text-[12px]\`} role="status">
            <span className="font-medium">{selected.data.name}</span>
            <span className="text-muted-foreground tabular-nums">
              {upstreamOf(graph, selected.id).size} upstream · {downstreamOf(graph, selected.id).size} downstream
            </span>
            <span className="text-muted-foreground">Esc to clear</span>
          </div>
        </FlowPanel>
      )}
      <FlowControls position="bottom-left" />
      <MiniMap position="bottom-right" width={160} height={100} nodeClassName={(n) => NODE_MINI.get(n.id)} />
    </FlowCanvas>
  )
}

const NODE_MINI = new Map(NODES.map((n) => [n.id, CATEGORY_STYLE[n.data.category].mini]))

function reach(graph: Graph<Asset>, id: string, forward: boolean): Set<string> {
  const out = new Set<string>()
  const stack = [id]
  while (stack.length > 0) {
    const cur = stack.pop()
    for (const e of graph.edges) {
      const [a, b] = forward ? [e.source, e.target] : [e.target, e.source]
      if (a === cur && !out.has(b)) {
        out.add(b)
        stack.push(b)
      }
    }
  }
  return out
}

const upstreamOf = (g: Graph<Asset>, id: string) => reach(g, id, false)
const downstreamOf = (g: Graph<Asset>, id: string) => reach(g, id, true)
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>h(()=>import(`./pipeline-C3wMhPUL.js`),[]));function Q(){return(0,N.jsxs)(`div`,{children:[(0,N.jsx)(o,{title:`Data pipeline`,children:`Sources, transforms, models and sinks, laid out by the kit's layered layout before the first paint.`}),(0,N.jsx)(y,{n:1,title:`Pipeline graph`,blurb:`Ports are typed (table, stream, metric, model) and refuse a mismatch. Click a node to light its lineage; fail a node to mark everything downstream stale; lock it read-only for viewers.`,code:Z,children:(0,N.jsx)(D,{testId:`pipeline`,height:480,children:(0,N.jsx)(K,{})})})]})}export{Q as component};