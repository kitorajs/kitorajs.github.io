import{b as e,x as t}from"./-kits.ai-chat.shared-KM5YTP0o.js";var n=[{id:`s1`,title:`Streams API — Web APIs | MDN`,url:`https://developer.mozilla.org/en-US/docs/Web/API/Streams_API`,siteName:`MDN`,snippet:`The Streams API allows JavaScript to programmatically access streams of data received over the network and process them as desired.`},{id:`s2`,title:`Server-sent events — HTML Living Standard`,url:`https://html.spec.whatwg.org/multipage/server-sent-events.html`,siteName:`WHATWG`,snippet:`To enable servers to push data to web pages over HTTP or using dedicated server-push protocols, this specification introduces the EventSource interface.`},{id:`s3`,title:`Using Fetch with ReadableStream`,url:`https://web.dev/articles/fetch-api-error-handling`,siteName:`web.dev`,snippet:`Read a response body chunk by chunk with response.body.getReader() and decode it with TextDecoderStream.`},{id:`s4`,title:`AbortController — Web APIs | MDN`,url:`https://developer.mozilla.org/en-US/docs/Web/API/AbortController`,siteName:`MDN`,snippet:`The AbortController interface represents a controller object that allows you to abort one or more Web requests as and when desired.`}],r=`Here's how the three transports compare for streaming model output:

| Transport | Direction | Reconnect | Best for |
|:--|:--:|:--:|:--|
| **SSE** | server → client | built in | token streams |
| **WebSocket** | both ways | manual | live collaboration |
| **fetch + ReadableStream** | server → client | manual | one-shot replies |

For a chat UI, *SSE* or a plain \`fetch\` stream is usually enough — you only need the server to push tokens.`,i=`Here's a small, typed \`debounce\` that also exposes \`cancel\`:

\`\`\`ts
export function debounce<A extends unknown[]>(fn: (...args: A) => void, ms: number) {
  let timer: ReturnType<typeof setTimeout> | undefined
  const run = (...args: A) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), ms)
  }
  run.cancel = () => clearTimeout(timer)
  return run
}
\`\`\`

Key points:

1. The timer resets on every call, so only the **last** call within \`ms\` runs.
2. \`cancel\` drops a pending call — handy on unmount.
3. The generic \`A\` keeps the argument types of \`fn\`.

I also put a fuller version with \`flush\` and leading-edge support in the panel →`,a=`export interface DebounceOptions {
  /** Run on the leading edge instead of the trailing one. */
  readonly leading?: boolean
}

export interface Debounced<A extends unknown[]> {
  (...args: A): void
  cancel(): void
  flush(): void
}

export function debounce<A extends unknown[]>(fn: (...args: A) => void, ms: number, options: DebounceOptions = {}): Debounced<A> {
  let timer: ReturnType<typeof setTimeout> | undefined
  let pending: A | undefined

  const fire = () => {
    timer = undefined
    if (pending) {
      const args = pending
      pending = undefined
      fn(...args)
    }
  }

  const run = (...args: A) => {
    const idle = timer === undefined
    pending = args
    clearTimeout(timer)
    timer = setTimeout(fire, ms)
    if (options.leading && idle) fire()
  }

  run.cancel = () => {
    clearTimeout(timer)
    timer = undefined
    pending = undefined
  }
  run.flush = () => {
    clearTimeout(timer)
    fire()
  }
  return run
}`,o=`<!doctype html>
<html><head><style>
  body { font: 14px/1.5 system-ui, sans-serif; margin: 0; display: grid; place-items: center; min-height: 100vh; background: linear-gradient(135deg, #eef2ff, #fdf2f8); color: #1e1b4b; }
  .card { background: white; padding: 28px 32px; border-radius: 16px; box-shadow: 0 10px 30px rgb(30 27 75 / .12); text-align: center; width: 260px; }
  h1 { font-size: 18px; margin: 0 0 4px; }
  p { margin: 0 0 18px; color: #6b7280; font-size: 13px; }
  .n { font-size: 44px; font-weight: 700; font-variant-numeric: tabular-nums; }
  button { font: inherit; border: 0; border-radius: 8px; padding: 6px 14px; margin: 0 4px; background: #4f46e5; color: white; cursor: pointer; }
  button.ghost { background: #eef2ff; color: #4f46e5; }
</style></head><body>
  <div class="card">
    <h1>Counter</h1>
    <p>A tiny interactive page</p>
    <div class="n" id="n">0</div>
    <div><button class="ghost" onclick="n.textContent = +n.textContent - 1">−</button><button onclick="n.textContent = +n.textContent + 1">+</button></div>
  </div>
</body></html>`,s=`Good question. Streaming a reply well comes down to three things:

- **Render as tokens arrive** — parse markdown on every chunk, but keep unfinished syntax (an open \`**\` or code fence) readable.
- **Stay pinned to the bottom** while the reader is there, and let go as soon as they scroll up.
- **Make Stop instant** — abort the request and keep what already streamed.

Try asking me for a *comparison table*, some *code*, a *web page*, the *weather*, or to *research* something.`,c="Browsers give you two good ways to consume a token stream:\n\n**Server-sent events** use a long-lived HTTP response and the `EventSource` interface, with reconnection built in [2]. They are one-way, server to client, which is exactly what a chat reply needs.\n\n**fetch with a ReadableStream** reads the body chunk by chunk through `response.body.getReader()` [3], and works with any method and headers, including `POST` with a JSON body [1].\n\nEither way, wire an `AbortController` to your Stop button so the request is cancelled on the network, not just ignored [4].";function l(e){let l=t(e).toLowerCase();return/\bfail|error|break\b/.test(l)?[{type:`stream-text`,text:`Let me look that up for you… `},{type:`wait`,ms:400},{type:`error`,message:`The model is overloaded (529). Try again in a moment.`}]:/table|compare|comparison/.test(l)?[{type:`stream-text`,text:r}]:/code|debounce|function|typescript/.test(l)?[{type:`stream-reasoning`,text:`The user wants a debounce. Keep the inline version short and typed, mention cancel, and put the complete version with flush and leading-edge support in an artifact so the chat stays readable.`,durationMs:2300},{type:`stream-text`,text:i},{type:`artifact`,artifact:{id:`a-debounce`,title:`debounce.ts`,kind:`code`,language:`typescript`,content:a}}]:/page|html|landing|counter/.test(l)?[{type:`stream-text`,text:`Here's a small interactive counter page. Open it in the panel and switch between **Preview** and **Code**.`},{type:`artifact`,artifact:{id:`a-counter`,title:`Counter page`,kind:`html`,content:o}}]:/weather/.test(l)?[{type:`tool-call`,id:`t-weather`,name:`get_weather`,args:{city:`Lisbon`,units:`metric`}},{type:`wait`,ms:1100},{type:`tool-result`,id:`t-weather`,result:{city:`Lisbon`,tempC:21,condition:`Sunny`,humidity:.58,windKph:14}},{type:`stream-text`,text:`It's **21 °C and sunny** in Lisbon right now, with a light 14 km/h breeze and 58% humidity. A good afternoon for a walk along the river.`}]:/research|search|latest|sse|stream/.test(l)?[{type:`stream-reasoning`,text:`I should check current docs rather than rely on memory: search for streaming fetch and server-sent events, then cite the specs.`,durationMs:1800},{type:`tool-call`,id:`t-search`,name:`web_search`,args:{query:`browser streaming fetch vs server-sent events`,limit:4}},{type:`wait`,ms:1200},{type:`tool-result`,id:`t-search`,result:n.map(e=>({title:e.title,url:e.url}))},{type:`sources`,sources:n},{type:`stream-text`,text:c}]:[{type:`stream-text`,text:s}]}var u=e({script:l});export{u as t};