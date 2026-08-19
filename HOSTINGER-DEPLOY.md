# Hostinger deployment

## Build

Run `pnpm install` and then `pnpm build`.

## Upload with File Manager

Upload the **contents** of `dist/` to the domain's `public_html/` directory.
Do not upload the `dist` folder as an extra nested directory.

The build includes `.htaccess`, which routes React URLs such as `/reviews/...`
back to `index.html` while preserving real assets, `robots.txt`, and `sitemap.xml`.

## Git deployment

If Git deployment is enabled in hPanel, connect the GitHub repository, select
the `main` branch, and use these build settings:

- Install command: `pnpm install --frozen-lockfile`
- Build command: `pnpm build`
- Output directory: `dist`

After deployment, connect the domain, enable SSL, and verify that a nested
review URL opens directly without returning a 404.
