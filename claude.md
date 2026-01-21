# Model Society Project Reference

## Project Status Summary

**What Adrial has prepared for the rebuild:**
- Defined complete "light mode" color palette (#f9f9f9 background, #ffffff cards, #EA1C33 brand red, gray cascade)
- Provided Gotham font files (Bold + Medium) for self-hosting & configured Adobe Fonts (TypeKit) for Minion Pro
- Created the static Figma designs (dark mode as layout reference, to be translated into "light mode" colors above)
- Shared the working static HTML/CSS/JS prototypes in Webflow with desktop + mobile responsive layouts
- Provided screenshots of all page implementations
- Ingested all of Konstantin's SOP documentation (deployment, infrastructure, troubleshooting)

**Design translation approach:** Use dark mode Figma/Webflow designs as layout and interaction reference, but implement in light mode using the specified color palette. Maintain the high-end, luxury art gallery aesthetic.

---

## Seed Data (from Live API)

Real data fetched from Konstantin's API for Phase 1 mock data and future Supabase seeding.

**Location:** `data/seed/`

| File | Records | Description |
|------|---------|-------------|
| `galleries-featured.json` | 5 | Featured galleries with preview images |
| `galleries-public.json` | 10 | Public galleries |
| `images-featured.json` | 12 | Featured images |
| `images-showcase.json` | 75 | Showcase/hero images |
| `members-featured.json` | 7 | Featured members |
| `members-newest.json` | 20 | Newest members |

**Usage:**
- Phase 1: Import as hardcoded mock data
- Phase 3: Use as seed data for Supabase tables
- Testing: Generate additional fake records based on these real data shapes

**Database Schema:**
- Full SQL Server schema provided: `reference/from-Konstantin/modelsociety-sql-db.sql`
- Key tables for Phase 1: Members (UUID PK), Galleries, GalleryImages, Images, ImageThumbnails
- Supporting tables: Categories, Collaborations, Comments, FeaturedImages

---

## Quick Start (New Nuxt Frontend)

```bash
yarn install
yarn dev
```

---

## New Frontend Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Nuxt 3 (latest) |
| Language | TypeScript (strict) |
| UI Library | Vuetify 3 (Material Design) |
| State | Pinia |
| Runtime | Node.js LTS (latest) |
| Package Manager | npm (yarn not available) |
| Linter/Formatter | Biome |
| Backend/Database | Supabase (Postgres + Auth + Storage + Realtime) |

**Why Supabase:**
- Modern serverless architecture (no server management)
- Built-in auth with multiple providers
- Real-time subscriptions (great for comments/notifications)
- File storage with CDN for images
- Row-level security for data protection
- TypeScript SDK pairs perfectly with Nuxt
- Generous free tier, scales well

**Version Policy: Always use the latest stable versions of all libraries and frameworks.**

---

## Vuetify Configuration

### Treeshaking
Vuetify is configured with treeshaking via `vite-plugin-vuetify` to minimize CSS bundle size:
- Only component styles that are used are included
- Vuetify utilities (`$utilities`) are **disabled** in `vuetify-settings.scss`
- Do NOT import `'vuetify/styles'` directly - let the plugin handle it

### Important: No Vuetify Display Utilities
Since utilities are disabled for bundle size, **do NOT use Vuetify display classes** like:
- `d-none`, `d-flex`, `d-md-none`, `d-md-flex`, etc.

Instead, use CSS media queries:
```scss
.my-element {
  display: none;

  @media (min-width: 960px) {
    display: flex;
  }
}
```

### Breakpoints for Media Queries (Custom)

**Note:** We use custom breakpoints that differ from Vuetify defaults for better tablet coverage:

| Breakpoint | Max-width | Usage |
|------------|-----------|-------|
| Mobile | 599px | Phone portrait |
| Tablet | 1199px | Tablets and small laptops |
| Desktop | >1199px | Full desktop experience |

```scss
// Mobile-first example
.element {
  height: 8rem;  // mobile default

  @media (min-width: 600px) {
    height: 10rem;  // tablet
  }

  @media (min-width: 1200px) {
    height: 19rem;  // desktop
  }
}

// Desktop-first example (current approach)
.element {
  height: 19rem;  // desktop default

  @media (max-width: 1199px) {
    height: 10rem;  // tablet
  }

  @media (max-width: 599px) {
    height: 8rem;  // mobile
  }
}
```

---

## MCP Tools

| Tool | Purpose |
|------|---------|
| `context7` | Verify documentation for libraries. Use before implementing new dependencies. |
| `playwright` | Test critical user flows. Use for E2E testing of auth, payments, forms. |

---

## Brand Guidelines (Light Mode)

### Colors
| Token | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| `background` | `#f9f9f9` | `--color-background` | Main page background |
| `surface` | `#ffffff` | `--color-surface` | Card backgrounds |
| `primary` | `#EA1C33` | `--color-primary` | Brand red (buttons, accents, logo "S") |
| `text-primary` | `#1b1c1d` | `--color-text-primary` | Darkest gray - headings, primary text |
| `text-secondary` | `#69717a` | `--color-text-secondary` | Medium gray - secondary text |
| `text-tertiary` | `#969ba2` | `--color-text-tertiary` | Light gray - tertiary/muted text |
| `border` | `rgba(0,0,0,0.08)` | `--color-border` | Subtle borders and dividers |

### Typography
| Style | Font | Source | CSS Variable | Usage |
|-------|------|--------|--------------|-------|
| Headlines | Minion Pro Display | Adobe Fonts (TypeKit: `cyl0lez`) | `--font-headline` | Page titles, section headers |
| Sans-serif | Proxima Nova | Adobe Fonts (TypeKit: `cyl0lez`) | `--font-sans` | Body text, buttons, labels |

**Typography Classes:**
- `.text-headline` - Minion Pro Display, weight 400, line-height 1.2
- `.text-eyebrow` - Proxima Nova, weight 700, uppercase, letter-spacing 0.05em
- `.text-caption` - Proxima Nova, weight 500

**Heading Hierarchy (all use `--font-headline`):**
| Element | Size | Usage |
|---------|------|-------|
| H1 | 4rem | Page titles |
| H2 | 2.5rem | Section titles, card titles |
| H3 | 1.75rem | Subsections |
| H4 | 1.25rem | Minor headings |
| H5 | 1rem | - |
| H6 | 0.875rem | - |

### Fluid Typography

The site uses fluid typography that scales all rem-based sizes proportionally based on viewport width:

| Viewport | Base Font Size |
|----------|----------------|
| 2400px+ | ~20px |
| 1920px | ~18px |
| 1440px | ~16px |
| 480px | ~19px |
| 320px | ~18px |

This is implemented in `main.scss` using CSS custom properties and the formula from Finsweet's fluid design generator.

**Note:** Mobile sizes (≤480px) were increased from 12-14px to 18-19px because text was too small on phones.

### Logo
- File: `reference/ms-logo.svg`
- "MODEL" in dark gray (#1b1c1d), "S" in brand red (#EA1C33), "OCIETY" in dark gray

---

## Button Design System

Reference: `reference/Adrial-dark-mode-designs/button-styles.jpg`

### Button Types

| Type | Background | Text | Border | Hover | Active |
|------|------------|------|--------|-------|--------|
| **Primary** | `#EA1C33` (brand red) | White | None | `#c8162b` | `#a01223` |
| **Secondary** | `--color-text-primary` (dark gray) | White | None | Black | `#333` |
| **Tertiary** | `rgba(0,0,0,0.06)` (light gray) | `--color-text-primary` | None | `rgba(0,0,0,0.1)` | `rgba(0,0,0,0.15)` |
| **Text-only** | Transparent | `--color-text-primary` | None | `--color-primary` | `#a01223` |

### Button Sizes

| Size | Padding | Font Size | Border Radius |
|------|---------|-----------|---------------|
| **Large** | `0.875rem 1.75rem` | `0.875rem` | `8px` |
| **Small** | `0.5rem 1.25rem` | `0.7rem` | `9999px` (pill) |

### Button Variants
Each button can have:
- No icon
- Icon on the right
- Icon on the left

### Usage
```vue
<!-- Large Primary -->
<button class="btn btn--primary btn--large">
  <span class="btn__text">BUTTON</span>
</button>

<!-- Small Secondary with icon -->
<button class="btn btn--secondary btn--small">
  <span class="btn__text">BUTTON</span>
  <v-icon size="14">mdi-arrow-right</v-icon>
</button>
```

### Button Showcase Page
Visit `/buttons` to see all button variants with hover/pressed states.

---

## Filter Chips (BaseChip)

Used for category filters, tags, etc.

| Property | Value |
|----------|-------|
| Border Radius | `9999px` (pill) |
| Padding | `0.5em 1.25em` |
| Font Size | `0.7rem` |
| Font Weight | 700, uppercase |
| **Inactive** | Light gray background `rgba(0,0,0,0.06)`, `--color-text-secondary` text |
| **Active** | `--color-text-primary` background, white text |

Filter containers should horizontally scroll on mobile instead of wrapping.

---

## Component Patterns

### GalleryStats
Displays image count, views, and comments with icons.

- Icons use **filled** versions: `mdi-image`, `mdi-eye`, `mdi-comment`
- Each icon is wrapped in a container with:
  - Background: `rgba(0, 0, 0, 0.04)`
  - Border radius: `6px`
  - Fixed size: `1.75rem x 1.75rem`
- Numbers match filter chip font style: `0.7rem`, weight 700, letter-spacing 0.05em

### GalleryCard
- Title: H2, `2.5rem` (1.75rem on mobile)
- Curator: BaseAvatar (sm) + "Curated by" text
- Stats: GalleryStats component
- Images: Horizontal scroll strip
- **Desktop**: "VIEW GALLERY" button overlay on images (large primary, 8px corners, `pointer-events: none`)
- **Mobile/Tablet** (≤959px): "VIEW GALLERY" button below stats (small secondary)

### BaseAvatar
- Displays user avatar image or fallback initials
- Sizes: `sm` (32px), `md` (40px), `lg` (64px)
- Variants: `circle` (default), `portrait` (23:32 aspect ratio, 4px border-radius)
- Fallback: Gray background with white initials

### GalleryImageCard
Used on Gallery Detail page to display a single image in the feed.

- Full-width image with link to image detail
- Credits row below image:
  - "PHOTOGRAPHER:" label + name link (red)
  - "MODEL:" label + name link (red, optional)
- Actions row (right-aligned):
  - Heart icon button (circular, tertiary style)
  - "Remove from gallery" button (owner only, tertiary + delete icon)

### GalleryThumbnailGrid
Displays a grid of clickable thumbnails at top of Gallery Detail main content.

- Dark background (`--color-text-primary`)
- CSS Grid with `auto-fill`, `minmax(5rem, 1fr)` columns
- 0.5rem gap between thumbnails
- "SHOW ALL (count)" button at bottom-right (tertiary style)
- Responsive: smaller thumbnails on tablet/mobile

### CommentsSection
Full comments UI used in sidebar (desktop) and drawer (mobile).

- Login prompt box (if not logged in): "You must be logged in..." with LOGIN/JOIN buttons
- CommentInput (if logged in): avatar + textarea + submit button
- Header row: comment icon + "X comments" count
- List of CommentThread components
- "Load More" button (if more comments exist)

### CommentThread
Single comment with recursive nested replies.

- Avatar + author name (red link) + comment text + REPLY button
- Replies indented with arrow icon (`mdi-subdirectory-arrow-right`)
- Recursive: replies can have their own replies

### CommentsDrawer
Mobile bottom sheet for comments (Vuetify `v-bottom-sheet`).

- Header with comment count + close button
- Scrollable content area with CommentsSection
- Max height: 80vh
- Rounded top corners (16px)

---

## Reference Files Structure

```
reference/
├── ms-logo.svg                          # Brand logo (light mode)
├── Gotham-Bold.otf                      # (not used - using Proxima Nova from TypeKit)
├── Gotham-Medium.otf                    # (not used - using Proxima Nova from TypeKit)
├── from-Konstantin/                     # Legacy system documentation
│   ├── Assets/                          # DB backup, configs, SSL certs
│   ├── ProdOps/                         # Infrastructure, DNS, CloudFlare docs
│   ├── How To/                          # SSL certificate updates
│   ├── Troubleshooting/                 # Website slow diagnosis
│   ├── Roadmap.docx                     # Backlog items
│   ├── Deployment Guide.docx            # Publishing procedures
│   ├── Local Dev-instance Setup.docx    # Dev environment setup
│   └── Statistics.xlsx                  # Member/image growth data
└── Adrial-dark-mode-designs/            # Design references (translate to light mode)
    ├── button-styles.jpg                # Button design system reference
    ├── from-Figma/                      # Desktop + mobile mockups
    │   ├── Home.jpg
    │   ├── Gallery overview.jpg
    │   ├── Gallery overview mobile.jpg
    │   ├── Gallery detail.jpg
    │   ├── Gallery detail mobile.jpg
    │   ├── Image detail.jpg
    │   └── Image detail mobile.jpg
    ├── modelsociety.webflow/            # Working HTML/CSS/JS implementation
    │   ├── home.html
    │   ├── galleries-overview.html
    │   ├── gallery-detail.html
    │   ├── image-detail.html
    │   ├── css/modelsociety.webflow.css
    │   └── js/webflow.js
    └── modelsociety.webflow-screenshots/ # Visual references
        ├── home.jpg
        ├── galleries-overview.jpg
        ├── gallery-detail.jpg
        ├── gallery-detail-comments_drawer.jpg
        └── image-detail.jpg
```

---

## Page Specifications

### 1. Home Page
**Status:** Webflow build incomplete, needs finishing

**Sections:**
- Hero: Horizontal scrolling image strip + tagline
- CTA buttons: "WATCH INTRO" (outline), "JOIN FREE" (red filled)
- Category filter pills (FEMALE, MALE, BLACK & WHITE, COLOR, etc.)
- **Featured Contributors** (3 cards with 3D tilt hover effect)
- Navigation buttons: ALL MODELS, ALL PHOTOGRAPHERS, ALL ARTISTS
- Footer

**Featured Contributors 3D Effect:**
- Parent has CSS perspective for 3D transforms
- Mouse move tracks X/Y position on card
- Card rotates on Y-axis (left/right) and X-axis (up/down)
- Rotation capped at ±15 degrees
- Semi-transparent white "shine" element moves opposite cursor
- Z-index handles shine overflow (not overflow:hidden)
- Result: Premium, tactile feel

### 2. Galleries Overview
**Reference:** `galleries-overview.jpg`, `Gallery overview.jpg` (Figma)

**Desktop:**
- Page title: "Curated galleries" with category pills
- Each gallery row: Left (title, curator, stats) + Right (horizontal scroll images)
- "VIEW GALLERY (n)" button overlay
- Entire row links to gallery detail

**Mobile:**
- Single preview image per gallery
- Stacked layout (info above image)
- Full-width "VIEW GALLERY" button

### 3. Gallery Detail
**Reference:** `gallery-detail.jpg`, `gallery-detail-comments_drawer.jpg`
**Route:** `/galleries/[slug]`
**Status:** ✅ Phase 1 complete (static with mock data)

**Desktop Layout (CSS Grid: `21rem 1fr`):**
- **Left sidebar** (sticky, scrollable):
  - Gallery title (H1, 2.5rem)
  - Curator row (BaseAvatar portrait + "Curated by" link)
  - GalleryStats component
  - Edit section (owner only): Edit Title, Edit Description, Delete Gallery buttons
  - "More galleries by [user]" section with linked gallery names
  - CommentsSection (login prompt + input + threads)
- **Main content:**
  - GalleryThumbnailGrid (2 rows, auto-fill columns, dark background, "SHOW ALL" button)
  - Vertical feed of GalleryImageCard components

**Mobile/Tablet (≤959px):**
- Single column layout
- Sidebar content stacks at top
- "See All Comments" button triggers CommentsDrawer (v-bottom-sheet)
- CommentsSection hidden from sidebar

**Components Used:**
- `GalleryStats` - Reused from Galleries Overview
- `BaseAvatar` - Curator avatar (variant="portrait")
- `GalleryThumbnailGrid` - New: thumbnail grid with auto-fill columns
- `GalleryImageCard` - New: image + credits row + actions
- `CommentsSection` - New: login prompt + input + threads
- `CommentsDrawer` - New: mobile bottom sheet wrapper
- `CommentThread` - New: single comment with nested replies
- `CommentInput` - New: textarea + submit button

### 4. Image Detail
**Reference:** `image-detail.jpg`

**Desktop:**
- Image fills maximum viewport (minus nav height)
- Action icons (download, edit, heart, comment) top-right
- Prev/next arrows left/right of image

**Mobile:**
- Action icons move below image in horizontal row
- Prev/next arrows below image
- Collaborator cards with follow buttons

---

## Responsive Breakpoints (Vuetify)

| Breakpoint | Range | Device |
|------------|-------|--------|
| xs | 0-599px | Mobile |
| sm | 600-959px | Tablet |
| md | 960-1279px | Small desktop |
| lg | 1280-1919px | Desktop |
| xl | 1920px+ | Large desktop |

---

## Build Phases (Detailed)

### PHASE 1: Galleries Overview Page (Static)
**Goal:** One complete page with proper structure, styling, components. No database.

#### 1.1 Project Scaffolding
- [ ] Initialize Nuxt 3 project
- [ ] Install dependencies (Vuetify, Sass, Biome)
- [ ] Configure nuxt.config.ts, tsconfig.json, biome.json
- [ ] Verify: `yarn dev` runs

#### 1.2 Theme & Typography
- [ ] Create Vuetify plugin with light theme colors
- [ ] Copy Gotham fonts to assets/fonts/
- [ ] Configure Adobe Fonts for Minion Pro
- [ ] Create typography CSS classes

#### 1.3 TypeScript Interfaces
- [ ] Create types/member.ts (MemberBrief)
- [ ] Create types/gallery.ts (GalleryPreview)
- [ ] Verify: `npx nuxi typecheck` passes

#### 1.4 Mock Data
- [ ] Create data/mock/galleries.ts with 4-6 hardcoded galleries
- [ ] Use real image URLs from production API

#### 1.5 Base Components
- [ ] BaseCard.vue (white bg, shadow, hover)
- [ ] BaseChip.vue (category pills)
- [ ] BaseAvatar.vue (circular with fallback)

#### 1.6 Gallery Components
- [ ] GalleryCard.vue (title, curator, stats, image strip)
- [ ] GalleryStats.vue (icons + counts)
- [ ] GalleryImageStrip.vue (horizontal scroll)

#### 1.7 Layout Components
- [ ] AppHeader.vue (logo, nav, auth buttons)
- [ ] AppFooter.vue (sitemap, profile section)
- [ ] layouts/default.vue

#### 1.8 Galleries Overview Page
- [ ] pages/galleries/index.vue
- [ ] Category filter chips
- [ ] Responsive behavior (desktop scroll / mobile stack)

#### 1.9 Quality Checks
- [ ] Type check passes
- [ ] Biome passes
- [ ] Visual review against Webflow reference
- [ ] Responsive testing
- [ ] Konstantin review

### PHASE 2: Additional Pages (After Phase 1 Approved)
- Home page with Featured Contributors 3D effect
- Gallery Detail with sidebar/drawer
- Image Detail with responsive controls

### PHASE 3: Supabase Integration
- Database schema design
- API composables
- Replace mock data

### PHASE 4: Authentication
- Supabase Auth
- Login/signup flows
- Protected routes

### PHASE 5: Advanced Features
- Real-time comments
- Favorites/likes
- Search
- Admin features

---

## API Reference (Konstantin's Existing API)

| Endpoint | URL |
|----------|-----|
| API Explorer | https://modelsocietyapi-prod-eyemb5c5c8c3fgf8.eastus-01.azurewebsites.net/scalar/v1 |

**Available endpoints:**
- `POST /api/auth` - Authentication
- `GET /api/galleries/public` - Public galleries
- `GET /api/galleries/featured` - Featured galleries
- `GET /api/galleries/{id}/images` - Gallery images
- `GET /api/images/featured` - Featured images
- `GET /api/images/showcase` - Showcase images
- `GET /api/members/featured` - Featured members
- `GET /api/members/newest` - Newest members

**Image URLs:** Frontend does not construct URLs. All image URLs come from API responses (encapsulates hotlink protection).

---

## Code Quality Standards

### TypeScript
- Trust the type system (no redundant runtime checks)
- Use strict mode
- Avoid `any`

### Console Logging
- No debug logs in production
- No emoji in logs
- One `console.error` per catch block

### Styling
- Use theme values, not hardcoded colors
- Use Vuetify classes over custom CSS
- Define reusable styles in shared files

### CSS Lessons Learned
- **Flex container height inheritance is unreliable**: `height: 100%` doesn't work reliably through nested flex containers. Instead of relying on percentage heights through a flex chain, set explicit heights directly on the element that needs them (e.g., set `height: 8rem` on the `<img>` itself, not on parent containers).
- **When responsive heights don't apply**: If media query heights aren't working, check if a child element has its own explicit height that overrides the parent's constraint.
- **Button height consistency**: Don't set `line-height: 1` on buttons if you want them to match other pill-shaped elements like filter chips. The default line-height allows for more consistent vertical sizing.
- **CSS treeshaking**: Vuetify CSS treeshaking works in **production builds only**, not in dev mode. In dev, all styles are included for faster hot-reload. Run `npm run build` to see actual bundle sizes.

### How to Adjust Gallery Photo Scroll Heights

The photo scroll heights must be set in **TWO files** to stay in sync:

1. **`GalleryCard.vue`** - Sets the container height (`.gallery-card__images`)
2. **`GalleryImageStrip.vue`** - Sets the actual image height (`.gallery-image-strip__image`)

**Current values:**
| Breakpoint | Container | Images |
|------------|-----------|--------|
| Desktop (>1199px) | 19rem | 19rem |
| Tablet (≤1199px) | 10rem | 10rem |
| Mobile (≤599px) | 8rem | 8rem |

**To change heights:**
```scss
// In GalleryCard.vue - update container
&__images {
  height: 19rem;  // desktop
}
@media (max-width: 1199px) {
  &__images { height: 10rem; }  // tablet
}
@media (max-width: 599px) {
  &__images { height: 8rem; }  // mobile
}

// In GalleryImageStrip.vue - update images to match
&__image {
  height: 19rem;  // desktop
  @media (max-width: 1199px) { height: 10rem; }  // tablet
  @media (max-width: 599px) { height: 8rem; }  // mobile
}
```

**Important:** Both files must have matching values or images will be clipped or scroll vertically within the container.

### Components
- Build atoms first (base/)
- Use Vuetify as foundation
- Shared layouts for consistency

### Constants
- Use constants for repeated strings
- Define enums for status fields

### Comments
- No section banners
- Explain "why", not "what"

### Error Handling
- Don't over-nest try-catch
- Use early returns
- Let errors propagate when appropriate

---

## New Page Development Workflow

When building a new page, follow this structured approach to achieve the best of both worlds: pixel-perfect fidelity to the designs while using best-practice code architecture.

### Phase 1: Visual Discovery

**Review the screenshots first** (not the code):
1. Open the relevant screenshots in `reference/Adrial-dark-mode-designs/modelsociety.webflow-screenshots/`
2. Study the overall layout, visual hierarchy, and spacing rhythm
3. Note the responsive behavior (desktop vs mobile screenshots)
4. Identify distinct UI regions and their relationships
5. **Remember:** Screenshots show dark mode—mentally translate to light mode palette

**Document your observations:**
- What are the major layout sections?
- What's the visual hierarchy (what draws the eye first)?
- How do elements relate spatially?
- What interactive states are implied?

### Phase 2: Component Inventory

**Before looking at webflow code, audit existing components:**

```bash
# Check what base components exist
ls app/components/base/

# Check what feature components exist
ls app/components/gallery/
ls app/components/comment/
# etc.

# Review existing styles
cat app/assets/styles/main.scss
```

**Create a reuse checklist:**
- [ ] Which existing components can be used as-is?
- [ ] Which existing components need minor props/slots added?
- [ ] Which existing CSS classes already handle needed styles?
- [ ] What typography classes from `main.scss` apply?
- [ ] What button variants from the button system apply?

### Phase 3: Webflow Extraction (Values Only)

**Now open the webflow HTML/CSS—but only to extract specific values:**

From `reference/Adrial-dark-mode-designs/modelsociety.webflow/`:
1. Open the relevant `.html` file
2. Open `css/modelsociety.webflow.css`

**Extract these specific values:**
| Value Type | What to Look For | Example |
|------------|------------------|---------|
| Spacing | `padding`, `margin`, `gap` | `padding: 1.5rem 2rem` |
| Sizing | `width`, `height`, `max-width` | `max-width: 21rem` |
| Typography | `font-size`, `line-height`, `letter-spacing` | `font-size: 0.7rem` |
| Layout | `grid-template-columns`, `flex` ratios | `grid-template-columns: 21rem 1fr` |
| Borders | `border-radius`, `border-width` | `border-radius: 8px` |
| Breakpoints | `@media` query values | `max-width: 959px` |

**Do NOT extract:**
- Class naming conventions
- HTML structure/nesting patterns
- CSS organization approach
- Component boundaries (webflow doesn't componentize)

### Phase 4: Architecture Planning

**Design the component tree from scratch:**

Think about:
1. What's the most semantic HTML structure?
2. Where are the natural component boundaries?
3. What props make components flexible but not over-engineered?
4. How can styles be shared via CSS classes vs component props?

**Apply these principles:**

| Principle | Good | Bad |
|-----------|------|-----|
| Component granularity | One clear responsibility | Mega-component with many concerns |
| Props | Essential configuration only | Props for every style variation |
| CSS | Shared classes in `main.scss` | Duplicate styles in each component |
| Nesting | Flat when possible | Deep nesting matching webflow structure |
| Naming | Semantic (`.gallery-stats`) | Presentational (`.flex-row-gap-4`) |

### Phase 5: Implementation Order

**Build in this sequence:**

1. **Shared styles first**: Add any new utility classes or patterns to `main.scss`
2. **Base components**: Create/extend `base/` components if needed
3. **Feature components**: Build feature-specific components (smallest to largest)
4. **Page composition**: Assemble components in the page file
5. **Responsive refinement**: Add breakpoint-specific adjustments

### Phase 6: Quality Checklist

Before considering a page complete:

**Visual fidelity:**
- [ ] Matches screenshot layout at desktop width
- [ ] Matches screenshot layout at mobile width
- [ ] Spacing/sizing values match webflow extraction
- [ ] Light mode colors correctly applied

**Code quality:**
- [ ] No duplicate styles (check if `main.scss` has what you need)
- [ ] No duplicate components (check existing components first)
- [ ] Component props are minimal and purposeful
- [ ] CSS uses project conventions (BEM-ish naming, theme variables)
- [ ] TypeScript types are defined and used

**Responsive behavior:**
- [ ] Uses project breakpoints (599px, 1199px)
- [ ] Mobile-specific interactions work (drawers, collapsed sections)
- [ ] No horizontal scroll on mobile (unless intentional)

### Anti-Patterns to Avoid

| Anti-Pattern | Why It's Bad | Better Approach |
|--------------|--------------|-----------------|
| Copying webflow class names | Creates inconsistent naming | Use project BEM conventions |
| Matching webflow HTML nesting | Over-nested, hard to maintain | Flatten structure, use CSS grid/flex |
| One-off inline styles | Not reusable, hard to maintain | Add to `main.scss` if used 2+ times |
| New component for every element | Component explosion | Use slots, CSS classes, or composition |
| Hardcoded colors/fonts | Breaks theme system | Use CSS variables from theme |
| Responsive classes from webflow | Doesn't match our breakpoints | Use our standard media queries |

---

## Nuxt Project Structure

```
modelsociety-nuxt/app/
├── assets/
│   └── styles/
│       └── main.scss       # Global styles, button system, typography
├── components/
│   ├── base/               # BaseCard, BaseChip, BaseAvatar
│   ├── common/             # AppHeader, AppFooter
│   ├── comment/            # CommentInput, CommentThread, CommentsSection, CommentsDrawer
│   ├── gallery/            # GalleryCard, GalleryStats, GalleryImageStrip, GalleryImageCard, GalleryThumbnailGrid
│   ├── member/             # (Phase 2+)
│   └── image/              # (Phase 2+)
├── composables/            # useApi, useAuth (Phase 3+)
├── data/
│   └── mock/
│       ├── galleries.ts    # Galleries overview mock data
│       └── galleryDetail.ts # Gallery detail mock data
├── layouts/
│   └── default.vue         # Main layout
├── pages/
│   ├── index.vue           # Home (redirects to /galleries)
│   ├── buttons.vue         # Button showcase page
│   └── galleries/
│       ├── index.vue       # Galleries overview
│       └── [slug].vue      # Gallery detail
├── plugins/
│   └── vuetify.ts          # Theme configuration
├── stores/                 # Pinia stores (Phase 3+)
├── types/
│   ├── index.ts            # Re-exports
│   ├── gallery.ts          # GalleryPreview, GalleryImage, GalleryDetail, Comment, GalleryLink
│   └── member.ts           # MemberBrief, MemberType
├── biome.json
├── nuxt.config.ts
└── tsconfig.json
```

---

## Development Commands

```bash
yarn dev             # Start dev server
yarn build           # Production build
yarn lint            # Run Biome linter
yarn format          # Run Biome formatter
yarn check           # Run Biome check (lint + format)
npx nuxi typecheck   # Type check
```

---

## Pre-Commit Checklist

- [ ] No `console.log` debug statements
- [ ] No hardcoded colors - use theme values
- [ ] No unused variables or props
- [ ] No `any` types without justification
- [ ] `npx nuxi typecheck` passes
- [ ] `yarn check` passes (Biome)
- [ ] Components follow base/common/feature organization
- [ ] Used `context7` MCP to verify docs for new libraries
- [ ] Critical flows tested with `playwright` MCP

---

# Legacy System Reference

The following sections document the existing ASP.NET/Angular system (from Konstantin's documentation).

## Overview

Model Society is a community web application hosted on Azure, using ASP.NET with SQL Server databases and Azure Storage for images. The application includes a legacy Venuiti CMS component (binary-only, no source code).

## Legacy Technology Stack

- **Backend**: ASP.NET (.NET Framework 4.7.2)
- **Frontend**: Angular (built with yarn)
- **Database**: Azure SQL Server
- **Storage**: Azure Blob Storage (images)
- **CDN/Security**: CloudFlare
- **Image Processing**: WebJobs (with imgproxy on DigitalOcean planned)
- **Hosting**: Azure App Services

## URLs

| Environment | URL |
|-------------|-----|
| Production | https://modelsociety.com |
| Production Preview | https://modelsocietyweb-prod-preview.azurewebsites.net |
| Staging | https://modelsocietyweb-stage.azurewebsites.net |
| Documentation | https://modelsociety.atlassian.net/ |

## Azure Infrastructure

### Resource Groups
- **PROD** - Production resources
- **STAGE** - Staging resources
- **DevResources** - Developer instance resources

### App Service Plans
| Plan | Purpose | Cost |
|------|---------|------|
| ModelSocietyWeb-PROD | Production web app (P2v2) | $292/mo |
| ModelSocietyWeb-STAGE | Staging web app (B1) | $54.75/mo |
| ModelSocietyWeb | WebJobs for Prod/Stage (B1) | $54.75/mo |

### Databases
- **Production**: ModelSociety_PROD, ModelSocietyErrors_PROD
- **Staging**: ModelSociety_STAGE, ModelSocietyErrors_STAGE

## Statistics (2020-2022)

| Metric | 2020 | 2021 | 2022 |
|--------|------|------|------|
| Confirmed Members | 5,767 | 6,230 | 6,460 |
| Active Members | 5,137 | 5,565 | 5,792 |
| Fan Accounts | 21,078 | 24,586 | 30,056 |
| Active Fans | 20,573 | 23,890 | 29,148 |
| Total Images | 161,749 | 187,965 | 214,248 |

## Repository

- Main repo: https://github.com/ModelSociety/modelsociety-community
- Secrets repo: https://github.com/ModelSociety/secrets (restricted access)
