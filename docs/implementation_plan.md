# Implementation Plan

This plan breaks down the development of the Book Timeline application into clear, sequential tasks.

### Phase 1: Project Setup & Core Dependencies

*   [ ] **Task 1: Initialize Project**
    *   **Objective:** Create a new Vite + React project.
    *   **Tool:** `npm create vite@latest book_timeline -- --template react`
    *   **Success Criteria:** A new React project is created and runs successfully.
*   [ ] **Task 2: Install Dependencies**
    *   **Objective:** Add all necessary libraries.
    *   **Tools:** `npm install`
    *   **Packages:** `vis-timeline-graph2d`, `@mui/material`, `@emotion/react`, `@emotion/styled`.
    *   **Success Criteria:** All dependencies are added to `package.json`.
*   [ ] **Task 3: Setup Project Structure**
    *   **Objective:** Create the directory structure outlined in the technical design.
    *   **Action:** Manually create folders: `public/data`, `src/assets`, `src/components`, `src/services`.
    *   **Success Criteria:** The project directories match the design document.

### Phase 2: Data & Services

*   [ ] **Task 4: Create Mock Data**
    *   **Objective:** Create initial `books.json` and `history.json` files with sample data.
    *   **Action:** Create the two JSON files in `public/data` and populate them with at least 3-4 sample books and a few historical events for 2 different countries.
    *   **Success Criteria:** The JSON files are present and correctly formatted.
*   [ ] **Task 5: Build Data Service**
    *   **Objective:** Create a function to fetch and serve the static data.
    *   **File:** `src/services/dataService.js`
    *   **Action:** Implement a function `fetchData()` that asynchronously fetches both `books.json` and `history.json` and returns them.
    *   **Success Criteria:** The service can be called from `App.jsx` and returns the parsed JSON data.

### Phase 3: UI Development

*   [ ] **Task 6: Basic App Layout**
    *   **Objective:** Set up the main `App.jsx` component to manage state.
    *   **Action:**
        *   In `App.jsx`, use `useState` and `useEffect` to fetch data using the `dataService`.
        *   Store the full book list and filtered list in state.
        *   Render placeholder divs for the `SearchAndFilter` and `Timeline` components.
    *   **Success Criteria:** The app loads data on startup and displays the basic layout.
*   [ ] **Task 7: Implement the Timeline Component**
    *   **Objective:** Render books and historical events on the timeline.
    *   **File:** `src/components/Timeline.jsx`
    *   **Action:**
        *   Pass data and groups to the component.
        *   Initialize `vis-timeline-graph2d` with the data.
        *   Configure groups by country.
        *   Render historical events as `background` items and books as `range` items.
    *   **Success Criteria:** A basic, non-interactive timeline appears with the correct data.
*   [ ] **Task 8: Implement Search and Filter**
    *   **Objective:** Allow users to filter the books displayed on the timeline.
    *   **File:** `src/components/SearchAndFilter.jsx`
    *   **Action:**
        *   Add a text input for searching by title/author.
        *   Create a callback function in `App.jsx` to handle filter changes and update the filtered book list.
        *   Pass the callback to this component.
    *   **Success Criteria:** Typing in the search bar updates the timeline to show only matching books.
*   [ ] **Task 9: Implement the Book Details Modal**
    *   **Objective:** Show detailed information when a user clicks a book.
    *   **File:** `src/components/BookDetailsModal.jsx`
    *   **Action:**
        *   Create a state in `App.jsx` to hold the `selectedBook` and modal visibility.
        *   Add an `onClick` handler to the timeline items that updates this state.
        *   Create the modal component using MUI's `Modal`.
        *   Display all relevant book details inside the modal.
    *   **Success Criteria:** Clicking a book on the timeline opens a modal with its details.

### Phase 4: Styling & Finalization

*   [ ] **Task 10: Responsive Design**
    *   **Objective:** Ensure the application is usable on mobile devices.
    *   **Action:** Use MUI's grid system and responsive helpers to adjust the layout for smaller screens. Test on various viewport sizes.
    *   **Success Criteria:** The timeline is scrollable and the UI is legible on mobile.
*   [ ] **Task 11: Theming and Styling**
    *   **Objective:** Apply a consistent and visually appealing theme.
    *   **Action:**
        *   Customize the MUI theme (colors, typography).
        *   Add custom styles to timeline items and other components for a polished look.
    *   **Success Criteria:** The application's visual design is cohesive and professional.
*   [ ] **Task 12: Deployment Setup**
    *   **Objective:** Automate deployment to GitHub Pages.
    *   **Action:** Create a GitHub Actions workflow file (`.github/workflows/deploy.yml`) that on push to `main`, builds the project and deploys the `dist` folder to the `gh-pages` branch.
    *   **Success Criteria:** Pushing to the main branch triggers a successful deployment.
