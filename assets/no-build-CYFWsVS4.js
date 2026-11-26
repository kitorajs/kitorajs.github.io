import{Ic as e}from"./index-9y5uwRd3.js";import{n as t}from"./lib-NYJzi901.js";var n=e(),r=`<!doctype html>
<!--
  Kitora without a build step (esm.sh): an import map gives the page one React, the library comes from
  esm.sh as ES modules, and Tailwind's browser build generates the classes the components use at runtime. Open the
  file from any static server. The jsDelivr variant is jsdelivr.html. Pin the versions you test with.
-->
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Kitora without a build step</title>
    <script type="importmap">
      {
        "imports": {
        "react": "https://esm.sh/react@19.3.1",
        "react/": "https://esm.sh/react@19.3.1/",
        "react-dom": "https://esm.sh/react-dom@19.3.1?external=react",
        "react-dom/client": "https://esm.sh/react-dom@19.3.1/client?external=react",
        "htm": "https://esm.sh/htm@3.1.1",
        "@kitora/ui/button": "https://esm.sh/@kitora/ui@0.1.0/button?external=react,react-dom",
        "@kitora/ui/dialog": "https://esm.sh/@kitora/ui@0.1.0/dialog?external=react,react-dom",
        "@kitora/theme/react": "https://esm.sh/@kitora/theme@0.1.0/react?external=react,react-dom"
        }
      }
    <\/script>
    <!-- Tailwind v4 in the browser: it reads every style[type="text/tailwindcss"] and the classes in the page. -->
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4.3.5"><\/script>
    <!-- The design tokens, as @kitora/theme's toTailwindV4(buildTheme()) writes them, minus its first line
         (@import "tailwindcss", which the browser build already includes). tokens:start -->
    <style type="text/tailwindcss" id="kitora-tokens">
@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-border-strong: var(--border-strong);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-surface-1: var(--surface-1);
  --color-surface-2: var(--surface-2);
  --color-surface-3: var(--surface-3);
  --color-brand-50: var(--brand-50);
  --color-brand-100: var(--brand-100);
  --color-brand-200: var(--brand-200);
  --color-brand-300: var(--brand-300);
  --color-brand-400: var(--brand-400);
  --color-brand-500: var(--brand-500);
  --color-brand-600: var(--brand-600);
  --color-brand-700: var(--brand-700);
  --color-brand-800: var(--brand-800);
  --color-brand-900: var(--brand-900);
  --color-brand-950: var(--brand-950);
  --radius-xs: calc(var(--radius) * 0.5);
  --radius-sm: calc(var(--radius) * 0.75);
  --radius-md: var(--radius);
  --radius-lg: calc(var(--radius) * 1.5);
  --radius-xl: calc(var(--radius) * 2);
  --radius-2xl: calc(var(--radius) * 2.5);
  --radius-3xl: calc(var(--radius) * 3.5);
  --radius-4xl: calc(var(--radius) * 2.6);
  --text-2xs: 0.6875rem;
  --text-xs: 0.75rem;
  --text-sm: 0.8125rem;
  --text-base: 0.875rem;
  --text-md: 0.9375rem;
  --text-lg: 1.0625rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.5rem;
  --text-5xl: 3.5rem;
  --text-6xl: 4.5rem;
}

:root {
  --radius: 0.5rem;
  --spacing: 0.25rem;
  --density-control-h: 1.75rem;
  --density-row-py: 0.25rem;
  --density-text: 0.8125rem;
  --brand-50: oklch(0.97 0.014 268);
  --brand-100: oklch(0.935 0.031 268);
  --brand-200: oklch(0.885 0.056 268);
  --brand-300: oklch(0.82 0.089 268);
  --brand-400: oklch(0.74 0.133 268);
  --brand-500: oklch(0.662 0.17 268);
  --brand-600: oklch(0.578 0.17 268);
  --brand-700: oklch(0.5 0.17 268);
  --brand-800: oklch(0.418 0.136 268);
  --brand-900: oklch(0.337 0.111 268);
  --brand-950: oklch(0.255 0.085 268);
  --background: oklch(1 0 0);
  --foreground: oklch(0.18 0.005 285);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.18 0.005 285);
  --popover: oklch(0.985 0.003 285);
  --popover-foreground: oklch(0.18 0.005 285);
  --primary: oklch(0.5 0.17 268);
  --primary-foreground: oklch(0.99 0 0);
  --secondary: oklch(0.965 0.003 285);
  --secondary-foreground: oklch(0.22 0.01 285);
  --muted: oklch(0.965 0.003 285);
  --muted-foreground: oklch(0.48 0.01 285);
  --accent: oklch(0.965 0.003 285);
  --accent-foreground: oklch(0.22 0.01 285);
  --destructive: oklch(0.52 0.2 22);
  --destructive-foreground: oklch(0.99 0 0);
  --border: oklch(0.925 0.003 285);
  --border-strong: oklch(0.86 0.003 285);
  --input: oklch(0.94 0.003 285);
  --ring: oklch(0.5 0.17 268 / 75%);
  --surface-1: oklch(0.99 0.002 285);
  --surface-2: oklch(0.975 0.003 285);
  --surface-3: oklch(0.955 0.003 285);
}

.dark {
  --background: oklch(0.155 0.005 285);
  --foreground: oklch(0.96 0 0);
  --card: oklch(0.195 0.005 285);
  --card-foreground: oklch(0.96 0 0);
  --popover: oklch(0.215 0.005 285);
  --popover-foreground: oklch(0.96 0 0);
  --primary: oklch(0.741 0.12 267.6);
  --primary-foreground: oklch(0.16 0.02 267.6);
  --secondary: oklch(0.235 0.005 285);
  --secondary-foreground: oklch(0.96 0 0);
  --muted: oklch(0.215 0.005 285);
  --muted-foreground: oklch(0.65 0.005 285);
  --accent: oklch(0.235 0.005 285);
  --accent-foreground: oklch(0.96 0 0);
  --destructive: oklch(0.78 0.18 22);
  --destructive-foreground: oklch(0.16 0.02 22);
  --border: oklch(0.265 0.005 285);
  --border-strong: oklch(0.34 0.005 285);
  --input: oklch(0.235 0.005 285);
  --ring: oklch(0.741 0.12 267.6 / 60%);
  --surface-1: oklch(0.195 0.005 285);
  --surface-2: oklch(0.235 0.005 285);
  --surface-3: oklch(0.275 0.005 285);
}
    </style>
    <!-- tokens:end -->
  </head>
  <body>
    <div id="root"></div>
    <script type="module">
      import { createElement, StrictMode } from "react"
      import { createRoot } from "react-dom/client"
      import htm from "htm"
      import { Button } from "@kitora/ui/button"
      import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@kitora/ui/dialog"
      import { LanguageProvider, useLanguage } from "@kitora/theme/react"

      const html = htm.bind(createElement)

      // Kitora's behaviour stylesheet (state variants and animations) is Tailwind source too: the browser build
      // cannot @import a URL, so the page fetches it into a style tag of its own, which Tailwind picks up.
      const behaviour = document.createElement("style")
      behaviour.type = "text/tailwindcss"
      behaviour.textContent = await fetch("https://esm.sh/@kitora/primitives@0.1.0/styles.css").then((r) => r.text())
      document.head.append(behaviour)

      function LanguagePicker() {
        const { language, setLanguage } = useLanguage()
        const next = language.id === "kitora" ? "macos" : "kitora"
        return html\`<\${Button} variant="outline" onClick=\${() => setLanguage(next)}>Use the \${next} language<//>\`
      }

      function App() {
        return html\`
          <main className="flex min-h-dvh flex-col items-start gap-4 bg-background p-8 text-foreground">
            <h1 className="text-2xl font-semibold">Kitora without a build step</h1>
            <div className="flex flex-wrap gap-2">
              <\${Dialog}>
                <\${DialogTrigger} asChild><\${Button}>Open dialog<//><//>
                <\${DialogContent}>
                  <\${DialogHeader}>
                    <\${DialogTitle}>Hello from Kitora<//>
                    <\${DialogDescription}>A dialog with focus trap, Escape and return focus.<//>
                  <//>
                  <\${DialogFooter}>
                    <\${DialogClose} asChild><\${Button} variant="outline">Close<//><//>
                  <//>
                <//>
              <//>
              <\${LanguagePicker} />
              <\${Button} variant="ghost" onClick=\${() => document.documentElement.classList.toggle("dark")}>Toggle dark<//>
            </div>
          </main>
        \`
      }

      createRoot(document.getElementById("root")).render(
        html\`<\${StrictMode}><\${LanguageProvider}><\${App} /><//><//>\`,
      )
    <\/script>
  </body>
</html>
`,i=`<!doctype html>
<!--
  Kitora without a build step (jsDelivr): an import map gives the page one React, the library comes from
  jsDelivr as ES modules, and Tailwind's browser build generates the classes the components use at runtime. Open the
  file from any static server. The esm.sh version is index.html. Pin the versions you test with.
-->
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Kitora without a build step</title>
    <script type="importmap">
      {
        "imports": {
        "react": "https://cdn.jsdelivr.net/npm/react@19.3.1/+esm",
        "react/jsx-runtime": "https://cdn.jsdelivr.net/npm/react@19.3.1/jsx-runtime/+esm",
        "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@19.3.1/+esm",
        "react-dom/client": "https://cdn.jsdelivr.net/npm/react-dom@19.3.1/client/+esm",
        "htm": "https://cdn.jsdelivr.net/npm/htm@3.1.1/+esm",
        "@kitora/ui/button": "https://cdn.jsdelivr.net/npm/@kitora/ui@0.1.0/dist/button.js/+esm",
        "@kitora/ui/dialog": "https://cdn.jsdelivr.net/npm/@kitora/ui@0.1.0/dist/dialog.js/+esm",
        "@kitora/theme/react": "https://cdn.jsdelivr.net/npm/@kitora/theme@0.1.0/dist/react/index.js/+esm"
        }
      }
    <\/script>
    <!-- Tailwind v4 in the browser: it reads every style[type="text/tailwindcss"] and the classes in the page. -->
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4.3.5"><\/script>
    <!-- The design tokens, as @kitora/theme's toTailwindV4(buildTheme()) writes them, minus its first line
         (@import "tailwindcss", which the browser build already includes). tokens:start -->
    <style type="text/tailwindcss" id="kitora-tokens">
@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-border-strong: var(--border-strong);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-surface-1: var(--surface-1);
  --color-surface-2: var(--surface-2);
  --color-surface-3: var(--surface-3);
  --color-brand-50: var(--brand-50);
  --color-brand-100: var(--brand-100);
  --color-brand-200: var(--brand-200);
  --color-brand-300: var(--brand-300);
  --color-brand-400: var(--brand-400);
  --color-brand-500: var(--brand-500);
  --color-brand-600: var(--brand-600);
  --color-brand-700: var(--brand-700);
  --color-brand-800: var(--brand-800);
  --color-brand-900: var(--brand-900);
  --color-brand-950: var(--brand-950);
  --radius-xs: calc(var(--radius) * 0.5);
  --radius-sm: calc(var(--radius) * 0.75);
  --radius-md: var(--radius);
  --radius-lg: calc(var(--radius) * 1.5);
  --radius-xl: calc(var(--radius) * 2);
  --radius-2xl: calc(var(--radius) * 2.5);
  --radius-3xl: calc(var(--radius) * 3.5);
  --radius-4xl: calc(var(--radius) * 2.6);
  --text-2xs: 0.6875rem;
  --text-xs: 0.75rem;
  --text-sm: 0.8125rem;
  --text-base: 0.875rem;
  --text-md: 0.9375rem;
  --text-lg: 1.0625rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.5rem;
  --text-5xl: 3.5rem;
  --text-6xl: 4.5rem;
}

:root {
  --radius: 0.5rem;
  --spacing: 0.25rem;
  --density-control-h: 1.75rem;
  --density-row-py: 0.25rem;
  --density-text: 0.8125rem;
  --brand-50: oklch(0.97 0.014 268);
  --brand-100: oklch(0.935 0.031 268);
  --brand-200: oklch(0.885 0.056 268);
  --brand-300: oklch(0.82 0.089 268);
  --brand-400: oklch(0.74 0.133 268);
  --brand-500: oklch(0.662 0.17 268);
  --brand-600: oklch(0.578 0.17 268);
  --brand-700: oklch(0.5 0.17 268);
  --brand-800: oklch(0.418 0.136 268);
  --brand-900: oklch(0.337 0.111 268);
  --brand-950: oklch(0.255 0.085 268);
  --background: oklch(1 0 0);
  --foreground: oklch(0.18 0.005 285);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.18 0.005 285);
  --popover: oklch(0.985 0.003 285);
  --popover-foreground: oklch(0.18 0.005 285);
  --primary: oklch(0.5 0.17 268);
  --primary-foreground: oklch(0.99 0 0);
  --secondary: oklch(0.965 0.003 285);
  --secondary-foreground: oklch(0.22 0.01 285);
  --muted: oklch(0.965 0.003 285);
  --muted-foreground: oklch(0.48 0.01 285);
  --accent: oklch(0.965 0.003 285);
  --accent-foreground: oklch(0.22 0.01 285);
  --destructive: oklch(0.52 0.2 22);
  --destructive-foreground: oklch(0.99 0 0);
  --border: oklch(0.925 0.003 285);
  --border-strong: oklch(0.86 0.003 285);
  --input: oklch(0.94 0.003 285);
  --ring: oklch(0.5 0.17 268 / 75%);
  --surface-1: oklch(0.99 0.002 285);
  --surface-2: oklch(0.975 0.003 285);
  --surface-3: oklch(0.955 0.003 285);
}

.dark {
  --background: oklch(0.155 0.005 285);
  --foreground: oklch(0.96 0 0);
  --card: oklch(0.195 0.005 285);
  --card-foreground: oklch(0.96 0 0);
  --popover: oklch(0.215 0.005 285);
  --popover-foreground: oklch(0.96 0 0);
  --primary: oklch(0.741 0.12 267.6);
  --primary-foreground: oklch(0.16 0.02 267.6);
  --secondary: oklch(0.235 0.005 285);
  --secondary-foreground: oklch(0.96 0 0);
  --muted: oklch(0.215 0.005 285);
  --muted-foreground: oklch(0.65 0.005 285);
  --accent: oklch(0.235 0.005 285);
  --accent-foreground: oklch(0.96 0 0);
  --destructive: oklch(0.78 0.18 22);
  --destructive-foreground: oklch(0.16 0.02 22);
  --border: oklch(0.265 0.005 285);
  --border-strong: oklch(0.34 0.005 285);
  --input: oklch(0.235 0.005 285);
  --ring: oklch(0.741 0.12 267.6 / 60%);
  --surface-1: oklch(0.195 0.005 285);
  --surface-2: oklch(0.235 0.005 285);
  --surface-3: oklch(0.275 0.005 285);
}
    </style>
    <!-- tokens:end -->
  </head>
  <body>
    <div id="root"></div>
    <script type="module">
      import { createElement, StrictMode } from "react"
      import { createRoot } from "react-dom/client"
      import htm from "htm"
      import { Button } from "@kitora/ui/button"
      import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@kitora/ui/dialog"
      import { LanguageProvider, useLanguage } from "@kitora/theme/react"

      const html = htm.bind(createElement)

      // Kitora's behaviour stylesheet (state variants and animations) is Tailwind source too: the browser build
      // cannot @import a URL, so the page fetches it into a style tag of its own, which Tailwind picks up.
      const behaviour = document.createElement("style")
      behaviour.type = "text/tailwindcss"
      behaviour.textContent = await fetch("https://cdn.jsdelivr.net/npm/@kitora/primitives@0.1.0/styles.css").then((r) => r.text())
      document.head.append(behaviour)

      function LanguagePicker() {
        const { language, setLanguage } = useLanguage()
        const next = language.id === "kitora" ? "macos" : "kitora"
        return html\`<\${Button} variant="outline" onClick=\${() => setLanguage(next)}>Use the \${next} language<//>\`
      }

      function App() {
        return html\`
          <main className="flex min-h-dvh flex-col items-start gap-4 bg-background p-8 text-foreground">
            <h1 className="text-2xl font-semibold">Kitora without a build step</h1>
            <div className="flex flex-wrap gap-2">
              <\${Dialog}>
                <\${DialogTrigger} asChild><\${Button}>Open dialog<//><//>
                <\${DialogContent}>
                  <\${DialogHeader}>
                    <\${DialogTitle}>Hello from Kitora<//>
                    <\${DialogDescription}>A dialog with focus trap, Escape and return focus.<//>
                  <//>
                  <\${DialogFooter}>
                    <\${DialogClose} asChild><\${Button} variant="outline">Close<//><//>
                  <//>
                <//>
              <//>
              <\${LanguagePicker} />
              <\${Button} variant="ghost" onClick=\${() => document.documentElement.classList.toggle("dark")}>Toggle dark<//>
            </div>
          </main>
        \`
      }

      createRoot(document.getElementById("root")).render(
        html\`<\${StrictMode}><\${LanguageProvider}><\${App} /><//><//>\`,
      )
    <\/script>
  </body>
</html>
`;function a(e){let a={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components},{Api:o,RecipeFiles:c,Relies:l}=a;return o||s(`Api`,!0),c||s(`RecipeFiles`,!0),l||s(`Relies`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:`A page with no build step: the browser loads React and Kitora as ES modules from a CDN, and Tailwind's browser build generates the classes the components use at runtime. Good for prototypes, demos and pages that cannot run a bundler; an app with a build ships far less.`}),`
`,(0,n.jsx)(a.p,{children:`The page needs three parts:`}),`
`,(0,n.jsxs)(a.ul,{children:[`
`,(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:`An import map`}),` naming React and React DOM once. Every module that imports `,(0,n.jsx)(a.code,{children:`react`}),` gets that copy, so hooks work across the library and your own code.`]}),`
`,(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:`The library from esm.sh`}),`, one entry per import, with `,(0,n.jsx)(a.code,{children:`?external=react,react-dom`}),`: esm.sh leaves those imports to the import map instead of bundling a second React. Pin the version.`]}),`
`,(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:`Tailwind v4's browser build`}),` (`,(0,n.jsx)(a.code,{children:`@tailwindcss/browser`}),`), the design tokens in a `,(0,n.jsx)(a.code,{children:`<style type="text/tailwindcss">`}),` block (what `,(0,n.jsx)(o,{package:`@kitora/theme`}),`'s exporter writes, minus its first line), and the primitives' behaviour stylesheet fetched into a second such block, since the browser build cannot import a URL.`]}),`
`]}),`
`,(0,n.jsx)(c,{files:[{name:`index.html`,source:r}]}),`
`,(0,n.jsxs)(a.p,{children:[`The language switch works as in an app: `,(0,n.jsx)(a.code,{children:`LanguageProvider`}),` loads a built-in language's data from esm.sh when it is picked.`]}),`
`,(0,n.jsx)(a.h2,{children:`jsDelivr`}),`
`,(0,n.jsxs)(a.p,{children:[`jsDelivr's `,(0,n.jsx)(a.code,{children:`+esm`}),` serves the same modules, but it resolves each module's dependencies to exact versions when it first bundles that file, and an import map cannot redirect those URLs. React then loads once only while every file resolved the same React version as the import map names, so prefer esm.sh, whose `,(0,n.jsx)(a.code,{children:`external`}),` option leaves React to the import map. The jsDelivr variant of the page:`]}),`
`,(0,n.jsx)(c,{files:[{name:`jsdelivr.html`,source:i}]}),`
`,(0,n.jsxs)(a.p,{children:[`The page lives in the repository at `,(0,n.jsx)(a.code,{children:`examples/no-build`}),`. `,(0,n.jsx)(a.code,{children:`task recipes:smoke`}),` serves it as static files and checks it in a headless browser against a local esm.sh that holds the packed packages: one React instance, the button styled, the dialog working, dark mode, a design-language switch and a clean console. After a release, `,(0,n.jsx)(a.code,{children:`task recipes:smoke -- --only no-build --live`}),` runs the same checks against the real esm.sh and jsDelivr.`]}),`
`,(0,n.jsx)(l,{on:[`examples/no-build`,`scripts/recipes-smoke.mjs`,`scripts/recipes-no-build-checks.mjs`,`scripts/recipes-local-cdn.mjs`,`packages/primitives/styles.css`]})]})}function o(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}function s(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{o as default};