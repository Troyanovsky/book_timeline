# Chronos Books - Historical Timeline

An interactive timeline visualization of historical books and their corresponding time periods.

## Features

- Interactive timeline showing books and historical events
- Filter books by country and time period
- Zoom in/out functionality
- Detailed book information modal
- Color-coded historical periods (wars, political events, eras)

## Tech Stack

- React 19
- TypeScript
- Vite
- D3.js for timeline visualization
- Tailwind CSS for styling
- Lucide React for icons

## Setup and Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

To build the application for production:

```bash
npm run build
```

The built files will be placed in the `dist/` directory.

## Deployment to GitHub Pages

This project is configured to be deployed to GitHub Pages. Follow these steps:

### Option 1: Using GitHub Actions (Recommended)

1. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. Create a `.github/workflows/deploy.yml` file with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: |
          VITE_GITHUB_PAGES=true npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          enable_jekyll: false
```

### Option 2: Manual Deployment

To manually deploy to GitHub Pages:

1. Build the project with GitHub Pages settings:
```bash
VITE_GITHUB_PAGES=true npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

> Note: Before deploying with `npm run deploy`, make sure your repository is set up correctly in GitHub and that you have enabled GitHub Pages in your repository settings.

## Configuration for GitHub Pages

The project is already configured for GitHub Pages deployment:

- The `vite.config.ts` file supports a `VITE_GITHUB_PAGES` environment variable to set the correct base URL for GitHub Pages
- When `VITE_GITHUB_PAGES=true`, the base URL is set to `/book_timeline/` (adjust this to match your repository name if needed)
- The `package.json` includes deployment scripts using `gh-pages`

## Environment Variables

This project supports the following environment variable:

- `VITE_GITHUB_PAGES` - Set to `true` when building for GitHub Pages to adjust the base URL

## Project Structure

```
book_timeline/
├── components/     # React components
├── utils/          # Utility functions
├── types.ts        # TypeScript type definitions
├── constants.ts    # Data constants (books, periods)
├── App.tsx         # Main application component
├── index.html      # HTML entry point
└── ...             # Other configuration files
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Run tests (if applicable)
5. Submit a pull request