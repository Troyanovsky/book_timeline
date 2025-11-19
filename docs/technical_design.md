# Technical Design

## 1. High-Level Design & Technology Stack

The application will be a **Single Page Application (SPA)** built with modern frontend technologies, ensuring all operations happen client-side and the final output is a set of static files (HTML, CSS, JS) that can be easily deployed on GitHub Pages.

*   **Frontend Framework:** **React**
    *   **Why:** Its component-based architecture is perfect for building a modular and interactive UI. The vast ecosystem provides libraries for almost any required feature, and its performance is excellent for this scale.
*   **Build Tool:** **Vite**
    *   **Why:** Vite offers a lightning-fast development server and an optimized build process that bundles the code into efficient static assets, which is exactly what's needed for GitHub Pages.
*   **UI & Timeline:**
    *   **Timeline/Gantt:** **vis-timeline**
        *   **Why:** It is a powerful and flexible library specifically designed for creating interactive timelines. It supports grouping, custom item rendering, and zooming/panning, which directly map to the PRD requirements. Building this from scratch would be time-intensive.
    *   **General UI Components:** **Material-UI (MUI)**
        *   **Why:** To ensure a "visually engaging" and responsive design, MUI provides a rich set of pre-built, production-ready components like Modals, Buttons, and Form Controls, along with a robust theming system.
*   **Data Management:** **Static JSON Files**
    *   **Why:** As required, the book and history data will be stored in `JSON` files (`/public/data/books.json`, `/public/data/history.json`). This approach is simple, serverless, and fits the static site model perfectly.
*   **Styling:** **Emotion**
    *   **Why:** It is the default styling engine for MUI and allows for powerful, scoped, and dynamic styling directly within React components.

## 2. Detailed Architecture

### a. Directory Structure

A standard Vite + React project structure will be used to keep the codebase organized.

```
/
├── docs/
│   ├── PRD.md
│   └── technical_design.md
│   └── implementation_plan.md
├── public/
│   └── data/
│       ├── books.json
│       └── history.json
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Timeline.jsx
│   │   ├── BookDetailsModal.jsx
│   │   └── SearchAndFilter.jsx
│   ├── services/
│   │   └── dataService.js
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
└── vite.config.js
```

### b. Data Models

*   **`books.json`**: An array of book objects.
    ```json
    [
      {
        "id": "unique-book-id-1",
        "title": "Les Misérables",
        "author": "Victor Hugo",
        "country": "France",
        "startDate": "1815-01-01", // the time that the story in the book starts
        "endDate": "1832-06-06", // the time that the story in the book ends
        "publicationDate": "1862", // the time when the book was first published
        "description": "A novel about justice, injustice, and redemption in 19th-century France.",
        "link": "https://en.wikipedia.org/wiki/Les_Mis%C3%A9rables"
      }
    ]
    ```
*   **`history.json`**: An object where keys are country names, containing arrays of historical events.
    ```json
    {
      "France": [
        {
          "id": "french-rev-1",
          "name": "French Revolution",
          "startDate": "1789-05-05",
          "endDate": "1799-11-09",
          "type": "background"
        }
      ]
    }
    ```

### c. Component & Data Flow

1.  **`main.jsx`**: Renders the main `App` component.
2.  **`App.jsx`**:
    *   On initial load, it calls `dataService.js` to fetch `books.json` and `history.json`.
    *   Manages the application's primary state: the full list of books, active filters (search term, country, etc.), and the currently selected book for the modal.
    *   Passes the filtered data down to the `Timeline` component.
    *   Renders the `SearchAndFilter` and `Timeline` components.
3.  **`SearchAndFilter.jsx`**:
    *   Contains input fields for search and filters.
    *   On user input, it calls state update functions passed down from `App.jsx` to filter the book list.
4.  **`Timeline.jsx`**:
    *   Receives the filtered list of books and all historical events as props.
    *   Initializes the `vis-timeline-graph2d` instance.
    *   **Groups:** It creates groups for each country.
    *   **Items:** It maps the book and history data into the format required by the timeline library. Historical events will be rendered as background items, while books will be rendered as range items.
    *   Handles the `click` event on book items to notify `App.jsx` to open the details modal.
5.  **`BookDetailsModal.jsx`**:
    *   A simple presentational component that receives a book object and displays its details. Its visibility is controlled by state in `App.jsx`.

## 3. Standards & Tooling

*   **Code Quality:** **ESLint** and **Prettier** will be configured to enforce a consistent code style and catch common errors automatically.
*   **Version Control:** **Git**. All static assets, including the JSON databases, will be committed to the repository.
*   **Deployment:** A simple GitHub Actions workflow will be created to build the Vite project and deploy the resulting `dist` folder to the `gh-pages` branch, automating the release process.
