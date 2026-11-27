import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./download-BRTJA0xs.js";import{s as n}from"./kit-docs-Cf27Kpa-.js";import{Bn as r,Ec as i,Gn as a,Ln as o,Uc as s,nr as c,ri as l,zc as u}from"./index-BZuUy872.js";import{d as ee,n as d,p as f,u as p}from"./use-width-DbIwm9Wo.js";import{i as te,r as ne,t as re}from"./scale-9_kbg7i6.js";import{n as m}from"./use-cartesian-CIYKap36.js";import{a as ie,c as h,i as g,l as ae,n as _,r as v,s as y,t as b}from"./frame-C638nGqD.js";import{n as x,r as S,t as C}from"./axes-B3XNiTPU.js";import{a as oe,i as se,n as w,r as T,s as E}from"./cartesian-DSDLk_49.js";import{t as D}from"./pie-B4ib4DfJ.js";import"./kit-gallery-BBavj2rC.js";import{t as O}from"./example-B67lLz1F.js";var k=u(),A=[{quarter:`Q1`,online:182e3,retail:96500},{quarter:`Q2`,online:214300,retail:104200},{quarter:`Q3`,online:238900,retail:99800},{quarter:`Q4`,online:301400,retail:131600}],j=[{market:`Germany`,revenue:412e3},{market:`Austria`,revenue:168e3},{market:`Switzerland`,revenue:139e3},{market:`Netherlands`,revenue:97e3}],M={series:e=>[`#0d9488`,`#d97706`,`#6366f1`,`#db2777`][e]??`var(--dkc-muted)`,sequential:e=>`color-mix(in oklch, #0d9488 ${Math.round(e*100)}%, var(--dkc-surface))`,slots:4,other:`var(--dkc-muted)`},N=ee({locale:`de-DE`,number:{style:`currency`,currency:`EUR`,maximumFractionDigits:0}});function P(){return(0,k.jsx)(d,{palette:M,formats:N,children:(0,k.jsxs)(`div`,{className:`grid grid-cols-1 gap-6 md:grid-cols-2`,children:[(0,k.jsx)(w,{title:`Revenue by channel`,data:A,x:e=>e.quarter,series:[{key:`online`,label:`Online`,value:e=>e.online},{key:`retail`,label:`Retail`,value:e=>e.retail}]}),(0,k.jsx)(D,{title:`Revenue by market`,data:j,label:e=>e.market,value:e=>e.revenue,legend:`bottom`})]})})}var F=`import { BarChart, ChartConfigProvider, createIntlFormats, DonutChart, type ChartPalette } from "@kitora/charts"

const REVENUE = [
  { quarter: "Q1", online: 182_000, retail: 96_500 },
  { quarter: "Q2", online: 214_300, retail: 104_200 },
  { quarter: "Q3", online: 238_900, retail: 99_800 },
  { quarter: "Q4", online: 301_400, retail: 131_600 },
]

const MARKETS = [
  { market: "Germany", revenue: 412_000 },
  { market: "Austria", revenue: 168_000 },
  { market: "Switzerland", revenue: 139_000 },
  { market: "Netherlands", revenue: 97_000 },
]

/** A brand palette written by hand against the \`ChartPalette\` interface: teal, amber, indigo, rose. */
const BRAND_PALETTE: ChartPalette = {
  series: (index) => ["#0d9488", "#d97706", "#6366f1", "#db2777"][index] ?? "var(--dkc-muted)",
  sequential: (t) => \`color-mix(in oklch, #0d9488 \${Math.round(t * 100)}%, var(--dkc-surface))\`,
  slots: 4,
  other: "var(--dkc-muted)",
}

/** Euros in German notation for every number, one place to change it. */
const EURO_FORMATS = createIntlFormats({ locale: "de-DE", number: { style: "currency", currency: "EUR", maximumFractionDigits: 0 } })

/** Two charts under one \`ChartConfigProvider\`: a custom palette and euro formatting, no per-chart props. */
export function CustomAdapters() {
  return (
    <ChartConfigProvider palette={BRAND_PALETTE} formats={EURO_FORMATS}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <BarChart
          title="Revenue by channel"
          data={REVENUE}
          x={(d) => d.quarter}
          series={[
            { key: "online", label: "Online", value: (d) => d.online },
            { key: "retail", label: "Retail", value: (d) => d.retail },
          ]}
        />
        <DonutChart title="Revenue by market" data={MARKETS} label={(d) => d.market} value={(d) => d.revenue} legend="bottom" />
      </div>
    </ChartConfigProvider>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>i(()=>import(`./adapter-BLyG76Gl.js`),[]));var I={title:`Monthly active users (composed)`,data:[{month:`Jan`,users:1200,sessions:2100},{month:`Feb`,users:1450,sessions:2380},{month:`Mar`,users:1380,sessions:2600},{month:`Apr`,users:1720,sessions:2950},{month:`May`,users:1960,sessions:3120},{month:`Jun`,users:2240,sessions:3480}],x:e=>e.month,series:[{key:`users`,label:`Users`,value:e=>e.users,dots:!0},{key:`sessions`,label:`Sessions`,value:e=>e.sessions,dashed:!0}]};function L(){let e=m(I);return(0,k.jsxs)(`div`,{className:`grid grid-cols-1 gap-6 md:grid-cols-2`,children:[(0,k.jsx)(E,{...I,title:`Monthly active users (preset)`}),(0,k.jsxs)(b.Root,{title:I.title,summary:e.model.summary,table:e.model.table,children:[(0,k.jsxs)(b.Header,{children:[(0,k.jsx)(b.Title,{}),(0,k.jsx)(b.Actions,{children:(0,k.jsx)(b.TableToggle,{})})]}),(0,k.jsx)(b.Plot,{height:240,children:t=>(0,k.jsxs)(T.Root,{chart:e,options:I,width:t,children:[(0,k.jsxs)(T.Surface,{children:[(0,k.jsx)(T.Lines,{}),(0,k.jsx)(T.Dots,{}),(0,k.jsx)(T.Crosshair,{}),(0,k.jsx)(T.ActivePoints,{}),(0,k.jsx)(T.Axes,{})]}),(0,k.jsx)(T.Tooltip,{render:e=>(0,k.jsxs)(`div`,{"data-testid":`composed-tooltip`,children:[(0,k.jsx)(`div`,{className:`font-medium`,children:e.title}),e.rows.map(e=>(0,k.jsxs)(`div`,{className:`tabular-nums`,children:[e.label,`: `,(0,k.jsx)(`b`,{children:e.value})]},e.key))]})}),(0,k.jsx)(T.Announcer,{})]})}),(0,k.jsx)(b.Legend,{className:`mt-2`,items:e.model.legendItems,onToggle:e.toggle}),(0,k.jsx)(b.ScreenReaderTable,{})]})]})}var R=`import { Cartesian, Chart, LineChart, useCartesianChart, type CartesianOptions } from "@kitora/charts"

interface Row {
  readonly month: string
  readonly users: number
  readonly sessions: number
}

const DATA: readonly Row[] = [
  { month: "Jan", users: 1200, sessions: 2100 },
  { month: "Feb", users: 1450, sessions: 2380 },
  { month: "Mar", users: 1380, sessions: 2600 },
  { month: "Apr", users: 1720, sessions: 2950 },
  { month: "May", users: 1960, sessions: 3120 },
  { month: "Jun", users: 2240, sessions: 3480 },
]

// Module-level options keep \`x\` and \`series\` stable, so the model is built once.
const OPTIONS: CartesianOptions<Row> = {
  title: "Monthly active users (composed)",
  data: DATA,
  x: (d) => d.month,
  series: [
    { key: "users", label: "Users", value: (d) => d.users, dots: true },
    { key: "sessions", label: "Sessions", value: (d) => d.sessions, dashed: true },
  ],
}

/**
 * The same chart twice: the \`LineChart\` preset, then rebuilt from the public parts with the legend
 * moved under the plot, no grid and a custom tooltip.
 */
export function ComposedLine() {
  const chart = useCartesianChart(OPTIONS)
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <LineChart {...OPTIONS} title="Monthly active users (preset)" />
      <Chart.Root title={OPTIONS.title} summary={chart.model.summary} table={chart.model.table}>
        <Chart.Header>
          <Chart.Title />
          <Chart.Actions>
            <Chart.TableToggle />
          </Chart.Actions>
        </Chart.Header>
        <Chart.Plot height={240}>
          {(width) => (
            <Cartesian.Root chart={chart} options={OPTIONS} width={width}>
              <Cartesian.Surface>
                <Cartesian.Lines />
                <Cartesian.Dots />
                <Cartesian.Crosshair />
                <Cartesian.ActivePoints />
                <Cartesian.Axes />
              </Cartesian.Surface>
              <Cartesian.Tooltip
                render={(readout) => (
                  <div data-testid="composed-tooltip">
                    <div className="font-medium">{readout.title}</div>
                    {readout.rows.map((row) => (
                      <div key={row.key} className="tabular-nums">
                        {row.label}: <b>{row.value}</b>
                      </div>
                    ))}
                  </div>
                )}
              />
              <Cartesian.Announcer />
            </Cartesian.Root>
          )}
        </Chart.Plot>
        <Chart.Legend className="mt-2" items={chart.model.legendItems} onToggle={chart.toggle} />
        <Chart.ScreenReaderTable />
      </Chart.Root>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(R,()=>i(()=>import(`./compose-1CeAIKQr.js`),[]));var z=[{month:`Jan`,online:42,retail:31},{month:`Feb`,online:48,retail:29},{month:`Mar`,online:55,retail:34},{month:`Apr`,online:61,retail:33}],B=[{key:`online`,label:`Online`,value:e=>e.online},{key:`retail`,label:`Retail`,value:e=>e.retail}],V=[{region:`North`,share:38},{region:`South`,share:27},{region:`East`,share:21},{region:`West`,share:14}];function ce(){return(0,k.jsxs)(`div`,{className:`grid grid-cols-1 gap-6 md:grid-cols-2`,children:[(0,k.jsx)(w,{title:`Sales by channel (k€)`,data:z,x:e=>e.month,series:B,exportFormats:[`svg`,`png`],height:220}),(0,k.jsx)(D,{title:`Revenue share by region`,data:V,label:e=>e.region,value:e=>e.share,formatValue:e=>`${e}%`,legend:`bottom`,height:180,actions:(0,k.jsx)(b.Export,{format:`png`,fileName:`region-share.png`,options:{background:`transparent`,legend:!1,scale:3}})})]})}var H=`import { BarChart, Chart, DonutChart, type ChartSeries } from "@kitora/charts"

interface Month {
  readonly month: string
  readonly online: number
  readonly retail: number
}

const SALES: readonly Month[] = [
  { month: "Jan", online: 42, retail: 31 },
  { month: "Feb", online: 48, retail: 29 },
  { month: "Mar", online: 55, retail: 34 },
  { month: "Apr", online: 61, retail: 33 },
]

const SERIES: readonly ChartSeries<Month>[] = [
  { key: "online", label: "Online", value: (d) => d.online },
  { key: "retail", label: "Retail", value: (d) => d.retail },
]

const SHARE = [
  { region: "North", share: 38 },
  { region: "South", share: 27 },
  { region: "East", share: 21 },
  { region: "West", share: 14 },
]

/**
 * \`exportFormats\` puts a download button per format in any framed chart's header, before the Table toggle; the file carries
 * the title and the legend. The donut takes \`Chart.Export\` itself through \`actions\`, with its own options: a transparent
 * background and no legend.
 */
export function ExportChart() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <BarChart title="Sales by channel (k€)" data={SALES} x={(d) => d.month} series={SERIES} exportFormats={["svg", "png"]} height={220} />
      <DonutChart
        title="Revenue share by region"
        data={SHARE}
        label={(d) => d.region}
        value={(d) => d.share}
        formatValue={(v) => \`\${v}%\`}
        legend="bottom"
        height={180}
        actions={<Chart.Export format="png" fileName="region-share.png" options={{ background: "transparent", legend: false, scale: 3 }} />}
      />
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(H,()=>i(()=>import(`./export-UmtnQDvH.js`),[]));var U=[{day:`Mon`,signups:120},{day:`Tue`,signups:164},{day:`Wed`,signups:151},{day:`Thu`,signups:198},{day:`Fri`,signups:176}],W=[{key:`signups`,label:`Signups`,value:e=>e.signups}];function G(){return(0,k.jsx)(E,{title:`Signups this week`,data:U,x:e=>e.day,series:W,height:200,actions:(0,k.jsxs)(o,{children:[(0,k.jsx)(c,{asChild:!0,children:(0,k.jsxs)(l,{variant:`ghost`,size:`sm`,children:[(0,k.jsx)(t,{"aria-hidden":`true`}),`Export`]})}),(0,k.jsxs)(r,{align:`end`,className:`w-44`,children:[(0,k.jsx)(a,{render:(0,k.jsx)(b.Export,{format:`svg`}),children:`SVG vector`}),(0,k.jsx)(a,{render:(0,k.jsx)(b.Export,{format:`png`}),children:`PNG image`})]})]})})}var K=`import { Download } from "lucide-react"
import { Chart, LineChart, type ChartSeries } from "@kitora/charts"
import { Button } from "@kitora/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@kitora/ui/dropdown-menu"

interface Day {
  readonly day: string
  readonly signups: number
}

const WEEK: readonly Day[] = [
  { day: "Mon", signups: 120 },
  { day: "Tue", signups: 164 },
  { day: "Wed", signups: 151 },
  { day: "Thu", signups: 198 },
  { day: "Fri", signups: 176 },
]

const SERIES: readonly ChartSeries<Day>[] = [{ key: "signups", label: "Signups", value: (d) => d.signups }]

/** One "Export" menu instead of two buttons: each ui \`DropdownMenuItem\` renders a \`Chart.Export\` (its \`render\` prop), so the item is the download button. */
export function ExportMenu() {
  return (
    <LineChart
      title="Signups this week"
      data={WEEK}
      x={(d) => d.day}
      series={SERIES}
      height={200}
      actions={
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <Download aria-hidden="true" />
              Export
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuItem render={<Chart.Export format="svg" />}>SVG vector</DropdownMenuItem>
            <DropdownMenuItem render={<Chart.Export format="png" />}>PNG image</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      }
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(K,()=>i(()=>import(`./export-menu-BOqFpBzu.js`),[]));var le=e(s(),1),q=[{team:`Billing`,tickets:42},{team:`Search`,tickets:27},{team:`Mobile`,tickets:63},{team:`Infra`,tickets:18},{team:`Growth`,tickets:35}],J=220,Y={top:8,right:8,bottom:24,left:36},X=p(0),ue=[{key:`tickets`,label:`Open tickets`,color:X}],de={columns:[`Team`,`Open tickets`],rows:q.map(e=>[e.team,String(e.tickets)])};function fe(){let[e,t]=(0,le.useState)(null),n=e===null?null:q[e];return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(f,{}),(0,k.jsx)(v,{title:`Open tickets by team`,table:de,height:J,legend:(0,k.jsx)(g,{items:ue}),children:r=>{let i=Math.max(0,r-Y.left-Y.right),a=J-Y.top-Y.bottom,[,o]=te(0,Math.max(...q.map(e=>e.tickets))),s=ne([0,o],[a,0]),c=re(q.map(e=>e.team),[0,i]),l=s.ticks(4).map(e=>({key:String(e),label:String(e),position:s(e)})),u=q.map(e=>({key:e.team,label:e.team,position:c(e.team)+c.bandwidth/2}));return(0,k.jsxs)(`div`,{className:`relative`,"data-testid":`hand-drawn-bars`,children:[(0,k.jsx)(`svg`,{width:r,height:J,role:`img`,"aria-label":`Open tickets by team`,children:(0,k.jsxs)(`g`,{transform:`translate(${Y.left},${Y.top})`,children:[(0,k.jsx)(S,{ticks:l,orientation:`horizontal`,length:i}),q.map((n,r)=>(0,k.jsx)(`rect`,{x:c(n.team),y:s(n.tickets),width:c.bandwidth,height:a-s(n.tickets),rx:3,fill:X,opacity:e===null||e===r?1:.5,onPointerEnter:()=>t(r),onPointerLeave:()=>t(null)},n.team)),(0,k.jsx)(x,{ticks:l}),(0,k.jsx)(C,{ticks:u,y:a,width:i})]})}),n&&e!==null?(0,k.jsx)(h,{x:Y.left+c(n.team)+c.bandwidth/2,y:Y.top+s(n.tickets),bounds:{width:r,height:J},title:n.team,rows:[{key:`tickets`,label:`Open tickets`,value:String(n.tickets),color:X}]}):null,(0,k.jsx)(ie,{text:n?`${n.team}: ${n.tickets} open tickets`:``})]})}})]})}var Z=`import { useState } from "react"
import { bandScale, linearScale, niceDomain, seriesColor, type ChartTable, type LegendItem, type Tick } from "@kitora/charts/core"
import { AxisBottom, AxisLeft, ChartFrame, ChartStyles, GridLines, Legend, LiveRegion, TooltipBox } from "@kitora/charts/ui"

interface Row {
  readonly team: string
  readonly tickets: number
}

const DATA: readonly Row[] = [
  { team: "Billing", tickets: 42 },
  { team: "Search", tickets: 27 },
  { team: "Mobile", tickets: 63 },
  { team: "Infra", tickets: 18 },
  { team: "Growth", tickets: 35 },
]

const HEIGHT = 220
/** Room for the value labels on the left and the team labels underneath. */
const MARGIN = { top: 8, right: 8, bottom: 24, left: 36 }
const COLOR = seriesColor(0)
const LEGEND: readonly LegendItem[] = [{ key: "tickets", label: "Open tickets", color: COLOR }]
const TABLE: ChartTable = { columns: ["Team", "Open tickets"], rows: DATA.map((d) => [d.team, String(d.tickets)]) }

/**
 * A bar chart drawn by hand: \`ChartFrame\` measures the width and supplies the title, Table toggle and
 * hidden table; the scales come from \`/core\`; \`GridLines\`, \`AxisLeft\` and \`AxisBottom\` draw the axes;
 * \`TooltipBox\` floats over the hovered bar and \`LiveRegion\` announces it. \`ChartStyles\` mounts the tokens.
 */
export function HandDrawnBars() {
  const [active, setActive] = useState<number | null>(null)
  const row = active === null ? null : DATA[active]
  return (
    <>
      <ChartStyles />
      <ChartFrame title="Open tickets by team" table={TABLE} height={HEIGHT} legend={<Legend items={LEGEND} />}>
        {(width) => {
          const innerWidth = Math.max(0, width - MARGIN.left - MARGIN.right)
          const innerHeight = HEIGHT - MARGIN.top - MARGIN.bottom
          const [, max] = niceDomain(0, Math.max(...DATA.map((d) => d.tickets)))
          const y = linearScale([0, max], [innerHeight, 0])
          const x = bandScale(DATA.map((d) => d.team), [0, innerWidth])
          const yTicks: Tick[] = y.ticks(4).map((v) => ({ key: String(v), label: String(v), position: y(v) }))
          const xTicks: Tick[] = DATA.map((d) => ({ key: d.team, label: d.team, position: x(d.team) + x.bandwidth / 2 }))
          return (
            <div className="relative" data-testid="hand-drawn-bars">
              <svg width={width} height={HEIGHT} role="img" aria-label="Open tickets by team">
                <g transform={\`translate(\${MARGIN.left},\${MARGIN.top})\`}>
                  <GridLines ticks={yTicks} orientation="horizontal" length={innerWidth} />
                  {DATA.map((d, i) => (
                    <rect
                      key={d.team}
                      x={x(d.team)}
                      y={y(d.tickets)}
                      width={x.bandwidth}
                      height={innerHeight - y(d.tickets)}
                      rx={3}
                      fill={COLOR}
                      opacity={active === null || active === i ? 1 : 0.5}
                      onPointerEnter={() => setActive(i)}
                      onPointerLeave={() => setActive(null)}
                    />
                  ))}
                  <AxisLeft ticks={yTicks} />
                  <AxisBottom ticks={xTicks} y={innerHeight} width={innerWidth} />
                </g>
              </svg>
              {row && active !== null ? (
                <TooltipBox
                  x={MARGIN.left + x(row.team) + x.bandwidth / 2}
                  y={MARGIN.top + y(row.tickets)}
                  bounds={{ width, height: HEIGHT }}
                  title={row.team}
                  rows={[{ key: "tickets", label: "Open tickets", value: String(row.tickets), color: COLOR }]}
                />
              ) : null}
              <LiveRegion text={row ? \`\${row.team}: \${row.tickets} open tickets\` : ""} />
            </div>
          )
        }}
      </ChartFrame>
    </>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(Z,()=>i(()=>import(`./frame-parts-C5p2SRRS.js`),[]));var Q={title:`Weekly signups against target`,data:[{week:`W1`,signups:320,target:300},{week:`W2`,signups:280,target:310},{week:`W3`,signups:360,target:320},{week:`W4`,signups:410,target:330},{week:`W5`,signups:390,target:340}],x:e=>e.week,series:[{key:`signups`,label:`Signups`,value:e=>e.signups,type:`bar`},{key:`target`,label:`Target`,value:e=>e.target,type:`line`,dashed:!0}]};function pe(){let e=m(Q);return(0,k.jsxs)(`div`,{className:`grid grid-cols-1 gap-6 md:grid-cols-2`,children:[(0,k.jsx)(se,{...Q,renderTooltip:e=>(0,k.jsx)(ae,{title:`Week ${e.title}`,rows:e.rows})}),(0,k.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,k.jsx)(v,{title:`The same model, framed by hand`,table:e.model.table,height:200,legendPosition:`bottom`,legend:(0,k.jsx)(g,{layout:`column`,items:e.model.legendItems,onToggle:e.toggle,renderItem:e=>(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(y,{color:e.color,mark:e.mark}),(0,k.jsx)(`span`,{className:e.hidden?`text-muted-foreground line-through`:void 0,children:e.label})]})}),children:t=>(0,k.jsx)(oe,{chart:e,props:Q,width:t})}),(0,k.jsx)(_,{table:e.model.table,caption:`Weekly signups and target`})]})]})}var $=`import { useCartesianChart } from "@kitora/charts/react"
import type { CartesianOptions } from "@kitora/charts/core"
import { CartesianChart, CartesianPlot, ChartFrame, ChartDataTable, Legend, Swatch, TooltipContent } from "@kitora/charts/ui"

interface Row {
  readonly week: string
  readonly signups: number
  readonly target: number
}

const DATA: readonly Row[] = [
  { week: "W1", signups: 320, target: 300 },
  { week: "W2", signups: 280, target: 310 },
  { week: "W3", signups: 360, target: 320 },
  { week: "W4", signups: 410, target: 330 },
  { week: "W5", signups: 390, target: 340 },
]

// Module-level options keep \`x\` and \`series\` stable, so the model is built once.
const OPTIONS: CartesianOptions<Row> = {
  title: "Weekly signups against target",
  data: DATA,
  x: (d) => d.week,
  series: [
    { key: "signups", label: "Signups", value: (d) => d.signups, type: "bar" },
    { key: "target", label: "Target", value: (d) => d.target, type: "line", dashed: true },
  ],
}

/**
 * \`CartesianChart\`, the general chart that mixes bar and line series, with its tooltip drawn by
 * \`TooltipContent\`; then the same model in a \`ChartFrame\` over \`CartesianPlot\` (the default plot
 * arrangement), a column \`Legend\` drawn with \`Swatch\`, and the numbers in a visible \`ChartDataTable\`.
 */
export function GeneralChart() {
  const chart = useCartesianChart(OPTIONS)
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <CartesianChart
        {...OPTIONS}
        renderTooltip={(readout) => <TooltipContent title={\`Week \${readout.title}\`} rows={readout.rows} />}
      />
      <div className="flex flex-col gap-3">
        <ChartFrame
          title="The same model, framed by hand"
          table={chart.model.table}
          height={200}
          legendPosition="bottom"
          legend={
            <Legend
              layout="column"
              items={chart.model.legendItems}
              onToggle={chart.toggle}
              renderItem={(item) => (
                <>
                  <Swatch color={item.color} mark={item.mark} />
                  <span className={item.hidden ? "text-muted-foreground line-through" : undefined}>{item.label}</span>
                </>
              )}
            />
          }
        >
          {(width) => <CartesianPlot chart={chart} props={OPTIONS} width={width} />}
        </ChartFrame>
        <ChartDataTable table={chart.model.table} caption="Weekly signups and target" />
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set($,()=>i(()=>import(`./general-chart-CJc1ddhS.js`),[]));function me(){return(0,k.jsxs)(`div`,{children:[(0,k.jsx)(n,{title:`Basics: compose your own`,children:"Every preset is built only from public parts: `Chart.*` for the frame and `Cartesian.*` for the plot, over the `useCartesianChart` hook. Formatting, colour and text measuring are adapters you swap with `ChartConfigProvider`. Any framed chart downloads as SVG or PNG."}),(0,k.jsx)(O,{n:1,title:`Compose your own`,blurb:`The LineChart preset beside the same chart rebuilt from parts: legend under the plot, no grid, a custom tooltip.`,code:R,children:(0,k.jsx)(L,{})}),(0,k.jsx)(O,{n:2,title:`Custom adapters`,blurb:"A hand-written `ChartPalette` and euro formats in German notation, supplied once by a provider.",code:F,children:(0,k.jsx)(P,{})}),(0,k.jsx)(O,{n:3,title:`General chart and plot`,blurb:"`CartesianChart` mixing bars and a line with a `TooltipContent` tooltip; the same model in a `ChartFrame` over `CartesianPlot`, a column `Legend` drawn with `Swatch`, and a visible `ChartDataTable`.",code:$,children:(0,k.jsx)(pe,{})}),(0,k.jsx)(O,{n:4,title:`Draw your own with the frame parts`,blurb:"A hand-drawn bar chart: `ChartFrame` measures and frames it, `GridLines`, `AxisLeft` and `AxisBottom` draw the axes, `TooltipBox` and `LiveRegion` read the hovered bar, `ChartStyles` mounts the tokens.",code:Z,children:(0,k.jsx)(fe,{})}),(0,k.jsx)(O,{n:5,title:`Download as SVG or PNG`,blurb:"`exportFormats` adds a download button per format; `Chart.Export` is the part, with its own file name and options (scale, background, title, legend). The file carries the title and the legend, so it stands alone. Web fonts are not embedded: the file names the page's font and falls back to the system font.",code:H,children:(0,k.jsx)(ce,{})}),(0,k.jsx)(O,{n:6,title:`One Export menu`,blurb:"Two `Chart.Export` parts as the items of a ui `DropdownMenu`, through each item's `render` prop.",code:K,children:(0,k.jsx)(G,{})})]})}export{me as component};