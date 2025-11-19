# Product Requirements Document (PRD)

## Overview
A static web page visualizing the historical settings of books to enhance readers' understanding of their historical context.

## User Interface (UI)
The UI presents a visually engaging timeline, similar to a Gantt chart, where each book functions as a task spanning a specific duration.

- **Horizontal Timeline:** Scrollable timeline extending from the earliest to the latest selected book.
- **Vertical Organization:** Books are displayed row by row, grouped by country when books from multiple countries are selected.
- **Contextual Rows:** 
    - The very top is time (year)
    - The top row for each country features major historical periods and events, providing essential context.
- **Book Timeblocks:**
    - Display basic information (title, author) for easy scanning.
    - Clicking a timeblock opens a modal with detailed book information.
- **Search and Filter:** A search bar and filter controls to quickly find books by title, author, or other attributes.
- **Responsive Design:** The layout will adapt to various screen sizes, ensuring a seamless experience on desktop and mobile devices.

## Features
- **Book Database:** A static database of books, including title, author, description, country, story start/end dates, publication date and external links.
- **Country Database:** A static database of major historical periods for various countries, used for contextual display.
- **Static Resources:** Both databases are static resources, committable to GitHub, supporting hosting as a GitHub static site.
- **Interactive Selection:** Users can select books from the database to add, visualize, and compare on the timeline.