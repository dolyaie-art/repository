# Donesh Olyaie — Design System

A personal brand system for **Donesh Olyaie**, a brand strategy and marketing leader
(Brand Director at Petlibro; previously Head of Strategy at MullenLowe US, Director of
Marketing at Keurig Dr Pepper, EVP/Group Planning Director at Deutsch LA, Group Planning
Director at David&Goliath. MBA Michigan Ross, MFA Dramatic Criticism Yale, BA USC).

The brief, in his words: *smart, sophisticated, noble, impressive, ambitious — a child of
Y2K: graphic, image-laden, but sarcastic and witty. A cross between a blue-chip art
gallery, McKinsey, Yale, and a bit of a carnival playhouse.*

That tension is the whole system. **Everything is built as two halves in one frame:** an
immaculate hairline-ruled editorial page (the gallery, the consultancy, the seminar room)
interrupted by exactly one loud thing (the carnival) — an acid starburst, a cyan brush
word, a shrug emoticon in a 40px headline, a mesh gradient that has no business being
there. Remove the interruption and it's a McKinsey deck. Remove the discipline and it's a
Tumblr. The brand lives only when both are present and one of them is outnumbered.

---

## Sources this system was built from

Everything here is derived from material the user supplied. There is **no codebase, no
Figma file and no existing website** for this brand — if one exists, attach it and this
system should be re-derived against it.

| Source | What it gave us |
| --- | --- |
| `uploads/Slide*.webp` — 21 spreads of *"A Guide to Culture in Chaos"*, a cultural trend report published under "the projects\*" | The entire visual language: type registers, colour, grid, collage behaviour, textures, tone of voice. This is the ground truth. |
| `uploads/Donesh Olyaie Resume 6.26.pdf` | Biography, career history, education, the content used throughout the UI kit and slides. |
| `uploads/images.jpg`, `uploads/W1siZiIs….jpg`, `uploads/Catalog-cover-style-El-Lissitzky-Bauhaus-Asymmetric.webp` | Three El Lissitzky plates (*Beat the Whites with the Red Wedge*, *New Man* from the Figurines portfolio, and the 1919–23 Moscow catalogue cover) — supplied as the compositional reference for asymmetry, diagonal type and flat planes. |

**No logo exists.** The deck carries "the projects\*" — an agency mark, not Donesh's. Per
the no-invented-marks rule, nothing has been drawn. Wherever a mark would go, the system
sets **Donesh Olyaie** in Archivo Light 300 with a mono superscript asterisk, a direct
structural borrow from the deck's own wordmark treatment. If a real mark exists, drop the
SVG into `assets/` and replace the type lockup in `ui_kits/personal_site/shell.jsx`,
`thumbnail.html` and `slides/01-cover.html`.

---

## Index

| Path | What's in it |
| --- | --- |
| `styles.css` | Entry point — `@import`s only. Link this one file. |
| `tokens/` | `fonts.css` `colors.css` `typography.css` `spacing.css` `borders.css` `elevation.css` `motion.css` `textures.css` |
| `components/` | React primitives in four groups — see below |
| `guidelines/` | 20 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `slides/` | 10 slide types, 1440×1080, recreating the source deck's layout system |
| `templates/trend-report/` | `TrendReport.dc.html` — a 7-slide starting deck for consuming projects |
| `ui_kits/personal_site/` | Click-through recreation of donesholyaie.com (6 screens) |
| `assets/` | `imagery/` `textures/` `shapes/` `lettering/` `reference/` |
| `SKILL.md` | Agent Skills front-matter for use in Claude Code |

### Components

Four groups, fourteen primitives. No source component library existed, so this is an
authored set sized to what the brand actually does — an editorial argument machine, not a
general-purpose app kit. There is deliberately **no** Toast, Avatar, Modal, Accordion or
Tabs: nothing in the source uses them, and inventing them would be a lie about the brand.

| Group | Components |
| --- | --- |
| `components/core/` | **Button**, **Eyebrow**, **Tag**, **Rule**, **MarginLabel** |
| `components/editorial/` | **DisplayTitle**, **ShiftPair**, **PullQuote**, **Takeaway**, **Footnote** (+ `FootnoteMark`) |
| `components/media/` | **PhotoPlate**, **TextureField** |
| `components/data/` | **ComparisonTable**, **StatBlock** |

Each directory has a `@dsCard` HTML showing every variant, and each component has a
`.d.ts` props contract and a `.prompt.md` with a usage example.

**Intentional additions:** `MarginLabel` and `ShiftPair` are not "standard" primitives,
but both appear on nearly every spread of the source deck and are structural to the brand,
so they are promoted to components rather than left as one-off layout.

---

## Content fundamentals

### Voice
Donesh writes like a critic who went to business school — because he did (MFA Dramatic
Criticism, Yale; MBA, Michigan Ross). The register is **analytical, declarative and
slightly amused**. Sentences are complete and properly punctuated. The joke is never in
the punctuation; it is in the noticing.

**Person.** The report voice is first-person plural — "we're witnessing an evolution
towards counsel culture", "Welcome to culture in chaos." It implicates the reader rather
than lecturing them. Second person appears only when the observation is uncomfortably
specific: *"To be conspicuously busy today is to show you are behind the times."* First
person singular is reserved for the personal site ("I find the why behind the what").

**Sentence shape.** Long, evidenced sentence → short verdict. Example:

> Although seemingly beneficial, the end goal of our self-care rituals was ultimately part
> of a vicious cycle: to become more high-functioning and productive. **Like its cousin
> 'work-life balance', the self-care movement was inseparably tied to our own personal
> optimization, often disguised in zen packaging.**

**The signature constructions.** Learn these four; they carry most of the brand:

1. **From X to Y** — always near-rhymes or shares a stem. *Cancel Culture → Counsel Culture. Self-Care → Self-Aware. Spectacle → Strategic.* The wit lives entirely in the swap.
2. **"X, not Y"** — the prescriptive close. *Champion progress, not perfection. Add value, not annoyance. Offer inspiration, not aspiration.*
3. **The flat punchline in sans.** A serif paragraph builds the case; a sans line delivers the verdict. *"Cancel culture isn't working." "Screen time is inevitable." "Sweatpants are not the future."*
4. **The sourced provocation.** A number, then where it came from. Never a number alone.

**Humour.** Dry, self-aware, occasionally filthy about the culture it is describing —
*"purchasing vagina candles"*, *"weddings, funerals, and cybersex"*, *"(or college ex if
you're single)"*. It is never punching down and never a pun for its own sake. The deck's
one emoticon — `¯\_(ツ)_/¯` — is set at headline size in the grotesque, deadpan, exactly
once. That is the model: **one joke, played completely straight, at full size.**

**Casing.** Section slugs and all apparatus are UPPERCASE MONO with 0.14em tracking
(`INSIGHT ONE`, `TAKEAWAY:`, `NEW MINDSET`). Headlines are sentence case. From/To terms
are Title Case. Buttons are uppercase mono, 1–3 words.

**Emoji: no.** Not one appears in 21 spreads. Unicode *typography* does — the em-dash as a
rhythm device (`The—Why—Behind—The—What`), the shrug kaomoji, the superscript footnote
mark, the arrow `→`. Those are typesetting, not decoration.

**Never write:** "unlock", "leverage", "supercharge", "game-changing", "in today's
fast-paced world", "we're excited to announce". Nothing that sounds like a press release.
No stat without a source — an unattributed number is data slop and the brand's entire
credibility argument collapses with it.

---

## Visual foundations

### Colour
Two palettes doing opposite jobs.

**Ink & paper** (`--ink-900` #0d0c0c through `--ink-000` #ffffff, with a warm
`--ink-050` #f7f5f0 and a photographic mid-grey `--ink-400` #7c776b). The near-black is
*warm* — #0d0c0c and #1c1a1b, never a cool #000. This half carries all body copy, all
rules and 80% of surface area.

**Chroma** — every value sampled pixel-for-pixel out of the deck: `--acid` #ffed4f (the
starburst), `--amber` #ffcf00, `--chartreuse` #fcfc06, `--cyan` #01ffff, `--teal` #26bcbe,
`--cobalt` #3563c4, `--coral` #f97a63, `--rose` #ff7f76, `--vermilion` #fe0702 (the
Lissitzky red), `--terracotta` #c95f42, `--oat` #e2d5b2 (Lissitzky paper stock).

**Rules.** Maximum two background colours per document. Chroma arrives as a *whole field*
— a full-bleed split, a full-bleed gradient, a whole starburst — never as a tint, a
5%-opacity wash, or a coloured left border on a card. Cobalt is the type colour on chroma
fields and the hover colour everywhere. Acid is an alarm: one per screen, maximum.

### Type
Five registers, each with a job. All six faces are **Google Fonts substitutes** — see
*Substitutions* below.

| Token | Face | Job |
| --- | --- | --- |
| `--font-display` | Instrument Serif | The gallery wall label. Thesis statements, From/To terms, contents. |
| `--font-serif` | Spectral | The sustained argument. All body copy. |
| `--font-sans` | Archivo | The flat assertion, quotations, captions, all interface copy. |
| `--font-mono` | Space Mono 700 | All apparatus: slugs, running heads, table headers, footnotes, buttons. |
| `--font-fat` | Bagel Fat One | The joke. Fat retro italic display. |
| `--font-marker` | Permanent Marker | The handwritten interruption. |

Scale runs 132/96/64/48 display → 34 headline → 28/22 title → 19/17/15 body → 13/12/10
apparatus. Display tracking is −0.018em; mono tracking is +0.14em. Never bold the display
serif; never letterspace the serif body.

### Layout
Asymmetric halves, not a symmetric grid. The canonical spread is **one side picture, one
side argument** — and the picture side is frequently full-bleed to the trim while the
argument side keeps a 64px margin. Section slug centred at the top; vertical running heads
pinned to both outer margins; takeaway box anchored bottom-right. Page margin 64px,
gutter 48px, measure 62ch serif / 54ch sans. Slides are 1440×1080 (4:3, as the source
deck); web is max-width 1440 and must reflow below that.

### Backgrounds & texture
Backgrounds are **printed matter, never CSS effects**. Every ground in `assets/textures/`
is a crop lifted out of the source deck: fine black halftone, cyan halftone, photographic
grain, holographic moiré, 1-bit dither (aerial and portrait), a warped wireframe grid. The
brand owns exactly one gradient — `--gradient-chaos`, coral → amber → chartreuse → teal →
cobalt. **Never a blue/purple SaaS gradient.** Full-bleed or not at all.

### Imagery
Documentary, unstyled, a little awkward. Real rooms, real streets, product photographed
badly on purpose, high-contrast black-and-white reportage, warm domestic daylight.
Slightly cool, slightly green digital colour — not graded, not glossy. **No stock smiles.**
Photographs are *placed*, not inserted: square crops or 3:4 portraits, rotated between
−5.5° and +7.5°, with a soft `--shadow-plate` drop so they read as prints pasted onto the
page. Vary the angle across a group; three plates at the same rotation looks like a bug.

### Borders, corners, cards
The system is square. `--radius-none` is the default and almost the only value; roundness
exists for exactly two shapes — the **circle** (annotation bubbles, the "Integration"
ellipse) and the **pill** (status chips in interface work only). Lines are 1px, 1.5px or
2.5px solid black; dotted 1.5px is the hand-drawn aside.

**Cards have no shadow, no border and no radius.** Grouping is done with a hairline rule
above and generous space below. The only shadow in the system is `--shadow-plate` under a
rotated photograph — that is a physical paste-up shadow, not a UI elevation. There are no
"protection gradients": type over imagery is placed in a quiet part of the frame, or the
frame is replaced. A `dim` scrim exists on `TextureField` for emergencies only.

### Transparency & blur
**Neither, essentially.** No frosted glass, no backdrop blur, no translucent panels. The
deck achieves its depth with opaque overlap and halftone screens. The one legitimate
transparency is a texture at reduced opacity as a full-bleed ground (see
`slides/02-contents.html`, dither at 0.45).

### Motion & states
Print-literate: things **cut, wipe and settle. Nothing bounces, ever.** Durations 90 /
160 / 240 / 520 / 780ms. `--ease-cut` (.85,0,.15,1) for slide changes and wipes;
`--ease-settle` (.16,.84,.26,1) for plates landing; `--ease-editorial` (.2,.8,.2,1) for
everything else. Reduced-motion zeroes all of them.

- **Hover** — ink swaps to cobalt, or a solid fill inverts to its opposite. Never a tint, never a lift, never a shadow.
- **Press** — 1px downward nudge at 90ms. No scale, no ripple.
- **Focus** — 2px cobalt outline at 2px offset, square corners. On ink grounds it becomes acid.
- **Disabled** — 32% opacity, no colour change.
- **Selection** — acid background, ink text.

### Iconography
**There is no icon set, and that is a deliberate finding, not a gap.** Twenty-one spreads
of source material contain zero UI icons, zero pictograms and zero emoji. The brand's
entire "iconography" is four things:

1. **Typographic marks** used as icons — `→` (progression), `+` (the equation in a summary cell), `—` (rhythm), superscript numerals (citation), `*` (the wordmark's asterisk).
2. **Cut-out shapes** — `assets/shapes/starburst.png` (the acid star, lifted from the deck) and `assets/shapes/marbled-disc.png` (circular type on a marbled ground). These are photographic objects, not vectors.
3. **Hand-brush lettering** — `assets/lettering/brush-categories.png`, the dry-brush "TECH / FASHION / RETAIL / TRAVEL" from the industry divider.
4. **Hairline geometry** — a rectangle around the old idea, an ellipse around the new one; tick marks bracketing a running head.

**If a project genuinely needs UI icons** (an app, a settings screen), use
[Lucide](https://lucide.dev) at 1.5px stroke, square caps, 20px or 24px, in `currentColor`
— it is the closest CDN-available match to the system's hairline weight. **Flag it as a
substitution:** nothing in the source authorises an icon set, so any icon is an addition
to the brand, not an expression of it. Never hand-roll an SVG glyph to stand in for one.

---

## Substitutions — needs the user's input

The source deck uses licensed retail typefaces. Nearest Google Fonts equivalents are
loaded in `tokens/fonts.css`; every one of these is an approximation.

| System token | Loaded substitute | What the deck appears to use |
| --- | --- | --- |
| `--font-display` | Instrument Serif | A Canela / Signifier / GT Sectra-class high-contrast display serif |
| `--font-serif` | Spectral | A Tiempos Text / Lyon Text-class editorial serif with oldstyle figures |
| `--font-sans` | Archivo | A Helvetica Now / Neue Haas Unica-class neo-grotesque |
| `--font-mono` | Space Mono | A GT America Mono-class label mono |
| `--font-fat` | Bagel Fat One | Cooper Black Italic (or similar fat retro italic) |
| `--font-marker` | Permanent Marker | A dry-brush marker, hand-lettered |

**If you have the licensed font files, send them.** Drop the `.woff2` binaries into
`assets/fonts/`, replace the Google `@import` in `tokens/fonts.css` with `@font-face`
rules, and the whole system snaps to the real thing without another change.
