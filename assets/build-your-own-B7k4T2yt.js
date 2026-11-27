import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{_ as t,a as n,c as r,d as i,f as a,g as o,i as s,l as c,m as l,o as u,p as d,s as f,u as p}from"./select-Bsk5_OSx.js";import{t as m}from"./chevron-up-f4lABK7z.js";import{Ec as h,Mi as g,ji as _,zc as v}from"./index-BZuUy872.js";var y=e({SelectBuildYourOwn:()=>S}),b=v(),x=[{value:`tanstack`,label:`TanStack Start`},{value:`next`,label:`Next.js`},{value:`remix`,label:`Remix`},{value:`astro`,label:`Astro`}];function S({value:e,onValueChange:h,name:v}){return(0,b.jsxs)(a,{items:x,defaultValue:e===void 0?`tanstack`:void 0,value:e,onValueChange:e=>h?.(e),name:v,children:[(0,b.jsxs)(o,{"aria-label":`Framework`,className:`flex h-8 w-56 items-center justify-between gap-1.5 rounded-md border border-input px-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring data-placeholder:text-muted-foreground`,children:[(0,b.jsx)(t,{className:`flex-1 truncate text-start`}),(0,b.jsx)(s,{render:(0,b.jsx)(_,{className:`size-4 text-muted-foreground`})})]}),(0,b.jsx)(p,{children:(0,b.jsx)(i,{sideOffset:4,alignItemWithTrigger:!0,className:`z-50 outline-none`,children:(0,b.jsxs)(c,{className:`flex max-h-(--available-height) min-w-(--anchor-width) flex-col overflow-hidden rounded-md bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10`,children:[(0,b.jsx)(l,{className:`flex w-full justify-center py-1`,children:(0,b.jsx)(m,{className:`size-4`})}),(0,b.jsx)(r,{className:`min-h-0 flex-1 overflow-y-auto p-1`,children:x.map(e=>(0,b.jsxs)(n,{value:e.value,className:`relative flex cursor-default items-center rounded-sm py-1 ps-1.5 pe-8 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-50`,children:[(0,b.jsx)(f,{className:`flex-1 whitespace-nowrap`,children:e.label}),(0,b.jsx)(u,{className:`absolute end-2 flex size-4 items-center justify-center`,children:(0,b.jsx)(g,{className:`size-4`})})]},e.value))}),(0,b.jsx)(d,{className:`flex w-full justify-center py-1`,children:(0,b.jsx)(_,{className:`size-4`})})]})})})]})}var C=`import { Select } from "@kitora/primitives/react"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

const FRAMEWORKS = [
  { value: "tanstack", label: "TanStack Start" },
  { value: "next", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
]

/** A select built from the primitives' parts only: \`Select.Root\`, \`Trigger\`, \`Value\`, \`Icon\`, \`Portal\`, \`Positioner\`, \`Popup\`, \`List\`, \`Item\` and the scroll arrows, styled on their state attributes. */
export function SelectBuildYourOwn({ value, onValueChange, name }: { value?: string | null; onValueChange?: (value: string | null) => void; name?: string }) {
  return (
    <Select.Root
      items={FRAMEWORKS}
      defaultValue={value === undefined ? "tanstack" : undefined}
      value={value}
      onValueChange={(next) => onValueChange?.(next)}
      name={name}
    >
      <Select.Trigger
        aria-label="Framework"
        className="flex h-8 w-56 items-center justify-between gap-1.5 rounded-md border border-input px-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring data-placeholder:text-muted-foreground"
      >
        <Select.Value className="flex-1 truncate text-start" />
        <Select.Icon render={<ChevronDownIcon className="size-4 text-muted-foreground" />} />
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner sideOffset={4} alignItemWithTrigger className="z-50 outline-none">
          <Select.Popup className="flex max-h-(--available-height) min-w-(--anchor-width) flex-col overflow-hidden rounded-md bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10">
            <Select.ScrollUpArrow className="flex w-full justify-center py-1">
              <ChevronUpIcon className="size-4" />
            </Select.ScrollUpArrow>
            <Select.List className="min-h-0 flex-1 overflow-y-auto p-1">
              {FRAMEWORKS.map((framework) => (
                <Select.Item
                  key={framework.value}
                  value={framework.value}
                  className="relative flex cursor-default items-center rounded-sm py-1 ps-1.5 pe-8 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-50"
                >
                  <Select.ItemText className="flex-1 whitespace-nowrap">{framework.label}</Select.ItemText>
                  <Select.ItemIndicator className="absolute end-2 flex size-4 items-center justify-center">
                    <CheckIcon className="size-4" />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.List>
            <Select.ScrollDownArrow className="flex w-full justify-center py-1">
              <ChevronDownIcon className="size-4" />
            </Select.ScrollDownArrow>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(C,()=>h(()=>import(`./build-your-own-zEMaMJoZ2.js`),[]));export{S as n,y as r,C as t};