# Chronos Books - Historical Timeline Project Documentation

## Project Overview

Chronos Books is an interactive timeline visualization application built with React 19 and TypeScript. The application displays historical books and their corresponding time periods on an interactive timeline, allowing users to explore the relationship between literature and historical events.

### Key Features
- Interactive timeline showing books and historical events
- Filter books by country and time period
- Zoom in/out functionality
- Detailed book information modal
- Color-coded historical periods (wars, political events, eras)
- Responsive design with search sidebar

### Tech Stack
- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Visualization**: D3.js for timeline rendering
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Package Manager**: npm

## Project Architecture

### Main Components
- **App.tsx**: Main application component that manages state (selected books, zoom level, modal state) and coordinates the UI layout
- **Timeline.tsx**: D3-based component for rendering the interactive timeline with books and historical periods
- **SearchSidebar.tsx**: Sidebar component for searching and selecting books
- **BookModal.tsx**: Modal component for displaying detailed book information

### Data Structure
- **types.ts**: Contains TypeScript interfaces and enums (Book, HistoricalPeriod, CountryCode)
- **constants.ts**: Contains static data arrays for books and historical periods
- **utils/timelineUtils.ts**: Contains functions for processing timeline data, positioning elements, and calculating layouts

### Configuration Files
- **package.json**: Contains dependencies, scripts, and project metadata
- **vite.config.ts**: Vite configuration including GitHub Pages deployment settings
- **tsconfig.json**: TypeScript compiler configuration
- **index.html**: HTML entry point
- **index.tsx**: React DOM entry point

## Building and Running

### Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

### Production Build
```bash
# Build for production
npm run build
```

### GitHub Pages Deployment
The project is configured for GitHub Pages deployment:

```bash
# Build with GitHub Pages settings
VITE_GITHUB_PAGES=true npm run build

# Manual deployment
npm run deploy
```

### Environment Variables
- `VITE_GITHUB_PAGES` - Set to `true` when building for GitHub Pages to adjust the base URL

## Development Conventions

### Code Style
- TypeScript with strict typing
- React functional components with hooks
- Tailwind CSS utility-first styling
- D3.js for data visualization
- Consistent naming conventions (PascalCase for components, camelCase for functions)

### Folder Structure
```
book_timeline/
├── components/     # React components (Timeline, SearchSidebar, BookModal)
├── utils/          # Utility functions (timelineUtils.ts)
├── types.ts        # TypeScript type definitions
├── constants.ts    # Data constants (books, periods)
├── App.tsx         # Main application component
├── index.tsx       # Application entry point
├── index.html      # HTML template
├── vite.config.ts  # Vite build configuration
└── tsconfig.json   # TypeScript configuration
```

### State Management
- Local state management using React useState and useEffect hooks
- Book selection state using Set data structure for efficient operations
- Zoom level management with min/max constraints
- Modal state for detailed book information display

### Data Flow
- Static book and historical period data defined in constants.ts
- Data processing happens in timelineUtils.ts to organize books by country and lane
- Selected books are filtered and passed to the timeline component
- User interactions (clicks, zooming) update state in App component and propagate down

## Key Algorithms and Logic

### Timeline Layout
- Books are arranged in lanes to prevent overlap based on start/end years
- Countries are grouped with separate sections for their books and periods
- X position calculated as (year - minYear) * pixelsPerYear
- Width calculated as (endYear - startYear) * pixelsPerYear with minimum width

### Visualization Features
- Color coding for different historical period types (wars, political events, eras)
- Country-specific book coloring
- Interactive elements with hover effects and click handlers
- Responsive grid system with year markers

## Testing and Quality Assurance

The project includes a comprehensive README with setup instructions and deployment guidelines. The codebase follows modern React best practices with TypeScript type safety. The timeline visualization uses optimized rendering techniques to handle multiple books and periods efficiently.

## Deployment Information

The application is configured for GitHub Pages deployment with the following features:
- Base URL configuration in vite.config.ts
- GitHub Actions workflow support
- Build optimization with code splitting
- Proper asset handling for subdirectory deployment