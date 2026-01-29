# asterixorobelix.github.io - Development Guidelines

## Project Overview
Personal blog and portfolio site built with Jekyll, hosted on GitHub Pages.

## Tech Stack
- **Generator:** Jekyll 3.x (Ruby-based)
- **Theme:** Hydeout v3.6.0
- **Markdown:** Kramdown parser
- **Syntax Highlighting:** Rouge
- **Deployment:** GitHub Pages (auto-deploy from master)

## Key Directories
```
/
├── _posts/              # Blog posts (YYYY-MM-DD-Title.md)
├── _layouts/            # Templates (default, post, page, category, standalone)
├── _includes/           # Partials (sidebar, head, post-meta)
├── _sass/hydeout/       # SASS modules (_variables.scss, _layout.scss)
├── category/            # Category pages (Software, Machines, Objects)
├── commutecheck/        # Product landing page (standalone layout)
└── _config.yml          # Jekyll configuration
```

## Content Categories
1. **Software** - Development topics (Android, iOS, Kotlin, Flutter)
2. **Machines** - Hardware (3D printers, CNC, laser)
3. **Objects** - Physical/craft projects

## Key Commands
```bash
# Local development
bundle install
jekyll serve

# Build for production
jekyll build
```

## Key Patterns
- **Front Matter:** layout, title, tags, category
- **Standalone Layout:** For product pages (no sidebar)
- **Sidebar Navigation:** Auto-populates from category/ and sidebar_link pages
- **Theme Customization:** SASS variables in _sass/hydeout/_variables.scss

## Configuration (_config.yml)
- markdown: kramdown
- highlighter: rouge
- paginate: 5
- plugins: jekyll-feed, jekyll-gist, jekyll-paginate

## Deployment
- Push to master → auto-deploy to GitHub Pages
- Live URL: https://asterixorobelix.github.io
