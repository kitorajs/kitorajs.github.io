import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{s as t}from"./kit-docs-BUovISd0.js";import{s as n,t as r}from"./tree-diff-WJPC4esd.js";import{Bc as i,Cc as a,Ic as o}from"./index-B9ukmIN1.js";import"./kit-gallery-Bph7isB2.js";import{t as s}from"./example-BGnSQG2Y.js";import{t as c}from"./-kits.terminal.shared-BQ6z3kzr.js";var l=e(i(),1),u=o(),d=[{id:`u1`,name:`Ada Lovelace`,role:`admin`},{id:`u2`,name:`Alan Turing`,role:`editor`},{id:`u3`,name:`Grace Hopper`,role:`editor`},{id:`u4`,name:`Linus Torvalds`,role:`viewer`}],f=[{id:`u5`,name:`Margaret Hamilton`,role:`editor`},{id:`u1`,name:`Ada Lovelace`,role:`owner`},{id:`u3`,name:`Grace Hopper`,role:`editor`},{id:`u2`,name:`Alan Turing`,role:`editor`}];function p(){let[e,t]=(0,l.useState)(!0);return(0,u.jsx)(r,{oldValue:d,newValue:f,arrayKey:e?`id`:void 0,title:`users.json`,actions:(0,u.jsx)(`div`,{role:`radiogroup`,"aria-label":`Match array items`,className:`inline-flex h-7 items-center rounded-md bg-muted p-0.5 text-[12px]`,children:[[`By index`,!1],[`By id key`,!0]].map(([n,r])=>(0,u.jsx)(`button`,{type:`button`,role:`radio`,"aria-checked":e===r,onClick:()=>t(r===!0),className:`h-6 rounded px-2 ${e===r?`bg-background text-foreground shadow-sm`:`text-muted-foreground hover:text-foreground`}`,children:n},String(n)))})})}var m=`import { useState } from "react"
import { TreeDiff } from "@kitora/terminal"

// Array matching, two ways. By index (the default), inserting one user at the top makes every later
// row look changed. By id key (\`arrayKey="id"\`), items are matched by identity: one added, one
// removed, one edited, and the reordered one reported as moved.
const before = [
  { id: "u1", name: "Ada Lovelace", role: "admin" },
  { id: "u2", name: "Alan Turing", role: "editor" },
  { id: "u3", name: "Grace Hopper", role: "editor" },
  { id: "u4", name: "Linus Torvalds", role: "viewer" },
]

const after = [
  { id: "u5", name: "Margaret Hamilton", role: "editor" },
  { id: "u1", name: "Ada Lovelace", role: "owner" },
  { id: "u3", name: "Grace Hopper", role: "editor" },
  { id: "u2", name: "Alan Turing", role: "editor" },
]

export function TreeDiffIdKey() {
  const [byId, setById] = useState(true)
  return (
    <TreeDiff
      oldValue={before}
      newValue={after}
      arrayKey={byId ? "id" : undefined}
      title="users.json"
      actions={
        <div role="radiogroup" aria-label="Match array items" className="inline-flex h-7 items-center rounded-md bg-muted p-0.5 text-[12px]">
          {[
            ["By index", false],
            ["By id key", true],
          ].map(([label, value]) => (
            <button
              key={String(label)}
              type="button"
              role="radio"
              aria-checked={byId === value}
              onClick={() => setById(value === true)}
              className={\`h-6 rounded px-2 \${byId === value ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}\`}
            >
              {label}
            </button>
          ))}
        </div>
      }
    />
  )
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(m,()=>a(()=>import(`./tree-diff-id-key-_2mDU90o.js`),[]));var h=`apiVersion: apps/v1
kind: Deployment
metadata:
  name: checkout
  namespace: shop
  labels:
    app: checkout
    tier: backend
spec:
  replicas: 3
  selector:
    matchLabels:
      app: checkout
  template:
    metadata:
      labels:
        app: checkout
    spec:
      containers:
        - name: api
          image: registry.acme.dev/checkout:1.14.2
          ports:
            - containerPort: 8080
          env:
            - name: LOG_LEVEL
              value: info
            - name: DB_POOL
              value: "10"
            - name: FEATURE_PAYPAL
              value: "false"
          resources:
            limits:
              cpu: 500m
              memory: 512Mi
        - name: envoy
          image: envoyproxy/envoy:v1.29.1
`,g=`apiVersion: apps/v1
kind: Deployment
metadata:
  name: checkout
  namespace: shop
  labels:
    app: checkout
    tier: backend
    team: payments   # new owner label
spec:
  replicas: 5
  selector:
    matchLabels:
      app: checkout
  template:
    metadata:
      labels:
        app: checkout
    spec:
      containers:
        - name: envoy
          image: envoyproxy/envoy:v1.29.1
        - name: api
          image: registry.acme.dev/checkout:1.15.0
          ports:
            - containerPort: 8080
          env:
            - name: LOG_LEVEL
              value: warn
            - name: DB_POOL
              value: "10"
            - name: OTEL_ENDPOINT
              value: http://otel-collector:4317
          resources:
            limits:
              cpu: "1"
              memory: 1Gi
`;function _(){return(0,u.jsx)(r,{oldText:h,newText:g,parser:n,arrayKey:`name`,defaultOnlyChanges:!0,title:`deployment.yaml`})}var v=`import { TreeDiff, yamlTreeParser } from "@kitora/terminal"

// A Kubernetes Deployment before and after a rollout, parsed with the built-in YAML-subset parser
// (\`yamlTreeParser\`; plug a full YAML library in through the same \`TreeDiffParser\` interface).
// Containers and env vars are matched by \`name\`, so a reordered list is a move, not a rewrite.
// Starts with only the changes shown; untick "Only changes" to see the whole document.
const before = \`apiVersion: apps/v1
kind: Deployment
metadata:
  name: checkout
  namespace: shop
  labels:
    app: checkout
    tier: backend
spec:
  replicas: 3
  selector:
    matchLabels:
      app: checkout
  template:
    metadata:
      labels:
        app: checkout
    spec:
      containers:
        - name: api
          image: registry.acme.dev/checkout:1.14.2
          ports:
            - containerPort: 8080
          env:
            - name: LOG_LEVEL
              value: info
            - name: DB_POOL
              value: "10"
            - name: FEATURE_PAYPAL
              value: "false"
          resources:
            limits:
              cpu: 500m
              memory: 512Mi
        - name: envoy
          image: envoyproxy/envoy:v1.29.1
\`

const after = \`apiVersion: apps/v1
kind: Deployment
metadata:
  name: checkout
  namespace: shop
  labels:
    app: checkout
    tier: backend
    team: payments   # new owner label
spec:
  replicas: 5
  selector:
    matchLabels:
      app: checkout
  template:
    metadata:
      labels:
        app: checkout
    spec:
      containers:
        - name: envoy
          image: envoyproxy/envoy:v1.29.1
        - name: api
          image: registry.acme.dev/checkout:1.15.0
          ports:
            - containerPort: 8080
          env:
            - name: LOG_LEVEL
              value: warn
            - name: DB_POOL
              value: "10"
            - name: OTEL_ENDPOINT
              value: http://otel-collector:4317
          resources:
            limits:
              cpu: "1"
              memory: 1Gi
\`

export function TreeDiffKubernetes() {
  return <TreeDiff oldText={before} newText={after} parser={yamlTreeParser} arrayKey="name" defaultOnlyChanges title="deployment.yaml" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(v,()=>a(()=>import(`./tree-diff-kubernetes-T_Lh3VoQ.js`),[]));var y={name:`@acme/dashboard`,version:`3.8.2`,private:!0,type:`module`,scripts:{dev:`vite`,build:`vite build`,test:`vitest run`,preview:`vite preview`},dependencies:{react:`^18.3.1`,"react-dom":`^18.3.1`,"@tanstack/react-router":`^1.45.0`,zod:`^3.22.4`,clsx:`^2.1.0`},devDependencies:{typescript:`^5.4.5`,vite:`^5.2.0`,vitest:`^1.6.0`,eslint:`^8.57.0`},engines:{node:`>=18`},browserslist:[`defaults`,`not ie 11`]},b={type:`module`,name:`@acme/dashboard`,version:`4.0.0`,private:!0,scripts:{dev:`vite`,build:`tsc -b && vite build`,test:`vitest run`,lint:`oxlint .`},dependencies:{react:`^19.1.0`,"react-dom":`^19.1.0`,"@tanstack/react-router":`^1.120.0`,zod:`^3.22.4`,"@kitora/ui":`workspace:*`},devDependencies:{typescript:`^5.8.3`,vite:`^6.3.0`,vitest:`^3.1.0`,oxlint:`^0.16.0`},engines:{node:`>=20`},browserslist:[`defaults`]};function x(){return(0,u.jsx)(r,{oldText:JSON.stringify(y,null,2),newText:JSON.stringify(b,null,2),title:`package.json`})}var S=`import { TreeDiff } from "@kitora/terminal"

// Two package.json files compared by structure rather than by line: reordered keys are not changes,
// bumped versions read old → new, and nested sections fold. ↑/↓ and n/p step through the tree.
const before = {
  name: "@acme/dashboard",
  version: "3.8.2",
  private: true,
  type: "module",
  scripts: { dev: "vite", build: "vite build", test: "vitest run", preview: "vite preview" },
  dependencies: { react: "^18.3.1", "react-dom": "^18.3.1", "@tanstack/react-router": "^1.45.0", zod: "^3.22.4", clsx: "^2.1.0" },
  devDependencies: { typescript: "^5.4.5", vite: "^5.2.0", vitest: "^1.6.0", eslint: "^8.57.0" },
  engines: { node: ">=18" },
  browserslist: ["defaults", "not ie 11"],
}

const after = {
  type: "module",
  name: "@acme/dashboard",
  version: "4.0.0",
  private: true,
  scripts: { dev: "vite", build: "tsc -b && vite build", test: "vitest run", lint: "oxlint ." },
  dependencies: { react: "^19.1.0", "react-dom": "^19.1.0", "@tanstack/react-router": "^1.120.0", zod: "^3.22.4", "@kitora/ui": "workspace:*" },
  devDependencies: { typescript: "^5.8.3", vite: "^6.3.0", vitest: "^3.1.0", oxlint: "^0.16.0" },
  engines: { node: ">=20" },
  browserslist: ["defaults"],
}

export function TreeDiffPackageJson() {
  return <TreeDiff oldText={JSON.stringify(before, null, 2)} newText={JSON.stringify(after, null, 2)} title="package.json" />
}
`;(globalThis.__kitoraSnippetTokens??=new Map).set(S,()=>a(()=>import(`./tree-diff-package-json-B7udbdeJ.js`),[]));function C(){return(0,u.jsxs)(`div`,{children:[(0,u.jsx)(t,{title:`Tree diff`,children:`Structural diffs of JSON and YAML: objects by key, arrays by index or by an id key, with added, removed, changed and moved nodes, change counts and next / previous change.`}),(0,u.jsx)(s,{n:1,title:`package.json`,blurb:`Reordered keys are not changes; bumped versions read old → new. Focus the tree and press n / p to step through changes.`,code:S,children:(0,u.jsx)(c,{testId:`tree-diff-package`,height:420,children:(0,u.jsx)(x,{})})}),(0,u.jsx)(s,{n:2,title:`A Kubernetes rollout (YAML)`,blurb:`Parsed by the built-in YAML subset; containers and env vars matched by name; only changes shown.`,code:v,children:(0,u.jsx)(c,{testId:`tree-diff-k8s`,height:380,children:(0,u.jsx)(_,{})})}),(0,u.jsx)(s,{n:3,title:`Arrays: by index or by id key`,blurb:`By index, one insert at the top changes every row. By id key, you see what really happened.`,code:m,children:(0,u.jsx)(c,{testId:`tree-diff-id-key`,height:300,children:(0,u.jsx)(p,{})})})]})}export{C as component};