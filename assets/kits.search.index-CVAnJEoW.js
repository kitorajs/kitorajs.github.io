import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-DpYhPoxM.js";import{t as n}from"./highlight-CFN7jkyY.js";import{Bc as r,Cc as i,Ic as a}from"./index-q72zUtm9.js";import"./kit-gallery-Atvibnty.js";import{t as o}from"./example-B8EaWveR.js";import{n as s}from"./search-kZQgZ6ND.js";import{h as c,t as l}from"./search-box-NOValVEq.js";import{t as u}from"./use-search-DriG1IkU.js";import{i as d,n as f,r as p,t as m}from"./results-Cr9XlOP0.js";import{t as h}from"./-kits.search.shared-B-17Pt1d.js";var g=e(r(),1),_=a();function v(e){let t=e;return()=>(t=(t*1664525+1013904223)%4294967296,t/4294967296)}var y=v(42);function b(e){let t=e[Math.floor(y()*e.length)];if(t===void 0)throw Error(`pick from an empty list`);return t}var x=[[`Keyboards`,[`mechanical keyboard`,`low-profile keyboard`,`split keyboard`,`60% keyboard`]],[`Mice`,[`wireless mouse`,`vertical mouse`,`trackball`,`gaming mouse`]],[`Monitors`,[`4K monitor`,`ultrawide monitor`,`portable monitor`,`27-inch monitor`]],[`Audio`,[`noise-cancelling headphones`,`USB microphone`,`studio monitors`,`earbuds`]],[`Desks`,[`standing desk`,`desk mat`,`monitor arm`,`cable tray`]],[`Lighting`,[`desk lamp`,`light bar`,`key light`,`LED strip`]]],S=[`Keychron`,`Logitech`,`Dell`,`Sony`,`Fully`,`BenQ`,`Elgato`,`Razer`,`Apple`,`Herman Miller`],C=[`Pro`,`Air`,`Max`,`Mini`,`Studio`,`Lite`,`Plus`,`Ultra`,`S`,`X`],w=[`wireless`,`usb-c`,`bluetooth`,`rgb`,`ergonomic`,`compact`,`aluminium`,`quiet`],T=Array.from({length:240},(e,t)=>{let[n,r]=b(x),i=b(r),a=b(S),o=w.filter(()=>y()>.72),s=Math.floor(y()*360);return{id:`p${t}`,name:`${a} ${i.replace(/\b\w/g,e=>e.toUpperCase())} ${b(C)}`,description:`A ${o.slice(0,2).join(`, `)||`well-made`} ${i} for long focused sessions.`,category:n,brand:a,price:Math.round((19+y()*780)*100)/100,rating:Math.round((2.5+y()*2.5)*10)/10,reviews:Math.floor(y()*4e3),inStock:y()>.18,tags:o,added:new Date(Date.UTC(2026,0,1)+s*864e5).toISOString().slice(0,10)}}),E=[{key:`name`,get:e=>e.name,weight:3},{key:`brand`,get:e=>e.brand,weight:2},{key:`category`,get:e=>e.category,weight:2},{key:`tags`,get:e=>e.tags},{key:`description`,get:e=>e.description}],D=[{id:`category`,label:`Category`,get:e=>e.category},{id:`brand`,label:`Brand`,get:e=>e.brand},{id:`price`,label:`Price`,get:e=>e.price<50?`Under $50`:e.price<150?`$50–150`:e.price<400?`$150–400`:`$400+`,order:[`Under $50`,`$50–150`,`$150–400`,`$400+`]},{id:`rating`,label:`Rating`,get:e=>[e.rating>=4.5?`4.5 & up`:null,e.rating>=4?`4 & up`:null,e.rating>=3?`3 & up`:null].filter(e=>e!==null),order:[`4.5 & up`,`4 & up`,`3 & up`]},{id:`availability`,label:`Availability`,get:e=>e.inStock?`In stock`:`Out of stock`,order:[`In stock`,`Out of stock`]},{id:`tags`,label:`Features`,get:e=>e.tags,order:`label`}],O=[{id:`relevance`,label:`Relevance`},{id:`price-asc`,label:`Price: low to high`,compare:(e,t)=>e.price-t.price},{id:`price-desc`,label:`Price: high to low`,compare:(e,t)=>t.price-e.price},{id:`rating`,label:`Top rated`,compare:(e,t)=>t.rating-e.rating||t.reviews-e.reviews},{id:`newest`,label:`Newest`,compare:(e,t)=>t.added.localeCompare(e.added)}],k={fields:E,facets:D,sorts:O},A=s(T,E),j=O.map(e=>({value:e.id,label:e.label})),M=[`Keyboards`,`Mice`,`Monitors`,`Audio`,`Desks`,`Lighting`].map(e=>({id:e,label:e}));function N({rating:e}){return(0,_.jsxs)(`span`,{className:`inline-flex items-center gap-1 text-[12px] tabular-nums`,"aria-label":`${e} out of 5`,children:[(0,_.jsx)(`span`,{className:`text-amber-500`,"aria-hidden":`true`,children:`★`}),e.toFixed(1)]})}function P(){let e=u(T,k,{pageSize:10}),t=c({storageKey:`dk-search-store-recent`,initial:[`keyboard`,`wireless mouse`,`4k monitor`]}),{response:r,state:i}=e,a=e.setQuery,o=(0,g.useMemo)(()=>new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`}),[]);return(0,_.jsxs)(`div`,{className:`flex h-full flex-col text-[13px]`,children:[(0,_.jsxs)(`header`,{className:`flex items-center gap-3 border-b px-3 py-2`,children:[(0,_.jsxs)(`span`,{className:`font-semibold tracking-tight`,children:[`desk`,(0,_.jsx)(`span`,{className:`text-primary`,children:`.shop`})]}),(0,_.jsx)(l,{search:A,recent:t,shortcut:`s`,placeholder:`Search 240 products…`,getKey:e=>e.id,getLabel:e=>e.name,getMeta:e=>o.format(e.price),groupOf:e=>e.category,groups:M,limitPerGroup:3,onSelect:e=>a(e.name),onSubmit:a,className:`max-w-lg`}),i.query?(0,_.jsxs)(`span`,{className:`hidden text-[12px] text-muted-foreground sm:inline`,children:[`Results for `,(0,_.jsxs)(`span`,{className:`font-medium text-foreground`,children:[`“`,i.query,`”`]}),` `,(0,_.jsx)(`button`,{type:`button`,onClick:()=>a(``),className:`ml-1 underline-offset-2 hover:underline`,children:`clear`})]}):null]}),(0,_.jsxs)(`div`,{className:`flex min-h-0 flex-1`,children:[(0,_.jsx)(`aside`,{className:`hidden w-52 shrink-0 overflow-y-auto border-r px-3 py-2 md:block`,children:(0,_.jsx)(f,{facets:r.facets,onToggle:e.toggle,onClear:e.clearFilters})}),(0,_.jsxs)(`main`,{className:`flex min-w-0 flex-1 flex-col`,children:[(0,_.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 border-b px-3 py-1.5`,children:[(0,_.jsxs)(`span`,{className:`text-muted-foreground tabular-nums`,children:[r.page.total.toLocaleString(),` products`]}),(0,_.jsx)(m,{selection:i.selection,facets:r.facets,onToggle:e.toggle,onClear:e.clearFilters,className:`min-w-0 flex-1`}),(0,_.jsx)(d,{value:i.sort,options:j,onChange:e.setSort,className:`ml-auto`})]}),(0,_.jsxs)(`ul`,{tabIndex:0,"aria-label":`Products`,className:`min-h-0 flex-1 divide-y overflow-y-auto outline-none focus-visible:ring-2 focus-visible:ring-ring/40`,children:[r.page.items.map(({item:e})=>(0,_.jsxs)(`li`,{className:`flex items-center gap-3 px-3 py-2 hover:bg-muted/40`,children:[(0,_.jsx)(`span`,{className:`grid size-9 shrink-0 place-items-center rounded-md bg-muted text-[11px] font-semibold text-muted-foreground`,children:e.brand.slice(0,2).toUpperCase()}),(0,_.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,_.jsx)(n,{text:e.name,query:i.query,className:`block truncate font-medium`,variant:`tint`}),(0,_.jsx)(n,{text:e.description,query:i.query,className:`block truncate text-[12px] text-muted-foreground`,variant:`tint`})]}),(0,_.jsx)(`div`,{className:`hidden w-40 shrink-0 justify-end gap-1 overflow-hidden lg:flex`,children:e.tags.slice(0,2).map(e=>(0,_.jsx)(`span`,{className:`rounded bg-muted px-1.5 py-px text-[11px] text-muted-foreground`,children:e},e))}),(0,_.jsxs)(`div`,{className:`w-24 shrink-0 text-right`,children:[(0,_.jsx)(`div`,{className:`font-medium tabular-nums`,children:o.format(e.price)}),(0,_.jsxs)(`div`,{className:`flex items-center justify-end gap-1.5 text-muted-foreground`,children:[(0,_.jsx)(N,{rating:e.rating}),e.inStock?null:(0,_.jsx)(`span`,{className:`text-[11px] text-destructive`,children:`Sold out`})]})]})]},e.id)),r.page.total===0?(0,_.jsxs)(`li`,{className:`px-3 py-12 text-center`,children:[(0,_.jsx)(`p`,{className:`font-medium`,children:`No products match`}),(0,_.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Try fewer words or `,(0,_.jsx)(`button`,{type:`button`,onClick:e.clearFilters,className:`text-primary hover:underline`,children:`clear the filters`}),`.`]})]}):null]}),(0,_.jsx)(p,{page:r.page,onPage:e.setPage,onPageSize:e.setPageSize,noun:`products`,className:`border-t px-3 py-1.5`})]})]})]})}var F=`import { useMemo } from "react"
import { Highlight } from "@kitora/ui/highlight"
import { ActiveFilters, FacetPanel, localSearch, ResultsPagination, SearchBox, SortSelect, useRecentSearches, useSearch, type SearchSetup, type FacetDef, type SearchField, type SortOption } from "@kitora/search"

// Demo data, generated from a seeded PRNG so every load (and the server render) is identical.
function prng(seed: number) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296
    return s / 4294967296
  }
}
const random = prng(42)
function pick<T>(list: readonly T[]): T {
  const item = list[Math.floor(random() * list.length)]
  if (item === undefined) throw new Error("pick from an empty list")
  return item
}

interface Product {
  readonly id: string
  readonly name: string
  readonly description: string
  readonly category: string
  readonly brand: string
  readonly price: number
  readonly rating: number
  readonly reviews: number
  readonly inStock: boolean
  readonly tags: readonly string[]
  readonly added: string
}

const CATEGORIES: readonly (readonly [string, readonly string[]])[] = [
  ["Keyboards", ["mechanical keyboard", "low-profile keyboard", "split keyboard", "60% keyboard"]],
  ["Mice", ["wireless mouse", "vertical mouse", "trackball", "gaming mouse"]],
  ["Monitors", ["4K monitor", "ultrawide monitor", "portable monitor", "27-inch monitor"]],
  ["Audio", ["noise-cancelling headphones", "USB microphone", "studio monitors", "earbuds"]],
  ["Desks", ["standing desk", "desk mat", "monitor arm", "cable tray"]],
  ["Lighting", ["desk lamp", "light bar", "key light", "LED strip"]],
]
const BRANDS = ["Keychron", "Logitech", "Dell", "Sony", "Fully", "BenQ", "Elgato", "Razer", "Apple", "Herman Miller"]
const ADJECTIVES = ["Pro", "Air", "Max", "Mini", "Studio", "Lite", "Plus", "Ultra", "S", "X"]
const TAGS = ["wireless", "usb-c", "bluetooth", "rgb", "ergonomic", "compact", "aluminium", "quiet"]

const PRODUCTS: readonly Product[] = Array.from({ length: 240 }, (_, i) => {
  const [category, kinds] = pick(CATEGORIES)
  const kind = pick(kinds)
  const brand = pick(BRANDS)
  const tags = TAGS.filter(() => random() > 0.72)
  const day = Math.floor(random() * 360)
  return {
    id: \`p\${i}\`,
    name: \`\${brand} \${kind.replace(/\\b\\w/g, (c) => c.toUpperCase())} \${pick(ADJECTIVES)}\`,
    description: \`A \${tags.slice(0, 2).join(", ") || "well-made"} \${kind} for long focused sessions.\`,
    category,
    brand,
    price: Math.round((19 + random() * 780) * 100) / 100,
    rating: Math.round((2.5 + random() * 2.5) * 10) / 10,
    reviews: Math.floor(random() * 4000),
    inStock: random() > 0.18,
    tags,
    added: new Date(Date.UTC(2026, 0, 1) + day * 86_400_000).toISOString().slice(0, 10),
  }
})

const PRODUCT_FIELDS: readonly SearchField<Product>[] = [
  { key: "name", get: (p) => p.name, weight: 3 },
  { key: "brand", get: (p) => p.brand, weight: 2 },
  { key: "category", get: (p) => p.category, weight: 2 },
  { key: "tags", get: (p) => p.tags },
  { key: "description", get: (p) => p.description },
]

const PRODUCT_FACETS: readonly FacetDef<Product>[] = [
  { id: "category", label: "Category", get: (p) => p.category },
  { id: "brand", label: "Brand", get: (p) => p.brand },
  { id: "price", label: "Price", get: (p) => (p.price < 50 ? "Under $50" : p.price < 150 ? "$50–150" : p.price < 400 ? "$150–400" : "$400+"), order: ["Under $50", "$50–150", "$150–400", "$400+"] },
  { id: "rating", label: "Rating", get: (p) => [p.rating >= 4.5 ? "4.5 & up" : null, p.rating >= 4 ? "4 & up" : null, p.rating >= 3 ? "3 & up" : null].filter((v): v is string => v !== null), order: ["4.5 & up", "4 & up", "3 & up"] },
  { id: "availability", label: "Availability", get: (p) => (p.inStock ? "In stock" : "Out of stock"), order: ["In stock", "Out of stock"] },
  { id: "tags", label: "Features", get: (p) => p.tags, order: "label" },
]

const PRODUCT_SORTS: readonly SortOption<Product>[] = [
  { id: "relevance", label: "Relevance" },
  { id: "price-asc", label: "Price: low to high", compare: (a, b) => a.price - b.price },
  { id: "price-desc", label: "Price: high to low", compare: (a, b) => b.price - a.price },
  { id: "rating", label: "Top rated", compare: (a, b) => b.rating - a.rating || b.reviews - a.reviews },
  { id: "newest", label: "Newest", compare: (a, b) => b.added.localeCompare(a.added) },
]

const SETUP: SearchSetup<Product> = { fields: PRODUCT_FIELDS, facets: PRODUCT_FACETS, sorts: PRODUCT_SORTS }
const suggest = localSearch(PRODUCTS, PRODUCT_FIELDS)
const SORT_OPTIONS = PRODUCT_SORTS.map((s) => ({ value: s.id, label: s.label }))
const CATEGORY_ORDER = ["Keyboards", "Mice", "Monitors", "Audio", "Desks", "Lighting"].map((id) => ({ id, label: id }))

function Stars({ rating }: { readonly rating: number }) {
  return (
    <span className="inline-flex items-center gap-1 text-[12px] tabular-nums" aria-label={\`\${rating} out of 5\`}>
      <span className="text-amber-500" aria-hidden="true">★</span>
      {rating.toFixed(1)}
    </span>
  )
}

// A store's search: the box suggests products grouped by category as you type (↵ runs the full search), then the results page
// has facets with live counts, filter chips, sorting and pagination. Everything is one \`useSearch\` state.
export function ProductSearch() {
  const search = useSearch(PRODUCTS, SETUP, { pageSize: 10 })
  const recent = useRecentSearches({ storageKey: "dk-search-store-recent", initial: ["keyboard", "wireless mouse", "4k monitor"] })
  const { response, state } = search
  const submit = search.setQuery
  const money = useMemo(() => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }), [])
  return (
    <div className="flex h-full flex-col text-[13px]">
      <header className="flex items-center gap-3 border-b px-3 py-2">
        <span className="font-semibold tracking-tight">desk<span className="text-primary">.shop</span></span>
        <SearchBox
          search={suggest}
          recent={recent}
          shortcut="s"
          placeholder="Search 240 products…"
          getKey={(p) => p.id}
          getLabel={(p) => p.name}
          getMeta={(p) => money.format(p.price)}
          groupOf={(p) => p.category}
          groups={CATEGORY_ORDER}
          limitPerGroup={3}
          onSelect={(p) => submit(p.name)}
          onSubmit={submit}
          className="max-w-lg"
        />
        {state.query ? <span className="hidden text-[12px] text-muted-foreground sm:inline">Results for <span className="font-medium text-foreground">“{state.query}”</span> <button type="button" onClick={() => submit("")} className="ml-1 underline-offset-2 hover:underline">clear</button></span> : null}
      </header>
      <div className="flex min-h-0 flex-1">
        <aside className="hidden w-52 shrink-0 overflow-y-auto border-r px-3 py-2 md:block">
          <FacetPanel facets={response.facets} onToggle={search.toggle} onClear={search.clearFilters} />
        </aside>
        <main className="flex min-w-0 flex-1 flex-col">
          <div className="flex flex-wrap items-center gap-2 border-b px-3 py-1.5">
            <span className="text-muted-foreground tabular-nums">{response.page.total.toLocaleString()} products</span>
            <ActiveFilters selection={state.selection} facets={response.facets} onToggle={search.toggle} onClear={search.clearFilters} className="min-w-0 flex-1" />
            <SortSelect value={state.sort} options={SORT_OPTIONS} onChange={search.setSort} className="ml-auto" />
          </div>
          <ul tabIndex={0} aria-label="Products" className="min-h-0 flex-1 divide-y overflow-y-auto outline-none focus-visible:ring-2 focus-visible:ring-ring/40">
            {response.page.items.map(({ item }) => (
              <li key={item.id} className="flex items-center gap-3 px-3 py-2 hover:bg-muted/40">
                <span className="grid size-9 shrink-0 place-items-center rounded-md bg-muted text-[11px] font-semibold text-muted-foreground">{item.brand.slice(0, 2).toUpperCase()}</span>
                <div className="min-w-0 flex-1">
                  <Highlight text={item.name} query={state.query} className="block truncate font-medium" variant="tint" />
                  <Highlight text={item.description} query={state.query} className="block truncate text-[12px] text-muted-foreground" variant="tint" />
                </div>
                <div className="hidden w-40 shrink-0 justify-end gap-1 overflow-hidden lg:flex">
                  {item.tags.slice(0, 2).map((tag) => <span key={tag} className="rounded bg-muted px-1.5 py-px text-[11px] text-muted-foreground">{tag}</span>)}
                </div>
                <div className="w-24 shrink-0 text-right">
                  <div className="font-medium tabular-nums">{money.format(item.price)}</div>
                  <div className="flex items-center justify-end gap-1.5 text-muted-foreground"><Stars rating={item.rating} />{item.inStock ? null : <span className="text-[11px] text-destructive">Sold out</span>}</div>
                </div>
              </li>
            ))}
            {response.page.total === 0 ? (
              <li className="px-3 py-12 text-center">
                <p className="font-medium">No products match</p>
                <p className="text-muted-foreground">Try fewer words or <button type="button" onClick={search.clearFilters} className="text-primary hover:underline">clear the filters</button>.</p>
              </li>
            ) : null}
          </ul>
          <ResultsPagination page={response.page} onPage={search.setPage} onPageSize={search.setPageSize} noun="products" className="border-t px-3 py-1.5" />
        </main>
      </div>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(F,()=>i(()=>import(`./product-search-Ci8irU64.js`),[]));var I=[{name:`core`,what:`Ranking (every term must match; exact word > prefix > substring; field weights), accent-insensitive highlight ranges, disjunctive facet counts, sort, grouping, pagination and the page strip, recent searches; the query model (typed operators per field type, immutable tree edits, evaluation, a readable description, JSON with path-addressed errors); CSV parsing with delimiter sniffing, auto column mapping, cell validation and coercion, CSV export. No React, no DOM.`},{name:`dom`,what:`Browser behaviour with no React: localRecentStore (localStorage, silent when blocked).`},{name:`react`,what:`Headless hooks, each controlled or uncontrolled: useSearchBox (the combobox over any SearchSource, sync or async with abort and debounce, with prop getters for your own markup; arrow keys from @kitora/keyboard/roving, the focus key a @kitora/keyboard command), useSearch (query, facets, sort, page and page size, back to page 1 on change), useRecentSearches (localStorage or your own store, read after mount), useImportWizard (upload → map → review → done).`},{name:`ui`,what:`SearchBox (a preset built only from its parts SearchBox.Root / Control / Input / Clear / Shortcut / Popup / List / Group / Option / Empty / Status / Footer) and SearchDialog (Mod+K, a keyboard-kit command, on the overlay kit), FacetPanel, ActiveFilters, ResultsPagination, SortSelect, QueryBuilder and QueryJsonEditor, ImportSource (OS file drop on the dnd kit's html5 bridge), ColumnMapper, ReviewGrid, ImportSummary and ImportWizard.`}];function L(){return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(t,{title:`Search kit`,children:`Type in the box: products appear grouped by category with your words highlighted; ↵ runs the search. Tick facets on the left (counts update live and never hide their siblings), remove chips, sort, and page through. Press S to focus the box from anywhere; recent searches survive a reload.`}),(0,_.jsx)(o,{n:1,title:`A store's search`,blurb:`Search box with recents and grouped suggestions, a results page with six facets, filter chips, five sorts and pagination over 240 products.`,code:F,children:(0,_.jsx)(h,{testId:`product-search`,height:640,children:(0,_.jsx)(P,{})})}),(0,_.jsx)(o,{n:2,title:`Layers`,blurb:"One package, `@kitora/search`, in four layers; each is its own entry (`/core`, `/dom`, `/react`, `/ui`).",children:(0,_.jsx)(`table`,{className:`w-full text-[13px]`,children:(0,_.jsx)(`tbody`,{children:I.map(e=>(0,_.jsxs)(`tr`,{className:`border-b last:border-b-0`,children:[(0,_.jsx)(`td`,{className:`py-1.5 pr-3 align-top font-mono text-[12px]`,children:e.name}),(0,_.jsx)(`td`,{className:`py-1.5 text-muted-foreground`,children:e.what})]},e.name))})})})]})}export{L as component};