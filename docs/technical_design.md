# Technical Design Document: Historical Book Timeline

## 1. Architecture Overview
The application will be a **Single Page Application (SPA)** built as a static site. It does not require a backend server. All data will be pre-loaded from static JSON files hosted alongside the application bundles.

### Tech Stack
*   **Framework:** React (v18+)
*   **Language:** TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS (for layout and responsiveness)
*   **State Management:** Zustand (lightweight, for managing selected books and timeline settings)
*   **Timeline Math/Logic:** `d3-scale` (to handle Year-to-Pixel conversion) and `date-fns` (for date manipulation).
*   **Deployment:** GitHub Pages (via GitHub Actions).

## 2. Data Structure
Data will be stored in the `/public/data` directory as JSON files.

### 2.1 `countries.json` (Context Database)
This file defines the countries and their historical eras to be displayed in the context rows.
```json
[
  {
    "id": "uk",
    "name": "United Kingdom",
    "eras": [
      { "name": "Victorian Era", "start": 1837, "end": 1901, "color": "#f3e8ff" },
      { "name": "Edwardian Era", "start": 1901, "end": 1910, "color": "#e9d5ff" }
    ]
  }
]
```

### 2.2 `books.json` (Book Database)
```json
[
  {
    "id": "b1",
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "countryId": "uk",
    "startYear": 1811,
    "endYear": 1812,
    "publicationYear": 1813,
    "description": "...",
    "link": "..."
  }
]
```

## 3. Component Design

### 3.1 State Management (Zustand Store)
*   `allBooks`: Array of all available books (loaded from JSON).
*   `selectedBookIds`: Set<String> of IDs currently visualized.
*   `filters`: Object { searchTerm, countryFilter, yearRange }.
*   `timelineSettings`: Object { pixelsPerYear, zoomLevel, viewStartYear, viewEndYear }.
*   `actions`: `addBook`, `removeBook`, `setFilter`, `setZoom`.

### 3.2 Timeline Rendering Strategy
Since `vis-timeline` is excluded, we will implement a **Virtual DOM approach using CSS Absolute Positioning calculated via `d3-scale`**.

1.  **The Canvas:** A scrollable container with `overflow-x: auto`.
2.  **The Scale:** A `scaleLinear` from D3 maps a Year (Input) to a Pixel value (Output).
3.  **Grouping:**
    *   Books are grouped by `countryId`.
    *   Within a country, books require a **"Bin Packing" algorithm** (simple greedy algorithm) to determine vertical offsets. If Book A overlaps with Book B, Book B moves to a new "lane" (sub-row).
4.  **Rendering Layers:**
    *   *Layer 1 (Background):* Grid lines for decades/centuries.
    *   *Layer 2 (Context):* Colored blocks representing historical eras (from `countries.json`).
    *   *Layer 3 (Books):* Clickable blocks positioned at `left: scale(startYear)` with `width: scale(endYear) - scale(startYear)`.

### 3.3 UI Layout
*   **Header:** App Title.
*   **Main Layout (Grid):**
    *   **Left Sidebar (Control Panel):**
        *   Search Input.
        *   Filter Dropdowns.
        *   "Add to Timeline" List (Virtual list if database is large).
        *   Toggle for "Select All".
    *   **Right Panel (Timeline Visualization):**
        *   **Top Axis:** Sticky header showing years.
        *   **Timeline Body:**
            *   **Country Section (Repeats):**
                *   *Header:* Country Name.
                *   *Context Row:* Historical Eras bars.
                *   *Book Rows:* Calculated lanes containing book blocks.

## 4. Detailed Feature Specifications

### 4.1 Search & Filter
*   Filter logic filters the *sidebar list*, not the timeline directly.
*   Search matches against Title, Author, and Country.
*   Books in the sidebar have an "Add/Remove" toggle button.

### 4.2 Timeline Interaction
*   **Zooming:** A slider control changes the `pixelsPerYear` multiplier in the store, triggering a re-render of width/positions.
*   **Modals:** Clicking a book block sets `activeModalBookId`. A React Portal renders the modal overlay.
*   **Responsive:**
    *   *Desktop:* Sidebar visible.
    *   *Mobile:* Sidebar becomes a drawer/bottom sheet; Timeline defaults to current era or scrolls to first selected book.

---

# Implementation Task List

## Phase 1: Project Setup & Infrastructure
- [ ] **Initialize Project:** Create Vite + React + TypeScript project.
- [ ] **Dependencies:** Install `tailwindcss`, `postcss`, `autoprefixer`, `zustand`, `d3-scale`, `lucide-react` (icons), `clsx`.
- [ ] **Tailwind Config:** Setup colors and typography.
- [ ] **CI/CD:** Create `.github/workflows/deploy.yml` for building and deploying to GitHub Pages.

## Phase 2: Data & State
- [ ] **Mock Data:** Create `books.json` (20+ items) and `countries.json` (3+ countries with eras) in `public/data`.
- [ ] **Types:** Define TypeScript interfaces for `Book`, `Country`, `Era`, and `StoreState`.
- [ ] **Data Fetching:** Create a hook/utility to fetch and parse the JSON files on app mount.
- [ ] **Store Setup:** Implement Zustand store with actions for selecting/deselecting books and updating filters.

## Phase 3: The Timeline Engine (Core Logic)
- [ ] **Scale Logic:** Implement a custom hook `useTimelineScale(width, viewStart, viewEnd)` using `d3-scale`.
- [ ] **Packing Algorithm:** Implement a utility function `calculateLanes(books)` that accepts a list of books and returns them with assigned `laneIndex` to prevent visual overlapping.
- [ ] **Timeline Layout Component:** Create the main container with horizontal scrolling.
- [ ] **Time Axis:** Create the sticky top header that renders year ticks based on the current scale.

## Phase 4: Visual Components (The Rendering)
- [ ] **Country Group Component:** Create a component that renders a country header and its children.
- [ ] **Context Row Component:** Render the historical eras (background colored bars) within the Country Group.
- [ ] **Book Block Component:** Create the visual representation of a book (title truncate, dynamic width/position).
- [ ] **Tooltips/Hover:** Add hover states to display full dates/titles.

## Phase 5: Sidebar & Controls
- [ ] **Search Component:** specific input field updating the filter state.
- [ ] **Book List Component:** Render the list of available books.
    - [ ] Implement filtering logic (by text/country).
    - [ ] Add "Checkbox" or "Toggle" to add/remove from timeline.
    - [ ] Differentiate visually between "Selected" and "Unselected" items.

## Phase 6: Interaction & Detail
- [ ] **Book Modal:** Create a Modal component showing Description, Full Dates, and External Links.
- [ ] **Selection Sync:** Ensure removing a book from the Timeline (via 'x' on the block) updates the Sidebar state, and vice versa.
- [ ] **Zoom Controls:** Add `+` / `-` buttons to adjust the timeline width (`pixelsPerYear`).

## Phase 7: Polish & Responsive
- [ ] **Mobile Layout:** Implement a toggle to show/hide the Sidebar on mobile screens.
- [ ] **Empty States:** Design a "Welcome/Empty" state if no books are selected.
- [ ] **Performance Check:** Ensure rendering is smooth with 50+ books (memoize components where necessary).
- [ ] **Documentation:** Update README with instructions on how to add new books to the JSON files.

## Phase 8: Final Review & Ship
- [ ] **Lint & Fix:** Run linter and fix type errors.
- [ ] **Build Test:** Run `npm run build` and preview locally.
- [ ] **Deploy:** Push to main branch to trigger GitHub Actions.