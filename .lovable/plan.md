

# Blue Gradient Waves Background

Replace the flat black background with a dark-to-blue wavy gradient across the page.

## Approach

1. **Update CSS variables** in `src/index.css`: shift `--background` from pure black `0 0% 0%` to a deep dark blue like `220 40% 3%`, and adjust `--card`, `--secondary`, `--muted`, `--border`, `--input` to complementary dark blue tones.

2. **Add a wavy gradient body background** using CSS — a multi-stop `background` with layered radial or linear gradients in dark navy/blue tones (`#030712`, `#0c1a3d`, `#091638`) to create organic flowing depth. Use `background-size` and `background-position` to simulate wave-like color bands across the page.

3. **Add a decorative SVG wave divider** between major sections (Hero → Stats, Stats → Mission, etc.) using inline SVG `<path>` elements with soft blue fill colors, creating visible wavy transitions.

4. **Keep foreground white** — all text, icons, and the liquid-glass effect stay white/monochrome so content remains readable against the blue background.

## Files Changed
- `src/index.css` — updated CSS variables + wavy gradient background styles
- `src/pages/Index.tsx` — optional SVG wave dividers between sections

