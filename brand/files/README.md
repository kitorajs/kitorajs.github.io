# Kitora brand

Kitora's logo, colours and the image set the site and the repo use (direction "Parts", chosen 2026-11-19). This folder is the source: the site serves copies of the web set from `public/` (`task -t brand/Taskfile.yml public` refreshes them), and the README header comes from here.

## The mark

Four primitives (two squares, an accent circle and a quarter round) snapped into one tile, on a 32-unit grid: two 13-unit cells per side, a 2-unit margin and the same 2-unit gap between every pair of parts.

Refinement from the explored version:

- Weight: the squares carry a softer 4.5-unit corner radius, which brings their mass down towards the lighter blue circle, and the circle and the quarter round now have exactly the same area (both fill a 13-unit cell).
- Gaps: every gap is exactly 2 units, horizontal, vertical and between the round parts.
- Quarter round: its centre moved to the bottom-left of its cell, so the curve faces the circle above it, as if the parts were about to snap together.
- Wordmark: the letters are filled outline paths now (no strokes, no font), so every export is shape-only. The K is one outline; the o and the bowl of the a are rings drawn with `fill-rule="evenodd"`.

`mark-16` is redrawn on a 16 px pixel grid (6 px cells, 1 px margin, 2 px gap) so every edge lands on a pixel; `favicon.svg` is that grid with its dark colours inside a `prefers-color-scheme` media query (checked in Chrome with dark mode forced).

## Usage

- **Clear space:** one cell (13 of the mark's 32 units, about 40 % of the mark's width) on every side; for the wordmarks, the same distance measured from the mark.
- **Minimum sizes:** mark 16 px (use `mark-16` below 24 px); horizontal wordmark 20 px tall; stacked wordmark 48 px tall.
- **Colours:** light files on light backgrounds, `-dark` files on dark ones; `mark-mono` (Ink) and `mark-mono-white` for stamps, embossing, one-colour print and on the accent blue.
- **Do:** keep the parts' order and colours; give the mark its clear space; use the PNG exports where SVG is not accepted.
- **Don't:** recolour or reorder the parts, rotate or stretch the mark, add outlines, shadows or gradients, set "Kitora" in a font, or put the full-colour mark on a busy photo or on the accent blue.

## Colour

| Role | OKLCH | Hex | Contrast |
| --- | --- | --- | --- |
| Accent (light backgrounds) | `oklch(0.55 0.17 268)` | `#4767D3` | 5.06 : 1 on white (AA text) |
| Accent dark (dark backgrounds) | `oklch(0.74 0.12 268)` | `#8AA8F7` | 7.78 : 1 on Ink (AA, AAA) |
| Ink (neutral, dark background) | `oklch(0.20 0.015 265)` | `#13161D` | 18.10 : 1 on white |
| Paper (light surface, mark structure on dark) | `oklch(0.97 0.005 265)` | `#F3F5F9` | 16.58 : 1 with Ink |

A cool cobalt blue reads as precise and calm without the saturation of "startup blue", and it stays apart from the design languages Kitora switches between, so the brand never fights a theme. Ink carries the structure of the mark, so the accent stays a highlight; both share hue 265–268, so neutral and accent feel like one family.

## Files

| File | What |
| --- | --- |
| `mark.svg`, `mark-dark.svg` | The mark, 32-unit grid, light and dark |
| `mark-16.svg`, `mark-16-dark.svg` | Pixel-tuned 16 px mark |
| `mark-mono.svg`, `mark-mono-white.svg` | Single-colour mark (Ink, white) |
| `wordmark.svg`, `wordmark-dark.svg` | Horizontal wordmark (156 × 52 units) |
| `wordmark-stacked.svg`, `wordmark-stacked-dark.svg` | Stacked wordmark |
| `favicon.svg` | 16 px grid with a built-in dark variant |
| `favicon.ico` | 16, 32 and 48 px (16 from the pixel grid, 32 and 48 from the main mark) |
| `apple-touch-icon.png` | 180 × 180, full-bleed Ink (iOS rounds the corners) |
| `icon-192.png`, `icon-512.png` | Rounded Ink tile, mark at 62 % |
| `icon-512-maskable.png` | Full-bleed Ink, mark at 50 % inside the 80 % safe circle |
| `site.webmanifest` | name Kitora, `theme_color` `#4767D3`, `background_color` `#13161D` |
| `og-image.svg`, `og-image.png` | 1200 × 630 Open Graph image |
| `github-social.png` | 1280 × 640 repo social preview |
| `readme-header.svg`, `readme-header-dark.svg` | 880 × 200, transparent background |
| `src/*.svg` | Sources for the PNG exports (app icons, GitHub social) |

The mark and wordmark files are shape-only. Four files set the tagline "React UI built from primitives up" as SVG text in a system font stack: `og-image.svg`, `src/github-social.svg` and the two README headers. The PNGs were rendered from them in Chrome on macOS. If the README header has to look identical on every machine, the tagline can be dropped from the SVG and written as markdown under the image instead.

README usage:

```html
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="brand/readme-header-dark.svg">
  <img alt="Kitora: React UI built from primitives up" src="brand/readme-header.svg" width="880">
</picture>
```

## Where the site uses it

- `public/favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `icon-512-maskable.png`, `site.webmanifest` and `og-image.png` are copies of the files here (`task -t brand/Taskfile.yml public`).
- The header logo (`src/components/brand-logo.tsx`) draws `wordmark.svg` inline, with Ink and the accent swapped for Paper and the dark accent in the dark theme, so it follows the site's theme switch rather than the system's.
- The UI's own accent (`--primary` in `src/styles.css`, `@kitora/theme`'s `DEFAULT_BRAND`) is the brand cobalt at L 0.50 (`#3A58C3`) in light mode, where text in it must also read on its own 15% tint, and exactly the dark accent `#8AA8F7` in dark mode. The logo and the images keep `#4767D3`.
- `screenshots/` holds the README screenshots (`task -t brand/Taskfile.yml screenshots -- <dev server URL>`).

