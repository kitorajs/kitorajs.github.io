import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{Cc as t,Ic as n,ti as r}from"./index-B9ukmIN1.js";import{t as i}from"./badge-uhFB8J9R.js";import{a,i as o,n as s,o as c,t as l}from"./card-B_Tor3B1.js";import{t as u}from"./prose-CJJWH_ll.js";var d=e({ProseArticle:()=>m}),f=n(),p=`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%2313161D'/%3E%3Cpath fill='%23F3F5F9' d='M5 8.5A3.5 3.5 0 0 1 8.5 5h3A3.5 3.5 0 0 1 15 8.5v3a3.5 3.5 0 0 1-3.5 3.5h-3A3.5 3.5 0 0 1 5 11.5zM5 20.5A3.5 3.5 0 0 1 8.5 17h3a3.5 3.5 0 0 1 3.5 3.5v3a3.5 3.5 0 0 1-3.5 3.5h-3A3.5 3.5 0 0 1 5 23.5zM17 17a10 10 0 0 1 10 10h-8.5a1.5 1.5 0 0 1-1.5-1.5z'/%3E%3Ccircle cx='22' cy='10' r='5' fill='%238AA8F7'/%3E%3C/svg%3E`;function m(){return(0,f.jsxs)(u,{size:`md`,render:(0,f.jsx)(`article`,{}),className:`w-full max-w-2xl`,children:[(0,f.jsx)(`h1`,{children:`Caching the dependency graph`}),(0,f.jsx)(`p`,{children:`Cold builds spent most of their time walking the same imports again. The graph is now written to disk after each run and read back on the next one, keyed by the lockfile and the compiler version, so a change to either starts fresh.`}),(0,f.jsxs)(`figure`,{children:[(0,f.jsx)(`img`,{src:p,alt:`Kitora logo`,width:96,height:96}),(0,f.jsx)(`figcaption`,{children:`The cache lives next to the build output and is safe to delete.`})]}),(0,f.jsx)(`h2`,{children:`Results`}),(0,f.jsx)(`p`,{children:`Median of ten runs on the same machine, in seconds:`}),(0,f.jsx)(`div`,{children:(0,f.jsxs)(`table`,{children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{children:`Package`}),(0,f.jsx)(`th`,{children:`Before`}),(0,f.jsx)(`th`,{children:`After`}),(0,f.jsx)(`th`,{children:`Saved`})]})}),(0,f.jsxs)(`tbody`,{children:[(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:`ui`}),(0,f.jsx)(`td`,{children:`14.2`}),(0,f.jsx)(`td`,{children:`6.1`}),(0,f.jsx)(`td`,{children:`57%`})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:`datagrid`}),(0,f.jsx)(`td`,{children:`22.8`}),(0,f.jsx)(`td`,{children:`9.4`}),(0,f.jsx)(`td`,{children:`59%`})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:`editors`}),(0,f.jsx)(`td`,{children:`18.5`}),(0,f.jsx)(`td`,{children:`8.9`}),(0,f.jsx)(`td`,{children:`52%`})]})]})]})}),(0,f.jsx)(`h2`,{children:`Turning it off`}),(0,f.jsxs)(`p`,{children:[`Set `,(0,f.jsx)(`code`,{children:`cache: false`}),` in the build config, or pass the flag once:`]}),(0,f.jsx)(`pre`,{tabIndex:0,children:(0,f.jsx)(`code`,{children:`// build.config.ts
export default defineConfig({
  cache: process.env.CI ? false : { dir: ".cache/graph", key: ["pnpm-lock.yaml", "typescript"] },
})`})}),(0,f.jsx)(`h3`,{children:`When to clear it`}),(0,f.jsx)(`p`,{children:`After switching branches with a different lockfile nothing needs clearing: the key changes. Clear it by hand only when a build reads a stale import, and report that as a bug.`})]})}var h=e({ProseComposeReleaseNotes:()=>g});function g(){return(0,f.jsxs)(l,{className:`w-full max-w-md`,children:[(0,f.jsx)(a,{children:(0,f.jsxs)(c,{className:`flex items-center gap-2`,children:[`Version 2.4 `,(0,f.jsx)(i,{variant:`secondary`,children:`Latest`})]})}),(0,f.jsx)(s,{children:(0,f.jsxs)(u,{children:[(0,f.jsxs)(`p`,{children:[`Builds are faster and forms get a rating field. `,(0,f.jsx)(i,{variant:`outline`,className:`not-prose`,children:`New`})]}),(0,f.jsxs)(`ul`,{children:[(0,f.jsxs)(`li`,{children:[`Build cache on by default (`,(0,f.jsx)(`code`,{children:`cache: false`}),` turns it off)`]}),(0,f.jsx)(`li`,{children:`Rating field with half stars`}),(0,f.jsxs)(`li`,{children:[`Read the `,(0,f.jsx)(`a`,{href:`#prose-compose`,children:`migration notes`}),` first`]})]})]})}),(0,f.jsx)(o,{className:`justify-end`,children:(0,f.jsx)(r,{size:`sm`,children:`Update now`})})]})}var _=e({ProseMarkdown:()=>v});function v(){return(0,f.jsxs)(u,{className:`w-full max-w-xl`,children:[(0,f.jsx)(`h1`,{children:`Release checklist`}),(0,f.jsxs)(`p`,{children:[`Run the checks in order. Each one reads the `,(0,f.jsx)(`code`,{children:`dist/`}),` output, so build first. See `,(0,f.jsx)(`a`,{href:`#prose-markdown`,children:`the guide`}),` for the flags.`]}),(0,f.jsx)(`h2`,{children:`Before tagging`}),(0,f.jsxs)(`ol`,{children:[(0,f.jsx)(`li`,{children:`Build every package.`}),(0,f.jsxs)(`li`,{children:[`Run the suite with `,(0,f.jsx)(`code`,{children:`task test`}),`.`]}),(0,f.jsx)(`li`,{children:`Update the changelog.`})]}),(0,f.jsx)(`h3`,{children:`Done so far`}),(0,f.jsxs)(`ul`,{children:[(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`input`,{type:`checkbox`,checked:!0,readOnly:!0,disabled:!0,"aria-label":`Done`}),` Types resolve to `,(0,f.jsx)(`code`,{children:`dist/*.d.ts`})]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`input`,{type:`checkbox`,checked:!1,readOnly:!0,disabled:!0,"aria-label":`Not done`}),` Screenshots in light and dark`]})]}),(0,f.jsx)(`blockquote`,{children:(0,f.jsx)(`p`,{children:`A passing unit test is not verification: open the page.`})}),(0,f.jsx)(`hr`,{}),(0,f.jsx)(`h4`,{children:`Notes`}),(0,f.jsxs)(`p`,{children:[`Press `,(0,f.jsx)(`kbd`,{children:`Ctrl`}),` + `,(0,f.jsx)(`kbd`,{children:`K`}),` to search the docs.`]}),(0,f.jsx)(`h6`,{children:`Last edited 12 November`})]})}var y=e({ProseRightToLeft:()=>b});function b(){return(0,f.jsxs)(u,{dir:`rtl`,lang:`ar`,className:`w-full max-w-xl`,children:[(0,f.jsx)(`h2`,{children:`ملاحظات الإصدار`}),(0,f.jsxs)(`p`,{children:[`يحفظ هذا الإصدار رسم التبعيات بين عمليات البناء، ويضيف `,(0,f.jsx)(`a`,{href:`#prose-right-to-left`,children:`حقل التقييم`}),` إلى النماذج.`]}),(0,f.jsxs)(`ul`,{children:[(0,f.jsx)(`li`,{children:`ذاكرة البناء مفعلة افتراضيًا`}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`input`,{type:`checkbox`,checked:!0,readOnly:!0,disabled:!0,"aria-label":`منجز`}),` إصلاحات الاتجاه في القوائم`]})]}),(0,f.jsx)(`blockquote`,{children:(0,f.jsx)(`p`,{children:`لا حاجة إلى مسح الذاكرة عند تبديل الفروع.`})}),(0,f.jsx)(`div`,{children:(0,f.jsxs)(`table`,{children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{children:`الحزمة`}),(0,f.jsx)(`th`,{children:`قبل`}),(0,f.jsx)(`th`,{children:`بعد`})]})}),(0,f.jsx)(`tbody`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:`ui`}),(0,f.jsx)(`td`,{children:`14.2`}),(0,f.jsx)(`td`,{children:`6.1`})]})})]})})]})}var x=e({ProseSizes:()=>C}),S=[`sm`,`md`,`lg`];function C(){return(0,f.jsx)(`div`,{className:`grid w-full max-w-4xl gap-6 md:grid-cols-3`,children:S.map(e=>(0,f.jsxs)(u,{size:e,children:[(0,f.jsxs)(`h3`,{children:[`Size `,e]}),(0,f.jsxs)(`p`,{children:[`The body, headings, code and tables scale together; the gap between blocks grows with the size. Inline `,(0,f.jsx)(`code`,{children:`code`}),` stays a step smaller.`]}),(0,f.jsxs)(`ul`,{children:[(0,f.jsx)(`li`,{children:`Compact panels use sm`}),(0,f.jsx)(`li`,{children:`Reading views use md or lg`})]})]},e))})}var w=`import { Prose } from "@kitora/ui/prose"

// An inline image, so the demo needs no file of its own wherever it is pasted.
const LOGO = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%2313161D'/%3E%3Cpath fill='%23F3F5F9' d='M5 8.5A3.5 3.5 0 0 1 8.5 5h3A3.5 3.5 0 0 1 15 8.5v3a3.5 3.5 0 0 1-3.5 3.5h-3A3.5 3.5 0 0 1 5 11.5zM5 20.5A3.5 3.5 0 0 1 8.5 17h3a3.5 3.5 0 0 1 3.5 3.5v3a3.5 3.5 0 0 1-3.5 3.5h-3A3.5 3.5 0 0 1 5 23.5zM17 17a10 10 0 0 1 10 10h-8.5a1.5 1.5 0 0 1-1.5-1.5z'/%3E%3Ccircle cx='22' cy='10' r='5' fill='%238AA8F7'/%3E%3C/svg%3E"

// A long CMS article: \`render\` makes the root an <article>; the table and the code scroll inside themselves on a phone.
// The code block scrolls, so it is a Tab stop (tabIndex={0}) for keyboard users to scroll it with the arrow keys.
export function ProseArticle() {
  return (
    <Prose size="md" render={<article />} className="w-full max-w-2xl">
      <h1>Caching the dependency graph</h1>
      <p>
        Cold builds spent most of their time walking the same imports again. The graph is now written to disk after each run and read back on the next one, keyed by the lockfile and the compiler version, so a change to either starts fresh.
      </p>
      <figure>
        <img src={LOGO} alt="Kitora logo" width={96} height={96} />
        <figcaption>The cache lives next to the build output and is safe to delete.</figcaption>
      </figure>
      <h2>Results</h2>
      <p>Median of ten runs on the same machine, in seconds:</p>
      <div>
        <table>
          <thead>
            <tr>
              <th>Package</th>
              <th>Before</th>
              <th>After</th>
              <th>Saved</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ui</td>
              <td>14.2</td>
              <td>6.1</td>
              <td>57%</td>
            </tr>
            <tr>
              <td>datagrid</td>
              <td>22.8</td>
              <td>9.4</td>
              <td>59%</td>
            </tr>
            <tr>
              <td>editors</td>
              <td>18.5</td>
              <td>8.9</td>
              <td>52%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>Turning it off</h2>
      <p>
        Set <code>cache: false</code> in the build config, or pass the flag once:
      </p>
      <pre tabIndex={0}>
        <code>{\`// build.config.ts
export default defineConfig({
  cache: process.env.CI ? false : { dir: ".cache/graph", key: ["pnpm-lock.yaml", "typescript"] },
})\`}</code>
      </pre>
      <h3>When to clear it</h3>
      <p>
        After switching branches with a different lockfile nothing needs clearing: the key changes. Clear it by hand only when a build reads a stale import, and report that as a bug.
      </p>
    </Prose>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(w,()=>t(()=>import(`./article-_TH9tMWX.js`),[]));var T=`import { Badge } from "@kitora/ui/badge"
import { Button } from "@kitora/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@kitora/ui/card"
import { Prose } from "@kitora/ui/prose"

// Release notes from a CMS in a Card. The Badge inside the text is a Kitora part, so it carries \`not-prose\` and keeps
// its own look; the footer Button sits outside Prose.
export function ProseComposeReleaseNotes() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Version 2.4 <Badge variant="secondary">Latest</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Prose>
          <p>
            Builds are faster and forms get a rating field. <Badge variant="outline" className="not-prose">New</Badge>
          </p>
          <ul>
            <li>
              Build cache on by default (<code>cache: false</code> turns it off)
            </li>
            <li>Rating field with half stars</li>
            <li>
              Read the <a href="#prose-compose">migration notes</a> first
            </li>
          </ul>
        </Prose>
      </CardContent>
      <CardFooter className="justify-end">
        <Button size="sm">Update now</Button>
      </CardFooter>
    </Card>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(T,()=>t(()=>import(`./compose-D_bCnu9F.js`),[]));var E=`import { Prose } from "@kitora/ui/prose"

// What a markdown parser emits (marked, remark, ai-chat's own parser), written out as the raw elements: no classes on
// any of them, Prose styles the tree.
export function ProseMarkdown() {
  return (
    <Prose className="w-full max-w-xl">
      <h1>Release checklist</h1>
      <p>
        Run the checks in order. Each one reads the <code>dist/</code> output, so build first. See <a href="#prose-markdown">the guide</a> for the flags.
      </p>
      <h2>Before tagging</h2>
      <ol>
        <li>Build every package.</li>
        <li>
          Run the suite with <code>task test</code>.
        </li>
        <li>Update the changelog.</li>
      </ol>
      <h3>Done so far</h3>
      <ul>
        <li>
          <input type="checkbox" checked readOnly disabled aria-label="Done" /> Types resolve to <code>dist/*.d.ts</code>
        </li>
        <li>
          <input type="checkbox" checked={false} readOnly disabled aria-label="Not done" /> Screenshots in light and dark
        </li>
      </ul>
      <blockquote>
        <p>A passing unit test is not verification: open the page.</p>
      </blockquote>
      <hr />
      <h4>Notes</h4>
      <p>
        Press <kbd>Ctrl</kbd> + <kbd>K</kbd> to search the docs.
      </p>
      <h6>Last edited 12 November</h6>
    </Prose>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(E,()=>t(()=>import(`./markdown-Cw_vHMIE.js`),[]));var D=`import { Prose } from "@kitora/ui/prose"

// Inside dir="rtl" the quote's rule, the list markers and the table headers sit on the right: Prose uses logical sides only.
export function ProseRightToLeft() {
  return (
    <Prose dir="rtl" lang="ar" className="w-full max-w-xl">
      <h2>ملاحظات الإصدار</h2>
      <p>
        يحفظ هذا الإصدار رسم التبعيات بين عمليات البناء، ويضيف <a href="#prose-right-to-left">حقل التقييم</a> إلى النماذج.
      </p>
      <ul>
        <li>ذاكرة البناء مفعلة افتراضيًا</li>
        <li>
          <input type="checkbox" checked readOnly disabled aria-label="منجز" /> إصلاحات الاتجاه في القوائم
        </li>
      </ul>
      <blockquote>
        <p>لا حاجة إلى مسح الذاكرة عند تبديل الفروع.</p>
      </blockquote>
      <div>
        <table>
          <thead>
            <tr>
              <th>الحزمة</th>
              <th>قبل</th>
              <th>بعد</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ui</td>
              <td>14.2</td>
              <td>6.1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Prose>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(D,()=>t(()=>import(`./right-to-left-BjIUFQl1.js`),[]));var O=`import { Prose } from "@kitora/ui/prose"

const SIZES = ["sm", "md", "lg"] as const

export function ProseSizes() {
  return (
    <div className="grid w-full max-w-4xl gap-6 md:grid-cols-3">
      {SIZES.map((size) => (
        <Prose key={size} size={size}>
          <h3>Size {size}</h3>
          <p>
            The body, headings, code and tables scale together; the gap between blocks grows with the size. Inline <code>code</code> stays a step smaller.
          </p>
          <ul>
            <li>Compact panels use sm</li>
            <li>Reading views use md or lg</li>
          </ul>
        </Prose>
      ))}
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(O,()=>t(()=>import(`./sizes-CcSdYtVW.js`),[]));var k={"./demos/prose/article.tsx":d,"./demos/prose/compose.tsx":h,"./demos/prose/markdown.tsx":_,"./demos/prose/right-to-left.tsx":y,"./demos/prose/sizes.tsx":x},A={"./demos/prose/article.tsx":w,"./demos/prose/compose.tsx":T,"./demos/prose/markdown.tsx":E,"./demos/prose/right-to-left.tsx":D,"./demos/prose/sizes.tsx":O};export{k as modules,A as sources};