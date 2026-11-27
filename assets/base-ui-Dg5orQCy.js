import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{$i as t,Ec as n,Gi as r,Hi as i,Ji as a,Mi as o,Uc as s,Vi as c,Yi as l,bo as u,qi as d,ra as f,zc as p}from"./index-BZuUy872.js";import{n as m}from"./lib-C0E9zsFn.js";var h=e(s(),1),g=p(),_=`flex cursor-default items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none select-none data-disabled:opacity-50 data-highlighted:bg-accent data-highlighted:text-accent-foreground`;function v(){let[e,n]=(0,h.useState)(`Nothing yet`),[s,p]=(0,h.useState)(!1);return(0,g.jsxs)(`div`,{className:`grid justify-items-start gap-2`,children:[(0,g.jsxs)(t,{children:[(0,g.jsx)(f,{className:`rounded-md border border-border px-3 py-1.5 text-sm data-popup-open:bg-muted`,children:`Song`}),(0,g.jsx)(a,{children:(0,g.jsx)(l,{sideOffset:6,className:`z-50 outline-none`,children:(0,g.jsxs)(d,{className:`min-w-44 rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-none`,children:[(0,g.jsx)(r,{className:_,onClick:()=>n(`Play next`),children:`Play next`}),(0,g.jsx)(r,{className:_,onClick:()=>n(`Add to playlist`),children:`Add to playlist`}),(0,g.jsx)(r,{className:_,disabled:!0,onClick:()=>n(`Download`),children:`Download`}),(0,g.jsx)(u,{className:`-mx-1 my-1 h-px bg-border`}),(0,g.jsxs)(c,{className:_,checked:s,onCheckedChange:p,children:[(0,g.jsx)(`span`,{className:`flex size-4 items-center justify-center`,children:(0,g.jsx)(i,{children:(0,g.jsx)(o,{className:`size-4`})})}),`Favourite`]})]})})})]}),(0,g.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`Last action: `,e,`. Favourite: `,s?`yes`:`no`,`.`]})]})}var y=`import { useState } from "react"
import { CheckIcon } from "lucide-react"
import { Menu } from "@kitora/primitives/react"

const ITEM = "flex cursor-default items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none select-none data-disabled:opacity-50 data-highlighted:bg-accent data-highlighted:text-accent-foreground"

// A Base UI menu, moved: the parts, props and data attributes are Base UI's (Menu.Root, Trigger, Portal, Positioner,
// Popup, Item, CheckboxItem, Separator; sideOffset; data-highlighted, data-popup-open, data-disabled). Only the import changed,
// from "@base-ui/react/menu" to "@kitora/primitives/react".
export function SongMenu() {
  const [last, setLast] = useState("Nothing yet")
  const [favourite, setFavourite] = useState(false)
  return (
    <div className="grid justify-items-start gap-2">
      <Menu.Root>
        <Menu.Trigger className="rounded-md border border-border px-3 py-1.5 text-sm data-popup-open:bg-muted">Song</Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner sideOffset={6} className="z-50 outline-none">
            <Menu.Popup className="min-w-44 rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-none">
              <Menu.Item className={ITEM} onClick={() => setLast("Play next")}>
                Play next
              </Menu.Item>
              <Menu.Item className={ITEM} onClick={() => setLast("Add to playlist")}>
                Add to playlist
              </Menu.Item>
              <Menu.Item className={ITEM} disabled onClick={() => setLast("Download")}>
                Download
              </Menu.Item>
              <Menu.Separator className="-mx-1 my-1 h-px bg-border" />
              <Menu.CheckboxItem className={ITEM} checked={favourite} onCheckedChange={setFavourite}>
                <span className="flex size-4 items-center justify-center">
                  <Menu.CheckboxItemIndicator>
                    <CheckIcon className="size-4" />
                  </Menu.CheckboxItemIndicator>
                </span>
                Favourite
              </Menu.CheckboxItem>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>
      <p className="text-xs text-muted-foreground">
        Last action: {last}. Favourite: {favourite ? "yes" : "no"}.
      </p>
    </div>
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(y,()=>n(()=>import(`./base-ui-menu-CVic3AZk.js`),[]));function b(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...m(),...e.components},{Api:n,CssImports:r,Install:i,Relies:a,Snippet:o}=t;return n||S(`Api`,!0),r||S(`CssImports`,!0),i||S(`Install`,!0),a||S(`Relies`,!0),o||S(`Snippet`,!0),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(t.p,{children:[`Kitora's headless parts in `,(0,g.jsx)(n,{package:`@kitora/primitives`}),` were built to replace Base UI 1.4.1, and they keep its part names, its props and its data attributes on purpose, so that no class string changed when a part moved over. Moving a Base UI app is mostly a change of import.`]}),`
`,(0,g.jsx)(t.p,{children:`This page has no "Before" example: Base UI cannot be installed in the Kitora repo, so the comparison that proves the two behave the same is the record taken before Base UI was removed (below).`}),`
`,(0,g.jsx)(t.h2,{children:`Change the import`}),`
`,(0,g.jsxs)(t.p,{children:[`Each Base UI part comes from its own path, `,(0,g.jsx)(t.code,{children:`@base-ui/react/<part>`}),` (or from the `,(0,g.jsx)(t.code,{children:`@base-ui/react`}),` barrel). In Kitora they all come from one entry, `,(0,g.jsx)(t.code,{children:`@kitora/primitives/react`}),`, under the same names: `,(0,g.jsx)(t.code,{children:`Menu`}),` from `,(0,g.jsx)(t.code,{children:`@base-ui/react/menu`}),` becomes `,(0,g.jsx)(t.code,{children:`Menu`}),` from `,(0,g.jsx)(t.code,{children:`@kitora/primitives/react`}),`, and so do `,(0,g.jsx)(t.code,{children:`Popover`}),`, `,(0,g.jsx)(t.code,{children:`Dialog`}),`, `,(0,g.jsx)(t.code,{children:`Tabs`}),`, `,(0,g.jsx)(t.code,{children:`Select`}),` and the rest. A compound part is a namespace of parts there too (`,(0,g.jsx)(t.code,{children:`Menu.Item`}),`), and a single component stays one (`,(0,g.jsx)(t.code,{children:`RadioGroup`}),`, `,(0,g.jsx)(t.code,{children:`ToggleGroup`}),`). The helpers move the same way: `,(0,g.jsx)(t.code,{children:`useRender`}),`, `,(0,g.jsx)(t.code,{children:`mergeProps`}),` and `,(0,g.jsx)(t.code,{children:`DirectionProvider`}),` are exports of that entry.`]}),`
`,(0,g.jsx)(i,{packages:[`@kitora/primitives`]}),`
`,(0,g.jsxs)(t.p,{children:[`Inside the namespace nothing is renamed. `,(0,g.jsx)(t.code,{children:`Menu.Root`}),`, `,(0,g.jsx)(t.code,{children:`Menu.Trigger`}),`, `,(0,g.jsx)(t.code,{children:`Menu.Portal`}),`, `,(0,g.jsx)(t.code,{children:`Menu.Positioner`}),`, `,(0,g.jsx)(t.code,{children:`Menu.Popup`}),` and `,(0,g.jsx)(t.code,{children:`Menu.Item`}),` take the props they took in Base UI (`,(0,g.jsx)(t.code,{children:`sideOffset`}),`, `,(0,g.jsx)(t.code,{children:`disabled`}),`, `,(0,g.jsx)(t.code,{children:`checked`}),` with `,(0,g.jsx)(t.code,{children:`onCheckedChange`}),`, `,(0,g.jsx)(t.code,{children:`render`}),` to swap the element), and they write the same attributes your classes already style: `,(0,g.jsx)(t.code,{children:`data-popup-open`}),` on the trigger, `,(0,g.jsx)(t.code,{children:`data-highlighted`}),` on the item under the keyboard or pointer, `,(0,g.jsx)(t.code,{children:`data-disabled`}),`, `,(0,g.jsx)(t.code,{children:`data-checked`}),`.`]}),`
`,(0,g.jsx)(o,{title:`After`,source:y,children:(0,g.jsx)(v,{})}),`
`,(0,g.jsx)(t.p,{children:`Try it: focus Song and press the down arrow. The menu opens on its first item; Enter runs the highlighted item, closes the menu and gives focus back to the trigger. Download is disabled and never runs. Ticking Favourite keeps the menu open, and Escape closes it.`}),`
`,(0,g.jsxs)(t.p,{children:[`The behaviour stylesheet defines Tailwind variants for the boolean states (`,(0,g.jsx)(t.code,{children:`data-open:`}),`, `,(0,g.jsx)(t.code,{children:`data-checked:`}),` and the others in the README's table) and the enter and exit animations the styled packages use. If your classes use them, put these lines in the CSS file your Tailwind build reads:`]}),`
`,(0,g.jsx)(r,{packages:[`@kitora/primitives`]}),`
`,(0,g.jsx)(t.h2,{children:`How the sameness was checked`}),`
`,(0,g.jsxs)(t.p,{children:[`Before Base UI left the repo, each part the migration moved over had a spec suite that ran once against Base UI 1.4.1 and once against Kitora's part, and every case passed on both sides. The package README records each suite's result in its section "Parity at removal", together with the real-browser comparisons of popup placement, hover and menus. The suites still run, now against Kitora alone. A separate test pins the part list of every popup family (`,(0,g.jsx)(t.code,{children:`Popover`}),`, `,(0,g.jsx)(t.code,{children:`Menu`}),`, `,(0,g.jsx)(t.code,{children:`Select`}),`, `,(0,g.jsx)(t.code,{children:`Combobox`}),`, `,(0,g.jsx)(t.code,{children:`Toast`}),` and the others) against Base UI 1.4.1's published list, so a part Base UI has and Kitora lacks fails that test.`]}),`
`,(0,g.jsx)(t.h2,{children:`What is different`}),`
`,(0,g.jsx)(t.p,{children:`A few differences are deliberate, each pinned by a kitora-only test so it is not "fixed" back. The README lists them all in its section "Deliberate differences from Base UI"; the ones you are most likely to notice:`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Part`}),(0,g.jsx)(t.th,{children:`In Kitora`})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:`RadioGroup`}),(0,g.jsx)(t.td,{children:`Space checks the focused radio, a disabled radio is never the tab stop, and the tab stop follows a value changed from outside (the WAI-ARIA pattern).`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:`Checkbox`}),(0,g.jsx)(t.td,{children:`A checkbox that is both checked and indeterminate activates to checked.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:`Tooltip`}),(0,g.jsxs)(t.td,{children:[`The popup has the tooltip role and the trigger points at it with `,(0,g.jsx)(t.code,{children:`aria-describedby`}),` while it is open. Escape closes the newest tooltip or preview card only, so a dialog under it stays open.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:`Menu`}),(0,g.jsxs)(t.td,{children:[`A close is reported to `,(0,g.jsx)(t.code,{children:`onOpenChange`}),` once.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:`Toolbar, Menubar, NavigationMenu`}),(0,g.jsx)(t.td,{children:`Home and End jump to the first and last item.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:`Select, Combobox`}),(0,g.jsx)(t.td,{children:`The separator is presentational, so the list passes axe; Select also moves a page with PageUp and PageDown.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:`Combobox, NavigationMenu`}),(0,g.jsx)(t.td,{children:`Left and Right on a combobox's chips, and the arrow that opens a vertical navigation menu's panel, follow right-to-left text.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:`Drawer`}),(0,g.jsx)(t.td,{children:`One close request per document goes to the top-most layer, so two drawers never both close.`})]})]})]}),`
`,(0,g.jsx)(t.p,{children:`And a few additions Base UI 1.4.1 does not have, all optional, so Base UI code works without them:`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.code,{children:`disallowEmptySelection`}),` on `,(0,g.jsx)(t.code,{children:`ToggleGroup`}),`, so the last pressed toggle cannot be pressed off.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.code,{children:`enableHomeAndEndKeys`}),` on `,(0,g.jsx)(t.code,{children:`RadioGroup`}),`.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.code,{children:`focusableWhenDisabled`}),` on menu and select items, to step over disabled items.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.code,{children:`lazyFlip`}),` and `,(0,g.jsx)(t.code,{children:`adaptiveOrigin`}),` on every anchored positioner.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.code,{children:`Rating`}),`, a part Base UI does not have, and the searchable menu (`,(0,g.jsx)(t.code,{children:`Menu.FilterProvider`}),`) from a later Base UI preview.`]}),`
`]}),`
`,(0,g.jsxs)(t.p,{children:[`If you used Base UI through shadcn/ui's Base UI flavour, the styled components in `,(0,g.jsx)(n,{package:`@kitora/ui`}),` are the shorter path: see `,(0,g.jsx)(t.a,{href:`/docs/migrating/shadcn`,children:`from shadcn/ui`}),`. The `,(0,g.jsx)(t.a,{href:`/docs/concepts/primitives-contract`,children:`primitives contract`}),` explains the names and attributes every part shares.`]}),`
`,(0,g.jsx)(a,{on:[`packages/primitives/README.md`,`packages/primitives/src/__tests__/parity/`,`packages/primitives/src/react/__tests__/popup-parts.test.ts`,`packages/primitives/src/__tests__/parity/radio-group.kitora.test.tsx`,`packages/primitives/src/__tests__/parity/toggle-group.kitora.test.tsx`,`packages/primitives/src/react/__tests__/tooltip.test.tsx`,`packages/primitives/src/react/__tests__/menu.test.tsx`,`packages/primitives/src/react/index.ts`,`packages/primitives/src/core/contract.ts`,`src/docs/examples/__tests__/migrating-base-ui.test.tsx`]})]})}function x(e={}){let{wrapper:t}={...m(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(b,{...e})}):b(e)}function S(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{x as default};