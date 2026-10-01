# asterixorobelix.github.io — Quick Reference

## Tech Stack

- **Generator:** Jekyll 3.x (Ruby-based)
- **Theme:** Hydeout v3.6.0
- **Markdown:** Kramdown parser
- **Syntax Highlighting:** Rouge

## Key Directories

- `_posts/` — Blog posts (YYYY-MM-DD-Title.md)
- `_layouts/` — Templates (default, post, page, category, standalone)
- `_includes/` — Partials (sidebar, head, post-meta)
- `_sass/hydeout/` — SASS modules
- `category/` — Category pages
- `commutecheck/` — Redirect to the canonical Commute Check site, https://commutecheck.vercel.app/ (do not rebuild a landing page here)

## Commands

```bash
bundle install    # Install dependencies
jekyll serve      # Local development
jekyll build      # Build for production
```
