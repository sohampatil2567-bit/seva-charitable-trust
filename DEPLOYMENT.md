# Git and Vercel deployment

This is a static React + Vite site. Vercel builds the prerendered routes into `dist/` using the existing `vercel.json` configuration.

## Build locally

Requirements: Node.js 22.13 or newer and pnpm 11. From the project root:

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm typecheck
pnpm build
```

The deployable files are written to `dist/`. No environment variables are required for the current site.

## Push to a Git repository

Create an empty repository on GitHub/GitLab/Bitbucket, then from this folder:

```sh
git add -A
git commit -m "Prepare SEVA Charitable Trust website for deployment"
git branch -M main
git remote add origin <your-repository-url>
git push -u origin main
```

Git author details should be set to your own name and email before committing, if they are not already configured:

```sh
git config user.name "Your Name"
git config user.email "you@example.com"
```

`node_modules/`, `dist/`, logs, and environment files are excluded by `.gitignore`.

## Deploy with Vercel

### Recommended: connect the Git repository

1. Sign in at <https://vercel.com/> and choose **Add New → Project**.
2. Import the repository you pushed.
3. Keep the detected Vite settings or use: Install command `pnpm install --frozen-lockfile`, Build command `pnpm build`, Output directory `dist`.
4. Deploy. Future pushes to `main` trigger production deployments; other branches create previews.

The repository includes `vercel.json` with those build and output settings. The site has no required environment variables.

### Optional: Vercel CLI

After authenticating with `pnpm dlx vercel login`, run `pnpm dlx vercel` from the project root to create/link a Vercel project and deploy a preview. Run `pnpm dlx vercel --prod` to deploy to production when ready.
